// Potongan <head> yang sama untuk SELURUH halaman: verifikasi Search Console
// dan, kalau diaktifkan, pengukur GA4.
//
// Ditaruh di satu berkas karena halaman situs ini lahir dari DUA jalur yang
// berbeda: index.html dan berita.html ditulis tangan lalu diisi bake-root.mjs
// lewat penanda, sisanya dicetak head() di build-pages.mjs. Menyalin potongan
// yang sama ke dua tempat berarti suatu hari salah satunya tertinggal, dan
// yang tertinggal itu justru beranda, halaman yang paling banyak dibuka.
//
// GA4 SENGAJA MATI SELAMA GA4_ID KOSONG. Alasannya bukan teknis: halaman
// privasi menjanjikan "tidak ada cookie pelacak dan tidak ada alat analitik
// pihak ketiga". Menyalakan GA4 tanpa lebih dulu memperbarui janji itu berarti
// situs berbohong kepada pembacanya. Isi GA4_ID hanya bersamaan dengan
// pembaruan privasi.html, jangan lebih dulu.
//
// Verifikasi Search Console TIDAK punya masalah itu. Ia cuma meta tag statis,
// tidak memuat skrip, tidak menaruh cookie, dan tidak mengirim apa pun tentang
// pembaca ke mana pun. Karena itu ia boleh hidup sendirian.
export const VERIFIKASI_GSC = 'ZJqHIXMmevUYkSDTxGZmIOUsvABGnQTPZw3FkmVDPh8';

export const GA4_ID = 'G-5G4FZ823K9';

export function kepalaAnalitik() {
  const b = [];
  if (VERIFIKASI_GSC) {
    b.push('<meta name="google-site-verification" content="' + VERIFIKASI_GSC + '">');
  }
  if (GA4_ID) {
    b.push('<script async src="https://www.googletagmanager.com/gtag/js?id=' + GA4_ID + '"></' + 'script>');
    b.push('<script>');
    b.push('window.dataLayer = window.dataLayer || [];');
    b.push('function gtag(){dataLayer.push(arguments);}');
    b.push("gtag('js', new Date());");
    // Pembatas privasi, disetel di sini supaya berlaku di semua halaman
    // sekaligus dan tidak bergantung pada setelan panel yang bisa berubah:
    // sinyal iklan dan personalisasi iklan dimatikan, jadi GA4 dipakai untuk
    // menghitung pembaca, bukan untuk membangun profil iklan.
    b.push("gtag('config', '" + GA4_ID + "', { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });");
    b.push('</' + 'script>');
  }
  return b.join('\n');
}
