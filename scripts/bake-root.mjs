// Memanggang isi beranda dan halaman arsip LANGSUNG ke HTML-nya saat build.
//
// Kenapa ada: sampai 13 Agustus 2026 seluruh isi beranda dirakit JavaScript
// di browser dari articles.js yang sudah 472 KB dan bertambah tiap hari.
// Akibatnya dua arah sekaligus:
//   - mesin pencari dan preview tautan melihat beranda TANPA SATU PUN judul
//     berita, karena HTML-nya cuma kulit kosong berisi div ber-id;
//   - pembaca menatap halaman kosong sampai 136 KB (terkompresi) selesai
//     diunduh dan dieksekusi, baru gambar hero mulai diminta. TTFB servernya
//     0,33 detik, sisanya kita sendiri yang menghambat.
//
// Sekarang bagian artikel dipanggang di sini, di antara penanda
// <!-- generate:NAMA --> ... <!-- /generate:NAMA --> yang tertanam di HTML
// tulisan tangan. Penanda memungkinkan build menimpa isinya berulang kali
// tanpa merusak bagian yang memang ditulis tangan. JavaScript di browser
// tinggal memegang yang harus segar per kunjungan: angka pasar (market.js
// diperbarui tiap 30 menit tanpa build), pencarian, dan modal langganan.
//
// Markup kartu di sini SENGAJA kembar dengan TS.storyCard dan TS.compactRow
// di assets/js/shared.js, karena berita.html masih merender ulang gridnya di
// browser saat pembaca memfilter. Kalau mengubah salah satu, ubah keduanya,
// atau kartu akan berubah bentuk begitu pembaca menyentuh filter.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { nilaiRingkas } from './bps-grafik.mjs';
import { kepalaAnalitik } from './analitik.mjs';
import { SITUS as BASE } from './situs.mjs';
import { NODE_IDENTITAS, halamanKoleksi } from './identitas.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hl = (t) => esc(t).replace(/\[([^\]]+)\]/, '<span class="hl">$1</span>');
const plain = (t) => String(t).replace(/[\[\]]/g, '');
const catSlug = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const urlArtikel = (a) => '/berita/' + a.slug + '.html';
const urlVideo = (v) => '/tayangan/' + v.id + '.html';
const gambar = (a) => '/' + a.image + (a.imageV ? '?v=' + a.imageV : '');
const videoMeta = (v) => v.program === 'tvOneNews' ? 'tvOneNews' : 'tvOneNews &middot; ' + esc(v.program);
const PLAY = '<span class="play-dot"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.55)"/><polygon points="10,7.5 10,16.5 17,12" fill="#fff"/></svg></span>';

// ---------- indeks artikel ramping ----------
//
// Beranda dan berita.html tidak butuh badan artikel: halaman artikelnya
// sendiri sudah statis. Terukur 13 Agustus 2026, field body saja 205 KB dari
// 453 KB (45%), ditambah bahan produksi (fotoAdegan, fotoSumber, takeaway,
// videoCaption) yang tidak pernah disentuh browser. Kartu dan pencarian cuma
// butuh yang di bawah ini. articles.js yang lengkap tetap ada sebagai arsip
// kerja pipeline, tapi tidak lagi dikirim ke pembaca.
const FIELD_INDEKS = ['slug', 'category', 'title', 'deck', 'date', 'image',
  'imageV', 'tags', 'kreditFoto', 'sourceUrl', 'sourceLabel', 'video'];

// BATAS KONSUMEN, bukan batas arsip.
//
// Arsipnya sendiri tidak dibatasi lagi, dan tidak ada artikel yang dihapus.
// Yang dibatasi hanya hal-hal yang benar-benar mahal disajikan sekaligus.
// Angkanya diukur terkompresi pada 19 Agustus 2026: articles-index.js 67 KB
// per 400 artikel, badan berita.html 37 KB per 400.
//
// Indeks klien dipakai kartu beranda dan kotak pencarian, dan diunduh SETIAP
// pengunjung. 400 menjaganya di sekitar 67 KB. Arsip lengkapnya tetap bisa
// ditelusuri lewat halaman arsip yang kini berhalaman, lewat rubrik, topik,
// tema, dan emiten, dan seluruhnya tetap terdaftar di sitemap.
export const MAKS_INDEKS_KLIEN = Number(process.env.SIGNAL_INDEKS_KLIEN || 400);

// Satu halaman arsip. 200 artikel sekitar 19 KB terkompresi.
export const PER_HALAMAN_ARSIP = Number(process.env.SIGNAL_PER_HALAMAN || 200);

