// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "psgo-jelaskan-rencana-penuhi-syarat-free-float-ke-bei",
  "category": "Aksi Korporasi",
  "title": "PSGO Jelaskan Rencana Penuhi Syarat [Free Float] ke BEI",
  "deck": "PSGO menanggapi surat Bursa soal rencana pemenuhan saham beredar bebas minimum, dengan tenggat 31 Maret 2029 setelah pengendali melepas 308,6 juta saham sepanjang 2026.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "free float",
   "Bursa Efek Indonesia",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ce4799d4e2_1b3804335c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dada-panggil-rupst-ketiga-usai-kuorum-gagal-dua-kali",
  "category": "Aksi Korporasi",
  "title": "DADA Panggil RUPST Ketiga usai [Kuorum] Gagal Dua Kali",
  "deck": "PT Diamond Citra Propertindo menggelar RUPST ketiga pada 24 September 2026 setelah rapat kedua pada Juli lalu gagal mencapai kuorum kehadiran pemegang saham.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DADA",
   "RUPST",
   "kuorum",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bd9a3293e8_1175719ecc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-panggil-rupslb-ubah-kegiatan-usaha-dan-dana-rights-issue",
  "category": "Aksi Korporasi",
  "title": "CASH panggil RUPSLB, ubah [kegiatan usaha] dan dana rights issue",
  "deck": "Cashlez Worldwide Indonesia mengundang pemegang saham ke RUPSLB 8 Oktober 2026 untuk membahas perubahan kegiatan usaha, penggunaan dana rights issue, alamat kantor, dan susunan direksi-komisaris.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "RUPSLB",
   "Cashlez",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/51b32c73f6_ce627c1918.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbap-free-float-baru-9-7-jauh-di-bawah-syarat-15",
  "category": "Aksi Korporasi",
  "title": "MBAP: [Free Float] Baru 9,7%, Jauh di Bawah Syarat 15%",
  "deck": "MBAP melaporkan ke Bursa bahwa saham beredar bebasnya baru 9,702% dari total saham tercatat, masih jauh di bawah syarat minimum 15% dan perusahaan belum punya keputusan final soal cara memenuhinya.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBAP",
   "free float",
   "Bursa Efek Indonesia",
   "kepatuhan pencatatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/79e5388e5f_262f226a71.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "klbf-ajukan-ulang-buyback-rp500-miliar-usai-dibatalkan",
  "category": "Aksi Korporasi",
  "title": "KLBF Ajukan Ulang Buyback [Rp500 Miliar] Usai Dibatalkan",
  "deck": "Kalbe Farma mengajukan kembali rencana pembelian kembali saham senilai maksimal Rp500 miliar, sehari setelah rencana serupa dengan angka sama dibatalkan.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "buyback saham",
   "Kalbe Farma",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f0273d2c81_4c9fa08b78.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemnaker-mulai-seleksi-peserta-maganghub-batch-2-angkatan-ii",
  "category": "Ketenagakerjaan",
  "title": "Kemnaker Mulai [Seleksi] Peserta MagangHub Batch 2 Angkatan II",
  "deck": "Kemnaker menjaring peserta Pemagangan Nasional (MagangHub) 2026 Batch 2 Angkatan II pada 16-18 September, dengan program magang dimulai 21 September 2026.",
  "date": "16 September 2026",
  "image": "assets/img/bursa-kerja.jpg",
  "tags": [
   "MagangHub",
   "Kemnaker",
   "Pemagangan Nasional",
   "Ketenagakerjaan"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/kemnaker-segera-seleksi-dan-tetapkan-peserta-maganghub-batch-2-angkatan-ii",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "ica-cepa-diratifikasi-kanada-pangkas-tarif-90-produk-ri",
  "category": "Global",
  "title": "ICA-CEPA [Diratifikasi], Kanada Pangkas Tarif 90% Produk RI",
  "deck": "Indonesia dan Kanada resmi meratifikasi ICA-CEPA, perjanjian dagang bilateral pertama Kanada dengan ASEAN, yang akan memangkas tarif pada lebih dari 90 persen produk kedua negara.",
  "date": "16 September 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "ICA-CEPA",
   "Indonesia-Kanada",
   "Tarif Dagang",
   "ASEAN"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7095/menko-airlangga-ajak-pelaku-usaha-asean-kanada-manfaatkan-implementasi-ica-cepa-dengan-maksimal",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "indonesia-perketat-tata-kelola-ekspor-teknologi-strategis",
  "category": "Industri",
  "title": "Indonesia Perketat Tata Kelola [Ekspor] Teknologi Strategis",
  "deck": "Pemerintah menyiapkan kerangka pengendalian perdagangan barang dan teknologi strategis, seiring ekspor semikonduktor RI melonjak ke US$4,1 miliar pada 2025.",
  "date": "15 September 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "semikonduktor",
   "ekspor",
   "kebijakan perdagangan",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7094/wujudkan-perdagangan-aman-dan-terpercaya-indonesia-perkuat-strategic-trade-management",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "distribusi-b50-tembus-94-persen-spbu-esdm-kejar-tenggat",
  "category": "Energi",
  "title": "Distribusi B50 Tembus [94] Persen SPBU, ESDM Kejar Tenggat",
  "deck": "Hingga pertengahan September, distribusi B50 mencapai 94 persen dari 6.412 SPBU, sementara 28 dari 104 terminal penyalur masih beralih dari B40 sebelum tenggat 30 September.",
  "date": "15 September 2026",
  "image": "assets/img/distribusi-b50-tembus-94-persen-spbu-esdm-kejar-tenggat.jpg",
  "imageV": "mu2tczi1",
  "tags": [
   "B50",
   "biodiesel",
   "ESDM",
   "SPBU"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kawal-implementasi-b50-kementerian-esdm-perkuat-uji-teknis-dan-dialog-dengan-industri-otomotif",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "pabrik-pelumas-shell-beroperasi-pasokan-lokal-ke-98",
  "category": "Industri",
  "title": "Pabrik Pelumas Shell Beroperasi, Pasokan Lokal ke [98%]",
  "deck": "Shell mulai mengoperasikan pabrik gemuk/pelumas baru di Indonesia berkapasitas 12 juta liter per tahun, mendorong pasokan pelumas lokal naik ke lebih dari 98 persen.",
  "date": "15 September 2026",
  "image": "assets/img/pabrik-pelumas-shell-beroperasi-pasokan-lokal-ke-98.jpg",
  "imageV": "mu2td6nw",
  "tags": [
   "Shell Indonesia",
   "Manufaktur",
   "Investasi",
   "Substitusi Impor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pabrik-grease-shell-mulai-beroperasi-wamendag-roro-momentum-strategis-perkuat-rantai-pasok-domestik",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pertamina-perkuat-diversifikasi-lng-di-gastech-2026",
  "category": "Energi",
  "title": "Pertamina Perkuat Diversifikasi [LNG] di Gastech 2026",
  "deck": "Pertamina memaparkan strategi diversifikasi pasokan LNG domestik dan internasional serta infrastruktur gas dalam forum Gastech 2026 di Bangkok, Thailand.",
  "date": "15 September 2026",
  "image": "assets/img/pertamina-perkuat-diversifikasi-lng-di-gastech-2026.jpg",
  "imageV": "mu2td78z",
  "tags": [
   "Pertamina",
   "LNG",
   "gas",
   "ketahanan energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467335-pertamina-terus-perkuat-ketahanan-energi-melalui-integrasi-portofolio-dan-infrastruktur-lng"
 },
 {
  "slug": "antm-paparkan-laba-naik-34-dan-capex-rp7-t-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "ANTM Paparkan Laba Naik 34% dan [Capex] Rp7 T di Public Expose",
  "deck": "Public Expose Live 2026 ANTM merinci laba bersih semester I naik 34 persen jadi Rp6,91 triliun, ditopang emas dan nikel, serta rencana belanja modal Rp7 triliun.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "Antam",
   "public expose",
   "hilirisasi nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3d53a1dda1_6aafab19bd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "epac-pastikan-ada-tender-wajib-pengendali-dalam-12-bulan",
  "category": "Aksi Korporasi",
  "title": "EPAC Pastikan Ada [Tender Wajib] Pengendali dalam 12 Bulan",
  "deck": "Menjawab permintaan penjelasan Bursa, EPAC ungkap penutupan segmen kemasan konvensional, ekspansi dibiayai rights issue dan leasing, serta tender wajib oleh pengendali dalam 12 bulan ke depan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "rights issue",
   "tender wajib",
   "kemasan fleksibel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e10612deea_03d505f9a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomsel-genjot-pemasaran-warung-lewat-data-digiads",
  "category": "Bisnis",
  "title": "Telkomsel Genjot Pemasaran Warung lewat Data [DigiAds]",
  "deck": "Telkomsel Enterprise memakai data pelanggan dan jaringan warung DigiPOS untuk menyambungkan iklan digital dengan penjualan di toko, dicoba bersama Rinso di Jawa Barat.",
  "date": "15 September 2026",
  "image": "assets/img/telkomsel-genjot-pemasaran-warung-lewat-data-digiads.jpg",
  "imageV": "mu2td7mj",
  "tags": [
   "telkomsel",
   "digiads",
   "umkm",
   "pemasaran digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467327-dari-ponsel-untuk-umkm-telkomsel-enterprise-terus-dorong-pemasaran-yang-lebih-terukur"
 },
 {
  "slug": "raja-beber-rencana-pipa-bbm-rp1-5-triliun-dan-ipo-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "RAJA Beber Rencana Pipa BBM [Rp1,5 Triliun] dan IPO Anak Usaha",
  "deck": "Hasil Public Expose Tahunan RAJA mengungkap rencana investasi pipa BBM Balsam, akuisisi kapal LNG/LPG, dan IPO anak usaha, di tengah target pertumbuhan kinerja 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "Rukun Raharja",
   "Public Expose",
   "FLNG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3dabc6ef9a_e9e12656f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arto-resmikan-nicholas-tan-yanming-jadi-direktur-retail-banking",
  "category": "Aksi Korporasi",
  "title": "ARTO Resmikan [Nicholas Tan Yanming] Jadi Direktur Retail Banking",
  "deck": "Bank Jago mengefektifkan penambahan satu direktur baru untuk bisnis retail banking, setelah disetujui OJK dan RUPST Mei lalu.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTO",
   "Bank Jago",
   "Direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/48d5792c66_2183c05673.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-paparkan-public-expose-capex-capai-us-700-juta-2026",
  "category": "Aksi Korporasi",
  "title": "INCO Paparkan Public Expose, [Capex] Capai US$700 Juta 2026",
  "deck": "Public expose tahunan Vale Indonesia mengungkap capex 2026 sekitar US$700 juta, kas cuma US$111 juta di semester I, dan dividen belum jadi prioritas selama masa ekspansi 2026-2027.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "Vale Indonesia",
   "Public Expose",
   "HPAL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/73f697eb7e_dea0cc751f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpum-tegaskan-tak-ada-info-baru-selain-rencana-mto",
  "category": "Aksi Korporasi",
  "title": "DPUM Tegaskan Tak Ada Info Baru Selain Rencana [MTO]",
  "deck": "Menjawab permintaan Bursa Efek Indonesia soal volatilitas transaksi sahamnya, DPUM menegaskan tidak ada fakta material lain selain pengambilalihan oleh PT Rama Indonesia dan rencana penawaran tender wajib.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPUM",
   "akuisisi",
   "tender offer",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f94b9e212c_977f3fa85f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mendagri-ingatkan-pemda-soal-risiko-obligasi-daerah",
  "category": "Makroekonomi",
  "title": "Mendagri Ingatkan Pemda soal Risiko [Obligasi] Daerah",
  "deck": "Mendagri Tito Karnavian meminta pemerintah daerah menghitung kemampuan fiskal sebelum menerbitkan obligasi, supaya utang lama tidak membebani kepala daerah yang baru menjabat.",
  "date": "15 September 2026",
  "image": "assets/img/mendagri-ingatkan-pemda-soal-risiko-obligasi-daerah.jpg",
  "imageV": "mu2o3033",
  "tags": [
   "obligasi daerah",
   "Tito Karnavian",
   "utang daerah",
   "kepala daerah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467302-tito-imbau-pemda-hati-hati-terbitkan-obligasi-daerah-jangan-timbulkan-beban-bagi-kepala-daerah-baru"
 },
 {
  "slug": "coal-rpp-ekspor-sda-diklaim-tak-berdampak-ke-kinerja",
  "category": "Aksi Korporasi",
  "title": "COAL: RPP Ekspor SDA Diklaim Tak [Berdampak] ke Kinerja",
  "deck": "Black Diamond Resources menjawab permintaan penjelasan Bursa soal rencana aturan pemerintah mengenai tata kelola ekspor sumber daya alam, dan menyebut dampaknya ke kinerja perseroan tidak signifikan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COAL",
   "Black Diamond Resources",
   "ekspor sumber daya alam",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2fd36f9439_dc67cd3903.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-tetapkan-26-hari-libur-nasional-dan-cuti-bersama-2027",
  "category": "Ketenagakerjaan",
  "title": "Pemerintah Tetapkan [26] Hari Libur Nasional dan Cuti Bersama 2027",
  "deck": "SKB Tiga Menteri menetapkan 18 hari libur nasional dan 8 hari cuti bersama untuk 2027, total 26 hari, sekaligus mengatur ketentuan lembur dan cuti tahunan bagi pekerja.",
  "date": "15 September 2026",
  "image": "assets/img/wawancara-kerja.jpg",
  "tags": [
   "Libur Nasional 2027",
   "Cuti Bersama",
   "Kemnaker",
   "Idulfitri"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/pemerintah-tetapkan-18-hari-libur-nasional-dan-8-hari-cuti-bersama-tahun-2027",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "bioetanol-lampung-ditarget-produksi-desember-2026",
  "category": "Energi",
  "title": "Bioetanol Lampung Ditarget Produksi [Desember 2026]",
  "deck": "Kementerian Investasi/BKPM, Pertamina, dan Toyota membangun pusat pengembangan bioetanol di Lampung, kapasitas awal 60 kiloliter, target produksi Desember 2026.",
  "date": "15 September 2026",
  "image": "assets/img/spbu-bbm.jpg",
  "tags": [
   "bioetanol",
   "BKPM",
   "Pertamina",
   "Lampung"
  ],
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/wamen-todotua-resmikan-peluncuran-bioethanol-development-center-di-lampung",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "hilirisasi-nikel-ubah-wajah-ekonomi-morowali",
  "category": "Industri",
  "title": "Hilirisasi Nikel [Ubah] Wajah Ekonomi Morowali",
  "deck": "Hilirisasi nikel mendorong pergeseran struktur ekonomi Morowali dan Morowali Utara dari tambang ke industri, dengan PDRB per kapita naik lebih dari 20 persen dalam satu dekade.",
  "date": "15 September 2026",
  "image": "assets/img/hilirisasi-nikel-ubah-wajah-ekonomi-morowali.jpg",
  "imageV": "mu2o30kr",
  "tags": [
   "nikel",
   "hilirisasi",
   "Morowali",
   "MIND ID"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467299-hilirisasi-nikel-mulai-berdampak-terhadap-peningkatan-ekonomi-daerah"
 },
 {
  "slug": "lpkr-anak-usaha-beli-piutang-rp8-35-m-dari-ciptadana",
  "category": "Aksi Korporasi",
  "title": "LPKR: Anak Usaha Beli [Piutang] Rp8,35 M dari Ciptadana",
  "deck": "Anak usaha LPKR, PT Asiatic Sejahtera Finance, mengambil alih piutang pembiayaan senilai Rp16,62 miliar dari PT Ciptadana Multifinance seharga Rp8,35 miliar dalam transaksi afiliasi.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPKR",
   "Transaksi Afiliasi",
   "Lippo Karawaci",
   "Ciptadana Multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6a218e5892_c968b28b51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpkr-tarik-20-7-juta-saham-treasuri-batalkan-rencana-jual",
  "category": "Aksi Korporasi",
  "title": "LPKR [Tarik] 20,7 Juta Saham Treasuri, Batalkan Rencana Jual",
  "deck": "RUPSLB LPKR menyetujui penarikan 20.700.600 saham treasuri lewat pengurangan modal, sekaligus membatalkan rencana menjual saham itu di bursa yang diumumkan April 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPKR",
   "saham treasuri",
   "RUPSLB",
   "pengurangan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/77c7924eb2_007c707faf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-kantongi-sertifikasi-iso-untuk-vault-emas",
  "category": "BUMN",
  "title": "Pegadaian Kantongi Sertifikasi [ISO] untuk Vault Emas",
  "deck": "PT Pegadaian meraih sertifikasi ISO 9001:2015 untuk layanan kustodi emas, menandai standar pengelolaan vault yang diakui setara standar internasional.",
  "date": "15 September 2026",
  "image": "assets/img/pegadaian-kantongi-sertifikasi-iso-untuk-vault-emas.jpg",
  "imageV": "mu2lv6sm",
  "tags": [
   "pegadaian",
   "iso 9001",
   "kustodi emas",
   "bumn"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467286-pegadaian-raih-sertifikasi-iso-90012015-perkuat-keamanan-vault-berstandar-global"
 },
 {
  "slug": "vici-komisaris-independen-herbudianto-mundur",
  "category": "Aksi Korporasi",
  "title": "VICI: Komisaris Independen Herbudianto [Mundur]",
  "deck": "Drs. Herbudianto mengundurkan diri dari jabatan Komisaris Independen VICI per 15 September 2026. Perseroan akan menggelar RUPS terkait pengunduran diri ini.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "komisaris independen",
   "pengunduran diri",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eaefecdf9a_177e5e2c72.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lckm-diminta-jelaskan-hilangnya-kepemilikan-maju-mekar-19-36",
  "category": "Aksi Korporasi",
  "title": "LCKM Diminta Jelaskan Hilangnya [Kepemilikan] Maju Mekar 19,36%",
  "deck": "Bursa mempertanyakan hilangnya 19,36% saham Maju Mekar tanpa laporan, uang muka proyek mandek, dan konsentrasi pendapatan satu pelanggan; LCKM minta perpanjangan waktu hingga 30 September.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LCKM",
   "Bursa Efek Indonesia",
   "suspensi saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7a858d102d_e86c6ef6a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-rinci-rencana-akuisisi-rp4-4-triliun-lewat-rights-issue",
  "category": "Aksi Korporasi",
  "title": "KOTA Rinci Rencana [Akuisisi] Rp4,4 Triliun Lewat Rights Issue",
  "deck": "KOTA menjawab permintaan penjelasan bursa soal rights issue senilai gabungan Rp4,4 triliun untuk mengakuisisi dua perusahaan pemilik lahan seluas 571 hektare.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "rights issue",
   "akuisisi lahan",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f1d2a7e9cf_70d436a79e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agro-panggil-rupslb-bahas-pergantian-direksi-dan-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "AGRO Panggil RUPSLB, Bahas [Pergantian] Direksi dan Anggaran Dasar",
  "deck": "Bank Raya Indonesia (AGRO) mengundang pemegang saham ke RUPSLB 7 Oktober 2026 untuk membahas perubahan anggaran dasar dan pergantian direksi-komisaris.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRO",
   "RUPSLB",
   "Bank Raya Indonesia",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2e5dc23dca_9bf17dfd0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kpig-jawab-bei-akui-tak-ada-informasi-material-di-balik-volatilitas",
  "category": "Aksi Korporasi",
  "title": "KPIG Jawab BEI, Akui Tak Ada [Informasi Material] di Balik Volatilitas",
  "deck": "MNC Tourism Indonesia Tbk menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak mengetahui informasi material apa pun yang mendasarinya.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KPIG",
   "MNC Tourism Indonesia",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f4cc4be0df_5fe4185308.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpn-gandeng-kuab-kembangkan-kedelai-nasional",
  "category": "BUMN",
  "title": "PTPN Gandeng KUAB Kembangkan [Kedelai] Nasional",
  "deck": "PTPN III dan PT KUAB teken nota kesepahaman kembangkan budi daya kedelai dari hulu ke hilir, dengan target swasembada dalam tiga sampai empat tahun.",
  "date": "15 September 2026",
  "image": "assets/img/ptpn-gandeng-kuab-kembangkan-kedelai-nasional.jpg",
  "imageV": "mu2lv7ae",
  "tags": [
   "kedelai",
   "PTPN III",
   "swasembada pangan",
   "PT KUAB"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467277-dukung-swasembada-pangan-ptpn-group-dan-pt-kuab-kembangkan-ekosistem-kedelai-nasional"
 },
 {
  "slug": "asii-ungkap-rencana-vto-auto-senilai-rp858-miliar",
  "category": "Aksi Korporasi",
  "title": "ASII Ungkap Rencana [VTO] AUTO Senilai Rp858 Miliar",
  "deck": "Dalam public expose tahunan, Astra International merinci tender sukarela saham Astra Otoparts, realisasi belanja modal, dividen, dan penurunan laba segmen tambang.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "AUTO",
   "Astra International",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/867a440aab_c2e68c16c6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmbl-direktur-keuangan-dan-umum-mengundurkan-diri",
  "category": "Aksi Korporasi",
  "title": "BMBL: Direktur Keuangan dan Umum [Mengundurkan Diri]",
  "deck": "PT Lavender Bina Cendikia Tbk menerima surat pengunduran diri Direktur Keuangan dan Umum Elita Swasti Nandiko pada 11 September 2026, keputusan final menunggu RUPSLB.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "Direksi",
   "RUPSLB",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bda25f9f53_0039f4e262.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smil-balas-bursa-kas-tergerus-89-piutang-dan-stok-naik",
  "category": "Aksi Korporasi",
  "title": "SMIL Balas Bursa: [Kas] Tergerus 89%, Piutang dan Stok Naik",
  "deck": "Dalam jawaban resmi ke Bursa Efek Indonesia, SMIL merinci kenaikan piutang, persediaan, dan uang muka pembelian 606 unit forklift senilai CNY40,07 juta, di tengah kas yang menyusut tajam.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMIL",
   "forklift",
   "Bursa Efek Indonesia",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/01a74cb624_2e06d3d367.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "klbf-batalkan-rencana-buyback-saham-di-tengah-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "KLBF Batalkan Rencana [Buyback] Saham di Tengah Pasar Bergejolak",
  "deck": "Kalbe Farma membatalkan rencana pembelian kembali saham yang baru diumumkan pada hari yang sama, tanpa menyebut kapan rencana itu akan dijalankan kembali.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "Kalbe Farma",
   "buyback saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a11448b9b3_5e1452d83c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-kantongi-kontrak-rp145-3-miliar-bangun-museum-majapahit",
  "category": "Aksi Korporasi",
  "title": "PTPP Kantongi [Kontrak] Rp145,3 Miliar Bangun Museum Majapahit",
  "deck": "PTPP memulai konstruksi Museum Majapahit di Trowulan, Mojokerto, dengan nilai kontrak Rp145,30 miliar dan masa kerja 114 hari.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "konstruksi",
   "Museum Majapahit",
   "kontrak baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c1d2cb5f2f_000472f032.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gsmf-pemegang-saham-pengendali-tambah-kepemilikan-ke-70-8",
  "category": "Aksi Korporasi",
  "title": "GSMF: Pemegang Saham Pengendali Tambah Kepemilikan ke [70,8%]",
  "deck": "Pengendali GSMF menyuntik dana Rp130,68 miliar dan menaikkan kepemilikan dari 68,28% jadi 70,8% lewat PMTHMETD, saat menjawab permintaan penjelasan volatilitas saham dari BEI.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GSMF",
   "PMTHMETD",
   "pemegang saham pengendali",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/64c8c223b8_3eac3ac642.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjbr-peringkat-sejumlah-obligasi-bank-bjb-turun-ke-idaa",
  "category": "Aksi Korporasi",
  "title": "BJBR: Peringkat Sejumlah Obligasi Bank BJB Turun ke [idAA-]",
  "deck": "PEFINDO memangkas peringkat obligasi keberlanjutan, surat berharga perpetual, dan obligasi subordinasi Bank BJB senilai total sekitar Rp5,7 triliun turun satu tingkat.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBR",
   "Bank BJB",
   "PEFINDO",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/94dee42a62_c2985bb5f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adin-ganti-direktur-utama-wahyu-sulistiyo-gantikan-priyadi",
  "category": "Aksi Korporasi",
  "title": "ADIN Ganti [Direktur Utama], Wahyu Sulistiyo Gantikan Priyadi",
  "deck": "ADIN mengangkat Wahyu Sulistiyo sebagai Presiden Direktur baru menggantikan Priyadi, yang berpindah menjadi komisaris, efektif 15 September 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADIN",
   "pergantian direksi",
   "dewan komisaris",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6f5c7ef061_37be6c9d39.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-laporkan-sisa-dana-obligasi-sukuk-rp3-4-triliun-obligasi",
  "category": "Aksi Korporasi",
  "title": "INKP Laporkan Sisa Dana Obligasi-Sukuk Rp3,4 Triliun [Obligasi]",
  "deck": "Indah Kiat melaporkan koreksi realisasi dana hasil obligasi dan sukuk senilai Rp4,6 triliun yang terbit Maret 2026. Sisa dana Rp3,4 triliun masih mengendap di bank.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/01da1eadc0_3817612c6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-terima-pinjaman-us-50-juta-dari-dehk-untuk-data-center",
  "category": "Aksi Korporasi",
  "title": "EDGE Terima [Pinjaman] US$50 Juta dari DEHK untuk Data Center",
  "deck": "PT Indointernet Tbk (EDGE) mengumumkan transaksi afiliasi berupa pinjaman US$50 juta dari pengendali DEHK ke dua anak usahanya untuk mendanai pengembangan pusat data.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "transaksi afiliasi",
   "pusat data",
   "Digital Edge"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/31c7c2bf5d_c94fe7b2c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-umumkan-jadwal-pelaksanaan-waran-terstruktur-ke-21",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Umumkan Jadwal [Pelaksanaan] Waran Terstruktur ke-21",
  "deck": "RHB Sekuritas mengumumkan jadwal pelaksanaan otomatis lima waran terstruktur seri ke-21 dengan acuan saham AUTO, AVIA, BBTN, ITMG, dan MIKA, jatuh tempo 2 Oktober 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/15f3d73e91_5f7e7b47b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-jadwalkan-pelaksanaan-waran-terstruktur-ke-35",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Jadwalkan Pelaksanaan [Waran] Terstruktur ke-35",
  "deck": "Delapan waran terstruktur RHB dengan saham acuan AADI, ANTM, CUAN, ESSA, ENRG, INDY, ITMG, dan TLKM berakhir 2 Oktober 2026, perdagangan terakhir 29 September 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e40b595409_5c557e4ead.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rhb-jadwalkan-pelaksanaan-waran-terstruktur-ke-37",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Jadwalkan Pelaksanaan Waran Terstruktur [ke-37]",
  "deck": "RHB Sekuritas mengumumkan jadwal pelaksanaan otomatis Waran Terstruktur Penerbitan ke-37 atas delapan saham acuan, berakhir dan delisting awal Oktober 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "Waran Terstruktur",
   "RHB Sekuritas",
   "BBCA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5d03fa0a44_a4ae1967dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rhb-dr-waran-terstruktur-bmri-tidak-disesuaikan-usai-dividen",
  "category": "Aksi Korporasi",
  "title": "RHB (DR): Waran Terstruktur BMRI [Tidak Disesuaikan] usai Dividen",
  "deck": "RHB Sekuritas memastikan tiga waran terstruktur berbasis saham BMRI, BMRIDRCX6A, BMRIDRCH7A, dan BMRIDRPV6A, tidak berubah syaratnya meski BMRI membagikan dividen tunai.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "BMRI",
   "waran terstruktur",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/078ab2ce04_7fc3889bf9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-jelaskan-ke-bursa-soal-koreksi-laba-dan-piutang-macet",
  "category": "Aksi Korporasi",
  "title": "MEDS Jelaskan ke Bursa soal [Koreksi] Laba dan Piutang Macet",
  "deck": "Hetzer Medical menjawab permintaan penjelasan BEI soal koreksi laba kuartal I 2026, piutang macet dari distributor akibat tunggakan rumah sakit pemerintah, dan reklasifikasi utang bank ke BCA.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "Hetzer Medical",
   "laporan keuangan",
   "piutang macet"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f8ebb47af5_b603d9c16c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-masuk-papan-pemantauan-khusus-bei-mulai-16-september",
  "category": "Aksi Korporasi",
  "title": "TRUK Masuk Papan [Pemantauan Khusus] BEI Mulai 16 September",
  "deck": "Bursa Efek Indonesia menempatkan saham TRUK (PT Guna Timur Raya Tbk) ke papan pemantauan khusus efektif 16 September 2026 akibat riwayat penghentian sementara perdagangan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "pemantauan khusus",
   "BEI",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5e2390da31_a8aa15fd15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akku-jadwalkan-public-expose-insidentil-usai-rugi-melonjak",
  "category": "Aksi Korporasi",
  "title": "AKKU Jadwalkan [Public Expose] Insidentil usai Rugi Melonjak",
  "deck": "AKKU akan menggelar paparan publik insidentil pada 18 September 2026 menjelaskan opini audit, seiring rugi semester I 2026 melonjak ke Rp2,55 miliar dan ekuitas terus menyusut.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "public expose",
   "opini audit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2026bb9b41_43b4fcd064.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menaker-ai-di-tempat-kerja-harus-naikkan-produktivitas",
  "category": "Ketenagakerjaan",
  "title": "Menaker: AI di Tempat Kerja Harus [Naikkan] Produktivitas",
  "deck": "Menaker Yassierli menyebut AI yang sekadar jadi asisten kerja hanya menaikkan produktivitas sekitar 5 persen, sementara perombakan proses kerja bisa mendongkraknya sampai 40 persen.",
  "date": "15 September 2026",
  "image": "assets/img/bursa-kerja-antre.jpg",
  "tags": [
   "AI",
   "Ketenagakerjaan",
   "Produktivitas",
   "Kemnaker"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/menaker-adopsi-ai-harus-berorientasi-pada-manusia-dan-tingkatkan-produktivitas",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "sraj-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "SRAJ Jawab Permintaan BEI soal [Volatilitas] Transaksi Saham",
  "deck": "Sejahteraraya Anugrahjaya menjawab surat BEI soal lonjakan transaksi sahamnya, menyebut peluncuran klinik gigi baru dan kerja sama bedah robotik sebagai pemicu sentimen pasar.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRAJ",
   "Bursa Efek Indonesia",
   "Mayapada Hospital",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/53a0c23661_4ae1888b9d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "life-jelaskan-ke-bursa-aset-turun-laba-melonjak-68",
  "category": "Aksi Korporasi",
  "title": "LIFE Jelaskan ke Bursa: Aset Turun, [Laba] Melonjak 68%",
  "deck": "MSIG Life menjelaskan ke otoritas bursa bahwa aset dan ekuitasnya tergerus nilai pasar investasi dan dividen, sementara laba bersih naik 68,61 persen pada semester I 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "asuransi",
   "keterbukaan informasi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8043a0fab6_31df62cd5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppro-umumkan-rencana-rupslb-pada-22-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "PPRO Umumkan Rencana [RUPSLB] pada 22 Oktober 2026",
  "deck": "PT PP Properti Tbk menjadwalkan RUPSLB pada 22 Oktober 2026, dengan tanggal pencatatan pemegang saham 29 September dan batas usul agenda 22 September 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRO",
   "RUPSLB",
   "PP Properti",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f0984ad025_5b66fe2a8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-catat-pertumbuhan-kredit-11-2-lampaui-target-tahunan",
  "category": "Aksi Korporasi",
  "title": "BBTN Catat Pertumbuhan Kredit 11,2%, [Lampaui] Target Tahunan",
  "deck": "Public expose tahunan BBTN mengungkap kredit tumbuh 11,2 persen hingga Juni 2026, dividend payout ratio target tetap 20 persen, dan BSN jadi bank syariah terbesar kedua di Indonesia.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "Bank Tabungan Negara",
   "kredit perbankan",
   "BSN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bde1859dcc_f31f9fee07.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-ggrm-volume-rokok-anjlok-13-6-di-h1-2026-volume",
  "category": "Aksi Korporasi",
  "title": "Public Expose GGRM: Volume Rokok Anjlok 13,6% di H1 2026 [Volume]",
  "deck": "Public expose GGRM ungkap volume rokok turun 13,6 persen di semester I 2026 akibat persaingan rokok ilegal, sementara dividen Rp800 per saham dipertahankan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GGRM",
   "Gudang Garam",
   "Public Expose",
   "Rokok Ilegal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/551a811872_ebdff2cb1a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "klbf-rencanakan-buyback-saham-rp500-miliar",
  "category": "Aksi Korporasi",
  "title": "KLBF Rencanakan Buyback Saham [Rp500 Miliar]",
  "deck": "Kalbe Farma mengajukan rencana pembelian kembali saham senilai maksimal Rp500 miliar dari dana internal, memanfaatkan relaksasi OJK untuk kondisi pasar yang bergejolak.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "buyback saham",
   "Kalbe Farma",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/656a7155bc_8f77a5c9ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kementan-bongkar-25-merek-beras-fortifikasi-palsu",
  "category": "Bisnis",
  "title": "Kementan Bongkar 25 Merek Beras Fortifikasi [Palsu]",
  "deck": "Pemerintah menduga 25 merek beras fortifikasi tak sesuai klaim label dan dijual jauh di atas harga acuan, mengancam program gizi kelompok rentan.",
  "date": "15 September 2026",
  "image": "assets/img/kementan-bongkar-25-merek-beras-fortifikasi-palsu.jpg",
  "imageV": "mu2ggt9u",
  "tags": [
   "beras fortifikasi",
   "pemalsuan pangan",
   "Kementan",
   "perlindungan konsumen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467233-pemerintah-temukan-dugaan-pemalsuan-beras-fortifikasi-konsumen-terancam-rugi-rp89-triliun"
 },
 {
  "slug": "ptsn-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PTSN Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan penjelasan BEI, Sat Nusapersada memastikan tak ada informasi material yang belum diungkap terkait fluktuasi harga dan volume sahamnya pada 11 September 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTSN",
   "Sat Nusapersada",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3029b42e89_895d7127e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-gelar-public-expose-usai-suspensi-laba-berbalik-rugi",
  "category": "Aksi Korporasi",
  "title": "MGLV Gelar Public Expose Usai Suspensi, Laba Berbalik [Rugi]",
  "deck": "NexAI Digital Infrastruktur (MGLV) menggelar public expose insidentil usai disuspensi BEI, mengungkap pendapatan semester I 2026 anjlok 74,6 persen dan berbalik rugi neto Rp14,1 miliar.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "NexAI Digital Infrastruktur",
   "suspensi BEI",
   "data center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c65af9c967_b70d899bf6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "puri-baru-capai-14-74-free-float-diberi-waktu-hingga-2029",
  "category": "Aksi Korporasi",
  "title": "PURI Baru Capai [14,74%] Free Float, Diberi Waktu hingga 2029",
  "deck": "PURI menjelaskan ke Bursa Efek Indonesia bahwa free float publiknya baru 14,74%, di bawah syarat minimum 15%, dan berjanji memenuhinya sebelum 31 Maret 2029.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PURI",
   "free float",
   "kepemilikan saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a4b57675dc_f0b0b602c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibst-go-private-bei-buka-sementara-suspensi-untuk-crossing-saham",
  "category": "Aksi Korporasi",
  "title": "IBST [Go Private]: BEI Buka Sementara Suspensi untuk Crossing Saham",
  "deck": "Bursa membuka sementara perdagangan saham IBST di Pasar Negosiasi Selasa siang untuk transaksi crossing saham hasil buyback dalam proses go private dan delisting perseroan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBST",
   "delisting",
   "go private",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c09a000776_7b301b4ce1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpck-ganti-komisaris-kinerja-1h26-menguat",
  "category": "Aksi Korporasi",
  "title": "LPCK Ganti [Komisaris], Kinerja 1H26 Menguat",
  "deck": "RUPSLB Lippo Cikarang menyetujui Ketut Budi Wijaya sebagai komisaris baru menggantikan Charles Rigoux, seiring pra-penjualan dan margin EBITDA perseroan yang naik pada semester I 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPCK",
   "Lippo Cikarang",
   "RUPSLB",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d23a2f8113_728bd37024.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadi-selidiki-dugaan-dumping-baja-impor-tiongkok",
  "category": "Industri",
  "title": "KADI [Selidiki] Dugaan Dumping Baja Impor Tiongkok",
  "deck": "KADI membuka penyelidikan antidumping atas baja lapis seng asal Tiongkok yang menguasai 81 persen impor Indonesia, menyusul aduan dua produsen lokal.",
  "date": "15 September 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "antidumping",
   "baja",
   "impor Tiongkok",
   "KADI"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kadi-inisiasi-penyelidikan-antidumping-impor-baja-lapis-seng-asal-tiongkok",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "utang-luar-negeri-ri-naik-swasta-justru-tertekan",
  "category": "Makroekonomi",
  "title": "Utang Luar Negeri RI Naik, Swasta Justru [Tertekan]",
  "deck": "ULN Indonesia naik jadi US$454,8 miliar pada Juli 2026, ditopang penerbitan surat utang pemerintah, sementara utang luar negeri swasta justru menyusut.",
  "date": "15 September 2026",
  "image": "assets/img/utang-luar-negeri-ri-naik-swasta-justru-tertekan.jpg",
  "imageV": "mu2a627h",
  "tags": [
   "utang luar negeri",
   "Bank Indonesia",
   "surat utang negara",
   "APBN"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818826.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "maya-jonathan-tahir-jual-523-juta-saham-untuk-lunasi-utang",
  "category": "Aksi Korporasi",
  "title": "MAYA: Jonathan Tahir Jual 523 Juta Saham untuk [Lunasi Utang]",
  "deck": "Jonathan Tahir menjual 523,36 juta saham MAYA senilai Rp10 per saham untuk melunasi utang, memangkas hak suaranya dari 5,89% menjadi 3,89%.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAYA",
   "Bank Mayapada",
   "kepemilikan saham",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-9276-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "drma-bentuk-joint-venture-dengan-minth-group",
  "category": "Aksi Korporasi",
  "title": "DRMA Bentuk [Joint Venture] dengan Minth Group",
  "deck": "PT Dharma Polimetal menggandeng Minth Group mendirikan PT Dharma Minth Indonesia, JV komponen otomotif kendaraan roda empat dengan modal disetor Rp45 miliar.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "joint venture",
   "Minth Group",
   "komponen otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/32b011d038_afe61d4f85.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lulusan-ciputra-bangun-bisnis-soto-di-sidoarjo",
  "category": "UMKM",
  "title": "Lulusan Ciputra Bangun Bisnis [Soto] di Sidoarjo",
  "deck": "Anisa Intan Amalia, 24 tahun, mendirikan restoran soto khas Ngawi di Sidoarjo dengan bekal pendidikan bisnis kuliner dari Universitas Ciputra.",
  "date": "15 September 2026",
  "image": "assets/img/lulusan-ciputra-bangun-bisnis-soto-di-sidoarjo.jpg",
  "imageV": "mu2a62qd",
  "tags": [
   "UMKM",
   "bisnis kuliner",
   "Sidoarjo",
   "Universitas Ciputra"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467185-belajar-culinary-business-di-universitas-ciputra-anisa-kembangkan-soko-pawon-dengan-soto-khas-ngawi"
 },
 {
  "slug": "mega-klaim-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "MEGA Klaim Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Bank Mega menjawab permintaan penjelasan BEI atas lonjakan transaksi dan penurunan harga sahamnya pada 10 September 2026, dan menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEGA",
   "Bank Mega",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1f71f736f7_a8456e8a60.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "paparan-publik-mika-laba-bersih-naik-ke-rp728-miliar-di-1h26",
  "category": "Aksi Korporasi",
  "title": "Paparan Publik MIKA: Laba Bersih Naik ke [Rp728 Miliar] di 1H26",
  "deck": "Manajemen MIKA memaparkan laba bersih Rp728 miliar di semester I 2026, progres dua rumah sakit baru di BSD dan Malang, serta kebijakan dividen di atas 25 persen laba dalam Paparan Publik Tahunan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MIKA",
   "Mitra Keluarga",
   "rumah sakit",
   "paparan publik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b9706ab7cc_4e28676355.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tins-targetkan-capex-rp446-miliar-harga-timah-diproyeksi-kuat-2026",
  "category": "Aksi Korporasi",
  "title": "TINS Targetkan [Capex] Rp446 Miliar, Harga Timah Diproyeksi Kuat 2026",
  "deck": "Dalam public expose tahunan, manajemen Timah memaparkan target capex Rp446 miliar, proyeksi cash cost naik ke US$23.000-24.000 per ton, dan penjajakan mitra tanah jarang.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TINS",
   "Timah",
   "public expose",
   "tanah jarang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fbb88bdf7a_fcfc4a7a25.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-panggil-rupslb-terbitkan-218-juta-saham-baru-bayar-utang",
  "category": "Aksi Korporasi",
  "title": "APEX Panggil RUPSLB, Terbitkan [218 Juta] Saham Baru Bayar Utang",
  "deck": "Apexindo Pratama Duta (APEX) memanggil RUPSLB 7 Oktober 2026 untuk menyetujui penerbitan 218.090.317 saham seri B baru senilai Rp325 per saham guna melunasi utang ke kreditor pihak ketiga.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "RUPSLB",
   "PMTHMETD",
   "Apexindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/55e68b4fda_0b0874b707.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-saham-direksi-naik-58-9-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "NSSS: Saham Direksi Naik 58,9% Lewat [Repo]",
  "deck": "Direksi Samuel Tumbuh Bersama menerima kembali 1,24 miliar saham NSSS lewat perjanjian repo, hak suaranya naik dari 8,86% jadi 14,07%.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-5182-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-direksi-tambah-1-16-juta-saham-rp782-juta",
  "category": "Aksi Korporasi",
  "title": "HEAL: Direksi [Tambah] 1,16 Juta Saham Rp782 Juta",
  "deck": "Direksi Hermina, Yulisar Khiat, menambah 1,16 juta lembar saham lewat dua transaksi pembelian pada 11 dan 14 September 2026, senilai sekitar Rp782 juta.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-1138-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-jual-150-000-saham-lagi-kali-kedua-sepekan",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris [Jual] 150.000 Saham Lagi, Kali Kedua Sepekan",
  "deck": "Henry Liem, Dewan Komisaris AKPI, melepas 150.000 saham secara tidak langsung pada 14 September 2026 seharga Rp525 per saham, hak suaranya turun tipis ke 1,2283 persen.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Henry Liem",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-2198-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "patokan-ekspor-emas-naik-1-63-persen-per-15-september",
  "category": "Industri",
  "title": "Patokan Ekspor Emas [Naik] 1,63 Persen per 15 September",
  "deck": "Kemendag menaikkan HPE dan HR emas untuk periode 15-30 September 2026, dasar penghitungan bea keluar dan royalti ekspor emas dari Indonesia.",
  "date": "15 September 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "HPE emas",
   "bea keluar",
   "ekspor emas",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/sentimen-global-picu-berlanjutnya-peningkatan-hpe-dan-hr-emas-pada-periode-kedua-september-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bi-proyeksi-kredit-tumbuh-8-12-persen-di-2026",
  "category": "Perbankan",
  "title": "BI Proyeksi Kredit Tumbuh [8-12] Persen di 2026",
  "deck": "Bank Indonesia menyebut modal perbankan tetap tebal dan kredit macet rendah per Juni 2026, sambil menargetkan pertumbuhan kredit 8-12 persen tahun ini.",
  "date": "15 September 2026",
  "image": "assets/img/bi-proyeksi-kredit-tumbuh-8-12-persen-di-2026.jpg",
  "imageV": "mu24r5bl",
  "tags": [
   "Bank Indonesia",
   "Stabilitas Keuangan",
   "Kredit Perbankan",
   "NPL"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bmbl-pemegang-saham-lepas-35-juta-saham-suara-ke-15-62",
  "category": "Aksi Korporasi",
  "title": "BMBL: Pemegang Saham [Lepas] 35 Juta Saham, Suara ke 15,62%",
  "deck": "Pemegang saham individu BMBL melepas 35 juta saham dalam tiga transaksi pada 10 September 2026, memangkas hak suaranya dari 19,02 persen menjadi 15,62 persen.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-7881-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-beber-rencana-private-placement-dan-akuisisi-di-2027",
  "category": "Aksi Korporasi",
  "title": "RATU Beber Rencana Private Placement dan Akuisisi di [2027]",
  "deck": "Dalam public expose, manajemen RATU memaparkan penggunaan dana private placement hingga 10% saham dan target akuisisi minimal satu aset pada 2027.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "private placement",
   "akuisisi migas",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eee1833801_bca286592b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-lepas-1-18-miliar-saham-suara-ke-20-42",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi [Lepas] 1,18 Miliar Saham, Suara ke 20,42%",
  "deck": "Seorang direksi NSSS melepas 1,18 miliar saham lewat repo pada 14 September 2026, menurunkan hak suaranya dari 25,40% menjadi 20,42%.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-1947-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-ke-rp2-592-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Lagi ke Rp2.592.000/Gram",
  "deck": "Harga emas Antam hari ini turun Rp10.000 menjadi Rp2.592.000 per gram, sementara harga buyback ikut turun ke Rp2.437.000 per gram.",
  "date": "15 September 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-ke-rp2-592-000-gram.jpg",
  "imageV": "mu24r5qz",
  "tags": [
   "emas",
   "harga emas",
   "Antam",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467163-terpantau-turun-lagi-harga-emas-antam-hari-ini-15-september-2026-rp2592000-per-gram"
 },
 {
  "slug": "rlco-direksi-beli-balik-29-6-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Beli Balik 29,6 Juta Saham Lewat [Repo]",
  "deck": "Direksi RLCO membeli balik 29,6 juta saham lewat perjanjian repo pada 14 September 2026, mengembalikan hak suaranya dari 5,62% menjadi 6,57%.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-7799-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-saham-direksi-bertambah-2-87-miliar-via-repo",
  "category": "Aksi Korporasi",
  "title": "BKSL: Saham Direksi Bertambah 2,87 Miliar via [Repo]",
  "deck": "Direksi BKSL menambah 2,87 miliar saham lewat transaksi repurchase agreement pada 14 September 2026, mengerek hak suaranya dari 3,65 menjadi 5,36 persen.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-1521-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbut-jawab-permintaan-bei-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "CBUT Jawab Permintaan BEI soal [Volatilitas] Saham",
  "deck": "BEI meminta penjelasan atas pergerakan tak wajar saham CBUT. Perseroan menyatakan tidak ada informasi material maupun rencana aksi korporasi tiga bulan ke depan.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBUT",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/83e0eff592_d3c4b15f6a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idpr-klarifikasi-ke-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "IDPR Klarifikasi ke Bursa soal [Volatilitas] Transaksi Sahamnya",
  "deck": "PT Indonesia Pondasi Raya Tbk (IDPR) menjawab permintaan penjelasan BEI atas pergerakan tak biasa transaksi sahamnya, dan menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDPR",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fb867c4f27_6c506f1540.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-raih-afirmasi-peringkat-aa-dari-fitch-outlook-stabil",
  "category": "Aksi Korporasi",
  "title": "SANF Raih Afirmasi Peringkat [AA+] dari Fitch, Outlook Stabil",
  "deck": "Fitch Ratings Indonesia mengafirmasi peringkat nasional jangka panjang SANF di AA+ dengan outlook stabil, mencakup tiga seri obligasi berkelanjutan senilai total Rp1,6 triliun.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SANF",
   "Fitch Ratings",
   "peringkat kredit",
   "obligasi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7fdeb17897_1b29f1a20a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baik-buka-outlet-agn-signature-baru-di-sampang",
  "category": "Aksi Korporasi",
  "title": "BAIK Buka Outlet [AGN Signature] Baru di Sampang",
  "deck": "PT Bersama Mencapai Puncak Tbk meresmikan outlet Ayam Goreng Nelongso Signature di Sampang, Jawa Timur, sebagai bagian dari strategi ekspansi jaringan usahanya.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "AGN Signature",
   "ekspansi outlet",
   "rumah makan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8223beed3d_5c53f59cf7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ceka-jelaskan-ke-bursa-rencana-penuhi-free-float-15",
  "category": "Aksi Korporasi",
  "title": "CEKA Jelaskan ke Bursa Rencana Penuhi [Free Float] 15%",
  "deck": "CEKA menanggapi permintaan penjelasan BEI soal rencana pemenuhan syarat minimum saham beredar bebas 15%, menyusul free float yang baru 13,86% per akhir Agustus 2026.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CEKA",
   "Wilmar Cahaya Indonesia",
   "free float",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/76e782e761_90f387a606.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menkeu-suahasil-janji-segera-paparkan-data-apbn",
  "category": "Makroekonomi",
  "title": "Menkeu Suahasil Janji Segera [Paparkan] Data APBN",
  "deck": "Menkeu baru Suahasil Nazara berjanji segera menggelar konferensi pers ALCo untuk memaparkan data realisasi APBN Juli dan Agustus 2026 yang belum dipublikasikan.",
  "date": "15 September 2026",
  "image": "assets/img/menkeu-suahasil-janji-segera-paparkan-data-apbn.jpg",
  "imageV": "mu24r65h",
  "tags": [
   "APBN",
   "Kemenkeu",
   "Suahasil Nazara",
   "ALCo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467138-menkeu-suahasil-akan-paparkan-data-apbn-secepatnya"
 },
 {
  "slug": "uu-pprt-atur-hak-dan-kewajiban-pekerja-rumah-tangga",
  "category": "Ketenagakerjaan",
  "title": "UU PPRT [Atur] Hak dan Kewajiban Pekerja Rumah Tangga",
  "deck": "UU Nomor 2 Tahun 2026 memberi payung hukum bagi pekerja rumah tangga, mengatur upah, jam kerja, THR, jaminan sosial, hingga cara penyelesaian sengketa dengan majikan.",
  "date": "15 September 2026",
  "image": "assets/img/gudang-logistik.jpg",
  "tags": [
   "PRT",
   "UU PPRT",
   "Kemnaker",
   "Ketenagakerjaan"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/kemnaker-uu-pprt-perjelas-hak-dan-kewajiban-pekerja-rumah-tangga",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "ruu-ketenagakerjaan-masuk-tahap-panja-di-dpr",
  "category": "Ketenagakerjaan",
  "title": "RUU Ketenagakerjaan Masuk Tahap [Panja] di DPR",
  "deck": "Pemerintah menyerahkan Daftar Inventarisasi Masalah RUU Pelindungan Ketenagakerjaan ke DPR, Komisi IX bentuk Panja lanjutkan pembahasan.",
  "date": "15 September 2026",
  "image": "assets/img/kantor-startup.jpg",
  "tags": [
   "RUU Ketenagakerjaan",
   "DPR",
   "Kemnaker",
   "Panja"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/pemerintah-serahkan-dim-ruu-pelindungan-ketenagakerjaan-kepada-dpr",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "esdm-harga-bbm-subsidi-tak-naik-meski-pasokan-minyak-seret",
  "category": "Energi",
  "title": "ESDM: Harga BBM Subsidi [Tak] Naik Meski Pasokan Minyak Seret",
  "deck": "Pemerintah menegaskan harga BBM bersubsidi tak akan naik meski harga minyak dunia bergejolak, sembari menjajaki pasokan minyak dari Rusia dan memperkuat aturan hilirisasi nikel.",
  "date": "15 September 2026",
  "image": "assets/img/esdm-harga-bbm-subsidi-tak-naik-meski-pasokan-minyak-seret.jpg",
  "imageV": "mu1wr07k",
  "tags": [
   "BBM bersubsidi",
   "ESDM",
   "hilirisasi nikel",
   "pasokan minyak"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/di-tengah-gejolak-geopolitik-dunia-bahlil-jaga-harga-bbm-bersubsidi-dan-dorong-hilirisasi-berkeadilan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kemendag-sebut-elpiji-3-kg-di-17-spbe-sesuai-takaran",
  "category": "Energi",
  "title": "Kemendag Sebut Elpiji 3 Kg di 17 SPBE [Sesuai] Takaran",
  "deck": "Wamendag Dyah Roro Esti meninjau SPBE Pertamina di Bandung Barat, menyusul hasil pengawasan Kemendag yang menyatakan elpiji 3 kg di 17 SPBE sampel sudah sesuai takaran.",
  "date": "15 September 2026",
  "image": "assets/img/kemendag-sebut-elpiji-3-kg-di-17-spbe-sesuai-takaran.jpg",
  "imageV": "mu1wr3k0",
  "tags": [
   "elpiji 3 kg",
   "Kemendag",
   "Pertamina",
   "BDKT"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tinjau-spbe-padalarang-wamendag-roro-dorong-elpiji-3-kg-tepat-takaran",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "nasi-pemegang-saham-jual-2-28-juta-saham-suara-turun-ke-5-59",
  "category": "Aksi Korporasi",
  "title": "NASI: Pemegang Saham [Jual] 2,28 Juta Saham, Suara Turun ke 5,59%",
  "deck": "Hartarto Ciputra menjual 2,28 juta saham Wahana Inti Makmur pada 14 September 2026 seharga Rp162 per saham, memangkas hak suaranya dari 5,87% menjadi 5,59%.",
  "date": "15 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NASI",
   "Wahana Inti Makmur",
   "pemegang saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-15092026-2164-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "2-35-juta-umkm-binaan-pnm-naik-kelas-ke-bank-formal",
  "category": "UMKM",
  "title": "2,35 Juta [UMKM] Binaan PNM Naik Kelas ke Bank Formal",
  "deck": "Dalam lima tahun Holding Ultra Mikro, 2,35 juta nasabah PNM naik kelas ke layanan keuangan formal lewat sinergi dengan BRI dan Pegadaian, mencakup tabungan hingga investasi emas.",
  "date": "14 September 2026",
  "image": "assets/img/2-35-juta-umkm-binaan-pnm-naik-kelas-ke-bank-formal.jpg",
  "imageV": "mu1nf6v4",
  "tags": [
   "umkm",
   "pnm",
   "bri",
   "pegadaian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467106-25-juta-umkm-tercatat-naik-kelas-tuju-layanan-keuangan-formal"
 },
 {
  "slug": "smdr-jawab-bei-soal-volatilitas-transaksi-sebut-tak-ada-info-baru",
  "category": "Aksi Korporasi",
  "title": "SMDR Jawab BEI soal [Volatilitas] Transaksi, Sebut Tak Ada Info Baru",
  "deck": "Samudera Indonesia menjawab surat penjelasan yang diminta BEI setelah harga sahamnya bergejolak, menyatakan tidak ada informasi material atau rencana aksi korporasi baru dalam tiga bulan ke depan.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDR",
   "Samudera Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/957e4d7ad7_377c9887f9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnba-ganti-komisaris-independen-tolak-mundur-presiden-direktur",
  "category": "Aksi Korporasi",
  "title": "BNBA Ganti Komisaris Independen, Tolak [Mundur] Presiden Direktur",
  "deck": "RUPSLB Bank Bumi Arta menyetujui pergantian dua komisaris independen, tapi menolak permohonan mundur Presiden Direktur Wikan Aryono S sehingga jabatannya tetap terisi.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNBA",
   "RUPSLB",
   "Bank Bumi Arta",
   "komisaris independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b3fd54d59c_625d89a567.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rsgk-pengendali-pertahankan-saham-di-tengah-volatilitas-harga",
  "category": "Aksi Korporasi",
  "title": "RSGK: Pengendali [Pertahankan] Saham di Tengah Volatilitas Harga",
  "deck": "RSGK menyatakan tidak ada informasi material di balik lonjakan harga sahamnya pada 9 September 2026, sementara pemegang saham pengendali menegaskan tetap mempertahankan kepemilikan sahamnya.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RSGK",
   "volatilitas saham",
   "BEI",
   "RS Grha Kedoya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e9f70a008c_b0ee480c9e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-kembangkan-pusat-riset-bioetanol-di-lampung",
  "category": "Energi",
  "title": "Pertamina Kembangkan Pusat Riset [Bioetanol] di Lampung",
  "deck": "Pertamina NRE meresmikan pusat riset bioetanol skala percontohan di Lampung, dilengkapi dua nota kesepahaman dengan Pemprov Lampung dan grup Toyota.",
  "date": "14 September 2026",
  "image": "assets/img/pertamina-kembangkan-pusat-riset-bioetanol-di-lampung.jpg",
  "imageV": "mu1h1wc9",
  "tags": [
   "pertamina",
   "bioetanol",
   "lampung",
   "energi terbarukan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467090-pertamina-nre-terus-dorong-pengembangan-bioetanol-berbasis-multi-feedstock-dan-multi-generation"
 },
 {
  "slug": "mncn-gandeng-rmab-sta-rmab-jadi-pengakuisisi-media",
  "category": "Aksi Korporasi",
  "title": "MNCN Gandeng RMAB-STA, RMAB Jadi [Pengakuisisi] Media",
  "deck": "MNCN, Republikorp Group lewat RMAB, dan Sinergi Terang Abadi menandatangani kerja sama strategis membangun ekosistem media terintegrasi, dengan RMAB sebagai pihak pengakuisisi.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MNCN",
   "media",
   "kemitraan strategis",
   "iNews"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f3bf7ed092_521a6e1a67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-bulgaria-perkuat-kerja-sama-dagang-bidik-pasar-ue",
  "category": "Global",
  "title": "RI-Bulgaria [Perkuat] Kerja Sama Dagang, Bidik Pasar UE",
  "deck": "Mendag Budi Santoso dan Wakil PM Bulgaria Alexander Poulev bahas penguatan investasi dan perdagangan, menjelang implementasi I-EU CEPA yang ditargetkan awal 2027.",
  "date": "14 September 2026",
  "image": "assets/img/ri-bulgaria-perkuat-kerja-sama-dagang-bidik-pasar-ue.jpg",
  "imageV": "mu1bolsh",
  "tags": [
   "Bulgaria",
   "I-EU CEPA",
   "Trade Expo Indonesia",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pertemuan-mendag-ri-dan-wakil-perdana-menteri-bulgaria-perkuat-kerja-sama-perdagangan-dan-investasi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ri-bulgaria-perkuat-dagang-incar-pasar-eropa-via-i-eu-cepa",
  "category": "Global",
  "title": "RI-Bulgaria Perkuat Dagang, Incar Pasar [Eropa] via I-EU CEPA",
  "deck": "Mendag Budi Santoso dan Wakil PM Bulgaria Alexander Poulev sepakat perkuat kerja sama dagang dan investasi, dengan Bulgaria diincar sebagai pintu masuk ke pasar Uni Eropa.",
  "date": "14 September 2026",
  "image": "assets/img/ri-bulgaria-perkuat-dagang-incar-pasar-eropa-via-i-eu-cepa.jpg",
  "imageV": "mu1bonrt",
  "tags": [
   "Kemendag",
   "Bulgaria",
   "I-EU CEPA",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pertemuan-mendag-ri-dan-wakil-perdana-menteri-bulgaria-perkuat-kerja-sama-perdagangan-dan-investasi-1789391594",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bjbr-pefindo-turunkan-peringkat-sejumlah-obligasi-bank-bjb",
  "category": "Aksi Korporasi",
  "title": "BJBR: PEFINDO [Turunkan] Peringkat Sejumlah Obligasi Bank BJB",
  "deck": "PEFINDO menurunkan peringkat sejumlah obligasi dan surat berharga perpetual Bank BJB satu tingkat menjadi idAA- hingga idA-, outlook stabil.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBR",
   "PEFINDO",
   "peringkat obligasi",
   "bank bjb"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ffecd2006a_24f49478e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-bertahan-di-idccc-pefindo-waspadai-gagal-bayar-sukuk",
  "category": "Aksi Korporasi",
  "title": "ADCP Bertahan di idCCC, PEFINDO [Waspadai] Gagal Bayar Sukuk",
  "deck": "PEFINDO mempertahankan peringkat idCCC untuk ADCP dengan status CreditWatch Negatif karena risiko gagal bayar kupon Sukuk Ijarah yang jatuh tempo 26 Oktober 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "PEFINDO",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3ce7294a00_b31213c6df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-digugat-pkpu-kontraktor-proyek-adhi-city-sentul",
  "category": "Aksi Korporasi",
  "title": "ADCP Digugat [PKPU] Kontraktor Proyek Adhi City Sentul",
  "deck": "PT Burda Contraco mengajukan permohonan PKPU terhadap ADCP ke Pengadilan Niaga Jakarta Pusat atas utang proyek Adhi City Sentul, sidang pertama digelar 17 September 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "PKPU",
   "Adhi City Sentul",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/748c7bcc7a_31561d6485.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idx-aktifkan-kembali-short-selling-mulai-15-september",
  "category": "Aksi Korporasi",
  "title": "IDX Aktifkan Kembali [Short Selling] Mulai 15 September",
  "deck": "BEI memberlakukan kembali pembiayaan transaksi short selling mulai 15 September 2026, menyusul arahan bertahap dari OJK setelah sempat ditunda sejak 2025.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDX",
   "short selling",
   "OJK",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Short Selling Peng-00168-No. Peng-00168BEI.POP09-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcpi-angkat-komisaris-utama-baru-isi-kursi-lama-kosong",
  "category": "Aksi Korporasi",
  "title": "TCPI Angkat [Komisaris] Utama Baru, Isi Kursi Lama Kosong",
  "deck": "RUPSLB TCPI menyetujui Ade Supandi sebagai Komisaris Utama merangkap Independen, mengisi kursi yang sebelumnya kosong, serta Haru Koesmahargyo sebagai Komisaris Independen baru.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCPI",
   "Transcoal Pacific",
   "Dewan Komisaris",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2ce5c74d9d_92f2cc028c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-divestasi-54-saham-ikn-senilai-rp31-8-miliar",
  "category": "Aksi Korporasi",
  "title": "SINI [Divestasi] 54% Saham IKN Senilai Rp31,8 Miliar",
  "deck": "Singaraja Putra melepas 54 persen saham anak usahanya, PT Interkayu Nusantara, ke Hendra Hasan Kustarjo senilai Rp31,8 miliar.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "divestasi",
   "Interkayu Nusantara",
   "portofolio investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ea94f58653_0f4d0460e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catatkan-saham-baru-dari-pelaksanaan-mesop",
  "category": "Aksi Korporasi",
  "title": "PGEO Catatkan Saham Baru dari Pelaksanaan [MESOP]",
  "deck": "PGEO mencatatkan 2.185.709 saham baru hasil pelaksanaan opsi karyawan MESOP Tahap I dan III pada 14 September 2026, menambah total saham beredar menjadi 41,92 miliar.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "MESOP",
   "saham baru",
   "Pertamina Geothermal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1a9afc7b7d_af90fe6183.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-cetak-74-232-saham-baru-dari-konversi-waran",
  "category": "Aksi Korporasi",
  "title": "INET Cetak 74.232 Saham Baru dari Konversi [Waran]",
  "deck": "Bursa mencatat 74.232 saham baru INET hasil konversi waran seri II, efektif diperdagangkan 15 September 2026, sehingga total saham beredar menjadi 22.377.753.318 lembar.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "waran",
   "saham baru",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0834881137_c8af13962d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suahasil-nazara-jadi-menkeu-baru-kadin-minta-didengar",
  "category": "Makroekonomi",
  "title": "Suahasil Nazara Jadi [Menkeu] Baru, Kadin Minta Didengar",
  "deck": "Suahasil Nazara resmi dilantik sebagai Menteri Keuangan menggantikan Purbaya Yudhi Sadewa; Kadin berharap kebijakan fiskal baru mendukung industri dan perdagangan.",
  "date": "14 September 2026",
  "image": "assets/img/suahasil-nazara-jadi-menkeu-baru-kadin-minta-didengar.jpg",
  "imageV": "mu1boo93",
  "tags": [
   "Kemenkeu",
   "Suahasil Nazara",
   "Kadin",
   "reshuffle kabinet"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467062-suahasil-nazara-gantikan-purbaya-saleh-husin-harap-menkeu-baru-mendengar-dunia-usaha-dan-industri"
 },
 {
  "slug": "bbca-buyback-rp3-5-triliun-rasio-dividen-naik-ke-72",
  "category": "Aksi Korporasi",
  "title": "BBCA: Buyback [Rp3,5 Triliun], Rasio Dividen Naik ke 72%",
  "deck": "Public expose BCA ungkap progres buyback saham, kenaikan rasio dividen ke 72 persen, dan pertumbuhan kredit 8 persen pada semester I 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBCA",
   "Public Expose",
   "Bank Central Asia",
   "kinerja perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e45bf0b681_5f51678b83.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "safe-masuk-daftar-pemantauan-khusus-bei-mulai-15-september",
  "category": "Aksi Korporasi",
  "title": "SAFE [Masuk] Daftar Pemantauan Khusus BEI Mulai 15 September",
  "deck": "BEI memasukkan saham Steady Safe Tbk (SAFE) ke daftar Efek Dalam Pemantauan Khusus mulai 15 September 2026, menyusul penghentian sementara perdagangan lebih dari satu hari bursa.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "BEI",
   "pemantauan khusus",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/31c0cef6cc_82fde4728f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-beli-saham-rp1-6-miliar-dalam-sepekan",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi [Beli] Saham Rp1,6 Miliar dalam Sepekan",
  "deck": "Direksi ITSEC Asia, Patrick Rudolf Dannacher, membeli 3,08 juta saham CYBR senilai sekitar Rp1,6 miliar lewat 17 transaksi pada 8-11 September 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham direksi",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-1642-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-doni-mora-jual-saham-rp27-5-juta",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi Doni Mora [Jual] Saham Rp27,5 Juta",
  "deck": "Direksi ITSEC Asia Doni Mora melepas 51.900 saham CYBR seharga Rp530 per lembar, sekitar Rp27,5 juta, hak suaranya turun dari 0,035% jadi 0,034%.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "transaksi direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-3661-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-berbalik-usai-suahasil-nazara-jadi-menkeu-baru",
  "category": "Pasar Modal",
  "title": "IHSG [Berbalik] Usai Suahasil Nazara Jadi Menkeu Baru",
  "deck": "IHSG sempat anjlok 2,5 persen sebelum ditutup melemah tipis 0,10 persen ke 6.534,69, bertepatan dengan pelantikan Suahasil Nazara sebagai Menteri Keuangan.",
  "date": "14 September 2026",
  "image": "assets/img/ihsg-berbalik-usai-suahasil-nazara-jadi-menkeu-baru.jpg",
  "imageV": "mu16dmro",
  "tags": [
   "IHSG",
   "Suahasil Nazara",
   "Menteri Keuangan",
   "Bursa Efek Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467056-sempat-anjlok-25-ihsg-berbalik-arah-usai-suahasil-nazara-dilantik-jadi-menkeu"
 },
 {
  "slug": "hexa-laba-bersih-turun-48-5-di-tahun-buku-2025",
  "category": "Aksi Korporasi",
  "title": "HEXA: Laba Bersih [Turun] 48,5% di Tahun Buku 2025",
  "deck": "Materi Public Expose Tahunan Hexindo Adiperkasa menunjukkan laba bersih FY2025 turun 48,5 persen dan meleset dari target, jelang paparan publik 17 September 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEXA",
   "Hexindo Adiperkasa",
   "alat berat",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8b34f12525_1a19bf7de8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmry-tambah-penyertaan-modal-rp125-miliar-ke-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "CMRY Tambah Penyertaan Modal [Rp125 Miliar] ke Anak Usaha",
  "deck": "Cimory menyuntik modal Rp125 miliar secara bertahap ke anak usaha Macrosentra Niagaboga untuk perluasan pusat distribusi dan modal kerja.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "Cimory",
   "Transaksi Afiliasi",
   "Macrosentra Niagaboga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/93c8329398_37a4864ade.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmry-suntik-modal-rp200-miliar-ke-macroprima-panganutama",
  "category": "Aksi Korporasi",
  "title": "CMRY [Suntik] Modal Rp200 Miliar ke Macroprima Panganutama",
  "deck": "Cisarua Mountain Dairy menambah penyertaan modal Rp200 miliar secara bertahap ke anak usaha PT Macroprima Panganutama untuk memperluas kapasitas produksi dan modal kerja.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "Transaksi Afiliasi",
   "Cimory",
   "Macroprima Panganutama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/584ccc07ae_8cc0e51d01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-nyatakan-force-majeure-rkab-anak-usaha-belum-terbit",
  "category": "Aksi Korporasi",
  "title": "BYAN Nyatakan [Force Majeure], RKAB Anak Usaha Belum Terbit",
  "deck": "Bayan Resources dan tiga anak usahanya menyatakan force majeure atas kewajiban pasokan batu bara karena revisi RKAB 2026 belum disetujui pemerintah.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "force majeure",
   "RKAB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8a347393c9_05f5002a56.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-kota-bahas-rights-issue-dan-akuisisi-dua-perusahaan",
  "category": "Aksi Korporasi",
  "title": "RUPSLB KOTA Bahas [Rights Issue] dan Akuisisi Dua Perusahaan",
  "deck": "PT DMS Propertindo Tbk (KOTA) memanggil RUPSLB pada 6 Oktober 2026 untuk membahas rights issue, akuisisi dua perusahaan, dan realokasi dana IPO.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8b2dedab3f_19829e9d0a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-solution-sabet-penghargaan-b2b-ict-dari-kgi",
  "category": "BUMN",
  "title": "Telkom Solution Sabet [Penghargaan] B2B ICT dari KGI",
  "deck": "Telkom Solution, unit B2B ICT Telkom Indonesia, meraih penghargaan Business Impact & Industry Growth dari Kabar Group Indonesia atas kontribusinya pada kinerja bisnis pelanggan enterprise dan BUMN.",
  "date": "14 September 2026",
  "image": "assets/img/telkom-solution-sabet-penghargaan-b2b-ict-dari-kgi.jpg",
  "imageV": "mu16dn78",
  "tags": [
   "Telkom Solution",
   "BUMN",
   "ICT",
   "Digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467051-telkom-solution-sabet-penghargaan-business-impact-industry-growth-untuk-market-b2b-ict-di-indonesia"
 },
 {
  "slug": "rans-direktur-grandy-prajayakti-mundur-rupslb-setujui",
  "category": "Aksi Korporasi",
  "title": "RANS: Direktur Grandy Prajayakti [Mundur], RUPSLB Setujui",
  "deck": "RUPSLB RANS menyetujui pengunduran diri Direktur Grandy Prajayakti dengan pelepasan tanggung jawab penuh, disetujui hampir bulat oleh pemegang saham yang hadir.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "RUPSLB",
   "Direksi",
   "Pergantian Direktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/02edaae353_fbfed34945.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-9-waran-rhb-kedaluwarsa-tanpa-nilai-eraa-cair",
  "category": "Aksi Korporasi",
  "title": "DR: 9 Waran RHB Kedaluwarsa Tanpa Nilai, [ERAA] Cair",
  "deck": "Sepuluh waran terstruktur RHB Sekuritas berkode DR jatuh tempo 14 September 2026. Sembilan berakhir tanpa nilai, hanya pemegang waran ERAA yang menerima uang tunai.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "ERAA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/87d8b08e53_0a9c8026b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-heal-dan-hrum-rhb-kedaluwarsa-tanpa-nilai",
  "category": "Aksi Korporasi",
  "title": "DR: Waran HEAL dan HRUM RHB [Kedaluwarsa] Tanpa Nilai",
  "deck": "RHB Sekuritas menghentikan perdagangan 10 waran terstruktur seri Penerbitan ke-33 pada 14 September 2026. Dua di antaranya, HEAL dan HRUM, dipastikan tidak membayar apa pun kepada pemegangnya.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fa731e0364_9d212c7d77.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koci-jelaskan-ke-bursa-rencana-penuhi-free-float-minimum",
  "category": "Aksi Korporasi",
  "title": "KOCI Jelaskan ke Bursa Rencana Penuhi [Free Float] Minimum",
  "deck": "PT Kokoh Exa Nusantara merespons permintaan penjelasan Bursa Efek Indonesia soal rencana memenuhi syarat minimum saham beredar bebas yang kini baru 12,79 persen.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOCI",
   "free float",
   "Bursa Efek Indonesia",
   "waran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/15e5c72dfe_5d28bbcd15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mgna-bantah-ada-fakta-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MGNA Bantah Ada Fakta Material di Balik [Volatilitas] Sahamnya",
  "deck": "PT Magna Investama Mandiri Tbk (MGNA) menjawab permintaan BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang mempengaruhi harga saham.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGNA",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b2f0b56ffe_c6e1b96175.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-lepas-saham-treasuri-85-juta-lembar-mulai-21-september",
  "category": "Aksi Korporasi",
  "title": "PSSI Lepas Saham Treasuri [85 Juta] Lembar Mulai 21 September",
  "deck": "PT IMC Pelita Logistik akan menjual hingga 85 juta saham treasuri lewat pasar negosiasi BEI pada 21 September-21 Oktober 2026, digarap Danatama Makmur Sekuritas.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "buyback",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a590898da2_a5d0e6c2b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-ungkap-rencana-ekspor-minyak-nilam-ke-india-mulai-2027",
  "category": "Aksi Korporasi",
  "title": "SMLE Ungkap Rencana [Ekspor] Minyak Nilam ke India Mulai 2027",
  "deck": "Public Expose Tahunan SMLE 11 September 2026 memaparkan rencana ekspor minyak nilam ke India dan Eropa mulai 2027, serta kepastian belum ada rencana dividen tahun buku 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "public expose",
   "ekspor minyak nilam",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fd6f8b32a1_105b9d2a3a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aksi-melonjak-12-95-emiten-bilang-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "AKSI [Melonjak] 12,95%, Emiten Bilang Tak Ada Info Material",
  "deck": "Saham AKSI melonjak 12,95% dengan volume transaksi naik hampir 15 kali lipat pada 9 September 2026. Manajemen menyatakan tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKSI",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/60ba42d90e_136276b804.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-revaluasi-aset-ekuitas-berbalik-positif-rp2-76-triliun",
  "category": "Aksi Korporasi",
  "title": "UNSP Revaluasi Aset, [Ekuitas] Berbalik Positif Rp2,76 Triliun",
  "deck": "Revaluasi aset tanah dan tanaman produktif membuat ekuitas UNSP berbalik positif Rp2,76 triliun, dari defisit Rp5,27 triliun akhir 2025, meski laba masih rugi.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "revaluasi aset",
   "ekuitas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/83a2c3b103_f1e433db51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "grph-ungkap-kinerja-semester-i-jelang-public-expose-suspensi",
  "category": "Aksi Korporasi",
  "title": "GRPH Ungkap Kinerja Semester I Jelang Public Expose [Suspensi]",
  "deck": "Griptha Putra Persada merilis materi public expose insidentil buntut suspensi BEI, memuat kinerja keuangan semester I 2026 dan rencana kerja hotel di Kudus.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRPH",
   "public expose",
   "suspensi saham",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d7dd042798_58f714237d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-akui-tekanan-likuiditas-restrukturisasi-september",
  "category": "Aksi Korporasi",
  "title": "ADHI Akui Tekanan Likuiditas, Restrukturisasi [September]",
  "deck": "Manajemen ADHI mengakui tekanan likuiditas menghambat pembayaran ke vendor, sembari menargetkan penandatanganan perjanjian restrukturisasi utang bulan ini.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "restrukturisasi utang",
   "likuiditas",
   "BUMN Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/411f496bde_f2973ce876.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-rampungkan-buyback-9-6-juta-saham-rp1-5-miliar",
  "category": "Aksi Korporasi",
  "title": "UVCR Rampungkan [Buyback] 9,6 Juta Saham Rp1,5 Miliar",
  "deck": "Ultra Voucher menyelesaikan pembelian kembali 9,6 juta saham atau 0,48% dari saham beredar senilai Rp1,5 miliar dengan harga rata-rata Rp156 per saham.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "buyback saham",
   "Ultra Voucher",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fbbbcf2b71_9177a07216.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roda-jawab-bei-janji-lepas-saham-penuhi-free-float",
  "category": "Aksi Korporasi",
  "title": "RODA Jawab BEI, Janji Lepas Saham Penuhi [Free Float]",
  "deck": "RODA menjawab permintaan penjelasan BEI soal free float, menyebut pemegang saham pengendali akan melepas sebagian saham karena kondisi properti high rise masih lesu.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RODA",
   "free float",
   "Bursa Efek Indonesia",
   "Pikko Land Development"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/aa19ed1264_9cc4222d34.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roda-jawab-bei-lahan-kosong-rp132-45-m-nganggur-di-signature-park",
  "category": "Aksi Korporasi",
  "title": "RODA Jawab BEI: [Lahan] Kosong Rp132,45 M Nganggur di Signature Park",
  "deck": "RODA mengungkap ke BEI lahan kosong 1,8 hektare senilai Rp132,45 miliar di Signature Park Grande menganggur, karyawan menyusut jadi 132 orang, dan proyek Hampton Lebak Bulus tertunda.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RODA",
   "Pikko Land Development",
   "properti",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2b65cf0f7f_9a8352b1fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lobster-budi-daya-batam-ekspor-perdana-ke-singapura",
  "category": "Industri",
  "title": "Lobster Budi Daya Batam [Ekspor] Perdana ke Singapura",
  "deck": "Sebanyak 339,5 kilogram lobster budi daya asal Batam terjual ke Singapura, dan KKP menyiapkan perluasan model budi daya ke Situbondo dan Lombok.",
  "date": "14 September 2026",
  "image": "assets/img/lobster-budi-daya-batam-ekspor-perdana-ke-singapura.jpg",
  "imageV": "mu11481r",
  "tags": [
   "lobster",
   "budi daya",
   "ekspor",
   "KKP"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/lobster-modeling-batam-tembus-pasar-ekspor-kkp-dorong-pengembangan-budi-daya-lobster-x2g3.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "arto-tegaskan-belum-ada-rencana-merger-dengan-bfi-finance",
  "category": "Aksi Korporasi",
  "title": "ARTO Tegaskan Belum Ada Rencana [Merger] dengan BFI Finance",
  "deck": "Dalam sesi tanya jawab Public Expose Tahunan 2026, manajemen Bank Jago juga menyebut dividen tunai baru dipertimbangkan 3-4 tahun ke depan dan biaya dana naik ke 3,8 persen pada Agustus.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTO",
   "Bank Jago",
   "Cost of Fund",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ec14a8cea5_82ac84662c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lmsh-rugi-2025-menyusut-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "LMSH: Rugi 2025 Menyusut, [Arus Kas] Operasi Negatif",
  "deck": "Lionmesh Prima (LMSH) mencatat rugi bersih Rp4,81 miliar di 2025, menyusut dari Rp7,48 miliar, tapi arus kas operasi berbalik negatif dan kas turun 23,7 persen.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LMSH",
   "Lionmesh Prima",
   "laporan keuangan",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260914161915-64396-0/FinancialStatement-2025-Tahunan-LMSH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lion-rugi-rp26-04-miliar-penjualan-turun-seperlima-di-2025",
  "category": "Aksi Korporasi",
  "title": "LION [Rugi] Rp26,04 Miliar, Penjualan Turun Seperlima di 2025",
  "deck": "Lion Metal Works membukukan rugi bersih Rp26,04 miliar pada 2025, berbalik dari laba Rp10,57 miliar setahun sebelumnya, seiring penjualan yang turun ke Rp339,12 miliar.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LION",
   "Lion Metal Works",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260914162054-64395-0/FinancialStatement-2025-Tahunan-LION.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-buka-kendala-penuhi-syarat-free-float-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "UANG Buka Kendala Penuhi Syarat [Free Float] ke Bursa",
  "deck": "PT Pakuan Tbk (UANG) menjelaskan ke BEI kendala pemenuhan syarat minimum saham beredar bebas, termasuk saham warkat dan rencana pelepasan saham pengendali.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "free float",
   "PT Pakuan Tbk",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2a09ce3670_6cee856ff1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intd-belum-punya-rencana-pasti-penuhi-free-float-minimum",
  "category": "Aksi Korporasi",
  "title": "INTD Belum Punya Rencana Pasti Penuhi [Free Float] Minimum",
  "deck": "INTD menjawab teguran bursa soal syarat minimum saham beredar bebas hanya dengan janji akan mengupayakannya secepatnya, tanpa target waktu atau angka pasti.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTD",
   "free float",
   "Bursa Efek Indonesia",
   "kepatuhan emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fd4c67348e_2e953f86e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sido-bukukan-laba-rp334-miliar-semester-i-ekspor-naik-28",
  "category": "Aksi Korporasi",
  "title": "SIDO Bukukan Laba Rp334 Miliar Semester I, Ekspor [Naik 28%]",
  "deck": "Dalam public expose tahunan, manajemen SIDO memaparkan laba bersih semester I 2026 sebesar Rp334 miliar dan penjualan ekspor tumbuh 28 persen dari tahun lalu.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIDO",
   "Sido Muncul",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/58f38a0332_e593fc397d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcpi-resmi-angkat-ade-supandi-jadi-komisaris-utama",
  "category": "Aksi Korporasi",
  "title": "TCPI Resmi Angkat Ade Supandi Jadi [Komisaris Utama]",
  "deck": "RUPSLB TCPI menyetujui Ade Supandi sebagai Komisaris Utama dan Haru Koesmahargyo sebagai Komisaris Independen dengan dukungan 99,999 persen suara pemegang saham yang hadir.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCPI",
   "RUPSLB",
   "Komisaris",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b8e6553132_c5ca9f7bcb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsmr-bukukan-pertumbuhan-ebitda-8-1-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "JSMR Bukukan Pertumbuhan [EBITDA] 8,1% di Semester I 2026",
  "deck": "Public expose 9 September 2026: Jasa Marga catat pendapatan usaha naik 7,6% dan EBITDA tumbuh 8,1% pada semester I 2026, dengan rasio utang tetap jauh di bawah batas kreditur.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "Jasa Marga",
   "kinerja keuangan",
   "jalan tol"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/17412e83d2_64b9fbf516.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kek-industropolis-batang-genjot-investasi-manufaktur-hijau",
  "category": "Industri",
  "title": "KEK Industropolis Batang Genjot Investasi [Manufaktur] Hijau",
  "deck": "Forum investasi Jawa Tengah 2026 membawa calon investor mengunjungi KEK Industropolis Batang, kawasan seluas 4.300 hektare yang disiapkan untuk industri manufaktur maju dan energi hijau.",
  "date": "14 September 2026",
  "image": "assets/img/kek-industropolis-batang-genjot-investasi-manufaktur-hijau.jpg",
  "imageV": "mu1148kk",
  "tags": [
   "KEK Batang",
   "investasi",
   "Jawa Tengah",
   "industri manufaktur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467016-investor-high-tech-mulai-masuk-kek-industropolis-batang-tawarkan-ekosistem-industri-masa-depan"
 },
 {
  "slug": "heal-direksi-beli-75-000-saham-rp51-juta",
  "category": "Aksi Korporasi",
  "title": "HEAL: Direksi [Beli] 75.000 Saham Rp51 Juta",
  "deck": "Direksi Medikaloka Hermina (HEAL) menambah 75.000 saham senilai sekitar Rp51 juta pada 8 September 2026, namun porsi kepemilikannya di perusahaan tetap sangat kecil.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-5158-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-championship-2026-27-resmi-bergulir",
  "category": "BUMN",
  "title": "Pegadaian [Championship] 2026/27 Resmi Bergulir",
  "deck": "Pegadaian resmi jadi sponsor utama Pegadaian Championship musim 2026/27 untuk tahun keempat berturut-turut, dimulai dari laga PSIS Semarang vs PSPS Pekanbaru.",
  "date": "14 September 2026",
  "image": "assets/img/pegadaian-championship-2026-27-resmi-bergulir.jpg",
  "imageV": "mu1148yz",
  "tags": [
   "Pegadaian Championship",
   "PT Pegadaian",
   "I.League",
   "sponsorship BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467007-pegadaian-championship-musim-202627-resmi-digelar-bukti-komitmen-pegadaian-tak-henti-dukung-generasi-muda-lewat-sepak-bola-nasional"
 },
 {
  "slug": "lapd-jawab-bursa-rights-issue-rp100-m-harga-rp50-saham",
  "category": "Aksi Korporasi",
  "title": "LAPD Jawab Bursa: Rights Issue Rp100 M, Harga [Rp50]/Saham",
  "deck": "Leyand International merinci rencana rights issue ke BEI: harga pelaksanaan Rp50 per saham, dana dipakai akuisisi PT BSS lewat setoran aset dari pengendali JSI Sinergi Mas.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "PMHMETD",
   "Leyand International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/40ad8664c8_88cd27a1e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-edwin-soeryadjaya-tambah-kepemilikan-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Edwin Soeryadjaya [tambah] kepemilikan saham",
  "deck": "Komisaris SRTG Edwin Soeryadjaya membeli 1.018.100 saham dalam dua transaksi pada 10-11 September 2026, hak suaranya naik tipis menjadi 35,93 persen.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-2267-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vico-jawab-permintaan-bei-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "VICO Jawab Permintaan BEI soal [Volatilitas] Saham",
  "deck": "PT Victoria Investama menyatakan tidak ada informasi material atau rencana korporasi yang memicu pergerakan tak biasa pada transaksi sahamnya, menyusul permintaan penjelasan dari BEI.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "Victoria Investama",
   "BEI",
   "volatilitas transaksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0ca9588eee_4f6f230246.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-pertahankan-peringkat-ida-stable-dari-pefindo",
  "category": "Aksi Korporasi",
  "title": "PTRO Pertahankan Peringkat [idA+]/Stable dari PEFINDO",
  "deck": "Petrosea mempertahankan peringkat korporasi idA+/Stable serta peringkat obligasi dan sukuk senilai total Rp2,92 triliun untuk periode September 2026 sampai 2027.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "PEFINDO",
   "peringkat obligasi",
   "sukuk ijarah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4e44624a38_09c0e0e203.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smsm-tegaskan-dividen-tak-dibiayai-utang-ekspor-melemah",
  "category": "Aksi Korporasi",
  "title": "SMSM Tegaskan [Dividen] Tak Dibiayai Utang, Ekspor Melemah",
  "deck": "Manajemen SMSM memastikan kenaikan dividen tidak dibiayai utang jangka pendek, kas masih di atas Rp1 triliun, meski penjualan ke Australia dan Eropa melemah pada semester I 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "paparan publik",
   "dividen",
   "ekspor otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/225a7123c1_2fcaa66218.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "itmg-air-mahakam-surut-kapasitas-tongkang-turun-30-40",
  "category": "Aksi Korporasi",
  "title": "ITMG: Air Mahakam surut, kapasitas tongkang turun [30-40%]",
  "deck": "Public expose ITMG mengungkap kapasitas tongkang dari Melak turun akibat surutnya Sungai Mahakam, capex baru terealisasi 42%, dan cadangan Jorong menipis ke sekitar 2 juta ton.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMG",
   "batu bara",
   "public expose",
   "Sungai Mahakam"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a529ee773d_57516f2762.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "casa-jelaskan-lonjakan-volume-transaksi-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "CASA Jelaskan Lonjakan [Volume] Transaksi ke Bursa",
  "deck": "Volume transaksi saham CASA melonjak lebih dari 50 kali lipat pada 10 September, tapi harga saham cuma turun tipis 0,28 persen ke Rp1.800.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASA",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "UMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4b71fd5b42_0bc6857ecd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "niro-jawab-permintaan-bei-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "NIRO Jawab Permintaan BEI soal [Volatilitas] Sahamnya",
  "deck": "City Retail Developments menegaskan tidak mengetahui informasi material yang memicu volatilitas transaksi sahamnya, menjawab permintaan penjelasan Bursa Efek Indonesia.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NIRO",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/33e2f0b916_8b8642e1a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-dibuka-melemah-ke-6-533-analis-prediksi-rebound",
  "category": "Pasar Modal",
  "title": "IHSG Dibuka [Melemah] ke 6.533, Analis Prediksi Rebound",
  "deck": "IHSG dibuka melemah 0,11 persen ke 6.533 pada Senin, mengikuti pelemahan bursa Asia-Pasifik akhir pekan lalu akibat lonjakan harga minyak yang sempat menekan saham AS.",
  "date": "14 September 2026",
  "image": "assets/img/ihsg-dibuka-melemah-ke-6-533-analis-prediksi-rebound.jpg",
  "imageV": "mu0pd7qu",
  "tags": [
   "ihsg",
   "bursa asia",
   "harga minyak",
   "wall street"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466956-ihsg-dibuka-melemah-pada-perdagangan-14-september-2026-serupa-bursa-asia-pasifik-wall-street-menguat-terimbas-harga-minyak"
 },
 {
  "slug": "ccsi-bantah-info-material-konfirmasi-rights-issue",
  "category": "Aksi Korporasi",
  "title": "CCSI Bantah Info Material, Konfirmasi [Rights Issue]",
  "deck": "CCSI menjawab surat Bursa soal volatilitas sahamnya, menegaskan tak ada info material baru, sementara rencana rights issue hasil persetujuan RUPS masih dalam tahap persiapan.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CCSI",
   "rights issue",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6e3f6f9c6b_8ff3444f4f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atla-komisaris-jual-15-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "ATLA: Komisaris Jual 15 Juta Saham via [Repo]",
  "deck": "Komisaris ATLA, Rudi R Sutantra, melepas 15 juta saham seharga Rp50 per lembar lewat skema repurchase agreement pada 14 Agustus 2026.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATLA",
   "kepemilikan saham",
   "Dewan Komisaris",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-0165-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-seluruh-direksi-dan-komisaris-mundur-serentak",
  "category": "Aksi Korporasi",
  "title": "MKNT: Seluruh Direksi dan Komisaris [Mundur] Serentak",
  "deck": "Empat direksi dan komisaris PT Mitra Komunikasi Nusantara Tbk, termasuk Direktur Utama dan Komisaris Utama, kompak mengundurkan diri efektif 10 September 2026 tanpa penjelasan alasan.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "pergantian direksi",
   "komisaris",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b2115f2e8e_12887b556f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-lakukan-right-issue-danai-akuisisi-tambang-borneo-prima",
  "category": "Aksi Korporasi",
  "title": "FORU Lakukan [Right Issue], Danai Akuisisi Tambang Borneo Prima",
  "deck": "Fortune Indonesia bakal menerbitkan saham baru lewat rights issue untuk menyetor 49 persen saham PT Borneo Prima secara inbreng, plus pinjaman modal kerja ke perusahaan tambang itu.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "Rights Issue",
   "HMETD",
   "Borneo Prima"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0919b6e104_f291641ea2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atla-komisaris-jual-5-juta-saham-lewat-skema-repo",
  "category": "Aksi Korporasi",
  "title": "ATLA: Komisaris Jual [5 Juta] Saham Lewat Skema Repo",
  "deck": "Rudi R Sutantra, komisaris Atlantis Subsea Indonesia, melepas 5 juta saham lewat repurchase agreement, transaksi kedua beruntun setelah pelepasan 15 juta saham sebelumnya.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATLA",
   "kepemilikan saham",
   "komisaris",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-6686-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atla-komisaris-jual-10-juta-saham-lagi-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "ATLA: Komisaris Jual 10 Juta Saham Lagi Lewat [Repo]",
  "deck": "Rudi R Sutantra melaporkan penjualan 10 juta saham ATLA lewat skema repo pada 27 Juli 2026, laporan repo ketiganya yang diserahkan hari ini.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATLA",
   "Rudi Sutantra",
   "repo saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-4130-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-tipis-harga-minyak-bayangi-fiskal",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Tipis, Harga Minyak Bayangi Fiskal",
  "deck": "Rupiah menguat tipis ke Rp17.605 per dolar AS, sementara harga minyak dunia di atas US$100 per barel membebani anggaran subsidi BBM.",
  "date": "14 September 2026",
  "image": "assets/img/rupiah-menguat-tipis-harga-minyak-bayangi-fiskal.jpg",
  "imageV": "mu0pd86o",
  "tags": [
   "rupiah",
   "kurs dolar AS",
   "harga minyak",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466952-rupiah-menguat-ke-rp17605-per-dolar-as-di-tengah-tekanan-harga-minyak-dunia-terhadap-ketahanan-fiskal-ri"
 },
 {
  "slug": "mdla-pastikan-free-float-16-89-genjot-ekspor-medical-device",
  "category": "Aksi Korporasi",
  "title": "MDLA Pastikan Free Float 16,89%, Genjot [Ekspor] Medical Device",
  "deck": "Dalam Public Expose Tahunan 2026, manajemen Medela Potentia memastikan porsi saham publik 16,89% dan memaparkan rencana perluasan bisnis medical device serta ekspor ke ASEAN dan Afrika.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Public Expose",
   "Free Float",
   "Medical Device"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f258f5f2d8_cb93def460.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-direksi-george-oetomo-lepas-net-550-000-saham",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi George Oetomo Lepas Net [550.000] Saham",
  "deck": "Direksi TAPG George Oetomo menjual 800.000 saham lalu membeli balik 250.000 saham dalam dua hari, kepemilikannya turun bersih 550.000 lembar.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "kepemilikan saham",
   "direksi",
   "Triputra Agro Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-8217-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-komisaris-ibnu-susanto-tambah-saham-hak-suara-ke-17-07",
  "category": "Aksi Korporasi",
  "title": "BAJA: Komisaris [Ibnu Susanto] Tambah Saham, Hak Suara ke 17,07%",
  "deck": "Komisaris Ibnu Susanto menambah kepemilikan saham BAJA lewat sejumlah transaksi di pasar pada April 2026, menaikkan hak suaranya menjadi 17,07 persen.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "kepemilikan saham",
   "komisaris",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-14092026-8980-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-tipis-ke-rp2-602-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Tipis ke Rp2.602.000/Gram",
  "deck": "Harga emas Antam turun Rp2.000 menjadi Rp2.602.000 per gram pada 14 September 2026, sementara harga buyback juga turun ke Rp2.452.000 per gram.",
  "date": "14 September 2026",
  "image": "assets/img/harga-emas-antam-turun-tipis-ke-rp2-602-000-gram.jpg",
  "imageV": "mu0pd8kl",
  "tags": [
   "harga emas",
   "emas antam",
   "logam mulia",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466949-turun-tipis-rp2000-harga-emas-antam-hari-ini-14-september-2026-rp2602000-per-gram"
 },
 {
  "slug": "smfp-angkat-budi-susanto-jadi-direktur-utama-baru",
  "category": "Aksi Korporasi",
  "title": "SMFP Angkat Budi Susanto Jadi [Direktur Utama] Baru",
  "deck": "Kementerian Keuangan selaku pemegang saham mengangkat Budi Susanto sebagai Direktur Utama SMFP, menggantikan Ananta Wiyogo yang sebelumnya menjabat pelaksana tugas.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMFP",
   "direksi",
   "BUMN",
   "pergantian direktur utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e44eb4f439_f239e28d1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bansos-beras-30-kg-cair-september-ini-cara-cek-status",
  "category": "Makroekonomi",
  "title": "Bansos Beras 30 Kg [Cair] September, Ini Cara Cek Status",
  "deck": "Bapanas menyalurkan bantuan pangan 30 kilogram beras, hasil rapel tiga bulan, kepada 33,2 juta keluarga penerima manfaat pada September 2026.",
  "date": "14 September 2026",
  "image": "assets/img/bansos-beras-30-kg-cair-september-ini-cara-cek-status.jpg",
  "imageV": "mu0pd8yp",
  "tags": [
   "bansos",
   "beras",
   "DTSEN",
   "Bapanas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466943-bansos-beras-30-kilogram-cair-september-2026-begini-cara-cek-status-penerima-bansos"
 },
 {
  "slug": "petani-diduga-diminta-tebusan-rp150-juta-untuk-alsintan",
  "category": "Bisnis",
  "title": "Petani Diduga Diminta Tebusan [Rp150 Juta] untuk Alsintan",
  "deck": "Kementerian Pertanian membuka jalur pengaduan setelah petani di Banggai mengaku diminta membayar Rp150 juta untuk mendapat bantuan combine harvester.",
  "date": "14 September 2026",
  "image": "assets/img/petani-diduga-diminta-tebusan-rp150-juta-untuk-alsintan.jpg",
  "imageV": "mu0jt6bh",
  "tags": [
   "alsintan",
   "pungli bantuan",
   "Kementerian Pertanian",
   "Banggai"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8131",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "foru-kantongi-restu-ojk-rights-issue-inbreng-rp20-8-triliun",
  "category": "Aksi Korporasi",
  "title": "FORU Kantongi Restu OJK, Rights Issue [Inbreng] Rp20,8 Triliun",
  "deck": "FORU menyerahkan prospektus resmi rights issue Rp27,1 triliun. Pengendali IMR Asia Holding menyetor 49% saham Borneo Prima senilai Rp20,8 triliun, bukan uang tunai.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "rights issue",
   "HMETD",
   "Borneo Prima"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4bf4620c56_4cabb5d4ac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-umumkan-jadwal-rights-issue-rp27-1-t-dilusi-99-79",
  "category": "Aksi Korporasi",
  "title": "FORU Umumkan Jadwal Rights Issue Rp27,1 T, Dilusi [99,79%]",
  "deck": "Fortune Indonesia (FORU) menetapkan jadwal rights issue hingga Rp27,1 triliun, harga Rp126 per saham. Pemegang saham non-partisipan bisa terdilusi hingga 99,79 persen.",
  "date": "14 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "Fortune Indonesia",
   "rights issue",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f3af967f21_227e591471.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brics-dorong-pembentukan-bursa-gandum-bersama",
  "category": "Global",
  "title": "BRICS Dorong Pembentukan [Bursa Gandum] Bersama",
  "deck": "Pemimpin BRICS di KTT New Delhi sepakat melanjutkan pembahasan bursa perdagangan gandum bersama dan membuka opsi perluasan ke komoditas pertanian lain.",
  "date": "13 September 2026",
  "image": "assets/img/brics-dorong-pembentukan-bursa-gandum-bersama.jpg",
  "imageV": "mtzpv50e",
  "tags": [
   "BRICS",
   "gandum",
   "ketahanan pangan",
   "New Delhi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466858-brics-dorong-pembentukan-bursa-gandum-bersama-perdagangan-komoditas-pertanian-akan-diperluas"
 },
 {
  "slug": "presiden-prabowo-restui-amran-buru-mafia-beras-fortifikasi",
  "category": "Industri",
  "title": "Presiden Prabowo Restui Amran Buru [Mafia] Beras Fortifikasi",
  "deck": "Amran mengklaim mendapat restu Presiden Prabowo Subianto untuk mengusut mafia beras, menyusul temuan beras fortifikasi yang dijual jauh di atas nilai sebenarnya.",
  "date": "13 September 2026",
  "image": "assets/img/presiden-prabowo-restui-amran-buru-mafia-beras-fortifikasi.jpg",
  "imageV": "mtzpv5li",
  "tags": [
   "beras fortifikasi",
   "mafia beras",
   "Andi Amran Sulaiman",
   "Bapanas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466843-amran-direstui-prabowo-untuk-hajar-mafia-beras-93-persen-sampel-beras-fortifikasi-bermasalah"
 },
 {
  "slug": "ptk-kembangkan-kapal-hijau-bertenaga-surya-dan-baterai",
  "category": "BUMN",
  "title": "PTK Kembangkan Kapal [Hijau] Bertenaga Surya dan Baterai",
  "deck": "Anak usaha Pertamina ini memasang panel surya di kapal penunjang dan menyiapkan uji coba sistem baterai mulai 2027, bagian dari transformasi menuju armada maritim rendah emisi.",
  "date": "13 September 2026",
  "image": "assets/img/ptk-kembangkan-kapal-hijau-bertenaga-surya-dan-baterai.jpg",
  "imageV": "mtzpv60p",
  "tags": [
   "PTK",
   "Pertamina",
   "Green Vessel",
   "Maritim"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466828-dorong-green-vessel-jadi-masa-depan-industri-maritim-ptk-andalkan-plts-hingga-teknologi-baterai"
 },
 {
  "slug": "wskt-naik-peringkat-dari-default-ke-idb-creditwatch-negatif",
  "category": "Aksi Korporasi",
  "title": "WSKT Naik Peringkat dari Default ke [idB]/CreditWatch Negatif",
  "deck": "PEFINDO menaikkan peringkat WSKT dari status gagal bayar (idSD) ke idB/CreditWatch Negatif, menyusul kuorum restrukturisasi obligasi yang disetujui pemegang obligasi di RUPO 3 September 2026.",
  "date": "13 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "Waskita Karya",
   "peringkat obligasi",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/552df66a4a_dda76e348f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bea-cukai-raih-kepuasan-tinggi-tarif-impor-disorot",
  "category": "Bisnis",
  "title": "Bea Cukai Raih Kepuasan Tinggi, Tarif Impor [Disorot]",
  "deck": "Survei IDM 2026 mencatat kepuasan tinggi atas layanan Bea Cukai, tapi tarif bea masuk dan aturan pembebasan bea kiriman belanja online masih dikritik pelaku usaha.",
  "date": "12 September 2026",
  "image": "assets/img/bea-cukai-raih-kepuasan-tinggi-tarif-impor-disorot.jpg",
  "imageV": "mtyljr30",
  "tags": [
   "Bea Cukai",
   "DJBC",
   "Tarif Impor",
   "Survei IDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466716-survei-idm-2026-kepuasan-pengguna-jasa-bea-cukai-tinggi-tapi-tarif-dan-aturan-barang-impor-jadi-sorotan"
 },
 {
  "slug": "pertamina-tambah-nozzle-bbm-subsidi-di-12-spbu-makassar",
  "category": "Energi",
  "title": "Pertamina [Tambah] Nozzle BBM Subsidi di 12 SPBU Makassar",
  "deck": "Pertamina Patra Niaga mengubah konfigurasi dan menambah nozzle BBM subsidi di 12 SPBU Makassar untuk mengantisipasi lonjakan permintaan.",
  "date": "12 September 2026",
  "image": "assets/img/pertamina-tambah-nozzle-bbm-subsidi-di-12-spbu-makassar.jpg",
  "imageV": "mtygtilk",
  "tags": [
   "bbm subsidi",
   "spbu",
   "pertamina patra niaga",
   "makassar"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466682-antisipasi-lonjakan-bbm-pertamina-patra-niaga-ubah-konfigurasi-dan-tambah-nozzle-bbm-subsidi-di-belasan-spbu-makassar"
 },
 {
  "slug": "ojk-dukung-rekening-massal-bank-wajib-hati-hati",
  "category": "Perbankan",
  "title": "OJK Dukung Rekening Massal, Bank Wajib [Hati-hati]",
  "deck": "OJK mendukung program pembukaan rekening massal bagi warga baru 17 tahun dan penerima bansos, tapi menegaskan bank tetap harus menjalankan proses pengecekan identitas nasabah secara ketat.",
  "date": "12 September 2026",
  "image": "assets/img/ojk-dukung-rekening-massal-bank-wajib-hati-hati.jpg",
  "imageV": "mtyafu5w",
  "tags": [
   "OJK",
   "rekening massal",
   "bansos",
   "LPS"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466675-ojk-klaim-pembukaan-rekening-massal-strategis-untuk-perkuat-literasi-keuangan-tapi-bank-tetap-wajib-hati-hati"
 },
 {
  "slug": "presiden-prabowo-bicara-di-dua-sesi-utama-ktt-brics-india",
  "category": "Global",
  "title": "Presiden Prabowo Bicara di [Dua Sesi] Utama KTT BRICS India",
  "deck": "Presiden Prabowo Subianto dijadwalkan menyampaikan pandangan Indonesia dalam dua sesi utama KTT ke-18 BRICS di New Delhi, termasuk isu reformasi WTO, IMF, dan Bank Dunia.",
  "date": "12 September 2026",
  "image": "assets/img/presiden-prabowo-bicara-di-dua-sesi-utama-ktt-brics-india.jpg",
  "imageV": "mtyafula",
  "tags": [
   "BRICS",
   "Presiden Prabowo",
   "India",
   "Reformasi Ekonomi Global"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466661-presiden-prabowo-dijadwalkan-bicara-di-dua-sesi-utama-ktt-ke-18-brics-india"
 },
 {
  "slug": "apjati-perluas-penempatan-kerja-ke-malaysia",
  "category": "Ketenagakerjaan",
  "title": "APJATI Perluas Penempatan Kerja ke [Malaysia]",
  "deck": "APJATI menggelar forum bisnis ketenagakerjaan terbesarnya di Kuala Lumpur, mempertemukan puluhan agensi penyalur tenaga kerja Indonesia dan Malaysia untuk penempatan pekerja migran resmi.",
  "date": "12 September 2026",
  "image": "assets/img/apjati-perluas-penempatan-kerja-ke-malaysia.jpg",
  "imageV": "mty51ca3",
  "tags": [
   "APJATI",
   "Malaysia",
   "pekerja migran",
   "P3MI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466630-apjati-perkuat-kemitraan-ketenagakerjaan-indonesiamalaysia-lewat-employment-business-matching-2026"
 },
 {
  "slug": "puskopkar-ptpn-viii-diversifikasi-bisnis-lewat-dana-lpdb",
  "category": "UMKM",
  "title": "Puskopkar PTPN VIII [Diversifikasi] Bisnis Lewat Dana LPDB",
  "deck": "Puskopkar PTPN VIII memperluas bisnis ke agrowisata, laundry coin, dan barbershop dengan dukungan dana bergulir LPDB Koperasi sejak 2021, demi mengurangi ketergantungan pada bisnis induk perusahaan.",
  "date": "12 September 2026",
  "image": "assets/img/puskopkar-ptpn-viii-diversifikasi-bisnis-lewat-dana-lpdb.jpg",
  "imageV": "mty51cr7",
  "tags": [
   "puskopkar",
   "ptpn viii",
   "lpdb koperasi",
   "dana bergulir"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466617-dana-bergulir-lpdb-koperasi-perkuat-puskopkar-ptpn-viii-bisnis-teh-hingga-agrowisata-berhasil-dikembangkan"
 },
 {
  "slug": "anindya-bakrie-bawa-visi-hilirisasi-ri-ke-forum-brics",
  "category": "Global",
  "title": "Anindya Bakrie Bawa Visi [Hilirisasi] RI ke Forum BRICS",
  "deck": "Ketua Kadin Anindya Bakrie sampaikan visi ekonomi Presiden Prabowo di forum bisnis BRICS New Delhi, di hadapan Putin, Modi, dan pemimpin dunia lain.",
  "date": "12 September 2026",
  "image": "assets/img/anindya-bakrie-bawa-visi-hilirisasi-ri-ke-forum-brics.jpg",
  "imageV": "mtxz1jb2",
  "tags": [
   "brics",
   "kadin indonesia",
   "anindya bakrie",
   "hilirisasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466602-disimak-putin-hingga-modi-anindya-bakrie-pidato-bawa-visi-prabowo-ke-forum-brics"
 },
 {
  "slug": "bumdes-sulap-lahan-kosong-jadi-wisata-petik-melon",
  "category": "UMKM",
  "title": "BUMDes Sulap Lahan Kosong Jadi Wisata Petik [Melon]",
  "deck": "BUMDes Panjunan mengubah lahan kosong jadi greenhouse melon hidroponik yang bisa dipetik langsung, panen 400 buah tiap tiga bulan.",
  "date": "12 September 2026",
  "image": "assets/img/bumdes-sulap-lahan-kosong-jadi-wisata-petik-melon.jpg",
  "imageV": "mtxz1jrt",
  "tags": [
   "BUMDes",
   "melon hidroponik",
   "wisata petik",
   "ketahanan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466599-lahan-bumdes-disulap-jadi-wisata-petik-melon-3-bulan-sekali-panen-400-buah"
 },
 {
  "slug": "rupst-gria-tanpa-dividen-direktur-pemasaran-dihapus",
  "category": "Aksi Korporasi",
  "title": "RUPST GRIA: Tanpa [Dividen], Direktur Pemasaran Dihapus",
  "deck": "RUPST GRIA pada 30 Juni 2026 memutuskan tidak membagi dividen tahun buku 2025, menghapus jabatan Direktur Pemasaran, dan mengangkat Bambang Eko Prabowo sebagai Direktur Operasional baru.",
  "date": "12 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRIA",
   "RUPST",
   "dividen",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a12886f4ea_29c1331b54.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-bahas-rencana-ekspansi-kapasitas-nikel-di-publik-expose",
  "category": "Aksi Korporasi",
  "title": "PACK Bahas Rencana [Ekspansi] Kapasitas Nikel di Publik Expose",
  "deck": "Manajemen PACK mengaku tengah mempertimbangkan aksi korporasi untuk menambah kapasitas bijih nikel, dan menegaskan EEP tetap jadi pemegang saham pengendali, bukan Haji Isam.",
  "date": "12 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "Public Expose",
   "Aksi Korporasi",
   "Nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/44d3c65149_5efe3b8fa6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dssa-pangkas-modal-ganti-presiden-komisaris",
  "category": "Aksi Korporasi",
  "title": "DSSA [Pangkas] Modal, Ganti Presiden Komisaris",
  "deck": "RUPSLB DSSA menyetujui pengurangan modal lewat penarikan 3,85 miliar saham buyback dan menunjuk David Fernando Audy sebagai Presiden Komisaris baru.",
  "date": "12 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSSA",
   "RUPSLB",
   "pengurangan modal",
   "pergantian komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/484dae9803_a612d61cbd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mind-id-perluas-pemanfaatan-ai-di-rantai-tambang",
  "category": "BUMN",
  "title": "MIND ID Perluas Pemanfaatan [AI] di Rantai Tambang",
  "deck": "MIND ID memperluas penggunaan kecerdasan buatan dari eksplorasi hingga pemantauan emisi untuk memperkuat daya saing industri mineral nasional.",
  "date": "12 September 2026",
  "image": "assets/img/mind-id-perluas-pemanfaatan-ai-di-rantai-tambang.jpg",
  "imageV": "mtxjj168",
  "tags": [
   "MIND ID",
   "AI",
   "pertambangan",
   "teknologi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466549-pemanfaatan-ai-upaya-perkuat-daya-saing-industri-mineral"
 },
 {
  "slug": "buva-tambah-pinjaman-ke-anak-usaha-jadi-rp27-miliar",
  "category": "Aksi Korporasi",
  "title": "BUVA Tambah Pinjaman ke Anak Usaha Jadi [Rp27 Miliar]",
  "deck": "PT Bukit Uluwatu Villa Tbk menambah pinjaman ke anak usahanya PT Bukit Bali Permai sebesar Rp22 miliar, sehingga total pinjaman menjadi Rp27 miliar.",
  "date": "12 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "transaksi afiliasi",
   "pinjaman",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5f6be8807b_d0fa804ef7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-bina-1-500-umk-terpilih-dari-4-000-pendaftar",
  "category": "UMKM",
  "title": "Pertamina Bina [1.500] UMK Terpilih dari 4.000 Pendaftar",
  "deck": "Pertamina memulai pembinaan regional UMK Academy 2026 untuk lebih dari 1.500 pelaku usaha mikro dan kecil terpilih dari sekitar 4.000 pendaftar di seluruh Indonesia.",
  "date": "11 September 2026",
  "image": "assets/img/pertamina-bina-1-500-umk-terpilih-dari-4-000-pendaftar.jpg",
  "imageV": "mtx7lsj2",
  "tags": [
   "Pertamina",
   "UMK Academy",
   "UMKM",
   "Pembinaan Usaha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466523-lebih-1500-pelaku-usaha-berhasil-terpilih-pertamina-umk-academy-2026-resmi-dimulai"
 },
 {
  "slug": "diva-koreksi-laporan-dana-ipo-sisa-rp3-miliar-2h26",
  "category": "Aksi Korporasi",
  "title": "DIVA Koreksi Laporan Dana IPO, Sisa Rp3 Miliar [2H26]",
  "deck": "PT Distribusi Voucher Nusantara mengoreksi laporan realisasi dana IPO 2018. Realisasi sudah 99,51 persen, sisa Rp3 miliar ditargetkan habis semester II 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DIVA",
   "penggunaan dana IPO",
   "LRPD",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/abdfc33507_925f3bc5c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-lunasi-obligasi-sukuk-rp3-32-triliun-via-pinjaman-bank",
  "category": "Aksi Korporasi",
  "title": "PPGD Lunasi Obligasi-Sukuk [Rp3,32 Triliun] via Pinjaman Bank",
  "deck": "Dua seri obligasi dan sukuk Pegadaian senilai Rp3,32 triliun jatuh tempo 13 September 2026 dan didelisting dari BEI mulai 14 September, dibayar dari fasilitas pinjaman bank.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGD",
   "Pegadaian",
   "obligasi",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d3b473bfe6_25c5da348e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-catatkan-saham-baru-dari-konversi-waran",
  "category": "Aksi Korporasi",
  "title": "CYBR Catatkan Saham Baru dari [Konversi Waran]",
  "deck": "BEI mencatatkan tambahan 1.001.000 saham PT ITSEC Asia Tbk (CYBR) hasil konversi Waran Seri I, efektif diperdagangkan 14 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "konversi waran",
   "ITSEC Asia",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bea7c86100_a202b7b592.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obligasi-dan-sukuk-bmtr-rp10-6-miliar-jatuh-tempo-14-sept",
  "category": "Aksi Korporasi",
  "title": "Obligasi dan Sukuk BMTR Rp10,6 Miliar [Jatuh Tempo] 14 Sept",
  "deck": "BEI mengumumkan Obligasi Seri C dan Sukuk Ijarah Seri C Global Mediacom senilai total Rp10,6 miliar jatuh tempo 14 September 2026, dan perseroan menyatakan sudah menyiapkan dana pelunasannya.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMTR",
   "obligasi",
   "sukuk ijarah",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0ccffeb7ac_a9fc68a530.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smgr-utang-turun-ke-rp8-06-triliun-penjualan-naik-9-7",
  "category": "Aksi Korporasi",
  "title": "SMGR: Utang [Turun] ke Rp8,06 Triliun, Penjualan Naik 9,7%",
  "deck": "Dalam Public Expose Live 2026, manajemen SIG mengungkap utang turun dari Rp11,4 triliun menjadi Rp8,06 triliun dan volume penjualan tumbuh 9,7% pada semester I 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGR",
   "Semen Indonesia",
   "Public Expose",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3e171fbe53_b8ec5248b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-tambah-451-600-saham-dari-konversi-obligasi-wajib",
  "category": "Aksi Korporasi",
  "title": "PACK Tambah 451.600 Saham dari [Konversi] Obligasi Wajib",
  "deck": "BEI mencatatkan tambahan 451.600 saham PACK hasil konversi Obligasi Wajib Konversi senilai Rp45,16 juta per 11 September 2026, saham beredar naik jadi 34,11 miliar lembar.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "konversi obligasi",
   "pencatatan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/57549d3437_a1d4e9abe2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppri-komisaris-divestasi-10-juta-saham-suara-ke-12-76",
  "category": "Aksi Korporasi",
  "title": "PPRI: Komisaris [Divestasi] 10 Juta Saham, Suara ke 12,76%",
  "deck": "Komisaris PPRI menjual 10 juta saham senilai sekitar Rp1,97 miliar untuk tujuan divestasi, hak suaranya turun dari 13,69% menjadi 12,76%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRI",
   "Paperocks Indonesia",
   "Dewan Komisaris",
   "Divestasi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-7052-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-catatkan-896-500-saham-baru-dari-konversi-owk",
  "category": "Aksi Korporasi",
  "title": "PACK Catatkan 896.500 Saham Baru dari [Konversi] OWK",
  "deck": "Bursa mencatatkan penambahan 896.500 saham PACK hasil konversi Obligasi Wajib Konversi, efektif 14 September 2026, sisa obligasi konversi masih Rp7,06 miliar.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "Obligasi Wajib Konversi",
   "pencatatan saham",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b158f4e65a_fd633b7b56.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "taxi-rugi-2025-rups-putuskan-tanpa-dividen",
  "category": "Aksi Korporasi",
  "title": "TAXI rugi 2025, RUPS putuskan [tanpa dividen]",
  "deck": "RUPS Tahunan Express Transindo Utama (TAXI) memutuskan tidak membagi dividen karena rugi sepanjang 2025, sekaligus mengesahkan laporan keuangan dengan opini wajar tanpa pengecualian.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAXI",
   "RUPS Tahunan",
   "dividen",
   "Express Transindo Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f7b31ed480_ea71fc5b78.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adopsi-ai-kantor-melejit-tata-kelolanya-jadi-tantangan",
  "category": "Teknologi",
  "title": "Adopsi AI Kantor Melejit, Tata Kelolanya Jadi [Tantangan]",
  "deck": "Produktivitas naik pesat lewat AI, tapi tanpa aturan jelas perusahaan berisiko kehilangan kendali biaya dan akses.",
  "date": "11 September 2026",
  "image": "assets/img/adopsi-ai-kantor-melejit-tata-kelolanya-jadi-tantangan.jpg",
  "imageV": "mtx3kx2d",
  "tags": [
   "AI Enterprise",
   "Tata Kelola AI",
   "Produktivitas",
   "BYOAI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466506-tren-ai-makin-dipakai-di-perusahaan-mengapa-tata-kelolanya-jadi-tantangan-baru"
 },
 {
  "slug": "smdr-akhiri-sukuk-ijarah-himpun-rp1-75-triliun",
  "category": "Aksi Korporasi",
  "title": "SMDR Akhiri Sukuk Ijarah, Himpun [Rp1,75 Triliun]",
  "deck": "Samudera Indonesia mengakhiri periode penawaran umum berkelanjutan Sukuk Ijarah I dengan dana terhimpun Rp1,75 triliun, di bawah target Rp2 triliun.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDR",
   "sukuk ijarah",
   "obligasi syariah",
   "Samudera Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/67514b78f8_cd642f1057.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-luncurkan-festival-hijau-libatkan-umkm-dan-komunitas",
  "category": "UMKM",
  "title": "Telkom Luncurkan Festival [Hijau] Libatkan UMKM dan Komunitas",
  "deck": "Telkom merilis program tahunan BISA Green Action Fest 2026 bertajuk Tanah, Air, Kita, memadukan aksi lingkungan dengan pemberdayaan UMKM di ekosistemnya.",
  "date": "11 September 2026",
  "image": "assets/img/telkom-luncurkan-festival-hijau-libatkan-umkm-dan-komunitas.jpg",
  "imageV": "mtx3kxg6",
  "tags": [
   "Telkom",
   "UMKM",
   "Lingkungan",
   "Keberlanjutan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466504-telkomgroup-terus-dorong-gaya-hidup-berkelanjutan-melalui-zero-plastic-movement"
 },
 {
  "slug": "hrme-lawan-lelang-eksekusi-dua-bidang-tanah-di-menteng",
  "category": "Aksi Korporasi",
  "title": "HRME [Lawan] Lelang Eksekusi Dua Bidang Tanah di Menteng",
  "deck": "PT Menteng Heritage Realty Tbk melawan rencana lelang eksekusi hak tanggungan atas dua bidang tanah SHGB di Menteng yang dijadwalkan 15 September 2026, karena objek dinilai masih bersengketa.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRME",
   "sengketa hukum",
   "lelang eksekusi",
   "hak tanggungan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5312731ff1_87f6c27a20.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-pertahankan-peringkat-idaaa-obligasi-subordinasi-idaa",
  "category": "Aksi Korporasi",
  "title": "BBTN Pertahankan Peringkat [idAAA], Obligasi Subordinasi idAA",
  "deck": "Pefindo mempertahankan peringkat korporasi BBTN di idAAA dengan outlook stabil, serta menetapkan idAAA untuk obligasi sosial dan idAA untuk obligasi subordinasi hingga 1 September 2027.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "Pefindo",
   "peringkat obligasi",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a0b0c69e40_f1d2e2da77.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pefindo-turunkan-peringkat-obligasi-wika-ke-idd-usai-gagal-bayar",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Turunkan Peringkat Obligasi [WIKA] ke idD Usai Gagal Bayar",
  "deck": "PEFINDO menurunkan peringkat empat obligasi dan sukuk WIKA dari idCCC menjadi idD, menyusul tertundanya pembayaran pokok dan kupon Rp1,6 triliun pada 8 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "gagal bayar",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bf49fc1f14_b3dd7d72eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wton-ungkap-margin-bersih-tipis-0-07-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "WTON Ungkap Margin Bersih [Tipis] 0,07% di Public Expose",
  "deck": "Dalam Public Expose Tahunan, manajemen WIKA Beton membeberkan margin laba bersih kuartal II 2026 hanya 0,07% serta target kontrak baru Rp3,8-4 triliun di akhir tahun.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WTON",
   "Wijaya Karya Beton",
   "Public Expose",
   "BUMN Konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c2881464c6_faa33c07c3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "seleksi-maganghub-berlangsung-hasil-keluar-18-september",
  "category": "Ketenagakerjaan",
  "title": "Seleksi MagangHub Berlangsung, Hasil Keluar [18 September]",
  "deck": "Seleksi peserta Program Pemagangan Nasional (MagangHub) Batch 2 Angkatan II berlangsung 9-15 September, hasil diumumkan 18 September, magang mulai 21 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/pelatihan-vokasi.jpg",
  "tags": [
   "MagangHub",
   "Kemnaker",
   "Pemagangan",
   "Ketenagakerjaan"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/maganghub-batch-2-angkatan-ii-masuki-tahap-seleksi-hasil-diumumkan-18-september",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "pthk-rombak-komite-audit-anggota-baru-gantikan-mudanto-hatta",
  "category": "Aksi Korporasi",
  "title": "PTHK Rombak Komite Audit, [Anggota] Baru Gantikan Mudanto Hatta",
  "deck": "Hutama Karya (PTHK) mengganti satu anggota komite audit. Maulidya Indah Junica menggantikan Mudanto Hatta sebagai Wakil Ketua, efektif 11 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTHK",
   "Hutama Karya",
   "Komite Audit",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/deb33df7b8_282b2af9d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-sini-grup-pjk-bidik-pengambilalihan-wajib-mto",
  "category": "Aksi Korporasi",
  "title": "Public Expose SINI: Grup PJK Bidik [Pengambilalihan], Wajib MTO",
  "deck": "SINI ungkap negosiasi pengambilalihan oleh Grup PJK yang berpotensi memicu tender offer wajib, serta penggunaan dana rights issue dan cadangan batu bara yang naik ke 231 juta ton.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "Grup PJK",
   "tender offer wajib",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5621143147_7ebbc52798.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-cetak-laba-bersih-rp6-91-triliun-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "ANTM Cetak [Laba Bersih] Rp6,91 Triliun Semester I 2026",
  "deck": "ANTAM membukukan pendapatan Rp62,71 triliun dan laba bersih Rp6,91 triliun pada semester I 2026, ditopang bisnis emas, nikel, dan bauksit.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "laba bersih",
   "emas",
   "nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7d140c191a_77507ccfd5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sinar-mas-land-luncurkan-platform-digital-d-a-n-c-e",
  "category": "Teknologi",
  "title": "Sinar Mas Land Luncurkan Platform [Digital] D.A.N.C.E",
  "deck": "Sinar Mas Land meluncurkan D.A.N.C.E, platform digital untuk mempertemukan puluhan perusahaan di ekosistem Digital Hub BSD City lewat program pilot dan agenda komunitas.",
  "date": "11 September 2026",
  "image": "assets/img/sinar-mas-land-luncurkan-platform-digital-d-a-n-c-e.jpg",
  "imageV": "mtwxd8xq",
  "tags": [
   "Sinar Mas Land",
   "Digital Hub",
   "BSD City",
   "D.A.N.C.E"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466473-sinar-mas-land-resmi-luncurkan-dance-platform-networking-dan-community-engagement-bagi-ekosistem-digital-hub"
 },
 {
  "slug": "vici-komisaris-dan-komisaris-independen-mundur",
  "category": "Aksi Korporasi",
  "title": "VICI: Komisaris dan Komisaris Independen [Mundur]",
  "deck": "Komisaris Vibhav Panandiker dan Komisaris Independen Van Schoote Christian Pierre B mengundurkan diri dari VICI pada 10 September 2026, memicu rencana RUPS.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "komisaris independen",
   "pengunduran diri",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/45961ea227_cd55195f38.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-king-melonjak-7-49-manajemen-sebut-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "Saham KING Melonjak 7,49%, Manajemen Sebut Tak Ada Info [Material]",
  "deck": "Direksi PT Hoffmen Cleanindo Tbk menyatakan tidak ada informasi material yang mendasari lonjakan harga dan volume transaksi saham KING awal September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KING",
   "Hoffmen Cleanindo",
   "UMA",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ba0275e3db_9447d9c280.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmtp-bentuk-10-regional-ceo-disetujui-ojk",
  "category": "Aksi Korporasi",
  "title": "BMTP Bentuk 10 [Regional CEO], Disetujui OJK",
  "deck": "PT Bank Mandiri Taspen membentuk 10 kantor wilayah dengan Regional CEO di berbagai kota, sebagai bagian dari penguatan tata kelola organisasi.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMTP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3fce1d3803_ff4c31eaca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nice-jelaskan-arus-kas-operasi-negatif-meski-laba-naik",
  "category": "Aksi Korporasi",
  "title": "NICE jelaskan [arus kas] operasi negatif meski laba naik",
  "deck": "NICE menjelaskan ke BEI: laba semester I 2026 naik 80,8% ke Rp170,14 miliar, tapi arus kas operasi minus Rp106,48 miliar akibat denda kehutanan Rp185,93 miliar.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "laporan keuangan",
   "arus kas",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f763dff22b_fce51aab52.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akra-paparkan-kinerja-semester-i-lahan-jiipe-terjual-58-hektare",
  "category": "Aksi Korporasi",
  "title": "AKRA Paparkan Kinerja Semester I, Lahan [JIIPE] Terjual 58 Hektare",
  "deck": "Dalam public expose 8 September 2026, AKR Corporindo memaparkan penjualan lahan JIIPE sekitar 58 hektare, ROE 7%, dan realisasi capex Rp546 miliar dari target Rp1 triliun.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKRA",
   "AKR Corporindo",
   "Public Expose",
   "JIIPE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e0c9d2b042_6e1d16efe7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vici-teken-kredit-rp270-65-miliar-dari-bni-gantikan-fasilitas-bca",
  "category": "Aksi Korporasi",
  "title": "VICI Teken Kredit [Rp270,65 Miliar] dari BNI, Gantikan Fasilitas BCA",
  "deck": "Victoria Care Indonesia menandatangani lima fasilitas kredit dari Bank BNI senilai Rp270,65 miliar, setara 24,78 persen ekuitas, untuk modal kerja dan pengalihan pinjaman dari BCA.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "kredit perbankan",
   "Bank BNI",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e4912b009c_bd05e62b6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-klarifikasi-ke-bursa-soal-pemegang-saham-ditolak-masuk-rupslb",
  "category": "Aksi Korporasi",
  "title": "RANS Klarifikasi ke Bursa soal Pemegang Saham Ditolak Masuk [RUPSLB]",
  "deck": "RANS menanggapi permintaan penjelasan Bursa Efek Indonesia usai media memberitakan pemegang saham dilarang masuk RUPSLB tatap muka di BSD pada 10 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "RUPSLB",
   "Bursa Efek Indonesia",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9677f559c5_93e36134c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-saham-rp7-85-miliar",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama [Tambah] Saham Rp7,85 Miliar",
  "deck": "Tunggal Jaya Investama membeli 4,76 juta saham IMPC senilai sekitar Rp7,85 miliar pada 8 dan 10 September 2026, menaikkan hak suaranya tipis ke 38,41 persen.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "Tunggal Jaya Investama",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-7235-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-rencanakan-rights-issue-rp100-miliar-dilusi-50",
  "category": "Aksi Korporasi",
  "title": "LAPD Rencanakan [Rights Issue] Rp100 Miliar, Dilusi 50%",
  "deck": "Leyand International (LAPD) berencana menerbitkan hingga 2 miliar saham baru lewat rights issue kedua, disetor pengendali JSI Sinergi Mas via aset tambang batu bara senilai Rp44,4 miliar.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "HMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/75095f685b_927d47843a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-lepas-2-3-juta-saham-ke-grup-usaha",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri [lepas] 2,3 juta saham ke grup usaha",
  "deck": "Pemegang saham Putrasakti Mandiri menjual 2,3 juta saham Puri Sentul Permai seharga Rp408 per lembar untuk restrukturisasi internal kelompok usaha, hak suara turun tipis ke 32,13%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-2028-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-buyback-saham-tembus-9-8-juta-lembar-per-11-september",
  "category": "Aksi Korporasi",
  "title": "PRDA [Buyback] Saham Tembus 9,8 Juta Lembar per 11 September",
  "deck": "Prodia membeli kembali 343.600 saham pada 11 September, sehingga total buyback sejak 20 Agustus mencapai 9,81 juta lembar dengan sisa dana Rp123,46 miliar.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6e2be5e66f_575e623a29.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "assa-sewa-lahan-dari-kerabat-presdir-dalam-transaksi-afiliasi",
  "category": "Aksi Korporasi",
  "title": "ASSA Sewa Lahan dari Kerabat Presdir dalam Transaksi [Afiliasi]",
  "deck": "Anak usaha ASSA, PT Adi Sarana Transportasi, menyewa lahan 5.175 meter persegi milik kerabat Presiden Direktur senilai Rp2 miliar untuk tiga tahun.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASSA",
   "transaksi afiliasi",
   "Adi Sarana Armada",
   "sewa lahan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ed058ab606_eca465d126.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptmr-akui-salah-saji-laporan-keuangan-janji-revisi-menyeluruh",
  "category": "Aksi Korporasi",
  "title": "PTMR akui salah saji laporan keuangan, janji [revisi] menyeluruh",
  "deck": "Menjawab permintaan penjelasan BEI, Master Print mengakui rentetan kejanggalan pada laporan keuangan semester I 2026 dan berjanji merevisi jumlah saham, piutang, dan aset tetap.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTMR",
   "Master Print",
   "laporan keuangan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c8799e8b4d_79b4c6373d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medc-pertahankan-panduan-produksi-2026-meski-1h-lampaui-target",
  "category": "Aksi Korporasi",
  "title": "MEDC Pertahankan [Panduan] Produksi 2026 Meski 1H Lampaui Target",
  "deck": "MedcoEnergi mempertahankan target produksi 2026 di 165-170 mboepd meski semester pertama sudah melampauinya, dan mengkaji opsi monetisasi sebagian saham di Amman Mineral senilai US$2,6 miliar.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "Migas",
   "Amman Mineral",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/12c010a1ab_5dd124867d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "doid-bakal-terima-bagian-dari-dividen-spesial-us-93-juta-asiamet",
  "category": "Aksi Korporasi",
  "title": "DOID Bakal Terima Bagian dari [Dividen] Spesial US$93 Juta Asiamet",
  "deck": "Asiamet Resources, yang 44,15% sahamnya dimiliki DOID, merampungkan penjualan Indokal Limited ke Norin Mining dan menyetujui dividen khusus US$93 juta kepada pemegang saham.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOID",
   "Asiamet Resources",
   "dividen khusus",
   "Norin Mining"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/39c7aca55a_859563ff68.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inru-jawab-bei-akui-jadi-tersangka-kasus-pajak-rp2-triliun",
  "category": "Aksi Korporasi",
  "title": "INRU Jawab BEI, Akui Jadi [Tersangka] Kasus Pajak Rp2 Triliun",
  "deck": "INRU mengonfirmasi menerima surat penetapan tersangka dari Kejaksaan Agung soal dugaan korupsi transfer pricing Rp2 triliun, dan laporan keuangan kuartal II masih tertunda.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INRU",
   "Toba Pulp Lestari",
   "korupsi pajak",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cb92233b16_17483f7b0e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-pertahankan-rating-idaa-outlook-positif-dari-pefindo",
  "category": "Aksi Korporasi",
  "title": "TPIA Pertahankan Rating idAA- Outlook [Positif] dari PEFINDO",
  "deck": "PEFINDO menegaskan peringkat idAA- dengan outlook positif untuk seluruh obligasi berkelanjutan TPIA senilai total sekitar Rp14 triliun, berlaku hingga September 2027.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "PEFINDO",
   "obligasi korporasi",
   "Chandra Asri Pacific"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/12bb4e9a4c_f16f4c00d6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-manajemen-target-ebitda-ikn-positif-akhir-2026",
  "category": "Aksi Korporasi",
  "title": "HEAL: Manajemen Target [EBITDA] IKN Positif Akhir 2026",
  "deck": "Public expose tahunan Hermina memaparkan sisa capex Rp500 miliar untuk alat medis dan renovasi RS, kontribusi Astra-Djarum 10% pendapatan, serta proyeksi EBITDA IKN positif akhir tahun.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "public expose",
   "rumah sakit",
   "EBITDA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6958b1d54b_fd5ff2cc08.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-teken-mra-mulai-implementasi-restrukturisasi-utang",
  "category": "Aksi Korporasi",
  "title": "PTPP Teken [MRA], Mulai Implementasi Restrukturisasi Utang",
  "deck": "PT PP (Persero) Tbk menandatangani Master Restructuring Agreement dengan Danantara Aset Manajemen dan bank kreditur, menandai masuknya restrukturisasi utang ke tahap implementasi.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "restrukturisasi utang",
   "Danantara Aset Manajemen",
   "MRA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e46bac39e0_b97439a159.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kici-catat-rugi-rp2-8-miliar-meski-penjualan-naik-18",
  "category": "Aksi Korporasi",
  "title": "KICI Catat [Rugi] Rp2,8 Miliar meski Penjualan Naik 18%",
  "deck": "Kedaung Indah Can menjelaskan ke BEI penyebab kenaikan aset dan utang, serta penurunan ekuitas dan laba bersih pada semester I 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KICI",
   "Kedaung Indah Can",
   "laporan keuangan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/264608455e_3afd407a5d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abda-ganti-direksi-julien-pierre-combaret-mundur",
  "category": "Aksi Korporasi",
  "title": "ABDA Ganti Direksi, [Julien Pierre Combaret] Mundur",
  "deck": "RUPSLB ABDA pada 7 September 2026 menyetujui pengunduran diri Direktur Julien Pierre Combaret efektif 17 September 2026, sekaligus menegaskan susunan direksi dan komisaris baru.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABDA",
   "perubahan direksi",
   "RUPSLB",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/908ea7a7b6_2931bb91fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-jadwalkan-rupslb-pada-20-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "LAPD Jadwalkan [RUPSLB] pada 20 Oktober 2026",
  "deck": "Leyand International Tbk mengumumkan RUPSLB digelar 20 Oktober 2026 di Jakarta. Pemegang saham yang berhak hadir dicatat per 25 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "RUPSLB",
   "Leyand International",
   "rapat pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d5d2ea48d7_1802a7ea31.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "alka-dan-agar-keluar-dari-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "ALKA dan AGAR keluar dari [pemantauan khusus] BEI",
  "deck": "Bursa mencabut status pemantauan khusus saham ALKA dan AGAR mulai 14 September 2026, keduanya kembali ke Papan Pengembangan dengan mekanisme perdagangan normal.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALKA",
   "AGAR",
   "BEI",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/269c001c5b_5995ccd9cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-umumkan-rencana-rupslb-pada-20-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "SMMT Umumkan Rencana [RUPSLB] pada 20 Oktober 2026",
  "deck": "Golden Eagle Energy (SMMT) akan menggelar RUPSLB di Jakarta pada 20 Oktober 2026. Pemegang saham per 25 September 2026 berhak hadir, agenda rapat baru diumumkan 28 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "RUPSLB",
   "Golden Eagle Energy",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6d15e5342e_9c92938bb2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-ungkap-alasan-akuisisi-bmg-dalam-public-expose",
  "category": "Aksi Korporasi",
  "title": "TOWR Ungkap Alasan Akuisisi [BMG] dalam Public Expose",
  "deck": "Manajemen TOWR menjelaskan alasan akuisisi BMG dan cara menjaga beban bunga di public expose tahunan yang dihadiri 117 investor.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "Public Expose",
   "Akuisisi BMG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0bf37a25f4_c2685feb69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-komisaris-jual-431-200-saham-senilai-rp1-miliar",
  "category": "Aksi Korporasi",
  "title": "TAPG: Komisaris [Jual] 431.200 Saham Senilai Rp1 Miliar",
  "deck": "PT Investindo Arya, yang menjabat komisaris TAPG, melepas 431.200 saham TAPG pada 8 September 2026 seharga Rp2.320 per saham, mengurangi hak suaranya menjadi 0,0119%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "kepemilikan saham",
   "komisaris",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-9487-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suni-jawab-bursa-laba-turun-piutang-macet-melonjak-609",
  "category": "Aksi Korporasi",
  "title": "SUNI Jawab Bursa: Laba Turun, Piutang Macet [Melonjak] 609%",
  "deck": "SUNI menjawab permintaan penjelasan Bursa Efek Indonesia soal laporan keuangan Juni 2026: penjualan dan laba turun, piutang macet melonjak, namun rasio utang ke bank masih aman.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUNI",
   "laporan keuangan",
   "piutang macet",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fecfddcaab_254548d8f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "grph-balas-bursa-beban-gaji-naik-68-lampaui-pendapatan",
  "category": "Aksi Korporasi",
  "title": "GRPH Balas Bursa: [Beban] Gaji Naik 68%, Lampaui Pendapatan",
  "deck": "Griptha Putra Persada menjawab surat permintaan penjelasan BEI soal lonjakan beban gaji, piutang usaha, dan koreksi laporan keuangan periode pembanding.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRPH",
   "Griptha Putra Persada",
   "laporan keuangan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b8bc6d0d70_e871d425c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "swat-opini-auditor-dikualifikasi-utang-bank-tak-tercatat-rp29-m",
  "category": "Aksi Korporasi",
  "title": "SWAT: Opini Auditor [Dikualifikasi], Utang Bank Tak Tercatat Rp29 M",
  "deck": "Auditor memberi opini dengan pengecualian atas laporan keuangan 2025 SWAT karena sekitar Rp29 miliar utang bank belum tercatat, di tengah rugi bersih Rp48,8 miliar dan keraguan kelangsungan usaha.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "laporan keuangan",
   "opini auditor",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260911145807-64381-0/FinancialStatement-2025-Tahunan-SWAT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mapi-cetak-laba-rp1-45-triliun-di-semester-i-2026-naik-27",
  "category": "Aksi Korporasi",
  "title": "MAPI Cetak Laba [Rp1,45 Triliun] di Semester I 2026, Naik 27%",
  "deck": "Laporan keuangan interim terkoreksi MAPI menunjukkan pendapatan naik 23 persen dan laba bersih naik 27 persen pada semester I 2026, sementara utang bank melonjak 35 persen.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAPI",
   "laporan keuangan",
   "ritel",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260911150925-64360-0/FinancialStatement-2026-II-MAPI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aces-target-tambah-40-50-toko-neka-sepanjang-2026",
  "category": "Aksi Korporasi",
  "title": "ACES Target Tambah 40-50 Toko [NEKA] Sepanjang 2026",
  "deck": "Dalam laporan hasil public expose tahunan, direksi ACES memaparkan laba bersih semester I naik 33%, jaringan 274 toko AZKO dan 20 toko NEKA, serta target ekspansi NEKA hingga 50 toko baru tahun ini.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACES",
   "AZKO",
   "NEKA",
   "ritel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9236970505_968885405e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gria-ganti-direksi-bambang-eko-prabowo-gantikan-dody-supriyadi",
  "category": "Aksi Korporasi",
  "title": "GRIA Ganti [Direksi]: Bambang Eko Prabowo Gantikan Dody Supriyadi",
  "deck": "GRIA mengoreksi pengumuman perubahan direksi: Bambang Eko Prabowo gantikan Moch Dody Supriyadi, sementara satu kursi direktur dihapus sesuai hasil RUPS 30 Juni 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRIA",
   "Direksi",
   "RUPS",
   "Ingria Pratama Capitalindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8a11c6a845_079a40769a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-bukukan-laba-rp34-2-miliar-ekuitas-melonjak-ke-rp3-8-t",
  "category": "Aksi Korporasi",
  "title": "INET Bukukan Laba Rp34,2 Miliar, [Ekuitas] Melonjak ke Rp3,8 T",
  "deck": "Pendapatan INET melonjak ke Rp926,5 miliar dan ekuitas naik jadi Rp3,8 triliun pada semester I 2026, didorong rights issue, penerbitan obligasi-sukuk Rp1 triliun, dan akuisisi anak usaha.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "laporan keuangan",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/27ab0e8a51_c370cad22d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-lepas-289-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Lepas 289 Juta Saham Lewat [Repo]",
  "deck": "Direksi NSSS lewat Samuel Sekuritas Indonesia menjual 289,3 juta saham senilai sekitar Rp160,6 miliar pada 10 September 2026, memangkas hak suaranya dari 26,61% menjadi 25,40%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-2845-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "palm-ganti-direktur-gomos-benjamin-silitonga-masuk-jajaran",
  "category": "Aksi Korporasi",
  "title": "PALM Ganti Direktur, [Gomos Benjamin Silitonga] Masuk Jajaran",
  "deck": "Provident Investasi Bersama mengumumkan Gomos Benjamin Silitonga menjadi Direktur baru menggantikan Budianto Purwahjo, sementara mayoritas pengurus lain dipertahankan.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PALM",
   "pergantian direksi",
   "tata kelola perusahaan",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4463982088_781f13f0bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-laba-bersih-ultra-voucher-melonjak-600-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "UVCR: Laba bersih Ultra Voucher melonjak [600%] semester I 2026",
  "deck": "Dalam public expose tahunan 10 September 2026, manajemen UVCR memaparkan lonjakan laba bersih lebih dari 600% dan pendapatan 42,5% pada semester I 2026, didorong ekspansi B2B dan UVGC.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "Ultra Voucher",
   "UVGC",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bd877c6b42_7c35ab18e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kapolri-minta-pengusaha-jadikan-buruh-mitra-keluarga",
  "category": "Ketenagakerjaan",
  "title": "Kapolri Minta Pengusaha Jadikan Buruh [Mitra] Keluarga",
  "deck": "Kapolri Listyo Sigit Prabowo mendorong pengusaha menjadikan buruh sebagai aset dan mitra, bukan sekadar tenaga kerja, dalam forum konsolidasi FSPMI di Bekasi.",
  "date": "11 September 2026",
  "image": "assets/img/kapolri-minta-pengusaha-jadikan-buruh-mitra-keluarga.jpg",
  "imageV": "mtwpks3e",
  "tags": [
   "buruh",
   "kapolri",
   "hubungan industrial",
   "FSPMI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466383-bicara-nasib-buruh-kapolri-sampaikan-pesan-ke-pengusaha-jadikan-mereka-aset-mitra-dan-keluarga-perusahaan"
 },
 {
  "slug": "hais-pendapatan-berpotensi-tertekan-hingga-20-di-2026",
  "category": "Aksi Korporasi",
  "title": "HAIS: Pendapatan Berpotensi Tertekan hingga [20%] di 2026",
  "deck": "Manajemen HAIS proyeksikan pendapatan 2026 terkoreksi 10-20 persen akibat penyesuaian volume batu bara, sementara biaya bahan bakar yang tinggi turut menekan margin perusahaan pelayaran ini.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAIS",
   "public expose",
   "pelayaran batu bara",
   "Floating Crane"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1cee8afa65_f17bf0fffe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soho-tanggapi-bursa-ungkap-evaluasi-pemenuhan-free-float",
  "category": "Aksi Korporasi",
  "title": "SOHO Tanggapi Bursa, Ungkap Evaluasi Pemenuhan [Free Float]",
  "deck": "Menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, SOHO menyatakan tidak ada informasi material yang belum diungkap, tapi tengah mengevaluasi cara memenuhi syarat saham beredar publik.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOHO",
   "free float",
   "volatilitas saham",
   "Soho Global Health"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9221fd2ad9_b609eda88d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-jual-29-6-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Jual 29,6 Juta Saham Lewat [Repo]",
  "deck": "Direksi Samuel Sekuritas Indonesia melepas 29,6 juta saham RLCO seharga Rp2.200 per saham untuk pencairan repo, hak suara turun dari 6,57% menjadi 5,62%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-1536-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-presiden-direktur-mundur-bertepatan-rupslb-30-september",
  "category": "Aksi Korporasi",
  "title": "ASBI: Presiden Direktur [Mundur] Bertepatan RUPSLB 30 September",
  "deck": "Hastanto Sri Margi Widodo mundur dari kursi Presiden Direktur merangkap Direktur Teknik ASBI, efektif 30 September 2026, bertepatan dengan RUPSLB perusahaan.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "pengunduran diri direksi",
   "RUPSLB",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/75aa7c73ce_21857a0272.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdla-marjin-kotor-turun-ke-9-3-meski-pendapatan-naik-10-1",
  "category": "Aksi Korporasi",
  "title": "MDLA: Marjin Kotor [Turun] ke 9,3% Meski Pendapatan Naik 10,1%",
  "deck": "Public expose MDLA ungkap marjin kotor turun ke 9,3% pada semester I 2026, porsi saham publik 16,89% penuhi syarat minimum, dan penjualan alat kesehatan tumbuh 34%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Medela Potentia",
   "public expose",
   "marjin kotor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a63dfb90c7_c6069b5274.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-cgs-international-jual-bersih-126-juta-saham-wilton-makmur",
  "category": "Aksi Korporasi",
  "title": "SQMI: CGS International [Jual] Bersih 126 Juta Saham Wilton Makmur",
  "deck": "CGS International Securities Singapore melaporkan penjualan bersih 126 juta saham Wilton Makmur pada 4 September 2026, menurunkan hak suaranya dari 19,58% menjadi 18,77%.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "kepemilikan saham",
   "CGS International",
   "Wilton Makmur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-0829-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "life-ungkap-pemicu-laba-naik-investasi-ke-sinar-mas-disorot",
  "category": "Aksi Korporasi",
  "title": "LIFE Ungkap Pemicu Laba Naik, Investasi ke [Sinar Mas] Disorot",
  "deck": "Dalam public expose insidentil, manajemen LIFE menjelaskan penyebab kenaikan laba serta menjawab pertanyaan analis soal penempatan dana di entitas Grup Sinar Mas.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "MSIG Life Insurance",
   "Public Expose",
   "Grup Sinar Mas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e167318277_708de80761.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emmi-yulie-sekuritas-tambah-saham-lewati-10",
  "category": "Aksi Korporasi",
  "title": "EMMI: Yulie Sekuritas Tambah Saham, Lewati [10%]",
  "deck": "Yulie Sekuritas Indonesia menambah 1.441.900 lembar saham EMMI pada 9-10 September 2026, membuat hak suaranya naik dari 9,95 persen menjadi 10,06 persen.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMMI",
   "kepemilikan saham",
   "Yulie Sekuritas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-6017-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "spre-kepemilikan-moch-adhi-pamungkas-melonjak-ke-5-52",
  "category": "Aksi Korporasi",
  "title": "SPRE: Kepemilikan Moch Adhi Pamungkas [Melonjak] ke 5,52%",
  "deck": "Investor non-direksi menambah kepemilikan saham SPRE dari 3,6 juta menjadi 44,2 juta unit, hak suara naik jadi 5,52 persen.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPRE",
   "kepemilikan saham",
   "OJK",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11092026-1074-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peruri-raih-bintang-5-di-top-grc-awards-2026",
  "category": "BUMN",
  "title": "Peruri Raih [Bintang 5] di Top GRC Awards 2026",
  "deck": "Peruri kembali meraih predikat tertinggi Bintang 5 dan Golden Trophy di Top GRC Awards 2026, sementara direktur teknologi dan manajemen risikonya meraih penghargaan individu.",
  "date": "11 September 2026",
  "image": "assets/img/peruri-raih-bintang-5-di-top-grc-awards-2026.jpg",
  "imageV": "mtweww5y",
  "tags": [
   "Peruri",
   "BUMN",
   "Tata Kelola",
   "GovTech Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466349-peruri-kembali-raih-top-grc-awards-2026-perkuat-tata-kelola-dan-manajemen-risiko"
 },
 {
  "slug": "ptpp-restrukturisasi-utang-rp18-2-triliun-ke-bank-bumn",
  "category": "Aksi Korporasi",
  "title": "PTPP Restrukturisasi Utang [Rp18,2 Triliun] ke Bank BUMN",
  "deck": "PTPP menandatangani Master Restructuring Agreement senilai Rp18,2 triliun dengan empat bank BUMN untuk restrukturisasi utang, efektif setelah RUPS dan sejumlah syarat terpenuhi.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "restrukturisasi utang",
   "Master Restructuring Agreement",
   "bank BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c2e3adfea4_f31a257d6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpk-konfirmasi-akuisisi-saham-dpal-tahap-kedua-masih-berjalan",
  "category": "Aksi Korporasi",
  "title": "PKPK Konfirmasi Akuisisi Saham [DPAL] Tahap Kedua Masih Berjalan",
  "deck": "Menjawab permintaan BEI soal volatilitas transaksi, PKPK menyatakan tidak ada fakta material tersembunyi dan proses akuisisi saham DPAL Tahap Kedua dari DIR dan KNG masih berjalan.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PKPK",
   "Paragon Karya Perkasa",
   "volatilitas saham",
   "akuisisi DPAL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3a92026e0b_932465bfc9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-dibuka-melemah-ekor-bursa-asia-dan-wall-street",
  "category": "Pasar Modal",
  "title": "IHSG Dibuka [Melemah], Ekor Bursa Asia dan Wall Street",
  "deck": "IHSG dibuka turun 0,55 persen ke 6.552, mengikuti pelemahan bursa Asia-Pasifik dan Wall Street akibat lonjakan harga minyak dan kekhawatiran suku bunga The Fed.",
  "date": "11 September 2026",
  "image": "assets/img/ihsg-dibuka-melemah-ekor-bursa-asia-dan-wall-street.jpg",
  "imageV": "mtwewwkx",
  "tags": [
   "IHSG",
   "harga minyak",
   "The Fed",
   "bursa Asia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466344-ihsg-dibuka-memerah-dibayangi-pelemahan-serupa-bursa-asia-pasifik-dan-wall-street"
 },
 {
  "slug": "scnp-jelaskan-ke-bursa-alasan-free-float-belum-15",
  "category": "Aksi Korporasi",
  "title": "SCNP Jelaskan ke Bursa Alasan [Free Float] Belum 15%",
  "deck": "SCNP menjelaskan ke BEI bahwa harga sahamnya kini di bawah harga buyback, sehingga sulit melepas saham treasuri untuk memenuhi syarat minimum saham publik 15 persen.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCNP",
   "free float",
   "saham treasuri",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7dae3c86e3_dddc63249c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penerimaan-pajak-tumbuh-23-7-persen-jadi-rp1-224-3-t",
  "category": "Makroekonomi",
  "title": "Penerimaan Pajak [Tumbuh] 23,7 Persen jadi Rp1.224,3 T",
  "deck": "Penerimaan pajak Juli 2026 naik 23,7 persen menjadi Rp1.224,3 triliun tanpa kenaikan tarif, sementara defisit APBN melebar ke 0,91 persen PDB.",
  "date": "11 September 2026",
  "image": "assets/img/penerimaan-pajak-tumbuh-23-7-persen-jadi-rp1-224-3-t.jpg",
  "imageV": "mtwewx2y",
  "tags": [
   "pajak",
   "APBN",
   "Kementerian Keuangan",
   "defisit anggaran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466335-purbaya-penerimaan-pajak-capai-rp-12243-triliun-di-juli-2026-tumbuh-237-persen"
 },
 {
  "slug": "blog-realisasi-capex-baru-rp200-m-dari-target-rp500-m",
  "category": "Aksi Korporasi",
  "title": "BLOG: Realisasi Capex Baru Rp200 M dari Target [Rp500 M]",
  "deck": "Hasil public expose tahunan BLOG mengungkap realisasi capex baru sekitar Rp200 miliar dari target Rp500 miliar, target laba tumbuh di atas 10 persen, dan dividen tahun ini belum diputuskan.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLOG",
   "public expose",
   "capex",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9df3c24459_1f6f77f187.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-peringkat-utang-turun-ke-idb-creditwatch-negatif",
  "category": "Aksi Korporasi",
  "title": "PTPP: Peringkat Utang Turun ke idB, [CreditWatch] Negatif",
  "deck": "PEFINDO memangkas peringkat PT PP dari idBB ke idB dengan status CreditWatch negatif, setelah pemegang obligasi dan sukuk menolak usulan restrukturisasi bunga dan jatuh tempo utang.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "PEFINDO",
   "peringkat utang",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a3be6272ee_219c9001f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "izin-kerja-tka-diintegrasi-terbit-maksimal-4-hari",
  "category": "Bisnis",
  "title": "Izin Kerja TKA Diintegrasi, Terbit Maksimal [4 Hari]",
  "deck": "Pemerintah menyambungkan sistem OSS, Kemnaker, dan Imigrasi untuk mengurus izin kerja dan tinggal tenaga asing, dengan batas waktu layanan dan izin otomatis terbit jika telat.",
  "date": "11 September 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "TKA",
   "BKPM",
   "OSS",
   "Investasi"
  ],
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/perkuat-daya-tarik-investasi-pemerintah-integrasikan-sistem-layanan-tka",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "rupslb-hais-sahkan-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "RUPSLB HAIS Sahkan Perubahan [Direksi]",
  "deck": "RUPSLB HAIS menyetujui pengunduran diri Direktur Rahmad Pudjotomo dan menetapkan susunan direksi serta komisaris baru, efektif 9 September 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAIS",
   "direksi",
   "RUPSLB",
   "Hasnur Group"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ec2b7a821_9589db8e6a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-minyak-indonesia-naik-ke-us-89-43-per-barel-agustus",
  "category": "Energi",
  "title": "Harga Minyak Indonesia [Naik] ke US$89,43 per Barel Agustus",
  "deck": "ICP Agustus 2026 naik ke US$89,43 per barel dipicu ketegangan di Selat Hormuz dan Laut Merah; September diproyeksikan US$83-87 per barel.",
  "date": "11 September 2026",
  "image": "assets/img/harga-minyak-indonesia-naik-ke-us-89-43-per-barel-agustus.jpg",
  "imageV": "mtw5d3nt",
  "tags": [
   "ICP",
   "Harga Minyak Mentah",
   "ESDM",
   "Geopolitik Energi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/icp-agustus-naik-ke-us-8943-per-barel-pemerintah-cermati-dinamika-pasar-global",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ipac-jadwalkan-rupslb-20-oktober-dps-25-september",
  "category": "Aksi Korporasi",
  "title": "IPAC Jadwalkan RUPSLB 20 Oktober, DPS [25 September]",
  "deck": "Era Graharealty (IPAC) akan menggelar RUPSLB pada 20 Oktober 2026. Pemegang saham yang berhak hadir dicatat per 25 September 2026 pukul 16.00 WIB.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPAC",
   "RUPSLB",
   "Era Graharealty",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/22b028bb1a_e5485154f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipac-ajukan-delisting-tender-saham-publik-rp250-saham",
  "category": "Aksi Korporasi",
  "title": "IPAC Ajukan [Delisting], Tender Saham Publik Rp250/Saham",
  "deck": "APAC Investment 2 Pte Ltd, pengendali IPAC, menawarkan Rp250 per saham untuk membeli sisa 9,4 persen saham publik, premi sekitar 44 persen dari rata-rata harga. RUPSLB digelar 20 Oktober 2026.",
  "date": "11 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPAC",
   "go private",
   "delisting",
   "tender offer saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/24e3984bcc_151daa1854.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beer-panggil-rupslb-agendakan-perubahan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "BEER Panggil RUPSLB, Agendakan [Perubahan] Direksi-Komisaris",
  "deck": "PT Jobubu Jarum Minahasa Tbk mengundang pemegang saham ke RUPSLB 2 Oktober 2026 untuk membahas revisi Pasal 3 anggaran dasar dan kemungkinan pergantian direksi serta komisaris.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEER",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a565fb2c56_b522fff865.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smdr-jawab-bei-margin-susut-laba-nyaris-stagnan",
  "category": "Aksi Korporasi",
  "title": "SMDR Jawab BEI: [Margin] Susut, Laba Nyaris Stagnan",
  "deck": "SMDR menjelaskan ke BEI penyebab margin kotor yang menyusut, beban penyusutan naik 71 persen, dan laba bersih semester I 2026 yang nyaris tak tumbuh.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDR",
   "Samudera Indonesia",
   "laporan keuangan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/241bd87170_44053c6d09.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptba-beber-laba-naik-218-proyek-kramasan-alami-keterlambatan",
  "category": "Aksi Korporasi",
  "title": "PTBA Beber Laba Naik 218%, Proyek [Kramasan] Alami Keterlambatan",
  "deck": "Public expose PTBA memaparkan laba bersih semester I 2026 melonjak 218 persen menjadi Rp2,64 triliun, sementara proyek Dermaga Kramasan molor dari jadwal semula.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTBA",
   "Bukit Asam",
   "Public Expose",
   "Kramasan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/aafbb37770_dcbb02c8e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "isea-jawab-bursa-utang-lampaui-proyeksi-marjin-turun",
  "category": "Aksi Korporasi",
  "title": "ISEA Jawab Bursa: [Utang] Lampaui Proyeksi, Marjin Turun",
  "deck": "ISEA menjawab permintaan penjelasan Bursa Efek Indonesia soal rasio utang yang melampaui proyeksi IPO, margin laba kotor yang menyusut, dan piutang usaha yang seluruhnya telah jatuh tempo.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISEA",
   "Bursa Efek Indonesia",
   "ekspor udang",
   "tarif AS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/26897befd3_af1cd42d3c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-tawarkan-obligasi-dan-sukuk-tahap-iv-rp1-68-triliun",
  "category": "Aksi Korporasi",
  "title": "LPPI Tawarkan Obligasi dan Sukuk Tahap IV [Rp1,68 Triliun]",
  "deck": "LPPI menawarkan obligasi tahap IV senilai sebanyak-banyaknya Rp1 triliun dan sukuk mudharabah Rp676,63 miliar, dengan bunga tetap 10-10,5 persen dan masa penawaran 23-25 September 2026.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "obligasi",
   "sukuk",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/de4474cc13_86305c0da0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-rinci-ekspansi-pembiayaan-individu-dan-nbfi-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "BTPS Rinci Ekspansi Pembiayaan Individu dan [NBFI] di Public Expose",
  "deck": "BTPN Syariah membukukan laba Rp655 miliar pada semester satu 2026 dan memaparkan rincian ekspansi ke pembiayaan individu, wealth management, dan pembiayaan ke lembaga keuangan non-bank.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "Bank BTPN Syariah",
   "public expose",
   "pembiayaan individu"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/040f744126_c1bf31a152.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadin-dorong-tambang-ri-pakai-ai-hadapi-tekanan-geopolitik",
  "category": "Energi",
  "title": "Kadin Dorong Tambang RI Pakai [AI] Hadapi Tekanan Geopolitik",
  "deck": "Kadin ESDM dan MIND ID mendorong perusahaan tambang mempercepat adopsi AI, elektrifikasi, dan efisiensi modal di tengah tekanan geopolitik dan harga komoditas yang bergejolak.",
  "date": "10 September 2026",
  "image": "assets/img/kadin-dorong-tambang-ri-pakai-ai-hadapi-tekanan-geopolitik.jpg",
  "imageV": "mtvo1fcb",
  "tags": [
   "Kadin",
   "Tambang",
   "AI",
   "ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466269-hadapi-geopolitik-dan-era-ai-kadin-paparkan-strategi-untuk-masa-depan-industri-tambang-indonesia"
 },
 {
  "slug": "mglv-wajib-gelar-public-expose-usai-disuspensi-cooling-down",
  "category": "Aksi Korporasi",
  "title": "MGLV Wajib Gelar Public Expose Usai Disuspensi [Cooling Down]",
  "deck": "Perdagangan saham MGLV disetop sementara oleh BEI untuk cooling down, dan Perseroan diminta memaparkan kinerja terkini secara virtual pada 16 September 2026.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "suspensi saham",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6f15b2865e_d9c43ac35d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-setop-perdagangan-saham-ipac-era-graharealty-go-private",
  "category": "Aksi Korporasi",
  "title": "BEI Setop Perdagangan Saham [IPAC], Era Graharealty Go Private",
  "deck": "Bursa Efek Indonesia menghentikan sementara perdagangan saham IPAC di seluruh pasar mulai sesi I, 11 September 2026, menyusul rencana voluntary delisting dan go private Era Graharealty Tbk.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPAC",
   "delisting",
   "suspensi saham",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2575fdb07b_1df879f57f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-malaysia-thailand-kejar-rampungkan-92-proyek-imt-gt",
  "category": "Global",
  "title": "RI-Malaysia-Thailand Kejar Rampungkan [92] Proyek IMT-GT",
  "deck": "Pertemuan Tingkat Menteri IMT-GT ke-32 di Medan menetapkan target 92 proyek kerja sama rampung, disertai delapan MoU bisnis baru dan cetak biru 2027-2031.",
  "date": "10 September 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "IMT-GT",
   "Airlangga Hartarto",
   "Kerja Sama Ekonomi",
   "ASEAN"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7089/dari-rencana-ke-lapangan-kerja-menko-airlangga-jadikan-pertemuan-imt-gt-tahun-ini-sebagai-ministerial-meeting-of-implementation",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "mglv-patok-harga-rights-issue-rp8-880-kejar-rp2-54-triliun",
  "category": "Aksi Korporasi",
  "title": "MGLV Patok Harga Rights Issue Rp8.880, Kejar [Rp2,54 Triliun]",
  "deck": "MGLV mematok harga pelaksanaan rights issue Rp8.880 per saham dan menargetkan dana hingga Rp2,54 triliun, dengan pemegang saham utama NDC berkomitmen menyerap seluruh haknya senilai Rp1,65 triliun.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "rights issue",
   "HMETD",
   "data center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/881c3a5b7b_ce2450a4f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bumi-danai-akuisisi-loyal-metals-dari-utang-glencore",
  "category": "Aksi Korporasi",
  "title": "BUMI Danai Akuisisi Loyal Metals dari [Utang] Glencore",
  "deck": "Bumi Resources mengoreksi nilai akuisisi Loyal Metals menjadi Rp1,004 triliun dan mengungkap dana US$54 juta berasal dari pinjaman Glencore Australia, sisanya dari kas internal.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUMI",
   "Loyal Metals",
   "akuisisi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5d22e77149_12e6084dc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-laba-bersih-anjlok-88-jadi-rp956-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "UNTR: Laba Bersih [Anjlok] 88% jadi Rp956 Miliar di Semester I 2026",
  "deck": "Public expose UNTR mengungkap laba bersih turun 88% jadi Rp956 miliar, terbebani impairment geotermal Rp2,76 triliun, sementara buyback saham terus berlanjut.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "public expose",
   "laba bersih",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/25a46a2e69_83bf6d45e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-elsa-laba-bersih-melonjak-29-2-ke-rp435-miliar",
  "category": "Aksi Korporasi",
  "title": "Public Expose ELSA: Laba Bersih [Melonjak] 29,2% ke Rp435 Miliar",
  "deck": "Manajemen Elnusa memaparkan laba bersih semester I 2026 naik 29,2% menjadi Rp435 miliar dalam public expose 7 September 2026, didorong efisiensi dan laba kurs.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "public expose",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/defbe0ae6c_6575ce6a53.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-jelaskan-ke-bursa-akuisisi-5-lng-senilai-us-43-7-juta",
  "category": "Aksi Korporasi",
  "title": "RAJA Jelaskan ke Bursa, Akuisisi 5% LNG Senilai [US$43,7 Juta]",
  "deck": "RAJA menjelaskan ke BEI bahwa akuisisi 5% saham PT Layar Nusantara Gas oleh anak usahanya senilai US$43,7 juta didanai pinjaman bank dan bukan transaksi material maupun afiliasi.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "akuisisi LNG",
   "Bursa Efek Indonesia",
   "Genting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/57f2d6853f_6a45011c0e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-paparkan-laba-rp674-m-usai-suspensi-ekuitas-balik-positif",
  "category": "Aksi Korporasi",
  "title": "SINI Paparkan Laba Rp674 M usai Suspensi, [Ekuitas] Balik Positif",
  "deck": "Singaraja Putra merilis materi public expose insidentil usai suspensi BEI, membukukan laba Rp674,2 miliar dan ekuitas berbalik positif Rp3,59 triliun berkat rights issue dan akuisisi KMS.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "Public Expose",
   "Rights Issue",
   "Akuisisi KMS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7b1e037afc_73d85c0e1a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbyb-lengkapi-direksi-ojk-restui-direktur-manajemen-risiko",
  "category": "Aksi Korporasi",
  "title": "BBYB Lengkapi Direksi, [OJK] Restui Direktur Manajemen Risiko",
  "deck": "Bank Neo Commerce melaporkan OJK telah menyetujui Indra Aditya Sanjaya sebagai Direktur Manajemen Risiko, melengkapi susunan direksi dan komisaris hasil RUPST April 2026.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBYB",
   "Bank Neo Commerce",
   "Direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0c5c8edf5d_6f945f7eb9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-ungkap-laba-rp190-7-m-di-public-expose-ebit-minus",
  "category": "Aksi Korporasi",
  "title": "PACK Ungkap Laba Rp190,7 M di Public Expose, [EBIT] Minus",
  "deck": "Materi public expose insidentil ANHI (PACK) memuat data keuangan 1H2026: laba bersih melonjak ke Rp190,7 miliar, tapi laba usaha (EBIT) minus Rp12,3 miliar dan marjin kotor menyusut ke 3 persen.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "nikel",
   "public expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/501f9b2d20_242f3f48c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tfas-tuntas-alihkan-9-8-juta-saham-hasil-buyback-ke-pasar",
  "category": "Aksi Korporasi",
  "title": "TFAS [Tuntas] Alihkan 9,8 Juta Saham Hasil Buyback ke Pasar",
  "deck": "TFAS melaporkan telah menuntaskan pengalihan kembali 9,8 juta saham hasil buyback ke pasar melalui Bursa Efek Indonesia hingga September 2026.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFAS",
   "buyback saham",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8c6af64db7_8685d9f424.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpxl-catat-laba-bersih-berbalik-untung-rp4-11-miliar",
  "category": "Aksi Korporasi",
  "title": "MPXL Catat Laba Bersih [Berbalik] Untung Rp4,11 Miliar",
  "deck": "MPXL mengungkap laba bersih berbalik untung jadi Rp4,11 miliar dan margin kotor naik ke 20,63% dalam public expose tahunan, didorong efisiensi rute dan ekspansi ke CPO serta batu bara.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPXL",
   "Public Expose",
   "Kinerja Keuangan",
   "Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/830b579238_a56a4e6ec4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-cuan-melejit-7-98-jelang-akuisisi-sini",
  "category": "Pasar Modal",
  "title": "Saham [CUAN] Melejit 7,98% Jelang Akuisisi SINI",
  "deck": "Saham Petrindo Jaya Kreasi melonjak 7,98% ke Rp1.015, transaksi tembus Rp731,29 miliar, di tengah rencana akuisisi Singaraja Putra oleh anak usaha Prajogo Pangestu.",
  "date": "10 September 2026",
  "image": "assets/img/saham-cuan-melejit-7-98-jelang-akuisisi-sini.jpg",
  "imageV": "mtvfkizc",
  "tags": [
   "saham CUAN",
   "Petrindo Jaya Kreasi",
   "akuisisi SINI",
   "Prajogo Pangestu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466217-saham-cuan-melejit-798-transaksi-tembus-rp731-miliar-di-tengah-rencana-akuisisi-sini"
 },
 {
  "slug": "wsbp-gelar-rupslb-2-oktober-ratifikasi-konversi-utang-jadi-saham",
  "category": "Aksi Korporasi",
  "title": "WSBP Gelar RUPSLB 2 Oktober, Ratifikasi [Konversi] Utang Jadi Saham",
  "deck": "RUPSLB WSBP pada 2 Oktober 2026 akan meratifikasi konversi utang menjadi saham seri C bagi kreditur tertentu, bagian dari pelaksanaan Perjanjian Perdamaian restrukturisasi utang.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "RUPSLB",
   "restrukturisasi utang",
   "Waskita Beton Precast"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/13cf38ea2f_2d03c38ad5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "relf-jawab-bursa-tak-ada-aksi-korporasi-di-balik-volatilitas",
  "category": "Aksi Korporasi",
  "title": "RELF Jawab Bursa: Tak Ada Aksi Korporasi di Balik [Volatilitas]",
  "deck": "RELF menjawab permintaan BEI soal volatilitas transaksi: tidak ada informasi material, tidak ada rencana aksi korporasi, dan komisaris pengendali tak berniat menambah saham.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RELF",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/53a1583e9d_60f10e18d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ltls-ungkap-rencana-bayar-obligasi-rp135-m-jatuh-tempo-november",
  "category": "Aksi Korporasi",
  "title": "LTLS ungkap rencana bayar [obligasi] Rp135 M jatuh tempo November",
  "deck": "Dalam public expose 8 September 2026, manajemen Lautan Luas menjelaskan rencana pelunasan obligasi Rp135 miliar yang jatuh tempo November 2026 serta kondisi margin dan utang perseroan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LTLS",
   "Lautan Luas",
   "obligasi",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/67d8732e5c_5a209db615.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "miti-lewat-wasesa-line-beli-4-kapal-rp22-75-miliar",
  "category": "Aksi Korporasi",
  "title": "MITI Lewat Wasesa Line [Beli] 4 Kapal Rp22,75 Miliar",
  "deck": "Anak usaha MITI, PT Wasesa Line, membeli tiga kapal tunda dan satu unit landing craft dari PT Imako Perkasa Lines senilai total Rp22,75 miliar dalam transaksi afiliasi.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MITI",
   "transaksi afiliasi",
   "pelayaran",
   "kapal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d909d7e4ea_5ccfa5fb5f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "anggaran-sekolah-rakyat-2027-jebol-usai-kapasitas-naik-2x-lipat",
  "category": "Makroekonomi",
  "title": "Anggaran Sekolah Rakyat 2027 [Jebol] Usai Kapasitas Naik 2x Lipat",
  "deck": "Usulan menaikkan kapasitas Sekolah Rakyat dari 1.080 ke 2.520 siswa per lokasi membuat kebutuhan anggaran 2027 melonjak ke Rp104,09 triliun, jauh melebihi pagu Kementerian PU Rp32,57 triliun.",
  "date": "10 September 2026",
  "image": "assets/img/anggaran-sekolah-rakyat-2027-jebol-usai-kapasitas-naik-2x-lipat.jpg",
  "imageV": "mtvfkjht",
  "tags": [
   "Sekolah Rakyat",
   "Anggaran 2027",
   "Kementerian PU",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466210-anggaran-sekolah-rakyat-2027-jebol-rp715-triliun-kapasitas-siswa-diusulkan-naik-lebih-dari-2-kali-lipat"
 },
 {
  "slug": "astra-pertahankan-dividen-45-50-persen-di-2026",
  "category": "Pasar Modal",
  "title": "Astra Pertahankan [Dividen] 45-50 Persen di 2026",
  "deck": "Astra menegaskan akan membagikan 45-50 persen laba sebagai dividen untuk 2026, meski laba bersih semester I turun 19 persen akibat pelemahan bisnis pertambangan dan alat berat.",
  "date": "10 September 2026",
  "image": "assets/img/astra-pertahankan-dividen-45-50-persen-di-2026.jpg",
  "imageV": "mtvfkjuy",
  "tags": [
   "astra",
   "dividen",
   "rupst",
   "asii"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466208-astra-bakal-pertahankan-dividend-payout-ratio-45-50-persen"
 },
 {
  "slug": "indonesia-pimpin-imt-gt-forum-bisnis-tarik-300-investor",
  "category": "Global",
  "title": "Indonesia Pimpin IMT-GT, Forum Bisnis Tarik [300] Investor",
  "deck": "Indonesia resmi mengambil alih keketuaan forum kerja sama ekonomi IMT-GT dan membuka forum bisnis yang mempertemukan lebih dari 300 pelaku usaha dari lima negara di Medan.",
  "date": "10 September 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "IMT-GT",
   "Kemenko Perekonomian",
   "Investasi",
   "Sumatera"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7088/indonesia-dorong-reimajinasi-pembangunan-konektivitas-dan-langkah-langkah-transformatif-untuk-kemajuan-bersama",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kewajiban-neto-luar-negeri-ri-turun-jadi-us-197-4-miliar",
  "category": "Makroekonomi",
  "title": "Kewajiban Neto Luar Negeri RI [Turun] Jadi US$197,4 Miliar",
  "deck": "Bank Indonesia mencatat kewajiban neto Posisi Investasi Internasional turun jadi US$197,4 miliar pada triwulan II 2026, dari US$223,0 miliar pada triwulan sebelumnya.",
  "date": "10 September 2026",
  "image": "assets/img/kewajiban-neto-luar-negeri-ri-turun-jadi-us-197-4-miliar.jpg",
  "imageV": "mtva8o25",
  "tags": [
   "Bank Indonesia",
   "Posisi Investasi Internasional",
   "Neraca Eksternal",
   "Triwulan II 2026"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "psab-kantongi-restu-esdm-rampungkan-akuisisi-jrbm",
  "category": "Aksi Korporasi",
  "title": "PSAB Kantongi [Restu] ESDM, Rampungkan Akuisisi JRBM",
  "deck": "Kementerian ESDM merestui perubahan pemegang saham JRBM, anak usaha PSAB. PT J Resources Nusantara kini menguasai 99,99 persen saham JRBM tanpa pemegang saham minoritas.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "JRBM",
   "tambang emas",
   "konsolidasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6c69f32f15_4b0a3e30c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scnp-bukukan-turnaround-laba-usaha-pendapatan-naik-41-7",
  "category": "Aksi Korporasi",
  "title": "SCNP Bukukan [Turnaround] Laba Usaha, Pendapatan Naik 41,7%",
  "deck": "Pendapatan SCNP naik 41,7% jadi Rp156,58 miliar pada semester I 2026, laba usaha berbalik untung Rp6,74 miliar dari rugi tahun lalu, dan dividen tunai Rp10 miliar telah dibayar penuh.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCNP",
   "kinerja keuangan",
   "dividen",
   "ekspansi pabrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/58606f5ee5_5d1a8a46ca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "halo-jawab-bei-tak-ada-aksi-korporasi-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "HALO Jawab BEI: Tak Ada [Aksi Korporasi] di Balik Volatilitas Saham",
  "deck": "HALO menjawab permintaan BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada aksi korporasi atau informasi material yang belum diungkap ke publik.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/11aed3a178_705b5eb730.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmas-proyeksi-recurring-income-rp300-400-miliar-tahun-ini",
  "category": "Aksi Korporasi",
  "title": "DMAS Proyeksi [Recurring Income] Rp300-400 Miliar Tahun Ini",
  "deck": "Dalam public expose 7 September 2026, manajemen DMAS memaparkan kas Rp2,08 triliun, target recurring income Rp300-400 miliar, dan komitmen dividen 30 persen dari laba bersih.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMAS",
   "Puradelta Lestari",
   "Public Expose",
   "Data Center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/194adca546_8de96adcb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-msja-naik-21-53-dan-volume-turun-ini-penjelasannya",
  "category": "Aksi Korporasi",
  "title": "Saham MSJA Naik 21,53% dan Volume [Turun], Ini Penjelasannya",
  "deck": "PT Multi Spunindo Jaya Tbk (MSJA) menjelaskan ke Bursa Efek Indonesia bahwa lonjakan harga saham 21,53 persen dalam sepekan terakhir tidak dipicu informasi material yang belum diungkapkan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSJA",
   "volatilitas saham",
   "Unusual Market Activity",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5d66571dd6_bfb4ed94d3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obat-jawab-bei-tak-ada-aksi-korporasi-dekat-ini",
  "category": "Aksi Korporasi",
  "title": "OBAT Jawab BEI: Tak Ada [Aksi Korporasi] Dekat Ini",
  "deck": "OBAT menjawab surat permintaan penjelasan BEI soal volatilitas transaksi sahamnya: tidak ada informasi material dan belum ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OBAT",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5e9b0fbb91_340799a733.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fire-bantah-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "[FIRE] Bantah Ada Info Material di Balik Volatilitas Saham",
  "deck": "PT Alfa Energi Investama Tbk (FIRE) menjawab surat BEI soal volatilitas transaksi sahamnya, menegaskan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIRE",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ffa2f908ee_304ec3a604.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-rampungkan-tender-wajib-nihil-saham-publik-terjual",
  "category": "Aksi Korporasi",
  "title": "VISI Rampungkan Tender Wajib, [Nihil] Saham Publik Terjual",
  "deck": "PT Harmoni Semesta Investama merampungkan penawaran tender wajib atas saham VISI senilai maksimal Rp325 miliar, namun tak ada pemegang saham publik yang menjual sahamnya.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "tender wajib",
   "pengambilalihan",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b26f37c837_f86471639e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apia-pertahankan-rating-idaaa-laba-semester-i-turun-tajam",
  "category": "Aksi Korporasi",
  "title": "APIA pertahankan rating [idAAA], laba semester I turun tajam",
  "deck": "PEFINDO menegaskan peringkat idAAA stabil untuk Angkasa Pura Indonesia dan seluruh obligasi serta sukuknya, meski laba bersih semester I 2026 menyusut tajam.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APIA",
   "PEFINDO",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9f74bad2ea_eaf84b3a4b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apai-pertahankan-peringkat-idaaa-ekuitas-turun-rp6-7-t",
  "category": "Aksi Korporasi",
  "title": "APAI Pertahankan Peringkat [idAAA], Ekuitas Turun Rp6,7 T",
  "deck": "PEFINDO mempertahankan peringkat idAAA stabil untuk APAI dan sembilan obligasi/sukuknya, meski ekuitas perusahaan turun Rp6,7 triliun dalam enam bulan terakhir.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APAI",
   "PEFINDO",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c9525d4939_1d055e7838.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lckm-disuspensi-bursa-imbas-ketidakpastian-usaha",
  "category": "Aksi Korporasi",
  "title": "LCKM [Disuspensi] Bursa Imbas Ketidakpastian Usaha",
  "deck": "Bursa Efek Indonesia menghentikan sementara perdagangan saham LCKM di seluruh pasar mulai sesi II Kamis, 10 September 2026, menyusul ketidakpastian kelangsungan usaha perseroan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LCKM",
   "suspensi saham",
   "going concern",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b5a671b8af_c3817c16cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekad-ungkap-fujian-kuasai-51-saham-eip-susut-ke-31",
  "category": "Aksi Korporasi",
  "title": "EKAD Ungkap Fujian Kuasai [51%] Saham, EIP Susut ke 31%",
  "deck": "Ekadharma International (EKAD) merinci ke Bursa struktur kepemilikan baru pascaakuisisi oleh Fujian Youjia, sementara harga pembelian saham masih belum ditetapkan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EKAD",
   "akuisisi",
   "Fujian Youjia",
   "pengendali saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8bbf5a4d99_7859c60970.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "swat-penjualan-anjlok-63-ekuitas-tergerus-79-di-2025",
  "category": "Aksi Korporasi",
  "title": "SWAT: Penjualan Anjlok 63%, [Ekuitas] Tergerus 79% di 2025",
  "deck": "Materi public expose tahunan SWAT menunjukkan penjualan 2025 turun 63 persen dan ekuitas tergerus 79 persen menjadi Rp12,46 miliar, meski rugi bersih menyempit dibanding 2024.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "public expose",
   "kinerja keuangan",
   "laporan tahunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1365af1381_8bd3b81d48.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-koreksi-pengurus-komisaris-utama-beralih-ke-ang-kok-tian",
  "category": "Aksi Korporasi",
  "title": "CANI Koreksi Pengurus, [Komisaris Utama] Beralih ke Ang Kok Tian",
  "deck": "CANI mengoreksi laporan perubahan pengurus: Ang Kok Tian jadi Komisaris Utama, Jansen Warokka jadi Komisaris Independen, menggantikan Richie Limson dan Heryanto Cokro yang mengundurkan diri.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "Capitol Nusantara Indonesia",
   "Komisaris Utama",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f0204cc6ad_a2a932ae3e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dkhh-bantah-ada-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "DKHH Bantah Ada Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab surat resmi Bursa Efek Indonesia soal volatilitas transaksi efeknya, direksi DKHH menegaskan tidak ada informasi material atau rencana aksi korporasi di baliknya.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DKHH",
   "Cipta Sarana Medika",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2de61cebc7_d9f9172b18.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-dana-obligasi-rp2-triliun-baru-49-9-tersalur-obligasi",
  "category": "Aksi Korporasi",
  "title": "SMII: Dana Obligasi Rp2 Triliun Baru 49,9% Tersalur [obligasi]",
  "deck": "SMII melapor ke OJK: sukuk mudharabah Rp500 miliar sudah 100% tersalur, sementara obligasi Rp2 triliun baru 49,86% terpakai per Juli 2026, sisanya masih mengendap di deposito.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMII",
   "obligasi",
   "sukuk mudharabah",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fc7ccb21ee_33bd2e2170.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agii-siapkan-dana-rp72-5-miliar-untuk-pelunasan-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "AGII Siapkan Dana Rp72,5 Miliar untuk [Pelunasan] Obligasi dan Sukuk",
  "deck": "Samator Indo Gas Tbk menyatakan dana pelunasan pokok obligasi dan sukuk ijarah senilai total Rp72,5 miliar yang jatuh tempo 10 Oktober 2026 sudah tersedia di rekening perusahaan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "obligasi",
   "sukuk ijarah",
   "Samator Indo Gas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/95a8e33da7_497181d1d3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oliv-tegaskan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "OLIV Tegaskan Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "BEI meminta penjelasan atas volatilitas transaksi saham OLIV. Manajemen menjawab tidak ada informasi material yang belum diungkap ke publik.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OLIV",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6dac3d4e5e_210885e020.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "reli-free-float-14-45-pendapatan-transaksi-naik-31",
  "category": "Aksi Korporasi",
  "title": "RELI: Free Float 14,45%, [Pendapatan] Transaksi Naik 31%",
  "deck": "Sesi tanya jawab public expose RELI mengungkap free float baru 14,45%, pendapatan transaksi semester I 2026 naik 31,22%, dan posisi market share di urutan 47-48.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RELI",
   "Public Expose",
   "Free Float",
   "Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a9ed729c43_eeabbd53e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irra-tegaskan-tak-ada-info-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "IRRA Tegaskan Tak Ada Info Material soal [Volatilitas] Saham",
  "deck": "Merespons permintaan penjelasan BEI atas volatilitas transaksi sahamnya, Itama Ranoraya (IRRA) menyatakan tidak ada informasi material, rencana aksi korporasi, atau perubahan kepemilikan pemegang saham utama.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRRA",
   "Itama Ranoraya",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e9cae5e897_2160d2c13b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-baru-capai-1-85-juta-pelanggan-target-3-juta-fwa",
  "category": "Aksi Korporasi",
  "title": "WIFI Baru Capai 1,85 Juta Pelanggan, Target 3 Juta [FWA]",
  "deck": "Dalam public expose tahunan, manajemen WIFI memaparkan realisasi Capex Rp1 triliun semester I 2026 dari total anggaran Rp7 triliun, serta progres pelanggan FWA dan FTTH menuju target akhir tahun.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "Public Expose",
   "Telekomunikasi",
   "FWA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7961d860b0_ebdbe5e1d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pola-konfirmasi-rencana-pelepasan-26-saham-oleh-pengendali",
  "category": "Aksi Korporasi",
  "title": "POLA konfirmasi rencana [pelepasan] 26% saham oleh pengendali",
  "deck": "Menjawab permintaan BEI soal volatilitas transaksi, Pool Advista Finance (POLA) menegaskan tidak ada info material baru, tapi membenarkan rencana pemegang saham pengendali melepas hingga 26% saham.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POLA",
   "volatilitas saham",
   "pemegang saham pengendali",
   "POOL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/435e1fcff8_2bd8c0e26c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-gelar-rupslb-tegaskan-pengendali-baru-saiko-consultancy",
  "category": "Aksi Korporasi",
  "title": "NAYZ Gelar RUPSLB, Tegaskan [Pengendali] Baru Saiko Consultancy",
  "deck": "RUPSLB PT Hassana Boga Sejahtera Tbk pada 2 Oktober 2026 akan mengesahkan pengendali baru Saiko Consultancy Pte. Ltd. dan mengubah susunan direksi-komisaris.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "RUPSLB",
   "Hassana Boga Sejahtera",
   "Saiko Consultancy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/97e382440c_d778bbccdb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hdfa-pembiayaan-baru-turun-41-4-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "HDFA: Pembiayaan Baru [Turun 41,4%] di Semester I-2026",
  "deck": "Public Expose Tahunan HDFA mengungkap pembiayaan baru semester I-2026 turun 41,4 persen yoy karena kehati-hatian di sektor tambang dan perkebunan yang mendominasi portofolio.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HDFA",
   "public expose",
   "multifinance",
   "pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/73c4041bda_8dcb9e0d96.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "10-produk-umkm-pangan-tembus-rak-ritel-aeon",
  "category": "UMKM",
  "title": "10 Produk UMKM Pangan [Tembus] Rak Ritel AEON",
  "deck": "Sepuluh UMKM pangan binaan Kemendag resmi masuk 19 gerai AEON Indonesia lewat MoU dan kontrak dagang, di tengah kurasi lanjutan dari lebih 1.200 pendaftar.",
  "date": "10 September 2026",
  "image": "assets/img/10-produk-umkm-pangan-tembus-rak-ritel-aeon.jpg",
  "imageV": "mtuzic2x",
  "tags": [
   "UMKM",
   "AEON",
   "Kemendag",
   "Ritel Modern"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/sepuluh-produk-umkm-pangan-binaan-kemendag-tembus-jaringan-ritel-aeon-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pertumbuhan-penjualan-eceran-agustus-diprakirakan-melambat",
  "category": "Makroekonomi",
  "title": "Pertumbuhan Penjualan Eceran Agustus Diprakirakan [Melambat]",
  "deck": "Bank Indonesia memperkirakan penjualan eceran Agustus 2026 tumbuh 0,5 persen dari tahun lalu, melambat dari Juli, sementara ekspektasi harga ke depan menurun.",
  "date": "10 September 2026",
  "image": "assets/img/pertumbuhan-penjualan-eceran-agustus-diprakirakan-melambat.jpg",
  "imageV": "mtuzidn5",
  "tags": [
   "penjualan eceran",
   "Bank Indonesia",
   "ekspektasi inflasi",
   "konsumsi rumah tangga"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "brent-tembus-us-100-rupiah-ikut-tertekan",
  "category": "Moneter",
  "title": "Brent [Tembus] US$100, Rupiah Ikut Tertekan",
  "deck": "Harga minyak Brent menembus US$100 per barel dan WTI naik ke atas US$96 di tengah eskalasi perang Rusia-Ukraina, ikut menyeret rupiah melemah.",
  "date": "10 September 2026",
  "image": "assets/img/brent-tembus-us-100-rupiah-ikut-tertekan.jpg",
  "imageV": "mtv4i1jn",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466136-minyak-dunia-tembus-us100-bikin-rupiah-tertekan-geopolitik-dunia-jadi-biang-kerok"
 },
 {
  "slug": "rupiah-melemah-tipis-ke-rp17-513-analis-prediksi-menguat",
  "category": "Moneter",
  "title": "Rupiah [Melemah] Tipis ke Rp17.513, Analis Prediksi Menguat",
  "deck": "Rupiah melemah tipis ke Rp17.513 per dolar AS Kamis pagi, meski analis memprediksi penguatan menuju Rp17.480 ditopang membaiknya penjualan ritel dan keyakinan konsumen.",
  "date": "10 September 2026",
  "image": "assets/img/rupiah-melemah-tipis-ke-rp17-513-analis-prediksi-menguat.jpg",
  "imageV": "mtuzie35",
  "tags": [
   "rupiah",
   "kurs dolar AS",
   "Bank Indonesia",
   "konsumsi domestik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466131-rupiah-melemah-di-rp17513-per-dolar-as-diprediksi-menguat-ditopang-konsumsi-domestik-dan-keyakinan-konsumen"
 },
 {
  "slug": "rsch-bantah-ada-informasi-material-picu-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "RSCH Bantah Ada Informasi Material Picu [Volatilitas] Saham",
  "deck": "PT Charlie Hospital Semarang Tbk (RSCH) menjawab permintaan BEI dan menyatakan tidak ada informasi material di balik volatilitas transaksi sahamnya.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RSCH",
   "Charlie Hospital Semarang",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a1b6645185_159668a09c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jihd-buka-suara-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "JIHD Buka Suara soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Merespons permintaan Bursa Efek Indonesia, JIHD menyatakan tidak mengetahui informasi material di balik pergerakan sahamnya dan tidak berencana melakukan aksi korporasi dalam tiga bulan ke depan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JIHD",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e2782fcea5_bea6a36acd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-pangan-10-september-cabai-rawit-merah-melonjak-10",
  "category": "Makroekonomi",
  "title": "Harga Pangan 10 September: Cabai Rawit Merah [Melonjak] 10%",
  "deck": "Cabai rawit merah naik paling tajam, Rp8.300 menjadi Rp91.000 per kilogram, sementara harga beras dan daging sapi juga merangkak naik menurut data PIHPS Kamis pagi.",
  "date": "10 September 2026",
  "image": "assets/img/harga-pangan-10-september-cabai-rawit-merah-melonjak-10.jpg",
  "imageV": "mtuzield",
  "tags": [
   "harga pangan",
   "cabai rawit merah",
   "PIHPS",
   "harga beras"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466117-harga-pangan-hari-ini-10-september-2026-bikin-emak-emak-pusing-cabai-rawit-merah-naik-10-persen"
 },
 {
  "slug": "inds-sij-sewakan-ruko-ke-planet-ban-rp378-3-juta",
  "category": "Aksi Korporasi",
  "title": "INDS: SIJ sewakan ruko ke [Planet Ban] Rp378,3 juta",
  "deck": "Anak usaha Indospring, PT Sinar Indranusa Jaya, menyewakan ruko di Gresik ke PT Surganya Motor Indonesia (Planet Ban) senilai Rp378,3 juta untuk enam tahun.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDS",
   "transaksi afiliasi",
   "Indospring",
   "Planet Ban"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d1e5255638_4acbd4bacb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "issp-public-expose-ungkap-laba-semester-i-naik-12",
  "category": "Aksi Korporasi",
  "title": "ISSP: Public Expose Ungkap Laba Semester I Naik [12%]",
  "deck": "Dalam public expose tahunan, manajemen ISSP mengungkap utilisasi produksi, proyek pipa gas Dumai-Sei Mangkei, dan target pertumbuhan laba 2026.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISSP",
   "public expose",
   "industri baja",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7a9d352dac_ea6eeb9dab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "izin-tenaga-kerja-asing-kini-satu-pintu-lewat-oss",
  "category": "Ketenagakerjaan",
  "title": "Izin Tenaga Kerja Asing Kini [Satu Pintu] Lewat OSS",
  "deck": "Kemnaker, Kementerian Investasi, dan Kementerian Imigrasi menyatukan izin penggunaan tenaga kerja asing dalam satu sistem OSS untuk memangkas proses lintas kementerian.",
  "date": "10 September 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "TKA",
   "OSS",
   "Kemnaker",
   "Investasi Asing"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/perkuat-tata-kelola-investasi-pemerintah-integrasikan-perizinan-tka",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "giias-bandung-2026-pajak-kendaraan-diskon-10-persen",
  "category": "Industri",
  "title": "GIIAS Bandung 2026: Pajak Kendaraan [Diskon] 10 Persen",
  "deck": "Pemprov Jawa Barat memberi diskon pajak kendaraan 10 persen selama GIIAS Bandung 2026 untuk mendorong transaksi otomotif, sektor yang menyumbang Rp10 triliun ke pendapatan daerah.",
  "date": "10 September 2026",
  "image": "assets/img/giias-bandung-2026-pajak-kendaraan-diskon-10-persen.jpg",
  "imageV": "mtuoqowc",
  "tags": [
   "GIIAS Bandung 2026",
   "pajak kendaraan",
   "Jawa Barat",
   "mobil listrik"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/pameran-giias-bandung-2026-sediakan-arena-berburu-mobil-listrik-perkotaan/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "rupslb-elnusa-elsa-tetapkan-dua-direktur-baru",
  "category": "Aksi Korporasi",
  "title": "RUPSLB Elnusa [ELSA] Tetapkan Dua Direktur Baru",
  "deck": "RUPSLB Elnusa mengganti Direktur Pengembangan Usaha dan Direktur SDM & Umum, efektif sejak penutupan rapat pada 9 September 2026, tanpa mengubah dampak terhadap kondisi keuangan perusahaan.",
  "date": "10 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "RUPSLB",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2f95f51f0d_ceac20ede8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jabar-diskon-pajak-kendaraan-10-persen-saat-giias-bandung-2026",
  "category": "Industri",
  "title": "Jabar Diskon [Pajak] Kendaraan 10 Persen Saat GIIAS Bandung 2026",
  "deck": "Pemprov Jawa Barat memberi diskon 10 persen bea balik nama dan pajak tahunan kendaraan bermotor selama gelaran GIIAS Bandung 2026 yang dibuka 9 September.",
  "date": "10 September 2026",
  "image": "assets/img/jabar-diskon-pajak-kendaraan-10-persen-saat-giias-bandung-2026.jpg",
  "imageV": "mtuilay0",
  "tags": [
   "GIIAS",
   "Jawa Barat",
   "pajak kendaraan",
   "otomotif"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/giias-bandung-2026-pemprov-jawa-barat-beri-diskon-bbn-dan-pajak-kendaraan/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "kemendag-gandeng-meta-latih-200-umkm-pakai-ai-untuk-ekspor",
  "category": "UMKM",
  "title": "Kemendag Gandeng Meta Latih [200] UMKM Pakai AI untuk Ekspor",
  "deck": "Kementerian Perdagangan bersama Meta Indonesia melatih 200 UMKM di Jakarta, Bandung, dan Batam memakai AI untuk pemasaran digital demi menembus pasar ekspor.",
  "date": "10 September 2026",
  "image": "assets/img/kemendag-gandeng-meta-latih-200-umkm-pakai-ai-untuk-ekspor.jpg",
  "imageV": "mtud1d0p",
  "tags": [
   "UMKM",
   "Kemendag",
   "AI",
   "Ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-dorong-optimalisasi-ai-untuk-pemasaran-produk-umkm",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "muf-dan-mandiri-dorong-adopsi-kendaraan-listrik-di-bali",
  "category": "Bisnis",
  "title": "MUF dan Mandiri Dorong Adopsi Kendaraan [Listrik] di Bali",
  "deck": "MUF bersama Bank Mandiri dan jaringan dealer menggelar uji coba kendaraan listrik dan hybrid di Bali, lengkap dengan penawaran pembiayaan khusus bagi nasabah.",
  "date": "9 September 2026",
  "image": "assets/img/muf-dan-mandiri-dorong-adopsi-kendaraan-listrik-di-bali.jpg",
  "imageV": "mtu8p4wk",
  "tags": [
   "kendaraan listrik",
   "MUF",
   "Bank Mandiri",
   "hybrid"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466068-muf-genjot-adopsi-kendaraan-listrik-bank-mandiri-perkuat-kolaborasi-dengan-dealer"
 },
 {
  "slug": "bunga-pinjaman-kdmp-rp13-4-t-disorot-banggar-dpr",
  "category": "Makroekonomi",
  "title": "Bunga Pinjaman KDMP [Rp13,4 T] Disorot Banggar DPR",
  "deck": "Banggar DPR mempersoalkan bunga cicilan pinjaman program Koperasi Desa Merah Putih senilai Rp13,4 triliun yang dinilai membebani APBN di tengah ruang fiskal terbatas.",
  "date": "9 September 2026",
  "image": "assets/img/bunga-pinjaman-kdmp-rp13-4-t-disorot-banggar-dpr.jpg",
  "imageV": "mtu8p7ma",
  "tags": [
   "KDMP",
   "Banggar DPR",
   "APBN",
   "Himbara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466056-banggar-dpr-soroti-bunga-cicilan-kdmp-rp134-triliun-apbn-jangan-sampai-terbebani"
 },
 {
  "slug": "tlkm-kupas-rencana-divestasi-neutradc-us-1-5-m-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "TLKM Kupas Rencana Divestasi [NeutraDC] US$1,5 M di Public Expose",
  "deck": "Public expose TLKM mengungkap rencana divestasi 70 persen saham NeutraDC senilai US$1,5 miliar, akuisisi penuh Digiserve, dan kejelasan rasio dividen 60-90 persen dari laba bersih.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Telkom Indonesia",
   "NeutraDC",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2bd44d4177_48fe3ca3bd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpdb-koperasi-perkuat-jaminan-hukum-dana-bergulir",
  "category": "UMKM",
  "title": "LPDB Koperasi Perkuat [Jaminan] Hukum Dana Bergulir",
  "deck": "LPDB Koperasi menggelar diskusi di Bandung untuk memperkuat kepastian hukum eksekusi jaminan, dari personal guarantee hingga hak tanggungan, demi melindungi dana bergulir bagi koperasi.",
  "date": "9 September 2026",
  "image": "assets/img/lpdb-koperasi-perkuat-jaminan-hukum-dana-bergulir.jpg",
  "imageV": "mtu8p8c6",
  "tags": [
   "LPDB Koperasi",
   "dana bergulir",
   "tata kelola",
   "DJKN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466045-perkuat-tata-kelola-dana-bergulir-lpdb-koperasi-dorong-mitigasi-risiko-hingga-kepastian-hukum"
 },
 {
  "slug": "bafi-lunasi-obligasi-rp458-miliar-setop-tercatat-di-bei",
  "category": "Aksi Korporasi",
  "title": "BAFI [Lunasi] Obligasi Rp458 Miliar, Setop Tercatat di BEI",
  "deck": "BAFI melunasi pokok Rp458 miliar dan bunga terakhir Rp7,44 miliar Obligasi Berkelanjutan II Tahap IV pada 8 September 2026, efek ini berhenti diperdagangkan di BEI mulai 9 September.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAFI",
   "obligasi",
   "pelunasan utang",
   "pembiayaan kendaraan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f7671ec8b4_aa4a2d015f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-lopi-anjlok-9-6-pengendali-kurangi-porsi-volatilitas",
  "category": "Aksi Korporasi",
  "title": "Saham LOPI Anjlok 9,6%, Pengendali Kurangi Porsi [volatilitas]",
  "deck": "LOPI menjelaskan ke BEI setelah sahamnya ambruk 9,59% dan volume transaksi melonjak empat kali lipat pada 4 September 2026, seiring pengendali menjual sebagian sahamnya.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "volatilitas saham",
   "pemegang saham pengendali",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e5a952f430_139e550a73.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-auditor-soroti-impairment-rp181-m-proyek-listrik",
  "category": "Aksi Korporasi",
  "title": "TGRA: Auditor Soroti [Impairment] Rp181 M Proyek Listrik",
  "deck": "Auditor TGRA mencatat penurunan nilai Rp181,24 miliar atas proyek pembangkit listrik yang belum dapat pendanaan, memperdalam rugi bersih perusahaan menjadi Rp259,52 miliar sepanjang 2025.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "laporan keuangan",
   "going concern",
   "PLTA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260909185511-64388-0/FinancialStatement-2025-Tahunan-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "erupsi-anak-krakatau-mendag-pastikan-harga-pangan-stabil",
  "category": "Makroekonomi",
  "title": "Erupsi Anak Krakatau, Mendag Pastikan Harga Pangan [Stabil]",
  "deck": "Mendag Budi Santoso sebut harga bahan pokok di wilayah terdampak erupsi Anak Krakatau terkendali, meski harga telur dan ayam ras masih di bawah acuan pemerintah.",
  "date": "9 September 2026",
  "image": "assets/img/erupsi-anak-krakatau-mendag-pastikan-harga-pangan-stabil.jpg",
  "imageV": "mtu2vyb2",
  "tags": [
   "bahan pokok",
   "erupsi Anak Krakatau",
   "harga telur",
   "harga ayam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466022-erupsi-anak-krakatau-tak-pengaruhi-pasar-mendag-pastikan-harga-bahan-pokok-stabil"
 },
 {
  "slug": "wsbp-pefindo-revisi-prospek-jadi-negatif-peringkat-idb-bertahan",
  "category": "Aksi Korporasi",
  "title": "WSBP: PEFINDO Revisi Prospek Jadi [Negatif], Peringkat idB Bertahan",
  "deck": "PEFINDO menegaskan peringkat idB untuk WSBP dan empat surat utangnya, tetapi merevisi prospek dari stabil menjadi negatif akibat likuiditas yang melemah.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "PEFINDO",
   "peringkat obligasi",
   "Waskita Beton Precast"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c6f4d06291_ff8b93aa5c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrta-rencanakan-private-placement-10-saham-baru",
  "category": "Aksi Korporasi",
  "title": "HRTA Rencanakan [Private Placement] 10% Saham Baru",
  "deck": "HRTA berencana menerbitkan hingga 460,5 juta saham baru tanpa hak memesan efek terlebih dahulu, setara 10 persen modal disetor, untuk modal kerja.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "private placement",
   "PMTHMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8fdfcd092b_a8fd3cd313.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-bsi-siap-buka-rekening-massal-untuk-warga",
  "category": "Perbankan",
  "title": "BRI-BSI Siap Buka [Rekening Massal] untuk Warga",
  "deck": "Danantara memastikan BRI dan BSI berkoordinasi mempercepat pembukaan rekening massal, dengan BSI khusus melayani Aceh, sementara skema dana awal Rp50 ribu masih dirancang pemerintah.",
  "date": "9 September 2026",
  "image": "assets/img/bri-bsi-siap-buka-rekening-massal-untuk-warga.jpg",
  "imageV": "mtu2vyoi",
  "tags": [
   "rekening massal",
   "BRI",
   "BSI",
   "inklusi keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466023-rekening-massal-bri-untuk-warga-segera-dibuka-rosan-aceh-pakai-bsi"
 },
 {
  "slug": "hrta-jadwalkan-rups-independen-private-placement-10",
  "category": "Aksi Korporasi",
  "title": "HRTA Jadwalkan RUPS Independen [Private Placement] 10%",
  "deck": "HRTA menggelar RUPS Independen pada 16 Oktober 2026 untuk meminta persetujuan penerbitan saham baru hingga 10 persen tanpa hak memesan efek terlebih dahulu.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "RUPS Independen",
   "private placement",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0ae50986f3_378800c6db.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-jelaskan-lonjakan-saham-34-72-ke-ara",
  "category": "Aksi Korporasi",
  "title": "MEDS Jelaskan Lonjakan Saham 34,72% ke [ARA]",
  "deck": "Saham Hetzer Medical Indonesia melonjak 34,72% dan menyentuh batas atas otomatis pada 7 September 2026, memicu permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "Hetzer Medical Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b62bf5ab68_3e2ca8133f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomsel-buka-jalan-kolaborasi-digitalisasi-sektor-logistik",
  "category": "Industri",
  "title": "Telkomsel Buka Jalan Kolaborasi [Digitalisasi] Sektor Logistik",
  "deck": "Telkomsel Enterprise mengumpulkan sekitar 35 pimpinan perusahaan logistik bersama BPI Danantara dan Pos Indonesia untuk membahas transformasi digital ekosistem logistik nasional.",
  "date": "9 September 2026",
  "image": "assets/img/telkomsel-buka-jalan-kolaborasi-digitalisasi-sektor-logistik.jpg",
  "imageV": "mtu2vz5l",
  "tags": [
   "Telkomsel",
   "logistik",
   "Danantara",
   "Pos Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466014-telkomsel-enterprise-dukung-transformasi-digital-ekosistem-logistik-buka-kesempatan-luas-untuk-kolaborasi"
 },
 {
  "slug": "safe-kuota-200-bus-listrik-sulit-terealisasi-tahun-ini",
  "category": "Aksi Korporasi",
  "title": "SAFE: Kuota 200 Bus [Listrik] Sulit Terealisasi Tahun Ini",
  "deck": "Steady Safe menjawab permintaan penjelasan Bursa: tidak ada kontrak baru, dan kuota 200 unit bus listrik untuk Transjakarta kemungkinan tak terealisasi tahun ini akibat pemotongan anggaran DKI.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Transjakarta",
   "bus listrik",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c60acea1ae_04807905ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "perpres-baru-atur-tata-kelola-tambang-timah-di-babel",
  "category": "BUMN",
  "title": "Perpres Baru Atur Tata Kelola Tambang [Timah] di Babel",
  "deck": "Presiden Prabowo Subianto meneken Perpres 79/2026 yang mengatur biaya produksi, asal usul material, dan sinergi lintas sektor dalam tata kelola pertambangan timah di Bangka Belitung.",
  "date": "9 September 2026",
  "image": "assets/img/perpres-baru-atur-tata-kelola-tambang-timah-di-babel.jpg",
  "imageV": "mtu064vv",
  "tags": [
   "timah",
   "PT Timah",
   "Bangka Belitung",
   "Perpres"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/466005-perpres-792026-ubah-tata-kelola-tambang-timah-pt-timah-buka-suara-soal-poin-krusial"
 },
 {
  "slug": "mapi-tetapkan-kebijakan-dividen-minimal-25-dari-laba-bersih",
  "category": "Aksi Korporasi",
  "title": "MAPI Tetapkan [Kebijakan Dividen] Minimal 25% dari Laba Bersih",
  "deck": "Direksi MAPI menetapkan kebijakan dividen tunai minimal 25% dan maksimal 50% dari laba bersih tahun buku sebelumnya, berlaku efektif 9 September 2026, disetujui Dewan Komisaris.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAPI",
   "dividen",
   "kebijakan dividen",
   "emiten ritel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dd227bad86_f834c6bef3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-catat-laba-tipis-rp8-49-miliar-genjot-penyehatan-keuangan",
  "category": "Aksi Korporasi",
  "title": "ADHI Catat Laba Tipis Rp8,49 Miliar, Genjot [Penyehatan] Keuangan",
  "deck": "Dalam Public Expose Live 2026, ADHI membeberkan pendapatan semester I turun sementara laba bersih hanya Rp8,49 miliar, di tengah tiga langkah penyehatan keuangan perseroan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "Public Expose",
   "restrukturisasi keuangan",
   "BUMN Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1f02e96d89_afc217eb50.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaef-jelaskan-ke-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "KAEF Jelaskan ke BEI soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Kimia Farma menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak mengetahui informasi material apa pun di baliknya.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KAEF",
   "Kimia Farma",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3cda9da1c1_afc3882382.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rock-akui-proyek-azerai-ieh-belum-ada-jadwal-pasti",
  "category": "Aksi Korporasi",
  "title": "ROCK Akui Proyek Azerai-IEH Belum Ada [Jadwal] Pasti",
  "deck": "ROCK menjawab pertanyaan lanjutan BEI: proyek Azerai dan International Exchange House masih tahap evaluasi tanpa jadwal pasti, progres fisiknya baru 4,17 dan 13,37 persen.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROCK",
   "Rockfields Properti Indonesia",
   "properti",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9d8397fe28_696ba084e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-kontrak-konstruksi-plta-pongbembe-20-mw-senilai-rp288-m",
  "category": "Aksi Korporasi",
  "title": "ARKO Kontrak Konstruksi PLTA Pongbembe [20 MW] Senilai Rp288 M",
  "deck": "Anak usaha ARKO, Nosu dan Aekon, teken kontrak konstruksi PLTA Pongbembe 20 MW senilai Rp287,98 miliar, setara 56 persen ekuitas perseroan per akhir 2025.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "PLTA",
   "transaksi afiliasi",
   "Arkora Hydro"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/beb1b0de64_1d48b8d914.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgjo-dan-mdia-keluar-dari-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "PGJO dan MDIA Keluar dari [Pemantauan Khusus] BEI",
  "deck": "Bursa mencabut status pemantauan khusus saham PGJO dan MDIA, efektif 3 September 2026, sebagai koreksi atas pengumuman sebelumnya tertanggal 2 September 2026.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "MDIA",
   "BEI",
   "Pemantauan Khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/47591356e2_5cf0234ace.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-masuk-pemantauan-khusus-bei-mulai-10-september",
  "category": "Aksi Korporasi",
  "title": "CSMI Masuk [Pemantauan Khusus] BEI Mulai 10 September",
  "deck": "BEI memasukkan saham CSMI (Cipta Selera Murni) ke daftar Pemantauan Khusus mulai 10 September 2026, menyusul suspensi perdagangan lebih dari satu hari bursa.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "Pemantauan Khusus",
   "BEI",
   "Cipta Selera Murni"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e4d0046cc4_4d83ca17bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "banggar-dpr-ketok-pagu-tkd-2027-jadi-rp735-triliun",
  "category": "Makroekonomi",
  "title": "Banggar DPR Ketok Pagu TKD 2027 Jadi [Rp735 Triliun]",
  "deck": "Banggar DPR dan pemerintah menyepakati pagu Transfer ke Daerah 2027 sebesar Rp735 triliun, naik 5,5 persen dari perkiraan realisasi 2026.",
  "date": "9 September 2026",
  "image": "assets/img/banggar-dpr-ketok-pagu-tkd-2027-jadi-rp735-triliun.jpg",
  "imageV": "mtu065df",
  "tags": [
   "TKD 2027",
   "Banggar DPR",
   "RAPBN 2027",
   "Dana Desa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465996-banggar-dpr-ketok-pagu-tkd-2027-rp735-triliun-ini-rincian-dana-untuk-daerah"
 },
 {
  "slug": "yelo-panggil-rupslb-kedua-setelah-kuorum-pertama-gagal",
  "category": "Aksi Korporasi",
  "title": "YELO Panggil RUPSLB [Kedua] Setelah Kuorum Pertama Gagal",
  "deck": "RUPSLB pertama YELO pada 3 September gagal kuorum, sehingga rapat kedua digelar 17 September 2026 untuk mengubah pasal usaha di anggaran dasar sesuai klasifikasi KBLI baru.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "RUPSLB",
   "anggaran dasar",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a806f80f26_5c57ff9249.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "grph-gelar-public-expose-usai-suspensi-cooling-down-bei",
  "category": "Aksi Korporasi",
  "title": "GRPH Gelar Public Expose usai [Suspensi] Cooling Down BEI",
  "deck": "BEI menyuspensi saham GRPH sejak 8 September 2026 dan mewajibkan perseroan menggelar public expose insidentil pada 15 September 2026 untuk menjelaskan kinerja operasional dan keuangan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRPH",
   "suspensi saham",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ba0fd5b715_2c416270e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibos-jadwalkan-rupslb-pada-16-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "IBOS Jadwalkan [RUPSLB] pada 16 Oktober 2026",
  "deck": "PT Indo Boga Sukses Tbk mengumumkan RUPSLB digelar 16 Oktober 2026 di Yogyakarta, dengan tanggal pencatatan pemegang saham 23 September 2026.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBOS",
   "RUPSLB",
   "Pasar Modal",
   "Indo Boga Sukses"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1218108960_d648f50407.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-gelar-paparan-publik-bahas-suspensi-saham-dan-lonjakan-harga",
  "category": "Aksi Korporasi",
  "title": "PACK Gelar Paparan Publik, Bahas [Suspensi] Saham dan Lonjakan Harga",
  "deck": "PACK akan menggelar paparan publik insidentil pada 11 September 2026 atas permintaan Bursa Efek Indonesia, untuk menjelaskan pergerakan harga saham yang tidak biasa dan suspensi perdagangan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "Public Expose",
   "Suspensi Saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/91fff385c3_c8bbd44d92.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-jawab-bursa-soal-penundaan-bagi-hasil-sukuk-likuiditas",
  "category": "Aksi Korporasi",
  "title": "POST Jawab Bursa soal Penundaan Bagi Hasil Sukuk [Likuiditas]",
  "deck": "Pos Indonesia menjelaskan ke Bursa alasan penundaan kedua bagi hasil sukuk, dengan target bayar mulai Januari 2027 lewat dukungan Danantara.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "Sukuk",
   "Likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3d6c921583_bba823731a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fwct-gelar-rupslb-ubah-anggaran-dasar-ikuti-kbli-baru",
  "category": "Aksi Korporasi",
  "title": "FWCT Gelar RUPSLB Ubah Anggaran Dasar Ikuti [KBLI] Baru",
  "deck": "Wijaya Cahaya Timber memanggil RUPS Luar Biasa 1 Oktober 2026 untuk mengubah Anggaran Dasar menyesuaikan kode klasifikasi usaha sesuai aturan pemerintah baru.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "RUPSLB",
   "KBLI",
   "Wijaya Cahaya Timber"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a9a75a903a_da35de0c8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-sidak-lnsw-kemenkeu-siapkan-ai-kejar-potensi-pajak",
  "category": "Makroekonomi",
  "title": "Purbaya Sidak LNSW, Kemenkeu Siapkan AI Kejar [Potensi] Pajak",
  "deck": "Menteri Keuangan Purbaya Yudhi Sadewa sidak LNSW dan menilai integrasi datanya belum optimal, lalu menyiapkan aplikasi AI untuk melacak potensi kekurangan pajak perusahaan.",
  "date": "9 September 2026",
  "image": "assets/img/purbaya-sidak-lnsw-kemenkeu-siapkan-ai-kejar-potensi-pajak.jpg",
  "imageV": "mtu065se",
  "tags": [
   "LNSW",
   "AI Kemenkeu",
   "Potensi Pajak",
   "Purbaya Yudhi Sadewa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465970-purbaya-sidak-lnsw-soroti-data-belum-terintegrasi-dan-siapkan-ai-untuk-kejar-potensi-pajak"
 },
 {
  "slug": "meja-rugi-rp8-88-miliar-auditor-soroti-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "MEJA Rugi Rp8,88 Miliar, Auditor Soroti [Kelangsungan Usaha]",
  "deck": "Auditor memberi opini wajar tanpa modifikasian namun menyoroti keraguan signifikan atas kelangsungan usaha PT Harta Djaya Karya Tbk setelah rugi periode berjalan mencapai Rp8,88 miliar.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "laporan keuangan",
   "kelangsungan usaha",
   "waran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260909161310-64383-0/FinancialStatement-2026-II-MEJA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-gelar-public-expose-usai-suspensi-bahas-akuisisi-cuan",
  "category": "Aksi Korporasi",
  "title": "SINI Gelar Public Expose usai Suspensi, Bahas [Akuisisi] CUAN",
  "deck": "Setelah sahamnya disetop BEI, Singaraja Putra menggelar paparan publik Jumat ini untuk membahas negosiasi akuisisi oleh Petrindo Jaya Kreasi (CUAN) serta kondisi keuangan terkini.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "CUAN",
   "akuisisi",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e5fd7e5f18_c1535fc3f9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-507-diproyeksi-lanjut-besok",
  "category": "Moneter",
  "title": "Rupiah [Menguat] ke Rp17.507, Diproyeksi Lanjut Besok",
  "deck": "Rupiah menguat 125 poin ke Rp17.507 per dolar AS, ditopang data ritel dan keyakinan konsumen yang membaik. Penguatan diperkirakan berlanjut ke sekitar Rp17.480 besok.",
  "date": "9 September 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-507-diproyeksi-lanjut-besok.jpg",
  "imageV": "mtu066ag",
  "tags": [
   "rupiah",
   "kurs",
   "nilai tukar",
   "dolar AS"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465974-rupiah-ditutup-menguat-rp17507-pengamat-sebut-ada-kabar-baik-untuk-perdagangan-besok"
 },
 {
  "slug": "zp-14-waran-terstruktur-jatuh-tempo-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "ZP: 14 Waran Terstruktur [Jatuh Tempo] 30 September 2026",
  "deck": "14 seri waran terstruktur ZP atas saham ACES, ADRO, BBTN, BUKA, HRUM, INDY, ISAT, JSMR, MIKA, MYOR, PGAS, PTBA, PTRO, dan UNVR jatuh tempo 30 September 2026 dan diselesaikan tunai.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "Maybank Sekuritas",
   "jatuh tempo waran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2fa476db44_d054a5b460.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dvla-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "DVLA Jawab Permintaan BEI soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Darya-Varia Laboratoria menyatakan tak ada informasi material yang belum diungkap dan tak ada rencana aksi korporasi dalam tiga bulan ke depan setelah ditanya BEI soal pergerakan sahamnya.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DVLA",
   "Darya-Varia Laboratoria",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/679bd9df60_6e98cb1eb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdln-gelar-rupslb-kedua-kuorum-pertama-gagal-capai-75",
  "category": "Aksi Korporasi",
  "title": "MDLN Gelar RUPSLB Kedua, Kuorum Pertama [Gagal] Capai 75%",
  "deck": "RUPSLB kedua MDLN digelar 14 September 2026, setelah rapat pertama gagal kuorum 75 persen untuk agenda pengalihan aset di atas separuh kekayaan bersih perusahaan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLN",
   "RUPSLB",
   "Modernland Realty",
   "pengalihan aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2f000d6b07_c5d80a6fce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-sengketa-tanah-sarana-steel-tak-pengaruhi-rights-issue",
  "category": "Aksi Korporasi",
  "title": "BAJA: Sengketa Tanah Sarana Steel Tak Pengaruhi [Rights Issue]",
  "deck": "Saranacentral Bajatama (BAJA) menegaskan bukan pihak dalam sengketa tanah yang melibatkan PT Sarana Steel dan menyatakan rencana rights issue tetap berjalan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "rights issue",
   "sengketa tanah",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fd93c60baa_c501bb1046.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-akui-tak-tahu-pemicu-kenaikan-harga-sahamnya-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "TRUK Akui Tak Tahu Pemicu [Kenaikan] Harga Sahamnya ke Bursa",
  "deck": "Menjawab permintaan penjelasan Bursa soal kenaikan harga sahamnya, PT Guna Timur Raya Tbk menyatakan tidak ada kontrak, transaksi, atau informasi material baru yang belum diungkapkan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "Guna Timur Raya",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/19d2a8b461_f6ec830e1d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "life-ungkap-laba-melonjak-69-sebelum-public-expose-insidentil",
  "category": "Aksi Korporasi",
  "title": "LIFE Ungkap Laba [Melonjak] 69% Sebelum Public Expose Insidentil",
  "deck": "LIFE merilis materi Public Expose Insidental usai BEI menghentikan sementara perdagangan sahamnya akibat lonjakan harga, dengan laba bersih H1 2026 naik 69 persen.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "MSIG Life",
   "Public Expose",
   "penghentian sementara BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/11cae592e8_96c7b0de3d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-coret-agenda-ekspansi-usaha-dari-rupslb-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "MKNT Coret Agenda [Ekspansi Usaha] dari RUPSLB PMTHMETD",
  "deck": "MKNT mencabut agenda ekspansi usaha sebagai holding dari RUPSLB, sementara konversi utang Rp822,9 miliar kreditur menjadi saham tetap dibawa ke RUPSLB 14 September 2026.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "RUPSLB",
   "konversi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/00d7aa890a_9399c2aabd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-koreksi-laporan-dana-rights-issue-rp6-02-triliun",
  "category": "Aksi Korporasi",
  "title": "GMFI Koreksi Laporan Dana Rights Issue [Rp6,02 Triliun]",
  "deck": "GMF Aero Asia mengoreksi laporan realisasi dana rights issue per 30 Juni 2026 usai ditelaah OJK, sisa dana Rp47,61 miliar masih mengendap di bank afiliasi.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "rights issue",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/353060c2d0_2c8b7e4450.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tol-yogya-bawen-ambarawa-bawen-beroperasi-november-2026",
  "category": "BUMN",
  "title": "Tol Yogya-Bawen Ambarawa-Bawen [Beroperasi] November 2026",
  "deck": "Jasa Marga menargetkan Seksi 6 Ambarawa-Bawen tol Yogyakarta-Bawen beroperasi penuh November 2026, melengkapi ruas sepanjang 75,12 km dari Sleman hingga Bawen.",
  "date": "9 September 2026",
  "image": "assets/img/tol-yogya-bawen-ambarawa-bawen-beroperasi-november-2026.jpg",
  "imageV": "mttupr4e",
  "tags": [
   "Jasa Marga",
   "Tol Yogya-Bawen",
   "Infrastruktur",
   "Kementerian PU"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465963-tol-yogya-bawen-seksi-6-akan-beroperasi-november-tahun-ini"
 },
 {
  "slug": "bbni-ungkap-materi-public-expose-kredit-tumbuh-24-yoy",
  "category": "Aksi Korporasi",
  "title": "BBNI Ungkap Materi Public Expose, Kredit Tumbuh [24%] YoY",
  "deck": "BNI mengoreksi surat sebelumnya dan merilis materi Public Expose Tahunan 1H26, memuat data kredit tumbuh 24% YoY, laba Rp10,8 triliun, dan CAR 18,1%.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "Bank Negara Indonesia",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/43f6f25197_e02b1191d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "keyakinan-konsumen-agustus-naik-jadi-118-5",
  "category": "Makroekonomi",
  "title": "Keyakinan Konsumen Agustus [Naik] jadi 118,5",
  "deck": "Bank Indonesia mencatat Indeks Keyakinan Konsumen naik ke 118,5 pada Agustus 2026, ditopang membaiknya persepsi lapangan kerja dan minat beli barang tahan lama.",
  "date": "9 September 2026",
  "image": "assets/img/keyakinan-konsumen-agustus-naik-jadi-118-5.jpg",
  "imageV": "mttp30yj",
  "tags": [
   "indeks keyakinan konsumen",
   "bank indonesia",
   "survei konsumen",
   "lapangan kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465922-indeks-keyakinan-konsumen-agustus-2026-naik-jadi-1185"
 },
 {
  "slug": "survei-bi-keyakinan-konsumen-naik-lagi-pada-agustus-2026",
  "category": "Makroekonomi",
  "title": "Survei BI: Keyakinan Konsumen [Naik] Lagi pada Agustus 2026",
  "deck": "Indeks Keyakinan Konsumen Bank Indonesia naik ke 118,5 pada Agustus 2026 dari 116,8 di Juli, didorong membaiknya penilaian kondisi ekonomi saat ini dan harapan ke depan.",
  "date": "9 September 2026",
  "image": "assets/img/survei-bi-keyakinan-konsumen-naik-lagi-pada-agustus-2026.jpg",
  "imageV": "mttm7usg",
  "tags": [
   "Bank Indonesia",
   "Keyakinan Konsumen",
   "Survei Konsumen",
   "Konsumsi Rumah Tangga"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bbkp-lunasi-obligasi-senilai-rp1-14-triliun",
  "category": "Aksi Korporasi",
  "title": "BBKP Lunasi [Obligasi] Senilai Rp1,14 Triliun",
  "deck": "Bank KB Indonesia melunasi pokok dan bunga dua seri obligasi senilai total Rp1,14 triliun pada 9 September 2026, menuntaskan seluruh kewajiban atas obligasi tersebut.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "obligasi",
   "KB Bank",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ba6d8a1914_8f5c01d9d0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "chek-jawab-bursa-soal-lonjakan-volume-saham-26-kali-lipat",
  "category": "Aksi Korporasi",
  "title": "CHEK Jawab Bursa soal [Lonjakan] Volume Saham 26 Kali Lipat",
  "deck": "Volume saham CHEK melonjak jadi 32,1 juta lembar dengan 5.042 kali transaksi, dari sebelumnya 1,2 juta lembar, saat harga naik 2,99 persen ke Rp138.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CHEK",
   "UMA saham",
   "volatilitas transaksi",
   "Diastika Biotekindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f4c7f022dc_02a414b72c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "labs-beri-penjelasan-usai-saham-melonjak-23-64-dalam-sehari",
  "category": "Aksi Korporasi",
  "title": "LABS Beri Penjelasan usai Saham [Melonjak] 23,64% dalam Sehari",
  "deck": "Harga saham LABS melonjak 23,64% ke Rp204 dengan volume transaksi naik hingga 118 kali lipat pada 7 September 2026. Manajemen menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LABS",
   "UBC Medical Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2e3bd4b7a7_e99d6fe99d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apic-ungkap-rencana-pelunasan-mtn-rp400-miliar-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "APIC Ungkap Rencana Pelunasan [MTN] Rp400 Miliar di Public Expose",
  "deck": "Dalam hasil public expose tahunan, manajemen APIC menyebut MTN Rp400 miliar berbunga 9,75% jatuh tempo tahun ini, ekuitas naik dari keuntungan belum terealisasi, dan tidak ada dividen.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APIC",
   "Pacific Strategic Financial",
   "public expose",
   "MTN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b363069198_24ec521bd6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdln-panggil-rupslb-kedua-minta-restu-alihkan-aset-di-atas-50",
  "category": "Aksi Korporasi",
  "title": "MDLN Panggil RUPSLB Kedua, Minta Restu Alihkan [Aset] di Atas 50%",
  "deck": "Setelah RUPS pertama gagal kuorum, Modernland Realty memanggil RUPSLB kedua pada 14 September untuk meminta restu pengalihan atau penjaminan aset melebihi 50% kekayaan bersih perusahaan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLN",
   "RUPSLB",
   "Modernland Realty",
   "aset perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0593cd6057_c299cf1963.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "isat-fitch-pertahankan-peringkat-aaa-untuk-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "ISAT: Fitch Pertahankan Peringkat [AAA] untuk Obligasi dan Sukuk",
  "deck": "Fitch Ratings Indonesia mengafirmasi peringkat nasional jangka panjang Indosat di AAA(idn) dengan outlook stabil untuk seluruh obligasi dan sukuk ijarah berkelanjutan perseroan.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISAT",
   "Fitch Ratings",
   "peringkat obligasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f74e41bbc2_fcd8c3bbb0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-610-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.610.000 per Gram",
  "deck": "Harga emas Antam hari ini turun Rp17.000 menjadi Rp2.610.000 per gram, sementara harga buyback ikut melemah ke Rp2.460.000 per gram.",
  "date": "9 September 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-610-000-per-gram.jpg",
  "imageV": "mttm7v8c",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465898-harga-emas-antam-hari-ini-9-september-2026-rp2610000-per-gram-turun-rp17000"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-590-cadangan-devisa-naik-jadi-us-146-5-m",
  "category": "Moneter",
  "title": "Rupiah [Menguat] ke Rp17.590, Cadangan Devisa Naik jadi US$146,5 M",
  "deck": "Rupiah menguat tipis ke Rp17.590 per dolar AS pada Rabu pagi setelah Bank Indonesia melaporkan cadangan devisa Agustus 2026 naik jadi US$146,5 miliar.",
  "date": "9 September 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-590-cadangan-devisa-naik-jadi-us-146-5-m.jpg",
  "imageV": "mttm7vlw",
  "tags": [
   "rupiah",
   "cadangan devisa",
   "dolar AS",
   "Bank Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465894-rupiah-menguat-ke-rp17590-per-dolar-as-usai-rilis-cadangan-devisa-agustus-2026"
 },
 {
  "slug": "saham-sure-bergejolak-manajemen-klaim-tak-ada-informasi-material",
  "category": "Aksi Korporasi",
  "title": "Saham SURE Bergejolak, Manajemen Klaim Tak Ada Informasi [Material]",
  "deck": "Merespons permintaan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, Super Energy Tbk (SURE) menyatakan tidak mengetahui informasi material maupun rencana aksi korporasi yang memicunya.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SURE",
   "Super Energy Tbk",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b32a521ead_611cb7d48a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-menguat-coba-tembus-resistance-6-700-saat-wall-street-anjlok",
  "category": "Pasar Modal",
  "title": "IHSG Menguat, Coba Tembus [Resistance] 6.700 saat Wall Street Anjlok",
  "deck": "IHSG dibuka menguat tipis ke 6.699 dan menguji level resistance 6.700, di tengah bursa Asia yang beragam dan Wall Street yang melemah akibat aksi jual saham software global.",
  "date": "9 September 2026",
  "image": "assets/img/ihsg-menguat-coba-tembus-resistance-6-700-saat-wall-street-anjlok.jpg",
  "imageV": "mttm7w15",
  "tags": [
   "IHSG",
   "bursa saham",
   "Wall Street",
   "suku bunga The Fed"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465891-ihsg-dibuka-menguat-pada-perdagangan-9-september-2026-siap-break-resistance-saat-bursa-asia-variatif-dan-wall-street-anjlok"
 },
 {
  "slug": "wika-gagal-bayar-obligasi-suspensi-saham-berlanjut",
  "category": "Aksi Korporasi",
  "title": "WIKA [Gagal Bayar] Obligasi, Suspensi Saham Berlanjut",
  "deck": "BEI melanjutkan suspensi saham WIKA di seluruh pasar setelah Perseroan menunda pembayaran pokok, bunga obligasi, dan bagi hasil sukuk mudharabah yang jatuh tempo 8 September 2026.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "suspensi saham",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/05235d4f68_a1c2e422ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "itma-tak-ada-info-material-bipi-belum-ubah-saham",
  "category": "Aksi Korporasi",
  "title": "ITMA: Tak Ada Info Material, [BIPI] Belum Ubah Saham",
  "deck": "ITMA menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, memastikan tak ada info material dan pemegang saham utama BIPI belum berencana mengubah kepemilikan saham.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMA",
   "BIPI",
   "volatilitas transaksi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/822c711101_3bfb28cdd8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-lepas-anak-usaha-aset-susut-87-9-persen",
  "category": "Aksi Korporasi",
  "title": "PPGL Lepas Anak Usaha, [Aset] Susut 87,9 Persen",
  "deck": "Prima Globalindo Logistik melaporkan total aset dan liabilitas anjlok lebih dari 80 persen pada semester I 2026, dipicu pelepasan saham anak usaha bernama JAYA.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "laporan keuangan",
   "divestasi",
   "logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260909074451-64380-0/FinancialStatement-2026-II-PPGL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-catatkan-obligasi-dan-sukuk-rp5-6-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "PPGD Catatkan [Obligasi] dan Sukuk Rp5,6 Triliun di BEI",
  "deck": "IDX mencatatkan tiga instrumen surat utang PPGD (Pegadaian) tahap kedua senilai total Rp5,61 triliun mulai 9 September 2026, berperingkat AAA dengan wali amanat Bank Mega.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGD",
   "Pegadaian",
   "obligasi korporasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5afcb911b5_21d88965f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medc-lunasi-obligasi-rp600-miliar-berhenti-diperdagangkan",
  "category": "Aksi Korporasi",
  "title": "MEDC Lunasi Obligasi [Rp600 Miliar], Berhenti Diperdagangkan",
  "deck": "Obligasi Berkelanjutan IV Medco Energi Internasional Tahap I Seri B senilai Rp600 miliar jatuh tempo 9 September 2026 dan berhenti diperdagangkan di Bursa Efek Indonesia.",
  "date": "9 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "obligasi",
   "jatuh tempo",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b92a1a87cf_f60f36c206.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-aims-melonjak-25-dalam-sehari-bursa-minta-klarifikasi",
  "category": "Aksi Korporasi",
  "title": "Saham [AIMS] Melonjak 25% dalam Sehari, Bursa Minta Klarifikasi",
  "deck": "Harga saham AIMS naik 25 persen dan volume transaksi melonjak nyaris 12 kali dalam sehari; emiten menyatakan tidak ada informasi material di baliknya.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AIMS",
   "volatilitas saham",
   "keterbukaan informasi",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/587f7103d5_acd4f3d2aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-panggil-rupslb-untuk-restrukturisasi-dan-konversi-utang",
  "category": "Aksi Korporasi",
  "title": "ADHI Panggil RUPSLB untuk [Restrukturisasi] dan Konversi Utang",
  "deck": "ADHI memanggil RUPSLB 30 September 2026 untuk menyetujui restrukturisasi dan konversi utang jangka pendek menjadi jangka panjang.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "RUPSLB",
   "restrukturisasi utang",
   "BUMN Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c59cd71cae_1ea75f3b93.pdf",
  "sourceLabel": "IDX"
 }
];
