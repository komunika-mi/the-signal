// Memperbaiki sebutan kepala negara di seluruh arsip.
//
// Aturan pemilik, 14 Agustus 2026: kepala negara ditulis "Presiden Prabowo"
// atau "Presiden Prabowo Subianto", TIDAK PERNAH "Prabowo" telanjang, di mana
// pun, termasuk judul, deck, tag, dan penyebutan kedua di dalam satu artikel.
// Aturannya juga sudah ditanam di GAYA (scripts/rewrite.mjs) supaya artikel
// baru lahir benar, dan dijaga penghitung di build-pages.mjs supaya kalau
// kelak model membandel, angkanya kelihatan tiap build.
//
// Alat ini untuk yang TERLANJUR TAYANG. Aman dijalankan berulang: sebutan
// yang sudah bergelar tidak disentuh dua kali.
//
// DUA HAL YANG SENGAJA TIDAK DIUBAH:
//
//   1. KUTIPAN LANGSUNG. Arsip memuat "Pak Prabowo juga mengatakan bahwa..."
//      dari mulut narasumber. Menyunting isi kutipan orang lain, sekalipun
//      demi kerapian gaya, berarti menuliskan kalimat yang tidak pernah dia
//      ucapkan. Itu pelanggaran yang jauh lebih berat daripada sebutan yang
//      kurang lengkap, dan "Pak" toh sudah sapaan hormat.
//
//   2. SLUG, TAUTAN SUMBER, DAN NAMA BERKAS GAMBAR. Semuanya huruf kecil
//      (prabowo-targetkan-750-bumn...), jadi pencocokan yang peka huruf besar
//      di bawah ini otomatis melewatinya. Itu disengaja: mengganti slug
//      memutus tautan yang sudah tersebar di Telegram, email, dan mesin
//      pencari, demi perubahan yang tidak terlihat pembaca.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';

// Huruf besar wajib (melindungi slug), dan dua pagar di belakang: yang sudah
// bergelar dan yang ada di dalam sapaan kutipan.
const POLA = /(?<!Presiden )(?<!Pak )Prabowo/g;

const BERKAS = ['articles.js', 'harian.js', 'harian-arsip.js', 'rapor.js',
  'pekanan.js', 'pekanan-arsip.js'];

// Notasi dolar dibakukan jadi "US$14 miliar".
//
// Dalam satu edisi 17 Agustus, prosa menulis "USD14 miliar" sementara blok
// angka di email menulis "juta US$", dua bentuk untuk mata uang yang sama di
// halaman yang sama. Angka setelahnya WAJIB, supaya "USD" yang berdiri
// sendiri sebagai singkatan dalam kalimat tidak ikut tergilas.
const POLA_USD = /USD ?([0-9])/g;

let totalGanti = 0, totalUsd = 0;
for (const nama of BERKAS) {
  const p = path.join(ROOT, 'assets/js', nama);
  if (!fs.existsSync(p)) continue;
  const sebelum = fs.readFileSync(p, 'utf8');
  const gelar = (sebelum.match(POLA) || []).length;
  const usd = (sebelum.match(POLA_USD) || []).length;
  if (!gelar && !usd) { log(nama + ': sudah bersih'); continue; }
  const sesudah = sebelum.replace(POLA, 'Presiden Prabowo').replace(POLA_USD, 'US$$1');
  fs.writeFileSync(p, sesudah, 'utf8');
  totalGanti += gelar; totalUsd += usd;
  log(nama + ': ' + gelar + ' sebutan diberi gelar, ' + usd + ' notasi dolar dibakukan');
}

log(totalGanti + totalUsd
  ? 'total ' + totalGanti + ' sebutan dan ' + totalUsd + ' notasi dolar diperbaiki, jalankan build-pages.mjs'
  : 'tidak ada yang perlu diperbaiki');