export const jumlahHalamanArsip = (n) => Math.max(1, Math.ceil(n / PER_HALAMAN_ARSIP));
export const urlHalamanArsip = (i) => (i <= 1 ? '/berita.html' : '/arsip/' + i + '.html');

// Satu baris arsip, dipakai halaman 1 di berita.html maupun halaman lanjutan
// di /arsip/. Ditaruh di sini supaya bentuknya tidak berselisih antar halaman.
export function barisArsip(a, urlArtikel, esc, plain) {
  return '<li class="arsip-baris"><a href="' + urlArtikel(a) + '">' +
    esc(plain(a.title)) + '</a>' +
    '<span class="arsip-meta num">' + esc(a.date) + '</span></li>';
}

export function tulisIndeksArtikel(ARTICLES) {
  const ramping = ARTICLES.slice(0, MAKS_INDEKS_KLIEN).map(a => {
    const o = {};
    for (const f of FIELD_INDEKS) {
      if (a[f] !== undefined && a[f] !== '' && a[f] !== null) o[f] = a[f];
    }
    return o;
  });
  fs.writeFileSync(path.join(ROOT, 'assets/js/articles-index.js'),
    '// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,\n' +
    '// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -\n' +
    '// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana\n' +
    '// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh\n' +
    '// mengikuti arsip.\n' +
    'var ARTICLES = ' + JSON.stringify(ramping, null, 1) + ';\n', 'utf8');
  return ramping.length;
}

// ---------- kartu (kembar dengan shared.js, lihat catatan di atas) ----------
function kartuCerita(a) {
  return '<article class="story-card">' +
    '<a href="' + urlArtikel(a) + '" class="story-art-link ai-wrap">' +
    '<div class="story-art"><img src="' + gambar(a) + '" alt="' + esc(plain(a.title)) + '" loading="lazy"></div>' +
    (a.kreditFoto
      ? '<span class="foto-tag" style="font-size:9px;padding:2px 7px;">Foto: ' + esc(a.kreditFoto) + '</span>'
      : '<span class="ai-tag">Ilustrasi AI</span>') + '</a>' +
    '<div class="story-cat">' + esc(a.category) + '</div>' +
    '<h3 class="story-title"><a class="story-title-link" href="' + urlArtikel(a) + '">' + hl(a.title) + '</a></h3>' +
    '<p class="story-excerpt">' + esc(a.deck) + '</p>' +
    '<div class="story-meta"><span class="num">' + esc(a.date) + '</span>' +
    '<a href="' + esc(a.sourceUrl) + '" target="_blank" rel="noopener">' +
    (a.sourceLabel === 'IDX' ? 'Sumber: IDX' : a.sourceLabel ? 'Sumber: ' + esc(a.sourceLabel) : 'Sumber: tvOne') + '</a></div>' +
    '</article>';
}

function barisRingkas(a, n) {
  return '<a class="compact-row" href="' + urlArtikel(a) + '">' +
    (n != null ? '<span class="compact-num num">' + (n < 10 ? '0' : '') + n + '</span>' : '') +
    '<span class="compact-body"><span class="compact-title">' + hl(a.title) + '</span>' +
    '<span class="compact-meta">' + esc(a.category) + ' &middot; ' + esc(a.date) + '</span></span></a>';
}

function kartuVideoKecil(v) {
  return '<a class="video-card" href="' + urlVideo(v) + '">' +
    '<span class="video-thumb"><img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="' + esc(v.title) + '" loading="lazy">' +
    PLAY + '</span>' +
    '<span class="video-card-body"><span class="video-card-title">' + esc(v.title) + '</span>' +
    '<span class="video-card-meta">' + videoMeta(v) + '</span></span></a>';
}

// ---------- hero ----------
//
// "Yang perlu kamu tahu" dulu HARDCODE tiga kalimat tentang artikel konsumsi
// rumah tangga, sementara heronya sendiri berganti tiap pembaruan. Jadi poin
// yang tampil bisa membahas berita yang sama sekali lain dari judul di
// atasnya. Sekarang poinnya diambil dari kalimat pertama paragraf-paragraf
// artikel heronya sendiri, dan kalau bahannya kurang, bloknya dihilangkan;
// tidak ada lagi teks pajangan yang salah artikel.
function poinHero(a) {
  return (a.body || []).map(p => {
    const m = String(p).match(/^.*?[.!?](?=\s|$)/);
    return (m ? m[0] : String(p)).trim();
  }).filter(k => k.length > 30 && k.length <= 220).slice(0, 3);
}

