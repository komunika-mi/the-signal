// Ambil berita ekonomi terbaru dari news sitemap tvOneNews,
// lalu tarik isi tiap artikel sebagai bahan mentah untuk dirangkum.
// Script ini TIDAK menulis artikel — hanya mengumpulkan bahan.
import { get, retry, stripTags, log, cariFotoUtama, dijalankanLangsung } from './lib.mjs';

const SITEMAP = 'https://www.tvonenews.com/sitemap/news/news-sitemap.xml';

// rubrik yang dianggap ekonomi di tvOneNews
const RUBRIK = /\/(ekonomi|bisnis)\//i;

export async function ambilDaftarBerita(maks = 12) {
  const xml = await retry(() => get(SITEMAP, { timeout: 30000 }));

  const items = [];
  const re = /<url>([\s\S]*?)<\/url>/g;
  let m;
  while ((m = re.exec(xml))) {
    const blok = m[1];
    const loc = (blok.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    if (!loc || !RUBRIK.test(loc)) continue;
    const judul = (blok.match(/<news:title>([\s\S]*?)<\/news:title>/) || [])[1];
    const tgl = (blok.match(/<news:publication_date>([^<]+)<\/news:publication_date>/) || [])[1];
    const kw = (blok.match(/<news:keywords>([\s\S]*?)<\/news:keywords>/) || [])[1] || '';
    if (!judul || !tgl) continue;
    items.push({
      url: loc,
      judulAsli: stripTags(judul),
      terbit: tgl,
      keywords: stripTags(kw).split(',').map(s => s.trim()).filter(Boolean).slice(0, 6),
    });
  }

  items.sort((a, b) => new Date(b.terbit) - new Date(a.terbit));
  log('sitemap: ' + items.length + ' artikel ekonomi/bisnis ditemukan');
  return items.slice(0, maks);
}

export async function ambilIsiArtikel(item) {
  const html = await retry(() => get(item.url, { timeout: 30000 }), 2);

  // ringkasan resmi dari meta description
  const ogd = html.match(/property=["']og:description["'][^>]*content=["']([^"']{20,})["']/i)
    || html.match(/name=["']description["'][^>]*content=["']([^"']{20,})["']/i);

  // paragraf isi
  const scope = (html.match(/<div[^>]*class=["'][^"']*(article-content|detail-content|content-detail|body-content|read__content)[^"']*["'][\s\S]*?<\/article>/i)
    || html.match(/<article[\s\S]*?<\/article>/i) || [html])[0];

  // Paragraf dipecah DUA tahap: per tag <p>, lalu per <br> di dalamnya.
  //
  // Tahap kedua wajib, bukan kehati-hatian berlebihan. tvOne kadang menaruh
  // SELURUH badan berita di dalam satu tag <p> tunggal, dengan antar-paragraf
  // dipisah <br><br>. Kalau hanya menghitung tag <p>, artikel seperti itu
  // terbaca sebagai satu paragraf, lalu ditolak penjaga "isi tipis" di
  // update-all.mjs yang mensyaratkan minimal tiga paragraf.
  //
  // Terjadi 14 Agustus 2026 dan menghentikan berita seharian: dari 49 artikel
  // ekonomi di sitemap tvOne, cuma satu yang belum kita punya, dan yang satu
  // itu justru ditolak karena hal ini. Artikelnya sendiri 2.789 huruf dengan
  // 20 pemisah <br>, sama sekali tidak tipis. Pemiliknya yang menyadari
  // beritanya tidak berganti.
  const potongan = [];
  for (const blok of scope.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
    for (const bagian of blok[1].split(/(?:<br\s*\/?>\s*){1,}/i)) {
      potongan.push(stripTags(bagian));
    }
  }

  const paragraf = potongan
    .filter(t => t.length > 60 && !/baca juga|simak juga|tonton juga|advertisement|gulir untuk/i.test(t))
    .slice(0, 12);

  return {
    ...item,
    ringkasanResmi: ogd ? stripTags(ogd[1]) : '',
    isi: paragraf.join('\n\n').slice(0, 6000),
    jumlahParagraf: paragraf.length,
    // Foto asli dari artikel sumber. Kalau ada, ini yang dipakai dan ilustrasi
    // AI tidak perlu dibuat. Kreditnya wajib ikut, dan label "Ilustrasi AI"
    // harus hilang di artikel yang memakainya.
    fotoSumber: cariFotoUtama(html, { asal: item.url }),
    kreditFoto: 'tvOneNews',
  };
}

// dijalankan langsung: tampilkan hasil untuk pengecekan manual
if (dijalankanLangsung(import.meta.url)) {
  const daftar = await ambilDaftarBerita(6);
  for (const it of daftar) {
    const full = await ambilIsiArtikel(it);
    log('-', full.judulAsli.slice(0, 65));
    log('   paragraf:', full.jumlahParagraf, '| chars:', full.isi.length);
  }
}
