// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "pakar-ri-perlu-perkuat-cadangan-energi-ala-jepang",
  "category": "Energi",
  "title": "Pakar: RI Perlu Perkuat [Cadangan] Energi ala Jepang",
  "deck": "Pakar kebijakan energi Jun Arima menyarankan Indonesia membangun cadangan energi strategis dan menggarap mineral kritis seperti yang dilakukan Jepang sejak 1970-an.",
  "date": "4 November 2026",
  "image": "assets/img/pakar-ri-perlu-perkuat-cadangan-energi-ala-jepang.jpg",
  "imageV": "mw2dxhgj",
  "tags": [
   "energi",
   "cadangan minyak",
   "Jepang",
   "mineral kritis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476671-indonesia-dinilai-perlu-terus-perkuat-ketahanan-energi-belajar-strategi-cadangan-minyak-dari-jepang"
 },
 {
  "slug": "ultj-ambil-alih-frisian-flag-kendali-ke-frieslandcampina",
  "category": "Aksi Korporasi",
  "title": "ULTJ Ambil Alih [Frisian Flag], Kendali ke FrieslandCampina",
  "deck": "ULTJ akan mengambil alih 100 persen saham Frisian Flag Indonesia lewat tukar saham non-tunai, sehingga pengendali perusahaan beralih dari keluarga Prawirawidjaja ke FrieslandCampina.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "Frisian Flag Indonesia",
   "FrieslandCampina",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/999581bae2_58adf38a1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-panggil-rupslb-tarik-168-8-juta-saham-treasuri",
  "category": "Aksi Korporasi",
  "title": "UNVR Panggil RUPSLB, Tarik [168,8 Juta] Saham Treasuri",
  "deck": "Unilever Indonesia memanggil RUPSLB 26 November 2026 untuk meminta persetujuan menarik seluruh 168,8 juta saham treasuri hasil buyback 2025, setara 0,44% modal disetor.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "RUPSLB",
   "saham treasuri",
   "pengurangan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6da8ff3383_dcb938ef74.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-rampungkan-alih-saham-gmfi-ke-danantara-jelang-rights-issue",
  "category": "Aksi Korporasi",
  "title": "GIAA Rampungkan Alih Saham GMFI ke Danantara Jelang [Rights Issue]",
  "deck": "Garuda Indonesia merampungkan peralihan 82,1 miliar saham GMFI dari Angkasa Pura ke Danantara Asset Management, yang akan disetor Danantara sebagai pengganti uang tunai dalam rights issue Garuda.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "rights issue",
   "Danantara",
   "GMFI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/56b51c5d6a_923f532942.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bukan-cuma-sertifikat-lppom-dorong-umkm-naik-kelas",
  "category": "UMKM",
  "title": "Bukan Cuma Sertifikat, LPPOM Dorong UMKM [Naik Kelas]",
  "deck": "LPPOM gelar Halal Connect 2026 di Jakarta, kumpulkan sekitar 100 pelaku usaha untuk membangun jejaring bisnis halal, bukan sekadar urus sertifikat.",
  "date": "4 November 2026",
  "image": "assets/img/bukan-cuma-sertifikat-lppom-dorong-umkm-naik-kelas.jpg",
  "imageV": "mw2dxhvp",
  "tags": [
   "umkm",
   "halal",
   "lppom",
   "jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476666-bukan-cuma-label-halal-begini-cara-pelaku-umkm-dapat-naik-kelas"
 },
 {
  "slug": "bold-akui-telat-lapor-kesiapan-dana-obligasi-soroti-likuiditas",
  "category": "Aksi Korporasi",
  "title": "BOLD Akui Telat Lapor Kesiapan Dana Obligasi, Soroti [Likuiditas]",
  "deck": "BUMA (BOLD) menjelaskan ke Bursa keterlambatan lapor kesiapan dana Obligasi III Rp503,15 miliar, di tengah tekanan likuiditas dan obligasi lain yang jatuh tempo Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "BUMA",
   "obligasi",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/68a1a66ba8_dfea5cdbed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-ajukan-pinjaman-rp1-1-triliun-dari-pengendali-pmj",
  "category": "Aksi Korporasi",
  "title": "BIKE Ajukan Pinjaman [Rp1,1 Triliun] dari Pengendali PMJ",
  "deck": "BIKE mengajukan pinjaman Standby Loan hingga Rp1,1 triliun dari pengendali PMJ, sekaligus menambah tujuh KBLI baru, untuk disetujui RUPSLB 11 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "transaksi afiliasi",
   "standby loan",
   "diversifikasi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d797142f88_b04c5d1d0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-lanjutkan-suspensi-saham-menn-dan-soul",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] Saham MENN dan SOUL",
  "deck": "BEI menegaskan dua emiten Papan Akselerasi, MENN dan SOUL, tetap disuspensi karena belum menyampaikan laporan keuangan interim Juni 2026 dan/atau belum membayar denda.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "SOUL",
   "Suspensi Saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ebe915b202_06bcb9fbc6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-lanjutkan-suspensi-62-saham-akibat-telat-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] 62 Saham Akibat Telat Laporan Keuangan",
  "deck": "Bursa Efek Indonesia mempertahankan suspensi perdagangan 62 saham karena belum menyerahkan laporan keuangan interim Juni 2026 dan/atau belum membayar denda Rp150 juta sejak 30 Oktober 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "suspensi saham",
   "BEI",
   "SRIL",
   "BTEL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/19083cc232_96785c4af2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-panggil-rups-independen-soal-pmthmetd-10",
  "category": "Aksi Korporasi",
  "title": "EMAS Panggil RUPS Independen soal [PMTHMETD] 10%",
  "deck": "RUPS pemegang saham independen EMAS pada 26 November 2026 akan memutuskan rencana penambahan modal tanpa hak memesan efek terlebih dahulu sebanyak-banyaknya 10 persen saham baru.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "RUPS",
   "PMTHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6030cd0056_db96ad1d67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-salurkan-tunjangan-guru-non-asn-rp921-6-miliar",
  "category": "Perbankan",
  "title": "BRI Salurkan [Tunjangan] Guru Non-ASN Rp921,6 Miliar",
  "deck": "BRI menyalurkan Rp921,6 miliar tunjangan profesi guru non-ASN triwulan III 2026 kepada sekitar 507 ribu guru honorer, masing-masing menerima Rp6 juta untuk periode Juli-September.",
  "date": "4 November 2026",
  "image": "assets/img/bri-salurkan-tunjangan-guru-non-asn-rp921-6-miliar.jpg",
  "imageV": "mw2dxidu",
  "tags": [
   "BRI",
   "Tunjangan Guru",
   "Guru Non-ASN",
   "Kemendikdasmen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476661-bri-salurkan-tunjangan-profesi-guru-non-asn-seniliai-rp9216-miliar-kepada-lebih-dari-507-ribu-penerima"
 },
 {
  "slug": "tbi-entikong-didorong-jadi-pintu-ekspor-impor-perbatasan",
  "category": "Bisnis",
  "title": "TBI Entikong Didorong Jadi Pintu [Ekspor-Impor] Perbatasan",
  "deck": "BNPPDT menggelar forum lintas kementerian untuk membenahi kendala regulasi dan infrastruktur agar Terminal Barang Internasional Entikong bisa dipakai penuh untuk perdagangan lintas negara.",
  "date": "4 November 2026",
  "image": "assets/img/tbi-entikong-didorong-jadi-pintu-ekspor-impor-perbatasan.jpg",
  "imageV": "mw29dleq",
  "tags": [
   "TBI Entikong",
   "BNPPDT",
   "perdagangan perbatasan",
   "Kalimantan Barat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476651-tbi-entikong-jadi-pintu-perdagangan-lintas-negara-bnppdt-genjot-percepatan-operasional"
 },
 {
  "slug": "kija-pendapatan-9m26-naik-16-laba-bersih-turun-38",
  "category": "Aksi Korporasi",
  "title": "KIJA: Pendapatan 9M26 [Naik] 16%, Laba Bersih Turun 38%",
  "deck": "Jababeka membukukan pendapatan Rp4,25 triliun pada 9M26, naik 16 persen, tapi laba bersih turun 38 persen akibat biaya refinancing obligasi dolar.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIJA",
   "Jababeka",
   "kinerja keuangan",
   "kawasan industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2a3c6bb392_c89012585d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-buka-akses-kredit-bagi-14-juta-ibu",
  "category": "UMKM",
  "title": "Presiden Prabowo Buka Akses Kredit bagi [14 Juta] Ibu",
  "deck": "PNM dan Kementerian UMKM menandatangani kerja sama Kredit Perempuan Prasejahtera, mulai berjalan 9 November 2026 dengan target 1,7 juta nasabah hingga akhir tahun.",
  "date": "4 November 2026",
  "image": "assets/img/presiden-prabowo-buka-akses-kredit-bagi-14-juta-ibu.jpg",
  "imageV": "mw29dlwg",
  "tags": [
   "UMKM",
   "PNM",
   "KPPS",
   "Kredit Perempuan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476647-presiden-prabowo-bakal-buka-akses-modal-bagi-14-juta-ibu-ibu-di-seluruh-indonesia"
 },
 {
  "slug": "bike-koreksi-kedua-ke-bursa-rincian-akuisisi-bum",
  "category": "Aksi Korporasi",
  "title": "BIKE Koreksi Kedua ke Bursa, Rincian Akuisisi [BUM]",
  "deck": "Koreksi kedua jawaban BIKE ke Bursa mengungkap akuisisi 72% saham BUM senilai Rp72 juta, menambah daftar transaksi yang pembayarannya masih tertunda menanti pinjaman pengendali.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/43841d172b_aef1884f84.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kredit-perempuan-prasejahtera-resmi-bunga-8-persen",
  "category": "UMKM",
  "title": "Kredit Perempuan Prasejahtera Resmi Bunga [8 Persen]",
  "deck": "Kementerian UMKM dan PNM menyalurkan Kredit Perempuan Prasejahtera dengan bunga flat 8 persen per tahun, disubsidi pemerintah senilai Rp2,62 triliun.",
  "date": "4 November 2026",
  "image": "assets/img/kredit-perempuan-prasejahtera-resmi-bunga-8-persen.jpg",
  "imageV": "mw29dmcn",
  "tags": [
   "UMKM",
   "PNM",
   "Kredit Perempuan Prasejahtera",
   "Subsidi Bunga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476638-kementerian-umkm-dan-pnm-siap-salurkan-kredit-perempuan-prasejahtera-bunga-flat-8-persen-per-tahun"
 },
 {
  "slug": "bina-ajukan-pmthmetd-ii-rencana-tambah-350-juta-saham-baru",
  "category": "Aksi Korporasi",
  "title": "BINA Ajukan [PMTHMETD] II, Rencana Tambah 350 Juta Saham Baru",
  "deck": "Bank Ina berencana menerbitkan hingga 350 juta saham baru tanpa hak memesan terlebih dahulu untuk memperkuat modal, menunggu persetujuan RUPS Independen 11 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINA",
   "Bank Ina Perdana",
   "PMTHMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/55cd553953_ddd26d6ed2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-akui-human-error-berulang-di-laporan-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "TRUE Akui [Human Error] Berulang di Laporan Kuartal III 2026",
  "deck": "Menjawab permintaan penjelasan BEI, Triniti Dinamik mengakui laporan kuartal III 2026 keliru di banyak pos dan masih menunggak ke Bank Panin.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "Triniti Dinamik",
   "BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1684a6945d_11b5ee85cd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmlp-laba-inti-melonjak-114-5-saham-masih-anjlok-60",
  "category": "Aksi Korporasi",
  "title": "MMLP: Laba Inti [Melonjak] 114,5%, Saham Masih Anjlok 60%",
  "deck": "Dalam public expose tahunan, manajemen MMLP mengungkap laba inti naik 114,5% menjadi Rp108,1 miliar, pelepasan anak usaha yang berujung rugi, dan tenggat free float baru di 2029.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMLP",
   "public expose",
   "free float",
   "laba inti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/924acc625e_bd1fe96aee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-jelaskan-ke-bursa-soal-pendanaan-us-429-juta-ke-sbth",
  "category": "Aksi Korporasi",
  "title": "TOBA Jelaskan ke Bursa Soal Pendanaan [US$429 Juta] ke SBTH",
  "deck": "TOBA menjelaskan ke BEI soal reorganisasi bisnis limbah dan investasi hingga US$429 juta ke anak usaha SBTH, yang perlu persetujuan RUPSLB 27 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "transaksi material",
   "RUPSLB",
   "pengelolaan limbah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/be1b6765c1_0c7b577669.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-hero-26-nov-calon-presdir-berafiliasi-pemegang-saham-utama",
  "category": "Aksi Korporasi",
  "title": "RUPSLB HERO 26 Nov, Calon Presdir [Berafiliasi] Pemegang Saham Utama",
  "deck": "HERO memanggil RUPSLB pada 26 November 2026 untuk menyetujui perubahan susunan direksi, termasuk calon presiden direktur baru yang berafiliasi dengan pemegang saham utama.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HERO",
   "RUPSLB",
   "Direksi",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d440aca953_a8bf96c659.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-resmi-delisting-etf-xnve-efektif-5-november-2026",
  "category": "Aksi Korporasi",
  "title": "BEI Resmi [Delisting] ETF XNVE Efektif 5 November 2026",
  "deck": "Bursa Efek Indonesia menghapus pencatatan ETF XNVE, Reksa Dana Indeks Nusadana IDX Value30, efektif 5 November 2026 setelah OJK mencabut pernyataan efektifnya akibat likuidasi.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XNVE",
   "delisting",
   "reksa dana",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/581dec033a_2857aac0c3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-tender-wajib-berakhir-nihil-saham-terjual",
  "category": "Aksi Korporasi",
  "title": "DOOH: Tender Wajib Berakhir, [Nihil] Saham Terjual",
  "deck": "Tender wajib PT Sinergi Internasional Investama atas saham DOOH berakhir tanpa satu pun pemegang saham publik yang menjual sahamnya.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "tender wajib",
   "pengendali baru",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/299ce6c3ed_69f15070cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "itmg-siapkan-buyback-saham-senilai-rp2-31-triliun",
  "category": "Aksi Korporasi",
  "title": "ITMG Siapkan [Buyback] Saham Senilai Rp2,31 Triliun",
  "deck": "Indo Tambangraya Megah akan membeli kembali saham senilai maksimal Rp2,31 triliun dari kas internal, berlaku 5 November 2026 hingga 4 Februari 2027, sesuai aturan OJK untuk pasar bergejolak.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMG",
   "buyback",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d10c605d0b_5464cccc88.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "flmc-siapkan-anak-usaha-distribusi-ekuitas-jadi-negatif",
  "category": "Aksi Korporasi",
  "title": "FLMC Siapkan Anak Usaha [Distribusi], Ekuitas Jadi Negatif",
  "deck": "FLMC berencana menambah KBLI Aktivitas Perusahaan Induk untuk membentuk anak usaha distribusi, sementara laporan yang sama menunjukkan ekuitas perseroan berbalik negatif per Juni 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "KBLI",
   "ekuitas negatif",
   "anak usaha distribusi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a1ff78252e_5f200904e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-rilis-8-waran-terstruktur-baru-mulai-tercatat-9-november",
  "category": "Aksi Korporasi",
  "title": "ZP Rilis 8 Waran [Terstruktur] Baru, Mulai Tercatat 9 November",
  "deck": "Maybank Sekuritas (ZP) menawarkan 8 call waran baru bersandar saham INCO, MAPA, PTBA, PWON, RATU, SMGR, SMRA, dan TLKM, mulai dicatatkan di BEI 9 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "call warrant",
   "Maybank Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bb6f47d434_b543a45941.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-rilis-10-waran-terstruktur-baru-tercatat-9-november",
  "category": "Aksi Korporasi",
  "title": "ZP Rilis 10 Waran [Terstruktur] Baru, Tercatat 9 November",
  "deck": "Maybank Sekuritas menerbitkan 10 waran terstruktur call baru berbasis ACES, ADMR, ANTM, BBNI, BBTN, BFIN, BMRI, ERAA, ESSA, dan HEAL, mulai tercatat di BEI 9 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "Maybank Sekuritas",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9f4c4ea1dc_b4e1591e69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smar-bagikan-dividen-interim-rp490-saham-total-rp1-41-triliun",
  "category": "Aksi Korporasi",
  "title": "SMAR Bagikan Dividen Interim [Rp490]/Saham, Total Rp1,41 Triliun",
  "deck": "Direksi SMAR menetapkan dividen interim tahun buku 2026 sebesar Rp490 per saham, total Rp1,41 triliun, dibayarkan 26 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "dividen interim",
   "agribisnis",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/aebb8de4b7_ed6a22dca6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djp-tawarkan-potongan-sanksi-pajak-100-hingga-akhir-2026",
  "category": "Makroekonomi",
  "title": "DJP Tawarkan Potongan Sanksi Pajak [100]% hingga Akhir 2026",
  "deck": "Pemerintah membuka keringanan sanksi administratif pajak hingga 100 persen bagi wajib pajak yang menuntaskan kewajibannya sampai akhir 2026, sebelum besarannya turun bertahap pada 2027.",
  "date": "4 November 2026",
  "image": "assets/img/djp-tawarkan-potongan-sanksi-pajak-100-hingga-akhir-2026.jpg",
  "imageV": "mw1yldw3",
  "tags": [
   "pajak",
   "sanksi pajak",
   "DJP",
   "Papua"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/sanksi-pajak-bisa-dikurangi-hingga-100-djp-papabrama-ajak-wajib-pajak-manfaatkan",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "ptsp-realisasi-17-gerai-baru-laba-tumbuh-12-ke-rp15-48-m",
  "category": "Aksi Korporasi",
  "title": "PTSP Realisasi 17 Gerai Baru, [Laba] Tumbuh 12% ke Rp15,48 M",
  "deck": "Dalam public expose insidentil, manajemen CFC melaporkan laba bersih kuartal III 2026 naik 12 persen menjadi Rp15,48 miliar, dengan realisasi 17 dari target 20 gerai baru.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTSP",
   "CFC",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/50fde83d7c_b444487cbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wico-review-keuangan-kuartal-iii-untuk-rencana-jual-aset",
  "category": "Aksi Korporasi",
  "title": "WICO Review Keuangan Kuartal III untuk Rencana [Jual] Aset",
  "deck": "WICO memberitahu BEI rencana penelaahan terbatas laporan keuangan interim Kuartal III 2026 guna mendukung rencana penjualan salah satu asetnya.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WICO",
   "limited review",
   "penjualan aset",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1b385c81ec_38a0be20a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-rampungkan-pmthmetd-saham-baru-ke-afiliasi",
  "category": "Aksi Korporasi",
  "title": "BIPP Rampungkan PMTHMETD, Saham Baru ke [Afiliasi]",
  "deck": "BIPP merampungkan penambahan modal tanpa HMETD senilai Rp100,57 miliar, seluruh 502,8 juta saham baru diserap dua pihak terafiliasi dengan harga Rp200 per saham.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "PMTHMETD",
   "dilusi saham",
   "pihak terafiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f5b435a51d_2a0f01a604.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "icon-laba-bersih-9m26-ambruk-82-jadi-rp367-juta",
  "category": "Aksi Korporasi",
  "title": "ICON: Laba Bersih 9M26 [Ambruk] 82% Jadi Rp367 Juta",
  "deck": "Laba bersih ICON sembilan bulan 2026 turun 82 persen jadi Rp367 juta, sementara perusahaan menarik utang bank baru Rp21,9 miliar.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ICON",
   "laporan keuangan",
   "laba bersih",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261104164732-65586-0/FinancialStatement-2026-III-ICON.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "city-laba-bersih-naik-49-6-jelang-public-expose-tahunan",
  "category": "Aksi Korporasi",
  "title": "CITY: laba bersih [naik] 49,6% jelang public expose tahunan",
  "deck": "Materi public expose tahunan CITY menunjukkan pendapatan naik ke Rp125,3 miliar dan laba bersih ke Rp17,8 miliar pada sembilan bulan 2026, tanpa penambahan saham baru.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITY",
   "public expose",
   "properti",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fa05aa1fbf_684f68ab80.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tguk-akui-belum-ada-sinergi-konkret-dengan-pengendali-baru-vcg",
  "category": "Aksi Korporasi",
  "title": "TGUK Akui Belum Ada [Sinergi] Konkret dengan Pengendali Baru VCG",
  "deck": "TGUK menjelaskan ke BEI strategi usaha pasca pengambilalihan oleh Visionary Capital Global, namun sinergi operasional dengan pengendali baru itu belum terwujud secara konkret.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "akuisisi",
   "Visionary Capital Global",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2b8337b658_da43bfbeb5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-gelar-public-expose-tahunan-18-november-2026",
  "category": "Aksi Korporasi",
  "title": "TRUE Gelar [Public Expose] Tahunan 18 November 2026",
  "deck": "Triniti Dinamik Tbk menjadwalkan Public Expose Tahunan tahun buku 2025 secara daring pada 18 November 2026, pendaftaran ditutup sehari sebelumnya.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "Triniti Dinamik",
   "Public Expose",
   "Properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f208274417_80427e241f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "army-gelar-rupslb-kedua-audit-keuangan-2021-2022-masih-tertunda",
  "category": "Aksi Korporasi",
  "title": "ARMY Gelar RUPSLB Kedua, Audit Keuangan 2021-2022 Masih [Tertunda]",
  "deck": "RUPSLB pertama Armidian Karyatama gagal kuorum, RUPSLB kedua digelar 13 November 2026 membahas pergantian direksi dan keterlambatan audit laporan keuangan 2021-2022.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARMY",
   "RUPSLB",
   "Armidian Karyatama",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c0f4fb49ea_880f76a384.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-gigp-kuasai-88-32-lewat-penempatan-terbatas-rp125-m",
  "category": "Aksi Korporasi",
  "title": "INPS: GIGP Kuasai [88,32%] Lewat Penempatan Terbatas Rp125 M",
  "deck": "RUPSLB 6 November akan memutuskan penerbitan hingga 1,25 miliar saham baru INPS tanpa hak memesan efek terlebih dahulu, seluruhnya diambil pengendali GIGP.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "private placement",
   "PMTHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/60a89dbfce_957ea9d35d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tfco-harga-saham-naik-tanpa-diketahui-dividen-masih-ditahan",
  "category": "Aksi Korporasi",
  "title": "TFCO: Harga Saham Naik Tanpa Diketahui, [Dividen] Masih Ditahan",
  "deck": "Dalam public expose insidentil, manajemen TFCO mengaku tidak tahu penyebab lonjakan harga saham dan menjelaskan dividen belum bisa dibagikan karena cadangan wajib belum terpenuhi.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFCO",
   "Public Expose",
   "Dividen",
   "Tifico Fiber Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/94e82800f1_d33611c190.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgik-alihkan-400-2-juta-saham-treasuri-ke-pengendali-gdk",
  "category": "Aksi Korporasi",
  "title": "DGIK Alihkan 400,2 Juta Saham Treasuri ke [Pengendali] GDK",
  "deck": "Nusa Konstruksi Enjiniring (DGIK) akan menjual seluruh 400,2 juta saham treasurinya ke pengendali, PT Global Dinamika Kencana, mulai 11 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGIK",
   "saham treasuri",
   "buyback",
   "GDK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/43d93146f0_7a537fe88d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jadwalkan-rupsi-dan-rupslb-11-desember",
  "category": "Aksi Korporasi",
  "title": "BIKE Jadwalkan [RUPSI] dan RUPSLB 11 Desember",
  "deck": "BIKE akan menggelar RUPSLB dan RUPSI pada 11 Desember 2026, dengan pemegang saham tercatat per 18 November 2026 yang berhak hadir.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "RUPSLB",
   "RUPSI",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2302cd2bd5_1cbab9708a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meta-panggil-rupslb-26-november-bahas-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "META Panggil RUPSLB 26 November, Bahas Susunan [Direksi]",
  "deck": "Nusantara Infrastructure menggelar RUPSLB pada 26 November 2026 dengan agenda tunggal persetujuan perubahan susunan direksi perseroan.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "RUPSLB",
   "Direksi",
   "Nusantara Infrastructure"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1f16bd84ce_eb964f5858.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kgi-hd-sesuaikan-itmghdcz6a-usai-dividen-tunai-itmg",
  "category": "Aksi Korporasi",
  "title": "KGI (HD) Sesuaikan [ITMGHDCZ6A] usai Dividen Tunai ITMG",
  "deck": "KGI Sekuritas menyesuaikan harga pelaksanaan dan rasio waran terstruktur ITMGHDCZ6A menyusul dividen tunai ITMG, efektif 11 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "ITMG",
   "waran terstruktur",
   "KGI Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ad7d84fd1c_45fdf6e3b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iiff-tawarkan-obligasi-rp1-7-triliun-bunga-7-2-7-6-persen",
  "category": "Aksi Korporasi",
  "title": "IIFF Tawarkan [Obligasi] Rp1,7 Triliun, Bunga 7,2-7,6 Persen",
  "deck": "IIFF merilis Obligasi Berkelanjutan III Tahap II senilai Rp1,7 triliun dalam tiga seri, ditawarkan 4-5 November dan tercatat di BEI pada 11 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIFF",
   "obligasi",
   "pasar modal",
   "infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6f177628a8_061eddb6bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-tegaskan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "ENRG Tegaskan Tak Ada Info [Material] di Balik Volatilitas Saham",
  "deck": "Merespons permintaan Bursa Efek Indonesia soal volatilitas transaksi sahamnya, Energi Mega Persada menyatakan tidak ada info material tersembunyi atau rencana aksi korporasi dalam waktu dekat.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "Energi Mega Persada",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e126e2f00b_3b5fd654d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-laba-bersih-naik-26-jadi-rp4-2-triliun-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "UNVR: Laba Bersih [Naik] 26% jadi Rp4,2 Triliun Kuartal III",
  "deck": "Laba bersih Unilever Indonesia naik 26 persen jadi Rp4,2 triliun di kuartal III 2026, didorong penjualan tumbuh dan untung penjualan unit usaha yang dihentikan.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "Unilever Indonesia",
   "laporan keuangan",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261104152117-65732-0/FinancialStatement-2026-III-UNVR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msci-ancam-turunkan-status-ri-pemerintah-genjot-transparansi-saham",
  "category": "Pasar Modal",
  "title": "MSCI Ancam Turunkan Status RI, Pemerintah Genjot [Transparansi] Saham",
  "deck": "Pemerintah mendorong keterbukaan pemilik saham di atas 1 persen menyusul ancaman penurunan status pasar modal Indonesia oleh penyedia indeks MSCI.",
  "date": "4 November 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "MSCI",
   "pasar modal",
   "rupiah",
   "OJK"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7197/hadapi-dinamika-pasar-modal-dan-rupiah-wamenko-dradjad-tekankan-pentingnya-mencermati-fundamental-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "assa-bagi-dividen-interim-rp20-per-saham-dibayar-20-november",
  "category": "Aksi Korporasi",
  "title": "ASSA Bagi [Dividen] Interim Rp20 per Saham, Dibayar 20 November",
  "deck": "ASSA menetapkan dividen interim tahun buku 2026 sebesar Rp20 per saham, total Rp73,82 miliar, dengan pembayaran dijadwalkan 20 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASSA",
   "dividen interim",
   "dividen tunai",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9e566145cd_b96c5d5ee8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bina-himpun-rp50-miliar-lewat-penerbitan-saham-baru",
  "category": "Aksi Korporasi",
  "title": "BINA Himpun [Rp50 Miliar] Lewat Penerbitan Saham Baru",
  "deck": "Bank Ina Perdana menerbitkan 13,8 juta saham baru senilai Rp50 miliar kepada PT Indoperkasa Suksesjaya Reasuransi untuk memperkuat modal inti bank.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINA",
   "PMTHMETD",
   "Bank Ina Perdana",
   "modal inti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f7106c8e1d_41dc4a9f96.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bina-jadwalkan-rupslb-dan-rups-independen-11-desember",
  "category": "Aksi Korporasi",
  "title": "BINA Jadwalkan RUPSLB dan RUPS [Independen] 11 Desember",
  "deck": "Bank Ina mengumumkan rencana RUPSLB sekaligus RUPS Independen pada 11 Desember 2026, tanda ada transaksi yang perlu restu pemegang saham non-afiliasi.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINA",
   "RUPSLB",
   "RUPS Independen",
   "Bank Ina Perdana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6be09f686e_6cafb91ba1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdra-panggil-rupslb-agendakan-pergantian-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "SDRA Panggil RUPSLB, Agendakan [Pergantian] Direksi-Komisaris",
  "deck": "Bank Woori Saudara (SDRA) memanggil RUPSLB pada 26 November 2026 di Jakarta untuk membahas perubahan susunan direksi dan komisaris perseroan.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDRA",
   "RUPSLB",
   "Bank Woori Saudara",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1b0751531f_285da0d420.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelindo-luncurkan-dashboard-acs-untuk-transparansi-bayar",
  "category": "BUMN",
  "title": "Pelindo Luncurkan Dashboard [ACS] untuk Transparansi Bayar",
  "deck": "Pelindo menghadirkan Dashboard ACS agar pengguna jasa pelabuhan bisa memantau status pembayaran kepelabuhanan secara langsung dan lebih transparan.",
  "date": "4 November 2026",
  "image": "assets/img/pelindo-luncurkan-dashboard-acs-untuk-transparansi-bayar.jpg",
  "imageV": "mw1r3f6v",
  "tags": [
   "Pelindo",
   "Dashboard ACS",
   "Transaksi Pelabuhan",
   "Digitalisasi BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476554-pelindo-hadirkan-dashboard-acs-transaksi-kepelabuhanan-kini-lebih-transparan-dan-mudah"
 },
 {
  "slug": "wmpp-catat-laba-bersih-rp92-9-miliar-naik-154-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "WMPP Catat Laba Bersih [Rp92,9 Miliar], Naik 154% di Kuartal III",
  "deck": "Pendapatan WMPP naik 40 persen menjadi Rp961,9 miliar di kuartal III 2026, didorong penjualan karkas ayam yang melonjak 70 persen YoY.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WMPP",
   "laba bersih",
   "kinerja keuangan",
   "industri pangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/790bd62824_56f7fb6530.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kblv-jadwalkan-rupslb-pada-11-desember-2026",
  "category": "Aksi Korporasi",
  "title": "KBLV Jadwalkan [RUPSLB] pada 11 Desember 2026",
  "deck": "First Media (KBLV) akan menggelar RUPSLB pada 11 Desember 2026, dengan pemegang saham berhak hadir dicatat per 18 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KBLV",
   "First Media",
   "RUPSLB",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c18432f60a_61eed8df61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpk-lakukan-stock-split-1-10-saham-jadi-12-miliar-lembar",
  "category": "Aksi Korporasi",
  "title": "PKPK Lakukan [Stock Split] 1:10, Saham Jadi 12 Miliar Lembar",
  "deck": "Paragon Karya Perkasa akan memecah saham dengan rasio 1:10, menambah jumlah saham beredar dari 1,2 miliar menjadi 12 miliar lembar, menunggu persetujuan RUPSLB pada 11 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PKPK",
   "stock split",
   "RUPSLB",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7edad59dde_f48ab96fe6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pans-umumkan-rupslb-pemegang-saham-tercatat-18-november-2026",
  "category": "Aksi Korporasi",
  "title": "PANS Umumkan RUPSLB, Pemegang Saham [Tercatat] 18 November 2026",
  "deck": "Panin Sekuritas akan menggelar RUPSLB pada 11 Desember 2026. Pemegang saham yang tercatat pada 18 November 2026 berhak hadir dan memberi suara dalam rapat.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PANS",
   "RUPSLB",
   "Panin Sekuritas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/aba0c64050_c0978a5404.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mark-bagikan-dividen-interim-kedua-rp20-per-saham",
  "category": "Aksi Korporasi",
  "title": "MARK Bagikan [Dividen] Interim Kedua Rp20 per Saham",
  "deck": "Mark Dynamics Indonesia membagikan dividen tunai interim kedua tahun buku 2026 senilai Rp76 miliar atau Rp20 per saham, dibayar 4 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MARK",
   "dividen",
   "pasar modal",
   "emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f2d5e59edb_eae722853e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgik-gdk-teken-cspa-tokyu-construction-bakal-pegang-25",
  "category": "Aksi Korporasi",
  "title": "DGIK: GDK Teken CSPA, Tokyu Construction Bakal Pegang [25%]",
  "deck": "GDK, pemegang saham utama DGIK, menandatangani perjanjian bersyarat untuk mengalihkan sebagian sahamnya ke Tokyu Construction Co. Ltd. yang berpotensi menguasai 25 persen saham DGIK.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGIK",
   "Tokyu Construction",
   "CSPA",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c972abe159_a388f4d304.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpk-beli-sisa-saham-dpal-rp722-miliar-ekuitas-turun-tajam",
  "category": "Aksi Korporasi",
  "title": "PKPK Beli Sisa Saham [DPAL] Rp722 Miliar, Ekuitas Turun Tajam",
  "deck": "Paragon Karya Perkasa (PKPK) akan membeli 50,99% sisa saham anak usahanya, DPAL, senilai Rp722,2 miliar dari pihak terafiliasi untuk menuntaskan akuisisi 99,99%.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PKPK",
   "Transaksi Material",
   "Akuisisi",
   "DPAL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9c839e2aec_34633bfe1b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-537-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.537.000 per Gram",
  "deck": "Harga emas batangan Antam hari ini turun Rp4.000 menjadi Rp2.537.000 per gram, sementara harga buyback ikut turun ke Rp2.307.000 per gram.",
  "date": "4 November 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-537-000-per-gram.jpg",
  "imageV": "mw1kkqwh",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "emas batangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476541-harga-emas-antam-hari-ini-4-november-2026-turun-jadi-rp2537000-per-gram-saatnya-beli"
 },
 {
  "slug": "pkpk-gelar-rupslb-dan-rups-independen-11-desember-2026",
  "category": "Aksi Korporasi",
  "title": "PKPK Gelar [RUPSLB] dan RUPS Independen 11 Desember 2026",
  "deck": "Paragon Karya Perkasa menjadwalkan RUPSLB dan RUPS Independen pada 11 Desember 2026. Pemegang saham yang tercatat per 18 November 2026 berhak hadir dan memberi suara.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PKPK",
   "RUPSLB",
   "RUPS Independen",
   "Paragon Karya Perkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/24551d67e7_0c60ddcfb7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kmds-panggil-rupslb-26-november-ubah-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "KMDS Panggil RUPSLB 26 November, Ubah [Anggaran Dasar]",
  "deck": "RUPSLB KMDS pada 26 November 2026 akan membahas penambahan klasifikasi KBLI ke anggaran dasar agar sesuai bidang usaha perseroan.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KMDS",
   "RUPSLB",
   "Anggaran Dasar",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/55375643ff_0fc8bf38eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idea-teken-pjbs-nawasena-ambil-alih-66-58-saham",
  "category": "Aksi Korporasi",
  "title": "IDEA Teken PJBS, Nawasena Ambil Alih [66,58%] Saham",
  "deck": "Nawasena Nugra Investama menandatangani perjanjian bersyarat untuk mengambil alih 707,3 juta saham IDEA, setara 66,58% kepemilikan, dari Eko Desriyanto dan PT Idea Asia Investama.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDEA",
   "akuisisi",
   "Nawasena Nugra Investama",
   "pengendali baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7b3c9810ad_8bbc6bc43e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-bei-lanjutkan-setop-saham-menn-dan-soul",
  "category": "Aksi Korporasi",
  "title": "[Suspensi] BEI Lanjutkan Setop Saham MENN dan SOUL",
  "deck": "BEI memperpanjang penghentian perdagangan saham MENN dan SOUL karena keduanya belum menyampaikan laporan keuangan interim 2026 dan/atau melunasi denda terkait.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "SOUL",
   "suspensi saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ac3d8e6f5a_036de73c31.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-sda-lewat-singapura-diperketat-bisa-tambah-penerimaan-negara",
  "category": "Energi",
  "title": "Ekspor SDA Lewat Singapura Diperketat, Bisa [Tambah] Penerimaan Negara",
  "deck": "Ekonom CORE Indonesia menilai larangan ekspor SDA lewat negara perantara seperti Singapura bisa menambah penerimaan negara hingga Rp3 triliun per tahun dari pajak dan royalti batu bara.",
  "date": "4 November 2026",
  "image": "assets/img/ekspor-sda-lewat-singapura-diperketat-bisa-tambah-penerimaan-negara.jpg",
  "imageV": "mw17rsy2",
  "tags": [
   "Bahlil Lahadalia",
   "ekspor batu bara",
   "Singapura",
   "penerimaan negara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476496-soal-kebijakan-menteri-bahlil-tertibkan-ekspor-sda-berpotensi-tambah-penerimaan-negara-hingga-triliun-rupiah"
 },
 {
  "slug": "surplus-perdagangan-ri-september-menyusut-ke-us-3-36-miliar",
  "category": "Makroekonomi",
  "title": "Surplus Perdagangan RI September [Menyusut] ke US$3,36 Miliar",
  "deck": "Surplus dagang Indonesia September 2026 menyusut tipis ke US$3,36 miliar akibat defisit migas melebar, sementara ekspor dan impor sama-sama tumbuh dua digit secara tahunan.",
  "date": "3 November 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "neraca dagang",
   "ekspor impor",
   "Kemendag",
   "PMI manufaktur"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tren-positif-perdagangan-luar-negeri-hingga-september-2026-tunjukkan-ketahanan-eksternal-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dari-patin-ke-gula-sawit-sumatera-unjuk-inovasi-iga-2026",
  "category": "UMKM",
  "title": "Dari Patin ke Gula Sawit, Sumatera [Unjuk] Inovasi IGA 2026",
  "deck": "Sepuluh pemerintah daerah di Sumatera masuk nominasi Innovative Government Award 2026, dari budidaya ikan patin di Sumatera Selatan hingga pengolahan batang sawit jadi gula merah di Sumatera Barat.",
  "date": "3 November 2026",
  "image": "assets/img/dari-patin-ke-gula-sawit-sumatera-unjuk-inovasi-iga-2026.jpg",
  "imageV": "mw0w3hm2",
  "tags": [
   "IGA 2026",
   "Kemendagri",
   "Sumatera Selatan",
   "Sumatera Barat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476471-gebrakan-inovasi-daerah-di-iga-2026-dari-patin-jadi-lumbung-pangan-hingga-batang-sawit-jadi-gula"
 },
 {
  "slug": "mypertamina-fair-2026-digelar-poin-direset-awal-2027",
  "category": "BUMN",
  "title": "MyPertamina Fair 2026 Digelar, Poin [Direset] Awal 2027",
  "deck": "Pertamina membuka program penukaran poin MyPertamina Fair 2026 selama dua bulan, sebelum seluruh saldo poin direset ke nol pada 1 Januari 2027.",
  "date": "3 November 2026",
  "image": "assets/img/mypertamina-fair-2026-digelar-poin-direset-awal-2027.jpg",
  "imageV": "mw0w3i3w",
  "tags": [
   "pertamina",
   "mypertamina",
   "konsumen",
   "poin loyalitas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476465-mypertamina-fair-2026-dimulai-pertamina-beri-apresiasi-bagi-konsumen-setia"
 },
 {
  "slug": "arus-peti-kemas-tumbuh-5-8-persen-ke-10-31-juta-teus",
  "category": "BUMN",
  "title": "Arus Peti Kemas [Tumbuh] 5,8 Persen ke 10,31 Juta TEUs",
  "deck": "Arus peti kemas Pelindo Terminal Petikemas tembus 10,31 juta TEUs sepanjang Januari-September 2026, tumbuh 5,8 persen didorong kenaikan perdagangan internasional.",
  "date": "3 November 2026",
  "image": "assets/img/arus-peti-kemas-tumbuh-5-8-persen-ke-10-31-juta-teus.jpg",
  "imageV": "mw1sy64q",
  "tags": [
   "pelindo",
   "peti kemas",
   "pelabuhan",
   "perdagangan internasional"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476458-perdagangan-meningkat-pesat-arus-peti-kemas-pelindo-tembus-103-juta-teus"
 },
 {
  "slug": "arus-peti-kemas-pelindo-tembus-10-3-juta-teus",
  "category": "BUMN",
  "title": "Arus Peti Kemas Pelindo [Tembus] 10,3 Juta TEUs",
  "deck": "Volume peti kemas Pelindo naik 5,80 persen jadi 10,31 juta TEUs dalam sembilan bulan 2026, didorong lonjakan arus perdagangan internasional.",
  "date": "3 November 2026",
  "image": "assets/img/arus-peti-kemas-pelindo-tembus-10-3-juta-teus.jpg",
  "imageV": "mw0w3jap",
  "tags": [
   "pelindo",
   "peti kemas",
   "pelabuhan",
   "logistik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476458-perdagangan-internasional-tumbuh-pesat-arus-peti-kemas-pelindo-tembus-103-juta-teus"
 },
 {
  "slug": "sqmi-kendali-tak-langsung-bisa-berubah-usai-induk-raih-us-70-juta",
  "category": "Aksi Korporasi",
  "title": "SQMI: Kendali Tak Langsung Bisa Berubah Usai Induk Raih [US$70 Juta]",
  "deck": "Induk usaha SQMI menjual saham dan obligasi konversi senilai sekitar US$70 juta ke Maxglory Capital, transaksi yang bisa mengubah kendali tidak langsung emiten ini.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "Wilton Makmur Indonesia",
   "Ciemas Gold Project",
   "perubahan kendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9abb7c3fc7_9f6533ce27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gpso-jelaskan-lonjakan-aset-62-76-ke-bursa-imbas-suntikan-modal",
  "category": "Aksi Korporasi",
  "title": "GPSO Jelaskan Lonjakan [Aset] 62,76% ke Bursa, Imbas Suntikan Modal",
  "deck": "GPSO melaporkan ke BEI, aset naik 62,76% dan liabilitas naik 63,59% per September 2026, didorong penerbitan 66,67 juta saham baru dan pembelian mesin secara kredit.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GPSO",
   "laporan keuangan",
   "penambahan modal",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103211339-65725-0/FinancialStatement-2026-III-GPSO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wamenko-ajak-investor-cermati-data-tak-ikut-indeks-asing",
  "category": "Pasar Modal",
  "title": "Wamenko Ajak Investor [Cermati] Data, Tak Ikut Indeks Asing",
  "deck": "Wamenko Dradjad Hari Wibowo meminta investor tidak sekadar mengikuti penilaian lembaga indeks asing seperti MSCI, melainkan menganalisis sendiri data emiten dan ekonomi nasional.",
  "date": "3 November 2026",
  "image": "assets/img/investor-ritel-ponsel.jpg",
  "tags": [
   "pasar modal",
   "investor",
   "MSCI",
   "pertumbuhan ekonomi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7196/jaga-kepercayaan-di-tengah-dinamika-pasar-modal-wamenko-dradjad-ajak-investor-utamakan-data-dan-analisis",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "harga-acuan-batu-bara-turun-tipis-kalori-rendah-naik",
  "category": "Energi",
  "title": "Harga Acuan Batu Bara [Turun] Tipis, Kalori Rendah Naik",
  "deck": "Harga acuan batu bara kalori tinggi turun tipis ke US$125,60 per ton untuk pertengahan November, sementara batu bara kalori menengah dan rendah naik 2,4 sampai 4,8 persen.",
  "date": "3 November 2026",
  "image": "assets/img/harga-acuan-batu-bara-turun-tipis-kalori-rendah-naik.jpg",
  "imageV": "mw0qpo1k",
  "tags": [
   "Batu Bara",
   "HBA",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hba-november-turun-tipis-harga-batu-bara-kalori-rendah-justru-naik",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "pemerintah-siapkan-storage-minyak-impor-60-hari",
  "category": "Energi",
  "title": "Pemerintah Siapkan [Storage] Minyak Impor 60 Hari",
  "deck": "Pemerintah membangun storage minyak impor di Sumatra untuk stok 60 hari, sambil melanjutkan mandatori B50 dan menyiapkan peta jalan bioetanol E20-E50.",
  "date": "3 November 2026",
  "image": "assets/img/pemerintah-siapkan-storage-minyak-impor-60-hari.jpg",
  "imageV": "mw0qppaz",
  "tags": [
   "Energi",
   "ESDM",
   "Storage Minyak",
   "Bioetanol"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/perkuat-ketahanan-energi-pemerintah-siapkan-storage-minyak-hingga-60-hari-dan-bioetanol-e20",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "fire-balik-untung-rp2-4-miliar-utang-bank-naik-12-kali",
  "category": "Aksi Korporasi",
  "title": "FIRE Balik Untung Rp2,4 Miliar, [Utang] Bank Naik 12 Kali",
  "deck": "Laporan kuartal III 2026 FIRE menunjukkan laba bersih Rp2,4 miliar, berbalik dari rugi, tapi ditopang utang bank baru Rp35 miliar sementara kas menyusut tajam.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIRE",
   "laporan keuangan",
   "batu bara",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103203142-65727-0/FinancialStatement-2026-III-FIRE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "folk-catat-laba-rp17-3-m-usai-rights-issue-dan-akuisisi",
  "category": "Aksi Korporasi",
  "title": "FOLK Catat [Laba] Rp17,3 M Usai Rights Issue dan Akuisisi",
  "deck": "Multi Garam Utama (FOLK) membalik rugi jadi laba Rp17,3 miliar pada kuartal III 2026, ditopang rights issue dan akuisisi PT Traya Multi Investama.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FOLK",
   "laporan keuangan",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103202859-65427-0/FinancialStatement-2026-III-FOLK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-rugi-rp25-3-miliar-auditor-soroti-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "TGRA Rugi Rp25,3 Miliar, Auditor Soroti [Kelangsungan] Usaha",
  "deck": "TGRA mencatat rugi Rp25,29 miliar pada kuartal III 2026, saldo defisit tembus Rp293 miliar, dan auditor menyoroti ketidakpastian soal kelangsungan usaha perusahaan.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "going concern",
   "PLTMH",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103201859-64823-0/FinancialStatement-2026-III-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btek-ganti-pencatatan-ubo-pengendali-golden-harvest-tetap",
  "category": "Aksi Korporasi",
  "title": "BTEK Ganti Pencatatan [UBO], Pengendali Golden Harvest Tetap",
  "deck": "BTEK memperbarui nama pemilik manfaat akhir di sistem Kemenkumham dari Lee Chi Kuen ke Komisaris Utama Anne Patricia Sutanto, tanpa mengubah pemegang saham pengendali.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTEK",
   "UBO",
   "Golden Harvest",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fce08b39a0_f000ecee70.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-siapkan-transisi-bbm-e20-ke-e50",
  "category": "Energi",
  "title": "Pemerintah Siapkan Transisi BBM E20 ke [E50]",
  "deck": "Presiden Prabowo Subianto minta ESDM dan Kementan siapkan peta jalan transisi bahan bakar etanol dari E20 ke E50, sembari mempertahankan biodiesel B50.",
  "date": "3 November 2026",
  "image": "assets/img/pemerintah-siapkan-transisi-bbm-e20-ke-e50.jpg",
  "imageV": "mw0qppum",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476431-perkuat-ketahanan-energi-pemerintah-bersiap-implementasikan-bahan-bakar-e20-hingga-e50"
 },
 {
  "slug": "arko-naikkan-pinjaman-ke-anak-usaha-jadi-rp110-miliar",
  "category": "Aksi Korporasi",
  "title": "ARKO Naikkan [Pinjaman] ke Anak Usaha Jadi Rp110 Miliar",
  "deck": "Arkora Hydro menambah plafon pinjaman ke anak usahanya, PT Arkora Hydro Malili, dari Rp75 miliar menjadi Rp110 miliar, senilai 21 persen ekuitas perseroan.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "transaksi afiliasi",
   "pinjaman pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/eff4975a1e_dabb826858.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-tanam-5-850-bibit-pohon-di-tujuh-wilayah",
  "category": "BUMN",
  "title": "PNM [Tanam] 5.850 Bibit Pohon di Tujuh Wilayah",
  "deck": "PNM Peduli menanam 5.850 bibit pohon endemik di tujuh wilayah lewat program Green Impact, memadukan penghijauan dengan pemberdayaan UMKM lokal.",
  "date": "3 November 2026",
  "image": "assets/img/pnm-tanam-5-850-bibit-pohon-di-tujuh-wilayah.jpg",
  "imageV": "mw0qpqgh",
  "tags": [
   "PNM",
   "Green Impact",
   "penghijauan",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476436-perluas-penghijauan-di-tujuh-wilayah-pnm-tanam-5850-bibit-pohon-endemik"
 },
 {
  "slug": "yelo-panggil-rupslb-kedua-modal-dasar-naik-ke-rp765-miliar",
  "category": "Aksi Korporasi",
  "title": "YELO Panggil RUPSLB Kedua, [Modal Dasar] Naik ke Rp765 Miliar",
  "deck": "RUPSLB pertama gagal kuorum, YELO panggil rapat kedua pada 10 November 2026 untuk menyetujui kenaikan modal dasar dari Rp275,2 miliar menjadi Rp765,1 miliar.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "RUPSLB",
   "modal dasar",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/31a22283e0_1228f1eb67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-tanggapi-bursa-ungkap-rencana-transaksi-afiliasi",
  "category": "Aksi Korporasi",
  "title": "FORU Tanggapi Bursa, Ungkap Rencana [Transaksi Afiliasi]",
  "deck": "Fortune Indonesia menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, dan mengonfirmasi rencana transaksi afiliasi dan/atau material dalam waktu dekat.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "volatilitas transaksi",
   "transaksi afiliasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/98c517121b_00442ad4f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-jadi-ketua-d-8-bidik-optimalkan-pakta-dagang-preferensial",
  "category": "Global",
  "title": "RI Jadi Ketua D-8, Bidik Optimalkan Pakta Dagang [Preferensial]",
  "deck": "Sebagai Ketua Developing-8 2026-2027, Indonesia mendorong pemanfaatan pakta dagang preferensial D-8 yang baru menopang ekspor US$40,26 juta dari total dagang US$40,95 miliar pada 2025.",
  "date": "3 November 2026",
  "image": "assets/img/ri-jadi-ketua-d-8-bidik-optimalkan-pakta-dagang-preferensial.jpg",
  "imageV": "mw0kttsa",
  "tags": [
   "D-8",
   "Pakta Dagang",
   "Ekonomi Halal",
   "Ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-dorong-optimalisasi-kerja-sama-perdagangan-intra-d-8",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "nilai-dagang-ri-yaman-naik-5-6-persen-jadi-us-150-juta",
  "category": "Global",
  "title": "Nilai Dagang RI-Yaman [Naik] 5,6 Persen Jadi US$150 Juta",
  "deck": "Wamendag Roro dan Wakil Menteri Perdagangan Yaman bertemu di Istanbul membahas penguatan kemitraan dagang, saat nilai perdagangan kedua negara capai US$150,1 juta pada 2025.",
  "date": "3 November 2026",
  "image": "assets/img/nilai-dagang-ri-yaman-naik-5-6-persen-jadi-us-150-juta.jpg",
  "imageV": "mw0ktvws",
  "tags": [
   "Yaman",
   "Kementerian Perdagangan",
   "Perdagangan Bilateral",
   "Produk Halal"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/wamendag-roro-dorong-kemitraan-dunia-usaha-untuk-perkuat-perdagangan-indonesia-yaman",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "boga-akuisisi-distributor-chery-senilai-rp4-85-miliar",
  "category": "Aksi Korporasi",
  "title": "BOGA Akuisisi Distributor [Chery] Senilai Rp4,85 Miliar",
  "deck": "Dua entitas anak BOGA membeli seluruh saham PT Pradipta Cakra Buana, pemegang kontrak distributor resmi Chery, senilai total Rp4,85 miliar.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOGA",
   "akuisisi",
   "otomotif",
   "Chery"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4e55151c4d_2a9ca7ee6f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-pangkas-liabilitas-23-tapi-kas-tergerus-jadi-rp501-juta",
  "category": "Aksi Korporasi",
  "title": "PIPA pangkas liabilitas 23%, tapi kas [tergerus] jadi Rp501 juta",
  "deck": "Oxala Energy International (PIPA) menjelaskan ke OJK dan BEI penurunan liabilitas 22,99%, tapi kas perusahaan anjlok dari Rp12,6 miliar jadi hanya Rp501 juta.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "Oxala Energy International",
   "liabilitas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103173347-65723-0/FinancialStatement-2026-III-PIPA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcic-dirut-ritsuo-fukadai-mundur-tunggu-restu-ojk-rups",
  "category": "Aksi Korporasi",
  "title": "BCIC: Dirut Ritsuo Fukadai [Mundur], Tunggu Restu OJK-RUPS",
  "deck": "Direktur Utama Bank JTrust Indonesia, Ritsuo Fukadai, mengajukan surat pengunduran diri pada 30 Oktober 2026, efektif setelah mendapat persetujuan OJK dan RUPS.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCIC",
   "Bank JTrust Indonesia",
   "pergantian direksi",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/898a11532f_b1e96cce19.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-koreksi-jawaban-bursa-rp21-85-m-akuisisi-belum-dibayar",
  "category": "Aksi Korporasi",
  "title": "BIKE Koreksi Jawaban Bursa, Rp21,85 M Akuisisi Belum [Dibayar]",
  "deck": "BIKE merinci jawaban ke BEI soal tiga akuisisi, MTI, FBM, dan BUM senilai total sekitar Rp21,85 miliar, yang pembayarannya masih menunggu pinjaman dari pengendali PMJ.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4f59af71f6_17cba0183c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rhb-sesuaikan-waran-terstruktur-itmg-ikuti-dividen-us-74-2-juta",
  "category": "Aksi Korporasi",
  "title": "RHB Sesuaikan Waran Terstruktur [ITMG] Ikuti Dividen US$74,2 Juta",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan Waran Terstruktur ITMG mengikuti dividen tunai US$74,2 juta dari PT Indo Tambangraya Megah, dibayarkan 18 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "ITMG",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2a3c1716e9_66b3e94ce8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-laba-melonjak-3-kali-lipat-jadi-us-147-juta-di-9m26",
  "category": "Aksi Korporasi",
  "title": "INCO: Laba [Melonjak] 3 Kali Lipat jadi US$147 Juta di 9M26",
  "deck": "Vale Indonesia mencatat laba bersih US$147 juta pada 9 bulan 2026, naik hampir tiga kali lipat, sementara total liabilitas melonjak 36 persen akibat pinjaman bank baru US$175 juta.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "Vale Indonesia",
   "laba bersih",
   "nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103164905-65722-0/FinancialStatement-2026-III-INCO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-tambah-kriteria-di-papan-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "BOSS Tambah Kriteria di Papan [Pemantauan Khusus] BEI",
  "deck": "BEI menambahkan kriteria tidak ada pendapatan ke daftar masalah saham BOSS yang sudah berstatus pemantauan khusus akibat ekuitas negatif dan anak usaha bermasalah, efektif 4 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "Pemantauan Khusus",
   "BEI",
   "saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/21b5fc18db_3e4c5c3238.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kgi-hd-sesuaikan-waran-terstruktur-medc-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "KGI (HD) Sesuaikan Waran [Terstruktur] MEDC usai Dividen Tunai",
  "deck": "Harga dan rasio pelaksanaan waran MEDCHDCX6A serta MEDCHDCH7A disesuaikan menyusul dividen tunai MEDC, efektif 11 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "MEDC",
   "waran terstruktur",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/807b3211ee_f6667efeb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asdf-lunasi-obligasi-seri-a-rp300-miliar-lepas-dari-bei-4-november",
  "category": "Aksi Korporasi",
  "title": "ASDF Lunasi Obligasi [Seri A] Rp300 Miliar, Lepas dari BEI 4 November",
  "deck": "Obligasi Berkelanjutan VII Astra Sedaya Finance Tahap II Seri A senilai Rp300 miliar jatuh tempo dan dihapus dari pencatatan BEI mulai 4 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDF",
   "obligasi",
   "pasar modal",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e023079799_ef2059214f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-rugi-rp9-01-miliar-kuartal-iii-2025-defisit-modal-melebar",
  "category": "Aksi Korporasi",
  "title": "BOSS Rugi Rp9,01 Miliar Kuartal III/2025, [Defisit] Modal Melebar",
  "deck": "Laporan interim kuartal III 2025 BOSS mencatat rugi bersih Rp9,01 miliar dan defisiensi modal melebar jadi Rp232,66 miliar, sementara penjualan tetap nihil dan kas menyusut tajam.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "laporan keuangan",
   "defisit modal",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202511/20261103163544-65720-0/FinancialStatement-2025-III-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-dan-cbre-masuk-pemantauan-khusus-bei-ekuitas-negatif",
  "category": "Aksi Korporasi",
  "title": "LAPD dan CBRE Masuk [Pemantauan] Khusus BEI, Ekuitas Negatif",
  "deck": "BEI menetapkan saham LAPD dan CBRE masuk daftar pemantauan khusus efektif 4 November 2026 karena ekuitas keduanya negatif di laporan keuangan terakhir.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "CBRE",
   "pemantauan khusus",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e587e5a483_e10ff8d515.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smelter-menjamur-esdm-kaji-pembatasan-produk-setengah-jadi",
  "category": "Industri",
  "title": "Smelter Menjamur, ESDM Kaji [Pembatasan] Produk Setengah Jadi",
  "deck": "Pemerintah mengkaji apakah smelter yang baru menghasilkan produk setengah jadi masih bisa terus dibangun bebas, atau wajib diarahkan sampai produk akhir.",
  "date": "3 November 2026",
  "image": "assets/img/smelter-menjamur-esdm-kaji-pembatasan-produk-setengah-jadi.jpg",
  "imageV": "mw0h115x",
  "tags": [
   "smelter",
   "hilirisasi",
   "nikel",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/smelter-membludak-produknya-masih-setengah-jadi-pemerintah-siapkan-kajian",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "harga-nikel-melorot-pemerintah-perketat-izin-produksi",
  "category": "Energi",
  "title": "Harga Nikel Melorot, Pemerintah [Perketat] Izin Produksi",
  "deck": "Kelebihan pasokan nikel hampir 800 ribu ton membuat harga turun ke bawah US$16.000 per ton; pemerintah akan mengetatkan RKAB untuk menahan produksi.",
  "date": "3 November 2026",
  "image": "assets/img/harga-nikel-melorot-pemerintah-perketat-izin-produksi.jpg",
  "imageV": "mw0h12pr",
  "tags": [
   "nikel",
   "RKAB",
   "ESDM",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pasokan-nikel-berlebih-bahlil-siapkan-pengetatan-rkab-untuk-jaga-harga",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "zp-sesuaikan-waran-itmg-usai-dividen-tunai-us-74-2-juta",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Waran] ITMG usai Dividen Tunai US$74,2 Juta",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi dua waran terstruktur ITMG, menyusul dividen tunai ITMG senilai US$74,2 juta.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "ITMG",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4f91843363_999286f54b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-waran-medc-usai-dividen-interim-us-30-juta",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Waran] MEDC usai Dividen Interim US$30 Juta",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran MEDCZPCF7A dan MEDCZPCN7A menyusul dividen interim MEDC senilai US$30 juta, efektif 11 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "MEDC",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/dc733e3ea5_8e3c05510e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-targetkan-produksi-listrik-naik-49-5-di-2027",
  "category": "Aksi Korporasi",
  "title": "ARKO Targetkan Produksi Listrik Naik [49,5%] di 2027",
  "deck": "Dalam public expose insidentil, manajemen ARKO memaparkan produksi listrik yang tetap tumbuh di tengah El Nino dan proyeksi lonjakan produksi pada 2027.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "public expose",
   "energi terbarukan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/46ecccf054_8f944823b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-cabai-melonjak-ke-rp124-ribu-mendag-sebut-faktor-cuaca",
  "category": "Makroekonomi",
  "title": "Harga Cabai [Melonjak] ke Rp124 Ribu, Mendag Sebut Faktor Cuaca",
  "deck": "Harga cabai rawit merah tembus Rp124.400 per kg akibat kemarau panjang, pemerintah kirim stok antar daerah untuk menambal kekurangan pasokan.",
  "date": "3 November 2026",
  "image": "assets/img/harga-cabai-melonjak-ke-rp124-ribu-mendag-sebut-faktor-cuaca.jpg",
  "imageV": "mw0h135r",
  "tags": [
   "harga cabai",
   "cuaca ekstrem",
   "Kemendag",
   "pasokan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476392-harga-cabai-merah-melonjak-tembus-rp124-ribu-mendag-faktor-cuaca"
 },
 {
  "slug": "meta-bagi-dividen-interim-rp3-50-per-saham-bayar-3-desember",
  "category": "Aksi Korporasi",
  "title": "META Bagi [Dividen Interim] Rp3,50 per Saham, Bayar 3 Desember",
  "deck": "Nusantara Infrastructure (META) membagikan dividen interim Rp60,6 miliar atau Rp3,50 per saham untuk tahun buku 2026, dengan pembayaran dijadwalkan 3 Desember 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "dividen interim",
   "Nusantara Infrastructure",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/67f29e3b9c_436c0fa8d2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meta-tetapkan-jadwal-dividen-interim-rp3-50-per-saham",
  "category": "Aksi Korporasi",
  "title": "META Tetapkan [Jadwal] Dividen Interim Rp3,50 per Saham",
  "deck": "Nusantara Infrastructure menetapkan recording date 11 November dan tanggal pembayaran dividen interim Rp3,50 per saham pada 3 Desember 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "dividen interim",
   "Nusantara Infrastructure",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bf13f672dc_6918e3d24d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbhi-sewa-ruang-kantor-dari-bank-mega-rp3-18-miliar",
  "category": "Aksi Korporasi",
  "title": "BBHI Sewa Ruang Kantor dari [Bank Mega] Rp3,18 Miliar",
  "deck": "Allo Bank menyewa ruang lantai 5 dan 6 Menara Bank Mega senilai Rp3,18 miliar untuk enam bulan, transaksi afiliasi dengan sesama anak usaha kelompok Bank Mega.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBHI",
   "transaksi afiliasi",
   "Bank Mega",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a42a6017ed_82a24a8f07.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpix-ganti-komisaris-independen-sepakati-laba-rp7-9-miliar",
  "category": "Aksi Korporasi",
  "title": "MPIX Ganti Komisaris [Independen], Sepakati Laba Rp7,9 Miliar",
  "deck": "RUPST dan RUPSLB MPIX menetapkan Dr. Nurfaizi sebagai komisaris independen baru dan membagi laba bersih Rp7,92 miliar tahun 2025.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPIX",
   "RUPST",
   "komisaris independen",
   "waran seri I"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f6c9e49b76_ac75d8bb64.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ssia-catat-laba-bersih-rp344-4-miliar-properti-jadi-pendorong",
  "category": "Aksi Korporasi",
  "title": "SSIA Catat Laba Bersih Rp344,4 Miliar, [Properti] Jadi Pendorong",
  "deck": "Pendapatan sembilan bulan SSIA naik 44,7 persen menjadi Rp4,8 triliun, didorong lonjakan segmen properti dan perhotelan, sementara konstruksi melambat dan kas menyusut akibat ekspansi lahan Subang.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSIA",
   "kinerja keuangan",
   "properti",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6f907d058a_c02509e2eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apia-alihkan-seluruh-saham-gmf-rp5-66-triliun-ke-induk-injourney",
  "category": "Aksi Korporasi",
  "title": "APIA Alihkan Seluruh Saham GMF Rp5,66 Triliun ke Induk [InJourney]",
  "deck": "APIA mengalihkan seluruh 82,1 miliar lembar sahamnya di GMF Aero Asia, senilai Rp5,66 triliun, ke induk usaha PT Aviasi Pariwisata Indonesia (Persero) lewat skema dividen in specie.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APIA",
   "GMF",
   "InJourney",
   "dividen in specie"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a6ff82e788_2af2e6e5a4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "omed-bukukan-laba-rp336-miliar-target-pendapatan-2026-direvisi",
  "category": "Aksi Korporasi",
  "title": "OMED Bukukan Laba Rp336 Miliar, Target Pendapatan 2026 [Direvisi]",
  "deck": "Pendapatan OMED naik 26,1 persen menjadi Rp1,85 triliun pada sembilan bulan pertama 2026, dan perseroan menaikkan target pendapatan setahun penuh menjadi sekitar Rp2,5 triliun.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OMED",
   "Jayamas Medica Industri",
   "kinerja kuartal III 2026",
   "alat kesehatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e2b9a53219_36e42e3038.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-disuspensi-bursa-usai-gagal-bayar-kupon-obligasi",
  "category": "Aksi Korporasi",
  "title": "WIKA [Disuspensi] Bursa Usai Gagal Bayar Kupon Obligasi",
  "deck": "Bursa Efek Indonesia melanjutkan penghentian perdagangan saham WIKA di seluruh pasar sejak 3 November 2026 setelah perseroan gagal membayar bunga obligasi dan bagi hasil sukuk yang jatuh tempo hari itu.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "suspensi saham",
   "obligasi korporasi",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7c70c4483e_86677c0685.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-rugi-rp31-8-m-di-2025-marjin-kotor-naik-ke-5-6",
  "category": "Aksi Korporasi",
  "title": "MTFN Rugi Rp31,8 M di 2025, [Marjin] Kotor Naik ke 5,6%",
  "deck": "Capitalinc Investment (MTFN) membukukan rugi bersih Rp31,8 miliar pada 2025 dengan pendapatan Rp519,4 miliar, meski marjin kotor naik dari 2,4 menjadi 5,6 persen.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "Capitalinc Investment",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/dbb065d28f_334acb28dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baik-panggil-rupslb-susunan-komisaris-berpotensi-berubah",
  "category": "Aksi Korporasi",
  "title": "BAIK Panggil RUPSLB, Susunan [Komisaris] Berpotensi Berubah",
  "deck": "RUPSLB PT Bersama Mencapai Puncak Tbk (BAIK) digelar 25 November 2026 di Malang, agendanya persetujuan perubahan susunan Dewan Komisaris Perseroan.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "RUPSLB",
   "Dewan Komisaris",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2e0d554f47_7d537d33f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-lapor-lk-triwulan-iii-2024-defisit-modal-melebar",
  "category": "Aksi Korporasi",
  "title": "[BOSS] Lapor LK Triwulan III/2024, Defisit Modal Melebar",
  "deck": "Laporan kuartal III 2024 yang baru disampaikan ke BEI awal November 2026 ini menunjukkan penjualan nihil dan defisiensi modal membesar jadi Rp215,22 miliar.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "defisit modal",
   "laporan keuangan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202411/20261103142547-65715-0/FinancialStatement-2024-III-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-konversi-utang-jadi-saham-ekuitas-berbalik-positif",
  "category": "Aksi Korporasi",
  "title": "UNSP Konversi Utang Jadi Saham, [Ekuitas] Berbalik Positif",
  "deck": "Bakrie Sumatera Plantations (UNSP) mencatat aset naik 114,72% dan liabilitas turun 46,14% per September 2026, setelah mengonversi utang senilai Rp4,04 triliun menjadi saham baru.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "restrukturisasi utang",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/42385f9285_3221d7537e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbto-catat-laba-rp19-41-miliar-balik-dari-rugi-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "MBTO Catat [Laba] Rp19,41 Miliar, Balik dari Rugi 9 Bulan 2026",
  "deck": "Penjualan neto Martina Berto naik 29 persen jadi Rp379,99 miliar pada sembilan bulan 2026, membawa laba neto Rp19,41 miliar setelah rugi Rp18,82 miliar pada periode sama tahun lalu.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBTO",
   "Martina Berto",
   "laporan keuangan",
   "kosmetik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103135822-65717-0/FinancialStatement-2026-III-MBTO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-ungkap-akuisisi-tambang-lewat-rights-issue-ii",
  "category": "Aksi Korporasi",
  "title": "LAPD Ungkap Akuisisi Tambang Lewat [Rights Issue] II",
  "deck": "Dalam public expose tahunan, manajemen Leyand International mengakui ekuitas negatif dan pendapatan merosot, sekaligus memastikan akuisisi BSS lewat rights issue kedua berjalan bertahap hingga 2027.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "Leyand International",
   "Public Expose",
   "akuisisi tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2c4f0d70cc_eed683064b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iotf-laba-bersih-turun-57-kas-menyusut-91-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "IOTF: Laba Bersih Turun 57%, [Kas] Menyusut 91% di Kuartal III",
  "deck": "Laporan keuangan interim Sumber Sinergi Makmur per September 2026 menunjukkan laba bersih turun separuh dan arus kas operasi berbalik negatif, meski utang bank jangka pendek sudah lunas.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IOTF",
   "laporan keuangan",
   "arus kas",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103125732-65694-0/FinancialStatement-2026-III-IOTF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-kantongi-kontrak-epc-rp400-miliar-dari-pupuk-kaltim",
  "category": "Aksi Korporasi",
  "title": "PTPP Kantongi Kontrak EPC [Rp400 Miliar] dari Pupuk Kaltim",
  "deck": "PTPP meraih kontrak EPC Dermaga 11 senilai Rp400 miliar dari Pupuk Kaltim di Bontang, proyek berdurasi 570 hari untuk mendukung distribusi material industri pupuk.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "kontrak konstruksi",
   "Pupuk Kaltim",
   "EPC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/528cda06ab_56623820a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-ubah-aturan-izin-tambang-prioritaskan-pengusaha-daerah",
  "category": "Energi",
  "title": "Bahlil Ubah Aturan Izin Tambang, [Prioritaskan] Pengusaha Daerah",
  "deck": "Kementerian ESDM mengganti skema tender izin tambang dengan prioritas untuk UMKM, koperasi, dan BUMD agar pengusaha daerah lebih mudah mengelola tambang di wilayahnya.",
  "date": "3 November 2026",
  "image": "assets/img/bahlil-ubah-aturan-izin-tambang-prioritaskan-pengusaha-daerah.jpg",
  "imageV": "mw0ahixs",
  "tags": [
   "izin tambang",
   "Bahlil Lahadalia",
   "UMKM",
   "BUMD"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476341-bahlil-ubah-aturan-izin-tambang-pengusaha-daerah-kini-dapat-prioritas"
 },
 {
  "slug": "asmi-jelaskan-ke-bei-aset-susut-26-akibat-investasi-saham-anjlok",
  "category": "Aksi Korporasi",
  "title": "ASMI Jelaskan ke BEI, Aset Susut 26% akibat [Investasi] Saham Anjlok",
  "deck": "Perseroan menjelaskan ke BEI penurunan total aset 26 persen dan liabilitas 24 persen per September 2026, dipicu turunnya nilai investasi saham dan premi asuransi.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASMI",
   "asuransi",
   "laporan keuangan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103114915-65710-0/FinancialStatement-2026-III-ASMI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtsm-bukukan-laba-kuartal-iii-tapi-ekuitas-susut-21-6-persen",
  "category": "Aksi Korporasi",
  "title": "MTSM Bukukan Laba Kuartal III, tapi [Ekuitas] Susut 21,6 Persen",
  "deck": "Laporan keuangan interim kuartal III 2026 MTSM mencatat laba bersih Rp465,65 juta, namun ekuitas tergerus koreksi saldo laba Rp6,58 miliar dan utang naik 45 persen.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTSM",
   "laporan keuangan",
   "properti",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103115020-65704-0/FinancialStatement-2026-III-MTSM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsmr-panggil-rupslb-setujui-penggabungan-lmj-tol-ke-jtt",
  "category": "Aksi Korporasi",
  "title": "JSMR Panggil RUPSLB, Setujui [Penggabungan] LMJ-TOL ke JTT",
  "deck": "Jasa Marga memanggil RUPSLB pada 25 November 2026 untuk membahas penggabungan anak usaha tol LMJ dan TOL ke JTT, perubahan anggaran dasar, dan perubahan susunan pengurus.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "RUPSLB",
   "Jasa Marga",
   "Merger anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1d7d6d9184_b144769848.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-lapor-lk-kuartal-i-2025-defisit-modal-melebar-lagi",
  "category": "Aksi Korporasi",
  "title": "BOSS Lapor LK Kuartal I/2025, [Defisit] Modal Melebar Lagi",
  "deck": "Laporan keuangan interim Kuartal I/2025 BOSS, baru disampaikan ke bursa 2 November 2026, menunjukkan rugi berlipat dan defisit modal melebar jadi Rp232,61 miliar.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "defisiensi modal",
   "laporan keuangan interim",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202511/20261103112441-65705-0/FinancialStatement-2025-I-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fimp-seluruh-piutang-usaha-macet-lebih-dari-120-hari",
  "category": "Aksi Korporasi",
  "title": "FIMP: Seluruh [Piutang] Usaha Macet Lebih dari 120 Hari",
  "deck": "BEI meminta FIMP menjelaskan sejumlah kejanggalan laporan keuangan, dari piutang usaha yang seluruhnya macet lebih dari 120 hari hingga arus kas operasional yang berbalik negatif.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIMP",
   "piutang usaha",
   "arus kas",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/94a86437fa_a4e63d5a2e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fapa-tegaskan-tak-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "FAPA Tegaskan Tak Terlibat [Penyelidikan] Karhutla Singapura",
  "deck": "FAP Agri menjawab permintaan penjelasan lanjutan Bursa soal pemanggilan grup afiliasinya oleh Pemerintah Singapura terkait penyelidikan karhutla, dan menyatakan tidak ada dampak material bagi perseroan.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAPA",
   "karhutla",
   "keterbukaan informasi",
   "Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3db7fe5433_3fe720e260.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bhit-anak-usaha-bcap-catat-laba-naik-18-6-di-9m-2026",
  "category": "Aksi Korporasi",
  "title": "BHIT: Anak Usaha [BCAP] Catat Laba Naik 18,6% di 9M-2026",
  "deck": "PT MNC Kapital Indonesia Tbk (BCAP), anak usaha BHIT, membukukan laba bersih Rp182,28 miliar pada 9M-2026, naik 18,6% yoy meski pendapatan total turun tipis.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BHIT",
   "BCAP",
   "MNC Kapital",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/87691525dd_434a659425.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "keen-tegaskan-tak-terlibat-investigasi-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "KEEN Tegaskan Tak Terlibat Investigasi [Karhutla] Singapura",
  "deck": "PT Kencana Energi Lestari Tbk menjawab permintaan penjelasan BEI soal investigasi karhutla yang menyeret afiliasinya, Kencana Agri, dan menegaskan tidak ada keterlibatan langsung.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KEEN",
   "Karhutla",
   "Kencana Agri",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ae7e0ca793_f92a24e6ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "live-laba-bersih-anjlok-73-jadi-rp2-83-miliar",
  "category": "Aksi Korporasi",
  "title": "LIVE: Laba Bersih [Anjlok] 73% Jadi Rp2,83 Miliar",
  "deck": "Pendapatan Homeco Victoria Makmur turun 36 persen jadi Rp131,2 miliar dalam sembilan bulan 2026, menggerus laba bersih ke Rp2,83 miliar.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIVE",
   "laporan keuangan",
   "consumer cyclicals",
   "household goods"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103104807-65624-0/FinancialStatement-2026-III-LIVE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "halo-jadwalkan-rupslb-pada-10-desember-2026",
  "category": "Aksi Korporasi",
  "title": "HALO Jadwalkan [RUPSLB] pada 10 Desember 2026",
  "deck": "Haloni Jane Tbk akan menggelar rapat pemegang saham luar biasa 10 Desember 2026, dengan tanggal pencatatan pemegang saham pada 17 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO",
   "RUPSLB",
   "Haloni Jane",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f92c3d1c8d_4806463437.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-ubah-aturan-tambang-prioritaskan-pengusaha-daerah",
  "category": "Energi",
  "title": "ESDM [Ubah] Aturan Tambang, Prioritaskan Pengusaha Daerah",
  "deck": "Kementerian ESDM mengubah aturan izin tambang mineral dan batu bara agar UMKM, koperasi, dan BUMD mendapat prioritas, karena selama ini izin lebih banyak dikuasai pengusaha besar berkantor di Jakarta.",
  "date": "3 November 2026",
  "image": "assets/img/esdm-ubah-aturan-tambang-prioritaskan-pengusaha-daerah.jpg",
  "imageV": "mw03svkg",
  "tags": [
   "ESDM",
   "Tambang",
   "UMKM",
   "Minerba"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/tambangnya-di-daerah-izinnya-di-jakarta-bahlil-ubah-aturan-agar-orang-daerah-kebagian",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ri-pasok-43-batu-bara-dunia-produksi-kini-direm-pemerintah",
  "category": "Energi",
  "title": "RI Pasok 43% Batu Bara Dunia, Produksi Kini [Direm] Pemerintah",
  "deck": "Pemerintah mengendalikan produksi batu bara lewat jatah RKAB agar harga tidak jatuh, sembari mengklaim penerimaan negara terus naik hingga 2026.",
  "date": "3 November 2026",
  "image": "assets/img/ri-pasok-43-batu-bara-dunia-produksi-kini-direm-pemerintah.jpg",
  "imageV": "mw03sxpl",
  "tags": [
   "batu bara",
   "RKAB",
   "ESDM",
   "penerimaan negara"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pasok-hampir-separuh-pasar-dunia-tapi-dijual-murah-bahlil-kendalikan-produksi-batu-bara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bcap-laba-bersih-naik-18-6-pendapatan-turun-tipis-di-9m-2026",
  "category": "Aksi Korporasi",
  "title": "BCAP: Laba Bersih Naik 18,6%, [Pendapatan] Turun Tipis di 9M-2026",
  "deck": "Laba bersih BCAP naik 18,6% jadi Rp182,28 miliar pada 9M-2026, tapi pendapatan konsolidasi turun tipis dan aset perusahaan menyusut dibanding akhir 2025.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCAP",
   "MNC Kapital",
   "laba bersih",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7a4e3a30f7_4b9a8b12b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-rp10-000-jadi-rp2-541-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas [Antam] Naik Rp10.000 Jadi Rp2.541.000/Gram",
  "deck": "Harga emas batangan Antam naik Rp10.000 menjadi Rp2.541.000 per gram pada Selasa, 3 November 2026, dengan harga buyback Rp2.311.000 per gram.",
  "date": "3 November 2026",
  "image": "assets/img/harga-emas-antam-naik-rp10-000-jadi-rp2-541-000-gram.jpg",
  "imageV": "mw03sy7q",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476322-harga-emas-antam-hari-ini-3-november-2026-naik-jadi-rp2541000-per-gram-pertimbangkan-jika-mau-menjual"
 },
 {
  "slug": "swasembada-gula-dikejar-2-tahun-ratoon-tebu-digenjot",
  "category": "Industri",
  "title": "Swasembada Gula Dikejar 2 Tahun, [Ratoon] Tebu Digenjot",
  "deck": "Pemerintah memangkas target swasembada gula dari empat tahun jadi dua tahun lewat peremajaan tanaman tebu sistem ratoon yang kini diperluas ke Jawa Timur dan Jawa Tengah, termasuk Klaten.",
  "date": "3 November 2026",
  "image": "assets/img/swasembada-gula-dikejar-2-tahun-ratoon-tebu-digenjot.jpg",
  "imageV": "mw03syq4",
  "tags": [
   "gula",
   "ratoon tebu",
   "swasembada",
   "Klaten"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476320-kejar-target-swasembada-gula-dua-tahun-peremajaan-sistem-ratoon-tebu-diperluas-ke-jatimjateng"
 },
 {
  "slug": "post-batalkan-rupo-dan-rupsi-tunggu-audit-kelar",
  "category": "Aksi Korporasi",
  "title": "POST Batalkan RUPO dan RUPSI, Tunggu [Audit] Kelar",
  "deck": "PT Pos Indonesia membatalkan RUPO Obligasi 2022 dan dua RUPSI karena audit laporan keuangan belum tuntas, menyusul downgrade Fitch ke status gagal bayar.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "obligasi",
   "sukuk",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e8f16fe0d6_c9fb50ede8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-semester-i-2026-masih-nihil-penjualan-defisit-melebar",
  "category": "Aksi Korporasi",
  "title": "BOSS Semester I/2026: Masih Nihil Penjualan, [Defisit] Melebar",
  "deck": "Defisiensi modal BOSS melebar jadi Rp265,81 miliar per Juni 2026, dari Rp260,16 miliar akhir 2025, sementara penjualan bersih tetap nol sepanjang semester pertama.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "defisiensi modal",
   "laporan keuangan interim",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103091006-65703-0/FinancialStatement-2026-II-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "midi-tebar-dividen-interim-rp127-miliar-rp3-8-per-saham",
  "category": "Aksi Korporasi",
  "title": "MIDI Tebar [Dividen] Interim Rp127 Miliar, Rp3,8 per Saham",
  "deck": "Midi Utama Indonesia (MIDI) membagikan dividen interim tahun buku 2026 senilai Rp127,05 miliar atau Rp3,8 per saham, dibayarkan paling lambat 1 Desember 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MIDI",
   "dividen",
   "Alfamidi",
   "emiten ritel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/077bcc19d7_e1b05951d4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ifii-bagikan-dividen-interim-kedua-rp47-06-miliar",
  "category": "Aksi Korporasi",
  "title": "IFII bagikan dividen interim kedua [Rp47,06 miliar]",
  "deck": "Direksi IFII memutuskan dividen interim kedua tahun buku 2026 sebesar Rp5 per saham, total Rp47,06 miliar, dibayar 26 November 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IFII",
   "dividen interim",
   "dividen tunai",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9c0095caf0_e634068ee4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hill-catat-ekuitas-negatif-rp412-7-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "HILL catat ekuitas [negatif] Rp412,7 miliar di kuartal III 2026",
  "deck": "Ekuitas Hillcon (HILL) minus Rp412,7 miliar usai pendapatan anjlok hampir 85 persen dan rugi bersih membengkak jadi Rp832,1 miliar pada sembilan bulan pertama 2026.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HILL",
   "Hillcon",
   "laporan keuangan",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103072610-65684-0/FinancialStatement-2026-III-HILL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-koreksi-lagi-jawaban-bursa-akui-fbm-libatkan-direksi",
  "category": "Aksi Korporasi",
  "title": "BIKE Koreksi Lagi Jawaban Bursa, Akui FBM Libatkan [Direksi]",
  "deck": "BIKE merevisi jawabannya ke BEI dan mengonfirmasi akuisisi FBM senilai Rp10,89 miliar melibatkan direksinya sendiri, sementara tiga akuisisi senilai total Rp21,85 miliar masih belum dibayar lunas.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "transaksi afiliasi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0528c2519d_1861bb0e23.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-jelaskan-utang-rp25-miliar-ke-csm-kas-cuma-rp237-juta",
  "category": "Aksi Korporasi",
  "title": "CSMI jelaskan utang Rp25 miliar ke CSM, [kas] cuma Rp237 juta",
  "deck": "CSMI menanggapi permintaan penjelasan Bursa soal rencana 2027, pinjaman Rp25 miliar dari pihak terkait, dan penutupan dua outlet NWS Chicken.",
  "date": "3 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "likuiditas",
   "pinjaman pihak berelasi",
   "outlet"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c540c26b07_52d3ce69f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-jadwalkan-public-expose-suspensi-saham-masih-berlanjut",
  "category": "Aksi Korporasi",
  "title": "BOSS Jadwalkan Public Expose, [Suspensi] Saham Masih Berlanjut",
  "deck": "BOSS menjadwalkan ulang public expose tahunan ke 4 November 2026, sementara suspensi saham sejak April 2024 dan nihilnya produksi batubara di 2025 masih berlanjut.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "public expose",
   "suspensi saham",
   "batubara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b1495fb253_6fe934136e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-koreksi-jadwal-public-expose-tambang-mangkrak",
  "category": "Aksi Korporasi",
  "title": "BOSS Koreksi Jadwal Public Expose, Tambang [Mangkrak]",
  "deck": "BOSS mengoreksi jadwal public expose tahunan untuk tahun buku 2023 menjadi 4 November 2026, sementara anak usaha tambangnya masih pailit dan belum berproduksi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "public expose",
   "suspensi saham",
   "tambang batubara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8bcaa2a0b7_6045772ef0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pyfa-rugi-rp338-7-miliar-utang-jangka-pendek-melonjak",
  "category": "Aksi Korporasi",
  "title": "PYFA Rugi Rp338,7 Miliar, [Utang] Jangka Pendek Melonjak",
  "deck": "Pendapatan PYFA naik 17 persen jadi Rp2,41 triliun dalam sembilan bulan 2026, namun utang jangka pendek membengkak dan ekuitas pemegang saham menyusut.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PYFA",
   "laporan keuangan",
   "utang",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261103000316-65305-0/FinancialStatement-2026-III-PYFA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asmi-rugi-rp115-36-miliar-di-sembilan-bulan-2026-ekuitas-susut-30",
  "category": "Aksi Korporasi",
  "title": "ASMI Rugi [Rp115,36 Miliar] di Sembilan Bulan 2026, Ekuitas Susut 30%",
  "deck": "Laporan keuangan interim kuartal III 2026 ASMI berbalik rugi akibat kerugian wajar investasi, meski hasil bisnis asuransi intinya justru membaik.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASMI",
   "asuransi",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102234934-65690-0/FinancialStatement-2026-III-ASMI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tris-penjualan-9-bulan-naik-12-laba-pemegang-saham-turun",
  "category": "Aksi Korporasi",
  "title": "TRIS: Penjualan 9 Bulan Naik 12%, Laba Pemegang Saham [Turun]",
  "deck": "Penjualan Trisula International naik 12 persen dalam sembilan bulan, tapi bagian laba untuk pemegang saham justru turun karena pertumbuhan terbesar dinikmati pemegang saham minoritas anak usaha.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIS",
   "laporan keuangan",
   "Trisula International",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102234455-65585-0/FinancialStatement-2026-III-TRIS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admr-beber-ke-bursa-utang-bank-melonjak-ke-us-1-16-miliar",
  "category": "Aksi Korporasi",
  "title": "ADMR Beber ke Bursa, Utang Bank Melonjak ke [US$1,16 Miliar]",
  "deck": "ADMR menjelaskan ke BEI bahwa utang bank naik ke US$1,16 miliar dan liabilitas sewa ke US$691,59 juta untuk membiayai smelter aluminium KAI, sementara arus kas operasi masih negatif.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMR",
   "smelter aluminium",
   "utang bank",
   "royalti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bcea9a4434_3c20b63673.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cent-rombak-utang-rp12-48-t-ekuitas-masih-negatif",
  "category": "Aksi Korporasi",
  "title": "CENT Rombak Utang Rp12,48 T, [Ekuitas] Masih Negatif",
  "deck": "CENT menjelaskan ke BEI soal refinancing utang Rp12,48 triliun, setara 510 persen ekuitas, sementara ekuitas perusahaan masih negatif Rp1,94 triliun setelah transaksi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CENT",
   "refinancing",
   "utang korporasi",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6f6fe81475_fcf27968a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "swid-laba-turun-21-utang-melonjak-36",
  "category": "Aksi Korporasi",
  "title": "SWID: Laba Turun 21%, [Utang] Melonjak 36%",
  "deck": "Laba bersih SWID turun 21 persen jadi Rp23,02 miliar dalam sembilan bulan, sementara total liabilitas melonjak 36 persen menjadi Rp311,29 miliar akibat utang ke pihak berelasi dan pemasok.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWID",
   "laporan keuangan",
   "liabilitas",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102232655-65642-0/FinancialStatement-2026-III-SWID.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpw-laba-kuartal-iii-turun-8-pendapatan-susut-11",
  "category": "Aksi Korporasi",
  "title": "PTPW: Laba Kuartal III [Turun] 8%, Pendapatan Susut 11%",
  "deck": "Pendapatan dan laba bersih Pratama Widya turun pada sembilan bulan pertama 2026, meski ekuitas naik ditopang suntikan modal mitra di anak usaha baru.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPW",
   "laporan keuangan",
   "konstruksi",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102230753-65670-0/FinancialStatement-2026-III-PTPW.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-pembeli-saham-baru-punya-hubungan-keluarga-dengan-pengendali",
  "category": "Aksi Korporasi",
  "title": "BIPP: Pembeli Saham Baru Punya [Hubungan Keluarga] dengan Pengendali",
  "deck": "BIPP menjawab permintaan Bursa soal PMTHMETD: PT Gratamulia Pratama, penerima 494,4 juta saham baru, berelasi keluarga dengan pengendali, sementara free float turun ke 15,99 persen.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "PMTHMETD",
   "Gratamulia Pratama",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3eac401b77_edf4ed54a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inflasi-terjaga-dagang-surplus-manufaktur-ri-ekspansi",
  "category": "Makroekonomi",
  "title": "Inflasi Terjaga, Dagang Surplus, Manufaktur RI [Ekspansi]",
  "deck": "Inflasi Oktober 2026 terjaga di 3,23 persen, neraca dagang September surplus US$3,36 miliar tiga bulan beruntun, dan PMI manufaktur naik ke 54,0, ekspansi tertinggi sejak Maret 2024.",
  "date": "2 November 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "inflasi",
   "neraca dagang",
   "PMI manufaktur",
   "ekspor"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7195/ekonomi-indonesia-semakin-tangguh-inflasi-terjaga-manufaktur-terus-ekspansi-surplus-neraca-dagang-berlanjut",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "hari-ritel-nasional-2026-dimulai-umkm-didorong-masuk-ritel",
  "category": "UMKM",
  "title": "Hari Ritel Nasional 2026 [Dimulai], UMKM Didorong Masuk Ritel",
  "deck": "Kemendag membuka Hari Ritel Nasional 2026 di Bandung pada 2-11 November, mengajak UMKM memperluas pemasaran lewat jaringan ritel modern.",
  "date": "2 November 2026",
  "image": "assets/img/hari-ritel-nasional-2026-dimulai-umkm-didorong-masuk-ritel.jpg",
  "imageV": "mvzfi0z2",
  "tags": [
   "UMKM",
   "ritel",
   "Kemendag",
   "APRINDO"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/buka-hari-ritel-nasional-2026-mendag-busan-ajak-umkm-gencar-masuk-ritel",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "indf-tanggapi-bei-soal-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "INDF Tanggapi BEI soal [Penyelidikan] Karhutla Singapura",
  "deck": "Indofood menjelaskan ke BEI bahwa anak usahanya, Indofood Agri Resources, dipanggil otoritas Singapura terkait penyelidikan karhutla, dan prosesnya masih berjalan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDF",
   "karhutla",
   "Singapura",
   "SIMP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a108e94d68_ce6e3a80b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "simp-tanggapi-bursa-sebut-induk-usaha-disoal-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "SIMP Tanggapi Bursa, Sebut Induk Usaha Disoal [Karhutla] Singapura",
  "deck": "SIMP menjelaskan ke Bursa Efek Indonesia bahwa pihak yang dipanggil otoritas Singapura terkait isu karhutla adalah induk usahanya, Indofood Agri Resources Ltd, bukan perseroan secara langsung.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIMP",
   "karhutla",
   "Bursa Efek Indonesia",
   "Indofood Agri Resources"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c9f745ba39_13a914c846.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lsip-tanggapi-bursa-induk-tak-langsung-disebut-soal-karhutla",
  "category": "Aksi Korporasi",
  "title": "LSIP Tanggapi Bursa, Induk Tak Langsung Disebut Soal [Karhutla]",
  "deck": "Lonsum menjawab permintaan penjelasan Bursa Efek Indonesia soal pemanggilan otoritas Singapura ke induk usaha tidak langsungnya, Indofood Agri Resources, terkait isu kebakaran hutan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LSIP",
   "karhutla",
   "Bursa Efek Indonesia",
   "Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/06bbf61851_c910241271.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kras-komisaris-adityo-haryo-bimo-mundur",
  "category": "Aksi Korporasi",
  "title": "KRAS: Komisaris Adityo Haryo Bimo [Mundur]",
  "deck": "Krakatau Steel melaporkan pengunduran diri Adityo Haryo Bimo dari Dewan Komisaris per 1 November 2026, disebut tidak berdampak material bagi operasional perusahaan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRAS",
   "Krakatau Steel",
   "Dewan Komisaris",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d44b52c2c2_54eb509f1b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irsx-jawab-bei-soal-koreksi-laporan-keuangan-kuartal-i-2026",
  "category": "Aksi Korporasi",
  "title": "IRSX Jawab BEI soal [Koreksi] Laporan Keuangan Kuartal I 2026",
  "deck": "Folago Global Nusantara menjelaskan ke BEI sejumlah koreksi laporan keuangan kuartal I 2026, termasuk reklasifikasi piutang pemegang saham dan status pihak berelasi atas piutang Rp111,76 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRSX",
   "laporan keuangan",
   "BEI",
   "pihak berelasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d9b3707cea_93ba597a0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lrna-catat-rugi-rp20-97-miliar-dalam-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "LRNA Catat [Rugi] Rp20,97 Miliar dalam 9 Bulan 2026",
  "deck": "Pendapatan Lorena Transport turun 23 persen dan kas menipis, sementara rugi bersih sembilan bulan tercatat Rp20,97 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LRNA",
   "laporan keuangan",
   "rugi bersih",
   "transportasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102215553-65250-0/FinancialStatement-2026-III-LRNA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pura-laba-naik-86-kas-susut-tajam-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "PURA: Laba Naik 86%, [Kas] Susut Tajam Kuartal III 2026",
  "deck": "Laba bersih PT Putra Rajawali Kencana melonjak 86 persen jadi Rp8,16 miliar di kuartal III 2026, tapi kas perusahaan susut dari Rp21,8 miliar menjadi Rp915 juta.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PURA",
   "laporan keuangan",
   "arus kas",
   "logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102213031-65567-0/FinancialStatement-2026-III-PURA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "anjt-jawab-bei-soal-karhutla-klaim-belum-ada-sanksi",
  "category": "Aksi Korporasi",
  "title": "ANJT Jawab BEI soal [Karhutla], Klaim Belum Ada Sanksi",
  "deck": "ANJT menanggapi permintaan penjelasan lanjutan BEI soal kebakaran hutan di Kalimantan Barat dan penyelidikan otoritas Singapura terhadap First Resources Limited.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANJT",
   "Karhutla",
   "BEI",
   "NEA Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ca27f6707a_663692afeb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppom-dorong-bakso-tasikmalaya-perkuat-ekosistem-halal",
  "category": "UMKM",
  "title": "LPPOM Dorong Bakso Tasikmalaya Perkuat Ekosistem [Halal]",
  "deck": "LPPOM menggelar forum Halal Connect di Tasikmalaya, mendorong pelaku usaha bakso membangun rantai pasok halal, bukan sekadar sertifikasi produk akhir.",
  "date": "2 November 2026",
  "image": "assets/img/lppom-dorong-bakso-tasikmalaya-perkuat-ekosistem-halal.jpg",
  "imageV": "mvzfi1g2",
  "tags": [
   "bakso",
   "halal",
   "LPPOM",
   "Tasikmalaya"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476241-bawa-bakso-naik-kelas-lppom-dorong-penguatan-ekosistem-halal"
 },
 {
  "slug": "diva-catat-rugi-rp34-2-miliar-pada-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "DIVA Catat [Rugi] Rp34,2 Miliar pada Kuartal III 2026",
  "deck": "Distribusi Voucher Nusantara membukukan rugi bersih Rp34,2 miliar untuk sembilan bulan 2026, berbalik dari laba Rp22,25 miliar tahun lalu, dipicu rugi investasi dan penjualan yang turun.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DIVA",
   "laporan keuangan kuartal III",
   "rugi bersih",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102211648-65512-0/FinancialStatement-2026-III-DIVA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-catat-pendapatan-naik-23-laba-bersih-stagnan",
  "category": "Aksi Korporasi",
  "title": "PART Catat Pendapatan Naik 23%, Laba Bersih [Stagnan]",
  "deck": "Pendapatan PT Cipta Perdana Lancar Tbk tumbuh 23 persen di sembilan bulan 2026, tapi laba bersih hanya naik 2,6 persen karena beban bunga melonjak dan saham beredar bertambah.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "laporan keuangan",
   "kuartal III 2026",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102211838-65665-0/FinancialStatement-2026-III-PART.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-rencanakan-rights-issue-1-miliar-saham-baru-rupslb-9-desember",
  "category": "Aksi Korporasi",
  "title": "PART Rencanakan Rights Issue [1 Miliar] Saham Baru, RUPSLB 9 Desember",
  "deck": "Cipta Perdana Lancar berencana menerbitkan hingga 1 miliar saham baru lewat rights issue untuk modal kerja, menunggu persetujuan RUPSLB 9 Desember 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "rights issue",
   "HMETD",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b81aeaf29c_c9fb307054.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aset-data-melonjak-29-utang-bank-pendek-menyusut",
  "category": "Aksi Korporasi",
  "title": "[Aset] DATA Melonjak 29%, Utang Bank Pendek Menyusut",
  "deck": "Total aset Remala Abadi naik 29% dalam sembilan bulan jadi Rp1,3 triliun, sementara utang bank jangka pendek turun hampir separuh, memicu keterbukaan informasi wajib ke bursa.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DATA",
   "laporan keuangan",
   "telekomunikasi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102210029-65677-0/FinancialStatement-2026-III-DATA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "npgf-bukukan-laba-naik-tapi-utang-bank-melonjak-87-9",
  "category": "Aksi Korporasi",
  "title": "NPGF Bukukan Laba Naik, tapi [Utang Bank] Melonjak 87,9%",
  "deck": "Produsen pupuk NPGF membukukan kenaikan penjualan dan laba pada sembilan bulan 2026, namun utang bank jangka pendek melonjak 87,9% dan arus kas operasionalnya negatif Rp88,54 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NPGF",
   "laporan keuangan",
   "utang bank",
   "pupuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102205358-65698-0/FinancialStatement-2026-III-NPGF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmhs-catat-laba-anjlok-95-meski-pendapatan-naik",
  "category": "Aksi Korporasi",
  "title": "BMHS Catat Laba [Anjlok] 95% Meski Pendapatan Naik",
  "deck": "Laba bersih Bundamedik (BMHS) turun 95 persen jadi Rp1,05 miliar pada sembilan bulan 2026 meski pendapatan naik ke Rp1,19 triliun, akibat beban usaha dan bunga yang naik lebih cepat.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMHS",
   "Bundamedik",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102204657-65464-0/FinancialStatement-2026-III-BMHS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suri-catat-laba-bersih-rp11-3-miliar-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "SURI Catat [Laba] Bersih Rp11,3 Miliar per September 2026",
  "deck": "Produsen sarung tangan medis PT Maja Agung Latexindo Tbk membalik rugi jadi laba Rp11,3 miliar dalam sembilan bulan 2026, didukung penjualan dan kas operasional yang menguat.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SURI",
   "laporan keuangan",
   "sarung tangan medis",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102204650-65471-0/FinancialStatement-2026-III-SURI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kpig-laba-bersih-turun-42-saham-baru-picu-dilusi",
  "category": "Aksi Korporasi",
  "title": "KPIG: Laba Bersih Turun 42%, Saham Baru Picu [Dilusi]",
  "deck": "Laba bersih KPIG turun 42 persen jadi Rp361 miliar pada sembilan bulan 2026, sementara penerbitan saham baru tanpa hak memesan terlebih dahulu menambah saham beredar hampir 8 persen.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KPIG",
   "MNC Tourism",
   "laporan keuangan",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102204210-65002-0/FinancialStatement-2026-III-KPIG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbap-laba-9-bulan-melonjak-ke-us-16-8-juta-kas-operasi-positif",
  "category": "Aksi Korporasi",
  "title": "MBAP: [Laba] 9 Bulan Melonjak ke US$16,8 Juta, Kas Operasi Positif",
  "deck": "Laba bersih Mitrabara Adiperdana melonjak ke US$16,8 juta pada sembilan bulan 2026, dari US$293.905 setahun sebelumnya, ditopang pendapatan naik 29 persen dan kas operasi berbalik positif.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBAP",
   "laporan keuangan",
   "batu bara",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102204710-65072-0/FinancialStatement-2026-III-MBAP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-turki-jajaki-pta-target-dagang-us-10-miliar",
  "category": "Global",
  "title": "Indonesia-Turki Jajaki [PTA], Target Dagang US$10 Miliar",
  "deck": "Indonesia dan Turki mulai menjajaki perjanjian dagang preferensial (PTA) untuk mendorong nilai perdagangan bilateral menuju US$10 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "Indonesia-Turki",
   "PTA",
   "Perdagangan Bilateral",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/wamendag-roro-dorong-penjajakan-pta-untuk-perkuat-perdagangan-indonesia-turki",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "inflasi-oktober-melandai-tiket-pesawat-naik",
  "category": "Makroekonomi",
  "title": "Inflasi Oktober [Melandai], Tiket Pesawat Naik",
  "deck": "Inflasi tahunan Oktober 2026 turun jadi 3,23 persen, tapi harga cabai dan tarif pesawat domestik kelas ekonomi justru naik.",
  "date": "2 November 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "inflasi",
   "harga pangan",
   "Bank Indonesia",
   "tarif pesawat"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823826.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "surplus-dagang-ri-berlanjut-tapi-tipis-ke-us-3-36-miliar",
  "category": "Makroekonomi",
  "title": "Surplus Dagang RI [Berlanjut] tapi Tipis ke US$3,36 Miliar",
  "deck": "Neraca dagang Indonesia surplus US$3,36 miliar pada September 2026, melanjutkan tren positif Agustus meski nilainya mengecil dari US$3,55 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "neraca dagang",
   "ekspor",
   "impor",
   "Bank Indonesia"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823926.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dmmx-berbalik-rugi-rp9-58-miliar-utang-bank-melonjak-27",
  "category": "Aksi Korporasi",
  "title": "DMMX Berbalik [Rugi] Rp9,58 Miliar, Utang Bank Melonjak 27%",
  "deck": "Pendapatan sembilan bulan DMMX turun lebih dari 60 persen dan laba berbalik jadi rugi Rp9,58 miliar, sementara utang bank melonjak 27,82 persen jadi Rp226,53 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMMX",
   "laporan keuangan",
   "utang bank",
   "emiten teknologi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102195234-64977-0/FinancialStatement-2026-III-DMMX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ceka-jelaskan-ke-bei-bukan-subjek-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "CEKA Jelaskan ke BEI, Bukan Subjek Penyelidikan [Karhutla] Singapura",
  "deck": "CEKA menyatakan tidak menjadi subjek penyelidikan karhutla Singapura. Yang diperiksa adalah Wilmar International, pemegang saham pengendali tidak langsungnya.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CEKA",
   "karhutla",
   "Wilmar International",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d1fc48c36d_9d122e871e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-jelaskan-ke-bursa-soal-penerbitan-obligasi-at1",
  "category": "Aksi Korporasi",
  "title": "BMRI Jelaskan ke Bursa Soal Penerbitan Obligasi [AT1]",
  "deck": "Bank Mandiri menjawab permintaan penjelasan Bursa Efek Indonesia tentang obligasi perpetual AT1 bertingkat bunga awal 7,35 persen, termasuk peran anak usahanya sebagai salah satu penjamin emisi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "AT1",
   "obligasi perpetual",
   "Bank Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d24697bb8e_9eba2c9eeb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-tguk-balik-untung-rp3-08-miliar-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "[Laba] TGUK Balik Untung Rp3,08 Miliar Kuartal III 2026",
  "deck": "Setelah rugi Rp18,17 miliar tahun lalu, TGUK cetak laba Rp3,08 miliar pada sembilan bulan 2026, didukung efisiensi gerai dan utang baru terkait rencana pengambilalihan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "laporan keuangan",
   "rencana pengambilalihan",
   "Teguk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102204604-65439-0/FinancialStatement-2026-III-TGUK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-tegaskan-daftar-pengendali-sejak-ipo-ke-ojk",
  "category": "Aksi Korporasi",
  "title": "AADI Tegaskan Daftar [Pengendali] Sejak IPO ke OJK",
  "deck": "AADI menegaskan ke OJK bahwa pengendali perseroan sejak IPO adalah keluarga Thohir, Subianto, Rachmat, dan Edwin Soeryadjaya, menyelaraskan seluruh keterbukaan informasi sebelumnya.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AADI",
   "pengendali saham",
   "keterbukaan informasi",
   "Adaro Andalan Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e59894b53c_576c02f8b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admr-tegaskan-pengendali-thohir-subianto-rachmat-soeryadjaya",
  "category": "Aksi Korporasi",
  "title": "ADMR Tegaskan [Pengendali]: Thohir, Subianto, Rachmat, Soeryadjaya",
  "deck": "Emiten tambang ADMR menegaskan Keluarga Thohir, Subianto, Rachmat, dan Edwin Soeryadjaya sebagai pengendali dan pemilik manfaat sejak IPO, meluruskan seluruh keterbukaan sebelumnya.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMR",
   "Alamtri Minerals",
   "pengendali perusahaan",
   "pemilik manfaat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/01c9d6b0d6_bb586500c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adro-tegaskan-thohir-subianto-rachmat-jadi-pengendali",
  "category": "Aksi Korporasi",
  "title": "ADRO Tegaskan Thohir, Subianto, Rachmat Jadi [Pengendali]",
  "deck": "Alamtri Resources menegaskan pengendali dan pemilik manfaat perseroan sejak IPO adalah Keluarga Thohir, Subianto, Rachmat, dan Edwin Soeryadjaya, menyelaraskan pengungkapan sebelumnya.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADRO",
   "Alamtri Resources",
   "pengendali perseroan",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1d19fa374f_16a65b7d34.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sektor-kelautan-mulai-jadi-pilar-ekonomi-ri",
  "category": "Makroekonomi",
  "title": "Sektor Kelautan Mulai Jadi [Pilar] Ekonomi RI",
  "deck": "Pengamat menilai Presiden Prabowo Subianto mulai menempatkan sektor kelautan dan perikanan sebagai pilar ekonomi, lewat program Kampung Nelayan Merah Putih hingga swasembada garam.",
  "date": "2 November 2026",
  "image": "assets/img/sektor-kelautan-mulai-jadi-pilar-ekonomi-ri.jpg",
  "imageV": "mvza7abz",
  "tags": [
   "kelautan",
   "perikanan",
   "maritim",
   "KKP"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476229-tak-lagi-jadi-pelengkap-presiden-prabowo-dinilai-mulai-jadikan-sektor-kelautan-pilar-ekonomi-ri"
 },
 {
  "slug": "mcas-liabilitas-naik-26-6-saat-pendapatan-susut-40",
  "category": "Aksi Korporasi",
  "title": "MCAS: [Liabilitas] Naik 26,6% Saat Pendapatan Susut 40%",
  "deck": "Laporan keuangan interim Kuartal III 2026 MCAS menunjukkan pendapatan turun ke Rp2,13 triliun dari Rp3,59 triliun, sementara total liabilitas melonjak jadi Rp948 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCAS",
   "laporan keuangan",
   "liabilitas",
   "pendapatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102191931-65646-0/FinancialStatement-2026-III-MCAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tris-rencanakan-buyback-saham-hingga-rp10-miliar",
  "category": "Aksi Korporasi",
  "title": "TRIS Rencanakan [Buyback] Saham hingga Rp10 Miliar",
  "deck": "Trisula International akan membeli kembali maksimal 62 juta saham atau 2% modal disetor dengan harga tertinggi Rp165 per saham, mulai 3 November 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIS",
   "buyback saham",
   "Trisula International",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b00fb9cd82_5e16c35741.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bhit-laba-bersih-kuartal-iii-anjlok-89-kas-operasi-minus",
  "category": "Aksi Korporasi",
  "title": "BHIT: Laba Bersih Kuartal III Anjlok [89%], Kas Operasi Minus",
  "deck": "Laba bersih BHIT yang menjadi hak pemegang saham induk turun 89 persen jadi Rp24,7 miliar pada sembilan bulan 2026, sementara arus kas operasi berbalik minus Rp1,38 triliun.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BHIT",
   "MNC Asia Holding",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102191011-65616-0/FinancialStatement-2026-III-BHIT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nfcx-catat-rugi-membesar-liabilitas-naik-27-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "NFCX catat rugi membesar, [liabilitas] naik 27% di Kuartal III 2026",
  "deck": "Laporan kuartal III 2026 NFCX: pendapatan turun hampir separuh, rugi bersih melebar tiga kali lipat, dan utang naik 27 persen dibanding akhir 2025.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NFCX",
   "laporan keuangan",
   "rugi bersih",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102190811-65222-0/FinancialStatement-2026-III-NFCX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wins-beri-jaminan-perusahaan-rp129-36-miliar-ke-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "WINS Beri [Jaminan Perusahaan] Rp129,36 Miliar ke Anak Usaha",
  "deck": "WINS menjamin fasilitas kredit baru senilai Rp130 miliar dari Bank Nano Syariah untuk anak usahanya, PT Sentosasegara Mulia Shipping, guna refinancing kapal dan modal kerja.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINS",
   "jaminan perusahaan",
   "transaksi afiliasi",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f99a073052_39129f8e29.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptdu-pkpu-setelah-gugatan-utang-rp1-miliar-dari-pemasok",
  "category": "Aksi Korporasi",
  "title": "PTDU [PKPU] Setelah Gugatan Utang Rp1 Miliar dari Pemasok",
  "deck": "Pengadilan Niaga Jakarta Pusat mengabulkan PKPU sementara 45 hari bagi Djasa Ubersakti atas tagihan Rp1 miliar dari pemasok CV. Titan, rencana perdamaian dibahas 8 Desember 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTDU",
   "PKPU",
   "pengadilan niaga",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fcc8a3aa9b_d12a27bbc1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gjtl-cetak-laba-rp964-9-miliar-naik-22-di-9m2026",
  "category": "Aksi Korporasi",
  "title": "GJTL Cetak Laba Rp964,9 Miliar, [Naik] 22% di 9M2026",
  "deck": "Laba bersih Gajah Tunggal naik 22,2 persen jadi Rp964,9 miliar dalam sembilan bulan 2026, ditopang penjualan yang tumbuh 9,2 persen, meski utang bank jangka pendek melonjak dua kali lipat.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GJTL",
   "Gajah Tunggal",
   "laporan keuangan",
   "ban"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102204626-65691-0/FinancialStatement-2026-III-GJTL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bata-catat-defisiensi-modal-makin-dalam-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "BATA catat [defisiensi modal] makin dalam di kuartal III 2026",
  "deck": "Rugi Sepatu Bata melebar jadi Rp61,58 miliar di sembilan bulan 2026, defisiensi modal makin dalam, dan kas tergerus ke Rp9,02 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATA",
   "laporan keuangan",
   "defisiensi modal",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102182238-65650-0/FinancialStatement-2026-III-BATA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-catat-laba-rp1-8-triliun-tumbuh-14-7-di-9m-2026",
  "category": "Aksi Korporasi",
  "title": "AUTO Catat [Laba] Rp1,8 Triliun, Tumbuh 14,7% di 9M 2026",
  "deck": "Astra Otoparts memaparkan kinerja sembilan bulan 2026 dengan laba bersih Rp1,8 triliun, naik 14,7 persen, menjelang paparan publik 5 November.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "Astra Otoparts",
   "public expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/827008e0c1_c64f63be9c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tfas-rugi-melebar-ke-rp4-5-miliar-liabilitas-naik-28-93",
  "category": "Aksi Korporasi",
  "title": "TFAS Rugi Melebar ke Rp4,5 Miliar, [Liabilitas] Naik 28,93%",
  "deck": "Penjualan TFAS naik 30 persen dalam sembilan bulan 2026, tapi rugi bersih melebar ke Rp4,53 miliar seiring liabilitas naik 28,93% akibat pergeseran utang bank ke utang pihak berelasi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFAS",
   "laporan keuangan",
   "liabilitas",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102181029-65308-0/FinancialStatement-2026-III-TFAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amag-catat-laba-bersih-naik-44-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "AMAG Catat [Laba Bersih] Naik 44% per September 2026",
  "deck": "Materi public expose 2026 AMAG menunjukkan laba bersih naik 43,86% dan ekuitas naik 4,17% per September 2026, meski rasio solvabilitas turun dari 332% menjadi 294%.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAG",
   "asuransi",
   "laba bersih",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7de281fd1c_ea30cf02ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbyb-laba-neo-commerce-turun-7-jadi-rp431-miliar",
  "category": "Aksi Korporasi",
  "title": "BBYB: [Laba] Neo Commerce Turun 7% Jadi Rp431 Miliar",
  "deck": "Laba bersih Bank Neo Commerce turun 7,1 persen menjadi Rp431 miliar dalam sembilan bulan 2026, sementara simpanan nasabah susut 15,4 persen menjadi Rp11,86 triliun.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBYB",
   "Bank Neo Commerce",
   "laporan keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102174846-65404-0/FinancialStatement-2026-III-BBYB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kbli-liabilitas-naik-116-jadi-rp960-3-miliar-per-september",
  "category": "Aksi Korporasi",
  "title": "KBLI: Liabilitas Naik [116%] Jadi Rp960,3 Miliar per September",
  "deck": "Total liabilitas KMI Wire and Cable melonjak 116,38 persen menjadi Rp960,3 miliar per akhir September 2026, dipicu utang bank, utang dagang, dan uang muka penjualan yang membesar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KBLI",
   "KMI Wire and Cable",
   "liabilitas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102175139-65203-0/FinancialStatement-2026-III-KBLI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "itmg-bagikan-dividen-interim-us-74-2-juta",
  "category": "Aksi Korporasi",
  "title": "ITMG Bagikan Dividen Interim [US$74,2 Juta]",
  "deck": "ITMG akan membagikan dividen tunai interim US$74,2 juta untuk tahun buku 2026, dengan pencatatan pemegang saham 12 November dan pembayaran 18 November 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMG",
   "dividen interim",
   "Indo Tambangraya Megah",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6d1cf060b9_c4653114fd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-binaan-pertamina-tembus-pasar-internasional-di-bali",
  "category": "UMKM",
  "title": "UMKM Binaan Pertamina [Tembus] Pasar Internasional di Bali",
  "deck": "Lima UMKM binaan Pertamina meraih transaksi ratusan juta rupiah dan jejaring bisnis baru dalam forum ASCOPE 2026 di Bali, memperluas akses pasar produk lokal ke kancah internasional.",
  "date": "2 November 2026",
  "image": "assets/img/umkm-binaan-pertamina-tembus-pasar-internasional-di-bali.jpg",
  "imageV": "mvza7aw5",
  "tags": [
   "pertamina",
   "umkm",
   "bali",
   "ascope"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476218-tembus-pasar-internasional-umkm-pertamina-unjuk-gigi-di-kancah-global"
 },
 {
  "slug": "penumpang-ka-september-tembus-48-55-juta-orang",
  "category": "Bisnis",
  "title": "Penumpang KA September Tembus [48,55 Juta Orang]",
  "deck": "Jumlah penumpang kereta api naik tipis 0,47% dibanding Agustus, namun melonjak 7,83% dibanding September tahun lalu.",
  "date": "2 November 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "kereta api",
   "bps",
   "transportasi",
   "penumpang"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "surplus-dagang-ri-turun-jadi-us-3-36-miliar",
  "category": "Perdagangan",
  "title": "Surplus Dagang RI Turun Jadi [US$3,36 Miliar]",
  "deck": "Neraca dagang Indonesia September 2026 surplus US$3,36 miliar, mengecil dibanding US$3,55 miliar pada Agustus 2026.",
  "date": "2 November 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "neraca dagang",
   "bps",
   "ekspor-impor",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "impor-ri-september-naik-18-41-jadi-us-24-2-miliar",
  "category": "Perdagangan",
  "title": "Impor RI September [naik 18,41%] jadi US$24,2 miliar",
  "deck": "Nilai impor Indonesia naik dibanding Agustus maupun dibanding September tahun lalu, setelah sempat turun bulan sebelumnya",
  "date": "2 November 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "impor",
   "bps",
   "perdagangan",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ekspor-september-tembus-27-6-miliar-us",
  "category": "Perdagangan",
  "title": "Ekspor September Tembus [27,6 Miliar US$]",
  "deck": "Nilai ekspor Indonesia naik ke level tertinggi dalam enam bulan terakhir, melanjutkan tren kenaikan sejak Juni 2026.",
  "date": "2 November 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [
   "ekspor",
   "bps",
   "neraca dagang",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "bwpt-koreksi-jadwal-dividen-interim-rp31-1-miliar",
  "category": "Aksi Korporasi",
  "title": "BWPT Koreksi Jadwal [Dividen] Interim Rp31,1 Miliar",
  "deck": "Eagle High Plantations (BWPT) mengoreksi jadwal dividen interim Rp1 per saham senilai Rp31,12 miliar, dengan recording date 12 November dan pembayaran 25 November 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "dividen interim",
   "Eagle High Plantations",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/51e6638467_41d5b2fa57.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rmko-rampungkan-rights-issue-rp114-3-m-laba-bersih-balik-positif",
  "category": "Aksi Korporasi",
  "title": "RMKO Rampungkan [Rights Issue] Rp114,3 M, Laba Bersih Balik Positif",
  "deck": "RMKO merampungkan rights issue Rp114,3 miliar dan membalik laba bersih sembilan bulan 2026 menjadi positif, ditopang penurunan drastis rasio utang.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RMKO",
   "Rights Issue",
   "Kinerja Keuangan",
   "Batu Bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/55638068ae_0878ddb887.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-lapor-lk-kuartal-i-2024-defisit-modal-melebar",
  "category": "Aksi Korporasi",
  "title": "BOSS Lapor LK Kuartal I/2024, [Defisit Modal] Melebar",
  "deck": "BOSS baru menyerahkan laporan keuangan kuartal I 2024, dua tahun setelah periode itu berakhir, dengan penjualan nihil dan defisit modal melebar jadi Rp206,61 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "defisit modal",
   "laporan keuangan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202411/20261102172155-65678-0/FinancialStatement-2024-I-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnba-dana-nasabah-turun-30-laba-bersih-naik-dua-kali",
  "category": "Aksi Korporasi",
  "title": "BNBA: Dana Nasabah [Turun] 30%, Laba Bersih Naik Dua Kali",
  "deck": "Simpanan nasabah Bank Bumi Arta turun Rp1,58 triliun dalam sembilan bulan karena nasabah pindah ke bank pesaing berbunga lebih tinggi, meski laba bersihnya naik dua kali lipat.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNBA",
   "Bank Bumi Arta",
   "simpanan nasabah",
   "laporan keuangan interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102171905-65331-0/FinancialStatement-2026-III-BNBA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-pertahankan-suspensi-saham-menn-dan-soul",
  "category": "Aksi Korporasi",
  "title": "BEI Pertahankan [Suspensi] Saham MENN dan SOUL",
  "deck": "BEI tetap menghentikan sementara perdagangan saham MENN dan SOUL karena belum menyerahkan laporan keuangan interim per 30 Juni 2026 hingga 31 Oktober 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "SOUL",
   "suspensi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8ec620540d_dd032b771c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-bantah-jadi-subjek-penyelidikan-singapura-soal-karhutla",
  "category": "Aksi Korporasi",
  "title": "OPPM Bantah Jadi Subjek [Penyelidikan] Singapura soal Karhutla",
  "deck": "OPPM menyatakan perusahaan dan anak usahanya tidak menjadi subjek penyelidikan Pemerintah Singapura soal karhutla, meski pemegang saham tidak langsungnya, APP Co Ltd, dipanggil dalam proses itu.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "karhutla",
   "Singapura",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4fa8f07fb9_ec4690873c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wins-akuisisi-fos-kerek-aset-54-laba-naik-83",
  "category": "Aksi Korporasi",
  "title": "WINS: [Akuisisi] FOS Kerek Aset 54%, Laba Naik 83%",
  "deck": "Akuisisi Fast Offshore Supply mendorong total aset WINS naik 54% dan liabilitas naik 249% pada kuartal III 2026, sementara laba bersih melonjak 83% dibanding tahun lalu.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINS",
   "akuisisi",
   "laporan keuangan",
   "pelayaran lepas pantai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102170828-65685-0/FinancialStatement-2026-III-WINS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-bantah-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "LPPI bantah terlibat penyelidikan karhutla [Singapura]",
  "deck": "LPPI menjawab permintaan BEI soal pemanggilan Singapura terkait karhutla, menegaskan bukan dirinya melainkan pemegang saham tidak langsungnya, APP Co Ltd, yang dipanggil.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "karhutla",
   "APP Co Ltd",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/84223d3682_d5c079a7bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-bukan-subjek-pemanggilan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "INKP: Bukan Subjek Pemanggilan [Karhutla] Singapura",
  "deck": "INKP menjawab permintaan Bursa bahwa bukan Perseroan atau anak usahanya, melainkan pemegang saham tak langsung APP Co Ltd, yang dipanggil Pemerintah Singapura soal investigasi karhutla.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "karhutla",
   "Singapura",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a586f88113_d4f027d7ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bumi-perpanjang-target-akuisisi-laman-mining-ke-januari-2027",
  "category": "Aksi Korporasi",
  "title": "BUMI Perpanjang Target Akuisisi [Laman Mining] ke Januari 2027",
  "deck": "Bumi Resources mengundur realisasi dana Rp333,6 miliar untuk akuisisi PT Laman Mining dari 30 Oktober 2026 menjadi 31 Januari 2027 karena sejumlah syarat transaksi belum terpenuhi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUMI",
   "Bumi Resources",
   "akuisisi tambang",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a82a03e877_b4131aa916.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tkim-bantah-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "TKIM Bantah Terlibat Penyelidikan [Karhutla] Singapura",
  "deck": "TKIM menjawab permintaan penjelasan BEI soal pemanggilan Pemerintah Singapura ke grup agribisnis terkait karhutla, menegaskan perseroan tak jadi subjek pemeriksaan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TKIM",
   "karhutla",
   "Singapura",
   "APP Co Ltd"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4680f505a5_37a81d0042.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atla-laba-bersih-anjlok-73-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "ATLA: Laba Bersih [Anjlok] 73% di Kuartal III 2026",
  "deck": "Pendapatan PT Atlantis Subsea Indonesia turun 41,5 persen dan laba bersih anjlok ke Rp697,6 juta pada sembilan bulan 2026, kas perusahaan menyusut tajam.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATLA",
   "laporan keuangan",
   "kinerja emiten",
   "sektor energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102170314-65620-0/FinancialStatement-2026-III-ATLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-waran-tapg-usai-dividen-rp70-saham",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Waran [TAPG] usai Dividen Rp70/Saham",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran terstruktur TAPGZPCH7A menyusul dividen interim TAPG Rp70 per saham, efektif 11 November 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "TAPG",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f838a00c8a_d85aace92c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brrc-laba-bersih-turun-58-persen-kas-tersisa-rp70-juta",
  "category": "Aksi Korporasi",
  "title": "BRRC: [Laba Bersih] Turun 58 Persen, Kas Tersisa Rp70 Juta",
  "deck": "Laba bersih sembilan bulan PT Raja Roti Cemerlang turun hampir 58 persen dibanding tahun lalu, sementara kas perusahaan menyusut tajam menjadi hanya Rp70,5 juta per akhir September 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRRC",
   "laporan keuangan",
   "laba bersih",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102174843-65615-0/FinancialStatement-2026-III-BRRC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-dan-swat-masuk-pemantauan-khusus-bei-per-3-november",
  "category": "Aksi Korporasi",
  "title": "TRUE dan SWAT Masuk [Pemantauan Khusus] BEI per 3 November",
  "deck": "Bursa Efek Indonesia menempatkan saham TRUE dan SWAT ke papan pemantauan khusus mulai 3 November 2026, masing-masing karena pendapatan mandek dan ekuitas negatif.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "SWAT",
   "BEI",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9080cbb6d9_c97f4238bf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-bantah-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "PIDL Bantah Terlibat Penyelidikan [Karhutla] Singapura",
  "deck": "PIDL menegaskan tidak jadi subjek penyelidikan karhutla Singapura, yang menyasar APP Co Ltd, pemegang saham tak langsung dengan 0,04% saham di pengendali Perseroan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "karhutla",
   "Singapura",
   "pulp dan paper"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b65f59a000_de029f703a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mrat-laba-bersih-melonjak-15-kali-di-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "MRAT: Laba Bersih [Melonjak] 15 Kali di 9 Bulan 2026",
  "deck": "Penjualan Mustika Ratu naik 68 persen dan laba bersih melonjak jadi Rp6,45 miliar pada sembilan bulan 2026, tapi arus kas operasi turun dan utang bank jangka pendek bertambah.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MRAT",
   "Mustika Ratu",
   "laporan keuangan",
   "kosmetik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102165016-65460-0/FinancialStatement-2026-III-MRAT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msin-kas-anjlok-81-arus-kas-operasi-negatif-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "MSIN: Kas Anjlok 81%, [Arus Kas] Operasi Negatif Kuartal III",
  "deck": "Laporan keuangan interim kuartal III 2026 MSIN menunjukkan kas turun dari Rp689 miliar jadi Rp129 miliar, sementara arus kas dari operasi berbalik jadi negatif Rp156 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIN",
   "laporan keuangan",
   "arus kas",
   "MNC Digital Entertainment"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102164209-65328-0/FinancialStatement-2026-III-MSIN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "futr-catat-rugi-bersih-rp7-75-miliar-pendapatan-susut-64",
  "category": "Aksi Korporasi",
  "title": "FUTR Catat [Rugi] Bersih Rp7,75 Miliar, Pendapatan Susut 64%",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan Futura Energi Global berbalik rugi Rp7,75 miliar setelah pendapatannya turun 64 persen dibanding periode sama tahun lalu.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUTR",
   "laporan keuangan",
   "rugi bersih",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102164424-65663-0/FinancialStatement-2026-III-FUTR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-terstruktur-tapg-disesuaikan-usai-dividen-rp70",
  "category": "Aksi Korporasi",
  "title": "DR: Waran Terstruktur TAPG Disesuaikan Usai [Dividen] Rp70",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan Waran Terstruktur TAPG menyusul rencana dividen tunai Rp1,39 triliun dari Triputra Agro Persada.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "TAPG",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/30314c53e4_b06dd68374.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-sesuaikan-waran-terstruktur-medc-ikuti-dividen",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Sesuaikan Waran Terstruktur [MEDC] Ikuti Dividen",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur MEDC menyusul dividen tunai US$30 juta yang dibayar 2 Desember 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "MEDC",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b51c60fb03_c16e5d4d25.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mncn-laba-bersih-anjlok-48-jadi-rp385-miliar-di-9m26",
  "category": "Aksi Korporasi",
  "title": "MNCN: Laba Bersih [Anjlok] 48% Jadi Rp385 Miliar di 9M26",
  "deck": "Laporan keuangan interim MNCN per September 2026 menunjukkan pendapatan turun 16,7 persen dan laba bersih tergerus hampir separuh dibanding periode sama tahun lalu.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MNCN",
   "laporan keuangan",
   "media",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102164218-64941-0/FinancialStatement-2026-III-MNCN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptsp-catat-laba-naik-14-jelang-public-expose-3-november",
  "category": "Aksi Korporasi",
  "title": "PTSP Catat Laba Naik 14% Jelang [Public Expose] 3 November",
  "deck": "Pioneerindo Gourmet International (PTSP) merilis materi public expose insidentil berisi kinerja keuangan September 2026 dan rencana bisnis 2026 menjelang paparan publik.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTSP",
   "Pioneerindo Gourmet",
   "Public Expose",
   "CFC Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/12c65ef24b_fe53158fbe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "defi-rugi-melonjak-jadi-rp21-4-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "DEFI: Rugi [Melonjak] Jadi Rp21,4 Miliar di Kuartal III 2026",
  "deck": "Rugi bersih Danasupra Erapacific melonjak hampir lima kali lipat dalam sembilan bulan 2026, sementara ekuitas dan laba ditahan ikut tergerus.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEFI",
   "laporan keuangan",
   "rugi bersih",
   "holding company"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102162838-64451-0/FinancialStatement-2026-III-DEFI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpps-catat-rugi-rp230-9-miliar-aset-susut-42-9",
  "category": "Aksi Korporasi",
  "title": "LPPS Catat [Rugi] Rp230,9 Miliar, Aset Susut 42,9%",
  "deck": "Ekuitas PT Lenox Pasifik Investama (LPPS) tergerus hampir separuh jadi Rp591,6 miliar akibat kerugian besar dari investasi pada entitas asosiasi dan penurunan nilai portofolio efek.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPS",
   "laporan keuangan interim",
   "rugi bersih",
   "holding investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102162655-65229-0/FinancialStatement-2026-III-LPPS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "liabilitas-spma-naik-33-dipicu-beli-lahan-dan-utang-bank",
  "category": "Aksi Korporasi",
  "title": "Liabilitas [SPMA] Naik 33%, Dipicu Beli Lahan dan Utang Bank",
  "deck": "Suparma Tbk menjelaskan kenaikan liabilitas 33 persen akibat pinjaman pihak berelasi untuk beli lahan, kenaikan utang bank BRI, dan pelemahan rupiah yang membebani utang dolar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPMA",
   "liabilitas",
   "Suparma Tbk",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1d82c304ad_e5a7e976f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dlta-catat-laba-naik-5-9-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "DLTA Catat Laba [Naik] 5,9% di Sembilan Bulan 2026",
  "deck": "Penjualan Delta Djakarta naik 16,6 persen dan laba bersih naik 5,9 persen dalam sembilan bulan 2026, sementara dividen besar menekan ekuitas dan kas perusahaan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DLTA",
   "Delta Djakarta",
   "laporan keuangan",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102162526-65538-0/FinancialStatement-2026-III-DLTA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ssms-bagikan-dividen-interim-rp52-49-per-saham",
  "category": "Aksi Korporasi",
  "title": "SSMS Bagikan [Dividen] Interim Rp52,49 per Saham",
  "deck": "SSMS akan membagikan dividen interim Rp500 miliar atau Rp52,49 per saham, dengan recording date 12 November dan pembayaran 2 Desember 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSMS",
   "dividen",
   "pasar modal",
   "emiten sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/01d2b4b0cb_780be6a086.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nice-perpanjang-fasilitas-kredit-citibank-rp100-miliar",
  "category": "Aksi Korporasi",
  "title": "NICE Perpanjang Fasilitas Kredit [Citibank] Rp100 Miliar",
  "deck": "Adhi Kartiko Pratama memperpanjang fasilitas kredit Rp100 miliar dari Citibank N.A. satu tahun lagi, dengan suku bunga baru mengacu INDONIA plus 1,25 persen per tahun.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "transaksi material",
   "Citibank",
   "fasilitas kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/efa72323dc_4b65cfabb4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-catat-penjualan-rp2-2-triliun-ekuitas-positif-lagi",
  "category": "Pasar Modal",
  "title": "UNSP Catat Penjualan Rp2,2 Triliun, Ekuitas [Positif] Lagi",
  "deck": "Bakrie Sumatera Plantations (UNSP) membukukan ekuitas positif Rp2,77 triliun pada kuartal III 2026, berbalik dari negatif, lewat konversi utang jadi saham dan revaluasi aset, meski masih rugi.",
  "date": "2 November 2026",
  "image": "assets/img/unsp-catat-penjualan-rp2-2-triliun-ekuitas-positif-lagi.jpg",
  "imageV": "mvz459m7",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "ekuitas",
   "sawit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476205-unsp-bukukan-penjualan-rp-22-triliun-lonjakan-ekuitas-rp-8-triliun-dan-targetkan-rp-3-triliun-pada-2026"
 },
 {
  "slug": "tfco-gelar-public-expose-usai-saham-sentuh-ara-3-hari",
  "category": "Aksi Korporasi",
  "title": "TFCO Gelar Public Expose Usai Saham Sentuh [ARA] 3 Hari",
  "deck": "TFCO menggelar public expose insidentil Selasa, 3 November 2026, usai saham disuspensi BEI dan melonjak 94,55 persen dalam tiga hari.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFCO",
   "Tifico Fiber Indonesia",
   "Suspensi BEI",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/441891e2cf_e7fc9d6b71.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mlpt-jawab-permintaan-bei-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "MLPT Jawab Permintaan BEI soal [Volatilitas] Saham",
  "deck": "Multipolar Technology menegaskan tidak ada informasi material atau rencana aksi korporasi di balik pergerakan harga sahamnya, menanggapi permintaan penjelasan dari BEI.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MLPT",
   "Multipolar Technology",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0e4e6d4503_cf1ab1c9d3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-catat-ekuitas-negatif-rp4-64-m-penjualan-ambruk-99",
  "category": "Aksi Korporasi",
  "title": "LAPD Catat [Ekuitas] Negatif Rp4,64 M, Penjualan Ambruk 99%",
  "deck": "Leyand International (LAPD) mencatat ekuitas negatif Rp4,64 miliar per akhir September 2026, setelah penjualan sembilan bulan ambruk ke Rp2,04 miliar dari Rp211,39 miliar tahun sebelumnya.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "Leyand International",
   "ekuitas negatif",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102145915-65634-0/FinancialStatement-2026-III-LAPD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zata-bukukan-rugi-rp77-8-miliar-usai-jual-aset-gedung",
  "category": "Aksi Korporasi",
  "title": "ZATA Bukukan [Rugi] Rp77,8 Miliar Usai Jual Aset Gedung",
  "deck": "ZATA merugi Rp77,8 miliar pada kuartal III 2026, berbalik dari laba tahun sebelumnya, setelah membebankan Rp78,1 miliar biaya lain-lain terkait pelepasan aset gedung senilai Rp75 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZATA",
   "laporan keuangan",
   "rugi bersih",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102145005-65049-0/FinancialStatement-2026-III-ZATA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-pendapatan-naik-34-6-laba-bersih-stagnan",
  "category": "Aksi Korporasi",
  "title": "GMFI: Pendapatan Naik 34,6%, Laba Bersih [Stagnan]",
  "deck": "Pendapatan GMF naik 34,6 persen jadi US$413,4 juta pada kuartal III 2026, tapi laba bersih nyaris stagnan akibat beban material yang melonjak hampir dua kali lipat.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "laporan keuangan interim",
   "kuasi reorganisasi",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102143415-64503-0/FinancialStatement-2026-III-GMFI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "okupansi-hotel-bintang-turun-jadi-51-75-di-september",
  "category": "Bisnis",
  "title": "Okupansi Hotel Bintang [Turun] Jadi 51,75% di September",
  "deck": "Setelah naik tiga bulan beruntun sejak April, tingkat keterisian kamar hotel bintang nasional melambat pada September 2026.",
  "date": "2 November 2026",
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
  "slug": "wisatawan-asing-september-turun-ke-1-43-juta",
  "category": "Bisnis",
  "title": "Wisatawan Asing September [Turun ke 1,43 Juta]",
  "deck": "Setelah naik empat bulan beruntun, kunjungan turis asing ke Indonesia turun 10,79% dari Agustus ke September 2026.",
  "date": "2 November 2026",
  "image": "assets/img/rumah-subsidi.jpg",
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
  "slug": "fitt-rombak-bisnis-jadi-tambang-laba-9-bulan-berbalik-untung",
  "category": "Aksi Korporasi",
  "title": "FITT rombak bisnis jadi tambang, laba 9 bulan [berbalik] untung",
  "deck": "FITT, bekas PT Hotel Fitra International, melepas anak usaha hotel dan mengambil 50% anak usaha tambang baru. Aset naik 76%, laba sembilan bulan berbalik dari rugi jadi untung.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FITT",
   "laporan keuangan interim",
   "akuisisi tambang",
   "restrukturisasi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102143018-65355-0/FinancialStatement-2026-III-FITT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inflasi-oktober-melambat-ke-0-22-persen",
  "category": "Makroekonomi",
  "title": "Inflasi Oktober Melambat ke [0,22 Persen]",
  "deck": "Kenaikan harga bulanan pada Oktober 2026 lebih rendah dibanding September, dan juga lebih rendah dari Oktober tahun lalu.",
  "date": "2 November 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "inflasi",
   "bps",
   "ekonomi",
   "harga"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "part-gelar-rupslb-9-desember-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "PART Gelar [RUPSLB] 9 Desember, Agenda Belum Diumumkan",
  "deck": "Direksi PT Cipta Perdana Lancar Tbk menjadwalkan RUPSLB pada 9 Desember 2026. Undangan resmi berisi agenda rapat baru akan terbit 17 November 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "RUPSLB",
   "Cipta Perdana Lancar",
   "jadwal rapat pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9a25afd0c9_0ae3f9119b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aces-laba-kuartal-iii-naik-25-7-skor-tata-kelola-melonjak",
  "category": "Aksi Korporasi",
  "title": "ACES: Laba Kuartal III Naik 25,7%, Skor Tata Kelola [Melonjak]",
  "deck": "Penjualan ACES naik 8,3% menjadi Rp6,9 triliun dan laba ke pemegang saham naik 25,7% jadi Rp604,7 miliar di sembilan bulan 2026, sejalan dengan kenaikan skor tata kelola perusahaan.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACES",
   "ritel",
   "kinerja keuangan",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/eafccf446e_2d02cb0b61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hope-liabilitas-naik-67-ekuitas-susut-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "[HOPE] Liabilitas Naik 67%, Ekuitas Susut Kuartal III",
  "deck": "Total liabilitas Harapan Duta Pertiwi melonjak 67 persen dalam sembilan bulan karena pinjaman bank baru di anak usaha, sementara ekuitas perusahaan menyusut hampir 19 persen.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HOPE",
   "laporan keuangan interim",
   "utang bank",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102133924-65228-0/FinancialStatement-2026-III-HOPE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "daaz-laba-turun-43-jadi-rp157-m-kas-susut-ke-rp317-m",
  "category": "Aksi Korporasi",
  "title": "DAAZ: Laba Turun 43% Jadi Rp157 M, [Kas] Susut ke Rp317 M",
  "deck": "Pendapatan DAAZ naik 22 persen jadi Rp12,05 triliun pada kuartal III 2026, tapi laba bersih konsolidasi turun 43 persen dan kas perusahaan susut hampir separuh dari akhir 2025.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAAZ",
   "laporan keuangan",
   "kuartal III 2026",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102120118-65605-0/FinancialStatement-2026-III-DAAZ.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-laba-bersih-melonjak-35-kali-lipat-jadi-rp110-7-miliar",
  "category": "Aksi Korporasi",
  "title": "AKPI: Laba Bersih [Melonjak] 35 Kali Lipat jadi Rp110,7 Miliar",
  "deck": "Laba bersih AKPI sembilan bulan 2026 naik dari Rp3,16 miliar jadi Rp110,75 miliar, penjualan tumbuh 24 persen, tapi arus kas operasi justru menyusut.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "laporan keuangan",
   "laba bersih",
   "emiten kimia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102115647-65477-0/FinancialStatement-2026-III-AKPI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sico-laba-turun-26-kuartal-iii-utang-bank-melonjak-151",
  "category": "Aksi Korporasi",
  "title": "SICO Laba Turun 26% Kuartal III, Utang Bank [Melonjak] 151%",
  "deck": "Laba bersih SICO turun 26 persen jadi Rp8,56 miliar dalam sembilan bulan 2026, sementara total utang bank melonjak 151 persen menjadi Rp28,13 miliar per akhir September.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SICO",
   "laporan keuangan",
   "utang bank",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102113402-65675-0/FinancialStatement-2026-III-SICO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-terstruktur-jpfa-disesuaikan-ikuti-dividen",
  "category": "Aksi Korporasi",
  "title": "DR: [Waran] Terstruktur JPFA Disesuaikan Ikuti Dividen",
  "deck": "RHB Sekuritas menyesuaikan syarat waran terstruktur JPFA (DR) menyusul dividen tunai Rp90 per saham senilai total Rp1,05 triliun.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "JPFA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c7b0b43ad3_b8f202685b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-sesuaikan-waran-terstruktur-untr-ikuti-dividen-rp430",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Sesuaikan [Waran] Terstruktur UNTR Ikuti Dividen Rp430",
  "deck": "RHB Sekuritas (DR) menyesuaikan rasio dan harga pelaksanaan waran terstruktur UNTR menyusul dividen tunai Rp430 per saham yang dibayar 23 November 2026.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "UNTR",
   "Waran Terstruktur",
   "Dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b4f379b292_1b453e5641.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-t-24-icbp-indf-berakhir-19-november-2026",
  "category": "Aksi Korporasi",
  "title": "DR: Waran [T-24] ICBP-INDF Berakhir 19 November 2026",
  "deck": "RHB Sekuritas mengumumkan jadwal jatuh tempo waran terstruktur penerbitan ke-24 atas ICBP dan INDF, dengan pelaksanaan otomatis 19 November 2026 dan delisting sehari setelahnya.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "ICBP",
   "INDF",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7d7f81d9a7_0d544090f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giias-makassar-2026-dibuka-pamerkan-14-merek-mobil-dan-motor",
  "category": "Industri",
  "title": "GIIAS Makassar 2026 Dibuka, Pamerkan [14] Merek Mobil dan Motor",
  "deck": "GIIAS Makassar 2026 dibuka 28 Oktober di SMMCC dengan 14 merek mobil, empat merek motor, dan 24 merek industri pendukung, termasuk enam merek baru.",
  "date": "2 November 2026",
  "image": "assets/img/giias-makassar-2026-dibuka-pamerkan-14-merek-mobil-dan-motor.jpg",
  "imageV": "mvyqt0xj",
  "tags": [
   "GIIAS Makassar",
   "GAIKINDO",
   "otomotif",
   "Sulawesi Selatan"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/giias-makassar-2026-berpeluang-ikut-mendorong-ekonomi-indonesia-timur/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "swat-catat-ekuitas-negatif-rp1-8-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SWAT Catat [Ekuitas] Negatif Rp1,8 Miliar di Semester I 2026",
  "deck": "Penjualan produsen kertas ini anjlok ke Rp305 juta dari Rp44,75 miliar, sementara total ekuitas berbalik negatif Rp1,83 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "ekuitas negatif",
   "laporan keuangan interim",
   "industri kertas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102111307-65532-0/FinancialStatement-2026-II-SWAT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ranc-gelar-rupslb-9-desember-bahas-perubahan-kegiatan-usaha",
  "category": "Aksi Korporasi",
  "title": "RANC Gelar RUPSLB 9 Desember, Bahas [Perubahan] Kegiatan Usaha",
  "deck": "Supra Boga Lestari (RANC) menjadwalkan RUPSLB pada 9 Desember 2026 untuk membahas perubahan kegiatan usaha dan amendemen Pasal 3 anggaran dasar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANC",
   "RUPSLB",
   "Supra Boga Lestari",
   "perubahan kegiatan usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9d9595079b_87dd58b237.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indo-laba-kuartal-iii-naik-49-jadi-rp36-7-miliar",
  "category": "Aksi Korporasi",
  "title": "INDO: [Laba] Kuartal III Naik 49% Jadi Rp36,7 Miliar",
  "deck": "Laba bersih sembilan bulan INDO melonjak 49 persen jadi Rp36,68 miliar, sementara liabilitas naik 28 persen seiring anak usaha gula mulai berproduksi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDO",
   "laporan keuangan",
   "laba bersih",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102105650-65674-0/FinancialStatement-2026-III-INDO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-rp5-000-jadi-rp2-531-juta-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Rp5.000, jadi Rp2,531 Juta/Gram",
  "deck": "Harga emas batangan Antam naik Rp5.000 menjadi Rp2.531.000 per gram pada Senin, sementara harga buyback juga naik ke Rp2.286.000 per gram.",
  "date": "2 November 2026",
  "image": "assets/img/harga-emas-antam-naik-rp5-000-jadi-rp2-531-juta-gram.jpg",
  "imageV": "mvyqt1g7",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476160-harga-emas-antam-hari-ini-naik-rp5000-tembus-rp2531-juta-per-gram"
 },
 {
  "slug": "jecx-komisaris-beli-49-000-saham-tetap-hak-suara-0-39",
  "category": "Aksi Korporasi",
  "title": "JECX: Komisaris Beli 49.000 Saham [Tetap] Hak Suara 0,39%",
  "deck": "Dewan Komisaris JECX, DR. Admar Anwar, membeli 49.000 saham perusahaan senilai sekitar Rp50,7 juta pada 30 Oktober 2026, kepemilikannya naik jadi 12,78 juta lembar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "komisaris",
   "kepemilikan saham",
   "transaksi insider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02112026-8392-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "igar-rencanakan-go-private-dan-delisting-dari-bei",
  "category": "Aksi Korporasi",
  "title": "IGAR Rencanakan [Go Private] dan Delisting dari BEI",
  "deck": "Champion Pacific Indonesia (IGAR) menggelar RUPSLB 9 Desember 2026 untuk meminta restu pemegang saham independen atas rencana go private dan delisting dari bursa.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IGAR",
   "go private",
   "delisting",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/075dac88fd_1d16946a90.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-dirikan-anak-usaha-baru-rambah-bisnis-laundry",
  "category": "Aksi Korporasi",
  "title": "NAYZ Dirikan [Anak Usaha] Baru, Rambah Bisnis Laundry",
  "deck": "Hassana Boga Sejahtera (NAYZ) mendirikan anak usaha baru, PT Integrasi Sistem Digital, yang bergerak di peralatan listrik rumah tangga dan jasa laundry, di luar bisnis inti makanan bayi.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "anak usaha",
   "diversifikasi usaha",
   "Hassana Boga Sejahtera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e71606cf04_e8044def6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smbr-teken-perjanjian-gabung-anak-usaha-bmu-merger",
  "category": "Aksi Korporasi",
  "title": "SMBR Teken Perjanjian Gabung Anak Usaha BMU [Merger]",
  "deck": "SMBR menandatangani perjanjian bersyarat untuk melebur anak usahanya, BMU, ke dalam perusahaan induk sebagai bagian dari perampingan struktur menjelang integrasi dengan SIG.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "merger",
   "Semen Baturaja",
   "BMU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9b3111a309_9976207f67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-rugi-melebar-ke-rp28-2-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "TRUE: Rugi [Melebar] ke Rp28,2 Miliar di Kuartal III 2026",
  "deck": "Rugi bersih Triniti Dinamik (TRUE) melebar 64 persen jadi Rp28,2 miliar dalam sembilan bulan 2026, sementara penjualan turun 42 persen.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "Properti",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102080318-65661-0/FinancialStatement-2026-III-TRUE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-laba-bersih-naik-tapi-laba-usaha-minus-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "CYBR: Laba Bersih Naik, tapi [Laba Usaha] Minus di Kuartal III",
  "deck": "Pendapatan ITSEC Asia (CYBR) hampir stagnan pada sembilan bulan 2026, tapi margin kotor tergerus dan laba usaha berbalik rugi. Laba bersih tetap naik karena ditopang manfaat pajak besar.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102075520-65551-0/FinancialStatement-2026-III-CYBR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pwon-laba-9-bulan-turun-16-jadi-rp1-78-triliun",
  "category": "Aksi Korporasi",
  "title": "PWON: [Laba] 9 Bulan Turun 16% jadi Rp1,78 Triliun",
  "deck": "Pakuwon Jati melaporkan laba bersih sembilan bulan 2026 turun 16 persen jadi Rp1,78 triliun, sementara arus kas operasi dan ekuitas justru naik.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PWON",
   "laporan keuangan",
   "properti",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261102065554-65657-0/FinancialStatement-2026-III-PWON.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pege-optimus-vision-tambah-kepemilikan-saham-ke-6-39",
  "category": "Aksi Korporasi",
  "title": "PEGE: Optimus Vision Tambah [Kepemilikan] Saham ke 6,39%",
  "deck": "Optimus Vision Global Pte Ltd membeli 15 juta lembar saham PEGE secara tidak langsung pada 30 Oktober 2026, menaikkan kepemilikannya dari 6,00% menjadi 6,39%.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEGE",
   "kepemilikan saham",
   "Optimus Vision Global",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02112026-1984-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pege-optimus-vision-tambah-saham-ke-6-00-hak-suara",
  "category": "Aksi Korporasi",
  "title": "PEGE: Optimus Vision [Tambah] Saham ke 6,00% Hak Suara",
  "deck": "Optimus Vision Global menambah 4,87 juta saham PEGE lewat delapan transaksi akhir Oktober, mengangkat hak suaranya dari 5,87 persen jadi 6,00 persen.",
  "date": "2 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEGE",
   "kepemilikan saham",
   "Optimus Vision",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-02112026-0088-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penumpang-pesawat-turun-barang-kapal-laut-makin-padat",
  "category": "Makroekonomi",
  "title": "Penumpang Pesawat [Turun], Barang Kapal Laut Makin Padat",
  "deck": "BPS mencatat penumpang pesawat domestik turun 12,8 persen pada September 2026, sementara volume barang yang diangkut kapal laut naik 1,1 persen di bulan yang sama.",
  "date": "2 November 2026",
  "image": "assets/img/jalan-raya-padat.jpg",
  "tags": [
   "BPS",
   "Angkutan Udara",
   "Angkutan Laut",
   "Statistik Transportasi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/171596",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ekspor-naik-tapi-surplus-dagang-ri-makin-menyempit",
  "category": "Makroekonomi",
  "title": "Ekspor Naik, tapi Surplus Dagang RI Makin [Menyempit]",
  "deck": "Ekspor September 2026 naik 11,87 persen jadi US$27,59 miliar, tapi impor tumbuh lebih cepat 18,41 persen sehingga surplus dagang kumulatif menyempit jadi US$10,61 miliar.",
  "date": "2 November 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "ekspor",
   "impor",
   "neraca dagang",
   "BPS"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/171218",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "boss-baru-lapor-lk-semester-i-2024-defisit-modal-melebar",
  "category": "Aksi Korporasi",
  "title": "BOSS Baru Lapor LK Semester I/2024, [Defisit] Modal Melebar",
  "deck": "Laporan keuangan semester I 2024 yang baru disetor ke bursa dua tahun kemudian menunjukkan BOSS masih tanpa penjualan dan arus kas operasional makin boros.",
  "date": "1 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "defisiensi modal",
   "laporan keuangan interim",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202411/20261101232859-65658-0/FinancialStatement-2024-II-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asha-cetak-rugi-rp10-4-miliar-di-kuartal-iii-2026-ekuitas-susut",
  "category": "Aksi Korporasi",
  "title": "ASHA Cetak [Rugi] Rp10,4 Miliar di Kuartal III 2026, Ekuitas Susut",
  "deck": "Rugi bersih ASHA melebar jadi Rp10,39 miliar pada sembilan bulan 2026 meski penjualan naik 69 persen, sementara ekuitas turun dan kas operasi masih minus.",
  "date": "1 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASHA",
   "laporan keuangan",
   "industri perikanan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261101215039-65652-0/FinancialStatement-2026-III-ASHA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indr-bukukan-laba-us-12-7-juta-berbalik-dari-rugi-tahun-lalu",
  "category": "Aksi Korporasi",
  "title": "INDR Bukukan Laba US$12,7 Juta, [Berbalik] dari Rugi Tahun Lalu",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan Indo-Rama Synthetics membalik rugi US$10,5 juta tahun lalu menjadi laba US$12,7 juta, didorong lonjakan laba kotor.",
  "date": "1 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDR",
   "laporan keuangan",
   "tekstil",
   "laba kuartalan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261101205125-65609-0/FinancialStatement-2026-III-INDR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-gelar-smexpo-bekasi-bidik-transaksi-rp2-5-m",
  "category": "UMKM",
  "title": "Pertamina Gelar SMEXPO Bekasi, Bidik Transaksi [Rp2,5 M]",
  "deck": "Pertamina Foundation menggelar SMEXPO Regional Bekasi 2026 dengan konsep ritel modern, menampilkan 50 UMKM terpilih dari 8.000 pendaftar dan target transaksi Rp2,5 miliar.",
  "date": "1 November 2026",
  "image": "assets/img/pertamina-gelar-smexpo-bekasi-bidik-transaksi-rp2-5-m.jpg",
  "imageV": "mvxzz90d",
  "tags": [
   "Pertamina",
   "UMKM",
   "Bekasi",
   "SMEXPO"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476081-bukan-sekadar-pameran-pertamina-smexpo-2026-di-bekasi-hadirkan-konsep-belanja-ala-ritel-modern-bagi-umkm"
 },
 {
  "slug": "indonesia-teken-pakta-pajak-global-tukar-data-mulai-2027",
  "category": "Makroekonomi",
  "title": "Indonesia Teken Pakta Pajak Global, Tukar Data Mulai [2027]",
  "deck": "Dirjen Pajak menandatangani kesepakatan tukar-data pajak internasional di Montenegro, menjadikan Indonesia negara ke-41 yang bergabung untuk mengawasi Pajak Minimum Global perusahaan multinasional.",
  "date": "1 November 2026",
  "image": "assets/img/indonesia-teken-pakta-pajak-global-tukar-data-mulai-2027.jpg",
  "imageV": "mvxo9gzk",
  "tags": [
   "Pajak",
   "DJP",
   "Pajak Minimum Global",
   "Kerja Sama Internasional"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/indonesia-perkuat-kerja-sama-pajak-global-dirjen-pajak-tandatangani-gir-mcaa",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "muhaimin-beri-penghargaan-jkn-ke-80-firma-8-pemda",
  "category": "Ketenagakerjaan",
  "title": "Muhaimin Beri [Penghargaan] JKN ke 80 Firma, 8 Pemda",
  "deck": "Satya JKN Awards 2026 mengapresiasi 80 badan usaha swasta dan 8 pemerintah daerah yang dinilai patuh mendukung program Jaminan Kesehatan Nasional.",
  "date": "1 November 2026",
  "image": "assets/img/muhaimin-beri-penghargaan-jkn-ke-80-firma-8-pemda.jpg",
  "imageV": "mvxo9hfs",
  "tags": [
   "JKN",
   "Satya JKN Awards",
   "Kemenko PM",
   "BPJS Kesehatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476055-menko-muhaimin-beri-penghargaan-atas-kepatuhan-badan-usaha-dan-pemda-dalam-program-jkn"
 },
 {
  "slug": "ayam-balik-laba-rp17-6-miliar-utang-bank-jangka-pendek-lunas",
  "category": "Aksi Korporasi",
  "title": "AYAM Balik Laba Rp17,6 Miliar, Utang Bank Jangka Pendek [Lunas]",
  "deck": "Laporan kuartal III 2026 menunjukkan laba bersih AYAM berbalik positif Rp17,59 miliar dan utang bank jangka pendek lunas, tapi arus kas operasi justru negatif Rp20,34 miliar.",
  "date": "1 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYAM",
   "laporan keuangan",
   "emiten unggas",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261101125340-65645-0/FinancialStatement-2026-III-AYAM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-bess-anjlok-95-di-laporan-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "[Laba] BESS Anjlok 95% di Laporan Kuartal III 2026",
  "deck": "Laba bersih sembilan bulan BESS tergerus jadi Rp3,1 miliar dari Rp61,9 miliar, sementara utangnya turun 40 persen setelah dilunasi ke pemasok dan bank.",
  "date": "1 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BESS",
   "laporan keuangan",
   "batu bara",
   "emiten tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261101102050-65553-0/FinancialStatement-2026-III-BESS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "majalengka-jadi-pemda-teraktif-dukung-desa-wisata-ojk",
  "category": "Perbankan",
  "title": "Majalengka Jadi Pemda [Teraktif] Dukung Desa Wisata OJK",
  "deck": "Pemkab Majalengka menerima penghargaan OJK Cirebon sebagai pemda paling aktif mendukung program Desa Ekosistem Keuangan Inklusif sektor wisata tahun 2026.",
  "date": "1 November 2026",
  "image": "assets/img/majalengka-jadi-pemda-teraktif-dukung-desa-wisata-ojk.jpg",
  "imageV": "mvws2vt3",
  "tags": [
   "ojk",
   "umkm",
   "finexpo",
   "desa wisata"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475990-top-pemkab-majalengka-raih-penghargaan-ojk-cirebon-sebagai-pemda-teraktif-program-desa-eki-sektor-wisata-2026"
 },
 {
  "slug": "voks-balik-untung-kuartal-iii-utang-melonjak-63-7",
  "category": "Aksi Korporasi",
  "title": "VOKS Balik Untung Kuartal III, [Utang] Melonjak 63,7%",
  "deck": "Voksel Electric berbalik untung Rp14,66 miliar pada sembilan bulan 2026, tapi utangnya melonjak 63,7 persen karena pinjaman baru dari bank China dan utang ke pihak berelasi.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VOKS",
   "Voksel Electric",
   "laporan keuangan",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261101000955-65633-0/FinancialStatement-2026-III-VOKS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "usu-deli-serdang-tanam-10-000-pohon-bekal-karier-digital",
  "category": "Bisnis",
  "title": "USU Deli Serdang Tanam 10.000 [Pohon], Bekal Karier Digital",
  "deck": "Linknet dan Pertamina Foundation menanam 10.000 pohon di Kampus 2 USU sekaligus membekali ratusan mahasiswa dengan wawasan karier ekonomi digital.",
  "date": "31 Oktober 2026",
  "image": "assets/img/usu-deli-serdang-tanam-10-000-pohon-bekal-karier-digital.jpg",
  "imageV": "mvws2w6s",
  "tags": [
   "Linknet",
   "Pertamina Foundation",
   "USU",
   "Penghijauan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475988-enggak-cuma-tanam-10000-pohon-mahasiswa-di-deli-serdang-kini-dibekali-tips-karier-di-era-digital"
 },
 {
  "slug": "pipa-ganti-nama-jadi-oxala-energy-laba-9-bulan-susut-53",
  "category": "Aksi Korporasi",
  "title": "PIPA ganti nama jadi [Oxala Energy], laba 9 bulan susut 53%",
  "deck": "Oxala Energy International (PIPA) mengganti nama dan domisili ke Jakarta Selatan, sementara laba bersih sembilan bulan turun ke Rp1,26 miliar dari Rp2,66 miliar tahun sebelumnya.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "Oxala Energy International",
   "laporan keuangan interim",
   "ganti nama perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031230241-65526-0/FinancialStatement-2026-III-PIPA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pabrik-sepatu-kek-batang-pekerjakan-174-difabel",
  "category": "Ketenagakerjaan",
  "title": "Pabrik Sepatu KEK Batang Pekerjakan 174 [Difabel]",
  "deck": "PT Yih Quan Footwear Indonesia di KEK Industropolis Batang mempekerjakan 174 penyandang disabilitas dari 6.131 karyawan, lewat asesmen klinis dan kerja sama dengan SLB.",
  "date": "31 Oktober 2026",
  "image": "assets/img/pabrik-sepatu-kek-batang-pekerjakan-174-difabel.jpg",
  "imageV": "mvwlmqe8",
  "tags": [
   "difabel",
   "KEK Industropolis Batang",
   "ketenagakerjaan inklusif",
   "industri sepatu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475986-kisah-dari-batang-mengubah-stigma-lewat-peluang-kerja-inklusif-bagi-penyandang-disabilitas"
 },
 {
  "slug": "visi-atlas-raya-abadi-tambah-saham-lewat-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "VISI: Atlas Raya Abadi Tambah Saham Lewat [PMTHMETD]",
  "deck": "PT Atlas Raya Abadi menambah 24,14 juta saham VISI senilai sekitar Rp24 miliar lewat penambahan modal tanpa hak memesan efek terlebih dahulu, hak suaranya naik ke 10,53%.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "kepemilikan saham",
   "PMTHMETD",
   "Atlas Raya Abadi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-31102026-7721-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-harmoni-semesta-tambah-saham-rp72-miliar-lewat-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "VISI: Harmoni Semesta [Tambah] Saham Rp72 Miliar Lewat PMTHMETD",
  "deck": "PT Harmoni Semesta Investama menambah kepemilikan di VISI lewat penerbitan saham baru senilai sekitar Rp72 miliar, namun hak suaranya justru turun tipis ke 61,77 persen.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "PMTHMETD",
   "Harmoni Semesta Investama",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-31102026-4857-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pajak-ekonomi-digital-tembus-rp58-75-triliun-per-september",
  "category": "Makroekonomi",
  "title": "Pajak Ekonomi Digital [Tembus] Rp58,75 Triliun per September",
  "deck": "DJP mencatat penerimaan pajak ekonomi digital Rp58,75 triliun hingga September 2026, dengan pajak dagang elektronik lintas negara sebagai penyumbang terbesar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/pajak-ekonomi-digital-tembus-rp58-75-triliun-per-september.jpg",
  "imageV": "mvwd4821",
  "tags": [
   "pajak digital",
   "DJP",
   "PMSE",
   "pajak kripto"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/pajak-ekonomi-digital-tembus-rp5875-triliun-hingga-september-2026",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "kemendag-latih-mahasiswa-ipb-jadi-eksportir-lewat-campuspreneur",
  "category": "UMKM",
  "title": "Kemendag Latih Mahasiswa IPB Jadi [Eksportir] Lewat Campuspreneur",
  "deck": "Kemendag mengajak mahasiswa IPB mengembangkan usaha lewat program Campuspreneur, bagian dari strategi memperluas basis eksportir muda dari kampus ke pasar global.",
  "date": "31 Oktober 2026",
  "image": "assets/img/kemendag-latih-mahasiswa-ipb-jadi-eksportir-lewat-campuspreneur.jpg",
  "imageV": "mvwd4hmd",
  "tags": [
   "Campuspreneur",
   "Kemendag",
   "Ekspor UMKM",
   "IPB University"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/intensifkan-campuspreneur-kemendag-ajak-mahasiswa-ipb-jadi-eksportir-muda",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "cbre-catat-ekuitas-negatif-rp144-86-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "CBRE catat [ekuitas] negatif Rp144,86 miliar di kuartal III",
  "deck": "Ekuitas CBRE berbalik negatif Rp144,86 miliar pada September 2026, setelah rugi kurs Rp117 miliar mendorong rugi bersih sembilan bulan jadi Rp191,77 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBRE",
   "laporan keuangan",
   "ekuitas negatif",
   "rugi kurs"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031184703-65053-0/FinancialStatement-2026-III-CBRE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptba-bubarkan-anak-usaha-bukit-multi-properti-likuidasi",
  "category": "Aksi Korporasi",
  "title": "PTBA Bubarkan Anak Usaha Bukit Multi Properti [Likuidasi]",
  "deck": "PTBA melikuidasi anak usaha tak langsungnya, PT Bukit Multi Properti, sebagai bagian dari program penataan anak usaha BUMN oleh Danantara dan MIND ID.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTBA",
   "likuidasi",
   "MIND ID",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7b8b6e21a7_8591097080.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-laba-bersih-anjlok-75-jadi-rp24-9-miliar-di-9-bulan",
  "category": "Aksi Korporasi",
  "title": "BEEF: Laba Bersih [Anjlok] 75% jadi Rp24,9 Miliar di 9 Bulan",
  "deck": "Laba bersih sembilan bulan BEEF turun dari Rp98,96 miliar menjadi Rp24,89 miliar, seiring pendapatan yang susut 27 persen dan perseroan membeli kembali saham senilai Rp46,86 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "laporan keuangan",
   "laba bersih",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031175758-65641-0/FinancialStatement-2026-III-BEEF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asjt-catat-rugi-rp5-6-miliar-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "ASJT Catat [Rugi] Rp5,6 Miliar di Sembilan Bulan 2026",
  "deck": "Laba sembilan bulan ASJT berbalik jadi rugi Rp5,62 miliar akibat beban klaim yang melonjak hampir dua kali lipat, sementara ekuitas perseroan menyusut dari Rp321,6 miliar menjadi Rp309,8 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASJT",
   "asuransi",
   "laporan keuangan",
   "rugi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031170746-64978-0/FinancialStatement-2026-III-ASJT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tyre-laba-bersih-susut-27-meski-penjualan-naik-9-8",
  "category": "Aksi Korporasi",
  "title": "TYRE: Laba Bersih [Susut] 27% Meski Penjualan Naik 9,8%",
  "deck": "Laba bersih TYRE turun 26,7 persen jadi Rp14,32 miliar untuk sembilan bulan pertama 2026, meski penjualan naik 9,8 persen, karena beban lain-lain dan bunga pinjaman membesar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TYRE",
   "laporan keuangan",
   "laba bersih",
   "industri ban"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031171141-65606-0/FinancialStatement-2026-III-TYRE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bina-laba-interim-naik-jadi-rp72-8-miliar-ekuitas-turun-8-9",
  "category": "Aksi Korporasi",
  "title": "BINA: Laba Interim Naik Jadi Rp72,8 Miliar, [Ekuitas] Turun 8,9%",
  "deck": "Bank Ina Perdana mencatat laba bersih sembilan bulan Rp72,8 miliar, naik lebih dari dua kali lipat, tapi ekuitasnya tergerus kerugian belum terealisasi dari portofolio surat berharga.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINA",
   "laporan keuangan",
   "perbankan",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031170201-65565-0/FinancialStatement-2026-III-BINA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-peduli-kembangkan-brinita-di-bandung",
  "category": "BUMN",
  "title": "BRI Peduli Kembangkan [BRInita] di Bandung",
  "deck": "BRI Peduli mengajak jurnalis Fellowship Journalism 2026 menanam langsung di program urban farming BRInita Buruan Sae Pajajaran Hegar, Kota Bandung.",
  "date": "31 Oktober 2026",
  "image": "assets/img/bri-peduli-kembangkan-brinita-di-bandung.jpg",
  "imageV": "mvw7pc1y",
  "tags": [
   "BRI Peduli",
   "BRInita",
   "urban farming",
   "Bandung"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475934-fellowship-journalism-menanam-di-brinita-buruan-sae-pajajaran-hegar-kota-bandung"
 },
 {
  "slug": "dgns-rugi-melebar-ke-rp4-47-miliar-meski-pendapatan-naik-12",
  "category": "Aksi Korporasi",
  "title": "DGNS: Rugi [Melebar] ke Rp4,47 Miliar Meski Pendapatan Naik 12%",
  "deck": "Laporan interim sembilan bulan DGNS mencatat pendapatan naik 12 persen, namun rugi bersih melebar jadi Rp4,47 miliar dan arus kas operasi berbalik negatif.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGNS",
   "laporan keuangan",
   "kesehatan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031164212-65578-0/FinancialStatement-2026-III-DGNS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "luck-balik-untung-laba-rp1-7-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "LUCK Balik Untung, [Laba] Rp1,7 Miliar di Kuartal III 2026",
  "deck": "Pendapatan Sentral Mitra Informatika naik 41 persen jadi Rp92,1 miliar dalam sembilan bulan 2026, mengantarkan laba bersih Rp1,7 miliar setelah rugi tahun lalu.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LUCK",
   "laporan keuangan",
   "kuartal III 2026",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031160750-64566-0/FinancialStatement-2026-III-LUCK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sger-pendapatan-naik-17-laba-turun-tipis-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "SGER: Pendapatan Naik 17%, [Laba] Turun Tipis di Kuartal III",
  "deck": "Pendapatan SGER naik 16,7 persen ditopang permintaan batu bara dan nikel, tapi laba bersih tergerus kenaikan beban bunga 27,7 persen pada kuartal III 2026.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGER",
   "batu bara",
   "nikel",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031155710-65456-0/FinancialStatement-2026-III-SGER.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-smga-tumbuh-21-tapi-utang-usaha-naik-90",
  "category": "Aksi Korporasi",
  "title": "Laba SMGA Tumbuh 21%, tapi [Utang Usaha] Naik 90%",
  "deck": "Penjualan sembilan bulan SMGA naik jadi Rp2,11 triliun dan laba bersih ke Rp56,33 miliar, sementara utang usaha melonjak karena pembelian batu bara dan nikel.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGA",
   "laporan keuangan",
   "pertambangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031154606-65333-0/FinancialStatement-2026-III-SMGA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsml-saham-pengendali-menyusut-ke-36-41-laba-turun",
  "category": "Aksi Korporasi",
  "title": "BSML: Saham Pengendali Menyusut ke [36,41%], Laba Turun",
  "deck": "Laba bersih BSML turun tipis di kuartal III 2026, sementara porsi kepemilikan pemegang saham utama, PT Goldfive Investment Capital, susut dari 45,47 persen menjadi 36,41 persen dalam sembilan bulan.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSML",
   "laporan keuangan",
   "kepemilikan saham",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031152913-64752-0/FinancialStatement-2026-III-BSML.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-idpr-melonjak-727-jadi-rp19-3-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "Laba IDPR [Melonjak] 727% Jadi Rp19,3 Miliar di Kuartal III 2026",
  "deck": "Pendapatan IDPR naik 39 persen jadi Rp1,23 triliun dan laba bersih melonjak ke Rp19,3 miliar pada sembilan bulan 2026, tapi arus kas operasi berbalik negatif dan utang bank jangka pendek naik tajam.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDPR",
   "laporan keuangan",
   "konstruksi",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031151311-65623-0/FinancialStatement-2026-III-IDPR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tosk-laba-kuartal-iii-turun-59-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "TOSK: Laba Kuartal III [Turun] 59%, Kas Operasi Negatif",
  "deck": "Laba bersih TOSK turun 59 persen jadi Rp1,98 miliar pada sembilan bulan 2026, arus kas operasi berbalik negatif, dan utang bank jangka pendek melonjak 309,5 persen.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOSK",
   "laporan keuangan",
   "arus kas",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031142837-65344-0/FinancialStatement-2026-III-TOSK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mang-catatkan-rugi-rp7-3-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MANG Catatkan [Rugi] Rp7,3 Miliar di Kuartal III 2026",
  "deck": "PT Manggung Polahraya (MANG) mencatat rugi Rp7,3 miliar pada sembilan bulan 2026, ekuitas dan kas menyusut, sementara beban akrual melonjak lebih dari 15 kali lipat.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MANG",
   "laporan keuangan",
   "rugi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031141003-65627-0/FinancialStatement-2026-III-MANG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jawa-laba-ganda-tapi-utang-jangka-pendek-melonjak-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "JAWA: Laba Ganda tapi [Utang] Jangka Pendek Melonjak di Kuartal III",
  "deck": "Laba bersih sembilan bulan JAWA naik jadi Rp75,9 miliar, tapi sebagian besar ditopang untung non-operasional, sementara kas menipis dan utang bank jatuh tempo setahun melonjak ke Rp519 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAWA",
   "laporan keuangan",
   "perkebunan",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031134826-64440-0/FinancialStatement-2026-III-JAWA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-usaha-bnbr-melonjak-2-157-di-kuartal-iii-2026",
  "category": "Pasar Modal",
  "title": "Laba Usaha BNBR [Melonjak] 2.157% di Kuartal III 2026",
  "deck": "PT Bakrie & Brothers Tbk membukukan pendapatan Rp4,12 triliun dan laba usaha Rp596,24 miliar pada kuartal III 2026, ditopang kenaikan kinerja tiga unit usahanya.",
  "date": "31 Oktober 2026",
  "image": "assets/img/laba-usaha-bnbr-melonjak-2-157-di-kuartal-iii-2026.jpg",
  "imageV": "mvw05zio",
  "tags": [
   "bnbr",
   "bakrie brothers",
   "vktr",
   "laporan keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475896-kinerja-bnbr-kuartal-iii-2026-melesat-pendapatan-naik-5545-dan-gross-profit-melonjak-12782"
 },
 {
  "slug": "smkl-utang-naik-23-kas-operasi-negatif-rp166-miliar",
  "category": "Aksi Korporasi",
  "title": "SMKL: [Utang] Naik 23%, Kas Operasi Negatif Rp166 Miliar",
  "deck": "Laporan kuartal III 2026 SMKL menunjukkan penjualan naik 15 persen, tapi utang bank melonjak 38 persen untuk pabrik baru di Batang dan kas dari operasi berbalik minus Rp166 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMKL",
   "laporan keuangan kuartal III",
   "utang bank",
   "arus kas operasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031124213-65547-0/FinancialStatement-2026-III-SMKL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaef-rombak-utang-jangka-pendek-rugi-menyusut-ke-rp12-9-m",
  "category": "Aksi Korporasi",
  "title": "KAEF Rombak Utang Jangka Pendek, Rugi [Menyusut] ke Rp12,9 M",
  "deck": "KAEF catat rugi Rp12,9 miliar pada sembilan bulan 2026, jauh menyusut dari Rp234,1 miliar setahun lalu, seiring restrukturisasi utang bank jangka pendek ke jangka panjang.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KAEF",
   "Kimia Farma",
   "laporan keuangan",
   "BUMN farmasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031115423-65493-0/FinancialStatement-2026-III-KAEF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meri-berbalik-rugi-rp429-6-juta-pada-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MERI Berbalik [Rugi] Rp429,6 Juta pada Kuartal III 2026",
  "deck": "Beban umum dan administrasi yang melonjak 37 persen membuat PT Merry Riana Edukasi Tbk merugi Rp429,6 juta pada sembilan bulan pertama 2026, berbalik dari laba Rp4,4 miliar tahun sebelumnya.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MERI",
   "laporan keuangan",
   "emiten pendidikan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031115317-65573-0/FinancialStatement-2026-III-MERI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-anak-usaha-raih-kontrak-epc-pltmg-pln-rp3-8-t",
  "category": "Aksi Korporasi",
  "title": "BIKE: Anak Usaha Raih [Kontrak] EPC PLTMG PLN Rp3,8 T",
  "deck": "Anak usaha BIKE, PT Karya Bersinar Indonesia, mendapat kontrak EPC PLTMG 2x100 MW senilai Rp3,8 triliun dari PLN Indonesia Power.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "kontrak PLN",
   "EPC PLTMG",
   "energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f8e66ad747_efd7b7f434.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "slis-rugi-melebar-9-bulan-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "SLIS Rugi Melebar 9 Bulan, Kas Operasi [Negatif]",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan rugi bersih SLIS melebar menjadi Rp9,67 miliar, sementara arus kas dari kegiatan usaha berbalik negatif Rp15,68 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SLIS",
   "laporan keuangan",
   "rugi bersih",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031105118-65528-0/FinancialStatement-2026-III-SLIS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-jadi-rp2-526-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Lagi Jadi Rp2.526.000/Gram",
  "deck": "Harga emas Antam turun Rp20.000 per gram untuk hari kedua beruntun pada 31 Oktober 2026, kini Rp2.526.000 per gram. Harga buyback ikut turun ke Rp2.276.000 per gram.",
  "date": "31 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-jadi-rp2-526-000-gram.jpg",
  "imageV": "mvvuts2i",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475873-harga-emas-antam-hari-ini-31-oktober-2026-lagi-lagi-menurun-kini-jadi-rp2526000-per-gram"
 },
 {
  "slug": "agii-komisaris-utama-heyzer-harsono-wafat",
  "category": "Aksi Korporasi",
  "title": "AGII: Komisaris Utama [Heyzer Harsono] Wafat",
  "deck": "Komisaris Utama AGII, Heyzer Harsono, meninggal dunia pada 30 Oktober 2026. Perusahaan menyatakan tidak ada dampak material terhadap operasional atau keuangan.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "Komisaris Utama",
   "Pergantian Pengurus",
   "Keterbukaan Informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/da74c3c626_2a56601544.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rugi-pssi-balik-rugi-liabilitas-melonjak-34",
  "category": "Aksi Korporasi",
  "title": "[Rugi] PSSI Balik Rugi, Liabilitas Melonjak 34%",
  "deck": "Laba PT IMC Pelita Logistik Tbk (PSSI) berbalik jadi rugi pada sembilan bulan pertama 2026 seiring pendapatan turun dan utang bank bertambah 34 persen.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "laporan keuangan",
   "liabilitas",
   "logistik laut"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031093819-65155-0/FinancialStatement-2026-III-PSSI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-wbsa-turun-55-di-kuartal-iii-2026-pendapatan-naik-31",
  "category": "Aksi Korporasi",
  "title": "[Laba] WBSA Turun 55% di Kuartal III 2026, Pendapatan Naik 31%",
  "deck": "Pendapatan WBSA naik 31% menjadi Rp2,9 triliun pada kuartal III 2026, tapi laba bersih turun 55% menjadi Rp13,48 miliar akibat kenaikan beban dan biaya keuangan.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WBSA",
   "laporan keuangan",
   "laba bersih",
   "logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031091411-65443-0/FinancialStatement-2026-III-WBSA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gtra-tambah-733-truk-laba-bersih-melonjak-96-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "GTRA Tambah 733 Truk, Laba Bersih [Melonjak] 96% di Kuartal III",
  "deck": "Laba bersih GTRA naik 96 persen menjadi Rp87,84 miliar pada sembilan bulan 2026, ditopang penambahan 733 truk baru yang dibiayai utang bank dan pembiayaan konsumen.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTRA",
   "laporan keuangan",
   "logistik",
   "ekspansi truk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031090358-65590-0/FinancialStatement-2026-III-GTRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hits-laba-turun-39-di-kuartal-iii-meski-pendapatan-naik",
  "category": "Aksi Korporasi",
  "title": "HITS: Laba [Turun] 39% di Kuartal III Meski Pendapatan Naik",
  "deck": "Pendapatan HITS naik 5 persen jadi US$105,3 juta pada sembilan bulan 2026, tetapi laba bersih turun 39 persen akibat beban bunga dan biaya pokok yang naik lebih cepat.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HITS",
   "laporan keuangan",
   "laba bersih",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031085014-65570-0/FinancialStatement-2026-III-HITS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xgld-unit-etf-emas-susut-4-juta-via-penebusan",
  "category": "Aksi Korporasi",
  "title": "XGLD: Unit ETF Emas Susut 4 Juta via [Penebusan]",
  "deck": "Jumlah unit penyertaan ETF emas syariah XGLD berkurang dari 84 juta menjadi 80 juta unit, efektif tercatat dengan jumlah baru mulai 2 November 2026.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XGLD",
   "ETF emas",
   "reksa dana syariah",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e4c8548145_3b12a20580.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smfp-resmi-catatkan-obligasi-dan-sukuk-senilai-rp3-09-triliun",
  "category": "Aksi Korporasi",
  "title": "SMFP resmi catatkan obligasi dan sukuk senilai [Rp3,09 triliun]",
  "deck": "BEI mencatatkan empat obligasi dan sukuk baru SMF (SMFP) senilai total Rp3,09 triliun mulai 30 Oktober 2026, bagian dari program obligasi berkelanjutan VIII.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMFP",
   "obligasi korporasi",
   "sukuk musyarakah",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4f8ee1de49_06148c49bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-tanpa-penjualan-di-2024-defisiensi-modal-membesar",
  "category": "Aksi Korporasi",
  "title": "BOSS Tanpa Penjualan di 2024, [Defisiensi Modal] Membesar",
  "deck": "Laporan keuangan tahunan 2024 BOSS menunjukkan nol penjualan, rugi bersih Rp22,2 miliar, dan defisiensi modal yang melebar menjadi Rp224,1 miliar, di tengah pailit anak usaha tambangnya.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "pailit",
   "opini wajar dengan pengecualian",
   "defisiensi modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2106899c86_ce18c95e35.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-anak-usaha-tambang-kantongi-izin-going-concern",
  "category": "Aksi Korporasi",
  "title": "BOSS: Anak Usaha Tambang Kantongi Izin [Going Concern]",
  "deck": "Hakim Pengawas mengizinkan anak usaha BOSS, PT Bangun Olahsarana Sukses, melanjutkan operasi tambang batu bara meski masih berstatus pailit.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "going concern",
   "pailit",
   "tambang batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e8853a2cf8_5229c7dff5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadin-rumuskan-tiga-strategi-jaga-bisnis-dan-ekspor",
  "category": "Makroekonomi",
  "title": "Kadin Rumuskan [Tiga] Strategi Jaga Bisnis dan Ekspor",
  "deck": "Kadin Indonesia mengusulkan tiga langkah menjaga daya beli, pasokan bahan baku, dan kepastian berusaha di tengah ekonomi global yang makin tidak menentu.",
  "date": "31 Oktober 2026",
  "image": "assets/img/kadin-rumuskan-tiga-strategi-jaga-bisnis-dan-ekspor.jpg",
  "imageV": "mvvl6yuz",
  "tags": [
   "Kadin Indonesia",
   "ekspor",
   "ekonomi global",
   "daya saing usaha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475851-ekonomi-global-makin-menantang-kadin-ungkap-3-strategi-agar-bisnis-indonesia-tetap-bertahan-dan-ekspor-tumbuh"
 },
 {
  "slug": "smma-catat-laba-turun-25-jadi-rp2-33-triliun-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "SMMA Catat [Laba] Turun 25% jadi Rp2,33 Triliun per September 2026",
  "deck": "Laba bersih Sinar Mas Multiartha turun 24,6 persen jadi Rp2,33 triliun dalam sembilan bulan 2026, terutama karena hilangnya keuntungan satu kali dari penjualan saham tahun lalu.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "laporan keuangan",
   "laba bersih",
   "Sinar Mas Multiartha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031041335-65626-0/FinancialStatement-2026-III-SMMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-raih-opini-pengecualian-kas-tersisa-rp721-juta",
  "category": "Aksi Korporasi",
  "title": "BOSS Raih Opini [Pengecualian], Kas Tersisa Rp721 Juta",
  "deck": "Laporan keuangan tahunan 2025 BOSS kembali beropini wajar dengan pengecualian akibat pailitnya anak usaha tambang, kas perusahaan susut tajam dari Rp2,45 miliar menjadi Rp721 juta.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "opini pengecualian",
   "pailit",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202510/20261031031229-65608-0/FinancialStatement-2025-Tahunan-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-bersih-jkon-melonjak-13-kali-lipat-jadi-rp237-8-miliar",
  "category": "Aksi Korporasi",
  "title": "Laba Bersih [JKON] Melonjak 13 Kali Lipat Jadi Rp237,8 Miliar",
  "deck": "Laba periode sembilan bulan JKON melonjak drastis dari Rp17,87 miliar jadi Rp237,81 miliar, didorong pendapatan yang naik 51 persen.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JKON",
   "laporan keuangan",
   "laba bersih",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031015442-65402-0/FinancialStatement-2026-III-JKON.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-bukukan-kas-rp3-95-triliun-usai-rights-issue-rp3-2-triliun",
  "category": "Aksi Korporasi",
  "title": "INET Bukukan Kas Rp3,95 Triliun Usai [Rights Issue] Rp3,2 Triliun",
  "deck": "Laporan keuangan interim Kuartal III 2026 INET menunjukkan kas naik 878 persen setelah rights issue Rp3,2 triliun dan akuisisi sejumlah anak usaha baru.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "rights issue",
   "akuisisi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031011428-65499-0/FinancialStatement-2026-III-INET.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iikp-penjualan-ambrol-99-rugi-sembilan-bulan-melebar",
  "category": "Aksi Korporasi",
  "title": "IIKP: Penjualan [Ambrol] 99%, Rugi Sembilan Bulan Melebar",
  "deck": "Penjualan Inti Agri Resources turun drastis dari Rp9,72 miliar jadi Rp77 juta dalam sembilan bulan 2026, sementara rugi bersih melebar jadi Rp8,36 miliar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIKP",
   "laporan keuangan",
   "arowana",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031004505-65611-0/FinancialStatement-2026-III-IIKP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdes-tambah-2-1-juta-unit-etf-emas-bri-mi-syariah",
  "category": "Aksi Korporasi",
  "title": "XDES Tambah [2,1 Juta] Unit ETF Emas BRI MI Syariah",
  "deck": "BEI mencatat tambahan 2,1 juta unit penyertaan Reksa Dana Syariah BRI MI Gold ETF Syariah (XDES), total unit beredar naik jadi 6,6 juta efektif 2 November 2026.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDES",
   "ETF emas",
   "BRI MI",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/826262c5fc_95beebb13b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-catat-83-juta-saham-baru-dari-hmetd",
  "category": "Aksi Korporasi",
  "title": "BUVA Catat 83 Juta Saham Baru dari [HMETD]",
  "deck": "BEI mencatatkan 83,07 juta saham baru BUVA hasil exercise rights issue per 2 November 2026, total saham beredar BUVA naik jadi 30,08 miliar lembar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "rights issue",
   "HMETD",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dea8defad6_7f55b4c37e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-catatkan-1-15-juta-saham-baru-dari-konversi-owk",
  "category": "Aksi Korporasi",
  "title": "PACK catatkan [1,15 juta] saham baru dari konversi OWK",
  "deck": "Dua kali konversi obligasi wajib konversi PACK pada akhir Oktober menambah 1.152.680 saham baru, saham beredar emiten jadi 34,14 miliar lembar.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "obligasi wajib konversi",
   "pencatatan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4def9b8759_ad40218e39.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bola-rugi-rp105-6-miliar-9-bulan-ekuitas-turun-13",
  "category": "Aksi Korporasi",
  "title": "BOLA Rugi Rp105,6 Miliar 9 Bulan, [Ekuitas] Turun 13%",
  "deck": "Laporan keuangan interim kuartal III 2026 BOLA menunjukkan rugi bersih Rp105,59 miliar, berbalik dari laba tahun lalu, dipicu kerugian investasi saham dan beban operasi yang melonjak.",
  "date": "31 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLA",
   "Bali United",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261031003904-65545-0/FinancialStatement-2026-III-BOLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-untung-tipis-usai-jual-8-kapal-ekuitas-tetap-negatif",
  "category": "Aksi Korporasi",
  "title": "CANI [Untung] Tipis Usai Jual 8 Kapal, Ekuitas Tetap Negatif",
  "deck": "CANI mencatat laba bersih US$311.490 pada kuartal I tahun buku 2026/2027, berbalik dari rugi, setelah menjual delapan kapal. Ekuitas perusahaan masih minus US$33,9 juta.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "laporan keuangan",
   "defisiensi modal",
   "penjualan kapal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030235226-65576-0/FinancialStatement-2026-I-CANI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-cetak-laba-rp14-4-triliun-di-kuartal-iii-buyback-naik-tajam",
  "category": "Aksi Korporasi",
  "title": "TLKM Cetak Laba Rp14,4 Triliun di Kuartal III, [Buyback] Naik Tajam",
  "deck": "Pendapatan Telkom naik 3,5 persen jadi Rp113,5 triliun pada sembilan bulan 2026, tapi laba bersih turun 3,9 persen karena rugi investasi dan buyback saham senilai Rp1,75 triliun.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Telkom Indonesia",
   "laporan keuangan",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030234844-65294-0/FinancialStatement-2026-III-TLKM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-referensi-cpo-november-turun-6-kakao-susut-8",
  "category": "Industri",
  "title": "Harga Referensi CPO November [Turun] 6%, Kakao Susut 8%",
  "deck": "Kemendag menurunkan harga referensi CPO dan kakao untuk November 2026, sehingga bea keluar dan pungutan ekspor kedua komoditas ikut mengecil.",
  "date": "30 Oktober 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "CPO",
   "kakao",
   "bea keluar",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/periode-november-2026-hr-cpo-dan-hpe-biji-kakao-terkoreksi-hpe-komoditas-lainnya-bervariasi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "merk-penjualan-naik-21-5-laba-turun-kena-pajak-besar",
  "category": "Aksi Korporasi",
  "title": "MERK: Penjualan Naik 21,5%, [Laba] Turun Kena Pajak Besar",
  "deck": "Merck Tbk mencatat penjualan Rp989,1 miliar pada sembilan bulan pertama 2026, naik 21,5 persen, namun laba bersih turun 5,3 persen menjadi Rp96,7 miliar akibat beban pajak yang melonjak.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MERK",
   "laporan keuangan",
   "farmasi",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030235912-65523-0/FinancialStatement-2026-III-MERK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kpig-direktur-edi-yanto-ajukan-mundur-tunggu-rups",
  "category": "Aksi Korporasi",
  "title": "KPIG: Direktur [Edi Yanto] Ajukan Mundur, Tunggu RUPS",
  "deck": "PT MNC Tourism Indonesia Tbk melaporkan pengunduran diri Direktur Edi Yanto per 28 Oktober 2026, yang baru sah setelah disetujui RUPS mendatang.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KPIG",
   "MNC Tourism Indonesia",
   "pergantian direksi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/14bef66ef6_bc56ed78e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indy-laba-pemilik-melonjak-ke-us-20-2-juta-di-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "INDY: [Laba] Pemilik Melonjak ke US$20,2 Juta di 9 Bulan 2026",
  "deck": "Pendapatan INDY naik 27,7 persen dan laba bersih ke pemilik melonjak jadi US$20,2 juta dalam sembilan bulan 2026, sementara utang obligasi juga naik signifikan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDY",
   "Indika Energy",
   "laporan keuangan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030234008-65279-0/FinancialStatement-2026-III-INDY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-gelar-minerba-convex-2026-buka-konsultasi-rkab",
  "category": "Energi",
  "title": "ESDM Gelar Minerba Convex 2026, Buka [Konsultasi] RKAB",
  "deck": "Ditjen Minerba ESDM bersama 18 asosiasi tambang gelar Minerba Convex 2026 di Jakarta, 2-3 November 2026, lengkap dengan konsultasi RKAB untuk badan usaha.",
  "date": "30 Oktober 2026",
  "image": "assets/img/esdm-gelar-minerba-convex-2026-buka-konsultasi-rkab.jpg",
  "imageV": "mvv7fo75",
  "tags": [
   "minerba",
   "ESDM",
   "RKAB",
   "pertambangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475838-perkuat-sektor-tambang-ditjen-minerba-kementerian-esdm-gelar-minerba-convex-2026-ajang-edukasi-hingga-konsultasi-rkab"
 },
 {
  "slug": "igar-laba-bersih-naik-40-jadi-rp94-2-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "IGAR: Laba Bersih [Naik] 40% Jadi Rp94,2 Miliar di Kuartal III",
  "deck": "Produsen kemasan plastik IGAR membukukan laba bersih Rp94,2 miliar untuk sembilan bulan 2026, naik 40 persen, sementara total kewajiban melonjak 41 persen karena utang dagang membesar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IGAR",
   "laporan keuangan",
   "kewajiban",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030232058-65233-0/FinancialStatement-2026-III-IGAR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-luncurkan-livin-food-untuk-umkm-kuliner",
  "category": "UMKM",
  "title": "Bank Mandiri Luncurkan Livin' Food untuk [UMKM] Kuliner",
  "deck": "Lewat fitur Livin' Food di aplikasi Livin' by Mandiri, Bank Mandiri membuka akses pasar hingga puluhan juta pengguna bagi pelaku UMKM kuliner untuk memperluas penjualan secara digital.",
  "date": "30 Oktober 2026",
  "image": "assets/img/bank-mandiri-luncurkan-livin-food-untuk-umkm-kuliner.jpg",
  "imageV": "mvvutsig",
  "tags": [
   "UMKM kuliner",
   "Livin Food",
   "Bank Mandiri",
   "ekonomi digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475837-dorong-pertumbuhan-umkm-dan-ekonomi-kerakyatan-bank-mandiri-hadirkan-livin-food"
 },
 {
  "slug": "umkm-kuliner-bisa-jangkau-42-6-juta-pengguna-lewat-livin-food",
  "category": "UMKM",
  "title": "UMKM Kuliner Bisa Jangkau [42,6 Juta] Pengguna Lewat Livin' Food",
  "deck": "Bank Mandiri membuka akses Livin' Food bagi UMKM kuliner untuk menjangkau 42,6 juta pengguna Livin' by Mandiri, memperluas pemasaran di luar lokasi usaha.",
  "date": "30 Oktober 2026",
  "image": "assets/img/umkm-kuliner-bisa-jangkau-42-6-juta-pengguna-lewat-livin-food.jpg",
  "imageV": "mvv7fono",
  "tags": [
   "UMKM kuliner",
   "Livin' Food",
   "Bank Mandiri",
   "ekonomi digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475837-umkm-kuliner-punya-peluang-jangkau-42-juta-konsumen-ini-strategi-bank-mandiri-lewat-livin-food"
 },
 {
  "slug": "real-laba-tipis-naik-kas-menipis-usai-bayar-sanksi-ojk",
  "category": "Aksi Korporasi",
  "title": "[REAL] Laba Tipis Naik, Kas Menipis Usai Bayar Sanksi OJK",
  "deck": "Laporan kuartal III 2026 Repower Asia Indonesia menunjukkan laba naik tipis, tapi kas tergerus pembayaran sanksi OJK dan dividen dipotong drastis.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REAL",
   "laporan keuangan",
   "properti",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030231126-65587-0/FinancialStatement-2026-III-REAL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ntbk-rugi-rp4-83-miliar-pendapatan-anjlok-51-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "NTBK rugi Rp4,83 miliar, pendapatan [anjlok] 51% di kuartal III",
  "deck": "Pendapatan sembilan bulan NTBK turun hampir separuh dan perusahaan karoseri trailer ini berbalik rugi Rp4,83 miliar, dari untung tahun sebelumnya.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NTBK",
   "laporan keuangan",
   "rugi",
   "karoseri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030231119-65621-0/FinancialStatement-2026-III-NTBK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpdp-percepat-program-peremajaan-sawit-rakyat",
  "category": "Industri",
  "title": "BPDP Percepat Program [Peremajaan] Sawit Rakyat",
  "deck": "BPDP memaparkan capaian program peremajaan sawit rakyat dalam forum IPOS 2026 di Medan, dengan bantuan dana Rp12,48 triliun bagi hampir 197 ribu petani sejak 2016.",
  "date": "30 Oktober 2026",
  "image": "assets/img/bpdp-percepat-program-peremajaan-sawit-rakyat.jpg",
  "imageV": "mvv7fp4q",
  "tags": [
   "BPDP",
   "sawit rakyat",
   "PSR",
   "perkebunan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475836-dorong-produktivitas-petani-bpdp-akselerasi-program-peremajaan-sawit-rakyat"
 },
 {
  "slug": "depo-laba-bersih-naik-16-tapi-laba-usaha-susut-22",
  "category": "Aksi Korporasi",
  "title": "DEPO: Laba Bersih Naik 16% Tapi [Laba Usaha] Susut 22%",
  "deck": "Laporan keuangan interim Kuartal III 2026 DEPO: laba bersih naik ditopang pendapatan lain-lain, sementara laba dari operasi toko menyusut dan pinjaman bank jangka pendek melonjak.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEPO",
   "laporan keuangan",
   "laba bersih",
   "ritel bahan bangunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030230701-64892-0/FinancialStatement-2026-III-DEPO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-aldo-melonjak-8-kali-lipat-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "Laba ALDO [Melonjak] 8 Kali Lipat di Kuartal III 2026",
  "deck": "Laba bersih Alkindo Naratama naik dari Rp21,4 miliar menjadi Rp174,3 miliar dalam sembilan bulan 2026, sementara penjualan tumbuh 21 persen.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALDO",
   "Alkindo Naratama",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030230010-65595-0/FinancialStatement-2026-III-ALDO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hajj-laba-anjlok-75-piutang-melonjak-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "HAJJ: [Laba] Anjlok 75%, Piutang Melonjak di Kuartal III 2026",
  "deck": "Laporan kuartal III 2026 HAJJ menunjukkan laba bersih turun 75 persen secara tahunan, sementara piutang dan utang usaha melonjak drastis dalam tiga bulan terakhir.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAJJ",
   "laporan keuangan",
   "laba bersih",
   "piutang usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030225059-65052-0/FinancialStatement-2026-III-HAJJ.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agro-laba-bank-raya-turun-separuh-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "AGRO: Laba Bank Raya [Turun Separuh] di Kuartal III 2026",
  "deck": "Laba Bank Raya Indonesia turun 50 persen menjadi Rp21,01 miliar pada sembilan bulan 2026, tertekan kenaikan pencadangan kredit dan penarikan deposito nasabah.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRO",
   "Bank Raya Indonesia",
   "laporan keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2d8f5870f0_52323d4eec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-bersih-phapros-peha-melonjak-4-kali-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "[Laba Bersih] Phapros (PEHA) Melonjak 4 Kali di Kuartal III 2026",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan laba bersih Phapros melonjak dari Rp7,68 miliar menjadi Rp31,60 miliar, ditopang kenaikan pendapatan dan penurunan utang bank.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEHA",
   "Phapros",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030223608-64959-0/FinancialStatement-2026-III-PEHA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kias-tarik-cerukan-rp40-miliar-rugi-kuartal-iii-menyempit",
  "category": "Aksi Korporasi",
  "title": "KIAS tarik [cerukan] Rp40 miliar, rugi kuartal III menyempit",
  "deck": "Keramika Indonesia Assosiasi (KIAS) menarik cerukan bank Rp40 miliar untuk modal kerja, membuat total liabilitas naik 29 persen, sementara rugi sembilan bulan menyempit menjadi Rp14,1 miliar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIAS",
   "laporan keuangan",
   "cerukan bank",
   "keramik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030222635-65342-0/FinancialStatement-2026-III-KIAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdpc-catat-laba-melonjak-49-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "SDPC catat laba [melonjak] 49%, arus kas operasi negatif",
  "deck": "Laporan keuangan kuartal III 2026 menunjukkan laba bersih Millennium Pharmacon naik 49 persen dari tahun lalu, namun arus kas dari kegiatan usaha justru berbalik negatif.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDPC",
   "laporan keuangan",
   "distribusi farmasi",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030220233-64417-0/FinancialStatement-2026-III-SDPC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sage-berbalik-untung-rp461-juta-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "SAGE [Berbalik] Untung Rp461 Juta di Kuartal III 2026",
  "deck": "Pendapatan SAGE melonjak empat kali lipat dalam sembilan bulan 2026, membawa perusahaan properti ini berbalik dari rugi Rp3,16 miliar jadi laba Rp461 juta.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAGE",
   "properti",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030215539-65563-0/FinancialStatement-2026-III-SAGE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smru-catat-ekuitas-negatif-rp44-8-miliar-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "SMRU Catat Ekuitas [Negatif] Rp44,8 Miliar per September 2026",
  "deck": "Ekuitas SMR Utama Tbk berbalik negatif Rp44,83 miliar akhir September 2026, setelah pendapatan sembilan bulan ambruk 98,6 persen dan rugi bersih melebar jadi Rp45,72 miliar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRU",
   "SMR Utama",
   "laporan keuangan",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030215513-65508-0/FinancialStatement-2026-III-SMRU.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ggrp-catat-laba-us-1-6-juta-utang-lancar-melonjak-262",
  "category": "Aksi Korporasi",
  "title": "GGRP Catat Laba US$1,6 Juta, [Utang] Lancar Melonjak 262%",
  "deck": "Laporan keuangan interim Kuartal III 2026 GGRP mencatat laba bersih US$1,6 juta setelah rugi besar tahun lalu, namun diikuti kenaikan utang jangka pendek dan arus kas operasi yang negatif.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GGRP",
   "laporan keuangan",
   "utang jangka pendek",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030215101-65494-0/FinancialStatement-2026-III-GGRP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-alami-gagal-bayar-peringkat-turun-ke-selective-default",
  "category": "Aksi Korporasi",
  "title": "PTPP Alami [Gagal Bayar], Peringkat Turun ke Selective Default",
  "deck": "PEFINDO menurunkan peringkat PTPP jadi idSD dan obligasi/sukuknya jadi idD akibat gagal bayar, memicu restrukturisasi dan rapat pemegang surat utang pada 10-11 November 2026.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "PEFINDO",
   "obligasi",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e0bf190988_7783af519f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gpso-ekuitas-naik-63-usai-suntikan-modal-rugi-menyusut",
  "category": "Aksi Korporasi",
  "title": "GPSO: [Ekuitas] Naik 63% Usai Suntikan Modal, Rugi Menyusut",
  "deck": "Kuartal III 2026 GPSO: aset dan ekuitas naik lebih dari 60 persen setelah suntikan modal, tapi margin menipis dan kas operasi negatif.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GPSO",
   "laporan keuangan",
   "penambahan modal",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030214552-65330-0/FinancialStatement-2026-III-GPSO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peve-utang-bank-naik-36-usai-tambah-fasilitas-bank-permata",
  "category": "Aksi Korporasi",
  "title": "PEVE: Utang Bank Naik 36% Usai Tambah Fasilitas [Bank Permata]",
  "deck": "Total aset Penta Valent naik 9,4 persen menjadi Rp1,52 triliun per akhir September 2026, utang bank jangka pendek naik 36,5 persen usai menambah fasilitas dari Bank Permata.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEVE",
   "Penta Valent",
   "laporan keuangan",
   "Bank Permata"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030213757-65144-0/FinancialStatement-2026-III-PEVE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-tarik-pinjaman-rp45-miliar-dari-bank-ina-untuk-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "VISI Tarik Pinjaman [Rp45 Miliar] dari Bank Ina untuk Modal Kerja",
  "deck": "PT Satu Visi Putra menandatangani fasilitas demand loan Rp45 miliar dengan Bank Ina Perdana untuk modal kerja, wajib lunas 28 Januari 2027.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "kredit perbankan",
   "modal kerja",
   "Bank Ina Perdana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6aae1f0e5e_e27aed5475.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irra-kas-anjlok-76-utang-bank-melonjak-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "IRRA: Kas Anjlok 76%, [Utang Bank] Melonjak Kuartal III 2026",
  "deck": "Laba bersih Itama Ranoraya naik tipis jadi Rp47,33 miliar, tapi arus kas operasi makin negatif dan utang bank jangka panjang melonjak lebih dari dua kali lipat.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRRA",
   "laporan keuangan",
   "arus kas",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030212552-64913-0/FinancialStatement-2026-III-IRRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bren-catat-laba-bersih-us-161-juta-di-9m-2026-naik-21-8",
  "category": "Aksi Korporasi",
  "title": "BREN Catat [Laba Bersih] US$161 Juta di 9M 2026, Naik 21,8%",
  "deck": "Barito Renewables membukukan pendapatan US$501 juta dan laba bersih US$161 juta untuk sembilan bulan 2026, sembari menurunkan rasio utangnya.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BREN",
   "kinerja keuangan",
   "energi terbarukan",
   "panas bumi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6bd38b487a_dea2c162e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtsm-minta-bei-cabut-suspensi-saat-benahi-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "MTSM Minta BEI Cabut [Suspensi] Saat Benahi Laporan Keuangan",
  "deck": "MTSM mengoreksi jawabannya ke Bursa dan meminta pencabutan suspensi saham sambil membenahi laporan keuangan serta memenuhi syarat free float.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTSM",
   "suspensi saham",
   "free float",
   "Metro Realty"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b4b65d2cc5_c57a28f50e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wows-cetak-rugi-rp6-87-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "WOWS Cetak [Rugi] Rp6,87 Miliar di Kuartal III 2026",
  "deck": "Ginting Jaya Energi (WOWS) berbalik dari laba jadi rugi bersih Rp6,87 miliar pada kuartal III 2026, dengan kas menyusut hampir separuh dan utang pajak melonjak.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WOWS",
   "Ginting Jaya Energi",
   "laporan keuangan kuartal III",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030210343-65566-0/FinancialStatement-2026-III-WOWS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roti-laba-bersih-anjlok-59-persen-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "ROTI: Laba Bersih [Anjlok] 59 Persen di Kuartal III 2026",
  "deck": "Laba bersih Sari Roti turun hampir 60 persen jadi Rp55,27 miliar pada sembilan bulan pertama 2026, meski pendapatan nyaris stagnan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "Sari Roti",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030211238-65046-0/FinancialStatement-2026-III-ROTI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "food-defisiensi-modal-melebar-ke-rp41-6-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "FOOD: Defisiensi Modal [Melebar] ke Rp41,6 Miliar di Kuartal III",
  "deck": "Penjualan FOOD naik 11,5 persen pada sembilan bulan 2026, tapi rugi bersih dan ekuitas negatif perusahaan justru makin melebar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FOOD",
   "Sentra Food Indonesia",
   "defisiensi modal",
   "laporan keuangan kuartal III"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030211637-65050-0/FinancialStatement-2026-III-FOOD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "awan-liabilitas-naik-28-97-kas-susut-ke-rp1-16-miliar",
  "category": "Aksi Korporasi",
  "title": "AWAN: Liabilitas Naik 28,97%, [Kas] Susut ke Rp1,16 Miliar",
  "deck": "Aset AWAN naik 7,5 persen dalam sembilan bulan 2026, tetapi liabilitas melonjak 28,97 persen karena pinjaman bank dan utang usaha bertambah, sementara kas perusahaan justru menyusut.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AWAN",
   "Era Digital Media",
   "laporan keuangan interim",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030205905-65428-0/FinancialStatement-2026-III-AWAN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpkr-laba-bersih-melonjak-tiga-kali-lipat-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "LPKR: Laba Bersih [Melonjak] Tiga Kali Lipat di Kuartal III",
  "deck": "Laba bersih LPKR naik hampir tiga kali lipat jadi Rp1,24 triliun di sembilan bulan 2026, didorong pendapatan lain-lain, bukan penjualan inti yang justru turun 17 persen.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPKR",
   "Lippo Karawaci",
   "laporan keuangan",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030205424-64674-0/FinancialStatement-2026-III-LPKR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aali-jawab-bei-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "AALI Jawab BEI: Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "AALI menjawab surat BEI soal volatilitas transaksi sahamnya, menegaskan tak ada informasi material baru dan pemegang saham utama tak berencana mengubah kepemilikan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "Astra Agro Lestari",
   "Bursa Efek Indonesia",
   "Volatilitas Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3ca2d757ee_e41ae20478.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pngo-laba-9-bulan-naik-28-utang-turun-30-persen",
  "category": "Aksi Korporasi",
  "title": "PNGO: Laba 9 Bulan Naik 28%, [Utang] Turun 30 Persen",
  "deck": "Laba bersih PT AEP Pinago Plantations Tbk naik 28 persen dalam sembilan bulan 2026, didukung pelunasan utang bank yang menekan beban bunga.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNGO",
   "laporan keuangan",
   "perkebunan",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030205018-64785-0/FinancialStatement-2026-III-PNGO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coco-raih-rp1-28-triliun-dari-rights-issue-ekuitas-melesat",
  "category": "Aksi Korporasi",
  "title": "COCO Raih Rp1,28 Triliun dari [Rights Issue], Ekuitas Melesat",
  "deck": "COCO menambah modal Rp1,28 triliun lewat rights issue, membuat ekuitas melonjak lebih dari 10 kali lipat dan rugi bersih menyempit pada kuartal III 2026.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COCO",
   "rights issue",
   "ekuitas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030204455-65539-0/FinancialStatement-2026-III-COCO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ssms-cetak-laba-rp1-75-triliun-utang-bank-melonjak-tajam",
  "category": "Aksi Korporasi",
  "title": "SSMS Cetak [Laba] Rp1,75 Triliun, Utang Bank Melonjak Tajam",
  "deck": "Laba bersih sembilan bulan SSMS naik 71 persen menjadi Rp1,75 triliun, tapi utang bank jangka pendek melonjak hampir 3,5 kali menjadi Rp5,92 triliun.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSMS",
   "laporan keuangan",
   "kelapa sawit",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030203705-65453-0/FinancialStatement-2026-III-SSMS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nisp-laba-bersih-naik-7-2-ke-rp4-22-triliun-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "NISP: Laba Bersih Naik [7,2%] ke Rp4,22 Triliun di Kuartal III",
  "deck": "Laba bersih Bank OCBC NISP naik menjadi Rp4,22 triliun pada sembilan bulan pertama 2026, ditopang pertumbuhan kredit dan pendapatan bunga.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NISP",
   "OCBC NISP",
   "laporan keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030202510-65346-0/FinancialStatement-2026-III-NISP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "simp-cetak-laba-rp2-05-triliun-di-9m2026-naik-45",
  "category": "Aksi Korporasi",
  "title": "SIMP Cetak Laba [Rp2,05 Triliun] di 9M2026, Naik 45%",
  "deck": "Laba bersih Salim Ivomas Pratama naik 45 persen secara tahunan ditopang kenaikan harga jual sawit, sementara utang berbunga turun dan ekuitas bertambah.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIMP",
   "kinerja keuangan",
   "CPO",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dd3443965e_572ff18ffe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indf-core-profit-9m26-naik-11-jadi-rp9-37-triliun",
  "category": "Aksi Korporasi",
  "title": "INDF: [Core Profit] 9M26 Naik 11% jadi Rp9,37 Triliun",
  "deck": "Penjualan neto Indofood tumbuh 12% jadi Rp101,49 triliun pada sembilan bulan pertama 2026, laba usaha naik 15% meski laba bersih tertahan rugi kurs.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDF",
   "Indofood",
   "kinerja keuangan",
   "laporan kuartalan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f3caf9f173_1c248574ec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jihd-liabilitas-naik-26-usai-tarik-pinjaman-rp475-m",
  "category": "Aksi Korporasi",
  "title": "JIHD: Liabilitas Naik 26% Usai Tarik [Pinjaman] Rp475 M",
  "deck": "Total liabilitas JIHD naik Rp506,4 miliar menjadi Rp2,43 triliun per akhir September, dipicu pinjaman bank baru Rp475 miliar untuk anak usaha Danayasa Arthatama.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JIHD",
   "liabilitas",
   "pinjaman bank",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030202900-65204-0/FinancialStatement-2026-III-JIHD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-tunda-pembayaran-bunga-obligasi-dan-sukuk-mudharabah",
  "category": "Aksi Korporasi",
  "title": "WIKA [Tunda] Pembayaran Bunga Obligasi dan Sukuk Mudharabah",
  "deck": "Setelah RUPO dan RUPSU gagal kuorum pada akhir Oktober 2026, WIKA menunda pembayaran bunga obligasi dan bagi hasil sukuk mudharabah di seluruh seri yang jatuh tempo November-Desember 2026.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "sukuk mudharabah",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dffb763c67_59979da3e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gagal-lagi-sukuk-tahap-ii-rp500-m-kandas",
  "category": "Aksi Korporasi",
  "title": "WIKA Gagal Lagi, Sukuk Tahap II Rp500 M [Kandas]",
  "deck": "Pemegang sukuk menolak empat usulan WIKA mengubah syarat Sukuk Mudharabah Tahap II Rp500 miliar, termasuk penundaan bagi hasil dan perubahan jatuh tempo.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "restrukturisasi utang",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f329068f0b_22907d4915.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-catat-laba-tapi-liabilitas-melonjak-60-persen",
  "category": "Aksi Korporasi",
  "title": "MEDS Catat Laba, tapi Liabilitas [Melonjak] 60 Persen",
  "deck": "Pendapatan Hetzer Medical (MEDS) naik lebih dari empat kali lipat pada kuartal III 2026 dan berbalik untung, sementara utang ke pihak berelasi melonjak untuk membiayai pembelian mesin CNC.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "laporan keuangan",
   "Hetzer Medical Indonesia",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030202208-64822-0/FinancialStatement-2026-III-MEDS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "imas-alihkan-100-saham-wit-dalam-restrukturisasi-internal",
  "category": "Aksi Korporasi",
  "title": "IMAS Alihkan 100% Saham WIT dalam [Restrukturisasi] Internal",
  "deck": "Indomobil memindahkan seluruh saham anak usaha Wahana Indo Trada ke dua entitas lain dalam grup yang sama-sama dikuasainya, tanpa mengubah pengendalian.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMAS",
   "Indomobil",
   "Wahana Indo Trada",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b5328c571e_9ad2e645dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbma-rencana-tambah-saham-baru-dilusi-hingga-10",
  "category": "Aksi Korporasi",
  "title": "MBMA Rencana Tambah Saham Baru, [Dilusi] hingga 10%",
  "deck": "MBMA berencana menerbitkan saham baru tanpa hak memesan efek terlebih dahulu sebanyak-banyaknya 10,8 miliar lembar atau 10 persen dari modal disetor, menunggu persetujuan RUPS.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "Private Placement",
   "Dilusi Saham",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a07390d2be_6d051b2378.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lsip-laba-9m26-melonjak-40-jadi-rp1-75-triliun",
  "category": "Aksi Korporasi",
  "title": "LSIP: [Laba] 9M26 Melonjak 40% Jadi Rp1,75 Triliun",
  "deck": "PP London Sumatra mencatat laba 9 bulan 2026 naik 40 persen ditopang produksi dan harga jual sawit yang sama-sama membaik.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LSIP",
   "kinerja keuangan",
   "CPO",
   "perkebunan sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/73afc3e8f5_f43028ff2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pendapatan-vktr-tumbuh-49-jadi-rp1-06-triliun-di-9m26",
  "category": "Bisnis",
  "title": "Pendapatan VKTR [Tumbuh] 49% jadi Rp1,06 Triliun di 9M26",
  "deck": "Pendapatan VKTR naik 49% jadi Rp1,06 triliun pada 9M26, didorong penjualan kendaraan listrik yang melonjak 91% meski manufaktur suku cadang otomotif masih jadi penyumbang utama.",
  "date": "30 Oktober 2026",
  "image": "assets/img/pendapatan-vktr-tumbuh-49-jadi-rp1-06-triliun-di-9m26.jpg",
  "imageV": "mvv21opn",
  "tags": [
   "VKTR",
   "kendaraan listrik",
   "Bakrie",
   "emiten otomotif"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475817-pendapatan-vktr-tumbuh-49-pada-9m26-kontribusi-kendaraan-listrik-terus-meningkat"
 },
 {
  "slug": "mmix-liabilitas-melonjak-ke-rp246-5-miliar-per-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "MMIX: [Liabilitas] Melonjak ke Rp246,5 Miliar per Kuartal III",
  "deck": "MMIX melaporkan keuangan interim kuartal III 2026, liabilitas melonjak lima kali lipat dalam sembilan bulan sementara ekuitas nyaris stagnan dan laba per saham turun.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "laporan keuangan",
   "liabilitas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030200555-65043-0/FinancialStatement-2026-III-MMIX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "icbp-penjualan-9m26-naik-15-marjin-tergerus-biaya",
  "category": "Aksi Korporasi",
  "title": "ICBP: Penjualan 9M26 Naik 15%, [Marjin] Tergerus Biaya",
  "deck": "Penjualan sembilan bulan ICBP naik 15% menjadi Rp64,45 triliun, tapi marjin laba usaha turun ke 21,2% akibat kenaikan biaya bahan baku dan logistik.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ICBP",
   "kinerja keuangan",
   "consumer goods",
   "Indofood CBP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/387eaea864_387f2a6dfc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-pnse-melonjak-dari-penjualan-tanah-okupansi-turun",
  "category": "Aksi Korporasi",
  "title": "Laba PNSE [Melonjak] Dari Penjualan Tanah, Okupansi Turun",
  "deck": "Laba bersih PNSE sembilan bulan 2026 melonjak ke Rp70,2 miliar karena penjualan tanah, namun laba usaha hotel turun 44 persen dan satu hotel di Flores tutup akibat gempa.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNSE",
   "laporan keuangan",
   "perhotelan",
   "Pudjiadi & Sons"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030195922-65533-0/FinancialStatement-2026-III-PNSE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smra-laba-bersih-turun-26-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "SMRA: Laba Bersih [Turun] 26% di Kuartal III 2026",
  "deck": "Pendapatan Summarecon turun tipis dalam sembilan bulan 2026, tapi laba bersih untuk pemegang saham induk anjlok 26,3 persen akibat beban bunga yang melonjak seiring utang jangka panjang membesar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRA",
   "Summarecon Agung",
   "laporan keuangan",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030195512-65391-0/FinancialStatement-2026-III-SMRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pdes-bukukan-pendapatan-rp412-miliar-laba-pemilik-turun-4",
  "category": "Aksi Korporasi",
  "title": "PDES Bukukan Pendapatan Rp412 Miliar, [Laba] Pemilik Turun 4%",
  "deck": "Pendapatan PDES naik 7,5 persen di kuartal III 2026, tapi laba bersih untuk pemegang saham induk turun 4 persen karena beban operasional naik lebih cepat.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PDES",
   "Laporan Keuangan",
   "Pariwisata",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030195227-65364-0/FinancialStatement-2026-III-PDES.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-bagikan-100-ribu-benih-lele-ke-pembudidaya-bantul",
  "category": "UMKM",
  "title": "KKP [Bagikan] 100 Ribu Benih Lele ke Pembudidaya Bantul",
  "deck": "Kementerian Kelautan dan Perikanan menyalurkan 100.000 benih lele ke lima kelompok pembudidaya di Bantul, DIY, bertepatan dengan peringatan HUT ke-27 lembaga itu.",
  "date": "30 Oktober 2026",
  "image": "assets/img/kkp-bagikan-100-ribu-benih-lele-ke-pembudidaya-bantul.jpg",
  "imageV": "mvuysv67",
  "tags": [
   "KKP",
   "Benih Lele",
   "Budidaya Perikanan",
   "Bantul"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/hut-ke-27-kkp-salurkan-100-ribu-benih-lele-dukung-budidaya-perikanan-di-bantul-JN4o.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "kkp-siapkan-76-lokasi-budi-daya-ikan-tematik-di-diy",
  "category": "UMKM",
  "title": "KKP Siapkan [76] Lokasi Budi Daya Ikan Tematik di DIY",
  "deck": "KKP menyiapkan 76 lokasi budi daya ikan tematik di empat kabupaten DIY, bagian dari target nasional membangun 40.000 lokasi serupa hingga 2029.",
  "date": "30 Oktober 2026",
  "image": "assets/img/kkp-siapkan-76-lokasi-budi-daya-ikan-tematik-di-diy.jpg",
  "imageV": "mvuyswqv",
  "tags": [
   "KKP",
   "Yogyakarta",
   "budi daya ikan",
   "ketahanan pangan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-siapkan-76-lokasi-budi-daya-ikan-tematik-di-diy-untuk-usaha-masyarakat-ketahanan-pangan-MJk3.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "iptv-cetak-rugi-rp166-miliar-kas-menyusut-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "IPTV Cetak [Rugi] Rp166 Miliar, Kas Menyusut di Kuartal III 2026",
  "deck": "Laporan keuangan interim MNC Vision Networks (IPTV) per akhir September 2026 mencatat rugi bersih Rp166,2 miliar, kas tergerus ke Rp8,48 miliar, dan ekuitas turun jadi Rp5,6 triliun.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPTV",
   "MNC Vision Networks",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030181558-65341-0/FinancialStatement-2026-III-IPTV.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtla-laba-bersih-turun-22-jadi-rp182-5-miliar-di-9m2026",
  "category": "Aksi Korporasi",
  "title": "MTLA: Laba Bersih [Turun] 22% Jadi Rp182,5 Miliar di 9M2026",
  "deck": "Pendapatan Metropolitan Land naik tipis jadi Rp1,18 triliun dalam sembilan bulan 2026, tapi laba bersih turun 22 persen dan kas perusahaan menyusut Rp175,69 miliar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTLA",
   "properti",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030182344-64927-0/FinancialStatement-2026-III-MTLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msky-pendapatan-anjlok-44-8-kas-menipis-ke-rp2-1-miliar",
  "category": "Aksi Korporasi",
  "title": "MSKY: Pendapatan [Anjlok] 44,8%, Kas Menipis ke Rp2,1 Miliar",
  "deck": "Pendapatan MNC Sky Vision turun 44,8 persen pada sembilan bulan pertama 2026, sementara kas perusahaan menyusut tajam menjadi hanya Rp2,1 miliar meski rugi bersihnya justru mengecil.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSKY",
   "MNC Sky Vision",
   "laporan keuangan",
   "TV berbayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030182315-64973-0/FinancialStatement-2026-III-MSKY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coin-rugi-rp59-1-miliar-pendapatan-susut-nyaris-separuh",
  "category": "Aksi Korporasi",
  "title": "COIN Rugi Rp59,1 Miliar, [Pendapatan] Susut Nyaris Separuh",
  "deck": "Pendapatan COIN turun hampir separuh jadi Rp105,2 miliar dalam sembilan bulan 2026, membuat laba operasional berbalik rugi Rp73,6 miliar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COIN",
   "laporan keuangan interim",
   "aset kripto",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030181603-65582-0/FinancialStatement-2026-III-COIN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "petani-hutan-bojonegoro-olah-limbah-jadi-ekonomi-baru",
  "category": "UMKM",
  "title": "Petani Hutan Bojonegoro Olah Limbah Jadi [Ekonomi] Baru",
  "deck": "Petani hutan di Desa Bandungrejo, Bojonegoro, mengolah sisa jagung, jerami, dan kotoran ternak jadi pakan domba serta kompos lewat koperasi, didukung program pemberdayaan Pertamina EP Cepu.",
  "date": "30 Oktober 2026",
  "image": "assets/img/petani-hutan-bojonegoro-olah-limbah-jadi-ekonomi-baru.jpg",
  "imageV": "mvuysx92",
  "tags": [
   "ekonomi sirkular",
   "Bojonegoro",
   "petani hutan",
   "koperasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475799-dari-kebiasaan-membakar-ke-ekonomi-sirkular-kisah-petani-hutan-di-sekitar-lapangan-gas-jtb"
 },
 {
  "slug": "transaksi-umkm-bisa-ekspor-tembus-us-360-juta-per-september",
  "category": "UMKM",
  "title": "Transaksi UMKM Bisa Ekspor [Tembus] US$360 Juta per September",
  "deck": "Mendag Budi Santoso melaporkan nilai transaksi program UMKM Bisa Ekspor naik tajam dibanding capaian sepanjang 2024, lewat jaringan atase dan ITPC di 33 negara.",
  "date": "30 Oktober 2026",
  "image": "assets/img/transaksi-umkm-bisa-ekspor-tembus-us-360-juta-per-september.jpg",
  "imageV": "mvute6hf",
  "tags": [
   "UMKM",
   "ekspor",
   "Kemendag",
   "Kadin"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475791-mendag-transaksi-program-umkm-bisa-ekspor-tembus-360-juta-dolar-as-per-september-2026"
 },
 {
  "slug": "menperin-industri-ri-tumbuh-5-32-persen-bukan-deindustrialisasi",
  "category": "Industri",
  "title": "Menperin: Industri RI Tumbuh [5,32] Persen, Bukan Deindustrialisasi",
  "deck": "Menteri Perindustrian Sarmuji membantah narasi deindustrialisasi, menyebut sektor industri tumbuh melebihi ekonomi nasional sejak akhir 2025.",
  "date": "30 Oktober 2026",
  "image": "assets/img/menperin-industri-ri-tumbuh-5-32-persen-bukan-deindustrialisasi.jpg",
  "imageV": "mvute6vc",
  "tags": [
   "menteri perindustrian",
   "sarmuji",
   "kadin",
   "ekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475790-menperin-sarmuji-bukan-deindustrialisasi-sektor-industri-indonesia-justru-tumbuh-532-persen-di-atas-ekonomi-nasional"
 },
 {
  "slug": "amor-catat-laba-naik-17-di-fy2025-26-dividen-tumbuh-10",
  "category": "Aksi Korporasi",
  "title": "AMOR Catat [Laba] Naik 17% di FY2025/26, Dividen Tumbuh 10%",
  "deck": "Ashmore Asset Management Indonesia (AMOR) merilis materi public expose tahunan: AuM naik 35% jadi Rp32,4 triliun, laba bersih tumbuh 17%, dan dividen Rp79 miliar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "Ashmore Asset Management Indonesia",
   "Public Expose",
   "Reksa Dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/82c50b84c1_f8a2b3c33a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tbig-rencanakan-buyback-saham-senilai-rp106-miliar",
  "category": "Aksi Korporasi",
  "title": "TBIG Rencanakan [Buyback] Saham Senilai Rp106 Miliar",
  "deck": "Tower Bersama Infrastructure akan membeli kembali maksimal 52,8 juta saham atau 0,23% modal disetor dengan dana hingga Rp106 miliar, mengacu aturan OJK soal pasar berfluktuasi signifikan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TBIG",
   "buyback saham",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/abee16b9bb_f12a2e6e83.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gzco-laba-bersih-melonjak-94-jadi-rp80-1-miliar-di-9m-2026",
  "category": "Aksi Korporasi",
  "title": "GZCO: Laba Bersih [Melonjak] 94% Jadi Rp80,1 Miliar di 9M 2026",
  "deck": "Laba bersih Gozco Plantations naik dari Rp41,4 miliar menjadi Rp80,1 miliar pada sembilan bulan pertama 2026, sementara penjualan justru sedikit turun.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GZCO",
   "laporan keuangan",
   "laba bersih",
   "perkebunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030160304-65073-0/FinancialStatement-2026-III-GZCO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-cetak-laba-rp3-93-m-di-kuartal-iii-utang-bank-naik-tajam",
  "category": "Aksi Korporasi",
  "title": "DEWI Cetak [Laba] Rp3,93 M di Kuartal III, Utang Bank Naik Tajam",
  "deck": "Laporan keuangan kuartal III 2026 DEWI menunjukkan penjualan dan laba bersih tumbuh sekitar 20 persen, tetapi utang bank jangka pendek melonjak lima kali lipat dan kas menyusut hampir 40 persen.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "laporan keuangan",
   "laba bersih",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030155228-65589-0/FinancialStatement-2026-III-DEWI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "klbf-laba-9-bulan-naik-jadi-rp2-84-triliun",
  "category": "Aksi Korporasi",
  "title": "KLBF: [Laba] 9 Bulan Naik Jadi Rp2,84 Triliun",
  "deck": "Penjualan Kalbe Farma naik ke Rp28,97 triliun dan laba bersih ke Rp2,74 triliun dalam sembilan bulan 2026, arus kas operasi ikut menguat.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "laporan keuangan",
   "farmasi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030160050-65581-0/FinancialStatement-2026-III-KLBF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wmuu-rugi-berkurang-jadi-rp17-08-miliar-usai-restrukturisasi-pkpu",
  "category": "Aksi Korporasi",
  "title": "WMUU Rugi Berkurang Jadi Rp17,08 Miliar usai Restrukturisasi [PKPU]",
  "deck": "Liabilitas WMUU turun 20,24 persen jadi Rp1,24 triliun lewat restrukturisasi utang PKPU, sementara rugi bersih sembilan bulan menyusut ke Rp17,08 miliar dari Rp69,57 miliar sebelumnya.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WMUU",
   "PKPU",
   "restrukturisasi utang",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030160025-65268-0/FinancialStatement-2026-III-WMUU.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yelo-catat-rugi-rp643-juta-di-kuartal-iii-pendapatan-turun-41",
  "category": "Aksi Korporasi",
  "title": "YELO Catat [Rugi] Rp643 Juta di Kuartal III, Pendapatan Turun 41%",
  "deck": "Laporan keuangan interim sembilan bulan 2026 menunjukkan pendapatan YELO turun 41 persen jadi Rp31,7 miliar, sementara rugi bersih melebar tiga kali lipat menjadi Rp643,2 juta.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "laporan keuangan",
   "rugi bersih",
   "pendapatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030155445-64801-0/FinancialStatement-2026-III-YELO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "data-catat-laba-bersih-naik-42-ekspansi-didanai-utang",
  "category": "Aksi Korporasi",
  "title": "DATA Catat Laba Bersih Naik 42%, Ekspansi Didanai [Utang]",
  "deck": "Laba bersih PT Remala Abadi Tbk (DATA) naik 41,7 persen pada sembilan bulan pertama 2026, namun ekspansi jaringan fiber optik banyak dibiayai utang bank baru.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DATA",
   "Remala Abadi",
   "laporan keuangan",
   "telekomunikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030160020-65506-0/FinancialStatement-2026-III-DATA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kija-laba-turun-78-obligasi-rp3-1-triliun-dilunasi",
  "category": "Aksi Korporasi",
  "title": "KIJA: Laba Turun 78%, [Obligasi] Rp3,1 Triliun Dilunasi",
  "deck": "Laba bersih KIJA kuartal III 2026 turun 78 persen jadi Rp60,45 miliar meski pendapatan naik, obligasi Rp3,1 triliun dilunasi dan diganti pinjaman bank.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIJA",
   "laporan keuangan",
   "properti",
   "kawasan industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030155735-64852-0/FinancialStatement-2026-III-KIJA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kios-catat-kas-menipis-jadi-rp81-juta-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "KIOS Catat Kas [Menipis] jadi Rp81 Juta di Kuartal III 2026",
  "deck": "Pendapatan Kioson Komersial susut lebih dari separuh dalam sembilan bulan 2026, sementara kas perusahaan tergerus hingga tersisa Rp81,1 juta.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIOS",
   "Kioson Komersial",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030154219-64736-0/FinancialStatement-2026-III-KIOS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penyaluran-kredit-program-tembus-rp294-6-triliun",
  "category": "UMKM",
  "title": "Penyaluran Kredit Program Tembus [Rp294,6] Triliun",
  "deck": "Hingga akhir Oktober 2026, penyaluran kredit program pemerintah mencapai Rp294,6 triliun kepada 4,24 juta debitur, melampaui total penyaluran sepanjang 2025 dengan sisa dua bulan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/batik-umkm.jpg",
  "tags": [
   "KUR",
   "Kredit Program",
   "UMKM",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7191/kredit-program-tembus-rp2946-triliun-menko-airlangga-keberhasilan-terlihat-dari-usaha-yang-tumbuh-dan-keluarga-yang-sejahtera",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 }
];