function sumberHero(a) {
  if (a.sourceLabel === 'IDX') return 'Sumber: <strong>Keterbukaan Informasi IDX</strong>';
  if (a.sourceLabel) return 'Sumber: <strong>Siaran pers ' + esc(a.sourceLabel) + '</strong>';
  return 'Dirangkum dari <strong>tvOneNews</strong>';
}

function heroHtml(a) {
  const poin = poinHero(a);
  return '<span class="eyebrow">' + esc(a.category) + '</span>' +
    '<h1><a href="' + urlArtikel(a) + '">' + hl(a.title) + '</a></h1>' +
    '<p class="deck">' + esc(a.deck) + '</p>' +
    '<div class="hero-meta">' +
      '<span class="num">' + esc(a.date) + '</span>' +
      '<span>' + sumberHero(a) + '</span>' +
      '<a class="read-link" href="' + urlArtikel(a) + '">Baca versi lengkap &rarr;</a>' +
    '</div>' +
    '<a href="' + urlArtikel(a) + '"><div class="hero-cover ai-wrap">' +
      // Gambar terbesar di atas lipatan = kandidat LCP. fetchpriority tinggi
      // dan TANPA lazy: menunda justru memperlambat metrik yang paling dilihat.
      '<img src="' + gambar(a) + '" alt="' + esc(plain(a.title)) + '" fetchpriority="high">' +
      '<span class="cover-tag">' + esc(a.category) + ' &middot; ' + esc(a.date) + '</span>' +
      (a.kreditFoto
        ? '<span class="foto-tag">Foto: ' + esc(a.kreditFoto) + '</span>'
        : '<span class="ai-tag">Ilustrasi AI</span>') +
    '</div></a>' +
    (poin.length >= 2
      ? '<div class="key-points"><h4>Yang perlu kamu tahu</h4><ul>' +
        poin.map((p, i) => '<li data-n="0' + (i + 1) + '">' + esc(p) + '</li>').join('') +
        '</ul></div>'
      : '');
}

// Ticker: enam artikel terbaru, dan sejak 31 Agustus 2026 BISA DIKLIK.
//
// Sebelumnya judulnya cuma <span>. Isinya artikel sungguhan yang memang ada
// halamannya, jadi menampilkannya sebagai teks mati berarti pembaca membaca
// judul yang menarik lalu harus mencarinya sendiri di daftar berita.
//
// Deretnya digandakan dua kali karena animasinya menggeser -50% lalu
// mengulang; tanpa salinan kedua akan ada celah kosong tiap putaran. Salinan
// kedua itu MURNI HIASAN, jadi ia aria-hidden dan tabindex -1: tanpa itu
// pembaca layar membacakan enam judul yang sama dua kali, dan Tab berhenti
// dua belas kali untuk enam tujuan.
function tickerHtml(ARTICLES) {
  const item = ARTICLES.slice(0, 6);
  let track = '';
  for (let r = 0; r < 2; r++) {
    const kembar = r === 1;
    item.forEach((a, i) => {
      track += '<a href="' + esc(urlArtikel(a)) + '"' +
        (kembar ? ' aria-hidden="true" tabindex="-1"' : '') + '>' +
        esc(plain(a.title)) + '</a>';
      if (i < item.length - 1 || r === 0) track += '<span class="sep">&bull;</span>';
    });
  }
  return track;
}

// Kalimat "Dari mana berita ini datang", dihitung dari sourceLabel seluruh
// arsip. Kembar dengan TS.isiSumber di shared.js; versi panggang ini yang
// dilihat mesin pencari dan pembaca tanpa JavaScript.
const SINGKAT = {
  'Badan Pusat Statistik': 'BPS',
  'Kementerian Perdagangan': 'Kemendag',
  'Kementerian Perindustrian': 'Kemenperin',
  'Kementerian Keuangan': 'Kemenkeu',
  'Kementerian Energi dan Sumber Daya Mineral': 'ESDM',
};
function gabungDaftar(arr, penutup) {
  penutup = penutup || 'dan';
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] + ' ' + penutup + ' ' + arr[1];
  return arr.slice(0, -1).join(', ') + ', ' + penutup + ' ' + arr[arr.length - 1];
}
function sumberRingkas(ARTICLES) {
  let adaTvOne = false, adaIdx = false;
  const lembaga = {};
  ARTICLES.forEach(a => {
    const s = a.sourceLabel;
    if (!s) { adaTvOne = true; return; }
    if (s === 'IDX') { adaIdx = true; return; }
    lembaga[s] = (lembaga[s] || 0) + 1;
  });
  const nama = Object.keys(lembaga).sort((x, y) => lembaga[y] - lembaga[x])
    .map(n => SINGKAT[n] || n);
  const bagian = [];
  if (adaTvOne) bagian.push('liputan ekonomi tvOneNews');
  if (adaIdx) bagian.push('keterbukaan informasi emiten di Bursa Efek Indonesia');
  if (nama.length) bagian.push('siaran pers resmi ' + gabungDaftar(nama, 'serta'));
  if (!bagian.length) return '';
  return 'Redaksi The Signal merangkum dari ' + gabungDaftar(bagian, 'dan') +
    '. Tiap artikel menyertakan tautan ke berita atau dokumen aslinya.';
}

