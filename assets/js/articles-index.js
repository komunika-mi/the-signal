// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/global-pelabuhan.jpg",
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
  "image": "assets/img/wisatawan-kopi.jpg",
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
  "image": "assets/img/warung-makan.jpg",
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
  "image": "assets/img/sidang-dpr.jpg",
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
 },
 {
  "slug": "bach-teken-kredit-rp450-miliar-dengan-maybank-indonesia",
  "category": "Aksi Korporasi",
  "title": "BACH Teken [Kredit] Rp450 Miliar dengan Maybank Indonesia",
  "deck": "BACH menandatangani perjanjian kredit Rp450 miliar dengan Bank Maybank Indonesia untuk belanja modal dan modal kerja, setara 73 persen dari ekuitas perseroan per Juni 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BACH",
   "kredit",
   "Maybank Indonesia",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8f99b31166_b0ff1e7176.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-msin-bergejolak-manajemen-akui-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "Saham MSIN Bergejolak, Manajemen Akui Tak Ada Info [Material]",
  "deck": "BEI meminta penjelasan atas volatilitas transaksi saham MSIN. Manajemen menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIN",
   "volatilitas saham",
   "keterbukaan informasi",
   "HKEX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6b537aa61f_78cd69fefc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rgas-kantongi-rp59-5-miliar-fasilitas-kredit-bsi-agunan-afiliasi",
  "category": "Aksi Korporasi",
  "title": "RGAS Kantongi Rp59,5 Miliar [Fasilitas Kredit] BSI, Agunan Afiliasi",
  "deck": "Kian Santang Muliatama menambah limit line facility BSI dari Rp20 miliar menjadi Rp34,5 miliar dan memperoleh fasilitas baru Rp25 miliar, dengan agunan empat aset milik pihak afiliasi.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RGAS",
   "Bank Syariah Indonesia",
   "Fasilitas Kredit",
   "Minyak dan Gas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/24584719fb_29fe1b3eae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bata-direktur-ian-duncan-mcnab-cowe-mundur-diputuskan-rupslb",
  "category": "Aksi Korporasi",
  "title": "BATA: Direktur Ian Duncan Mcnab Cowe [Mundur], Diputuskan RUPSLB",
  "deck": "Direktur Sepatu Bata, Ian Duncan Mcnab Cowe, mengajukan pengunduran diri karena rotasi jabatan di Bata Group. Keputusan final menunggu RUPS perseroan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATA",
   "direksi",
   "pengunduran diri",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8606495df5_e8bfd497b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soss-bantah-ada-info-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "SOSS Bantah Ada Info Material soal [Volatilitas] Saham",
  "deck": "Menjawab surat Bursa Efek Indonesia soal lonjakan transaksi, ALSOK Indonesia Services (SOSS) menyatakan tidak ada informasi tersembunyi maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOSS",
   "ALSOK Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/64e9e53c5d_fa5a79f8d2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idea-gelar-rupslb-23-oktober-rombak-direksi-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "IDEA Gelar RUPSLB 23 Oktober, Rombak [Direksi] dan Komisaris",
  "deck": "RUPSLB IDEA digelar 23 Oktober 2026, membahas pergantian direksi dan komisaris, penegasan susunan pemegang saham, serta penyesuaian anggaran dasar dengan KBLI 2025.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDEA",
   "RUPSLB",
   "Direksi-Komisaris",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a2624d07aa_11ab00237d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-jelaskan-volatilitas-saham-ungkap-rencana-pengurangan-modal",
  "category": "Aksi Korporasi",
  "title": "GOTO Jelaskan Volatilitas Saham, Ungkap Rencana [Pengurangan] Modal",
  "deck": "GoTo menjelaskan ke BEI bahwa gejolak harga sahamnya dipicu keluarnya dari indeks MSCI dan FTSE, serta mengungkap rencana penarikan 32,19 miliar saham tresuri lewat RUPSLB 14 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "volatilitas saham",
   "pengurangan modal",
   "MSCI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bf4c948216_2213bd51bf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trin-jelaskan-anjlok-harga-saham-20-persen-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "TRIN Jelaskan [Anjlok] Harga Saham 20 Persen ke Bursa",
  "deck": "Saham TRIN anjlok 20,11 persen dalam tiga hari perdagangan, tapi manajemen menyatakan tidak ada informasi material yang memicu penurunan tersebut.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIN",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/08554a31f5_0e14f5a57b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "otma-resmi-merger-ke-summit-oto-finance-badan-hukum-berakhir",
  "category": "Aksi Korporasi",
  "title": "OTMA Resmi [Merger] ke Summit Oto Finance, Badan Hukum Berakhir",
  "deck": "Penggabungan PT Oto Multiartha (OTMA) ke PT Summit Oto Finance efektif 1 Oktober 2026. Seluruh aset, liabilitas, dan ekuitas beralih, status badan hukum OTMA berakhir.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OTMA",
   "merger",
   "Summit Oto Finance",
   "perusahaan pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/93b99ff145_ce0cf1ca2f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beer-coret-agenda-ganti-direksi-komisaris-dari-rupslb",
  "category": "Aksi Korporasi",
  "title": "BEER [Coret] Agenda Ganti Direksi-Komisaris dari RUPSLB",
  "deck": "RUPSLB BEER pada 2 Oktober 2026 kini hanya membahas penyesuaian anggaran dasar ke klasifikasi usaha KBLI 2025, setelah agenda pergantian direksi dan komisaris dibatalkan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEER",
   "RUPSLB",
   "Perubahan Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/68e1184f5b_7a81a8859c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofn-rampungkan-penggabungan-usaha-dengan-oto-multiartha",
  "category": "Aksi Korporasi",
  "title": "SOFN Rampungkan [Penggabungan] Usaha dengan Oto Multiartha",
  "deck": "Penggabungan usaha SOFN dan PT Oto Multiartha resmi efektif 1 Oktober 2026, seluruh aset, liabilitas, dan ekuitas Oto Multiartha beralih ke SOFN.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFN",
   "penggabungan usaha",
   "pembiayaan",
   "Oto Multiartha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3966f4e79d_ecab75aff8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-peringkat-naik-ke-idb-obligasi-garansi-tetap-aaa",
  "category": "Aksi Korporasi",
  "title": "WSKT: Peringkat [Naik] ke idB, Obligasi Garansi Tetap AAA",
  "deck": "PEFINDO menaikkan peringkat korporasi Waskita Karya dari idCCC ke idB dengan outlook negatif, sementara obligasi dan sukuk bergaransi pemerintah tetap bertahan di idAAA.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "peringkat kredit",
   "obligasi",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0442c113f5_50c8e00151.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgwg-targetkan-laba-rp250-miliar-bangun-pabrik-sumsel",
  "category": "Aksi Korporasi",
  "title": "DGWG Targetkan Laba Rp250 Miliar, Bangun Pabrik [Sumsel]",
  "deck": "Dalam public expose tahunan, manajemen DGWG memaparkan pertumbuhan pendapatan 46 persen, target laba bersih sekitar Rp250 miliar, dan investasi pabrik baru di Sumatera Selatan senilai Rp230 miliar.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "public expose",
   "capex",
   "ekspor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/18dd7c1308_8faa217552.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brna-rilis-rights-issue-rp372-6-miliar-dilusi-capai-42-55",
  "category": "Aksi Korporasi",
  "title": "BRNA Rilis Rights Issue Rp372,6 Miliar, [Dilusi] Capai 42,55%",
  "deck": "Berlina menerbitkan hingga 543,95 juta saham baru lewat HMETD senilai Rp372,6 miliar, dan sebagian besar dananya berasal dari konversi utang pemegang saham utama, bukan uang tunai segar.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRNA",
   "rights issue",
   "HMETD",
   "Berlina"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5ae0a64be0_2e81eba4b8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lmpi-rampungkan-rupslb-komisaris-independen-mundur",
  "category": "Aksi Korporasi",
  "title": "LMPI Rampungkan RUPSLB, Komisaris Independen [Mundur]",
  "deck": "RUPSLB LMPI menyetujui pengunduran diri Bing Hartono Poernomosidi sebagai komisaris independen dan mengukuhkan susunan direksi-komisaris baru hingga 2029.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LMPI",
   "RUPSLB",
   "Komisaris",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6713392f1d_bdf8192b6e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-rombak-direksi-kursi-direktur-berkurang-jadi-empat",
  "category": "Aksi Korporasi",
  "title": "LPPI [Rombak] Direksi, Kursi Direktur Berkurang Jadi Empat",
  "deck": "Lewat keputusan sirkuler pemegang saham, LPPI mengganti direksi dan komisaris sekaligus menghapus satu kursi direktur, efektif 1 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "pergantian direksi",
   "tata kelola perusahaan",
   "obligasi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/94ee970ccb_dd3598e2e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fast-perkara-pkpu-di-pn-niaga-jakarta-resmi-dicabut",
  "category": "Aksi Korporasi",
  "title": "FAST: Perkara [PKPU] di PN Niaga Jakarta Resmi Dicabut",
  "deck": "Pengadilan Niaga Jakarta Pusat mengabulkan pencabutan perkara PKPU yang diajukan empat individu terhadap PT Fast Food Indonesia Tbk, pengelola KFC di Indonesia.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAST",
   "PKPU",
   "Pengadilan Niaga",
   "KFC Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c055797864_090b5fb6ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ahap-kantongi-efektif-ojk-untuk-hmetd-rasio-7-5",
  "category": "Aksi Korporasi",
  "title": "AHAP Kantongi [Efektif] OJK untuk HMETD, Rasio 7:5",
  "deck": "OJK menyatakan efektif rencana rights issue AHAP sebanyak-banyaknya 3,5 miliar saham dengan rasio 7:5, harga pelaksanaan Rp50 per saham. Jadwal final penerbitan ditetapkan 8-26 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AHAP",
   "rights issue",
   "HMETD",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f384e5b8bb_d67453cbe2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btek-jawab-permintaan-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "BTEK Jawab Permintaan Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "Bumi Teknokultura Unggul (BTEK) menyatakan tidak ada informasi material yang memicu volatilitas transaksi sahamnya, menanggapi permintaan klarifikasi BEI.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTEK",
   "Bumi Teknokultura Unggul",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/52b3ad3764_24762e5b38.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-setujui-maybank-jadi-liquidity-provider-waran-zp",
  "category": "Aksi Korporasi",
  "title": "BEI Setujui Maybank Jadi [Liquidity Provider] Waran ZP",
  "deck": "Bursa Efek Indonesia menyetujui PT Maybank Sekuritas Indonesia sebagai penyedia likuiditas untuk 15 kode waran terstruktur beracuan ARTO hingga WIFI, efektif 9 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "Maybank Sekuritas",
   "waran terstruktur",
   "liquidity provider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/pabPush20261001065334/Persetujuan LP Waran Terstruktur PT Maybank Sekuritas Indonesia.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bswd-bantah-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BSWD Bantah Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Bank of India Indonesia Tbk (BSWD) menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menegaskan tidak ada informasi material maupun rencana aksi korporasi baru.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "Bank of India Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bd6d331aa7_b19ec69c6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-tuntaskan-divestasi-kestrel-nilai-us-814-juta",
  "category": "Aksi Korporasi",
  "title": "AADI Tuntaskan Divestasi Kestrel, Nilai [US$814] Juta",
  "deck": "Anak usaha AADI, Adaro Capital Limited, resmi melepas seluruh saham dan warannya di Kestrel Coal Group ke Yancoal Australia senilai US$814,12 juta sebelum pajak.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AADI",
   "Kestrel",
   "Yancoal",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a9f01811a3_eed6f07040.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penumpang-ka-agustus-48-32-juta-turun-dari-juli",
  "category": "Bisnis",
  "title": "Penumpang KA Agustus 48,32 Juta, [Turun dari Juli]",
  "deck": "Jumlah penumpang kereta api turun 7,29% dari Juli, tapi masih naik 6,01% dibanding Agustus tahun lalu",
  "date": "1 Oktober 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [
   "bps",
   "kereta api",
   "transportasi",
   "penumpang"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "neraca-dagang-ri-agustus-surplus-us-3-55-m-melonjak",
  "category": "Perdagangan",
  "title": "Neraca Dagang RI Agustus Surplus US$3,55 M [Melonjak]",
  "deck": "Surplus perdagangan Agustus melonjak dari bulan sebelumnya, tapi masih lebih rendah dibanding capaian Agustus tahun lalu.",
  "date": "1 Oktober 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "neraca dagang",
   "bps",
   "ekspor impor",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "impor-ri-agustus-2026-turun-ke-us-23-1-m",
  "category": "Perdagangan",
  "title": "Impor RI Agustus 2026 [Turun ke US$23,1 M]",
  "deck": "Nilai impor Indonesia Agustus 2026 tercatat 23,1 miliar dolar AS, turun dari rekor Juli tapi masih lebih tinggi dibanding Agustus tahun lalu.",
  "date": "1 Oktober 2026",
  "image": "assets/img/moneter-bi.jpg",
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
  "slug": "ekspor-agustus-tembus-us-26-6-miliar",
  "category": "Perdagangan",
  "title": "Ekspor Agustus Tembus [US$26,6 Miliar]",
  "deck": "Nilai ekspor Indonesia naik 1,51% dari Juli dan naik 6,72% dibanding Agustus tahun lalu.",
  "date": "1 Oktober 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "ekspor",
   "bps",
   "perdagangan",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "inflasi-september-2026-jadi-0-30",
  "category": "Makroekonomi",
  "title": "Inflasi September 2026 Jadi [0,30%]",
  "deck": "Harga barang dan jasa pada September 2026 naik 0,30% dibanding bulan sebelumnya, tertinggi sejak Juni yang mencatat 0,44%.",
  "date": "1 Oktober 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
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
  "slug": "zp-sesuaikan-syarat-waran-enrg-jelang-rights-issue",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Syarat Waran ENRG Jelang [Rights Issue]",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran ENRGZPCV6A dan ENRGZPCF7A menyusul rencana rights issue ENRG senilai Rp310 per saham.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "ENRG",
   "rights issue",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/12d4bec7b7_3ad31edc77.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "link-direktur-yosafat-hutagalung-mundur-tunggu-rups",
  "category": "Aksi Korporasi",
  "title": "LINK: Direktur Yosafat Hutagalung [Mundur], Tunggu RUPS",
  "deck": "PT Link Net Tbk melaporkan pengunduran diri Yosafat Marhasak Hutagalung dari jabatan Direktur per 1 Oktober 2026, menunggu persetujuan RUPS terdekat.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LINK",
   "Link Net",
   "Direksi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f3c52cb092_b4935cb379.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "link-presiden-komisaris-vivek-sood-mundur",
  "category": "Aksi Korporasi",
  "title": "LINK: Presiden Komisaris Vivek Sood [Mundur]",
  "deck": "Vivek Sood mengundurkan diri sebagai Presiden Komisaris Link Net pada 1 Oktober 2026, di hari yang sama dengan pengunduran diri seorang direktur perseroan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LINK",
   "Link Net",
   "Komisaris",
   "Pengunduran Diri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/d0b6f068e5_3691e266d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-tunjuk-kjpp-nilai-75-saham-aztech-pandu-persada",
  "category": "Aksi Korporasi",
  "title": "PIPA Tunjuk [KJPP] Nilai 75% Saham Aztech Pandu Persada",
  "deck": "Oxala Energy International (PIPA) menunjuk KJPP Toto Suharto & Rekan menilai wajar 75 persen saham PT Aztech Pandu Persada, tindak lanjut perjanjian jual beli bersyarat 7 September 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "akuisisi",
   "KJPP",
   "Aztech Pandu Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dea621fb2f_78b608f931.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-bantah-ada-info-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "UNSP Bantah Ada Info Material soal [Volatilitas] Saham",
  "deck": "Menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, Bakrie Sumatera Plantations menyatakan tidak ada informasi material maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/41a3c5dd62_32eef90b3f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-lunasi-obligasi-dan-sukuk-rp500-75-miliar",
  "category": "Aksi Korporasi",
  "title": "INKP Lunasi [Obligasi] dan Sukuk Rp500,75 Miliar",
  "deck": "Indah Kiat melunasi pokok obligasi Rp450 miliar dan sukuk mudharabah Rp50,75 miliar lewat KSEI pada 30 September 2026, sesuai jadwal jatuh tempo seri C terbitan 2021.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/74e113b473_c73e0e58c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pupuk-indonesia-naik-ke-peringkat-14-fortune-100",
  "category": "BUMN",
  "title": "Pupuk Indonesia [Naik] ke Peringkat 14 Fortune 100",
  "deck": "Pupuk Indonesia naik ke peringkat 14 Fortune Indonesia 100 2026, seiring revisi aturan tata kelola pupuk bersubsidi lewat Perpres 113/2025.",
  "date": "1 Oktober 2026",
  "image": "assets/img/pupuk-indonesia-naik-ke-peringkat-14-fortune-100.jpg",
  "imageV": "muozokn6",
  "tags": [
   "Pupuk Indonesia",
   "BUMN",
   "Fortune Indonesia 100",
   "Pupuk Bersubsidi"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/889/transformasi-dorong-pupuk-indonesia-naik-peringkat-di-fortune-indonesia-100",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "itic-gelar-rupslb-9-november-2026",
  "category": "Aksi Korporasi",
  "title": "ITIC Gelar RUPSLB [9 November 2026]",
  "deck": "Indonesian Tobacco (ITIC) mengumumkan rencana RUPSLB pada 9 November 2026, dengan pencatatan pemegang saham yang berhak hadir jatuh pada 15 Oktober 2026.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITIC",
   "RUPSLB",
   "Indonesian Tobacco",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/62ad548f3f_aa76d8ab6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnko-suntik-modal-rp27-5-miliar-ke-dua-anak-usaha-tambang",
  "category": "Aksi Korporasi",
  "title": "CNKO Suntik [Modal] Rp27,5 Miliar ke Dua Anak Usaha Tambang",
  "deck": "EBI, anak usaha CNKO, menambah modal disetor KGB Rp7,5 miliar dan TLS Rp20 miliar, mempertegas kepemilikan hingga hampir 100 persen di kedua anak usaha tambang batubara.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNKO",
   "transaksi afiliasi",
   "penambahan modal",
   "tambang batubara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/25dee984ba_5e3b5929ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meja-tunjuk-kjpp-untuk-akuisisi-tambang-batu-bara",
  "category": "Aksi Korporasi",
  "title": "MEJA Tunjuk KJPP untuk Akuisisi [Tambang] Batu Bara",
  "deck": "MEJA menunjuk KJPP DAZ & Rekan sebagai penilai independen untuk menyiapkan akuisisi PT Trimata Coal Perkasa dan penambahan lini usaha holding Perseroan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "akuisisi",
   "KJPP",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a0cde6dd2c_e58c596da1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-buka-buyback-rp2-triliun-baru-di-tengah-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "UNTR Buka Buyback [Rp2 Triliun] Baru di Tengah Pasar Bergejolak",
  "deck": "United Tractors siapkan dana hingga Rp2 triliun untuk buyback saham periode 1 Oktober-31 Desember 2026, memakai aturan khusus OJK untuk pasar bergejolak.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "buyback saham",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0a9953c358_8c9cfba7a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penjualan-vktr-tumbuh-56-di-semester-i-2026",
  "category": "Pasar Modal",
  "title": "Penjualan VKTR [Tumbuh] 56% di Semester I 2026",
  "deck": "Penjualan kendaraan listrik komersial VKTR naik 56% jadi Rp648 miliar pada semester I 2026, didukung segmen suku cadang dan laba yang membaik.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penjualan-vktr-tumbuh-56-di-semester-i-2026.jpg",
  "imageV": "muozol38",
  "tags": [
   "VKTR",
   "kendaraan listrik",
   "emiten",
   "e-MaaS"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470563-kinerja-penjualan-vktr-tumbuh-56-pada-semester-i-2026-e-maas-disiapkan-sebagai-enabler-adopsi-ev"
 },
 {
  "slug": "apic-catat-rugi-bersih-rp71-5-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "APIC Catat [Rugi] Bersih Rp71,5 Miliar di Semester I 2026",
  "deck": "Laporan keuangan interim auditan Pacific Strategic Financial (APIC) menunjukkan bisnis berbalik rugi bersih Rp71,5 miliar pada semester I 2026, dari laba Rp16,8 miliar setahun sebelumnya.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APIC",
   "laporan keuangan",
   "rugi bersih",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261001033936-64448-0/FinancialStatement-2026-II-APIC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brna-koreksi-laporan-keuangan-siapkan-rights-issue-rp372-6-miliar",
  "category": "Aksi Korporasi",
  "title": "BRNA Koreksi Laporan Keuangan, Siapkan [Rights Issue] Rp372,6 Miliar",
  "deck": "Berlina Tbk menerbitkan ulang laporan keuangan kuartal I 2026 yang dikoreksi menjelang rights issue senilai Rp372,6 miliar, sementara laba bersihnya turun 64 persen dari tahun lalu.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRNA",
   "rights issue",
   "laporan keuangan",
   "Berlina Tbk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261001011342-64469-0/FinancialStatement-2026-I-BRNA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "swat-jawab-bursa-ekuitas-ambruk-ke-rp12-46-m-kas-kritis",
  "category": "Aksi Korporasi",
  "title": "SWAT Jawab Bursa: Ekuitas Ambruk ke Rp12,46 M, Kas [Kritis]",
  "deck": "SWAT menjawab permintaan penjelasan Bursa atas opini wajar dengan pengecualian, ekuitas yang tergerus 79,52%, penjualan ambruk 63%, dan kasus hukum direktur utamanya.",
  "date": "1 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "opini wajar dengan pengecualian",
   "suspensi saham",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cc3e329242_9c55ff8e82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inflasi-september-2026-capai-3-28-persen-inti-lebih-rendah",
  "category": "Makroekonomi",
  "title": "Inflasi September 2026 Capai [3,28] Persen, Inti Lebih Rendah",
  "deck": "BPS mencatat inflasi tahunan 3,28 persen pada September 2026, dengan inflasi bulanan 0,30 persen dan inflasi inti 2,84 persen.",
  "date": "1 Oktober 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "Inflasi",
   "BPS",
   "Harga Konsumen",
   "Ekonomi Makro"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2623",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "harga-perdagangan-besar-naik-6-76-persen-di-september",
  "category": "Makroekonomi",
  "title": "Harga Perdagangan Besar [Naik] 6,76 Persen di September",
  "deck": "BPS mencatat Indeks Harga Perdagangan Besar nasional naik 6,76 persen secara tahunan pada September 2026, dengan bahan bangunan jadi kelompok paling tertekan.",
  "date": "1 Oktober 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "IHPB",
   "harga grosir",
   "bahan bangunan",
   "BPS"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2622",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "untr-undur-jadwal-dividen-interim-ke-november-nilai-tetap-rp430",
  "category": "Aksi Korporasi",
  "title": "UNTR Undur Jadwal [Dividen] Interim ke November, Nilai Tetap Rp430",
  "deck": "UNTR menunda pembayaran dividen interim dari 26 Oktober ke November 2026 agar mengacu pada laporan keuangan kuartal III, sementara nilainya tetap Rp430 per saham atau maksimal Rp1,478 triliun.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "dividen interim",
   "United Tractors",
   "jadwal dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2ee24d3a59_558c3f0191.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-rencanakan-rights-issue-iii-dam-setor-saham-gmfi",
  "category": "Aksi Korporasi",
  "title": "GIAA Rencanakan Rights Issue III, DAM Setor Saham [GMFI]",
  "deck": "Danantara Asset Management akan menebus haknya dalam rights issue baru Garuda lewat penyetoran saham GMFI, bukan uang tunai, menyusul rencana restrukturisasi 2025-2029.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "rights issue",
   "Danantara Asset Management",
   "GMFI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1a58ad7f29_0d0e43baf6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asgr-ubah-dividen-interim-jadi-dividen-tunai-final-rp297-saham",
  "category": "Aksi Korporasi",
  "title": "ASGR Ubah Dividen Interim Jadi [Dividen Tunai Final] Rp297/Saham",
  "deck": "Astra Graphia mengubah rencana dividen interim Rp297 per saham menjadi dividen tunai final dengan jumlah sama, namun kini butuh persetujuan RUPSLB yang direncanakan November 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASGR",
   "dividen",
   "RUPSLB",
   "Astra Graphia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/93c66f99ec_1a5a4fd0f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-gelar-rupslb-6-november-usul-agenda-ditutup-8-oktober",
  "category": "Aksi Korporasi",
  "title": "GIAA Gelar RUPSLB [6 November], Usul Agenda Ditutup 8 Oktober",
  "deck": "Garuda Indonesia mengumumkan RUPSLB pada 6 November 2026 secara daring lewat sistem eASY.KSEI. Pemegang saham per 14 Oktober berhak hadir, usul agenda ditutup 8 Oktober.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "RUPSLB",
   "Garuda Indonesia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9a79761abf_a8240bc456.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-ubah-susunan-direksi-lewat-rupslb-dua-direktur-baru",
  "category": "Aksi Korporasi",
  "title": "TLKM Ubah Susunan Direksi Lewat [RUPSLB], Dua Direktur Baru",
  "deck": "RUPSLB Telkom menetapkan Radita Ali Putra dan Kharim I.G. Siregar sebagai direktur baru menggantikan Budi Satria Dharma Purba dan Faizal Rochmad Djoemadi, berlaku sejak 30 September 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Direksi",
   "RUPSLB",
   "Telkom"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/038e2d61f2_f8cc9ee445.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bansos-beras-dan-bsu-cair-kuartal-iv-pph-pekerja-diperluas",
  "category": "Makroekonomi",
  "title": "Bansos Beras dan BSU Cair Kuartal IV, PPh Pekerja [Diperluas]",
  "deck": "Pemerintah menyiapkan bantuan beras, subsidi upah, dan keringanan pajak untuk kuartal IV 2026, dengan sejumlah program diperluas mulai 2027.",
  "date": "30 September 2026",
  "image": "assets/img/gudang-beras.jpg",
  "tags": [
   "Bantuan Sosial",
   "Subsidi Upah",
   "PPh 21",
   "KPR Subsidi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7120/pemerintah-siapkan-sejumlah-program-ekonomi-untuk-perkuat-perlidungan-masyarakat-dan-dorong-pertumbuhan-di-2027",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bmri-lunasi-obligasi-rp2-4-triliun-tepat-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BMRI Lunasi Obligasi [Rp2,4 Triliun] Tepat Jatuh Tempo",
  "deck": "Bank Mandiri membayar pokok Obligasi Berkelanjutan I Tahap I Tahun 2016 Seri C senilai Rp2,4 triliun pada tanggal jatuh temponya, 30 September 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Bank Mandiri",
   "obligasi",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2d6d817e7d_fcb482b3ae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-rugi-menyempit-jadi-us-112-96-juta-ekuitas-kembali-negatif",
  "category": "Aksi Korporasi",
  "title": "GIAA: Rugi Menyempit Jadi US$112,96 Juta, Ekuitas Kembali [Negatif]",
  "deck": "Laporan keuangan interim auditan semester I 2026 menunjukkan pendapatan Garuda naik dan rugi menyempit, tapi ekuitas kembali defisit tipis pada akhir Juni.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "Garuda Indonesia",
   "laporan keuangan",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260930231857-64415-0/FinancialStatement-2026-II-GIAA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpns-janji-sampaikan-laporan-keuangan-kuartal-ii-diaudit",
  "category": "Aksi Korporasi",
  "title": "DPNS Janji Sampaikan [Laporan Keuangan] Kuartal II Diaudit",
  "deck": "Sehari setelah disuspensi BEI karena telat lapor, Duta Pertiwi Nusantara (DPNS) menyatakan akan menyampaikan laporan keuangan kuartal II 2026 yang telah diaudit akuntan publik.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPNS",
   "Duta Pertiwi Nusantara",
   "suspensi BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e5991bbc89_e0bc21135e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sema-jawab-bursa-nilai-kontrak-data-center-tak-diungkap",
  "category": "Aksi Korporasi",
  "title": "SEMA Jawab Bursa, [Nilai] Kontrak Data Center Tak Diungkap",
  "deck": "Menanggapi permintaan penjelasan bursa, Semacom menegaskan lingkup kontrak data center CGK5-CGK7 hanya mencakup panel PTU dan SKID, tanpa mengungkap identitas mitra dan nilai kontrak karena NDA.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SEMA",
   "kontrak penting",
   "data center",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5a79a293f7_1839a36d63.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-raih-opini-disclaimer-defisiensi-modal-us-34-2-juta",
  "category": "Aksi Korporasi",
  "title": "CANI Raih Opini [Disclaimer], Defisiensi Modal US$34,2 Juta",
  "deck": "Auditor KAP Irwanto dan Rekan tak menyatakan pendapat atas laporan keuangan CANI karena liabilitas jangka pendek melebihi aset lancar US$38,3 juta dan defisiensi modal US$34,2 juta.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "opini disclaimer",
   "defisiensi modal",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260930222757-64458-0/FinancialStatement-2025-Tahunan-CANI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asli-balas-bursa-rugi-semester-i-menyempit-43-37",
  "category": "Aksi Korporasi",
  "title": "ASLI Balas Bursa, [Rugi] Semester I Menyempit 43,37%",
  "deck": "Menanggapi permintaan penjelasan Bursa, ASLI ungkap pendapatan semester I 2026 turun 19,13% jadi Rp93,02 miliar, sementara rugi bersih menyempit 43,37% menjadi Rp11,28 miliar.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLI",
   "konstruksi",
   "keterbukaan informasi",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b703d44534_a3f2222083.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-pefindo-turunkan-outlook-jadi-negatif-tegaskan-rating-idb",
  "category": "Aksi Korporasi",
  "title": "WSBP: PEFINDO Turunkan Outlook Jadi [Negatif], Tegaskan Rating idB",
  "deck": "PEFINDO menurunkan prospek peringkat WSBP dari Stabil ke Negatif setelah emiten gagal membayar kupon ke-8 dua seri obligasi yang jatuh tempo 25 September 2026 karena kas operasional tak cukup.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "PEFINDO",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac2e31ed2b_582ccff488.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-93-08-saham-terkonsentrasi-di-segelintir-pemegang",
  "category": "Aksi Korporasi",
  "title": "BIKE: 93,08% Saham [Terkonsentrasi] di Segelintir Pemegang",
  "deck": "BEI dan KSEI mencatat 93,08 persen saham BIKE per 28 September 2026 dikuasai sejumlah kecil pemegang saham, di tengah rentetan sorotan OJK dan Bursa terhadap emiten ini.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "kepemilikan saham",
   "BEI",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5f8ad13194_5784c9d47a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tei-2026-catat-1-533-ekshibitor-buyer-dari-113-negara",
  "category": "Bisnis",
  "title": "TEI 2026 Catat [1.533] Ekshibitor, Buyer dari 113 Negara",
  "deck": "Kementerian Perdagangan mencatat buyer dari 113 negara dan 1.533 pelaku usaha lokal mendaftar untuk Trade Expo Indonesia 2026 yang digelar 14-18 Oktober di ICE BSD City, Tangerang.",
  "date": "30 September 2026",
  "image": "assets/img/tei-2026-catat-1-533-ekshibitor-buyer-dari-113-negara.jpg",
  "imageV": "muo63csi",
  "tags": [
   "TEI 2026",
   "Kemendag",
   "ekspor",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/jaring-antusiasme-menuju-tei-2026-buyer-dari-113-negara-dan-1500-ekshibitor-siap-berpartisipasi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "adcp-tunda-kupon-obligasi-ke-2027-suspensi-belum-pulih",
  "category": "Aksi Korporasi",
  "title": "ADCP Tunda Kupon Obligasi ke 2027, [Suspensi] Belum Pulih",
  "deck": "ADCP melaporkan progres rencana pemulihan ke BEI, termasuk penundaan kupon obligasi hingga Mei 2027 dan penurunan peringkat rating akibat tekanan likuiditas.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "obligasi",
   "suspensi saham",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/22ff11ef97_6fbd85c19d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ijee-liabilitas-naik-48-usai-terbit-obligasi-dan-sukuk-baru",
  "category": "Aksi Korporasi",
  "title": "IJEE: Liabilitas Naik 48% Usai Terbit [Obligasi] dan Sukuk Baru",
  "deck": "Total aset IJEE naik 34,17 persen dan liabilitas melonjak 48,19 persen per Juni 2026, didorong penerbitan Obligasi III dan Sukuk II untuk ekspansi jaringan Fiber To The Home.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "obligasi",
   "sukuk",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260930204230-64454-0/FinancialStatement-2026-II-IJEE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djki-pangkas-waktu-urus-merek-jadi-empat-bulan",
  "category": "Bisnis",
  "title": "DJKI Pangkas Waktu Urus Merek Jadi [Empat] Bulan",
  "deck": "Mulai 1 Oktober 2026, DJKI memangkas target penyelesaian pendaftaran merek dan desain industri menjadi paling lama empat bulan, turun dari lima bulan yang berlaku sejak Agustus lalu.",
  "date": "30 September 2026",
  "image": "assets/img/djki-pangkas-waktu-urus-merek-jadi-empat-bulan.jpg",
  "imageV": "muo63dfl",
  "tags": [
   "DJKI",
   "Kekayaan Intelektual",
   "Merek",
   "Desain Industri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470485-djki-pangkas-waktu-pengurusan-merek-dan-desain-industri-jadi-4-bulan-mulai-oktober"
 },
 {
  "slug": "indodana-dorong-credit-scoring-demi-pinjaman-digital-aman",
  "category": "Perbankan",
  "title": "Indodana Dorong [Credit Scoring] demi Pinjaman Digital Aman",
  "deck": "Direktur Indodana Fintech menilai penilaian kredit calon peminjam perlu diperkuat agar pinjaman digital yang mudah diakses tetap sesuai kemampuan bayar.",
  "date": "30 September 2026",
  "image": "assets/img/indodana-dorong-credit-scoring-demi-pinjaman-digital-aman.jpg",
  "imageV": "muo63dwi",
  "tags": [
   "fintech lending",
   "credit scoring",
   "AFPI",
   "inklusi keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470484-indodana-fintech-soroti-tantangan-pinjaman-digital-mudah-diakses-harus-sesuai-kemampuan-bayar"
 },
 {
  "slug": "ekonomi-gig-tumbuh-pekerja-perlu-perkuat-ketahanan-finansial",
  "category": "Ketenagakerjaan",
  "title": "Ekonomi Gig Tumbuh, Pekerja Perlu Perkuat [Ketahanan] Finansial",
  "deck": "Seiring makin banyak orang mengandalkan pekerjaan fleksibel, mengatur arus kas jadi tantangan utama pekerja gig, bukan sekadar besar kecilnya pendapatan.",
  "date": "30 September 2026",
  "image": "assets/img/ekonomi-gig-tumbuh-pekerja-perlu-perkuat-ketahanan-finansial.jpg",
  "imageV": "muo63edf",
  "tags": [
   "ekonomi gig",
   "pekerja fleksibel",
   "ketahanan finansial",
   "driver online"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470482-ekonomi-gig-makin-diminati-pekerja-fleksibel-perlu-perkuat-ketahanan-finansial"
 },
 {
  "slug": "aspi-akuisisi-gmp-tersendat-laba-kotor-anjlok-28",
  "category": "Aksi Korporasi",
  "title": "ASPI: Akuisisi GMP Tersendat, [Laba Kotor] Anjlok 28%",
  "deck": "Public expose insidentil ASPI: akuisisi oleh GMP Grup Investama masih due diligence, laba kotor semester I 2026 anjlok 28 persen, harga saham sempat longsor sebelum keterbukaan resmi.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASPI",
   "public expose",
   "akuisisi",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9a44a44414_61d15e1505.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-dan-brins-bantu-alat-tenun-warga-sade-usai-kebakaran",
  "category": "UMKM",
  "title": "PNM dan BRINS Bantu Alat Tenun Warga Sade Usai [Kebakaran]",
  "deck": "PNM bersama BRI Insurance melanjutkan bantuan bagi nasabah pembiayaan mikro di Desa Adat Sade, kini berupa alat usaha untuk memulihkan penghasilan warga pascakebakaran Agustus lalu.",
  "date": "30 September 2026",
  "image": "assets/img/pnm-dan-brins-bantu-alat-tenun-warga-sade-usai-kebakaran.jpg",
  "imageV": "muo63evc",
  "tags": [
   "PNM Mekaar",
   "BRI Insurance",
   "Desa Adat Sade",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470477-bangkit-pascakebakaran-bantuan-pnm-bersama-brins-nyalakan-harapan-baru-warga-sade"
 },
 {
  "slug": "bris-rights-issue-ii-kerek-modal-ke-rp64-41-t-dilusi-12-85",
  "category": "Aksi Korporasi",
  "title": "BRIS: [Rights Issue] II Kerek Modal ke Rp64,41 T, Dilusi 12,85%",
  "deck": "BRIS berencana menerbitkan maksimal 6,8 miliar saham baru lewat hak memesan efek terlebih dahulu (rights issue) untuk memperkuat modal, dengan RUPSLB dijadwalkan 6 November 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "rights issue",
   "HMETD",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bca45e818a_70ccbfcbae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-rampungkan-buyback-saham-rp1-42-triliun-hentikan-program",
  "category": "Aksi Korporasi",
  "title": "UNTR Rampungkan [Buyback] Saham Rp1,42 Triliun, Hentikan Program",
  "deck": "UNTR membeli kembali 57,97 juta saham senilai Rp1,42 triliun dari pagu Rp2 triliun, program pembelian kembali resmi berakhir 30 September 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "buyback saham",
   "United Tractors",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/78eca6efd5_1854725c8e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-patokan-ekspor-emas-turun-3-5-awal-oktober",
  "category": "Industri",
  "title": "Harga Patokan Ekspor Emas [Turun] 3,5% Awal Oktober",
  "deck": "Kemendag menurunkan Harga Patokan Ekspor dan Harga Referensi emas untuk periode 1-14 Oktober 2026, turun 3,5 persen dari paruh kedua September.",
  "date": "30 September 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "emas",
   "ekspor",
   "Kemendag",
   "bea keluar"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hpe-dan-hr-emas-turun-di-periode-i-oktober-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "wsbp-koreksi-rupslb-detail-konversi-utang-jadi-saham-rp4-3-t",
  "category": "Aksi Korporasi",
  "title": "WSBP Koreksi RUPSLB: Detail Konversi Utang jadi [Saham] Rp4,3 T",
  "deck": "Waskita Beton Precast mengoreksi panggilan RUPSLB 2 Oktober 2026 dengan menambahkan rincian angka konversi utang ke ekuitas dan penerbitan saham baru senilai hingga Rp4,33 triliun.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "RUPSLB",
   "konversi utang",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eb1c7b1b5a_ba1eb04758.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-ekuitas-balik-positif-usai-right-issue-rp237-miliar",
  "category": "Aksi Korporasi",
  "title": "CASH: [Ekuitas] Balik Positif Usai Right Issue Rp237 Miliar",
  "deck": "Laporan keuangan interim per 31 Agustus 2026 menunjukkan ekuitas Cashlez berbalik positif Rp194,5 miliar setelah rights issue Rp237,2 miliar, meski rugi bersih melebar jadi Rp42,9 miliar.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez",
   "rights issue",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/26bd1f12ce_4affc83fb4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mncn-balas-surat-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "MNCN Balas Surat Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "MNCN menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material dan Global Mediacom tetap jadi pemegang saham utama.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MNCN",
   "Media Nusantara Citra",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c8a2b77193_6bf2fda064.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-jadwalkan-rupslb-pada-6-november-2026",
  "category": "Aksi Korporasi",
  "title": "KDTN Jadwalkan [RUPSLB] pada 6 November 2026",
  "deck": "PT Puri Sentul Permai Tbk akan menggelar RUPS Luar Biasa pada 6 November 2026. Pemegang saham yang tercatat per 14 Oktober 2026 berhak hadir dan memberi suara.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "RUPSLB",
   "Puri Sentul Permai",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5ae2d96d5b_06143c9634.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-suspensi-total-perdagangan-saham-pure-going-concern",
  "category": "Aksi Korporasi",
  "title": "BEI Suspensi [Total] Perdagangan Saham PURE, Going Concern",
  "deck": "BEI menghentikan sementara seluruh perdagangan saham PURE di semua pasar sejak Rabu, menyusul keraguan signifikan atas kelangsungan usaha perseroan.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PURE",
   "suspensi saham",
   "going concern",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9c644037cd_d2d9768e6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-tetapkan-cum-date-rupslb-usul-agenda-tenggat-8-okt",
  "category": "Aksi Korporasi",
  "title": "KDTN Tetapkan Cum Date [RUPSLB], Usul Agenda Tenggat 8 Okt",
  "deck": "PT Puri Sentul Permai Tbk menjadwalkan RUPSLB pada 6 November 2026, dengan pemegang saham per 14 Oktober 2026 yang berhak hadir dan memberi suara.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "RUPSLB",
   "Puri Sentul Permai",
   "Rapat Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5ae2d96d5b_06143c9634.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "grpm-pemegang-saham-pengendali-jual-seluruh-saham-ke-rimau-group",
  "category": "Aksi Korporasi",
  "title": "GRPM: Pemegang Saham Pengendali Jual [Seluruh] Saham ke Rimau Group",
  "deck": "Pemegang saham pengendali GRPM sedang due diligence untuk menjual seluruh sahamnya ke PT Tunas Binatama Lestari (Rimau Group), sesuai penjelasan ke BEI.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRPM",
   "pengendali saham",
   "Rimau Group",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0f0e043806_384ae58215.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smsm-terima-dividen-myr3-5-juta-dari-entitas-anak-di-malaysia",
  "category": "Aksi Korporasi",
  "title": "SMSM Terima Dividen MYR3,5 Juta dari [Entitas Anak] di Malaysia",
  "deck": "Selamat Sempurna Tbk mencatat pendapatan dividen MYR3,5 juta dari entitas anaknya di Malaysia, Bradke Synergies Sdn. Bhd., pada 30 September 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "dividen",
   "entitas anak",
   "Bradke Synergies"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/62a51f3d30_7a7a44197e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mora-raup-rp768-miliar-dari-target-sukuk-rp3-triliun",
  "category": "Aksi Korporasi",
  "title": "MORA Raup Rp768 Miliar dari Target [Sukuk] Rp3 Triliun",
  "deck": "Moratelindo hanya menghimpun Rp768,18 miliar dari target Rp3 triliun dalam penawaran umum berkelanjutan Sukuk Ijarah II selama 2023-2024, akibat kondisi pasar dan efisiensi biaya pendanaan.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MORA",
   "Sukuk Ijarah",
   "Moratelindo",
   "Obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/81784dc264_2ef7d8f65f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "taxi-jelaskan-lonjakan-harga-28-57-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "TAXI Jelaskan Lonjakan Harga [28,57%] ke Bursa",
  "deck": "Bursa meminta penjelasan setelah saham TAXI melonjak 28,57% dengan volume transaksi naik hampir 12 kali lipat dalam sehari, tapi perseroan mengaku tak punya informasi material baru.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAXI",
   "Express Transindo Utama",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1317bc0363_b1cb8e7428.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aali-jadwalkan-dividen-interim-rp233-per-saham",
  "category": "Aksi Korporasi",
  "title": "AALI Jadwalkan [Dividen] Interim Rp233 per Saham",
  "deck": "Astra Agro Lestari akan membagikan dividen interim tahun buku 2026 sebesar Rp233 per saham, total Rp449,03 miliar, dibayar 26 Oktober 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "dividen interim",
   "Astra Agro Lestari",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a92fba7b53_0f98446163.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppln-siap-bayar-rp455-miliar-obligasi-sukuk-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "PPLN Siap Bayar [Rp455 Miliar] Obligasi-Sukuk Jatuh Tempo",
  "deck": "Bursa mencatat obligasi dan sukuk ijarah PLN senilai total Rp455 miliar jatuh tempo 1 Oktober 2026, dan perusahaan mengonfirmasi dana pembayaran sudah siap dikirim ke KSEI.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPLN",
   "obligasi",
   "sukuk ijarah",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1812042de1_0df877a2f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gems-bagikan-dividen-interim-us-200-juta-rp611-93-saham",
  "category": "Aksi Korporasi",
  "title": "GEMS Bagikan [Dividen] Interim US$200 Juta, Rp611,93/Saham",
  "deck": "GEMS akan membagikan dividen interim tahun buku 2026 senilai US$200 juta, setara Rp611,93 per saham, dibayar 22 Oktober 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMS",
   "dividen interim",
   "Golden Energy Mines",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e405b45452_6c49faa9d2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppro-gelar-rupslb-22-oktober-untuk-ubah-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "PPRO Gelar RUPSLB 22 Oktober untuk [Ubah] Susunan Direksi",
  "deck": "PT PP Properti Tbk memanggil RUPSLB pada 22 Oktober 2026 dengan agenda tunggal persetujuan perubahan susunan direksi perseroan.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRO",
   "RUPSLB",
   "Direksi",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/023373a163_84add9b25a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-rogoh-pinjaman-rp6-m-danai-akuisisi-tri-satria-indah-motor",
  "category": "Aksi Korporasi",
  "title": "INPS Rogoh Pinjaman Rp6 M Danai Akuisisi [Tri Satria Indah Motor]",
  "deck": "Indah Prakasa Sentosa mengoreksi tanggal pelaksanaan RUPSLB yang salah input, sekaligus melaporkan fasilitas pinjaman Rp6 miliar dari individu untuk mendanai akuisisi saham PT Tri Satria Indah Motor.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "RUPSLB",
   "akuisisi",
   "pinjaman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0708f7db92_6b1467d118.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dssa-catat-aset-naik-37-6-ke-us-6-08-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "DSSA catat [aset] naik 37,6% ke US$6,08 miliar di semester I 2026",
  "deck": "Laporan keuangan interim auditan DSSA per Juni 2026 mencatat aset naik ke US$6,08 miliar dan liabilitas ke sekitar US$3,02 miliar, seiring ekspansi investasi dan pinjaman bank baru.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSSA",
   "laporan keuangan",
   "merger",
   "Dian Swastatika Sentosa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260930180332-64409-0/FinancialStatement-2026-II-DSSA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jpfa-divestasi-vaksindo-rp1-81-triliun-ke-afiliasi",
  "category": "Aksi Korporasi",
  "title": "JPFA Divestasi Vaksindo Rp1,81 Triliun ke [Afiliasi]",
  "deck": "JAPFA Comfeed menjual seluruh saham PT Vaksindo Satwa Nusantara senilai Rp1,81 triliun kepada induk usahanya Japfa Pte Ltd dan Bionovus, dinilai wajar oleh penilai independen.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "Japfa Comfeed",
   "Transaksi Afiliasi",
   "Vaksindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/703f039ad5_f977aff3a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-jawab-bursa-akuisisi-ev-genset-85-pendapatan-dari-afiliasi",
  "category": "Aksi Korporasi",
  "title": "NICK Jawab Bursa: Akuisisi EV-Genset, 85% Pendapatan dari [Afiliasi]",
  "deck": "NICK merinci akuisisi Okansa Pacific dan Energindo Nusantara senilai hampir Rp45 miliar, tapi 85 persen pendapatan semester I 2026 datang dari transaksi ke pihak afiliasi.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "akuisisi",
   "pihak afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a7c652affe_d6a5f0bf6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beli-jadwalkan-public-expose-tahunan-pada-14-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BELI Jadwalkan [Public Expose] Tahunan pada 14 Oktober 2026",
  "deck": "PT Global Digital Niaga Tbk (BELI) akan menggelar Public Expose Tahunan 2026 secara virtual pada 14 Oktober pukul 14.00 WIB, memaparkan kinerja perusahaan kepada investor.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BELI",
   "Public Expose",
   "Blibli",
   "Global Digital Niaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1fe0f0ad96_8a189d9da3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-ajukan-10-seri-call-warrant-baru-acuan-arto-hingga-kija",
  "category": "Aksi Korporasi",
  "title": "ZP Ajukan 10 Seri [Call Warrant] Baru, Acuan ARTO Hingga KIJA",
  "deck": "Maybank Sekuritas ajukan term sheet 10 call warrant baru atas ARTO, ASII, BRMS, BRPT, CTRA, CUAN, EMTK, ENRG, HRUM, dan KIJA, masing-masing 500 juta unit, jatuh tempo 30 Juli 2027.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "Maybank Sekuritas",
   "waran terstruktur",
   "call warrant"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b98adcc423_2f429350a8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-terbitkan-15-waran-terstruktur-baru-acuan-asii-wifi",
  "category": "Aksi Korporasi",
  "title": "ZP Terbitkan 15 [Waran] Terstruktur Baru, Acuan ASII-WIFI",
  "deck": "Maybank Sekuritas (ZP) menawarkan 15 seri waran terstruktur baru pada 2-6 Oktober 2026, mengacu ke 15 saham berbeda dengan total 7,5 miliar unit ditawarkan.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "Maybank Sekuritas",
   "structured warrant"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ec679476f_0145b0662b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-genjot-bisnis-energi-hijau-jadi-sumber-pertumbuhan",
  "category": "Energi",
  "title": "Pertamina Genjot Bisnis Energi [Hijau] Jadi Sumber Pertumbuhan",
  "deck": "Pertamina memperluas portofolio energi rendah karbon, dari biofuel hingga hidrogen hijau, sebagai sumber pertumbuhan baru sambil tetap menjaga pasokan energi harian.",
  "date": "30 September 2026",
  "image": "assets/img/pertamina-genjot-bisnis-energi-hijau-jadi-sumber-pertumbuhan.jpg",
  "imageV": "munx3wi1",
  "tags": [
   "Pertamina",
   "Energi Hijau",
   "BUMN",
   "Transisi Energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470425-pertamina-siapkan-bisnis-energi-hijau-sebagai-sumber-pertumbuhan-baru"
 },
 {
  "slug": "bakrieland-raih-penghargaan-employer-brand-2026",
  "category": "Bisnis",
  "title": "Bakrieland Raih [Penghargaan] Employer Brand 2026",
  "deck": "Bakrieland meraih Indonesia Best Employer Brand Awards 2026 atas praktik pengembangan SDM, manajemen talenta, dan budaya kerja adaptif.",
  "date": "30 September 2026",
  "image": "assets/img/bakrieland-raih-penghargaan-employer-brand-2026.jpg",
  "imageV": "munx3wv5",
  "tags": [
   "Bakrieland",
   "Employer Brand Awards",
   "SDM",
   "Properti"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470418-bakrieland-raih-indonesia-best-employer-brand-awards-2026-fokus-pada-pengembangan-talenta"
 },
 {
  "slug": "hd-waran-terstruktur-untr-disesuaikan-usai-dividen-efektif-8-okt",
  "category": "Aksi Korporasi",
  "title": "HD: Waran Terstruktur [UNTR] Disesuaikan Usai Dividen, Efektif 8 Okt",
  "deck": "KGI Sekuritas menyesuaikan harga pelaksanaan dan rasio dua waran terstruktur berbasis saham UNTR menyusul aksi dividen tunai, efektif 8 Oktober 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "UNTR",
   "waran terstruktur",
   "KGI Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/909645894d_535daa0b99.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmpp-kaji-opsi-pulihkan-ekuitas-negatif-usai-suspensi-bei",
  "category": "Aksi Korporasi",
  "title": "CMPP Kaji Opsi Pulihkan [Ekuitas] Negatif Usai Suspensi BEI",
  "deck": "CMPP mengkaji restrukturisasi utang, rights issue, atau penambahan modal tanpa HMETD untuk memulihkan ekuitas negatif yang membuat sahamnya disuspensi BEI sejak Juni 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMPP",
   "AirAsia Indonesia",
   "suspensi saham",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b8a5cc74c1_b157bacb89.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-catatkan-obligasi-rp1-t-dan-sukuk-rp676-63-m-di-bei",
  "category": "Aksi Korporasi",
  "title": "LPPI [Catatkan] Obligasi Rp1 T dan Sukuk Rp676,63 M di BEI",
  "deck": "Mulai 1 Oktober 2026 BEI mencatatkan obligasi Rp1 triliun dan sukuk mudharabah Rp676,63 miliar tahap IV LPPI, dengan rating idA dan idA(sy) dari Pefindo.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6cba60ac95_fea9929081.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "data-bansos-dirombak-status-desil-bisa-berubah",
  "category": "Makroekonomi",
  "title": "Data Bansos Dirombak, Status Desil Bisa [Berubah]",
  "deck": "Mendagri Tito Karnavian menyebut pemadanan data kepemilikan tanah dan kendaraan bisa mengubah status desil penerima bansos.",
  "date": "30 September 2026",
  "image": "assets/img/data-bansos-dirombak-status-desil-bisa-berubah.jpg",
  "imageV": "munx3x9h",
  "tags": [
   "bansos",
   "desil kemiskinan",
   "dtsen",
   "tito karnavian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470396-data-bansos-dirombak-status-desil-warga-bisa-berubah-ini-penjelasan-mendagri"
 },
 {
  "slug": "bbrm-rampungkan-pembelian-kapal-ahts-senilai-us-12-1-juta",
  "category": "Aksi Korporasi",
  "title": "BBRM [Rampungkan] Pembelian Kapal AHTS Senilai US$12,1 Juta",
  "deck": "Perseroan menerima serah terima kapal Anchor Handling Tug Supply MP Maverick dari Great Union China Limited senilai US$12,1 juta, dibiayai sebagian dari kredit Bank IBK Rp120 miliar.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRM",
   "AHTS",
   "akuisisi kapal",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ca1c088d73_6d431b3ff6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnbs-bantah-punya-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "PNBS Bantah Punya Informasi Material di Balik [Volatilitas] Saham",
  "deck": "Bank Panin Dubai Syariah menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya dan menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNBS",
   "Bank Panin Dubai Syariah",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e6b3c4a436_0f44b930a6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-cetak-ekuitas-negatif-auditor-soroti-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "LAPD Cetak Ekuitas Negatif, Auditor Soroti [Kelangsungan] Usaha",
  "deck": "Laporan keuangan interim auditan per Juni 2026 menunjukkan ekuitas LAPD negatif Rp2,65 miliar, rugi berjalan melonjak, dan auditor menyoroti ketidakpastian kelangsungan usaha.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "Leyand International",
   "ekuitas negatif",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260930125052-64413-0/FinancialStatement-2026-II-LAPD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-siapkan-buyback-saham-rp500-miliar-hingga-desember",
  "category": "Aksi Korporasi",
  "title": "TOWR Siapkan [Buyback] Saham Rp500 Miliar hingga Desember",
  "deck": "Sarana Menara Nusantara mengalokasikan hingga Rp500 miliar kas internal untuk membeli kembali sekitar 1,18 miliar sahamnya, setara 2 persen modal disetor, sampai akhir Desember 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "buyback saham",
   "Sarana Menara Nusantara",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac0c613fdb_62d605d5b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rock-klarifikasi-ke-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "ROCK Klarifikasi ke BEI soal [Volatilitas] Transaksi Saham",
  "deck": "Setelah BEI meminta penjelasan atas gerak harga sahamnya yang tak biasa, Rockfields Properti Indonesia (ROCK) menyatakan tidak memiliki informasi material yang belum diungkap ke publik.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROCK",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2ba49a5842_a007ff65b3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-umumkan-rencana-rupst-pada-6-november-2026",
  "category": "Aksi Korporasi",
  "title": "MTFN Umumkan Rencana [RUPST] pada 6 November 2026",
  "deck": "Capitalinc Investment (MTFN) menjadwalkan RUPST pada 6 November 2026, dengan pencatatan pemegang saham 14 Oktober dan batas usul pemegang saham 8 Oktober 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "RUPST",
   "Capitalinc Investment",
   "Corporate Action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/07433b1134_0dcf14d96a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gema-komisaris-mundur-sebelum-rups-setujui",
  "category": "Aksi Korporasi",
  "title": "GEMA: Komisaris [Mundur] Sebelum RUPS Setujui",
  "deck": "Prof. Agustinus Purna Irawan mengundurkan diri sebagai Komisaris Gema Grahasarana pada 28 September 2026, keputusan final menunggu RUPS terdekat.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMA",
   "komisaris",
   "pengunduran diri",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e035b47711_e56ec55dac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jelang-wajib-halal-2026-kemendag-dorong-sertifikasi-ekspor-umk",
  "category": "Bisnis",
  "title": "Jelang Wajib Halal 2026, Kemendag Dorong [Sertifikasi] Ekspor UMK",
  "deck": "Kemendag mendorong pelaku usaha, terutama UMK, memperkuat sertifikasi halal dan mutu produk jelang tenggat wajib halal berlaku 18 Oktober 2026 agar makin siap menembus pasar ekspor.",
  "date": "30 September 2026",
  "image": "assets/img/jelang-wajib-halal-2026-kemendag-dorong-sertifikasi-ekspor-umk.jpg",
  "imageV": "munk84o9",
  "tags": [
   "sertifikasi halal",
   "Kemendag",
   "ekspor UMK",
   "wajib halal 2026"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/jelang-wajib-halal-kemendag-dorong-penguatan-mutu-dan-sertifikasi-halal-untuk-menghubungkan-produk-indonesia-ke-dunia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bris-siapkan-rights-issue-ii-terbitkan-6-8-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "BRIS Siapkan [Rights Issue] II, Terbitkan 6,8 Miliar Saham",
  "deck": "Bank Syariah Indonesia berencana menerbitkan hingga 6,8 miliar saham baru lewat rights issue kedua untuk memperkuat modal. RUPSLB digelar 6 November 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "rights issue",
   "PMHMETD",
   "Bank Syariah Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3843b4a65f_56f23bc00c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bris-jadwalkan-rupslb-pada-6-november-2026",
  "category": "Aksi Korporasi",
  "title": "BRIS Jadwalkan [RUPSLB] pada 6 November 2026",
  "deck": "Bank Syariah Indonesia menjadwalkan RUPS Luar Biasa 6 November 2026, dengan pencatatan pemegang saham per 14 Oktober dan agenda resmi terbit 15 Oktober.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "RUPSLB",
   "Bank Syariah Indonesia",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8d2161f481_03e81f51b6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-suntik-modal-rp5-miliar-ke-anak-usaha-dge",
  "category": "Aksi Korporasi",
  "title": "EDGE Suntik [Modal] Rp5 Miliar ke Anak Usaha DGE",
  "deck": "Indointernet menambah modal anak usahanya, PT Digital Gayana Ekakarsa, senilai Rp5 miliar untuk belanja modal, transaksi afiliasi yang dikecualikan dari aturan benturan kepentingan OJK.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "Indointernet",
   "transaksi afiliasi",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a0d9f12af7_48b107658d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sfan-jual-51-95-saham-dpi-ke-induk-usaha-rp15-73-m-divestasi",
  "category": "Aksi Korporasi",
  "title": "SFAN Jual 51,95% Saham DPI ke Induk Usaha Rp15,73 M [Divestasi]",
  "deck": "PT Surya Fajar Capital melepas 51,95% saham anak usahanya, PT Digitalisasi Perangkat Indonesia, ke induk usahanya sendiri, PT Surya Fajar Corpora, senilai Rp15,73 miliar.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SFAN",
   "divestasi",
   "transaksi afiliasi",
   "PT Digitalisasi Perangkat Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/da5f967d3b_dbf1a248bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "miti-teken-mou-dengan-cnec-garap-proyek-silika",
  "category": "Aksi Korporasi",
  "title": "MITI Teken MOU dengan CNEC Garap Proyek [Silika]",
  "deck": "Mitra Investindo menandatangani MOU dengan anak usaha perusahaan nuklir negara China untuk menjajaki pengembangan tiga konsesi tambang pasir silika.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MITI",
   "MOU",
   "pasir silika",
   "CNEC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e6090298c2_aa7e3a6f32.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inds-beli-mesin-bekas-anak-usaha-rp3-09-m-afiliasi",
  "category": "Aksi Korporasi",
  "title": "INDS Beli Mesin Bekas Anak Usaha Rp3,09 M [Afiliasi]",
  "deck": "Indospring membeli dua mesin power press bekas dari anak usahanya, PT Indobaja Primamurni, senilai Rp3,09 miliar sebagai transaksi afiliasi.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDS",
   "Indospring",
   "transaksi afiliasi",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/351ecd96ab_b85ff752f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srsn-direktur-independen-mundur-rupslb-akhir-desember",
  "category": "Aksi Korporasi",
  "title": "SRSN: Direktur Independen [Mundur], RUPSLB Akhir Desember",
  "deck": "Indo Acidatama menerima pengunduran diri Sharad Ganesh Ugrankar dari jabatan Direktur Independen, efektif setelah disetujui RUPSLB yang dijadwalkan paling lambat 29 Desember 2026.",
  "date": "30 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRSN",
   "Indo Acidatama",
   "direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f5630699cb_9a0e014946.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sertifikasi-halal-umk-wajib-mulai-18-oktober",
  "category": "UMKM",
  "title": "Sertifikasi Halal UMK Wajib Mulai [18 Oktober]",
  "deck": "Kemendag menggelar sosialisasi di Tangerang Selatan menjelang berlakunya kewajiban sertifikasi halal bagi UMK pangan mulai 18 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/sertifikasi-halal-umk-wajib-mulai-18-oktober.jpg",
  "imageV": "mumwmof1",
  "tags": [
   "sertifikasi halal",
   "UMK",
   "Kemendag",
   "PP 42/2024"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-dorong-umk-naik-kelas-lewat-sertifikasi-halal",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "inkp-siapkan-rp500-75-miliar-untuk-pelunasan-obligasi-sukuk",
  "category": "Aksi Korporasi",
  "title": "INKP Siapkan Rp500,75 Miliar untuk [Pelunasan] Obligasi-Sukuk",
  "deck": "Obligasi dan sukuk Seri C senilai total Rp500,75 miliar jatuh tempo 30 September 2026 dan resmi dihapus dari pencatatan BEI. INKP sebut dana kas sudah disiapkan penuh.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/06edaa9a44_efea526fcf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mk-label-gula-garam-lemak-wajib-jelas-di-kemasan",
  "category": "Industri",
  "title": "MK: Label Gula, Garam, Lemak Wajib [Jelas] di Kemasan",
  "deck": "MK menegaskan pelaku usaha dan pemerintah wajib memastikan kandungan gula, garam, dan lemak di label pangan kemasan disampaikan jelas, benar, dan mudah dipahami konsumen.",
  "date": "29 September 2026",
  "image": "assets/img/mk-label-gula-garam-lemak-wajib-jelas-di-kemasan.jpg",
  "imageV": "mumwmoz4",
  "tags": [
   "MK",
   "label pangan",
   "gula garam lemak",
   "perlindungan konsumen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470255-mk-tegaskan-gula-garam-dan-lemak-di-label-pangan-kemasan-harus-jelas"
 },
 {
  "slug": "indonesia-dan-china-sepakat-percepat-perundingan-cepa",
  "category": "Global",
  "title": "Indonesia dan China Sepakat Percepat Perundingan [CEPA]",
  "deck": "Indonesia dan Tiongkok sepakat mempercepat persiapan perundingan CEPA, sekaligus memperkuat kerja sama ekonomi hijau dan peningkatan kapasitas aparatur sipil negara.",
  "date": "29 September 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "CEPA",
   "Indonesia-Tiongkok",
   "Ekonomi Hijau",
   "WAICO"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7119/indonesia-dan-tiongkok-sepakat-percepat-persiapan-cepa-perkuat-kerja-sama-ekonomi-hijau-dan-peningkatan-kapasitas-asn",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "dpns-disuspensi-bei-laporan-keuangan-telat-dan-denda-nunggak",
  "category": "Aksi Korporasi",
  "title": "DPNS [Disuspensi] BEI, Laporan Keuangan Telat dan Denda Nunggak",
  "deck": "Bursa menghentikan sementara perdagangan saham DPNS di seluruh pasar karena belum menyerahkan laporan keuangan teraudit kuartal I 2026 dan belum membayar denda Rp150 juta.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPNS",
   "suspensi saham",
   "BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9be3e9063a_6d42a43759.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amms-rugi-rp1-5-miliar-di-semester-i-2026-laba-kotor-anjlok",
  "category": "Aksi Korporasi",
  "title": "AMMS Rugi [Rp1,5 Miliar] di Semester I 2026, Laba Kotor Anjlok",
  "deck": "Emiten perikanan AMMS membukukan rugi bersih Rp1,5 miliar pada semester I 2026, berbalik dari laba tahun lalu, seiring pendapatan turun 28 persen dan laba kotor nyaris habis.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMMS",
   "laporan keuangan",
   "rugi bersih",
   "emiten perikanan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929210436-64382-0/FinancialStatement-2026-II-AMMS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "proyek-lrt-city-mangkrak-dibangun-lagi-1-oktober",
  "category": "BUMN",
  "title": "Proyek LRT City Mangkrak [Dibangun] Lagi 1 Oktober",
  "deck": "Danantara pastikan pembangunan LRT City yang sempat mangkrak dilanjutkan mulai 1 Oktober 2026, dengan skema unit atau pengembalian dana bagi konsumen.",
  "date": "29 September 2026",
  "image": "assets/img/proyek-lrt-city-mangkrak-dibangun-lagi-1-oktober.jpg",
  "imageV": "mumra09g",
  "tags": [
   "LRT City",
   "Danantara",
   "Adhi Karya",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470244-proyek-lrt-city-mangkrak-mulai-dibangun-lagi-1-oktober-begini-nasib-konsumen"
 },
 {
  "slug": "bei-lanjutkan-suspensi-32-saham-meski-kriteria-iii-1-6-dicabut",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan Suspensi 32 Saham Meski Kriteria [III.1.6] Dicabut",
  "deck": "BEI tetap melanjutkan suspensi 32 saham meski kriteria Papan Pemantauan Khusus III.1.6 dicabut lewat revisi Peraturan I-X yang berlaku 28 September 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEI",
   "suspensi saham",
   "SMCB",
   "TRIO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b9f1a7147f_9de6033661.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-overload-di-tol-masih-tinggi-ri-kejar-zero-odol-2027",
  "category": "Industri",
  "title": "Truk [Overload] di Tol Masih Tinggi, RI Kejar Zero ODOL 2027",
  "deck": "BPJT menambah alat pendeteksi truk kelebihan muatan di tol, sementara data Januari-Agustus 2026 menunjukkan hingga seperempat truk besar yang lewat masih melanggar batas muatan.",
  "date": "29 September 2026",
  "image": "assets/img/truk-overload-di-tol-masih-tinggi-ri-kejar-zero-odol-2027.jpg",
  "imageV": "mumra0my",
  "tags": [
   "ODOL",
   "truk overload",
   "BPJT",
   "jalan tol"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470230-kejar-zero-odol-2027-pemerintah-siapkan-tambahan-alat-pendeteksi-truk-overload-di-tol"
 },
 {
  "slug": "sini-jelaskan-divestasi-ikn-rp31-8-miliar-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "SINI Jelaskan Divestasi IKN [Rp31,8 Miliar] ke Bursa",
  "deck": "SINI menjelaskan ke BEI divestasi saham PT Interkayu Nusantara Rp31,8 miliar, yang menyumbang 40,11% pendapatan Perseroan, serta perkembangan rencana akuisisi oleh CUAN.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "batu bara",
   "divestasi",
   "CUAN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/426c0da431_e27d3b5038.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gtbo-rkab-2026-belum-disetujui-utang-pajak-us-13-5-juta",
  "category": "Aksi Korporasi",
  "title": "GTBO: [RKAB] 2026 Belum Disetujui, Utang Pajak US$13,5 Juta",
  "deck": "GTBO menjawab surat permintaan penjelasan Bursa: RKAB 2026 masih diproses Kementerian ESDM, utang pajak US$13,46 juta, dan koreksi saldo laba US$8,65 juta.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "RKAB",
   "utang pajak",
   "tambang batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c286f67646_bf06878eba.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idea-jawab-bursa-soal-rencana-pengambilalihan-oleh-nawasena",
  "category": "Aksi Korporasi",
  "title": "IDEA Jawab Bursa soal Rencana [Pengambilalihan] oleh Nawasena",
  "deck": "IDEA menjelaskan ke BEI soal penurunan jumlah peserta akademi, kenaikan beban gaji, dan rencana pengambilalihan sahamnya oleh PT Nawasena Nugra Investama.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDEA",
   "pengambilalihan saham",
   "akademi vokasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3efe86542e_9d241d967c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-bayar-kupon-obligasi-sukuk-rp61-6-miliar",
  "category": "Aksi Korporasi",
  "title": "WIFI Bayar [Kupon] Obligasi-Sukuk Rp61,6 Miliar",
  "deck": "WIFI membayar bunga dan imbalan Obligasi serta Sukuk Ijarah Berkelanjutan I 2026 Seri A-C senilai total Rp61,63 miliar kepada investor lewat KSEI, 28 September 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "obligasi",
   "sukuk ijarah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8de77a60f9_c13729ee30.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penghasilan-nelayan-sinjai-naik-jadi-rp7-juta-per-bulan",
  "category": "UMKM",
  "title": "Penghasilan Nelayan Sinjai [Naik] Jadi Rp7 Juta per Bulan",
  "deck": "Kampung Nelayan Merah Putih di Sinjai kembali kirim 12 ton tuna loin ke Jakarta, seiring klaim KKP soal naiknya pendapatan nelayan setempat sejak Mei lalu.",
  "date": "29 September 2026",
  "image": "assets/img/penghasilan-nelayan-sinjai-naik-jadi-rp7-juta-per-bulan.jpg",
  "imageV": "mumo5h46",
  "tags": [
   "Kampung Nelayan Merah Putih",
   "Nelayan Sinjai",
   "Tuna",
   "KKP"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/operasional-kampung-nelayan-merah-putih-bikin-penghasilan-nelayan-tongke-tongke-melonjak-rmwK.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "kkp-mulai-perluasan-pelabuhan-pengambengan-senilai-rp1-27-t",
  "category": "Industri",
  "title": "KKP Mulai [Perluasan] Pelabuhan Pengambengan Senilai Rp1,27 T",
  "deck": "KKP memulai pengembangan Pelabuhan Perikanan Nusantara Pengambengan di Jembrana, Bali, senilai Rp1,27 triliun untuk perluasan kapasitas tangkap dan olah ikan hingga 2029.",
  "date": "29 September 2026",
  "image": "assets/img/kkp-mulai-perluasan-pelabuhan-pengambengan-senilai-rp1-27-t.jpg",
  "imageV": "mumo5isz",
  "tags": [
   "KKP",
   "Pelabuhan Perikanan",
   "Bali",
   "IsDB"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/menteri-trenggono-siapkan-ppn-pengambengan-jadi-pelabuhan-perikanan-kelas-dunia-wKBM.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "ri-korea-resmikan-pusat-pelatihan-sdm-industri-lepas-pantai",
  "category": "Industri",
  "title": "RI-Korea Resmikan Pusat Pelatihan [SDM] Industri Lepas Pantai",
  "deck": "Indonesia dan Korea Selatan membuka pusat pelatihan simulator untuk industri offshore plant service di Jakarta, menargetkan 240 tenaga terlatih hingga 2029.",
  "date": "29 September 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "Kerja Sama Indonesia-Korea",
   "Industri Lepas Pantai",
   "Pelatihan SDM",
   "STIP"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7118/gandeng-republik-korea-pemerintah-dorong-penguatan-sdm-industri-offshore-plant-service-melalui-kios-center",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "posbankum-tembus-83-960-rp1-2-triliun-dihemat-negara",
  "category": "Makroekonomi",
  "title": "Posbankum Tembus 83.960, Rp1,2 Triliun [Dihemat] Negara",
  "deck": "Kemenkum melaporkan 83.960 pos bantuan hukum berdiri di seluruh desa dan kelurahan, dengan 14.000 dari 16.000 kasus selesai lewat mediasi sehingga negara hemat Rp1,2 triliun.",
  "date": "29 September 2026",
  "image": "assets/img/posbankum-tembus-83-960-rp1-2-triliun-dihemat-negara.jpg",
  "imageV": "mumra15h",
  "tags": [
   "Posbankum",
   "Restorative Justice",
   "Bantuan Hukum",
   "Kementerian Hukum"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470226-83960-posbankum-terbentuk-di-indonesia-14-ribu-kasus-selesai-tanpa-pengadilan"
 },
 {
  "slug": "nice-akui-denda-rp185-93-miliar-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "NICE Akui Denda Rp185,93 Miliar, [Arus Kas] Operasi Negatif",
  "deck": "PT Adhi Kartiko Pratama Tbk menjawab pertanyaan BEI soal denda kawasan hutan, piutang ke pemegang saham, dan pendanaan proyek Rp468 miliar di tengah arus kas operasi yang negatif.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "denda administratif",
   "arus kas",
   "pertambangan nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4710b19b79_cd017104cb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-panggil-rupslb-21-oktober-agendakan-ubah-lini-bisnis",
  "category": "Aksi Korporasi",
  "title": "WIFI Panggil RUPSLB 21 Oktober, Agendakan [Ubah] Lini Bisnis",
  "deck": "PT Solusi Sinergi Digital Tbk resmi memanggil pemegang saham untuk RUPSLB 21 Oktober 2026, dengan agenda perubahan kegiatan usaha, kewenangan direksi, dan susunan direksi-komisaris.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "RUPSLB",
   "Solusi Sinergi Digital",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9cb10a6167_aea69d8c3d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "viva-cetak-laba-tapi-pendapatan-turun-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "VIVA Cetak Laba, tapi [Pendapatan] Turun di Semester I 2026",
  "deck": "Laba bersih VIVA Rp60 miliar pada semester I 2026 ditopang untung pelepasan saham Rp158,3 miliar, sementara pendapatan turun 7,6 persen dan rugi usaha melebar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "laporan keuangan",
   "media penyiaran",
   "PKPU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929185643-64353-0/FinancialStatement-2026-II-VIVA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "infranexia-ccsi-garap-kabel-laut-sub-2-jawa-sulawesi-kalimantan",
  "category": "Teknologi",
  "title": "InfraNexia-CCSI Garap Kabel Laut [SUB-2] Jawa-Sulawesi-Kalimantan",
  "deck": "InfraNexia dan CCSI-KD meneken kesepakatan awal pembangunan kabel laut SUB-2 yang akan menyambungkan Jawa, Sulawesi, dan Kalimantan untuk memperkuat kapasitas jaringan data.",
  "date": "29 September 2026",
  "image": "assets/img/infranexia-ccsi-garap-kabel-laut-sub-2-jawa-sulawesi-kalimantan.jpg",
  "imageV": "mumo5ka7",
  "tags": [
   "InfraNexia",
   "Telkom Indonesia",
   "kabel laut",
   "SUB-2"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470214-infranexia-dan-ccsi-kd-kembangkan-skkl-sub-2-dorong-kesiapan-infrastruktur-hadapi-pertumbuhan-trafik-data"
 },
 {
  "slug": "blangkon-jawa-bertahan-berkat-pembiayaan-pnm-mekaar",
  "category": "UMKM",
  "title": "Blangkon Jawa Bertahan Berkat Pembiayaan [PNM] Mekaar",
  "deck": "Perajin blangkon Tri Damayanti bertahan dan berkembang berkat pembiayaan bahan baku serta pendampingan pemasaran dari PNM sejak 2023.",
  "date": "29 September 2026",
  "image": "assets/img/blangkon-jawa-bertahan-berkat-pembiayaan-pnm-mekaar.jpg",
  "imageV": "mumo5kqa",
  "tags": [
   "blangkon",
   "PNM Mekaar",
   "UMKM",
   "pembiayaan ultra mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470211-blangkon-jawa-tetap-hidup-di-tengah-zaman-bersama-pnm-mekaar"
 },
 {
  "slug": "film-gandeng-sbs-korea-perdalam-kerja-sama-konten-media",
  "category": "Aksi Korporasi",
  "title": "FILM Gandeng SBS Korea, [Perdalam] Kerja Sama Konten Media",
  "deck": "MD Entertainment (FILM) dan SBS Korea teken MOU kerja sama konten, memperdalam kemitraan setahun setelah SBS suntik modal sekitar US$20 juta lewat rights issue Perseroan.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "SBS",
   "kerja sama konten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2682dd1472_ca715f942a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-masih-nol-pendapatan-ekuitas-turun-ke-rp46-3-miliar",
  "category": "Aksi Korporasi",
  "title": "TGRA Masih Nol Pendapatan, [Ekuitas] Turun ke Rp46,3 Miliar",
  "deck": "Terregra Asia Energy (TGRA) melaporkan keuangan interim semester I 2026 tanpa pendapatan usaha, sementara ekuitas turun ke Rp46,3 miliar dan utang ke pihak berelasi membengkak ke Rp102,65 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "laporan keuangan interim",
   "ekuitas",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929181756-64430-0/FinancialStatement-2026-II-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asgr-bagikan-dividen-interim-rp297-per-saham-cair-26-oktober",
  "category": "Aksi Korporasi",
  "title": "ASGR Bagikan Dividen Interim [Rp297] per Saham, Cair 26 Oktober",
  "deck": "Astra Graphia menetapkan dividen interim tahun buku 2026 senilai Rp400,05 miliar atau Rp297 per saham, dengan pembayaran pada 26 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASGR",
   "dividen interim",
   "Astra Graphia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/54e3df1ba2_0a8b6ae102.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fmfn-ekuitas-anjlok-85-jadi-rp18-8-miliar-per-juni-2026",
  "category": "Aksi Korporasi",
  "title": "FMFN: Ekuitas [Anjlok] 85% Jadi Rp18,8 Miliar per Juni 2026",
  "deck": "Ekuitas KB Finansia Multi Finance turun dari Rp128,1 miliar menjadi Rp18,8 miliar dalam enam bulan, seiring piutang pembiayaan menyusut dan penyaluran baru baru capai separuh target.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FMFN",
   "KB Finansia Multi Finance",
   "multifinance",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929180213-64449-0/FinancialStatement-2026-II-FMFN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-kuartal-i-2026-nol-pendapatan-ekuitas-susut-ke-rp49-m",
  "category": "Aksi Korporasi",
  "title": "TGRA Kuartal I 2026: Nol Pendapatan, [Ekuitas] Susut ke Rp49 M",
  "deck": "Laporan interim kuartal I 2026 TGRA masih nihil pendapatan usaha, ekuitas turun ke Rp49,01 miliar, dan utang ke pihak berelasi membengkak jadi Rp100,59 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "laporan keuangan",
   "Terregra Asia Energy",
   "emiten watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929175812-64421-0/FinancialStatement-2026-I-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smar-ajukan-nilai-buku-pajak-untuk-merger-panigoran",
  "category": "Aksi Korporasi",
  "title": "SMAR Ajukan Nilai Buku Pajak untuk [Merger] Panigoran",
  "deck": "SMART menyerahkan laporan keuangan sebelum dan sesudah penggabungan usaha dengan PT Perusahaan Perkebunan Panigoran ke Ditjen Pajak untuk permohonan penggunaan nilai buku.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "merger",
   "Panigoran",
   "nilai buku pajak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a4ae54e45e_092dcb6ad3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-laporkan-transaksi-afiliasi-utang-piutang-antar-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "EMAS Laporkan Transaksi [Afiliasi] Utang Piutang Antar Anak Usaha",
  "deck": "EMAS mengungkap tiga perjanjian utang piutang antar anak usaha, PIN dengan Perseroan, GSM, dan PETS, efektif 25 September 2026 tanpa perlu persetujuan RUPS.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Merdeka Gold Resources",
   "transaksi afiliasi",
   "utang piutang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2475144564_36c6813fa6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ieu-cepa-bisa-hapus-selisih-tarif-ri-vietnam-di-eropa",
  "category": "Industri",
  "title": "IEU-CEPA Bisa [Hapus] Selisih Tarif RI-Vietnam di Eropa",
  "deck": "DEN menyebut IEU-CEPA berpotensi menyamakan tarif produk padat karya Indonesia dengan Vietnam di pasar Eropa mulai tahun depan.",
  "date": "29 September 2026",
  "image": "assets/img/ieu-cepa-bisa-hapus-selisih-tarif-ri-vietnam-di-eropa.jpg",
  "imageV": "mumo5l4u",
  "tags": [
   "IEU-CEPA",
   "tarif ekspor",
   "investasi padat karya",
   "Vietnam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470184-ieu-cepa-berpotensi-hapus-gap-tarif-ri-vietnam-investasi-padat-karya-bisa-bergeser-ke-indonesia"
 },
 {
  "slug": "pupuk-indonesia-bawa-16-umkm-binaan-ke-kriyanusa-2026",
  "category": "UMKM",
  "title": "Pupuk Indonesia Bawa [16] UMKM Binaan ke Kriyanusa 2026",
  "deck": "Pupuk Indonesia menampilkan produk UMKM binaan sektor wastra dan kriya di pameran Kriyanusa 2026, JCC, 26-30 September.",
  "date": "29 September 2026",
  "image": "assets/img/pupuk-indonesia-bawa-16-umkm-binaan-ke-kriyanusa-2026.jpg",
  "imageV": "mumivr08",
  "tags": [
   "UMKM",
   "Pupuk Indonesia",
   "Kriyanusa",
   "wastra"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/887/pupuk-indonesia-perluas-pasar-umkm-binaan-melalui-kriyanusa-2026",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "pemerintah-kejar-tambahan-100-gigawatt-pembangkit-listrik",
  "category": "Energi",
  "title": "Pemerintah Kejar Tambahan [100 Gigawatt] Pembangkit Listrik",
  "deck": "Menko Airlangga sebut kapasitas pembangkit listrik perlu naik hingga 100 gigawatt untuk mendukung target investasi Rp2.218-2.258 triliun demi pertumbuhan ekonomi 6 persen pada 2027.",
  "date": "29 September 2026",
  "image": "assets/img/jaringan-listrik.jpg",
  "tags": [
   "Ekonomi Hijau",
   "Energi Terbarukan",
   "Investasi",
   "Kendaraan Listrik"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7116/menko-airlangga-green-energy-dan-digital-development-jadi-twin-engine-pertumbuhan-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "proyek-jica-di-kawasan-rebana-rampung-investasi-tembus-rp131-6-t",
  "category": "Industri",
  "title": "Proyek JICA di Kawasan Rebana [Rampung], Investasi Tembus Rp131,6 T",
  "deck": "Kerja sama teknis dua tahun Indonesia-Jepang untuk Kawasan Rebana tuntas, menghasilkan rencana induk kawasan dan pedoman industri hijau di sekitar Pelabuhan Patimban.",
  "date": "29 September 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "Kawasan Rebana",
   "JICA",
   "Pelabuhan Patimban",
   "Investasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7117/tuntaskan-kerja-sama-teknis-jica-pemerintah-perkuat-sistem-koordinasi-dan-kelembagaan-pengelolaan-kawasan-rebana",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "mice-siwie-honoris-tambah-saham-400-ribu-lembar-lagi",
  "category": "Aksi Korporasi",
  "title": "MICE: Siwie Honoris [Tambah] Saham 400 Ribu Lembar Lagi",
  "deck": "Siwie Honoris membeli tambahan 400.000 saham Multi Indocitra secara tidak langsung pada 25 September 2026, hak suaranya naik jadi 0,2949 persen.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MICE",
   "Multi Indocitra",
   "kepemilikan saham",
   "Siwie Honoris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-2753-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-bersih-pada-melonjak-1-239-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "Laba bersih PADA [melonjak] 1.239% di semester I-2026",
  "deck": "Pendapatan PADA naik 81,6% dan laba bersih melonjak 1.239,4% pada semester I 2026, didorong bisnis kurir dan proyek FTTH, di tengah kenaikan utang bank jangka pendek yang lebih cepat dari ekuitas.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADA",
   "laporan keuangan",
   "outsourcing",
   "INET"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4184a73594_9fb07d3f8d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "den-sebut-stabilitas-makro-kunci-genjot-ekonomi-5-persen",
  "category": "Makroekonomi",
  "title": "DEN Sebut [Stabilitas] Makro Kunci Genjot Ekonomi 5 Persen",
  "deck": "Wakil Ketua DEN Mari Elka Pangestu menyebut stabilitas makroekonomi jadi syarat utama menarik investasi dan mendorong ekonomi RI tumbuh di atas 5 persen.",
  "date": "29 September 2026",
  "image": "assets/img/den-sebut-stabilitas-makro-kunci-genjot-ekonomi-5-persen.jpg",
  "imageV": "mumivt8a",
  "tags": [
   "Dewan Ekonomi Nasional",
   "stabilitas makroekonomi",
   "investasi",
   "pertumbuhan ekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470175-den-ungkap-kunci-ri-dorong-ekonomi-tumbuh-di-atas-5-persen"
 },
 {
  "slug": "part-catat-laba-naik-30-di-2025-garap-right-issue",
  "category": "Pasar Modal",
  "title": "PART Catat Laba [Naik] 30% di 2025, Garap Right Issue",
  "deck": "Penjualan Cipta Perdana Lancar (PART) naik 38,23 persen jadi Rp369,59 miliar pada 2025, laba bersih tumbuh 29,97 persen, dan perseroan menyiapkan right issue Rp200 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/part-catat-laba-naik-30-di-2025-garap-right-issue.jpg",
  "imageV": "mumivtmg",
  "tags": [
   "PART",
   "right issue",
   "komponen otomotif",
   "kinerja emiten"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470197-bukukan-kinerja-positif-di-2025-part-kini-siapkan-right-issue-hingga-buyback-saham"
 },
 {
  "slug": "dr-waran-untr-disesuaikan-usai-dividen-rp1-48-t",
  "category": "Aksi Korporasi",
  "title": "DR: Waran [UNTR] Disesuaikan usai Dividen Rp1,48 T",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur UNTR menyusul rencana dividen tunai UNTR Rp1,48 triliun atau Rp430 per saham yang dibayar 26 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "UNTR",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/772d3487ae_b3475349f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-cetak-laba-naik-30-siapkan-right-issue-rp200-miliar",
  "category": "Aksi Korporasi",
  "title": "PART Cetak Laba Naik 30%, Siapkan [Right Issue] Rp200 Miliar",
  "deck": "Penjualan PART tumbuh 38,23% menjadi Rp369,59 miliar pada 2025, dan perseroan menyiapkan rights issue Rp200 miliar serta buyback saham hingga Rp10 miliar untuk memperkuat modal kerja.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "kinerja keuangan",
   "rights issue",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1fc46f7b16_11e968a1d1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-direktur-utama-burhanuddin-abdullah-mundur",
  "category": "Aksi Korporasi",
  "title": "SMMA: Direktur Utama Burhanuddin Abdullah [Mundur]",
  "deck": "Burhanuddin Abdullah mengundurkan diri dari kursi Direktur Utama SMMA, efektif setelah disetujui RUPS mendatang, tanpa alasan maupun pengganti yang disebutkan.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "Direktur Utama",
   "pergantian direksi",
   "Sinar Mas Multiartha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1ddd959114_07ac77a480.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kebutuhan-listrik-2030-tembus-800-twh-ruptl-direvisi",
  "category": "Energi",
  "title": "Kebutuhan Listrik 2030 Tembus 800 TWh, RUPTL [Direvisi]",
  "deck": "Airlangga Hartarto mendorong revisi RUPTL karena proyeksi kebutuhan listrik nasional pada 2030 tembus 700-800 TWh, jauh di atas rencana tambahan pembangkit 69,5 GW yang berlaku saat ini.",
  "date": "29 September 2026",
  "image": "assets/img/kebutuhan-listrik-2030-tembus-800-twh-ruptl-direvisi.jpg",
  "imageV": "mumivu0v",
  "tags": [
   "RUPTL",
   "Airlangga Hartarto",
   "Energi Surya",
   "Kebutuhan Listrik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470151-kebutuhan-listrik-2030-tembus-800-twh-airlangga-dorong-ruptl-segera-direvisi"
 },
 {
  "slug": "arko-nosu-hydro-teken-pembiayaan-rp690-6-m-dari-smi",
  "category": "Aksi Korporasi",
  "title": "ARKO: Nosu Hydro Teken [Pembiayaan] Rp690,6 M dari SMI",
  "deck": "Anak usaha ARKO, PT Nosu Hydro, menandatangani perjanjian pembiayaan senilai Rp690,6 miliar dengan PT SMI untuk membangun PLTA Pongbembe 20 MW, tanpa perlu persetujuan RUPS.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "pembiayaan infrastruktur",
   "PLTA Pongbembe",
   "SMI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f22cac909c_aada76f399.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "padi-proses-pemegang-saham-pengendali-baru-masih-di-ojk",
  "category": "Aksi Korporasi",
  "title": "PADI: Proses Pemegang Saham [Pengendali] Baru Masih di OJK",
  "deck": "Minna Padi Investama Sekuritas Tbk menjawab permintaan klarifikasi BEI atas volatilitas transaksi sahamnya, dan mengungkap pengajuan status pemegang saham pengendali baru masih diproses OJK.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADI",
   "Minna Padi Investama Sekuritas",
   "Pemegang Saham Pengendali",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5233d33e41_19d253e8b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intp-gabungkan-dua-anak-usaha-pelayaran-aset-rp400-8-miliar",
  "category": "Aksi Korporasi",
  "title": "INTP [Gabungkan] Dua Anak Usaha Pelayaran, Aset Rp400,8 Miliar",
  "deck": "Indocement menggabungkan dua entitas anak di bidang pelayaran, PT Lintas Bahana Abadi ke dalam PT Bahana Indonor, untuk efisiensi distribusi semen. Total aset gabungan mencapai Rp400,8 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTP",
   "Indocement",
   "merger anak usaha",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/86e6f3db5f_88a060d8ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pada-total-liabilitas-naik-47-ditopang-utang-bank-baru",
  "category": "Aksi Korporasi",
  "title": "PADA: total [liabilitas] naik 47% ditopang utang bank baru",
  "deck": "Total aset PT Personel Alih Daya (PADA) naik 26,6% dan total liabilitas naik 47% pada semester I 2026, terutama karena pinjaman bank baru dan piutang usaha dari segmen kurir yang baru dibuka.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADA",
   "laporan keuangan",
   "utang bank",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929162750-64447-0/FinancialStatement-2026-II-PADA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-harga-pelaksanaan-waran-untr-usai-dividen-interim",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Harga Pelaksanaan Waran UNTR usai [Dividen] Interim",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran terstruktur UNTRZPCZ6A dan UNTRZPCM7A menyusul dividen interim UNTR Rp430 per saham, efektif awal Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "UNTR",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0358b98923_c9ecfd4084.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-lepas-40-juta-saham-lagi-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Lepas [40 Juta] Saham Lagi Lewat Repo",
  "deck": "Samuel Sekuritas Indonesia melepas 40,07 juta saham RLCO seharga Rp4.290 lewat pencairan repo, hak suaranya turun dari 6,57% jadi 5,29%.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-2226-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baby-tuntaskan-dana-rights-issue-ke-akuisisi-emway-globalindo",
  "category": "Aksi Korporasi",
  "title": "BABY Tuntaskan Dana Rights Issue ke Akuisisi [Emway Globalindo]",
  "deck": "BABY memastikan seluruh dana rights issue Rp138,46 miliar sudah terpakai penuh untuk mengakuisisi Emway Globalindo dan modal kerja Adidas Kids-Puma Kids.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BABY",
   "rights issue",
   "akuisisi Emway Globalindo",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/de96cec396_e56782a4be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-gelar-public-expose-soal-akuisisi-sinar-aroma-sentosa",
  "category": "Aksi Korporasi",
  "title": "SMLE Gelar Public Expose Soal [Akuisisi] Sinar Aroma Sentosa",
  "deck": "SMLE akan memaparkan rencana pengalihan saham anak usahanya, PT Sinar Aroma Sentosa, kepada DENICO FOOD Ingredients asal Denmark, dalam public expose 13 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "akuisisi",
   "Sinar Aroma Sentosa",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a8070032a8_0a99c39149.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-siapkan-dana-rp112-miliar-lunasi-obligasi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BEXI Siapkan Dana [Rp112 Miliar] Lunasi Obligasi Jatuh Tempo",
  "deck": "Indonesia Eximbank (BEXI) menyatakan sudah menyiapkan dana Rp112 miliar untuk melunasi pokok Obligasi Berkelanjutan IV Tahap VII 2019 Seri D yang jatuh tempo 29 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI",
   "Indonesia Eximbank",
   "obligasi",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0dec349fe5_35c7742f22.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scnp-cetak-laba-usaha-turnaround-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SCNP Cetak Laba Usaha [Turnaround] Semester I 2026",
  "deck": "Pendapatan SCNP naik 41,7% jadi Rp156,58 miliar pada semester I 2026, mengantarkan perseroan meraih laba usaha positif Rp6,74 miliar dan laba bersih Rp12,55 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCNP",
   "kinerja keuangan",
   "manufaktur elektronik",
   "Kemendag"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fc538e9dfa_d81f9d8639.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-direksi-tambah-saham-988-juta-lembar-via-repo",
  "category": "Aksi Korporasi",
  "title": "BKSL: Direksi Tambah Saham 988 Juta Lembar via [Repo]",
  "deck": "Samuel Sekuritas Indonesia menambah 988,14 juta saham Sentul City lewat perjanjian repo pada 29 September 2026, hak suara naik dari 5,00% jadi 5,59%.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "repo saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-1682-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raam-direksi-tambah-saham-487-000-lembar-rp83-6-juta",
  "category": "Aksi Korporasi",
  "title": "RAAM: Direksi [Tambah] Saham 487.000 Lembar, Rp83,6 Juta",
  "deck": "Ram Jethmal Punjabi, direksi Tripar Multivision Plus, membeli saham RAAM lewat 10 transaksi kecil pada 28 September 2026. Hak suaranya naik tipis ke 68,84 persen.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAAM",
   "Tripar Multivision Plus",
   "kepemilikan saham",
   "transaksi direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-0060-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vktr-pastikan-rights-issue-rp3-triliun-dilusi-capai-25-53",
  "category": "Aksi Korporasi",
  "title": "VKTR Pastikan Rights Issue Rp3 Triliun, [Dilusi] Capai 25,53%",
  "deck": "OJK menyatakan efektif rights issue VKTR senilai hingga Rp3 triliun. BCI dan BIS berkomitmen jadi pembeli siaga hingga Rp2,27 triliun jika publik tak menyerap penuh.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "rights issue",
   "PMHMETD I",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d08abf236a_42ff60d0a3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vktr-gelar-rights-issue-15-miliar-saham-harga-rp200",
  "category": "Aksi Korporasi",
  "title": "VKTR Gelar [Rights Issue] 15 Miliar Saham, Harga Rp200",
  "deck": "VKTR menjadwalkan penerbitan saham baru lewat rights issue hingga 15 miliar lembar dengan rasio 12:35 dan harga pelaksanaan Rp200, setelah efektif dari OJK pada 28 September 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1e56a5b960_63895e244d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-lepas-1-juta-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Lepas [1 Juta] Saham Lagi",
  "deck": "Putrasakti Mandiri kembali menjual 1 juta saham Puri Sentul Permai pada 28 September dengan harga Rp409, bagian dari restrukturisasi kepemilikan dalam kelompok usaha.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi grup"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-9349-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pupuk-bersubsidi-perikanan-pangkep-baru-43-tersalur",
  "category": "BUMN",
  "title": "Pupuk Bersubsidi Perikanan Pangkep Baru [43%] Tersalur",
  "deck": "Dari alokasi 27.156 ton pupuk bersubsidi perikanan Pangkep tahun 2026, baru 11.562 ton atau 43 persen tersalur hingga 24 September 2026.",
  "date": "29 September 2026",
  "image": "assets/img/pupuk-bersubsidi-perikanan-pangkep-baru-43-tersalur.jpg",
  "imageV": "mumbzcav",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Bersubsidi",
   "Pangkep",
   "Perikanan"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/886/pupuk-indonesia-perkuat-penyaluran-pupuk-bersubsidi-untuk-sektor-perikanan-di-pangkep",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "waran-enrgbqcx6a-disesuaikan-ikuti-rights-issue-enrg",
  "category": "Aksi Korporasi",
  "title": "Waran ENRGBQCX6A [Disesuaikan] Ikuti Rights Issue ENRG",
  "deck": "Korea Investment and Sekuritas Indonesia menyesuaikan syarat waran terstruktur ENRGBQCX6A menyusul rights issue ENRG senilai Rp4,12 triliun yang bisa mendilusi saham hingga 33,33 persen.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "ENRG",
   "rights issue",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6d8de9a05f_a0fd814d52.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koperasi-pesantren-di-bandung-hubungkan-300-petani-ke-ritel-modern",
  "category": "UMKM",
  "title": "Koperasi Pesantren di Bandung Hubungkan 300 [Petani] ke Ritel Modern",
  "deck": "Koperasi Al-Ittifaq di Bandung menghubungkan sekitar 300 petani dengan pasar ritel modern, hotel, dan restoran, seiring produksi naik menjadi 7-8 ton per hari.",
  "date": "29 September 2026",
  "image": "assets/img/koperasi-pesantren-di-bandung-hubungkan-300-petani-ke-ritel-modern.jpg",
  "imageV": "mumbzcsy",
  "tags": [
   "koperasi",
   "petani",
   "pesantren",
   "pasar modern"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470146-gandeng-ratusan-petani-koperasi-pesantren-di-bandung-bawa-produk-pertanian-tembus-pasar-modern"
 },
 {
  "slug": "tapg-direksi-george-oetomo-tambah-100-000-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi George Oetomo [Tambah] 100.000 Saham Lagi",
  "deck": "George Oetomo, Direksi TAPG, membeli 100.000 saham tambahan pada 28 September 2026 seharga Rp1.975 per saham, menambah kepemilikannya jadi 50,9 juta lembar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "kepemilikan saham",
   "direksi",
   "Triputra Agro Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-7838-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "belanja-negara-2027-naik-ke-rp4-106-t-defisit-tetap-2-4",
  "category": "Makroekonomi",
  "title": "Belanja Negara 2027 Naik ke Rp4.106 T, Defisit [Tetap] 2,4%",
  "deck": "Pemerintah dan Banggar DPR menaikkan belanja negara 2027 jadi Rp4.106,26 triliun, diimbangi kenaikan target pendapatan agar defisit tetap 2,4 persen dari PDB.",
  "date": "29 September 2026",
  "image": "assets/img/belanja-negara-2027-naik-ke-rp4-106-t-defisit-tetap-2-4.jpg",
  "imageV": "mumbzd48",
  "tags": [
   "APBN 2027",
   "Belanja Negara",
   "Defisit APBN",
   "Banggar DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470140-belanja-negara-2027-naik-jadi-rp4106-triliun-defisit-tetap-24-persen"
 },
 {
  "slug": "wgsh-gelar-rupslb-21-oktober-setujui-mundurnya-direktur",
  "category": "Aksi Korporasi",
  "title": "WGSH Gelar RUPSLB 21 Oktober, Setujui [Mundurnya] Direktur",
  "deck": "RUPSLB WGSH pada 21 Oktober 2026 akan meminta persetujuan pemegang saham atas pengunduran diri Direktur Moch Sajoang yang mengajukan surat mundur sejak 23 Juli 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WGSH",
   "RUPSLB",
   "Direksi",
   "Wira Global Solusi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d3a874715d_66c1aabbd8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crab-jadwalkan-pembayaran-dividen-rp2-saham-cair-29-oktober",
  "category": "Aksi Korporasi",
  "title": "CRAB [Jadwalkan] Pembayaran Dividen Rp2/Saham, Cair 29 Oktober",
  "deck": "Toba Surimi menetapkan jadwal pembayaran dividen tunai Rp2 per saham hasil RUPST, dengan tanggal pencatatan pemegang saham 7 Oktober dan pembayaran 29 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "dividen",
   "RUPST",
   "Toba Surimi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ca374deed2_9260d8c3e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertalite-dipastikan-tak-naik-meski-minyak-tembus-107-dolar",
  "category": "Energi",
  "title": "Pertalite Dipastikan [Tak Naik] Meski Minyak Tembus 107 Dolar",
  "deck": "ESDM pastikan harga pertalite dan biosolar tidak naik sampai akhir tahun, meski minyak dunia sempat tembus 107 dolar AS per barel akibat konflik AS-Iran.",
  "date": "29 September 2026",
  "image": "assets/img/pertalite-dipastikan-tak-naik-meski-minyak-tembus-107-dolar.jpg",
  "imageV": "mumbzdif",
  "tags": [
   "pertalite",
   "esdm",
   "bbm bersubsidi",
   "harga minyak dunia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470138-harga-pertalite-dipastikan-tak-naik-meski-minyak-dunia-107-dolar-as-esdm-eksplorasi-dan-eksploitasi-kami-genjot"
 },
 {
  "slug": "pegadaian-sabet-empat-penghargaan-esg-kesgi-2026",
  "category": "BUMN",
  "title": "Pegadaian Sabet [Empat] Penghargaan ESG KESGI 2026",
  "deck": "Pegadaian menyapu bersih empat kategori penilaian ESG di ajang KESGI Award 2026, melanjutkan tren skor keberlanjutan yang naik sejak 2021.",
  "date": "29 September 2026",
  "image": "assets/img/pegadaian-sabet-empat-penghargaan-esg-kesgi-2026.jpg",
  "imageV": "muma7mqv",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470136-kinerja-esg-di-atas-rata-rata-sektor-pegadaian-raih-empat-kesgi-award-2026"
 },
 {
  "slug": "cmnp-laba-semester-i-2026-turun-33-meski-pendapatan-naik",
  "category": "Aksi Korporasi",
  "title": "CMNP: Laba Semester I 2026 [Turun] 33% Meski Pendapatan Naik",
  "deck": "Pendapatan Citra Marga Nusaphala Persada naik 33,5 persen jadi Rp2,93 triliun pada semester I 2026, tapi laba bersih turun 33 persen akibat provisi perkara hukum baru senilai Rp202,49 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMNP",
   "laporan keuangan",
   "jalan tol",
   "emiten infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929120031-64443-0/FinancialStatement-2026-II-CMNP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "anjt-beri-pinjaman-rp2-triliun-ke-perusahaan-afiliasi",
  "category": "Aksi Korporasi",
  "title": "ANJT Beri [Pinjaman] Rp2 Triliun ke Perusahaan Afiliasi",
  "deck": "ANJT menyalurkan pinjaman hingga Rp2 triliun tanpa jaminan ke PT Adhitya Serayakorita, perusahaan afiliasi dalam satu grup pengendali First Resources Limited.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANJT",
   "transaksi afiliasi",
   "pinjaman",
   "First Resources"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8df820e992_46ac6efe2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-lunasi-obligasi-sukuk-rp1-04-triliun-november-2026",
  "category": "Aksi Korporasi",
  "title": "INKP Lunasi Obligasi-Sukuk [Rp1,04 Triliun] November 2026",
  "deck": "INKP akan melunasi pokok obligasi dan sukuk rupiah senilai total Rp1,04 triliun pada 21 November 2026, disusul obligasi dolar AS US$900.000 sehari kemudian.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f8f046c494_2d4e62d626.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crab-utang-bank-mandiri-disorot-auditor-sebagai-hal-audit-utama",
  "category": "Aksi Korporasi",
  "title": "CRAB: Utang Bank Mandiri Disorot Auditor sebagai [Hal Audit Utama]",
  "deck": "Sesi tanya jawab Public Expose CRAB mengungkap kenaikan liabilitas terkait kredit modal kerja Bank Mandiri yang oleh auditor ditandai sebagai Hal Audit Utama, di tengah proses hukum yang masih berjalan.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "Toba Surimi Industries",
   "Public Expose",
   "Bank Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/59c907c130_fa2486110f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-belum-kantongi-restu-tunda-bayar-bunga-obligasi-rp44-7-m",
  "category": "Aksi Korporasi",
  "title": "PTPP Belum Kantongi Restu [Tunda] Bayar Bunga Obligasi Rp44,7 M",
  "deck": "RUPO dan RUPSu PTPP pada 1-2 September 2026 belum menyetujui usulan penundaan bunga obligasi dan bagi hasil sukuk untuk enam instrumen senilai Rp44,68 miliar yang jatuh tempo Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "obligasi",
   "restrukturisasi utang",
   "sukuk mudharabah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8a2a5972d5_b1f917466e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-terbitkan-1-25-miliar-saham-baru-dana-rp125-m-ke-gigp",
  "category": "Aksi Korporasi",
  "title": "INPS Terbitkan [1,25 Miliar] Saham Baru, Dana Rp125 M ke GIGP",
  "deck": "PT Indah Prakasa Sentosa (INPS) akan menerbitkan hingga 1,25 miliar saham baru kepada pengendali GIGP senilai Rp125 miliar untuk menambal ekuitas negatif dan melunasi utang.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "private placement",
   "dilusi saham",
   "perbaikan posisi keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a4a799bc5e_08fc1fb2ca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-catat-transaksi-afiliasi-rp280-6-juta-ke-pengendali",
  "category": "Aksi Korporasi",
  "title": "AYLS Catat [Transaksi Afiliasi] Rp280,6 Juta ke Pengendali",
  "deck": "Arkayana Lestari Grup melaporkan transaksi afiliasi senilai Rp280,6 juta dengan pengendalinya, PT Bintang Cahaya Investment, untuk kebutuhan operasional Agustus 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYLS",
   "transaksi afiliasi",
   "keterbukaan informasi",
   "pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/aaac5f2406_c02550f7ac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-lapor-transaksi-afiliasi-rp306-6-juta-untuk-opex-mei",
  "category": "Aksi Korporasi",
  "title": "AYLS Lapor Transaksi Afiliasi [Rp306,6 Juta] untuk Opex Mei",
  "deck": "PT Arkayana Lestari Grup Tbk melaporkan transaksi afiliasi senilai Rp306,6 juta dengan pengendalinya, PT Bintang Cahaya Investment, untuk membiayai belanja operasional Mei 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYLS",
   "transaksi afiliasi",
   "pengendali",
   "opex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6b80b5347b_05b34d1edb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-lapor-transaksi-afiliasi-rp408-8-juta-untuk-opex-april",
  "category": "Aksi Korporasi",
  "title": "AYLS Lapor [Transaksi Afiliasi] Rp408,8 Juta untuk Opex April",
  "deck": "AYLS melaporkan transaksi afiliasi Rp408,8 juta dengan pengendali PT Bintang Cahaya Investment untuk membiayai opex April 2026, laporan ketiga transaksi sejenis yang terbit hari ini.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYLS",
   "transaksi afiliasi",
   "pengendali",
   "opex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c3714b80e1_9e50c54050.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-tetapkan-rupslb-3-november-bahas-modal-dasar-baru",
  "category": "Aksi Korporasi",
  "title": "INPS Tetapkan RUPSLB [3 November], Bahas Modal Dasar Baru",
  "deck": "INPS menetapkan jadwal RUPSLB pada 3 November 2026 untuk menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu guna menutup ekuitas negatif Rp42,8 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "RUPSLB",
   "private placement",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/29c27f8a23_c33a5b5d99.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-peringkat-turun-ke-idccc-obligasi-bergaransi-tetap-aaa",
  "category": "Aksi Korporasi",
  "title": "WSKT: Peringkat Turun ke [idCCC], Obligasi Bergaransi Tetap AAA",
  "deck": "PEFINDO menurunkan peringkat korporasi Waskita Karya dari idB menjadi idCCC dengan CreditWatch negatif, menyusul gagal bayar pokok obligasi yang dijamin pemerintah.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "PEFINDO",
   "peringkat obligasi",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8da1f8c005_3228bfd492.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-rugi-rp259-miliar-ekuitas-anjlok-83-persen",
  "category": "Aksi Korporasi",
  "title": "TGRA Rugi Rp259 Miliar, Ekuitas [Anjlok] 83 Persen",
  "deck": "Laporan keuangan 2025 PT Terregra Asia Energy (TGRA) mencatat rugi bersih Rp259,5 miliar dan ekuitas turun 83 persen menjadi Rp51,4 miliar, disertai peringatan auditor soal kelangsungan usaha.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "Terregra Asia Energy",
   "rugi bersih",
   "kelangsungan usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260929100315-64445-0/FinancialStatement-2025-Tahunan-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crab-bagikan-dividen-rp2-saham-mayoritas-laba-ditahan",
  "category": "Aksi Korporasi",
  "title": "CRAB Bagikan [Dividen] Rp2/Saham, Mayoritas Laba Ditahan",
  "deck": "RUPS Toba Surimi menyetujui dividen tunai Rp3,9 miliar dari laba bersih Rp22,84 miliar, sisanya ditahan sebagai modal kerja.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "RUPS",
   "dividen",
   "Toba Surimi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/64339dad47_2de98aa75f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-buka-jadwal-rupslb-3-november-ini-tenggatnya",
  "category": "Aksi Korporasi",
  "title": "INPS Buka Jadwal [RUPSLB] 3 November, Ini Tenggatnya",
  "deck": "INPS menetapkan tenggat pemegang saham per 9 Oktober 2026 dan batas usulan agenda 5 Oktober 2026 menjelang RUPSLB soal penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "RUPSLB",
   "PMTHMETD",
   "GIGP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1856472da8_e8f7a631e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bata-umumkan-rencana-rupslb-pada-5-november-2026",
  "category": "Aksi Korporasi",
  "title": "BATA Umumkan Rencana [RUPSLB] pada 5 November 2026",
  "deck": "Sepatu Bata Tbk akan menggelar RUPSLB pada 5 November 2026, dengan recording date pemegang saham 13 Oktober dan mata acara resmi diumumkan 14 Oktober 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATA",
   "RUPSLB",
   "Sepatu Bata Tbk",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5b4cf2cd80_131a208db2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-konstruksi-ca-edc-capai-80-masuk-tahap-pemasangan-alat",
  "category": "Aksi Korporasi",
  "title": "TPIA: Konstruksi CA-EDC Capai [80%], Masuk Tahap Pemasangan Alat",
  "deck": "Chandra Asri Pacific melaporkan progres pembangunan fasilitas CA-EDC senilai lebih dari US$800 juta mencapai 80 persen, memasuki tahap pemasangan peralatan utama menjelang target operasional 2027.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "CA-EDC",
   "petrokimia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/06e78b6b0f_cdbd29422f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "drma-komisaris-beli-80-000-saham-seharga-rp970-lembar",
  "category": "Aksi Korporasi",
  "title": "DRMA: Komisaris Beli [80.000] Saham Seharga Rp970/Lembar",
  "deck": "Komisaris DRMA membeli 80.000 saham seharga Rp970 pada 23 September 2026, menambah kepemilikan menjadi 79,65 juta saham dengan hak suara tetap 1,69 persen.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Dharma Polimetal",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29092026-2648-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-raup-rp177-m-dari-rights-issue-laba-semester-i-turun",
  "category": "Aksi Korporasi",
  "title": "CSIS Raup Rp177 M dari [Rights Issue], Laba Semester I Turun",
  "deck": "PT Cahayasakti Investindo Sukses Tbk meraih dana segar Rp177,4 miliar dari penerbitan saham baru pada semester I 2026, sementara laba bersih turun 16 persen menjadi Rp20,07 miliar.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSIS",
   "rights issue",
   "laporan keuangan interim",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260929060212-64385-0/FinancialStatement-2026-II-CSIS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-tambah-kbli-jadi-holding-pembiayai-proyek-sampah-energi",
  "category": "Aksi Korporasi",
  "title": "SOFA Tambah KBLI, Jadi [Holding] Pembiayai Proyek Sampah Energi",
  "deck": "SOFA merevisi rencana penambahan dua kegiatan usaha, holding dan pembiayaan conduit, untuk mendanai proyek sampah jadi energi di Denpasar dan Bogor, jelang RUPSLB 30 September 2026.",
  "date": "29 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "RUPSLB",
   "perubahan kegiatan usaha",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ff4f1264e_71cbd4e2f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tamu-restrukturisasi-kredit-jatuh-tempo-diundur-ke-2031",
  "category": "Aksi Korporasi",
  "title": "TAMU restrukturisasi kredit, jatuh tempo [diundur] ke 2031",
  "deck": "TAMU dan Bank Mandiri sepakat memperpanjang jatuh tempo fasilitas kredit dari Desember 2026 menjadi Desember 2031, disertai penyesuaian cicilan bulanan.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMU",
   "restrukturisasi utang",
   "Bank Mandiri",
   "emiten pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cea4a7dc27_3059ca69c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lebih-dari-85-persen-calon-manajer-kdkmp-bersedia-ditempatkan",
  "category": "UMKM",
  "title": "Lebih dari 85 Persen Calon Manajer KDKMP [Bersedia] Ditempatkan",
  "deck": "Kemenkop mencatat lebih dari 85 persen dari 28.620 calon manajer Koperasi Desa/Kelurahan Merah Putih menyatakan bersedia ditempatkan, tugas dijadwalkan mulai awal Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/lebih-dari-85-persen-calon-manajer-kdkmp-bersedia-ditempatkan.jpg",
  "imageV": "mulja6vu",
  "tags": [
   "KDKMP",
   "Koperasi Desa Merah Putih",
   "Kementerian Koperasi",
   "Penempatan Manajer"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469989-lebih-dari-85-persen-calon-manajer-kdkmp-bersedia-ditempatkan-mulai-bertugas-oktober"
 },
 {
  "slug": "toba-baru-pakai-11-9-dana-obligasi-rp175-miliar",
  "category": "Aksi Korporasi",
  "title": "TOBA baru pakai 11,9% dana [obligasi] Rp175 miliar",
  "deck": "TOBA merevisi laporan realisasi dana obligasi Tahap III 2026: baru 11,9% dari Rp172,6 miliar dana bersih terpakai, sisa Rp152 miliar tersimpan di tabungan BTN berbunga 6,2%.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "TBS Energi Utama",
   "obligasi korporasi",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e6c140238f_0cb7ce9d13.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendag-gelar-pelatihan-dagang-untuk-pejabat-afrika",
  "category": "Global",
  "title": "Kemendag Gelar Pelatihan Dagang untuk Pejabat [Afrika]",
  "deck": "Kementerian Perdagangan membuka pelatihan kerja sama Selatan-Selatan bagi 14 pejabat dari enam negara Afrika Timur, bagian dari upaya memperluas hubungan dagang dan investasi dengan kawasan itu.",
  "date": "28 September 2026",
  "image": "assets/img/kemendag-gelar-pelatihan-dagang-untuk-pejabat-afrika.jpg",
  "imageV": "mule67zb",
  "tags": [
   "Kemendag",
   "Afrika",
   "SSTC",
   "JICA"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/buka-pelatihan-sstc-2026-kemendag-dorong-penguatan-kemitraan-perdagangan-dan-investasi-indonesia-afrika",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "toba-koreksi-realisasi-dana-obligasi-sisa-rp46-4-miliar",
  "category": "Aksi Korporasi",
  "title": "TOBA [koreksi] realisasi dana obligasi, sisa Rp46,4 miliar",
  "deck": "TOBA merevisi laporan dana obligasi Rp493,96 miliar: 90,6% sudah terpakai, termasuk pelunasan penuh obligasi lama Rp400,93 miliar, sisa Rp46,39 miliar menunggu disetor ke anak usaha tambang.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "penggunaan dana",
   "TBS Energi Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e604818fb5_56982d5081.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-revisi-laporan-dana-obligasi-rp89-miliar-mengendap",
  "category": "Aksi Korporasi",
  "title": "TOBA Revisi Laporan Dana Obligasi, [Rp89 Miliar] Mengendap",
  "deck": "TOBA merevisi laporan realisasi dana obligasi Rp125 miliar. Rp24,07 miliar sudah dipakai melunasi utang, sisanya Rp89 miliar untuk anak usaha AMES masih tersimpan di tabungan.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "penggunaan dana",
   "AMES"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ad99e083a_3dbda5c41e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-perluas-program-hijau-gozero-ke-klangon-sleman",
  "category": "BUMN",
  "title": "Telkom Perluas Program Hijau [GoZero%] ke Klangon, Sleman",
  "deck": "Telkom lanjutkan program keberlanjutan GoZero% ke Bukit Klangon, Sleman, dengan konservasi Merapi, pengelolaan sampah terpadu, dan pengembangan EcoCamp Klangon bersama warga.",
  "date": "28 September 2026",
  "image": "assets/img/telkom-perluas-program-hijau-gozero-ke-klangon-sleman.jpg",
  "imageV": "mule68je",
  "tags": [
   "Telkom",
   "GoZero%",
   "Sleman",
   "Keberlanjutan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470014-gozero-goes-to-klangon-telkom-bangun-ekosistem-keberlanjutan-berbasis-konservasi-dan-pemberdayaan-masyarakat"
 },
 {
  "slug": "presiden-prabowo-minta-audit-forensik-dana-haji",
  "category": "Bisnis",
  "title": "Presiden Prabowo Minta [Audit Forensik] Dana Haji",
  "deck": "Presiden Prabowo Subianto meminta audit forensik atas tata kelola dana haji yang dikelola BPKH untuk memastikan kondisi keuangan haji yang sebenarnya.",
  "date": "28 September 2026",
  "image": "assets/img/presiden-prabowo-minta-audit-forensik-dana-haji.jpg",
  "imageV": "mule68zi",
  "tags": [
   "dana haji",
   "BPKH",
   "audit forensik",
   "Kementerian Haji"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470010-prabowo-minta-audit-forensik-dana-haji-dahnil-anzar-presiden-ingin-tahu-fakta-keuangan-haji-sebenar-benarnya"
 },
 {
  "slug": "dpr-soroti-bunga-spesial-bank-yang-ganjal-kredit-umkm",
  "category": "Perbankan",
  "title": "DPR Soroti [Bunga Spesial] Bank yang Ganjal Kredit UMKM",
  "deck": "Komisi XI DPR menyoroti praktik bunga simpanan khusus untuk nasabah besar yang membuat biaya dana bank mahal, sehingga bunga kredit UMKM sulit turun.",
  "date": "28 September 2026",
  "image": "assets/img/dpr-soroti-bunga-spesial-bank-yang-ganjal-kredit-umkm.jpg",
  "imageV": "mule69m1",
  "tags": [
   "special rate",
   "kredit UMKM",
   "Komisi XI DPR",
   "bunga bank"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469983-dpr-soroti-bunga-spesial-bank-kredit-umkm-disebut-sulit-tumbuh"
 },
 {
  "slug": "ptba-laporkan-transaksi-material-pinjaman-rp6-triliun",
  "category": "Aksi Korporasi",
  "title": "PTBA Laporkan Transaksi [Material] Pinjaman Rp6 Triliun",
  "deck": "Bukit Asam mengungkap pinjaman modal kerja gabungan Rp6 triliun dari BRI dan Bank Mandiri untuk pemanfaatan devisa hasil ekspor, setara 23,68 persen ekuitas perusahaan.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTBA",
   "Bukit Asam",
   "DHE SDA",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/379fa02362_77380d711e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enak-ganti-direksi-dan-komisaris-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "ENAK Ganti Direksi dan Komisaris Usai [RUPSLB]",
  "deck": "PT Champ Resto Indonesia Tbk (ENAK) mengubah susunan direksi dan komisaris usai RUPSLB 2 September 2026, dengan Sjariful Haq masuk sebagai direktur baru.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENAK",
   "Champ Resto Indonesia",
   "RUPSLB",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bd7ed14dc6_d0d98a6ff1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-penghapusan-saham-gocap-bukan-pemicu-ihsg-anjlok",
  "category": "Pasar Modal",
  "title": "BEI: Penghapusan Saham [Gocap] Bukan Pemicu IHSG Anjlok",
  "deck": "BEI menurunkan batas harga minimum saham dari Rp50 menjadi Rp1 dan menyebut koreksi IHSG 1,51 persen hari itu bukan akibat kebijakan tersebut.",
  "date": "28 September 2026",
  "image": "assets/img/bei-penghapusan-saham-gocap-bukan-pemicu-ihsg-anjlok.jpg",
  "imageV": "mule6a0x",
  "tags": [
   "saham gocap",
   "IHSG",
   "BEI",
   "harga saham"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/470006-batas-saham-gocap-dihapus-jadi-rp1-bei-sebut-bukan-alasan-ihsg-anjlok-151"
 },
 {
  "slug": "ppgl-jelaskan-ke-bursa-rincian-pmthmetd-dan-saham-bonus",
  "category": "Aksi Korporasi",
  "title": "PPGL Jelaskan ke Bursa Rincian [PMTHMETD] dan Saham Bonus",
  "deck": "Menjawab permintaan penjelasan BEI, PPGL merinci rencana penerbitan saham baru PMTHMETD dan pembagian saham bonus dari agio saham, termasuk jadwal RUPSLB 23 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "PMTHMETD",
   "saham bonus",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5d1409fd8a_6c49ce1e37.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-uang-setujui-wiria-chakradinata-jadi-wadirut",
  "category": "Aksi Korporasi",
  "title": "RUPSLB UANG Setujui Wiria Chakradinata Jadi [Wadirut]",
  "deck": "RUPSLB PT Pakuan Tbk menyetujui susunan direksi baru: Erick Wihardja tetap Direktur Utama, Wiria Chakradinata jadi Wakil Direktur Utama gantikan Aditya Wisnu Wardhana yang mundur.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "PT Pakuan Tbk",
   "RUPSLB",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c1adc9067c_95c18ebe0b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catatkan-486-360-saham-baru-dari-mesop-tahap-i-iii",
  "category": "Aksi Korporasi",
  "title": "PGEO [Catatkan] 486.360 Saham Baru dari MESOP Tahap I-III",
  "deck": "BEI mencatatkan 486.360 saham baru PGEO hasil pelaksanaan opsi MESOP Tahap I dan III pada 29 September 2026, menambah total saham beredar menjadi 41.945.887.584.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "MESOP",
   "ESOP",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dbc5446a6f_2e1ba1b26b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sema-raih-kontrak-panel-listrik-data-center-cgk5-cgk7",
  "category": "Aksi Korporasi",
  "title": "SEMA Raih Kontrak Panel Listrik [Data Center] CGK5-CGK7",
  "deck": "Semacom Integrated menandatangani kontrak pengadaan panel listrik untuk proyek data center CGK5 dan CGK7 pada 25 September 2026, memperluas bisnis ke sektor infrastruktur digital.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SEMA",
   "kontrak",
   "data center",
   "panel listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2e2296e913_430ed012e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djpu-debt-switch-tukar-vr0043-rp21-1-t-ke-3-sukuk",
  "category": "Aksi Korporasi",
  "title": "DJPU [Debt Switch] Tukar VR0043 Rp21,1 T ke 3 Sukuk",
  "deck": "BEI mencatatkan debt switch Rp21,1 triliun. Obligasi VR0043 yang jatuh tempo hari ini ditukar ke tiga seri sukuk negara berjangka panjang: PBS028, PBS033, dan PBS015.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DJPU",
   "obligasi negara",
   "sukuk negara",
   "debt switch"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1bb4797fed_79812a5982.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-penjamin-lunasi-pokok-obligasi-rp722-miliar",
  "category": "Aksi Korporasi",
  "title": "WSKT: Penjamin [Lunasi] Pokok Obligasi Rp722 Miliar",
  "deck": "PII dan Kementerian Keuangan selaku penjamin melunasi pokok Obligasi III Waskita Seri A Rp722 miliar setelah Waskita gagal bayar; WSKT03A resmi berhenti diperdagangkan di BEI mulai 29 September 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "obligasi",
   "gagal bayar",
   "penjaminan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fc5fa12493_ff24770695.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catatkan-1-357-876-saham-baru-dari-mesop-tahap-i-iii",
  "category": "Aksi Korporasi",
  "title": "PGEO Catatkan [1.357.876] Saham Baru dari MESOP Tahap I-III",
  "deck": "Bursa mencatatkan 1.357.876 saham baru PGEO dari pelaksanaan opsi MESOP Tahap I dan III per 28 September 2026, menambah total saham tercatat menjadi 41.945.401.224 lembar.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "MESOP",
   "ESOP",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f3b5827e4d_99cb6a6138.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djpu-catatkan-7-sukuk-baru-menangkan-rp11-triliun-dari-lelang",
  "category": "Aksi Korporasi",
  "title": "DJPU Catatkan 7 Sukuk Baru, Menangkan [Rp11 Triliun] dari Lelang",
  "deck": "Bursa mencatatkan tujuh seri sukuk negara mulai 25 September 2026, setelah pemerintah memenangkan Rp11 triliun dari total penawaran Rp26,9 triliun pada lelang 22 September 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DJPU",
   "sukuk negara",
   "lelang SBSN",
   "obligasi pemerintah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ca91145bf3_9cff277b35.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-catatkan-tambahan-167-miliar-saham-dari-rights-issue",
  "category": "Aksi Korporasi",
  "title": "FORU Catatkan Tambahan 167 Miliar Saham dari [Rights Issue]",
  "deck": "BEI mencatat 167,08 miliar saham baru FORU hasil pelaksanaan HMETD, sehingga total saham beredar melonjak jadi 167,54 miliar per 29 September 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "rights issue",
   "HMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/810ee2df0d_69805781bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-minta-rs-tak-bedakan-pasien-bpjs",
  "category": "Bisnis",
  "title": "Presiden Prabowo Minta RS Tak [Bedakan] Pasien BPJS",
  "deck": "Presiden Prabowo instruksikan RS samakan pelayanan pasien BPJS dan umum, serta setujui pencairan dana Rp20 triliun untuk BPJS Kesehatan tahun ini.",
  "date": "28 September 2026",
  "image": "assets/img/presiden-prabowo-minta-rs-tak-bedakan-pasien-bpjs.jpg",
  "imageV": "mule6agf",
  "tags": [
   "BPJS Kesehatan",
   "Rumah Sakit",
   "Presiden Prabowo",
   "Kesehatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469978-prabowo-minta-rs-tak-bedakan-pasien-bpjs-dana-rp20-triliun-dicairkan-tahun-ini"
 },
 {
  "slug": "ketr-imbs-jadi-pengendali-baru-lewat-tender-offer",
  "category": "Aksi Korporasi",
  "title": "KETR: IMBS Jadi Pengendali Baru Lewat [Tender Offer]",
  "deck": "PT Inti Mas Bangun Sejahtera menguasai 994,4 juta saham atau 35 persen Ketrosden Triasmitra lewat penawaran tender sukarela, menggeser BBN sebagai pengendali.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "pengendali",
   "akuisisi",
   "tender offer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/549d9cdf8e_3021117498.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-fsmn-lepas-994-juta-saham-lewat-divestasi",
  "category": "Aksi Korporasi",
  "title": "KETR: FSMN Lepas 994 Juta Saham lewat [Divestasi]",
  "deck": "PT Fajar Sejahtera Mandiri Nusantara menjual 994,37 juta saham KETR senilai sekitar Rp520 miliar pada 28 September 2026, namun hak suara pelapor tetap nol persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "Ketrosden Triasmitra",
   "kepemilikan saham",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-8908-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-fsmn-lepas-994-juta-saham-hak-suara-ke-18-13",
  "category": "Aksi Korporasi",
  "title": "KETR: FSMN Lepas 994 Juta Saham, Hak Suara ke [18,13%]",
  "deck": "FSMN melepas 994.372.000 saham KETR seharga Rp523 per lembar untuk divestasi, memangkas hak suaranya dari 53,13 persen menjadi 18,13 persen dan mengakhiri posisi sebagai pemegang saham mayoritas.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "divestasi",
   "pemegang saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-7406-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smil-dana-obligasi-rp294-miliar-100-terealisasi-untuk-forklift",
  "category": "Aksi Korporasi",
  "title": "SMIL: dana obligasi Rp294 miliar [100%] terealisasi untuk forklift",
  "deck": "PT Sarana Mitra Luas Tbk melaporkan koreksi realisasi dana hasil Obligasi I 2024 senilai Rp294 miliar, seluruhnya terpakai untuk forklift listrik dan pelunasan leasing.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMIL",
   "Obligasi",
   "Realisasi Dana",
   "Forklift"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9b987a8e8b_7b246d57b3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-ambil-alih-72-91-saham-hmbc-jadi-perusahaan-holding",
  "category": "Aksi Korporasi",
  "title": "VISI Ambil Alih 72,91% Saham HMBC, Jadi Perusahaan [Holding]",
  "deck": "Satu Visi Putra bakal mengambil alih 72,91% saham RS Hasna Medika Bakti Cirebon dan mengubah bisnis intinya jadi perusahaan holding, dengan kendali beralih ke PT Harmoni Semesta Investama.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "akuisisi",
   "HMBC",
   "perubahan bisnis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cdb1aeadca_0d2933dd75.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-direksi-rudy-tambah-4-4-juta-saham-lewat-pasar",
  "category": "Aksi Korporasi",
  "title": "ASII: Direksi Rudy [tambah] 4,4 juta saham lewat pasar",
  "deck": "Direktur Astra International, Rudy, menambah kepemilikan sahamnya 78,57 persen lewat tiga transaksi pembelian tidak langsung pada 24-28 September 2026, senilai sekitar Rp20,81 miliar.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "Astra International",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-0056-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mine-jadwalkan-rupslb-pada-4-november-2026",
  "category": "Aksi Korporasi",
  "title": "MINE Jadwalkan [RUPSLB] pada 4 November 2026",
  "deck": "PT Sinar Terang Mandiri Tbk mengumumkan rencana RUPSLB pada 4 November 2026, dengan pemegang saham per 12 Oktober 2026 berhak hadir.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINE",
   "RUPSLB",
   "Sinar Terang Mandiri",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fbbf8275cb_ad7f6049fb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-jadwalkan-rups-independen-pmthmetd-30-september",
  "category": "Aksi Korporasi",
  "title": "VISI Jadwalkan RUPS Independen [PMTHMETD] 30 September",
  "deck": "VISI menjadwalkan RUPS Independen pada 30 September 2026 untuk menyetujui penerbitan hingga 307,5 juta saham baru tanpa hak memesan efek terlebih dahulu, maksimal 10 persen modal disetor.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "PMTHMETD",
   "RUPS Independen",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/df8b9dffa6_c070aea593.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "futr-benarkan-ekspansi-ke-infrastruktur-air-jajaki-akuisisi",
  "category": "Aksi Korporasi",
  "title": "FUTR Benarkan Ekspansi ke Infrastruktur Air, Jajaki [Akuisisi]",
  "deck": "FUTR membenarkan rencana ekspansi ke infrastruktur pengolahan air minum dan mengungkap sedang menjajaki peluang akuisisi di sektor energi terbarukan, belum ada perjanjian mengikat.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUTR",
   "keterbukaan informasi",
   "ekspansi usaha",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c475591025_a4aa518369.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ijee-peroleh-fasilitas-us-60-juta-dari-edc-untuk-beli-alat-nokia",
  "category": "Aksi Korporasi",
  "title": "IJEE Peroleh Fasilitas [US$60 Juta] dari EDC untuk Beli Alat Nokia",
  "deck": "PT Integrasi Jaringan Ekosistem (IJEE) mengantongi fasilitas pinjaman hingga US$60 juta dari lembaga kredit ekspor Kanada, EDC, untuk membiayai pembelian perangkat dari Nokia OYJ.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "pinjaman",
   "EDC",
   "Nokia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ad22e392e4_abc6ab4c36.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aspi-catat-rugi-melebar-162-jelang-public-expose-rugi",
  "category": "Aksi Korporasi",
  "title": "ASPI Catat Rugi Melebar 162% Jelang Public Expose [rugi]",
  "deck": "Materi public expose ASPI menunjukkan rugi sebelum pajak melebar jadi Rp1,95 miliar pada semester I 2026, sementara pendapatan turun 16 persen dan ekuitas menyusut 3 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASPI",
   "public expose",
   "properti",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1fa3e2daf4_f10c580b64.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-usulkan-biaya-haji-2027-dibagi-52-48",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo Usulkan Biaya Haji 2027 Dibagi [52:48]",
  "deck": "Presiden Prabowo mengusulkan porsi Bipih dan nilai manfaat 52:48 untuk BPIH 2027 agar biaya yang ditanggung jamaah tidak terlalu berat.",
  "date": "28 September 2026",
  "image": "assets/img/presiden-prabowo-usulkan-biaya-haji-2027-dibagi-52-48.jpg",
  "imageV": "mul8m5jb",
  "tags": [
   "biaya haji 2027",
   "bpih 2027",
   "bipih",
   "nilai manfaat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469955-prabowo-usulkan-biaya-haji-2027-dibagi-5248-ini-alasannya"
 },
 {
  "slug": "amor-rencanakan-refloat-5-08-juta-saham-untuk-esop-karyawan",
  "category": "Aksi Korporasi",
  "title": "AMOR Rencanakan Refloat 5,08 Juta Saham untuk [ESOP] Karyawan",
  "deck": "Ashmore Asset Management Indonesia (AMOR) berencana mengalihkan hingga 5.084.827 saham treasuri ke karyawan lewat program ESOP, menunggu persetujuan RUPST 4 November 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "ESOP",
   "saham treasuri",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bb8bbc24c2_d5202e49ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msky-konfirmasi-permohonan-pkpu-rp73-4-miliar-dari-ascot-group",
  "category": "Aksi Korporasi",
  "title": "MSKY Konfirmasi Permohonan [PKPU] Rp73,4 Miliar dari Ascot Group",
  "deck": "MNC Sky Vision membenarkan ada permohonan penundaan kewajiban pembayaran utang dari Ascot Group Holdings Ltd senilai Rp73,4 miliar, sidang pertama digelar 1 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSKY",
   "PKPU",
   "Ascot Group Holdings",
   "MNC Sky Vision"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/512caded6d_b9ec55f724.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raam-direksi-tambah-saham-294-600-lembar-rp51-juta",
  "category": "Aksi Korporasi",
  "title": "RAAM: Direksi [Tambah] Saham 294.600 Lembar, Rp51 Juta",
  "deck": "Ram Jethmal Punjabi menambah kepemilikan saham Tripar Multivision Plus lewat 10 transaksi kecil pada 25 September 2026, namun porsinya nyaris tak mengubah hak suaranya.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAAM",
   "Tripar Multivision",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-1712-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-tambah-1-51-miliar-saham-repo-suara-ke-28-87",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah [1,51 Miliar] Saham Repo, Suara ke 28,87%",
  "deck": "Samuel Sekuritas Indonesia menambah 1,51 miliar saham NSSS lewat mekanisme repurchase agreement, mendorong hak suaranya dari 22,51 persen menjadi 28,87 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "repo saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-5445-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-direksi-lepas-saham-lagi-hak-suara-turun-ke-5-00",
  "category": "Aksi Korporasi",
  "title": "BKSL: Direksi Lepas Saham Lagi, Hak Suara Turun ke [5,00%]",
  "deck": "Direksi Sentul City lewat rekening Samuel Sekuritas menjual bersih 353,78 juta saham lewat skema repo pada 28 September 2026, hak suara turun dari 5,21% menjadi 5,00%.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-3386-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-jadwalkan-dividen-interim-rp430-per-saham",
  "category": "Aksi Korporasi",
  "title": "UNTR Jadwalkan [Dividen] Interim Rp430 per Saham",
  "deck": "United Tractors (UNTR) menjadwalkan dividen interim Rp430 per saham, total hingga Rp1,48 triliun, dibayar 26 Oktober 2026 kepada pemegang saham per 8 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "dividen interim",
   "United Tractors",
   "alat berat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/608f731b1f_4be4d5de62.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-ambruk-1-51-persen-554-saham-merah",
  "category": "Pasar Modal",
  "title": "IHSG [Ambruk] 1,51 Persen, 554 Saham Merah",
  "deck": "IHSG turun 94 poin ke 6.147,8 pada Senin (28/9), dengan 554 saham melemah dan transaksi Rp12,49 triliun, sementara hanya sektor transportasi dan energi bertahan hijau.",
  "date": "28 September 2026",
  "image": "assets/img/ihsg-ambruk-1-51-persen-554-saham-merah.jpg",
  "imageV": "mul8m5z4",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "saham turun",
   "LQ45"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469941-ihsg-ambruk-151-persen-ke-61478-554-saham-berguguran"
 },
 {
  "slug": "pertamina-hulu-energi-bidik-asri-basin-jadi-hub-karbon-di-korea",
  "category": "Energi",
  "title": "Pertamina Hulu Energi Bidik Asri Basin Jadi Hub [Karbon] di Korea",
  "deck": "PHE memaparkan progres proyek penangkapan dan penyimpanan karbon di forum KCCUS Seoul, termasuk rencana Asri Basin bersama ExxonMobil sebagai hub penyimpanan karbon regional pertama.",
  "date": "28 September 2026",
  "image": "assets/img/pertamina-hulu-energi-bidik-asri-basin-jadi-hub-karbon-di-korea.jpg",
  "imageV": "mul8m6f3",
  "tags": [
   "Pertamina",
   "Energi",
   "Korea",
   "Karbon"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469957-perkuat-kemitraan-strategis-di-forum-kccus-korea-pertamina-hulu-energi-dorong-asri-basin-sebagai-hub-penyimpanan-karbon-regional"
 },
 {
  "slug": "dada-bagikan-dividen-tunai-rp0-27-per-saham",
  "category": "Aksi Korporasi",
  "title": "DADA Bagikan [Dividen] Tunai Rp0,27 per Saham",
  "deck": "PT Diamond Citra Propertindo Tbk akan membagikan dividen tunai Rp2,006 miliar dari laba 2025, dibayarkan paling lambat 28 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DADA",
   "dividen tunai",
   "pasar modal",
   "emiten properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ed554c12cb_caa4fa0007.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-balas-bursa-ungkap-proyek-rp1-25-t-dari-grup-danantara",
  "category": "Aksi Korporasi",
  "title": "INPS Balas Bursa, Ungkap Proyek Rp1,25 T dari Grup [Danantara]",
  "deck": "INPS merinci rencana suntikan modal Rp125 miliar dari pengendali GIGP dan akuisisi perusahaan otomotif bermodal proyek Rp1,25 triliun untuk keluar dari status ekuitas negatif.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "PMTHMETD",
   "akuisisi",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c6947e4615_86adcef027.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-tambah-100-8-juta-saham-lewat-skema-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi [tambah] 100,8 juta saham lewat skema repo",
  "deck": "Direksi FILM menambah kepemilikan saham lewat pembelian 100,8 juta lembar seharga Rp680 lewat skema repo, mengerek hak suaranya dari 8,71 persen menjadi 9,64 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-8574-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fifa-salurkan-dana-obligasi-rp2-49-triliun-untuk-pembiayaan-kredit",
  "category": "Aksi Korporasi",
  "title": "FIFA salurkan dana obligasi Rp2,49 triliun untuk [pembiayaan] kredit",
  "deck": "FIFA melaporkan realisasi penggunaan dana obligasi berkelanjutan VII tahap III senilai Rp2,5 triliun, seluruhnya sudah disalurkan untuk pembiayaan kredit tanpa sisa dana.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIFA",
   "obligasi",
   "penggunaan dana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/93c9fbf420_2132f95ee0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fifa-laporkan-realisasi-dana-obligasi-tahap-i-rp187-5-miliar",
  "category": "Aksi Korporasi",
  "title": "FIFA laporkan realisasi dana obligasi [Tahap I] Rp187,5 miliar",
  "deck": "Perseroan melaporkan seluruh dana bersih Rp187,53 miliar dari Obligasi Keberlanjutan Orange I Tahap I sudah tersalur untuk modal kerja pembiayaan, dengan sisa Rp1 miliar ditempatkan di giro bank.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIFA",
   "obligasi",
   "penggunaan dana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9dbdf4be2c_885416a85f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dlta-tunjuk-christian-linardo-sebagai-kepala-audit-internal-baru",
  "category": "Aksi Korporasi",
  "title": "DLTA Tunjuk Christian Linardo sebagai [Kepala] Audit Internal Baru",
  "deck": "Delta Djakarta Tbk mengangkat Christian Linardo sebagai Kepala Unit Audit Internal menggantikan Ifvan Julianus yang mengundurkan diri, efektif 28 September 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DLTA",
   "Delta Djakarta",
   "audit internal",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5403ba9e28_835ee63a71.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-mata-uang-lokal-ri-naik-259-di-semester-i",
  "category": "Moneter",
  "title": "Transaksi Mata Uang Lokal RI Naik [259%] di Semester I",
  "deck": "Nilai transaksi dagang RI dengan tujuh negara mitra yang memakai mata uang lokal, bukan dolar AS, tembus US$42,07 miliar pada semester I 2026, kata Bank Indonesia.",
  "date": "28 September 2026",
  "image": "assets/img/transaksi-mata-uang-lokal-ri-naik-259-di-semester-i.jpg",
  "imageV": "mul2nk8i",
  "tags": [
   "Bank Indonesia",
   "Local Currency Transaction",
   "Kebanksentralan",
   "Nilai Tukar"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2820626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "ketr-jadwalkan-rupslb-pada-12-november-2026",
  "category": "Aksi Korporasi",
  "title": "KETR Jadwalkan [RUPSLB] pada 12 November 2026",
  "deck": "Ketrosden Triasmitra menjadwalkan RUPSLB pada 12 November 2026, dengan tanggal pencatatan pemegang saham 12 Oktober dan batas usulan agenda 6 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "RUPSLB",
   "Ketrosden Triasmitra",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/18b46bd0b0_88144dd5e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "niro-catat-rugi-melebar-jadi-rp237-6-miliar-di-semester-i",
  "category": "Aksi Korporasi",
  "title": "NIRO Catat Rugi [Melebar] Jadi Rp237,6 Miliar di Semester I",
  "deck": "Laporan keuangan interim per 30 Juni 2026 menunjukkan rugi bersih NIRO melebar ke Rp237,6 miliar, ekuitas turun, dan utang bank jatuh tempo setahun ke depan naik hampir tiga kali lipat.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NIRO",
   "properti",
   "laporan keuangan interim",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260928165640-64374-0/FinancialStatement-2026-II-NIRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptmr-akui-langgar-aturan-transaksi-afiliasi-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "PTMR Akui [Langgar] Aturan Transaksi Afiliasi ke Bursa",
  "deck": "PTMR mengakui pelanggaran aturan transaksi afiliasi dan menyebut rencana akuisisi oleh Deep Source Pte. Ltd. masih tertahan menunggu hasil pemeriksaan OJK.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTMR",
   "suspensi saham",
   "transaksi afiliasi",
   "Deep Source"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/76dab57f16_d580bf6c80.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-enrg-disesuaikan-usai-rights-issue-rp4-12-t",
  "category": "Aksi Korporasi",
  "title": "DR: Waran ENRG Disesuaikan usai Rights Issue [Rp4,12 T]",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur ENRG menyusul rights issue ENRG senilai Rp4,12 triliun yang mendilusi saham hingga 33,33 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "ENRG",
   "rights issue",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dacc5ba9de_a6c017c08c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waran-terstruktur-enrg-disesuaikan-usai-rights-issue-efektif-5-okt",
  "category": "Aksi Korporasi",
  "title": "Waran Terstruktur ENRG [Disesuaikan] Usai Rights Issue, Efektif 5 Okt",
  "deck": "KGI Sekuritas menyesuaikan harga pelaksanaan dan rasio dua seri waran terstruktur atas saham ENRG menyusul rights issue emiten itu, berlaku efektif 5 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "HD",
   "waran terstruktur",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cf3432d5a1_f0842ce699.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gems-cetak-laba-bersih-us-224-juta-naik-47-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "GEMS Cetak Laba Bersih US$224 Juta, Naik [47%] di Semester I 2026",
  "deck": "Golden Energy Mines membukukan laba bersih US$224,3 juta pada semester I 2026, naik 47 persen, dengan opini audit wajar tanpa modifikasian.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMS",
   "Golden Energy Mines",
   "laporan keuangan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260928164959-64429-0/FinancialStatement-2026-II-GEMS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-dada-sahkan-dividen-rp2-miliar-kuorum-cuma-22-79",
  "category": "Aksi Korporasi",
  "title": "RUPS DADA Sahkan [Dividen] Rp2 Miliar, Kuorum Cuma 22,79%",
  "deck": "RUPS Tahunan Ketiga DADA akhirnya kuorum berkat penetapan khusus OJK, menyetujui dividen tunai Rp2 miliar dan laporan tahunan 2025 meski dihadiri hanya 22,79% pemegang saham.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DADA",
   "RUPS",
   "dividen",
   "laporan tahunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0562cb48d8_5c179260a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjbr-siap-lunasi-obligasi-rp74-miliar-per-18-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BJBR Siap Lunasi [Obligasi] Rp74 Miliar per 18 Oktober 2026",
  "deck": "Bank bjb akan melunasi pokok obligasi seri C senilai Rp74 miliar dan sudah menyiapkan dana di penempatan pada Bank Indonesia.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBR",
   "obligasi",
   "pelunasan obligasi",
   "bank bjb"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/371b49de59_581f8f5478.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-rupslb-20-oktober-ganti-nama-pengendali-baru-rights-issue",
  "category": "Aksi Korporasi",
  "title": "LAPD RUPSLB 20 Oktober: Ganti Nama, [Pengendali Baru], Rights Issue",
  "deck": "LAPD memanggil RUPSLB 20 Oktober 2026 untuk menyetujui rights issue hingga 2 miliar saham baru, pengendali baru PT JSI Sinergi Mas, dan ganti nama jadi PT JSI Sinergi Internasional Tbk.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "RUPSLB",
   "rights issue",
   "pergantian pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/36bfd5fdfe_c159f78c0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oasa-direksi-lepas-11-4-juta-saham-hak-suara-ke-31-83",
  "category": "Aksi Korporasi",
  "title": "[OASA] Direksi Lepas 11,4 Juta Saham, Hak Suara ke 31,83%",
  "deck": "Direktur OASA, Ir. Gafur Sulistyo Umar, menjual 11,4 juta saham tidak langsung pada 25 September 2026 seharga Rp245 per saham untuk realokasi investasi, hak suaranya turun ke 31,83%.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OASA",
   "Maharaksa Biru Energi",
   "Kepemilikan Saham",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-0261-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupsu-sukuk-tahap-ii-2021-28-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [RUPSU] Sukuk Tahap II 2021, 28 Oktober",
  "deck": "WIKA akan menggelar rapat pemegang Sukuk Mudharabah Berkelanjutan I Tahap II 2021 pada 28 Oktober 2026, menyusul rentetan rapat serupa untuk surat utang lain pasca status gagal bayar.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/de3926c5b0_3cdf35c958.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupo-obligasi-tahap-ii-2021-28-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [RUPO] Obligasi Tahap II 2021, 28 Oktober",
  "deck": "WIKA akan menggelar RUPO untuk Obligasi Berkelanjutan I Tahap II 2021 pada 28 Oktober 2026, tanpa agenda yang diungkap dalam pemberitahuan awal ini.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "RUPO",
   "wali amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c6ba350c96_0e40b10d4b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupo-obligasi-tahap-i-2020-27-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan RUPO Obligasi Tahap I 2020, [27 Oktober]",
  "deck": "WIKA mengumumkan rencana RUPO untuk Obligasi Berkelanjutan I Tahap I Tahun 2020 pada 27 Oktober 2026, dengan panggilan resmi di media nasional pada 13 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "RUPO",
   "obligasi",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dbf3abec84_75691906e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-kontrak-anjlok-65-butuh-dukungan-restrukturisasi",
  "category": "Aksi Korporasi",
  "title": "WIKA: Kontrak Anjlok 65%, Butuh Dukungan [Restrukturisasi]",
  "deck": "WIKA memaparkan kontrak baru anjlok 65,47% sejak 2018 dan program penyehatan lewat restrukturisasi utang serta divestasi aset non-inti, menjelang public expose tahunan 1 Oktober 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "konstruksi BUMN",
   "restrukturisasi utang",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3f7fec1b8e_6252c88bae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-morgan-stanley-lepas-450-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "GOTO: Morgan Stanley [Lepas] 450 Juta Saham via Repo",
  "deck": "Morgan Stanley melaporkan penjualan tidak langsung 450 juta saham GOTO lewat perjanjian repurchase seharga Rp27 per lembar, menggeser hak suaranya jadi 6,98 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "Morgan Stanley",
   "kepemilikan saham",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-8273-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-revisi-aturan-papan-pemantauan-khusus-92-saham-keluar",
  "category": "Pasar Modal",
  "title": "BEI Revisi Aturan Papan Pemantauan Khusus, 92 Saham [Keluar]",
  "deck": "BEI merevisi aturan Papan Pemantauan Khusus usai evaluasi full call auction; 92 saham keluar dan 42 saham tetap tertahan mulai hari ini.",
  "date": "28 September 2026",
  "image": "assets/img/bei-revisi-aturan-papan-pemantauan-khusus-92-saham-keluar.jpg",
  "imageV": "mul2nl0w",
  "tags": [
   "BEI",
   "Papan Pemantauan Khusus",
   "Full Call Auction",
   "Pasar Modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469916-bei-ubah-aturan-papan-pemantauan-khusus-92-saham-keluar-mulai-hari-ini"
 },
 {
  "slug": "smcb-ganti-komisaris-utama-lewat-rupslb",
  "category": "Aksi Korporasi",
  "title": "SMCB Ganti [Komisaris Utama] Lewat RUPSLB",
  "deck": "RUPSLB SMCB mengangkat Daniel Tumpal S. Simanjuntak sebagai Komisaris Utama baru, menyetujui revisi anggaran dasar, dan mendelegasikan persetujuan rencana jangka panjang ke Dewan Komisaris.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "RUPSLB",
   "Komisaris Utama",
   "Solusi Bangun Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b10593a9cb_1142144ec8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tebe-catat-laba-bersih-s1-2026-turun-27-6-jadi-rp20-1-m",
  "category": "Aksi Korporasi",
  "title": "TEBE Catat Laba Bersih S1 2026 Turun [27,6%] jadi Rp20,1 M",
  "deck": "Materi public expose TEBE ungkap laba bersih semester I 2026 turun 27,6% jadi Rp20,1 miliar, namun laba Juli-Agustus melonjak dan ekspansi trading batubara mulai jalan.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEBE",
   "kinerja keuangan",
   "public expose",
   "ekspansi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/468e1ad34b_8986753afa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-gelar-rupslb-ubah-nama-perusahaan-dan-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "SMMT Gelar RUPSLB, [Ubah] Nama Perusahaan dan Susunan Direksi",
  "deck": "Golden Eagle Energy (SMMT) memanggil RUPSLB pada 20 Oktober 2026 untuk membahas perubahan nama perusahaan dalam anggaran dasar serta pergantian susunan Direksi dan Dewan Komisaris.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "RUPSLB",
   "Golden Eagle Energy",
   "Perubahan Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7c593b1da9_5c216d7ee7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-right-issue-13-3-miliar-saham-dijamin-penuh-pembeli-siaga",
  "category": "Aksi Korporasi",
  "title": "ENRG Right Issue 13,3 Miliar Saham, [Dijamin] Penuh Pembeli Siaga",
  "deck": "Energi Mega Persada menerbitkan 13,28 miliar saham baru lewat rights issue senilai Rp4,12 triliun. BKI dan BCI, dua entitas Bakrie, menjamin membeli seluruh sisa saham yang tak terserap.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "rights issue",
   "HMETD",
   "Bakrie Group"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1d71ca37ab_f6c3809f16.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-tambah-360-000-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [tambah] 360.000 saham",
  "deck": "Edwin Soeryadjaya membeli 360.000 saham SRTG lewat dua transaksi tidak langsung pada 24 dan 25 September 2026, menggeser hak suaranya tipis ke 35,9587 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-9236-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-gagal-bayar-kupon-obligasi-bei-lanjutkan-suspensi-saham",
  "category": "Aksi Korporasi",
  "title": "WSBP [Gagal Bayar] Kupon Obligasi, BEI Lanjutkan Suspensi Saham",
  "deck": "BEI melanjutkan penghentian sementara perdagangan saham WSBP di seluruh pasar setelah perusahaan menunda pembayaran bunga ke-8 dua obligasinya yang jatuh tempo 25 September 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "obligasi",
   "gagal bayar",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3572c29486_a3b6f0ba4c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rdtx-ajukan-stock-split-rasio-1-20-ke-rupslb-november",
  "category": "Aksi Korporasi",
  "title": "RDTX Ajukan [Stock Split] Rasio 1:20 ke RUPSLB November",
  "deck": "Roda Vivatex akan meminta restu RUPSLB pada 4 November 2026 untuk memecah saham dengan rasio 1:20, menambah jumlah saham beredar dari 268,8 juta menjadi 5,376 miliar lembar.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RDTX",
   "stock split",
   "RUPSLB",
   "Roda Vivatex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2c4e6bb9e5_11d7b2b255.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "marketplace-pungut-pph-pedagang-online-mulai-1-november",
  "category": "UMKM",
  "title": "Marketplace Pungut PPh Pedagang Online Mulai [1 November]",
  "deck": "Ditjen Pajak akan mulai memungut PPh 0,5 persen dari pedagang online lewat Tokopedia, Shopee, Lazada, dan Blibli pada 1 November 2026, mundur dari jadwal semula.",
  "date": "28 September 2026",
  "image": "assets/img/marketplace-pungut-pph-pedagang-online-mulai-1-november.jpg",
  "imageV": "mukyy3u1",
  "tags": [
   "pajak marketplace",
   "pph pedagang online",
   "pph 22",
   "djp"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469895-mulai-1-november-2026-marketplace-pungut-pph-05-persen-pedagang-online"
 },
 {
  "slug": "brms-direktur-adika-bakrie-tambah-372-400-saham-rp670",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direktur Adika Bakrie [Tambah] 372.400 Saham Rp670",
  "deck": "Direktur BRMS Adika Aryasthana Bakrie membeli tambahan 372.400 saham perusahaan pada 25 September 2026, menyusul pembelian serupa pekan lalu.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "Bumi Resources Minerals",
   "kepemilikan saham direksi",
   "Adika Bakrie"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-7738-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-fitch-pangkas-peringkat-ke-rd-usai-gagal-bayar-sukuk",
  "category": "Aksi Korporasi",
  "title": "POST: Fitch Pangkas Peringkat ke [RD] usai Gagal Bayar Sukuk",
  "deck": "Fitch menurunkan peringkat nasional POST menjadi RD(idn) setelah gagal membayar cicilan imbalan ijarah sukuk tahap kedua yang jatuh tempo 28 Agustus 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Fitch Ratings",
   "gagal bayar",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/415cf2c190_ff3c3908b9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-tunda-bayar-bunga-obligasi-rp11-75-miliar-gagal-bayar",
  "category": "Aksi Korporasi",
  "title": "POST Tunda Bayar Bunga Obligasi Rp11,75 Miliar [Gagal Bayar]",
  "deck": "Pos Indonesia meminta penundaan pembayaran bunga Obligasi I 2022 Seri B ke-15 senilai Rp11,75 miliar yang jatuh tempo 25 September 2026 karena kas belum mencukupi.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "gagal bayar",
   "obligasi",
   "Pos Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/48e0c5ff29_df54cbc755.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rsch-ganti-kepala-audit-internal-mega-gantikan-catur-asih",
  "category": "Aksi Korporasi",
  "title": "RSCH Ganti [Kepala Audit Internal], Mega Gantikan Catur Asih",
  "deck": "PT Charlie Hospital Semarang Tbk mengangkat Mega Choirun Nisa sebagai Kepala Unit Audit Internal baru, menggantikan Catur Asih Puspitasari yang mengundurkan diri, efektif 28 September 2026.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RSCH",
   "audit internal",
   "tata kelola perusahaan",
   "Charlie Hospital Semarang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cb1c7f3d19_766d4edc9a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bali-kharisma-cipta-tambah-5-1-juta-saham",
  "category": "Aksi Korporasi",
  "title": "BALI: Kharisma Cipta [Tambah] 5,1 Juta Saham",
  "deck": "PT Kharisma Cipta Towerindo menambah kepemilikan di BALI sebanyak 5,1 juta saham senilai sekitar Rp7,24 miliar, hak suara naik tipis jadi 59,95 persen.",
  "date": "28 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BALI",
   "Bali Towerindo Sentra",
   "Kepemilikan Saham",
   "Kharisma Cipta Towerindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-28092026-3602-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 }
];
