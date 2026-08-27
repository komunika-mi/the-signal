// Artikel kembar yang kanoniknya dialihkan ke versi utama.
//
// Kunci = slug DUPLIKAT, nilai = slug UTAMA. Halaman duplikatnya TETAP ADA
// dan tetap bisa dibaca - kebijakan situs ini melarang penghapusan - tapi
// <link rel="canonical"> dan og:url-nya menunjuk versi utama, dan ia keluar
// dari sitemap serta feed supaya sinyal pencariannya terkumpul di satu
// halaman alih-alih dua halaman saling memakan peringkat.
//
// ATURAN MEMILIH UTAMA: yang terbit LEBIH DULU. Pada duplikat lintas sumber,
// yang lebih dulu kebetulan juga versi sumber primernya (siaran pers BI/BPS),
// dan itu sejalan dengan positioning situs: membaca dari dokumen resmi.
//
// Daftar ini HASIL KURASI TANGAN dari audit 27 Agustus 2026 (15 pasangan
// kandidat, hanya 5 yang lolos). Yang SENGAJA TIDAK masuk, dan jangan
// ditambahkan tanpa membaca artikelnya:
//   - KDTN 3 artikel jual saham: penjualan BERUNTUN, tiga peristiwa.
//   - SUPA 3 artikel insentif 7 juta saham: TIGA DIREKSI BERBEDA (Amalia,
//     Sukiwan, direksi asal India) - pengumuman IDX terpisah LK-...-17/24/65.
//     Nyaris salah dikanonikkan sebelum deck-nya dibaca.
//   - PTPP RUPO Obligasi III vs IV: dua seri obligasi.
//   - AADI dividen 1:12 vs 1:10 dan HMETD rencana vs hasil RUPS: rencana lalu
//     keputusan, dua peristiwa dengan fakta berbeda.
//   - MEDS pelepasan saham bertahap: jumlah dan persentase beda tiap kali.
//   - Destry "calon tunggal" vs "+DPR segera bahas": hari kedua membawa
//     perkembangan baru.
//
// Duplikat baru hanya ditambahkan manual setelah kedua artikel DIBACA.
// Penjaga di build-pages.mjs menggagalkan build kalau slug di sini tidak ada
// di arsip atau membentuk rantai.
export const KANONIK_GANDA = {
  // CMRY: dua tulisan untuk satu keputusan dividen (selisih 2,6 menit, dua
  // jalur pengumuman EREP untuk aksi yang sama). Utama = terbit duluan dan
  // judulnya memuat nilai totalnya.
  'cmry-bagikan-dividen-interim-rp100-per-saham':
    'cmry-bagikan-dividen-interim-rp100-per-saham-rp793-miliar',

  // POLL: "koreksi" lalu "ralat" laporan keuangan interim yang sama
  // (selisih 39 menit, dua kiriman EREP untuk tindakan korektif yang sama).
  'poll-sampaikan-ralat-laporan-keuangan-interim':
    'poll-sampaikan-koreksi-laporan-keuangan-interim',

  // Reaksi pasar yang sama ditulis dua kali dalam 31 menit
  // ("diusulkan" vs "diajukan").
  'rupiah-menguat-usai-destry-diajukan-calon-gubernur-bi':
    'rupiah-menguat-usai-destry-diusulkan-jadi-gubernur-bi',

  // ULN US$453,4 miliar: siaran pers BI (utama, sumber primer, duluan) vs
  // tulisan dari liputan tvOne 1,7 jam kemudian.
  'utang-luar-negeri-ri-naik-4-4-persen-jadi-us-453-4-miliar':
    'utang-luar-negeri-ri-naik-tipis-ke-us-453-4-miliar',

  // PDB kuartal II 5,29%: rilis resmi BPS (utama, 4 Agustus) vs tulisan dari
  // liputan tvOne 5,5 hari kemudian.
  'ekonomi-ri-tumbuh-5-29-persen-di-kuartal-ii-2026':
    'ekonomi-ri-tumbuh-5-29-persen-pada-triwulan-ii-2026',
};