// Deck halaman arsip, dengan porsi tiap jalur asupan.
//
// Kalimat lamanya berbunyi "disaring dari liputan tvOneNews" untuk SELURUH
// arsip, padahal separuhnya datang dari keterbukaan informasi IDX dan siaran
// pers lembaga. Dihitung di sini supaya klaimnya ikut berubah sendiri saat
// komposisinya bergeser, bukan menua jadi salah seperti kalimat sebelumnya.
function deckArsip(ARTICLES) {
  let tvOne = 0, idx = 0, lembaga = 0;
  ARTICLES.forEach(a => {
    if (!a.sourceLabel) tvOne++;
    else if (a.sourceLabel === 'IDX') idx++;
    else lembaga++;
  });
  const bagian = [];
  if (tvOne) bagian.push('liputan ekonomi tvOneNews (' + tvOne + ')');
  if (idx) bagian.push('keterbukaan informasi IDX (' + idx + ')');
  if (lembaga) bagian.push('siaran pers lembaga resmi (' + lembaga + ')');
  return 'Arsip lengkap rangkuman berita ekonomi The Signal: ' + ARTICLES.length +
    ' artikel dari ' + (bagian.length === 1 ? 'satu jalur, ' :
      bagian.length === 2 ? 'dua jalur, ' : 'tiga jalur, ') +
    gabungDaftar(bagian, 'dan') +
    '. Pilih rubrik untuk mempersempit, atau cari kata kunci.';
}

// ---------- mesin penanda ----------
//
// GAGAL KERAS kalau penandanya hilang. Penanda yang terhapus diam-diam berarti
// bagian itu berhenti diperbarui selamanya sementara build tetap hijau, dan
// tidak ada yang sadar sampai pembaca menegur kenapa beritanya basi.
function ganti(html, nama, konten, berkas) {
  const re = new RegExp('(<!-- generate:' + nama + ' -->)[\\s\\S]*?(<!-- /generate:' + nama + ' -->)');
  if (!re.test(html)) {
    throw new Error(berkas + ': penanda generate:' + nama + ' tidak ditemukan. ' +
      'Kembalikan pasangan komentar <!-- generate:' + nama + ' --> ... <!-- /generate:' + nama + ' -->.');
  }
  // Fungsi pengganti, BUKAN string. Konten artikel memuat kurs seperti
  // "US$194,6 miliar"; di string pengganti, $1/$2 dibaca sebagai rujukan grup
  // tangkapan sehingga "US$1" berubah jadi "US<!-- generate:hero -->" dan
  // penanda ikut tertanam di tengah kalimat. Bentuk fungsi memperlakukan
  // konten apa adanya.
  return html.replace(re, (_, buka, tutup) => buka + konten + tutup);
}

// Stempel ulang ?v= di SEMUA rujukan aset css/js halaman root.
//
// Wajib sejak aset di-cache immutable setahun (13 Agustus 2026): halaman
// generate sudah memakai ?v=hash yang berganti tiap build, tapi tiga halaman
// tulisan tangan membawa ?v tulisan tangan yang tidak pernah berubah. Tanpa
// stempel ini, sekali pengunjung menyimpan style.css versi lama, beranda
// memakainya setahun penuh meski berkasnya sudah berganti berkali-kali.
function stempelVersi(html, VER) {
  return html.replace(/((?:\/)?assets\/(?:css|js)\/[a-z0-9-]+\.(?:css|js))\?v=[a-z0-9]+/g,
    '$1?v=' + VER);
}

// Strip angka ekonomi di rail beranda.
//
// Halaman /data-ekonomi.html sudah memuat sepuluh indikator lengkap dengan
// grafiknya, tapi halaman terpisah hanya dibuka orang yang sudah tahu halaman
// itu ada. Strip ini menaruh empat angka terpenting di tempat yang dilihat
// semua pengunjung, lalu menautkan ke halaman lengkapnya.
//
// Empat, bukan sepuluh: rail beranda sempit, dan daftar panjang berubah jadi
// dinding angka yang justru tidak terbaca. Yang dipilih indikator yang paling
// sering dicari orang dan paling sering jadi bahan berita.
const STRIP = ['inflasi', 'pdb', 'neraca', 'pengangguran'];

