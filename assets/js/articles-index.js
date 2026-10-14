// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/buruh-pabrik.jpg",
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
  "image": "assets/img/gudang-bahan-baku.jpg",
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
  "image": "assets/img/pabrik-gula.jpg",
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
  "image": "assets/img/batik-umkm.jpg",
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
  "image": "assets/img/global-pelabuhan.jpg",
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
  "image": "assets/img/kapal-batubara.jpg",
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
  "image": "assets/img/tambang-mineral.jpg",
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
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "DEFA",
   "ASEAN",
   "Kemendag",
   "perdagangan digital"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perkuat-kompetensi-aparatur-dalam-tata-kelola-perdagangan-digital-asean",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "sehari-jelang-tei-2026-buyer-dari-134-negara-terdaftar",
  "category": "Bisnis",
  "title": "Sehari Jelang TEI 2026, Buyer dari [134] Negara Terdaftar",
  "deck": "Kemendag meninjau kesiapan Trade Expo Indonesia ke-41 di ICE BSD, Tangerang, yang dibuka Rabu (14/10) dengan calon buyer dari 134 negara dan 1.873 perusahaan peserta.",
  "date": "13 Oktober 2026",
  "image": "assets/img/negosiasi-dagang-meja.jpg",
  "tags": [
   "TEI 2026",
   "Kemendag",
   "ekspor",
   "pameran dagang"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/sehari-menuju-tei-2026-mendag-busan-indonesia-siap-sambut-buyer-dari-seluruh-dunia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "wsbp-jadwalkan-rupslb-kedua-konversi-utang-jadi-saham",
  "category": "Aksi Korporasi",
  "title": "WSBP Jadwalkan RUPSLB Kedua [Konversi Utang] jadi Saham",
  "deck": "PT Waskita Beton Precast Tbk (WSBP) menjadwalkan RUPSLB Kedua pada 23 Oktober 2026 untuk meminta restu pemegang saham atas rencana konversi utang kreditur menjadi saham baru lewat penambahan modal tanpa HMETD.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "PMTHMETD",
   "RUPSLB",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9f7f2d1374_de88f8dee9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-catatkan-obligasi-rp3-3-triliun-di-bursa",
  "category": "Aksi Korporasi",
  "title": "SMII Catatkan [Obligasi] Rp3,3 Triliun di Bursa",
  "deck": "BEI mencatatkan tiga seri obligasi SMII senilai total Rp3,3 triliun mulai 14 Oktober 2026, dengan bunga 7,15 sampai 7,65 persen dan jatuh tempo bertahap hingga 2031.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMII",
   "obligasi korporasi",
   "pasar modal",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b739e93078_d113de7b8d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpri-minta-perpanjangan-waktu-ke-bei-kas-anjlok-92",
  "category": "Aksi Korporasi",
  "title": "CPRI minta perpanjangan waktu ke BEI, [kas anjlok 92%]",
  "deck": "CPRI meminta perpanjangan waktu ke BEI hingga 16 Oktober 2026, sembari mengungkap kas yang anjlok 92 persen dan beban administrasi yang melampaui pendapatan pada laporan keuangan 2022.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPRI",
   "properti",
   "going concern",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/183ce5a897_0fcbe40844.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-ajukan-buyback-saham-hingga-rp1-triliun-di-rupslb",
  "category": "Aksi Korporasi",
  "title": "BTPS Ajukan [Buyback] Saham Hingga Rp1 Triliun di RUPSLB",
  "deck": "BTPN Syariah mengajukan rencana pembelian kembali saham senilai maksimal Rp1 triliun lewat RUPSLB hari ini, didukung laba bersih Rp655 miliar pada semester I 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "buyback saham",
   "RUPSLB",
   "perbankan syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0700a65913_d15045ad7f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-setop-sementara-waran-brna-w-pada-14-15-oktober",
  "category": "Aksi Korporasi",
  "title": "BEI Setop Sementara [Waran] BRNA-W pada 14-15 Oktober",
  "deck": "Bursa Efek Indonesia meniadakan perdagangan Waran Seri I Berlina Tbk (BRNA-W) di seluruh pasar mulai sesi pertama 14 Oktober hingga 15 Oktober 2026, terkait proses pencatatan saham baru perseroan.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRNA",
   "BRNA-W",
   "waran",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Peniadaan Waran BRNA-W 261013-No. Peng-00194BEI.POP10-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-panggil-rupslb-kedua-soal-konversi-utang-jadi-saham",
  "category": "Aksi Korporasi",
  "title": "WSBP Panggil RUPSLB Kedua Soal [Konversi] Utang Jadi Saham",
  "deck": "Setelah RUPS pertama gagal kuorum, WSBP menjadwalkan ulang rapat pada 23 Oktober 2026 untuk mengesahkan konversi utang Rp1,72 triliun menjadi saham baru.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "RUPSLB",
   "konversi utang",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/589ca26fbf_68fb837190.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-panggil-rupsu-minta-penundaan-bayar-bagi-hasil-sukuk",
  "category": "Aksi Korporasi",
  "title": "WIKA Panggil RUPSU, Minta [Penundaan] Bayar Bagi Hasil Sukuk",
  "deck": "WIKA mengundang pemegang Sukuk Mudharabah Berkelanjutan I Tahap II 2021 ke RUPSU 28 Oktober 2026 untuk membahas penundaan pembayaran bagi hasil dan perubahan jatuh tempo.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c2e93bf65c_ffc9214e97.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmes-4-manajer-investasi-gabung-lahir-danareksa-im",
  "category": "Aksi Korporasi",
  "title": "XMES: 4 Manajer Investasi [Gabung], Lahir Danareksa IM",
  "deck": "Pengelola reksa dana XMES, PT Mandiri Manajemen Investasi, resmi gabung dengan BNI AM, BRI MI, dan PNM IM menjadi PT Danareksa Investment Management Indonesia efektif 1 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMES",
   "manajer investasi",
   "merger BUMN",
   "Danareksa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/63cf2bbc9e_a6febb2533.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tufi-tunjuk-komisaris-independen-baru-tunggu-uji-ojk",
  "category": "Aksi Korporasi",
  "title": "TUFI tunjuk [komisaris independen] baru, tunggu uji OJK",
  "deck": "Komisaris independen baru TUFI, Ahmad Bahtiar Sebayang, menunggu uji kelayakan OJK sebelum menggantikan Fendy Eventius Mugni.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TUFI",
   "Mandiri Tunas Finance",
   "komisaris independen",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c91c66ec69_b3e523e6f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmsk-empat-manajer-investasi-gabung-jadi-danareksa-im",
  "category": "Aksi Korporasi",
  "title": "XMSK: Empat Manajer Investasi Gabung Jadi [Danareksa IM]",
  "deck": "Manajer investasi pengelola ETF XMSK berganti nama jadi PT Danareksa Investment Management Indonesia setelah bergabung dengan BNI AM, BRI MI, dan PNM IM, efektif 1 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMSK",
   "Danareksa Investment Management Indonesia",
   "merger manajer investasi",
   "reksa dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0d9d06a024_8085f15fbd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-raih-peringkat-ke-8-layanan-terbaik-bumn",
  "category": "BUMN",
  "title": "Pegadaian Raih Peringkat [Ke-8] Layanan Terbaik BUMN",
  "deck": "Pegadaian masuk 10 besar BUMN dengan layanan terbaik dalam penilaian pengalaman pelanggan pertama yang digelar Danantara untuk seluruh BUMN.",
  "date": "13 Oktober 2026",
  "image": "assets/img/pegadaian-raih-peringkat-ke-8-layanan-terbaik-bumn.jpg",
  "imageV": "mv6p9tak",
  "tags": [
   "pegadaian",
   "bumn",
   "danantara",
   "cx100 award"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472774-wujud-nyata-transformasi-layanan-pegadaian-tembus-top-10-bumn-layanan-terbaik-dalam-danantara-indonesia-cx100-award-2026"
 },
 {
  "slug": "xmlf-penggabungan-mmi-bni-am-bri-mi-pnm-im-jadi-danareksa-im",
  "category": "Aksi Korporasi",
  "title": "XMLF: [Penggabungan] MMI-BNI AM-BRI MI-PNM IM jadi Danareksa IM",
  "deck": "Manajer investasi XMLF berganti nama jadi Danareksa Investment Management Indonesia usai merger dengan BNI AM, BRI MI, dan PNM IM; modal disetor naik jadi Rp182,92 miliar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMLF",
   "Danareksa Investment Management Indonesia",
   "Penggabungan Manajer Investasi",
   "Reksa Dana ETF"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/09e46aa10f_ea9e757552.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtps-jual-gedung-kantor-rp94-5-m-penilai-sebut-tidak-wajar",
  "category": "Aksi Korporasi",
  "title": "MTPS Jual Gedung Kantor Rp94,5 M, Penilai Sebut [Tidak Wajar]",
  "deck": "MTPS akan menjual gedung kantornya ke KETR senilai Rp94,5 miliar, tapi penilai independen menyebut harga itu tidak wajar. RUPS digelar 24 November 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTPS",
   "Ketrosden Triasmitra",
   "transaksi material",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6dadc5848d_82962ab0bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-mknt-ungkap-syarat-buka-lagi-saham-di-paparan-publik",
  "category": "Aksi Korporasi",
  "title": "[Suspensi] MKNT Ungkap Syarat Buka Lagi Saham di Paparan Publik",
  "deck": "Direksi Remitra Global International (MKNT) memaparkan syarat pencabutan suspensi saham dan kondisi utilisasi pabrik baja Citra Baru Steel dalam public expose insidentil 9 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "suspensi saham",
   "public expose",
   "Citra Baru Steel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/51c234ecce_3b64305047.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-bagi-dividen-interim-rp5-saham-total-rp273-4-miliar",
  "category": "Aksi Korporasi",
  "title": "IMPC Bagi [Dividen] Interim Rp5/Saham, Total Rp273,4 Miliar",
  "deck": "PT Impack Pratama Industri Tbk (IMPC) membagikan dividen interim tunai Rp5 per saham senilai total Rp273,4 miliar, dibayarkan 30 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "dividen interim",
   "corporate action",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c00a26a766_6cf9a62d40.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdif-penggabungan-4-manajer-investasi-bumn-jadi-danareksa-im",
  "category": "Aksi Korporasi",
  "title": "XDIF: [Penggabungan] 4 Manajer Investasi BUMN Jadi Danareksa IM",
  "deck": "Empat manajer investasi pelat merah, termasuk pengelola XDIF, resmi bergabung jadi PT Danareksa Investment Management Indonesia per 1 Oktober 2026, modal disetornya naik jadi Rp182,92 miliar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDIF",
   "Danareksa Investment Management",
   "Penggabungan Manajer Investasi",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a20f1fdf8d_0ac3121b8a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tugu-realisasi-dana-ipo-89-modal-ke-anak-usaha-tertunda",
  "category": "Aksi Korporasi",
  "title": "TUGU: Realisasi Dana IPO 89%, Modal ke Anak Usaha [Tertunda]",
  "deck": "PT Asuransi Tugu Pratama Indonesia Tbk melaporkan realisasi dana IPO 2018 sudah 88,98 persen per Juni 2026, sementara sisa Rp72,6 miliar untuk penyertaan modal ke anak usaha belum rampung.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TUGU",
   "IPO",
   "penggunaan dana",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7cef549d1a_db1346dca5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "alto-kena-sanksi-bei-denda-rp150-juta-telat-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "ALTO Kena [Sanksi] BEI, Denda Rp150 Juta Telat Laporan Keuangan",
  "deck": "BEI menjatuhkan Peringatan Tertulis III dan denda Rp150 juta kepada ALTO karena belum menyerahkan laporan keuangan interim per 30 Juni 2026 hingga tenggat 29 September 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALTO",
   "Tri Banyan Tirta",
   "sanksi BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c479f54cee_1b4646417e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-sanksi-70-emiten-termasuk-sril-dan-pgas-soal-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "BEI [Sanksi] 70 Emiten Termasuk SRIL dan PGAS Soal Laporan Keuangan",
  "deck": "BEI menjatuhkan peringatan tertulis dan denda hingga Rp150 juta kepada 70 perusahaan tercatat yang telat menyerahkan laporan keuangan interim per 30 Juni 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEI",
   "sanksi emiten",
   "PGAS",
   "SRIL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/48a49375da_59a83cfedb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdes-bri-mi-gabung-ke-danareksa-investment-management-indonesia",
  "category": "Aksi Korporasi",
  "title": "XDES: BRI MI [Gabung] ke Danareksa Investment Management Indonesia",
  "deck": "Manajer investasi di belakang ETF syariah berkode XDES berganti badan hukum setelah BNI AM, BRI MI, dan PNM Investment Management bergabung ke Danareksa Investment Management Indonesia, efektif 1 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDES",
   "Danareksa Investment Management",
   "merger manajer investasi",
   "BRI MI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/af3f93b186_dfbbc6d145.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-koreksi-laporan-realisasi-dana-obligasi-sukuk-rp2-5-t",
  "category": "Aksi Korporasi",
  "title": "WIFI Koreksi Laporan [Realisasi] Dana Obligasi-Sukuk Rp2,5 T",
  "deck": "WIFI baru merealisasikan Rp47,3 miliar atau 1,92 persen dari Rp2,5 triliun dana obligasi dan sukuk untuk proyek internet nirkabel TKP; sisanya masih mengendap di giro bank.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "obligasi",
   "sukuk",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/562b84fea9_904c4abbe7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-koreksi-realisasi-dana-rights-issue-capex-baru-22",
  "category": "Aksi Korporasi",
  "title": "WIFI Koreksi Realisasi Dana Rights Issue, [Capex] Baru 22%",
  "deck": "Realisasi penggunaan dana rights issue WIFI senilai Rp5,89 triliun per 30 Juni 2026 baru 22,48 persen, jauh di bawah rencana 85,9 persen untuk belanja modal proyek FWA.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "rights issue",
   "penggunaan dana",
   "FWA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e86cf55e3e_cfb3e5cc53.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmmx-koreksi-laporan-realisasi-dana-ipo-sisa-nihil",
  "category": "Aksi Korporasi",
  "title": "DMMX Koreksi Laporan [Realisasi] Dana IPO, Sisa Nihil",
  "deck": "PT Digital Mediatama Maxima Tbk mengoreksi laporan realisasi dana IPO 2019, seluruh Rp603,06 miliar hasil bersih telah terpakai habis untuk modal kerja, teknologi, dan SDM.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMMX",
   "penggunaan dana IPO",
   "laporan keterbukaan",
   "digital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f85166cc0e_508a6beeda.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-siapkan-pmhmetd-terbitkan-22-03-miliar-saham-baru",
  "category": "Aksi Korporasi",
  "title": "GMFI Siapkan PMHMETD, Terbitkan [22,03 Miliar] Saham Baru",
  "deck": "GMFI berencana menerbitkan hingga 22,03 miliar saham baru Seri B lewat PMHMETD III senilai nominal Rp19 per saham, untuk dimintakan persetujuan RUPSLB pada 19 November 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "PMHMETD",
   "RUPSLB",
   "Garuda Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e9f3545c35_7d4a111fad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-jadwalkan-rupslb-19-november-bahas-pmhmetd-iii",
  "category": "Aksi Korporasi",
  "title": "GMFI Jadwalkan RUPSLB 19 November, Bahas [PMHMETD] III",
  "deck": "GMF Aero Asia akan menggelar RUPSLB pada 19 November 2026 untuk membahas rencana PMHMETD III, dengan tenggat pendaftaran pemegang saham 27 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "RUPSLB",
   "PMHMETD",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c2034f99fa_e598deebe3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "merk-akui-impairment-rp87-miliar-kontrak-p-g-berakhir-2027",
  "category": "Aksi Korporasi",
  "title": "MERK Akui [Impairment] Rp87 Miliar, Kontrak P&G Berakhir 2027",
  "deck": "Public expose Merck Tbk mengungkap impairment Rp87 miliar akibat berakhirnya kontrak manufaktur dengan P&G pada 2027, di tengah laba semester I 2026 yang melonjak 396 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MERK",
   "impairment",
   "public expose",
   "Merck Tbk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/607d69fcab_c0fe9f1281.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-panggil-rupslb-konfirmasi-pengendali-baru-dari-tender-offer",
  "category": "Aksi Korporasi",
  "title": "KETR Panggil RUPSLB, Konfirmasi Pengendali Baru dari [Tender Offer]",
  "deck": "PT Ketrosden Triasmitra Tbk memanggil RUPSLB pada 12 November 2026 untuk mengonfirmasi pengendali baru pasca penawaran tender sukarela, sekaligus mengubah susunan direksi dan komisaris.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "RUPSLB",
   "tender offer",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/440b31c7cf_a4531c72a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hilirisasi-ri-geser-fokus-ke-industri-baterai-listrik",
  "category": "Industri",
  "title": "Hilirisasi RI Geser Fokus ke Industri [Baterai] Listrik",
  "deck": "Realisasi investasi hilirisasi RI capai Rp300,1 triliun pada semester I 2026, sementara fokus kebijakan bergeser ke industri baterai listrik dan BESS.",
  "date": "13 Oktober 2026",
  "image": "assets/img/hilirisasi-ri-geser-fokus-ke-industri-baterai-listrik.jpg",
  "imageV": "mv6j1xxu",
  "tags": [
   "hilirisasi",
   "mineral kritis",
   "investasi",
   "baterai listrik"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/hilirisasi-masuki-babak-baru-daya-saing-rantai-nilai-global-jadi-perhatian",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "ekspor-perdana-baterai-litium-iwip-dimulai-7-proyek-baru",
  "category": "Industri",
  "title": "Ekspor Perdana Baterai Litium IWIP [Dimulai], 7 Proyek Baru",
  "deck": "Presiden Prabowo Subianto meresmikan ekspor perdana sel baterai litium dan groundbreaking tujuh proyek baru di kawasan industri IWIP, Halmahera Tengah, Maluku Utara.",
  "date": "13 Oktober 2026",
  "image": "assets/img/ekspor-perdana-baterai-litium-iwip-dimulai-7-proyek-baru.jpg",
  "imageV": "mv6j20ux",
  "tags": [
   "IWIP",
   "Hilirisasi Nikel",
   "Baterai Kendaraan Listrik",
   "Maluku Utara"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/peresmian-ekspor-perdana-baterai-kendaraan-listrik-dan-groundbreaking-proyek-strategis-iwip-halmahera-tengah",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "mendag-dan-menko-pangan-cek-koperasi-merah-putih-di-sukoharjo",
  "category": "UMKM",
  "title": "Mendag dan Menko Pangan [Cek] Koperasi Merah Putih di Sukoharjo",
  "deck": "Mendag Budi Santoso dan Menko Pangan Zulkifli Hasan mengecek langsung operasional tiga koperasi desa di Sukoharjo, bagian dari pemantauan ke 107 KDKMP yang sudah berjalan di seluruh Indonesia.",
  "date": "13 Oktober 2026",
  "image": "assets/img/mendag-dan-menko-pangan-cek-koperasi-merah-putih-di-sukoharjo.jpg",
  "imageV": "mv6j27cm",
  "tags": [
   "Koperasi Merah Putih",
   "Kementerian Perdagangan",
   "Sukoharjo",
   "Bapok"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pantau-berjalannya-koperasi-merah-putih-di-sukoharjo-mendag-busan-dan-menko-zulhas-turun-lapangan-bersama",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bltz-bukukan-rugi-rp14-7-miliar-di-kuartal-ii-2026",
  "category": "Aksi Korporasi",
  "title": "BLTZ Bukukan [Rugi] Rp14,7 Miliar di Kuartal II 2026",
  "deck": "Materi paparan publik insidentil BLTZ menunjukkan pendapatan turun 16,6 persen dan laba bersih berbalik jadi rugi Rp14,7 miliar pada kuartal II 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "CGV",
   "paparan publik",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bcdbf98de5_c96136098b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yupi-revisi-laporan-dana-ipo-rp541-miliar-belum-terpakai",
  "category": "Aksi Korporasi",
  "title": "YUPI Revisi Laporan Dana IPO, [Rp541 Miliar] Belum Terpakai",
  "deck": "Yupi mengoreksi laporan dana IPO: baru Rp55,3 miliar modal kerja terealisasi, sisa Rp541,37 miliar masih di deposito menunggu pembangunan pabrik Nganjuk pada 2027.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YUPI",
   "penggunaan dana IPO",
   "pasar modal",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2d025933ba_b391fceb57.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewa-pastikan-penyajian-ulang-keuangan-tak-langgar-kovenan",
  "category": "Aksi Korporasi",
  "title": "DEWA Pastikan Penyajian Ulang Keuangan Tak Langgar [Kovenan]",
  "deck": "Darma Henwa menjawab permintaan penjelasan Bursa soal penyajian kembali laporan keuangan 2025, menegaskan tak ada dampak ke kewajiban utang di tengah rencana pencatatan efek bersifat utang.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWA",
   "Darma Henwa",
   "obligasi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ed4c1724cb_00e5bea252.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-pastikan-tak-ada-penyesuaian-waran-amrt-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "ZP Pastikan Tak Ada Penyesuaian Waran [AMRT] usai Dividen Tunai",
  "deck": "Maybank Sekuritas memastikan tidak ada penyesuaian syarat waran terstruktur AMRTZPCZ6A dan AMRTZPCK7A menyusul dividen tunai AMRT yang diumumkan 5 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "AMRT",
   "waran terstruktur",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b05a71c0c2_cd3499c227.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bni-dukung-24-umkm-kuliner-tampil-di-motogp-mandalika",
  "category": "UMKM",
  "title": "BNI Dukung 24 UMKM [Kuliner] Tampil di MotoGP Mandalika",
  "deck": "BNI memfasilitasi 24 pelaku UMKM kuliner berjualan dengan mesin EDC dan QRIS di sirkuit Mandalika selama MotoGP Indonesia 2026, 9-11 Oktober.",
  "date": "13 Oktober 2026",
  "image": "assets/img/bni-dukung-24-umkm-kuliner-tampil-di-motogp-mandalika.jpg",
  "imageV": "mv6j27s5",
  "tags": [
   "BNI",
   "UMKM",
   "MotoGP Mandalika",
   "QRIS"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472732-bni-dukung-24-umkm-lokal-tampil-di-motogp-mandalika-2026"
 },
 {
  "slug": "ptpp-panggil-rupsu-ke-4-untuk-sukuk-mudharabah-seri-b",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPSU Ke-4 untuk [Sukuk] Mudharabah Seri B",
  "deck": "PP (Persero) Tbk akan menggelar rapat pemegang sukuk mudharabah pada 10 November 2026, rapat keempat untuk emisi yang sama.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "Sukuk",
   "RUPSU",
   "Wali Amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d0d3906689_7dbcb96404.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hits-laba-semester-i-2026-anjlok-63-pendapatan-naik-5-6",
  "category": "Aksi Korporasi",
  "title": "HITS: Laba Semester I 2026 [Anjlok] 63%, Pendapatan Naik 5,6%",
  "deck": "Laporan keuangan interim HITS semester I 2026 menunjukkan laba bersih turun 63 persen dan bagian pemegang saham induk anjlok 74,5 persen, meski pendapatan naik 5,6 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HITS",
   "laporan keuangan",
   "laba bersih",
   "emiten pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261013154021-64491-0/FinancialStatement-2026-II-HITS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-panggil-rupst-bahas-dividen-dan-pengalihan-saham-buyback",
  "category": "Aksi Korporasi",
  "title": "AMOR Panggil RUPST, Bahas Dividen dan [Pengalihan] Saham Buyback",
  "deck": "AMOR mengundang pemegang saham ke RUPST Tahunan pada 4 November 2026, dengan agenda pembagian laba bersih, pengalihan saham hasil buyback, dan penyesuaian KBLI 2025.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "RUPST",
   "dividen",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fb82a84bfd_2071409465.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vici-direksi-jual-402-48-juta-saham-senilai-rp301-86-m-divestasi",
  "category": "Aksi Korporasi",
  "title": "VICI: Direksi Jual 402,48 Juta Saham Senilai Rp301,86 M [Divestasi]",
  "deck": "Direksi VICI, SUKSES SEJATI SEJAHTERA, melepas 402,48 juta saham senilai Rp301,86 miliar pada 9 Oktober 2026, hak suaranya turun dari 84,95% jadi 78,95%.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "kepemilikan saham",
   "direksi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-6521-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbmf-jadwalkan-rupst-tahunan-pada-4-desember-2026",
  "category": "Aksi Korporasi",
  "title": "CBMF Jadwalkan RUPST Tahunan pada [4 Desember] 2026",
  "deck": "PT Cahaya Bintang Medan Tbk (CBMF) menjadwalkan RUPST tahun buku 2025 pada 4 Desember 2026 di Jakarta Selatan, dengan pencatatan pemegang saham pada 27 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBMF",
   "RUPST",
   "Cahaya Bintang Medan",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4447198666_26b7b6acb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mark-jadwalkan-rupslb-pada-19-november-2026",
  "category": "Aksi Korporasi",
  "title": "MARK Jadwalkan [RUPSLB] pada 19 November 2026",
  "deck": "Mark Dynamics Indonesia (MARK) mengumumkan rencana RUPSLB pada 19 November 2026 di Deli Serdang, dengan daftar pemegang saham berhak hadir ditutup 27 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MARK",
   "RUPSLB",
   "Mark Dynamics Indonesia",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d94e26e37a_8c9eb3a645.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-direksi-johan-hutauruk-jual-10-000-saham",
  "category": "Aksi Korporasi",
  "title": "JECX: Direksi Johan Hutauruk [Jual] 10.000 Saham",
  "deck": "Direksi JECX Johan A M M Hutauruk melepas 10.000 saham lewat mekanisme repurchase agreement, namun hak suaranya di perusahaan tetap 0,58 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Nitrasanata Dharma",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-1309-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-lunasi-obligasi-rp2-98-triliun-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "OPPM lunasi [obligasi] Rp2,98 triliun jatuh tempo",
  "deck": "PT OKI Pulp & Paper Mills (OPPM) melunasi pokok empat instrumen utang, obligasi, sukuk mudharabah, obligasi dolar, dan obligasi hijau, senilai total Rp2,98 triliun plus US$1,06 juta pada 12 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi",
   "pelunasan utang",
   "pulp dan kertas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/89662fe27e_e48be90ccb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aturan-baru-djp-pembayaran-pajak-dahulukan-pokok-utang",
  "category": "Makroekonomi",
  "title": "Aturan Baru DJP: Pembayaran Pajak [Dahulukan] Pokok Utang",
  "deck": "PMK-71/2026 mengubah urutan pembayaran utang pajak, pokok utang dilunasi lebih dulu sebelum sanksi, agar wajib pajak lebih cepat menuntaskan kewajibannya.",
  "date": "13 Oktober 2026",
  "image": "assets/img/aturan-baru-djp-pembayaran-pajak-dahulukan-pokok-utang.jpg",
  "imageV": "mv6dl1h3",
  "tags": [
   "pajak",
   "DJP",
   "PMK-71/2026",
   "utang pajak"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/pemerintah-permudah-penyelesaian-kewajiban-perpajakan",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "mrat-direksi-beli-7-200-saham-nilainya-mini",
  "category": "Aksi Korporasi",
  "title": "MRAT: Direksi [Beli] 7.200 Saham, Nilainya Mini",
  "deck": "Direksi Mustika Ratu, Jodi Andrea Suryo Kusumo, membeli 7.200 saham MRAT secara tidak langsung senilai sekitar Rp2,9 juta, menaikkan kepemilikannya jadi 116.900 lembar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MRAT",
   "Mustika Ratu",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-0736-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-pemegang-saham-pengendali-geo-energy-tambah-100-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SMMT: Pemegang Saham [Pengendali] GEO Energy Tambah 100 Juta Saham",
  "deck": "Geo Energy Investama membeli 100 juta saham baru SMMT di harga Rp3.800, mengangkat hak suaranya dari 67,24% menjadi 70,16%.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "Kepemilikan Saham",
   "Konsentrasi Saham",
   "Golden Eagle Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-2438-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-lunasi-dua-obligasi-us-7-3-juta",
  "category": "Aksi Korporasi",
  "title": "INKP [Lunasi] Dua Obligasi US$7,3 Juta",
  "deck": "Indah Kiat Pulp & Paper melunasi pokok dua seri obligasi dolar AS senilai total US$7,3 juta kepada pemegang obligasi pada 12 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "Indah Kiat Pulp & Paper",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/055a1cb89a_b87ccce8d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atap-jelaskan-lonjakan-transaksi-saham-utama-masih-negosiasi",
  "category": "Aksi Korporasi",
  "title": "ATAP Jelaskan Lonjakan Transaksi, Saham Utama Masih [Negosiasi]",
  "deck": "Bursa Efek Indonesia meminta ATAP menjelaskan lonjakan transaksi pada 6 Oktober 2026, saat volume saham melompat lebih dari lima kali lipat dan harga naik 6,78 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATAP",
   "volatilitas saham",
   "pemegang saham utama",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/21e3fe00a1_50739c55b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "banjir-padang-kementerian-pu-turunkan-pompa-dan-ekskavator",
  "category": "Bisnis",
  "title": "Banjir Padang, Kementerian PU Turunkan [Pompa] dan Ekskavator",
  "deck": "Luapan Sungai Batang Air Dingin rendam sekitar 200 rumah di Padang. Kementerian PU kirim pompa dan excavator untuk tangani darurat sekaligus rencanakan perbaikan tanggul permanen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/banjir-padang-kementerian-pu-turunkan-pompa-dan-ekskavator.jpg",
  "imageV": "mv6dl20a",
  "tags": [
   "banjir Padang",
   "Kementerian PU",
   "Sungai Batang Air Dingin",
   "mitigasi bencana"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472706-atasi-banjir-luapan-sungai-di-kota-padang-kementerian-pu-kerahkan-pompa-dan-excavator"
 },
 {
  "slug": "gdyr-jadwalkan-rupslb-19-november-dps-27-oktober",
  "category": "Aksi Korporasi",
  "title": "GDYR Jadwalkan RUPSLB 19 November, [DPS] 27 Oktober",
  "deck": "Goodyear Indonesia mengumumkan rencana RUPSLB pada 19 November 2026 di Bogor, dengan tanggal pencatatan pemegang saham 27 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GDYR",
   "RUPSLB",
   "Goodyear Indonesia",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1156e5ef2f_9d1cc9a888.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "biif-pertahankan-peringkat-idaaa-dari-pefindo",
  "category": "Aksi Korporasi",
  "title": "BIIF Pertahankan Peringkat [idAAA] dari Pefindo",
  "deck": "Pefindo kembali menetapkan peringkat idAAA/Stable untuk PT Maybank Indonesia Finance (BIIF) periode 7 Oktober 2026 hingga 1 Oktober 2027, sama seperti periode sebelumnya.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIIF",
   "Pefindo",
   "peringkat kredit",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1bb6f08964_6bbb65254c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mentrans-gandeng-peking-university-riset-kawasan-transmigrasi",
  "category": "Industri",
  "title": "Mentrans Gandeng Peking University [Riset] Kawasan Transmigrasi",
  "deck": "Menteri Transmigrasi Iftitah mengajak Peking University menjajaki riset bersama di kawasan transmigrasi, dengan Salor-Wanam di Merauke sebagai kandidat utama.",
  "date": "13 Oktober 2026",
  "image": "assets/img/mentrans-gandeng-peking-university-riset-kawasan-transmigrasi.jpg",
  "imageV": "mv6dl2fr",
  "tags": [
   "transmigrasi",
   "Peking University",
   "Merauke",
   "kerja sama Indonesia-Tiongkok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472696-mentrans-jajaki-riset-dengan-peking-university-untuk-kembangkan-kawasan-transmigrasi"
 },
 {
  "slug": "bni-salurkan-bantuan-ke-korban-banjir-padang",
  "category": "BUMN",
  "title": "BNI [Salurkan] Bantuan ke Korban Banjir Padang",
  "deck": "BNI menyalurkan bantuan darurat berupa air bersih, beras, dan selimut bagi ratusan warga yang mengungsi akibat banjir di Padang, Sumatera Barat.",
  "date": "13 Oktober 2026",
  "image": "assets/img/bni-salurkan-bantuan-ke-korban-banjir-padang.jpg",
  "imageV": "mv6dl38k",
  "tags": [
   "BNI",
   "Banjir Padang",
   "Sumatera Barat",
   "BPBD"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472694-bni-bergerak-cepat-beri-bantuan-untuk-warga-terdampak-banjir-di-sumatera-barat"
 },
 {
  "slug": "jecx-komisaris-admar-anwar-beli-30-000-saham",
  "category": "Aksi Korporasi",
  "title": "JECX: Komisaris Admar Anwar Beli [30.000] Saham",
  "deck": "Komisaris JECX, DR. Admar Anwar, membeli 30.000 saham senilai Rp39 juta pada 2 Oktober 2026, menambah kepemilikannya jadi 12,7 juta lembar tanpa mengubah hak suara 0,39 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Komisaris",
   "Kepemilikan Saham",
   "Nitrasanata Dharma"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-8261-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-komisaris-beli-lagi-40-000-saham-total-dua-pekan-70-000",
  "category": "Aksi Korporasi",
  "title": "JECX: Komisaris Beli Lagi [40.000] Saham, Total Dua Pekan 70.000",
  "deck": "Komisaris JECX, Dr. Admar Anwar, membeli 40.000 saham tambahan pada 1 Oktober 2026, melengkapi pembelian sebelumnya hingga total 70.000 saham dalam dua pekan.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Komisaris",
   "Kepemilikan Saham",
   "Admar Anwar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-8079-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-prambanan-tuntas-lepas-semua-saham-suara-ke-0",
  "category": "Aksi Korporasi",
  "title": "DOOH: Prambanan [Tuntas] Lepas Semua Saham, Suara ke 0%",
  "deck": "Prambanan Investasi Sukses menjual seluruh 388,4 juta saham DOOH yang tersisa senilai sekitar Rp130,5 miliar, hak suaranya habis dari 5,02% menjadi nol persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Prambanan Investasi Sukses",
   "pemegang saham",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-9689-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sger-koreksi-laporan-keuangan-laba-bersih-naik-9-5-jadi-rp140-3-m",
  "category": "Aksi Korporasi",
  "title": "SGER Koreksi Laporan Keuangan, [Laba Bersih] Naik 9,5% jadi Rp140,3 M",
  "deck": "PT Sumber Global Energy Tbk mengoreksi laporan keuangan interim semester I 2026, dengan laba bersih naik 9,5 persen menjadi Rp140,3 miliar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGER",
   "laporan keuangan interim",
   "batu bara",
   "emiten energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261013113943-64526-0/FinancialStatement-2026-II-SGER.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-beruntung-berkat-tambah-saham-suara-ke-15-09",
  "category": "Aksi Korporasi",
  "title": "DOOH: Beruntung Berkat [Tambah] Saham, Suara ke 15,09%",
  "deck": "PT Beruntung Berkat Sejahtera membeli 388,4 juta saham DOOH senilai sekitar Rp130,5 miliar, mengangkat hak suaranya dari 10,07% menjadi 15,09%.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "kepemilikan saham",
   "hak suara",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-1378-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-komisaris-admar-anwar-tambah-110-000-saham",
  "category": "Aksi Korporasi",
  "title": "JECX: Komisaris Admar Anwar Tambah [110.000] Saham",
  "deck": "Komisaris JECX Dr. Admar Anwar membeli 110.000 saham pada 30 September 2026, menaikkan kepemilikannya menjadi 12,63 juta lembar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Nitrasanata Dharma",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-3952-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "daaz-jelaskan-ke-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "DAAZ Jelaskan ke BEI Soal [Volatilitas] Transaksi Sahamnya",
  "deck": "BEI minta penjelasan soal volatilitas transaksi saham DAAZ. Perseroan sebut tak ada info material baru, hanya mengonfirmasi sukuk wakalah yang efektif 12 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAAZ",
   "volatilitas transaksi",
   "sukuk wakalah",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9938250981_50f8bed0dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-ekuitas-ambruk-71-pendapatan-melonjak-54-di-q3",
  "category": "Aksi Korporasi",
  "title": "WSKT: [Ekuitas] Ambruk 71%, Pendapatan Melonjak 54% di Q3",
  "deck": "Ekuitas Waskita Karya turun jadi Rp1,04 triliun dari Rp3,67 triliun dalam sembilan bulan, sementara pendapatan naik 53,7 persen jadi Rp8,13 triliun.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "Waskita Karya",
   "laporan keuangan",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261013041240-64510-0/FinancialStatement-2026-III-WSKT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "real-lewat-rgst-teken-kso-bangun-perumahan-di-bogor",
  "category": "Aksi Korporasi",
  "title": "REAL lewat RGST teken [KSO] bangun perumahan di Bogor",
  "deck": "Anak usaha REAL, RGST, resmi menandatangani perjanjian kerja sama operasi dengan Riscon Group untuk membangun perumahan Grand Riscon Darmaga di Leuwiliang, Bogor, dengan skema bagi hasil 57:43.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REAL",
   "KSO",
   "properti",
   "Bogor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ac3f35af22_467c2c5dae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-direksi-tambah-456-200-saham-lewat-program-karyawan",
  "category": "Aksi Korporasi",
  "title": "AMOR: Direksi [Tambah] 456.200 Saham Lewat Program Karyawan",
  "deck": "Direksi Ashmore Asset Management Indonesia menambah kepemilikan saham lewat program kepemilikan saham karyawan pada 8 Oktober 2026, menaikkan hak suaranya jadi 5,65 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "kepemilikan saham",
   "direksi",
   "program kepemilikan saham karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-5826-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-direksi-tambah-158-000-saham-lewat-program-karyawan",
  "category": "Aksi Korporasi",
  "title": "AMOR: Direksi Tambah 158.000 Saham Lewat Program [Karyawan]",
  "deck": "Direksi AMOR, Steven Satya Yudha, menambah 158.000 saham lewat program kepemilikan saham karyawan dengan harga Rp367 per saham pada 8 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "Ashmore Asset Management",
   "Kepemilikan Saham",
   "Program Karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-1601-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-direksi-tambah-5-46-juta-saham-lewat-program-karyawan",
  "category": "Aksi Korporasi",
  "title": "AMOR: Direksi Tambah [5,46 Juta] Saham Lewat Program Karyawan",
  "deck": "Direktur Arief Cahyadi Wana menambah 5.463.600 saham AMOR seharga Rp367 per lembar lewat program kepemilikan saham karyawan, hak suaranya naik ke 5,42 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "kepemilikan saham",
   "direksi",
   "program karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-3178-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-direksi-tambah-463-600-saham-lewat-program-karyawan",
  "category": "Aksi Korporasi",
  "title": "AMOR: Direksi Tambah [463.600] Saham Lewat Program Karyawan",
  "deck": "Direksi AMOR Ronaldus Gandahusada menambah 463.600 lembar saham lewat program kepemilikan saham karyawan, menaikkan hak suaranya dari 6,30% menjadi 6,32%.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "kepemilikan saham",
   "direksi",
   "program insentif karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-8493-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kspean-wanam-irigasi-133-km-panen-padi-november",
  "category": "Makroekonomi",
  "title": "KSPEAN Wanam: Irigasi 133 Km, [Panen] Padi November",
  "deck": "Menteri PU Dody Hanggodo memastikan irigasi KSPEAN Wanam di Merauke, Papua Selatan, sudah 133 dari target 180 kilometer, menjelang panen padi awal November 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/kspean-wanam-irigasi-133-km-panen-padi-november.jpg",
  "imageV": "mv6720rn",
  "tags": [
   "KSPEAN",
   "Papua Selatan",
   "Kementerian PU",
   "Swasembada Pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472675-menteri-dody-tinjau-kspean-wanam-pastikan-panen-perdana-dukung-visi-presiden-prabowo"
 },
 {
  "slug": "direktur-atic-harry-hambali-beli-115-000-saham-investasi",
  "category": "Aksi Korporasi",
  "title": "Direktur ATIC Harry Hambali Beli 115.000 Saham [Investasi]",
  "deck": "Direktur Anabatic Technologies, Harry Surjanto Hambali, membeli 115.000 saham ATIC pada 7-9 Oktober 2026 melalui delapan transaksi senilai Rp436-Rp452 per lembar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATIC",
   "Anabatic Technologies",
   "kepemilikan saham",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-3853-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bdkr-bantah-ada-informasi-material-di-balik-lonjakan-saham-23-5",
  "category": "Aksi Korporasi",
  "title": "BDKR Bantah Ada Informasi Material di Balik [Lonjakan] Saham 23,5%",
  "deck": "BEI meminta penjelasan setelah saham BDKR melonjak 23,53% dan volume transaksi naik lebih dari lima kali lipat dalam dua hari, 5-6 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BDKR",
   "UMA",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2331786fdc_a03663d502.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-221-400-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [jual] 221.400 saham lagi",
  "deck": "Komisaris AKPI, Henry Liem, melepas 221.400 saham pada 12 Oktober 2026, transaksi ketiga dalam sepekan yang membawa hak suaranya turun jadi 0,98 persen.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Henry Liem",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13102026-5821-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rdtx-panggil-rupslb-bahas-persetujuan-stock-split-saham",
  "category": "Aksi Korporasi",
  "title": "RDTX Panggil RUPSLB Bahas Persetujuan [Stock Split] Saham",
  "deck": "RDTX mengundang pemegang saham menghadiri RUPSLB pada 4 November 2026 untuk menyetujui pemecahan nilai nominal saham, dengan pemegang saham per 12 Oktober 2026 yang berhak hadir dan memberi suara.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RDTX",
   "stock split",
   "RUPSLB",
   "Roda Vivatex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5f7a5398a1_40d03b713e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bssb-kena-sanksi-bei-telat-setor-laporan-keuangan-teraudit",
  "category": "Aksi Korporasi",
  "title": "BSSB Kena [Sanksi] BEI, Telat Setor Laporan Keuangan Teraudit",
  "deck": "BEI menjatuhkan Peringatan Tertulis Pertama ke BSSB karena laporan keuangan tengah tahunan teraudit per 30 Juni 2026 belum disetor hingga lewat tenggat 30 September 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSSB",
   "sanksi BEI",
   "laporan keuangan",
   "obligasi daerah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0c87181b8c_957c1bb24a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-gagal-bayar-kupon-obligasi-suspensi-berlanjut",
  "category": "Aksi Korporasi",
  "title": "PTPP [Gagal Bayar] Kupon Obligasi, Suspensi Berlanjut",
  "deck": "BEI melanjutkan suspensi saham PTPP di seluruh pasar sejak 13 Oktober 2026, setelah perseroan menunda pembayaran kupon obligasi dan bagi hasil sukuk yang jatuh tempo 12 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "suspensi saham",
   "gagal bayar obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/70773859fb_5c902b1736.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "daaz-catatkan-sukuk-wakalah-rp378-miliar-di-bei",
  "category": "Aksi Korporasi",
  "title": "DAAZ Catatkan [Sukuk Wakalah] Rp378 Miliar di BEI",
  "deck": "Daaz Bara Lestari resmi mencatatkan sukuk wakalah senilai Rp378,04 miliar di BEI, terbagi dua seri dengan kupon 9 dan 10,25 persen, di bawah target maksimal Rp500 miliar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAAZ",
   "sukuk wakalah",
   "obligasi korporasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/622bec09d7_9329ba9448.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-tuntaskan-rights-issue-saham-beredar-ke-170-miliar",
  "category": "Aksi Korporasi",
  "title": "FORU Tuntaskan [Rights Issue], Saham Beredar ke 170 Miliar",
  "deck": "BEI mencatat tambahan 230,3 juta saham FORU dari pesanan lebih rights issue, menggenapkan total saham beredar jadi 170,08 miliar lembar dari basis lama 465,22 juta.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "rights issue",
   "pencatatan saham",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d54699ea95_8bdab79b50.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-umumkan-saham-ssms-terkonsentrasi-tinggi-capai-95-79",
  "category": "Aksi Korporasi",
  "title": "BEI Umumkan Saham SSMS [Terkonsentrasi] Tinggi, Capai 95,79%",
  "deck": "BEI dan KSEI mencatat 95,79% saham SSMS dikuasai segelintir pemegang per 1 Oktober 2026, menyisakan free float sekitar 4,21%.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSMS",
   "free float",
   "kepemilikan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/deec938a1a_02a41bc7a3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tmas-95-3-saham-dikuasai-kelompok-pemegang-saham-terbatas",
  "category": "Aksi Korporasi",
  "title": "TMAS: [95,3%] Saham Dikuasai Kelompok Pemegang Saham Terbatas",
  "deck": "BEI dan KSEI mengumumkan 95,30% saham Temas (TMAS) dikuasai sejumlah pemegang saham terbatas per 1 Oktober 2026, menyisakan sekitar 4,7% saham yang beredar bebas di pasar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMAS",
   "BEI",
   "KSEI",
   "konsentrasi kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/67ea6a7133_9f0f823c6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-umumkan-kepemilikan-saham-clay-terkonsentrasi-99-89",
  "category": "Aksi Korporasi",
  "title": "BEI Umumkan Kepemilikan Saham CLAY [Terkonsentrasi] 99,89%",
  "deck": "BEI dan KSEI mengumumkan 99,89% saham PT Citra Putra Realty Tbk (CLAY) dikuasai segelintir pemegang saham per 1 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CLAY",
   "BEI",
   "KSEI",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/98101391ea_b96a6b1919.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "duti-catat-kepemilikan-saham-terkonsentrasi-99-88-persen",
  "category": "Aksi Korporasi",
  "title": "DUTI Catat Kepemilikan Saham [Terkonsentrasi] 99,88 Persen",
  "deck": "BEI dan KSEI mengumumkan 99,88 persen saham Duta Pertiwi dikuasai segelintir pemegang saham per 1 Oktober 2026, menyisakan saham beredar bebas yang sangat tipis.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DUTI",
   "Duta Pertiwi",
   "kepemilikan saham",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/73a908870a_7bfe32f0cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-98-72-saham-inpp-terkonsentrasi-di-tangan-segelintir",
  "category": "Aksi Korporasi",
  "title": "BEI: [98,72%] Saham INPP Terkonsentrasi di Tangan Segelintir",
  "deck": "BEI dan KSEI mengumumkan 98,72% saham INPP dikuasai sejumlah pemegang saham terbatas per 1 Oktober 2026, menyisakan sangat sedikit saham yang beredar bebas di pasar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "BEI",
   "KSEI",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7e31305b7f_912ab42361.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bali-saham-terkonsentrasi-92-6-beredar-bebas-menipis",
  "category": "Aksi Korporasi",
  "title": "BALI: Saham Terkonsentrasi 92,6%, Beredar Bebas [Menipis]",
  "deck": "BEI dan KSEI mencatat 92,60% saham BALI dikuasai segelintir pemegang saham per 1 Oktober 2026, menyusul lonjakan harga saham awal bulan ini.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BALI",
   "kepemilikan saham",
   "konsentrasi saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/de09c9954b_d04fff6ca0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-keluar-dari-status-kepemilikan-saham-terkonsentrasi",
  "category": "Aksi Korporasi",
  "title": "FILM Keluar dari Status Kepemilikan Saham [Terkonsentrasi]",
  "deck": "BEI dan KSEI menyatakan saham PT MD Entertainment Tbk (FILM) tidak lagi berstatus kepemilikan terkonsentrasi tinggi, berdasarkan struktur kepemilikan per 5 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "kepemilikan saham",
   "BEI",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c8733793c0_b7eb7ace22.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meja-rilis-koreksi-laporan-realisasi-dana-ipo-capai-rp57-97-miliar",
  "category": "Aksi Korporasi",
  "title": "MEJA Rilis [Koreksi] Laporan Realisasi Dana IPO, Capai Rp57,97 Miliar",
  "deck": "Harta Djaya Karya (MEJA) mengoreksi laporan realisasi dana IPO dan konversi Waran I per 30 Juni 2026 agar sesuai format baru OJK, total dana terpakai Rp57,97 miliar untuk modal kerja.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "Penawaran Umum",
   "Realisasi Dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3e08a71694_3937d2fbfd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xrdn-unit-penyertaan-etf-susut-399-2-juta",
  "category": "Aksi Korporasi",
  "title": "XRDN: Unit Penyertaan ETF [Susut] 399,2 Juta",
  "deck": "Unit penyertaan ETF RDN Kas Bertumbuh turun dari 22,3 miliar menjadi 21,9 miliar unit per 12 Oktober 2026, penyusutan terbesar dalam tiga laporan beruntun.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XRDN",
   "ETF",
   "reksa dana",
   "unit penyertaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8c9b9631cc_b4d3cd701a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xgld-catatkan-tambahan-2-juta-unit-penyertaan-etf-emas",
  "category": "Aksi Korporasi",
  "title": "XGLD catatkan [tambahan] 2 juta unit penyertaan ETF emas",
  "deck": "Unit penyertaan ETF emas syariah XGLD naik dari 82 juta jadi 84 juta unit, pencatatan tambahan efektif 13 Oktober 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XGLD",
   "ETF emas",
   "reksa dana syariah",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7d7c7f0f93_7d6b0e4e7f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-mglv-tak-lagi-berstatus-saham-terkonsentrasi-tinggi",
  "category": "Aksi Korporasi",
  "title": "BEI: MGLV Tak Lagi Berstatus Saham [Terkonsentrasi] Tinggi",
  "deck": "BEI dan KSEI menyatakan MGLV tidak lagi berstatus kepemilikan saham terkonsentrasi tinggi, berdasarkan struktur kepemilikan saham per 30 September 2026.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "NexAI Digital Infrastruktur",
   "kepemilikan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3f13d02776_f8d9d72121.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ship-saham-terkonsentrasi-98-3-di-tangan-segelintir-pemegang",
  "category": "Aksi Korporasi",
  "title": "SHIP: Saham Terkonsentrasi 98,3% di Tangan Segelintir [Pemegang]",
  "deck": "BEI dan KSEI mengumumkan 98,30% saham SHIP per 1 Oktober 2026 dikuasai segelintir pemegang saham, menyisakan sangat sedikit saham yang beredar bebas di pasar.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SHIP",
   "free float",
   "kepemilikan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/081892695a_bce1dddaae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "same-bei-catat-94-99-saham-terkonsentrasi-free-float-tipis",
  "category": "Aksi Korporasi",
  "title": "SAME: BEI Catat 94,99% Saham Terkonsentrasi, [Free Float] Tipis",
  "deck": "BEI dan KSEI mengumumkan 94,99 persen saham Sarana Meditama Metropolitan (SAME) dikuasai segelintir pemegang per 1 Oktober 2026, menyisakan sekitar 5 persen saham yang beredar bebas di publik.",
  "date": "13 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAME",
   "kepemilikan saham",
   "free float",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a6dd78b624_526c3ee434.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idx-saham-ades-terkonsentrasi-95-1-di-tangan-sedikit-pemegang",
  "category": "Aksi Korporasi",
  "title": "IDX: Saham ADES [Terkonsentrasi] 95,1% di Tangan Sedikit Pemegang",
  "deck": "BEI dan KSEI mencatat 95,10% saham tanpa warkat ADES per 1 Oktober 2026 dikuasai sejumlah terbatas pemegang saham, menyisakan porsi kecil yang benar-benar beredar bebas di pasar.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "BEI",
   "Kepemilikan Saham",
   "Likuiditas Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7ce8795384_de451c7b91.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-akselerasi-perampingan-50-anak-usaha",
  "category": "BUMN",
  "title": "Telkom Akselerasi [Perampingan] 50 Anak Usaha",
  "deck": "Telkom mempercepat penataan 50 anak usaha, 24 entitas sudah selesai dan 26 lainnya ditargetkan tuntas tahun ini demi portofolio yang lebih fokus pada bisnis inti.",
  "date": "12 Oktober 2026",
  "image": "assets/img/telkom-akselerasi-perampingan-50-anak-usaha.jpg",
  "imageV": "mv5ji9ia",
  "tags": [
   "Telkom",
   "TelkomGroup",
   "BUMN",
   "Streamlining"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472616-telkom-akselerasi-program-streamlining-pastikan-portofolio-telkomgroup-fokus-pada-bisnis-inti"
 },
 {
  "slug": "ijee-bayar-kupon-obligasi-dan-sukuk-rp52-99-miliar-tepat-waktu",
  "category": "Aksi Korporasi",
  "title": "IJEE Bayar Kupon [Obligasi] dan Sukuk Rp52,99 Miliar Tepat Waktu",
  "deck": "IJEE melunasi bunga dan imbalan Obligasi III serta Sukuk Ijarah II senilai total Rp52,99 miliar ke pemegang efek lewat KSEI pada 9 Oktober 2026, sesuai tanggal jatuh tempo.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "obligasi",
   "sukuk ijarah",
   "pembayaran kupon"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fec6ed3b81_a29994af0e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-dampingi-umkm-ubah-eceng-gondok-jadi-kerajinan",
  "category": "UMKM",
  "title": "PNM Dampingi UMKM Ubah Eceng Gondok Jadi [Kerajinan]",
  "deck": "Nasabah PNM Mekaar di Bekasi mengubah eceng gondok yang tumbuh liar di sungai menjadi kerajinan anyaman yang kini dipasarkan hingga Yogyakarta dan Bali.",
  "date": "12 Oktober 2026",
  "image": "assets/img/pnm-dampingi-umkm-ubah-eceng-gondok-jadi-kerajinan.jpg",
  "imageV": "mv5ji9ye",
  "tags": [
   "pnm",
   "pnm mekaar",
   "umkm",
   "eceng gondok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472604-dari-sungai-ke-pasar-pnm-dampingi-maryati-ubah-eceng-gondok-jadi-kerajinan-bernilai"
 },
 {
  "slug": "flmc-tambah-kbli-perusahaan-induk-untuk-anak-usaha-distribusi",
  "category": "Aksi Korporasi",
  "title": "FLMC Tambah KBLI [Perusahaan Induk] untuk Anak Usaha Distribusi",
  "deck": "Falmaco Nonwoven berencana menambah KBLI Aktivitas Perusahaan Induk untuk membentuk anak usaha distribusi bermodal awal Rp5 miliar, menunggu persetujuan RUPSLB 18 November 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "KBLI",
   "Falmaco Nonwoven",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7a48bf4a66_ab0e722d0b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pekerja-mandiri-perempuan-didorong-naik-kelas-ke-usaha-formal",
  "category": "Ketenagakerjaan",
  "title": "Pekerja Mandiri Perempuan Didorong [Naik Kelas] ke Usaha Formal",
  "deck": "Kemenko Perekonomian, Kemenaker, pemda, dan Lazada Indonesia meluncurkan program pendampingan usaha bagi pekerja mandiri perempuan di Yogyakarta, Bandung, dan Medan agar naik kelas jadi usaha formal.",
  "date": "12 Oktober 2026",
  "image": "assets/img/bursa-kerja.jpg",
  "tags": [
   "tenaga kerja mandiri",
   "UMKM perempuan",
   "ketenagakerjaan informal",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7147/dorong-formalisasi-usaha-dan-naik-kelas-pemerintah-perkuat-kapasitas-tenaga-kerja-mandiri",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kemenko-dan-bps-sepakat-rumuskan-kebijakan-berbasis-data",
  "category": "Makroekonomi",
  "title": "Kemenko dan BPS Sepakat Rumuskan Kebijakan Berbasis [Data]",
  "deck": "Kemenko Perekonomian dan BPS membahas data pertumbuhan ekonomi, inflasi, dan surplus dagang semester I 2026 sebagai dasar perumusan kebijakan ke depan.",
  "date": "12 Oktober 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "BPS",
   "Kemenko Perekonomian",
   "pertumbuhan ekonomi",
   "inflasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7145/pemerintah-kuatkan-sinergi-dengan-bps-untuk-formulasikan-kebijakan-berlandaskan-data",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "harga-minyak-indonesia-melonjak-ke-us-112-81-per-barel",
  "category": "Energi",
  "title": "Harga Minyak Indonesia [Melonjak] ke US$112,81 per Barel",
  "deck": "Pemerintah menetapkan ICP September 2026 naik US$23,38 menjadi US$112,81 per barel akibat ketegangan geopolitik di Timur Tengah.",
  "date": "12 Oktober 2026",
  "image": "assets/img/harga-minyak-indonesia-melonjak-ke-us-112-81-per-barel.jpg",
  "imageV": "mv5eajbw",
  "tags": [
   "ICP",
   "Harga Minyak",
   "ESDM",
   "Timur Tengah"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/ketegangan-geopolitik-dorong-icp-september-naik-ke-us11281-per-barel",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "tei-2026-buka-ruang-ekspor-jasa-dari-logistik-hingga-ai",
  "category": "Bisnis",
  "title": "TEI 2026 Buka Ruang Ekspor [Jasa] dari Logistik hingga AI",
  "deck": "Pameran dagang TEI ke-41 di ICE BSD City, 14-18 Oktober 2026, menyertakan puluhan perusahaan jasa dari logistik, keuangan, hingga kecerdasan buatan untuk menjaring pembeli mancanegara.",
  "date": "12 Oktober 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "TEI 2026",
   "ekspor jasa",
   "Kemendag",
   "INASA"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mulai-dari-jasa-facility-management-hingga-jasa-digital-peluang-ekspor-jasa-kian-terbuka-melalui-tei-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "smmt-bei-umumkan-konsentrasi-saham-tinggi-97-12",
  "category": "Aksi Korporasi",
  "title": "SMMT: BEI Umumkan [Konsentrasi] Saham Tinggi 97,12%",
  "deck": "BEI dan KSEI mengumumkan 97,12% saham Golden Eagle Energy (SMMT) dikuasai segelintir pemegang saham per 1 Oktober 2026, menyisakan free float yang sangat tipis.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "BEI",
   "kepemilikan saham",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9080b09603_846c06b338.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-umumkan-konsentrasi-saham-tinggi-psab-95-78",
  "category": "Aksi Korporasi",
  "title": "BEI Umumkan Konsentrasi Saham [Tinggi] PSAB 95,78%",
  "deck": "BEI dan KSEI mencatat 95,78 persen saham PSAB per 1 Oktober 2026 dikuasai segelintir pihak, menandakan saham yang beredar bebas di pasar sangat tipis.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "BEI",
   "KSEI",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5fd38293fa_74ccd1c853.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-bagikan-dividen-interim-rp200-miliar-rp3-43-per-saham",
  "category": "Aksi Korporasi",
  "title": "PRTL bagikan [dividen] interim Rp200 miliar, Rp3,43 per saham",
  "deck": "PRTL melaporkan rencana dividen interim tunai Rp200 miliar atau Rp3,43 per saham untuk tahun buku 2026, yang hampir seluruhnya mengalir ke pemegang saham pengendali, Sarana Menara Nusantara.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "dividen interim",
   "Sarana Menara Nusantara",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/40b4991b0d_b411e23d4e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admr-anak-usaha-catatkan-obligasi-rp2-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "ADMR: Anak Usaha Catatkan [Obligasi] Rp2 Triliun di BEI",
  "deck": "PT Maruwai Coal, anak usaha ADMR, mencatatkan obligasi senilai Rp2 triliun di Bursa Efek Indonesia untuk mendanai infrastruktur dan operasional.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMR",
   "obligasi",
   "Maruwai Coal",
   "surat utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f9c47fa832_8875e0f9eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-jatuhkan-sanksi-ke-70-emiten-soal-laporan-keuangan-interim",
  "category": "Aksi Korporasi",
  "title": "BEI Jatuhkan [Sanksi] ke 70 Emiten soal Laporan Keuangan Interim",
  "deck": "BEI menjatuhkan peringatan tertulis dan denda sampai Rp150 juta kepada 70 emiten yang terlambat menyampaikan laporan keuangan interim per Juni 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEI",
   "SRIL",
   "PGAS",
   "Sanksi Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/882ea299e2_c3f3bcd7ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-obligasi-jpy200-juta-diperpanjang-lagi-ke-akhir-2026",
  "category": "Aksi Korporasi",
  "title": "VTNY: Obligasi [JPY200 Juta] Diperpanjang Lagi ke Akhir 2026",
  "deck": "Venteny Fortuna menjawab permintaan penjelasan BEI soal piutang jumbo, obligasi anak usaha yang dua kali diperpanjang, dan pergantian corporate secretary dua kali dalam sepekan.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "obligasi",
   "piutang",
   "corporate secretary"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/867fe02032_a3a914dca7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-grand-prix-mandalika-2026-sukses-digelar",
  "category": "BUMN",
  "title": "Pertamina Grand Prix Mandalika 2026 [Sukses] Digelar",
  "deck": "Ajang balap internasional di Sirkuit Mandalika usai digelar 9-11 Oktober, Dirut Pertamina berterima kasih ke pihak yang terlibat, dari pemerintah hingga pelaku UMKM.",
  "date": "12 Oktober 2026",
  "image": "assets/img/pertamina-grand-prix-mandalika-2026-sukses-digelar.jpg",
  "imageV": "mv5eajy4",
  "tags": [
   "Pertamina",
   "Mandalika",
   "Sport Tourism",
   "Balap"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472579-pertamina-grand-prix-of-indonesia-2026-sukses-digelar-direktur-utama-pertamina-apresiasi-kontribusi-seluruh-pihak"
 },
 {
  "slug": "investasi-hilirisasi-ri-capai-rp300-1-triliun-di-semester-i",
  "category": "Makroekonomi",
  "title": "Investasi Hilirisasi RI Capai [Rp300,1] Triliun di Semester I",
  "deck": "Pemerintah memaparkan capaian investasi hilirisasi dan penyelesaian aduan pelaku usaha dalam pembukaan Rakernas HIPPI, sembari mendorong perluasan akses ekspor lewat kerja sama dagang dengan Uni Eropa, Kanada, dan AS.",
  "date": "12 Oktober 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "hilirisasi",
   "investasi",
   "HIPPI",
   "ekspor"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7146/wamenko-dradjad-dorong-penguatan-pengusaha-nasional-dan-perluasan-akses-pasar",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "csmi-utang-ke-pihak-terkait-dan-merek-nws-terganjal-2-tahun",
  "category": "Aksi Korporasi",
  "title": "CSMI: utang ke pihak terkait dan merek NWS [terganjal] 2 tahun",
  "deck": "CSMI menjawab permintaan penjelasan BEI dengan rincian pendapatan outlet, utang ke pihak terafiliasi yang syaratnya belum disepakati, dan pendaftaran merek NWS Chicken yang mandek dua tahun",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "Cipta Selera Murni",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c39b221c68_fc83d6aea3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpjs-gandeng-bsi-perluas-akses-bayar-iuran-jkn",
  "category": "Perbankan",
  "title": "BPJS Gandeng BSI, [Perluas] Akses Bayar Iuran JKN",
  "deck": "BPJS Kesehatan dan BSI memperluas kanal pembayaran iuran JKN lewat autodebit, PPOB, dan aplikasi BYOND, sekaligus memperkuat pengelolaan kas dan layanan syariah bagi pegawai BPJS.",
  "date": "12 Oktober 2026",
  "image": "assets/img/bpjs-gandeng-bsi-perluas-akses-bayar-iuran-jkn.jpg",
  "imageV": "mv58s77y",
  "tags": [
   "BPJS Kesehatan",
   "BSI",
   "JKN",
   "Perbankan Syariah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472574-gandeng-bsi-akses-pembayaran-iuran-jkn-jadi-lebih-luas"
 },
 {
  "slug": "ppre-realisasi-capex-obligasi-baru-39-sisa-dana-rp61-3-m",
  "category": "Aksi Korporasi",
  "title": "PPRE: Realisasi [CAPEX] Obligasi Baru 39%, Sisa Dana Rp61,3 M",
  "deck": "PT PP Presisi Tbk mengoreksi laporan dana hasil obligasi 2022. Sisa Rp61,34 miliar masih disimpan di bank afiliasi, target terpakai habis Juni 2027.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRE",
   "obligasi korporasi",
   "penggunaan dana",
   "PP Presisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c9ba1d7045_9ef8c1c04a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-jhonlin-baratama-kini-pegang-30-25-saham-bayan",
  "category": "Aksi Korporasi",
  "title": "BYAN: Jhonlin Baratama Kini Pegang [30,25%] Saham Bayan",
  "deck": "Bayan Resources menjelaskan ke Bursa bahwa PT Jhonlin Baratama kini menguasai 30,25% saham perusahaan seharga Rp2.588 per saham, tanpa mengubah status pengendali Perseroan.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "Jhonlin Baratama",
   "Low Tuck Kwong"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/708ec0f567_37cd1ac6e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-konfirmasi-harga-transaksi-jhonlin-rp2-588-saham",
  "category": "Aksi Korporasi",
  "title": "BYAN Konfirmasi Harga Transaksi Jhonlin [Rp2.588]/Saham",
  "deck": "BYAN jelaskan ke Bursa bahwa harga pengalihan saham ke Jhonlin Baratama Rp2.588/saham, Jhonlin kini kuasai 30,25% saham BYAN tanpa pergantian pengendali.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Jhonlin Baratama",
   "Bayan Resources",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/708ec0f567_37cd1ac6e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aims-jawab-permintaan-bei-ungkap-kontrak-trading-batu-bara-baru",
  "category": "Aksi Korporasi",
  "title": "AIMS Jawab Permintaan BEI, Ungkap [Kontrak] Trading Batu Bara Baru",
  "deck": "AIMS menjawab permintaan penjelasan BEI dengan mengungkap satu kontrak trading batu bara baru yang masih berjalan dan akan dicatat pada laporan keuangan kuartal III 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AIMS",
   "keterbukaan informasi",
   "Bursa Efek Indonesia",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6b18ed3956_dd43ac2698.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgli-ungkap-pemicu-saham-melonjak-100-usai-disuspensi-bursa",
  "category": "Aksi Korporasi",
  "title": "PGLI Ungkap Pemicu Saham [Melonjak] 100% Usai Disuspensi Bursa",
  "deck": "Dalam public expose insidentil usai disuspensi, manajemen PGLI sebut lonjakan harga saham 100,89% dalam 10 hari murni dinamika pasar, bukan info material yang belum diungkap.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGLI",
   "suspensi saham",
   "public expose",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e930eed2e9_1cd181505a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-finalkan-penyesuaian-harga-waran-asii-pasca-dividen",
  "category": "Aksi Korporasi",
  "title": "BQ Finalkan Penyesuaian Harga [Waran] ASII Pasca Dividen",
  "deck": "Korea Investment Sekuritas Indonesia (BQ) menetapkan harga pelaksanaan dan rasio final dua waran terstruktur ASII, efektif 13 Oktober 2026, menyusul dividen tunai Rp98 per saham ASII.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "ASII",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/58f46493fb_f9a5bc81b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbia-beli-1-uob-asset-management-jadi-pengendali",
  "category": "Aksi Korporasi",
  "title": "BBIA Beli 1% UOB Asset Management, Jadi [Pengendali]",
  "deck": "Bank UOB Indonesia membeli 1% saham PT UOB Asset Management Indonesia senilai Rp734,9 juta dan resmi jadi pemegang saham pengendali setelah disetujui OJK.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBIA",
   "UOB Indonesia",
   "akuisisi saham",
   "konglomerasi keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8d2ae8ae62_b3e25d1a3e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gtbo-jawab-bursa-soal-volatilitas-tidak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "GTBO Jawab Bursa soal Volatilitas: [Tidak Ada] Info Material",
  "deck": "BEI minta penjelasan ke GTBO soal volatilitas transaksi saham lewat surat 8 Oktober 2026. Perseroan menjawab tak ada info material, aktivitas pemegang saham khusus, atau rencana korporasi baru.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "Garda Tujuh Buana",
   "Bursa Efek Indonesia",
   "Volatilitas Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/29b32d0c87_8c8df853f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-ajukan-penundaan-bayar-bunga-sukuk-rp24-12-miliar",
  "category": "Aksi Korporasi",
  "title": "POST Ajukan Penundaan Bayar [Bunga] Sukuk Rp24,12 Miliar",
  "deck": "Pos Indonesia (POST) meminta penundaan bunga sukuk ijarah seri A-C tahap ke-7 senilai Rp24,12 miliar yang jatuh tempo 7 Oktober 2026, melanjutkan masalah likuiditas yang telah dilaporkan.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "sukuk",
   "gagal bayar",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4b7539a636_2fc6a5d895.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-pertahankan-peringkat-aaa-idn-dari-fitch-ratings",
  "category": "Aksi Korporasi",
  "title": "BBTN Pertahankan Peringkat [AAA(idn)] dari Fitch Ratings",
  "deck": "Fitch Ratings mengafirmasi peringkat nasional PT Bank Tabungan Negara dan dua obligasinya tetap di level tertinggi AAA(idn) dengan outlook stabil untuk periode setahun ke depan.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "Fitch Ratings",
   "peringkat obligasi",
   "Bank Tabungan Negara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cff90b6b23_b343301f4c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-catatkan-tambahan-2-15-miliar-saham-dari-rights-issue",
  "category": "Aksi Korporasi",
  "title": "ENRG Catatkan Tambahan 2,15 Miliar Saham dari [Rights Issue]",
  "deck": "Bursa mencatatkan 2,15 miliar saham baru ENRG hasil pelaksanaan HMETD PUT IV, menambah total saham beredar menjadi 29,2 miliar lembar efektif 13 Oktober 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "rights issue",
   "HMETD",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e9df53d0f0_113e8127ae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nine-rencanakan-rights-issue-hingga-2-44-miliar-saham-baru",
  "category": "Aksi Korporasi",
  "title": "NINE Rencanakan [Rights Issue] hingga 2,44 Miliar Saham Baru",
  "deck": "Techno9 Indonesia (NINE) akan menerbitkan sebanyak-banyaknya 2,44 miliar saham baru lewat rights issue untuk modal kerja dan bayar utang, menunggu persetujuan RUPSLB 18 November 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NINE",
   "rights issue",
   "PMHMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9e18e942df_b905988bff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nine-jadwalkan-rupslb-18-november-cum-date-26-oktober",
  "category": "Aksi Korporasi",
  "title": "NINE Jadwalkan [RUPSLB] 18 November, Cum Date 26 Oktober",
  "deck": "Techno9 Indonesia menjadwalkan RUPSLB pada 18 November 2026, dengan pemegang saham per 26 Oktober 2026 berhak hadir, dan usul agenda rapat ditutup 20 Oktober 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NINE",
   "RUPSLB",
   "rights issue",
   "Techno9 Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1c2f5651c0_cae8be8466.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oasa-direksi-jual-11-4-juta-saham-lewat-pasar",
  "category": "Aksi Korporasi",
  "title": "OASA: Direksi [Jual] 11,4 Juta Saham Lewat Pasar",
  "deck": "Direktur OASA, Ir. Gafur Sulistyo Umar, melepas 11,4 juta saham secara tidak langsung senilai sekitar Rp2,57 miliar untuk realokasi investasi.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OASA",
   "Maharaksa Biru Energi",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-9763-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "humi-rombak-seluruh-direksi-komisaris-lewat-rupslb",
  "category": "Aksi Korporasi",
  "title": "HUMI [Rombak] Seluruh Direksi-Komisaris Lewat RUPSLB",
  "deck": "RUPSLB HUMI memberhentikan seluruh direksi dan komisaris lama lalu mengangkat jajaran baru, namun pembebasan tanggung jawab mereka ditangguhkan sampai laporan keuangan audit 2026 selesai.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HUMI",
   "RUPSLB",
   "direksi",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/90ff8bf99a_4e6b635259.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oasa-direksi-jual-22-8-juta-saham-senilai-rp5-miliar",
  "category": "Aksi Korporasi",
  "title": "OASA: Direksi [Jual] 22,8 Juta Saham Senilai Rp5 Miliar",
  "deck": "Direktur Gafur Sulistyo Umar melepas 22,8 juta saham OASA pada 8 Oktober 2026 seharga Rp220 per saham, hak suaranya turun dari 31,65% jadi 31,29%.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OASA",
   "Maharaksa Biru Energi",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-2795-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "myoh-lewati-tenggat-refloat-saham-trja-baru-300-lembar",
  "category": "Aksi Korporasi",
  "title": "MYOH Lewati Tenggat [Refloat] Saham TRJA, Baru 300 Lembar",
  "deck": "Dua tahun setelah tender wajib, MYOH baru melepas 300 dari 57,48 juta lembar saham TRJA yang wajib dijual kembali ke publik; tenggat Februari 2026 sudah lewat.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MYOH",
   "TRJA",
   "refloat",
   "tender offer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/25c4a64906_9a52089343.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-tiga-waran-asii-usai-dividen-rp98",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Tiga Waran [ASII] Usai Dividen Rp98",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi tiga waran terstruktur berbasis saham ASII menyusul dividen tunai Rp98 per saham, efektif 13 Oktober 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "ASII",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c724ae7797_f6568a6464.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-komisaris-jual-saham-via-repo-suara-tetap-0-11",
  "category": "Aksi Korporasi",
  "title": "NSSS: Komisaris Jual Saham via [Repo], Suara Tetap 0,11%",
  "deck": "Komisaris NSSS Djasa Pinara Gusti melepas 412.300 saham lewat repurchase agreement pada 5 Oktober 2026, senilai sekitar Rp301,4 juta.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "komisaris",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-3911-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-rinci-alokasi-rp92-miliar-sisa-dana-rights-issue",
  "category": "Aksi Korporasi",
  "title": "CASH Rinci Alokasi [Rp92 Miliar] Sisa Dana Rights Issue",
  "deck": "Dalam Public Expose Tahunan, manajemen Cashlez merinci alokasi sisa dana rights issue Rp92 miliar dan memastikan tidak ada aksi korporasi dengan PT BAU meski kantor kini sealamat.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Rights Issue",
   "Public Expose",
   "Cashlez"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2d46cb0bbc_ddd3df0afa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-direksi-johan-hutauruk-beli-10-000-saham",
  "category": "Aksi Korporasi",
  "title": "[JECX] Direksi Johan Hutauruk Beli 10.000 Saham",
  "deck": "Direksi JECX Johan A M M Hutauruk membeli 10.000 saham pada 5 Oktober 2026 senilai Rp1.315 per saham, menambah kepemilikan menjadi 18.814.000 lembar, hak suara tetap 0,58 persen.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "kepemilikan saham",
   "direksi",
   "Nitrasanata Dharma"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-0116-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csra-bagikan-dividen-interim-rp15-per-saham",
  "category": "Aksi Korporasi",
  "title": "CSRA Bagikan [Dividen] Interim Rp15 per Saham",
  "deck": "Cisadane Sawit Raya akan membayar dividen interim Rp15 per saham atau total Rp30,75 miliar pada 13 November 2026, didanai dari surplus kas internal perusahaan.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSRA",
   "dividen interim",
   "kelapa sawit",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a6eff690f2_da62ea2c79.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-rilis-revisi-laporan-realisasi-dana-waran-seri-i",
  "category": "Aksi Korporasi",
  "title": "CYBR Rilis Revisi Laporan [Realisasi] Dana Waran Seri I",
  "deck": "ITSEC Asia merevisi laporan realisasi dana hasil pelaksanaan Waran Seri I per 30 Juni 2026 menyusul permintaan penyesuaian dari OJK berdasarkan POJK 40/2025.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "waran",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f4dd990654_a3ea97f884.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-jual-saham-via-repo-suara-turun-ke-33-29",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Jual Saham via [Repo], Suara Turun ke 33,29%",
  "deck": "Samuel Sekuritas Indonesia melepas 335,77 juta saham NSSS lewat skema repurchase agreement seharga Rp750 per saham, hak suaranya turun jadi 33,29 persen.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "kepemilikan saham",
   "Samuel Sekuritas Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-8423-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "moya-bentuk-usaha-patungan-senilai-rp6-6-miliar-di-karawang",
  "category": "Aksi Korporasi",
  "title": "MOYA Bentuk [Usaha Patungan] Senilai Rp6,6 Miliar di Karawang",
  "deck": "MOYA menggandeng PT Pertiwi Lestari membentuk PT Air Pertiwi Lestari, perusahaan patungan senilai Rp6,6 miliar untuk membangun infrastruktur pengolahan air di Karawang.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MOYA",
   "usaha patungan",
   "infrastruktur air",
   "Karawang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/32b9db00f6_05ba7f2977.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csra-tetapkan-jadwal-dividen-interim-cair-13-november",
  "category": "Aksi Korporasi",
  "title": "CSRA Tetapkan Jadwal Dividen Interim, Cair [13 November]",
  "deck": "Pemegang saham yang tercatat 26 Oktober 2026 berhak atas dividen interim Rp15 per saham, dibayarkan paling lambat 13 November 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSRA",
   "dividen interim",
   "pasar modal",
   "emiten sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/705f4f1fb5_2330f1e13d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcpi-cgs-international-tambah-saham-lewat-repo-ke-6-89",
  "category": "Aksi Korporasi",
  "title": "TCPI: CGS International Tambah Saham Lewat [REPO] ke 6,89%",
  "deck": "CGS International Sekuritas Indonesia menambah 45 juta lembar saham TCPI sebagai jaminan REPO senilai Rp445,5 miliar, hak suara naik ke 6,89%.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCPI",
   "kepemilikan saham",
   "REPO",
   "CGS International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-6628-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-tambah-saham-1-4-juta-lembar-lewat-pembelian",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi [Tambah] Saham 1,4 Juta Lembar Lewat Pembelian",
  "deck": "Direksi CYBR, Patrick Rudolf Dannacher, menambah kepemilikan 1,4 juta lembar saham lewat serangkaian pembelian tidak langsung pada 6-9 Oktober 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "kepemilikan saham",
   "direksi",
   "ITSEC Asia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-0898-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-intensifkan-pengeboran-lima-sumur-di-tiga-wilayah",
  "category": "Aksi Korporasi",
  "title": "PGEO [Intensifkan] Pengeboran Lima Sumur di Tiga Wilayah",
  "deck": "PGE menyelesaikan dan memulai pengeboran lima sumur di Gunung Tiga, Lumut Balai, Ulubelu, dan Lahendong sepanjang 2026 untuk mendukung target kapasitas baru 55 MW dan 8 MW.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "panas bumi",
   "pengeboran",
   "geothermal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a178320153_fbc40038d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcol-tegaskan-tak-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MCOL Tegaskan Tak Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham MCOL. Manajemen menyatakan tidak ada informasi material atau rencana korporasi di baliknya.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOL",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6063681b34_7591736493.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-jadwalkan-rupslb-18-november-dps-26-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "INCO Jadwalkan [RUPSLB] 18 November, DPS 26 Oktober 2026",
  "deck": "Vale Indonesia menggelar RUPSLB pada 18 November 2026. Pemegang saham yang ingin mengusulkan agenda punya tenggat hingga 20 Oktober.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "RUPSLB",
   "Vale Indonesia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b137055131_9297c56410.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "epac-panggil-rupslb-bahas-rights-issue-buyback-setop-segmen",
  "category": "Aksi Korporasi",
  "title": "EPAC Panggil RUPSLB, Bahas [Rights Issue], Buyback, Setop Segmen",
  "deck": "RUPSLB EPAC pada 3 November 2026 akan memutuskan rights issue, penghentian segmen kemasan fleksibel konvensional, dan buyback saham.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "RUPSLB",
   "rights issue",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/422363cbdf_b2270754c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-gelar-rupslb-usai-catat-ekuitas-negatif-rp42-8-miliar",
  "category": "Aksi Korporasi",
  "title": "INPS Gelar RUPSLB usai Catat [Ekuitas Negatif] Rp42,8 Miliar",
  "deck": "INPS memanggil RUPSLB 3 November 2026 untuk menyetujui penerbitan hingga 1,25 miliar saham baru senilai Rp125 miliar ke pengendali guna menambal ekuitas negatif Rp42,8 miliar.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "RUPSLB",
   "private placement",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9d7838fe3b_99384f98f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-resmikan-izin-sumur-rakyat-di-aceh-genjot-mandatori-etanol",
  "category": "Energi",
  "title": "ESDM Resmikan Izin Sumur Rakyat di Aceh, Genjot Mandatori [Etanol]",
  "deck": "Bahlil Lahadalia menandatangani izin baru sumur minyak rakyat di Aceh, sekaligus memaparkan rencana mandatori etanol bertahap hingga E50 untuk menekan impor bensin.",
  "date": "12 Oktober 2026",
  "image": "assets/img/esdm-resmikan-izin-sumur-rakyat-di-aceh-genjot-mandatori-etanol.jpg",
  "imageV": "mv4xjddn",
  "tags": [
   "ESDM",
   "Sumur Rakyat",
   "Etanol",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dari-sumur-rakyat-hingga-etanol-bahlil-dorong-rakyat-jadi-pemain-energi",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "inkp-rampungkan-realisasi-dana-obligasi-sukuk-rp4-6-triliun",
  "category": "Aksi Korporasi",
  "title": "INKP Rampungkan Realisasi Dana Obligasi-Sukuk [Rp4,6 Triliun]",
  "deck": "Seluruh dana dari dua instrumen utang INKP, Obligasi Berkelanjutan VI dan Sukuk Mudharabah Berkelanjutan V tahap II 2026, telah terpakai penuh untuk bayar utang bank dan modal kerja.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9bb9af4d14_9b5275e51f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-edwin-soeryadjaya-beli-415-000-saham-tambahan",
  "category": "Aksi Korporasi",
  "title": "SRTG: Edwin Soeryadjaya Beli [415.000] Saham Tambahan",
  "deck": "Komisaris SRTG Edwin Soeryadjaya membeli 415.000 saham pada 8-9 Oktober 2026, melanjutkan pembelian serupa yang dilaporkan pekan sebelumnya.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "Edwin Soeryadjaya",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12102026-7198-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-tawarkan-obligasi-subordinasi-rp500-miliar-kupon-8-95-9-30",
  "category": "Aksi Korporasi",
  "title": "BBKP Tawarkan Obligasi [Subordinasi] Rp500 Miliar, Kupon 8,95-9,30%",
  "deck": "KB Bank merilis obligasi subordinasi tahap II senilai Rp500 miliar dengan bunga 8,95-9,30 persen, melanjutkan program Rp1 triliun yang dimulai tahun lalu.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "obligasi subordinasi",
   "KB Bank",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1cfcca98fc_aa866f07af.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-akuisisi-45-saham-tambang-batu-bara-sba",
  "category": "Aksi Korporasi",
  "title": "BIKE Akuisisi 45% Saham Tambang Batu Bara [SBA]",
  "deck": "Anak usaha BIKE, PT Prambanan Nusantara Energi, mengambil 45% saham PT Sumber Bara Abadi, pemegang izin tambang batu bara 4.909 hektare berkadar cadangan 86 juta metrik ton di Kalimantan Timur.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "tambang batu bara",
   "PNE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8f22c0525d_a02a58cfab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-koreksi-laporan-dana-sukuk-realisasi-capai-100",
  "category": "Aksi Korporasi",
  "title": "BWPT Koreksi Laporan Dana Sukuk, Realisasi Capai [100%]",
  "deck": "Eagle High Plantations mengoreksi laporan realisasi dana sukuk mudharabah Rp121,19 miliar, seluruhnya sudah terpakai untuk beli CPO, FFB, pupuk, dan bahan bakar sejak Maret 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "sukuk mudharabah",
   "CPO",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a12653ffb7_bafd4283b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomgroup-siapkan-600-gbps-untuk-motogp-mandalika-2026",
  "category": "Teknologi",
  "title": "TelkomGroup Siapkan [600 Gbps] untuk MotoGP Mandalika 2026",
  "deck": "Telkom lewat InfraNexia menambah kapasitas jaringan backbone hingga 600 Gbps untuk menopang konektivitas selama MotoGP Mandalika 2026.",
  "date": "12 Oktober 2026",
  "image": "assets/img/telkomgroup-siapkan-600-gbps-untuk-motogp-mandalika-2026.jpg",
  "imageV": "mv4vw9t7",
  "tags": [
   "telkom",
   "infranexia",
   "motogp mandalika",
   "infrastruktur digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472530-dukung-kelancaran-motogp-mandalika-2026-telkomgroup-kuatkan-infrastruktur-digital-di-sejumlah-titik"
 },
 {
  "slug": "cani-ungkap-rencana-konversi-utang-us-36-6-juta-ke-ekuitas",
  "category": "Aksi Korporasi",
  "title": "CANI Ungkap Rencana Konversi Utang [US$36,6 Juta] ke Ekuitas",
  "deck": "Dalam Public Expose Insidentil 9 Oktober, manajemen CANI merinci rencana mengonversi utang pihak berelasi US$36,6 juta menjadi ekuitas tanpa menambah saham baru.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "public expose",
   "konversi utang",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8460f2c0a5_87c5a6a5f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pdpp-komisaris-lim-kim-guan-mundur-dari-primadaya-plastisindo",
  "category": "Aksi Korporasi",
  "title": "PDPP: [Komisaris] Lim Kim Guan Mundur dari Primadaya Plastisindo",
  "deck": "Komisaris Lim Kim Guan mengundurkan diri dari PT Primadaya Plastisindo Tbk lewat surat tertanggal 8 Oktober 2026, perseroan sebut tidak ada dampak material.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PDPP",
   "komisaris",
   "pengunduran diri",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b50698ac88_be1a37b1ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-akuisisi-45-saham-tambang-batu-bara-lewat-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "BIKE [Akuisisi] 45% Saham Tambang Batu Bara Lewat Anak Usaha",
  "deck": "Anak usaha BIKE, PT Prambanan Nusantara Energi, mengambil 45 persen saham PT Sumber Bara Abadi yang mengelola tambang batu bara 4.909 hektare di Kalimantan Timur.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi tambang",
   "batu bara",
   "Prambanan Nusantara Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d1f44ba077_e3490b490b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-pura-melonjak-10-53-emiten-akui-tak-ada-info-baru",
  "category": "Aksi Korporasi",
  "title": "Saham PURA [Melonjak] 10,53%, Emiten Akui Tak Ada Info Baru",
  "deck": "BEI meminta penjelasan atas lonjakan volume dan harga saham PURA pada 8 Oktober 2026. Perseroan menjawab tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PURA",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "lonjakan harga saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/883e182968_7f85929385.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bltz-gelar-public-expose-insidentil-usai-saham-disuspensi",
  "category": "Aksi Korporasi",
  "title": "BLTZ Gelar Public Expose [Insidentil] usai Saham Disuspensi",
  "deck": "BEI meminta BLTZ menggelar paparan publik insidentil Rabu, 14 Oktober 2026, usai saham perseroan disuspensi, menyusul laporan sebelumnya yang menyebut tak ada informasi material baru.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "suspensi saham",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d55b16cb4d_252f58118b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inci-jawab-permintaan-bei-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "INCI Jawab Permintaan BEI soal [Volatilitas] Sahamnya",
  "deck": "Intanwijaya Internasional (INCI) menjawab permintaan BEI soal volatilitas sahamnya, menegaskan transaksi murni pasar tanpa rencana aksi korporasi dalam tiga bulan mendatang.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCI",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/51620ba6bb_0b4588a33e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peve-pastikan-tak-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "PEVE Pastikan Tak Ada [Informasi Material] di Balik Volatilitas Saham",
  "deck": "Menjawab surat BEI soal volatilitas transaksi sahamnya, manajemen PT Penta Valent Tbk menyatakan tidak ada informasi material maupun rencana aksi korporasi dalam tiga bulan mendatang.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEVE",
   "Penta Valent",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bb8805902c_4a23bf3e23.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-tender-offer-asii-rp3-600-saham-dinyatakan-efektif",
  "category": "Aksi Korporasi",
  "title": "AUTO: Tender Offer ASII Rp3.600/Saham Dinyatakan [Efektif]",
  "deck": "ASII memastikan rencana membeli hingga 238,4 juta saham AUTO senilai Rp3.600 per saham, bisa menaikkan kepemilikannya ke maksimal 84,95 persen.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "ASII",
   "tender offer",
   "Astra Otoparts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/30d2103012_e059231e54.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medc-akuisisi-10-hak-partisipasi-psc-kutai-dari-eni",
  "category": "Aksi Korporasi",
  "title": "MEDC Akuisisi [10%] Hak Partisipasi PSC Kutai dari Eni",
  "deck": "MedcoEnergi sepakat membeli 10% hak partisipasi non-operator di empat PSC Cekungan Kutai dari Eni S.p.A., termasuk penemuan gas raksasa Geliga.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "akuisisi",
   "migas",
   "Eni"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4992c53281_fca1d4118e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjlb01-pengelola-eba-gabung-jadi-danareksa-investment-management",
  "category": "Aksi Korporasi",
  "title": "BJLB01: Pengelola EBA Gabung, Jadi [Danareksa] Investment Management",
  "deck": "Penggabungan BNI AM, BRI MI, dan PNM IM ke Mandiri Manajemen Investasi efektif 1 Oktober 2026, lalu berganti nama jadi Danareksa Investment Management Indonesia, pengelola EBA Syariah BJLB01.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJLB01",
   "Danareksa Investment Management",
   "merger manajer investasi",
   "EBA Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2077b704b5_8d506f9b09.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomsel-perkuat-jaringan-untuk-motogp-mandalika-2026",
  "category": "Teknologi",
  "title": "Telkomsel [Perkuat] Jaringan untuk MotoGP Mandalika 2026",
  "deck": "Telkomsel menambah kapasitas BTS dan menyiagakan personel untuk mendukung konektivitas selama MotoGP Mandalika 2026 di Lombok, NTB, pada 9-11 Oktober.",
  "date": "12 Oktober 2026",
  "image": "assets/img/telkomsel-perkuat-jaringan-untuk-motogp-mandalika-2026.jpg",
  "imageV": "mv4ph64f",
  "tags": [
   "Telkomsel",
   "MotoGP Mandalika",
   "Lombok",
   "5G"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472510-telkomsel-hadirkan-jaringan-terdepan-dan-terluas-untuk-dukung-motogp-mandalika-2026"
 },
 {
  "slug": "flmc-jadwalkan-rupslb-pada-18-november-2026",
  "category": "Aksi Korporasi",
  "title": "FLMC Jadwalkan [RUPSLB] pada 18 November 2026",
  "deck": "Falmaco Nonwoven Industri menjadwalkan RUPSLB di Bandung pada 18 November 2026, menyusul laporan ekuitas negatif perseroan. Agenda rapat belum diungkap.",
  "date": "12 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "RUPSLB",
   "Falmaco Nonwoven",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/26d7c76fd4_edb42e0af2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-libatkan-30-umkm-lombok-di-gp-mandalika-2026",
  "category": "UMKM",
  "title": "Pertamina Libatkan 30 [UMKM] Lombok di GP Mandalika 2026",
  "deck": "30 UMKM binaan Pertamina, mayoritas usaha makanan dan minuman, ikut ajang balap internasional di Sirkuit Mandalika, Lombok, pada 9-11 Oktober 2026.",
  "date": "11 Oktober 2026",
  "image": "assets/img/pertamina-libatkan-30-umkm-lombok-di-gp-mandalika-2026.jpg",
  "imageV": "mv41vq5a",
  "tags": [
   "Pertamina",
   "UMKM",
   "Mandalika",
   "Lombok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472457-pertamina-grand-prix-of-indonesia-2026-jadi-peluang-bagi-umkm-lokal-untuk-perluas-pasar-dan-tingkatkan-pendapatan"
 },
 {
  "slug": "dooh-beruntung-berkat-tambah-saham-hak-suara-ke-10-07",
  "category": "Aksi Korporasi",
  "title": "DOOH: Beruntung Berkat Tambah Saham, Hak Suara ke [10,07%]",
  "deck": "PT Beruntung Berkat Sejahtera membeli 545 juta saham DOOH seharga Rp330 per lembar lewat repo, menaikkan hak suaranya dari 3,02% menjadi 10,07%.",
  "date": "11 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "kepemilikan saham",
   "repo saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11102026-0047-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-prambanan-divestasi-545-juta-saham-suara-ke-5-02",
  "category": "Aksi Korporasi",
  "title": "DOOH: Prambanan [Divestasi] 545 Juta Saham, Suara ke 5,02%",
  "deck": "Prambanan Investasi Sukses melepas 545 juta saham DOOH senilai Rp179,85 miliar pada 9 Oktober 2026, memangkas hak suaranya dari 12,06% menjadi 5,02%.",
  "date": "11 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Prambanan Investasi Sukses",
   "divestasi saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11102026-5600-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-pt-beruntung-berkat-beli-545-juta-saham-hak-suara-ke-7-04",
  "category": "Aksi Korporasi",
  "title": "DOOH: PT Beruntung Berkat Beli [545 Juta] Saham, Hak Suara ke 7,04%",
  "deck": "PT Beruntung Berkat Sejahtera membeli 545 juta saham DOOH senilai sekitar Rp179,85 miliar, mengangkat hak suaranya dari 3,02% menjadi 7,04%.",
  "date": "11 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "kepemilikan saham",
   "repurchase agreement",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11102026-5698-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemulihan-desa-adat-sade-40-dari-75-rumah-adat-berdiri",
  "category": "UMKM",
  "title": "Pemulihan Desa Adat Sade: [40] dari 75 Rumah Adat Berdiri",
  "deck": "Pembangunan kembali Desa Adat Sade di Lombok Tengah pascakebakaran Agustus 2026 terus berjalan, dengan 40 dari 75 rumah adat sudah berdiri dan ekonomi warga mulai bergerak lagi.",
  "date": "10 Oktober 2026",
  "image": "assets/img/warung-makan.jpg",
  "tags": [
   "Desa Adat Sade",
   "Lombok Tengah",
   "Kemenko Perekonomian",
   "pemulihan bencana"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7144/pemerintah-dorong-percepatan-pemulihan-dan-aktivitas-masyarakat-desa-adat-sade-pasca-bencana-kebakaran",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kek-kura-kura-bali-diarahkan-jadi-hub-riset-ai-dan-semikonduktor",
  "category": "Industri",
  "title": "KEK Kura-Kura Bali Diarahkan Jadi Hub Riset [AI] dan Semikonduktor",
  "deck": "Pemerintah mendorong KEK Kura-Kura Bali menjadi simpul riset AI, semikonduktor, dan teknologi kuantum lewat skema kerja sama industri Indonesia-Tiongkok Two Countries Twin Parks.",
  "date": "10 Oktober 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "KEK Kura-Kura Bali",
   "Investasi Tiongkok",
   "Semikonduktor",
   "Two Countries Twin Parks"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7143/dorong-skema-two-countries-twin-parks-pemerintah-jadikan-kek-kura-kura-bali-hub-riset-ai-dan-semikonduktor",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-siapkan-skema-kredit-baru-untuk-petani-dan-perempuan",
  "category": "UMKM",
  "title": "Pemerintah Siapkan [Skema] Kredit Baru untuk Petani dan Perempuan",
  "deck": "Realisasi kredit program pemerintah tembus Rp258,75 triliun hingga akhir September 2026, sementara skema baru disiapkan untuk petani, perumahan, dan perempuan prasejahtera.",
  "date": "10 Oktober 2026",
  "image": "assets/img/kopi-roasting.jpg",
  "tags": [
   "KUR",
   "UMKM",
   "Kredit Program",
   "Yogyakarta"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7142/akselerasi-sinergi-perluas-dampak-pemerintah-satukan-langkah-percepat-kredit-program-dari-yogyakarta",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "smle-rinci-rencana-jual-50-saham-sinarom-ke-denico",
  "category": "Aksi Korporasi",
  "title": "SMLE Rinci Rencana [Jual] 50% Saham Sinarom ke Denico",
  "deck": "Dalam materi public expose 13 Oktober 2026, SMLE menyebut Denico akan membeli 50% saham anak usahanya, Sinar Aroma Sentosa, dari porsi SMLE yang kini 99,96 persen, namun kendali tetap di SMLE.",
  "date": "10 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "Sinar Aroma Sentosa",
   "Denico",
   "akuisisi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e97a8ac016_f620f5f31a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-bantu-perajin-tenun-desa-adat-sade-bangkit",
  "category": "UMKM",
  "title": "Pertamina [Bantu] Perajin Tenun Desa Adat Sade Bangkit",
  "deck": "Pertamina menyerahkan 45 alat tenun dan pendampingan pelatihan bagi perajin Desa Adat Sade, Lombok, yang usahanya lumpuh akibat kebakaran Agustus lalu.",
  "date": "10 Oktober 2026",
  "image": "assets/img/pertamina-bantu-perajin-tenun-desa-adat-sade-bangkit.jpg",
  "imageV": "mv2dxstx",
  "tags": [
   "pertamina",
   "desaadatsade",
   "tenunsasak",
   "pemulihanekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472253-dukung-pemulihan-ekonomi-pertamina-bantu-perajin-tenun-desa-adat-sade-kembali-berkarya"
 },
 {
  "slug": "giaa-rombak-direksi-thomas-oentoro-jadi-dirut-baru",
  "category": "Aksi Korporasi",
  "title": "GIAA Rombak [Direksi], Thomas Oentoro Jadi Dirut Baru",
  "deck": "RUPSLB Garuda Indonesia menyetujui pergantian direksi dan komisaris, termasuk tiga eksekutif asing baru dan penetapan Thomas Sugiarto Oentoro sebagai Direktur Utama.",
  "date": "10 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "Garuda Indonesia",
   "RUPSLB",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8f3e7f089e_3b5cc8e34f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "test-shm3-rampungkan-tender-wajib-beli-5-98-juta-saham",
  "category": "Aksi Korporasi",
  "title": "TEST-SHM3 Rampungkan [Tender Wajib] Beli 5,98 Juta Saham",
  "deck": "Pengendali baru TEST-SHM3 membeli 5.979.605 dari 6.733.943 saham wajib dalam tender wajib 10-12 Oktober 2026, mengubah kepemilikannya dari 10,66% menjadi 9,78%.",
  "date": "10 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEST-SHM3",
   "tender wajib",
   "pengendali saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261010_TEST-SHM3_E010_3a1d97bc-bd78-4ba6-af55-042f37f638e4-20261010135421.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-dukung-bank-sampah-desa-kuta-di-mandalika",
  "category": "BUMN",
  "title": "Pertamina [Dukung] Bank Sampah Desa Kuta di Mandalika",
  "deck": "Pertamina memberi motor listrik roda tiga dan tempat sampah besar untuk Bank Sampah Putri Nyale, membantu pengelolaan sampah di 20 dusun Desa Kuta menjelang Pertamina Grand Prix of Indonesia 2026.",
  "date": "10 Oktober 2026",
  "image": "assets/img/pertamina-dukung-bank-sampah-desa-kuta-di-mandalika.jpg",
  "imageV": "mv236ftv",
  "tags": [
   "pertamina",
   "bank sampah",
   "mandalika",
   "lombok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472221-pertamina-dukung-bank-sampah-desa-kuta-pengelolaan-sampah-kawasan-wisata-mandalika-lebih-optimal"
 },
 {
  "slug": "telkom-paparkan-strategi-adopsi-ai-di-forum-dtiif-2026",
  "category": "Teknologi",
  "title": "Telkom Paparkan Strategi Adopsi [AI] di Forum DTIIF 2026",
  "deck": "Telkom lewat Telkom Solution memaparkan kerangka pengembangan AI nasional dalam forum Danantara Technology Innovation Investment Forum (DTIIF) 2026 di Jakarta.",
  "date": "10 Oktober 2026",
  "image": "assets/img/telkom-paparkan-strategi-adopsi-ai-di-forum-dtiif-2026.jpg",
  "imageV": "mv236g8v",
  "tags": [
   "Telkom",
   "AI",
   "DTIIF 2026",
   "Telkom Solution"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472216-perkuat-transformasi-digital-telkom-bagikan-strategi-percepat-adopsi-ai-nasional-di-road-to-dtiif-2026"
 },
 {
  "slug": "folago-global-irsx-balik-untung-pendapatan-melonjak-laba",
  "category": "Aksi Korporasi",
  "title": "Folago Global (IRSX) Balik Untung, Pendapatan Melonjak [Laba]",
  "deck": "Laporan keuangan koreksi kuartal I 2026 IRSX menunjukkan pendapatan naik lebih dari tiga kali lipat dan laba bersih balik positif Rp3,29 miliar.",
  "date": "10 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRSX",
   "laporan keuangan",
   "laba bersih",
   "Folago Global Nusantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261010130349-64513-0/FinancialStatement-2026-I-IRSX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pabrik-konstruksi-tiongkok-rp710-m-beroperasi-di-kek-kendal",
  "category": "Industri",
  "title": "Pabrik Konstruksi Tiongkok [Rp710 M] Beroperasi di KEK Kendal",
  "deck": "PT HSG Material Indonesia, bagian grup Fujian Hongsheng dari Tiongkok, mengoperasikan pabrik tiang pancang beton senilai Rp710 miliar di KEK Kendal dan menyerap hingga 400 tenaga kerja.",
  "date": "10 Oktober 2026",
  "image": "assets/img/jalur-perakitan.jpg",
  "tags": [
   "KEK Kendal",
   "investasi Tiongkok",
   "material konstruksi",
   "Jawa Tengah"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7141/resmikan-operasionalisasi-pabrik-hsg-material-menko-airlangga-tegaskan-komitmen-pemerintah-tarik-investasi-ke-sektor-manufaktur",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "sgn-perkuat-kemitraan-dengan-petani-tebu-lewat-cpcl",
  "category": "BUMN",
  "title": "SGN Perkuat Kemitraan dengan [Petani] Tebu Lewat CPCL",
  "deck": "PT Sinergi Gula Nusantara menjalankan program Calon Petani dan Calon Lokasi agar bantuan dan pendampingan ke petani tebu lebih tepat sasaran.",
  "date": "10 Oktober 2026",
  "image": "assets/img/sgn-perkuat-kemitraan-dengan-petani-tebu-lewat-cpcl.jpg",
  "imageV": "mv1xw7rp",
  "tags": [
   "gula",
   "petani tebu",
   "BUMN",
   "swasembada"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472198-program-cpcl-jadi-fokus-kemitraan-pt-sgn-dengan-petani-tebu"
 },
 {
  "slug": "warga-terdampak-rempang-eco-city-mulai-huni-350-rumah-baru",
  "category": "Bisnis",
  "title": "Warga Terdampak Rempang Eco-City Mulai Huni [350] Rumah Baru",
  "deck": "Kementerian Transmigrasi dan BP Batam mulai menyerahkan 350 rumah permanen tipe 45 di Tanjung Banon bagi warga Pulau Rempang yang direlokasi akibat proyek Rempang Eco-City.",
  "date": "10 Oktober 2026",
  "image": "assets/img/warga-terdampak-rempang-eco-city-mulai-huni-350-rumah-baru.jpg",
  "imageV": "mv1xw8f3",
  "tags": [
   "Rempang Eco-City",
   "Kementerian Transmigrasi",
   "BP Batam",
   "Relokasi Warga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472195-menengok-hunian-baru-warga-terdampak-rempang-eco-city-di-tanjung-banon"
 },
 {
  "slug": "pertamina-buka-camping-ground-di-mandalika-untuk-motogp",
  "category": "BUMN",
  "title": "Pertamina Buka [Camping Ground] di Mandalika untuk MotoGP",
  "deck": "Pertamina pertama kali membuka camping ground di Sirkuit Mandalika, menampung 150 orang sebagai alternatif menginap bagi komunitas riders selama Pertamina Grand Prix of Indonesia 2026.",
  "date": "10 Oktober 2026",
  "image": "assets/img/pertamina-buka-camping-ground-di-mandalika-untuk-motogp.jpg",
  "imageV": "mv1xw8vs",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472188-pertamina-buka-camping-ground-bisa-jadi-alternatif-tempat-menginap-saat-nonton-pertamina-grand-prix-of-indonesia"
 },
 {
  "slug": "test-shm-rencanakan-buyback-saham-senilai-rp10-miliar",
  "category": "Aksi Korporasi",
  "title": "TEST-SHM Rencanakan [Buyback] Saham Senilai Rp10 Miliar",
  "deck": "Emiten berkode TEST-SHM berencana membeli kembali sahamnya hingga Rp10 miliar dengan batas harga Rp100 per saham, periode 12 Oktober 2026 sampai 12 Oktober 2027.",
  "date": "10 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEST-SHM",
   "buyback saham",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261010_TEST-SHM_E006_c739886e-24f0-4e04-93de-a614cd8d547e-20261010095925.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waduk-plta-batang-toru-mulai-digenangi-demi-pasokan-nataru",
  "category": "Energi",
  "title": "Waduk PLTA Batang Toru Mulai [Digenangi] demi Pasokan Nataru",
  "deck": "Penggenangan waduk PLTA Batang Toru berkapasitas 510 MW dimulai, menyusul cadangan listrik Sumatera Utara yang disebut ESDM baru 4 persen, jauh di bawah batas aman menjelang Nataru.",
  "date": "10 Oktober 2026",
  "image": "assets/img/waduk-plta-batang-toru-mulai-digenangi-demi-pasokan-nataru.jpg",
  "imageV": "mv1rdbfl",
  "tags": [
   "PLTA Batang Toru",
   "ESDM",
   "Listrik Sumatera Utara",
   "Nataru"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/waduk-plta-batang-toru-mulai-digenangi-pasokan-listrik-sumatera-utara-kian-andal-jelang-nataru",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "wgsh-direksi-hendy-rusli-jual-510-saham-hak-suara-tetap",
  "category": "Aksi Korporasi",
  "title": "WGSH: Direksi Hendy Rusli [Jual] 510 Saham, Hak Suara Tetap",
  "deck": "Direksi WGSH Hendy Rusli melepas 510 saham senilai sekitar Rp57.630 per 9 Oktober 2026, sementara hak suaranya di perusahaan tetap 0,05 persen.",
  "date": "10 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WGSH",
   "kepemilikan saham",
   "direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10102026-2602-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-jasaraharja-putera-naik-41-persen-raih-penghargaan",
  "category": "BUMN",
  "title": "Laba Jasaraharja Putera [Naik] 41 Persen, Raih Penghargaan",
  "deck": "Jasaraharja Putera mencatat laba bersih Rp234,49 miliar pada 2025, naik 41 persen, didukung beban klaim yang turun dan modal yang tebal, sekaligus meraih penghargaan asuransi terbaik.",
  "date": "10 Oktober 2026",
  "image": "assets/img/laba-jasaraharja-putera-naik-41-persen-raih-penghargaan.jpg",
  "imageV": "mv1lavpt",
  "tags": [
   "asuransi",
   "Jasaraharja Putera",
   "RUPS",
   "laba bersih"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472163-laba-bersih-meningkat-jasaraharja-putera-diganjar-penghargaan"
 },
 {
  "slug": "bmtp-fitch-afirmasi-peringkat-aa-idn-outlook-stabil",
  "category": "Aksi Korporasi",
  "title": "BMTP: Fitch Afirmasi Peringkat [AA(idn)], Outlook Stabil",
  "deck": "Fitch Ratings Indonesia mengafirmasi peringkat Bank Mandiri Taspen (BMTP) di AA(idn) outlook stabil, termasuk untuk obligasi berkelanjutannya.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMTP",
   "peringkat kredit",
   "Fitch Ratings",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7ca61233dd_ce65c88c6a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dnrk-peringkat-danareksa-diturunkan-pefindo-jadi-ida",
  "category": "Aksi Korporasi",
  "title": "DNRK: Peringkat Danareksa [Diturunkan] PEFINDO Jadi idA+",
  "deck": "PEFINDO menurunkan peringkat Danareksa dan tiga obligasinya dari idAA ke idA+ karena transformasi perusahaan jadi holding kawasan industri mengurangi dukungan pemerintah.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DNRK",
   "PEFINDO",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/407bc371ad_44c4030fdf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-jelaskan-rencana-akuisisi-saham-sinar-aroma-sentosa",
  "category": "Aksi Korporasi",
  "title": "SMLE Jelaskan Rencana [Akuisisi] Saham Sinar Aroma Sentosa",
  "deck": "SMLE mengoreksi surat rencana public expose insidentil dengan menambah daftar direksi yang hadir, membahas rencana penjualan saham anak usaha ke perusahaan Denmark pada 13 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "Public Expose",
   "Akuisisi Anak Usaha",
   "Sinar Aroma Sentosa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f3320584c6_ff463e4037.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msky-hadapi-gugatan-pkpu-dari-ascot-group-holdings",
  "category": "Aksi Korporasi",
  "title": "MSKY Hadapi Gugatan [PKPU] dari Ascot Group Holdings",
  "deck": "Ascot Group Holdings Ltd mengajukan PKPU terhadap MNC Sky Vision ke Pengadilan Niaga Jakarta Pusat. Sidang kedua digelar 8 Oktober 2026, belum ada putusan.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSKY",
   "PKPU",
   "MNC Sky Vision",
   "Pengadilan Niaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/45f883c474_99ec72798b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "test-shm-bagi-dividen-rp100-m-siapkan-rights-issue-rp1-t",
  "category": "Aksi Korporasi",
  "title": "TEST-SHM Bagi Dividen Rp100 M, Siapkan [Rights Issue] Rp1 T",
  "deck": "RUPS TEST-SHM menyetujui dividen tunai Rp100 miliar dan rencana penambahan modal lewat rights issue sampai 2 miliar saham baru plus waran, ditargetkan terlaksana awal 2027.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEST-SHM",
   "RUPS",
   "dividen",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261009_TEST-SHM_E013_d13678f3-3772-4c73-9c32-1afaa73a4f14-20261010095837.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "test-shm-rencanakan-hmetd-rp1-triliun-dilusi-maks-20",
  "category": "Aksi Korporasi",
  "title": "TEST-SHM Rencanakan [HMETD] Rp1 Triliun, Dilusi Maks 20%",
  "deck": "TEST-SHM mengajukan rencana penambahan modal lewat HMETD senilai sekitar Rp1 triliun, dengan dilusi hingga 20 persen bagi pemegang saham yang tidak ikut.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEST-SHM",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261009_TEST-SHM_E0X2_8d389ccb-8082-43bf-a4b1-ed8bcbf76468-20261010095716.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-luncurkan-pemandu-wisata-digital-jelang-gp-mandalika",
  "category": "BUMN",
  "title": "Pertamina Luncurkan [Pemandu] Wisata Digital Jelang GP Mandalika",
  "deck": "Pertamina luncurkan kampanye MyPertamina Your Journey Partner untuk memandu wisatawan menjelajahi Lombok selama Grand Prix Mandalika 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/pertamina-luncurkan-pemandu-wisata-digital-jelang-gp-mandalika.jpg",
  "imageV": "mv156p01",
  "tags": [
   "pertamina",
   "grand prix mandalika",
   "umkm",
   "ntb"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472125-bikin-liburan-grand-prix-2026-anti-bosan-pertamina-rilis-panduan-khusus-yang-wajib-dicoba-wisatawan"
 },
 {
  "slug": "test-shm-panggil-rups-25-november-bahas-dividen-dan-rights-issue",
  "category": "Aksi Korporasi",
  "title": "TEST-SHM Panggil RUPS 25 November, Bahas [Dividen] dan Rights Issue",
  "deck": "TEST-SHM resmi memanggil RUPS Tahunan dan Luar Biasa pada 25 November 2026 untuk memutuskan dividen, rights issue, dan perubahan anggaran dasar.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEST-SHM",
   "RUPS",
   "rights issue",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261009_TEST-SHM_E002_99898e6f-ce64-487d-b4fe-b13c97c0b84b-20261010095603.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-realisasi-dana-ipo-62-gudang-dan-lab-molor",
  "category": "Aksi Korporasi",
  "title": "SMLE Realisasi Dana IPO 62%, Gudang dan Lab [Molor]",
  "deck": "SMLE baru merealisasikan 62,36 persen dana IPO senilai Rp81,48 miliar hingga Juni 2026. Pembangunan gudang dan pembelian alat lab molor ke 2028.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "IPO",
   "realisasi dana",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/319244226d_75c014d2de.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sraj-pastikan-dana-obligasi-rp950-miliar-rampung-terserap",
  "category": "Aksi Korporasi",
  "title": "SRAJ Pastikan Dana Obligasi Rp950 Miliar [Rampung] Terserap",
  "deck": "Revisi laporan ke OJK menunjukkan dana Rp950 miliar dari Obligasi I SRAJ 2022 sudah 100 persen terpakai untuk modal kerja, bangunan, dan peralatan di lima unit usaha.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRAJ",
   "obligasi",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/abbe9354ff_2b801db372.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-revisi-realisasi-dana-right-issue-rp6-08-t-koreksi",
  "category": "Aksi Korporasi",
  "title": "WIKA Revisi Realisasi Dana Right Issue Rp6,08 T [Koreksi]",
  "deck": "WIKA mengoreksi laporan realisasi dana hasil rights issue 2024 menyusul tinjauan OJK, menyisakan Rp1,67 miliar yang ditargetkan habis kuartal IV 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "rights issue",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b5fdd05840_188ece442e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-jadwalkan-ulang-rupslb-pmhmetd-ke-15-oktober",
  "category": "Aksi Korporasi",
  "title": "KOTA Jadwalkan Ulang RUPSLB [PMHMETD] ke 15 Oktober",
  "deck": "PT DMS Propertindo (KOTA) mengubah jadwal RUPSLB dari 6 menjadi 15 Oktober 2026 setelah OJK memberi tanggapan atas rencana penambahan modal dan transaksi material perseroan.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "PMHMETD",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/902bfc83d7_d2e39c8432.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asli-pengendali-tambah-saham-kuasai-52",
  "category": "Aksi Korporasi",
  "title": "ASLI: [Pengendali] Tambah Saham, Kuasai 52%",
  "deck": "PT Wahana Konstruksi menambah 62,5 juta saham ASLI senilai Rp20,31 miliar pada 21 September 2026, menaikkan kendalinya dari 51 persen menjadi 52 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLI",
   "pemegang saham",
   "pengendali",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5a2f3add70_bfd737dc30.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "viva-konversi-utang-rp1-72-triliun-jadi-saham-baru",
  "category": "Aksi Korporasi",
  "title": "VIVA Konversi Utang Rp1,72 Triliun Jadi [Saham] Baru",
  "deck": "VIVA akan menerbitkan sebanyak-banyaknya 43,09 miliar saham baru tanpa hak memesan efek terlebih dahulu untuk melunasi utang PKPU senilai Rp1,72 triliun kepada dua kreditur, MSP dan BAM.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "PMTHMETD",
   "restrukturisasi utang",
   "konversi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fc5e442562_847af78bf5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mgia01-bni-am-bri-mi-pnm-gabung-ke-danareksa-im",
  "category": "Aksi Korporasi",
  "title": "MGIA01: BNI AM, BRI MI, PNM Gabung ke [Danareksa IM]",
  "deck": "Manajer investasi EBA Mandiri GIAA01 berganti nama jadi PT Danareksa Investment Management Indonesia setelah merger dengan tiga perusahaan manajemen aset BUMN, efektif 1 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGIA01",
   "Danareksa Investment Management",
   "merger manajer investasi",
   "Danantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4465f393b7_6e8cc0a4f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smkm-koreksi-laporan-realisasi-dana-ipo-r-d-baru-terserap-1-44",
  "category": "Aksi Korporasi",
  "title": "SMKM Koreksi Laporan Realisasi Dana IPO, [R&D] Baru Terserap 1,44%",
  "deck": "SMKM mengoreksi laporan realisasi dana IPO per Juni 2026: 98,4% dana terpakai, sisa Rp1,01 miliar mengendap di giro berbunga 1,6% hingga akhir 2027.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMKM",
   "penggunaan dana IPO",
   "laporan realisasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ff2cd7f378_fbb6a3eb8c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agro-angkat-hari-basuki-sebagai-direktur-bisnis-baru",
  "category": "Aksi Korporasi",
  "title": "AGRO Angkat [Hari Basuki] sebagai Direktur Bisnis Baru",
  "deck": "RUPSLB Bank Raya Indonesia (AGRO) mengukuhkan pengunduran diri Kicky Andrie Davetra dan mengangkat Hari Basuki sebagai Direktur Bisnis baru, menunggu persetujuan OJK.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRO",
   "Bank Raya Indonesia",
   "RUPSLB",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7969f3f089_a657b36341.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-koreksi-realisasi-dana-rights-issue-rp2-82-triliun",
  "category": "Aksi Korporasi",
  "title": "PACK koreksi realisasi dana rights issue [Rp2,82 triliun]",
  "deck": "PACK merevisi laporan realisasi dana rights issue Rp3,25 triliun, memperbaiki alokasi dana ke dua anak usaha tambang nikel senilai Rp2,82 triliun dari sebelumnya tertulis Rp2,87 triliun.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "rights issue",
   "penggunaan dana",
   "nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/edeaa5b03d_a684bb02ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgun-tanggapi-bursa-ungkap-gadai-saham-100-ke-bank-mandiri",
  "category": "Aksi Korporasi",
  "title": "PGUN Tanggapi Bursa, Ungkap [Gadai Saham] 100% ke Bank Mandiri",
  "deck": "PGUN menjelaskan ke BEI bahwa 100% saham tiga pemegang saham utamanya, AAL, CAR, dan BCMP, telah digadaikan ke Bank Mandiri untuk fasilitas kredit afiliasinya, PT Jhonlin Baratama.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGUN",
   "gadai saham",
   "Bank Mandiri",
   "Jhonlin Baratama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ca5c85f371_f8bcbcded0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "viva-jadwalkan-rupslb-gabung-rupst-17-november-2026",
  "category": "Aksi Korporasi",
  "title": "VIVA Jadwalkan [RUPSLB] Gabung RUPST 17 November 2026",
  "deck": "PT Visi Media Asia Tbk akan menggelar RUPST tahun buku 2025 sekaligus RUPSLB pada 17 November 2026, dengan daftar pemegang saham yang berhak hadir ditetapkan per 23 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "RUPS",
   "RUPSLB",
   "Visi Media Asia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c842c37294_533a453743.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mendag-buka-flei-2026-ajak-anak-muda-coba-bisnis-waralaba",
  "category": "Bisnis",
  "title": "Mendag Buka FLEI 2026, Ajak Anak Muda Coba Bisnis [Waralaba]",
  "deck": "Menteri Perdagangan Budi Santoso membuka Franchise & License Expo Indonesia ke-27 dan mengajak generasi muda merintis usaha waralaba, sekaligus mendorong ekspansi waralaba lokal ke pasar ekspor.",
  "date": "9 Oktober 2026",
  "image": "assets/img/mendag-buka-flei-2026-ajak-anak-muda-coba-bisnis-waralaba.jpg",
  "imageV": "mv0zlttv",
  "tags": [
   "waralaba",
   "UMKM",
   "ekspor",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-ajak-generasi-muda-jajaki-usaha-waralaba",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "menko-zulhas-soroti-rantai-pasok-kelapa-di-wcd-2026",
  "category": "Industri",
  "title": "Menko Zulhas Soroti Rantai Pasok [Kelapa] di WCD 2026",
  "deck": "Menko Pangan Zulkifli Hasan mendesak pembenahan rantai pasok kelapa saat pembukaan World Coconut Day 2026 di Manado, soroti pola tanam petani yang masih pasif.",
  "date": "9 Oktober 2026",
  "image": "assets/img/menko-zulhas-soroti-rantai-pasok-kelapa-di-wcd-2026.jpg",
  "imageV": "mv156pe0",
  "tags": [
   "kelapa",
   "world coconut day",
   "manado",
   "rantai pasok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472107-soroti-pola-tanam-tradisional-menko-zulhas-dorong-pembenahan-rantai-pasok-kelapa-di-wcd-2026"
 },
 {
  "slug": "agro-sahkan-ubah-anggaran-dasar-direktur-bisnis-baru",
  "category": "Aksi Korporasi",
  "title": "AGRO Sahkan Ubah [Anggaran Dasar], Direktur Bisnis Baru",
  "deck": "RUPSLB Bank Raya Indonesia menyetujui penyelarasan anggaran dasar dengan aturan anak usaha BUMN, sekaligus mengukuhkan Hari Basuki sebagai Direktur Bisnis baru.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRO",
   "Bank Raya Indonesia",
   "RUPSLB",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2d9088b67a_e976b71f23.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-ubah-hentakan-tenun-jadi-listrik-pompa-air",
  "category": "BUMN",
  "title": "Pertamina Ubah Hentakan Tenun Jadi Listrik Pompa [Air]",
  "deck": "Program Pertamina Patra Niaga di Desa Sukarara, NTB, menaikkan pendapatan perajin tenun dari sekitar Rp25.000 menjadi minimal Rp750.000 per kain, sekaligus mengubah gerak alat tenun jadi listrik untuk pompa air.",
  "date": "9 Oktober 2026",
  "image": "assets/img/pertamina-ubah-hentakan-tenun-jadi-listrik-pompa-air.jpg",
  "imageV": "mv0zlua3",
  "tags": [
   "pertamina",
   "tenun ntb",
   "pemberdayaan perempuan",
   "air bersih"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472099-inovasi-mina-tenun-di-desa-sukarara-ntb-ubah-hentakan-alat-tenun-jadi-listrik-pompa-air"
 },
 {
  "slug": "gwsa-tegaskan-kebakaran-menara-batavia-bukan-aset-perusahaan",
  "category": "Aksi Korporasi",
  "title": "GWSA Tegaskan [Kebakaran] Menara Batavia Bukan Aset Perusahaan",
  "deck": "GWSA menjelaskan ke BEI bahwa kebakaran di Menara Batavia pada 8 Oktober 2026 bukan terjadi di asetnya, melainkan di gedung lain yang namanya mirip dengan proyek miliknya, TCC Batavia Tower One.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GWSA",
   "kebakaran",
   "keterbukaan informasi",
   "Menara Batavia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/71a1aa6ddd_171549a24b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bswd-papar-suspensi-saham-dan-tenggat-free-float-2029",
  "category": "Aksi Korporasi",
  "title": "BSWD Papar Suspensi Saham dan Tenggat Free Float [2029]",
  "deck": "BOI Indonesia (BSWD) menjawab soal suspensi saham, kesenjangan dana pihak ketiga, dan tenggat free float 2029 dalam public expose insidental 8 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "Bank of India Indonesia",
   "Suspensi Saham",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/05d227840f_1beefbb82a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-lombok-antusias-sambut-motogp-mandalika-2026",
  "category": "UMKM",
  "title": "UMKM Lombok [Antusias] Sambut MotoGP Mandalika 2026",
  "deck": "Pelaku usaha kecil di sekitar Mandalika menyambut gelaran MotoGP sebagai peluang memperkenalkan produk lokal ke wisatawan dari berbagai negara.",
  "date": "9 Oktober 2026",
  "image": "assets/img/umkm-lombok-antusias-sambut-motogp-mandalika-2026.jpg",
  "imageV": "mv0zluqi",
  "tags": [
   "UMKM",
   "MotoGP Mandalika",
   "Pertamina",
   "NTB"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472085-umkm-lokal-antusias-sambut-hadirnya-grand-prix-of-indonesia-2026"
 },
 {
  "slug": "zone-tancorp-tambah-saham-hak-suara-ke-28-47",
  "category": "Aksi Korporasi",
  "title": "ZONE: TANCORP [Tambah] Saham, Hak Suara ke 28,47%",
  "deck": "TANCORP Investama Mulia membeli 41,9 juta saham ZONE lewat mekanisme repo, mengangkat hak suaranya dari 23,65 persen menjadi 28,47 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZONE",
   "Mega Perintis",
   "kepemilikan saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-6904-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppri-pemegang-saham-jual-21-4-juta-saham-hak-suara-ke-10-76",
  "category": "Aksi Korporasi",
  "title": "PPRI: Pemegang Saham Jual 21,4 Juta Saham, Hak Suara ke [10,76%]",
  "deck": "Budi Aditya Erna Mulyanto melepas 21,47 juta saham PPRI pada 8 Oktober 2026 seharga Rp186 per saham, memangkas hak suaranya dari 12,76 persen menjadi 10,76 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRI",
   "divestasi saham",
   "kepemilikan saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-1008-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bino-lewati-tenggat-refloat-129-juta-saham-belum-ke-publik",
  "category": "Aksi Korporasi",
  "title": "BINO Lewati Tenggat [Refloat], 129 Juta Saham Belum ke Publik",
  "deck": "Pengendali BINO belum menuntaskan wajib lepas saham usai tender offer 2024; tenggat dua tahun berakhir 5 September 2026 dengan realisasi nol persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINO",
   "refloat",
   "tender offer",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dec6dac01a_4903270b52.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-buyback-saham-tembus-1-99-per-9-oktober",
  "category": "Aksi Korporasi",
  "title": "PRDA [Buyback] Saham Tembus 1,99% per 9 Oktober",
  "deck": "Prodia Widyahusada telah membeli kembali 18,6 juta saham atau 1,99 persen dari total saham beredar sejak 20 Agustus, dengan sisa dana buyback Rp98,03 miliar dari pagu sekitar Rp150 miliar.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "pasar modal",
   "Prodia Widyahusada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6db0e7439b_172afd1d18.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnma-koreksi-format-laporan-realisasi-dana-ipo-nilai-tetap",
  "category": "Aksi Korporasi",
  "title": "CNMA Koreksi Format Laporan [Realisasi] Dana IPO, Nilai Tetap",
  "deck": "Cinema XXI (CNMA) merevisi format laporan realisasi dana IPO Rp2,17 triliun sesuai aturan OJK baru, tanpa mengubah angka yang sudah dilaporkan sebelumnya.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNMA",
   "IPO",
   "penggunaan dana",
   "Cinema XXI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5e98d35680_c6f332d4ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-komisaris-billy-sabarto-lepas-576-saham-hak-suara-tetap-0",
  "category": "Aksi Korporasi",
  "title": "BEEF: Komisaris Billy Sabarto [lepas] 576 saham, hak suara tetap 0%",
  "deck": "Komisaris Estika Tata Tiara, Billy Sabarto, melepas seluruh 576 lembar sahamnya lewat tiga transaksi kecil pada 6 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "Estika Tata Tiara",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-0233-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-ganti-direksi-dan-ubah-penggunaan-dana-rights-issue",
  "category": "Aksi Korporasi",
  "title": "CASH Ganti Direksi dan Ubah Penggunaan Dana [Rights Issue]",
  "deck": "RUPSLB Cashlez pada 8 Oktober 2026 menyetujui pergantian direktur, pindah alamat kantor, penyesuaian klasifikasi usaha, dan perubahan rencana pakai dana rights issue I.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "RUPSLB",
   "Pergantian Direksi",
   "Rights Issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/baec839755_8595d28054.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-lunasi-obligasi-rp2-98-triliun-jatuh-tempo-12-okt",
  "category": "Aksi Korporasi",
  "title": "OPPM [lunasi] obligasi Rp2,98 triliun jatuh tempo 12 Okt",
  "deck": "Empat seri obligasi dan sukuk OPPM senilai Rp2,98 triliun plus obligasi dolar jatuh tempo dan delisting dari BEI pada 12 Oktober 2026, dengan dana pelunasan yang sudah disiapkan penuh dari kas.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi",
   "sukuk",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5110c74978_dd3cd91895.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xrdn-unit-penyertaan-etf-kas-bertumbuh-berkurang-58-4-juta",
  "category": "Aksi Korporasi",
  "title": "XRDN: [Unit Penyertaan] ETF Kas Bertumbuh Berkurang 58,4 Juta",
  "deck": "Jumlah unit penyertaan Reksa Dana Indo ETF RDN Kas Bertumbuh (XRDN) turun 58,4 juta unit menjadi 22,91 miliar unit per 8 Oktober 2026, tanpa ada unit baru yang diterbitkan.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XRDN",
   "ETF",
   "reksa dana",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/881947f299_fcd1034def.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xrdn-unit-penyertaan-etf-susut-256-2-juta",
  "category": "Aksi Korporasi",
  "title": "XRDN: Unit Penyertaan ETF [Susut] 256,2 Juta",
  "deck": "Unit penyertaan ETF RDN Kas Bertumbuh (XRDN) turun dari 23.227.700.000 menjadi 22.971.500.000 unit per 7 Oktober 2026, berkurang 256.200.000 unit tanpa ada penambahan baru.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XRDN",
   "ETF",
   "reksa dana",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f013c8f338_1b9fdc498e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agii-siapkan-dana-rp76-5-miliar-lunasi-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "AGII siapkan dana [Rp76,5 miliar] lunasi obligasi dan sukuk",
  "deck": "PT Samator Indo Gas Tbk memastikan dana pelunasan obligasi Rp41 miliar dan sukuk ijarah Rp35,5 miliar yang jatuh tempo 10 Oktober 2026 sudah tersedia di rekening perusahaan.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "obligasi",
   "sukuk",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ffeed49aaf_eccfed830f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vktr-catat-rights-issue-15-miliar-saham-harga-rp200",
  "category": "Aksi Korporasi",
  "title": "VKTR Catat Rights Issue [15 Miliar Saham] Harga Rp200",
  "deck": "BEI resmi mencatatkan rights issue VKTR sebanyak 15 miliar saham baru dengan harga pelaksanaan Rp200 per saham, periode pelaksanaan 12-23 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/98a9bbedb9_416616aa27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmhs-wakil-presiden-komisaris-shubhasish-chattoraj-mundur",
  "category": "Aksi Korporasi",
  "title": "BMHS: Wakil Presiden Komisaris Shubhasish Chattoraj [Mundur]",
  "deck": "Wakil Presiden Komisaris BMHS, Shubhasish Chattoraj, mengajukan pengunduran diri pada 7 Oktober 2026. Perseroan akan menggelar RUPSLB untuk meminta persetujuan pemegang saham.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMHS",
   "Bundamedik",
   "komisaris",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/676086acd1_98cb280276.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-catatkan-saham-baru-serapan-rights-issue-cuma-18",
  "category": "Aksi Korporasi",
  "title": "BAJA catatkan saham baru, [serapan] rights issue cuma 18%",
  "deck": "IDX mencatat tambahan 111.451 saham BAJA dari pelaksanaan HMETD. Setelah periode rights issue tutup 7 Oktober 2026, baru sekitar 18 persen dari maksimal 900 juta saham yang terserap.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "rights issue",
   "HMETD",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/666bed80b4_b9e0eab1af.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coke-catatkan-obligasi-rp2-triliun-di-bei-12-oktober",
  "category": "Aksi Korporasi",
  "title": "COKE catatkan [obligasi] Rp2 triliun di BEI 12 Oktober",
  "deck": "PT Maruwai Coal (COKE) mencatatkan Obligasi I Maruwai Coal Tahun 2026 senilai Rp2 triliun di BEI mulai 12 Oktober 2026, dengan rating idAA dari Pefindo.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COKE",
   "obligasi korporasi",
   "BEI",
   "ADRO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/df651d8cbb_6dd49ba05c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beli-pendapatan-blibli-melonjak-55-ke-rp14-8-triliun",
  "category": "Aksi Korporasi",
  "title": "BELI: Pendapatan Blibli Melonjak [55%] ke Rp14,8 Triliun",
  "deck": "Materi Public Expose BELI mengungkap pendapatan 1H26 naik 55 persen jadi Rp14,8 triliun, margin membaik, dan pergantian Komisaris Utama hasil RUPST.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BELI",
   "Blibli",
   "Public Expose",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d6ff9e0a48_12f61b11ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "motogp-mandalika-2026-buka-kerja-musiman-untuk-warga-lombok",
  "category": "Ketenagakerjaan",
  "title": "MotoGP Mandalika 2026 Buka Kerja [Musiman] untuk Warga Lombok",
  "deck": "Gelaran Pertamina Grand Prix of Indonesia 2026 di Sirkuit Mandalika membuka lowongan musiman bagi warga Lombok, dari petugas kebersihan hingga pengelola sampah.",
  "date": "9 Oktober 2026",
  "image": "assets/img/motogp-mandalika-2026-buka-kerja-musiman-untuk-warga-lombok.jpg",
  "imageV": "mv0u3z12",
  "tags": [
   "pertamina",
   "mandalika",
   "lombok",
   "ketenagakerjaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472078-pertamina-grand-prix-of-indonesia-2026-ciptakan-peluang-kerja-musiman-bagi-warga-lombok"
 },
 {
  "slug": "smar-jadwalkan-rupslb-17-november-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "SMAR Jadwalkan [RUPSLB] 17 November, Agenda Belum Diumumkan",
  "deck": "SMAR mengumumkan rencana RUPSLB pada 17 November 2026. Pemegang saham yang berhak hadir tercatat per 23 Oktober, usulan agenda ditutup 19 Oktober.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "RUPSLB",
   "Sinar Mas Agro Resources and Technology",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/75bc9df9fb_af796057b6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-umumkan-jatuh-tempo-16-waran-terstruktur-pada-30-oktober",
  "category": "Aksi Korporasi",
  "title": "ZP Umumkan [Jatuh Tempo] 16 Waran Terstruktur pada 30 Oktober",
  "deck": "16 waran terstruktur acuan ASII, TLKM, SMGR, dan sejumlah saham lain jatuh tempo 30 Oktober 2026; penyelesaian tunai dihitung dari rata-rata harga saham acuan lima hari sebelumnya.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "ASII",
   "TLKM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/37cd1f343c_59a4cd3df4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "alii-abundantia-fund-jual-bersih-6-200-saham-hak-suara-tetap",
  "category": "Aksi Korporasi",
  "title": "ALII: Abundantia Fund [Jual] Bersih 6.200 Saham, Hak Suara Tetap",
  "deck": "Abundantia Fund SPC melaporkan beli 73.800 dan jual 80.000 saham ALII, net berkurang 6.200 lembar. Hak suara tetap di 4,9998 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALII",
   "kepemilikan saham",
   "Abundantia Fund",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-7352-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-komisaris-iriawan-ibarat-jual-235-300-saham",
  "category": "Aksi Korporasi",
  "title": "PSSI: Komisaris Iriawan Ibarat [Jual] 235.300 Saham",
  "deck": "Komisaris PSSI, Iriawan Ibarat, melepas 235.300 saham dalam enam transaksi sejak 15 September hingga 5 Oktober, mengurangi hak suaranya dari 0,255% menjadi 0,251%.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "Kepemilikan Saham",
   "Komisaris",
   "Divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-8741-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menteri-pu-pastikan-irigasi-siap-untuk-panen-perdana-di-merauke",
  "category": "Makroekonomi",
  "title": "Menteri PU Pastikan Irigasi Siap untuk [Panen] Perdana di Merauke",
  "deck": "Dody Hanggodo meninjau KSPEAN Wanam, Merauke, memastikan irigasi siap menopang panen perdana padi di lahan 40 hektare pada November 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/menteri-pu-pastikan-irigasi-siap-untuk-panen-perdana-di-merauke.jpg",
  "imageV": "mv0u3zig",
  "tags": [
   "Kementerian PU",
   "KSPEAN",
   "Merauke",
   "Swasembada Pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472074-tinjau-kspean-wanam-menteri-dody-pastikan-panen-perdana-dukung-visi-presiden-prabowo"
 },
 {
  "slug": "tara-jelaskan-ke-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "TARA Jelaskan ke BEI soal [Volatilitas] Transaksi Sahamnya",
  "deck": "BEI meminta TARA menjelaskan volatilitas transaksi sahamnya; manajemen menyatakan tidak mengetahui ada informasi material atau aktivitas pemegang saham tertentu yang memicunya.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TARA",
   "UMA",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/71bebf3ec4_0f32c49e09.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-direksi-jual-5-300-saham-hak-suara-tetap-0-04",
  "category": "Aksi Korporasi",
  "title": "NICK: Direksi [Jual] 5.300 Saham, Hak Suara Tetap 0,04%",
  "deck": "Nicholas Santoso, direksi Charnic Capital, melepas 5.300 saham NICK pada 8 Oktober 2026. Porsi yang dijual kecil dan hak suaranya tidak berubah.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-2726-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heli-alta-internasional-lepas-9-2-juta-saham-hak-suara-ke-14-9",
  "category": "Aksi Korporasi",
  "title": "HELI: Alta Internasional [Lepas] 9,2 Juta Saham, Hak Suara ke 14,9%",
  "deck": "PT Alta Internasional Indonesia menjual 9,2 juta saham Jaya Trishindo Tbk (HELI) seharga Rp342 per saham untuk tujuan divestasi, hak suaranya turun dari 16% jadi 14,9%.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HELI",
   "kepemilikan saham",
   "divestasi",
   "Jaya Trishindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-0522-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdki-proyek-pabrik-ferro-silica-dan-cilegon-tertunda",
  "category": "Aksi Korporasi",
  "title": "MDKI: Proyek Pabrik Ferro Silica dan Cilegon [Tertunda]",
  "deck": "Emdeki Utama (MDKI) melaporkan proyek pabrik ferro silica dan carbide desulphuriser Cilegon masih tertunda, sementara sisa dana IPO Rp62,98 miliar tersimpan di deposito berbunga 4,5 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKI",
   "penggunaan dana IPO",
   "ferro silica",
   "carbide desulphuriser"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/fcd93b308d_0a2f63c2b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-koreksi-realisasi-dana-ipo-rp136-76-m-tertahan-di-cirebon",
  "category": "Aksi Korporasi",
  "title": "AVIA Koreksi Realisasi Dana IPO, Rp136,76 M [Tertahan] di Cirebon",
  "deck": "Avia Avian merevisi laporan realisasi dana IPO per Juni 2026: belanja modal meleset dari target, sisa Rp136,76 miliar menunggu penyelesaian pabrik baru di Cirebon, target medio 2027.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "Avia Avian",
   "penggunaan dana IPO",
   "capex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3c268c1dc5_d4906ad176.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ammn-jadwalkan-rupslb-17-november-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "AMMN Jadwalkan RUPSLB 17 November, [Agenda] Menyusul",
  "deck": "Amman Mineral Internasional menjadwalkan RUPSLB pada 17 November 2026, dengan tanggal pencatatan pemegang saham 23 Oktober 2026 dan agenda baru diumumkan 26 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMMN",
   "RUPSLB",
   "Amman Mineral Internasional",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c449df23cf_a96f64574e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-laporkan-realisasi-dana-obligasi-sukuk-rp3-67-triliun",
  "category": "Aksi Korporasi",
  "title": "LPPI Laporkan Realisasi Dana Obligasi-Sukuk [Rp3,67 Triliun]",
  "deck": "LPPI mengoreksi laporan realisasi dana hasil penerbitan obligasi dan sukuk senilai total Rp3,67 triliun, dengan sisa dana Rp162,8 miliar dari satu tranche masih mengendap di bank.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "obligasi",
   "sukuk",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/ea463ab5cc_3176736959.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppri-direksi-jual-24-4-juta-saham-hak-suara-ke-10-34",
  "category": "Aksi Korporasi",
  "title": "PPRI: Direksi Jual 24,4 Juta Saham, Hak Suara ke [10,34%]",
  "deck": "Direksi PPRI Irsyad Hanif melepas 24,4 juta saham seharga Rp182-193 per lembar pada 6-7 Oktober, hak suaranya turun dari 12,61% menjadi 10,34%.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRI",
   "Irsyad Hanif",
   "divestasi saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-7699-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "drma-komisaris-lepas-143-300-saham-divestment",
  "category": "Aksi Korporasi",
  "title": "DRMA: Komisaris Lepas 143.300 Saham [Divestment]",
  "deck": "Komisaris DRMA, Noel Aelyo Laras Kusuma Negara, melepas 143.300 saham secara tidak langsung dalam empat transaksi pada 2-5 Oktober 2026, hak suaranya turun dari 1,80% menjadi 1,79%.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "kepemilikan saham",
   "komisaris",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-1970-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koci-habiskan-dana-rp6-99-miliar-dari-konversi-waran-seri-i",
  "category": "Aksi Korporasi",
  "title": "KOCI Habiskan Dana Rp6,99 Miliar dari Konversi [Waran] Seri I",
  "deck": "PT Kokoh Exa Nusantara melaporkan ke OJK bahwa seluruh Rp6,99 miliar dana dari konversi Waran Seri I sudah terpakai untuk modal kerja dan pembangunan proyek.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOCI",
   "waran",
   "penggunaan dana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8b0f600d24_fed506f7d6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-sots-turun-2-38-saat-volume-transaksi-melonjak",
  "category": "Aksi Korporasi",
  "title": "Saham SOTS Turun 2,38% Saat Volume Transaksi [Melonjak]",
  "deck": "BEI minta penjelasan setelah saham Satria Mega Kencana ditutup turun ke Rp615 pada 6 Oktober 2026, dengan volume dan frekuensi transaksi naik tajam dari hari sebelumnya.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOTS",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/83aa5093a5_3d76890b17.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trin-komisaris-utama-mundur-keputusan-final-di-rupslb",
  "category": "Aksi Korporasi",
  "title": "TRIN: Komisaris Utama [Mundur], Keputusan Final di RUPSLB",
  "deck": "Rahayu Saraswati D. Djojohadikusumo mengundurkan diri sebagai Komisaris Utama TRIN per 7 Oktober 2026, menunggu persetujuan RUPSLB.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIN",
   "komisaris utama",
   "pengunduran diri",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/460821ac28_275111e10f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-latih-pelaku-homestay-mandalika-jelang-motogp",
  "category": "UMKM",
  "title": "Pertamina Latih Pelaku [Homestay] Mandalika Jelang MotoGP",
  "deck": "Pertamina dan Unram latih pengelola homestay Desa Kuta soal hospitality, bahasa Inggris, dan kelola sampah menjelang MotoGP Mandalika 9-11 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/pertamina-latih-pelaku-homestay-mandalika-jelang-motogp.jpg",
  "imageV": "mv0pw5z1",
  "tags": [
   "pertamina",
   "homestay mandalika",
   "motogp indonesia 2026",
   "desa energi berdikari"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472044-ajang-balapan-jadi-magnet-pertamina-dorong-homestay-lokal-naik-kelas"
 },
 {
  "slug": "lopi-panggil-rupslb-ketiga-bahas-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "LOPI Panggil RUPSLB Ketiga Bahas [PMTHMETD]",
  "deck": "Setelah dua kali gagal kuorum, LOPI menggelar RUPSLB ketiga pada 19 Oktober 2026 untuk meminta persetujuan penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "RUPSLB",
   "PMTHMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/555fa206f8_27c84096e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mandiri-jadi-bank-pertama-kantongi-lisensi-bulion",
  "category": "Perbankan",
  "title": "Mandiri Jadi Bank Pertama Kantongi Lisensi [Bulion]",
  "deck": "Bank Mandiri meluncurkan layanan emas terintegrasi di Livin' by Mandiri setelah menjadi bank konvensional pertama di Indonesia yang mengantongi lisensi bulion dari OJK.",
  "date": "9 Oktober 2026",
  "image": "assets/img/mandiri-jadi-bank-pertama-kantongi-lisensi-bulion.jpg",
  "imageV": "mv0pw6bu",
  "tags": [
   "emas",
   "bulion",
   "bank mandiri",
   "livin by mandiri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472039-bank-mandiri-resmi-hadirkan-ekosistem-bulion-terintegrasi-di-livin-by-mandiri"
 },
 {
  "slug": "11-proyek-hilirisasi-nikel-senilai-rp180-triliun-diluncurkan-di-iwip",
  "category": "Industri",
  "title": "11 Proyek Hilirisasi Nikel Senilai [Rp180] Triliun Diluncurkan di IWIP",
  "deck": "Presiden Prabowo Subianto meluncurkan 11 proyek hilirisasi nikel senilai US$10,2 miliar di IWIP, Maluku Utara, sekaligus melepas ekspor perdana baterai kendaraan listrik.",
  "date": "9 Oktober 2026",
  "image": "assets/img/mesin-tekstil.jpg",
  "tags": [
   "hilirisasi nikel",
   "IWIP",
   "Maluku Utara",
   "baterai kendaraan listrik"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7139/pemerintah-terus-memantau-kebijakan-hilirisasi-untuk-mendorong-pertumbuhan-ekonomi-dan-kebermanfaatannya-bagi-masyarakat-luas",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "airlangga-talenta-digital-kunci-ekonomi-ri-ke-depan",
  "category": "Makroekonomi",
  "title": "Airlangga: Talenta [Digital] Kunci Ekonomi RI ke Depan",
  "deck": "Menko Airlangga menyebut penguasaan teknologi digital dan hilirisasi industri jadi mesin pertumbuhan baru, di tengah ekonomi RI yang tumbuh 5,45 persen pada semester I 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "Airlangga Hartarto",
   "hilirisasi",
   "ekonomi digital",
   "PLTS"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7140/menko-airlangga-penguasaan-teknologi-dan-talenta-generasi-muda-yang-digital-literate-jadi-kunci-next-economy",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pgli-gelar-public-expose-usai-bursa-suspensi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PGLI Gelar Public Expose Usai Bursa [Suspensi] Sahamnya",
  "deck": "BEI menghentikan sementara perdagangan saham PGLI, memaksa manajemen menggelar Public Expose Insidentil pada 13 Oktober 2026 untuk menjelaskan pergerakan harga sahamnya.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGLI",
   "suspensi saham",
   "Bursa Efek Indonesia",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3e51b7b450_de6338119d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikai-repo-raja-sapta-oktohari-beli-2-38-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IKAI: [Repo] Raja Sapta Oktohari Beli 2,38 Juta Saham",
  "deck": "Raja Sapta Oktohari melaporkan pembelian 2.379.500 saham IKAI seharga Rp21 per lembar, hak suaranya naik dari nol menjadi 0,02 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKAI",
   "kepemilikan saham",
   "pasar modal",
   "Intikeramik Alamasri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-5044-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gema-jadwalkan-rupslb-17-november-cum-date-23-oktober",
  "category": "Aksi Korporasi",
  "title": "GEMA Jadwalkan [RUPSLB] 17 November, Cum Date 23 Oktober",
  "deck": "Gema Grahasarana akan menggelar RUPSLB pada 17 November 2026, dengan pemegang saham per 23 Oktober 2026 yang berhak hadir dan memberi suara secara elektronik.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMA",
   "RUPSLB",
   "pasar modal",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/75d38cbb34_43fdbad93e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-prambanan-investasi-divestasi-234-juta-saham",
  "category": "Aksi Korporasi",
  "title": "DOOH: Prambanan Investasi [Divestasi] 234 Juta Saham",
  "deck": "Pemegang saham Prambanan Investasi Sukses melepas 234,09 juta saham DOOH di Rp350 per saham, memangkas hak suaranya dari 15,09% menjadi 12,06%.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Kepemilikan Saham",
   "Divestasi",
   "Hak Suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-8852-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lucy-hp-capital-jual-50-4-juta-saham-suara-ke-7-67",
  "category": "Aksi Korporasi",
  "title": "LUCY: HP Capital Jual 50,4 Juta Saham, Suara ke [7,67%]",
  "deck": "HP Capital Resources melepas 50,4 juta saham LUCY dalam tiga hari transaksi, memangkas hak suaranya dari 11,99% menjadi 7,67%.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LUCY",
   "kepemilikan saham",
   "HP Capital Resources",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-3515-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-tak-ada-info-material-di-balik-volatilitas-harga-saham",
  "category": "Aksi Korporasi",
  "title": "CSIS: Tak Ada Info Material di Balik [Volatilitas] Harga Saham",
  "deck": "Merespons permintaan Bursa Efek Indonesia, CSIS menyatakan tidak memiliki informasi material yang menjelaskan pergerakan harga sahamnya, termasuk rencana aksi korporasi dalam tiga bulan mendatang.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSIS",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f7872aec53_8fc6eedfe7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-gelar-public-expose-tahun-buku-2022-tertunda-4-tahun",
  "category": "Aksi Korporasi",
  "title": "POOL Gelar Public Expose Tahun Buku 2022, [Tertunda] 4 Tahun",
  "deck": "Pool Advista Indonesia baru menggelar public expose untuk tahun buku 2022 pada 23 Oktober 2026, empat tahun setelah periode itu berakhir.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "public expose",
   "keterlambatan pelaporan",
   "kepatuhan emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6df629c7ae_950646be5f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-umumkan-rupslb-17-november-dps-23-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "SMMA Umumkan [RUPSLB] 17 November, DPS 23 Oktober 2026",
  "deck": "PT Sinar Mas Multiartha Tbk (SMMA) akan menggelar Rapat Umum Pemegang Saham Luar Biasa pada 17 November 2026 di Jakarta, dengan pemegang saham yang tercatat per 23 Oktober 2026 berhak hadir.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "RUPSLB",
   "Sinar Mas Multiartha",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e5b3190664_27a2a546fe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "piki-pefindo-tegaskan-peringkat-aaa-untuk-pelindo-dan-obligasinya",
  "category": "Aksi Korporasi",
  "title": "PIKI: Pefindo Tegaskan Peringkat [AAA] untuk Pelindo dan Obligasinya",
  "deck": "Pefindo mempertahankan peringkat idAAA/Stable untuk Pelindo (PIKI) dan obligasi senilai Rp800 miliar untuk periode Oktober 2026-2027, peringkat tertinggi kelima tahun berturut-turut.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIKI",
   "Pefindo",
   "obligasi",
   "rating kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4ece31af77_0b72da34cb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-jadwalkan-pelaksanaan-konversi-utang-jadi-saham-19-oktober",
  "category": "Aksi Korporasi",
  "title": "APEX Jadwalkan [Pelaksanaan] Konversi Utang Jadi Saham 19 Oktober",
  "deck": "Apexindo menjadwalkan penerbitan 218,09 juta saham baru pada 19 Oktober 2026 untuk melunasi utang ke kreditor sindikasi luar negeri, menambah saham beredar 5,79 persen.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "PMTHMETD",
   "konversi utang",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c2fefd31bd_8bab1e7c82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-lagi-75-900-saham",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [jual] lagi 75.900 saham",
  "deck": "Dewan Komisaris Henry Liem melepas 75.900 saham AKPI pada 7-8 Oktober 2026 di harga Rp520 per saham, kepemilikannya turun jadi 1,02% hak suara.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "kepemilikan saham",
   "komisaris",
   "Argha Karya Prima"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-8858-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penjualan-eceran-september-2026-diprakirakan-naik-1-4",
  "category": "Makroekonomi",
  "title": "Penjualan Eceran September 2026 Diprakirakan [Naik] 1,4%",
  "deck": "Bank Indonesia memprakirakan penjualan eceran tumbuh 1,4 persen secara tahunan pada September 2026, sementara ekspektasi harga untuk dua periode mendatang ikut menguat.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penjualan-eceran-september-2026-diprakirakan-naik-1-4.jpg",
  "imageV": "mv0dur8h",
  "tags": [
   "Penjualan Eceran",
   "Bank Indonesia",
   "Inflasi",
   "Survei BI"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2821726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "poli-catat-laba-rp57-7-m-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "POLI Catat Laba Rp57,7 M, Arus Kas Operasi [Negatif]",
  "deck": "Dalam public expose tahunan 8 Oktober, manajemen POLI menjawab pertanyaan investor soal arus kas operasi negatif, penggunaan dana obligasi Rp500 miliar, dan kinerja segmen hotel yang stagnan.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POLI",
   "public expose",
   "arus kas",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/db78dccd03_a058f46987.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pefindo-pangkas-rating-ptpp-ke-idccc-outlook-negatif",
  "category": "Aksi Korporasi",
  "title": "Pefindo Pangkas Rating PTPP ke [idCCC], Outlook Negatif",
  "deck": "Pefindo menurunkan rating PTPP dan surat utangnya dari idB menjadi idCCC dengan status CreditWatch negatif, menyusul penundaan pembayaran kupon obligasi yang jatuh tempo 2 Oktober 2026.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "rating",
   "obligasi",
   "Pefindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d0a0061d38_09201c5df2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-anak-usaha-wwe-lepas-kendali-ke-investor-pt-edt",
  "category": "Aksi Korporasi",
  "title": "WSKT: Anak Usaha WWE [Lepas Kendali] ke Investor PT EDT",
  "deck": "Anak usaha Waskita, PT Waskita Wado Energi, berganti pengendali ke investor PT EDT lewat suntikan modal Rp14,1 miliar, menyisakan WKI sebagai pemegang saham minoritas tipis.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "Waskita Karya",
   "Waskita Wado Energi",
   "perubahan pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5b9f0d2e81_3a1e278fb2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menteri-transmigrasi-jadikan-rempang-contoh-ekonomi-kawasan",
  "category": "Ketenagakerjaan",
  "title": "Menteri Transmigrasi Jadikan [Rempang] Contoh Ekonomi Kawasan",
  "deck": "Menteri Transmigrasi Iftitah Sulaiman menjadikan Rempang-Galang contoh kawasan yang diarahkan ke industri dan lapangan kerja, bukan sekadar perpindahan penduduk.",
  "date": "9 Oktober 2026",
  "image": "assets/img/menteri-transmigrasi-jadikan-rempang-contoh-ekonomi-kawasan.jpg",
  "imageV": "mv0durnf",
  "tags": [
   "transmigrasi",
   "rempang",
   "batam",
   "kepulauan riau"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472012-menteri-transmigrasi-dorong-ekonomi-kawasan-rempang-jadi-contoh"
 },
 {
  "slug": "grand-prix-mandalika-dorong-ekonomi-lokal-lombok",
  "category": "UMKM",
  "title": "Grand Prix Mandalika Dorong [Ekonomi] Lokal Lombok",
  "deck": "Balapan dunia di Sirkuit Mandalika, Lombok, pada 9-11 Oktober 2026 kembali mendongkrak penjualan UMKM kuliner dan jasa wisata lokal.",
  "date": "9 Oktober 2026",
  "image": "assets/img/grand-prix-mandalika-dorong-ekonomi-lokal-lombok.jpg",
  "imageV": "mv0duscg",
  "tags": [
   "pertamina",
   "mandalika",
   "lombok",
   "umkm"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/472011-dampak-pertamina-grand-prix-of-indonesia-2026-aktivitas-ekonomi-lokal-kian-melesat"
 },
 {
  "slug": "btps-investor-non-insider-lapor-perubahan-kepemilikan-saham",
  "category": "Aksi Korporasi",
  "title": "BTPS: Investor Non-Insider Lapor Perubahan [Kepemilikan] Saham",
  "deck": "Mustaqim Akbar, bukan direksi atau komisaris, melaporkan pembelian 1 lembar saham BTPS; hak suaranya tercatat naik dari 0% ke 6,16% dalam dokumen resmi ke OJK.",
  "date": "9 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "kepemilikan saham",
   "hak suara",
   "Bank BTPN Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09102026-0316-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
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
  "slug": "transmigrasi-kini-diarahkan-jadi-pusat-ekonomi-baru",
  "category": "Ketenagakerjaan",
  "title": "Transmigrasi Kini Diarahkan Jadi [Pusat] Ekonomi Baru",
  "deck": "Kementerian Transmigrasi mengubah pendekatan: sebelum memindahkan penduduk, pemerintah kini harus memastikan dulu ada pasar, investor, dan lapangan kerja di kawasan tujuan.",
  "date": "8 Oktober 2026",
  "image": "assets/img/transmigrasi-kini-diarahkan-jadi-pusat-ekonomi-baru.jpg",
  "imageV": "mv02a8k4",
  "tags": [
   "transmigrasi",
   "ekonomi kawasan",
   "koperasi",
   "Batam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471973-transmigrasi-tak-lagi-sekadar-pindah-penduduk-pemerintah-bidik-pusat-ekonomi-baru"
 },
 {
  "slug": "wajib-halal-berlaku-18-oktober-aturan-turunan-dikejar",
  "category": "Industri",
  "title": "Wajib Halal Berlaku 18 Oktober, Aturan Turunan [Dikejar]",
  "deck": "Kewajiban sertifikasi halal, termasuk untuk alat kesehatan risiko A, resmi berlaku 18 Oktober 2026, sementara aturan teknis penahapannya ditargetkan rampung 11 Oktober.",
  "date": "8 Oktober 2026",
  "image": "assets/img/moneter-bi.jpg",
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
  "image": "assets/img/petani-sawah.jpg",
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
  "slug": "bp-batam-susun-7-pilar-genjot-ekosistem-investasi",
  "category": "Bisnis",
  "title": "BP Batam Susun 7 Pilar, Genjot [Ekosistem] Investasi",
  "deck": "BP Batam merumuskan tujuh pilar pembangunan kawasan, dengan penekanan khusus pada dukungan berkelanjutan bagi investasi yang sudah masuk ke Batam.",
  "date": "8 Oktober 2026",
  "image": "assets/img/bp-batam-susun-7-pilar-genjot-ekosistem-investasi.jpg",
  "imageV": "mv0dusrw",
  "tags": [
   "batam",
   "bp batam",
   "investasi",
   "barelang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/471920-7-pilar-pengembangan-batam-investasi-masuk-harus-didukung-ekosistem-yang-siap"
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
  "image": "assets/img/bisnis-resto.jpg",
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
  "image": "assets/img/teknologi-logistik.jpg",
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
 }
];
