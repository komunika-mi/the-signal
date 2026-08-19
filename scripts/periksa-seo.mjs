// Memeriksa SEO dan keterbacaan mesin jawab terhadap SITUS HIDUP.
//
// Kenapa terhadap situs hidup dan bukan terhadap repo. Penjaga di
// build-pages.mjs sudah memastikan halaman DIBANGKITKAN benar, dan itu
// menangkap kesalahan kode. Yang tidak bisa dilihatnya adalah segala hal yang
// rusak SESUDAH build: deploy yang gagal separuh, berkas yang tidak ikut
// terunggah, CDN yang menyajikan versi lama, atau robots.txt yang tertimpa.
// Semua itu tidak meninggalkan jejak di repo, dan satu-satunya cara tahu
// adalah menanyakannya langsung ke alamat publik.
//
// Kenapa dipisah dari periksa-kanal.mjs. Yang diukur di sini bukan kesegaran
// isi melainkan APAKAH MESIN MASIH BISA MEMBACA situs ini. Keduanya bisa rusak
// sendiri-sendiri: berita tetap terbit rapi sementara sitemap kosong, atau
// sebaliknya.
//
// PRINSIP AMBANG. Setiap pemeriksaan di sini harus bisa menjawab "kalau ini
// merah, ada yang benar-benar rusak". Hal yang wajar berubah sendiri, seperti
// sepinya berita di akhir pekan, TIDAK boleh membuat merah, karena pemantau
// yang sering berteriak tanpa sebab justru melatih orang mengabaikannya.
// Itulah kenapa kekosongan news-sitemap diperiksa SILANG dengan sitemap utama,
// bukan dinilai sendirian.
import { BASE, log } from './lib.mjs';
import { GA4_ID, VERIFIKASI_GSC } from './analitik.mjs';

// Google menolak entri news sitemap yang lebih tua dari 2 hari. Diberi
// kelonggaran dua jam supaya perbedaan jam runner tidak bikin merah palsu.
const BATAS_JAM_BERITA = 50;

let gagal = 0;
const baris = [];

function ok(nama, pesan) {
  baris.push('  ok    ' + nama + (pesan ? ': ' + pesan : ''));
}
function salah(nama, pesan) {
  baris.push('  GAGAL ' + nama + ': ' + pesan);
  gagal++;
}

async function ambil(jalur) {
  try {
    const r = await fetch(BASE + jalur, { redirect: 'follow' });
    return { status: r.status, teks: await r.text() };
  } catch (e) {
    return { status: 0, teks: '', galat: String(e.message || e) };
  }
}

// Blok ld+json diambil dengan pemotongan teks biasa, bukan regex, supaya
// tidak ada jebakan pada isi yang memuat tanda kutip atau kurung.
function blokJsonLd(html) {
  return html.split('<script type="application/ld+json">').slice(1)
    .map(s => s.split('</script>')[0]);
}

function berzona(s) {
  const t = String(s || '');
  return t.endsWith('Z') || /[+-][0-9]{2}:[0-9]{2}$/.test(t);
}

function antara(teks, buka, tutup) {
  return teks.split(buka).slice(1).map(s => s.split(tutup)[0]);
}

// ---------- robots.txt ----------
//
// Diperiksa bukan sekadar ada, melainkan MASIH MENGIZINKAN apa yang kita
// putuskan izinkan. Berkas ini dibangkitkan build-pages, jadi satu suntingan
// keliru di generator bisa diam-diam menutup pintu untuk seluruh mesin jawab
// dan tidak ada satu pun halaman yang terlihat berubah.
const BOT_WAJIB = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];

async function periksaRobots() {
  const { status, teks } = await ambil('/robots.txt');
  if (status !== 200) return salah('robots.txt', 'status ' + status);
  if (!teks.includes('Sitemap: ' + BASE + '/sitemap.xml')) {
    return salah('robots.txt', 'tidak menyebut sitemap.xml');
  }
  if (!teks.includes('Sitemap: ' + BASE + '/news-sitemap.xml')) {
    return salah('robots.txt', 'tidak menyebut news-sitemap.xml');
  }
  if (teks.includes('Disallow: /\n') || teks.trim().endsWith('Disallow: /')) {
    return salah('robots.txt', 'ada Disallow: / yang memblokir seluruh situs');
  }
  const hilang = BOT_WAJIB.filter(b => !teks.includes('User-agent: ' + b));
  if (hilang.length) {
    return salah('robots.txt', 'bot mesin jawab hilang dari daftar izin: ' + hilang.join(', '));
  }
  ok('robots.txt', 'dua sitemap terdaftar, ' + BOT_WAJIB.length + ' bot mesin jawab diizinkan');
}

