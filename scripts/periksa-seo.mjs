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
// Itulah kenapa kekosongan news-sitemap diperiksa SILANG dengan feed artikel,
// bukan dinilai sendirian.
//
// SEJAK 27 NOVEMBER 2026 sebagian besar halaman sengaja di luar Google lewat
// meta googlebot noindex (aturannya di masuk-google.mjs). Bing dan mesin jawab
// tetap mengindeksnya. Karena itu pemeriksaan di sini membedakan dua meta:
// robots noindex (menutup SEMUA mesin, hampir selalu kerusakan) dan googlebot
// noindex (hanya Google, wajib ada pada halaman di luar Google). Sitemap pun
// kini hanya memuat halaman untuk Google, jadi jumlahnya ratusan, bukan ribuan.
import { BASE, log } from './lib.mjs';
import { GA4_ID, VERIFIKASI_GSC } from './analitik.mjs';
import { masukGoogle } from './masuk-google.mjs';

const NOINDEX_ROBOTS = /<meta name="robots" content="[^"]*noindex/i;
const NOINDEX_GOOGLE = /<meta name="googlebot" content="[^"]*noindex/i;

// Google menolak entri news sitemap yang lebih tua dari 2 hari.
//
// Angkanya BUKAN 48 + sedikit, dan alasannya sering terlewat: berkasnya
// disaring saat BUILD, tapi diperiksa saat CEK. build-pages.mjs memasukkan
// artikel sampai 48 jam pada saat ia berjalan, lalu berkas itu diam di
// tempatnya sampai build berikutnya. Umur entri saat diperiksa karena itu
// 48 jam DITAMBAH jarak ke build terakhir.
//
// Versi sebelumnya 50, dengan kelonggaran dua jam yang diniatkan untuk
// selisih jam runner saja. Jarak antar-build tidak pernah ikut dihitung,
// jadi setiap jeda build lebih dari dua jam menyalakan merah palsu. Itu
// yang terjadi 30 Agustus 2026: idx.yml (yang biasa membangun ulang tiap
// ~2 jam) mati seharian karena galat lampiran, build jadi jarang, dan
// pemantau ikut merah untuk sesuatu yang tidak rusak.
//
// 62 = 48 (jendela generator) + 12 (jeda build terpanjang yang benar-benar
// terjadi: 11,7 jam, diukur dari 599 commit dalam 21 hari) + 2 (selisih jam,
// niat semula angka lama). Di atas itu memang ada yang salah: entah situsnya
// berhenti dibangun setengah hari, entah penyaring generatornya rusak, dan
// dua-duanya pantas merah.
const BATAS_JAM_BERITA = 62;

let gagal = 0;
const baris = [];

function ok(nama, pesan) {
  baris.push('  ok    ' + nama + (pesan ? ': ' + pesan : ''));
}
function salah(nama, pesan) {
  baris.push('  GAGAL ' + nama + ': ' + pesan);
  gagal++;
}

// BATAS WAKTU WAJIB.
//
// fetch tanpa signal tidak punya batas apa pun: kalau situs atau CDN-nya
// menerima koneksi lalu diam, pemeriksa ini menggantung selamanya. Yang
// terjadi kemudian bukan alarm melainkan job yang ditebas jatah waktunya,
// dan run "cancelled" tidak diperlakukan GitHub seperti run merah. Pemantau
// yang menggantung berhenti memantau tanpa mengabarkan apa pun, dan diamnya
// tidak bisa dibedakan dari sehat.
const BATAS_MS = Number(process.env.PERIKSA_SEO_BATAS_MS || 15000);

