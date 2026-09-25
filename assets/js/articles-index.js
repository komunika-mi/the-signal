// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "bike-publex-insidentil-akuisisi-tambang-masih-buram",
  "category": "Aksi Korporasi",
  "title": "BIKE Publex Insidentil, [Akuisisi] Tambang Masih Buram",
  "deck": "Public expose insidentil BIKE menjawab pertanyaan investor, tapi harga, sumber dana, dan penjual akuisisi 6 anak usaha dan tambang 27.786 hektare tetap tidak diungkap.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "Public Expose",
   "Akuisisi Tambang",
   "Keterbukaan Informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5a88a287dc_616081b969.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgra-rilis-rencana-pemulihan-suspensi-via-private-placement",
  "category": "Aksi Korporasi",
  "title": "TGRA Rilis Rencana Pemulihan Suspensi via [Private Placement]",
  "deck": "Terregra Asia Energy menggandeng dua investor baru lewat private placement untuk mendanai proyek PLTMH yang mandek dan keluar dari suspensi saham, dengan RUPSLB dijadwalkan Desember 2026.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "suspensi saham",
   "private placement",
   "PLTMH"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a924068cac_1c6f6c61e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-direksi-thomas-alim-beli-250-000-saham-baru",
  "category": "Aksi Korporasi",
  "title": "ASII: Direksi Thomas Alim [beli] 250.000 saham baru",
  "deck": "Direksi ASII Thomas Junaidi Alim W membeli 250.000 saham pada 23 September 2026, menambah kepemilikannya menjadi 1.657.800 lembar dan hak suara menjadi 0,0041 persen.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "kepemilikan saham",
   "direksi",
   "insider trading"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-25092026-1259-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-94-9-persen-pemda-sudah-digital-transaksi-keuangan",
  "category": "Perbankan",
  "title": "BI: 94,9 Persen Pemda Sudah [Digital] Transaksi Keuangan",
  "deck": "Bank Indonesia mencatat 518 dari 546 pemerintah daerah kini bertransaksi secara digital, dipaparkan dalam ajang FEKDI x IFSE 2026 di Jakarta.",
  "date": "25 September 2026",
  "image": "assets/img/bi-94-9-persen-pemda-sudah-digital-transaksi-keuangan.jpg",
  "imageV": "mugml6r6",
  "tags": [
   "Bank Indonesia",
   "digitalisasi daerah",
   "ETPD",
   "QRIS"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2820026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "swat-raih-opini-wdp-total-aset-susut-jadi-rp394-m",
  "category": "Aksi Korporasi",
  "title": "SWAT Raih Opini [WDP], Total Aset Susut jadi Rp394 M",
  "deck": "Auditor memberi opini wajar dengan pengecualian pada laporan keuangan 2025 SWAT gara-gara selisih catatan pinjaman bank, sementara kas dan total aset perusahaan menyusut.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "opini audit",
   "laporan keuangan",
   "watchlist BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202509/20260925141118-64435-0/FinancialStatement-2025-Tahunan-SWAT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-right-issue-rp4-1-triliun-bakrie-grup-perkuat-kendali-dilusi",
  "category": "Aksi Korporasi",
  "title": "ENRG Right Issue Rp4,1 Triliun, Bakrie Grup Perkuat Kendali [Dilusi]",
  "deck": "OJK menyatakan efektif rights issue IV ENRG senilai Rp4,12 triliun, dengan Bakrie Kalila Investment dan Bakrie Capital Indonesia bertindak sebagai pembeli siaga dan memperbesar kepemilikan mereka.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "rights issue",
   "Bakrie Group",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c9e2b9d487_2eb3070d25.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tebe-gelar-paparan-publik-insidentil-usai-diminta-bursa",
  "category": "Aksi Korporasi",
  "title": "TEBE Gelar Paparan Publik [Insidentil] usai Diminta Bursa",
  "deck": "Bursa meminta Dana Brata Luhur (TEBE) menggelar paparan publik insidentil pada 1 Oktober 2026 untuk menjelaskan pergerakan harga sahamnya, selain kinerja dan rencana bisnis.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEBE",
   "Dana Brata Luhur",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/616ca18253_66b33bd144.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emmi-tegaskan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "EMMI Tegaskan Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "PT Esa Medika Mandiri Tbk menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMMI",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9fcef7b7f6_d2adf69871.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "putrasakti-mandiri-jual-1-juta-saham-kdtn-restrukturisasi-grup",
  "category": "Aksi Korporasi",
  "title": "Putrasakti Mandiri Jual [1 Juta] Saham KDTN, Restrukturisasi Grup",
  "deck": "Putrasakti Mandiri melepas 1 juta saham KDTN pada 8 September 2026 seharga Rp421 per saham dalam rangka restrukturisasi kepemilikan di dalam kelompok usaha, hak suaranya turun tipis ke 32,07 persen.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "kepemilikan saham",
   "pemegang saham",
   "restrukturisasi grup usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-25092026-6215-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arii-jawab-permintaan-bursa-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "ARII Jawab Permintaan Bursa soal [Volatilitas] Saham",
  "deck": "Atlas Resources Tbk menjawab surat BEI soal volatilitas transaksi sahamnya dan menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARII",
   "Atlas Resources",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4197919e0b_62a3cf53de.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "raam-direksi-tambah-saham-senilai-rp160-juta",
  "category": "Aksi Korporasi",
  "title": "RAAM: Direksi [Tambah] Saham Senilai Rp160 Juta",
  "deck": "Ram Jethmal Punjabi, direksi RAAM, membeli 918.300 saham tidak langsung senilai sekitar Rp160 juta pada 23-24 September 2026, hak suaranya naik tipis ke 68,83%.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAAM",
   "Tripar Multivision",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-25092026-6067-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penebusan-pupuk-subsidi-tembus-69-dari-alokasi-2026",
  "category": "BUMN",
  "title": "Penebusan Pupuk Subsidi Tembus [69%] dari Alokasi 2026",
  "deck": "Pupuk Indonesia melaporkan realisasi penebusan pupuk bersubsidi 6,77 juta ton, atau 69 persen dari alokasi 2026, sementara HET turun 20 persen sejak Oktober 2025.",
  "date": "25 September 2026",
  "image": "assets/img/penebusan-pupuk-subsidi-tembus-69-dari-alokasi-2026.jpg",
  "imageV": "mugh752m",
  "tags": [
   "pupuk subsidi",
   "Pupuk Indonesia",
   "Hari Tani Nasional",
   "HET pupuk"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/885/hari-tani-pupuk-indonesia-tegaskan-petani-sebagai-prioritas-lewat-pupuk-terjangkau-dan-mudah-diakses",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "truk-prk-tawar-tender-sukarela-rp740-incar-kendali-30",
  "category": "Aksi Korporasi",
  "title": "TRUK: PRK Tawar [Tender] Sukarela Rp740, Incar Kendali 30%",
  "deck": "PT Pukul Rata Kanan menawar beli maksimal 65,25 juta saham (15%) TRUK seharga Rp740 per saham untuk menambah kepemilikannya jadi 30% dan menjadi pengendali baru.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "tender offer",
   "Pukul Rata Kanan",
   "pengendali saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d8993be833_9055573639.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-ke-rp2-590-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] ke Rp2.590.000 per Gram",
  "deck": "Harga emas Antam turun Rp15.000 menjadi Rp2.590.000 per gram, sementara harga buyback ikut turun ke Rp2.415.000 per gram.",
  "date": "25 September 2026",
  "image": "assets/img/harga-emas-antam-turun-ke-rp2-590-000-per-gram.jpg",
  "imageV": "mugh75k9",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469278-harga-emas-antam-hari-ini-25-september-2026-rp2590000-per-gram-turun-rp15000"
 },
 {
  "slug": "dr-rhb-sekuritas-setop-market-making-waran-kendala-teknis",
  "category": "Aksi Korporasi",
  "title": "DR: RHB Sekuritas Setop [Market Making] Waran, Kendala Teknis",
  "deck": "RHB Sekuritas Indonesia menghentikan sementara kegiatan market making pada seluruh waran terstruktur terbitannya sejak pukul 09:00 WIB hari ini akibat masalah teknis.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "RHB Sekuritas",
   "market making",
   "waran terstruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ec01eeebee_8027bc316e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-tender-sukarela-digital-edge-baru-serap-4-8-saham-publik",
  "category": "Aksi Korporasi",
  "title": "EDGE: [Tender Sukarela] Digital Edge Baru Serap 4,8% Saham Publik",
  "deck": "Digital Edge (Hong Kong) Ltd baru membeli 7,71 juta dari 159,6 juta saham publik PT Indointernet lewat tender sukarela dalam tiga periode penyelesaian sejak Agustus 2026.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "tender sukarela",
   "Digital Edge",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cef341ca40_09015df212.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "epac-ajukan-buyback-rp20-m-dan-rights-issue-2-miliar-saham-ke-rupslb",
  "category": "Aksi Korporasi",
  "title": "EPAC Ajukan Buyback Rp20 M dan [Rights Issue] 2 Miliar Saham ke RUPSLB",
  "deck": "RUPSLB EPAC pada 3 November 2026 akan meminta persetujuan pemegang saham untuk buyback saham hingga Rp20 miliar dan penerbitan saham baru lewat rights issue hingga 2 miliar lembar.",
  "date": "25 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EPAC",
   "rights issue",
   "buyback saham",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c86c59ff15_2985c17172.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kecelakaan-kerja-turun-drastis-kemnaker-dorong-higiene-industri",
  "category": "Ketenagakerjaan",
  "title": "Kecelakaan Kerja [Turun] Drastis, Kemnaker Dorong Higiene Industri",
  "deck": "Data BPJS Ketenagakerjaan menunjukkan kasus kecelakaan kerja turun jadi 319.224 pada 2025, Wamenaker Afriansyah Noor dorong penerapan higiene industri di tempat kerja.",
  "date": "24 September 2026",
  "image": "assets/img/bursa-kerja.jpg",
  "tags": [
   "K3",
   "Kecelakaan Kerja",
   "Kemnaker",
   "Higiene Industri"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/wamenaker-higiene-industri-penting-cegah-kecelakaan-kerja",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "transaksi-nontunai-pemda-rp165-triliun-kki-meluas-ke-e-katalog",
  "category": "Teknologi",
  "title": "Transaksi Nontunai Pemda Rp165 Triliun, KKI Meluas ke [E-Katalog]",
  "deck": "Kartu Kredit Indonesia bisa dipakai di e-katalog nasional mulai Oktober 2026, seiring transaksi nontunai pemerintah daerah tembus Rp165 triliun pada semester I 2026.",
  "date": "24 September 2026",
  "image": "assets/img/server-data.jpg",
  "tags": [
   "ekonomi digital",
   "KKI",
   "e-katalog",
   "QRIS"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7113/perkuat-sinergi-dan-inovasi-pemerintah-dorong-akselerasi-ekonomi-keuangan-digital-untuk-dukung-pertumbuhan-ekonomi-nasional",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ri-genjot-ekspor-furnitur-kurangi-ketergantungan-ke-as",
  "category": "Industri",
  "title": "RI Genjot Ekspor Furnitur, Kurangi [Ketergantungan] ke AS",
  "deck": "Pemerintah mendorong industri furnitur nasional memperluas pasar ekspor di IFFINA+ 2026, karena 60 persen ekspor masih bertumpu ke Amerika Serikat meski sektor ini surplus sejak 2021.",
  "date": "24 September 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "furnitur",
   "ekspor",
   "industri manufaktur",
   "IKM"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7112/menko-airlangga-dorong-industri-furnitur-perluas-pasar-dan-perkuat-daya-saing-global",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bmas-koreksi-laporan-dana-rights-issue-rp1-7-triliun",
  "category": "Aksi Korporasi",
  "title": "BMAS [koreksi] laporan dana rights issue Rp1,7 triliun",
  "deck": "Bank Kasikorn Indonesia mengoreksi laporan realisasi dana rights issue 2022. Penyaluran kredit sudah tercapai penuh, sisa Rp106,3 miliar ditempatkan di SRBI.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "rights issue",
   "penggunaan dana",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/712432df51_af31636748.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-paparkan-rencana-pulihkan-ekuitas-negatif-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "WSBP Paparkan Rencana Pulihkan [Ekuitas] Negatif ke Bursa",
  "deck": "WSBP mengajukan rencana pemulihan ekuitas negatif ke BEI, mulai dari konversi utang jadi saham hingga penagihan piutang macet lewat kejaksaan.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "Waskita Beton Precast",
   "suspensi saham",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c044712698_4635a9c4fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-berpotensi-tunda-pembayaran-kupon-obligasi-i-dan-ii-2022",
  "category": "Aksi Korporasi",
  "title": "WSBP Berpotensi Tunda Pembayaran [Kupon] Obligasi I dan II 2022",
  "deck": "WSBP mengaku berpotensi menunda pembayaran kupon ke-8 obligasi I dan II 2022 yang jatuh tempo 25 September 2026 karena kas untuk bayar utang tidak mencukupi.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "obligasi",
   "kupon obligasi",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a4125638f5_bbaa639855.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pray-tak-ada-fakta-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "PRAY: Tak Ada [Fakta Material] di Balik Volatilitas Saham",
  "deck": "Famon Awal Bros Sedaya menjawab permintaan penjelasan BEI soal gejolak transaksi sahamnya, menegaskan tak ada informasi material maupun rencana aksi korporasi yang disembunyikan.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRAY",
   "Famon Awal Bros Sedaya",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/debeb6a201_afd04e1cf8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "merger-elnusa-pdsi-diwarnai-alarm-privatisasi-terselubung",
  "category": "BUMN",
  "title": "Merger Elnusa-PDSI Diwarnai Alarm [Privatisasi] Terselubung",
  "deck": "Wacana penggabungan PDSI ke Elnusa memicu peringatan serikat pekerja Pertamina soal potensi privatisasi terselubung aset pengeboran negara.",
  "date": "24 September 2026",
  "image": "assets/img/merger-elnusa-pdsi-diwarnai-alarm-privatisasi-terselubung.jpg",
  "imageV": "mufl6j1q",
  "tags": [
   "Elnusa",
   "PDSI",
   "Pertamina",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469156-wacana-merger-elnusa-dan-pdsi-serikat-pekerja-pertamina-ingatkan-potensi-privatisasi-terselubung"
 },
 {
  "slug": "moya-jelaskan-ke-bursa-pinjaman-naik-rp1-19-triliun",
  "category": "Aksi Korporasi",
  "title": "MOYA Jelaskan ke Bursa, [Pinjaman] Naik Rp1,19 Triliun",
  "deck": "PT Moya Indonesia (MOYA) menjawab permintaan penjelasan BEI atas laporan keuangan paruh pertama 2026, dari pelunasan piutang pihak berelasi hingga kenaikan pinjaman untuk proyek air minum.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MOYA",
   "laporan keuangan",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e0933d3562_46ed7dd7f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-13-4-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama Tambah [13,4 Juta] Saham",
  "deck": "Pemegang saham Impack Pratama Industri (IMPC) membeli 13,4 juta saham tambahan dalam dua transaksi akhir September, melanjutkan pola akumulasi bertahap sepekan terakhir.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "pemegang saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-8391-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-ekonomi-digital-ri-tumbuh-40-agustus-2026",
  "category": "Moneter",
  "title": "Transaksi Ekonomi Digital RI [Tumbuh] 40% Agustus 2026",
  "deck": "Bank Indonesia mencatat transaksi ekonomi digital naik 40,36 persen pada Agustus 2026, ditopang perluasan QRIS dan BI-FAST, sementara inflasi tetap dalam target.",
  "date": "24 September 2026",
  "image": "assets/img/transaksi-ekonomi-digital-ri-tumbuh-40-agustus-2026.jpg",
  "imageV": "muffq7qm",
  "tags": [
   "ekonomi digital",
   "QRIS",
   "BI-FAST",
   "inflasi"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "wskt-kena-suspensi-lanjutan-bei-gagal-bayar-pokok-obligasi",
  "category": "Aksi Korporasi",
  "title": "WSKT Kena [Suspensi] Lanjutan BEI, Gagal Bayar Pokok Obligasi",
  "deck": "BEI melanjutkan penghentian perdagangan saham WSKT di seluruh pasar sejak Kamis, setelah perseroan menunda pembayaran pokok Obligasi III Seri A yang jatuh tempo 24 September 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "suspensi saham",
   "gagal bayar obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5fe814b4b9_8d4803084a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-akses-rapikan-kabel-jaringan-di-banten",
  "category": "Teknologi",
  "title": "Telkom Akses Rapikan Kabel Jaringan di [Banten]",
  "deck": "Telkom Akses menemui Gubernur Banten Andra Soni untuk membahas penataan kabel dan infrastruktur digital yang dipakai bersama banyak operator jaringan.",
  "date": "24 September 2026",
  "image": "assets/img/telkom-akses-rapikan-kabel-jaringan-di-banten.jpg",
  "imageV": "muffq86k",
  "tags": [
   "Telkom Akses",
   "Banten",
   "infrastruktur digital",
   "penataan kabel"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469151-temui-gubernur-banten-andra-soni-telkom-akses-dorong-penguatan-dan-penataan-infrastruktur-digital"
 },
 {
  "slug": "bnii-hasnita-dato-hashim-resmi-jadi-komisaris-bank-maybank",
  "category": "Aksi Korporasi",
  "title": "BNII: Hasnita Dato Hashim Resmi Jadi [Komisaris] Bank Maybank",
  "deck": "OJK menyetujui Dr Hasnita Dato Hashim sebagai komisaris baru Bank Maybank Indonesia, efektif 23 September 2026, melengkapi hasil keputusan RUPST April 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNII",
   "Bank Maybank Indonesia",
   "Komisaris",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bb46bb9686_3eaacbc352.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpin-ubs-jual-4-juta-saham-untuk-lindung-nilai-derivatif",
  "category": "Aksi Korporasi",
  "title": "CPIN: UBS [Jual] 4 Juta Saham untuk Lindung Nilai Derivatif",
  "deck": "UBS AG London Branch melepas 4,04 juta saham CPIN pada 21 September senilai Rp3.132 per saham untuk lindung nilai transaksi derivatif nasabahnya.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPIN",
   "UBS",
   "kepemilikan saham",
   "derivatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-5504-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibos-panggil-rupslb-sahkan-laporan-keuangan-2023-direvisi",
  "category": "Aksi Korporasi",
  "title": "IBOS Panggil RUPSLB, Sahkan Laporan Keuangan [2023] Direvisi",
  "deck": "IBOS memanggil RUPSLB pada 16 Oktober 2026 untuk mengesahkan laporan keuangan 2023 yang direvisi, mengubah anggaran dasar, dan menyesuaikan pemegang saham sesuai catatan BAE.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBOS",
   "RUPSLB",
   "laporan keuangan",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a9702c2589_606bbf7b1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-keluar-dari-pemantauan-khusus-bei-ke-papan-pengembangan",
  "category": "Aksi Korporasi",
  "title": "TRUK Keluar dari [Pemantauan Khusus] BEI, Ke Papan Pengembangan",
  "deck": "Bursa Efek Indonesia mencabut status pemantauan khusus saham TRUK milik PT Guna Timur Raya Tbk, efektif 25 September 2026, setelah kondisi pemicunya sudah tidak terpenuhi.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "BEI",
   "pemantauan khusus",
   "papan pencatatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b075c46c80_b69cff2d73.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nicl-bagikan-dividen-interim-rp6-per-saham-total-rp63-8-m",
  "category": "Aksi Korporasi",
  "title": "NICL Bagikan [Dividen] Interim Rp6 per Saham, Total Rp63,8 M",
  "deck": "PAM Mineral (NICL) menetapkan dividen interim Rp6 per saham, total Rp63,8 miliar untuk tahun buku 2026. Recording date 6 Oktober, pembayaran paling lambat 14 Oktober 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICL",
   "dividen interim",
   "PAM Mineral",
   "tambang nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e6430a0771_eaaa9129b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpix-jawab-bursa-pinjaman-rp8-miliar-bunga-16-persen-beli-tanah",
  "category": "Aksi Korporasi",
  "title": "MPIX Jawab Bursa: Pinjaman Rp8 Miliar Bunga [16 Persen] Beli Tanah",
  "deck": "MPIX menjelaskan ke BEI soal kredit investasi Rp8 miliar berbunga 16 persen dari BPR Bank Kertiawan untuk membeli tanah dan bangunan pusat pelatihan di Kota Batu, dengan agunan yang masih dalam proses balik nama.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPIX",
   "BEI",
   "kredit bank",
   "MPStore"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6006e3c925_4c59fbc56a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-jelaskan-ke-bursa-uang-muka-melonjak-1-198-untuk-mesin",
  "category": "Aksi Korporasi",
  "title": "PART Jelaskan ke Bursa: Uang Muka Melonjak [1.198%] untuk Mesin",
  "deck": "PT Cipta Perdana Lancar (PART) menjawab pertanyaan Bursa Efek Indonesia soal lonjakan uang muka pembelian mesin dan kenaikan piutang usaha dalam laporan keuangan semester I 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "laporan keuangan",
   "piutang usaha",
   "investasi mesin"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ce8a5b7016_3bade85bcf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-tambah-784-100-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [tambah] 784.100 saham",
  "deck": "Edwin Soeryadjaya membeli 784.100 saham SRTG pada 22-23 September 2026, menaikkan hak suaranya tipis ke 35,96 persen.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "kepemilikan saham",
   "komisaris",
   "Edwin Soeryadjaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-4856-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-jelaskan-ke-bursa-dampak-pmthmetd-roe-turun-19-6",
  "category": "Aksi Korporasi",
  "title": "UVCR Jelaskan ke Bursa Dampak [PMTHMETD]: ROE Turun 19,6%",
  "deck": "UVCR menjawab permintaan penjelasan BEI soal rencana 200 juta saham baru tanpa hak memesan efek dahulu, yang menurunkan ROE dan EPS, seluruhnya untuk pemegang saham pengendali.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "PMTHMETD",
   "free float",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/964fd2442d_bee248076d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pupuk-indonesia-salurkan-67-pupuk-subsidi-jelang-tanam",
  "category": "BUMN",
  "title": "Pupuk Indonesia Salurkan [67%] Pupuk Subsidi Jelang Tanam",
  "deck": "Hingga 16 September 2026, Pupuk Indonesia menyalurkan 6,64 juta ton pupuk subsidi atau 67 persen dari jatah 9,8 juta ton tahun ini, menjelang musim tanam Oktober-Maret.",
  "date": "24 September 2026",
  "image": "assets/img/pupuk-indonesia-salurkan-67-pupuk-subsidi-jelang-tanam.jpg",
  "imageV": "muf8a6hd",
  "tags": [
   "pupuk subsidi",
   "musim tanam",
   "Pupuk Indonesia",
   "BUMN"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/884/kesiapan-pasokan-pupuk-jelang-musim-tanam",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "asean-perkuat-kerja-sama-dagang-dengan-ue-inggris-rusia",
  "category": "Global",
  "title": "ASEAN [Perkuat] Kerja Sama Dagang dengan UE, Inggris, Rusia",
  "deck": "Wakil Menteri Perdagangan Dyah Roro Esti mendorong penguatan kerja sama ekonomi ASEAN dengan Inggris, Uni Eropa, dan Rusia dalam pertemuan di Filipina, 17-22 September 2026.",
  "date": "24 September 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "ASEAN",
   "Kementerian Perdagangan",
   "Uni Eropa",
   "Rusia"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-dorong-penguatan-ketahanan-dan-daya-saing-ekonomi-kawasan-pada-rangkaian-pertemuan-asean-dengan-mitra",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "nsss-direksi-lepas-1-99-miliar-saham-repo-suara-ke-16-20",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi [Lepas] 1,99 Miliar Saham Repo, Suara ke 16,20%",
  "deck": "Direksi NSSS Samuel Tumbuh Bersama melepas 1,99 miliar saham lewat perjanjian repo untuk dipinjamkan, hak suaranya turun dari 24,57 persen menjadi 16,20 persen.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "repo saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-4545-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zone-bukukan-laba-rp27-8-miliar-utang-bank-turun-tajam",
  "category": "Aksi Korporasi",
  "title": "ZONE Bukukan [Laba] Rp27,8 Miliar, Utang Bank Turun Tajam",
  "deck": "Laba bersih PT Mega Perintis (ZONE) melonjak 138 persen jadi Rp27,8 miliar pada semester I 2026, ditopang penjualan naik 35 persen dan pelunasan sebagian utang bank.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZONE",
   "Mega Perintis",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260924142909-64419-0/FinancialStatement-2026-II-ZONE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apii-koreksi-laporan-keuangan-laba-pemegang-saham-turun-22-7",
  "category": "Aksi Korporasi",
  "title": "APII Koreksi Laporan Keuangan, [Laba Pemegang Saham] Turun 22,7%",
  "deck": "Laporan keuangan interim semester I 2026 yang dikoreksi menunjukkan penjualan APII naik 9,5 persen, tapi laba untuk pemegang saham utama turun 22,7 persen.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APII",
   "laporan keuangan",
   "laba per saham",
   "kepentingan nonpengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260924143012-64425-0/FinancialStatement-2026-II-APII.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-investindo-arya-beli-500-000-saham-tambahan",
  "category": "Aksi Korporasi",
  "title": "TAPG: Investindo Arya [Beli] 500.000 Saham Tambahan",
  "deck": "PT Investindo Arya, entitas yang menduduki kursi Dewan Komisaris TAPG, membeli 500.000 saham tambahan pada 23 September 2026 seharga Rp1.999 per saham.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-7754-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpro-ralat-realisasi-dana-ipo-alokasi-ke-simprug-bergeser",
  "category": "Aksi Korporasi",
  "title": "MPRO Ralat Realisasi Dana IPO, Alokasi ke [Simprug] Bergeser",
  "deck": "PT Maha Properti Indonesia mengoreksi laporan realisasi dana IPO 2018: dana yang semula direncanakan 80 persen untuk Proyek Simprug Signature ternyata hanya terealisasi 15 persen.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPRO",
   "IPO",
   "penggunaan dana",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8da9248489_db181d011c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "panas-bumi-kamojang-diolah-petani-jadi-pupuk-hemat-rp82-juta",
  "category": "Energi",
  "title": "Panas Bumi Kamojang Diolah Petani Jadi Pupuk, [Hemat] Rp82 Juta",
  "deck": "Petani di Kamojang memanfaatkan uap panas bumi Pertamina untuk mempercepat pengeringan pupuk organik dari 14 hari jadi 12 jam, dan menekan biaya produksi hingga puluhan juta rupiah.",
  "date": "24 September 2026",
  "image": "assets/img/panas-bumi-kamojang-diolah-petani-jadi-pupuk-hemat-rp82-juta.jpg",
  "imageV": "muf8a6zw",
  "tags": [
   "Pertamina Geothermal",
   "Kamojang",
   "Hari Tani Nasional",
   "Pupuk Organik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469064-hari-tani-nasional-dari-energi-terbarukan-tumbuh-pangan-dan-kemandirian-petani"
 },
 {
  "slug": "kapasitas-pelabuhan-naik-simpul-logistik-darat-perlu-dikuatkan",
  "category": "Industri",
  "title": "Kapasitas Pelabuhan Naik, Simpul [Logistik] Darat Perlu Dikuatkan",
  "deck": "Peneliti UGM dan praktisi ITL Trisakti menilai percepatan bongkar muat di pelabuhan tak berdampak maksimal jika depo, gudang, jalan, dan sistem distribusi darat tak berkembang setara.",
  "date": "24 September 2026",
  "image": "assets/img/kapasitas-pelabuhan-naik-simpul-logistik-darat-perlu-dikuatkan.jpg",
  "imageV": "muf8a7fl",
  "tags": [
   "pelabuhan",
   "logistik",
   "odol",
   "pelayaran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469059-kapasitas-pelabuhan-naik-ekosistem-logistik-darat-diperkuat"
 },
 {
  "slug": "hrta-panggil-rupslb-minta-restu-terbitkan-saham-dilusi-10",
  "category": "Aksi Korporasi",
  "title": "HRTA Panggil RUPSLB, Minta Restu Terbitkan Saham [Dilusi] 10%",
  "deck": "HRTA menggelar RUPSLB pada 16 Oktober 2026 untuk meminta persetujuan pemegang saham independen atas rencana penerbitan saham baru hingga 10 persen tanpa hak memesan efek lebih dulu.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "RUPSLB",
   "PMTHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a166f65239_167f1f1625.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-hong-kong-sepakati-kerja-sama-pembayaran-qr-lintas-negara",
  "category": "Moneter",
  "title": "BI-Hong Kong Sepakati Kerja Sama Pembayaran [QR] Lintas Negara",
  "deck": "Bank Indonesia dan otoritas moneter Hong Kong menandatangani nota kesepahaman untuk membangun sistem pembayaran QR code lintas negara antara kedua wilayah.",
  "date": "24 September 2026",
  "image": "assets/img/bi-hong-kong-sepakati-kerja-sama-pembayaran-qr-lintas-negara.jpg",
  "imageV": "muf2vtmi",
  "tags": [
   "Bank Indonesia",
   "QRIS",
   "Hong Kong",
   "Pembayaran Digital"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dpns-kena-sanksi-rp150-juta-telat-sampaikan-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "DPNS Kena [Sanksi] Rp150 Juta Telat Sampaikan Laporan Keuangan",
  "deck": "BEI menjatuhkan Peringatan Tertulis III dan denda Rp150 juta ke DPNS karena belum menyampaikan laporan keuangan interim audited Triwulan I 2026 hingga 29 Agustus 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPNS",
   "sanksi BEI",
   "laporan keuangan",
   "Duta Pertiwi Nusantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac8c0c6221_66eda0f66f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-dan-kementerian-umkm-luncurkan-program-laksmi-2026",
  "category": "UMKM",
  "title": "PNM dan Kementerian UMKM [Luncurkan] Program Laksmi 2026",
  "deck": "Kementerian UMKM dan PNM luncurkan Program Laksmi 2026 di Surabaya, program pendampingan usaha mikro perempuan penerima PKH menuju kemandirian ekonomi.",
  "date": "24 September 2026",
  "image": "assets/img/pnm-dan-kementerian-umkm-luncurkan-program-laksmi-2026.jpg",
  "imageV": "muf2vu4r",
  "tags": [
   "PNM",
   "Program Laksmi 2026",
   "Kementerian UMKM",
   "PKH"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469046-pnm-bersama-kementerian-umkm-luncurkan-program-laksmi-perkuat-sinergi-pemberdayaan-usaha-mikro-perempuan"
 },
 {
  "slug": "hsb-investasi-klaim-17-juta-unduhan-aplikasi-trading",
  "category": "Bisnis",
  "title": "HSB Investasi Klaim [17 Juta] Unduhan Aplikasi Trading",
  "deck": "HSB Investasi melaporkan lebih dari 17 juta unduhan aplikasi trading forex dan komoditasnya sejak 2018, didukung izin BAPPEBTI, OJK, dan BI.",
  "date": "24 September 2026",
  "image": "assets/img/hsb-investasi-klaim-17-juta-unduhan-aplikasi-trading.jpg",
  "imageV": "muf2vukc",
  "tags": [
   "HSB Investasi",
   "aplikasi trading",
   "BAPPEBTI",
   "forex"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469044-aplikasi-trading-terbaik-di-indonesia-mengapa-hsb-investasi-layak-jadipilihan"
 },
 {
  "slug": "bike-tunda-rupslb-ojk-minta-penjelasan-agenda-rapat",
  "category": "Aksi Korporasi",
  "title": "BIKE Tunda RUPSLB, [OJK] Minta Penjelasan Agenda Rapat",
  "deck": "RUPSLB BIKE yang sedianya digelar 15 Oktober 2026 ditunda tanpa jadwal pengganti, menyusul surat OJK yang mempersoalkan mata acara rapat.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "RUPSLB",
   "OJK",
   "Bhineka Inovasi Ketahanan Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/93f5c549f5_83aaaf32a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-rinci-jaminan-utang-rp10-75-t-ke-bni-untuk-nac-ngc",
  "category": "Aksi Korporasi",
  "title": "MGLV Rinci [Jaminan] Utang Rp10,75 T ke BNI untuk NAC-NGC",
  "deck": "Perseroan membuka rincian fasilitas pinjaman Rp10,75 triliun dari BNI ke anak usaha NAC dan NGC, lengkap dengan jaminan perusahaan dan jaminan aset, tanpa memerlukan persetujuan RUPS.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "transaksi material",
   "utang",
   "BNI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/23e766b1a0_bc0a6dc4b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-350-000-saham-tiga-hari-beruntun",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 350.000 Saham, Tiga Hari Beruntun",
  "deck": "Komisaris AKPI Henry Liem kembali menjual 350.000 saham pada 23 September 2026, hari ketiga beruntun ia melepas saham perseroan.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-2165-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-tunda-rupslb-lagi-mundur-ke-2-november-2026",
  "category": "Aksi Korporasi",
  "title": "WIFI [Tunda] RUPSLB Lagi, Mundur ke 2 November 2026",
  "deck": "Solusi Sinergi Digital menunda jadwal RUPSLB untuk ketiga kalinya, dari rencana semula 11 September menjadi 2 November 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "RUPSLB",
   "Solusi Sinergi Digital",
   "jadwal rapat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/95a4b25ca4_6497e200eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bptr-beber-ke-bursa-pemegang-saham-utama-terus-beli-saham",
  "category": "Aksi Korporasi",
  "title": "BPTR Beber ke Bursa, Pemegang Saham Utama Terus [Beli] Saham",
  "deck": "BPTR menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, dan menyebut pemegang saham utama masih membeli saham di pasar untuk tujuan investasi.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPTR",
   "volatilitas saham",
   "free float",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9d9bedd04e_3801b287c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-864-tertekan-lonjakan-harga-minyak",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.864, Tertekan Lonjakan Harga Minyak",
  "deck": "Nilai tukar rupiah turun 0,26 persen dipicu lonjakan harga minyak akibat ketegangan Iran-AS dan ekspektasi kenaikan suku bunga The Fed.",
  "date": "24 September 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-864-tertekan-lonjakan-harga-minyak.jpg",
  "imageV": "muf2vv92",
  "tags": [
   "rupiah",
   "dolar AS",
   "harga minyak",
   "The Fed"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469033-rupiah-melemah-ke-rp17864-per-dolar-as-dipengaruhi-harga-minyak-yang-kembali-melonjak"
 },
 {
  "slug": "ppgl-komisaris-divestasi-175-8-juta-saham-hak-suara-nol",
  "category": "Aksi Korporasi",
  "title": "PPGL: Komisaris [Divestasi] 175,8 Juta Saham, Hak Suara Nol",
  "deck": "Komisaris PPGL, Jap Astrid Patricia, melepas seluruh 175,8 juta sahamnya senilai sekitar Rp59,33 miliar dalam delapan tahap, membuat hak suaranya turun dari 22,80 persen menjadi nol.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "Jap Astrid Patricia",
   "Divestasi Saham",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-3452-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pmui-beli-34-saham-main-dealer-motor-listrik-vinfast",
  "category": "Aksi Korporasi",
  "title": "PMUI Beli [34%] Saham Main Dealer Motor Listrik VinFast",
  "deck": "PMUI mengakuisisi 34 persen saham PT Green Scooter Indonesia, main dealer motor listrik VinFast di Jawa Barat, tanpa mengambil alih kendali perusahaan itu.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PMUI",
   "akuisisi saham",
   "motor listrik",
   "VinFast"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6151a80a69_74661618cb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-hari-ini-turun-jadi-rp2-605-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam Hari Ini [Turun] Jadi Rp2.605.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp25.000 jadi Rp2.605.000 per gram hari ini, sementara harga buyback ikut turun ke Rp2.435.000 per gram.",
  "date": "24 September 2026",
  "image": "assets/img/harga-emas-antam-hari-ini-turun-jadi-rp2-605-000-gram.jpg",
  "imageV": "muf2vvq0",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/469025-harga-emas-antam-hari-ini-24-september-2026-turun-rp25000-jadi-rp2605000-per-gram"
 },
 {
  "slug": "mrat-direksi-beli-12-500-saham-senilai-rp4-5-juta",
  "category": "Aksi Korporasi",
  "title": "MRAT: Direksi Beli [12.500] Saham Senilai Rp4,5 Juta",
  "deck": "Direksi Mustika Ratu, Jodi Andrea Suryo Kusumo, membeli 12.500 saham perusahaan dalam dua transaksi pada 21 dan 22 September 2026.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MRAT",
   "Mustika Ratu",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-7659-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-top-up-saham-repo-suara-ke-22-51",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi [Top-Up] Saham Repo, Suara ke 22,51%",
  "deck": "Samuel Sekuritas Indonesia selaku direksi NSSS menambah 207,3 juta saham lewat top up perjanjian repo, mengerek hak suara dari 21,64% menjadi 22,51%.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "kepemilikan direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24092026-4495-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-tawarkan-obligasi-rp1-triliun-dan-sukuk-rp676-63-miliar",
  "category": "Aksi Korporasi",
  "title": "LPPI Tawarkan [Obligasi] Rp1 Triliun dan Sukuk Rp676,63 Miliar",
  "deck": "LPPI merilis informasi tambahan penerbitan obligasi tahap IV senilai maksimal Rp1 triliun dan sukuk mudharabah maksimal Rp676,63 miliar, dengan bunga tetap 10-10,5 persen per tahun.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/304c880728_e940ca23b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-saham-akku-dicabut-bei-setelah-6-bulan",
  "category": "Aksi Korporasi",
  "title": "Suspensi Saham AKKU [Dicabut] BEI Setelah 6 Bulan",
  "deck": "BEI mencabut suspensi saham AKKU mulai sesi keempat perdagangan Kamis, setelah laporan keuangan per 30 Juni 2026 meraih opini wajar dengan pengecualian.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "BEI",
   "opini audit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5010f349f2_57a0994d1a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bata-presiden-direktur-mundur-tunggu-keputusan-rups",
  "category": "Aksi Korporasi",
  "title": "BATA: Presiden Direktur [Mundur], Tunggu Keputusan RUPS",
  "deck": "Amitav Nandy mengundurkan diri sebagai Presiden Direktur Sepatu Bata Tbk imbas rotasi jabatan di Bata Group. Keputusan final ada di tangan RUPS.",
  "date": "24 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BATA",
   "Sepatu Bata Tbk",
   "Presiden Direktur",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/58f3cbd896_c6d5c1e69f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ruu-pelindungan-ketenagakerjaan-ditarget-sah-8-oktober-2026",
  "category": "Ketenagakerjaan",
  "title": "RUU Pelindungan Ketenagakerjaan Ditarget [Sah] 8 Oktober 2026",
  "deck": "Pemerintah dan DPR menargetkan RUU Pelindungan Ketenagakerjaan disahkan 8 Oktober 2026, dengan aturan alih daya dan usulan bantuan iuran jaminan sosial pekerja jadi sorotan.",
  "date": "24 September 2026",
  "image": "assets/img/wawancara-kerja.jpg",
  "tags": [
   "RUU Ketenagakerjaan",
   "outsourcing",
   "KSBSI",
   "Kemnaker"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/wamenaker-pengesahan-ruu-pelindungan-ketenagakerjaan-ditargetkan-8-oktober-2026",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "bike-rugi-rp19-18-m-ungkap-rencana-akuisisi-tambang-publex",
  "category": "Aksi Korporasi",
  "title": "BIKE Rugi Rp19,18 M, Ungkap Rencana Akuisisi Tambang [Publex]",
  "deck": "Materi Public Expose Insidentil BIKE ungkap rugi bersih Rp19,18 miliar di semester I 2026, sekaligus rencana akuisisi lahan tambang dan enam anak usaha.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "Public Expose",
   "Suspensi Saham",
   "Akuisisi Tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/843fd0cdbe_2e84ce55ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "the-telkom-hub-capai-status-net-zero-emisi-karbon",
  "category": "Energi",
  "title": "The Telkom Hub Capai Status [Net Zero] Emisi Karbon",
  "deck": "Telkom mengklaim kawasan The Telkom Hub capai nol emisi karbon langsung dan dari listrik lewat sertifikat energi terbarukan, bagian dari peta jalan menuju net zero emission 2060.",
  "date": "23 September 2026",
  "image": "assets/img/the-telkom-hub-capai-status-net-zero-emisi-karbon.jpg",
  "imageV": "mued3d5z",
  "tags": [
   "Telkom",
   "Net Zero Emission",
   "Energi Terbarukan",
   "Dekarbonisasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468975-the-telkom-hub-capai-net-zero-emisi-66-lokasi-pop-telkom-menggunakan-21-persen-energi-terbarukan"
 },
 {
  "slug": "wskt-gagal-lunasi-pokok-obligasi-rp722-miliar-klaim-penjaminan",
  "category": "Aksi Korporasi",
  "title": "WSKT [Gagal] Lunasi Pokok Obligasi Rp722 Miliar, Klaim Penjaminan",
  "deck": "Waskita Karya tak sanggup melunasi pokok Obligasi III 2021 Seri A senilai Rp722 miliar yang jatuh tempo 24 September 2026; wali amanat ajukan klaim penjaminan.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "obligasi",
   "gagal bayar",
   "Waskita Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/691b7db3dc_439177adf4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sema-bantah-punya-info-material-tersembunyi-usai-suspensi",
  "category": "Aksi Korporasi",
  "title": "SEMA [Bantah] Punya Info Material Tersembunyi usai Suspensi",
  "deck": "PT Semacom Integrated Tbk menjawab permintaan penjelasan Bursa terkait suspensi sahamnya, menyatakan tidak ada kontrak baru atau perkara hukum yang belum diungkapkan.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SEMA",
   "suspensi saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d4d3941fae_9750c43ad6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-dukung-reviu-perjanjian-dagang-asean-india-rampung-2026",
  "category": "Global",
  "title": "RI Dukung Reviu Perjanjian Dagang ASEAN-India [Rampung] 2026",
  "deck": "Wamendag Dyah Roro Esti menyatakan dukungan Indonesia agar reviu perjanjian dagang AITIGA dengan India rampung tahun ini, di sela pertemuan menteri ekonomi ASEAN-India di Filipina.",
  "date": "23 September 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "AITIGA",
   "ASEAN-India",
   "Kementerian Perdagangan",
   "Perdagangan Internasional"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pertemuan-konsultasi-ke-23-aem-india-indonesia-dukung-penyelesaian-aitiga-reviu-di-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "hygn-public-expose-target-laba-tumbuh-15-20-di-2026",
  "category": "Aksi Korporasi",
  "title": "HYGN Public Expose: Target Laba Tumbuh [15-20]% di 2026",
  "deck": "Manajemen Ecocare Indo Pasifik memaparkan tekanan margin 2025 akibat kenaikan UMP dan biaya rebranding, sembari menegaskan target pertumbuhan laba 15-20% tahun ini.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HYGN",
   "Ecocare Indo Pasifik",
   "Public Expose",
   "capex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2f0e9bbce7_caf25707fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsml-jadwalkan-rupslb-30-oktober-2026-di-jakarta",
  "category": "Aksi Korporasi",
  "title": "BSML Jadwalkan RUPSLB [30 Oktober 2026] di Jakarta",
  "deck": "PT Bintang Samudera Mandiri Lines Tbk mengumumkan rencana RUPSLB pada 30 Oktober 2026 di Jakarta. Pemegang saham per 7 Oktober berhak hadir dan bersuara.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSML",
   "RUPSLB",
   "Bintang Samudera Mandiri Lines",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2a8874b440_bd016b476f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-jelaskan-rugi-portofolio-rp33-m-ke-bursa-klaim-sementara",
  "category": "Aksi Korporasi",
  "title": "NICK Jelaskan Rugi Portofolio Rp33 M ke Bursa, Klaim [Sementara]",
  "deck": "PT Charnic Capital Tbk menjawab permintaan penjelasan Bursa soal kerugian portofolio saham, pendapatan anak usaha, dan penyebab kenaikan harga sahamnya.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f06552aa14_1894ac4cd8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jarr-jelaskan-ke-bursa-soal-akuisisi-byan-oleh-jhonlin-baratama",
  "category": "Aksi Korporasi",
  "title": "JARR Jelaskan ke Bursa Soal Akuisisi [BYAN] oleh Jhonlin Baratama",
  "deck": "JARR menegaskan tidak terlibat dan tidak menyediakan dana dalam rencana akuisisi saham BYAN oleh Jhonlin Baratama, meski keduanya satu grup dan punya pengendali utama yang sama.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JARR",
   "BYAN",
   "Jhonlin Baratama",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8a5245f70d_2d2702e4b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-undp-kirim-alat-dan-bibit-ke-petani-rumput-laut-sidoarjo",
  "category": "UMKM",
  "title": "KKP-UNDP Kirim Alat dan [Bibit] ke Petani Rumput Laut Sidoarjo",
  "deck": "KKP dan UNDP Indonesia memberi ekskavator, bibit unggul, dan dukungan pembiayaan ke pembudidaya rumput laut Gracilaria di Sidoarjo, sambil mendorong investasi pengolahan.",
  "date": "23 September 2026",
  "image": "assets/img/kkp-undp-kirim-alat-dan-bibit-ke-petani-rumput-laut-sidoarjo.jpg",
  "imageV": "mue5qzdx",
  "tags": [
   "rumput laut",
   "KKP",
   "UNDP",
   "Sidoarjo"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-undp-dorong-peningkatan-produksi-dan-hilirisasi-rumput-laut-gracilaria-di-sidoarjo-BPWk.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "fta-asean-kanada-ditarget-rampung-sebelum-ktt-asean",
  "category": "Global",
  "title": "FTA ASEAN-Kanada Ditarget [Rampung] Sebelum KTT ASEAN",
  "deck": "Indonesia mendorong ASEAN dan Kanada mempercepat perundingan FTA yang ditargetkan rampung sebelum KTT ASEAN awal November 2026, seiring lonjakan perdagangan dua arah kedua kawasan.",
  "date": "23 September 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "ACAFTA",
   "ASEAN-Kanada",
   "Kementerian Perdagangan",
   "Ekspor"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-dorong-percepatan-penyelesaian-perundingan-asean-canada-fta",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mglv-setor-modal-rp98-miliar-ke-afiliasi-nac-dan-ngc",
  "category": "Aksi Korporasi",
  "title": "MGLV Setor Modal Rp98 Miliar ke [Afiliasi] NAC dan NGC",
  "deck": "Perseroan menyuntik modal Rp49 miliar ke masing-masing anak usaha NAC dan NGC, total Rp98 miliar, tergolong transaksi material karena melebihi 20 persen ekuitas Perseroan.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "transaksi afiliasi",
   "penyertaan modal",
   "data center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a2755e5864_d3a1d2a224.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-jamin-utang-rp10-75-triliun-bni-ke-dua-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "MGLV [Jamin] Utang Rp10,75 Triliun BNI ke Dua Anak Usaha",
  "deck": "MGLV menandatangani fasilitas kredit BNI senilai Rp10,75 triliun untuk anak usaha NAC dan NGC, dijamin dengan corporate guarantee dari induk perusahaan, dan tergolong transaksi material sekaligus afiliasi.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "transaksi afiliasi",
   "corporate guarantee",
   "data center"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8e6ca96f45_ffbafc1bba.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "perpres-terbit-kdkmp-segera-salurkan-beras-hingga-lpg-3-kg",
  "category": "UMKM",
  "title": "Perpres Terbit, [KDKMP] Segera Salurkan Beras hingga LPG 3 Kg",
  "deck": "KSP Dudung Abdurachman menyebut Perpres 82/2026 menjadi dasar hukum bagi Koperasi Desa Merah Putih untuk mulai menyalurkan beras SPHP, LPG 3 kg, pupuk bersubsidi, dan MinyakKita ke warga.",
  "date": "23 September 2026",
  "image": "assets/img/perpres-terbit-kdkmp-segera-salurkan-beras-hingga-lpg-3-kg.jpg",
  "imageV": "mue5r04x",
  "tags": [
   "KDKMP",
   "Koperasi Merah Putih",
   "Perpres 82/2026",
   "LPG 3 Kg"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468929-ksp-dudung-ungkap-kdkmp-segera-beroperasi-beras-hingga-lpg-3-kg-jadi-pasokan-utama"
 },
 {
  "slug": "trafik-pelabuhan-pelindo-regional-2-naik-hingga-agustus-2026",
  "category": "BUMN",
  "title": "Trafik Pelabuhan Pelindo Regional 2 [Naik] hingga Agustus 2026",
  "deck": "Pelindo Regional 2 mencatat kenaikan kunjungan kapal, arus petikemas, barang, dan penumpang sepanjang Januari-Agustus 2026 dibanding periode sama tahun lalu.",
  "date": "23 September 2026",
  "image": "assets/img/trafik-pelabuhan-pelindo-regional-2-naik-hingga-agustus-2026.jpg",
  "imageV": "mue5r0mk",
  "tags": [
   "pelindo",
   "pelabuhan",
   "petikemas",
   "logistik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468933-trafik-pelabuhan-regional-2-meningkat-pelindo-catat-pertumbuhan-arus-petikemas-dan-barang-hingga-agustus-2026"
 },
 {
  "slug": "waran-koci-w-delisting-mulai-5-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "Waran KOCI-W [Delisting] Mulai 5 Oktober 2026",
  "deck": "BEI mengingatkan jadwal delisting Waran Seri I Kokoh Exa Nusantara (KOCI-W): pelaksanaan menjadi saham berakhir 5 Oktober 2026, setelah itu waran dihapus dari pencatatan bursa.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOCI",
   "KOCI-W",
   "waran",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Batas Akhir Perdagangan KOCI-W261002.-No. Peng-00176BEI.POP09-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prdl-alihkan-rp2-5-miliar-dana-ipo-ke-ahu-ruang-produksi",
  "category": "Aksi Korporasi",
  "title": "PRDL alihkan Rp2,5 miliar dana IPO ke [AHU] ruang produksi",
  "deck": "Prodia Diagnostic Line mengalihkan Rp2,5 miliar dana IPO dari rencana mesin Hematologi ke pengadaan alat pengatur suhu ruang produksi kering.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDL",
   "IPO",
   "penggunaan dana IPO",
   "alat kesehatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4af0b66823_d8e484c85e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nasi-bantah-ada-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "NASI Bantah Ada Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab surat Bursa Efek Indonesia, PT Wahana Inti Makmur menyatakan tidak ada informasi material maupun rencana aksi korporasi di balik lonjakan transaksi saham NASI belakangan ini.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NASI",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8f0c1fdf50_126eafcec5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "maxi-koreksi-laporan-realisasi-dana-ipo-rp45-miliar-tuntas",
  "category": "Aksi Korporasi",
  "title": "MAXI [koreksi] laporan realisasi dana IPO Rp45 miliar tuntas",
  "deck": "PT Maxindo Karya Anugerah mengoreksi laporan penggunaan dana IPO per 30 Juni 2026, menyatakan seluruh dana Rp45 miliar sudah terpakai untuk modal kerja, tersisa Rp150.635 di rekening BCA.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAXI",
   "penggunaan dana IPO",
   "laporan keuangan",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/006db8ce0e_205ef6d526.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemnaker-luncurkan-maganghub-batch-2-40-962-peserta-lolos",
  "category": "Ketenagakerjaan",
  "title": "Kemnaker Luncurkan [MagangHub] Batch 2, 40.962 Peserta Lolos",
  "deck": "Kemnaker memulai MagangHub Batch 2 Angkatan II dengan 40.962 peserta lolos seleksi, termasuk 15 penyandang disabilitas, untuk magang enam bulan di berbagai instansi dan sektor industri.",
  "date": "23 September 2026",
  "image": "assets/img/gudang-logistik.jpg",
  "tags": [
   "MagangHub",
   "Kemnaker",
   "pemagangan",
   "lulusan perguruan tinggi"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/kemnaker-mulai-maganghub-batch-2-sebanyak-40962-peserta-siap-ikuti-pemagangan",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "pemerintah-targetkan-pertumbuhan-ekonomi-6-pada-2027",
  "category": "Makroekonomi",
  "title": "Pemerintah Targetkan Pertumbuhan Ekonomi [6%] pada 2027",
  "deck": "Menko Airlangga menyebut investasi, produktivitas, dan ekspor bernilai tambah jadi syarat utama mengejar target pertumbuhan 6 persen pada 2027, menuju 8 persen dalam jangka menengah.",
  "date": "23 September 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "pertumbuhan ekonomi",
   "Airlangga Hartarto",
   "investasi 2027",
   "target OECD"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7109/menko-airlangga-investasi-produktivitas-dan-ekspor-bernilai-tambah-jadi-kunci-pertumbuhan-ekonomi-2027",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "asrm-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "ASRM: Tak Ada Info Material di Balik Volatilitas [Saham]",
  "deck": "Menjawab permintaan penjelasan BEI, Asuransi Ramayana Tbk memastikan tidak ada informasi material atau rencana aksi korporasi di balik pergerakan transaksi sahamnya.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASRM",
   "Asuransi Ramayana",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/05fa73a498_31131d121c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asli-wahana-konstruksi-mandiri-tambah-saham-ke-52",
  "category": "Aksi Korporasi",
  "title": "ASLI: Wahana Konstruksi Mandiri [Tambah] Saham ke 52%",
  "deck": "Wahana Konstruksi Mandiri, pemegang saham pengendali ASLI, membeli tambahan 62,5 juta saham senilai sekitar Rp20,3 miliar, menaikkan hak suaranya dari 51 persen menjadi 52 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLI",
   "kepemilikan saham",
   "pemegang saham pengendali",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-8816-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-tanggapi-bei-rupslb-kunci-akuisisi-rs-aset-dijaminkan",
  "category": "Aksi Korporasi",
  "title": "SILO Tanggapi BEI: RUPSLB Kunci [Akuisisi] RS, Aset Dijaminkan",
  "deck": "SILO merespons permintaan penjelasan BEI atas lonjakan transaksi 18 September, sekaligus mengonfirmasi RUPSLB menyetujui akuisisi rumah sakit Rp9 triliun dan penjaminan aset sebagai agunan utang.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SILO",
   "akuisisi rumah sakit",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f8f8697310_cf7a710a76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-cgs-international-kurangi-saham-hak-suara-ke-15-56",
  "category": "Aksi Korporasi",
  "title": "[SQMI] CGS International Kurangi Saham, Hak Suara ke 15,56%",
  "deck": "CGS International Securities Singapore melepas 123 juta saham SQMI pada 17 September 2026, memangkas hak suaranya dari 16,35% menjadi 15,56%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "kepemilikan saham",
   "CGS International",
   "Wilton Makmur Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-4216-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-incar-pmthmetd-hingga-10-rupslb-25-september",
  "category": "Aksi Korporasi",
  "title": "BIPP incar [PMTHMETD] hingga 10%, RUPSLB 25 September",
  "deck": "BIPP mengubah dan menambah informasi rencana penambahan modal tanpa HMETD hingga 502,86 juta saham baru, disetujui RUPSLB Jumat 25 September 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "PMTHMETD",
   "RUPSLB",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1420ad2827_ec2dd07b37.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnbn-jelaskan-volatilitas-transaksi-usai-harga-anjlok-3-95",
  "category": "Aksi Korporasi",
  "title": "PNBN Jelaskan [Volatilitas] Transaksi Usai Harga Anjlok 3,95%",
  "deck": "PNBN menjawab permintaan BEI atas lonjakan volume dan penurunan harga saham 3,95% pada 18 September, menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNBN",
   "Bank Panin",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bed47120e5_096c3384ac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rekening-gratis-rp50-ribu-untuk-76-juta-warga-mulai-2027",
  "category": "Perbankan",
  "title": "Rekening Gratis Rp50 Ribu untuk [76 Juta] Warga Mulai 2027",
  "deck": "Pemerintah menyiapkan rekening bank gratis bersaldo awal Rp50 ribu bagi warga 17 tahun ke atas yang belum punya rekening, dengan anggaran Rp3,8 triliun dan target mulai 2027.",
  "date": "23 September 2026",
  "image": "assets/img/rekening-gratis-rp50-ribu-untuk-76-juta-warga-mulai-2027.jpg",
  "imageV": "mue5r13h",
  "tags": [
   "rekening gratis",
   "saldo Rp50 ribu",
   "Airlangga Hartarto",
   "inklusi keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468897-pemerintah-siapkan-rekening-gratis-untuk-76-juta-warga-ada-saldo-awal-rp50-ribu"
 },
 {
  "slug": "winr-pemegang-saham-utama-lepas-31-juta-saham-free-float",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Utama Lepas 31 Juta Saham [Free Float]",
  "deck": "PEMENANG NUSANTARA INTERNASIONAL kembali menjual 31 juta saham WINR secara tidak langsung pada 18 September 2026, hak suaranya turun dari 46,91 persen menjadi 46,31 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-1639-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fast-jelaskan-pkpu-rp2-83-miliar-ke-bei-sudah-dicabut",
  "category": "Aksi Korporasi",
  "title": "FAST Jelaskan [PKPU] Rp2,83 Miliar ke BEI, Sudah Dicabut",
  "deck": "FAST menjawab permintaan penjelasan BEI soal permohonan PKPU senilai Rp2,83 miliar yang berasal dari sengketa hak cipta, namun sudah dicabut pemohon pada 17 September 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAST",
   "PKPU",
   "Pengadilan Niaga",
   "sengketa hak cipta"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4b97da00ca_b86ac296f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hoki-jelaskan-lonjakan-transaksi-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "HOKI Jelaskan Lonjakan Transaksi, Tak Ada Info [Material]",
  "deck": "Volume saham HOKI melonjak 23 kali lipat dalam sehari, tapi harga hanya naik 4 persen. Manajemen menyatakan tidak ada informasi material di baliknya.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HOKI",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9fbfa71e7e_f4cb44cda2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-anak-usaha-kunci-pinjaman-us-9-8-juta-dari-smi",
  "category": "Aksi Korporasi",
  "title": "ARKO: Anak Usaha Kunci Pinjaman [US$9,8 Juta] dari SMI",
  "deck": "Anak usaha ARKO, EES, menandatangani perjanjian pembiayaan maksimum US$9,8 juta dengan PT SMI untuk mendanai proyek PLTS yang sudah beroperasi komersial.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "pembiayaan infrastruktur",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ba5862d76d_52781e2512.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-direktur-adika-bakrie-beli-750-500-saham-rp665-lembar",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direktur Adika Bakrie [Beli] 750.500 Saham Rp665/Lembar",
  "deck": "Direktur BRMS Adika Aryasthana Bakrie melaporkan pembelian tidak langsung 750.500 saham perseroan seharga Rp665 per lembar pada 22 September 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "kepemilikan saham",
   "direksi",
   "Bumi Resources Minerals"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-7171-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "safe-keluar-dari-pemantauan-khusus-bei-efektif-24-september",
  "category": "Aksi Korporasi",
  "title": "SAFE Keluar dari [Pemantauan Khusus] BEI, Efektif 24 September",
  "deck": "Bursa Efek Indonesia mencabut status pemantauan khusus saham Steady Safe Tbk (SAFE) mulai 24 September 2026, setelah kriteria terkait riwayat suspensi perdagangan tidak lagi terpenuhi.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe Tbk",
   "pemantauan khusus",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ca8f98ff2c_aaf52c7b32.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-komisaris-prijono-sugiarto-beli-8-700-saham-baru",
  "category": "Aksi Korporasi",
  "title": "ASII: Komisaris Prijono Sugiarto [beli] 8.700 saham baru",
  "deck": "Komisaris Astra International Prijono Sugiarto membeli 8.700 saham ASII seharga Rp4.850 per lembar pada 21 September 2026, menambah kepemilikannya menjadi 5.595.800 lembar.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "Astra International",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-3032-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-utang-wwe-rp16-44-miliar-dinovasi-ke-wki-afiliasi",
  "category": "Aksi Korporasi",
  "title": "WSKT: Utang WWE Rp16,44 Miliar Dinovasi ke WKI [Afiliasi]",
  "deck": "Waskita Karya Infrastruktur mengambil alih utang Rp16,44 miliar milik Waskita Wado Energi kepada induk usaha Waskita Karya, bagian dari rencana penambahan modal WWE untuk proyek PLTA Wado.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "Waskita Karya",
   "transaksi afiliasi",
   "PLTA Wado"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1da298ade6_ad9b3815e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-rp100-ribu-tanda-tangan-purbaya-diburu-kolektor",
  "category": "Moneter",
  "title": "Uang Rp100 Ribu Tanda Tangan [Purbaya] Diburu Kolektor",
  "deck": "Uang Rp100.000 bertanda tangan Purbaya Yudhi Sadewa dan Perry Warjiyo viral diburu kolektor, tapi Bank Indonesia memastikan uang itu tetap sah untuk bertransaksi.",
  "date": "23 September 2026",
  "image": "assets/img/uang-rp100-ribu-tanda-tangan-purbaya-diburu-kolektor.jpg",
  "imageV": "mue5r1o4",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468885-viral-rupiah-bertanda-tangan-purbaya-diburu-kolektor-benarkah-langka-dan-mahal"
 },
 {
  "slug": "asii-direksi-rudy-borong-4-4-juta-saham-kepemilikan-naik-3x",
  "category": "Aksi Korporasi",
  "title": "ASII: Direksi Rudy [borong] 4,4 juta saham, kepemilikan naik 3x",
  "deck": "Direksi Astra International, Rudy, membeli 4,4 juta saham ASII senilai sekitar Rp21 miliar dalam dua hari, menambah kepemilikannya lebih dari tiga kali lipat menjadi 5,6 juta saham.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "Astra International",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-1413-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hgii-direksi-tambah-kepemilikan-450-000-saham",
  "category": "Aksi Korporasi",
  "title": "HGII: Direksi [Tambah] Kepemilikan 450.000 Saham",
  "deck": "Direksi Robin Sunyoto membeli 450.000 saham HGII senilai sekitar Rp61,3 juta pada 16-22 September 2026, menaikkan hak suaranya dari 0,24% menjadi 0,25%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HGII",
   "kepemilikan saham",
   "direksi",
   "insider trading"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-8237-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-investor-lepas-10-3-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "DEWI: Investor Lepas 10,3 Juta Saham via [Repo]",
  "deck": "Sujito Ngatiman menjual 10,3 juta saham DEWI seharga Rp184 per lembar lewat skema repurchase agreement, menurunkan hak suaranya dari 8,04% jadi 7,53%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repurchase agreement",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-6812-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-sujito-ngatiman-tambah-saham-jadi-8-04",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman [Tambah] Saham Jadi 8,04%",
  "deck": "Sujito Ngatiman membeli 8,89 juta saham DEWI lewat perjanjian pembelian kembali (repo) seharga Rp170 per lembar, hak suaranya naik dari 7,59% menjadi 8,04%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repo",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-4072-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pt-pal-siapkan-galangan-di-lamongan-bisa-garap-kapal-selam",
  "category": "BUMN",
  "title": "PT PAL Siapkan Galangan di Lamongan, Bisa Garap [Kapal Selam]",
  "deck": "PT PAL menyiapkan galangan kapal di Lamongan untuk kapal komersial hingga kapal perang dan kapal selam, memanfaatkan kapasitas reparasi kapal di Jawa Timur yang masih sangat terbatas.",
  "date": "23 September 2026",
  "image": "assets/img/pt-pal-siapkan-galangan-di-lamongan-bisa-garap-kapal-selam.jpg",
  "imageV": "muduto2v",
  "tags": [
   "Lamongan",
   "PT PAL",
   "galangan kapal",
   "kapal selam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468874-pt-pal-tangani-berbagai-jenis-kapal-termasuk-kapal-temour-dan-selam-di-lamongan-optimis-dongkrak-pad"
 },
 {
  "slug": "dewi-sujito-ngatiman-lepas-12-9-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman [Lepas] 12,9 Juta Saham via Repo",
  "deck": "Sujito Ngatiman melepas 12,86 juta saham DEWI seharga Rp176 per lembar lewat perjanjian jual beli kembali, menurunkan hak suaranya dari 8,24 persen menjadi 7,60 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repo saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-6035-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-sujito-ngatiman-beli-12-9-juta-saham-suara-8-44",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman Beli 12,9 Juta Saham, Suara [8,44%]",
  "deck": "Sujito Ngatiman membeli 12,9 juta saham DEWI seharga Rp162 per lembar lewat perjanjian pembelian kembali, menambah hak suaranya dari 7,59% menjadi 8,44%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repurchase agreement",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-2105-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-sita-1-048-ton-udang-impor-diduga-bocor-ke-pasar-jatim",
  "category": "Industri",
  "title": "KKP Sita [1.048] Ton Udang Impor Diduga Bocor ke Pasar Jatim",
  "deck": "KKP menyita 1.048 ton udang impor asal Kanada, Argentina, dan Ekuador di Jawa Timur yang diduga bocor dari Kawasan Berikat ke pasar dalam negeri.",
  "date": "23 September 2026",
  "image": "assets/img/kkp-sita-1-048-ton-udang-impor-diduga-bocor-ke-pasar-jatim.jpg",
  "imageV": "mudtw0kv",
  "tags": [
   "KKP",
   "udang impor",
   "Jawa Timur",
   "Kawasan Berikat"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-amankan-1048-ton-udang-impor-diduga-langgar-aturan-di-jawa-timur-v830.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "kkp-amankan-1-048-ton-udang-impor-diduga-ilegal-di-jatim",
  "category": "Industri",
  "title": "KKP [Amankan] 1.048 Ton Udang Impor Diduga Ilegal di Jatim",
  "deck": "KKP menyita 1.048 ton udang impor asal Kanada, Argentina, dan Ekuador di Jawa Timur yang diduga tidak sesuai peruntukan, lalu menggandeng Ditjen Pajak untuk pendalaman.",
  "date": "23 September 2026",
  "image": "assets/img/kkp-amankan-1-048-ton-udang-impor-diduga-ilegal-di-jatim.jpg",
  "imageV": "mudtwc50",
  "tags": [
   "udang impor",
   "KKP",
   "Jawa Timur",
   "pembudidaya lokal"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/pengamanan-1048-ton-udang-impor-di-jatim-untuk-lindungi-pembudidaya-lokal-wK31.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "dewi-sujito-ngatiman-jual-13-5-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman [Jual] 13,5 Juta Saham via Repo",
  "deck": "Sujito Ngatiman melepas 13,52 juta saham DEWI lewat perjanjian jual beli kembali, menekan hak suaranya dari 8,27 persen menjadi 7,60 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repo saham",
   "Sujito Ngatiman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-9885-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-tahan-suku-bunga-acuan-5-75-di-tengah-rupiah-tertekan",
  "category": "Moneter",
  "title": "BI [Tahan] Suku Bunga Acuan 5,75% di Tengah Rupiah Tertekan",
  "deck": "Bank Indonesia menahan BI-Rate di 5,75 persen sambil memperluas insentif menjaga rupiah, di tengah inflasi Agustus yang naik ke 3,19 persen dan bunga acuan Amerika Serikat yang kembali naik.",
  "date": "23 September 2026",
  "image": "assets/img/bi-tahan-suku-bunga-acuan-5-75-di-tengah-rupiah-tertekan.jpg",
  "imageV": "mudtwip8",
  "tags": [
   "BI-Rate",
   "Bank Indonesia",
   "Rupiah",
   "Inflasi"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dewi-sujito-ngatiman-beli-17-3-juta-saham-ke-8-23",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman [Beli] 17,3 Juta Saham ke 8,23%",
  "deck": "Sujito Ngatiman membeli 17,3 juta saham DEWI seharga Rp155 per lembar lewat skema perjanjian pembelian kembali, kepemilikannya naik dari 7,52% jadi 8,23% suara.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repo",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-2121-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-sujito-ngatiman-lepas-11-5-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "DEWI: Sujito Ngatiman Lepas [11,5 Juta] Saham via Repo",
  "deck": "Sujito Ngatiman melepas 11,5 juta saham DEWI lewat perjanjian repurchase (repo) pada 7 September 2026, hak suaranya turun dari 8,09 persen menjadi 7,52 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "repo saham",
   "Sujito Ngatiman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-5602-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-pemegang-saham-tambah-kepemilikan-ke-8-05",
  "category": "Aksi Korporasi",
  "title": "DEWI: Pemegang Saham [Tambah] Kepemilikan ke 8,05%",
  "deck": "Sujito Ngatiman membeli 10,5 juta saham DEWI seharga Rp157 per lembar, menambah hak suaranya dari 7,53% menjadi 8,05%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "hak suara",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-1710-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-pemegang-saham-jual-13-1-juta-saham-suara-ke-7-53",
  "category": "Aksi Korporasi",
  "title": "DEWI: Pemegang Saham [Jual] 13,1 Juta Saham, Suara ke 7,53%",
  "deck": "Sujito Ngatiman, pemegang saham DEWI, melepas 13,1 juta saham senilai sekitar Rp2,01 miliar pada 2 September 2026, hak suaranya turun dari 8,19% menjadi 7,53%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-1979-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-pemegang-saham-tambah-kepemilikan-ke-8-06",
  "category": "Aksi Korporasi",
  "title": "DEWI: Pemegang Saham [Tambah] Kepemilikan ke 8,06%",
  "deck": "Sujito Ngatiman menambah kepemilikan di DEWI lewat pembelian 12,75 juta saham senilai sekitar Rp1,91 miliar, hak suara naik dari 7,42% menjadi 8,06%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "pasar modal",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-4018-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-rampungkan-realisasi-dana-obligasi-sukuk-rp1-43-t",
  "category": "Aksi Korporasi",
  "title": "INKP Rampungkan Realisasi Dana [Obligasi]-Sukuk Rp1,43 T",
  "deck": "INKP melaporkan dana hasil emisi obligasi dan sukuk berkelanjutan, total Rp1,43 triliun plus US$15,37 juta, kini terealisasi penuh untuk pelunasan utang bank dan modal kerja.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7a470bee58_a042955a54.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-morgan-stanley-tambah-saham-jadi-7-03-hak-suara",
  "category": "Aksi Korporasi",
  "title": "GOTO: Morgan Stanley Tambah [Saham] Jadi 7,03% Hak Suara",
  "deck": "Morgan Stanley and Co International Plc menambah 400 juta saham GOTO lewat perjanjian pembelian kembali pada 18 September 2026, menaikkan hak suaranya jadi 7,03%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "kepemilikan saham",
   "Morgan Stanley",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-9638-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ctbn-gelar-rupslb-15-oktober-bahas-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "CTBN Gelar RUPSLB 15 Oktober, Bahas [Perubahan] Direksi",
  "deck": "Citra Tubindo memanggil RUPSLB pada 15 Oktober 2026 di Jakarta dengan agenda tunggal persetujuan perubahan susunan Direksi.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CTBN",
   "RUPSLB",
   "Direksi",
   "Citra Tubindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/be2a74aed5_be9d62f69c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-menguat-0-64-di-sesi-i-asing-lepas-saham-rp335-8-m",
  "category": "Pasar Modal",
  "title": "IHSG [Menguat] 0,64% di Sesi I, Asing Lepas Saham Rp335,8 M",
  "deck": "IHSG naik 0,64% ke 6.317,46 pada sesi I perdagangan Rabu, ditopang saham domestik, sementara investor asing melepas saham senilai Rp335,80 miliar menjelang keputusan suku bunga BI.",
  "date": "23 September 2026",
  "image": "assets/img/ihsg-menguat-0-64-di-sesi-i-asing-lepas-saham-rp335-8-m.jpg",
  "imageV": "mudtwj9f",
  "tags": [
   "ihsg",
   "bi rate",
   "saham asing",
   "rupiah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468852-ihsg-menguat-064-di-sesi-i-tapi-investor-asing-justru-lepas-saham-rp33580-miliar"
 },
 {
  "slug": "ppln-wakil-komisaris-utama-mundur-jadi-menteri-keuangan",
  "category": "Aksi Korporasi",
  "title": "PPLN: Wakil Komisaris Utama [Mundur] Jadi Menteri Keuangan",
  "deck": "Suahasil Nazara mengakhiri jabatan Wakil Komisaris Utama PLN usai diangkat sebagai Menteri Keuangan RI. Susunan direksi tidak berubah.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPLN",
   "PLN",
   "Dewan Komisaris",
   "Suahasil Nazara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/38387cce57_ca154ac9b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abmm-panggil-rupslb-15-oktober-bahas-pergantian-direksi",
  "category": "Aksi Korporasi",
  "title": "ABMM Panggil RUPSLB 15 Oktober, Bahas [Pergantian] Direksi",
  "deck": "ABM Investama menggelar RUPSLB pada 15 Oktober 2026 untuk mengesahkan perubahan susunan direksi, menyusul pengunduran diri Haris Mustarto.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABMM",
   "RUPSLB",
   "ABM Investama",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7d9540f69c_d23420e3eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "army-umumkan-rencana-rupslb-pada-30-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "ARMY Umumkan Rencana [RUPSLB] pada 30 Oktober 2026",
  "deck": "PT Armidian Karyatama Tbk akan menggelar RUPSLB pada 30 Oktober 2026. Pemegang saham per 7 Oktober berhak hadir, agenda rapat belum diumumkan.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARMY",
   "RUPSLB",
   "Armidian Karyatama",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/71cd91f0c9_2504546e4b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-direksi-mcleod-jual-lagi-524-300-saham-rp7-01-miliar",
  "category": "Aksi Korporasi",
  "title": "BYAN: Direksi [McLeod] Jual Lagi 524.300 Saham, Rp7,01 Miliar",
  "deck": "Direksi Bayan Resources, Alastair Gordon Christopher McLeod, menjual 524.300 saham BYAN pada 22 September 2026, hari kedua berturut-turut ia mengurangi kepemilikannya.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "McLeod",
   "laporan kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-9874-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-unsp-dicabut-saham-kembali-diperdagangkan",
  "category": "Aksi Korporasi",
  "title": "Suspensi UNSP Dicabut, Saham [Kembali] Diperdagangkan",
  "deck": "IDX mencabut suspensi saham Bakrie Sumatera Plantations (UNSP) mulai pra-pembukaan Rabu, 23 September 2026, setelah laporan keuangan Agustus mencatat ekuitas positif.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "suspensi saham",
   "Bursa Efek Indonesia",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/097410eb29_2bf9cc088d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-pinjamkan-saham-via-repo-suara-24-57",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Pinjamkan Saham via Repo, Suara [24,57%]",
  "deck": "Direksi NSSS, Samuel Tumbuh Bersama, melepas 1,84 miliar saham lewat repurchase agreement untuk peminjaman saham pada 22 September 2026, menurunkan hak suaranya dari 32,29 persen menjadi 24,57 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-2558-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-lepas-saham-via-repo-suara-ke-32-29",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Lepas Saham via [Repo], Suara ke 32,29%",
  "deck": "Samuel Tumbuh Bersama melepas 1,06 miliar saham NSSS lewat perjanjian repo pada 21 September 2026, menurunkan hak suaranya dari 36,75% menjadi 32,29%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-7669-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-konversi-utang-us-4-1-juta-ke-saham-dilusi-5-79",
  "category": "Aksi Korporasi",
  "title": "APEX Konversi Utang US$4,1 Juta ke Saham, [Dilusi] 5,79%",
  "deck": "Apexindo menerbitkan 218,09 juta saham baru seharga Rp325 per saham untuk melunasi utang US$4,1 juta ke sindikasi kreditur asing, RUPSLB digelar 7 Oktober 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "Apexindo",
   "konversi utang",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d833e27606_e3b2eaff15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mkpi-hak-suara-direksi-anjlok-jadi-0-78-usai-peminjaman-saham",
  "category": "Aksi Korporasi",
  "title": "MKPI: Hak Suara Direksi Anjlok jadi 0,78% usai [Peminjaman] Saham",
  "deck": "Direksi MKPI Samuel Tumbuh Bersama melaporkan pengalihan 49,4 juta saham lewat skema peminjaman saham, hak suaranya turun dari 5,99% menjadi 0,78%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKPI",
   "kepemilikan saham",
   "direksi",
   "peminjaman saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-6148-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-lepas-178-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi [Lepas] 178 Juta Saham Lewat Repo",
  "deck": "Samuel Tumbuh Bersama, direksi RLCO, melepas 178 juta saham lewat skema peminjaman saham dalam perjanjian repo pada 22 September 2026, hak suaranya anjlok dari 9,28 persen jadi 3,58 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-4282-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-250-100-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 250.100 Saham Lagi",
  "deck": "Komisaris AKPI Henry Liem melaporkan penjualan bersih 250.100 saham senilai sekitar Rp125,25 juta, hak suaranya turun menjadi 1,182 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Henry Liem",
   "kepemilikan saham",
   "dewan komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-7452-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnba-dana-rights-issue-ke-ekspansi-usaha-0-terealisasi",
  "category": "Aksi Korporasi",
  "title": "BNBA: dana rights issue ke [ekspansi usaha] 0% terealisasi",
  "deck": "BNBA mengoreksi laporan dana rights issue 2022: dana infrastruktur baru 5,66% terealisasi, ekspansi usaha 0%, sisa Rp118 miliar mengendap di giro.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNBA",
   "Bank Bumi Arta",
   "rights issue",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f9cef653ec_11e5d24b69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnba-koreksi-laporan-dana-rights-issue-sisa-rp44-7-miliar",
  "category": "Aksi Korporasi",
  "title": "BNBA [koreksi] laporan dana rights issue, sisa Rp44,7 miliar",
  "deck": "Bank Bumi Arta mengoreksi laporan realisasi dana rights issue 2021. Kredit terserap penuh, pengembangan digital banking baru 64 persen, sisa Rp44,66 miliar mengendap di giro bank lain.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNBA",
   "Bank Bumi Arta",
   "rights issue",
   "realisasi dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/28d05869e2_19132cb8f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-tambah-saham-lewat-repo-suara-ke-21-64",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah Saham Lewat [Repo], Suara ke 21,64%",
  "deck": "Samuel Sekuritas Indonesia selaku Direksi NSSS menambah 1,44 miliar saham lewat mekanisme repurchase agreement pada 22 September 2026, mengerek hak suaranya dari 15,58% jadi 21,64%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-8317-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnaf-dana-sukuk-rp900-miliar-terserap-penuh-sisa-nol",
  "category": "Aksi Korporasi",
  "title": "CNAF: Dana Sukuk Rp900 Miliar [Terserap] Penuh, Sisa Nol",
  "deck": "CNAF melaporkan dana Rp896,45 miliar dari sukuk syariah tahap IV 2026 sudah terserap 100 persen untuk pembiayaan kendaraan, properti, dan haji-umrah syariah, tanpa sisa dana.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNAF",
   "sukuk syariah",
   "penggunaan dana IPO",
   "pembiayaan syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3f6e161a51_44ae392926.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plas-gelar-buyback-rp51-saham-jelang-delisting",
  "category": "Aksi Korporasi",
  "title": "PLAS Gelar Buyback Rp51/Saham Jelang [Delisting]",
  "deck": "Polaris Investama (PLAS) akan membeli kembali seluruh saham publik seharga Rp51 per lembar mulai 24 September hingga 6 November 2026, menjelang delisting efektif 10 November 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLAS",
   "delisting",
   "buyback saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d46d7fbfd9_1b70bc69e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "idx-saham-nick-terkonsentrasi-99-28-free-float-menipis",
  "category": "Aksi Korporasi",
  "title": "IDX: Saham NICK Terkonsentrasi 99,28%, [Free Float] Menipis",
  "deck": "Bursa Efek Indonesia dan KSEI mengumumkan 99,28% saham Charnic Capital (NICK) dikuasai sejumlah kecil pemegang saham per 18 September 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "free float",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6548082c4a_8be7d0889c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-tipis-ke-rp2-630-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] Tipis ke Rp2.630.000/Gram",
  "deck": "Harga emas Antam naik tipis Rp3.000 menjadi Rp2.630.000 per gram pada 23 September 2026, harga buyback ikut naik ke Rp2.465.000 per gram.",
  "date": "23 September 2026",
  "image": "assets/img/harga-emas-antam-naik-tipis-ke-rp2-630-000-gram.jpg",
  "imageV": "mudnaozj",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468812-harga-emas-antam-hari-ini-23-september-2026-rp2630000-per-gram-naik-tipis-rp3000"
 },
 {
  "slug": "rlco-direksi-tambah-40-juta-saham-lewat-repo-substitusi",
  "category": "Aksi Korporasi",
  "title": "RLCO: [Direksi] Tambah 40 Juta Saham Lewat Repo Substitusi",
  "deck": "Samuel Sekuritas Indonesia, direksi RLCO, menambah kepemilikan 40,07 juta saham lewat transaksi repurchase agreement bertujuan substitusi, hak suaranya naik dari 5,29% menjadi 6,57%.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-1949-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-saham-direksi-berkurang-2-7-miliar-lembar-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "BKSL: Saham Direksi Berkurang 2,7 Miliar Lembar lewat [Repo]",
  "deck": "Transaksi repurchase agreement memangkas kepemilikan pelapor berjabatan Direksi sebesar 23,9 persen, hak suaranya turun dari 6,85 persen menjadi 5,21 persen.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23092026-2410-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-tawarkan-energi-hijau-genjot-investasi-pusat-data",
  "category": "Energi",
  "title": "ESDM Tawarkan Energi Hijau Genjot Investasi [Pusat Data]",
  "deck": "Menteri ESDM Bahlil Lahadalia menawarkan potensi PLTA Sungai Mamberamo 23 GW dan Sungai Kayan 12 GW untuk menarik investor membangun pusat data di Indonesia.",
  "date": "23 September 2026",
  "image": "assets/img/esdm-tawarkan-energi-hijau-genjot-investasi-pusat-data.jpg",
  "imageV": "muddpja1",
  "tags": [
   "ESDM",
   "Data Center",
   "PLTA",
   "Energi Terbarukan"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kebutuhan-energi-meningkat-industri-digital-berkembang-pesat-indonesia-siap-menjadi-pusat-data",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "clpi-panggil-rupslb-15-oktober-bahas-penyesuaian-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "CLPI Panggil RUPSLB 15 Oktober, Bahas [Penyesuaian] Anggaran Dasar",
  "deck": "Colorpak Indonesia (CLPI) memanggil RUPSLB pada 15 Oktober 2026 untuk menyetujui penyesuaian Pasal 3 anggaran dasar mengikuti klasifikasi usaha baru KBLI 2025, tanpa mengubah kegiatan usaha inti.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CLPI",
   "Colorpak Indonesia",
   "RUPSLB",
   "anggaran dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0fe24f3bcc_a98eb71580.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-tunda-bayar-bunga-obligasi-rp11-1-miliar-ke-2027",
  "category": "Aksi Korporasi",
  "title": "PTPP [Tunda] Bayar Bunga Obligasi Rp11,1 Miliar ke 2027",
  "deck": "RUPO menyetujui penundaan bunga Obligasi Berkelanjutan IV Tahap I 2024 senilai Rp11,1 miliar hingga 2027 tanpa denda, sehingga PTPP tak lagi wajib bayar pada 25 September 2026.",
  "date": "23 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "obligasi",
   "RUPO",
   "BUMN karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b3fa9d5640_10e78def9a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gaikindo-gelar-pameran-otomotif-serentak-di-10-kota",
  "category": "Industri",
  "title": "GAIKINDO Gelar Pameran Otomotif [Serentak] di 10 Kota",
  "deck": "GAIKINDO menggelar Permata Bank GAIKINDO Auto Week 2026 pada 20-29 November, untuk pertama kali serentak di 10 kota, tidak hanya di Jakarta seperti tahun-tahun sebelumnya.",
  "date": "23 September 2026",
  "image": "assets/img/gaikindo-gelar-pameran-otomotif-serentak-di-10-kota.jpg",
  "imageV": "mucyshz8",
  "tags": [
   "GAIKINDO",
   "Otomotif",
   "Pameran",
   "Permata Bank"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/permata-bank-gaikindo-auto-week-2026-serentak-di-10-kota-besar-se-indonesia/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "halo-direktur-keuangan-taufan-kurniawan-mundur",
  "category": "Aksi Korporasi",
  "title": "HALO: Direktur Keuangan Taufan Kurniawan [Mundur]",
  "deck": "Taufan Kurniawan mengundurkan diri dari jabatan Direktur Keuangan PT Haloni Jane Tbk efektif 21 Oktober 2026, perseroan akan mengikuti ketentuan POJK 33/2014 untuk penunjukan pengganti.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HALO",
   "pergantian direksi",
   "tata kelola perusahaan",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cf4c454e97_f588f172c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-tertibkan-impor-baju-bekas-longgarkan-bahan-baku-tekstil",
  "category": "Industri",
  "title": "Pemerintah [Tertibkan] Impor Baju Bekas, Longgarkan Bahan Baku Tekstil",
  "deck": "Rapat terbatas dengan Presiden Prabowo Subianto menghasilkan rencana peninjauan aturan impor bahan baku tekstil dan penertiban impor pakaian bekas ilegal.",
  "date": "22 September 2026",
  "image": "assets/img/gudang-bahan-baku.jpg",
  "tags": [
   "tekstil",
   "TPT",
   "impor pakaian bekas",
   "investasi industri"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7107/industri-tekstil-dan-produk-tekstil-tetap-strategis-pemerintah-dorong-penguatan-daya-saing-dan-investasi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ri-percepat-perjanjian-dagang-ieu-cepa-dengan-uni-eropa",
  "category": "Global",
  "title": "RI Percepat Perjanjian Dagang [IEU-CEPA] dengan Uni Eropa",
  "deck": "Presiden Prabowo Subianto meminta penyelesaian kesepakatan dagang RI-Uni Eropa dipercepat, dengan target ratifikasi semester kedua 2026 dan berlaku awal 2027.",
  "date": "22 September 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "Ekspor",
   "Prabowo Subianto"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7108/menko-airlangga-penyelesaian-ieu-cepa-dipacu-untuk-perluas-akses-pasar-eropa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kemendag-luncurkan-inaexport-platform-ekspor-terintegrasi",
  "category": "UMKM",
  "title": "Kemendag Luncurkan [InaExport], Platform Ekspor Terintegrasi",
  "deck": "Kementerian Perdagangan merilis lima layanan baru di platform InaExport dan meneken kerja sama dengan 19 mitra untuk memperluas akses pasar ekspor UMKM.",
  "date": "22 September 2026",
  "image": "assets/img/kemendag-luncurkan-inaexport-platform-ekspor-terintegrasi.jpg",
  "imageV": "muctm54j",
  "tags": [
   "InaExport",
   "UMKM",
   "Ekspor",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/layanan-baru-inaexport-perkuat-akses-pasar-produk-produk-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "sungai-surut-pasokan-batu-bara-ke-semen-tersendat",
  "category": "Energi",
  "title": "Sungai Surut, Pasokan Batu Bara ke Semen [Tersendat]",
  "deck": "Debit sungai di Kalimantan turun dan mengganggu pasokan batu bara industri semen serta distribusi BBM. ESDM targetkan tuntas pekan ini atau depan.",
  "date": "22 September 2026",
  "image": "assets/img/sungai-surut-pasokan-batu-bara-ke-semen-tersendat.jpg",
  "imageV": "muctm5ma",
  "tags": [
   "batu bara",
   "ESDM",
   "industri semen",
   "Kalimantan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468752-pasokan-batu-bara-untuk-industri-semen-tersendat-akibat-sungai-di-kalimantan-surut-esdm-cari-alternatif"
 },
 {
  "slug": "bandara-soetta-uji-coba-insinerator-tanpa-asap-20-ton-hari",
  "category": "BUMN",
  "title": "Bandara Soetta Uji Coba Insinerator [Tanpa Asap] 20 Ton/Hari",
  "deck": "Bandara Soekarno-Hatta mulai menguji insinerator PARK PYRO berkapasitas 20 ton sampah per hari tanpa asap, hasil kerja sama Angkasa Pura Indonesia dengan dua mitra teknologi sejak Maret 2026.",
  "date": "22 September 2026",
  "image": "assets/img/bandara-soetta-uji-coba-insinerator-tanpa-asap-20-ton-hari.jpg",
  "imageV": "muctm65c",
  "tags": [
   "Bandara Soekarno-Hatta",
   "Angkasa Pura Indonesia",
   "pengelolaan sampah",
   "teknologi ramah lingkungan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468737-bandara-soetta-uji-coba-teknologi-baru-pengelolaan-sampah-tanpa-asap-menuju-zero-waste-zero-emisi"
 },
 {
  "slug": "btps-jelaskan-volatilitas-saham-imbas-rebalancing-ftse-russell",
  "category": "Aksi Korporasi",
  "title": "BTPS Jelaskan Volatilitas Saham Imbas [Rebalancing] FTSE Russell",
  "deck": "BTPN Syariah menyebut volatilitas saham BTPS pada 18 September 2026 dipicu rebalancing indeks FTSE Russell yang mengubah statusnya dari Small Cap ke Micro Cap, bukan informasi material baru.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "BTPN Syariah",
   "volatilitas saham",
   "FTSE Russell"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d11ee4e37e_51c240cd64.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-bentuk-bumn-tekstil-danantara-jadi-integrator",
  "category": "BUMN",
  "title": "Pemerintah Bentuk BUMN Tekstil, Danantara Jadi [Integrator]",
  "deck": "Danantara memastikan pemerintah sepakat membentuk BUMN tekstil baru sebagai integrator industri, meski waktu realisasi dan modal awal belum ditentukan.",
  "date": "22 September 2026",
  "image": "assets/img/pemerintah-bentuk-bumn-tekstil-danantara-jadi-integrator.jpg",
  "imageV": "muctm6mo",
  "tags": [
   "BUMN tekstil",
   "Danantara",
   "Rosan Roeslani",
   "industri tekstil"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468714-bumn-tekstil-baru-bakal-dibentuk-danantara-siapkan-integrator-untuk-bangkitkan-industri"
 },
 {
  "slug": "transnusa-buka-rute-bali-surabaya-tiket-mulai-rp800-ribu",
  "category": "Bisnis",
  "title": "TransNusa Buka Rute Bali-Surabaya, Tiket Mulai [Rp800 Ribu]",
  "deck": "TransNusa membuka penerbangan langsung Denpasar-Surabaya mulai 21 September 2026 dengan tarif mulai Rp800 ribu, dan menambah frekuensi jadi dua kali sehari mulai 10 Oktober 2026.",
  "date": "22 September 2026",
  "image": "assets/img/transnusa-buka-rute-bali-surabaya-tiket-mulai-rp800-ribu.jpg",
  "imageV": "muctm72i",
  "tags": [
   "TransNusa",
   "penerbangan domestik",
   "rute Bali Surabaya",
   "tiket pesawat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468705-transnusa-buka-rute-bali-surabaya-tiket-mulai-rp800-ribu-dan-terbang-2-kali-sehari"
 },
 {
  "slug": "menkeu-suahasil-beberkan-tiga-langkah-perkuat-bea-cukai",
  "category": "Makroekonomi",
  "title": "Menkeu Suahasil Beberkan [Tiga] Langkah Perkuat Bea Cukai",
  "deck": "Menteri Keuangan Suahasil Nazara memaparkan tiga langkah penguatan pengawasan Direktorat Jenderal Bea dan Cukai: sumber daya manusia, teknologi, dan proses bisnis.",
  "date": "22 September 2026",
  "image": "assets/img/menkeu-suahasil-beberkan-tiga-langkah-perkuat-bea-cukai.jpg",
  "imageV": "muctmmbh",
  "tags": [
   "Bea Cukai",
   "Kemenkeu",
   "Suahasil Nazara",
   "Pengawasan Impor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468740-menkeu-suahasil-beberkan-langkah-pengawasan-bea-cukai"
 },
 {
  "slug": "kkgi-komisaris-hendro-tambah-93-000-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "KKGI: Komisaris Hendro Tambah [93.000] Saham Lagi",
  "deck": "Komisaris KKGI Hendro Martowardojo membeli 93.000 saham secara tidak langsung di harga Rp328, menyusul pembelian serupa pekan sebelumnya.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "Kepemilikan Saham",
   "Komisaris",
   "Resource Alam Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-9273-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-komisi-eropa-ke-ri-bahas-percepatan-cepa",
  "category": "Global",
  "title": "Presiden Komisi Eropa ke RI Bahas [Percepatan] CEPA",
  "deck": "Airlangga sebut Presiden Komisi Eropa Ursula von der Leyen dan Komisioner Dagang Maros Sefcovic akan ke Indonesia akhir Oktober-awal November bahas percepatan IEU-CEPA.",
  "date": "22 September 2026",
  "image": "assets/img/presiden-komisi-eropa-ke-ri-bahas-percepatan-cepa.jpg",
  "imageV": "muctmmrn",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "Airlangga Hartarto",
   "perjanjian dagang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468734-ungkap-perkembangan-ieu-cepa-airlangga-sebut-presiden-komisi-eropa-akan-ke-ri-bahas-percepatan-perjanjian-dagang"
 },
 {
  "slug": "7-umk-binaan-pertamina-tembus-pameran-caexpo-di-china",
  "category": "UMKM",
  "title": "7 UMK Binaan Pertamina [Tembus] Pameran CAEXPO di China",
  "deck": "Tujuh usaha mikro dan kecil mitra binaan Pertamina memamerkan produk di China-ASEAN Expo 2026 untuk menjaring pembeli dari Tiongkok dan ASEAN.",
  "date": "22 September 2026",
  "image": "assets/img/7-umk-binaan-pertamina-tembus-pameran-caexpo-di-china.jpg",
  "imageV": "muctmn74",
  "tags": [
   "UMK",
   "Pertamina",
   "CAEXPO",
   "ekspor UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468731-7-umk-binaan-pertamina-tampil-di-caexpo-2026-akses-pasar-global-kian-terbuka-di-china"
 },
 {
  "slug": "nasib-pembatasan-pertalite-desil-9-10-masih-mengambang",
  "category": "Energi",
  "title": "Nasib Pembatasan Pertalite Desil 9-10 Masih [Mengambang]",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut rencana pembatasan Pertalite bagi kelompok desil 9-10 belum diputuskan, menunggu pembahasan dengan Menteri Keuangan baru dan validasi data.",
  "date": "22 September 2026",
  "image": "assets/img/nasib-pembatasan-pertalite-desil-9-10-masih-mengambang.jpg",
  "imageV": "mucysiiq",
  "tags": [
   "pertalite",
   "subsidi bbm",
   "bahlil lahadalia",
   "desil 9-10"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468703-pembatasan-pertalite-untuk-desil-9-10-belum-pasti-bahlil-pemerintah-masih-cek-data"
 },
 {
  "slug": "bafi-terbitkan-obligasi-dan-sukuk-rp902-miliar-rating-aaa",
  "category": "Aksi Korporasi",
  "title": "BAFI Terbitkan Obligasi dan Sukuk Rp902 Miliar, Rating [AAA]",
  "deck": "BAFI menerbitkan obligasi tahap II senilai Rp552,26 miliar dan sukuk mudharabah Rp350 miliar, dengan bunga tetap 7,10-7,35 persen per tahun dan peringkat AAA dari Fitch dan Pefindo.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAFI",
   "obligasi",
   "sukuk",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fe18f57d56_9bbfced863.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "investasi-plts-100-gw-tembus-rp1-306-triliun",
  "category": "Energi",
  "title": "Investasi PLTS 100 GW Tembus [Rp1.306] Triliun",
  "deck": "Menteri ESDM Bahlil Lahadalia mengungkap kebutuhan investasi 100 gigawatt PLTS mencapai Rp1,306 triliun, ditargetkan rampung dalam tiga tahun.",
  "date": "22 September 2026",
  "image": "assets/img/investasi-plts-100-gw-tembus-rp1-306-triliun.jpg",
  "imageV": "muco4bfm",
  "tags": [
   "PLTS",
   "ESDM",
   "Bahlil Lahadalia",
   "net zero emission"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468700-bahlil-ungkap-investasi-plts-100-gw-tembus-rp1306-triliun-ditarget-rampung-3-tahun"
 },
 {
  "slug": "menkeu-siapkan-3-strategi-perkuat-pengawasan-bea-cukai",
  "category": "Makroekonomi",
  "title": "Menkeu Siapkan 3 Strategi [Perkuat] Pengawasan Bea Cukai",
  "deck": "Suahasil Nazara memaparkan tiga langkah memperkuat pengawasan DJBC: penguatan SDM, pemanfaatan teknologi, dan pembenahan proses bisnis.",
  "date": "22 September 2026",
  "image": "assets/img/menkeu-siapkan-3-strategi-perkuat-pengawasan-bea-cukai.jpg",
  "imageV": "muco4eak",
  "tags": [
   "bea cukai",
   "DJBC",
   "Kemenkeu",
   "Suahasil Nazara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468715-jurus-menkeu-suahasil-untuk-perkuat-pengawasan-bea-cukai-siapkan-3-strategi"
 },
 {
  "slug": "skbm-rinci-dampak-kebakaran-gudang-nilai-asuransi-rp115-miliar",
  "category": "Aksi Korporasi",
  "title": "SKBM Rinci Dampak [Kebakaran] Gudang, Nilai Asuransi Rp115 Miliar",
  "deck": "Sekar Bumi menjelaskan ke BEI bahwa kebakaran gudang cold storage di Tangerang pada 17 September tak menghentikan operasional, dengan aset terdampak diasuransikan senilai Rp115 miliar.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SKBM",
   "kebakaran",
   "asuransi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/671e6acfb4_af85e6f287.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indodana-dapat-suntikan-rp700-miliar-dari-hsbc-untuk-paylater",
  "category": "Perbankan",
  "title": "Indodana Dapat Suntikan [Rp700 Miliar] dari HSBC untuk PayLater",
  "deck": "PayLater kian populer namun risiko kredit macet mengintai. Indodana Finance memperkuat pembiayaan lewat dana Rp700 miliar dari Bank HSBC Indonesia.",
  "date": "22 September 2026",
  "image": "assets/img/indodana-dapat-suntikan-rp700-miliar-dari-hsbc-untuk-paylater.jpg",
  "imageV": "muco4eyw",
  "tags": [
   "paylater",
   "indodana finance",
   "bnpl",
   "hsbc indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468702-paylater-makin-populer-indodana-finance-perkuat-pembiayaan-sehat-dengan-dana-rp700-miliar"
 },
 {
  "slug": "mknt-rilis-detail-pemodal-baru-headwell-kuasai-64-9-saham",
  "category": "Aksi Korporasi",
  "title": "MKNT Rilis Detail Pemodal Baru, [Headwell] Kuasai 64,9% Saham",
  "deck": "Koreksi keterbukaan informasi menyebut PT Headwell Bintang Energi Hijau bakal menguasai 64,9 persen saham MKNT lewat penambahan modal tanpa hak memesan efek terlebih dahulu senilai Rp1,02 triliun.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "penambahan modal",
   "dilusi saham",
   "Headwell Bintang Energi Hijau"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/176c81f95e_e26b86b82c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "t50-summit-rilis-50-raksasa-mesin-tambang-dunia",
  "category": "Industri",
  "title": "T50 Summit [Rilis] 50 Raksasa Mesin Tambang Dunia",
  "deck": "T50 Summit Indonesia Forum 2026 di Jakarta merilis peringkat 50 produsen mesin tambang dunia dengan total pendapatan US$74,29 miliar, dipimpin Komatsu dan Caterpillar.",
  "date": "22 September 2026",
  "image": "assets/img/t50-summit-rilis-50-raksasa-mesin-tambang-dunia.jpg",
  "imageV": "muco4gum",
  "tags": [
   "T50 Summit",
   "mesin tambang",
   "industri pertambangan",
   "Komatsu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468698-t50-summit-2026-rilis-50-raksasa-mesin-tambang-dunia-pendapatan-tembus-us7429-miliar"
 },
 {
  "slug": "rcep-sepakat-bentuk-kelompok-kerja-aksesi-4-ekonomi-baru",
  "category": "Global",
  "title": "RCEP Sepakat Bentuk Kelompok Kerja [Aksesi] 4 Ekonomi Baru",
  "deck": "Pertemuan menteri RCEP di Filipina menyetujui pembentukan kelompok kerja aksesi untuk Bangladesh, Chile, Hong Kong, dan Sri Lanka, serta mencatat kemajuan sekretariat permanen RCEP di Indonesia.",
  "date": "22 September 2026",
  "image": "assets/img/rcep-sepakat-bentuk-kelompok-kerja-aksesi-4-ekonomi-baru.jpg",
  "imageV": "muclytdt",
  "tags": [
   "RCEP",
   "Kementerian Perdagangan",
   "ASEAN",
   "Perdagangan Internasional"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pimpin-pertemuan-ke-5-para-menteri-rcep-indonesia-tekankan-pentingnya-meningkatkan-pemanfaatan-rcep",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dmas-rombak-direksi-yoneda-gantikan-uehara",
  "category": "Aksi Korporasi",
  "title": "DMAS [Rombak] Direksi, Yoneda Gantikan Uehara",
  "deck": "RUPSLB Puradelta Lestari menyetujui pengunduran diri Atsushi Uehara sebagai Wakil Presiden Direktur dan mengangkat Shinji Yoneda sebagai penggantinya.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMAS",
   "RUPSLB",
   "Direksi",
   "Puradelta Lestari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d23adf1924_acd5f39752.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-gelar-public-expose-insidentil-usai-suspensi",
  "category": "Aksi Korporasi",
  "title": "BIKE Gelar Public Expose Insidentil usai [Suspensi]",
  "deck": "Bursa memerintahkan BIKE menggelar paparan publik insidentil pada Kamis, 24 September 2026, menyusul suspensi cooling down sahamnya sehari sebelumnya.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "Suspensi saham",
   "Public Expose",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ec0601cc0d_3ec761a437.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-terbitkan-saham-baru-investor-lama-terdilusi-ke-0-53",
  "category": "Aksi Korporasi",
  "title": "MKNT Terbitkan Saham Baru, Investor Lama [Terdilusi] ke 0,53%",
  "deck": "PMTHMETD MKNT menerbitkan 1,02 triliun saham baru senilai Rp1 per saham untuk tujuh pihak, termasuk PT Headwell Bintang Energi Hijau yang akan menguasai mayoritas saham perseroan.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "dilusi saham",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/433e20a35b_07be089b7c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zone-vanda-gunawan-tambah-kepemilikan-saham-jadi-12-37",
  "category": "Aksi Korporasi",
  "title": "ZONE: Vanda Gunawan Tambah [Kepemilikan] Saham Jadi 12,37%",
  "deck": "Vanda Gunawan membeli 1,4 juta saham ZONE secara tidak langsung seharga Rp670 per lembar pada 11 September 2026, menaikkan hak suaranya dari 12,21% menjadi 12,37%.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZONE",
   "Mega Perintis",
   "kepemilikan saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-0390-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gsmf-tunda-jadwal-pmthmetd-tahap-ii-ke-kuartal-iv-2026",
  "category": "Aksi Korporasi",
  "title": "GSMF Tunda Jadwal [PMTHMETD] Tahap II ke Kuartal IV 2026",
  "deck": "Equity Development Investment menggeser rencana penambahan modal tanpa hak memesan efek terlebih dahulu Tahap II dari akhir September ke kuartal IV 2026, tanpa mengubah nilai maupun pihak penyetor modal.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GSMF",
   "PMTHMETD",
   "penambahan modal",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/63cc82f5bc_de79129416.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-hadirkan-trauma-healing-bagi-nasabah-ntt-pascagempa",
  "category": "UMKM",
  "title": "PNM Hadirkan [Trauma Healing] bagi Nasabah NTT Pascagempa",
  "deck": "PNM Peduli menggelar pendampingan psikologis bagi sekitar 250 karyawan dan lebih dari 700 nasabah di Ruteng, Reok, dan Soa, NTT, untuk membantu mereka pulih dan kembali menjalankan usaha pascagempa.",
  "date": "22 September 2026",
  "image": "assets/img/pnm-hadirkan-trauma-healing-bagi-nasabah-ntt-pascagempa.jpg",
  "imageV": "muclyttj",
  "tags": [
   "PNM",
   "PNM Peduli",
   "NTT",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468684-pnm-peduli-hadirkan-trauma-healing-untuk-dukung-nasabah-flores-ntt-bangkit-dan-kembali-berusaha"
 },
 {
  "slug": "dekarbonisasi-pertamina-lampaui-target-118-di-semester-i",
  "category": "Energi",
  "title": "Dekarbonisasi Pertamina [Lampaui] Target 118% di Semester I",
  "deck": "Pertamina catat pengurangan emisi karbon 118 persen dari target RKAP 2026 pada semester pertama, sekaligus pertahankan peringkat ESG nomor satu dunia untuk sub-industri migas terintegrasi.",
  "date": "22 September 2026",
  "image": "assets/img/dekarbonisasi-pertamina-lampaui-target-118-di-semester-i.jpg",
  "imageV": "muclyuc2",
  "tags": [
   "Pertamina",
   "ESG",
   "dekarbonisasi",
   "NZE"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468679-dekarbonisasi-pertamina-capai-118-pada-semester-1-2026-di-atas-target-pengurangan-emisi-tahunan"
 },
 {
  "slug": "akku-public-expose-suspensi-berlanjut-opini-audit-membaik",
  "category": "Aksi Korporasi",
  "title": "AKKU Public Expose: Suspensi Berlanjut, Opini Audit [Membaik]",
  "deck": "Dalam paparan publik insidentil 18 September, manajemen AKKU mengaku belum menerima keluhan pemegang saham soal suspensi dan menargetkan opini audit tahun ini tak lagi disclaimer.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "public expose",
   "opini audit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eb668ff428_c73313662a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agii-jawab-permintaan-penjelasan-volatilitas-saham-dari-bei",
  "category": "Aksi Korporasi",
  "title": "AGII Jawab Permintaan Penjelasan [Volatilitas] Saham dari BEI",
  "deck": "Samator Indo Gas menyatakan tidak ada informasi material tersembunyi maupun rencana aksi korporasi usai diminta BEI menjelaskan pergerakan tak wajar sahamnya.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "Samator Indo Gas",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/028a8da8ac_c18f1d97fa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bapa-investor-cutloss-lepas-seluruh-saham-suara-ke-nol",
  "category": "Aksi Korporasi",
  "title": "BAPA: Investor [Cutloss] Lepas Seluruh Saham, Suara ke Nol",
  "deck": "Belvin Tannadi melepas seluruh 76,38 juta sahamnya di BAPA seharga Rp145 per lembar pada 22 September 2026, dengan alasan cutloss. Hak suaranya turun dari 11,54% menjadi nol.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAPA",
   "kepemilikan saham",
   "cutloss",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-4712-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-direksi-mcleod-jual-185-200-saham-rp2-47-miliar",
  "category": "Aksi Korporasi",
  "title": "BYAN: Direksi McLeod [Jual] 185.200 Saham, Rp2,47 Miliar",
  "deck": "Direksi BYAN Alastair Gordon Christopher McLeod menjual 185.200 saham senilai Rp13.352 per lembar pada 21 September 2026, memangkas kepemilikannya jadi 3,81 juta lembar.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-8820-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dlta-komite-audit-ketua-baru-gantikan-samuel-nitisaputra",
  "category": "Aksi Korporasi",
  "title": "DLTA [Komite Audit]: Ketua Baru Gantikan Samuel Nitisaputra",
  "deck": "Delta Djakarta menunjuk Manginar Rico Sinaga sebagai Ketua Komite Audit baru menggantikan Samuel Nitisaputra, efektif 21 September 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DLTA",
   "Delta Djakarta",
   "komite audit",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c7c5e06aa7_d234839596.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-rupsi-tolak-usulan-restrukturisasi-sukuk-ijarah",
  "category": "Aksi Korporasi",
  "title": "POST: RUPSI Tolak Usulan [Restrukturisasi] Sukuk Ijarah",
  "deck": "Rapat pemegang Sukuk Ijarah Pos Indonesia menolak seluruh usulan restrukturisasi, termasuk penundaan pembayaran imbal jasa yang diminta perseroan hingga akhir 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "Sukuk Ijarah",
   "RUPSI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/400c2c7bf4_ab14c25592.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bjbr-jawab-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "BJBR Jawab Bursa soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Bank bjb menyatakan tidak mengetahui informasi material di balik gejolak transaksi sahamnya, menyusul surat permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBR",
   "Bank bjb",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cfd6933fae_7db317670f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-pemegang-obligasi-tolak-restrukturisasi-bunga-2022",
  "category": "Aksi Korporasi",
  "title": "POST: Pemegang Obligasi [Tolak] Restrukturisasi Bunga 2022",
  "deck": "RUPO Obligasi I Pos Indonesia Tahun 2022 menolak permintaan standstill bunga, penyesuaian suku bunga, perpanjangan tenor, dan pembebasan kovenan keuangan perusahaan.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "obligasi",
   "restrukturisasi utang",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/34c74619bb_1943d587bd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smle-sinergi-asia-corporindo-jual-9-25-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SMLE: Sinergi Asia Corporindo [Jual] 9,25 Juta Saham",
  "deck": "Pemegang saham SMLE, Sinergi Asia Corporindo, menjual 9,25 juta saham senilai sekitar Rp1,97 miliar pada 16 September 2026, hak suaranya masih di atas 56 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMLE",
   "kepemilikan saham",
   "free float",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-6210-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-ambruk-1-39-saham-energi-dan-bank-jadi-beban",
  "category": "Pasar Modal",
  "title": "IHSG [Ambruk] 1,39%, Saham Energi dan Bank Jadi Beban",
  "deck": "IHSG ditutup melemah 1,39% ke 6.295,92 pada Selasa, tertekan sektor energi dan perbankan di tengah pelemahan yang merata di hampir seluruh pasar.",
  "date": "22 September 2026",
  "image": "assets/img/ihsg-ambruk-1-39-saham-energi-dan-bank-jadi-beban.jpg",
  "imageV": "muclyusf",
  "tags": [
   "IHSG",
   "Saham Energi",
   "Bursa Efek Indonesia",
   "BUMI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468661-ihsg-ambruk-139-ke-629592-saham-energi-hingga-bank-jadi-beban-pasar"
 },
 {
  "slug": "winr-pemegang-saham-utama-lepas-12-juta-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Utama [Lepas] 12 Juta Saham Lagi",
  "deck": "PEMENANG NUSANTARA INTERNASIONAL kembali menjual 12,06 juta saham WINR pada 17 September 2026, hak suara turun tipis ke 46,91 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-6182-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-panggil-rupslb-batalkan-esop-demi-pengurangan-modal",
  "category": "Aksi Korporasi",
  "title": "GOTO Panggil RUPSLB, Batalkan ESOP demi [Pengurangan Modal]",
  "deck": "RUPSLB GoTo 14 Oktober 2026 membahas pengurangan modal lewat penarikan 32,19 miliar saham tresuri serta persetujuan pengunduran diri Wakil Dirut Catherine Hindra Sutjahyo.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "RUPSLB",
   "Pengurangan Modal",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/265a24a8e4_af52af6a57.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-purbaya-diburu-bi-tegaskan-tetap-sah",
  "category": "Moneter",
  "title": "Uang Purbaya Diburu, BI Tegaskan Tetap [Sah]",
  "deck": "Bank Indonesia memastikan uang rupiah kertas bertanda tangan mantan Menkeu Purbaya Yudhi Sadewa tetap sah dipakai meski pejabat penandatangan sudah berganti.",
  "date": "22 September 2026",
  "image": "assets/img/uang-purbaya-diburu-bi-tegaskan-tetap-sah.jpg",
  "imageV": "muclyw6i",
  "tags": [
   "Bank Indonesia",
   "rupiah",
   "Purbaya Yudhi Sadewa",
   "pergantian pejabat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468653-uang-rupiah-bertanda-tangan-purbaya-jadi-buruan-bi-angkat-bicara-soal-keabsahannya"
 },
 {
  "slug": "cdia-bagikan-dividen-interim-us-10-juta-cair-22-oktober",
  "category": "Aksi Korporasi",
  "title": "CDIA Bagikan [Dividen] Interim US$10 Juta, Cair 22 Oktober",
  "deck": "Chandra Daya Investasi menjadwalkan dividen interim tahun buku 2026 sebesar Rp1,422181 per saham, senilai total US$10 juta, dibayar pada 22 Oktober 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CDIA",
   "dividen interim",
   "Chandra Daya Investasi",
   "jadwal dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7a29f48d58_b6437681b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-kejar-investasi-listrik-100-gw-menuju-nze-2050",
  "category": "Energi",
  "title": "Pemerintah Kejar Investasi Listrik [100 GW] Menuju NZE 2050",
  "deck": "Pemerintah mematok kebutuhan investasi US$70-73 miliar untuk menambah kapasitas pembangkit listrik 100 gigawatt dan menaikkan porsi energi terbarukan menjadi 70 persen dalam RUPTL.",
  "date": "22 September 2026",
  "image": "assets/img/pemerintah-kejar-investasi-listrik-100-gw-menuju-nze-2050.jpg",
  "imageV": "mucgn999",
  "tags": [
   "EBT",
   "RUPTL",
   "PLN",
   "Investasi Listrik"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/menuju-nze-2050-2060-pemerintah-dorong-investasi-kelistrikan-100-gw-dan-penguatan-ebt",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-6-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama [Tambah] 6,3 Juta Saham",
  "deck": "Tunggal Jaya Investama melaporkan pembelian tidak langsung 6,32 juta saham IMPC pada 18 dan 21 September 2026, menaikkan hak suaranya tipis ke 38,43 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-6940-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amran-buka-peluang-bumn-kelola-cadangan-kedelai",
  "category": "BUMN",
  "title": "Amran Buka Peluang [BUMN] Kelola Cadangan Kedelai",
  "deck": "Kepala Bapanas Amran Sulaiman menyatakan BUMN bisa direkomendasikan mengelola cadangan kedelai nasional, asal sesuai regulasi yang masih akan dikaji.",
  "date": "22 September 2026",
  "image": "assets/img/amran-buka-peluang-bumn-kelola-cadangan-kedelai.jpg",
  "imageV": "mucgn9nn",
  "tags": [
   "kedelai",
   "BUMN",
   "Bapanas",
   "ketahanan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468623-amran-buka-peluang-bumn-kelola-cadangan-kedelai-stok-2026-diproyeksi-surplus-2909-ribu-ton"
 },
 {
  "slug": "akku-gelar-public-expose-klaim-belum-ada-keluhan-soal-suspensi",
  "category": "Aksi Korporasi",
  "title": "AKKU Gelar Public Expose, Klaim Belum Ada [Keluhan] Soal Suspensi",
  "deck": "AKKU gelar public expose insidentil 18 September, direksi ungkap belum ada keluhan pemegang saham dan optimistis opini disclaimer tak berulang di laporan akhir 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKKU",
   "suspensi saham",
   "public expose",
   "opini audit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9bf2124a2e_5a14b10308.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-bakrie-sumatera-keluar-dari-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "UNSP Bakrie Sumatera Keluar dari [Pemantauan Khusus] BEI",
  "deck": "Bursa Efek Indonesia mencabut status pemantauan khusus saham UNSP dan memindahkannya ke Papan Pengembangan, efektif 23 September 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "BEI",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b0083c4538_97b65792d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dprd-dki-minta-rencana-obligasi-daerah-ditinjau-ulang",
  "category": "Pasar Modal",
  "title": "DPRD DKI Minta Rencana [Obligasi] Daerah Ditinjau Ulang",
  "deck": "Anggota Komisi A DPRD DKI Kevin Wu meminta Pemprov DKI meninjau ulang rencana obligasi daerah karena beban pembayarannya berisiko menjadi tanggungan warga Jakarta.",
  "date": "22 September 2026",
  "image": "assets/img/dprd-dki-minta-rencana-obligasi-daerah-ditinjau-ulang.jpg",
  "imageV": "mucgna2g",
  "tags": [
   "obligasi daerah",
   "DPRD DKI Jakarta",
   "Pemprov DKI",
   "Kevin Wu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468626-dprd-dki-soroti-rencana-obligasi-daerah-beban-utang-jangan-sampai-jadi-tanggungan-warga"
 },
 {
  "slug": "bahlil-orang-mampu-jangan-pakai-pertalite-lagi",
  "category": "Energi",
  "title": "Bahlil: Orang Mampu [Jangan] Pakai Pertalite Lagi",
  "deck": "Menteri ESDM Bahlil Lahadalia minta masyarakat mampu tak pakai Pertalite, menyusul temuan polisi soal Pajero bertangki modifikasi untuk menampung BBM subsidi di Makassar.",
  "date": "22 September 2026",
  "image": "assets/img/bahlil-orang-mampu-jangan-pakai-pertalite-lagi.jpg",
  "imageV": "mucgnak2",
  "tags": [
   "Bahlil Lahadalia",
   "Pertalite",
   "BBM subsidi",
   "Kementerian ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468610-bahlil-minta-orang-berduit-jangan-pakai-pertalite-soroti-modus-pajero-tampung-bbm-subsidi"
 },
 {
  "slug": "vici-jadwalkan-rupslb-pada-29-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "VICI Jadwalkan [RUPSLB] pada 29 Oktober 2026",
  "deck": "Victoria Care Indonesia mengumumkan RUPSLB 29 Oktober 2026, dengan batas usulan pemegang saham 30 September dan pencatatan pemegang saham 6 Oktober.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "RUPSLB",
   "Victoria Care Indonesia",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac2f1dccd8_6d938c8943.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-pemegang-saham-asing-mb-investment-jual-292-400-saham",
  "category": "Aksi Korporasi",
  "title": "CYBR: Pemegang Saham Asing MB Investment [Jual] 292.400 Saham",
  "deck": "MB Investment Management Pte Ltd melepas 292.400 saham ITSEC Asia (CYBR) senilai sekitar Rp150,5 juta dalam dua transaksi pekan ini, menyisakan hak suara 26,18 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "pemegang saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-6817-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "utang-blbi-era-krisis-1998-akhirnya-lunas",
  "category": "Makroekonomi",
  "title": "Utang BLBI Era Krisis 1998 Akhirnya [Lunas]",
  "deck": "Pemerintah melunasi utang obligasi BLBI warisan krisis 1997-1998 pada Agustus 2026, dibayar memakai surplus Bank Indonesia senilai Rp55 triliun.",
  "date": "22 September 2026",
  "image": "assets/img/utang-blbi-era-krisis-1998-akhirnya-lunas.jpg",
  "imageV": "mucgnay5",
  "tags": [
   "BLBI",
   "utang pemerintah",
   "Bank Indonesia",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468619-utang-blbi-warisan-krisis-1998-akhirnya-lunas-pemerintah-bayar-pada-agustus-2026"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-tambah-830-000-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [tambah] 830.000 saham",
  "deck": "Edwin Soeryadjaya menambah kepemilikan saham Saratoga Investama Sedaya lewat dua transaksi pembelian pada 18 dan 21 September 2026, menaikkan hak suaranya tipis ke 35,9503 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "kepemilikan saham",
   "Edwin Soeryadjaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-8437-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "euro-rombak-direksi-restui-rights-issue-2-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "EURO Rombak Direksi, Restui [Rights Issue] 2 Miliar Saham",
  "deck": "Pemegang saham EURO merestui rights issue hingga 2 miliar saham baru, penambahan komisaris dan direksi baru, serta perubahan klasifikasi usaha dalam RUPSLB 18 September 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EURO",
   "rights issue",
   "RUPSLB",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/879cf3428e_8ddf859998.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-raih-opini-kualifikasian-atas-laporan-keuangan-2025",
  "category": "Aksi Korporasi",
  "title": "MTFN Raih Opini [Kualifikasian] atas Laporan Keuangan 2025",
  "deck": "Auditor memberi opini kualifikasian atas laporan keuangan 2025 MTFN karena pengungkapan ketidakpastian usaha tiga entitas anak yang akan dilepas dinilai belum memadai.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "opini kualifikasian",
   "laporan keuangan",
   "Capitalinc Investment"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/be7c1ab721_bb816ae05e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inaf-jadwalkan-rupslb-pada-29-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "INAF Jadwalkan [RUPSLB] pada 29 Oktober 2026",
  "deck": "Indofarma mengumumkan RUPSLB digelar 29 Oktober 2026, dengan tenggat usulan agenda pemegang saham 30 September dan pencatatan pemegang saham 6 Oktober 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INAF",
   "RUPSLB",
   "Indofarma",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1b128e2100_6f3099728d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-69-dana-ipo-berakhir-jadi-cadangan-kerugian",
  "category": "Aksi Korporasi",
  "title": "PIPA: 69% Dana IPO Berakhir Jadi Cadangan [Kerugian]",
  "deck": "Koreksi LRPD PIPA menunjukkan Rp64,55 miliar dari dana IPO, atau 68,85% dari total, berakhir sebagai cadangan kerugian penurunan nilai, bukan untuk ekspansi pabrik seperti rencana awal.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "Oxala Energy",
   "penggunaan dana IPO",
   "cadangan kerugian"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac52858693_0e29b84b2e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bird-ganti-dua-anggota-komite-audit-ketua-bertahan",
  "category": "Aksi Korporasi",
  "title": "BIRD Ganti Dua Anggota [Komite Audit], Ketua Bertahan",
  "deck": "Blue Bird Tbk mengganti dua anggota komite audit efektif 22 September 2026, sementara Setyo Wasisto melanjutkan sebagai ketua untuk periode kedua.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIRD",
   "Blue Bird",
   "komite audit",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/30e8475a38_db03c11987.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-pemegang-obligasi-setujui-restrukturisasi-kupon-5",
  "category": "Aksi Korporasi",
  "title": "WSKT: Pemegang Obligasi Setujui [Restrukturisasi] Kupon 5%",
  "deck": "97,14 persen pemegang Obligasi Berkelanjutan III Tahap IV Waskita menyetujui restrukturisasi kupon dari 9,75 menjadi 5 persen, dengan pembayaran pertama Rp36,26 miliar pada 23 Desember 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "restrukturisasi obligasi",
   "Waskita Karya",
   "obligasi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cf5bc0eeae_91fdccbd0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-bantah-ada-informasi-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "AYLS Bantah Ada Informasi Material di Balik [Volatilitas] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta AYLS menjelaskan lonjakan volatilitas transaksi sahamnya. Perseroan menjawab tidak ada informasi material atau rencana korporasi yang mendasarinya.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYLS",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c66c1f1591_7fdcc22809.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-suntik-rp9-93-miliar-ke-sof-usai-merger-dengan-om",
  "category": "Aksi Korporasi",
  "title": "SMMA Suntik Rp9,93 Miliar ke SOF Usai [Merger] dengan OM",
  "deck": "SMMA menambah penyertaan modal Rp9,93 miliar di Summit Oto Finance untuk mempertahankan porsi 15% setelah Oto Multiartha melebur ke perusahaan itu.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "merger",
   "Summit Oto Finance",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3d9c1131a2_9a4cf0d066.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-tambah-modal-rp5-miliar-ke-anak-usaha-dsb",
  "category": "Aksi Korporasi",
  "title": "SMMA Tambah Modal Rp5 Miliar ke Anak Usaha [DSB]",
  "deck": "SMMA menyuntik modal Rp5 miliar ke anak usahanya PT Dana Saham Bersama, menaikkan kepemilikannya dari 99,98 persen menjadi 99,99 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "Dana Saham Bersama",
   "penyertaan modal",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/30332f57e0_d4cdf5bc3d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnlf-jawab-bursa-tak-ada-info-material-picu-volatilitas",
  "category": "Aksi Korporasi",
  "title": "PNLF Jawab Bursa: Tak Ada Info Material Picu [Volatilitas]",
  "deck": "Menjawab permintaan penjelasan BEI atas lonjakan transaksi sahamnya, manajemen Panin Financial menyatakan tidak mengetahui informasi material apa pun dan tidak ada rencana aksi korporasi dalam waktu dekat.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNLF",
   "Panin Financial",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/824ed3c8dd_2e250dd896.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "petrokimia-gresik-raih-paten-manfaatkan-silika-limbah",
  "category": "Industri",
  "title": "Petrokimia Gresik Raih Paten Manfaatkan [Silika] Limbah",
  "deck": "Petrokimia Gresik meraih paten sederhana atas inovasi memakai produk samping silika sebagai pengganti bahan penyaring impor dalam produksi asam sulfat.",
  "date": "22 September 2026",
  "image": "assets/img/petrokimia-gresik-raih-paten-manfaatkan-silika-limbah.jpg",
  "imageV": "mucadwrq",
  "tags": [
   "Petrokimia Gresik",
   "paten",
   "silika",
   "asam sulfat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468572-ubah-produk-samping-jadi-solusi-agroindustri-petrokimia-gresik-raih-paten-inovasi-silika"
 },
 {
  "slug": "supr-protelindo-perpanjang-tender-sukarela-hingga-21-oktober",
  "category": "Aksi Korporasi",
  "title": "SUPR: Protelindo Perpanjang [Tender Sukarela] hingga 21 Oktober",
  "deck": "Protelindo memperpanjang masa tender sukarela saham SUPR untuk kedua kalinya hingga 21 Oktober 2026, periode terakhir yang diizinkan aturan OJK, setelah 74,39% saham publik ikut serta.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "tender offer",
   "go private",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cbb1ba81a9_cf8b60d5c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pbsa-rombak-nilai-saham-lewat-stock-split-ke-rp25",
  "category": "Aksi Korporasi",
  "title": "PBSA Rombak Nilai Saham Lewat [Stock Split] ke Rp25",
  "deck": "RUPSLB Paramita Bangun Sarana menyetujui pemecahan nilai nominal saham dari Rp50 menjadi Rp25 per lembar, disetujui 99,99% suara yang hadir.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PBSA",
   "stock split",
   "RUPSLB",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/05ab9e1487_cdc994147c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-perpanjang-tender-saham-solusi-tunas-pratama-terakhir",
  "category": "Aksi Korporasi",
  "title": "PRTL Perpanjang Tender Saham Solusi Tunas Pratama, [Terakhir]",
  "deck": "Protelindo memperpanjang untuk kedua kalinya masa penawaran tender sukarela atas saham Solusi Tunas Pratama hingga 21 Oktober 2026, periode terakhir yang diizinkan aturan OJK.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "tender offer",
   "Solusi Tunas Pratama",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/03f82f6c17_4e956c9f33.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbyb-jadwalkan-rupslb-pada-29-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BBYB Jadwalkan [RUPSLB] pada 29 Oktober 2026",
  "deck": "Bank Neo Commerce mengumumkan rencana RUPSLB 29 Oktober 2026, lengkap dengan tenggat usul agenda pemegang saham dan tanggal pencatatan pemegang saham yang berhak hadir.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBYB",
   "RUPSLB",
   "Bank Neo Commerce",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f7378ecd17_e9af4af860.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-879-investor-tunggu-rdg-bi",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.879, Investor Tunggu RDG BI",
  "deck": "Rupiah melemah 32 poin ke Rp17.879 per dolar AS jelang keputusan suku bunga BI, di tengah kenaikan suku bunga The Fed, BOJ, dan ECB.",
  "date": "22 September 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-879-investor-tunggu-rdg-bi.jpg",
  "imageV": "mucadx9a",
  "tags": [
   "rupiah",
   "dolar AS",
   "Bank Indonesia",
   "The Fed"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468553-rupiah-melemah-ke-rp17879-per-dolar-as-seiring-wait-and-see-investor-jelang-rdg-bi"
 },
 {
  "slug": "truk-pemegang-saham-baru-kuasai-15-hak-suara-guna-timur-raya",
  "category": "Aksi Korporasi",
  "title": "TRUK: Pemegang Saham Baru Kuasai [15%] Hak Suara Guna Timur Raya",
  "deck": "PT Pukul Rata Kanan membeli 65,25 juta saham TRUK senilai Rp27,93 miliar lewat repurchase agreement, hak suaranya melompat dari 0 menjadi 15 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "Guna Timur Raya",
   "kepemilikan saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-1723-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fast-gelar-rupslb-14-oktober-bahas-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "FAST Gelar RUPSLB 14 Oktober, Bahas [Perubahan] Direksi",
  "deck": "PT Fast Food Indonesia Tbk (FAST) memanggil pemegang saham untuk RUPSLB 14 Oktober 2026, membahas perubahan susunan direksi dan penyesuaian anggaran dasar.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FAST",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0441faf775_c005706033.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-pemegang-saham-baru-kuasai-5-via-repurchase-agreement",
  "category": "Aksi Korporasi",
  "title": "TRUK: Pemegang Saham Baru Kuasai 5% via [Repurchase Agreement]",
  "deck": "HAKIMSON GROWTH CAPITAL melaporkan kepemilikan baru 21,75 juta saham TRUK berjenis hak suara multiple lewat repurchase agreement, hak suara naik dari 0 persen menjadi 5 persen.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "Guna Timur Raya",
   "kepemilikan saham",
   "hak suara multiple"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-1484-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-tambah-saham-di-sma-rp9-5-m-transaksi-afiliasi",
  "category": "Aksi Korporasi",
  "title": "UNTR Tambah Saham di SMA Rp9,5 M, Transaksi [Afiliasi]",
  "deck": "Anak usaha UNTR, DTN dan ASPR, menambah kepemilikan saham di PT Stargate Mineral Asia senilai total Rp9,5 miliar untuk menjaga porsi kepemilikan dan memenuhi modal kerja SMA.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "Transaksi Afiliasi",
   "Stargate Mineral Asia",
   "Tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9d62d8c982_aa9c54996d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giias-semarang-2026-digelar-mobil-listrik-dominasi-peserta",
  "category": "Industri",
  "title": "GIIAS Semarang 2026 Digelar, [Mobil Listrik] Dominasi Peserta",
  "deck": "GIIAS Semarang 2026 digelar 30 September-4 Oktober dengan 19 merek peserta, mayoritas mobil listrik, sementara Pemprov Jawa Tengah mempertimbangkan relaksasi pajak kendaraan bermotor.",
  "date": "22 September 2026",
  "image": "assets/img/giias-semarang-2026-digelar-mobil-listrik-dominasi-peserta.jpg",
  "imageV": "muc4vv59",
  "tags": [
   "GIIAS Semarang 2026",
   "GAIKINDO",
   "mobil listrik",
   "Jawa Tengah"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/tingkatkan-ekonomi-giias-semarang-2026-mendapat-dukungan-pemprov-jawa-tengah/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "pendapatan-pupuk-indonesia-naik-ke-rp90-4-triliun-pada-2025",
  "category": "BUMN",
  "title": "Pendapatan Pupuk Indonesia Naik ke [Rp90,4] Triliun pada 2025",
  "deck": "Pendapatan Pupuk Indonesia naik dari Rp81,6 triliun menjadi Rp90,4 triliun pada 2025, seiring perubahan skema subsidi pupuk dan penurunan harga eceran tertinggi 20 persen bagi petani.",
  "date": "22 September 2026",
  "image": "assets/img/pendapatan-pupuk-indonesia-naik-ke-rp90-4-triliun-pada-2025.jpg",
  "imageV": "muc4vw9t",
  "tags": [
   "Pupuk Indonesia",
   "subsidi pupuk",
   "BUMN",
   "Fortune Indonesia 100"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/883/kinerja-dan-transformasi-bisnis-perkuat-posisi-pupuk-indonesia-di-fortune-indonesia-100",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "anak-krakatau-turun-status-jadi-waspada-radius-2-km-tetap",
  "category": "Energi",
  "title": "Anak Krakatau [Turun] Status jadi Waspada, Radius 2 Km Tetap",
  "deck": "Badan Geologi ESDM menurunkan status Gunung Anak Krakatau dari Siaga ke Waspada mulai 21 September 2026, setelah aktivitas kegempaan dan deformasi mereda sejak awal bulan.",
  "date": "22 September 2026",
  "image": "assets/img/anak-krakatau-turun-status-jadi-waspada-radius-2-km-tetap.jpg",
  "imageV": "muc4vxcn",
  "tags": [
   "Anak Krakatau",
   "Badan Geologi",
   "ESDM",
   "Status Gunung Api"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/aktivitas-anak-krakatau-menurun-badan-geologi-turunkan-status-dari-siaga-menjadi-waspada",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "produk-umkm-pilihan-busan-kemendag-masuk-tokopedia-dan-tiktok-shop",
  "category": "UMKM",
  "title": "Produk UMKM Pilihan Busan Kemendag Masuk [Tokopedia] dan TikTok Shop",
  "deck": "Kemendag menggandeng Tokopedia dan TikTok Shop membuka etalase khusus bagi produk UMKM kurasi Pilihan Busan, seiring aturan baru yang meminta lokapasar mengutamakan produk lokal.",
  "date": "22 September 2026",
  "image": "assets/img/produk-umkm-pilihan-busan-kemendag-masuk-tokopedia-dan-tiktok-shop.jpg",
  "imageV": "muc4vzub",
  "tags": [
   "UMKM",
   "Tokopedia",
   "TikTok Shop",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/produk-pilihan-busan-masuk-tokopedia-dan-tiktok-shop-kemendag-dorong-umkm-manfaatkan-social-commerce",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bi-kucurkan-rp2-97-miliar-untuk-7-provinsi-korban-karhutla",
  "category": "Makroekonomi",
  "title": "BI Kucurkan [Rp2,97 Miliar] untuk 7 Provinsi Korban Karhutla",
  "deck": "Bank Indonesia menyalurkan bantuan kemanusiaan Rp2,97 miliar dan menerjunkan 40 tenaga kesehatan ke tujuh provinsi yang terdampak kebakaran hutan dan lahan di Kalimantan serta Sumatra.",
  "date": "22 September 2026",
  "image": "assets/img/bi-kucurkan-rp2-97-miliar-untuk-7-provinsi-korban-karhutla.jpg",
  "imageV": "muc4wf04",
  "tags": [
   "Bank Indonesia",
   "karhutla",
   "bantuan kemanusiaan",
   "Kalimantan"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "hexa-akui-margin-tergerus-pangsa-pasar-ke-16-7-persen",
  "category": "Aksi Korporasi",
  "title": "HEXA Akui Margin Tergerus, [Pangsa Pasar] ke 16,7 Persen",
  "deck": "Paparan publik tahunan HEXA mengungkap margin laba tergerus, pangsa pasar turun ke 16,7 persen, dan realisasi kuartal pertama 2026 baru sekitar seperlima dari target tahunan.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEXA",
   "public expose",
   "pangsa pasar",
   "Hexindo Adiperkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac656a24ad_c309aedba7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-catur-dharma-lepas-seluruh-20-saham-guna-timur-raya",
  "category": "Aksi Korporasi",
  "title": "TRUK: Catur Dharma [Lepas] Seluruh 20% Saham Guna Timur Raya",
  "deck": "Catur Dharma Anugerah Surya melepas seluruh 87 juta saham atau 20 persen hak suaranya di Guna Timur Raya (TRUK) lewat repurchase agreement seharga Rp428 per saham pada 18 September 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "Guna Timur Raya",
   "kepemilikan saham",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-7169-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vico-bagikan-dividen-tunai-rp121-7-m-29-pemegang-saham-menolak",
  "category": "Aksi Korporasi",
  "title": "VICO Bagikan [Dividen] Tunai Rp121,7 M, 29% Pemegang Saham Menolak",
  "deck": "RUPSLB VICO menyetujui dividen tunai Rp8 per saham senilai Rp121,7 miliar, tapi hampir 29 persen suara yang hadir menyatakan tidak setuju.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "dividen",
   "RUPSLB",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3cb9b1a9ac_15e0b021ac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-33-700-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem Jual [33.700] Saham Lagi",
  "deck": "Henry Liem melepas 33.700 saham AKPI pada 21 September di harga Rp530, penjualan ketiga dalam kurang dari dua pekan.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima Industry",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22092026-8137-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vico-jadwalkan-pembayaran-dividen-rp121-7-m-22-oktober",
  "category": "Aksi Korporasi",
  "title": "VICO Jadwalkan Pembayaran Dividen Rp121,7 M [22 Oktober]",
  "deck": "RUPSLB VICO menyetujui dividen tunai Rp8 per saham, dengan tanggal pencatatan pemegang saham 30 September dan pembayaran 22 Oktober 2026, setelah 29 persen suara menolak.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "dividen",
   "RUPSLB",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b134757b35_21dd1889e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpxl-dirikan-anak-usaha-otomotif-auto-prime-indonesia",
  "category": "Aksi Korporasi",
  "title": "MPXL Dirikan Anak Usaha Otomotif [Auto Prime Indonesia]",
  "deck": "MPX Logistics mendirikan PT Auto Prime Indonesia untuk bisnis bengkel, cuci mobil, dan suku cadang, dengan modal disetor Rp3 miliar dan MPXL menguasai 55 persen saham.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPXL",
   "anak usaha",
   "otomotif",
   "diversifikasi bisnis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a7cd0a51c3_2c541258ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-ralat-pengumuman-rups-digelar-29-oktober-untuk-3-tahun-buku",
  "category": "Aksi Korporasi",
  "title": "BOSS Ralat Pengumuman RUPS, Digelar [29 Oktober] untuk 3 Tahun Buku",
  "deck": "Perseroan mengoreksi pengumuman RUPS sebelumnya dan memastikan RUPST tiga tahun buku (2023-2025) beserta RUPSLB digelar 29 Oktober 2026 di Jakarta, dengan batas usul agenda 30 September 2026.",
  "date": "22 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS",
   "RUPST",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/84d9e56943_00419b76a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "qris-antarnegara-raih-penghargaan-global-transaksi-rp7-6-triliun",
  "category": "Moneter",
  "title": "QRIS Antarnegara Raih Penghargaan Global, Transaksi [Rp7,6] Triliun",
  "deck": "Bank Indonesia meraih penghargaan internasional untuk QRIS Antarnegara di sela Sidang Majelis Umum PBB, dengan transaksi lintas negara tembus Rp7,63 triliun sejak 2022.",
  "date": "22 September 2026",
  "image": "assets/img/qris-antarnegara-raih-penghargaan-global-transaksi-rp7-6-triliun.jpg",
  "imageV": "mubx7yar",
  "tags": [
   "QRIS",
   "Bank Indonesia",
   "pembayaran lintas negara",
   "UMKM"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pnbp-minerba-rp108-13-triliun-esdm-klaim-harga-membaik",
  "category": "Energi",
  "title": "PNBP Minerba Rp108,13 Triliun, ESDM Klaim Harga [Membaik]",
  "deck": "Kementerian ESDM melaporkan PNBP minerba tembus Rp108,13 triliun hingga Agustus 2026, sembari mengklaim harga batu bara dan nikel membaik berkat penataan tata kelola.",
  "date": "22 September 2026",
  "image": "assets/img/pnbp-minerba-rp108-13-triliun-esdm-klaim-harga-membaik.jpg",
  "imageV": "mubv2fo3",
  "tags": [
   "minerba",
   "PNBP",
   "ESDM",
   "batu bara"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hasil-dari-perbaikan-tata-kelola-harga-komoditas-membaik-dan-pnbp-meningkat",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "laba-bersih-medc-melonjak-ke-us-287-6-juta-pada-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "Laba Bersih MEDC [Melonjak] ke US$287,6 Juta pada Semester I 2026",
  "deck": "MedcoEnergi (MEDC) mencatat laba bersih US$287,6 juta pada semester I 2026, melonjak dari US$36,1 juta tahun sebelumnya, ditopang produksi migas dan kontribusi Amman Mineral.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "laba bersih",
   "minyak dan gas",
   "Amman Mineral"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260921165840-64414-0/FinancialStatement-2026-II-MEDC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cani-ungkap-identitas-pembeli-kapal-tunda-ke-bei",
  "category": "Aksi Korporasi",
  "title": "CANI ungkap identitas [pembeli] kapal tunda ke BEI",
  "deck": "CANI menanggapi permintaan penjelasan BEI soal penjualan kapal tunda QAL Ranger, mengungkap identitas pembeli PT Lestari Lautan Mulia dan meminta perpanjangan waktu hingga 24 September 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CANI",
   "keterbukaan informasi",
   "BEI",
   "penjualan aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/11b5bfae26_cad26f168e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wskt-restrukturisasi-obligasi-efektif-kupon-turun-ke-5",
  "category": "Aksi Korporasi",
  "title": "WSKT [Restrukturisasi] Obligasi Efektif, Kupon Turun ke 5%",
  "deck": "WSKT dan wali amanat PT Bank Mega resmi mengubah perjanjian obligasi Seri B, jatuh tempo mundur ke 2034 dan kupon turun jadi 5 persen, efektif 17 September 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "obligasi",
   "restrukturisasi utang",
   "wali amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a547f3f4ad_8febaaaa51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vast-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "VAST Jawab Permintaan BEI soal [Volatilitas] Transaksi Saham",
  "deck": "Merespons surat permintaan penjelasan BEI, Vastland Indonesia menyatakan tidak ada informasi material yang belum diungkap dan tidak ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VAST",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0b21cb57b8_d99f2f038e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "freeport-ungkap-130-spesies-baru-di-ekosistem-papua",
  "category": "Industri",
  "title": "Freeport Ungkap [130] Spesies Baru di Ekosistem Papua",
  "deck": "Freeport Indonesia memaparkan temuan 130 spesies baru dan 14 tipe ekosistem di wilayah kerjanya dekat Taman Nasional Lorentz, sekaligus menekankan pentingnya data dan kolaborasi untuk konservasi.",
  "date": "21 September 2026",
  "image": "assets/img/freeport-ungkap-130-spesies-baru-di-ekosistem-papua.jpg",
  "imageV": "mubh43b6",
  "tags": [
   "Freeport",
   "Papua",
   "Konservasi",
   "Lingkungan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468500-130-spesies-baru-ditemukan-freeport-soroti-pentingnya-data-untuk-jaga-ekosistem-di-papua"
 },
 {
  "slug": "wskt-restrukturisasi-obligasi-jatuh-tempo-mundur-ke-2034",
  "category": "Aksi Korporasi",
  "title": "WSKT [Restrukturisasi] Obligasi, Jatuh Tempo Mundur ke 2034",
  "deck": "Waskita Karya mengubah jatuh tempo obligasi Seri B dari Mei 2024 menjadi Desember 2034 dan memangkas kupon dari 9,75% jadi 5% usai disetujui RUPO.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSKT",
   "obligasi",
   "restrukturisasi utang",
   "Waskita Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a6566e08a9_ba7b52190f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "data-coretax-diklaim-bocor-djp-bantah-ada-kejanggalan",
  "category": "Teknologi",
  "title": "Data Coretax Diklaim Bocor, DJP Bantah Ada [Kejanggalan]",
  "deck": "DJP membantah klaim kebocoran data wajib pajak di sistem Coretax yang viral di media sosial, dan menyebut ada kejanggalan pada data yang beredar.",
  "date": "21 September 2026",
  "image": "assets/img/data-coretax-diklaim-bocor-djp-bantah-ada-kejanggalan.jpg",
  "imageV": "mubh4456",
  "tags": [
   "Coretax",
   "DJP",
   "kebocoran data",
   "wajib pajak"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468484-data-coretax-diklaim-bocor-djp-buka-suara-dan-ungkap-kejanggalan"
 },
 {
  "slug": "rupiah-tertekan-ke-rp17-847-bi-sebut-penyebabnya",
  "category": "Moneter",
  "title": "Rupiah [Tertekan] ke Rp17.847, BI Sebut Penyebabnya",
  "deck": "BI mengaitkan pelemahan rupiah ke Rp17.847 per dolar AS dengan lonjakan harga minyak akibat gejolak Timur Tengah, kebutuhan valas importir, dan dana asing yang keluar.",
  "date": "21 September 2026",
  "image": "assets/img/rupiah-tertekan-ke-rp17-847-bi-sebut-penyebabnya.jpg",
  "imageV": "mubcbj8k",
  "tags": [
   "rupiah",
   "dolar AS",
   "Bank Indonesia",
   "harga minyak"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468482-rupiah-tertekan-ke-rp17847-per-dolar-bi-ungkap-biang-keroknya"
 },
 {
  "slug": "kkp-musnahkan-pakan-dan-alat-tangkap-ilegal-di-aceh",
  "category": "Industri",
  "title": "KKP [Musnahkan] Pakan dan Alat Tangkap Ilegal di Aceh",
  "deck": "KKP memusnahkan 1.075 kg pakan-obat ikan ilegal dan 15 alat tangkap merusak di Aceh, serta menyerahkan 4 kompresor sitaan ke tiga SMK.",
  "date": "21 September 2026",
  "image": "assets/img/kkp-musnahkan-pakan-dan-alat-tangkap-ilegal-di-aceh.jpg",
  "imageV": "mubbyqq9",
  "tags": [
   "KKP",
   "Perikanan Ilegal",
   "Banda Aceh",
   "Pengawasan Laut"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-musnahkan-satu-ton-pakan-obat-ikan-dan-alat-tangkap-ilegal-di-banda-aceh-kr3N.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "realisasi-investasi-ri-semester-i-tumbuh-7-2-persen-ke-rp1-010-6-t",
  "category": "Makroekonomi",
  "title": "Realisasi Investasi RI Semester I [Tumbuh] 7,2 Persen ke Rp1.010,6 T",
  "deck": "Kemenko Perekonomian paparkan data ekonomi terkini: investasi semester I 2026 tumbuh 7,2 persen jadi Rp1.010,6 triliun, Satgas Debottlenecking selesaikan 135 dari 177 aduan usaha.",
  "date": "21 September 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "investasi",
   "hilirisasi",
   "kawasan ekonomi khusus",
   "makroekonomi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7106/dorong-investasi-berkualitas-dan-pertumbuhan-ekonomi-daerah-pemerintah-perkuat-keterbukaan-informasi-publik",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "asian-games-2026-gratis-di-maxstream-tv-indihome",
  "category": "Bisnis",
  "title": "Asian Games 2026 [Gratis] di MAXStream TV IndiHome",
  "deck": "Pelanggan Paket Internet + TV IndiHome bisa nonton siaran Asian Games 2026 lewat MAXStream TV tanpa biaya tambahan, 19 September hingga 4 Oktober 2026.",
  "date": "21 September 2026",
  "image": "assets/img/asian-games-2026-gratis-di-maxstream-tv-indihome.jpg",
  "imageV": "mubbyrwp",
  "tags": [
   "Telkomsel",
   "IndiHome",
   "MAXStream TV",
   "Asian Games 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468490-asian-games-2026-tayang-di-maxstream-tv-indihome-tanpa-biaya-tambahan-semangat-indonesia-hadir-di-rumah"
 },
 {
  "slug": "bei-turunkan-batas-harga-saham-ke-rp1-per-28-september",
  "category": "Pasar Modal",
  "title": "BEI Turunkan Batas Harga Saham ke [Rp1] per 28 September",
  "deck": "BEI menurunkan batas harga saham terendah dari Rp50 menjadi Rp1 mulai 28 September 2026, disertai penyesuaian aturan auto rejection atas dan bawah.",
  "date": "21 September 2026",
  "image": "assets/img/bei-turunkan-batas-harga-saham-ke-rp1-per-28-september.jpg",
  "imageV": "mubbyt4t",
  "tags": [
   "BEI",
   "saham Rp1",
   "auto rejection",
   "ARA ARB"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468480-mulai-28-september-harga-saham-di-bei-bisa-turun-hingga-rp1-ini-aturan-barunya"
 },
 {
  "slug": "pemerintah-perketat-awasi-beras-fortifikasi",
  "category": "Industri",
  "title": "Pemerintah [Perketat] Awasi Beras Fortifikasi",
  "deck": "25 merek beras fortifikasi diduga tak penuhi standar gizi. Pemerintah perintahkan penarikan usai uji di empat laboratorium.",
  "date": "21 September 2026",
  "image": "assets/img/pemerintah-perketat-awasi-beras-fortifikasi.jpg",
  "imageV": "mubbytlp",
  "tags": [
   "beras fortifikasi",
   "Bapanas",
   "Kementan",
   "pengawasan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468479-pemerintah-perketat-pengawasan-beras-fortifikasi-25-merek-diduga-tak-sesuai-standar"
 },
 {
  "slug": "jsmr-jtt-beri-pinjaman-rp6-5-triliun-ke-anak-usaha-jjc",
  "category": "Aksi Korporasi",
  "title": "JSMR: JTT Beri Pinjaman [Rp6,5 Triliun] ke Anak Usaha JJC",
  "deck": "PT Jasamarga Transjawa Tol memberikan pinjaman pemegang saham Rp6,55 triliun kepada anak usahanya, PT Jasamarga Jalanlayang Cikampek, untuk kebutuhan bridging refinancing dan operasional 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "Transaksi Afiliasi",
   "Jasamarga Transjawa Tol",
   "Jasamarga Jalanlayang Cikampek"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b65f89912f_a4927e5a88.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dyan-teken-ppjb-tanah-bangunan-senilai-rp36-miliar",
  "category": "Aksi Korporasi",
  "title": "DYAN Teken PPJB Tanah-Bangunan Senilai [Rp36 Miliar]",
  "deck": "Anak usaha DYAN, Dyandra Promosindo, mengikat pembelian tanah dan bangunan seluas 1.505 m² dari Dana Pensiun Kompas Gramedia, dibayar bertahap hingga 2028.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DYAN",
   "Dyandra Promosindo",
   "PPJB",
   "aset tanah dan bangunan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d9a1c05b18_6254d70d8a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vici-ungkap-rencana-akuisisi-secret-garden-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "VICI Ungkap Rencana Akuisisi [Secret Garden] di Public Expose",
  "deck": "Direksi VICI membeberkan penjajakan akuisisi brand Secret Garden, capex Rp20-30 miliar, dan penyebab laba tertekan meski penjualan tumbuh dua digit.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "Public Expose",
   "Victoria Care Indonesia",
   "Akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f0ca1edc8e_659dd17e14.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xkgs-etf-emas-syariah-kim-melantai-di-bei-22-september",
  "category": "Aksi Korporasi",
  "title": "XKGS: [ETF] Emas Syariah KIM Melantai di BEI 22 September",
  "deck": "Bursa Efek Indonesia mencatatkan 32,4 juta unit penyertaan Reksa Dana Syariah KIM Gold ETF Sharia dengan kode XKGS, mulai diperdagangkan 22 September 2026 dengan harga perdana Rp310 per unit.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XKGS",
   "ETF",
   "reksa dana syariah",
   "emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/566b369146_d8eeddd1ec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "imf-utang-dunia-nyaris-sentuh-100-persen-pdb-global",
  "category": "Global",
  "title": "IMF: Utang Dunia [Nyaris] Sentuh 100 Persen PDB Global",
  "deck": "IMF memperingatkan utang publik dunia hampir menyentuh 100 persen PDB global, melampaui puncak pasca Perang Dunia II, di tengah kenaikan biaya pinjaman negara-negara berutang tinggi.",
  "date": "21 September 2026",
  "image": "assets/img/imf-utang-dunia-nyaris-sentuh-100-persen-pdb-global.jpg",
  "imageV": "mubbyu21",
  "tags": [
   "utang dunia",
   "IMF",
   "Kristalina Georgieva",
   "ekonomi global"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468473-imf-peringatkan-utang-dunia-makin-berat-as-hingga-negara-berkembang-terancam-tertekan"
 },
 {
  "slug": "dnrk-siapkan-dana-pelunasan-obligasi-viii-rp520-miliar",
  "category": "Aksi Korporasi",
  "title": "DNRK Siapkan Dana [Pelunasan] Obligasi VIII Rp520 Miliar",
  "deck": "PT Danareksa (Persero) mengonfirmasi ke BEI kesiapan dana untuk membayar pokok Rp520 miliar dan kupon 7,70% Obligasi VIII Seri B.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DNRK",
   "obligasi",
   "Danareksa",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1054cb2c87_b2a3e08086.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-rasio-hmetd-100-46-235-harga-teoretis-turun-ke-rp131-dilusi",
  "category": "Aksi Korporasi",
  "title": "FORU: Rasio HMETD 100:46.235, Harga Teoretis Turun ke Rp131 [dilusi]",
  "deck": "BEI menetapkan harga teoretis saham FORU Rp131 usai aksi rights issue dengan rasio 100:46.235 pada harga pelaksanaan Rp126 per saham, berlaku mulai 22 September 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "rights issue",
   "HMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Harga Teoretis FORU 260921-No. Peng-00174BEI.POP09-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupsu-sukuk-usai-gagal-bayar-21-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [RUPSU] Sukuk usai Gagal Bayar, 21 Oktober",
  "deck": "WIKA akan menggelar Rapat Umum Pemegang Sukuk Mudharabah Berkelanjutan III Tahap I 2022 pada 21 Oktober 2026, menyusul gagal bayar bagi hasil sukuk tersebut.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0c01935696_81842fa472.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupo-obligasi-tahap-ii-2022-20-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [RUPO] Obligasi Tahap II 2022, 20 Oktober",
  "deck": "WIKA menjadwalkan RUPO Obligasi Berkelanjutan II Tahap II 2022 pada 20 Oktober 2026, sehari sebelum rapat pemegang sukuk mudharabah, di tengah gagal bayar dan suspensi saham perseroan.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi korporasi",
   "RUPO",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/15737de547_a3c4ad9f35.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catatkan-474-554-saham-baru-dari-opsi-mesop",
  "category": "Aksi Korporasi",
  "title": "PGEO Catatkan 474.554 Saham Baru dari Opsi [MESOP]",
  "deck": "Bursa mencatatkan 474.554 saham baru PGEO hasil pelaksanaan opsi MESOP Tahap I dan III mulai 22 September 2026, menambah total saham beredar menjadi 41.922.757.485 lembar.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "MESOP",
   "Pertamina Geothermal Energy",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e436e519c1_e52fe4160e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-ganti-ketua-komite-audit-yoshihiro-kobi-gantikan-bonny-harry",
  "category": "Aksi Korporasi",
  "title": "UANG Ganti Ketua [Komite Audit], Yoshihiro Kobi Gantikan Bonny Harry",
  "deck": "Komite Audit PT Pakuan Tbk berganti susunan efektif 21 September 2026, dari empat menjadi tiga anggota, dengan Yoshihiro Kobi sebagai ketua baru.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "Komite Audit",
   "Tata Kelola Perusahaan",
   "PT Pakuan Tbk"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6f20b7dff1_edfb50eec9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdra-efektifkan-felix-aristo-ardian-jadi-direktur-konsumer",
  "category": "Aksi Korporasi",
  "title": "SDRA [Efektifkan] Felix Aristo Ardian Jadi Direktur Konsumer",
  "deck": "Woori Saudara (SDRA) mengefektifkan Felix Aristo Ardian sebagai Direktur Konsumer per 18 September 2026, sekaligus melaporkan realisasi dana rights issue 2024 senilai Rp3,06 triliun.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDRA",
   "Bank Woori Saudara",
   "Direksi",
   "Rights Issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7f277c8ed8_b73873130a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bssr-bagikan-dividen-interim-us-60-juta-cair-9-oktober",
  "category": "Aksi Korporasi",
  "title": "BSSR Bagikan [Dividen] Interim US$60 Juta, Cair 9 Oktober",
  "deck": "Baramulti Suksessarana membagikan dividen interim tahun buku 2026 senilai US$60 juta atau Rp406,16 per saham, dengan pembayaran dijadwalkan 9 Oktober 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSSR",
   "dividen interim",
   "Baramulti Suksessarana",
   "emiten batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/327ed9e2d4_8146ecfed4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amran-minta-25-merek-beras-fortifikasi-setop-produksi",
  "category": "Industri",
  "title": "Amran Minta 25 Merek Beras Fortifikasi [Setop] Produksi",
  "deck": "Kementan menemukan 25 merek beras fortifikasi diduga melanggar standar kandungan vitamin, Bulog diminta tambah pasokan ke ritel.",
  "date": "21 September 2026",
  "image": "assets/img/amran-minta-25-merek-beras-fortifikasi-setop-produksi.jpg",
  "imageV": "mub6o399",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468447-amran-minta-25-merek-beras-fortifikasi-setop-produksi-izin-terancam-dicabut"
 },
 {
  "slug": "mncn-teken-kerja-sama-strategis-dengan-rmab-nilai-belum-diungkap",
  "category": "Aksi Korporasi",
  "title": "MNCN Teken [Kerja Sama] Strategis dengan RMAB, Nilai Belum Diungkap",
  "deck": "MNCN menandatangani perjanjian kerja sama strategis dan usaha patungan dengan RMAB atas PT IMG Media Network, tapi nilai transaksi dan porsi saham yang berpindah belum diungkapkan.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MNCN",
   "IMG Media Network",
   "RMAB",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ffd3b970b6_07392aa8a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpkh-tempatkan-70-dana-haji-rp184-t-di-sukuk-negara",
  "category": "Perbankan",
  "title": "BPKH Tempatkan 70% Dana Haji Rp184 T di [Sukuk] Negara",
  "deck": "BPKH mengelola dana haji Rp184 triliun dengan mengutamakan keamanan dan likuiditas, menempatkan mayoritas portofolio di sukuk negara demi profil investasi yang konservatif.",
  "date": "21 September 2026",
  "image": "assets/img/bpkh-tempatkan-70-dana-haji-rp184-t-di-sukuk-negara.jpg",
  "imageV": "mub6o3oy",
  "tags": [
   "BPKH",
   "dana haji",
   "sukuk negara",
   "SBSN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468448-dana-haji-tembus-rp184-triliun-bpkh-prioritaskan-keamanan-dan-likuiditas"
 },
 {
  "slug": "harga-pertamax-tidak-berubah-pertamina-bantah-hoaks",
  "category": "Energi",
  "title": "Harga Pertamax [Tidak] Berubah, Pertamina Bantah Hoaks",
  "deck": "Pertamina Patra Niaga menegaskan harga BBM nonsubsidi termasuk Pertamax tidak berubah pada 21 September 2026, membantah kabar kenaikan harga yang beredar di media sosial.",
  "date": "21 September 2026",
  "image": "assets/img/harga-pertamax-tidak-berubah-pertamina-bantah-hoaks.jpg",
  "imageV": "mub6o47g",
  "tags": [
   "harga BBM",
   "Pertamax",
   "Pertamina",
   "hoaks"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468440-harga-bbm-pertamina-21-september-2026-tak-berubah-isu-pertamax-naik-dipastikan-hoaks"
 },
 {
  "slug": "telkomgroup-gandeng-china-unicom-garap-5-sektor-digital",
  "category": "Teknologi",
  "title": "TelkomGroup Gandeng [China Unicom], Garap 5 Sektor Digital",
  "deck": "TelkomGroup bersama Telkomsel, InfraNexia, dan Mitratel meneken nota kesepahaman dengan China Unicom Indonesia untuk menjajaki kerja sama di lima bidang digital, dari pusat data hingga IoT.",
  "date": "21 September 2026",
  "image": "assets/img/telkomgroup-gandeng-china-unicom-garap-5-sektor-digital.jpg",
  "imageV": "mub6o5du",
  "tags": [
   "Telkom",
   "China Unicom",
   "InfraNexia",
   "infrastruktur digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468445-telkomgroup-dan-china-unicom-jalin-kemitraan-strategis-ada-5-sektor-digital-jadi-sasaran"
 },
 {
  "slug": "jecx-sarana-meditama-tambah-saham-hak-suara-ke-33",
  "category": "Aksi Korporasi",
  "title": "JECX: Sarana Meditama Tambah Saham, Hak Suara ke [33%]",
  "deck": "PT Sarana Meditama Metropolitan Tbk menambah kepemilikan tidak langsung di JECX sebanyak 1.174.500 saham pada 18 September 2026, menaikkan hak suaranya dari 32,97% menjadi 33,00%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Sarana Meditama Metropolitan",
   "kepemilikan saham",
   "JEC Eye Hospitals"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-7121-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-soroti-bank-buffer-tipis-ldr-perbankan-88-38",
  "category": "Perbankan",
  "title": "OJK Soroti Bank Buffer [Tipis], LDR Perbankan 88,38%",
  "deck": "OJK mengawasi bank dengan cadangan likuiditas tipis, sementara rasio kredit terhadap simpanan perbankan naik ke 88,38 persen pada Juli 2026.",
  "date": "21 September 2026",
  "image": "assets/img/ojk-soroti-bank-buffer-tipis-ldr-perbankan-88-38.jpg",
  "imageV": "mub6o5ta",
  "tags": [
   "OJK",
   "likuiditas perbankan",
   "LDR",
   "LCR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468424-ojk-soroti-bank-dengan-buffer-likuiditas-tipis-rasio-ldr-capai-8838-persen"
 },
 {
  "slug": "pssi-bagi-saham-bonus-173-4-juta-lembar-dari-treasuri-rasio-30-1",
  "category": "Aksi Korporasi",
  "title": "PSSI Bagi [Saham Bonus] 173,4 Juta Lembar dari Treasuri, Rasio 30:1",
  "deck": "PSSI berencana membagikan 173,4 juta saham bonus dari saham treasuri dengan rasio 30:1, memenuhi kewajiban pengalihan saham hasil buyback 2021-2025 sesuai aturan OJK.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham bonus",
   "saham treasuri",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fae8c5faca_11772ea6b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-terjun-56-poin-ke-6-384-72-jelang-keputusan-bi",
  "category": "Pasar Modal",
  "title": "IHSG [Terjun] 56 Poin ke 6.384,72 Jelang Keputusan BI",
  "deck": "IHSG ditutup melemah 0,88 persen ke 6.384,72 saat investor menanti keputusan suku bunga RDG BI pekan ini, di tengah tekanan yield AS dan dolar.",
  "date": "21 September 2026",
  "image": "assets/img/ihsg-terjun-56-poin-ke-6-384-72-jelang-keputusan-bi.jpg",
  "imageV": "mub6o73u",
  "tags": [
   "ihsg",
   "bank indonesia",
   "suku bunga",
   "bursa efek indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468421-ihsg-terjun-56-poin-ke-638472-investor-bersiap-hadapi-keputusan-suku-bunga-bi"
 },
 {
  "slug": "aims-ungkap-ekuitas-anjlok-usai-pendapatan-cuma-rp93-juta",
  "category": "Aksi Korporasi",
  "title": "AIMS Ungkap Ekuitas [Anjlok] Usai Pendapatan Cuma Rp93 Juta",
  "deck": "Public expose tahunan AIMS mengungkap pendapatan 2025 anjlok ke Rp93 juta, membuat perusahaan merugi dan ekuitas turun tajam akibat kendala regulasi RKAB tambang rekanan.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AIMS",
   "public expose",
   "ekuitas",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6c60b2c061_63f2b2baca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tnca-ganti-ketua-komite-audit-per-18-september-2026",
  "category": "Aksi Korporasi",
  "title": "TNCA Ganti Ketua [Komite Audit] per 18 September 2026",
  "deck": "TNCA mengganti ketua komite audit dari Achmad Sutjipto ke R. Bagus Panuntun efektif 18 September 2026, sementara dua anggota lain tetap menjabat.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TNCA",
   "komite audit",
   "tata kelola perusahaan",
   "Trimuda Nuansa Citra"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a3c07675d1_8e848f7f7d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-dan-blu-buka-investasi-emas-modal-rp10-000",
  "category": "Perbankan",
  "title": "Pegadaian dan blu Buka Investasi Emas Modal [Rp10.000]",
  "deck": "BCA Digital dan Pegadaian meluncurkan bluInvest Emas di aplikasi blu, memungkinkan nasabah membeli dan memantau emas digital mulai dari Rp10.000 dalam satu aplikasi.",
  "date": "21 September 2026",
  "image": "assets/img/pegadaian-dan-blu-buka-investasi-emas-modal-rp10-000.jpg",
  "imageV": "mub6o7in",
  "tags": [
   "Pegadaian",
   "blu BCA Digital",
   "Tabungan Emas",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468427-pegadaian-gandeng-blu-lewat-bluinvest-emas-dengan-modal-rp10-ribu-investasi-emas-makin-mudah"
 },
 {
  "slug": "mdla-direksi-beli-100-000-saham-senilai-rp20-4-juta",
  "category": "Aksi Korporasi",
  "title": "MDLA: Direksi [Beli] 100.000 Saham Senilai Rp20,4 Juta",
  "deck": "Direksi PT Medela Potentia Tbk, Edbert Orotodan, menambah kepemilikan saham perseroan sebanyak 100.000 lembar pada 18 September 2026, menaikkan hak suaranya menjadi 0,014%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Medela Potentia",
   "kepemilikan saham direksi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-8484-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fore-pemegang-saham-tambah-kepemilikan-jadi-6",
  "category": "Aksi Korporasi",
  "title": "FORE: Pemegang Saham [Tambah] Kepemilikan Jadi 6%",
  "deck": "Ferry Sudjono membeli 2,21 juta saham FORE senilai sekitar Rp1,68 miliar pada 16 September 2026, menaikkan hak suaranya dari 5,97 persen menjadi 6 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-0022-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-targetkan-setop-impor-bensin-lewat-e50",
  "category": "Energi",
  "title": "ESDM Targetkan Setop Impor Bensin Lewat [E50]",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut RI berpeluang tak lagi impor bensin jadi jika program E50 berhasil diterapkan, menyusul suksesnya biodiesel B50.",
  "date": "21 September 2026",
  "image": "assets/img/esdm-targetkan-setop-impor-bensin-lewat-e50.jpg",
  "imageV": "mub6o8r2",
  "tags": [
   "E50",
   "bioetanol",
   "impor BBM",
   "ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468420-dorong-penerapan-e50-menteri-esdm-bahlil-sebut-ri-berpeluang-tak-lagi-impor-bensin-jadi"
 },
 {
  "slug": "ppgl-rinci-rencana-pmthmetd-77-juta-saham-baru",
  "category": "Aksi Korporasi",
  "title": "PPGL Rinci Rencana [PMTHMETD] 77 Juta Saham Baru",
  "deck": "PPGL merilis keterbukaan informasi rinci soal rencana penerbitan hingga 77.117.802 saham baru tanpa hak memesan efek terlebih dahulu, dengan RUPSLB dijadwalkan 23 Oktober 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "PMTHMETD",
   "rights issue",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8b217cbc52_5cce030f7a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-tambah-saham-lewat-repo-suara-ke-15-58",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah Saham Lewat [Repo], Suara ke 15,58%",
  "deck": "Samuel Sekuritas Indonesia selaku direksi NSSS mencatat penambahan bersih 363,4 juta saham lewat transaksi repo pada 21 September 2026, mengerek hak suaranya ke 15,58 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "kepemilikan direksi",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-7501-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-batasi-kepemilikan-saham-bursa-efek-maksimal-5",
  "category": "Pasar Modal",
  "title": "OJK [Batasi] Kepemilikan Saham Bursa Efek Maksimal 5%",
  "deck": "POJK Nomor 13/2026 membuka jalan demutualisasi Bursa Efek Indonesia, dengan batas kepemilikan saham maksimal 5 persen per pihak.",
  "date": "21 September 2026",
  "image": "assets/img/ojk-batasi-kepemilikan-saham-bursa-efek-maksimal-5.jpg",
  "imageV": "mub6o95a",
  "tags": [
   "OJK",
   "POJK 13/2026",
   "demutualisasi",
   "bursa efek"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468418-ojk-terbitkan-aturan-baru-pemegang-saham-bursa-efek-kepemilikan-dibatasi-maksimal-5-persen"
 },
 {
  "slug": "pssi-jadwalkan-rupslb-pada-28-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "PSSI Jadwalkan [RUPSLB] pada 28 Oktober 2026",
  "deck": "PT IMC Pelita Logistik Tbk mengumumkan rencana RUPSLB 28 Oktober 2026, dengan cutoff pemegang saham 5 Oktober dan pemanggilan resmi 6 Oktober 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "RUPSLB",
   "IMC Pelita Logistik",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/62cacb1ade_aa34ec18a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-aims-sepakat-tanpa-dividen-laba-ditahan-jadi-modal",
  "category": "Aksi Korporasi",
  "title": "RUPST AIMS Sepakat [Tanpa Dividen], Laba Ditahan Jadi Modal",
  "deck": "RUPST AIMS mengesahkan laporan tahunan 2025, memutuskan tidak membagikan dividen, dan menyerahkan penentuan gaji direksi serta penunjukan auditor 2026 ke Dewan Komisaris.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AIMS",
   "RUPST",
   "dividen",
   "laba ditahan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/416d501ab7_0799f21681.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-masukkan-cash-ke-pemantauan-khusus-ekuitas-negatif",
  "category": "Aksi Korporasi",
  "title": "BEI Masukkan CASH ke Pemantauan Khusus, Ekuitas [Negatif]",
  "deck": "Bursa Efek Indonesia memasukkan saham CASH ke daftar Pemantauan Khusus mulai 22 September 2026 setelah ekuitas perusahaan tercatat negatif pada laporan keuangan terakhir.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez",
   "Pemantauan Khusus",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3f2a0425ed_b2aed5aa6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-saham-direksi-berkurang-281-juta-via-pencairan-repo",
  "category": "Aksi Korporasi",
  "title": "BKSL: Saham Direksi Berkurang 281 Juta via [Pencairan Repo]",
  "deck": "Samuel Sekuritas Indonesia melaporkan pelepasan 281,29 juta saham BKSL seharga Rp64 per lembar untuk pencairan repo, hak suaranya turun dari 7,02% menjadi 6,85%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-9029-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bioetanol-e20-kemitraan-rakyat-wajib-30-persen",
  "category": "Energi",
  "title": "Bioetanol E20: Kemitraan Rakyat Wajib [30 Persen]",
  "deck": "Kementan menaikkan syarat kemitraan bioetanol untuk rakyat jadi minimal 30 persen, seiring target kebutuhan bioetanol 5,53 juta kiloliter hingga 2029 untuk program E20.",
  "date": "21 September 2026",
  "image": "assets/img/bioetanol-e20-kemitraan-rakyat-wajib-30-persen.jpg",
  "imageV": "mub1978p",
  "tags": [
   "bioetanol",
   "Kementan",
   "energi terbarukan",
   "kemitraan petani"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8161",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "kementan-kejar-lahan-bioetanol-2-juta-hektare",
  "category": "Energi",
  "title": "Kementan Kejar Lahan Bioetanol [2 Juta] Hektare",
  "deck": "Kementerian Pertanian menyiapkan lahan tebu, singkong, dan jagung hingga 2 juta hektare untuk bahan baku bioetanol, dengan pembiayaan pabrik dibagi antara BUMN dan swasta.",
  "date": "21 September 2026",
  "image": "assets/img/kementan-kejar-lahan-bioetanol-2-juta-hektare.jpg",
  "imageV": "mub197yj",
  "tags": [
   "bioetanol",
   "Kementerian Pertanian",
   "energi terbarukan",
   "lahan pertanian"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8162",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "mendag-pantau-pasar-sleman-harga-bapok-diklaim-stabil",
  "category": "Makroekonomi",
  "title": "Mendag Pantau Pasar Sleman, Harga Bapok Diklaim [Stabil]",
  "deck": "Menteri Perdagangan Budi Santoso memantau harga bahan pokok di Pasar Potrojayan, Sleman, dan menyebut mayoritas komoditas masih di bawah harga acuan pemerintah.",
  "date": "21 September 2026",
  "image": "assets/img/mendag-pantau-pasar-sleman-harga-bapok-diklaim-stabil.jpg",
  "imageV": "mub199zj",
  "tags": [
   "harga pangan",
   "Kementerian Perdagangan",
   "Sleman",
   "HET-HA"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/pantau-pasar-potrojayan-di-sleman-mendag-busan-pemerintah-terus-jaga-harga-keseimbangan-bapok",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "real-enam-berlian-sinergi-lepas-100-juta-saham",
  "category": "Aksi Korporasi",
  "title": "REAL: Enam Berlian Sinergi Lepas [100 Juta] Saham",
  "deck": "PT Enam Berlian Sinergi mengurangi kepemilikan di REAL sebanyak 100 juta saham pada 17 September 2026, hak suara turun dari 46,72% menjadi 45,22%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REAL",
   "PT Enam Berlian Sinergi",
   "kepemilikan saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-0949-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-lepas-100-8-juta-saham-via-pencairan-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi Lepas 100,8 Juta Saham via [Pencairan Repo]",
  "deck": "Direksi FILM melaporkan pencairan repo saham senilai sekitar Rp143,6 miliar, hak suaranya turun dari 9,64% menjadi 8,71% usai melepas 100,8 juta saham pada 21 September 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-5719-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-ubah-aturan-pnbp-kini-lebih-penting-dari-produksi",
  "category": "Energi",
  "title": "Bahlil Ubah Aturan, PNBP Kini Lebih [Penting] dari Produksi",
  "deck": "Menteri ESDM Bahlil Lahadalia menata batu bara dan nikel lewat BMKS dan ekspor satu pintu Danantara SDI, produksi tak lagi jadi ukuran utama dibanding penerimaan negara.",
  "date": "21 September 2026",
  "image": "assets/img/bahlil-ubah-aturan-pnbp-kini-lebih-penting-dari-produksi.jpg",
  "imageV": "mub19ai8",
  "tags": [
   "Batu Bara",
   "Nikel",
   "BMKS",
   "PNBP Minerba"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468410-bahlil-ungkap-cara-baru-atur-batu-bara-dan-nikel-produksi-tak-lagi-jadi-patokan-utama"
 },
 {
  "slug": "mrei-rombak-anggaran-dasar-ubah-masa-jabatan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "MREI Rombak Anggaran Dasar, Ubah [Masa Jabatan] Direksi-Komisaris",
  "deck": "RUPSLB 14 Agustus 2026 mengubah masa jabatan direksi dan komisaris MREI menjadi tetap 5 tahun, mengubah aturan rapat komisaris, dan menyederhanakan aturan pengumuman dividen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MREI",
   "Anggaran Dasar",
   "Tata Kelola",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a35034319a_7040ed4a45.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-direksi-tri-hartono-tambah-saham-5-000-lembar",
  "category": "Aksi Korporasi",
  "title": "GMFI: Direksi Tri Hartono [Tambah] Saham 5.000 Lembar",
  "deck": "Direktur GMFI Tri Hartono membeli 5.000 lembar saham pada 16 September 2026 seharga Rp59 per lembar, menggandakan kepemilikannya menjadi 10.000 lembar meski hak suaranya tetap 0,00 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "kepemilikan saham",
   "direksi",
   "laporan OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-7719-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-berencana-pmthmetd-ubah-bisnis-dan-domisili",
  "category": "Aksi Korporasi",
  "title": "VISI Berencana [PMTHMETD], Ubah Bisnis dan Domisili",
  "deck": "Menjawab surat BEI soal volatilitas transaksi, Satu Visi Putra Tbk mengungkap rencana private placement, perubahan bisnis, domisili, dan penyertaan saham di PT Hasna Medika Bakti Cirebon dalam tiga bulan ke depan.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "PMTHMETD",
   "RUPS",
   "Hasna Medika Bakti Cirebon"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8003d4c448_1e14dcd4c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asing-lepas-bumi-adro-rp348-m-brms-diburu",
  "category": "Pasar Modal",
  "title": "Asing [Lepas] BUMI-ADRO Rp348 M, BRMS Diburu",
  "deck": "Investor asing menjual saham BUMI dan ADRO senilai Rp348,4 miliar dalam sepekan, sementara BRMS mencatat pembelian bersih asing terbesar di sektor tambang.",
  "date": "21 September 2026",
  "image": "assets/img/asing-lepas-bumi-adro-rp348-m-brms-diburu.jpg",
  "imageV": "mub19ayd",
  "tags": [
   "bumi",
   "adro",
   "brms",
   "saham tambang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468397-asing-cabut-rp3484-miliar-dari-bumi-dan-adro-saham-tambang-lain-malah-diburu"
 },
 {
  "slug": "safe-pengendali-jual-294-300-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "SAFE: Pengendali Jual 294.300 Saham Lewat [Repo]",
  "deck": "Infiniti Wahana, pengendali Steady Safe, melepas 294.300 saham SAFE senilai Rp1.270 per lembar lewat skema repo, hak suara nyaris tak berubah.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe",
   "kepemilikan saham",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-7514-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "safe-pengendali-jual-188-600-saham-lewat-repo-suara-ke-56-59",
  "category": "Aksi Korporasi",
  "title": "SAFE: Pengendali Jual 188.600 Saham Lewat [Repo], Suara ke 56,59%",
  "deck": "Infiniti Wahana melepas 188.600 saham Steady Safe lewat repurchase agreement pada 17 September, hak suara pengendali turun tipis ke 56,59%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-1402-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pyfa-gelar-rupo-obligasi-berkelanjutan-i-pada-19-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "PYFA Gelar RUPO Obligasi [Berkelanjutan] I pada 19 Oktober 2026",
  "deck": "Pyridam Farma menjadwalkan Rapat Umum Pemegang Obligasi untuk Obligasi Berkelanjutan I Tahap I Tahun 2022 pada 19 Oktober 2026 di Jakarta, tanpa mencantumkan agenda rapat.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PYFA",
   "obligasi",
   "RUPO",
   "Pyridam Farma"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4f02c39a34_76114fb83b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcpi-kepemilikan-cgs-international-naik-ke-5-09-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "TCPI: Kepemilikan CGS International Naik ke [5,09%] Lewat Repo",
  "deck": "CGS International Sekuritas Indonesia melaporkan penambahan 14,4 juta saham TCPI sebagai jaminan repo, mengangkat hak suaranya dari 4,79% menjadi 5,09% dan melewati ambang wajib lapor 5%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCPI",
   "kepemilikan saham",
   "repo saham",
   "CGS International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-9960-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-doni-mora-jual-lagi-saham-rp53-5-juta",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi Doni Mora Jual [Lagi] Saham Rp53,5 Juta",
  "deck": "Direksi ITSEC Asia (CYBR), Doni Mora, kembali menjual saham, 100.000 lembar senilai Rp53,5 juta pada 18 September 2026, tanpa mengubah hak suaranya yang tetap 0,033%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "transaksi saham direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-0586-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-asing-borong-saham-lagi-rp370-juta",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi Asing [Borong] Saham Lagi Rp370 Juta",
  "deck": "Patrick Rudolf Dannacher, direksi ITSEC Asia, kembali membeli 706.700 saham CYBR senilai sekitar Rp370 juta dalam 11 transaksi pada 14-18 September 2026, melanjutkan aksi beli pekan sebelumnya.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-1557-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpin-ubs-tambah-3-2-juta-saham-via-repurchase-agreement",
  "category": "Aksi Korporasi",
  "title": "CPIN: UBS Tambah 3,2 Juta Saham via [Repurchase Agreement]",
  "deck": "UBS AG London menambah kepemilikan saham CPIN sebanyak 3,2 juta lembar lewat perjanjian pembelian kembali untuk lindung nilai transaksi derivatif nasabahnya.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPIN",
   "UBS",
   "kepemilikan saham",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-2312-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgli-bantah-ada-info-material-soal-lonjakan-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PGLI Bantah Ada Info Material soal [Lonjakan] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan PGLI setelah harga dan transaksi sahamnya melonjak pada 16 September 2026, perseroan menyatakan tidak mengetahui penyebabnya.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGLI",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6915255ac7_6b94824fe9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asean-godok-peta-jalan-semikonduktor-dan-koridor-kalimantan",
  "category": "Global",
  "title": "ASEAN Godok Peta Jalan [Semikonduktor] dan Koridor Kalimantan",
  "deck": "Pertemuan Menteri Ekonomi ASEAN di Manila membahas progres agenda prioritas ekonomi, dari peta jalan semikonduktor hingga kesiapan Koridor Kalimantan yang ditargetkan beroperasi 2027.",
  "date": "21 September 2026",
  "image": "assets/img/asean-godok-peta-jalan-semikonduktor-dan-koridor-kalimantan.jpg",
  "imageV": "muav8f7y",
  "tags": [
   "ASEAN",
   "Semikonduktor",
   "Perdagangan Internasional",
   "Borneo Corridor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-apresiasi-kemajuan-capaian-prioritas-ekonomi-asean-di-bawah-keketuaan-filipina",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kopi-jawab-permintaan-bursa-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "KOPI Jawab Permintaan Bursa soal [Volatilitas] Sahamnya",
  "deck": "PT Mitra Energi Persada Tbk menegaskan tidak ada informasi material di balik pergerakan saham KOPI, menyusul permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOPI",
   "Mitra Energi Persada",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eddf65841b_2041658f23.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-angkut-5-1-ton-sampah-dari-kali-krukut",
  "category": "BUMN",
  "title": "Telkom [Angkut] 5,1 Ton Sampah dari Kali Krukut",
  "deck": "TelkomGroup bersama Pemprov DKI Jakarta mengangkut 5,1 ton sampah dari Kali Krukut dalam aksi bersih memperingati Hari Sungai dan World Cleanup Day.",
  "date": "21 September 2026",
  "image": "assets/img/telkom-angkut-5-1-ton-sampah-dari-kali-krukut.jpg",
  "imageV": "muav8g62",
  "tags": [
   "Telkom",
   "Kali Krukut",
   "World Cleanup Day",
   "ESG"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468365-peringati-hari-sungai-dan-world-cleanup-day-telkomgroup-angkut-51-ton-sampah-dari-kali-krukut"
 },
 {
  "slug": "wika-jadwalkan-rupsu-sukuk-mudharabah-tahap-i-2021-19-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [RUPSU] Sukuk Mudharabah Tahap I 2021, 19 Oktober",
  "deck": "WIKA mengumumkan rencana rapat pemegang Sukuk Mudharabah Berkelanjutan II Tahap I 2021 pada 19 Oktober 2026, salah satu dari beberapa rapat kreditur yang dijadwalkan setelah gagal bayar.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bf99bb7d9f_6ecde0cc22.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-rupo-obligasi-berkelanjutan-ii-19-oktober",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [RUPO] Obligasi Berkelanjutan II, 19 Oktober",
  "deck": "WIKA akan menggelar RUPO untuk Obligasi Berkelanjutan II Tahap I 2021 pada 19 Oktober 2026, rapat pemegang utang keempat yang dijadwalkan perseroan dalam sepekan terakhir.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "RUPO",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/36dd64f183_e661f5faef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-rinci-dasar-diskonto-revaluasi-kebun-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "UNSP Rinci Dasar Diskonto Revaluasi [Kebun] ke Bursa",
  "deck": "Menjawab pertanyaan lanjutan BEI, UNSP membeberkan asumsi beta, imbal hasil obligasi, dan suku bunga di balik surplus revaluasi kebun Rp3,06 triliun yang mengangkat ekuitasnya.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "revaluasi aset",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5bb4aea5d2_f9a50dd4ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpin-hery-tambah-6-95-juta-saham-via-repurchase-agreement",
  "category": "Aksi Korporasi",
  "title": "CPIN: HERY Tambah 6,95 Juta Saham via [Repurchase Agreement]",
  "deck": "HERY menambah 6,95 juta saham CPIN lewat repurchase agreement seharga Rp3.090 per lembar pada 16 September 2026, mengerek hak suaranya dari 5,52 persen menjadi 5,56 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPIN",
   "kepemilikan saham",
   "repurchase agreement",
   "Charoen Pokphand"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-2278-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kementan-kerahkan-seribu-pompa-air-untuk-kebun-hadapi-kemarau",
  "category": "Industri",
  "title": "Kementan Kerahkan [Seribu] Pompa Air untuk Kebun Hadapi Kemarau",
  "deck": "Kementerian Pertanian menyalurkan sekitar 1.000 unit irigasi pompa untuk kebun serta 545 pompa pemadam kebakaran lahan ke sembilan provinsi guna mengantisipasi kekeringan.",
  "date": "21 September 2026",
  "image": "assets/img/kementan-kerahkan-seribu-pompa-air-untuk-kebun-hadapi-kemarau.jpg",
  "imageV": "muarfsnz",
  "tags": [
   "Kementan",
   "Irigasi",
   "Kekeringan",
   "Perkebunan"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8153",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "yelo-gagal-penuhi-kuorum-rupslb-kedua-tunggu-rupslb-ketiga",
  "category": "Aksi Korporasi",
  "title": "YELO Gagal Penuhi [Kuorum] RUPSLB Kedua, Tunggu RUPSLB Ketiga",
  "deck": "RUPSLB kedua YELO pada 17 September 2026 hanya dihadiri 36,533 persen pemegang saham, gagal penuhi syarat kuorum sehingga perseroan harus menggelar RUPSLB ketiga.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "RUPSLB",
   "kuorum",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac5d6257c8_47ecf6a7f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-panggil-rupslb-usulkan-buyback-saham-hingga-rp1-triliun",
  "category": "Aksi Korporasi",
  "title": "BTPS Panggil RUPSLB, Usulkan [Buyback] Saham hingga Rp1 Triliun",
  "deck": "RUPSLB BTPS digelar 13 Oktober 2026 untuk memutuskan rencana pembelian kembali saham hingga 10 persen modal dengan dana maksimal Rp1 triliun.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "RUPSLB",
   "buyback saham",
   "Bank BTPN Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8c8cebd70e_8b0b842574.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crab-laba-bersih-anjlok-53-utang-naik-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "CRAB: Laba Bersih Anjlok 53%, [Utang] Naik di Semester I 2026",
  "deck": "Materi paparan publik tahunan CRAB menunjukkan laba bersih semester I 2026 turun jadi Rp3,94 miliar dari Rp8,42 miliar setahun sebelumnya, sementara liabilitas naik ke Rp125,23 miliar.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "Toba Surimi Industries",
   "public expose",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b36da3f32b_f2f9afbc55.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-terima-kembali-120-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Terima Kembali [120 Juta] Saham Lewat Repo",
  "deck": "Direksi RLCO, Samuel Tumbuh Bersama, menerima kembali 120 juta saham lewat perjanjian repo pada 16 September 2026, menaikkan hak suaranya dari 3,58 persen menjadi 7,42 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan direksi",
   "repo saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-4729-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-direksi-kuasai-1-70-saham-via-transaksi-repo",
  "category": "Aksi Korporasi",
  "title": "KETR: Direksi Kuasai [1,70%] Saham via Transaksi Repo",
  "deck": "Direktur KETR Dani Samsul Ependi kini memiliki 48,3 juta saham perseroan senilai sekitar Rp9,66 miliar lewat transaksi repurchase agreement tidak langsung pada 17 September 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "kepemilikan saham",
   "direksi",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-7205-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-suara-direksi-melonjak-ke-36-75-usai-saham-repo-kembali",
  "category": "Aksi Korporasi",
  "title": "NSSS: Suara Direksi Melonjak ke [36,75%] Usai Saham Repo Kembali",
  "deck": "Direksi NSSS Samuel Tumbuh Bersama menerima kembali 3,59 miliar saham dari perjanjian repo per 18 September 2026, mengangkat hak suaranya dari 21,63% menjadi 36,75%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-6242-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-saham-direksi-kembali-dari-repo-suara-ke-21-63",
  "category": "Aksi Korporasi",
  "title": "NSSS: Saham Direksi Kembali dari Repo, Suara ke [21,63%]",
  "deck": "Direksi Samuel Tumbuh Bersama menerima kembali 1,79 miliar saham lewat perjanjian repo, hak suaranya di NSSS naik dari 14,07 persen menjadi 21,63 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-2472-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ketr-pemegang-mayoritas-lepas-48-3-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "KETR: Pemegang mayoritas lepas 48,3 juta saham via [repo]",
  "deck": "Pemegang saham mayoritas KETR melepas 48,3 juta saham lewat perjanjian jual beli kembali (repo) senilai Rp9,66 miliar untuk kebutuhan modal kerja, hak suaranya turun dari 54,83% menjadi 53,13%.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "kepemilikan saham",
   "repurchase agreement",
   "pemegang saham mayoritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-4165-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mkpi-direksi-samuel-tumbuh-bersama-tambah-saham-jadi-5-33",
  "category": "Aksi Korporasi",
  "title": "MKPI: [Direksi] Samuel Tumbuh Bersama Tambah Saham jadi 5,33%",
  "deck": "Direksi MKPI Samuel Tumbuh Bersama melaporkan penambahan 21,1 juta saham lewat pengembalian dari perjanjian repurchase, hak suaranya naik jadi 5,33 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKPI",
   "kepemilikan saham",
   "direksi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-7529-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-terima-kembali-58-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Terima Kembali [58 Juta] Saham Lewat Repo",
  "deck": "Direktur RLCO, Samuel Tumbuh Bersama, menerima kembali 58 juta saham lewat perjanjian repo, menaikkan kepemilikannya jadi 290 juta saham dan hak suara ke 9,28 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-0754-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-783-usai-suku-bunga-the-fed-naik",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.783 usai Suku Bunga The Fed Naik",
  "deck": "Rupiah melemah tipis ke Rp17.783 per dolar AS dipicu naiknya imbal hasil obligasi AS usai The Fed menaikkan suku bunga, sementara BI diperkirakan menahan suku bunga pada RDG pekan ini.",
  "date": "21 September 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-783-usai-suku-bunga-the-fed-naik.jpg",
  "imageV": "muarft6r",
  "tags": [
   "rupiah",
   "dolar AS",
   "BI",
   "The Fed"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468353-rupiah-melemah-ke-rp17783-per-dolar-as-dipengaruhi-kenaikan-imbal-hasil-obligasi-as"
 },
 {
  "slug": "safe-pengendali-tambah-100-200-saham-hak-suara-ke-56-57",
  "category": "Aksi Korporasi",
  "title": "SAFE: Pengendali Tambah 100.200 Saham, Hak Suara ke [56,57%]",
  "deck": "Infiniti Wahana, pemegang saham pengendali Steady Safe Tbk, membeli 100.200 saham tidak langsung seharga Rp380 per saham, menaikkan hak suara ke 56,57 persen.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe",
   "kepemilikan saham",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21092026-5017-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-rp10-000-ke-rp2-628-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] Rp10.000 ke Rp2.628.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp10.000 menjadi Rp2.628.000 per gram pada 21 September 2026, sementara harga buyback juga melemah ke Rp2.463.000 per gram.",
  "date": "21 September 2026",
  "image": "assets/img/harga-emas-antam-turun-rp10-000-ke-rp2-628-000-gram.jpg",
  "imageV": "muarftn0",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468346-harga-emas-antam-hari-ini-21-september-2026-turun-rp10000-jadi-rp2628000-per-gram"
 },
 {
  "slug": "jecx-direktur-keuangan-mundur-rups-digelar-maks-90-hari",
  "category": "Aksi Korporasi",
  "title": "JECX: Direktur Keuangan [Mundur], RUPS Digelar Maks 90 Hari",
  "deck": "Direktur Keuangan JECX, Budi Djatmiko Musaffa, mengajukan pengunduran diri efektif paling lambat 1 Januari 2027. Perseroan akan menggelar RUPS untuk memutuskan permohonan tersebut.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "Direksi",
   "Direktur Keuangan",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5d6fce94b8_28b2530122.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menaker-kebutuhan-tenaga-kerja-hijau-terus-meningkat",
  "category": "Ketenagakerjaan",
  "title": "Menaker: Kebutuhan Tenaga Kerja [Hijau] Terus Meningkat",
  "deck": "Menaker Yassierli menyebut kebutuhan tenaga kerja di sektor hijau akan terus naik seiring berkembangnya kendaraan listrik dan energi terbarukan, dengan target hingga 5,32 juta pekerja pada 2029.",
  "date": "21 September 2026",
  "image": "assets/img/pelatihan-vokasi.jpg",
  "tags": [
   "Ketenagakerjaan",
   "Transisi Hijau",
   "Vokasi",
   "Kendaraan Listrik"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/menaker-transisi-hijau-buka-peluang-baru-bagi-tenaga-kerja",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "hexa-jadwalkan-dividen-tunai-us-11-19-juta-bayar-21-oktober",
  "category": "Aksi Korporasi",
  "title": "HEXA Jadwalkan [Dividen] Tunai US$11,19 Juta, Bayar 21 Oktober",
  "deck": "Hexindo Adiperkasa menetapkan jadwal pembayaran dividen tunai tahun buku 2025 senilai US$11,19 juta, dengan tanggal pencatatan pemegang saham 29 September dan pembayaran 21 Oktober 2026.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEXA",
   "dividen",
   "Hexindo Adiperkasa",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/54b224f129_540743fd54.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bps-rilis-kbji-2026-gantikan-standar-jabatan-2014",
  "category": "Ketenagakerjaan",
  "title": "BPS Rilis [KBJI] 2026, Gantikan Standar Jabatan 2014",
  "deck": "BPS menerbitkan Klasifikasi Baku Jabatan Indonesia (KBJI) 2026 lewat Peraturan BPS Nomor 7/2026, menggantikan versi 2014 dan diselaraskan dengan standar internasional ISCO.",
  "date": "21 September 2026",
  "image": "assets/img/bursa-kerja-antre.jpg",
  "tags": [
   "KBJI",
   "Kemnaker",
   "BPS",
   "Pasar Kerja"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/menaker-kbji-2026-jadi-acuan-bersama-dunia-kerja",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "ammn-raup-laba-us-504-juta-h1-2026-utang-bersih-turun-13",
  "category": "Aksi Korporasi",
  "title": "AMMN raup laba US$504 juta H1 2026, utang bersih [turun] 13%",
  "deck": "AMMN membukukan lonjakan penjualan bersih menjadi US$2,05 miliar dan laba bersih US$504 juta pada semester I 2026, sekaligus memangkas utang bersih 13 persen menjadi US$5,03 miliar.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMMN",
   "tambang tembaga",
   "kinerja keuangan",
   "smelter"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fe5ca7679d_ed147552f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hexa-bagikan-dividen-us-11-19-juta-rotasi-komisaris",
  "category": "Aksi Korporasi",
  "title": "HEXA Bagikan [Dividen] US$11,19 Juta, Rotasi Komisaris",
  "deck": "RUPS Hexindo menyetujui dividen tunai 70 persen laba bersih senilai US$11,19 juta, sekaligus menukar posisi presiden komisaris antara Harry Danui dan Toto Wahyudiyanto.",
  "date": "21 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEXA",
   "RUPS",
   "dividen",
   "Hexindo Adiperkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a71c414081_be85d54f6e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "winr-pemegang-saham-utama-lepas-10-juta-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Utama Lepas [10 Juta] Saham Lagi",
  "deck": "Pemegang saham besar WINR menjual 10 juta saham pada 16 September 2026 seharga Rp25 per saham, melanjutkan pelepasan bertahap untuk menambah porsi saham beredar bebas.",
  "date": "20 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20092026-3558-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-kejar-1-juta-shm-gratis-untuk-mbr-di-2026",
  "category": "Bisnis",
  "title": "Pemerintah Kejar [1 Juta] SHM Gratis untuk MBR di 2026",
  "deck": "Pemerintah menargetkan 1 juta sertifikat tanah gratis bagi masyarakat berpenghasilan rendah pada 2026, menuju total 8 juta sertifikat sampai 2028.",
  "date": "20 September 2026",
  "image": "assets/img/pemerintah-kejar-1-juta-shm-gratis-untuk-mbr-di-2026.jpg",
  "imageV": "mu9ygouw",
  "tags": [
   "SHM gratis",
   "MBR",
   "ATR BPN",
   "sertifikat tanah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468278-1-juta-shm-gratis-2026-cek-3-kelompok-mbr-yang-bisa-dapat-sertifikat-tanpa-biaya"
 },
 {
  "slug": "utang-blbi-krisis-1998-lunas-pemerintah-pakai-surplus-bi",
  "category": "Makroekonomi",
  "title": "Utang BLBI Krisis 1998 [Lunas], Pemerintah Pakai Surplus BI",
  "deck": "Pemerintah melunasi seluruh surat utang penanganan krisis BLBI 1997-1998 pada Agustus 2026, dibayar Rp58 triliun dari surplus Bank Indonesia.",
  "date": "20 September 2026",
  "image": "assets/img/utang-blbi-krisis-1998-lunas-pemerintah-pakai-surplus-bi.jpg",
  "imageV": "mu9ygp8m",
  "tags": [
   "BLBI",
   "utang negara",
   "Bank Indonesia",
   "Kementerian Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468261-utang-blbi-era-krisis-1998-lunas-pemerintah-bayar-rp58-triliun-dari-surplus-bi"
 },
 {
  "slug": "adhi-teken-mra-restrukturisasi-utang-rp3-triliun-ke-bank-bumn",
  "category": "Aksi Korporasi",
  "title": "ADHI Teken MRA, [Restrukturisasi] Utang Rp3 Triliun ke Bank BUMN",
  "deck": "PT Adhi Karya menandatangani Master Restructuring Agreement senilai total Rp3 triliun dengan Bank Mandiri, BRI, dan BNI untuk merestrukturisasi utangnya.",
  "date": "20 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "restrukturisasi utang",
   "Bank Mandiri",
   "BUMN Karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7a1159ea22_3321df6211.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pupuk-indonesia-targetkan-emisi-turun-96-pada-2050",
  "category": "BUMN",
  "title": "Pupuk Indonesia Targetkan Emisi [Turun] 96% pada 2050",
  "deck": "Pupuk Indonesia menargetkan penurunan emisi 96 persen pada 2050 lewat amonia bersih, energi hijau, dan pengolahan CO2 jadi soda ash di Bontang.",
  "date": "20 September 2026",
  "image": "assets/img/pupuk-indonesia-targetkan-emisi-turun-96-pada-2050.jpg",
  "imageV": "mu9qylgt",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468251-pupuk-indonesia-kejar-penurunan-emisi-96-pada-2050-kembangkan-clean-ammonia-hingga-co2-jadi-soda-ash"
 },
 {
  "slug": "pertamina-eco-runfest-2026-ajak-publik-plogging-jaga-lingkungan",
  "category": "BUMN",
  "title": "Pertamina Eco RunFest 2026 Ajak Publik [Plogging] Jaga Lingkungan",
  "deck": "PT Pertamina memulai rangkaian Road to Eco RunFest 2026 menuju ajang puncak 6 Desember 2026, memadukan olahraga, musik, dan program keberlanjutan lingkungan.",
  "date": "20 September 2026",
  "image": "assets/img/pertamina-eco-runfest-2026-ajak-publik-plogging-jaga-lingkungan.jpg",
  "imageV": "mu9qylwz",
  "tags": [
   "Pertamina",
   "Eco RunFest 2026",
   "BUMN",
   "Lingkungan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468238-road-to-pertamina-eco-runfest-2026-mengajak-masyarakat-wujudkan-aksi-nyata-jaga-lingkungan"
 },
 {
  "slug": "ojol-pekerja-atau-mitra-pemerintah-belum-ambil-sikap",
  "category": "Ketenagakerjaan",
  "title": "Ojol Pekerja atau [Mitra]? Pemerintah Belum Ambil Sikap",
  "deck": "Perdebatan status hukum pengemudi ojol antara pekerja dan mitra kembali mengemuka, sementara pemerintah belum menentukan sikap resmi di tengah pertumbuhan ekonomi platform.",
  "date": "20 September 2026",
  "image": "assets/img/ojol-pekerja-atau-mitra-pemerintah-belum-ambil-sikap.jpg",
  "imageV": "mu9ln7d9",
  "tags": [
   "ojol",
   "ekonomi platform",
   "ketenagakerjaan",
   "ksos"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468219-ojol-pekerja-atau-mitra-pemerintah-dihadapkan-pada-status-baru-di-era-ekonomi-platform"
 },
 {
  "slug": "25-merek-beras-fortifikasi-disanksi-gizi-tak-sesuai-label",
  "category": "Industri",
  "title": "25 Merek Beras [Fortifikasi] Disanksi, Gizi Tak Sesuai Label",
  "deck": "Bapanas menindak 25 merek beras fortifikasi karena kandungan gizinya tak sesuai klaim di kemasan, mulai dari setop produksi hingga cabut izin edar.",
  "date": "20 September 2026",
  "image": "assets/img/25-merek-beras-fortifikasi-disanksi-gizi-tak-sesuai-label.jpg",
  "imageV": "mu9ln82e",
  "tags": [
   "beras fortifikasi",
   "bapanas",
   "SNI beras",
   "keamanan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468212-25-merek-beras-fortifikasi-kena-sanksi-kandungan-gizi-tak-sesuai-label"
 },
 {
  "slug": "rupiah-melemah-tujuh-hari-beruntun-ke-rp17-758-us",
  "category": "Moneter",
  "title": "[Rupiah] Melemah Tujuh Hari Beruntun ke Rp17.758/US$",
  "deck": "Rupiah melemah ketujuh kalinya beruntun ke Rp17.758 per dolar AS setelah The Fed menaikkan suku bunga, menambah tekanan biaya impor bagi industri manufaktur dan tekstil.",
  "date": "20 September 2026",
  "image": "assets/img/rupiah-melemah-tujuh-hari-beruntun-ke-rp17-758-us.jpg",
  "imageV": "mu9ln8hk",
  "tags": [
   "rupiah",
   "the fed",
   "suku bunga",
   "dolar as"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468210-rupiah-tertekan-7-hari-beruntun-industri-mulai-waspadai-lonjakan-biaya-impor"
 },
 {
  "slug": "pajak-air-tanah-10-kendalikan-pemakaian-di-jakarta",
  "category": "Bisnis",
  "title": "Pajak Air Tanah [10%] Kendalikan Pemakaian di Jakarta",
  "deck": "Pemprov DKI Jakarta mengenakan Pajak Air Tanah sebesar 10% untuk menekan eksploitasi air tanah sekaligus menambah pendapatan daerah dari sektor usaha.",
  "date": "20 September 2026",
  "image": "assets/img/pajak-air-tanah-10-kendalikan-pemakaian-di-jakarta.jpg",
  "imageV": "mu9avee3",
  "tags": [
   "pajak air tanah",
   "DKI Jakarta",
   "pajak daerah",
   "air tanah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468137-pajak-air-tanah-bantu-kendalikan-penggunaan-air-sekaligus-dukung-pembangunan-jakarta"
 },
 {
  "slug": "bmbl-direksi-jual-2-5-juta-saham-demi-likuiditas",
  "category": "Aksi Korporasi",
  "title": "BMBL: Direksi [Jual] 2,5 Juta Saham demi Likuiditas",
  "deck": "Direksi BMBL, Sentra Investa Maksima, melepas 2,5 juta saham senilai sekitar Rp76,5 juta pada 16 September 2026, sehingga hak suaranya turun dari 9,00 persen menjadi 8,76 persen.",
  "date": "20 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "kepemilikan saham",
   "direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20092026-5384-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-ungkap-keberlanjutan-tak-cukup-sekadar-csr",
  "category": "Industri",
  "title": "UNVR Ungkap [Keberlanjutan] Tak Cukup Sekadar CSR",
  "deck": "Unilever Indonesia menyebut prinsip keberlanjutan kini harus melekat di seluruh rantai bisnis, dari bahan baku hingga kemasan, dengan target emisi nol bersih pada 2039.",
  "date": "19 September 2026",
  "image": "assets/img/unvr-ungkap-keberlanjutan-tak-cukup-sekadar-csr.jpg",
  "imageV": "mu8hy5hg",
  "tags": [
   "Unilever",
   "keberlanjutan",
   "UNVR",
   "plastik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468104-keberlanjutan-tak-cuma-soal-csr-unilever-unvr-ungkap-perlunya-integrasi-dalam-rantai-bisnis"
 },
 {
  "slug": "pertamina-kembali-puncaki-fortune-indonesia-100-2026",
  "category": "BUMN",
  "title": "Pertamina Kembali [Puncaki] Fortune Indonesia 100 2026",
  "deck": "Pertamina kembali puncaki Fortune Indonesia 100 2026 dengan pendapatan Rp1.189,74 triliun dan laba bersih Rp56,23 triliun pada tahun fiskal 2025.",
  "date": "19 September 2026",
  "image": "assets/img/pertamina-kembali-puncaki-fortune-indonesia-100-2026.jpg",
  "imageV": "mu8hyhdn",
  "tags": [
   "Pertamina",
   "Fortune Indonesia 100",
   "BUMN",
   "Laba Bersih"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468097-pertamina-raih-posisi-puncak-di-fortune-indonesia-100-gala-2026-buktikan-ketahanan-kinerja-cemerlang"
 },
 {
  "slug": "devisa-pariwisata-ri-tembus-us-8-43-miliar-semester-i-2026",
  "category": "Makroekonomi",
  "title": "Devisa Pariwisata RI [Tembus] US$8,43 Miliar Semester I 2026",
  "deck": "Sektor pariwisata menyumbang devisa US$8,43 miliar pada semester I 2026, melanjutkan capaian tahun lalu senilai US$18,27 miliar.",
  "date": "19 September 2026",
  "image": "assets/img/devisa-pariwisata-ri-tembus-us-8-43-miliar-semester-i-2026.jpg",
  "imageV": "mu8aeh2k",
  "tags": [
   "devisa",
   "pariwisata",
   "wisatawan mancanegara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468077-devisa-pariwisata-indonesia-tembus-843-miliar-dolar-as-pada-semester-i-2026"
 },
 {
  "slug": "mtwi-cetak-laba-rp12-25-miliar-di-2024-aset-naik-64",
  "category": "Aksi Korporasi",
  "title": "MTWI Cetak [Laba] Rp12,25 Miliar di 2024, Aset Naik 64%",
  "deck": "Laporan keuangan auditan 2024 menunjukkan MTWI membukukan laba bersih Rp12,25 miliar, berbalik dari rugi Rp8,37 miliar setahun sebelumnya, ditopang lonjakan pendapatan premi asuransi 57,8 persen.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTWI",
   "laporan keuangan",
   "asuransi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f-27b08954-b399-455f-935a-fbb0531529f9-1/FinancialStatement-2024-Tahunan-MTWI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dummypoc-masuk-papan-pemantauan-khusus-akibat-likuiditas-rendah",
  "category": "Aksi Korporasi",
  "title": "DUMMYPOC Masuk Papan [Pemantauan Khusus] Akibat Likuiditas Rendah",
  "deck": "Bursa Efek Indonesia menempatkan saham berkode DUMMYPOC di papan pemantauan khusus mulai 19 September 2026 karena tidak memenuhi syarat free float dan likuiditas transaksi yang rendah.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DUMMYPOC",
   "pemantauan khusus",
   "BEI",
   "likuiditas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_DUMMYPOC_B031_43f9299e-7886-4634-9629-8e1bbf320d9e-20260919153827.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-bima-disetop-sementara-usai-mogok-karyawan",
  "category": "Aksi Korporasi",
  "title": "Saham BIMA Disetop Sementara Usai [Mogok] Karyawan",
  "deck": "Bursa Efek Indonesia menghentikan sementara perdagangan saham Primarindo Asia Infrastructure (BIMA) mulai 19 September 2026 akibat pemogokan karyawan, berlaku di seluruh pasar sejak sesi pra-pembukaan.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIMA",
   "Primarindo Asia Infrastructure",
   "suspensi saham",
   "mogok karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_BIMA_B007_8775acbf-6af4-4ad0-9f66-3f5adced629d-20260919151736.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-ubah-lorong-padat-jadi-kebun-sayur-lewat-agro-urban-madani",
  "category": "UMKM",
  "title": "PNM Ubah Lorong Padat Jadi Kebun Sayur Lewat [Agro Urban Madani]",
  "deck": "PNM memanfaatkan lorong dan gang di kawasan padat penduduk untuk budidaya sayur hidroponik, memberdayakan nasabah Mekaar demi ketahanan pangan keluarga.",
  "date": "19 September 2026",
  "image": "assets/img/pnm-ubah-lorong-padat-jadi-kebun-sayur-lewat-agro-urban-madani.jpg",
  "imageV": "mu8523oj",
  "tags": [
   "PNM",
   "Agro Urban Madani",
   "Mekaar",
   "ketahanan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/468061-pnm-sulap-lorong-kota-menjadi-sumber-pangan-lewat-program-agro-urban-madani"
 },
 {
  "slug": "mknt-ganti-seluruh-direksi-dan-komisaris-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "MKNT Ganti Seluruh [Direksi] dan Komisaris Usai RUPSLB",
  "deck": "RUPSLB MKNT menyetujui pengunduran seluruh direksi dan komisaris lama, sekaligus mengangkat Santoso Widjojo sebagai Direktur Utama dan Handoyo Setiawan sebagai Komisaris Utama.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "perubahan pengurus",
   "RUPSLB",
   "direksi dan komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3cfe8014c6_aeafdcc36f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-obligasi-hijau-rp21-8-miliar-delisting-2027",
  "category": "Aksi Korporasi",
  "title": "ARKO: Obligasi Hijau Rp21,8 Miliar [Delisting] 2027",
  "deck": "PT Arkora Hydro Tbk (ARKO) mengumumkan seri obligasi hijau senilai Rp21,8 miliar akan berhenti diperdagangkan di bursa mulai 18 September 2027, menjelang jatuh tempo 8 Agustus 2028.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "obligasi hijau",
   "jatuh tempo obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_ARKO_B012_bf57994d-fb5f-4a62-abb8-0c57f3a9e278-20260919174934.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaef-gelar-rups-bahas-dividen-hingga-saham-baru",
  "category": "Aksi Korporasi",
  "title": "KAEF Gelar RUPS, Bahas [Dividen] hingga Saham Baru",
  "deck": "Kimia Farma mengumumkan agenda RUPS Tahunan, Luar Biasa, dan Independen pada 19 September 2026, mencakup dividen, perubahan direksi, dan penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KAEF",
   "Kimia Farma",
   "RUPS",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_KAEF_E049_cfc81ddd-e707-460f-a2ef-224bed423710-20260919130430.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "winr-pemegang-saham-besar-jual-saham-demi-tambah-free-float",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Besar Jual Saham demi Tambah [Free Float]",
  "deck": "Pemenang Nusantara Internasional melepas 20,7 juta saham WINR senilai sekitar Rp562 juta pada 15 September 2026, menurunkan hak suaranya dari 47,72 persen menjadi 47,33 persen.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19092026-7762-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-delisting-etf-xbig-efektif-21-september-2026",
  "category": "Aksi Korporasi",
  "title": "BEI Delisting [ETF] XBIG Efektif 21 September 2026",
  "deck": "Bursa Efek Indonesia menghapus pencatatan ETF XBIG mulai 21 September 2026, hanya dua hari sejak pengumuman, karena permasalahan material di manajer investasi atau bank kustodian.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XBIG",
   "delisting",
   "ETF",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_XBIG_B006_de5c7661-e25c-40cb-b037-cc82961b1356-20260919112559.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "testdire03-delisting-dari-bei-efektif-28-september-2026",
  "category": "Aksi Korporasi",
  "title": "TESTDIRE03 [Delisting] dari BEI efektif 28 September 2026",
  "deck": "Bursa Efek Indonesia menghapus pencatatan DIRE TESTDIRE03 karena memenuhi kondisi pembubaran sesuai aturan OJK tentang DIRE berbentuk KIK, efektif 28 September 2026.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TESTDIRE03",
   "delisting",
   "DIRE",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_TESTDIRE03_B006_d7cec0a8-78ec-4fd8-b998-fc9ad1d102b6-20260919112332.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-tunjuk-ulang-direktur-utama-lewat-rups",
  "category": "Aksi Korporasi",
  "title": "ARKO Tunjuk Ulang Direktur Utama Lewat [RUPS]",
  "deck": "RUPS ARKO pada 10 September 2026 mengangkat kembali Aldo Henry Artoko sebagai Direktur Utama dan Arya Pradana Setidadharma sebagai Komisaris Utama, masa jabatan hingga 2032.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Direksi",
   "Komisaris",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260919_ARKO_E036_63b69155-fd96-489e-add3-2a0b585e2b01-20260919090227.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apia-ganti-komisaris-independen-romy-bareno-gantikan-abdul-muis",
  "category": "Aksi Korporasi",
  "title": "APIA Ganti [Komisaris] Independen: Romy Bareno Gantikan Abdul Muis",
  "deck": "Pemegang saham APIA memberhentikan Abdul Muis dan mengangkat Romy Bareno sebagai Komisaris Independen baru, efektif 16 September 2026, lewat keputusan di luar RUPS.",
  "date": "19 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APIA",
   "Angkasa Pura Indonesia",
   "Dewan Komisaris",
   "Perubahan Pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8471b1cd9e_5179895cc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-akuisisi-14-rs-senilai-rp9-triliun-dari-first-reit",
  "category": "Aksi Korporasi",
  "title": "SILO Akuisisi 14 RS Senilai Rp9 Triliun dari [First REIT]",
  "deck": "SILO berencana mengambil alih 14 perusahaan pemilik rumah sakit yang disewanya dari First REIT senilai Rp9 triliun, dibiayai pinjaman bank baru Rp8,9 triliun. RUPSLB digelar 22 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SILO",
   "First REIT",
   "Akuisisi Rumah Sakit",
   "Transaksi Material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/65c2aa31b9_5ef1d1c0da.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-direksi-lepas-97-saham-divestasi-di-harga-rp437",
  "category": "Aksi Korporasi",
  "title": "TOWR: Direksi Lepas 97% Saham, [Divestasi] di Harga Rp437",
  "deck": "Direksi TOWR Indra Gunawan melepas 39,67 juta saham (97% kepemilikannya) secara tidak langsung di harga Rp437 pada 16 September 2026, untuk tujuan divestasi.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "kepemilikan saham",
   "divestasi direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-3007-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-teken-mou-kembangkan-pasar-minggu-investasi-rp1-triliun",
  "category": "Aksi Korporasi",
  "title": "BIKE Teken MoU Kembangkan Pasar Minggu, Investasi [Rp1 Triliun]",
  "deck": "Anak usaha BIKE, PT Ratu Karya, menandatangani MoU dengan Perumda Pasar Jaya untuk mengembangkan kawasan Pasar Minggu, Jakarta Selatan, dengan perkiraan nilai investasi Rp1 triliun.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "properti",
   "Pasar Minggu",
   "MoU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2fbeebd6d7_d775f1a93b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-akui-ketidakpastian-usaha-di-tengah-ekspansi-proyek-wte",
  "category": "Aksi Korporasi",
  "title": "SOFA akui [ketidakpastian] usaha di tengah ekspansi proyek WTE",
  "deck": "SOFA merespons permintaan penjelasan bursa soal proyek waste-to-energy Rp131 miliar yang akan didanai rights issue dan utang bank, di tengah akumulasi kerugian Rp16 miliar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "waste to energy",
   "rights issue",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/60c1de8224_099a10997a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-pelaksanaan-waran-terstruktur-bbri-put-berakhir-18-september",
  "category": "Aksi Korporasi",
  "title": "DR: Pelaksanaan [Waran Terstruktur] BBRI Put Berakhir 18 September",
  "deck": "RHB Sekuritas mengumumkan pelaksanaan waran terstruktur put BBRIDRPN5A atas saham BBRI pada 18 September 2026, harga Rp3.500, jumlah 100 juta unit.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "RHB Sekuritas",
   "waran terstruktur",
   "BBRI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_DR_E081_88f74c52-7e23-40ad-9680-3c3795593c00-20260919015035.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-direksi-anita-anwar-lepas-99-99-saham-hak-suara-nol",
  "category": "Aksi Korporasi",
  "title": "TOWR: Direksi Anita Anwar Lepas [99,99%] Saham, Hak Suara Nol",
  "deck": "Direksi TOWR Anita Anwar menjual 32,16 juta saham pada 16 September 2026 seharga Rp437 per lembar, melepas 99,99 persen kepemilikannya hingga hak suaranya menjadi nol persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "saham",
   "direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-8160-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-lanjutkan-buyback-sudah-beli-70-juta-saham",
  "category": "Aksi Korporasi",
  "title": "ARKO Lanjutkan [Buyback], Sudah Beli 70 Juta Saham",
  "deck": "ARKO melaporkan realisasi buyback per 23 September 2026: akumulasi 70 juta saham dibeli, dana Rp910,28 juta terpakai, sisa anggaran nyaris habis.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "buyback",
   "Arkora Hydro",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E006_c6301f04-0f88-4469-8c56-42e82a812087-20260919014840.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-tender-wajib-rampung-6-dari-40-juta-saham-terealisasi",
  "category": "Aksi Korporasi",
  "title": "ARKO: Tender Wajib Rampung, 6 dari 40 Juta Saham [Terealisasi]",
  "deck": "Pengendali baru ARKO baru merealisasikan 6 juta dari 40 juta saham wajib beli dalam tender yang berakhir 19 September 2026, jauh dari target.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "tender wajib",
   "pengendali baru",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E010_232c46b3-5d29-4569-bb8d-982a343f2276-20260919152412.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-pengendali-baru-beli-6-juta-dari-40-juta-saham-tender",
  "category": "Aksi Korporasi",
  "title": "ARKO: Pengendali Baru Beli 6 Juta dari 40 Juta Saham [Tender]",
  "deck": "Pengendali baru ARKO baru merealisasikan 6 juta dari 40 juta saham yang wajib dibeli lewat penawaran tender wajib yang rampung 19 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "tender wajib",
   "pengendali baru",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E010_232c46b3-5d29-4569-bb8d-982a343f2276-20260919015113.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-jadwalkan-rups-tahunan-19-september-2026",
  "category": "Aksi Korporasi",
  "title": "ARKO Jadwalkan [RUPS] Tahunan 19 September 2026",
  "deck": "ARKO menjadwalkan RUPS Tahunan pada 19 September 2026 di Jakarta lewat e-proxy dan e-voting KSEI, meski tanggal pemanggilan dan DPS di dokumen tercatat setelah tanggal rapat itu.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "RUPS Tahunan",
   "Arkora Hydro",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E001_719d61e9-7bb7-49ca-8466-60c28b55bb31-20260919014821.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-digugat-pkpu-oleh-pemasok-tagihan-rp70-juta",
  "category": "Aksi Korporasi",
  "title": "ARKO Digugat [PKPU] oleh Pemasok, Tagihan Rp70 Juta",
  "deck": "PT Arkora Hydro Tbk digugat penundaan kewajiban pembayaran utang oleh pemasok bernama Bima senilai Rp70 juta, yang menurut perseroan berdampak material bagi keuangannya.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "PKPU",
   "Arkora Hydro",
   "Gugatan Pailit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E018_66c32c76-46a5-44a2-ad80-c10cfcd812c8-20260918220533.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-pefindo-pertahankan-rating-outlook-positif",
  "category": "Aksi Korporasi",
  "title": "ARKO: PEFINDO Pertahankan Rating, Outlook [Positif]",
  "deck": "PEFINDO mempertahankan peringkat obligasi ARKO01AGN senilai Rp318,06 miliar milik Arkora Hydro dengan outlook positif, tidak berubah dari peringkat sebelumnya.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "PEFINDO",
   "obligasi",
   "pemeringkatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E030_df23c827-cbb9-477f-9f69-c7de068213f9-20260918220358.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tks-korsfu-panggil-rups-ada-agenda-baru-saham-bonus",
  "category": "Aksi Korporasi",
  "title": "TKS-KORSFU Panggil RUPS, Ada Agenda Baru [Saham Bonus]",
  "deck": "RUPS gabungan TKS-KORSFU akan membahas dividen tunai, pembagian saham bonus, dan rencana penambahan modal tanpa hak memesan efek terlebih dahulu untuk tahun buku 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TKS-KORSFU",
   "RUPS",
   "saham bonus",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_TKS-KORSFU_E002_89fc9336-af4c-46e1-b756-9c1205bf9989-20260919133916.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tks-korsfu-gelar-rups-bahas-dividen-dan-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "TKS-KORSFU Gelar RUPS, Bahas Dividen dan [PMTHMETD]",
  "deck": "TKS-KORSFU menggelar RUPS Tahunan, Luar Biasa, dan Independen pada 18 September 2026, membahas dividen tunai, saham bonus, dan penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TKS-KORSFU",
   "RUPS",
   "dividen",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_TKS-KORSFU_E049_4f0cf407-0c7d-499e-bfe1-0f04859233a1-20260918215359.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-obligasi-hijau-rp318-miliar-delisting-per-30-september",
  "category": "Aksi Korporasi",
  "title": "ARKO: Obligasi Hijau Rp318 Miliar [Delisting] per 30 September",
  "deck": "Obligasi Berwawasan Lingkungan I Arkora Hydro Seri A senilai Rp318,06 miliar dihapus dari pencatatan bursa mulai 30 September 2026, menyusul jatuh tempo pada 8 Agustus 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "obligasi",
   "delisting",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_B012_076ee20c-fbd7-4d5d-a302-bceda6390749-20260919152959.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obligasi-arko-rp318-miliar-jatuh-tempo-stop-transaksi-30-sep",
  "category": "Aksi Korporasi",
  "title": "Obligasi ARKO Rp318 Miliar [Jatuh Tempo], Stop Transaksi 30 Sep",
  "deck": "BEI menghentikan pencatatan obligasi hijau ARKO senilai Rp318,06 miliar mulai 30 September 2026, menyusul jatuh tempo pada 8 Agustus 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_B012_076ee20c-fbd7-4d5d-a302-bceda6390749-20260919094258.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-obligasi-rp318-miliar-jatuh-tempo-dihapus-dari-bei",
  "category": "Aksi Korporasi",
  "title": "ARKO: Obligasi Rp318 Miliar [Jatuh Tempo], Dihapus dari BEI",
  "deck": "Bursa akan menghapus pencatatan obligasi hijau ARKO01AGN milik Arkora Hydro senilai Rp318,06 miliar mulai 30 September 2026 karena sudah jatuh tempo.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_B012_076ee20c-fbd7-4d5d-a302-bceda6390749-20260918214955.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sril-masuk-papan-pemantauan-khusus-imbas-ekuitas-negatif",
  "category": "Aksi Korporasi",
  "title": "SRIL Masuk Papan [Pemantauan Khusus] Imbas Ekuitas Negatif",
  "deck": "Bursa menempatkan saham SRIL di papan pemantauan khusus mulai 3 September 2026 setelah laporan keuangan terakhir mencatat ekuitas negatif.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRIL",
   "Pemantauan Khusus",
   "Ekuitas Negatif",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_SRIL_B031_46506f3b-cb18-4129-95b2-01384c125b00-20260918213441.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-konversi-obligasi-hijau-utang-turun-ke-rp2-8-miliar",
  "category": "Aksi Korporasi",
  "title": "ARKO Konversi Obligasi Hijau, Utang Turun ke [Rp2,8 Miliar]",
  "deck": "ARKO mengonversi Rp432,34 juta dari Obligasi Berwawasan Lingkungan I Seri B pada 2 September 2026, sehingga outstanding obligasi turun dari Rp3,23 miliar menjadi Rp2,80 miliar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "obligasi",
   "konversi utang",
   "Arkora Hydro"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E034_f3496fa8-0e2f-44cc-a949-302c341fdaa9-20260919094532.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-konversi-obligasi-hijau-outstanding-turun-ke-rp2-8-miliar",
  "category": "Aksi Korporasi",
  "title": "ARKO [Konversi] Obligasi Hijau, Outstanding Turun ke Rp2,8 Miliar",
  "deck": "ARKO melaporkan konversi Rp432,3 juta obligasi hijau Seri B pada 2 September 2026, menurunkan nilai outstanding dari Rp3,23 miliar menjadi Rp2,80 miliar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "obligasi hijau",
   "konversi obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E034_f3496fa8-0e2f-44cc-a949-302c341fdaa9-20260919015024.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-konversi-sebagian-obligasi-hijau-sisa-rp2-8-miliar",
  "category": "Aksi Korporasi",
  "title": "ARKO [Konversi] Sebagian Obligasi Hijau, Sisa Rp2,8 Miliar",
  "deck": "Arkora Hydro mengonversi Rp432.342.130 dari Obligasi Berwawasan Lingkungan I Seri B pada 2 September 2026, outstanding turun jadi Rp2.798.891.083.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "obligasi hijau",
   "konversi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918_ARKO_E034_f3496fa8-0e2f-44cc-a949-302c341fdaa9-20260918205323.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-nim-kb-bank-membaik-ke-1-96-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "BBKP: NIM KB Bank [Membaik] ke 1,96% di Semester I 2026",
  "deck": "KB Bank melaporkan aset, kredit, dan dana pihak ketiga tumbuh dua digit pada semester I 2026, dengan margin bunga bersih dan kualitas kredit yang ikut membaik dari tahun sebelumnya.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "KB Bank",
   "kinerja keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c1d99b5423_77773099b3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smdr-suntik-modal-rp33-7-miliar-ke-anak-usaha-properti",
  "category": "Aksi Korporasi",
  "title": "SMDR Suntik Modal [Rp33,7 Miliar] ke Anak Usaha Properti",
  "deck": "Samudera Indonesia menambah modal Rp33,7 miliar ke anak usaha PT Samudera Properti Indonesia lewat penerbitan saham baru, memperbesar kepemilikannya jadi 99,59 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDR",
   "Samudera Indonesia",
   "transaksi afiliasi",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3690cf04ff_37bb8e8596.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smdr-suntik-modal-rp7-miliar-ke-anak-usaha-cumawis",
  "category": "Aksi Korporasi",
  "title": "SMDR Suntik Modal [Rp7 Miliar] ke Anak Usaha Cumawis",
  "deck": "Samudera Indonesia menambah modal Rp7 miliar ke anak usahanya, PT Perusahaan Pelayaran Cumawis, lewat penerbitan 7.000 saham baru, menaikkan kepemilikan induk menjadi 99,988 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDR",
   "transaksi afiliasi",
   "penambahan modal",
   "Samudera Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/78f3b9fd0a_4473e94118.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-laba-bersih-anjlok-95-persen-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "[BBKP] Laba Bersih Anjlok 95 Persen di Semester I 2026",
  "deck": "BBKP mencatat laba bersih semester I 2026 turun tajam ke Rp19,02 miliar dari Rp389,67 miliar setahun sebelumnya, meski aset dan ekuitas masih tumbuh.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "Bank KB Indonesia",
   "laporan keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918194352-64403-0/FinancialStatement-2026-II-BBKP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-direksi-lepas-88-5-saham-hak-suara-ke-0-02",
  "category": "Aksi Korporasi",
  "title": "TOWR: Direksi [Lepas] 88,5% Saham, Hak Suara ke 0,02%",
  "deck": "Direksi TOWR Ferdinandus Aming Santoso menjual 96,99 juta saham pada 16 September 2026, memangkas 88,49 persen kepemilikannya dan menurunkan hak suara jadi 0,0213 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "divestasi saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-6018-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-catat-557-165-saham-baru-dari-mesop-tahap-i-iii",
  "category": "Aksi Korporasi",
  "title": "PGEO Catat 557.165 [Saham] Baru dari MESOP Tahap I-III",
  "deck": "BEI mencatat 557.165 saham baru PGEO hasil pelaksanaan opsi MESOP Tahap I dan III, menambah total saham beredar menjadi 41,92 miliar lembar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "MESOP",
   "ESOP",
   "saham baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eeb366a861_0d3855d10d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-komisaris-divestasi-saham-senilai-rp3-4-miliar",
  "category": "Aksi Korporasi",
  "title": "TOWR: Komisaris [Divestasi] Saham Senilai Rp3,4 Miliar",
  "deck": "Komisaris TOWR Ario Wibisono melepas 7,86 juta saham tidak langsung senilai sekitar Rp3,4 miliar pada 16 September 2026, namun porsinya hanya 3,15 persen dari kepemilikannya sendiri.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-8351-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-listing-obligasi-dan-sukuk-rp2-59-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "PNMP [listing] obligasi dan sukuk Rp2,59 triliun di BEI",
  "deck": "PNM mencatatkan obligasi dan sukuk baru senilai Rp2,59 triliun di BEI mulai 21 September 2026, bagian dari program dana berkelanjutan bertarget Rp16 triliun.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "obligasi",
   "sukuk",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5f1c2dc347_3598ffdd96.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-komisaris-divestasi-100-saham-suara-nol",
  "category": "Aksi Korporasi",
  "title": "TOWR: Komisaris [Divestasi] 100% Saham, Suara Nol",
  "deck": "Kenny Harjo, Komisaris Sarana Menara Nusantara, melepas seluruh 7.861.000 sahamnya di harga Rp437 per lembar pada 16 September 2026, hak suaranya jadi nol.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "Kepemilikan Saham",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-4128-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpdb-koperasi-jemput-bola-danai-umkm-di-borobudur-expo",
  "category": "UMKM",
  "title": "LPDB Koperasi [Jemput Bola] Danai UMKM di Borobudur Expo",
  "deck": "LPDB Koperasi membuka layanan konsultasi dana bergulir di Borobudur Expo 2026, 17-20 September, untuk mendekatkan akses pembiayaan bagi koperasi dan UMKM di kawasan Borobudur.",
  "date": "18 September 2026",
  "image": "assets/img/lpdb-koperasi-jemput-bola-danai-umkm-di-borobudur-expo.jpg",
  "imageV": "mu70d10k",
  "tags": [
   "LPDB Koperasi",
   "dana bergulir",
   "Borobudur Expo",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467925-menkop-dorong-koperasi-manfaatkan-dana-bergulir-lpdb-koperasi-jemput-bola-di-borobudur-expo-2026"
 },
 {
  "slug": "jmas-ke-bursa-utang-klaim-rp11-24-miliar-tak-diakui",
  "category": "Aksi Korporasi",
  "title": "JMAS ke bursa: utang klaim Rp11,24 miliar [tak diakui]",
  "deck": "Emiten asuransi syariah ini juga mengakui ada kesalahan pencatatan kas dan liabilitas polis dalam laporan keuangan September 2025, serta audit tahunan yang molor.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JMAS",
   "asuransi syariah",
   "laporan keuangan",
   "utang klaim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0f238266bb_7d78828e74.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admf-terbitkan-obligasi-rp1-65-triliun-dan-sukuk-rp500-miliar",
  "category": "Aksi Korporasi",
  "title": "ADMF Terbitkan [Obligasi] Rp1,65 Triliun dan Sukuk Rp500 Miliar",
  "deck": "Adira Dinamika Multi Finance menawarkan obligasi Rp1,65 triliun dan sukuk mudharabah Rp500 miliar tahap keempat 2026, dengan peringkat tertinggi idAAA dari Pefindo.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "obligasi",
   "sukuk",
   "Adira Finance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d50ad3c095_465fde6f47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asdf-catatkan-obligasi-rp2-55-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "ASDF Catatkan [Obligasi] Rp2,55 Triliun di BEI",
  "deck": "ASDF mencatatkan obligasi Rp2,55 triliun di BEI mulai 21 September 2026, terbagi dua seri dengan bunga tetap 7,15% dan 7,40%.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDF",
   "obligasi korporasi",
   "Astra Sedaya Finance",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/aa9ec73742_16dfece44f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jmas-koreksi-laporan-kuartal-iii-laba-naik-ke-rp5-39-miliar",
  "category": "Aksi Korporasi",
  "title": "JMAS koreksi laporan kuartal III, [laba] naik ke Rp5,39 miliar",
  "deck": "Laporan keuangan kuartal III 2025 yang dikoreksi menunjukkan aset JMAS naik 39,2 persen dan liabilitas naik 46,4 persen, sementara laba bersih naik hampir dua kali lipat jadi Rp5,39 miliar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JMAS",
   "laporan keuangan",
   "asuransi syariah",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2de71b14f8_5206cae45d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koci-catat-konversi-20-975-saham-baru-dari-waran-seri-i",
  "category": "Aksi Korporasi",
  "title": "KOCI Catat [Konversi] 20.975 Saham Baru dari Waran Seri I",
  "deck": "Bursa mencatatkan tambahan 20.975 saham baru PT Kokoh Exa Nusantara hasil exercise waran seri I, menambah total saham beredar menjadi 4,46 miliar lembar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOCI",
   "waran",
   "pencatatan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b061b2100b_e061b27afd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-kepemilikan-direksi-tak-berubah-usai-transaksi-repo",
  "category": "Aksi Korporasi",
  "title": "BMRI: Kepemilikan Direksi Tak Berubah usai Transaksi [Repo]",
  "deck": "Direksi Bank Mandiri melaporkan transaksi perjanjian jual beli kembali atas 477.752 saham pada 31 Agustus 2026, namun kepemilikannya tetap di 21.036 lembar setara 1 persen hak suara.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Bank Mandiri",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-9305-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "chek-rampungkan-buyback-80-juta-saham-rp11-99-m",
  "category": "Aksi Korporasi",
  "title": "CHEK Rampungkan [Buyback] 80 Juta Saham Rp11,99 M",
  "deck": "PT Diastika Biotekindo Tbk (CHEK) menutup program pembelian kembali saham senilai Rp11,99 miliar, menyerap 80 juta lembar saham atau 1,94 persen dari saham tercatat di BEI.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CHEK",
   "buyback saham",
   "Diastika Biotekindo",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/93cd12fd23_f3104eb818.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cirebon-bangun-ulang-pelabuhan-ikan-senilai-rp459-miliar",
  "category": "Industri",
  "title": "Cirebon Bangun Ulang Pelabuhan Ikan Senilai [Rp459] Miliar",
  "deck": "KKP memulai pembangunan Pelabuhan Kejawanan di Cirebon dengan dukungan pembiayaan Islamic Development Bank, menyasar kapasitas dan produksi ikan yang jauh lebih besar dalam dua tahun.",
  "date": "18 September 2026",
  "image": "assets/img/cirebon-bangun-ulang-pelabuhan-ikan-senilai-rp459-miliar.jpg",
  "imageV": "mu6v4c1s",
  "tags": [
   "Pelabuhan Perikanan",
   "Cirebon",
   "IsDB",
   "KKP"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-kembangkan-ppn-kejawanan-jadi-bertaraf-internasional-targetkan-serap-8000-tenaga-kerja-beri-akses-khusus-nelayan-kecil-5RDK.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "kkp-mulai-bangun-pelabuhan-ikan-modern-di-cirebon",
  "category": "Industri",
  "title": "KKP Mulai Bangun Pelabuhan Ikan [Modern] di Cirebon",
  "deck": "KKP memulai pembangunan pelabuhan ikan modern di Kejawanan, Cirebon, dengan target kapasitas kapal dan hasil tangkapan naik signifikan.",
  "date": "18 September 2026",
  "image": "assets/img/kkp-mulai-bangun-pelabuhan-ikan-modern-di-cirebon.jpg",
  "imageV": "mu6v4giv",
  "tags": [
   "KKP",
   "pelabuhan perikanan",
   "Cirebon",
   "PPN Kejawanan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-modernisasi-pelabuhan-perikanan-ppn-kejawanan-jadi-langkah-awal-6BEV.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "pefindo-pangkas-peringkat-adhi-ke-default-usai-gagal-bayar-kupon",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Pangkas Peringkat ADHI ke [Default] Usai Gagal Bayar Kupon",
  "deck": "PEFINDO menurunkan peringkat PT Adhi Karya menjadi idSD (Selective Default) setelah emiten gagal melunasi kupon dua seri obligasi senilai total Rp2,46 triliun.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "gagal bayar",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7bbcd09cd6_40aee85da2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendag-andalkan-25-perjanjian-dagang-buat-tarik-investasi-ekspor",
  "category": "Bisnis",
  "title": "Kemendag Andalkan [25] Perjanjian Dagang buat Tarik Investasi Ekspor",
  "deck": "Kemendag membuka forum ATTEC dan mengaitkan 25 perjanjian dagang yang berjalan dengan upaya menarik investasi berorientasi ekspor, termasuk lewat capaian UMKM BISA Ekspor.",
  "date": "18 September 2026",
  "image": "assets/img/kemendag-andalkan-25-perjanjian-dagang-buat-tarik-investasi-ekspor.jpg",
  "imageV": "mu6v4jc9",
  "tags": [
   "Kemendag",
   "Investasi Ekspor",
   "UMKM",
   "Perjanjian Dagang"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/buka-attec-global-investment-forum-mendag-busan-dorong-investasi-berorientasi-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "towr-direksi-lepas-90-8-saham-suara-ke-0-007",
  "category": "Aksi Korporasi",
  "title": "TOWR: Direksi [Lepas] 90,8% Saham, Suara ke 0,007%",
  "deck": "Direksi TOWR Eko Santoso Hadiprodjo menjual 39,67 juta lembar saham senilai sekitar Rp17,34 miliar pada 16 September 2026, melepas 90,85 persen kepemilikannya untuk tujuan divestasi.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "divestasi saham",
   "kepemilikan direksi",
   "Sarana Menara Nusantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-6867-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rgas-jelaskan-ke-bursa-piutang-berelasi-turun-98",
  "category": "Aksi Korporasi",
  "title": "RGAS Jelaskan ke Bursa, [Piutang] Berelasi Turun 98%",
  "deck": "RGAS menjawab permintaan penjelasan BEI soal piutang usaha pihak berelasi yang turun Rp45,72 miliar dan piutang lain-lain yang naik Rp6,67 miliar pada semester I 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RGAS",
   "piutang berelasi",
   "laporan keuangan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/099fe76bf8_2acc349ca8.pdf",
  "sourceLabel": "IDX"
 }
];
