// Menempatkan ulang foto ke seluruh arsip TANPA menarik berita baru.
//
// Kenapa perlu berdiri sendiri: pasangFoto() cuma dipanggil di update-all.mjs
// dan update-idx.mjs, dua-duanya menarik konten dan memanggil model. Jadi
// setelah menambah foto ke pustaka, tidak ada cara memakainya selain menunggu
// putaran konten berikutnya, atau memaksa satu putaran hanya demi foto.
//
// Terbukti membingungkan 12 Agustus 2026: 20 foto baru selesai dibuat, build
// dijalankan, dan situs tetap menampilkan 18 gambar berulang seperti sebelumnya
// karena penugasan foto tersimpan di articles.js dan build tidak menghitungnya
// ulang. Perkakas ini menutup celah itu.
//
// Tidak memanggil model, tidak menyentuh jaringan, tidak mengubah teks artikel.
// Yang berubah hanya field image tiap artikel.
import { execFileSync } from 'node:child_process';
import { readData, writeData, log, ROOT } from './lib.mjs';
import { pasangFoto } from './assign-images.mjs';

const artikel = readData('articles.js', 'ARTICLES');
if (!artikel.length) {
  log('articles.js kosong atau tidak terbaca, tidak ada yang bisa ditempatkan.');
  process.exit(1);
}

const sebelum = new Set(artikel.map(a => a.image));
log('arsip: ' + artikel.length + ' artikel, ' + sebelum.size + ' gambar berbeda sebelum penempatan ulang');

pasangFoto(artikel);

const sesudah = new Set(artikel.map(a => a.image));
log('sesudah: ' + sesudah.size + ' gambar berbeda');

writeData('articles.js', 'ARTICLES', artikel,
  '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
  '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
  '// Dibuat otomatis - jangan diedit manual.');

execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
log('=== selesai ===');
