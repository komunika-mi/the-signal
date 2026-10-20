// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/global-pelabuhan.jpg",
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
  "image": "assets/img/konpers-bank.jpg",
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
  "image": "assets/img/teller-bank.jpg",
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
  "image": "assets/img/tambang-mineral.jpg",
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
  "image": "assets/img/kapal-batubara.jpg",
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
 },
 {
  "slug": "kewajiban-sertifikat-halal-makanan-diundur-ke-2028",
  "category": "Industri",
  "title": "Kewajiban Sertifikat Halal Makanan [Diundur] ke 2028",
  "deck": "Pemerintah memperpanjang tenggat wajib sertifikat halal untuk makanan, minuman, kosmetik, dan obat dari 18 Oktober 2026 menjadi 2028, menyusul masukan dunia usaha soal kesiapan ekosistem sertifikasi.",
  "date": "16 Oktober 2026",
  "image": "assets/img/gudang-bahan-baku.jpg",
  "tags": [
   "Sertifikat Halal",
   "BPJPH",
   "UMKM",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7161/pemerintah-sesuaikan-masa-penahapan-kewajiban-bersertifikat-halal-dengan-memperhatikan-kesiapan-ekosistem-dan-pemangku-kepentingan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "transaksi-dagang-pakai-mata-uang-lokal-tembus-us-49-42-miliar",
  "category": "Moneter",
  "title": "Transaksi Dagang Pakai Mata Uang [Lokal] Tembus US$49,42 Miliar",
  "deck": "Pemerintah dan Bank Indonesia mendorong pelaku usaha memanfaatkan transaksi mata uang lokal dengan enam negara mitra dagang, yang nilainya naik tajam sepanjang 2026.",
  "date": "16 Oktober 2026",
  "image": "assets/img/transaksi-dagang-pakai-mata-uang-lokal-tembus-us-49-42-miliar.jpg",
  "imageV": "mvb77y92",
  "tags": [
   "Transaksi Mata Uang Lokal",
   "Bank Indonesia",
   "Trade Expo Indonesia",
   "Ekspor Impor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ciptakan-transaksi-global-yang-lebih-efisien-wamendag-roro-ajak-pelaku-usaha-optimalkan-local-currency-transaction-lct",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "suli-pastikan-tak-ada-dampak-karhutla-ke-operasional-dan-aset",
  "category": "Aksi Korporasi",
  "title": "SULI Pastikan Tak Ada Dampak [Karhutla] ke Operasional dan Aset",
  "deck": "SLJ Global menanggapi permintaan penjelasan BEI soal 624.725 hektare konsesi hutannya dan memastikan tidak ada dampak karhutla maupun masalah hukum.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SULI",
   "karhutla",
   "konsesi hutan",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b3e3b99d07_30f8104bae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-dan-kepulauan-solomon-dorong-kerja-sama-dagang",
  "category": "Global",
  "title": "RI dan Kepulauan Solomon [Dorong] Kerja Sama Dagang",
  "deck": "Mendag RI dan Menteri Perdagangan Kepulauan Solomon bertemu di sela TEI ke-41, membahas penguatan dagang dan mengusulkan dialog dua tahunan antarpemerintah.",
  "date": "16 Oktober 2026",
  "image": "assets/img/ri-dan-kepulauan-solomon-dorong-kerja-sama-dagang.jpg",
  "imageV": "mvb121vr",
  "tags": [
   "Kepulauan Solomon",
   "Trade Expo Indonesia",
   "ekspor impor",
   "Kementerian Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-ri-dan-mendag-kepulauan-solomon-bertemu-di-tei-dorong-penguatan-perdagangan-dan-investasi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ukm-kampus-debut-di-tei-catat-potensi-us-22-56-juta",
  "category": "UMKM",
  "title": "UKM Kampus [Debut] di TEI, Catat Potensi US$22,56 Juta",
  "deck": "25 UKM binaan kampus tampil pertama kali di TEI 2026, mencatat potensi transaksi US$22,56 juta, mayoritas masih berupa surat niat beli dari pembeli Jepang, Belanda, Hong Kong, dan Taiwan.",
  "date": "16 Oktober 2026",
  "image": "assets/img/ukm-kampus-debut-di-tei-catat-potensi-us-22-56-juta.jpg",
  "imageV": "mvb123st",
  "tags": [
   "UKM",
   "TEI 2026",
   "Campuspreneur",
   "Ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ukm-campuspreneur-tampil-perdana-di-tei-catat-potensi-transaksi-usd-2256-juta",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kesepakatan-pembiayaan-syariah-isef-tembus-rp27-43-triliun",
  "category": "Perbankan",
  "title": "Kesepakatan Pembiayaan Syariah ISEF Tembus [Rp27,43] Triliun",
  "deck": "Bank Indonesia dan OJK mencatat kesepakatan pembiayaan dan transaksi syariah senilai Rp27,43 triliun dalam rangkaian ISEF 2026, dari proyek perumahan hingga UMKM halal.",
  "date": "16 Oktober 2026",
  "image": "assets/img/kesepakatan-pembiayaan-syariah-isef-tembus-rp27-43-triliun.jpg",
  "imageV": "mvb12adt",
  "tags": [
   "ISEF 2026",
   "pembiayaan syariah",
   "Bank Indonesia",
   "industri halal"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pnm-gandeng-ppi-buka-ekspansi-pasar-produk-mekaar",
  "category": "UMKM",
  "title": "PNM Gandeng PPI, Buka [Ekspansi] Pasar Produk Mekaar",
  "deck": "PNM dan PPI teken nota kesepahaman untuk membuka akses pasar yang lebih luas bagi produk UMKM nasabah program pembiayaan ultra mikro Mekaar.",
  "date": "16 Oktober 2026",
  "image": "assets/img/pnm-gandeng-ppi-buka-ekspansi-pasar-produk-mekaar.jpg",
  "imageV": "mvb12b34",
  "tags": [
   "PNM",
   "PPI",
   "PNM Mekaar",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473407-pnm-bersama-ppi-buka-peluang-ekspansi-pasar-produk-nasabah-mekaar"
 },
 {
  "slug": "trim-siapkan-dana-lunasi-obligasi-rp100-miliar-yang-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "TRIM Siapkan Dana [Lunasi] Obligasi Rp100 Miliar yang Jatuh Tempo",
  "deck": "Trimegah Sekuritas menyiapkan dana Rp100 miliar untuk melunasi obligasi yang jatuh tempo 18 Oktober 2026; efek ini berhenti diperdagangkan di BEI mulai 19 Oktober 2026.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIM",
   "obligasi",
   "pelunasan obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d4065c90f4_eca313b776.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjbr-siapkan-dana-lunasi-obligasi-rp74-miliar-18-oktober",
  "category": "Aksi Korporasi",
  "title": "BJBR Siapkan Dana, [Lunasi] Obligasi Rp74 Miliar 18 Oktober",
  "deck": "Bank bjb menyatakan siap melunasi pokok dan bunga Obligasi Seri C senilai Rp75,62 miliar yang jatuh tempo 18 Oktober 2026; efek ini berhenti diperdagangkan di bursa mulai 19 Oktober.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBR",
   "obligasi",
   "bank bjb",
   "jatuh tempo obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f2bce3332a_fef25fc41a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smra-lunasi-obligasi-rp468-miliar-jatuh-tempo-19-oktober",
  "category": "Aksi Korporasi",
  "title": "SMRA lunasi obligasi [Rp468 miliar] jatuh tempo 19 Oktober",
  "deck": "Summarecon Agung (SMRA) memastikan dana untuk melunasi pokok Rp468 miliar Obligasi Berkelanjutan IV Tahap II Seri A yang jatuh tempo dan didelisting dari BEI pada 19 Oktober 2026.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRA",
   "obligasi korporasi",
   "pelunasan obligasi",
   "Summarecon Agung"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7634620765_713aae34c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smar-siapkan-dana-rp958-miliar-lunasi-obligasi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "SMAR Siapkan Dana Rp958 Miliar Lunasi Obligasi [Jatuh Tempo]",
  "deck": "Obligasi SMAR03CCN2 senilai Rp958 miliar jatuh tempo 19 Oktober 2026; SMART pastikan dana pelunasan sudah tersedia.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "obligasi",
   "jatuh tempo",
   "SMART"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7f1e0d968f_a8f1b1855a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-resmi-catatkan-obligasi-subordinasi-rp500-miliar-di-bei",
  "category": "Aksi Korporasi",
  "title": "BBKP Resmi Catatkan Obligasi Subordinasi [Rp500 Miliar] di BEI",
  "deck": "Bank KB Indonesia mencatatkan Obligasi Subordinasi Berkelanjutan IV Tahap II senilai Rp500 miliar di BEI mulai 19 Oktober 2026, dengan kupon 8,95-9,30% dan peringkat AAidn dari Fitch.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "obligasi subordinasi",
   "Bank KB Indonesia",
   "pencatatan BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/65ab5ad300_502371ce15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "anjt-jawab-bursa-soal-karhutla-sebut-tak-ada-dampak-signifikan",
  "category": "Aksi Korporasi",
  "title": "ANJT Jawab Bursa soal [Karhutla], Sebut Tak Ada Dampak Signifikan",
  "deck": "ANJT merespons permintaan penjelasan BEI terkait kebakaran hutan dan lahan di sejumlah wilayah operasionalnya, termasuk Kalimantan Barat.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANJT",
   "Austindo Nusantara Jaya",
   "Karhutla",
   "Keterbukaan Informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c371794843_01af4f9dba.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-ojk-pastikan-reformasi-pasar-modal-konsisten-usai-msci",
  "category": "Pasar Modal",
  "title": "DPR-OJK Pastikan [Reformasi] Pasar Modal Konsisten Usai MSCI",
  "deck": "DPR RI dan OJK menggelar rapat bersama Danantara di BEI untuk memastikan reformasi pasar modal konsisten, menyusul konsultasi klasifikasi pasar oleh MSCI.",
  "date": "16 Oktober 2026",
  "image": "assets/img/dpr-ojk-pastikan-reformasi-pasar-modal-konsisten-usai-msci.jpg",
  "imageV": "mvb12bqj",
  "tags": [
   "OJK",
   "DPR RI",
   "MSCI",
   "Pasar Modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473396-jaga-kepercayaan-investor-dpr-ri-dan-ojk-pastikan-reformasi-pasar-modal-indonesia-berjalan-konsisten"
 },
 {
  "slug": "dooh-koreksi-panggilan-rupslb-agenda-pinjaman-rp5-triliun",
  "category": "Aksi Korporasi",
  "title": "DOOH Koreksi Panggilan RUPSLB, Agenda [Pinjaman] Rp5 Triliun",
  "deck": "Era Media Sejahtera mengoreksi panggilan RUPSLB 9 November 2026 yang mengagendakan ganti nama, rights issue, pinjaman Rp5 triliun dari pengendali, dan akuisisi INET.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "RUPSLB",
   "rights issue",
   "akuisisi INET"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/797eb58041_6aea1f51cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gtbo-mulai-tambang-batu-bara-16-oktober-rupst-molor-ke-november",
  "category": "Aksi Korporasi",
  "title": "GTBO Mulai Tambang Batu Bara 16 Oktober, RUPST [Molor] ke November",
  "deck": "Dalam balasan ke Bursa, GTBO menyebut tambang mulai beroperasi 16 Oktober, piutang US$4,15 juta sebagian sudah cair, tapi RUPS Tahunan 2025 baru digelar 18 November 2026.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "Produksi Batu Bara",
   "RUPST",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a5175f5788_9b1f2743f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-panggil-rupslb-9-november-agenda-utang-rp5-triliun",
  "category": "Aksi Korporasi",
  "title": "DOOH Panggil RUPSLB 9 November, Agenda [Utang] Rp5 Triliun",
  "deck": "RUPSLB DOOH digelar 9 November 2026 di Jakarta, membahas pinjaman Rp5 triliun dari pemegang saham pengendali, rights issue, dan akuisisi INET oleh CNI.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "RUPSLB",
   "rights issue",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5bd1b271e3_b4f21156c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-wibowo-group-capital-kuasai-90-09-saham-usai-tender-wajib",
  "category": "Aksi Korporasi",
  "title": "MBSS: Wibowo Group Capital Kuasai [90,09%] Saham Usai Tender Wajib",
  "deck": "Penawaran tender wajib MBSS yang berakhir 8 Oktober 2026 membuat kepemilikan Wibowo Group Capital naik menjadi 90,09 persen, menyisakan saham publik hanya 9,91 persen.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "tender wajib",
   "Wibowo Group Capital",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a0bd53c914_b799af056d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "stok-bbm-aman-tapi-distribusi-ke-bali-masih-tersendat",
  "category": "Energi",
  "title": "Stok BBM Aman, tapi [Distribusi] ke Bali Masih Tersendat",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut stok BBM nasional masih di kisaran 16-18 hari, tapi distribusi ke Bali dan daerah bergantung jalur laut butuh tambahan kapal Pertamina.",
  "date": "16 Oktober 2026",
  "image": "assets/img/stok-bbm-aman-tapi-distribusi-ke-bali-masih-tersendat.jpg",
  "imageV": "mvavg3dl",
  "tags": [
   "BBM",
   "Pertamina",
   "Bahlil Lahadalia",
   "RON 90"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/stok-bbm-nasional-aman-bahlil-minta-pertamina-percepat-distribusi-ke-daerah",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "dim-ruu-migas-capai-80-90-persen-aturan-buk-lewat-pp",
  "category": "Energi",
  "title": "DIM RUU Migas Capai 80-90 Persen, Aturan [BUK] Lewat PP",
  "deck": "Pemerintah menyebut penyusunan DIM RUU Migas sudah 80-90 persen, dengan Badan Usaha Khusus (BUK) diatur lewat Peraturan Pemerintah dan Perpres, bukan rinci di UU.",
  "date": "16 Oktober 2026",
  "image": "assets/img/dim-ruu-migas-capai-80-90-persen-aturan-buk-lewat-pp.jpg",
  "imageV": "mvavg5jq",
  "tags": [
   "RUU Migas",
   "ESDM",
   "Bahlil Lahadalia",
   "Badan Usaha Khusus"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pemerintah-matangkan-dim-ruu-migas-bahlil-sebut-penyusunan-capai-80-90-persen",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "pariwisata-ramah-muslim-ri-naik-ke-peringkat-dua-dunia",
  "category": "Makroekonomi",
  "title": "Pariwisata Ramah Muslim RI Naik ke Peringkat [Dua] Dunia",
  "deck": "Indonesia naik ke peringkat dua dunia dalam indeks wisata ramah muslim, dibarengi peluncuran peta jalan nasional dan penghargaan bagi 15 provinsi dengan kesiapan destinasi terbaik.",
  "date": "16 Oktober 2026",
  "image": "assets/img/pariwisata-ramah-muslim-ri-naik-ke-peringkat-dua-dunia.jpg",
  "imageV": "mvavga0e",
  "tags": [
   "pariwisata syariah",
   "ISEF 2026",
   "Bank Indonesia",
   "ekonomi syariah"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dpr-kawal-reformasi-pasar-modal-ojk-perketat-transparansi",
  "category": "Pasar Modal",
  "title": "DPR Kawal Reformasi Pasar Modal, OJK Perketat [Transparansi]",
  "deck": "DPR menggelar rapat dengan OJK dan Danantara membahas reformasi pasar modal, di tengah MSCI yang mempertimbangkan penurunan status pasar modal Indonesia dari Emerging Market ke Standalone Market.",
  "date": "16 Oktober 2026",
  "image": "assets/img/dpr-kawal-reformasi-pasar-modal-ojk-perketat-transparansi.jpg",
  "imageV": "mvb12c71",
  "tags": [
   "OJK",
   "Pasar Modal",
   "DPR",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473381-dpr-kawal-reformasi-pasar-modal-demi-menjaga-kepercayaan-investor"
 },
 {
  "slug": "taspen-raih-predikat-sangat-puas-dari-kemenkeu-lagi",
  "category": "BUMN",
  "title": "TASPEN Raih Predikat [Sangat Puas] dari Kemenkeu Lagi",
  "deck": "DJPb Kemenkeu kembali memberi predikat tertinggi untuk layanan pensiun TASPEN, berdasarkan survei ke lebih dari seribu penerima pensiun ASN di seluruh Indonesia.",
  "date": "16 Oktober 2026",
  "image": "assets/img/taspen-raih-predikat-sangat-puas-dari-kemenkeu-lagi.jpg",
  "imageV": "mvavgagj",
  "tags": [
   "TASPEN",
   "pensiun ASN",
   "Kementerian Keuangan",
   "jaminan sosial"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473375-layanan-pensiun-taspen-kembali-mendapat-apresiasi-dari-kementerian-keuangan"
 },
 {
  "slug": "rbms-jawab-bei-akui-banyak-kekeliruan-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "RBMS Jawab BEI, Akui Banyak Kekeliruan Laporan [Keuangan]",
  "deck": "RBMS merespons permintaan penjelasan BEI dan mengakui sejumlah kesalahan hitung dalam laporan keuangan tengah tahunan per 30 Juni 2026, mulai dari kas, piutang, hingga reklasifikasi aset.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RBMS",
   "laporan keuangan",
   "Bursa Efek Indonesia",
   "piutang usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fa97bd728e_4adeb1955c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-jawab-18-pertanyaan-bursa-soal-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "MKNT Jawab 18 Pertanyaan Bursa Soal [Kelangsungan Usaha]",
  "deck": "Perseroan menjawab 18 pertanyaan BEI soal kelangsungan usaha, memaparkan suntikan modal Rp1,02 triliun yang membalik ekuitas dari minus jadi positif tipis Rp5,65 miliar.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "kelangsungan usaha",
   "Bank Mandiri",
   "Citra Baru Steel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ad144a5ced_3049781c37.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-buyback-saham-tembus-2-49-harga-naik-ke-rp3-097",
  "category": "Aksi Korporasi",
  "title": "PRDA: Buyback Saham Tembus [2,49%], Harga Naik ke Rp3.097",
  "deck": "Prodia Widyahusada melaporkan realisasi pembelian kembali saham hingga 16 Oktober 2026, total buyback mencapai 2,49 persen dari saham tercatat dengan sisa dana Rp83,03 miliar.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f9ac20fb88_b6af8f8a72.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lckm-masuk-daftar-pemantauan-khusus-bei-mulai-19-oktober",
  "category": "Aksi Korporasi",
  "title": "LCKM Masuk Daftar [Pemantauan Khusus] BEI Mulai 19 Oktober",
  "deck": "Bursa Efek Indonesia memasukkan saham PT LCK Global Kedaton Tbk (LCKM) ke daftar pemantauan khusus mulai 19 Oktober 2026 karena masalah pendapatan usaha.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LCKM",
   "pemantauan khusus",
   "BEI",
   "watchlist saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cef20c4446_dbf1ced131.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sgro-jelaskan-dampak-karhutla-ke-bursa-klaim-tak-material",
  "category": "Aksi Korporasi",
  "title": "SGRO Jelaskan Dampak [Karhutla] ke Bursa, Klaim Tak Material",
  "deck": "SGRO merespons permintaan penjelasan Bursa terkait karhutla, menyatakan tidak ada dampak material terhadap operasi, produksi, dan keuangan perseroan hingga saat ini.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGRO",
   "karhutla",
   "sawit",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ce2035d71c_2b97e01690.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-kini-punya-25-perjanjian-dagang-cakup-72-ekspor-2025",
  "category": "Global",
  "title": "RI Kini Punya [25] Perjanjian Dagang, Cakup 72% Ekspor 2025",
  "deck": "Kemendag menyebut 25 perjanjian dagang yang sudah berjalan kini menutup 72,34 persen nilai ekspor Indonesia pada 2025, di tengah tarif baru Amerika Serikat dan meningkatnya hambatan dagang dunia.",
  "date": "16 Oktober 2026",
  "image": "assets/img/ri-kini-punya-25-perjanjian-dagang-cakup-72-ekspor-2025.jpg",
  "imageV": "mvap463d",
  "tags": [
   "perjanjian dagang",
   "ekspor",
   "Kemendag",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perjanjian-perdagangan-internasional-amankan-pasar-ekspor-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bmri-jelaskan-kredit-ke-jhonlin-berjaminan-saham-jarr-pgun",
  "category": "Aksi Korporasi",
  "title": "BMRI Jelaskan Kredit ke Jhonlin Berjaminan [Saham] JARR-PGUN",
  "deck": "BMRI menjelaskan ke Bursa bahwa kredit ke PT Jhonlin Baratama bukan untuk beli saham, meski dijamin saham JARR dan PGUN, menyusul sorotan soal akuisisi BYAN oleh grup Haji Isam.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Jhonlin Baratama",
   "JARR",
   "PGUN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2d4b078d60_768e617f03.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipac-ungkap-rincian-tender-sukarela-jelang-go-private",
  "category": "Aksi Korporasi",
  "title": "IPAC Ungkap Rincian [Tender Sukarela] Jelang Go Private",
  "deck": "PT Era Graharealty Tbk (IPAC) merinci rencana go private dan delisting, termasuk penawaran tender sukarela oleh pengendali APAC Investment 2 Pte Ltd kepada pemegang saham publik.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPAC",
   "go private",
   "delisting",
   "tender sukarela"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/786b64d05c_d655520653.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rccc-pemegang-saham-utama-pastikan-tak-ubah-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "RCCC: Pemegang Saham Utama Pastikan Tak Ubah [Kepemilikan]",
  "deck": "RCCC menjawab permintaan penjelasan volatilitas dari BEI, menegaskan tak ada info material baru, sementara pemegang saham utama Gelora Rimba Jaya pastikan tak ubah kepemilikan 77,92 persennya.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RCCC",
   "volatilitas saham",
   "pemegang saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9c7c8a4340_805e4ad072.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "14-produsen-pangan-ri-teken-mou-ekspor-potensi-us-25-2-juta",
  "category": "Bisnis",
  "title": "14 Produsen Pangan RI Teken MoU Ekspor, Potensi [US$25,2 Juta]",
  "deck": "Kemendag saksikan 14 produsen pangan Indonesia teken MoU dan LoI dengan importir dari lima negara dalam ajang TEI ke-41, dengan potensi transaksi US$25,2 juta.",
  "date": "16 Oktober 2026",
  "image": "assets/img/14-produsen-pangan-ri-teken-mou-ekspor-potensi-us-25-2-juta.jpg",
  "imageV": "mvamv3v2",
  "tags": [
   "S'RASA",
   "ekspor pangan",
   "Trade Expo Indonesia",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-saksikan-mou-srasa-potensi-transaksi-capai-usd-252-juta",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "indonesia-jajaki-pasar-dagang-baru-ke-yunani-rusia-myanmar",
  "category": "Global",
  "title": "Indonesia [Jajaki] Pasar Dagang Baru ke Yunani, Rusia, Myanmar",
  "deck": "Wakil Menteri Perdagangan Dyah Roro Esti menggelar pertemuan bilateral dengan Yunani, Rusia, dan Myanmar di sela TEI 2026 untuk membuka peluang pasar baru bagi produk Indonesia.",
  "date": "16 Oktober 2026",
  "image": "assets/img/indonesia-jajaki-pasar-dagang-baru-ke-yunani-rusia-myanmar.jpg",
  "imageV": "mvamvfoq",
  "tags": [
   "TEI 2026",
   "Kemendag",
   "Perdagangan Bilateral",
   "Ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-perkuat-kerja-sama-dagang-dengan-yunani-rusia-dan-myanmar-di-tei-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "sico-bantah-ada-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "SICO Bantah Ada Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Merespons permintaan Bursa Efek Indonesia, SICO menegaskan tak ada informasi material maupun rencana aksi korporasi di balik gejolak harga sahamnya.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SICO",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/71277ed763_f24a9e7f81.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-itic-bahas-rencana-jaminkan-aset-ke-bank",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ITIC Bahas Rencana [Jaminkan] Aset ke Bank",
  "deck": "PT Indonesian Tobacco Tbk mengundang pemegang saham ke RUPSLB 9 November 2026 untuk menyetujui rencana menjaminkan sebagian besar atau seluruh asetnya guna memperoleh fasilitas pinjaman.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITIC",
   "RUPSLB",
   "penjaminan aset",
   "pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b832c97993_6aac95f0f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-raih-dua-penghargaan-in-house-counsel-2026",
  "category": "BUMN",
  "title": "Pegadaian [Raih] Dua Penghargaan In-House Counsel 2026",
  "deck": "Divisi Legal Pegadaian dan kepalanya meraih dua penghargaan di Indonesia In-House Counsel Awards 2026, hasil program pencegahan risiko hukum perusahaan.",
  "date": "16 Oktober 2026",
  "image": "assets/img/pegadaian-raih-dua-penghargaan-in-house-counsel-2026.jpg",
  "imageV": "mvamvgba",
  "tags": [
   "Pegadaian",
   "BUMN",
   "Tata Kelola Perusahaan",
   "Hukum Korporat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473328-pegadaian-raih-dua-penghargaan-di-indonesia-in-house-counsel-awards-2026"
 },
 {
  "slug": "dagang-ri-mozambik-naik-57-5-persen-tembus-us-162-8-juta",
  "category": "Global",
  "title": "Dagang RI-Mozambik Naik [57,5] Persen, Tembus US$162,8 Juta",
  "deck": "Kementerian Perdagangan menggelar forum bisnis RI-Mozambik di Trade Expo Indonesia, seiring nilai perdagangan dua negara yang terus naik dalam dua tahun terakhir.",
  "date": "16 Oktober 2026",
  "image": "assets/img/dagang-ri-mozambik-naik-57-5-persen-tembus-us-162-8-juta.jpg",
  "imageV": "mvahh1p1",
  "tags": [
   "Indonesia-Mozambik",
   "Trade Expo Indonesia",
   "Ekspor",
   "Kementerian Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/wamendag-roro-indonesia-dan-mozambik-perlu-tingkatkan-koneksi-dan-buka-peluang-baru",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "skincare-hutan-aceh-yagi-forest-bidik-pasar-ekspor",
  "category": "UMKM",
  "title": "Skincare Hutan Aceh Yagi Forest Bidik [Pasar] Ekspor",
  "deck": "UMKM skincare asal Aceh, Yagi Forest, ikut Trade Expo Indonesia untuk mencari mitra distributor setelah tampil di pameran Malaysia, Jepang, dan Oman.",
  "date": "16 Oktober 2026",
  "image": "assets/img/pasar-kerajinan.jpg",
  "tags": [
   "UMKM",
   "Aceh",
   "Ekspor",
   "Kosmetik"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/menjaga-hutan-aceh-memikat-pasar-global-perjalanan-yagi-forest-menuju-panggung-internasional",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mdka-rilis-obligasi-tahap-iv-rp4-12-triliun-lunasi-utang-dolar",
  "category": "Aksi Korporasi",
  "title": "MDKA Rilis [Obligasi] Tahap IV Rp4,12 Triliun, Lunasi Utang Dolar",
  "deck": "MDKA menerbitkan obligasi tahap IV senilai Rp4,12 triliun dari program Rp15 triliun untuk melunasi fasilitas kredit dolar AS senilai US$195 juta dan sebagian obligasi IV yang jatuh tempo Desember.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKA",
   "obligasi",
   "refinancing utang",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/564d0c24cb_f1df47582d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "igar-disuspensi-bei-champion-pacific-ajukan-go-private",
  "category": "Aksi Korporasi",
  "title": "IGAR Disuspensi BEI, Champion Pacific Ajukan [Go Private]",
  "deck": "Bursa Efek Indonesia menghentikan sementara perdagangan saham IGAR sejak sesi pertama Jumat, 16 Oktober 2026, menyusul permohonan delisting untuk berubah status menjadi perusahaan tertutup.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IGAR",
   "delisting",
   "go private",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/550ec342db_90121731c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-panggil-rupslb-tarik-saham-treasuri-dan-ganti-komisaris",
  "category": "Aksi Korporasi",
  "title": "UNTR Panggil RUPSLB, Tarik Saham [Treasuri] dan Ganti Komisaris",
  "deck": "UNTR memanggil RUPSLB pada 9 November 2026 untuk menyetujui penghapusan saham hasil pembelian kembali dan perubahan susunan komisaris.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "RUPSLB",
   "buyback saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/16d6b67a75_056f73c60d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-ke-rp2-565-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] ke Rp2.565.000 per Gram",
  "deck": "Harga emas batangan Antam naik Rp4.000 menjadi Rp2.565.000 per gram pada 16 Oktober 2026, sementara harga buyback ikut naik ke Rp2.375.000 per gram.",
  "date": "16 Oktober 2026",
  "image": "assets/img/harga-emas-antam-naik-ke-rp2-565-000-per-gram.jpg",
  "imageV": "mvahh23y",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473313-coba-dijual-harga-emas-antam-hari-ini-16-oktober-2026-naik-jadi-rp2565000-per-gram"
 },
 {
  "slug": "beli-rumah-hingga-warisan-ini-pajak-properti-di-jakarta",
  "category": "Makroekonomi",
  "title": "Beli Rumah hingga Warisan, Ini [Pajak] Properti di Jakarta",
  "deck": "Pemprov DKI Jakarta mengingatkan bahwa membeli rumah, menerima hibah, atau mewarisi tanah dan bangunan tetap terikat BPHTB dan PBB-P2 sesuai Perda Nomor 1 Tahun 2024.",
  "date": "16 Oktober 2026",
  "image": "assets/img/beli-rumah-hingga-warisan-ini-pajak-properti-di-jakarta.jpg",
  "imageV": "mvahh2jt",
  "tags": [
   "pajak properti",
   "BPHTB",
   "PBB-P2",
   "Jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473233-dari-beli-rumah-hingga-warisan-ini-pajak-properti-yang-perlu-diperhatikan"
 },
 {
  "slug": "untd-gelar-rupslb-9-november-agendakan-pergantian-direksi",
  "category": "Aksi Korporasi",
  "title": "UNTD Gelar RUPSLB 9 November, Agendakan [Pergantian] Direksi",
  "deck": "RUPSLB PT Terang Dunia Internusa pada 9 November 2026 membahas perubahan anggaran dasar, kemungkinan pergantian direksi-komisaris, gaji 2026, dan laporan realisasi dana IPO.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTD",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/24fb0d2383_0fc51997a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-rampungkan-opsi-mesop-tahap-2-total-51-54-juta-lembar",
  "category": "Aksi Korporasi",
  "title": "ERAA Rampungkan Opsi [MESOP] Tahap 2, Total 51,54 Juta Lembar",
  "deck": "Erajaya menuntaskan pelaksanaan opsi saham karyawan Tahap 2, melengkapi realisasi 51,54 juta lembar opsi MESOP yang disetujui pemegang saham pada 2025.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "opsi saham",
   "Erajaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fa34f5c5a1_c6ba8d6300.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tbig-obligasi-rp2-37-triliun-tercatat-di-bei-16-oktober",
  "category": "Aksi Korporasi",
  "title": "TBIG [Obligasi] Rp2,37 Triliun Tercatat di BEI 16 Oktober",
  "deck": "TBIG mencatatkan obligasi Rp1,24 triliun dan sukuk ijarah Rp1,13 triliun di BEI, bagian dari program utang berkelanjutan senilai total Rp28 triliun.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TBIG",
   "obligasi",
   "sukuk ijarah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7428c91f1b_c34c9b59fe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-kopi-ri-ke-as-baru-2-7-persen-dari-pasar-us-12-8-miliar",
  "category": "Bisnis",
  "title": "Ekspor Kopi RI ke AS Baru [2,7 Persen] dari Pasar US$12,8 Miliar",
  "deck": "Kemendag mendorong eksportir kopi memenuhi standar mutu negara tujuan, sementara nilai ekspor kopi RI naik ke US$2,51 miliar pada 2025 namun pangsanya di pasar AS senilai US$12,80 miliar masih kecil.",
  "date": "16 Oktober 2026",
  "image": "assets/img/ekspor-kopi-ri-ke-as-baru-2-7-persen-dari-pasar-us-12-8-miliar.jpg",
  "imageV": "mv9uh2xy",
  "tags": [
   "ekspor kopi",
   "Kemendag",
   "Trade Expo Indonesia",
   "standar mutu"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-dorong-kopi-indonesia-tembus-pasar-global-melalui-penguatan-mutu-dan-nilai-tambah",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kemendag-meta-latih-200-umkm-manfaatkan-ai-untuk-ekspor",
  "category": "UMKM",
  "title": "Kemendag-Meta Latih [200] UMKM Manfaatkan AI untuk Ekspor",
  "deck": "Kemendag dan Meta Indonesia menyerahkan katalog profil UMKM siap ekspor, hasil program yang telah melatih 200 pelaku usaha di Bandung, Batam, dan Jakarta menggunakan AI untuk pemasaran digital.",
  "date": "16 Oktober 2026",
  "image": "assets/img/kemendag-meta-latih-200-umkm-manfaatkan-ai-untuk-ekspor.jpg",
  "imageV": "mv9uh7eu",
  "tags": [
   "UMKM",
   "AI",
   "Ekspor",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-ajak-pelaku-umkm-manfaatkan-ai-untuk-kembangkan-usaha",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "simp-tanggapi-bursa-soal-dampak-karhutla-ke-operasional",
  "category": "Aksi Korporasi",
  "title": "SIMP Tanggapi Bursa soal Dampak [Karhutla] ke Operasional",
  "deck": "Salim Ivomas Pratama (SIMP) menjawab permintaan penjelasan BEI soal dampak kebakaran hutan dan lahan terhadap perkebunannya, menyatakan belum ada dampak material terhadap usaha.",
  "date": "16 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIMP",
   "karhutla",
   "kebakaran hutan dan lahan",
   "perkebunan sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/570f6e57f6_5b0b5a9078.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadin-gandeng-bri-insurance-perluas-asuransi-usaha",
  "category": "Bisnis",
  "title": "[Kadin] Gandeng BRI Insurance Perluas Asuransi Usaha",
  "deck": "Kadin Indonesia dan BRI Insurance menandatangani kerja sama untuk memperluas akses asuransi bagi pelaku usaha anggota Kadin.",
  "date": "16 Oktober 2026",
  "image": "assets/img/kadin-gandeng-bri-insurance-perluas-asuransi-usaha.jpg",
  "imageV": "mv9uh7y6",
  "tags": [
   "Kadin Indonesia",
   "BRI Insurance",
   "Asuransi Usaha",
   "Kerja Sama Bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473263-kadin-indonesia-jalin-kerja-sama-dengan-bri-insurance-perkuat-sinergi-asuransi-dan-dunia-usaha"
 },
 {
  "slug": "lsip-jawab-bursa-soal-dampak-karhutla-klaim-belum-material",
  "category": "Aksi Korporasi",
  "title": "LSIP Jawab Bursa soal Dampak [Karhutla], Klaim Belum Material",
  "deck": "LSIP merespons permintaan penjelasan Bursa soal risiko kebakaran hutan dan lahan, menegaskan belum ada dampak material ke produksi maupun keuangan perusahaan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LSIP",
   "karhutla",
   "kebakaran hutan dan lahan",
   "perkebunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2ef53ef32_b3eddd2485.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-pastikan-dampak-karhutla-tak-material-ke-produksi",
  "category": "Aksi Korporasi",
  "title": "UNTR Pastikan Dampak Karhutla Tak [Material] ke Produksi",
  "deck": "United Tractors menjawab permintaan penjelasan BEI soal Karhutla: anak usaha TTA di Kalimantan Tengah terdampak gangguan jarak pandang, tapi tak material ke produksi dan laba.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "Karhutla",
   "United Tractors",
   "Kalimantan Tengah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ec34d41328_d076316135.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aali-dampak-karhutla-di-anak-usaha-kalsel-tak-signifikan",
  "category": "Aksi Korporasi",
  "title": "AALI: Dampak [Karhutla] di Anak Usaha Kalsel Tak Signifikan",
  "deck": "Astra Agro Lestari menjawab permintaan penjelasan BEI soal kebakaran hutan dan lahan di anak usahanya, PT Subur Agro Makmur, di Kalimantan Selatan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "Karhutla",
   "Astra Agro Lestari",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2f078d2a9_d9ea5ac3e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-akui-risiko-going-concern-usai-gagal-bayar-sukuk",
  "category": "Aksi Korporasi",
  "title": "POST Akui Risiko [Going Concern] Usai Gagal Bayar Sukuk",
  "deck": "Pos Indonesia mengungkap kesenjangan likuiditas Rp83,52 miliar dan mengakui risiko kelangsungan usaha setelah gagal bayar bunga sukuk yang jatuh tempo 8 Oktober 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "sukuk",
   "likuiditas",
   "Danantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6ce010d8d7_83021cb29c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-produk-hijau-kini-lebih-bernilai-dari-fosil",
  "category": "Energi",
  "title": "Bahlil: Produk [Hijau] Kini Lebih Bernilai dari Fosil",
  "deck": "Menko Bahlil Lahadalia menyebut produk industri hijau kini bernilai lebih tinggi dari produk berbasis energi fosil, sejalan dengan target bauran energi terbarukan dalam RUPTL PLN 2025-2034.",
  "date": "15 Oktober 2026",
  "image": "assets/img/bahlil-produk-hijau-kini-lebih-bernilai-dari-fosil.jpg",
  "imageV": "mv9uh8em",
  "tags": [
   "energi hijau",
   "RUPTL",
   "EBT",
   "ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473252-menko-bahlil-sebut-produk-hijau-kini-nilainya-lebih-tinggi-dari-produk-fosil"
 },
 {
  "slug": "bank-bjb-sosialisasikan-kpr-subsidi-dan-kredit-perumahan",
  "category": "Perbankan",
  "title": "bank bjb Sosialisasikan [KPR Subsidi] dan Kredit Perumahan",
  "deck": "bank bjb menggelar sosialisasi KPR subsidi FLPP dan kredit produktif di Subang, dengan portofolio FLPP tembus Rp4,935 triliun dari 41.383 debitur per awal Oktober 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/bank-bjb-sosialisasikan-kpr-subsidi-dan-kredit-perumahan.jpg",
  "imageV": "mv9uh8vh",
  "tags": [
   "KPR subsidi",
   "FLPP",
   "bank bjb",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473251-perluas-akses-hunian-dan-pembiayaan-produktif-bank-bjb-sosialisasikan-kpp-dan-rumah-subsidi"
 },
 {
  "slug": "taspen-kemenkeu-integrasikan-data-pensiun-asn",
  "category": "BUMN",
  "title": "TASPEN-Kemenkeu [Integrasikan] Data Pensiun ASN",
  "deck": "TASPEN dan Ditjen Perbendaharaan Kemenkeu sepakat bertukar data pensiun, tabungan hari tua, dan jaminan sosial ASN demi pembayaran yang lebih akurat dan tepat waktu.",
  "date": "15 Oktober 2026",
  "image": "assets/img/taspen-kemenkeu-integrasikan-data-pensiun-asn.jpg",
  "imageV": "mv9uh9cu",
  "tags": [
   "TASPEN",
   "pensiun ASN",
   "integrasi data",
   "Kemenkeu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473247-taspen-dan-kemenkeu-integrasikan-data-pensiun-asn-begini-dampaknya-bagi-9-juta-penerima-manfaat"
 },
 {
  "slug": "bank-bjb-raih-pengakuan-top-50-emiten-midcap-gcg-2026",
  "category": "Perbankan",
  "title": "Bank bjb Raih Pengakuan Top 50 Emiten [MidCap] GCG 2026",
  "deck": "Bank bjb masuk daftar 50 emiten kapitalisasi menengah dengan tata kelola terbaik versi IICD dalam ajang CG Award 2026 di Jakarta.",
  "date": "15 Oktober 2026",
  "image": "assets/img/bank-bjb-raih-pengakuan-top-50-emiten-midcap-gcg-2026.jpg",
  "imageV": "mv9uhab6",
  "tags": [
   "bank bjb",
   "GCG",
   "IICD",
   "BUMD"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473246-bank-bjb-raih-pengakuan-top-50-emiten-midcap-dalam-iicd-cg-award-2026"
 },
 {
  "slug": "indonesia-perkuat-kesiapan-aksesi-ke-pakta-cptpp",
  "category": "Global",
  "title": "Indonesia Perkuat Kesiapan [Aksesi] ke Pakta CPTPP",
  "deck": "Kemenko Perekonomian menggelar workshop teknis bersama negara anggota CPTPP untuk mematangkan kesiapan Indonesia bergabung ke pakta dagang itu.",
  "date": "15 Oktober 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "CPTPP",
   "Kemenko Perekonomian",
   "Perdagangan Internasional",
   "Aksesi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7159/kemenko-perekonomian-perkuat-kesiapan-aksesi-indonesia-ke-cptpp-melalui-koordinasi-lintas-kl-dan-dialog-dengan-negara-anggota",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ri-bahas-ancaman-komputasi-kuantum-ke-keamanan-data-digital",
  "category": "Teknologi",
  "title": "RI Bahas Ancaman Komputasi [Kuantum] ke Keamanan Data Digital",
  "deck": "Pemerintah dan BSSN membahas kesiapan Indonesia menghadapi risiko komputasi kuantum terhadap keamanan data digital, di tengah pertumbuhan ekonomi digital yang pesat.",
  "date": "15 Oktober 2026",
  "image": "assets/img/server-data.jpg",
  "tags": [
   "komputasi kuantum",
   "keamanan siber",
   "ekonomi digital",
   "ASEAN DEFA"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7160/perkuat-keamanan-ekonomi-digital-pemerintah-dorong-kesiapan-indonesia-hadapi-era-komputasi-kuantum",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "esdm-kejar-listrik-ke-11-000-desa-target-2029-2030",
  "category": "Energi",
  "title": "ESDM Kejar Listrik ke [11.000] Desa, Target 2029-2030",
  "deck": "Menteri ESDM Bahlil Lahadalia meminta pemda dan PLN mendata ulang desa yang belum berlistrik memadai, dengan target seluruh desa menyala pada 2029-2030.",
  "date": "15 Oktober 2026",
  "image": "assets/img/esdm-kejar-listrik-ke-11-000-desa-target-2029-2030.jpg",
  "imageV": "mv9oqccc",
  "tags": [
   "listrik desa",
   "BPBL",
   "PLN",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/bahlil-minta-pemda-dan-pln-data-desa-belum-berlistrik-target-tuntas-2029-2030-",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kilang-gas-karawang-mulai-pasok-lpg-ke-jabar-dan-jakarta",
  "category": "Energi",
  "title": "Kilang Gas Karawang Mulai [Pasok] LPG ke Jabar dan Jakarta",
  "deck": "Kilang gas di Cilamaya, Karawang, mulai memproduksi sekitar 160 ton LPG per hari, memenuhi 10-15 persen kebutuhan Jawa Barat dan Jakarta.",
  "date": "15 Oktober 2026",
  "image": "assets/img/kilang-gas-karawang-mulai-pasok-lpg-ke-jabar-dan-jakarta.jpg",
  "imageV": "mv9oqdvp",
  "tags": [
   "LPG",
   "ESDM",
   "Karawang",
   "CNG"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hasilkan-160-ton-lpg-per-hari-kilang-cilamaya-bantu-pasokan-warga-jabar-dan-jakarta",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bi-pacu-riset-syariah-aset-tembus-rp3-264-triliun",
  "category": "Makroekonomi",
  "title": "BI Pacu Riset Syariah, Aset Tembus [Rp3.264] Triliun",
  "deck": "Bank Indonesia menggelar forum riset syariah di ISEF 2026, menyebut aset keuangan syariah nasional capai Rp3.264 triliun per Juni 2026, tumbuh hampir 10 persen.",
  "date": "15 Oktober 2026",
  "image": "assets/img/bi-pacu-riset-syariah-aset-tembus-rp3-264-triliun.jpg",
  "imageV": "mv9oqsz0",
  "tags": [
   "ISEF 2026",
   "Bank Indonesia",
   "Keuangan Syariah",
   "Riset"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bwpt-tegaskan-operasional-tak-terdampak-karhutla",
  "category": "Aksi Korporasi",
  "title": "BWPT Tegaskan Operasional Tak Terdampak [Karhutla]",
  "deck": "Eagle High Plantations menjawab permintaan penjelasan Bursa Efek Indonesia soal kebakaran hutan dan lahan di wilayah operasionalnya di Sumatera, Kalimantan, dan Papua.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "karhutla",
   "kebakaran lahan",
   "kelapa sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ea5e7d2ae4_0a6accf0b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pngo-karhutla-tak-ganggu-produksi-target-cpo-101-296-ton-aman",
  "category": "Aksi Korporasi",
  "title": "PNGO: [Karhutla] Tak Ganggu Produksi, Target CPO 101.296 Ton Aman",
  "deck": "Menjawab permintaan penjelasan BEI, PNGO menyatakan karhutla tidak berdampak pada produksi, pendapatan, dan laba, serta target CPO 2026 tetap 101.296 ton.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNGO",
   "karhutla",
   "CPO",
   "Sumatera Selatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eb6fe5b26d_4720e50fd3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-direksi-tambah-saham-hak-suara-ke-0-19",
  "category": "Aksi Korporasi",
  "title": "ARKO: Direksi [Tambah] Saham, Hak Suara ke 0,19%",
  "deck": "Direksi Arkora Hydro, Aldo Henry Artoko, menambah 349.200 lembar saham ARKO lewat pembelian tidak langsung pada 13-14 Oktober 2026, menaikkan hak suaranya dari 0,17% menjadi 0,19%.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "transaksi saham direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15102026-3929-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admr-tegaskan-karhutla-belum-ganggu-produksi-tambang",
  "category": "Aksi Korporasi",
  "title": "ADMR Tegaskan Karhutla Belum Ganggu [Produksi] Tambang",
  "deck": "Alamtri Minerals menjawab permintaan penjelasan Bursa soal dampak karhutla terhadap operasional tambangnya di Kalimantan, menyatakan belum ada gangguan produksi maupun sengketa hukum.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMR",
   "karhutla",
   "tambang batu bara",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/572315fd3d_59bd83a304.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psgo-pastikan-karhutla-tak-ganggu-produksi-2026",
  "category": "Aksi Korporasi",
  "title": "PSGO Pastikan [Karhutla] Tak Ganggu Produksi 2026",
  "deck": "PSGO menyatakan kebakaran hutan dan lahan di sekitar area operasi anak usahanya tidak berdampak material pada produksi, pendapatan, laba, maupun aset perusahaan tahun 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "karhutla",
   "keterbukaan informasi",
   "Palma Serasih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9e25a2a2bd_c1755980fa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-mekaar-cetak-return-dampak-sosial-181-persen",
  "category": "UMKM",
  "title": "PNM Mekaar Cetak Return Dampak Sosial [181] Persen",
  "deck": "Setiap Rp1 modal usaha yang disalurkan PNM lewat program Mekaar periode 2022-2024 diklaim menghasilkan Rp1,81 manfaat ekonomi dan sosial bagi nasabah ultra mikro.",
  "date": "15 Oktober 2026",
  "image": "assets/img/pnm-mekaar-cetak-return-dampak-sosial-181-persen.jpg",
  "imageV": "mv9oqtl8",
  "tags": [
   "pnm",
   "mekaar",
   "umkm",
   "modal usaha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473227-bukan-cuma-bisnis-yang-tumbuh-pnm-mekaar-berhasil-cetak-return-dampak-sosial-hingga-181-persen"
 },
 {
  "slug": "taspen-raih-penghargaan-humas-indonesia-2026",
  "category": "BUMN",
  "title": "TASPEN Raih [Penghargaan] Humas Indonesia 2026",
  "deck": "TASPEN meraih empat penghargaan di Anugerah Humas Indonesia 2026, mempertahankan prestasi tiga tahun berturut-turut lewat layanan digital dan keterbukaan informasi.",
  "date": "15 Oktober 2026",
  "image": "assets/img/taspen-raih-penghargaan-humas-indonesia-2026.jpg",
  "imageV": "mv9oqu36",
  "tags": [
   "TASPEN",
   "BUMN",
   "Anugerah Humas Indonesia",
   "Andal by Taspen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473226-taspen-kembali-raih-penghargaan-di-anugerah-humas-indonesia-2026-pertahankan-prestasi-tiga-tahun-beruntun"
 },
 {
  "slug": "giaa-gelar-rupslb-6-november-bahas-penambahan-modal-gmf-aeroasia",
  "category": "Aksi Korporasi",
  "title": "GIAA Gelar RUPSLB 6 November, Bahas [Penambahan] Modal GMF AeroAsia",
  "deck": "RUPSLB digelar 6 November 2026 secara elektronik, mengagendakan penambahan modal lewat suntikan saham GMF AeroAsia oleh Danantara, perubahan anggaran dasar, dan pergantian pengurus.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "RUPSLB",
   "Danantara",
   "GMF AeroAsia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5fed2b2c75_fba1043bfd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-pastikan-karhutla-tak-ganggu-produksi-dan-pendapatan-2026",
  "category": "Aksi Korporasi",
  "title": "UNSP Pastikan [Karhutla] Tak Ganggu Produksi dan Pendapatan 2026",
  "deck": "Menanggapi permintaan penjelasan bursa, UNSP memastikan karhutla belum berdampak pada produksi, pendapatan, dan operasional 2026, meski mengakui potensi risiko hukum.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "karhutla",
   "sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/86f10ccfe0_e6c1bab5a1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-jelaskan-ke-bursa-dampak-karhutla-ke-produksi-minim",
  "category": "Aksi Korporasi",
  "title": "SINI Jelaskan ke Bursa, Dampak [Karhutla] ke Produksi Minim",
  "deck": "Singaraja Putra menjawab permintaan penjelasan BEI soal karhutla, menyebut dampaknya ke operasional lima anak usaha tambang batu bara di Kalimantan tidak signifikan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "karhutla",
   "batu bara",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/462a6117f4_90e135b45b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewa-laba-bersih-melonjak-114-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "DEWA: Laba Bersih [Melonjak] 114% di Kuartal III 2026",
  "deck": "Darma Henwa catat laba bersih Rp513 miliar pada sembilan bulan 2026, naik lebih dari dua kali lipat, didukung kenaikan pendapatan dan pinjaman sindikasi baru dari BCA dan Mandiri.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWA",
   "laporan keuangan",
   "pinjaman bank",
   "pertambangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261015195633-64543-0/FinancialStatement-2026-III-DEWA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-ri-ke-inggris-hadapi-skema-tarif-baru-2027",
  "category": "Global",
  "title": "Ekspor RI ke Inggris Hadapi Skema Tarif [Baru] 2027",
  "deck": "Kemendag dan Inggris perkuat kerja sama dagang, sementara skema tarif ekspor Inggris untuk Indonesia akan berubah mulai Januari 2027.",
  "date": "15 Oktober 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "Indonesia-Inggris",
   "Ekspor",
   "Kemendag",
   "Tarif Dagang"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-tegaskan-komitmen-perkuat-kerja-sama-strategis-dan-perdagangan-indonesia-inggris",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "nsss-tegaskan-karhutla-tak-ganggu-produksi-sawit",
  "category": "Aksi Korporasi",
  "title": "NSSS Tegaskan Karhutla Tak Ganggu [Produksi] Sawit",
  "deck": "Nusantara Sawit Sejahtera menjawab permintaan penjelasan BEI soal karhutla, memastikan tak ada dampak material ke operasional maupun keuangan perusahaan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "karhutla",
   "sawit",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d6c5de72ef_42fe11f6b8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smar-jawab-bursa-karhutla-tak-ganggu-produksi-sawit-2026",
  "category": "Aksi Korporasi",
  "title": "SMAR Jawab Bursa: Karhutla Tak Ganggu [Produksi] Sawit 2026",
  "deck": "Menanggapi permintaan penjelasan BEI, SMAR menyatakan kebakaran lahan tak berdampak material pada produksi, pendapatan, dan laba sepanjang 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "karhutla",
   "kelapa sawit",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eb996aeef0_0f7e3e70f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kunjungan-wisman-capai-10-58-juta-investasi-pariwisata-melesat",
  "category": "Bisnis",
  "title": "Kunjungan Wisman Capai 10,58 Juta, [Investasi] Pariwisata Melesat",
  "deck": "Investasi sektor pariwisata tumbuh 16,64 persen sepanjang 2026, dua kali laju investasi nasional, saat kunjungan wisman naik 5,38 persen menjadi 10,58 juta hingga Agustus.",
  "date": "15 Oktober 2026",
  "image": "assets/img/rumah-subsidi.jpg",
  "tags": [
   "Pariwisata",
   "Investasi",
   "Wisatawan Mancanegara",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7158/pariwisata-indonesia-tumbuh-tangguh-investasi-dan-peluang-usaha-menguat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wamendag-soroti-peran-swedia-dalam-i-eu-cepa-di-tei-2026",
  "category": "Global",
  "title": "Wamendag Soroti Peran Swedia dalam [I-EU CEPA] di TEI 2026",
  "deck": "Wamendag Dyah Roro Esti menyoroti peran Swedia dalam I-EU CEPA di forum bisnis Trade Expo Indonesia 2026, dengan nilai dagang RI-Swedia mencapai US$872,2 juta pada 2025.",
  "date": "15 Oktober 2026",
  "image": "assets/img/10-merek-kuliner-ri-teken-mou-ekspansi-ke-5-negara.jpg",
  "tags": [
   "I-EU CEPA",
   "Swedia",
   "Trade Expo Indonesia",
   "Kementerian Perdagangan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-kemitraan-ekonomi-eropa-wamendag-soroti-peran-swedia-dan-i-eu-cepa",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "koperasi-merah-putih-mulai-beroperasi-di-jatim",
  "category": "UMKM",
  "title": "Koperasi Merah Putih [Mulai] Beroperasi di Jatim",
  "deck": "Koperasi desa di Jawa Timur mulai menyalurkan beras, LPG, dan bantuan sosial langsung ke warga, menandai uji coba tahap awal program nasional.",
  "date": "15 Oktober 2026",
  "image": "assets/img/koperasi-merah-putih-mulai-beroperasi-di-jatim.jpg",
  "imageV": "mv9h1t0o",
  "tags": [
   "koperasi merah putih",
   "kementerian koperasi",
   "jawa timur",
   "subsidi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473207-koperasi-merah-putih-mulai-beroperasi-di-jatim-ini-layanan-yang-disiapkan-untuk-masyarakat"
 },
 {
  "slug": "bris-panggil-rupslb-6-november-bahas-rights-issue-kedua",
  "category": "Aksi Korporasi",
  "title": "BRIS Panggil RUPSLB 6 November, Bahas [Rights Issue] Kedua",
  "deck": "Bank Syariah Indonesia memanggil pemegang saham untuk RUPSLB 6 November 2026, meminta persetujuan rencana penambahan modal lewat hak memesan efek terlebih dahulu kedua (PMHMETD II).",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "RUPSLB",
   "rights issue",
   "PMHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/feb63f52e6_b51b4c1ba4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-panggil-rupslb-rombak-direksi-komisaris-6-november",
  "category": "Aksi Korporasi",
  "title": "KDTN Panggil RUPSLB, [Rombak] Direksi-Komisaris 6 November",
  "deck": "Puri Sentul Permai (KDTN) menggelar RUPSLB 6 November 2026 untuk ganti direksi-komisaris, sekaligus menegaskan pengambilalihan oleh calon pengendali baru belum terlaksana.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "RUPSLB",
   "Pergantian Direksi",
   "Pengambilalihan Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/91626d38f2_9353dc1b70.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-gelar-paparan-publik-usai-suspensi-saham-melonjak",
  "category": "Aksi Korporasi",
  "title": "SMMT Gelar Paparan Publik Usai [Suspensi] Saham Melonjak",
  "deck": "Golden Eagle Energy (SMMT) menggelar paparan publik insidentil 20 Oktober 2026 setelah sahamnya disuspensi BEI akibat lonjakan harga signifikan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "suspensi saham",
   "paparan publik",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4233368f03_059e9038e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trja-tegaskan-karhutla-tak-ganggu-bisnis-penyewaan-kendaraan",
  "category": "Aksi Korporasi",
  "title": "TRJA Tegaskan [Karhutla] Tak Ganggu Bisnis Penyewaan Kendaraan",
  "deck": "Merespons surat Bursa, Transkon Jaya (TRJA) memastikan tidak ada gangguan operasional akibat karhutla, tanpa lahan konsesi dan aset kendaraan yang diasuransikan penuh.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRJA",
   "karhutla",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2fa7fb53b9_ed35f843db.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fapa-pastikan-karhutla-tak-ganggu-operasi-di-kalimantan",
  "category": "Aksi Korporasi",
  "title": "FAPA Pastikan Karhutla Tak Ganggu [Operasi] di Kalimantan",
  "deck": "Menjawab permintaan penjelasan Bursa, FAP Agri menyatakan kebakaran hutan dan lahan di sejumlah wilayah Indonesia tidak berdampak material terhadap produksi, pendapatan, maupun arus kas perseroan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAPA",
   "karhutla",
   "kelapa sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4bfb9a555e_a2d8df3124.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bltz-jelaskan-penyebab-rugi-ekspansi-nonbioskop-ditunda",
  "category": "Aksi Korporasi",
  "title": "BLTZ Jelaskan Penyebab Rugi, Ekspansi Nonbioskop [Ditunda]",
  "deck": "Dalam paparan publik insidentil usai suspensi saham, manajemen BLTZ menyebut rugi akibat beban bunga utang, sementara rencana ekspansi ke bisnis pijat dan kosmetik Korea belum diprioritaskan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "Graha Layar Prima",
   "CGV Cinemas",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/117c176552_7377508b07.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nice-pastikan-tambang-nikel-tak-terdampak-karhutla",
  "category": "Aksi Korporasi",
  "title": "NICE Pastikan Tambang Nikel Tak Terdampak [Karhutla]",
  "deck": "PT Adhi Kartiko Pratama Tbk (NICE) menjawab permintaan penjelasan BEI soal kebakaran hutan dan lahan, memastikan tambang nikelnya di Konawe Utara tidak terganggu.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "karhutla",
   "pertambangan nikel",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eb058456de_0c6ecbee38.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cita-pastikan-operasi-tambang-normal-meski-ada-karhutla",
  "category": "Aksi Korporasi",
  "title": "CITA Pastikan Operasi Tambang Normal Meski Ada [Karhutla]",
  "deck": "Cita Mineral Investindo (CITA) memastikan ke Bursa Efek Indonesia bahwa kebakaran hutan dan lahan di konsesi Ketapang tidak mengganggu target produksi dan keuangan 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITA",
   "karhutla",
   "tambang bauksit",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/79d756a348_6688fb687a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-rampungkan-pembayaran-utang-dari-dana-obligasi-rp452-m",
  "category": "Aksi Korporasi",
  "title": "PIDL Rampungkan Pembayaran [Utang] dari Dana Obligasi Rp452 M",
  "deck": "PIDL mengoreksi laporan realisasi dana hasil obligasi dan sukuk mudharabah senilai total Rp936,79 miliar, dengan 99 persen dana obligasi dipakai melunasi utang bank.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pembayaran utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e067c343ae_cd63975df5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpns-jelaskan-ke-bursa-rups-perubahan-usaha-mundur-ke-desember",
  "category": "Aksi Korporasi",
  "title": "DPNS Jelaskan ke Bursa, RUPS Perubahan Usaha [Mundur] ke Desember",
  "deck": "Menjawab permintaan penjelasan Bursa, DPNS mengakui audit laporan keuangan kuartal I 2026 molor karena gangguan sistem akuntansi, sehingga RUPS perubahan usaha mundur ke Desember 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPNS",
   "suspensi saham",
   "RUPSLB",
   "audit laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c832cf8a7e_e5ddd638b9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gzco-dampak-karhutla-ke-produksi-tak-signifikan",
  "category": "Aksi Korporasi",
  "title": "GZCO: Dampak [Karhutla] ke Produksi Tak Signifikan",
  "deck": "Gozco Plantations menjawab permintaan penjelasan Bursa soal dampak kebakaran hutan dan lahan terhadap operasional, produksi, dan status hukumnya.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GZCO",
   "karhutla",
   "kelapa sawit",
   "produksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d7546e2022_0ccbd5bd12.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-jadwalkan-rupslb-pada-23-november-2026",
  "category": "Aksi Korporasi",
  "title": "VTNY Jadwalkan [RUPSLB] pada 23 November 2026",
  "deck": "Venteny Fortuna International mengumumkan rencana RUPSLB 23 November 2026, dengan batas pencatatan pemegang saham 29 Oktober 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "RUPSLB",
   "Venteny Fortuna International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a5806c5c56_da6db17644.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jarr-tak-ada-dampak-karhutla-ke-produksi-dan-laba-2026",
  "category": "Aksi Korporasi",
  "title": "JARR: Tak Ada Dampak [Karhutla] ke Produksi dan Laba 2026",
  "deck": "Menjawab permintaan penjelasan BEI, JARR menyatakan tidak ada kejadian kebakaran hutan dan lahan di area operasionalnya di Kalimantan Selatan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JARR",
   "karhutla",
   "kelapa sawit",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e21aa03be2_85540d8ab5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tkim-pastikan-karhutla-tak-ganggu-produksi-dan-pendapatan",
  "category": "Aksi Korporasi",
  "title": "TKIM Pastikan Karhutla Tak Ganggu [Produksi] dan Pendapatan",
  "deck": "TKIM menjawab permintaan penjelasan BEI terkait karhutla, menyatakan produksi, pendapatan, dan laba tidak terdampak, dengan wilayah berisiko hanya menyumbang 1 persen pendapatan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TKIM",
   "karhutla",
   "keterbukaan informasi",
   "industri kertas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2e56c9746c_55b744d670.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jawa-koreksi-penjelasan-ke-bei-sebut-belum-ada-sanksi-karhutla",
  "category": "Aksi Korporasi",
  "title": "JAWA Koreksi Penjelasan ke BEI, Sebut Belum Ada Sanksi [Karhutla]",
  "deck": "Jaya Agra Wattie (JAWA) mengoreksi surat penjelasannya ke BEI soal karhutla, kini menyatakan belum ada sanksi administratif, berbeda dari keterangan sehari sebelumnya.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAWA",
   "karhutla",
   "Bursa Efek Indonesia",
   "sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/da46b6c6d1_67ed2de0bd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mktr-pastikan-karhutla-tak-ganggu-operasi-sawit-lamandau",
  "category": "Aksi Korporasi",
  "title": "MKTR Pastikan [Karhutla] Tak Ganggu Operasi Sawit Lamandau",
  "deck": "Menanggapi permintaan penjelasan Bursa, MKTR menyatakan kebakaran hutan di sekitar lahan sawitnya di Lamandau belum berdampak material terhadap produksi, pendapatan, laba, maupun aset.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKTR",
   "karhutla",
   "sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3e795fb4f8_3ff6d619ae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "east-laba-naik-8-6-di-kuartal-iii-dividen-kuras-kas-rp47-miliar",
  "category": "Aksi Korporasi",
  "title": "EAST: Laba Naik 8,6% di Kuartal III, [Dividen] Kuras Kas Rp47 Miliar",
  "deck": "Laba bersih Eastparc Hotel naik ke Rp22,80 miliar pada sembilan bulan 2026, tapi kas perusahaan turun tajam setelah membayar dividen Rp47,04 miliar ke pemegang saham.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EAST",
   "laporan keuangan",
   "dividen",
   "hotel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261015233032-64556-0/FinancialStatement-2026-III-EAST.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "slis-gelar-rupslb-kedua-usai-kuorum-rapat-pertama-tak-tercapai",
  "category": "Aksi Korporasi",
  "title": "SLIS Gelar RUPSLB Kedua Usai [Kuorum] Rapat Pertama Tak Tercapai",
  "deck": "RUPSLB pertama SLIS gagal kuorum meski dihadiri 53,01 persen pemegang saham. Rapat kedua digelar 23 Oktober 2026 untuk menyetujui penyesuaian anggaran dasar dengan KBLI 2025.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SLIS",
   "RUPSLB",
   "anggaran dasar",
   "KBLI 2025"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/930a4d81c4_998858aba9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-dan-timor-leste-teken-bit-lindungi-investasi-dua-negara",
  "category": "Global",
  "title": "Indonesia dan Timor-Leste Teken [BIT], Lindungi Investasi Dua Negara",
  "deck": "Indonesia dan Timor-Leste menandatangani perjanjian investasi bilateral yang mengatur promosi, kemudahan, dan perlindungan hukum investasi di tengah perdagangan dua negara senilai US$150 juta.",
  "date": "15 Oktober 2026",
  "image": "assets/img/indonesia-dan-timor-leste-teken-bit-lindungi-investasi-dua-negara.jpg",
  "imageV": "mv9boifn",
  "tags": [
   "BIT",
   "Investasi",
   "Timor-Leste",
   "BKPM"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/indonesia-dan-timor-leste-teken-bit-buka-peluang-kerja-sama-ekonomi-lebih-luas",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "inkp-jawab-bursa-karhutla-tak-ganggu-produksi",
  "category": "Aksi Korporasi",
  "title": "INKP Jawab Bursa: Karhutla Tak Ganggu [Produksi]",
  "deck": "INKP menjawab permintaan penjelasan BEI soal dampak karhutla, memastikan tidak ada gangguan produksi, pendapatan, maupun proses hukum terkait kebakaran hutan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "karhutla",
   "Indah Kiat Pulp & Paper",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/522510bc5a_a338c79bed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "27-provinsi-masukkan-ekonomi-syariah-ke-rencana-pembangunan",
  "category": "Makroekonomi",
  "title": "27 Provinsi Masukkan Ekonomi [Syariah] ke Rencana Pembangunan",
  "deck": "Bank Indonesia mendorong pemaduan dana zakat dan wakaf dengan pembiayaan bank syariah untuk UMKM, seiring 27 provinsi memasukkan ekonomi syariah ke rencana pembangunan daerah.",
  "date": "15 Oktober 2026",
  "image": "assets/img/27-provinsi-masukkan-ekonomi-syariah-ke-rencana-pembangunan.jpg",
  "imageV": "mv9booiw",
  "tags": [
   "ekonomi syariah",
   "UMKM",
   "ISEF 2026",
   "Bank Indonesia"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "tapg-pastikan-karhutla-tak-ganggu-produksi-sawit",
  "category": "Aksi Korporasi",
  "title": "TAPG Pastikan [Karhutla] Tak Ganggu Produksi Sawit",
  "deck": "Triputra Agro Persada menanggapi permintaan penjelasan BEI soal dampak kebakaran hutan dan lahan, menyatakan belum ada area operasional yang terdampak.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "karhutla",
   "kelapa sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/de442bb85b_b9566fa18f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tldn-tegaskan-karhutla-tak-ganggu-produksi-sawit-kaltim",
  "category": "Aksi Korporasi",
  "title": "TLDN Tegaskan [Karhutla] Tak Ganggu Produksi Sawit Kaltim",
  "deck": "Merespons surat permintaan penjelasan BEI soal dampak kebakaran hutan dan lahan, TLDN menyatakan produksi dan pendapatannya di Kalimantan Timur belum terganggu.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLDN",
   "karhutla",
   "kelapa sawit",
   "Kalimantan Timur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9091e9f2fa_1a0a2b8a2f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-pastikan-karhutla-tak-ganggu-produksi-di-4-lokasi",
  "category": "Aksi Korporasi",
  "title": "PIDL Pastikan [Karhutla] Tak Ganggu Produksi di 4 Lokasi",
  "deck": "PIDL menjawab permintaan penjelasan Bursa soal dampak karhutla, menyebut operasional di Karawang, Perawang, Jambi, dan Kalimantan Timur tetap berjalan normal.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "karhutla",
   "Bursa Efek Indonesia",
   "pulp dan kertas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8b703c1e8d_e2661d6231.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-pastikan-karhutla-tak-ganggu-operasional-pabrik-di-jambi",
  "category": "Aksi Korporasi",
  "title": "LPPI Pastikan Karhutla Tak Ganggu [Operasional] Pabrik di Jambi",
  "deck": "LPPI menjawab permintaan penjelasan Bursa terkait dampak karhutla, menegaskan operasional dan target produksi 2026 di Jambi tidak terganggu.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "karhutla",
   "pulp dan kertas",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ed5824ab80_513cd58558.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-rampungkan-investasi-proyek-ca-edc-bersama-danantara-ina",
  "category": "Aksi Korporasi",
  "title": "TPIA [Rampungkan] Investasi Proyek CA-EDC Bersama Danantara-INA",
  "deck": "Chandra Asri Pacific lewat anak usahanya merampungkan transaksi investasi strategis proyek kimia CA-EDC bersama Danantara Investment Management dan Indonesia Investment Authority.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "CA-EDC",
   "Danantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6acdea1505_9d1b0347e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "staa-pastikan-tak-ada-dampak-karhutla-ke-operasional-dan-laba",
  "category": "Aksi Korporasi",
  "title": "STAA Pastikan Tak Ada Dampak [Karhutla] ke Operasional dan Laba",
  "deck": "Menjawab permintaan penjelasan Bursa, STAA menyatakan tidak ada kebakaran hutan dan lahan di area operasionalnya sehingga produksi dan keuangan tahun 2026 berjalan normal.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "STAA",
   "karhutla",
   "kelapa sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7d90568dce_6d3b9fdfbd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-jawab-bei-soal-karhutla-dampak-ke-produksi-belum-jelas",
  "category": "Aksi Korporasi",
  "title": "ANDI jawab BEI soal [karhutla], dampak ke produksi belum jelas",
  "deck": "Andira Agro menjelaskan ke BEI bahwa seluruh produksi dan pendapatannya berasal dari satu lokasi perkebunan di Sumatera Selatan yang berisiko terdampak kebakaran hutan dan lahan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "karhutla",
   "keterbukaan informasi",
   "perkebunan sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5b5ef493c6_3e70b871eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-rencanakan-stock-split-1-5-rupslb-23-november",
  "category": "Aksi Korporasi",
  "title": "PRDA Rencanakan [Stock Split] 1:5, RUPSLB 23 November",
  "deck": "Prodia Widyahusada berencana memecah saham dengan rasio 1:5, menambah jumlah saham beredar dari 937,5 juta menjadi hampir 4,7 miliar lembar. Persetujuan dimintakan dalam RUPSLB 23 November 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "stock split",
   "RUPSLB",
   "Prodia Widyahusada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f6f5f3792c_752572ef7c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-pastikan-operasi-blok-migasnya-tak-terdampak-karhutla",
  "category": "Aksi Korporasi",
  "title": "RATU Pastikan Operasi Blok Migasnya [Tak Terdampak] Karhutla",
  "deck": "Menjawab permintaan penjelasan Bursa soal karhutla, RATU memastikan seluruh blok migas tempat perusahaan memiliki hak partisipasi beroperasi normal tanpa revisi target produksi 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "Raharja Energi Cepu",
   "karhutla",
   "SKK Migas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2551990ac_bd47d81e4a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-cani-dapat-tambahan-kriteria-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "Saham CANI Dapat Tambahan Kriteria [Pemantauan Khusus]",
  "deck": "BEI mengoreksi pengumuman sebelumnya dan menambahkan kriteria opini disclaimer pada status pemantauan khusus saham CANI, yang sebelumnya sudah berstatus ekuitas negatif.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "pemantauan khusus",
   "BEI",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e572107494_4ddd5ce914.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-pastikan-karhutla-sumsel-tak-ganggu-produksi",
  "category": "Aksi Korporasi",
  "title": "OPPM Pastikan Karhutla Sumsel Tak Ganggu [Produksi]",
  "deck": "Menjawab permintaan BEI, OPPM menyatakan kebakaran hutan di Sumatera Selatan tidak mengganggu operasi, target produksi, pendapatan, laba, maupun aset perusahaan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "karhutla",
   "pulp dan kertas",
   "Sumatera Selatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/91a8b3cfc4_d2e4bf752f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-jadwalkan-rupslb-23-november-dps-29-oktober",
  "category": "Aksi Korporasi",
  "title": "BYAN Jadwalkan [RUPSLB] 23 November, DPS 29 Oktober",
  "deck": "Bayan Resources menjadwalkan RUPSLB pada 23 November 2026, dengan recording date pemegang saham 29 Oktober 2026. Agenda resmi baru diumumkan 30 Oktober.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "RUPSLB",
   "Bayan Resources",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/572bb95a2c_041ccb7a8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oils-pastikan-tak-terdampak-karhutla-operasional-aman",
  "category": "Aksi Korporasi",
  "title": "OILS Pastikan Tak Terdampak [Karhutla], Operasional Aman",
  "deck": "OILS menjawab permintaan penjelasan BEI soal isu karhutla nasional, menegaskan asetnya di Lampung Timur hanya gudang bahan baku dan tidak ada dampak operasional maupun hukum.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OILS",
   "karhutla",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e7f0e01dfb_edd2e6e9e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-gaet-danantara-dan-ina-danai-proyek-ca-edc",
  "category": "Aksi Korporasi",
  "title": "TPIA Gaet Danantara dan INA Danai Proyek [CA-EDC]",
  "deck": "Danantara, INA, dan Chandra Asri Group merampungkan kemitraan investasi untuk proyek petrokimia CA-EDC di Cilegon yang konstruksinya sudah 80 persen jadi.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "Danantara",
   "CA-EDC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6cea027363_e04877f97d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rmke-pastikan-operasi-tambang-tak-terdampak-karhutla",
  "category": "Aksi Korporasi",
  "title": "RMKE Pastikan Operasi Tambang [Tak Terdampak] Karhutla",
  "deck": "Menjawab permintaan penjelasan Bursa soal karhutla, RMK Energy sebut seluruh lokasi operasinya aman dan tidak ada gangguan produksi maupun hukum.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RMKE",
   "karhutla",
   "keterbukaan informasi",
   "pertambangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4bd44e0cbf_2cfe825030.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mgro-tegaskan-karhutla-tak-ganggu-produksi-dan-keuangan",
  "category": "Aksi Korporasi",
  "title": "MGRO Tegaskan [Karhutla] Tak Ganggu Produksi dan Keuangan",
  "deck": "Menjawab permintaan penjelasan BEI, Mahkota Group menyatakan kebakaran hutan dan lahan di sekitar tujuh anak usahanya belum berdampak pada produksi, pendapatan, atau laba perusahaan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGRO",
   "karhutla",
   "sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3cc09af349_f067599653.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "utang-luar-negeri-ri-naik-5-6-jadi-us-459-3-miliar",
  "category": "Makroekonomi",
  "title": "Utang Luar Negeri RI [Naik] 5,6% jadi US$459,3 Miliar",
  "deck": "Utang luar negeri Indonesia naik 5,6 persen jadi US$459,3 miliar pada Agustus 2026, ditopang arus modal asing ke surat utang pemerintah dan BI, sementara utang swasta menyusut.",
  "date": "15 Oktober 2026",
  "image": "assets/img/utang-luar-negeri-ri-naik-5-6-jadi-us-459-3-miliar.jpg",
  "imageV": "mv94s6ot",
  "tags": [
   "utang luar negeri",
   "Bank Indonesia",
   "SRBI",
   "surat utang negara"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bank-bjb-luncurkan-kartu-atm-edisi-persib-untuk-bobotoh",
  "category": "Perbankan",
  "title": "bank bjb Luncurkan Kartu ATM [Edisi] PERSIB untuk Bobotoh",
  "deck": "bank bjb menghadirkan kartu ATM bertema PERSIB untuk mendekatkan diri ke komunitas Bobotoh sekaligus mendorong pembukaan rekening lewat aplikasi digital DIGI.",
  "date": "15 Oktober 2026",
  "image": "assets/img/bank-bjb-luncurkan-kartu-atm-edisi-persib-untuk-bobotoh.jpg",
  "imageV": "mv9boowg",
  "tags": [
   "bank bjb",
   "PERSIB",
   "Bobotoh",
   "DIGI bank bjb"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473142-dekat-dengan-bobotoh-bank-bjb-permudah-kepemilikan-kartu-atm-bank-bjb-edisi-persib"
 },
 {
  "slug": "maxstream-pakai-ai-dalam-produksi-film-pertamanya",
  "category": "Teknologi",
  "title": "MAXStream Pakai [AI] dalam Produksi Film Pertamanya",
  "deck": "Telkomsel meluncurkan film pertama MAXStream TV yang menggabungkan kecerdasan buatan dengan arahan kreatif manusia dalam proses produksinya.",
  "date": "15 Oktober 2026",
  "image": "assets/img/maxstream-pakai-ai-dalam-produksi-film-pertamanya.jpg",
  "imageV": "mv9boq23",
  "tags": [
   "MAXStream",
   "Telkomsel",
   "AI",
   "Rahasia Pernikahan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473141-maxstream-tv-padukan-ai-dan-sentuhan-kreatif-manusia-dalam-film-rahasia-pernikahan"
 },
 {
  "slug": "adhi-rombak-utang-dan-divestasi-rp1-91-triliun-ke-bei",
  "category": "Aksi Korporasi",
  "title": "ADHI Rombak [Utang] dan Divestasi Rp1,91 Triliun ke BEI",
  "deck": "ADHI menjawab permintaan penjelasan Bursa soal divestasi saham DTP dan JMJ senilai Rp1,91 triliun, restrukturisasi seluruh utang bank dan obligasi, serta realokasi sisa dana rights issue.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "divestasi",
   "restrukturisasi utang",
   "LRT City"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/014e5b9690_627eb7f3f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-bjb-perluas-akses-beli-obligasi-ritel-sbr015",
  "category": "Pasar Modal",
  "title": "Bank bjb Perluas Akses Beli Obligasi Ritel [SBR015]",
  "deck": "SBR015 ditawarkan 28 September-22 Oktober 2026 dengan kupon awal 6,75% (tenor 2 tahun) dan 6,85% (tenor 4 tahun). Bank bjb menyediakan kanal digital untuk pembeliannya.",
  "date": "15 Oktober 2026",
  "image": "assets/img/bank-bjb-perluas-akses-beli-obligasi-ritel-sbr015.jpg",
  "imageV": "mv94s75c",
  "tags": [
   "SBR015",
   "SBN Ritel",
   "bank bjb",
   "BI Rate"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473134-sbr015-hadir-bank-bjb-buka-akses-investasi-sbn-ritel-bagi-masyarakat"
 },
 {
  "slug": "lapd-akuisisi-bss-rp59-43-miliar-terbitkan-saham-baru-rp100-m",
  "category": "Aksi Korporasi",
  "title": "LAPD Akuisisi [BSS] Rp59,43 Miliar, Terbitkan Saham Baru Rp100 M",
  "deck": "LAPD berencana akuisisi BSS, kontraktor tambang di Kalimantan senilai Rp59,43 miliar, lewat rights issue PMHMETD II hingga Rp100 miliar, di tengah rugi besar semester I 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "pertambangan",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4e36533519_581c2b06f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medc-tegaskan-karhutla-tak-ganggu-produksi-migas-dan-listrik",
  "category": "Aksi Korporasi",
  "title": "MEDC Tegaskan Karhutla Tak Ganggu [Produksi] Migas dan Listrik",
  "deck": "Menjawab permintaan penjelasan Bursa soal karhutla, MedcoEnergi memastikan target produksi 2026 tetap sesuai rencana dan tak ada tuntutan hukum terkait kebakaran lahan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "karhutla",
   "keterbukaan informasi",
   "migas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7ebf5b101a_6cd7e4dfc1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-gelar-rupst-6-november-usul-tanpa-dividen-2025",
  "category": "Aksi Korporasi",
  "title": "MTFN Gelar RUPST 6 November, Usul [Tanpa] Dividen 2025",
  "deck": "Capitalinc Investment mengundang pemegang saham ke RUPST 6 November 2026, dengan agenda tidak membagikan dividen tahun buku 2025 serta pengangkatan kembali direksi dan komisaris.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "RUPST",
   "Capitalinc Investment",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9fabcfe790_6787b4a889.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-resmi-catat-suntikan-modal-rp13-m-vico-ke-vins",
  "category": "Aksi Korporasi",
  "title": "OJK Resmi Catat [Suntikan] Modal Rp13 M VICO ke VINS",
  "deck": "OJK IKNB resmi mencatat penambahan modal Rp13 miliar dari VICO ke anak usahanya VINS lewat penerbitan 92,86 juta saham baru untuk memperkuat modal asuransi ini.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VINS",
   "VICO",
   "transaksi afiliasi",
   "permodalan asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f71ade8a75_ccb5c42cfc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-rencanakan-rights-issue-170-juta-saham-dilusi-1-66",
  "category": "Aksi Korporasi",
  "title": "PTRO Rencanakan Rights Issue 170 Juta Saham, Dilusi [1,66%]",
  "deck": "Petrosea berencana menerbitkan maksimal 170 juta saham baru lewat skema hak memesan efek terlebih dahulu, dengan dilusi maksimal 1,66 persen bagi pemegang saham yang tidak ikut serta.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "rights issue",
   "PMHMETD",
   "Petrosea"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fa3a84b273_757ba6109e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-jadwalkan-rupslb-23-november-dps-29-oktober",
  "category": "Aksi Korporasi",
  "title": "PTRO Jadwalkan RUPSLB 23 November, [DPS] 29 Oktober",
  "deck": "Petrosea mengumumkan rencana RUPSLB pada 23 November 2026, lengkap dengan tanggal pencatatan pemegang saham dan mekanisme e-Proxy.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "RUPSLB",
   "Petrosea",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e71e7abb64_a1ba6d4086.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-patra-niaga-genjot-pemulihan-bbm-di-bali",
  "category": "Energi",
  "title": "Pertamina Patra Niaga [Genjot] Pemulihan BBM di Bali",
  "deck": "Pertamina Patra Niaga menambah pasokan 57,9 juta liter BBM dan jam operasional SPBU di Bali untuk mempercepat pemulihan layanan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/pertamina-patra-niaga-genjot-pemulihan-bbm-di-bali.jpg",
  "imageV": "mv94s7kb",
  "tags": [
   "Pertamina",
   "BBM Bali",
   "SPBU",
   "Pertamina Patra Niaga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473120-percepat-pemulihan-layanan-bbm-di-bali-pertamina-patra-niaga-kerahkan-berbagai-upaya"
 },
 {
  "slug": "presiden-prabowo-pangkas-biaya-logistik-lewat-perpres-baru",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo [Pangkas] Biaya Logistik Lewat Perpres Baru",
  "deck": "Presiden Prabowo Subianto menugaskan Menko Airlangga Hartarto menjalankan Perpres 41/2026 untuk menekan biaya logistik nasional yang tercatat 14,29 persen dari PDB pada 2022.",
  "date": "15 Oktober 2026",
  "image": "assets/img/jalan-tol-konstruksi.jpg",
  "tags": [
   "logistik nasional",
   "Perpres 41/2026",
   "Airlangga Hartarto",
   "KIPK"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7157/presiden-prabowo-tugaskan-menko-airlangga-perkuat-ekosistem-logistik-nasional-melalui-perpres-nomor-41-tahun-2026",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-targetkan-42-6-gw-listrik-dari-ebt-hingga-2034",
  "category": "Energi",
  "title": "Pemerintah Targetkan 42,6 GW Listrik dari [EBT] hingga 2034",
  "deck": "RUPTL PLN 2025-2034 menargetkan 42,6 GW atau 61 persen tambahan kapasitas listrik dari energi baru dan terbarukan, dengan potensi investasi Rp2.967,4 triliun.",
  "date": "15 Oktober 2026",
  "image": "assets/img/pemerintah-targetkan-42-6-gw-listrik-dari-ebt-hingga-2034.jpg",
  "imageV": "mv8zviio",
  "tags": [
   "RUPTL",
   "Energi Terbarukan",
   "Ekspor",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/bahlil-di-tei-ke-41-dunia-kini-lirik-produk-hijau-nilainya-lebih-tinggi-dari-produk-fosil",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "umkm-papua-dan-jakarta-buru-pembeli-ekspor-di-tei-2026",
  "category": "UMKM",
  "title": "UMKM Papua dan Jakarta Buru [Pembeli] Ekspor di TEI 2026",
  "deck": "Pelaku UMKM dari Jayapura dan Jakarta memamerkan produk di paviliun Kementerian Perdagangan dalam Trade Expo Indonesia ke-41, sembari menanti kepastian pembeli dari luar negeri.",
  "date": "15 Oktober 2026",
  "image": "assets/img/umkm-papua-dan-jakarta-buru-pembeli-ekspor-di-tei-2026.jpg",
  "imageV": "mv8zvk39",
  "tags": [
   "UMKM",
   "Ekspor",
   "Trade Expo Indonesia",
   "Kementerian Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/asa-ekspor-umkm-dari-ruang-tamu-pilihan-busan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bbsi-pastikan-tak-ada-fakta-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BBSI Pastikan Tak Ada Fakta Material di Balik [Volatilitas] Saham",
  "deck": "Krom Bank Indonesia menjawab permintaan BEI soal pergerakan tak biasa sahamnya, menyatakan tak ada informasi material maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBSI",
   "Krom Bank Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a93846bd0e_fe1d2f92bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bton-bantah-ada-info-material-di-balik-volatilitas-transaksi",
  "category": "Aksi Korporasi",
  "title": "BTON Bantah Ada Info Material di Balik [Volatilitas] Transaksi",
  "deck": "Menanggapi permintaan penjelasan BEI, Betonjaya Manunggal (BTON) menyatakan tidak ada informasi material dan belum ada rencana aksi korporasi dalam tiga bulan mendatang.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTON",
   "Betonjaya Manunggal",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0a0eaa831a_b9e05bd465.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnaf-rampungkan-realisasi-dana-obligasi-rp196-5-miliar",
  "category": "Aksi Korporasi",
  "title": "CNAF rampungkan realisasi dana [obligasi] Rp196,5 miliar",
  "deck": "CIMB Niaga Auto Finance (CNAF) melaporkan seluruh dana hasil obligasi tahap I 2026 senilai Rp196,52 miliar sudah terpakai untuk pembiayaan modal kerja, tanpa sisa dana.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNAF",
   "obligasi",
   "penggunaan dana",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/aa25569a04_e4852c9331.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-561-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.561.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp13.000 menjadi Rp2.561.000 per gram pada 15 Oktober 2026, diikuti penurunan harga buyback.",
  "date": "15 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-561-000-per-gram.jpg",
  "imageV": "mv8zvki0",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "buyback emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473111-saatnya-beli-harga-emas-antam-hari-ini-15-oktober-2026-turun-jadi-rp2561000-per-gram"
 },
 {
  "slug": "jecx-jadwalkan-rupslb-pada-23-november-2026",
  "category": "Aksi Korporasi",
  "title": "JECX Jadwalkan [RUPSLB] pada 23 November 2026",
  "deck": "PT Nitrasanata Dharma Tbk akan menggelar RUPSLB pada 23 November 2026, dengan pemegang saham per 29 Oktober berhak hadir.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "RUPSLB",
   "Nitrasanata Dharma",
   "Rapat Umum Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3fc9ca4bc9_cf1bad67f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dsng-tak-ada-dampak-karhutla-ke-operasional-sawit",
  "category": "Aksi Korporasi",
  "title": "DSNG: Tak Ada Dampak [Karhutla] ke Operasional Sawit",
  "deck": "DSNG menjawab permintaan penjelasan Bursa soal kebakaran hutan dan lahan, memastikan tidak ada insiden karhutla maupun dampak material di seluruh wilayah operasionalnya.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSNG",
   "karhutla",
   "kelapa sawit",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b0b2db0b2f_c8d11195c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-wilton-resources-alihkan-kendali-ke-maxglory-capital",
  "category": "Aksi Korporasi",
  "title": "SQMI: Wilton Resources Alihkan Kendali ke [Maxglory] Capital",
  "deck": "WRC, pengendali tidak langsung SQMI, teken perjanjian penempatan saham dan obligasi konversi dengan Maxglory Capital senilai sekitar US$70 juta yang akan mengalihkan kendali ke MCL.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "Wilton Makmur",
   "Wilton Resources",
   "perubahan pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a307830c37_adce9d16e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fore-catat-transaksi-afiliasi-rp5-miliar-antar-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "FORE Catat Transaksi Afiliasi [Rp5 Miliar] Antar Anak Usaha",
  "deck": "PT Fore Kopi Indonesia Tbk melaporkan jual beli bahan baku senilai maksimal Rp5 miliar antara dua anak usahanya, CFI dan FBI, untuk mendukung bisnis restoran CFI.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORE",
   "transaksi afiliasi",
   "Fore Kopi Indonesia",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/97061df633_822a93cc12.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "10-merek-kuliner-ri-teken-mou-ekspansi-ke-5-negara",
  "category": "UMKM",
  "title": "10 Merek Kuliner RI Teken MoU Ekspansi ke [5] Negara",
  "deck": "Pangan Nusa Expo 2026 dibuka berbarengan TEI ke-41 di ICE BSD City, menampilkan lebih dari 213 UMKM pangan dan penandatanganan 10 MoU ekspansi kuliner ke lima negara.",
  "date": "15 Oktober 2026",
  "image": "assets/img/10-merek-kuliner-ri-teken-mou-ekspansi-ke-5-negara.jpg",
  "imageV": "mv8rurns",
  "tags": [
   "UMKM",
   "ekspor kuliner",
   "Pangan Nusa Expo",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/buka-pangan-nusa-expo-2026-mendag-busan-dorong-umkm-pangan-perluas-pasar-domestik-dan-global",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ppln-suroso-isnandar-jadi-direktur-utama-baru-gantikan-darmawan",
  "category": "Aksi Korporasi",
  "title": "PPLN: Suroso Isnandar jadi [Direktur Utama] baru, gantikan Darmawan",
  "deck": "RUPS PT PLN (Persero) pada 14 Oktober 2026 memberhentikan Darmawan Prasodjo dan mengangkat Suroso Isnandar sebagai Direktur Utama, melengkapi susunan direksi baru perusahaan.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPLN",
   "PLN",
   "direksi",
   "direktur utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e15dd5c40a_4a24eab0c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "digi-ekuitas-negatif-melebar-jadi-rp4-6-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "DIGI: ekuitas negatif [melebar] jadi Rp4,6 miliar di kuartal III",
  "deck": "Laba rugi Arkadia Digital Media menyusut dibanding tahun lalu, tetapi kas merosot tajam dan defisit ekuitas makin dalam di laporan kuartal III 2026.",
  "date": "15 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DIGI",
   "Arkadia Digital Media",
   "laporan keuangan",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261015115238-64545-0/FinancialStatement-2026-III-DIGI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hilirisasi-bauksit-berpotensi-hemat-devisa-rp9-triliun",
  "category": "BUMN",
  "title": "[Hilirisasi] Bauksit Berpotensi Hemat Devisa Rp9 Triliun",
  "deck": "Inalum kini sepenuhnya memakai alumina produksi dalam negeri, memangkas impor dan berpotensi menghemat devisa hingga Rp9 triliun per tahun.",
  "date": "15 Oktober 2026",
  "image": "assets/img/hilirisasi-bauksit-berpotensi-hemat-devisa-rp9-triliun.jpg",
  "imageV": "mv8nyrsi",
  "tags": [
   "hilirisasi",
   "bauksit",
   "alumina",
   "Inalum"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473075-hilirisasi-bauksit-pangkas-impor-indonesia-berpotensi-hemat-devisa-hingga-rp9-triliun-per-tahun"
 },
 {
  "slug": "lkpp-buka-peluang-umkm-pasok-kebutuhan-pemerintah",
  "category": "UMKM",
  "title": "LKPP Buka Peluang UMKM [Pasok] Kebutuhan Pemerintah",
  "deck": "LKPP mempertemukan 16 kementerian/lembaga dengan pelaku usaha lewat Business Matching 2026, membuka akses UMKM ke pengadaan pemerintah senilai Rp929,4 triliun.",
  "date": "15 Oktober 2026",
  "image": "assets/img/lkpp-buka-peluang-umkm-pasok-kebutuhan-pemerintah.jpg",
  "imageV": "mv8i69rt",
  "tags": [
   "UMKM",
   "LKPP",
   "pengadaan pemerintah",
   "Business Matching 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473070-umkm-juga-punya-peluang-pasok-kebutuhan-pemerintah-lkpp-perkenalkan-peluangnya"
 },
 {
  "slug": "kemendag-beri-penghargaan-ke-10-umkm-pangan-buka-akses-ritel",
  "category": "UMKM",
  "title": "Kemendag Beri [Penghargaan] ke 10 UMKM Pangan, Buka Akses Ritel",
  "deck": "Kemendag menyerahkan UKM Pangan Award 2026 kepada 10 UMKM pangan terbaik dari 917 pendaftar, membuka akses ke ritel modern lewat kerja sama dengan APRINDO.",
  "date": "15 Oktober 2026",
  "image": "assets/img/kemendag-beri-penghargaan-ke-10-umkm-pangan-buka-akses-ritel.jpg",
  "imageV": "mv8dc90j",
  "tags": [
   "UMKM",
   "UKM Pangan Award",
   "Kemendag",
   "Ritel Modern"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dukung-inovasi-dan-perluas-akses-pasar-produk-pangan-mendag-busan-serahkan-ukm-pangan-award-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-nikel-ke-usd40-miliar-bahlil-bidik-usd45-miliar-2026",
  "category": "Industri",
  "title": "Ekspor Nikel ke USD40 Miliar, Bahlil Bidik [USD45 Miliar] 2026",
  "deck": "Pemerintah menargetkan ekspor nikel tembus USD45 miliar pada 2026, melanjutkan lonjakan dari USD3,3 miliar pada 2017-2018 lewat hilirisasi.",
  "date": "15 Oktober 2026",
  "image": "assets/img/ekspor-nikel-ke-usd40-miliar-bahlil-bidik-usd45-miliar-2026.jpg",
  "imageV": "mv8dc9fa",
  "tags": [
   "nikel",
   "hilirisasi",
   "ekspor",
   "bahlil"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473053-ekspor-nikel-melonjak-dari-usd33-miliar-jadi-usd40-miliar-menko-bahlil-bidik-usd45-miliar-pada-2026"
 },
 {
  "slug": "brin-soroti-syarat-tata-kelola-pltn-sebelum-dibangun",
  "category": "Energi",
  "title": "BRIN Soroti Syarat Tata Kelola PLTN [Sebelum] Dibangun",
  "deck": "Peneliti BRIN menilai nuklir bisa jadi pasokan listrik dasar yang stabil dan rendah emisi, tapi pemerintah dinilai perlu membereskan tata kelola, keselamatan, dan pembiayaan lebih dulu.",
  "date": "14 Oktober 2026",
  "image": "assets/img/brin-soroti-syarat-tata-kelola-pltn-sebelum-dibangun.jpg",
  "imageV": "mv8dc9ua",
  "tags": [
   "PLTN",
   "nuklir",
   "BRIN",
   "energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473048-kajian-brin-dan-den-pemanfaatan-energi-nuklir-tuntut-kesiapan-tata-kelola-dan-ekosistem-nasional"
 },
 {
  "slug": "wsbp-catat-rugi-rp410-8-miliar-ekuitas-negatif-rp2-37-triliun",
  "category": "Aksi Korporasi",
  "title": "WSBP Catat Rugi Rp410,8 Miliar, [Ekuitas] Negatif Rp2,37 Triliun",
  "deck": "Laporan keuangan kuartal III 2026 WSBP menunjukkan rugi bersih melebar 26,7 persen menjadi Rp410,8 miliar, sementara defisiensi ekuitas membengkak menjadi Rp2,37 triliun.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "laporan keuangan",
   "ekuitas negatif",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261014223606-64531-0/FinancialStatement-2026-III-WSBP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "astra-ajak-30-umkm-tembus-ekspor-di-tei-2026",
  "category": "UMKM",
  "title": "Astra Ajak 30 UMKM Tembus Ekspor di [TEI] 2026",
  "deck": "Astra membawa produk UMKM binaan Desa Sejahtera Astra dan YDBA ke Trade Expo Indonesia 2026 sebagai bagian dari upaya memperluas akses pasar ekspor.",
  "date": "14 Oktober 2026",
  "image": "assets/img/astra-ajak-30-umkm-tembus-ekspor-di-tei-2026.jpg",
  "imageV": "mv8dca94",
  "tags": [
   "Astra",
   "UMKM",
   "Trade Expo Indonesia 2026",
   "Desa Sejahtera Astra"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/473037-astra-dorong-ekspor-umkm-lokal-lewat-trade-expo-indonesia-2026-hadirkan-produk-unggulan-daerah"
 },
 {
  "slug": "ekspor-nikel-ditargetkan-usd45-miliar-pada-2026",
  "category": "Industri",
  "title": "Ekspor Nikel Ditargetkan [USD45 Miliar] pada 2026",
  "deck": "Pemerintah menaikkan target ekspor nikel olahan menjadi USD45 miliar pada 2026, melanjutkan tren sejak ekspor bijih mentah dihentikan dan smelter dibangun di dalam negeri.",
  "date": "14 Oktober 2026",
  "image": "assets/img/ekspor-nikel-ditargetkan-usd45-miliar-pada-2026.jpg",
  "imageV": "mv86y6mz",
  "tags": [
   "nikel",
   "hilirisasi",
   "ekspor",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/ekspor-nikel-ditargetkan-tembus-usd45-miliar-pada-2026-menko-bahlil-hilirisasi-kunci-kemandirian-ekonomi",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "mendag-serahkan-50-penghargaan-ekspor-di-pembukaan-tei-2026",
  "category": "Bisnis",
  "title": "Mendag Serahkan [50] Penghargaan Ekspor di Pembukaan TEI 2026",
  "deck": "Kemendag memberi 50 penghargaan Primaniyarta dan Primaduta 2026 kepada eksportir dan mitra dagang, bersamaan dengan surplus dagang Agustus yang melonjak ke US$3,55 miliar.",
  "date": "14 Oktober 2026",
  "image": "assets/img/mendag-serahkan-50-penghargaan-ekspor-di-pembukaan-tei-2026.jpg",
  "imageV": "mv86yaj5",
  "tags": [
   "ekspor",
   "Kemendag",
   "neraca dagang",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/apresiasi-kinerja-ekspor-mendag-busan-serahkan-50-penghargaan-primaniyarta-dan-primaduta-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "168-mou-senilai-us-13-2-miliar-diteken-di-tei-ke-41",
  "category": "Bisnis",
  "title": "168 MoU Senilai [US$13,2 Miliar] Diteken di TEI ke-41",
  "deck": "Pada hari pembukaan Trade Expo Indonesia ke-41 di BSD City, pelaku usaha Indonesia menandatangani 168 nota kesepahaman dengan pembeli dari 22 negara, didominasi produk makanan olahan, batu bara, furnitur, dan kertas.",
  "date": "14 Oktober 2026",
  "image": "assets/img/168-mou-senilai-us-13-2-miliar-diteken-di-tei-ke-41.jpg",
  "imageV": "mv86yhit",
  "tags": [
   "TEI",
   "ekspor",
   "MoU",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hari-pertama-tei-ke-41-sebanyak-168-mou-senilai-usd-132-miliar-ditandatangani",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kuliner-halal-ri-naik-ke-peringkat-tiga-dunia",
  "category": "Industri",
  "title": "Kuliner Halal RI Naik ke Peringkat [Tiga] Dunia",
  "deck": "Indonesia naik ke peringkat ketiga dunia sektor makanan halal, didukung 123 perjanjian pengakuan sertifikasi halal dengan 43 negara.",
  "date": "14 Oktober 2026",
  "image": "assets/img/kuliner-halal-ri-naik-ke-peringkat-tiga-dunia.jpg",
  "imageV": "mv86ykze",
  "tags": [
   "Halal",
   "ISEF 2026",
   "Bank Indonesia",
   "UMKM"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2822026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "kkp-segel-tambak-udang-tak-berizin-di-karimunjawa",
  "category": "Industri",
  "title": "KKP [Segel] Tambak Udang Tak Berizin di Karimunjawa",
  "deck": "KKP menyegel dua tambak udang seluas 7,71 hektare di Karimunjawa, menyusul 33 lokasi lain yang berhenti beroperasi sejak 2023-2024 karena melanggar aturan tata ruang daerah.",
  "date": "14 Oktober 2026",
  "image": "assets/img/kkp-segel-tambak-udang-tak-berizin-di-karimunjawa.jpg",
  "imageV": "mv81nipj",
  "tags": [
   "KKP",
   "Karimunjawa",
   "Tambak Udang",
   "Perizinan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/segel-tambak-udang-tak-berizin-di-karimunjawa-kkp-tingkatkan-pengawasan-ojx3.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "ri-kejar-pengakuan-sertifikat-pelaut-perikanan-di-eropa",
  "category": "Ketenagakerjaan",
  "title": "RI Kejar [Pengakuan] Sertifikat Pelaut Perikanan di Eropa",
  "deck": "KKP menandatangani perjanjian pengakuan sertifikat awak kapal perikanan dengan Portugal dan mendorong pembaruan serupa dengan Spanyol agar mencakup jenjang perwira.",
  "date": "14 Oktober 2026",
  "image": "assets/img/ri-kejar-pengakuan-sertifikat-pelaut-perikanan-di-eropa.jpg",
  "imageV": "mv81nk6u",
  "tags": [
   "KKP",
   "pelaut perikanan",
   "Portugal",
   "Spanyol"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-bidik-pengakuan-sertifikat-pelaut-perikanan-indonesia-di-eropa-pkyN.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "sertifikasi-halal-jadi-wajib-mulai-17-oktober-2026",
  "category": "Industri",
  "title": "Sertifikasi Halal Jadi [Wajib] Mulai 17 Oktober 2026",
  "deck": "Pemerintah memberlakukan kewajiban sertifikasi halal mulai 17 Oktober 2026, seiring target ekonomi syariah jadi penopang pertumbuhan menuju 8 persen.",
  "date": "14 Oktober 2026",
  "image": "assets/img/jalur-perakitan.jpg",
  "tags": [
   "ekonomi syariah",
   "sertifikasi halal",
   "UMKM",
   "ISEF 2026"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7153/pemerintah-perkuat-ekosistem-ekonomi-syariah-untuk-mendorong-pertumbuhan-dan-daya-saing-nasional",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-pangkas-bea-masuk-plastik-jadi-0-selama-6-bulan",
  "category": "Industri",
  "title": "Pemerintah Pangkas Bea Masuk Plastik Jadi [0%] Selama 6 Bulan",
  "deck": "Lewat PMK 68/2026, bea masuk bahan baku plastik PE dan PP tertentu dipangkas jadi nol persen selama enam bulan, merespons lonjakan harga di pasar global.",
  "date": "14 Oktober 2026",
  "image": "assets/img/mesin-tekstil.jpg",
  "tags": [
   "bea masuk",
   "industri plastik",
   "PMK 68/2026",
   "polyethylene"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7155/dukung-industri-nasional-kemenko-perekonomian-kawal-implementasi-dan-evaluasi-insentif-bea-masuk-bahan-baku-plastik-0",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "aset-migas-phr-di-siak-terjual-rp11-01-miliar-lampaui-target",
  "category": "Energi",
  "title": "Aset Migas PHR di Siak Terjual Rp11,01 Miliar, [Lampaui] Target",
  "deck": "Lelang aset hulu migas tidak terpakai milik PHR di Minas, Siak, laku Rp11,01 miliar, naik sekitar Rp1,75 miliar dari harga limit. ESDM menjadwalkan lelang serupa di Samarinda pekan depan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/aset-migas-phr-di-siak-terjual-rp11-01-miliar-lampaui-target.jpg",
  "imageV": "mv81nn47",
  "tags": [
   "Migas",
   "PHR",
   "ESDM",
   "PNBP"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/lelang-aset-hulu-migas-phr-di-siak-laku-rp1101-miliar-tambah-penerimaan-negara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ri-terbitkan-aturan-antidumping-baru-tutup-celah-penghindaran",
  "category": "Industri",
  "title": "RI Terbitkan Aturan [Antidumping] Baru, Tutup Celah Penghindaran",
  "deck": "PP Nomor 39 Tahun 2026 mengatur ulang tindakan pengamanan, antidumping, dan imbalan, serta untuk pertama kalinya melarang praktik penghindaran lewat rute kirim atau negara asal palsu.",
  "date": "14 Oktober 2026",
  "image": "assets/img/10-produk-umkm-pangan-tembus-rak-ritel-aeon.jpg",
  "tags": [
   "antidumping",
   "PP 39/2026",
   "perdagangan",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pp-nomor-39-tahun-2026-tonggak-baru-perlindungan-industri-dalam-negeri",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "edge-suntik-modal-rp485-miliar-ke-tiga-anak-usaha-digital",
  "category": "Aksi Korporasi",
  "title": "EDGE Suntik [Modal] Rp485 Miliar ke Tiga Anak Usaha Digital",
  "deck": "PT Indointernet (EDGE) menyuntik modal Rp485 miliar ke tiga anak usaha digitalnya untuk belanja modal, transaksi afiliasi yang dikecualikan dari persetujuan RUPS.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "Transaksi Afiliasi",
   "Indointernet",
   "Transaksi Material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/83bf387811_1a7348f841.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mhki-dana-ipo-rp39-5-miliar-masih-mengendap-di-bank-mandiri",
  "category": "Aksi Korporasi",
  "title": "MHKI: Dana IPO Rp39,5 Miliar Masih [Mengendap] di Bank Mandiri",
  "deck": "Realisasi dana IPO MHKI per 30 Juni 2026 baru mencapai 65,86 persen dari dana bersih Rp115,54 miliar, sisanya Rp39,46 miliar masih berupa deposito di Bank Mandiri.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MHKI",
   "Multi Hanna Kreasindo",
   "penggunaan dana IPO",
   "laporan keterbukaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c5402a4133_542c8ab320.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-jawab-permintaan-bursa-akui-rugi-semester-i-karena-transisi",
  "category": "Aksi Korporasi",
  "title": "SMLE Jawab Permintaan Bursa, Akui [Rugi] Semester I Karena Transisi",
  "deck": "SMLE menjelaskan ke BEI bahwa penurunan pendapatan dan rugi bersih semester I merupakan strategi transisi, sementara divestasi 50% saham Sinarom ke Denico masih berlanjut.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "Sinar Aroma Sentosa",
   "Denico Food Ingredients",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b375c363c2_92d001f1ba.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdln-jawab-bursa-soal-restrukturisasi-notes-rp5-2-t",
  "category": "Aksi Korporasi",
  "title": "MDLN Jawab Bursa soal [Restrukturisasi] Notes Rp5,2 T",
  "deck": "MDLN menjelaskan ke BEI dasar hukum pengecualian RUPS dan penilai independen atas restrukturisasi Notes senilai Rp5,2 triliun yang melibatkan pengalihan tanah ke anak usaha baru.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLN",
   "restrukturisasi utang",
   "keterbukaan informasi",
   "POJK 17/2020"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7c85c323bb_10c4526d92.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "maha-pastikan-karhutla-kalimantan-tak-ganggu-operasional",
  "category": "Aksi Korporasi",
  "title": "MAHA Pastikan Karhutla Kalimantan Tak Ganggu [Operasional]",
  "deck": "MAHA menjawab permintaan penjelasan BEI soal kebakaran hutan dan lahan di wilayah tambang kliennya, menyatakan tidak ada dampak material terhadap produksi maupun keuangan 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAHA",
   "karhutla",
   "coal hauling",
   "Kalimantan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cf396456f9_be2352af6f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kras-gabungkan-anak-usaha-ksi-dan-kit",
  "category": "Aksi Korporasi",
  "title": "KRAS [Gabungkan] Anak Usaha KSI dan KIT",
  "deck": "Krakatau Steel menggabungkan anak usahanya, KSI dan KIT, lewat akta notaris 12 Oktober 2026, transaksi afiliasi yang dikecualikan dari prosedur khusus OJK.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRAS",
   "Krakatau Steel",
   "transaksi afiliasi",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8e4d15bc6b_5e834dde7a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-jelaskan-rights-issue-ke-bei-dilusi-capai-95-24",
  "category": "Aksi Korporasi",
  "title": "DOOH Jelaskan Rights Issue ke BEI, Dilusi Capai [95,24%]",
  "deck": "DOOH menjawab permintaan penjelasan BEI atas rencana rights issue hingga 154,78 miliar saham baru dengan dilusi maksimum 95,24 persen.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "rights issue",
   "PMHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c96877bc88_25d50133a6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppatk-catat-transaksi-janggal-rp684-71-triliun-di-tambang",
  "category": "Industri",
  "title": "PPATK Catat Transaksi Janggal [Rp684,71 Triliun] di Tambang",
  "deck": "PPATK dan MIND ID menjalin kerja sama pencegahan pencucian uang di sektor tambang, setelah mendeteksi transaksi janggal senilai Rp684,71 triliun sepanjang 2025 hingga semester I 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/ppatk-catat-transaksi-janggal-rp684-71-triliun-di-tambang.jpg",
  "imageV": "mv7vdkbu",
  "tags": [
   "PPATK",
   "MIND ID",
   "pencucian uang",
   "tambang ilegal"
  ],
  "kreditFoto": "Pusat Pelaporan dan Analisis Transaksi Keuangan",
  "sourceUrl": "https://www.ppatk.go.id/siaran_pers/read/1681/ppatk-dan-mind-id-perkuat-kolaborasi-jaga-integritas-industri-pertambangan-nasional.html",
  "sourceLabel": "Pusat Pelaporan dan Analisis Transaksi Keuangan"
 },
 {
  "slug": "pgli-jelaskan-lonjakan-laba-kuartal-ii-dan-ekspansi-bakehouse",
  "category": "Aksi Korporasi",
  "title": "PGLI Jelaskan Lonjakan Laba Kuartal II dan Ekspansi [Bakehouse]",
  "deck": "Dalam risalah public expose insidentil usai disuspensi bursa, manajemen PGLI membeberkan penyebab lonjakan laba sebelum pajak, rencana penambahan gerai Bakehouse, dan progres pembangkit mini-hidro yang sudah menjual listrik ke PLN.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGLI",
   "public expose",
   "Le Chic Bakehouse",
   "pembangkit mini-hidro"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/33c66182e9_c9766ba685.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "martha-tilaar-dari-salon-garasi-rp1-juta-ke-kosmetik-raksasa",
  "category": "Bisnis",
  "title": "Martha Tilaar: dari Salon Garasi Rp1 Juta ke [Kosmetik] Raksasa",
  "deck": "Martha Tilaar, pendiri Martha Tilaar Group dan Sariayu, meninggal dunia di usia 89 tahun, mewariskan bisnis kosmetik berbasis kekayaan alam Indonesia.",
  "date": "14 Oktober 2026",
  "image": "assets/img/martha-tilaar-dari-salon-garasi-rp1-juta-ke-kosmetik-raksasa.jpg",
  "imageV": "mv7vdkuj",
  "tags": [
   "Martha Tilaar",
   "Martha Tilaar Group",
   "Sariayu",
   "kosmetik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472948-kisah-perjuangan-martha-tilaar-dari-salon-kecil-di-garasi-hingga-membangun-bisnis-kosmetik-besar"
 },
 {
  "slug": "bmas-resmi-angkat-moses-ronald-supardi-jadi-direktur-bisnis",
  "category": "Aksi Korporasi",
  "title": "BMAS Resmi Angkat Moses Ronald Supardi Jadi [Direktur] Bisnis",
  "deck": "Jabatan Direktur Bisnis BMAS yang baru efektif sejak 2 Oktober 2026 setelah lolos fit and proper test OJK, mengisi kursi yang ditinggal Junita Wangsadinata sejak Mei 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "direksi",
   "pergantian pengurus",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/59086641f2_b51c49f623.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgun-klaim-dampak-karhutla-ke-produksi-sawit-minim",
  "category": "Aksi Korporasi",
  "title": "PGUN Klaim Dampak [Karhutla] ke Produksi Sawit Minim",
  "deck": "Pradiksi Gunatama menjawab permintaan penjelasan Bursa Efek Indonesia soal dampak kebakaran hutan dan lahan terhadap kebun dan pabrik sawitnya di Kabupaten Paser, Kalimantan Timur.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGUN",
   "karhutla",
   "kelapa sawit",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7c81950307_8fb6c7c124.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ceka-jelaskan-dampak-karhutla-ke-operasional-pabrik-pontianak",
  "category": "Aksi Korporasi",
  "title": "CEKA Jelaskan Dampak [Karhutla] ke Operasional Pabrik Pontianak",
  "deck": "CEKA menjawab permintaan penjelasan BEI soal dampak kebakaran hutan dan lahan terhadap pabrik Pontianak, menyebut dampak 5-10 persen tapi belum mengubah target produksi 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CEKA",
   "karhutla",
   "BEI",
   "Wilmar Cahaya Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2513fadcf0_2214270e73.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-luncurkan-tiga-program-keuangan-syariah-di-isef-2026",
  "category": "Moneter",
  "title": "BI Luncurkan Tiga Program Keuangan [Syariah] di ISEF 2026",
  "deck": "Bank Indonesia membuka ISEF 2026 dan meluncurkan tiga program baru: pedoman pasar uang syariah, indeks tata kelola zakat, dan beasiswa internasional untuk ekosistem keuangan syariah.",
  "date": "14 Oktober 2026",
  "image": "assets/img/bi-luncurkan-tiga-program-keuangan-syariah-di-isef-2026.jpg",
  "imageV": "mv7swo7d",
  "tags": [
   "ISEF 2026",
   "Bank Indonesia",
   "ekonomi syariah",
   "keuangan syariah"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821826.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "ibst-suspensi-dibuka-sementara-untuk-crossing-saham-go-private",
  "category": "Aksi Korporasi",
  "title": "IBST: Suspensi Dibuka Sementara untuk [Crossing] Saham Go Private",
  "deck": "Bursa membuka sementara suspensi saham IBST di pasar negosiasi untuk transaksi crossing pengalihan saham hasil buyback, bagian dari proses go private dan delisting sukarela perseroan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBST",
   "go private",
   "voluntary delisting",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7cff5e0805_90020cebb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inpp-suntik-modal-rp484-miliar-ke-tiga-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "INPP Suntik [Modal] Rp484 Miliar ke Tiga Anak Usaha",
  "deck": "Perseroan menambah modal disetor di tiga anak usahanya, PKS, IGM, dan PSM, senilai total Rp483,97 miliar guna memperkuat struktur permodalan tanpa mengubah kepemilikan publik INPP.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "Transaksi Afiliasi",
   "Modal Disetor",
   "Anak Usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b7ce29c6f8_f6cacd5f5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpin-pastikan-tak-ada-aset-di-wilayah-karhutla",
  "category": "Aksi Korporasi",
  "title": "CPIN Pastikan Tak Ada Aset di Wilayah [Karhutla]",
  "deck": "Menjawab permintaan penjelasan Bursa Efek Indonesia, Charoen Pokphand Indonesia menegaskan tidak memiliki operasional, konsesi, atau aset di wilayah yang terdampak kebakaran hutan dan lahan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPIN",
   "karhutla",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/71edaebe6e_ac408d6d68.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wamenko-daya-beli-bergeser-bukan-melemah",
  "category": "Makroekonomi",
  "title": "Wamenko: Daya Beli [Bergeser], Bukan Melemah",
  "deck": "Wamenko Perekonomian menyebut data BPS menunjukkan pergeseran konsumsi ke pariwisata dan layanan daring, bukan pelemahan daya beli secara menyeluruh.",
  "date": "14 Oktober 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "Kemenko Perekonomian",
   "Daya Beli",
   "Danantara",
   "Debottlenecking"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7152/wamenko-perekonomian-dorong-percepatan-penanganan-hambatan-usaha-perkuat-pertumbuhan-ekonomi-domestik",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wamendag-temui-menteri-finlandia-dorong-ratifikasi-cepa",
  "category": "Global",
  "title": "Wamendag Temui Menteri Finlandia, Dorong Ratifikasi [CEPA]",
  "deck": "Wamendag Dyah Roro Esti dan Menteri Dagang Luar Negeri Finlandia Ville Tavio bahas penguatan ekosistem startup serta dorongan ratifikasi I-EU CEPA dan aksesi OECD Indonesia.",
  "date": "14 Oktober 2026",
  "image": "assets/img/wamendag-temui-menteri-finlandia-dorong-ratifikasi-cepa.jpg",
  "imageV": "mv7nm256",
  "tags": [
   "Indonesia-Finlandia",
   "I-EU CEPA",
   "OECD",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-dan-finlandia-perkuat-ekosistem-inovasi-dan-perusahaan-rintisan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "smle-targetkan-akuisisi-sinarom-denico-rampung-awal-2027",
  "category": "Aksi Korporasi",
  "title": "SMLE Targetkan Akuisisi Sinarom-Denico [Rampung] Awal 2027",
  "deck": "SMLE menargetkan akuisisi 50% saham Sinarom oleh Denico tuntas Januari-Februari 2027, tapi nilai transaksi dan skema pendanaan masih menunggu kajian.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "akuisisi",
   "Sinarom",
   "Denico"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/efad84163d_4f8627a7d4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrta-ajukan-private-placement-10-saham-baru-rups-16-oktober",
  "category": "Aksi Korporasi",
  "title": "HRTA ajukan private placement [10%] saham baru, RUPS 16 Oktober",
  "deck": "Hartadinata Abadi berencana menerbitkan hingga 460,5 juta saham baru tanpa hak memesan efek terlebih dahulu untuk beli bahan baku emas, menunggu persetujuan RUPS Independen 16 Oktober 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "Hartadinata Abadi",
   "private placement",
   "RUPS Independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/411e1e219e_889e1029fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jawa-akui-kena-sanksi-administratif-terkait-karhutla",
  "category": "Aksi Korporasi",
  "title": "JAWA akui kena [sanksi] administratif terkait karhutla",
  "deck": "JAWA menjelaskan ke bursa bahwa kebun anak usahanya di Tanah Laut, Kalimantan Selatan, terdampak isu karhutla nasional, dan mengakui tengah dikenai sanksi administratif terkait kebakaran hutan dan lahan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAWA",
   "karhutla",
   "sanksi administratif",
   "perkebunan sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/aa1a70595d_f5874f1e4a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-tunda-rupslb-pmhmetd-tanpa-jadwal-baru",
  "category": "Aksi Korporasi",
  "title": "KOTA Tunda RUPSLB [PMHMETD] Tanpa Jadwal Baru",
  "deck": "DMS Propertindo menunda lagi RUPSLB yang sedianya digelar 15 Oktober 2026, menunggu kelengkapan tanggapan atas permintaan tambahan informasi dari OJK soal rencana rights issue dan transaksi material.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "PMHMETD",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fcecae9082_b5889e1f35.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asgr-jadwalkan-rupslb-pada-20-november-2026",
  "category": "Aksi Korporasi",
  "title": "ASGR Jadwalkan [RUPSLB] pada 20 November 2026",
  "deck": "Astra Graphia (ASGR) akan menggelar RUPSLB pada 20 November 2026 di Jakarta, dengan tenggat pengajuan usul agenda oleh pemegang saham pada 22 Oktober 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASGR",
   "RUPSLB",
   "Astra Graphia",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6d6a6d11bd_9f221d8242.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bni-bukukan-penjualan-agunan-rp510-77-miliar",
  "category": "Perbankan",
  "title": "BNI Bukukan Penjualan Agunan [Rp510,77] Miliar",
  "deck": "Program Gelegar Lelang BNI 2026 mencatat penjualan agunan Rp510,77 miliar dari 1.603 lelang di 49 KPKNL selama tiga bulan program berjalan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/bni-bukukan-penjualan-agunan-rp510-77-miliar.jpg",
  "imageV": "mv7nm2jg",
  "tags": [
   "BNI",
   "lelang agunan",
   "Danantara",
   "kredit macet"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472883-gelegar-lelang-bni-2026-bukukan-penjualan-agunan-rp51077-miliar"
 },
 {
  "slug": "bulog-pecahkan-rekor-pengadaan-beras-tembus-4-1-juta-ton",
  "category": "BUMN",
  "title": "BULOG [Pecahkan] Rekor Pengadaan Beras, Tembus 4,1 Juta Ton",
  "deck": "Realisasi pengadaan beras BULOG per 8 Oktober 2026 mencapai 4.115.014 ton setara beras, atau 102,88 persen dari target pemerintah, tertinggi sepanjang sejarah perusahaan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/bulog-pecahkan-rekor-pengadaan-beras-tembus-4-1-juta-ton.jpg",
  "imageV": "mv7gv687",
  "tags": [
   "BULOG",
   "Beras",
   "Cadangan Pangan",
   "Petani"
  ],
  "kreditFoto": "Perum BULOG",
  "sourceUrl": "https://www.bulog.co.id/2026/10/09/bulog-cetak-rekor-sepanjang-sejarah-pengadaan-beras-melampaui-4-juta-ton/",
  "sourceLabel": "Perum BULOG"
 },
 {
  "slug": "bulog-catat-rekor-pengadaan-beras-tembus-4-1-juta-ton",
  "category": "BUMN",
  "title": "BULOG Catat [Rekor] Pengadaan Beras Tembus 4,1 Juta Ton",
  "deck": "Realisasi pengadaan gabah dan beras BULOG mencapai 4,11 juta ton setara beras per 8 Oktober 2026, melampaui target pemerintah dan mencetak rekor baru sepanjang sejarah lembaga itu.",
  "date": "14 Oktober 2026",
  "image": "assets/img/bulog-catat-rekor-pengadaan-beras-tembus-4-1-juta-ton.jpg",
  "imageV": "mv7gv9dj",
  "tags": [
   "BULOG",
   "Pengadaan Beras",
   "Ketahanan Pangan",
   "Cadangan Beras Pemerintah"
  ],
  "kreditFoto": "Perum BULOG",
  "sourceUrl": "https://www.bulog.co.id/2026/10/09/bulog-cetak-sejarah-pengadaan-4-juta-ton-gelar-tasyakuran-bersama-komisi-iv-dpr-ri-di-ambon/",
  "sourceLabel": "Perum BULOG"
 },
 {
  "slug": "meri-dana-ipo-rp27-4-m-tuntas-disalurkan-ke-dua-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "MERI: Dana IPO Rp27,4 M Tuntas Disalurkan ke [Dua] Anak Usaha",
  "deck": "MERI melaporkan realisasi dana IPO Rp27,4 miliar sudah 100 persen disalurkan sebagai modal ke dua anak usaha, Edukasi Delapan dan Akademi Tujuh, sesuai rencana prospektus.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MERI",
   "penggunaan dana IPO",
   "entitas anak",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9f22224014_34246903c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msie-gelar-rupslb-20-november-bahas-penyesuaian-kbli",
  "category": "Aksi Korporasi",
  "title": "MSIE Gelar RUPSLB 20 November, Bahas [Penyesuaian] KBLI",
  "deck": "MSIE akan menggelar RUPSLB pada 20 November 2026 untuk menyetujui penyesuaian kode klasifikasi usaha dari KBLI 2020 ke KBLI 2025, tanpa mengubah kegiatan usaha.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIE",
   "RUPSLB",
   "Anggaran Dasar",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/32ca78511a_9600b12bf4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-tawarkan-obligasi-rp741-miliar-bunga-7-55-7-65",
  "category": "Aksi Korporasi",
  "title": "PRTL tawarkan obligasi [Rp741 miliar], bunga 7,55-7,65%",
  "deck": "Protelindo (PRTL) merilis perbaikan informasi obligasi berkelanjutan V tahap II senilai Rp741,1 miliar, terbagi dua seri bertenor 3 dan 5 tahun, ditawarkan 14-15 Oktober 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "obligasi korporasi",
   "Protelindo",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b53d40a6b2_fad8822bff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bata-panggil-rupslb-5-november-agenda-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "BATA Panggil RUPSLB 5 November, Agenda [Perubahan] Direksi",
  "deck": "Sepatu Bata Tbk mengundang pemegang saham ke RUPSLB 5 November 2026 dengan agenda tunggal persetujuan perubahan susunan direksi perseroan.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATA",
   "RUPSLB",
   "Direksi",
   "Sepatu Bata"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/018e89eced_44ebb370e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-jadwalkan-rupsu-sukuk-seri-b-pada-11-november-2026",
  "category": "Aksi Korporasi",
  "title": "PTPP Jadwalkan RUPSU Sukuk [Seri B] pada 11 November 2026",
  "deck": "PTPP akan menggelar RUPSU ketiga untuk Sukuk Mudharabah Berkelanjutan I Tahap I Tahun 2021 Seri B pada 11 November 2026, pemanggilan resmi diumumkan 28 Oktober 2026.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "sukuk",
   "RUPSU",
   "wali amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/69923bbe46_20bba73981.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-gelar-rupsu-ketiga-untuk-sukuk-tahap-iii-2023",
  "category": "Aksi Korporasi",
  "title": "PTPP Gelar RUPSU [Ketiga] untuk Sukuk Tahap III 2023",
  "deck": "PTPP menjadwalkan RUPSU ketiga untuk Sukuk Mudharabah Berkelanjutan I Tahap III 2023 pada 11 November 2026, bersamaan dengan RUPSU keempat untuk seri sukuk lain.",
  "date": "14 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "RUPSU",
   "Sukuk",
   "Restrukturisasi Utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bebb337a5c_54b971d120.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ilo-seco-luncurkan-fase-baru-program-keuangan-umkm",
  "category": "UMKM",
  "title": "ILO-SECO Luncurkan [Fase Baru] Program Keuangan UMKM",
  "deck": "Pemerintah bersama ILO dan SECO menutup program PROMISE II dan memasuki fase baru penguatan akses keuangan UMKM, di tengah kesenjangan literasi keuangan yang masih lebar.",
  "date": "14 Oktober 2026",
  "image": "assets/img/konveksi-penjahit.jpg",
  "tags": [
   "UMKM",
   "Literasi Keuangan",
   "KUR",
   "PNM Mekaar"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7149/perkuat-ekosistem-umkm-dan-rantai-nilai-daerah-pemerintah-dorong-transformasi-akses-keuangan-menuju-pekerjaan-layak",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-pacu-3-cepa-baru-bidik-ekspor-sawit-otomotif",
  "category": "Global",
  "title": "Pemerintah Pacu 3 [CEPA] Baru, Bidik Ekspor Sawit-Otomotif",
  "deck": "Pemerintah mendorong percepatan implementasi tiga perjanjian dagang baru dengan Uni Eropa, Kanada, dan Eurasia agar manfaatnya benar-benar terasa pada ekspor sawit, otomotif, kopi, dan sejumlah komoditas lain.",
  "date": "14 Oktober 2026",
  "image": "assets/img/12-proyek-lrt-city-dilanjutkan-danantara-kucurkan-rp456-m.jpg",
  "tags": [
   "CEPA",
   "ekspor",
   "perdagangan internasional",
   "Uni Eropa"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7150/bidik-perluasan-pasar-ekspor-menko-airlangga-dorong-percepatan-implementasi-cepa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pasokan-bbm-bali-dikebut-pertamina-buka-suplai-24-jam",
  "category": "Energi",
  "title": "Pasokan BBM Bali Dikebut, Pertamina Buka Suplai [24 Jam]",
  "deck": "Pertamina Patra Niaga mempercepat pemulihan pasokan BBM di Bali lewat skala prioritas SPBU dan suplai nonstop 24 jam, dibantu kapal tanker yang baru merapat membawa Pertalite dan Biosolar.",
  "date": "14 Oktober 2026",
  "image": "assets/img/pasokan-bbm-bali-dikebut-pertamina-buka-suplai-24-jam.jpg",
  "imageV": "mv704tpn",
  "tags": [
   "pertamina",
   "bbm",
   "bali",
   "spbu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472845-kebut-pemulihan-pasokan-bbm-di-bali-pertamina-terapkan-suplai-24-jam-dan-skala-prioritas-spbu"
 },
 {
  "slug": "arii-siapkan-pmthmetd-375-juta-saham-rupslb-20-november",
  "category": "Aksi Korporasi",
  "title": "ARII Siapkan [PMTHMETD] 375 Juta Saham, RUPSLB 20 November",
  "deck": "ARII menjadwalkan RUPSLB 20 November 2026 untuk meminta restu penerbitan hingga 375 juta saham baru tanpa HMETD, dananya untuk infrastruktur jalan anak usaha MMJ.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARII",
   "Atlas Resources",
   "PMTHMETD",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e12384c94f_721e529711.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-trans-kontinental-borong-empat-trofi-maritim-digital",
  "category": "BUMN",
  "title": "Pertamina Trans Kontinental [Borong] Empat Trofi Maritim Digital",
  "deck": "PT Pertamina Trans Kontinental meraih empat penghargaan di Marketeers Editor's Choice Award 2026 untuk layanan maritim, inovasi digital, dan program pesisir.",
  "date": "13 Oktober 2026",
  "image": "assets/img/pertamina-trans-kontinental-borong-empat-trofi-maritim-digital.jpg",
  "imageV": "mv704uso",
  "tags": [
   "Pertamina",
   "maritim",
   "digitalisasi",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472832-perkuat-solusi-digital-dan-pemberdayaan-pesisir-pertamina-trans-kontinental-borong-trofi-marketeers-editors-choice-award-2026"
 },
 {
  "slug": "bpdp-pamerkan-produk-turunan-sawit-di-inacraft-2026",
  "category": "UMKM",
  "title": "BPDP Pamerkan Produk Turunan Sawit di [INACRAFT] 2026",
  "deck": "BPDP dan mitra UMKM binaannya memamerkan produk turunan sawit, kelapa, dan kakao seperti sandal lidi sawit hingga batik di INACRAFT October 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/bpdp-pamerkan-produk-turunan-sawit-di-inacraft-2026.jpg",
  "imageV": "mv704vkx",
  "tags": [
   "bpdp",
   "inacraft",
   "umkm",
   "perkebunan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472826-dari-sandal-lidi-sawit-hingga-batik-produk-turunan-perkebunan-mitra-bpdp-unjuk-gigi-di-inacraft-2026"
 },
 {
  "slug": "mine-panggil-rupslb-jaminkan-aset-untuk-pinjaman-sindikasi",
  "category": "Aksi Korporasi",
  "title": "MINE Panggil RUPSLB, [Jaminkan] Aset untuk Pinjaman Sindikasi",
  "deck": "Sinar Terang Mandiri (MINE) mengundang pemegang saham ke RUPSLB 4 November 2026 untuk menyetujui pergantian direksi, penyesuaian KBLI, dan penjaminan aset untuk pembiayaan sindikasi.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINE",
   "RUPSLB",
   "Sinar Terang Mandiri",
   "penjaminan aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7d31716357_f5ad176a90.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tiga-pakta-dagang-buka-potensi-ekspor-us-14-7-miliar",
  "category": "Global",
  "title": "Tiga Pakta Dagang Buka Potensi Ekspor [US$14,7 Miliar]",
  "deck": "Pemerintah mendorong pemanfaatan nyata tiga perjanjian dagang baru dengan Uni Eropa, Kanada, dan Uni Ekonomi Eurasia yang menurut kajian Kemenko berpotensi menambah ekspor lebih dari US$14 miliar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/2-35-juta-umkm-binaan-pnm-naik-kelas-ke-bank-formal.jpg",
  "tags": [
   "ekspor",
   "perjanjian dagang",
   "CEPA",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7150/dongkrak-pertumbuhan-ekonomi-menko-airlangga-perkuat-kinerja-ekspor",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-kejar-implementasi-tiga-cepa-dagang-baru",
  "category": "Global",
  "title": "Pemerintah Kejar Implementasi Tiga [CEPA] Dagang Baru",
  "deck": "Menko Airlangga mendorong percepatan implementasi CEPA dengan Uni Eropa, Kanada, dan Eurasia, yang diproyeksikan mendongkrak ekspor sejumlah komoditas RI.",
  "date": "13 Oktober 2026",
  "image": "assets/img/20-bank-syariah-temui-51-korporasi-bahas-pembiayaan-ekspansi.jpg",
  "tags": [
   "CEPA",
   "ekspor",
   "perdagangan bebas",
   "Uni Eropa"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7151/bidik-perluasan-pasar-ekspor-menko-airlangga-dorong-percepatan-implementasi-cepa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "jelang-penandatanganan-defa-kemendag-latih-aparatur-dagang",
  "category": "Global",
  "title": "Jelang Penandatanganan [DEFA], Kemendag Latih Aparatur Dagang",
  "deck": "Kemendag melatih 40 aparatur soal tata kelola perdagangan digital ASEAN menjelang rencana penandatanganan DEFA di KTT ASEAN November 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/jelang-penandatanganan-defa-kemendag-latih-aparatur-dagang.jpg",
  "imageV": "mv9oseob",
  "tags": [
   "DEFA",
   "ASEAN",
   "Kemendag",
   "perdagangan digital"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perkuat-kompetensi-aparatur-dalam-tata-kelola-perdagangan-digital-asean",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "sehari-jelang-tei-2026-buyer-dari-134-negara-terdaftar",
  "category": "Bisnis",
  "title": "Sehari Jelang TEI 2026, Buyer dari [134] Negara Terdaftar",
  "deck": "Kemendag meninjau kesiapan Trade Expo Indonesia ke-41 di ICE BSD, Tangerang, yang dibuka Rabu (14/10) dengan calon buyer dari 134 negara dan 1.873 perusahaan peserta.",
  "date": "13 Oktober 2026",
  "image": "assets/img/kemasan-produk-gudang.jpg",
  "tags": [
   "TEI 2026",
   "Kemendag",
   "ekspor",
   "pameran dagang"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/sehari-menuju-tei-2026-mendag-busan-indonesia-siap-sambut-buyer-dari-seluruh-dunia",
  "sourceLabel": "Kementerian Perdagangan"
 }
];