function stripBps(BPS) {
  if (!BPS || !BPS.indikator) return '';
  const sel = [];
  for (const kode of STRIP) {
    const ind = BPS.indikator[kode];
    if (!ind || !ind.titik || !ind.titik.length) continue;
    const t = ind.titik[ind.titik.length - 1];
    const lalu = ind.titik[ind.titik.length - 2];

    // Panah mengikuti NAIK atau TURUN angkanya, bukan baik atau buruk, dan
    // warnanya sengaja netral. Inflasi naik tidak otomatis buruk, pengangguran
    // turun tidak otomatis kabar bagus tanpa konteks. Memberi warna merah atau
    // hijau di sini berarti situs menilai, padahal ini baru angka.
    let delta = '';
    if (lalu) {
      const d = t.nilai - lalu.nilai;
      const tanda = d > 0 ? '↑' : d < 0 ? '↓' : '→';
      delta = '<span class="bps-strip-delta">' + tanda + '</span>';
    }
    sel.push(
      '<a class="bps-strip-sel" href="/data-ekonomi.html">' +
      '<span class="bps-strip-nama">' + esc(ind.nama) + '</span>' +
      '<span class="bps-strip-nilai num">' + esc(nilaiRingkas(t.nilai, ind)) + delta + '</span>' +
      '<span class="bps-strip-periode">' + esc(t.periode + ' ' + t.tahun) + '</span></a>');
  }
  return sel.join('');
}

// Panel edisi di puncak beranda: Signal Harian ATAU Signal Mingguan, mana
// pun yang paling baru.
//
// Isinya pembacaan arah, dan itu yang membedakan situs ini dari portal berita
// mana pun. Sebelumnya cuma tertaut dari menu, sehingga pengunjung beranda
// melihat daftar judul dan menyimpulkan ini agregator berita biasa.
//
// Kalau edisi hari ini belum terbit (Signal Harian ditulis sore), yang tampil
// edisi terakhir LENGKAP DENGAN TANGGALNYA. Menyembunyikannya sampai sore
// berarti separuh hari beranda kehilangan bagian terpentingnya, dan tanggal
// yang jujur lebih baik daripada kekosongan.
//
// Panel ini dulu SELALU Signal Harian, dan itu bocor tiap akhir pekan. Signal
// Harian ditulis pada hari bursa saja, jadi sejak Sabtu sampai Senin siang
// yang terpampang di puncak beranda adalah edisi Jumat. Diperiksa 31 Agustus
// 2026 pukul 12.10 WIB: beranda memajang "Jumat, 28 Agustus 2026" padahal
// Signal Mingguan 30 Agustus sudah terbit dan justru edisi yang paling pas
// dibaca pada hari Senin. Datanya sudah ada di assets/js/pekanan.js sejak
// lama; yang tidak ada cuma jalannya ke sini, karena bakeRoot tidak pernah
// dioper PEKANAN.
//
// Aturannya sengaja "yang paling baru menang", bukan "mingguan pada akhir
// pekan". Aturan berbasis hari akan salah tiap kali salah satu pipeline
// telat atau bolong, sedangkan tanggal edisi selalu berkata jujur: begitu
// Signal Harian hari ini terbit, ia otomatis mengambil alih lagi.
function panelEdisi(HARIAN, PEKANAN) {
  // Dua bentuk data yang beda nama field disatukan di sini, bukan di dua
  // fungsi kembar: tampilannya memang harus identik, dan menduplikasi
  // markup-nya berarti dua tempat yang bisa berbeda diam-diam.
  const calon = [];
  if (HARIAN && HARIAN.judul) {
    calon.push({
      tag: 'Signal Harian', tuju: '/signal-harian.html',
      tanggal: HARIAN.tanggal || '', dibuat: HARIAN.dibuat || '',
      label: HARIAN.tanggalLabel || '',
      judul: HARIAN.judul, ringkas: HARIAN.ringkas || '',
      butir: HARIAN.benang || [],
    });
  }
  if (PEKANAN && PEKANAN.judul) {
    calon.push({
      tag: 'Signal Mingguan', tuju: '/signal-mingguan.html',
      tanggal: PEKANAN.tanggal || '', dibuat: PEKANAN.dibuat || '',
      // Mingguan menyebut rentang, bukan satu hari, dan itu memang yang
      // benar untuk dibaca: "24 Agustus - 30 Agustus 2026".
      label: PEKANAN.rentangLabel || '',
      judul: PEKANAN.judul, ringkas: PEKANAN.ringkas || '',
      butir: PEKANAN.pola || [],
    });
  }
  if (!calon.length) return '';

  // Tanggal edisi lebih dulu karena itu yang dilihat pembaca. `dibuat` cuma
  // pemutus kalau tanggalnya sama persis, keadaan yang belum pernah terjadi
  // (harian ditulis pada hari bursa, mingguan pada Sabtu) tapi murah dijaga.
  calon.sort((a, b) =>
    (b.tanggal || '').localeCompare(a.tanggal || '') ||
    (b.dibuat || '').localeCompare(a.dibuat || ''));
  const e = calon[0];

  const butir = (e.butir || []).slice(0, 3);
  return '<a class="sinyal-panel" href="' + e.tuju + '">' +
    '<div class="sinyal-kepala">' +
      '<span class="sinyal-tag">' + esc(e.tag) + '</span>' +
      '<span class="sinyal-tanggal num">' + esc(e.label) + '</span>' +
    '</div>' +
    '<h2 class="sinyal-judul">' + esc(plain(e.judul)) + '</h2>' +
    '<p class="sinyal-ringkas">' + esc(e.ringkas) + '</p>' +
    (butir.length
      ? '<ul class="sinyal-benang">' + butir.map((b, i) =>
          '<li><span class="num">' + String(i + 1).padStart(2, '0') + '</span>' +
          esc(b.judul) + '</li>').join('') + '</ul>'
      : '') +
    '<span class="sinyal-lanjut">Baca pembacaan lengkapnya &rarr;</span>' +
    '</a>';
}

