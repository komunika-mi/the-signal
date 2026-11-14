// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "utang-bi-pemerintah-era-krisis-1998-lunas",
  "category": "Moneter",
  "title": "Utang BI-Pemerintah Era Krisis 1998 [Lunas]",
  "deck": "Obligasi BI terkait dukungan likuiditas krisis 1997-1998 resmi lunas Agustus 2026, seiring BI dan pemerintah menyiapkan skema debt switching untuk surat utang negara.",
  "date": "14 November 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "Bank Indonesia",
   "Kementerian Keuangan",
   "Obligasi Negara",
   "Debt Switching"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2825026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "test-shm3-potensi-delisting-suspensi-saham-sudah-18-bulan",
  "category": "Aksi Korporasi",
  "title": "TEST-SHM3 [Potensi Delisting]: Suspensi Saham Sudah 18 Bulan",
  "deck": "BEI membuka opsi delisting saham TEST-SHM3 setelah suspensi berkepanjangan; masa suspensi disebut mencapai 6 bulan pada 14 November 2026.",
  "date": "14 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEST-SHM3",
   "delisting",
   "suspensi saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261114_TEST-SHM3_B009_ba9f1547-401f-41bd-bc54-c94f787213c4-20261114153723.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bni-ajarkan-literasi-keuangan-ke-siswa-sekolah-rakyat",
  "category": "Perbankan",
  "title": "BNI Ajarkan [Literasi Keuangan] ke Siswa Sekolah Rakyat",
  "deck": "BNI mengenalkan pengelolaan uang, kebiasaan menabung, dan produk perbankan kepada siswa Sekolah Rakyat lewat pilar Cerdas Belajar.",
  "date": "14 November 2026",
  "image": "assets/img/bni-ajarkan-literasi-keuangan-ke-siswa-sekolah-rakyat.jpg",
  "imageV": "mwg5ri2k",
  "tags": [
   "literasi keuangan",
   "Sekolah Rakyat",
   "BNI",
   "edukasi keuangan anak"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478327-bni-perkuat-literasi-keuangan-siswa-sekolah-rakyat-sejak-dini"
 },
 {
  "slug": "laba-bersih-bank-bjb-tumbuh-37-3-per-september-2026",
  "category": "Perbankan",
  "title": "Laba Bersih bank bjb [Tumbuh] 37,3% per September 2026",
  "deck": "bank bjb mencatat laba bersih Rp1,1 triliun hingga September 2026, naik 37,3 persen dibanding tahun sebelumnya, didorong efisiensi biaya dan kredit yang disalurkan lebih selektif.",
  "date": "14 November 2026",
  "image": "assets/img/laba-bersih-bank-bjb-tumbuh-37-3-per-september-2026.jpg",
  "imageV": "mwg5rigi",
  "tags": [
   "bank bjb",
   "laba bersih",
   "perbankan daerah",
   "kredit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478313-laba-bersih-bank-bjb-tumbuh-373-hingga-september-2026"
 },
 {
  "slug": "asean-sepakati-kerangka-ekonomi-digital-kawasan",
  "category": "Global",
  "title": "ASEAN [Sepakati] Kerangka Ekonomi Digital Kawasan",
  "deck": "Sepuluh negara ASEAN menandatangani kerangka kesepakatan ekonomi digital DEFA di Manila, menuntaskan negosiasi tiga tahun yang dimulai saat Indonesia menjadi Ketua ASEAN.",
  "date": "14 November 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "ASEAN",
   "DEFA",
   "ekonomi digital",
   "UMKM"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7221/indonesia-dorong-penguatan-transformasi-digital-kawasan-inklusif-melalui-implementasi-asean-defa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bank-bjb-pasarkan-sukuk-tabungan-st017-mulai-rp1-juta",
  "category": "Pasar Modal",
  "title": "bank bjb Pasarkan [Sukuk Tabungan] ST017, Mulai Rp1 Juta",
  "deck": "bank bjb menjadi agen penjual Sukuk Tabungan ST017, surat utang syariah pemerintah dengan dua pilihan tenor dan imbal hasil bulanan, ditawarkan sampai 2 Desember 2026.",
  "date": "14 November 2026",
  "image": "assets/img/bank-bjb-pasarkan-sukuk-tabungan-st017-mulai-rp1-juta.jpg",
  "imageV": "mwg0il1a",
  "tags": [
   "Sukuk Tabungan ST017",
   "bank bjb",
   "SBN Syariah",
   "Investasi Ritel"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478306-bank-bjb-tawarkan-sukuk-tabungan-st017-jadi-peluang-investasi"
 },
 {
  "slug": "bank-bjb-raih-penghargaan-pengembangan-ekonomi-daerah",
  "category": "Perbankan",
  "title": "bank bjb Raih [Penghargaan] Pengembangan Ekonomi Daerah",
  "deck": "bank bjb meraih kategori Outstanding Regional Economic Development Award dalam ajang Road to CNBC Indonesia Award 2026, atas dukungannya terhadap UMKM dan sektor ekonomi daerah di Jawa Barat.",
  "date": "14 November 2026",
  "image": "assets/img/bank-bjb-raih-penghargaan-pengembangan-ekonomi-daerah.jpg",
  "imageV": "mwg0ili1",
  "tags": [
   "bank bjb",
   "CNBC Indonesia Award",
   "UMKM",
   "bank pembangunan daerah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478303-bank-bjb-raih-outstanding-regional-economic-development-award-dari-cnbc"
 },
 {
  "slug": "bank-bjb-raih-penghargaan-cnn-indonesia-awards-2026",
  "category": "Perbankan",
  "title": "bank bjb Raih [Penghargaan] CNN Indonesia Awards 2026",
  "deck": "bank bjb diapresiasi CNN Indonesia Awards 2026 atas peran menyalurkan Rp984 miliar dana bedah rumah ke 49.449 keluarga di Jawa Barat.",
  "date": "14 November 2026",
  "image": "assets/img/bank-bjb-raih-penghargaan-cnn-indonesia-awards-2026.jpg",
  "imageV": "mwg0ilwc",
  "tags": [
   "bank bjb",
   "CNN Indonesia Awards 2026",
   "BSPS",
   "Jawa Barat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478302-perkuat-ekonomi-daerah-bank-bjb-raih-penghargaan-cnn-indonesia-awards-2026"
 },
 {
  "slug": "bank-bjb-masuk-kategori-high-dividend-indeks-tempo-2026",
  "category": "Pasar Modal",
  "title": "bank bjb Masuk Kategori [High Dividend] Indeks Tempo 2026",
  "deck": "bank bjb mendapat predikat High Dividend dalam Indeks Tempo-IDNFinancials 52 Tahun 2026, pengakuan atas konsistensi pembagian dividen kepada pemegang saham.",
  "date": "14 November 2026",
  "image": "assets/img/bank-bjb-masuk-kategori-high-dividend-indeks-tempo-2026.jpg",
  "imageV": "mwg0imbe",
  "tags": [
   "bank bjb",
   "dividen",
   "pasar modal",
   "emiten"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478301-bank-bjb-raih-engakuan-high-dividend-bukti-fundamental-perusahaan-tetap-solid"
 },
 {
  "slug": "ekspor-kulit-dan-alas-kaki-ri-tembus-us-7-22-miliar",
  "category": "Industri",
  "title": "Ekspor Kulit dan Alas Kaki RI [Tembus] US$7,22 Miliar",
  "deck": "Ekspor kulit dan alas kaki Indonesia naik 4,36 persen pada Januari-September 2026, ditopang alas kaki khusus dan produk kreatif kulit yang tumbuh lebih cepat dari rata-rata sektor.",
  "date": "14 November 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ekspor-kulit-dan-alas-kaki-tembus-usd-722-miliar-cerminan-daya-saing-produk-manufaktur-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "harga-emas-antam-naik-tipis-ke-rp2-517-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Tipis ke Rp2.517.000 per Gram",
  "deck": "Harga emas batangan Antam naik tipis Rp8.000 menjadi Rp2.517.000 per gram hari ini, sementara harga beli kembali ikut naik ke Rp2.293.000 per gram.",
  "date": "14 November 2026",
  "image": "assets/img/harga-emas-antam-naik-tipis-ke-rp2-517-000-per-gram.jpg",
  "imageV": "mwfub279",
  "tags": [
   "emas",
   "harga emas antam",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478281-harga-emas-antam-hari-ini-14-november-2026-naik-tipis-jadi-rp2517000-per-gram"
 },
 {
  "slug": "presiden-as-dukung-tim-cook-gantikan-huang-di-nvidia",
  "category": "Teknologi",
  "title": "Presiden AS Dukung Tim Cook Gantikan Huang di [Nvidia]",
  "deck": "Presiden Amerika Serikat Donald Trump menyebut Tim Cook pantas menggantikan Jensen Huang yang mundur dari kursi CEO Nvidia setelah 33 tahun memimpin perusahaan itu.",
  "date": "14 November 2026",
  "image": "assets/img/presiden-as-dukung-tim-cook-gantikan-huang-di-nvidia.jpg",
  "imageV": "mwfpot4w",
  "tags": [
   "Nvidia",
   "Jensen Huang",
   "Tim Cook",
   "Donald Trump"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478267-sosok-pengganti-diinginkan-trump-setelah-jensen-huang-mundur-dari-nvidia-siapa"
 },
 {
  "slug": "indo-premier-luncurkan-inai-asisten-ai-untuk-trading-saham",
  "category": "Pasar Modal",
  "title": "Indo Premier Luncurkan [INAI], Asisten AI untuk Trading Saham",
  "deck": "Indo Premier Sekuritas meluncurkan INAI, asisten investasi berbasis AI yang memungkinkan investor mencari saham dan bertransaksi lewat chat, didukung IPOT X Studio dengan 80 alat analisis.",
  "date": "14 November 2026",
  "image": "assets/img/indo-premier-luncurkan-inai-asisten-ai-untuk-trading-saham.jpg",
  "imageV": "mwfewnpn",
  "tags": [
   "AI investasi",
   "trading saham",
   "Indo Premier",
   "fintech"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478250-bisakah-trading-saham-cukup-lewat-chat-ai-intip-teknologi-terbaru-inai"
 },
 {
  "slug": "bananania-umkm-pisang-binaan-pertamina-tembus-ekspor",
  "category": "UMKM",
  "title": "Bananania, UMKM Pisang Binaan Pertamina, Tembus [Ekspor]",
  "deck": "UMKM olahan pisang Bananania dari Yogyakarta, binaan Pertamina sejak 2021, kini merambah pasar ekspor ke Kanada, Malaysia, dan Singapura dengan 12 varian produk.",
  "date": "13 November 2026",
  "image": "assets/img/bananania-umkm-pisang-binaan-pertamina-tembus-ekspor.jpg",
  "imageV": "mwf8qfbk",
  "tags": [
   "UMKM",
   "Pertamina",
   "ekspor",
   "pisang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478240-dari-yogyakarta-ke-kanada-cerita-umkm-binaan-pertamina-raup-pasar-global"
 },
 {
  "slug": "transaksi-afiliasi-inpp-12-november-jual-saham-igm-rp185-7-m",
  "category": "Aksi Korporasi",
  "title": "Transaksi Afiliasi INPP 12 November: [Jual] Saham IGM Rp185,7 M",
  "deck": "INPP menjual seluruh saham di anak usahanya, IGM, kepada PDS senilai Rp185,7 miliar sebagai bagian restrukturisasi kepemilikan dalam grup usaha.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "Transaksi Afiliasi",
   "Restrukturisasi Grup Usaha",
   "Indonesia Gemilang Mahasentosa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cc6d6ba0c2_2dfe9c616b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-perluas-pembiayaan-mekaar-bunga-8-ke-1-7-juta-nasabah",
  "category": "UMKM",
  "title": "PNM [Perluas] Pembiayaan Mekaar Bunga 8% ke 1,7 Juta Nasabah",
  "deck": "PNM memperluas pembiayaan Mekaar berbunga 8 persen lewat program KPPS bersama pemerintah, menargetkan 1,7 juta nasabah perempuan pelaku usaha ultra mikro hingga akhir 2026.",
  "date": "13 November 2026",
  "image": "assets/img/pnm-perluas-pembiayaan-mekaar-bunga-8-ke-1-7-juta-nasabah.jpg",
  "imageV": "mwf5fcws",
  "tags": [
   "PNM Mekaar",
   "UMKM",
   "Pembiayaan Ultra Mikro",
   "Batam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478220-pnm-perluas-pembiayaan-mekaar-bunga-8-targetkan-17-juta-nasabah"
 },
 {
  "slug": "25-driver-ojol-menang-motor-dari-program-boom-pertamina",
  "category": "Energi",
  "title": "25 Driver Ojol Menang [Motor] dari Program BOOM Pertamina",
  "deck": "Pertamina menyerahkan 25 motor Honda Vario kepada pemenang program loyalitas BOOM Periode 2 bagi pengemudi ojol pengguna BBM non-subsidi dan MyPertamina.",
  "date": "13 November 2026",
  "image": "assets/img/25-driver-ojol-menang-motor-dari-program-boom-pertamina.jpg",
  "imageV": "mwf5fdc8",
  "tags": [
   "Pertamina",
   "ojol",
   "BBM non-subsidi",
   "MyPertamina"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478218-dapat-motor-baru-dari-pertamina-puluhan-driver-ojol-makin-semangat-cari-orderan"
 },
 {
  "slug": "melon-bansari-tembus-pasar-nasional-via-program-bri",
  "category": "UMKM",
  "title": "Melon Bansari [Tembus] Pasar Nasional via Program BRI",
  "deck": "Petani melon premium Bansari, Temanggung, kini menjangkau pembeli nasional lewat program Klasterku Hidupku BRI, setelah sebelumnya pasar mereka terbatas di Temanggung.",
  "date": "13 November 2026",
  "image": "assets/img/melon-bansari-tembus-pasar-nasional-via-program-bri.jpg",
  "imageV": "mwf5fdr5",
  "tags": [
   "BRI",
   "Klasterku Hidupku",
   "melon premium",
   "Temanggung"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478216-petani-melon-bansari-perluas-akses-pasar-melalui-program-klasterku-hidupku-bri"
 },
 {
  "slug": "sukuk-mudharabah-boga-rp400-miliar-refinancing-utang-bri-rp200-m",
  "category": "Aksi Korporasi",
  "title": "Sukuk Mudharabah BOGA Rp400 Miliar: [Refinancing] Utang BRI Rp200 M",
  "deck": "Apollo Global Interactive (BOGA) menerbitkan sukuk mudharabah tahap I senilai Rp400 miliar, Rp200 miliar untuk melunasi utang bank ke BRI dan sisanya modal kerja.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOGA",
   "sukuk mudharabah",
   "surat utang syariah",
   "Apollo Global Interactive"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/de1c08b78d_8f119a98d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smsm-klarifikasi-ke-bei-kas-turun-rp137-m-piutang-naik-11",
  "category": "Aksi Korporasi",
  "title": "SMSM [Klarifikasi] ke BEI: Kas Turun Rp137 M, Piutang Naik 11%",
  "deck": "SMSM menjelaskan ke BEI bahwa kas turun Rp136,86 miliar akibat pembayaran dividen, sementara piutang usaha naik 11,16 persen, lebih cepat dari penjualan.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "Selamat Sempurna",
   "piutang usaha",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8ceacd1dfb_f5868f2d2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrme-lelang-hotel-hermitage-diklaim-dimenangkan-hmj",
  "category": "Aksi Korporasi",
  "title": "HRME: [Lelang] Hotel Hermitage Diklaim Dimenangkan HMJ",
  "deck": "HRME mengonfirmasi PT Hotel Menteng Jakarta mengklaim memenangkan lelang atas tanah dan bangunan Hotel Hermitage, sementara sertifikatnya masih tercatat atas nama Perseroan.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRME",
   "Hotel Hermitage",
   "Lelang Aset",
   "PPJBS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/391be5e2e2_9e2ded51b8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-batu-bara-dan-minyak-nabati-wajib-lewat-portal-dsi-2027",
  "category": "Makroekonomi",
  "title": "Ekspor Batu Bara dan Minyak Nabati Wajib Lewat Portal [DSI] 2027",
  "deck": "Pemerintah wajibkan ekspor batu bara, minyak nabati, dan ferroalloy lewat Portal DSI mulai 2027, seiring aturan baru devisa ekspor tambang dan data ekonomi kuartal III 2026.",
  "date": "13 November 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "DHE SDA",
   "Portal DSI",
   "ekspor tambang",
   "IEU-CEPA"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7220/dorong-kepercayaan-dan-peningkatan-investasi-menko-airlangga-optimistis-prospek-ekonomi-2027-tetap-kuat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "harga-patokan-ekspor-emas-turun-2-02-persen-di-november-2026",
  "category": "Industri",
  "title": "Harga Patokan Ekspor Emas [Turun] 2,02 Persen di November 2026",
  "deck": "Kemendag menurunkan Harga Patokan Ekspor dan Harga Referensi emas periode 15-30 November 2026, turun 2,02 persen akibat investor global beralih dari emas ke instrumen lain.",
  "date": "13 November 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "emas",
   "HPE",
   "bea keluar",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hpe-dan-hr-emas-periode-ii-november-2026-masih-tunjukkan-perlemahan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "doid-9m26-rugi-susut-ke-us-43-juta-pendapatan-turun-18",
  "category": "Aksi Korporasi",
  "title": "DOID 9M26: [Rugi] Susut ke US$43 Juta, Pendapatan Turun 18%",
  "deck": "Pendapatan DOID turun 18% secara tahunan jadi US$929 juta pada 9M26, namun rugi bersih menyusut 47% menjadi US$43 juta berkat dividen one-off US$40 juta dari Asiamet.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOID",
   "BUMA International Group",
   "batu bara",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ea558d37fb_787263f1dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "astra-sabet-dua-penghargaan-esg-asia-2026",
  "category": "Bisnis",
  "title": "Astra Sabet Dua [Penghargaan] ESG Asia 2026",
  "deck": "Astra meraih Gold Winner dan Bronze Winner di Asia ESG Positive Impact Awards 2026 lewat program Desa Sejahtera Astra dan Astra Green Energy.",
  "date": "13 November 2026",
  "image": "assets/img/astra-sabet-dua-penghargaan-esg-asia-2026.jpg",
  "imageV": "mwf0273d",
  "tags": [
   "astra",
   "desa sejahtera astra",
   "esg",
   "astra green energy"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478194-astra-raih-dua-penghargaan-asia-esg-positive-impact-awards"
 },
 {
  "slug": "jatuh-tempo-obligasi-fifa-16-november-rp250-78-miliar-delisting",
  "category": "Aksi Korporasi",
  "title": "Jatuh Tempo Obligasi FIFA 16 November: Rp250,78 Miliar [Delisting]",
  "deck": "Obligasi Berkelanjutan VI FIFA Seri B senilai Rp250,78 miliar jatuh tempo 16 November 2026 dan resmi berhenti diperdagangkan di BEI.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIFA",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/455f921d4a_36b66923c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tender-wajib-testdwhshm-terserap-47-78-dari-80-17-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "Tender Wajib TESTDWHSHM: [Terserap] 47,78 dari 80,17 Miliar Saham",
  "deck": "Pengendali baru TESTDWHSHM membeli 47,78 miliar saham dalam penawaran tender wajib yang selesai 13 November 2026, setara 59,6% dari 80,17 miliar saham yang wajib dibeli.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTDWHSHM",
   "tender wajib",
   "pengendali baru",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261113_TESTDWHSHM_E010_d21ddadf-f297-4a82-8e86-fc2d0dfd4128-20261114133911.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-hamdani-dzulkarnaen-efektif-jadi-presiden-komisaris",
  "category": "Aksi Korporasi",
  "title": "SANF: Hamdani Dzulkarnaen Efektif Jadi [Presiden Komisaris]",
  "deck": "SANF menyatakan pengangkatan Hamdani Dzulkarnaen S. sebagai Presiden Komisaris resmi efektif setelah lulus fit and proper test OJK, sementara dua pengurus lain masih menunggu tes serupa.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SANF",
   "Perubahan Pengurus",
   "Fit and Proper Test",
   "Astra Financial"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b81d39e781_5634b9f74b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnii-bayar-rp1-27-miliar-ke-afiliasi-untuk-keamanan-siber-regional",
  "category": "Aksi Korporasi",
  "title": "BNII Bayar Rp1,27 Miliar ke Afiliasi untuk [Keamanan Siber] Regional",
  "deck": "Bank Maybank Indonesia (BNII) membayar Rp1,27 miliar ke afiliasinya di Malaysia untuk biaya layanan keamanan siber regional periode Mei-Agustus 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNII",
   "transaksi afiliasi",
   "Maybank Indonesia",
   "keamanan siber"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e6da0d4a0c_5f9baec8e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-hajj-target-laba-bersih-rp15-miliar-di-2026",
  "category": "Aksi Korporasi",
  "title": "Public Expose HAJJ: [Target] Laba Bersih Rp15 Miliar di 2026",
  "deck": "Materi public expose tahunan HAJJ memuat target pendapatan Rp950 miliar dan laba bersih Rp15 miliar di 2026, meski kinerja sembilan bulan pertama justru melambat.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAJJ",
   "Public Expose",
   "Umrah dan Haji",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/93b09b99b8_bab37e1f4a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pupuk-indonesia-bidik-batam-jadi-pusat-bahan-bakar-amonia-kapal",
  "category": "Energi",
  "title": "Pupuk Indonesia Bidik Batam Jadi Pusat Bahan Bakar [Amonia] Kapal",
  "deck": "Pupuk Indonesia menyiapkan rencana fasilitas pengisian amonia untuk kapal di Batam, Lhokseumawe, dan Bontang, bermodal kapasitas produksi amonia nasional 7,1 juta ton per tahun.",
  "date": "13 November 2026",
  "image": "assets/img/pupuk-indonesia-bidik-batam-jadi-pusat-bahan-bakar-amonia-kapal.jpg",
  "imageV": "mweuturi",
  "tags": [
   "amonia",
   "Pupuk Indonesia",
   "energi hijau",
   "Batam"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/910/pupuk-indonesia-siap-dukung-indonesia-jadi-pusat-ammonia-hub-di-asia-pasifik",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "stok-pupuk-nasional-capai-1-9-juta-ton-jelang-musim-tanam",
  "category": "BUMN",
  "title": "Stok Pupuk Nasional Capai [1,9 Juta Ton] Jelang Musim Tanam",
  "deck": "PT Pupuk Indonesia menyiapkan 1,9 juta ton stok pupuk per 10 November 2026, sementara penyaluran pupuk bersubsidi naik 14 persen dibanding tahun lalu.",
  "date": "13 November 2026",
  "image": "assets/img/stok-pupuk-nasional-capai-1-9-juta-ton-jelang-musim-tanam.jpg",
  "imageV": "mweutw1o",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Bersubsidi",
   "Musim Tanam",
   "Kementerian Pertanian"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/911/serapan-tinggi-pupuk-indonesia-siapkan-19-juta-ton-stok-pupuk-untuk-musim-tanam",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "kemendag-revisi-aturan-ekspor-karet-alam-permudah-ke-tiongkok",
  "category": "Industri",
  "title": "Kemendag [Revisi] Aturan Ekspor Karet Alam, Permudah ke Tiongkok",
  "deck": "Permendag baru mengatur penggunaan ulang kode identitas produsen karet, surat keterangan ekspor ke Tiongkok, dan batas ekspor untuk sampel serta pameran.",
  "date": "13 November 2026",
  "image": "assets/img/kemendag-revisi-aturan-ekspor-karet-alam-permudah-ke-tiongkok.jpg",
  "imageV": "mweuty1z",
  "tags": [
   "karet alam",
   "ekspor",
   "Kemendag",
   "Tiongkok"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perkuat-penerapan-standar-teknis-karet-alam-melalui-permendag-26-tahun-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "gula-aren-sukabumi-mulai-diekspor-ke-300-gerai-kopi-malaysia",
  "category": "UMKM",
  "title": "Gula Aren Sukabumi Mulai Diekspor ke [300] Gerai Kopi Malaysia",
  "deck": "Mahorahora, produsen gula aren Sukabumi, mengekspor perdana Rp250,9 juta gula aren cair ke jaringan 300 gerai Kopi Saigon di Malaysia, dengan pesanan sekontainer penuh menyusul Januari 2027.",
  "date": "13 November 2026",
  "image": "assets/img/gula-aren-sukabumi-mulai-diekspor-ke-300-gerai-kopi-malaysia.jpg",
  "imageV": "mweutzwl",
  "tags": [
   "gula aren",
   "ekspor",
   "Malaysia",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/srasa-di-tei-berbuah-manis-gula-aren-indonesia-didistribusikan-ke-300-gerai-kopi-malaysia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bi-dan-3-bank-sentral-asean-perluas-kerja-sama-mata-uang-lokal",
  "category": "Moneter",
  "title": "BI dan 3 Bank Sentral ASEAN [Perluas] Kerja Sama Mata Uang Lokal",
  "deck": "Bank Indonesia bersama bank sentral Malaysia, Thailand, dan Filipina menandatangani nota kesepahaman baru yang memperluas kerja sama transaksi mata uang lokal, menggantikan kesepakatan 2023.",
  "date": "13 November 2026",
  "image": "assets/img/brankas-uang-sentral.jpg",
  "tags": [
   "Bank Indonesia",
   "ASEAN",
   "mata uang lokal",
   "kerja sama bank sentral"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824926.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "mknt-revisi-laporan-penilaian-cbs-rum-molor-penilai-meninggal",
  "category": "Aksi Korporasi",
  "title": "MKNT: Revisi Laporan Penilaian CBS-RUM Molor, [Penilai Meninggal]",
  "deck": "MKNT jelaskan ke Bursa: revisi laporan penilaian CBS-RUM molor karena penilainya meninggal, dan RUM ternyata beli saham dua perusahaan lain tanpa diungkap lebih dulu.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "Remitra Global International",
   "pemilik manfaat",
   "akuisisi RUM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c07881b017_76a1b25905.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "paparan-publik-hmsp-18-november-laba-bersih-naik-44-4-jadi-rp6-5-t",
  "category": "Aksi Korporasi",
  "title": "Paparan Publik HMSP 18 November: [Laba Bersih] Naik 44,4% Jadi Rp6,5 T",
  "deck": "HM Sampoerna memaparkan kinerja Januari-September 2026 di Paparan Publik Tahunan Surabaya, 18 November: laba bersih Rp6,5 triliun, naik 44,4 persen.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HMSP",
   "Sampoerna",
   "Paparan Publik",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/70fcebb9d3_7793cef2e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-gelar-lelang-aset-properti-hingga-akhir-2026",
  "category": "Perbankan",
  "title": "Bank Mandiri Gelar [Lelang] Aset Properti hingga Akhir 2026",
  "deck": "Bank Mandiri menawarkan aset agunan mulai rumah hingga gudang lewat Mandiri Lelang 2026, dilengkapi KPR bunga tetap mulai 2,7 persen periode Oktober-November.",
  "date": "13 November 2026",
  "image": "assets/img/bank-mandiri-gelar-lelang-aset-properti-hingga-akhir-2026.jpg",
  "imageV": "mwf5fdxb",
  "tags": [
   "Bank Mandiri",
   "Lelang Properti",
   "KPR",
   "Aset Agunan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478191-bank-mandiri-perluas-pilihan-aset-properti-melalui-mandiri-lelang-2026"
 },
 {
  "slug": "mandiri-gelar-lelang-properti-sampai-akhir-2026",
  "category": "Perbankan",
  "title": "Mandiri Gelar [Lelang] Properti Sampai Akhir 2026",
  "deck": "Bank Mandiri menawarkan rumah, tanah, hingga properti usaha lewat Mandiri Lelang 2026, dengan bunga KPR Lelang mulai 2,7 persen periode Oktober-November 2026.",
  "date": "13 November 2026",
  "image": "assets/img/mandiri-gelar-lelang-properti-sampai-akhir-2026.jpg",
  "imageV": "mweuu0w5",
  "tags": [
   "bank mandiri",
   "lelang properti",
   "kpr lelang",
   "aset agunan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478191-bank-mandiri-hadirkan-beragam-aset-properti-melalui-mandiri-lelang-2026"
 },
 {
  "slug": "rupslb-tama-7-desember-divestasi-aset-rp84-2-miliar-diajukan",
  "category": "Aksi Korporasi",
  "title": "RUPSLB TAMA 7 Desember: [Divestasi Aset] Rp84,2 Miliar Diajukan",
  "deck": "RUPSLB TAMA pada 7 Desember 2026 akan membahas rencana divestasi aset senilai Rp84,2 miliar, perubahan direksi-komisaris, dan ekspansi usaha ke bisnis internet.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "RUPSLB",
   "divestasi aset",
   "ISP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/92e51fe067_ea33aa6fa7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-raih-gold-winner-asia-esg-positive-impact-award-2026",
  "category": "BUMN",
  "title": "Telkom Raih [Gold Winner] Asia ESG Positive Impact Award 2026",
  "deck": "Program pengembangan talenta digital TelkomGroup diganjar Gold Winner kategori Talent Management di Asia ESG Positive Impact Award 2026, dinilai panel internasional bersama EY.",
  "date": "13 November 2026",
  "image": "assets/img/telkom-raih-gold-winner-asia-esg-positive-impact-award-2026.jpg",
  "imageV": "mweuu1ad",
  "tags": [
   "Telkom",
   "ESG",
   "BUMN",
   "Pengembangan SDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478185-telkom-sabet-gold-winner-di-asia-esg-positive-impact-award-2026"
 },
 {
  "slug": "amar-angkat-tjetjen-saputra-direktur-kepatuhan-per-2-november-2026",
  "category": "Aksi Korporasi",
  "title": "AMAR Angkat Tjetjen Saputra [Direktur Kepatuhan] per 2 November 2026",
  "deck": "AMAR menunjuk Tjetjen Saputra sebagai Direktur Kepatuhan menggantikan Thio Sucy, efektif sejak OJK menyetujui uji kelayakannya pada 2 November 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAR",
   "Bank Amar Indonesia",
   "Direksi",
   "Direktur Kepatuhan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/88e81894d7_7fa5e89acb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-brms-30-november-paparkan-kinerja-2025",
  "category": "Aksi Korporasi",
  "title": "Public Expose BRMS 30 November: [Paparkan] Kinerja 2025",
  "deck": "BRMS akan menggelar Public Expose Tahunan untuk tahun buku 2025 pada 30 November 2026 di Hotel The Westin Jakarta, memaparkan kinerja produksi dan keuangan.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "Bumi Resources Minerals",
   "Public Expose",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/75415c98aa_34a2a7e5aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "testdwhshm-manajer-investasi-baru-jadi-indo-premier-13-nov",
  "category": "Aksi Korporasi",
  "title": "TESTDWHSHM: [Manajer Investasi] Baru Jadi Indo Premier, 13 Nov",
  "deck": "Manajer investasi TESTDWHSHM berubah dari posisi yang sebelumnya kosong menjadi PT Indo Premier Investment Management, efektif 13 November 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTDWHSHM",
   "Manajer Investasi",
   "Indo Premier Investment Management",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261113_TESTDWHSHM_E016_3ab7ca7f-6344-4b48-be50-56447ddac32f-20261114134518.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "testdwhshm-perubahan-pengurus-direksi-dan-komisaris-berganti",
  "category": "Aksi Korporasi",
  "title": "TESTDWHSHM: [Perubahan Pengurus] Direksi dan Komisaris Berganti",
  "deck": "RUPS TESTDWHSHM pada 27 Desember 2026 jadi dasar perubahan direksi dan komisaris yang berlaku efektif 13 November 2026: Dewi Contoh diangkat kembali, Budi Pengujian jadi komisaris independen.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTDWHSHM",
   "perubahan pengurus",
   "direksi",
   "komisaris independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261113_TESTDWHSHM_E036_af753fa3-09d3-4106-b04a-65b3fc4b38d5-20261114134517.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wirg-direktur-utama-stephen-budiman-mundur-per-11-november",
  "category": "Aksi Korporasi",
  "title": "WIRG: Direktur Utama Stephen Budiman [Mundur] per 11 November",
  "deck": "Direktur Utama WIR ASIA Tbk, Stephen Budiman, mengajukan pengunduran diri karena alasan kesehatan pada 11 November 2026. Susunan direksi belum berubah.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIRG",
   "direksi",
   "direktur utama",
   "pengunduran diri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3f9970a5a9_be63243b0e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-jawab-bursa-divestasi-85-kbbf-rampung-rp339-97-miliar",
  "category": "Aksi Korporasi",
  "title": "BBKP Jawab Bursa: [Divestasi] 85% KBBF Rampung Rp339,97 Miliar",
  "deck": "BBKP merespons permintaan penjelasan Bursa atas pelepasan 85% saham KBBF ke JB Woori Capital senilai Rp339,97 miliar, transaksi rampung 4 November 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "KBBF",
   "JB Woori Capital",
   "Sanksi OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f13c138fe1_d31aac6ae0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-anjlok-34-ke-rp144-respons-uma-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "SMLE Anjlok 34% ke Rp144, Respons [UMA]: Tak Ada Info Material",
  "deck": "BEI meminta penjelasan setelah saham SMLE turun 33,95 persen dalam sepekan ke Rp144; perseroan menyatakan tidak mengetahui informasi material di balik pergerakan itu.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "volatilitas saham",
   "keterbukaan informasi",
   "UMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/63c09ad171_d3e419d7cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "belanja-negara-tembus-rp2-997-t-tumbuh-15-6-persen",
  "category": "Makroekonomi",
  "title": "Belanja Negara Tembus Rp2.997 T, Tumbuh [15,6] Persen",
  "deck": "Realisasi belanja negara hingga akhir Oktober 2026 capai Rp2.997,2 triliun atau 78 persen dari pagu APBN, didorong lonjakan belanja kementerian dan program MBG.",
  "date": "13 November 2026",
  "image": "assets/img/belanja-negara-tembus-rp2-997-t-tumbuh-15-6-persen.jpg",
  "imageV": "mweuu1p7",
  "tags": [
   "APBN",
   "Belanja Negara",
   "MBG",
   "Kemenkeu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478161-menkeu-pendapatan-negara-melonjak-239-persen"
 },
 {
  "slug": "rupslb-womf-batal-digelar-agenda-perubahan-direksi-tertunda",
  "category": "Aksi Korporasi",
  "title": "RUPSLB WOMF Baru Dijadwalkan 22 Desember, [Pemanggilan] 30 Nov",
  "deck": "WOMF menjadwalkan RUPSLB baru pada 22 Desember 2026, setelah rapat sebelumnya batal total. Pemanggilan resmi 30 November, recording date pemegang saham 27 November.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WOMF",
   "RUPSLB",
   "tata kelola",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d24cb3f298_029d47443d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-oliv-7-desember-rombak-direksi-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "RUPSLB OLIV 7 Desember: [Rombak] Direksi dan Komisaris",
  "deck": "RUPSLB OLIV digelar 7 Desember 2026 untuk mengganti seluruh jajaran Direksi dan Dewan Komisaris dengan enam calon pengurus baru.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OLIV",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/65cb4f3358_a56d140418.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kualitas-kredit-bri-membaik-npl-turun-ke-2-85",
  "category": "Perbankan",
  "title": "Kualitas Kredit BRI [Membaik], NPL Turun ke 2,85%",
  "deck": "BRI mencatat rasio kredit bermasalah turun ke 2,85 persen pada September 2026, didukung pengelolaan risiko yang lebih disiplin dan pencadangan yang makin kuat.",
  "date": "13 November 2026",
  "image": "assets/img/kualitas-kredit-bri-membaik-npl-turun-ke-2-85.jpg",
  "imageV": "mwep0k38",
  "tags": [
   "BRI",
   "NPL",
   "Perbankan",
   "Manajemen Risiko"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478153-bri-perkuat-pengelolaan-risiko-kualitas-kredit-dan-kinerja-terus-meningkat"
 },
 {
  "slug": "sanksi-pajak-dihapus-100-persen-tenggat-31-desember-2026",
  "category": "Makroekonomi",
  "title": "Sanksi Pajak [Dihapus] 100 Persen, Tenggat 31 Desember 2026",
  "deck": "Ditjen Pajak memberi tenggat penghapusan sanksi administrasi hingga 100 persen bagi wajib pajak yang melunasi pokok dan melapor sebelum 31 Desember 2026, lewat aturan PSA terbaru.",
  "date": "13 November 2026",
  "image": "assets/img/sanksi-pajak-dihapus-100-persen-tenggat-31-desember-2026.jpg",
  "imageV": "mwem3bo7",
  "tags": [
   "Direktorat Jenderal Pajak",
   "Sumatera Barat",
   "sanksi pajak",
   "PMK 71/2026"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/sanksi-pajak-bisa-dihapus-100-persen-tenggatnya-tinggal-tujuh-pekan",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "indonesia-teken-asean-defa-14-november-gantikan-uu-lama",
  "category": "Global",
  "title": "Indonesia Teken ASEAN DEFA 14 November, [Gantikan] UU Lama",
  "deck": "Menko Airlangga dijadwalkan menandatangani ASEAN DEFA di Manila, 14 November 2026, perjanjian yang menggantikan aturan e-commerce ASEAN lama dan berlaku 180 hari kemudian.",
  "date": "13 November 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "ASEAN DEFA",
   "ekonomi digital",
   "UMKM",
   "ASEAN"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7218/indonesia-siap-tandatangani-asean-defa-untuk-perkuat-integrasi-ekonomi-digital-kawasan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wika-jawab-bursa-soal-pkpu-wikon-ekuitas-anak-usaha-minus-rp1-24-t",
  "category": "Aksi Korporasi",
  "title": "WIKA Jawab Bursa soal PKPU WIKON: [Ekuitas] Anak Usaha Minus Rp1,24 T",
  "deck": "WIKA menyebut gugatan PKPU Rp1,3 miliar terhadap anak usahanya WIKON tidak material, tetapi ekuitas WIKON tercatat minus Rp1,24 triliun per akhir September 2026. Sidang lanjutan digelar 17 November 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "WIKON",
   "PKPU",
   "gugatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/db1e2f35dd_a706ffe988.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-kmds-rp16-per-saham-cair-11-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim KMDS Rp16 per Saham, [Cair] 11 Desember",
  "deck": "KMDS membagikan dividen interim tunai Rp16 per saham senilai total Rp12,8 miliar untuk tahun buku 2026, dibayar 11 Desember 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KMDS",
   "dividen interim",
   "pasar modal",
   "emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d3e60194e7_253d58afcb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-pnbs-18-november-laba-naik-69-78-ke-rp73-4-m",
  "category": "Aksi Korporasi",
  "title": "Public Expose PNBS 18 November: [Laba] Naik 69,78% ke Rp73,4 M",
  "deck": "Materi Public Expose PNBS mengungkap laba sebelum pajak kuartal III 2026 melonjak 69,78% jadi Rp73,4 miliar, sementara rasio kecukupan modal turun ke 16,61%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNBS",
   "Bank Panin Dubai Syariah",
   "Public Expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a85b831a9f_31fbbe63c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-jmas-22-desember-pencatatan-pemegang-saham-27-november",
  "category": "Aksi Korporasi",
  "title": "RUPST JMAS 22 Desember: [Pencatatan] Pemegang Saham 27 November",
  "deck": "JMAS akan menggelar RUPST untuk tahun buku 2025 pada 22 Desember 2026; pemegang saham yang tercatat per 27 November 2026 berhak hadir.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JMAS",
   "RUPST",
   "Asuransi Jiwa Syariah",
   "Jasa Mitra Abadi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9f3e4e4d1e_c70c1937e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-testdwhsh3-13-november-going-concern-perdagangan-disetop",
  "category": "Aksi Korporasi",
  "title": "Suspensi TESTDWHSH3 13 November: [Going Concern] Perdagangan Disetop",
  "deck": "Bursa menghentikan sementara perdagangan saham TESTDWHSH3 mulai 13 November 2026 dengan alasan kelangsungan usaha (going concern).",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTDWHSH3",
   "suspensi",
   "going concern",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261113_TESTDWHSH3_B007_a0b83468-3bbd-4f2d-9762-73b7c2990c06-20261114134532.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sektor-ritel-dan-manufaktur-lama-tergeser-teknologi-dan-e-commerce",
  "category": "Makroekonomi",
  "title": "Sektor Ritel dan Manufaktur Lama [Tergeser] Teknologi dan E-Commerce",
  "deck": "Wamenko Perekonomian Dradjad Hari Wibowo menyebut sektor ritel dan manufaktur padat karya makin tergerus teknologi dan belanja online, sementara pemerintah memperluas bantuan sosial sebagai penyangga sementara.",
  "date": "13 November 2026",
  "image": "assets/img/jalan-raya-padat.jpg",
  "tags": [
   "transformasi ekonomi",
   "pertumbuhan ekonomi",
   "bantuan subsidi upah",
   "ketenagakerjaan"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7216/transformasi-ekonomi-jadi-kunci-perkuat-daya-saing-dan-perluas-manfaat-pertumbuhan-bagi-masyarakat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ekspor-sawit-naik-16-ke-us-28-84-miliar-hingga-oktober",
  "category": "Industri",
  "title": "Ekspor Sawit Naik [16%] ke US$28,84 Miliar hingga Oktober",
  "deck": "Ekspor sawit Indonesia tembus US$28,84 miliar pada Januari-Oktober 2026, naik 16 persen, sementara kebijakan biodiesel B50 menyerap lebih banyak pasokan domestik.",
  "date": "13 November 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "kelapa sawit",
   "ekspor CPO",
   "biodiesel B50",
   "ISPO"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7217/menko-airlangga-industri-kelapa-sawit-jadi-pilar-ketahanan-pangan-dan-energi-nasional",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kici-tanggapi-permintaan-bursa-penjualan-naik-22",
  "category": "Aksi Korporasi",
  "title": "KICI Tanggapi Permintaan Bursa: [Penjualan Naik 22%]",
  "deck": "KICI menanggapi permintaan penjelasan Bursa Efek Indonesia: penjualan naik 22% dari tahun lalu, di tengah tekanan daya beli domestik dan persaingan produk China.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KICI",
   "Kedaung Indah Can",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4774200045_df395dcd02.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "infranexia-tambah-1-408-km-jaringan-fiber-optik-2026",
  "category": "Teknologi",
  "title": "InfraNexia [Tambah] 1.408 Km Jaringan Fiber Optik 2026",
  "deck": "InfraNexia menambah 1.408 km jaringan fiber optik pada 2026, membawa total jaringannya ke 112.000 km sekaligus menyiapkan infrastruktur siap AI untuk kebutuhan data yang terus meningkat.",
  "date": "13 November 2026",
  "image": "assets/img/infranexia-tambah-1-408-km-jaringan-fiber-optik-2026.jpg",
  "imageV": "mwefnrni",
  "tags": [
   "InfraNexia",
   "Telkom",
   "Fiber Optik",
   "Infrastruktur Digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478124-infranexia-tambah-1408-km-jaringan-fiber-optik-pada-2026-siapkan-ai-ready-infrastructure"
 },
 {
  "slug": "pmthmetd-gtra-dana-cair-semester-i-2027-rups-7-desember",
  "category": "Aksi Korporasi",
  "title": "PMTHMETD GTRA: [Dana Cair] Semester I 2027, RUPS 7 Desember",
  "deck": "GTRA menjawab permintaan BEI soal private placement: dana ditargetkan cair semester I 2027, RUPS Independen digelar 7 Desember 2026.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTRA",
   "PMTHMETD",
   "Private Placement",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ce87d8d8da_55cf7f49e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-keluar-dari-pemantauan-khusus-bei-efektif-16-november",
  "category": "Aksi Korporasi",
  "title": "TRUE [Keluar] dari Pemantauan Khusus BEI, Efektif 16 November",
  "deck": "BEI mencabut saham PT Triniti Dinamik Tbk (TRUE) dari papan pemantauan khusus mulai 16 November 2026, setelah kriteria soal pendapatan tidak lagi terpenuhi.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "pemantauan khusus",
   "BEI",
   "papan pencatatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3c890e8caa_997b17d859.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-gula-7-desember-agenda-ubah-susunan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "RUPSLB GULA 7 Desember: [Agenda] Ubah Susunan Direksi-Komisaris",
  "deck": "RUPSLB PT Aman Agrindo Tbk (GULA) digelar 7 Desember 2026 untuk membahas perubahan susunan direksi dan komisaris perusahaan.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GULA",
   "RUPSLB",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6a2a6eafbe_799825c44b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-509-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.509.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp9.000 menjadi Rp2.509.000 per gram, sementara harga buyback ikut turun ke Rp2.285.000 per gram.",
  "date": "13 November 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-509-000-per-gram.jpg",
  "imageV": "mwefnrsr",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478121-harga-emas-antam-hari-ini-13-november-2026-turun-jadi-rp2509000-per-gram-saatnya-beli"
 },
 {
  "slug": "dividen-interim-medc-kurs-bi-rp18-154-dividen-rp22-03-saham",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim MEDC: [Kurs] BI Rp18.154, Dividen Rp22,03/Saham",
  "deck": "Medco Energi menetapkan kurs tengah BI 12 November 2026 sebesar Rp18.154 per dolar AS untuk menghitung dividen interim, sehingga nilainya setara Rp22,03 per saham.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "dividen interim",
   "kurs BI",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a60d2f2a86_4a6d1ca79d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tops-pailit-pn-jakarta-pusat-batalkan-perdamaian-5-november",
  "category": "Aksi Korporasi",
  "title": "TOPS [Pailit]: PN Jakarta Pusat Batalkan Perdamaian 5 November",
  "deck": "PN Jakarta Pusat membatalkan perjanjian perdamaian TOPS dan menyatakan perseroan pailit pada 5 November 2026, menyusul gugatan kreditur Sutoyo.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOPS",
   "pailit",
   "kepailitan",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7ccb8b5848_a3d9930dc8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-independen-gtra-7-desember-private-placement-189-4-juta-saham",
  "category": "Aksi Korporasi",
  "title": "RUPS Independen GTRA 7 Desember: [Private Placement] 189,4 Juta Saham",
  "deck": "GTRA memanggil RUPS Independen 7 Desember 2026 untuk meminta persetujuan private placement hingga 189,4 juta saham baru, maksimal 10 persen modal disetor.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTRA",
   "RUPS Independen",
   "private placement",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/59aeeb6ed0_20034db336.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-umkm-binaan-kemendag-tembus-us-360-juta-pada-2026",
  "category": "UMKM",
  "title": "Ekspor UMKM Binaan Kemendag [Tembus] US$360 Juta pada 2026",
  "deck": "Nilai transaksi ekspor UMKM binaan Kemendag naik dari US$134,8 juta sepanjang 2025 menjadi US$360 juta hanya dalam sembilan bulan 2026.",
  "date": "13 November 2026",
  "image": "assets/img/ekspor-umkm-binaan-kemendag-tembus-us-360-juta-pada-2026.jpg",
  "imageV": "mwdwc8un",
  "tags": [
   "UMKM",
   "Ekspor",
   "Kemendag",
   "Keterbukaan Informasi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-pastikan-keterbukaan-informasi-publik-dalam-tiga-program-kemendag",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "airlangga-subsidi-bbm-aman-hingga-akhir-2026",
  "category": "Energi",
  "title": "Airlangga: Subsidi BBM [Aman] hingga Akhir 2026",
  "deck": "Menko Airlangga Hartarto memastikan subsidi BBM tetap terjaga hingga akhir 2026, kendati rupiah melemah ke Rp18.239 per dolar AS dan harga minyak dunia di US$92-93 per barel.",
  "date": "13 November 2026",
  "image": "assets/img/airlangga-subsidi-bbm-aman-hingga-akhir-2026.jpg",
  "imageV": "mwdwc9aw",
  "tags": [
   "BBM subsidi",
   "rupiah",
   "Airlangga Hartarto",
   "APBN 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478097-menko-airlangga-pastikan-subsidi-bbm-tetap-aman-hingga-akhir-2026"
 },
 {
  "slug": "mmix-pt-pukul-rata-kanan-tambah-11-4-juta-saham-jadi-4-57",
  "category": "Aksi Korporasi",
  "title": "MMIX: PT Pukul Rata Kanan [Tambah] 11,4 Juta Saham, Jadi 4,57%",
  "deck": "PT Pukul Rata Kanan menambah 11,4 juta saham MMIX pada 12 November 2026, kepemilikannya naik dari 4,34% menjadi 4,57%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "kepemilikan saham",
   "PT Pukul Rata Kanan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/acba39552f_547417999c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fsppb-desak-ruu-migas-rampung-pertamina-jadi-noc",
  "category": "Energi",
  "title": "FSPPB Desak RUU Migas Rampung, Pertamina Jadi [NOC]",
  "deck": "FSPPB dan PIPBB-MIGAS mendesak pemerintah dan DPR mempercepat revisi UU Migas agar Pertamina ditetapkan sebagai NOC terintegrasi hulu-hilir demi kedaulatan energi nasional.",
  "date": "12 November 2026",
  "image": "assets/img/fsppb-desak-ruu-migas-rampung-pertamina-jadi-noc.jpg",
  "imageV": "mwdwc9rz",
  "tags": [
   "migas",
   "Pertamina",
   "RUU Migas",
   "kedaulatan energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478087-sinergi-serikat-pekerja-dan-pemantau-migas-dorong-penguatan-kedaulatan-energi-melalui-penataan-regulasi"
 },
 {
  "slug": "jasa-marga-jaga-skor-keterbukaan-informasi-di-kip-2026",
  "category": "BUMN",
  "title": "Jasa Marga Jaga Skor [Keterbukaan] Informasi di KIP 2026",
  "deck": "Jasa Marga mengikuti uji publik evaluasi keterbukaan informasi 2026 oleh Komisi Informasi Pusat, menyusul skor 98,92 dan status Informatif yang diraih tahun lalu.",
  "date": "12 November 2026",
  "image": "assets/img/jasa-marga-jaga-skor-keterbukaan-informasi-di-kip-2026.jpg",
  "imageV": "mwdwca89",
  "tags": [
   "jasa marga",
   "informasi publik",
   "monev kip",
   "tol"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478082-jasa-marga-perkuat-transparansi-publik-melalui-uji-publik-monev-kip-2026"
 },
 {
  "slug": "menperin-dorong-kedaulatan-industri-telekomunikasi-nasional",
  "category": "Industri",
  "title": "Menperin Dorong [Kedaulatan] Industri Telekomunikasi Nasional",
  "deck": "Menperin mengajak pelaku usaha telekomunikasi bersatu demi kedaulatan digital, bertepatan dengan terpilihnya Erikson Sianipar sebagai Ketua Umum Apnatel baru.",
  "date": "12 November 2026",
  "image": "assets/img/menperin-dorong-kedaulatan-industri-telekomunikasi-nasional.jpg",
  "imageV": "mwdqzggt",
  "tags": [
   "telekomunikasi",
   "Apnatel",
   "kedaulatan digital",
   "Kemenperin"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478077-menperin-dorong-kedaulatan-industri-telekomunikasi-ini-respons-apnatel"
 },
 {
  "slug": "qris-jadi-fitur-terfavorit-pengguna-dompet-digital",
  "category": "Perbankan",
  "title": "QRIS Jadi Fitur [Terfavorit] Pengguna Dompet Digital",
  "deck": "Riset MarkPlus 2026 menunjukkan QRIS kini jadi fitur paling sering dipakai pengguna dompet digital di Indonesia, mengungguli transfer dan belanja daring.",
  "date": "12 November 2026",
  "image": "assets/img/qris-jadi-fitur-terfavorit-pengguna-dompet-digital.jpg",
  "imageV": "mwdqzgx6",
  "tags": [
   "qris",
   "dompet digital",
   "pembayaran digital",
   "e-wallet"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478075-qris-mengubah-cara-masyarakat-bertransaksi-dompet-digital-kini-jadi-cara-menghemat-pengeluaran"
 },
 {
  "slug": "rupo-adhi-11-desember-2026-obligasi-tahap-iii-2022-dibahas",
  "category": "Aksi Korporasi",
  "title": "[RUPO] ADHI 11 Desember 2026: Obligasi Tahap III 2022 Dibahas",
  "deck": "ADHI mengumumkan rencana RUPO untuk Obligasi Berkelanjutan III Tahap III 2022 pada 11 Desember 2026, panggilan resmi terbit 27 November 2026.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "RUPO",
   "Obligasi",
   "Bank Mega"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/011b74a80a_0937bea065.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-mdia-rugi-bersih-melebar-ke-rp32-3-miliar-di-6m2026",
  "category": "Aksi Korporasi",
  "title": "Public Expose MDIA 17 November: [Jadwal] Dikoreksi ke 14.30 WIB",
  "deck": "MDIA mengoreksi waktu public expose tahunan menjadi Selasa, 17 November 2026 pukul 14.30 WIB, setelah materi semester I 2026 yang menunjukkan rugi melebar sudah terbit lebih dulu.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDIA",
   "Public Expose",
   "ANTV",
   "Rugi Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/be1959a4d6_d10ee1712e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-viva-6m2026-laba-bersih-anjlok-95-jadi-rp60-miliar",
  "category": "Aksi Korporasi",
  "title": "Public Expose VIVA 17 November: [Jadwal] Diubah Jadi 14.30 WIB",
  "deck": "VIVA mengoreksi jadwal Public Expose Tahunan 2026, kini dipastikan digelar Selasa, 17 November 2026 pukul 14.30 WIB, setelah pengumuman awal 30 Oktober 2026.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "Public Expose",
   "Laporan Keuangan",
   "Jadwal Korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/28325c7881_cb859e3b43.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akuisisi-visi-rampung-kuasai-72-91-saham-hmbc-per-30-okt",
  "category": "Aksi Korporasi",
  "title": "Akuisisi VISI Rampung: [Kuasai] 72,91% Saham HMBC per 30 Okt",
  "deck": "VISI menuntaskan akuisisi 72,91% saham PT Hasna Medika Bakti Cirebon pada 30 Oktober 2026, lewat pembelian saham lama dan penyetoran modal saham baru.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "akuisisi",
   "HMBC",
   "Satu Visi Putra"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cd55282834_e50e16ad2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indx-gaji-karyawan-tunggak-3-bulan-rupst-2025-tertunda",
  "category": "Aksi Korporasi",
  "title": "INDX: Gaji Karyawan Tunggak 3 Bulan, [RUPST] 2025 Tertunda",
  "deck": "Tanah Laut (INDX) menjawab permintaan penjelasan Bursa: gaji karyawan tertunda tiga bulan sejak Agustus 2026, LKT 2025 dan RUPST juga belum bisa dilaksanakan akibat keterbatasan likuiditas.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDX",
   "Tanah Laut Tbk",
   "likuiditas",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fa9bc10ec7_df46cc73ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-meroket-2-66-persen-usai-gibran-mundur",
  "category": "Pasar Modal",
  "title": "IHSG [Meroket] 2,66 Persen Usai Gibran Mundur",
  "deck": "IHSG ditutup menguat 2,66 persen ke 5.250,90 pada Kamis, didorong redanya tensi politik usai mundurnya Wapres Gibran Rakabuming Raka dan jaminan stok beras nasional.",
  "date": "12 November 2026",
  "image": "assets/img/ihsg-meroket-2-66-persen-usai-gibran-mundur.jpg",
  "imageV": "mwdqzhk3",
  "tags": [
   "IHSG",
   "Gibran Rakabuming Raka",
   "Bursa Efek Indonesia",
   "Pasar Modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478065-gibran-mundur-ihsg-sore-ini-meroket-266-persen"
 },
 {
  "slug": "nice-tanggapi-bursa-permintaan-penjelasan-kredit-citibank-rp100-m",
  "category": "Aksi Korporasi",
  "title": "NICE Tanggapi Bursa [Permintaan Penjelasan]: Kredit Citibank Rp100 M",
  "deck": "Menjawab permintaan penjelasan BEI, NICE memastikan saldo fasilitas kredit Rp100 miliar dari Citibank sudah nihil per akhir Oktober 2026, dengan bunga mengambang turun jadi INDONIA+1,25%.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "Adhi Kartiko Pratama",
   "Citibank",
   "fasilitas kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0120177083_d3eefcce21.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemenko-perekonomian-temui-bei-dan-ojk-soal-reformasi-pasar-modal",
  "category": "Pasar Modal",
  "title": "Kemenko Perekonomian Temui BEI dan OJK soal [Reformasi] Pasar Modal",
  "deck": "Pemerintah menggelar pertemuan dengan BEI, KPEI, KSEI, OJK, dan asosiasi emiten untuk menyusun langkah penguatan tata kelola, penegakan aturan, dan edukasi investor di pasar modal.",
  "date": "12 November 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "pasar modal",
   "OJK",
   "BEI",
   "tata kelola emiten"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7214/jaga-kepercayaan-investor-dan-lindungi-aset-masyarakat-pemerintah-perkuat-reformasi-pasar-modal",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bi-resmikan-bank-kliring-yuan-untuk-dagang-ri-tiongkok",
  "category": "Moneter",
  "title": "BI Resmikan Bank Kliring [Yuan] untuk Dagang RI-Tiongkok",
  "deck": "Bank Indonesia meluncurkan bank kliring Renminbi yang dikelola Bank of China Jakarta, didukung 12 bank nasional untuk mempermudah transaksi dagang Indonesia-Tiongkok memakai mata uang lokal.",
  "date": "12 November 2026",
  "image": "assets/img/pencakar-langit-jakarta.jpg",
  "tags": [
   "Bank Indonesia",
   "Renminbi",
   "LCT",
   "Tiongkok"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "public-expose-cfin-18-november-laba-9m26-naik-13-3-ke-rp154-m",
  "category": "Aksi Korporasi",
  "title": "Public Expose CFIN 18 November: [Laba] 9M26 Naik 13,3% ke Rp154 M",
  "deck": "CFIN gelar Public Expose Tahunan pada 18 November 2026 pukul 10.00 WIB, memaparkan laba bersih 9 bulan 2026 naik 13,26% menjadi Rp154 miliar meski piutang menyusut 9,21%.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CFIN",
   "Public Expose",
   "Clipan Finance",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3a4e1bebfa_12de5f60e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaii-obligasi-rp1-1-triliun-siap-dilunasi-13-desember",
  "category": "Aksi Korporasi",
  "title": "KAII: Obligasi Rp1,1 Triliun [Siap] Dilunasi 13 Desember",
  "deck": "KAI menyatakan dana pelunasan pokok Obligasi II Seri B senilai Rp1,1 triliun yang jatuh tempo 13 Desember 2026 telah tersedia.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KAII",
   "obligasi",
   "Kereta Api Indonesia",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/45d1412109_c2ffd0fea8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-ketr-12-november-direktur-utama-diganti-ke-vidcy-octory",
  "category": "Aksi Korporasi",
  "title": "RUPSLB KETR 12 November: [Direktur Utama] Diganti ke Vidcy Octory",
  "deck": "RUPSLB KETR pada 12 November 2026 mengganti direktur utama dan komisaris utama, serta menambah dua direktur baru.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "Perubahan Direksi",
   "RUPSLB",
   "Ketrosden Triasmitra"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6d349b5ba2_a60e9a032b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-ketr-12-november-presdir-diganti-direksi-tambah-2",
  "category": "Aksi Korporasi",
  "title": "RUPSLB KETR 12 November: [Presdir] Diganti, Direksi Tambah 2",
  "deck": "RUPSLB KETR menetapkan Videy Octory sebagai Direktur Utama baru dan menambah dua direktur, sementara Komisaris Utama beralih ke Marlo Budiman.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d0843fb1c3_0c7726095e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-msti-rp48-per-saham-cair-10-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim MSTI Rp48 per Saham: Cair 10 Desember 2026",
  "deck": "MSTI menegaskan dividen interim Rp48 per saham cair 10 Desember 2026, sekaligus membuka data laba bersih Rp298,35 miliar dan ekuitas Rp2,26 triliun yang mendasarinya.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSTI",
   "dividen interim",
   "dividen tunai",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4d094ae280_b8edfcbf82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadi-selidiki-ulang-impor-baja-hrc-dari-belarus-dan-kazakstan",
  "category": "Industri",
  "title": "KADI Selidiki Ulang Impor Baja HRC dari [Belarus] dan Kazakstan",
  "deck": "KADI membuka penyelidikan peninjauan kembali bea antidumping atas impor baja HRC dari Belarus dan Kazakstan, setelah menemukan indikasi perubahan margin dumping.",
  "date": "12 November 2026",
  "image": "assets/img/gudang-bahan-baku.jpg",
  "tags": [
   "Antidumping",
   "Baja HRC",
   "KADI",
   "Impor"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kadi-inisiasi-penyelidikan-antidumping-impor-hrc-asal-belarus-dan-kazakstan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bank-mandiri-gelar-lelang-properti-bunga-kpr-2-7-persen",
  "category": "Perbankan",
  "title": "Bank Mandiri Gelar [Lelang] Properti Bunga KPR 2,7 Persen",
  "deck": "Mandiri Lelang 2026 menawarkan rumah, tanah, apartemen, dan ruko hingga akhir Desember, dilengkapi KPR Lelang berbunga tetap 2,7 persen periode Oktober-November.",
  "date": "12 November 2026",
  "image": "assets/img/bank-mandiri-gelar-lelang-properti-bunga-kpr-2-7-persen.jpg",
  "imageV": "mwde4rb9",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478030-ingin-punya-rumah-dengan-harga-lebih-kompetitif-cek-penawaran-mandiri-lelang-2026"
 },
 {
  "slug": "obligasi-bbia-rp650-miliar-jatuh-tempo-lunas-13-november",
  "category": "Aksi Korporasi",
  "title": "Obligasi BBIA Rp650 Miliar Jatuh Tempo, [Lunas] 13 November",
  "deck": "Obligasi subordinasi Bank UOB Indonesia senilai Rp650 miliar jatuh tempo dan delisting dari BEI 13 November 2026; bank konfirmasi dana pelunasan sudah siap.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBIA",
   "obligasi subordinasi",
   "jatuh tempo",
   "Bank UOB Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0b50ee15ac_422b6d686b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemantauan-khusus-ptdu-tambah-kriteria-pkpu-pailit-efektif-13-nov",
  "category": "Aksi Korporasi",
  "title": "Pemantauan Khusus PTDU Tambah Kriteria [PKPU/Pailit], Efektif 13 Nov",
  "deck": "Bursa menambahkan kriteria PKPU/pailit ke status pemantauan khusus PTDU per 13 November 2026, menyusul kriteria ekuitas negatif yang sudah berlaku sebelumnya.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTDU",
   "pemantauan khusus",
   "PKPU",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2b6323e92d_f933929f7a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-afiliasi-atap-pinjaman-rp8-miliar-dari-pt-tp-bunga-6",
  "category": "Aksi Korporasi",
  "title": "Transaksi Afiliasi ATAP: [Pinjaman] Rp8 Miliar dari PT TP, Bunga 6%",
  "deck": "ATAP meminjam Rp8 miliar dari PT Trimitra Prawara, perusahaan afiliasi, dengan bunga 6 persen per tahun dan tenor lima tahun.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATAP",
   "transaksi afiliasi",
   "pinjaman",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/395ec45f36_103d7b1173.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cass-free-float-17-35-penuhi-syarat-minimum-bursa",
  "category": "Aksi Korporasi",
  "title": "CASS: [Pemilik Manfaat] Eddy K. Sariaatmadja, Free Float 17,35%",
  "deck": "Laporan bulanan registrasi pemegang efek CASS mengungkap pemilik manfaat akhir Eddy K. Sariaatmadja di balik pengendali Roket Cipta Sentosa; free float tetap 17,35%.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASS",
   "free float",
   "pemilik manfaat",
   "struktur pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a7c2b0b626_fa2469fbcd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-obligasi-iii-bold-10-desember-agenda-menyusul-26-november",
  "category": "Aksi Korporasi",
  "title": "RUPO Obligasi III BOLD 10 Desember: [Agenda] Menyusul 26 November",
  "deck": "Wali Amanat CIMB Niaga menjadwalkan RUPO Obligasi III BUMA Tahun 2025 pada 10 Desember 2026 di Jakarta; agenda resmi baru terbit lewat panggilan 26 November.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "RUPO",
   "obligasi",
   "BUMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cfe3c47473_6c65933234.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtla-q3-2026-pendapatan-naik-4-16-laba-bersih-turun-ke-rp183-m",
  "category": "Aksi Korporasi",
  "title": "MTLA Q3 2026: Pendapatan Naik 4,16%, [Laba Bersih Turun] ke Rp183 M",
  "deck": "Pendapatan usaha MTLA tumbuh 4,16% jadi Rp1,178 triliun hingga September 2026, tapi laba bersih turun ke Rp183 miliar karena pergeseran komposisi margin penjualan.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTLA",
   "Metropolitan Land",
   "Public Expose",
   "Properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c19b505f44_3b8d4a6bc0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-jawab-bursa-rugi-turun-jadi-rp3-59-miliar-per-9m-2026",
  "category": "Aksi Korporasi",
  "title": "TRUK Jawab Bursa: [Rugi] Turun Jadi Rp3,59 Miliar per 9M-2026",
  "deck": "Pendapatan TRUK naik tipis ke Rp31,74 miliar dan rugi bersih menyempit ke Rp3,59 miliar per September 2026; dua fasilitas kredit rekening koran diperpanjang ke 2028.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "Guna Timur Raya",
   "Kredit Bank",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b9681dbe0d_836ef1c4bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-rock-dijadwalkan-21-desember-dps-cut-off-26-november",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ROCK Dijadwalkan 21 Desember: [DPS] Cut Off 26 November",
  "deck": "Rockfields Properti Indonesia (ROCK) akan menggelar RUPSLB pada 21 Desember 2026, pemegang saham tercatat hingga 26 November 2026 berhak hadir.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROCK",
   "RUPSLB",
   "Rockfields Properti Indonesia",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/14d5d5753e_e0d8928b87.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-powr-rp31-28-per-saham-cair-11-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim POWR Rp31,28 per Saham, [Cair] 11 Desember 2026",
  "deck": "Cikarang Listrindo (POWR) membagikan dividen interim Rp502,93 miliar atau Rp31,27592 per saham, dibayar 11 Desember 2026.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POWR",
   "dividen interim",
   "Cikarang Listrindo",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3c9e7e9b43_34112b3ae5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menko-pangan-dorong-produksi-gula-demi-kejar-swasembada",
  "category": "Industri",
  "title": "Menko Pangan Dorong Produksi Gula demi Kejar [Swasembada]",
  "deck": "Menko Pangan Zulkifli Hasan mendorong penguatan produksi gula dan produktivitas tebu di Pabrik Gula Krebet, Malang, sebagai bagian upaya mengejar swasembada gula nasional.",
  "date": "12 November 2026",
  "image": "assets/img/menko-pangan-dorong-produksi-gula-demi-kejar-swasembada.jpg",
  "imageV": "mwd8q6o9",
  "tags": [
   "gula",
   "swasembada",
   "pabrik gula",
   "petani tebu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477985-zulkifli-hasan-dorong-peningkatan-produksi-gula-dalam-negeri-untuk-kejar-swasembada"
 },
 {
  "slug": "kredit-umkm-bri-capai-rp1-250-triliun-porsi-75-9",
  "category": "Perbankan",
  "title": "Kredit UMKM BRI Capai Rp1.250 Triliun, Porsi [75,9%]",
  "deck": "BRI menyalurkan kredit Rp1.250 triliun untuk UMKM hingga September 2026, setara 75,9 persen dari total kredit Rp1.647 triliun, meski porsinya menyusut dibanding tahun lalu.",
  "date": "12 November 2026",
  "image": "assets/img/kredit-umkm-bri-capai-rp1-250-triliun-porsi-75-9.jpg",
  "imageV": "mwd8q730",
  "tags": [
   "BRI",
   "UMKM",
   "KUR",
   "Kredit Perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477982-bri-dorong-pertumbuhan-umkm-indonesia-salurkan-kredit-rp1250-triliun"
 },
 {
  "slug": "rupst-rigs-10-november-dividen-nihil-direksi-lama-dipilih-lagi",
  "category": "Aksi Korporasi",
  "title": "RUPST RIGS 10 November: [Dividen] Nihil, Direksi Lama Dipilih Lagi",
  "deck": "RUPST RIGS menetapkan laba bersih tahun buku 2025/2026 dipakai menutup kerugian, tanpa dividen, dan menunjuk ulang seluruh direksi serta komisaris hingga 2031.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RIGS",
   "RUPST",
   "Dividen",
   "Rig Tenders"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bf59a78268_e1bd6820d0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-wirg-10-november-dividen-nihil-komisaris-independen-lengser",
  "category": "Aksi Korporasi",
  "title": "RUPST WIRG 10 November: [Dividen] Nihil, Komisaris Independen Lengser",
  "deck": "RUPST WIR ASIA menahan seluruh laba 2025 sebagai laba ditahan tanpa dividen, sekaligus memberhentikan Ferdinand Bennyanto dari kursi Komisaris Independen.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIRG",
   "RUPST",
   "Komisaris Independen",
   "Laba Ditahan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/75d5ab9f7f_f752ad64fe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "blog-anak-usaha-ssa-tambah-fasilitas-kredit-bca-rp100-miliar",
  "category": "Aksi Korporasi",
  "title": "BLOG: Anak Usaha SSA Tambah Fasilitas Kredit [BCA] Rp100 Miliar",
  "deck": "Anak usaha BLOG, PT Simpan Sini Aja, menambah fasilitas kredit investasi Rp100 miliar dari BCA untuk membiayai gudang dan cold storage, total pinjaman naik jadi Rp210 miliar.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLOG",
   "Trimitra Trans Persada",
   "kredit bank",
   "Simpan Sini Aja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bbe62e5395_464314d0f3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-47-persen-harga-minyak-melandai",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh 5,47 Persen, Harga Minyak [Melandai]",
  "deck": "Ekonomi Indonesia tumbuh 5,47 persen pada kuartal III 2026, ditopang harapan pelandaian harga minyak dunia di tengah suku bunga global yang masih tinggi.",
  "date": "12 November 2026",
  "image": "assets/img/ekonomi-ri-tumbuh-5-47-persen-harga-minyak-melandai.jpg",
  "imageV": "mwd29m2n",
  "tags": [
   "harga minyak",
   "pertumbuhan ekonomi",
   "KSSK",
   "ekonomi global"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477961-ekonomi-indonesia-tumbuh-547-persen-penurunan-harga-minyak-jadi-harapan-di-tengah-tekanan-global"
 },
 {
  "slug": "rupo-medp-17-november-alih-dana-rp427-m-ke-ekspansi-deb",
  "category": "Aksi Korporasi",
  "title": "RUPO MEDP 17 November: [Alih] Dana Rp427 M ke Ekspansi DEB",
  "deck": "MEDP mengajukan perubahan penggunaan sisa dana obligasi Rp427,21 miliar dari proyek panas bumi Bonjol ke ekspansi PLTGU Batam, menunggu persetujuan RUPO 17 November 2026.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "Obligasi",
   "RUPO",
   "Medco Power Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ed9f4f36db_5b08e86767.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atic-komisaris-independen-meninggal-rups-pengganti-60-hari",
  "category": "Aksi Korporasi",
  "title": "ATIC: Komisaris Independen Meninggal, RUPS [Pengganti] 60 Hari",
  "deck": "Komisaris Independen ATIC, Prasetio, meninggal dunia 11 November 2026. Perusahaan wajib gelar RUPS pengganti dalam 60 hari kalender.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATIC",
   "Komisaris Independen",
   "Tata Kelola",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/87a8c0fcf9_08ec430d61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-obligasi-ptpp-11-november-restrukturisasi-ditolak",
  "category": "Aksi Korporasi",
  "title": "RUPO Obligasi PTPP 11 November: [Restrukturisasi] Ditolak",
  "deck": "Pemegang Obligasi Berkelanjutan III PTPP Tahap I Seri B menolak keempat usulan restrukturisasi bunga, termasuk penundaan bunga ke-18 yang sudah telat dibayar.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "RUPO",
   "obligasi",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b9f6eaba4b_d2602b0803.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupsu-ptpp-11-november-restrukturisasi-sukuk-ditolak-setuju-68",
  "category": "Aksi Korporasi",
  "title": "RUPSu PTPP 11 November: [Restrukturisasi] Sukuk Ditolak, Setuju 68%",
  "deck": "RUPSu pemegang Sukuk Mudharabah PTPP Seri B menolak dua opsi keringanan bagi hasil, opsi pertama disetujui 68,09% suara tapi kurang dari ambang 75% yang disyaratkan.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "RUPSu",
   "Sukuk",
   "Restrukturisasi Utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/075862d83b_bbd7e60b2d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupsu-sukuk-ptpp-tahap-iii-restrukturisasi-ditolak-setuju-71",
  "category": "Aksi Korporasi",
  "title": "RUPSu Sukuk PTPP Tahap III: [Restrukturisasi] Ditolak, Setuju 71%",
  "deck": "Empat usulan restrukturisasi bagi hasil Sukuk Mudharabah Tahap III PTPP kandas karena tak mencapai syarat 75% suara setuju, walau tiga di antaranya didukung mayoritas pemegang sukuk.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "Sukuk",
   "RUPSu",
   "Restrukturisasi Utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fc89a4b789_fe2e4d4b16.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peringkat-sukuk-post-turun-ke-d-idn-gagal-bayar-ijarah",
  "category": "Aksi Korporasi",
  "title": "Peringkat Sukuk POST Turun ke D(idn): [Gagal Bayar] Ijarah",
  "deck": "Fitch menurunkan peringkat Sukuk Ijarah Berkelanjutan I Pos Indonesia Tahap I milik emiten POST ke D(idn) dari C(idn) setelah gagal bayar imbalan ijarah jatuh tempo 8 Oktober 2026.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Sukuk Ijarah",
   "Fitch Ratings",
   "Gagal Bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/87588d8eed_8840c8e4af.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupsi-bold-10-desember-agenda-menyusul-26-november",
  "category": "Aksi Korporasi",
  "title": "[RUPSI] BOLD 10 Desember: Agenda Menyusul 26 November",
  "deck": "RUPSI pemegang Sukuk Ijarah I BUMA (BOLD) digelar 10 Desember 2026 atas permintaan Emiten; agenda baru terbit saat panggilan 26 November, menyusul dua RUPO obligasi serupa pekan ini.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "BUMA",
   "Sukuk Ijarah",
   "RUPSI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6c107fefb4_dac69e06d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fuji-pemeriksaan-bursa-ungkap-pemegang-saham-baru-5-61",
  "category": "Aksi Korporasi",
  "title": "FUJI: [Pemeriksaan] Bursa Ungkap Pemegang Saham Baru 5,61%",
  "deck": "FUJI menjawab permintaan penjelasan Bursa terkait pemeriksaan transaksi saham, data menunjukkan pemegang saham baru muncul dengan porsi 5,61% per akhir Maret 2026.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUJI",
   "pemeriksaan bursa",
   "pemegang saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8c923afa02_7e3cb399bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppre-raih-kontrak-flyover-rp68-miliar-di-maluku-utara-kontrak",
  "category": "Aksi Korporasi",
  "title": "PPRE Raih Kontrak Flyover Rp68 Miliar di Maluku Utara [Kontrak]",
  "deck": "PPRE menggarap pembangunan flyover jalan produksi tambang di Moronopo, Maluku Utara, senilai Rp68 miliar untuk klien PT Nusa Karya Arindo.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRE",
   "kontrak baru",
   "konstruksi",
   "Maluku Utara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a628a06d34_4e04ce7ab4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "39-umkm-dapat-fasilitasi-104-barcode-untuk-masuk-ritel-modern",
  "category": "UMKM",
  "title": "39 UMKM Dapat Fasilitasi [104] Barcode untuk Masuk Ritel Modern",
  "deck": "Kemendag dan APRINDO memfasilitasi pembuatan 104 barcode GS1 untuk 39 UMKM peserta program kurasi PPPB di acara puncak Hari Ritel Nasional 2026, Bandung.",
  "date": "12 November 2026",
  "image": "assets/img/39-umkm-dapat-fasilitasi-104-barcode-untuk-masuk-ritel-modern.jpg",
  "imageV": "mwchjlwt",
  "tags": [
   "UMKM",
   "Kemendag",
   "APRINDO",
   "barcode GS1"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-peningkatan-daya-saing-produk-umkm-kemendag-fasilitasi-pembuatan-104-barcode",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "plafon-kur-2026-naik-jadi-rp325-triliun-ntt-dapat-keringanan",
  "category": "Perbankan",
  "title": "Plafon KUR 2026 [Naik] Jadi Rp325 Triliun, NTT Dapat Keringanan",
  "deck": "Pemerintah menaikkan plafon KUR 2026 menjadi Rp325 triliun, menetapkan target kredit program 2027 Rp386,9 triliun, dan meringankan bunga debitur KUR korban gempa NTT.",
  "date": "12 November 2026",
  "image": "assets/img/kartu-debit.jpg",
  "tags": [
   "KUR",
   "UMKM",
   "Kredit Program",
   "Gempa NTT"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7213/pemerintah-tingkatkan-plafon-kur-2026-menjadi-rp325-triliun-siapkan-kredit-program-rp3869-triliun-pada-2027-dan-relaksasi-bagi-debitur-terdampak-gempa-ntt",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "harga-minyak-acuan-ri-naik-ke-us-117-24-per-barel-di-oktober",
  "category": "Energi",
  "title": "Harga Minyak Acuan RI Naik ke [US$117,24] per Barel di Oktober",
  "deck": "ICP Oktober 2026 naik jadi US$117,24 per barel akibat ketegangan geopolitik global, namun pemerintah memproyeksikan November melandai ke US$103,94-108,94 per barel.",
  "date": "12 November 2026",
  "image": "assets/img/harga-minyak-acuan-ri-naik-ke-us-117-24-per-barel-di-oktober.jpg",
  "imageV": "mwch5cns",
  "tags": [
   "ICP",
   "Harga Minyak",
   "ESDM",
   "Migas"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pemerintah-tetapkan-icp-oktober-us11724-per-barel-harga-november-diproyeksi-melandai",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kek-batang-jajaki-teknologi-cip-hemat-energi",
  "category": "Industri",
  "title": "KEK Batang Jajaki [Teknologi] Cip Hemat Energi",
  "deck": "KEK Industropolis Batang menjajaki kerja sama dengan Axelera, perusahaan cip asal Eropa, untuk teknologi komputasi hemat energi senilai indikatif EUR20-50 juta pada 2027-2030.",
  "date": "11 November 2026",
  "image": "assets/img/kek-batang-jajaki-teknologi-cip-hemat-energi.jpg",
  "imageV": "mwch5d5o",
  "tags": [
   "KEK Batang",
   "Axelera",
   "semikonduktor",
   "investasi Eropa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477904-kek-industropolis-batang-jajaki-teknologi-cip-hemat-energi-dengan-perusahaan-eropa"
 },
 {
  "slug": "smexpo-2026-transaksi-umkm-binaan-pertamina-tembus-rp33-miliar",
  "category": "UMKM",
  "title": "SMEXPO 2026: Transaksi UMKM Binaan Pertamina Tembus [Rp33 Miliar]",
  "deck": "Pertamina mencatat potensi transaksi lebih dari Rp33 miliar dari 52 UMKM binaan di ajang SMEXPO 2026 Jakarta, bagian dari pembinaan lebih dari 2.000 UMKM sepanjang tahun.",
  "date": "11 November 2026",
  "image": "assets/img/smexpo-2026-transaksi-umkm-binaan-pertamina-tembus-rp33-miliar.jpg",
  "imageV": "mwch5dl1",
  "tags": [
   "pertamina",
   "umkm",
   "smexpo",
   "jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477899-pertamina-smexpo-2026-strategi-pertamina-kembangkan-umkm-dan-perluas-akses-pasar"
 },
 {
  "slug": "penjelasan-bursa-brrc-laba-bruto-kuartal-iii-rugi-kas-rp70-juta",
  "category": "Aksi Korporasi",
  "title": "Penjelasan Bursa BRRC: Laba Bruto Kuartal III [Rugi], Kas Rp70 Juta",
  "deck": "BRRC menjelaskan ke BEI bahwa rugi bruto kuartal III 2026 dipicu lonjakan harga tepung terigu, sementara kas tergerus hingga tersisa Rp70,54 juta meski ada dana IPO dan waran.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRRC",
   "Permintaan Penjelasan Bursa",
   "Laporan Keuangan",
   "Likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d4d8f2cba0_d807705e77.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "stok-beras-nasional-aman-hadapi-nataru-2026",
  "category": "Makroekonomi",
  "title": "Stok Beras Nasional [Aman] Hadapi Nataru 2026",
  "deck": "Mentan Amran Sulaiman klaim stok beras 4,5 juta ton jadi tertinggi sepanjang sejarah merdeka, sembari ungkap penindakan 13 tersangka pengoplosan dan pemalsuan harga beras.",
  "date": "11 November 2026",
  "image": "assets/img/stok-beras-nasional-aman-hadapi-nataru-2026.jpg",
  "imageV": "mwch5e0e",
  "tags": [
   "beras",
   "ketahanan pangan",
   "Kementan",
   "nataru"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477893-antisipasi-ketahanan-pangan-mentan-pastikan-ketersediaan-beras-nasional-aman-untuk-hadapi-nataru"
 },
 {
  "slug": "kek-industropolis-batang-sertifikasi-80-talenta-kreatif",
  "category": "Ketenagakerjaan",
  "title": "KEK Industropolis Batang Sertifikasi 80 Talenta [Kreatif]",
  "deck": "KEK Industropolis Batang dan Kemenekraf menyertifikasi 80 talenta kreatif lokal, 50 penari dan 30 pengelola acara, dalam program yang digelar 5-7 November 2026.",
  "date": "11 November 2026",
  "image": "assets/img/kek-industropolis-batang-sertifikasi-80-talenta-kreatif.jpg",
  "imageV": "mwch5ei9",
  "tags": [
   "Batang",
   "Industri Kreatif",
   "Kemenekraf",
   "KEK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477889-kemenekraf-dan-kek-industropolis-batang-tingkatkan-kompetensi-sdm-kreatif-lokal"
 },
 {
  "slug": "tabungan-bri-rekor-tertinggi-dana-murah-tembus-70",
  "category": "Perbankan",
  "title": "Tabungan BRI [Rekor] Tertinggi, Dana Murah Tembus 70%",
  "deck": "Tabungan BRI mencapai Rp637,7 triliun hingga September 2026, level tertinggi sepanjang sejarah perusahaan, seiring porsi dana murah yang naik ke 70 persen dari total dana pihak ketiga.",
  "date": "11 November 2026",
  "image": "assets/img/tabungan-bri-rekor-tertinggi-dana-murah-tembus-70.jpg",
  "imageV": "mwch5ext",
  "tags": [
   "BRI",
   "BBRI",
   "CASA",
   "BRImo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477885-penghimpunan-tabungan-cetak-rekor-tertinggi-sepanjang-sejarah-bukti-nyata-keberhasilan-transformasi-bri"
 },
 {
  "slug": "4-manajer-investasi-bumn-merger-aum-tembus-rp170-triliun",
  "category": "Pasar Modal",
  "title": "4 Manajer Investasi BUMN [Merger], AUM Tembus Rp170 Triliun",
  "deck": "Danantara meluncurkan Danareksa Investments usai menggabungkan Mandiri, BRI, BNI, dan PNM Investment Management dengan dana kelolaan Rp172,5 triliun.",
  "date": "11 November 2026",
  "image": "assets/img/4-manajer-investasi-bumn-merger-aum-tembus-rp170-triliun.jpg",
  "imageV": "mwde4rg1",
  "tags": [
   "Danareksa Investments",
   "Danantara",
   "manajer investasi",
   "Rosan Roeslani"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477880-danareksa-investments-resmi-diluncurkan-usai-merger-empat-manajer-investasi-aum-gabungan-tembus-rp170-triliun"
 },
 {
  "slug": "danareksa-investment-resmi-lahir-kelola-aum-rp172-5-t",
  "category": "Pasar Modal",
  "title": "Danareksa Investment [Resmi] Lahir, Kelola AUM Rp172,5 T",
  "deck": "Empat manajer investasi BUMN merger jadi Danareksa Investment Management Indonesia, mengelola dana Rp172,5 triliun dan menyasar posisi kedua terbesar nasional.",
  "date": "11 November 2026",
  "image": "assets/img/danareksa-investment-resmi-lahir-kelola-aum-rp172-5-t.jpg",
  "imageV": "mwch5fe3",
  "tags": [
   "Danareksa Investment",
   "Danantara",
   "merger BUMN",
   "manajer investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477880-danareksa-investments-resmi-diluncurkan-dari-merger-4-mi-bumn-aum-capai-rp1725-triliun"
 },
 {
  "slug": "cnaf-direktur-iris-savitri-mundur-dari-jajaran-direksi",
  "category": "Aksi Korporasi",
  "title": "CNAF: Direktur Iris Savitri [Mundur] dari Jajaran Direksi",
  "deck": "PT CIMB Niaga Auto Finance (CNAF) melaporkan pengunduran diri Iris Savitri dari kursi direksi, menunggu persetujuan pemegang saham lewat keputusan sirkuler.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNAF",
   "direksi",
   "pengunduran diri",
   "CIMB Niaga Auto Finance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6890e81186_b65dba298f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanksi-pajak-bisa-dihapus-100-persen-lewat-pmk-71-sampai-2028",
  "category": "Makroekonomi",
  "title": "Sanksi Pajak Bisa [Dihapus] 100 Persen Lewat PMK-71 Sampai 2028",
  "deck": "Kanwil DJP Jawa Barat II mensosialisasikan PMK-71 di Cirebon: sanksi pajak bisa dihapus hingga 100 persen bagi Wajib Pajak yang melunasi utang pokoknya, berlaku sampai 1 Oktober 2028.",
  "date": "11 November 2026",
  "image": "assets/img/sanksi-pajak-bisa-dihapus-100-persen-lewat-pmk-71-sampai-2028.jpg",
  "imageV": "mwc6ak7z",
  "tags": [
   "pajak",
   "DJP",
   "PMK-71",
   "Cirebon"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/sosialisasi-pmk-71-di-cirebon-kanwil-djp-jawa-barat-ii-ajak-wajib-pajak-wilayah",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "batam-tumbuh-7-28-persen-pemerintah-awasi-impor-ilegal",
  "category": "Makroekonomi",
  "title": "Batam Tumbuh 7,28 Persen, Pemerintah Awasi [Impor Ilegal]",
  "deck": "Ekonomi dan investasi Batam melesat, tapi pemerintah pusat menyoroti praktik underinvoicing dan impor barang bekas ilegal yang dinilai bisa mengganggu iklim usaha di kawasan ini.",
  "date": "11 November 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "Batam",
   "Investasi",
   "KPBPB",
   "Mekaar"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7212/perkuat-pertumbuhan-ekonomi-dan-kepastian-berusaha-pemerintah-dorong-daya-saing-investasi-kawasan-strategis-batam",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ekspor-ri-naik-5-58-persen-tei-2026-lampaui-target",
  "category": "Makroekonomi",
  "title": "Ekspor RI [Naik] 5,58 Persen, TEI 2026 Lampaui Target",
  "deck": "Dalam pembukaan forum pameran IBEF 2026, pemerintah menyoroti ekspor Indonesia yang naik 5,58 persen pada Januari-September 2026, serta capaian Trade Expo Indonesia yang lampaui target transaksi.",
  "date": "11 November 2026",
  "image": "assets/img/ekspor-ri-naik-5-58-persen-tei-2026-lampaui-target.jpg",
  "imageV": "mwd8qpvm",
  "tags": [
   "ekspor",
   "pameran dagang",
   "Kementerian Perdagangan",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/wamendag-roro-tegaskan-peran-pameran-sebagai-jembatan-produk-indonesia-ke-pasar-global",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "oils-dirikan-anak-usaha-ignp-komisaris-direktur-ikut-setor-modal",
  "category": "Aksi Korporasi",
  "title": "OILS Dirikan Anak Usaha IGNP: [Komisaris] & Direktur Ikut Setor Modal",
  "deck": "Komisaris Johan Widakdo Liem dan Direktur Yonathan Widakdo Sutanto ikut memegang saham pribadi di anak usaha baru OILS, PT Indo Global Niaga Perkasa.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OILS",
   "anak usaha",
   "tata kelola perusahaan",
   "minyak kelapa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2f4d56f6e6_1e43e3c9f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-catatkan-obligasi-sukuk-baru-rp1-5-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "PPGD catatkan [obligasi-sukuk] baru Rp1,5 triliun di BEI",
  "deck": "Pegadaian (PPGD) mencatatkan empat seri obligasi dan sukuk senilai total Rp1,5 triliun di BEI mulai 12 November 2026, bagian dari program penawaran berkelanjutan senilai puluhan triliun rupiah.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGD",
   "obligasi korporasi",
   "sukuk",
   "Pegadaian"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c28565f4f7_58994dc448.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bris-catatkan-sukuk-rp2-triliun-genapkan-rp10-triliun",
  "category": "Aksi Korporasi",
  "title": "BRIS Catatkan Sukuk Rp2 Triliun, Genapkan [Rp10 Triliun]",
  "deck": "Sukuk mudharabah tahap III senilai Rp2 triliun resmi tercatat di BEI pada 12 November 2026, melengkapi target Rp10 triliun program yang berjalan sejak 2024.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "Sukuk Mudharabah",
   "BEI",
   "Obligasi Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c3d7939419_baac6c09fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-hadirkan-asisten-ai-tara-untuk-cari-informasi",
  "category": "Teknologi",
  "title": "Telkom Hadirkan Asisten AI [TARA] untuk Cari Informasi",
  "deck": "TARA, asisten AI Telkom yang diluncurkan Oktober 2026, sudah menjawab 14.072 pertanyaan publik seputar produk, investor, hingga lowongan kerja.",
  "date": "11 November 2026",
  "image": "assets/img/telkom-hadirkan-asisten-ai-tara-untuk-cari-informasi.jpg",
  "imageV": "mwc6al2s",
  "tags": [
   "AI",
   "Telkom",
   "TARA",
   "layanan digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477849-telkom-hadirkan-asisten-ai-tara-bantu-masyarakat-cari-informasi-lebih-cepat"
 },
 {
  "slug": "bei-evaluasi-saham-terkonsentrasi-bobot-ihsg-berubah",
  "category": "Aksi Korporasi",
  "title": "BEI Evaluasi Saham Terkonsentrasi, Bobot [IHSG] Berubah",
  "deck": "Komite BEI mengevaluasi kepemilikan saham 10 pemegang saham terbesar di seluruh perusahaan tercatat per 30 Oktober 2026, memengaruhi penyesuaian bobot IHSG dua hari bursa mendatang.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IHSG",
   "BEI",
   "kepemilikan saham",
   "indeks"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/07864ea30d_bd4f07848a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-batalkan-rupslb-pmthmetd-tertunda-imbas-ojk",
  "category": "Aksi Korporasi",
  "title": "INPS Batalkan RUPSLB, [PMTHMETD] Tertunda Imbas OJK",
  "deck": "RUPSLB INPS yang semula digelar 6 November 2026 dibatalkan karena OJK masih memproses revisi keterbukaan informasi rencana penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "RUPSLB",
   "PMTHMETD",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d901e668bd_a7949c5935.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-ke-bei-kontrak-rai-kementerian-rp14-7-m-dibenarkan",
  "category": "Aksi Korporasi",
  "title": "RANS ke BEI: Kontrak RAI-Kementerian Rp14,7 M [Dibenarkan]",
  "deck": "RANS membenarkan kontrak jasa kreatif Rp14,7 miliar dari dua kementerian ke anak usahanya, RAI, menyusul sorotan ICW atas kontrak tersebut.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "Rans Animasi Indonesia",
   "ICW",
   "pengadaan pemerintah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/89fde0c7a4_ea88605a29.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boga-rempah-perikanan-ri-catat-potensi-rp450-miliar-di-shanghai",
  "category": "Bisnis",
  "title": "Boga, Rempah, Perikanan RI Catat Potensi [Rp450 Miliar] di Shanghai",
  "deck": "Produk boga, rempah, dan perikanan Indonesia mencatat potensi transaksi Rp450 miliar di pameran CIIE Shanghai, termasuk satu MoU UMKM dengan mitra Tiongkok.",
  "date": "11 November 2026",
  "image": "assets/img/boga-rempah-perikanan-ri-catat-potensi-rp450-miliar-di-shanghai.jpg",
  "imageV": "mwc0gw6x",
  "tags": [
   "CIIE",
   "ekspor",
   "Tiongkok",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/produk-boga-rempah-dan-perikanan-indonesia-catat-potensi-transaksi-rp450-miliar-di-pameran-shanghai",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "adhi-koreksi-laporan-keuangan-catat-rugi-rp19-18-miliar-di-h1-2026",
  "category": "Aksi Korporasi",
  "title": "ADHI Koreksi Laporan Keuangan, Catat [Rugi] Rp19,18 Miliar di H1 2026",
  "deck": "Laporan keuangan interim koreksi ADHI untuk semester I 2026 menunjukkan rugi bersih Rp19,18 miliar, berbalik dari laba Rp7,54 miliar tahun sebelumnya, meski pendapatan usaha turun 18,4 persen.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "laporan keuangan",
   "BUMN karya",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261111180017-65760-0/FinancialStatement-2026-II-ADHI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soci-dirikan-dua-anak-usaha-pelayaran-modal-total-us-1-juta",
  "category": "Aksi Korporasi",
  "title": "SOCI [Dirikan] Dua Anak Usaha Pelayaran, Modal Total US$1 Juta",
  "deck": "Soechi Lines mendirikan dua anak usaha baru di bidang pelayaran, Victory Ocean Maritime dan Wave Maritime Lines, di Marshall Islands dengan modal masing-masing US$500.000.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOCI",
   "entitas anak",
   "pelayaran",
   "ekspansi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9dd6cd7533_95332223e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ltls-siapkan-dana-lunasi-obligasi-rp135-miliar",
  "category": "Aksi Korporasi",
  "title": "LTLS Siapkan Dana Lunasi [Obligasi] Rp135 Miliar",
  "deck": "Obligasi Seri B senilai Rp135 miliar jatuh tempo 12 November 2026 dan delisting dari BEI; LTLS menyatakan telah menyiapkan dana penuh untuk pelunasan.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LTLS",
   "obligasi korporasi",
   "jatuh tempo obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/81f86e8265_637531c79f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-panggil-rupslb-agendakan-pergantian-direksi",
  "category": "Aksi Korporasi",
  "title": "RLCO Panggil RUPSLB, Agendakan [Pergantian] Direksi",
  "deck": "RLCO mengundang pemegang saham ke RUPSLB 3 Desember 2026 untuk membahas perubahan Anggaran Dasar dan pergantian susunan Direksi.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1099b0a170_6966b3c744.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-city-laba-naik-49-6-okupansi-disorot-media",
  "category": "Aksi Korporasi",
  "title": "Public Expose CITY: laba naik 49,6%, [okupansi] disorot media",
  "deck": "Dalam public expose tahunan, CITY melaporkan laba bersih naik 49,6% dan ekuitas naik 2,02%, sementara dari 1.780 unit terjual baru 800 unit berpenghuni.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITY",
   "public expose",
   "properti",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bbb15fe1f7_5cbc6b6676.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menn-ubah-haluan-jadi-holding-teknologi-capex-rp19-76-m",
  "category": "Aksi Korporasi",
  "title": "MENN Ubah Haluan Jadi [Holding] Teknologi, Capex Rp19,76 M",
  "deck": "PT Menn Teknologi Indonesia Tbk memaparkan rencana berubah jadi perusahaan induk investasi teknologi dengan tiga anak usaha baru, saat sahamnya masih disuspensi.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "Public Expose",
   "Technology Investment Holding",
   "Suspensi Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/932293aa16_3da4492d7d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pinjaman-afiliasi-pack-aki-rp424-8-m-bebas-bunga-tenor-2-tahun",
  "category": "Aksi Korporasi",
  "title": "Pinjaman Afiliasi PACK-AKI Rp424,8 M [Bebas Bunga], Tenor 2 Tahun",
  "deck": "PACK meminjamkan Rp424,8 miliar ke anak usaha AKI tanpa bunga dan tanpa jaminan, tenor dua tahun sejak penarikan dan bisa diperpanjang.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "transaksi afiliasi",
   "pinjaman intercompany",
   "AKI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0da329d3d8_e51eeacacf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "futr-koreksi-laporan-realisasi-dana-ipo-rp10-5-m-mengendap",
  "category": "Aksi Korporasi",
  "title": "FUTR Koreksi Laporan Realisasi Dana IPO Rp10,5 M [Mengendap]",
  "deck": "Futura Energi Global (FUTR) mengoreksi laporan realisasi dana IPO dan waran, dengan total Rp39,4 miliar dana belum terserap per 30 Juni 2026.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUTR",
   "penggunaan dana IPO",
   "waran",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0b65846e79_6b509cd627.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "keen-teken-ppa-plta-140-mw-senilai-us-1-2-miliar-dengan-pln",
  "category": "Aksi Korporasi",
  "title": "KEEN Teken [PPA] PLTA 140 MW Senilai US$1,2 Miliar dengan PLN",
  "deck": "KEEN melalui dua anak usahanya meneken perjanjian jual beli listrik dengan PLN untuk PLTA Salu Uro 95 MW dan PLTA Pakkat 2 45 MW, dengan total nilai kontrak sekitar US$1,2 miliar selama 30 tahun.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KEEN",
   "PLTA",
   "PLN",
   "pembangkit listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/93f810f0b4_7156c51994.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-tamu-18-desember-2026-jadwal-dps-per-25-november",
  "category": "Aksi Korporasi",
  "title": "RUPSLB TAMU 18 Desember 2026: [Jadwal] DPS per 25 November",
  "deck": "PT Pelayaran Tamarin Samudra Tbk (TAMU) akan menggelar RUPST dan RUPSLB pada 18 Desember 2026. Pemegang saham yang tercatat per 25 November 2026 berhak hadir dan bersuara.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMU",
   "RUPSLB",
   "RUPST",
   "Pelayaran Tamarin Samudra"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/974caea39f_429e1dd408.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-perluas-insentif-pajak-karyawan-ke-semua-sektor-2027",
  "category": "Makroekonomi",
  "title": "Pemerintah Perluas Insentif Pajak Karyawan ke Semua Sektor [2027]",
  "deck": "Kemenko Perekonomian memaparkan rencana perluasan insentif pajak gaji ke seluruh sektor pada 2027, di tengah sejumlah indikator konsumsi dan manufaktur yang menguat jelang akhir tahun.",
  "date": "11 November 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "PPh 21 DTP",
   "ritel",
   "daya beli",
   "QRIS"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7211/pemerintah-perkuat-daya-saing-ritel-dan-produk-lokal-untuk-dorong-pertumbuhan-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "delapan-perusahaan-ri-jajaki-pasar-haji-umrah-arab-saudi",
  "category": "Bisnis",
  "title": "Delapan Perusahaan RI [Jajaki] Pasar Haji-Umrah Arab Saudi",
  "deck": "Kemendag memfasilitasi delapan perusahaan Indonesia di Hajj Conference & Expo 2026 Jeddah, salah satunya menjajaki MoU senilai US$3,39 juta di sektor makanan siap saji.",
  "date": "11 November 2026",
  "image": "assets/img/delapan-perusahaan-ri-jajaki-pasar-haji-umrah-arab-saudi.jpg",
  "imageV": "mwbxrv4q",
  "tags": [
   "Kemendag",
   "Arab Saudi",
   "Haji dan Umrah",
   "Ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-fasilitasi-delapan-perusahaan-indonesia-di-hajj-conference-expo-2026-jeddah",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "geopark-meratus-didorong-jadi-penggerak-ekonomi-kalsel",
  "category": "Makroekonomi",
  "title": "Geopark Meratus Didorong Jadi [Penggerak] Ekonomi Kalsel",
  "deck": "Pemprov Kalsel ingin status UNESCO Geopark Meratus bukan sekadar daya tarik wisatawan, tapi benar-benar menggerakkan UMKM dan lapangan kerja daerah.",
  "date": "11 November 2026",
  "image": "assets/img/geopark-meratus-didorong-jadi-penggerak-ekonomi-kalsel.jpg",
  "imageV": "mwbxrvl7",
  "tags": [
   "Kalimantan Selatan",
   "Geopark Meratus",
   "Pariwisata",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477823-transformasi-pariwisata-kalsel-geopark-meratus-jadi-penggerak-ekonomi-banua"
 },
 {
  "slug": "kota-harga-saham-anjlok-23-klaim-tak-ada-info-baru",
  "category": "Aksi Korporasi",
  "title": "KOTA: Harga Saham [Anjlok] 23%, Klaim Tak Ada Info Baru",
  "deck": "Bursa meminta penjelasan setelah saham DMS Propertindo turun 23,29% dalam sepekan ke Rp56, disertai volume transaksi yang justru ikut menyusut.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "DMS Propertindo",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/68c9c82e50_06cce0b26d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "surplus-beras-kalsel-tembus-1-2-juta-ton-teratas-nasional",
  "category": "Industri",
  "title": "Surplus Beras Kalsel [Tembus] 1,2 Juta Ton, Teratas Nasional",
  "deck": "Surplus beras 1,2 juta ton mengantar Kalimantan Selatan ke peringkat pertama nasional pada Indeks Ketahanan Pangan 2025 dengan skor 81,98.",
  "date": "11 November 2026",
  "image": "assets/img/surplus-beras-kalsel-tembus-1-2-juta-ton-teratas-nasional.jpg",
  "imageV": "mwbxrw0m",
  "tags": [
   "kalimantan selatan",
   "kalsel",
   "muhidin",
   "ketahanan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477818-surplus-beras-tembus-12-juta-ton-kalsel-kokoh-jadi-salah-satu-lumbung-pangan-nasional"
 },
 {
  "slug": "admf-laporkan-realisasi-100-dana-sukuk-rp498-miliar",
  "category": "Aksi Korporasi",
  "title": "ADMF Laporkan Realisasi 100% [Dana] Sukuk Rp498 Miliar",
  "deck": "ADMF melaporkan ke OJK bahwa seluruh dana hasil Sukuk Mudharabah Berkelanjutan VI Tahap IV, Rp498,3 miliar, sudah terpakai 100 persen sesuai rencana, tanpa sisa dana.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "sukuk mudharabah",
   "pembiayaan konsumen",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0e12591dca_69166be619.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-obligasi-bold-9-desember-agenda-menyusul-25-november",
  "category": "Aksi Korporasi",
  "title": "RUPO Obligasi BOLD 9 Desember, [Agenda] Menyusul 25 November",
  "deck": "BOLD minta wali amanat BRI gelar RUPO Obligasi II BUMA 2024 pada 9 Desember 2026, agenda baru diumumkan lewat pemanggilan 25 November.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "BUMA",
   "RUPO",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ef48af942e_9f4e709aff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admf-rampungkan-realisasi-dana-obligasi-rp1-65-triliun",
  "category": "Aksi Korporasi",
  "title": "ADMF Rampungkan Realisasi Dana Obligasi [Rp1,65 Triliun]",
  "deck": "ADMF melaporkan seluruh dana Rp1,65 triliun dari Obligasi Berkelanjutan VII Tahap IV sudah terpakai 100 persen sesuai rencana, tanpa sisa dana.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "obligasi",
   "penggunaan dana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b79a035df1_a038849c09.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-konfirmasi-pengambilalihan-33-saham-oleh-pjs",
  "category": "Aksi Korporasi",
  "title": "ANDI Konfirmasi [Pengambilalihan] 33% Saham oleh PJS",
  "deck": "ANDI menjelaskan ke Bursa bahwa PT Puncak Jaya Sejahtera membeli 33 persen saham senilai Rp92,57 miliar dari APS dan CEP, menjadi pengendali baru tanpa penilaian independen atas harga transaksi.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "pengambilalihan",
   "kelapa sawit",
   "tender offer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2117e8719c_9ed5abbab1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intp-panggil-rupslb-direktur-utama-dan-komisaris-mundur",
  "category": "Aksi Korporasi",
  "title": "INTP Panggil RUPSLB, [Direktur Utama] dan Komisaris Mundur",
  "deck": "INTP memanggil RUPSLB pada 3 Desember 2026 untuk menetapkan pengganti Direktur Utama dan Komisaris yang telah mengundurkan diri.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTP",
   "RUPSLB",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/03f4c8ba8d_982f43842b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trgu-komisaris-independen-mundur-efektif-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "TRGU: [Komisaris Independen] Mundur, Efektif Usai RUPSLB",
  "deck": "PT Cerestar Indonesia Tbk (TRGU) menerima surat pengunduran diri Antonius selaku Komisaris Independen pada 9 November 2026, efektif setelah keputusan RUPSLB.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRGU",
   "Komisaris Independen",
   "Pengunduran Diri",
   "Cerestar Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7bfb3e2636_d6cc8404f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpri-batalkan-rupst-yang-dijadwalkan-26-november",
  "category": "Aksi Korporasi",
  "title": "CPRI [Batalkan] RUPST yang Dijadwalkan 26 November",
  "deck": "Capri Nusa Satu Properti membatalkan RUPST yang sedianya digelar 26 November 2026, hanya lima hari setelah pemanggilan resmi dikirim, tanpa jadwal pengganti.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPRI",
   "RUPST",
   "pembatalan rapat",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cf94d83413_b7ed022cc0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rgas-pinjamkan-rp25-miliar-ke-anak-usaha-pt-kian-santang",
  "category": "Aksi Korporasi",
  "title": "RGAS Pinjamkan [Rp25 Miliar] ke Anak Usaha PT Kian Santang",
  "deck": "Perseroan menyalurkan pinjaman modal kerja senilai Rp25 miliar ke anak usaha PT Kian Santang, setara 24,06 persen dari ekuitasnya.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RGAS",
   "transaksi material",
   "transaksi afiliasi",
   "pinjaman anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e04958cfd5_cdd606fa42.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-telkom-ubah-padi-umkm-jadi-marketplace-nasional",
  "category": "UMKM",
  "title": "Danantara-Telkom [Ubah] PaDi UMKM Jadi Marketplace Nasional",
  "deck": "Danantara dan Telkom mengembangkan Padisera, transformasi platform PaDi UMKM dari layanan B2B khusus BUMN menjadi marketplace nasional yang juga menyasar konsumen ritel.",
  "date": "11 November 2026",
  "image": "assets/img/danantara-telkom-ubah-padi-umkm-jadi-marketplace-nasional.jpg",
  "imageV": "mwbxrwlf",
  "tags": [
   "Padisera",
   "PaDi UMKM",
   "Danantara",
   "Telkom"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477789-danantara-dan-telkom-hadirkan-padisera-untuk-perkuat-ekosistem-perdagangan-digital-umkm"
 },
 {
  "slug": "iapi-gelar-sertifikasi-auditor-syariah-perdana",
  "category": "Perbankan",
  "title": "IAPI Gelar Sertifikasi [Auditor Syariah] Perdana",
  "deck": "IAPI menggelar pendidikan dan sertifikasi Certified Sharia Auditor pertama bagi 53 akuntan publik untuk memperkuat pemeriksaan kepatuhan dan tata kelola syariah.",
  "date": "11 November 2026",
  "image": "assets/img/iapi-gelar-sertifikasi-auditor-syariah-perdana.jpg",
  "imageV": "mwbxrx1k",
  "tags": [
   "syariah",
   "iapi",
   "akuntan publik",
   "sertifikasi auditor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477781-cara-dorong-tata-kelola-syariah-yang-efektif-lewat-pendidikan-dan-sertifikasi-auditor"
 },
 {
  "slug": "pemerintah-tetapkan-empat-agenda-digitalisasi-ekonomi-dan-keuangan",
  "category": "Teknologi",
  "title": "Pemerintah Tetapkan Empat Agenda [Digitalisasi] Ekonomi dan Keuangan",
  "deck": "Pemerintah menetapkan empat agenda digitalisasi ekonomi, dari efisiensi belanja negara lewat e-katalog hingga adopsi AI di sektor keuangan, saat ekonomi digital mendekati US$100 miliar.",
  "date": "11 November 2026",
  "image": "assets/img/server-data.jpg",
  "tags": [
   "transformasi digital",
   "AI",
   "e-katalog",
   "QRIS"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7210/wamenko-dradjad-transformasi-digital-harus-lebih-tepat-sasaran-efisien-dan-memiliki-akses-luas",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "rupo-ptpp-10-november-obligasi-restrukturisasi-bunga-ditolak",
  "category": "Aksi Korporasi",
  "title": "RUPO PTPP 10 November: [Obligasi] Restrukturisasi Bunga Ditolak",
  "deck": "Pemegang obligasi PTPP Seri B menolak dua opsi restrukturisasi bunga, termasuk penundaan pembayaran hingga 2027, dalam RUPO 10 November 2026.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "obligasi",
   "RUPO",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5095b56510_49f21af8ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-pemegang-sukuk-tolak-usulan-penundaan-bagi-hasil",
  "category": "Aksi Korporasi",
  "title": "PTPP: Pemegang Sukuk [Tolak] Usulan Penundaan Bagi Hasil",
  "deck": "RUPSu sukuk PTPP menolak seluruh usulan restrukturisasi bagi hasil ke-18 yang telat dibayar, dengan suara menolak hingga 98,26 persen pada salah satu usulan.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "sukuk",
   "RUPSu",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/360c301962_2636363437.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-panggil-rupst-kedua-usai-kuorum-pertama-gagal",
  "category": "Aksi Korporasi",
  "title": "MTFN Panggil RUPST Kedua usai [Kuorum] Pertama Gagal",
  "deck": "Rapat pertama Capitalinc Investment pada 6 November gagal kuorum, sehingga pemegang saham dipanggil lagi 18 November untuk membahas laporan tahunan, keputusan tanpa dividen, dan perpanjangan masa jabatan direksi-komisaris.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "RUPST",
   "Capitalinc Investment",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/701ea495ce_ec2560b5f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trading-vs-investasi-beda-waktu-biaya-dan-risiko",
  "category": "Pasar Modal",
  "title": "Trading vs Investasi: Beda Waktu, Biaya, dan [Risiko]",
  "deck": "Trading dan investasi sering dikira sama, padahal beda horizon waktu, biaya, dan risiko, penting diketahui investor baru saat IHSG anjlok 34,74 persen pada semester satu 2026.",
  "date": "11 November 2026",
  "image": "assets/img/trading-vs-investasi-beda-waktu-biaya-dan-risiko.jpg",
  "imageV": "mwbq4k92",
  "tags": [
   "trading",
   "investasi",
   "IHSG",
   "OJK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477763-apa-itu-trading-dan-apa-bedanya-dengan-investasi-ini-perbedaan-horizon-waktu-biaya-dan-risiko"
 },
 {
  "slug": "rupslb-giaa-6-november-rombak-direksi-komisaris-dikonfirmasi",
  "category": "Aksi Korporasi",
  "title": "RUPSLB GIAA 6 November: [Rombak] Direksi-Komisaris Dikonfirmasi",
  "deck": "Garuda Indonesia membenarkan RUPSLB 6 November 2026 mengubah susunan Direksi dan Komisaris, usulan pemegang Saham Seri A Dwiwarna yang mewakili negara.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "RUPSLB",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2a39a87629_67c95896a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peserta-jkn-tembus-285-7-juta-klaim-rp1-279-triliun",
  "category": "Bisnis",
  "title": "Peserta JKN Tembus [285,7] Juta, Klaim Rp1.279 Triliun",
  "deck": "BPJS Kesehatan mencatat lebih dari 285,7 juta peserta JKN per awal November 2026, dengan total klaim ke rumah sakit tembus Rp1.279 triliun sejak 2014 lewat iuran gotong royong peserta.",
  "date": "11 November 2026",
  "image": "assets/img/peserta-jkn-tembus-285-7-juta-klaim-rp1-279-triliun.jpg",
  "imageV": "mwbq4kq9",
  "tags": [
   "JKN",
   "BPJS Kesehatan",
   "gotong royong",
   "layanan kesehatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477746-program-jaminan-kesehatan-nasional-jadi-pahlawan-bagi-sesama"
 },
 {
  "slug": "pnm-luncurkan-kredit-perempuan-prasejahtera-8-di-batam",
  "category": "UMKM",
  "title": "PNM Luncurkan Kredit Perempuan Prasejahtera [8%] di Batam",
  "deck": "PNM meluncurkan kredit berbunga 8 persen bagi nasabah Mekaar di Batam untuk memperluas akses modal usaha ultra mikro perempuan prasejahtera.",
  "date": "11 November 2026",
  "image": "assets/img/pnm-luncurkan-kredit-perempuan-prasejahtera-8-di-batam.jpg",
  "imageV": "mwbq4l5w",
  "tags": [
   "PNM",
   "KPPS",
   "Mekaar",
   "Batam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477742-pnm-siapkan-kredit-perempuan-prasejahtera-8-perluas-peluang-usaha-perempuan-di-batam"
 },
 {
  "slug": "harga-emas-antam-turun-rp30-ribu-jadi-rp2-53-juta",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Rp30 Ribu Jadi Rp2,53 Juta",
  "deck": "Harga emas batangan Antam hari ini turun Rp30.000 menjadi Rp2.530.000 per gram, sementara harga buyback ikut melemah ke Rp2.338.000 per gram.",
  "date": "11 November 2026",
  "image": "assets/img/harga-emas-antam-turun-rp30-ribu-jadi-rp2-53-juta.jpg",
  "imageV": "mwbik2o8",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477734-saatnya-beli-harga-emas-antam-hari-ini-11-november-2026-turun-jadi-rp2530000-per-gram"
 },
 {
  "slug": "prtl-bagikan-dividen-interim-rp200-miliar-rp3-43-saham",
  "category": "Aksi Korporasi",
  "title": "PRTL Bagikan [Dividen] Interim Rp200 Miliar, Rp3,43/Saham",
  "deck": "Protelindo (PRTL) membagikan dividen interim Rp3,43 per saham atau total Rp200 miliar untuk tahun buku 2026, sesuai otorisasi RUPST kepada direksi.",
  "date": "11 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "dividen interim",
   "Protelindo",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7c59321b48_e5b7cbd6a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "resign-kerja-begini-cara-cairkan-jht-bpjs-ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "title": "Resign Kerja, Begini Cara [Cairkan] JHT BPJS Ketenagakerjaan",
  "deck": "Pekerja yang resign tetap bisa mencairkan saldo JHT BPJS Ketenagakerjaan, asal melewati masa tunggu satu bulan dan melengkapi syarat dokumen sesuai jumlah saldo.",
  "date": "11 November 2026",
  "image": "assets/img/resign-kerja-begini-cara-cairkan-jht-bpjs-ketenagakerjaan.jpg",
  "imageV": "mwb1euak",
  "tags": [
   "BPJS Ketenagakerjaan",
   "JHT",
   "resign",
   "JMO"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477683-baru-resign-mau-langsung-cairkan-bpjs-ketenagakerjaan-memang-bisa-ini-syarat-dan-caranya"
 },
 {
  "slug": "giaa-luncurkan-rights-issue-rp6-2-triliun-dilusi-37-9",
  "category": "Aksi Korporasi",
  "title": "GIAA Luncurkan Rights Issue Rp6,2 Triliun, [Dilusi] 37,9%",
  "deck": "Garuda menawarkan hingga 248,7 miliar saham baru seri E seharga Rp58-Rp68 per saham, dengan Danantara membayar mayoritas haknya pakai saham GMFI, bukan kas segar.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "rights issue",
   "Danantara",
   "GMFI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/461692c59d_0fca098a2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpdp-dorong-pasar-sawit-dan-umkm-di-pameran-ifbc-2026",
  "category": "UMKM",
  "title": "BPDP Dorong Pasar Sawit dan UMKM di Pameran [IFBC] 2026",
  "deck": "BPDP membuka booth promosi di pameran IFBC 2026 untuk mengenalkan potensi sawit, kelapa, dan kakao serta mendorong perluasan pasar UMKM berbasis komoditas tersebut.",
  "date": "10 November 2026",
  "image": "assets/img/bpdp-dorong-pasar-sawit-dan-umkm-di-pameran-ifbc-2026.jpg",
  "imageV": "mwb1eurk",
  "tags": [
   "BPDP",
   "kelapa sawit",
   "UMKM",
   "IFBC 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477678-bpdp-genjot-perluasan-pasar-kelapa-sawit-dan-umkm-lewat-ifbc-2026"
 },
 {
  "slug": "raja-teken-pinjaman-afiliasi-rp16-5-m-ke-anak-usaha-mui",
  "category": "Aksi Korporasi",
  "title": "RAJA Teken Pinjaman [Afiliasi] Rp16,5 M ke Anak Usaha MUI",
  "deck": "EHK memberi pinjaman Rp16,5 miliar berbunga 7,5 persen per tahun kepada MUI, dua anak usaha yang sama-sama dikendalikan RAJA, untuk mendanai operasional bisnis pipa gas MUI.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "Transaksi Afiliasi",
   "Pinjaman Antar Perusahaan",
   "Energasindo Heksa Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7ca16b61b0_4bd2010bd1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrme-dua-pemegang-saham-teken-ppjbs-jual-saham",
  "category": "Aksi Korporasi",
  "title": "HRME: Dua Pemegang Saham Teken [PPJBS] Jual Saham",
  "deck": "PT Wijaya Wisesa Realty dan PT Twin Investment menjual saham HRME ke PT Properti International Development, transaksi masih menunggu uji tuntas.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRME",
   "pemegang saham",
   "PPJBS",
   "due diligence"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/43d4aa45bf_ebd3f7978d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-salurkan-pinjaman-rp101-8-m-ke-anak-usaha-afiliasi",
  "category": "Aksi Korporasi",
  "title": "RAJA Salurkan Pinjaman Rp101,8 M ke Anak Usaha [Afiliasi]",
  "deck": "EHK, anak usaha RAJA, meminjamkan USD5,87 juta ke APE untuk mendanai operasional pengangkutan gas, berbunga 7,5 persen per tahun hingga akhir 2028.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "transaksi afiliasi",
   "EHK",
   "APE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a76b81475d_3b15f3a34f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-kucurkan-pinjaman-rp10-m-ke-anak-usaha-kmj",
  "category": "Aksi Korporasi",
  "title": "RAJA Kucurkan [Pinjaman] Rp10 M ke Anak Usaha KMJ",
  "deck": "RAJA menyalurkan pinjaman afiliasi Rp10 miliar ke anak usaha KMJ untuk danai bisnis gas pipa, bunga naik ke 8,6% begitu KMJ mulai berpendapatan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "transaksi afiliasi",
   "KMJ",
   "pinjaman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/574716cdb5_5b64fcec8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jelaskan-ke-bursa-rugi-9-bulan-rp75-7-miliar",
  "category": "Aksi Korporasi",
  "title": "BIKE Jelaskan ke Bursa, [Rugi] 9 Bulan Rp75,7 Miliar",
  "deck": "Penjelasan resmi BIKE ke BEI soal anjloknya total aset dan liabilitas lebih dari 20%, disertai laporan rugi Rp75,7 miliar untuk sembilan bulan pertama 2026.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "laporan keuangan",
   "rugi",
   "koreksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261110221828-65785-0/FinancialStatement-2026-III-BIKE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rights-issue-ultj-rp2-150-saham-kendali-ke-frieslandcampina",
  "category": "Aksi Korporasi",
  "title": "Rights Issue ULTJ Rp2.150/Saham: [Kendali] ke FrieslandCampina",
  "deck": "ULTJ mematok harga rights issue Rp2.150/saham, rasio 15.200:11.517, dana hingga Rp16,94 triliun, dan kendali beralih ke FrieslandCampina.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "rights issue",
   "Frisian Flag",
   "FrieslandCampina"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/834499b59b_bcb15b994d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-jelaskan-lonjakan-arus-kas-operasi-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "ARKO Jelaskan Lonjakan [Arus Kas] Operasi ke Bursa",
  "deck": "Arkora Hydro merespons permintaan penjelasan BEI soal arus kas operasi yang membengkak dan proyek PLTM Tomoni yang ditargetkan beroperasi kuartal I 2027.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "arus kas",
   "PLTM Tomoni"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a3b6170406_3006ba58e3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-bantah-konflik-kepentingan-kontrak-kementerian-klarifikasi",
  "category": "Aksi Korporasi",
  "title": "RANS Bantah Konflik Kepentingan Kontrak Kementerian [Klarifikasi]",
  "deck": "RANS merinci kontrak jasa influencer Rp14,7 miliar dengan Kemenbud dan KKP, serta membantah ada konflik kepentingan terkait posisi Raffi Ahmad sebagai Utusan Khusus Presiden.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "konflik kepentingan",
   "ICW",
   "jasa influencer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a5c9d536a8_3fe792df5c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-pinjaman-rp36-miliar-dari-pihak-ketiga-terungkap",
  "category": "Aksi Korporasi",
  "title": "SQMI: Pinjaman [Rp36 Miliar] dari Pihak Ketiga Terungkap",
  "deck": "Public expose tahunan SQMI mengungkap pinjaman Rp36 miliar dari Fandy Hartanto dan proses pengalihan kendali ke Maxglory Capital Limited yang masih menunggu restu pemegang saham.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "Wilton Makmur Indonesia",
   "Public Expose",
   "Maxglory Capital Limited"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9277afb1de_ed73ab83a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "itmg-catat-laba-us-167-5-juta-liabilitas-melonjak-24-6",
  "category": "Aksi Korporasi",
  "title": "ITMG Catat Laba US$167,5 Juta, Liabilitas [Melonjak] 24,6%",
  "deck": "Laba bersih sembilan bulan ITMG naik hampir 25 persen jadi US$167,5 juta, tapi arus kas operasi menyusut tajam dan ada utang bank jangka pendek baru untuk modal kerja anak usaha.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMG",
   "laporan keuangan",
   "batu bara",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261110211144-65708-0/FinancialStatement-2026-III-ITMG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipi-indotambang-perkasa-tambah-1-juta-saham-jadi-20-7",
  "category": "Aksi Korporasi",
  "title": "BIPI: Indotambang Perkasa [Tambah] 1 Juta Saham, Jadi 20,7%",
  "deck": "Afiliasi pengendali PT Indotambang Perkasa menambah 1 juta saham BIPI pada Oktober 2026, sementara saham publik berkurang setara jumlah itu.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPI",
   "Astrindo Nusantara Infrastruktur",
   "pemegang saham",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9f19582841_33547b1658.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-sabet-dua-penghargaan-transformasi-bisnis-dari-swa",
  "category": "BUMN",
  "title": "Telkom Sabet [Dua] Penghargaan Transformasi Bisnis dari SWA",
  "deck": "Telkom Indonesia meraih dua penghargaan dari Majalah SWA atas konsistensi transformasi bisnis lewat kerangka TLKM 30 yang berlaku hingga 2030.",
  "date": "10 November 2026",
  "image": "assets/img/telkom-sabet-dua-penghargaan-transformasi-bisnis-dari-swa.jpg",
  "imageV": "mwaw19bk",
  "tags": [
   "Telkom Indonesia",
   "BUMN",
   "TLKM 30",
   "Transformasi Bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477642-sabet-dua-penghargaan-bergengsi-telkom-perkuat-strategi-transformasi-bisnis-hingga-2030"
 },
 {
  "slug": "bei-delisting-obligasi-tdpm-dan-tele-usai-saham-dicabut",
  "category": "Aksi Korporasi",
  "title": "BEI Delisting Obligasi [TDPM] dan TELE Usai Saham Dicabut",
  "deck": "Bursa mencabut pencatatan lima obligasi TDPM dan TELE menyusul delisting saham kedua emiten pada 10 November 2026, tapi kewajiban bayar bunga dan pokok ke pemegang obligasi tetap berlaku.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TDPM",
   "TELE",
   "Delisting",
   "Obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3fdf526963_02fd9fdf86.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-mulai-susun-ripparnas-2027-2045-target-devisa-us-39-4-m",
  "category": "Makroekonomi",
  "title": "RI Mulai Susun [RIPPARNAS] 2027-2045, Target Devisa US$39,4 M",
  "deck": "Pemerintah memulai penyusunan RIPPARNAS 2027-2045 untuk mendorong investasi pariwisata, menargetkan kontribusi PDB 5 persen dan devisa US$39,4 miliar pada 2029.",
  "date": "10 November 2026",
  "image": "assets/img/terminal-bus.jpg",
  "tags": [
   "pariwisata",
   "RIPPARNAS",
   "investasi",
   "devisa"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7209/pemerintah-perkuat-investasi-dan-integrasi-ekosistem-pariwisata-melalui-ripparnas-20272045",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "lapd-resmi-ubah-nama-ke-jsi-sinergi-internasional-dan-alamat",
  "category": "Aksi Korporasi",
  "title": "LAPD Resmi Ubah Nama ke [JSI Sinergi Internasional] dan Alamat",
  "deck": "Leyand International resmi berganti nama menjadi JSI Sinergi Internasional efektif 7 November 2026, disertai pindah domisili ke Jakarta Selatan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "RUPSLB",
   "ganti nama",
   "JSI Sinergi Internasional"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/184fb24521_70b86001f3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-gabungkan-telkominfra-dan-nsi-perampingan-lanjut",
  "category": "BUMN",
  "title": "Telkom [Gabungkan] Telkominfra dan NSI, Perampingan Lanjut",
  "deck": "Telkom menggabungkan Telkominfra ke Telkom Akses dan NSI ke GSD, bagian dari rencana merampingkan puluhan anak usaha menuju status strategic holding sebelum akhir 2026.",
  "date": "10 November 2026",
  "image": "assets/img/telkom-gabungkan-telkominfra-dan-nsi-perampingan-lanjut.jpg",
  "imageV": "mwaqforn",
  "tags": [
   "Telkom",
   "Telkominfra",
   "Streamlining BUMN",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477629-percepat-streamlining-telkom-rampingkan-anak-usaha-lewat-dua-merger-sekaligus"
 },
 {
  "slug": "ptdu-rinci-proses-pkpu-ekuitas-negatif-rp7-75-miliar",
  "category": "Aksi Korporasi",
  "title": "PTDU Rinci Proses [PKPU], Ekuitas Negatif Rp7,75 Miliar",
  "deck": "PTDU menjawab 14 pertanyaan Bursa soal PKPU dari CV Titan senilai Rp1 miliar, sementara total klaim kreditur mencapai Rp132,9 miliar dari 122 pihak.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTDU",
   "PKPU",
   "ekuitas negatif",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bc4019f310_ffe9c4ae04.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nfcx-lapor-eksekusi-buyback-pertama-120-000-saham-di-rp1-800",
  "category": "Aksi Korporasi",
  "title": "NFCX Lapor Eksekusi [Buyback] Pertama, 120.000 Saham di Rp1.800",
  "deck": "PT NFC Indonesia Tbk melaporkan ke OJK bahwa pada 10 November 2026 perseroan membeli kembali 120.000 saham di harga Rp1.800 per saham, hari pertama eksekusi setelah rencana buyback direvisi.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NFCX",
   "buyback",
   "saham treasuri",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3467abd790_c2ac03458c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jelang-nataru-harga-bapok-di-solo-stabil-cabai-masih-mahal",
  "category": "Bisnis",
  "title": "Jelang Nataru, Harga Bapok di Solo [Stabil], Cabai Masih Mahal",
  "deck": "Pemantauan Kementerian Perdagangan di Pasar Gede Surakarta menunjukkan sebagian bapok di bawah harga acuan, tapi cabai dan gula pasir masih di atas batas yang ditetapkan.",
  "date": "10 November 2026",
  "image": "assets/img/jelang-nataru-harga-bapok-di-solo-stabil-cabai-masih-mahal.jpg",
  "imageV": "mwani7vm",
  "tags": [
   "Nataru",
   "Harga Pangan",
   "Surakarta",
   "Kementerian Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pastikan-stabilitas-harga-bapok-jelang-nataru-mendag-busan-pantau-pasar-gede",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kios-panggil-rupslb-kedua-usai-rapat-pertama-gagal-kuorum",
  "category": "Aksi Korporasi",
  "title": "KIOS Panggil [RUPSLB] Kedua usai Rapat Pertama Gagal Kuorum",
  "deck": "Setelah RUPSLB 27 Oktober gagal kuorum, Kioson memanggil rapat kedua 17 November untuk membahas perubahan direksi/komisaris dan penyesuaian KBLI.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIOS",
   "RUPSLB",
   "tata kelola perusahaan",
   "perubahan direksi komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6ea96c0098_44b6a100b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmhs-jadwalkan-rupslb-pada-17-desember-2026",
  "category": "Aksi Korporasi",
  "title": "BMHS Jadwalkan [RUPSLB] pada 17 Desember 2026",
  "deck": "Bundamedik (BMHS) mengumumkan rencana RUPSLB 17 Desember 2026, dengan batas pencatatan pemegang saham pada 24 November.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMHS",
   "RUPSLB",
   "Bundamedik",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6f6e8fce8f_06a974b786.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iiff-catatkan-obligasi-rp1-7-triliun-di-bei-mulai-11-november",
  "category": "Aksi Korporasi",
  "title": "IIFF Catatkan [Obligasi] Rp1,7 Triliun di BEI Mulai 11 November",
  "deck": "Tiga seri obligasi IIFF senilai total Rp1,7 triliun resmi dicatatkan di BEI pada 11 November 2026, berbunga 7,2 hingga 7,6 persen per tahun dengan peringkat AAA dari Fitch.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIFF",
   "obligasi",
   "BEI",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0dbbb98241_0ec4e236c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "skbm-jadwalkan-pembayaran-dividen-interim-30-november",
  "category": "Aksi Korporasi",
  "title": "SKBM Jadwalkan Pembayaran [Dividen] Interim 30 November",
  "deck": "Sekar Bumi akan membayar dividen interim Rp17,5 per saham pada 30 November 2026, dengan pemegang saham per 20 November sebagai penerima.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SKBM",
   "dividen interim",
   "Sekar Bumi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fc8593cdd1_27e906c64d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-alihkan-sisa-dana-rp424-8-m-ke-anak-usaha-lewat-pinjaman",
  "category": "Aksi Korporasi",
  "title": "PACK Alihkan Sisa Dana Rp424,8 M ke [Anak Usaha] Lewat Pinjaman",
  "deck": "PACK mengubah rencana penggunaan sisa dana rights issue Rp424,8 miliar, dari biaya operasional sendiri menjadi pinjaman tanpa bunga ke anak usaha di bisnis logam.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "rights issue",
   "penggunaan dana",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/877f48cbd7_59df85c375.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-tak-sesuaikan-waran-medc-meski-ada-dividen",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Tak Sesuaikan Waran [MEDC] Meski Ada Dividen",
  "deck": "RHB Sekuritas menegaskan tidak ada penyesuaian pada waran terstruktur MEDCDRCZ6A dan MEDCDRCH7A meski saham acuannya, MEDC, membagikan dividen tunai.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "MEDC",
   "waran terstruktur",
   "RHB Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b7e27bc214_ef52f24505.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-kdtn-direksi-lama-diangkat-ulang-komisaris-asing-batal",
  "category": "Aksi Korporasi",
  "title": "RUPSLB KDTN: Direksi Lama Diangkat Ulang, Komisaris Asing [Batal]",
  "deck": "RUPSLB KDTN mempertahankan direksi dan komisaris utama yang sama, sementara rencana komisaris dan dua direktur baru dari luar negeri batal karena belum lolos uji kelayakan OJK.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "RUPSLB",
   "Direksi Komisaris",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/994ef21617_f3c8ad0f76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-sajikan-ulang-lk-2024-ekuitas-susut-55-jadi-rp54-9-m",
  "category": "Aksi Korporasi",
  "title": "CASH Sajikan Ulang LK 2024, Ekuitas [Susut] 55% jadi Rp54,9 M",
  "deck": "Cashlez menerbitkan ulang laporan keuangan 2024 karena koreksi penyajian aset takberwujud, membuat total aset turun 28% dan ekuitas turun 55% dibanding versi sebelumnya.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez",
   "restatement laporan keuangan",
   "emiten teknologi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202411/20261110173130-65765-0/FinancialStatement-2024-Tahunan-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nfcx-revisi-buyback-incar-49-juta-saham-hingga-februari-2027",
  "category": "Aksi Korporasi",
  "title": "NFCX Revisi Buyback, Incar [49 Juta] Saham hingga Februari 2027",
  "deck": "PT NFC Indonesia Tbk mengoreksi pengumuman buyback 6 November, menegaskan rencana membeli kembali hingga 49 juta saham atau 7,35 persen modal disetor dalam tiga bulan mulai 9 November 2026.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NFCX",
   "buyback saham",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ec83db80fc_9d8a9e09ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-sajikan-ulang-lk-2023-ekuitas-susut-50-jadi-rp77-6-m-koreksi",
  "category": "Aksi Korporasi",
  "title": "CASH Sajikan Ulang LK 2023, Ekuitas Susut 50% jadi Rp77,6 M [Koreksi]",
  "deck": "Cashlez mengoreksi penyajian aset takberwujud sesuai PSAK 238, memangkas ekuitas 2023 dari Rp154,9 miliar jadi Rp77,6 miliar, koreksi ketiga dalam sepekan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "restatement",
   "laporan keuangan",
   "PSAK 238"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5dae374888_293438a1e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jeli-suntik-modal-rp130-miliar-ke-anak-usaha-nps",
  "category": "Aksi Korporasi",
  "title": "JELI Suntik [Modal] Rp130 Miliar ke Anak Usaha NPS",
  "deck": "PT Niramas Utama Tbk menyuntik modal Rp130 miliar ke anak usaha NPS untuk menambah modal kerja, sesuai rencana penggunaan dana IPO di prospektus.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JELI",
   "transaksi afiliasi",
   "IPO",
   "Niramas Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/232bb00aeb_da18f1bcbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnga-suntik-modal-slcapital-rp365-miliar-via-inbreng-npl",
  "category": "Aksi Korporasi",
  "title": "BNGA Suntik Modal SLCapital Rp365 Miliar via [Inbreng] NPL",
  "deck": "BNGA meningkatkan modal di anak usaha SLCapital dengan memindahkan portofolio kredit bermasalah Rp325,778 miliar dan aset kantor Rp39,5 miliar, sehingga kepemilikannya naik menjadi 99,9998%.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNGA",
   "CIMB Niaga",
   "SLCapital",
   "kredit macet"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b992a55f4f_f5dd13cc7f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jecx-liabilitas-turun-39-9-usai-lunasi-utang-bca-rp175-m",
  "category": "Aksi Korporasi",
  "title": "JECX: Liabilitas Turun 39,9% usai [Lunasi] Utang BCA Rp175 M",
  "deck": "Total liabilitas JECX turun 39,9% menjadi Rp384,98 miliar per September 2026, didorong pelunasan dipercepat utang bank ke BCA senilai Rp175 miliar dari dana IPO.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "liabilitas",
   "pelunasan utang",
   "IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/686262772e_f2281f544d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bcic-jadwalkan-rupslb-pada-17-desember-2026",
  "category": "Aksi Korporasi",
  "title": "BCIC Jadwalkan [RUPSLB] pada 17 Desember 2026",
  "deck": "Bank JTrust Indonesia (BCIC) akan menggelar RUPSLB pada 17 Desember 2026, dengan pemegang saham tercatat per 24 November 2026 yang berhak hadir.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BCIC",
   "RUPSLB",
   "Bank JTrust Indonesia",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/52a89d5b02_90da1aaf05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arab-saudi-percepat-tenggat-kontrak-dan-visa-haji-2027",
  "category": "Global",
  "title": "Arab Saudi [Percepat] Tenggat Kontrak dan Visa Haji 2027",
  "deck": "Arab Saudi meminta kantor urusan haji dari 76 negara menyelesaikan kontrak layanan dan visa Haji 2027 sebelum 1 Syawal, termasuk kesiapan medis jemaah.",
  "date": "10 November 2026",
  "image": "assets/img/arab-saudi-percepat-tenggat-kontrak-dan-visa-haji-2027.jpg",
  "imageV": "mwani8dq",
  "tags": [
   "haji 2027",
   "arab saudi",
   "visa haji",
   "1 syawal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477595-arab-saudi-percepat-persiapan-haji-2027-kontrak-dan-visa-jemaah-diminta-rampung-sebelum-1-syawal"
 },
 {
  "slug": "bike-koreksi-lagi-ekuitas-berbalik-ke-positif-rp8-98-m",
  "category": "Aksi Korporasi",
  "title": "BIKE Koreksi Lagi, [Ekuitas] Berbalik ke Positif Rp8,98 M",
  "deck": "Koreksi kedua BIKE membalik ekuitas interim per 30 September 2026 dari negatif Rp87,59 miliar jadi positif Rp8,98 miliar, setelah dana pinjaman PMJ dicatat ulang sebagai investasi, bukan beban.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "laporan keuangan",
   "suspensi saham",
   "PMJ"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/13c44ad196_224de7c258.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibc-gandeng-avesta-belgia-garap-baterai-solid-state",
  "category": "Industri",
  "title": "IBC Gandeng [Avesta] Belgia, Garap Baterai Solid-State",
  "deck": "IBC dan Avesta Holding dari Belgia menjajaki teknologi baterai solid-state, bagian dari upaya pemerintah menarik investasi Uni Eropa lewat IEU-CEPA.",
  "date": "10 November 2026",
  "image": "assets/img/ibc-gandeng-avesta-belgia-garap-baterai-solid-state.jpg",
  "imageV": "mwai7v11",
  "tags": [
   "IBC",
   "Avesta",
   "Baterai Solid-State",
   "Investasi Uni Eropa"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/menteri-rosan-dorong-investasi-uni-eropa-ibc-avesta-sepakati-kerja-sama-baterai",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "bkpm-buka-desk-investasi-di-medan-kejar-rp13-triliun",
  "category": "Makroekonomi",
  "title": "BKPM Buka Desk Investasi di Medan, Kejar [Rp13 Triliun]",
  "deck": "Kementerian Investasi/BKPM meluncurkan Desk Investasi Regional di Medan untuk mengawal realisasi investasi Rp13 triliun di Sumatera, menyusul proyek serupa di Batam dan Bali.",
  "date": "10 November 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "BKPM",
   "Desk Investasi",
   "Sumatera",
   "Realisasi Investasi"
  ],
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/wamen-todotua-desk-investasi-regional-targetkan-realisasi-rp100-triliun",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "esdm-libatkan-pemda-dalam-lelang-panas-bumi-dan-listrik-desa",
  "category": "Energi",
  "title": "ESDM Libatkan Pemda dalam Lelang [Panas Bumi] dan Listrik Desa",
  "deck": "Wamen ESDM Yuliot menyepakati pemda ikut jadi panitia lelang panas bumi, sembari memacu elektrifikasi 100 persen pada 2029 dan menuntaskan proyek PLTA di Kalimantan Utara.",
  "date": "10 November 2026",
  "image": "assets/img/esdm-libatkan-pemda-dalam-lelang-panas-bumi-dan-listrik-desa.jpg",
  "imageV": "mwai7xmq",
  "tags": [
   "ESDM",
   "Energi Terbarukan",
   "Panas Bumi",
   "Elektrifikasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/bahas-ketahanan-energi-dengan-dpd-ri-wamen-esdm-perkuat-peran-daerah-dalam-percepatan-ebt",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ekspor-batu-bara-sawit-ferro-alloy-wajib-lewat-dsi-2027",
  "category": "Industri",
  "title": "Ekspor Batu Bara, Sawit, Ferro Alloy Wajib Lewat [DSI] 2027",
  "deck": "Mulai 1 Januari 2027, ekspor batu bara, sawit, dan ferro alloy wajib melalui Danantara Sumberdaya Indonesia sebagai perantara tunggal, meski eksportir tetap bisa bernegosiasi langsung dengan buyer.",
  "date": "10 November 2026",
  "image": "assets/img/ekspor-batu-bara-sawit-ferro-alloy-wajib-lewat-dsi-2027.jpg",
  "imageV": "mwai857x",
  "tags": [
   "ekspor SDA strategis",
   "Danantara Sumberdaya Indonesia",
   "Kementerian Perdagangan",
   "Eksportir Terdaftar"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kebijakan-tata-kelola-ekspor-sda-akan-berlaku-mendag-busan-tekankan-aktivitas-ekspor-tetap-sama",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "heli-rencanakan-akuisisi-60-saham-pear-rp14-4-miliar",
  "category": "Aksi Korporasi",
  "title": "HELI Rencanakan [Akuisisi] 60% Saham PEAR Rp14,4 Miliar",
  "deck": "HELI akan membeli 60 persen saham PT Putra Elang Angkasaraya senilai Rp14,4 miliar dari PT Multi Angkasa Indonesia, menunggu persetujuan RUPSLB 17 Desember 2026.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HELI",
   "akuisisi",
   "transaksi material",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/77776d7983_697a004e35.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-koreksi-lk-2023-ketiga-kali-liabilitas-melonjak-83",
  "category": "Aksi Korporasi",
  "title": "CASH Koreksi LK 2023 Ketiga Kali, Liabilitas [Melonjak] 83%",
  "deck": "Cashlez merevisi laporan keuangan 2023 untuk ketiga kalinya dalam sepekan, dengan total liabilitas melonjak 83 persen jadi Rp74,9 miliar akibat pinjaman baru dan utang pembelian barang.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "laporan keuangan",
   "restatement",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202311/20261110163457-65775-0/FinancialStatement-2023-Tahunan-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amag-free-float-11-12-kejar-syarat-15-sampai-2029",
  "category": "Aksi Korporasi",
  "title": "AMAG: [free float] 11,12%, kejar syarat 15% sampai 2029",
  "deck": "Public expose AMAG mengungkap porsi saham publik baru 11,12%, masih di bawah syarat baru 15%, dan menegaskan tidak akan melanjutkan buyback saham.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAG",
   "free float",
   "public expose",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f95535e904_de930bf61b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jaya-laba-bersih-melonjak-296-persen-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "JAYA: Laba Bersih [Melonjak] 296 Persen di Semester I 2026",
  "deck": "Laba bersih JAYA naik hampir empat kali lipat pada semester I 2026 seiring pendapatan yang melonjak, tapi utang sewa pembiayaan juga naik tajam untuk perluasan armada.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAYA",
   "laporan keuangan",
   "transportasi dan logistik",
   "sewa pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261110162401-65784-0/FinancialStatement-2026-II-JAYA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-rp17-5-triliun-beli-saham-aadi-adro-dari-asi-afiliasi",
  "category": "Aksi Korporasi",
  "title": "SRTG Rp17,5 Triliun: Beli Saham AADI-ADRO dari ASI [Afiliasi]",
  "deck": "SRTG membeli 838,46 juta saham AADI dan 3,68 miliar saham ADRO milik ASI senilai total Rp17,5 triliun, transaksi afiliasi penyederhanaan struktur kepemilikan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "AADI",
   "ADRO",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bf0ba7b34c_06993673d1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-koreksi-lagi-akuisisi-tambang-batu-bara-86-juta-ton",
  "category": "Aksi Korporasi",
  "title": "BIKE [Koreksi] Lagi, Akuisisi Tambang Batu Bara 86 Juta Ton",
  "deck": "Anak usaha BIKE, PT Prambanan Nusantara Energi, akuisisi 45% saham tambang batu bara PT Sumber Bara Abadi seluas 4.909 hektare, lewat koreksi laporan ketiga BIKE dalam sebulan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi tambang",
   "koreksi laporan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5f8916bedc_444122f051.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-catatkan-obligasi-dan-sukuk-rp1-2-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "RAJA Catatkan [Obligasi] dan Sukuk Rp1,2 Triliun di BEI",
  "deck": "Rukun Raharja mencatatkan obligasi dan sukuk wakalah tahap I senilai total Rp1,2 triliun di BEI mulai 11 November 2026, dengan kupon 8,5-9 persen dan tenor tiga sampai lima tahun.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "obligasi korporasi",
   "sukuk wakalah",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c4a51afa6c_4bcd947a80.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-bidik-rampungkan-divestasi-3-anak-usaha-awal-2027",
  "category": "Aksi Korporasi",
  "title": "MTFN Bidik Rampungkan [Divestasi] 3 Anak Usaha Awal 2027",
  "deck": "Dalam public expose tahunan, manajemen MTFN memaparkan rencana divestasi tiga anak usaha rampung kuartal I 2027 di tengah ekuitas negatif Rp538,7 miliar, sambil mengklaim margin usaha membaik.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bef433d300_b724233ec2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heli-terbitkan-83-3-juta-saham-baru-tanpa-hmetd-danai-pear",
  "category": "Aksi Korporasi",
  "title": "HELI Terbitkan [83,3 Juta] Saham Baru Tanpa HMETD, Danai PEAR",
  "deck": "HELI berencana menerbitkan hingga 83,3 juta saham baru tanpa HMETD untuk mendanai akuisisi PT Putra Elang Angkasaraya, menanti RUPSLB 17 Desember 2026.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HELI",
   "Penambahan Modal",
   "PMTHMETD",
   "Akuisisi PEAR"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e7aa32543b_399c068955.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-bentuk-anak-usaha-isd-rencana-inbreng-bt-berlanjut",
  "category": "Aksi Korporasi",
  "title": "NAYZ Bentuk Anak Usaha ISD, Rencana [Inbreng] BT Berlanjut",
  "deck": "NAYZ menjelaskan ke Bursa bahwa anak usaha baru ISD belum punya studi kelayakan dan izin usaha, sementara rencana suntik aset BT lewat rights issue masih menunggu RUPSLB.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "Hassana Boga Sejahtera",
   "rights issue",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/618465354f_48df098b5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adro-asi-alihkan-48-77-saham-ke-empat-investor",
  "category": "Aksi Korporasi",
  "title": "ADRO: ASI Alihkan [48,77%] Saham ke Empat Investor",
  "deck": "PT Adaro Strategic Investments mengalihkan seluruh 48,77 persen sahamnya di Alamtri Resources ke empat pihak lewat pasar negosiasi BEI, tanpa mengubah pengendalian perusahaan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADRO",
   "Alamtri Resources",
   "pengalihan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1ef3bf66ee_d84b5ee50a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-asi-alihkan-41-1-saham-ke-empat-pihak-afiliasi",
  "category": "Aksi Korporasi",
  "title": "AADI: ASI Alihkan 41,1% Saham ke Empat Pihak [Afiliasi]",
  "deck": "PT Adaro Strategic Investments mengalihkan seluruh 41,0965% sahamnya di AADI ke empat perusahaan lewat pasar negosiasi BEI, tanpa mengubah pengendalian perseroan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AADI",
   "Adaro Andalan Indonesia",
   "pengalihan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6d65008db0_e32df9f752.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcpi-entitas-anak-galangan-kapal-modal-disetor-rp25-miliar",
  "category": "Aksi Korporasi",
  "title": "TCPI [Entitas Anak] Galangan Kapal, Modal Disetor Rp25 Miliar",
  "deck": "Transcoal Pacific mendirikan anak usaha galangan kapal dengan modal disetor Rp25 miliar, menguasai 99% saham bersama PT Trans Energi Logistik.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCPI",
   "entitas anak",
   "galangan kapal",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2b97b8aa29_a3f0a778f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "skyb-resmi-delisting-dari-bei-gabung-17-emiten-lain",
  "category": "Aksi Korporasi",
  "title": "SKYB Resmi [Delisting] dari BEI, Gabung 17 Emiten Lain",
  "deck": "Bursa Efek Indonesia resmi mencabut status SKYB sebagai perusahaan tercatat per 10 November 2026 akibat forced delisting dan go private, bersama 17 emiten lain termasuk Sri Rejeki Isman (SRIL).",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SKYB",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/aa7966b762_3840ec07e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psdn-bukukan-laba-rp46-2-miliar-liabilitas-turun-29",
  "category": "Aksi Korporasi",
  "title": "PSDN Bukukan Laba Rp46,2 Miliar, [Liabilitas] Turun 29%",
  "deck": "Laporan kuartal III Prasidha Aneka Niaga menunjukkan laba Rp46,2 miliar setelah penjualan aset di Lampung, sementara total liabilitas turun 29,3 persen menjadi Rp84,2 miliar.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSDN",
   "Prasidha Aneka Niaga",
   "Laporan Keuangan",
   "Liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261110150901-65782-0/FinancialStatement-2026-III-PSDN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sugi-resmi-kena-delisting-dari-bei-efektif-10-november",
  "category": "Aksi Korporasi",
  "title": "SUGI Resmi Kena [Delisting] dari BEI, Efektif 10 November",
  "deck": "Bursa Efek Indonesia mencabut status perusahaan tercatat Sugih Energy Tbk (SUGI) mulai 10 November 2026, bersama 17 emiten lain, setelah sahamnya lama disuspensi.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUGI",
   "delisting",
   "BEI",
   "Sugih Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/564ff5d881_94ede5a14c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-terbitkan-54-3-juta-saham-baru-dari-konversi-utang",
  "category": "Aksi Korporasi",
  "title": "WSBP Terbitkan [54,3 Juta] Saham Baru dari Konversi Utang",
  "deck": "WSBP akan menerbitkan 54,3 juta saham baru pada 18 November 2026 sebagai konversi utang tahap VII, dengan harga konversi Rp50,81 per saham.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "PMTHMETD",
   "konversi utang",
   "Waskita Beton Precast"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0156544c51_ba78cc487b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-vto-astra-international-pangkas-free-float-ke-15-05",
  "category": "Aksi Korporasi",
  "title": "AUTO: [VTO] Astra International Pangkas Free Float ke 15,05%",
  "deck": "Public expose AUTO membahas laba 9M 2026 naik 14,7% dan tender offer Astra International yang menekan saham publik ke 15,05%, pas di atas syarat minimum bursa.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "VTO",
   "Astra Otoparts",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b22aab9a62_1685846a01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ssms-laba-naik-71-jadi-rp1-75-t-aset-melonjak-37-7",
  "category": "Aksi Korporasi",
  "title": "SSMS: Laba Naik 71% jadi Rp1,75 T, [Aset] Melonjak 37,7%",
  "deck": "Sawit Sumbermas Sarana (SSMS) membukukan laba Rp1,75 triliun pada sembilan bulan 2026, naik 71 persen, didorong kenaikan pendapatan dan lonjakan aset akibat aturan penahanan devisa ekspor.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSMS",
   "laporan keuangan",
   "sawit",
   "devisa hasil ekspor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261110141414-65779-0/FinancialStatement-2026-III-SSMS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heli-gelar-rupslb-17-desember-agenda-perlu-suara-independen",
  "category": "Aksi Korporasi",
  "title": "HELI Gelar RUPSLB 17 Desember, Agenda Perlu Suara [Independen]",
  "deck": "PT Jaya Trishindo Tbk (HELI) akan menggelar RUPSLB pada 17 Desember 2026, dengan satu agenda yang membutuhkan persetujuan Pemegang Saham Independen.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HELI",
   "RUPSLB",
   "Jaya Trishindo",
   "pemegang saham independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ef88b7938b_90b04380fd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-salurkan-1-5-juta-benih-ikan-dan-udang-ke-pembudidaya",
  "category": "UMKM",
  "title": "KKP Salurkan [1,5 Juta] Benih Ikan dan Udang ke Pembudidaya",
  "deck": "KKP membagikan benih ikan dan udang ke kelompok pembudidaya di 27 lokasi, sebagian dilepas ke alam untuk menambah stok ikan lokal.",
  "date": "10 November 2026",
  "image": "assets/img/kkp-salurkan-1-5-juta-benih-ikan-dan-udang-ke-pembudidaya.jpg",
  "imageV": "mwaboi7e",
  "tags": [
   "KKP",
   "budidaya perikanan",
   "benih ikan",
   "restocking"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-salurkan-benih-ikan-dan-udang-untuk-pembudidaya-dan-restocking-selama-bulan-bakti-kelautan-dan-perikanan-BPDJ.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "300-umkm-jatim-dibekali-standar-mutu-demi-tembus-ekspor",
  "category": "UMKM",
  "title": "300 UMKM Jatim Dibekali [Standar] Mutu demi Tembus Ekspor",
  "deck": "Kemendag melatih sekitar 300 pelaku UMKM di Banyuwangi, Bondowoso, dan Situbondo soal standar mutu agar produknya siap menembus pasar ekspor.",
  "date": "10 November 2026",
  "image": "assets/img/300-umkm-jatim-dibekali-standar-mutu-demi-tembus-ekspor.jpg",
  "imageV": "mwabokdx",
  "tags": [
   "UMKM",
   "Ekspor",
   "Jawa Timur",
   "Standardisasi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-umkm-jawa-timur-tembus-pasar-global-kemendag-perkuat-mutu-dan-standardisasi-produk",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pdpp-panggil-rupslb-ubah-susunan-dewan-komisaris",
  "category": "Aksi Korporasi",
  "title": "PDPP Panggil RUPSLB Ubah Susunan [Dewan Komisaris]",
  "deck": "RUPSLB PT Primadaya Plastisindo digelar 2 Desember 2026 untuk mengganti susunan Dewan Komisaris, pemegang saham per 9 November berhak hadir.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PDPP",
   "RUPSLB",
   "Dewan Komisaris",
   "Primadaya Plastisindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6876b2d7c4_45fb6c0ddc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atla-komisaris-rudi-sutantra-lepas-10-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "ATLA: Komisaris Rudi Sutantra [Lepas] 10 Juta Saham Lewat Repo",
  "deck": "Komisaris ATLA Rudi R Sutantra melepas 10 juta saham lewat mekanisme repurchase agreement pada Rp17 per saham, hak suaranya turun dari 40,49% menjadi 40,33%.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATLA",
   "komisaris",
   "kepemilikan saham",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10112026-2691-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "doss-klarifikasi-lonjakan-saham-pemegang-utama-tanpa-rencana-jual",
  "category": "Aksi Korporasi",
  "title": "DOSS Klarifikasi Lonjakan Saham, Pemegang Utama Tanpa [Rencana] Jual",
  "deck": "Menjawab permintaan Bursa Efek Indonesia soal volatilitas transaksi, DOSS menyatakan tak mengetahui informasi material dan pemegang saham utama memastikan tak berniat mengubah kepemilikan sahamnya.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOSS",
   "volatilitas saham",
   "keterbukaan informasi",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e441e7c609_8fa9818f56.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "halo-direksi-beli-saham-hak-suara-naik-ke-1-158",
  "category": "Aksi Korporasi",
  "title": "HALO: Direksi [Beli] Saham, Hak Suara Naik ke 1,158%",
  "deck": "Direksi PT Haloni Jane Tbk, Juliana, menambah kepemilikan saham perseroan sebanyak 394.900 lembar lewat tiga transaksi pembelian pada 5-6 November 2026, senilai sekitar Rp18,4 juta.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO",
   "Haloni Jane",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10112026-6239-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koka-jadwalkan-rupslb-18-desember-dps-tutup-25-november",
  "category": "Aksi Korporasi",
  "title": "KOKA Jadwalkan [RUPSLB] 18 Desember, DPS Tutup 25 November",
  "deck": "Koka Indonesia akan menggelar RUPSLB pada 18 Desember 2026, dengan pemegang saham yang tercatat hingga 25 November 2026 berhak hadir dan memberi suara.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOKA",
   "RUPSLB",
   "pemegang saham",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1f2c8bf8c5_adaaefe10f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suri-direksi-imelda-lin-tambah-saham-jadi-490-000-lembar",
  "category": "Aksi Korporasi",
  "title": "SURI: Direksi Imelda Lin [Tambah] Saham, Jadi 490.000 Lembar",
  "deck": "Direksi PT Maja Agung Latexindo Tbk, Imelda Lin, membeli 290.000 saham SURI dalam tiga transaksi awal November 2026, menggandakan kepemilikannya meski porsinya tetap kecil.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SURI",
   "Maja Agung Latexindo",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10112026-6963-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "halo-komisaris-beli-250-000-saham-hak-suara-ke-0-08",
  "category": "Aksi Korporasi",
  "title": "HALO: [Komisaris] Beli 250.000 Saham, Hak Suara ke 0,08%",
  "deck": "Dewan Komisaris HALO, Imelda Lin, membeli 250.000 saham perusahaan secara tidak langsung dalam empat transaksi pada 2-4 November 2026, menaikkan hak suaranya ke 0,08 persen.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10112026-4641-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-bahas-24-dari-25-bidang-aksesi-oecd",
  "category": "Makroekonomi",
  "title": "Indonesia Bahas [24] dari 25 Bidang Aksesi OECD",
  "deck": "Rapat koordinasi tim nasional digelar menjelang kunjungan Sekjen OECD, dengan pembahasan teknis sudah berjalan di 24 dari 25 bidang menuju target rampung 2028.",
  "date": "10 November 2026",
  "image": "assets/img/jalan-tol-konstruksi.jpg",
  "tags": [
   "OECD",
   "Airlangga Hartarto",
   "aksesi OECD",
   "reformasi regulasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7208/menko-airlangga-ajak-menteri-dan-kepala-lembaga-perkuat-komitmen-indonesia-untuk-percepat-proses-aksesi-oecd",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-tawarkan-empat-blok-migas-baru-di-papua-hingga-ntt",
  "category": "Energi",
  "title": "Pemerintah [Tawarkan] Empat Blok Migas Baru di Papua hingga NTT",
  "deck": "ESDM menetapkan empat wilayah kerja migas di Papua, Papua Barat Daya, Laut Arafuru, dan NTT sebagai status Available, terbuka bagi investor lewat penawaran langsung.",
  "date": "10 November 2026",
  "image": "assets/img/pemerintah-tawarkan-empat-blok-migas-baru-di-papua-hingga-ntt.jpg",
  "imageV": "mwa5az6h",
  "tags": [
   "migas",
   "ESDM",
   "investasi hulu migas",
   "wilayah kerja"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/tingkatkan-investasi-dan-eksplorasi-hulu-migas-pemerintah-tawarkan-empat-wilayah-kerja-available",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "penjualan-eceran-oktober-diprakirakan-naik-1-persen",
  "category": "Makroekonomi",
  "title": "Penjualan Eceran Oktober Diprakirakan [Naik] 1 Persen",
  "deck": "Bank Indonesia memperkirakan penjualan eceran Oktober 2026 tumbuh 1 persen dibanding tahun sebelumnya, ditopang penjualan bahan bakar kendaraan serta makanan dan minuman.",
  "date": "10 November 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "penjualan eceran",
   "Bank Indonesia",
   "inflasi",
   "konsumsi rumah tangga"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "avia-panggil-rupslb-bahas-penghapusan-saham-treasuri",
  "category": "Aksi Korporasi",
  "title": "AVIA Panggil RUPSLB, Bahas Penghapusan Saham [Treasuri]",
  "deck": "AVIA memanggil RUPSLB 2 Desember 2026 untuk menyetujui penghapusan seluruh saham treasuri lewat pengurangan modal disetor.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "RUPSLB",
   "saham treasuri",
   "pengurangan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3f8b8f2c6d_2efbc5ccdb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-jadi-rp2-560-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] Jadi Rp2.560.000 per Gram",
  "deck": "Harga emas batangan Antam naik Rp15.000 menjadi Rp2.560.000 per gram pada 10 November 2026, sementara harga buyback ikut naik ke Rp2.375.000 per gram.",
  "date": "10 November 2026",
  "image": "assets/img/harga-emas-antam-naik-jadi-rp2-560-000-per-gram.jpg",
  "imageV": "mwa5azny",
  "tags": [
   "antam",
   "harga emas",
   "buyback emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477514-harga-emas-antam-hari-ini-10-november-2026-terpantau-naik-jadi-rp2560000-per-gram-buyback-ikut-melonjak"
 },
 {
  "slug": "masb-direksi-fely-retnowati-tambah-saham-jadi-298-300-lembar",
  "category": "Aksi Korporasi",
  "title": "MASB: Direksi Fely Retnowati [tambah] saham jadi 298.300 lembar",
  "deck": "Direksi MASB membeli 800 lembar saham secara tidak langsung pada 9 November, kepemilikannya naik jadi 298.300 lembar, hak suara tetap 0,02 persen.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MASB",
   "Bank Multiarta Sentosa",
   "Fely Retnowati",
   "kepemilikan saham direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10112026-5142-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-laba-9-bulan-naik-31-kuasi-reorganisasi-hapus-defisit",
  "category": "Aksi Korporasi",
  "title": "BWPT Laba 9 Bulan Naik 31%, [Kuasi Reorganisasi] Hapus Defisit",
  "deck": "Laporan keuangan interim BWPT per September 2026 menunjukkan pendapatan naik 28 persen dan laba bersih naik 31 persen, sementara reorganisasi akuntansi menghapus defisit Rp3,7 triliun.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "kelapa sawit",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261110091630-65778-0/FinancialStatement-2026-III-BWPT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "skbm-bagikan-dividen-interim-rp17-5-per-saham",
  "category": "Aksi Korporasi",
  "title": "SKBM Bagikan [Dividen] Interim Rp17,5 per Saham",
  "deck": "Sekar Bumi menetapkan dividen interim Rp17,5 per saham atau total Rp30,3 miliar untuk tahun buku 2026, menyusul kinerja laba yang membaik.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SKBM",
   "dividen interim",
   "Sekar Bumi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0c358f46b0_cfcf231cfb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgka-bagikan-dividen-interim-rp100-per-saham",
  "category": "Aksi Korporasi",
  "title": "TGKA Bagikan Dividen [Interim] Rp100 per Saham",
  "deck": "Tigaraksa Satria menjadwalkan dividen interim Rp91,85 miliar atau Rp100 per saham, dibayar 30 November 2026.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGKA",
   "dividen interim",
   "Tigaraksa Satria",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/080c0abf91_388159d44f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idea-resmi-dikuasai-nawasena-tender-wajib-menyusul",
  "category": "Aksi Korporasi",
  "title": "IDEA Resmi Dikuasai [Nawasena], Tender Wajib Menyusul",
  "deck": "Nawasena Nugra Investama rampung mengambil alih 66,58% saham IDEA senilai Rp38 miliar dari pemegang saham lama, memicu kewajiban tender offer.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDEA",
   "Nawasena Nugra Investama",
   "pengambilalihan",
   "tender offer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/718ecfb4bc_79c284b96b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbto-jadwalkan-rupslb-agendakan-pergantian-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "MBTO Jadwalkan RUPSLB, Agendakan [Pergantian] Direksi-Komisaris",
  "deck": "Martina Berto (MBTO) akan menggelar RUPSLB pada 17 Desember 2026 untuk menyetujui perubahan susunan Direksi dan Dewan Komisaris Perseroan.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBTO",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ff67615a62_bc56cf72b8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-tdpm-resmi-di-delisting-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "Saham TDPM Resmi Di-[Delisting] BEI per 10 November 2026",
  "deck": "Bursa Efek Indonesia menghapus pencatatan saham TDPM bersama 17 emiten lain, efektif 10 November 2026, akibat forced delisting dan go private.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TDPM",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/923d0b1a96_27fabec0a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tele-delisting-saham-resmi-dicabut-dari-bei-10-november",
  "category": "Aksi Korporasi",
  "title": "TELE [Delisting]: Saham Resmi Dicabut dari BEI 10 November",
  "deck": "Bursa menghapus pencatatan saham TELE mulai 10 November 2026 akibat forced delisting dan proses go private, bersama 17 emiten lain yang dicabut serentak.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TELE",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4dd734a609_9c10a38892.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-panggil-rups-kedua-16-november-agenda-3-tahun-buku",
  "category": "Aksi Korporasi",
  "title": "BOSS Panggil RUPS [Kedua] 16 November, Agenda 3 Tahun Buku",
  "deck": "Setelah rapat pertama gagal kuorum, BOSS memanggil RUPST dan RUPSLB kedua pada 16 November 2026 untuk meratifikasi laporan tiga tahun buku sekaligus dan menyesuaikan anggaran dasar.",
  "date": "10 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS",
   "Tata Kelola",
   "Batu Bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c206fdd991_4b34d9d1db.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-resmi-delisting-saham-sril-mulai-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "BEI Resmi [Delisting] Saham SRIL Mulai 10 November 2026",
  "deck": "Bursa Efek Indonesia mencabut status tercatat Sri Rejeki Isman (SRIL) efektif 10 November 2026 karena forced delisting dan go private.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRIL",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3456c61142_27d261efb9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cowl-resmi-delisting-dari-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "COWL Resmi [Delisting] dari BEI per 10 November 2026",
  "deck": "BEI resmi delisting saham COWL efektif 10 November 2026 karena forced delisting dan go private, bersama 17 emiten lain yang juga dihapus dari pencatatan bursa.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COWL",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ba108abcd6_e35993ed32.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lcgp-resmi-delisting-dari-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "LCGP Resmi [Delisting] dari BEI per 10 November 2026",
  "deck": "Bursa Efek Indonesia mencabut status tercatat PT Eureka Prima Jakarta Tbk (LCGP) akibat forced delisting dan go private, bersama 17 emiten lain dalam satu pengumuman.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LCGP",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/80bc8cc31f_d1176fe971.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plas-resmi-delisting-dari-bei-gabung-17-emiten-lain",
  "category": "Aksi Korporasi",
  "title": "PLAS Resmi [Delisting] dari BEI, Gabung 17 Emiten Lain",
  "deck": "Bursa Efek Indonesia menghapus pencatatan saham PLAS efektif 10 November 2026 karena forced delisting dan go private, bersama 17 emiten lain yang disuspensi lama.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLAS",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/913d831c50_17870684c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toys-resmi-delisting-dari-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "TOYS Resmi [Delisting] dari BEI per 10 November 2026",
  "deck": "BEI mencabut status tercatat saham TOYS efektif 10 November 2026 akibat forced delisting dan go private, bagian dari 18 emiten yang didelisting bersamaan.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOYS",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2f8586cd52_a9fc19b056.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unit-resmi-delisting-dari-bei-mulai-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "UNIT resmi [delisting] dari BEI mulai 10 November 2026",
  "deck": "Bursa Efek Indonesia mencabut status PT Nusantara Inti Corpora Tbk (UNIT) sebagai perusahaan tercatat akibat forced delisting dan go private.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNIT",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/033391f130_4c2c82add7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lmas-kena-delisting-paksa-bei-efektif-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "LMAS Kena [Delisting] Paksa BEI, Efektif 10 November 2026",
  "deck": "BEI resmi mencabut status perusahaan tercatat LMAS beserta 17 emiten lain, efektif 10 November 2026, setelah saham disuspensi lebih dari 24 bulan tanpa tanda pemulihan.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LMAS",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9bab99186e_cd4c8e15bd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tril-didelisting-bei-efektif-10-november-jadi-go-private",
  "category": "Aksi Korporasi",
  "title": "TRIL Didelisting BEI, Efektif 10 November jadi [Go Private]",
  "deck": "Bursa Efek Indonesia mencabut status TRIL sebagai perusahaan tercatat mulai 10 November 2026, bagian dari forced delisting dan go private atas 18 emiten sekaligus.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIL",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b693f70da1_e4cc622b76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppom-mui-ajak-4-525-pelajar-kenal-ekosistem-halal",
  "category": "Bisnis",
  "title": "LPPOM MUI [Ajak] 4.525 Pelajar Kenal Ekosistem Halal",
  "deck": "LPPOM MUI menggelar Gen Halal Championship 2026 yang diikuti 4.525 pelajar SMA/SMK/MA, termasuk non-Muslim, untuk mengenalkan ekosistem halal sejak dini.",
  "date": "9 November 2026",
  "image": "assets/img/lppom-mui-ajak-4-525-pelajar-kenal-ekosistem-halal.jpg",
  "imageV": "mw9gmc8i",
  "tags": [
   "halal",
   "LPPOM MUI",
   "Gen Halal Championship",
   "ekonomi syariah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477448-edukasi-halal-tak-cukup-untuk-orang-dewasa-lppom-mui-sasar-ribuan-pelajar-lewat-kompetisi-berbasis-nasional"
 },
 {
  "slug": "wmuu-minta-pemegang-saham-fisik-tukar-sks-ke-elektronik-sebelum-2030",
  "category": "Aksi Korporasi",
  "title": "WMUU Minta Pemegang Saham Fisik Tukar SKS ke [Elektronik] Sebelum 2030",
  "deck": "WMUU mengumumkan proses dematerialisasi saham fisik. Pemegang Surat Kolektif Saham diminta menukarkan sertifikat ke Datindo Entrycom sebelum 6 Mei 2030.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WMUU",
   "dematerialisasi saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/dde1082a54_06eef4bdf2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goll-resmi-delisting-dari-bei-efektif-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "GOLL Resmi [Delisting] dari BEI, Efektif 10 November 2026",
  "deck": "Bursa Efek Indonesia menghapus pencatatan saham GOLL mulai 10 November 2026 karena forced delisting dan go private, bagian dari 18 emiten yang didelisting bersamaan.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOLL",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/583b1aac8d_62c0b5de2e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-resmi-delisting-saham-duck-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "BEI Resmi [Delisting] Saham DUCK per 10 November 2026",
  "deck": "Bursa Efek Indonesia mencabut status Perusahaan Tercatat DUCK (Jaya Bersama Indo) efektif 10 November 2026 akibat forced delisting dan go private, bersama 17 emiten lain.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DUCK",
   "delisting",
   "go private",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0cd8491276_53b9b851f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "maba-resmi-delisting-dari-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "MABA Resmi [Delisting] dari BEI per 10 November 2026",
  "deck": "Bursa mencabut pencatatan saham MABA bersama 17 emiten lain mulai 10 November 2026 akibat forced delisting dan go private.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MABA",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4477de1d3d_5b4ab3c898.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "envy-resmi-delisting-dari-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "ENVY Resmi [Delisting] dari BEI per 10 November 2026",
  "deck": "Bursa menghapus pencatatan saham ENVY efektif 10 November 2026 karena forced delisting dan go private, bersamaan dengan 17 emiten lain.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENVY",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d216df89b0_67ed67ef2a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtra-resmi-delisting-dari-bei-per-10-november-2026",
  "category": "Aksi Korporasi",
  "title": "MTRA Resmi [Delisting] dari BEI per 10 November 2026",
  "deck": "Bursa Efek Indonesia mencabut status perusahaan tercatat MTRA efektif 10 November 2026 karena forced delisting dan go private, bersama 17 emiten lain yang juga delisting bersamaan.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTRA",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/29a361eaf3_6e7565bb82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sbat-resmi-kena-delisting-paksa-dari-bei-efektif-10-november",
  "category": "Aksi Korporasi",
  "title": "SBAT Resmi Kena [Delisting] Paksa dari BEI, Efektif 10 November",
  "deck": "Bursa menghapus pencatatan saham SBAT secara paksa efektif 10 November 2026, satu paket dengan 17 emiten lain yang juga didelisting hari itu.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SBAT",
   "delisting",
   "BEI",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/269b59ba05_4f2bed2560.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbma-terbitkan-obligasi-tahap-vi-rp2-5-triliun-bunga-9-10-75",
  "category": "Aksi Korporasi",
  "title": "MBMA Terbitkan Obligasi [Tahap VI] Rp2,5 Triliun, Bunga 9-10,75%",
  "deck": "MBMA menawarkan obligasi Tahap VI senilai hingga Rp2,5 triliun, tiga seri berbunga 9-10,75 persen, bagian dari program obligasi berkelanjutan Rp16 triliun.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "obligasi korporasi",
   "pasar modal",
   "nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c033db52a8_80d2f125f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bata-rombak-direksi-raymond-chew-jadi-presiden-direktur",
  "category": "Aksi Korporasi",
  "title": "BATA Rombak Direksi, [Raymond Chew] Jadi Presiden Direktur",
  "deck": "RUPSLB Sepatu Bata menyetujui pengunduran dua presiden direktur dan mengangkat Raymond Chew sebagai Presiden Direktur baru bersama Anibal Juan Torres Alvarez sebagai direktur.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATA",
   "RUPSLB",
   "Direksi",
   "Raymond Chew"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/48eb46970d_af2f1bd3dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indy-tanggapi-permintaan-bursa-soal-sengketa-lahan-masmindo",
  "category": "Aksi Korporasi",
  "title": "INDY Tanggapi Permintaan Bursa soal Sengketa Lahan [Masmindo]",
  "deck": "Indika Energy menjawab permintaan penjelasan BEI soal pemberitaan sengketa lahan anak usahanya, PT Masmindo Dwi Area, di Luwu, namun belum memberi penjelasan substantif dan masih menghimpun data.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDY",
   "Indika Energy",
   "Masmindo Dwi Area",
   "sengketa lahan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/143f104478_cb7b54aa6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wbsa-catat-laba-9m26-turun-55-meski-pendapatan-naik-31",
  "category": "Aksi Korporasi",
  "title": "WBSA Catat [Laba] 9M26 Turun 55% Meski Pendapatan Naik 31%",
  "deck": "Materi public expose WBSA mengungkap laba bersih sembilan bulan 2026 turun 55 persen menjadi Rp13 miliar, meski pendapatan naik 31 persen jadi Rp2,9 triliun.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WBSA",
   "logistik",
   "public expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b578c2dc1e_e7f4beb126.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-catat-laba-naik-dana-rights-issue-baru-6-35-terserap",
  "category": "Aksi Korporasi",
  "title": "INET Catat Laba Naik, Dana Rights Issue Baru [6,35%] Terserap",
  "deck": "INET mengungkap pendapatan 9M 2026 melonjak akibat konsolidasi anak usaha baru, sementara dana rights issue, obligasi, dan sukuk senilai Rp4,19 triliun baru terserap 6,35 persen hingga Juni 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "public expose",
   "realisasi dana",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/70f5bbc030_67dfab99bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemen-pu-genjot-jalur-pansela-di-blitar-untuk-ekonomi-pesisir",
  "category": "Bisnis",
  "title": "Kemen PU Genjot Jalur [Pansela] di Blitar untuk Ekonomi Pesisir",
  "deck": "Kemen PU mempercepat pembangunan ruas Pansela Ringinrejo-Simpang Jolosutro sepanjang 7,9 km di Blitar untuk membuka akses wisata pantai dan ekonomi pesisir selatan Jatim.",
  "date": "9 November 2026",
  "image": "assets/img/kemen-pu-genjot-jalur-pansela-di-blitar-untuk-ekonomi-pesisir.jpg",
  "imageV": "mw9gmcow",
  "tags": [
   "Pansela",
   "Kementerian PU",
   "Blitar",
   "Jawa Timur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477431-tingkatkan-ekonomi-pesisir-kemen-pu-genjot-pembangunan-jalan-pansela-jawa-timur"
 },
 {
  "slug": "ekspor-camilan-dua-kelinci-ke-australia-tembus-rp1-03-miliar",
  "category": "Industri",
  "title": "Ekspor Camilan Dua Kelinci ke Australia Tembus [Rp1,03] Miliar",
  "deck": "Menteri Perdagangan melepas ekspor lima kontainer camilan Dua Kelinci senilai Rp1,03 miliar ke Australia, sembari mendorong pelaku usaha memanfaatkan 25 perjanjian dagang Indonesia.",
  "date": "9 November 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "ekspor",
   "Dua Kelinci",
   "perjanjian dagang",
   "Kementerian Perdagangan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/lepas-ekspor-pt-dua-kelinci-ke-negeri-kanguru-mendag-busan-terus-ajak-pelaku-usaha-manfaatkan-perjanjian-dagang",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bri-cetak-laba-rp48-2-triliun-di-triwulan-iii-2026",
  "category": "Perbankan",
  "title": "BRI Cetak Laba [Rp48,2 Triliun] di Triwulan III 2026",
  "deck": "Laba bersih BRI tumbuh 16,8 persen secara tahunan menjadi Rp48,2 triliun pada triwulan III 2026, ditopang ekspansi kredit dan porsi UMKM yang tetap dominan.",
  "date": "9 November 2026",
  "image": "assets/img/bri-cetak-laba-rp48-2-triliun-di-triwulan-iii-2026.jpg",
  "imageV": "mw9bbdmx",
  "tags": [
   "BRI",
   "laba bank",
   "kredit UMKM",
   "kinerja keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477426-dukung-kemajuan-ekonomi-nasional-bri-cetak-laba-rp482-triliun-pada-triwulan-iii-2026"
 },
 {
  "slug": "oppm-terbitkan-obligasi-rp1-15-triliun-di-bawah-target-rp3-33-t",
  "category": "Aksi Korporasi",
  "title": "Obligasi OPPM Rp1,15 Triliun [Tercatat] di BEI Mulai 13 November",
  "deck": "Obligasi rupiah dan dolar OPPM yang rampung diterbitkan dengan nilai jauh di bawah target resmi dicatatkan di Bursa Efek Indonesia mulai 13 November 2026, membawa peringkat idA+ dari Pefindo.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi korporasi",
   "pencatatan BEI",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f07fbf832b_934e281453.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupsu-sukuk-buntut-gagal-bayar-kupon",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan RUPSU Sukuk Buntut [Gagal Bayar] Kupon",
  "deck": "WIKA akan menggelar rapat pemegang Sukuk Mudharabah Berkelanjutan II Tahap I 2021 pada 7 Desember 2026, menyusul suspensi saham dan penurunan rating ke status default.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ee64b41969_b7e3d88639.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-terbitkan-panggilan-resmi-rupsu-sukuk-ke-pemegang",
  "category": "Aksi Korporasi",
  "title": "WIKA Terbitkan Panggilan Resmi [RUPSU] Sukuk ke Pemegang",
  "deck": "Bank Mega sebagai wali amanat akan memuat panggilan RUPSU sukuk WIKA di koran nasional pada 23 November, menjelang rapat pemegang sukuk pada 9 Desember terkait gagal bayar kupon.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c1c81fb8c1_f12c929322.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-resmi-batalkan-kerja-sama-konser-d-masiv-tur-asia",
  "category": "Aksi Korporasi",
  "title": "RANS Resmi Batalkan Kerja Sama Konser [D'MASIV] Tur Asia",
  "deck": "RANS resmi membatalkan rencana kerja sama konser D'MASIV Asia Home Run Tour per 9 November 2026, tiga hari setelah membantah kabar serupa ke publik.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "D'MASIV",
   "IPO",
   "konser musik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/365dad443c_5a414a455f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scma-jelaskan-volatilitas-saham-emtk-pastikan-investasi-panjang",
  "category": "Aksi Korporasi",
  "title": "SCMA Jelaskan [Volatilitas] Saham, EMTK Pastikan Investasi Panjang",
  "deck": "SCMA menjawab permintaan BEI soal volatilitas saham: tak ada info baru selain dividen interim yang telah diumumkan, dan EMTK menegaskan kepemilikannya untuk investasi jangka panjang.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCMA",
   "volatilitas saham",
   "EMTK",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d6e21f8c91_0878163dc8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-tawarkan-obligasi-dan-sukuk-baru-rp550-miliar",
  "category": "Aksi Korporasi",
  "title": "BWPT Tawarkan [Obligasi] dan Sukuk Baru Rp550 Miliar",
  "deck": "Eagle High Plantations menerbitkan obligasi hingga Rp175 miliar dan sukuk mudharabah hingga Rp375 miliar tahap II, bunga 9,5-12 persen per tahun.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "obligasi",
   "sukuk",
   "surat utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4dc6155140_675d268461.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-rinci-bunga-obligasi-sukuk-12-senilai-rp550-m",
  "category": "Aksi Korporasi",
  "title": "BWPT Rinci Bunga Obligasi-Sukuk [12%] Senilai Rp550 M",
  "deck": "Eagle High Plantations merinci struktur tiga seri obligasi dan sukuk mudharabah tahap II senilai total Rp550 miliar, dengan bunga 9,5 sampai 12 persen dan masa penawaran 23-24 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "obligasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/835d807fb5_29b2458347.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbri-cetak-laba-rp48-2-triliun-di-9-bulan-2026-naik-16-8",
  "category": "Aksi Korporasi",
  "title": "BBRI Cetak Laba [Rp48,2] Triliun di 9 Bulan 2026, Naik 16,8%",
  "deck": "BRI melaporkan laba bersih Rp48,2 triliun pada sembilan bulan 2026, naik 16,8 persen, didorong kredit yang tumbuh 14,5 persen dan dana pihak ketiga naik 12 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRI",
   "kinerja keuangan",
   "laba bersih",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6d443245ae_ccf9c761d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-direksi-cindy-budijono-beli-1-25-juta-saham",
  "category": "Aksi Korporasi",
  "title": "BUVA: Direksi Cindy Budijono Beli [1,25 Juta] Saham",
  "deck": "Direktur BUVA, Cindy Budijono, menambah kepemilikan sahamnya 1,25 juta lembar pada 2 November 2026, tapi porsi hak suaranya di perseroan tetap 0,02 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "Bukit Uluwatu Villa",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-0704-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-pemegang-saham-hapsoro-tambah-10-9-juta-saham",
  "category": "Aksi Korporasi",
  "title": "BUVA: [Pemegang Saham] Hapsoro Tambah 10,9 Juta Saham",
  "deck": "Hapsoro membeli 10,96 juta saham BUVA secara tidak langsung senilai Rp250 per saham pada 2 November 2026, menambah kepemilikannya 25 persen namun hak suaranya tetap 0,18 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "pemegang saham",
   "kepemilikan saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-0000-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-direksi-satrio-tambah-3-66-juta-saham",
  "category": "Aksi Korporasi",
  "title": "BUVA: Direksi Satrio [Tambah] 3,66 Juta Saham",
  "deck": "Direksi BUVA, Satrio, membeli 3,66 juta saham secara tidak langsung seharga Rp250 per saham, menaikkan kepemilikannya 26,4 persen meski hak suaranya tetap 0,06 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "Kepemilikan saham",
   "Insider trading",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-5383-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-deli-indonesia-raya-tambah-kepemilikan-1-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SINI: Deli Indonesia Raya Tambah [Kepemilikan] 1 Juta Saham",
  "deck": "PT Deli Indonesia Raya, pemegang saham pengendali SINI, menambah 1 juta lembar saham lewat pembelian bertahap pada 5-9 November 2026, menaikkan hak suaranya ke 7,56%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "kepemilikan saham",
   "Singaraja Putra",
   "Deli Indonesia Raya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-9038-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-direksi-timothy-alamsyah-tambah-843-875-saham",
  "category": "Aksi Korporasi",
  "title": "BUVA: Direksi Timothy Alamsyah [Tambah] 843.875 Saham",
  "deck": "Direktur BUVA Timothy Eugene Alamsyah membeli 843.875 saham tidak langsung seharga Rp250 per saham, menambah kepemilikannya jadi 4,22 juta saham tanpa mengubah hak suaranya.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "kepemilikan saham",
   "direksi",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-2010-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-komisaris-astini-tambah-750-000-saham-rp187-5-juta",
  "category": "Aksi Korporasi",
  "title": "BUVA: Komisaris Astini [Tambah] 750.000 Saham Rp187,5 Juta",
  "deck": "Komisaris BUVA, Astini Bernawati Oudang, membeli 750.000 saham tambahan senilai Rp187,5 juta, menaikkan kepemilikannya 15 persen meski hak suaranya tetap 0,02 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "komisaris",
   "kepemilikan saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-8716-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-tirta-orisa-yasa-tambah-114-96-juta-saham",
  "category": "Aksi Korporasi",
  "title": "BUVA: Tirta Orisa Yasa [Tambah] 114,96 Juta Saham",
  "deck": "PT Tirta Orisa Yasa membeli 114,96 juta saham BUVA secara tidak langsung senilai Rp250 per lembar pada 2 November 2026, namun hak suaranya tetap 1,87 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "kepemilikan saham",
   "pemegang saham",
   "Bukit Uluwatu Villa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-7882-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hits-jadwalkan-rupst-rupslb-16-desember-bahas-modal-dasar",
  "category": "Aksi Korporasi",
  "title": "HITS Jadwalkan RUPST-RUPSLB 16 Desember, Bahas [Modal Dasar]",
  "deck": "HITS akan gelar RUPST dan RUPSLB pada 16 Desember 2026, dengan satu agenda RUPSLB soal rencana menaikkan modal dasar perseroan.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HITS",
   "RUPST",
   "RUPSLB",
   "modal dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/073b252e79_edf0c41802.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-nusantara-utama-investama-tambah-3-47-miliar-saham-rp868-m",
  "category": "Aksi Korporasi",
  "title": "BUVA: Nusantara Utama Investama Tambah 3,47 Miliar Saham [Rp868 M]",
  "deck": "Nusantara Utama Investama menambah 3,47 miliar saham BUVA senilai Rp868,6 miliar pada 2 November 2026, meski hak suaranya sedikit menyusut jadi 60,15 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "kepemilikan saham",
   "pemegang saham mayoritas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-6387-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-ganti-wali-amanat-sukuk-ke-cimb-niaga",
  "category": "Aksi Korporasi",
  "title": "INET Ganti [Wali Amanat] Sukuk ke CIMB Niaga",
  "deck": "RUPSI menyetujui pergantian wali amanat Sukuk Ijarah I INET senilai Rp500 miliar dari Bank KB Indonesia ke CIMB Niaga, disetujui 100 persen suara yang hadir.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "sukuk",
   "wali amanat",
   "RUPSI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d9d031c0f5_d2a7f1c7c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-rupo-obligasi-gagal-kuorum-ganti-wali-amanat-molor",
  "category": "Aksi Korporasi",
  "title": "INET: RUPO Obligasi Gagal [Kuorum], Ganti Wali Amanat Molor",
  "deck": "RUPO obligasi INET pada 5 November hanya dihadiri 66,79% pemegang obligasi, di bawah syarat kuorum 75%, sehingga rencana ganti wali amanat ke CIMB Niaga belum disetujui.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "RUPO",
   "obligasi",
   "wali amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e3dd40f998_412093210d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fast-ekuitas-susut-40-pendapatan-tumbuh-16-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "FAST: Ekuitas Susut [40%], Pendapatan Tumbuh 16% di Kuartal III",
  "deck": "Laporan interim kuartal III 2026 menunjukkan pendapatan FAST naik 16% menjadi Rp4,13 triliun, namun ekuitas susut hampir 40% menjadi Rp261,79 miliar akibat rugi berjalan tanpa suntikan modal baru.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAST",
   "Fast Food Indonesia",
   "laporan keuangan kuartal III",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109182556-65146-0/FinancialStatement-2026-III-FAST.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bris-kantongi-restu-rupslb-untuk-rights-issue-ii",
  "category": "Aksi Korporasi",
  "title": "BRIS Kantongi Restu RUPSLB untuk [Rights Issue] II",
  "deck": "Pemegang saham BSI menyetujui penerbitan hingga 6,8 miliar saham baru lewat skema HMETD II, harga dan jadwal pasti masih menyusul.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "rights issue",
   "RUPSLB",
   "PMHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5ff8ea6819_02a75a2e93.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-pastikan-tambah-kuota-pertalite-anggaran-cukup",
  "category": "Energi",
  "title": "Pemerintah Pastikan Tambah Kuota [Pertalite], Anggaran Cukup",
  "deck": "Pemerintah menambah kuota Pertalite setelah konsumsi melonjak akibat kenaikan harga Pertamax, dan Menko Airlangga memastikan anggaran negara masih mencukupi.",
  "date": "9 November 2026",
  "image": "assets/img/pemerintah-pastikan-tambah-kuota-pertalite-anggaran-cukup.jpg",
  "imageV": "mw9bbe2f",
  "tags": [
   "pertalite",
   "bbm subsidi",
   "airlangga hartarto",
   "bph migas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477410-kuota-pertalite-bakal-ditambah-menko-airlangga-anggaran-masih-ada"
 },
 {
  "slug": "myor-laba-naik-31-utang-bank-turun-tajam-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MYOR: Laba Naik 31%, [Utang] Bank Turun Tajam di Kuartal III 2026",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan laba bersih Mayora Indah naik 31 persen dan total utang turun 23 persen dibanding akhir 2025, didorong pelunasan pinjaman bank.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MYOR",
   "Mayora Indah",
   "Laporan Keuangan",
   "Kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109181804-65776-0/FinancialStatement-2026-III-MYOR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-perkuat-hak-suara-ke-42-16-via-repo",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Perkuat Hak Suara ke [42,16%] via Repo",
  "deck": "Direksi Samuel Sekuritas Indonesia menambah 972,3 juta saham NSSS lewat repo senilai Rp447,24 miliar, mengangkat hak suaranya dari 38,07% jadi 42,16%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "kepemilikan direksi",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-5536-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-kerajinan-difabel-puka-teken-loi-ekspansi-ke-ritel",
  "category": "UMKM",
  "title": "UMKM Kerajinan Difabel PUKA Teken [LoI] Ekspansi ke Ritel",
  "deck": "Bisnis kerajinan tangan PUKA yang memberdayakan 22 pekerja disabilitas memperluas pasar lewat kerja sama awal dengan APRINDO dan tampil di Trade Expo Indonesia 2026.",
  "date": "9 November 2026",
  "image": "assets/img/umkm-kerajinan-difabel-puka-teken-loi-ekspansi-ke-ritel.jpg",
  "imageV": "mw94wq6j",
  "tags": [
   "UMKM",
   "disabilitas",
   "APRINDO",
   "ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ruang-inklusif-disabilitas-produk-hobi-puka",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-lampu-tenaga-surya-ri-tumbuh-20-91-persen-ke-as",
  "category": "Industri",
  "title": "Ekspor Lampu Tenaga Surya RI [Tumbuh] 20,91 Persen ke AS",
  "deck": "Kemendag mendukung ekspor produk penerangan tenaga surya PT Synergy Infra Hijau, saat ekspor lampu Indonesia naik 20,91 persen dalam sembilan bulan pertama 2026.",
  "date": "9 November 2026",
  "image": "assets/img/ekspor-lampu-tenaga-surya-ri-tumbuh-20-91-persen-ke-as.jpg",
  "imageV": "mw94wtap",
  "tags": [
   "ekspor",
   "energi surya",
   "Kemendag",
   "manufaktur"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dukung-perluasan-ekspor-produsen-manufaktur-teknologi-pemanfaatan-energi-surya-mendag-busan-kunjungi-pt-synergy-infra-hijau",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "rlco-direksi-tambah-11-56-juta-saham-via-top-up-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Tambah 11,56 Juta Saham via [Top Up] Repo",
  "deck": "Direksi RLCO, Samuel Sekuritas Indonesia, menambah kepemilikan saham lewat mekanisme top up perjanjian repo pada 9 November 2026, menaikkan hak suara dari 11,85% menjadi 12,22%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "repo",
   "direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-8276-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-bagi-dividen-tunai-tambahan-rp100-per-saham",
  "category": "Aksi Korporasi",
  "title": "ULTJ Bagi [Dividen] Tunai Tambahan Rp100 per Saham",
  "deck": "RUPSLB ULTJ menyetujui dividen tunai tambahan Rp100 per saham untuk tahun buku 2025, total Rp1,04 triliun, dibayarkan 9 Desember 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "dividen tunai",
   "RUPSLB",
   "Ultrajaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/de48692ef4_3a956faf42.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-terangkan-lonjakan-liabilitas-pinjam-ke-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "ASBI Terangkan [Lonjakan] Liabilitas, Pinjam ke Pemegang Saham",
  "deck": "ASBI menjelaskan ke BEI bahwa total liabilitasnya melonjak lebih dari 20 persen, didorong pinjaman dari pemegang saham pengendali dan uang muka penjualan aset di Surabaya.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "Asuransi Bintang",
   "liabilitas",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109171332-65769-0/FinancialStatement-2026-III-ASBI.pdf",
  "sourceLabel": "IDX"
 },
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
  "slug": "nsss-direksi-tambah-saham-via-repo-hak-suara-ke-5-58",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah Saham via Repo, [Hak Suara] ke 5,58%",
  "deck": "Direksi NSSS, Mitra Agro Dharma Unggul, membeli 626,9 juta saham lewat repo senilai sekitar Rp285,2 miliar, mengangkat hak suaranya dari 2,95% menjadi 5,58%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-5417-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendagri-minta-pemda-percepat-registrasi-perlinsos-digital",
  "category": "Teknologi",
  "title": "Kemendagri Minta Pemda Percepat [Registrasi] Perlinsos Digital",
  "deck": "Kemendagri mendesak pemda mempercepat registrasi Perlinsos Digital agar data penerima bansos lebih akurat, sejalan dengan rencana satu identitas digital lintas layanan publik.",
  "date": "9 November 2026",
  "image": "assets/img/kemendagri-minta-pemda-percepat-registrasi-perlinsos-digital.jpg",
  "imageV": "mw94wtq8",
  "tags": [
   "bansos",
   "perlinsos digital",
   "kemendagri",
   "dukcapil"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477401-upaya-penyaluran-bansos-tepat-sasaran-kemendagri-minta-pemda-percepat-registrasi-perlinsos-digital"
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
  "slug": "bvic-victoria-investama-tambah-saham-hak-suara-ke-64-23",
  "category": "Aksi Korporasi",
  "title": "BVIC: Victoria Investama [Tambah] Saham, Hak Suara ke 64,23%",
  "deck": "Victoria Investama Tbk membeli 749,6 juta saham BVIC via repo senilai sekitar Rp60 miliar, mengangkat hak suaranya di Bank Victoria dari 60,17 persen menjadi 64,23 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BVIC",
   "Victoria Investama",
   "Bank Victoria",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-2734-00.pdf-0.pdf",
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
  "slug": "bmas-tarik-us-18-juta-lagi-dari-kbank-total-jadi-us-258-juta",
  "category": "Aksi Korporasi",
  "title": "BMAS Tarik US$2 Juta Lagi dari KBank, Total Jadi US$340 Juta",
  "deck": "BMAS menarik tambahan US$2 juta dari fasilitas pinjaman bilateral KBank pada 13 November 2026, sehingga total penarikan mencapai US$340 juta dari limit US$341 juta, hanya tersisa sekitar US$1 juta.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "transaksi afiliasi",
   "pinjaman bilateral",
   "KBank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/40326f8631_ab663ffc47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bssr-catat-laba-bersih-naik-81-jadi-us-111-7-juta-di-9m26",
  "category": "Aksi Korporasi",
  "title": "BSSR Catat [Laba] Bersih Naik 81% Jadi US$111,7 Juta di 9M26",
  "deck": "Laba bersih BSSR naik 81 persen jadi US$111,7 juta pada sembilan bulan 2026, sementara liabilitas naik 64 persen karena utang dividen interim yang sudah dibagikan Oktober lalu.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSSR",
   "Baramulti Suksessarana",
   "laba bersih",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109162154-65771-0/FinancialStatement-2026-III-BSSR.pdf",
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
  "slug": "bahlil-dorong-umkm-dan-pengusaha-daerah-ikut-hilirisasi",
  "category": "UMKM",
  "title": "Bahlil Dorong UMKM dan Pengusaha Daerah Ikut [Hilirisasi]",
  "deck": "Menko Hilirisasi Bahlil Lahadalia meminta UMKM dan pengusaha daerah dapat porsi lebih besar dalam proyek hilirisasi, agar tak dimonopoli perusahaan besar dari Jakarta.",
  "date": "9 November 2026",
  "image": "assets/img/bahlil-dorong-umkm-dan-pengusaha-daerah-ikut-hilirisasi.jpg",
  "imageV": "mw94wu3t",
  "tags": [
   "hilirisasi",
   "umkm",
   "bahlil",
   "pertambangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477395-menko-bahlil-dorong-peran-aktif-umkm-dan-pengusaha-lokal-dalam-proyek-hilirisasi"
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
  "slug": "issp-pemegang-saham-mayoritas-tambah-1-8-juta-saham",
  "category": "Aksi Korporasi",
  "title": "ISSP: Pemegang Saham [Mayoritas] Tambah 1,8 Juta Saham",
  "deck": "Cakra Bhakti Para Putra, pemegang 57,77% hak suara ISSP, membeli 1.822.500 saham lewat tiga transaksi awal November, menaikkan hak suaranya ke 57,80%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISSP",
   "kepemilikan saham",
   "pemegang saham",
   "Steel Pipe Industry"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-4792-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-laba-naik-tapi-utang-usaha-melonjak-29",
  "category": "Aksi Korporasi",
  "title": "AUTO: Laba Naik, tapi Utang Usaha [Melonjak] 29%",
  "deck": "Laba bersih AUTO naik 11,6 persen jadi Rp1,85 triliun dalam sembilan bulan 2026, tapi utang usahanya melonjak 29 persen karena harga bahan baku dan persediaan naik.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "laporan keuangan",
   "utang usaha",
   "Astra Otoparts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109145152-65768-0/FinancialStatement-2026-III-AUTO.pdf",
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
  "slug": "mrat-direksi-tambah-saham-jadi-148-800-lembar",
  "category": "Aksi Korporasi",
  "title": "MRAT: Direksi [Tambah] Saham Jadi 148.800 Lembar",
  "deck": "Direktur Mustika Ratu, Jodi Andrea Suryo Kusumo, membeli 9.700 saham MRAT pada 4-5 November 2026, menambah kepemilikannya jadi 148.800 lembar.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MRAT",
   "Mustika Ratu",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-7959-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lopi-direksi-tambah-kepemilikan-saham-via-repurchase",
  "category": "Aksi Korporasi",
  "title": "LOPI: Direksi Tambah [Kepemilikan] Saham via Repurchase",
  "deck": "Direktur LOPI Wahyu Dwi Jatmiko membeli 100.000 saham tambahan seharga Rp29 per lembar pada 6 November 2026, menambah hak suaranya jadi 0,191%.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "kepemilikan saham",
   "direksi",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-09112026-2135-00.pdf-0.pdf",
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
  "slug": "boss-penuhi-public-expose-suspensi-saham-tetap-berlanjut",
  "category": "Aksi Korporasi",
  "title": "BOSS Penuhi Public Expose, [Suspensi] Saham Tetap Berlanjut",
  "deck": "BOSS menegaskan kewajiban Public Expose tahunan terpenuhi, namun materi yang dilampirkan menunjukkan tambang masih nihil produksi dan suspensi saham belum tuntas.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "suspensi saham",
   "public expose",
   "batubara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9b50c8485a_d337625d68.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-gelar-rupst-dan-rupslb-16-desember",
  "category": "Aksi Korporasi",
  "title": "CANI Gelar RUPST dan RUPSLB [16 Desember]",
  "deck": "PT Capitol Nusantara Indonesia Tbk (CANI) menjadwalkan RUPST dan RUPSLB pada 16 Desember 2026, dengan tanggal pencatatan pemegang saham 23 November 2026.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "RUPST",
   "RUPSLB",
   "Capitol Nusantara Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e33e4f4125_b875bb6034.pdf",
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
  "slug": "indx-kas-tanah-laut-tinggal-rp22-juta-ekuitas-susut-20",
  "category": "Aksi Korporasi",
  "title": "INDX: [Kas] Tanah Laut Tinggal Rp22 Juta, Ekuitas Susut 20%",
  "deck": "Laporan keuangan kuartal III 2025 Tanah Laut Tbk menunjukkan kas perusahaan menyusut hingga 98 persen sementara utang jangka panjang justru melonjak.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDX",
   "Tanah Laut",
   "laporan keuangan",
   "emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202511/20261109140205-65764-0/FinancialStatement-2025-III-INDX.pdf",
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
  "slug": "bino-balik-untung-rp6-57-miliar-di-semester-i-koreksi-laporan",
  "category": "Aksi Korporasi",
  "title": "BINO Balik [Untung] Rp6,57 Miliar di Semester I, Koreksi Laporan",
  "deck": "PT Perma Plasindo Tbk (BINO) menyampaikan koreksi laporan keuangan interim Juni 2026: pendapatan naik 51,8 persen dan laba bersih Rp6,57 miliar, berbalik dari rugi semester sebelumnya.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINO",
   "laporan keuangan",
   "emiten alat tulis",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109132045-65767-0/FinancialStatement-2026-II-BINO.pdf",
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
  "image": "assets/img/bendungan.jpg",
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
  "slug": "jast-laba-pemilik-induk-berbalik-rugi-utang-naik-21",
  "category": "Aksi Korporasi",
  "title": "JAST: Laba Pemilik Induk [Berbalik Rugi], Utang Naik 21%",
  "deck": "Laba bersih JAST turun 42 persen dan bagian untuk pemegang saham induk berbalik rugi, sementara liabilitas melonjak 21,49 persen akibat utang usaha anak usaha CCX Platform Pte Ltd.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAST",
   "laporan keuangan",
   "liabilitas",
   "CCX Platform"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261109080723-65766-0/FinancialStatement-2026-III-JAST.pdf",
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
  "slug": "hkmu-bukukan-ekuitas-negatif-rp38-7-miliar-dalam-laporan-interim",
  "category": "Aksi Korporasi",
  "title": "HKMU Laporan Tahunan 2023: [Ekuitas Negatif] Bertahan Rp38,6 Miliar",
  "deck": "Laporan keuangan tahunan 2023 yang baru disampaikan HKMU pada November 2026 menunjukkan ekuitas negatif Rp38,6 miliar, hampir tak berubah dari Rp38,7 miliar pada laporan interim Juni 2023.",
  "date": "8 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "ekuitas negatif",
   "laporan keuangan tahunan",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202311/20261108141335-65735-0/FinancialStatement-2023-II-HKMU.pdf",
  "sourceLabel": "IDX"
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
  "image": "assets/img/keranjang-belanja-ibu.jpg",
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
  "image": "assets/img/moneter-bi.jpg",
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
 }
];
