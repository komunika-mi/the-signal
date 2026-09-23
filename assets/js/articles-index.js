// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/industri-tekstil.jpg",
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
  "image": "assets/img/global-pelabuhan.jpg",
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
  "image": "assets/img/bursa-kerja.jpg",
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
  "image": "assets/img/wawancara-kerja.jpg",
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
 },
 {
  "slug": "ptpp-digugat-pkpu-rp4-25-miliar-oleh-dua-subkontraktor-proyek",
  "category": "Aksi Korporasi",
  "title": "PTPP Digugat [PKPU] Rp4,25 Miliar oleh Dua Subkontraktor Proyek",
  "deck": "PTPP menerima panggilan sidang PKPU dari dua subkontraktor proyek Museum KCBN Muarajambi atas tagihan yang belum dibayar sekitar Rp4,25 miliar; perseroan menyebut belum ada dampak signifikan.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "PKPU",
   "konstruksi",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9833985dc3_8da3b48596.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nisp-tunjuk-aini-masruroh-anggota-baru-dps",
  "category": "Aksi Korporasi",
  "title": "NISP Tunjuk Aini Masruroh Anggota Baru [DPS]",
  "deck": "OCBC NISP mengangkat Aini Masruroh sebagai anggota Dewan Pengawas Syariah efektif 18 September 2026, setelah lolos uji kelayakan OJK.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NISP",
   "Bank OCBC NISP",
   "Dewan Pengawas Syariah",
   "Perbankan Syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1f3f436d4d_9e9158fc69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmnd-kaji-aksi-korporasi-genjot-free-float-di-tengah-jawaban-bei",
  "category": "Aksi Korporasi",
  "title": "DMND Kaji Aksi Korporasi Genjot [Free Float] di Tengah Jawaban BEI",
  "deck": "DMND menjawab permintaan BEI soal volatilitas sahamnya, menyatakan tidak ada informasi material tersembunyi, sekaligus mengungkap tengah mengkaji aksi korporasi untuk menambah porsi saham beredar di publik.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMND",
   "free float",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c15b8215c4_c396eaadea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-pembelian-3-35-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama Tambah [Pembelian] 3,35 Juta Saham",
  "deck": "Tunggal Jaya Investama membeli 3,35 juta saham IMPC pada 15 dan 17 September 2026, menambah kepemilikannya menjadi 21,1 miliar lembar tanpa mengubah hak suara di 38,42 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "Impack Pratama Industri",
   "kepemilikan saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-6972-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-jual-611-juta-saham-suara-turun-ke-14-06",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi [Jual] 611 Juta Saham, Suara Turun ke 14,06%",
  "deck": "Direksi Nusantara Sawit Sejahtera melepas 611,3 juta saham senilai sekitar Rp571,3 miliar lewat dua transaksi repo, hak suara turun dari 16,62% jadi 14,06%.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-7390-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-buyback-saham-tembus-11-74-juta-lembar-per-18-september",
  "category": "Aksi Korporasi",
  "title": "PRDA [Buyback] Saham Tembus 11,74 Juta Lembar per 18 September",
  "deck": "PT Prodia Widyahusada Tbk melaporkan realisasi pembelian kembali saham mencapai 11,74 juta lembar atau 1,24 persen dari total saham beredar per 18 September 2026, dengan sisa dana Rp118,02 miliar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6d5aa8b4bf_e3f7f7f054.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dfam-bantah-punya-info-pemicu-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "DFAM Bantah Punya Info Pemicu [Volatilitas] Transaksi Saham",
  "deck": "Menjawab permintaan penjelasan BEI, Dafam Property menyatakan tak tahu penyebab lonjakan transaksi sahamnya dan tak punya rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DFAM",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/382aceee27_3f5f3fdf83.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-rencanakan-pmthmetd-hingga-200-juta-saham-baru",
  "category": "Aksi Korporasi",
  "title": "UVCR Rencanakan [PMTHMETD] hingga 200 Juta Saham Baru",
  "deck": "Trimegah Karya Pratama (UVCR) berencana menerbitkan maksimal 200 juta saham baru tanpa hak memesan efek terlebih dahulu, menunggu persetujuan RUPSLB pada 27 Oktober 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "PMTHMETD",
   "Ultra Voucher",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/538cf82b2f_a744976607.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-suspensi-berlanjut-usai-gagal-bayar-sukuk-mudharabah",
  "category": "Aksi Korporasi",
  "title": "WIKA [Suspensi] Berlanjut Usai Gagal Bayar Sukuk Mudharabah",
  "deck": "BEI melanjutkan suspensi saham WIKA di seluruh pasar setelah perseroan menunda pembayaran bagi hasil Sukuk Mudharabah yang jatuh tempo 18 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "gagal bayar",
   "sukuk mudharabah",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a54db63538_cbb1926c75.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtmh-ubah-perjanjian-kredit-dengan-bca-geser-rp60-miliar",
  "category": "Aksi Korporasi",
  "title": "MTMH Ubah Perjanjian Kredit dengan [BCA], Geser Rp60 Miliar",
  "deck": "Murni Sadar mengubah perjanjian kredit dengan BCA, mengalihkan Rp60 miliar dari fasilitas KI 7 MS Tranche D ke fasilitas baru Kredit Investasi 8 untuk anak usahanya, PT MS.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTMH",
   "BCA",
   "kredit",
   "rumah sakit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/84e7e149ca_cd42986c83.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "refi-kena-sanksi-sp2-bei-laporan-keuangan-masih-telat",
  "category": "Aksi Korporasi",
  "title": "REFI Kena Sanksi [SP2] BEI, Laporan Keuangan Masih Telat",
  "deck": "BEI mengoreksi pengumuman sanksi REFI dan POST yang belum menyampaikan laporan keuangan tengah tahunan per 30 Juni 2026 hingga batas waktu 3 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REFI",
   "BEI",
   "sanksi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8f59cba950_f87374a6f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-koreksi-jawaban-bursa-piutang-rp21-6-m-ke-pengendali-mandek",
  "category": "Aksi Korporasi",
  "title": "PPGL Koreksi Jawaban Bursa: [Piutang] Rp21,6 M ke Pengendali Mandek",
  "deck": "PPGL mengoreksi jawabannya ke Bursa soal divestasi JAYA, piutang Rp21,62 miliar ke pemegang saham pengendali dari transaksi itu masih belum lunas meski dividen sudah dibagikan lebih dulu.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "divestasi JAYA",
   "piutang pihak berelasi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eb3646c0e2_c3c0dd7b89.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-nextier-jual-7-juta-saham-senilai-rp70-miliar",
  "category": "Aksi Korporasi",
  "title": "MGLV: Nextier Jual [7 Juta] Saham Senilai Rp70 Miliar",
  "deck": "PT Nextier Datamate Center melepas 7 juta saham MGLV secara tidak langsung dalam dua transaksi, menurunkan hak suaranya dari 63,07% menjadi 62,71%.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "Kepemilikan Saham",
   "Nextier Datamate Center",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-7714-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "doid-suntik-us-4-7-juta-ke-moura-via-buma-indonesia",
  "category": "Aksi Korporasi",
  "title": "DOID Suntik US$4,7 Juta ke [Moura] via BUMA Indonesia",
  "deck": "BUMA Indonesia, anak usaha DOID, menambah modal US$4,7 juta ke Grup Moura Materials di Australia, transaksi intra-grup yang dikecualikan dari persetujuan RUPS.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOID",
   "Transaksi Material",
   "Moura Materials",
   "BUMA Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/78d0e6e7cb_78062d1e82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kios-jadwalkan-rupslb-27-oktober-usul-agenda-tutup-28-sep",
  "category": "Aksi Korporasi",
  "title": "KIOS Jadwalkan [RUPSLB] 27 Oktober, Usul Agenda Tutup 28 Sep",
  "deck": "Kioson Komersial Indonesia mengumumkan rencana RUPSLB pada 27 Oktober 2026 di Jakarta, dengan tenggat usul agenda pemegang saham 28 September dan pencatatan pemegang saham per 2 Oktober 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIOS",
   "RUPSLB",
   "Kioson Komersial Indonesia",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3fae0af454_ba04e9adea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-keluar-dari-pemantauan-khusus-bei-mulai-21-september",
  "category": "Aksi Korporasi",
  "title": "CSMI Keluar dari [Pemantauan Khusus] BEI Mulai 21 September",
  "deck": "Bursa Efek Indonesia mencabut saham PT Cipta Selera Murni Tbk (CSMI) dari papan pemantauan khusus dan memindahkannya ke Papan Pengembangan, efektif 21 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "BEI",
   "Pemantauan Khusus",
   "Papan Pengembangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/341b17bce5_12aeb65c4c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "life-dan-grph-masuk-pemantauan-khusus-bei-mulai-21-september",
  "category": "Aksi Korporasi",
  "title": "LIFE dan GRPH masuk [Pemantauan Khusus] BEI mulai 21 September",
  "deck": "BEI memasukkan saham MSIG Life Insurance Indonesia (LIFE) dan Griptha Putra Persada (GRPH) ke daftar pemantauan khusus, efektif 21 September 2026, karena riwayat penghentian perdagangan.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "GRPH",
   "Pemantauan Khusus",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b362b3e6be_473a63c817.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-kantongi-100-saham-tde-dari-telkomsigma-konsolidasi",
  "category": "Aksi Korporasi",
  "title": "TLKM Kantongi 100% Saham TDE dari Telkomsigma [Konsolidasi]",
  "deck": "Telkom membeli 19,19% sisa saham PT Telkom Data Ekosistem dari anak usahanya, Telkomsigma, sehingga kini menguasai penuh seluruh saham perusahaan tersebut.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Telkom",
   "Telkom Data Ekosistem",
   "Telkomsigma"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ca0098258_1f62187a57.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpin-ubs-jual-1-19-juta-saham-untuk-lindung-nilai-derivatif",
  "category": "Aksi Korporasi",
  "title": "CPIN: UBS Jual [1,19 Juta] Saham untuk Lindung Nilai Derivatif",
  "deck": "UBS AG London Branch melepas 1,19 juta saham CPIN pada 15 September 2026 untuk lindung nilai transaksi derivatif nasabah, hak suaranya turun tipis ke 5,9995 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPIN",
   "UBS AG",
   "kepemilikan saham",
   "Charoen Pokphand"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-7771-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uvcr-jadwalkan-rupslb-27-oktober-bahas-saham-baru",
  "category": "Aksi Korporasi",
  "title": "UVCR Jadwalkan RUPSLB [27 Oktober], Bahas Saham Baru",
  "deck": "UVCR menjadwalkan RUPSLB pada 27 Oktober 2026, dengan pemanggilan resmi 5 Oktober dan pencatatan pemegang saham berhak hadir per 2 Oktober 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UVCR",
   "RUPSLB",
   "Trimegah Karya Pratama",
   "Ultra Voucher"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/82febb9b0b_3106f97983.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lopi-sentra-amanah-ventura-jual-2-13-juta-saham-kendali-bertahan",
  "category": "Aksi Korporasi",
  "title": "LOPI: Sentra Amanah Ventura [Jual] 2,13 Juta Saham, Kendali Bertahan",
  "deck": "Pengendali LOPI, Sentra Amanah Ventura, menjual 2.134.200 saham senilai Rp131,7 juta pada 9 September 2026. Hak suara turun tipis dari 56,14 persen menjadi 55,94 persen, status pengendali tetap.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "kepemilikan saham",
   "pengendali",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-7238-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eral-perbesar-fasilitas-kredit-bca-jadi-rp1-14-triliun",
  "category": "Aksi Korporasi",
  "title": "ERAL Perbesar [Fasilitas Kredit] BCA jadi Rp1,14 Triliun",
  "deck": "Sinar Eka Selaras dan 15 entitas anaknya menambah plafon kredit dari BCA, mayoritas untuk modal kerja dan transaksi valuta asing, berlaku hingga Mei 2027.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAL",
   "kredit bank",
   "BCA",
   "fasilitas kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/89d9ea36e4_b3ae84362d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "defi-jawab-bei-soal-volatilitas-buka-pintu-mitra-strategis",
  "category": "Aksi Korporasi",
  "title": "DEFI Jawab BEI soal Volatilitas, Buka Pintu [Mitra Strategis]",
  "deck": "Danasupra Erapacific menjawab permintaan penjelasan BEI atas volatilitas sahamnya, menegaskan tidak ada informasi material baru namun membuka diri pada calon mitra strategis.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEFI",
   "Danasupra Erapacific",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b87f0353a9_995b241da3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-tambah-1-24-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya [tambah] 1,24 juta saham",
  "deck": "Edwin Soeryadjaya membeli tambahan 1,24 juta saham SRTG pada 16-17 September 2026 di harga Rp1.771 per saham, menaikkan hak suaranya tipis ke 35,9442 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "Edwin Soeryadjaya",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-4386-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lopi-sentra-amanah-ventura-jual-14-71-juta-saham-kendali-bertahan",
  "category": "Aksi Korporasi",
  "title": "LOPI: Sentra Amanah Ventura Jual 14,71 Juta Saham, [Kendali] Bertahan",
  "deck": "Sentra Amanah Ventura melepas 14,71 juta saham LOPI dalam lima transaksi pada 8-17 September 2026, menurunkan hak suaranya dari 57,47 persen menjadi 56,14 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "kepemilikan saham",
   "Logisticsplus International",
   "pemegang saham mayoritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-8647-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-satukan-ai-cloud-dan-siber-lewat-scale",
  "category": "Teknologi",
  "title": "Telkom Satukan AI, Cloud, dan Siber Lewat [SCALE]",
  "deck": "Telkom meluncurkan program transformasi SCALE untuk menyatukan agenda AI, cloud, dan keamanan siber di seluruh TelkomGroup.",
  "date": "18 September 2026",
  "image": "assets/img/telkom-satukan-ai-cloud-dan-siber-lewat-scale.jpg",
  "imageV": "mu70d1da",
  "tags": [
   "Telkom",
   "SCALE",
   "AI",
   "Keamanan Siber"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467877-telkom-luncurkan-scale-integrasikan-ai-cloud-dan-keamanan-siber"
 },
 {
  "slug": "mpro-ungkap-ke-bursa-rugi-rp16-2-m-kas-tinggal-rp5-m",
  "category": "Aksi Korporasi",
  "title": "MPRO Ungkap ke Bursa: [Rugi] Rp16,2 M, Kas Tinggal Rp5 M",
  "deck": "Menjawab permintaan penjelasan dan site visit BEI, MPRO mengungkap rugi bersih Rp16,2 miliar, kas Rp5 miliar, dan lahan Maja 318 hektare yang belum bersertifikat sejak 2022.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPRO",
   "properti",
   "rugi bersih",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d47a385796_e4ebb7fc56.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telin-kelola-79-sampah-acara-batic-2026",
  "category": "BUMN",
  "title": "Telin Kelola [79%] Sampah Acara BATIC 2026",
  "deck": "Telin, anak usaha Telkom, menjalankan program keberlanjutan di BATIC 2026 di Bali, termasuk pengelolaan 2,3 ton sampah dengan tingkat daur ulang 79 persen.",
  "date": "18 September 2026",
  "image": "assets/img/telin-kelola-79-sampah-acara-batic-2026.jpg",
  "imageV": "mu6v4jrs",
  "tags": [
   "Telin",
   "Telkom",
   "BATIC 2026",
   "keberlanjutan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467870-dari-green-journey-hingga-aksi-karbon-begini-upaya-keberlanjutan-telin-di-batic-2026"
 },
 {
  "slug": "hrum-direksi-beli-241-000-saham-baru-rp1-003-lembar",
  "category": "Aksi Korporasi",
  "title": "HRUM: Direksi [Beli] 241.000 Saham Baru Rp1.003/Lembar",
  "deck": "Direktur Harum Energy, Stephanus E.D. Sutantio, untuk pertama kalinya memiliki saham HRUM setelah membeli 241.000 lembar pada 18 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRUM",
   "Harum Energy",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-4173-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-tanggapi-permintaan-bursa-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "ULTJ Tanggapi Permintaan Bursa soal [Volatilitas] Saham",
  "deck": "Ultrajaya menjawab permintaan penjelasan Bursa Efek Indonesia atas lonjakan volume dan harga sahamnya pada 15 September 2026, membantah ada informasi material yang belum diungkap.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "rights issue",
   "Bursa Efek Indonesia",
   "pengalihan pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7bd1bdc09f_26ed7216be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bafi-batalkan-direktur-baru-susun-ulang-direksi",
  "category": "Aksi Korporasi",
  "title": "BAFI Batalkan Direktur Baru, Susun Ulang [Direksi]",
  "deck": "Pemegang saham BAFI membatalkan pengangkatan Anditya Soepardi sebagai direktur dan menetapkan ulang susunan direksi, sementara satu calon direktur lain masih menunggu persetujuan OJK.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAFI",
   "perubahan direksi",
   "OJK",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/18a69064b2_c714b28b3d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baby-laba-operasional-melonjak-270-usai-integrasi-egi",
  "category": "Aksi Korporasi",
  "title": "BABY: Laba Operasional [Melonjak] 270% Usai Integrasi EGI",
  "deck": "Integrasi bisnis Multitrend Indo (BABY) dengan Emway Globalindo pasca akuisisi mendorong laba operasional kuartal II 2026 melonjak 270,9% dan pendapatan konsolidasi naik 17% secara tahunan.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BABY",
   "Multitrend Indo",
   "Emway Globalindo",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/314c7a7d40_5076cd0112.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-jelaskan-ke-bei-pendapatan-anjlok-21-7-phm-96-6",
  "category": "Aksi Korporasi",
  "title": "APEX Jelaskan ke BEI: [Pendapatan] Anjlok 21,7%, PHM 96,6%",
  "deck": "Menjawab surat permintaan penjelasan BEI, Apexindo blak-blakan soal utang, ketergantungan pada satu pelanggan, dan sewa rig ke pihak berelasi yang naik 151 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APEX",
   "Apexindo Pratama Duta",
   "PMTHMETD",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0b65b46f7c_fdea5ce1e5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-rights-issue-900-juta-saham-harga-rp500-efektif",
  "category": "Aksi Korporasi",
  "title": "BAJA Rights Issue 900 Juta Saham, Harga Rp500 [Efektif]",
  "deck": "Saranacentral Bajatama menerbitkan 900 juta saham baru lewat rights issue dengan rasio 2:1 dan harga pelaksanaan Rp500 per saham, efektif dari OJK sejak 17 September 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAJA",
   "rights issue",
   "HMETD",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/dc2b4b4de2_4af43e9461.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-cabut-suspensi-saham-true-setelah-penuhi-kewajiban-lapor",
  "category": "Aksi Korporasi",
  "title": "BEI Cabut [Suspensi] Saham TRUE Setelah Penuhi Kewajiban Lapor",
  "deck": "Bursa Efek Indonesia mencabut suspensi perdagangan saham TRUE mulai sesi kedua Jumat, 18 September 2026, setelah perusahaan memenuhi kewajiban pelaporan keuangan yang sempat tertunda dua kali.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "BEI",
   "suspensi saham",
   "Triniti Dinamik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/50c9724e68_d076c60505.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-rights-issue-rp16-9-triliun-frieslandcampina-jadi-pengendali",
  "category": "Aksi Korporasi",
  "title": "ULTJ Rights Issue Rp16,9 Triliun, [FrieslandCampina] Jadi Pengendali",
  "deck": "Ultrajaya akan menerbitkan hingga 7,88 miliar saham baru senilai Rp2.150 per saham untuk mengakuisisi saham Frisian Flag Indonesia, dan FrieslandCampina bakal menjadi pengendali baru perseroan.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "Frisian Flag Indonesia",
   "FrieslandCampina",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/99927124a8_2aafee09e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cint-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "CINT Bantah Ada [Info Material] di Balik Volatilitas Sahamnya",
  "deck": "Merespons permintaan penjelasan BEI atas volatilitas transaksi sahamnya, manajemen Chitose Internasional menyatakan tidak mengetahui adanya informasi material yang memengaruhi harga saham.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CINT",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/86fd776dd9_20566327ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-bukukan-rugi-rp12-3-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "TRUE Bukukan [Rugi] Rp12,3 Miliar di Semester I 2026",
  "deck": "Rugi bersih Triniti Dinamik melebar jadi Rp12,3 miliar pada semester I 2026, arus kas operasi berbalik negatif, dan utang ke pihak berelasi bertambah Rp17,6 miliar.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "Triniti Dinamik",
   "Properti",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260918134111-64411-0/FinancialStatement-2026-II-TRUE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tebe-direksi-denny-ramdhani-divestasi-seluruh-sahamnya",
  "category": "Aksi Korporasi",
  "title": "TEBE: Direksi Denny Ramdhani [Divestasi] Seluruh Sahamnya",
  "deck": "Direksi TEBE, GT. Denny Ramdhani, melepas seluruh 50.000 lembar sahamnya seharga Rp2.130 per saham pada 18 September 2026, mengakhiri kepemilikannya di perseroan.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TEBE",
   "Dana Brata Luhur",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18092026-7561-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-jadwalkan-rupslb-27-oktober-dps-per-2-oktober",
  "category": "Aksi Korporasi",
  "title": "ULTJ Jadwalkan [RUPSLB] 27 Oktober, DPS per 2 Oktober",
  "deck": "Ultrajaya mengumumkan rencana RUPSLB digelar elektronik pada 27 Oktober 2026, dengan pencatatan pemegang saham yang berhak hadir per 2 Oktober.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "RUPSLB",
   "Ultrajaya",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0fe3bc8d0e_4d1c4c88b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lflo-klaim-tak-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "LFLO Klaim Tak Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "PT Imago Mulia Persada Tbk menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LFLO",
   "Imago Mulia Persada",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/137dd3de08_492856ca40.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smra-bantah-ada-info-material-di-tengah-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "SMRA Bantah Ada Info Material di Tengah [Volatilitas] Saham",
  "deck": "Merespons permintaan penjelasan BEI atas volatilitas transaksi sahamnya, SMRA menyatakan tidak ada info material baru dan menyinggung kasus BPN Bogor yang diberitakan media.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRA",
   "Summarecon Agung",
   "BEI",
   "BPN Bogor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/abfb59b2b0_ea3b06eee4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-panggil-rupslb-12-oktober-ganti-komisaris-vivek-sood",
  "category": "Aksi Korporasi",
  "title": "EXCL Panggil RUPSLB 12 Oktober, Ganti [Komisaris] Vivek Sood",
  "deck": "XLSMART Telecom (EXCL) memanggil RUPSLB 12 Oktober 2026 untuk menyetujui pengunduran diri komisaris Vivek Sood dan pengangkatan Thomas Hundt sebagai penggantinya.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL",
   "RUPSLB",
   "Dewan Komisaris",
   "XLSMART"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9a8eff5b6b_ba15ac2bbb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptsn-jelaskan-ke-bursa-cara-penuhi-syarat-free-float",
  "category": "Aksi Korporasi",
  "title": "PTSN Jelaskan ke Bursa Cara Penuhi Syarat [Free Float]",
  "deck": "Sat Nusapersada menjawab surat Bursa soal syarat minimum saham beredar publik, termasuk opsi mengalihkan sebagian saham Inditeck Technology Hong Kong yang menguasai 10 persen.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTSN",
   "free float",
   "Bursa Efek Indonesia",
   "Sat Nusapersada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b193827690_18899ec2e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mkpi-jadwalkan-rupslb-pada-27-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "MKPI Jadwalkan [RUPSLB] pada 27 Oktober 2026",
  "deck": "Metropolitan Kentjana (MKPI) mengumumkan rencana RUPS Luar Biasa pada 27 Oktober 2026, dengan tanggal pencatatan pemegang saham 2 Oktober 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKPI",
   "RUPSLB",
   "Metropolitan Kentjana",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ad6338ec40_65f2b1dae2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ifii-bagikan-dividen-interim-rp5-per-saham-total-rp47-06-miliar",
  "category": "Aksi Korporasi",
  "title": "IFII Bagikan [Dividen] Interim Rp5 per Saham, Total Rp47,06 Miliar",
  "deck": "Direksi IFII menetapkan dividen interim tahun buku 2026 sebesar Rp5 per saham senilai Rp47,06 miliar, dibayarkan 15 Oktober 2026.",
  "date": "18 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IFII",
   "dividen interim",
   "pasar modal",
   "Indonesia Fibreboard Industry"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/abd0c71411_8214a9a26c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-minta-esdm-siapkan-program-e50-gantikan-bbm-impor",
  "category": "Energi",
  "title": "Presiden Prabowo Minta ESDM Siapkan Program [E50] Gantikan BBM Impor",
  "deck": "Setelah program biodiesel B50, pemerintah mulai menyusun program bioetanol E50 untuk mengurangi impor BBM, sambil mendorong eksplorasi sumur baru dan optimalisasi 45.000 sumur tua migas.",
  "date": "18 September 2026",
  "image": "assets/img/presiden-prabowo-minta-esdm-siapkan-program-e50-gantikan-bbm-impor.jpg",
  "imageV": "mu69mble",
  "tags": [
   "E50",
   "BBM impor",
   "sumur tua",
   "BUK Migas"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/usai-b50-pemerintah-siapkan-e50-langkah-baru-kurangi-ketergantungan-bbm-impor",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "esdm-umumkan-pemenang-lelang-migas-3-blok-tak-laku",
  "category": "Energi",
  "title": "ESDM Umumkan Pemenang Lelang Migas, 3 Blok [Tak] Laku",
  "deck": "Pemerintah menetapkan pemenang lelang enam blok migas tahap I 2026, tiga blok lain tak laku dan ditawarkan ulang, sementara lelang tahap II untuk delapan blok baru dibuka hingga 2027.",
  "date": "18 September 2026",
  "image": "assets/img/esdm-umumkan-pemenang-lelang-migas-3-blok-tak-laku.jpg",
  "imageV": "mu5sh4jv",
  "tags": [
   "ESDM",
   "Migas",
   "Lelang Wilayah Kerja",
   "Investasi Energi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pemerintah-umumkan-pemenang-lelang-penawaran-langsung-dan-lelang-reguler-area-studi-abt-2025-wilayah-kerja-minyak-dan-gas-bumi-tahap-i-tahun-2026-dan-umumkan-penawaran-lelang-wilayah-kerja-minyak-dan-gas-bumi-tahap-ii-tahun-2026",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "cakk-akui-free-float-baru-11-4-masih-kaji-opsi",
  "category": "Aksi Korporasi",
  "title": "CAKK Akui [Free Float] Baru 11,4%, Masih Kaji Opsi",
  "deck": "CAKK menjelaskan ke Bursa bahwa free float per 30 Juni 2026 baru 11,357%, di bawah syarat minimum 15%, dan masih mengkaji opsi divestasi atau aksi korporasi.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CAKK",
   "free float",
   "Bursa Efek Indonesia",
   "saham publik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/689274374a_f10e112048.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-jawab-bursa-soal-divestasi-jaya-rp44-6-miliar",
  "category": "Aksi Korporasi",
  "title": "PPGL Jawab Bursa soal Divestasi [JAYA] Rp44,6 Miliar",
  "deck": "PPGL menjawab permintaan penjelasan Bursa soal divestasi 45,79% saham JAYA senilai Rp44,60 miliar ke pihak terafiliasi, aset yang ternyata menyumbang 90% dari total aset Perseroan.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "divestasi",
   "keterbukaan informasi",
   "JAYA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8bfeb6222e_d1f1e0eedb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-ptro-naik-semester-i-2026-bunga-utang-melonjak",
  "category": "Aksi Korporasi",
  "title": "Laba PTRO Naik Semester I 2026, Bunga Utang [Melonjak]",
  "deck": "Petrosea (PTRO) membukukan laba bersih US$9,17 juta pada semester I 2026, naik dari US$1,29 juta, namun sebagian besar berasal dari keuntungan sekali jalan atas operasi yang dihentikan.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "Petrosea",
   "laporan keuangan",
   "beban bunga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260917235433-64402-0/FinancialStatement-2026-II-PTRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-dan-bren-raih-kesgi-awards-2026-dari-katadata",
  "category": "Bisnis",
  "title": "TPIA dan BREN Raih [KESGI] Awards 2026 dari Katadata",
  "deck": "Chandra Asri Pacific dan Barito Renewables Energy, dua anak usaha Barito Pacific, meraih penghargaan ESG Katadata atas kinerja emisi, energi, dan SDM.",
  "date": "17 September 2026",
  "image": "assets/img/tpia-dan-bren-raih-kesgi-awards-2026-dari-katadata.jpg",
  "imageV": "mu5sh50y",
  "tags": [
   "ESG",
   "Barito Pacific",
   "Chandra Asri",
   "Barito Renewables"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467772-dua-anak-usaha-barito-pacific-raih-kesgi-awards-2026-kinerja-hijau-tpia-dan-bren-jadi-sorotan"
 },
 {
  "slug": "inps-klaim-free-float-capai-22-89-penuhi-syarat-bursa",
  "category": "Aksi Korporasi",
  "title": "INPS Klaim [Free Float] Capai 22,89%, Penuhi Syarat Bursa",
  "deck": "INPS menjawab surat BEI soal syarat minimum saham publik, mengklaim porsi free float sudah 22,89% per 11 September 2026, di atas ambang 15%.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "free float",
   "BEI",
   "suspensi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cb0b6d5a37_4eed397626.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-ke-bursa-utang-jatuh-tempo-capai-rp17-02-t-likuiditas",
  "category": "Aksi Korporasi",
  "title": "ADHI ke Bursa: Utang Jatuh Tempo Capai Rp17,02 T [Likuiditas]",
  "deck": "ADHI menjawab permintaan penjelasan BEI: arus kas operasional melebar jadi negatif Rp751 miliar, liabilitas jatuh tempo setahun ke depan capai Rp17,02 triliun.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "likuiditas",
   "arus kas",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1fa2bff373_de553b2950.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-ekuitas-turun-10-88-akuisisi-data-center-disebut-afiliasi",
  "category": "Aksi Korporasi",
  "title": "MGLV: Ekuitas Turun 10,88%, Akuisisi Data Center Disebut [Afiliasi]",
  "deck": "Paparan publik insidentil MGLV mengungkap ekuitas turun 10,88 persen dan liabilitas naik 16,86 persen, sementara akuisisi NAC dan NGC dikonfirmasi sebagai transaksi afiliasi.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "data center",
   "rights issue",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e9f8dd19da_ca33d9bf6e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penerimaan-pajak-ekonomi-digital-capai-rp57-23-triliun-per-agustus",
  "category": "Makroekonomi",
  "title": "Penerimaan Pajak Ekonomi Digital Capai [Rp57,23] Triliun per Agustus",
  "deck": "Penerimaan pajak dari transaksi digital, termasuk e-commerce lintas negara, kripto, dan pinjaman online, mencapai Rp57,23 triliun hingga akhir Agustus 2026, menurut Direktorat Jenderal Pajak.",
  "date": "17 September 2026",
  "image": "assets/img/penerimaan-pajak-ekonomi-digital-capai-rp57-23-triliun-per-agustus.jpg",
  "imageV": "mu5mfrau",
  "tags": [
   "pajak digital",
   "DJP",
   "PPN PMSE",
   "pajak kripto"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/djp-catat-penerimaan-pajak-ekonomi-digital-rp5723-triliun",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "dpr-setujui-anggaran-kemendag-2027-naik-jadi-rp1-56-triliun",
  "category": "Makroekonomi",
  "title": "DPR Setujui Anggaran Kemendag 2027 [Naik] Jadi Rp1,56 Triliun",
  "deck": "Komisi VI DPR menyetujui pagu anggaran Kementerian Perdagangan 2027 sebesar Rp1,56 triliun, naik Rp428,71 miliar dari usulan awal, untuk mendukung program dagang dan revitalisasi pasar rakyat.",
  "date": "17 September 2026",
  "image": "assets/img/dpr-setujui-anggaran-kemendag-2027-naik-jadi-rp1-56-triliun.jpg",
  "imageV": "mu5mg2mj",
  "tags": [
   "Kemendag",
   "Anggaran 2027",
   "DPR",
   "Revitalisasi Pasar"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/raker-dengan-komisi-vi-dpr-ri-mendag-busan-apresiasi-disetujuinya-pagu-anggaran-kemendag-2027",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "yelo-jadwalkan-rupslb-pada-26-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "YELO jadwalkan [RUPSLB] pada 26 Oktober 2026",
  "deck": "PT Yelooo Integra Datanet Tbk akan menggelar RUPSLB di Jakarta pada 26 Oktober 2026; pemegang saham per 1 Oktober 2026 berhak hadir.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "RUPSLB",
   "IDX",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d532314bfb_8323bd2b8a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vici-rilis-materi-public-expose-laba-bersih-anjlok-44",
  "category": "Aksi Korporasi",
  "title": "VICI Rilis Materi Public Expose, Laba Bersih [Anjlok] 44%",
  "deck": "Materi public expose insidental VICI menunjukkan laba bersih turun 44 persen dan EBITDA turun 38 persen pada semester I 2026, di tengah suspensi saham oleh BEI akibat lonjakan harga.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "Public Expose",
   "Suspensi BEI",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c3055f01c8_f15f77b6e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "qris-melonjak-dua-kali-lipat-bi-soroti-kesenjangan-literasi",
  "category": "Perbankan",
  "title": "QRIS Melonjak Dua Kali Lipat, BI Soroti Kesenjangan [Literasi]",
  "deck": "Bank Indonesia menggelar seminar internasional soal pelindungan konsumen keuangan digital di Bali, di tengah lonjakan transaksi QRIS dan kesenjangan literasi keuangan yang masih lebar.",
  "date": "17 September 2026",
  "image": "assets/img/qris-melonjak-dua-kali-lipat-bi-soroti-kesenjangan-literasi.jpg",
  "imageV": "mu5kzk6l",
  "tags": [
   "QRIS",
   "Bank Indonesia",
   "pelindungan konsumen",
   "keuangan digital"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bjbs-pefindo-turunkan-peringkat-bank-dan-sukuknya",
  "category": "Aksi Korporasi",
  "title": "BJBS: Pefindo [Turunkan] Peringkat Bank dan Sukuknya",
  "deck": "Pefindo menurunkan peringkat bank bjb syariah dari idAA- menjadi idA+, dan peringkat sukuk subordinasinya dari idA(sy) menjadi idA-(sy), menyusul perubahan peringkat induk perusahaan.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BJBS",
   "peringkat kredit",
   "Pefindo",
   "sukuk subordinasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ee5edc072b_5f9e70af51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-tunjuk-dirjen-minerba-kawal-batu-bara-pln",
  "category": "Energi",
  "title": "Bahlil Tunjuk Dirjen Minerba [Kawal] Batu Bara PLN",
  "deck": "Menteri ESDM Bahlil Lahadalia menugaskan Dirjen Minerba Tri Winarno mengawal langsung pengadaan batu bara PLN agar RKAB tak lagi jadi alasan pemadaman listrik.",
  "date": "17 September 2026",
  "image": "assets/img/bahlil-tunjuk-dirjen-minerba-kawal-batu-bara-pln.jpg",
  "imageV": "mu5kzkn3",
  "tags": [
   "batu bara",
   "PLN",
   "Bahlil Lahadalia",
   "RKAB"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467733-bahlil-tunjuk-dirjen-minerba-jadi-pengawal-batu-bara-pln-pastikan-tak-ada-lagi-alasan-rkab"
 },
 {
  "slug": "untd-jawab-bursa-hpp-naik-68-8-covenant-bca-tak-terpenuhi",
  "category": "Aksi Korporasi",
  "title": "UNTD Jawab Bursa: HPP Naik 68,8%, Covenant BCA [Tak Terpenuhi]",
  "deck": "UNTD membalas permintaan penjelasan lanjutan BEI dengan rincian kenaikan HPP 68,8%, konsentrasi penjualan 61,2% ke satu distributor, dan covenant EBITDA ke BCA yang belum terpenuhi.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTD",
   "covenant",
   "sepeda listrik",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/868d3a7188_5771c9d6f3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkgi-komisaris-tambah-saham-200-000-lembar",
  "category": "Aksi Korporasi",
  "title": "KKGI: Komisaris [Tambah] Saham 200.000 Lembar",
  "deck": "Dewan Komisaris KKGI, Drs. Hendro Martowardojo, menambah kepemilikan saham lewat pembelian tidak langsung senilai sekitar Rp62 juta pada 16 September 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "Resource Alam Indonesia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17092026-2728-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sk-manajer-kopdes-merah-putih-terbit-gaji-diatur",
  "category": "UMKM",
  "title": "SK Manajer Kopdes Merah Putih Terbit, [Gaji] Diatur",
  "deck": "Menteri Koperasi Ferry Juliantono menyebut SK pengangkatan manajer Kopdes Merah Putih, lengkap dengan gaji dan tunjangan, terbit paling lambat dua hari lagi.",
  "date": "17 September 2026",
  "image": "assets/img/sk-manajer-kopdes-merah-putih-terbit-gaji-diatur.jpg",
  "imageV": "mu5kzl2j",
  "tags": [
   "Kopdes Merah Putih",
   "Kementerian Koperasi",
   "koperasi desa",
   "Ferry Juliantono"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467722-sk-manajer-kopdes-merah-putih-terbit-1-2-hari-lagi-gaji-dan-tunjangan-ikut-diatur"
 },
 {
  "slug": "koin-nihil-refloat-saham-kuartal-ii-2026-sisa-wajib-10-62",
  "category": "Aksi Korporasi",
  "title": "KOIN Nihil [Refloat] Saham Kuartal II 2026, Sisa Wajib 10,62%",
  "deck": "Kokoh Inti Arebama (KOIN) tak merealisasikan pengalihan kembali saham pengendali ke publik pada April-Juni 2026; kewajiban divestasi 104,16 juta lembar atau 10,62% saham masih tersisa.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOIN",
   "refloat saham",
   "free float",
   "tender offer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2f6cef76fa_c727b78ecb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-cabut-dooh-dari-pemantauan-khusus-mulai-18-september",
  "category": "Aksi Korporasi",
  "title": "BEI Cabut DOOH dari [Pemantauan Khusus] Mulai 18 September",
  "deck": "BEI mencabut saham DOOH dari daftar pemantauan khusus mulai 18 September 2026, setelah sempat masuk akibat penghentian perdagangan lebih dari satu hari bursa.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "BEI",
   "pemantauan khusus",
   "Era Media Sejahtera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b9d270bc75_19935987bf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pmmp-kena-tambahan-kriteria-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "PMMP Kena Tambahan Kriteria [Pemantauan Khusus] BEI",
  "deck": "BEI menambahkan kriteria opini disclaimer pada status pemantauan khusus saham PMMP, menyusul harga di bawah Rp51 dan ekuitas negatif, efektif 18 September 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PMMP",
   "Pemantauan Khusus",
   "BEI",
   "Panca Mitra Multiperdana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/23ea2c3ecc_89a68d6b05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oasa-direksi-jual-34-27-juta-saham-senilai-rp8-57-m",
  "category": "Aksi Korporasi",
  "title": "OASA: [Direksi] Jual 34,27 Juta Saham Senilai Rp8,57 M",
  "deck": "Direktur OASA Gafur Sulistyo Umar melepas 34,27 juta saham senilai Rp8,57 miliar pada 17 September 2026, hak suaranya turun dari 32,55% menjadi 32,01%.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OASA",
   "Maharaksa Biru Energi",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17092026-7716-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-ungkap-sebab-antrean-bbm-makassar-tangki-modifikasi-1-ton",
  "category": "Energi",
  "title": "Bahlil Ungkap Sebab Antrean BBM Makassar, Tangki [Modifikasi] 1 Ton",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut antrean BBM di Makassar dipicu perpindahan konsumen ke BBM subsidi dan tangki kendaraan modifikasi berkapasitas hingga 1 ton yang ditemukan polisi.",
  "date": "17 September 2026",
  "image": "assets/img/bahlil-ungkap-sebab-antrean-bbm-makassar-tangki-modifikasi-1-ton.jpg",
  "imageV": "mu5fkilq",
  "tags": [
   "BBM subsidi",
   "antrean BBM",
   "Bahlil Lahadalia",
   "tangki modifikasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467704-bahlil-ungkap-2-penyebab-antrean-bbm-mengular-di-makassar-ada-tangki-modifikasi-1-ton"
 },
 {
  "slug": "boss-undur-rups-ke-29-oktober-audit-3-tahun-buku-belum-kelar",
  "category": "Aksi Korporasi",
  "title": "BOSS Undur RUPS ke 29 Oktober, [Audit] 3 Tahun Buku Belum Kelar",
  "deck": "RUPS Tahunan BOSS untuk tahun buku 2023 diundur ke 29 Oktober 2026, sementara akuntan publik menyatakan audit laporan keuangan 2023, 2024, dan 2025 masih berjalan.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS",
   "Audit",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d54025b06d_d25c7c2403.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-jadwalkan-public-expose-tahunan-pada-1-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "WIKA Jadwalkan [Public Expose] Tahunan pada 1 Oktober 2026",
  "deck": "WIKA akan menggelar Public Expose Tahunan secara daring pada 1 Oktober 2026, forum publik pertama sejak peringkat obligasinya diturunkan ke status gagal bayar.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "Public Expose",
   "Wijaya Karya",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4dfd9286c3_3ccab7b376.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-lepas-904-juta-saham-suara-ke-16-62",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Lepas 904 Juta Saham, Suara ke [16,62%]",
  "deck": "Direksi NSSS menjual 903,99 juta saham lewat repurchase agreement bertujuan substitusi, memangkas hak suaranya dari 20,42 persen menjadi 16,62 persen.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17092026-5620-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-beli-balik-500-000-saham-grup-usaha",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri [beli balik] 500.000 saham grup usaha",
  "deck": "Putrasakti Mandiri membeli 500.000 saham KDTN seharga Rp389 per lembar pada 16 September 2026, menaikkan hak suaranya tipis dari 32,11% menjadi 32,15%.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "kepemilikan saham",
   "Putrasakti Mandiri",
   "restrukturisasi kelompok usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17092026-1849-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pmjs-belum-penuhi-syarat-free-float-masih-kaji-opsi",
  "category": "Aksi Korporasi",
  "title": "PMJS Belum Penuhi Syarat [Free Float], Masih Kaji Opsi",
  "deck": "PT Putra Mandiri Jembar Tbk menjawab permintaan penjelasan Bursa Efek Indonesia soal kewajiban minimum saham beredar bebas yang belum terpenuhi.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PMJS",
   "free float",
   "Bursa Efek Indonesia",
   "kepatuhan emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/21d3d6713f_c969349488.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "link-jadwalkan-rupslb-26-oktober-2026-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "LINK Jadwalkan RUPSLB [26 Oktober 2026], Agenda Menyusul",
  "deck": "Link Net akan menggelar RUPSLB pada 26 Oktober 2026 secara fisik dan elektronik. Pemanggilan resmi berisi agenda baru terbit 2 Oktober 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LINK",
   "RUPSLB",
   "Link Net",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/07707eae69_6d671ea9bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unsp-jelaskan-metode-revaluasi-aset-ke-bursa-efek-indonesia",
  "category": "Aksi Korporasi",
  "title": "UNSP Jelaskan Metode [Revaluasi] Aset ke Bursa Efek Indonesia",
  "deck": "Bakrie Sumatera Plantations menjawab permintaan penjelasan BEI soal perubahan kebijakan akuntansi revaluasi aset tanah dan tanaman produktif di sembilan entitas anak.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNSP",
   "Bakrie Sumatera Plantations",
   "revaluasi aset",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a851623875_9136329a9e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "city-belum-penuhi-syarat-free-float-minimum-janji-oktober",
  "category": "Aksi Korporasi",
  "title": "CITY belum penuhi syarat [free float] minimum, janji Oktober",
  "deck": "Natura City Developments menjelaskan ke Bursa bahwa porsi sahamnya yang beredar di publik belum capai batas minimum 15 persen, dan berjanji memenuhinya paling lambat akhir Oktober 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITY",
   "free float",
   "BEI",
   "kepatuhan emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d3a85a1979_75ff646ca6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hygn-bagi-dividen-rp3-saham-luncurkan-unit-bisnis-udara-bersih",
  "category": "Aksi Korporasi",
  "title": "HYGN Bagi [Dividen] Rp3/Saham, Luncurkan Unit Bisnis Udara Bersih",
  "deck": "Ecocare Indo Pasifik (HYGN) memaparkan materi public expose tahunan, termasuk pembagian dividen Rp3 per saham dan peluncuran unit bisnis ecoCare Pure Air.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HYGN",
   "dividen",
   "public expose",
   "Ecocare Indo Pasifik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6048d57af0_7ef3b45f0e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yupi-baru-penuhi-10-free-float-kejar-12-5-di-2027",
  "category": "Aksi Korporasi",
  "title": "YUPI Baru Penuhi 10% [Free Float], Kejar 12,5% di 2027",
  "deck": "Yupi Indo Jelly Gum menjelaskan ke BEI bahwa free float sahamnya baru 10%, dengan target bertahap 12,5% pada Maret 2027 dan 15% pada Maret 2028.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YUPI",
   "free float",
   "BEI",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/14deacd12e_f44d33f869.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smra-laporkan-pengurangan-modal-rp10-m-di-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "SMRA Laporkan [Pengurangan] Modal Rp10 M di Anak Usaha",
  "deck": "Summarecon Agung melaporkan transaksi afiliasi berupa pengurangan modal PT Kharisma Intan Properti senilai Rp10 miliar, yang sahamnya dipegang oleh anak usaha lain, PT Summarecon Investment Property.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRA",
   "transaksi afiliasi",
   "Summarecon Agung",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2ce86baad8_21b65074a1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkgi-bagikan-dividen-tunai-rp97-47-miliar-tahun-buku-2025",
  "category": "Aksi Korporasi",
  "title": "KKGI Bagikan [Dividen] Tunai Rp97,47 Miliar Tahun Buku 2025",
  "deck": "Resource Alam Indonesia menetapkan dividen tunai Rp20 per saham senilai total Rp97,47 miliar, dibayar paling lambat 15 Oktober 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "dividen tunai",
   "Resource Alam Indonesia",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2b17cf85a3_5b3c0582e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-rombak-susunan-direksi-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "SANF Rombak Susunan [Direksi] dan Komisaris",
  "deck": "SANF mengganti direktur dan komisaris usai dua pejabat mengundurkan diri; tiga pengurus baru menunggu hasil fit and proper test OJK sebelum resmi menjabat.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SANF",
   "pergantian direksi",
   "komisaris",
   "ASTRA Financial"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/758dd2f039_8d2c19196e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penilaian-bkpm-76-persen-layanan-investasi-masuk-kategori-baik",
  "category": "Bisnis",
  "title": "Penilaian BKPM: 76 Persen Layanan Investasi Masuk [Kategori] Baik",
  "deck": "BKPM menilai kinerja layanan investasi di 571 instansi, terdiri dari pemerintah daerah dan kementerian/lembaga. Sebanyak 76 persen di antaranya meraih kategori baik atau sangat baik.",
  "date": "17 September 2026",
  "image": "assets/img/penilaian-bkpm-76-persen-layanan-investasi-masuk-kategori-baik.jpg",
  "imageV": "mu5841d0",
  "tags": [
   "BKPM",
   "investasi",
   "PTSP",
   "ALI 2026"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/ali-2026-apresiasi-kinerja-layanan-investasi-dorong-kemudahan-berusaha",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "mmix-buka-data-pemegang-saham-imbas-pemeriksaan-bursa",
  "category": "Aksi Korporasi",
  "title": "MMIX Buka Data Pemegang Saham Imbas [Pemeriksaan] Bursa",
  "deck": "PT Multi Medika Internasional Tbk merinci pemegang saham dan susunan manajemen per Januari 2024 setelah Bursa Efek Indonesia meminta penjelasan terkait pemeriksaan transaksi sahamnya.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "pemegang saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6c699ce69b_81989c2601.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-inps-disuspensi-bei-usai-setahun-di-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "Saham INPS Disuspensi BEI Usai Setahun di [Pemantauan Khusus]",
  "deck": "Bursa Efek Indonesia menghentikan sementara perdagangan saham INPS di seluruh pasar mulai 17 September 2026, setelah perseroan lebih dari setahun berada di Papan Pemantauan Khusus.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "suspensi saham",
   "BEI",
   "Papan Pemantauan Khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e9442d54b3_a1022a1ee5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-jelaskan-ke-bursa-opini-wdp-dan-piutang-bermasalah-naik",
  "category": "Aksi Korporasi",
  "title": "VTNY Jelaskan ke Bursa: [Opini WDP] dan Piutang Bermasalah Naik",
  "deck": "Venteny menjawab permintaan penjelasan Bursa soal opini wajar dengan pengecualian dan lonjakan cadangan kerugian piutang yang lebih cepat dari pertumbuhan piutangnya.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "opini audit",
   "kualitas piutang",
   "Venteny Fortuna"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/69f6092dc0_2b56ccd113.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "widi-koreksi-laporan-realisasi-dana-ipo-rp37-8-miliar",
  "category": "Aksi Korporasi",
  "title": "WIDI Koreksi Laporan [Realisasi] Dana IPO Rp37,8 Miliar",
  "deck": "Widiant Jaya Krenindo menyampaikan ulang laporan realisasi dana IPO Rp37,8 miliar dalam dua bahasa sesuai aturan OJK, seluruh dana sudah terserap penuh.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIDI",
   "IPO",
   "penggunaan dana",
   "waran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/54b51ee56d_52feff0327.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bptr-jelaskan-ke-bursa-kendala-penuhi-free-float-minimum",
  "category": "Aksi Korporasi",
  "title": "BPTR Jelaskan ke Bursa Kendala Penuhi [Free Float] Minimum",
  "deck": "BPTR menjawab permintaan penjelasan Bursa Efek Indonesia soal rencana pemenuhan syarat minimum saham beredar bebas, dan menyebut pemenuhannya bergantung pada keputusan pemegang saham.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPTR",
   "free float",
   "Bursa Efek Indonesia",
   "kepatuhan emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/610d87d705_3feaefb998.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apli-baru-kantongi-free-float-7-82-wajib-15-pada-2029",
  "category": "Aksi Korporasi",
  "title": "APLI Baru Kantongi [Free Float] 7,82%, Wajib 15% pada 2029",
  "deck": "Asiaplast menjelaskan ke Bursa bahwa saham beredar bebasnya baru 7,82%, jauh dari syarat minimum 15%. Pengendali berencana melepas sekitar 97,8 juta saham secara bertahap hingga 2029.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APLI",
   "free float",
   "Asiaplast Industries",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c164b34a69_b8c56b1168.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkgi-angkat-wimpi-salim-jadi-direktur-utama-baru",
  "category": "Aksi Korporasi",
  "title": "KKGI Angkat Wimpi Salim Jadi [Direktur Utama] Baru",
  "deck": "KKGI mengangkat Wimpi Salim sebagai Direktur Utama baru menggantikan Pintarso Adijanto, serta Lucky Ciptadi Wibowo sebagai direktur baru menggantikan Winanto, efektif 15 September 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "Resource Alam Indonesia",
   "Pergantian Direksi",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a550b38626_dfa5eb1dec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdra-komisaris-independen-ahmad-fajarprana-mundur",
  "category": "Aksi Korporasi",
  "title": "SDRA: Komisaris Independen Ahmad Fajarprana [Mundur]",
  "deck": "Bank Woori Saudara Indonesia 1906 (SDRA) melaporkan pengunduran diri Ahmad Fajarprana dari jabatan Komisaris Independen per 16 September 2026, menunggu keputusan RUPS.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDRA",
   "Bank Woori Saudara",
   "komisaris independen",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/44c55ebb66_f48be9443b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indr-akui-belum-penuhi-syarat-free-float-tenggat-2029",
  "category": "Aksi Korporasi",
  "title": "INDR Akui Belum Penuhi Syarat [Free Float], Tenggat 2029",
  "deck": "Indo-Rama Synthetics menjelaskan ke Bursa bahwa saham beredar publiknya belum capai batas minimum, dengan rencana pemenuhan paling lambat 31 Maret 2029.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDR",
   "free float",
   "Bursa Efek Indonesia",
   "kepatuhan emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/754fcf668b_0346bd23ae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-jecc-melonjak-25-ke-auto-rejection-bursa-minta-klarifikasi",
  "category": "Aksi Korporasi",
  "title": "Saham JECC Melonjak [25%] ke Auto-Rejection, Bursa Minta Klarifikasi",
  "deck": "Bursa meminta penjelasan setelah saham JECC melonjak 25 persen ke Rp825 dan menyentuh batas atas auto-rejection pada 10 September 2026, di tengah IHSG yang justru melemah.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECC",
   "UMA",
   "volatilitas saham",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cf81b011d6_0a50f468ae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bukk-belum-penuhi-free-float-minimum-bursa-minta-penjelasan",
  "category": "Aksi Korporasi",
  "title": "BUKK Belum Penuhi [Free Float] Minimum, Bursa Minta Penjelasan",
  "deck": "Bukaka Teknik Utama menjawab permintaan penjelasan Bursa Efek Indonesia soal syarat free float minimum 15 persen yang belum terpenuhi, dengan target bertahap ke 7,5 persen lalu 15 persen pada 2029.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKK",
   "free float",
   "Bukaka Teknik Utama",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/24440b5c02_325805b678.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-rp5-000-jadi-rp2-598-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] Rp5.000 jadi Rp2.598.000/Gram",
  "deck": "Harga emas batangan Antam naik tipis ke Rp2.598.000 per gram, sementara harga buyback bertahan di Rp2.438.000 per gram.",
  "date": "17 September 2026",
  "image": "assets/img/harga-emas-antam-naik-rp5-000-jadi-rp2-598-000-gram.jpg",
  "imageV": "mu52njx3",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467625-harga-emas-antam-hari-ini-17-september-2026-naik-rp5000-ke-angka-rp2598000-per-gram-buyback-stagnan"
 },
 {
  "slug": "babp-jawab-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "BABP Jawab Bursa soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Bank MNC Internasional (BABP) menegaskan tidak ada informasi material di balik pergerakan sahamnya, merespons permintaan penjelasan BEI atas volatilitas transaksi.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BABP",
   "volatilitas saham",
   "Bank MNC Internasional",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1a8d811b25_d0cb1729d1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yoii-volume-saham-melonjak-40x-emiten-bantah-ada-kabar-baru",
  "category": "Aksi Korporasi",
  "title": "YOII: Volume Saham [Melonjak] 40x, Emiten Bantah Ada Kabar Baru",
  "deck": "Saham PT Asuransi Digital Bersama Tbk naik 4,94% ke Rp85 dengan volume melonjak ke 131,5 juta lembar dan 10.286 kali transaksi pada 15 September 2026, memicu permintaan penjelasan dari BEI.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YOII",
   "volatilitas saham",
   "BEI",
   "Asuransi Digital Bersama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/39d018120b_8d8c29372e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbrm-belum-penuhi-syarat-minimum-free-float-ditegur-bursa",
  "category": "Aksi Korporasi",
  "title": "BBRM Belum Penuhi Syarat Minimum [Free Float], Ditegur Bursa",
  "deck": "Bursa Efek Indonesia meminta penjelasan tertulis BBRM setelah porsi saham publik per 30 Juni 2026 belum mencapai syarat minimum 15 persen dari total saham tercatat.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRM",
   "free float",
   "Bursa Efek Indonesia",
   "kepatuhan pencatatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0d485eaee9_39cf7da8de.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbrm-lonjakan-saham-9-september-murni-mekanisme-pasar",
  "category": "Aksi Korporasi",
  "title": "BBRM: Lonjakan Saham 9 September Murni [Mekanisme Pasar]",
  "deck": "BBRM menjawab permintaan Bursa usai volume transaksi sahamnya melonjak 26 kali lipat dan harga naik 7,5 persen pada 9 September 2026.",
  "date": "17 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRM",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/500f67e172_212430a912.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giias-semarang-2026-digelar-30-september-4-oktober",
  "category": "Industri",
  "title": "GIIAS [Semarang] 2026 Digelar 30 September-4 Oktober",
  "deck": "Pameran otomotif GIIAS singgah ke Semarang pada 30 September-4 Oktober 2026, seiring klaim investasi Rp15 triliun di kawasan industri kendaraan listrik Kendal, Jawa Tengah.",
  "date": "17 September 2026",
  "image": "assets/img/giias-semarang-2026-digelar-30-september-4-oktober.jpg",
  "imageV": "mu4mlbwl",
  "tags": [
   "GIIAS",
   "Otomotif",
   "Kendaraan Listrik",
   "Jawa Tengah"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/gaikindo-pameran-giias-semarang-30-september-4-oktober-dorong-peningkatan-investasi-industri-otomoif-jawa-tengah/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "taspen-dorong-mahasiswa-usu-rencanakan-pensiun-sejak-dini",
  "category": "BUMN",
  "title": "TASPEN Dorong Mahasiswa USU [Rencanakan] Pensiun Sejak Dini",
  "deck": "TASPEN gandeng USU gelar edukasi keuangan bagi seribu mahasiswa dan teken MoU kepesertaan TASPEN Group, bagian kampanye literasi dana pensiun nasional OJK 2026.",
  "date": "16 September 2026",
  "image": "assets/img/taspen-dorong-mahasiswa-usu-rencanakan-pensiun-sejak-dini.jpg",
  "imageV": "mu4czdt2",
  "tags": [
   "TASPEN",
   "dana pensiun",
   "literasi keuangan",
   "USU"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467581-taspen-goes-to-campus-dorong-generasi-muda-siapkan-kesejahteraan-finansial-sejak-dini"
 },
 {
  "slug": "ppgl-bagikan-saham-bonus-rasio-6-4-dari-agio-ipo",
  "category": "Aksi Korporasi",
  "title": "PPGL Bagikan [Saham Bonus] Rasio 6:4 dari Agio IPO",
  "deck": "PT Prima Globalindo Logistik mengusulkan saham bonus rasio 6:4 dari kapitalisasi agio IPO 2025, menerbitkan hingga 514,1 juta saham baru senilai Rp11,31 miliar.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "saham bonus",
   "RUPSLB",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/54566cc6e6_30f9cbeea6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irsx-balik-untung-tapi-liabilitas-melonjak-347-semester-i",
  "category": "Aksi Korporasi",
  "title": "IRSX Balik Untung, tapi [Liabilitas] Melonjak 347% Semester I",
  "deck": "Folago Global Nusantara (IRSX) membalikkan rugi jadi laba Rp7,72 miliar pada semester I 2026, tapi liabilitas naik 347% dan kas menyusut hampir separuh menjadi Rp57,38 miliar.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRSX",
   "Folago Global Nusantara",
   "laporan keuangan",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260916222132-64272-0/FinancialStatement-2026-II-IRSX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-bakal-terbitkan-77-juta-saham-baru-tanpa-hmetd",
  "category": "Aksi Korporasi",
  "title": "PPGL Bakal Terbitkan 77 Juta Saham Baru [Tanpa HMETD]",
  "deck": "Perseroan berencana menerbitkan hingga 77,1 juta saham baru tanpa hak memesan efek terlebih dahulu, setara 10 persen modal, untuk memperkuat modal kerja. RUPSLB persetujuan digelar 23 Oktober 2026.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "PMTHMETD",
   "penambahan modal",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/aa712ca9ab_82d2c128a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djp-evaluasi-ulang-ratusan-pejabat-era-purbaya",
  "category": "Makroekonomi",
  "title": "DJP [Evaluasi] Ulang Ratusan Pejabat Era Purbaya",
  "deck": "Ditjen Pajak mengecek ulang ratusan pejabat yang dilantik Purbaya Yudhi Sadewa saat menjabat Menkeu; yang tak lolos penilaian kompetensi dikembalikan ke jabatan lama.",
  "date": "16 September 2026",
  "image": "assets/img/djp-evaluasi-ulang-ratusan-pejabat-era-purbaya.jpg",
  "imageV": "mu4czeac",
  "tags": [
   "Kemenkeu",
   "Purbaya Yudhi Sadewa",
   "Ditjen Pajak",
   "Mutasi Pejabat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467544-begini-nasib-ratusan-pejabat-yang-dilantik-purbaya-saat-jadi-menkeu"
 },
 {
  "slug": "klbf-margin-diprediksi-tertekan-hingga-semester-ii-2026",
  "category": "Aksi Korporasi",
  "title": "KLBF: [Margin] Diprediksi Tertekan hingga Semester II 2026",
  "deck": "CFO Kalbe Farma menyebut tekanan margin akibat pelemahan rupiah dan bahan baku impor belum akan membaik signifikan di semester II 2026, sementara anak usaha EPMT masih berisiko delisting.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "Kalbe Farma",
   "public expose",
   "EPMT"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/3ed33290e6_0ed0434665.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-jadwalkan-rupslb-23-oktober-sertakan-cv-calon-direksi",
  "category": "Aksi Korporasi",
  "title": "PPGL Jadwalkan RUPSLB 23 Oktober, Sertakan CV Calon [Direksi]",
  "deck": "PPGL menjadwalkan RUPSLB pada 23 Oktober 2026 untuk mengesahkan saham bonus rasio 6:4 dan penambahan modal tanpa HMETD, sekaligus melampirkan riwayat hidup calon direksi baru.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "RUPSLB",
   "Direksi",
   "Saham Bonus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a0eafc2b58_4f90557177.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-targetkan-40-000-titik-mini-ras-perikanan-hingga-2029",
  "category": "Industri",
  "title": "KKP Targetkan [40.000] Titik Mini RAS Perikanan hingga 2029",
  "deck": "Menteri KKP dan Menko Pangan meninjau mockup Mini RAS di Depok, bagian dari rencana membangun 40.000 titik budi daya ikan di desa hingga 2029.",
  "date": "16 September 2026",
  "image": "assets/img/kkp-targetkan-40-000-titik-mini-ras-perikanan-hingga-2029.jpg",
  "imageV": "mu45qz3f",
  "tags": [
   "KKP",
   "Mini RAS",
   "Budi Daya Ikan",
   "Ketahanan Pangan"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/menteri-trenggono-dan-menko-pangan-tinjau-mockup-tematik-mini-ras-di-depok-RPzO.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "esdm-targetkan-produksi-minyak-ri-naik-ke-1-juta-barel-hari",
  "category": "Energi",
  "title": "ESDM Targetkan Produksi Minyak RI Naik ke [1 Juta] Barel/Hari",
  "deck": "Wamen ESDM Yuliot memaparkan strategi ketahanan energi Indonesia di forum G20 Houston, termasuk target produksi minyak 1 juta barel per hari dan program B50 pencampuran biodiesel 50 persen.",
  "date": "16 September 2026",
  "image": "assets/img/esdm-targetkan-produksi-minyak-ri-naik-ke-1-juta-barel-hari.jpg",
  "imageV": "mu45r142",
  "tags": [
   "ESDM",
   "G20",
   "produksi minyak",
   "B50"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hadapi-gejolak-energi-global-wamen-esdm-ungkap-jurus-jitu-ri-di-forum-g20",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kemenkeu-dorong-big-data-dan-ai-untuk-optimalkan-pajak",
  "category": "Makroekonomi",
  "title": "Kemenkeu Dorong [Big Data] dan AI untuk Optimalkan Pajak",
  "deck": "Wamenkeu Juda Agung menilai big data dan AI dapat optimalkan penerimaan pajak, sembari mendorong reformasi pajak berbasis bukti dan riset akademisi.",
  "date": "16 September 2026",
  "image": "assets/img/kemenkeu-dorong-big-data-dan-ai-untuk-optimalkan-pajak.jpg",
  "imageV": "mu45r1o5",
  "tags": [
   "pajak",
   "big data",
   "kecerdasan buatan",
   "Kemenkeu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467519-big-data-dan-ai-dinilai-bisa-optimalkan-penerimaan-pajak-kemenkeu-dorong-kebijakan-berbasis-data"
 },
 {
  "slug": "fish-tegaskan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "FISH Tegaskan Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "FKS Multi Agro (FISH) menjawab permintaan penjelasan BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FISH",
   "FKS Multi Agro",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/012df4c660_b66e96da45.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbma-siapkan-buyback-rp1-38-triliun-di-tengah-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "MBMA Siapkan [Buyback] Rp1,38 Triliun di Tengah Pasar Bergejolak",
  "deck": "MBMA berencana membeli kembali maksimal 1,465 miliar saham senilai Rp1,38 triliun pada 17 September-16 Desember 2026, memanfaatkan aturan OJK untuk kondisi pasar bergejolak.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "buyback saham",
   "OJK",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7aadf3d844_837e57f47d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bapanas-bongkar-25-merek-beras-fortifikasi-culas",
  "category": "Industri",
  "title": "Bapanas Bongkar 25 Merek Beras Fortifikasi [Culas]",
  "deck": "Bapanas menyebut 25 merek beras fortifikasi diduga menyalahi klaim gizi dan label, 12 merek sudah ditarik dari peredaran, dengan potensi kerugian konsumen Rp89 triliun.",
  "date": "16 September 2026",
  "image": "assets/img/bapanas-bongkar-25-merek-beras-fortifikasi-culas.jpg",
  "imageV": "mu45r252",
  "tags": [
   "beras fortifikasi",
   "Bapanas",
   "Andi Amran Sulaiman",
   "perlindungan konsumen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467545-geger-beras-fortifikasi-culas-25-merek-diduga-bermasalah-dengan-potensi-kerugian-konsumen-capai-rp89-triliun"
 },
 {
  "slug": "vici-gelar-public-expose-usai-saham-disuspensi-bei",
  "category": "Aksi Korporasi",
  "title": "VICI Gelar Public Expose Usai Saham [Disuspensi] BEI",
  "deck": "VICI akan menggelar public expose insidental pada 18 September 2026 setelah sahamnya disuspensi BEI sejak 14 September 2026 lewat mekanisme cooling down.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "suspensi saham",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c2ba77fefa_aac20d2823.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-cetak-laba-us-10-8-juta-di-semester-i-ekuitas-balik-positif",
  "category": "Aksi Korporasi",
  "title": "GMFI Cetak [Laba] US$10,8 Juta di Semester I, Ekuitas Balik Positif",
  "deck": "Laporan keuangan interim GMFI per Juni 2026 menunjukkan ekuitas berbalik positif dan pendapatan naik 51 persen, meski laba per saham turun akibat penambahan saham dari rights issue.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "laporan keuangan",
   "rights issue",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260916195327-64320-0/FinancialStatement-2026-II-GMFI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nasabah-pnm-mekaar-sulap-sampah-pasar-jadi-kerajinan",
  "category": "UMKM",
  "title": "Nasabah PNM Mekaar [Sulap] Sampah Pasar Jadi Kerajinan",
  "deck": "Seorang mantan guru mengubah kulit jagung dan pecahan kaca dari sampah pasar menjadi kerajinan bernilai jual setelah penghasilannya anjlok akibat pandemi.",
  "date": "16 September 2026",
  "image": "assets/img/nasabah-pnm-mekaar-sulap-sampah-pasar-jadi-kerajinan.jpg",
  "imageV": "mu45r2ng",
  "tags": [
   "pnm mekaar",
   "umkm",
   "kerajinan limbah",
   "usaha rumahan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467536-jeli-melihat-peluang-nasabah-pnm-mekaar-sulap-sampah-pasar-jadi-usaha-beromzet-jutaan"
 },
 {
  "slug": "22-kampus-adu-gagasan-energi-di-final-nasional-pgtc",
  "category": "BUMN",
  "title": "22 Kampus Adu [Gagasan] Energi di Final Nasional PGTC",
  "deck": "16 tim debat energi dan 10 finalis inovasi dari 22 kampus di 12 provinsi berlaga di Final Nasional Pertamina Goes to Campus 2026, Jakarta, 22-23 September 2026.",
  "date": "16 September 2026",
  "image": "assets/img/22-kampus-adu-gagasan-energi-di-final-nasional-pgtc.jpg",
  "imageV": "mu45r3dw",
  "tags": [
   "Pertamina",
   "PGTC 2026",
   "Transisi Energi",
   "Mahasiswa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467533-dorong-inovasi-dan-pengembangan-talenta-22-kampus-se-indonesia-siap-beradu-gagasan-di-final-nasional-pgtc-2026"
 },
 {
  "slug": "bnii-rampungkan-pengambilalihan-981-juta-saham-aeii",
  "category": "Aksi Korporasi",
  "title": "BNII Rampungkan Pengambilalihan 981 Juta Saham [AEII]",
  "deck": "PT Bank Maybank Indonesia Tbk merampungkan pengambilalihan 981,3 juta saham PT Asuransi Etiqa Internasional Indonesia dari Etiqa International Holdings Sdn. Bhd.",
  "date": "16 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNII",
   "akuisisi",
   "Maybank Indonesia",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9ce35427a1_71c2e4a74a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bimo-batalkan-rotasi-pejabat-pajak-tanpa-seleksi",
  "category": "Makroekonomi",
  "title": "Bimo [Batalkan] Rotasi Pejabat Pajak Tanpa Seleksi",
  "deck": "Dirjen Pajak Bimo Wijayanto membatalkan penempatan pejabat DJP yang masuk daftar rotasi tanpa melalui proses seleksi resmi, lalu mengembalikan mereka ke posisi semula.",
  "date": "16 September 2026",
  "image": "assets/img/bimo-batalkan-rotasi-pejabat-pajak-tanpa-seleksi.jpg",
  "imageV": "mu45r3um",
  "tags": [
   "DJP",
   "Bimo Wijayanto",
   "Kemenkeu",
   "rotasi pejabat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467513-rotasi-pejabat-pajak-jadi-sorotan-bimo-batalkan-nama-yang-tak-ikut-seleksi"
 },
 {
  "slug": "pertamina-ajak-mahasiswa-its-bahas-energi-masa-depan",
  "category": "Energi",
  "title": "Pertamina Ajak Mahasiswa ITS Bahas [Energi] Masa Depan",
  "deck": "Pertamina Patra Niaga menggelar Pertamina Goes to Campus 2026 di ITS Surabaya, mengajak mahasiswa membahas tantangan industri energi dan peluang karier di sektor ini.",
  "date": "16 September 2026",
  "image": "assets/img/pertamina-ajak-mahasiswa-its-bahas-energi-masa-depan.jpg",
  "imageV": "mu45r4bn",
  "tags": [
   "Pertamina Patra Niaga",
   "PGTC 2026",
   "ITS Surabaya",
   "industri energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/467510-pgtc-2026-digelar-di-its-ajak-mahasiswa-bahas-tantangan-industri-energi-masa-depan"
 }
];
