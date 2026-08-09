// Ambil video ekonomi terbaru dari kanal YouTube resmi tvOneNews.
// Pakai RSS resmi YouTube: gratis, tanpa API key.
import { get, retry, stripTags, log } from './lib.mjs';

const CHANNEL_ID = 'UCER4rvDnRBPr_ncYW4UCZjg'; // @tvOneNews
const FEED = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + CHANNEL_ID;

// Pra-saring kata kunci yang KHAS ekonomi saja. Kata umum seperti "harga",
// "uang", "emas", atau "bank" sengaja tidak dipakai sendirian karena sering
// muncul di berita kriminal. Keputusan akhir tetap di tangan Claude.
const EKONOMI = new RegExp([
  'ekonomi', 'perekonomian', 'rupiah', 'inflasi', 'deflasi', 'saham', 'bursa', 'ihsg',
  'investasi', 'investor', 'emiten', 'bbm', 'pertamina', 'pajak', 'umkm', 'apbn', 'apbd',
  'anggaran', 'impor', 'ekspor', 'bea cukai', 'tarif dagang', 'bumn', 'danantara',
  'kripto', 'bitcoin', 'subsidi', 'menkeu', 'menteri keuangan', 'suku bunga',
  'nilai tukar', 'daya beli', 'bank indonesia', 'ojk', 'bank sentral', 'properti',
  'perdagangan', 'pertumbuhan ekonomi', 'upah minimum', 'ketenagakerjaan', 'phk',
  'pasar modal', 'reksa dana', 'obligasi', 'devisa', 'neraca dagang', 'pdb',
  'harga pangan', 'harga beras', 'harga emas', 'sembako', 'bulog', 'kadin',
].join('|'), 'i');

export async function ambilVideo(maks = 15) {
  const xml = await retry(() => get(FEED, { timeout: 25000 }));

  const entri = [];
  const re = /<entry>([\s\S]*?)<\/entry>/g;
  let m;
  while ((m = re.exec(xml))) {
    const b = m[1];
    const id = (b.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
    const judul = (b.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    const terbit = (b.match(/<published>([^<]+)<\/published>/) || [])[1];
    const desk = (b.match(/<media:description>([\s\S]*?)<\/media:description>/) || [])[1] || '';
    if (!id || !judul) continue;
    entri.push({
      id,
      judulAsli: stripTags(judul),
      terbit,
      deskripsi: stripTags(desk).slice(0, 800),
    });
  }

  // Petunjuk awal saja. Penyaringan sesungguhnya dilakukan Claude di rewrite.mjs,
  // karena kata kunci gampang keliru: berita kriminal soal emas atau penyelundupan
  // ikut tertangkap kalau hanya mengandalkan regex.
  entri.forEach(e => { e.dugaanEkonomi = EKONOMI.test(e.judulAsli + ' ' + e.deskripsi); });
  const dugaan = entri.filter(e => e.dugaanEkonomi).length;
  log('youtube: ' + entri.length + ' video terbaru (' + dugaan + ' terindikasi ekonomi, akan dicek Claude)');
  return entri.slice(0, maks);
}

if (import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const v = await ambilVideo();
  v.forEach(x => log('-', x.id, '|', x.judulAsli.slice(0, 70)));
  if (!v.length) log('CATATAN: tidak ada video ekonomi di 15 video terbaru hari ini.');
}
