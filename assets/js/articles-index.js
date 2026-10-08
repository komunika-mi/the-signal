// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "proyeksi-kapitalisasi-pasar-sema-bisa-tembus-rp2-triliun",
  "category": "Pasar Modal",
  "title": "Proyeksi Kapitalisasi Pasar [SEMA] Bisa Tembus Rp2 Triliun",
  "deck": "Analis memproyeksikan kapitalisasi pasar SEMA bisa tembus Rp2 triliun pada 2027, bersandar pada perannya sebagai pemasok perangkat data center CGK5 dan CGK7.",
  "date": "8 Oktober 2026",
  "image": "assets/img/proyeksi-kapitalisasi-pasar-sema-bisa-tembus-rp2-triliun.jpg",
  "imageV": "muzrdh2p",
  "tags": [
   "SEMA",
   "data center",
   "AI",
   "pasar modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471980-market-cap-sema-miliki-potensi-tembus-rp2-triliun"
 },
 {
  "slug": "untr-jelaskan-ke-bei-laba-anjlok-91-akibat-impairment-serd",
  "category": "Aksi Korporasi",
  "title": "UNTR jelaskan ke BEI laba [anjlok] 91% akibat impairment SERD",
  "deck": "United Tractors menanggapi permintaan penjelasan BEI atas laba semester I 2026 yang ambruk, impairment Rp2,75 triliun di proyek panas bumi SERD, dan kelanjutan buyback saham.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "United Tractors",
   "SERD",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/05443d3e55_d52a7798a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-peroleh-opini-kewajaran-atas-divestasi-saham-jmj",
  "category": "Aksi Korporasi",
  "title": "ADHI Peroleh Opini [Kewajaran] atas Divestasi Saham JMJ",
  "deck": "Penilai independen menyimpulkan harga divestasi 47,18% saham JMJ ke SMI senilai Rp1,77 triliun wajar, hanya selisih 1,75% dari nilai pasar.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "JMJ",
   "divestasi",
   "SMI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/061d45f8c0_da7ca0e6f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wajib-halal-berlaku-18-oktober-aturan-turunan-dikejar",
  "category": "Industri",
  "title": "Wajib Halal Berlaku 18 Oktober, Aturan Turunan [Dikejar]",
  "deck": "Kewajiban sertifikasi halal, termasuk untuk alat kesehatan risiko A, resmi berlaku 18 Oktober 2026, sementara aturan teknis penahapannya ditargetkan rampung 11 Oktober.",
  "date": "8 Oktober 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "Wajib Halal",
   "BPJPH",
   "Sertifikasi Halal",
   "Ekonomi Syariah"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7138/pemerintah-tegaskan-kesiapan-ekosistem-jelang-implementasi-wajib-halal-2026",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ekspor-perdana-baterai-listrik-dari-iwip-investasi-rp180-triliun",
  "category": "Energi",
  "title": "Ekspor Perdana Baterai Listrik dari IWIP, Investasi [Rp180 Triliun]",
  "deck": "Presiden Prabowo Subianto meresmikan ekspor perdana baterai kendaraan listrik dari kawasan industri IWIP di Maluku Utara, bersamaan dengan peluncuran 11 proyek hilirisasi senilai US$10,2 miliar.",
  "date": "8 Oktober 2026",
  "image": "assets/img/ekspor-perdana-baterai-listrik-dari-iwip-investasi-rp180-triliun.jpg",
  "imageV": "muzoh61e",
  "tags": [
   "Hilirisasi Nikel",
   "Baterai Listrik",
   "IWIP",
   "Investasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hilirisasi-kian-nyata-menko-bahlil-dampingi-presiden-lepas-ekspor-perdana-baterai-listrik",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "transaksi-emas-digital-fisik-melonjak-641-persen-di-2026",
  "category": "Pasar Modal",
  "title": "Transaksi Emas Digital Fisik [Melonjak] 641 Persen di 2026",
  "deck": "Kemendag membuka program literasi PBK tahunan, sekaligus merilis data transaksi berjangka komoditi dan lonjakan besar transaksi emas digital fisik.",
  "date": "8 Oktober 2026",
  "image": "assets/img/transaksi-emas-digital-fisik-melonjak-641-persen-di-2026.jpg",
  "imageV": "muzoh85q",
  "tags": [
   "Bappebti",
   "PBK",
   "emas digital",
   "literasi keuangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bulan-literasi-pbk-2026-mendag-busan-smart-traders-tidak-mudah-tergiur-janji",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pthk-hadapi-gugatan-pkpu-rp1-7-miliar-terkait-pamulang-square",
  "category": "Aksi Korporasi",
  "title": "PTHK Hadapi Gugatan [PKPU] Rp1,7 Miliar Terkait Pamulang Square",
  "deck": "PT Indoland Perkasa dan PT Tata Karya Sentosa menggugat PKPU Hutama Karya senilai Rp1,7 miliar soal service charge 51 kios di Pamulang Square. Hutama Karya membantah berutang.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTHK",
   "PKPU",
   "Hutama Karya",
   "sengketa hukum"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3009b7b390_50ab50eff0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koin-refloat-saham-nihil-kuartal-iii-sisa-10-62",
  "category": "Aksi Korporasi",
  "title": "KOIN: [Refloat] Saham Nihil Kuartal III, Sisa 10,62%",
  "deck": "KOIN melaporkan nihil realisasi refloat saham pada kuartal III 2026, dengan sisa 104,16 juta lembar atau 10,62% saham belum dilepas ke publik.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOIN",
   "refloat",
   "free float",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3fd21fd2d1_352efaa3d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tring-pegadaian-setahun-transaksi-tembus-rp113-triliun",
  "category": "BUMN",
  "title": "TRING! Pegadaian Setahun, Transaksi Tembus [Rp113 Triliun]",
  "deck": "Dalam setahun, aplikasi TRING! by Pegadaian mencatat 7,5 juta nasabah dan nilai transaksi Rp113 triliun, seiring konsolidasi layanan gadai dan emas digital ke satu platform.",
  "date": "8 Oktober 2026",
  "image": "assets/img/tring-pegadaian-setahun-transaksi-tembus-rp113-triliun.jpg",
  "imageV": "muzoh8o1",
  "tags": [
   "pegadaian",
   "tring",
   "emas digital",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471971-happy-tringversary-komitmen-pegadaian-berikan-kemudahan-solusi-finansial-dan-emas-terintegrasi-melalui-aplikasi-tring"
 },
 {
  "slug": "direksi-totl-saleh-tambah-430-000-saham",
  "category": "Aksi Korporasi",
  "title": "Direksi [TOTL] Saleh Tambah 430.000 Saham",
  "deck": "Direksi Total Bangun Persada, Saleh, membeli 430.000 saham TOTL seharga Rp1.470 per lembar pada 8 Oktober 2026, menambah kepemilikannya menjadi 5.798.800 lembar atau 0,17% hak suara.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "Total Bangun Persada",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-2960-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-revisi-laporan-dana-ipo-realisasi-capex-baru-67-6",
  "category": "Aksi Korporasi",
  "title": "PGEO Revisi Laporan Dana IPO, Realisasi [Capex] Baru 67,6%",
  "deck": "Pertamina Geothermal Energy mengoreksi laporan realisasi dana IPO per 30 Juni 2026: baru 67,6% dari Rp8,77 triliun terpakai, sisanya mengendap di deposito bank.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "penggunaan dana IPO",
   "capex",
   "Pertamina Geothermal Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c9ef62b3bb_868ccc0dec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-bsml-bahas-penjaminan-aset-besar-dan-ganti-komisaris",
  "category": "Aksi Korporasi",
  "title": "RUPSLB BSML Bahas [Penjaminan] Aset Besar dan Ganti Komisaris",
  "deck": "RUPSLB BSML pada 30 Oktober 2026 akan membahas penjaminan sebagian besar atau seluruh aset Perseroan, perubahan susunan komisaris, dan pergantian akuntan publik.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSML",
   "RUPSLB",
   "transaksi material",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/342368c189_2547156219.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-koreksi-laporan-dana-rights-issue-2015-sisa-rp203-m",
  "category": "Aksi Korporasi",
  "title": "ANTM Koreksi Laporan [Dana] Rights Issue 2015, Sisa Rp203 M",
  "deck": "ANTAM mengoreksi laporan realisasi dana rights issue 2015, menyisakan Rp203,29 miliar yang belum terpakai untuk modal kerja per 30 Juni 2026.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "rights issue",
   "penggunaan dana",
   "ANTAM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c31af9cdfb_1c51a7df4f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "blue-pastikan-tak-ada-info-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BLUE Pastikan Tak Ada Info Material soal [Volatilitas] Saham",
  "deck": "Merespons permintaan penjelasan Bursa Efek Indonesia atas lonjakan transaksi saham pada 30 September-5 Oktober 2026, BLUE menyatakan tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLUE",
   "volatilitas transaksi",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7bc551d465_b581b49f3e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bswd-jawab-bursa-aset-capai-rp6-99-triliun-per-september",
  "category": "Aksi Korporasi",
  "title": "BSWD Jawab Bursa, [Aset] Capai Rp6,99 Triliun per September",
  "deck": "Bank of India Indonesia menjelaskan ke BEI soal kondisi usahanya, dengan total aset Rp6,99 triliun, kredit Rp4,78 triliun, dan dana pihak ketiga Rp3,36 triliun per akhir September 2026.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "Bank of India Indonesia",
   "perbankan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f2bdb9adab_6535ac8a63.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-tetapkan-target-pertumbuhan-6-untuk-2027",
  "category": "Makroekonomi",
  "title": "Pemerintah Tetapkan Target Pertumbuhan [6%] untuk 2027",
  "deck": "Pemerintah menyasar pertumbuhan ekonomi 6 persen pada 2027, dengan syarat investasi tumbuh lebih cepat dari ekonomi, sebagai tahapan menuju target 8 persen jangka menengah.",
  "date": "8 Oktober 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "pertumbuhan ekonomi",
   "investasi",
   "hilirisasi",
   "kawasan industri"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7137/pemerintah-perkuat-kolaborasi-dengan-dunia-usaha-guna-mengakselerasi-pertumbuhan-ekonomi-2027",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "inet-ganti-wali-amanat-sukuk-rupsi-digelar-5-november",
  "category": "Aksi Korporasi",
  "title": "INET Ganti [Wali Amanat] Sukuk, RUPSI Digelar 5 November",
  "deck": "PT Sinergi Inti Andalan Prima Tbk (INET) menggelar RUPSI pada 5 November 2026 untuk menyetujui pergantian wali amanat Sukuk Ijarah dari Bank KB Indonesia ke CIMB Niaga.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "sukuk ijarah",
   "wali amanat",
   "RUPSI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/09df48b379_f39fafe901.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pbsa-lakukan-stock-split-saham-beredar-gandakan-jadi-6-miliar",
  "category": "Aksi Korporasi",
  "title": "PBSA Lakukan [Stock Split], Saham Beredar Gandakan Jadi 6 Miliar",
  "deck": "RUPSLB PBSA menyetujui pemecahan saham rasio 1:2, nilai nominal turun dari Rp50 menjadi Rp25 per lembar, efektif pekan ini.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PBSA",
   "stock split",
   "aksi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/159fea0b68_f71f6c5e01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ntbk-realisasikan-99-2-dana-ipo-rp65-99-miliar-per-juni-2026",
  "category": "Aksi Korporasi",
  "title": "NTBK Realisasikan 99,2% Dana [IPO] Rp65,99 Miliar per Juni 2026",
  "deck": "Dari dana IPO 2022 senilai Rp66,53 miliar bersih, PT Nusatama Berkah Tbk (NTBK) sudah merealisasikan Rp65,99 miliar hingga 30 Juni 2026, menyisakan Rp532,4 juta yang ditempatkan di giro bank.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NTBK",
   "IPO",
   "penggunaan dana",
   "POJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ba42d6cfb8_bded9ab9b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koci-realisasikan-rp1-65-juta-dana-waran-ke-ojk",
  "category": "Aksi Korporasi",
  "title": "KOCI Realisasikan Rp1,65 Juta Dana [Waran] ke OJK",
  "deck": "KOCI melaporkan ke OJK bahwa baru 12.251 dari 450 juta Waran Seri I yang dikonversi hingga akhir 2025, menghasilkan dana Rp1,65 juta yang seluruhnya sudah dipakai untuk modal kerja.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOCI",
   "Waran Seri I",
   "penggunaan dana IPO",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/50dde2ef6f_fa17fb7f70.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arii-komisaris-tambah-saham-30-juta-lembar-hak-suara-3-11",
  "category": "Aksi Korporasi",
  "title": "ARII: Komisaris [Tambah] Saham 30 Juta Lembar, Hak Suara 3,11%",
  "deck": "Komisaris Atlas Resources, Jay T Oentoro, membeli 30 juta saham ARII seharga Rp273 per saham, menaikkan hak suaranya dari 2,31 persen jadi 3,11 persen.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARII",
   "Atlas Resources",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-9209-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coin-revisi-laporan-dana-ipo-sisa-rp157-m-di-deposito-bank-jtrust",
  "category": "Aksi Korporasi",
  "title": "COIN Revisi Laporan Dana IPO, Sisa Rp157 M di [Deposito] Bank JTrust",
  "deck": "COIN mengoreksi laporan dana IPO: dari Rp207 miliar dana bersih, baru Rp49,99 miliar dicairkan untuk CFX dan ICC, sisa Rp157 miliar mengendap di deposito Bank JTrust.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COIN",
   "IPO",
   "penggunaan dana",
   "bursa kripto"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ec7c381c07_6739c552fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "blta-bantah-kabar-aksi-korporasi-dan-investasi-klarifikasi",
  "category": "Aksi Korporasi",
  "title": "BLTA Bantah Kabar Aksi Korporasi dan Investasi [Klarifikasi]",
  "deck": "Berlian Laju Tanker Tbk menegaskan kabar yang beredar di media soal rencana aksi korporasi dan investasi strategis bukan berasal dari perseroan.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTA",
   "Berlian Laju Tanker",
   "klarifikasi",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1ea8ac22b7_3c7864797c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcic-komisaris-independen-benny-siswanto-mundur",
  "category": "Aksi Korporasi",
  "title": "BCIC: Komisaris Independen Benny Siswanto [Mundur]",
  "deck": "Benny Siswanto mundur sebagai Komisaris Independen JTrust Indonesia saat OJK mendesak reorganisasi bank menyusul kerugian setahun terakhir.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCIC",
   "JTrust Indonesia",
   "Komisaris Independen",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/08efbc6615_5b9a4a1dbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "maha-kantongi-kontrak-hauling-batu-bara-rp2-2-triliun-hingga-2030",
  "category": "Aksi Korporasi",
  "title": "MAHA kantongi kontrak [hauling] batu bara Rp2,2 triliun hingga 2030",
  "deck": "MAHA menandatangani kontrak jasa pengangkutan batu bara dengan PT Ade Putra Tanrajeng, anak usaha PT Kutai Bara Nusantara, bernilai hingga Rp2,2 triliun dan berlaku sampai 2030.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAHA",
   "kontrak batu bara",
   "hauling",
   "pertambangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/600af192f0_7795541c79.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ltls-siapkan-dana-rp135-miliar-lunasi-obligasi-seri-b",
  "category": "Aksi Korporasi",
  "title": "LTLS Siapkan Dana Rp135 Miliar Lunasi [Obligasi] Seri B",
  "deck": "Lautan Luas (LTLS) menyatakan dana Rp135 miliar sudah siap untuk melunasi obligasi yang jatuh tempo 12 November 2026.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LTLS",
   "obligasi",
   "Lautan Luas",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1a7cf74a71_ec73391c27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-low-tuck-kwong-lepas-saham-hak-suara-anjlok-ke-9-95",
  "category": "Aksi Korporasi",
  "title": "BYAN: Low Tuck Kwong Lepas Saham, Hak Suara Anjlok ke [9,95%]",
  "deck": "Direktur Utama Bayan Resources melepas 10,07 miliar saham senilai sekitar Rp26 triliun, hak suaranya turun dari 40,15% menjadi 9,95%.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Low Tuck Kwong",
   "kepemilikan saham",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-8698-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-tambah-saham-lewat-repo-suara-ke-34-70",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah Saham Lewat [Repo], Suara ke 34,70%",
  "deck": "Samuel Sekuritas Indonesia selaku direksi NSSS menambah 22,4 juta saham lewat transaksi repo pada 6 Oktober, hak suaranya naik dari 34,60% menjadi 34,70%.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-2774-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tldn-koreksi-realisasi-dana-ipo-rp40-m-dialihkan-ke-cdm",
  "category": "Aksi Korporasi",
  "title": "TLDN Koreksi Realisasi Dana IPO, Rp40 M [Dialihkan] ke CDM",
  "deck": "Teladan Prima Agro mengoreksi laporan realisasi dana IPO: dana Rp40 miliar yang semula untuk pembangkit biogas PT Daya Lestari ternyata disetorkan ke PT Cipta Davia Mandiri.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLDN",
   "Pasar Modal",
   "Realisasi Dana IPO",
   "Cipta Davia Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5d59cb1ea7_53828b4062.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-pefindo-tahan-peringkat-idb-outlook-negatif-setahun",
  "category": "Aksi Korporasi",
  "title": "WSKT: PEFINDO Tahan Peringkat idB, Outlook [Negatif] Setahun",
  "deck": "PEFINDO mempertahankan peringkat idB untuk Waskita Karya periode 1 Oktober 2026-2027 dengan outlook negatif, sementara obligasi dan sukuk bergaransi pemerintah tetap idAAA.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "PEFINDO",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3ef66a3ce5_ba3152d80a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bumi-koreksi-laporan-dana-obligasi-rp906-miliar-belum-terpakai",
  "category": "Aksi Korporasi",
  "title": "BUMI Koreksi Laporan Dana Obligasi, [Rp906 Miliar] Belum Terpakai",
  "deck": "BUMI mengoreksi laporan realisasi dana empat tahap obligasi senilai Rp3,95 triliun; Rp905,88 miliar belum terpakai, menanti akuisisi Laman Mining dan pelunasan pinjaman ke Indies.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUMI",
   "obligasi",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c12f106ac3_eb682784aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-elaine-low-lepas-16-6-juta-saham-bayan-resources",
  "category": "Aksi Korporasi",
  "title": "BYAN: Elaine Low [Lepas] 16,6 Juta Saham Bayan Resources",
  "deck": "Elaine Low melepas 16.666.667 saham Bayan Resources pada 7 Oktober 2026 di harga Rp2.588 per saham untuk divestasi, menurunkan hak suaranya dari 22,10% jadi 22,05%.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "kepemilikan saham",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-6571-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-elaine-low-tambah-33-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "BYAN: Elaine Low [Tambah] 33,3 Juta Saham",
  "deck": "Elaine Low menambah 33,33 juta saham BYAN lewat pembelian tidak langsung, menaikkan hak suaranya dari 22,00% menjadi 22,10%.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "kepemilikan saham",
   "Bayan Resources",
   "Elaine Low"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-7889-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-rencana-akuisisi-ruby-mining-tertunda-direksi-berganti",
  "category": "Aksi Korporasi",
  "title": "KDTN: Rencana Akuisisi Ruby Mining Tertunda, [Direksi] Berganti",
  "deck": "Ruby Mining (Hong Kong) Limited menunda akuisisi PT Puri Sentul Permai Tbk tanpa batas waktu baru, pemegang saham pengendali ganti direksi lewat RUPSLB.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "akuisisi",
   "RUPSLB",
   "Ruby Mining"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/aadbda3000_2247002136.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bolt-pengendali-tambah-kepemilikan-ke-66-5-persen",
  "category": "Aksi Korporasi",
  "title": "BOLT: Pengendali [Tambah] Kepemilikan ke 66,5 Persen",
  "deck": "Garuda Multi Investama, pemegang saham pengendali Garuda Metalindo (BOLT), menambah 62,5 juta lembar saham seharga Rp800 per saham, mengerek hak suaranya dari 63,83 persen menjadi 66,50 persen.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLT",
   "Garuda Metalindo",
   "kepemilikan saham",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-5726-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-paparkan-defisiensi-modal-as-34-2-juta-dalam-public-expose",
  "category": "Aksi Korporasi",
  "title": "CANI Paparkan Defisiensi Modal [AS$34,2 Juta] dalam Public Expose",
  "deck": "Materi public expose insidentil CANI merinci defisiensi modal AS$34,2 juta dan rencana konversi utang pihak berelasi AS$36,6 juta menjadi ekuitas, menyusul opini disclaimer auditor atas laporan keuangan 2025.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "disclaimer opinion",
   "public expose",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b00556aa47_c7b6f6b901.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pefindo-pertahankan-rating-ida-toba-outlook-stabil",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Pertahankan Rating [idA] TOBA, Outlook Stabil",
  "deck": "PEFINDO menegaskan peringkat idA dengan outlook stabil untuk TOBA dan tujuh seri obligasinya senilai total Rp875 miliar, berlaku 5 Oktober 2026 sampai 1 Oktober 2027.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "PEFINDO",
   "peringkat kredit",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5ae4deb50e_54b9e9a6b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-edwin-soeryadjaya-beli-325-000-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "SRTG: Edwin Soeryadjaya Beli [325.000] Saham Lagi",
  "deck": "Komisaris SRTG Edwin Soeryadjaya membeli 325.000 saham tambahan pada 6-7 Oktober 2026, menaikkan hak suaranya menjadi 35,9804 persen.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "Edwin Soeryadjaya",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-5406-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-panggil-rupslb-kedua-untuk-setujui-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "BIPP Panggil RUPSLB Kedua untuk Setujui [PMTHMETD]",
  "deck": "Rapat pertama 25 September gagal kuorum, BIPP memanggil pemegang saham independen hadir lagi 16 Oktober untuk menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "RUPSLB",
   "PMTHMETD",
   "Penambahan Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/baed3462f0_817507f49f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buah-bagikan-dividen-interim-rp20-miliar-rp10-saham",
  "category": "Aksi Korporasi",
  "title": "BUAH Bagikan [Dividen] Interim Rp20 Miliar, Rp10/Saham",
  "deck": "Direksi dan Dewan Komisaris Segar Kumala Indonesia menyetujui dividen interim tunai Rp20 miliar atau Rp10 per saham, dibayar 6 November 2026.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUAH",
   "dividen interim",
   "Segar Kumala Indonesia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cd9589366f_5e0dde1c08.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-furnitur-ri-capai-us-1-2-miliar-jelang-tei-ke-41",
  "category": "Industri",
  "title": "Ekspor Furnitur RI Capai [US$1,2 Miliar] Jelang TEI ke-41",
  "deck": "Furnitur dan kriya kembali jadi sorotan di Trade Expo Indonesia ke-41, didukung ekspor furnitur nasional yang sudah tembus US$1,2 miliar sepanjang 2026.",
  "date": "8 Oktober 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "TEI ke-41",
   "furnitur",
   "ekspor",
   "kriya"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bersertifikat-hijau-dan-terkurasi-furnitur-dan-kriya-berdaya-saing-tinggi-siap-tampil-di-tei-ke-41",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "army-gelar-rupslb-rombak-direksi-imbas-laporan-keuangan-mandek",
  "category": "Aksi Korporasi",
  "title": "ARMY Gelar RUPSLB, Rombak [Direksi] Imbas Laporan Keuangan Mandek",
  "deck": "RUPSLB ARMY pada 30 Oktober 2026 akan membahas pergantian direksi dan komisaris serta perpanjangan waktu audit laporan keuangan 2021 dan 2022 yang sudah tertunda lebih dari empat tahun.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARMY",
   "RUPSLB",
   "Armidian Karyatama",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/865c96c985_2b0d8568ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-resmikan-konversi-utang-ke-hsbc-saham-terdilusi-5-79",
  "category": "Aksi Korporasi",
  "title": "APEX Resmikan Konversi Utang ke HSBC, Saham [Terdilusi] 5,79%",
  "deck": "RUPSLB menyetujui konversi utang Apexindo ke HSBC, 218 juta saham seri B baru akan tercatat di bursa pada 20 Oktober 2026.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "konversi utang",
   "HSBC",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fe8c2bba23_e12225ae04.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-teken-mou-dagang-digital-dan-ai-dengan-tiongkok",
  "category": "Global",
  "title": "Indonesia Teken [MoU] Dagang Digital dan AI dengan Tiongkok",
  "deck": "Indonesia tampil sebagai negara kehormatan di Global Digital Trade Expo 2025 Hangzhou dan menjaring sejumlah MoU dagang digital serta kerja sama AI dengan Tiongkok.",
  "date": "8 Oktober 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "Perdagangan Digital",
   "Kecerdasan Buatan",
   "Tiongkok",
   "Kawasan Ekonomi Khusus"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7136/indonesia-perkuat-kerja-sama-perdagangan-digital-dan-kawasan-ekonomi-khusus-pada-global-digital-trade-expo-ke-5",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "keyakinan-konsumen-tetap-optimis-kondisi-kini-melambat",
  "category": "Makroekonomi",
  "title": "Keyakinan Konsumen Tetap [Optimis], Kondisi Kini Melambat",
  "deck": "Survei Bank Indonesia September 2026 mencatat Indeks Keyakinan Konsumen tetap optimis di 118,1, meski penilaian atas kondisi ekonomi saat ini justru melemah dari bulan sebelumnya.",
  "date": "8 Oktober 2026",
  "image": "assets/img/keyakinan-konsumen-tetap-optimis-kondisi-kini-melambat.jpg",
  "imageV": "muz59llc",
  "tags": [
   "Bank Indonesia",
   "Survei Konsumen",
   "Keyakinan Konsumen",
   "Ekonomi Indonesia"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "crab-koreksi-laporan-dana-ipo-kapal-baru-terpakai-rp650-juta",
  "category": "Aksi Korporasi",
  "title": "CRAB koreksi laporan dana IPO, [kapal] baru terpakai Rp650 juta",
  "deck": "Toba Surimi Industries (CRAB) mengoreksi laporan realisasi dana IPO per 30 Juni 2026; modal kerja terserap penuh, tapi dana kapal laut baru terpakai Rp650 juta dari rencana Rp3,12 miliar.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "Toba Surimi Industries",
   "penggunaan dana IPO",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/115b5f3161_3e4bef3d40.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bali-harga-saham-melonjak-24-8-tanpa-faktor-fundamental-baru",
  "category": "Aksi Korporasi",
  "title": "BALI: Harga Saham Melonjak 24,8%, Tanpa Faktor [Fundamental] Baru",
  "deck": "Saham BALI ditutup naik 24,8% ke Rp1.660 pada 5 Oktober dengan volume tipis. BEI minta penjelasan, dan pemegang saham pengendali disebut sudah menambah kepemilikan sejak September.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BALI",
   "volatilitas saham",
   "Kharisma Cipta Towerindo",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/be0b6e242e_f28f5ab6a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-tambah-bersih-48-4-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi [Tambah] Bersih 48,4 Juta Saham Lewat Repo",
  "deck": "Samuel Sekuritas Indonesia, pelapor berstatus direksi FILM, mencatat penambahan bersih 48,4 juta saham lewat dua transaksi repo pada 6 Oktober 2026, hak suara naik dari 9,19% jadi 9,64%.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-8503-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-free-float-turun-ke-14-82-di-bawah-batas-15",
  "category": "Aksi Korporasi",
  "title": "TRUK: Free Float Turun ke [14,82%], di Bawah Batas 15%",
  "deck": "Guna Timur Raya menjawab permintaan penjelasan bursa soal kinerja keuangan dan dampak tender saham oleh PT Pukul Rata Kanan terhadap porsi saham publik.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "tender offer",
   "free float",
   "Guna Timur Raya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3000342222_560c4f96aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trja-direksi-beli-18-100-saham-transkon-jaya-rp117",
  "category": "Aksi Korporasi",
  "title": "[TRJA] Direksi Beli 18.100 Saham Transkon Jaya Rp117",
  "deck": "Direktur R Hesthi Sambodo menambah 18.100 saham TRJA pada 28 September 2026 seharga Rp117 per saham, kepemilikannya naik ke 471.900 lembar meski hak suaranya tetap 0,03 persen.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRJA",
   "Transkon Jaya",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08102026-9164-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menko-bahlil-kaji-moratorium-ekspor-produk-nikel",
  "category": "Energi",
  "title": "Menko Bahlil Kaji [Moratorium] Ekspor Produk Nikel",
  "deck": "Menko Bahlil Lahadalia memaparkan rencana Kemenko Hilirisasi, termasuk kajian moratorium ekspor produk setengah jadi dan mandat etanol 20 persen pada 2027-2028.",
  "date": "8 Oktober 2026",
  "image": "assets/img/menko-bahlil-kaji-moratorium-ekspor-produk-nikel.jpg",
  "imageV": "muyyo8gn",
  "tags": [
   "hilirisasi",
   "nikel",
   "transisi energi",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pidato-perdana-menko-bahlil-petakan-peran-kemenko-hilirisasi-sinkronkan-kebijakan-hingga-kaji-moratorium",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "fapa-jadwalkan-rupslb-16-november-simak-batas-usul-agenda",
  "category": "Aksi Korporasi",
  "title": "FAPA Jadwalkan [RUPSLB] 16 November, Simak Batas Usul Agenda",
  "deck": "PT FAP Agri Tbk akan menggelar RUPSLB pada 16 November 2026. Pemegang saham yang tercatat per 22 Oktober 2026 berhak hadir.",
  "date": "8 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAPA",
   "RUPSLB",
   "Pemegang Saham",
   "Rapat Umum Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fe410f6e2b_cb13e6545d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpix-madura-prima-divestasi-27-5-juta-saham-hak-suara-58-24",
  "category": "Aksi Korporasi",
  "title": "MPIX: Madura Prima [Divestasi] 27,5 Juta Saham, Hak Suara 58,24%",
  "deck": "Madura Prima Investama melepas 27,5 juta saham MPIX pada 5 Oktober 2026 seharga Rp75 per saham, hak suaranya turun dari 59,99% menjadi 58,24%.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPIX",
   "kepemilikan saham",
   "divestasi",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-7424-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beks-dana-it-rp215-m-baru-18-terealisasi-sisa-di-fasbi",
  "category": "Aksi Korporasi",
  "title": "BEKS: Dana IT Rp215 M Baru [18%] Terealisasi, Sisa di FASBI",
  "deck": "Bank Banten baru merealisasikan 18,5 persen dari Rp215,1 miliar dana rights issue 2021 untuk perbaikan IT, sisa Rp175,3 miliar mengendap di FASBI.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEKS",
   "rights issue",
   "penggunaan dana",
   "Bank Banten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/faad5d6a30_645a602d98.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beks-rilis-koreksi-laporan-dana-rights-issue-rp1-87-triliun",
  "category": "Aksi Korporasi",
  "title": "BEKS Rilis [Koreksi] Laporan Dana Rights Issue Rp1,87 Triliun",
  "deck": "Bank Banten mengoreksi laporan realisasi dana rights issue 2020 senilai Rp1,87 triliun; porsi untuk pengembangan TI tercatat jauh di bawah rencana awal.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEKS",
   "Bank Banten",
   "rights issue",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3a813bb8db_c84661a35b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "potensi-transaksi-ip-kreatif-di-jfc-2026-naik-ke-rp3-51-miliar",
  "category": "Industri",
  "title": "Potensi Transaksi IP Kreatif di JFC 2026 Naik ke [Rp3,51 Miliar]",
  "deck": "Kemendag memfasilitasi 38 pelaku komik, animasi, dan gim di JFC 2026, dengan potensi transaksi US$195 ribu, naik 56,8 persen dari tahun sebelumnya.",
  "date": "7 Oktober 2026",
  "image": "assets/img/potensi-transaksi-ip-kreatif-di-jfc-2026-naik-ke-rp3-51-miliar.jpg",
  "imageV": "muya3xdo",
  "tags": [
   "Kemendag",
   "ekspor kreatif",
   "JFC 2026",
   "industri kreatif"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-bawa-ip-kreatif-ke-jfc-2026-potensi-transaksi-capai-rp351-miliar",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "cmry-koreksi-laporan-dana-ipo-suntikan-ke-macrosentra-nihil",
  "category": "Aksi Korporasi",
  "title": "CMRY Koreksi Laporan Dana IPO, Suntikan ke [Macrosentra] Nihil",
  "deck": "Cisarua Mountain Dairy mengoreksi laporan realisasi dana IPO per 30 Juni 2026: suntikan modal Rp713,9 miliar ke anak usaha Macrosentra Niagaboga masih nol rupiah.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "Cisarua Mountain Dairy",
   "IPO",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/200b5f8a0b_22e43f62aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-dapat-pinjaman-rp16-3-miliar-dari-aic-untuk-proyek-wte-bogor",
  "category": "Aksi Korporasi",
  "title": "SOFA dapat [pinjaman] Rp16,3 miliar dari AIC untuk proyek WTE Bogor",
  "deck": "AEA, anak usaha SOFA, meminjam Rp16,3 miliar dari pengendali SOFA, AIC, berbunga 1 persen setahun untuk menutup setoran modal proyek WTE di Bogor.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "transaksi afiliasi",
   "transaksi material",
   "waste-to-energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a658ba4fb2_03fdd96abb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-gelar-rups-tiga-tahun-sekaligus-saham-masih-suspensi",
  "category": "Aksi Korporasi",
  "title": "BOSS Gelar RUPS Tiga Tahun Sekaligus, Saham Masih [Suspensi]",
  "deck": "BOSS memanggil RUPS Tahunan untuk tiga tahun buku tertunda sekaligus pada 29 Oktober 2026, di tengah dua tahun tanpa penjualan dan anak usaha yang masih pailit.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS",
   "suspensi saham",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/72a45928e0_0d666d35ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-terbitkan-orange-bond-rp2-59-t-oversubscribed",
  "category": "Pasar Modal",
  "title": "PNM Terbitkan Orange Bond Rp2,59 T, [Oversubscribed]",
  "deck": "PNM menerbitkan Orange Bond dan Orange Sukuk senilai Rp2,59 triliun, oversubscribed 1,73 kali, untuk memperkuat pembiayaan usaha ultra mikro perempuan lewat program Mekaar.",
  "date": "7 Oktober 2026",
  "image": "assets/img/pnm-terbitkan-orange-bond-rp2-59-t-oversubscribed.jpg",
  "imageV": "muya3xuz",
  "tags": [
   "PNM",
   "Orange Bond",
   "Mekaar",
   "ultra mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471796-pnm-kembali-terbitkan-orange-bond-dan-orange-sukuk-rp259-triliun-perkuat-pembiayaan-dan-pemberdayaan-perempuan-ultra-mikro"
 },
 {
  "slug": "adhi-lepas-saham-jmj-ke-smi-nilai-divestasi-rp1-77-triliun",
  "category": "Aksi Korporasi",
  "title": "ADHI Lepas Saham JMJ ke SMI, Nilai [Divestasi] Rp1,77 Triliun",
  "deck": "ADHI menjual seluruh 47,18% sahamnya di PT Jasamarga Jogja Solo kepada SMI senilai Rp1,77 triliun, ditargetkan tuntas akhir November 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "divestasi",
   "JMJ",
   "SMI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d8488cb080_7d2c890e4f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-alihkan-rp378-7-miliar-dana-right-issue-ke-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "ADHI Alihkan Rp378,7 Miliar Dana Right Issue ke [Modal Kerja]",
  "deck": "Perseroan mengalihkan sisa dana rights issue 2022 senilai Rp378,69 miliar dari setoran modal ke anak usaha tol menjadi modal kerja, menyusul kebijakan perampingan BUMN.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "Adhi Karya",
   "rights issue",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d3be825714_e6265fe1ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdka-pefindo-pertahankan-rating-ida-utang-turun-tajam",
  "category": "Aksi Korporasi",
  "title": "MDKA: PEFINDO Pertahankan Rating [idA+], Utang Turun Tajam",
  "deck": "PEFINDO menegaskan peringkat idA+ stabil untuk MDKA dan tujuh seri obligasinya, didukung rasio utang yang turun tajam dan laba bersih yang kembali positif.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKA",
   "PEFINDO",
   "obligasi korporasi",
   "rating kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/512f06aec8_a4291861aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bswd-catat-laba-rp70-9-miliar-ldr-naik-ke-144",
  "category": "Aksi Korporasi",
  "title": "BSWD Catat Laba Rp70,9 Miliar, [LDR] Naik ke 144%",
  "deck": "Materi public expose insidental BSWD memuat laba bersih Agustus 2026 naik 75 persen YoY, rasio kredit terhadap dana pihak ketiga melonjak ke 144 persen, dan tenggat free float 31 Maret 2029.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "perbankan",
   "public expose",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fc859da7b3_d28c3cd16f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-jadwalkan-rupslb-13-november-rekam-saham-21-oktober",
  "category": "Aksi Korporasi",
  "title": "ADHI Jadwalkan [RUPSLB] 13 November, Rekam Saham 21 Oktober",
  "deck": "PT Adhi Karya menjadwalkan RUPSLB pada 13 November 2026, dengan tanggal pencatatan pemegang saham 21 Oktober dan agenda resmi baru diumumkan 22 Oktober.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "RUPSLB",
   "Adhi Karya",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0bbe314efb_4b3433f751.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vici-panggil-rupslb-tiga-komisaris-mundur",
  "category": "Aksi Korporasi",
  "title": "VICI panggil RUPSLB, tiga [komisaris] mundur",
  "deck": "RUPSLB VICI digelar 29 Oktober 2026 membahas pengunduran tiga komisaris sekaligus perubahan anggaran dasar soal bidang usaha dan kewenangan direksi.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "RUPSLB",
   "Dewan Komisaris",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/143e9a66ca_4190505bc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-pakai-dana-obligasi-rp2-15-triliun-untuk-bayar-utang",
  "category": "Aksi Korporasi",
  "title": "ENRG Pakai Dana Obligasi Rp2,15 Triliun untuk [Bayar Utang]",
  "deck": "Energi Mega Persada melaporkan realisasi dana tiga tahap obligasi senilai total Rp2,15 triliun, sebagian besar dipakai membayar utang lama lewat anak usaha.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "Energi Mega Persada",
   "obligasi",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b28f387bfb_09770e0f4e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "chek-koreksi-laporan-realisasi-dana-ipo-76-6-persen",
  "category": "Aksi Korporasi",
  "title": "CHEK Koreksi Laporan, [Realisasi] Dana IPO 76,6 Persen",
  "deck": "PT Diastika Biotekindo Tbk mengoreksi laporan penggunaan dana IPO per Juni 2026 setelah ditegur OJK. Dari Rp106,80 miliar dana bersih, Rp81,76 miliar sudah terpakai, sisanya diparkir di deposito.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CHEK",
   "IPO",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5923d0fadc_b087a10366.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-jadwalkan-rupslb-13-november-simak-tanggal-pentingnya",
  "category": "Aksi Korporasi",
  "title": "ADCP Jadwalkan [RUPSLB] 13 November, Simak Tanggal Pentingnya",
  "deck": "Adhi Commuter Properti akan menggelar RUPSLB pada 13 November 2026, dengan pemegang saham per 21 Oktober 2026 yang berhak hadir atau memberi kuasa.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "RUPSLB",
   "Adhi Commuter Properti",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9d2068bb9a_d678f583ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mutu-koreksi-laporan-dana-ipo-realokasi-capex-ke-opex",
  "category": "Aksi Korporasi",
  "title": "MUTU Koreksi Laporan Dana IPO, [Realokasi] Capex ke Opex",
  "deck": "Mutuagung Lestari mengoreksi laporan realisasi dana IPO per 30 Juni 2026: seluruh dana Rp97,26 miliar sudah terpakai, dengan Rp20,5 miliar bergeser dari rencana bangunan ke beban operasional.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MUTU",
   "realisasi dana IPO",
   "RUPSLB",
   "capex opex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fe64251bc2_3983caaf44.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beks-jelaskan-lonjakan-transaksi-usai-saham-naik-31-8",
  "category": "Aksi Korporasi",
  "title": "BEKS Jelaskan [Lonjakan] Transaksi Usai Saham Naik 31,8%",
  "deck": "Bank Banten (BEKS) menyatakan tak ada informasi material di balik lonjakan volume dan harga sahamnya pada 28 September 2026, menyusul permintaan penjelasan dari BEI.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEKS",
   "Bank Banten",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a9aa68556f_04c3679d27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wins-jamin-utang-anak-usaha-ke-bank-mandiri-us-6-64-juta",
  "category": "Aksi Korporasi",
  "title": "WINS Jamin [Utang] Anak Usaha ke Bank Mandiri US$6,64 Juta",
  "deck": "WINS memberi jaminan perusahaan maksimal US$6,64 juta untuk memuluskan refinancing kapal dan modal kerja anak usahanya, PT Wintermar, lewat fasilitas Bank Mandiri.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINS",
   "jaminan perusahaan",
   "Bank Mandiri",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/de5c402f1b_4577b30194.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-sarana-meditama-tambah-saham-hak-suara-ke-34-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "JECX: Sarana Meditama Tambah Saham, Hak Suara ke 34% [Kepemilikan]",
  "deck": "PT Sarana Meditama Metropolitan membeli 449.300 lembar saham JECX pada 5 Oktober 2026, mengangkat hak suaranya dari 33,98 persen menjadi 34,00 persen.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Sarana Meditama Metropolitan",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-2954-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iiff-tuntas-salurkan-dana-obligasi-rp428-95-miliar-ke-3-proyek",
  "category": "Aksi Korporasi",
  "title": "IIFF Tuntas Salurkan Dana Obligasi [Rp428,95 Miliar] ke 3 Proyek",
  "deck": "IIFF melaporkan dana bersih Rp428,95 miliar dari Obligasi Berkelanjutan III Tahap I 2026 sudah disalurkan penuh ke pembangkit listrik di Garut, sistem pemantauan armada, dan rumah sakit di Bogor.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIFF",
   "Obligasi",
   "LRPD",
   "infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/362e19674f_94b226ba19.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-syarat-dua-waran-amrt-usai-dividen-interim",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Syarat] Dua Waran AMRT Usai Dividen Interim",
  "deck": "Maybank Sekuritas mengubah harga pelaksanaan dan rasio konversi waran AMRTZPCZ6A dan AMRTZPCK7A menyusul dividen interim AMRT Rp14,5 per saham, efektif 14 Oktober 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "AMRT",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/02c2ec40e5_86c84729e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbyb-jadwalkan-rupslb-perubahan-pengurus-29-oktober",
  "category": "Aksi Korporasi",
  "title": "BBYB Jadwalkan RUPSLB [Perubahan Pengurus] 29 Oktober",
  "deck": "Bank Neo Commerce memanggil RUPSLB pada 29 Oktober 2026 dengan agenda tunggal mengubah susunan pengurus, menyusul pengunduran diri Dirut Eri Budiono awal Oktober.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBYB",
   "RUPSLB",
   "Bank Neo Commerce",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cf945896ce_4f5ba8721c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iiff-tuntas-salurkan-dana-obligasi-perpetual-rp215-2-miliar",
  "category": "Aksi Korporasi",
  "title": "IIFF Tuntas Salurkan Dana [Obligasi Perpetual] Rp215,2 Miliar",
  "deck": "IIFF melaporkan ke BEI bahwa seluruh dana bersih Rp215,25 miliar dari penerbitan surat berharga perpetual tahap I 2026 telah disalurkan untuk membiayai proyek infrastruktur telekomunikasi.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIFF",
   "surat berharga perpetual",
   "penggunaan dana",
   "infrastruktur telekomunikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6cf1602510_0d14788ba4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plin-bagikan-dividen-interim-rp76-per-saham-cair-27-oktober",
  "category": "Aksi Korporasi",
  "title": "PLIN Bagikan [Dividen] Interim Rp76 per Saham, Cair 27 Oktober",
  "deck": "Plaza Indonesia Realty membagikan dividen tunai interim Rp268,7 miliar atau Rp76 per saham, dengan pembayaran dijadwalkan 27 Oktober 2026 setelah recording date 19 Oktober 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLIN",
   "dividen",
   "Plaza Indonesia Realty",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e17e784f19_cfa3b6cfd2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direktur-jual-saham-tipis-hak-suara-tak-berubah",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direktur Jual Saham Tipis, [Hak Suara] Tak Berubah",
  "deck": "Direktur CYBR, Doni Mora, menjual 11.500 lembar saham ITSEC Asia pada 6 Oktober 2026, setara 0,27 persen dari kepemilikannya; hak suaranya tetap 0,032 persen.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "transaksi direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-9536-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-ajak-pengusaha-as-jadi-pembeli-di-tei-2026",
  "category": "Global",
  "title": "Indonesia Ajak Pengusaha AS Jadi [Pembeli] di TEI 2026",
  "deck": "Mendag Busan mengundang pengusaha AS menjadi pembeli di Trade Expo Indonesia 2026, sembari membahas keluhan sertifikasi halal dan nasib perjanjian dagang ART dengan AmCham Indonesia.",
  "date": "7 Oktober 2026",
  "image": "assets/img/indonesia-ajak-pengusaha-as-jadi-pembeli-di-tei-2026.jpg",
  "imageV": "muxv0max",
  "tags": [
   "TEI 2026",
   "Kemendag",
   "Amerika Serikat",
   "ART"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-ajak-pengusaha-as-jadi-buyer-di-tei-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "flmc-tegaskan-tak-ada-informasi-baru-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "FLMC Tegaskan Tak Ada Informasi Baru di Balik [Volatilitas] Saham",
  "deck": "Merespons permintaan BEI soal gejolak harga sahamnya, Falmaco Nonwoven Industri (FLMC) menyatakan tidak ada fakta material baru, kecuali rencana penyesuaian kode klasifikasi usaha.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "volatilitas transaksi",
   "Bursa Efek Indonesia",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1fd196cefd_b77b78f24f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lckm-pemegang-saham-hilang-piutang-macet-uang-muka-mandek",
  "category": "Aksi Korporasi",
  "title": "LCKM: Pemegang Saham [Hilang], Piutang Macet, Uang Muka Mandek",
  "deck": "LCK Global Kedaton menjawab pertanyaan Bursa soal hilangnya pemegang saham PT Maju Mekar, uang muka proyek Rp105 miliar yang mandek, dan pendapatan yang bertumpu pada satu pelanggan baru.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LCKM",
   "uang muka proyek",
   "piutang usaha",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/41abbe612b_9e6f2e77d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dkft-jinsheng-mining-tambah-saham-kendali-ke-65-74",
  "category": "Aksi Korporasi",
  "title": "DKFT: Jinsheng Mining Tambah Saham, Kendali ke [65,74%]",
  "deck": "PT Jinsheng Mining, pemegang saham mayoritas Central Omega Resources (DKFT), membeli 110 juta saham tambahan senilai Rp77 miliar, menaikkan hak suaranya menjadi 65,74 persen.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DKFT",
   "Central Omega Resources",
   "Jinsheng Mining",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-2149-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inaf-panggil-rupslb-ubah-susunan-pengurus",
  "category": "Aksi Korporasi",
  "title": "INAF Panggil RUPSLB Ubah Susunan [Pengurus]",
  "deck": "Indofarma memanggil RUPSLB pada 29 Oktober 2026 dengan agenda tunggal perubahan susunan direksi dan/atau komisaris, calonnya ditentukan pemegang Saham Seri A Dwiwarna.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INAF",
   "RUPSLB",
   "Indofarma",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7fb1cfb14f_0cc990a00a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-low-tuck-kwong-lepas-33-3-juta-saham-divestasi",
  "category": "Aksi Korporasi",
  "title": "BYAN: Low Tuck Kwong Lepas 33,3 Juta Saham [Divestasi]",
  "deck": "Direktur Bayan Resources Low Tuck Kwong melepas 33,3 juta saham secara tidak langsung senilai Rp11.025 per saham untuk divestasi, hak suaranya turun jadi 40,15 persen.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "Low Tuck Kwong",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-6499-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atic-direktur-beli-40-000-saham-senilai-rp17-54-juta",
  "category": "Aksi Korporasi",
  "title": "ATIC: Direktur [Beli] 40.000 Saham Senilai Rp17,54 Juta",
  "deck": "Direktur ATIC Harry Surjanto Hambali membeli 40.000 saham perusahaan senilai sekitar Rp17,54 juta, hak suaranya naik tipis dari 3,17% menjadi 3,18%.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATIC",
   "insider trading",
   "direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-3011-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waran-amrthdch7a-disesuaikan-kgi-usai-dividen-amrt-efektif-14-okt",
  "category": "Aksi Korporasi",
  "title": "Waran [AMRTHDCH7A] Disesuaikan KGI Usai Dividen AMRT, Efektif 14 Okt",
  "deck": "KGI Sekuritas menyesuaikan harga dan rasio pelaksanaan waran terstruktur AMRTHDCH7A akibat dividen tunai AMRT. Hasil rumus baru diumumkan setelah pasar tutup pada 13 Oktober 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "AMRT",
   "waran terstruktur",
   "KGI Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4cbcd8b341_718569427c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cadangan-devisa-september-turun-tipis-ke-us-146-3-miliar",
  "category": "Moneter",
  "title": "Cadangan Devisa September [Turun] Tipis ke US$146,3 Miliar",
  "deck": "Bank Indonesia mencatat cadangan devisa akhir September 2026 sebesar US$146,3 miliar, turun tipis dari US$146,5 miliar pada Agustus karena pembayaran utang luar negeri jatuh tempo.",
  "date": "7 Oktober 2026",
  "image": "assets/img/cadangan-devisa-september-turun-tipis-ke-us-146-3-miliar.jpg",
  "imageV": "muxprpp0",
  "tags": [
   "cadangan devisa",
   "Bank Indonesia",
   "rupiah",
   "utang luar negeri"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "uang-primer-bi-tumbuh-melambat-ke-9-3-pada-september",
  "category": "Moneter",
  "title": "Uang Primer BI Tumbuh [Melambat] ke 9,3% pada September",
  "deck": "Bank Indonesia mencatat pertumbuhan uang primer adjusted melambat ke 9,3 persen secara tahunan pada September 2026, dari 16,3 persen pada Agustus.",
  "date": "7 Oktober 2026",
  "image": "assets/img/uang-primer-bi-tumbuh-melambat-ke-9-3-pada-september.jpg",
  "imageV": "muxprr82",
  "tags": [
   "Bank Indonesia",
   "uang primer",
   "likuiditas perbankan",
   "moneter"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "cpri-rugi-rp4-68-miliar-auditor-ragukan-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "CPRI rugi Rp4,68 miliar, auditor ragukan [kelangsungan usaha]",
  "deck": "Laporan keuangan tahunan 2022 yang baru disampaikan ke bursa menunjukkan rugi bersih Rp4,68 miliar, kas menyusut tajam, dan auditor menyoroti ketidakpastian material atas kelangsungan usaha.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPRI",
   "laporan keuangan",
   "kelangsungan usaha",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202210/20261007123752-62570-0/FinancialStatement-2022-Tahunan-CPRI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpjs-kesehatan-gandeng-18-asuransi-tambahan-baru",
  "category": "Bisnis",
  "title": "BPJS Kesehatan Gandeng [18] Asuransi Tambahan Baru",
  "deck": "BPJS Kesehatan menambah 18 mitra asuransi kesehatan tambahan untuk koordinasi manfaat dengan JKN, total kini 31 perusahaan, demi tagihan satu pintu dan proteksi peserta dari biaya tambahan.",
  "date": "7 Oktober 2026",
  "image": "assets/img/bpjs-kesehatan-gandeng-18-asuransi-tambahan-baru.jpg",
  "imageV": "muxprrqv",
  "tags": [
   "BPJS Kesehatan",
   "asuransi kesehatan tambahan",
   "KAPJ",
   "JKN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471676-bpjs-kesehatan-jalin-kerja-sama-dengan-sejumlah-asuransi-kesehatan-tambahan"
 },
 {
  "slug": "avia-direksi-robert-tanoko-tambah-1-8-juta-saham",
  "category": "Aksi Korporasi",
  "title": "AVIA: Direksi [Robert Tanoko] Tambah 1,8 Juta Saham",
  "deck": "Direksi PT Avia Avian Tbk, Robert Christian Tanoko, melaporkan pembelian 1.797.300 saham tidak langsung pada 2 Oktober 2026 seharga Rp330 per saham.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "kepemilikan saham",
   "direksi",
   "Avia Avian"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-2396-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bltz-tegaskan-tak-ada-info-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BLTZ Tegaskan Tak Ada Info Material soal [Volatilitas] Saham",
  "deck": "Merespons surat Bursa Efek Indonesia soal lonjakan transaksi, manajemen CGV Cinemas menyatakan tidak ada informasi material maupun rencana korporasi yang memengaruhi harga saham BLTZ.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "CGV Cinemas",
   "Bursa Efek Indonesia",
   "UMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ec70c6321b_3177309b30.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cent-jadwalkan-rupslb-13-november-pencatatan-dps-21-oktober",
  "category": "Aksi Korporasi",
  "title": "CENT Jadwalkan [RUPSLB] 13 November, Pencatatan DPS 21 Oktober",
  "deck": "PT Centratama Telekomunikasi Indonesia Tbk (CENT) menjadwalkan RUPSLB pada 13 November 2026, dengan pencatatan pemegang saham berhak hadir per 21 Oktober 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CENT",
   "RUPSLB",
   "Centratama Telekomunikasi",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/64668d27f6_36e9e956d1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crsn-komisaris-sheila-maria-tiwan-jual-167-700-saham",
  "category": "Aksi Korporasi",
  "title": "CRSN: Komisaris Sheila Maria Tiwan [Jual] 167.700 Saham",
  "deck": "Komisaris Carsurin, Sheila Maria Tiwan, melepas 167.700 saham CRSN senilai sekitar Rp23,5 juta, hak suaranya turun tipis dari 50,04% menjadi 50,03%.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRSN",
   "Carsurin",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-2326-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bold-tunjuk-yohanes-budi-kurniawan-jadi-wakil-direktur-utama",
  "category": "Aksi Korporasi",
  "title": "BOLD Tunjuk Yohanes Budi Kurniawan jadi [Wakil Direktur Utama]",
  "deck": "BOLD menambah posisi Wakil Direktur Utama yang diisi Yohanes Budi Kurniawan, bersama dua direktur baru lain, efektif 2 Oktober 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "direksi",
   "komisaris",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6685dee6b1_14bd43938a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crsn-laporan-jual-saham-komisaris-direvisi-jadi-71-900-lembar",
  "category": "Aksi Korporasi",
  "title": "CRSN: Laporan Jual Saham Komisaris [Direvisi] Jadi 71.900 Lembar",
  "deck": "Komisaris Carsurin Sheila Maria Tiwan merevisi laporan penjualan sahamnya, dari 167.700 menjadi 71.900 lembar saham. Hak suaranya tetap 50,04 persen.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRSN",
   "Carsurin",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-4392-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-gelar-public-expose-insidentil-soal-opini-disclaimer",
  "category": "Aksi Korporasi",
  "title": "CANI Gelar Public Expose [Insidentil] Soal Opini Disclaimer",
  "deck": "BEI meminta CANI menggelar paparan publik insidentil pada 9 Oktober 2026 untuk menjelaskan opini disclaimer auditor dan roadmap pemulihan di tengah suspensi saham.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "opini disclaimer",
   "suspensi saham",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/feacaceae2_f4f9c2c011.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-400-000-saham-rp207-juta",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [jual] 400.000 saham, Rp207 juta",
  "deck": "Komisaris Argha Karya Prima Henry Liem melepas 400.000 saham AKPI pada 6 Oktober 2026, mengurangi kepemilikannya dari 6,69 juta jadi 6,3 juta lembar saham.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima",
   "komisaris",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-6455-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tarif-pajak-hiburan-jakarta-capai-40-persen",
  "category": "Makroekonomi",
  "title": "Tarif Pajak Hiburan Jakarta Capai [40] Persen",
  "deck": "Jakarta mengenakan tarif PBJT 10 persen untuk hiburan umum dan 40 persen untuk diskotek, karaoke, kelab malam, bar, serta spa sesuai Perda DKI Nomor 1 Tahun 2024.",
  "date": "7 Oktober 2026",
  "image": "assets/img/tarif-pajak-hiburan-jakarta-capai-40-persen.jpg",
  "imageV": "muxprs7y",
  "tags": [
   "PBJT",
   "Pajak Daerah",
   "DKI Jakarta",
   "Hiburan Malam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471600-kenali-tarif-pbjt-jasa-hiburan-di-jakarta-dari-10-persen-hingga-40-persen"
 },
 {
  "slug": "djp-atur-syarat-penyedia-printer-meterai-digital",
  "category": "Makroekonomi",
  "title": "DJP Atur Syarat Penyedia Printer Meterai [Digital]",
  "deck": "DJP menerbitkan aturan baru yang mengatur syarat, kewajiban, dan sanksi bagi penyedia printer meterai teraan digital, berlaku sejak 22 September 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/djp-atur-syarat-penyedia-printer-meterai-digital.jpg",
  "imageV": "muxhqqok",
  "tags": [
   "DJP",
   "Meterai Digital",
   "Bea Meterai",
   "Regulasi Pajak"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/djp-terbitkan-aturan-penyedia-printer-meterai-teraan-digital",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "cnko-panggil-rupslb-kedua-usai-kuorum-pertama-gagal",
  "category": "Aksi Korporasi",
  "title": "CNKO Panggil RUPSLB Kedua usai [Kuorum] Pertama Gagal",
  "deck": "Setelah RUPS pertama pada Juli 2026 gagal mencapai kuorum, CNKO menjadwalkan rapat kedua pada 15 Oktober 2026 untuk membahas perubahan anggaran dasar.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNKO",
   "RUPSLB",
   "anggaran dasar",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f42d4f9244_48b811e85b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-bagikan-3-360-paket-ke-pekerja-rentan-di-hut-ke-28",
  "category": "BUMN",
  "title": "Bank Mandiri [Bagikan] 3.360 Paket ke Pekerja Rentan di HUT ke-28",
  "deck": "Bank Mandiri membagikan 3.360 paket makanan dan minuman ke pekerja rentan di 12 wilayah dalam rangkaian HUT ke-28, melanjutkan program Livin' Mandiri Berbagi yang berjalan sejak April 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/bank-mandiri-bagikan-3-360-paket-ke-pekerja-rentan-di-hut-ke-28.jpg",
  "imageV": "muz59m0u",
  "tags": [
   "Bank Mandiri",
   "Livin Mandiri Berbagi",
   "BUMN",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471654-livin-mandiri-berbagi-rp28-hadirkan-apresiasi-bagi-pekerja-rentan-dalam-perayaan-hut-ke-28-bank-mandiri"
 },
 {
  "slug": "livin-mandiri-berbagi-apresiasi-pekerja-rentan-di-hut-ke-28",
  "category": "Perbankan",
  "title": "Livin' Mandiri Berbagi [Apresiasi] Pekerja Rentan di HUT ke-28",
  "deck": "Bank Mandiri kembali menggelar Livin' Mandiri Berbagi, membagikan 280 paket makanan dan minuman di 12 wilayah untuk pekerja rentan dalam rangka HUT ke-28 pada 2 Oktober 2026.",
  "date": "7 Oktober 2026",
  "image": "assets/img/livin-mandiri-berbagi-apresiasi-pekerja-rentan-di-hut-ke-28.jpg",
  "imageV": "muya3yb0",
  "tags": [
   "Bank Mandiri",
   "Livin Mandiri Berbagi",
   "pekerja rentan",
   "CSR perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471654-livin-mandiri-berbagi-hadirkan-apresiasi-bagi-pekerja-rentan-dalam-perayaan-hut-ke-28-bank-mandiri-rp28"
 },
 {
  "slug": "hut-ke-28-bank-mandiri-3-360-paket-dibagi-ke-pekerja-rentan",
  "category": "Perbankan",
  "title": "HUT ke-28 Bank Mandiri, [3.360] Paket Dibagi ke Pekerja Rentan",
  "deck": "Bank Mandiri merayakan HUT ke-28 dengan membagikan total 3.360 paket makan dan minum ke pekerja rentan di 12 wilayah lewat program Livin' Mandiri Berbagi.",
  "date": "7 Oktober 2026",
  "image": "assets/img/hut-ke-28-bank-mandiri-3-360-paket-dibagi-ke-pekerja-rentan.jpg",
  "imageV": "muxhqr58",
  "tags": [
   "bank mandiri",
   "livin mandiri berbagi",
   "csr perbankan",
   "pekerja rentan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471654-livin-mandiri-berbagi-hadirkan-apresiasi-bagi-pekerja-rentan-dalam-perayaan-hut-ke-28-bank-mandiri"
 },
 {
  "slug": "wskt-wkr-restrukturisasi-utang-rp31-miliar-ke-tcf-tenor-ke-2027",
  "category": "Aksi Korporasi",
  "title": "WSKT: WKR [Restrukturisasi] Utang Rp31 Miliar ke TCF, Tenor ke 2027",
  "deck": "Waskita Karya Realty, anak usaha Waskita Karya, merestrukturisasi utang modal kerja ke PT TCF senilai Rp31,14 miliar dengan tenor diperpanjang hingga akhir 2027.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "Waskita Karya",
   "Waskita Karya Realty",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/226d5b94c4_721b4c6843.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wisl-dana-obligasi-rp172-67-miliar-rampung-100-persen",
  "category": "Aksi Korporasi",
  "title": "WISL: Dana Obligasi Rp172,67 Miliar [Rampung] 100 Persen",
  "deck": "WISL merealisasikan seluruh dana Rp172,67 miliar dari obligasi berkelanjutan untuk modal kerja perusahaan anak, dengan sisa dana nol.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WISL",
   "obligasi",
   "penggunaan dana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7e5221557e_11597deb4f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpix-direksi-lepas-80-saham-suara-tinggal-0-32",
  "category": "Aksi Korporasi",
  "title": "MPIX: Direksi [Lepas] 80% Saham, Suara Tinggal 0,32%",
  "deck": "Direksi MPIX, Rio Adetya Rizky, menjual 20 juta saham atau 80 persen dari kepemilikannya pada 5 Oktober 2026 seharga Rp75 per saham, memangkas hak suaranya jadi 0,32 persen.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPIX",
   "kepemilikan saham",
   "direksi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07102026-1533-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-resmi-catatkan-obligasi-sosial-rp2-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "BBTN resmi catatkan [obligasi] sosial Rp2 triliun di BEI",
  "deck": "Bank BTN mencatatkan Obligasi Berwawasan Sosial Berkelanjutan I Tahap II senilai Rp2 triliun di Bursa Efek Indonesia, bagian dari program payung Rp10 triliun.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "obligasi",
   "BEI",
   "obligasi berkelanjutan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/499da5d06a_67e5c97a79.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admf-catat-obligasi-dan-sukuk-baru-rp2-15-triliun",
  "category": "Aksi Korporasi",
  "title": "ADMF Catat Obligasi dan Sukuk Baru [Rp2,15 Triliun]",
  "deck": "Adira Finance mencatatkan obligasi Rp1,65 triliun dan sukuk mudharabah Rp500 miliar tahap IV di BEI, bunga 7,10-7,35 persen per tahun, jatuh tempo 2027-2029.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "obligasi korporasi",
   "sukuk mudharabah",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/19e710f64d_e4dce9ff24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tebe-laba-bersih-turun-27-6-ke-rp20-1-miliar-di-s1-2026",
  "category": "Aksi Korporasi",
  "title": "TEBE: Laba Bersih [Turun] 27,6% ke Rp20,1 Miliar di S1 2026",
  "deck": "Dana Brata Luhur menjelaskan ke BEI penyebab laba turun 27,6 persen dan volume bongkar muat batubara anjlok 24 persen di semester I 2026, di tengah RKAB yang baru disetujui pemerintah.",
  "date": "7 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEBE",
   "batubara",
   "laporan keuangan",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/845099d983_41e94ac6ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpkh-umumkan-tiga-pemenang-inkubasi-startup-digital-haji",
  "category": "Teknologi",
  "title": "BPKH Umumkan Tiga Pemenang Inkubasi Startup [Digital] Haji",
  "deck": "BPKH dan Goodstarter umumkan tiga pemenang inkubasi startup digital haji: fintech tabungan mikro pedesaan, pemantau kesehatan jemaah, dan pelacak keselamatan berbasis IoT.",
  "date": "6 Oktober 2026",
  "image": "assets/img/bpkh-umumkan-tiga-pemenang-inkubasi-startup-digital-haji.jpg",
  "imageV": "muwxz5gl",
  "tags": [
   "BPKH",
   "haji",
   "startup digital",
   "fintech syariah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471614-dorong-ekosistem-haji-berkelanjutan-bpkh-lahirkan-beragam-inovasi-digital-kaum-muda"
 },
 {
  "slug": "post-akui-gagal-bayar-bunga-obligasi-likuiditas-tekan-rp83-m",
  "category": "Aksi Korporasi",
  "title": "POST Akui [Gagal Bayar] Bunga Obligasi, Likuiditas Tekan Rp83 M",
  "deck": "Pos Indonesia menunda pembayaran bunga Obligasi I Seri B ke-15 senilai Rp11,75 miliar setelah likuiditasnya hanya menutupi 85,27 persen kewajiban jangka pendek.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "obligasi",
   "likuiditas",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/35621c8c72_0bed1b518e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-luncurkan-gadai-bebas-sewa-modal-untuk-nasabah-baru",
  "category": "Perbankan",
  "title": "Pegadaian Luncurkan Gadai [Bebas] Sewa Modal untuk Nasabah Baru",
  "deck": "Pegadaian menghapus sewa modal gadai bagi nasabah baru untuk pinjaman Rp50.000 hingga Rp1 juta bertenor 30 hari, berlaku di seluruh gerai mulai 28 September 2026.",
  "date": "6 Oktober 2026",
  "image": "assets/img/pegadaian-luncurkan-gadai-bebas-sewa-modal-untuk-nasabah-baru.jpg",
  "imageV": "muwultsv",
  "tags": [
   "Pegadaian",
   "gadai",
   "kredit mikro",
   "inklusi keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471602-pegadaian-luncurkan-program-gadai-bebas-sewa-modal-khusus-nasabah-baru-bantu-masyarakat-akses-dana-cepat-tanpa-bunga"
 },
 {
  "slug": "ptpp-raih-kontrak-baru-rp9-3-triliun-hingga-agustus-2026",
  "category": "Aksi Korporasi",
  "title": "PTPP Raih [Kontrak] Baru Rp9,3 Triliun hingga Agustus 2026",
  "deck": "PTPP membukukan kontrak baru Rp9,3 triliun hingga Agustus 2026, didominasi proyek pemerintah, sementara sahamnya masih disuspensi akibat gagal bayar bunga obligasi.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "kontrak baru",
   "konstruksi",
   "BUMN Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cbc3fe076e_d4193006f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-tawarkan-obligasi-rp2-5-triliun-dan-sukuk-rp1-triliun",
  "category": "Aksi Korporasi",
  "title": "PIDL Tawarkan [Obligasi] Rp2,5 Triliun dan Sukuk Rp1 Triliun",
  "deck": "PIDL menawarkan obligasi hingga Rp2,5 triliun dan sukuk mudharabah hingga Rp1 triliun tahap II, dengan porsi terjamin penuh Rp1,93 triliun dan bunga tetap 10-10,5 persen per tahun.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "obligasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0c48a53e17_5de3446c85.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-tambah-fasilitas-kredit-rp1-7-triliun-dari-bca",
  "category": "Aksi Korporasi",
  "title": "EDGE Tambah [Fasilitas Kredit] Rp1,7 Triliun dari BCA",
  "deck": "Indointernet dan anak usahanya, Ekagrata Data Gemilang, menambah fasilitas kredit Rp1,7 triliun dari BCA, setara 93,7 persen ekuitas, untuk ekspansi pusat data dan kabel fiber optik.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "Indointernet",
   "kredit perbankan",
   "pusat data"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fa4af635b3_7da44c9e62.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "epac-pastikan-rights-issue-2-miliar-saham-dilusi-37-71",
  "category": "Aksi Korporasi",
  "title": "EPAC Pastikan Rights Issue 2 Miliar Saham, Dilusi [37,71%]",
  "deck": "EPAC menanggapi permintaan penjelasan Bursa soal rencana rights issue 2 miliar saham baru, yang berpotensi mendilusi kepemilikan publik dari 36,94% menjadi 23,01% jika tidak ikut exercise.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "rights issue",
   "PMHMETD",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/24cfd32186_ee200afe21.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-kaji-ulang-insentif-pajak-investasi-usai-pajak-global",
  "category": "Makroekonomi",
  "title": "Pemerintah Kaji Ulang [Insentif Pajak] Investasi Usai Pajak Global",
  "deck": "Pemerintah mengkaji ulang insentif pajak investasi, termasuk tax holiday, setelah pajak minimum global 15 persen berlaku, di tengah investasi semester I 2026 yang capai Rp1.010 triliun.",
  "date": "6 Oktober 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "hilirisasi",
   "investasi",
   "pajak minimum global",
   "tax holiday"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7134/pemerintah-perkuat-ekosistem-hilirisasi-bernilai-tambah-tinggi-di-tengah-ketidakpastian-global",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "swat-koreksi-lk-2025-aset-turun-karyawan-susut-jadi-97",
  "category": "Aksi Korporasi",
  "title": "SWAT Koreksi LK 2025: Aset Turun, [Karyawan] Susut jadi 97",
  "deck": "SWAT merevisi laporan keuangan tahunan 2025: auditor baru memberi opini wajar dengan pengecualian, aset dan kas menyusut, dan karyawan merosot dari 249 menjadi 97 orang.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "laporan keuangan",
   "opini audit",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202510/20261006184758-64490-0/FinancialStatement-2025-Tahunan-SWAT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrta-gandeng-bank-mandiri-jual-emas-batangan-emasku",
  "category": "Aksi Korporasi",
  "title": "HRTA Gandeng Bank Mandiri Jual [Emas] Batangan EMASKU",
  "deck": "Hartadinata Abadi meneken kerja sama setahun dengan Bank Mandiri untuk menjual emas batangan EMASKU, memperluas kanal distribusi lewat jaringan bank pelat merah itu.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "Bank Mandiri",
   "EMASKU",
   "emas batangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/536fa65029_6c24d966c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "moya-jelaskan-ke-bursa-realisasi-dana-obligasi-rp1-98-triliun",
  "category": "Aksi Korporasi",
  "title": "MOYA Jelaskan ke Bursa [Realisasi] Dana Obligasi Rp1,98 Triliun",
  "deck": "Emiten infrastruktur air MOYA merinci ke BEI penggunaan dana obligasi dan sukuk senilai hampir Rp2 triliun, dari pelunasan utang bank hingga pembangunan SPAM di Jakarta dan Bandung.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MOYA",
   "obligasi",
   "sukuk",
   "SPAM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8a0c73c644_2bf7ab6dc2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewa-sajikan-kembali-laporan-keuangan-ekuitas-total-tak-berubah",
  "category": "Aksi Korporasi",
  "title": "DEWA Sajikan Kembali Laporan Keuangan, [Ekuitas] Total Tak Berubah",
  "deck": "Darma Henwa merombak klasifikasi komponen ekuitas pada laporan keuangan interim per 30 Juni 2026, namun menegaskan total ekuitas, aset, dan liabilitas tidak berubah.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWA",
   "laporan keuangan",
   "ekuitas",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fd98499772_ab3017ebca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-jadi-remitra-paparan-publik-ungkap-bisnis-baja-dan-udang",
  "category": "Aksi Korporasi",
  "title": "MKNT Jadi Remitra, Paparan Publik Ungkap Bisnis [Baja] dan Udang",
  "deck": "MKNT resmi berganti nama jadi Remitra Global International dan menggelar paparan publik 9 Oktober 2026, mengungkap dua bisnis barunya: baja dan tambak udang.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "Public Expose",
   "Industri Baja",
   "Budidaya Udang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fa6139ca45_1d9df2c93d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "taspen-perkuat-kepemimpinan-lewat-digitalisasi-layanan",
  "category": "BUMN",
  "title": "TASPEN Perkuat [Kepemimpinan] Lewat Digitalisasi Layanan",
  "deck": "TASPEN menggelar forum kepemimpinan tahunan LEAP 2026 di Jakarta untuk mendorong inovasi digital dalam pelayanan bagi pensiunan ASN di seluruh Indonesia.",
  "date": "6 Oktober 2026",
  "image": "assets/img/taspen-perkuat-kepemimpinan-lewat-digitalisasi-layanan.jpg",
  "imageV": "muwp8ve5",
  "tags": [
   "TASPEN",
   "LEAP 2026",
   "BUMN",
   "Digitalisasi Layanan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471534-semakin-andal-melayani-peserta-taspen-akselerasikan-kemampuan-kepemimpinan-melalui-inovasi-digital"
 },
 {
  "slug": "dewa-catat-laba-naik-89-tapi-kas-tergerus-separuh",
  "category": "Aksi Korporasi",
  "title": "DEWA Catat Laba Naik 89%, tapi [Kas] Tergerus Separuh",
  "deck": "Laba bersih DEWA naik hampir dua kali lipat jadi Rp354,23 miliar pada semester I 2026, tapi kas menipis 59,5 persen dan utang bank jangka pendek melonjak 158,7 persen jadi Rp2,16 triliun.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWA",
   "Darma Henwa",
   "laporan keuangan",
   "emiten tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261006175759-64463-0/FinancialStatement-2026-II-DEWA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-koreksi-jadwal-rights-issue-pembeli-siaga-siap-rp525-m",
  "category": "Aksi Korporasi",
  "title": "BUVA Koreksi Jadwal Rights Issue, [Pembeli Siaga] Siap Rp525 M",
  "deck": "Perseroan mengoreksi jadwal rights issue senilai Rp1,54 triliun dan memastikan empat pembeli siaga menyerap sisa saham hingga Rp525 miliar bila publik tak menyerap haknya.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "rights issue",
   "HMETD",
   "pembeli siaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ba9866aef8_fe0d8d5458.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-gelar-rupslb-12-november-agenda-belum-dibuka",
  "category": "Aksi Korporasi",
  "title": "MGLV Gelar RUPSLB [12 November], Agenda Belum Dibuka",
  "deck": "NexAI Digital Infrastruktur menjadwalkan RUPSLB pada 12 November 2026, dengan daftar pemegang saham penentu 20 Oktober dan pemanggilan resmi berisi agenda terbit 21 Oktober.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "RUPSLB",
   "Corporate Secretary",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ae178c6ed1_7f2448688f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibst-tender-sukarela-iforte-rampung-503-883-saham-beralih",
  "category": "Aksi Korporasi",
  "title": "IBST: [Tender Sukarela] Iforte Rampung, 503.883 Saham Beralih",
  "deck": "Penawaran tender sukarela Iforte Solusi Infotek atas saham publik Inti Bangun Sejahtera berakhir setelah 90 hari, dengan 503.883 saham dari 135 pemegang saham beralih ke Iforte.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBST",
   "tender offer",
   "Iforte",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/78f2042f7d_d74bae481a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tei-2026-satukan-zona-kopi-teh-dan-kakao-di-ice-bsd",
  "category": "Bisnis",
  "title": "TEI 2026 Satukan Zona [Kopi], Teh, dan Kakao di ICE BSD",
  "deck": "Kementerian Perdagangan menggabungkan kopi, teh, dan kakao dalam satu zona bernama KoTeKa di Trade Expo Indonesia 2026 untuk memudahkan pembeli asing menemukan produk Indonesia.",
  "date": "6 Oktober 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "TEI 2026",
   "Zona KoTeKa",
   "Ekspor Kopi",
   "Ekspor Kakao"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tei-2026-siapkan-zona-khusus-kopi-teh-dan-kakao-permudah-buyer-di-area-pameran",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ijee-revisi-laporan-dana-rp742-miliar-masih-di-giro",
  "category": "Aksi Korporasi",
  "title": "IJEE Revisi Laporan Dana, Rp742 Miliar Masih di [Giro]",
  "deck": "Koreksi laporan penggunaan dana obligasi dan sukuk Rp2,5 triliun milik IJEE menunjukkan Rp742,52 miliar per instrumen belum dipakai melunasi utang lama, masih mengendap di giro bank.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "obligasi korporasi",
   "sukuk",
   "penggunaan dana IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8c1e0fa5c7_27317bb272.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-rombak-direksi-dan-komisaris-lewat-rupslb",
  "category": "Aksi Korporasi",
  "title": "MBSS [Rombak] Direksi dan Komisaris Lewat RUPSLB",
  "deck": "Mitrabahtera Segara Sejati mengganti direktur utama dan komisaris utama lewat RUPSLB 17 September 2026, menyusul pengunduran diri lima pengurus lama.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "Pergantian Direksi",
   "Komisaris",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6102bec10f_154bbe290a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-tegaskan-tak-ada-penyesuaian-waran-untr",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Tegaskan [Tak] Ada Penyesuaian Waran UNTR",
  "deck": "RHB Sekuritas memastikan dua waran terstruktur UNTRDRCX6A dan UNTRDRCH7A tidak disesuaikan, meski UNTR membagikan dividen tunai yang diumumkan 29 September 2026.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "UNTR",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bded562ab8_7a42f7efa8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tira-bantah-punya-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "TIRA Bantah Punya Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Merespons permintaan penjelasan BEI soal volatilitas transaksi, Tira Austenite menyatakan tidak mengetahui ada info material maupun rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TIRA",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/79172ba82b_86c6fbad00.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gula-ungkap-kas-anjlok-73-meski-penjualan-melonjak-121",
  "category": "Aksi Korporasi",
  "title": "GULA ungkap kas anjlok 73% meski penjualan [melonjak] 121%",
  "deck": "GULA jawab permintaan Bursa: kas turun 73,1%, arus kas operasi negatif Rp29,4 miliar, pinjaman BRI nyaris penuh, meski penjualan melonjak 121,69% jadi Rp144,32 miliar.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GULA",
   "arus kas",
   "pinjaman bank",
   "Aman Agrindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7c74c4b424_c185320a12.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-pastikan-tak-ada-penyesuaian-waran-untr-usai-dividen",
  "category": "Aksi Korporasi",
  "title": "ZP Pastikan Tak Ada Penyesuaian Waran [UNTR] usai Dividen",
  "deck": "Maybank Sekuritas Indonesia menyatakan tidak ada penyesuaian pada waran terstruktur UNTRZPCZ6A dan UNTRZPCM7A menyusul dividen tunai United Tractors.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "UNTR",
   "waran terstruktur",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a90b8f8424_7c0ee4ed07.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "flmc-masuk-pemantauan-khusus-bei-karena-ekuitas-negatif",
  "category": "Aksi Korporasi",
  "title": "FLMC Masuk [Pemantauan Khusus] BEI karena Ekuitas Negatif",
  "deck": "Bursa Efek Indonesia menetapkan saham PT Falmaco Nonwoven Industri Tbk (FLMC) masuk Pemantauan Khusus mulai 7 Oktober 2026 akibat ekuitas negatif pada laporan keuangan terakhir.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "pemantauan khusus",
   "BEI",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9bcc55768f_4d683218b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "opini-disclaimer-cani-tambah-kriteria-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "Opini Disclaimer, CANI Tambah Kriteria [Pemantauan Khusus]",
  "deck": "BEI menambahkan kriteria opini disclaimer pada status pemantauan khusus saham CANI, menyusul ekuitas negatif yang sudah tercatat sebelumnya, efektif 7 Oktober 2026.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "pemantauan khusus",
   "BEI",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d89b3b0d8a_12cb4529a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-terbitkan-waran-baru-acuan-mdka-medc-nckl-towr-wifi",
  "category": "Aksi Korporasi",
  "title": "ZP Terbitkan [Waran] Baru Acuan MDKA, MEDC, NCKL, TOWR, WIFI",
  "deck": "Maybank Sekuritas merilis lima seri call warrant baru bertenor sampai Juli 2027, dengan saham acuan MDKA, MEDC, NCKL, TOWR, dan WIFI.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "MDKA",
   "NCKL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bdb75854bd_7376bf6e0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-r-masa-perdagangan-hmetd-berakhir-7-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BAJA-R: Masa Perdagangan HMETD [Berakhir] 7 Oktober 2026",
  "deck": "BEI mengingatkan bahwa perdagangan hak memesan efek terlebih dahulu (HMETD) BAJA-R berakhir 7 Oktober 2026, setelah itu rights ini dihapus dari pencatatan bursa.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "BAJA-R",
   "HMETD",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Batas Akhir Perdagangan BAJA-R261007-No. Peng-00189BEI.POP10-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-terbitkan-10-waran-call-baru-acuan-asii-cuan-hrum-dkk",
  "category": "Aksi Korporasi",
  "title": "ZP Terbitkan 10 [Waran] Call Baru Acuan ASII, CUAN, HRUM dkk",
  "deck": "Maybank Sekuritas mematok harga penawaran dan harga pelaksanaan untuk 10 waran terstruktur baru beracuan ARTO, ASII, BRMS, BRPT, CTRA, CUAN, EMTK, ENRG, HRUM, dan KIJA, mulai tercatat 9 Oktober 2026.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "ASII",
   "CUAN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7ab4a1f05b_b33ccc3277.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aspi-rugi-makin-dalam-utang-rp24-8-m-diperpanjang-ke-2027",
  "category": "Aksi Korporasi",
  "title": "ASPI: Rugi Makin Dalam, Utang Rp24,8 M Diperpanjang ke [2027]",
  "deck": "ASPI jawab permintaan penjelasan Bursa: pendapatan turun 15,77%, laba kotor anjlok 27,48%, arus kas operasi berbalik negatif, dan akuisisi oleh GMP Group Investama masih due diligence.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASPI",
   "properti",
   "keterbukaan informasi",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/631ba2d52b_e4dc5779ba.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-tanggapi-bei-pemegang-saham-utama-kaji-opsi-strategis",
  "category": "Aksi Korporasi",
  "title": "WIFI Tanggapi BEI, Pemegang Saham Utama Kaji [Opsi Strategis]",
  "deck": "WIFI menjawab permintaan Bursa soal volatilitas sahamnya, menyebut pemegang saham utama PT Investasi Sukses Bersama masih mengkaji alternatif strategis tanpa keputusan definitif.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "RUPSLB",
   "volatilitas saham",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/230c962177_24074e544d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sage-jawab-bursa-soal-lonjakan-volume-dan-harga-15-5",
  "category": "Aksi Korporasi",
  "title": "SAGE Jawab Bursa soal Lonjakan [Volume] dan Harga 15,5%",
  "deck": "SAGE menjelaskan ke BEI lonjakan volume transaksi hingga empat kali lipat dan harga saham naik 15,5 persen dalam sehari pada 28 September 2026, tanpa ada informasi material baru.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAGE",
   "volatilitas saham",
   "unusual market activity",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/72fe06c28f_510eb54687.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "daaz-baru-pakai-55-5-dana-obligasi-sisa-rp219-7-m-mengendap",
  "category": "Aksi Korporasi",
  "title": "DAAZ Baru Pakai 55,5% Dana Obligasi, [Sisa] Rp219,7 M Mengendap",
  "deck": "Realisasi dana obligasi Rp500 miliar DAAZ baru mencapai 55,5 persen per Juni 2026, sisa Rp219,71 miliar belum tersalurkan karena pembangunan kapal di galangan mitra belum rampung.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAAZ",
   "obligasi korporasi",
   "penggunaan dana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/60b8d033c4_ed4099f961.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-perluas-target-hilirisasi-ke-sawit-dan-perikanan",
  "category": "Industri",
  "title": "Pemerintah Perluas Target Hilirisasi ke [Sawit] dan Perikanan",
  "deck": "Menko Airlangga sebut peta jalan hilirisasi 28 komoditas menyasar investasi US$618,1 miliar dan tambahan ekspor mendekati US$500 miliar.",
  "date": "6 Oktober 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "hilirisasi",
   "industri manufaktur",
   "investasi",
   "ekspor"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7130/menko-airlangga-hilirisasi-dan-transformasi-industri-jadi-kunci-dorong-pertumbuhan-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "airlangga-pacu-investasi-as-target-tumbuh-8-di-2027",
  "category": "Makroekonomi",
  "title": "Airlangga Pacu Investasi AS, Target Tumbuh [8]% di 2027",
  "deck": "Dalam forum investasi AS-Indonesia, Menko Airlangga memaparkan data dagang dan investasi dua negara serta target pertumbuhan ekonomi 8 persen pada 2027 lewat sektor teknologi tinggi.",
  "date": "6 Oktober 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "Investasi AS",
   "Pertumbuhan Ekonomi",
   "Kawasan Ekonomi Khusus",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7131/perkuat-iklim-investasi-indonesia-as-menko-airlangga-tegaskan-komitmen-transformasi-ekonomi-berkelanjutan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kemendag-pilih-100-umkm-untuk-sertifikasi-barcode",
  "category": "UMKM",
  "title": "Kemendag Pilih 100 UMKM untuk Sertifikasi [Barcode]",
  "deck": "Kemendag dan GS1 Indonesia memulai fasilitasi sertifikasi barcode bagi UMKM pangan kemasan dan kecantikan agar produknya bisa masuk ritel modern.",
  "date": "6 Oktober 2026",
  "image": "assets/img/kemendag-pilih-100-umkm-untuk-sertifikasi-barcode.jpg",
  "imageV": "muwfoqbh",
  "tags": [
   "UMKM",
   "Barcode",
   "Kemendag",
   "Ritel Modern"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/barcode-buka-peluang-produk-umkm-tembus-ritel",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "hd-harga-pelaksanaan-waran-asiihdch7a-disesuaikan-13-okt",
  "category": "Aksi Korporasi",
  "title": "HD: Harga Pelaksanaan Waran [ASIIHDCH7A] Disesuaikan 13 Okt",
  "deck": "KGI Sekuritas mengumumkan penyesuaian harga pelaksanaan dan rasio waran terstruktur ASIIHDCH7A akibat dividen tunai ASII, efektif 13 Oktober 2026.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "ASII",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cf8d65003e_9cbc8bc2dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-revisi-kuorum-rupslb-buyback-rp1-triliun-dibahas-13-oktober",
  "category": "Aksi Korporasi",
  "title": "BTPS Revisi Kuorum RUPSLB, Buyback [Rp1 Triliun] Dibahas 13 Oktober",
  "deck": "BTPN Syariah menaikkan syarat kuorum keputusan RUPSLB buyback saham dari 1/2 jadi 2/3 suara, sementara rencana pembelian kembali saham senilai maksimal Rp1 triliun tetap dibahas 13 Oktober 2026.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "RUPSLB",
   "buyback saham",
   "bank syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d09fffbd0e_7df2a14f99.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hits-laba-bersih-kuartal-i-2026-ambrol-96-induk-berbalik-rugi",
  "category": "Aksi Korporasi",
  "title": "HITS: Laba Bersih Kuartal I 2026 [Ambrol] 96%, Induk Berbalik Rugi",
  "deck": "Laporan interim HITS menunjukkan laba bersih turun 96 persen dan pemegang saham induk berbalik rugi, sementara arus kas operasi menipis tajam.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HITS",
   "laporan keuangan",
   "laba bersih",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261006152642-64464-0/FinancialStatement-2026-I-HITS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-gelar-public-expose-tahunan-20-oktober-di-jakarta",
  "category": "Aksi Korporasi",
  "title": "LAPD Gelar [Public Expose] Tahunan 20 Oktober di Jakarta",
  "deck": "Leyand International menjadwalkan paparan publik tahunan pada 20 Oktober 2026, forum yang jadi sorotan setelah ekuitas perusahaan tercatat negatif.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "Leyand International",
   "public expose",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/85227bdcb1_df97d7efc4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-suntik-modal-us-3-6-juta-ke-simas-bank-di-timor-leste",
  "category": "Aksi Korporasi",
  "title": "SMMA [Suntik] Modal US$3,6 Juta ke Simas Bank di Timor Leste",
  "deck": "SMMA menambah penyertaan modal US$3,6 juta ke anak usaha perbankannya, Simas Bank S.A. di Dili, Timor Leste, tanpa mengubah komposisi kepemilikan maupun status pengendali.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "Simas Bank",
   "Timor Leste",
   "penyertaan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/88248067f8_acedc98cca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-koreksi-bunga-pinjaman-ke-retj-jadi-9-per-tahun",
  "category": "Aksi Korporasi",
  "title": "RATU Koreksi Bunga Pinjaman ke RETJ Jadi [9%] per Tahun",
  "deck": "Raharja Energi Cepu menaikkan bunga pinjaman Rp204,62 miliar ke anak usahanya RETJ dari 7,5% menjadi 9% per tahun, berlaku surut, demi menutup biaya dana dari obligasi yang diterbitkannya.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "transaksi afiliasi",
   "obligasi korporasi",
   "pinjaman anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/21f9ed3fc4_75dbf006de.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tebe-pangkas-target-pendapatan-2026-jadi-rp451-miliar",
  "category": "Aksi Korporasi",
  "title": "TEBE Pangkas Target [Pendapatan] 2026 Jadi Rp451 Miliar",
  "deck": "Dalam public expose insidentil, manajemen Dana Brata Luhur memangkas target volume batubara 2026 menjadi 5,13 juta ton akibat keterlambatan izin tambang, menekan proyeksi pendapatan dan laba.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEBE",
   "public expose",
   "batubara",
   "pelabuhan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ff6ebb6379_d54dc4c27d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-harga-waran-asii-usai-dividen-rp98-saham",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan Harga Waran ASII Usai Dividen [Rp98]/Saham",
  "deck": "PT Korea Investment and Sekuritas Indonesia (BQ) menyesuaikan rasio dan harga pelaksanaan waran terstruktur ASIIBQCV6A dan ASIIBQCZ6A menyusul dividen tunai ASII Rp98 per saham.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "ASII",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/92b2fed149_72acddc2d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-amrt-disesuaikan-usai-dividen-rp595-8-m",
  "category": "Aksi Korporasi",
  "title": "DR: Waran [AMRT] Disesuaikan usai Dividen Rp595,8 M",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur AMRT mengikuti rumus baku di prospektus, merespons dividen tunai Rp595,8 miliar dari Sumber Alfaria Trijaya.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "AMRT",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/11075ed644_cd83a5657c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendag-dampingi-56-umk-depok-tangsel-urus-sertifikasi-halal",
  "category": "UMKM",
  "title": "Kemendag Dampingi [56] UMK Depok-Tangsel Urus Sertifikasi Halal",
  "deck": "Kemendag memfasilitasi pendampingan sertifikasi halal bagi 56 UMK di Depok dan Tangerang Selatan pada kuartal keempat 2026, bagian dari dorongan produk lokal menembus pasar global.",
  "date": "6 Oktober 2026",
  "image": "assets/img/kemendag-dampingi-56-umk-depok-tangsel-urus-sertifikasi-halal.jpg",
  "imageV": "muw94xud",
  "tags": [
   "UMKM",
   "Sertifikasi Halal",
   "Kemendag",
   "Depok"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-umk-tembus-pasar-global-kemendag-fasilitasi-pendampingan-sertifikasi-halal",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "komite-audit-humi-berganti-fiantonius-sihotang-anggota-baru",
  "category": "Aksi Korporasi",
  "title": "Komite [Audit] HUMI Berganti, Fiantonius Sihotang Anggota Baru",
  "deck": "Dewan Komisaris HUMI mengganti Mirawati Sudjono dengan Fiantonius Sihotang sebagai anggota Komite Audit efektif 1 Oktober 2026, sementara Ketua Mahdan dan anggota JT Duma tetap menjabat.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HUMI",
   "Komite Audit",
   "Tata Kelola Perusahaan",
   "Humpuss Maritim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/82de038d5f_424dabe19c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "talf-sewa-mobil-dari-perusahaan-afiliasi-milik-direksinya",
  "category": "Aksi Korporasi",
  "title": "TALF Sewa Mobil dari Perusahaan [Afiliasi] Milik Direksinya",
  "deck": "Tunas Alfin menyewa mobil dari PT Adi Indah Andalan, perusahaan yang dimiliki dan dipimpin oleh direksi serta komisaris utamanya sendiri, senilai Rp9,7 juta per bulan selama tiga bulan.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TALF",
   "transaksi afiliasi",
   "sewa kendaraan",
   "Tunas Alfin"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/76a840d2f2_e7d9f2c4a6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-gelar-rupslb-28-oktober-bagi-saham-bonus-dari-treasuri",
  "category": "Aksi Korporasi",
  "title": "PSSI Gelar RUPSLB 28 Oktober, Bagi [Saham Bonus] dari Treasuri",
  "deck": "RUPSLB PSSI pada 28 Oktober 2026 membahas pengalihan saham treasuri menjadi saham bonus dan perubahan pasal anggaran dasar soal bidang usaha.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "RUPSLB",
   "saham treasuri",
   "saham bonus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d50defc785_7847d00a5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bino-koreksi-dana-ipo-sisa-rp1-33-miliar-dialihkan-ke-utang",
  "category": "Aksi Korporasi",
  "title": "BINO Koreksi Dana IPO: Sisa Rp1,33 Miliar [Dialihkan] ke Utang",
  "deck": "PT Perma Plasindo Tbk (BINO) mengoreksi laporan realisasi dana IPO, sisa Rp1,33 miliar yang semula untuk beli tanah di Klaten dialihkan jadi pelunasan utang ke pemegang saham sesuai persetujuan RUPS 2025.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINO",
   "IPO",
   "penggunaan dana IPO",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/18213acfac_4ce6df71ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-sabet-bronze-di-ipma-global-project-award",
  "category": "BUMN",
  "title": "Pegadaian Sabet [Bronze] di IPMA Global Project Award",
  "deck": "Pegadaian meraih Bronze Winner di IPMA Global Project Excellence Award 2026 di Hiroshima, Jepang, untuk kategori Project Management Office.",
  "date": "6 Oktober 2026",
  "image": "assets/img/pegadaian-sabet-bronze-di-ipma-global-project-award.jpg",
  "imageV": "muw94y8c",
  "tags": [
   "pegadaian",
   "bumn",
   "ipma",
   "penghargaan internasional"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471459-wakili-indonesia-di-kancah-internasional-pegadaian-raih-penghargaan-internasional-ipma-global-project-excellence-award-2026"
 },
 {
  "slug": "blog-koreksi-laporan-dana-ipo-rp138-2-miliar-tuntas-terpakai",
  "category": "Aksi Korporasi",
  "title": "BLOG Koreksi Laporan, Dana IPO [Rp138,2 Miliar] Tuntas Terpakai",
  "deck": "Trimitra Trans Persada mengoreksi laporan realisasi dana IPO per 30 Juni 2026: seluruh Rp138,23 miliar sudah terpakai untuk gudang pendingin dan truk.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLOG",
   "IPO",
   "realisasi dana",
   "logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/18d5d1e6af_42af6e8a0a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikai-direksi-beli-5-juta-saham-hak-suara-ke-0-04",
  "category": "Aksi Korporasi",
  "title": "IKAI: Direksi [Beli] 5 Juta Saham, Hak Suara ke 0,04%",
  "deck": "Direksi IKAI Desra Firza Ghazfan membeli 5 juta saham seharga Rp20 per lembar pada 1 Oktober 2026, hak suaranya naik dari 0 menjadi 0,04 persen.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKAI",
   "kepemilikan saham",
   "direksi",
   "intikeramik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06102026-0602-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppri-direksi-divestasi-lagi-15-juta-saham-hak-suara-ke-12-6",
  "category": "Aksi Korporasi",
  "title": "PPRI: Direksi [Divestasi] Lagi 15 Juta Saham, Hak Suara ke 12,6%",
  "deck": "Direksi PPRI, Irsyad Hanif, melepas 15 juta saham seharga Rp185 per lembar pada 5 Oktober 2026, penjualan kedua dalam dua hari yang menekan hak suaranya ke 12,61 persen.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRI",
   "kepemilikan saham",
   "direksi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06102026-2548-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-rampungkan-akuisisi-90-saham-tri-satria-indah-motor",
  "category": "Aksi Korporasi",
  "title": "INPS Rampungkan Akuisisi [90%] Saham Tri Satria Indah Motor",
  "deck": "Perseroan resmi membeli 90% saham PT Tri Satria Indah Motor senilai Rp5,8 miliar lewat akta jual beli 5 Oktober 2026, menjadikannya anak usaha baru di bisnis motor roda tiga.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "akuisisi",
   "Tri Satria Indah Motor",
   "otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/93bd095436_42eabbcbd9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-jual-30-saham-anak-usaha-paf-ke-cicil-technologies",
  "category": "Aksi Korporasi",
  "title": "POOL [Jual] 30% Saham Anak Usaha PAF ke Cicil Technologies",
  "deck": "POOL menjual 30 persen saham PT Pool Advista Finance Tbk ke Cicil Technologies asal Singapura, kepemilikannya di PAF turun jadi 46,34 persen tapi tetap pengendali.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "PAF",
   "Cicil Technologies",
   "divestasi anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/132e56bc23_d36326de4a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lucy-hp-capital-jual-27-67-juta-saham-suara-turun-ke-10-99",
  "category": "Aksi Korporasi",
  "title": "LUCY: HP Capital [Jual] 27,67 Juta Saham, Suara Turun ke 10,99%",
  "deck": "Pemegang saham HP Capital Resources melepas 27,67 juta saham LUCY senilai sekitar Rp7,12 miliar dalam tiga transaksi awal Oktober, hak suaranya turun dari 12,83% menjadi 10,99%.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LUCY",
   "kepemilikan saham",
   "pemegang saham",
   "HP Capital Resources"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06102026-9727-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "surplus-dagang-agustus-melonjak-impor-modal-anjlok-16",
  "category": "Makroekonomi",
  "title": "Surplus Dagang Agustus Melonjak, [Impor] Modal Anjlok 16%",
  "deck": "Neraca dagang Indonesia Agustus 2026 surplus USD3,55 miliar, melonjak dari USD0,12 miliar di Juli, didorong surplus nonmigas, sementara impor barang modal dan bahan baku justru turun tajam.",
  "date": "6 Oktober 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "neraca dagang",
   "ekspor impor",
   "Kementerian Perdagangan",
   "hilirisasi"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/surplus-perdagangan-agustus-2026-menguat-surplus-januari-agustus-2026-tembus-usd-725-miliar",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "buva-right-issue-ii-rp1-54-triliun-harga-hmetd-rp250",
  "category": "Aksi Korporasi",
  "title": "BUVA Right Issue II Rp1,54 Triliun, Harga [HMETD] Rp250",
  "deck": "BUVA menawarkan 6,15 miliar saham baru rasio 4:1 di harga Rp250, mengumpulkan Rp1,54 triliun untuk bayar utang dan ekspansi resor di Uluwatu.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eff7c36fdf_3f5a1bbab7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-rilis-prospektus-rights-issue-pembeli-siaga-kunci-rp1-54-t",
  "category": "Aksi Korporasi",
  "title": "BUVA Rilis Prospektus Rights Issue, [Pembeli Siaga] Kunci Rp1,54 T",
  "deck": "Prospektus PMHMETD II BUVA mengungkap jadwal lengkap dan komitmen empat pembeli siaga menyerap sisa saham hingga Rp525,5 miliar jika pemegang saham lain tak menyerap haknya.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/77e65b77a7_72ea51316a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bold-ganti-direksi-dua-direktur-baru-masuk-jajaran",
  "category": "Aksi Korporasi",
  "title": "BOLD Ganti Direksi, Dua [Direktur] Baru Masuk Jajaran",
  "deck": "BUMA (BOLD) mengubah susunan direksi lewat keputusan sirkuler pemegang saham, menambah dua direktur baru dan menggeser posisi Wakil Direktur Utama.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "direksi",
   "BUMA",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b8639ce1b8_2389355d45.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-serapan-tender-saham-digital-edge-baru-4-84-usai-tahap-iii",
  "category": "Aksi Korporasi",
  "title": "EDGE: [Serapan] Tender Saham Digital Edge Baru 4,84% Usai Tahap III",
  "deck": "Setelah tiga periode penawaran tender sukarela sejak Juni 2026, Digital Edge (Hong Kong) Ltd baru membeli 7,71 juta dari target 159,59 juta saham publik EDGE.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "tender offer",
   "delisting",
   "Indointernet"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/64f3a44b21_6106aa2254.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catatkan-1-43-juta-saham-baru-dari-mesop",
  "category": "Aksi Korporasi",
  "title": "PGEO Catatkan 1,43 Juta Saham Baru dari [MESOP]",
  "deck": "PT Pertamina Geothermal Energy mencatatkan 1.429.793 saham baru hasil pelaksanaan opsi karyawan Tahap I dan III pada 6 Oktober 2026, menambah total saham beredar menjadi 41,95 miliar lembar.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "ESOP",
   "MESOP",
   "saham baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1283ef9a12_290a4d499b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iata-siapkan-dana-rp199-1-miliar-lunasi-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "[IATA] Siapkan Dana Rp199,1 Miliar Lunasi Obligasi dan Sukuk",
  "deck": "Obligasi dan sukuk wakalah IATA senilai total Rp199,1 miliar jatuh tempo 6 Oktober 2026. Manajemen menyatakan ke BEI dana pelunasan sudah siap.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IATA",
   "obligasi",
   "sukuk wakalah",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a75e87e442_d37d163031.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-jatuh-tempo-obligasi-rp1-48-triliun-lepas-dari-bursa",
  "category": "Aksi Korporasi",
  "title": "LPPI [Jatuh Tempo] Obligasi Rp1,48 Triliun, Lepas dari Bursa",
  "deck": "Obligasi Seri B senilai Rp1,48 triliun milik LPPI resmi jatuh tempo dan didelisting dari BEI mulai 6 Oktober 2026, menandai pelunasan salah satu seri Obligasi Berkelanjutan II.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/585c9f2781_a38548e713.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-catatkan-89-7-juta-saham-baru-hasil-hmetd",
  "category": "Aksi Korporasi",
  "title": "FORU Catatkan [89,7 Juta] Saham Baru Hasil HMETD",
  "deck": "BEI mencatat tambahan 89,73 juta saham baru dari pelaksanaan HMETD FORU, membuat total saham tercatat emiten ini jadi 168,74 miliar lembar.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "HMETD",
   "rights issue",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/843409b6e8_82b5110ff5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gagal-bayar-bagi-hasil-sukuk-rupsu-digelar-21-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA [Gagal Bayar] Bagi Hasil Sukuk, RUPSU Digelar 21 Oktober",
  "deck": "WIKA memanggil pemegang Sukuk Mudharabah Berkelanjutan III Tahap I 2022 untuk RUPSU pada 21 Oktober 2026, menyusul gagal bayar bagi hasil dua periode berturut-turut.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fb8fe5a89a_c0d9a8a2f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-panggil-rupsu-sukuk-minta-restrukturisasi-bagi-hasil",
  "category": "Aksi Korporasi",
  "title": "WIKA Panggil RUPSU Sukuk, Minta [Restrukturisasi] Bagi Hasil",
  "deck": "WIKA menggelar rapat pemegang sukuk pada 21 Oktober 2026 untuk meminta penundaan jadwal bagi hasil dan pengampunan atas gagal bayar dua periode sebelumnya.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/19372052df_09b31206f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gagal-bayar-kupon-ke-18-obligasi-rupo-20-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Gagal Bayar Kupon [ke-18] Obligasi, RUPO 20 Oktober",
  "deck": "WIKA memanggil Rapat Umum Pemegang Obligasi pada 20 Oktober 2026 setelah gagal membayar bunga ke-18 Obligasi Berkelanjutan II Tahap II Seri A, B, dan C.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "gagal bayar",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/396acc0cdf_20d9a82109.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-panggil-rupsu-sukuk-seri-b-c-gagal-bayar-bagi-hasil-ke-20",
  "category": "Aksi Korporasi",
  "title": "WIKA Panggil RUPSU Sukuk Seri B-C, [Gagal Bayar] Bagi Hasil ke-20",
  "deck": "WIKA mengundang pemegang Sukuk Mudharabah Berkelanjutan II Tahap I 2021 ke RUPSU 19 Oktober 2026, menyusul gagal bayar bagi hasil ke-20 Seri B dan C serta gagal lunasi pokok Seri B.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/63b9c079e5_fbeb007529.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gagal-bayar-bunga-obligasi-tahap-i-rupo-19-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA [Gagal Bayar] Bunga Obligasi Tahap I, RUPO 19 Oktober",
  "deck": "WIKA memanggil RUPO pemegang Obligasi Berkelanjutan II Tahap I 2021 pada 19 Oktober 2026, menyusul gagal bayar bunga ke-20 Seri B dan C serta gagal melunasi pokok Seri B.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "Obligasi",
   "RUPO",
   "Gagal Bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f75adba0fa_bce6f6cb53.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-target-ebitda-rp850-m-tutup-utang-rp27-t-restrukturisasi",
  "category": "Aksi Korporasi",
  "title": "WIKA Target EBITDA Rp850 M Tutup Utang Rp27 T [Restrukturisasi]",
  "deck": "Public expose WIKA mengungkap target EBITDA Rp850 miliar untuk membayar utang berbunga sekitar Rp27 triliun, sambil restrukturisasi sukuk dan divestasi Whoosh masih berjalan.",
  "date": "6 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "restrukturisasi utang",
   "sukuk",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/26b71165c5_bbeaa47a11.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "king-dirikan-anak-usaha-baru-di-bisnis-keamanan",
  "category": "Aksi Korporasi",
  "title": "KING Dirikan Anak Usaha Baru di Bisnis [Keamanan]",
  "deck": "PT Hoffmen Cleanindo Tbk (KING) mendirikan PT Galaksi Hoffmen Sekuritindo dengan kepemilikan 70%, khusus menggarap jasa penyedia tenaga keamanan.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KING",
   "anak usaha",
   "jasa keamanan",
   "ekspansi bisnis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0c216d3c58_f26d852610.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-kucurkan-pinjaman-rp4-triliun-ke-nac-dan-ngc-afiliasi",
  "category": "Aksi Korporasi",
  "title": "MGLV Kucurkan Pinjaman Rp4 Triliun ke NAC dan NGC [Afiliasi]",
  "deck": "NexAI Digital Infrastruktur menyalurkan pinjaman pemegang saham senilai total Rp4 triliun ke dua anak usahanya tanpa jaminan, dan dikecualikan dari persetujuan RUPS karena tergolong transaksi afiliasi.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "transaksi afiliasi",
   "transaksi material",
   "pinjaman pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1c3f77ef5a_5e945725aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direktur-tambah-saham-7-3-juta-lembar-lewat-pembelian",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direktur [Tambah] Saham 7,3 Juta Lembar Lewat Pembelian",
  "deck": "Direktur ITSEC Asia (CYBR), Patrick Rudolf Dannacher, membeli 7,31 juta saham secara tidak langsung sepanjang akhir September 2026, menambah hak suaranya menjadi 0,797 persen.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-7781-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-gama-disuspensi-penuh-bei-soal-going-concern",
  "category": "Aksi Korporasi",
  "title": "Saham GAMA Disuspensi Penuh BEI, Soal [Going Concern]",
  "deck": "Bursa menghentikan sementara perdagangan saham Aksara Global Development (GAMA) di seluruh pasar mulai 6 Oktober 2026 karena keraguan atas kelangsungan usaha perusahaan.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GAMA",
   "suspensi saham",
   "going concern",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/175c6b4197_ad70df7169.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjbr-pertahankan-rating-aa-idn-dari-fitch-npl-naik-3-3",
  "category": "Aksi Korporasi",
  "title": "BJBR Pertahankan Rating AA-(idn) dari Fitch, [NPL] Naik 3,3%",
  "deck": "Fitch Ratings mengafirmasi peringkat bank bjb di AA-(idn) dengan outlook stabil, namun mencatat rasio kredit bermasalah naik ke 3,3 persen dan margin laba yang mulai menyempit.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBR",
   "bank bjb",
   "Fitch Ratings",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/12baf3f7d7_9d0955b23d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kesejahteraan-rakyat-jadi-tolok-ukur-sukses-ekonomi",
  "category": "Makroekonomi",
  "title": "Kesejahteraan Rakyat Jadi [Tolok Ukur] Sukses Ekonomi",
  "deck": "Penulis buku Ekonomi Pancasila, Djoni Sudjatmoko, menilai kesejahteraan rakyat, bukan sekadar angka pertumbuhan, seharusnya jadi ukuran utama keberhasilan pembangunan ekonomi.",
  "date": "5 Oktober 2026",
  "image": "assets/img/kesejahteraan-rakyat-jadi-tolok-ukur-sukses-ekonomi.jpg",
  "imageV": "muve5ibt",
  "tags": [
   "UMKM",
   "Ekonomi Pancasila",
   "MBG",
   "KDMP"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471338-kesejahteraan-rakyat-jadi-indikator-utama-keberhasilan-pembangunan-ekonomi-indonesia"
 },
 {
  "slug": "mljk-angkat-oemi-vierta-moerdika-jadi-direktur-utama",
  "category": "Aksi Korporasi",
  "title": "MLJK Angkat Oemi Vierta Moerdika Jadi [Direktur Utama]",
  "deck": "PT Marga Lingkar Jakarta mengangkat Oemi Vierta Moerdika sebagai Direktur Utama baru efektif 5 Oktober 2026 lewat keputusan sirkuler pemegang saham atas usulan Jasa Marga.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MLJK",
   "Direktur Utama",
   "Marga Lingkar Jakarta",
   "Jasa Marga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c6d4a0c06c_7f49614b57.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rantai-nilai-halal-tumbuh-6-2-bi-dorong-ekosistem-syariah",
  "category": "Makroekonomi",
  "title": "Rantai Nilai Halal Tumbuh 6,2%, BI Dorong Ekosistem [Syariah]",
  "deck": "Bank Indonesia mendorong penguatan ekosistem ekonomi syariah lewat tiga aspek: sektor riil, pembiayaan, dan literasi masyarakat, sembari menyiapkan ISEF 2026 pertengahan Oktober di Jakarta.",
  "date": "5 Oktober 2026",
  "image": "assets/img/rantai-nilai-halal-tumbuh-6-2-bi-dorong-ekosistem-syariah.jpg",
  "imageV": "muv8ojpo",
  "tags": [
   "ekonomi syariah",
   "Bank Indonesia",
   "ISEF 2026",
   "industri halal"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "gtbo-jawab-bursa-rincian-rkab-kontrak-dan-piutang-massicot",
  "category": "Aksi Korporasi",
  "title": "GTBO Jawab Bursa: Rincian [RKAB], Kontrak, dan Piutang Massicot",
  "deck": "GTBO menjelaskan ke Bursa bahwa RKAB 2026 sudah disetujui ESDM, produksi batu bara dimulai lagi pertengahan Oktober, dan piutang dari Massicot senilai US$45 juta mulai dibayar lebih cepat dari jadwal.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "RKAB",
   "batu bara",
   "Massicot Trade Limited"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3c4407d62f_73ab960742.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-tunda-rupslb-pmhmetd-tertahan-ojk",
  "category": "Aksi Korporasi",
  "title": "KOTA Tunda RUPSLB, [PMHMETD] Tertahan OJK",
  "deck": "RUPSLB KOTA yang dijadwalkan 6 Oktober 2026 ditunda tanpa jadwal pengganti karena OJK masih meminta informasi tambahan terkait rencana rights issue dan transaksi material.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "rights issue",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8bac562783_43e46d7289.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-catat-81-878-saham-baru-serapan-rights-issue-masih-tipis",
  "category": "Aksi Korporasi",
  "title": "BAJA catat [81.878] saham baru, serapan rights issue masih tipis",
  "deck": "BEI mencatat tambahan 81.878 saham baru BAJA dari pelaksanaan HMETD 2 Oktober 2026, namun baru 247.823 dari jatah 900 juta saham yang terserap.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "rights issue",
   "HMETD",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e7ae2274fe_af04dba778.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsbk-tetapkan-jadwal-cum-dividen-interim-cair-20-oktober",
  "category": "Aksi Korporasi",
  "title": "BSBK Tetapkan Jadwal [Cum Dividen] Interim, Cair 20 Oktober",
  "deck": "Wulandari Bangun Laksana (BSBK) merinci tanggal cum dan ex dividen interim Rp25,09 miliar, dengan pembayaran dijadwalkan 20 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSBK",
   "dividen interim",
   "properti",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/73ef699ad3_d5249e0db4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsbk-bagikan-dividen-interim-rp25-09-miliar-untuk-h1-2026",
  "category": "Aksi Korporasi",
  "title": "BSBK Bagikan [Dividen] Interim Rp25,09 Miliar untuk H1 2026",
  "deck": "BSBK akan membagikan dividen interim Rp1 per saham, total Rp25,09 miliar, dari laba bersih semester I 2026. Pembayaran dijadwalkan 20 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSBK",
   "dividen interim",
   "Wulandari Bangun Laksana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ca71eaa0ac_bdf83f9f19.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tguk-vcg-tunjuk-pelaksana-tender-offer-wajib",
  "category": "Aksi Korporasi",
  "title": "TGUK: VCG Tunjuk Pelaksana [Tender Offer] Wajib",
  "deck": "Usai kuasai 56,84% saham TGUK senilai Rp40,6 miliar, VCG menunjuk PT Artha Global Trikanaka Investama menjalankan tender offer wajib bagi pemegang saham publik.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "tender offer",
   "pengambilalihan",
   "VCG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e9711ff07f_c9b006e99a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-vktr-beli-15-juta-saham-senilai-rp10-8-miliar",
  "category": "Aksi Korporasi",
  "title": "Direksi [VKTR] Beli 15 Juta Saham Senilai Rp10,8 Miliar",
  "deck": "Direktur VKTR V Bimo Kurniatmoko membeli 15 juta saham VKTR secara tidak langsung senilai Rp10,8 miliar pada 30 September 2026, mengubah hak suaranya dari nol menjadi 0,03 persen.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "kepemilikan saham",
   "direksi",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-6612-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arta-pastikan-tak-ada-fakta-material-picu-volatilitas-harga-saham",
  "category": "Aksi Korporasi",
  "title": "ARTA pastikan tak ada [fakta material] picu volatilitas harga saham",
  "deck": "Menanggapi permintaan Bursa Efek Indonesia soal pergerakan harga sahamnya yang tidak wajar, Arthavest menyatakan tidak mengetahui ada informasi material yang belum diungkap ke publik.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTA",
   "Arthavest Tbk",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f32be5037b_6e3a1966e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-tak-ada-informasi-material-di-balik-gejolak-sahamnya",
  "category": "Aksi Korporasi",
  "title": "DEWI: Tak Ada [Informasi Material] di Balik Gejolak Sahamnya",
  "deck": "Menanggapi permintaan BEI atas gejolak harga saham pada 23 September 2026, DEWI menyatakan tak ada informasi material dan pemegang saham utama berkomitmen tidak melepas kepemilikannya.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/73bdd2104a_039cf4f372.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-ungkap-profil-pengendali-baru-imbs-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "KETR Ungkap Profil Pengendali Baru [IMBS] ke Bursa",
  "deck": "Ketrosden Triasmitra menjawab permintaan penjelasan Bursa dengan membuka profil lengkap PT Inti Mas Bangun Sejahtera, pemilik manfaat akhir, dan status tender wajib bagi pemegang saham publik.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "IMBS",
   "pengendali saham",
   "DSSA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a3e3186975_8c5d8334ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-bagikan-dividen-interim-rp72-52-per-saham",
  "category": "Aksi Korporasi",
  "title": "AUTO Bagikan Dividen Interim [Rp72,52] per Saham",
  "deck": "Astra Otoparts akan membagikan dividen interim Rp72,52 per saham, total Rp349,5 miliar, dengan pembayaran pada 26 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "dividen interim",
   "Astra Otoparts",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5a7421f8d5_061a7b79c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-paparkan-kinerja-h1-2026-transaksi-melonjak-273",
  "category": "Aksi Korporasi",
  "title": "CASH Paparkan Kinerja H1 2026, [Transaksi] Melonjak 273%",
  "deck": "Materi public expose tahunan ke BEI memuat kinerja semester I 2026 Cashlez (CASH): transaksi naik 273 persen, laba kotor naik 21 persen dibanding tahun lalu.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2ab2abdb9e_e81bc7cecf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-tetapkan-konversi-utang-jadi-saham-rupslb-7-oktober",
  "category": "Aksi Korporasi",
  "title": "APEX Tetapkan [Konversi] Utang Jadi Saham, RUPSLB 7 Oktober",
  "deck": "Apexindo menjawab permintaan OJK ketiga kalinya soal rencana konversi utang US$4,1 juta menjadi 218 juta saham baru seri B, dengan RUPSLB digelar 7 Oktober dan realisasi ditargetkan 20 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "konversi utang",
   "PMTHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d7a331c211_e102cffef9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-free-float-naik-ke-14-73-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "ASBI: [Free Float] Naik ke 14,73% per September 2026",
  "deck": "Laporan bulanan BEI mencatat porsi saham publik ASBI naik ke 14,73%, sementara struktur pengendali dan direksi tidak berubah.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "pemegang saham",
   "free float",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c903037d9c_64bd0eb878.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kjen-jawab-bei-tak-ada-informasi-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "KJEN Jawab BEI: Tak Ada Informasi Material soal [Volatilitas] Saham",
  "deck": "Merespons surat Bursa Efek Indonesia soal lonjakan transaksi, KJEN menyatakan tidak ada informasi material yang belum diungkap maupun rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KJEN",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7109b50837_8691ad4ed6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mang-koreksi-laporan-dana-ipo-uang-muka-rp66-m-belum-terpakai",
  "category": "Aksi Korporasi",
  "title": "MANG Koreksi Laporan Dana IPO, [Uang Muka] Rp66 M Belum Terpakai",
  "deck": "PT Manggung Polahraya Tbk mengoreksi laporan dana IPO Rp73,39 miliar. Sebagian besar dana tercatat sebagai uang muka yang baru ditargetkan terpakai penuh pada 2029.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MANG",
   "Penggunaan Dana IPO",
   "Konstruksi",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bcd89dac56_cac855f9e3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbyb-dirut-eri-budiono-mundur-dari-bank-neo-commerce",
  "category": "Aksi Korporasi",
  "title": "BBYB: Dirut Eri Budiono [Mundur] dari Bank Neo Commerce",
  "deck": "Eri Budiono mengajukan pengunduran diri dari jabatan Direktur Utama Bank Neo Commerce (BBYB) sejak 2 Oktober 2026, menunggu persetujuan RUPS.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBYB",
   "Bank Neo Commerce",
   "Direksi",
   "Pengunduran Diri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9cbc9b0704_3ad011b9d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medp-ganti-komisaris-independen-rombak-komite-remunerasi",
  "category": "Aksi Korporasi",
  "title": "MEDP ganti komisaris independen, rombak komite [remunerasi]",
  "deck": "Dewan Komisaris MEDP mengangkat Ego Syahrial sebagai Komisaris Independen baru dan menyusun ulang Komite Nominasi dan Remunerasi efektif 1 Oktober 2026 hingga 31 Maret 2028.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "komite nominasi dan remunerasi",
   "komisaris independen",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/26677911b5_98afdfc363.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medp-ganti-ketua-komite-audit-ego-syahrial-naik",
  "category": "Aksi Korporasi",
  "title": "MEDP Ganti Ketua [Komite Audit], Ego Syahrial Naik",
  "deck": "Komite Audit PT Medco Power Indonesia (MEDP) kini dipimpin Ego Syahrial, menggantikan M. Teguh Pamuji, menyusul pergantian komisaris independen efektif 1 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "komite audit",
   "tata kelola perusahaan",
   "Medco Power"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/11279e9003_8ca82d33fa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpkr-jelaskan-transaksi-lippo-plaza-kupang-rp403-8-m-akuisisi",
  "category": "Aksi Korporasi",
  "title": "LPKR Jelaskan Transaksi Lippo Plaza Kupang Rp403,8 M [Akuisisi]",
  "deck": "Lippo Karawaci menjawab permintaan penjelasan BEI soal pengalihan Lippo Plaza Kupang dari Nusa Bahana Niaga ke anak usahanya, Bumi Sarana Sejahtera, senilai Rp403,80 miliar.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPKR",
   "Lippo Karawaci",
   "Lippo Plaza Kupang",
   "First REIT"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1aa05d2f28_e4b3281c55.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "merk-catat-impairment-rp87-miliar-kontrak-p-g-berakhir-2027",
  "category": "Aksi Korporasi",
  "title": "MERK Catat [Impairment] Rp87 Miliar, Kontrak P&G Berakhir 2027",
  "deck": "Merck Tbk mencatat penurunan nilai aset Rp87 miliar di pabrik Pasar Rebo karena kontrak manufaktur dengan P&G, pemasok 80 persen volume produksi, berakhir akhir 2027.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MERK",
   "Public Expose",
   "Impairment Aset",
   "Farmasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a00bbd15e9_322670dab1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hgii-direksi-robin-sunyoto-tambah-50-000-saham-di-rp134",
  "category": "Aksi Korporasi",
  "title": "HGII: Direksi Robin Sunyoto [tambah] 50.000 saham di Rp134",
  "deck": "Direksi HGII Robin Sunyoto membeli 50.000 saham pada 29 September 2026 di harga Rp134, menambah kepemilikannya menjadi 16,55 juta saham tanpa mengubah hak suara 0,25 persen.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HGII",
   "kepemilikan saham",
   "direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-7168-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "blog-rampung-dana-ipo-rp138-2-miliar-untuk-gudang-pendingin-dan-truk",
  "category": "Aksi Korporasi",
  "title": "BLOG [Rampung] Dana IPO Rp138,2 Miliar untuk Gudang Pendingin dan Truk",
  "deck": "BLOG melaporkan seluruh dana Rp138,23 miliar hasil IPO Juli 2025 sudah terpakai 100 persen per 30 Juni 2026, untuk gudang pendingin dan armada truk.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLOG",
   "IPO",
   "Penggunaan Dana",
   "Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/99b1ba2e2b_264dfd9ff2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amrt-bagikan-dividen-interim-rp14-5-per-saham-cair-27-oktober",
  "category": "Aksi Korporasi",
  "title": "AMRT Bagikan [Dividen] Interim Rp14,5 per Saham, Cair 27 Oktober",
  "deck": "Sumber Alfaria Trijaya akan membagikan dividen interim tunai Rp595,8 miliar atau Rp14,5 per saham, dengan pencatatan 15 Oktober dan pembayaran 27 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMRT",
   "dividen interim",
   "Sumber Alfaria Trijaya",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c9b7891b8c_521b0f442f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-menang-gugatan-pkpu-dari-dua-kreditur-proyek-jambi-dicabut",
  "category": "Aksi Korporasi",
  "title": "PTPP Menang, Gugatan [PKPU] dari Dua Kreditur Proyek Jambi Dicabut",
  "deck": "Pengadilan Niaga Jakarta Pusat mencabut permohonan PKPU terhadap PTPP yang diajukan dua kreditur proyek Museum KCBN Muarajambi, menyusul suspensi saham akibat gagal bayar bunga obligasi.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "PKPU",
   "hukum",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c227cb237b_f9d4e7681e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sona-laba-semester-i-naik-27-tender-wajib-rampung",
  "category": "Aksi Korporasi",
  "title": "SONA: Laba Semester I [Naik] 27%, Tender Wajib Rampung",
  "deck": "Materi public expose SONA memuat laba bersih semester I 2026 naik 27,37% jadi Rp32,52 miliar, dividen Rp52,83 per saham, dan penyelesaian tender wajib pasca akuisisi.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SONA",
   "public expose",
   "laba bersih",
   "tender wajib"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ce4d4d1b46_3560ec0735.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kios-panggil-rupslb-agendakan-perubahan-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "KIOS Panggil RUPSLB, Agendakan [Perubahan] Susunan Direksi",
  "deck": "Kioson Komersial Indonesia menjadwalkan RUPSLB 27 Oktober 2026 dengan agenda perubahan susunan direksi dan komisaris, serta penyesuaian anggaran dasar mengikuti klasifikasi usaha baru BPS.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIOS",
   "RUPSLB",
   "Direksi",
   "Kioson Komersial"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a52d4c55a3_ee48ffe260.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medp-rombak-direksi-dan-komisaris-eka-satria-jadi-dirut",
  "category": "Aksi Korporasi",
  "title": "MEDP [Rombak] Direksi dan Komisaris, Eka Satria Jadi Dirut",
  "deck": "PT Medco Power Indonesia mengganti seluruh Direksi dan Dewan Komisaris lewat keputusan sirkuler pemegang saham efektif 1 Oktober 2026, untuk masa jabatan lima tahun.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "Direksi",
   "Dewan Komisaris",
   "Medco Power"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ab9a0001df_5f87ed030c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-panggil-rupslb-27-oktober-bahas-pmthmetd-dan-kbli",
  "category": "Aksi Korporasi",
  "title": "UVCR Panggil RUPSLB 27 Oktober, Bahas [PMTHMETD] dan KBLI",
  "deck": "RUPSLB UVCR digelar 27 Oktober 2026 untuk menyetujui rencana penambahan modal tanpa hak memesan efek terlebih dahulu (PMTHMETD) dan perubahan anggaran dasar terkait KBLI 2025.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "RUPSLB",
   "PMTHMETD",
   "Ultra Voucher"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7dbc2bd289_188e2fad8a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-asii-disesuaikan-usai-dividen-rp3-89-t",
  "category": "Aksi Korporasi",
  "title": "DR: Waran ASII Disesuaikan usai [Dividen] Rp3,89 T",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur ASII menyusul dividen tunai Rp98 per saham dari Astra International.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "ASII",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/76fa9ecd23_726f6fba28.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "talf-komitmen-beli-solvent-rp398-m-dari-bluesky-10-tahun",
  "category": "Aksi Korporasi",
  "title": "TALF Komitmen Beli Solvent [Rp398 M] dari Bluesky 10 Tahun",
  "deck": "TALF meneken perjanjian pembelian solvent daur ulang dari PT Bluesky Technology Indonesia senilai Rp398,66 miliar untuk 10 tahun, setara 29,9 persen ekuitas perusahaan.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TALF",
   "transaksi material",
   "POJK 17/2020",
   "solvent"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c744e72008_b0cbb701dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-rupslb-27-oktober-akuisisi-frisian-flag-lewat-rights-issue",
  "category": "Aksi Korporasi",
  "title": "ULTJ RUPSLB 27 Oktober, Akuisisi [Frisian Flag] Lewat Rights Issue",
  "deck": "ULTJ mengundang pemegang saham ke RUPSLB 27 Oktober 2026 untuk menyetujui rights issue yang dibayar dengan 100% saham PT Frisian Flag Indonesia, bukan uang tunai.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "RUPSLB",
   "Frisian Flag",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ef0f45f1d8_2115dbaf50.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-syarat-3-waran-asii-usai-dividen-interim",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Syarat 3 Waran ASII Usai [Dividen] Interim",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi tiga waran terstruktur ASII setelah Astra International bagi dividen interim Rp98 per saham.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "ASII",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b22cf7ebfa_09f038faac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "flmc-ekuitas-negatif-rugi-semester-i-melonjak-ke-rp23-3-m",
  "category": "Aksi Korporasi",
  "title": "FLMC Ekuitas Negatif, Rugi Semester I [Melonjak] ke Rp23,3 M",
  "deck": "Aset FLMC turun 32,6 persen dan ekuitas berbalik negatif Rp2,59 miliar setelah rugi bersih semester I 2026 melonjak jadi Rp23,27 miliar dari Rp2,99 miliar tahun lalu.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "ekuitas negatif",
   "rugi bersih",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261005162301-64488-0/FinancialStatement-2026-II-FLMC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-gelar-public-expose-insidentil-20-oktober",
  "category": "Aksi Korporasi",
  "title": "SMMT Gelar [Public Expose] Insidentil 20 Oktober",
  "deck": "Golden Eagle Energy (SMMT) akan menggelar public expose insidentil secara daring pada 20 Oktober 2026, salah satu agendanya membahas pergerakan harga sahamnya sendiri.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "Golden Eagle Energy",
   "Public Expose",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/26bed50dc1_3139db8103.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-r-perdagangan-hmetd-fortune-indonesia-berakhir-6-oktober",
  "category": "Aksi Korporasi",
  "title": "FORU-R: Perdagangan [HMETD] Fortune Indonesia Berakhir 6 Oktober",
  "deck": "Bursa mengingatkan masa perdagangan hak memesan saham baru FORU-R berakhir 6 Oktober 2026, sehari setelah itu hak tersebut dihapus dari pencatatan BEI.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "HMETD",
   "rights issue",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Batas Akhir Perdagangan FORU-R261006-No. Peng-00188BEI.POP10-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bswd-gelar-public-expose-insidental-atas-permintaan-ojk",
  "category": "Aksi Korporasi",
  "title": "BSWD Gelar Public Expose Insidental atas Permintaan [OJK]",
  "deck": "Bank of India Indonesia Tbk akan menggelar paparan publik insidental pada 8 Oktober 2026 menyusul permintaan OJK, membahas kinerja terkini hingga informasi material lainnya.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "Bank of India Indonesia",
   "Public Expose",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/95d89140da_cfa214edb7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsim-ganti-susunan-komite-audit-efektif-1-oktober",
  "category": "Aksi Korporasi",
  "title": "BSIM Ganti Susunan [Komite Audit], Efektif 1 Oktober",
  "deck": "Bank Sinarmas merombak Komite Audit, Rusmin Sammy jadi ketua baru menggantikan Kristamuljana, berlaku sejak 1 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSIM",
   "Komite Audit",
   "Bank Sinarmas",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6f0346d08e_68fab34460.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-repo-turunkan-saham-suara-ke-34-60",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi [Repo] Turunkan Saham, Suara ke 34,60%",
  "deck": "Samuel Sekuritas Indonesia selaku direksi NSSS menjual 147 juta saham lewat skema repo dan membeli kembali 108 juta saham, hak suaranya turun tipis ke 34,60%.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo",
   "direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-7470-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-gelar-dialog-global-soal-royalti-hak-cipta",
  "category": "Teknologi",
  "title": "Indonesia Gelar Dialog Global soal [Royalti] Hak Cipta",
  "deck": "DJKI menggelar forum internasional di Bali, 7-9 Oktober 2026, membahas tata kelola royalti hak cipta lintas negara di tengah maraknya streaming dan AI.",
  "date": "5 Oktober 2026",
  "image": "assets/img/indonesia-gelar-dialog-global-soal-royalti-hak-cipta.jpg",
  "imageV": "muv3elmg",
  "tags": [
   "royalti",
   "hak cipta",
   "DJKI",
   "digitalisasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471299-indonesia-gelar-dialog-global-bahas-tata-kelola-royalti-hak-cipta-lintas-negara"
 },
 {
  "slug": "bksl-direksi-tambah-saham-lewat-repo-suara-ke-5-59",
  "category": "Aksi Korporasi",
  "title": "BKSL: Direksi Tambah Saham Lewat [Repo], Suara ke 5,59%",
  "deck": "Direksi Sentul City menambah 683,9 juta saham lewat perjanjian repo seharga Rp55 per saham pada 5 Oktober 2026, menaikkan hak suaranya dari 5,18% menjadi 5,59%.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-1915-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-tambah-20-6-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi Tambah [20,6 Juta] Saham Lewat Repo",
  "deck": "Direksi FILM menambah bersih 20,6 juta saham lewat mekanisme repo pada 5 Oktober 2026, hak suara naik dari 9,00% menjadi 9,19%.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "kepemilikan saham",
   "repo saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-8376-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fwct-jawab-bei-penjualan-turun-35-67-dan-catat-rugi",
  "category": "Aksi Korporasi",
  "title": "FWCT Jawab BEI, Penjualan Turun 35,67% dan Catat [Rugi]",
  "deck": "PT Wijaya Cahaya Timber (FWCT) menjelaskan ke BEI soal penjualan yang turun 35,67% dan rugi Rp25,65 miliar, serta membantah mengenal direksi bernama Indra Satriawan dalam laporan kepemilikan saham.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "kayu lapis",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cbb4764540_5cc770ed8c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "drma-komisaris-beli-5-juta-saham-rp800-per-lembar",
  "category": "Aksi Korporasi",
  "title": "DRMA: Komisaris Beli [5 Juta] Saham, Rp800 per Lembar",
  "deck": "Komisaris Dharma Polimetal, Noel Aelyo Laras Kusuma Negara, membeli 5 juta saham DRMA secara tidak langsung senilai sekitar Rp4 miliar, mengangkat hak suaranya ke 1,80 persen.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Dharma Polimetal",
   "komisaris",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-2674-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kras-terima-rp130-74-miliar-dari-kerja-sama-lahan-dengan-cabot",
  "category": "Aksi Korporasi",
  "title": "KRAS Terima [Rp130,74 Miliar] dari Kerja Sama Lahan dengan Cabot",
  "deck": "Krakatau Steel mendayagunakan lahan sekitar 60.000 meter persegi kepada PT Cabot Indonesia melalui anak usahanya, PT KSI, senilai Rp130,74 miliar untuk membayar kewajiban restrukturisasi kredit.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRAS",
   "Krakatau Steel",
   "restrukturisasi utang",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/262b247ff3_84a5ec3878.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "poli-paparkan-kinerja-setahun-soroti-obligasi-berkelanjutan-rp500-m",
  "category": "Aksi Korporasi",
  "title": "POLI Paparkan Kinerja Setahun, Soroti Obligasi [Berkelanjutan] Rp500 M",
  "deck": "Pollux Hotels Group merilis materi Public Expose Tahunan 2026, memuat obligasi berkelanjutan Rp500 miliar, kemitraan dengan Accor dan Marriott, serta klarifikasi UMA Januari 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POLI",
   "Pollux Hotels Group",
   "obligasi berkelanjutan",
   "Accor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/09b218b33f_99af9d221d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-siapkan-rp266-95-miliar-lunasi-obligasi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "TPIA Siapkan Rp266,95 Miliar Lunasi [Obligasi] Jatuh Tempo",
  "deck": "Chandra Asri Pacific menyatakan dana sudah siap untuk melunasi pokok Obligasi Berkelanjutan III Seri A senilai Rp266,95 miliar yang jatuh tempo 29 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "obligasi",
   "Chandra Asri Pacific",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6c762c5228_606e9edcdf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmbl-jadwalkan-rupslb-11-november-2026-dps-19-oktober",
  "category": "Aksi Korporasi",
  "title": "BMBL Jadwalkan [RUPSLB] 11 November 2026, DPS 19 Oktober",
  "deck": "Lavender Bina Cendikia menjadwalkan RUPSLB pada 11 November 2026 di Depok. Agenda rapat belum diumumkan, baru akan dirilis lewat pemanggilan resmi pada 20 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "RUPSLB",
   "Lavender Bina Cendikia",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ce9c5ff285_9d45fc08fe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-rombak-direksi-saiko-resmi-jadi-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "NAYZ Rombak Direksi, [SAIKO] Resmi Jadi Pemegang Saham",
  "deck": "RUPSLB NAYZ menyetujui dua direksi/komisaris baru asal Thailand dan menegaskan masuknya SAIKO Consultancy Pte Ltd sebagai pemegang saham baru Perseroan.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "RUPSLB",
   "Direksi",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c7e92289f9_d780a8c59d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcic-holding-jepang-siapkan-suntikan-modal-akhir-2026",
  "category": "Aksi Korporasi",
  "title": "BCIC: Holding Jepang Siapkan [Suntikan Modal] Akhir 2026",
  "deck": "Dalam paparan publik tahunan, manajemen Bank JTrust Indonesia mengungkap rencana suntikan modal dari induk usaha di Jepang, laba semester I Rp80 miliar yang belum kena pajak, dan NPL yang turun.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCIC",
   "JTrust Indonesia",
   "perbankan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ffd3e7696c_a89ca61310.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pyfa-usulkan-pelunasan-obligasi-dipercepat-ke-desember-2026",
  "category": "Aksi Korporasi",
  "title": "PYFA Usulkan [Pelunasan] Obligasi Dipercepat ke Desember 2026",
  "deck": "Pyridam Farma mengundang pemegang Obligasi Berkelanjutan I Tahap I 2022 ke RUPO 19 Oktober 2026 untuk menyetujui pelunasan lebih awal pada 7 Desember 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PYFA",
   "obligasi",
   "RUPO",
   "Pyridam Farma"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7d4be8eaa1_142be00ca2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-ajukan-penyesuaian-kbli-dan-ubah-penggunaan-dana",
  "category": "Aksi Korporasi",
  "title": "CASH Ajukan [Penyesuaian] KBLI dan Ubah Penggunaan Dana",
  "deck": "Cashlez mengajukan penyesuaian kode usaha KBLI 2025, tiga lini bisnis baru, dan perubahan penggunaan dana rights issue Rp235,5 miliar untuk RUPSLB 8 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez",
   "RUPSLB",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ff4d047c65_2ce2c59994.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uniq-jelaskan-ke-bursa-soal-lonjakan-harga-saham",
  "category": "Aksi Korporasi",
  "title": "UNIQ Jelaskan ke Bursa soal [Lonjakan] Harga Saham",
  "deck": "PT Ulima Nitra Tbk menyatakan tidak ada informasi material atau perubahan pemegang saham besar di balik lonjakan harga sahamnya, menjawab permintaan penjelasan BEI.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNIQ",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "Ulima Nitra"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/43a38f2f53_de1c5fd0bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supr-suspensi-dibuka-sementara-untuk-crossing-saham-vto",
  "category": "Aksi Korporasi",
  "title": "SUPR: Suspensi Dibuka Sementara untuk Crossing Saham [VTO]",
  "deck": "BEI membuka sementara suspensi SUPR khusus di pasar negosiasi untuk crossing saham hasil tender offer Protelindo, lalu menutupnya lagi paling lambat pukul 14.00 WIB hari ini.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "delisting",
   "tender offer",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cb302ad14a_ebb7da427c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indo-saham-terkonsentrasi-94-96-di-tangan-terbatas",
  "category": "Aksi Korporasi",
  "title": "INDO: Saham [Terkonsentrasi] 94,96% di Tangan Terbatas",
  "deck": "BEI dan KSEI mengumumkan 94,96% saham INDO dikuasai sejumlah pemegang saham terbatas per 30 September 2026, menyisakan sedikit saham yang beredar bebas di pasar.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDO",
   "BEI",
   "KSEI",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/182cdbb532_19baba3a8d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-akuisisi-75-saham-btl-senilai-us-125-juta",
  "category": "Aksi Korporasi",
  "title": "NAYZ Akuisisi 75% Saham BTL Senilai [US$125 Juta]",
  "deck": "NAYZ menandatangani perjanjian pengalihan saham bersyarat untuk mengambil alih 75% saham BTL dari Saiko, pemegang saham pengendali, senilai maksimal US$125 juta.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "akuisisi",
   "transaksi afiliasi",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1051a669e9_0e58cd0def.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meja-lunasi-utang-rp3-miliar-ke-bca",
  "category": "Aksi Korporasi",
  "title": "MEJA Lunasi [Utang] Rp3 Miliar ke BCA",
  "deck": "PT Harta Djaya Karya Tbk melunasi fasilitas KMK Rp2 miliar dan KRK Rp1 miliar ke BCA pada 30 September 2026, total Rp3 miliar.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "BCA",
   "utang",
   "pelunasan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/705f9371f5_460bd43291.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppri-koreksi-laporan-realisasi-dana-ipo-sisa-rp8-5-m-di-deposito",
  "category": "Aksi Korporasi",
  "title": "PPRI Koreksi Laporan Realisasi Dana IPO, Sisa Rp8,5 M di [Deposito]",
  "deck": "Paperocks Indonesia mengoreksi laporan realisasi dana IPO per 30 Juni 2026: 75,56 persen sudah dipakai untuk modal kerja, sisa Rp8,5 miliar disimpan di deposito Bank Maybank.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRI",
   "penggunaan dana IPO",
   "laporan keuangan",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fcfd9991fc_1defe0aa8e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtel-ganti-anggota-komite-nominasi-dan-remunerasi",
  "category": "Aksi Korporasi",
  "title": "MTEL Ganti Anggota [Komite Nominasi] dan Remunerasi",
  "deck": "Imam Suhadi, pihak dari luar perusahaan, masuk menggantikan Yudith Dwi Anggraeni di Komite Nominasi dan Remunerasi Mitratel, berlaku 30 September 2026 hingga 29 September 2029.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTEL",
   "Mitratel",
   "komite nominasi dan remunerasi",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/809b0e2684_33cd3ea4b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtel-rombak-komite-audit-satu-anggota-mundur",
  "category": "Aksi Korporasi",
  "title": "MTEL Rombak Komite Audit, Satu Anggota [Mundur]",
  "deck": "Mitratel mengubah susunan Komite Audit efektif 30 September 2026. Satu anggota mundur tanpa pengganti, komite menyusut dari empat menjadi tiga orang.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTEL",
   "Komite Audit",
   "Tata Kelola Perusahaan",
   "Mitratel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0cd342d10a_c79e194c6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-direksi-george-oetomo-tambah-50-000-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi George Oetomo [Tambah] 50.000 Saham Lagi",
  "deck": "Direksi TAPG, George Oetomo, menambah kepemilikan 50.000 saham lewat transaksi repurchase agreement senilai Rp1.900 per saham, transaksi ketiganya dalam sepekan terakhir.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-0374-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-bagikan-59-080-paket-sembako-di-hut-ke-28",
  "category": "Perbankan",
  "title": "Bank Mandiri Bagikan [59.080] Paket Sembako di HUT ke-28",
  "deck": "Merayakan HUT ke-28, Bank Mandiri menyalurkan santunan ke 2.800 anak yatim piatu dan 59.080 paket sembako lewat program TJSL Mandiri untuk Negeri di berbagai wilayah Indonesia.",
  "date": "5 Oktober 2026",
  "image": "assets/img/bank-mandiri-bagikan-59-080-paket-sembako-di-hut-ke-28.jpg",
  "imageV": "muxprslh",
  "tags": [
   "bank mandiri",
   "tjsl",
   "csr perbankan",
   "hut bank mandiri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471260-genap-28-tahun-bukti-komitmen-bank-mandiri-tumbuh-bersama-majukan-indonesia"
 },
 {
  "slug": "hut-ke-28-bank-mandiri-bagikan-bantuan-ke-berbagai-daerah",
  "category": "Perbankan",
  "title": "HUT ke-28 Bank Mandiri [Bagikan] Bantuan ke Berbagai Daerah",
  "deck": "Bank Mandiri menandai HUT ke-28 dengan menyalurkan santunan ke 2.800 anak yatim piatu dan 59.080 paket sembako lewat 2.110 cabang di seluruh Indonesia, disertai donor darah.",
  "date": "5 Oktober 2026",
  "image": "assets/img/hut-ke-28-bank-mandiri-bagikan-bantuan-ke-berbagai-daerah.jpg",
  "imageV": "muutq7a0",
  "tags": [
   "bank mandiri",
   "TJSL",
   "kegiatan sosial",
   "HUT bank mandiri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471260-28-tahun-bank-mandiri-hadir-dan-berbagi-manfaat-untuk-masyarakat"
 },
 {
  "slug": "pssi-tambah-enam-kapal-baru-armada-jadi-53-unit",
  "category": "Aksi Korporasi",
  "title": "PSSI Tambah [Enam] Kapal Baru, Armada Jadi 53 Unit",
  "deck": "IMC Pelita Logistik menambah dua kapal tunda dan empat tongkang baru buatan Batam untuk memperkuat armada angkutan dry bulk.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "IMC Pelita Logistik",
   "pelayaran",
   "dry bulk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/42dae40a29_ef75dbed70.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asdf-siapkan-rp304-5-miliar-untuk-lunasi-obligasi-4-november",
  "category": "Aksi Korporasi",
  "title": "ASDF Siapkan [Rp304,5 Miliar] untuk Lunasi Obligasi 4 November",
  "deck": "Astra Sedaya Finance (ASDF) menyatakan sudah menyiapkan dana Rp304,5 miliar untuk melunasi pokok dan kupon Obligasi Berkelanjutan VII Tahap II Seri A yang jatuh tempo 4 November 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDF",
   "obligasi",
   "Astra Sedaya Finance",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/10231e08e3_a023259500.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpk-direksi-tambah-kepemilikan-saham-47-100-lembar",
  "category": "Aksi Korporasi",
  "title": "PKPK: Direksi Tambah Kepemilikan Saham [47.100] Lembar",
  "deck": "Direktur Haryanto Sofian menambah kepemilikan saham PKPK sebanyak 47.100 lembar seharga Rp5.900 per saham, menaikkan hak suaranya dari 0,23% menjadi 0,24%.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PKPK",
   "kepemilikan saham",
   "direksi",
   "insider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-7342-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bafi-terbitkan-obligasi-dan-sukuk-tahap-ii-senilai-rp902-miliar",
  "category": "Aksi Korporasi",
  "title": "BAFI Terbitkan Obligasi dan Sukuk Tahap II Senilai [Rp902 Miliar]",
  "deck": "BAFI merevisi informasi tambahan penawaran Obligasi Berkelanjutan IV dan Sukuk Mudharabah II tahap II senilai Rp902,26 miliar, dengan rating AAA dari Fitch dan Pefindo.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAFI",
   "obligasi",
   "sukuk mudharabah",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cd9839c50a_3fc3fef3bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dana-pemulihan-bencana-sumut-dipercepat-rp4-82-triliun",
  "category": "Makroekonomi",
  "title": "Dana Pemulihan Bencana Sumut [Dipercepat] Rp4,82 Triliun",
  "deck": "Realisasi APBN Sumatera Utara sampai Agustus 2026 tumbuh dua digit, dengan dana tambahan pemulihan bencana Rp4,82 triliun sudah disalurkan ke kas daerah lewat aturan relaksasi baru.",
  "date": "5 Oktober 2026",
  "image": "assets/img/dana-pemulihan-bencana-sumut-dipercepat-rp4-82-triliun.jpg",
  "imageV": "muuofu3i",
  "tags": [
   "APBN",
   "Sumatera Utara",
   "Transfer ke Daerah",
   "Pemulihan Bencana"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/kinerja-apbn-di-provinsi-sumatera-utara-sampai-dengan-31-agustus-2026",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "bni-hormati-proses-hukum-dana-pascatambang-koba-tin",
  "category": "Perbankan",
  "title": "BNI [Hormati] Proses Hukum Dana Pascatambang Koba Tin",
  "deck": "BNI menyatakan kooperatif dengan aparat hukum soal dana jaminan pascatambang PT Koba Tin yang kini dalam status pailit.",
  "date": "5 Oktober 2026",
  "image": "assets/img/bni-hormati-proses-hukum-dana-pascatambang-koba-tin.jpg",
  "imageV": "muutq7oh",
  "tags": [
   "BNI",
   "PT Koba Tin",
   "dana pascatambang",
   "pailit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471246-bni-hormati-proses-hukum-terkait-dana-jaminan-pascatambang-pt-koba-tin-dalam-pailit"
 },
 {
  "slug": "dewa-rombak-dua-anggota-komite-audit-efektif-1-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "DEWA Rombak Dua Anggota [Komite Audit], Efektif 1 Oktober 2026",
  "deck": "Komite Audit Darma Henwa mengganti dua dari tiga anggotanya, menyisakan Agus Suharyono sebagai ketua, menyusul keputusan Dewan Komisaris yang berlaku sejak 1 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWA",
   "Komite Audit",
   "Tata Kelola Perusahaan",
   "Darma Henwa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8899a098f5_642af4dcc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-jawab-bursa-soal-arus-kas-negatif-imbas-konsolidasi",
  "category": "Aksi Korporasi",
  "title": "NICK Jawab Bursa Soal [Arus Kas] Negatif Imbas Konsolidasi",
  "deck": "NICK merinci ke Bursa kenapa penerimaan dari pelanggan di laporan arus kas Juni 2026 negatif Rp2,03 miliar, imbas konsolidasi dua anak usaha baru, Energindo Nusantara dan Okansa Pacific.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "arus kas",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f98a987e7d_755ad5002e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-victoria-investama-lepas-63-juta-saham-lagi-suara-7-36",
  "category": "Aksi Korporasi",
  "title": "BIPP: Victoria Investama [Lepas] 63 Juta Saham Lagi, Suara 7,36%",
  "deck": "Victoria Investama Tbk melepas 63 juta saham BIPP pada 2 Oktober 2026 seharga Rp60 per saham, hak suaranya turun dari 8,62% menjadi 7,36%.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "Victoria Investama",
   "kepemilikan saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-6724-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppri-direksi-jual-3-juta-saham-seharga-rp148",
  "category": "Aksi Korporasi",
  "title": "PPRI: Direksi [Jual] 3 Juta Saham Seharga Rp148",
  "deck": "Direksi Irsyad Hanif melepas 3 juta saham PPRI pada 1 Oktober 2026 dengan tujuan divestasi, menurunkan hak suaranya dari 14,29% menjadi 14,01%.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRI",
   "kepemilikan saham",
   "direksi",
   "insider trading"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-05102026-6462-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-buka-1-000-lapangan-kerja-baru-hingga-2028",
  "category": "Aksi Korporasi",
  "title": "TPIA Buka [1.000] Lapangan Kerja Baru hingga 2028",
  "deck": "Chandra Asri Group akan membuka lebih dari 1.000 lapangan kerja baru di Indonesia secara bertahap hingga 2028, seiring ekspansi tiga pilar bisnisnya.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "ketenagakerjaan",
   "ekspansi bisnis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f57e9777d3_43573e776b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-ptpp-kena-suspensi-usai-gagal-bayar-bunga-obligasi",
  "category": "Aksi Korporasi",
  "title": "Saham PTPP Kena [Suspensi] Usai Gagal Bayar Bunga Obligasi",
  "deck": "BEI menghentikan sementara perdagangan seluruh saham PTPP mulai Senin pagi, setelah perseroan menunda pembayaran bunga obligasi dan sukuk yang jatuh tempo 2 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "suspensi saham",
   "gagal bayar obligasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c30f96ddfb_f37bb41b67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mkpi-gelar-rupslb-27-oktober-bahas-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "MKPI Gelar RUPSLB 27 Oktober, Bahas [Anggaran Dasar]",
  "deck": "Metropolitan Kentjana Tbk memanggil RUPSLB pada 27 Oktober 2026 untuk membahas perubahan anggaran dasar dan penegasan susunan pemegang saham.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKPI",
   "RUPSLB",
   "Anggaran Dasar",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0e5c0ae21d_a0074abd5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-catatkan-98-9-juta-saham-baru-dari-hmetd",
  "category": "Aksi Korporasi",
  "title": "FORU Catatkan [98,9 Juta] Saham Baru dari HMETD",
  "deck": "BEI mencatat tambahan 98,99 juta saham baru FORU dari pelaksanaan HMETD per 1 Oktober 2026, sehingga total saham beredar perseroan kini mencapai 168,65 miliar lembar.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "rights issue",
   "HMETD",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/380ba1bd93_6a1787a823.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "otma-resmi-ganti-nama-jadi-pt-summit-oto-finance",
  "category": "Aksi Korporasi",
  "title": "OTMA Resmi Ganti Nama Jadi PT [Summit] Oto Finance",
  "deck": "Bursa mengumumkan perubahan nama emiten OTMA dari PT Oto Multiartha menjadi PT Summit Oto Finance, efektif 5 Oktober 2026, menyusul merger yang efektif sejak 1 Oktober 2026.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OTMA",
   "merger",
   "perubahan nama",
   "Summit Oto Finance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7a0abca7ac_5c3baac5d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-catat-tambahan-2-4-juta-saham-dari-konversi-owk",
  "category": "Aksi Korporasi",
  "title": "PACK catat tambahan 2,4 juta saham dari [konversi] OWK",
  "deck": "BEI mencatatkan 2.411.500 saham baru PACK hasil konversi obligasi wajib konversi, sehingga total saham beredar naik menjadi 34,12 miliar lembar.",
  "date": "5 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "OWK",
   "konversi obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3dbdf98180_089a03feaa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "investasi-harus-tumbuh-8-9-kejar-target-ekonomi-2027",
  "category": "Makroekonomi",
  "title": "Investasi Harus Tumbuh [8-9%] Kejar Target Ekonomi 2027",
  "deck": "Kemenko Perekonomian menyebut investasi perlu tumbuh 8-9 persen demi target pertumbuhan ekonomi 6 persen pada 2027, didukung transisi energi hijau dan digitalisasi.",
  "date": "4 Oktober 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "investasi",
   "transisi energi",
   "elektrifikasi",
   "pertumbuhan ekonomi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7125/pemerintah-akselerasi-energi-hijau-dan-digital-jadi-twin-engine-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pmi-manufaktur-ri-balik-ke-ekspansi-inflasi-terjaga-3-28",
  "category": "Makroekonomi",
  "title": "PMI Manufaktur RI [Balik] ke Ekspansi, Inflasi Terjaga 3,28%",
  "deck": "Inflasi September terjaga di 3,28 persen, neraca dagang Januari-Agustus surplus US$7,25 miliar, dan PMI manufaktur naik ke 52,4 setelah sempat kontraksi Agustus.",
  "date": "4 Oktober 2026",
  "image": "assets/img/jalan-tol-konstruksi.jpg",
  "tags": [
   "Inflasi",
   "Neraca Dagang",
   "PMI Manufaktur",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7126/tiga-indikator-ekonomi-menguat-fundamental-perekonomian-indonesia-tetap-terjaga",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ragam-bentala-bawa-batik-ke-gaya-harian-lewat-shopee",
  "category": "UMKM",
  "title": "Ragam Bentala Bawa Batik ke Gaya Harian lewat [Shopee]",
  "deck": "Brand lokal Ragam Bentala memperluas batik dari busana formal ke gaya sehari-hari lewat Official Store di Shopee, mengklaim pertumbuhan pesat sejak merambah pasar digital.",
  "date": "4 Oktober 2026",
  "image": "assets/img/ragam-bentala-bawa-batik-ke-gaya-harian-lewat-shopee.jpg",
  "imageV": "mut4krk0",
  "tags": [
   "shopee",
   "batik",
   "umkm",
   "ekonomi kreatif"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470996-dari-wastra-ke-gaya-sehari-hari-ragam-bentala-perluas-cerita-batik-indonesia-bersama-shopee"
 },
 {
  "slug": "atic-direktur-beli-30-000-saham-senilai-rp13-47-juta",
  "category": "Aksi Korporasi",
  "title": "ATIC: Direktur [Beli] 30.000 Saham Senilai Rp13,47 Juta",
  "deck": "Direktur Anabatic Technologies, Harry Surjanto Hambali, membeli 30.000 saham ATIC secara tidak langsung akhir September 2026, kepemilikannya naik tanpa mengubah hak suara di 3,17 persen.",
  "date": "3 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATIC",
   "Anabatic Technologies",
   "transaksi insider",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-03102026-6985-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-akui-rugi-bersih-rp19-18-miliar-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "BIKE Akui [Rugi] Bersih Rp19,18 Miliar ke Bursa",
  "deck": "BIKE menanggapi permintaan penjelasan BEI dengan mengungkap rugi bersih Rp19,18 miliar dan memastikan belum ada kontrak baru yang signifikan sejak laporan keuangan terakhir.",
  "date": "3 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "rugi bersih",
   "permintaan penjelasan bursa",
   "Pasar Minggu"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8027135dac_7e51f41709.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "perpres-baru-jadikan-gemarikan-gerakan-nasional",
  "category": "Industri",
  "title": "Perpres Baru Jadikan Gemarikan Gerakan [Nasional]",
  "deck": "Pemerintah menerbitkan Perpres Nomor 74 Tahun 2026 yang menjadikan Gemarikan gerakan nasional, dengan sasaran khusus ibu hamil, ibu menyusui, balita, anak-anak, dan remaja.",
  "date": "3 Oktober 2026",
  "image": "assets/img/perpres-baru-jadikan-gemarikan-gerakan-nasional.jpg",
  "imageV": "murytdrc",
  "tags": [
   "Gemarikan",
   "KKP",
   "Perpres",
   "Konsumsi Ikan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/gemarikan-jadi-gerakan-nasional-kkp-jamin-kualitas-dan-pasokan-ikan-bagi-masyarakat-8M4L.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "indonesia-jerman-incar-teken-ieu-cepa-tahun-ini",
  "category": "Global",
  "title": "Indonesia-Jerman Incar Teken [IEU-CEPA] Tahun Ini",
  "deck": "Menko Airlangga menargetkan penandatanganan IEU-CEPA tahun ini, bersamaan peringatan 74 tahun hubungan diplomatik Indonesia-Jerman yang nilai dagangnya mencapai US$6,11 miliar pada 2025.",
  "date": "3 Oktober 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "Indonesia-Jerman",
   "IEU-CEPA",
   "JETP",
   "Perdagangan Bilateral"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7123/tujuh-dekade-hubungan-diplomatik-indonesiajerman-menko-airlangga-dorong-kerja-sama-ekonomi-yang-semakin-konkret",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "emas-gadaikan-saham-anak-usaha-untuk-pinjaman-us-350-juta",
  "category": "Aksi Korporasi",
  "title": "EMAS Gadaikan Saham Anak Usaha untuk Pinjaman [US$350 Juta]",
  "deck": "Amendemen keterbukaan informasi EMAS merinci kreditur dan jaminan saham anak usaha PETS, GSM, dan PBT untuk fasilitas kredit hingga US$350 juta.",
  "date": "3 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "transaksi afiliasi",
   "gadai saham",
   "tambang emas Pani"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bc8314a64a_137830d844.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdka-terbitkan-obligasi-rp4-12-triliun-bunga-hingga-10",
  "category": "Aksi Korporasi",
  "title": "MDKA Terbitkan Obligasi [Rp4,12 Triliun], Bunga hingga 10%",
  "deck": "Merdeka Copper Gold menerbitkan obligasi tahap IV senilai Rp4,12 triliun dengan bunga tetap 8,25-10 persen per tahun, bagian dari program Rp15 triliun yang sudah terbit Rp6,1 triliun.",
  "date": "3 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKA",
   "obligasi",
   "pasar modal",
   "pendanaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5272c31669_34906402e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "g20-tolak-jadikan-pangan-alat-tekanan-geopolitik",
  "category": "Global",
  "title": "G20 [Tolak] Jadikan Pangan Alat Tekanan Geopolitik",
  "deck": "Menteri Perdagangan G20 di Milwaukee menolak pangan sebagai alat tekanan geopolitik, sekaligus membahas kelebihan kapasitas industri, kerja paksa, dan prinsip tarif WTO.",
  "date": "2 Oktober 2026",
  "image": "assets/img/g20-tolak-jadikan-pangan-alat-tekanan-geopolitik.jpg",
  "imageV": "mur6yyip",
  "tags": [
   "G20",
   "Kemendag",
   "I-EU CEPA",
   "Kerja Paksa"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/menteri-perdagangan-g20-tolak-penggunaan-pangan-sebagai-instrumen-tekanan-geopolitik",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "epac-terima-pinjaman-afiliasi-rp3-7-miliar-dari-pengendali",
  "category": "Aksi Korporasi",
  "title": "EPAC Terima Pinjaman [Afiliasi] Rp3,7 Miliar dari Pengendali",
  "deck": "EPAC mendapat pinjaman Rp3,7 miliar dari pemegang saham pengendali untuk melunasi utang bank, berbunga 10 persen per tahun tanpa batas waktu jatuh tempo.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "transaksi afiliasi",
   "pinjaman pemegang saham",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/852e4d7b78_9cc883c771.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-terbitkan-obligasi-rp500-miliar-tahap-v-bunga-9-10",
  "category": "Aksi Korporasi",
  "title": "ENRG Terbitkan [Obligasi] Rp500 Miliar Tahap V, Bunga 9-10%",
  "deck": "Energi Mega Persada menawarkan obligasi tahap V senilai Rp500 miliar dengan bunga 9-10 persen per tahun, bagian dari program obligasi berkelanjutan Rp4 triliun.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "obligasi",
   "pasar modal",
   "Energi Mega Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/67daa03ed6_bb37876d99.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdka-umumkan-transaksi-afiliasi-jasa-konstruksi-tambang-pani",
  "category": "Aksi Korporasi",
  "title": "MDKA Umumkan Transaksi [Afiliasi] Jasa Konstruksi Tambang Pani",
  "deck": "Anak usaha MDKA, Merdeka Mining Servis, meneken perjanjian jasa konstruksi dengan tiga perusahaan terkendali lain untuk pengembangan Tambang Emas Pani, dinilai wajar oleh penilai independen.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKA",
   "Transaksi Afiliasi",
   "Tambang Emas Pani",
   "Merdeka Copper Gold"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6877368ca0_7634f5c477.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-tawarkan-buyback-rp2-290-ke-penolak-spin-off-fiber",
  "category": "Aksi Korporasi",
  "title": "TLKM Tawarkan [Buyback] Rp2.290 ke Penolak Spin-off Fiber",
  "deck": "Telkom membuka pembelian kembali saham bagi pemegang saham yang menolak pemisahan segmen fiber ke anak usaha, dengan harga Rp2.290 per saham dan tenggat pengajuan 5 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "buyback saham",
   "spin-off fiber",
   "Telkom Infrastruktur Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/def96e9f56_0336c30cbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btpn-merger-oto-ke-summit-oto-finance-resmi-berlaku",
  "category": "Aksi Korporasi",
  "title": "BTPN: Merger [OTO] ke Summit Oto Finance Resmi Berlaku",
  "deck": "Bank SMBC Indonesia (BTPN) mengonfirmasi penggabungan anak usaha pembiayaan PT Oto Multiartha ke PT Summit Oto Finance resmi efektif sejak 1 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPN",
   "merger anak usaha",
   "Summit Oto Finance",
   "Oto Multiartha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/63efd98fee_2ed72ad015.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lima-tahun-merger-pelindo-klaim-produktivitas-naik-70",
  "category": "BUMN",
  "title": "Lima Tahun Merger, Pelindo Klaim Produktivitas Naik [70%]",
  "deck": "Lima tahun setelah merger, Pelindo Terminal Petikemas mengklaim produktivitas naik lebih dari 70 persen dan waktu kapal bersandar berkurang di 32 terminal.",
  "date": "2 Oktober 2026",
  "image": "assets/img/lima-tahun-merger-pelindo-klaim-produktivitas-naik-70.jpg",
  "imageV": "mur6yzcy",
  "tags": [
   "Pelindo",
   "Pelabuhan",
   "Logistik",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470859-lima-tahun-merger-pelindo-standardisasi-jadi-kunci-efisiensi"
 },
 {
  "slug": "kija-rogoh-rp340-9-m-kuasai-51-seafer-di-kendal",
  "category": "Aksi Korporasi",
  "title": "KIJA Rogoh Rp340,9 M, Kuasai 51% [Seafer] di Kendal",
  "deck": "Entitas anak KIJA, PT Indocargomas Persada, mengambilalih 51% saham PT Kawasan Industri Seafer senilai Rp340,86 miliar, menguasai land bank 500,24 hektar di Kendal, Jawa Tengah.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIJA",
   "akuisisi",
   "kawasan industri",
   "Kendal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/31e6ac7d86_71d067108c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-teken-transaksi-afiliasi-untuk-tambang-emas-pani",
  "category": "Aksi Korporasi",
  "title": "EMAS Teken Transaksi [Afiliasi] untuk Tambang Emas Pani",
  "deck": "Merdeka Mining Servis, anak usaha PT Merdeka Gold Resources Tbk, meneken perjanjian jasa dengan tiga perusahaan terkendali untuk pengembangan Tambang Emas Pani, efektif 30 September 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Tambang Emas Pani",
   "Transaksi Afiliasi",
   "Merdeka Mining Servis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d222ac7679_694d950db5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-ganti-kepala-unit-audit-internal-umar-syahid-diganti-deni",
  "category": "Aksi Korporasi",
  "title": "TLKM Ganti [Kepala] Unit Audit Internal, Umar Syahid Diganti Deni",
  "deck": "Telkom menunjuk Deni Ratno Tama sebagai Kepala Unit Audit Internal baru menggantikan Umar Syahid yang sebelumnya menjabat sementara, efektif 1 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "audit internal",
   "tata kelola perusahaan",
   "Telkom"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4fe66b4ab1_0ec68201be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-beri-penjelasan-ke-bei-soal-opini-audit-pengecualian",
  "category": "Aksi Korporasi",
  "title": "VTNY Beri Penjelasan ke BEI soal Opini Audit [Pengecualian]",
  "deck": "Venteny Fortuna International (VTNY) menjawab permintaan penjelasan Bursa Efek Indonesia soal opini audit wajar dengan pengecualian dan realisasi dana IPO lebih dari Rp240 miliar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "opini audit",
   "obligasi",
   "realisasi dana IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/90fc7570b3_3acefcf797.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-perluas-akses-pasar-umkm-binaan-di-daerah",
  "category": "UMKM",
  "title": "Pertamina Perluas Akses Pasar [UMKM] Binaan di Daerah",
  "deck": "Pertamina Patra Niaga membuka akses pasar lebih luas bagi UMKM binaan lewat ajang Pertamina SMEXPO, dicontohkan lewat kisah Difa Kreasi dari Dumai.",
  "date": "2 Oktober 2026",
  "image": "assets/img/pertamina-perluas-akses-pasar-umkm-binaan-di-daerah.jpg",
  "imageV": "mur13021",
  "tags": [
   "pertamina",
   "umkm",
   "usaha",
   "pertamina patra niaga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470839-dorong-daya-saing-umkm-pertamina-patra-niaga-buka-akses-pasar-pelaku-usaha-daerah"
 },
 {
  "slug": "argo-jelaskan-ke-bei-rugi-kurs-melonjak-obligasi-mangkrak",
  "category": "Aksi Korporasi",
  "title": "ARGO Jelaskan ke BEI: Rugi Kurs Melonjak, Obligasi [Mangkrak]",
  "deck": "ARGO menjawab permintaan penjelasan dan rencana site visit BEI atas laporan keuangan semester I 2026, termasuk lonjakan rugi kurs dan nasib obligasi subordinasi ke pihak yang pailit sejak 2006.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARGO",
   "Argo Pantes",
   "obligasi subordinasi",
   "rugi kurs"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/acd22cecaa_59360f9400.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-terbitkan-1-02-triliun-saham-baru-headwell-kuasai-65",
  "category": "Aksi Korporasi",
  "title": "MKNT Terbitkan 1,02 Triliun Saham Baru, Headwell [Kuasai] 65%",
  "deck": "PT Remitra Global International (d.h. MKNT) menuntaskan rights issue tanpa hak memesan efek terlebih dahulu senilai Rp1 per saham, membuat Headwell Bintang Energi Hijau jadi pengendali baru dengan 64,9 persen saham.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "Dilusi Saham",
   "Remitra Global International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cb5f517c20_1e3ed687d0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asmi-pastikan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "ASMI Pastikan Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Menjawab surat BEI soal volatilitas transaksi, manajemen ASMI menyatakan tidak ada informasi material maupun rencana aksi korporasi yang belum diungkap.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASMI",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e2ec27e839_7d960352e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tguk-visionary-capital-kuasai-56-84-suara-via-pembelian-saham",
  "category": "Aksi Korporasi",
  "title": "TGUK: Visionary Capital [Kuasai] 56,84% Suara via Pembelian Saham",
  "deck": "Visionary Capital Global Pte. Ltd., investor asal luar negeri, membeli 2,03 miliar saham TGUK seharga Rp20 per lembar dan kini menguasai 56,84% hak suara.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "Visionary Capital Global",
   "pengendali saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-3251-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppatk-rilis-peta-risiko-keuangan-jelang-evaluasi-fatf-2029",
  "category": "Perbankan",
  "title": "PPATK Rilis Peta Risiko Keuangan, Jelang Evaluasi FATF [2029]",
  "deck": "PPATK merilis tiga penilaian risiko nasional 2026 untuk pencucian uang, pendanaan terorisme, dan proliferasi senjata, menjelang evaluasi FATF pada 2029.",
  "date": "2 Oktober 2026",
  "image": "assets/img/ppatk-rilis-peta-risiko-keuangan-jelang-evaluasi-fatf-2029.jpg",
  "imageV": "muqyjotv",
  "tags": [
   "PPATK",
   "FATF",
   "Pencucian Uang",
   "Pendanaan Terorisme"
  ],
  "kreditFoto": "Pusat Pelaporan dan Analisis Transaksi Keuangan",
  "sourceUrl": "https://www.ppatk.go.id/siaran_pers/read/1676/ppatk-luncurkan-tiga-nra-2026-perkuat-ketahanan-indonesia-dan-kesiapan-menghadapi-mutual-evaluation-review-fatf-.html",
  "sourceLabel": "Pusat Pelaporan dan Analisis Transaksi Keuangan"
 },
 {
  "slug": "penebusan-pupuk-perikanan-bersubsidi-di-sulsel-masih-rendah",
  "category": "UMKM",
  "title": "Penebusan Pupuk Perikanan Bersubsidi di Sulsel Masih [Rendah]",
  "deck": "Realisasi penebusan pupuk perikanan bersubsidi di Sulawesi Selatan baru 11,9 persen dari kuota 102.479 ton, sementara capaian nasional juga baru 9,68 persen dari alokasi 295.686 ton.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penebusan-pupuk-perikanan-bersubsidi-di-sulsel-masih-rendah.jpg",
  "imageV": "muqyjqaw",
  "tags": [
   "pupuk subsidi",
   "perikanan",
   "Sulawesi Selatan",
   "KKP"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-kawal-percepatan-penebusan-pupuk-perikanan-bersubsidi-di-sulsel-ZzjR.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "bi-soroti-kesenjangan-literasi-keuangan-anak-muda",
  "category": "Moneter",
  "title": "BI Soroti Kesenjangan [Literasi] Keuangan Anak Muda",
  "deck": "BI mencatat indeks inklusi keuangan anak muda 18-25 tahun capai 95,69 persen, jauh di atas indeks literasi yang cuma 73,32 persen, saat resmikan gerai edukasi di Unair.",
  "date": "2 Oktober 2026",
  "image": "assets/img/bi-soroti-kesenjangan-literasi-keuangan-anak-muda.jpg",
  "imageV": "muqyjrqp",
  "tags": [
   "Bank Indonesia",
   "literasi keuangan",
   "QRIS",
   "pelindungan konsumen"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "tguk-dinasti-kreatif-lepas-saham-suara-tersisa-12-49",
  "category": "Aksi Korporasi",
  "title": "TGUK: Dinasti Kreatif [Lepas] Saham, Suara Tersisa 12,49%",
  "deck": "PT Dinasti Kreatif Indonesia melepas 2,03 miliar saham TGUK di harga Rp20, memangkas hak suara dari 69,33% jadi 12,49% dan melepas status pengendali.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "kepemilikan saham",
   "pengendali",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-5070-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-dana-obligasi-sosial-rp1-01-triliun-terserap-100",
  "category": "Aksi Korporasi",
  "title": "PNMP: Dana Obligasi Sosial Rp1,01 Triliun [Terserap] 100%",
  "deck": "PT Permodalan Nasional Madani melaporkan seluruh dana Rp1,01 triliun dari obligasi sosial Tahap III telah habis terpakai untuk pembiayaan sosial, tanpa sisa dana.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "obligasi",
   "penggunaan dana",
   "PNM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/927dcea038_3d0e0626f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-rampungkan-realisasi-dana-sukuk-sosial-rp719-4-miliar",
  "category": "Aksi Korporasi",
  "title": "PNMP Rampungkan [Realisasi] Dana Sukuk Sosial Rp719,4 Miliar",
  "deck": "PT Permodalan Nasional Madani (PNMP) melaporkan dana bersih Rp719,4 miliar dari sukuk mudharabah sosial Tahap IV sudah terpakai 100 persen, tanpa sisa.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "sukuk",
   "obligasi",
   "realisasi dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/00d18fbee2_d10ed99d62.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-dana-obligasi-sosial-rp498-57-m-terserap-100",
  "category": "Aksi Korporasi",
  "title": "PNMP: Dana Obligasi Sosial Rp498,57 M Terserap [100%]",
  "deck": "PNM melaporkan seluruh dana bersih Rp498,57 miliar dari Obligasi Berwawasan Sosial Tahap II sudah dipakai penuh untuk pembiayaan usaha berwawasan sosial, tanpa sisa dana mengendap.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "obligasi berkelanjutan",
   "penggunaan dana",
   "PNM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0576abda47_869d83ed80.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaii-angkat-ristadi-jadi-komisaris-baru-kai",
  "category": "Aksi Korporasi",
  "title": "KAII Angkat Ristadi Jadi [Komisaris] Baru KAI",
  "deck": "PT Kereta Api Indonesia (Persero) mengangkat Ristadi sebagai komisaris baru per 1 Oktober 2026, menyusul keputusan pemegang saham tentang susunan dewan komisaris perseroan.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KAII",
   "Kereta Api Indonesia",
   "Pergantian Komisaris",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0a73ede4d0_cec15648df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-direktur-adika-bakrie-tambah-389-900-saham-rp640",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direktur Adika Bakrie [Tambah] 389.900 Saham Rp640",
  "deck": "Direksi BRMS Adika Aryasthana Bakrie membeli 389.900 saham perseroan secara tidak langsung seharga Rp640 per lembar pada 28 September 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "Bumi Resources Minerals",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-3323-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-sukuk-sosial-orange-rp1-5-triliun-terserap-100",
  "category": "Aksi Korporasi",
  "title": "PNMP: Sukuk Sosial Orange Rp1,5 Triliun [Terserap] 100%",
  "deck": "PNM melaporkan dana bersih Rp1,49 triliun dari Sukuk Mudharabah Berwawasan Sosial Orange Tahap III sudah tersalur penuh untuk kegiatan usaha berwawasan sosial, tanpa sisa dana.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "sukuk",
   "obligasi berkelanjutan",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cab0f76507_5f72b15cad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hifi-koreksi-laporan-dana-obligasi-lama-lunas",
  "category": "Aksi Korporasi",
  "title": "HIFI Koreksi Laporan Dana, Obligasi Lama [Lunas]",
  "deck": "HIFI melaporkan koreksi realisasi dana obligasi Rp800 miliar ke OJK. Seluruh dana sudah terpakai untuk melunasi obligasi lama dan modal kerja per 31 Mei 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HIFI",
   "obligasi korporasi",
   "penggunaan dana IPO",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/da8059738e_1924d45fc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-victoria-investama-lepas-140-juta-saham-suara-ke-8-62",
  "category": "Aksi Korporasi",
  "title": "BIPP: Victoria Investama [lepas] 140 juta saham, suara ke 8,62%",
  "deck": "Victoria Investama Tbk menjual 140 juta saham BIPP pada 1 Oktober 2026 seharga Rp60 per saham, memangkas hak suaranya dari 11,40% menjadi 8,62%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "kepemilikan saham",
   "Victoria Investama",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-5866-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-enrg-disesuaikan-efektif-5-oktober",
  "category": "Aksi Korporasi",
  "title": "DR: Waran [ENRG] Disesuaikan, Efektif 5 Oktober",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan dua waran terstruktur bersandar saham ENRG, berlaku 5 Oktober 2026, menyusul rights issue ENRG senilai Rp4,12 triliun.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "ENRG",
   "waran terstruktur",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c2988f9614_571a9cd524.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sona-gelar-public-expose-insidentil-usai-surat-ojk",
  "category": "Aksi Korporasi",
  "title": "SONA Gelar [Public Expose] Insidentil usai Surat OJK",
  "deck": "Sona Topas Tourism Industry akan menggelar Public Expose Insidentil secara daring pada 6 Oktober 2026, dipicu permintaan otoritas terkait pergerakan harga sahamnya.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SONA",
   "Public Expose",
   "OJK",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fe6dd1f69c_ab09a4cd8c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-pelaksanaan-8-waran-terstruktur-2-cair-ke-investor",
  "category": "Aksi Korporasi",
  "title": "DR: [Pelaksanaan] 8 Waran Terstruktur, 2 Cair ke Investor",
  "deck": "RHB Sekuritas mengoreksi pengumuman pelaksanaan delapan waran terstruktur BBCA, BMRI, BBRI, KIJA, KPIG, BKSL, MBMA, dan INCO pada 2 Oktober 2026. Enam berakhir tanpa nilai, dua membayar pemegangnya.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/79ed10d2a3_754addf89f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmnd-angkat-leonard-jadi-komisaris-independen-baru",
  "category": "Aksi Korporasi",
  "title": "DMND angkat [Leonard] jadi komisaris independen baru",
  "deck": "RUPSLB Diamond Food Indonesia menyetujui Leonard sebagai komisaris independen baru per 30 September 2026, melengkapi tujuh anggota dewan komisaris.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMND",
   "komisaris independen",
   "perubahan pengurus",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3f46279264_f5669d8209.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amrt-benarkan-kebakaran-gerai-alfamart-di-gambut-banjar-kebakaran",
  "category": "Aksi Korporasi",
  "title": "AMRT Benarkan Kebakaran Gerai Alfamart di Gambut, Banjar [kebakaran]",
  "deck": "Alfamart menjelaskan ke BEI soal kebakaran gerai di Gambut, Banjar, Kalimantan Selatan pada 29 September 2026, yang diduga dipicu pembeli yang mengancam lalu membakar gerai.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMRT",
   "Alfamart",
   "kebakaran",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a7430dd0bf_6ef0cf038c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-dmnd-sahkan-leonard-dan-ubah-kbli-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "RUPSLB DMND Sahkan Leonard dan Ubah [KBLI] Anggaran Dasar",
  "deck": "Pemegang saham DMND menyetujui pengangkatan Leonard sebagai komisaris independen dan penyesuaian klasifikasi usaha di anggaran dasar dengan dukungan suara hampir bulat.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMND",
   "RUPSLB",
   "Komisaris Independen",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/00ddd3517c_0956c4d532.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-buyback-tembus-1-63-saham-per-2-oktober",
  "category": "Aksi Korporasi",
  "title": "PRDA [Buyback] Tembus 1,63% Saham per 2 Oktober",
  "deck": "Prodia Widyahusada melaporkan realisasi buyback saham naik jadi sekitar 1,63 persen saham beredar per 2 Oktober 2026, dengan sisa dana Rp107,53 miliar dari anggaran sekitar Rp150 miliar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/caac5f6db1_e62f54c5ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-bagikan-dividen-interim-rp98-per-saham-cair-30-oktober",
  "category": "Aksi Korporasi",
  "title": "ASII bagikan [dividen] interim Rp98 per saham, cair 30 Oktober",
  "deck": "Astra International (ASII) membagikan dividen interim Rp98 per saham, totalnya sekitar Rp3,9 triliun, dengan recording date 14 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "dividen interim",
   "Astra International",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/281fda42f7_2d5f48f253.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-direksi-tambah-saham-lewat-program-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Direksi Tambah Saham Lewat Program [MESOP]",
  "deck": "Direksi Erajaya Swasembada, Sintawati Halim, menambah kepemilikannya jadi 13,8 juta lembar saham lewat program opsi karyawan MESOP, hak suaranya naik ke 0,09%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-4475-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-pangkas-harga-pelaksanaan-waran-enrg-usai-rights-issue",
  "category": "Aksi Korporasi",
  "title": "ZP Pangkas Harga Pelaksanaan [Waran] ENRG Usai Rights Issue",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi dua waran terstruktur ENRG menyusul rights issue perseroan, efektif 5 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "ENRG",
   "waran terstruktur",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2df44a4cb5_3497348209.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-rampungkan-dana-obligasi-dan-sukuk-rp943-miliar",
  "category": "Aksi Korporasi",
  "title": "PIDL Rampungkan Dana [Obligasi] dan Sukuk Rp943 Miliar",
  "deck": "Pindo Deli Pulp and Paper Mills (PIDL) melaporkan seluruh dana hasil obligasi dan sukuk mudharabah berkelanjutan II tahap I 2026, totalnya Rp943,42 miliar, sudah habis terpakai tanpa sisa.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "obligasi korporasi",
   "sukuk mudharabah",
   "penggunaan dana IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1c36544d29_73eba136cb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-5-waran-rhb-jatuh-tempo-auto-saja-cuan",
  "category": "Aksi Korporasi",
  "title": "DR: 5 Waran RHB [Jatuh Tempo], AUTO Saja Cuan",
  "deck": "RHB Sekuritas melaksanakan lima waran terstruktur atas AUTO, AVIA, BBTN, ITMG, dan MIKA pada 2 Oktober 2026; hanya pemegang waran AUTO yang berhak atas dana penyelesaian tunai.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "AUTO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/92185eaf05_22da745adf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-direksi-tambah-2-24-juta-saham-lewat-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Direksi Tambah 2,24 Juta Saham Lewat [MESOP]",
  "deck": "Direksi Erajaya Swasembada, Budiarto Halim, menambah saham lewat program kompensasi karyawan MESOP, hak suara naik dari 0,05% menjadi 0,07%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "kepemilikan saham",
   "Erajaya Swasembada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-4096-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "maxi-anjlok-36-bei-minta-penjelasan-usai-batas-gocap-dihapus",
  "category": "Aksi Korporasi",
  "title": "MAXI Anjlok 36%, BEI Minta Penjelasan usai Batas [Gocap] Dihapus",
  "deck": "Saham MAXI tersungkur dari Rp50 ke Rp32 dan terus merosot hingga Rp26, ARB lima hari beruntun setelah BEI mencabut batas bawah harga saham Rp50.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAXI",
   "BEI",
   "auto rejection",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2508bdb24e_7b836d0e17.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catatkan-1-45-juta-saham-baru-dari-mesop",
  "category": "Aksi Korporasi",
  "title": "PGEO Catatkan 1,45 Juta Saham Baru dari [MESOP]",
  "deck": "BEI mencatatkan 1.448.585 saham baru PGEO hasil pelaksanaan opsi MESOP Tahap I dan III, efektif 5 Oktober 2026, saham beredar naik menjadi 41,95 miliar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "MESOP",
   "Pertamina Geothermal Energy",
   "saham baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6664add4ae_582753a004.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-terbitkan-obligasi-rp741-miliar-rating-aaa-fitch",
  "category": "Aksi Korporasi",
  "title": "PRTL Terbitkan [Obligasi] Rp741 Miliar, Rating AAA Fitch",
  "deck": "Protelindo menerbitkan obligasi tahap II senilai Rp741,055 miliar dengan bunga 7,55-7,65 persen, bagian dari program Rp20 triliun yang diberi peringkat AAA oleh Fitch.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "obligasi",
   "Protelindo",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e99bbabd32_dd1c4a0bb5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-direksi-lepas-683-9-juta-saham-suara-ke-5-18",
  "category": "Aksi Korporasi",
  "title": "BKSL: [Direksi] Lepas 683,9 Juta Saham, Suara ke 5,18%",
  "deck": "Direksi Sentul City melalui akun Samuel Sekuritas Indonesia melepas 683,9 juta saham BKSL senilai Rp72 per saham lewat pencairan perjanjian repo, hak suara turun dari 5,59% menjadi 5,18%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-7168-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yelo-panggil-rupslb-modal-dasar-naik-ke-rp765-miliar",
  "category": "Aksi Korporasi",
  "title": "YELO Panggil RUPSLB, [Modal Dasar] Naik ke Rp765 Miliar",
  "deck": "Yelooo Integra Datanet mengundang pemegang saham ke RUPSLB 26 Oktober 2026 untuk menyetujui kenaikan modal dasar dari Rp275,2 miliar menjadi Rp765,1 miliar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "RUPSLB",
   "modal dasar",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/00446910c2_52312e9fcb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-direktur-sulthon-tambah-90-000-saham-rp545",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direktur Sulthon [Tambah] 90.000 Saham Rp545",
  "deck": "Direktur BRMS Muhammad Sulthon menambah 90.000 saham tidak langsung senilai Rp545 per lembar, kepemilikannya naik ke 310.500 lembar, namun hak suaranya tetap 0,00 persen.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "kepemilikan saham",
   "direksi",
   "insider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-3275-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-uvcr-melonjak-36-saham-baru-diserap-pengendali",
  "category": "Aksi Korporasi",
  "title": "Harga UVCR Melonjak 36%, Saham Baru Diserap [Pengendali]",
  "deck": "UVCR menjelaskan ke BEI lonjakan harga 36% akhir September murni mekanisme pasar, sembari mengungkap rencana 200 juta saham baru yang seluruhnya diserap pemegang saham pengendali TSM.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "PMTHMETD",
   "volatilitas saham",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3b97fea018_fb1bec9ca5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-lepas-69-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi Lepas 69 Juta Saham Lewat [Repo]",
  "deck": "Samuel Sekuritas Indonesia, mewakili direksi FILM, menjual 69,07 juta saham pada 2 Oktober 2026 senilai sekitar Rp51,12 miliar lewat pencairan repo, hak suara turun dari 9,64% menjadi 9,00%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "kepemilikan saham",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-6592-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sger-siapkan-rp273-65-miliar-untuk-pelunasan-obligasi",
  "category": "Aksi Korporasi",
  "title": "SGER Siapkan Rp273,65 Miliar untuk [Pelunasan] Obligasi",
  "deck": "PT Sumber Global Energy Tbk menyatakan dana pelunasan obligasi senilai Rp273,645 miliar yang jatuh tempo 25 Oktober 2026 sudah siap.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGER",
   "obligasi",
   "pelunasan utang",
   "Sumber Global Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6e0a0de8c9_53205c9ff1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mppa-dana-rights-issue-rp1-04-triliun-sudah-tuntas-terpakai",
  "category": "Aksi Korporasi",
  "title": "MPPA: Dana Rights Issue Rp1,04 Triliun Sudah [Tuntas] Terpakai",
  "deck": "Matahari Putra Prima melaporkan ke OJK bahwa seluruh dana hasil rights issue senilai Rp1,04 triliun sudah terealisasi penuh, tanpa sisa dana mengendap.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPPA",
   "rights issue",
   "penggunaan dana",
   "Matahari Putra Prima"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4263f9fa57_1f4e2d4fa5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mice-siwie-honoris-tambah-saham-lagi-100-ribu-lembar",
  "category": "Aksi Korporasi",
  "title": "MICE: Siwie Honoris [Tambah] Saham Lagi 100 Ribu Lembar",
  "deck": "Siwie Honoris membeli 100.000 saham Multi Indocitra pada 30 September 2026, menambah kepemilikannya menjadi 2,06 juta lembar atau 0,3434 persen hak suara.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MICE",
   "Multi Indocitra",
   "kepemilikan saham",
   "Siwie Honoris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-9955-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdln-restrukturisasi-notes-us-290-juta-lepas-tanah-ke-pemegang-obligasi",
  "category": "Aksi Korporasi",
  "title": "MDLN Restrukturisasi Notes US$290 Juta, Lepas Tanah ke [Pemegang] Obligasi",
  "deck": "Modernland Realty mengubah skema utang obligasi dolar senilai US$289,8 juta dengan melepas tanah di Jakarta Garden City, Modern Hill, dan Bekasi kepada pemegang obligasi, tanpa perlu persetujuan RUPS.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLN",
   "restrukturisasi utang",
   "obligasi",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4e95dbf397_63dfa16f92.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-8-68-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama [Tambah] 8,68 Juta Saham",
  "deck": "Pemegang saham IMPC, Tunggal Jaya Investama, menambah 8,68 juta lembar saham lewat pembelian tidak langsung akhir September hingga awal Oktober, mengerek hak suaranya dari 38,48% menjadi 38,49%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "Impack Pratama Industri",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-5970-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "link-gelar-rupslb-pergantian-direksi-komisaris-26-okt",
  "category": "Aksi Korporasi",
  "title": "LINK Gelar RUPSLB [Pergantian] Direksi-Komisaris 26 Okt",
  "deck": "Link Net mengundang pemegang saham ke RUPSLB 26 Oktober 2026 untuk menyetujui perubahan susunan Direksi dan Komisaris, menyusul mundurnya dua pejabat pekan ini.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LINK",
   "RUPSLB",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2eb96e7f31_85059942cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-komisaris-tambah-220-000-saham-lewat-pembelian",
  "category": "Aksi Korporasi",
  "title": "ARKO: Komisaris Tambah [220.000] Saham Lewat Pembelian",
  "deck": "Komisaris Arkora Hydro, Arya Pradana Setiadharma, membeli 220.000 saham ARKO lewat dua transaksi akhir September dan awal Oktober, menambah kepemilikannya menjadi 1.945.000 lembar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-6068-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtla-yulie-sekuritas-jual-150-juta-saham-senilai-rp103-5-m",
  "category": "Aksi Korporasi",
  "title": "MTLA: Yulie Sekuritas [Jual] 150 Juta Saham Senilai Rp103,5 M",
  "deck": "Yulie Sekuritas Indonesia melepas 150 juta saham MTLA pada 30 September 2026 seharga Rp690 per lembar, menurunkan hak suaranya dari 7,24% menjadi 5,28%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTLA",
   "Metropolitan Land",
   "kepemilikan saham",
   "Yulie Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-4727-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tldn-koreksi-jadwal-dividen-interim-rp20-per-saham",
  "category": "Aksi Korporasi",
  "title": "TLDN [Koreksi] Jadwal Dividen Interim Rp20 per Saham",
  "deck": "Teladan Prima Agro mengoreksi jadwal dividen interim tunai Rp20 per saham senilai total Rp258,9 miliar, dengan recording date 14 Oktober dan pembayaran 22 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLDN",
   "dividen interim",
   "Teladan Prima Agro",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/21c55032ac_c31fafd0ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pege-direksi-tambah-saham-rp20-miliar-suara-jadi-5-08",
  "category": "Aksi Korporasi",
  "title": "PEGE: Direksi [Tambah] Saham Rp20 Miliar, Suara Jadi 5,08%",
  "deck": "Optimus Vision Global Pte Ltd, direksi asing PEGE, membeli 110,58 juta saham baru sehingga hak suaranya naik dari 2,15 persen menjadi 5,08 persen, senilai sekitar Rp20 miliar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEGE",
   "kepemilikan saham",
   "direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-0150-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bswd-dapat-peringkat-a-idn-dari-fitch-outlook-positif",
  "category": "Aksi Korporasi",
  "title": "BSWD Dapat Peringkat [A+(idn)] dari Fitch, Outlook Positif",
  "deck": "Fitch Ratings Indonesia menetapkan peringkat nasional jangka panjang Bank of India Indonesia di A+(idn) dengan outlook positif, dilaporkan ke OJK dan BEI pada 2 Oktober 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "Fitch Ratings",
   "peringkat kredit",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5cde56965c_4d9bf8f286.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smar-tegaskan-tak-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "SMAR Tegaskan Tak Ada [Informasi Material] di Balik Volatilitas Saham",
  "deck": "Merespons permintaan penjelasan dari BEI, SMAR menyatakan tidak ada aksi korporasi atau informasi material yang memicu volatilitas transaksi sahamnya.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1458182401_8c5cab6eb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-bantah-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "ARKO Bantah Ada Informasi Material di Balik [Volatilitas] Saham",
  "deck": "Menjawab surat Bursa soal pergerakan harga sahamnya yang tidak wajar, Arkora Hydro menyatakan tidak ada informasi material tersembunyi maupun rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/834d08e9a7_78e375ff44.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wmuu-pastikan-rights-issue-lanjut-respons-permintaan-bei",
  "category": "Aksi Korporasi",
  "title": "WMUU pastikan [rights issue] lanjut, respons permintaan BEI",
  "deck": "WMUU menjawab permintaan BEI soal volatilitas sahamnya, memastikan rencana rights issue berjalan dan pemegang saham pengendali tak berencana melepas saham.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WMUU",
   "rights issue",
   "volatilitas saham",
   "Widodo Makmur Unggas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4afa42a4de_91166b8ca7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-tambah-938-900-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [Tambah] 938.900 Saham",
  "deck": "Edwin Soeryadjaya membeli 938.900 saham SRTG lewat dua transaksi akhir September dan awal Oktober 2026, menaikkan hak suaranya jadi 35,97 persen.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Edwin Soeryadjaya",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-8239-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-bayar-dividen-interim-rp6-16-triliun",
  "category": "Perbankan",
  "title": "Bank Mandiri Bayar Dividen Interim [Rp6,16] Triliun",
  "deck": "Bertepatan HUT ke-28, Bank Mandiri bayarkan dividen interim Rp66 per saham, sehingga total dividen sepanjang 2026 tembus Rp50,63 triliun.",
  "date": "2 Oktober 2026",
  "image": "assets/img/bank-mandiri-bayar-dividen-interim-rp6-16-triliun.jpg",
  "imageV": "muqyjs6s",
  "tags": [
   "Bank Mandiri",
   "dividen interim",
   "HUT ke-28",
   "dana pihak ketiga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470783-bertepatan-dengan-hut-ke-28-bank-mandiri-bayarkan-dividen-interim-rp616-triliun"
 },
 {
  "slug": "bei-buka-suspensi-edge-untuk-crossing-saham-go-private",
  "category": "Aksi Korporasi",
  "title": "BEI Buka Suspensi EDGE untuk Crossing Saham [Go Private]",
  "deck": "BEI mencabut sementara suspensi saham EDGE khusus di pasar negosiasi, Jumat 2 Oktober 2026, untuk transaksi crossing saham hasil buyback dalam proses go private dan delisting Indointernet.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "go private",
   "delisting",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cb61a52a9b_16ebc200e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-diprediksi-melemah-imbas-panasnya-as-iran",
  "category": "Moneter",
  "title": "Rupiah Diprediksi [Melemah] Imbas Panasnya AS-Iran",
  "deck": "Analis Bank Woori Saudara memperkirakan rupiah melemah ke kisaran Rp17.950-Rp18.050 per dolar AS akibat memanasnya hubungan AS-Iran yang mengerek harga minyak dunia.",
  "date": "2 Oktober 2026",
  "image": "assets/img/rupiah-diprediksi-melemah-imbas-panasnya-as-iran.jpg",
  "imageV": "muqmlis5",
  "tags": [
   "rupiah",
   "dolar AS",
   "Iran",
   "Amerika Serikat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470775-bicara-soal-rupiah-analis-bank-prediksi-bisa-melemah-selama-hubungan-as-dan-iran-tak-harmonis"
 },
 {
  "slug": "dooh-tender-wajib-sii-rp148-saham-periode-5-okt-3-nov",
  "category": "Aksi Korporasi",
  "title": "DOOH: [Tender Wajib] SII Rp148/Saham, Periode 5 Okt-3 Nov",
  "deck": "PT Sinergi Internasional Investama menawar 2,62 miliar saham publik DOOH senilai maksimal Rp388,4 miliar menyusul pengambilalihan 51 persen saham dari Prambanan.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "tender wajib",
   "SII",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/34bde0c12e_f5b52c1799.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-dana-obligasi-rp5-61-triliun-sudah-habis-untuk-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "PPGD: Dana Obligasi Rp5,61 Triliun Sudah Habis untuk [Modal Kerja]",
  "deck": "Pegadaian (PPGD) melaporkan ke OJK, dana Rp5,61 triliun dari tiga obligasi dan sukuk yang terbit September 2026 sudah habis terpakai untuk modal kerja per akhir September 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGD",
   "Pegadaian",
   "obligasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/94584441a7_621bf057ca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-dana-rp5-61-t-hasil-obligasi-sukuk-terpakai-penuh",
  "category": "Aksi Korporasi",
  "title": "PPGD: Dana Rp5,61 T Hasil Obligasi-Sukuk [Terpakai Penuh]",
  "deck": "Pegadaian melaporkan dana Rp5,61 triliun dari tiga surat utang berkelanjutan sudah 100 persen tersalur untuk modal kerja per 30 September 2026, sisa dana nihil.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGD",
   "Pegadaian",
   "obligasi",
   "sukuk mudharabah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c94e4ac08d_9fa58310a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-lepas-saham-jmj-dan-dtp-fokus-ke-konstruksi-divestasi",
  "category": "Aksi Korporasi",
  "title": "ADHI Lepas Saham JMJ dan DTP, Fokus ke Konstruksi [Divestasi]",
  "deck": "ADHI menandatangani perjanjian jual beli bersyarat untuk melepas 47,18% saham di JMJ ke SMI dan 51% saham di DTP ke FUTR, bagian penataan ulang anak usaha.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "divestasi",
   "JMJ",
   "DTP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2846866318_883ab117a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-adhi-setujui-restrukturisasi-dan-pinjaman-baru",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ADHI Setujui [Restrukturisasi] dan Pinjaman Baru",
  "deck": "Pemegang saham ADHI menyetujui rencana restrukturisasi perusahaan dan izin menerima pinjaman bank atau non-bank jangka menengah-panjang sebagai bagian program penyehatan.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "restrukturisasi",
   "RUPSLB",
   "pinjaman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/894e7bcc1e_e18320b8f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-konversi-utang-us-4-1-juta-jadi-saham-dilusi-5-79",
  "category": "Aksi Korporasi",
  "title": "APEX Konversi Utang US$4,1 Juta Jadi Saham, Dilusi [5,79%]",
  "deck": "Apexindo menerbitkan 218,09 juta saham baru Rp325 per lembar untuk melunasi utang US$4,1 juta ke dua kreditor asing lewat skema konversi utang menjadi saham (PMTHMETD).",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "PMTHMETD",
   "konversi utang",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/77bae3ea07_ebe40b13c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-direksi-hasan-aula-tambah-1-49-juta-saham-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Direksi Hasan Aula Tambah 1,49 Juta Saham [MESOP]",
  "deck": "Direktur Hasan Aula menambah 1,49 juta saham ERAA lewat pencairan opsi program MESOP, hak suaranya di perseroan naik tipis dari 0,05% menjadi 0,06%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "Erajaya Swasembada",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-2947-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-joy-wahjudi-tambah-1-9-juta-saham-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Joy Wahjudi Tambah 1,9 Juta Saham [MESOP]",
  "deck": "Direksi Erajaya Swasembada, Joy Wahjudi, menambah kepemilikan sahamnya lewat pencairan opsi program MESOP, melanjutkan rangkaian laporan serupa dari direksi lain pekan ini.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "Erajaya Swasembada",
   "kepemilikan saham direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-8245-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smfp-siapkan-rp2-95-triliun-untuk-lunasi-dua-obligasi",
  "category": "Aksi Korporasi",
  "title": "SMFP Siapkan [Rp2,95 Triliun] untuk Lunasi Dua Obligasi",
  "deck": "SMF menyiapkan dana Rp2,95 triliun plus bunga Rp44,49 miliar untuk melunasi dua obligasi, SMFP06CN2 dan SMFP07BCN7, yang jatuh tempo pada 17 dan 26 November 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMFP",
   "obligasi",
   "pelunasan utang",
   "SMF"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dad3e3a758_2eae89c29e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-direksi-djohan-sutanto-tambah-975-589-saham-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Direksi Djohan Sutanto Tambah [975.589] Saham MESOP",
  "deck": "Direktur Djohan Sutanto menambah 975.589 lembar saham ERAA lewat program opsi karyawan MESOP, pelaporan kelima dari jajaran direksi dalam sepekan terakhir.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-5456-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "drma-komisaris-jual-125-000-saham-hak-suara-tetap-1-69",
  "category": "Aksi Korporasi",
  "title": "DRMA: Komisaris [Jual] 125.000 Saham, Hak Suara Tetap 1,69%",
  "deck": "Komisaris DRMA menjual 125.000 saham tidak langsung senilai sekitar Rp115,3 juta pada 28-29 September, namun hak suaranya tetap 1,69 persen.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Dharma Polimetal",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-6079-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-sim-chee-ping-tambah-1-18-juta-saham-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Sim Chee Ping Tambah 1,18 Juta Saham [MESOP]",
  "deck": "Direksi ERAA Sim Chee Ping menambah 1.183.423 saham lewat program kompensasi karyawan MESOP, bagian dari rangkaian laporan serupa dari direksi Erajaya pekan ini.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "Direksi",
   "Kepemilikan Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-9255-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-direksi-kim-jong-woon-tambah-1-15-juta-saham-mesop",
  "category": "Aksi Korporasi",
  "title": "ERAA: Direksi Kim Jong Woon Tambah 1,15 Juta Saham [MESOP]",
  "deck": "Direksi ERAA, Kim Jong Woon, menambah 1.156.453 saham lewat program kompensasi karyawan MESOP, sehingga total kepemilikannya naik jadi 2.312.907 lembar saham.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-6962-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-eco-energi-perkasa-tambah-saham-suara-ke-38-57",
  "category": "Aksi Korporasi",
  "title": "PACK: Eco Energi Perkasa [tambah] saham, suara ke 38,57%",
  "deck": "Pemegang saham asing Eco Energi Perkasa menambah 22,8 juta saham PACK senilai sekitar Rp13,27 miliar, hak suara naik tipis ke 38,57%.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "kepemilikan saham",
   "Eco Energi Perkasa",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-9618-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bfin-direksi-sutadi-tambah-saham-1-5-juta-lembar",
  "category": "Aksi Korporasi",
  "title": "BFIN: Direksi [Sutadi] Tambah Saham 1,5 Juta Lembar",
  "deck": "Direksi BFI Finance Indonesia, Sutadi, membeli 1,5 juta saham BFIN secara bertahap akhir September hingga awal Oktober 2026, senilai sekitar Rp1,38 miliar.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BFIN",
   "BFI Finance",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02102026-6540-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-pengendali-baru-buka-tender-wajib-rp75-per-saham",
  "category": "Aksi Korporasi",
  "title": "NAYZ: Pengendali Baru Buka [Tender Wajib] Rp75 per Saham",
  "deck": "Saiko Consultancy menawar tender wajib atas saham publik NAYZ seharga Rp75 per lembar, menyusul pengambilalihan 29,41 persen saham dari PT Asia Intrainvesta pada Agustus 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "tender wajib",
   "akuisisi",
   "Saiko Consultancy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1b232f5a0b_1fc2f43a4b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-kemendag-buka-akses-ekspor-umkm-perikanan",
  "category": "UMKM",
  "title": "KKP-Kemendag Buka Akses [Ekspor] UMKM Perikanan",
  "deck": "KKP dan Kemendag kerja sama agar produk perikanan UMKM dan desa bersertifikat mutu bisa masuk platform ekspor nasional InaExport untuk menjangkau pembeli luar negeri.",
  "date": "2 Oktober 2026",
  "image": "assets/img/kkp-kemendag-buka-akses-ekspor-umkm-perikanan.jpg",
  "imageV": "muq91pdd",
  "tags": [
   "UMKM",
   "Ekspor",
   "Perikanan",
   "KKP"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/produk-perikanan-umkm-masuk-inaexport-kkp-kemendag-buka-akses-pasar-global-OP4L.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "ppn-transaksi-digital-luar-negeri-kini-dipungut-lewat-bank",
  "category": "Makroekonomi",
  "title": "PPN Transaksi Digital Luar Negeri Kini [Dipungut] Lewat Bank",
  "deck": "Ditjen Pajak mulai memungut PPN atas transaksi digital luar negeri lewat enam bank dan fintek sejak 25 September 2026, berdasarkan PMK Nomor 49 Tahun 2026.",
  "date": "2 Oktober 2026",
  "image": "assets/img/ppn-transaksi-digital-luar-negeri-kini-dipungut-lewat-bank.jpg",
  "imageV": "mupsrqhd",
  "tags": [
   "PPN digital",
   "Ditjen Pajak",
   "SPP-TDLN",
   "transaksi luar negeri"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/pemerintah-mulai-terapkan-spp-tdln",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "pajak-penjual-online-mulai-dipungut-lebih-cepat-sebulan",
  "category": "Bisnis",
  "title": "Pajak Penjual Online Mulai Dipungut, Lebih [Cepat] Sebulan",
  "deck": "DJP memulai pemungutan PPh Pasal 22 atas pedagang online lewat empat marketplace pada 1 Oktober 2026, lebih awal dari tenggat penyesuaian 31 Oktober yang sebelumnya dijanjikan.",
  "date": "2 Oktober 2026",
  "image": "assets/img/pajak-penjual-online-mulai-dipungut-lebih-cepat-sebulan.jpg",
  "imageV": "mupsrrc1",
  "tags": [
   "PPh Pasal 22",
   "Marketplace",
   "Pajak Digital",
   "DJP"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/pemungutan-pph-pasal-22-melalui-marketplace-mulai-dilaksanakan-1-oktober-2026",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "esdm-petakan-zona-rawan-gempa-demi-tata-ruang-nagekeo",
  "category": "Energi",
  "title": "ESDM Petakan Zona [Rawan] Gempa demi Tata Ruang Nagekeo",
  "deck": "Kementerian ESDM mendorong Pemkab Nagekeo memasukkan tingkat kerawanan gempa, longsor, dan banjir ke dalam tata ruang pembangunan daerah.",
  "date": "2 Oktober 2026",
  "image": "assets/img/esdm-petakan-zona-rawan-gempa-demi-tata-ruang-nagekeo.jpg",
  "imageV": "mupsrsq6",
  "tags": [
   "ESDM",
   "Nagekeo",
   "mitigasi bencana",
   "tata ruang"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kementerian-esdm-dorong-tata-ruang-nagekeo-berbasis-mitigasi-bencana",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bahlil-rangkap-jabatan-koordinasi-hilirisasi-dan-energi-disatukan",
  "category": "Energi",
  "title": "Bahlil Rangkap Jabatan, Koordinasi [Hilirisasi] dan Energi Disatukan",
  "deck": "Presiden Prabowo Subianto melantik Bahlil Lahadalia sebagai Menteri Koordinator Hilirisasi dan Transisi Energi, sambil tetap menjabat Menteri ESDM.",
  "date": "2 Oktober 2026",
  "image": "assets/img/bahlil-rangkap-jabatan-koordinasi-hilirisasi-dan-energi-disatukan.jpg",
  "imageV": "mupsru5c",
  "tags": [
   "Bahlil Lahadalia",
   "Hilirisasi",
   "Transisi Energi",
   "Kementerian ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hilirisasi-dan-transisi-energi-dikoordinasikan-satu-pintu-bahlil-dilantik-sebagai-menko",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "surplus-dagang-ri-melesat-ke-us-3-55-miliar-pada-agustus",
  "category": "Makroekonomi",
  "title": "Surplus Dagang RI [Melesat] ke US$3,55 Miliar pada Agustus",
  "deck": "Neraca perdagangan Indonesia Agustus 2026 surplus US$3,55 miliar, naik tajam dari US$0,12 miliar pada Juli, didorong lonjakan ekspor nonmigas dan penyusutan defisit migas.",
  "date": "2 Oktober 2026",
  "image": "assets/img/surplus-dagang-ri-melesat-ke-us-3-55-miliar-pada-agustus.jpg",
  "imageV": "mupsrv2s",
  "tags": [
   "neraca perdagangan",
   "ekspor nonmigas",
   "Bank Indonesia",
   "nikel"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2820826.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "inflasi-september-terkendali-harga-pangan-mulai-menanjak",
  "category": "Makroekonomi",
  "title": "Inflasi September Terkendali, Harga [Pangan] Mulai Menanjak",
  "deck": "Inflasi tahunan September 2026 tercatat 3,28 persen, masih dalam target Bank Indonesia, tapi harga cabai, ayam, dan telur naik tajam akibat gangguan cuaca.",
  "date": "2 Oktober 2026",
  "image": "assets/img/inflasi-september-terkendali-harga-pangan-mulai-menanjak.jpg",
  "imageV": "mupsrwl7",
  "tags": [
   "Inflasi",
   "Bank Indonesia",
   "Harga Pangan",
   "BPS"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2820926.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "aali-siapkan-buyback-rp400-miliar-di-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "AALI Siapkan Buyback [Rp400 Miliar] di Pasar Bergejolak",
  "deck": "AALI berencana membeli kembali saham senilai maksimal Rp400 miliar hingga 28 Desember 2026, memakai dana internal di bawah payung aturan OJK untuk pasar bergejolak.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "buyback saham",
   "Astra Agro Lestari",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4625450f9b_add7b60429.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-komisaris-utama-dan-direktur-mundur-rupslb-21-oktober",
  "category": "Aksi Korporasi",
  "title": "WIFI: Komisaris Utama dan Direktur [Mundur], RUPSLB 21 Oktober",
  "deck": "Hashim S. Djojohadikusumo mundur dari Komisaris Utama dan Henny Santoso dari Direktur WIFI, keputusan menunggu RUPSLB 21 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "RUPSLB",
   "pengunduran diri",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ae9147b0f1_27a0474b22.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-salurkan-lpg-ke-958-koperasi-desa-merah-putih",
  "category": "Energi",
  "title": "Pertamina Salurkan LPG ke [958] Koperasi Desa Merah Putih",
  "deck": "Pertamina Patra Niaga mencatat telah mendukung 958 Koperasi Desa/Kelurahan Merah Putih dengan distribusi LPG 3 kilogram hingga akhir September 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/pertamina-salurkan-lpg-ke-958-koperasi-desa-merah-putih.jpg",
  "imageV": "mupsrx1n",
  "tags": [
   "pertamina",
   "lpg",
   "koperasi desa merah putih",
   "energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470701-pertamina-patra-niaga-dukung-program-koperasi-desakelurahan-merah-putih-melalui-penyaluran-lpg"
 },
 {
  "slug": "harga-acuan-cpo-dan-kakao-naik-oktober-getah-pinus-turun",
  "category": "Bisnis",
  "title": "Harga Acuan CPO dan Kakao [Naik] Oktober, Getah Pinus Turun",
  "deck": "Kementerian Perdagangan menetapkan harga referensi dan patokan ekspor Oktober 2026: CPO dan biji kakao naik, getah pinus turun, kulit tetap, kayu olahan bervariasi.",
  "date": "1 Oktober 2026",
  "image": "assets/img/negosiasi-dagang-meja.jpg",
  "tags": [
   "CPO",
   "kakao",
   "bea keluar",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hr-cpo-dan-hpe-biji-kakao-naik-hpe-getah-pinus-turun-hpe-produk-kulit-tetap-hpe-produk-kayu-bervariasi-pada-oktober-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-agustus-tembus-us-26-61-miliar-manufaktur-jadi-penopang",
  "category": "Makroekonomi",
  "title": "Ekspor Agustus Tembus US$26,61 Miliar, [Manufaktur] Jadi Penopang",
  "deck": "Ekspor Indonesia Agustus 2026 tumbuh 6,72 persen menjadi US$26,61 miliar, ditopang manufaktur yang naik 12,48 persen, sementara neraca dagang surplus US$3,55 miliar.",
  "date": "1 Oktober 2026",
  "image": "assets/img/terminal-bus.jpg",
  "tags": [
   "ekspor",
   "neraca dagang",
   "manufaktur",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ekspor-agustus-2026-tembus-usd-2661-miliar-mendag-busan-manufaktur-jadi-motor-utama",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bi-perluas-obligasi-korporasi-untuk-jaminan-likuiditas-bank",
  "category": "Moneter",
  "title": "BI [Perluas] Obligasi Korporasi untuk Jaminan Likuiditas Bank",
  "deck": "Bank Indonesia menambah obligasi dan sukuk korporasi BUMN sebagai jaminan dalam operasi moneter, memperluas opsi likuiditas bagi perbankan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/bi-perluas-obligasi-korporasi-untuk-jaminan-likuiditas-bank.jpg",
  "imageV": "mupnb676",
  "tags": [
   "Bank Indonesia",
   "Operasi Moneter",
   "Obligasi Korporasi",
   "SMF"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2820726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "livin-by-mandiri-5-tahun-sbn-kini-jadi-agunan-kredit",
  "category": "Perbankan",
  "title": "Livin' by Mandiri 5 Tahun, SBN Kini Jadi [Agunan] Kredit",
  "deck": "Lima tahun beroperasi, pengguna Livin' by Mandiri tembus 42,1 juta dan surat utang negara milik nasabah kini bisa dijadikan jaminan kredit.",
  "date": "1 Oktober 2026",
  "image": "assets/img/livin-by-mandiri-5-tahun-sbn-kini-jadi-agunan-kredit.jpg",
  "imageV": "mupnb72n",
  "tags": [
   "bank mandiri",
   "livin by mandiri",
   "surat utang negara",
   "kredit digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470696-lima-tahun-berinovasi-livin-by-mandiri-hadirkan-solusi-investasi-dan-pembiayaan-fleksibel-untuk-tujuan-finansial-nasabah"
 },
 {
  "slug": "ppgl-panggil-rupslb-23-oktober-bahas-saham-bonus-dan-modal",
  "category": "Aksi Korporasi",
  "title": "PPGL Panggil RUPSLB 23 Oktober, Bahas [Saham Bonus] dan Modal",
  "deck": "PPGL mengundang RUPSLB dan RUPS Independen pada 23 Oktober 2026 untuk membahas saham bonus, penambahan modal dasar, dan rencana modal baru hingga 10% tanpa hak memesan efek terlebih dahulu.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "RUPSLB",
   "saham bonus",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c0c59961ae_e7ae1edefa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-siapkan-rights-issue-dilusi-maksimal-95-24",
  "category": "Aksi Korporasi",
  "title": "DOOH Siapkan Rights Issue, Dilusi Maksimal [95,24%]",
  "deck": "DOOH berencana menerbitkan maksimal 154,78 miliar saham baru lewat HMETD, mendilusi pemegang saham lama hingga 95,24 persen, untuk melunasi utang dan membangun infrastruktur AI.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "rights issue",
   "HMETD",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/77856b25cb_845d50899f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikai-tanggapi-permintaan-bursa-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "IKAI Tanggapi Permintaan Bursa soal [Volatilitas] Saham",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham IKAI; perseroan menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKAI",
   "Volatilitas Saham",
   "Bursa Efek Indonesia",
   "Intikeramik Alamasri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4e4f1175c1_cce2dfc3f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-alihkan-rp120-miliar-dana-ipo-ke-akuisisi-saham-inet",
  "category": "Aksi Korporasi",
  "title": "DOOH Alihkan [Rp120 Miliar] Dana IPO ke Akuisisi Saham INET",
  "deck": "DOOH mengajukan perubahan seluruh penggunaan dana IPO 2023, mengalihkan Rp120 miliar untuk membeli 6,685 miliar saham INET lewat anak usaha CNI, menyusul masuknya pengendali baru.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "INET",
   "penggunaan dana IPO",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/880d062e92_f7de77f097.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-terima-pinjaman-rp5-triliun-dari-sii-untuk-akuisisi-inet",
  "category": "Aksi Korporasi",
  "title": "DOOH Terima Pinjaman [Rp5 Triliun] dari SII untuk Akuisisi INET",
  "deck": "DOOH menandatangani pinjaman pemegang saham hingga Rp5 triliun dari pengendali SII untuk mendanai akuisisi 29,88 persen saham INET senilai sekitar Rp2 triliun, menunggu persetujuan RUPSLB.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "INET",
   "transaksi afiliasi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/863bd8cb2e_b8c68400bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-ajukan-akuisisi-rp2-triliun-saham-inet-ke-rups-9-november",
  "category": "Aksi Korporasi",
  "title": "DOOH Ajukan [Akuisisi] Rp2 Triliun Saham INET ke RUPS 9 November",
  "deck": "Anak usaha DOOH, PT Cakrawala Nexus Investama, membeli 29,88% saham PT Sinergi Inti Andalan Prima (INET) senilai Rp2,0055 triliun dari AKUN, menunggu persetujuan RUPSLB 9 November 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "INET",
   "akuisisi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/928dd3c31b_71dc76f4df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "okupansi-hotel-bintang-agustus-turun-ke-52-52",
  "category": "Bisnis",
  "title": "Okupansi Hotel Bintang Agustus Turun ke [52,52%]",
  "deck": "TPK hotel bintang nasional turun dari 54,54% pada Juli 2026 menjadi 52,52% pada Agustus 2026, mengakhiri kenaikan lima bulan beruntun.",
  "date": "1 Oktober 2026",
  "image": "assets/img/warung-makan.jpg",
  "tags": [
   "bps",
   "hotel",
   "pariwisata",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "wisman-agustus-tembus-1-60-juta-naik-6-bulan-beruntun",
  "category": "Bisnis",
  "title": "Wisman Agustus Tembus 1,60 Juta, [Naik 6 Bulan Beruntun]",
  "deck": "BPS mencatat kunjungan wisatawan mancanegara naik dibanding bulan sebelumnya maupun periode sama tahun lalu.",
  "date": "1 Oktober 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [
   "bps",
   "wisatawan asing",
   "pariwisata",
   "statistik"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "gtbo-ganti-direktur-laporan-molor-10-bulan-dari-rupslb",
  "category": "Aksi Korporasi",
  "title": "GTBO Ganti Direktur, Laporan [Molor] 10 Bulan dari RUPSLB",
  "deck": "GTBO mengangkat Yanry Musa sebagai Direktur dan Sandeep Kaur sebagai Komisaris Independen, tapi baru melapor ke OJK dan BEI hampir 10 bulan setelah RUPSLB menyetujuinya.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "pergantian direksi",
   "komisaris independen",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/66b173fa83_1a6e1ba4ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-luncurkan-simulator-untuk-percepat-sertifikasi-awak-kapal",
  "category": "Ketenagakerjaan",
  "title": "KKP Luncurkan [Simulator] untuk Percepat Sertifikasi Awak Kapal",
  "deck": "KKP mempercepat sertifikasi awak kapal perikanan di atas 300 GT lewat simulator pelatihan baru dan aturan pengawakan kapal yang baru terbit.",
  "date": "1 Oktober 2026",
  "image": "assets/img/kkp-luncurkan-simulator-untuk-percepat-sertifikasi-awak-kapal.jpg",
  "imageV": "mupj0ch2",
  "tags": [
   "KKP",
   "sertifikasi kapal",
   "perikanan tangkap",
   "simulator pelatihan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-percepat-sertifikasi-awak-kapal-perikanan-melalui-modernisasi-pelatihan-Pz4W.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "manufaktur-ri-kembali-ekspansi-surplus-dagang-melonjak",
  "category": "Makroekonomi",
  "title": "Manufaktur RI Kembali [Ekspansi], Surplus Dagang Melonjak",
  "deck": "Inflasi September terkendali di 3,28 persen, neraca dagang Agustus surplus US$3,55 miliar, dan PMI manufaktur kembali ke zona ekspansi di 52,4, naik dari 49,8 bulan sebelumnya.",
  "date": "1 Oktober 2026",
  "image": "assets/img/bendungan.jpg",
  "tags": [
   "Inflasi",
   "PMI Manufaktur",
   "Neraca Dagang"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7121/ekonomi-indonesia-tetap-tangguh-inflasi-terjaga-manufaktur-kembali-ekspansi-surplus-neraca-dagang-berlanjut",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "sofn-ubah-susunan-direksi-dan-komisaris-pasca-merger",
  "category": "Aksi Korporasi",
  "title": "SOFN Ubah Susunan [Direksi] dan Komisaris Pasca Merger",
  "deck": "SOFN mengganti dua komisaris, menambah tiga direktur baru, dan satu komisaris independen baru, efektif 1 Oktober 2026, bersamaan dengan rampungnya merger dengan Oto Multiartha.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFN",
   "Summit Oto Finance",
   "pergantian direksi",
   "dewan komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d6c2e68811_3fb122db88.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admf-saham-pengendali-4-53-beralih-di-pasar-negosiasi",
  "category": "Aksi Korporasi",
  "title": "ADMF: Saham Pengendali [4,53%] Beralih di Pasar Negosiasi",
  "deck": "Saham milik pemegang saham pengendali ADMF senilai 4,53% dari total saham beredar bertransaksi di pasar negosiasi, bersamaan dengan harga saham ADMF anjlok 4,9% pada 29 September 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "volatilitas saham",
   "pemegang saham pengendali",
   "pasar negosiasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5e57491509_c69c116752.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ifsh-jelaskan-ke-bei-soal-lonjakan-harga-saham-25",
  "category": "Aksi Korporasi",
  "title": "IFSH Jelaskan ke BEI soal Lonjakan Harga Saham [25%]",
  "deck": "Saham IFSH melonjak 25 persen pada 28 September dengan volume dan frekuensi transaksi naik tajam, saat IHSG dan sektor bahan baku melemah. Perseroan sebut tak ada informasi material baru.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IFSH",
   "Ifishdeco",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7dafda7b70_b20c7d3e4e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-ungkap-ke-bursa-penyebab-penurunan-kas-rp46-34-miliar",
  "category": "Aksi Korporasi",
  "title": "PRDA Ungkap ke Bursa Penyebab [Penurunan] Kas Rp46,34 Miliar",
  "deck": "Prodia menjawab permintaan penjelasan BEI soal penurunan kas, piutang menunggak, dan aset tetap per Juni 2026, serta tagihan pajak kurang bayar Rp345 juta yang sudah dilunasi.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "Prodia Widyahusada",
   "BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c5c1e75b89_b0b7cc8813.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wapo-jelaskan-ke-bursa-akui-kesalahan-pencatatan-piutang-berelasi",
  "category": "Aksi Korporasi",
  "title": "WAPO Jelaskan ke Bursa, Akui Kesalahan [Pencatatan] Piutang Berelasi",
  "deck": "Menjawab permintaan penjelasan BEI, WAPO mengakui kesalahan pencatatan piutang sewa ke pihak berelasi PT Inasentra Unisatya dan melunasi utang Rp19,6 miliar ke PT Sumber Kurnia Alam.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WAPO",
   "piutang pihak berelasi",
   "laporan keuangan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1c8e75b86c_53ef4548d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atap-terima-pinjaman-rp10-miliar-dari-perusahaan-afiliasi",
  "category": "Aksi Korporasi",
  "title": "ATAP Terima Pinjaman Rp10 Miliar dari Perusahaan [Afiliasi]",
  "deck": "PT Trimitra Prawara Goldland Tbk mendapat pinjaman Rp10 miliar berbunga 6 persen per tahun dari PT Dana Berguna Sejahtera, perusahaan yang terafiliasi lewat kesamaan direksi.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATAP",
   "transaksi afiliasi",
   "pinjaman",
   "Trimitra Prawara Goldland"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/176baf87a7_c08fd137b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kras-gabungkan-empat-anak-usaha-jadi-satu-penggabungan",
  "category": "Aksi Korporasi",
  "title": "KRAS Gabungkan Empat Anak Usaha Jadi Satu [Penggabungan]",
  "deck": "Krakatau Steel menggabungkan empat anak usaha baja menjadi satu entitas di bawah KBK, transaksi afiliasi yang dikecualikan dari prosedur khusus POJK karena seluruh pihak dikuasai penuh perseroan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRAS",
   "Krakatau Steel",
   "transaksi afiliasi",
   "restrukturisasi anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/320fd6eb9d_0cb6d509f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dnrk-laporkan-ulang-realisasi-dana-obligasi-viii-ke-ojk",
  "category": "Aksi Korporasi",
  "title": "DNRK laporkan ulang [realisasi] dana Obligasi VIII ke OJK",
  "deck": "Danareksa menyampaikan kembali laporan realisasi penggunaan dana Obligasi VIII senilai Rp1 triliun menyusul tanggapan OJK, dengan sisa dana Rp79,13 miliar disimpan di deposito afiliasi.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DNRK",
   "Danareksa",
   "obligasi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b931d3be29_a43c4af957.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmtr-jawab-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "BMTR Jawab Bursa Soal [Volatilitas] Transaksi Sahamnya",
  "deck": "BEI meminta penjelasan atas volatilitas transaksi saham BMTR. Global Mediacom membantah ada informasi material, namun akan mengecek rencana pemegang saham mayoritasnya.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMTR",
   "Global Mediacom",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fbb150c673_90c7522199.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bhit-jelaskan-ke-bei-lonjakan-transaksi-harga-turun-4-76",
  "category": "Aksi Korporasi",
  "title": "BHIT Jelaskan ke BEI [Lonjakan] Transaksi, Harga Turun 4,76%",
  "deck": "Setelah volume sahamnya melonjak sembilan kali lipat dan harga turun 4,76 persen pada 28 September, MNC Asia Holding menyatakan ke bursa tak ada informasi material di baliknya.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BHIT",
   "MNC Asia Holding",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/beeefc8545_94772167df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-masuk-pemantauan-khusus-bei-ekuitas-negatif",
  "category": "Aksi Korporasi",
  "title": "GIAA Masuk [Pemantauan Khusus] BEI, Ekuitas Negatif",
  "deck": "Bursa Efek Indonesia memasukkan saham Garuda Indonesia (GIAA) ke daftar Efek Dalam Pemantauan Khusus mulai 2 Oktober 2026 karena ekuitas perusahaan tercatat negatif.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "Garuda Indonesia",
   "BEI",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c5fd1310a2_a1fa4f0996.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-keluar-dari-pemantauan-khusus-naik-ke-papan-akselerasi",
  "category": "Aksi Korporasi",
  "title": "CASH Keluar dari [Pemantauan Khusus], Naik ke Papan Akselerasi",
  "deck": "BEI mencabut status pemantauan khusus saham PT Cashlez Worldwide Indonesia Tbk (CASH) dan memindahkannya ke Papan Akselerasi, efektif 2 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Bursa Efek Indonesia",
   "Pemantauan Khusus",
   "Papan Akselerasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/eebda25f98_f0cc51596e.pdf",
  "sourceLabel": "IDX"
 }
];
