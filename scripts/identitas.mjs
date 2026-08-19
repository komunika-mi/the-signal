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
  alternateName: 'The Signal Indonesia',
  url: BASE + '/',
  logo: {
    '@type': 'ImageObject',
    url: BASE + '/assets/img/icon-512.png',
    width: 512, height: 512,
  },
  description: 'Media ekonomi Indonesia yang membaca arah kebijakan dan aksi ' +
    'korporasi dari dokumen resmi. Kolaborasi editorial dengan tvOneNews.',
  inLanguage: 'id-ID',
  email: 'komunika.mi@gmail.com',
  sameAs: [
    'https://t.me/thesignalid',
    'https://buttondown.com/the-signal',
  ],
  correctionsPolicy: BASE + '/pedoman-media-siber.html',
  publishingPrinciples: BASE + '/pedoman-media-siber.html',
  ethicsPolicy: BASE + '/pedoman-media-siber.html',
  verificationFactCheckingPolicy: BASE + '/pedoman-media-siber.html',
  parentOrganization: {
    '@type': 'Organization', name: 'adsmediamix.id', url: 'https://adsmediamix.id',
  },
};

export const NODE_SITUS = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': ID_SITUS,
  name: 'The Signal',
  url: BASE + '/',
  inLanguage: 'id-ID',
  publisher: { '@id': ID_ORGANISASI },
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
