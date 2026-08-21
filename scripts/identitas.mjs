// Identitas penerbit, satu sumber untuk seluruh situs.
//
// Sebelumnya kedua node ini hanya tercetak di beranda, padahal halaman emiten
// sudah menunjuknya lewat {"@id": ".../#organisasi"}. Rujukan @id ke node yang
// tidak ada di halaman yang sama adalah rujukan menggantung: mesin membacanya
// sebagai penerbit tanpa nama, tanpa logo, tanpa kebijakan ralat. Jadi 400
// halaman berita justru tidak pernah menerima correctionsPolicy dan
// ethicsPolicy yang halamannya benar-benar ada.
//
// Dipakai NewsMediaOrganization, bukan Organization biasa, karena tipe itu
// menyediakan properti yang justru paling menentukan bagi media: kebijakan
// ralat, prinsip penerbitan, dan kebijakan etik. Ketiganya BUKAN klaim kosong
// di sini, halamannya benar-benar ada dan isinya ditegakkan.
//
// Inilah yang dibaca mesin pencari untuk membentuk panel pengetahuan, dan yang
// dibaca mesin jawab untuk memutuskan apakah sebuah situs layak dikutip
// sebagai sumber atau cuma salah satu halaman di internet.
//
// SearchAction sengaja TIDAK dipasang. Kotak pencarian di situs ini bekerja di
// sisi klien tanpa alamat hasil pencarian, jadi templat URL apa pun yang
// dituliskan akan bohong. Data terstruktur yang salah lebih merugikan daripada
// data terstruktur yang tidak ada.
import { SITUS as BASE } from './situs.mjs';

export const ID_ORGANISASI = BASE + '/#organisasi';
export const ID_SITUS = BASE + '/#situs';

export const NODE_ORGANISASI = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  '@id': ID_ORGANISASI,
  name: 'The Signal',
  // Larik, bukan satu string. Ini nama-nama yang benar-benar dipakai orang
  // untuk menyebut situs ini, termasuk domainnya sendiri - yang justru
  // paling sering diketik saat seseorang mencari media ini, bukan yang lain.
  alternateName: ['The Signal Indonesia', 'the-signal.id'],
  url: BASE + '/',
  logo: {
    '@type': 'ImageObject',
    url: BASE + '/assets/img/icon-512.png',
    width: 512, height: 512,
  },
  description: 'Media ekonomi Indonesia yang membaca arah kebijakan dan aksi ' +
    'korporasi dari dokumen resmi. Kolaborasi editorial dengan tvOneNews.',
  inLanguage: 'id-ID',

  // Properti schema.org yang memang dibuat untuk kasus ini: membedakan
  // sebuah entitas dari entitas lain yang namanya mirip. Sengaja TIDAK
  // menyebut nama pihak lain - yang dilakukan adalah menyatakan diri
  // sespesifik mungkin, lalu menolak afiliasi secara umum. Menuding nama
  // tertentu di dalam data terstruktur adalah klaim tentang orang lain
  // yang tidak bisa dibuktikan dari repo ini.
  disambiguatingDescription:
    'Media berita dan analisis ekonomi berbahasa Indonesia yang terbit ' +
    'harian di the-signal.id, meliput pasar modal, kebijakan moneter, dan ' +
    'aksi korporasi emiten Bursa Efek Indonesia. Tidak berafiliasi dengan ' +
    'organisasi, layanan, atau akun lain mana pun yang memakai nama serupa.',

  // Dari commit paling awal repo ini (2026-08-09). Ketelitiannya sengaja
  // sebatas bulan: itu yang benar-benar bisa dipertanggungjawabkan.
  foundingDate: '2026-08',

  // Bukan daftar kata kunci, melainkan ke-13 rubrik yang benar-benar
  // berisi artikel di arsip. Inilah yang menghubungkan nama "The Signal"
  // dengan BIDANGNYA di mata mesin pencari dan mesin jawab, dan bidang
  // itulah yang memisahkannya dari nama sama di ranah lain.
  knowsAbout: [
    'Ekonomi Indonesia',
    'Aksi korporasi emiten Bursa Efek Indonesia',
    'Keterbukaan informasi Bursa Efek Indonesia',
    'Makroekonomi Indonesia',
    'Kebijakan moneter Bank Indonesia',
    'Indeks Harga Saham Gabungan',
    'Data Badan Pusat Statistik',
    'Perbankan Indonesia',
    'Energi dan pertambangan',
    'Badan Usaha Milik Negara',
    'Usaha mikro, kecil, dan menengah',
    'Ketenagakerjaan Indonesia',
    'Industri dan perdagangan',
  ],
  areaServed: { '@type': 'Country', name: 'Indonesia' },

  // Halaman kanonik yang menjelaskan entitas ini. Tanpa ini mesin harus
  // menebak halaman mana yang "tentang" penerbitnya.
  mainEntityOfPage: BASE + '/tentang.html',

  email: 'komunika.mi@gmail.com',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'editorial',
    email: 'komunika.mi@gmail.com',
    url: BASE + '/kontak.html',
    availableLanguage: ['id'],
  },
  sameAs: [
    'https://t.me/thesignalid',
    'https://buttondown.com/the-signal',
  ],
  correctionsPolicy: BASE + '/pedoman-media-siber.html',
  publishingPrinciples: BASE + '/pedoman-media-siber.html',
  ethicsPolicy: BASE + '/pedoman-media-siber.html',
  verificationFactCheckingPolicy: BASE + '/pedoman-media-siber.html',
  // Dua properti NewsMediaOrganization yang halamannya memang sudah ada dan
  // isinya memang menjawabnya: siapa yang mendukung situs ini (Tentang),
  // dan ke mana pembaca melaporkan kekeliruan (Kontak & Koreksi).
  ownershipFundingInfo: BASE + '/tentang.html',
  actionableFeedbackPolicy: BASE + '/kontak.html',
  parentOrganization: {
    '@type': 'Organization', name: 'adsmediamix.id', url: 'https://adsmediamix.id',
  },
};