// Blok Agenda di rail beranda: empat tanggal terdekat yang akan menentukan
// arah, dari kalender yang sama dengan /agenda.html. Empat saja karena rail
// sempit; selebihnya urusan halaman lengkapnya.
function blokAgenda(AGENDA) {
  if (!AGENDA || !AGENDA.length) return '';
  const BULAN3 = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  return AGENDA.slice(0, 4).map(e => {
    const d = new Date(e.iso + 'T00:00:00Z');
    const tgl = d.getUTCDate() + ' ' + BULAN3[d.getUTCMonth()];
    const tuju = e.slug ? '/berita/' + e.slug + '.html' : '/agenda.html';
    return '<a class="compact-row" href="' + esc(tuju) + '">' +
      '<span class="compact-num num agenda-num">' + esc(tgl) + (e.perkiraan ? '<em>±</em>' : '') + '</span>' +
      '<span class="compact-body"><span class="compact-title">' + esc(e.judul) + '</span>' +
      '<span class="compact-meta">' + (e.emiten ? esc(e.emiten) + ' &middot; ' : '') + esc(e.kategori) +
      '</span></span></a>';
  }).join('');
}


// Identitas penerbit. Definisinya pindah ke scripts/identitas.mjs supaya
// node yang sama ikut tercetak di seluruh halaman, bukan cuma beranda;
// halaman emiten sudah menunjuk @id-nya sejak lama tanpa nodenya hadir.
function jsonLdSitus(...tambahan) {
  return NODE_IDENTITAS.concat(tambahan)
    .map(j => '<script type="application/ld+json">' + JSON.stringify(j) + '</script>')
    .join(String.fromCharCode(10));
}

