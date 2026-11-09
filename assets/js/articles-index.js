// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "srtg-jadwalkan-rupslb-virtual-pada-16-desember-2026",
  "category": "Aksi Korporasi",
  "title": "SRTG Jadwalkan [RUPSLB] Virtual pada 16 Desember 2026",
  "deck": "Saratoga Investama Sedaya akan menggelar RUPSLB secara virtual lewat eASY.KSEI pada 16 Desember 2026, dengan batas pencatatan pemegang saham 23 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "RUPSLB",
   "Saratoga Investama Sedaya",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3a6964be8e_317ebc2d6f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcic-komisaris-independen-mundur-disiapkan-jadi-dirut",
  "category": "Aksi Korporasi",
  "title": "BCIC: Komisaris Independen Mundur, Disiapkan Jadi [Dirut]",
  "deck": "Abdullah Firman Wibowo mundur dari kursi Komisaris Independen Bank JTrust Indonesia untuk disiapkan menjadi Direktur Utama, menyusul pengunduran diri Dirut sebelumnya pekan lalu.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCIC",
   "Bank JTrust Indonesia",
   "pergantian direksi",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/71d3f6d0af_b019015b3f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-rinci-dividen-99-dan-rencana-buyback-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "AMOR Rinci Dividen 99% dan Rencana Buyback di [Public Expose]",
  "deck": "Dalam public expose tahunan 4 November 2026, manajemen AMOR memaparkan alasan kenaikan beban distribusi, dasar hitung dividen payout 99%, dan pertimbangan buyback saham.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "Ashmore Asset Management",
   "Public Expose",
   "Dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/96088336af_ecccab5edc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-jawab-bursa-rights-issue-1-miliar-saham-dilusi-25-97",
  "category": "Aksi Korporasi",
  "title": "PART Jawab Bursa: Rights Issue 1 Miliar Saham, Dilusi [25,97%]",
  "deck": "Cipta Perdana Lancar menjelaskan ke BEI rencana rights issue Rp200 miliar: maksimal 1 miliar saham baru, dilusi hingga 25,97% bagi pemegang saham yang tidak ambil HMETD.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "rights issue",
   "PMHMETD",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5a132515a2_3716b9b132.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-terstruktur-penerbitan-ke-2-berakhir-26-nov",
  "category": "Aksi Korporasi",
  "title": "DR: [Waran] Terstruktur Penerbitan ke-2 Berakhir 26 Nov",
  "deck": "Delapan seri waran terstruktur RHB Sekuritas berbasis saham ASII, BBCA, BBNI, BBRI, BMRI, ICBP, INDF, dan TLKM berhenti diperdagangkan 23 November dan dieksekusi otomatis 26 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/116f24fb30_60e993fd03.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jati-lanjutkan-buyback-tahap-iii-sisa-28-1-juta-saham",
  "category": "Aksi Korporasi",
  "title": "JATI Lanjutkan [Buyback] Tahap III, Sisa 28,1 Juta Saham",
  "deck": "PT Informasi Teknologi Indonesia Tbk membeli kembali hingga 28,1 juta saham lagi senilai maksimal Rp3,38 miliar untuk menutup sisa program buyback 5 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JATI",
   "buyback saham",
   "saham treasuri",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ab8b342ce7_7b2b718adc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-akhiri-waran-terstruktur-seri-ke-28-pada-26-november",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Akhiri [Waran Terstruktur] Seri ke-28 pada 26 November",
  "deck": "RHB Sekuritas mengumumkan jadwal berakhirnya waran terstruktur Penerbitan ke-28 dengan saham acuan BBNI, DSNG, UNTR, dan UNVR, efektif 26 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "RHB Sekuritas",
   "Waran Terstruktur",
   "UNTR"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/506042e8ca_211d1120ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-akhiri-waran-terstruktur-seri-ke-40-pada-26-november",
  "category": "Aksi Korporasi",
  "title": "DR: RHB [Akhiri] Waran Terstruktur Seri ke-40 pada 26 November",
  "deck": "RHB Sekuritas mengakhiri waran terstruktur seri ke-40 beracuan BRMS, CUAN, ENRG, MDKA, dan TPIA pada 26 November 2026, sesuai jadwal baku pelaksanaan otomatis.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "pasar derivatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4a620c9efc_f2c5b21a5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tops-masuk-daftar-kriteria-baru-pkpu-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "TOPS Masuk Daftar Kriteria Baru [PKPU] Pemantauan Khusus",
  "deck": "BEI menambahkan kriteria PKPU dan potensi pailit ke status pemantauan khusus saham TOPS, PT Totalindo Eka Persada Tbk, efektif 10 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOPS",
   "pemantauan khusus",
   "PKPU",
   "pailit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4010e939e3_a8514b375e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abmm-cipta-kridatama-raih-kontrak-tambang-batu-bara-5-tahun",
  "category": "Aksi Korporasi",
  "title": "ABMM: Cipta Kridatama Raih [Kontrak] Tambang Batu Bara 5 Tahun",
  "deck": "Anak usaha ABM Investama, Cipta Kridatama, menandatangani kontrak jasa tambang batu bara dengan dua perusahaan tambang hingga akhir 2031, mencakup volume ratusan juta bcm dan puluhan juta ton batu bara.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABMM",
   "Cipta Kridatama",
   "kontrak tambang",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/eacf9f0c9f_b2af1a6780.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-laba-bersih-melonjak-613-kantongi-kontrak-rp9-3-triliun",
  "category": "Aksi Korporasi",
  "title": "PTRO: Laba Bersih [Melonjak] 613%, Kantongi Kontrak Rp9,3 Triliun",
  "deck": "Materi public expose Petrosea menunjukkan pendapatan 1H2026 naik 60 persen dan laba bersih melonjak ke US$9 juta, didukung kontrak tambang dan EPC baru senilai triliunan rupiah.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "Petrosea",
   "kontrak tambang",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0a05c9ad1f_31f51ac272.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "acst-catat-rugi-bersih-melonjak-155-pada-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "ACST Catat Rugi Bersih [Melonjak] 155% pada Kuartal III 2026",
  "deck": "Materi public expose ACST mengungkap rugi bersih kuartal III 2026 melonjak ke Rp266,8 miliar meski pendapatan turun dan margin kotor justru naik tipis.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACST",
   "Acset Indonusa",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/21f4b2a23d_75b0c9f399.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbre-rights-issue-konversi-utang-rp858-6-miliar-ke-saham",
  "category": "Aksi Korporasi",
  "title": "CBRE [Rights Issue] Konversi Utang Rp858,6 Miliar ke Saham",
  "deck": "CBRE berencana menerbitkan maksimal 48 miliar saham baru lewat HMETD, sebagian untuk mengonversi utang promissory note Rp858,6 miliar kepada empat kreditur.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBRE",
   "rights issue",
   "konversi utang",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ebc1e532ea_a40d335ecc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbre-umumkan-rupslb-16-desember-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "CBRE Umumkan [RUPSLB] 16 Desember, Agenda Menyusul",
  "deck": "CBRE akan menggelar RUPSLB pada 16 Desember 2026 di Jakarta. Pemegang saham per 23 November 2026 berhak hadir, agenda resmi baru terbit lewat pemanggilan 24 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBRE",
   "RUPSLB",
   "pasar modal",
   "Cakra Buana Resources Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f5daceb6d1_30106a9e27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-boss-gagal-kuorum-panggilan-kedua-16-november",
  "category": "Aksi Korporasi",
  "title": "RUPS BOSS Gagal Kuorum, Panggilan [Kedua] 16 November",
  "deck": "RUPST dan RUPSLB BOSS pada 4 November gagal kuorum. Perseroan memanggil rapat kedua pada 16 November 2026 untuk mengesahkan laporan keuangan tiga tahun yang tertunda.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS",
   "kuorum",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a078337837_1901f91fdf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbni-tutup-layanan-bni-mobile-banking-pindah-ke-wondr",
  "category": "Aksi Korporasi",
  "title": "BBNI Tutup Layanan [BNI Mobile Banking], Pindah ke Wondr",
  "deck": "BNI menutup akses BNI Mobile Banking secara bertahap hingga 30 November 2026 dan sepenuhnya pada 21 Desember 2026, mengalihkan nasabah ke aplikasi wondr by BNI.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "wondr by BNI",
   "perbankan digital",
   "BNI Mobile Banking"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ed5c7783bd_137f346595.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plas-buka-suspensi-sesaat-untuk-crossing-buyback-delisting",
  "category": "Aksi Korporasi",
  "title": "PLAS Buka Suspensi Sesaat untuk [Crossing] Buyback Delisting",
  "deck": "Bursa membuka sementara perdagangan PLAS khusus di Pasar Negosiasi pada 9 November 2026 untuk transaksi crossing buyback saham terkait delisting, lalu menyuspensinya lagi setelah transaksi selesai.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLAS",
   "delisting",
   "buyback saham",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0b0f8c438f_6145c08d11.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bafi-siapkan-dana-pelunasan-obligasi-rp100-miliar-29-november",
  "category": "Aksi Korporasi",
  "title": "BAFI Siapkan Dana [Pelunasan] Obligasi Rp100 Miliar 29 November",
  "deck": "BAFI menyiapkan dana Rp100 miliar untuk melunasi pokok dan bunga terakhir obligasi yang jatuh tempo 29 November 2026, dana dikirim ke KSEI 27 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAFI",
   "obligasi",
   "Bussan Auto Finance",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7cb13aa4ed_1ed4753d96.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-panggil-rupslb-bahas-pergantian-komisaris-1-desember",
  "category": "Aksi Korporasi",
  "title": "NSSS Panggil RUPSLB, Bahas [Pergantian] Komisaris 1 Desember",
  "deck": "PT Nusantara Sawit Sejahtera Tbk memanggil RUPSLB 1 Desember 2026 untuk menyetujui perubahan susunan Dewan Komisaris dan penyesuaian kode KBLI dalam anggaran dasar.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "RUPSLB",
   "Dewan Komisaris",
   "Nusantara Sawit Sejahtera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f9a9517b43_d9605c7de3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsde-lunasi-utang-bank-rp1-24-triliun-lebih-awal-dari-dana-obligasi",
  "category": "Aksi Korporasi",
  "title": "BSDE Lunasi Utang Bank Rp1,24 Triliun [Lebih Awal] dari Dana Obligasi",
  "deck": "BSDE mengoreksi laporan realisasi dana obligasi dan sukuk Rp2,73 triliun, yang terpakai untuk infrastruktur BSD City, modal kerja, dan pelunasan dini pinjaman bank BTN serta Bank Permata.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSDE",
   "obligasi korporasi",
   "pelunasan utang bank",
   "BSD City"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d92293b02c_5792d007c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kino-bagikan-dividen-interim-rp52-per-saham",
  "category": "Aksi Korporasi",
  "title": "KINO Bagikan [Dividen] Interim Rp52 per Saham",
  "deck": "Kino Indonesia menetapkan dividen interim Rp52 per saham senilai total Rp71,7 miliar, dengan recording date 19 November dan pembayaran 9 Desember 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KINO",
   "dividen interim",
   "pemegang saham",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c67ae4c0f4_6d50963de9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jawab-bursa-ekuitas-negatif-rp87-6-m-usai-revisi-lk",
  "category": "Aksi Korporasi",
  "title": "BIKE Jawab Bursa, Ekuitas [Negatif] Rp87,6 M usai Revisi LK",
  "deck": "Revisi laporan keuangan interim BIKE membalik ekuitas perusahaan jadi negatif Rp87,6 miliar setelah mengakui utang pinjaman pemegang saham Rp125 miliar dari PMJ.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "ekuitas negatif",
   "transaksi afiliasi",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7a84564e22_fe84a9dbc9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tyro-catatkan-sukuk-ijarah-rp510-2-miliar-di-bei",
  "category": "Aksi Korporasi",
  "title": "TYRO Catatkan [Sukuk] Ijarah Rp510,2 Miliar di BEI",
  "deck": "PT Tamaris Hidro (TYRO) mencatatkan sukuk ijarah senilai Rp510,215 miliar dalam dua seri di Bursa Efek Indonesia mulai 9 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TYRO",
   "sukuk",
   "obligasi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bdfbc9b79c_1ddf360451.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bvic-lunasi-obligasi-subordinasi-rp150-miliar-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BVIC Lunasi [Obligasi] Subordinasi Rp150 Miliar Jatuh Tempo",
  "deck": "Obligasi Subordinasi Berkelanjutan II Bank Victoria Tahap II Tahun 2019 senilai Rp150 miliar jatuh tempo 8 November 2026 dan delisting dari BEI mulai 9 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BVIC",
   "obligasi subordinasi",
   "perbankan",
   "jatuh tempo obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c22d2e603e_32b6aebf43.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pjhb-catat-tambahan-saham-dari-konversi-waran-seri-i",
  "category": "Aksi Korporasi",
  "title": "PJHB catat tambahan saham dari konversi [waran] Seri I",
  "deck": "Bursa mencatat 10.355 saham baru hasil konversi Waran Seri I PJHB, sehingga total saham beredar naik menjadi 1.921.346.333 lembar.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PJHB",
   "waran",
   "pencatatan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/13e81cc6e2_8e01cdd2b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-dirut-wadirut-dan-komut-mundur-bersamaan",
  "category": "Aksi Korporasi",
  "title": "VTNY: Dirut, Wadirut, dan Komut [Mundur] Bersamaan",
  "deck": "Direktur Utama, Wakil Direktur Utama, dan Komisaris Utama VTNY mengajukan pengunduran diri pada 5 November 2026, keputusan final menunggu persetujuan RUPSLB pada 23 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "pengunduran diri direksi",
   "tata kelola perusahaan",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d6fd453474_25faeb8853.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-panggil-rupslb-agendakan-perubahan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "VTNY Panggil RUPSLB, Agendakan [Perubahan] Direksi-Komisaris",
  "deck": "VTNY mengoreksi panggilan RUPSLB 23 November 2026 yang mengagendakan persetujuan perubahan susunan Direksi dan Dewan Komisaris Perseroan.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0a4500b13c_e7721d1c2a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scco-koreksi-komite-audit-dua-kursi-berganti",
  "category": "Aksi Korporasi",
  "title": "SCCO Koreksi Komite Audit, Dua Kursi [Berganti]",
  "deck": "Koreksi atas laporan 6 November menyebut dua dari tiga anggota Komite Audit SCCO sebenarnya berganti untuk periode baru lima tahun, bukan hanya satu seperti versi sebelumnya.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCCO",
   "komite audit",
   "tata kelola",
   "koreksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b508b1727a_16fe879e9a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "keyakinan-konsumen-oktober-naik-ke-119-9",
  "category": "Makroekonomi",
  "title": "Keyakinan Konsumen Oktober [Naik] ke 119,9",
  "deck": "Indeks Keyakinan Konsumen Bank Indonesia naik ke 119,9 pada Oktober 2026, dari 118,1 bulan sebelumnya, ditopang penilaian kondisi ekonomi saat ini dan ekspektasi ke depan yang menguat.",
  "date": "9 November 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "strk-jelaskan-ke-bursa-soal-pengambilalihan-saham-oleh-bbs",
  "category": "Aksi Korporasi",
  "title": "STRK Jelaskan ke Bursa Soal [Pengambilalihan] Saham oleh BBS",
  "deck": "STRK menjelaskan ke Bursa konsistensi informasinya soal negosiasi pengambilalihan saham oleh PT Beruntung Berkat Sejahtera, ditargetkan tuntas paling lambat Desember 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "STRK",
   "pengambilalihan saham",
   "keterbukaan informasi",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2fbfae19ee_c0604666c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-gema-lintas-benua-tambah-saham-hak-suara-sentuh-10",
  "category": "Aksi Korporasi",
  "title": "KETR: Gema Lintas Benua Tambah Saham, Hak Suara Sentuh [10%]",
  "deck": "Pemegang saham Gema Lintas Benua membeli 10,37 juta lembar saham KETR dalam empat transaksi akhir Oktober-awal November 2026, menaikkan hak suaranya dari 9,64% menjadi 10%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "kepemilikan saham",
   "Ketrosden Triasmitra",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-1337-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-perkuat-pembinaan-pengrajin-wayang-yogyakarta-lewat-klasterisasi",
  "category": "BUMN",
  "title": "PNM Perkuat Pembinaan Pengrajin Wayang Yogyakarta Lewat [Klasterisasi]",
  "deck": "Memperingati Hari Wayang Nasional 2026, PNM memperluas pembinaan klaster pengrajin wayang dan suvenir kulit di Wukirsari, Yogyakarta, dengan anggota yang kini mencapai 30 nasabah Mekaar.",
  "date": "9 November 2026",
  "image": "assets/img/pnm-perkuat-pembinaan-pengrajin-wayang-yogyakarta-lewat-klasterisasi.jpg",
  "imageV": "mw8qwfto",
  "tags": [
   "PNM",
   "Hari Wayang Nasional",
   "Klasterisasi",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477354-hari-wayang-nasional-pnm-perkuat-pembinaan-pengrajin-wayang-di-yogyakarta-lewat-klasterisasi"
 },
 {
  "slug": "masb-direksi-fely-retnowati-tambah-saham-jadi-297-500-lembar",
  "category": "Aksi Korporasi",
  "title": "MASB: Direksi Fely Retnowati [tambah] saham jadi 297.500 lembar",
  "deck": "Direksi MASB Fely Retnowati kembali membeli saham lewat empat transaksi kecil pada 6 November 2026, menambah kepemilikannya jadi 297.500 lembar.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MASB",
   "Bank Multiarta Sentosa",
   "kepemilikan saham direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-9555-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-stabil-di-rp2-545-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Stabil] di Rp2.545.000 per Gram",
  "deck": "Harga emas batangan Antam tidak berubah pada Senin, bertahan di Rp2.545.000 per gram, sementara harga buyback tercatat Rp2.350.000 per gram.",
  "date": "9 November 2026",
  "image": "assets/img/harga-emas-antam-stabil-di-rp2-545-000-per-gram.jpg",
  "imageV": "mw8qwgby",
  "tags": [
   "emas",
   "antam",
   "logam mulia",
   "harga emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477347-harga-emas-antam-stabil-di-rp25-jutaan-per-gram-pada-senin-berikut-daftar-lengkapnya"
 },
 {
  "slug": "depo-respons-bei-akui-diskusi-internal-tindakan-korporasi",
  "category": "Aksi Korporasi",
  "title": "DEPO Respons BEI, Akui Diskusi Internal [Tindakan Korporasi]",
  "deck": "Menanggapi permintaan BEI soal volatilitas transaksi, DEPO menyatakan tak ada info material baru, namun mengakui masih membahas internal alternatif tindakan korporasi tanpa keputusan final.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEPO",
   "keterbukaan informasi",
   "tindakan korporasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f17751f04b_ef7f6bbd0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-lagi-250-000-saham",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] Lagi 250.000 Saham",
  "deck": "Henry Liem, Dewan Komisaris AKPI, melaporkan penjualan 250.000 saham pada 6 November 2026 lewat skema repurchase agreement, menyusul penjualan 350.000 saham pekan sebelumnya.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Komisaris",
   "Transaksi Saham",
   "Henry Liem"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-4359-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elit-direksi-beli-106-300-saham-kepemilikan-jadi-208-000-lembar",
  "category": "Aksi Korporasi",
  "title": "ELIT: Direksi [Beli] 106.300 Saham, Kepemilikan Jadi 208.000 Lembar",
  "deck": "Direktur ELIT, Ery Setyo Wibowo, membeli 106.300 saham perusahaan pada 29 Oktober 2026 seharga Rp188 per lembar, menggandakan kepemilikannya menjadi 208.000 lembar.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELIT",
   "kepemilikan saham",
   "direksi",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-7380-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-komisaris-suhendra-mundur-efektif-usai-inbreng-rampung",
  "category": "Aksi Korporasi",
  "title": "ULTJ: Komisaris Suhendra [Mundur], Efektif Usai Inbreng Rampung",
  "deck": "Komisaris ULTJ Suhendra Prawirawidjaja mengundurkan diri, tapi baru efektif setelah proses inbreng dalam rights issue PMHMETD IV selesai.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "Dewan Komisaris",
   "Frisian Flag",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cc10d6a437_3ccc698700.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-mdla-beli-50-000-saham-senilai-rp9-3-juta",
  "category": "Aksi Korporasi",
  "title": "Direksi [MDLA] Beli 50.000 Saham Senilai Rp9,3 Juta",
  "deck": "Edbert Orotodan, direksi Medela Potentia, membeli 50.000 saham MDLA seharga Rp186 per saham pada 3 November 2026, hak suaranya tetap 0,014 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Medela Potentia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-1467-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-direksi-beli-200-000-saham-senilai-rp375-juta",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi [Beli] 200.000 Saham Senilai Rp375 Juta",
  "deck": "George Oetomo, direksi Triputra Agro Persada, menambah kepemilikan sahamnya di TAPG lewat pembelian tidak langsung pada 3 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "kepemilikan saham",
   "direksi",
   "insider trading"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-3792-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bram-kantongi-tambahan-klaim-asuransi-us-23-6-juta-banjir",
  "category": "Aksi Korporasi",
  "title": "BRAM Kantongi Tambahan [Klaim Asuransi] US$23,6 Juta Banjir",
  "deck": "Indo Kordsa memperoleh persetujuan tambahan pendapatan asuransi US$23,6 juta atas klaim banjir Bogor 2025, total klaim kini US$48,6 juta.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRAM",
   "Indo Kordsa",
   "klaim asuransi",
   "banjir Bogor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a8d859dcae_7a532d4d2d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-bagikan-dividen-interim-rp700-miliar-laba-naik-16-5",
  "category": "Aksi Korporasi",
  "title": "AVIA Bagikan [Dividen Interim] Rp700 Miliar, Laba Naik 16,5%",
  "deck": "Laba bersih sembilan bulan AVIA tumbuh 16,5% jadi Rp1,38 triliun, Avian Brands bagikan dividen interim Rp12 per saham senilai total Rp700 miliar.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "dividen interim",
   "laba bersih",
   "cat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/208ef9cff7_732a7a802c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akra-rampungkan-akuisisi-penuh-apr-senilai-us-14-22-juta",
  "category": "Aksi Korporasi",
  "title": "AKRA Rampungkan [Akuisisi] Penuh APR Senilai US$14,22 Juta",
  "deck": "AKR Corporindo lewat dua anak usahanya membeli 49,9% saham PT Aneka Petroindo Raya dari BP Global Investments senilai US$14,22 juta, menaikkan kepemilikannya di APR menjadi 100%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKRA",
   "AKR Corporindo",
   "akuisisi",
   "Aneka Petroindo Raya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3dd514b6db_08b22f07c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "east-bagikan-dividen-interim-iii-rp1-6-per-saham",
  "category": "Aksi Korporasi",
  "title": "EAST Bagikan [Dividen] Interim III Rp1,6 per Saham",
  "deck": "Eastparc Hotel menjadwalkan dividen tunai interim ketiga tahun buku 2026 sebesar Rp1,6 per saham, dibayar 30 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EAST",
   "dividen interim",
   "Eastparc Hotel",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bec463178c_0b6d8dc767.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcap-direktur-mundur-henry-suparman-gantikan-aan-setiawandi",
  "category": "Aksi Korporasi",
  "title": "BCAP: Direktur Mundur, [Henry Suparman] Gantikan Aan Setiawandi",
  "deck": "Direktur BCAP Aan Setiawandi mengajukan pengunduran diri efektif 6 November 2026, posisinya akan diisi Henry Suparman, eksekutif lama MNC Group.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCAP",
   "MNC Kapital Indonesia",
   "Direksi",
   "Pergantian Direktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d3bd1e3577_2d4ffca573.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-akuisisi-90-saham-knj-rambah-bisnis-kapal-gas",
  "category": "Aksi Korporasi",
  "title": "RAJA Akuisisi 90% Saham KNJ, Rambah Bisnis [Kapal Gas]",
  "deck": "Anak usaha RAJA, PT Banawa Rezeki Optima, mengambil alih 90 persen saham PT Kapalindo Nusantara Jaya yang memegang saham di perusahaan pemilik kapal LNG Carrier dan VLGC.",
  "date": "8 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "akuisisi",
   "kapal gas",
   "diversifikasi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7911b01de1_9d1f8b195b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-raih-fasilitas-pembiayaan-syariah-rp250-m-dari-maybank",
  "category": "Aksi Korporasi",
  "title": "RAJA Raih [Fasilitas] Pembiayaan Syariah Rp250 M dari Maybank",
  "deck": "Rukun Raharja dan enam anak usahanya menandatangani perjanjian fasilitas pembiayaan musyarakah dengan Bank Maybank Indonesia senilai Rp250 miliar, berlaku 12 bulan.",
  "date": "8 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "Rukun Raharja",
   "Maybank Indonesia",
   "pembiayaan syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/42e556a12d_0c7749b632.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "endri-supriatna-juara-kompetisi-memasak-bright-gas-2026",
  "category": "BUMN",
  "title": "Endri Supriatna [Juara] Kompetisi Memasak Bright Gas 2026",
  "deck": "Endri Supriatna meraih juara pertama Bright Gas Cooking Competition 2026 Pertamina dengan kreasi kuliner nusantara di Tangerang Selatan.",
  "date": "8 November 2026",
  "image": "assets/img/endri-supriatna-juara-kompetisi-memasak-bright-gas-2026.jpg",
  "imageV": "mw7tmfce",
  "tags": [
   "Pertamina",
   "Bright Gas",
   "Kuliner Nusantara",
   "BGCC 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477253-kompetisi-memasak-pertamina-bgcc-2026-tuntaskan-babak-final-angkat-tema-kuliner-nusantara"
 },
 {
  "slug": "ri-didorong-ambil-peran-strategis-jelang-ktt-apec-2026",
  "category": "Global",
  "title": "RI Didorong Ambil Peran [Strategis] Jelang KTT APEC 2026",
  "deck": "Forum diskusi Indonesia-Tiongkok mendorong RI tak sekadar jadi penerima investasi, tapi ikut merancang kerja sama ekonomi menjelang KTT APEC 2026 di Shenzhen.",
  "date": "8 November 2026",
  "image": "assets/img/ri-didorong-ambil-peran-strategis-jelang-ktt-apec-2026.jpg",
  "imageV": "mw7obzpz",
  "tags": [
   "APEC 2026",
   "Indonesia-Tiongkok",
   "Shenzhen",
   "nikel"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477242-indonesia-didorong-ambil-peran-ekonomi-strategis-jelang-ktt-apec-2026"
 },
 {
  "slug": "ri-klaim-dua-tahun-tanpa-impor-beras-di-krisis-pangan-global",
  "category": "Makroekonomi",
  "title": "RI Klaim [Dua] Tahun Tanpa Impor Beras di Krisis Pangan Global",
  "deck": "Mentan Andi Amran Sulaiman menyebut Indonesia tak impor beras dua tahun berturut-turut, di tengah krisis pangan dan energi global serta proteksionisme sejumlah negara.",
  "date": "8 November 2026",
  "image": "assets/img/ri-klaim-dua-tahun-tanpa-impor-beras-di-krisis-pangan-global.jpg",
  "imageV": "mw7oc05g",
  "tags": [
   "beras",
   "pangan",
   "impor",
   "pertanian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477241-dua-tahun-tanpa-impor-beras-mentan-amran-sebut-ketahanan-pangan-indonesia-terjaga-di-tengah-krisis-global"
 },
 {
  "slug": "bri-dorong-ekonomi-petani-alpukat-sumberejo",
  "category": "UMKM",
  "title": "BRI [Dorong] Ekonomi Petani Alpukat Sumberejo",
  "deck": "Lewat program Klasterku Hidupku, BRI membantu petani alpukat di Sumberejo, Lampung, membangun jaringan pemasaran bersama hingga ke pasar induk.",
  "date": "8 November 2026",
  "image": "assets/img/bri-dorong-ekonomi-petani-alpukat-sumberejo.jpg",
  "imageV": "mw7oc0jw",
  "tags": [
   "BRI",
   "Klasterku Hidupku",
   "petani alpukat",
   "Lampung"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477236-lewat-klasterku-hidupku-bri-dorong-peningkatan-ekonomi-petani-alpukat-di-sumberejo"
 },
 {
  "slug": "bayan-pastikan-penjualan-saham-ke-haji-isam-bersih",
  "category": "Pasar Modal",
  "title": "Bayan Pastikan Penjualan Saham ke [Haji Isam] Bersih",
  "deck": "Direksi Bayan Resources menegaskan pengalihan lebih dari 10 miliar saham ke perusahaan Haji Isam murni bisnis, sesuai perjanjian yang diteken September 2026.",
  "date": "8 November 2026",
  "image": "assets/img/bayan-pastikan-penjualan-saham-ke-haji-isam-bersih.jpg",
  "imageV": "mw7idfoe",
  "tags": [
   "Bayan Resources",
   "Haji Isam",
   "BYAN",
   "Jhonlin Baratama"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477228-bayan-resources-pastikan-penjualan-saham-ke-haji-isam-tanpa-tekanan"
 },
 {
  "slug": "pemerintah-buka-diskon-tiket-transportasi-nataru-2026-2027",
  "category": "Makroekonomi",
  "title": "Pemerintah Buka Diskon Tiket Transportasi [Nataru] 2026/2027",
  "deck": "Diskon tarif kereta api, kapal laut, penyeberangan, dan pesawat untuk libur Nataru 2026/2027 resmi berjalan, berdasarkan SKB tiga menteri dan aturan PPN ditanggung pemerintah untuk tiket pesawat.",
  "date": "8 November 2026",
  "image": "assets/img/jalan-tol-konstruksi.jpg",
  "tags": [
   "Diskon Transportasi",
   "Nataru 2026",
   "BUMN Transportasi",
   "PPN DTP"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7206/sambut-libur-natal-dan-tahun-baru-pemerintah-luncurkan-stimulus-diskon-transportasi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "857-umk-binaan-pertamina-lolos-ke-tahap-nasional-2026",
  "category": "UMKM",
  "title": "857 UMK Binaan Pertamina [Lolos] ke Tahap Nasional 2026",
  "deck": "Dari lebih 1.500 pendaftar, 857 UMK binaan Pertamina lolos ke tahap nasional UMK Academy 2026 untuk dibina lebih lanjut hingga Desember.",
  "date": "7 November 2026",
  "image": "assets/img/857-umk-binaan-pertamina-lolos-ke-tahap-nasional-2026.jpg",
  "imageV": "mw6mt2jg",
  "tags": [
   "UMKM",
   "Pertamina",
   "CSR",
   "UMK Academy"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477177-mendorong-umk-naik-kelas-fokus-pertamina-perkuat-manajemen-usaha-lokal"
 },
 {
  "slug": "summarecon-gelar-pameran-properti-dan-hiburan-di-bekasi",
  "category": "Bisnis",
  "title": "Summarecon Gelar Pameran [Properti] dan Hiburan di Bekasi",
  "deck": "Summarecon Expo 2026 digelar di Summarecon Mall Bekasi pada 6-15 November, memadukan pameran properti dari sembilan kawasan pengembangan dengan pertunjukan akrobat internasional dan aktivitas keluarga.",
  "date": "7 November 2026",
  "image": "assets/img/summarecon-gelar-pameran-properti-dan-hiburan-di-bekasi.jpg",
  "imageV": "mw6mt2zf",
  "tags": [
   "properti",
   "bekasi",
   "summarecon",
   "pameran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477164-seni-pertunjukan-dan-edukasi-keluarga-jadi-magnet-pameran-di-bekasi"
 },
 {
  "slug": "pertamina-gelar-smexpo-cilacap-libatkan-50-umkm",
  "category": "UMKM",
  "title": "Pertamina Gelar SMEXPO Cilacap, Libatkan 50 [UMKM]",
  "deck": "Pertamina Patra Niaga menggelar pameran UMKM selama tiga hari di Cilacap, melibatkan lebih dari 50 pelaku usaha lokal untuk promosi produk dan temu bisnis.",
  "date": "7 November 2026",
  "image": "assets/img/pertamina-gelar-smexpo-cilacap-libatkan-50-umkm.jpg",
  "imageV": "mw6mt3or",
  "tags": [
   "pertamina",
   "umkm",
   "cilacap",
   "smexpo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477155-strategi-pertamina-dorong-umkm-jadi-penggerak-ekonomi-daerah-gelar-pertamina-smexpo-cilacap-2026"
 },
 {
  "slug": "ikpm-direksi-tambah-5-100-saham-senilai-rp731-300",
  "category": "Aksi Korporasi",
  "title": "IKPM: Direksi [Tambah] 5.100 Saham Senilai Rp731.300",
  "deck": "Direktur IKPM, Eliza Arlena Winata, menambah kepemilikan saham lewat tiga transaksi kecil pada 5 November, namun hak suaranya tetap 0,19 persen.",
  "date": "7 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKPM",
   "kepemilikan saham",
   "direksi",
   "Ikapharmindo Putramas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07112026-6215-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-dan-skk-migas-diganjar-penghargaan-atas-hilirisasi-dan-migas",
  "category": "Energi",
  "title": "ESDM dan SKK Migas Diganjar Penghargaan atas [Hilirisasi] dan Migas",
  "deck": "Kementerian ESDM dan SKK Migas meraih CNN Indonesia Awards 2026 atas capaian hilirisasi senilai Rp180 triliun dan percepatan FEED proyek LNG Masela senilai US$22 miliar.",
  "date": "7 November 2026",
  "image": "assets/img/esdm-dan-skk-migas-diganjar-penghargaan-atas-hilirisasi-dan-migas.jpg",
  "imageV": "mw62n0ap",
  "tags": [
   "Hilirisasi",
   "SKK Migas",
   "LNG Masela",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kementerian-esdm-dan-skk-migas-raih-cnn-indonesia-awards-2026",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "petrokimia-gresik-perkuat-koordinasi-dengan-bin-jatim",
  "category": "BUMN",
  "title": "Petrokimia Gresik Perkuat [Koordinasi] dengan BIN Jatim",
  "deck": "Petrokimia Gresik menerima kunjungan Kabinda Jatim untuk memperkuat komunikasi antarlembaga demi menjaga kelangsungan industri pupuk nasional.",
  "date": "7 November 2026",
  "image": "assets/img/petrokimia-gresik-perkuat-koordinasi-dengan-bin-jatim.jpg",
  "imageV": "mw62n0nz",
  "tags": [
   "pupuk",
   "ketahanan pangan",
   "Petrokimia Gresik",
   "BIN Jatim"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477089-jaga-keberlanjutan-industri-pupuk-petrokimia-gresik-perkuat-koordinasi-dengan-bin-jatim"
 },
 {
  "slug": "aspr-jelaskan-kenaikan-liabilitas-21-jadi-rp182-miliar",
  "category": "Aksi Korporasi",
  "title": "ASPR Jelaskan [Kenaikan] Liabilitas 21% Jadi Rp182 Miliar",
  "deck": "PT Asia Pramulia Tbk melaporkan total liabilitas naik 21,02 persen menjadi Rp182,17 miliar per September 2026, didorong tambahan utang bank dan utang usaha.",
  "date": "7 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASPR",
   "liabilitas",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/925c6f91a0_9c00908818.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-545-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.545.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp20.000 menjadi Rp2.545.000 per gram pada Jumat, sementara harga buyback juga turun ke Rp2.350.000 per gram.",
  "date": "7 November 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-545-000-per-gram.jpg",
  "imageV": "mw5sry8a",
  "tags": [
   "emas",
   "harga emas antam",
   "antam",
   "buyback emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477066-saatnya-beli-untuk-investasi-harga-emas-antam-hari-ini-7-november-2026-turun-jadi-rp2545000-per-gram"
 },
 {
  "slug": "shopeepay-gelar-promo-11-11-kfc-rp11-ribu-hingga-saldo-kaget",
  "category": "Teknologi",
  "title": "ShopeePay Gelar Promo [11.11], KFC Rp11 Ribu hingga Saldo Kaget",
  "deck": "ShopeePay membuka kampanye diskon 11.11 pada 6-15 November 2026, mencakup paket ayam goreng Rp11.000, potongan 60 persen lewat SPayLater, dan saldo kejutan harian.",
  "date": "7 November 2026",
  "image": "assets/img/shopeepay-gelar-promo-11-11-kfc-rp11-ribu-hingga-saldo-kaget.jpg",
  "imageV": "mw5sryny",
  "tags": [
   "ShopeePay",
   "11.11",
   "SPayLater",
   "promo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477052-siap-siap-berburu-promo-di-aplikasi-shopeepay-1111-kfc-rp11-ribu-hingga-saldo-kaget-setiap-hari-menanti"
 },
 {
  "slug": "sbat-dinyatakan-pailit-auditor-beri-opini-disclaimer",
  "category": "Aksi Korporasi",
  "title": "SBAT Dinyatakan Pailit, Auditor Beri Opini [Disclaimer]",
  "deck": "Laporan keuangan audit 2023 SBAT mencatat ekuitas negatif Rp15,56 miliar dan opini disclaimer, menyusul keputusan pailit pengadilan niaga pada Agustus 2025.",
  "date": "7 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SBAT",
   "kepailitan",
   "tender saham",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c03d9d9782_ffb99ca34c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-tatarstan-jajaki-kerja-sama-kapal-dan-investasi",
  "category": "Global",
  "title": "Indonesia-Tatarstan [Jajaki] Kerja Sama Kapal dan Investasi",
  "deck": "Menko Airlangga bertemu Kepala Republik Tatarstan Rusia membahas peluang investasi di perkapalan, otomotif, kedirgantaraan, farmasi, dan teknologi digital.",
  "date": "6 November 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "Rusia",
   "Tatarstan",
   "Investasi",
   "Kawasan Ekonomi Khusus"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7205/terima-rais-kepala-republik-tatarstan-federasi-rusia-menko-airlangga-dorong-penguatan-investasi-dan-kerja-sama-industri-indonesia-tatarstan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "dooh-pis-keluar-total-beruntung-berkat-pegang-15-09-saham",
  "category": "Aksi Korporasi",
  "title": "DOOH: PIS Keluar Total, [Beruntung Berkat] Pegang 15,09% Saham",
  "deck": "PT Prambanan Investasi Sukses resmi lepas semua sisa sahamnya di DOOH pada 12 Oktober 2026, digantikan PT Beruntung Berkat Sejahtera yang kini pegang 15,09% saham.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "pemegang saham",
   "SII",
   "INET"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c01dcd329b_da004943f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-ungkap-dana-ipo-mengendap-vendor-kembalikan-dana",
  "category": "Aksi Korporasi",
  "title": "DOOH Ungkap Dana IPO Mengendap, Vendor [Kembalikan] Dana",
  "deck": "Laporan tambahan DOOH merinci realisasi dana IPO 2023 sampai akhir 2025, termasuk pengembalian dana dari vendor akibat ketidaksesuaian layanan iklan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "penggunaan dana IPO",
   "tender wajib",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/357962b6da_73ac27dc39.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-lepas-3-anak-usaha-kbli-baru-diklaim-topang-ekosistem-ai",
  "category": "Aksi Korporasi",
  "title": "DOOH Lepas 3 Anak Usaha, KBLI Baru Diklaim Topang Ekosistem [AI]",
  "deck": "Era Media Sejahtera (DOOH) melepas tiga anak usaha sepanjang 2026 dan mengaitkan penambahan KBLI perusahaan induk dengan rencana ekosistem AI, dalam dokumen tambahan menjelang RUPSLB.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Era Media Sejahtera",
   "KBLI 64210",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/feb5fdacb2_e43e067f81.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-rinci-pmhmetd-dilusi-hingga-95-24-rasio-20-1",
  "category": "Aksi Korporasi",
  "title": "DOOH Rinci PMHMETD: Dilusi Hingga [95,24%], Rasio 20:1",
  "deck": "Perseroan merinci rencana rights issue hingga 154,78 miliar saham baru berbanding 1 saham lama, dengan dana diutamakan melunasi utang ke pengendali SII dan memperbesar potensi kendalinya.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "rights issue",
   "PMHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5099e12567_64dacbc71c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-gelar-final-lomba-masak-bright-gas-2026",
  "category": "Energi",
  "title": "Pertamina Gelar Final Lomba Masak [Bright Gas] 2026",
  "deck": "Grand final Bright Gas Cooking Competition 2026 digelar di Tangerang Selatan, lengkap dengan promo tukar tambah gas melon ke Bright Gas.",
  "date": "6 November 2026",
  "image": "assets/img/pertamina-gelar-final-lomba-masak-bright-gas-2026.jpg",
  "imageV": "mw56cg8g",
  "tags": [
   "Pertamina",
   "Bright Gas",
   "LPG subsidi",
   "Kompetisi Masak"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477018-pertamina-patra-niaga-gelar-grand-final-bgcc-2026-perebutkan-kursus-masak-internasional"
 },
 {
  "slug": "pefindo-turunkan-peringkat-obligasi-wika-ke-idd",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Turunkan Peringkat Obligasi WIKA ke [idD]",
  "deck": "PEFINDO menurunkan peringkat tiga seri Obligasi Berkelanjutan WIKA senilai total Rp1,2 triliun dari idCCC menjadi idD, status gagal bayar, menyusul penundaan kupon jatuh tempo 3 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "peringkat kredit",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d819fb20ff_3b96d8712f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpdp-perkuat-daya-saing-umkm-perkebunan-di-indovex",
  "category": "UMKM",
  "title": "BPDP Perkuat Daya Saing [UMKM] Perkebunan di INDOVEX",
  "deck": "BPDP ikut pameran INDOVEX 2026 di Kota Batu untuk memperkuat pelatihan, inovasi produk, dan akses pasar bagi UMKM berbasis sawit, kelapa, dan kakao.",
  "date": "6 November 2026",
  "image": "assets/img/bpdp-perkuat-daya-saing-umkm-perkebunan-di-indovex.jpg",
  "imageV": "mw56cgoo",
  "tags": [
   "BPDP",
   "UMKM perkebunan",
   "INDOVEX 2026",
   "sawit kelapa kakao"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477011-bpdp-perkuat-daya-saing-umkm-perkebunan-lewat-inovasi-dan-akses-pasar"
 },
 {
  "slug": "lopi-direksi-beli-2-juta-saham-secara-tidak-langsung",
  "category": "Aksi Korporasi",
  "title": "LOPI: Direksi Beli [2 Juta] Saham Secara Tidak Langsung",
  "deck": "Direktur LOPI, Wahyu Dwi Jatmiko, melaporkan pembelian tidak langsung 2 juta saham pada 5 November 2026, menaikkan kepemilikannya dari 60 menjadi 2.000.060 lembar saham.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "kepemilikan saham direksi",
   "Logisticsplus International",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1748-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indf-jelaskan-ke-bei-dana-buyback-rp750-m-setara-1-modal",
  "category": "Aksi Korporasi",
  "title": "INDF Jelaskan ke BEI, Dana [Buyback] Rp750 M Setara 1% Modal",
  "deck": "Indofood menjawab permintaan penjelasan BEI atas rencana pembelian kembali saham, menyebut dana Rp750 miliar hanya sekitar 1 persen dari modal disetor.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDF",
   "buyback",
   "BEI",
   "Indofood"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e82e653ba3_91413102a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "icbp-jawab-bursa-buyback-rp750-miliar-cuma-1-modal",
  "category": "Aksi Korporasi",
  "title": "ICBP Jawab Bursa: Buyback Rp750 Miliar Cuma [1%] Modal",
  "deck": "ICBP menjelaskan ke BEI bahwa dana buyback Rp750 miliar hanya sekitar 1 persen dari modal disetor dan dilakukan tanpa penilai independen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ICBP",
   "buyback",
   "BEI",
   "Indofood CBP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c6bc3959c2_84fd7547b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelindo-teken-mou-kerja-sama-dengan-pelabuhan-los-angeles",
  "category": "BUMN",
  "title": "Pelindo Teken [MoU] Kerja Sama dengan Pelabuhan Los Angeles",
  "deck": "Pelindo dan Port of Los Angeles menandatangani MoU untuk memperluas kerja sama bisnis kepelabuhanan dan konektivitas pelayaran Indonesia-Amerika Serikat.",
  "date": "6 November 2026",
  "image": "assets/img/pelindo-teken-mou-kerja-sama-dengan-pelabuhan-los-angeles.jpg",
  "imageV": "mw56ch66",
  "tags": [
   "Pelindo",
   "Port of Los Angeles",
   "Pelabuhan",
   "Maritim"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477004-pelindo-perkuat-kerja-sama-bisnis-dan-konektivitas-maritim-dengan-port-of-los-angeles"
 },
 {
  "slug": "pefindo-tetapkan-rating-ida-untuk-obligasi-ijee-rp1-7-triliun",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Tetapkan Rating [idA] untuk Obligasi IJEE Rp1,7 Triliun",
  "deck": "PEFINDO menetapkan peringkat idA (Single A) untuk empat obligasi IJEE senilai total Rp1,71 triliun, berlaku 3 November 2026 hingga 1 November 2027.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "obligasi",
   "PEFINDO",
   "rating kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f8b8fb6a82_3abd787738.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fasilitas-devisa-ekspor-sda-diperluas-portal-dsi-siap-2027",
  "category": "Moneter",
  "title": "Fasilitas Devisa Ekspor SDA [Diperluas], Portal DSI Siap 2027",
  "deck": "Pemerintah memperluas fasilitas penempatan devisa hasil ekspor SDA ke tujuh negara dan 16 bank, sekaligus menyiapkan Portal DSI yang wajib dipakai eksportir batu bara, sawit, dan feroaloi mulai 2027.",
  "date": "6 November 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "DHE SDA",
   "Portal DSI",
   "Ekspor SDA",
   "Danantara"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7204/perluas-fleksibilitas-dhe-sda-dan-siapkan-go-live-portal-dsi-pemerintah-pastikan-ekspor-tetap-lancar",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wamendag-tinjau-batik-keris-bidik-ekspor-ke-asia-tenggara",
  "category": "Industri",
  "title": "Wamendag Tinjau Batik Keris, Bidik [Ekspor] ke Asia Tenggara",
  "deck": "Wamendag Dyah Roro Esti meninjau pabrik Batik Keris di Sukoharjo untuk memetakan potensi ekspor batik ke Asia Tenggara, saat ekspor batik nasional tumbuh 13 persen pada 2025.",
  "date": "6 November 2026",
  "image": "assets/img/wamendag-tinjau-batik-keris-bidik-ekspor-ke-asia-tenggara.jpg",
  "imageV": "mw510uwk",
  "tags": [
   "batik",
   "ekspor",
   "Kemendag",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tinjau-pabrik-batik-keris-wamendag-roro-dorong-batik-tembus-pasar-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bappebti-rilis-peringkat-69-pialang-berjangka-kuartal-iii",
  "category": "Pasar Modal",
  "title": "Bappebti Rilis [Peringkat] 69 Pialang Berjangka Kuartal III",
  "deck": "Bappebti merilis hasil penilaian berkala terhadap 69 pialang berjangka aktif periode Juli-September 2026, dengan PT PG Berjangka di peringkat teratas.",
  "date": "6 November 2026",
  "image": "assets/img/bursa-layar.jpg",
  "tags": [
   "Bappebti",
   "Pialang Berjangka",
   "Kementerian Perdagangan",
   "Perdagangan Berjangka Komoditi"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tingkatkan-kualitas-pelaku-usaha-pbk-bappebti-umumkan-rating-pialang-berjangka-triwulan-iii-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mine-rombak-direksi-jaminkan-aset-untuk-pinjaman-sindikasi",
  "category": "Aksi Korporasi",
  "title": "MINE Rombak Direksi, Jaminkan [Aset] untuk Pinjaman Sindikasi",
  "deck": "RUPSLB MINE menyetujui direktur baru, perubahan kode usaha KBLI, dan penjaminan aset di atas 50% kekayaan bersih untuk pinjaman sindikasi dari dua bank.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINE",
   "RUPSLB",
   "Pinjaman Sindikasi",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d119d29c30_95bd4ef529.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-akui-transaksi-cessie-rp147-miliar-belum-diungkap",
  "category": "Aksi Korporasi",
  "title": "VTNY Akui Transaksi [Cessie] Rp147 Miliar Belum Diungkap",
  "deck": "VTNY menanggapi permintaan penjelasan Bursa soal opini wajar dengan pengecualian, dan mengakui pengalihan piutang Rp147 miliar serta obligasi anak usaha belum diungkap sebagai transaksi material.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "opini audit",
   "transaksi material",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d41b306f52_3c44142603.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-bantah-putus-kerja-sama-dengan-d-masiv-untuk-tur-asia",
  "category": "Aksi Korporasi",
  "title": "RANS Bantah Putus Kerja Sama dengan [D'MASIV] untuk Tur Asia",
  "deck": "RANS menjawab permintaan penjelasan BEI soal kabar putusnya kerja sama dengan D'MASIV di tur konser Asia yang sebagian didanai dana hasil IPO.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "D'MASIV",
   "IPO",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ab1d566f9a_8e81f08b1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-revisi-transaksi-afiliasi-pinjaman-kbank-capai-us-240-juta",
  "category": "Aksi Korporasi",
  "title": "BMAS Revisi Transaksi [Afiliasi]: Pinjaman KBank Capai US$240 Juta",
  "deck": "BMAS mengoreksi laporan transaksi afiliasi dan merinci penarikan pinjaman dari KASIKORNBANK yang telah mencapai US$240 juta dari limit fasilitas US$341 juta.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "Transaksi Afiliasi",
   "KASIKORNBANK",
   "Pinjaman Bilateral"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a3c52f7619_979a3397ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmnt-ganti-direksi-pt-karsa-primapermata-nusa",
  "category": "Aksi Korporasi",
  "title": "CMNT Ganti [Direksi] PT Karsa Primapermata Nusa",
  "deck": "Cemindo Gemilang mengumumkan susunan baru direksi dan komisaris anak usahanya, PT Karsa Primapermata Nusa, lewat akta notaris 6 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMNT",
   "Cemindo Gemilang",
   "Karsa Primapermata Nusa",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/37c99d47d8_708956acab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-terima-dividen-rp3-33-miliar-dari-dextone-lemindo",
  "category": "Aksi Korporasi",
  "title": "AVIA Terima [Dividen] Rp3,33 Miliar dari Dextone Lemindo",
  "deck": "Avia Avian mengantongi dividen Rp3,33 miliar dari laba ditahan 2025 PT Dextone Lemindo, perusahaan asosiasi yang 16,67 persen sahamnya dimiliki Perseroan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "dividen",
   "Dextone Lemindo",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5ecd3245bb_e102a555cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-sajikan-ulang-lk-2022-ekuitas-susut-48-restatement",
  "category": "Aksi Korporasi",
  "title": "CASH Sajikan Ulang LK 2022, Ekuitas Susut 48% [Restatement]",
  "deck": "Cashlez mengoreksi penyajian aset takberwujud pada laporan keuangan 2022 sesuai PSAK 238, membuat ekuitas turun Rp88,4 miliar dan hasil komprehensif berubah dari untung jadi rugi.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "restatement laporan keuangan",
   "PSAK 238",
   "Cashlez"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6f5fda78ec_7f38640e99.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-komisaris-jual-habis-saham-rp12-2-miliar",
  "category": "Aksi Korporasi",
  "title": "NSSS: Komisaris [Jual] Habis Saham, Rp12,2 Miliar",
  "deck": "Komisaris Djasa Pinara Gusti menjual seluruh 26,89 juta lembar sahamnya di NSSS pada harga Rp455, membuat hak suaranya turun dari 0,11 persen menjadi nol.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "Nusantara Sawit Sejahtera",
   "komisaris",
   "transaksi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8374-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-tambah-kepemilikan-saham-via-repo-ke-38-07",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah [Kepemilikan] Saham via Repo ke 38,07%",
  "deck": "Direksi NSSS menambah kepemilikan lewat tiga transaksi gadai saham (repo) pada 6 November 2026, saham naik 522,7 juta lembar dan hak suara jadi 38,07%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "kepemilikan direksi",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-6863-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kepemilikan-sqmi-cgs-international-naik-ke-15-19-saham",
  "category": "Aksi Korporasi",
  "title": "[Kepemilikan] SQMI: CGS International Naik ke 15,19% Saham",
  "deck": "CGS International Securities Singapore melaporkan pembelian 63,99 juta saham SQMI pada 3 November 2026, menaikkan hak suaranya dari 14,78% menjadi 15,19%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "kepemilikan saham",
   "CGS International Securities",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8419-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-cairkan-repo-lepas-18-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Cairkan Repo, [Lepas] 18,3 Juta Saham",
  "deck": "Direksi RLCO menjual 18,3 juta saham senilai sekitar Rp56 miliar untuk mencairkan perjanjian repo, hak suara turun jadi 11,85 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7492-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-direksi-tambah-652-9-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "BKSL: Direksi Tambah 652,9 Juta Saham via [Repo]",
  "deck": "Laporan ke OJK menyebut kepemilikan direksi Sentul City Tbk di saham BKSL bertambah 652,9 juta lembar lewat transaksi repo pada 6 November 2026, hak suara naik dari 5,44% menjadi 5,83%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8548-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-saham-mknt-terkonsentrasi-99-64-di-segelintir-investor",
  "category": "Aksi Korporasi",
  "title": "BEI: Saham MKNT [Terkonsentrasi] 99,64% di Segelintir Investor",
  "deck": "Bursa Efek Indonesia mencatat 99,64% saham MKNT dikuasai sejumlah terbatas pemegang saham per 5 November 2026, menyusul status Unusual Market Activity pada saham ini.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "BEI",
   "kepemilikan saham",
   "UMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d396738a24_c24aff7724.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-direksi-agoes-tambah-saham-tak-langsung-rp995-juta",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direksi Agoes [Tambah] Saham Tak Langsung Rp995 Juta",
  "deck": "Direksi BRMS Agoes Projosasmito membeli 3,225 juta saham secara tidak langsung pada 4 November 2026, menaikkan kepemilikannya 21,26 persen meski hak suaranya tetap 0,01 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "Bumi Resources Minerals",
   "kepemilikan saham direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1586-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-tambah-saham-lewat-repo-ke-11-26-suara",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi [tambah] saham lewat repo ke 11,26% suara",
  "deck": "Pelapor berstatus Direksi FILM, Samuel Sekuritas Indonesia, menambah kepemilikan saham MD Entertainment lewat rangkaian transaksi repo pada 6 November 2026, hak suara naik dari 8,85% menjadi 11,26%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-0611-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yupi-bagikan-dividen-interim-rp14-83-per-saham",
  "category": "Aksi Korporasi",
  "title": "YUPI Bagikan [Dividen] Interim Rp14,83 per Saham",
  "deck": "Yupi Indo Jelly Gum membagikan dividen interim Rp126,76 miliar dari laba sembilan bulan 2026, dibayar 26 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YUPI",
   "dividen interim",
   "pasar modal",
   "emiten konsumer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/77ca9fa432_188701019d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-gelar-public-expose-insidentil-usai-diminta-bursa",
  "category": "Aksi Korporasi",
  "title": "PPGL Gelar Public Expose [Insidentil] Usai Diminta Bursa",
  "deck": "Diminta Bursa Efek Indonesia, PPGL akan memaparkan kinerja dan penjelasan soal pergerakan harga sahamnya pada 10 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Prima Globalindo Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/06d4ca1176_2527dd6dce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menn-masuk-papan-pemantauan-khusus-bei-9-november",
  "category": "Aksi Korporasi",
  "title": "MENN Masuk Papan [Pemantauan Khusus] BEI 9 November",
  "deck": "BEI memasukkan saham MENN ke papan pemantauan khusus mulai 9 November 2026 karena emiten tidak membukukan pendapatan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "pemantauan khusus",
   "BEI",
   "papan akselerasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/341e3ec4b8_e64a6066ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-akui-mengendalikan-mgna-dalam-satu-grup-usaha",
  "category": "Aksi Korporasi",
  "title": "BIPP Akui [Mengendalikan] MGNA dalam Satu Grup Usaha",
  "deck": "BIPP melaporkan ke Bursa Efek Indonesia bahwa perusahaannya satu grup dengan Magna Investama Mandiri (MGNA), karena BIPP pengendali MGNA dan direksinya rangkap jabatan di dua emiten itu.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "MGNA",
   "grup perusahaan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b7bacc4757_9aa99193f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-sisa-dana-buyback-saham-tinggal-rp46-miliar",
  "category": "Aksi Korporasi",
  "title": "PRDA Sisa Dana [Buyback] Saham Tinggal Rp46 Miliar",
  "deck": "Prodia Widyahusada melaporkan hasil pembelian kembali saham sejak 20 Agustus hingga 6 November 2026, dengan sisa dana buyback tinggal Rp46,02 miliar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/03d83386df_f68498cbe6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrta-terang-anugrah-abadi-tambah-609-000-saham",
  "category": "Aksi Korporasi",
  "title": "HRTA: Terang Anugrah Abadi [Tambah] 609.000 Saham",
  "deck": "PT Terang Anugrah Abadi, pemegang saham utama Hartadinata Abadi (HRTA), membeli 609.000 saham tambahan pada 4 November 2026 seharga Rp1.260 per lembar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "Hartadinata Abadi",
   "kepemilikan saham",
   "pemegang saham utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7760-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cadangan-devisa-ri-naik-tipis-ke-us-146-8-miliar",
  "category": "Moneter",
  "title": "Cadangan Devisa RI [Naik] Tipis ke US$146,8 Miliar",
  "deck": "Bank Indonesia mencatat cadangan devisa Oktober 2026 naik jadi US$146,8 miliar, cukup membiayai 5,3 bulan impor, ditopang pinjaman pemerintah dan penerimaan pajak.",
  "date": "6 November 2026",
  "image": "assets/img/cadangan-devisa-ri-naik-tipis-ke-us-146-8-miliar.jpg",
  "imageV": "mw4v2y2p",
  "tags": [
   "cadangan devisa",
   "bank indonesia",
   "rupiah",
   "utang luar negeri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476952-cadangan-devisa-indonesia-oktober-2026-tembus-us1468-miliar-bi-ungkap-faktor-penopang-rupiah"
 },
 {
  "slug": "tmpo-hak-suara-jaya-raya-utama-melonjak-ke-28-42-dividen",
  "category": "Aksi Korporasi",
  "title": "TMPO: Hak Suara Jaya Raya Utama Melonjak ke 28,42% [dividen]",
  "deck": "Jaya Raya Utama menerima 128,48 juta saham TMPO lewat dividen interim non tunai, mendorong hak suaranya dari 16,28% menjadi 28,42%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Tempo Inti Media",
   "dividen saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8418-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "omed-direksi-tambah-50-000-saham-senilai-rp8-9-juta",
  "category": "Aksi Korporasi",
  "title": "OMED: Direksi [Tambah] 50.000 Saham Senilai Rp8,9 Juta",
  "deck": "Direksi Leonard Hariadi Hartanto membeli 50.000 saham OMED pada 3 November 2026, menambah kepemilikannya menjadi 6.880.200 lembar atau 0,0254% hak suara.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OMED",
   "Jayamas Medica Industri",
   "kepemilikan saham direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1671-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "realisasi-investasi-rp3-923-2-triliun-topang-pergeseran-kerja",
  "category": "Makroekonomi",
  "title": "Realisasi [Investasi] Rp3.923,2 Triliun Topang Pergeseran Kerja",
  "deck": "Pemerintah mencatat investasi dua tahun terakhir tembus Rp3.923,2 triliun dan menyerap 5,49 juta pekerja, di tengah pergeseran pola kerja akibat transformasi ekonomi.",
  "date": "6 November 2026",
  "image": "assets/img/terminal-bus.jpg",
  "tags": [
   "transformasi ekonomi",
   "investasi",
   "tenaga kerja",
   "indeks industri"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7203/transformasi-struktur-ekonomi-buka-peluang-baru-pemerintah-perkuat-investasi-dan-kesiapan-tenaga-kerja",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "esdm-serahkan-137-hektare-lahan-tambang-ke-kopassus",
  "category": "Energi",
  "title": "ESDM Serahkan [137] Hektare Lahan Tambang ke Kopassus",
  "deck": "Kementerian ESDM mengalihkan status 137,1 hektare lahan eks tambang batu bara di Kutai Kartanegara kepada Kemhan untuk mendukung operasional Kopassus.",
  "date": "6 November 2026",
  "image": "assets/img/esdm-serahkan-137-hektare-lahan-tambang-ke-kopassus.jpg",
  "imageV": "mw4secuj",
  "tags": [
   "ESDM",
   "Kopassus",
   "Kementerian Pertahanan",
   "lahan tambang"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kementerian-esdm-serahkan-137-hektare-lahan-eks-tambang-kepada-kemhan-untuk-dukung-kopassus",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "medc-terbitkan-obligasi-us-300-juta-jatuh-tempo-2032",
  "category": "Aksi Korporasi",
  "title": "MEDC Terbitkan [Obligasi] US$300 Juta Jatuh Tempo 2032",
  "deck": "Anak usaha MEDC, Medco Redwood Tree Limited, menerbitkan obligasi US$300 juta berkupon 8,875 persen, jatuh tempo 2032, untuk melunasi utang lama.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "obligasi",
   "refinancing",
   "Medco Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e835801307_919e7a3795.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-tambah-saham-hak-suara-ke-38-89",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Tambah [Saham], Hak Suara ke 38,89%",
  "deck": "Tunggal Jaya Investama membeli 27,69 juta saham IMPC pada 2-5 November 2026, menaikkan hak suaranya dari 38,84% menjadi 38,89%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "Tunggal Jaya Investama",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7622-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-panggil-rupslb-agendakan-perombakan-direksi-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "LABA panggil RUPSLB, agendakan [perombakan] direksi dan komisaris",
  "deck": "RUPSLB akan digelar 30 November 2026 untuk membahas pergantian susunan direksi dan dewan komisaris Green Power Group, dengan pemegang saham per 5 November 2026 berhak hadir.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LABA",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9145a88c72_715df8bcd0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "masb-direksi-fely-retnowati-tambah-saham-jadi-294-400-lembar",
  "category": "Aksi Korporasi",
  "title": "MASB: Direksi Fely Retnowati [tambah] saham jadi 294.400 lembar",
  "deck": "Direksi Bank Multiarta Sentosa (MASB), Fely Retnowati, membeli 7.200 lembar saham pada 5 November 2026, menambah kepemilikannya menjadi 294.400 lembar namun hak suaranya tetap 0,02 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MASB",
   "Direksi",
   "kepemilikan saham",
   "Bank Multiarta Sentosa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-9369-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roti-tarik-514-juta-saham-treasuri-via-pengurangan-modal",
  "category": "Aksi Korporasi",
  "title": "ROTI Tarik 514 Juta Saham Treasuri via [Pengurangan Modal]",
  "deck": "ROTI berencana menarik 514.213.400 saham treasuri (8,31% dari modal) lewat pengurangan modal, keputusan dimintakan di RUPSLB 15 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "pengurangan modal",
   "saham treasuri",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8c93c47851_6c49693924.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-bagikan-dividen-tunai-rp23-saham-total-rp50-46-miliar",
  "category": "Aksi Korporasi",
  "title": "AMOR Bagikan [Dividen] Tunai Rp23/Saham, Total Rp50,46 Miliar",
  "deck": "RUPST AMOR menyetujui dividen tunai Rp23 per saham untuk tahun buku berakhir Juni 2026, total Rp50,46 miliar, cair 24 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "dividen tunai",
   "Ashmore Asset Management",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2964fb570a_1b8636a313.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mgna-satu-grup-dengan-bhuwanatala-indah-permai-rangkap-jabatan",
  "category": "Aksi Korporasi",
  "title": "MGNA Satu Grup dengan Bhuwanatala Indah Permai [Rangkap Jabatan]",
  "deck": "MGNA menyatakan masuk kriteria satu grup perusahaan dengan PT Bhuwanatala Indah Permai Tbk karena ada direksi, komisaris, atau pejabat eksekutif yang merangkap jabatan di kedua emiten.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGNA",
   "Bhuwanatala Indah Permai",
   "keterbukaan informasi",
   "rangkap jabatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fdad6923dd_1aaea41195.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipcc-laba-bersih-turun-6-9-meski-masih-bebas-utang",
  "category": "Aksi Korporasi",
  "title": "IPCC: Laba Bersih [Turun] 6,9% Meski Masih Bebas Utang",
  "deck": "Dalam Public Expose Tahunan, IPCC melaporkan pendapatan dan laba bersih kuartal III 2026 turun dibanding tahun lalu, sementara perusahaan tetap tidak memiliki utang bank maupun obligasi.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCC",
   "public expose",
   "kinerja keuangan",
   "terminal kendaraan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/17bdb956c4_28aacb74b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-panggil-rupslb-rencanakan-ubah-bisnis-dan-akuisisi-nikel",
  "category": "Aksi Korporasi",
  "title": "PACK Panggil RUPSLB, Rencanakan Ubah Bisnis dan [Akuisisi] Nikel",
  "deck": "PACK memanggil RUPSLB dan RUPS Independen 30 November 2026 untuk membahas perubahan bisnis, akuisisi saham PT Bukit Makmur Istindo Nikeltama, dan rencana penerbitan saham baru.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "RUPSLB",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f91345f2bc_b9f69a0a0a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-beli-1-7-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya Beli [1,7 Juta] Saham",
  "deck": "Edwin Soeryadjaya menambah kepemilikan di Saratoga lewat dua transaksi awal November, hak suaranya naik tipis menjadi 36,11 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Edwin Soeryadjaya",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7856-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-kreasi-jasa-persada-tambah-11-57-juta-saham",
  "category": "Aksi Korporasi",
  "title": "PTRO: Kreasi Jasa Persada Tambah [11,57 Juta] Saham",
  "deck": "Pemegang saham Petrosea, Kreasi Jasa Persada, membeli 11,57 juta saham baru di harga Rp2.160, menaikkan hak suaranya jadi 45,443%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "Petrosea",
   "kepemilikan saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-4464-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-harimas-tunggal-perkasa-tambah-7-2-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Harimas Tunggal Perkasa [Tambah] 7,2 Juta Saham",
  "deck": "Harimas Tunggal Perkasa membeli 7,2 juta saham IMPC pada 2-3 November 2026, menaikkan hak suaranya tipis dari 36,03 persen ke 36,05 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "pemegang saham",
   "Impack Pratama Industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-2467-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "omed-komisaris-tambah-500-000-saham-senilai-rp91-juta",
  "category": "Aksi Korporasi",
  "title": "OMED: Komisaris [Tambah] 500.000 Saham Senilai Rp91 Juta",
  "deck": "Komisaris OMED, Siane Soetanto, menambah 500.000 lembar saham seharga Rp182 per saham pada 3 November 2026, menaikkan hak suaranya ke 0,901 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OMED",
   "kepemilikan saham",
   "komisaris",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8058-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkgi-direksi-tambah-143-600-saham-senilai-rp260-lembar",
  "category": "Aksi Korporasi",
  "title": "KKGI: Direksi Tambah [143.600] Saham Senilai Rp260/Lembar",
  "deck": "Direksi Resource Alam Indonesia, Wimpi Salim, membeli 143.600 lembar saham KKGI pada 16 Oktober 2026, menambah kepemilikannya jadi 1.204.696 lembar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "kepemilikan saham",
   "direksi",
   "Resource Alam Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-9617-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bris-terbitkan-sukuk-mudharabah-rp2-triliun-tahap-iii",
  "category": "Aksi Korporasi",
  "title": "BRIS Terbitkan [Sukuk] Mudharabah Rp2 Triliun Tahap III",
  "deck": "BSI menerbitkan sukuk mudharabah senilai Rp2 triliun dalam tiga seri dengan bagi hasil setara 7,00 sampai 7,20 persen per tahun, bagian dari program berkelanjutan senilai Rp10 triliun.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "sukuk",
   "obligasi syariah",
   "pendanaan bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/36b03ef8e4_e250761669.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-setujui-rencana-refloat-5-08-juta-saham-buyback",
  "category": "Aksi Korporasi",
  "title": "AMOR Setujui Rencana [Refloat] 5,08 Juta Saham Buyback",
  "deck": "RUPST AMOR menyetujui pengalihan maksimal 5.084.827 saham hasil buyback secara bertahap dari 10 November 2026 hingga 31 Oktober 2027.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "RUPST",
   "buyback saham",
   "Ashmore Asset Management"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2a1b28714a_21fb2a4176.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "live-jawab-permintaan-bei-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "LIVE Jawab Permintaan BEI soal [Volatilitas] Saham",
  "deck": "PT Homeco Victoria Makmur Tbk menanggapi permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum terbuka ke publik.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIVE",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/17ff4699e5_2300f5d4e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "acst-jadwalkan-rupslb-15-desember-cut-off-20-november",
  "category": "Aksi Korporasi",
  "title": "ACST Jadwalkan [RUPSLB] 15 Desember, Cut-off 20 November",
  "deck": "Acset Indonusa mengumumkan rencana RUPSLB pada 15 Desember 2026, dengan pemegang saham per 20 November 2026 berhak hadir dan usul agenda dibuka hingga 16 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACST",
   "RUPSLB",
   "Acset Indonusa",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7527b9b5b6_157274e9d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-panggil-rupslb-ganti-direktur-utama-30-november",
  "category": "Aksi Korporasi",
  "title": "AYLS panggil RUPSLB, ganti [Direktur Utama] 30 November",
  "deck": "AYLS mengundang pemegang saham ke RUPSLB 30 November 2026 untuk membahas pergantian Direktur Utama, penyesuaian KBLI, dan perubahan Anggaran Dasar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYLS",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c6162af180_e8bfb2ed01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-kepemilikan-cgs-international-susut-lewat-reverse-repo",
  "category": "Aksi Korporasi",
  "title": "ENRG: Kepemilikan CGS International Susut Lewat [Reverse REPO]",
  "deck": "CGS International Sekuritas Indonesia melaporkan kepemilikan sahamnya di ENRG turun dari 7,78% menjadi 6,89% melalui transaksi reverse repo pada 3 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "kepemilikan saham",
   "CGS International",
   "reverse repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-5111-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tguk-vcg-tawar-tender-wajib-rp56-per-saham",
  "category": "Aksi Korporasi",
  "title": "TGUK: VCG Tawar [Tender] Wajib Rp56 per Saham",
  "deck": "VCG menawar beli maksimal 766,7 juta saham publik TGUK senilai Rp42,9 miliar pada Rp56 per saham, periode 9 November-8 Desember 2026, menyusul alih kendali dari DKI.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "tender wajib",
   "akuisisi",
   "VCG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d1042613f4_e8ce916a9c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "port-jadwalkan-pembayaran-dividen-interim-rp35-6-per-saham",
  "category": "Aksi Korporasi",
  "title": "PORT Jadwalkan Pembayaran [Dividen] Interim Rp35,6 per Saham",
  "deck": "PORT menjadwalkan dividen interim tunai Rp100,25 miliar atau Rp35,6 per saham, dengan recording date 18 November dan pembayaran 3 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PORT",
   "dividen interim",
   "pelabuhan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c160b4f28d_920009977f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koka-pastikan-tak-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "KOKA Pastikan Tak Ada Informasi Material di Balik [Volatilitas] Saham",
  "deck": "Merespons permintaan penjelasan Bursa Efek Indonesia, manajemen KOKA menyatakan tidak ada fakta material maupun rencana korporasi yang memicu pergerakan harga sahamnya.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOKA",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/34d9d14204_7061310335.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nfcx-rencanakan-buyback-saham-senilai-rp87-miliar",
  "category": "Aksi Korporasi",
  "title": "NFCX Rencanakan [Buyback] Saham Senilai Rp87 Miliar",
  "deck": "NFC Indonesia (NFCX) akan membeli kembali maksimal 49 juta saham atau 7,35 persen modal disetor senilai hingga Rp87 miliar, periode 9 November 2026 sampai 8 Februari 2027.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NFCX",
   "buyback saham",
   "pembelian kembali saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/457224eb51_8ce264e69e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plas-dibuka-sementara-untuk-transaksi-buyback-jelang-delisting",
  "category": "Aksi Korporasi",
  "title": "PLAS Dibuka Sementara untuk Transaksi [Buyback] Jelang Delisting",
  "deck": "BEI mencabut sementara suspensi saham PLAS khusus di pasar negosiasi Jumat ini, hanya untuk transaksi crossing buyback saham jelang delisting perseroan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLAS",
   "delisting",
   "suspensi saham",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/82e3cd9185_09850bbb43.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rdtx-setujui-stock-split-1-20-saham-beredar-ke-5-37-miliar",
  "category": "Aksi Korporasi",
  "title": "RDTX Setujui [Stock Split] 1:20, Saham Beredar ke 5,37 Miliar",
  "deck": "RUPSLB Roda Vivatex pada 4 November 2026 menyetujui pemecahan saham 1 banding 20, nilai nominal turun dari Rp500 menjadi Rp25 per saham.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RDTX",
   "stock split",
   "RUPSLB",
   "Roda Vivatex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/eb116e33a7_46472931c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scco-ganti-anggota-komite-audit-ketua-tetap-dewan-nyoman",
  "category": "Aksi Korporasi",
  "title": "SCCO Ganti [Anggota] Komite Audit, Ketua Tetap Dewan Nyoman",
  "deck": "Efektif 5 November 2026, Supreme Cable Manufacturing & Commerce mengganti satu anggota komite audit, sementara ketua komite tidak berubah.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCCO",
   "komite audit",
   "tata kelola perusahaan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ece1035318_c20415c47e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-direksi-beli-10-juta-saham-rp2-93-miliar",
  "category": "Aksi Korporasi",
  "title": "AVIA: Direksi [Beli] 10 Juta Saham Rp2,93 Miliar",
  "deck": "Robert Christian Tanoko, direksi Avia Avian, menambah 10 juta saham lewat dua transaksi pada 4 November 2026 senilai total Rp2,93 miliar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "kepemilikan saham",
   "direksi",
   "insider trading"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-2087-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpt-agustus-2026-4-75-naik-dari-februari",
  "category": "Makroekonomi",
  "title": "TPT Agustus 2026 [4,75%], Naik dari Februari",
  "deck": "Tingkat pengangguran terbuka naik tipis dari Februari 2026, tapi masih lebih rendah dibanding Agustus tahun lalu",
  "date": "6 November 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "bps",
   "ketenagakerjaan",
   "pengangguran",
   "tpt"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "kebakaran-landa-menara-pendingin-pabrik-oppm-tak-ganggu-produksi",
  "category": "Aksi Korporasi",
  "title": "Kebakaran Landa [Menara Pendingin] Pabrik OPPM, Tak Ganggu Produksi",
  "deck": "Kebakaran terjadi di sebagian unit menara pendingin pabrik OPPM pada 3 November 2026, berhasil dikendalikan dalam dua jam tanpa korban jiwa.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "kebakaran pabrik",
   "pulp dan kertas",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d5e82e18fc_5609fe8ccd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertumbuhan-uang-primer-bi-oktober-melambat-jadi-7-0-persen",
  "category": "Moneter",
  "title": "Pertumbuhan Uang Primer BI Oktober [Melambat] jadi 7,0 Persen",
  "deck": "Bank Indonesia melaporkan uang primer adjusted Oktober 2026 tumbuh 7,0 persen dari setahun lalu, melambat dari 9,3 persen pada September.",
  "date": "6 November 2026",
  "image": "assets/img/brankas-uang-sentral.jpg",
  "tags": [],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pertumbuhan-harga-rumah-primer-melambat-di-triwulan-iii",
  "category": "Makroekonomi",
  "title": "Pertumbuhan Harga Rumah Primer [Melambat] di Triwulan III",
  "deck": "Pertumbuhan harga rumah baru melambat ke 0,58 persen dibanding setahun lalu pada triwulan III 2026, sementara penjualan turun 8,43 persen di seluruh tipe rumah.",
  "date": "6 November 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "properti residensial",
   "harga rumah",
   "penjualan rumah",
   "KPR"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bipp-direksi-safire-tambah-8-4-juta-saham-hak-suara-turun",
  "category": "Aksi Korporasi",
  "title": "BIPP: Direksi Safire Tambah [8,4 Juta] Saham, Hak Suara Turun",
  "deck": "Safire Capital, direksi asing BIPP, membeli tambahan 8,4 juta saham lewat repurchase agreement, tapi hak suaranya turun ke 56,17% karena basis saham perusahaan membesar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "kepemilikan saham",
   "Safire Capital",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1429-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-pemegang-saham-lepas-6-7-juta-saham-hak-suara-ke-7-7",
  "category": "Aksi Korporasi",
  "title": "DEWI: Pemegang saham [lepas] 6,7 juta saham, hak suara ke 7,7%",
  "deck": "Sujito Ngatiman menjual 6,7 juta saham DEWI senilai sekitar Rp1,55 miliar, sehingga hak suaranya turun dari 8,00% menjadi 7,70%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-6545-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "totl-bagikan-dividen-interim-rp136-4-miliar-rp40-per-saham",
  "category": "Aksi Korporasi",
  "title": "TOTL Bagikan [Dividen] Interim Rp136,4 Miliar, Rp40 per Saham",
  "deck": "Total Bangun Persada menetapkan dividen interim tunai Rp40 per saham atau total Rp136,4 miliar, dengan pembayaran pada 4 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "dividen interim",
   "konstruksi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/09e8345e2d_45c5369d28.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-rampungkan-realisasi-dana-obligasi-sukuk-rp2-74-triliun",
  "category": "Aksi Korporasi",
  "title": "LPPI rampungkan [realisasi] dana obligasi-sukuk Rp2,74 triliun",
  "deck": "LPPI melaporkan penggunaan dana dari empat obligasi dan sukuk berkelanjutan senilai total Rp2,74 triliun, mayoritas untuk membayar utang, dengan sisa Rp42,06 miliar masih mengendap di deposito.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b94791b0eb_e9173d36e3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-peduli-kenalkan-urban-farming-lewat-brinita",
  "category": "BUMN",
  "title": "BRI Peduli Kenalkan Urban Farming Lewat [BRInita]",
  "deck": "BRI Peduli memperkenalkan program urban farming berbasis komunitas BRInita di Bandung, mengajak 35 jurnalis menanam dan memanen langsung di lahan warga.",
  "date": "6 November 2026",
  "image": "assets/img/bri-peduli-kenalkan-urban-farming-lewat-brinita.jpg",
  "imageV": "mw4hp8gb",
  "tags": [
   "BRI Peduli",
   "BRInita",
   "urban farming",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476910-bri-peduli-kenalkan-urban-farming-berbasis-komunitas-lewat-brinita-ajak-jurnalis-turun-langsung-bertani-di-kota"
 },
 {
  "slug": "gcc-gresik-beroperasi-umkm-lokal-incar-pasar-baru",
  "category": "UMKM",
  "title": "GCC Gresik [Beroperasi], UMKM Lokal Incar Pasar Baru",
  "deck": "Gresik Convention Center resmi beroperasi sejak 4 November 2026, membuka peluang bisnis bagi UMKM katering, dekorasi, dan event organizer di sekitar kawasan industri Gresik.",
  "date": "6 November 2026",
  "image": "assets/img/gcc-gresik-beroperasi-umkm-lokal-incar-pasar-baru.jpg",
  "imageV": "mw4hp8ul",
  "tags": [
   "GCC",
   "Gresik",
   "UMKM",
   "ekonomi lokal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476908-gresik-convention-center-mulai-beroperasi-umkm-lokal-berpeluang-dapat-pasar-baru"
 },
 {
  "slug": "harga-emas-antam-naik-jadi-rp2-565-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Jadi Rp2.565.000 per Gram",
  "deck": "Harga emas batangan Antam naik Rp8 ribu per gram pada 6 November 2026, sementara harga buyback juga ikut terkerek naik.",
  "date": "6 November 2026",
  "image": "assets/img/harga-emas-antam-naik-jadi-rp2-565-000-per-gram.jpg",
  "imageV": "mw4hp9gz",
  "tags": [
   "emas antam",
   "harga emas",
   "buyback emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476903-harga-emas-antam-hari-ini-6-november-2026-naik-jadi-rp2565000-per-gram-buyback-ikut-melonjak"
 },
 {
  "slug": "mknt-pastikan-tak-ada-info-baru-pengendali-tetap-kunci-saham-uma",
  "category": "Aksi Korporasi",
  "title": "MKNT Pastikan Tak Ada Info Baru, Pengendali Tetap Kunci Saham [UMA]",
  "deck": "MKNT, kini bernama PT Remitra Global International, menegaskan tidak ada info material baru menyusul surat permintaan penjelasan BEI atas volatilitas transaksi sahamnya.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "volatilitas saham",
   "Remitra Global International",
   "Headwell Bintang Energi Hijau"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1f95f1659e_5db40b0f2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-350-000-lembar-saham",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 350.000 Lembar Saham",
  "deck": "Komisaris AKPI Henry Liem melepas 350.000 saham pada 5 November 2026, mengurangi kepemilikannya dari 3,22 juta menjadi 2,87 juta lembar dan hak suara dari 0,526% menjadi 0,469%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-3961-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pthk-siapkan-rp1-triliun-untuk-pelunasan-obligasi-2016",
  "category": "Aksi Korporasi",
  "title": "PTHK Siapkan Rp1 Triliun untuk [Pelunasan] Obligasi 2016",
  "deck": "Hutama Karya (PTHK) menyatakan telah menyediakan dana Rp1 triliun di rekening bank untuk membayar pokok Obligasi Berkelanjutan I Tahap I 2016 yang jatuh tempo 21 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTHK",
   "Hutama Karya",
   "obligasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e8c7f01090_ebd6b96871.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppln-lepas-direktur-distribusi-ke-kursi-dirjen-esdm",
  "category": "Aksi Korporasi",
  "title": "PPLN Lepas Direktur Distribusi ke Kursi [Dirjen] ESDM",
  "deck": "Direktur Distribusi PLN Arsyadany G. Akmalaputri diangkat jadi Dirjen Ketenagalistrikan ESDM, posisinya untuk sementara dirangkap Direktur Niaga M. Fahrur Rozy sambil menunggu RUPS.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPLN",
   "Direksi PLN",
   "Dirjen ESDM",
   "Pergantian Direktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/61cd8fc5f0_7b3604b9a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agrs-gelar-rupslb-ganti-direktur-utama-dan-status-pma",
  "category": "Aksi Korporasi",
  "title": "AGRS Gelar RUPSLB, [Ganti] Direktur Utama dan Status PMA",
  "deck": "Bank IBK Indonesia mengundang RUPSLB 30 November 2026 untuk mengganti direksi dan menegaskan status penanaman modal asing.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRS",
   "RUPSLB",
   "Bank IBK Indonesia",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5a8ad22415_55c9f4bf39.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-akhiri-rencana-jual-saham-kdtn-ke-ruby-mining",
  "category": "Aksi Korporasi",
  "title": "CSIS Akhiri Rencana Jual Saham [KDTN] ke Ruby Mining",
  "deck": "CSIS bersama dua mitranya dan Ruby Mining Hong Kong resmi membatalkan rencana penjualan 86 persen saham PT Puri Sentul Permai (KDTN) yang sudah dinegosiasikan sejak akhir 2025.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSIS",
   "KDTN",
   "akuisisi",
   "Ruby Mining"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e6a1faa9a2_136f920bb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roti-jadwalkan-rupslb-15-desember-catat-batas-pendaftaran",
  "category": "Aksi Korporasi",
  "title": "ROTI Jadwalkan [RUPSLB] 15 Desember, Catat Batas Pendaftaran",
  "deck": "Nippon Indosari Corpindo mengumumkan rencana RUPSLB pada 15 Desember 2026, pemegang saham yang berhak hadir tercatat per 20 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "RUPSLB",
   "Nippon Indosari Corpindo",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/de65d60bd2_eeee44fb2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-tawarkan-obligasi-rp3-33-triliun-dan-us-25-juta",
  "category": "Aksi Korporasi",
  "title": "OPPM Tawarkan [Obligasi] Rp3,33 Triliun dan US$25 Juta",
  "deck": "OPPM menawarkan obligasi rupiah hingga Rp3,33 triliun dan obligasi dolar hingga US$25 juta pada 6-9 November 2026, melengkapi program utang Rp12 triliun yang hampir rampung.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi korporasi",
   "pulp dan kertas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/410bd1d4a4_f8d1ec664b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpri-panggil-rupst-26-november-bahas-realisasi-dana-ipo-2019",
  "category": "Aksi Korporasi",
  "title": "CPRI Panggil RUPST 26 November, Bahas [Realisasi] Dana IPO 2019",
  "deck": "RUPS Tahunan CPRI digelar 26 November 2026 di Jakarta, membahas laporan keuangan 2025, penggunaan laba, auditor baru, realisasi dana IPO 2019, dan susunan direksi-komisaris.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPRI",
   "RUPS Tahunan",
   "properti",
   "dana IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/16a2c2021c_5b35522326.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-dana-obligasi-tahap-ii-baru-terealisasi-36-29",
  "category": "Aksi Korporasi",
  "title": "SMII: Dana Obligasi Tahap II Baru Terealisasi [36,29%]",
  "deck": "PT Sarana Multi Infrastruktur (SMII) melaporkan realisasi dana dua obligasi senilai Rp5,3 triliun ke OJK. Tahap I terpakai penuh, tahap II baru 36,29 persen, sisanya mengendap di deposito.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMII",
   "obligasi korporasi",
   "realisasi dana",
   "pembiayaan infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f7e8d01373_8f5b0e81b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcid-jadwalkan-rupslb-15-desember-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "TCID Jadwalkan [RUPSLB] 15 Desember, Agenda Menyusul",
  "deck": "Mandom Indonesia (TCID) akan menggelar RUPS Luar Biasa pada 15 Desember 2026. Pemegang saham per 20 November 2026 yang berhak hadir dan memberi suara.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCID",
   "Mandom Indonesia",
   "RUPSLB",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d136cc2dfc_b1beafd2c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-siapkan-dana-rp22-5-miliar-untuk-pelunasan-obligasi",
  "category": "Aksi Korporasi",
  "title": "BEXI Siapkan Dana Rp22,5 Miliar untuk [Pelunasan] Obligasi",
  "deck": "Indonesia Eximbank menyatakan telah menyiapkan dana Rp22,5 miliar untuk membayar pokok Obligasi Berkelanjutan IV Tahap VIII Seri C yang jatuh tempo 6 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI",
   "obligasi",
   "LPEI",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d9686603b8_140f2309ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dana-perkebunan-sawit-meluas-ke-petani-kakao-dan-kelapa",
  "category": "Industri",
  "title": "Dana Perkebunan Sawit Meluas ke Petani [Kakao] dan Kelapa",
  "deck": "Pemerintah memperluas mandat dana sawit ke petani kakao dan kelapa, mewajibkan pelaporan ekspor lewat sistem digital sejak Juni 2026, dan mendorong biodiesel B50 sejak Juli 2026.",
  "date": "5 November 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "sawit",
   "kakao",
   "kelapa",
   "BPDP"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7202/perkuat-tata-kelola-perkebunan-pemerintah-dorong-pendanaan-transparansi-dan-keberlanjutan-untuk-kesejahteraan-petani",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "menn-penjualan-ambruk-91-saham-tetap-disuspensi",
  "category": "Aksi Korporasi",
  "title": "MENN: Penjualan Ambruk 91%, Saham Tetap [Disuspensi]",
  "deck": "Materi public expose MENN mengungkap penjualan 2025 ambruk ke Rp704 juta dari Rp8,05 miliar dan rugi Rp17,15 miliar, sementara sahamnya masih disuspensi BEI sejak 29 Oktober 2025.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "suspensi saham",
   "laporan keuangan",
   "perubahan pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/231a76cc1e_373ac7748e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-rinci-pinjaman-sii-rp5-triliun-bunga-7-5-setahun",
  "category": "Aksi Korporasi",
  "title": "DOOH Rinci Pinjaman SII Rp5 Triliun, Bunga [7,5%] Setahun",
  "deck": "Keterbukaan tambahan DOOH merinci isi perjanjian pinjaman Rp5 triliun dari SII, opsi konversi jadi saham, dan pembaruan daftar pemegang saham perusahaan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "pinjaman pemegang saham",
   "akuisisi INET",
   "SII"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/abcf02cd77_26ffc3e799.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-akuisisi-29-88-saham-inet-senilai-rp2-triliun-utang",
  "category": "Aksi Korporasi",
  "title": "DOOH Akuisisi 29,88% Saham INET Senilai Rp2 Triliun [Utang]",
  "deck": "Anak usaha DOOH, CNI, membeli 6,685 miliar saham INET dari AKUN senilai Rp2 triliun yang dibiayai pinjaman dari pemegang saham mayoritas DOOH, PT Sinergi Internasional Investama (SII).",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "INET",
   "akuisisi",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f407c51518_8fe1ea60f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-alihkan-rp120-miliar-dana-ipo-ke-investasi-inet",
  "category": "Aksi Korporasi",
  "title": "DOOH Alihkan [Rp120 Miliar] Dana IPO ke Investasi INET",
  "deck": "DOOH minta persetujuan pemegang saham mengubah penggunaan sisa dana IPO, mengalihkan Rp120 miliar untuk suntikan modal ke anak usaha yang berinvestasi di saham INET.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "penggunaan dana IPO",
   "INET",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/80d152d2df_77935d13ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "realisasi-investasi-bekasi-tembus-rp9-7-triliun-di-semester-i",
  "category": "Bisnis",
  "title": "Realisasi [Investasi] Bekasi Tembus Rp9,7 Triliun di Semester I",
  "deck": "Realisasi investasi Kota Bekasi mencapai Rp9,7 triliun, 81 persen dari target tahunan Rp12,2 triliun, dengan properti naik ke posisi kedua seiring ekspansi kawasan terpadu Summarecon.",
  "date": "5 November 2026",
  "image": "assets/img/realisasi-investasi-bekasi-tembus-rp9-7-triliun-di-semester-i.jpg",
  "imageV": "mw3rzw9s",
  "tags": [
   "bekasi",
   "investasi",
   "properti",
   "summarecon"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476860-realisasi-investasi-kota-bekasi-capai-rp97-triliun-sektor-properti-terus-tumbuh"
 },
 {
  "slug": "dooh-rombak-jadi-holding-bisnis-iklan-pindah-ke-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "DOOH Rombak Jadi [Holding], Bisnis Iklan Pindah ke Anak Usaha",
  "deck": "DOOH menambah KBLI Aktivitas Perusahaan Induk untuk jadi holding company, mengalihkan bisnis iklan ke anak usaha MSS, dan butuh restu RUPSLB pemegang saham.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "RUPSLB",
   "holding company",
   "akuisisi INET"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/443dfe22eb_32f1bbc930.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-rencanakan-rights-issue-154-7-miliar-saham-rasio-20-1",
  "category": "Aksi Korporasi",
  "title": "DOOH Rencanakan [Rights Issue] 154,7 Miliar Saham, Rasio 20:1",
  "deck": "DOOH akan menerbitkan saham baru sebanyak-banyaknya 154,7 miliar lembar untuk melunasi utang Rp2 triliun ke pengendali SII dan membiayai ekspansi infrastruktur AI, dengan dilusi hingga 95,24 persen.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "rights issue",
   "PMHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e3e0f5adbc_f402220840.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cx-week-2026-soroti-customer-experience-bagi-umkm",
  "category": "UMKM",
  "title": "CX Week 2026 Soroti [Customer Experience] bagi UMKM",
  "deck": "The Bridge Academy menggelar konferensi CX Week 2026 di Jakarta Selatan dan meluncurkan buku baru untuk mendorong pelaku UMKM hingga korporat memperbaiki layanan pelanggan.",
  "date": "5 November 2026",
  "image": "assets/img/cx-week-2026-soroti-customer-experience-bagi-umkm.jpg",
  "imageV": "mw3rzwpo",
  "tags": [
   "UMKM",
   "customer experience",
   "pelayanan pelanggan",
   "bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476858-mengupas-tuntas-pentingnya-interaksi-pelanggan-bagi-pelaku-usaha-umkm-hingga-korporat"
 },
 {
  "slug": "futr-jadwalkan-rupslb-14-desember-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "FUTR Jadwalkan [RUPSLB] 14 Desember, Agenda Belum Diumumkan",
  "deck": "FUTR menjadwalkan RUPSLB elektronik pada 14 Desember 2026. Pemegang saham yang tercatat per 19 November berhak hadir, sementara agenda rapat belum diumumkan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUTR",
   "RUPSLB",
   "tata kelola",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7a6c697149_1f96b3b66b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ahy-proyek-air-limbah-pluit-tekan-ekstraksi-air-tanah",
  "category": "Makroekonomi",
  "title": "AHY: Proyek Air Limbah Pluit [Tekan] Ekstraksi Air Tanah",
  "deck": "Menko Infra AHY menyebut progres proyek pengolahan air limbah JSDP Zona 1 Pluit di Jakarta Utara sudah 76 persen, dengan target menekan penyedotan air tanah penyebab tanah ambles.",
  "date": "5 November 2026",
  "image": "assets/img/ahy-proyek-air-limbah-pluit-tekan-ekstraksi-air-tanah.jpg",
  "imageV": "mw3rzx6o",
  "tags": [
   "AHY",
   "Jakarta Utara",
   "air tanah",
   "IPAL Pluit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476845-menko-ahy-sebut-proyek-pembangunan-jsdp-zona-1-pluit-oleh-kemen-pu-tekan-penggunaan-air-tanah"
 },
 {
  "slug": "cita-tegaskan-tak-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "CITA Tegaskan Tak Terlibat [Penyelidikan] Karhutla Singapura",
  "deck": "Cita Mineral Investindo menjawab permintaan penjelasan BEI soal pemanggilan Pemerintah Singapura ke grup usaha agribisnis terafiliasi terkait investigasi karhutla, dan menyatakan tidak terlibat.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITA",
   "karhutla",
   "Bursa Efek Indonesia",
   "Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b1ef77d120_7e37c66e82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-raih-rating-ida-untuk-obligasi-rp1-25-triliun",
  "category": "Aksi Korporasi",
  "title": "WIFI Raih Rating [idA] untuk Obligasi Rp1,25 Triliun",
  "deck": "PEFINDO menetapkan rating idA (Single A) untuk tiga seri Obligasi Berkelanjutan I WIFI senilai total Rp1,25 triliun, berlaku 3 November 2026 hingga 1 November 2027.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "obligasi",
   "PEFINDO",
   "rating"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/758dbca71a_6201875009.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgjo-dirikan-anak-usaha-energi-lestari-cemerlang",
  "category": "Aksi Korporasi",
  "title": "PGJO Dirikan [Anak Usaha] Energi Lestari Cemerlang",
  "deck": "PT Bahtera Bumi Raya Tbk mendirikan anak usaha baru, PT Energi Lestari Cemerlang, untuk masuk ke bisnis pengisian daya kendaraan listrik dan sewa alat berat senilai Rp500 juta.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "anak usaha",
   "transaksi afiliasi",
   "kendaraan listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/771cc5e2c5_b48ee557b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-ri-triwulan-iii-tumbuh-5-47-persen",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Triwulan III [Tumbuh] 5,47 Persen",
  "deck": "Pertumbuhan ekonomi Indonesia triwulan III 2026 naik menjadi 5,47 persen, ditopang belanja pemerintah dan investasi yang menguat.",
  "date": "5 November 2026",
  "image": "assets/img/keranjang-belanja-ibu.jpg",
  "tags": [
   "pertumbuhan ekonomi",
   "Bank Indonesia",
   "PDB",
   "triwulan III 2026"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "wika-anak-usaha-wikon-digugat-pkpu-oleh-kreditur",
  "category": "Aksi Korporasi",
  "title": "WIKA: Anak Usaha WIKON Digugat [PKPU] oleh Kreditur",
  "deck": "WIKA melaporkan ke OJK bahwa anak usahanya, WIKON, menjadi pihak tergugat dalam permohonan PKPU yang diajukan PT Gajah Mas Tehnik di Pengadilan Niaga Jakarta Pusat.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "PKPU",
   "WIKON",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4d01f62a36_5d2cfa3b45.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-hadirkan-ruang-pintar-untuk-52-anak-desa-sade",
  "category": "BUMN",
  "title": "PNM Hadirkan [Ruang Pintar] untuk 52 Anak Desa Sade",
  "deck": "PNM membuka fasilitas belajar Ruang Pintar bagi 52 anak di Desa Sade, Lombok Tengah, sebagai bagian dari program tanggung jawab sosial sekaligus pemulihan pascakebakaran yang melanda desa itu.",
  "date": "5 November 2026",
  "image": "assets/img/pnm-hadirkan-ruang-pintar-untuk-52-anak-desa-sade.jpg",
  "imageV": "mw3knfn1",
  "tags": [
   "PNM",
   "Desa Sade",
   "Lombok Tengah",
   "TJSL"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476831-dari-kearifan-lokal-desa-sade-pnm-hadirkan-ruang-pintar-untuk-menumbuhkan-mimpi-dan-masa-depan-anak"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-47-persen-pada-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh [5,47] Persen pada Triwulan III 2026",
  "deck": "Ekonomi Indonesia tumbuh 5,47 persen pada triwulan III 2026, naik dari 5,29 persen pada triwulan sebelumnya, didorong lonjakan belanja pemerintah dan konsumsi rumah tangga.",
  "date": "5 November 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "Pertumbuhan Ekonomi",
   "PDB Triwulan III",
   "Investasi",
   "Stimulus Akhir Tahun"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7201/ekonomi-indonesia-triwulan-iii-2026-tumbuh-547-fundamental-kuat-jaga-momentum-pertumbuhan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "minyak-nilam-resmi-masuk-daftar-komoditas-srg",
  "category": "Bisnis",
  "title": "Minyak Nilam Resmi Masuk Daftar Komoditas [SRG]",
  "deck": "Kementerian Perdagangan menjadikan minyak nilam komoditas ke-31 yang bisa disimpan dalam Sistem Resi Gudang, membuka jalur pembiayaan baru bagi petani dan penyuling.",
  "date": "5 November 2026",
  "image": "assets/img/kemasan-produk-gudang.jpg",
  "tags": [
   "Sistem Resi Gudang",
   "Minyak Nilam",
   "Bappebti",
   "Kementerian Perdagangan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-perdagangan-komoditas-unggulan-indonesia-kemendag-menetapkan-minyak-nilam-menjadi-komoditas-srg",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "sbat-jadi-sasaran-tender-saham-mbst-harga-rp2-per-lembar",
  "category": "Aksi Korporasi",
  "title": "SBAT Jadi Sasaran [Tender] Saham MBST, Harga Rp2 per Lembar",
  "deck": "MBST menawar tender sukarela maksimal 51,52 persen saham SBAT seharga Rp2 per lembar, senilai hingga Rp4,9 miliar, dengan pembayaran dijadwalkan 18 Januari 2027.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SBAT",
   "tender sukarela",
   "MBST",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d2d762a1e1_c8e7f48f50.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tirt-bantah-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "TIRT Bantah Terlibat Penyelidikan [Karhutla] Singapura",
  "deck": "Tirta Mahakam Resources menegaskan ke BEI bahwa dirinya dan grupnya tidak menjadi subjek penyelidikan Pemerintah Singapura atas kebakaran hutan dan lahan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TIRT",
   "karhutla",
   "Bursa Efek Indonesia",
   "Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/52c13be528_cb03cffcbb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-ungkap-risiko-msci-dan-target-free-float-15-di-pubex",
  "category": "Aksi Korporasi",
  "title": "PGEO Ungkap Risiko [MSCI] dan Target Free Float 15% di Pubex",
  "deck": "Dalam public expose 3 November 2026, manajemen PGEO membahas risiko penurunan klasifikasi pasar modal Indonesia oleh MSCI, rencana menaikkan free float ke 15%, serta progres proyek dan pembiayaan panas bumi.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "public expose",
   "MSCI",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/74d6d65924_a8e5a542c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-siapkan-rights-issue-danantara-bayar-pakai-saham-gmfi",
  "category": "Aksi Korporasi",
  "title": "GIAA Siapkan Rights Issue, Danantara Bayar Pakai Saham [GMFI]",
  "deck": "Garuda mengoreksi keterbukaan rights issue dan menegaskan Danantara akan membayar haknya dengan menyetor saham GMFI, bukan tunai, menyusul rampungnya pengalihan saham tersebut ke Danantara.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "GMFI",
   "Danantara",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/050ad1ebf8_62f8eb6572.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-alihkan-rp46-39-miliar-dana-obligasi-minta-restu-rupo",
  "category": "Aksi Korporasi",
  "title": "TOBA Alihkan Rp46,39 Miliar Dana Obligasi, Minta Restu [RUPO]",
  "deck": "TOBA mengusulkan mengalihkan Rp46,39 miliar dana obligasi, yang semula untuk setoran modal ke anak usaha TMU, menjadi modal kerja perseroan. Keputusan diambil dalam RUPO 19 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "RUPO",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a37c161719_602a6e4dcb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-alihkan-rp89-miliar-dana-obligasi-ke-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "TOBA Alihkan Rp89 Miliar Dana Obligasi ke [Modal Kerja]",
  "deck": "TBS Energi Utama (TOBA) mengalihkan Rp89 miliar dana obligasi dari rencana setoran modal ke anak usaha limbah AMES menjadi modal kerja, menunggu persetujuan RUPO 19 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "RUPO",
   "TBS Energi Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e502d09a24_10d3135235.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-bayar-mandiri-sekuritas-rp16-miliar-untuk-rombak-bancassurance",
  "category": "Aksi Korporasi",
  "title": "BBTN Bayar Mandiri Sekuritas [Rp16 Miliar] untuk Rombak Bancassurance",
  "deck": "BBTN menunjuk Mandiri Sekuritas sebagai lead advisor penyusunan ulang kemitraan bancassurance senilai Rp16 miliar, tergolong transaksi afiliasi karena sama-sama dikendalikan negara.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "transaksi afiliasi",
   "Mandiri Sekuritas",
   "bancassurance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ec35d6f6b4_eecd4f5d05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-panggil-ulang-rupslb-bahas-rights-issue-dan-akuisisi",
  "category": "Aksi Korporasi",
  "title": "KOTA Panggil Ulang RUPSLB, Bahas [Rights Issue] dan Akuisisi",
  "deck": "PT DMS Propertindo Tbk (KOTA) menjadwal ulang RUPSLB ke 27 November 2026, membahas rights issue, saham seri baru, dan akuisisi dua perusahaan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7d03d0b2c4_7e0bd418c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tarif-listrik-tidak-naik-lonjakan-tagihan-karena-cuaca-panas",
  "category": "Energi",
  "title": "Tarif Listrik [Tidak] Naik, Lonjakan Tagihan karena Cuaca Panas",
  "deck": "FKBI menegaskan tarif listrik Triwulan IV 2026 tidak naik. Tagihan yang terasa membesar dipicu cuaca panas yang mendorong pemakaian AC lebih banyak.",
  "date": "5 November 2026",
  "image": "assets/img/tarif-listrik-tidak-naik-lonjakan-tagihan-karena-cuaca-panas.jpg",
  "imageV": "mw3ji4o1",
  "tags": [
   "tarif listrik",
   "PLN",
   "cuaca panas",
   "konsumen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476820-tarif-listrik-tidak-naik-masyarakat-diminta-bijak-kelola-pemakaian"
 },
 {
  "slug": "vico-ganti-dirut-dan-komisaris-utama-tunggu-restu-ojk",
  "category": "Aksi Korporasi",
  "title": "VICO Ganti [Dirut] dan Komisaris Utama, Tunggu Restu OJK",
  "deck": "Direksi dan komisaris utama VICO berganti efektif 27 Oktober 2026 setelah OJK meloloskan uji kelayakan Untung Woenardi dan Sari Idayanti.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "pergantian direksi",
   "OJK",
   "konglomerasi keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9c961aebd8_ea52a100fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jmas-laba-bersih-anjlok-86-jadi-rp398-juta-di-2025",
  "category": "Aksi Korporasi",
  "title": "JMAS: Laba Bersih [Anjlok] 86% Jadi Rp398 Juta di 2025",
  "deck": "Laba bersih JMAS turun drastis dari Rp2,83 miliar menjadi Rp398 juta pada 2025, sementara liabilitas ke pemegang polis melonjak 160 persen.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JMAS",
   "asuransi syariah",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/08a7c80688_033c92fe41.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-rencana-pengambilalihan-ruby-mining-dibatalkan",
  "category": "Aksi Korporasi",
  "title": "KDTN: Rencana Pengambilalihan Ruby Mining [Dibatalkan]",
  "deck": "Rencana Ruby Mining Hongkong Limited mengambil alih 86 persen saham KDTN dari tiga pemegang saham lama resmi dibatalkan pada 5 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "pengambilalihan",
   "akuisisi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/37ea5a8fa2_7ab1db80af.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-gelar-rupslb-27-november-putuskan-transaksi-sbth",
  "category": "Aksi Korporasi",
  "title": "TOBA Gelar RUPSLB 27 November, Putuskan Transaksi [SBTH]",
  "deck": "RUPSLB TOBA digelar 27 November 2026 untuk menyetujui rencana investasi ke SBTH Asia Holdings, transaksi yang nilainya di atas separuh ekuitas perusahaan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "RUPSLB",
   "Transaksi Material",
   "SBTH"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9e0f7b8b69_72e8d0101a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-koreksi-pengumuman-bagikan-saham-treasuri-ke-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "PSSI Koreksi Pengumuman, Bagikan [Saham Treasuri] ke Pemegang Saham",
  "deck": "Perseroan mengoreksi keterbukaan informasi sebelumnya: aksi korporasi ini bukan bonus saham dari laba, tapi distribusi saham treasuri ke pemegang saham dengan rasio 30:1.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "aksi korporasi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/49cd74d7ef_c70c7233b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-catat-rugi-rp26-9-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "ASBI Catat [Rugi] Rp26,9 Miliar di Kuartal III 2026",
  "deck": "Asuransi Bintang membalik laba jadi rugi Rp26,9 miliar pada sembilan bulan 2026, seiring ekuitas turun 21,8 persen menjadi Rp360,1 miliar.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "asuransi",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105170710-65692-0/FinancialStatement-2026-III-ASBI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-bagikan-saham-treasuri-172-juta-lembar-bukan-bonus-laba",
  "category": "Aksi Korporasi",
  "title": "PSSI Bagikan [Saham Treasuri] 172 Juta Lembar, Bukan Bonus Laba",
  "deck": "IMC Pelita Logistik (PSSI) membagikan 172 juta saham treasuri ke pemegang saham dengan rasio 1:30, senilai Rp17,2 miliar, efektif 27 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "aksi korporasi",
   "IMC Pelita Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a3180369e5_21fbca31e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemuda-lampung-unjuk-karya-umkm-dapat-modal",
  "category": "UMKM",
  "title": "Pemuda Lampung Unjuk Karya, UMKM Dapat [Modal]",
  "deck": "Ribuan pemuda Lampung berkumpul di Nusantara Youth Expo 2026, acara yang juga menyalurkan bantuan modal ke pelaku UMKM sambil membahas kesiapan ekonomi generasi muda menuju 2045.",
  "date": "5 November 2026",
  "image": "assets/img/pemuda-lampung-unjuk-karya-umkm-dapat-modal.jpg",
  "imageV": "mw3ji53g",
  "tags": [
   "UMKM",
   "Pemuda",
   "Lampung",
   "Indonesia Emas 2045"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476806-menjemput-indonesia-emas-2045-ribuan-pemuda-unjuk-kreativitas-dan-inovasi"
 },
 {
  "slug": "meta-koreksi-tanggal-cum-ex-dividen-interim-bayar-3-desember",
  "category": "Aksi Korporasi",
  "title": "META [Koreksi] Tanggal Cum-Ex Dividen Interim, Bayar 3 Desember",
  "deck": "Nusantara Infrastructure mengoreksi tanggal cum dan ex dividen interim Rp3,50 per saham di tiga pasar, tanggal pembayaran tetap 3 Desember 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "dividen interim",
   "corporate action",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b365a48dc4_cee8d0302e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-dan-abpednas-dorong-literasi-keuangan-desa",
  "category": "UMKM",
  "title": "PNM dan ABPEDNAS Dorong [Literasi Keuangan] Desa",
  "deck": "PNM dan ABPEDNAS teken MoU memperluas literasi keuangan dan pendampingan usaha desa, menyasar jaringan tiga asosiasi dengan 1,2 juta anggota.",
  "date": "5 November 2026",
  "image": "assets/img/pnm-dan-abpednas-dorong-literasi-keuangan-desa.jpg",
  "imageV": "mw3ji5i5",
  "tags": [
   "PNM",
   "ABPEDNAS",
   "literasi keuangan",
   "pemberdayaan desa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476805-literasi-keuangan-jadi-tantangan-ekonomi-desa-pnm-dan-abpednas-dorong-pendampingan"
 },
 {
  "slug": "kejaksaan-ikut-awasi-penyaluran-pupuk-subsidi-di-karo",
  "category": "BUMN",
  "title": "Kejaksaan Ikut [Awasi] Penyaluran Pupuk Subsidi di Karo",
  "deck": "Kejaksaan Negeri Karo akan memantau langsung penyaluran pupuk bersubsidi sampai ke kios usai Pupuk Indonesia mensosialisasikan aturan teknis baru yang berlaku sejak September 2026.",
  "date": "5 November 2026",
  "image": "assets/img/kejaksaan-ikut-awasi-penyaluran-pupuk-subsidi-di-karo.jpg",
  "imageV": "mw3d2ym0",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Subsidi",
   "Kejaksaan",
   "Karo"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/901/pupuk-indonesia-bersama-kajari-sinergi-perbaiki-tata-kelola-penyaluran-pupuk-bersubsidi-di-karo",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "alokasi-npk-kakao-mamuju-bertambah-500-ton-jadi-5-670-ton",
  "category": "BUMN",
  "title": "Alokasi NPK Kakao Mamuju [Bertambah] 500 Ton Jadi 5.670 Ton",
  "deck": "Pemda Mamuju menambah alokasi pupuk subsidi NPK Kakao 500 ton jadi 5.670 ton lewat realokasi kedua berlaku sejak 30 Oktober 2026; realisasi penyaluran sudah 82,4 persen.",
  "date": "5 November 2026",
  "image": "assets/img/alokasi-npk-kakao-mamuju-bertambah-500-ton-jadi-5-670-ton.jpg",
  "imageV": "mw3d30tg",
  "tags": [
   "Pupuk Indonesia",
   "NPK Kakao",
   "Mamuju",
   "pupuk subsidi"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/902/alokasi-bertambah-pupuk-indonesia-amankan-ketersediaan-dan-penyaluran-npk-kakao-di-mamuju",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "cabai-dan-telur-surplus-di-mataram-kemendag-pantau-jelang-nataru",
  "category": "Makroekonomi",
  "title": "Cabai dan Telur [Surplus] di Mataram, Kemendag Pantau Jelang Nataru",
  "deck": "Menteri Perdagangan Budi Santoso mendapati harga cabai dan telur di Pasar Kebon Roek Mataram di bawah harga acuan, dengan surplus pasokan dialihkan ke daerah lain yang kekurangan jelang Nataru.",
  "date": "5 November 2026",
  "image": "assets/img/cabai-dan-telur-surplus-di-mataram-kemendag-pantau-jelang-nataru.jpg",
  "imageV": "mw3d3adn",
  "tags": [
   "Kemendag",
   "Harga Pangan",
   "Nataru",
   "Cabai"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-pantau-pasar-kebon-roek-mataram-cabai-dan-telur-ayam-surplus-jelang-nataru",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pasar-murah-di-mataram-beras-sphp-rp11-600-per-kg",
  "category": "Bisnis",
  "title": "Pasar Murah di Mataram, Beras SPHP [Rp11.600] per Kg",
  "deck": "Kementerian Perdagangan menggelar pasar murah di Mataram, NTB, menjual beras, minyak goreng, gula, dan bumbu dapur di bawah harga eceran tertinggi.",
  "date": "5 November 2026",
  "image": "assets/img/pasar-murah-di-mataram-beras-sphp-rp11-600-per-kg.jpg",
  "imageV": "mw3d3f3e",
  "tags": [],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-sinergi-mendag-busan-buka-pasar-murah-di-mataram-jaga-harga-bapok",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "zp-waran-untr-tak-alami-penyesuaian-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "ZP: Waran UNTR Tak Alami [Penyesuaian] usai Dividen Tunai",
  "deck": "Maybank Sekuritas (ZP) menegaskan dua waran terstruktur UNTRZPCZ6A dan UNTRZPCM7A tidak disesuaikan meski UNTR membagikan dividen tunai pada 28 Oktober 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "UNTR",
   "waran terstruktur",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7d4975bdc9_d3fe23dc27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rony-balik-untung-kuartal-iii-arus-kas-operasi-justru-negatif",
  "category": "Aksi Korporasi",
  "title": "RONY Balik Untung Kuartal III, Arus Kas Operasi Justru [Negatif]",
  "deck": "Laba bersih RONY tembus Rp1,85 miliar pada sembilan bulan 2026 berkat lonjakan jasa truk listrik dan gasifikasi batu bara, tapi kas dari operasi minus dan utang ke induk usaha di luar negeri melonjak.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RONY",
   "laporan keuangan",
   "arus kas",
   "pinjaman pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105153429-65742-0/FinancialStatement-2026-III-RONY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kren-liabilitas-naik-26-ekuitas-induk-negatif",
  "category": "Aksi Korporasi",
  "title": "KREN: Liabilitas Naik 26%, Ekuitas Induk [Negatif]",
  "deck": "Total liabilitas KREN naik 26,14 persen menjadi Rp956,2 miliar pada September 2026, sementara ekuitas yang jadi hak pemegang saham induk berbalik negatif Rp1,03 miliar.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KREN",
   "laporan keuangan interim",
   "liabilitas",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105152615-64918-0/FinancialStatement-2026-III-KREN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-terima-pinjaman-us-10-juta-dari-pemegang-saham-kbank",
  "category": "Aksi Korporasi",
  "title": "BMAS Terima [Pinjaman] US$10 Juta dari Pemegang Saham KBank",
  "deck": "Bank Kasikorn Indonesia memperoleh fasilitas pinjaman bilateral US$10 juta dari induk usahanya di Thailand untuk menopang likuiditas jangka pendek dan penyaluran kredit.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "Bank Kasikorn Indonesia",
   "pinjaman afiliasi",
   "KBank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2b5a4c6b64_1e00ea4c98.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-rights-issue-rp59-5-m-lewat-inbreng-saham-tambang",
  "category": "Aksi Korporasi",
  "title": "LAPD Rights Issue Rp59,5 M Lewat [Inbreng] Saham Tambang",
  "deck": "Leyand International menawarkan saham baru lewat hak memesan efek terlebih dahulu senilai maksimal Rp59,5 miliar, dibayar lewat suntikan 87,5% saham tambang BSS oleh pemegang saham pengendali JSI Sinergi Mas.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "akuisisi tambang",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/280315e5a8_684037eb76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gjtl-jelaskan-lonjakan-liabilitas-21-9-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "GJTL Jelaskan Lonjakan [Liabilitas] 21,9% ke Bursa",
  "deck": "Liabilitas Gajah Tunggal naik Rp2,45 triliun dalam sembilan bulan, didorong kenaikan utang usaha dan utang bank jangka pendek akibat harga bahan baku dan pelemahan rupiah.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GJTL",
   "Gajah Tunggal",
   "laporan keuangan",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105135932-65738-0/FinancialStatement-2026-III-GJTL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-47-di-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh [5,47%] di Triwulan III 2026",
  "deck": "BPS catat pertumbuhan ekonomi naik 0,18 poin dari triwulan sebelumnya dan jadi yang tertinggi kedua dalam setahun terakhir.",
  "date": "5 November 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "ekonomi",
   "bps",
   "pertumbuhan ekonomi",
   "pdb"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "truk-pukul-rata-kanan-tender-saham-incar-jadi-pengendali",
  "category": "Aksi Korporasi",
  "title": "TRUK: Pukul Rata Kanan Tender Saham, Incar Jadi [Pengendali]",
  "deck": "PT Pukul Rata Kanan menawar beli maksimal 65,25 juta saham TRUK atau 15 persen senilai Rp740 per saham, untuk menambah kepemilikannya menjadi 30 persen dan menjadi pengendali baru.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "tender offer",
   "pengendali saham",
   "Pukul Rata Kanan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b5e477962e_6f37f7874f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bima-dirut-dan-wadirut-primarindo-mundur-bersamaan",
  "category": "Aksi Korporasi",
  "title": "BIMA: Dirut dan Wadirut Primarindo [Mundur] Bersamaan",
  "deck": "Direktur Utama Bambang Setiyono dan Wakil Direktur Utama David Jahja mengajukan pengunduran diri efektif 1 Januari 2027, menunggu keputusan RUPS.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIMA",
   "Primarindo Asia Infrastructure",
   "pergantian direksi",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e25cead8b0_6120a8e135.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-koreksi-jadwal-rupslb-agenda-rights-issue-frisian-flag",
  "category": "Aksi Korporasi",
  "title": "ULTJ Koreksi Jadwal RUPSLB, Agenda [Rights Issue] Frisian Flag",
  "deck": "RUPSLB ULTJ digelar Jumat, 6 November 2026, membahas rights issue, akuisisi penuh Frisian Flag Indonesia, pergantian direksi, dan dividen tambahan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "RUPSLB",
   "Frisian Flag",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/89c6af697e_aa9771dbeb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fwct-rugi-rp45-8-miliar-penjualan-anjlok-47-persen",
  "category": "Aksi Korporasi",
  "title": "FWCT Rugi Rp45,8 Miliar, Penjualan [Anjlok] 47 Persen",
  "deck": "Laporan interim kuartal III 2026 FWCT menunjukkan penjualan turun hampir separuh, perusahaan berbalik rugi, arus kas operasional negatif, dan ekuitas menyusut.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "Wijaya Cahaya Timber",
   "laporan keuangan",
   "rugi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105114229-65561-0/FinancialStatement-2026-III-FWCT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-rugi-rp97-2-miliar-ekuitas-tergerus-jadi-negatif",
  "category": "Aksi Korporasi",
  "title": "TAMA rugi Rp97,2 miliar, ekuitas tergerus jadi [negatif]",
  "deck": "Laporan keuangan interim TAMA per September 2026 menunjukkan rugi bersih melonjak dan ekuitas berbalik negatif akibat penurunan nilai properti investasi.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "laporan keuangan",
   "properti",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105104206-65736-0/FinancialStatement-2026-III-TAMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tujuh-produk-indonesia-menang-g-mark-2026-di-jepang",
  "category": "Industri",
  "title": "Tujuh Produk Indonesia [Menang] G-Mark 2026 di Jepang",
  "deck": "Tujuh produk manufaktur Indonesia, dari motor listrik hingga kursi kayu, meraih penghargaan desain G-Mark 2026 di Jepang, menambah total jadi 67 produk sejak 2017.",
  "date": "5 November 2026",
  "image": "assets/img/tujuh-produk-indonesia-menang-g-mark-2026-di-jepang.jpg",
  "imageV": "mw2zynzh",
  "tags": [
   "G-Mark",
   "Desain Produk",
   "Manufaktur",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tujuh-produk-indonesia-raih-g-mark-2026-bukti-kreativitas-manufaktur-indonesia-makin-diakui",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "smcb-panggil-rupslb-bahas-aktivasi-bisnis-dagang-bahan-bangunan",
  "category": "Aksi Korporasi",
  "title": "SMCB Panggil RUPSLB, Bahas [Aktivasi] Bisnis Dagang Bahan Bangunan",
  "deck": "RUPSLB SMCB digelar 27 November 2026, membahas aktivasi lini usaha dagang bahan konstruksi dan pendelegasian persetujuan RKAP 2027 ke komisaris.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "RUPSLB",
   "Solusi Bangun Indonesia",
   "RKAP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6ebb4764e5_908f0dcd2f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-tuntaskan-divestasi-85-saham-kb-bukopin-finance-rp340-miliar",
  "category": "Aksi Korporasi",
  "title": "BBKP Tuntaskan [Divestasi] 85% Saham KB Bukopin Finance Rp340 Miliar",
  "deck": "KB Bank merampungkan penjualan 85% saham PT KB Bukopin Finance senilai Rp339,97 miliar kepada JB Woori Capital asal Korea Selatan, dan kini hanya menyisakan 14,24% kepemilikan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "divestasi",
   "KB Bukopin Finance",
   "JB Woori Capital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8548bc5d61_8ca32cf227.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "issp-siapkan-buyback-rp150-miliar-batasi-harga-rp600",
  "category": "Aksi Korporasi",
  "title": "ISSP Siapkan Buyback [Rp150 Miliar], Batasi Harga Rp600",
  "deck": "ISSP mengalokasikan Rp150 miliar kas internal untuk membeli kembali hingga 250 juta saham atau 3,48 persen saham beredar, harga maksimal Rp600 per saham, berlangsung hingga awal Februari 2027.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISSP",
   "buyback saham",
   "pasar modal",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/39a305aca5_c65ff71b46.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untd-laba-kotor-ambrol-jadi-rp1-2-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "UNTD: Laba Kotor [Ambrol] jadi Rp1,2 Miliar di Kuartal III",
  "deck": "Laba kotor UNTD ambrol ke Rp1,2 miliar pada sembilan bulan 2026, dari Rp82,9 miliar setahun sebelumnya, seiring rugi usaha melebar jadi Rp42 miliar.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTD",
   "Terang Dunia Internusa",
   "kinerja keuangan",
   "motor listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/38fe2a8da5_b05e134367.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipm-indonesia-2026-naik-jadi-76-59-didorong-semua-indikator",
  "category": "Makroekonomi",
  "title": "IPM Indonesia 2026 [Naik] jadi 76,59, Didorong Semua Indikator",
  "deck": "Indeks Pembangunan Manusia Indonesia 2026 mencapai 76,59, naik 0,69 poin dari tahun sebelumnya, ditopang kenaikan di seluruh komponen penyusunnya.",
  "date": "5 November 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "IPM",
   "BPS",
   "Kesejahteraan",
   "Pendidikan"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/171255",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "indeks-bisnis-manufaktur-ekspansi-di-triwulan-iii-2026",
  "category": "Industri",
  "title": "Indeks Bisnis Manufaktur [Ekspansi] di Triwulan III 2026",
  "deck": "IKBM triwulan III 2026 mencapai 52,75, tanda ekspansi industri manufaktur didorong pesanan, produksi, tenaga kerja, dan stok, meski waktu kirim melambat.",
  "date": "5 November 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "IKBM",
   "Industri Manufaktur",
   "BPS",
   "Triwulan III 2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/181143",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ekonomi-indonesia-tumbuh-5-47-di-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi Indonesia Tumbuh [5,47%] di Triwulan III-2026",
  "deck": "BPS mencatat produk domestik bruto RI naik 5,47 persen secara tahunan pada triwulan III-2026, ditopang belanja pemerintah dan ekspor.",
  "date": "5 November 2026",
  "image": "assets/img/bendungan.jpg",
  "tags": [
   "PDB",
   "BPS",
   "Pertumbuhan Ekonomi",
   "Triwulan III 2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/169700",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "pyfa-terbitkan-obligasi-rp650-miliar-di-tengah-rugi-besar",
  "category": "Aksi Korporasi",
  "title": "PYFA Terbitkan [Obligasi] Rp650 Miliar di Tengah Rugi Besar",
  "deck": "PYFA melanjutkan program obligasi Rp1,5 triliun lewat tahap II senilai hingga Rp650 miliar berbunga 10-10,5 persen per tahun, menambah utang saat perusahaan baru melaporkan rugi besar.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PYFA",
   "obligasi korporasi",
   "pasar modal",
   "utang korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ced0d1a968_22c6011ff4.pdf",
  "sourceLabel": "IDX"
 },
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
  "slug": "bei-lanjutkan-suspensi-saham-menn-dan-soul-akibat-telat-lapor-lk",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] Saham MENN dan SOUL Akibat Telat Lapor LK",
  "deck": "BEI mengoreksi pengumuman sebelumnya dan menegaskan perdagangan saham MENN serta SOUL masih dihentikan karena belum menyampaikan laporan keuangan interim per Juni 2026 dan/atau belum membayar denda.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "SOUL",
   "suspensi saham",
   "Papan Akselerasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/07c61d5d45_2b726dfb08.pdf",
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
  "slug": "dsfi-laba-bersih-naik-51-ke-rp20-miliar-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "DSFI: [Laba] Bersih Naik 51% ke Rp20 Miliar per September 2026",
  "deck": "Laba bersih DSFI naik 51 persen menjadi Rp20,04 miliar pada sembilan bulan pertama 2026, didorong kenaikan penjualan, meski utang bank jangka pendek juga melonjak.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSFI",
   "laporan keuangan",
   "kuartal III 2026",
   "industri perikanan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261104144928-65734-0/FinancialStatement-2026-III-DSFI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtps-nihil-pendapatan-rugi-melebar-ke-rp6-77-miliar",
  "category": "Aksi Korporasi",
  "title": "MTPS Nihil Pendapatan, [Rugi] Melebar ke Rp6,77 Miliar",
  "deck": "Emiten konstruksi berstatus pemantauan khusus ini tak mencatat pendapatan selama sembilan bulan berturut-turut, sementara kerugian membesar dan ekuitas terus menyusut.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTPS",
   "laporan keuangan interim",
   "konstruksi",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261104144918-65701-0/FinancialStatement-2026-III-MTPS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oasa-rombak-rencana-pakai-dana-rights-issue-rp469-5-miliar",
  "category": "Aksi Korporasi",
  "title": "OASA [Rombak] Rencana Pakai Dana Rights Issue Rp469,5 Miliar",
  "deck": "RUPSLB 11 Desember 2026 akan memutuskan realokasi dana rights issue OASA senilai sekitar Rp469,5 miliar dari proyek IKN dan PSEL Semarang menjadi modal kerja grup.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OASA",
   "RUPSLB",
   "rights issue",
   "Maharaksa Biru Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0c960d91b3_d382f81c71.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-rasio-waran-terstruktur-medcbqcz6a-usai-dividen-medc",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan Rasio [Waran Terstruktur] MEDCBQCZ6A Usai Dividen MEDC",
  "deck": "Penerbit waran terstruktur MEDCBQCZ6A menyesuaikan rasio dan harga pelaksanaan setelah MEDC membagikan dividen tunai US$30 juta, dengan pembayaran dijadwalkan 2 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "MEDC",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cf464eef1f_933a7bacaa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-waran-tapgbqcz6a-usai-dividen-tapg",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan [Waran] TAPGBQCZ6A Usai Dividen TAPG",
  "deck": "Korea Investment Sekuritas Indonesia (BQ) menyesuaikan rasio dan harga pelaksanaan waran terstruktur TAPGBQCZ6A menyusul dividen tunai Rp70 per saham TAPG yang efektif 11 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "TAPG",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/62340a6bd8_898774b88a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "skbm-laba-bersih-melonjak-120-ke-rp120-2-miliar",
  "category": "Aksi Korporasi",
  "title": "SKBM: Laba Bersih [Melonjak] 120% ke Rp120,2 Miliar",
  "deck": "Penjualan Sekar Bumi (SKBM) naik 29,7 persen dan laba bersih melonjak 120,8 persen pada sembilan bulan pertama 2026, didukung arus kas operasi yang berbalik positif.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SKBM",
   "Sekar Bumi",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261104140415-65731-0/FinancialStatement-2026-III-SKBM.pdf",
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
  "image": "assets/img/koperasi-desa.jpg",
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
  "image": "assets/img/pedagang-bawang.jpg",
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
  "image": "assets/img/timbangan-pasar.jpg",
  "tags": [
   "inflasi",
   "harga pangan",
   "Bank Indonesia",
   "tarif pesawat"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823826.aspx",
  "sourceLabel": "Bank Indonesia"
 }
];
