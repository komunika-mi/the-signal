// Alamat kanonik situs. SATU-SATUNYA tempat yang boleh menuliskannya.
//
// Sebelumnya alamat ini disalin di empat tempat (lib.mjs, build-pages.mjs,
// daily.yml, jalankan-idx.ps1). Pindah domain berarti mengubah empat berkas
// dan gampang ada yang tertinggal, padahal alamat yang tertinggal itu masuk
// ke canonical, og:url, dan sitemap yang dibaca Google.
//
// Cara ganti domain:
//   1. ubah SITUS di bawah ini (atau set env SITUS_URL)
//   2. npm run build
//   3. deploy
// Tidak ada langkah lain di sisi kode.
//
// Boleh ditimpa lewat environment supaya bisa diuji tanpa mengubah berkas:
//   SITUS_URL=https://contoh.id node scripts/build-pages.mjs
export const SITUS = (process.env.SITUS_URL || 'https://the-signal.id')
  .replace(/\/+$/, '');

// Versi tanpa protokol, untuk teks yang menampilkan alamat ke pembaca.
export const SITUS_TAMPIL = SITUS.replace(/^https?:\/\//, '');
