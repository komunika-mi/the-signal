// Ajakan ke kanal Telegram dan bot tanya jawab, ditaruh di tempat yang relevan.
//
// KENAPA BUKAN POP-UP, dan kenapa bukan widget mengambang.
//
// Kedua tautan ini sudah lama ada di footer tiap halaman. Yang kurang bukan
// keberadaannya, melainkan waktunya: footer adalah tempat orang pergi, bukan
// tempat orang memutuskan.
//
// Pop-up ditolak karena tiga hal yang terukur. Situs ini sudah punya satu
// interupsi, yaitu modal Signal+, dan pelanggan email justru pembaca paling
// lama (1 menit 29 detik, terlama dari semua kanal per GA 23 Agustus 2026) -
// menambah interupsi kedua berarti keduanya berebut perhatian yang sama.
// Google juga menghukum interstisial yang menutupi konten di seluler,
// sementara pencarian organik adalah 30% sesi dengan keterlibatan tertinggi
// (63%). Dan pada skala 43 pembaca sungguhan per hari, pop-up membeli satu dua
// klik dengan ongkos pengalaman baca yang permanen.
//
// Widget lucu ditolak karena produk situs ini adalah kredibilitas. Mayoritas
// kueri yang membawa orang ke sini adalah nama orang dan nama perusahaan
// ("eduard halomoan", "pt cashlez worldwide indonesia") - mereka mencari
// otoritas, bukan maskot.
//
// Yang dipakai: ajakan MUNCUL SAAT MINAT SUDAH TERBUKTI. Pembaca yang bertahan
// satu setengah menit di artikel ADHI adalah orang yang sama sekali berbeda
// dari yang kabur dari beranda dalam 13 detik.
export const AKUN_KANAL = 'thesignalid';
export const AKUN_BOT = 'thesignal_id_bot';

const SVG_TG =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
  '<path d="M21.94 4.3 18.7 19.4c-.24 1.08-.88 1.35-1.79.84l-4.93-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.35-5.02 9.13-8.25c.4-.35-.09-.55-.62-.2L6.19 12.6 1.32 11.08c-1.06-.33-1.08-1.06.22-1.57l19.05-7.34c.88-.32 1.65.2 1.35 2.13z"/></svg>';

const SVG_BOT =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.8L3 20.5l1.4-4.1A8.3 8.3 0 0 1 3.6 12a8.4 8.4 0 0 1 8.4-8.4 8.4 8.4 0 0 1 9 7.9z"/>' +
  '<path d="M9.6 9.4a2.4 2.4 0 0 1 4.7.7c0 1.6-2.4 2.4-2.4 2.4"/><path d="M12 16.2h.01"/></svg>';

// Payload deep link Telegram: maksimal 64 karakter, hanya A-Z a-z 0-9 _ dan -.
// Kode emiten aman; apa pun di luar itu dibuang supaya tautannya tidak rusak
// diam-diam. Bot membacanya di api/telegram.js dan menyapa dengan konteks.
function payloadAman(kode) {
  const bersih = String(kode || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  return bersih && bersih.length <= 8 ? 'emiten_' + bersih : '';
}

export function urlBot(kode) {
  const p = payloadAman(kode);
  return 'https://t.me/' + AKUN_BOT + (p ? '?start=' + p : '');
}

export function urlKanal() {
  return 'https://t.me/' + AKUN_KANAL;
}

// data-tg menandai TEMPAT ajakannya, bukan tujuannya. Itu yang perlu diukur:
// dalam dua pekan kita tahu penempatan mana yang bekerja alih-alih menebak.
// Pembacanya satu listener delegasi di assets/js/shared.js.
function tombolBot(kode, tempat, label) {
  return '<a class="btn-bot" href="' + urlBot(kode) + '" target="_blank" rel="noopener" ' +
    'data-tg="' + tempat + '">' + SVG_BOT + (label || 'Tanya ke bot The Signal') + '</a>';
}

function tombolKanal(tempat, label) {
  return '<a class="btn-telegram" href="' + urlKanal() + '" target="_blank" rel="noopener" ' +
    'data-tg="' + tempat + '">' + SVG_TG + (label || 'Ikuti kanal Telegram') + '</a>';
}

// ---------- 1. Akhir artikel ----------
//
// Sengaja SATU BARIS, bukan kartu. Di bawahnya sudah ada ajakan Signal+ yang
// berbentuk kartu gelap, dan dua kartu berturut-turut membuat keduanya
// terbaca sebagai iklan lalu sama-sama dilewati.
//
// Kalau artikelnya punya kode emiten, kodenya ikut ke dalam tautan supaya bot
// terbuka sudah tahu konteksnya. Kalau tidak, ajakannya tetap ada tapi umum -
// tidak mengarang konteks yang tidak dimiliki.
export function tanyaArtikel(a, esc) {
  const kode = a && a.emiten ? String(a.emiten) : '';
  const tanya = kode
    ? 'Ada yang ingin ditanyakan soal <b>' + esc(kode) + '</b>?'
    : 'Ada yang ingin ditanyakan soal berita ini?';
  return '<div class="artikel-tanya">' +
    '<span>' + tanya + ' Bot kami menjawab dari arsip The Signal, lengkap dengan tautan artikelnya.</span>' +
    tombolBot(kode, 'artikel') +
    '</div>';
}

// ---------- 2. Halaman emiten ----------
//
// Permukaan berniat paling tinggi di situs ini: orang yang membuka
// /emiten/ADHI.html sedang menelusuri satu emiten dengan sengaja.
//
// Dua tombol dengan DUA BENTUK berbeda, mengikuti pola yang sudah dipakai di
// footer dan alasannya ditulis di style.css: keduanya menuju Telegram tapi
// fungsinya berlawanan arah, satu menerima siaran dan satu mengajak bicara.
// Tombol kembar berdampingan membuat pembaca menebak-nebak.
//
// Kalimat kanalnya JUJUR: kanal menyiarkan seluruh sinyal, tidak bisa
// dilanggan per emiten. Menulis "pantau ADHI" saja akan menjanjikan penyaringan
// yang tidak ada.
export function pantauEmiten(kode, esc) {
  return '<div class="emiten-pantau">' +
    '<span>Aksi korporasi <b>' + esc(kode) + '</b> dan emiten lain masuk ke kanal Telegram ' +
    'begitu terbit. Untuk pertanyaan spesifik soal ' + esc(kode) + ', tanya botnya.</span>' +
    '<div class="emiten-pantau-aksi">' +
    tombolKanal('emiten') +
    tombolBot(kode, 'emiten') +
    '</div></div>';
}