// ---------- sitemap utama ----------
async function periksaSitemap() {
  const { status, teks } = await ambil('/sitemap.xml');
  if (status !== 200) return salah('sitemap.xml', 'status ' + status);
  const loc = antara(teks, '<loc>', '</loc>');
  if (loc.length < 100) return salah('sitemap.xml', 'cuma ' + loc.length + ' url, terlalu sedikit');
  const asing = loc.filter(u => !u.startsWith(BASE + '/'));
  if (asing.length) return salah('sitemap.xml', asing.length + ' url bukan milik ' + BASE);
  ok('sitemap.xml', loc.length + ' url');
  return loc;
}

// ---------- news sitemap ----------
//
// Dua kegagalan yang berbeda sifatnya:
//   1. berkasnya rusak atau tidak terjangkau  -> selalu merah
//   2. isinya kosong                          -> merah HANYA kalau sitemap
//      utama membuktikan ada artikel baru dalam dua hari terakhir. Tanpa
//      pemeriksaan silang ini, akhir pekan yang sepi akan berteriak setiap
//      kali padahal tidak ada yang rusak.
async function periksaNewsSitemap(locUtama) {
  const { status, teks } = await ambil('/news-sitemap.xml');
  if (status !== 200) return salah('news-sitemap.xml', 'status ' + status);
  if (!teks.includes('sitemap-news/0.9')) {
    return salah('news-sitemap.xml', 'namespace news tidak ada, Google akan mengabaikannya');
  }
  const tanggal = antara(teks, '<news:publication_date>', '</news:publication_date>');
  const judul = antara(teks, '<news:title>', '</news:title>');
  const loc = antara(teks, '<loc>', '</loc>');

  if (!tanggal.length) {
    const adaBaru = await adaArtikelBaru(locUtama);
    if (adaBaru) {
      return salah('news-sitemap.xml',
        'kosong padahal ada artikel terbit dalam 2 hari terakhir, pembangkitnya rusak');
    }
    ok('news-sitemap.xml', 'kosong, tapi memang tidak ada artikel baru dalam 2 hari');
    return;
  }

  const tanpaZona = tanggal.filter(t => !berzona(t));
  if (tanpaZona.length) {
    return salah('news-sitemap.xml',
      tanpaZona.length + ' tanggal tanpa zona waktu, contoh: ' + tanpaZona[0]);
  }
  const batas = Date.now() - BATAS_JAM_BERITA * 3600 * 1000;
  const basi = tanggal.filter(t => new Date(t).getTime() < batas);
  if (basi.length) {
    return salah('news-sitemap.xml',
      basi.length + ' entri lebih tua dari ' + BATAS_JAM_BERITA + ' jam, Google menolaknya');
  }
  if (judul.length !== tanggal.length) {
    return salah('news-sitemap.xml', 'jumlah judul dan tanggal tidak sama');
  }
  ok('news-sitemap.xml', tanggal.length + ' entri, semuanya dalam ' + BATAS_JAM_BERITA + ' jam');
  return loc;
}

// Dipakai pemeriksaan silang di atas. lastmod artikel di sitemap utama
// memakai tanggal terbitnya, jadi cukup untuk membedakan "sepi" dari "rusak".
async function adaArtikelBaru(locUtama) {
  if (!locUtama) return false;
  const { teks } = await ambil('/sitemap.xml');
  const potong = teks.split('<url>').slice(1);
  const batas = Date.now() - 2 * 24 * 3600 * 1000;
  return potong.some(p => {
    if (!p.includes('/berita/')) return false;
    const m = antara(p, '<lastmod>', '</lastmod>')[0];
    return m && new Date(m + 'T23:59:59+07:00').getTime() >= batas;
  });
}

// ---------- beranda ----------
async function periksaBeranda() {
  const { status, teks } = await ambil('/');
  if (status !== 200) return salah('beranda', 'status ' + status);
  if (teks.includes('content="noindex"')) return salah('beranda', 'ber-noindex');
  if (VERIFIKASI_GSC && !teks.includes(VERIFIKASI_GSC)) {
    return salah('beranda', 'meta verifikasi Search Console hilang, kepemilikan bisa lepas');
  }
  if (GA4_ID && !teks.includes(GA4_ID)) {
    return salah('beranda', 'pengukur GA4 hilang, kunjungan berhenti tercatat');
  }
  if (!teks.includes('rel="canonical"')) return salah('beranda', 'tanpa canonical');

  const blok = blokJsonLd(teks);
  if (!blok.length) return salah('beranda', 'tanpa data terstruktur sama sekali');
  const tipe = [];
  for (const b of blok) {
    try { tipe.push(JSON.parse(b)['@type']); }
    catch { return salah('beranda', 'blok ld+json bukan JSON yang sah'); }
  }
  for (const wajib of ['NewsMediaOrganization', 'WebSite']) {
    if (!tipe.includes(wajib)) return salah('beranda', 'data terstruktur ' + wajib + ' hilang');
  }
  ok('beranda', 'verifikasi + GA4 + canonical + ' + tipe.join(', '));
}

