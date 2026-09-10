// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/bursa-kerja.jpg",
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
 },
 {
  "slug": "tguk-konfirmasi-proses-tender-offer-wajib-masih-berlanjut",
  "category": "Aksi Korporasi",
  "title": "TGUK Konfirmasi Proses [Tender Offer] Wajib Masih Berlanjut",
  "deck": "Menjawab permintaan penjelasan volatilitas transaksi dari BEI, Platinum Wahab Nusantara (TGUK) menegaskan proses tender offer wajib dalam pengambilalihan perseroan masih berjalan setelah sempat tertunda pada 2025.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "tender offer",
   "akuisisi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1edea03255_55f05cfc11.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jadwalkan-rupslb-15-oktober-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "BIKE Jadwalkan RUPSLB [15 Oktober], Agenda Menyusul",
  "deck": "PT Bhineka Inovasi Ketahanan Energi Tbk menjadwalkan RUPSLB dan RUPS Independen pada 15 Oktober 2026, panggilan resmi berisi agenda terbit 23 September.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "RUPSLB",
   "RUPS Independen",
   "Bhineka Inovasi Ketahanan Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9838de1dd7_16e4341e66.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inklusi-keuangan-syariah-baru-13-persen-jauh-tertinggal",
  "category": "Perbankan",
  "title": "Inklusi Keuangan Syariah Baru [13] Persen, Jauh Tertinggal",
  "deck": "Pemerintah menyoroti kesenjangan akses keuangan syariah yang baru menjangkau 13 persen masyarakat, jauh di bawah layanan konvensional yang sudah 93,53 persen.",
  "date": "8 September 2026",
  "image": "assets/img/teller-bank.jpg",
  "tags": [
   "ekonomi syariah",
   "inklusi keuangan",
   "UMKM",
   "KUR syariah"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7085/perkuat-ekosistem-ekonomi-syariah-menko-airlangga-dorong-inklusi-keuangan-dan-pemberdayaan-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "sofa-panggil-rupslb-untuk-ubah-kegiatan-usaha-ke-pembiayaan",
  "category": "Aksi Korporasi",
  "title": "SOFA Panggil RUPSLB untuk [Ubah] Kegiatan Usaha ke Pembiayaan",
  "deck": "SOFA memanggil RUPSLB 30 September 2026 untuk meminta persetujuan penambahan kegiatan usaha ke bidang induk usaha dan pembiayaan conduit, serta perubahan anggaran dasar.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "RUPSLB",
   "Transaksi Material",
   "Perubahan Kegiatan Usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c4ec8f82a8_837a9e309f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untd-jelaskan-rugi-bruto-fasilitas-ocbc-diperpanjang-sebulan",
  "category": "Aksi Korporasi",
  "title": "UNTD Jelaskan [Rugi Bruto], Fasilitas OCBC Diperpanjang Sebulan",
  "deck": "Terang Dunia Internusa menjawab permintaan penjelasan Bursa soal rugi bruto semester I 2026, pergeseran distribusi ke Bintang Mas Lestari, dan fasilitas kredit OCBC yang baru diperpanjang sebulan.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTD",
   "rugi bruto",
   "OCBC",
   "penggunaan dana IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/12fec88189_fa65702b77.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-gelar-rupslb-30-september-pisahkan-segmen-fiber-ke-tif",
  "category": "Aksi Korporasi",
  "title": "TLKM Gelar RUPSLB 30 September, [Pisahkan] Segmen Fiber ke TIF",
  "deck": "Telkom mengundang RUPSLB 30 September 2026 untuk menyetujui pemisahan tahap dua bisnis fiber ke TIF dan perubahan susunan direksi-komisaris.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "RUPSLB",
   "spin-off",
   "Telkom Infrastruktur Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/568a02c46f_5906b7a305.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medp-baru-pakai-13-dana-obligasi-rp500-miliar-per-juni-2026",
  "category": "Aksi Korporasi",
  "title": "MEDP baru pakai [13%] dana obligasi Rp500 miliar per Juni 2026",
  "deck": "MEDP baru merealisasikan Rp66,2 miliar dari Rp493,42 miliar dana obligasi untuk eksplorasi panas bumi di Bonjol, Sumatera Barat. Sisanya masih mengendap di tabungan bank.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "obligasi",
   "panas bumi",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2e30b85719_20a906d818.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medp-rampungkan-realisasi-dana-sukuk-rp1-15-triliun-ke-utang",
  "category": "Aksi Korporasi",
  "title": "MEDP rampungkan realisasi dana sukuk Rp1,15 triliun ke [utang]",
  "deck": "MEDP melaporkan ke OJK bahwa dana Rp1,15 triliun dari sukuk wakalah tahap IV telah habis terpakai untuk melunasi lima utang lama per 30 Juni 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "sukuk wakalah",
   "pelunasan utang",
   "energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1b580dd053_d68c8bb59a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-rights-issue-rp1-triliun-untuk-kredit",
  "category": "Aksi Korporasi",
  "title": "BMAS Rights Issue Rp1 Triliun untuk [Kredit]",
  "deck": "Bank Kasikorn Indonesia menawarkan 2,87 miliar saham baru lewat rights issue seharga Rp350 per saham, menghimpun Rp1,01 triliun untuk modal kerja penyaluran kredit.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "rights issue",
   "HMETD",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b62aa261ce_90ae365115.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-tegaskan-tak-ada-info-baru-rights-issue-masih-tertunda",
  "category": "Aksi Korporasi",
  "title": "UANG Tegaskan Tak Ada Info Baru, [Rights Issue] Masih Tertunda",
  "deck": "PT Pakuan Tbk menjawab permintaan penjelasan BEI atas volatilitas sahamnya, sambil mengonfirmasi rencana rights issue hingga 1,21 miliar saham belum juga bergerak maju.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "PT Pakuan Tbk",
   "rights issue",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8d18aad62d_4efb155f9c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-klaim-aliran-uang-ke-ekonomi-ri-mulai-pulih",
  "category": "Moneter",
  "title": "Purbaya Klaim Aliran Uang ke Ekonomi RI Mulai [Pulih]",
  "deck": "Menkeu Purbaya menyebut aliran uang ke ekonomi mulai normal sejak Juli, setelah sempat tersendat pada April-Juni 2026.",
  "date": "8 September 2026",
  "image": "assets/img/purbaya-klaim-aliran-uang-ke-ekonomi-ri-mulai-pulih.jpg",
  "imageV": "mtsmsj7u",
  "tags": [
   "Purbaya Yudhi Sadewa",
   "Kementerian Keuangan",
   "Bank Indonesia",
   "Uang Beredar"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465777-purbaya-klaim-uang-mulai-banjiri-ekonomi-ri-lagi-dampaknya-segera-dirasakan-masyarakat"
 },
 {
  "slug": "insw-perluas-cakupan-layanan-ekspor-impor-digital",
  "category": "Bisnis",
  "title": "INSW [Perluas] Cakupan Layanan Ekspor Impor Digital",
  "deck": "Kemenko Perekonomian melaporkan perluasan sistem satu pintu ekspor impor ke puluhan pelabuhan dan bandara, sambil menyiapkan aturan baru soal ekspor komoditas strategis.",
  "date": "8 September 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "INSW",
   "Kemenko Perekonomian",
   "SIMBARA",
   "logistik"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7084/tingkatkan-efisiensi-logistik-dan-tata-kelola-perdagangan-melalui-optimalisasi-sistem-indonesia-national-single-window",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "smra-kurangi-penyertaan-modal-rp1-2-triliun-di-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "SMRA Kurangi Penyertaan Modal [Rp1,2 Triliun] di Anak Usaha",
  "deck": "Summarecon Agung melaporkan transaksi afiliasi berupa pengurangan penyertaan modal senilai Rp1,2 triliun di anak usahanya, PT Summarecon Investment Property.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRA",
   "Summarecon Agung",
   "transaksi afiliasi",
   "pengurangan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d0af22490b_fcc777a2fd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-wgc-wajib-tender-beli-saham-publik-rp2-915-saham",
  "category": "Aksi Korporasi",
  "title": "MBSS: WGC Wajib [Tender] Beli Saham Publik Rp2.915/Saham",
  "deck": "PT Wibowo Group Capital, pengendali baru MBSS, menawarkan beli maksimal 306,26 juta saham publik seharga Rp2.915 per lembar mulai 9 September hingga 8 Oktober 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "tender offer",
   "akuisisi",
   "Wibowo Group Capital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3dd7bd6169_715425c9d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "care-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "CARE Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan penjelasan Bursa Efek Indonesia, Metro Healthcare Indonesia (CARE) menyatakan tidak ada informasi material atau rencana aksi korporasi di balik gejolak harga sahamnya.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CARE",
   "Metro Healthcare Indonesia",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3286e46678_05200b8b0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-divestasi-13-anak-usaha-ke-twm-rampung",
  "category": "Aksi Korporasi",
  "title": "MGLV [Divestasi] 13 Anak Usaha ke TWM Rampung",
  "deck": "MGLV resmi menyerahkan kepemilikan 13 anak usaha serta sejumlah aset dan kewajiban kepada PT Trijaya Wisesa Makmur, merampungkan transaksi yang diumumkan sejak akhir Juli 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "divestasi",
   "TWM",
   "restrukturisasi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eaf69faa9f_108e74fb65.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "anggaran-mbg-2026-diprediksi-turun-di-bawah-rp200-triliun",
  "category": "Makroekonomi",
  "title": "Anggaran MBG 2026 Diprediksi [Turun] di Bawah Rp200 Triliun",
  "deck": "Menkeu Purbaya menyebut anggaran MBG 2026 bisa di bawah Rp200 triliun, susut dari pagu awal Rp330 triliun, seiring efisiensi kepemimpinan baru Badan Gizi Nasional.",
  "date": "8 September 2026",
  "image": "assets/img/anggaran-mbg-2026-diprediksi-turun-di-bawah-rp200-triliun.jpg",
  "imageV": "mtsktjtu",
  "tags": [
   "MBG",
   "Purbaya Yudhi Sadewa",
   "Badan Gizi Nasional",
   "Anggaran 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465759-purbaya-ungkap-efisiensi-mbg-anggaran-2026-diprediksi-di-bawah-rp200-triliun"
 },
 {
  "slug": "saham-dooh-masuk-daftar-pemantauan-khusus-bei-mulai-9-september",
  "category": "Aksi Korporasi",
  "title": "Saham DOOH [Masuk] Daftar Pemantauan Khusus BEI Mulai 9 September",
  "deck": "Bursa Efek Indonesia memasukkan saham DOOH (PT Era Media Sejahtera Tbk) ke daftar pemantauan khusus mulai 9 September 2026, menyusul suspensi perdagangan lebih dari satu hari.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "BEI",
   "pemantauan khusus",
   "suspensi perdagangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dc8ddd93aa_ea386ea8ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amar-gelar-rupslb-30-september-ganti-direktur-kepatuhan",
  "category": "Aksi Korporasi",
  "title": "AMAR Gelar RUPSLB 30 September, Ganti [Direktur Kepatuhan]",
  "deck": "Bank Amar Indonesia memanggil pemegang saham untuk RUPSLB 30 September 2026 guna menyetujui pengunduran diri Thio Sucy dan pengangkatan Tjetjen Saputra sebagai Direktur Kepatuhan.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAR",
   "RUPSLB",
   "Direktur Kepatuhan",
   "Bank Amar Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cefd4a8287_e14aea8c90.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-ungkap-strategi-bangun-ekspektasi-usai-demo-besar",
  "category": "Makroekonomi",
  "title": "Purbaya Ungkap Strategi Bangun [Ekspektasi] Usai Demo Besar",
  "deck": "Menkeu Purbaya Yudhi Sadewa mengaku sengaja tampil optimistis untuk membentuk ekspektasi positif pasar setelah demo besar mengguncang awal masa jabatannya.",
  "date": "8 September 2026",
  "image": "assets/img/purbaya-ungkap-strategi-bangun-ekspektasi-usai-demo-besar.jpg",
  "imageV": "mtsktka5",
  "tags": [
   "Purbaya Yudhi Sadewa",
   "Kementerian Keuangan",
   "kepercayaan investor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465756-purbaya-curhat-hal-paling-pusing-jadi-menkeu-dari-demo-besar-hingga-gempuran-msci"
 },
 {
  "slug": "ktp-baru-bakal-otomatis-sertakan-nomor-rekening-bank",
  "category": "Perbankan",
  "title": "KTP Baru Bakal Otomatis Sertakan Nomor [Rekening] Bank",
  "deck": "Pemerintah menyiapkan pembukaan rekening otomatis lewat BRI dan BSI berbasis NIK, agar warga yang genap 17 tahun langsung mendapat KTP sekaligus nomor rekening bank.",
  "date": "8 September 2026",
  "image": "assets/img/ktp-baru-bakal-otomatis-sertakan-nomor-rekening-bank.jpg",
  "imageV": "mtsktkqm",
  "tags": [
   "BRI",
   "BSI",
   "inklusi keuangan",
   "rekening bank"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465747-pemerintah-siapkan-rekening-massal-bri-bsi-warga-17-tahun-bakal-dapat-ktp-plus-nomor-rekening"
 },
 {
  "slug": "ssia-pangkas-target-pendapatan-2026-jadi-rp7-2-triliun",
  "category": "Aksi Korporasi",
  "title": "SSIA [Pangkas] Target Pendapatan 2026 jadi Rp7,2 Triliun",
  "deck": "Public expose tahunan SSIA mengungkap revisi target pendapatan 2026 dari Rp7,5 triliun menjadi Rp7,2 triliun, sementara laba bersih tetap ditarget melonjak 570 persen.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSIA",
   "public expose",
   "target pendapatan",
   "data center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/71d5704bbe_0700251c4d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-mandiri-bagi-dividen-interim-rp6-16-triliun",
  "category": "Perbankan",
  "title": "Bank Mandiri Bagi [Dividen] Interim Rp6,16 Triliun",
  "deck": "Bank Mandiri mencairkan dividen interim Rp6,16 triliun atau Rp66 per saham, sementara kredit dan aset tumbuh dua digit hingga Agustus 2026.",
  "date": "8 September 2026",
  "image": "assets/img/bank-mandiri-bagi-dividen-interim-rp6-16-triliun.jpg",
  "imageV": "mtsktl6y",
  "tags": [
   "Bank Mandiri",
   "BMRI",
   "dividen interim",
   "kredit perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465738-bank-mandiri-tebar-dividen-rp616-triliun-laba-tembus-rp375-triliun-hingga-agustus-2026"
 },
 {
  "slug": "zp-sesuaikan-harga-waran-terstruktur-bmri-usai-dividen-interim",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan Harga Waran [Terstruktur] BMRI Usai Dividen Interim",
  "deck": "Harga pelaksanaan dan rasio konversi BMRIZPCX6A serta BMRIZPCH7A disesuaikan menyusul dividen interim BMRI Rp66 per saham, efektif 16-18 September 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "BMRI",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6039b34a91_dfb6f974cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-terbitkan-jaminan-us-11-juta-untuk-akuisisi-blok-kasuri",
  "category": "Aksi Korporasi",
  "title": "RATU Terbitkan Jaminan US$11 Juta untuk Akuisisi [Blok Kasuri]",
  "deck": "RATU menjamin US$11 juta kewajiban anak usahanya, Raharja Energi Negeri, ke mitra Singapura Genting Oil Kasuri terkait pengalihan hak partisipasi di proyek migas.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "transaksi afiliasi",
   "jaminan perusahaan",
   "Blok Kasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b709d801af_c3b7b008d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akku-jelaskan-ke-bursa-soal-kelangsungan-usaha-yang-diragukan",
  "category": "Aksi Korporasi",
  "title": "AKKU Jelaskan ke Bursa soal [Kelangsungan] Usaha yang Diragukan",
  "deck": "AKKU merespons permintaan penjelasan BEI atas opini audit Wajar Dengan Pengecualian dan keraguan kelangsungan usaha akibat akumulasi rugi Rp304,41 miliar per Juni 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "opini audit",
   "kelangsungan usaha",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d6b8437251_91207ac78c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-tipis-ke-rp17-632-diramal-turun-lagi",
  "category": "Moneter",
  "title": "[Rupiah] Menguat Tipis ke Rp17.632, Diramal Turun Lagi",
  "deck": "Rupiah naik 6 poin ke Rp17.632 per dolar AS, tapi analis memperkirakan pelemahan lagi ke Rp17.630-17.670 pada Rabu (9/9).",
  "date": "8 September 2026",
  "image": "assets/img/rupiah-menguat-tipis-ke-rp17-632-diramal-turun-lagi.jpg",
  "imageV": "mtsktlqp",
  "tags": [
   "rupiah",
   "dolar AS",
   "cadangan devisa",
   "Bank Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465716-rupiah-ditutup-menguat-6-poin-besok-diprediksi-loyo-lagi-ke-rp17670"
 },
 {
  "slug": "ratu-paparkan-kinerja-ekuitas-naik-der-melonjak-ke-2-42x",
  "category": "Aksi Korporasi",
  "title": "RATU Paparkan Kinerja: Ekuitas Naik, DER Melonjak ke [2,42x]",
  "deck": "Materi public expose RATU: total aset naik jadi US$231,8 juta pasca akuisisi Blok Madura, dan rasio utang terhadap ekuitas melonjak ke 2,42 kali dari 1,05 kali.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "Raharja Energi Cepu",
   "Blok Madura",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/112cfc3da0_98481e2f3c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "daya-jawab-bursa-soal-lonjakan-transaksi-soroti-free-float",
  "category": "Aksi Korporasi",
  "title": "DAYA Jawab Bursa Soal Lonjakan Transaksi, Soroti [Free Float]",
  "deck": "Merespons permintaan penjelasan BEI atas volatilitas transaksi sahamnya, DAYA menyatakan tidak ada informasi material baru, namun mengaku masih mengevaluasi cara memenuhi ketentuan free float bursa.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAYA",
   "volatilitas transaksi",
   "free float",
   "Duta Intidaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a9eb2b2641_9a15174ad7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-cek-kesiapan-aft-babullah-di-ternate",
  "category": "Energi",
  "title": "Pertamina Cek Kesiapan [AFT] Babullah di Ternate",
  "deck": "Pertamina mengevaluasi kesiapan terminal avtur dan BBM di Ternate, Maluku Utara, untuk mengantisipasi kenaikan kebutuhan energi di wilayah kepulauan timur Indonesia.",
  "date": "8 September 2026",
  "image": "assets/img/pertamina-cek-kesiapan-aft-babullah-di-ternate.jpg",
  "imageV": "mtsfb0hu",
  "tags": [
   "Pertamina",
   "Maluku Utara",
   "Avtur",
   "Energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465711-jaga-kecukupan-energi-di-wilayah-timur-indonesia-pertamina-dukung-ekonomi-masyarakat-lewat-aft-babullah"
 },
 {
  "slug": "telkom-sewakan-gedung-gmp-ke-bgn-rapikan-kantor",
  "category": "BUMN",
  "title": "Telkom Sewakan Gedung GMP ke [BGN], Rapikan Kantor",
  "deck": "Telkom menyewakan Gedung Media Pratama kepada Badan Gizi Nasional, sekaligus menata ulang lokasi kerja TelkomGroup yang selama ini tersebar di Jakarta.",
  "date": "8 September 2026",
  "image": "assets/img/telkom-sewakan-gedung-gmp-ke-bgn-rapikan-kantor.jpg",
  "imageV": "mtsfb0xa",
  "tags": [
   "Telkom",
   "Badan Gizi Nasional",
   "properti",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465710-pastikan-kepentingan-perusahaan-tetap-terjaga-telkomgroup-optimalkan-aset-properti"
 },
 {
  "slug": "dmnd-panggil-rupslb-30-september-ubah-susunan-komisaris",
  "category": "Aksi Korporasi",
  "title": "DMND Panggil RUPSLB 30 September, Ubah Susunan [Komisaris]",
  "deck": "PT Diamond Food Indonesia Tbk mengundang pemegang saham ke RUPSLB 30 September 2026 untuk membahas pergantian Dewan Komisaris dan penyesuaian klasifikasi usaha ke KBLI 2025.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMND",
   "RUPSLB",
   "Dewan Komisaris",
   "KBLI 2025"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/61129200e2_131eefd57e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raja-rampungkan-akuisisi-5-saham-pt-lng-dari-genting",
  "category": "Aksi Korporasi",
  "title": "RAJA Rampungkan Akuisisi 5% Saham PT LNG dari [Genting]",
  "deck": "Anak usaha RAJA, PT Raharja Gas Kasuri, menuntaskan pembelian 5 persen saham PT Layar Nusantara Gas dari Genting LNG sebagai bagian kemitraan FLNG.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "akuisisi",
   "FLNG",
   "Genting LNG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f2c130b62d_50d3b87ed3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-cgs-international-jual-167-juta-saham-wilton-makmur",
  "category": "Aksi Korporasi",
  "title": "SQMI: CGS International Jual [167 Juta] Saham Wilton Makmur",
  "deck": "CGS International Securities Singapore melepas 167 juta saham SQMI pada 2 September 2026 seharga Rp103 per saham, hak suaranya turun dari 20,65 persen ke 19,58 persen.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "Wilton Makmur Indonesia",
   "kepemilikan saham",
   "CGS International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08092026-1174-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-paparkan-kinerja-pendapatan-kuartal-i-turun-18",
  "category": "Aksi Korporasi",
  "title": "SMLE Paparkan Kinerja, Pendapatan Kuartal I [Turun] 18%",
  "deck": "Public expose tahunan SMLE mengungkap pendapatan kuartal I 2026 turun 18 persen dibanding tahun lalu, sementara pertumbuhan pendapatan tahunan melambat sejak 2024.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "public expose",
   "kinerja keuangan",
   "pendapatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b81512c23f_57b7805558.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-realisasikan-dana-obligasi-sukuk-rp3-67-triliun-sisa-rp162-8-m",
  "category": "Aksi Korporasi",
  "title": "LPPI Realisasikan Dana Obligasi-Sukuk Rp3,67 Triliun, [Sisa] Rp162,8 M",
  "deck": "LPPI melaporkan realisasi penggunaan dana empat obligasi dan sukuk mudharabah berkelanjutan senilai Rp3,67 triliun per 31 Agustus 2026, dengan sisa Rp162,8 miliar masih di bank.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "obligasi korporasi",
   "sukuk mudharabah",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2616a4538a_0e8adb20d6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgwg-sampaikan-koreksi-laporan-realisasi-dana-ipo",
  "category": "Aksi Korporasi",
  "title": "DGWG Sampaikan [Koreksi] Laporan Realisasi Dana IPO",
  "deck": "DGWG mengoreksi laporan realisasi dana IPO Rp189,87 miliar yang sudah terpakai penuh untuk bahan baku pestisida dan penyertaan modal ke anak usaha.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "IPO",
   "penggunaan dana IPO",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1023585db5_15a84355ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dwgl-raih-outlook-positif-rating-obligasi-tetap-a",
  "category": "Aksi Korporasi",
  "title": "DWGL Raih Outlook [Positif], Rating Obligasi Tetap A-",
  "deck": "KRI mempertahankan peringkat A- untuk Obligasi I Dwi Guna Laksana 2025 senilai Rp300 miliar, tapi menaikkan outlook dari stabil ke positif berkat perbaikan struktur modal.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DWGL",
   "obligasi",
   "pemeringkatan",
   "outlook"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/367b823973_e630738fc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cadangan-devisa-ri-tembus-rekor-us-146-5-miliar",
  "category": "Moneter",
  "title": "Cadangan Devisa RI [Tembus] Rekor US$146,5 Miliar",
  "deck": "Cadangan devisa Indonesia naik ke rekor US$146,5 miliar akhir Agustus 2026, ditopang penerimaan pajak dan pinjaman luar negeri pemerintah di tengah gejolak pasar global.",
  "date": "8 September 2026",
  "image": "assets/img/cadangan-devisa-ri-tembus-rekor-us-146-5-miliar.jpg",
  "imageV": "mtsfb1ar",
  "tags": [
   "cadangan devisa",
   "bank indonesia",
   "rupiah",
   "impor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465691-cadangan-devisa-indonesia-melonjak-ke-us1465-miliar-tembus-rekor-baru-di-tengah-gejolak-global"
 },
 {
  "slug": "visi-gelar-rups-terbitkan-saham-baru-danai-akuisisi-kesehatan",
  "category": "Aksi Korporasi",
  "title": "VISI Gelar RUPS, Terbitkan Saham Baru Danai Akuisisi [Kesehatan]",
  "deck": "VISI memanggil RUPS 30 September 2026 untuk menyetujui penerbitan saham baru tanpa hak memesan efek dan akuisisi 72,91% saham perusahaan kesehatan Hasna Medika Bakti Cirebon.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "RUPS",
   "akuisisi",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e6726936d4_88044975b9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abmm-jadwalkan-rupslb-pada-15-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "ABMM Jadwalkan [RUPSLB] pada 15 Oktober 2026",
  "deck": "ABM Investama mengumumkan rencana RUPSLB pada 15 Oktober 2026 secara elektronik, dengan pemegang saham per 22 September berhak hadir.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABMM",
   "RUPSLB",
   "ABM Investama",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fef89018b8_c8020f097d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "erupsi-menerus-berhenti-anak-krakatau-tetap-siaga",
  "category": "Energi",
  "title": "Erupsi Menerus Berhenti, Anak Krakatau Tetap [Siaga]",
  "deck": "Episode erupsi menerus 25 jam Gunung Anak Krakatau berakhir, tapi status Siaga bertahan karena kegempaan tinggi dan radius 3 km tetap dilarang untuk aktivitas warga.",
  "date": "8 September 2026",
  "image": "assets/img/erupsi-menerus-berhenti-anak-krakatau-tetap-siaga.jpg",
  "imageV": "mts7srue",
  "tags": [
   "Anak Krakatau",
   "Badan Geologi",
   "Status Siaga",
   "Lampung"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/erupsi-menerus-anak-krakatau-berakhir-aktivitas-gunung-api-kembali-menurun-dan-tetap-dipantau",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "baik-akui-evaluasi-restrukturisasi-outlet-merugi-usai-disuspensi",
  "category": "Aksi Korporasi",
  "title": "BAIK Akui Evaluasi [Restrukturisasi] Outlet Merugi Usai Disuspensi",
  "deck": "Public expose insidentil BAIK usai suspensi saham mengungkap rencana evaluasi outlet merugi, tapi manajemen belum membeberkan angka konkret jumlah gerai yang terdampak.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "Public Expose",
   "Suspensi Saham",
   "Bersama Mencapai Puncak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0fa477e401_d4b09f8da5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kementan-bangun-999-unit-irigasi-tersier-di-jabar-banten",
  "category": "Industri",
  "title": "Kementan Bangun [999] Unit Irigasi Tersier di Jabar-Banten",
  "deck": "Kementerian Pertanian merealisasikan 737 dari 999 unit irigasi tersier di Jawa Barat dan Banten untuk menahan dampak kemarau panjang akibat El Nino.",
  "date": "8 September 2026",
  "image": "assets/img/kementan-bangun-999-unit-irigasi-tersier-di-jabar-banten.jpg",
  "imageV": "mts6ifj1",
  "tags": [
   "irigasi tersier",
   "Kementan",
   "musim kemarau",
   "Jawa Barat-Banten"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8124",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "pemerintah-tambah-sphp-beras-1-juta-ton-hadapi-kemarau",
  "category": "Makroekonomi",
  "title": "Pemerintah [Tambah] SPHP Beras 1 Juta Ton Hadapi Kemarau",
  "deck": "Kementerian Pertanian menambah alokasi beras SPHP medium 1 juta ton dan menyetop impor beras pecah 380 ribu ton untuk menjaga pasokan selama kemarau panjang.",
  "date": "8 September 2026",
  "image": "assets/img/pemerintah-tambah-sphp-beras-1-juta-ton-hadapi-kemarau.jpg",
  "imageV": "mts6igeo",
  "tags": [
   "beras",
   "SPHP",
   "Kementerian Pertanian",
   "kemarau"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8125",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "kemnaker-kawal-hak-pekerja-di-balik-restrukturisasi-bumn",
  "category": "Ketenagakerjaan",
  "title": "Kemnaker Kawal Hak Pekerja di Balik Restrukturisasi [BUMN]",
  "deck": "Kemnaker menegaskan proses perampingan dan penggabungan bisnis BUMN harus tetap menjaga hak pekerja, mengacu pada Instruksi Presiden Nomor 7 Tahun 2026.",
  "date": "8 September 2026",
  "image": "assets/img/wawancara-kerja.jpg",
  "tags": [
   "BUMN",
   "Kemnaker",
   "hubungan industrial",
   "restrukturisasi"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/kemnaker-dukung-bumn-perkuat-tata-kelola-hubungan-industrial",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "pemerintah-perpanjang-bantuan-beras-hingga-desember",
  "category": "Makroekonomi",
  "title": "Pemerintah Perpanjang Bantuan Beras hingga [Desember]",
  "deck": "Pemerintah memperpanjang bantuan beras hingga Desember sambil memantau dampak ekonomi letusan sejumlah gunung berapi dan antisipasi El Nino.",
  "date": "8 September 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "bantuan beras",
   "El Nino",
   "erupsi gunung berapi",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7082/hadapi-el-nino-dan-dampak-erupsi-pemerintah-perkuat-perlindungan-masyarakat-dan-aktivitas-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pemerintah-siapkan-rekening-warga-lewat-bri-dan-bsi",
  "category": "Perbankan",
  "title": "Pemerintah Siapkan [Rekening] Warga Lewat BRI dan BSI",
  "deck": "Pemerintah menyiapkan rekening bank bagi warga lewat BRI dan BSI, dipadukan data Dukcapil dan QRIS, untuk memperluas akses layanan keuangan formal.",
  "date": "8 September 2026",
  "image": "assets/img/brankas-bank.jpg",
  "tags": [
   "inklusi keuangan",
   "QRIS",
   "BRI",
   "BSI"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7083/tingkatkan-literasi-dan-inklusi-keuangan-pemerintah-siapkan-layanan-rekening-dan-integrasi-qris-bagi-masyarakat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "asbi-panggil-rupslb-agendakan-pergantian-direksi",
  "category": "Aksi Korporasi",
  "title": "ASBI Panggil RUPSLB, Agendakan [Pergantian] Direksi",
  "deck": "Asuransi Bintang mengundang pemegang saham ke RUPSLB 30 September 2026 untuk membahas pergantian direksi, pelepasan aset, dan penyesuaian KBLI.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "RUPSLB",
   "Asuransi Bintang",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/31cb6dd8b7_5785362249.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ctbn-jadwalkan-rupslb-15-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "CTBN Jadwalkan RUPSLB [15 Oktober 2026]",
  "deck": "Citra Tubindo Tbk mengumumkan RUPS Luar Biasa pada 15 Oktober 2026 di Jakarta, dengan tanggal pencatatan pemegang saham 22 September 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CTBN",
   "RUPSLB",
   "Citra Tubindo",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0782447828_ff5793a253.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-selesaikan-tender-tahap-ii-dehk-kuasai-59-47-saham",
  "category": "Aksi Korporasi",
  "title": "EDGE Selesaikan Tender Tahap II, DEHK Kuasai [59,47%] Saham",
  "deck": "DEHK membeli 360.600 saham EDGE senilai Rp11.500 per saham pada tender tahap II, kepemilikannya naik jadi 59,47% menjelang rencana go private dan delisting EDGE.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "tender offer",
   "go private",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/59b7e20111_0066161b59.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bali-pengendali-tambah-saham-hak-suara-ke-59-82",
  "category": "Aksi Korporasi",
  "title": "BALI: Pengendali [Tambah] Saham, Hak Suara ke 59,82%",
  "deck": "PT Kharisma Cipta Towerindo, pengendali BALI, membeli 4,9 juta saham pada 7 September 2026 seharga Rp1.420 per lembar, menaikkan hak suaranya menjadi 59,82 persen.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BALI",
   "Bali Towerindo Sentra",
   "kepemilikan saham",
   "menara telekomunikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08092026-8568-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mgia01-piutang-tiket-rp1-06-triliun-belum-disetor-ke-eba",
  "category": "Aksi Korporasi",
  "title": "MGIA01: Piutang Tiket Rp1,06 Triliun Belum [Disetor] ke EBA",
  "deck": "Laporan bulanan KIK EBA Mandiri GIAA01 periode Agustus 2026 mencatat tunggakan penyerahan pendapatan tiket rute Timur Tengah sebesar Rp1,06 triliun, lebih besar dari pendapatan yang sudah diterima.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGIA01",
   "EBA",
   "pasar modal",
   "surat utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/36cf06686b_746778b752.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-kebut-tol-kataraja-progres-94-9-jelang-tenggat-oktober",
  "category": "Aksi Korporasi",
  "title": "PTPP Kebut Tol Kataraja, Progres [94,9%] Jelang Tenggat Oktober",
  "deck": "PTPP melaporkan progres pembangunan Tol Kataraja Seksi 1 mencapai 94,9% dengan sisa pekerjaan 5,077%, sementara uji pembebanan Jembatan Ramp 1 JC Sedyatmo sudah tuntas akhir Agustus.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "Tol Kataraja",
   "infrastruktur",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ebe9d4ca0_4bbb0845dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "blog-paparkan-ekspansi-jaringan-ke-130-titik-logistik",
  "category": "Aksi Korporasi",
  "title": "BLOG Paparkan Ekspansi [Jaringan] ke 130 Titik Logistik",
  "deck": "Materi public expose BLOG memaparkan jaringan logistik yang tumbuh ke 130 titik dan 16 gudang, sementara liabilitas naik 24 persen sepanjang semester I 2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLOG",
   "public expose",
   "logistik",
   "cold chain"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7f4f465f15_ddc00fb402.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-400-000-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 400.000 Saham Lagi",
  "deck": "Dewan Komisaris AKPI Henry Liem melepas 400.000 saham senilai Rp210 juta pada 7 September 2026, hak suaranya turun tipis menjadi 1,2528 persen.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Komisaris",
   "Kepemilikan Saham",
   "Argha Karya Prima"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-08092026-1916-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intd-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "INTD Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "BEI meminta INTD menjelaskan lonjakan volatilitas transaksi sahamnya. Perseroan menyatakan tidak mengetahui adanya informasi material maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTD",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1f9317d46d_674e51c540.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rigs-jawab-bursa-soal-volatilitas-klaim-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "RIGS Jawab Bursa soal [Volatilitas], Klaim Tak Ada Info Material",
  "deck": "Menanggapi permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, Rig Tenders Tbk menyatakan tidak ada informasi material dan pemegang saham utama belum berencana mengubah kepemilikannya.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RIGS",
   "Rig Tenders",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e233baf688_7f226d080b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-pemegang-sukuk-tolak-restrukturisasi-pos-indonesia",
  "category": "Aksi Korporasi",
  "title": "POST: Pemegang Sukuk Tolak [Restrukturisasi] Pos Indonesia",
  "deck": "Rapat pemegang Sukuk Ijarah Pos Indonesia menolak proposal restrukturisasi utang dan permintaan keringanan atas pelanggaran syarat keuangan pinjaman periode 2025-2026.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "sukuk",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8abc148e1f_29412f11e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cabai-rawit-merah-melonjak-ke-rp91-300-per-kg",
  "category": "Makroekonomi",
  "title": "Cabai Rawit Merah [Melonjak] ke Rp91.300 per Kg",
  "deck": "Harga cabai rawit merah naik 11,21 persen menjadi Rp91.300 per kilogram, memimpin kenaikan harga pangan nasional yang juga menyeret beras dan daging ayam, Selasa (8/9).",
  "date": "8 September 2026",
  "image": "assets/img/cabai-rawit-merah-melonjak-ke-rp91-300-per-kg.jpg",
  "imageV": "mts6ihpw",
  "tags": [
   "harga pangan",
   "cabai rawit",
   "pasar tradisional",
   "beras"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465631-harga-pangan-nasional-alami-kenaikan-cabai-rawit-merah-tembus-rp91300"
 },
 {
  "slug": "klbf-laba-turun-2-8-meski-penjualan-naik-14-di-semester-i",
  "category": "Aksi Korporasi",
  "title": "KLBF: [Laba] Turun 2,8% Meski Penjualan Naik 14% di Semester I",
  "deck": "Materi Public Expose Tahunan Kalbe Farma menunjukkan penjualan semester I 2026 naik 14% menjadi Rp19,5 triliun, tapi laba bersih turun 2,8% akibat tekanan margin.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "Kalbe Farma",
   "laporan keuangan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fbc6db9783_8b9c4e8404.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-tipis-ke-rp2-627-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Tipis ke Rp2.627.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp10.000 pada 8 September 2026, sementara harga buyback tertahan di Rp2.480.000 per gram.",
  "date": "8 September 2026",
  "image": "assets/img/harga-emas-antam-turun-tipis-ke-rp2-627-000-gram.jpg",
  "imageV": "mts7ss9q",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465632-turun-rp10000-harga-emas-antam-hari-ini-8-september-2026-jadi-rp2627000-per-gram"
 },
 {
  "slug": "clpi-jadwalkan-rupslb-pada-15-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "CLPI Jadwalkan [RUPSLB] pada 15 Oktober 2026",
  "deck": "Colorpak Indonesia mengumumkan rencana RUPSLB pada 15 Oktober 2026. Pemegang saham yang tercatat hingga 22 September 2026 berhak hadir dan memberi suara.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CLPI",
   "RUPSLB",
   "Colorpak Indonesia",
   "Corporate Action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a58bbbe47f_da55b8b82b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-rampungkan-akuisisi-nextier-nac-ngc-jadi-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "MGLV Rampungkan Akuisisi [Nextier], NAC-NGC Jadi Anak Usaha",
  "deck": "MGLV menandatangani akta pengambilalihan saham NAC dan NGC dari NDC pada 7 September 2026, merampungkan transaksi akuisisi yang sebelumnya sempat tertunda karena permintaan penjelasan OJK.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "akuisisi",
   "Nextier",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4be4aede13_5abbbe8b22.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-panggil-rupo-rupsi-usul-standstill-bayar-utang",
  "category": "Aksi Korporasi",
  "title": "POST Panggil RUPO & RUPSI, Usul [Standstill] Bayar Utang",
  "deck": "Pos Indonesia mengundang pemegang obligasi dan sukuk ke rapat 21 September 2026 untuk membahas penundaan pembayaran utang hingga akhir 2026 dan perpanjangan tenor hingga 2032.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "restrukturisasi utang",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6468377930_72aec221a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rigs-laba-bersih-anjlok-42-jadi-rp55-4-miliar-fy2026",
  "category": "Aksi Korporasi",
  "title": "RIGS: Laba Bersih [Anjlok] 42% Jadi Rp55,4 Miliar FY2026",
  "deck": "Laba bersih Rig Tenders turun 42 persen menjadi Rp55,35 miliar untuk tahun buku berakhir 30 Juni 2026, seiring pendapatan yang juga menyusut dari Rp365,9 miliar menjadi Rp291,1 miliar.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RIGS",
   "laporan keuangan tahunan",
   "laba bersih turun",
   "emiten pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260908091133-64265-0/FinancialStatement-2025-Tahunan-RIGS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nikl-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "NIKL Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan Pelat Timah Nusantara (NIKL) atas volatilitas transaksi sahamnya. Perusahaan membantah ada informasi atau rencana korporasi tersembunyi.",
  "date": "8 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NIKL",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/df479f1210_883f9bf0d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "het-pupuk-bersubsidi-turun-20-persen-aturan-baru-berlaku",
  "category": "BUMN",
  "title": "HET Pupuk Bersubsidi [Turun] 20 Persen, Aturan Baru Berlaku",
  "deck": "Pemerintah menurunkan harga eceran tertinggi pupuk bersubsidi 20 persen dan memperbarui aturan penyalurannya, sementara realisasi di Mojokerto sudah capai 76 persen dari alokasi tahun ini.",
  "date": "8 September 2026",
  "image": "assets/img/het-pupuk-bersubsidi-turun-20-persen-aturan-baru-berlaku.jpg",
  "imageV": "mtrssgj6",
  "tags": [
   "pupuk bersubsidi",
   "Pupuk Indonesia",
   "HET pupuk",
   "Mojokerto"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/881/pilar-tani-pupuk-indonesia-perkuat-penyaluran-pupuk-subsidi-di-mojokerto",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "kementan-perketat-aturan-penebusan-pupuk-bersubsidi",
  "category": "BUMN",
  "title": "Kementan [Perketat] Aturan Penebusan Pupuk Bersubsidi",
  "deck": "Aturan Kementan baru membatasi penebusan pupuk bersubsidi berkelompok maksimal 20 KTP, berlaku sejak 1 September 2026, untuk mencegah penyimpangan penyaluran ke petani.",
  "date": "8 September 2026",
  "image": "assets/img/kementan-perketat-aturan-penebusan-pupuk-bersubsidi.jpg",
  "imageV": "mtrssi57",
  "tags": [
   "pupuk bersubsidi",
   "Pupuk Indonesia",
   "Bangkalan",
   "Kementan"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/882/pupuk-indonesia-mengimbau-ppts-bangkalan-salurkan-pupuk-bersubsidi-sesuai-ketentuan",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "inspeksi-abk-kapal-ikan-diuji-coba-kkp-catat-21-kasus",
  "category": "Ketenagakerjaan",
  "title": "Inspeksi ABK Kapal Ikan Diuji Coba, KKP Catat [21] Kasus",
  "deck": "KKP bersama Kemenaker uji coba inspeksi ketenagakerjaan di kapal perikanan Pelabuhan Benoa, Bali, dan menemukan masalah pengupahan serta perekrutan ilegal ABK.",
  "date": "8 September 2026",
  "image": "assets/img/inspeksi-abk-kapal-ikan-diuji-coba-kkp-catat-21-kasus.jpg",
  "imageV": "mtrssk2s",
  "tags": [
   "ABK",
   "KKP",
   "ILO 188",
   "Ketenagakerjaan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-gelar-inspeksi-kapal-perikanan-sesuai-konvensi-ilo-188-untuk-lindungi-abk-8MV3.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "aturan-baru-izinkan-ekspor-lobster-budi-daya-50-gram",
  "category": "Industri",
  "title": "Aturan Baru [Izinkan] Ekspor Lobster Budi Daya 50 Gram",
  "deck": "Permen KP terbaru mengatur pembesaran lobster bertahap di dalam negeri dan membuka izin ekspor hasil budi daya minimal 50 gram, dengan kewajiban restocking dua persen.",
  "date": "8 September 2026",
  "image": "assets/img/aturan-baru-izinkan-ekspor-lobster-budi-daya-50-gram.jpg",
  "imageV": "mtrsslxe",
  "tags": [
   "Lobster",
   "KKP",
   "Ekspor Perikanan",
   "Lombok Timur"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-dorong-kemajuan-ekosistem-budi-daya-lobster-di-lombok-timur-9DWD.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "presiden-prabowo-buka-investasi-nuklir-di-forum-rusia",
  "category": "Global",
  "title": "Presiden Prabowo Buka Investasi [Nuklir] di Forum Rusia",
  "deck": "Presiden Prabowo menyatakan keterbukaan Indonesia terhadap investasi energi terbarukan hingga nuklir di Forum Ekonomi Timur Rusia; investasi Rusia ke Indonesia sejak 2021 tercatat US$726 juta.",
  "date": "8 September 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "investasi Rusia",
   "energi nuklir",
   "hilirisasi",
   "BKPM"
  ],
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/presiden-prabowo-tegaskan-arah-investasi-indonesia-hilirisasi-untuk-kesejahteraan-dan-investasi-teknologi-masa-depan",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "realisasi-investasi-hilirisasi-tembus-rp300-1-triliun",
  "category": "Industri",
  "title": "Realisasi Investasi [Hilirisasi] Tembus Rp300,1 Triliun",
  "deck": "Realisasi investasi sektor hilirisasi RI naik 6,9 persen menjadi Rp300,1 triliun pada semester I 2026, ditopang strategi perencanaan, kemudahan izin, dan insentif pajak.",
  "date": "8 September 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "hilirisasi",
   "investasi",
   "BKPM",
   "insentif pajak"
  ],
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/wamen-todotua-ungkap-tiga-strategi-jemput-investasi-dan-perkuat-hilirisasi",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "indonesia-tawarkan-32-proyek-infrastruktur-ke-investor-jepang",
  "category": "BUMN",
  "title": "Indonesia Tawarkan [32] Proyek Infrastruktur ke Investor Jepang",
  "deck": "Kemenko Perekonomian dan KBRI Tokyo menggelar forum bisnis yang menawarkan 32 proyek infrastruktur milik sembilan BUMN dan BUMD kepada puluhan investor Jepang.",
  "date": "8 September 2026",
  "image": "assets/img/truk-logistik-gudang.jpg",
  "tags": [
   "investasi",
   "Jepang",
   "infrastruktur",
   "BUMN"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7079/indonesia-japan-transportation-and-infrastructure-business-forum-and-business-matching-sebagai-upaya-peningkatan-investasi-dan-mendorong-pertumbuhan-ekonomi-indonesia",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "indonesia-irlandia-gelar-dialog-dagang-jelang-ieu-cepa",
  "category": "Global",
  "title": "Indonesia-Irlandia Gelar Dialog Dagang Jelang [IEU-CEPA]",
  "deck": "Kemenko Perekonomian dan Irlandia menggelar dialog strategis membahas kerja sama dagang dan investasi menjelang implementasi IEU-CEPA, ditutup penandatanganan nota kerja sama.",
  "date": "8 September 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "IEU-CEPA",
   "Indonesia-Irlandia",
   "Kemenko Perekonomian",
   "perdagangan bilateral"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7080/bersiap-untuk-implementasi-ieu-cepa-indonesia-dan-irlandia-gelar-dialog-strategis-untuk-perkuat-kerja-sama-ekonomi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "raja-laba-bersih-1h26-melonjak-88-persen-utang-menyusut",
  "category": "Aksi Korporasi",
  "title": "RAJA: Laba Bersih 1H26 [Melonjak] 88 Persen, Utang Menyusut",
  "deck": "Materi public expose RAJA memaparkan laba bersih semester I 2026 naik 88 persen jadi US$28,9 juta, ditopang harga minyak Blok Cepu dan proyek kompresor gas Sengkang.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAJA",
   "kinerja keuangan",
   "public expose",
   "LNG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1117d2b6b7_96d34495ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-paparkan-kinerja-1h26-roe-naik-ke-23-persen",
  "category": "Aksi Korporasi",
  "title": "ANTM Paparkan Kinerja 1H26, ROE [Naik] ke 23 Persen",
  "deck": "Materi public expose tahunan ANTM menunjukkan pendapatan, laba, dan ROE semester I 2026 naik, dividen Rp5 triliun, sementara rasio utang terhadap EBITDA tetap rendah di 0,21 kali.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "Antam",
   "MIND ID",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c836520141_ae09972d01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mine-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MINE Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, Sinar Terang Mandiri (MINE) menyatakan tidak ada informasi material maupun rencana korporasi yang memicu pergerakan harga.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINE",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/60365d3d0c_c9660ac9c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pltp-gunung-ungaran-dinilai-aman-asal-dikaji-matang",
  "category": "Energi",
  "title": "PLTP Gunung Ungaran Dinilai [Aman] Asal Dikaji Matang",
  "deck": "Pengamat kebijakan publik Agus Pambagio menilai rencana PLTP Gunung Ungaran tak perlu dikhawatirkan asal dikaji menyeluruh, termasuk soal kawasan cagar budaya di sekitarnya.",
  "date": "7 September 2026",
  "image": "assets/img/pltp-gunung-ungaran-dinilai-aman-asal-dikaji-matang.jpg",
  "imageV": "mtrms3al",
  "tags": [
   "pltp gunung ungaran",
   "energi bersih",
   "panas bumi",
   "agus pambagio"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465566-soal-pltp-gunung-ungaran-pengamat-yakinkan-tak-perlu-khawatir-energi-bersih-perlu-didorong-asal-dikaji-komperhensif"
 },
 {
  "slug": "snlk-jelaskan-ke-bursa-sebab-rugi-beruntun-3-tahun-phk-56",
  "category": "Aksi Korporasi",
  "title": "SNLK Jelaskan ke Bursa Sebab Rugi Beruntun 3 Tahun, [PHK] 56%",
  "deck": "Dalam tanggapan resmi ke bursa, SNLK membeberkan penyebab rugi tiga tahun beruntun, pemangkasan karyawan 56%, hingga kemenangan gugatan Rp12 miliar.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SNLK",
   "rugi bersih",
   "laporan keuangan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3b015878b0_a115651aa7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "utang-whoosh-bakal-ditanggung-smv-kemenkeu",
  "category": "BUMN",
  "title": "Utang Whoosh Bakal Ditanggung [SMV] Kemenkeu",
  "deck": "Kemenkeu menyiapkan perusahaan khusus untuk menanggung utang Kereta Cepat Whoosh setelah proyek diserahkan pertengahan September 2026, tanpa membebani kas negara.",
  "date": "7 September 2026",
  "image": "assets/img/utang-whoosh-bakal-ditanggung-smv-kemenkeu.jpg",
  "imageV": "mtrms3nb",
  "tags": [
   "Whoosh",
   "Kemenkeu",
   "SMV",
   "utang BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465563-purbaya-siapkan-jurus-baru-bereskan-utang-whoosh-smv-kemenkeu-bakal-jadi-penanggung"
 },
 {
  "slug": "ojk-minta-blokir-38-375-rekening-judi-online",
  "category": "Perbankan",
  "title": "OJK Minta Blokir [38.375] Rekening Judi Online",
  "deck": "OJK meminta perbankan memeriksa atau memblokir 38.375 rekening terindikasi judi online hingga Juli 2026, naik dari 36.735 rekening sebelumnya.",
  "date": "7 September 2026",
  "image": "assets/img/ojk-minta-blokir-38-375-rekening-judi-online.jpg",
  "imageV": "mtralauj",
  "tags": [
   "ojk",
   "judi online",
   "perbankan",
   "pemblokiran rekening"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465547-ojk-perketat-rekening-judi-online-38375-rekening-diminta-diblokir-hingga-juli-2026"
 },
 {
  "slug": "medc-koreksi-laporan-dana-obligasi-rp990-m-belum-terpakai",
  "category": "Aksi Korporasi",
  "title": "MEDC Koreksi Laporan, Dana Obligasi Rp990 M [Belum Terpakai]",
  "deck": "Dana bersih Rp989,93 miliar dari obligasi MEDC senilai Rp1 triliun belum digunakan hingga akhir Juni 2026, masih tersimpan di bank menunggu pelunasan obligasi jatuh tempo semester II 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "obligasi",
   "penggunaan dana",
   "Medco Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f161fbf80d_de13f1eff8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arma-revisi-realisasi-dana-sukuk-rp1-68-triliun-ke-tambang",
  "category": "Aksi Korporasi",
  "title": "ARMA Revisi Realisasi Dana [Sukuk] Rp1,68 Triliun ke Tambang",
  "deck": "PT Armadian Tritunggal merevisi laporan realisasi dana sukuk Rp1,82 triliun per 30 Juni 2026, sisa dana Rp140,74 miliar ditempatkan di rekening bank afiliasi.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARMA",
   "sukuk mudharabah",
   "batubara",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8ebccdcc9c_afb5027339.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-komisaris-jual-6-5-juta-saham-hak-suara-nyaris-tetap",
  "category": "Aksi Korporasi",
  "title": "MEDS: Komisaris [Jual] 6,5 Juta Saham, Hak Suara Nyaris Tetap",
  "deck": "Komisaris Hetzer Medical Indonesia, Jemmy Kurniawan, melepas 6,5 juta saham pada 4 September 2026, sekitar 0,78 persen dari kepemilikannya, hak suara turun tipis ke 53,04 persen.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "Hetzer Medical Indonesia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-9218-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sphp-berganti-nama-jadi-beras-kita-meluncur-20-oktober",
  "category": "Makroekonomi",
  "title": "SPHP Berganti Nama Jadi [Beras Kita], Meluncur 20 Oktober",
  "deck": "Pemerintah mengganti nama beras SPHP menjadi Beras Kita Medium, mulai dipasarkan 20 Oktober 2026, sejalan dengan Minyakita dan ManisKita.",
  "date": "7 September 2026",
  "image": "assets/img/sphp-berganti-nama-jadi-beras-kita-meluncur-20-oktober.jpg",
  "imageV": "mtralbax",
  "tags": [
   "Beras Kita",
   "SPHP",
   "Bulog",
   "Zulkifli Hasan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465546-beras-sphp-punya-nama-baru-pemerintah-luncurkan-beras-kita-20-oktober-2026"
 },
 {
  "slug": "foru-jawab-bursa-rugi-melonjak-902-pendapatan-anjlok-57",
  "category": "Aksi Korporasi",
  "title": "FORU Jawab Bursa: [Rugi] Melonjak 902%, Pendapatan Anjlok 57%",
  "deck": "Fortune Indonesia menjelaskan ke BEI bahwa pendapatan semester I 2026 anjlok 57,27% dan rugi komprehensif melonjak jadi Rp7,38 miliar, sementara defisit membengkak ke Rp51,30 miliar.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "Fortune Indonesia",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/84845aa858_c8569d291d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikpm-dana-ipo-terserap-96-pendapatan-meleset-jauh-dari-target",
  "category": "Aksi Korporasi",
  "title": "IKPM: Dana IPO Terserap 96%, Pendapatan [Meleset] Jauh dari Target",
  "deck": "Ikapharmindo menjelaskan ke BEI bahwa penyerapan dana IPO untuk mesin baru 76 persen, sementara pendapatan semester I 2026 cuma sepertiga dari target setahun penuh.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKPM",
   "Ikapharmindo Putramas",
   "dana IPO",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5044f8afeb_2ff839c1a8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-cetak-laba-rp2-4-triliun-di-semester-i-2026-naik-40-8",
  "category": "Aksi Korporasi",
  "title": "BBTN Cetak Laba [Rp2,4 Triliun] di Semester I 2026, Naik 40,8%",
  "deck": "Materi public expose BTN mengungkap laba bersih semester I 2026 melonjak 40,8 persen, kredit tumbuh 11,2 persen, dan akuisisi portofolio kredit dari SMBC Indonesia senilai puluhan triliun rupiah.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "perbankan",
   "kinerja keuangan",
   "akuisisi kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/80b948d9a8_5f5040226b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "snlk-ungkap-ke-bursa-rugi-melonjak-182-sepanjang-2025",
  "category": "Aksi Korporasi",
  "title": "SNLK Ungkap ke Bursa, [Rugi] Melonjak 182% Sepanjang 2025",
  "deck": "SNLK menanggapi permintaan penjelasan BEI atas laporan keuangan 2025, mengonfirmasi rugi naik 182% jadi Rp4,45 miliar akibat pendapatan turun 12,9% dan karyawan dipangkas hingga 56%.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SNLK",
   "laporan keuangan",
   "Bursa Efek Indonesia",
   "perhotelan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bd0d28c636_6f26e75a4f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgns-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "DGNS Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Merespons surat Bursa Efek Indonesia soal lonjakan transaksi sahamnya, Diagnos Laboratorium Utama menyatakan tidak ada info material maupun rencana aksi korporasi yang melatarinya.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGNS",
   "Diagnos Laboratorium Utama",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7aac22f735_da527c29b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bea-cukai-sita-barang-rp11-25-triliun-hingga-agustus-2026",
  "category": "Makroekonomi",
  "title": "Bea Cukai Sita Barang [Rp11,25 Triliun] hingga Agustus 2026",
  "deck": "DJBC mencatat 20.643 penindakan senilai Rp11,25 triliun sepanjang Januari-Agustus 2026, dengan rokok ilegal sebagai kasus terbanyak.",
  "date": "7 September 2026",
  "image": "assets/img/bea-cukai-sita-barang-rp11-25-triliun-hingga-agustus-2026.jpg",
  "imageV": "mtralbq5",
  "tags": [
   "bea cukai",
   "rokok ilegal",
   "DJBC",
   "penindakan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465542-bea-cukai-sita-barang-rp1125-triliun-hingga-agustus-2026-rokok-ilegal-mendominasi"
 },
 {
  "slug": "tins-catat-laba-melonjak-805-jelang-public-expose-10-sep",
  "category": "Aksi Korporasi",
  "title": "TINS Catat Laba [Melonjak] 805% Jelang Public Expose 10 Sep",
  "deck": "Materi public expose PT Timah menunjukkan laba bersih semester I 2026 melonjak ke Rp2,72 triliun, didorong kenaikan harga timah dan volume produksi, jelang paparan publik 10 September.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TINS",
   "PT Timah",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9f6ff17497_fa06ded1f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-siapkan-dana-rp2-4-triliun-lunasi-obligasi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BMRI siapkan dana [Rp2,4 triliun] lunasi obligasi jatuh tempo",
  "deck": "Bank Mandiri menyatakan telah menyiapkan dana Rp2,4 triliun untuk melunasi pokok Obligasi Berkelanjutan I Tahap I 2016 Seri C yang jatuh tempo 30 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Bank Mandiri",
   "obligasi",
   "kesiapan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b625859af3_b0d3111781.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-tunda-bayar-bunga-obligasi-iii-rp10-29-miliar",
  "category": "Aksi Korporasi",
  "title": "ADCP Tunda Bayar [Bunga] Obligasi III Rp10,29 Miliar",
  "deck": "PT Adhi Commuter Properti Tbk belum bisa membayar bunga Obligasi III senilai Rp10,29 miliar yang jatuh tempo 8 September 2026 akibat keterbatasan likuiditas.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "obligasi",
   "gagal bayar",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a35027c061_09ac4b3cfd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "imjs-jawab-bursa-soal-volatilitas-ungkap-anak-usaha-baru",
  "category": "Aksi Korporasi",
  "title": "IMJS Jawab Bursa soal Volatilitas, Ungkap [Anak Usaha] Baru",
  "deck": "IMJS menjawab permintaan penjelasan Bursa Efek Indonesia atas lonjakan transaksi sahamnya, dan menyebut pendirian anak usaha baru sebagai pemicu keterbukaan informasi terakhir.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMJS",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3ddb8c5654_4b708e8bc6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-jadi-co-host-cismef-2026-di-china",
  "category": "UMKM",
  "title": "Indonesia Jadi [Co-host] CISMEF 2026 di China",
  "deck": "Indonesia berpartisipasi sebagai Co-host Country dalam pameran UMKM CISMEF 2026 di Guangzhou untuk membuka akses pasar global bagi pelaku usaha kecil dan menengah.",
  "date": "7 September 2026",
  "image": "assets/img/indonesia-jadi-co-host-cismef-2026-di-china.jpg",
  "imageV": "mtralc9h",
  "tags": [
   "cismef 2026",
   "umkm",
   "indonesia china",
   "paviliun indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465528-perkuat-akses-umkm-ke-pasar-global-indonesia-jadi-co-host-country-cismef-2026-china"
 },
 {
  "slug": "hdfa-paparkan-kinerja-2026-ekuitas-masih-tertekan",
  "category": "Aksi Korporasi",
  "title": "HDFA Paparkan Kinerja 2026, Ekuitas Masih [Tertekan]",
  "deck": "Dalam materi Public Expose Tahunan ke bursa, Radana Bhaskara Finance (HDFA) membeberkan rincian kinerja semester I 2026 dan strategi tujuh poin untuk sisa tahun ini.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HDFA",
   "Radana Bhaskara Finance",
   "Public Expose",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7e36a33972_d001a72ef8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "imas-bantah-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "IMAS Bantah Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Menjawab permintaan BEI soal volatilitas transaksi sahamnya, Indomobil Sukses Internasional menyatakan tak ada informasi material tersembunyi dan tak ada aksi korporasi dalam tiga bulan ke depan.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMAS",
   "Indomobil Sukses Internasional",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ed4f7164b_27139f6951.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-bukukan-rugi-rp259-5-miliar-pln-cairkan-bank-garansi",
  "category": "Aksi Korporasi",
  "title": "TGRA Bukukan Rugi Rp259,5 Miliar, PLN Cairkan [Bank Garansi]",
  "deck": "Laporan keuangan tahunan TGRA mencatat rugi Rp259,52 miliar dan ekuitas ambles 83,45 persen, dipicu penurunan nilai aset proyek listrik dan klaim bank garansi oleh PT PLN akibat proyek yang molor.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "laporan keuangan tahunan",
   "going concern",
   "PLN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260907173118-64345-0/FinancialStatement-2025-Tahunan-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibst-partisipasi-vto-iforte-tembus-76-diperpanjang-ke-okt",
  "category": "Aksi Korporasi",
  "title": "IBST: Partisipasi [VTO] Iforte Tembus 76%, Diperpanjang ke Okt",
  "deck": "Iforte perpanjang lagi masa tender sukarela saham IBST hingga 2 Oktober 2026, sembari melaporkan hasil sementara: 76 persen saham publik sudah ikut serta.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBST",
   "tender offer",
   "Iforte",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/308c2b125a_88e4464886.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-kepemilikan-morgan-stanley-naik-ke-7-6-persen",
  "category": "Aksi Korporasi",
  "title": "GOTO: [Kepemilikan] Morgan Stanley Naik ke 7,6 Persen",
  "deck": "Morgan Stanley and Co International PLC menambah kepemilikan saham GOTO lewat transaksi repo dan pembelian, hak suaranya naik dari 5,72 persen menjadi 7,60 persen.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "kepemilikan saham",
   "Morgan Stanley",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-9537-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-turun-0-25-sektor-keuangan-paling-tertekan",
  "category": "Pasar Modal",
  "title": "IHSG [Turun] 0,25%, Sektor Keuangan Paling Tertekan",
  "deck": "IHSG ditutup melemah 16,80 poin ke 6.619,67 pada Senin, tertekan sektor keuangan yang turun 0,76 persen, sementara sektor perindustrian justru menguat 1,25 persen.",
  "date": "7 September 2026",
  "image": "assets/img/ihsg-turun-0-25-sektor-keuangan-paling-tertekan.jpg",
  "imageV": "mtralcpu",
  "tags": [
   "IHSG",
   "sektor keuangan",
   "bursa efek indonesia",
   "saham"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465511-ihsg-tertekan-025-sektor-keuangan-jadi-beban-utama-perdagangan-hari-ini"
 },
 {
  "slug": "pack-bantah-rumor-rights-issue-ungkap-sumber-lonjakan-laba",
  "category": "Aksi Korporasi",
  "title": "PACK Bantah Rumor [Rights Issue], Ungkap Sumber Lonjakan Laba",
  "deck": "PACK menjelaskan ke Bursa bahwa lonjakan laba bersih 1.431,5% pada semester I 2026 berasal dari bagian laba anak usaha tambang, bukan bisnis inti, sembari membantah rumor rencana rights issue.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "kinerja keuangan",
   "rights issue",
   "entitas asosiasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1789b9c052_b5b95457c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-waran-bmri-disesuaikan-usai-dividen-rp66-per-saham",
  "category": "Aksi Korporasi",
  "title": "DR: Waran BMRI Disesuaikan usai [Dividen] Rp66 per Saham",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur BMRI menyusul rencana dividen tunai Rp6,16 triliun, dibayar 2 Oktober 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "BMRI",
   "Waran Terstruktur",
   "Dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3d770db69f_c45527ab8a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnbs-raih-peringkat-idaa-dari-pefindo-outlook-stabil",
  "category": "Aksi Korporasi",
  "title": "PNBS Raih Peringkat [idAA-] dari Pefindo, Outlook Stabil",
  "deck": "Pefindo menetapkan peringkat idAA- dengan outlook stabil bagi Bank Panin Dubai Syariah untuk periode September 2026 hingga September 2027, berdasarkan laporan keuangan terbaru bank.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNBS",
   "Pefindo",
   "peringkat kredit",
   "bank syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b5bedd24ad_fef6a8f4e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-laba-semester-i-turun-19-buyback-saham-digenjot-rp8-t",
  "category": "Aksi Korporasi",
  "title": "ASII: Laba Semester I Turun 19%, [Buyback] Saham Digenjot Rp8 T",
  "deck": "Materi public expose ASII: laba bersih semester I 2026 turun 19% jadi Rp12,5 triliun, tertekan pelemahan tambang, sembari lanjutkan buyback saham hingga Rp8 triliun.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "Astra International",
   "laba bersih",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5a376b9f5d_fb1792acac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-rombak-bisnis-pecah-jadi-lima-segmen-usaha",
  "category": "BUMN",
  "title": "Telkom Rombak Bisnis, Pecah Jadi [Lima] Segmen Usaha",
  "deck": "Telkom memecah bisnisnya menjadi lima segmen sebagai bagian transformasi TLKM 30, menuju struktur holding yang lebih transparan bagi investor.",
  "date": "7 September 2026",
  "image": "assets/img/telkom-rombak-bisnis-pecah-jadi-lima-segmen-usaha.jpg",
  "imageV": "mtrald4l",
  "tags": [
   "Telkom",
   "TLKM 30",
   "restrukturisasi bisnis",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465503-jaga-momentum-pertumbuhan-ini-strategi-telkom-tingkatkan-nilai-tambah-dari-bisnis-infrastruktur-digital"
 },
 {
  "slug": "goto-jadwalkan-rupslb-pada-14-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "GOTO Jadwalkan [RUPSLB] pada 14 Oktober 2026",
  "deck": "GoTo Gojek Tokopedia akan menggelar RUPSLB pada 14 Oktober 2026, dengan pemegang saham yang tercatat per 21 September 2026 berhak hadir dan memberi suara.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "RUPSLB",
   "GoTo Gojek Tokopedia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/003351c5b2_eac6908a6e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemenkeu-ajukan-anggaran-rp49-80-triliun-untuk-2027",
  "category": "Makroekonomi",
  "title": "Kemenkeu Ajukan Anggaran [Rp49,80 Triliun] untuk 2027",
  "deck": "Menkeu Purbaya Yudhi Sadewa mengajukan pagu anggaran Kementerian Keuangan tahun 2027 sebesar Rp49,80 triliun ke Komisi XI DPR RI.",
  "date": "7 September 2026",
  "image": "assets/img/kemenkeu-ajukan-anggaran-rp49-80-triliun-untuk-2027.jpg",
  "imageV": "mtraldme",
  "tags": [
   "Kemenkeu",
   "APBN 2027",
   "Purbaya Yudhi Sadewa",
   "Komisi XI DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465500-purbaya-minta-anggaran-rp4980-triliun-untuk-kemenkeu-tahun-2027"
 },
 {
  "slug": "buka-kreatif-media-karya-tambah-kepemilikan-ke-45-68",
  "category": "Aksi Korporasi",
  "title": "BUKA: Kreatif Media Karya Tambah [Kepemilikan] ke 45,68%",
  "deck": "Kreatif Media Karya membeli 803,3 juta saham Bukalapak senilai sekitar Rp101,2 miliar pada 4 September 2026, menaikkan hak suaranya dari 44,90% menjadi 45,68%.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKA",
   "Bukalapak",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-8071-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smfp-siapkan-dana-pelunasan-obligasi-rp260-miliar",
  "category": "Aksi Korporasi",
  "title": "SMFP Siapkan Dana [Pelunasan] Obligasi Rp260 Miliar",
  "deck": "SMF menyiapkan dana Rp256 miliar plus bunga Rp4,048 miliar dalam bentuk deposito untuk melunasi obligasi SMFP07BCN2 yang jatuh tempo 20 Oktober 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMFP",
   "obligasi",
   "SMF",
   "pelunasan obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/97f0c2a79c_2326a4b68c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-terima-30-328-aduan-keuangan-ilegal-hingga-agustus-2026",
  "category": "Perbankan",
  "title": "OJK Terima [30.328] Aduan Keuangan Ilegal hingga Agustus 2026",
  "deck": "OJK mencatat 30.328 aduan entitas keuangan ilegal hingga Agustus 2026, sementara IASC menerima 668.441 laporan penipuan dengan kerugian korban Rp206 miliar sejak beroperasi November 2024.",
  "date": "7 September 2026",
  "image": "assets/img/ojk-terima-30-328-aduan-keuangan-ilegal-hingga-agustus-2026.jpg",
  "imageV": "mtralelm",
  "tags": [
   "OJK",
   "keuangan ilegal",
   "pinjol ilegal",
   "IASC"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465488-aduan-keuangan-ilegal-membeludak-ojk-catat-30328-laporan-hingga-agustus-2026"
 },
 {
  "slug": "rlco-direksi-tambah-saham-hak-suara-naik-ke-6-57",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi [Tambah] Saham, Hak Suara Naik ke 6,57%",
  "deck": "Direksi RLCO menambah 6,67 juta saham senilai sekitar Rp10 miliar, menaikkan hak suara dari 6,36% menjadi 6,57%.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-4982-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-soroti-sistem-desil-yang-hambat-akses-kip-kuliah",
  "category": "Makroekonomi",
  "title": "DPR Soroti Sistem [Desil] yang Hambat Akses KIP Kuliah",
  "deck": "Anggota Komisi X DPR Bonnie Triyana menilai sistem desil menyulitkan mahasiswa miskin dapat KIP Kuliah, mencontohkan kasus di Unpad.",
  "date": "7 September 2026",
  "image": "assets/img/dpr-soroti-sistem-desil-yang-hambat-akses-kip-kuliah.jpg",
  "imageV": "mtralf0l",
  "tags": [
   "dpr",
   "kip kuliah",
   "desil",
   "bonnie triyana"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465494-dpr-cuma-di-indonesia-orang-miskin-pakai-kasta-miskin-1-miskin-2"
 },
 {
  "slug": "aces-laba-bersih-1h26-naik-33-jadi-rp390-miliar-kinerja",
  "category": "Aksi Korporasi",
  "title": "ACES: Laba Bersih 1H26 Naik 33% jadi Rp390 Miliar [Kinerja]",
  "deck": "Materi public expose tahunan AHI menunjukkan penjualan semester I 2026 naik 6,3% dan laba bersih melonjak 33,3% menjadi Rp390 miliar, dengan posisi kas bersih terjaga.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACES",
   "AHI",
   "ritel",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cd9bd3ac8d_e8fd045b33.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bkdp-keluar-dari-pemantauan-khusus-bei-per-8-september-2026",
  "category": "Aksi Korporasi",
  "title": "BKDP [Keluar] dari Pemantauan Khusus BEI per 8 September 2026",
  "deck": "Bursa mencabut status pemantauan khusus saham Bukit Darmo Property (BKDP) mulai 8 September 2026, setelah pemicu suspensi perdagangan yang dialaminya dinyatakan sudah tidak berlaku.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKDP",
   "Bursa Efek Indonesia",
   "Pemantauan Khusus",
   "Bukit Darmo Property"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ef7d49d620_8d13a83e94.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-pindah-ke-papan-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "MKNT Pindah ke [Papan Pemantauan Khusus] BEI",
  "deck": "BEI memindahkan saham MKNT dari Papan Pengembangan ke Papan Pemantauan Khusus mulai 8 September 2026 akibat harga rendah dan ekuitas negatif.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "Papan Pemantauan Khusus",
   "BEI",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2425f6d706_380a7adb57.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ucid-jadwalkan-rupslb-14-oktober-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "UCID Jadwalkan [RUPSLB] 14 Oktober, Agenda Belum Diumumkan",
  "deck": "Uni-Charm Indonesia mengumumkan rencana RUPSLB pada 14 Oktober 2026. Tenggat pengajuan usulan agenda oleh pemegang saham jatuh pada 15 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UCID",
   "RUPSLB",
   "Uni-Charm Indonesia",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7eb112c652_86008b2322.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obligasi-bslt-rp750-miliar-resmi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "Obligasi BSLT Rp750 Miliar Resmi [Jatuh Tempo]",
  "deck": "Obligasi Berkelanjutan I Bank SulutGo seri BSLT01CN1 senilai Rp750 miliar jatuh tempo dan didelisting dari BEI mulai 7 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSLT",
   "obligasi",
   "jatuh tempo",
   "Bank SulutGo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/867087eb9c_86d9840379.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arto-laba-bank-jago-melonjak-49-ke-rp189-miliar",
  "category": "Aksi Korporasi",
  "title": "ARTO: Laba Bank Jago [Melonjak] 49% ke Rp189 Miliar",
  "deck": "Materi public expose tahunan Bank Jago menunjukkan laba bersih semester I 2026 naik 49 persen menjadi Rp189 miliar, ditopang pertumbuhan kredit dan dana pihak ketiga.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTO",
   "Bank Jago",
   "Public Expose",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a9a2fb6a80_66a60109fb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pltm-pastikan-dana-pelunasan-obligasi-rp106-miliar-siap",
  "category": "Aksi Korporasi",
  "title": "PLTM Pastikan Dana Pelunasan Obligasi [Rp106 Miliar] Siap",
  "deck": "PLTM menyatakan dana Rp106 miliar untuk pelunasan Obligasi II dan Sukuk Ijarah II Seri B, yang jatuh tempo 8 September 2026, sudah tersedia sejak 6 September 2026 dari kas internal.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLTM",
   "obligasi",
   "sukuk",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/864528735d_60f25d8849.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psab-bagi-dividen-interim-rp30-saham-cair-29-september-2026",
  "category": "Aksi Korporasi",
  "title": "PSAB Bagi [Dividen] Interim Rp30/Saham, Cair 29 September 2026",
  "deck": "J Resources Asia Pasifik (PSAB) akan membagikan dividen interim Rp793,8 miliar atau Rp30 per saham untuk tahun buku 2026, dibayar 29 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "dividen interim",
   "J Resources Asia Pasifik",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e159a6826f_023d3aae5f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-jawab-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PIPA Jawab Bursa soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Oxala Energy International menjawab permintaan penjelasan BEI atas volatilitas transaksi saham PIPA, memastikan tidak ada fakta material baru selain yang sudah diungkap 19 dan 26 Agustus 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "Bursa Efek Indonesia",
   "keterbukaan informasi",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/842ebdafa4_f8af4eb467.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tugu-panggil-rupslb-ubah-skema-pemisahan-unit-syariah-ke-bpui",
  "category": "Aksi Korporasi",
  "title": "TUGU Panggil RUPSLB, Ubah Skema [Pemisahan] Unit Syariah ke BPUI",
  "deck": "RUPSLB TUGU pada 29 September 2026 membahas pengangkatan komisaris independen dan pengalihan Unit Usaha Syariah ke perusahaan asuransi syariah lain, bagian konsolidasi asuransi BUMN oleh BPUI.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TUGU",
   "RUPSLB",
   "unit syariah",
   "Danantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b2d4954302_496fd28043.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obligasi-dan-sukuk-apai-rp281-miliar-resmi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "Obligasi dan Sukuk APAI Rp281 Miliar Resmi [Jatuh Tempo]",
  "deck": "Obligasi dan sukuk ijarah APAI senilai total Rp281 miliar jatuh tempo 8 September 2026 dan otomatis didelisting dari Bursa Efek Indonesia.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APAI",
   "obligasi",
   "sukuk ijarah",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0ac35d5b8d_3993ed1aed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ggrm-catat-laba-rp2-97-triliun-semester-i-2026-utang-bank-lunas",
  "category": "Aksi Korporasi",
  "title": "GGRM catat laba [Rp2,97 triliun] semester I 2026, utang bank lunas",
  "deck": "Materi public expose tahunan GGRM menunjukkan laba bersih semester I 2026 melonjak ke Rp2,97 triliun meski penjualan turun 7,2 persen, utang bank jangka pendek lunas total.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GGRM",
   "Gudang Garam",
   "laporan keuangan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/17943d18c3_ba843c446f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-direksi-tri-hartono-beli-350-000-saham-rp58-lembar",
  "category": "Aksi Korporasi",
  "title": "GMFI: Direksi Tri Hartono Beli [350.000] Saham Rp58/Lembar",
  "deck": "Direksi GMFI Tri Hartono membeli 350.000 saham perseroan seharga Rp58 per lembar pada 24 Agustus 2026 untuk portofolio investasi pribadi.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "kepemilikan saham",
   "direksi",
   "Garuda Maintenance Facility"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-1844-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inpp-cgs-international-lepas-seluruh-saham-hak-suara-ke-nol",
  "category": "Aksi Korporasi",
  "title": "INPP: CGS International [lepas] seluruh saham, hak suara ke nol",
  "deck": "CGS International Securities Singapore Pte Ltd melepas seluruh 872,3 juta saham INPP yang dimilikinya, memutus hak suara dari 7,80 persen menjadi nol per transaksi 2 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "kepemilikan saham",
   "CGS International",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-7898-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpix-jelaskan-lonjakan-saham-14-56-ke-bursa-ungkap-akuisisi-mca",
  "category": "Aksi Korporasi",
  "title": "MPIX Jelaskan [Lonjakan] Saham 14,56% ke Bursa, Ungkap Akuisisi MCA",
  "deck": "Bursa minta MPIX jelaskan lonjakan volume dan harga saham 14,56% pada 28 Agustus 2026; Perseroan sebut tak ada informasi material baru.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPIX",
   "volatilitas saham",
   "MPStore",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/739e68b7de_d1e6e956d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-waran-terstruktur-usai-dividen-bmri-rp66-saham",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan [Waran Terstruktur] Usai Dividen BMRI Rp66/Saham",
  "deck": "PT Korea Investment and Sekuritas Indonesia mengumumkan rencana penyesuaian rasio dan harga pelaksanaan dua waran terstruktur BMRI menyusul dividen tunai Rp66 per saham dari Bank Mandiri.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "BMRI",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/68bacceab4_7fe7fbafd9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekad-fujian-youyi-bidik-51-saham-geser-eip-dari-pengendali",
  "category": "Aksi Korporasi",
  "title": "EKAD: Fujian Youyi Bidik [51%] Saham, Geser EIP dari Pengendali",
  "deck": "Materi Public Expose EKAD mengungkap rencana Fujian Youyi Adhesive Tape asal China mengambil 51 persen saham dari pengendali EIP, harga masih dinegosiasikan hingga akhir Desember 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EKAD",
   "akuisisi",
   "Fujian Youyi",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/562b2dbba7_bfd11e2f36.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-ebitda-naik-38-jadi-us-21-3-juta-di-semester-i",
  "category": "Aksi Korporasi",
  "title": "RATU: [EBITDA] Naik 38% Jadi US$21,3 Juta di Semester I",
  "deck": "Paparan publik tahunan RATU mengungkap EBITDA semester I 2026 naik 38 persen menjadi US$21,28 juta, didorong kenaikan harga minyak, di tengah tantangan produksi Blok Cepu dan Jabung.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "migas",
   "EBITDA",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8ead122731_a21bc6ccb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-umumkan-jadwal-dividen-interim-rp66-per-saham",
  "category": "Aksi Korporasi",
  "title": "BMRI umumkan [jadwal] dividen interim Rp66 per saham",
  "deck": "Bank Mandiri menetapkan 17 September 2026 sebagai batas pencatatan pemegang saham berhak dividen interim Rp66 per saham, dengan pembayaran pada 2 Oktober 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "dividen",
   "Bank Mandiri",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/807cf59a65_001111b5f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-siapkan-rp361-48-miliar-bayar-obligasi-jatuh-tempo-obligasi",
  "category": "Aksi Korporasi",
  "title": "TPIA Siapkan Rp361,48 Miliar Bayar Obligasi Jatuh Tempo [Obligasi]",
  "deck": "Chandra Asri Pacific (TPIA) menyatakan kesiapan dana Rp361,48 miliar untuk melunasi pokok Obligasi Berkelanjutan IV Tahap III Seri A yang jatuh tempo 27 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "Obligasi",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dc414fc05e_97627382e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uji-lab-sebut-90-persen-beras-fortifikasi-melanggar",
  "category": "Industri",
  "title": "Uji Lab Sebut 90 Persen Beras Fortifikasi [Melanggar]",
  "deck": "Kementerian Pertanian menemukan sekitar 90 persen sampel beras berlabel fortifikasi tak sesuai klaim gizinya, dengan selisih harga capai Rp22.000 per kilogram dari beras biasa.",
  "date": "7 September 2026",
  "image": "assets/img/uji-lab-sebut-90-persen-beras-fortifikasi-melanggar.jpg",
  "imageV": "mtqurstx",
  "tags": [
   "beras fortifikasi",
   "Kementerian Pertanian",
   "harga pangan",
   "perlindungan konsumen"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8122",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "60-persen-angkatan-kerja-ri-berada-di-sektor-informal",
  "category": "Ketenagakerjaan",
  "title": "60 Persen Angkatan Kerja RI Berada di Sektor [Informal]",
  "deck": "Menaker menyebut 60 persen dari 155 juta angkatan kerja RI bekerja di sektor informal, sementara literasi dana pensiun baru 22 persen menurut OJK.",
  "date": "7 September 2026",
  "image": "assets/img/bursa-kerja-antre.jpg",
  "tags": [
   "dana pensiun",
   "sektor informal",
   "OJK",
   "Kemnaker"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/menaker-60-persen-angkatan-kerja-bekerja-di-sektor-informal-perlindungan-hari-tua-jadi-perhatian",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "ekspor-pet-food-ri-tumbuh-pangsa-pasar-global-cuma-0-03",
  "category": "Industri",
  "title": "Ekspor Pet Food RI Tumbuh, Pangsa Pasar Global Cuma [0,03]%",
  "deck": "Ekspor pakan hewan peliharaan Indonesia tumbuh 31,98 persen dalam lima tahun terakhir, namun pangsa pasar globalnya baru 0,03 persen dan berada di peringkat ke-59 dunia.",
  "date": "7 September 2026",
  "image": "assets/img/ekspor-pet-food-ri-tumbuh-pangsa-pasar-global-cuma-0-03.jpg",
  "imageV": "mtqurvvc",
  "tags": [
   "pakan hewan peliharaan",
   "ekspor",
   "Kemendag",
   "IIPE 2026"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pacu-pet-food-lokal-untuk-kuasai-pasar-domestik-mendag-busan-ajak-produsen-terus-tingkatkan-daya-saing",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "cadangan-devisa-ri-naik-jadi-us-146-5-miliar-agustus-2026",
  "category": "Moneter",
  "title": "Cadangan Devisa RI [Naik] jadi US$146,5 Miliar Agustus 2026",
  "deck": "Cadangan devisa Indonesia naik menjadi US$146,5 miliar pada akhir Agustus 2026, dari US$145,3 miliar sebulan sebelumnya, menurut Bank Indonesia.",
  "date": "7 September 2026",
  "image": "assets/img/cadangan-devisa-ri-naik-jadi-us-146-5-miliar-agustus-2026.jpg",
  "imageV": "mtqus2bb",
  "tags": [
   "cadangan devisa",
   "Bank Indonesia",
   "rupiah",
   "neraca pembayaran"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pertumbuhan-uang-primer-bi-melambat-ke-16-3-agustus",
  "category": "Moneter",
  "title": "Pertumbuhan Uang Primer BI [Melambat] ke 16,3% Agustus",
  "deck": "Bank Indonesia mencatat pertumbuhan uang primer adjusted melambat ke 16,3 persen tahunan pada Agustus 2026, dari 17,1 persen bulan sebelumnya, dengan total Rp2.281,5 triliun.",
  "date": "7 September 2026",
  "image": "assets/img/pertumbuhan-uang-primer-bi-melambat-ke-16-3-agustus.jpg",
  "imageV": "mtqus4as",
  "tags": [
   "Bank Indonesia",
   "Uang Primer",
   "Moneter",
   "Likuiditas"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "obmd-panggil-rupslb-agendakan-perombakan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "OBMD Panggil RUPSLB, Agendakan [Perombakan] Direksi-Komisaris",
  "deck": "PT OBM Drilchem Tbk memanggil RUPS Luar Biasa 29 September 2026 untuk membahas kemungkinan pergantian susunan direksi dan dewan komisaris.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OBMD",
   "RUPSLB",
   "direksi",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6259a77589_8846ad9534.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mika-catat-laba-rp728-miliar-genjot-ekspansi-rumah-sakit",
  "category": "Aksi Korporasi",
  "title": "MIKA catat laba Rp728 miliar, genjot [ekspansi] rumah sakit",
  "deck": "Materi public expose tahunan MIKA memuat kinerja semester I 2026 dan rencana penambahan sekitar 2.257 tempat tidur lewat tujuh lokasi rumah sakit baru.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MIKA",
   "Mitra Keluarga",
   "kinerja keuangan",
   "ekspansi rumah sakit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/140e09f6ee_8958b165e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inpp-tree-of-blessing-tambah-saham-jadi-35-95-suara",
  "category": "Aksi Korporasi",
  "title": "INPP: Tree of Blessing [tambah] saham jadi 35,95% suara",
  "deck": "Tree of Blessing Pte. Ltd. membeli 872,3 juta saham INPP senilai sekitar Rp628 miliar, mendorong hak suaranya dari 28,15% menjadi 35,95%.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "kepemilikan saham",
   "Tree of Blessing",
   "pemegang saham asing"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-0079-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smil-minta-perpanjangan-waktu-jawab-bursa-soal-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "SMIL Minta [Perpanjangan] Waktu Jawab Bursa Soal Laporan Keuangan",
  "deck": "PT Sarana Mitra Luas Tbk meminta tambahan 14 hari kepada BEI untuk menjawab permintaan penjelasan soal laporan keuangan per 30 Juni 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMIL",
   "Bursa Efek Indonesia",
   "laporan keuangan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b8f197d991_90a9e4284e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-kepemilikan-cgs-international-naik-ke-31-2-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "SQMI: Kepemilikan CGS International [Naik] ke 31,2 Miliar Saham",
  "deck": "CGS International Securities Singapore melaporkan kepemilikannya di SQMI naik dari 3,27 miliar jadi 31,2 miliar saham, meski hak suaranya turun tipis ke 20,65%.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "Wilton Makmur Indonesia",
   "kepemilikan saham",
   "CGS International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-5264-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-rambah-bisnis-wealth-management-dan-pembiayaan-ke-nbfi",
  "category": "Aksi Korporasi",
  "title": "BTPS Rambah Bisnis [Wealth Management] dan Pembiayaan ke NBFI",
  "deck": "Materi paparan publik terbaru BTPS memuat rincian bisnis wealth management dan pembiayaan ke lembaga keuangan nonbank, di tengah laba semester satu 2026 yang hanya tumbuh tipis.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "paparan publik",
   "wealth management",
   "bank syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/df8e63eca3_cc42628a24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jaya-tak-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "JAYA: Tak Ada Informasi Material di Balik [Volatilitas] Saham",
  "deck": "PT Armada Berjaya Trans Tbk menjawab permintaan penjelasan Bursa soal volatilitas sahamnya, menegaskan tidak ada informasi material dan pemegang saham utama tetap mempertahankan kepemilikannya.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAYA",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/51564277cf_8d86c9d8d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-bukukan-laba-rp85-miliar-usulkan-dividen-rp36-saham",
  "category": "Aksi Korporasi",
  "title": "AMOR Bukukan Laba Rp85 Miliar, Usulkan [Dividen] Rp36/Saham",
  "deck": "Laba bersih Ashmore Asset Management Indonesia (AMOR) naik 17,9 persen menjadi Rp85 miliar pada tahun fiskal yang berakhir Juni 2026, meski dana kelolaan sempat turun di kuartal terakhir.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "laba bersih",
   "dividen",
   "manajemen investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8216708211_b470482b27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-bukukan-laba-bersih-us-61-juta-2q26-naik-39-qoq",
  "category": "Aksi Korporasi",
  "title": "INCO Bukukan Laba Bersih US$61 Juta 2Q26, Naik 39% [QoQ]",
  "deck": "Vale Indonesia memaparkan kinerja keuangan kuartal kedua 2026 dalam materi Public Expose Tahunan, dengan laba bersih dan produksi nikel matte naik signifikan.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "Vale Indonesia",
   "public expose",
   "nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/28863c127d_2268e990a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fast-jadwalkan-rupslb-14-oktober-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "FAST Jadwalkan [RUPSLB] 14 Oktober, Agenda Menyusul",
  "deck": "PT Fast Food Indonesia Tbk mengumumkan rencana RUPSLB pada 14 Oktober 2026. Agenda resminya baru akan diumumkan lewat pemanggilan pada 22 September.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAST",
   "RUPSLB",
   "Fast Food Indonesia",
   "KFC Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8ee80ced69_1133af7256.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-dibuka-menguat-0-24-persen-ke-level-6-652",
  "category": "Pasar Modal",
  "title": "IHSG Dibuka [Menguat] 0,24 Persen ke Level 6.652",
  "deck": "IHSG dibuka menguat 15 poin ke 6.652 pada Senin, seiring penguatan bursa Asia dan prediksi analis pasar bergerak mendatar cenderung menguat.",
  "date": "7 September 2026",
  "image": "assets/img/ihsg-dibuka-menguat-0-24-persen-ke-level-6-652.jpg",
  "imageV": "mtqus4ss",
  "tags": [
   "IHSG",
   "Bursa Asia",
   "The Fed",
   "Saham Perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465408-ihsg-dibuka-menghijau-pada-perdagangan-7-september-2026-berpotensi-datar-saat-bursa-asia-menguat-dan-wall-street-lesu"
 },
 {
  "slug": "refi-tunda-lapkeu-kuartal-ii-audit-demi-obligasi-ii",
  "category": "Aksi Korporasi",
  "title": "REFI Tunda Lapkeu Kuartal II, Audit demi [Obligasi] II",
  "deck": "PT Usaha Pembiayaan Reliance Indonesia menunda penyampaian laporan keuangan interim Juni 2026 karena sedang diaudit untuk persiapan penerbitan Obligasi II REFI.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REFI",
   "obligasi",
   "laporan keuangan",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/16fe256439_90ee4c5c6e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-hari-ini-turun-tipis-jadi-rp2-637-000-gram",
  "category": "Makroekonomi",
  "title": "Harga Emas Antam Hari Ini [Turun] Tipis Jadi Rp2.637.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp3.000 pada 7 September 2026, kini di Rp2.637.000 per gram, sementara harga buyback juga ikut melemah.",
  "date": "7 September 2026",
  "image": "assets/img/harga-emas-antam-hari-ini-turun-tipis-jadi-rp2-637-000-gram.jpg",
  "imageV": "mtqus5bz",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465405-harga-emas-antam-hari-ini-7-september-2026-turun-tipis-rp3000-kini-di-angka-rp2637000-per-gram"
 },
 {
  "slug": "nsss-kepemilikan-direksi-naik-ke-26-61-via-repo",
  "category": "Aksi Korporasi",
  "title": "NSSS: Kepemilikan Direksi Naik ke 26,61% via [Repo]",
  "deck": "Direksi Samuel Sekuritas Indonesia melaporkan kenaikan kepemilikan saham NSSS dari 24,86% menjadi 26,61% lewat tiga transaksi repurchase agreement pada 4 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-8982-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-kepemilikan-samuel-sekuritas-naik-ke-9-64-via-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: [Kepemilikan] Samuel Sekuritas Naik ke 9,64% via Repo",
  "deck": "Samuel Sekuritas Indonesia, yang mewakili posisi direksi FILM, menambah 138,15 juta saham lewat transaksi repurchase agreement sehingga hak suaranya naik dari 8,37% menjadi 9,64%.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment Tbk",
   "kepemilikan saham direksi",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-07092026-0910-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-650-sorotan-ke-kelas-menengah",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.650, Sorotan ke Kelas Menengah",
  "deck": "Rupiah melemah tipis ke Rp17.650 per dolar AS pada Senin pagi, sementara pengamat menyoroti pendapatan kelas menengah yang tertekan karena tak kebagian subsidi pemerintah.",
  "date": "7 September 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-650-sorotan-ke-kelas-menengah.jpg",
  "imageV": "mtqus5tc",
  "tags": [
   "rupiah",
   "kurs dolar",
   "kelas menengah",
   "pertumbuhan ekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465401-rupiah-melemah-ke-rp17650-di-tengah-anjloknya-pendapatan-kelas-menengah"
 },
 {
  "slug": "epac-setop-pabrik-konvensional-ekspansi-ke-surabaya-2027",
  "category": "Aksi Korporasi",
  "title": "EPAC Setop Pabrik Konvensional, [Ekspansi] ke Surabaya 2027",
  "deck": "EPAC berencana menutup pabrik kemasan fleksibel konvensional akhir 2026 dan membangun pabrik digital printing baru di Surabaya pada 2027.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "ekspansi",
   "restrukturisasi",
   "kemasan fleksibel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8a86f3c3ae_94e04ee0df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soci-laba-bersih-melonjak-ke-us-20-3-juta-h1-2026",
  "category": "Aksi Korporasi",
  "title": "SOCI: Laba Bersih [Melonjak] ke US$20,3 Juta H1 2026",
  "deck": "Soechi Lines mencatat laba bersih US$20,29 juta pada semester I 2026, naik dari US$7 juta tahun lalu, ditopang kenaikan pendapatan dan laba penjualan kapal lama.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOCI",
   "laporan keuangan",
   "pelayaran",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260907084747-64259-0/FinancialStatement-2026-II-SOCI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "usai-erupsi-25-jam-anak-krakatau-tetap-level-siaga",
  "category": "Energi",
  "title": "Usai Erupsi 25 Jam, Anak Krakatau Tetap Level [Siaga]",
  "deck": "PVMBG memastikan status Siaga Gunung Anak Krakatau tetap berlaku usai episode erupsi menerus 25 jam berhenti, dengan potensi letusan susulan masih tinggi.",
  "date": "7 September 2026",
  "image": "assets/img/usai-erupsi-25-jam-anak-krakatau-tetap-level-siaga.jpg",
  "imageV": "mtqjnz0q",
  "tags": [
   "Gunung Anak Krakatau",
   "PVMBG",
   "Status Siaga",
   "Selat Sunda"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/aktivitas-anak-krakatau-terus-dipantau-pvmbg-pastikan-status-siaga-tetap-berlaku-usai-erupsi-menerus-25-jam",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bumi-akuisisi-loyal-metals-rp1-triliun-via-anak-usaha-australia",
  "category": "Aksi Korporasi",
  "title": "BUMI [Akuisisi] Loyal Metals Rp1 Triliun via Anak Usaha Australia",
  "deck": "Bumi Resources melalui anak usaha di Australia, BRA, mengambil alih 100 persen saham Loyal Metals senilai Rp1,004 triliun setara AUD79,07 juta pada 4 September 2026.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUMI",
   "akuisisi",
   "pertambangan",
   "Australia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8ee07bc6fc_280f614ec7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-jelaskan-ke-bei-lonjakan-harga-saham-20-dalam-3-hari",
  "category": "Aksi Korporasi",
  "title": "ERAA Jelaskan ke BEI [Lonjakan] Harga Saham 20% dalam 3 Hari",
  "deck": "Erajaya menjelaskan ke Bursa Efek Indonesia bahwa lonjakan harga saham 20,45 persen dan melonjaknya volume transaksi awal September dipicu keterbukaan informasi buyback yang sudah diumumkan sebelumnya.",
  "date": "7 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "buyback saham",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/af2d256a57_f3defc2a26.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "keramik-daur-ulang-umkm-surabaya-tembus-ekspor-ke-eropa",
  "category": "UMKM",
  "title": "Keramik Daur Ulang UMKM Surabaya [Tembus] Ekspor ke Eropa",
  "deck": "Wakil Menteri Perdagangan Dyah Roro Esti mengunjungi UMKM keramik Lumosh Living di Surabaya yang mengolah limbah produksi jadi alat makan ekspor ke Belanda dan Spanyol.",
  "date": "6 September 2026",
  "image": "assets/img/keramik-daur-ulang-umkm-surabaya-tembus-ekspor-ke-eropa.jpg",
  "imageV": "mtq13lpg",
  "tags": [
   "UMKM",
   "ekspor",
   "keramik",
   "ekonomi sirkular"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kunjungi-lumosh-living-di-surabaya-wamendag-apresiasi-inovasi-umkm-keramik-lokal-tembus-pasar-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "roi-marketing-rendah-meski-adopsi-ai-perusahaan-tinggi",
  "category": "Bisnis",
  "title": "ROI [Marketing] Rendah Meski Adopsi AI Perusahaan Tinggi",
  "deck": "Survei 114 perusahaan menunjukkan mayoritas sudah pakai data dan AI untuk pemasaran, tapi ROI marketingnya masih rendah.",
  "date": "6 September 2026",
  "image": "assets/img/roi-marketing-rendah-meski-adopsi-ai-perusahaan-tinggi.jpg",
  "imageV": "mtq13m88",
  "tags": [
   "marketing",
   "roi marketing",
   "ai marketing",
   "cmo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465342-marketing-makin-canggih-tapi-belum-tentu-bikin-penjualan-naik-kok-bisa"
 },
 {
  "slug": "ojk-dan-taspen-luncurkan-bulan-dana-pensiun-2026",
  "category": "Ketenagakerjaan",
  "title": "OJK dan TASPEN [Luncurkan] Bulan Dana Pensiun 2026",
  "deck": "OJK bersama TASPEN dan lembaga dana pensiun mencanangkan Bulan Dana Pensiun Indonesia 2026 di tiga kota untuk mendorong perencanaan pensiun sejak usia produktif.",
  "date": "6 September 2026",
  "image": "assets/img/ojk-dan-taspen-luncurkan-bulan-dana-pensiun-2026.jpg",
  "imageV": "mtq13mrl",
  "tags": [
   "TASPEN",
   "OJK",
   "dana pensiun",
   "Bulan Dana Pensiun"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465332-ojk-bersama-taspen-dan-lembaga-sektor-dana-pensiun-lainnya-selenggarakan-kick-off-event-bulan-dana-pensiun"
 },
 {
  "slug": "pegadaian-rayakan-hari-pelanggan-lewat-tring",
  "category": "BUMN",
  "title": "Pegadaian Rayakan Hari Pelanggan Lewat [Tring!]",
  "deck": "Pegadaian menggelar makan malam apresiasi untuk nasabah prioritas di Hari Pelanggan Nasional, sambil mempromosikan platform digital Tring! untuk layanan emas dan gadai.",
  "date": "6 September 2026",
  "image": "assets/img/pegadaian-rayakan-hari-pelanggan-lewat-tring.jpg",
  "imageV": "mtqbtcrj",
  "tags": [
   "Pegadaian",
   "Tring!",
   "Hari Pelanggan Nasional",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465321-hari-pelanggan-nasional-pegadaian-hadirkan-an-evening-with-pegadaian-dan-semangat-tenang-saja-bersama-tring"
 },
 {
  "slug": "hill-pemegang-saham-stabil-free-float-tetap-30-68",
  "category": "Aksi Korporasi",
  "title": "HILL: Pemegang Saham Stabil, [Free Float] Tetap 30,68%",
  "deck": "Laporan bulanan registrasi pemegang saham HILL periode Agustus 2026 menunjukkan tiga pemegang saham utama dan seluruh direksi tak berubah, sementara pemegang saham ritel di bawah 5 persen berkurang 11 akun.",
  "date": "6 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HILL",
   "pemegang saham",
   "free float",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6335d073eb_fc45ce231f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "erupsi-anak-krakatau-kerugian-penerbangan-belum-dihitung",
  "category": "Industri",
  "title": "Erupsi Anak Krakatau, Kerugian Penerbangan [Belum] Dihitung",
  "deck": "Enam bandara ditutup sejak dini hari akibat erupsi Gunung Anak Krakatau. Menhub sebut kerugian maskapai belum dihitung karena fokus masih ke penumpang.",
  "date": "6 September 2026",
  "image": "assets/img/erupsi-anak-krakatau-kerugian-penerbangan-belum-dihitung.jpg",
  "imageV": "mtq13ncc",
  "tags": [
   "Anak Krakatau",
   "penerbangan",
   "Kemenhub",
   "bandara ditutup"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465306-kerugian-penerbangan-akibat-erupsi-gunung-anak-krakatau-belum-dihitung-menhub-bilang-begini"
 },
 {
  "slug": "bitcoin-tertahan-di-us-78-000-pasar-tunggu-sinyal-the-fed",
  "category": "Pasar Modal",
  "title": "Bitcoin [Tertahan] di US$78.000, Pasar Tunggu Sinyal The Fed",
  "deck": "Bitcoin bertahan di sekitar US$78.000 usai gagal menembus US$80.000, sementara arus dana ETF dan sinyal The Fed jadi penentu arah berikutnya.",
  "date": "6 September 2026",
  "image": "assets/img/bitcoin-tertahan-di-us-78-000-pasar-tunggu-sinyal-the-fed.jpg",
  "imageV": "mtpr4g5k",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465289-bitcoin-tertahan-di-us78000-pasar-cermati-sinyal-etf-dan-kebijakan-the-fed"
 },
 {
  "slug": "avrist-group-satukan-empat-entitas-lewat-sinergi-baru",
  "category": "Bisnis",
  "title": "Avrist Group Satukan Empat Entitas Lewat [Sinergi] Baru",
  "deck": "Avrist Group meresmikan One Avrist Synergy untuk menyatukan layanan asuransi jiwa, asuransi umum, manajer investasi, dan dana pensiun dalam satu sistem terintegrasi.",
  "date": "6 September 2026",
  "image": "assets/img/avrist-group-satukan-empat-entitas-lewat-sinergi-baru.jpg",
  "imageV": "mtpr4gmv",
  "tags": [
   "Avrist Group",
   "asuransi",
   "dana pensiun",
   "layanan keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465273-empat-pilar-avrist-group-disatukan-solusi-keuangan-terintegrasi-jadi-fokus-baru"
 },
 {
  "slug": "diskon-pbb-p2-jakarta-5-berakhir-30-september",
  "category": "Makroekonomi",
  "title": "Diskon PBB-P2 Jakarta [5%] Berakhir 30 September",
  "deck": "Bapenda DKI Jakarta mengingatkan batas akhir pembayaran PBB-P2 2026 pada 30 September, sebelum keringanan pokok 5 persen berakhir dan denda keterlambatan mulai berlaku.",
  "date": "6 September 2026",
  "image": "assets/img/diskon-pbb-p2-jakarta-5-berakhir-30-september.jpg",
  "imageV": "mtpr4h1a",
  "tags": [
   "PBB-P2",
   "Bapenda DKI Jakarta",
   "pajak daerah",
   "Jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465244-jangan-lewat-jatuh-tempo-keringanan-pbb-p2-5-masih-berlaku-hingga-akhir-september"
 },
 {
  "slug": "dooh-rilis-ulang-kuartal-i-laba-usaha-berbalik-rugi",
  "category": "Aksi Korporasi",
  "title": "DOOH Rilis Ulang Kuartal I, [Laba Usaha] Berbalik Rugi",
  "deck": "Laporan keuangan interim kuartal I 2026 yang dikoreksi menunjukkan DOOH sebenarnya rugi usaha Rp6,01 miliar, sementara laba bersih ditopang pendapatan nonoperasional Rp10,94 miliar.",
  "date": "6 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "laporan keuangan",
   "Era Media Sejahtera",
   "rugi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260906145112-64368-0/FinancialStatement-2026-I-DOOH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cara-cek-desil-bansos-lewat-hp-dengan-nik-ktp",
  "category": "Makroekonomi",
  "title": "Cara Cek [Desil] Bansos Lewat HP dengan NIK KTP",
  "deck": "Kemensos membuka layanan mandiri di cekbansos.kemensos.go.id untuk mengecek status desil kesejahteraan keluarga hanya dengan memasukkan NIK lewat ponsel.",
  "date": "6 September 2026",
  "image": "assets/img/cara-cek-desil-bansos-lewat-hp-dengan-nik-ktp.jpg",
  "imageV": "mtpr4hlb",
  "tags": [
   "desil",
   "bansos",
   "DTSEN",
   "cekbansos"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465207-cara-cek-desil-lewat-hp-di-laman-cekbansoskemensosgoid-bisa-ikuti-empat-langkah-ini"
 },
 {
  "slug": "pmui-perpanjang-term-sheet-penjualan-saham-grpm-ke-desember-2026",
  "category": "Aksi Korporasi",
  "title": "PMUI [Perpanjang] Term Sheet Penjualan Saham GRPM ke Desember 2026",
  "deck": "PMUI dan Agus Susanto sepakat memperpanjang tenggat negosiasi penjualan saham PT Graha Prima Mentari Tbk kepada PT Tunas Binatama Lestari hingga 31 Desember 2026.",
  "date": "6 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PMUI",
   "GRPM",
   "term sheet",
   "divestasi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/58e198759e_3d0812e0db.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "flmc-ekuitas-negatif-rp2-59-miliar-rugi-naik-8-kali-lipat",
  "category": "Aksi Korporasi",
  "title": "FLMC: Ekuitas [Negatif] Rp2,59 Miliar, Rugi Naik 8 Kali Lipat",
  "deck": "Ekuitas Falmaco Nonwoven (FLMC) berbalik negatif Rp2,59 miliar per Juni 2026 setelah rugi bersih melonjak jadi Rp23,27 miliar, hampir delapan kali lipat dibanding tahun lalu.",
  "date": "6 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "laporan keuangan interim",
   "ekuitas negatif",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260906113748-64367-0/FinancialStatement-2026-II-FLMC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-rampungkan-pmthmetd-saham-beredar-naik-ke-9-32-miliar",
  "category": "Aksi Korporasi",
  "title": "HATM Rampungkan [PMTHMETD], Saham Beredar Naik ke 9,32 Miliar",
  "deck": "HATM menerbitkan 640 juta saham baru seharga Rp500 per saham, seluruhnya diserap PT Multi Sarana Nasional, menambah modal sekitar Rp320 miliar.",
  "date": "6 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "PMTHMETD",
   "penambahan modal",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d42f5a6476_274ce0aa1e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-terbitkan-640-juta-saham-baru-multi-sarana-kuasai-25-59",
  "category": "Aksi Korporasi",
  "title": "HATM Terbitkan 640 Juta Saham Baru, [Multi Sarana] Kuasai 25,59%",
  "deck": "PT Multi Sarana Nasional menyerap seluruh 640 juta saham baru HATM seharga Rp500 per saham, menaikkan porsinya jadi 25,59 persen dan mendilusi pemegang saham lama hingga 6,87 persen.",
  "date": "6 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "penambahan modal",
   "dilusi saham",
   "PT Multi Sarana Nasional"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ecc3999bfc_d2a15b7de7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-dunia-diproyeksi-volatil-pekan-depan",
  "category": "Pasar Modal",
  "title": "Harga Emas Dunia Diproyeksi [Volatil] Pekan Depan",
  "deck": "Analis memperkirakan emas dunia bergerak di US$4.276-US$4.668 per troy ons, dan emas batangan domestik di Rp2,5 juta-Rp2,754 juta per gram pekan depan.",
  "date": "6 September 2026",
  "image": "assets/img/harga-emas-dunia-diproyeksi-volatil-pekan-depan.jpg",
  "imageV": "mtpex89x",
  "tags": [
   "harga emas",
   "emas dunia",
   "logam mulia",
   "geopolitik Timur Tengah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465182-harga-emas-dunia-dan-logam-mulia-diprediksi-turun-pada-perdagangan-pekan-depan"
 },
 {
  "slug": "mknt-auditor-ragukan-kelangsungan-usaha-kas-nyaris-habis",
  "category": "Aksi Korporasi",
  "title": "MKNT: Auditor Ragukan [Kelangsungan Usaha], Kas Nyaris Habis",
  "deck": "Auditor menyatakan ketidakpastian material atas kelangsungan usaha MKNT, dengan defisiensi ekuitas Rp9,14 miliar dan kas tersisa hanya Rp1,13 juta per akhir Maret 2026.",
  "date": "5 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "kelangsungan usaha",
   "laporan keuangan",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260905224932-64352-0/FinancialStatement-2026-I-MKNT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tinjau-pasar-solo-wamendag-beras-dan-gula-masih-di-atas-het",
  "category": "Makroekonomi",
  "title": "Tinjau Pasar Solo, Wamendag: Beras dan Gula [Masih] di Atas HET",
  "deck": "Wamendag Dyah Roro Esti mengecek harga di Pasar Nusukan, Surakarta: MINYAKITA sesuai HET, tapi beras, gula pasir, dan daging sapi masih di atas harga acuan pemerintah secara nasional.",
  "date": "5 September 2026",
  "image": "assets/img/tinjau-pasar-solo-wamendag-beras-dan-gula-masih-di-atas-het.jpg",
  "imageV": "mtoaypej",
  "tags": [
   "MINYAKITA",
   "harga pangan",
   "Kemendag",
   "Surakarta"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tinjau-pasar-nusukan-bersama-wali-kota-surakarta-wamendag-pastikan-pasokan-bapok-aman-dan-harga-minyakita-sesuai-het",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bulog-usul-dmo-minyakita-100-lewat-bumn-pangan",
  "category": "BUMN",
  "title": "Bulog Usul DMO Minyakita [100%] Lewat BUMN Pangan",
  "deck": "Bulog menunggu restu Kemendag atas usulan menaikkan penyaluran DMO Minyakita lewat BUMN pangan dari 35 persen menjadi 100 persen.",
  "date": "5 September 2026",
  "image": "assets/img/bulog-usul-dmo-minyakita-100-lewat-bumn-pangan.jpg",
  "imageV": "mtogdig5",
  "tags": [
   "Minyakita",
   "Bulog",
   "DMO",
   "Kemendag"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465090-masih-tunggu-restu-kemendag-bulog-buka-suara-soal-usulan-dmo-minyakita-100-lewat-bumn-pangan"
 },
 {
  "slug": "kemendagri-minta-intervensi-ekonomi-daerah-berbeda-beda",
  "category": "Makroekonomi",
  "title": "Kemendagri Minta Intervensi Ekonomi Daerah [Berbeda-beda]",
  "deck": "Sekjen Kemendagri Tomsi Tohir meminta tim pemantauan menemukan akar masalah pertumbuhan ekonomi tiap daerah, bukan sekadar mengumpulkan data, demi target pertumbuhan 8 persen.",
  "date": "5 September 2026",
  "image": "assets/img/kemendagri-minta-intervensi-ekonomi-daerah-berbeda-beda.jpg",
  "imageV": "mtoaypu4",
  "tags": [
   "Kemendagri",
   "pertumbuhan ekonomi daerah",
   "APBD APBN",
   "target 8 persen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465085-sekjen-kemendagri-minta-tim-pemantauan-temukan-akar-masalah-pertumbuhan-ekonomi-daerah-intervensinya-berbeda-beda"
 },
 {
  "slug": "pertamina-kenalkan-bahan-bakar-pesawat-dari-jelantah",
  "category": "Energi",
  "title": "Pertamina Kenalkan Bahan Bakar Pesawat dari [Jelantah]",
  "deck": "Pertamina kenalkan SAF berbahan minyak jelantah ke generasi muda di IdeaFest 2026, bahan bakar yang sudah dipakai penerbangan Pelita Air rute Jakarta-Bali.",
  "date": "5 September 2026",
  "image": "assets/img/pertamina-kenalkan-bahan-bakar-pesawat-dari-jelantah.jpg",
  "imageV": "mtoayqpt",
  "tags": [
   "sustainable aviation fuel",
   "minyak jelantah",
   "Pertamina",
   "Pelita Air"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465084-kembangkan-jelantah-jadi-bahan-bakar-pesawat-pertamina-kenalkan-transisi-energi-ke-anak-muda-di-ideafest-2026"
 },
 {
  "slug": "kuki-panggil-rupslb-bahas-dividen-saham-30-september",
  "category": "Aksi Korporasi",
  "title": "KUKI Panggil RUPSLB, Bahas [Dividen] Saham 30 September",
  "deck": "KUKI akan menggelar RUPS Luar Biasa pada 30 September 2026 untuk meminta persetujuan pemegang saham atas rencana pembagian dividen dalam bentuk saham untuk tahun buku 2026.",
  "date": "5 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KUKI",
   "RUPSLB",
   "dividen saham",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260905_KUKI_E049_32f0e4d7-d598-4d2c-b264-517b58f6e636-20260905170904.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdkmp-diarahkan-jadi-pusat-ekonomi-desa-terintegrasi",
  "category": "UMKM",
  "title": "KDKMP Diarahkan Jadi [Pusat] Ekonomi Desa Terintegrasi",
  "deck": "Wamendagri Bima Arya menyebut Koperasi Desa/Kelurahan Merah Putih bakal jadi kanal tunggal distribusi subsidi dan bantuan sosial di desa, bukan sekadar toko ritel biasa.",
  "date": "5 September 2026",
  "image": "assets/img/kdkmp-diarahkan-jadi-pusat-ekonomi-desa-terintegrasi.jpg",
  "imageV": "mtoayr46",
  "tags": [
   "KDKMP",
   "Koperasi Merah Putih",
   "Bima Arya",
   "ekonomi desa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465082-kdkmp-harus-jadi-pusat-layanan-ekonomi-desa-terintegrasi-wamendagri-bima-arya-ujung-tombaknya-pemda"
 },
 {
  "slug": "pertamina-kenalkan-strategi-pertumbuhan-ganda-di-ideafest",
  "category": "Energi",
  "title": "Pertamina Kenalkan Strategi [Pertumbuhan Ganda] di IdeaFest",
  "deck": "Pertamina memperkenalkan Dual Growth Strategy di IdeaFest 2026, memadukan bisnis migas yang ada dengan pengembangan energi rendah karbon seperti SAF dari minyak jelantah.",
  "date": "5 September 2026",
  "image": "assets/img/pertamina-kenalkan-strategi-pertumbuhan-ganda-di-ideafest.jpg",
  "imageV": "mtoayrj6",
  "tags": [
   "Pertamina",
   "SAF",
   "energi bersih",
   "IdeaFest 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465079-pertamina-kenalkan-strategi-pertumbuhan-ganda-ke-generasi-muda-energi-bersih-jadi-andalan-baru"
 },
 {
  "slug": "skema-transfer-tunai-bansos-diuji-coba-awal-2027",
  "category": "Makroekonomi",
  "title": "Skema [Transfer Tunai] Bansos Diuji Coba Awal 2027",
  "deck": "Ketua DEN Luhut Binsar Pandjaitan menyebut bansos akan disalurkan tunai sekitar Rp5,4 juta per keluarga, dengan uji coba dimulai kuartal I-II 2027.",
  "date": "5 September 2026",
  "image": "assets/img/skema-transfer-tunai-bansos-diuji-coba-awal-2027.jpg",
  "imageV": "mtoayrxw",
  "tags": [
   "bansos",
   "transfer tunai",
   "Luhut Binsar Pandjaitan",
   "Dewan Ekonomi Nasional"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465077-luhut-ungkap-skema-baru-bansos-lewat-transfer-tunai-diuji-coba-mulai-kuartal-i-ii-2027"
 },
 {
  "slug": "luhut-govtech-tekan-bansos-salah-sasaran-ke-bawah-10",
  "category": "Makroekonomi",
  "title": "Luhut: GovTech Tekan Bansos Salah Sasaran ke Bawah [10%]",
  "deck": "Ketua Dewan Ekonomi Nasional Luhut Binsar Pandjaitan mengklaim integrasi data GovTech menekan bansos salah sasaran dari 77,6 persen menjadi di bawah 10 persen.",
  "date": "5 September 2026",
  "image": "assets/img/luhut-govtech-tekan-bansos-salah-sasaran-ke-bawah-10.jpg",
  "imageV": "mtoaysc0",
  "tags": [
   "bansos",
   "GovTech",
   "Luhut Binsar Pandjaitan",
   "digitalisasi data"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465073-luhut-klaim-govtech-tekan-bansos-salah-sasaran-dari-776-jadi-di-bawah-10-tutup-kebocoran-sana-sini"
 },
 {
  "slug": "mtdl-pacu-agentic-ai-data-ai-tumbuh-52-yoy-di-1h26",
  "category": "Aksi Korporasi",
  "title": "MTDL Pacu [Agentic AI], Data & AI Tumbuh 52% YoY di 1H26",
  "deck": "Metrodata percepat adopsi agentic AI lewat Knowgen.AI dan Megarock, sembari bisnis Data & AI tumbuh 52 persen dan Hybrid AI 171 persen pada semester I 2026.",
  "date": "5 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTDL",
   "Agentic AI",
   "Data & AI",
   "Metrodata Electronics"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/98c044a5b1_2a63884968.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-tindak-31-spbu-di-sumbar-soal-bbm-subsidi",
  "category": "Energi",
  "title": "Pertamina Tindak 31 SPBU di Sumbar soal BBM [Subsidi]",
  "deck": "Pertamina Patra Niaga menyanksi 31 SPBU di Sumatera Barat pada Januari-Agustus 2026 akibat pelanggaran penyaluran BBM bersubsidi, dari kendaraan tak sesuai hingga QR Code dipakai berulang.",
  "date": "5 September 2026",
  "image": "assets/img/pertamina-tindak-31-spbu-di-sumbar-soal-bbm-subsidi.jpg",
  "imageV": "mtoayt0n",
  "tags": [
   "BBM subsidi",
   "Pertamina Patra Niaga",
   "SPBU",
   "Sumatera Barat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465065-31-spbu-ditindak-pertamina-patra-niaga-perketat-pengawasan-bbm-subsidi-di-sumatera-barat"
 },
 {
  "slug": "tgra-koreksi-laporan-keuangan-kas-anjlok-90-persen",
  "category": "Aksi Korporasi",
  "title": "TGRA Koreksi Laporan Keuangan, Kas [Anjlok] 90 Persen",
  "deck": "Koreksi laporan keuangan interim semester I 2025 menunjukkan kas TGRA tersisa Rp77 juta dan laba ditahan berbalik jadi defisit, sementara ekuitas cuma turun tipis 1,8 persen.",
  "date": "5 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "laporan keuangan",
   "koreksi laporan",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f-7c20726d-1d42-4e1e-af36-356530a95c9f-1/FinancialStatement-2025-II-TGRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtwi-cetak-laba-rp12-2-miliar-2024-berbalik-dari-rugi",
  "category": "Aksi Korporasi",
  "title": "MTWI Cetak [Laba] Rp12,2 Miliar 2024, Berbalik dari Rugi",
  "deck": "Laporan keuangan tahunan auditan MTWI menunjukkan laba bersih Rp12,2 miliar pada 2024, berbalik dari rugi tahun sebelumnya, didukung kenaikan pendapatan premi 57,8 persen.",
  "date": "5 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTWI",
   "laporan keuangan",
   "asuransi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f-170a304c-429f-4d6e-a64e-1610eb59c810-1/FinancialStatement-2024-Tahunan-MTWI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "strategi-branding-bertingkat-untuk-wirausaha-gen-z",
  "category": "UMKM",
  "title": "Strategi Branding Bertingkat untuk Wirausaha [Gen Z]",
  "deck": "Forum wirausaha Gen Z di Jakarta membahas tiga lapis strategi membangun merek, sekaligus program pemerintah yang mendorong UMKM naik kelas ke usaha formal.",
  "date": "5 September 2026",
  "image": "assets/img/strategi-branding-bertingkat-untuk-wirausaha-gen-z.jpg",
  "imageV": "mtoaytkk",
  "tags": [
   "UMKM",
   "Gen Z",
   "branding",
   "Kementerian UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/465029-jangan-asal-promosi-ini-3-strategi-pemasaran-untuk-pengusaha-gen-z"
 },
 {
  "slug": "kemnaker-gelontorkan-bantuan-modal-ke-9-731-wirausaha-baru",
  "category": "Ketenagakerjaan",
  "title": "Kemnaker Gelontorkan [Bantuan] Modal ke 9.731 Wirausaha Baru",
  "deck": "Kemnaker menyalurkan modal usaha Rp15 juta untuk 1.000 penerima TKM Lanjutan dan Rp5 juta untuk 8.731 penerima TKM Pemula, total sekitar Rp58,7 miliar dari APBN.",
  "date": "5 September 2026",
  "image": "assets/img/gudang-logistik.jpg",
  "tags": [
   "Kemnaker",
   "TKM",
   "Bantuan UMKM",
   "Wirausaha"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/menaker-kunci-wirausaha-bukan-sekadar-dapat-pelanggan-tapi-menjaga-hubungan",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "kemnaker-buka-pendaftaran-pelatihan-vokasi-batch-5",
  "category": "Ketenagakerjaan",
  "title": "Kemnaker Buka Pendaftaran [Pelatihan Vokasi] Batch 5",
  "deck": "Kemnaker membuka pendaftaran Pelatihan Vokasi Nasional Batch 5 pada 27 Agustus-16 September 2026, menyasar pencari kerja, korban PHK, dan lulusan SMA/SMK.",
  "date": "5 September 2026",
  "image": "assets/img/pelatihan-vokasi.jpg",
  "tags": [
   "Kemnaker",
   "Pelatihan Vokasi",
   "PHK",
   "SMK"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/kemnaker-buka-pelatihan-vokasi-nasional-batch-5-untuk-akselerasi-keterampilan-tenaga-kerja",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "delapan-umkm-surakarta-siap-tampil-di-tei-2026",
  "category": "UMKM",
  "title": "Delapan UMKM Surakarta Siap Tampil di [TEI] 2026",
  "deck": "Kemendag memastikan delapan UMKM asal Surakarta, didominasi produk batik, tampil di Trade Expo Indonesia 2026, menyusul kunjungan ke sentra rotan dan batik setempat.",
  "date": "5 September 2026",
  "image": "assets/img/delapan-umkm-surakarta-siap-tampil-di-tei-2026.jpg",
  "imageV": "mtnkkzse",
  "tags": [
   "UMKM",
   "Ekspor",
   "Batik Surakarta",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-ekspor-rotan-dan-batik-surakarta-wamendag-roro-pantau-kesiapan-umkm-jelang-tei-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dooh-koreksi-arus-kas-usai-permintaan-penjelasan-bei",
  "category": "Aksi Korporasi",
  "title": "DOOH [Koreksi] Arus Kas Usai Permintaan Penjelasan BEI",
  "deck": "DOOH mengoreksi laporan arus kas kuartal I 2026 setelah BEI mempertanyakan penerimaan Rp16,52 miliar dari penjualan modem yang salah dicatat sebagai kas operasi, seharusnya kas investasi.",
  "date": "5 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "laporan keuangan",
   "arus kas",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/57148b5e22_53bc028327.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penyaluran-pupuk-subsidi-garut-baru-55-persen-dari-alokasi",
  "category": "BUMN",
  "title": "Penyaluran Pupuk Subsidi Garut Baru [55] Persen dari Alokasi",
  "deck": "Realisasi pupuk bersubsidi di Garut baru 55,21 persen dari alokasi per 27 Agustus, sembari Pupuk Indonesia memperketat administrasi kios penyalur.",
  "date": "4 September 2026",
  "image": "assets/img/penyaluran-pupuk-subsidi-garut-baru-55-persen-dari-alokasi.jpg",
  "imageV": "mtn7j55x",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Bersubsidi",
   "Garut",
   "Kementerian Pertanian"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/879/pilar-tani-ajang-kolaborasi-pupuk-indonesia-percepat-penyaluran-pupuk-subsidi-di-garut",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "sektor-minerba-kerahkan-58-tim-bantu-korban-gempa-ntt",
  "category": "Energi",
  "title": "Sektor Minerba Kerahkan [58] Tim Bantu Korban Gempa NTT",
  "deck": "Kementerian ESDM dan 82 perusahaan tambang menurunkan 58 tim tanggap darurat ke Manggarai Timur, Manggarai, dan Nagekeo untuk membantu warga terdampak gempa NTT.",
  "date": "4 September 2026",
  "image": "assets/img/sektor-minerba-kerahkan-58-tim-bantu-korban-gempa-ntt.jpg",
  "imageV": "mtn7j7md",
  "tags": [
   "Gempa NTT",
   "ESDM",
   "Minerba",
   "Tanggap Darurat"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/58-tim-tanggap-darurat-subsektor-minerba-hadir-dampingi-warga-terdampak-gempa-di-ntt",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "hasil-pubex-dooh-opsi-rights-issue-danai-ambisi-ai",
  "category": "Aksi Korporasi",
  "title": "Hasil Pubex DOOH: Opsi [Rights Issue] Danai Ambisi AI",
  "deck": "Manajemen DOOH mengaku mempertimbangkan rights issue untuk mendanai rencana investasi ekosistem AI senilai puluhan miliar dolar AS, jauh di atas aset perseroan sekitar Rp406 miliar.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Public Expose",
   "Rights Issue",
   "Data Center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3b62ab88a0_feca62fccf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ricy-tak-bagi-dividen-komisaris-berkurang-jadi-dua-orang",
  "category": "Aksi Korporasi",
  "title": "RICY Tak Bagi Dividen, [Komisaris] Berkurang Jadi Dua Orang",
  "deck": "RUPST dan RUPSLB RICY sepakat tidak bagi dividen tunai 2025, terima pengunduran diri satu komisaris, dan tetapkan remunerasi direksi-komisaris Rp2,87 miliar hingga akhir 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RICY",
   "RUPST",
   "dividen",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/65a0f9f9e5_8a79e93c48.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmt-tak-ada-informasi-material-di-balik-lonjakan-saham",
  "category": "Aksi Korporasi",
  "title": "SMMT: Tak Ada [Informasi Material] di Balik Lonjakan Saham",
  "deck": "Golden Eagle Energy (SMMT) menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya pada 3 September 2026, menyatakan tidak ada informasi material maupun rencana aksi korporasi di baliknya.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMT",
   "Golden Eagle Energy",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3743ab72dd_a8c7738df0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-beber-rincian-kontrak-lrt-dan-ekspansi-ke-filipina-pubex",
  "category": "Aksi Korporasi",
  "title": "ADHI Beber Rincian Kontrak LRT dan Ekspansi ke Filipina [Pubex]",
  "deck": "Materi public expose ADHI mengungkap progres kontrak LRT Jabodebek, proyek kereta baru di Filipina senilai Rp3,9 triliun didanai ADB, dan divestasi 11 anak usaha hingga 2027.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "Public Expose",
   "LRT Jabodebek",
   "Ekspansi Filipina"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/70a2c68586_5b4556f7c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "testsbkd-disuspensi-bei-usai-opini-audit-disclaimer-2-tahun",
  "category": "Aksi Korporasi",
  "title": "TESTSBKD [Disuspensi] BEI Usai Opini Audit Disclaimer 2 Tahun",
  "deck": "Bursa menghentikan sementara perdagangan saham TESTSBKD di seluruh pasar mulai 4 September 2026 setelah laporan keuangan auditannya mendapat opini disclaimer dua tahun berturut-turut.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTSBKD",
   "suspensi saham",
   "opini disclaimer",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260904_TESTSBKD_B007_4dd398db-65f2-4a55-8c32-3c0321d501da-20260905091430.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "winr-pemegang-saham-lepas-20-juta-saham-demi-free-float",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Lepas 20 Juta Saham demi [Free Float]",
  "deck": "Pemenang Nusantara Internasional melepas 20 juta saham WINR seharga Rp20 per lembar untuk menambah porsi saham beredar bebas (free float).",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-8961-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomproperty-optimalkan-separuh-dari-3-010-aset-propertinya",
  "category": "BUMN",
  "title": "TelkomProperty [Optimalkan] Separuh dari 3.010 Aset Propertinya",
  "deck": "TelkomProperty telah mengoptimalkan sekitar separuh dari 3.010 aset yang dikelolanya dan membuka peluang sewa gedung, termasuk Graha Merah Putih, bagi mitra eksternal lewat skema bisnis ke bisnis.",
  "date": "4 September 2026",
  "image": "assets/img/telkomproperty-optimalkan-separuh-dari-3-010-aset-propertinya.jpg",
  "imageV": "mtn7j875",
  "tags": [
   "telkomproperty",
   "aset properti",
   "telkom",
   "graha merah putih"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464922-telkomproperty-pastikan-optimalisasi-aset-properti-tetap-berjalan-sesuai-tata-kelola-dan-memenuhi-prinsip-value-creation"
 },
 {
  "slug": "jarr-direksi-temmy-iskandar-beli-11-000-saham-perdana",
  "category": "Aksi Korporasi",
  "title": "JARR: Direksi Temmy Iskandar [Beli] 11.000 Saham Perdana",
  "deck": "Direksi Jhonlin Agro Raya, Temmy Iskandar, membeli 11.000 saham JARR pada 28 Agustus 2026 seharga Rp3.310 per lembar, kepemilikan pertamanya di emiten ini.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JARR",
   "kepemilikan saham",
   "direksi",
   "Jhonlin Agro Raya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-5463-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asli-maybank-sekuritas-lepas-saham-7-03-usai-revisi-repo",
  "category": "Aksi Korporasi",
  "title": "ASLI: Maybank Sekuritas lepas saham [7,03%] usai revisi repo",
  "deck": "Maybank Sekuritas Indonesia melaporkan kepemilikannya di ASLI turun dari 1,38 miliar lembar (7,03% hak suara) jadi nol lewat revisi repo tertanggal 12 Agustus 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLI",
   "kepemilikan saham",
   "Maybank Sekuritas",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-0850-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-ekuitas-anjlok-83-auditor-soroti-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "TGRA: Ekuitas Anjlok 83%, Auditor Soroti [Kelangsungan Usaha]",
  "deck": "Ekuitas TGRA anjlok 83% jadi Rp51,4 miliar akibat rugi Rp259,5 miliar dan impairment proyek PLTA/PLTMH. Auditor menyoroti ketidakpastian kelangsungan usaha Grup.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "laporan keuangan",
   "kelangsungan usaha",
   "PLTA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ef6e18c87a_4cbea9bff7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-rilis-materi-public-expose-kinerja-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "TLKM Rilis Materi [Public Expose] Kinerja Semester I 2026",
  "deck": "Telkom mengoreksi surat sebelumnya dan merilis materi Public Expose Live 2026 pada 7 September, memuat kinerja 1H26, panduan tahun ini, dan progres InfraNexia.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Telkom Indonesia",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/23b227121a_0bfb850936.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-verah-wahyudi-lepas-3-1-juta-saham-divestasi",
  "category": "Aksi Korporasi",
  "title": "TAMA: Verah Wahyudi Lepas 3,1 Juta Saham [Divestasi]",
  "deck": "Pemegang saham non-direksi TAMA melepas 3,1 juta saham senilai sekitar Rp642 juta, hak suara turun tipis dari 9,93% menjadi 9,67%.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "kepemilikan saham",
   "divestasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-3247-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-bjb-turunkan-direksi-layani-nasabah-di-harpelnas-2026",
  "category": "Perbankan",
  "title": "bank bjb Turunkan Direksi [Layani] Nasabah di Harpelnas 2026",
  "deck": "bank bjb menandai Hari Pelanggan Nasional 2026 dengan menurunkan direksi dan komisaris ke banking hall di seluruh kantor cabang untuk melayani nasabah langsung.",
  "date": "4 September 2026",
  "image": "assets/img/bank-bjb-turunkan-direksi-layani-nasabah-di-harpelnas-2026.jpg",
  "imageV": "mtn7j8oc",
  "tags": [
   "bank bjb",
   "Harpelnas 2026",
   "perbankan",
   "layanan nasabah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464914-hari-pelanggan-nasional-2026-bank-bjb-hadir-beri-pelayanan-yang-setara-dan-berkelanjutan"
 },
 {
  "slug": "realisasi-pupuk-subsidi-takalar-baru-48-persen-dari-alokasi",
  "category": "BUMN",
  "title": "Realisasi Pupuk Subsidi Takalar Baru [48] Persen dari Alokasi",
  "deck": "PT Pupuk Indonesia dan Kementan menggelar evaluasi tata kelola pupuk bersubsidi di Takalar, saat realisasi penebusan baru mencapai 48 persen dari alokasi 31.776 ton hingga Agustus 2026.",
  "date": "4 September 2026",
  "image": "assets/img/realisasi-pupuk-subsidi-takalar-baru-48-persen-dari-alokasi.jpg",
  "imageV": "mtmxc6mj",
  "tags": [],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/880/perkuat-tata-kelola-dan-pengawasan-pupuk-indonesia-dorong-penyaluran-pupuk-bersubsidi-tepat-sasaran-di-takalar",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "umkm-klaten-tembus-ekspor-pemasok-900-gerai-starbucks",
  "category": "UMKM",
  "title": "UMKM Klaten Tembus Ekspor, Pemasok [900] Gerai Starbucks",
  "deck": "Usaha kayu asal Klaten, Citra Fajar Utama, tumbuh dari penggergajian sewaan 1998 jadi eksportir ke Asia, Eropa, Afrika, dan pemasok hampir 900 gerai kopi di dalam negeri.",
  "date": "4 September 2026",
  "image": "assets/img/umkm-klaten-tembus-ekspor-pemasok-900-gerai-starbucks.jpg",
  "imageV": "mtmxc9df",
  "tags": [
   "ekspor",
   "UMKM kayu",
   "Klaten",
   "Starbucks"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kisah-cfu-asal-klaten-menembus-pasar-lokal-dan-global-dari-penggergajian-sederhana-ke-pemasok-perlengkapan-900-gerai-kopi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "starlux-buka-rute-langsung-taipei-bali-sasar-wisatawan-ri",
  "category": "Bisnis",
  "title": "STARLUX Buka Rute [Langsung] Taipei-Bali, Sasar Wisatawan RI",
  "deck": "KDEI Taipei dan Kemenpar menggelar misi penjualan paket wisata ke Indonesia di Taipei, sementara STARLUX Airlines membuka rute langsung Taipei-Denpasar mulai Oktober 2026.",
  "date": "4 September 2026",
  "image": "assets/img/starlux-buka-rute-langsung-taipei-bali-sasar-wisatawan-ri.jpg",
  "imageV": "mtmxcgrf",
  "tags": [
   "pariwisata",
   "Taiwan",
   "KDEI Taipei",
   "penerbangan langsung"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tingkatkan-perdagangan-jasa-pariwisata-kdei-taipei-gelar-misi-penjualan-paket-wisata-ke-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "edge-lanjutkan-suspensi-saham-usai-crossing-go-private",
  "category": "Aksi Korporasi",
  "title": "EDGE Lanjutkan [Suspensi] Saham usai Crossing Go Private",
  "deck": "BEI melanjutkan penghentian sementara perdagangan saham Indointernet (EDGE) di pasar negosiasi setelah transaksi crossing rampung, bagian dari proses go private.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "suspensi saham",
   "go private",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6b286eba85_c1a98b57aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-trimegah-sumber-mas-lepas-300-juta-saham-hak-suara-ke-16-18",
  "category": "Aksi Korporasi",
  "title": "UVCR: Trimegah Sumber Mas [lepas] 300 juta saham, hak suara ke 16,18%",
  "deck": "Pemegang saham Trimegah Sumber Mas menjual 300 juta saham UVCR seharga Rp141 per saham pada 2 September 2026, memangkas hak suaranya dari 31,18% menjadi 16,18%.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "kepemilikan saham",
   "hak suara",
   "Trimegah Karya Pratama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-8909-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fitt-jawab-bursa-pastikan-tak-ada-informasi-material-tersembunyi",
  "category": "Aksi Korporasi",
  "title": "FITT Jawab Bursa, Pastikan Tak Ada [Informasi Material] Tersembunyi",
  "deck": "FITT menjawab permintaan penjelasan Bursa Efek Indonesia soal volatilitas transaksi sahamnya, menegaskan tidak ada informasi material yang belum diungkapkan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FITT",
   "volatilitas transaksi",
   "keterbukaan informasi",
   "akuisisi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/65c401516b_edd749540c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "safe-bei-umumkan-kepemilikan-saham-terkonsentrasi-98-14",
  "category": "Aksi Korporasi",
  "title": "SAFE: BEI Umumkan Kepemilikan Saham [Terkonsentrasi] 98,14%",
  "deck": "BEI menyatakan 98,14% saham Steady Safe Tbk (SAFE) dikuasai sejumlah kecil pemegang saham per 2 September 2026, menyisakan porsi saham beredar bebas yang sangat tipis.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe Tbk",
   "BEI",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e0c4bf5809_18e8c88735.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "testsbkd-ganti-direktur-utama-dan-satu-komisaris",
  "category": "Aksi Korporasi",
  "title": "TESTSBKD [Ganti] Direktur Utama dan Satu Komisaris",
  "deck": "RUPS TESTSBKD pada 4 September 2026 menetapkan direktur utama baru menggantikan Bima, sekaligus mengganti satu kursi komisaris yang sebelumnya dijabat Siti.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTSBKD",
   "direksi",
   "komisaris",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260904_TESTSBKD_E036_d3cacc7a-e617-49b6-93ab-219b8cc15583-20260905092544.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpjs-ketenagakerjaan-perkuat-layanan-pekerja-informal-pekalongan",
  "category": "Ketenagakerjaan",
  "title": "BPJS Ketenagakerjaan Perkuat Layanan Pekerja [Informal] Pekalongan",
  "deck": "BPJS Ketenagakerjaan mendekatkan layanan ke Pekalongan lewat kunjungan langsung manajemen, santunan bagi ahli waris, dan kolaborasi mahasiswa menjaring pekerja informal.",
  "date": "4 September 2026",
  "image": "assets/img/bpjs-ketenagakerjaan-perkuat-layanan-pekerja-informal-pekalongan.jpg",
  "imageV": "mtmxchal",
  "tags": [
   "BPJS Ketenagakerjaan",
   "Pekalongan",
   "pekerja informal",
   "Harpelnas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464909-rayakan-harpelnas-2026-bpjs-ketenagakerjaan-perkuat-layanan-perlindungan-dan-pemberdayaan-pekerja-di-kota-pekalongan"
 },
 {
  "slug": "enak-rombak-susunan-direksi-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "ENAK Rombak Susunan [Direksi] dan Komisaris",
  "deck": "RUPSLB Champ Resto Indonesia menyetujui pengunduran tiga pengurus lama, pengangkatan komisaris independen baru, dan perpindahan Sjariful Haq dari komisaris ke direktur.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENAK",
   "RUPSLB",
   "Direksi",
   "Komisaris Independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/165be55b9e_a2c7d5c25b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dild-komisaris-lepas-97-sahamnya-rp3-8-miliar",
  "category": "Aksi Korporasi",
  "title": "DILD: Komisaris [Lepas] 97% Sahamnya, Rp3,8 Miliar",
  "deck": "Komisaris Intiland Development, Sinarto Dharmawan Ir, menjual 32,88 juta saham DILD pada 21 Agustus 2026 seharga Rp116 per saham, menyisakan hanya 0,01% kepemilikan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DILD",
   "Intiland Development",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-7107-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wton-ungkap-kontrak-baru-rp2-27-t-tapi-laba-per-saham-anjlok",
  "category": "Aksi Korporasi",
  "title": "WTON Ungkap Kontrak Baru Rp2,27 T, tapi [Laba Per Saham] Anjlok",
  "deck": "WIKA Beton (WTON) memaparkan kontrak baru Rp2,27 triliun dan pendapatan Rp1,48 triliun jelang Public Expose 9 September 2026, di tengah tren laba per saham yang terus menyusut sejak 2015.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WTON",
   "Wijaya Karya Beton",
   "Public Expose",
   "BUMN Konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3bb0d270f4_d522492d7e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lrna-bantah-ada-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "LRNA Bantah Ada Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Merespons permintaan penjelasan Bursa Efek Indonesia atas lonjakan transaksi sahamnya, LRNA menyatakan tidak memiliki informasi material yang belum diungkap ke publik.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LRNA",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6ad1e6b632_48499cfa9d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-pefindo-afirmasi-idaaa-outlook-obligasi-jadi-positif",
  "category": "Aksi Korporasi",
  "title": "BMRI: Pefindo afirmasi idAAA, outlook obligasi jadi [positif]",
  "deck": "Pefindo mempertahankan peringkat tertinggi idAAA untuk delapan seri obligasi Bank Mandiri dan menaikkan outlooknya menjadi positif, sinyal potensi kenaikan peringkat setahun ke depan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Pefindo",
   "obligasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c1b8547b05_df4df77c5e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pngo-jawab-bursa-free-float-tinggal-0-52-refloat-belum-pasti",
  "category": "Aksi Korporasi",
  "title": "PNGO Jawab Bursa: Free Float Tinggal 0,52%, [Refloat] Belum Pasti",
  "deck": "Usai tender wajib, pengendali baru AEP Pinago Plantations kuasai 99,48% saham dan menyisakan free float 0,52%. Jadwal serta jumlah saham refloat ke publik belum ditentukan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNGO",
   "free float",
   "refloat",
   "tender offer wajib"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4c32dff408_fbf2fe94c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "incf-grup-defisit-auditor-soroti-going-concern",
  "category": "Aksi Korporasi",
  "title": "INCF: Grup Defisit, Auditor Soroti [Going Concern]",
  "deck": "Auditor menyoroti defisit Rp50,86 miliar dan utang bank Rp253,35 miliar Grup INCF, setelah anak usahanya gagal memenuhi rasio utang dalam perjanjian kredit ke bank BCA.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCF",
   "laporan keuangan tahunan",
   "going concern",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260904174522-64359-0/FinancialStatement-2025-Tahunan-INCF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indy-rencanakan-pengalihan-saham-treasuri-mulai-18-september",
  "category": "Aksi Korporasi",
  "title": "INDY Rencanakan Pengalihan [Saham Treasuri] Mulai 18 September",
  "deck": "Indika Energy melanjutkan penjualan 7,5 juta saham treasuri yang belum tuntas pada periode Mei-Juli 2026, penjualan lanjutan dimulai 18 September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDY",
   "saham treasuri",
   "buyback",
   "Indika Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0cc49058bf_3e9905835c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbca-bukukan-laba-rp29-5-triliun-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "BBCA Bukukan [Laba] Rp29,5 Triliun di Semester I 2026",
  "deck": "Materi public expose tahunan BBCA menunjukkan laba bersih semester I 2026 naik tipis 1,8 persen menjadi Rp29,5 triliun, sementara margin bunga bersih menyusut ke 5,3 persen.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBCA",
   "Bank Central Asia",
   "public expose",
   "kinerja perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ce18433a87_d4159772a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pam-jaya-beri-toren-dan-sambungan-gratis-ke-warga-jakarta",
  "category": "BUMN",
  "title": "PAM JAYA Beri Toren dan Sambungan [Gratis] ke Warga Jakarta",
  "deck": "PAM JAYA menegaskan komitmennya di Hari Pelanggan lewat sambungan rumah gratis untuk warga miskin, toren gratis, dan mesin air siap minum di ruang publik Jakarta.",
  "date": "4 September 2026",
  "image": "assets/img/pam-jaya-beri-toren-dan-sambungan-gratis-ke-warga-jakarta.jpg",
  "imageV": "mtmxchsk",
  "tags": [
   "PAM JAYA",
   "air bersih",
   "Jakarta",
   "Hari Pelanggan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464898-hari-pelanggan-pam-jaya-bongkar-beragam-program-untuk-permudah-akses-air-perpipaan-warga-jakarta"
 },
 {
  "slug": "peve-akui-salah-saji-laporan-kas-tersisa-rp7-5-miliar",
  "category": "Aksi Korporasi",
  "title": "PEVE Akui [Salah Saji] Laporan, Kas Tersisa Rp7,5 Miliar",
  "deck": "PEVE menjawab permintaan penjelasan BEI atas laporan keuangan Semester I 2026, mengungkap arus kas operasi masih minus Rp99,44 miliar dan mengakui salah saji sejumlah pos keuangan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEVE",
   "laporan keuangan",
   "arus kas",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/76824cb70f_bf4d5d8d16.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asgr-jawab-bei-tegaskan-tak-ada-aksi-korporasi-dalam-3-bulan",
  "category": "Aksi Korporasi",
  "title": "ASGR Jawab BEI, Tegaskan Tak Ada [Aksi Korporasi] dalam 3 Bulan",
  "deck": "Astra Graphia menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tak ada informasi material dan tak ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASGR",
   "Astra Graphia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4b528e7014_5ec4ecc1b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmas-cetak-prapenjualan-rp1-15-triliun-data-center-jadi-andalan",
  "category": "Aksi Korporasi",
  "title": "DMAS Cetak Prapenjualan Rp1,15 Triliun, [Data Center] Jadi Andalan",
  "deck": "Puradelta Lestari membukukan prapenjualan Rp1,15 triliun pada semester I 2026, atau 55 persen dari target setahun, ditopang permintaan lahan dari sektor data center.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMAS",
   "Puradelta Lestari",
   "data center",
   "kawasan industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/11544c4f77_4a77e18fe6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "batr-jelaskan-ke-bursa-arus-kas-operasi-minus-rp9-9-m",
  "category": "Aksi Korporasi",
  "title": "BATR Jelaskan ke Bursa [Arus Kas] Operasi Minus Rp9,9 M",
  "deck": "BATR menjelaskan ke BEI arus kas operasi minus Rp9,9 miliar dan kas di BRI yang susut dari Rp16,1 miliar jadi Rp2 miliar, di tengah lonjakan pendapatan 49,3 persen.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATR",
   "laporan keuangan",
   "arus kas",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a6cc8c37a2_fb4d9cabfb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zata-ganti-komisaris-independen-usai-rupst",
  "category": "Aksi Korporasi",
  "title": "ZATA Ganti [Komisaris Independen] Usai RUPST",
  "deck": "PT Bersama Zatta Jaya Tbk menunjuk Slamet Pribadi sebagai komisaris independen baru menggantikan Imron Rosyadi, sementara direksi dan komisaris lain diangkat kembali usai RUPST 2 September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZATA",
   "RUPST",
   "komisaris independen",
   "perubahan pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bdeb45d78d_3d0a5b7f67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbri-pefindo-tegaskan-rating-idaaa-outlook-positif",
  "category": "Aksi Korporasi",
  "title": "BBRI: PEFINDO Tegaskan Rating [idAAA], Outlook Positif",
  "deck": "PEFINDO mempertahankan peringkat idAAA untuk mayoritas obligasi BRI dengan outlook positif, sinyal potensi kenaikan peringkat pada evaluasi berikutnya.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRI",
   "PEFINDO",
   "obligasi",
   "rating kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a08ffca866_2553d8825b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zata-tak-bagi-dividen-laba-2025-dipakai-tutup-defisit",
  "category": "Aksi Korporasi",
  "title": "ZATA Tak Bagi [Dividen], Laba 2025 Dipakai Tutup Defisit",
  "deck": "RUPST ZATA memutuskan seluruh laba bersih Rp2,04 miliar tahun 2025 dipakai menutup defisit, bukan dibagi dividen. Komisaris independen juga berganti.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZATA",
   "RUPST",
   "dividen",
   "komisaris independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/49c3650bfe_e27d3a2443.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-tanggapi-permintaan-bursa-soal-volatilitas-transaksi",
  "category": "Aksi Korporasi",
  "title": "BANK tanggapi permintaan bursa soal [volatilitas] transaksi",
  "deck": "Bank Aladin Syariah (BANK) menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, sekaligus mengungkap rencana penerbitan sukuk pada kuartal IV 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BANK",
   "UMA",
   "Bank Aladin Syariah",
   "Sukuk Wakalah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/562b0e0e2b_95d9d4b0f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-siapkan-buyback-saham-rp1-triliun-rupslb-13-oktober",
  "category": "Aksi Korporasi",
  "title": "BTPS Siapkan [Buyback] Saham Rp1 Triliun, RUPSLB 13 Oktober",
  "deck": "BTPN Syariah berencana membeli kembali saham senilai maksimal Rp1 triliun atau hingga 10 persen saham beredar, menunggu persetujuan RUPSLB pada 13 Oktober 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "buyback saham",
   "RUPSLB",
   "Bank BTPN Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/abb99709fd_d0c62fbc08.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "grph-tanggapi-uma-bei-akui-tak-tahu-penyebab-lonjakan-saham",
  "category": "Aksi Korporasi",
  "title": "GRPH Tanggapi [UMA] BEI, Akui Tak Tahu Penyebab Lonjakan Saham",
  "deck": "Direktur Utama GRPH Edwin Leonardo menyebut kenaikan harga saham di luar kebiasaan murni mekanisme pasar dan tidak berdampak pada operasional maupun keuangan perusahaan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GRPH",
   "UMA",
   "Bursa Efek Indonesia",
   "saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3cebb16d93_7bf6ce026b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-beli-kembali-5-02-juta-saham-rp13-1-m-terpakai",
  "category": "Aksi Korporasi",
  "title": "PRDA Beli Kembali [5,02 Juta] Saham, Rp13,1 M Terpakai",
  "deck": "Prodia Widyahusada merampungkan 11 hari transaksi buyback sejak 20 Agustus, membeli 5,02 juta saham di kisaran Rp2.474-Rp2.783, dengan sisa dana Rp136,89 miliar per 4 September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cace431214_81571856cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-ganti-kepala-audit-internal-yusnita-mundur",
  "category": "Aksi Korporasi",
  "title": "RLCO Ganti Kepala Audit Internal, Yusnita [Mundur]",
  "deck": "RLCO menunjuk Teruna Eka Farma sebagai Kepala Unit Audit Internal baru menggantikan Yusnita Kristanti yang mengundurkan diri, efektif 1 Agustus 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "audit internal",
   "tata kelola perusahaan",
   "pergantian pejabat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/98d0f9d39e_9386312249.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akku-gelar-paparan-publik-insidentil-bahas-suspensi-saham",
  "category": "Aksi Korporasi",
  "title": "AKKU Gelar Paparan Publik Insidentil Bahas [Suspensi] Saham",
  "deck": "AKKU akan menggelar Public Expose Insidentil pada 18 September 2026 di Bandung untuk menjelaskan suspensi perdagangan sahamnya kepada publik.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d13c571926_a851b94b47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-direktur-bambang-rahardja-burhan-mundur",
  "category": "Aksi Korporasi",
  "title": "LAPD: Direktur Bambang Rahardja Burhan [Mundur]",
  "deck": "Leyand International (LAPD) menerima surat pengunduran diri Direktur Bambang Rahardja Burhan. RUPSLB digelar 20 Oktober 2026 untuk meminta persetujuan pemegang saham.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "Leyand International",
   "direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/95b1a9a486_6b8138d218.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tosk-jawab-bei-tak-ada-informasi-material-di-balik-volatilitas",
  "category": "Aksi Korporasi",
  "title": "TOSK Jawab BEI: Tak Ada Informasi Material di Balik [Volatilitas]",
  "deck": "TOSK menegaskan tidak mengetahui informasi material yang memicu pergerakan harga sahamnya, menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi efeknya.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOSK",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/50a83b104b_aa7c1fdcdb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-jawab-bursa-kas-rp237-65-juta-utang-afiliasi-rp25-1-m",
  "category": "Aksi Korporasi",
  "title": "CSMI Jawab Bursa: Kas Rp237,65 Juta, Utang [Afiliasi] Rp25,1 M",
  "deck": "CSMI menjawab permintaan penjelasan Bursa soal kas yang menipis ke Rp237,65 juta dan utang ke perusahaan afiliasi Rp25,1 miliar, di tengah rugi bersih yang masih berlanjut per Juni 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "likuiditas",
   "keterbukaan informasi",
   "NWS Chicken"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2987bcc802_d2eec255eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-bebastugaskan-direktur-keuangan-buntut-dugaan-tppu",
  "category": "Aksi Korporasi",
  "title": "ASBI [Bebastugaskan] Direktur Keuangan Buntut Dugaan TPPU",
  "deck": "Dewan Komisaris ASBI membebastugaskan sementara Direktur Keuangan dan Layanan menyusul laporan polisi baru soal dugaan penggelapan dan pencucian uang.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "Asuransi Bintang",
   "Direksi",
   "TPPU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e1ead3cd3b_4a1a0ee225.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suni-menangkan-tender-pengadaan-casing-dari-pertamina-ep",
  "category": "Aksi Korporasi",
  "title": "SUNI Menangkan [Tender] Pengadaan Casing dari Pertamina EP",
  "deck": "SUNI ditetapkan sebagai pemenang tender pengadaan casing oleh Pertamina EP senilai US$3,19 juta dengan masa kerja sekitar delapan bulan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUNI",
   "Pertamina EP",
   "tender",
   "kontrak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/330b37a9cf_aaabcbd8ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-rinci-jadwal-buyback-rp1-triliun-rupslb-13-oktober",
  "category": "Aksi Korporasi",
  "title": "BTPS Rinci Jadwal Buyback [Rp1 Triliun], RUPSLB 13 Oktober",
  "deck": "Bank BTPN Syariah membuka jadwal lengkap pembelian kembali saham senilai maksimal Rp1 triliun, dari RUPSLB 13 Oktober hingga proforma dampaknya ke laba per saham.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "buyback saham",
   "RUPSLB",
   "Bank BTPN Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c28f77a5ec_5457bebb72.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hais-paparkan-kinerja-laba-bersih-turun-44-8",
  "category": "Aksi Korporasi",
  "title": "HAIS Paparkan Kinerja, Laba Bersih [Turun] 44,8%",
  "deck": "Materi public expose HAIS memperlihatkan laba bersih semester I 2026 turun 44,8 persen jadi Rp18,81 miliar, sementara proyek pelabuhan apung sudah 75 persen rampung.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAIS",
   "public expose",
   "kinerja keuangan",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/62496a454d_f53a05f5cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soho-rombak-komite-nominasi-dan-remunerasi",
  "category": "Aksi Korporasi",
  "title": "SOHO [Rombak] Komite Nominasi dan Remunerasi",
  "deck": "SOHO mengganti dua anggota Komite Nominasi dan Remunerasi menyusul perombakan direksi dan komisaris, efektif 4 September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOHO",
   "Soho Global Health",
   "Komite Nominasi dan Remunerasi",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0989eb759b_a7a8d8d60d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-pertahankan-rating-ida-siapkan-obligasi-baru-rp3-5-triliun",
  "category": "Aksi Korporasi",
  "title": "INKP Pertahankan Rating [idA+], Siapkan Obligasi Baru Rp3,5 Triliun",
  "deck": "PEFINDO menegaskan peringkat idA+ stabil untuk obligasi lama INKP senilai Rp3,5 triliun dan mengonfirmasi rating sama untuk tahap baru obligasi serta sukuk senilai total Rp3,5 triliun plus US$25 juta.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "PEFINDO",
   "obligasi",
   "pemeringkatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/028a461885_7e39e9a75b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-peroleh-rating-iraa-stabil-untuk-obligasi-rp3-5-triliun",
  "category": "Aksi Korporasi",
  "title": "INKP Peroleh Rating irAA [Stabil] untuk Obligasi Rp3,5 Triliun",
  "deck": "PT Kredit Rating Indonesia menegaskan peringkat irAA dan irAAsy dengan outlook stabil untuk obligasi, sukuk, dan obligasi dolar terbaru Indah Kiat Pulp & Paper.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "Indah Kiat Pulp Paper",
   "rating obligasi",
   "sukuk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/affe76d0b2_d7111b9868.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fapa-pastikan-tak-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "FAPA Pastikan Tak Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "PT FAP Agri Tbk merespons surat Bursa Efek Indonesia terkait volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAPA",
   "PT FAP Agri Tbk",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8c435ce7c4_d82019adda.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-ekuitas-susut-14-6-auditor-ragukan-kelangsungan-usaha",
  "category": "Aksi Korporasi",
  "title": "SOFA: Ekuitas Susut 14,6%, Auditor Ragukan [Kelangsungan Usaha]",
  "deck": "Laporan keuangan interim semester I 2026 SOFA mencatat rugi tahun berjalan yang membengkakkan akumulasi defisit menjadi Rp16,01 miliar, sementara aset dan ekuitas perseroan sama-sama menyusut.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "laporan keuangan interim",
   "going concern",
   "emiten furnitur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260904153632-64354-0/FinancialStatement-2026-II-SOFA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-tetapkan-batas-pencatatan-pemegang-saham-rupslb-18-september",
  "category": "Aksi Korporasi",
  "title": "BTPS Tetapkan Batas Pencatatan Pemegang Saham RUPSLB [18 September]",
  "deck": "Bank BTPN Syariah menjadwalkan RUPSLB pada 13 Oktober 2026 untuk memutuskan rencana buyback saham, dengan batas pencatatan pemegang saham pada 18 September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "RUPSLB",
   "buyback saham",
   "Bank BTPN Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/86d2c53bf7_97ed4edbeb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medc-paparkan-laba-naik-282-dan-ekspansi-ke-malaysia",
  "category": "Aksi Korporasi",
  "title": "MEDC Paparkan Laba Naik 282% dan Ekspansi ke [Malaysia]",
  "deck": "Materi Public Expose Tahunan MEDC memuat lonjakan laba bersih 282 persen, penurunan rasio utang, dan rencana ekspansi ke ladang minyak Malaysia.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "Public Expose",
   "Laba Bersih",
   "Ekspansi Malaysia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f1d2999d91_9c1190ccf8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-tambah-2-25-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [tambah] 2,25 juta saham",
  "deck": "Edwin Soeryadjaya membeli 2,25 juta saham SRTG senilai sekitar Rp4,07 miliar dalam dua transaksi awal September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "kepemilikan saham",
   "Edwin Soeryadjaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-2426-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekad-jelaskan-suspensi-cooling-down-saham-lewat-public-expose",
  "category": "Aksi Korporasi",
  "title": "EKAD Jelaskan [Suspensi Cooling Down] Saham lewat Public Expose",
  "deck": "EKAD akan menggelar public expose insidentil pada 8 September 2026 untuk menjelaskan suspensi cooling down atas sahamnya, sesuai permintaan Bursa.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EKAD",
   "public expose",
   "suspensi saham",
   "cooling down"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d469a9649a_08251a4423.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbut-catat-laba-melonjak-jadi-rp169-66-miliar-di-semester-i",
  "category": "Aksi Korporasi",
  "title": "CBUT catat laba [melonjak] jadi Rp169,66 miliar di semester I",
  "deck": "Aset dan liabilitas CBUT sama-sama melonjak lebih dari 40 persen imbas aturan baru penempatan devisa hasil ekspor, sementara laba semester I naik empat kali lipat jadi Rp169,66 miliar.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBUT",
   "laporan keuangan interim",
   "devisa hasil ekspor",
   "sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260904145435-64357-0/FinancialStatement-2026-II-CBUT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-siapkan-penambahan-modal-tanpa-hmetd-dilusi-9-09",
  "category": "Aksi Korporasi",
  "title": "RATU Siapkan [Penambahan Modal] Tanpa HMETD, Dilusi 9,09%",
  "deck": "Raharja Energi Cepu bakal menerbitkan hingga 271,5 juta saham baru tanpa hak memesan efek terlebih dahulu, RUPSLB digelar 8 September 2026 untuk persetujuan pemegang saham independen.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "PMTHMETD",
   "penambahan modal",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3684f18dd8_1f894169fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-rinci-harga-penerbitan-saham-baru-pmthmetd-dilusi-9-09",
  "category": "Aksi Korporasi",
  "title": "RATU Rinci [Harga] Penerbitan Saham Baru PMTHMETD, Dilusi 9,09%",
  "deck": "RATU akan menerbitkan maksimal 271,5 juta saham baru (10%) tanpa hak memesan efek terlebih dahulu, dengan harga minimal 90% rata-rata harga penutupan 25 hari bursa, dilusi maksimal 9,09%.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "PMTHMETD",
   "penambahan modal",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6243e8665f_f874591590.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-panggil-rupslb-independen-soal-pmthmetd-pada-8-september",
  "category": "Aksi Korporasi",
  "title": "RATU Panggil RUPSLB Independen soal [PMTHMETD] pada 8 September",
  "deck": "RATU memanggil pemegang saham independen untuk RUPSLB 8 September 2026, membahas persetujuan penambahan modal tanpa hak memesan efek terlebih dahulu dan perubahan anggaran dasar.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "RUPSLB",
   "PMTHMETD",
   "Raharja Energi Cepu"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/97fcc82ead_a9b59152fb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-jadwalkan-pelaksanaan-pmthmetd-tenggat-mei-2027",
  "category": "Aksi Korporasi",
  "title": "RATU Jadwalkan Pelaksanaan PMTHMETD, Tenggat [Mei 2027]",
  "deck": "RATU menetapkan RUPSLB persetujuan penambahan modal tanpa HMETD pada 8 September 2026, dengan tenggat pelaksanaan saham baru paling lambat 7 Mei 2027.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "PMTHMETD",
   "RUPSLB",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d5c6a8f6ac_f577cd49a4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtsm-ganti-direktur-sukardi-digantikan-wilson-maruli",
  "category": "Aksi Korporasi",
  "title": "MTSM Ganti [Direktur], Sukardi Digantikan Wilson Maruli",
  "deck": "RUPST Metro Realty Tbk menetapkan Wilson Maruli sebagai direktur baru menggantikan Sukardi, sementara jajaran komisaris dan presiden direktur tidak berubah.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTSM",
   "Metro Realty",
   "pergantian direksi",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/39e09130fa_62a31eedc0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-buka-sementara-perdagangan-supr-untuk-crossing-vto",
  "category": "Aksi Korporasi",
  "title": "BEI Buka Sementara Perdagangan SUPR untuk [Crossing] VTO",
  "deck": "BEI membuka sementara perdagangan saham SUPR di Pasar Negosiasi pukul 14.00-14.15 WIB pada Jumat, khusus untuk transaksi crossing saham hasil tender offer Protelindo.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "delisting",
   "tender offer",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/72a39e4ead_9d874764cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-buka-suspensi-sementara-untuk-crossing-saham-go-private",
  "category": "Aksi Korporasi",
  "title": "EDGE Buka Suspensi Sementara untuk [Crossing] Saham Go Private",
  "deck": "Bursa membuka sementara suspensi saham EDGE khusus Pasar Negosiasi pada Jumat sore untuk transaksi crossing pengalihan saham hasil buyback dalam proses go private dan delisting sukarela.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "go private",
   "delisting saham",
   "suspensi perdagangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/84a2c4c36c_bcf1777798.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-umumkan-lokasi-dan-tanggal-dps-rupslb-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "RATU Umumkan Lokasi dan Tanggal DPS RUPSLB [PMTHMETD]",
  "deck": "RATU menetapkan Cityloog Hotel Tebet sebagai lokasi RUPSLB 8 September 2026 dan 13 Agustus 2026 sebagai batas kepemilikan saham yang berhak memberi suara.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "RUPSLB",
   "PMTHMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0222554ff9_e4dc7ed2d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjtm-laba-konsolidasi-naik-53-aset-bank-induk-menyusut",
  "category": "Aksi Korporasi",
  "title": "BJTM: Laba Konsolidasi Naik 53%, Aset Bank Induk [Menyusut]",
  "deck": "Bank Jatim (BJTM) menyampaikan materi public expose tahunan ke bursa: laba konsolidasi grup usaha bank melonjak, tapi aset dan simpanan nasabah di Bank Jatim sendiri justru menyusut.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJTM",
   "Bank Jatim",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c83b9e4888_db3f9c22d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekuitas-mknt-minus-rp13-66-miliar-meski-pendapatan-melonjak",
  "category": "Aksi Korporasi",
  "title": "Ekuitas MKNT [minus] Rp13,66 miliar meski pendapatan melonjak",
  "deck": "Laporan keuangan audited semester I 2026 MKNT menunjukkan ekuitas masih negatif Rp13,66 miliar, memburuk dari Rp7,35 miliar di akhir 2025, meski pendapatan melonjak ke Rp75,88 miliar.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "laporan keuangan",
   "ekuitas negatif",
   "smartphone"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/412f444943_589d630f9a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-jual-114-200-saham-rp61-2-juta",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris [Jual] 114.200 Saham, Rp61,2 Juta",
  "deck": "Komisaris AKPI Henry Liem melepas 114.200 saham senilai sekitar Rp61,2 juta pada 3 September 2026, kepemilikannya turun jadi 8.070.459 lembar atau 1,32 persen hak suara.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima Industry",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-5351-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgwg-panggil-rupslb-soal-perubahan-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "DGWG Panggil RUPSLB soal [Perubahan] Anggaran Dasar",
  "deck": "DGWG mengundang pemegang saham ke RUPSLB 28 September 2026 untuk menyetujui perubahan Pasal 3 Anggaran Dasar agar sesuai klasifikasi usaha KBLI 2025.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "RUPSLB",
   "Anggaran Dasar",
   "KBLI 2025"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eaf13a118f_dd6c282d76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-sawit-turun-28-stok-cpo-nasional-naik-ke-3-04-juta-ton",
  "category": "Industri",
  "title": "Ekspor Sawit [Turun] 28%, Stok CPO Nasional Naik ke 3,04 Juta Ton",
  "deck": "Ekspor sawit Indonesia turun 28,14 persen pada Mei 2026, sementara stok CPO nasional naik ke 3,04 juta ton karena produksi dan konsumsi ikut melambat.",
  "date": "4 September 2026",
  "image": "assets/img/ekspor-sawit-turun-28-stok-cpo-nasional-naik-ke-3-04-juta-ton.jpg",
  "imageV": "mtmjzzv3",
  "tags": [
   "sawit",
   "CPO",
   "ekspor",
   "GAPKI"
  ],
  "kreditFoto": "Gabungan Pengusaha Kelapa Sawit Indonesia",
  "sourceUrl": "https://gapki.id/news/2026/07/15/ekspor-sawit-turun-28-stok-cpo-nasional-capai-304-juta-ton/",
  "sourceLabel": "Gabungan Pengusaha Kelapa Sawit Indonesia"
 },
 {
  "slug": "bbni-kinerja-laba-1h26-naik-7-jadi-rp10-8-triliun",
  "category": "Aksi Korporasi",
  "title": "BBNI [Kinerja]: Laba 1H26 Naik 7% Jadi Rp10,8 Triliun",
  "deck": "BNI memaparkan kinerja semester I 2026 dalam materi Public Expose Tahunan: laba bersih naik 7% menjadi Rp10,8 triliun, kredit tumbuh 24,4%, dan kualitas aset membaik.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "Bank Negara Indonesia",
   "Public Expose",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6503bc751e_64e2e5b849.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-revisi-laporan-dana-rights-issue-baru-5-33-terealisasi",
  "category": "Aksi Korporasi",
  "title": "CSIS Revisi Laporan Dana Rights Issue, Baru [5,33%] Terealisasi",
  "deck": "PT Cahayasakti Investindo Sukses Tbk merevisi laporan realisasi dana rights issue Rp196,7 miliar per Juni 2026, baru 5,33 persen terpakai untuk proyek infrastruktur di kawasan industri Cikembar.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSIS",
   "rights issue",
   "realisasi penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d36fc6e9c0_1a421b3c8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ufoe-bantah-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "UFOE Bantah Ada [Informasi Material] di Balik Volatilitas Saham",
  "deck": "PT Damai Sejahtera Abadi Tbk merespons permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UFOE",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9cc2894bf9_d2a21732a8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "magang-nasional-buka-lagi-kuota-50-ribu-peserta",
  "category": "Ketenagakerjaan",
  "title": "Magang Nasional Buka Lagi, Kuota [50 Ribu] Peserta",
  "deck": "Kemnaker membuka pendaftaran MagangHub Batch 2 Angkatan II 2026 pada 3-8 September, bagian dari total kuota tahun ini yang naik jadi 150 ribu peserta.",
  "date": "4 September 2026",
  "image": "assets/img/magang-nasional-buka-lagi-kuota-50-ribu-peserta.jpg",
  "imageV": "mtmk00as",
  "tags": [
   "MagangHub",
   "Kemnaker",
   "Magang Nasional",
   "Yassierli"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464814-program-magang-nasional-kembali-dibuka-kuota-50-ribu-catat-jadwalnya"
 },
 {
  "slug": "baik-gelar-public-expose-usai-saham-kena-suspensi",
  "category": "Aksi Korporasi",
  "title": "BAIK Gelar Public Expose Usai Saham Kena [Suspensi]",
  "deck": "BAIK memaparkan kinerja usai sahamnya disuspensi bursa karena penurunan harga kumulatif; penjualan dan laba usaha kuartal II turun dua digit.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "Suspensi Saham",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4fef1ae562_384ff8d172.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cuan-negosiasi-pengambilalihan-sini-kuasai-27-78-saham",
  "category": "Aksi Korporasi",
  "title": "CUAN Negosiasi [Pengambilalihan] SINI, Kuasai 27,78% Saham",
  "deck": "CUAN, melalui dua anak usahanya, kini menguasai 27,78% saham SINI dan tengah bernegosiasi untuk mengambil alih pengendalian perusahaan tambang itu.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CUAN",
   "SINI",
   "akuisisi",
   "pertambangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/183a73b163_2e996ca10d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sido-laba-bersih-turun-44-jadi-rp334-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SIDO: Laba Bersih Turun 44% Jadi [Rp334 Miliar] di Semester I 2026",
  "deck": "Sido Muncul memaparkan materi public expose tahunan yang menunjukkan pendapatan dan laba bersih semester I 2026 anjlok akibat normalisasi persediaan Tolak Angin di distributor.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIDO",
   "Sido Muncul",
   "kinerja keuangan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/51bce25d28_44e0b156fa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "moli-bantah-ada-info-material-di-balik-lonjakan-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MOLI Bantah Ada Info Material di Balik [Lonjakan] Sahamnya",
  "deck": "Merespons permintaan Bursa Efek Indonesia, Madusari Murni Indah (MOLI) menyatakan tidak ada informasi material di balik kenaikan harga dan aktivitas sahamnya pada 31 Agustus 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MOLI",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/47319ca8c9_d6c55faf46.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gema-jawab-bei-tak-ada-info-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "GEMA Jawab BEI, Tak Ada Info di Balik [Volatilitas] Saham",
  "deck": "Bursa Efek Indonesia meminta penjelasan GEMA soal volatilitas transaksi sahamnya. Perseroan menjawab tidak ada informasi material atau rencana aksi korporasi yang disembunyikan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMA",
   "Bursa Efek Indonesia",
   "keterbukaan informasi",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/784f292ec2_07a712664d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smbr-jawab-bursa-ungkap-rencana-streamlining-dengan-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "SMBR Jawab Bursa, Ungkap Rencana [Streamlining] dengan Anak Usaha",
  "deck": "Semen Baturaja menjelaskan lonjakan transaksi sahamnya ke BEI dan membuka rencana restrukturisasi dengan entitas anak usaha yang masih dikaji, bagian dari perampingan grup Semen Indonesia atas arahan Danantara.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "Semen Baturaja",
   "Danantara",
   "Semen Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/308481bdf7_47157eda5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsmr-catat-ebitda-tumbuh-8-1-pada-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "JSMR Catat EBITDA [Tumbuh] 8,1% pada Semester I 2026",
  "deck": "Materi public expose JSMR menunjukkan pendapatan naik 7,6% dan EBITDA naik 8,1% secara tahunan pada semester I 2026, menjelang paparan publik pada 9 September 2026.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "Jasa Marga",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fbd4a01627_a02dca93f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "itmg-catat-laba-bersih-us-109-5-juta-naik-17-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "ITMG catat [laba bersih] US$109,5 juta, naik 17% di semester I 2026",
  "deck": "Materi paparan publik tahunan ITMG memperlihatkan laba bersih dan pendapatan naik dua digit pada semester I 2026, meski volume produksi batu bara justru turun 5 persen.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMG",
   "Indo Tambangraya Megah",
   "batu bara",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d1ad59ed13_020febd7d1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bull-cetak-laba-us-58-4-juta-opini-auditor-tetap-dikecualikan",
  "category": "Aksi Korporasi",
  "title": "BULL cetak laba US$58,4 juta, opini auditor tetap [dikecualikan]",
  "deck": "Buana Lintas Lautan (BULL) membukukan laba US$58,4 juta pada semester I 2026 dan aset naik 25 persen, namun auditor tetap memberi opini wajar dengan pengecualian.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BULL",
   "laporan keuangan",
   "opini audit",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260904095023-64163-0/FinancialStatement-2026-II-BULL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-rupo-setujui-restrukturisasi-obligasi-hingga-2034",
  "category": "Aksi Korporasi",
  "title": "WSKT: RUPO Setujui [Restrukturisasi] Obligasi hingga 2034",
  "deck": "Pemegang obligasi Waskita Karya menyetujui restrukturisasi Obligasi Berkelanjutan III Tahap IV 2019, termasuk perpanjangan tenor hingga 2034 dan penurunan kupon menjadi 5 persen.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "restrukturisasi obligasi",
   "Waskita Karya",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f76b4496a8_72773d4bad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-bagikan-dividen-interim-rp66-per-saham-rp6-16-triliun",
  "category": "Aksi Korporasi",
  "title": "BMRI bagikan [dividen] interim Rp66 per saham, Rp6,16 triliun",
  "deck": "Bank Mandiri akan membagikan dividen interim Rp66 per saham untuk tahun buku 2026, senilai sekitar Rp6,16 triliun. Jadwal pembayaran menyusul.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "dividen interim",
   "Bank Mandiri",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/69c58eb3ee_21bddc12c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-rusia-jajaki-pabrik-pupuk-urea-dan-kapal-canggih",
  "category": "BUMN",
  "title": "RI-Rusia Jajaki [Pabrik] Pupuk Urea dan Kapal Canggih",
  "deck": "Danantara dan Pupuk Indonesia menandatangani studi bersama untuk potensi pabrik urea di Vladivostok, sementara Rusia menawarkan kapal canggih pengolah ikan kepada Indonesia.",
  "date": "4 September 2026",
  "image": "assets/img/ri-rusia-jajaki-pabrik-pupuk-urea-dan-kapal-canggih.jpg",
  "imageV": "mtmk00rv",
  "tags": [
   "rusia",
   "pupuk indonesia",
   "danantara",
   "prabowo subianto"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464784-bukan-cuma-perdagangan-rusia-tawarkan-kapal-canggih-hingga-pabrik-pupuk-ke-indonesia"
 },
 {
  "slug": "jawa-tak-ada-informasi-material-di-balik-lonjakan-saham",
  "category": "Aksi Korporasi",
  "title": "JAWA: Tak Ada Informasi [Material] di Balik Lonjakan Saham",
  "deck": "Bursa minta JAWA jelaskan lonjakan harga dan volume sahamnya. Perusahaan menyatakan tak ada informasi material tersembunyi dan tak tahu pasti penyebab kenaikan tersebut.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAWA",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ce38cfe917_86820cad69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-rampungkan-restrukturisasi-obligasi-bunga-turun-ke-5",
  "category": "Aksi Korporasi",
  "title": "WSKT Rampungkan [Restrukturisasi] Obligasi, Bunga Turun ke 5%",
  "deck": "RUPO Waskita Karya menyetujui restrukturisasi obligasi dengan 97,14 persen suara: bunga turun ke 5 persen, jatuh tempo mundur ke 2034, dan denda gagal bayar dihapuskan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "restrukturisasi obligasi",
   "Waskita Karya",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c4709cfa4b_b5450ff54d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-sawit-ri-melonjak-64-pada-juni-2026",
  "category": "Industri",
  "title": "Ekspor Sawit RI [Melonjak] 64% pada Juni 2026",
  "deck": "GAPKI mencatat ekspor sawit Juni 2026 naik 64% dari Mei menjadi 3,27 juta ton, sementara harga rata-rata CPO justru turun mengikuti pelemahan pasar acuan.",
  "date": "4 September 2026",
  "image": "assets/img/ekspor-sawit-ri-melonjak-64-pada-juni-2026.jpg",
  "imageV": "mtm9lqsf",
  "tags": [
   "Sawit",
   "Ekspor CPO",
   "GAPKI",
   "Harga CPO"
  ],
  "kreditFoto": "Gabungan Pengusaha Kelapa Sawit Indonesia",
  "sourceUrl": "https://gapki.id/news/2026/08/26/ekspor-sawit-indonesia-melonjak-64-pada-juni-2026-produksi-dan-konsumsi-ikut-naik/",
  "sourceLabel": "Gabungan Pengusaha Kelapa Sawit Indonesia"
 },
 {
  "slug": "giias-bandung-2026-digelar-9-13-september-di-sudirman-ballroom",
  "category": "Industri",
  "title": "GIIAS [Bandung] 2026 Digelar 9-13 September di Sudirman Ballroom",
  "deck": "Pameran otomotif GIIAS lanjut ke Bandung pada 9-13 September 2026 di Sudirman Grand Ballroom, setelah sebelumnya digelar di Tangerang dan Surabaya.",
  "date": "4 September 2026",
  "image": "assets/img/giias-bandung-2026-digelar-9-13-september-di-sudirman-ballroom.jpg",
  "imageV": "mtm9lr3q",
  "tags": [
   "GIIAS",
   "Otomotif",
   "GAIKINDO",
   "Bandung"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/pameran-otomotif-giias-bandung-2026-jadwal-lokasi-harga-dan-cara-beli-tiket/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "fwct-saham-direksi-turun-hak-suara-susut-ke-80",
  "category": "Aksi Korporasi",
  "title": "FWCT: Saham Direksi Turun, [Hak Suara] Susut ke 80%",
  "deck": "Direksi FWCT Indra Satriawan melaporkan sahamnya turun dari 88 jadi 85 lembar, sementara hak suaranya anjlok dari 100% menjadi 80% lewat eksekusi saham yang dijaminkan.",
  "date": "4 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "kepemilikan saham",
   "direksi",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-04092026-8642-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pengunjung-giias-surabaya-2026-rekor-naik-40-persen",
  "category": "Industri",
  "title": "Pengunjung GIIAS Surabaya 2026 [Rekor], Naik 40 Persen",
  "deck": "GIIAS Surabaya 2026 ditutup dengan 45.763 pengunjung, naik lebih dari 40 persen dari tahun lalu, didukung 37 merek kendaraan dan area pameran seluas 15.000 meter persegi.",
  "date": "4 September 2026",
  "image": "assets/img/pengunjung-giias-surabaya-2026-rekor-naik-40-persen.jpg",
  "imageV": "mtlyek5v",
  "tags": [
   "GIIAS",
   "GAIKINDO",
   "Otomotif",
   "Jawa Timur"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/giias-surabaya-2026-cetak-rekor-jumlah-pengunjung-tertinggi/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "giias-bandung-digelar-9-13-september-19-merek-otomotif-ikut",
  "category": "Industri",
  "title": "GIIAS Bandung Digelar 9-13 September, [19] Merek Otomotif Ikut",
  "deck": "GIIAS the Series 2026 singgah di Bandung pada 9-13 September dengan 19 merek kendaraan, menyasar pasar Jawa Barat yang menyumbang 15,1 persen penjualan mobil nasional hingga April 2026.",
  "date": "4 September 2026",
  "image": "assets/img/giias-bandung-digelar-9-13-september-19-merek-otomotif-ikut.jpg",
  "imageV": "mtlyelg3",
  "tags": [
   "GIIAS",
   "Otomotif",
   "Jawa Barat",
   "GAIKINDO"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/bandung-menjadi-tuan-rumah-giias-2026-dari-9-hingga-13-september-2026/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "ekspor-pala-naik-ke-us-133-juta-tapi-25-kali-ditolak",
  "category": "Bisnis",
  "title": "Ekspor Pala Naik ke US$133 Juta, tapi 25 Kali [Ditolak]",
  "deck": "Nilai ekspor pala RI naik ke US$133 juta pada 2025 dan menguasai 53 persen pasar dunia, namun cemaran jamur menyebabkan 25 kasus penolakan produk di Jepang dan Uni Eropa sejak 2024.",
  "date": "4 September 2026",
  "image": "assets/img/ekspor-pala-naik-ke-us-133-juta-tapi-25-kali-ditolak.jpg",
  "imageV": "mtlsfsda",
  "tags": [
   "Ekspor Pala",
   "Kemendag",
   "Uni Eropa",
   "Jepang"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kuasai-separuh-pasokan-dunia-indonesia-dongkrak-mutu-pala-untuk-tembus-pasar-ekspor-premium",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bi-naikkan-insentif-likuiditas-bank-ke-6-persen",
  "category": "Perbankan",
  "title": "BI Naikkan Insentif Likuiditas Bank ke [6] Persen",
  "deck": "Bank Indonesia menaikkan batas insentif KLM dari 5,5 ke 6,0 persen dari dana nasabah mulai September 2026, agar likuiditas bank lebih banyak mengalir ke UMKM.",
  "date": "4 September 2026",
  "image": "assets/img/bi-naikkan-insentif-likuiditas-bank-ke-6-persen.jpg",
  "imageV": "mtlsfzmc",
  "tags": [
   "Bank Indonesia",
   "KLM",
   "likuiditas perbankan",
   "UMKM"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2818026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "diva-rugi-rp31-97-miliar-pendapatan-turun-19-9",
  "category": "Aksi Korporasi",
  "title": "DIVA [Rugi] Rp31,97 Miliar, Pendapatan Turun 19,9%",
  "deck": "Menjawab permintaan penjelasan BEI, DIVA mengungkap rugi bersih Rp31,97 miliar per Juni 2026, pendapatan turun 19,9%, dan utang bank jangka pendek melonjak ke Rp40,59 miliar.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DIVA",
   "rugi bersih",
   "keterbukaan informasi BEI",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/03355453c3_53a697aa70.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-ubah-utang-rp822-9-miliar-jadi-saham-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "MKNT ubah utang Rp822,9 miliar jadi saham [PMTHMETD]",
  "deck": "MKNT menjawab pertanyaan Bursa soal rencana PMTHMETD, termasuk konversi utang Rp822,9 miliar ke saham baru dan RUPSLB 14 September 2026.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "restrukturisasi utang",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/64d76259fb_d466108f22.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smdr-koreksi-laporan-realisasi-dana-sukuk-rp700-m",
  "category": "Aksi Korporasi",
  "title": "SMDR [Koreksi] Laporan Realisasi Dana Sukuk Rp700 M",
  "deck": "SMDR mengoreksi laporan realisasi dana sukuk Rp700 miliar menanggapi telaah OJK. Dana bersih Rp694,23 miliar tercatat masih 100 persen belum terpakai per 30 Juni 2026.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDR",
   "Samudera Indonesia",
   "sukuk",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ff93d4acc1_491190cf92.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jawab-bursa-ungkap-rencana-akuisisi-senilai-rp23-triliun",
  "category": "Aksi Korporasi",
  "title": "BIKE Jawab Bursa, Ungkap Rencana [Akuisisi] Senilai Rp23 Triliun",
  "deck": "BIKE merespons permintaan penjelasan Bursa soal volatilitas transaksi dan mengungkap rencana RUPS untuk modal Rp1 triliun serta akuisisi dua anak usaha.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "RUPS",
   "akuisisi",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/00f4d2926e_d980953634.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "blog-bukukan-laba-rp78-m-di-1h26-liabilitas-melonjak-24",
  "category": "Aksi Korporasi",
  "title": "BLOG Bukukan Laba Rp78 M di 1H26, [Liabilitas] Melonjak 24%",
  "deck": "Pendapatan BLOG naik 17 persen di semester satu 2026, tapi ekspansi 16 lokasi cold storage lebih banyak dibiayai utang baru dibanding modal sendiri, sementara margin laba menipis.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLOG",
   "logistik",
   "cold chain",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a8bce249e2_443cc17f94.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lps-gandeng-kadin-cari-investor-aset-bpr-bprs",
  "category": "Perbankan",
  "title": "LPS Gandeng Kadin Cari [Investor] Aset BPR-BPRS",
  "deck": "LPS menjajaki kerja sama dengan Kadin DKI Jakarta untuk mempertemukan investor dengan BPR-BPRS yang tengah disehatkan, dengan harapan meluas ke Kadin daerah lain.",
  "date": "3 September 2026",
  "image": "assets/img/lps-gandeng-kadin-cari-investor-aset-bpr-bprs.jpg",
  "imageV": "mtlsg074",
  "tags": [
   "LPS",
   "Kadin",
   "BPR-BPRS",
   "investor perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464727-lps-gandeng-kadin-cari-investor-untuk-aset-bpr-bprs-dalam-proses-likuidari-sebesar-rp2-triliun"
 },
 {
  "slug": "cbre-tanggapi-gugatan-wanprestasi-klaim-utang-vendor-lunas",
  "category": "Aksi Korporasi",
  "title": "CBRE Tanggapi Gugatan [Wanprestasi], Klaim Utang Vendor Lunas",
  "deck": "CBRE menjawab gugatan wanprestasi soal tagihan perawatan kapal, mengaku sudah melunasi seluruh tagihan ke vendor dan tengah bernegosiasi mediasi dengan Navios Control Services.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBRE",
   "gugatan wanprestasi",
   "keterbukaan informasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ca2d4d8625_fdce5abe6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-bisa-naik-kelas-lewat-pemanfaatan-ai",
  "category": "UMKM",
  "title": "UMKM Bisa [Naik Kelas] Lewat Pemanfaatan AI",
  "deck": "AI bisa membantu UMKM tingkatkan pemasaran, layanan pelanggan, dan efisiensi operasional tanpa perlu teknologi mahal atau tenaga tambahan.",
  "date": "3 September 2026",
  "image": "assets/img/umkm-bisa-naik-kelas-lewat-pemanfaatan-ai.jpg",
  "imageV": "mtlsg0n4",
  "tags": [
   "UMKM",
   "AI",
   "Digitalisasi",
   "Pemasaran Digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464723-strategi-umkm-naik-kelas-di-era-ai-mulai-dari-marketing-hingga-akses-modal"
 },
 {
  "slug": "bexi-bayar-obligasi-rp714-5-miliar-yang-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BEXI Bayar Obligasi Rp714,5 Miliar yang [Jatuh Tempo]",
  "deck": "Indonesia Eximbank memastikan dana Rp714,5 miliar sudah siap untuk melunasi pokok obligasi BEXI04DCN6 yang jatuh tempo 3 September 2026 dan dihapus dari pencatatan BEI.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI",
   "obligasi",
   "Indonesia Eximbank",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8b2ed31c68_6cf4c33c43.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smgr-paparkan-kinerja-1h26-laba-melonjak-445-utang-turun",
  "category": "Aksi Korporasi",
  "title": "SMGR Paparkan Kinerja 1H26: Laba [Melonjak] 445%, Utang Turun",
  "deck": "SMGR memaparkan materi public expose ke bursa: laba bersih 1H26 melonjak 445,9 persen dan utang berbunga menyusut, menjelang paparan publik 8 September 2026.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGR",
   "Semen Indonesia",
   "public expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7788c629df_f99a84099c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-rencanakan-rights-issue-rp2-4-triliun-dilusi-13",
  "category": "Aksi Korporasi",
  "title": "MGLV Rencanakan [Rights Issue] Rp2,4 Triliun, Dilusi 13%",
  "deck": "MGLV berencana menerbitkan hingga 285,7 juta saham baru lewat rights issue senilai sekitar Rp2,4 triliun untuk membayar piutang ke NAC dan NGC serta modal kerja bisnis pusat data.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "rights issue",
   "HMETD",
   "data center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/51d4af8220_dac8d153c6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-rilis-materi-pubex-laba-bersih-turun-25-3-di-1h26",
  "category": "Aksi Korporasi",
  "title": "VTNY Rilis Materi Pubex, [Laba Bersih] Turun 25,3% di 1H26",
  "deck": "VTNY menyerahkan materi Public Expose Tahunan yang digelar 8 September 2026, memuat kinerja semester I 2026: laba bersih turun 25,3 persen meski pendapatan naik tipis.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "Venteny Fortuna",
   "Public Expose",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/574c191597_5949c1b433.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-divestasi-13-anak-usaha-ambil-pinjaman-rp4-triliun-dari-ndc",
  "category": "Aksi Korporasi",
  "title": "MGLV Divestasi 13 Anak Usaha, Ambil Pinjaman [Rp4 Triliun] dari NDC",
  "deck": "Rencana transaksi mencapai 563,59 persen dari ekuitas Perseroan, mencakup divestasi 13 anak usaha dan pinjaman pemegang saham hingga Rp4 triliun dari NDC jelang RUPS 7 September.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "transaksi material",
   "data center",
   "NDC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c20a300955_77184e1ed6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-jamin-fasilitas-kredit-us-530-2-juta-untuk-data-center-dge",
  "category": "Aksi Korporasi",
  "title": "EDGE Jamin Fasilitas Kredit [US$530,2 Juta] untuk Data Center DGE",
  "deck": "Anak usaha EDGE, PT Digital Gayana Ekaprana, mendapat kredit US$530,2 juta dari 11 bank untuk proyek data center, dijamin saham EDGE dan Ekagrata Data Gemilang di DGE.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "transaksi material",
   "data center",
   "fasilitas kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ee28316f16_da808554c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "reli-laba-semester-i-2026-anjlok-43-58-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "RELI: Laba Semester I 2026 Anjlok [43,58%] di Public Expose",
  "deck": "Materi public expose RELI menunjukkan laba bersih semester I 2026 turun 43,58 persen menjadi Rp2,73 miliar, meski pendapatan segmen transaksi bursa tumbuh 31,22 persen.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RELI",
   "Reliance Sekuritas",
   "sekuritas",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e650045b13_d95bcb92e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akra-paparkan-kinerja-semester-i-jelang-public-expose-8-sept",
  "category": "Aksi Korporasi",
  "title": "AKRA Paparkan [Kinerja] Semester I Jelang Public Expose 8 Sept",
  "deck": "AKR Corporindo merilis materi Public Expose Tahunan berisi kinerja semester I 2026, termasuk pergeseran kontribusi segmen kawasan industri dan progres proyek LNG di JIIPE.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKRA",
   "AKR Corporindo",
   "Public Expose",
   "JIIPE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1166aa0556_2353a6d197.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-panggil-rupslb-25-september-bahas-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "BIPP Panggil RUPSLB 25 September, Bahas [PMTHMETD]",
  "deck": "Bhuwanatala Indah Permai mengundang pemegang saham ke RUPSLB 25 September 2026 untuk menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "RUPSLB",
   "PMTHMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4691b1101c_b00b12740b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hdfa-cetak-laba-rp1-53-miliar-bangkit-dari-rugi-2025",
  "category": "Aksi Korporasi",
  "title": "HDFA Cetak Laba Rp1,53 Miliar, [Bangkit] dari Rugi 2025",
  "deck": "Radana Bhaskara Finance (HDFA) membukukan laba bersih Rp1,53 miliar pada semester I 2026, berbalik dari rugi Rp82 miliar sepanjang 2025.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HDFA",
   "multifinance",
   "laporan keuangan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/79ea3c4bba_a6f0440120.pdf",
  "sourceLabel": "IDX"
 }
];