export function bakeRoot({ ARTICLES, VIDEOS, VER, BPS, HARIAN, PEKANAN, AGENDA }) {
  // ---- index.html ----
  const pIndex = path.join(ROOT, 'index.html');
  let idx = fs.readFileSync(pIndex, 'utf8');

  const hero = ARTICLES[0];
  const market = ARTICLES.filter(a => a.category === 'Pasar Modal' || a.category === 'Moneter').slice(0, 3);
  const biz = ARTICLES.filter(a => a.category === 'UMKM' || a.category === 'Bisnis' || a.category === 'Perbankan').slice(0, 2);
  const counts = {};
  ARTICLES.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });

  // Verifikasi Search Console dan, kalau diaktifkan, GA4. Isinya dirakit di
  // scripts/analitik.mjs supaya beranda dan halaman cetakan head() memakai
  // potongan yang SAMA PERSIS. Beranda paling banyak dibuka, jadi ia yang
  // paling mahal kalau tertinggal.
  idx = ganti(idx, 'kepala', kepalaAnalitik(), 'index.html');
  idx = ganti(idx, 'situs', jsonLdSitus(), 'index.html');
  idx = ganti(idx, 'hero', heroHtml(hero), 'index.html');
  idx = ganti(idx, 'ticker', tickerHtml(ARTICLES), 'index.html');
  idx = ganti(idx, 'brief', ARTICLES.slice(7, 12).map(a => barisRingkas(a)).join(''), 'index.html');
  idx = ganti(idx, 'latest', ARTICLES.slice(1, 7).map(kartuCerita).join(''), 'index.html');
  idx = ganti(idx, 'popular',
    [7, 12, 20, 28, 35, 44].map((i, n) => ARTICLES[i] ? barisRingkas(ARTICLES[i], n + 1) : '').join(''), 'index.html');
  idx = ganti(idx, 'market', market.map(kartuCerita).join(''), 'index.html');
  idx = ganti(idx, 'bisnis', biz.map(kartuCerita).join(''), 'index.html');
  idx = ganti(idx, 'katalog', Object.keys(counts).sort((x, y) => counts[y] - counts[x]).map(c =>
    '<a class="compact-row" href="/rubrik/' + catSlug(c) + '.html">' +
    '<span class="compact-body"><span class="compact-title">' + esc(c) + '</span>' +
    '<span class="compact-meta">' + counts[c] + ' artikel</span></span></a>').join(''), 'index.html');

  const feat = VIDEOS[0], sisa = VIDEOS.slice(1, 3);
  idx = ganti(idx, 'video',
    '<a class="video-feature" href="' + urlVideo(feat) + '" style="display:block;">' +
      '<div class="video-page-thumb" style="border:none;border-radius:0;margin:0;box-shadow:none;">' +
        '<img src="https://i.ytimg.com/vi/' + feat.id + '/hqdefault.jpg" alt="' + esc(feat.title) + '" loading="lazy">' + PLAY +
      '</div>' +
      '<div class="video-feature-body">' +
        '<div class="story-cat">' + videoMeta(feat) + '</div>' +
        '<h3 class="story-title">' + esc(feat.title) + '</h3>' +
        '<p class="video-summary">' + esc(feat.summary) + '</p>' +
      '</div>' +
    '</a>' +
    '<div class="video-list">' + sisa.map(kartuVideoKecil).join('') +
      '<a class="video-more" href="video.html">Lihat semua video &rarr;</a>' +
    '</div>', 'index.html');

  // Penanda di index.html tetap bernama 'harian' supaya berkasnya tidak perlu
  // ikut diubah; isinya kini bisa harian atau mingguan, mana yang lebih baru.
  const edisi = panelEdisi(HARIAN, PEKANAN);
  if (edisi) idx = ganti(idx, 'harian', edisi, 'index.html');

  const strip = stripBps(BPS);
  if (strip) idx = ganti(idx, 'bpsstrip', strip, 'index.html');

  const agenda = blokAgenda(AGENDA);
  if (agenda) idx = ganti(idx, 'agenda', agenda, 'index.html');

  const sumber = sumberRingkas(ARTICLES);
  if (sumber) idx = ganti(idx, 'sumber', esc(sumber), 'index.html');

  fs.writeFileSync(pIndex, stempelVersi(idx, VER), 'utf8');

  // ---- berita.html: chip + halaman pertama grid, supaya crawler dan pembaca
  // tanpa JavaScript melihat daftar berita sungguhan, bukan kulit kosong.
  // Filter dan muat-lebih tetap urusan JavaScript di atas indeks ramping. ----
  const pBerita = path.join(ROOT, 'berita.html');
  let brt = fs.readFileSync(pBerita, 'utf8');
  const cats = Object.keys(counts).sort((x, y) => counts[y] - counts[x]);
  brt = ganti(brt,
    'chips',
    '<button class="chip active" data-cat="semua" type="button">Semua<span class="chip-count">' + ARTICLES.length + '</span></button>' +
    cats.map(c => '<button class="chip" data-cat="' + catSlug(c) + '" type="button">' + esc(c) +
      '<span class="chip-count">' + counts[c] + '</span></button>').join(''), 'berita.html');
  brt = ganti(brt, 'kepala', kepalaAnalitik(), 'berita.html');
  brt = ganti(brt, 'deck', esc(deckArsip(ARTICLES)), 'berita.html');
  brt = ganti(brt, 'situs', jsonLdSitus(halamanKoleksi({
    nama: 'Arsip Berita', url: '/berita.html',
    deskripsi: 'Seluruh ' + ARTICLES.length + ' artikel The Signal, terbaru lebih dulu.',
    // 200 terbaru saja, bukan seluruh 400: HTML halaman ini sudah memuat
    // keempat ratus tautannya, jadi ItemList di sini cuma pelengkap dan tidak
    // sepadan dengan tambahan puluhan KB. Dipotong sadar di sini, bukan
    // diserahkan ke batas bawaan halamanKoleksi().
    item: ARTICLES.slice(0, 200).map(a => ({ nama: plain(a.title), url: urlArtikel(a) })),
  })), 'berita.html');
  brt = ganti(brt, 'grid', ARTICLES.slice(0, 12).map(kartuCerita).join(''), 'berita.html');

  // INDEKS LENGKAP, dipanggang ke HTML.
  //
  // Kartu di atas sengaja cuma dua belas: sisanya dirakit JavaScript supaya
  // pencarian dan penyaringan kategori terasa cepat. Itu keputusan yang benar
  // untuk pembaca, dan salah total untuk mesin. Bot mesin jawab yang justru
  // kita undang lewat robots.txt, GPTBot dan ClaudeBot dan PerplexityBot,
  // TIDAK menjalankan JavaScript sama sekali. Sebelum daftar ini ada, halaman
  // yang menyebut dirinya "arsip lengkap" hanya memperlihatkan 12 dari 400
  // artikel kepada mereka, dan 131 artikel tidak punya satu pun tautan masuk
  // dari halaman mana pun di situs ini.
  //
  // Judul dan tanggal saja, tanpa gambar dan tanpa ringkasan, supaya bobot
  // halaman tidak melonjak. Empat ratus baris begini sekitar 45 KB.
  // Halaman PERTAMA saja di sini; sisanya jadi /arsip/2.html dan seterusnya,
  // dibangkitkan build-pages.mjs. Dulu SELURUH arsip dipanggang ke satu
  // halaman ini. Itu masih wajar pada 400 artikel (37 KB terkompresi), tapi
  // tidak lagi begitu arsipnya berhenti dipangkas dan tumbuh terus.
  const totalHal = jumlahHalamanArsip(ARTICLES.length);
  brt = ganti(brt, 'arsip',
    ARTICLES.slice(0, PER_HALAMAN_ARSIP)
      .map(a => barisArsip(a, urlArtikel, esc, plain)).join(''), 'berita.html');
  brt = ganti(brt, 'arsipnav', totalHal > 1
    ? '<nav class="arsip-nav">' +
      '<span class="arsip-posisi num">Halaman 1 dari ' + totalHal +
      ' &middot; ' + ARTICLES.length + ' artikel</span>' +
      '<a class="arsip-lanjut" href="' + urlHalamanArsip(2) + '">Halaman berikutnya &rarr;</a>' +
      '</nav>'
    : '', 'berita.html');
  fs.writeFileSync(pBerita, stempelVersi(brt, VER), 'utf8');

  // ---- video.html: tidak ada bagian panggang selain kepala, tapi stempel
  // versinya wajib. Halaman ini sempat TERLEWAT saat verifikasi Search Console
  // dipasang, karena ia bukan cetakan head() dan juga tidak punya penanda
  // seperti index dan berita. Yang menangkapnya penghitung di build-pages,
  // bukan manusia. ----
  const pVideo = path.join(ROOT, 'video.html');
  let vid = fs.readFileSync(pVideo, 'utf8');
  vid = ganti(vid, 'kepala', kepalaAnalitik(), 'video.html');
  vid = ganti(vid, 'situs', jsonLdSitus(halamanKoleksi({
    nama: 'Tayangan', url: '/video.html',
    deskripsi: VIDEOS.length + ' tayangan pilihan yang dibaca The Signal.',
    item: VIDEOS.map(v => ({ nama: plain(v.title), url: urlVideo(v) })),
  })), 'video.html');
  // Wadah #video-grid sebelumnya KOSONG di HTML dan baru diisi JavaScript,
  // jadi tidak satu pun dari dua belas halaman tayangan punya tautan masuk
  // yang bisa dirayapi. Isinya dipanggang sekarang; JavaScript boleh menimpanya
  // untuk pembaca, isinya sama.
  vid = ganti(vid, 'videogrid', VIDEOS.map(v =>
    '<article class="video-card"><a href="' + urlVideo(v) + '">' +
    '<img src="' + esc(v.thumb) + '" alt="' + esc(plain(v.title)) + '" loading="lazy" width="480" height="360">' +
    '<h3>' + esc(plain(v.title)) + '</h3></a></article>').join(''), 'video.html');
  fs.writeFileSync(pVideo, stempelVersi(vid, VER), 'utf8');
}