// ---------- satu artikel, diambil dari sitemap supaya selalu yang nyata ----------
async function periksaArtikel(locUtama, locBerita) {
  // Yang diperiksa artikel TERBARU, diambil dari news sitemap yang memang
  // berisi terbitan 48 jam terakhir dan terurut dari yang paling baru.
  //
  // Versi pertama mengambil url terakhir di sitemap utama, dan itu keliru:
  // yang terambil justru artikel Juli, salah satu dari 64 terbitan awal yang
  // tersimpan tanpa jam. Pemantau langsung merah pada jalan pertama untuk
  // sesuatu yang bukan kerusakan. Artikel lama memang begitu, dan memberinya
  // jam karangan berarti memalsukan presisi yang tidak kita punya; schema.org
  // pun menerima tanggal tanpa jam. Yang benar-benar menentukan urutan di
  // Google News adalah terbitan baru, dan itu yang wajib berzona.
  const dariBerita = (locBerita || []).filter(u => u.includes('/berita/'));
  const dariSitemap = (locUtama || []).filter(u => u.includes('/berita/'));
  const pilih = dariBerita[0] || dariSitemap[dariSitemap.length - 1];
  if (!pilih) return salah('artikel', 'tidak ada url artikel untuk diperiksa');
  const jalur = pilih.slice(BASE.length);

  const { status, teks } = await ambil(jalur);
  if (status !== 200) return salah('artikel', jalur + ' status ' + status);
  if (teks.includes('content="noindex"')) return salah('artikel', jalur + ' ber-noindex');
  if (!teks.includes('rel="canonical"')) return salah('artikel', jalur + ' tanpa canonical');

  const blok = blokJsonLd(teks);
  const objek = [];
  for (const b of blok) {
    try { objek.push(JSON.parse(b)); }
    catch { return salah('artikel', jalur + ': blok ld+json bukan JSON yang sah'); }
  }
  const tipe = objek.map(o => o['@type']);
  for (const wajib of ['NewsArticle', 'BreadcrumbList']) {
    if (!tipe.includes(wajib)) return salah('artikel', jalur + ': ' + wajib + ' hilang');
  }
  const berita = objek.find(o => o['@type'] === 'NewsArticle');
  if (!berzona(berita.datePublished)) {
    return salah('artikel', jalur + ': datePublished tanpa zona waktu (' + berita.datePublished +
      '), jam terbitnya akan ditebak UTC dan mundur tujuh jam');
  }
  if (!berita.publisher || !berita.publisher.logo || !berita.publisher.logo.url) {
    return salah('artikel', jalur + ': logo penerbit hilang dari data terstruktur');
  }
  // Gambar yang disebut tapi tidak ada membuat hasil kaya ditolak diam-diam.
  const gambar = [].concat(berita.image || [])[0];
  if (gambar) {
    const r = await fetch(gambar, { method: 'HEAD', redirect: 'follow' }).catch(() => null);
    if (!r || !r.ok) return salah('artikel', jalur + ': gambar utama tidak terjangkau (' + gambar + ')');
  }
  ok('artikel', jalur.split('/').pop() + ': ' + tipe.join(', ') + ', tanggal berzona, gambar ada');
}

// ---------- llms.txt dan feed ----------
async function periksaLlms() {
  const { status, teks } = await ambil('/llms.txt');
  if (status !== 200) return salah('llms.txt', 'status ' + status);
  if (teks.trim().length < 200) return salah('llms.txt', 'terlalu pendek, isinya ' + teks.trim().length + ' karakter');
  if (!teks.includes(BASE)) return salah('llms.txt', 'tidak menyebut alamat situs');
  ok('llms.txt', teks.trim().length + ' karakter');
}

async function periksaFeed() {
  const { status, teks } = await ambil('/feed.xml');
  if (status !== 200) return salah('feed.xml', 'status ' + status);
  const item = teks.split('<item>').length - 1;
  if (item < 1) return salah('feed.xml', 'tanpa satu pun item');
  ok('feed.xml', item + ' item');
}

async function main() {
  log('Memeriksa SEO dan keterbacaan mesin jawab di ' + BASE);
  await periksaRobots();
  const loc = await periksaSitemap();
  const locBerita = await periksaNewsSitemap(loc);
  await periksaBeranda();
  await periksaArtikel(loc, locBerita);
  await periksaLlms();
  await periksaFeed();

  console.log(baris.join('\n'));
  if (gagal) {
    console.error('\n' + gagal + ' pemeriksaan GAGAL. Mesin pencari dan mesin jawab ' +
      'kemungkinan sudah tidak membaca situs ini sebagaimana mestinya.');
    process.exit(1);
  }
  log('semua pemeriksaan lolos');
}

main().catch(e => { console.error(String(e.stack || e)); process.exit(1); });
