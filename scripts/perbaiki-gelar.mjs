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

const BERKAS = ['articles.js', 'harian.js', 'harian-arsip.js', 'rapor.js'];

let totalGanti = 0;
for (const nama of BERKAS) {
  const p = path.join(ROOT, 'assets/js', nama);
  if (!fs.existsSync(p)) continue;
  const sebelum = fs.readFileSync(p, 'utf8');
  const cocok = sebelum.match(POLA);
  if (!cocok) { log(nama + ': sudah bersih'); continue; }
  const sesudah = sebelum.replace(POLA, 'Presiden Prabowo');
  fs.writeFileSync(p, sesudah, 'utf8');
  totalGanti += cocok.length;
  log(nama + ': ' + cocok.length + ' sebutan diberi gelar');
}

log(totalGanti ? 'total ' + totalGanti + ' sebutan diperbaiki, jalankan build-pages.mjs'
  : 'tidak ada yang perlu diperbaiki');
