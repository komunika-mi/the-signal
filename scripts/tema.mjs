// Tema bersambung: isu berjalan yang beritanya menyambung lintas hari.
//
// Kenapa ada: arsip menyimpan 3-11 artikel per isu (Pertalite, Gubernur BI,
// MSCI) tapi semuanya tercerai di daftar kronologis. Pembaca yang mau tahu
// "sudah sampai mana urusan Pertalite" harus menggali sendiri. Halaman tema
// menyusunnya jadi garis waktu satu isu, lengkap dengan arah terakhirnya.
//
// PENCOCOKAN DISENGAJA DETERMINISTIK, kata kunci lawan judul+deck+tag, bukan
// panggilan model. Konsekuensinya: tema baru harus didaftarkan manual di sini.
// Itu pilihan sadar. Registry ini daftar editorial (isu mana yang layak
// diikuti), bukan klasterisasi otomatis; dan pencocokan yang bisa dihitung
// ulang kapan pun berarti artikel baru menempel ke temanya tanpa biaya model
// dan tanpa bisa salah kamar gara-gara halusinasi.
//
// BADAN ARTIKEL SENGAJA TIDAK IKUT DICOCOKKAN. Kata seperti "rupiah" atau
// "UMKM" muncul di badan artikel apa saja sebagai konteks; kalau badan ikut
// dipindai, tema berubah jadi keranjang sampah. Judul, deck, dan tag adalah
// tempat pokok bahasan dinyatakan.
export const TEMA = [
  {
    slug: 'pembatasan-pertalite',
    nama: 'Pembatasan Subsidi BBM',
    deskripsi: 'Pemerintah menggeser subsidi BBM menjauh dari kelompok mampu: ' +
      'pembatasan Pertalite untuk desil atas, penyesuaian penyaluran, dan reaksi pasar.',
    kata: /pertalite|subsidi bbm|bbm subsidi|bbm bersubsidi|desil 9/i,
  },
  {
    slug: 'transisi-gubernur-bi',
    nama: 'Transisi Gubernur BI',
    deskripsi: 'Kursi Gubernur Bank Indonesia berganti: pencalonan Destry Damayanti, ' +
      'proses di DPR, dan bagaimana pasar membaca independensi bank sentral.',
    kata: /gubernur bi|destry damayanti|perry warjiyo/i,
  },
  {
    slug: 'rebalancing-msci',
    nama: 'Rebalancing MSCI',
    deskripsi: 'MSCI mengeluarkan saham Indonesia dari indeks utamanya tanpa pengganti. ' +
      'Efeknya menjalar ke rupiah dan IHSG menjelang tanggal efektif 1 September 2026.',
    kata: /msci/i,
  },
  {
    slug: 'kendaraan-listrik',
    nama: 'Kendaraan Listrik Nasional',
    deskripsi: 'Dari peluncuran MoLiNas sampai kapasitas pabrik yang melampaui penjualan: ' +
      'seberapa nyata permintaan mengikuti ambisi produksi kendaraan listrik.',
    kata: /molinas|motor listrik|kendaraan listrik|mobil listrik|\bEV\b/i,
  },
  {
    slug: 'pembiayaan-umkm',
    nama: 'Pembiayaan UMKM',
    deskripsi: 'KUR, PNM Mekaar, dan kredit ultra mikro: pembiayaan formal yang makin ' +
      'terkonsentrasi ke usaha kecil, dan apakah penyalurannya mengikuti janjinya.',
    kata: /\bKUR\b|mekaar|ultra ?mikro|pembiayaan umkm|kredit umkm/i,
  },
  {
    slug: 'danantara',
    nama: 'Langkah Danantara',
    deskripsi: 'Ke mana dana kelolaan Danantara bergerak: porsi saham BEI, penempatan ' +
      'di BUMN, dan pergeseran kendali di lembaga-lembaga keuangan.',
    kata: /danantara/i,
  },
  {
    slug: 'ruu-ketenagakerjaan',
    nama: 'RUU Ketenagakerjaan',
    deskripsi: 'Penyusunan RUU Ketenagakerjaan antara DPR dan serikat buruh, dan apa ' +
      'artinya bagi biaya tenaga kerja dunia usaha.',
    kata: /ruu ketenagakerjaan|serikat buruh|kspsi/i,
  },
];

// Halaman tema baru dirender setelah bahannya cukup untuk disebut "bersambung".
// Satu artikel bukan garis waktu; halaman berisi satu entri justru membuat
// fiturnya tampak kosong.
export const MIN_ARTIKEL_TEMA = 3;

// Bidang yang dipindai: tempat pokok bahasan dinyatakan (lihat catatan atas).
//
// TIAP BIDANG DIUJI SENDIRI-SENDIRI, tidak digabung jadi satu string.
// Versi gabung pernah menghasilkan frasa hantu: tags ["BBM","Subsidi","ESDM"]
// yang di-join spasi menjadi "BBM Subsidi ESDM" cocok dengan pola
// /bbm subsidi/ padahal frasa itu tidak ada di satu bidang pun. Ditangkap
// verifikator 14 Agustus 2026 pada artikel harga-bbm-dan-lpg-subsidi:
// judul, deck, dan tiap tag satuannya sama-sama TIDAK cocok, tapi
// gabungannya cocok. Pencocokan lintas batas bidang selalu frasa karangan.
function bidangUji(a) {
  return [a.title, a.deck, ...(a.tags || [])].map(x => String(x || ''));
}

export function temaDariArtikel(a) {
  const bidang = bidangUji(a);
  return TEMA.filter(x => bidang.some(b => x.kata.test(b))).map(x => x.slug);
}

// Kelompokkan seluruh arsip per tema. Hanya tema yang lolos ambang yang keluar,
// artikel di dalamnya terurut terbaru dulu (mengikuti urutan articles.js).
export function kelompokTema(ARTICLES) {
  const isi = new Map();
  for (const tema of TEMA) isi.set(tema.slug, []);
  for (const a of ARTICLES) {
    for (const slug of temaDariArtikel(a)) isi.get(slug).push(a);
  }
  return TEMA
    .map(t => ({ ...t, artikel: isi.get(t.slug) }))
    .filter(t => t.artikel.length >= MIN_ARTIKEL_TEMA);
}
