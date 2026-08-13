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

export function tulisIndeksArtikel(ARTICLES) {
  const ramping = ARTICLES.map(a => {
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

function tickerHtml(ARTICLES) {
  const judul = ARTICLES.slice(0, 6).map(a => plain(a.title));
  let track = '';
  for (let r = 0; r < 2; r++) {
    judul.forEach((t, i) => {
      track += '<span>' + esc(t) + '</span>';
      if (i < judul.length - 1 || r === 0) track += '<span class="sep">&bull;</span>';
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
  return html.replace(re, '$1' + konten + '$2');
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

export function bakeRoot({ ARTICLES, VIDEOS, VER }) {
  // ---- index.html ----
  const pIndex = path.join(ROOT, 'index.html');
  let idx = fs.readFileSync(pIndex, 'utf8');

  const hero = ARTICLES[0];
  const market = ARTICLES.filter(a => a.category === 'Pasar Modal' || a.category === 'Moneter').slice(0, 3);
  const biz = ARTICLES.filter(a => a.category === 'UMKM' || a.category === 'Bisnis' || a.category === 'Perbankan').slice(0, 2);
  const counts = {};
  ARTICLES.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });

  idx = ganti(idx, 'hero', heroHtml(hero), 'index.html');
  idx = ganti(idx, 'ticker', tickerHtml(ARTICLES), 'index.html');
  idx = ganti(idx, 'brief', ARTICLES.slice(7, 12).map(a => barisRingkas(a)).join(''), 'index.html');
  idx = ganti(idx, 'latest', ARTICLES.slice(1, 7).map(kartuCerita).join(''), 'index.html');
  idx = ganti(idx, 'popular',
    [7, 12, 20, 28, 35, 44].map((i, n) => ARTICLES[i] ? barisRingkas(ARTICLES[i], n + 1) : '').join(''), 'index.html');
  idx = ganti(idx, 'market', market.map(kartuCerita).join(''), 'index.html');
  idx = ganti(idx, 'bisnis', biz.map(kartuCerita).join(''), 'index.html');
  idx = ganti(idx, 'katalog', Object.keys(counts).sort((x, y) => counts[y] - counts[x]).map(c =>
    '<a class="compact-row" href="berita.html#kat=' + catSlug(c) + '">' +
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
  brt = ganti(brt, 'grid', ARTICLES.slice(0, 12).map(kartuCerita).join(''), 'berita.html');
  fs.writeFileSync(pBerita, stempelVersi(brt, VER), 'utf8');

  // ---- video.html: tidak ada bagian panggang, tapi stempel versinya wajib. ----
  const pVideo = path.join(ROOT, 'video.html');
  fs.writeFileSync(pVideo, stempelVersi(fs.readFileSync(pVideo, 'utf8'), VER), 'utf8');
}
