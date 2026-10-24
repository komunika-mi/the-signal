// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "uvcr-cetak-laba-bersih-rp10-6-miliar-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "UVCR Cetak Laba Bersih Rp10,6 Miliar, [Arus Kas] Operasi Negatif",
  "deck": "Laba bersih UVCR melonjak hampir lima kali lipat jadi Rp10,6 miliar dalam sembilan bulan, tapi arus kas operasi makin negatif akibat penumpukan persediaan voucher.",
  "date": "24 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "laporan keuangan",
   "Ultra Voucher",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261024100644-64896-0/FinancialStatement-2026-III-UVCR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-luncurkan-pengawas-bbm-subsidi-di-3-679-spbu",
  "category": "Energi",
  "title": "Pemerintah [Luncurkan] Pengawas BBM Subsidi di 3.679 SPBU",
  "deck": "ESDM menempatkan petugas muda di 3.679 SPBU seluruh Indonesia untuk mengawasi penyaluran BBM bersubsidi dan BBM penugasan, cegah kebocoran di lapangan.",
  "date": "24 Oktober 2026",
  "image": "assets/img/pemerintah-luncurkan-pengawas-bbm-subsidi-di-3-679-spbu.jpg",
  "imageV": "mvlvtuxt",
  "tags": [
   "BBM bersubsidi",
   "ESDM",
   "SPBU",
   "Pengawal Energi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/malam-puncak-penghargaan-energi-subroto-2026-pemerintah-luncurkan-program-pengawal-energi-untuk-3679-spbu",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kadin-fest-bekasi-2027-padukan-konser-dan-expo-umkm",
  "category": "UMKM",
  "title": "KADIN Fest Bekasi 2027 Padukan Konser dan [Expo] UMKM",
  "deck": "KADIN Kota Bekasi menyiapkan festival musik dua hari dipadukan Pasar Rakyat dan Expo UMKM pada Januari 2027, membidik 40.000 pengunjung.",
  "date": "24 Oktober 2026",
  "image": "assets/img/kadin-fest-bekasi-2027-padukan-konser-dan-expo-umkm.jpg",
  "imageV": "mvljdk4f",
  "tags": [
   "KADIN Bekasi",
   "UMKM",
   "Festival Musik",
   "Ekonomi Kreatif"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474700-gelar-kadin-fest-2027-kadin-kota-bekasi-padukan-konser-musik-lintas-generasi-dan-expo-umkm"
 },
 {
  "slug": "esdm-revisi-perpres-26-2026-demi-ketahanan-energi",
  "category": "Energi",
  "title": "ESDM [Revisi] Perpres 26/2026 demi Ketahanan Energi",
  "deck": "ESDM merampungkan revisi Perpres 26/2026 untuk mempermudah impor minyak mentah, termasuk skema baru lewat BLU agar Pertamina bisa ikut rencana impor 150 juta barel dari Rusia.",
  "date": "24 Oktober 2026",
  "image": "assets/img/esdm-revisi-perpres-26-2026-demi-ketahanan-energi.jpg",
  "imageV": "mvljs3dj",
  "tags": [
   "esdm",
   "energi",
   "pertamina",
   "impor minyak"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474693-demi-jaga-ketahanan-energi-kementerian-esdm-revisi-perpres-262026"
 },
 {
  "slug": "bike-akui-dana-akuisisi-rk-rp1-t-belum-cair-pne-bum-afiliasi",
  "category": "Aksi Korporasi",
  "title": "BIKE Akui Dana Akuisisi RK Rp1 T Belum Cair, PNE-BUM [Afiliasi]",
  "deck": "BIKE menjawab permintaan penjelasan Bursa soal status akuisisi RK, PNE, dan BUM yang melibatkan pihak terafiliasi serta pinjaman Rp1 triliun yang belum cair.",
  "date": "24 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "afiliasi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ec58665d21_7144e352d4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bayer-luncurkan-aplikasi-digital-untuk-petani-milenial-ri",
  "category": "Teknologi",
  "title": "Bayer Luncurkan Aplikasi [Digital] untuk Petani Milenial RI",
  "deck": "Bayer Indonesia merilis platform FARMRISE yang menggabungkan edukasi tani, info cuaca, dan cek keaslian produk untuk 6,18 juta petani milenial.",
  "date": "23 Oktober 2026",
  "image": "assets/img/bayer-luncurkan-aplikasi-digital-untuk-petani-milenial-ri.jpg",
  "imageV": "mvljdkhr",
  "tags": [
   "Bayer",
   "FARMRISE",
   "petani milenial",
   "digitalisasi pertanian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474682-berdayakan-petani-milenial-inovasi-digital-kini-sediakan-akses-belajar-hingga-cek-keaslian-produk"
 },
 {
  "slug": "pssi-tetapkan-rasio-pembagian-saham-treasuri-1-30-rupslb-28-okt",
  "category": "Aksi Korporasi",
  "title": "PSSI Tetapkan Rasio Pembagian Saham [Treasuri] 1:30, RUPSLB 28 Okt",
  "deck": "Ralat keterbukaan informasi PSSI merinci rasio 30:1 untuk pembagian 172 juta saham treasuri ke pemegang saham, dengan RUPSLB digelar 28 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "buyback",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3aa3bb38d4_cd22a9f7fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-ralat-rencana-distribusi-172-juta-saham-treasuri",
  "category": "Aksi Korporasi",
  "title": "PSSI Ralat Rencana Distribusi [172 Juta] Saham Treasuri",
  "deck": "IMC Pelita Logistik (PSSI) mengoreksi keterbukaan informasi sebelumnya, merinci rencana pembagian 172.039.636 saham treasuri ke pemegang saham pada 27 November 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "buyback",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/13eb4acbda_a697b3ba7d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-foundation-buka-daycare-umum-di-jakarta",
  "category": "Ketenagakerjaan",
  "title": "Pertamina Foundation Buka [Daycare] Umum di Jakarta",
  "deck": "Pertamina Foundation membuka layanan penitipan anak di kompleks Simprug, Jakarta, untuk umum dengan prioritas bagi pekerja dan civitas akademika Universitas Pertamina.",
  "date": "23 Oktober 2026",
  "image": "assets/img/pertamina-foundation-buka-daycare-umum-di-jakarta.jpg",
  "imageV": "mvljdkvl",
  "tags": [
   "Pertamina Foundation",
   "daycare",
   "pekerja",
   "Jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474677-ramah-keluarga-pertamina-foundation-buka-layanan-pengasuhan-anak-untuk-umum"
 },
 {
  "slug": "psgo-pks-anak-usaha-terbakar-kontribusi-30-pendapatan-terhenti",
  "category": "Aksi Korporasi",
  "title": "PSGO: PKS Anak Usaha Terbakar, [Kontribusi] 30% Pendapatan Terhenti",
  "deck": "Kebakaran di stasiun sterilizer PKS anak usaha NUSA menghentikan pengolahan TBS, padahal unit itu menyumbang sekitar 30 persen pendapatan konsolidasi PSGO dalam setahun terakhir.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "kebakaran",
   "CPO",
   "Nusaraya Agro Sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9e511f17bd_d1070b5da3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psgo-ungkap-asuransi-rp267-6-miliar-untuk-pks-nusa-yang-terbakar",
  "category": "Aksi Korporasi",
  "title": "PSGO Ungkap Asuransi [Rp267,6 Miliar] untuk PKS NUSA yang Terbakar",
  "deck": "Merespons permintaan penjelasan BEI, PSGO merinci kapasitas, kontribusi keuangan, dan nilai asuransi PKS anak usahanya yang terbakar, namun belum bisa memastikan waktu pulih dan besarnya kerugian.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "kebakaran",
   "kelapa sawit",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9e511f17bd_d1070b5da3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tanam-2-200-pohon-aren-kek-batang-incar-energi-mandiri",
  "category": "Energi",
  "title": "Tanam 2.200 Pohon [Aren], KEK Batang Incar Energi Mandiri",
  "deck": "KEK Industropolis Batang menanam 2.200 bibit aren bersama PT Mitra Aren Indonesia, menyasar konservasi lingkungan sekaligus potensi bahan baku bioetanol.",
  "date": "23 Oktober 2026",
  "image": "assets/img/tanam-2-200-pohon-aren-kek-batang-incar-energi-mandiri.jpg",
  "imageV": "mvljdl9m",
  "tags": [
   "aren",
   "bioetanol",
   "KEK Batang",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474666-dorong-kemandirian-energi-tanaman-aren-jadi-andalan-baru-di-batang"
 },
 {
  "slug": "smkm-kucurkan-pinjaman-rp30-miliar-ke-afiliasi-milik-pengendali",
  "category": "Aksi Korporasi",
  "title": "SMKM Kucurkan Pinjaman [Rp30 Miliar] ke Afiliasi Milik Pengendali",
  "deck": "SMKM memberi pinjaman Rp30 miliar ke Panasia Aquaculture, perusahaan yang seluruh sahamnya dimiliki pengendali SMKM yang juga memegang 25 persen saham SMKM.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMKM",
   "transaksi afiliasi",
   "pinjaman",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d96ce9228e_51c52b039b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pura-restrukturisasi-utang-ke-mandiri-bunga-ditangguhkan-3-bulan",
  "category": "Aksi Korporasi",
  "title": "PURA Restrukturisasi Utang ke Mandiri, Bunga [Ditangguhkan] 3 Bulan",
  "deck": "PURA dan Bank Mandiri sepakat menangguhkan 6,13 poin dari bunga kredit 9 persen selama tiga bulan, langkah yang diklaim perusahaan membantu arus kas.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PURA",
   "restrukturisasi utang",
   "Bank Mandiri",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7b28fdbd05_18d59a4111.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-targetkan-seluruh-desa-berlistrik-pada-2029",
  "category": "Energi",
  "title": "ESDM Targetkan Seluruh Desa Berlistrik pada [2029]",
  "deck": "Menteri ESDM Bahlil Lahadalia membatasi alokasi RKAB perusahaan tambang besar dan menetapkan 2029 sebagai tenggat listrik merata ke sekitar 11.000 desa yang masih gelap.",
  "date": "23 Oktober 2026",
  "image": "assets/img/esdm-targetkan-seluruh-desa-berlistrik-pada-2029.jpg",
  "imageV": "mvl0vo8v",
  "tags": [
   "ESDM",
   "RKAB",
   "Elektrifikasi",
   "Pertambangan"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hut-pertambangan-dan-energi-ke-81-bahlil-perintahkan-insan-esdm-pilih-kepentingan-rakyat",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "esdm-kerek-target-penerimaan-jadi-rp165-triliun",
  "category": "Energi",
  "title": "ESDM Kerek Target Penerimaan Jadi [Rp165] Triliun",
  "deck": "Menteri ESDM Bahlil Lahadalia menaikkan target penerimaan negara bukan pajak 2026 jadi Rp165 triliun, dari target awal sekitar Rp136 triliun.",
  "date": "23 Oktober 2026",
  "image": "assets/img/esdm-kerek-target-penerimaan-jadi-rp165-triliun.jpg",
  "imageV": "mvl0vq3b",
  "tags": [
   "PNBP ESDM",
   "Batu Bara",
   "Hilirisasi Nikel",
   "Lifting Migas"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/lampaui-target-pada-2025-pnbp-esdm-kini-dipatok-rp165-triliun",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kemendag-klaim-ekspor-tumbuh-4-74-persen-di-dua-tahun-kabinet",
  "category": "Makroekonomi",
  "title": "Kemendag Klaim Ekspor Tumbuh 4,74 Persen di [Dua Tahun] Kabinet",
  "deck": "Kemendag mengklaim tiga program prioritas mendorong ekspor dan melindungi pasar dalam negeri, ditandai perjanjian dagang baru dan aturan e-commerce yang memihak UMKM.",
  "date": "23 Oktober 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "ekspor",
   "Kemendag",
   "UMKM",
   "perdagangan internasional"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dua-tahun-kabinet-tiga-program-prioritas-kemendag-berkontribusi-dorong-kinerja-perdagangan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "umkm-kriya-yogyakarta-dibekali-aturan-ekspor-ke-uni-eropa",
  "category": "UMKM",
  "title": "UMKM Kriya Yogyakarta Dibekali Aturan [Ekspor] ke Uni Eropa",
  "deck": "Kemendag melatih 215 pelaku UMKM kriya Yogyakarta memenuhi standar mutu dan aturan bebas deforestasi Uni Eropa sebelum produk mereka dikirim ke pasar ekspor.",
  "date": "23 Oktober 2026",
  "image": "assets/img/umkm-kriya-yogyakarta-dibekali-aturan-ekspor-ke-uni-eropa.jpg",
  "imageV": "mvl0vvzh",
  "tags": [],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-sektor-kriya-yogyakarta-kemendag-sinergikan-mutu-standardisasi-dan-kekayaan-intelektual-untuk-akselerasi-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "icbp-indofood-tambah-saham-jadi-80-56-volatilitas",
  "category": "Aksi Korporasi",
  "title": "ICBP: Indofood Tambah Saham Jadi 80,56% [Volatilitas]",
  "deck": "Menjawab permintaan penjelasan BEI soal volatilitas transaksi, ICBP ungkap Indofood menambah kepemilikan 3,35 juta saham pada 19-21 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ICBP",
   "Indofood",
   "kepemilikan saham",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/957348d987_e022741f7d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sger-siap-lunasi-obligasi-rp273-6-miliar-jatuh-tempo-25-oktober",
  "category": "Aksi Korporasi",
  "title": "SGER siap lunasi [obligasi] Rp273,6 miliar jatuh tempo 25 Oktober",
  "deck": "Sumber Global Energy menyatakan dana pelunasan Obligasi Berkelanjutan I Tahap II 2025 Seri A senilai Rp273,645 miliar sudah siap sebelum jatuh tempo 25 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGER",
   "obligasi korporasi",
   "jatuh tempo obligasi",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/81932cbed8_442d6a34f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-laba-pemilik-melonjak-tapi-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "ADHI: Laba Pemilik Melonjak, tapi Arus Kas Operasi [Negatif]",
  "deck": "Laba bersih yang menjadi hak pemegang saham Adhi Karya naik tiga kali lipat pada kuartal III-2026, tapi arus kas operasi berbalik negatif dan kas perusahaan menyusut separuh.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "Adhi Karya",
   "laporan keuangan",
   "BUMN Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023202014-64924-0/FinancialStatement-2026-III-ADHI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-divestasi-saham-winner-ke-wika-rekon-rp641-juta",
  "category": "Aksi Korporasi",
  "title": "WIKA [Divestasi] Saham WINNER ke WIKA Rekon Rp641 Juta",
  "deck": "WIKA melepas 44,18 persen saham WINNER ke anak usahanya, WIKA Rekon, senilai Rp641 juta sebagai bagian penataan ulang struktur anak usaha BUMN.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "divestasi",
   "transaksi afiliasi",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1a0cb1c43d_efd420f9ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-rupsu-sukuk-gagal-keputusan-usulan-ditolak-51-8",
  "category": "Aksi Korporasi",
  "title": "WIKA: RUPSU Sukuk Gagal Keputusan, Usulan Ditolak [51,8%]",
  "deck": "RUPSU sukuk WIKA pada 21 Oktober 2026 gagal mencapai keputusan karena suara setuju atas usulan penyelesaian gagal bayar bagi hasil ke-14 dan ke-15 hanya 48,2 persen, kurang dari syarat 75 persen.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/793aab41a1_f2170cc89c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-usulan-sukuk-ditolak-lagi-71-4-suara-tak-setuju",
  "category": "Aksi Korporasi",
  "title": "WIKA: Usulan Sukuk [Ditolak] Lagi, 71,4% Suara Tak Setuju",
  "deck": "RUPSU Sukuk Mudharabah WIKA 21 Oktober gagal ambil keputusan karena 71,4% pemegang sukuk menolak usulan penjadwalan ulang bagi hasil ke-22 dan ke-23.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1032d3dc21_8df9761858.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-catatkan-obligasi-rp500-miliar-tahap-v-di-bei",
  "category": "Aksi Korporasi",
  "title": "ENRG Catatkan [Obligasi] Rp500 Miliar Tahap V di BEI",
  "deck": "ENRG mencatatkan obligasi tahap V senilai Rp500 miliar di BEI mulai 23 Oktober 2026, bagian dari program obligasi berkelanjutan bertarget Rp4 triliun.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "obligasi korporasi",
   "BEI",
   "migas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/97fab501a0_9d3ebbb139.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soho-jual-seluruh-saham-di-pfizer-indonesia-ke-pfizer-hong-kong",
  "category": "Aksi Korporasi",
  "title": "SOHO Jual Seluruh Saham di [Pfizer Indonesia] ke Pfizer Hong Kong",
  "deck": "PT Soho Industri Pharmasi, anak usaha SOHO, melepas seluruh 245.045 saham di PT Pfizer Indonesia kepada Pfizer Corporation Hong Kong Limited.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOHO",
   "Pfizer Indonesia",
   "Soho Industri Pharmasi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ad9dc057dd_1c58bd9e5d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-siapkan-stock-split-rupslb-digelar-23-november",
  "category": "Aksi Korporasi",
  "title": "PRDA Siapkan [Stock Split], RUPSLB Digelar 23 November",
  "deck": "Prodia Widyahusada menjawab permintaan penjelasan BEI soal volatilitas transaksi, mengungkap rencana stock split lewat RUPSLB 23 November dan buyback saham senilai Rp150 miliar yang masih berjalan.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "stock split",
   "buyback saham",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/540308097c_facf20f1b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lsip-siapkan-buyback-saham-rp750-miliar-hingga-akhir-2026",
  "category": "Aksi Korporasi",
  "title": "LSIP Siapkan [Buyback] Saham Rp750 Miliar hingga Akhir 2026",
  "deck": "PP London Sumatra akan membeli kembali saham maksimal Rp750 miliar dari kas internal pada 26 Oktober hingga 31 Desember 2026, memakai aturan OJK untuk kondisi pasar berfluktuasi.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LSIP",
   "buyback saham",
   "pasar modal",
   "perkebunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0884db7e64_fba905f667.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-laba-bersih-anjlok-82-pada-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "VTNY: Laba Bersih [Anjlok] 82% pada Kuartal III 2026",
  "deck": "Laba bersih Venteny Fortuna turun 82 persen jadi Rp1,53 miliar dalam sembilan bulan 2026, sementara kas perusahaan menyusut lebih dari 90 persen setelah pelunasan obligasi besar.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "laporan keuangan",
   "fintech pembiayaan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023184832-64561-0/FinancialStatement-2026-III-VTNY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "viva-jelaskan-ke-bei-pmthmetd-dilusi-saham-72-35",
  "category": "Aksi Korporasi",
  "title": "VIVA Jelaskan ke BEI, PMTHMETD Dilusi Saham [72,35%]",
  "deck": "VIVA menjawab penjelasan BEI soal PMTHMETD Rp1,72 triliun ke pihak terafiliasi HAJ dan JSM, dengan dilusi 72,35 persen dan free float turun ke 15,04 persen.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "PMTHMETD",
   "PKPU",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e1c5631e50_4105b21005.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indf-siapkan-rp750-miliar-untuk-buyback-saham",
  "category": "Aksi Korporasi",
  "title": "INDF Siapkan Rp750 Miliar untuk [Buyback] Saham",
  "deck": "Indofood menyiapkan dana internal hingga Rp750 miliar untuk membeli kembali sahamnya sendiri lewat bursa mulai 26 Oktober hingga 31 Desember 2026, memanfaatkan aturan OJK soal volatilitas pasar.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDF",
   "buyback saham",
   "Indofood",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5420d68012_2245af1070.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "icbp-siapkan-buyback-rp750-miliar-di-tengah-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "ICBP Siapkan Buyback [Rp750 Miliar] di Tengah Pasar Bergejolak",
  "deck": "Indofood CBP Sukses Makmur menyiapkan pembelian kembali saham senilai maksimal Rp750 miliar dari kas internal, berlaku 26 Oktober hingga 31 Desember 2026 sesuai aturan OJK soal pasar bergejolak.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ICBP",
   "buyback saham",
   "Indofood CBP",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7d6a58566b_f3263030cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-digital-ri-tembus-us-100-miliar-terbesar-di-asia-tenggara",
  "category": "Teknologi",
  "title": "Ekonomi Digital RI Tembus [US$100] Miliar, Terbesar di Asia Tenggara",
  "deck": "Ekonomi digital Indonesia disebut mendekati US$100 miliar dan tumbuh 14 persen, seiring pemerintah menyiapkan infrastruktur pusat data dan energi hingga 2030.",
  "date": "23 Oktober 2026",
  "image": "assets/img/server-data.jpg",
  "tags": [
   "ekonomi digital",
   "KEK",
   "pusat data",
   "media lokal"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7180/perkuat-pertumbuhan-ekonomi-digital-pemerintah-dorong-media-lokal-jadi-penggerak-ekonomi-daerah",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bi-perkuat-sinergi-jaga-inflasi-pangan-di-sulampua",
  "category": "Makroekonomi",
  "title": "BI Perkuat Sinergi Jaga [Inflasi] Pangan di Sulampua",
  "deck": "Bank Indonesia bersama pemerintah pusat dan daerah menggelar forum pengendalian inflasi pangan di Sulawesi, Maluku, dan Papua, menyasar inflasi pangan bergejolak di kisaran 3-5 persen.",
  "date": "23 Oktober 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "Inflasi Pangan",
   "Bank Indonesia",
   "Sulampua",
   "Ketahanan Pangan"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "doid-ekuitas-buma-anjlok-94-89-persen-ke-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "DOID: Ekuitas BUMA [Anjlok] 94,89 Persen ke Semester I 2026",
  "deck": "BUMA Internasional Grup menjawab permintaan penjelasan BEI soal ekuitas yang susut tajam, rasio utang anak usaha BOLD yang melampaui batas, dan piutang ke BOLD senilai USD95,5 juta.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOID",
   "ekuitas",
   "covenant utang",
   "BUMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f64dc16ddc_01ca04bac2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buka-bukukan-rugi-rp881-miliar-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "BUKA bukukan [rugi] Rp881 miliar di sembilan bulan 2026",
  "deck": "Pendapatan BUKA tumbuh 19 persen pada Januari-September 2026, tetapi perseroan berbalik rugi Rp881 miliar akibat rugi investasi Rp2,04 triliun.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKA",
   "Bukalapak",
   "laporan keuangan",
   "rugi investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023110320-64761-0/FinancialStatement-2026-III-BUKA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-revisi-rencana-terbitkan-200-juta-saham-baru-picu-dilusi",
  "category": "Aksi Korporasi",
  "title": "UVCR Revisi Rencana Terbitkan 200 Juta Saham Baru, Picu [Dilusi]",
  "deck": "UVCR mengoreksi keterbukaan informasi PMTHMETD: rencana terbitkan hingga 200 juta saham baru (9,99%) ke calon investor PT Trimegah Sumber Mas, RUPSLB digelar 27 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "PMTHMETD",
   "Ultra Voucher",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1198e2168b_0556f39d07.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-jelaskan-rincian-dana-pmthmetd-rp27-miliar-di-rupslb",
  "category": "Aksi Korporasi",
  "title": "UVCR Jelaskan Rincian Dana [PMTHMETD] Rp27 Miliar di RUPSLB",
  "deck": "RUPSLB UVCR pada 27 Oktober 2026 membahas penerbitan saham baru tanpa hak memesan efek terlebih dahulu senilai Rp27 miliar dan penyesuaian kode usaha KBLI 2025.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "RUPSLB",
   "PMTHMETD",
   "Ultra Voucher"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5b64cab7e2_e25cbdaa96.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-jatuhkan-denda-rp2-52-triliun-ke-pelanggar-pasar-modal",
  "category": "Pasar Modal",
  "title": "OJK Jatuhkan Denda [Rp2,52 Triliun] ke Pelanggar Pasar Modal",
  "deck": "OJK mencatat total denda Rp2,52 triliun kepada ratusan pelanggar aturan pasar modal hingga 16 Oktober 2026, didominasi tiga kasus besar DSSA, BREN, dan CUAN.",
  "date": "23 Oktober 2026",
  "image": "assets/img/ojk-jatuhkan-denda-rp2-52-triliun-ke-pelanggar-pasar-modal.jpg",
  "imageV": "mvkvm8tn",
  "tags": [
   "OJK",
   "pasar modal",
   "sanksi",
   "DSSA"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474625-ojk-jatuhkan-denda-total-rp252-triliun-kepada-ratusan-pelanggar-hukum-pasar-modal"
 },
 {
  "slug": "tgra-ganti-lapkeu-q3-jadi-audited-sinyal-rights-issue",
  "category": "Aksi Korporasi",
  "title": "TGRA Ganti Lapkeu Q3 Jadi [Audited], Sinyal Rights Issue",
  "deck": "PT Terregra Asia Energy mengganti laporan keuangan kuartal III 2026 dari versi tak teraudit menjadi teraudit, menyusul rencana aksi korporasi rights issue atau private placement.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "rights issue",
   "private placement",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/26295308ae_c7204e521e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-catat-dilusi-13-kali-lipat-saat-ekuitas-balik-positif",
  "category": "Aksi Korporasi",
  "title": "UNSP Catat [Dilusi] 13 Kali Lipat Saat Ekuitas Balik Positif",
  "deck": "Ekuitas BSP Plantations (UNSP) berbalik positif Rp2,77 triliun pada September 2026, didorong konversi utang jadi saham yang mendilusi pemegang saham lama sampai 13 kali lipat.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "ekuitas",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023170512-64539-0/FinancialStatement-2026-III-UNSP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-buyback-capai-2-87-harga-beli-tembus-rp3-586",
  "category": "Aksi Korporasi",
  "title": "PRDA: Buyback Capai [2,87%], Harga Beli Tembus Rp3.586",
  "deck": "Prodia Widyahusada melaporkan akumulasi buyback saham naik ke 2,87 persen per 23 Oktober 2026, dengan harga beli rata-rata tertinggi sepanjang program di Rp3.586.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/93ee98442a_8955dc608a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msin-bagikan-materi-pubex-laba-bersih-h1-naik-14-pubex",
  "category": "Aksi Korporasi",
  "title": "MSIN Bagikan Materi Pubex, Laba Bersih H1 Naik 14% [Pubex]",
  "deck": "Materi public expose insidentil MSIN memuat kinerja H1-2026: pendapatan naik 10%, laba kotor naik 17%, EBITDA naik 12%, laba bersih naik 14% dibanding H1-2025.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIN",
   "Public Expose",
   "Laporan Keuangan",
   "MNC Digital Entertainment"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b28e6f3cca_d66e6dbfc4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-gagal-bayar-kupon-obligasi-saham-disuspensi-lanjut",
  "category": "Aksi Korporasi",
  "title": "PTPP Gagal Bayar Kupon Obligasi, Saham [Disuspensi] Lanjut",
  "deck": "PTPP gagal membayar bunga obligasi dan bagi hasil sukuk yang jatuh tempo 22 Oktober 2026, sehingga BEI melanjutkan penghentian sementara perdagangan sahamnya di seluruh pasar.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "suspensi saham",
   "gagal bayar obligasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1f227bbcf5_d4402922a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-resmi-keluar-dari-pemantauan-khusus-bei-efektif-26-oktober",
  "category": "Aksi Korporasi",
  "title": "MKNT Resmi Keluar dari [Pemantauan Khusus] BEI, Efektif 26 Oktober",
  "deck": "BEI mencabut status pemantauan khusus saham PT Mitra Komunikasi Nusantara Tbk (MKNT) mulai 26 Oktober 2026, setelah kriteria ekuitas negatif yang jadi alasan masuknya dinyatakan tidak lagi berlaku.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "BEI",
   "pemantauan khusus",
   "papan pengembangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2bb127a8d5_df2ebe33b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koni-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "KONI Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Perdana Bangun Pusaka Tbk (KONI) menjawab permintaan BEI terkait pergerakan harga sahamnya yang tidak wajar, menyatakan tidak ada informasi material maupun rencana aksi korporasi di baliknya.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KONI",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b81832cf31_935aa33eb4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-waran-sido-usai-dividen-interim-rp10-saham",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Waran [SIDO] usai Dividen Interim Rp10/Saham",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran terstruktur SIDOZPCH7A menyusul dividen interim SIDO Rp10 per saham, efektif awal November 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "SIDO",
   "waran terstruktur",
   "Maybank Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cc3cfe8934_33b4178ea5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pskt-jelaskan-volatilitas-saham-singgung-rencana-buyback",
  "category": "Aksi Korporasi",
  "title": "PSKT Jelaskan Volatilitas Saham, Singgung Rencana [Buyback]",
  "deck": "Merespons permintaan Bursa Efek Indonesia, Red Planet Indonesia (PSKT) memastikan tak ada info material tersembunyi, namun tengah menimbang buyback saham.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSKT",
   "Red Planet Indonesia",
   "buyback saham",
   "volatilitas transaksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8afa6e9f4b_22364de794.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-raih-penghargaan-inovasi-asia-2026",
  "category": "BUMN",
  "title": "Pegadaian Raih [Penghargaan] Inovasi Asia 2026",
  "deck": "Pegadaian menyabet dua penghargaan di Asian Innovation Excellence Awards 2026 atas transformasi digital lewat aplikasi Tring!.",
  "date": "23 Oktober 2026",
  "image": "assets/img/pegadaian-raih-penghargaan-inovasi-asia-2026.jpg",
  "imageV": "mvkvm99e",
  "tags": [
   "Pegadaian",
   "AIEA 2026",
   "Tring",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474604-pegadaian-raih-penghargaan-di-asian-innovation-excellence-awards-2026"
 },
 {
  "slug": "pajak-ntb-tembus-rp2-18-triliun-tumbuh-15-36",
  "category": "Makroekonomi",
  "title": "Pajak NTB Tembus Rp2,18 Triliun, [Tumbuh] 15,36%",
  "deck": "Realisasi pajak Nusa Tenggara Barat hingga September 2026 mencapai Rp2.184,05 miliar, naik 15,36 persen, dengan aturan baru soal kuasa wajib pajak dan pajak final UMKM turut disosialisasikan.",
  "date": "23 Oktober 2026",
  "image": "assets/img/pajak-ntb-tembus-rp2-18-triliun-tumbuh-15-36.jpg",
  "imageV": "mvkpytg9",
  "tags": [
   "Pajak",
   "NTB",
   "DJP",
   "PPh Final"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/kinerja-penerimaan-pajak-ntb-tetap-terjaga-hingga-triwulan-iii-2026",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "xmes-manajer-investasi-etf-emas-ganti-ke-danareksa",
  "category": "Aksi Korporasi",
  "title": "XMES: [Manajer Investasi] ETF Emas Ganti ke Danareksa",
  "deck": "Pengelolaan Reksa Dana Syariah Mandiri ETF Emas (XMES) beralih dari Mandiri Manajemen Investasi ke Danareksa Investment Management Indonesia, efektif 23 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMES",
   "reksa dana",
   "manajer investasi",
   "ETF emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8c8bf8e466_c9106c9ccf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipac-apac-tawar-tender-rp250-saham-demi-go-private",
  "category": "Aksi Korporasi",
  "title": "IPAC: APAC Tawar [Tender] Rp250/Saham demi Go Private",
  "deck": "APAC Investment 2, pengendali IPAC, resmi menawarkan Rp250 per saham untuk membeli sisa 9,4 persen saham publik, bagian dari rencana go private dan delisting dari BEI.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPAC",
   "tender sukarela",
   "go private",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/22e0f56cb5_f768e53ccc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmsk-manajer-investasi-etf-sri-kehati-beralih-ke-danareksa",
  "category": "Aksi Korporasi",
  "title": "XMSK: [Manajer Investasi] ETF SRI-Kehati Beralih ke Danareksa",
  "deck": "Pengelolaan Reksa Dana Indeks Mandiri ETF SRI-Kehati pindah dari PT Mandiri Manajemen Investasi ke PT Danareksa Investment Management Indonesia mulai 23 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMSK",
   "Reksa Dana",
   "ETF SRI-Kehati",
   "Manajer Investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5c4e84d28d_1bf148e682.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-laba-9-bulan-naik-7-ke-rp1-01-triliun-aset-rp24-t",
  "category": "Aksi Korporasi",
  "title": "BTPS: Laba 9 Bulan [Naik] 7% ke Rp1,01 Triliun, Aset Rp24 T",
  "deck": "Bank BTPN Syariah mencatat laba bersih Rp1,01 triliun dan aset Rp24 triliun per akhir September 2026, ditopang penyaluran pembiayaan musyarakah yang melonjak.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "laporan keuangan",
   "perbankan syariah",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023152302-64710-0/FinancialStatement-2026-III-BTPS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmlf-ganti-manajer-investasi-jadi-danareksa-im-efektif-23-oktober",
  "category": "Aksi Korporasi",
  "title": "XMLF ganti [Manajer Investasi] jadi Danareksa IM, efektif 23 Oktober",
  "deck": "Manajer Investasi Reksa Dana Indeks Mandiri ETF LQ45 (XMLF) berganti dari PT Mandiri Manajemen Investasi menjadi PT Danareksa Investment Management Indonesia, efektif 23 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMLF",
   "reksa dana",
   "manajer investasi",
   "ETF LQ45"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eb6462bd50_fc1d7403a8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdes-manajer-investasi-gold-etf-syariah-beralih-ke-danareksa",
  "category": "Aksi Korporasi",
  "title": "XDES: Manajer Investasi Gold ETF Syariah Beralih ke [Danareksa]",
  "deck": "Manajer investasi Reksa Dana Syariah BRI MI Gold ETF Syariah beralih dari BRI MI ke Danareksa Investment Management Indonesia per 23 Oktober 2026, menyusul penggabungan empat manajer investasi BUMN.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDES",
   "Danareksa Investment Management",
   "Manajer Investasi",
   "Merger BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c7bbc3e317_982d5b61fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cfin-kuartal-iii-laba-naik-13-liabilitas-turun-24",
  "category": "Aksi Korporasi",
  "title": "CFIN Kuartal III: Laba Naik 13%, Liabilitas [Turun] 24%",
  "deck": "Laba bersih Clipan Finance naik 13,3% jadi Rp153,65 miliar pada sembilan bulan 2026, sementara utang bank susut Rp873,63 miliar dan piutang pembiayaan konsumen mengecil.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CFIN",
   "laporan keuangan",
   "multifinance",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023145818-64729-0/FinancialStatement-2026-III-CFIN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sido-bagi-dividen-interim-rp300-miliar-rp10-per-saham",
  "category": "Aksi Korporasi",
  "title": "SIDO Bagi [Dividen] Interim Rp300 Miliar, Rp10 per Saham",
  "deck": "Sido Muncul akan membagikan dividen interim tunai Rp10 per saham senilai total Rp300 miliar untuk tahun buku 2026, dibayarkan 20 November 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIDO",
   "dividen interim",
   "Sido Muncul",
   "emiten farmasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4e330fef4c_2d89438721.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdif-manajer-investasi-beralih-ke-danareksa-usai-merger-bumn",
  "category": "Aksi Korporasi",
  "title": "XDIF: Manajer Investasi Beralih ke Danareksa usai [Merger] BUMN",
  "deck": "Manajer investasi XDIF beralih dari BRI Manajemen Investasi ke PT Danareksa Investment Management Indonesia, menyusul penggabungan empat manajer investasi BUMN efektif 1 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDIF",
   "manajer investasi",
   "merger BUMN",
   "Danareksa Investment Management"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a61aad6ae0_530f560947.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipcc-laba-9-bulan-turun-6-9-jadi-rp177-2-miliar",
  "category": "Aksi Korporasi",
  "title": "IPCC: Laba 9 Bulan [Turun] 6,9% Jadi Rp177,2 Miliar",
  "deck": "Pendapatan dan laba bersih Indonesia Kendaraan Terminal (IPCC) turun pada sembilan bulan pertama 2026, sementara utang dividen sudah lunas dan kas masih di atas Rp1 triliun.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCC",
   "laporan keuangan",
   "pelabuhan",
   "Pelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023141823-64496-0/FinancialStatement-2026-III-IPCC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jelang-nataru-pemerintah-waspadai-lonjakan-harga-cabai",
  "category": "Makroekonomi",
  "title": "Jelang Nataru, Pemerintah Waspadai Lonjakan Harga [Cabai]",
  "deck": "Pemerintah memperkuat rantai pasok pangan di Sulampua dan menjalankan stimulus Rp26,34 triliun menjelang Nataru, seiring inflasi pangan naik ke 5,03 persen dan harga cabai melonjak tajam.",
  "date": "23 Oktober 2026",
  "image": "assets/img/jalan-tol-konstruksi.jpg",
  "tags": [
   "inflasi pangan",
   "Nataru",
   "cabai",
   "Sulampua"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7179/antisipasi-inflasi-jelang-nataru-pemerintah-perkuat-rantai-pasok-pangan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "baik-ganti-komisaris-utama-jadi-yeni-isnawati",
  "category": "Aksi Korporasi",
  "title": "BAIK Ganti [Komisaris] Utama Jadi Yeni Isnawati",
  "deck": "Yeni Isnawati menjadi Komisaris Utama baru BAIK, menggantikan Drs. Untung Sudarto, efektif sejak RUPSLB 31 Maret 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "komisaris",
   "RUPSLB",
   "pergantian pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a06ac7d689_10bd3b36ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arto-jadwalkan-mesop-tahap-i-periode-ii-harga-rp1-550",
  "category": "Aksi Korporasi",
  "title": "ARTO Jadwalkan [MESOP] Tahap I Periode II, Harga Rp1.550",
  "deck": "Bank Jago menjadwalkan pelaksanaan opsi saham karyawan tahap kedua tahun ini, periode 2 November-11 Desember 2026, harga pelaksanaan Rp1.550 per saham, dengan maksimal 38,53 juta lembar saham baru.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTO",
   "MESOP",
   "Bank Jago",
   "opsi saham karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/937b60297d_346c1452ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-jadwalkan-rupslb-1-desember-cum-date-6-november",
  "category": "Aksi Korporasi",
  "title": "NSSS Jadwalkan [RUPSLB] 1 Desember, Cum Date 6 November",
  "deck": "PT Nusantara Sawit Sejahtera Tbk mengumumkan rencana RUPSLB pada 1 Desember 2026, dengan batas pencatatan pemegang saham 6 November 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "RUPSLB",
   "pasar modal",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7508694725_bcbb66fb80.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-jadwalkan-ulang-rupslb-ojk-minta-klarifikasi-rights-issue",
  "category": "Aksi Korporasi",
  "title": "ULTJ Jadwalkan Ulang RUPSLB, OJK Minta [Klarifikasi] Rights Issue",
  "deck": "RUPSLB ULTJ yang membahas akuisisi 100% Frisian Flag Indonesia lewat rights issue mundur ke 6 November 2026 setelah OJK minta klarifikasi tambahan.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "RUPSLB",
   "Rights Issue",
   "Frisian Flag Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0b1dc88e38_0ceaea7b4e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-jelaskan-detail-akuisisi-nikel-dan-rights-issue-dalam-koreksi",
  "category": "Aksi Korporasi",
  "title": "PACK Jelaskan Detail [Akuisisi Nikel] dan Rights Issue dalam Koreksi",
  "deck": "Koreksi keterbukaan informasi PACK memerinci lini usaha baru, akuisisi saham Bukit Makmur Istindo Nikeltama dan Denway Development, serta rencana rights issue, tapi nilai transaksinya belum diumumkan.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "Rights Issue",
   "Akuisisi Nikel",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bf2862a2c0_7990e93bc2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-targetkan-kredit-rakyat-rp400-triliun-di-2027",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo Targetkan Kredit Rakyat [Rp400 Triliun] di 2027",
  "deck": "Presiden Prabowo Subianto meluncurkan Dewan Nasional Kesejahteraan Keuangan dan menargetkan penyaluran kredit rakyat Rp400 triliun pada 2027, naik dari realisasi Rp53 triliun saat ini.",
  "date": "23 Oktober 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "DNKK",
   "kredit rakyat",
   "inklusi keuangan",
   "PP 42/2026"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7178/presiden-prabowo-luncurkan-dewan-nasional-kesejahteraan-keuangan-targetkan-penyaluran-kredit-rakyat-rp400-triliun-pada-2027",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kilang-balikpapan-99-persen-rampung-stok-bbm-dipastikan-aman",
  "category": "Energi",
  "title": "Kilang Balikpapan [99 Persen] Rampung, Stok BBM Dipastikan Aman",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut proyek kilang Balikpapan sudah 99 persen selesai, sembari memastikan stok Pertalite dan BBM nonsubsidi masih aman di atas standar minimum.",
  "date": "23 Oktober 2026",
  "image": "assets/img/kilang-balikpapan-99-persen-rampung-stok-bbm-dipastikan-aman.jpg",
  "imageV": "mvkhlqtx",
  "tags": [
   "RDMP Balikpapan",
   "BBM Subsidi",
   "ESDM",
   "Pertamina"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kilang-balikpapan-sudah-99-persen-stok-bbm-nasional-dipastikan-aman",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "india-hentikan-penyelidikan-antisubsidi-kaca-ri",
  "category": "Industri",
  "title": "India [Hentikan] Penyelidikan Antisubsidi Kaca RI",
  "deck": "Otoritas India menghentikan penyelidikan antisubsidi atas kaca polos asal Indonesia karena volume impornya di bawah ambang batas, sehingga ekspor bisa berlanjut tanpa tarif tambahan.",
  "date": "23 Oktober 2026",
  "image": "assets/img/gudang-bahan-baku.jpg",
  "tags": [
   "ekspor kaca",
   "India",
   "antisubsidi",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/india-hentikan-penyelidikan-antisubsidi-produk-cfg-asal-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "uang-beredar-tumbuh-8-3-meski-penyaluran-kredit-melambat",
  "category": "Moneter",
  "title": "Uang Beredar [Tumbuh] 8,3% Meski Penyaluran Kredit Melambat",
  "deck": "BI mencatat uang beredar tumbuh 8,3 persen pada September 2026, naik tipis dari bulan sebelumnya, sementara penyaluran kredit ke masyarakat justru melambat menjadi 12,7 persen.",
  "date": "23 Oktober 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "Bank Indonesia",
   "Uang Beredar",
   "Kredit Perbankan",
   "M2"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bjlb01-dana-amortisasi-pokok-rp100-m-siap-dibayar-31-okt",
  "category": "Aksi Korporasi",
  "title": "BJLB01: Dana Amortisasi Pokok [Rp100 M] Siap Dibayar 31 Okt",
  "deck": "Danareksa Investment Management menyatakan dana Rp100 miliar untuk amortisasi pokok pertama EBA Syariah BJLB01 sudah tersedia, jatuh tempo 31 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJLB01",
   "EBA Syariah",
   "Danareksa Investment Management",
   "amortisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0bbad26127_4d53df620b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-dana-sukuk-rp40-miliar-tuntas-dibelanjakan-untuk-cpo",
  "category": "Aksi Korporasi",
  "title": "BWPT: Dana [Sukuk] Rp40 Miliar Tuntas Dibelanjakan untuk CPO",
  "deck": "Eagle High Plantations melaporkan seluruh dana bersih sukuk Rp40,04 miliar sudah terpakai untuk beli CPO dari tiga pemasok sawit, tanpa sisa dana.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "sukuk",
   "CPO",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6eb5ab08e9_4a9335e558.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-dana-obligasi-rp98-3-miliar-tuntas-lunasi-utang-bank",
  "category": "Aksi Korporasi",
  "title": "BWPT: Dana Obligasi Rp98,3 Miliar [Tuntas] Lunasi Utang Bank",
  "deck": "Eagle High Plantations merealisasikan seluruh dana bersih Rp98,28 miliar dari Obligasi Berkelanjutan II Tahap I 2026 untuk melunasi utang ke dua kreditur dan membeli CPO, tanpa sisa dana.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "obligasi korporasi",
   "refinancing utang",
   "CPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5c220ed374_effc15ab08.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rgas-pendapatan-9-bulan-anjlok-52-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "RGAS: Pendapatan 9 Bulan Anjlok 52%, [Arus Kas] Operasi Negatif",
  "deck": "Laporan keuangan interim kuartal III 2026 PT Kian Santang Muliatama Tbk menunjukkan pendapatan turun separuh, meski laba bersih relatif stabil dan arus kas operasi berbalik negatif.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RGAS",
   "laporan keuangan",
   "arus kas",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023100902-64582-0/FinancialStatement-2026-III-RGAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-ganti-nama-ke-remitra-ekuitas-jadi-positif",
  "category": "Aksi Korporasi",
  "title": "MKNT Ganti Nama ke Remitra, Ekuitas Jadi [Positif]",
  "deck": "Laporan kuartal III 2026 MKNT, kini bernama PT Remitra Global International, mencatat aset naik ke Rp1,47 triliun dan ekuitas berbalik positif Rp5,65 miliar.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "laporan keuangan",
   "Remitra Global International",
   "konsolidasi anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023095154-64811-0/FinancialStatement-2026-III-MKNT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-ke-rp2-540-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Lagi ke Rp2.540.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp10.000 menjadi Rp2.540.000 per gram pada Jumat (23/10), sementara harga buyback ikut melemah ke Rp2.335.000 per gram.",
  "date": "23 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-ke-rp2-540-000-per-gram.jpg",
  "imageV": "mvkhlrpk",
  "tags": [
   "Emas Antam",
   "Harga Emas",
   "Logam Mulia",
   "Investasi Emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474555-saatnya-borong-harga-emas-antam-hari-ini-23-oktober-2026-merosot-lagi-jadi-rp2540000-per-gram"
 },
 {
  "slug": "ocap-defisiensi-modal-melebar-ke-rp302-85-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "OCAP: Defisiensi [Modal] Melebar ke Rp302,85 Miliar di Kuartal III",
  "deck": "Laporan kuartal III 2026 OCAP yang tidak diaudit menunjukkan rugi melebar jadi Rp25,34 miliar dan defisiensi modal makin dalam ke Rp302,85 miliar.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OCAP",
   "defisiensi modal",
   "suspensi saham",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023095148-64583-0/FinancialStatement-2026-III-OCAP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supr-protelindo-rampungkan-tender-saham-publik-3-periode",
  "category": "Aksi Korporasi",
  "title": "SUPR: Protelindo Rampungkan [Tender] Saham Publik 3 Periode",
  "deck": "Setelah tiga periode penawaran tender sukarela sejak Juli 2026, Protelindo menyerap 733.052 dari 980.044 saham publik SUPR, menyisakan 246.992 saham yang tidak ikut.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "Protelindo",
   "tender offer",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ba6726b88a_cb4b99b12d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "totl-gelar-rupslb-16-november-bahas-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "TOTL Gelar RUPSLB 16 November, Bahas Perubahan [Direksi]",
  "deck": "Total Bangun Persada memanggil RUPSLB pada 16 November 2026 untuk membahas perubahan susunan Direksi dan Dewan Komisaris, dengan pencatatan pemegang saham per 22 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/941a3eb35c_ef049ded13.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hero-jawab-bei-soal-anjloknya-saham-8-07-volatilitas",
  "category": "Aksi Korporasi",
  "title": "HERO Jawab BEI soal Anjloknya Saham 8,07% [Volatilitas]",
  "deck": "Saham HERO ambruk 8,07% ke Rp296 pada 16 Oktober 2026 disertai lonjakan volume transaksi. BEI minta penjelasan, dan DFI Retail Nusantara menyatakan tidak ada informasi material di baliknya.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HERO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4bc9af7121_3c8ed6df1f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-tawarkan-obligasi-dan-sukuk-rp3-5-triliun-tahap-ii",
  "category": "Aksi Korporasi",
  "title": "PIDL Tawarkan [Obligasi] dan Sukuk Rp3,5 Triliun Tahap II",
  "deck": "PIDL menawarkan obligasi hingga Rp2,5 triliun dan sukuk mudharabah hingga Rp1 triliun tahap II, dengan penjatahan 26 Oktober dan pencatatan di BEI 29 Oktober 2026.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "obligasi",
   "sukuk",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/961baca13c_6abf54f194.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akra-cetak-laba-rp2-44-triliun-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "AKRA Cetak Laba [Rp2,44 Triliun] di Kuartal III 2026",
  "deck": "Pendapatan AKR Corporindo naik 43,6 persen menjadi Rp46,53 triliun dalam sembilan bulan pertama 2026, mendorong laba bersih tumbuh 32,4 persen menjadi Rp2,44 triliun.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKRA",
   "laporan keuangan",
   "kuartal III 2026",
   "AKR Corporindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023105545-64658-0/FinancialStatement-2026-III-AKRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wamen-investasi-raih-honorary-fellow-dari-asean-di-cafeo-44",
  "category": "Industri",
  "title": "Wamen Investasi Raih [Honorary Fellow] dari ASEAN di CAFEO 44",
  "deck": "Wakil Menteri Investasi dan Hilirisasi Todotua Pasaribu menerima Honorary Fellow Award di CAFEO 44 Bandung, pengakuan atas kontribusinya mendorong hilirisasi dan investasi Indonesia.",
  "date": "23 Oktober 2026",
  "image": "assets/img/wamen-investasi-raih-honorary-fellow-dari-asean-di-cafeo-44.jpg",
  "imageV": "mvk3ixyk",
  "tags": [
   "hilirisasi",
   "investasi",
   "BKPM",
   "ASEAN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474539-diakui-11-negara-asean-wamen-investasi-raih-honorary-fellow-award-di-cafeo-44-atas-kontribusi-hilirisasi"
 },
 {
  "slug": "produksi-gas-blok-jangkrik-dan-maha-tambah-290-mmscfd",
  "category": "Energi",
  "title": "Produksi Gas Blok Jangkrik dan Maha Tambah [290] MMSCFD",
  "deck": "Dua proyek lepas pantai Kaltim, JNE#6 dan Lapangan Maha, menambah produksi gas sekitar 290 MMSCFD, menurut Menteri ESDM Bahlil Lahadalia.",
  "date": "23 Oktober 2026",
  "image": "assets/img/produksi-gas-blok-jangkrik-dan-maha-tambah-290-mmscfd.jpg",
  "imageV": "mvjxg16p",
  "tags": [
   "gas bumi",
   "ESDM",
   "Kalimantan Timur",
   "migas lepas pantai"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/resmikan-gas-jne6-dan-lapangan-maha-menteri-esdm-dorong-tambahan-produksi-gas-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kesdm-dan-tni-al-usut-kapal-pembawa-406-kl-solar-di-semarang",
  "category": "Energi",
  "title": "KESDM dan TNI AL [Usut] Kapal Pembawa 406 KL Solar di Semarang",
  "deck": "Kapal SPOB Nurfaizah 03 diduga membawa 406 kiloliter solar B50 tanpa dokumen pembelian resmi saat diperiksa TNI AL di perairan Tanjung Emas, Semarang.",
  "date": "23 Oktober 2026",
  "image": "assets/img/kesdm-dan-tni-al-usut-kapal-pembawa-406-kl-solar-di-semarang.jpg",
  "imageV": "mvjxg3or",
  "tags": [
   "ESDM",
   "Solar",
   "TNI AL",
   "Semarang"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kesdm-dan-tni-al-tangani-dugaan-pelanggaran-bbm-subsidi-ilegal-di-perairan-semarang",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "mytx-catat-laba-semu-dari-kurs-ekuitas-masih-minus-rp559-m",
  "category": "Aksi Korporasi",
  "title": "MYTX Catat Laba Semu dari [Kurs], Ekuitas Masih Minus Rp559 M",
  "deck": "MYTX meraih laba Rp51,8 miliar dalam 9 bulan 2026, naik dari Rp11,6 miliar, tapi sebagian besar dari untung kurs, bukan bisnis inti yang justru rugi kotor.",
  "date": "23 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MYTX",
   "laporan keuangan",
   "tekstil",
   "defisiensi modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261023074736-64618-0/FinancialStatement-2026-III-MYTX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-ubah-bisnis-akuisisi-nikel-dan-gelar-rights-issue",
  "category": "Aksi Korporasi",
  "title": "PACK Ubah Bisnis, Akuisisi Nikel, dan Gelar [Rights Issue]",
  "deck": "PACK berencana ubah lini usaha ke tambang nikel, akuisisi dua perusahaan termasuk satu pihak afiliasi, dan right issue. RUPSLB digelar 30 November 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "right issue",
   "akuisisi nikel",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ace10ceba5_8ee27d02e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-jadwalkan-rupslb-pada-30-november-2026",
  "category": "Aksi Korporasi",
  "title": "PACK Jadwalkan [RUPSLB] pada 30 November 2026",
  "deck": "Abadi Nusantara Hijau Investama mengumumkan rencana RUPS Luar Biasa 30 November 2026, pendaftaran pemegang saham yang berhak hadir ditutup 5 November.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "RUPSLB",
   "RUPS",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4b757a95bd_844e88401e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pasokan-gas-kaltim-naik-ke-750-mmscfd-per-november",
  "category": "Energi",
  "title": "Pasokan Gas Kaltim [Naik] ke 750 MMSCFD per November",
  "deck": "Pemerintah menargetkan produksi gas lepas pantai Kalimantan Timur naik ke 750 juta kaki kubik per hari mulai 1 November 2026, didorong proyek JNE#6 dan Lapangan Maha.",
  "date": "22 Oktober 2026",
  "image": "assets/img/pasokan-gas-kaltim-naik-ke-750-mmscfd-per-november.jpg",
  "imageV": "mvjxg46c",
  "tags": [
   "gas bumi",
   "Kalimantan Timur",
   "ESDM",
   "Lapangan Maha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474510-realisasi-kedaulatan-energi-nasional-pemerintah-resmikan-proyek-gas-jne6-dan-lapangan-maha"
 },
 {
  "slug": "boss-gelar-rups-ratifikasi-keterlambatan-tiga-tahun-buku",
  "category": "Aksi Korporasi",
  "title": "BOSS Gelar RUPS, Ratifikasi [Keterlambatan] Tiga Tahun Buku",
  "deck": "RUPST tiga tahun buku (2023-2025) dan RUPSLB BOSS digelar 29 Oktober 2026, di tengah opini audit wajar dengan pengecualian dan anak usaha yang masih pailit.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS",
   "batubara",
   "pailit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d3a7b413ac_5b44f1e9b3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-setujui-dividen-interim-rp176-miliar-untuk-2026",
  "category": "Aksi Korporasi",
  "title": "PRTL Setujui [Dividen] Interim Rp176 Miliar untuk 2026",
  "deck": "Direksi dan komisaris Protelindo (PRTL) menyetujui dividen interim tahun buku 2026 sebesar Rp3,02 per saham, total Rp176 miliar, mayoritas mengalir ke induk usaha TOWR.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "TOWR",
   "dividen interim",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dfbfa82394_9d443c9517.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-tanggapi-bei-pemegang-saham-mayoritas-kaji-langkah",
  "category": "Aksi Korporasi",
  "title": "TLKM Tanggapi BEI, Pemegang Saham Mayoritas Kaji [Langkah]",
  "deck": "TLKM menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, dan menyebut pemegang saham Seri B mayoritas tengah mengkaji langkah terkait kepemilikannya.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Telkom Indonesia",
   "BEI",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/42d0e195de_56063b3667.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-rupslb-bahas-divestasi-saham-jasamarga-jogja-solo",
  "category": "Aksi Korporasi",
  "title": "ADHI RUPSLB bahas [divestasi] saham Jasamarga Jogja Solo",
  "deck": "Adhi Karya mengundang pemegang saham ke RUPSLB 13 November 2026 untuk menyetujui rencana divestasi saham di Jasamarga Jogja Solo dan perubahan penggunaan dana rights issue II.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "RUPSLB",
   "divestasi",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f32ca3856a_d7089e4d3d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-tetapkan-ulang-film-sebagai-saham-terkonsentrasi-tinggi",
  "category": "Aksi Korporasi",
  "title": "BEI Tetapkan Ulang FILM sebagai Saham [Terkonsentrasi] Tinggi",
  "deck": "BEI kembali menetapkan FILM sebagai saham berkonsentrasi tinggi, setelah penurunan kepemilikan pada 12 Oktober ternyata berasal dari transaksi repo saham, bukan perubahan kepemilikan riil.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "BEI",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ceb6135e0c_aa17193fce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "produksi-gas-kaltim-naik-ke-750-juta-kaki-kubik-hari",
  "category": "Energi",
  "title": "Produksi Gas Kaltim Naik ke [750] Juta Kaki Kubik/Hari",
  "deck": "Dua proyek gas lepas pantai Kalimantan Timur, JNE#6 dan Lapangan Maha, ditargetkan menambah produksi nasional menjadi sekitar 750 juta kaki kubik gas per hari mulai 1 November 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/produksi-gas-kaltim-naik-ke-750-juta-kaki-kubik-hari.jpg",
  "imageV": "mvjldgx6",
  "tags": [
   "gas",
   "Kalimantan Timur",
   "ESDM",
   "Lapangan Maha"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/resmikan-gas-jne6-dan-lapangan-maha-menko-hiltrans-dorong-tambahan-produksi-gas-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "djki-gelar-forum-bisnis-paten-buka-peluang-investasi-teknologi",
  "category": "Teknologi",
  "title": "DJKI Gelar Forum Bisnis Paten, Buka Peluang [Investasi] Teknologi",
  "deck": "DJKI menggelar Forum Bisnis Paten Indonesia 2026 pada 3-5 November di JCC Jakarta untuk mempertemukan inventor, investor, dan industri demi komersialisasi paten dalam negeri.",
  "date": "22 Oktober 2026",
  "image": "assets/img/djki-gelar-forum-bisnis-paten-buka-peluang-investasi-teknologi.jpg",
  "imageV": "mvjldhq9",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474483-djki-gelar-forum-bisnis-paten-indonesia-fbpi-2026-buka-peluang-investasi-teknologi"
 },
 {
  "slug": "wika-gagal-penuhi-kuorum-rupsu-usulan-penyelesaian-sukuk-ditolak",
  "category": "Aksi Korporasi",
  "title": "WIKA [Gagal] Penuhi Kuorum RUPSU, Usulan Penyelesaian Sukuk Ditolak",
  "deck": "RUPSU WIKA untuk sukuk mudharabah Tahap II gagal capai keputusan setelah 71,7 persen pemegang suara menolak usulan penyelesaian gagal bayar bagi hasil.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bf7cbc2426_0f07cfd372.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-tuntaskan-buyback-saham-rp36-5-miliar-imbas-spin-off-fiber",
  "category": "Aksi Korporasi",
  "title": "TLKM Tuntaskan [Buyback] Saham Rp36,5 Miliar Imbas Spin-off Fiber",
  "deck": "Telkom membeli kembali 15,96 juta saham senilai Rp36,54 miliar dari pemegang saham yang menolak rencana pemisahan bisnis fiber ke anak usaha, sesuai hak appraisal dalam UUPT.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "buyback saham",
   "spin-off fiber",
   "UUPT"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bcabc9d883_e0515faa94.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-pertama-kantongi-izin-bulion-di-ri",
  "category": "Perbankan",
  "title": "Bank Mandiri Pertama Kantongi Izin [Bulion] di RI",
  "deck": "Bank Mandiri meluncurkan layanan emas digital lewat Livin' setelah mengantongi izin bulion dari OJK, didukung pertumbuhan pengguna dan dana nasabah yang melampaui rata-rata industri.",
  "date": "22 Oktober 2026",
  "image": "assets/img/bank-mandiri-pertama-kantongi-izin-bulion-di-ri.jpg",
  "imageV": "mvjldi7s",
  "tags": [
   "bank mandiri",
   "livin by mandiri",
   "izin bulion",
   "emas digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474474-ekosistem-digital-andal-dan-layanan-berkualitas-dukung-pertumbuhan-bisnis-bank-mandiri"
 },
 {
  "slug": "vktr-r-perdagangan-hmetd-berakhir-23-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "VKTR-R: Perdagangan [HMETD] Berakhir 23 Oktober 2026",
  "deck": "BEI mengingatkan masa perdagangan HMETD VKTR Teknologi Mobilitas berakhir 23 Oktober 2026, efek dicabut dari pencatatan mulai 26 Oktober 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "HMETD",
   "Rights Issue",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Batas Akhir Perdagangan VKTR-R261023-No. Peng-00202BEI.POP10-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msin-gelar-public-expose-insidentil-atas-permintaan-bursa",
  "category": "Aksi Korporasi",
  "title": "MSIN Gelar Public Expose Insidentil atas Permintaan [Bursa]",
  "deck": "PT MNC Digital Entertainment Tbk akan menggelar public expose insidentil secara daring pada 26 Oktober 2026, setelah diminta Bursa Efek Indonesia.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIN",
   "Public Expose",
   "Bursa Efek Indonesia",
   "MNC Digital Entertainment"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5fb96a13f4_70f543a467.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "konservasi-laut-ri-capai-31-6-juta-hektare-per-oktober-2026",
  "category": "Industri",
  "title": "Konservasi Laut RI [Capai] 31,6 Juta Hektare per Oktober 2026",
  "deck": "KKP melaporkan luas kawasan konservasi laut nasional mencapai 31,6 juta hektare, seiring penangkapan kapal pelaku illegal fishing yang terus berlangsung sepanjang 2024-2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/konservasi-laut-ri-capai-31-6-juta-hektare-per-oktober-2026.jpg",
  "imageV": "mvjg6ep1",
  "tags": [
   "KKP",
   "illegal fishing",
   "konservasi laut",
   "perikanan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/dua-tahun-prabowo-gibran-kkp-perkuat-konservasi-laut-dan-pengawasan-iuu-fishing-gnRY.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "iiff-koreksi-laporan-realisasi-dana-obligasi-tahap-i-2026",
  "category": "Aksi Korporasi",
  "title": "IIFF Koreksi Laporan Realisasi Dana Obligasi [Tahap I] 2026",
  "deck": "PT Indonesia Infrastructure Finance mengoreksi laporan realisasi penggunaan dana Obligasi Berkelanjutan III Tahap I 2026 ke BEI, tanpa dampak terhadap operasional atau keuangan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIFF",
   "obligasi",
   "pasar modal",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dbe32ad161_252af610d2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "investasi-era-presiden-prabowo-tembus-rp3-923-triliun",
  "category": "Makroekonomi",
  "title": "Investasi Era Presiden Prabowo [Tembus] Rp3.923 Triliun",
  "deck": "Realisasi investasi dua tahun pemerintahan Presiden Prabowo Subianto mencapai Rp3.923,2 triliun dan menyerap 5,49 juta tenaga kerja, dengan hilirisasi berkontribusi 31,2 persen pada 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/investasi-era-presiden-prabowo-tembus-rp3-923-triliun.jpg",
  "imageV": "mvjg6g9v",
  "tags": [
   "Investasi",
   "BKPM",
   "Hilirisasi",
   "Presiden Prabowo"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/dua-tahun-pemerintahan-presiden-prabowo-investasi-tembus-rp3-923-2-triliun-dan-serap-5-49-juta-tenaga-kerja",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "pemerintah-pasang-target-pertumbuhan-6-untuk-2027",
  "category": "Makroekonomi",
  "title": "Pemerintah Pasang Target Pertumbuhan [6%] untuk 2027",
  "deck": "Pemerintah mengklaim stabilitas ekonomi domestik masih solid, dengan investasi tumbuh 7,3 persen, sebagai dasar menaikkan target pertumbuhan ke 6 persen pada 2027.",
  "date": "22 Oktober 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7177/pemerintah-jaga-stabilitas-ekonomi-dalam-negeri-untuk-pertahankan-kepercayaan-investor",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "cepa-ri-kanada-resmi-berlaku-1-desember-2026",
  "category": "Global",
  "title": "CEPA RI-Kanada Resmi Berlaku [1 Desember] 2026",
  "deck": "Setelah tukar notifikasi ratifikasi, I-CA CEPA mulai berlaku 1 Desember 2026 dan membebaskan tarif 90,55 persen pos tarif produk Indonesia ke Kanada.",
  "date": "22 Oktober 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/implementasi-indonesia-canada-cepa-pada-1-desember-2026-mendag-busan-optimistis-ekspor-ke-kanada-menguat",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dewa-bentuk-anak-usaha-baru-di-bidang-logistik",
  "category": "Aksi Korporasi",
  "title": "DEWA Bentuk Anak Usaha Baru di Bidang [Logistik]",
  "deck": "Darma Henwa Tbk mendirikan anak usaha baru PT DH Logistik di Jakarta Selatan untuk memperluas bisnis ke jasa pengurusan transportasi dan logistik.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWA",
   "Darma Henwa",
   "anak usaha",
   "logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/59e5a46512_2c70e29b5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mika-bantah-ada-info-material-tegaskan-program-buyback-lanjut",
  "category": "Aksi Korporasi",
  "title": "MIKA Bantah Ada Info Material, Tegaskan Program [Buyback] Lanjut",
  "deck": "Menjawab permintaan penjelasan volatilitas dari BEI, Mitra Keluarga Karyasehat memastikan tidak ada info material tersembunyi dan program buyback Rp1 triliun tetap berjalan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MIKA",
   "volatilitas saham",
   "buyback saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6301951d61_fd64b7edca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-catat-laba-9-bulan-naik-6-kali-utang-bank-lunas",
  "category": "Aksi Korporasi",
  "title": "KDTN Catat Laba 9 Bulan Naik 6 Kali, Utang Bank [Lunas]",
  "deck": "Pendapatan KDTN naik 32 persen dan laba melonjak ke Rp3,53 miliar pada kuartal III 2026, sementara seluruh utang bank perusahaan sudah lunas.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "laporan keuangan",
   "utang bank",
   "corporate secretary"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022175456-64620-0/FinancialStatement-2026-III-KDTN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-rombak-direksi-dan-komisaris-tambah-kbli-konstruksi",
  "category": "Aksi Korporasi",
  "title": "WIFI Rombak Direksi dan Komisaris, Tambah [KBLI] Konstruksi",
  "deck": "RUPSLB WIFI 21 Oktober 2026 mengganti Komisaris Utama dan Direktur Utama, serta menambah izin usaha konstruksi sentral telekomunikasi KBLI 42206.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "pergantian direksi",
   "KBLI",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e698a83bfb_78cb4ff763.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtps-ubah-jadwal-rupslb-penjualan-gedung-jadi-3-november",
  "category": "Aksi Korporasi",
  "title": "MTPS Ubah Jadwal RUPSLB [Penjualan] Gedung Jadi 3 November",
  "deck": "RUPSLB independen untuk menyetujui penjualan aset gedung kantor Meta Epsi dimajukan dari 24 November menjadi 3 November 2026, dengan tanggal pencatatan pemegang saham 26 Oktober 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTPS",
   "RUPSLB",
   "transaksi material",
   "Meta Epsi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/66fdc0f45b_2acd059960.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-jadwalkan-rups-30-november-pencatatan-5-november",
  "category": "Aksi Korporasi",
  "title": "LABA Jadwalkan [RUPS] 30 November, Pencatatan 5 November",
  "deck": "Green Power Group (LABA) akan menggelar RUPS pada 30 November 2026, dengan pemegang saham tercatat 5 November yang berhak hadir, dan undangan resmi berisi agenda terbit 6 November.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LABA",
   "RUPS",
   "Green Power Group",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6aa41e4659_93d80637e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "life-catat-laba-bersih-69-dalam-paparan-publik-h1-2026",
  "category": "Aksi Korporasi",
  "title": "LIFE catat laba bersih [+69%] dalam paparan publik H1 2026",
  "deck": "LIFE memaparkan kinerja H1 2026: laba bersih naik 69 persen, ekuitas Rp8,19 triliun, serta progres spin-off syariah dan pemenuhan syarat free float BEI.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "MSIG Life Insurance Indonesia",
   "laba bersih",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/45c4c3d311_50595d6eca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppro-rugi-rp298-miliar-di-sembilan-bulan-2026-naik-6-kali",
  "category": "Aksi Korporasi",
  "title": "PPRO Rugi [Rp298 Miliar] di Sembilan Bulan 2026, Naik 6 Kali",
  "deck": "Rugi bersih PT PP Properti membengkak lebih dari enam kali lipat jadi Rp298,34 miliar pada sembilan bulan 2026, terutama akibat beban lain-lain yang berbalik dari untung menjadi rugi.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRO",
   "PP Properti",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022165026-64835-0/FinancialStatement-2026-III-PPRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tspc-jadwalkan-dividen-interim-rp75-per-saham-rp338-miliar",
  "category": "Aksi Korporasi",
  "title": "TSPC Jadwalkan [Dividen] Interim Rp75 per Saham, Rp338 Miliar",
  "deck": "Tempo Scan Pacific menetapkan dividen interim tahun buku 2026 sebesar Rp75 per saham, total Rp338,2 miliar, dibayar paling lambat 20 November 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TSPC",
   "dividen interim",
   "Tempo Scan Pacific",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/920208b3c2_f1e7d50ad3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-laba-bersih-turun-3-produksi-triaryani-naik",
  "category": "Aksi Korporasi",
  "title": "SMMT: Laba Bersih Turun 3%, Produksi Triaryani [Naik]",
  "deck": "Paparan publik insidentil SMMT mengungkap laba bersih turun 3% akibat belanja modal, sementara produksi batu bara Triaryani naik dari tahun lalu meski volume penjualan turun.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "Public Expose",
   "Batu Bara",
   "Golden Eagle Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/30a8a8b3bb_78e851f795.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tfco-jawab-bursa-laba-stabil-garap-properti-di-surabaya",
  "category": "Aksi Korporasi",
  "title": "TFCO Jawab Bursa: Laba Stabil, Garap [Properti] di Surabaya",
  "deck": "Tifico Fiber Indonesia menjawab permintaan penjelasan Bursa Efek Indonesia dengan memaparkan kinerja keuangan semester I 2026 dan rencana bisnis properti di lahan Surabaya.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFCO",
   "Tifico Fiber Indonesia",
   "polyester",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6eb3cf720c_ad8b8d6130.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-jatim-dorong-riset-jadi-basis-kebijakan-ekonomi",
  "category": "Makroekonomi",
  "title": "BI Jatim Dorong [Riset] Jadi Basis Kebijakan Ekonomi",
  "deck": "BI Jatim mengajak pemerintah daerah memakai riset ilmiah sebagai dasar kebijakan pembangunan, ditandai penyerahan laporan ekonomi dan hasil forum EJAVEC 2026 ke Wakil Gubernur Jatim.",
  "date": "22 Oktober 2026",
  "image": "assets/img/bi-jatim-dorong-riset-jadi-basis-kebijakan-ekonomi.jpg",
  "imageV": "mvjg6hk4",
  "tags": [
   "BI Jatim",
   "EJAVEC 2026",
   "riset ekonomi",
   "Jawa Timur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474433-bi-jatim-dorong-riset-jadi-dasar-kebijakan-pembangunan-ekonomi"
 },
 {
  "slug": "sgro-jawab-bursa-klaim-tak-ada-info-material-baru",
  "category": "Aksi Korporasi",
  "title": "SGRO Jawab Bursa, Klaim Tak Ada Info [Material] Baru",
  "deck": "PT Prime Agri Resources Tbk menjawab permintaan klarifikasi Bursa Efek Indonesia atas lonjakan transaksi sahamnya, dan menyatakan tidak mengetahui informasi material apa pun.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGRO",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5824fdfb3f_6f68774e26.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dua-terminal-bus-ditawarkan-ke-investor-lewat-skema-kpbu",
  "category": "Bisnis",
  "title": "Dua Terminal Bus Ditawarkan ke Investor Lewat Skema [KPBU]",
  "deck": "Pemerintah menjaring minat investor untuk proyek KPBU Terminal Purabaya (Surabaya) dan Betan Subing (Lampung), dengan total kebutuhan investasi sekitar Rp1,18 triliun.",
  "date": "22 Oktober 2026",
  "image": "assets/img/dua-terminal-bus-ditawarkan-ke-investor-lewat-skema-kpbu.jpg",
  "imageV": "mvjaro00",
  "tags": [
   "KPBU",
   "Terminal Purabaya",
   "Betan Subing",
   "investasi infrastruktur"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/dorong-investasi-sektor-transportasi-keminveshil-dan-kemenhub-gelar-market-sounding-kpbu-terminal-tipe-a-purabaya-dan-betan-subing",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "lucy-bantah-ada-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "LUCY Bantah Ada Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan penjelasan BEI atas lonjakan transaksi, PT Lima Dua Lima Tiga Tbk (LUCY) menegaskan tidak ada fakta material maupun rencana korporasi yang mendasarinya.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LUCY",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/96907ecc03_8dbdd59669.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-tak-konfirmasi-transaksi-rp2-588-jb-pegang-30-25",
  "category": "Aksi Korporasi",
  "title": "BYAN Tak Konfirmasi Transaksi Rp2.588, JB Pegang [30,25%]",
  "deck": "Bursa mempertanyakan penjualan saham keluarga pendiri BYAN seharga Rp2.588, jauh di bawah harga beli Rp11.200 empat hari sebelumnya, sementara Jhonlin Baratama kini pegang 30,25% saham.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "kepemilikan saham",
   "Jhonlin Baratama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3092af4eed_dbe0665bfd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lansia-depok-ikut-berkarya-lewat-program-pnm",
  "category": "BUMN",
  "title": "Lansia Depok Ikut [Berkarya] Lewat Program PNM",
  "deck": "PNM menghadirkan kegiatan budidaya ayam petelur dan ikan nila bagi lansia di Panti Werdha Rumah Oma, Depok, lewat program Lansiapreneur.",
  "date": "22 Oktober 2026",
  "image": "assets/img/lansia-depok-ikut-berkarya-lewat-program-pnm.jpg",
  "imageV": "mvjaroel",
  "tags": [
   "PNM",
   "Lansiapreneur",
   "CSR",
   "Depok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474413-pnm-lansiapreneur-jadi-ruang-berkarya-bagi-lansia"
 },
 {
  "slug": "bukk-jawab-bursa-piutang-jatuh-tempo-naik-ke-rp146-m",
  "category": "Aksi Korporasi",
  "title": "BUKK Jawab Bursa, [Piutang] Jatuh Tempo Naik ke Rp146 M",
  "deck": "Bukaka menjelaskan ke BEI soal piutang usaha jatuh tempo yang melonjak dari Rp80,5 miliar jadi Rp146 miliar, plus koreksi klasifikasi beban Rp28,9 miliar.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKK",
   "piutang usaha",
   "Bursa Efek Indonesia",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/161024451a_8fd9d5635b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cent-panggil-rupslb-direktur-eka-kania-mundur",
  "category": "Aksi Korporasi",
  "title": "CENT Panggil RUPSLB, Direktur Eka Kania [Mundur]",
  "deck": "CENT memanggil RUPSLB pada 13 November 2026 untuk menyetujui pengunduran diri Direktur Eka Kania Mustikasari G dan pengangkatan Aditya sebagai direktur baru.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CENT",
   "RUPSLB",
   "direksi",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/784f022e13_38f60cf097.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raam-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "RAAM: Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Merespons permintaan BEI, Tripar Multivision Plus (RAAM) menyatakan tidak ada fakta material di balik pergerakan sahamnya dan belum berencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAAM",
   "Tripar Multivision Plus",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5cce1510f6_5d9eb126d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-australia-lanjutkan-prospera-kejar-aksesi-oecd-2028",
  "category": "Global",
  "title": "RI-Australia Lanjutkan PROSPERA, Kejar Aksesi OECD [2028]",
  "deck": "Indonesia dan Australia memperpanjang program kerja sama ekonomi Prospera ke fase kedua untuk mendukung proses aksesi ke OECD dan CPTPP, plus kerja sama digital dan penerbangan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "PROSPERA",
   "OECD",
   "CPTPP",
   "Indonesia-Australia"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7176/luncurkan-prospera-fase-ii-pemerintah-indonesia-dan-australia-perkuat-reformasi-kelembagaan-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kemendag-kirim-17-asn-ke-korea-bangun-trade-corpu",
  "category": "Global",
  "title": "Kemendag Kirim 17 ASN ke Korea Bangun [Trade CorpU]",
  "deck": "17 ASN Kementerian Perdagangan mengikuti pelatihan pembelajaran daring di Korea Selatan selama dua pekan, bagian dari program tiga tahun bersama KOICA untuk membangun sistem pelatihan internal Trade CorpU.",
  "date": "22 Oktober 2026",
  "image": "assets/img/kemendag-kirim-17-asn-ke-korea-bangun-trade-corpu.jpg",
  "imageV": "mvj7m3ds",
  "tags": [
   "Kemendag",
   "KOICA",
   "Trade CorpU",
   "ASN Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kolaborasi-kemendag-dan-koica-untuk-pembelajaran-daring-trade-corporate-university",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "nayz-akuisisi-btl-dinilai-80-4x-book-value-capai-rp2-24-triliun",
  "category": "Aksi Korporasi",
  "title": "NAYZ: akuisisi BTL dinilai [80,4x] book value, capai Rp2,24 triliun",
  "deck": "NAYZ mengoreksi jawabannya ke bursa soal akuisisi oleh Saiko, mengungkap nilai pengalihan saham Bangkok Tellink mencapai Rp2,24 triliun, 80,4 kali ekuitasnya.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "Bangkok Tellink",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5c84b9c52e_8c1145c31e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akku-gelar-paparan-publik-usai-suspensi-transparansi-diuji",
  "category": "Aksi Korporasi",
  "title": "AKKU Gelar Paparan Publik Usai Suspensi, [Transparansi] Diuji",
  "deck": "Paparan publik insidental AKKU dihadiri delapan pihak eksternal, termasuk sesi tanya jawab soal keterbukaan informasi terkait suspensi saham.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "paparan publik",
   "suspensi saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a97be8383d_29dfd85106.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-tunda-rupslb-rights-issue-ojk-masih-minta-data-tambahan",
  "category": "Aksi Korporasi",
  "title": "KOTA Tunda RUPSLB [Rights Issue], OJK Masih Minta Data Tambahan",
  "deck": "RUPSLB KOTA yang sedianya digelar 23 Oktober ditunda tanpa jadwal baru, menyusul permintaan tambahan informasi dari OJK.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "rights issue",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5e1bb79a37_67e5062d15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "strk-calon-pengendali-baru-negosiasi-ambil-alih-61-87-saham",
  "category": "Aksi Korporasi",
  "title": "STRK: Calon Pengendali Baru Negosiasi Ambil Alih [61,87%] Saham",
  "deck": "PT Beruntung Berkat Sejahtera bernegosiasi membeli 6,63 miliar saham STRK dari PT Barito Mas Sukses, berpotensi menjadi pengendali baru perseroan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "STRK",
   "pengambilalihan",
   "akuisisi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cc3ee88a0b_45690de7ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-jawab-permintaan-bursa-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "RATU Jawab Permintaan Bursa soal [Volatilitas] Saham",
  "deck": "RATU menegaskan tidak ada informasi material yang belum diungkap, setelah BEI meminta penjelasan atas gejolak transaksi sahamnya pada 21 Oktober 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8e600a4906_bc458bad8d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tldn-bagi-dividen-interim-rp20-saham-rp258-9-miliar",
  "category": "Aksi Korporasi",
  "title": "TLDN Bagi [Dividen] Interim Rp20/Saham, Rp258,9 Miliar",
  "deck": "TLDN menetapkan dividen interim tahun buku 2026 sebesar Rp20 per saham, total Rp258,9 miliar, dan sudah mendistribusikannya hari ini lewat KSEI.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLDN",
   "dividen interim",
   "kelapa sawit",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8f7eb47095_82fb9277e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-penyaluran-kredit-baru-diprediksi-meningkat-akhir-2026",
  "category": "Perbankan",
  "title": "BI: Penyaluran Kredit Baru Diprediksi [Meningkat] Akhir 2026",
  "deck": "Survei Bank Indonesia menunjukkan bank-bank memperkirakan penyaluran kredit baru meningkat pada kuartal IV 2026, seiring syarat pinjaman yang makin longgar.",
  "date": "22 Oktober 2026",
  "image": "assets/img/teller-bank.jpg",
  "tags": [
   "Bank Indonesia",
   "kredit perbankan",
   "survei perbankan",
   "suku bunga kredit"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "tgka-jelaskan-ke-bei-soal-lonjakan-harga-6-06",
  "category": "Aksi Korporasi",
  "title": "TGKA Jelaskan ke BEI soal [Lonjakan] Harga 6,06%",
  "deck": "Saham TGKA naik 6,06 persen dan volume transaksi melonjak hampir sepuluh kali pada 19 Oktober 2026, tapi perseroan sebut tak ada informasi material di baliknya.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGKA",
   "Tigaraksa Satria",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/25124779de_a9eb35cb8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelajar-sma-luncurkan-minuman-gizi-nurivo-untuk-remaja",
  "category": "Bisnis",
  "title": "Pelajar SMA Luncurkan Minuman Gizi [NURIVO] untuk Remaja",
  "deck": "Annabelle Kelly Setiady, pelajar SMA, merintis minuman serbuk NURIVO Original bersama PT Duta Niaga sebagai tambahan nutrisi untuk anak sekolah dan remaja aktif.",
  "date": "22 Oktober 2026",
  "image": "assets/img/pelajar-sma-luncurkan-minuman-gizi-nurivo-untuk-remaja.jpg",
  "imageV": "mvj22c1v",
  "tags": [
   "nurivo",
   "annabelle kelly setiady",
   "gizi anak",
   "minuman serbuk"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474370-dari-kepedulian-terhadap-gizi-anak-annabelle-hadirkan-nurivo-untuk-temani-generasi-muda-yang-aktif"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-jadi-rp2-550-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Lagi Jadi Rp2.550.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp4.000 menjadi Rp2.550.000 per gram, sementara harga buyback ikut turun ke Rp2.365.000 per gram.",
  "date": "22 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-jadi-rp2-550-000-gram.jpg",
  "imageV": "mvj22cfa",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474361-harga-emas-antam-hari-ini-22-oktober-2026-lagi-lagi-turun-jadi-rp2550000-per-gram-waktunya-borong"
 },
 {
  "slug": "ptpp-restrukturisasi-utang-ke-bank-resmi-berlaku",
  "category": "Aksi Korporasi",
  "title": "PTPP: Restrukturisasi Utang ke Bank Resmi [Berlaku]",
  "deck": "PT PP (Persero) Tbk menyatakan Master Restructuring Agreement dengan bank-bank kreditur resmi berlaku efektif per 21 Oktober 2026 setelah seluruh syarat dipenuhi.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "restrukturisasi utang",
   "PP Persero",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4475551d15_6071dc1999.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgun-laba-kuartal-iii-naik-34-piutang-berelasi-melonjak",
  "category": "Aksi Korporasi",
  "title": "PGUN: Laba Kuartal III Naik 34%, [Piutang] Berelasi Melonjak",
  "deck": "Laba bersih PGUN naik 33,5 persen jadi Rp135,4 miliar di sembilan bulan 2026, tapi arus kas operasi turun dan piutang ke pihak berelasi melonjak ke Rp211,4 miliar.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGUN",
   "laporan keuangan",
   "sawit",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022093220-64512-0/FinancialStatement-2026-III-PGUN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fore-pendapatan-rp1-6-triliun-ebitda-naik-71-pada-9m26",
  "category": "Aksi Korporasi",
  "title": "FORE: Pendapatan Rp1,6 Triliun, [EBITDA] Naik 71% pada 9M26",
  "deck": "Pendapatan FORE tumbuh 53,3 persen dan laba bersih naik 49,7 persen pada 9M26, didukung ekspansi gerai Fore Coffee dan Fore Donut.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORE",
   "Fore Kopi Indonesia",
   "kinerja keuangan",
   "ekspansi gerai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/511feacc71_e8bd7c268e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-panggil-rupslb-bahas-perombakan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "ADCP Panggil RUPSLB Bahas [Perombakan] Direksi-Komisaris",
  "deck": "Adhi Commuter Properti menjadwalkan RUPS Luar Biasa pada 13 November 2026 dengan satu agenda: perubahan susunan direksi dan dewan komisaris.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7678d6751f_473f831781.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fore-liabilitas-melonjak-25-7-imbas-sewa-gerai-baru",
  "category": "Aksi Korporasi",
  "title": "FORE: Liabilitas Melonjak 25,7% Imbas [Sewa] Gerai Baru",
  "deck": "Liabilitas FORE naik 25,7 persen jadi Rp602,88 miliar per September 2026, terutama dari liabilitas sewa gerai baru, akrual beban, dan utang pajak yang membesar seiring ekspansi usaha.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORE",
   "laporan keuangan",
   "liabilitas",
   "ekspansi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022013903-64777-0/FinancialStatement-2026-III-FORE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ammn-siapkan-buyback-saham-rp1-triliun-di-tengah-gejolak-pasar",
  "category": "Aksi Korporasi",
  "title": "AMMN Siapkan Buyback [Saham] Rp1 Triliun di Tengah Gejolak Pasar",
  "deck": "Amman Mineral berencana membeli kembali sahamnya hingga Rp1 triliun dalam tiga bulan, memanfaatkan aturan OJK untuk kondisi pasar yang berfluktuasi signifikan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMMN",
   "buyback saham",
   "Amman Mineral",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f321a94491_f8dbf746f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbri-siapkan-buyback-saham-rp1-triliun-rampung-3-bulan",
  "category": "Aksi Korporasi",
  "title": "BBRI Siapkan [Buyback] Saham Rp1 Triliun, Rampung 3 Bulan",
  "deck": "BRI akan membeli kembali sahamnya senilai maksimal Rp1 triliun dari kas internal selama 22 Oktober 2026 hingga 21 Januari 2027, memanfaatkan aturan OJK untuk kondisi pasar yang bergejolak.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRI",
   "buyback saham",
   "OJK",
   "Bank BRI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9a298ba47b_ea6130fd80.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-ganti-wali-amanat-sukuk-ijarah-ke-cimb-niaga",
  "category": "Aksi Korporasi",
  "title": "INET Ganti [Wali Amanat] Sukuk Ijarah ke CIMB Niaga",
  "deck": "PT Sinergi Inti Andalan Prima Tbk mengundang pemegang Sukuk Ijarah untuk RUPSI pada 5 November 2026 guna menyetujui penggantian wali amanat dari Bank KB Indonesia menjadi CIMB Niaga.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "Sukuk Ijarah",
   "Wali Amanat",
   "CIMB Niaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a3153cb8f8_c7e58a1997.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "moya-bentuk-usaha-patungan-olah-air-rp6-6-miliar",
  "category": "Aksi Korporasi",
  "title": "MOYA Bentuk [Usaha Patungan] Olah Air Rp6,6 Miliar",
  "deck": "PT Moya Indonesia dan PT Pertiwi Lestari membentuk usaha patungan PT Air Pertiwi Lestari senilai Rp6,6 miliar untuk proyek pengolahan air di Karawang, Jawa Barat.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MOYA",
   "usaha patungan",
   "infrastruktur air",
   "Karawang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f155ea4c8e_a0cfb9ff33.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agrs-jadwalkan-rupslb-30-november-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "AGRS Jadwalkan [RUPSLB] 30 November, Agenda Belum Diumumkan",
  "deck": "Bank IBK Indonesia (AGRS) akan menggelar RUPSLB pada 30 November 2026, namun agenda rapat baru akan diumumkan lewat pemanggilan resmi pada 6 November 2026.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRS",
   "RUPSLB",
   "Bank IBK Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ae3f7cd540_47d1f48bce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dcii-aset-naik-51-liabilitas-melonjak-karena-utang-baru",
  "category": "Aksi Korporasi",
  "title": "DCII: Aset Naik 51%, Liabilitas Melonjak karena [Utang] Baru",
  "deck": "Laporan keuangan interim kuartal III DCI Indonesia menunjukkan aset naik 51,4 persen dan liabilitas melonjak 94,5 persen akibat pinjaman bank baru untuk ekspansi pusat data.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DCII",
   "laporan keuangan",
   "pusat data",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022102534-64721-0/FinancialStatement-2026-III-DCII.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yule-laba-kuartal-iii-naik-27-ambil-utang-bank-rp100-m",
  "category": "Aksi Korporasi",
  "title": "YULE: Laba Kuartal III Naik 27%, Ambil [Utang Bank] Rp100 M",
  "deck": "Laba bersih sembilan bulan YULE naik 27 persen jadi Rp22,68 miliar, tapi kas menyusut tajam dan perseroan menambah utang bank Rp100 miliar untuk mendanai perdagangan efek.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YULE",
   "sekuritas",
   "laporan keuangan",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022023320-64483-0/FinancialStatement-2026-III-YULE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-bayar-dividen-rp4-33-triliun-laba-9-bulan-naik-26",
  "category": "Aksi Korporasi",
  "title": "UNVR Bayar [Dividen] Rp4,33 Triliun, Laba 9 Bulan Naik 26%",
  "deck": "Laba bersih Unilever Indonesia naik 26 persen jadi Rp4,2 triliun dalam sembilan bulan, ditopang gain divestasi, sementara dividen jumbo menggerus kas dan ekuitas perseroan.",
  "date": "22 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "laporan keuangan",
   "dividen",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261022080911-64567-0/FinancialStatement-2026-III-UNVR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-batalkan-pmthmetd-piutang-pemegang-saham-rp21-6-m",
  "category": "Aksi Korporasi",
  "title": "PPGL Batalkan [PMTHMETD], Piutang Pemegang Saham Rp21,6 M",
  "deck": "Menjawab permintaan penjelasan Bursa, PPGL membatalkan agenda penambahan modal PMTHMETD dalam RUPSLB dan mengungkap piutang Rp21,62 miliar dari pemegang saham mayoritas atas divestasi JAYA.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "RUPSLB",
   "PMTHMETD",
   "divestasi JAYA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a37abebeff_0e18207c25.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-pastikan-rasio-saham-bonus-6-4-rupslb-23-oktober",
  "category": "Aksi Korporasi",
  "title": "PPGL Pastikan Rasio [Saham Bonus] 6:4, RUPSLB 23 Oktober",
  "deck": "Koreksi keterbukaan informasi PPGL memastikan pembagian saham bonus rasio 6:4 dari kapitalisasi agio saham, menunggu persetujuan RUPSLB 23 Oktober 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "saham bonus",
   "RUPSLB",
   "freight forwarding"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1acefc2dfd_a07c90872b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-ungkap-modus-lowongan-kerja-palsu",
  "category": "Ketenagakerjaan",
  "title": "Pegadaian Ungkap Modus Lowongan Kerja [Palsu]",
  "deck": "Pegadaian mengingatkan pencari kerja mewaspadai surat panggilan wawancara palsu yang meminta pembayaran tiket atau transfer uang.",
  "date": "21 Oktober 2026",
  "image": "assets/img/pegadaian-ungkap-modus-lowongan-kerja-palsu.jpg",
  "imageV": "mvia5v5n",
  "tags": [
   "lowongan kerja palsu",
   "penipuan rekrutmen",
   "pegadaian",
   "tips mencari kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474297-jangan-tertipu-lowongan-kerja-palsu-pegadaian-ungkap-6-ciri-rekrutmen-loker-bodong"
 },
 {
  "slug": "mglv-panggil-rupslb-untuk-jaminan-aset-lebih-dari-50",
  "category": "Aksi Korporasi",
  "title": "MGLV panggil RUPSLB untuk [jaminan] aset lebih dari 50%",
  "deck": "PT NexAI Digital Infrastruktur Tbk memanggil RUPSLB 12 November 2026 untuk meminta persetujuan menjaminkan lebih dari separuh kekayaan bersihnya demi memperoleh pinjaman.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "RUPSLB",
   "jaminan aset",
   "pinjaman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/33e51e5646_96eafdf159.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-koreksi-jadwal-buyback-saham-rampung-31-desember",
  "category": "Aksi Korporasi",
  "title": "MBSS Koreksi Jadwal [Buyback] Saham, Rampung 31 Desember",
  "deck": "MBSS merilis koreksi keterbukaan informasi buyback, menegaskan periode pembelian kembali saham berlangsung 22 Oktober hingga 31 Desember 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "buyback saham",
   "pelayaran",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/34234077f9_ee7130d939.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-bagikan-dividen-interim-rp15-52-miliar-rp27-per-saham",
  "category": "Aksi Korporasi",
  "title": "SANF bagikan [dividen] interim Rp15,52 miliar, Rp27 per saham",
  "deck": "Surya Artha Nusantara Finance (SANF) resmi membagikan dividen interim senilai Rp15,52 miliar atau Rp27 per saham, dibayarkan 23 Oktober 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SANF",
   "dividen interim",
   "ASTRA Financial",
   "perusahaan pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/93171911c7_0f01ef762e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jasa-marga-pertimbangkan-beli-kembali-saham-jsmr",
  "category": "Pasar Modal",
  "title": "Jasa Marga [Pertimbangkan] Beli Kembali Saham JSMR",
  "deck": "Di tengah gejolak pasar modal, Jasa Marga membuka opsi buyback saham JSMR, namun manajemen menyebut keputusan masih menunggu kajian menyeluruh.",
  "date": "21 Oktober 2026",
  "image": "assets/img/jasa-marga-pertimbangkan-beli-kembali-saham-jsmr.jpg",
  "imageV": "mvia5vqr",
  "tags": [
   "JSMR",
   "Jasa Marga",
   "buyback saham",
   "pasar modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474282-respons-dinamika-bursa-jasa-marga-pertimbangkan-pembelian-kembali-saham-jsmr"
 },
 {
  "slug": "kkp-transaksi-ikan-di-65-kampung-nelayan-tembus-rp18-77-miliar",
  "category": "UMKM",
  "title": "KKP: Transaksi Ikan di 65 Kampung Nelayan Tembus [Rp18,77 Miliar]",
  "deck": "Uji coba 65 Kampung Nelayan Merah Putih sejak Juni 2026 mencatat transaksi ikan Rp18,77 miliar, sementara KKP mulai membangun 1.269 lokasi baru tahun ini.",
  "date": "21 Oktober 2026",
  "image": "assets/img/kkp-transaksi-ikan-di-65-kampung-nelayan-tembus-rp18-77-miliar.jpg",
  "imageV": "mvi4pqze",
  "tags": [
   "KKP",
   "Kampung Nelayan Merah Putih",
   "Perikanan",
   "Ekonomi Pesisir"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/dua-tahun-pemerintahan-prabowo-knmp-terbukti-jadi-penggerak-ekonomi-pesisir-3yZM.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "pnbp-sektor-perikanan-naik-jadi-rp2-4-triliun-di-2025",
  "category": "Industri",
  "title": "PNBP Sektor Perikanan [Naik] Jadi Rp2,4 Triliun di 2025",
  "deck": "Kementerian Kelautan dan Perikanan melaporkan kenaikan penerimaan negara, produksi, kontribusi PDB, dan ekspor perikanan dalam dua tahun terakhir, meski sebagian data 2026 baru bersifat sementara.",
  "date": "21 Oktober 2026",
  "image": "assets/img/pnbp-sektor-perikanan-naik-jadi-rp2-4-triliun-di-2025.jpg",
  "imageV": "mvi4psgl",
  "tags": [
   "KKP",
   "Ekspor Perikanan",
   "PNBP",
   "PDB Perikanan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/pnbp-hingga-ekspor-meningkat-sektor-kelautan-dan-perikanan-tunjukkan-kinerja-positif-di-dua-tahun-prabowo-gibran-5R2B.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "kur-umkm-tembus-rp232-66-triliun-turis-asing-naik-5-38",
  "category": "Makroekonomi",
  "title": "KUR UMKM Tembus Rp232,66 Triliun, Turis Asing [Naik] 5,38%",
  "deck": "Pemerintah melaporkan penyaluran KUR tembus Rp232,66 triliun, kenaikan kunjungan turis asing 5,38 persen, dan perluasan program magang serta pelatihan vokasi sepanjang 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/terminal-bus.jpg",
  "tags": [
   "KUR",
   "UMKM",
   "Pariwisata",
   "Pelatihan Vokasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7173/pemerintah-terus-dorong-penguatan-sdm-pengembangan-pariwisata-serta-perluasan-pembiayaan-umkm-untuk-pertumbuhan-ekonomi-yang-optimal",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ri-kejar-ratifikasi-ieu-cepa-sebelum-berlaku-2027",
  "category": "Global",
  "title": "RI Kejar Ratifikasi [IEU-CEPA] Sebelum Berlaku 2027",
  "deck": "Pemerintah menargetkan IEU-CEPA dengan Uni Eropa diratifikasi semester II 2026 dan berlaku awal 2027, salah satu dari beberapa agenda integrasi ekonomi internasional yang dikejar bersamaan.",
  "date": "21 Oktober 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "IEU-CEPA",
   "OECD",
   "ASEAN DEFA",
   "ekonomi digital"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7174/perluasan-akses-pasar-internasional-dan-digitalisasi-domestik-menjadi-kunci-utama-pertumbuhan-ekonomi-nasional",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "delegasi-bisnis-vanuatu-jajaki-kerja-sama-dagang-di-tei-2026",
  "category": "Global",
  "title": "Delegasi Bisnis [Vanuatu] Jajaki Kerja Sama Dagang di TEI 2026",
  "deck": "Delegasi pengusaha Vanuatu bertemu pelaku usaha Indonesia di TEI 2026, menjajaki kerja sama di sektor material bangunan, furnitur, makanan-minuman, ritel, dan properti.",
  "date": "21 Oktober 2026",
  "image": "assets/img/delegasi-bisnis-vanuatu-jajaki-kerja-sama-dagang-di-tei-2026.jpg",
  "imageV": "mvi4q146",
  "tags": [
   "TEI 2026",
   "Vanuatu",
   "Ekspor",
   "Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tei-2026-dorong-penguatan-kerja-sama-ekonomi-dan-bisnis-indonesia-vanuatu",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bris-jawab-bursa-soal-lonjakan-saham-buka-opsi-buyback",
  "category": "Aksi Korporasi",
  "title": "BRIS Jawab Bursa soal Lonjakan Saham, Buka Opsi [Buyback]",
  "deck": "BRIS menjawab permintaan penjelasan Bursa Efek Indonesia atas lonjakan harga dan transaksi sahamnya pada 8-16 Oktober 2026, sambil mengungkap opsi buyback saham sedang dikaji.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "Bank Syariah Indonesia",
   "RUPSLB",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/adf108a070_d81c266f32.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kur-bni-rp500-juta-dorong-usaha-mesin-kopi-siantar",
  "category": "UMKM",
  "title": "KUR BNI [Rp500 Juta] Dorong Usaha Mesin Kopi Siantar",
  "deck": "BNI Pematangsiantar menyalurkan kredit usaha rakyat Rp500 juta kepada pengusaha mesin kopi untuk menambah kapasitas produksi dan memperluas pasar.",
  "date": "21 Oktober 2026",
  "image": "assets/img/kur-bni-rp500-juta-dorong-usaha-mesin-kopi-siantar.jpg",
  "imageV": "mvi4q1jz",
  "tags": [
   "KUR BNI",
   "UMKM",
   "Pematangsiantar",
   "industri kopi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474267-kur-bni-pematangsiantar-salurkan-rp500-juta-untuk-bantu-pengusaha-mesin-kopi-naik-kelas"
 },
 {
  "slug": "pemerintah-patok-target-ai-lewat-listrik-dan-sdm-digital",
  "category": "Teknologi",
  "title": "Pemerintah Patok Target [AI] lewat Listrik dan SDM Digital",
  "deck": "Pemerintah merinci empat prioritas kedaulatan AI, dari penambahan listrik 70 gigawatt hingga target 9 juta talenta digital pada 2030.",
  "date": "21 Oktober 2026",
  "image": "assets/img/kantor-startup.jpg",
  "tags": [
   "kecerdasan buatan",
   "transformasi digital",
   "energi",
   "talenta digital"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7169/tegaskan-empat-prioritas-strategis-pemerintah-bersiap-wujudkan-kedaulatan-ai-dan-transformasi-digital",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "investasi-kek-baru-rp46-triliun-kejar-target-rp69-triliun",
  "category": "Makroekonomi",
  "title": "Investasi KEK Baru [Rp46] Triliun, Kejar Target Rp69 Triliun",
  "deck": "Realisasi investasi di 25 kawasan ekonomi khusus capai Rp46 triliun hingga September 2026, baru dua pertiga dari target Rp69 triliun tahun ini.",
  "date": "21 Oktober 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "KEK",
   "Investasi",
   "Pariwisata",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7171/kek-jadi-motor-investasi-nasional-pemerintah-dorong-penguatan-daya-saing-dan-kolaborasi-antar-kek",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "halo-bukukan-laba-rp20-5-miliar-modal-tambah-dari-waran",
  "category": "Aksi Korporasi",
  "title": "HALO Bukukan Laba Rp20,5 Miliar, Modal Tambah dari [Waran]",
  "deck": "Laba bersih sembilan bulan HALO naik jadi Rp20,52 miliar dari Rp7,88 miliar, didorong efisiensi biaya dan suntikan dana pelaksanaan waran Rp23,05 miliar.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO",
   "laporan keuangan",
   "laba bersih",
   "waran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261021114307-64571-0/FinancialStatement-2026-III-HALO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iiff-terbitkan-obligasi-rp1-7-triliun-kupon-tertinggi-7-6-persen",
  "category": "Aksi Korporasi",
  "title": "IIFF [terbitkan] obligasi Rp1,7 triliun, kupon tertinggi 7,6 persen",
  "deck": "IIFF menawarkan obligasi tahap II senilai Rp1,7 triliun berperingkat AAA, bagian dari program penawaran umum berkelanjutan senilai Rp6 triliun.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIFF",
   "obligasi",
   "pasar modal",
   "infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4abdfc5614_d92f556fbd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oasa-koreksi-dana-right-issue-rp400-m-dialihkan",
  "category": "Aksi Korporasi",
  "title": "OASA Koreksi Dana Right Issue, Rp400 M [Dialihkan]",
  "deck": "OASA koreksi laporan realisasi dana rights issue 2022: Rp400,5 miliar yang semula untuk proyek IKN, Semarang, dan Telesys Indonesia dialihkan ke modal kerja grup.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OASA",
   "rights issue",
   "penggunaan dana",
   "energi terbarukan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/802d50fff7_fd1e388814.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nine-jawab-bursa-rugi-membesar-rights-issue-dilusi-53",
  "category": "Aksi Korporasi",
  "title": "NINE Jawab Bursa: [Rugi] Membesar, Rights Issue Dilusi 53%",
  "deck": "Techno9 Indonesia menjawab permintaan penjelasan BEI soal rencana rights issue hingga 2,44 miliar saham baru, di tengah rugi yang membesar dan dilusi maksimal 53,11 persen.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NINE",
   "rights issue",
   "dilusi saham",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3b97d1c85b_adf54dac94.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smga-koreksi-laporan-keuangan-incar-obligasi-berkelanjutan",
  "category": "Aksi Korporasi",
  "title": "SMGA koreksi laporan keuangan, incar [obligasi] berkelanjutan",
  "deck": "Koreksi laporan keuangan interim SMGA disiapkan untuk prospektus rencana penerbitan obligasi berkelanjutan, sekaligus merevisi angka piutang, utang, dan kas pada Juni 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGA",
   "obligasi berkelanjutan",
   "laporan keuangan",
   "koreksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261021180757-64716-0/FinancialStatement-2026-II-SMGA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcap-pefindo-afirmasi-rating-idbbb-untuk-obligasi-mnc-kapital",
  "category": "Aksi Korporasi",
  "title": "BCAP: Pefindo Afirmasi Rating [idBBB+] untuk Obligasi MNC Kapital",
  "deck": "Pefindo menegaskan peringkat idBBB+ berprospek stabil untuk MNC Kapital Indonesia dan delapan seri obligasinya, berlaku sampai 1 Maret 2027.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCAP",
   "Pefindo",
   "Obligasi Korporasi",
   "Rating Kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/53e6e8e4d3_b22d2439f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpgi-sebut-opsi-pelepasan-saham-oleh-pemegang-saham-utama",
  "category": "Aksi Korporasi",
  "title": "LPGI Sebut Opsi [Pelepasan] Saham oleh Pemegang Saham Utama",
  "deck": "Volume transaksi saham LPGI melonjak 245.100 lembar dalam sehari, dan perseroan membuka opsi penjualan sebagian saham oleh pemegang saham utama untuk memenuhi syarat free float.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPGI",
   "free float",
   "volatilitas saham",
   "pemegang saham utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/13a94e0002_4eacd921f3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-buka-pendanaan-s-555-juta-untuk-ekspansi-bisnis-limbah",
  "category": "Aksi Korporasi",
  "title": "TOBA Buka Pendanaan [S$555 Juta] untuk Ekspansi Bisnis Limbah",
  "deck": "SBTH, anak usaha TOBA, menerbitkan saham preferen dan waran senilai hingga S$555 juta kepada investor global untuk mendanai ekspansi bisnis limbah.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "transaksi material",
   "pengelolaan limbah",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3a06b77a0e_1909d70f37.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cent-refinancing-rp12-48-triliun-pinjaman-afiliasi-diperpanjang",
  "category": "Aksi Korporasi",
  "title": "CENT Refinancing Rp12,48 Triliun, Pinjaman Afiliasi [Diperpanjang]",
  "deck": "CENT menandatangani fasilitas pinjaman baru Rp12,48 triliun untuk melunasi utang lama, dan memperpanjang dua pinjaman pemegang saham hingga akhir 2031.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CENT",
   "refinancing",
   "transaksi afiliasi",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6d077d7245_bfeaf9b9b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-siapkan-buyback-saham-rp200-miliar-hingga-januari-2027",
  "category": "Aksi Korporasi",
  "title": "MBSS Siapkan [Buyback] Saham Rp200 Miliar hingga Januari 2027",
  "deck": "MBSS akan membeli kembali maksimal 42,2 juta saham atau 2,41 persen dari total saham beredar, senilai hingga Rp200 miliar dari kas internal, tanpa persetujuan RUPS.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "buyback saham",
   "Mitrabahtera Segara Sejati",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5e95d390fe_87bd211234.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wisl-siapkan-rp500-miliar-lunasi-obligasi-jatuh-tempo-17-november",
  "category": "Aksi Korporasi",
  "title": "WISL Siapkan Rp500 Miliar Lunasi [Obligasi] Jatuh Tempo 17 November",
  "deck": "PT Wahana Inti Selaras (WISL) menyatakan siap membayar pokok Obligasi Berkelanjutan I Tahap II 2025 sebesar Rp500 miliar yang jatuh tempo 17 November 2026, menggunakan kas dan penagihan piutang.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WISL",
   "obligasi",
   "Indomobil",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d96a830727_cf90706a47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanksi-pajak-bisa-dihapus-penuh-sampai-desember-2026",
  "category": "Makroekonomi",
  "title": "Sanksi Pajak Bisa [Dihapus] Penuh Sampai Desember 2026",
  "deck": "Pemerintah memberi keringanan sanksi administratif pajak secara bertahap sampai pertengahan 2027, mulai dari penghapusan penuh hingga akhir 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/sanksi-pajak-bisa-dihapus-penuh-sampai-desember-2026.jpg",
  "imageV": "mvhwa1y5",
  "tags": [
   "PMK 71/2026",
   "DJP",
   "Sanksi Pajak",
   "Wajib Pajak"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/kanwil-djp-jakarta-utara-gelar-fgd-pelaksanaan-pmk-71-pengurangan-sanksi-administratif",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "bi-tahan-suku-bunga-5-75-perkuat-insentif-jaga-rupiah",
  "category": "Moneter",
  "title": "BI [Tahan] Suku Bunga 5,75%, Perkuat Insentif Jaga Rupiah",
  "deck": "Bank Indonesia menahan BI-Rate di 5,75% dan menaikkan bunga simpanan bank di BI, sembari memperbesar insentif bagi investor asing untuk menahan pelemahan rupiah.",
  "date": "21 Oktober 2026",
  "image": "assets/img/rupiah-kurs.jpg",
  "tags": [],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "gtra-teken-fasilitas-kredit-rp195-miliar-dari-bank-mandiri",
  "category": "Aksi Korporasi",
  "title": "GTRA Teken Fasilitas Kredit [Rp195 Miliar] dari Bank Mandiri",
  "deck": "Grahaprima Suksesmandiri (GTRA) menandatangani perjanjian kredit investasi senilai Rp195 miliar dengan Bank Mandiri untuk membeli truk baru, setara 44,2 persen dari ekuitas perusahaan.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTRA",
   "pinjaman korporasi",
   "Bank Mandiri",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fcd2ea60ab_aa2d13c631.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pudp-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PUDP Jawab Permintaan BEI soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Diminta BEI menjelaskan pergerakan transaksi sahamnya, Pudjiadi Prestige menyatakan tidak mengetahui ada informasi material maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PUDP",
   "Pudjiadi Prestige",
   "Unusual Market Activity",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a5174cfe91_fea2a90b40.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ssms-karhutla-tak-ganggu-operasional-dan-produksi-2026",
  "category": "Aksi Korporasi",
  "title": "SSMS: [Karhutla] Tak Ganggu Operasional dan Produksi 2026",
  "deck": "Menjawab permintaan penjelasan Bursa soal karhutla, SSMS menyatakan seluruh operasinya di Kalimantan Tengah belum terdampak, baik secara produksi maupun hukum.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSMS",
   "karhutla",
   "sawit",
   "Kalimantan Tengah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c659cb2679_4ec4878f61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsmr-jawab-permintaan-bei-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "JSMR Jawab Permintaan BEI soal [Volatilitas] Saham",
  "deck": "Jasa Marga menegaskan tidak ada informasi material yang disembunyikan, dan menyebut pelemahan sahamnya bisa terkait sentimen peninjauan status pasar RI oleh MSCI.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "volatilitas saham",
   "RUPSLB",
   "MSCI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0a9714d448_a713470015.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-jadwalkan-rupslb-27-november-dps-ditutup-4-november",
  "category": "Aksi Korporasi",
  "title": "TOBA Jadwalkan [RUPSLB] 27 November, DPS Ditutup 4 November",
  "deck": "PT TBS Energi Utama Tbk akan menggelar RUPSLB pada 27 November 2026 secara hybrid, dengan pemanggilan resmi berisi agenda rapat baru terbit 5 November 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "RUPSLB",
   "TBS Energi Utama",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/846a4c60c9_b9760adb14.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-dibuka-menguat-ke-level-5-310-85",
  "category": "Pasar Modal",
  "title": "[IHSG] Dibuka Menguat ke Level 5.310,85",
  "deck": "IHSG dibuka naik 0,61 persen ke 5.310,85 pada Rabu pagi, diikuti penguatan indeks saham-saham besar LQ45 sebesar 0,81 persen.",
  "date": "21 Oktober 2026",
  "image": "assets/img/ihsg-dibuka-menguat-ke-level-5-310-85.jpg",
  "imageV": "mvhwa322",
  "tags": [
   "ihsg",
   "bei",
   "bursa efek",
   "lq45"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474232-pasar-saham-bergairah-ihsg-dibuka-melesat-ke-level-5310"
 },
 {
  "slug": "lapd-jadwalkan-ulang-rupslb-agendakan-rights-issue-2-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "LAPD Jadwalkan Ulang RUPSLB, Agendakan [Rights Issue] 2 Miliar Saham",
  "deck": "RUPSLB LAPD diundur ke 29 Oktober 2026, mengagendakan rights issue hingga 50,42% saham baru, penetapan PT JSI Sinergi Mas sebagai pengendali, serta pergantian nama dan alamat perusahaan.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "RUPSLB",
   "rights issue",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a1375f1db5_84a94516ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-revisi-rencana-rp125-m-saham-baru-dilusi-192",
  "category": "Aksi Korporasi",
  "title": "INPS Revisi Rencana Rp125 M, Saham Baru [Dilusi] 192%",
  "deck": "INPS memperbarui keterbukaan informasi penambahan modal tanpa HMETD senilai hingga Rp125 miliar untuk pemegang saham pengendali, menyusul tanggapan OJK atas dokumen awal.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "penambahan modal",
   "dilusi saham",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f581ba0048_82b4021f30.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "posa-catat-ekuitas-negatif-rp577-m-4-mal-disita-jaksa",
  "category": "Aksi Korporasi",
  "title": "POSA Catat Ekuitas Negatif Rp577 M, 4 Mal [Disita] Jaksa",
  "deck": "POSA menjawab permintaan penjelasan BEI: ekuitas negatif Rp577,10 miliar, utang jangka pendek jauh lampaui aset lancar, dan empat mal disita Kejaksaan Agung.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POSA",
   "ekuitas negatif",
   "penyitaan aset",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6bcd09b09f_33960346e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-waran-scmabqcx6a-usai-scma-bagi-dividen-rp8-4",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan Waran [SCMABQCX6A] Usai SCMA Bagi Dividen Rp8,4",
  "deck": "Korea Investment Sekuritas Indonesia (BQ) menyesuaikan rasio dan harga pelaksanaan waran terstruktur SCMABQCX6A setelah SCMA mengumumkan dividen interim Rp8,4 per saham senilai total Rp533,4 miliar.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "SCMA",
   "dividen",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b4887715ff_09e0aba55f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bold-pefindo-taruh-8-obligasi-rp2-8-t-dalam-creditwatch",
  "category": "Aksi Korporasi",
  "title": "BOLD: PEFINDO Taruh 8 Obligasi Rp2,8 T dalam [CreditWatch]",
  "deck": "PEFINDO menempatkan status pengawasan (creditwatch) pada rating idBBB delapan seri obligasi dan sukuk BUMA senilai total sekitar Rp2,8 triliun dalam pemeringkatan tahunan 2026.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "BUMA",
   "obligasi",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bd6b1f0c62_e93c1620e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smcb-gelar-rupslb-ajukan-aktivasi-bisnis-dagang-bahan-bangunan",
  "category": "Aksi Korporasi",
  "title": "SMCB Gelar RUPSLB, Ajukan [Aktivasi] Bisnis Dagang Bahan Bangunan",
  "deck": "SMCB menggelar RUPSLB 27 November 2026 untuk meminta restu pemegang saham mengaktifkan kembali bisnis dagang bahan bangunan, menyusul merger anak usahanya ke VUB.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "RUPSLB",
   "Semen Indonesia",
   "perubahan kegiatan usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c989dbaa26_20ef570dd4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "halo-ganti-komisaris-jane-joe-laurence-gantikan-wilfred-schultz",
  "category": "Aksi Korporasi",
  "title": "HALO ganti [komisaris], Jane Joe Laurence gantikan Wilfred Schultz",
  "deck": "PT Haloni Jane Tbk mengganti satu kursi komisaris, Jane Joe Laurence menggantikan Wilfred Schultz, efektif 20 Oktober 2026 untuk periode 2025-2027.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO",
   "komisaris",
   "pergantian pengurus",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/df8e516f86_e76e7b40b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gagal-bayar-sukuk-rupsu-tak-capai-keputusan",
  "category": "Aksi Korporasi",
  "title": "WIKA [Gagal Bayar] Sukuk, RUPSU Tak Capai Keputusan",
  "deck": "Rapat pemegang sukuk WIKA soal gagal bayar bagi hasil dan pokok sukuk gagal capai kuorum keputusan, mayoritas suara menolak usulan penyelesaian dari emiten.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c41112efd1_00cbab5abc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pamg-catat-rugi-rp2-56-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "PAMG Catat [Rugi] Rp2,56 Miliar di Kuartal III 2026",
  "deck": "Pendapatan turun 10,8 persen dan beban bunga naik membuat PAMG berbalik rugi bersih Rp2,56 miliar pada sembilan bulan pertama 2026, dari laba Rp965 juta setahun sebelumnya.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PAMG",
   "laporan keuangan",
   "rugi bersih",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261021120504-64525-0/FinancialStatement-2026-III-PAMG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coin-jawab-bursa-10-dari-31-pakd-tak-lagi-terdaftar-sama",
  "category": "Aksi Korporasi",
  "title": "COIN Jawab Bursa, 10 dari 31 [PAKD] Tak Lagi Terdaftar Sama",
  "deck": "COIN menjawab permintaan Bursa soal pedagang aset kripto yang pindah ke pesaing, dan membuka tabel 31 anggota: 21 tetap, 2 ditolak OJK, 1 dicabut, 7 tak lagi tercantum.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COIN",
   "PAKD",
   "CFX",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b671f502f2_fbd4771fd7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asdm-jawab-bei-soal-volatilitas-saham-klaim-tak-ada-info-baru",
  "category": "Aksi Korporasi",
  "title": "ASDM Jawab BEI soal [Volatilitas] Saham, Klaim Tak Ada Info Baru",
  "deck": "Menjawab permintaan BEI, Asuransi Dayin Mitra (ASDM) menyatakan tak ada fakta material baru di balik pergerakan harga sahamnya, dan pemegang saham utama belum berencana mengubah kepemilikannya.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDM",
   "Asuransi Dayin Mitra",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/17f8afc3f8_5a47e8fb40.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-panggil-rupslb-bahas-saham-bonus-dan-rombak-direksi",
  "category": "Aksi Korporasi",
  "title": "PPGL Panggil RUPSLB, Bahas [Saham Bonus] dan Rombak Direksi",
  "deck": "PPGL mengoreksi pemanggilan RUPSLB 23 Oktober 2026 yang akan membahas perubahan susunan direksi-komisaris dan pembagian saham bonus dari kapitalisasi modal disetor.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "RUPSLB",
   "saham bonus",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/08debfa5af_e973230d5c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-tuntaskan-konversi-utang-hsbc-jadi-218-juta-saham",
  "category": "Aksi Korporasi",
  "title": "APEX Tuntaskan [Konversi Utang] HSBC Jadi 218 Juta Saham",
  "deck": "Apexindo merampungkan penambahan modal tanpa HMETD dengan menukar utang ke dua entitas HSBC menjadi 218 juta saham baru seharga Rp325 per saham, tanpa dana tunai masuk.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "PMTHMETD",
   "konversi utang",
   "HSBC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8d908de928_a493b6496a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-ke-rp2-554-000-per-gram",
  "category": "Moneter",
  "title": "Harga Emas Antam [Turun] Lagi ke Rp2.554.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp10.000 menjadi Rp2.554.000 per gram pada 21 Oktober 2026, sementara harga jual kembalinya Rp2.369.000 per gram.",
  "date": "21 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-ke-rp2-554-000-per-gram.jpg",
  "imageV": "mvhnm2ba",
  "tags": [
   "emas",
   "harga emas antam",
   "Antam",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474164-harga-emas-antam-hari-ini-21-oktober-2026-turun-lagi-jadi-rp2554000-per-gram-perhatikan-tren-jangka-panjang-bagi-yang-mau-beli"
 },
 {
  "slug": "mtdl-psi-hapus-6-saham-treasuri-kepemilikan-berubah",
  "category": "Aksi Korporasi",
  "title": "MTDL: PSI Hapus 6% Saham [Treasuri], Kepemilikan Berubah",
  "deck": "Entitas asosiasi Metrodata, PT Packet Systems Indonesia, membatalkan 79.560 saham treasuri dari buyback Juni 2026, mengubah porsi kepemilikan MTDL dan Logicalis Singapore.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTDL",
   "Packet Systems Indonesia",
   "entitas asosiasi",
   "saham treasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f012ef1bb9_44debb0b84.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idea-jadwalkan-ulang-rupslb-ke-12-november-2026",
  "category": "Aksi Korporasi",
  "title": "IDEA Jadwalkan Ulang [RUPSLB] ke 12 November 2026",
  "deck": "PT Idea Indonesia Akademi Tbk mengoreksi jadwal RUPSLB yang semula 23 Oktober menjadi 12 November 2026, membahas pergantian direksi-komisaris dan revisi anggaran dasar.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDEA",
   "RUPSLB",
   "Pergantian Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d5a7adfde7_00b55c0a4d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-pinjam-rp5-miliar-dari-pemegang-saham-gadai-saham-pola",
  "category": "Aksi Korporasi",
  "title": "POOL Pinjam Rp5 Miliar dari Pemegang Saham, [Gadai] Saham POLA",
  "deck": "Pool Advista menerima pinjaman Rp5 miliar dari pemegang sahamnya, PT Prodana Indo Investa, dengan jaminan gadai saham anak usaha POLA, untuk membayar biaya kepatuhan dan tunggakan gaji karyawan.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "POLA",
   "Transaksi Afiliasi",
   "Pinjaman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6daaf61d54_eb537e42f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-laba-bersih-semester-i-2026-turun-53-pendapatan-stagnan",
  "category": "Aksi Korporasi",
  "title": "HATM: Laba Bersih Semester I 2026 Turun [53%], Pendapatan Stagnan",
  "deck": "Laba bersih Habco Trans Maritima (HATM) turun 53,6 persen menjadi Rp50,92 miliar pada semester I 2026 akibat beban pokok pendapatan yang melonjak, meski pendapatan nyaris stagnan di Rp519,96 miliar.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "laporan keuangan",
   "laba bersih",
   "emiten pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/60d91c027a_75ba2eb948.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "petani-sawit-swadaya-kaltim-ikuti-pelatihan-standar-industri",
  "category": "Industri",
  "title": "Petani Sawit Swadaya Kaltim Ikuti Pelatihan [Standar] Industri",
  "deck": "TAP melatih 42 petani swadaya sawit di Kaltim lewat program PERKASA, mencakup pembibitan hingga manajemen panen, dengan partisipasi perempuan 40 persen pada batch terbaru.",
  "date": "21 Oktober 2026",
  "image": "assets/img/petani-sawit-swadaya-kaltim-ikuti-pelatihan-standar-industri.jpg",
  "imageV": "mvh2n439",
  "tags": [
   "sawit",
   "petani swadaya",
   "Kaltim",
   "TAP"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474125-tingkatkan-produktivitas-petani-swadaya-kaltim-dilatih-praktik-budidaya-sawit-berstandar-industri"
 },
 {
  "slug": "cmnp-jawab-bei-tak-ada-info-tersembunyi-rights-issue-dikaji",
  "category": "Aksi Korporasi",
  "title": "CMNP Jawab BEI: Tak Ada Info Tersembunyi, [Rights Issue] Dikaji",
  "deck": "Menanggapi permintaan BEI soal volatilitas transaksi sahamnya, CMNP menegaskan tidak ada informasi material yang disembunyikan dan rencana rights issue PUT III HMETD masih dalam tahap kajian.",
  "date": "21 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMNP",
   "volatilitas saham",
   "rights issue",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/88a2d6c758_441c2dbf01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kepala-bnppdt-dorong-program-ekonomi-konkret-perbatasan",
  "category": "Makroekonomi",
  "title": "Kepala BNPPDT Dorong Program Ekonomi [Konkret] Perbatasan",
  "deck": "Kepala BNPPDT Jenderal TNI Maruli Simanjuntak meminta jajarannya menguji coba program ekonomi yang murah dan cepat dijalankan di wilayah perbatasan.",
  "date": "21 Oktober 2026",
  "image": "assets/img/kepala-bnppdt-dorong-program-ekonomi-konkret-perbatasan.jpg",
  "imageV": "mvh2n4hq",
  "tags": [
   "BNPPDT",
   "perbatasan",
   "ekonomi daerah",
   "TNI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474122-kepala-bnppdt-jenderal-tni-maruli-dorong-prioritas-program-ekonomi-konkret-di-wilayah-perbatasan"
 },
 {
  "slug": "bpdp-dukung-hilirisasi-kelapa-di-wcd-2026-manado",
  "category": "Industri",
  "title": "BPDP Dukung Hilirisasi [Kelapa] di WCD 2026 Manado",
  "deck": "Sulawesi Utara menjadi tuan rumah World Coconut Day 2026, didukung BPDP, seiring kelapa masuk daftar komoditas prioritas hilirisasi pemerintah.",
  "date": "20 Oktober 2026",
  "image": "assets/img/bpdp-dukung-hilirisasi-kelapa-di-wcd-2026-manado.jpg",
  "imageV": "mvgxwtqq",
  "tags": [
   "kelapa",
   "hilirisasi",
   "BPDP",
   "Sulawesi Utara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/474110-bpdp-perkuat-sinergi-dalam-wcd-2026-untuk-peningkatan-produktivitas-kelapa-indonesia"
 },
 {
  "slug": "adro-trinugraha-thohir-tambah-saham-470-000-lembar",
  "category": "Aksi Korporasi",
  "title": "ADRO: Trinugraha Thohir [Tambah] Saham 470.000 Lembar",
  "deck": "Trinugraha Thohir menambah kepemilikan sahamnya di Alamtri Resources Indonesia (ADRO) sebanyak 470.000 lembar pada 19 Oktober 2026, menaikkan hak suaranya dari 0,727% menjadi 0,729%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADRO",
   "Alamtri Resources Indonesia",
   "kepemilikan saham",
   "Trinugraha Thohir"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-9170-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akku-rugi-melebar-di-tengah-penjelasan-lonjakan-saham",
  "category": "Aksi Korporasi",
  "title": "AKKU Rugi [Melebar] di Tengah Penjelasan Lonjakan Saham",
  "deck": "AKKU gelar public expose insidentil usai suspensi BEI, ungkap rugi bersih melebar jadi Rp2,55 miliar di semester I 2026 meski pendapatan naik tipis.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "public expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a8492def8e_d5956c0d2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-trinugraha-thohir-tambah-saham-102-600-lembar",
  "category": "Aksi Korporasi",
  "title": "AADI: Trinugraha Thohir [tambah] saham 102.600 lembar",
  "deck": "Pemegang saham AADI, Trinugraha Thohir, membeli 102.600 saham baru pada 19 Oktober 2026, menaikkan hak suaranya tipis ke 1,1562 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AADI",
   "kepemilikan saham",
   "Trinugraha Thohir",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-4182-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "program-kuliner-s-rasa-kantongi-us-31-juta-di-tei-2026",
  "category": "Bisnis",
  "title": "Program Kuliner S'RASA Kantongi [US$31 Juta] di TEI 2026",
  "deck": "S'RASA mencatatkan transaksi US$31,14 juta di TEI ke-41, tapi sebagian besar masih berupa nota kesepahaman, bukan transaksi yang sudah terjadi.",
  "date": "20 Oktober 2026",
  "image": "assets/img/program-kuliner-s-rasa-kantongi-us-31-juta-di-tei-2026.jpg",
  "imageV": "mvgqfo3f",
  "tags": [],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/capaian-srasa-di-tei-ke-41-kantongi-total-transaksi-sebesar-usd-3114-juta",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bbtn-kaji-opsi-buyback-saham-di-tengah-gejolak-pasar",
  "category": "Aksi Korporasi",
  "title": "BBTN Kaji Opsi [Buyback] Saham di Tengah Gejolak Pasar",
  "deck": "Direktur Utama BTN Nixon L.P. Napitupulu menyatakan perseroan mengevaluasi opsi buyback saham, merujuk pengalaman 2020 saat menyiapkan Rp275 miliar untuk rencana serupa.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "buyback saham",
   "Bank Tabungan Negara",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f4e8d34933_33e284b2b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-catat-obligasi-rp741-miliar-di-bei-mulai-21-oktober",
  "category": "Aksi Korporasi",
  "title": "PRTL catat [obligasi] Rp741 miliar di BEI mulai 21 Oktober",
  "deck": "BEI mencatatkan dua seri obligasi Protelindo senilai Rp741,055 miliar mulai 21 Oktober 2026, dengan bunga 7,55-7,65 persen per tahun dan rating AAA dari Fitch.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "obligasi korporasi",
   "pasar modal",
   "menara telekomunikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ea9fa9688f_f6ef77f08e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbre-tukar-utang-pemegang-saham-jadi-pinjaman-rp70-miliar",
  "category": "Aksi Korporasi",
  "title": "CBRE Tukar Utang Pemegang Saham Jadi [Pinjaman] Rp70 Miliar",
  "deck": "CBRE menandatangani ulang perjanjian pinjaman Rp70 miliar dengan pemegang saham utama dan afiliasinya untuk melunasi utang lama, dengan bunga naik jadi 6,5 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBRE",
   "transaksi afiliasi",
   "pinjaman",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7a17854af4_efbe6e5e23.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdka-resmi-catatkan-obligasi-rp4-12-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "MDKA Resmi Catatkan Obligasi Rp4,12 Triliun di [BEI]",
  "deck": "Obligasi Berkelanjutan V Tahap IV senilai Rp4,12 triliun milik MDKA mulai dicatatkan di BEI pada 21 Oktober 2026, terbagi dua seri dengan bunga tetap 8,25 persen dan 10 persen per tahun.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKA",
   "obligasi",
   "BEI",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/19ca095a94_3ee1d6b21a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jeli-klaim-tak-ada-info-material-di-balik-penurunan-harga-saham",
  "category": "Aksi Korporasi",
  "title": "JELI Klaim Tak Ada Info Material di Balik [Penurunan] Harga Saham",
  "deck": "JELI menyatakan tidak ada informasi material di balik penurunan harga dan lonjakan transaksi sahamnya pada 8-15 Oktober 2026, usai diminta penjelasan oleh BEI.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JELI",
   "Niramas Utama",
   "keterbukaan informasi",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2243bd072_bf6badcdfc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hsbc-kuasai-5-79-saham-apex-lewat-refinancing-utang",
  "category": "Aksi Korporasi",
  "title": "HSBC Kuasai 5,79% Saham APEX Lewat [Refinancing] Utang",
  "deck": "HSBC Holdings Plc kini memegang 218,09 juta saham APEX (5,79% hak suara) lewat skema repurchase agreement untuk refinancing utang, naik dari nol.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "HSBC",
   "kepemilikan saham",
   "refinancing utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-1102-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmas-bagikan-dividen-interim-rp29-saham-total-rp1-4-triliun",
  "category": "Aksi Korporasi",
  "title": "DMAS Bagikan [Dividen] Interim Rp29/Saham, Total Rp1,4 Triliun",
  "deck": "Puradelta Lestari (DMAS) membagikan dividen tunai interim Rp29 per saham senilai Rp1,4 triliun, dibayar 13 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMAS",
   "dividen interim",
   "Puradelta Lestari",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/09e9313a44_8860d5305a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djp-jabar-i-gandeng-kampus-bandung-tax-center-jadi-33",
  "category": "Makroekonomi",
  "title": "DJP Jabar I Gandeng Kampus Bandung, Tax Center Jadi [33]",
  "deck": "Kanwil DJP Jawa Barat I menambah tax center ke-33 lewat kerja sama dengan International Women University di Bandung, namun distribusinya masih timpang antar daerah.",
  "date": "20 Oktober 2026",
  "image": "assets/img/djp-jabar-i-gandeng-kampus-bandung-tax-center-jadi-33.jpg",
  "imageV": "mvgl4e0m",
  "tags": [
   "pajak",
   "tax center",
   "DJP Jawa Barat",
   "edukasi pajak"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/pajak-jabar-i-dan-international-women-university-sepakati-pembentukan-tax-center",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "pajak-kalsel-tumbuh-27-persen-tembus-rp9-93-triliun",
  "category": "Makroekonomi",
  "title": "Pajak Kalsel [Tumbuh] 27 Persen, Tembus Rp9,93 Triliun",
  "deck": "Penerimaan pajak Kalimantan Selatan capai Rp9,93 triliun hingga September 2026, tumbuh 27,33 persen, bersamaan dengan mulai berlakunya pungutan PPh marketplace.",
  "date": "20 Oktober 2026",
  "image": "assets/img/pajak-kalsel-tumbuh-27-persen-tembus-rp9-93-triliun.jpg",
  "imageV": "mvgl4yzd",
  "tags": [
   "Pajak",
   "APBN",
   "Kalimantan Selatan",
   "Marketplace"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/penerimaan-pajak-kalsel-tumbuh-positif-capai-rp993-triliun-hingga-september-2026",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "axio-bagikan-dividen-interim-rp8-per-saham-total-rp46-7-miliar",
  "category": "Aksi Korporasi",
  "title": "AXIO bagikan [dividen] interim Rp8 per saham, total Rp46,7 miliar",
  "deck": "Tera Data Indonusa (AXIO) menetapkan dividen interim tahun buku 2026 sebesar Rp46,72 miliar atau Rp8 per saham, dibayar 19 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AXIO",
   "dividen interim",
   "Tera Data Indonusa",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b5e5843035_3fcef34132.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "axio-rinci-jadwal-dividen-interim-rp8-saham-cair-19-nov",
  "category": "Aksi Korporasi",
  "title": "AXIO rinci [jadwal] dividen interim Rp8/saham, cair 19 Nov",
  "deck": "Tera Data Indonusa (AXIO) menetapkan dividen interim Rp46,7 miliar atau Rp8 per saham, dengan tanggal pencatatan 30 Oktober dan pembayaran 19 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AXIO",
   "dividen interim",
   "Tera Data Indonusa",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/89f436e721_2976278448.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-lanjut-lepas-saham-via-repo-hak-suara-4-37",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Lanjut Lepas Saham via [Repo], Hak Suara 4,37%",
  "deck": "Direksi RLCO kembali mencairkan saham lewat mekanisme repo pada 20 Oktober, melanjutkan tren penurunan hak suara dua hari beruntun.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "direksi",
   "repo",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-1344-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-alihkan-saham-anak-usaha-s-138-2-juta-transaksi-afiliasi",
  "category": "Aksi Korporasi",
  "title": "TOBA Alihkan Saham Anak Usaha S$138,2 Juta, Transaksi [Afiliasi]",
  "deck": "PT TBS Energi Utama Tbk merestrukturisasi kepemilikan anak usahanya di Singapura lewat transaksi afiliasi senilai S$138,2 juta, dibayar tanpa uang tunai.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "transaksi afiliasi",
   "restrukturisasi anak usaha",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/778607c510_956da9ccc7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-film-lepas-103-juta-saham-lewat-pencairan-repo",
  "category": "Aksi Korporasi",
  "title": "Direksi FILM Lepas 103 Juta Saham Lewat Pencairan [Repo]",
  "deck": "Samuel Sekuritas Indonesia selaku Direksi MD Entertainment (FILM) menjual 103,28 juta saham senilai sekitar Rp203,46 miliar untuk mencairkan perjanjian repo, hak suaranya turun dari 9,64% menjadi 8,69%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-5360-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbsi-laniwati-tjandra-mundur-dari-direktur-sales",
  "category": "Aksi Korporasi",
  "title": "BBSI: Laniwati Tjandra [Mundur] dari Direktur Sales",
  "deck": "Krom Bank Indonesia melaporkan pengunduran diri Laniwati Tjandra dari jabatan Conventional & Sales Director, efektif setelah disetujui RUPSLB.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBSI",
   "Krom Bank Indonesia",
   "direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/883faa3be2_ae562d6ea5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meta-jadwalkan-rupslb-pada-26-november-2026",
  "category": "Aksi Korporasi",
  "title": "META jadwalkan [RUPSLB] pada 26 November 2026",
  "deck": "Nusantara Infrastructure (META) mengumumkan rencana RUPSLB 26 November 2026, dengan tanggal pencatatan pemegang saham 3 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "RUPSLB",
   "Nusantara Infrastructure",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dd506d4810_23946cc49d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbhi-teken-sewa-afiliasi-rp4-27-miliar-dengan-bank-mega",
  "category": "Aksi Korporasi",
  "title": "BBHI Teken Sewa [Afiliasi] Rp4,27 Miliar dengan Bank Mega",
  "deck": "Allo Bank menyewa ruang dan lahan di gedung arsip Bank Mega senilai Rp4,27 miliar untuk tiga tahun, bagian dari transaksi dalam satu kelompok usaha Mega Corpora.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBHI",
   "Allo Bank",
   "Bank Mega",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/61690dc509_8dc6e07424.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "winr-pemegang-saham-jual-41-5-juta-saham-demi-free-float",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham [Jual] 41,5 Juta Saham demi Free Float",
  "deck": "Pemegang saham WINR melepas 41,5 juta saham senilai sekitar Rp935,9 juta untuk menambah porsi saham beredar bebas, hak suaranya turun tipis jadi 45,32%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-3536-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdra-jadwalkan-rupslb-pada-26-november-2026",
  "category": "Aksi Korporasi",
  "title": "SDRA Jadwalkan [RUPSLB] pada 26 November 2026",
  "deck": "Bank Woori Saudara mengumumkan rencana RUPSLB pada 26 November 2026, dengan tanggal pencatatan pemegang saham 3 November dan tenggat usul agenda 28 Oktober 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDRA",
   "RUPSLB",
   "Bank Woori Saudara",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c41568f42e_2ad5de65e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-paparkan-peta-jalan-keluar-dari-suspensi-bursa",
  "category": "Aksi Korporasi",
  "title": "POOL Paparkan Peta Jalan Keluar dari [Suspensi] Bursa",
  "deck": "Dalam Public Expose Tahunan 2026, manajemen baru Pool Advista Indonesia memaparkan rencana audit tiga tahun buku, divestasi 30% saham POLA, dan peta jalan keluar dari suspensi saham.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "Pool Advista Indonesia",
   "Public Expose",
   "Divestasi POLA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/17c0420986_bac0e8ce8a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-akuisisi-rp23-5-saham-rights-issue-picu-dilusi",
  "category": "Aksi Korporasi",
  "title": "NAYZ akuisisi Rp23,5/saham, rights issue picu [dilusi]",
  "deck": "NAYZ menjelaskan ke Bursa bahwa harga akuisisi Rp23,5 per saham jauh di bawah harga pasar, dan akan gelar rights issue untuk membeli saham Bangkok Tellink.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "akuisisi",
   "rights issue",
   "Bangkok Tellink"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/37cab57f84_e2fbd53a62.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-jadwalkan-rupslb-26-november-2026",
  "category": "Aksi Korporasi",
  "title": "UNVR Jadwalkan [RUPSLB] 26 November 2026",
  "deck": "Unilever Indonesia mengumumkan rencana RUPSLB pada 26 November 2026, dengan pemegang saham yang berhak hadir dicatat per 3 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "RUPSLB",
   "Unilever Indonesia",
   "Rapat Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0ff4765f0c_7cf8589059.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-direksi-beli-550-000-saham-senilai-rp233-juta",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direksi [Beli] 550.000 Saham Senilai Rp233 Juta",
  "deck": "Direksi Bumi Resources Minerals, Charles Daniel Gobel, membeli 550.000 saham BRMS pada 20 Oktober 2026 seharga Rp424 per lembar, menambah kepemilikannya menjadi 1,9 juta saham.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "kepemilikan saham",
   "direksi",
   "Bumi Resources Minerals"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-6495-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nano-softbank-ventura-indonesia-kurangi-kepemilikan-saham",
  "category": "Aksi Korporasi",
  "title": "NANO: SoftBank Ventura Indonesia [kurangi] kepemilikan saham",
  "deck": "SoftBank Ventura Indonesia melaporkan penjualan saham NANO sebanyak 52,366 juta lembar, menurunkan hak suaranya dari 8,46 persen menjadi 7,24 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NANO",
   "SoftBank Ventura Indonesia",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-0789-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-beli-saham-rp8-7-miliar",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [Beli] Saham Rp8,7 Miliar",
  "deck": "Edwin Soeryadjaya menambah 5,8 juta saham Saratoga lewat dua transaksi pertengahan Oktober 2026, hak suaranya naik tipis jadi 36,04 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "Edwin Soeryadjaya",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-6639-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "essa-direksi-beli-2-25-juta-saham-senilai-rp1-miliar",
  "category": "Aksi Korporasi",
  "title": "ESSA: Direksi [Beli] 2,25 Juta Saham Senilai Rp1 Miliar",
  "deck": "Direksi ESSA Industries Indonesia, Trinugraha Thohir, membeli 2.252.300 saham pada 19 Oktober 2026 seharga Rp444 per saham, menambah kepemilikannya jadi 84.955.645 lembar.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ESSA",
   "ESSA Industries Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-3384-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-produk-hijau-ri-tumbuh-59-7-persen-syarat-ue-ketat",
  "category": "Industri",
  "title": "Ekspor Produk Hijau RI [Tumbuh] 59,7 Persen, Syarat UE Ketat",
  "deck": "Kemendag gelar forum ekspor hijau di sela TEI ke-41, saat ekspor produk ramah lingkungan RI tumbuh 59,7 persen pada Januari-Agustus 2025, meski syarat pasar Eropa makin ketat.",
  "date": "20 Oktober 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "ekspor hijau",
   "TEI ke-41",
   "Kemendag",
   "Uni Eropa"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/forum-bisnis-produk-hijau-di-tei-ke-41-kemendag-dorong-ekspor-penuhi-aspek-ramah-lingkungan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "hero-jadwalkan-rupslb-26-november-2026-di-bintaro",
  "category": "Aksi Korporasi",
  "title": "HERO Jadwalkan RUPSLB [26 November] 2026 di Bintaro",
  "deck": "DFI Retail Nusantara mengumumkan rencana RUPSLB pada 26 November 2026, dengan pencatatan pemegang saham berhak hadir per 3 November.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HERO",
   "RUPSLB",
   "DFI Retail Nusantara",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c600368aa3_6b04df309a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtps-gelar-rupslb-independen-24-november-bahas-penjualan-gedung",
  "category": "Aksi Korporasi",
  "title": "MTPS Gelar RUPSLB Independen 24 November, Bahas [Penjualan] Gedung",
  "deck": "Meta Epsi menjadwalkan RUPSLB Independen 24 November 2026 untuk meminta restu pemegang saham atas rencana penjualan gedung kantornya seluas 4.802 meter persegi di Jatinegara.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTPS",
   "RUPSLB",
   "transaksi material",
   "penjualan aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ccdb1161d9_5796051de1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-direksi-beli-6-9-juta-saham-senilai-rp2-22-miliar",
  "category": "Aksi Korporasi",
  "title": "AVIA: Direksi [Beli] 6,9 Juta Saham Senilai Rp2,22 Miliar",
  "deck": "Robert Christian Tanoko, direksi AVIA, menambah kepemilikan 6,9 juta lembar saham secara tidak langsung pada 16 Oktober 2026, menaikkan hak suaranya ke 2,32 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "kepemilikan saham",
   "direksi",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-1362-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-private-placement-rp120-miliar-saham-publik-makin-terdilusi",
  "category": "Aksi Korporasi",
  "title": "VISI [Private Placement] Rp120 Miliar, Saham Publik Makin Terdilusi",
  "deck": "VISI menerbitkan 120,7 juta saham baru tanpa hak memesan efek terlebih dahulu senilai sekitar Rp120 miliar kepada tiga investor, mendilusi porsi pemegang saham publik dari 19,99% menjadi 19,24%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "PMTHMETD",
   "Private Placement",
   "Dilusi Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fafd84aaca_f5000578f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-terima-dividen-interim-rp50-miliar-dari-tirtakencana",
  "category": "Aksi Korporasi",
  "title": "AVIA Terima [Dividen] Interim Rp50 Miliar dari Tirtakencana",
  "deck": "PT Avia Avian Tbk menerima dividen interim Rp49,99 miliar dari anak usahanya, PT Tirtakencana Tatawarna, yang sahamnya dikuasai hampir 100 persen oleh perseroan.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "dividen interim",
   "Tirtakencana Tatawarna",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1a451ae74a_4ba8158437.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptps-jawab-bursa-karhutla-tak-ganggu-produksi",
  "category": "Aksi Korporasi",
  "title": "PTPS Jawab Bursa, Karhutla Tak Ganggu [Produksi]",
  "deck": "PT Pulau Subur menjawab permintaan penjelasan BEI dan memastikan kebakaran hutan dan lahan tidak mengganggu operasional, produksi, maupun pendapatan tahun ini.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPS",
   "karhutla",
   "kelapa sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/314c017484_cb8a2ac3c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tfco-saham-terkonsentrasi-99-70-free-float-tipis",
  "category": "Aksi Korporasi",
  "title": "TFCO: Saham Terkonsentrasi 99,70%, Free Float [Tipis]",
  "deck": "BEI dan KSEI mengumumkan saham TFCO dikuasai segelintir pihak yang menguasai 99,70% total saham per 15 Oktober 2026, menyisakan saham beredar bebas yang sangat tipis.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFCO",
   "Tifico Fiber Indonesia",
   "free float",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0bbe3f1e29_d3e3b321ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boba-direksi-lepas-99-67-sahamnya-ke-227-200-lembar",
  "category": "Aksi Korporasi",
  "title": "BOBA: Direksi [Lepas] 99,67% Sahamnya ke 227.200 Lembar",
  "deck": "Direksi BOBA, Dewi Irianty Wijaya, melepas 99,67 persen sahamnya sendiri, dari 68,4 juta menjadi 227.200 lembar, dalam transaksi berjenis Repurchase Agreement.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOBA",
   "Formosa Ingredient Factory",
   "kepemilikan saham direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-0616-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-rebound-4-16-persen-dipicu-buyback-dan-aturan-msci",
  "category": "Pasar Modal",
  "title": "IHSG [Rebound] 4,16 Persen, Dipicu Buyback dan Aturan MSCI",
  "deck": "IHSG melonjak 4,16 persen ke 5.204,63 pada sesi I Selasa, didorong buyback emiten serta kebijakan BEI dan OJK merespons evaluasi MSCI.",
  "date": "20 Oktober 2026",
  "image": "assets/img/ihsg-rebound-4-16-persen-dipicu-buyback-dan-aturan-msci.jpg",
  "imageV": "mvgck5n2",
  "tags": [
   "ihsg",
   "bursa saham",
   "msci",
   "buyback"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473988-ihsg-rebound-416-persen-analis-dipicu-buyback-saham-hingga-kebijakan-otoritas"
 },
 {
  "slug": "emas-rencanakan-penambahan-modal-potensi-dilusi-10",
  "category": "Aksi Korporasi",
  "title": "EMAS Rencanakan Penambahan Modal, Potensi [Dilusi] 10%",
  "deck": "EMAS berencana menerbitkan saham baru tanpa hak memesan efek terlebih dahulu hingga 1,47 miliar lembar atau maksimal 10% modal disetor, menanti persetujuan RUPS.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "PMTHMETD",
   "dilusi saham",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c4b6bca03d_1385efc5ec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-gmfi-beli-500-000-saham-senilai-rp20-juta",
  "category": "Aksi Korporasi",
  "title": "Direksi GMFI [Beli] 500.000 Saham Senilai Rp20 Juta",
  "deck": "Direktur GMF Aero Asia, Tri Hartono, membeli 500.000 saham perusahaan seharga Rp40 per lembar pada 20 Oktober 2026, menambah kepemilikannya menjadi 1,5 juta lembar.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "kepemilikan saham",
   "direksi",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-8756-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmbl-panggil-rupslb-november-agenda-perubahan-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "BMBL Panggil RUPSLB November, Agenda [Perubahan] Susunan Direksi",
  "deck": "BMBL memanggil RUPSLB pada 11 November 2026 di Depok untuk membahas perubahan susunan direksi, dengan recording date 19 Oktober 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "RUPSLB",
   "Direksi",
   "Lavender Bina Cendikia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dced6d6055_3c0d9274d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-melonjak-4-16-persen-bei-rombak-komposisi-indeks",
  "category": "Pasar Modal",
  "title": "IHSG [Melonjak] 4,16 Persen, BEI Rombak Komposisi Indeks",
  "deck": "IHSG naik 4,16 persen ke 5.204,63 pada sesi I Selasa, didorong perubahan batas ARB dan pengeluaran puluhan saham HSC dari komposisi indeks oleh BEI.",
  "date": "20 Oktober 2026",
  "image": "assets/img/ihsg-melonjak-4-16-persen-bei-rombak-komposisi-indeks.jpg",
  "imageV": "mvgck64a",
  "tags": [
   "IHSG",
   "BEI",
   "MSCI",
   "pasar modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473980-ihsg-menguat-416-persen-ke-level-5204-sempat-terkoreksi-hingga-kembali-menghijau"
 },
 {
  "slug": "boss-gelar-public-expose-suspensi-saham-masih-berlanjut",
  "category": "Aksi Korporasi",
  "title": "BOSS Gelar Public Expose, [Suspensi] Saham Masih Berlanjut",
  "deck": "BOSS akan gelar public expose tahunan 29 Oktober 2026. Materinya ungkap suspensi saham masih berlanjut dan perseroan tanpa pendapatan dua tahun berturut-turut.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "Suspensi Saham",
   "Public Expose",
   "Batubara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2e3ecbd47_36c474526c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-boss-2023-bongkar-tambang-yang-masih-terhenti",
  "category": "Aksi Korporasi",
  "title": "Public Expose BOSS 2023 Bongkar Tambang yang Masih [Terhenti]",
  "deck": "BOSS akan menggelar Public Expose tahunan untuk tahun buku 2023 pada 29 Oktober 2026, memaparkan kondisi tambang yang masih terhenti sejak longsor 2023 dan anak usaha yang berstatus pailit.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "Public Expose",
   "Suspensi Saham",
   "Pertambangan Batubara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bb54998009_41fecfdb33.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-jadwalkan-rups-pemegang-saham-independen-26-november",
  "category": "Aksi Korporasi",
  "title": "EMAS Jadwalkan RUPS Pemegang Saham [Independen] 26 November",
  "deck": "Merdeka Gold Resources menjadwalkan RUPS khusus pemegang saham independen pada 26 November 2026, dengan tanggal pencatatan pemegang saham pada 3 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "RUPS Independen",
   "Merdeka Gold Resources",
   "Corporate Action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f0a676271d_aa0c033d68.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-catatkan-218-juta-saham-baru-apex-dilusi-6-15",
  "category": "Aksi Korporasi",
  "title": "BEI Catatkan 218 Juta Saham Baru APEX, [Dilusi] 6,15%",
  "deck": "APEX mencatatkan 218,09 juta saham baru dari penambahan modal tanpa HMETD, saham beredar naik menjadi 3,76 miliar lembar per 20 Oktober 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "PMTHMETD",
   "dilusi saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c32f7b1a0e_b5148cd3ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lopi-setujui-penambahan-modal-tanpa-hak-memesan-efek-lama",
  "category": "Aksi Korporasi",
  "title": "LOPI Setujui [Penambahan Modal] Tanpa Hak Memesan Efek Lama",
  "deck": "Pemegang saham LOPI menyetujui rencana penambahan modal tanpa hak memesan efek terlebih dahulu dalam RUPSLB 19 Oktober 2026, dengan kuorum kehadiran 24,47 persen saham.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "RUPSLB",
   "Penambahan Modal",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/54acdac1f2_5eedf03c73.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-tarik-pinjaman-afiliasi-usd30-juta-dari-kbank",
  "category": "Aksi Korporasi",
  "title": "BMAS Tarik [Pinjaman] Afiliasi USD30 Juta dari KBank",
  "deck": "BMAS menarik tambahan pinjaman bilateral senilai setara US$30 juta dari induk usahanya, KBank, bagian dari fasilitas dua tahun senilai total US$341 juta untuk mendukung likuiditas dan penyaluran kredit.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "pinjaman afiliasi",
   "KBank",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7359bf6be3_c98242380d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikai-raja-sapta-oktohari-borong-47-6-juta-saham-rp22",
  "category": "Aksi Korporasi",
  "title": "IKAI: Raja Sapta Oktohari [Borong] 47,6 Juta Saham Rp22",
  "deck": "Raja Sapta Oktohari menambah kepemilikan sahamnya di IKAI dari 2,37 juta menjadi 50 juta lembar lewat pembelian tidak langsung pada 15 Oktober 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKAI",
   "Intikeramik Alamasri",
   "kepemilikan saham",
   "Raja Sapta Oktohari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-9993-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-komisaris-tambah-kepemilikan-jadi-3-49-juta-saham",
  "category": "Aksi Korporasi",
  "title": "TAPG: Komisaris [Tambah] Kepemilikan Jadi 3,49 Juta Saham",
  "deck": "Arif Rachmat, Komisaris TAPG, membeli 623.000 saham tidak langsung pada 19 Oktober 2026 seharga Rp1.685 per saham untuk investasi.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Komisaris",
   "Kepemilikan Saham",
   "Insider Buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-5601-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrta-terang-anugrah-abadi-tambah-5-juta-saham",
  "category": "Aksi Korporasi",
  "title": "HRTA: Terang Anugrah Abadi [Tambah] 5 Juta Saham",
  "deck": "Pemegang saham utama HRTA, PT Terang Anugrah Abadi, membeli 5 juta saham lewat dua transaksi pada 16 dan 19 Oktober 2026, menaikkan hak suaranya dari 71,05% menjadi 71,16%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "kepemilikan saham",
   "pemegang saham",
   "Hartadinata Abadi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-3612-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpri-akhirnya-gelar-rups-tahun-buku-2022-tertunda-4-tahun",
  "category": "Aksi Korporasi",
  "title": "CPRI Akhirnya Gelar RUPS Tahun Buku 2022, [Tertunda] 4 Tahun",
  "deck": "CPRI mengumumkan RUPS Tahunan untuk tahun buku 2022 akan digelar 26 November 2026, hampir empat tahun setelah periode laporan itu berakhir.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPRI",
   "RUPS Tahunan",
   "Capri Nusa Satu Properti",
   "Properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7ac2081381_adaea1c8be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-trimegah-sekuritas-tambah-265-juta-saham-via-reverse-repo",
  "category": "Aksi Korporasi",
  "title": "[ENRG] Trimegah Sekuritas Tambah 265 Juta Saham via Reverse Repo",
  "deck": "Trimegah Sekuritas Indonesia melaporkan penambahan kepemilikan saham ENRG lewat transaksi reverse repo, hak suara naik dari 10,72% menjadi 11,55%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "Trimegah Sekuritas",
   "kepemilikan saham",
   "reverse repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-6039-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kmds-jadwalkan-rupslb-pada-26-november-2026",
  "category": "Aksi Korporasi",
  "title": "KMDS Jadwalkan [RUPSLB] pada 26 November 2026",
  "deck": "Kurniamitra Duta Sentosa Tbk akan menggelar RUPSLB pada 26 November 2026, dengan cum date pemegang saham 3 November 2026 dan tenggat usul agenda 19 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KMDS",
   "RUPSLB",
   "Pasar Modal",
   "Emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2a3a66e49e_18cbe93db2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdla-direksi-borong-1-38-juta-saham-dalam-dua-hari",
  "category": "Aksi Korporasi",
  "title": "MDLA: Direksi [Borong] 1,38 Juta Saham dalam Dua Hari",
  "deck": "Direksi Medela Potentia, Juliwaty, membeli 1.384.400 lembar saham MDLA pada 15-16 Oktober 2026, menaikkan kepemilikannya 28,4 persen menjadi 6.252.300 lembar.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Medela Potentia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-7827-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-hak-suara-direksi-turun-ke-10-96-via-transaksi-repo",
  "category": "Aksi Korporasi",
  "title": "BAJA: Hak Suara Direksi Turun ke [10,96]% via Transaksi Repo",
  "deck": "Direksi BAJA, Entario Widjaja Susanto, melaporkan hak suaranya turun dari 16,45% jadi 10,96% lewat transaksi repurchase agreement, meski jumlah sahamnya tetap 296,02 juta lembar.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "Saranacentral Bajatama",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-1662-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdra-resmi-angkat-kim-jun-beom-jadi-direktur-keuangan",
  "category": "Aksi Korporasi",
  "title": "SDRA Resmi Angkat [Kim Jun Beom] Jadi Direktur Keuangan",
  "deck": "Direktur Keuangan dan Perencanaan baru Bank Woori Saudara efektif menjabat 19 Oktober 2026 setelah lolos uji kelayakan OJK, menggantikan direktur sebelumnya yang mundur sejak 1 Juli 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDRA",
   "Bank Woori Saudara",
   "Direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/af45514c71_1d6e3dd40b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-564-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.564.000/Gram",
  "deck": "Harga emas Antam turun Rp10.000 menjadi Rp2.564.000 per gram pada 20 Oktober 2026, sementara harga buyback juga turun ke Rp2.379.000 per gram.",
  "date": "20 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-564-000-gram.jpg",
  "imageV": "mvg74jm4",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "buyback emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473949-saatnya-borong-harga-emas-antam-hari-ini-20-oktober-2026-terpantau-turun-jadi-rp2564000-per-gram"
 },
 {
  "slug": "baja-hak-suara-investor-turun-ke-0-95-meski-saham-tetap",
  "category": "Aksi Korporasi",
  "title": "BAJA: [Hak Suara] Investor Turun ke 0,95% Meski Saham Tetap",
  "deck": "Anton Sebastian melaporkan hak suaranya di Saranacentral Bajatama turun dari 1,43% jadi 0,95% lewat transaksi repo, padahal jumlah sahamnya tidak berubah.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "kepemilikan saham",
   "transaksi repo",
   "Saranacentral Bajatama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-6687-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-hak-suara-turun-ke-1-62-meski-saham-tetap",
  "category": "Aksi Korporasi",
  "title": "BAJA: Hak Suara Turun ke 1,62% Meski Saham [Tetap]",
  "deck": "Laksmono Tirta Kusumo, bukan direksi atau komisaris, melaporkan 43,79 juta saham BAJA tak berubah, tapi hak suaranya turun dari 2,43% jadi 1,62%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "kepemilikan saham",
   "hak suara",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-5764-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mlia-muliaglass-bangun-ulang-satu-tungku-kaca-lembaran",
  "category": "Aksi Korporasi",
  "title": "MLIA: Muliaglass Bangun Ulang Satu [Tungku] Kaca Lembaran",
  "deck": "PT Muliaglass, anak usaha Mulia Industrindo, mulai membangun ulang bertahap satu dari tiga tungku kaca lembaran yang sudah di tahun terakhir operasinya, menyusul naiknya harga gas.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MLIA",
   "Mulia Industrindo",
   "Muliaglass",
   "kaca lembaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/349138e84f_2dcf8ae91d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-tpia-tambah-kepemilikan-saham-1-juta-lembar",
  "category": "Aksi Korporasi",
  "title": "Direksi TPIA Tambah [Kepemilikan] Saham 1 Juta Lembar",
  "deck": "Direktur TPIA, Raymond, membeli tambahan 1 juta saham Chandra Asri Pacific pada 16 Oktober 2026 senilai Rp1,2 miliar, meski hak suaranya di perusahaan tetap 0,01%.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri Pacific",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-8988-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "epac-jelaskan-pinjaman-afiliasi-ke-bei-siap-rights-issue",
  "category": "Aksi Korporasi",
  "title": "EPAC Jelaskan Pinjaman Afiliasi ke BEI, Siap [Rights Issue]",
  "deck": "EPAC menjelaskan ke BEI alasan pinjaman afiliasi dari PT Triple Berkah Bersama pasca-homologasi, sembari menyiapkan rights issue dan menutup segmen kemasan fleksibel konvensional.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "transaksi afiliasi",
   "rights issue",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b4e1584c50_c5d153aa1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atic-entitas-direksi-tambah-26-400-saham-di-pasar",
  "category": "Aksi Korporasi",
  "title": "ATIC: Entitas Direksi Tambah [26.400] Saham di Pasar",
  "deck": "PT Inti Global Resources Indonesia, entitas direksi Anabatic Technologies, membeli 26.400 saham ATIC lewat delapan transaksi pada 19 Oktober 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATIC",
   "Anabatic Technologies",
   "kepemilikan saham",
   "transaksi insider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-1068-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-sujito-ngatiman-tambah-saham-hak-suara-ke-8-03",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman Tambah Saham, Hak Suara ke [8,03%]",
  "deck": "Pemegang saham Sujito Ngatiman menambah 14,77 juta lembar saham DEWI pada 19 Oktober 2026, mendorong hak suaranya naik dari 7,20 persen menjadi 8,03 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "laporan OJK",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-6056-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-jawab-permintaan-bursa-soal-volatilitas-transaksi",
  "category": "Aksi Korporasi",
  "title": "PTRO Jawab Permintaan Bursa soal [Volatilitas] Transaksi",
  "deck": "Petrosea menjawab permintaan penjelasan BEI, menegaskan tidak ada informasi material yang belum diungkap selain rencana rights issue yang sudah diumumkan.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3afd552301_5283cae682.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "komisaris-drma-lepas-150-000-saham-hak-suara-tetap-1-79",
  "category": "Aksi Korporasi",
  "title": "Komisaris DRMA Lepas [150.000] Saham, Hak Suara Tetap 1,79%",
  "deck": "Komisaris Dharma Polimetal, Noel Aelyo Laras Kusuma Negara, menjual 150.000 saham DRMA pada 14 Oktober 2026 senilai sekitar Rp141,75 juta, namun hak suaranya tetap 1,79 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Dharma Polimetal",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-2153-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-direksi-tambah-kepemilikan-1-8-juta-saham",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi [Tambah] Kepemilikan 1,8 Juta Saham",
  "deck": "Direksi TAPG George Oetomo membeli 1,8 juta saham pada 16 Oktober 2026, menambah kepemilikannya menjadi 52,86 juta lembar atau 0,2662% hak suara perusahaan.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "Insider Trading",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-6139-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-pusat-data-butuh-tambahan-20-gw-listrik",
  "category": "Energi",
  "title": "Bahlil: Pusat Data Butuh Tambahan [20 GW] Listrik",
  "deck": "Menteri ESDM Bahlil Lahadalia memproyeksikan pusat data nasional butuh tambahan listrik 20.000 megawatt, sembari menyiapkan Batam, Karimun, dan Bintan jadi hub pusat data berbasis energi bersih.",
  "date": "20 Oktober 2026",
  "image": "assets/img/bahlil-pusat-data-butuh-tambahan-20-gw-listrik.jpg",
  "imageV": "mvg17r7g",
  "tags": [
   "Bahlil Lahadalia",
   "ESDM",
   "pusat data",
   "Batam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473936-bahlil-siapkan-energi-bersih-untuk-pusat-data-kebutuhan-listrik-diproyeksikan-bertambah-20-gw"
 },
 {
  "slug": "gmfi-jelaskan-ke-bursa-skema-free-float-pmhmetd-iii-buntu",
  "category": "Aksi Korporasi",
  "title": "GMFI Jelaskan ke Bursa, Skema Free Float PMHMETD III [Buntu]",
  "deck": "GMF AeroAsia menjawab permintaan penjelasan BEI atas rencana rights issue PMHMETD III, tapi skema pemenuhan free float dan keputusan pemegang saham pengendali masih belum final.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "rights issue",
   "free float",
   "PMHMETD III"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bf51b0cc0a_998a59946c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtwi-ungkap-struktur-pengendali-ke-bursa-bpii-85-9-saham",
  "category": "Aksi Korporasi",
  "title": "MTWI Ungkap Struktur [Pengendali] ke Bursa, BPII 85,9% Saham",
  "deck": "Menanggapi permintaan Bursa, MTWI merinci pemegang saham, direksi dan komisaris perusahaan serta induk dan anak usahanya.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTWI",
   "BPII",
   "pemegang saham",
   "struktur kepemilikan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f12842a075_69fda76d66.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-totl-saleh-beli-114-800-saham-senilai-rp150-juta",
  "category": "Aksi Korporasi",
  "title": "Direksi TOTL Saleh [Beli] 114.800 Saham Senilai Rp150 Juta",
  "deck": "Direksi Total Bangun Persada, Saleh, menambah kepemilikan saham lewat pembelian tidak langsung pada 16 Oktober 2026, menaikkan hak suaranya dari 0,178 persen menjadi 0,181 persen.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "Total Bangun Persada",
   "insider trading",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20102026-4053-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xspi-bagi-dividen-interim-rp123-49-miliar-ke-pemegang-unit",
  "category": "Aksi Korporasi",
  "title": "XSPI Bagi [Dividen] Interim Rp123,49 Miliar ke Pemegang Unit",
  "deck": "DIRE Simas Plaza Indonesia (XSPI) membagikan dividen interim Rp123,49 miliar, setara Rp5,937 per unit penyertaan, dibayar 5 November 2026.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XSPI",
   "dividen",
   "DIRE",
   "Sinarmas Asset Management"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/17b5e3d1db_34fa4a7627.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-panggil-rupo-rupsi-bahas-gagal-bayar-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "POST Panggil RUPO-RUPSI Bahas [Gagal Bayar] Obligasi dan Sukuk",
  "deck": "Pos Indonesia akan menggelar rapat pemegang obligasi dan sukuk pada 17 November 2026 untuk membahas gagal bayar bunga dan imbalan ijarah serta usulan penyelesaiannya.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "gagal bayar",
   "obligasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/73e6ce0333_ede4451649.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-jadwalkan-rupo-rupsi-17-november-bahas-gagal-bayar-utang",
  "category": "Aksi Korporasi",
  "title": "POST Jadwalkan RUPO-RUPSI 17 November Bahas [Gagal Bayar] Utang",
  "deck": "Pos Indonesia menjadwalkan rapat pemegang obligasi dan sukuk pada 17 November 2026 untuk membahas gagal bayar bunga dan imbalan ijarah yang sudah berulang kali terjadi.",
  "date": "20 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "gagal bayar",
   "RUPO-RUPSI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/adc682bb8a_c6501cecfa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-investasi-sukses-bersama-lepas-1-42-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "WIFI: Investasi Sukses Bersama [Lepas] 1,42 Miliar Saham",
  "deck": "Investasi Sukses Bersama melepas 1,42 miliar saham WIFI senilai sekitar Rp4,06 triliun, hak suaranya turun dari 54,42 persen jadi 27,76 persen dan kehilangan status pengendali.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "kepemilikan saham",
   "divestasi",
   "pengendali saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-5566-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-sinergi-graha-kapital-kuasai-26-67-suara",
  "category": "Aksi Korporasi",
  "title": "WIFI: [Sinergi Graha Kapital] Kuasai 26,67% Suara",
  "deck": "PT Sinergi Graha Kapital melaporkan kepemilikan baru 1,42 miliar saham WIFI atau 26,667% hak suara, dibeli senilai sekitar Rp4,06 triliun pada 19 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "kepemilikan saham",
   "Sinergi Graha Kapital",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-3829-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-resmikan-jv-baterai-goin-bareng-oscarmas-pegang-51",
  "category": "Aksi Korporasi",
  "title": "LABA Resmikan JV Baterai [GOIN] Bareng Oscarmas, Pegang 51%",
  "deck": "Green Power Group (LABA) dan Oscarmas menandatangani akta pendirian PT Gobattery Solusi Indonesia (GOIN), perusahaan patungan penyedia sewa baterai untuk truk listrik, modal dasar Rp10 miliar.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LABA",
   "Green Power Group",
   "GOIN",
   "Oscarmas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f88018f5a8_bd77823d0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-temuan-bpk-rp8-5-miliar-di-proyek-tol-palembang-betung",
  "category": "Aksi Korporasi",
  "title": "WSKT: Temuan BPK Rp8,5 Miliar di Proyek Tol [Palembang-Betung]",
  "deck": "Waskita Karya menjelaskan ke BEI soal temuan BPK atas proyek Tol Palembang-Betung yang dikerjakan anak usahanya, WST, senilai Rp8,5 miliar, yang sudah dipotong dari tagihan ke Hutama Karya.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "BPK",
   "Hutama Karya",
   "Tol Trans Sumatera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c52f752d09_a72bee01bf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bni-pertahankan-predikat-tertinggi-tata-kelola-2-tahun",
  "category": "Perbankan",
  "title": "BNI [Pertahankan] Predikat Tertinggi Tata Kelola 2 Tahun",
  "deck": "BNI mempertahankan predikat Leadership in Corporate Governance di ajang IICD 2026, dua tahun berturut-turut setelah naik kelas dari kategori Best Overall pada 2025.",
  "date": "19 Oktober 2026",
  "image": "assets/img/bni-pertahankan-predikat-tertinggi-tata-kelola-2-tahun.jpg",
  "imageV": "mvfh5f09",
  "tags": [
   "BNI",
   "Tata Kelola Perusahaan",
   "IICD",
   "KBMI 4"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473881-bni-pertahankan-predikat-tertinggi-penerapan-gcg-dua-tahun-berturut-turut"
 },
 {
  "slug": "ekspor-bumbu-ri-capai-kesepakatan-us-5-juta-di-tei",
  "category": "Bisnis",
  "title": "Ekspor Bumbu RI Capai Kesepakatan [US$5 Juta] di TEI",
  "deck": "Dua kesepakatan dagang bumbu dan kuliner Indonesia dengan mitra asing diteken di penutupan Trade Expo Indonesia ke-41, salah satunya bernilai hingga US$5 juta.",
  "date": "19 Oktober 2026",
  "image": "assets/img/negosiasi-dagang-meja.jpg",
  "tags": [
   "ekspor bumbu",
   "Trade Expo Indonesia",
   "S'RASA",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bango-dukung-srasa-perkuat-peluang-ekspor-bumbu-indonesia-di-tei-ke-41",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "admf-bayar-pelunasan-obligasi-sukuk-rp433-96-miliar-9-nov-2026",
  "category": "Aksi Korporasi",
  "title": "ADMF Bayar [Pelunasan] Obligasi-Sukuk Rp433,96 Miliar 9 Nov 2026",
  "deck": "ADMF akan melunasi pokok Sukuk Mudharabah Berkelanjutan V dan Obligasi Berkelanjutan VI seri B senilai total Rp433,96 miliar pada 9 November 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "obligasi",
   "sukuk",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e8e02e7c5a_efebb5bf0d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-raih-penghargaan-esg-lewat-program-olah-sampah-nasabah",
  "category": "BUMN",
  "title": "PNM Raih [Penghargaan] ESG Lewat Program Olah Sampah Nasabah",
  "deck": "PNM meraih ESG NOW Awards 2026 kategori Circular Economy Empowerment atas program Kembangs yang mengajak nasabah Mekaar memilah dan menyetor sampah menjadi nilai ekonomi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/pnm-raih-penghargaan-esg-lewat-program-olah-sampah-nasabah.jpg",
  "imageV": "mvfcj52n",
  "tags": [
   "PNM",
   "Mekaar",
   "ESG",
   "bank sampah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473860-pnm-raih-esg-now-awards-2026-dorong-ibu-nasabah-mekaar-ubah-sampah-jadi-nilai-ekonomi"
 },
 {
  "slug": "wifi-rencana-konstruksi-sentral-telekomunikasi-npv-rp929-m",
  "category": "Aksi Korporasi",
  "title": "WIFI Rencana [Konstruksi] Sentral Telekomunikasi, NPV Rp929 M",
  "deck": "WIFI merevisi studi kelayakan usaha baru konstruksi sentral telekomunikasi (KBLI 42206) dengan modal awal Rp6 miliar dan proyeksi NPV Rp929,8 miliar, menunggu persetujuan RUPS.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "KBLI 42206",
   "studi kelayakan usaha",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0b8b0c785c_52799d5342.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cuan-tanggapi-sanksi-ojk-terkait-proses-ipo-perseroan",
  "category": "Aksi Korporasi",
  "title": "CUAN Tanggapi Sanksi [OJK] Terkait Proses IPO Perseroan",
  "deck": "CUAN menegaskan ke BEI bahwa sanksi OJK atas dugaan pelanggaran proses IPO tidak dikenakan langsung ke perusahaan, melainkan ke pihak yang terlibat dalam pelaksanaan penawaran umum perdana sahamnya.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CUAN",
   "OJK",
   "IPO",
   "sanksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7bf2f56724_c702f9926e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vktr-catat-480-6-juta-saham-baru-dari-hmetd",
  "category": "Aksi Korporasi",
  "title": "VKTR Catat 480,6 Juta Saham Baru dari [HMETD]",
  "deck": "BEI mencatatkan 480.575.884 saham baru VKTR hasil pelaksanaan HMETD per 20 Oktober 2026, menambah total saham beredar jadi 45,59 miliar lembar.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "HMETD",
   "saham baru",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fba418b027_2266f81a76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-catat-tambahan-600-000-unit-etf-xihd",
  "category": "Aksi Korporasi",
  "title": "BEI Catat Tambahan [600.000] Unit ETF XIHD",
  "deck": "Bursa mencatatkan tambahan 600.000 unit penyertaan ETF XIHD, dari 54,4 juta menjadi 55 juta unit, mulai diperdagangkan 20 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XIHD",
   "ETF",
   "Reksadana",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/65487a848b_26006228e3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ahap-catatkan-607-6-juta-saham-baru-hasil-hmetd",
  "category": "Aksi Korporasi",
  "title": "AHAP Catatkan 607,6 Juta Saham Baru Hasil [HMETD]",
  "deck": "BEI mencatatkan 607.614.227 saham baru AHAP hasil pelaksanaan rights issue tahap V, menambah total saham beredar menjadi 7.594.622.377 lembar efektif 20 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AHAP",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fcadc07f17_a895d13cbf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unit-penyertaan-etf-xrdn-bertambah-391-9-juta-unit",
  "category": "Aksi Korporasi",
  "title": "Unit Penyertaan ETF XRDN Bertambah [391,9] Juta Unit",
  "deck": "BEI mencatat penambahan 391,9 juta unit penyertaan ETF XRDN menjadi 22,48 miliar unit, efektif diperdagangkan mulai 20 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XRDN",
   "ETF",
   "BEI",
   "reksa dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7dd1063dca_216146c9c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brna-catatkan-342-9-juta-saham-baru-dari-rights-issue-put-iii",
  "category": "Aksi Korporasi",
  "title": "BRNA Catatkan [342,9 Juta] Saham Baru dari Rights Issue PUT III",
  "deck": "Berlina Tbk (BRNA) mencatatkan tambahan 342.885.232 saham hasil pelaksanaan HMETD rights issue PUT III, sehingga total saham beredar jadi 1,32 miliar lembar.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRNA",
   "rights issue",
   "HMETD",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ea7f1684dd_593b85b76a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-jadwalkan-ulang-rupslb-rights-issue-ke-23-oktober",
  "category": "Aksi Korporasi",
  "title": "KOTA Jadwalkan Ulang [RUPSLB] Rights Issue ke 23 Oktober",
  "deck": "DMS Propertindo (KOTA) mengusulkan jadwal baru RUPSLB rights issue dan transaksi material ke 23 Oktober 2026, menyusul permintaan perubahan informasi dari OJK.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "rights issue",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b52d4e5016_ca64092f31.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bold-obligasi-rp503-15-m-jatuh-tempo-20-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BOLD: Obligasi Rp503,15 M [Jatuh Tempo] 20 Oktober 2026",
  "deck": "Obligasi III BUMA Tahun 2025 Seri A senilai Rp503,15 miliar jatuh tempo dan didelisting dari BEI mulai 20 Oktober 2026, bersamaan dengan pelunasan pokok penuh dan bunga terakhir.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "obligasi",
   "BUMA",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1b046144e6_c0ba94d169.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-tambah-275-400-saham-dari-konversi-obligasi-wajib",
  "category": "Aksi Korporasi",
  "title": "PACK Tambah 275.400 Saham dari [Konversi] Obligasi Wajib",
  "deck": "Bursa mencatatkan 275.400 saham baru PT Abadi Nusantara Hijau Investama Tbk (PACK) hasil konversi sebagian Obligasi Wajib Konversi, efektif 20 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "obligasi wajib konversi",
   "pencatatan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d971a4531c_35c210cdd5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-catatkan-tambahan-195-3-juta-saham-dari-rights-issue",
  "category": "Aksi Korporasi",
  "title": "ENRG Catatkan Tambahan 195,3 Juta Saham dari [Rights Issue]",
  "deck": "BEI mencatat tambahan 195.320.682 saham baru ENRG hasil pelaksanaan HMETD PUT IV, membuat total saham tercatat naik menjadi 34.079.857.191 lembar per 20 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "rights issue",
   "HMETD",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7a5e38c73a_db03a68238.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asri-manunggal-tambah-kolateral-repo-150-juta-saham-maybank",
  "category": "Aksi Korporasi",
  "title": "ASRI: Manunggal Tambah Kolateral Repo [150 Juta] Saham Maybank",
  "deck": "Maybank Sekuritas melaporkan tambahan 150 juta saham ASRI sebagai kolateral repo PT Manunggal Prime Development, hak suara tidak langsungnya naik dari 7,29% jadi 8,05%.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASRI",
   "Alam Sutera Realty",
   "Maybank Sekuritas",
   "Repo Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-9650-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ciri-sistem-bisnis-yang-perlu-diganti-saat-tumbuh",
  "category": "Bisnis",
  "title": "Ciri Sistem Bisnis yang Perlu Diganti Saat [Tumbuh]",
  "deck": "Saat pelanggan, cabang, dan transaksi bertambah, sistem lama yang tak lagi terintegrasi bisa membuat laporan telat dan keputusan tertunda.",
  "date": "19 Oktober 2026",
  "image": "assets/img/ciri-sistem-bisnis-yang-perlu-diganti-saat-tumbuh.jpg",
  "imageV": "mvfcj5iu",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473846-bisnis-terus-berkembang-mengapa-sistem-yang-digunakan-harus-ikut-berubah"
 },
 {
  "slug": "ri-kejar-penandatanganan-ieu-cepa-berlaku-awal-2027",
  "category": "Global",
  "title": "RI Kejar Penandatanganan IEU-CEPA, Berlaku Awal [2027]",
  "deck": "Pemerintah mempercepat proses penandatanganan dan ratifikasi IEU-CEPA agar perjanjian dagang dengan Uni Eropa itu mulai berlaku awal 2027.",
  "date": "19 Oktober 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "Ekspor",
   "Perjanjian Dagang"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7166/targetkan-implementasi-awal-2027-pemerintah-dorong-percepatan-penandatanganan-ieu-cepa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "esdm-akui-distribusi-bbm-ke-luar-jawa-masih-tersendat",
  "category": "Energi",
  "title": "ESDM Akui Distribusi BBM ke [Luar Jawa] Masih Tersendat",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut cadangan BBM nasional masih aman, namun pengiriman ke Kalimantan, Sulawesi, Sumatera, dan Bali masih menghadapi kendala logistik.",
  "date": "19 Oktober 2026",
  "image": "assets/img/esdm-akui-distribusi-bbm-ke-luar-jawa-masih-tersendat.jpg",
  "imageV": "mvf6syek",
  "tags": [
   "BBM",
   "ESDM",
   "Pertamina",
   "distribusi energi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/bahlil-pastikan-stok-bbm-nasional-aman-distribusi-ke-daerah-diperkuat",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "cadangan-bbm-bali-dinaikkan-ke-15-hari-usai-antrean-spbu",
  "category": "Energi",
  "title": "Cadangan BBM Bali Dinaikkan ke [15] Hari usai Antrean SPBU",
  "deck": "Pemerintah menaikkan cadangan BBM Bali dari 11 menjadi 15 hari setelah antrean di sejumlah SPBU akibat kapal tanker terlambat. Skema beli ganjil-genap diperpanjang hingga 23 Oktober.",
  "date": "19 Oktober 2026",
  "image": "assets/img/cadangan-bbm-bali-dinaikkan-ke-15-hari-usai-antrean-spbu.jpg",
  "imageV": "mvf6t0hw",
  "tags": [
   "BBM Bali",
   "Pertamina",
   "ESDM",
   "Distribusi Energi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/tujuh-kapal-dikerahkan-bahlil-perkuat-cadangan-bbm-bali-hingga-15-hari",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "lidah-buaya-gunungkidul-bidik-ekspor-ke-empat-negara",
  "category": "UMKM",
  "title": "Lidah Buaya Gunungkidul Bidik [Ekspor] ke Empat Negara",
  "deck": "UMKM lidah buaya Rasane Vera dari Gunungkidul menggandeng lebih dari 125 petani mitra dan membidik pasar ekspor ke UEA, Jepang, Korea Selatan, dan Inggris.",
  "date": "19 Oktober 2026",
  "image": "assets/img/batik-umkm.jpg",
  "tags": [
   "UMKM",
   "Ekspor",
   "Lidah Buaya",
   "Gunungkidul"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/lidah-buaya-dari-gunungkidul-ubah-keterbatasan-karst-jadi-potensi-ekspor-bernilai-tinggi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "rups-hrta-setujui-private-placement-hingga-10-saham-baru",
  "category": "Aksi Korporasi",
  "title": "RUPS HRTA Setujui [Private Placement] hingga 10% Saham Baru",
  "deck": "Pemegang saham independen HRTA menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu hingga 460,5 juta saham, disetujui 98,18 persen suara yang hadir.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "RUPS",
   "private placement",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/796d973bf8_5f5b940fe4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bdmn-sewakan-tanah-bangunan-ke-adira-afiliasi-rp617-76-juta",
  "category": "Aksi Korporasi",
  "title": "BDMN sewakan tanah-bangunan ke Adira [afiliasi] Rp617,76 juta",
  "deck": "Danamon menyewakan aset tanah dan bangunan ke anak usahanya, Adira Finance, senilai Rp617,76 juta per tahun dalam transaksi afiliasi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BDMN",
   "Adira Finance",
   "transaksi afiliasi",
   "Bank Danamon"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a0cc4f4a17_6fe08bef2d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pada-jawab-bursa-rugi-rp9-95-m-kas-operasi-negatif-rp64-45-m",
  "category": "Aksi Korporasi",
  "title": "PADA Jawab Bursa: Rugi Rp9,95 M, Kas Operasi [Negatif] Rp64,45 M",
  "deck": "Menjawab permintaan penjelasan BEI, PADA mengungkap arus kas operasi yang memburuk serta ketergantungan besar pendapatan jasa kurir pada satu pelanggan dengan margin tipis 2,5 persen.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADA",
   "arus kas operasi",
   "jasa kurir",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/555fa103ef_423df4cf8d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-scma-disesuaikan-usai-dividen-rp8-4-saham",
  "category": "Aksi Korporasi",
  "title": "DR: Waran SCMA Disesuaikan Usai [Dividen] Rp8,4/Saham",
  "deck": "RHB Sekuritas Indonesia menyesuaikan rasio dan harga pelaksanaan waran terstruktur SCMA menyusul rencana dividen tunai SCMA Rp8,4 per saham senilai total Rp533,4 miliar.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "SCMA",
   "dividen",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cb38ccc21e_2c80f95544.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-batalkan-public-expose-imbas-penundaan-rupslb",
  "category": "Aksi Korporasi",
  "title": "LAPD Batalkan Public Expose Imbas Penundaan [RUPSLB]",
  "deck": "LAPD membatalkan paparan publik tahunan yang dijadwalkan 20 Oktober 2026, menyusul penundaan RUPSLB ke 29 Oktober dan klarifikasi OJK soal rencana rights issue serta transaksi akuisisi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "public expose",
   "RUPSLB",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0e07794fe6_69f5c3c31f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppre-bubarkan-anak-usaha-pt-presisi-sumber-anugerah",
  "category": "Aksi Korporasi",
  "title": "PPRE [Bubarkan] Anak Usaha PT Presisi Sumber Anugerah",
  "deck": "PP Presisi melikuidasi anak usaha tak langsung PSA yang 51% sahamnya ia pegang, karena perusahaan itu belum pernah aktif beroperasi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRE",
   "likuidasi",
   "anak usaha",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/282a33aed2_6b00dc699a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-pemegang-saham-tambah-saham-hak-suara-ke-8-21",
  "category": "Aksi Korporasi",
  "title": "BEEF: Pemegang Saham Tambah Saham, Hak Suara ke [8,21%]",
  "deck": "Dimas Wibowo membeli 19,16 juta saham BEEF pada 18 Agustus 2026, mendorong hak suaranya di Estika Tata Tiara naik dari 7,98% menjadi 8,21%.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "kepemilikan saham",
   "Estika Tata Tiara",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-2855-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdra-ganti-satu-anggota-komite-audit",
  "category": "Aksi Korporasi",
  "title": "SDRA Ganti Satu Anggota [Komite Audit]",
  "deck": "Bank Woori Saudara Indonesia (SDRA) mengganti satu anggota komite audit efektif 16 Oktober 2026, sementara ketua dan anggota lainnya tetap.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDRA",
   "komite audit",
   "Bank Woori Saudara",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/04f9f47d70_aeb47b9fc4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-alihkan-40-juta-saham-buyback-ke-pt-nusa-damai-rp14-7-m",
  "category": "Aksi Korporasi",
  "title": "PSSI [Alihkan] 40 Juta Saham Buyback ke PT Nusa Damai, Rp14,7 M",
  "deck": "PSSI mengalihkan 40 juta saham hasil buyback ke PT Nusa Damai pada 15 Oktober 2026 seharga Rp368 per saham, meraih dana Rp14,72 miliar tanpa rugi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "buyback saham",
   "saham treasuri",
   "pengalihan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/846b7769a3_fe0e60038f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-jpfa-semester-i-2026-melonjak-97-ke-rp2-68-triliun",
  "category": "Aksi Korporasi",
  "title": "Laba JPFA Semester I/2026 [Melonjak] 97% ke Rp2,68 Triliun",
  "deck": "Laba JAPFA Comfeed naik hampir dua kali lipat jadi Rp2,68 triliun pada semester I 2026, meski utang berbunga dan rasio utang terhadap ekuitas juga meningkat.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "JAPFA Comfeed",
   "kinerja keuangan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/973cd85c49_5e6b9e8aaa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-revisi-batas-harga-buyback-saham-hapus-batas-bawah",
  "category": "Aksi Korporasi",
  "title": "TPIA Revisi Batas Harga [Buyback] Saham, Hapus Batas Bawah",
  "deck": "Chandra Asri mengoreksi lagi aturan harga buyback saham, kini hanya mematok batas atas Rp3.000 per lembar tanpa batas bawah, sementara dana maksimal Rp1 triliun dan target 800 juta saham tetap sama.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "buyback saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/395415ea36_1bc1f1c3cb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-rencanakan-pengalihan-85-juta-saham-treasuri",
  "category": "Aksi Korporasi",
  "title": "PSSI Rencanakan Pengalihan 85 Juta Saham [Treasuri]",
  "deck": "PSSI akan mengalihkan hingga 85 juta saham treasuri dari hasil buyback Tahap III yang dibeli seharga rata-rata Rp347 per saham.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "buyback saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fb8281f46d_94d18efee3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsmr-gelar-rupslb-25-november-atas-permintaan-komisaris",
  "category": "Aksi Korporasi",
  "title": "JSMR Gelar RUPSLB 25 November Atas Permintaan [Komisaris]",
  "deck": "Jasa Marga mengoreksi pengumuman RUPSLB yang digelar 25 November 2026 setelah permintaan Dewan Komisaris, agenda rapat belum diungkap.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "RUPSLB",
   "Jasa Marga",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/85478bf3a3_1296d53730.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-waran-scma-usai-dividen-rp8-4-saham",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Waran [SCMA] usai Dividen Rp8,4/Saham",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran terstruktur SCMAZPCJ7A menyusul dividen interim SCMA Rp8,4 per saham.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "SCMA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/060622a3c4_10573013b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elsa-komisaris-independen-ajukan-mundur-tunggu-restu-rups",
  "category": "Aksi Korporasi",
  "title": "ELSA: Komisaris Independen Ajukan [Mundur], Tunggu Restu RUPS",
  "deck": "Komisaris Independen Elnusa, Abdul Hakim, mengajukan pengunduran diri pada 15 Oktober 2026 dan baru efektif setelah disetujui RUPS mendatang.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa Tbk",
   "komisaris independen",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/faee3c2171_e0bc335ee5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-pemegang-saham-tambah-44-7-juta-saham-suara-ke-7-07",
  "category": "Aksi Korporasi",
  "title": "BEEF: [Pemegang Saham] Tambah 44,7 Juta Saham, Suara ke 7,07%",
  "deck": "Pemegang saham Dimas Wibowo menambah 44,7 juta lembar saham BEEF lewat pembelian tidak langsung pada Juli 2026, mengangkat hak suaranya dari 6,52 persen menjadi 7,07 persen.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "Estika Tata Tiara",
   "pemegang saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-8147-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-tetapkan-tanggal-pelaksanaan-waran-bqcv6a-30-oktober",
  "category": "Aksi Korporasi",
  "title": "BQ Tetapkan Tanggal Pelaksanaan Waran [BQCV6A] 30 Oktober",
  "deck": "PT Korea Investment and Sekuritas Indonesia (BQ) menjadwalkan pelaksanaan otomatis 22 waran terstruktur BQCV6A pada 30 Oktober 2026, mencakup waran berbasis ASII, TLKM, SMGR, dan saham lain.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "waran terstruktur",
   "BQCV6A",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c1f4310ade_2d46e873b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-rombak-komite-audit-ignasius-jonan-jadi-ketua",
  "category": "Aksi Korporasi",
  "title": "UNTR Rombak [Komite Audit], Ignasius Jonan Jadi Ketua",
  "deck": "United Tractors mengangkat Ignasius Jonan sebagai Ketua Komite Audit dan menambah Budi Frensidy sebagai anggota baru, efektif 15 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "komite audit",
   "tata kelola korporasi",
   "Ignasius Jonan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0b0cf5d5c9_88322af3c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpin-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "LPIN Jawab Permintaan BEI soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Multi Prima Sejahtera menjawab surat BEI 15 Oktober 2026, menyatakan tidak ada info material maupun rencana korporasi yang menjelaskan pergerakan harga sahamnya.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPIN",
   "Multi Prima Sejahtera",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9c1d963eae_2ea9131f4f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intp-dirut-christian-kartawijaya-mundur-jose-vadillo-gantikan",
  "category": "Aksi Korporasi",
  "title": "INTP: Dirut Christian Kartawijaya [Mundur], Jose Vadillo Gantikan",
  "deck": "Direktur Utama Christian Kartawijaya mundur karena pensiun dan Komisaris Juan Francisco Defalque mundur karena alasan pribadi; RUPSLB 3 Desember 2026 menetapkan pengganti.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTP",
   "pergantian direksi",
   "komisaris",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/54e1575e77_72879d0250.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-pemegang-saham-tambah-14-2-juta-saham-ke-6-08",
  "category": "Aksi Korporasi",
  "title": "BEEF: Pemegang Saham [Tambah] 14,2 Juta Saham ke 6,08%",
  "deck": "Dimas Wibowo membeli 14,2 juta saham BEEF secara tidak langsung sepanjang 25 Juni 2026, mengangkat hak suaranya dari 5,91 persen menjadi 6,08 persen.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "pemegang saham",
   "kepemilikan saham",
   "Estika Tata Tiara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-5017-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnko-rupslb-ketiga-lagi-lagi-gagal-capai-kuorum",
  "category": "Aksi Korporasi",
  "title": "CNKO: RUPSLB Ketiga Lagi-Lagi Gagal Capai [Kuorum]",
  "deck": "RUPSLB ketiga Exploitasi Energi Indonesia (CNKO) untuk mengubah anggaran dasar gagal terlaksana karena kehadiran pemegang saham hanya 46,9 persen, di bawah syarat minimum 48 persen.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNKO",
   "RUPSLB",
   "anggaran dasar",
   "kuorum pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1446c4a754_22145c504d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-komisaris-tambah-200-000-saham-total-sepekan-380-000",
  "category": "Aksi Korporasi",
  "title": "JECX: Komisaris [Tambah] 200.000 Saham, Total Sepekan 380.000",
  "deck": "Komisaris JECX Dr. Admar Anwar membeli 200.000 saham senilai sekitar Rp302 juta pada 16 Oktober, melanjutkan rangkaian pembelian yang totalnya 380.000 lembar sepekan ini.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Admar Anwar",
   "kepemilikan saham",
   "dewan komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-6051-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-tunda-rupslb-ke-29-oktober-ojk-minta-klarifikasi",
  "category": "Aksi Korporasi",
  "title": "LAPD Tunda RUPSLB ke 29 Oktober, OJK Minta [Klarifikasi]",
  "deck": "RUPSLB LAPD yang semula 20 Oktober ditunda ke 29 Oktober 2026 setelah OJK minta tambahan klarifikasi soal rencana PMHMETD II, transaksi material, dan transaksi afiliasi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "RUPSLB",
   "OJK",
   "PMHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fabac395eb_821bcb6d47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-topup-saham-via-repo-suara-ke-32-01",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Topup Saham via [Repo], Suara ke 32,01%",
  "deck": "Direksi NSSS lewat Samuel Sekuritas Indonesia menjual 138,15 juta saham lalu membeli kembali 242,32 juta saham lewat mekanisme repo, hak suaranya naik ke 32,01 persen.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-0453-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-lepas-saham-lewat-repo-hak-suara-ke-4-58",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Lepas Saham Lewat Repo, Hak Suara ke [4,58%]",
  "deck": "Direksi RLCO melaporkan penjualan 40,07 juta saham lewat pencairan perjanjian repo pada 19 Oktober 2026, memangkas kepemilikannya dari 5,86% menjadi 4,58% hak suara.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-1221-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bold-lunasi-obligasi-rp503-15-m-dan-kupon-rp9-43-m",
  "category": "Aksi Korporasi",
  "title": "BOLD Lunasi [Obligasi] Rp503,15 M dan Kupon Rp9,43 M",
  "deck": "PT Bukit Makmur Mandiri Utama (BOLD) melunasi pokok dan kupon Obligasi III BUMA Tahun 2025 Seri A senilai total sekitar Rp512,58 miliar pada 19 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "obligasi korporasi",
   "pelunasan utang",
   "Bukit Makmur Mandiri Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2504fa7221_0d52eb4137.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-revisi-periode-buyback-berakhir-lebih-cepat-ke-31-desember",
  "category": "Aksi Korporasi",
  "title": "TPIA Revisi [Periode] Buyback, Berakhir Lebih Cepat ke 31 Desember",
  "deck": "Chandra Asri Pacific mengoreksi ulang jadwal buyback saham senilai maksimal Rp1 triliun, mempersingkat periode pembelian dari semula berakhir 19 Januari 2027 menjadi 31 Desember 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "buyback saham",
   "Chandra Asri Pacific",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9bfe110ef9_e75b96abcf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akku-gelar-paparan-publik-usai-suspensi-saham-oleh-bei",
  "category": "Aksi Korporasi",
  "title": "AKKU Gelar Paparan Publik usai [Suspensi] Saham oleh BEI",
  "deck": "BEI meminta AKKU menggelar paparan publik insidentil pada 21 Oktober 2026 di Bandung untuk menjelaskan suspensi Cooling Down sahamnya sejak 16 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "BEI",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9323147706_ff446adbdb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-kantongi-restu-rupslb-untuk-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "BIPP Kantongi Restu RUPSLB untuk [PMTHMETD]",
  "deck": "Pemegang saham independen BIPP menyetujui rencana penambahan modal tanpa hak memesan efek terlebih dahulu dan perubahan anggaran dasar terkait, dalam RUPSLB 16 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "RUPSLB",
   "PMTHMETD",
   "Penambahan Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bed486049d_cbc185e05e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arta-ke-bei-kas-turun-karena-investasi-rp37-m-di-dild",
  "category": "Aksi Korporasi",
  "title": "ARTA ke BEI: Kas Turun karena [Investasi] Rp37 M di DILD",
  "deck": "Menjawab permintaan penjelasan BEI, Arthavest mengungkap kas menyusut akibat investasi Rp37 miliar di saham Intiland Development, sementara arus kas operasi hotelnya masih negatif.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTA",
   "Arthavest",
   "DILD",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eec84fff4a_57657ed5bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-luncurkan-dashboard-akses-keuangan-daerah",
  "category": "Perbankan",
  "title": "Pemerintah [Luncurkan] Dashboard Akses Keuangan Daerah",
  "deck": "Kemenko Perekonomian, OJK, dan Bappenas meluncurkan dashboard IKAD untuk memantau akses keuangan masyarakat hingga level kabupaten/kota.",
  "date": "19 Oktober 2026",
  "image": "assets/img/atm-kota.jpg",
  "tags": [
   "inklusi keuangan",
   "akses keuangan daerah",
   "OJK",
   "Bappenas"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7165/perkuat-pemerataan-pembangunan-daerah-menko-airlangga-dorong-pemanfaatan-dashboard-ikad",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bukk-bentuk-3-anak-usaha-baru-di-sektor-energi-terbarukan",
  "category": "Aksi Korporasi",
  "title": "BUKK Bentuk 3 Anak Usaha Baru di Sektor [Energi Terbarukan]",
  "deck": "Melalui anak usaha terkendali PT Bukaka Mega Investama, BUKK mendirikan tiga perusahaan baru untuk bisnis pembangkit listrik energi baru terbarukan di Kabupaten Bogor.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKK",
   "energi terbarukan",
   "anak usaha",
   "ekspansi bisnis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dbfc766b96_cc731a77f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-gandeng-ifsb-iilm-bahas-ketahanan-keuangan-syariah",
  "category": "Moneter",
  "title": "BI Gandeng IFSB-IILM Bahas [Ketahanan] Keuangan Syariah",
  "deck": "Bank Indonesia bersama IFSB dan IILM menggelar seminar internasional soal risiko dan ketahanan keuangan syariah, saat aset syariah RI tumbuh 10 persen jadi Rp3.264 triliun.",
  "date": "19 Oktober 2026",
  "image": "assets/img/brankas-uang-sentral.jpg",
  "tags": [
   "keuangan syariah",
   "Bank Indonesia",
   "ISEF 2026",
   "sukuk"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "rupslb-abmm-setujui-pengunduran-diri-direktur-haris-mustarto",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ABMM Setujui [Pengunduran Diri] Direktur Haris Mustarto",
  "deck": "RUPSLB ABM Investama pada 15 Oktober 2026 menerima pengunduran diri Direktur Haris Mustarto, menyisakan susunan direksi tiga orang dipimpin Achmad Ananda Djajanegara.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABMM",
   "RUPSLB",
   "direksi",
   "ABM Investama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ab6f00d056_6a55155209.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beli-klaim-rugi-menyusut-direksi-tahan-revisi-target-2026",
  "category": "Aksi Korporasi",
  "title": "BELI Klaim Rugi Menyusut, Direksi Tahan [Revisi] Target 2026",
  "deck": "Direksi Blibli (BELI) klaim kinerja semester I 2026 lampaui target dan rugi menyusut dua tahun berturut, tapi belum revisi target karena pertimbangan makro.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BELI",
   "Blibli",
   "Public Expose",
   "profitabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0f8b6821fb_ed1fab9a03.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msie-pemegang-saham-permata-health-tambah-saham-jadi-1-77",
  "category": "Aksi Korporasi",
  "title": "MSIE: Pemegang Saham Permata Health Tambah Saham jadi [1,77%]",
  "deck": "Permata Health Nusantara menambah kepemilikan di PT Multisarana Intan Eduka Tbk (MSIE) sebanyak 3,5 juta saham pada 16 Oktober 2026, menaikkan hak suaranya dari 1,53 persen menjadi 1,77 persen.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIE",
   "kepemilikan saham",
   "Permata Health Nusantara",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-1892-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baik-jadwalkan-rupslb-bahas-rombak-komisaris",
  "category": "Aksi Korporasi",
  "title": "BAIK Jadwalkan RUPSLB, Bahas Rombak [Komisaris]",
  "deck": "PT Bersama Mencapai Puncak Tbk. (BAIK) akan menggelar RUPSLB pada 25 November 2026 dengan agenda tunggal perubahan susunan Dewan Komisaris.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "RUPSLB",
   "Dewan Komisaris",
   "Bersama Mencapai Puncak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ba8a398427_37aaa57e1d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bren-tanggapi-sanksi-ojk-klaim-keuangan-tetap-kuat",
  "category": "Aksi Korporasi",
  "title": "BREN Tanggapi [Sanksi] OJK, Klaim Keuangan Tetap Kuat",
  "deck": "BREN merespons surat permintaan penjelasan BEI terkait sanksi OJK atas transaksi saham BREN, CUAN, dan DSSA, sembari memaparkan kinerja keuangan dan progres proyek semester pertama 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BREN",
   "OJK",
   "Barito Renewables",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eb2afa71ba_9d9b08ae76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bren-bantah-ada-info-tersembunyi-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BREN Bantah Ada Info Tersembunyi di Balik Volatilitas [Saham]",
  "deck": "Menjawab permintaan BEI, BREN menyatakan tak ada fakta material baru, tak ada rencana korporasi dalam 3 bulan, dan pemegang saham utama belum berencana ubah kepemilikan.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BREN",
   "Barito Renewables",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/27210eaec3_4fe6d71e5d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pangan-nusa-expo-catat-potensi-transaksi-rp5-9-triliun",
  "category": "UMKM",
  "title": "Pangan Nusa Expo Catat Potensi Transaksi [Rp5,9 Triliun]",
  "deck": "Pameran Pangan Nusa Expo 2026 di Kabupaten Tangerang mencatat potensi transaksi Rp5,9 triliun, didominasi kesepakatan ekspansi kuliner ke lima negara tujuan ekspor.",
  "date": "19 Oktober 2026",
  "image": "assets/img/warung-makan.jpg",
  "tags": [
   "UMKM",
   "Ekspor Kuliner",
   "Pangan Nusa Expo",
   "Kementerian Perdagangan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pangan-kemasan-dan-kuliner-di-pangan-nusa-expo-2026-catatkan-potensi-transaksi-rp59-triliun",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "survei-bi-kegiatan-usaha-kuat-di-triwulan-iii-proyeksi-q4-melambat",
  "category": "Makroekonomi",
  "title": "Survei BI: Kegiatan Usaha Kuat di Triwulan III, Proyeksi Q4 [Melambat]",
  "deck": "Bank Indonesia melaporkan kegiatan dunia usaha triwulan III 2026 masih tumbuh positif di semua sektor, namun proyeksi triwulan IV sedikit melambat meski musim belanja akhir tahun mendekat.",
  "date": "19 Oktober 2026",
  "image": "assets/img/keranjang-belanja-ibu.jpg",
  "tags": [
   "Bank Indonesia",
   "SKDU",
   "Dunia Usaha",
   "Triwulan III 2026"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "indeks-manufaktur-bi-naik-lagi-di-triwulan-iii-2026",
  "category": "Industri",
  "title": "Indeks Manufaktur BI [Naik] Lagi di Triwulan III 2026",
  "deck": "Bank Indonesia mencatat indeks kinerja industri pengolahan naik ke 52,28 persen pada triwulan III 2026, dan memprakirakan kenaikan lanjutan pada triwulan IV.",
  "date": "19 Oktober 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "PMI-BI",
   "Industri Pengolahan",
   "Bank Indonesia",
   "Manufaktur"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dssa-tanggapi-isu-pelanggaran-saham-klaim-tak-ada-dampak",
  "category": "Aksi Korporasi",
  "title": "DSSA Tanggapi Isu [Pelanggaran] Saham, Klaim Tak Ada Dampak",
  "deck": "DSSA menjawab permintaan penjelasan BEI terkait pemberitaan CNBC Indonesia soal OJK menelusuri dugaan pelanggaran saham BREN, CUAN, dan DSSA, dan menyatakan belum ada dampak material.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSSA",
   "OJK",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/558e348077_b5165e9cad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-komisaris-jual-373-400-saham-senilai-rp182-juta",
  "category": "Aksi Korporasi",
  "title": "CYBR: Komisaris [Jual] 373.400 Saham Senilai Rp182 Juta",
  "deck": "Komisaris ITSEC Asia, Andri Hutama Putra, melepas 373.400 saham secara tidak langsung pada 14 Oktober 2026, hak suaranya turun tipis dari 0,209% jadi 0,207%.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19102026-5452-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-rombak-susunan-komite-audit-tiga-posisi-berganti",
  "category": "Aksi Korporasi",
  "title": "POOL Rombak Susunan [Komite Audit], Tiga Posisi Berganti",
  "deck": "Pool Advista Indonesia mengganti seluruh pimpinan dan anggota komite audit efektif 29 September 2026, menyusul perubahan dewan komisaris dari RUPSLB bulan sebelumnya.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "komite audit",
   "tata kelola perusahaan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2586c48f00_0c03be5796.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ctbn-rombak-susunan-direksi-satu-direktur-mundur",
  "category": "Aksi Korporasi",
  "title": "CTBN Rombak Susunan [Direksi], Satu Direktur Mundur",
  "deck": "RUPSLB Citra Tubindo menyetujui pengunduran diri Direktur Susi Yulianti dan mengangkat Romulus Suprayono Kuncoro sebagai direktur baru, efektif sejak penutupan rapat 15 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CTBN",
   "RUPSLB",
   "Direksi",
   "Citra Tubindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4c673562bd_c705823241.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dnrk-ganti-satu-anggota-komite-audit-mulai-15-oktober",
  "category": "Aksi Korporasi",
  "title": "DNRK ganti satu anggota [Komite Audit] mulai 15 Oktober",
  "deck": "PT Danareksa (DNRK) mengganti satu anggota komite audit, dari Gideon Siallagan ke Zulfahmy Wahab, efektif 15 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DNRK",
   "komite audit",
   "Danareksa",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d13204ccc5_2d5a83d677.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pbsa-siapkan-buyback-rp100-miliar-di-tengah-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "PBSA Siapkan [Buyback] Rp100 Miliar di Tengah Pasar Bergejolak",
  "deck": "PBSA berencana membeli kembali saham maksimal Rp100 miliar dari kas internal pada 20 Oktober 2026 hingga 19 Januari 2027, memakai aturan OJK untuk pasar yang berfluktuasi signifikan.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PBSA",
   "buyback",
   "saham treasury",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4b6bc883c1_92696b9e6e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgas-jelaskan-ke-bei-dampak-putusan-arbitrase-gunvor",
  "category": "Aksi Korporasi",
  "title": "PGAS Jelaskan ke BEI Dampak Putusan Arbitrase [Gunvor]",
  "deck": "PGN merespons permintaan penjelasan Bursa soal putusan sebagian LCIA atas kontrak dengan Gunvor dan rencana penyampaian laporan keuangan paruh tahun 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGAS",
   "arbitrase",
   "LCIA",
   "Gunvor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fd383773ef_33480fc75b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "doid-dampak-karhutla-ke-operasional-buma-tak-material",
  "category": "Aksi Korporasi",
  "title": "DOID: Dampak Karhutla ke Operasional BUMA [Tak Material]",
  "deck": "Anak usaha DOID, BUMA, menjawab permintaan penjelasan BEI dan menyatakan kabut asap Karhutla di Kalimantan hanya mengganggu jarak pandang, tidak berdampak ke produksi maupun pendapatan.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOID",
   "Karhutla",
   "BUMA",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2dca6fcad5_edd31cc219.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brif-tetapkan-ulang-komite-audit-efektif-15-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BRIF tetapkan ulang [komite audit], efektif 15 Oktober 2026",
  "deck": "PT BRI Multifinance Indonesia (BRIF) memperbarui susunan komite audit efektif 15 Oktober 2026 lewat SK Direksi baru.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIF",
   "komite audit",
   "tata kelola perusahaan",
   "BRI Multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/87b8170868_43e5b2fe1e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dssa-siapkan-buyback-saham-hingga-rp1-triliun",
  "category": "Aksi Korporasi",
  "title": "DSSA Siapkan [Buyback] Saham hingga Rp1 Triliun",
  "deck": "Dian Swastatika Sentosa berencana membeli kembali sahamnya senilai hingga Rp1 triliun selama tiga bulan, mulai 19 Oktober 2026 sampai 18 Januari 2027.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSSA",
   "buyback saham",
   "Dian Swastatika Sentosa",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/46d1c50b74_199564f0a1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-resmi-dibuka-dari-suspensi-tetap-di-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "MKNT Resmi Dibuka dari Suspensi, Tetap di [Pemantauan Khusus]",
  "deck": "Bursa mencabut suspensi saham MKNT mulai Senin, 19 Oktober 2026, setelah terhenti sejak Juli 2024, namun perdagangan tetap terbatas di Papan Pemantauan Khusus.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "suspensi saham",
   "BEI",
   "Papan Pemantauan Khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/03d2b61a5e_927e62e215.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bren-siapkan-buyback-saham-senilai-rp1-triliun",
  "category": "Aksi Korporasi",
  "title": "BREN Siapkan Buyback Saham Senilai [Rp1 Triliun]",
  "deck": "Barito Renewables Energy mengalokasikan dana hingga Rp1 triliun untuk membeli kembali sahamnya sendiri mulai 19 Oktober hingga 31 Desember 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BREN",
   "buyback saham",
   "Barito Renewables Energy",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ad979f49cd_c76382c743.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cuan-alokasikan-rp500-miliar-untuk-buyback-saham",
  "category": "Aksi Korporasi",
  "title": "CUAN Alokasikan [Rp500 Miliar] untuk Buyback Saham",
  "deck": "PT Petrindo Jaya Kreasi Tbk (CUAN) akan membeli kembali sahamnya senilai maksimal Rp500 miliar pada 19 Oktober hingga 31 Desember 2026, memanfaatkan aturan OJK soal kondisi pasar yang bergejolak.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CUAN",
   "buyback saham",
   "Petrindo Jaya Kreasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2aeeaa508_8d5bd4bf44.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trim-lunasi-obligasi-rp100-miliar-yang-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "TRIM [Lunasi] Obligasi Rp100 Miliar yang Jatuh Tempo",
  "deck": "Trimegah Sekuritas melunasi pokok Obligasi II Tahap II Seri A senilai Rp100 miliar yang jatuh tempo 18 Oktober 2026 melalui KSEI.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIM",
   "obligasi",
   "pelunasan utang",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fd48777ed1_f08d7c8995.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scma-bagi-dividen-interim-rp8-4-saham-total-rp533-4-miliar",
  "category": "Aksi Korporasi",
  "title": "SCMA bagi [dividen] interim Rp8,4/saham, total Rp533,4 miliar",
  "deck": "Direksi SCMA menetapkan dividen interim Rp8,4 per saham, total Rp533,4 miliar, dengan recording date 29 Oktober dan pembayaran 18 November 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCMA",
   "dividen interim",
   "Surya Citra Media",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a947027224_b8860e2742.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-siapkan-buyback-saham-hingga-rp1-triliun",
  "category": "Aksi Korporasi",
  "title": "TPIA Siapkan [Buyback] Saham hingga Rp1 Triliun",
  "deck": "Chandra Asri Pacific berencana membeli kembali sahamnya sendiri senilai maksimal Rp1 triliun, setara 0,92 persen saham beredar, mulai 20 Oktober 2026.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "buyback saham",
   "Chandra Asri Pacific",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/29a8ab134d_50127c015e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brpt-siapkan-rp1-triliun-untuk-buyback-saham",
  "category": "Aksi Korporasi",
  "title": "BRPT Siapkan Rp1 Triliun untuk [Buyback] Saham",
  "deck": "Barito Pacific akan membeli kembali sahamnya senilai maksimal Rp1 triliun hingga akhir tahun, memakai aturan OJK untuk pasar yang sedang berfluktuasi.",
  "date": "19 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRPT",
   "buyback saham",
   "Barito Pacific",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/346ff0c9e3_b58dca7152.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpdp-dorong-umkm-perkebunan-masuk-pasar-digital",
  "category": "UMKM",
  "title": "BPDP Dorong UMKM Perkebunan Masuk Pasar [Digital]",
  "deck": "BPDP menggelar podcast UMKM Perkebunan di Roemah UMKM SMESCO untuk mendorong pelaku usaha sawit, kelapa, dan kakao membangun merek dan menembus pasar digital.",
  "date": "18 Oktober 2026",
  "image": "assets/img/bpdp-dorong-umkm-perkebunan-masuk-pasar-digital.jpg",
  "imageV": "mve7be80",
  "tags": [
   "UMKM",
   "perkebunan",
   "BPDP",
   "digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473742-dari-kebun-ke-pasar-digital-rahasia-umkm-perkebunan-tembus-omzet-maksimal"
 },
 {
  "slug": "transaksi-tei-2026-tembus-us-22-94-miliar-lampaui-target",
  "category": "Bisnis",
  "title": "Transaksi TEI 2026 Tembus US$[22,94] Miliar, Lampaui Target",
  "deck": "Pameran dagang tahunan ini mencatat potensi transaksi US$22,94 miliar dari 426 nota kesepahaman, melampaui target pemerintah sebesar US$17,5 miliar selama lima hari penyelenggaraan.",
  "date": "18 Oktober 2026",
  "image": "assets/img/transaksi-tei-2026-tembus-us-22-94-miliar-lampaui-target.jpg",
  "imageV": "mvdyualn",
  "tags": [
   "TEI 2026",
   "Kemendag",
   "Ekspor",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-resmi-tutup-tei-ke-41-potensi-transaksi-capai-usd-2294-miliar",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "isef-2026-ditutup-komitmen-syariah-capai-rp3-16-triliun",
  "category": "Perbankan",
  "title": "ISEF 2026 Ditutup, Komitmen Syariah Capai [Rp3,16] Triliun",
  "deck": "Bank Indonesia menutup ISEF 2026 dengan mencatat komitmen pembiayaan dan perdagangan syariah senilai Rp3,16 triliun serta transaksi produk halal Rp13,85 miliar selama lima hari acara.",
  "date": "18 Oktober 2026",
  "image": "assets/img/brankas-bank.jpg",
  "tags": [
   "ISEF 2026",
   "ekonomi syariah",
   "Bank Indonesia",
   "industri halal"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822926.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pege-direksi-asing-tambah-saham-hak-suara-ke-5-44",
  "category": "Aksi Korporasi",
  "title": "PEGE: Direksi Asing [Tambah] Saham, Hak Suara ke 5,44%",
  "deck": "Direksi PT Panca Global Kapital Tbk (PEGE), Optimus Vision Global Pte Ltd, membeli 8,06 juta saham pada 16 Oktober 2026, menaikkan hak suaranya dari 5,23 persen menjadi 5,44 persen.",
  "date": "18 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEGE",
   "kepemilikan saham",
   "direksi",
   "pembelian saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18102026-5591-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-andalkan-organisasi-dunia-untuk-ekspor-kelapa-dan-lada",
  "category": "Industri",
  "title": "RI Andalkan Organisasi Dunia untuk [Ekspor] Kelapa dan Lada",
  "deck": "Kemendag menyebut keanggotaan Indonesia di organisasi kelapa dan lada dunia membuka akses data pasar dan peluang hilirisasi bagi petani serta eksportir.",
  "date": "18 Oktober 2026",
  "image": "assets/img/ri-andalkan-organisasi-dunia-untuk-ekspor-kelapa-dan-lada.jpg",
  "imageV": "mvdsc30x",
  "tags": [
   "ekspor kelapa",
   "ekspor lada",
   "ICC",
   "IPC"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/sinergi-dengan-organisasi-komoditas-global-kemendag-terus-perkuat-daya-saing-kelapa-dan-lada",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "umkm-kombucha-papua-raih-penghargaan-di-pangan-nusa-expo-2026",
  "category": "UMKM",
  "title": "UMKM Kombucha Papua Raih [Penghargaan] di Pangan Nusa Expo 2026",
  "deck": "UMKM kombucha asal Jayapura, Ruma Papua, menang kategori minuman kemasan di UKM Pangan Award 2026 dengan 12 varian rasa berbahan lokal Papua, setelah mengantongi izin BPOM dan sertifikasi halal.",
  "date": "18 Oktober 2026",
  "image": "assets/img/umkm-kombucha-papua-raih-penghargaan-di-pangan-nusa-expo-2026.jpg",
  "imageV": "mvdsc7h6",
  "tags": [
   "UMKM",
   "Papua",
   "Kombucha",
   "Pangan Nusa Expo"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/seruput-perlahan-kenali-rasa-kisah-kombucha-ruma-papua",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kemendag-pacu-pemanfaatan-25-perjanjian-dagang-ri",
  "category": "Bisnis",
  "title": "Kemendag Pacu Pemanfaatan [25] Perjanjian Dagang RI",
  "deck": "Kemendag mendorong UMKM dan pelaku usaha daerah memanfaatkan 25 perjanjian dagang yang sudah berjalan, di tengah surplus dagang US$7,25 miliar hingga Agustus 2026.",
  "date": "18 Oktober 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "perjanjian dagang",
   "ekspor",
   "UMKM",
   "Trade Expo Indonesia"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/diseminasikan-hasil-analisis-kemendag-dorong-pemanfataan-perjanjian-perdagangan-internasional",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-farmasi-seafood-ri-dibidik-ke-pasar-asean-plus",
  "category": "Global",
  "title": "Ekspor Farmasi-Seafood RI Dibidik ke Pasar [ASEAN] Plus",
  "deck": "Kemendag mengajak pelaku usaha, termasuk UMKM, memanfaatkan delapan skema perjanjian dagang ASEAN dan ASEAN Plus untuk ekspor farmasi, makanan olahan, dan seafood ke Asia Pasifik.",
  "date": "18 Oktober 2026",
  "image": "assets/img/ekspor-farmasi-seafood-ri-dibidik-ke-pasar-asean-plus.jpg",
  "imageV": "mvda57y0",
  "tags": [
   "ekspor",
   "ASEAN Plus",
   "RCEP",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-ajak-pelaku-usaha-optimalkan-perjanjian-dagang-asean-dan-asean-plus-untuk-tembus-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "transaksi-umkm-di-pangan-nusa-expo-tembus-rp44-miliar",
  "category": "UMKM",
  "title": "Transaksi UMKM di Pangan Nusa Expo Tembus [Rp44 Miliar]",
  "deck": "Business matching Pangan Nusa Expo 2026 mencatat potensi transaksi Rp44 miliar hingga hari ketiga, naik 17 persen dari tahun lalu, menurut Kemendag.",
  "date": "18 Oktober 2026",
  "image": "assets/img/kopi-roasting.jpg",
  "tags": [
   "UMKM",
   "Kemendag",
   "Pangan Nusa Expo",
   "Ritel"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/business-matching-pangan-nusa-expo-2026-bukukan-potensi-transaksi-rp44-miliar-pada-hari-ketiga",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "baznas-beri-penghargaan-ke-koperasi-angkasa-malaysia",
  "category": "Global",
  "title": "BAZNAS Beri [Penghargaan] ke Koperasi ANGKASA Malaysia",
  "deck": "BAZNAS menobatkan ANGKASA, koperasi nasional Malaysia, sebagai mitra internasional terbaik pendukung zakat di Grand BAZNAS Awards 2026, Jakarta.",
  "date": "17 Oktober 2026",
  "image": "assets/img/baznas-beri-penghargaan-ke-koperasi-angkasa-malaysia.jpg",
  "imageV": "mvcrvwuj",
  "tags": [
   "BAZNAS",
   "ANGKASA",
   "Grand BAZNAS Awards 2026",
   "Zakat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473592-sinergi-zakat-antarnegara-baznas-beri-penghargaan-khusus-untuk-koperasi-kebangsaan-malaysia-angkasa"
 },
 {
  "slug": "transaksi-emas-digital-melonjak-641-persen-dalam-setahun",
  "category": "Bisnis",
  "title": "Transaksi Emas Digital [Melonjak] 641 Persen dalam Setahun",
  "deck": "Nilai transaksi emas fisik digital RI tumbuh 641,1 persen jadi Rp299,49 triliun dalam delapan bulan, sejalan dengan aturan baru soal keamanan sistem dan anti pencucian uang.",
  "date": "17 Oktober 2026",
  "image": "assets/img/transaksi-emas-digital-melonjak-641-persen-dalam-setahun.jpg",
  "imageV": "mvf0u33m",
  "tags": [
   "emas digital",
   "Bappebti",
   "investasi",
   "Kementerian Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/transaksi-emas-digital-kian-berkilau-bappebti-perkuat-literasi-masyarakat",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "eksportir-ke-eropa-harus-penuhi-eudr-sebelum-cepa-diteken",
  "category": "Industri",
  "title": "Eksportir ke Eropa Harus Penuhi [EUDR] sebelum CEPA Diteken",
  "deck": "Kemendag minta eksportir kopi, karet, sawit, kakao, dan produk kayu segera penuhi aturan antideforestasi Uni Eropa sebelum I-EU CEPA ditandatangani akhir 2026.",
  "date": "17 Oktober 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "I-EU CEPA",
   "EUDR",
   "ekspor",
   "Uni Eropa"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/peluang-ekspor-produk-pertanian-terbuka-lebar-kemendag-dorong-eksportir-bersiap-manfaatkan-i-eu-cepa",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kur-nelayan-desa-awang-tembus-rp13-6-miliar",
  "category": "UMKM",
  "title": "KUR Nelayan Desa Awang Tembus [Rp13,6 Miliar]",
  "deck": "BSI menyalurkan KUR Rp13,6 miliar untuk 160 nelayan di Desa Awang, Lombok Tengah, sementara puluhan pembudidaya lobster di sana belum semuanya tersentuh kredit ini.",
  "date": "17 Oktober 2026",
  "image": "assets/img/gula-merah.jpg",
  "tags": [
   "KUR",
   "Nelayan",
   "BSI",
   "Lombok Tengah"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7164/program-kur-dukung-usaha-nelayan-dan-budidaya-lobster-kemenko-perekonomian-perkuat-sinergi-pembiayaan-di-desa-awang",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "paviliun-kawasan-berikat-tei-catat-minat-rp5-triliun",
  "category": "Industri",
  "title": "Paviliun Kawasan Berikat TEI Catat Minat [Rp5 Triliun]",
  "deck": "Enam belas perusahaan menyatakan minat memanfaatkan status Kawasan Berikat dan Pusat Logistik Berikat di Trade Expo Indonesia 2026, dengan potensi investasi sekitar Rp5 triliun menurut Kemendag.",
  "date": "17 Oktober 2026",
  "image": "assets/img/jalur-perakitan.jpg",
  "tags": [
   "Kawasan Berikat",
   "Trade Expo Indonesia",
   "Ekspor Manufaktur",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/paviliun-kawasan-berikat-di-tei-2026-catat-potensi-transaksi-lebih-dari-rp5-triliun",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "target-pertumbuhan-6-2027-bersandar-pada-ekonomi-digital",
  "category": "Makroekonomi",
  "title": "Target Pertumbuhan [6%] 2027 Bersandar pada Ekonomi Digital",
  "deck": "Pemerintah menjadikan ekonomi digital tumpuan utama mengejar pertumbuhan 6 persen pada 2027, lewat QRIS, pusat data, dan perjanjian ekonomi digital ASEAN.",
  "date": "17 Oktober 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "ekonomi digital",
   "pertumbuhan ekonomi",
   "ASEAN DEFA",
   "pusat data"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7163/menko-airlangga-perkuat-ekonomi-digital-sebagai-andalan-pertumbuhan-ekonomi-6-pada-2027",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kantor-dagang-ri-bantu-umkm-cari-pembeli-di-as-dan-cili",
  "category": "Bisnis",
  "title": "Kantor Dagang RI Bantu [UMKM] Cari Pembeli di AS dan Cili",
  "deck": "Kemendag menggelar konsultasi bisnis bersama perwakilan dagang RI dari 33 negara di sela Trade Expo Indonesia, membantu eksportir menjajaki pasar Amerika Serikat dan Cili.",
  "date": "17 Oktober 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perluas-akses-informasi-dan-peluang-pasar-ekspor-melalui-konsultasi-bisnis",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kemendag-klaim-amankan-rp8-triliun-ekspor-dari-hambatan-dagang",
  "category": "UMKM",
  "title": "Kemendag Klaim Amankan [Rp8 Triliun] Ekspor dari Hambatan Dagang",
  "deck": "Kemendag mengklaim mengamankan potensi penerimaan ekspor lebih dari Rp8 triliun dalam dua tahun lewat penanganan 60 kasus hambatan dagang, dibahas dalam seminar UMKM di Trade Expo Indonesia.",
  "date": "17 Oktober 2026",
  "image": "assets/img/kemendag-klaim-amankan-rp8-triliun-ekspor-dari-hambatan-dagang.jpg",
  "imageV": "mvc9o2r5",
  "tags": [
   "Kemendag",
   "Ekspor",
   "UMKM",
   "Hambatan Dagang"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kolaborasi-pemerintah-dan-dunia-usaha-atasi-hambatan-perdagangan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "skema-bagi-hasil-ojol-92-8-berisiko-picu-efek-domino",
  "category": "Ketenagakerjaan",
  "title": "Skema Bagi Hasil Ojol 92:8 Berisiko Picu Efek [Domino]",
  "deck": "Analis menilai skema bagi hasil 92 persen untuk pengemudi dan 8 persen aplikator berisiko memicu efek domino, dari pemangkasan tarif dasar hingga potensi pendapatan pengemudi yang justru tidak naik.",
  "date": "17 Oktober 2026",
  "image": "assets/img/skema-bagi-hasil-ojol-92-8-berisiko-picu-efek-domino.jpg",
  "imageV": "mvc3qy3g",
  "tags": [
   "ojol",
   "ojek online",
   "bagi hasil",
   "efek domino"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473507-kebijakan-skema-ojol-miliki-efek-domino-pengemudi-dinilai-belum-tentu-naik-pendapatan"
 },
 {
  "slug": "gula-lontar-bali-angkat-pendapatan-petani-ke-rp3-juta-bulan",
  "category": "UMKM",
  "title": "Gula Lontar Bali Angkat Pendapatan Petani ke [Rp3 Juta]/Bulan",
  "deck": "Tarunira, usaha sosial pengolah gula lontar di Karangasem, Bali, memamerkan produknya di Trade Expo Indonesia 2026 sembari menjajaki peluang ekspor ke Jepang, Eropa, dan Australia.",
  "date": "17 Oktober 2026",
  "image": "assets/img/teknologi-logistik.jpg",
  "tags": [
   "gula lontar",
   "UMKM",
   "Trade Expo Indonesia",
   "ekspor"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bukan-sekadar-manis-gula-lontar-bali-jadi-mesin-penggerak-desa",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekonomi-syariah-tumbuh-6-2-bi-gaet-wirausaha-muda",
  "category": "UMKM",
  "title": "Ekonomi [Syariah] Tumbuh 6,2%, BI Gaet Wirausaha Muda",
  "deck": "Bank Indonesia membuka forum kewirausahaan syariah untuk anak muda di Jakarta, seiring klaim rantai nilai halal tumbuh 6,21 persen pada 2025, melampaui pertumbuhan ekonomi nasional.",
  "date": "17 Oktober 2026",
  "image": "assets/img/pengrajin-rotan.jpg",
  "tags": [
   "ekonomi syariah",
   "ISEF 2026",
   "UMKM",
   "GenBI"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "baja-ri-bersaing-rebut-kuota-ekspor-ke-inggris-dan-eropa",
  "category": "Industri",
  "title": "Baja RI Bersaing Rebut Kuota Ekspor ke Inggris dan [Eropa]",
  "deck": "Uni Eropa dan Inggris mengubah tarif dan kuota impor baja, memaksa eksportir Indonesia bersaing lebih ketat sembari pemerintah merundingkan kuota khusus dan tarif nol persen.",
  "date": "17 Oktober 2026",
  "image": "assets/img/baja-ri-bersaing-rebut-kuota-ekspor-ke-inggris-dan-eropa.jpg",
  "imageV": "mvbvtrvo",
  "tags": [
   "ekspor baja",
   "tarif Uni Eropa",
   "Inggris",
   "kuota impor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perkuat-strategi-amankan-pasar-ekspor-baja-ke-uni-eropa-dan-inggris",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bi-soroti-peran-perempuan-dalam-ekosistem-halal-di-isef-2026",
  "category": "UMKM",
  "title": "BI Soroti Peran [Perempuan] dalam Ekosistem Halal di ISEF 2026",
  "deck": "Konferensi dalam rangkaian ISEF 2026 menyoroti peran pelaku usaha perempuan di ekosistem industri halal, sektor yang disebut menyumbang 27 persen produk domestik bruto Indonesia.",
  "date": "17 Oktober 2026",
  "image": "assets/img/kedai-kopi-kecil.jpg",
  "tags": [
   "ISEF 2026",
   "Bank Indonesia",
   "ekonomi syariah",
   "UMKM perempuan"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "harga-emas-antam-naik-ke-rp2-572-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] ke Rp2.572.000 per Gram",
  "deck": "Harga emas Antam hari ini naik Rp7.000 menjadi Rp2.572.000 per gram, sementara harga buyback ikut naik ke Rp2.387.000 per gram.",
  "date": "17 Oktober 2026",
  "image": "assets/img/harga-emas-antam-naik-ke-rp2-572-000-per-gram.jpg",
  "imageV": "mvbvtspm",
  "tags": [
   "emas",
   "harga emas antam",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473476-saatnya-jual-harga-emas-antam-hari-ini-17-oktober-2026-melonjak-ke-rp2572000-per-gram"
 },
 {
  "slug": "dagang-ri-rusia-naik-21-6-fta-eurasia-ditarget-rampung-2026",
  "category": "Global",
  "title": "Dagang RI-Rusia Naik 21,6%, FTA Eurasia Ditarget [Rampung] 2026",
  "deck": "Menko Airlangga dan Deputi PM Rusia Denis Manturov membahas penguatan perdagangan bilateral yang naik 21,6 persen pada 2025, serta target ratifikasi FTA Indonesia-EAEU sebelum akhir 2026.",
  "date": "17 Oktober 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "Rusia",
   "Perdagangan",
   "FTA Eurasia",
   "Airlangga Hartarto"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7162/terima-kunjungan-deputi-pertama-perdana-menteri-rusia-menko-airlangga-bahas-peluang-perdagangan-dan-kerja-sama-ekonomi-bilateral",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "esdm-resmikan-kilang-lpg-cilamaya-kapasitas-160-ton-hari",
  "category": "Energi",
  "title": "ESDM Resmikan Kilang LPG Cilamaya, Kapasitas [160] Ton/Hari",
  "deck": "Kilang LPG Cilamaya di Karawang resmi beroperasi dengan kapasitas 160 ton per hari, menambah pasokan domestik di tengah tingginya impor LPG nasional.",
  "date": "17 Oktober 2026",
  "image": "assets/img/esdm-resmikan-kilang-lpg-cilamaya-kapasitas-160-ton-hari.jpg",
  "imageV": "mvbhu4ao",
  "tags": [
   "LPG",
   "Kilang Gas",
   "ESDM",
   "Impor Energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473448-hadapi-geopolitik-global-menteri-esdm-resmikan-kilang-lpg-cilamaya-berkapasitas-160-ton-per-hari"
 },
 {
  "slug": "stok-bbm-nasional-aman-distribusi-ke-bali-diperkuat",
  "category": "Energi",
  "title": "Stok BBM Nasional Aman, Distribusi ke [Bali] Diperkuat",
  "deck": "Pemerintah memastikan stok BBM nasional aman di level 16-18 hari, namun menambah kapal untuk perbaiki distribusi ke Bali dan wilayah kepulauan.",
  "date": "16 Oktober 2026",
  "image": "assets/img/stok-bbm-nasional-aman-distribusi-ke-bali-diperkuat.jpg",
  "imageV": "mvbbwb0m",
  "tags": [
   "BBM",
   "Bahlil Lahadalia",
   "Distribusi Energi",
   "Bali"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473435-stok-bbm-nasional-dipastikan-aman-pemerintah-fokus-perbaiki-jalur-pengiriman"
 },
 {
  "slug": "kemendag-targetkan-4-juta-umkm-siap-ekspor-dalam-5-tahun",
  "category": "UMKM",
  "title": "Kemendag Targetkan 4 Juta UMKM Siap [Ekspor] dalam 5 Tahun",
  "deck": "Kemendag menargetkan 4 juta UMKM siap ekspor dalam lima tahun lewat program Campuspreneur yang kini melibatkan 27 perguruan tinggi, termasuk MoU baru dengan UIN Jakarta dan Universitas Presiden.",
  "date": "16 Oktober 2026",
  "image": "assets/img/pedagang-sayur-keliling.jpg",
  "tags": [
   "UMKM",
   "ekspor",
   "Kemendag",
   "Campuspreneur"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-dorong-4-juta-umkm-siap-ekspor-melalui-program-campuspreneur",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pegadaian-luncurkan-atm-emas-bisa-cetak-instan",
  "category": "BUMN",
  "title": "Pegadaian Luncurkan ATM Emas, Bisa [Cetak] Instan",
  "deck": "Pegadaian meluncurkan ATM Emas yang terhubung ke aplikasi Tring!, memungkinkan nasabah mengambil emas fisik 1-100 gram secara instan tanpa menunggu proses cetak di outlet.",
  "date": "16 Oktober 2026",
  "image": "assets/img/pegadaian-luncurkan-atm-emas-bisa-cetak-instan.jpg",
  "imageV": "mvbbwbhd",
  "tags": [
   "Pegadaian",
   "ATM Emas",
   "Tring!",
   "emas digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473432-mudahnya-mengubah-saldo-emas-digital-menjadi-fisik-lewat-atm"
 },
 {
  "slug": "bni-raih-peringkat-4-layanan-terbaik-bumn-2026",
  "category": "Perbankan",
  "title": "BNI Raih Peringkat [4] Layanan Terbaik BUMN 2026",
  "deck": "BNI menempati posisi keempat kategori Top 10 BUMN Layanan Terbaik di Danantara Indonesia CX100 Award 2026, ditopang pertumbuhan transaksi digital wondr dan BNIdirect.",
  "date": "16 Oktober 2026",
  "image": "assets/img/bni-raih-peringkat-4-layanan-terbaik-bumn-2026.jpg",
  "imageV": "mvb77awn",
  "tags": [
   "BNI",
   "Danantara Indonesia",
   "CX100 Award",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473420-bni-raih-peringkat-4-bumn-layanan-terbaik-di-danantara-indonesia-cx100-award-2026"
 },
 {
  "slug": "enzo-tegaskan-tak-ada-informasi-material-soal-volatilitas",
  "category": "Aksi Korporasi",
  "title": "ENZO Tegaskan Tak Ada [Informasi Material] Soal Volatilitas",
  "deck": "Merespons permintaan Bursa Efek Indonesia, ENZO menyatakan tidak ada informasi material, aksi korporasi, atau rencana pemegang saham pengendali yang mendasari pergerakan harga sahamnya.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENZO",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cf06a3bfe1_dcc8a80fd1.pdf",
  "sourceLabel": "IDX"
 }
];
