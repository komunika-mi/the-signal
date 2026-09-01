// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "tmpo-jelaskan-saham-melonjak-pendapatan-turun-rugi-menyempit",
  "category": "Aksi Korporasi",
  "title": "TMPO Jelaskan Saham Melonjak, Pendapatan Turun Rugi [Menyempit]",
  "deck": "Setelah sahamnya disetop bursa akibat lonjakan harga, Tempo Inti Media memaparkan kinerja semester I 2026: pendapatan turun 3,96 persen tapi rugi bersih menyempit 7,47 persen jadi Rp6,58 miliar.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Tempo Inti Media",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/810af7b132_fca403b369.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psab-lunasi-sebagian-besar-utang-liabilitas-turun-45",
  "category": "Aksi Korporasi",
  "title": "PSAB Lunasi Sebagian Besar Utang, Liabilitas Turun [45%]",
  "deck": "Surat penjelasan J Resources Asia Pasifik ke BEI mengungkap total liabilitas turun 45 persen dan total aset turun 22 persen per Juni 2026, dipicu pelunasan utang dan pelepasan anak usaha.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "J Resources Asia Pasifik",
   "laporan keuangan",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260901110410-63247-0/FinancialStatement-2026-II-PSAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-kuak-penggelapan-gaji-divisi-sdm-rupslb-copot-direksi",
  "category": "Aksi Korporasi",
  "title": "ASBI Kuak [Penggelapan] Gaji Divisi SDM, RUPSLB Copot Direksi",
  "deck": "ASBI ungkap skema penggelapan gaji oleh divisi SDM senilai sekitar Rp400 juta per bulan selama 2,5 tahun, lapor polisi dan OJK, RUPSLB 30 September ganti direksi.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "penggelapan",
   "asuransi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6f6edd8ba1_501b867691.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sipd-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "SIPD Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham Sreeya Sewu Indonesia. Perseroan menyatakan tidak ada informasi material yang belum diungkapkan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIPD",
   "Sreeya Sewu Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7e567a4864_f6761b754f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-rampungkan-emisi-obligasi-rp3-5-triliun-dan-usd13-76-juta",
  "category": "Aksi Korporasi",
  "title": "INKP Rampungkan Emisi [Obligasi] Rp3,5 Triliun dan USD13,76 Juta",
  "deck": "Indah Kiat Pulp & Paper menuntaskan penerbitan obligasi, sukuk mudharabah, dan obligasi dolar AS dengan total setara Rp3,5 triliun ditambah US$13,76 juta, bunga 6,75-10,5 persen per tahun.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fa292f4567_f2313e1046.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-mulai-proyek-gasifikasi-batubara-jadi-metanol-di-kaltim",
  "category": "Energi",
  "title": "ESDM Mulai Proyek [Gasifikasi] Batubara Jadi Metanol di Kaltim",
  "deck": "Proyek gasifikasi batubara di Kutai Timur ditargetkan hasilkan 2 juta ton metanol per tahun untuk menekan impor yang tahun lalu mencapai Rp7,1 triliun.",
  "date": "1 September 2026",
  "image": "assets/img/esdm-mulai-proyek-gasifikasi-batubara-jadi-metanol-di-kaltim.jpg",
  "imageV": "mths8emx",
  "tags": [
   "gasifikasi batubara",
   "metanol",
   "Kutai Timur",
   "hilirisasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/buka-jalan-hilirisasi-di-kutai-timur-wamen-esdm-resmikan-proyek-gasifikasi-batubara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "harga-patokan-ekspor-emas-naik-7-87-persen-per-september",
  "category": "Industri",
  "title": "Harga Patokan Ekspor Emas [Naik] 7,87 Persen per September",
  "deck": "Kementerian Perdagangan menaikkan Harga Patokan Ekspor emas 7,87 persen menjadi US$142.154,10 per kilogram untuk periode 1-14 September 2026, mengikuti kenaikan harga emas dunia.",
  "date": "1 September 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "emas",
   "HPE",
   "Kemendag",
   "bea keluar"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/permintaan-emas-naik-kemendag-tetapkan-kenaikan-hpe-emas-di-periode-pertama-september-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pertamax-turbo-dan-dex-series-naik-mulai-1-september",
  "category": "Energi",
  "title": "Pertamax Turbo dan Dex Series [Naik] Mulai 1 September",
  "deck": "Pertamina menaikkan harga Pertamax Turbo, Pertamina Dex, dan Dexlite mulai 1 September 2026, sementara Pertamax 92 dan Pertamax Green 95 tetap.",
  "date": "1 September 2026",
  "image": "assets/img/pertamax-turbo-dan-dex-series-naik-mulai-1-september.jpg",
  "imageV": "mths8f6c",
  "tags": [
   "BBM",
   "Pertamina",
   "Harga BBM",
   "Pertamax Turbo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463985-simak-harga-bbm-pertamina-1-september-2026-pertamax-turbo-dan-dex-series-naik"
 },
 {
  "slug": "psab-laba-melonjak-usai-lepas-anak-usaha-aset-turun-22",
  "category": "Aksi Korporasi",
  "title": "PSAB: Laba [Melonjak] Usai Lepas Anak Usaha, Aset Turun 22%",
  "deck": "Laba PSAB melonjak pada semester I 2026 setelah mencatat untung pelepasan anak usaha US$298,6 juta, sementara total aset turun 22 persen dan total utang turun 45 persen dibanding akhir 2025.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "J Resources Asia Pasifik",
   "laporan keuangan",
   "pertambangan emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/375ef73ba5_f4070dfcdb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inci-laba-bersih-melonjak-tiga-kali-lipat-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "INCI: Laba Bersih [Melonjak] Tiga Kali Lipat di Semester I 2026",
  "deck": "Laba bersih Intanwijaya Internasional naik dari Rp8,5 miliar menjadi Rp27,8 miliar pada semester I 2026, meski utang usaha turut melonjak lebih dari 20 persen dipicu kenaikan pembelian bahan baku.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCI",
   "Intanwijaya Internasional",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260901000424-64332-0/FinancialStatement-2026-II-INCI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-catat-ekuitas-negatif-usai-rugi-rp96-6-miliar",
  "category": "Aksi Korporasi",
  "title": "TAMA Catat Ekuitas [Negatif] Usai Rugi Rp96,6 Miliar",
  "deck": "Ekuitas TAMA berbalik negatif Rp61,98 miliar pada semester I 2026 setelah rugi bersih melonjak jadi Rp96,64 miliar, dipicu beban lain-lain dan penurunan nilai properti investasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "laporan keuangan",
   "ekuitas negatif",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dee9c52fc9_ef5836dc7d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smgr-laba-semester-i-2026-melonjak-ke-rp207-miliar",
  "category": "Aksi Korporasi",
  "title": "SMGR: Laba Semester I 2026 [Melonjak] ke Rp207 Miliar",
  "deck": "Laba bersih Semen Indonesia naik lebih dari lima kali lipat menjadi Rp207 miliar pada semester I 2026, sementara utang bank dan obligasi jatuh tempo dilunasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGR",
   "Semen Indonesia",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831224736-64215-0/FinancialStatement-2026-II-SMGR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aisa-tanggapi-bursa-ungkap-nasib-dana-kpk-rp150-miliar",
  "category": "Aksi Korporasi",
  "title": "AISA Tanggapi Bursa, Ungkap Nasib Dana [KPK] Rp150 Miliar",
  "deck": "FKS Food Sejahtera (AISA) menjawab permintaan penjelasan BEI soal kuasi reorganisasi, lonjakan piutang dan persediaan, dana Rp150 miliar di rekening KPK, hingga covenant utang bank sindikasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AISA",
   "FKS Food Sejahtera",
   "Bursa Efek Indonesia",
   "Kuasi Reorganisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/99d015ba68_0498c38a3b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgn-lewat-berandamas-kenalkan-hunian-berbasis-energi",
  "category": "BUMN",
  "title": "PGN Lewat BerandaMAS Kenalkan Hunian Berbasis [Energi]",
  "deck": "PGNMAS, anak usaha PGN, memperkenalkan BerandaMAS, kawasan hunian berbasis gas bumi dan panel surya, dalam Danantara Housing Expo 2026 di PIK 2, Tangerang.",
  "date": "31 Agustus 2026",
  "image": "assets/img/pgn-lewat-berandamas-kenalkan-hunian-berbasis-energi.jpg",
  "imageV": "mthi3zj8",
  "tags": [
   "BerandaMAS",
   "PGN",
   "PGNMAS",
   "Danantara Housing Expo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463967-kenalkan-hunian-berbasis-energi-di-danantara-housing-expo-2026-begini-konsep-smart-home-berandamas"
 },
 {
  "slug": "pertamina-gandeng-ibc-bangun-ekosistem-baterai",
  "category": "Energi",
  "title": "Pertamina Gandeng IBC Bangun Ekosistem [Baterai]",
  "deck": "Pertamina teken MoU dengan IBC untuk menjajaki ekosistem baterai terintegrasi, dari BESS hingga daur ulang baterai, sebagai bagian ekspansi bisnis rendah karbon.",
  "date": "31 Agustus 2026",
  "image": "assets/img/pertamina-gandeng-ibc-bangun-ekosistem-baterai.jpg",
  "imageV": "mthi3zxo",
  "tags": [
   "Pertamina",
   "IBC",
   "baterai",
   "rendah karbon"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463963-perluas-peluang-bisnis-rendah-karbon-pertamina-teken-sinergi-pengembangan-ekosistem-baterai-dengan-pt-ibc"
 },
 {
  "slug": "pam-jaya-pastikan-air-baku-jatiluhur-aman-hingga-2026",
  "category": "BUMN",
  "title": "PAM JAYA Pastikan Air Baku Jatiluhur [Aman] hingga 2026",
  "deck": "PAM JAYA menyatakan pasokan air baku dari Waduk Jatiluhur masih aman untuk Jakarta hingga akhir 2026, meski muka air turun akibat kemarau.",
  "date": "31 Agustus 2026",
  "image": "assets/img/pam-jaya-pastikan-air-baku-jatiluhur-aman-hingga-2026.jpg",
  "imageV": "mthi40cc",
  "tags": [
   "PAM JAYA",
   "Waduk Jatiluhur",
   "air baku",
   "kemarau"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463962-hadapi-musim-kemarau-pam-jaya-pastikan-air-baku-dari-waduk-jatiluhur-aman-hingga-akhir-2026"
 },
 {
  "slug": "scaleocean-rilis-erp-atlas-yang-ikuti-alur-kerja-industri",
  "category": "Teknologi",
  "title": "ScaleOcean Rilis ERP [Atlas] yang Ikuti Alur Kerja Industri",
  "deck": "ScaleOcean meluncurkan Atlas, platform ERP yang dikonfigurasi mengikuti alur kerja masing-masing industri seperti manufaktur, distribusi, logistik, dan konstruksi, alih-alih memakai template baku.",
  "date": "31 Agustus 2026",
  "image": "assets/img/scaleocean-rilis-erp-atlas-yang-ikuti-alur-kerja-industri.jpg",
  "imageV": "mthi40w2",
  "tags": [
   "ScaleOcean",
   "ERP",
   "software bisnis",
   "digitalisasi industri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463961-scaleocean-meluncurkan-scaleocean-atlas-erp-yang-mengikuti-cara-kerja-setiap-industri"
 },
 {
  "slug": "laba-dooh-melonjak-9-5-kali-ditopang-pos-nonoperasional",
  "category": "Aksi Korporasi",
  "title": "Laba DOOH [Melonjak] 9,5 Kali, Ditopang Pos Nonoperasional",
  "deck": "Laba bersih DOOH naik jadi Rp63,3 miliar pada semester I 2026, tapi operasi inti justru merugi Rp12,7 miliar akibat beban pokok pendapatan yang melonjak.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "laporan keuangan",
   "Era Media Sejahtera",
   "pelepasan anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831215015-64248-0/FinancialStatement-2026-II-DOOH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-mulai-ekspor-beras-perdana-ke-malaysia",
  "category": "Makroekonomi",
  "title": "RI Mulai [Ekspor] Beras Perdana ke Malaysia",
  "deck": "Indonesia mengirim 1.000 ton beras premium perdana ke Malaysia, dengan potensi diperluas hingga 200.000 ton senilai Rp3,4 triliun.",
  "date": "31 Agustus 2026",
  "image": "assets/img/ri-mulai-ekspor-beras-perdana-ke-malaysia.jpg",
  "imageV": "mthi41ae",
  "tags": [
   "ekspor beras",
   "Malaysia",
   "ketahanan pangan",
   "Bakom"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463957-ri-ekspor-beras-perdana-ke-malaysia-qodari-beberkan-nilai-fantastis-indonesia-semakin-berdaulat-dalam-pangan"
 },
 {
  "slug": "untr-laba-semester-i-2026-anjlok-91-persen-jadi-rp742-miliar",
  "category": "Aksi Korporasi",
  "title": "UNTR: Laba Semester I 2026 [Anjlok] 91 Persen jadi Rp742 Miliar",
  "deck": "United Tractors membukukan laba bersih Rp742 miliar pada semester I 2026, anjlok dari Rp8,37 triliun tahun lalu akibat kerugian penurunan nilai investasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "laba bersih",
   "laporan keuangan",
   "United Tractors"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831213953-64286-0/FinancialStatement-2026-II-UNTR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smcb-bukukan-laba-naik-4-3-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SMCB Bukukan Laba [Naik] 4,3% di Semester I 2026",
  "deck": "Pendapatan Solusi Bangun Indonesia naik 10,6 persen jadi Rp5,50 triliun di semester I 2026, tapi laba operasi inti tergerus lonjakan beban distribusi 44 persen sebelum bunga bank turun.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "laporan keuangan",
   "industri semen",
   "Solusi Bangun Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831205924-64263-0/FinancialStatement-2026-II-SMCB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kmds-tegaskan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "KMDS Tegaskan Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham KMDS. Manajemen menjawab tidak ada informasi atau rencana korporasi material yang belum diungkapkan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KMDS",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7937a4ea43_66711afe97.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-koreksi-laporan-keuangan-ekuitas-negatif-rp449-juta",
  "category": "Aksi Korporasi",
  "title": "CASH koreksi laporan keuangan, ekuitas [negatif] Rp449 juta",
  "deck": "Cashlez merevisi laporan keuangan audited 2025, mengungkap rugi Rp56,6 miliar dan ekuitas negatif Rp449,5 juta akibat liabilitas yang melonjak 86 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez Worldwide Indonesia",
   "laporan keuangan",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202508/20260831203125-64344-0/FinancialStatement-2025-Tahunan-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obmd-bukukan-rugi-operasi-meski-laba-bersih-masih-positif",
  "category": "Aksi Korporasi",
  "title": "OBMD Bukukan [Rugi Operasi] Meski Laba Bersih Masih Positif",
  "deck": "Penjualan OBM Drilchem anjlok 46 persen pada semester I 2026 hingga usaha intinya merugi, laba bersih hanya tertolong pendapatan di luar usaha utama.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OBMD",
   "laporan keuangan",
   "kinerja emiten",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831203249-64317-0/FinancialStatement-2026-II-OBMD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-direktur-baru-efektif-presiden-komisaris-tunggu-fpt",
  "category": "Aksi Korporasi",
  "title": "SANF: Direktur Baru Efektif, Presiden Komisaris [Tunggu FPT]",
  "deck": "Perusahaan pembiayaan SANF menegaskan pengangkatan Maria Inawati Bernard sebagai Direktur telah efektif, sementara dua pejabat komisaris masih menunggu kelulusan uji kepatutan OJK.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SANF",
   "pergantian direksi",
   "komisaris",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/270835f938_1f35aedc02.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "summarecon-gelar-festival-kuliner-serentak-di-4-kota",
  "category": "UMKM",
  "title": "Summarecon Gelar Festival Kuliner [Serentak] di 4 Kota",
  "deck": "Summarecon menggelar festival kuliner serentak di Kelapa Gading, Serpong, Bekasi, dan Bandung pada Agustus-September 2026, meneruskan tradisi 22 tahun yang juga jadi ajang bagi pelaku UMKM.",
  "date": "31 Agustus 2026",
  "image": "assets/img/summarecon-gelar-festival-kuliner-serentak-di-4-kota.jpg",
  "imageV": "mthi41p7",
  "tags": [
   "Summarecon",
   "Festival Kuliner",
   "UMKM",
   "Bekasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463944-22-tahun-merawat-rasa-festival-kuliner-summarecon-hadir-serentak-di-empat-kota"
 },
 {
  "slug": "silo-gelar-rupslb-akuisisi-rumah-sakit-senilai-rp6-9-triliun",
  "category": "Aksi Korporasi",
  "title": "SILO Gelar RUPSLB, [Akuisisi] Rumah Sakit Senilai Rp6,9 Triliun",
  "deck": "SILO memanggil RUPSLB 22 September 2026 untuk meminta persetujuan akuisisi rumah sakit senilai hingga Rp9 triliun dan penjaminan aset sebagai jaminan pendanaan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SILO",
   "RUPSLB",
   "akuisisi rumah sakit",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2b6aa49c2f_92876f9bdf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-tunda-rupslb-agendakan-audit-empat-tahun-sekaligus",
  "category": "Aksi Korporasi",
  "title": "POOL Tunda RUPSLB, Agendakan Audit [Empat Tahun] Sekaligus",
  "deck": "Pool Advista Indonesia (POOL) menggeser RUPSLB dari 3 menjadi 22 September 2026, dengan agenda penunjukan akuntan publik untuk mengaudit laporan keuangan empat tahun buku sekaligus, 2023-2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "RUPSLB",
   "audit laporan keuangan",
   "Pool Advista"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/366a2f7e34_13edbdddf7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-tegaskan-tak-ada-informasi-material-di-balik-gejolak-saham",
  "category": "Aksi Korporasi",
  "title": "TOWR Tegaskan Tak Ada [Informasi Material] di Balik Gejolak Saham",
  "deck": "Sarana Menara Nusantara menjawab permintaan penjelasan BEI atas volatilitas transaksi saham TOWR, menyatakan tidak ada informasi material yang belum diungkapkan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a14e65995f_cbc9b8eadd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soho-rombak-direksi-harry-salam-jadi-presiden-direktur",
  "category": "Aksi Korporasi",
  "title": "SOHO Rombak [Direksi], Harry Salam Jadi Presiden Direktur",
  "deck": "RUPSLB SOHO menyetujui Ery Yunasri turun dari Presiden Direktur ke Komisaris, digantikan Harry Salam yang sebelumnya Komisaris Independen, efektif 31 Agustus 2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOHO",
   "Direksi",
   "Komisaris",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/534bf1e89d_47fb92c447.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wbsa-laba-semester-i-anjlok-95-saham-beredar-naik-26",
  "category": "Aksi Korporasi",
  "title": "WBSA: Laba Semester I [Anjlok] 95%, Saham Beredar Naik 26%",
  "deck": "Laba bersih WBSA anjlok 95 persen menjadi Rp1,02 miliar pada semester I 2026 meski pendapatan naik, sementara saham beredar bertambah 26 persen usai penggabungan entitas anak.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WBSA",
   "laporan keuangan",
   "laba bersih",
   "penggabungan usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/63cb3f2c6d_e456a28f84.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-solution-bidik-ekspansi-b2b-ict-ke-asia-pasifik",
  "category": "BUMN",
  "title": "Telkom Solution [Bidik] Ekspansi B2B ICT ke Asia Pasifik",
  "deck": "Telkom Solution memperkuat layanan B2B ICT terintegrasi, dari konektivitas hingga AI, untuk menyasar pelanggan korporat dan memperluas bisnis ke kawasan Asia Pasifik.",
  "date": "31 Agustus 2026",
  "image": "assets/img/telkom-solution-bidik-ekspansi-b2b-ict-ke-asia-pasifik.jpg",
  "imageV": "mthi424e",
  "tags": [
   "Telkom",
   "AI",
   "Teknologi",
   "Enterprise"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463938-telkom-solution-terus-perkuat-b2b-ict-bidik-pertumbuhan-bisnis-enterprise-di-kawasan-asia-pasifik"
 },
 {
  "slug": "meds-jelaskan-ke-bursa-soal-kas-menyusut-67-persen-semester-i",
  "category": "Aksi Korporasi",
  "title": "MEDS jelaskan ke bursa soal [kas] menyusut 67 persen semester I",
  "deck": "Hetzer Medical Indonesia menjawab permintaan penjelasan BEI soal koreksi laporan keuangan kuartal I 2026 dan kas yang turun dari Rp779,02 juta menjadi Rp252,69 juta per Juni 2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "keterbukaan informasi",
   "laporan keuangan",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/137fe4c670_e8c2685589.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smbr-laba-semester-i-2026-anjlok-72-jadi-rp21-2-miliar",
  "category": "Aksi Korporasi",
  "title": "SMBR: Laba Semester I 2026 [Anjlok] 72% Jadi Rp21,2 Miliar",
  "deck": "Laba bersih PT Semen Baturaja turun 72,4 persen menjadi Rp21,2 miliar pada semester I 2026, sementara pendapatan hanya turun 12,2 persen akibat kenaikan beban penjualan dan tekanan margin.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "Semen Baturaja",
   "laporan keuangan",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831182144-64342-0/FinancialStatement-2026-II-SMBR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-turun-tipis-ke-6-509-77-bank-besar-justru-menguat",
  "category": "Pasar Modal",
  "title": "IHSG [Turun] Tipis ke 6.509,77, Bank Besar Justru Menguat",
  "deck": "IHSG ditutup melemah 0,13 persen ke 6.509,77 mengekor bursa Wall Street yang tertekan, tapi saham BBCA, BMRI, dan BBRI justru naik.",
  "date": "31 Agustus 2026",
  "image": "assets/img/ihsg-turun-tipis-ke-6-509-77-bank-besar-justru-menguat.jpg",
  "imageV": "mthi42m8",
  "tags": [
   "IHSG",
   "BBCA",
   "Bursa Saham",
   "Bank Besar"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463905-ihsg-ditutup-merah-di-650977-saham-bank-besar-bergerak-beragam"
 },
 {
  "slug": "telkom-akses-kerahkan-150-teknisi-pulihkan-jaringan-ntt",
  "category": "BUMN",
  "title": "Telkom Akses Kerahkan [150] Teknisi Pulihkan Jaringan NTT",
  "deck": "Pascagempa NTT, Telkom Akses menurunkan lebih dari 150 teknisi dan memulihkan jaringan telekomunikasi penuh dalam tiga hari di tengah medan rawan longsor.",
  "date": "31 Agustus 2026",
  "image": "assets/img/telkom-akses-kerahkan-150-teknisi-pulihkan-jaringan-ntt.jpg",
  "imageV": "mthi430y",
  "tags": [
   "Telkom Akses",
   "TelkomGroup",
   "Gempa NTT",
   "Pemulihan Jaringan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463903-telkom-akses-terjunkan-150-teknisi-untuk-pulihkan-jaringan-pascagempa-ntt-layanan-siaga-24-jam"
 },
 {
  "slug": "bi-dan-singapura-aktifkan-transaksi-rupiah-dolar-singapura",
  "category": "Moneter",
  "title": "BI dan Singapura [Aktifkan] Transaksi Rupiah-Dolar Singapura",
  "deck": "Bank Indonesia dan otoritas moneter Singapura mulai menjalankan skema penyelesaian transaksi bilateral memakai rupiah dan dolar Singapura langsung, mulai 31 Agustus 2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/bi-dan-singapura-aktifkan-transaksi-rupiah-dolar-singapura.jpg",
  "imageV": "mth1cpu4",
  "tags": [
   "Bank Indonesia",
   "MAS Singapura",
   "Transaksi Mata Uang Lokal",
   "Rupiah"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "kejagung-sita-rp401-m-dalam-kasus-korupsi-nikel-cni",
  "category": "Energi",
  "title": "Kejagung [Sita] Rp401 M dalam Kasus Korupsi Nikel CNI",
  "deck": "Penyidik Kejagung memeriksa 116 saksi dan 3 ahli, menyita 143 dokumen, serta mengamankan uang Rp401,65 miliar dalam kasus tata kelola nikel PT CNI.",
  "date": "31 Agustus 2026",
  "image": "assets/img/kejagung-sita-rp401-m-dalam-kasus-korupsi-nikel-cni.jpg",
  "imageV": "mthi447v",
  "tags": [
   "Kejagung",
   "PT CNI",
   "korupsi nikel",
   "Sulawesi Tenggara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463901-kejagung-periksa-116-saksi-dan-3-ahli-di-kasus-dugaan-korupsi-tata-kelola-nikel-pt-cni"
 },
 {
  "slug": "anggaran-kemhan-2027-naik-jadi-rp189-triliun",
  "category": "Makroekonomi",
  "title": "Anggaran Kemhan 2027 Naik Jadi [Rp189 Triliun]",
  "deck": "Komisi I DPR mengungkap anggaran Kementerian Pertahanan untuk 2027 naik menjadi Rp189 triliun, bertambah Rp50 triliun dari pagu indikatif sebelumnya.",
  "date": "31 Agustus 2026",
  "image": "assets/img/anggaran-kemhan-2027-naik-jadi-rp189-triliun.jpg",
  "imageV": "mth1cqi3",
  "tags": [
   "Kemhan",
   "APBN 2027",
   "Anggaran Pertahanan",
   "DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463891-komisi-i-dpr-ungkap-kemhan-dapat-anggaran-rp189-triliun-di-2027"
 },
 {
  "slug": "kejagung-bongkar-dugaan-manipulasi-ekspor-nikel-pt-cni",
  "category": "Industri",
  "title": "Kejagung Bongkar Dugaan [Manipulasi] Ekspor Nikel PT CNI",
  "deck": "Kejaksaan Agung menyita Rp401,65 miliar diduga hasil manipulasi dokumen dan kadar ekspor nikel PT CNI periode 2017-2020.",
  "date": "31 Agustus 2026",
  "image": "assets/img/kejagung-bongkar-dugaan-manipulasi-ekspor-nikel-pt-cni.jpg",
  "imageV": "mth1cqyf",
  "tags": [
   "Kejagung",
   "PT CNI",
   "Ekspor Nikel",
   "Korupsi Tambang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463876-kejagung-ungkap-pt-cni-diduga-manipulasi-dokumen-ekspor-komoditas-nikel"
 },
 {
  "slug": "presiden-prabowo-janji-pinjaman-lunak-ganti-rentenir",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo Janji [Pinjaman Lunak] Ganti Rentenir",
  "deck": "Presiden Prabowo Subianto menjanjikan pinjaman lunak dari sumber daya dalam negeri agar masyarakat tidak lagi bergantung pada rentenir, namun mekanisme dan jadwalnya belum diumumkan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/presiden-prabowo-janji-pinjaman-lunak-ganti-rentenir.jpg",
  "imageV": "mth1crd7",
  "tags": [
   "pinjaman lunak",
   "rentenir",
   "kesejahteraan rakyat",
   "kemiskinan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463868-prabowo-siapkan-pinjaman-lunak-untuk-rakyat-tak-perlu-lagi-berutang-ke-rentenir"
 },
 {
  "slug": "dpr-panggil-menkeu-cs-bahas-target-ekonomi-6-2027",
  "category": "Makroekonomi",
  "title": "DPR Panggil Menkeu Cs Bahas Target Ekonomi [6%] 2027",
  "deck": "DPR memanggil lima pejabat ekonomi kunci untuk membahas sinergi kebijakan menuju target pertumbuhan 6 persen dan investasi Rp1.200 triliun pada 2027.",
  "date": "31 Agustus 2026",
  "image": "assets/img/dpr-panggil-menkeu-cs-bahas-target-ekonomi-6-2027.jpg",
  "imageV": "mth1crsz",
  "tags": [
   "DPR",
   "APBN 2027",
   "pertumbuhan ekonomi",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463851-bos-bos-keuangan-dipanggil-dpr-hari-ini-bahas-target-ekonomi-6-dan-investasi-rp1200-triliun"
 },
 {
  "slug": "danantara-siapkan-rp456-miliar-untuk-proyek-lrt-city",
  "category": "BUMN",
  "title": "Danantara Siapkan [Rp456 Miliar] untuk Proyek LRT City",
  "deck": "Danantara dan Adhi Karya menyusun skema percepatan penyelesaian proyek hunian LRT City yang berdampak pada 2.400 konsumen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/danantara-siapkan-rp456-miliar-untuk-proyek-lrt-city.jpg",
  "imageV": "mth1cs6v",
  "tags": [
   "danantara",
   "lrt city",
   "adhi karya",
   "adcp"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463845-danantara-siapkan-rp456-miliar-proyek-lrt-city-dikebut-demi-2400-konsumen"
 },
 {
  "slug": "dolar-as-kembali-perkasa-yen-dekati-160",
  "category": "Global",
  "title": "Dolar AS Kembali [Perkasa], Yen Dekati 160",
  "deck": "Yen mendekati 160 per dolar dan harga minyak melonjak akibat konflik AS-Iran, sementara peluang kenaikan bunga Fed naik ke 57 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/dolar-as-kembali-perkasa-yen-dekati-160.jpg",
  "imageV": "mth1csm7",
  "tags": [
   "dolar AS",
   "yen jepang",
   "harga minyak",
   "suku bunga Fed"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463828-dolar-as-kembali-jadi-raja-yen-tertekan-dekati-160-dan-harga-minyak-melesat"
 },
 {
  "slug": "harga-emas-pegadaian-antam-termahal-rp2-71-juta-gram",
  "category": "Bisnis",
  "title": "Harga Emas Pegadaian: Antam [Termahal] Rp2,71 Juta/Gram",
  "deck": "Harga emas Antam, UBS, dan Galeri24 di Pegadaian pada Senin (31/8/2026) berkisar Rp2,6 juta per gram, dengan Antam jadi yang termahal dan Galeri24 termurah.",
  "date": "31 Agustus 2026",
  "image": "assets/img/harga-emas-pegadaian-antam-termahal-rp2-71-juta-gram.jpg",
  "imageV": "mtgux8qt",
  "tags": [
   "harga emas",
   "Antam",
   "Galeri24",
   "Pegadaian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463820-harga-emas-pegadaian-senin-31-agustus-2026-antam-ubs-galeri24-lengkap"
 },
 {
  "slug": "rupiah-tembus-rp17-750-usai-the-fed-sinyalkan-kenaikan-bunga",
  "category": "Moneter",
  "title": "Rupiah [Tembus] Rp17.750 usai The Fed Sinyalkan Kenaikan Bunga",
  "deck": "Rupiah dibuka melemah 0,32 persen ke Rp17.750 per dolar AS pada Senin pagi, menyusul penguatan dolar AS setelah Ketua The Fed Kevin Warsh membuka peluang kenaikan suku bunga.",
  "date": "31 Agustus 2026",
  "image": "assets/img/rupiah-kurs.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "The Fed",
   "suku bunga"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463786-rupiah-awali-pekan-di-zona-merah-tembus-rp17750-per-dolar-as"
 },
 {
  "slug": "minyak-dunia-tembus-us-90-usai-as-serang-iran-di-hormuz",
  "category": "Energi",
  "title": "Minyak Dunia [Tembus] US$90 usai AS Serang Iran di Hormuz",
  "deck": "Harga minyak Brent dan WTI melonjak lebih dari 2 persen setelah AS menyerang peluncur Iran di Selat Hormuz, memicu kekhawatiran gangguan pasokan minyak dunia.",
  "date": "31 Agustus 2026",
  "image": "assets/img/minyak-dunia-tembus-us-90-usai-as-serang-iran-di-hormuz.jpg",
  "imageV": "mtgsk6xj",
  "tags": [
   "harga minyak dunia",
   "selat hormuz",
   "serangan as iran",
   "harga minyak brent"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463783-harga-minyak-dunia-mendadak-tembus-us90-serangan-as-ke-iran-bikin-pasar-ketar-ketir"
 },
 {
  "slug": "life-tanggapi-bursa-ungkap-progres-spin-off-unit-syariah-ke-ojk",
  "category": "Aksi Korporasi",
  "title": "LIFE Tanggapi Bursa, Ungkap Progres [Spin-off] Unit Syariah ke OJK",
  "deck": "MSIG Life Insurance Indonesia menyatakan tidak ada informasi material di balik volatilitas sahamnya, namun mengungkap proses pengalihan portofolio unit syariah dan sikap pemegang saham pengendali.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "MSIG Life Insurance",
   "spin-off syariah",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1f17cc6b7e_c944a3305b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-utang-bank-jangka-pendek-melonjak-509-laba-naik-43",
  "category": "Aksi Korporasi",
  "title": "DEWI: Utang Bank [Jangka Pendek] Melonjak 509%, Laba Naik 43%",
  "deck": "Total liabilitas DEWI naik 64,4 persen dalam enam bulan karena utang bank jangka pendek melonjak dan utang jangka panjang lunas, sementara penjualan dan laba naik lebih dari 40 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "laporan keuangan",
   "utang bank",
   "peternakan ayam"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831042919-64274-0/FinancialStatement-2026-II-DEWI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-kaji-bagi-dividen-usai-kuasi-reorganisasi-rampung",
  "category": "Aksi Korporasi",
  "title": "BWPT Kaji Bagi [Dividen] Usai Kuasi Reorganisasi Rampung",
  "deck": "Eagle High Plantations memaparkan hasil public expose insidentil, termasuk rencana dividen, peringkat kredit baru, dan target perluasan kebun plasma hingga 2030.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "dividen",
   "kuasi reorganisasi",
   "kelapa sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8688c1653b_18d856259c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-asii-ajukan-tender-sukarela-beli-saham-rp3-600",
  "category": "Aksi Korporasi",
  "title": "AUTO: ASII Ajukan [Tender Sukarela] Beli Saham Rp3.600",
  "deck": "ASII, pemegang 80% saham Astra Otoparts, menawarkan tender sukarela membeli hingga 238,4 juta saham publik (4,95%) di harga Rp3.600 per saham.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "ASII",
   "tender sukarela",
   "Astra Otoparts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/84f1333bdc_b7d35f61d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsky-laporkan-progres-pemulihan-baru-bayar-utang-13",
  "category": "Aksi Korporasi",
  "title": "JSKY Laporkan Progres Pemulihan, Baru Bayar Utang [13%]",
  "deck": "Sky Energy Indonesia melaporkan progres pemulihan penyebab suspensi ke BEI, termasuk negosiasi akhir skema cessie dengan calon investor dan pembayaran utang homologasi yang baru mencapai 13 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSKY",
   "suspensi saham",
   "PKPU",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3673ee6471_91127fc21c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-tawarkan-obligasi-dan-sukuk-baru-rp3-5-triliun",
  "category": "Aksi Korporasi",
  "title": "INKP Tawarkan Obligasi dan Sukuk Baru [Rp3,5 Triliun]",
  "deck": "Indah Kiat Pulp & Paper merilis rincian penawaran obligasi, sukuk mudharabah, dan obligasi dolar tahap baru dengan total target Rp3,5 triliun plus US$25 juta.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c62198c777_37d63da294.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admf-komisaris-theresia-widjaja-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "ADMF: Komisaris Theresia Widjaja Ajukan [Pengunduran Diri]",
  "deck": "Komisaris ADMF, Theresia Adriana Widjaja, mengajukan pengunduran diri lewat surat tertanggal 28 Agustus 2026. Keputusan final soal jabatannya akan diambil dalam RUPS.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "Komisaris",
   "RUPS",
   "Adira Dinamika Multi Finance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0f3a0fa10c_61783c22cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-ajukan-tender-sukarela-beli-saham-auto-rp858-4-m",
  "category": "Aksi Korporasi",
  "title": "ASII Ajukan [Tender] Sukarela Beli Saham AUTO Rp858,4 M",
  "deck": "ASII mengajukan penawaran tender sukarela untuk membeli hingga 4,947% saham AUTO senilai maksimum Rp858,4 miliar, menambah kepemilikannya menjadi 84,947%.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "AUTO",
   "tender sukarela",
   "Astra Otoparts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/38b75aa4c8_8b716ca046.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "backlog-rumah-turun-ke-12-39-persen-masih-9-29-juta-keluarga",
  "category": "Makroekonomi",
  "title": "Backlog Rumah Turun ke [12,39] Persen, Masih 9,29 Juta Keluarga",
  "deck": "BPS mencatat penurunan angka backlog perumahan pada 2026, tapi 9,29 juta keluarga masih belum punya rumah sendiri dan 18,01 juta keluarga menghuni rumah tak layak.",
  "date": "31 Agustus 2026",
  "image": "assets/img/konstruksi-perumahan.jpg",
  "tags": [
   "backlog perumahan",
   "BPS",
   "rumah layak huni",
   "perumahan"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2651",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "mind-id-dorong-hilirisasi-tambang-untuk-perkuat-ekonomi-ri",
  "category": "Industri",
  "title": "MIND ID Dorong Hilirisasi Tambang untuk [Perkuat] Ekonomi RI",
  "deck": "MIND ID menyebut pengolahan mineral dan batu bara di dalam negeri jadi fondasi penguatan ekonomi nasional, didukung penguasaan sekitar 42 persen cadangan nikel dunia.",
  "date": "30 Agustus 2026",
  "image": "assets/img/mind-id-dorong-hilirisasi-tambang-untuk-perkuat-ekonomi-ri.jpg",
  "imageV": "mtg55uum",
  "tags": [
   "MIND ID",
   "hilirisasi",
   "mineral",
   "batu bara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463719-industrialisasi-pertambangan-jadi-modal-perkuat-ekonomi-nasional-indonesia"
 },
 {
  "slug": "winr-pemegang-saham-lepas-16-25-juta-lembar-saham",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang saham lepas [16,25 juta] lembar saham",
  "deck": "Pemenang Nusantara Internasional menjual 16,25 juta saham WINR pada 21 Agustus 2026, hak suaranya turun tipis dari 49,36% menjadi 49,05%.",
  "date": "30 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "pemegang saham",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-30082026-0878-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpdb-puji-ksp-balo-ta-dampingi-40-kdkmp-di-toraja",
  "category": "UMKM",
  "title": "LPDB Puji KSP Balo'ta, [Dampingi] 40 KDKMP di Toraja",
  "deck": "LPDB Koperasi memuji rekam jejak KSP Balo'ta di Tana Toraja yang tak pernah gagal bayar dan kini mendampingi 40 koperasi desa Merah Putih di wilayah itu.",
  "date": "30 Agustus 2026",
  "image": "assets/img/lpdb-puji-ksp-balo-ta-dampingi-40-kdkmp-di-toraja.jpg",
  "imageV": "mtfwf9ix",
  "tags": [
   "LPDB Koperasi",
   "KSP Balo'ta",
   "Koperasi Merah Putih",
   "Tana Toraja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463695-lpdb-koperasi-apresiasi-ksp-balota-dampingi-40-kdkmp-di-tana-toraja"
 },
 {
  "slug": "rupiah-berpeluang-ke-rp17-900-inflasi-jadi-penentu-pekan-depan",
  "category": "Moneter",
  "title": "Rupiah Berpeluang ke Rp17.900, [Inflasi] Jadi Penentu Pekan Depan",
  "deck": "Rupiah diproyeksi bergerak di rentang Rp17.600 hingga Rp17.900 per dolar AS pekan depan, menanti rilis data inflasi dan neraca perdagangan Juli.",
  "date": "30 Agustus 2026",
  "image": "assets/img/rupiah-berpeluang-ke-rp17-900-inflasi-jadi-penentu-pekan-depan.jpg",
  "imageV": "mtfwfa5y",
  "tags": [
   "rupiah",
   "dolar AS",
   "inflasi",
   "kurs"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463690-rupiah-bisa-tembus-rp17900-per-dolar-as-pekan-depan-inflasi-dan-the-fed-jadi-penentu"
 },
 {
  "slug": "harga-emas-antam-diproyeksi-tertahan-meski-emas-dunia-bergejolak",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam Diproyeksi [Tertahan] Meski Emas Dunia Bergejolak",
  "deck": "Analis memperkirakan emas dunia bergerak antara US$4.262 dan US$4.682 per troy ounce pekan ini, sementara ruang koreksi emas Antam dinilai terbatas.",
  "date": "30 Agustus 2026",
  "image": "assets/img/harga-emas-antam-diproyeksi-tertahan-meski-emas-dunia-bergejolak.jpg",
  "imageV": "mtfwfate",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "kurs rupiah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463683-gonjang-ganjing-harga-emas-dunia-antam-berpotensi-melonjak-ke-rp281-juta-per-gram"
 },
 {
  "slug": "crab-laba-semester-i-turun-53-utang-bank-naik-168",
  "category": "Aksi Korporasi",
  "title": "CRAB: Laba Semester I Turun 53%, [Utang] Bank Naik 168%",
  "deck": "Laba bersih Toba Surimi turun dari Rp8,43 miliar jadi Rp3,94 miliar pada semester I 2026, tertekan beban bunga yang melonjak seiring liabilitas naik 167,91 persen.",
  "date": "30 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "laporan keuangan interim",
   "beban bunga",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260830180329-64318-0/FinancialStatement-2026-II-CRAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ai-bantu-nelayan-cilacap-prediksi-ikan-dan-cuaca",
  "category": "Teknologi",
  "title": "[AI] Bantu Nelayan Cilacap Prediksi Ikan dan Cuaca",
  "deck": "Aplikasi Iwak pakai AI dan data satelit membantu nelayan Cilacap menentukan waktu melaut, menekan kerugian dan menaikkan pendapatan hingga 68 persen.",
  "date": "30 Agustus 2026",
  "image": "assets/img/ai-bantu-nelayan-cilacap-prediksi-ikan-dan-cuaca.jpg",
  "imageV": "mtfwfbge",
  "tags": [
   "AI",
   "nelayan",
   "Pertamina",
   "Desa Energi Berdikari"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463659-ai-bantu-nelayan-cilacap-membaca-laut-sebelum-berlayar-iwak-beri-informasi-cuaca-hingga-titik-ikan"
 },
 {
  "slug": "crab-laba-anjlok-76-utang-bank-melonjak-di-kuartal-i",
  "category": "Aksi Korporasi",
  "title": "CRAB: Laba Anjlok 76%, [Utang] Bank Melonjak di Kuartal I",
  "deck": "Penjualan dan laba CRAB turun tajam pada kuartal I 2026, sementara utang bank jangka pendek melonjak dan laporan disampaikan telat dari tenggatnya.",
  "date": "30 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "laporan keuangan",
   "kuartal I 2026",
   "Toba Surimi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260830141856-64298-0/FinancialStatement-2026-I-CRAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aturan-baru-dhe-sda-berlaku-1-september-ini-kriterianya",
  "category": "Moneter",
  "title": "Aturan [Baru] DHE SDA Berlaku 1 September, Ini Kriterianya",
  "deck": "Pemerintah menetapkan lima negara mitra dan kriteria eksportir tambang yang berhak memakai skema khusus devisa hasil ekspor SDA mulai 1 September 2026.",
  "date": "30 Agustus 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "DHE SDA",
   "Pasal 18A",
   "eksportir tambang",
   "bank devisa"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463543-dhe-sda-berubah-mulai-1-september-ini-5-negara-dan-15-bank-yang-masuk-skema-baru"
 },
 {
  "slug": "indodana-raih-penghargaan-fintech-berkat-kepatuhan-ojk",
  "category": "Teknologi",
  "title": "Indodana Raih [Penghargaan] Fintech Berkat Kepatuhan OJK",
  "deck": "Indodana Fintech meraih predikat perusahaan fintech terbaik di ajang Infobank Award 2026, menegaskan kepatuhan OJK dan manajemen risiko sebagai fondasi pembiayaan digital.",
  "date": "29 Agustus 2026",
  "image": "assets/img/indodana-raih-penghargaan-fintech-berkat-kepatuhan-ojk.jpg",
  "imageV": "mtenhg7j",
  "tags": [
   "fintech lending",
   "Indodana",
   "OJK",
   "manajemen risiko"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463538-indodana-fintech-dorong-pembiayaan-digital-yang-sehat-kepatuhan-ojk-jadi-kunci"
 },
 {
  "slug": "tiket-modinity-warehouse-sale-ludes-dalam-24-jam",
  "category": "Bisnis",
  "title": "Tiket Modinity Warehouse Sale [Ludes] dalam 24 Jam",
  "deck": "Tiket Modinity Warehouse Sale 2026 ludes kurang dari 24 jam. Acara meluas ke Indonesia dan Malaysia dengan batch kunjungan bertambah jadi 11 per hari.",
  "date": "29 Agustus 2026",
  "image": "assets/img/tiket-modinity-warehouse-sale-ludes-dalam-24-jam.jpg",
  "imageV": "mtenhgrc",
  "tags": [
   "warehouse sale",
   "belanja offline",
   "fesyen",
   "Modinity"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463528-gempuran-e-commerce-tak-menyurutkan-belanja-offline-konsumen-kembali-serbu-warehouse-sale"
 },
 {
  "slug": "rupiah-menguat-tekan-dolar-as-ke-rp17-693",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Tekan Dolar AS ke Rp17.693",
  "deck": "Dolar AS melemah 0,29% ke Rp17.693 pada perdagangan Sabtu, meski masih menguat 6,07% terhadap rupiah sepanjang 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/gedung-bi.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "kurs rupiah",
   "nilai tukar"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463480-rupiah-balik-menekan-dolar-as-mata-uang-paman-sam-turun-ke-rp17693"
 },
 {
  "slug": "kisah-astuti-nasabah-mekaar-ubah-jamur-jadi-camilan",
  "category": "UMKM",
  "title": "Kisah Astuti, Nasabah Mekaar Ubah Jamur Jadi [Camilan]",
  "deck": "Astuti, nasabah pembiayaan ultra mikro PNM Mekaar, mengolah jamur tiram yang tak laku jual menjadi jamur krispi dan stik jamur agar tidak terbuang dan bernilai jual lebih tinggi.",
  "date": "29 Agustus 2026",
  "image": "assets/img/kisah-astuti-nasabah-mekaar-ubah-jamur-jadi-camilan.jpg",
  "imageV": "mtenhhbg",
  "tags": [
   "PNM Mekaar",
   "UMKM",
   "Jamur Tiram",
   "Pembiayaan Ultra Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463498-cerita-astuti-bangun-usaha-hingga-pimpin-bank-sampah-tak-ingin-jamur-terbuang"
 },
 {
  "slug": "winr-pemegang-saham-lepas-16-49-juta-saham-demi-free-float",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Lepas 16,49 Juta Saham demi [Free Float]",
  "deck": "Pemegang saham nonpengendali WINR menjual 16,49 juta saham seharga Rp23 per lembar pada 20 Agustus 2026, hak suaranya turun tipis jadi 49,36 persen.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29082026-4241-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-siapkan-141-ribu-rusun-subsidi-di-meikarta",
  "category": "BUMN",
  "title": "Danantara Siapkan [141 Ribu] Rusun Subsidi di Meikarta",
  "deck": "Danantara memamerkan dua tipe unit rusun subsidi untuk MBR di Meikarta, bagian dari rencana 141 ribu unit yang lahannya baru diterima sebagai hibah dari Kemenkeu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/danantara-siapkan-141-ribu-rusun-subsidi-di-meikarta.jpg",
  "imageV": "mtenhhth",
  "tags": [
   "rusun subsidi",
   "Danantara",
   "Meikarta",
   "MBR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463455-141-ribu-rusun-subsidi-disiapkan-di-meikarta-ini-dua-tipe-hunian-yang-dipamerkan-danantara"
 },
 {
  "slug": "mendag-cek-pasar-banyuwangi-ayam-mendekati-harga-acuan",
  "category": "Makroekonomi",
  "title": "Mendag Cek Pasar Banyuwangi, Ayam [Mendekati] Harga Acuan",
  "deck": "Menteri Perdagangan memantau harga pangan di Pasar Rogojampi, Banyuwangi. Ayam ras mendekati harga acuan, sementara telur dan bawang merah masih jauh di bawahnya.",
  "date": "29 Agustus 2026",
  "image": "assets/img/mendag-cek-pasar-banyuwangi-ayam-mendekati-harga-acuan.jpg",
  "imageV": "mtebq3d7",
  "tags": [
   "harga pangan",
   "Kemendag",
   "HET",
   "Banyuwangi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-pantau-pasar-rogojampi-tegaskan-upaya-pemerintah-jaga-keseimbangan-harga-pasar",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mendag-ajak-umkm-banyuwangi-ikut-program-ekspor-kemendag",
  "category": "UMKM",
  "title": "Mendag Ajak UMKM Banyuwangi Ikut Program [Ekspor] Kemendag",
  "deck": "Mendag Budi Santoso mengajak UMKM Banyuwangi memakai program ekspor Kemendag dan Trade Expo Indonesia, saat mengunjungi produsen furnitur bersertifikat legalitas kayu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/mendag-ajak-umkm-banyuwangi-ikut-program-ekspor-kemendag.jpg",
  "imageV": "mtebqlch",
  "tags": [
   "UMKM",
   "ekspor",
   "Kemendag",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-ajak-umkm-banyuwangi-manfaatkan-program-pengembangan-ekspor-kemendag",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ri-cili-perluas-akses-pasar-cili-incar-impor-daging-sapi",
  "category": "Global",
  "title": "RI-Cili Perluas Akses Pasar, Cili Incar Impor [Daging] Sapi",
  "deck": "Indonesia dan Cili membahas perluasan akses pasar dua arah, dari produk olahan RI hingga daging sapi dan susu Cili, seiring pemanfaatan IC-CEPA yang naik pada 2025.",
  "date": "29 Agustus 2026",
  "image": "assets/img/ri-cili-perluas-akses-pasar-cili-incar-impor-daging-sapi.jpg",
  "imageV": "mtebqumu",
  "tags": [
   "IC-CEPA",
   "Indonesia-Cili",
   "ekspor kakao",
   "impor daging sapi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-akses-pasar-dua-arah-kemendag-perkuat-perdagangan-indonesia-cili",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "tapg-direksi-jual-lagi-850-ribu-saham-dalam-sepekan",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi [Jual] Lagi 850 Ribu Saham dalam Sepekan",
  "deck": "George Oetomo, direksi TAPG, melepas 850.000 saham pada 27 Agustus 2026, penjualan kedua dalam kurang dari dua pekan setelah pelepasan 2,35 juta saham sebelumnya.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "transaksi saham direksi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29082026-4500-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-delisting-saham-spusf-efektif-29-agustus-imbas-ojk",
  "category": "Aksi Korporasi",
  "title": "BEI [Delisting] Saham SPUSF Efektif 29 Agustus, Imbas OJK",
  "deck": "Bursa Efek Indonesia resmi mencabut pencatatan saham SPUSF mulai 29 Agustus 2026 atas perintah OJK, tanpa rincian alasan dalam pengumuman.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPUSF",
   "delisting",
   "OJK",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_SPUSF_B006_0c8e56df-0554-4aae-82f1-78deee6b59e6-20260829174954.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-usul-kepemilikan-asing-asuransi-naik-ke-99",
  "category": "Bisnis",
  "title": "OJK Usul Kepemilikan Asing Asuransi Naik ke [99%]",
  "deck": "OJK mengusulkan batas kepemilikan asing di perusahaan asuransi naik dari 80 persen menjadi 99 persen agar modalnya lebih kuat menanggung risiko besar, menyamakan aturan dengan perbankan.",
  "date": "29 Agustus 2026",
  "image": "assets/img/ojk-usul-kepemilikan-asing-asuransi-naik-ke-99.jpg",
  "imageV": "mtebqvfo",
  "tags": [
   "OJK",
   "asuransi",
   "kepemilikan asing",
   "modal asuransi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463412-ojk-dorong-kepemilikan-asing-di-asuransi-jadi-99-ini-alasan-di-balik-usulannya"
 },
 {
  "slug": "cara-cek-desil-bansos-online-pakai-nik",
  "category": "Makroekonomi",
  "title": "Cara Cek Desil Bansos Online Pakai [NIK]",
  "deck": "Masyarakat kini bisa mengecek dan memperbarui posisi desil bansos secara mandiri lewat situs Kemensos dan DTSEN BPS menggunakan NIK.",
  "date": "29 Agustus 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "desil bansos",
   "DTSEN",
   "Kemensos",
   "NIK"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463406-mau-tahu-masuk-desil-bansos-berapa-begini-cara-cek-dan-perbarui-data-pakai-nik"
 },
 {
  "slug": "kur-kopdes-merah-putih-wajib-lolos-cek-kredit-dulu",
  "category": "Perbankan",
  "title": "KUR Kopdes Merah Putih [Wajib] Lolos Cek Kredit Dulu",
  "deck": "DPR meminta pencairan KUR untuk Kopdes Merah Putih tidak otomatis, pengurus koperasi wajib lolos pengecekan riwayat kredit SLIK OJK lebih dulu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/kur-kopdes-merah-putih-wajib-lolos-cek-kredit-dulu.jpg",
  "imageV": "mtebqwez",
  "tags": [
   "KUR",
   "Kopdes Merah Putih",
   "SLIK OJK",
   "BRI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463400-kur-kdkmp-jangan-asal-cair-dpr-tegaskan-pengurus-kopdes-merah-putih-wajib-lolos-slik-ojk"
 },
 {
  "slug": "xiif-bagikan-dividen-tunai-kik-cum-dividen-hari-ini",
  "category": "Aksi Korporasi",
  "title": "XIIF Bagikan [Dividen] Tunai KIK, Cum Dividen Hari Ini",
  "deck": "Pengelola KIK XIIF mengumumkan dividen tunai maksimum Rp81.723 per unit penyertaan, dengan pembayaran dijadwalkan 3 September 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XIIF",
   "dividen",
   "KIK",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_XIIF_E045_2f52d145-7fdd-4539-bda9-574adfab9dbd-20260829153852.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hkmu-reverse-stock-1-4-saham-beredar-susut-ke-12-978",
  "category": "Aksi Korporasi",
  "title": "HKMU Reverse Stock 1:4, Saham Beredar [Susut] ke 12.978",
  "deck": "RUPS HKMU menyetujui penggabungan saham dengan rasio 1:4, mengubah jumlah saham beredar dari 8.712.937 menjadi 12.978 lembar mulai 30 Agustus 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "reverse stock",
   "aksi korporasi",
   "penggabungan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_HKMU_E0X3_8663a346-fce7-48ab-b9f3-8ef3d194dbe6-20260829152845.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hkmu-rilis-rights-issue-dilusi-saham-lewat-hmetd-dan-waran",
  "category": "Aksi Korporasi",
  "title": "HKMU Rilis Rights Issue, [Dilusi] Saham Lewat HMETD dan Waran",
  "deck": "RUPS HKMU menyetujui penambahan modal lewat HMETD dengan rasio 1:4 harga Rp1.823, disertai penerbitan waran dan obligasi wajib konversi.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "rights issue",
   "HMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_HKMU_E0X3_db62d6da-bc3b-454a-b73b-6a763b5c7999-20260829152733.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kuki-catatkan-obligasi-rp1-miliar-bunga-10-persen",
  "category": "Aksi Korporasi",
  "title": "KUKI Catatkan [Obligasi] Rp1 Miliar Bunga 10 Persen",
  "deck": "BEI mulai mencatatkan Obligasi KUKI 2 2026 seri A senilai Rp1 miliar dengan bunga tetap 10 persen dan rating AA dari Pefindo, mulai 29 Agustus 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KUKI",
   "obligasi korporasi",
   "BEI",
   "pencatatan obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_KUKI_B011_korporasi_b2335fd2-0e32-437b-a4c0-5306dc55a4c2-20260829152631.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hkmu-ganti-komisaris-dan-direksi-kuorum-rups-cuma-23",
  "category": "Aksi Korporasi",
  "title": "HKMU Ganti [Komisaris] dan Direksi, Kuorum RUPS Cuma 23%",
  "deck": "RUPS Tahunan HKMU yang dihadiri 23% pemegang saham menyetujui pergantian susunan direksi dan komisaris dengan masa jabatan yang tercatat sangat singkat di dokumen resmi.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "RUPS",
   "Komisaris",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_HKMU_E013_15e9f9f1-db6b-4b61-8015-8d3f23b74549-20260829151921.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-desak-koreksi-data-bansos-dtsen-maksimal-14-hari",
  "category": "Makroekonomi",
  "title": "DPR Desak Koreksi Data Bansos [DTSEN] Maksimal 14 Hari",
  "deck": "DPR meminta pemerintah membatasi waktu koreksi DTSEN maksimal 14 hari kerja agar status desil tak lagi jadi satu-satunya penentu penerima bansos.",
  "date": "29 Agustus 2026",
  "image": "assets/img/dpr-desak-koreksi-data-bansos-dtsen-maksimal-14-hari.jpg",
  "imageV": "mtebqx85",
  "tags": [
   "DTSEN",
   "bansos",
   "DPR",
   "desil"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463397-dpr-desak-koreksi-dtsen-maksimal-14-hari-kerja-desil-tak-boleh-jadi-hakim-tunggal-penerima-bansos"
 },
 {
  "slug": "crab-liabilitas-toba-surimi-turun-38-75-ekuitas-naik",
  "category": "Aksi Korporasi",
  "title": "CRAB: Liabilitas Toba Surimi Turun 38,75%, [Ekuitas] Naik",
  "deck": "Laporan keuangan tahunan CRAB mencatat total liabilitas turun 38,75 persen jadi Rp46,74 miliar, membuat ekuitas perusahaan naik sekitar Rp19,4 miliar.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "Toba Surimi Industries",
   "laporan keuangan",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202508/20260829122655-62602-0/FinancialStatement-2025-Tahunan-CRAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plts-atap-surabaya-kurangi-715-ton-emisi-karbon",
  "category": "Energi",
  "title": "PLTS Atap Surabaya Kurangi [715] Ton Emisi Karbon",
  "deck": "PLTS atap 586,95 kWp di Ciputra World Surabaya beroperasi, diproyeksikan hasilkan 795 MWh listrik dan tekan 715 ton emisi karbon pada tahun pertama.",
  "date": "29 Agustus 2026",
  "image": "assets/img/plts-atap-surabaya-kurangi-715-ton-emisi-karbon.jpg",
  "imageV": "mtebqxyg",
  "tags": [
   "PLTS Atap",
   "Surabaya",
   "Energi Terbarukan",
   "Zero-CAPEX"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463362-plts-atap-di-surabaya-kurangi-715-ton-emisi-karbon-setara-penanaman-15897-pohon"
 },
 {
  "slug": "bei-catat-7-perusahaan-antre-ipo-mayoritas-kesehatan",
  "category": "Pasar Modal",
  "title": "BEI Catat [7] Perusahaan Antre IPO, Mayoritas Kesehatan",
  "deck": "BEI mencatat tujuh perusahaan masih mengantre pencatatan saham hingga 28 Agustus 2026, didominasi sektor kesehatan, sementara tujuh perusahaan lain sudah resmi melantai dan menghimpun Rp2,16 triliun.",
  "date": "29 Agustus 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "IPO",
   "BEI",
   "Pasar Modal",
   "Sektor Kesehatan"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463347-bei-ungkap-7-perusahaan-antre-ipo-4-dari-sektor-kesehatan"
 },
 {
  "slug": "ekspor-koral-ri-ke-as-kalah-jauh-dari-jepang",
  "category": "Industri",
  "title": "Ekspor Koral RI ke AS, Kalah Jauh dari [Jepang]",
  "deck": "Mendag Busan melepas ekspor koral hidup senilai US$2.500 dari Banyuwangi ke AS, sementara ekspor koral nasional semester I 2026 hanya tumbuh 2,42 persen dan masih tertinggal jauh dari Jepang.",
  "date": "29 Agustus 2026",
  "image": "assets/img/ekspor-koral-ri-ke-as-kalah-jauh-dari-jepang.jpg",
  "imageV": "mtdvipaq",
  "tags": [
   "ekspor koral",
   "Kementerian Perdagangan",
   "Banyuwangi",
   "perikanan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tunjukkan-potensi-koral-budi-daya-di-pasar-global-mendag-busan-lepas-ekspor-koral-hidup-ke-as-1787916889",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kemendag-teken-mou-campuspreneur-dengan-kampus-di-banyuwangi",
  "category": "UMKM",
  "title": "Kemendag Teken MoU [Campuspreneur] dengan Kampus di Banyuwangi",
  "deck": "Kemendag menggandeng UNIDSOE Banyuwangi lewat program Campuspreneur untuk mencetak wirausaha ekspor baru, sementara program UMKM BISA Ekspor mencatat potensi transaksi US$333,68 juta pada Januari-Juli 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/kemendag-teken-mou-campuspreneur-dengan-kampus-di-banyuwangi.jpg",
  "imageV": "mtdvj2du",
  "tags": [
   "UMKM",
   "Ekspor",
   "Campuspreneur",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/beri-kuliah-umum-di-unidsoe-banyuwangi-mendag-busan-ajak-mahasiswa-coba-berwirausaha",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "adro-bukukan-laba-us-329-juta-liabilitas-naik-48",
  "category": "Aksi Korporasi",
  "title": "ADRO Bukukan Laba US$329 Juta, [Liabilitas] Naik 48%",
  "deck": "Laba bersih Alamtri Resources melonjak 69 persen jadi US$329 juta pada semester I 2026, sementara liabilitas naik 48 persen untuk mendanai proyek smelter aluminium.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADRO",
   "Alamtri Resources",
   "laporan keuangan",
   "smelter aluminium"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829110426-64311-0/FinancialStatement-2026-II-ADRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aali-pengendali-baru-rampungkan-tender-wajib-kuasai-67",
  "category": "Aksi Korporasi",
  "title": "AALI: Pengendali Baru Rampungkan [Tender] Wajib, Kuasai 67%",
  "deck": "Pengendali baru Astra Agro Lestari menyerap 2,31 miliar saham dari target 12,34 miliar lewat tender wajib, menaikkan kepemilikannya jadi 67 persen.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "tender wajib",
   "pengendali saham",
   "Astra Agro Lestari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_AALI_E010_950d3115-f1c0-4fe1-9b53-8ab1786059ab-20260829103018.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oils-laba-semester-i-melonjak-7-kali-lipat-jadi-rp21-4-m",
  "category": "Aksi Korporasi",
  "title": "OILS: Laba Semester I [Melonjak 7 Kali Lipat] jadi Rp21,4 M",
  "deck": "Laba PT Indo Oil Perkasa Tbk naik hampir tujuh kali lipat menjadi Rp21,48 miliar pada semester I 2026, didukung penjualan yang tumbuh 56 persen.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OILS",
   "laporan keuangan",
   "laba bersih",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829103655-64261-0/FinancialStatement-2026-II-OILS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dire-bagikan-dividen-tunai-final-cum-dividen-29-agustus",
  "category": "Aksi Korporasi",
  "title": "DIRE bagikan [dividen] tunai final, cum dividen 29 Agustus",
  "deck": "DIRE mengumumkan distribusi dividen tunai final dengan tanggal cum dividen 29 Agustus dan pembayaran dijadwalkan 2 September 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DIRE",
   "dividen",
   "dana investasi real estat",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_DIRE_E062_9199cfd3-ac94-4fd6-9e28-3836041df10e-20260829095433.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-koreksi-laporan-interim-laba-melonjak-73-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SMMA Koreksi Laporan Interim, Laba [Melonjak] 73% Semester I 2026",
  "deck": "SMMA menyampaikan koreksi laporan keuangan interim semester I 2026, dengan laba bersih naik 73 persen menjadi Rp2,3 triliun dari periode sama tahun lalu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "laporan keuangan",
   "asuransi",
   "Sinar Mas Multiartha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829020021-64309-0/FinancialStatement-2026-II-SMMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tays-rombak-direksi-dan-komisaris-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "TAYS Rombak [Direksi] dan Komisaris Usai RUPSLB",
  "deck": "RUPSLB TAYS pada 1 April 2026 menyetujui pergantian satu direktur dan satu komisaris independen, disahkan bulat oleh pemegang saham yang hadir.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAYS",
   "Perubahan Pengurus",
   "RUPSLB",
   "Direksi Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e18c387dd1_5d1c0dea47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-laba-semester-i-2026-melonjak-34-jadi-rp6-9-t-laba",
  "category": "Aksi Korporasi",
  "title": "ANTM: Laba Semester I 2026 Melonjak 34% jadi Rp6,9 T [Laba]",
  "deck": "Pendapatan ANTM naik jadi Rp62,71 triliun dan laba bersih melonjak 34,4 persen menjadi Rp6,91 triliun pada semester I 2026, meski beban bunga dan persediaan ikut membengkak.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "Antam",
   "laba bersih",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828233441-64266-0/FinancialStatement-2026-II-ANTM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "area-bantah-ada-informasi-material-di-balik-gejolak-sahamnya",
  "category": "Aksi Korporasi",
  "title": "AREA Bantah Ada [Informasi Material] di Balik Gejolak Sahamnya",
  "deck": "Menjawab permintaan penjelasan Bursa Efek Indonesia soal volatilitas transaksi sahamnya, PT Dunia Virtual Online Tbk (AREA) menyatakan tidak mengetahui adanya informasi material di baliknya.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AREA",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3621f3d13b_4c55431646.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-ubah-jadwal-rupslb-jadi-25-september-2026",
  "category": "Aksi Korporasi",
  "title": "UANG Ubah Jadwal [RUPSLB] Jadi 25 September 2026",
  "deck": "PT Pakuan Tbk menggeser jadwal rapat pemegang saham luar biasa ke 25 September 2026, dengan pemegang saham per 2 September 2026 yang berhak hadir.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "RUPSLB",
   "PT Pakuan Tbk",
   "jadwal rapat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d8882d19cb_2e1ceac190.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-buka-pendaftaran-umk-academy-2026-sampai-31-agustus",
  "category": "UMKM",
  "title": "Pertamina Buka Pendaftaran [UMK Academy] 2026 sampai 31 Agustus",
  "deck": "Pertamina kembali membuka program pembinaan UMK Academy 2026 dengan tambahan dua kelas baru, Go Green dan Go Aggregator. Pendaftaran online dibuka hingga 31 Agustus 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pertamina-buka-pendaftaran-umk-academy-2026-sampai-31-agustus.jpg",
  "imageV": "mtdcxesl",
  "tags": [
   "UMK Academy",
   "Pertamina",
   "UMKM",
   "pendaftaran UMK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463293-umk-academy-2026-pertamina-kembali-dibuka-kesempatan-lokal-naik-kelas-dan-perluas-pasar-hingga-global"
 },
 {
  "slug": "wika-ekuitas-anjlok-ke-rp130-m-rugi-rp1-55-t-di-semester-i",
  "category": "Aksi Korporasi",
  "title": "WIKA: Ekuitas [Anjlok] ke Rp130 M, Rugi Rp1,55 T di Semester I",
  "deck": "Laporan keuangan interim WIKA per Juni 2026 menunjukkan ekuitas tergerus hingga tersisa Rp130 miliar dan rugi bersih Rp1,55 triliun, di tengah proses penundaan pembayaran sukuk yang sedang diajukan perseroan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "laporan keuangan",
   "sukuk",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828222418-64258-0/FinancialStatement-2026-II-WIKA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "refi-janji-rampungkan-laporan-keuangan-paling-lambat-30-september",
  "category": "Aksi Korporasi",
  "title": "REFI Janji Rampungkan Laporan Keuangan [Paling Lambat] 30 September",
  "deck": "REFI menjawab peringatan tertulis pertama BEI soal telat laporan keuangan tengah tahun 2026, menyebut laporannya masih diaudit KAP dan berjanji terbit paling lambat 30 September 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REFI",
   "Laporan Keuangan",
   "Bursa Efek Indonesia",
   "Sanksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5178a7b590_a2121d3e15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-rugi-bersih-melonjak-ke-rp37-8-miliar-ekuitas-jadi-negatif",
  "category": "Aksi Korporasi",
  "title": "CASH rugi bersih [melonjak] ke Rp37,8 miliar, ekuitas jadi negatif",
  "deck": "Laporan keuangan interim semester I 2026 menunjukkan rugi bersih Cashlez Worldwide Indonesia melonjak ke Rp37,8 miliar dan ekuitas perusahaan berbalik menjadi negatif Rp37,6 miliar.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "laporan keuangan",
   "ekuitas negatif",
   "penyedia jasa pembayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828214059-64235-0/FinancialStatement-2026-II-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-rambah-bisnis-non-otomotif-incar-laba-rp44-16-m",
  "category": "Industri",
  "title": "PART Rambah Bisnis Non-[Otomotif], Incar Laba Rp44,16 M",
  "deck": "Cipta Perdana Lancar (PART) memproyeksikan laba bersih 2026 naik 46,18 persen menjadi Rp44,16 miliar seiring perluasan bisnis fabrikasi mesin di luar otomotif.",
  "date": "28 Agustus 2026",
  "image": "assets/img/part-rambah-bisnis-non-otomotif-incar-laba-rp44-16-m.jpg",
  "imageV": "mtdcxfcj",
  "tags": [
   "PART",
   "otomotif",
   "diversifikasi bisnis",
   "laba bersih"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463277-part-genjot-bisnis-non-otomotif-laba-bersih-2026-diproyeksi-tembus-rp4416-miliar"
 },
 {
  "slug": "kota-kas-anjlok-89-meski-defisit-menyusut-semester-i",
  "category": "Aksi Korporasi",
  "title": "KOTA: kas [anjlok] 89% meski defisit menyusut semester I",
  "deck": "Laporan keuangan interim auditan KOTA per Juni 2026 menunjukkan kas merosot tajam sementara akumulasi rugi menyusut sekitar Rp16 miliar.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "laporan keuangan",
   "properti",
   "hotel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828204051-64275-0/FinancialStatement-2026-II-KOTA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpum-rama-indonesia-jadwalkan-ulang-tender-wajib-saham",
  "category": "Aksi Korporasi",
  "title": "DPUM: Rama Indonesia Jadwalkan Ulang [Tender Wajib] Saham",
  "deck": "Rama Indonesia menjadwalkan ulang penawaran tender wajib atas saham DPUM menjadi 24 September-23 Oktober 2026, menyusul penundaan akibat kebakaran pabrik pada Juni 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPUM",
   "tender offer wajib",
   "Rama Indonesia",
   "pengambilalihan perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c917f1e1a_015b8744c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rmko-jelaskan-lonjakan-piutang-dan-pendapatan-ke-afiliasi-rmuk",
  "category": "Aksi Korporasi",
  "title": "RMKO Jelaskan Lonjakan [Piutang] dan Pendapatan ke Afiliasi RMUK",
  "deck": "BEI meminta RMKO menjelaskan lonjakan piutang, pendapatan diterima di muka, dan sejumlah pos neraca lain pada laporan keuangan tengah tahun 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RMKO",
   "piutang",
   "pendapatan diterima di muka",
   "pihak berelasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/14d868b832_4a6b14e1f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bach-lakukan-pemecahan-saham-1-2000-arus-kas-operasi-minus",
  "category": "Aksi Korporasi",
  "title": "BACH Lakukan [Pemecahan Saham] 1:2000, Arus Kas Operasi Minus",
  "deck": "Bach Multi Global (BACH) mencatat laba bersih naik 25 persen di semester I 2026, tetapi arus kas dari operasi berbalik minus Rp84,16 miliar seiring lonjakan utang bank dan piutang usaha.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BACH",
   "laporan keuangan",
   "pemecahan saham",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828202303-64238-0/FinancialStatement-2026-II-BACH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iata-rupsu-rupo-setujui-waiver-klausul-pemegang-saham-utama",
  "category": "Aksi Korporasi",
  "title": "IATA: RUPSU-RUPO Setujui [Waiver] Klausul Pemegang Saham Utama",
  "deck": "Pemegang sukuk dan obligasi Karya Pacific Energy menyetujui pelonggaran ketentuan perjanjian wali amanat yang terkait pemegang saham pengendali perseroan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IATA",
   "sukuk",
   "obligasi",
   "wali amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e1a680eb80_eca7e65d9b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-bjb-borong-dua-penghargaan-ojk-di-hari-menabung",
  "category": "Perbankan",
  "title": "bank bjb [Borong] Dua Penghargaan OJK di Hari Menabung",
  "deck": "bank bjb meraih dua penghargaan OJK di Puncak Hari Indonesia Menabung 2026 atas program edukasi keuangan ke sekolah dan masyarakat.",
  "date": "28 Agustus 2026",
  "image": "assets/img/bank-bjb-borong-dua-penghargaan-ojk-di-hari-menabung.jpg",
  "imageV": "mtdcxfxt",
  "tags": [
   "bank bjb",
   "OJK",
   "literasi keuangan",
   "Hari Indonesia Menabung"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463258-bank-bjb-borong-dua-penghargaan-ojk-di-puncak-hari-indonesia-menabung-2026"
 },
 {
  "slug": "pertamina-patra-niaga-raih-penghargaan-csr-bencana",
  "category": "BUMN",
  "title": "Pertamina Patra Niaga Raih [Penghargaan] CSR Bencana",
  "deck": "Pertamina Patra Niaga meraih Impact Commitment Awards 2026 atas program CSR, termasuk respons bencana banjir Sumatera dan gempa NTT hingga ke daerah terpencil.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pertamina-patra-niaga-raih-penghargaan-csr-bencana.jpg",
  "imageV": "mtdcxges",
  "tags": [
   "Pertamina Patra Niaga",
   "CSR",
   "bencana alam",
   "NTT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463245-pertamina-patra-niaga-sabet-impact-commitment-awards-respons-bencana-sumatera-hingga-ntt-diapresiasi"
 },
 {
  "slug": "pendapatan-bnbr-naik-45-8-usai-konsolidasi-cct",
  "category": "Pasar Modal",
  "title": "Pendapatan [BNBR] Naik 45,8% Usai Konsolidasi CCT",
  "deck": "Pendapatan Bakrie & Brothers naik 45,84% menjadi Rp2,59 triliun pada semester I 2026, didorong konsolidasi penuh tol Cimanggis-Cibitung dan pertumbuhan anak usaha VKTR serta BMI.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pendapatan-bnbr-naik-45-8-usai-konsolidasi-cct.jpg",
  "imageV": "mtdcxgvr",
  "tags": [
   "BNBR",
   "Bakrie & Brothers",
   "VKTR",
   "rights issue"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463240-kinerja-bnbr-semester-i-2026-pendapatan-naik-4584-jadi-rp259-triliun-dan-laba-usaha-melonjak-283"
 },
 {
  "slug": "telin-gandeng-empat-mitra-global-di-batic-2026",
  "category": "Teknologi",
  "title": "Telin Gandeng [Empat] Mitra Global di BATIC 2026",
  "deck": "Anak usaha Telkom ini menjalin empat kerja sama sekaligus di BATIC 2026, dari penguatan kabel bawah laut internasional hingga integrasi data center dengan Grup Djarum.",
  "date": "28 Agustus 2026",
  "image": "assets/img/telin-gandeng-empat-mitra-global-di-batic-2026.jpg",
  "imageV": "mtdcxhcl",
  "tags": [
   "Telin",
   "Telkom",
   "BATIC 2026",
   "kabel bawah laut"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463228-melalui-empat-kemitraan-strategis-di-batic-2026-telin-perluas-jejak-ekosistem-digital-global"
 },
 {
  "slug": "injourney-tawarkan-promo-bundling-di-gatf-2026",
  "category": "BUMN",
  "title": "InJourney Tawarkan [Promo] Bundling di GATF 2026",
  "deck": "InJourney Group menghadirkan promo bundling hotel, tiket, dan paket wisata di Garuda Indonesia Travel Fair 2026 yang berlangsung 28-30 Agustus di JICC Jakarta.",
  "date": "28 Agustus 2026",
  "image": "assets/img/injourney-tawarkan-promo-bundling-di-gatf-2026.jpg",
  "imageV": "mtdcxhu9",
  "tags": [
   "InJourney",
   "Garuda Indonesia Travel Fair",
   "BUMN Pariwisata",
   "Promo Wisata"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463223-ramaikan-garuda-indonesia-travel-fair-2026-injourney-group-dorong-pengalaman-wisata-terintegrasi"
 },
 {
  "slug": "danantara-gelar-expo-properti-di-nice-pik2-tangerang",
  "category": "Bisnis",
  "title": "Danantara Gelar Expo Properti di [NICE] PIK2 Tangerang",
  "deck": "Danantara Indonesia menggelar Housing Expo 2026 di NICE, PIK2, Tangerang, 27-30 Agustus, menawarkan lebih dari 120.000 unit hunian dari 130 pengembang.",
  "date": "28 Agustus 2026",
  "image": "assets/img/danantara-gelar-expo-properti-di-nice-pik2-tangerang.jpg",
  "imageV": "mtdcxic6",
  "tags": [
   "Danantara",
   "properti",
   "NICE",
   "PIK2"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463197-danantara-pilih-nice-untuk-penyelenggaraan-danantara-housing-expo-2026-perkuat-ekosistem-hunian-dan-properti-nasional"
 },
 {
  "slug": "kadin-siapkan-4-jurus-perkuat-pasokan-protein-mbg",
  "category": "Industri",
  "title": "Kadin Siapkan 4 Jurus Perkuat Pasokan [Protein] MBG",
  "deck": "Kadin Indonesia mengusulkan empat program penguatan ekosistem protein, dari hilirisasi hingga digitalisasi rantai pasok, untuk mendukung program Makan Bergizi Gratis.",
  "date": "28 Agustus 2026",
  "image": "assets/img/kadin-siapkan-4-jurus-perkuat-pasokan-protein-mbg.jpg",
  "imageV": "mtdcxj6k",
  "tags": [
   "Kadin",
   "MBG",
   "Protein",
   "Pertanian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463145-dukung-mbg-kadin-siapkan-4-jurus-perkuat-pasokan-protein-dari-hulu-hingga-hilir"
 },
 {
  "slug": "pik-2-jadi-lokasi-pameran-danantara-housing-expo-2026",
  "category": "Bisnis",
  "title": "PIK 2 Jadi Lokasi Pameran [Danantara] Housing Expo 2026",
  "deck": "NICE di kawasan PIK 2 menjadi tuan rumah Danantara Housing Expo 2026 pada 27-30 Agustus, sekaligus menandai satu tahun operasional venue seluas sekitar 40 hektare itu.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pik-2-jadi-lokasi-pameran-danantara-housing-expo-2026.jpg",
  "imageV": "mtdcxjn8",
  "tags": [
   "NICE PIK 2",
   "Danantara Housing Expo",
   "MICE",
   "pameran properti"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463153-menjadi-tuan-rumah-danantara-housing-expo-2026-nice-pik-2-buktikan-kesiapan-fasilitas-skala-masif"
 },
 {
  "slug": "indonesia-maroko-reaktivasi-perundingan-dagang-target-2027",
  "category": "Global",
  "title": "Indonesia-Maroko [Reaktivasi] Perundingan Dagang, Target 2027",
  "deck": "Wamendag Roro mendorong percepatan perundingan dagang RI-Maroko dengan target rampung 2027, seiring nilai perdagangan bilateral yang tumbuh 37 persen pada awal 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/indonesia-maroko-reaktivasi-perundingan-dagang-target-2027.jpg",
  "imageV": "mtclk09z",
  "tags": [
   "Indonesia-Maroko",
   "perdagangan bilateral",
   "Kementerian Perdagangan",
   "ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/reaktivasi-perundingan-perdagangan-indonesia-maroko-wamendag-roro-dorong-negosiasi-tuntas-di-2027",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-kakao-ri-melonjak-tiga-kali-lipat-dalam-lima-tahun",
  "category": "Industri",
  "title": "Ekspor Kakao RI [Melonjak] Tiga Kali Lipat dalam Lima Tahun",
  "deck": "Kemendag mencatat ekspor kakao Indonesia tembus US$3,6 miliar pada 2025, sembari mendorong standar keberlanjutan sawit dan kakao agar makin bersaing di pasar global.",
  "date": "28 Agustus 2026",
  "image": "assets/img/ekspor-kakao-ri-melonjak-tiga-kali-lipat-dalam-lima-tahun.jpg",
  "imageV": "mtclk6ib",
  "tags": [
   "kakao",
   "kelapa sawit",
   "perdagangan internasional",
   "ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hadiri-forum-kakao-dan-kelapa-sawit-mendag-budi-santoso-dorong-peningkatan-nilai-tambah-dan-keberlanjutan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "agii-setop-sisa-pub-sukuk-rp1-18-triliun-andalkan-sindikasi",
  "category": "Aksi Korporasi",
  "title": "AGII Setop Sisa PUB Sukuk [Rp1,18 Triliun], Andalkan Sindikasi",
  "deck": "Samator Indo Gas (AGII) menghentikan sisa plafon Rp1,18 triliun dari program sukuknya dan beralih memakai fasilitas pinjaman sindikasi yang sudah tersedia.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "Samator Indo Gas",
   "Sukuk Ijarah",
   "Pinjaman Sindikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d682dddbdd_c6186173f9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "safe-beri-penjelasan-usai-harga-melonjak-24-87-dalam-sehari",
  "category": "Aksi Korporasi",
  "title": "SAFE Beri Penjelasan usai Harga Melonjak [24,87%] dalam Sehari",
  "deck": "Steady Safe menjawab permintaan penjelasan Bursa soal lonjakan harga dan volume transaksi pada 24 Agustus, dan menyatakan tidak ada informasi material di baliknya.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/beb890bc61_9fe43bf0ec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elit-angkat-sandiaga-uno-jadi-komisaris-baru",
  "category": "Aksi Korporasi",
  "title": "ELIT Angkat [Sandiaga Uno] Jadi Komisaris Baru",
  "deck": "RUPSLB ELIT pada 26 Agustus 2026 menyetujui pengangkatan Sandiaga Salahuddin Uno sebagai komisaris dan Meidyah Indreswari sebagai komisaris independen, masa jabatan lima tahun hingga 2031.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELIT",
   "RUPSLB",
   "komisaris",
   "Sandiaga Uno"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c68937a2a1_c9e96d570d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-pegadaian-turun-antam-rp2-759-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Pegadaian [Turun], Antam Rp2.759.000/Gram",
  "deck": "Harga emas Galeri24, Antam, dan UBS di Pegadaian kompak turun pada Jumat, dengan penurunan UBS mencapai Rp25.000 per gram.",
  "date": "28 Agustus 2026",
  "image": "assets/img/harga-emas-pegadaian-turun-antam-rp2-759-000-gram.jpg",
  "imageV": "mtclk7ic",
  "tags": [
   "harga emas",
   "pegadaian",
   "antam",
   "ubs"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463116-harga-emas-pegadaian-jumat-turun-antam-rp2759-juta-dan-ubs-rp2729-juta-per-gram"
 },
 {
  "slug": "tufi-siapkan-rp817-miliar-bayar-obligasi-jatuh-tempo-september",
  "category": "Aksi Korporasi",
  "title": "TUFI siapkan [Rp817 miliar] bayar obligasi jatuh tempo September",
  "deck": "TUFI menyatakan telah menyiapkan dana sekitar Rp817,24 miliar untuk membayar pokok dan bunga obligasi yang jatuh tempo 27 September 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TUFI",
   "obligasi",
   "Mandiri Tunas Finance",
   "pembayaran utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bd41f3769e_39e4560d5e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-catat-defisit-ekuitas-rp564-9-miliar-per-juni-2026",
  "category": "Aksi Korporasi",
  "title": "MTFN Catat Defisit [Ekuitas] Rp564,9 Miliar per Juni 2026",
  "deck": "Emiten migas Capitalinc Investment mencatat ekuitas negatif Rp564,9 miliar per Juni 2026, memburuk dari Rp538,7 miliar di akhir 2025, meski pendapatan naik 15 persen.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "Capitalinc Investment",
   "laporan keuangan interim",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828110924-64255-0/FinancialStatement-2026-II-MTFN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oliv-utang-ke-pemegang-saham-turun-94-85-kas-naik-tajam",
  "category": "Aksi Korporasi",
  "title": "OLIV: Utang ke Pemegang Saham [Turun] 94,85%, Kas Naik Tajam",
  "deck": "Utang OLIV ke pemegang saham pengendali turun 94,85% dan kas naik tajam pada semester I 2026, meski total aset menyusut akibat penjualan persediaan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OLIV",
   "laporan keuangan",
   "likuiditas",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828110952-64254-0/FinancialStatement-2026-II-OLIV.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-rilis-pmthmetd-640-juta-saham-ke-afiliasi-rp320-miliar",
  "category": "Aksi Korporasi",
  "title": "HATM Rilis [PMTHMETD] 640 Juta Saham ke Afiliasi Rp320 Miliar",
  "deck": "HATM akan menerbitkan 640 juta saham baru senilai Rp320 miliar khusus untuk PT Multi Sarana Nasional, pemegang saham yang direksinya sama dengan direksi HATM, dengan dilusi hingga 6,87 persen.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "PMTHMETD",
   "penambahan modal",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/51131230ba_0f20894f16.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-menguat-0-21-ke-6-535-sideways-jelang-akhir-pekan",
  "category": "Pasar Modal",
  "title": "IHSG [Menguat] 0,21% ke 6.535, Sideways Jelang Akhir Pekan",
  "deck": "IHSG dibuka naik 0,21 persen ke 6.535,72 setelah beberapa hari tertekan kekhawatiran keamanan dan politik dalam negeri, tapi analis memperkirakan pergerakan sideways hingga akhir pekan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/bursa-layar.jpg",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "LQ45",
   "The Fed"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463111-ihsg-dibuka-hijau-di-653572-akankah-penguatan-berlanjut-dan-bikin-investor-happy"
 },
 {
  "slug": "maya-panggil-rupslb-soal-pergantian-direksi-komisaris-24-sep",
  "category": "Aksi Korporasi",
  "title": "MAYA panggil RUPSLB soal [pergantian] direksi-komisaris 24 Sep",
  "deck": "Bank Mayapada Internasional (MAYA) mengundang pemegang saham ke RUPSLB 24 September 2026 untuk menyetujui perubahan susunan Direksi dan Dewan Komisaris.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAYA",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d87144cbf9_b59b20af76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-siapkan-layer-cukai-baru-tekan-rokok-ilegal",
  "category": "Makroekonomi",
  "title": "Purbaya Siapkan [Layer] Cukai Baru Tekan Rokok Ilegal",
  "deck": "Menkeu Purbaya menyiapkan lapisan tarif cukai baru untuk menarik pedagang rokok ilegal masuk ke sistem legal, sementara yang bertahan ilegal akan ditindak tegas.",
  "date": "28 Agustus 2026",
  "image": "assets/img/purbaya-siapkan-layer-cukai-baru-tekan-rokok-ilegal.jpg",
  "imageV": "mtclk8kj",
  "tags": [
   "cukai rokok",
   "rokok ilegal",
   "CHT",
   "Purbaya Yudhi Sadewa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463107-purbaya-siapkan-layer-cukai-baru-pedagang-rokok-ilegal-diperingatkan-tak-bisa-lagi-main-main"
 },
 {
  "slug": "aspebindo-perkuat-ketahanan-energi-lewat-bioenergi",
  "category": "Energi",
  "title": "Aspebindo Perkuat Ketahanan Energi Lewat [Bioenergi]",
  "deck": "Aspebindo menggelar summit bioenergi dan meninjau pabrik pengolah sampah jadi bahan bakar di Jakarta Utara, bagian dari perluasan bisnis ke energi terbarukan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/aspebindo-perkuat-ketahanan-energi-lewat-bioenergi.jpg",
  "imageV": "mtclk9i9",
  "tags": [
   "bioenergi",
   "energi terbarukan",
   "Aspebindo",
   "RDF"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463068-aspebindo-sokong-ketahanan-energi-nasional-lewat-bioenergi"
 },
 {
  "slug": "emas-aset-naik-30-ditopang-utang-bank-us-149-juta",
  "category": "Aksi Korporasi",
  "title": "EMAS: Aset Naik 30% Ditopang [Utang] Bank US$149 Juta",
  "deck": "Laporan interim EMAS per Juni 2026: total aset naik jadi US$964,3 juta, ditopang utang bank jangka pendek baru US$149 juta seiring mulai beroperasinya anak usaha Pani Bersama Tambang.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Merdeka Gold Resources",
   "laporan keuangan interim",
   "tambang emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260827220001-64211-0/FinancialStatement-2026-II-EMAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-minta-dooh-gelar-public-expose-insidentil-bahas-saham",
  "category": "Aksi Korporasi",
  "title": "BEI Minta DOOH Gelar Public Expose [Insidentil] Bahas Saham",
  "deck": "PT Era Media Sejahtera Tbk (DOOH) akan menggelar Public Expose Insidentil pada 4 September 2026 atas permintaan Bursa Efek Indonesia, membahas kinerja keuangan hingga pergerakan harga sahamnya.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Era Media Sejahtera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dc5e89a44e_142eb6ae51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dild-pengadilan-tolak-gugatan-pkpu-bank-mayapada-ke-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "DILD: Pengadilan Tolak Gugatan [PKPU] Bank Mayapada ke Anak Usaha",
  "deck": "Pengadilan Negeri Jakarta Pusat menolak permohonan PKPU yang diajukan Bank Mayapada terhadap PT Taman Harapan Indah, anak usaha Intiland Development (DILD).",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DILD",
   "PKPU",
   "Intiland Development",
   "Taman Harapan Indah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4a3d9dd6a8_974059e233.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-kejar-332-desa-energi-berdikari-di-akhir-2026",
  "category": "Energi",
  "title": "Pertamina Kejar 332 Desa [Energi] Berdikari di Akhir 2026",
  "deck": "Pertamina genjot Program Desa Energi Berdikari dari 269 jadi 332 lokasi hingga akhir 2026, memadukan panel surya, biogas, dan mikrohidro untuk ekonomi desa.",
  "date": "27 Agustus 2026",
  "image": "assets/img/pertamina-kejar-332-desa-energi-berdikari-di-akhir-2026.jpg",
  "imageV": "mtbqd09s",
  "tags": [
   "Pertamina",
   "energi terbarukan",
   "desa energi berdikari",
   "DEB"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463029-festival-deb-pertamina-2026-terus-perkuat-kolaborasi-dorong-energi-terbarukan-jadi-penggerak-ekonomi-desa"
 },
 {
  "slug": "pgas-kalah-sebagian-di-arbitrase-lawan-gunvor-di-london",
  "category": "Aksi Korporasi",
  "title": "PGAS Kalah Sebagian di Arbitrase Lawan [Gunvor] di London",
  "deck": "PGN menerima putusan arbitrase parsial LCIA yang mewajibkannya membayar kompensasi kepada Gunvor Singapore, namun jumlahnya belum diungkap.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGAS",
   "arbitrase",
   "Gunvor",
   "LCIA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c63e9284cd_56f7ef45a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-raih-penghargaan-sukuk-syariah-di-kuala-lumpur",
  "category": "Pasar Modal",
  "title": "Pegadaian Raih [Penghargaan] Sukuk Syariah di Kuala Lumpur",
  "deck": "Pegadaian meraih penghargaan Best Sukuk-SME di The Asset Triple A Islamic Finance Awards 2026 di Kuala Lumpur, berkat penerbitan sukuk syariah Rp1,75 triliun untuk mendanai UMKM.",
  "date": "27 Agustus 2026",
  "image": "assets/img/pegadaian-raih-penghargaan-sukuk-syariah-di-kuala-lumpur.jpg",
  "imageV": "mtbqd62p",
  "tags": [
   "Pegadaian",
   "Sukuk Syariah",
   "UMKM",
   "Kuala Lumpur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463026-diakui-di-kancah-internasional-pegadaian-sabet-penghargaan-best-sukuk-sme-di-kuala-lumpur"
 },
 {
  "slug": "agar-penjualan-ke-satu-pelanggan-capai-75-9-dari-total",
  "category": "Aksi Korporasi",
  "title": "AGAR: Penjualan ke Satu Pelanggan Capai [75,9%] dari Total",
  "deck": "AGAR menjawab permintaan penjelasan Bursa soal rencana pengambilalihan, kinerja keuangan, dan ketergantungan pada satu pelanggan besar.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGAR",
   "pengambilalihan",
   "arus kas",
   "konsentrasi pelanggan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/69c9f563a7_ae0100f573.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpii-jelaskan-ke-bei-lonjakan-transaksi-saham-20-agustus",
  "category": "Aksi Korporasi",
  "title": "BPII Jelaskan ke BEI [Lonjakan] Transaksi Saham 20 Agustus",
  "deck": "BPII menjawab permintaan penjelasan BEI setelah volume transaksi sahamnya melonjak lebih dari empat kali lipat dan harga naik 2,41 persen pada 20 Agustus 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPII",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/344f84a595_1476b646a1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "diskon-ongkos-e-commerce-umkm-tinggal-tunggu-integrasi-sistem",
  "category": "UMKM",
  "title": "Diskon Ongkos E-Commerce UMKM Tinggal Tunggu [Integrasi] Sistem",
  "deck": "Menteri UMKM Maman Abdurrahman menyebut diskon 50 persen biaya layanan e-commerce bagi UMK sudah 95 persen siap, tinggal menunggu jadwal integrasi sistem Sapa UMKM.",
  "date": "27 Agustus 2026",
  "image": "assets/img/diskon-ongkos-e-commerce-umkm-tinggal-tunggu-integrasi-sistem.jpg",
  "imageV": "mtbqd72u",
  "tags": [
   "umkm",
   "e-commerce",
   "maman abdurrahman",
   "sapa umkm"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462981-menteri-umkm-sebut-diskon-50-persen-biaya-e-commerce-bagi-umk-tunggu-jadwal-integrasi"
 },
 {
  "slug": "bbrm-batalkan-kontrak-kapal-psv-senilai-us-22-juta",
  "category": "Aksi Korporasi",
  "title": "BBRM [Batalkan] Kontrak Kapal PSV Senilai US$22 Juta",
  "deck": "Perjanjian pembangunan satu kapal Platform Supply Vessel dengan galangan asal China dibatalkan karena syarat pendahuluan tak terpenuhi dalam 90 hari, sebelum ada dana yang dibayarkan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRM",
   "pelayaran",
   "kapal PSV",
   "shipping"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/37583a07c3_60df18944c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bkdp-masuk-daftar-pemantauan-khusus-bei-mulai-28-agustus-2026",
  "category": "Aksi Korporasi",
  "title": "BKDP Masuk Daftar [Pemantauan Khusus] BEI Mulai 28 Agustus 2026",
  "deck": "BEI menetapkan saham BKDP, Bukit Darmo Property Tbk, masuk kategori pemantauan khusus di Papan Pengembangan, efektif 28 Agustus 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKDP",
   "Bursa Efek Indonesia",
   "pemantauan khusus",
   "watchlist saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c8d91b1687_76b1d37702.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-mekaar-bantu-ao-ubah-nasib-keluarga-nelayan",
  "category": "UMKM",
  "title": "PNM Mekaar Bantu AO [Ubah] Nasib Keluarga Nelayan",
  "deck": "Account Officer PNM Mekaar, Tika Wulandari, menyisihkan penghasilannya untuk keluarga hingga membelikan perahu bagi sang ayah, mantan buruh kapal orang lain.",
  "date": "27 Agustus 2026",
  "image": "assets/img/pnm-mekaar-bantu-ao-ubah-nasib-keluarga-nelayan.jpg",
  "imageV": "mtbqd7y9",
  "tags": [
   "PNM",
   "UMKM",
   "nelayan",
   "lapangan kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462931-dari-penghasilan-menjadi-harapan-pnm-bantu-tika-gerakkan-ekonomi-keluarga-hingga-buka-lapangan-kerja"
 },
 {
  "slug": "banggar-dpr-soroti-banyak-typo-rapbn-2027",
  "category": "Makroekonomi",
  "title": "Banggar DPR Soroti Banyak [Typo] RAPBN 2027",
  "deck": "Banggar DPR temukan sejumlah kesalahan angka di dokumen RAPBN 2027, dari target pertumbuhan ekonomi hingga anggaran Makan Bergizi Gratis yang beda hingga Rp240 triliun.",
  "date": "27 Agustus 2026",
  "image": "assets/img/banggar-dpr-soroti-banyak-typo-rapbn-2027.jpg",
  "imageV": "mtbqd8rz",
  "tags": [
   "RAPBN 2027",
   "Banggar DPR",
   "MBG",
   "Purbaya Yudhi Sadewa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462923-banggar-dpr-soroti-banyak-typo-rapbn-2027-dari-target-pertumbuhan-hingga-anggaran-mbg"
 },
 {
  "slug": "lpg-3-kg-bakal-dibatasi-berdasarkan-desil-kesejahteraan",
  "category": "Energi",
  "title": "LPG 3 Kg Bakal Dibatasi Berdasarkan [Desil] Kesejahteraan",
  "deck": "ESDM mulai membahas pembatasan pembeli LPG 3 kilogram bersubsidi berdasarkan data desil kesejahteraan bersama BPS dan Pertamina, menyusul arahan hasil pertemuan dengan Kementerian Keuangan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/lpg-3-kg-bakal-dibatasi-berdasarkan-desil-kesejahteraan.jpg",
  "imageV": "mtb0rsr7",
  "tags": [
   "LPG 3 kg",
   "subsidi energi",
   "ESDM",
   "desil kesejahteraan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462865-lpg-3-kg-tak-lagi-bebas-dibeli-esdm-siapkan-batas-penerima-berdasarkan-desil-kesejahteraan"
 },
 {
  "slug": "ihsg-dibuka-melemah-tertekan-sentimen-minyak-dan-hormuz",
  "category": "Pasar Modal",
  "title": "IHSG Dibuka [Melemah], Tertekan Sentimen Minyak dan Hormuz",
  "deck": "IHSG dibuka turun 15 poin ke 6.390 pada Kamis, tertekan sentimen harga minyak dan perkembangan Selat Hormuz, sementara pasar juga menanti laporan keuangan Nvidia.",
  "date": "27 Agustus 2026",
  "image": "assets/img/lantai-bursa-sepi.jpg",
  "tags": [
   "IHSG",
   "Selat Hormuz",
   "harga minyak",
   "bursa saham"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462866-ihsg-dibuka-merah-investor-dibayangi-harga-minyak-hingga-ketegangan-selat-hormuz"
 },
 {
  "slug": "pbsa-panggil-rupslb-bahas-stock-split-saham-rasio-1-2",
  "category": "Aksi Korporasi",
  "title": "PBSA Panggil RUPSLB, Bahas [Stock Split] Saham Rasio 1:2",
  "deck": "RUPSLB PBSA pada 18 September 2026 akan membahas pemecahan nilai nominal saham dari Rp50 menjadi Rp25 per saham dengan rasio 1:2, serta penyesuaian anggaran dasar terkait modal.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PBSA",
   "stock split",
   "RUPSLB",
   "Paramita Bangun Sarana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5cb6b5099d_1a993c73a3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-hari-ini-turun-rp27-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam Hari Ini [Turun] Rp27.000 per Gram",
  "deck": "Harga jual emas batangan Antam turun ke Rp2.723.000 per gram pada 27 Agustus 2026, harga buyback ikut melemah ke Rp2.583.000 per gram.",
  "date": "27 Agustus 2026",
  "image": "assets/img/emas-batangan.jpg",
  "tags": [
   "emas antam",
   "harga emas",
   "buyback emas",
   "logam mulia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462860-harga-emas-antam-hari-ini-27-agustus-2026-merosot-rp27000-buyback-ikut-turun"
 },
 {
  "slug": "vico-gelar-rupslb-bahas-pembagian-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "VICO Gelar RUPSLB, Bahas Pembagian [Dividen] Tunai",
  "deck": "PT Victoria Investama Tbk (VICO) mengundang pemegang saham ke RUPSLB 18 September 2026 untuk menyetujui pembagian sebagian laba ditahan sebagai dividen tunai.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "RUPSLB",
   "dividen",
   "Victoria Investama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/baab9c4934_0e386963dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peringkat-utang-ptpp-anjlok-ke-idbb-sebelum-rupo-obligasi",
  "category": "Aksi Korporasi",
  "title": "Peringkat Utang PTPP [Anjlok] ke idBB Sebelum RUPO Obligasi",
  "deck": "Pefindo memangkas peringkat PTPP dari idBBB+ ke idBB dengan status CreditWatch negatif, menyusul rencana restrukturisasi kupon dan jatuh tempo obligasi serta sukuk yang masih beredar.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "Peringkat Utang",
   "Restrukturisasi Obligasi",
   "Pefindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/973a356dc2_f16e149cf7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pjhb-jawab-bursa-akui-tak-ada-info-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "PJHB Jawab Bursa, Akui Tak Ada Info di Balik [Volatilitas] Saham",
  "deck": "Menjawab surat BEI soal lonjakan transaksi sahamnya, PJHB menyatakan tidak ada informasi material yang belum diungkapkan dan pemegang saham pengendali tak berencana ubah kepemilikan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PJHB",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/44d68e53e1_fd823a5dcd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-jadwalkan-delisting-20-waran-terstruktur-seri-t-33",
  "category": "Aksi Korporasi",
  "title": "DR Jadwalkan [Delisting] 20 Waran Terstruktur Seri T-33",
  "deck": "RHB Sekuritas (DR) umumkan penghentian perdagangan, pelaksanaan otomatis, dan delisting 20 waran terstruktur penerbitan ke-33 pada 9-15 September 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas Indonesia",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/571c9a883c_84a2188e78.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-konfirmasi-tak-ada-informasi-material-di-balik-volatilitas",
  "category": "Aksi Korporasi",
  "title": "PART Konfirmasi Tak Ada Informasi Material di Balik [Volatilitas]",
  "deck": "Menjawab permintaan BEI soal lonjakan volatilitas transaksi, PART menyatakan tidak ada info material dan pemegang saham utama tak berencana ubah kepemilikan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5cc77402c6_1e24425c6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-lunasi-obligasi-dan-sukuk-rp2-49-triliun-pelunasan",
  "category": "Aksi Korporasi",
  "title": "INKP Lunasi Obligasi dan Sukuk Rp2,49 Triliun [Pelunasan]",
  "deck": "Indah Kiat Pulp & Paper melunasi pokok obligasi dan sukuk mudharabah senilai total Rp2,49 triliun kepada pemegang efek pada 26 Agustus 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk mudharabah",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/05a9f95dfb_ef45c8a4b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nice-ganti-susunan-direksi-dan-komisaris-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "NICE ganti susunan [Direksi] dan Komisaris usai RUPSLB",
  "deck": "RUPSLB 26 Agustus 2026 menetapkan Chang Pyo Hong sebagai Direktur Utama baru dan merombak penuh susunan Direksi serta Dewan Komisaris NICE hingga RUPST 2028.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "Direksi",
   "RUPSLB",
   "Tambang Nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/afae5e7a1f_549b500c05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iapi-usulkan-satu-standar-asurans-keberlanjutan",
  "category": "Pasar Modal",
  "title": "IAPI Usulkan [Satu] Standar Asurans Keberlanjutan",
  "deck": "IAPI mendorong satu standar internasional untuk audit laporan keberlanjutan di Indonesia, seiring OJK menyiapkan aturan wajib pengungkapannya.",
  "date": "26 Agustus 2026",
  "image": "assets/img/iapi-usulkan-satu-standar-asurans-keberlanjutan.jpg",
  "imageV": "mtb0rt8r",
  "tags": [
   "IAPI",
   "asurans keberlanjutan",
   "greenwashing",
   "OJK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462806-cegah-greenwashing-iapi-usulkan-satu-standar-asurans-keberlanjutan-di-indonesia"
 },
 {
  "slug": "lomba-lari-sez-industropolis-run-2026-digelar-di-kek-batang",
  "category": "Bisnis",
  "title": "Lomba Lari [SEZ Industropolis Run] 2026 Digelar di KEK Batang",
  "deck": "SEZ Industropolis Run 2026 digelar 6 Desember di KEK Batang, menyasar 2.626 pelari dengan lintasan tersertifikasi AIMS dan atlet nasional turut berkompetisi di kawasan industri tepi Laut Jawa.",
  "date": "26 Agustus 2026",
  "image": "assets/img/lomba-lari-sez-industropolis-run-2026-digelar-di-kek-batang.jpg",
  "imageV": "mtb0rtp1",
  "tags": [
   "KEK Industropolis Batang",
   "SEZ Industropolis Run 2026",
   "lari maraton",
   "kawasan ekonomi khusus"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462801-sez-industropolis-run-2026-akan-digelar-suguhkan-pengalaman-lari-di-kawsan-industri-tepi-laut-jawa"
 },
 {
  "slug": "irse-2026-dibuka-ritel-didorong-genjot-teknologi",
  "category": "Bisnis",
  "title": "IRSE 2026 Dibuka, Ritel Didorong Genjot [Teknologi]",
  "deck": "Mendag Busan mengajak pelaku ritel memanfaatkan teknologi saat membuka IRSE 2026, di tengah konsumsi rumah tangga yang menyumbang 53,32 persen ekonomi nasional pada kuartal II 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/irse-2026-dibuka-ritel-didorong-genjot-teknologi.jpg",
  "imageV": "mtaavl05",
  "tags": [
   "ritel",
   "IRSE 2026",
   "konsumsi rumah tangga",
   "QRIS"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ikut-buka-irse-2026-mendag-busan-teknologi-tingkatkan-pengalaman-belanja-konsumen",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "esdm-kirim-48-genset-ke-tujuh-kabupaten-ntt-terdampak-gempa",
  "category": "Energi",
  "title": "ESDM Kirim [48] Genset ke Tujuh Kabupaten NTT Terdampak Gempa",
  "deck": "Kementerian ESDM mengirim 48 genset untuk fasilitas kesehatan darurat di tujuh kabupaten NTT yang terdampak gempa dan tsunami, sembari mendirikan sekitar 30 posko tanggap darurat.",
  "date": "26 Agustus 2026",
  "image": "assets/img/esdm-kirim-48-genset-ke-tujuh-kabupaten-ntt-terdampak-gempa.jpg",
  "imageV": "mtcquqmb",
  "tags": [
   "ESDM",
   "gempa NTT",
   "genset",
   "tanggap darurat"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dukungan-esdm-terus-mengalir-ke-ntt-48-genset-disiapkan-untuk-fasilitas-kesehatan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "wsbp-ratifikasi-tambah-plafon-konversi-utang-rp6-1-miliar",
  "category": "Aksi Korporasi",
  "title": "WSBP [Ratifikasi] Tambah Plafon Konversi Utang Rp6,1 Miliar",
  "deck": "WSBP mengajukan ratifikasi RUPS untuk menambah plafon konversi utang menjadi saham, menampung tagihan tambahan Rp6,1 miliar dari tiga kreditur dagang baru yang baru terverifikasi.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "PMTHMETD",
   "restrukturisasi utang",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5d1d1c0d91_11c644a0d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-jadwalkan-rupslb-pada-2-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "WSBP Jadwalkan [RUPSLB] pada 2 Oktober 2026",
  "deck": "Waskita Beton Precast mengumumkan RUPSLB digelar 2 Oktober 2026 di Jakarta, agenda lengkapnya baru akan diumumkan pertengahan September.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "RUPSLB",
   "Waskita Beton Precast",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/faa6f36c73_25d5251123.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-eco-runfest-2026-usung-tujuh-inisiatif-hijau",
  "category": "BUMN",
  "title": "Pertamina Eco RunFest 2026 Usung [Tujuh] Inisiatif Hijau",
  "deck": "Pertamina kembali menggelar Eco RunFest tahun ke-13 dengan tujuh inisiatif keberlanjutan, dan seluruh keuntungan tiket didonasikan penuh untuk program lingkungan.",
  "date": "26 Agustus 2026",
  "image": "assets/img/pertamina-eco-runfest-2026-usung-tujuh-inisiatif-hijau.jpg",
  "imageV": "mta5wg8b",
  "tags": [
   "Pertamina",
   "lingkungan",
   "sampah",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462746-pertamina-eco-runfest-2026-kembali-digelar-hadirkan-tujuh-inisiatif-keberlanjutan-lingkungan"
 },
 {
  "slug": "komdigi-sinar-mas-perluas-hub-digital-ke-10-kota",
  "category": "Teknologi",
  "title": "Komdigi-Sinar Mas [Perluas] Hub Digital ke 10 Kota",
  "deck": "Komdigi dan Sinar Mas Land memperluas Garuda Spark Innovation Hub ke 10 kota lewat skema kerja sama pemerintah-swasta untuk ekosistem digital.",
  "date": "26 Agustus 2026",
  "image": "assets/img/komdigi-sinar-mas-perluas-hub-digital-ke-10-kota.jpg",
  "imageV": "mta5wgwi",
  "tags": [
   "GSIH",
   "Komdigi",
   "Sinar Mas Land",
   "ekosistem digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462737-garuda-spark-innovation-hub-gsih-diperluas-ke-10-kota-sinar-mas-siap-dukung-ekosistem-digital-indonesia"
 },
 {
  "slug": "bbsi-panggil-rupslb-kedua-usul-komisaris-baru",
  "category": "Aksi Korporasi",
  "title": "BBSI Panggil RUPSLB Kedua, Usul [Komisaris] Baru",
  "deck": "Krom Bank (BBSI) menggelar RUPSLB kedua pada 3 September 2026 setelah rapat pertama gagal kuorum, mengusulkan dua calon komisaris baru dan perubahan anggaran dasar.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBSI",
   "RUPSLB",
   "Krom Bank",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/96d51fd2fd_62a6b8e594.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-panggil-rupslb-tegaskan-pemilik-baru-dan-direksi",
  "category": "Aksi Korporasi",
  "title": "MBSS Panggil RUPSLB, Tegaskan [Pemilik] Baru dan Direksi",
  "deck": "MBSS mengundang RUPSLB 17 September 2026 untuk membahas pergantian direksi-komisaris, penegasan pemegang saham baru PT Wibowo Group Capital, dan perubahan alamat kantor pusat.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "RUPSLB",
   "Pergantian Direksi",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7f3d446d91_752aeff95e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmry-bagikan-dividen-interim-rp100-per-saham",
  "category": "Aksi Korporasi",
  "title": "CMRY Bagikan [Dividen] Interim Rp100 per Saham",
  "deck": "Direksi Cisarua Mountain Dairy menetapkan dividen interim tunai Rp100 per saham untuk tahun buku 2026, dengan pembayaran dijadwalkan 18 September 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "dividen interim",
   "Cimory",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0374a36ff6_89b055f8a4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmry-bagikan-dividen-interim-rp100-per-saham-rp793-miliar",
  "category": "Aksi Korporasi",
  "title": "CMRY Bagikan Dividen Interim [Rp100] per Saham, Rp793 Miliar",
  "deck": "Direksi Cimory memutuskan membagikan dividen interim tahun buku 2026 senilai total Rp793,47 miliar, dibayarkan mulai 18 September 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "dividen interim",
   "Cimory",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/26fdb8e915_2120070314.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-saiko-pastikan-cuma-jalankan-tender-wajib-tak-ubah-saham",
  "category": "Aksi Korporasi",
  "title": "NAYZ: Saiko Pastikan Cuma Jalankan [Tender] Wajib, Tak Ubah Saham",
  "deck": "NAYZ menjawab permintaan BEI: tak ada info material baru selain perubahan pengendali, dan Saiko Consultancy tak berencana ubah kepemilikan saham kecuali penuhi penawaran tender wajib.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "volatilitas transaksi",
   "penawaran tender wajib",
   "Saiko Consultancy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3ace940e09_82befe1f2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gelar-rupsu-minta-penundaan-bayar-sukuk",
  "category": "Aksi Korporasi",
  "title": "WIKA Gelar RUPSU, Minta [Penundaan] Bayar Sukuk",
  "deck": "WIKA mengundang pemegang sukuknya ke RUPSU 15 September 2026 untuk menyetujui penundaan jatuh tempo dan pembayaran bagi hasil, serta pengesampingan gagal bayar bagi hasil ke-14.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7464230e2f_eb1b4c2f86.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-panggil-rupsu-15-september-ajukan-penundaan-jatuh-tempo-sukuk",
  "category": "Aksi Korporasi",
  "title": "WIKA Panggil RUPSU 15 September, Ajukan [Penundaan] Jatuh Tempo Sukuk",
  "deck": "WIKA memanggil RUPSU pada 15 September 2026 untuk meminta persetujuan pemegang sukuk mengubah jadwal jatuh tempo pokok dan menunda pembayaran bagi hasil seri B dan C.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/573f173c0b_3d30d38f79.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gelar-rupsu-sukuk-tahap-ii-minta-penundaan-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "WIKA Gelar RUPSU Sukuk Tahap II, Minta [Penundaan] Jatuh Tempo",
  "deck": "WIKA memanggil RUPSU pemegang Sukuk Tahap II pada 10 September 2026, minta penundaan jatuh tempo dan bagi hasil serta pengesampingan gagal bayar bagi hasil ke-14.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0a319778c4_aebaad234a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-lagi-ajukan-penundaan-bayar-sukuk-rupsu-9-september",
  "category": "Aksi Korporasi",
  "title": "WIKA [Lagi] Ajukan Penundaan Bayar Sukuk, RUPSU 9 September",
  "deck": "WIKA memanggil RUPSU untuk sukuk Berkelanjutan II Tahap I, meminta penundaan bagi hasil periode ke-20 dan ke-21 sekaligus perubahan jatuh tempo pokok.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/566d05e612_d4bfae210e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-komisaris-vivek-sood-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "EXCL: Komisaris Vivek Sood Ajukan [Pengunduran Diri]",
  "deck": "Vivek Sood mundur dari kursi Komisaris XLSMART Telecom Sejahtera, efektif setelah disetujui RUPS terdekat.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/be42b5f638_6fe95a5f61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcor-ralat-rupslb-recording-date-jadi-21-agustus",
  "category": "Aksi Korporasi",
  "title": "MCOR Ralat RUPSLB: Recording Date Jadi [21 Agustus]",
  "deck": "MCOR mengoreksi surat sebelumnya: pemegang saham yang berhak hadir di RUPSLB 15 September 2026 ditetapkan berdasarkan catatan kepemilikan per 21 Agustus 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "RUPSLB",
   "Bank CCB Indonesia",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f226a7df27_a8b7e7fdf9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdln-mayoritas-pemegang-notes-setujui-skema-restrukturisasi",
  "category": "Aksi Korporasi",
  "title": "MDLN: Mayoritas Pemegang Notes Setujui [Skema] Restrukturisasi",
  "deck": "PT Modernland Realty melaporkan skema restrukturisasi Notes disetujui mayoritas pemegang surat utang, tinggal menunggu persetujuan Pengadilan Tinggi Singapura.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLN",
   "restrukturisasi utang",
   "obligasi",
   "Modernland Realty"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/51045156a3_9694e9d2df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "euro-rombak-komite-audit-darren-nathaniel-tandra-jadi-ketua",
  "category": "Aksi Korporasi",
  "title": "EURO Rombak [Komite Audit], Darren Nathaniel Tandra Jadi Ketua",
  "deck": "Komite Audit EURO berganti ketua efektif 26 Agustus 2026: Darren Nathaniel Tandra menggantikan Andi Kurniawan Josdaan, sementara dua anggota lain tetap menjabat periode kedua.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EURO",
   "komite audit",
   "tata kelola perusahaan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/56d44943eb_07d4019716.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baut-terima-pinjaman-tanpa-bunga-rp44-79-miliar-dari-naf",
  "category": "Aksi Korporasi",
  "title": "BAUT Terima [Pinjaman] Tanpa Bunga Rp44,79 Miliar dari NAF",
  "deck": "Pemegang saham utama BAUT, NA Fasteners Pte Ltd, mengucurkan pinjaman US$2,5 juta tanpa bunga dan tanpa jaminan untuk modal kerja, setara 26 persen dari ekuitas perusahaan.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAUT",
   "transaksi afiliasi",
   "pinjaman pemegang saham",
   "NA Fasteners"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a50fe72ee5_6da96d59ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdmu-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "SDMU Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "SDMU menjawab surat BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada info material atau rencana aksi korporasi yang belum diungkap.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDMU",
   "Sidomulyo Selaras",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/be24f14895_86d598a021.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-jadwalkan-public-expose-insidentil-pada-28-agustus",
  "category": "Aksi Korporasi",
  "title": "CSMI Jadwalkan Public Expose [Insidentil] pada 28 Agustus",
  "deck": "PT Cipta Selera Murni Tbk (CSMI) menggelar public expose insidentil secara daring pada 28 Agustus 2026, membahas kinerja keuangan, rencana bisnis, dan pergerakan harga sahamnya.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "public expose",
   "pergerakan saham",
   "Cipta Selera Murni"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c24680a3f9_07d1cf76ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-soroti-gaji-31-000-karyawan-pos-indonesia",
  "category": "BUMN",
  "title": "DPR Soroti [Gaji] 31.000 Karyawan Pos Indonesia",
  "deck": "DPR menerima audiensi PT Pos Indonesia soal kepastian gaji 31.000 karyawan yang jatuh tempo 1 September, di tengah keuangan perusahaan yang terpuruk dan tagihan Kemensos yang belum cair.",
  "date": "26 Agustus 2026",
  "image": "assets/img/dpr-soroti-gaji-31-000-karyawan-pos-indonesia.jpg",
  "imageV": "mt9sq4cy",
  "tags": [
   "PT Pos Indonesia",
   "DPR",
   "BUMN",
   "gaji karyawan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462650-pimpinan-dpr-gelar-audiensi-bahas-nasib-pt-pos-indonesia-soroti-kepastian-gaji-31000-karyawan"
 },
 {
  "slug": "purbaya-pastikan-anggaran-karhutla-siap-cair",
  "category": "Makroekonomi",
  "title": "Purbaya Pastikan Anggaran Karhutla [Siap] Cair",
  "deck": "Menteri Keuangan Purbaya Yudhi Sadewa memastikan dana tambahan penanganan karhutla siap cair begitu BNPB mengajukan rincian kebutuhan biaya.",
  "date": "26 Agustus 2026",
  "image": "assets/img/purbaya-pastikan-anggaran-karhutla-siap-cair.jpg",
  "imageV": "mt9sq526",
  "tags": [
   "karhutla",
   "BNPB",
   "Kemenkeu",
   "anggaran bencana"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462648-purbaya-pastikan-siap-tambah-dana-untuk-atasi-karhutla"
 },
 {
  "slug": "wege-raih-kontrak-baru-rp775-miliar-naik-568-yoy",
  "category": "Aksi Korporasi",
  "title": "WEGE Raih [Kontrak] Baru Rp775 Miliar, Naik 568% YoY",
  "deck": "Kontrak baru WEGE per Agustus 2026 melonjak jadi Rp775 miliar, didominasi proyek pemerintah, di tengah rencana divestasi aset lebih dari Rp1 triliun untuk memperkuat likuiditas.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WEGE",
   "kontrak konstruksi",
   "BUMN karya",
   "divestasi aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a1d0310bfa_1cd8551fd3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbni-jadwalkan-public-expose-9-september-bahas-kinerja-q2",
  "category": "Aksi Korporasi",
  "title": "BBNI Jadwalkan [Public Expose] 9 September, Bahas Kinerja Q2",
  "deck": "Bank BNI akan menggelar Public Expose Live 2026 pada 9 September membahas kinerja kuartal II dan strategi perusahaan, dengan dua pejabat sebagai pembicara.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "Bank BNI",
   "Public Expose",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50a5040c66_957425e3eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-gelar-public-expose-tahunan-9-september-2026",
  "category": "Aksi Korporasi",
  "title": "ADHI Gelar [Public Expose] Tahunan 9 September 2026",
  "deck": "Adhi Karya akan memaparkan kinerja semester I 2026 dan strategi usaha dalam Public Expose Live pada 9 September 2026, di tengah sorotan gagal bayar kupon obligasi.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "Adhi Karya",
   "Public Expose",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/793357ec76_b1b9c075ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ypas-gelar-public-expose-insidentil-usai-diminta-bursa",
  "category": "Aksi Korporasi",
  "title": "YPAS Gelar [Public Expose] Insidentil usai Diminta Bursa",
  "deck": "Yanaprima Hastapersada akan menggelar public expose insidentil secara daring pada 28 Agustus 2026 setelah menerima surat dari unit pengawasan Bursa Efek Indonesia.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YPAS",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Yanaprima Hastapersada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c4f6df74eb_60de163d51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beer-jadwalkan-rupslb-pada-2-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BEER Jadwalkan [RUPSLB] pada 2 Oktober 2026",
  "deck": "PT Jobubu Jarum Minahasa Tbk (BEER) akan menggelar RUPSLB pada 2 Oktober 2026, dengan pemegang saham per 9 September 2026 yang berhak hadir dan memberi suara.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEER",
   "RUPSLB",
   "pasar modal",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bddbfbb9a7_65a48cfe91.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-jadwalkan-rupslb-pada-2-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "NAYZ Jadwalkan [RUPSLB] pada 2 Oktober 2026",
  "deck": "PT Hassana Boga Sejahtera Tbk (NAYZ) akan menggelar RUPSLB pada 2 Oktober 2026, dengan pemanggilan resmi berisi agenda lengkap terbit 10 September 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "RUPSLB",
   "Hassana Boga Sejahtera",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/76c83356de_9dbe9969eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cek-desil-kemensos-untuk-pastikan-status-bansos-anda",
  "category": "Makroekonomi",
  "title": "Cek [Desil] Kemensos untuk Pastikan Status Bansos Anda",
  "deck": "Desil dalam data DTSEN menentukan siapa berhak menerima PKH dan BPNT. Jika data dianggap tidak sesuai kondisi terkini, warga bisa mengajukan sanggah.",
  "date": "26 Agustus 2026",
  "image": "assets/img/cek-desil-kemensos-untuk-pastikan-status-bansos-anda.jpg",
  "imageV": "mt9o4a5m",
  "tags": [
   "bansos",
   "Kemensos",
   "DTSEN",
   "PKH"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462618-cek-desil-kemensos-untuk-tahu-dapat-bansos-atau-tidak-begini-cara-sanggah-jika-data-tidak-sesuai"
 },
 {
  "slug": "cars-jelaskan-ke-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "CARS Jelaskan ke BEI Soal [Volatilitas] Transaksi Saham",
  "deck": "CARS menjawab permintaan penjelasan BEI atas lonjakan transaksi sahamnya, menegaskan tidak ada informasi material dan belum ada pemegang saham pengendali per 31 Juli 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CARS",
   "Bintraco Dharma",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c127e4780f_c6b8f02659.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aegs-bantah-punya-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "AEGS Bantah Punya Info Material di Balik [Volatilitas] Saham",
  "deck": "Menjawab permintaan penjelasan Bursa Efek Indonesia, AEGS menyatakan tidak mengetahui fakta material di balik pergerakan harga sahamnya dan belum berencana melakukan aksi korporasi.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AEGS",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1ba3a23722_f7ee070276.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wins-beri-jaminan-perusahaan-us-12-juta-untuk-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "WINS Beri [Jaminan] Perusahaan US$12 Juta untuk Anak Usaha",
  "deck": "Wintermar Offshore Marine (WINS) menjamin fasilitas kredit US$12 juta dari Bank Shinhan Indonesia untuk anak usahanya, PT Wintermar, guna refinancing kapal dan modal kerja.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINS",
   "Wintermar Offshore Marine",
   "jaminan perusahaan",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/62a5a299ee_385a4bcd2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-mcor-junianto-tambah-kepemilikan-500-200-saham",
  "category": "Aksi Korporasi",
  "title": "[Direksi] MCOR: Junianto Tambah Kepemilikan 500.200 Saham",
  "deck": "Direksi MCOR, Junianto, menambah kepemilikan 500.200 saham secara tidak langsung seharga Rp68 per lembar untuk memenuhi ketentuan OJK bagi pengurus bank.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "kepemilikan saham",
   "direksi bank",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26082026-4227-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-vto-diperpanjang-partisipasi-publik-4-7",
  "category": "Aksi Korporasi",
  "title": "EDGE: VTO Diperpanjang, Partisipasi Publik [4,7%]",
  "deck": "Digital Edge Hong Kong memperpanjang tender saham EDGE hingga 22 September 2026, sementara hasil sementara dua periode pertama menunjukkan baru 4,7 persen saham publik yang ikut serta.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "Indointernet",
   "VTO",
   "Digital Edge Hong Kong"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5ec4779748_2386f08b9c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-tipis-ke-rp17-695-ikuti-asia",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Tipis ke Rp17.695, Ikuti Asia",
  "deck": "Rupiah naik 28 poin ke Rp17.695 per dolar AS, sejalan dengan penguatan mayoritas mata uang Asia, sementara euro dan poundsterling melemah.",
  "date": "26 Agustus 2026",
  "image": "assets/img/brankas-uang-sentral.jpg",
  "tags": [
   "rupiah",
   "kurs dolar",
   "mata uang asia",
   "nilai tukar"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462595-rupiah-kembali-menguat-tembus-rp17695-per-dolar-as-di-tengah-penguatan-mata-uang-asia"
 },
 {
  "slug": "adhi-koreksi-penundaan-bunga-obligasi-kupon-menumpuk-juli-2027",
  "category": "Aksi Korporasi",
  "title": "ADHI Koreksi Penundaan Bunga Obligasi, [Kupon] Menumpuk Juli 2027",
  "deck": "BEI mengoreksi pengumuman restrukturisasi obligasi ADHI, menegaskan hasil RUPO 6 Agustus 2026 untuk seri ADHI04CN1 senilai Rp102,715 miliar, dengan dua jadwal kupon bergeser ke 9 Juli 2027.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "restrukturisasi utang",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2acab768c2_d8b3f14977.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-tembus-6-500-langsung-ambruk-1-dalam-4-menit",
  "category": "Pasar Modal",
  "title": "IHSG Tembus 6.500, Langsung [Ambruk] 1% dalam 4 Menit",
  "deck": "IHSG dibuka menguat tipis ke 6.507, namun anjlok 1,05% hanya empat menit kemudian di tengah mayoritas saham yang melemah.",
  "date": "26 Agustus 2026",
  "image": "assets/img/ruang-rapat-kaca-bursa.jpg",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "LQ45",
   "Pasar Saham"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462591-ihsg-kembali-ke-6500-tapi-langsung-ambruk-1-di-awal-perdagangan"
 },
 {
  "slug": "mglv-pemegang-mayoritas-lepas-69-juta-saham-rp500-m",
  "category": "Aksi Korporasi",
  "title": "MGLV: Pemegang Mayoritas [Lepas] 69 Juta Saham Rp500 M",
  "deck": "Putra Batee melepas 68,99 juta lembar saham PT Panca Anugrah Wisesa (MGLV) senilai sekitar Rp500,16 miliar, hak suaranya turun dari 71,28% menjadi 67,66% namun tetap mayoritas.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "kepemilikan saham",
   "pemegang saham mayoritas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26082026-0345-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kuas-bantah-ada-informasi-material-di-balik-volatilitas-transaksi",
  "category": "Aksi Korporasi",
  "title": "KUAS Bantah Ada Informasi Material di Balik [Volatilitas] Transaksi",
  "deck": "Merespons permintaan Bursa Efek Indonesia, PT Ace Oldfields Tbk menyatakan tidak ada informasi material maupun rencana aksi korporasi yang memicu volatilitas transaksi sahamnya belakangan ini.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KUAS",
   "Ace Oldfields",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/823c5d6b05_041fddd940.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-pangan-26-agustus-daging-sapi-rp152-650-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 26 Agustus, Daging Sapi [Rp152.650] per Kg",
  "deck": "PIHPS Bank Indonesia merilis harga pangan nasional 26 Agustus 2026, dari daging sapi, cabai, beras, hingga minyak goreng.",
  "date": "26 Agustus 2026",
  "image": "assets/img/harga-pangan-26-agustus-daging-sapi-rp152-650-per-kg.jpg",
  "imageV": "mt9o4awv",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "daging sapi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462585-harga-pangan-hari-ini-26-agustus-2026-daging-sapi-mulai-rp152650-per-kilogram-hingga-telur-rp28800-per-kilogram"
 },
 {
  "slug": "alto-kena-sanksi-bei-telat-serahkan-laporan-keuangan-q2",
  "category": "Aksi Korporasi",
  "title": "ALTO Kena [Sanksi] BEI, Telat Serahkan Laporan Keuangan Q2",
  "deck": "Tri Banyan Tirta belum menyampaikan laporan keuangan interim per 30 Juni 2026 hingga tenggat 31 Juli 2026 dan dikenai Peringatan Tertulis I oleh BEI.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALTO",
   "sanksi BEI",
   "laporan keuangan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a991dde158_0db0619a5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-rp18-000-ke-rp2-750-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Rp18.000 ke Rp2.750.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp18.000 menjadi Rp2.750.000 per gram, sementara harga buyback ikut melemah ke Rp2.610.000 per gram.",
  "date": "26 Agustus 2026",
  "image": "assets/img/investor-ritel-ponsel.jpg",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462577-harga-emas-antam-hari-ini-26-agustus-2026-terpantau-turun-rp18000-jadi-rp2750000-per-gram"
 },
 {
  "slug": "ketr-tender-sukarela-rp523-diperpanjang-hingga-18-september",
  "category": "Aksi Korporasi",
  "title": "KETR: Tender Sukarela [Rp523] Diperpanjang hingga 18 September",
  "deck": "IMBS memperpanjang tender sukarela saham KETR periode ketiga hingga 18 September 2026 di harga Rp523, setelah belum ada saham yang ditawarkan untuk dijual.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "tender offer",
   "Ketrosden Triasmitra",
   "IMBS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c0c152cbf2_0308708b69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "askrindo-jamin-512-proyek-strategis-rp261-9-triliun",
  "category": "BUMN",
  "title": "Askrindo Jamin [512] Proyek Strategis Rp261,9 Triliun",
  "deck": "Askrindo mencatat dukungan asuransi dan penjaminan untuk 512 proyek strategis dan keamanan nasional senilai Rp261,9 triliun per Desember 2025, termasuk 16 proyek PSN.",
  "date": "26 Agustus 2026",
  "image": "assets/img/askrindo-jamin-512-proyek-strategis-rp261-9-triliun.jpg",
  "imageV": "mt9hfype",
  "tags": [
   "Askrindo",
   "PSN",
   "UMKM",
   "KUR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462576-askrindo-dukung-512-proyek-strategis-dan-perkuat-umkm-nasional"
 },
 {
  "slug": "swid-perkuat-bisnis-hospitality-di-yogyakarta",
  "category": "Aksi Korporasi",
  "title": "SWID Perkuat Bisnis [Hospitality] di Yogyakarta",
  "deck": "SWID membuka hotel bintang lima The Royal Alana dan memulai pembangunan ballroom INNSiDE by Meliá di Yogyakarta, dengan proyeksi pendapatan gabungan naik hingga 50 persen dari kondisi saat ini.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWID",
   "hospitality",
   "Yogyakarta",
   "MICE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/35ebe7bd6f_88a604965b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-proyeksikan-laba-melonjak-dari-akuisisi-gas-skema-belum-final",
  "category": "Aksi Korporasi",
  "title": "PIPA Proyeksikan Laba [Melonjak] dari Akuisisi Gas, Skema Belum Final",
  "deck": "Oxala Energy International (PIPA) mengklaim laba bersihnya bakal melonjak dari rencana akuisisi perusahaan pengolahan gas alam, meski skema, nilai transaksi, dan identitas target belum diungkap.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "akuisisi",
   "gas alam",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b31c16e316_ae3c50ed6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meja-siapkan-right-issue-untuk-akuisisi-trimata-coal-perkasa",
  "category": "Aksi Korporasi",
  "title": "MEJA Siapkan [Right Issue] untuk Akuisisi Trimata Coal Perkasa",
  "deck": "RUPSLB MEJA menaikkan modal dasar ke Rp208,6 miliar, membuka jalan bagi rencana jadi holding company dan akuisisi tambang batu bara TCP lewat right issue.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "right issue",
   "akuisisi tambang",
   "holding company"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/050302a857_92cbe58be4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hexa-gelar-rupst-lb-17-september-ubah-pasal-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "HEXA Gelar RUPST-LB 17 September, [Ubah] Pasal Anggaran Dasar",
  "deck": "Hexindo Adiperkasa mengundang pemegang saham ke RUPST dan RUPSLB pada 17 September 2026, salah satu agendanya mengubah Pasal 3 Anggaran Dasar mengikuti KBLI 2025.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEXA",
   "RUPS",
   "Hexindo Adiperkasa",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/043562b9a1_246d4457c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-klarifikasi-akuisisi-10-86-saham-btel",
  "category": "Aksi Korporasi",
  "title": "PRTL Klarifikasi Akuisisi [10,86%] Saham BTEL",
  "deck": "Protelindo menegaskan kepemilikan saham Bakrie Telecom berasal dari konversi obligasi wajib konversi 2014, bukan pembelian kembali seperti disebut media.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "BTEL",
   "Klarifikasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/eec024f060_95767b7df7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-12-6-gw-listrik-ri-masih-pakai-solar",
  "category": "Energi",
  "title": "Bahlil: 12,6 GW Listrik RI Masih Pakai [Solar]",
  "deck": "Menteri ESDM Bahlil Lahadalia ungkap 12,6 GW pembangkit listrik nasional masih berbahan bakar solar, pemerintah percepat PLTS 100 GWp untuk tekan impor BBM.",
  "date": "25 Agustus 2026",
  "image": "assets/img/bahlil-12-6-gw-listrik-ri-masih-pakai-solar.jpg",
  "imageV": "mt8q7mn1",
  "tags": [
   "PLTS",
   "solar",
   "ESDM",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462484-gaspol-plts-100-gwp-bahlil-ungkap-126-gw-listrik-indonesia-masih-pakai-solar"
 },
 {
  "slug": "pemerintah-luncurkan-tahap-awal-plts-100-gwp-di-6-provinsi",
  "category": "Energi",
  "title": "Pemerintah Luncurkan Tahap Awal [PLTS] 100 GWp di 6 Provinsi",
  "deck": "Program PLTS 100 GWp dimulai dengan 14 proyek berkapasitas 5,3 GWp di enam provinsi, dari Bali hingga pulau terpencil di Bangka Belitung.",
  "date": "25 Agustus 2026",
  "image": "assets/img/pemerintah-luncurkan-tahap-awal-plts-100-gwp-di-6-provinsi.jpg",
  "imageV": "mt8l5ku9",
  "tags": [
   "PLTS",
   "energi surya",
   "ESDM",
   "Bali"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dari-gilimanuk-hingga-pulau-rengit-program-plts-100-gwp-dorong-kemandirian-energi-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bahlil-klaim-plts-100-gwp-buka-5-52-juta-lapangan-kerja",
  "category": "Energi",
  "title": "Bahlil Klaim PLTS 100 GWp Buka [5,52 Juta] Lapangan Kerja",
  "deck": "Menteri ESDM Bahlil Lahadalia mengklaim proyek PLTS 100 GWp bisa menghemat subsidi energi Rp73,9 triliun per tahun dan membuka 5,52 juta lapangan kerja.",
  "date": "25 Agustus 2026",
  "image": "assets/img/bahlil-klaim-plts-100-gwp-buka-5-52-juta-lapangan-kerja.jpg",
  "imageV": "mt8l5lie",
  "tags": [
   "PLTS",
   "Bahlil Lahadalia",
   "subsidi energi",
   "lapangan kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462441-bahlil-klaim-bisa-hemat-rp739-triliun-dan-buka-552-juta-lapangan-kerja-lewat-plts-100-gwp"
 },
 {
  "slug": "arko-rampungkan-akuisisi-100-saham-endorshine-energy",
  "category": "Aksi Korporasi",
  "title": "ARKO Rampungkan [Akuisisi] 100% Saham Endorshine Energy",
  "deck": "Dua anak usaha Arkora Hydro, PT Arkora Tenaga Matahari dan PT Arjuna Hidro, resmi menguasai 100% saham PT Endorshine Energy Solution setelah mendapat persetujuan Kementerian Hukum.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "akuisisi",
   "Arkora Hydro",
   "energi terbarukan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50c8be6b31_d31059f7b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jpfa-komisaris-utama-syamsir-siregar-wafat",
  "category": "Aksi Korporasi",
  "title": "JPFA: Komisaris Utama Syamsir Siregar [Wafat]",
  "deck": "JAPFA Comfeed melaporkan wafatnya Komisaris Utama H. Syamsir Siregar pada 25 Agustus 2026; susunan baru Dewan Komisaris akan ditetapkan di RUPS terdekat.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "JAPFA Comfeed",
   "Dewan Komisaris",
   "Komisaris Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b9cd126697_994f8d0e24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-tanggapi-suspensi-saham-rupo-obligasi-gagal-kuorum",
  "category": "Aksi Korporasi",
  "title": "ADHI Tanggapi [Suspensi] Saham, RUPO Obligasi Gagal Kuorum",
  "deck": "ADHI menghormati suspensi saham oleh BEI akibat gagal bayar bunga obligasi Rp60,8 miliar. RUPO 6 Agustus untuk menunda pembayaran belum mencapai kuorum, rapat lanjutan digelar 11 September 2026.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "suspensi saham",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/fa1ece8178_7c638e5ee5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-lagi-jadi-rp2-768-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Lagi Jadi Rp2.768.000 per Gram",
  "deck": "Harga emas batangan Antam naik Rp18.000 menjadi Rp2.768.000 per gram hari ini, sementara harga beli kembali juga naik ke Rp2.628.000 per gram.",
  "date": "25 Agustus 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "emas",
   "harga emas",
   "antam"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462306-harga-emas-antam-hari-ini-25-agustus-2026-naik-lagi-harganya-jadi-rp2768000-per-gram"
 },
 {
  "slug": "umkm-sawit-didorong-tembus-pasar-ekspor",
  "category": "UMKM",
  "title": "UMKM Sawit Didorong [Tembus] Pasar Ekspor",
  "deck": "INDEF menilai hilirisasi kelapa sawit membuka peluang UMKM naik kelas ke pasar ekspor, yang kontribusinya masih tertahan di sekitar 15 persen.",
  "date": "25 Agustus 2026",
  "image": "assets/img/umkm-sawit-didorong-tembus-pasar-ekspor.jpg",
  "imageV": "mt81u6c2",
  "tags": [
   "kelapa sawit",
   "UMKM",
   "ekspor",
   "hilirisasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462302-indef-dorong-produk-sawit-indonesia-tembus-pasar-ekspor"
 },
 {
  "slug": "avia-kantongi-peringkat-esg-1-dari-sustainalytics-di-antara-peer",
  "category": "Aksi Korporasi",
  "title": "AVIA Kantongi Peringkat [ESG] #1 dari Sustainalytics di Antara Peer",
  "deck": "Avia Avian mencatat ESG Risk Rating 16,9 per 30 Juni 2026, turun dari 21,3 pada September 2025, dan menempati peringkat pertama di antara emiten sekelas kapitalisasi pasar.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "ESG",
   "Sustainalytics",
   "Avian Brands"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9e824d5796_e6b03b6691.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "komunitas-trader-indonesia-kumpul-di-tradependence-day-2026",
  "category": "Pasar Modal",
  "title": "Komunitas [Trader] Indonesia Kumpul di Tradependence Day 2026",
  "deck": "JUNO dan Minerva Media Markets menggelar Tradependence Day 2026 di Jakarta, menyatukan trader ritel dan sembilan komunitas trading di bawah tema \"No Random Move\".",
  "date": "25 Agustus 2026",
  "image": "assets/img/komunitas-trader-indonesia-kumpul-di-tradependence-day-2026.jpg",
  "imageV": "mt81u70v",
  "tags": [
   "trading",
   "JUNO",
   "komunitas trader",
   "Tradependence Day"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462270-bukan-cuma-soal-profit-ini-tantangan-baru-yang-dihadapi-trader-di-pasar-yang-makin-cepat"
 },
 {
  "slug": "visi-ubah-bisnis-jadi-holding-rencana-kuasai-72-91-saham-hmbc",
  "category": "Aksi Korporasi",
  "title": "VISI Ubah Bisnis Jadi Holding, Rencana Kuasai 72,91% Saham [HMBC]",
  "deck": "VISI menandatangani perjanjian bersyarat untuk mengambil alih 72,91% saham rumah sakit di Cirebon, HMBC, sekaligus mengubah kegiatan usaha menjadi perusahaan induk.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "akuisisi",
   "HMBC",
   "rumah sakit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/792f051fc3_971a93e39f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-siapkan-private-placement-10-saham-untuk-masuk-kesehatan",
  "category": "Aksi Korporasi",
  "title": "VISI Siapkan Private Placement 10% Saham untuk Masuk [Kesehatan]",
  "deck": "Satu Visi Putra berencana menerbitkan hingga 307,5 juta saham baru tanpa hak memesan efek terlebih dahulu untuk memperkuat modal sekaligus menjadi holding perusahaan sektor kesehatan.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "private placement",
   "PMTHMETD",
   "sektor kesehatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d8576b1c05_342fd0ce28.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-jadwalkan-rups-independen-pada-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "VISI Jadwalkan RUPS [Independen] pada 30 September 2026",
  "deck": "Satu Visi Putra menjadwalkan RUPSLB dan RUPS Independen pada 30 September 2026, dengan pendaftaran pemegang saham ditutup 7 September dan pemanggilan resmi 8 September 2026.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "RUPS Independen",
   "Satu Visi Putra",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c528e5f292_23487cdd41.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pendapatan-finpay-danantara-melesat-41-3-persen",
  "category": "BUMN",
  "title": "Pendapatan Finpay Danantara [Melesat] 41,3 Persen",
  "deck": "PT Finnet Indonesia (Finpay) mencatat pendapatan eksternal Rp914,5 miliar pada semester I 2026, naik 41,3 persen dibanding tahun sebelumnya di tengah sinergi dengan Danantara Indonesia.",
  "date": "24 Agustus 2026",
  "image": "assets/img/pendapatan-finpay-danantara-melesat-41-3-persen.jpg",
  "imageV": "mt7vg0zr",
  "tags": [
   "Finpay",
   "Danantara Indonesia",
   "BUMN",
   "Fintech"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462247-pertumbuhan-melesat-finpay-komitmen-akselerasi-bersama-danantara-indonesia"
 },
 {
  "slug": "beef-klarifikasi-lonjakan-saham-bantah-rumor-akuisisi-korea",
  "category": "Aksi Korporasi",
  "title": "BEEF Klarifikasi Lonjakan Saham, Bantah Rumor [Akuisisi] Korea",
  "deck": "Public expose insidentil BEEF usai suspensi cooling down BEI: manajemen bantah ada informasi material tersembunyi, juga bantah rumor akuisisi oleh perusahaan Korea.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "suspensi saham",
   "rumor akuisisi",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2468fdfb8e_a0106f0da3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-rilis-direksi-dsi-bos-freeport-jadi-komisaris",
  "category": "BUMN",
  "title": "Danantara Rilis Direksi [DSI], Bos Freeport Jadi Komisaris",
  "deck": "Danantara resmi mengumumkan direksi dan komisaris PT Danantara Sumber Daya Indonesia (DSI), entitas baru pengawas tata kelola ekspor batu bara, sawit, dan ferro alloy hingga akhir 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/pesawat-bandara.jpg",
  "tags": [
   "Danantara",
   "PT DSI",
   "ekspor SDA",
   "Freeport Indonesia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462232-danantara-umumkan-daftar-direksi-dan-komisaris-dsi-ada-bos-freeport-indonesia"
 },
 {
  "slug": "emas-komisaris-xinyu-wang-jual-500-000-saham-divestasi",
  "category": "Aksi Korporasi",
  "title": "EMAS: Komisaris Xinyu Wang Jual 500.000 Saham [Divestasi]",
  "deck": "Komisaris EMAS Xinyu Wang melepas 500.000 saham senilai sekitar Rp3,94 miliar pada 20 Agustus 2026, setara 34 persen dari kepemilikannya sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "kepemilikan saham",
   "komisaris",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-9163-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-anak-usaha-teken-perjanjian-peralatan-dengan-vision-green",
  "category": "Aksi Korporasi",
  "title": "EMAS: Anak Usaha Teken Perjanjian [Peralatan] dengan Vision Green",
  "deck": "Anak usaha EMAS, PT Pani Industri Nusantara, menandatangani perjanjian jual beli peralatan dan jasa konsultasi dengan perusahaan Tiongkok Vision Green Energy, efektif 21 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Transaksi Material",
   "Pani Gold Project",
   "Vision Green Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/42bab47906_f3a55220f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kras-jadwal-rupslb-diundur-ke-7-september-2026",
  "category": "Aksi Korporasi",
  "title": "KRAS [Jadwal] RUPSLB Diundur ke 7 September 2026",
  "deck": "Krakatau Steel menunda RUPSLB dari 26 Agustus ke 7 September 2026, dengan agenda perubahan aturan dana pensiun, anggaran dasar, dan susunan pengurus.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRAS",
   "RUPSLB",
   "Krakatau Steel",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1ba2d32c91_71d936f3fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-jadwalkan-rupslb-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "ADHI Jadwalkan RUPSLB [30 September 2026]",
  "deck": "PT Adhi Karya menjadwalkan RUPSLB pada 30 September 2026 pukul 14.00 WIB di Jakarta; mata acara resmi baru diumumkan 8 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "RUPSLB",
   "Adhi Karya",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/68acf1f28b_a19eb9bf98.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psgo-tanggapi-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PSGO Tanggapi Bursa soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Palma Serasih menyatakan tak mengetahui informasi material apa pun yang menjelaskan pergerakan tak biasa sahamnya, menyusul permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "Palma Serasih",
   "Bursa Efek Indonesia",
   "Volatilitas Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/490b923537_44a83c3280.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-koreksi-rupslb-ekspansi-ke-bisnis-baja-dan-tambak-udang",
  "category": "Aksi Korporasi",
  "title": "MKNT Koreksi RUPSLB, [Ekspansi] ke Bisnis Baja dan Tambak Udang",
  "deck": "Selain merevisi tanggal pencatatan pemegang saham, koreksi panggilan RUPSLB MKNT menambahkan agenda baru: perluasan usaha jadi holding yang menaungi perusahaan baja dan tambak udang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "RUPSLB",
   "PMTHMETD",
   "holding"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7cdadd91b9_18caeb2c91.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-adhi-setujui-penundaan-bunga-obligasi-ke-juli-2027",
  "category": "Aksi Korporasi",
  "title": "RUPO ADHI Setujui [Penundaan] Bunga Obligasi ke Juli 2027",
  "deck": "Pemegang obligasi ADHI menyetujui penundaan dua kali pembayaran bunga Obligasi Berkelanjutan IV Tahap I 2024 ke tanggal jatuh tempo, menyusul gagal bayar kupon seri lain.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "restrukturisasi utang",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e7260a9b26_696f039ea2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpii-peroleh-kredit-rp80-miliar-dari-cimb-niaga",
  "category": "Aksi Korporasi",
  "title": "BPII Peroleh [Kredit] Rp80 Miliar dari CIMB Niaga",
  "deck": "Batavia Prosperindo Internasional menandatangani fasilitas kredit revolving maksimum Rp80 miliar dengan Bank CIMB Niaga untuk pembiayaan modal kerja, bertenor 12 bulan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPII",
   "kredit perbankan",
   "CIMB Niaga",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e787a4fa11_1b736ca0db.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbsi-rupslb-gagal-kuorum-perubahan-direksi-batal-dibahas",
  "category": "Aksi Korporasi",
  "title": "BBSI: RUPSLB [Gagal] Kuorum, Perubahan Direksi Batal Dibahas",
  "deck": "RUPSLB Krom Bank Indonesia batal membahas perubahan direksi, remunerasi, dan anggaran dasar karena kuorum kehadiran cuma 9,84 persen dari syarat minimal dua pertiga saham.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBSI",
   "Krom Bank Indonesia",
   "RUPSLB",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a42996fc21_3758ebf503.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-rombak-lini-usaha-rambah-holding-dan-pembiayaan",
  "category": "Aksi Korporasi",
  "title": "SOFA Rombak Lini Usaha, Rambah [Holding] dan Pembiayaan",
  "deck": "SOFA akan meminta persetujuan pemegang saham lewat RUPSLB 30 September 2026 untuk menambah usaha holding dan pembiayaan conduit, di tengah kerugian yang terus membesar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "perubahan kegiatan usaha",
   "RUPSLB",
   "holding"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9fa6a50b5f_0b0eba4bca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-gelar-rupslb-atas-permintaan-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "SOFA Gelar [RUPSLB] atas Permintaan Pemegang Saham",
  "deck": "PT Solusi Environment Asia Tbk akan menggelar RUPSLB pada 30 September 2026, yang menurut pengumuman perseroan digelar atas permintaan pemegang saham, bukan inisiatif direksi.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "RUPSLB",
   "Solusi Environment Asia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3981f955e3_a53e999535.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-komisaris-andri-hutama-putra-jual-1-76-juta-saham",
  "category": "Aksi Korporasi",
  "title": "CYBR: Komisaris Andri Hutama Putra [jual] 1,76 juta saham",
  "deck": "Andri Hutama Putra melepas 1,76 juta saham ITSEC Asia lewat 14 transaksi sejak 23 Juni hingga 11 Agustus 2026, hak suaranya turun tipis dari 0,242% menjadi 0,228%.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-8635-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrme-rombak-susunan-komite-nominasi-dan-remunerasi",
  "category": "Aksi Korporasi",
  "title": "HRME Rombak Susunan [Komite] Nominasi dan Remunerasi",
  "deck": "Menteng Heritage Realty mengganti satu anggota Komite Nominasi dan Remunerasi menyusul pengunduran diri Sri Rejeki Suryaningrum, posisinya diisi Harri Rinaldiawan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRME",
   "Komite Nominasi dan Remunerasi",
   "Menteng Heritage Realty",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c07a863b07_9794ed69c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wton-ubah-susunan-komite-audit-andrianto-jadi-anggota-baru",
  "category": "Aksi Korporasi",
  "title": "WTON Ubah Susunan [Komite Audit], Andrianto Jadi Anggota Baru",
  "deck": "Wijaya Karya Beton menambah Andrianto sebagai anggota Komite Audit menyusul perubahan Dewan Komisaris hasil RUPSLB Juli 2026, efektif 20 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WTON",
   "Komite Audit",
   "Wijaya Karya Beton",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/76540d3e4e_a6b9807aa2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wton-rombak-komite-nominasi-remunerasi-andrianto-ketua-baru",
  "category": "Aksi Korporasi",
  "title": "WTON Rombak Komite Nominasi-Remunerasi, [Andrianto] Ketua Baru",
  "deck": "Wijaya Karya Beton mengganti susunan Komite Nominasi, Remunerasi, dan Pemantau Risiko menyusul pergantian Dewan Komisaris hasil RUPSLB Juli 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WTON",
   "Wijaya Karya Beton",
   "Komite Nominasi dan Remunerasi",
   "Tata Kelola Korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/445783a102_2656808f44.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soci-beri-jaminan-pinjaman-us-54-9-juta-ke-anak-usaha-eom",
  "category": "Aksi Korporasi",
  "title": "SOCI Beri [Jaminan] Pinjaman US$54,9 Juta ke Anak Usaha EOM",
  "deck": "Soechi Lines menjamin fasilitas pinjaman berjangka anak usahanya, Eternity Ocean Maritime, senilai AS$54,9 juta dari Bank Mandiri cabang Singapura.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOCI",
   "Soechi Lines",
   "corporate guarantee",
   "Bank Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/992a708585_f7d9f14841.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcor-undur-rupslb-pergantian-direksi-ke-15-september",
  "category": "Aksi Korporasi",
  "title": "MCOR Undur RUPSLB Pergantian Direksi ke [15 September]",
  "deck": "Bank China Construction Bank Indonesia (MCOR) menunda RUPSLB dari 4 menjadi 15 September 2026, agenda tunggalnya tetap perubahan susunan direksi dan komisaris.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "RUPSLB",
   "Bank China Construction Bank Indonesia",
   "pergantian pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b8047642f9_f71fdaa7b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-panggil-rupslb-15-september-ajukan-restrukturisasi-total",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPSLB 15 September, Ajukan [Restrukturisasi] Total",
  "deck": "PTPP memanggil RUPSLB pada 15 September 2026 untuk meminta persetujuan pemegang saham atas restrukturisasi menyeluruh, termasuk konversi pinjaman bank dan non-bank jangka pendek menjadi jangka panjang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "RUPSLB",
   "restrukturisasi utang",
   "BUMN karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/866d56b8d7_3bb3caaf14.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "padi-djoko-joelijanto-resmi-jadi-pengendali-perusahaan",
  "category": "Aksi Korporasi",
  "title": "PADI: Djoko Joelijanto Resmi Jadi [Pengendali] Perusahaan",
  "deck": "RUPSLB kedua Minna Padi Investama Sekuritas menetapkan Djoko Joelijanto sebagai pengendali dan pemilik manfaat akhir, sekaligus mengangkat direktur baru.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADI",
   "RUPSLB",
   "Minna Padi Sekuritas",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/98867da036_7d282aa5a4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "refi-kena-sanksi-bursa-akibat-telat-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "REFI Kena [Sanksi] Bursa akibat Telat Laporan Keuangan",
  "deck": "Bursa Efek Indonesia menjatuhkan Peringatan Tertulis I ke REFI karena belum menyampaikan laporan keuangan tengah tahunan per 30 Juni 2026 hingga batas waktu 31 Juli 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REFI",
   "sanksi BEI",
   "laporan keuangan",
   "keterlambatan pelaporan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c42684598_4291bba54c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-dirikan-anak-usaha-garap-energi-surya",
  "category": "Aksi Korporasi",
  "title": "ARKO Dirikan Anak Usaha Garap [Energi Surya]",
  "deck": "Anak usaha ARKO, PT Arkora Tenaga Matahari, mendirikan PT Endorshine Energi Matahari. ARKO memegang kepemilikan tidak langsung 99 persen di perusahaan baru itu.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "energi surya",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4976446fc8_7379c767c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-gtbo-masuk-papan-pemantauan-khusus-bei-26-agustus",
  "category": "Aksi Korporasi",
  "title": "Saham GTBO [Masuk] Papan Pemantauan Khusus BEI 26 Agustus",
  "deck": "Bursa Efek Indonesia memasukkan saham Garda Tujuh Buana (GTBO) ke daftar Efek Dalam Pemantauan Khusus, efektif 26 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "Bursa Efek Indonesia",
   "pemantauan khusus",
   "Garda Tujuh Buana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/548f364f19_57853e8d24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brrc-bantah-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BRRC Bantah Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "PT Raja Roti Cemerlang Tbk (BRRC) menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkapkan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRRC",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/905023e38a_6026afe09b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomgroup-salurkan-bantuan-rp1-3-m-ke-korban-gempa-ntt",
  "category": "BUMN",
  "title": "TelkomGroup Salurkan [Bantuan] Rp1,3 M ke Korban Gempa NTT",
  "deck": "TelkomGroup menyalurkan bantuan kemanusiaan Rp1,3 miliar ke lebih dari 10 wilayah NTT terdampak gempa, termasuk kawasan terisolir yang dijangkau lewat jalur laut.",
  "date": "24 Agustus 2026",
  "image": "assets/img/telkomgroup-salurkan-bantuan-rp1-3-m-ke-korban-gempa-ntt.jpg",
  "imageV": "mt727tr7",
  "tags": [
   "Telkom",
   "TelkomGroup",
   "Gempa NTT",
   "Bantuan Kemanusiaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462189-telkomgroup-salurkan-bantuan-kemanusiaan-rp13-miliar-untuk-masyarakat-terdampak-gempa-ntt"
 },
 {
  "slug": "sido-jadwalkan-public-expose-tahunan-9-september-2026",
  "category": "Aksi Korporasi",
  "title": "SIDO Jadwalkan [Public Expose] Tahunan 9 September 2026",
  "deck": "Sido Muncul akan menggelar paparan publik tahunan secara virtual pada 9 September 2026, membahas kinerja semester I dan strategi bisnis.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIDO",
   "Sido Muncul",
   "public expose",
   "kinerja semester I"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2ca366e094_5f94a8a707.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmnd-jadwalkan-rupslb-pada-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "DMND Jadwalkan RUPSLB pada [30 September] 2026",
  "deck": "PT Diamond Food Indonesia Tbk (DMND) akan menggelar RUPSLB pada 30 September 2026, dengan batas pencatatan pemegang saham pada 7 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMND",
   "RUPSLB",
   "Diamond Food Indonesia",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9675bde900_46766e28e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-direksi-jual-2-35-juta-saham-divestasi-rp4-48-m",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi Jual 2,35 Juta Saham, [Divestasi] Rp4,48 M",
  "deck": "George Oetomo, direksi TAPG, melepas 2,35 juta saham dalam dua transaksi pada 20-21 Agustus, hanya lima hari setelah penjualan sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-4169-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elsa-direktur-sdm-hera-handayani-mundur-tunggu-rupslb",
  "category": "Aksi Korporasi",
  "title": "ELSA: Direktur SDM Hera Handayani [Mundur], Tunggu RUPSLB",
  "deck": "Direktur Sumber Daya Manusia dan Umum Elnusa, Hera Handayani, mengajukan pengunduran diri pada 20 Agustus 2026, efektif setelah disetujui RUPS berikutnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/65f00c7421_0ca25078c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-terima-rp746-7-m-dari-dividen-interim-amp",
  "category": "Aksi Korporasi",
  "title": "TAPG Terima Rp746,7 M dari [Dividen] Interim AMP",
  "deck": "AMP, anak usaha yang 94,93 persen sahamnya dimiliki TAPG, membagikan dividen interim Rp786,6 miliar. Bagian TAPG diperkirakan sekitar Rp746,7 miliar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "dividen interim",
   "transaksi afiliasi",
   "Agro Multi Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/eb69ac6855_cd3001c90a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smkm-jawab-bursa-siapkan-rights-issue-dalam-3-bulan",
  "category": "Aksi Korporasi",
  "title": "SMKM Jawab Bursa, Siapkan [Rights Issue] dalam 3 Bulan",
  "deck": "Menjawab permintaan penjelasan BEI soal volatilitas transaksi, SMKM membantah punya info material tapi mengungkap rencana rights issue dalam waktu dekat.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMKM",
   "rights issue",
   "PMHMETD",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/cbfe541260_8f2bb2a5f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fwct-umumkan-rencana-rupslb-pada-1-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "FWCT Umumkan Rencana [RUPSLB] pada 1 Oktober 2026",
  "deck": "PT Wijaya Cahaya Timber Tbk akan menggelar RUPS Luar Biasa pada 1 Oktober 2026, dengan pemegang saham per 8 September 2026 berhak hadir dan memberi suara.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "RUPSLB",
   "RUPS",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f4fc1efeff_de923e1b63.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpjs-buka-cicilan-iuran-mulai-rp10-000-per-hari",
  "category": "Bisnis",
  "title": "BPJS Buka [Cicilan] Iuran Mulai Rp10.000 per Hari",
  "deck": "Program REHAB 3.0 BPJS Kesehatan memberi peserta mandiri opsi mencicil tunggakan iuran JKN mulai Rp10.000 per hari agar kepesertaan tetap aktif.",
  "date": "24 Agustus 2026",
  "image": "assets/img/bpjs-buka-cicilan-iuran-mulai-rp10-000-per-hari.jpg",
  "imageV": "mt75t3n7",
  "tags": [
   "BPJS Kesehatan",
   "REHAB 3.0",
   "JKN",
   "cicilan iuran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462162-program-rehab-30-buka-pilihan-cicilan-sesuai-kemampuan"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-jual-lagi-4-juta-saham-hak-suara-34-24",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Jual Lagi 4 Juta Saham, Hak Suara [34,24%]",
  "deck": "Putrasakti Mandiri kembali menjual 4 juta saham KDTN pada 21 Agustus 2026 seharga Rp355 per saham untuk restrukturisasi kepemilikan dalam grup usaha, hak suaranya turun ke 34,24 persen.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2921-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amar-jadwalkan-rupslb-pada-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "AMAR Jadwalkan [RUPSLB] pada 30 September 2026",
  "deck": "Bank Amar Indonesia menjadwalkan RUPSLB pada 30 September 2026, sementara pemanggilan resmi berisi agenda rapat baru akan diumumkan 8 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAR",
   "RUPSLB",
   "Bank Amar Indonesia",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50b9dabeaa_caf20655e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-rupslb-setujui-komisaris-joyce-soeryadjaya-kerr-mundur",
  "category": "Aksi Korporasi",
  "title": "SRTG: RUPSLB Setujui [Komisaris] Joyce Soeryadjaya Kerr Mundur",
  "deck": "RUPSLB Saratoga 21 Agustus menyetujui pengunduran diri Komisaris Joyce Soeryadjaya Kerr dan penyesuaian anggaran dasar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "RUPSLB",
   "Dewan Komisaris",
   "Saratoga Investama Sedaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8293b78a41_fba9b9dba4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdes-bri-mi-ganti-pengendali-rencana-gabung-ke-mandiri-mi",
  "category": "Aksi Korporasi",
  "title": "XDES: BRI-MI Ganti [Pengendali], Rencana Gabung ke Mandiri MI",
  "deck": "PT Danantara Asset Management mengambil alih saham BRI Manajemen Investasi dari BRI dan Danareksa, sebelum BRIMI digabung ke Mandiri Manajemen Investasi pada 1 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDES",
   "BRIMI",
   "Danantara Asset Management",
   "Merger Manajer Investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/feb3e70b44_021867da8e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdif-pengendali-brimi-berganti-merger-ke-mandiri-mi-1-sept",
  "category": "Aksi Korporasi",
  "title": "XDIF: Pengendali BRIMI Berganti, [Merger] ke Mandiri MI 1 Sept",
  "deck": "Manajer investasi ETF XDIF diambil alih Danantara Asset Management dan akan bergabung dengan BNI AM serta PNM IM ke Mandiri Manajemen Investasi mulai 1 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDIF",
   "BRIMI",
   "Danantara Asset Management",
   "merger manajer investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a6d85a2607_b33376081c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-waran-terstruktur-bbca-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan [Waran Terstruktur] BBCA Usai Dividen Tunai",
  "deck": "PT Korea Investment and Sekuritas Indonesia mengubah rasio dan harga pelaksanaan waran BBCABQCU6A dan BBCABQCX6A menyusul dividen tunai BBCA Rp50 per saham yang dibayar 16 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "BBCA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ec4b3d4917_a97d335541.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmbl-pemegang-saham-lepas-43-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "BMBL: Pemegang Saham Lepas [43 Juta] Saham Lewat Repo",
  "deck": "AMMAR AL AMANAH melepas 43 juta saham BMBL senilai sekitar Rp1,21 miliar lewat empat transaksi repurchase agreement, memangkas hak suaranya dari 23,19% menjadi 19,02%.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "kepemilikan saham",
   "repurchase agreement",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2952-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tnca-undang-rupslb-16-september-agenda-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "TNCA Undang RUPSLB 16 September, Agenda [Perubahan] Direksi",
  "deck": "Trimuda Nuansa Citra (TNCA) memanggil RUPSLB pada 16 September 2026 dengan agenda perubahan anggaran dasar dan susunan direksi atau komisaris.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TNCA",
   "RUPSLB",
   "Direksi dan Komisaris",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c0731fb0f7_b1909ee09d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pengusaha-minta-stabilitas-dijaga-demi-investasi",
  "category": "Bisnis",
  "title": "Pengusaha Minta Stabilitas Dijaga demi [Investasi]",
  "deck": "HIPMI menyerukan dinamika penyampaian aspirasi di berbagai daerah tidak mengganggu aktivitas ekonomi, investasi, dan lapangan kerja yang tengah dibangun.",
  "date": "24 Agustus 2026",
  "image": "assets/img/pengusaha-minta-stabilitas-dijaga-demi-investasi.jpg",
  "imageV": "mt6ycq08",
  "tags": [
   "HIPMI",
   "investasi",
   "stabilitas ekonomi",
   "dunia usaha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462131-dunia-usaha-serukan-kondusivitas-jaga-momentum-investasi-dan-aktivitas-ekonomi"
 },
 {
  "slug": "scpi-direktur-yeap-xin-yi-mundur-direksi-berubah",
  "category": "Aksi Korporasi",
  "title": "SCPI: Direktur Yeap Xin Yi Mundur, Direksi [Berubah]",
  "deck": "RUPSLB Organon Pharma Indonesia menyetujui pengunduran diri Direktur Yeap Xin Yi dan menetapkan susunan Direksi baru beranggotakan tiga orang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCPI",
   "Organon Pharma Indonesia",
   "RUPSLB",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6aea9c17b0_d2bc7cdacb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psab-jawab-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "PSAB Jawab Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "J Resources Asia Pasifik (PSAB) menegaskan tidak ada informasi material tersembunyi maupun rencana aksi korporasi terkait lonjakan volatilitas transaksi sahamnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "J Resources Asia Pasifik",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2a87fc023c_fe5ad1a90a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emtk-lepas-99-99-saham-anak-usaha-aca-ke-yuslinda-nasution",
  "category": "Aksi Korporasi",
  "title": "EMTK [Lepas] 99,99% Saham Anak Usaha ACA ke Yuslinda Nasution",
  "deck": "Elang Mahkota Teknologi menjual seluruh sahamnya di PT Abhimata Citra Abadi, mengalihkan pengendalian dan menghentikan konsolidasi laporan keuangan anak usaha itu.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMTK",
   "divestasi anak usaha",
   "ACA",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4bc7831137_6cdf75fbf1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trus-bantah-ada-informasi-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "TRUS Bantah Ada Informasi Material soal [Volatilitas] Saham",
  "deck": "Menjawab surat klarifikasi Bursa Efek Indonesia, Trust Finance Indonesia (TRUS) menyatakan tidak ada informasi material di balik pergerakan volatile transaksi sahamnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUS",
   "Bursa Efek Indonesia",
   "Volatilitas Saham",
   "Keterbukaan Informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/96f3338378_41a8ee3985.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-suspensi-saham-dicabut-bei-usai-4-bulan",
  "category": "Aksi Korporasi",
  "title": "BIKE [Suspensi] Saham Dicabut BEI Usai 4 Bulan",
  "deck": "Bursa mencabut penghentian sementara perdagangan saham BIKE mulai 24 Agustus 2026, setelah suspensi sejak akhir April terkait perubahan pengendalian perusahaan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "suspensi saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4c1076b851_5b24bb5e5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-rafly-umarsyah-tambah-kepemilikan-saham-jadi-2-200-unit",
  "category": "Aksi Korporasi",
  "title": "GOTO: Rafly Umarsyah Tambah [Kepemilikan] Saham Jadi 2.200 Unit",
  "deck": "Pelapor non-direksi/komisaris GOTO menambah 1.900 unit saham lewat pembelian tidak langsung, dari 300 menjadi 2.200 unit, hak suara tetap 0,00%.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "kepemilikan saham",
   "hak suara multiple",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2380-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-600-saham-rp309-ribu",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 600 Saham Rp309 Ribu",
  "deck": "Komisaris AKPI, Henry Liem, melepas 600 saham senilai Rp309.000 pada 21 Agustus 2026, transaksi terkecil dalam rangkaian penjualan sahamnya pekan ini.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Henry Liem",
   "komisaris",
   "transaksi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2341-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apli-tegaskan-tak-ada-info-material-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "APLI Tegaskan Tak Ada Info Material soal [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan Bursa Efek Indonesia, manajemen Asiaplast Industries (APLI) menyatakan tidak mengetahui informasi material di balik pergerakan transaksi sahamnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APLI",
   "Asiaplast Industries",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/373e78a71b_59dc0d7a68.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-wna-borong-5-62-juta-saham-itsec-asia",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi WNA [borong] 5,62 juta saham ITSEC Asia",
  "deck": "Direksi ITSEC Asia menambah kepemilikan saham 6,83 persen lewat lima transaksi pembelian tidak langsung pada 21 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-3406-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btel-profesional-telekomunikasi-indonesia-kuasai-10-86-saham",
  "category": "Aksi Korporasi",
  "title": "BTEL: Profesional Telekomunikasi Indonesia Kuasai [10,86%] Saham",
  "deck": "PT Profesional Telekomunikasi Indonesia mengantongi 4,85 miliar saham baru BTEL, setara 10,86% hak suara, hasil konversi Obligasi Wajib Konversi pada harga Rp200 per saham.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTEL",
   "Bakrie Telecom",
   "konversi obligasi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2726-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-fitch-pertahankan-rating-aa-ruang-gerak-menyempit",
  "category": "Aksi Korporasi",
  "title": "EXCL: Fitch pertahankan rating [AA+], ruang gerak menyempit",
  "deck": "Fitch Ratings mengafirmasi peringkat EXCL di AA+(idn) outlook stabil, tapi menyebut ruang kenaikan leverage sudah nyaris habis akibat konsolidasi dengan Smartfren.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL",
   "Fitch Ratings",
   "peringkat obligasi",
   "XLSMART"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/414ca42131_c221dd0b2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-pemegang-saham-setujui-pmthmetd-868-juta-saham",
  "category": "Aksi Korporasi",
  "title": "HATM: Pemegang Saham Setujui [PMTHMETD] 868 Juta Saham",
  "deck": "RUPS Luar Biasa HATM menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu hingga 868 juta saham untuk PT Multi Sarana Nasional, disetujui 100 persen tanpa penolakan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "RUPS",
   "PMTHMETD",
   "Multi Sarana Nasional"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1255696e96_648a2f3e27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "assa-tambah-fasilitas-kredit-cimb-niaga-jadi-rp100-m-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "ASSA Tambah Fasilitas Kredit CIMB Niaga jadi Rp100 M [Modal Kerja]",
  "deck": "ASSA menambah fasilitas pinjaman tetap dari CIMB Niaga sebesar Rp40 miliar, sehingga total pokok kredit naik dari Rp60 miliar menjadi Rp100 miliar untuk modal kerja pembelian armada kendaraan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASSA",
   "kredit bank",
   "CIMB Niaga",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b2ae580d3a_a001065a69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-komisaris-hasmoro-beli-lagi-737-700-saham-hermina",
  "category": "Aksi Korporasi",
  "title": "HEAL: Komisaris Hasmoro Beli [Lagi] 737.700 Saham Hermina",
  "deck": "Komisaris Medikaloka Hermina, DR Hasmoro, membeli 737.700 saham HEAL senilai sekitar Rp680 per lembar dalam tiga transaksi 19-21 Agustus, melanjutkan pembelian pekan sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-1158-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vrna-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "VRNA Jawab Permintaan BEI Soal [Volatilitas] Transaksi Saham",
  "deck": "Mizuho Leasing Indonesia menyatakan tidak memiliki informasi material yang menjelaskan pergerakan transaksi sahamnya setelah ditegur bursa.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VRNA",
   "Mizuho Leasing Indonesia",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f9315cec94_27fc5ff050.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "klbf-komisaris-tambah-kepemilikan-saham-50-000-lembar",
  "category": "Aksi Korporasi",
  "title": "KLBF: Komisaris Tambah [Kepemilikan] Saham 50.000 Lembar",
  "deck": "Ferdinand Aryanto, Komisaris Kalbe Farma, membeli 50.000 saham KLBF secara tidak langsung pada 21 Agustus 2026, menambah kepemilikannya menjadi 410.000 lembar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "Kalbe Farma",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-4295-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asdf-fitch-afirmasi-peringkat-aaa-untuk-tujuh-obligasi",
  "category": "Aksi Korporasi",
  "title": "ASDF: Fitch Afirmasi Peringkat [AAA] untuk Tujuh Obligasi",
  "deck": "Fitch Ratings Indonesia mempertahankan peringkat AAA(idn) stabil untuk PT Astra Sedaya Finance dan tujuh seri obligasinya senilai total sekitar Rp4,78 triliun.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDF",
   "peringkat kredit",
   "obligasi",
   "Fitch Ratings"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/67e3d4bb17_5e9a6a8ee7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-suspensi-saham-adhi-usai-gagal-bayar-kupon-obligasi",
  "category": "Aksi Korporasi",
  "title": "BEI [Suspensi] Saham ADHI usai Gagal Bayar Kupon Obligasi",
  "deck": "BEI menghentikan sementara perdagangan saham ADHI di seluruh pasar mulai Senin, setelah perseroan menunda pembayaran bunga ke-17 obligasi seri B dan C yang jatuh tempo 24 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "suspensi saham",
   "gagal bayar obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d25fe7ed76_3279be7350.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-697-usai-cad-kuartal-ii-melebar",
  "category": "Moneter",
  "title": "[Rupiah] Melemah ke Rp17.697 usai CAD Kuartal II Melebar",
  "deck": "Rupiah melemah tipis ke Rp17.697 per dolar AS, tertekan sentimen defisit transaksi berjalan kuartal II-2026 yang melebar signifikan meski kredit perbankan Juli masih tumbuh solid.",
  "date": "24 Agustus 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-697-usai-cad-kuartal-ii-melebar.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "neraca transaksi berjalan",
   "kredit perbankan"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462084-rupiah-melemah-ke-rp17697-per-dolar-as-usai-laporan-soal-defisit-neraca-transaksi-dan-kredit-perbankan-juli-2026"
 },
 {
  "slug": "harga-pangan-24-agustus-beras-rp14-800-telur-rp29-250-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 24 Agustus: Beras [Rp14.800], Telur Rp29.250 per Kg",
  "deck": "PIHPS Bank Indonesia mencatat harga sejumlah bahan pangan pokok di tingkat pedagang eceran nasional pada 24 Agustus 2026, dari beras, gula, minyak goreng, hingga cabai dan bawang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/harga-pangan-24-agustus-beras-rp14-800-telur-rp29-250-per-kg.jpg",
  "imageV": "mt6phar8",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "beras"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462077-harga-pangan-hari-ini-24-agustus-2026-beras-mulai-rp14800-per-kilogram-hingga-telur-ayam-rp29250-per-kilogram"
 },
 {
  "slug": "harga-emas-antam-naik-rp10-000-kini-rp2-750-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Rp10.000, Kini Rp2.750.000/Gram",
  "deck": "Harga emas Antam hari ini naik Rp10.000 menjadi Rp2.750.000 per gram, sementara harga buyback ikut naik ke Rp2.610.000 per gram.",
  "date": "24 Agustus 2026",
  "image": "assets/img/harga-emas-antam-naik-rp10-000-kini-rp2-750-000-gram.jpg",
  "tags": [
   "emas",
   "harga emas",
   "Antam",
   "investasi"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462075-harga-emas-antam-hari-ini-24-agustus-2026-naik-rp10000-jadi-rp2750000-per-gram"
 },
 {
  "slug": "kkgi-panggil-rupslb-bahas-dividen-tunai-dan-direksi",
  "category": "Aksi Korporasi",
  "title": "KKGI Panggil RUPSLB, Bahas [Dividen] Tunai dan Direksi",
  "deck": "Resource Alam Indonesia mengundang pemegang saham ke RUPSLB 15 September 2026 untuk membahas dividen tunai dari laba ditahan 2025 dan perubahan susunan direksi.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "RUPSLB",
   "dividen",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/067a1cd1e7_8d223a9f0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-jadwalkan-rupslb-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "ASBI Jadwalkan [RUPSLB] 30 September 2026",
  "deck": "Asuransi Bintang mengumumkan rencana RUPS Luar Biasa pada 30 September, pemegang saham per 7 September berhak hadir. Agenda resmi baru terbit lewat pemanggilan 8 September.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "RUPSLB",
   "Asuransi Bintang",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6ddc2781d8_ef049a5698.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-jerman-perkuat-investasi-energi-terbarukan",
  "category": "Energi",
  "title": "Indonesia-Jerman [Perkuat] Investasi Energi Terbarukan",
  "deck": "Indonesia dan Jerman memperluas kerja sama investasi energi terbarukan dan jaringan listrik, di tengah target bauran EBT 18-21 persen pada 2026 yang realisasinya baru sekitar 0,5 persen.",
  "date": "24 Agustus 2026",
  "image": "assets/img/indonesia-jerman-perkuat-investasi-energi-terbarukan.jpg",
  "imageV": "mt6fva1h",
  "tags": [
   "Energi Terbarukan",
   "Indonesia-Jerman",
   "Biofuel B-50",
   "Jaringan Listrik"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/perkuat-ketahanan-energi-indonesia-jerman-percepat-investasi-ebt-dan-jaringan-listrik",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "potensi-panas-bumi-ri-nomor-satu-dunia-baru-11-6-tergarap",
  "category": "Energi",
  "title": "Potensi Panas Bumi RI Nomor Satu Dunia, Baru 11,6% [Tergarap]",
  "deck": "Kementerian ESDM menyiapkan revisi aturan dan insentif pajak untuk mempercepat pengembangan panas bumi, sekaligus meminta pengembang tak menahan konsesi yang sudah didapat.",
  "date": "24 Agustus 2026",
  "image": "assets/img/potensi-panas-bumi-ri-nomor-satu-dunia-baru-11-6-tergarap.jpg",
  "imageV": "mt6fvckd",
  "tags": [
   "panas bumi",
   "ESDM",
   "energi terbarukan",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kejar-potensi-panas-bumi-nomor-satu-dunia-bahlil-minta-pengembang-tak-tahan-konsesi",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kemendag-ajak-kampus-genjot-ekspor-lewat-campuspreneur",
  "category": "UMKM",
  "title": "Kemendag Ajak Kampus Genjot Ekspor Lewat [Campuspreneur]",
  "deck": "Kementerian Perdagangan mengajak kampus dan mahasiswa bergabung dalam program Campuspreneur untuk belajar berwirausaha dan menembus pasar ekspor.",
  "date": "24 Agustus 2026",
  "image": "assets/img/kemendag-ajak-kampus-genjot-ekspor-lewat-campuspreneur.jpg",
  "imageV": "mt6fvr4j",
  "tags": [
   "Campuspreneur",
   "UMKM",
   "ekspor",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-beri-kuliah-umum-di-univet-bantara-sukoharjo-dorong-mahasiswa-rintis-usaha-dan-jadi-eksportir",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kopi-jawa-barat-tembus-ekspor-rp2-64-miliar-ke-inggris",
  "category": "UMKM",
  "title": "Kopi Jawa Barat Tembus Ekspor [Rp2,64 Miliar] ke Inggris",
  "deck": "Kemendag dan Pemprov Jabar melepas ekspor 10 ton biji kopi mentah Java Halu Coffee senilai Rp2,64 miliar ke Inggris, bagian dari perluasan pasar sejak 2019.",
  "date": "24 Agustus 2026",
  "image": "assets/img/kopi-jawa-barat-tembus-ekspor-rp2-64-miliar-ke-inggris.jpg",
  "tags": [
   "ekspor kopi",
   "Jawa Barat",
   "UMKM",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perkuat-kolaborasi-ekspor-dengan-pemerintah-daerah-lepas-ekspor-kopi-jawa-barat-senilai-rp264-miliar-ke-inggris",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "transaksi-umkm-di-kki-2026-tembus-rp144-2-miliar",
  "category": "UMKM",
  "title": "Transaksi UMKM di KKI 2026 [Tembus] Rp144,2 Miliar",
  "deck": "Bank Indonesia menutup KKI 2026 dengan penjualan sementara Rp144,2 miliar dan pembiayaan UMKM Rp285 miliar, naik dari capaian tahun sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/transaksi-umkm-di-kki-2026-tembus-rp144-2-miliar.jpg",
  "imageV": "mt6fvxmv",
  "tags": [
   "UMKM",
   "Bank Indonesia",
   "KKI 2026",
   "Ekspor UMKM"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "iapi-soroti-etika-auditor-di-era-ai-lewat-cpa-days-2026",
  "category": "Bisnis",
  "title": "IAPI Soroti Etika Auditor di Era [AI] Lewat CPA Days 2026",
  "deck": "IAPI dan BINUS University menggelar seminar CPA Days 2026, menyoroti tantangan etika dan professional judgment akuntan publik saat AI masuk ke praktik audit.",
  "date": "23 Agustus 2026",
  "image": "assets/img/iapi-soroti-etika-auditor-di-era-ai-lewat-cpa-days-2026.jpg",
  "imageV": "mt6fvy5v",
  "tags": [
   "audit",
   "AI",
   "IAPI",
   "akuntan publik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462024-praktik-audit-dan-assurance-masuk-era-ai-iapi-dan-binus-university-sorot-persoalan-etika-dan-professional-judgment"
 },
 {
  "slug": "ri-uni-eropa-matangkan-cepa-teken-ditarget-oktober-2026",
  "category": "Global",
  "title": "RI-Uni Eropa Matangkan CEPA, [Teken] Ditarget Oktober 2026",
  "deck": "Indonesia dan Uni Eropa mematangkan persiapan implementasi CEPA yang membebaskan 98 persen pos tarif kedua pihak, dengan penandatanganan ditargetkan Oktober 2026.",
  "date": "23 Agustus 2026",
  "image": "assets/img/ri-uni-eropa-matangkan-cepa-teken-ditarget-oktober-2026.jpg",
  "imageV": "mt5yrnsx",
  "tags": [
   "I-EU CEPA",
   "Uni Eropa",
   "Perdagangan Internasional",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/optimalkan-akses-pasar-ke-eropa-mendag-busan-turut-siapkan-implementasi-i-eu-cepa",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dki-wajibkan-pilah-sampah-4-kategori-bi-dorong-umkm-olah-limbah",
  "category": "UMKM",
  "title": "DKI [Wajibkan] Pilah Sampah 4 Kategori, BI Dorong UMKM Olah Limbah",
  "deck": "SIPSN mencatat 65 persen dari 24,8 juta ton sampah tahunan RI belum terkelola layak. DKI Jakarta kini mewajibkan pemilahan sampah 4 kategori, sementara BI dorong UMKM masuk rantai ekonomi sirkular.",
  "date": "23 Agustus 2026",
  "image": "assets/img/dki-wajibkan-pilah-sampah-4-kategori-bi-dorong-umkm-olah-limbah.jpg",
  "imageV": "mt5yrqxf",
  "tags": [
   "ekonomi sirkular",
   "UMKM",
   "pengelolaan sampah",
   "DKI Jakarta"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dpr-dorong-ruu-migas-pangkas-birokrasi-agar-investor-kembali",
  "category": "Energi",
  "title": "DPR Dorong RUU Migas [Pangkas] Birokrasi agar Investor Kembali",
  "deck": "DPR mendorong RUU Migas memangkas birokrasi perizinan agar investor kembali masuk dan mendongkrak lifting minyak nasional.",
  "date": "23 Agustus 2026",
  "image": "assets/img/dpr-dorong-ruu-migas-pangkas-birokrasi-agar-investor-kembali.jpg",
  "imageV": "mt5v2yts",
  "tags": [
   "RUU Migas",
   "Lifting Minyak",
   "Investasi Migas",
   "DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461998-dorong-ruu-migas-agar-investor-kembali-dongkrak-lifting-minyak-dpr-soroti-birokrasi-yang-berbelit"
 },
 {
  "slug": "pnm-satukan-58-cabang-lewat-grand-final-porseni-2026",
  "category": "BUMN",
  "title": "PNM Satukan 58 Cabang lewat Grand Final [PORSENI] 2026",
  "deck": "PNM menggelar Grand Final PORSENI 2026 di BRILiaN Stadium, mempertemukan insan dari 58 cabang, kantor pusat, dan anak usaha se-Indonesia dalam ajang olahraga dan seni tahunan.",
  "date": "23 Agustus 2026",
  "image": "assets/img/pnm-satukan-58-cabang-lewat-grand-final-porseni-2026.jpg",
  "imageV": "mt6fvyls",
  "tags": [
   "PNM",
   "PORSENI 2026",
   "BUMN",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461925-pnm-asah-daya-juang-karyawan-melalui-grand-final-porseni-2026"
 },
 {
  "slug": "umkm-perempuan-capai-64-5-persen-bi-soroti-akses-keuangan",
  "category": "UMKM",
  "title": "UMKM Perempuan Capai 64,5 Persen, BI Soroti Akses [Keuangan]",
  "deck": "Data BPS 2025 menunjukkan 64,5 persen UMKM Indonesia dipimpin perempuan, namun akses ke layanan keuangan formal masih jadi pekerjaan rumah dalam ajang KKI 2026.",
  "date": "23 Agustus 2026",
  "image": "assets/img/umkm-perempuan-capai-64-5-persen-bi-soroti-akses-keuangan.jpg",
  "imageV": "mt5sb2s6",
  "tags": [
   "UMKM",
   "Perempuan",
   "Bank Indonesia",
   "KKI 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461922-645-persen-umkm-dipimpin-perempuan-kki-2026-soroti-kekuatan-ekonomi-kaum-hawa"
 },
 {
  "slug": "bri-raih-anugerah-esg-2026-berkat-obligasi-sosial",
  "category": "Perbankan",
  "title": "BRI Raih Anugerah ESG 2026 Berkat [Obligasi Sosial]",
  "deck": "BRI meraih Anugerah Utama IDX Channel Anugerah ESG 2026 atas penerbitan obligasi sosial yang mendanai KUR Mikro bagi puluhan ribu nasabah baru.",
  "date": "23 Agustus 2026",
  "image": "assets/img/bri-raih-anugerah-esg-2026-berkat-obligasi-sosial.jpg",
  "imageV": "mt5sb3aw",
  "tags": [
   "BRI",
   "obligasi sosial",
   "ESG",
   "KUR Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461878-dorong-pembiayaan-inklusif-obligasi-sosial-berkelanjutan-bri-raih-idx-channel-anugerah-esg-2026"
 },
 {
  "slug": "tugu-rp72-6-miliar-dana-ipo-tersisa-ditaruh-deposito-bri",
  "category": "Aksi Korporasi",
  "title": "TUGU: [Rp72,6 Miliar] Dana IPO Tersisa, Ditaruh Deposito BRI",
  "deck": "TUGU melaporkan realisasi penggunaan dana IPO 2018 per akhir Juni 2026: 88,98 persen dana sudah terpakai, sisa Rp72,61 miliar disimpan sebagai deposito berbunga di bank afiliasi.",
  "date": "23 Agustus 2026",
  "image": "assets/img/tugu-rp72-6-miliar-dana-ipo-tersisa-ditaruh-deposito-bri.jpg",
  "tags": [
   "TUGU",
   "IPO",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/175222eb51_b744acb7eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tugu-jadwalkan-rupslb-pada-29-september-2026",
  "category": "Aksi Korporasi",
  "title": "TUGU Jadwalkan [RUPSLB] pada 29 September 2026",
  "deck": "Asuransi Tugu Pratama Indonesia akan menggelar RUPSLB secara elektronik pada 29 September 2026, dengan pemegang saham per 4 September 2026 yang berhak hadir.",
  "date": "23 Agustus 2026",
  "image": "assets/img/tugu-jadwalkan-rupslb-pada-29-september-2026.jpg",
  "tags": [
   "TUGU",
   "RUPSLB",
   "Asuransi Tugu Pratama",
   "rapat pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/357d8c6df1_70affc5afe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "temui-wang-yi-luhut-buka-kerja-sama-ke-industri-baru",
  "category": "Global",
  "title": "Temui Wang Yi, Luhut Buka Kerja Sama ke [Industri Baru]",
  "deck": "Menlu China Wang Yi dan Ketua DEN Luhut Binsar Panjaitan membahas investasi perusahaan China di Indonesia, termasuk perluasan ke energi hijau, AI, ekonomi digital, dan bioteknologi.",
  "date": "23 Agustus 2026",
  "image": "assets/img/temui-wang-yi-luhut-buka-kerja-sama-ke-industri-baru.jpg",
  "imageV": "mt5sb3qt",
  "tags": [
   "Wang Yi",
   "Luhut Binsar Panjaitan",
   "investasi China",
   "Indonesia-China"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461869-bicarakan-investasi-menlu-china-wang-yi-bertemu-luhut"
 },
 {
  "slug": "mice-buana-graha-utama-tambah-3-300-saham",
  "category": "Aksi Korporasi",
  "title": "MICE: Buana Graha Utama Tambah [3.300] Saham",
  "deck": "Pemegang saham utama Multi Indocitra, Buana Graha Utama, membeli tambahan 3.300 saham MICE pada 19-20 Agustus 2026, menaikkan hak suaranya tipis dari 48,4217 persen menjadi 48,4222 persen.",
  "date": "23 Agustus 2026",
  "image": "assets/img/mice-buana-graha-utama-tambah-3-300-saham.jpg",
  "tags": [
   "MICE",
   "Multi Indocitra",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23082026-8833-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-fasilitasi-pembiayaan-umkm-rp285-miliar-di-kki-2026",
  "category": "UMKM",
  "title": "BI Fasilitasi Pembiayaan UMKM [Rp285 Miliar] di KKI 2026",
  "deck": "Delapan bank menandatangani kesepakatan pembiayaan dengan UMKM mitra, hasil fasilitasi business matching Bank Indonesia yang mencapai Rp285 miliar hingga Juli 2026.",
  "date": "23 Agustus 2026",
  "image": "assets/img/bi-fasilitasi-pembiayaan-umkm-rp285-miliar-di-kki-2026.jpg",
  "imageV": "mt4n802i",
  "tags": [
   "UMKM",
   "Bank Indonesia",
   "KUR",
   "Pembiayaan"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2816926.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bi-dampingi-580-umkm-wastra-muda-lewat-kompetisi-citra-nusa",
  "category": "UMKM",
  "title": "BI Dampingi [580] UMKM Wastra Muda Lewat Kompetisi Citra Nusa",
  "deck": "Bank Indonesia menggandeng 580 UMKM wastra, mayoritas wirausaha muda, lewat kompetisi Citra Nusa dan melatih 2.156 UMKM lain memasarkan produk demi regenerasi UMKM budaya.",
  "date": "23 Agustus 2026",
  "image": "assets/img/bi-dampingi-580-umkm-wastra-muda-lewat-kompetisi-citra-nusa.jpg",
  "imageV": "mt4n83dv",
  "tags": [
   "UMKM",
   "Ekonomi Kreatif",
   "Bank Indonesia",
   "Wastra"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "umkm-ubi-madu-bakar-karawang-diklaim-beromzet-rp300-juta",
  "category": "UMKM",
  "title": "UMKM Ubi Madu Bakar Karawang Diklaim [Beromzet] Rp300 Juta",
  "deck": "UMKM Ubi Madu Bakar Mba Boled asal Karawang tumbuh dari satu toko jadi sekitar 20 outlet setelah menjadi UMKM binaan Pertamina sejak 2018, dengan omzet yang diklaim mencapai Rp300 juta per bulan.",
  "date": "22 Agustus 2026",
  "image": "assets/img/umkm-ubi-madu-bakar-karawang-diklaim-beromzet-rp300-juta.jpg",
  "imageV": "mt4n83ws",
  "tags": [
   "umkm",
   "ubi madu bakar",
   "pertamina",
   "karawang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461780-kisah-ubi-madu-bakar-asal-karawang-umkm-binaan-yang-diklaim-beromzet-hingga-rp300-juta"
 },
 {
  "slug": "rumah-bumn-bri-dampingi-umkm-keripik-pisang-naik-kelas",
  "category": "UMKM",
  "title": "Rumah BUMN BRI Dampingi UMKM Keripik Pisang [Naik Kelas]",
  "deck": "Program Rumah BUMN BRI mendampingi UMKM keripik pisang asal Sidoarjo mengembangkan usaha dari dapur rumah menjadi produk olahan bernilai tambah.",
  "date": "22 Agustus 2026",
  "image": "assets/img/rumah-bumn-bri-dampingi-umkm-keripik-pisang-naik-kelas.jpg",
  "imageV": "mt4n84bi",
  "tags": [
   "BRI",
   "UMKM",
   "Rumah BUMN",
   "ekonomi kerakyatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461778-sentuhan-rumah-bumn-bri-antar-keripik-pisang-lokal-tembus-malaysia-dan-hong-kong"
 },
 {
  "slug": "pertamina-sumbang-meja-kursi-baru-ke-sdn-manggarai-barat",
  "category": "BUMN",
  "title": "Pertamina [Sumbang] Meja Kursi Baru ke SDN Manggarai Barat",
  "deck": "PT Pertamina menyerahkan 39 meja dan 70 kursi lewat program TJSL untuk SDN Batu Cermin di Manggarai Barat, NTT, menggantikan perabot lama yang sudah rusak.",
  "date": "22 Agustus 2026",
  "image": "assets/img/pertamina-sumbang-meja-kursi-baru-ke-sdn-manggarai-barat.jpg",
  "imageV": "mt4n84uz",
  "tags": [
   "Pertamina",
   "TJSL",
   "Manggarai Barat",
   "NTT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461757-dari-meja-dan-kursi-baru-tumbuh-semangat-belajar-siswa-sdn-batu-cermin"
 },
 {
  "slug": "asbi-laporkan-dugaan-penggelapan-dana-ke-bareskrim-polri",
  "category": "Aksi Korporasi",
  "title": "ASBI Laporkan Dugaan [Penggelapan] Dana ke Bareskrim Polri",
  "deck": "Asuransi Bintang resmi melaporkan dugaan penggelapan uang dan investasi ke Bareskrim Polri dengan enam pihak terlapor, dan menyebut dampaknya berupa berkurangnya investasi SBN serta kas perusahaan.",
  "date": "22 Agustus 2026",
  "image": "assets/img/asbi-laporkan-dugaan-penggelapan-dana-ke-bareskrim-polri.jpg",
  "tags": [
   "ASBI",
   "Asuransi Bintang",
   "Bareskrim Polri",
   "penggelapan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1a06aebc59_db2741480e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nasi-investor-tambah-500-000-saham-hak-suara-jadi-5-87",
  "category": "Aksi Korporasi",
  "title": "NASI: Investor tambah [500.000] saham, hak suara jadi 5,87%",
  "deck": "Hartarto Ciputra melaporkan pembelian tidak langsung 500.000 saham NASI seharga Rp140 per lembar pada 21 Agustus 2026, hak suaranya naik dari 5,81% menjadi 5,87%.",
  "date": "22 Agustus 2026",
  "image": "assets/img/nasi-investor-tambah-500-000-saham-hak-suara-jadi-5-87.jpg",
  "tags": [
   "NASI",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22082026-7519-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kuki-ungkap-transaksi-material-senilai-213-130-tanpa-rups",
  "category": "Aksi Korporasi",
  "title": "KUKI Ungkap Transaksi [Material] Senilai 213.130 Tanpa RUPS",
  "deck": "KUKI melaporkan transaksi material senilai 213.130, setara 25 persen ekuitas perusahaan, untuk objek gedung, tanpa memerlukan persetujuan RUPS.",
  "date": "22 Agustus 2026",
  "image": "assets/img/kuki-ungkap-transaksi-material-senilai-213-130-tanpa-rups.jpg",
  "tags": [
   "KUKI",
   "transaksi material",
   "keterbukaan informasi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_KUKI_E025B_c74994e7-b794-45fd-ae77-070735b5ce3a-20260822161903.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xiif-bagikan-dividen-tunai-kik-simak-jadwalnya",
  "category": "Aksi Korporasi",
  "title": "XIIF Bagikan Dividen Tunai KIK, Simak [Jadwalnya]",
  "deck": "KIK XIIF membagikan dividen tunai paling banyak Rp123.978, dengan dividen per unit penyertaan hingga Rp81.726. Pembayaran dijadwalkan 27 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/xiif-bagikan-dividen-tunai-kik-simak-jadwalnya.jpg",
  "tags": [
   "XIIF",
   "dividen",
   "KIK",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_XIIF_E045_7fbcfa2f-a12f-42b8-b976-c71982e7b2bf-20260822153955.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-pecah-saham-rasio-1-4-lewat-stock-split",
  "category": "Aksi Korporasi",
  "title": "AADI Pecah Saham Rasio 1:4 lewat [Stock Split]",
  "deck": "RUPS AADI menyetujui pemecahan saham rasio 1:4, jumlah saham beredar naik dari 9.283 menjadi 182.973 lembar. BEI sudah beri persetujuan prinsip pada 22 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-pecah-saham-rasio-1-4-lewat-stock-split.jpg",
  "tags": [
   "AADI",
   "stock split",
   "pemecahan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_7880c9f5-584f-4ccb-8d9d-6853cfccbc44-20260822152357.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-lakukan-reverse-stock-dengan-rasio-2-43",
  "category": "Aksi Korporasi",
  "title": "AADI Lakukan [Reverse Stock] dengan Rasio 2:43",
  "deck": "PT Adaro Andalan Indonesia Tbk (AADI) menggabungkan sahamnya dengan rasio 2:43, mengubah nilai nominal dan jumlah saham beredar mulai 23 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-lakukan-reverse-stock-dengan-rasio-2-43.jpg",
  "tags": [
   "AADI",
   "reverse stock",
   "aksi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_ad85a90b-9ccd-4d05-9534-a765dea22f66-20260822152211.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-aadi-setujui-penambahan-modal-lewat-hmetd",
  "category": "Aksi Korporasi",
  "title": "RUPS AADI Setujui Penambahan Modal Lewat [HMETD]",
  "deck": "RUPS AADI menyetujui penambahan modal dengan skema HMETD rasio 1:23 seharga Rp91.823 per saham, disertai penerbitan waran dan obligasi konversi.",
  "date": "22 Agustus 2026",
  "image": "assets/img/rups-aadi-setujui-penambahan-modal-lewat-hmetd.jpg",
  "tags": [
   "AADI",
   "HMETD",
   "rights issue",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_bf9bc64f-b786-4a83-b33d-daca2564805a-20260822152112.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-bagikan-dividen-saham-rasio-1-10-rups-24-agustus",
  "category": "Aksi Korporasi",
  "title": "AADI Bagikan [Dividen Saham] Rasio 1:10, RUPS 24 Agustus",
  "deck": "AADI mengumumkan rencana dividen saham tahun buku 2026 dengan rasio 1 banding 10, total 1.239.879 saham baru, menanti persetujuan RUPS pada 24 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-bagikan-dividen-saham-rasio-1-10-rups-24-agustus.jpg",
  "tags": [
   "AADI",
   "dividen saham",
   "RUPS",
   "Adaro Andalan Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_5fe97756-b11a-4f7e-a491-dc2f7cc94f10-20260822151202.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-rombak-direksi-komisaris-rups-setujui-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "AADI Rombak Direksi-Komisaris, RUPS Setujui [PMTHMETD]",
  "deck": "RUPS AADI 11 Agustus 2026 menyetujui pergantian seluruh direksi dan komisaris serta rencana penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-rombak-direksi-komisaris-rups-setujui-pmthmetd.jpg",
  "tags": [
   "AADI",
   "RUPS",
   "PMTHMETD",
   "pergantian direksi-komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E013_8e98e557-4bf7-432e-a5d4-db5e99a0c0cf-20260822151017.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-siapkan-penambahan-modal-lewat-hmetd-rups-besok",
  "category": "Aksi Korporasi",
  "title": "AADI Siapkan Penambahan Modal Lewat [HMETD], RUPS Besok",
  "deck": "AADI mengumumkan rencana penambahan modal dengan HMETD, RUPS digelar 23 Agustus 2026 dan keterbukaan informasi lengkap menyusul sehari kemudian.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-siapkan-penambahan-modal-lewat-hmetd-rups-besok.jpg",
  "tags": [
   "AADI",
   "HMETD",
   "penambahan modal",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X1_81f73bc6-4ec6-43f0-9053-7b788e002d2e-20260822150501.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-rencanakan-reverse-stock-rasio-2-54-rups-besok",
  "category": "Aksi Korporasi",
  "title": "AADI Rencanakan [Reverse Stock] Rasio 2:54, RUPS Besok",
  "deck": "AADI mengumumkan rencana penggabungan saham (reverse stock) rasio 2:54, sudah disetujui prinsip oleh BEI, RUPS digelar 23 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-rencanakan-reverse-stock-rasio-2-54-rups-besok.jpg",
  "tags": [
   "AADI",
   "reverse stock",
   "aksi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X1_5b892b13-0a1a-4ee0-b4fb-4c34a94b95ea-20260822145627.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-rencanakan-dividen-saham-rasio-1-12-rups-24-agustus",
  "category": "Aksi Korporasi",
  "title": "AADI Rencanakan [Dividen] Saham Rasio 1:12, RUPS 24 Agustus",
  "deck": "AADI mengajukan dividen saham rasio 1 banding 12 senilai Rp92.839 ke RUPS 24 Agustus 2026, menambah 12.938.098 saham baru dari saldo laba.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-rencanakan-dividen-saham-rasio-1-12-rups-24-agustus.jpg",
  "tags": [
   "AADI",
   "dividen saham",
   "RUPS",
   "Adaro Andalan Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X1_0788417c-1118-4fde-a50b-28df67c7de3a-20260822145205.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-cabut-mapb-dari-papan-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "BEI Cabut [MAPB] dari Papan Pemantauan Khusus",
  "deck": "Bursa Efek Indonesia mencabut status pemantauan khusus saham Map Boga Adiperkasa (MAPB) dan memindahkannya ke Papan Pengembangan, efektif 22 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/bei-cabut-mapb-dari-papan-pemantauan-khusus.jpg",
  "tags": [
   "MAPB",
   "pemantauan khusus",
   "BEI",
   "papan pengembangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/969e07726d_bad18d8729.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hotl-masuk-papan-pemantauan-khusus-usai-anak-usaha-kena-pkpu",
  "category": "Aksi Korporasi",
  "title": "HOTL Masuk Papan [Pemantauan Khusus] Usai Anak Usaha Kena PKPU",
  "deck": "BEI memindahkan saham HOTL, Saraswati Griya Lestari Tbk, ke Papan Pemantauan Khusus setelah anak usahanya yang pendapatannya material dimohonkan PKPU, pailit, atau pembatalan perdamaian.",
  "date": "22 Agustus 2026",
  "image": "assets/img/hotl-masuk-papan-pemantauan-khusus-usai-anak-usaha-kena-pkpu.jpg",
  "tags": [
   "HOTL",
   "Pemantauan Khusus",
   "PKPU",
   "Saraswati Griya Lestari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/76e2417f94_777d4e5464.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpns-masuk-papan-pemantauan-khusus-bei-imbas-pendapatan-stagnan",
  "category": "Aksi Korporasi",
  "title": "DPNS Masuk Papan Pemantauan [Khusus] BEI Imbas Pendapatan Stagnan",
  "deck": "Bursa Efek Indonesia memasukkan saham Duta Pertiwi Nusantara (DPNS) ke daftar pemantauan khusus mulai 22 Agustus 2026 karena tidak ada perubahan pendapatan di laporan keuangan terakhir.",
  "date": "22 Agustus 2026",
  "image": "assets/img/dpns-masuk-papan-pemantauan-khusus-bei-imbas-pendapatan-stagnan.jpg",
  "tags": [
   "DPNS",
   "Duta Pertiwi Nusantara",
   "pemantauan khusus",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ee7f537f8d_b265ad6ef2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hipmi-investasi-rp1-010-t-dorong-pengusaha-jadi-pemasok",
  "category": "Industri",
  "title": "HIPMI: Investasi Rp1.010 T, Dorong Pengusaha Jadi [Pemasok]",
  "deck": "HIPMI mengapresiasi realisasi investasi semester I 2026 senilai Rp1.010,6 triliun dan mendorong pengusaha nasional ikut jadi pemasok dalam ekosistem hilirisasi.",
  "date": "22 Agustus 2026",
  "image": "assets/img/hipmi-investasi-rp1-010-t-dorong-pengusaha-jadi-pemasok.jpg",
  "imageV": "mt4n859j",
  "tags": [
   "investasi",
   "hipmi",
   "hilirisasi",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461662-investasi-tembus-rp1010-triliun-hipmi-dorong-pengusaha-nasional-jadi-bagian-utama-industrialisasi"
 },
 {
  "slug": "meja-setujui-peningkatan-modal-dasar-via-saham-bonus",
  "category": "Aksi Korporasi",
  "title": "MEJA Setujui Peningkatan Modal Dasar via [Saham Bonus]",
  "deck": "RUPSLB Ketiga MEJA menyetujui kenaikan modal dasar menjadi Rp208,65 miliar dan penerbitan 372,58 juta saham bonus dari kapitalisasi agio saham.",
  "date": "22 Agustus 2026",
  "image": "assets/img/meja-setujui-peningkatan-modal-dasar-via-saham-bonus.jpg",
  "tags": [
   "MEJA",
   "RUPSLB",
   "saham bonus",
   "modal dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8622af9af3_d2e4531a6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-raih-tiga-penghargaan-alpha-southeast-asia-2026",
  "category": "Perbankan",
  "title": "BRI Raih [Tiga] Penghargaan Alpha Southeast Asia 2026",
  "deck": "BRI meraih tiga penghargaan dari Alpha Southeast Asia 2026 untuk platform transaksi digital QLola, layanan cash management, dan inklusi keuangan.",
  "date": "22 Agustus 2026",
  "image": "assets/img/bri-raih-tiga-penghargaan-alpha-southeast-asia-2026.jpg",
  "imageV": "mt5sb493",
  "tags": [
   "BRI",
   "BBRI",
   "Alpha Southeast Asia",
   "QLola"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461652-bri-raih-tiga-penghargaan-bergengsi-alpha-southeast-asia-2026-kukuhkan-kepemimpinan-dalam-layanan-transaction-banking"
 },
 {
  "slug": "pertamina-salurkan-9-600-paket-sembako-ke-korban-gempa-flores",
  "category": "BUMN",
  "title": "Pertamina Salurkan [9.600] Paket Sembako ke Korban Gempa Flores",
  "deck": "Pertamina terus mendampingi warga terdampak gempa di Manggarai, NTT, lewat bantuan sembako, gas, dan pemulihan trauma bagi anak-anak.",
  "date": "22 Agustus 2026",
  "image": "assets/img/pertamina-salurkan-9-600-paket-sembako-ke-korban-gempa-flores.jpg",
  "imageV": "mt5sb4uw",
  "tags": [
   "Pertamina",
   "Gempa Flores",
   "NTT",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461651-pertamina-hadir-dampingi-warga-terdampak-gempa-flores"
 },
 {
  "slug": "pertamina-buka-posko-kesehatan-gratis-untuk-pengungsi-gempa-reo",
  "category": "BUMN",
  "title": "Pertamina Buka [Posko Kesehatan] Gratis untuk Pengungsi Gempa Reo",
  "deck": "Pertamina Patra Niaga membuka posko kesehatan gratis bagi pengungsi gempa di Reo, Manggarai, NTT, melayani pemeriksaan kesehatan, tekanan darah, dan pemberian obat serta vitamin.",
  "date": "22 Agustus 2026",
  "image": "assets/img/pertamina-buka-posko-kesehatan-gratis-untuk-pengungsi-gempa-reo.jpg",
  "imageV": "mt5v2zfu",
  "tags": [
   "Pertamina",
   "Gempa Manggarai",
   "NTT",
   "Posko Pertamina Peduli"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461649-pertamina-buka-posko-kesehatan-gratis-untuk-pengungsi-di-reo"
 },
 {
  "slug": "pertamina-kejar-ekspansi-panas-bumi-lewat-pge",
  "category": "Energi",
  "title": "Pertamina Kejar Ekspansi [Panas Bumi] Lewat PGE",
  "deck": "PGE menandatangani dua nota kesepahaman dengan PLN untuk unit tambahan PLTP Ulubelu dan Lahendong, serta menerima penugasan eksplorasi panas bumi baru dari pemerintah.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pertamina-kejar-ekspansi-panas-bumi-lewat-pge.jpg",
  "imageV": "mt5sb5d2",
  "tags": [
   "Pertamina",
   "panas bumi",
   "PGE",
   "energi terbarukan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461620-pertamina-terus-dorong-ekspansi-panas-bumi-nasional-di-iigce-2026"
 },
 {
  "slug": "pico-teken-mou-pasokan-baja-crc-dengan-posco-korea",
  "category": "Aksi Korporasi",
  "title": "PICO Teken [MoU] Pasokan Baja CRC dengan POSCO Korea",
  "deck": "PICO menandatangani MoU dengan POSCO untuk menjamin pasokan baja CRC bagi lini produksi drum bajanya, namun perusahaan menegaskan belum ada dampak keuangan yang bisa diukur.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pico-teken-mou-pasokan-baja-crc-dengan-posco-korea.jpg",
  "tags": [
   "PICO",
   "POSCO",
   "MoU",
   "industri baja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4964351229_b66a506030.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-gelar-rupslb-14-september-ubah-nama-jadi-remitra-global",
  "category": "Aksi Korporasi",
  "title": "MKNT Gelar RUPSLB 14 September, Ubah Nama Jadi [Remitra Global]",
  "deck": "RUPSLB 14 September 2026 akan memutuskan konversi utang jadi saham, ganti pengendali dan nama menjadi Remitra Global International, serta ekspansi ke manufaktur baja dan tambak udang.",
  "date": "21 Agustus 2026",
  "image": "assets/img/mknt-gelar-rupslb-14-september-ubah-nama-jadi-remitra-global.jpg",
  "tags": [
   "MKNT",
   "RUPSLB",
   "PMTHMETD",
   "Remitra Global"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1bcfa7a113_350f684afa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-meja-ungkap-rincian-pemegang-saham-usai-saham-bonus",
  "category": "Aksi Korporasi",
  "title": "RUPSLB MEJA Ungkap Rincian [Pemegang Saham] Usai Saham Bonus",
  "deck": "RUPSLB Ketiga MEJA menyetujui 99,99% suara untuk menaikkan modal dasar dan modal disetor lewat saham bonus, sekaligus mengonfirmasi susunan pemegang saham baru dengan total 2,608 miliar lembar saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/rupslb-meja-ungkap-rincian-pemegang-saham-usai-saham-bonus.jpg",
  "tags": [
   "MEJA",
   "RUPSLB",
   "saham bonus",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c151277aca_7e5e431170.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-teken-loi-pltp-ulubelu-lahendong-garap-cubadak-panti",
  "category": "Aksi Korporasi",
  "title": "PGEO Teken LoI PLTP Ulubelu-Lahendong, Garap [Cubadak Panti]",
  "deck": "PGE menandatangani dua Letter of Intent dengan PLN dan PLN Indonesia Power untuk PLTP Ulubelu dan Lahendong Bottoming Unit, serta menerima mandat eksplorasi panas bumi Cubadak Panti di Sumatra Barat.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "panas bumi",
   "PLTP Ulubelu",
   "PLN Indonesia Power"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ab297f5e8d_71ae011b3b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-sambal-sumut-binaan-bri-tembus-pasar-singapura",
  "category": "UMKM",
  "title": "UMKM Sambal Sumut Binaan BRI Tembus Pasar [Singapura]",
  "deck": "Quinn Kitchen, UMKM sambal binaan BRI asal Medan, memperkenalkan produknya di pameran Singapura setelah memanfaatkan pembiayaan dan layanan digital bank tersebut sejak 2014.",
  "date": "21 Agustus 2026",
  "image": "assets/img/umkm-sambal-sumut-binaan-bri-tembus-pasar-singapura.jpg",
  "imageV": "mt5sb5xi",
  "tags": [
   "UMKM",
   "BRI",
   "Singapura",
   "Sumatera Utara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461582-produk-umkm-asal-sumut-perluas-dampak-bersama-pemberdayaan-bri-pikat-pembeli-dari-singapura-hingga-belanda"
 },
 {
  "slug": "xmgb-catat-pengurangan-unit-penyertaan-jadi-84-juta",
  "category": "Aksi Korporasi",
  "title": "XMGB Catat [Pengurangan] Unit Penyertaan Jadi 84 Juta",
  "deck": "Unit penyertaan ETF XMGB berkurang 10 juta unit menjadi 84 juta per 20 Agustus 2026, pencatatan baru berlaku mulai 24 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/xmgb-catat-pengurangan-unit-penyertaan-jadi-84-juta.jpg",
  "tags": [
   "XMGB",
   "ETF",
   "Majoris Asset Management",
   "reksa dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6dbad1b495_fded32c894.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-lunasi-obligasi-dan-sukuk-rp463-miliar-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "PPGD [Lunasi] Obligasi dan Sukuk Rp463 Miliar Jatuh Tempo",
  "deck": "Obligasi Rp228,025 miliar dan sukuk Rp235,04 miliar milik PPGD jatuh tempo 24 Agustus 2026; perusahaan menyatakan siap melunasinya dari fasilitas pinjaman bank.",
  "date": "21 Agustus 2026",
  "image": "assets/img/ppgd-lunasi-obligasi-dan-sukuk-rp463-miliar-jatuh-tempo.jpg",
  "tags": [
   "PPGD",
   "obligasi",
   "sukuk",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a31d4faf6a_07f0eb8b2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-okas-melonjak-manajemen-sebut-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "Saham OKAS Melonjak, Manajemen Sebut Tak Ada Info [Material]",
  "deck": "Volume transaksi OKAS melonjak lebih dari 20 kali dan harga naik 8,47% pada 19 Agustus 2026, memicu permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "21 Agustus 2026",
  "image": "assets/img/saham-okas-melonjak-manajemen-sebut-tak-ada-info-material.jpg",
  "tags": [
   "OKAS",
   "Ancora Indonesia Resources",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0396750d57_fa88a653da.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-catatkan-133-487-saham-baru-dari-konversi-waran-seri-ii",
  "category": "Aksi Korporasi",
  "title": "INET Catatkan 133.487 Saham Baru dari [Konversi] Waran Seri II",
  "deck": "BEI mencatat tambahan 133.487 saham INET hasil konversi Waran Seri II, sehingga total saham beredar naik menjadi 22.375.536.318 lembar mulai 24 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/inet-catatkan-133-487-saham-baru-dari-konversi-waran-seri-ii.jpg",
  "tags": [
   "INET",
   "Waran Seri II",
   "Pencatatan Saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0057122704_485b7e5c0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-catat-konversi-200-saham-dari-eksekusi-waran-seri-i",
  "category": "Aksi Korporasi",
  "title": "CYBR catat konversi 200 saham dari eksekusi [waran] Seri I",
  "deck": "ITSEC Asia mencatatkan 200 saham baru hasil konversi 200 waran seri I, saham beredar naik jadi 13.483.357.705 lembar per 24 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "waran seri I",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c13e7bf63_604b62fc18.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-obligasi-sukuk-rp2-47-triliun-dipangkas-pefindo-ke-d",
  "category": "Aksi Korporasi",
  "title": "WIKA Obligasi-Sukuk Rp2,47 Triliun Dipangkas Pefindo ke [D]",
  "deck": "Pefindo menurunkan peringkat obligasi dan sukuk mudharabah WIKA senilai total Rp2,47 triliun dari idCCC menjadi idD, menyusul penangguhan pembayaran kupon yang jatuh tempo 18 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/wika-obligasi-sukuk-rp2-47-triliun-dipangkas-pefindo-ke-d.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "gagal bayar",
   "Pefindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f76d559150_d02612837d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbld-tambah-fasilitas-kredit-rp100-miliar-dari-bank-victoria",
  "category": "Aksi Korporasi",
  "title": "BBLD Tambah [Fasilitas Kredit] Rp100 Miliar dari Bank Victoria",
  "deck": "Buana Finance menambah fasilitas kredit Rp100 miliar dari Bank Victoria International, total pinjaman naik jadi Rp554,16 miliar atau 39,38 persen dari ekuitas per akhir 2025.",
  "date": "21 Agustus 2026",
  "image": "assets/img/bbld-tambah-fasilitas-kredit-rp100-miliar-dari-bank-victoria.jpg",
  "tags": [
   "BBLD",
   "Buana Finance",
   "transaksi material",
   "Bank Victoria International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1e0d2e8fea_9b3c9c964d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-pastikan-tak-ada-aksi-korporasi-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BWPT Pastikan Tak Ada Aksi Korporasi di Balik [Volatilitas] Saham",
  "deck": "BWPT menjawab permintaan penjelasan volatilitas dari BEI: tidak ada informasi material tersembunyi, tanpa rencana aksi korporasi, dan pemegang saham utama belum berencana ubah kepemilikan.",
  "date": "21 Agustus 2026",
  "image": "assets/img/bwpt-pastikan-tak-ada-aksi-korporasi-di-balik-volatilitas-saham.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4e6c64fc27_a14e13ca34.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-kucurkan-pinjaman-rp1-18-triliun-ke-anak-usaha-tambang",
  "category": "Aksi Korporasi",
  "title": "SINI Kucurkan [Pinjaman] Rp1,18 Triliun ke Anak Usaha Tambang",
  "deck": "Singaraja Putra mengucurkan pinjaman modal kerja Rp1,18 triliun ke anak usaha tambang batu bara PKP dan PBP, bunga 10,95 persen per tahun, sebagai realisasi dana hasil penambahan modal (rights issue).",
  "date": "21 Agustus 2026",
  "image": "assets/img/sini-kucurkan-pinjaman-rp1-18-triliun-ke-anak-usaha-tambang.jpg",
  "tags": [
   "SINI",
   "rights issue",
   "tambang batu bara",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b483c6e1e6_9c4d82a16f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelni-pelindo-buka-posko-bantuan-gempa-ntt-di-priok",
  "category": "BUMN",
  "title": "PELNI-Pelindo Buka Posko [Bantuan] Gempa NTT di Priok",
  "deck": "PELNI dan Pelindo, didukung Kementerian Perhubungan, membuka posko bantuan kemanusiaan di Tanjung Priok untuk korban gempa NTT, disertai potongan tarif muatan 100 persen di kapal PELNI.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pelni-pelindo-buka-posko-bantuan-gempa-ntt-di-priok.jpg",
  "imageV": "mt5sb6dt",
  "tags": [
   "PELNI",
   "Pelindo",
   "gempa NTT",
   "Tanjung Priok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461544-bersama-kemenhub-pelni-dan-pelindo-buka-posko-bantuan-kemanusiaan-gempa-ntt-di-tanjung-priok"
 },
 {
  "slug": "nsss-direksi-geser-37-5-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Geser 37,5 Juta Saham Lewat [Repo]",
  "deck": "Seorang direksi NSSS mencatatkan transaksi jual dan beli saham lewat skema gadai saham (repo) pada 21 Agustus 2026, membuat kepemilikannya berkurang bersih 37,5 juta lembar.",
  "date": "21 Agustus 2026",
  "image": "assets/img/nsss-direksi-geser-37-5-juta-saham-lewat-repo.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-5712-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-kepemilikan-direksi-naik-ke-6-05-lewat-skema-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Kepemilikan [Direksi] Naik ke 6,05% Lewat Skema Repo",
  "deck": "Samuel Sekuritas Indonesia, pelapor berjabatan direksi di RLCO, menambah 34,3 juta saham lewat dua transaksi repo, mengerek hak suaranya dari 4,95 persen menjadi 6,05 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/rlco-kepemilikan-direksi-naik-ke-6-05-lewat-skema-repo.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-5044-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-tarik-pinjaman-afiliasi-us-55-juta-dari-kbank",
  "category": "Aksi Korporasi",
  "title": "BMAS Tarik Pinjaman [Afiliasi] US$55 Juta dari KBank",
  "deck": "BMAS menarik pinjaman bilateral pertama US$55 juta dari KBank, pemegang saham pengendalinya, dari total fasilitas US$341 juta untuk mendukung likuiditas dan kredit.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "transaksi afiliasi",
   "pinjaman bilateral",
   "KBank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dc15a9d8d9_728fc54dbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-lepas-83-7-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi Lepas 83,7 Juta Saham lewat [Repo]",
  "deck": "Seorang anggota direksi MD Entertainment melepas 83,7 juta saham FILM lewat pencairan perjanjian repo, hak suaranya turun dari 7,55 persen menjadi 6,78 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/film-direksi-lepas-83-7-juta-saham-lewat-repo.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-4176-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-8-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama Tambah [8,3 Juta] Saham",
  "deck": "Tunggal Jaya Investama menambah 8,3 juta saham IMPC pada 19-20 Agustus 2026, menaikkan hak suaranya tipis menjadi 37,14 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/impc-tunggal-jaya-investama-tambah-8-3-juta-saham.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "Tunggal Jaya Investama",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-4743-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bkdp-butuh-rp222-miliar-danai-proyek-hotel-hyatt",
  "category": "Aksi Korporasi",
  "title": "BKDP Butuh [Rp222 Miliar] Danai Proyek Hotel Hyatt",
  "deck": "BKDP menjawab permintaan penjelasan lanjutan Bursa: penutupan tiga anak usaha, kebutuhan dana Rp222 miliar untuk hotel Hyatt Centric, dan piutang macet dari penyewa yang sudah tutup.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKDP",
   "Bukit Darmo Property",
   "properti",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3d6d8cf532_bbcd9979dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-lelang-aset-cetakan-senilai-rp478-6-juta",
  "category": "Aksi Korporasi",
  "title": "WSBP Lelang [Aset] Cetakan Senilai Rp478,6 Juta",
  "deck": "WSBP melelang 177 set cetakan non-produktif di Plant Cibitung senilai Rp478,6 juta lewat KPKNL Bekasi, bagian dari implementasi Perjanjian Perdamaian restrukturisasi utang.",
  "date": "21 Agustus 2026",
  "image": "assets/img/wsbp-lelang-aset-cetakan-senilai-rp478-6-juta.jpg",
  "tags": [
   "WSBP",
   "lelang aset",
   "restrukturisasi utang",
   "Waskita Beton Precast"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50e9c23480_cbe191db17.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-fpni-meroket-24-42-manajemen-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "Saham FPNI Meroket 24,42%, Manajemen: Tak Ada [Info Material]",
  "deck": "Bursa meminta penjelasan usai transaksi saham FPNI melonjak drastis pada 19 Agustus 2026, dan Lotte Chemical Titan menyatakan tidak ada informasi material di baliknya.",
  "date": "21 Agustus 2026",
  "image": "assets/img/saham-fpni-meroket-24-42-manajemen-tak-ada-info-material.jpg",
  "tags": [
   "FPNI",
   "volatilitas saham",
   "Lotte Chemical Titan",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/58fb1e9a00_c5cd92e9a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "real-harmoni-harum-propertindo-lepas-76-1-juta-saham",
  "category": "Aksi Korporasi",
  "title": "REAL: Harmoni Harum Propertindo [Lepas] 76,1 Juta Saham",
  "deck": "Pemegang saham Harmoni Harum Propertindo menjual 76,1 juta saham REAL pada 20 Agustus 2026, menurunkan hak suaranya dari 15,83% menjadi 14,68%.",
  "date": "21 Agustus 2026",
  "image": "assets/img/real-harmoni-harum-propertindo-lepas-76-1-juta-saham.jpg",
  "tags": [
   "REAL",
   "kepemilikan saham",
   "Harmoni Harum Propertindo",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-3312-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-raih-proyek-lanjutan-terminal-1a-bandara-soetta",
  "category": "Aksi Korporasi",
  "title": "PTPP Raih Proyek [Lanjutan] Terminal 1A Bandara Soetta",
  "deck": "PTPP meraih proyek lanjutan revitalisasi Terminal 1A Bandara Soekarno-Hatta senilai Rp1,19 triliun, dikerjakan selama 365 hari mulai 21 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/ptpp-raih-proyek-lanjutan-terminal-1a-bandara-soetta.jpg",
  "tags": [
   "PTPP",
   "konstruksi",
   "bandara",
   "kontrak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8d5434474b_72b6fae572.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hd-waran-terstruktur-bbca-disesuaikan-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "HD: Waran Terstruktur [BBCA] Disesuaikan Usai Dividen Tunai",
  "deck": "KGI Sekuritas (HD) menyesuaikan harga pelaksanaan dan rasio tiga waran terstruktur BBCA menyusul dividen tunai BBCA, efektif 31 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "BBCA",
   "waran terstruktur",
   "KGI Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d63b88d435_1e773c30c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-mdia-masuk-papan-pemantauan-khusus-bei-24-agustus",
  "category": "Aksi Korporasi",
  "title": "Saham [MDIA] Masuk Papan Pemantauan Khusus BEI 24 Agustus",
  "deck": "BEI memasukkan saham MDIA ke Papan Pemantauan Khusus mulai 24 Agustus 2026, menyusul penghentian sementara perdagangan lebih dari sehari akibat aktivitas transaksi.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDIA",
   "Papan Pemantauan Khusus",
   "BEI",
   "Intermedia Capital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d1dda49e67_40e55ff746.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "taxi-gelar-rupst-ketiga-usai-kuorum-gagal-dua-kali",
  "category": "Aksi Korporasi",
  "title": "TAXI Gelar RUPST Ketiga usai [Kuorum] Gagal Dua Kali",
  "deck": "Setelah RUPST kedua gagal kuorum pada 17 Juli 2026, Express Transindo Utama menggelar RUPST ketiga pada 9 September 2026 berdasarkan penetapan kuorum khusus dari OJK.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAXI",
   "RUPST",
   "Express Transindo Utama",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/609c92964f_deacd32112.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-direktur-sustainability-budiawansyah-mundur",
  "category": "Aksi Korporasi",
  "title": "INCO: Direktur [Sustainability] Budiawansyah Mundur",
  "deck": "Direktur sekaligus Chief Sustainability and Corporate Affairs Officer Vale Indonesia, Budiawansyah, mengajukan pengunduran diri karena alasan keluarga, menunggu persetujuan RUPS.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "Vale Indonesia",
   "direksi",
   "pengunduran diri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/79cd5a66f8_dd8b666d58.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-694-bi-rate-tetap-5-75-persen",
  "category": "Moneter",
  "title": "Rupiah [Menguat] ke Rp17.694, BI Rate Tetap 5,75 Persen",
  "deck": "Rupiah ditutup menguat 54 poin ke Rp17.694 per dolar AS, ditopang keputusan BI menahan suku bunga acuan sementara arah suku bunga The Fed masih belum jelas.",
  "date": "21 Agustus 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-694-bi-rate-tetap-5-75-persen.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "BI Rate",
   "FOMC"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461519-rupiah-menguat-54-poin-ke-rp17694-per-dolar-as-didukung-bi-rate-575-persen"
 },
 {
  "slug": "zp-sesuaikan-harga-pelaksanaan-waran-bbca-usai-dividen-interim",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Harga Pelaksanaan] Waran BBCA Usai Dividen Interim",
  "deck": "Maybank Sekuritas (ZP) menyesuaikan harga pelaksanaan dan rasio konversi waran BBCAZPCZ6A dan BBCAZPCH7A menyusul dividen interim BCA Rp25 per saham, efektif 31 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "BBCA",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/688d17eb79_7568564872.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-rilis-materi-public-expose-laba-bersih-naik-16-di-h1-2026",
  "category": "Aksi Korporasi",
  "title": "BWPT Rilis Materi Public Expose, [Laba Bersih] Naik 16% di H1 2026",
  "deck": "Eagle High Plantations (BWPT) memaparkan materi Public Expose semester I 2026 kepada BEI, menunjukkan laba bersih dan pendapatan tumbuh dua digit serta rasio utang yang terus menyusut.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a2ef4165e5_866c605506.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-10-anak-usaha-bagi-dividen-interim-rp762-66-m",
  "category": "Aksi Korporasi",
  "title": "TAPG: 10 Anak Usaha Bagi Dividen Interim [Rp762,66 M]",
  "deck": "Sepuluh anak usaha Triputra Agro Persada membagikan dividen interim senilai Rp762,66 miliar kepada PT Agro Multi Persada, perusahaan induk yang 94,93 persen sahamnya dimiliki TAPG.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "dividen interim",
   "transaksi afiliasi",
   "Triputra Agro Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c33e36585_157e9a7cb6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-berpotensi-tunda-bayar-bunga-obligasi-rp60-8-miliar",
  "category": "Aksi Korporasi",
  "title": "ADHI Berpotensi [Tunda] Bayar Bunga Obligasi Rp60,8 Miliar",
  "deck": "ADHI menyatakan berpotensi menunda pembayaran bunga obligasi ke-17 senilai Rp60,82 miliar yang jatuh tempo 24 Agustus 2026, setelah rapat pemegang obligasi gagal capai kuorum.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "gagal bayar",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/050a5f0e0a_2cade5c43d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-tawarkan-cicilan-emas-redam-gejolak-harga",
  "category": "BUMN",
  "title": "Pegadaian Tawarkan [Cicilan] Emas Redam Gejolak Harga",
  "deck": "Pegadaian meluncurkan skema cicilan tabungan emas dengan harga terkunci sejak akad, agar cicilan tak berubah meski harga emas pasar naik.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pegadaian-tawarkan-cicilan-emas-redam-gejolak-harga.jpg",
  "imageV": "mt5v302g",
  "tags": [
   "Pegadaian",
   "emas",
   "investasi emas",
   "cicilan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461512-pegadaian-hadirkan-solusi-cicil-tabungan-emas-untuk-atasi-fluktuasi-harga-emas"
 },
 {
  "slug": "danantara-kebut-merger-dan-restrukturisasi-pt-pp",
  "category": "BUMN",
  "title": "Danantara Kebut [Merger] dan Restrukturisasi PT PP",
  "deck": "Danantara menyiapkan skema merger PT PP sebelum restrukturisasi, menekankan proses harus tuntas tanpa penundaan agar struktur bisnis lebih fokus pada bisnis inti.",
  "date": "21 Agustus 2026",
  "image": "assets/img/danantara-kebut-merger-dan-restrukturisasi-pt-pp.jpg",
  "imageV": "mt5v30nd",
  "tags": [
   "PT PP",
   "Danantara",
   "BUMN Karya",
   "Merger BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461508-disiapkan-skema-merger-dan-restrukturisasi-pt-pp-danantara-harus-tuntas"
 },
 {
  "slug": "bri-group-sabet-enam-penghargaan-finance-asia",
  "category": "Perbankan",
  "title": "BRI Group Sabet [Enam] Penghargaan Finance Asia",
  "deck": "BRI Group meraih enam penghargaan di ajang Asia's Best Companies dan Finance Asia Awards 2026, termasuk gelar Best CEO untuk Dirut Hery Gunardi.",
  "date": "21 Agustus 2026",
  "image": "assets/img/bri-group-sabet-enam-penghargaan-finance-asia.jpg",
  "imageV": "mt5v310e",
  "tags": [
   "BRI",
   "Finance Asia",
   "penghargaan",
   "perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461506-bri-group-sabet-enam-penghargaan-internasional-dari-finance-asia-perkuat-posisi-sebagai-institusi-keuangan-berkelas-dunia"
 },
 {
  "slug": "aspr-total-liabilitas-melonjak-21-69-jadi-rp183-17-miliar",
  "category": "Aksi Korporasi",
  "title": "ASPR: Total [Liabilitas] Melonjak 21,69% Jadi Rp183,17 Miliar",
  "deck": "ASPR melaporkan total liabilitas naik 21,69% jadi Rp183,17 miliar per Juni 2026, didorong pemakaian fasilitas kredit rekening koran dan kenaikan utang usaha akibat pembelian yang meningkat.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASPR",
   "liabilitas",
   "utang bank",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/784738c7a4_030f06073b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-awasi-ketat-restrukturisasi-wika",
  "category": "BUMN",
  "title": "Danantara [Awasi] Ketat Restrukturisasi WIKA",
  "deck": "Danantara menuntut laporan keuangan WIKA disusun sesuai kondisi riil sebagai dasar restrukturisasi, bukan rekayasa angka di atas kertas.",
  "date": "21 Agustus 2026",
  "image": "assets/img/danantara-awasi-ketat-restrukturisasi-wika.jpg",
  "imageV": "mt5v31ea",
  "tags": [
   "WIKA",
   "Danantara",
   "restrukturisasi BUMN",
   "Dony Oskaria"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461499-restrukturisasi-wika-dalam-kawalan-ketat-danantara"
 },
 {
  "slug": "direksi-cybr-borong-4-57-juta-saham-itsec-asia",
  "category": "Aksi Korporasi",
  "title": "Direksi [CYBR] Borong 4,57 Juta Saham ITSEC Asia",
  "deck": "Direksi ITSEC Asia, Patrick Rudolf Dannacher, membeli 4,57 juta saham CYBR secara tidak langsung dalam 19 transaksi sepanjang 11-19 Agustus 2026, menaikkan hak suaranya menjadi 0,64%.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-8719-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abmm-direktur-haris-mustarto-mundur-rups-maks-90-hari",
  "category": "Aksi Korporasi",
  "title": "ABMM: Direktur Haris Mustarto [Mundur], RUPS Maks 90 Hari",
  "deck": "Direktur ABM Investama Haris Mustarto mengundurkan diri efektif 19 Agustus 2026. Perseroan wajib menggelar RUPS paling lambat 90 hari kemudian.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABMM",
   "ABM Investama",
   "direksi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/75ab29f653_5f864f257a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baik-komisaris-borong-saham-rp1-42-miliar-naik-146",
  "category": "Aksi Korporasi",
  "title": "BAIK: Komisaris [Borong] Saham Rp1,42 Miliar, Naik 146%",
  "deck": "Komisaris BAIK, Yeni Isnawati, membeli 5 juta saham pada 19 Agustus 2026 seharga Rp284 per lembar, menaikkan kepemilikannya dari 3,42 juta menjadi 8,42 juta saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "kepemilikan saham",
   "komisaris",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-9817-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obmd-jadwalkan-rupslb-29-september-2026-dps-4-september",
  "category": "Aksi Korporasi",
  "title": "OBMD Jadwalkan RUPSLB [29 September 2026], DPS 4 September",
  "deck": "PT OBM Drilchem Tbk (OBMD) mengumumkan rencana RUPSLB yang digelar elektronik pada 29 September 2026, dengan pemegang saham per 4 September 2026 yang berhak hadir.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OBMD",
   "RUPSLB",
   "OBM Drilchem",
   "Rapat Umum Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d12856d285_87c39e33c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mrat-bantah-punya-info-material-di-balik-lonjakan-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MRAT Bantah Punya Info Material di Balik [Lonjakan] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan MRAT setelah harga dan volume sahamnya melonjak pada 18 Agustus 2026; manajemen menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MRAT",
   "Mustika Ratu",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1a30892e54_bbfc28f5a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-jadwalkan-public-expose-tahunan-pada-7-september",
  "category": "Aksi Korporasi",
  "title": "UNTR Jadwalkan [Public Expose] Tahunan pada 7 September",
  "deck": "United Tractors akan memaparkan kinerja tahun buku 2026 secara daring pada 7 September 2026, dengan tujuh direksi dijadwalkan hadir.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "United Tractors",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/19de197cbb_9abf8f9472.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-direksi-jual-9-35-juta-saham-suara-tetap-mayoritas",
  "category": "Aksi Korporasi",
  "title": "INPS: Direksi [Jual] 9,35 Juta Saham, Suara Tetap Mayoritas",
  "deck": "Direksi Graha Inti Guna Persada melepas 9,35 juta saham INPS senilai sekitar Rp3,27 miliar pada 20 Agustus 2026, hak suaranya turun tipis jadi 80,62 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "kepemilikan saham",
   "direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-1389-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-ekuitas-positif-rp3-59-triliun-usai-rights-issue",
  "category": "Aksi Korporasi",
  "title": "SINI: Ekuitas [Positif] Rp3,59 Triliun Usai Rights Issue",
  "deck": "Laporan keuangan per 31 Juli 2026 menunjukkan ekuitas SINI berbalik positif jadi Rp3,59 triliun dari defisit Rp687,4 miliar, usai rampungnya penawaran umum terbatas.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "rights issue",
   "ekuitas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5edda94582_4633c5250a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supr-protelindo-perpanjang-tender-offer-hingga-23-september",
  "category": "Aksi Korporasi",
  "title": "SUPR: Protelindo perpanjang [tender offer] hingga 23 September",
  "deck": "Protelindo memperpanjang masa penawaran tender sukarela atas saham SUPR selama 30 hari dengan harga tetap Rp45.000 per saham, hingga 23 September 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "tender offer",
   "go private",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ba017ca88c_c2d77c158a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-perpanjang-tender-saham-solusi-tunas-pratama-tbk",
  "category": "Aksi Korporasi",
  "title": "PRTL [perpanjang] tender saham Solusi Tunas Pratama Tbk",
  "deck": "Protelindo memperpanjang masa penawaran tender sukarela atas saham Solusi Tunas Pratama Tbk selama 30 hari hingga 23 September 2026, dengan harga tetap Rp45.000 per saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "tender offer",
   "Solusi Tunas Pratama",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/64ff399ea5_1e38c3a7ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmf-rombak-direksi-dan-komisaris-lynn-ramli-jadi-dirut",
  "category": "Aksi Korporasi",
  "title": "SMMF Rombak [Direksi] dan Komisaris, Lynn Ramli Jadi Dirut",
  "deck": "Pemegang saham SMMF mengganti direktur utama dan komisaris utama lewat keputusan sirkuler RUPST, efektif menjabat setelah lolos uji kelayakan OJK.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMF",
   "pergantian direksi",
   "komisaris",
   "Sinar Mas Multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3d7755d64a_d681e5a3f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmf-ubah-anggaran-dasar-perluas-lini-usaha-pembiayaan",
  "category": "Aksi Korporasi",
  "title": "SMMF Ubah Anggaran Dasar, Perluas [Lini Usaha] Pembiayaan",
  "deck": "SMMF mengesahkan perubahan anggaran dasar lewat keputusan sirkuler pemegang saham, memperluas izin usaha ke pembiayaan infrastruktur dan perdagangan internasional sesuai KBLI 2025.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMF",
   "anggaran dasar",
   "RUPST",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/fdb2fb4500_9c1eb4d921.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tspc-bogamulia-nagadi-tambah-2-1-juta-saham-kepemilikan-91-04",
  "category": "Aksi Korporasi",
  "title": "TSPC: Bogamulia Nagadi tambah [2,1 juta] saham, kepemilikan 91,04%",
  "deck": "Bogamulia Nagadi, pemegang saham utama TSPC, membeli 2.114.200 saham pada 19 Agustus 2026, menaikkan kepemilikan menjadi 91,04 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TSPC",
   "kepemilikan saham",
   "Tempo Scan Pacific",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-3277-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bslt-fitch-afirmasi-rating-a-idn-outlook-stabil",
  "category": "Aksi Korporasi",
  "title": "BSLT: Fitch afirmasi rating A(idn), outlook [stabil]",
  "deck": "Fitch Ratings Indonesia mempertahankan peringkat nasional Bank SulutGo di A(idn) dengan outlook stabil, sepekan sebelum obligasi Rp750 miliar jatuh tempo 7 September 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSLT",
   "Bank SulutGo",
   "Fitch Ratings",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1cc960ec19_fa83590e20.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-soroti-bank-emas-bri-kelola-153-ton",
  "category": "Perbankan",
  "title": "Presiden Prabowo Soroti Bank Emas, BRI Kelola [153] Ton",
  "deck": "Presiden Prabowo menyoroti potensi Bank Emas Indonesia, sementara BRI Group melalui Holding Ultra Mikro sudah mengelola ekosistem emas senilai 153 ton.",
  "date": "21 Agustus 2026",
  "image": "assets/img/presiden-prabowo-soroti-bank-emas-bri-kelola-153-ton.jpg",
  "imageV": "mt5v31sf",
  "tags": [
   "Bank Emas",
   "BRI",
   "Pegadaian",
   "Holding Ultra Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461433-presiden-prabowo-ungkap-potensi-bank-emas-bri-group-kelola-ekosistem-emas-153-ton-melalui-ekosistem-ultra-mikro"
 },
 {
  "slug": "cash-sandra-angela-tambah-saham-hak-suara-ke-8-07",
  "category": "Aksi Korporasi",
  "title": "CASH: Sandra Angela [Tambah] Saham, Hak Suara ke 8,07%",
  "deck": "Pemegang saham Sandra Angela menambah 2.987.700 saham Cashlez lewat pembelian tidak langsung, mengangkat hak suaranya dari 7,95% menjadi 8,07%.",
  "date": "21 Agustus 2026",
  "image": "assets/img/cash-sandra-angela-tambah-saham-hak-suara-ke-8-07.jpg",
  "tags": [
   "CASH",
   "Cashlez Worldwide Indonesia",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-6924-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direktur-pegadaian-jadi-ketua-umum-ibma-asosiasi-emas-baru",
  "category": "Perbankan",
  "title": "Direktur Pegadaian Jadi Ketua Umum [IBMA], Asosiasi Emas Baru",
  "deck": "Indonesia Bullion Market Association resmi terbentuk untuk menyatukan pelaku industri emas nasional, dipimpin Direktur Pegadaian Selfie Dewiyanti sebagai ketua umum pertama.",
  "date": "21 Agustus 2026",
  "image": "assets/img/direktur-pegadaian-jadi-ketua-umum-ibma-asosiasi-emas-baru.jpg",
  "imageV": "mt5v326r",
  "tags": [
   "IBMA",
   "bank emas",
   "Pegadaian",
   "BSI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461432-dorong-pembangunan-ekosistem-emas-berstandar-internasional-direktur-pegadaian-resmi-jadi-ketua-umum-indonesia-bullion-market-association"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-jual-saham-lagi-untuk-restrukturisasi-grup",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Jual Saham Lagi untuk [Restrukturisasi] Grup",
  "deck": "Putrasakti Mandiri menjual 900.000 saham KDTN pada 19 Agustus 2026 seharga Rp361, memangkas hak suaranya dari 34,63 persen menjadi 34,56 persen sebagai bagian restrukturisasi kepemilikan grup.",
  "date": "21 Agustus 2026",
  "image": "assets/img/kdtn-putrasakti-mandiri-jual-saham-lagi-untuk-restrukturisasi-grup.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-6054-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-koreksi-susunan-direksi-komisaris-eximbank",
  "category": "Aksi Korporasi",
  "title": "BEXI [Koreksi] Susunan Direksi-Komisaris Eximbank",
  "deck": "LPEI mengoreksi laporan sehari sebelumnya soal pergantian direksi dan dewan direktur, merinci nama lama dan baru beserta tanggal efektif tiap jabatan.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9565ce14a3_a1c8eb6e41.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pngo-gelar-rupslb-14-september-revisi-anggaran-dasar-dan-kbli",
  "category": "Aksi Korporasi",
  "title": "PNGO Gelar RUPSLB 14 September, Revisi [Anggaran Dasar] dan KBLI",
  "deck": "Perseroan memanggil RUPSLB pada 14 September 2026 untuk mengubah anggaran dasar terkait klasifikasi usaha, kewenangan direksi, dan penyesuaian daftar pemegang saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pngo-gelar-rupslb-14-september-revisi-anggaran-dasar-dan-kbli.jpg",
  "tags": [
   "PNGO",
   "RUPSLB",
   "Anggaran Dasar",
   "AEP Pinago Plantations"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/86fe94729b_3bfbdd0440.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgun-jawab-permintaan-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "PGUN Jawab Permintaan Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "PGUN merespons permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGUN",
   "volatilitas transaksi",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9d348a5136_c7374c90ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-direksi-beli-tambahan-500-saham-rp732-ribu",
  "category": "Aksi Korporasi",
  "title": "NICK: Direksi [Beli] Tambahan 500 Saham Rp732 Ribu",
  "deck": "Nicholas Santoso, direksi Charnic Capital, melaporkan pembelian 500 saham baru pada 18 Agustus 2026, menambah kepemilikannya menjadi 167.000 lembar.",
  "date": "21 Agustus 2026",
  "image": "assets/img/nick-direksi-beli-tambahan-500-saham-rp732-ribu.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-1464-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-akuisisi-bisnis-otomotif-cycle-carriage",
  "category": "Aksi Korporasi",
  "title": "TPIA Akuisisi Bisnis Otomotif [Cycle & Carriage]",
  "deck": "Chandra Asri Group menandatangani perjanjian bersyarat untuk mengakuisisi bisnis otomotif Cycle & Carriage di Singapura dan Malaysia, memperluas platform mobilitas regionalnya.",
  "date": "21 Agustus 2026",
  "image": "assets/img/tpia-akuisisi-bisnis-otomotif-cycle-carriage.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "akuisisi",
   "otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b144b134ab_8f499fbf88.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-asuransi-umum-lgi-tumbuh-di-tengah-ekonomi-menantang",
  "category": "Pasar Modal",
  "title": "Laba Asuransi Umum LGI [Tumbuh] di Tengah Ekonomi Menantang",
  "deck": "PT Lippo General Insurance Tbk membukukan kenaikan pendapatan dan laba sebelum pajak pada semester I 2026, melanjutkan tren kinerja rekor di tengah ekonomi yang masih menantang.",
  "date": "21 Agustus 2026",
  "image": "assets/img/laba-asuransi-umum-lgi-tumbuh-di-tengah-ekonomi-menantang.jpg",
  "imageV": "mt5v32l3",
  "tags": [
   "asuransi",
   "Lippo General Insurance",
   "laporan keuangan",
   "IFRS 17"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461401-di-tengah-ekonomi-menantang-pendapatan-asuransi-umum-tumbuh-hingga-339-persen"
 },
 {
  "slug": "laba-indonesia-re-melonjak-544-persen-di-2025",
  "category": "BUMN",
  "title": "Laba Indonesia Re [Melonjak] 544 Persen di 2025",
  "deck": "Laba bersih Indonesia Re naik ke Rp176,96 miliar pada 2025, didorong penerapan standar akuntansi baru dan perbaikan hasil investasi perusahaan reasuransi pelat merah ini.",
  "date": "21 Agustus 2026",
  "image": "assets/img/laba-indonesia-re-melonjak-544-persen-di-2025.jpg",
  "imageV": "mt5yrrpa",
  "tags": [
   "Indonesia Re",
   "reasuransi",
   "BUMN",
   "PSAK 117"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461398-investasi-tumbuh-signifikan-laba-perusahaan-reasuransi-melonjak-544-persen"
 },
 {
  "slug": "mknt-konversi-utang-rp823-m-jadi-saham-dilusi-nyaris-100",
  "category": "Aksi Korporasi",
  "title": "MKNT Konversi Utang Rp823 M Jadi Saham, [Dilusi] Nyaris 100%",
  "deck": "MKNT mengubah harga pelaksanaan saham baru PMTHMETD jadi Rp1 per saham, menerbitkan 1,02 triliun lembar saham baru atau 99,46% dari saham beredar saat ini.",
  "date": "21 Agustus 2026",
  "image": "assets/img/mknt-konversi-utang-rp823-m-jadi-saham-dilusi-nyaris-100.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "dilusi saham",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2f596abf5a_ae47c93fdd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apln-sangkal-info-material-usai-saham-melonjak-volume-3-kali-lipat",
  "category": "Aksi Korporasi",
  "title": "APLN Sangkal Info Material Usai Saham Melonjak [Volume] 3 Kali Lipat",
  "deck": "APLN menjawab permintaan penjelasan BEI usai volume sahamnya melonjak hampir tiga kali lipat dan harga naik 5,84 persen pada 19 Agustus 2026, namun menyatakan tak ada info material yang diketahui.",
  "date": "20 Agustus 2026",
  "image": "assets/img/apln-sangkal-info-material-usai-saham-melonjak-volume-3-kali-lipat.jpg",
  "tags": [
   "APLN",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1106c8c2ab_796e05f063.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-koreksi-rencana-jual-saham-treasuri-mulai-31-agustus",
  "category": "Aksi Korporasi",
  "title": "BWPT Koreksi Rencana Jual Saham Treasuri Mulai [31 Agustus]",
  "deck": "BWPT mengoreksi surat sebelumnya, menegaskan penjualan hingga 402,9 juta saham treasuri (1,28% saham) mulai 31 Agustus 2026 lewat PT Samuel Sekuritas Indonesia.",
  "date": "20 Agustus 2026",
  "image": "assets/img/bwpt-koreksi-rencana-jual-saham-treasuri-mulai-31-agustus.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "saham treasuri",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/cc38094a11_e836110562.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peha-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PEHA jawab permintaan BEI soal [volatilitas] transaksi sahamnya",
  "deck": "Bursa Efek Indonesia meminta Phapros menjelaskan volatilitas transaksi sahamnya. Manajemen menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "20 Agustus 2026",
  "image": "assets/img/peha-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya.jpg",
  "tags": [
   "PEHA",
   "Phapros",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4543b549db_19c4eb0588.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-ajukan-rups-sukuk-minta-restrukturisasi-dan-waiver",
  "category": "Aksi Korporasi",
  "title": "POST Ajukan RUPS Sukuk, Minta [Restrukturisasi] dan Waiver",
  "deck": "PT Pos Indonesia (kode POST) memanggil pemegang Sukuk Ijarah Berkelanjutan I Tahap II 2025 ke rapat 4 September 2026, meminta persetujuan restrukturisasi utang dan waiver kovenan keuangan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/post-ajukan-rups-sukuk-minta-restrukturisasi-dan-waiver.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "Sukuk",
   "Restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bcae2c7b42_135bf71988.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kepemilikan-mice-siwie-honoris-tambah-saham-jadi-969-200-unit",
  "category": "Aksi Korporasi",
  "title": "[Kepemilikan] MICE: Siwie Honoris tambah saham jadi 969.200 unit",
  "deck": "Siwie Honoris menambah kepemilikan saham MICE sebanyak 20.200 lembar lewat dua pembelian tidak langsung pada 14 dan 18 Agustus, hak suara naik jadi 0,1615%.",
  "date": "20 Agustus 2026",
  "image": "assets/img/kepemilikan-mice-siwie-honoris-tambah-saham-jadi-969-200-unit.jpg",
  "tags": [
   "MICE",
   "Multi Indocitra",
   "kepemilikan saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-3015-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 }
];
