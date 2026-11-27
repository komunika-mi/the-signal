// Halaman mana yang boleh tampil di Google.
//
// LATAR. the-signal.id hilang dari Google sejak 23 September 2026 (608 klik
// pada September, 1 klik pada Oktober), bertepatan dengan September 2026 spam
// update. Dugaan kuat, BUKAN kepastian: penilaian "scaled content". Situs ini
// punya hampir 6.000 artikel otomatis, dan 70 persennya tulis ulang
// keterbukaan informasi IDX yang juga ada di idx.co.id dan situs lain. Untuk
// halaman semacam itu Google menyarankan satu hal: keluarkan dari indeksnya.
// Pemilik menyetujui langkah ini 27 November 2026, menggantikan keputusan
// 11 November "arsip lama dibiarkan".
//
// CARANYA meta googlebot, BUKAN meta robots. <meta name="googlebot"
// content="noindex, follow"> hanya dibaca Google. Bing, mesin jawab yang
// bersandar pada indeks Bing (ChatGPT, Copilot), dan perayap lain tetap
// mengindeks semua halaman. URL tidak berubah dan halaman tetap terbuka untuk
// pembaca. "follow" membuat Google tetap menelusuri tautannya.
//
// SATU aturan untuk tiga tempat, dan ketiganya WAJIB memakai fungsi ini:
//   - head() di build-pages.mjs dan kepala halaman tulisan tangan
//     (bake-root.mjs) memasang meta googlebot untuk halaman yang tidak lolos;
//   - sitemap.xml dan news-sitemap.xml hanya memuat halaman yang lolos;
//   - periksa-seo.mjs memeriksa situs tayang dengan aturan yang sama.
// Sitemap yang memuat URL ber-noindex dilaporkan Google sebagai pertentangan,
// dan pada situs yang jatah perayapannya tinggal 20-50 halaman sehari, tiap
// kunjungan ke halaman yang tidak boleh masuk adalah kunjungan yang terbuang.
//
// BAWAANNYA DITOLAK. Jenis halaman baru tidak masuk Google sampai sengaja
// ditambahkan di sini. Kebalikannya (bawaan diterima) berarti setiap fitur
// baru yang membangkitkan ratusan halaman otomatis diam-diam mengulang
// masalah yang sedang dibereskan.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const META_LUAR_GOOGLE = '<meta name="googlebot" content="noindex, follow">';

// Halaman tunggal yang isinya buatan situs ini sendiri: rangkuman, data, dan
// pembacaan arah yang tidak ada di situs lain, ditambah halaman identitas
// yang menjelaskan siapa yang bertanggung jawab.
const HALAMAN_TETAP = new Set([
  '/',
  '/rapor.html',
  '/data-ekonomi.html',
  '/agenda.html',
  '/peristiwa.html',
  '/tema.html',
  '/tentang.html',
  '/kontak.html',
  '/privasi.html',
  '/pedoman-media-siber.html',
]);

// Rubrik, rangkuman peristiwa, dan tema. Rangkuman peristiwa di bawah tiga
// dokumen sudah ber-noindex robots sendiri (AMBANG_INDEKS_PERISTIWA di
// build-pages.mjs), jadi tidak perlu disaring ulang di sini.
const POLA_TETAP = /^\/(rubrik|peristiwa|tema)\/[^/]+\.html$/;

// Diputuskan pemilik 27 November 2026: halaman emiten dan dua halaman induk
// daftar keluar, edisi Signal Harian dan Mingguan masuk. Halaman emiten tetap
// tayang dan tetap terindeks di Bing; yang hilang hanya kemunculannya di
// Google. Membalik salah satu pilihan cukup mengubah nilainya di sini.
export const PILIHAN = {
  emiten: false,        // /emiten.html dan /emiten/KODE.html
  edisi: true,          // /signal-harian.html, /signal-mingguan.html, /edisi/*
  indukDaftar: false,   // /berita.html dan /video.html
};

// Artikel yang BENAR-BENAR diperkaya orang: ditambah analisis, konteks, atau
// data yang tidak ada di dokumen sumbernya, lalu diperiksa. Diisi tangan di
// assets/data/masuk-google.json:
//   { "artikel": [ { "slug": "...", "penyunting": "Nama", "tanggal": "2026-12-01" } ] }
// Artikel tanpa nama penyunting TIDAK dihitung. Tulis ulang otomatis, seberapa
// pun rapinya, tetap di luar Google.
function muatDiperkaya() {
  const p = path.join(ROOT, 'assets/data/masuk-google.json');
  if (!fs.existsSync(p)) return new Map();
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  return new Map((data.artikel || [])
    .filter(x => x && x.slug && String(x.penyunting || '').trim())
    .map(x => [x.slug, x]));
}
export const DIPERKAYA = muatDiperkaya();

export function masukGoogle(url) {
  const u = String(url || '').replace(/^https?:\/\/[^/]+/, '').split(/[?#]/)[0];
  if (HALAMAN_TETAP.has(u) || POLA_TETAP.test(u)) return true;
  const artikel = u.match(/^\/berita\/([^/]+)\.html$/);
  if (artikel) return DIPERKAYA.has(artikel[1]);
  if (u === '/emiten.html' || /^\/emiten\/[^/]+\.html$/.test(u)) return PILIHAN.emiten;
  if (u === '/signal-harian.html' || u === '/signal-mingguan.html' ||
      /^\/edisi\/[^/]+\.html$/.test(u)) return PILIHAN.edisi;
  if (u === '/berita.html' || u === '/video.html') return PILIHAN.indukDaftar;
  // Sisanya: tayangan, topik, arsip berita, arsip tayangan, dan jenis
  // halaman baru apa pun.
  return false;
}

// Untuk kepala halaman tulisan tangan: string kosong kalau halamannya masuk.
export function metaGoogle(url) {
  return masukGoogle(url) ? '' : '\n' + META_LUAR_GOOGLE;
}