async function ambil(jalur) {
  try {
    const r = await fetch(BASE + jalur, {
      redirect: 'follow', signal: AbortSignal.timeout(BATAS_MS),
    });
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
  const { status, teks, galat } = await ambil('/robots.txt');
  if (status !== 200) return salah('robots.txt', 'status ' + status + (galat ? ' (' + galat + ')' : ''));
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
  const { status, teks, galat } = await ambil('/sitemap.xml');
  if (status !== 200) return salah('sitemap.xml', 'status ' + status + (galat ? ' (' + galat + ')' : ''));
  const loc = antara(teks, '<loc>', '</loc>');
  // 50, bukan 100 seperti dulu: sejak 27 November 2026 sitemap hanya memuat
  // halaman untuk Google, sekitar 110 sampai 200 URL. Di bawah 50 berarti
  // ada jenis halaman yang hilang utuh, misalnya semua rubrik atau peristiwa.
  if (loc.length < 50) return salah('sitemap.xml', 'cuma ' + loc.length + ' url, terlalu sedikit');
  const asing = loc.filter(u => !u.startsWith(BASE + '/'));
  if (asing.length) return salah('sitemap.xml', asing.length + ' url bukan milik ' + BASE);
  // Saringan masuk-google rusak = ribuan halaman otomatis kembali diajukan ke
  // Google lewat pintu yang paling dipercayainya.
  const luar = loc.filter(u => !masukGoogle(u));
  if (luar.length) {
    salah('sitemap.xml', luar.length + ' url seharusnya di luar Google, contoh: ' + luar[0]);
    return loc;
  }
  ok('sitemap.xml', loc.length + ' url, semuanya halaman untuk Google');
  return loc;
}

// ---------- news sitemap ----------
//
// Dua kegagalan yang berbeda sifatnya:
//   1. berkasnya rusak atau tidak terjangkau  -> selalu merah
//   2. isinya tidak cocok dengan artikel yang boleh masuk Google -> merah.
//      Sejak 27 November 2026 berkas ini hanya memuat artikel untuk Google
//      (masuk-google.mjs), jadi KOSONG adalah keadaan biasa. Yang diperiksa
//      dua arah: artikel di luar Google tidak boleh ada di sini, dan artikel
//      untuk Google yang terbit dalam 48 jam (menurut feed artikel) wajib ada.
//      Akhir pekan yang sepi tidak membuat merah, karena dua-duanya tetap benar.
async function periksaNewsSitemap(locUtama) {
  const { status, teks, galat } = await ambil('/news-sitemap.xml');
  if (status !== 200) return salah('news-sitemap.xml', 'status ' + status + (galat ? ' (' + galat + ')' : ''));
  if (!teks.includes('sitemap-news/0.9')) {
    return salah('news-sitemap.xml', 'namespace news tidak ada, Google akan mengabaikannya');
  }
  const tanggal = antara(teks, '<news:publication_date>', '</news:publication_date>');
  const judul = antara(teks, '<news:title>', '</news:title>');
  const loc = antara(teks, '<loc>', '</loc>');

  const luar = loc.filter(u => !masukGoogle(u));
  if (luar.length) {
    salah('news-sitemap.xml', luar.length + ' artikel seharusnya di luar Google, contoh: ' + luar[0]);
    return loc;
  }
  const hilang = (await artikelSegarUntukGoogle(locUtama)).filter(u => !loc.includes(u));
  if (hilang.length) {
    salah('news-sitemap.xml', hilang.length + ' artikel untuk Google terbit dalam 48 jam ' +
      'tapi tidak ada di sini, pembangkitnya rusak. Contoh: ' + hilang[0]);
    return loc;
  }
  if (!tanggal.length) {
    ok('news-sitemap.xml', 'kosong, dan memang tidak ada artikel untuk Google yang terbit dalam 2 hari');
    return loc;
  }

  // Mulai dari sini daftar loc SELALU dikembalikan, merah atau tidak.
  //
  // Dulu tiap cabang merah mengembalikan undefined, dan itu menyeret
  // pemeriksaan artikel ikut jatuh: tanpa daftar ini periksaArtikel memakai
  // cadangannya, yaitu url TERAKHIR di sitemap utama, yang kebetulan artikel
  // Juli tanpa jam. Hasilnya satu kerusakan tercetak sebagai dua, dan yang
  // kedua menuding artikel yang sama sekali tidak bersalah. Persis jebakan
  // yang sudah ditulis di komentar periksaArtikel, cuma lewat pintu lain.
  //
  // Isi berkasnya sendiri tetap sah dibaca meski salah satu entrinya basi:
  // loc[0] tetap artikel TERBARU, dan itu yang memang mau diperiksa.
  const tanpaZona = tanggal.filter(t => !berzona(t));
  if (tanpaZona.length) {
    salah('news-sitemap.xml',
      tanpaZona.length + ' tanggal tanpa zona waktu, contoh: ' + tanpaZona[0]);
    return loc;
  }
  const batas = Date.now() - BATAS_JAM_BERITA * 3600 * 1000;
  const basi = tanggal.filter(t => new Date(t).getTime() < batas);
  if (basi.length) {
    salah('news-sitemap.xml',
      basi.length + ' entri lebih tua dari ' + BATAS_JAM_BERITA + ' jam, Google menolaknya');
    return loc;
  }
  if (judul.length !== tanggal.length) {
    salah('news-sitemap.xml', 'jumlah judul dan tanggal tidak sama');
    return loc;
  }
  ok('news-sitemap.xml', tanggal.length + ' entri, semuanya dalam ' + BATAS_JAM_BERITA + ' jam');
  return loc;
}

// Dipakai pemeriksaan silang di atas. Feed artikel dan news-sitemap ditulis
// build yang SAMA, dan pubDate feed adalah tanggal terbit yang sama dengan
// yang disaring news-sitemap. Artikel yang di feed masih di bawah 48 jam
// karena itu pasti juga di bawah 48 jam saat build, jadi kalau ia masuk
// Google (tercantum di sitemap utama), ia wajib ada di news-sitemap.
//
// Dulu yang dipakai lastmod artikel di sitemap utama. Itu tidak bisa lagi:
// artikel kini hampir semuanya di luar sitemap, dan lastmod artikel yang
// diperbarui ikut bergeser walau tanggal terbitnya tetap.
async function artikelSegarUntukGoogle(locUtama) {
  if (!locUtama) return [];
  const { status, teks } = await ambil('/berita-feed.xml');
  if (status !== 200) return [];
  const diSitemap = new Set(locUtama);
  const batas = Date.now() - 48 * 3600 * 1000;
  return teks.split('<item>').slice(1)
    .map(i => ({ link: antara(i, '<link>', '</link>')[0], terbit: Date.parse(antara(i, '<pubDate>', '</pubDate>')[0] || '') }))
    .filter(x => x.link && x.terbit > batas && diSitemap.has(x.link))
    .map(x => x.link);
}

// ---------- beranda ----------
async function periksaBeranda() {
  const { status, teks, galat } = await ambil('/');
  if (status !== 200) return salah('beranda', 'status ' + status + (galat ? ' (' + galat + ')' : ''));
  // Dulu cuma mencari 'content="noindex"' persis, yang tidak menangkap
  // 'content="noindex, follow"', bentuk yang justru dipakai situs ini.
  if (NOINDEX_ROBOTS.test(teks)) return salah('beranda', 'ber-noindex robots, tertutup untuk semua mesin');
  if (NOINDEX_GOOGLE.test(teks)) return salah('beranda', 'ber-noindex googlebot, tertutup untuk Google');
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

// ---------- satu artikel, diambil dari feed supaya selalu yang nyata ----------
async function periksaArtikel(locUtama, locBerita) {
  // Yang diperiksa artikel TERBARU, diambil dari feed artikel yang memuat
  // SEMUA artikel, terbaru dulu. Sebelum 27 November 2026 diambil dari news
  // sitemap, tapi berkas itu kini hanya berisi artikel untuk Google dan
  // biasanya kosong.
  //
  // Versi pertama mengambil url terakhir di sitemap utama, dan itu keliru:
  // yang terambil justru artikel Juli, salah satu dari 64 terbitan awal yang
  // tersimpan tanpa jam. Pemantau langsung merah pada jalan pertama untuk
  // sesuatu yang bukan kerusakan. Artikel lama memang begitu, dan memberinya
  // jam karangan berarti memalsukan presisi yang tidak kita punya; schema.org
  // pun menerima tanggal tanpa jam. Yang benar-benar menentukan urutan di
  // Google News adalah terbitan baru, dan itu yang wajib berzona.
  const feed = await ambil('/berita-feed.xml');
  const dariFeed = feed.status === 200
    ? antara(feed.teks.split('<item>').slice(1).join(''), '<link>', '</link>') : [];
  const dariBerita = (locBerita || []).filter(u => u.includes('/berita/'));
  const dariSitemap = (locUtama || []).filter(u => u.includes('/berita/'));
  const pilih = dariFeed[0] || dariBerita[0] || dariSitemap[dariSitemap.length - 1];
  if (!pilih) return salah('artikel', 'tidak ada url artikel untuk diperiksa');
  const jalur = pilih.slice(BASE.length);

  const { status, teks, galat } = await ambil(jalur);
  if (status !== 200) return salah('artikel', jalur + ' status ' + status + (galat ? ' (' + galat + ')' : ''));
  // robots noindex menutup Bing dan mesin jawab juga: selalu kerusakan.
  if (NOINDEX_ROBOTS.test(teks)) return salah('artikel', jalur + ' ber-noindex robots, tertutup untuk semua mesin');
  // googlebot noindex wajib ada pada artikel di luar Google, dan wajib TIDAK
  // ada pada artikel yang diperkaya (masuk-google.json).
  const untukGoogle = masukGoogle(jalur);
  if (untukGoogle && NOINDEX_GOOGLE.test(teks)) {
    return salah('artikel', jalur + ' tercatat masuk Google tapi ber-noindex googlebot');
  }
  if (!untukGoogle && !NOINDEX_GOOGLE.test(teks)) {
    return salah('artikel', jalur + ' tanpa noindex googlebot, artikel otomatis terbuka lagi untuk Google');
  }
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
  // Penerbit boleh berupa salinan penuh ATAU rujukan {"@id": ...} ke node
  // organisasi di halaman yang sama. Rujukan itu yang dipakai sekarang, dan
  // pemeriksa ini wajib menelusurinya, bukan menyerah begitu tidak menemukan
  // logo inline: rujukan menggantung, yang menunjuk node tak hadir, justru
  // persis cacat yang perlu ketahuan.
  const penerbit = (() => {
    const p = berita.publisher;
    if (!p) return null;
    if (!p['@id']) return p;
    return objek.find(o => o['@id'] === p['@id']) || null;
  })();
  if (!penerbit) {
    return salah('artikel', jalur + ': publisher menunjuk ' +
      JSON.stringify(berita.publisher && berita.publisher['@id']) +
      ' tapi node itu tidak ada di halaman ini (rujukan menggantung)');
  }
  if (!penerbit.logo || !penerbit.logo.url) {
    return salah('artikel', jalur + ': logo penerbit hilang dari data terstruktur');
  }
  // Gambar yang disebut tapi tidak ada membuat hasil kaya ditolak diam-diam.
  const gambar = [].concat(berita.image || [])[0];
  if (gambar) {
    const r = await fetch(gambar, {
      method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(BATAS_MS),
    }).catch(() => null);
    if (!r || !r.ok) return salah('artikel', jalur + ': gambar utama tidak terjangkau (' + gambar + ')');
  }
  ok('artikel', jalur.split('/').pop() + ': ' + tipe.join(', ') + ', tanggal berzona, gambar ada, ' +
    (untukGoogle ? 'masuk Google' : 'di luar Google (googlebot noindex)'));
}

// ---------- contoh halaman: meta harus cocok dengan aturan ----------
//
// Sitemap bisa benar sementara halamannya salah, atau sebaliknya: keduanya
// dibangkitkan dari aturan yang sama tapi lewat jalan berbeda (head() untuk
// halaman bangkitan, bake-root untuk halaman tulisan tangan seperti
// berita.html). Lima contoh dari sitemap wajib terbuka untuk Google, dan
// berita.html wajib sesuai aturannya sendiri.
async function periksaContoh(locUtama) {
  if (!locUtama || locUtama.length < 2) return;
  // Seperlima, dua perlima, ... dan yang terakhir: tersebar ke beberapa jenis
  // halaman, dan selalu sama untuk sitemap yang sama supaya merahnya bisa diulang.
  const n = locUtama.length;
  const indeks = [1, 2, 3, 4].map(k => Math.floor(k * n / 5)).concat(n - 1);
  const contoh = [...new Set(indeks.map(i => locUtama[i]))].map(u => u.slice(BASE.length));
  for (const jalur of contoh.concat('/berita.html')) {
    const { status, teks, galat } = await ambil(jalur);
    if (status !== 200) return salah('contoh halaman', jalur + ' status ' + status + (galat ? ' (' + galat + ')' : ''));
    if (NOINDEX_ROBOTS.test(teks)) return salah('contoh halaman', jalur + ' ber-noindex robots');
    const harusMasuk = masukGoogle(jalur);
    if (harusMasuk && NOINDEX_GOOGLE.test(teks)) return salah('contoh halaman', jalur + ' di sitemap tapi ber-noindex googlebot');
    if (!harusMasuk && !NOINDEX_GOOGLE.test(teks)) return salah('contoh halaman', jalur + ' di luar Google tapi tanpa noindex googlebot');
  }
  ok('contoh halaman', contoh.length + ' dari sitemap terbuka untuk Google, berita.html sesuai aturan');
}

// ---------- llms.txt dan feed ----------
async function periksaLlms() {
  const { status, teks, galat } = await ambil('/llms.txt');
  if (status !== 200) return salah('llms.txt', 'status ' + status + (galat ? ' (' + galat + ')' : ''));
  if (teks.trim().length < 200) return salah('llms.txt', 'terlalu pendek, isinya ' + teks.trim().length + ' karakter');
  if (!teks.includes(BASE)) return salah('llms.txt', 'tidak menyebut alamat situs');
  ok('llms.txt', teks.trim().length + ' karakter');
}

async function periksaFeed() {
  const { status, teks, galat } = await ambil('/feed.xml');
  if (status !== 200) return salah('feed.xml', 'status ' + status + (galat ? ' (' + galat + ')' : ''));
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
  await periksaContoh(loc);
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