export const NODE_SITUS = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': ID_SITUS,
  name: 'The Signal',
  alternateName: ['The Signal Indonesia', 'the-signal.id'],
  description: 'Berita dan analisis ekonomi Indonesia harian: pasar modal, ' +
    'kebijakan moneter, dan aksi korporasi emiten Bursa Efek Indonesia.',
  url: BASE + '/',
  inLanguage: 'id-ID',
  publisher: { '@id': ID_ORGANISASI },
  copyrightHolder: { '@id': ID_ORGANISASI },
};

// Rujukan pendek yang dipakai artikel, halaman emiten, rubrik, dan tema.
export const RUJUK_ORGANISASI = { '@id': ID_ORGANISASI };
export const RUJUK_SITUS = { '@id': ID_SITUS };

export const NODE_IDENTITAS = [NODE_ORGANISASI, NODE_SITUS];

// Halaman yang isinya daftar tertaut: rubrik, tema, emiten, arsip, video.
//
// Dipakai CollectionPage dengan ItemList berisi tautan nyata, bukan tipe yang
// kedengaran mewah tapi medannya diisi karangan. Batas 200 butir menjaga
// berkas tetap wajar; pemanggil yang daftarnya lebih panjang sebaiknya
// memangkas sendiri secara sadar, bukan pasrah pada batas ini.
export function halamanKoleksi({ nama, deskripsi, url, item }) {
  const daftar = (item || []).filter(x => x && x.url).slice(0, 200);
  const j = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: nama, description: deskripsi, url: BASE + url, inLanguage: 'id-ID',
    isPartOf: RUJUK_SITUS,
    publisher: RUJUK_ORGANISASI,
  };
  if (daftar.length) {
    j.mainEntity = {
      '@type': 'ItemList', numberOfItems: daftar.length,
      itemListElement: daftar.map((x, i) => ({
        '@type': 'ListItem', position: i + 1, name: x.nama, url: BASE + x.url,
      })),
    };
  }
  return j;
}

// Halaman identitas: Tentang, Kontak, Privasi, Pedoman Media Siber.
//
// Kenapa ini penting dan bukan sekadar satu node lagi. Halaman berjudul
// "Tentang The Signal" hanyalah teks bagi mesin sampai ada yang menyatakan
// bahwa halaman itu MEMBAHAS entitas tertentu. AboutPage dengan mainEntity
// menunjuk ke #organisasi menyatakan persis itu, dan bersama
// mainEntityOfPage di sisi organisasi keduanya saling menunjuk. Rujukan
// dua arah jauh lebih sulit disalahpahami daripada rujukan satu arah.
export function halamanIdentitas({ tipe, nama, deskripsi, url }) {
  const j = {
    '@context': 'https://schema.org',
    '@type': tipe || 'WebPage',
    name: nama,
    description: deskripsi,
    url: BASE + url,
    inLanguage: 'id-ID',
    isPartOf: RUJUK_SITUS,
    publisher: RUJUK_ORGANISASI,
  };
  // AboutPage dan ContactPage BENAR-BENAR membahas penerbitnya, jadi
  // keduanya memakai mainEntity. Privasi dan Pedoman tidak: isinya
  // kebijakan, bukan uraian tentang organisasinya, jadi cukup about yang
  // memang lebih lemah.
  if (tipe === 'AboutPage' || tipe === 'ContactPage') j.mainEntity = RUJUK_ORGANISASI;
  else j.about = RUJUK_ORGANISASI;
  return j;
}
