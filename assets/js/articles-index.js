// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
 },
 {
  "slug": "kredit-program-pemerintah-capai-rp2-440-triliun-npl-2-13",
  "category": "UMKM",
  "title": "Kredit Program Pemerintah Capai Rp2.440 Triliun, NPL [2,13%]",
  "deck": "Penyaluran kredit program pemerintah sejak 2015 kumulatif capai Rp2.440 triliun lewat 58,1 juta akad, dengan NPL tetap rendah di 2,13 persen per akhir September 2026.",
  "date": "30 Oktober 2026",
  "image": "assets/img/warung-makan.jpg",
  "tags": [
   "KUR",
   "UMKM",
   "Kemenko Perekonomian",
   "Kredit Program"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7192/indonesia-bagikan-praktik-baik-kredit-program-untuk-memperluas-peluang-pembiayaan-umkm",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ekspor-alat-musik-ri-tembus-rp6-2-triliun-di-2026",
  "category": "Industri",
  "title": "Ekspor Alat Musik RI Tembus [Rp6,2 Triliun] di 2026",
  "deck": "Kemendag mencatat ekspor alat musik Indonesia capai US$397,14 juta dalam delapan bulan 2026, sementara ekspansi ke sektor jasa musik seperti lisensi masih tahap awal.",
  "date": "30 Oktober 2026",
  "image": "assets/img/ekspor-alat-musik-ri-tembus-rp6-2-triliun-di-2026.jpg",
  "imageV": "mvun5kn6",
  "tags": [
   "industri musik",
   "ekspor",
   "Kementerian Perdagangan",
   "KMI 2026"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/wamendag-roro-optimistis-talenta-musik-indonesia-bersaing-di-pasar-global",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pola-catat-rugi-rp1-68-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "POLA Catat [Rugi] Rp1,68 Miliar di Kuartal III 2026",
  "deck": "PT Pool Advista Finance Tbk membalik untung jadi rugi Rp1,68 miliar pada sembilan bulan 2026 setelah pendapatan pembiayaan turun hampir separuh dari tahun sebelumnya.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POLA",
   "laporan keuangan",
   "multifinance",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030131438-64887-0/FinancialStatement-2026-III-POLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tbla-laba-turun-ke-rp591-miliar-pendapatan-naik-17",
  "category": "Aksi Korporasi",
  "title": "TBLA: Laba Turun ke Rp591 Miliar, [Pendapatan] Naik 17%",
  "deck": "Pendapatan sembilan bulan TBLA naik 17 persen jadi Rp19,18 triliun, tapi laba bersih turun 6 persen akibat beban bunga yang lebih berat.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TBLA",
   "Tunas Baru Lampung",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030132216-64798-0/FinancialStatement-2026-III-TBLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tnca-rugi-kuartal-iii-liabilitas-naik-158",
  "category": "Aksi Korporasi",
  "title": "TNCA Rugi Kuartal III, Liabilitas Naik [158%]",
  "deck": "TNCA berbalik rugi Rp81 juta pada sembilan bulan 2026 dan arus kas operasinya negatif, sementara liabilitasnya melonjak 158% setahun karena utang usaha dan utang lain-lain yang membesar tajam.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TNCA",
   "laporan keuangan",
   "logistik",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030131550-65187-0/FinancialStatement-2026-III-TNCA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pudp-cetak-rugi-rp7-2-miliar-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "PUDP Cetak [Rugi] Rp7,2 Miliar di Sembilan Bulan 2026",
  "deck": "Pudjiadi Prestige (PUDP) berbalik rugi Rp7,2 miliar pada sembilan bulan 2026, dari laba Rp1,6 miliar setahun sebelumnya, seiring kas tergerus pembiayaan proyek baru di Lebak Bulus.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PUDP",
   "properti",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030131332-64861-0/FinancialStatement-2026-III-PUDP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-rencanakan-audit-lk-interim-kuartal-iii-sebut-strategis",
  "category": "Aksi Korporasi",
  "title": "UNVR Rencanakan Audit LK Interim Kuartal III, Sebut [Strategis]",
  "deck": "Unilever Indonesia akan mengaudit penuh laporan keuangan interim kuartal III 2026 terkait rencana strategis mendatang, disetor paling lambat 31 Desember 2026.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "Unilever Indonesia",
   "audit",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f05897c06e_d2cafaa5a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tins-catat-laba-bersih-rp4-12-triliun-di-9m-2026-naik-584",
  "category": "Aksi Korporasi",
  "title": "TINS Catat [Laba Bersih] Rp4,12 Triliun di 9M 2026, Naik 584%",
  "deck": "PT Timah membukukan laba bersih Rp4,12 triliun pada sembilan bulan 2026, melonjak 584% ditopang harga timah global tinggi dan kenaikan produksi serta penjualan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TINS",
   "laba bersih",
   "timah",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/055eb7320c_1f0251cffd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-belum-bayar-utang-rp82-miliar-lk-2024-beropini-pengecualian",
  "category": "Aksi Korporasi",
  "title": "BOSS Belum Bayar Utang Rp82 Miliar, LK 2024 Beropini [Pengecualian]",
  "deck": "Laporan keuangan tahunan 2024 BOSS mendapat opini wajar dengan pengecualian setelah anak usaha tambangnya dinyatakan pailit dan dua utang besar belum terbayar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "laporan keuangan tahunan",
   "opini wajar dengan pengecualian",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202410/20261030125700-65522-0/FinancialStatement-2024-Tahunan-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sraj-kas-turun-23-saat-ekspansi-rs-jakarta-timur-rampung",
  "category": "Aksi Korporasi",
  "title": "SRAJ: Kas Turun 23% Saat Ekspansi [RS Jakarta Timur] Rampung",
  "deck": "Kas SRAJ turun 23 persen jadi Rp1,40 triliun dalam sembilan bulan 2026, seiring aset tetap naik saat rumah sakit baru di Jakarta Timur mulai beroperasi komersial.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRAJ",
   "rumah sakit",
   "Mayapada Healthcare Group",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030123113-65299-0/FinancialStatement-2026-III-SRAJ.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendag-kirim-7-ton-cabai-rawit-ke-halmahera-utara",
  "category": "Makroekonomi",
  "title": "Kemendag Kirim [7 Ton] Cabai Rawit ke Halmahera Utara",
  "deck": "Kementerian Perdagangan mengirim 7 ton cabai rawit dari Probolinggo ke Halmahera Utara untuk menekan harga yang sempat mencapai Rp150.000 per kilogram menjelang Natal dan Tahun Baru.",
  "date": "30 Oktober 2026",
  "image": "assets/img/kemendag-kirim-7-ton-cabai-rawit-ke-halmahera-utara.jpg",
  "imageV": "mvuivzcm",
  "tags": [
   "cabai rawit",
   "Kemendag",
   "Halmahera Utara",
   "Nataru"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tekan-disparitas-harga-jelang-nataru-kemendag-fasilitasi-pengiriman-7-ton-cabai-rawit-ke-halmahera-utara",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "rans-catat-lonjakan-aset-86-usai-ipo-utang-bank-lunas",
  "category": "Aksi Korporasi",
  "title": "RANS Catat Lonjakan Aset 86% Usai [IPO], Utang Bank Lunas",
  "deck": "Setelah dana IPO masuk Juli 2026, total aset RANS naik 86% jadi Rp855,73 miliar dan utang bank lunas, sementara laba sembilan bulan naik jadi Rp37,97 miliar.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "IPO",
   "Laporan Keuangan",
   "Media dan Hiburan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030122202-65531-0/FinancialStatement-2026-III-RANS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nely-catat-rugi-rp9-2-miliar-pendapatan-turun-29-persen",
  "category": "Aksi Korporasi",
  "title": "NELY catat [rugi] Rp9,2 miliar, pendapatan turun 29 persen",
  "deck": "Pelayaran Nelly Dwi Putri membukukan rugi bersih Rp9,2 miliar pada sembilan bulan pertama 2026, berbalik dari laba Rp47,6 miliar tahun sebelumnya, seiring pendapatan yang turun 29 persen.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NELY",
   "laporan keuangan",
   "pelayaran",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030121957-65220-0/FinancialStatement-2026-III-NELY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smdm-balik-untung-liabilitas-melonjak-56-dalam-9-bulan",
  "category": "Aksi Korporasi",
  "title": "SMDM Balik Untung, [Liabilitas] Melonjak 56% dalam 9 Bulan",
  "deck": "Laba bersih SMDM berbalik positif pada sembilan bulan pertama 2026, tapi total liabilitas naik 56 persen dipicu lonjakan uang muka pembeli properti.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMDM",
   "properti",
   "laporan keuangan",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030122033-64521-0/FinancialStatement-2026-III-SMDM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "powr-laba-melonjak-24-jadi-us-70-9-juta-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "POWR: laba [melonjak] 24% jadi US$70,9 juta di kuartal III",
  "deck": "Cikarang Listrindo (POWR) membukukan laba bersih US$70,9 juta pada sembilan bulan pertama 2026, naik 24 persen dibanding tahun lalu, didorong turunnya beban bunga.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POWR",
   "Cikarang Listrindo",
   "laba bersih",
   "laporan keuangan kuartal III"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030122010-65409-0/FinancialStatement-2026-III-POWR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "duti-laba-bersih-melonjak-149-jadi-rp482-8-miliar",
  "category": "Aksi Korporasi",
  "title": "DUTI: Laba Bersih [Melonjak] 149% jadi Rp482,8 Miliar",
  "deck": "Laba bersih Duta Pertiwi melonjak 149 persen menjadi Rp482,8 miliar pada sembilan bulan pertama 2026, didorong pendapatan naik 26 persen dan diiringi pembagian dividen Rp1,09 triliun.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DUTI",
   "Duta Pertiwi",
   "laporan keuangan",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030121727-64519-0/FinancialStatement-2026-III-DUTI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fmii-rugi-rp1-86-miliar-penjualan-anjlok-68-di-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "FMII Rugi Rp1,86 Miliar, [Penjualan] Anjlok 68% di 9 Bulan 2026",
  "deck": "Fortune Mate Indonesia (FMII) berbalik rugi Rp1,86 miliar pada sembilan bulan 2026 dari laba Rp15,4 miliar setahun sebelumnya, seiring penjualan yang turun hampir 68 persen.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FMII",
   "properti",
   "laporan keuangan",
   "rugi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030121507-64934-0/FinancialStatement-2026-III-FMII.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bsde-laba-bersih-turun-38-ke-rp844-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "BSDE: Laba Bersih [Turun] 38% ke Rp844 Miliar di Kuartal III",
  "deck": "Laba bersih BSDE anjlok 38 persen menjadi Rp844,7 miliar pada sembilan bulan pertama 2026, seiring pendapatan yang turun dan beban bunga yang membengkak.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSDE",
   "laporan keuangan",
   "properti",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030121720-64522-0/FinancialStatement-2026-III-BSDE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dyan-laba-bersih-pemegang-saham-turun-23-jadi-rp38-9-miliar",
  "category": "Aksi Korporasi",
  "title": "DYAN: Laba Bersih Pemegang Saham [Turun] 23% jadi Rp38,9 Miliar",
  "deck": "Laba Dyandra Media naik tipis jadi Rp39,51 miliar pada sembilan bulan 2026, tapi laba untuk pemegang saham utama turun karena untung pelepasan anak usaha di 2025 tak terulang tahun ini.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DYAN",
   "Dyandra Media",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030121330-65326-0/FinancialStatement-2026-III-DYAN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-cetak-rugi-us-35-4-juta-menyempit-dari-tahun-lalu",
  "category": "Aksi Korporasi",
  "title": "TOBA Cetak Rugi US$35,4 Juta, [Menyempit] dari Tahun Lalu",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan rugi bersih TOBA menyempit ke US$35,4 juta, tapi penyebabnya hilangnya rugi pelepasan anak usaha tahun lalu, bukan perbaikan bisnis.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "TBS Energi Utama",
   "laporan keuangan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030120111-65066-0/FinancialStatement-2026-III-TOBA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aces-catat-laba-bersih-naik-28-jadi-rp612-miliar",
  "category": "Aksi Korporasi",
  "title": "ACES Catat [Laba] Bersih Naik 28% Jadi Rp612 Miliar",
  "deck": "Laba bersih ACES melonjak 28,5 persen ke Rp612,4 miliar pada kuartal III 2026, tapi arus kas dari aktivitas operasi justru anjlok 81,3 persen.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACES",
   "laporan keuangan",
   "ritel",
   "Kawan Lama Group"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030115227-64515-0/FinancialStatement-2026-III-ACES.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-ke-rp2-546-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] ke Rp2.546.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp13.000 menjadi Rp2.546.000 per gram, sementara harga buyback juga melemah ke Rp2.341.000 per gram.",
  "date": "30 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-ke-rp2-546-000-per-gram.jpg",
  "imageV": "mvuivzs2",
  "tags": [
   "emas",
   "harga emas antam",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475731-harga-emas-antam-hari-ini-30-oktober-2026-turun-jadi-rp2546000-per-gram-saatnya-borong"
 },
 {
  "slug": "pzza-caplok-dua-bisnis-bakeri-laba-bersih-naik-jadi-rp17-1-m",
  "category": "Aksi Korporasi",
  "title": "PZZA [Caplok] Dua Bisnis Bakeri, Laba Bersih Naik Jadi Rp17,1 M",
  "deck": "Sarimelati Kencana (PZZA) melaporkan keuangan sembilan bulan 2026 sekaligus mengungkap akuisisi mayoritas saham dua perusahaan bakeri di Jakarta.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PZZA",
   "Pizza Hut Indonesia",
   "laporan keuangan",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030095801-65376-0/FinancialStatement-2026-III-PZZA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jrpt-cetak-laba-rp1-03-triliun-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "JRPT Cetak [Laba] Rp1,03 Triliun per September 2026",
  "deck": "Laba tahun berjalan JRPT naik 12,3 persen menjadi Rp1,03 triliun pada sembilan bulan pertama 2026, ditopang kenaikan pendapatan usaha dan penurunan total utang.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JRPT",
   "laporan keuangan",
   "properti",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030095817-65349-0/FinancialStatement-2026-III-JRPT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bird-laba-kuartal-iii-turun-2-9-pendapatan-naik-10-9",
  "category": "Aksi Korporasi",
  "title": "BIRD: Laba Kuartal III [Turun] 2,9%, Pendapatan Naik 10,9%",
  "deck": "Blue Bird mencatat pendapatan 9 bulan Rp4,57 triliun, naik dari tahun lalu, tapi laba bersih dan laba per saham turun karena beban bunga melonjak dan kas menyusut tajam.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIRD",
   "Blue Bird",
   "laporan keuangan interim",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030095935-64678-0/FinancialStatement-2026-III-BIRD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-panggil-rupslb-23-november-agenda-stock-split-1-5",
  "category": "Aksi Korporasi",
  "title": "PRDA Panggil RUPSLB 23 November, Agenda [Stock Split] 1:5",
  "deck": "Prodia Widyahusada mengundang pemegang saham ke RUPSLB 23 November 2026 untuk menyetujui pemecahan saham rasio 1:5, nominal turun dari Rp100 menjadi Rp20 per saham.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "RUPSLB",
   "stock split",
   "Prodia Widyahusada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e0de553fdd_725cd62c1f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "moli-laba-9-bulan-melonjak-94-laba-per-saham-naik-ke-rp33-35",
  "category": "Aksi Korporasi",
  "title": "MOLI: Laba 9 Bulan Melonjak 94%, [Laba per Saham] Naik ke Rp33,35",
  "deck": "Laba bersih MOLI naik 94 persen jadi Rp108,3 miliar dalam sembilan bulan 2026, ditopang margin kotor yang menebal, meski utang bank jangka pendek melonjak untuk uang muka bahan baku.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MOLI",
   "laporan keuangan",
   "laba bersih",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030095709-65116-0/FinancialStatement-2026-III-MOLI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tfco-produksi-terhenti-dua-bulan-usai-mesin-rusak",
  "category": "Aksi Korporasi",
  "title": "TFCO: Produksi Terhenti [Dua Bulan] Usai Mesin Rusak",
  "deck": "Mesin produksi TFCO rusak dan menghentikan produksi dua bulan pada Agustus-September 2026, menekan laba usaha dan membalik arus kas operasi jadi negatif.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFCO",
   "laporan keuangan",
   "tekstil",
   "gangguan produksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030095551-65374-0/FinancialStatement-2026-III-TFCO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smil-catat-laba-rp84-57-miliar-kas-susut-48",
  "category": "Aksi Korporasi",
  "title": "SMIL Catat Laba Rp84,57 Miliar, Kas [Susut] 48%",
  "deck": "Laba bersih SMIL naik 8,5 persen jadi Rp84,57 miliar pada sembilan bulan 2026, meski kas menyusut hampir separuh akibat belanja modal dan persediaan forklift.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMIL",
   "laporan keuangan",
   "laba kuartal III 2026",
   "forklift"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030095227-65470-0/FinancialStatement-2026-III-SMIL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inds-laba-turun-3-5-meski-penjualan-naik-15-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "INDS: Laba [Turun] 3,5% meski Penjualan Naik 15% di Kuartal III",
  "deck": "Indospring membukukan penjualan neto Rp2,84 triliun pada sembilan bulan 2026, naik 15,3 persen, namun laba bersih turun 3,5 persen menjadi Rp68,2 miliar akibat kenaikan biaya dan beban bunga.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDS",
   "Indospring",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030094520-65534-0/FinancialStatement-2026-III-INDS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dsng-laba-bersih-naik-9-8-jadi-rp1-44-triliun-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "DSNG: Laba [Bersih] Naik 9,8% Jadi Rp1,44 Triliun di Kuartal III",
  "deck": "Laba bersih DSNG tumbuh 9,8% menjadi Rp1,44 triliun pada sembilan bulan pertama 2026, didukung penurunan beban bunga dan pelunasan utang bank jangka panjang.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSNG",
   "laba bersih",
   "laporan keuangan",
   "kelapa sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030093453-64797-0/FinancialStatement-2026-III-DSNG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hais-laba-bersih-longsor-70-utang-naik-23",
  "category": "Aksi Korporasi",
  "title": "HAIS: Laba Bersih [Longsor] 70%, Utang Naik 23%",
  "deck": "Laba bersih HAIS turun dari Rp68,6 miliar menjadi Rp20,4 miliar pada sembilan bulan 2026, sementara liabilitas melonjak 23 persen akibat tambahan pinjaman bank.",
  "date": "30 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAIS",
   "laba bersih",
   "utang",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261030094727-65395-0/FinancialStatement-2026-III-HAIS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beras-sphp-dioplos-mentan-amran-usul-hukuman-mati",
  "category": "Bisnis",
  "title": "Beras SPHP [Dioplos], Mentan Amran Usul Hukuman Mati",
  "deck": "Menteri Pertanian Andi Amran Sulaiman geram atas praktik pengoplosan beras subsidi SPHP jadi beras premium, menyebut pelakunya pantas dihukum mati jika memungkinkan.",
  "date": "30 Oktober 2026",
  "image": "assets/img/beras-sphp-dioplos-mentan-amran-usul-hukuman-mati.jpg",
  "imageV": "mvuiw06s",
  "tags": [
   "beras",
   "SPHP",
   "Bulog",
   "pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475706-mentan-amran-murka-sebut-pelaku-oplos-beras-sphp-pantas-dihukum-mati"
 },
 {
  "slug": "hekrafnas-2026-transaksi-umkm-tembus-rp6-miliar-sehari",
  "category": "UMKM",
  "title": "Hekrafnas 2026: Transaksi [UMKM] Tembus Rp6 Miliar Sehari",
  "deck": "Perayaan Hari Ekonomi Kreatif Nasional 2026 melibatkan 680 UMKM di enam provinsi dengan transaksi harian sekitar Rp6 miliar, dari Papua hingga Sumatera Utara.",
  "date": "30 Oktober 2026",
  "image": "assets/img/hekrafnas-2026-transaksi-umkm-tembus-rp6-miliar-sehari.jpg",
  "imageV": "mvuiw0l8",
  "tags": [
   "ekonomi kreatif",
   "umkm",
   "gekrafs",
   "papua"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475710-hari-ekonomi-kreatif-nasional-2026-catat-perputaran-transaksi-capai-rp6-miliar-dalam-sehari-ratusan-umkm-terlibat"
 },
 {
  "slug": "perumnas-btn-luncurkan-nabung-dp-untuk-rumah-pemuda",
  "category": "Perbankan",
  "title": "Perumnas-BTN Luncurkan [Nabung DP] untuk Rumah Pemuda",
  "deck": "Perumnas dan BTN meluncurkan program tabungan uang muka rumah Nabung DP lewat Festival Hunian Pemuda di Jakarta, menyasar generasi muda calon pembeli rumah pertama.",
  "date": "30 Oktober 2026",
  "image": "assets/img/perumnas-btn-luncurkan-nabung-dp-untuk-rumah-pemuda.jpg",
  "imageV": "mvuiw165",
  "tags": [
   "perumnas",
   "btn",
   "nabung dp",
   "hunian pemuda"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475707-momentum-sumpah-pemuda-generasi-muda-tanah-air-didorong-miliki-hunian-lewat-inovasi-pembiayaan"
 },
 {
  "slug": "hashim-warga-17-tahun-dapat-rekening-bank-gratis",
  "category": "Makroekonomi",
  "title": "Hashim: Warga 17 Tahun Dapat [Rekening Bank] Gratis",
  "deck": "Hashim Djojohadikusumo mengungkap pemerintah akan memberi rekening bank gratis bagi warga usia 17 tahun ke atas agar bansos bisa ditransfer langsung tanpa perantara.",
  "date": "29 Oktober 2026",
  "image": "assets/img/hashim-warga-17-tahun-dapat-rekening-bank-gratis.jpg",
  "imageV": "mvuiw1su",
  "tags": [
   "bansos",
   "rekening bank",
   "kadin indonesia",
   "hashim djojohadikusumo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475696-hashim-ungkap-pemerintah-berencana-beri-rekening-bank-gratis-untuk-warga-usia-17-tahun-ke-atas-bansos-langsung-ditransfer"
 },
 {
  "slug": "djp-sulselbartra-ganjar-penghargaan-wajib-pajak-patuh",
  "category": "Makroekonomi",
  "title": "DJP Sulselbartra [Ganjar] Penghargaan Wajib Pajak Patuh",
  "deck": "Kanwil DJP Sulselbartra memberi penghargaan kepatuhan pajak kepada perusahaan tambang nikel PT Ceria Nugraha Indotama dalam ajang Tax Gathering 2026.",
  "date": "29 Oktober 2026",
  "image": "assets/img/djp-sulselbartra-ganjar-penghargaan-wajib-pajak-patuh.jpg",
  "imageV": "mvuiw26m",
  "tags": [
   "pajak",
   "DJP",
   "pertambangan nikel",
   "Sulawesi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475686-perusahaan-tergolong-patuh-penuhi-pembayaran-pajak-kanwil-djp-sulselbartra-akan-ganjar-penghargaan"
 },
 {
  "slug": "transaksi-qris-tembus-15-miliar-per-juli-2026",
  "category": "Perbankan",
  "title": "Transaksi [QRIS] Tembus 15 Miliar per Juli 2026",
  "deck": "Bank Indonesia mencatat 67,51 juta pengguna QRIS aktif dan 45,46 juta pedagang yang menerimanya, seiring makin banyak warung dan minimarket melayani pembayaran lewat aplikasi seperti GoPay.",
  "date": "29 Oktober 2026",
  "image": "assets/img/transaksi-qris-tembus-15-miliar-per-juli-2026.jpg",
  "imageV": "mvuiw2kq",
  "tags": [
   "QRIS",
   "GoPay",
   "pembayaran digital",
   "Bank Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475673-tinggal-scan-qris-di-mana-aja-belanja-kebutuhan-harian-sekarang-makin-sat-set-pakai-gopay"
 },
 {
  "slug": "investasi-ri-tembus-rp3-923-t-di-era-presiden-prabowo",
  "category": "Makroekonomi",
  "title": "Investasi RI [Tembus] Rp3.923 T di Era Presiden Prabowo",
  "deck": "Rosan Roeslani melaporkan realisasi investasi RI tembus Rp3.923,2 triliun dalam dua tahun pertama Presiden Prabowo, dengan hilirisasi nikel di luar Jawa jadi penyumbang utama.",
  "date": "29 Oktober 2026",
  "image": "assets/img/investasi-ri-tembus-rp3-923-t-di-era-presiden-prabowo.jpg",
  "imageV": "mvuiw2z4",
  "tags": [
   "investasi",
   "hilirisasi",
   "bkpm",
   "nikel"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475661-dua-tahun-prabowo-rosan-roeslani-hilirisasi-luar-jawa-tembus-78-persen-investasi-tembus-hampir-rp4000-triliun"
 },
 {
  "slug": "hashim-rp10-000-triliun-ekonomi-ri-tak-masuk-pdb",
  "category": "Makroekonomi",
  "title": "Hashim: Rp10.000 Triliun Ekonomi RI Tak Masuk [PDB]",
  "deck": "Hashim Djojohadikusumo menyebut Rp10.000 triliun transaksi ekonomi RI tak tercatat, sementara penerimaan negara cuma 12 persen dari PDB, di bawah Kamboja, India, dan Afrika.",
  "date": "29 Oktober 2026",
  "image": "assets/img/hashim-rp10-000-triliun-ekonomi-ri-tak-masuk-pdb.jpg",
  "imageV": "mvuiw3lj",
  "tags": [
   "kadin",
   "hashim djojohadikusumo",
   "pdb",
   "apbd"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475659-hashim-sebut-ekonomi-ri-10000-triliun-tak-tercatat-penerimaan-negara-cuma-12-persen-di-bawah-kamboja"
 },
 {
  "slug": "pnm-sabet-juara-grand-genba-champion-bri-group",
  "category": "BUMN",
  "title": "PNM Sabet [Juara] Grand Genba Champion BRI Group",
  "deck": "PNM meraih peringkat pertama di ajang Grand Genba Champion BRI Group berkat aplikasi Diary AO yang merapikan kerja harian petugas lapangan pembiayaan ultra mikro.",
  "date": "29 Oktober 2026",
  "image": "assets/img/pnm-sabet-juara-grand-genba-champion-bri-group.jpg",
  "imageV": "mvtjbeiq",
  "tags": [
   "PNM",
   "BRI Group",
   "ultra mikro",
   "Diary AO"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475642-pnm-raih-juara-1-grand-genba-champion-lewat-inovasi-pelayanan-perluas-manfaat-bagi-nasabah"
 },
 {
  "slug": "investasi-ri-tembus-rp3-923-triliun-serap-5-4-juta-pekerja",
  "category": "Makroekonomi",
  "title": "Investasi RI Tembus Rp3.923 Triliun, Serap [5,4] Juta Pekerja",
  "deck": "Realisasi investasi dua tahun pemerintahan Presiden Prabowo Subianto mencapai Rp3.923,2 triliun dan menyerap 5,48 juta tenaga kerja hingga triwulan III 2026.",
  "date": "29 Oktober 2026",
  "image": "assets/img/investasi-ri-tembus-rp3-923-triliun-serap-5-4-juta-pekerja.jpg",
  "imageV": "mvtjbey8",
  "tags": [
   "investasi",
   "BKPM",
   "hilirisasi",
   "lapangan kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475641-dua-tahun-prabowo-memimpin-investasi-indonesia-capai-rp3923-triliun-dan-serap-54-juta-pekerja"
 },
 {
  "slug": "vern-laba-bersih-longsor-88-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "VERN: Laba Bersih [Longsor] 88% di Kuartal III 2026",
  "deck": "Penjualan VERN turun 69 persen dan laba bersih kuartal III 2026 anjlok 88 persen menjadi Rp1,05 miliar dibanding periode sama tahun lalu.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VERN",
   "laporan keuangan",
   "laba bersih",
   "industri film"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029183142-65207-0/FinancialStatement-2026-III-VERN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdmu-cetak-laba-ekuitas-naik-4x-usai-konversi-utang-jadi-modal",
  "category": "Aksi Korporasi",
  "title": "SDMU Cetak Laba, Ekuitas Naik 4x Usai [Konversi] Utang Jadi Modal",
  "deck": "Sidomulyo Selaras balik untung pada kuartal III 2026 setelah mengonversi utang pemegang saham senilai puluhan miliar rupiah menjadi modal perusahaan.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDMU",
   "Sidomulyo Selaras",
   "laporan keuangan",
   "konversi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029182313-64481-0/FinancialStatement-2026-III-SDMU.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trim-laba-9-bulan-naik-31-jadi-rp488-66-miliar",
  "category": "Aksi Korporasi",
  "title": "TRIM: Laba 9 Bulan [Naik] 31% jadi Rp488,66 Miliar",
  "deck": "Trimegah Sekuritas membukukan laba bersih Rp488,66 miliar dalam sembilan bulan 2026, naik 31 persen, sementara total aset melonjak 36 persen akibat pembelian portofolio obligasi dan tambahan pinjaman bank.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIM",
   "Trimegah Sekuritas",
   "laporan keuangan",
   "sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029181143-64844-0/FinancialStatement-2026-III-TRIM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tbms-cetak-laba-naik-42-arus-kas-operasi-minus-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "TBMS Cetak Laba Naik 42%, [Arus Kas] Operasi Minus Kuartal III",
  "deck": "Laba bersih TBMS naik 42 persen jadi US$7,4 juta di sembilan bulan 2026, tapi arus kas operasi berbalik negatif US$18,8 juta.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TBMS",
   "laporan keuangan",
   "arus kas",
   "kawat tembaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029181705-65124-0/FinancialStatement-2026-III-TBMS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jast-jelaskan-liabilitas-naik-21-49-induk-rugi-rp399-juta",
  "category": "Aksi Korporasi",
  "title": "JAST Jelaskan Liabilitas Naik 21,49%, Induk [Rugi] Rp399 Juta",
  "deck": "Liabilitas Jasnita Telekomindo naik 21,49% dalam sembilan bulan akibat utang usaha anak usaha CCX Platform, sementara bagian laba untuk pemegang saham induk berbalik rugi Rp398,8 juta.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAST",
   "liabilitas",
   "laporan keuangan kuartalan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029181311-64575-0/FinancialStatement-2026-III-JAST.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hero-catat-laba-rp91-3-miliar-kas-turun-tajam-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "HERO Catat [Laba] Rp91,3 Miliar, Kas Turun Tajam di Kuartal III",
  "deck": "Pendapatan sembilan bulan 2026 naik 15,8 persen dan laba bersih naik ke Rp91,3 miliar, tapi kas perusahaan turun 45 persen menjadi Rp25,7 miliar.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HERO",
   "laporan keuangan",
   "ritel",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029180930-64645-0/FinancialStatement-2026-III-HERO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tmpo-rugi-melebar-kas-tersisa-rp5-8-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "TMPO: [Rugi] Melebar, Kas Tersisa Rp5,8 Miliar di Kuartal III",
  "deck": "Pendapatan TMPO turun 5 persen dan kas perusahaan susut dari Rp25,2 miliar menjadi Rp5,8 miliar dalam sembilan bulan, sementara rugi bersih melebar ke Rp6,1 miliar.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "laporan keuangan",
   "Tempo Inti Media",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029180435-65035-0/FinancialStatement-2026-III-TMPO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-beli-anak-usaha-energi-rp2-miliar-dari-komisaris-utama",
  "category": "Aksi Korporasi",
  "title": "MKNT Beli Anak Usaha Energi [Rp2 Miliar] dari Komisaris Utama",
  "deck": "RUM, anak usaha MKNT, membeli 100% saham ALE dan RSA dari Komisaris Utama Handoyo Setiawan dan mitranya senilai total sekitar Rp2 miliar.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "akuisisi",
   "transaksi afiliasi",
   "energi terbarukan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3e3bd442c7_f73f56f15f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "daya-laba-watsons-naik-65-ke-rp85-8-miliar-di-9-bulan",
  "category": "Aksi Korporasi",
  "title": "DAYA: Laba Watsons Naik 65% ke [Rp85,8 Miliar] di 9 Bulan",
  "deck": "Laporan keuangan interim kuartal III 2026 Duta Intidaya (DAYA) menunjukkan laba bersih naik 65 persen dan ekuitas membesar, meski kas perusahaan menyusut hampir 70 persen.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAYA",
   "Watsons",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029175021-64850-0/FinancialStatement-2026-III-DAYA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hashim-goreng-saham-bisa-bikin-rupiah-tembus-rp22-000",
  "category": "Pasar Modal",
  "title": "Hashim: Goreng Saham Bisa Bikin Rupiah [Tembus] Rp22.000",
  "deck": "Ketua Dewan Penasihat Kadin Hashim Djojohadikusumo memperingatkan praktik goreng saham bisa membuat MSCI men-downgrade bursa RI dan rupiah melemah jika investor asing hengkang.",
  "date": "29 Oktober 2026",
  "image": "assets/img/hashim-goreng-saham-bisa-bikin-rupiah-tembus-rp22-000.jpg",
  "imageV": "mvtjbfdd",
  "tags": [
   "goreng saham",
   "rupiah",
   "Kadin",
   "MSCI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475636-hashim-soroti-praktik-goreng-saham-rupiah-bisa-tembus-rp22000-jika-asing-cabut-dari-bursa"
 },
 {
  "slug": "kadin-ekonomi-ri-tumbuh-5-1-persen-tengah-gejolak-global",
  "category": "Makroekonomi",
  "title": "Kadin: Ekonomi RI [Tumbuh] 5,1 Persen Tengah Gejolak Global",
  "deck": "Ketua Umum Kadin Anindya Novyan Bakrie menyebut fundamental ekonomi Indonesia tetap kuat meski pasar modal tertekan di tengah ketidakpastian global.",
  "date": "29 Oktober 2026",
  "image": "assets/img/kadin-ekonomi-ri-tumbuh-5-1-persen-tengah-gejolak-global.jpg",
  "imageV": "mvtjbfs1",
  "tags": [
   "kadin",
   "anindya novyan bakrie",
   "pertumbuhan ekonomi",
   "pasar modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475634-ketua-umum-kadin-indonesia-fundamental-ekonomi-ri-kuat-tumbuh-51-persen-di-tengah-gejolak-global"
 },
 {
  "slug": "pupuk-indonesia-rinci-26-634-titik-serah-jelang-musim-tanam",
  "category": "BUMN",
  "title": "Pupuk Indonesia Rinci [26.634] Titik Serah Jelang Musim Tanam",
  "deck": "Menjelang musim tanam, Pupuk Indonesia memaparkan rincian jaringan gudang, pelabuhan, dan rute distribusi yang menyalurkan pupuk bersubsidi ke puluhan ribu titik di seluruh Indonesia.",
  "date": "29 Oktober 2026",
  "image": "assets/img/pupuk-indonesia-rinci-26-634-titik-serah-jelang-musim-tanam.jpg",
  "imageV": "mvtdrq2q",
  "tags": [
   "Pupuk Indonesia",
   "Musim Tanam",
   "Distribusi Pupuk",
   "BUMN"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/899/fasilitas-distribusi-pupuk-indonesia-dukung-pemenuhan-kebutuhan-pupuk-subsidi-saat-musim-tanam",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "kadin-bentuk-delapan-kelompok-kerja-di-rapimnas-2026",
  "category": "Bisnis",
  "title": "Kadin Bentuk [Delapan] Kelompok Kerja di Rapimnas 2026",
  "deck": "Kadin Indonesia meluncurkan delapan kelompok kerja dalam Rapimnas 2026, dari penguatan UMKM hingga kedaulatan pangan, dengan evaluasi setiap tiga bulan.",
  "date": "29 Oktober 2026",
  "image": "assets/img/kadin-bentuk-delapan-kelompok-kerja-di-rapimnas-2026.jpg",
  "imageV": "mvtdrqn7",
  "tags": [
   "kadin",
   "anindya bakrie",
   "rapimnas 2026",
   "umkm"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475620-rapimnas-kadin-2026-anindya-bakrie-luncurkan-delapan-kelompok-kerja-pelaku-usaha-naik-kelas-kedaulatan-ketahanan-pangan"
 },
 {
  "slug": "ptsn-laba-kuartal-iii-susut-40-meski-pendapatan-naik-56",
  "category": "Aksi Korporasi",
  "title": "PTSN: Laba Kuartal III Susut 40% Meski [Pendapatan] Naik 56%",
  "deck": "Sat Nusapersada mencatat pendapatan 9 bulan naik ke US$277,6 juta, tapi laba bersih turun ke US$6,18 juta karena margin tergerus dan arus kas operasi menyusut.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTSN",
   "laporan keuangan",
   "laba bersih",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029153120-65322-0/FinancialStatement-2026-III-PTSN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadin-sebut-ri-masih-bright-spot-ekonomi-dunia",
  "category": "Makroekonomi",
  "title": "Kadin Sebut RI Masih '[Bright Spot]' Ekonomi Dunia",
  "deck": "Ketua Umum Kadin Anindya Novyan Bakrie memakai data IMF dan perbandingan pertumbuhan ekonomi untuk menegaskan Indonesia masih tangguh di tengah ketidakpastian global.",
  "date": "29 Oktober 2026",
  "image": "assets/img/kadin-sebut-ri-masih-bright-spot-ekonomi-dunia.jpg",
  "imageV": "mvtdrr16",
  "tags": [
   "kadin",
   "anindya bakrie",
   "imf",
   "ekonomi indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475612-anindya-bakrie-kutip-data-imf-indonesia-justru-jadi-bright-spot-di-tengah-ketidakpastian-global"
 },
 {
  "slug": "mtwi-laba-9-bulan-ambruk-89-saat-beban-klaim-melonjak",
  "category": "Aksi Korporasi",
  "title": "MTWI: Laba 9 Bulan Ambruk 89% Saat Beban [Klaim] Melonjak",
  "deck": "Laba bersih MTWI turun dari Rp76,23 miliar menjadi Rp8,53 miliar dalam sembilan bulan 2026 akibat beban klaim yang melonjak tajam.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTWI",
   "laporan keuangan",
   "asuransi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029151607-65288-0/FinancialStatement-2026-III-MTWI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-jelaskan-ke-bei-rencana-rights-issue-170-juta-saham-hmetd",
  "category": "Aksi Korporasi",
  "title": "PTRO Jelaskan ke BEI Rencana Rights Issue 170 Juta Saham [HMETD]",
  "deck": "Petrosea menjawab permintaan penjelasan BEI soal rencana rights issue, memastikan dilusi maksimal 1,66% dengan pembeli siaga PT Kreasi Jaya Persada.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "Petrosea",
   "rights issue",
   "HMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2928a4f32c_7d411e0f0e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "miti-catat-rugi-rp1-45-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MITI Catat [Rugi] Rp1,45 Miliar di Kuartal III 2026",
  "deck": "Laba bersih Mitra Investindo anjlok dari untung Rp7,5 miliar jadi rugi Rp1,45 miliar pada sembilan bulan pertama 2026, seiring pendapatan turun 11 persen.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MITI",
   "Mitra Investindo",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029151827-65040-0/FinancialStatement-2026-III-MITI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ypas-berbalik-untung-laba-bersih-rp31-6-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "YPAS Berbalik Untung, [Laba] Bersih Rp31,6 Miliar di Kuartal III",
  "deck": "Yanaprima Hastapersada (YPAS) mencatat laba bersih Rp31,64 miliar pada sembilan bulan 2026, berbalik dari rugi Rp747,55 juta tahun sebelumnya, didorong lonjakan penjualan dan margin.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YPAS",
   "laporan keuangan",
   "kemasan plastik",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029150838-64815-0/FinancialStatement-2026-III-YPAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gema-rugi-rp13-97-miliar-di-kuartal-iii-2026-eps-negatif",
  "category": "Aksi Korporasi",
  "title": "GEMA [Rugi] Rp13,97 Miliar di Kuartal III 2026, EPS Negatif",
  "deck": "GEMA membukukan rugi bersih Rp13,97 miliar pada 9 bulan pertama 2026, berbalik dari laba Rp5,29 miliar tahun sebelumnya, akibat beban lain-lain dan bunga yang melonjak.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMA",
   "laporan keuangan",
   "rugi bersih",
   "emiten furnitur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029150818-65029-0/FinancialStatement-2026-III-GEMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wiim-laba-bersih-melonjak-74-jadi-rp496-miliar-di-q3-2026",
  "category": "Aksi Korporasi",
  "title": "WIIM: Laba Bersih [Melonjak] 74% jadi Rp496 Miliar di Q3 2026",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan laba bersih WIIM naik 74 persen menjadi Rp496,22 miliar, didorong efisiensi beban usaha dan turunnya beban bunga.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIIM",
   "laporan keuangan",
   "kinerja emiten",
   "industri rokok"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029150334-65247-0/FinancialStatement-2026-III-WIIM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdsi-liabilitas-melonjak-34-5-imbas-pinjaman-bank-baru",
  "category": "Aksi Korporasi",
  "title": "KDSI: Liabilitas Melonjak 34,5% Imbas [Pinjaman] Bank Baru",
  "deck": "Total liabilitas KDSI naik 34,5 persen jadi Rp561,3 miliar dalam sembilan bulan, didorong pembelian bahan baku dan pinjaman bank baru.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDSI",
   "laporan keuangan",
   "liabilitas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029131557-64511-0/FinancialStatement-2026-III-KDSI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "talf-cetak-laba-melonjak-74-persen-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "TALF Cetak Laba [Melonjak] 74 Persen di Kuartal III 2026",
  "deck": "Laba bersih TALF naik 74 persen jadi Rp52,2 miliar dalam sembilan bulan 2026 seiring penjualan yang tumbuh dan beban bunga yang turun, sementara dividen tunai naik tiga kali lipat.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TALF",
   "laporan keuangan",
   "kemasan",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029131114-65259-0/FinancialStatement-2026-III-TALF.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "as-sumbang-surplus-dagang-ri-us-12-47-miliar-hingga-agustus",
  "category": "Global",
  "title": "AS Sumbang [Surplus] Dagang RI US$12,47 Miliar hingga Agustus",
  "deck": "Mendag Budi Santoso bertemu petinggi US-ABC membahas kerja sama dagang RI-AS, yang hingga Agustus 2026 masih menyumbang surplus terbesar bagi neraca dagang Indonesia.",
  "date": "29 Oktober 2026",
  "image": "assets/img/as-sumbang-surplus-dagang-ri-us-12-47-miliar-hingga-agustus.jpg",
  "imageV": "mvt49sgg",
  "tags": [
   "perdagangan",
   "Indonesia-AS",
   "US-ABC",
   "ekspor impor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-ajak-dunia-usaha-as-perkuat-kerja-sama-dengan-indonesia",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "boss-bukukan-defisiensi-modal-rp189-miliar-di-lk-2023",
  "category": "Aksi Korporasi",
  "title": "BOSS Bukukan [Defisiensi] Modal Rp189 Miliar di LK 2023",
  "deck": "Laporan keuangan 2023 PT Borneo Olah Sarana Sukses Tbk (BOSS) yang baru terbit mencatat opini wajar dengan pengecualian, anak usaha tambang pailit, dan defisiensi modal Rp188,9 miliar.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "laporan keuangan",
   "opini audit",
   "pailit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202310/20261029123115-64945-0/FinancialStatement-2023-Tahunan-BOSS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kopi-laba-bersih-melonjak-174-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "KOPI: Laba Bersih [Melonjak] 174% di Kuartal III 2026",
  "deck": "Laba bersih Mitra Energi Persada naik dari Rp3,80 miliar menjadi Rp10,41 miliar pada sembilan bulan 2026, sementara total utang menyusut dan kas meningkat tajam.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOPI",
   "laporan keuangan",
   "laba bersih",
   "energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029122559-64684-0/FinancialStatement-2026-III-KOPI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csra-laba-bersih-melonjak-43-persen-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "CSRA: Laba Bersih [Melonjak] 43 Persen di Sembilan Bulan 2026",
  "deck": "Laporan keuangan interim kuartal III 2026 Cisadane Sawit Raya menunjukkan penjualan naik 55 persen dan utang bank turun, sementara utang ke pihak berelasi melompat Rp180 miliar.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSRA",
   "laporan keuangan",
   "sawit",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029121554-64938-0/FinancialStatement-2026-III-CSRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptba-laba-bersih-melonjak-215-jadi-rp4-42-triliun-di-9m2026",
  "category": "Aksi Korporasi",
  "title": "PTBA: Laba Bersih [Melonjak] 215% Jadi Rp4,42 Triliun di 9M2026",
  "deck": "Laporan keuangan interim kuartal III 2026 PTBA menunjukkan laba bersih naik dari Rp1,40 triliun jadi Rp4,42 triliun, didorong membaiknya margin usaha batu bara.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTBA",
   "laba bersih",
   "laporan keuangan",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029121443-65121-0/FinancialStatement-2026-III-PTBA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lead-catat-rugi-us-2-9-juta-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "LEAD Catat [Rugi] US$2,9 Juta di Kuartal III 2026",
  "deck": "Pendapatan Logindo turun 18 persen jadi US$24,1 juta pada sembilan bulan 2026, laba berbalik jadi rugi US$2,9 juta, meski utang perusahaan menyusut tajam.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LEAD",
   "laporan keuangan",
   "rugi bersih",
   "Logindo Samudramakmur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029121155-64818-0/FinancialStatement-2026-III-LEAD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cars-catat-laba-rp164-8-miliar-di-kuartal-iii-2026-naik-13-7",
  "category": "Aksi Korporasi",
  "title": "CARS Catat [Laba] Rp164,8 Miliar di Kuartal III 2026, Naik 13,7%",
  "deck": "Laba bersih CARS naik 13,7 persen menjadi Rp164,8 miliar pada sembilan bulan pertama 2026, didorong penjualan otomotif dan bunga pinjaman yang lebih ringan.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CARS",
   "laporan keuangan",
   "laba bersih",
   "otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029120850-64336-0/FinancialStatement-2026-III-CARS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-catat-laba-bersih-tumbuh-16-4-ke-rp1-38-triliun",
  "category": "Aksi Korporasi",
  "title": "AVIA Catat Laba Bersih [Tumbuh] 16,4% ke Rp1,38 Triliun",
  "deck": "Penjualan neto AVIA naik 16,7 persen jadi Rp6,92 triliun dalam sembilan bulan 2026, laba bersih naik 16,4 persen, sementara liabilitas naik 28,24 persen karena utang usaha dan beban pemasaran.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "laporan keuangan",
   "laba bersih",
   "industri cat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029120237-64922-0/FinancialStatement-2026-III-AVIA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-siapkan-izin-terpusat-untuk-hulu-migas",
  "category": "Energi",
  "title": "Bahlil Siapkan Izin [Terpusat] untuk Hulu Migas",
  "deck": "Pemerintah mengusulkan pemusatan izin hulu migas lewat Badan Usaha Khusus Migas dalam RUU Migas, agar kontraktor tak lagi bolak-balik mengurus izin ke berbagai kementerian.",
  "date": "29 Oktober 2026",
  "image": "assets/img/bahlil-siapkan-izin-terpusat-untuk-hulu-migas.jpg",
  "imageV": "mvt49sxv",
  "tags": [
   "RUU Migas",
   "Bahlil Lahadalia",
   "BUK Migas",
   "Hulu Migas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475572-tak-perlu-lagi-ribet-urus-izin-bahlil-siapkan-terobosan-besar-untuk-industri-migas-ri"
 },
 {
  "slug": "suni-laba-bersih-turun-19-jadi-rp117-7-miliar-di-9m26",
  "category": "Aksi Korporasi",
  "title": "SUNI: Laba Bersih [Turun] 19% Jadi Rp117,7 Miliar di 9M26",
  "deck": "Penjualan dan laba bersih Sunindo Pratama (SUNI) turun dua digit pada sembilan bulan 2026, meski arus kas operasional dan ekuitas perusahaan justru menguat.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUNI",
   "laporan keuangan",
   "kinerja kuartalan",
   "pipa baja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029112938-65000-0/FinancialStatement-2026-III-SUNI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gtsi-pastikan-tak-ada-aksi-korporasi-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "GTSI Pastikan Tak Ada Aksi Korporasi di Balik [Volatilitas] Saham",
  "deck": "BEI meminta penjelasan GTSI atas volatilitas transaksi sahamnya. Perseroan menjawab tidak ada informasi material maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTSI",
   "volatilitas transaksi",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c6561a962d_f3e783c4e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-sola-anjlok-90-di-kuartal-iii-2026-kas-menipis",
  "category": "Aksi Korporasi",
  "title": "Laba [SOLA] Anjlok 90% di Kuartal III 2026, Kas Menipis",
  "deck": "Pendapatan Xolare RCR Energy turun 40 persen dan arus kas operasi berbalik negatif, meski total utang perusahaan ikut turun hampir 30 persen.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOLA",
   "laporan keuangan",
   "konstruksi",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029104948-64862-0/FinancialStatement-2026-III-SOLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "glob-laba-kuartal-iii-anjlok-96-ekuitas-masih-negatif",
  "category": "Aksi Korporasi",
  "title": "GLOB: [Laba] Kuartal III Anjlok 96%, Ekuitas Masih Negatif",
  "deck": "Laba GLOB turun 96% jadi Rp53 juta pada sembilan bulan 2026, dari Rp1,34 miliar setahun sebelumnya, sementara ekuitas perusahaan masih minus Rp1,2 triliun.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GLOB",
   "laporan keuangan",
   "ekuitas negatif",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029103751-65293-0/FinancialStatement-2026-III-GLOB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cdia-bukukan-pendapatan-us-122-juta-ebitda-naik-65",
  "category": "Aksi Korporasi",
  "title": "CDIA Bukukan Pendapatan US$122 Juta, [EBITDA] Naik 65%",
  "deck": "Pendapatan CDI tumbuh 16% dan EBITDA 65% secara tahunan pada 9M2026, didukung aset baru di segmen air, pelabuhan, dan logistik serta dividen interim US$10 juta.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CDIA",
   "Chandra Daya Investasi",
   "kinerja keuangan",
   "infrastruktur maritim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/050780058b_ccaf1844b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tifa-laba-bersih-turun-3-9-jadi-rp41-8-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "TIFA: Laba Bersih [Turun] 3,9% Jadi Rp41,8 Miliar di Kuartal III",
  "deck": "Laba bersih KDB Tifa Finance turun 3,9% jadi Rp41,78 miliar pada sembilan bulan 2026, sementara pinjaman yang ditarik perusahaan melonjak signifikan.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TIFA",
   "KDB Tifa Finance",
   "laporan keuangan",
   "pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029101801-64955-0/FinancialStatement-2026-III-TIFA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-kantongi-rp198-7-miliar-dari-rights-issue-laba-naik-24",
  "category": "Aksi Korporasi",
  "title": "CSIS Kantongi Rp198,7 Miliar dari [Rights Issue], Laba Naik 24%",
  "deck": "Kas CSIS melonjak hampir 19 kali lipat dalam sembilan bulan setelah perseroan menerima dana rights issue Rp198,7 miliar, sementara laba bersih naik 24 persen menjadi Rp30,6 miliar.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSIS",
   "rights issue",
   "laporan keuangan",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029101554-64781-0/FinancialStatement-2026-III-CSIS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-jadi-rp2-559-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Jadi Rp2.559.000 per Gram",
  "deck": "Harga emas batangan Antam turun Rp11.000 menjadi Rp2.559.000 per gram pada 29 Oktober 2026, sementara harga buyback ikut turun ke Rp2.354.000 per gram.",
  "date": "29 Oktober 2026",
  "image": "assets/img/harga-emas-antam-turun-jadi-rp2-559-000-per-gram.jpg",
  "imageV": "mvt49tk9",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475563-saatnya-beli-harga-emas-antam-hari-ini-29-oktober-2026-turun-jadi-rp2559000-per-gram"
 },
 {
  "slug": "bike-akui-akuisisi-pne-terafiliasi-dengan-direksi-sendiri",
  "category": "Aksi Korporasi",
  "title": "BIKE Akui Akuisisi PNE [Terafiliasi] dengan Direksi Sendiri",
  "deck": "BIKE mengoreksi lagi tanggapan ke Bursa soal akuisisi PNE, mengakui penjual sahamnya adalah direksi BIKE sendiri, bukan pihak independen seperti disebut sebelumnya.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "afiliasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a3f667d1b0_1c334cf599.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-siapkan-buyback-rp2-triliun-batasi-harga-rp3-000",
  "category": "Aksi Korporasi",
  "title": "TPIA Siapkan Buyback [Rp2 Triliun], Batasi Harga Rp3.000",
  "deck": "Chandra Asri mengalokasikan dana hingga Rp2 triliun untuk membeli kembali maksimal 1,84 persen sahamnya dengan harga tertinggi Rp3.000 per lembar, periode 29 Oktober 2026 hingga 28 Januari 2027.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "buyback",
   "Chandra Asri",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1b5bd0dbdd_bbeeb161cd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pcar-cetak-laba-rp6-1-miliar-penjualan-melonjak-123-persen",
  "category": "Aksi Korporasi",
  "title": "PCAR Cetak Laba Rp6,1 Miliar, Penjualan [Melonjak] 123 Persen",
  "deck": "Laporan keuangan interim kuartal III 2026 PCAR menunjukkan perusahaan berbalik untung setelah penjualan tumbuh dari Rp166,9 miliar menjadi Rp372,3 miliar dalam sembilan bulan.",
  "date": "29 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PCAR",
   "laporan keuangan",
   "kuartal III 2026",
   "emiten konsumer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261029071024-64836-0/FinancialStatement-2026-III-PCAR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mentan-amran-desak-polisi-bongkar-mafia-beras-sphp",
  "category": "Bisnis",
  "title": "Mentan Amran Desak Polisi Bongkar [Mafia] Beras SPHP",
  "deck": "Mentan Amran Sulaiman minta polisi bongkar tuntas jaringan mafia beras subsidi SPHP setelah temuan dugaan 600 ton beras dioplos jadi premium di Jakarta Timur.",
  "date": "29 Oktober 2026",
  "image": "assets/img/mentan-amran-desak-polisi-bongkar-mafia-beras-sphp.jpg",
  "imageV": "mvsn6s1n",
  "tags": [
   "beras",
   "mafia pangan",
   "amran sulaiman",
   "jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475534-skandal-beras-sphp-di-jakarta-timur-mentan-amran-memohon-polisi-sikat-habis-jaringan-mafia"
 },
 {
  "slug": "mentan-amran-oplos-beras-subsidi-itu-amoral",
  "category": "Bisnis",
  "title": "Mentan Amran: Oplos Beras Subsidi Itu [Amoral]",
  "deck": "Sidak di Jakarta Timur menemukan dugaan 600 ton beras subsidi SPHP dioplos jadi premium dan dijual Rp17.000 per kg, jauh dari harga resmi Rp12.500 per kg.",
  "date": "29 Oktober 2026",
  "image": "assets/img/mentan-amran-oplos-beras-subsidi-itu-amoral.jpg",
  "imageV": "mvsjvv9n",
  "tags": [
   "beras",
   "mafia pangan",
   "Amran Sulaiman",
   "Jakarta Timur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475533-temukan-beras-sphp-dioplos-jadi-premium-mentan-amran-ini-perbuatan-amoral-tak-ada-kemanusiaan"
 },
 {
  "slug": "ekonomi-jatim-tumbuh-5-72-persen-dagang-defisit-us-3-52-m",
  "category": "Makroekonomi",
  "title": "Ekonomi Jatim Tumbuh 5,72 Persen, Dagang [Defisit] US$3,52 M",
  "deck": "Ekonomi Jawa Timur tumbuh 5,72 persen pada triwulan II 2026, tertinggi di Jawa, tapi defisit dagang melebar ke US$3,52 miliar karena impor naik lebih cepat dari ekspor.",
  "date": "29 Oktober 2026",
  "image": "assets/img/ekonomi-jatim-tumbuh-5-72-persen-dagang-defisit-us-3-52-m.jpg",
  "imageV": "mvsjvvtz",
  "tags": [
   "Jawa Timur",
   "pertumbuhan ekonomi",
   "neraca dagang",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475531-ekonomi-jatim-tumbuh-572-persen-neraca-perdagangan-defisit-usd-352-miliar"
 },
 {
  "slug": "towr-perpanjang-fasilitas-kredit-rp2-triliun-ke-2027",
  "category": "Aksi Korporasi",
  "title": "TOWR Perpanjang [Fasilitas] Kredit Rp2 Triliun ke 2027",
  "deck": "Protelindo, Iforte, SUPR, dan IBST memperpanjang fasilitas kredit Rp2 triliun dari CIMB Niaga sampai 31 Oktober 2027, dijamin Protelindo dan Iforte.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "SUPR",
   "IBST",
   "kredit perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1d25b86173_0f79a86aac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibst-perpanjang-fasilitas-kredit-rp2-triliun-ke-2027",
  "category": "Aksi Korporasi",
  "title": "IBST Perpanjang [Fasilitas] Kredit Rp2 Triliun ke 2027",
  "deck": "IBST bersama Protelindo, Iforte, dan SUPR memperpanjang fasilitas kredit Rp2 triliun dari CIMB Niaga sampai Oktober 2027, dengan jaminan dari perusahaan induk.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBST",
   "transaksi material",
   "kredit bank",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/527d61b41a_294b192742.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-foundation-berdayakan-wirausaha-muda-lewat-pfmuda",
  "category": "UMKM",
  "title": "Pertamina Foundation [Berdayakan] Wirausaha Muda Lewat PFmuda",
  "deck": "Bertepatan Hari Sumpah Pemuda, Pertamina Foundation memaparkan capaian program PFmuda yang telah membina 362 kelompok wirausaha sosial muda di seluruh Indonesia.",
  "date": "28 Oktober 2026",
  "image": "assets/img/pertamina-foundation-berdayakan-wirausaha-muda-lewat-pfmuda.jpg",
  "imageV": "mvsduvvo",
  "tags": [
   "pertamina foundation",
   "umkm",
   "sumpah pemuda",
   "sociopreneur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475526-refleksi-sumpah-pemuda-memberdayakan-kreativitas-anak-bangsa-dalam-pembangunan-nasional"
 },
 {
  "slug": "hajj-konversi-piutang-rp49-9-miliar-jadi-modal-anak-usaha-di-saudi",
  "category": "Aksi Korporasi",
  "title": "HAJJ Konversi Piutang Rp49,9 Miliar Jadi Modal Anak Usaha di [Saudi]",
  "deck": "HAJJ mengonversi piutangnya ke anak usaha ABT LLC di Arab Saudi menjadi modal senilai Rp49,9 miliar, setara 24,44% ekuitas perusahaan per akhir September 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HAJJ",
   "transaksi afiliasi",
   "anak usaha",
   "Arab Saudi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/8411bb9d86_0dc091bd97.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supr-perpanjang-kredit-rp2-triliun-ke-oktober-2027",
  "category": "Aksi Korporasi",
  "title": "SUPR [Perpanjang] Kredit Rp2 Triliun ke Oktober 2027",
  "deck": "Solusi Tunas Pratama memperpanjang fasilitas kredit Rp2 triliun dari Bank CIMB Niaga hingga 31 Oktober 2027, dijamin oleh induk usahanya, Protelindo dan Iforte.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "transaksi material",
   "kredit bank",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/895597405e_7cee1c6ed8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-malaysia-rancang-visa-proyek-untuk-pekerja-perbatasan",
  "category": "Ketenagakerjaan",
  "title": "RI-Malaysia Rancang [Visa Proyek] untuk Pekerja Perbatasan",
  "deck": "Indonesia dan Malaysia membahas pilot project visa kerja musiman khusus di Kepulauan Meranti dan Karimun, serta pos lintas batas baru Kalbar-Sarawak, dalam pertemuan Sosek Malindo di Bandung.",
  "date": "28 Oktober 2026",
  "image": "assets/img/ri-malaysia-rancang-visa-proyek-untuk-pekerja-perbatasan.jpg",
  "imageV": "mvsduwce",
  "tags": [
   "Indonesia-Malaysia",
   "Perbatasan",
   "Visa by Project",
   "Sosek Malindo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475524-indonesia-malyasia-perkuat-kerjasama-strategis-ekonomi-di-kawasan-perbatasan"
 },
 {
  "slug": "trja-laba-naik-92-meski-pendapatan-turun-15-8",
  "category": "Aksi Korporasi",
  "title": "TRJA: [Laba] Naik 92% Meski Pendapatan Turun 15,8%",
  "deck": "Laba bersih Transkon Jaya naik jadi Rp9,52 miliar pada sembilan bulan 2026, didorong penjualan aset tetap, sementara pendapatan usaha turun ke Rp327,6 miliar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRJA",
   "Transkon Jaya",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028232551-65367-0/FinancialStatement-2026-III-TRJA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coin-berbalik-rugi-rp40-8-miliar-pada-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "COIN Berbalik [Rugi] Rp40,8 Miliar pada Semester I 2026",
  "deck": "PT Indokripto Koin Semesta Tbk membalik laba Rp25,5 miliar tahun lalu menjadi rugi Rp40,8 miliar pada semester I 2026, seiring pendapatan yang anjlok hampir 35 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COIN",
   "laporan keuangan",
   "aset kripto",
   "emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028222353-65338-0/FinancialStatement-2026-II-COIN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dssa-beli-tanah-rp3-1-triliun-dari-afiliasi-untuk-pusat-data",
  "category": "Aksi Korporasi",
  "title": "DSSA Beli Tanah Rp3,1 Triliun dari [Afiliasi] untuk Pusat Data",
  "deck": "Anak usaha DSSA, SMCCG, membeli lahan 166.261 m2 di BSD City senilai Rp3,1 triliun dari PT Surya Inter Wisesa, pihak terafiliasi karena hubungan keluarga pemilik manfaat akhir.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DSSA",
   "transaksi afiliasi",
   "pusat data",
   "BSD City"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/441c0f4c0a_225666c4b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-bukukan-laba-bersih-us-126-62-juta-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "PGEO Bukukan [Laba] Bersih US$126,62 Juta Sembilan Bulan 2026",
  "deck": "Materi public expose tahunan PGEO: pendapatan US$352,20 juta, laba bersih US$126,62 juta untuk 9M2026, dan tenggat free float 12,5 persen sebelum Maret 2027.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "Pertamina Geothermal Energy",
   "public expose",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/02d01566ce_df489eec30.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "astra-umumkan-pemenang-satu-indonesia-awards-2026",
  "category": "Bisnis",
  "title": "Astra Umumkan [Pemenang] SATU Indonesia Awards 2026",
  "deck": "Astra menobatkan lima penggerak muda di SATU Indonesia Awards 2026 dan memulai Program Kontribusi Sosial 70 Tahun menjelang ulang tahun ke-70 pada Februari 2027.",
  "date": "28 Oktober 2026",
  "image": "assets/img/astra-umumkan-pemenang-satu-indonesia-awards-2026.jpg",
  "imageV": "mvs95n3l",
  "tags": [
   "Astra",
   "SATU Indonesia Awards",
   "CSR",
   "Sumpah Pemuda"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475501-peringati-sumpah-pemuda-astra-rilis-pemenang-17th-satu-indonesia-awards-2026-dan-kick-off-kontribusi-sosial-70-tahun"
 },
 {
  "slug": "soho-cetak-laba-bersih-naik-27-jadi-rp558-75-miliar-di-9m26",
  "category": "Aksi Korporasi",
  "title": "SOHO Cetak Laba Bersih [Naik 27%] jadi Rp558,75 Miliar di 9M26",
  "deck": "Laba bersih Soho Global Health naik 27 persen menjadi Rp558,75 miliar pada sembilan bulan 2026, ditopang kenaikan pendapatan, sementara kas perusahaan menyusut akibat dividen besar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOHO",
   "laporan keuangan",
   "farmasi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028215323-65216-0/FinancialStatement-2026-III-SOHO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmix-jawab-permintaan-bei-klaim-tak-ada-informasi-material",
  "category": "Aksi Korporasi",
  "title": "MMIX Jawab Permintaan BEI, Klaim Tak Ada [Informasi Material]",
  "deck": "Merespons surat BEI soal lonjakan volatilitas transaksi, MMIX menyatakan tidak ada informasi material dan pengendali tidak berencana mengubah kepemilikan sahamnya.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "volatilitas transaksi",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4a4e2510e1_13a51a6222.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "keju-laba-naik-9-tapi-arus-kas-operasi-turun-tajam",
  "category": "Aksi Korporasi",
  "title": "KEJU: Laba Naik 9%, tapi [Arus Kas Operasi] Turun Tajam",
  "deck": "Laba bersih KEJU naik 9,2 persen jadi Rp161,54 miliar pada sembilan bulan 2026, tapi utang bank baru dan kas yang menyusut separuh mengiringi ekspansi pabriknya.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KEJU",
   "laporan keuangan",
   "arus kas",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028213557-64643-0/FinancialStatement-2026-III-KEJU.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vici-laba-turun-26-utang-bank-jangka-pendek-meroket",
  "category": "Aksi Korporasi",
  "title": "VICI: Laba Turun 26%, Utang Bank Jangka Pendek [Meroket]",
  "deck": "Laba bersih Victoria Care turun 26 persen jadi Rp87,7 miliar pada sembilan bulan 2026, sementara utang bank jangka pendek melonjak jadi Rp100 miliar dari sebelumnya Rp3 miliar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "laporan keuangan",
   "utang bank",
   "consumer goods"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028212348-64925-0/FinancialStatement-2026-III-VICI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "airasia-indonesia-cmpp-catat-rugi-rp1-74-triliun-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "AirAsia Indonesia (CMPP) Catat [Rugi] Rp1,74 Triliun di Kuartal III",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan rugi bersih AirAsia Indonesia melonjak ke Rp1,74 triliun, sementara defisit ekuitas membesar menjadi Rp12,47 triliun.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMPP",
   "AirAsia Indonesia",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028211848-65264-0/FinancialStatement-2026-III-CMPP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcor-laba-kuartal-iii-turun-5-8-jadi-rp217-44-miliar",
  "category": "Aksi Korporasi",
  "title": "MCOR: Laba Kuartal III [Turun] 5,8% jadi Rp217,44 Miliar",
  "deck": "MCOR membukukan laba bersih Rp217,44 miliar pada 9 bulan 2026, turun dari Rp230,88 miliar, seiring dana nasabah bergeser ke pembiayaan repo.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "perbankan",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028203333-64803-0/FinancialStatement-2026-III-MCOR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnbs-laba-9-bulan-naik-69-8-rasio-modal-turun-ke-16-6",
  "category": "Aksi Korporasi",
  "title": "PNBS: Laba 9 Bulan Naik 69,8%, Rasio [Modal] Turun ke 16,6%",
  "deck": "Laba bersih Bank Panin Dubai Syariah naik 69,8 persen jadi Rp73,38 miliar dalam sembilan bulan 2026, sementara rasio kecukupan modal turun dari 19,11 persen jadi 16,61 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNBS",
   "Bank Panin Dubai Syariah",
   "laporan keuangan",
   "rasio kecukupan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028203327-64760-0/FinancialStatement-2026-III-PNBS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-divestasi-lepas-20-saham-inhealth-rp570-m",
  "category": "Aksi Korporasi",
  "title": "BMRI [Divestasi] Lepas 20% Saham Inhealth Rp570 M",
  "deck": "Bank Mandiri menjual 20 persen sahamnya di Inhealth senilai Rp570 miliar kepada IFG Life, bagian dari konsolidasi asuransi BUMN.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Transaksi Afiliasi",
   "Inhealth",
   "IFG Life"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2ad8ce9128_32fc52d4cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msin-jelaskan-ke-bei-piutang-naik-rencana-saham-baru-di-hkex",
  "category": "Aksi Korporasi",
  "title": "MSIN Jelaskan ke BEI: Piutang Naik, Rencana [Saham Baru] di HKEX",
  "deck": "MSIN menjawab permintaan Bursa soal piutang yang melonjak dan rencana penerbitan saham baru hingga 10 persen untuk pencatatan sekunder di Hong Kong.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIN",
   "HKEX",
   "piutang usaha",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/29940a5879_8035011885.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbmf-gelar-rupst-4-desember-akui-telat-laporan-tahunan",
  "category": "Aksi Korporasi",
  "title": "CBMF Gelar RUPST 4 Desember, Akui [Telat] Laporan Tahunan",
  "deck": "CBMF memanggil RUPST pada 4 Desember 2026, salah satu agendanya meminta persetujuan pemegang saham atas keterlambatan penyampaian laporan tahunan 2025.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBMF",
   "RUPST",
   "Laporan Tahunan",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1ca17d38fa_5da90647dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbmf-ubah-jadwal-rupst-catat-dps-27-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "CBMF Ubah Jadwal RUPST, Catat [DPS] 27 Oktober 2026",
  "deck": "Cahaya Bintang Medan menetapkan RUPST tahun buku 2025 digelar Jumat, 4 Desember 2026 di Jakarta Selatan, dengan pemegang saham per 27 Oktober 2026 yang berhak hadir.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBMF",
   "RUPST",
   "jadwal rapat",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/190c8e52bc_94063318a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "boss-tunda-rups-tahunan-dan-luar-biasa-ke-4-november",
  "category": "Aksi Korporasi",
  "title": "BOSS [Tunda] RUPS Tahunan dan Luar Biasa ke 4 November",
  "deck": "Rapat yang semula digelar 29 Oktober diundur ke 4 November 2026, agenda mencakup ratifikasi keterlambatan RUPS tiga tahun buku sekaligus.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOSS",
   "RUPS Tahunan",
   "Penundaan RUPS",
   "Emiten Batu Bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0ecb04e1a6_2348638e8b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impor-migas-kini-lewat-lemigas-bahlil-pastikan-tanpa-apbn",
  "category": "Energi",
  "title": "Impor Migas Kini Lewat Lemigas, Bahlil Pastikan [Tanpa] APBN",
  "deck": "Pemerintah mengalihkan sebagian pengadaan impor migas dari Pertamina ke Lemigas tanpa memakai APBN, tapi penerapannya masih menunggu konsolidasi dengan Pertamina.",
  "date": "28 Oktober 2026",
  "image": "assets/img/impor-migas-kini-lewat-lemigas-bahlil-pastikan-tanpa-apbn.jpg",
  "imageV": "mvs3v23p",
  "tags": [
   "Lemigas",
   "impor migas",
   "Bahlil Lahadalia",
   "Pertamina"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/impor-migas-lewat-lemigas-masih-transisi-bahlil-pastikan-tak-pakai-apbn",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ruu-migas-rancang-izin-hulu-satu-pintu-lewat-buk",
  "category": "Energi",
  "title": "RUU Migas Rancang Izin Hulu [Satu Pintu] Lewat BUK",
  "deck": "Pemerintah mengusulkan Badan Usaha Khusus sebagai pintu tunggal izin hulu migas dan keringanan pajak saat eksplorasi dalam draf RUU Migas yang pembahasannya sudah 90 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/ruu-migas-rancang-izin-hulu-satu-pintu-lewat-buk.jpg",
  "imageV": "mvs3v3u5",
  "tags": [
   "RUU Migas",
   "BUK",
   "Hulu Migas",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/tak-perlu-lagi-keliling-kementerian-izin-hulu-migas-bakal-cukup-di-satu-pintu",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "hrme-rugi-bersih-sembilan-bulan-melebar-jadi-rp15-8-miliar",
  "category": "Aksi Korporasi",
  "title": "HRME: [Rugi] Bersih Sembilan Bulan Melebar jadi Rp15,8 Miliar",
  "deck": "Pendapatan hotel Hermitage milik HRME turun 12 persen dalam sembilan bulan, kas perusahaan susut hampir 40 persen jadi Rp50,2 miliar, sementara rugi bersih melebar jadi Rp15,8 miliar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRME",
   "laporan keuangan",
   "rugi bersih",
   "perhotelan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028194029-64727-0/FinancialStatement-2026-III-HRME.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pdpp-laba-bersih-naik-127-ke-rp59-9-miliar-laba",
  "category": "Aksi Korporasi",
  "title": "PDPP: Laba Bersih Naik 127% ke Rp59,9 Miliar [laba]",
  "deck": "Primadaya Plastisindo (PDPP) membukukan laba bersih Rp59,9 miliar pada sembilan bulan 2026, naik 127 persen, didorong kenaikan penjualan dan harga bahan baku.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PDPP",
   "laporan keuangan",
   "laba bersih",
   "industri kemasan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028193738-65163-0/FinancialStatement-2026-III-PDPP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbni-siapkan-buyback-baru-rp547-miliar-saat-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "BBNI Siapkan Buyback [Baru] Rp547 Miliar Saat Pasar Bergejolak",
  "deck": "BNI akan membeli kembali saham maksimal Rp547 miliar lewat bursa dalam tiga bulan untuk merespons fluktuasi pasar yang signifikan.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "buyback",
   "saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1e504f11aa_dae985e0b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-siapkan-jual-30-saham-pola-target-audit-rampung-desember",
  "category": "Aksi Korporasi",
  "title": "POOL Siapkan Jual 30% Saham [POLA], Target Audit Rampung Desember",
  "deck": "Direksi baru POOL paparkan tiga pilar pemulihan: audit tiga tahun yang tertunda, rencana jual 30% saham POLA, dan rugi semester I yang menyusut tajam.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "POLA",
   "Public Expose",
   "restrukturisasi perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3073962564_169039a274.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-tarik-pinjaman-sindikasi-us-128-juta-laba-turun-37",
  "category": "Aksi Korporasi",
  "title": "BRMS Tarik Pinjaman [Sindikasi] US$128 Juta, Laba Turun 37%",
  "deck": "Bumi Resources Minerals mencairkan pinjaman sindikasi US$128 juta untuk mendanai ekspansi tambang, tapi beban bunga melonjak dan laba sembilan bulan turun 37 persen dibanding tahun lalu.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "Bumi Resources Minerals",
   "pinjaman sindikasi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028190004-64557-0/FinancialStatement-2026-III-BRMS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vrna-berbalik-laba-rp2-49-miliar-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "VRNA Berbalik [Laba] Rp2,49 Miliar di Sembilan Bulan 2026",
  "deck": "Mizuho Leasing Indonesia (VRNA) berbalik dari rugi jadi laba Rp2,49 miliar pada sembilan bulan 2026, tapi arus kas dari operasinya anjlok lebih dari 80 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VRNA",
   "Mizuho Leasing Indonesia",
   "laporan keuangan",
   "pembiayaan konsumen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028184937-64947-0/FinancialStatement-2026-III-VRNA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bltz-laba-ambruk-97-persen-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "BLTZ: Laba [Ambruk] 97 Persen di Kuartal III 2026",
  "deck": "Laba bersih CGV Cinemas (BLTZ) longsor ke Rp919 juta pada sembilan bulan 2026 akibat beban pajak tinggi, meski utang bank berhasil dipangkas dari Rp486 miliar menjadi Rp370 miliar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "laporan keuangan",
   "CGV Cinemas",
   "laba turun"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028183613-65270-0/FinancialStatement-2026-III-BLTZ.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "axio-catat-laba-9-bulan-naik-74-eps-jadi-rp10-45",
  "category": "Aksi Korporasi",
  "title": "AXIO Catat Laba 9 Bulan Naik 74%, [EPS] Jadi Rp10,45",
  "deck": "Laba bersih Tera Data Indonusa naik 74 persen jadi Rp61,08 miliar dalam sembilan bulan, namun arus kas operasional berbalik negatif Rp97,82 miliar seiring piutang usaha melonjak 126 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AXIO",
   "laporan keuangan",
   "laba bersih",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028183854-65310-0/FinancialStatement-2026-III-AXIO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mina-balik-untung-rp1-28-miliar-utang-susut-77-persen-di-q3",
  "category": "Aksi Korporasi",
  "title": "MINA balik [untung] Rp1,28 miliar, utang susut 77 persen di Q3",
  "deck": "Laba bersih MINA berbalik positif pada kuartal III 2026, didorong penghasilan keuangan, sementara total utang perusahaan turun 77 persen setelah melunasi pinjaman ke pihak ketiga.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINA",
   "laporan keuangan",
   "properti",
   "Sanurhasta Mitra"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028183427-64544-0/FinancialStatement-2026-III-MINA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supa-laba-melonjak-ke-rp299-9-miliar-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "SUPA: Laba [Melonjak] ke Rp299,9 Miliar Kuartal III 2026",
  "deck": "Laba bersih Super Bank Indonesia naik hampir lima kali lipat jadi Rp299,9 miliar pada sembilan bulan 2026, didorong lonjakan kredit dan simpanan nasabah.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPA",
   "perbankan",
   "laporan keuangan",
   "Super Bank Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028183143-64715-0/FinancialStatement-2026-III-SUPA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipcm-laba-bersih-tergerus-meski-pendapatan-naik-5-33",
  "category": "Aksi Korporasi",
  "title": "IPCM: Laba Bersih [Tergerus] Meski Pendapatan Naik 5,33%",
  "deck": "Pendapatan sembilan bulan IPCM naik 5,33% jadi Rp1,15 triliun, tapi laba bersih turun 33% menjadi Rp94,13 miliar akibat kenaikan harga bahan bakar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCM",
   "laporan keuangan",
   "Pelindo Group",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/95e0ff397e_e1e377544c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mlia-rugi-rp162-8-miliar-di-kuartal-iii-2026-kas-susut-tajam",
  "category": "Aksi Korporasi",
  "title": "[MLIA] Rugi Rp162,8 Miliar di Kuartal III 2026, Kas Susut Tajam",
  "deck": "Mulia Industrindo (MLIA) membukukan rugi Rp162,8 miliar pada sembilan bulan 2026, berbalik dari laba tahun sebelumnya, seiring laba kotor yang anjlok dan kas yang menyusut tajam.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MLIA",
   "laporan keuangan",
   "rugi bersih",
   "Mulia Industrindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028182422-65134-0/FinancialStatement-2026-III-MLIA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amar-laba-bersih-melonjak-30-ke-rp227-7-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "AMAR: Laba Bersih [Melonjak] 30% ke Rp227,7 Miliar di Kuartal III",
  "deck": "Laba bersih Bank Amar Indonesia naik sekitar 30 persen menjadi Rp227,7 miliar pada kuartal III 2026, didorong pertumbuhan kredit yang pesat meski arus kas operasional makin negatif.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAR",
   "Bank Amar Indonesia",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028180001-65056-0/FinancialStatement-2026-III-AMAR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apli-cetak-laba-rp7-46-miliar-bagi-dividen-rp60-miliar",
  "category": "Aksi Korporasi",
  "title": "APLI Cetak Laba Rp7,46 Miliar, Bagi [Dividen] Rp60 Miliar",
  "deck": "APLI berbalik untung Rp7,46 miliar pada sembilan bulan pertama 2026, setelah bagi dividen Rp59,99 miliar dan belanja modal naik tajam.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APLI",
   "laporan keuangan",
   "dividen",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028174607-64937-0/FinancialStatement-2026-III-APLI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-terbitkan-right-issue-rp2-54-triliun-dilusi-13-04",
  "category": "Aksi Korporasi",
  "title": "MGLV Terbitkan Right Issue Rp2,54 Triliun, Dilusi [13,04%]",
  "deck": "NexAI Digital Infrastruktur (MGLV) menawarkan right issue hingga 285,7 juta saham baru seharga Rp8.880, dananya untuk bayar utang ke NDC dan bangun dua pusat data.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "rights issue",
   "data center",
   "NDC"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0620f58f90_2d73692757.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-siapkan-rp112-miliar-lunasi-obligasi-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BEXI Siapkan Rp112 Miliar [Lunasi] Obligasi Jatuh Tempo",
  "deck": "Indonesia Eximbank (BEXI) menyiapkan dana Rp112 miliar untuk melunasi pokok obligasi BEXI04DCN7 yang jatuh tempo 29 Oktober 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI",
   "obligasi",
   "LPEI",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/07c9ad4b5b_6f8825ba11.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smbr-siapkan-audit-lk-kuartal-iii-isyarat-aksi-korporasi",
  "category": "Aksi Korporasi",
  "title": "SMBR Siapkan Audit LK Kuartal III, Isyarat [Aksi Korporasi]",
  "deck": "SMBR akan mengaudit laporan keuangan interim per 30 September 2026 karena ada rencana aksi korporasi, dengan tenggat penyampaian ke BEI dan OJK paling lambat 31 Desember 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "Semen Baturaja",
   "aksi korporasi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/891a0d3db6_5112459509.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-raih-penghargaan-transformasi-digital-2026",
  "category": "BUMN",
  "title": "Pegadaian Raih Penghargaan [Transformasi Digital] 2026",
  "deck": "Pegadaian meraih The Finance Special Award 2026 kategori The Most Innovative Digital Transformation atas inovasi layanan digital gadai.",
  "date": "28 Oktober 2026",
  "image": "assets/img/pegadaian-raih-penghargaan-transformasi-digital-2026.jpg",
  "imageV": "mvs3v48k",
  "tags": [
   "pegadaian",
   "bumn",
   "transformasi digital",
   "penghargaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475452-pegadaian-raih-the-finance-special-award-2026-berkat-inovasi-transformasi-digital"
 },
 {
  "slug": "dvla-laba-turun-13-arus-kas-operasi-anjlok-36",
  "category": "Aksi Korporasi",
  "title": "DVLA: Laba Turun 13%, Arus Kas Operasi [Anjlok] 36%",
  "deck": "Pendapatan Darya-Varia naik 13,5% jadi Rp1,85 triliun pada 9 bulan 2026, tapi laba bersih turun 13,2% jadi Rp142,7 miliar karena beban melonjak dan kas operasional menyusut tajam.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DVLA",
   "laporan keuangan",
   "farmasi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028172612-64905-0/FinancialStatement-2026-III-DVLA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pidl-catatkan-obligasi-dan-sukuk-rp2-28-triliun-di-bei",
  "category": "Aksi Korporasi",
  "title": "PIDL [Catatkan] Obligasi dan Sukuk Rp2,28 Triliun di BEI",
  "deck": "Obligasi dan sukuk PIDL senilai total Rp2,28 triliun resmi tercatat di Bursa Efek Indonesia mulai 29 Oktober 2026, bagian dari program berkelanjutan senilai Rp12,5 triliun.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIDL",
   "obligasi",
   "sukuk",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/15930f1ab7_b7baa3c443.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-hentikan-buyback-lama-siapkan-periode-baru",
  "category": "Aksi Korporasi",
  "title": "TPIA [Hentikan] Buyback Lama, Siapkan Periode Baru",
  "deck": "Chandra Asri Pacific menghentikan periode buyback saham yang semula berakhir 31 Desember 2026, lebih cepat menjadi 28 Oktober 2026, untuk memulai program buyback baru dengan dana yang disesuaikan.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "buyback saham",
   "Chandra Asri Pacific",
   "petrokimia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7337fa550c_04bbac874a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obligasi-tpia-senilai-rp266-95-miliar-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "Obligasi TPIA Senilai Rp266,95 Miliar [Jatuh Tempo]",
  "deck": "Obligasi Seri A TPIA senilai Rp266,95 miliar resmi jatuh tempo dan tidak lagi diperdagangkan di Bursa Efek Indonesia mulai 29 Oktober 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TPIA",
   "obligasi",
   "jatuh tempo",
   "Chandra Asri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1d73a13419_029036c795.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bgtg-rombak-direksi-dan-komisaris-tiga-wajah-baru",
  "category": "Aksi Korporasi",
  "title": "BGTG [Rombak] Direksi dan Komisaris, Tiga Wajah Baru",
  "deck": "Bank Ganesha mengangkat dua direktur baru dan satu komisaris baru efektif 21 Oktober 2026, sementara jajaran pimpinan utama tidak berubah.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BGTG",
   "Bank Ganesha",
   "direksi",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/16e1cb20b5_38f77c63b3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inpp-cetak-laba-rp170-6-miliar-berbalik-dari-rugi-tahun-lalu",
  "category": "Aksi Korporasi",
  "title": "INPP Cetak Laba Rp170,6 Miliar, Berbalik dari [Rugi] Tahun Lalu",
  "deck": "Laporan keuangan interim INPP per September 2026 menunjukkan laba bersih Rp170,6 miliar, berbalik dari rugi Rp21,4 miliar tahun lalu, didorong arus kas operasi yang melonjak.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "laporan keuangan",
   "properti",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028170408-65015-0/FinancialStatement-2026-III-INPP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fore-kebocoran-data-pribadi-5-7-juta-pengguna-aplikasi",
  "category": "Aksi Korporasi",
  "title": "FORE: [Kebocoran] Data Pribadi 5,7 Juta Pengguna Aplikasi",
  "deck": "Investigasi internal FORE menemukan akses tanpa izin ke platform pengolah data yang membocorkan data pribadi sekitar 5,7 juta pengguna aplikasinya.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORE",
   "kebocoran data",
   "keamanan siber",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c1b2070983_cf9ec34ae1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zinc-ekuitas-susut-separuh-di-kuartal-iii-2026-rugi-melebar",
  "category": "Aksi Korporasi",
  "title": "ZINC: Ekuitas [Susut] Separuh di Kuartal III 2026, Rugi Melebar",
  "deck": "Ekuitas ZINC turun hampir separuh jadi Rp175,49 miliar dalam sembilan bulan 2026, rugi melebar ke Rp186,44 miliar, dan beban bunga meroket lebih dari dua kali lipat.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZINC",
   "Kapuas Prima Coal",
   "laporan keuangan kuartal III",
   "watchlist BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028165716-64902-0/FinancialStatement-2026-III-ZINC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inpp-komisaris-independen-tiffany-mediana-mundur",
  "category": "Aksi Korporasi",
  "title": "INPP: Komisaris Independen Tiffany Mediana [Mundur]",
  "deck": "Tiffany Mediana mengundurkan diri dari jabatan Komisaris Independen INPP sejak 26 Oktober 2026, menunggu pengesahan RUPS.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPP",
   "komisaris independen",
   "tata kelola perusahaan",
   "Indonesian Paradise Property"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5acffcf383_0cce3c041a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtdl-raup-penjualan-rp22-1-t-mesin-tumbuh-dari-distribusi-bermargin-tipis",
  "category": "Aksi Korporasi",
  "title": "MTDL Raup Penjualan Rp22,1 T, Mesin Tumbuh dari [Distribusi] Bermargin Tipis",
  "deck": "Penjualan Metrodata Electronics naik 17,5% jadi Rp22,1 triliun pada kuartal III 2026, ditopang lonjakan penjualan smartphone, PC, dan notebook di unit distribusi.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTDL",
   "Metrodata Electronics",
   "kinerja kuartal III",
   "distribusi TIK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/7307c9f9a9_e7771a59e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buah-catat-penjualan-naik-18-tapi-laba-turun-8-8-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "BUAH Catat Penjualan Naik 18%, tapi [Laba] Turun 8,8% di Kuartal III",
  "deck": "Laporan interim kuartal III 2026 Segar Kumala Indonesia menunjukkan penjualan naik jadi Rp2,82 triliun, tapi laba bersih turun ke Rp45,02 miliar karena beban umum dan administrasi melonjak.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUAH",
   "laporan keuangan kuartal III",
   "Segar Kumala Indonesia",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028164512-65235-0/FinancialStatement-2026-III-BUAH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tmas-laba-bersih-melonjak-111-ke-rp859-5-miliar-di-q3",
  "category": "Aksi Korporasi",
  "title": "TMAS: Laba Bersih [Melonjak] 111% ke Rp859,5 Miliar di Q3",
  "deck": "Laba bersih Temas Tbk naik lebih dari dua kali lipat jadi Rp859,5 miliar pada sembilan bulan 2026, didorong lonjakan pendapatan jasa pelayaran dan penambahan kapal baru.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMAS",
   "laba bersih",
   "pelayaran",
   "belanja modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028164435-65115-0/FinancialStatement-2026-III-TMAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psgo-lunasi-utang-bank-mandiri-laba-9-bulan-naik-7-7",
  "category": "Aksi Korporasi",
  "title": "PSGO [Lunasi] Utang Bank Mandiri, Laba 9 Bulan Naik 7,7%",
  "deck": "Palma Serasih melunasi seluruh utang bank jangka panjang ke Bank Mandiri sekitar Rp846,5 miliar menggunakan kas, sementara laba periode sembilan bulan naik jadi Rp312,8 miliar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "Palma Serasih",
   "laporan keuangan",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028162910-64969-0/FinancialStatement-2026-III-PSGO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tirt-cetak-laba-rp19-5-miliar-usai-pindah-ke-angkutan-laut",
  "category": "Aksi Korporasi",
  "title": "TIRT Cetak Laba Rp19,5 Miliar Usai Pindah ke [Angkutan Laut]",
  "deck": "Setelah resmi beralih dari bisnis kayu lapis ke angkutan laut, Tirta Mahakam Resources membalik rugi jadi laba Rp19,52 miliar pada sembilan bulan pertama 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TIRT",
   "laporan keuangan",
   "angkutan laut",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028162714-64475-0/FinancialStatement-2026-III-TIRT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-jago-arto-catat-laba-rp298-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "Bank Jago (ARTO) Catat Laba [Rp298 Miliar] di Kuartal III 2026",
  "deck": "Laba bersih Bank Jago (ARTO) naik 49,7 persen menjadi Rp298,1 miliar dalam sembilan bulan pertama 2026, ditopang pertumbuhan dana nasabah, meski rasio kredit bermasalah turut naik.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTO",
   "Bank Jago",
   "laporan keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028162451-65202-0/FinancialStatement-2026-III-ARTO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vins-laba-9-bulan-naik-55-arus-kas-operasi-justru-menyusut",
  "category": "Aksi Korporasi",
  "title": "VINS: Laba 9 Bulan Naik 55%, [Arus Kas] Operasi Justru Menyusut",
  "deck": "Laba bersih PT Victoria Insurance naik ke Rp17,83 miliar pada kuartal III 2026, tapi kas dari operasi menyusut tajam dan nilai investasi obligasi tergerus kerugian belum terealisasi.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VINS",
   "laporan keuangan",
   "asuransi",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028161624-64649-0/FinancialStatement-2026-III-VINS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smsm-kantongi-dividen-rp2-98-miliar-dari-tokyo-radiator",
  "category": "Aksi Korporasi",
  "title": "SMSM Kantongi Dividen [Rp2,98 Miliar] dari Tokyo Radiator",
  "deck": "Selamat Sempurna (SMSM) melaporkan pendapatan dividen Rp2,98 miliar dari entitas asosiasi PT Tokyo Radiator Selamat Sempurna pada 28 Oktober 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "dividen",
   "Selamat Sempurna",
   "entitas asosiasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0853c4eebd_04e5a301a3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-laba-astra-turun-20-jadi-rp24-1-triliun-di-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "ASII: Laba Astra [Turun] 20% Jadi Rp24,1 Triliun di 9 Bulan 2026",
  "deck": "Laba bersih Astra International turun 20,1 persen menjadi Rp24,07 triliun pada sembilan bulan pertama 2026, meski pendapatan nyaris stagnan di Rp243,87 triliun.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "Astra International",
   "laba bersih",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028161458-64480-0/FinancialStatement-2026-III-ASII.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-eraa-melonjak-47-persen-jadi-rp1-25-triliun-di-9m-2026",
  "category": "Aksi Korporasi",
  "title": "Laba ERAA [Melonjak] 47 Persen Jadi Rp1,25 Triliun di 9M-2026",
  "deck": "Erajaya Swasembada melaporkan laba bersih naik 47 persen dan pendapatan tumbuh 22 persen pada sembilan bulan 2026, sembari melunasi obligasi dan menambah saham treasuri.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "Erajaya Swasembada",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028160926-64867-0/FinancialStatement-2026-III-ERAA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-waran-jpfa-usai-dividen-interim-rp90-saham",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Waran] JPFA usai Dividen Interim Rp90/Saham",
  "deck": "Maybank Sekuritas Indonesia (ZP) menyesuaikan harga pelaksanaan dan rasio konversi waran terstruktur JPFAZPCF7A menyusul dividen interim JPFA Rp90 per saham.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "JPFA",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/72c1fc3af4_78abb556f9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-sesuaikan-waran-untr-usai-dividen-interim-rp430-saham",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Waran] UNTR usai Dividen Interim Rp430/Saham",
  "deck": "Maybank Sekuritas (ZP) menyesuaikan harga pelaksanaan dan rasio konversi waran terstruktur UNTRZPCZ6A dan UNTRZPCM7A karena UNTR membagi dividen interim Rp430 per saham.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "UNTR",
   "waran terstruktur",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/11d3a4895f_1d85afcf93.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtdl-laba-per-saham-turun-meski-pendapatan-naik-17-5",
  "category": "Aksi Korporasi",
  "title": "MTDL: Laba Per Saham Turun Meski Pendapatan Naik [17,5%]",
  "deck": "Pendapatan Metrodata naik 17,5 persen dalam sembilan bulan 2026, tapi laba bersih untuk pemegang saham utama turun dan utang jangka pendek melonjak 230 persen untuk membiayai lonjakan persediaan.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTDL",
   "laporan keuangan",
   "arus kas",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028155217-65129-0/FinancialStatement-2026-III-MTDL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmas-koreksi-jadwal-dividen-interim-rp29-per-saham",
  "category": "Aksi Korporasi",
  "title": "DMAS koreksi jadwal [dividen] interim Rp29 per saham",
  "deck": "Puradelta Lestari (DMAS) mengoreksi jadwal dividen interim tunai Rp29 per saham senilai Rp1,4 triliun, dengan recording date 30 Oktober dan pembayaran 16 November 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMAS",
   "dividen interim",
   "Puradelta Lestari",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e2f3becce8_a4a138cab2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-gelar-rupslb-bahas-rights-issue-22-miliar-saham-baru",
  "category": "Aksi Korporasi",
  "title": "GMFI Gelar RUPSLB, Bahas [Rights Issue] 22 Miliar Saham Baru",
  "deck": "GMFI mengundang pemegang saham ke RUPSLB 19 November 2026 untuk menyetujui rencana penerbitan hingga 22,03 miliar saham baru lewat mekanisme hak memesan efek terlebih dahulu.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "RUPSLB",
   "rights issue",
   "PMHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3f1efa9b6d_09bb6d5480.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-catat-laba-bersih-naik-30-persen-ke-us-72-8-juta-per-9m26",
  "category": "Aksi Korporasi",
  "title": "ENRG Catat Laba Bersih [Naik] 30 Persen ke US$72,8 Juta per 9M26",
  "deck": "Energi Mega Persada (ENRG) melaporkan laba bersih sembilan bulan 2026 naik 30 persen jadi US$72,8 juta, didukung kas yang berlipat dan pinjaman bank yang menyusut.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "Energi Mega Persada",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028152059-65127-0/FinancialStatement-2026-III-ENRG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpow-cetak-rugi-melonjak-jadi-rp11-6-miliar-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MPOW Cetak Rugi [Melonjak] jadi Rp11,6 Miliar Kuartal III 2026",
  "deck": "Pendapatan MPOW susut hampir separuh jadi Rp10,9 miliar pada sembilan bulan 2026, sementara rugi bersih melonjak ke Rp11,6 miliar dan ekuitas tergerus jadi Rp92,5 miliar.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPOW",
   "laporan keuangan",
   "rugi bersih",
   "utilitas listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028152018-65084-0/FinancialStatement-2026-III-MPOW.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-laba-bersih-melonjak-31-ke-rp3-64-triliun",
  "category": "Aksi Korporasi",
  "title": "TAPG: Laba Bersih [Melonjak] 31% ke Rp3,64 Triliun",
  "deck": "Laba bersih TAPG naik 31 persen menjadi Rp3,64 triliun pada sembilan bulan pertama 2026, ditopang kontribusi ventura bersama dan kas yang bertambah.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "laba bersih",
   "laporan keuangan kuartal III",
   "sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028152218-65240-0/FinancialStatement-2026-III-TAPG.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "myor-laba-bersih-9-bulan-naik-31-ke-rp2-47-triliun",
  "category": "Aksi Korporasi",
  "title": "MYOR: [Laba] Bersih 9 Bulan Naik 31% ke Rp2,47 Triliun",
  "deck": "Laba bersih Mayora Indah naik 31 persen jadi Rp2,47 triliun pada sembilan bulan pertama 2026, didorong perbaikan arus kas operasi dan penurunan utang bank jangka pendek.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MYOR",
   "laporan keuangan",
   "laba bersih",
   "mayora indah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028151410-65119-0/FinancialStatement-2026-III-MYOR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnko-bukukan-laba-rp165-m-ekuitas-tetap-negatif-rp899-m",
  "category": "Aksi Korporasi",
  "title": "CNKO Bukukan Laba Rp165 M, [Ekuitas] Tetap Negatif Rp899 M",
  "deck": "Laba sembilan bulan CNKO naik 12,5 persen jadi Rp165,39 miliar, didorong pendapatan di luar usaha, sementara ekuitas perseroan masih defisit Rp898,99 miliar per akhir September 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNKO",
   "laporan keuangan kuartal III",
   "batu bara",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028151622-64562-0/FinancialStatement-2026-III-CNKO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gdyr-panggil-rupslb-ubah-susunan-komisaris-19-november",
  "category": "Aksi Korporasi",
  "title": "GDYR Panggil RUPSLB, Ubah Susunan [Komisaris] 19 November",
  "deck": "Goodyear Indonesia menggelar RUPSLB pada 19 November 2026 untuk menyetujui perubahan susunan Dewan Komisaris dan penyesuaian anggaran dasar sesuai klasifikasi usaha baru BPS.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GDYR",
   "RUPSLB",
   "Dewan Komisaris",
   "Goodyear Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/1d2ac81fcc_8958c12336.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roti-direktur-arief-alfanto-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "ROTI: Direktur Arief Alfanto Ajukan [Pengunduran Diri]",
  "deck": "Direktur Arief Alfanto mengajukan pengunduran diri dari jabatannya di Nippon Indosari Corpindo karena alasan pribadi, menunggu persetujuan RUPS.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "direksi",
   "pengunduran diri",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b39a7a8bd4_8f480433e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bptr-laba-bersih-melonjak-170-persen-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "BPTR: Laba Bersih [Melonjak] 170 Persen di Kuartal III 2026",
  "deck": "Laba bersih BPTR naik hampir tiga kali lipat jadi Rp35,5 miliar dalam sembilan bulan 2026, ditopang pendapatan yang tumbuh 20 persen dan pelunasan utang jangka pendek.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPTR",
   "laporan keuangan",
   "transportasi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028140022-64970-0/FinancialStatement-2026-III-BPTR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-beli-kapal-rp457-miliar-transaksi-material-tanpa-rups",
  "category": "Aksi Korporasi",
  "title": "HATM Beli Kapal Rp457 Miliar, [Transaksi Material] Tanpa RUPS",
  "deck": "Habco Trans Maritima membeli kapal bulk carrier senilai Rp457,1 miliar dari Coastline Shipping Limited, setara 27,92 persen ekuitas, tanpa perlu persetujuan RUPS.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "transaksi material",
   "kapal bulk carrier",
   "ekspansi armada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e9cf13f826_c09cd34ce3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asha-gelar-rupslb-ratifikasi-keterlambatan-pengangkatan-direksi",
  "category": "Aksi Korporasi",
  "title": "ASHA Gelar RUPSLB, Ratifikasi [Keterlambatan] Pengangkatan Direksi",
  "deck": "RUPSLB ASHA pada 19 November 2026 akan membahas dispensasi keterlambatan pengangkatan direksi dan komisaris, pergantian susunan pengurus, serta penyesuaian klasifikasi usaha perseroan.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASHA",
   "RUPSLB",
   "Direksi",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a5dfe6863b_9b3b769ff9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bkpm-cabut-izin-tambang-emas-di-nabire-papua",
  "category": "Industri",
  "title": "BKPM [Cabut] Izin Tambang Emas di Nabire, Papua",
  "deck": "BKPM mencabut izin usaha pertambangan emas PT Kristalin Ekalestari di Nabire, Papua Tengah, setelah perusahaan terbukti menambang di kawasan hutan tanpa izin.",
  "date": "28 Oktober 2026",
  "image": "assets/img/bkpm-cabut-izin-tambang-emas-di-nabire-papua.jpg",
  "imageV": "mvrowb3m",
  "tags": [
   "BKPM",
   "Tambang",
   "Papua",
   "Kehutanan"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/keminveshil-bkpm-resmi-cabut-izin-usaha-pertambangan-iup-pt-kristalin-ekalestari-di-papua",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "11-dari-14-provinsi-sulampua-catat-inflasi-di-atas-target",
  "category": "Makroekonomi",
  "title": "11 dari 14 Provinsi Sulampua Catat [Inflasi] di Atas Target",
  "deck": "Pemerintah menggelar rapat koordinasi pengendalian inflasi di Sulawesi, Maluku, dan Papua setelah 11 dari 14 provinsi mencatat inflasi tahunan di atas ambang batas nasional pada September 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "Inflasi",
   "Sulampua",
   "Ketahanan Pangan",
   "TPIP-TPID"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7189/sinergi-tpip-dan-tpid-wilayah-sulampua-perkuat-konektivitas-dan-efisiensi-rantai-pasok-untuk-mendukung-ketahanan-pangan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "zyrx-rugi-rp21-8-miliar-di-kuartal-iii-2026-penjualan-turun-20",
  "category": "Aksi Korporasi",
  "title": "ZYRX [Rugi] Rp21,8 Miliar di Kuartal III 2026, Penjualan Turun 20%",
  "deck": "Produsen komputer ZYRX membalik laba jadi rugi bersih Rp21,8 miliar pada sembilan bulan 2026, seiring penjualan turun dan beban bunga melonjak.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZYRX",
   "Zyrexindo",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028122343-64474-0/FinancialStatement-2026-III-ZYRX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jpfa-bagi-dividen-interim-rp90-per-saham-capai-rp1-05-triliun",
  "category": "Aksi Korporasi",
  "title": "JPFA Bagi [Dividen] Interim Rp90 per Saham, Capai Rp1,05 Triliun",
  "deck": "JAPFA Comfeed membagikan dividen interim tunai Rp90 per saham, total Rp1,05 triliun, dengan pembayaran dijadwalkan 12 November 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "dividen interim",
   "JAPFA Comfeed",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4658e9dfdf_264ceb7088.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "midi-laba-alfamidi-tumbuh-19-ke-rp705-6-miliar-di-9-bulan",
  "category": "Aksi Korporasi",
  "title": "MIDI: [Laba] Alfamidi Tumbuh 19% ke Rp705,6 Miliar di 9 Bulan",
  "deck": "Laba bersih Alfamidi naik 19,4 persen jadi Rp705,6 miliar pada sembilan bulan 2026, ditopang kenaikan pendapatan 9,2 persen meski kas menyusut akibat ekspansi gerai dan dividen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MIDI",
   "Alfamidi",
   "laporan keuangan",
   "ritel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028120909-64725-0/FinancialStatement-2026-III-MIDI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "padi-berbalik-rugi-kuartal-iii-ekuitas-terdongkrak-rights-issue",
  "category": "Aksi Korporasi",
  "title": "PADI Berbalik Rugi Kuartal III, [Ekuitas] Terdongkrak Rights Issue",
  "deck": "PADI mencatat rugi neto Rp1,1 miliar pada sembilan bulan 2026, berbalik dari laba Rp24,7 miliar setahun lalu, setelah menggelar rights issue Rp113 miliar dan melunasi utang bank serta subordinasi.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADI",
   "rugi kuartalan",
   "rights issue",
   "sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028115502-65147-0/FinancialStatement-2026-III-PADI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-rampungkan-mesop-tahap-2-25-79-juta-opsi-dieksekusi",
  "category": "Aksi Korporasi",
  "title": "ERAA Rampungkan [MESOP] Tahap 2, 25,79 Juta Opsi Dieksekusi",
  "deck": "Erajaya Swasembada menyelesaikan pelaksanaan opsi saham karyawan tahap kedua, menutup seluruh 51,54 juta opsi program MESOP tanpa sisa yang belum dieksekusi.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "MESOP",
   "Erajaya Swasembada",
   "opsi saham karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3be6a30b5c_a3d3895552.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "spre-laba-bersih-turun-62-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "SPRE: Laba Bersih [Turun] 62% di Kuartal III 2026",
  "deck": "Laba bersih Soraya Berjaya Indonesia (SPRE) turun 62 persen menjadi Rp663,57 juta pada sembilan bulan 2026, sementara total liabilitas malah turun 29 persen setelah pelunasan utang usaha dan bank.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPRE",
   "laporan keuangan",
   "tekstil",
   "kinerja emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028115937-64907-0/FinancialStatement-2026-III-SPRE.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koci-laba-9m-turun-41-uang-muka-penjualan-naik-162",
  "category": "Aksi Korporasi",
  "title": "KOCI: Laba 9M Turun 41%, [Uang Muka] Penjualan Naik 162%",
  "deck": "Laporan keuangan interim kuartal III 2026 KOCI mencatat laba bersih turun 41 persen secara tahunan, sementara uang muka penjualan rumah melonjak 162 persen dari akhir 2025.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOCI",
   "laporan keuangan",
   "properti",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028112018-64929-0/FinancialStatement-2026-III-KOCI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cakk-pangkas-rugi-89-persen-di-kuartal-iii-tapi-utang-naik-tajam",
  "category": "Aksi Korporasi",
  "title": "CAKK Pangkas [Rugi] 89 Persen di Kuartal III, tapi Utang Naik Tajam",
  "deck": "Pendapatan CAKK naik dua kali lipat jadi Rp505,4 miliar dalam sembilan bulan 2026, rugi menyusut jadi Rp3,4 miliar, tapi utang bank dan piutang usaha melonjak.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CAKK",
   "laporan keuangan",
   "keramik",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028112201-65111-0/FinancialStatement-2026-III-CAKK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menn-jadwalkan-public-expose-tahunan-pada-10-november",
  "category": "Aksi Korporasi",
  "title": "MENN Jadwalkan [Public Expose] Tahunan pada 10 November",
  "deck": "Menn Teknologi Indonesia mengoreksi jadwal public expose tahunan dan akan menggelarnya secara online pada 10 November 2026 pukul 15.00 WIB.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "public expose",
   "paparan publik tahunan",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6c1e3d477d_a3d2e8e3f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-jadi-rp2-570-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] Jadi Rp2.570.000/Gram",
  "deck": "Harga emas Antam naik Rp20.000 jadi Rp2.570.000 per gram pada 28 Oktober 2026, harga buyback ikut terkerek ke Rp2.365.000 per gram.",
  "date": "28 Oktober 2026",
  "image": "assets/img/harga-emas-antam-naik-jadi-rp2-570-000-gram.jpg",
  "imageV": "mvrowbxu",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "buyback emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475376-harga-emas-antam-hari-ini-28-oktober-2026-naik-jadi-rp2570000-per-gram-hitung-hitung-jika-mau-jual"
 },
 {
  "slug": "truk-masih-rugi-rp3-59-miliar-ekuitas-menyusut",
  "category": "Aksi Korporasi",
  "title": "TRUK Masih [Rugi] Rp3,59 Miliar, Ekuitas Menyusut",
  "deck": "Laporan keuangan interim kuartal III 2026 PT Guna Timur Raya Tbk menunjukkan rugi bersih menyusut 21 persen, tapi ekuitas terus tergerus akumulasi kerugian.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "laporan keuangan",
   "logistik",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028104438-64864-0/FinancialStatement-2026-III-TRUK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aslc-laba-turun-longsor-75-di-kuartal-iii-pendapatan-naik-35",
  "category": "Aksi Korporasi",
  "title": "ASLC: Laba Turun [Longsor] 75% di Kuartal III, Pendapatan Naik 35%",
  "deck": "Pendapatan ASLC naik 35 persen jadi Rp964,84 miliar pada sembilan bulan pertama 2026, tetapi laba bersih turun 75 persen menjadi Rp8,50 miliar akibat kenaikan beban pokok dan operasional.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLC",
   "laporan keuangan",
   "laba bersih",
   "otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028101141-64604-0/FinancialStatement-2026-III-ASLC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtel-mulai-periode-pelaksanaan-mesop-tahap-iii-rp582-per-saham",
  "category": "Aksi Korporasi",
  "title": "MTEL Mulai Periode Pelaksanaan [MESOP] Tahap III, Rp582 per Saham",
  "deck": "Mitratel membuka periode pelaksanaan opsi saham karyawan Tahap III pada 1-22 November 2026 dengan harga Rp582 per saham, maksimal 26,67 juta saham.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTEL",
   "MESOP",
   "Mitratel",
   "opsi saham karyawan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a369e38bc8_de19506ca3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "doid-jelaskan-selisih-pendapatan-konsolidasi-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "DOID Jelaskan [Selisih] Pendapatan Konsolidasi ke Bursa",
  "deck": "BUMA Internasional Grup menjawab permintaan Bursa soal selisih pendapatan ACG, BMM, dan total konsolidasian semester I 2026, menegaskan tidak ada tumpang tindih pencatatan.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOID",
   "BUMA Internasional",
   "Bursa Efek Indonesia",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e8397967a6_cb48eef97f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptmp-balik-untung-laba-rp13-2-miliar-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "PTMP Balik Untung, Laba [Rp13,2 Miliar] di Sembilan Bulan 2026",
  "deck": "Mitra Pack mencatat laba bersih Rp13,2 miliar untuk sembilan bulan 2026, berbalik dari rugi Rp41,9 miliar setahun sebelumnya, didorong efisiensi beban administrasi.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTMP",
   "Mitra Pack",
   "laporan keuangan",
   "laba kuartal III"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028094822-64579-0/FinancialStatement-2026-III-PTMP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soci-laba-naik-ke-us-32-3-juta-aset-tumbuh-20-6",
  "category": "Aksi Korporasi",
  "title": "SOCI: Laba Naik ke [US$32,3 Juta], Aset Tumbuh 20,6%",
  "deck": "Soechi Lines mencatat laba bersih sembilan bulan 2026 naik ke US$32,3 juta dari US$12,1 juta tahun lalu, ditopang penambahan kapal tanker yang juga menaikkan utang bank 47 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOCI",
   "Soechi Lines",
   "laporan keuangan",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028094308-64919-0/FinancialStatement-2026-III-SOCI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikbi-laba-turun-59-utang-bank-jangka-pendek-melonjak-52",
  "category": "Aksi Korporasi",
  "title": "IKBI: Laba Turun 59%, [Utang] Bank Jangka Pendek Melonjak 52%",
  "deck": "Laba bersih Sumi Indo Kabel turun 59 persen pada semester I tahun fiskal 2027 meski penjualan naik 36 persen, sementara utang bank jangka pendek baru membengkakkan total liabilitas 55 persen.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKBI",
   "laporan keuangan",
   "industri kabel",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028091141-64534-0/FinancialStatement-2026-II-IKBI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-bersih-pbid-melonjak-131-ke-rp695-8-miliar-per-september",
  "category": "Aksi Korporasi",
  "title": "Laba Bersih PBID [Melonjak] 131% ke Rp695,8 Miliar per September",
  "deck": "PBID mencatat laba bersih Rp695,78 miliar pada sembilan bulan 2026, naik 131,7 persen dari Rp300,28 miliar tahun lalu, didorong penjualan naik 27,4 persen dan margin yang menebal.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PBID",
   "laporan keuangan",
   "kemasan plastik",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261028091848-64920-0/FinancialStatement-2026-III-PBID.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-koreksi-jadwal-dividen-interim-rp430-per-saham",
  "category": "Aksi Korporasi",
  "title": "UNTR Koreksi Jadwal Dividen Interim, [Rp430] per Saham",
  "deck": "United Tractors mengoreksi jadwal dividen interim 2026, memastikan dividen Rp430 per saham dengan total hingga Rp1,48 triliun, dibayar 23 November 2026.",
  "date": "28 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "dividen",
   "United Tractors",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/68428e7480_6a23576b8e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menperin-minta-gula-impor-tak-bocor-ke-pasar-konsumen",
  "category": "Industri",
  "title": "Menperin Minta Gula [Impor] Tak Bocor ke Pasar Konsumen",
  "deck": "Menperin Sarmuji minta AGRI memastikan gula rafinasi untuk industri tidak merembes jadi gula konsumsi, demi melindungi petani tebu dan konsumen.",
  "date": "27 Oktober 2026",
  "image": "assets/img/menperin-minta-gula-impor-tak-bocor-ke-pasar-konsumen.jpg",
  "imageV": "mvr7n9fh",
  "tags": [
   "gula rafinasi",
   "impor gula",
   "petani tebu",
   "Kemenperin"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475323-menperin-sarmuji-minta-produsen-jaga-gula-rafinasi-agar-tak-rembes-ke-pasaran"
 },
 {
  "slug": "honda-hr-v-teratas-di-penjualan-suv-ringkas-2026",
  "category": "Industri",
  "title": "Honda HR-V [Teratas] di Penjualan SUV Ringkas 2026",
  "deck": "Honda HR-V memimpin penjualan SUV ringkas Januari-September 2026 dengan 4.736 unit atau 24,1 persen pasar, disusul ketat oleh Xforce, Creta, Yaris Cross, dan Tiggo Cross.",
  "date": "27 Oktober 2026",
  "image": "assets/img/honda-hr-v-teratas-di-penjualan-suv-ringkas-2026.jpg",
  "imageV": "mvqvzzkq",
  "tags": [
   "GAIKINDO",
   "Honda HR-V",
   "SUV ringkas",
   "hybrid"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/penjualan-suv-ringkas-september-2026-hr-v-dan-xforce-di-atas/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "konsumsi-ri-tumbuh-5-pemerintah-soroti-lonjakan-belanja-online",
  "category": "Makroekonomi",
  "title": "Konsumsi RI Tumbuh 5%, Pemerintah Soroti Lonjakan Belanja [Online]",
  "deck": "Pemerintah menyebut konsumsi rumah tangga tumbuh di atas 5 persen pada kuartal II 2026, didorong pergeseran belanja ke platform online dan pemerataan pertumbuhan di 17 provinsi.",
  "date": "27 Oktober 2026",
  "image": "assets/img/keranjang-belanja-ibu.jpg",
  "tags": [
   "konsumsi rumah tangga",
   "belanja online",
   "pertumbuhan ekonomi daerah",
   "inflasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7187/pemerintah-perkuat-daya-beli-masyarakat-dan-jaga-stabilitas-ekonomi-di-tengah-dinamika-global",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "dagang-ri-as-tembus-us-32-34-miliar-investasi-as-naik",
  "category": "Global",
  "title": "Dagang RI-AS [Tembus] US$32,34 Miliar, Investasi AS Naik",
  "deck": "Menko Airlangga dan US-ASEAN Business Council membahas penguatan dagang dan investasi RI-AS, dengan nilai perdagangan naik 11,82 persen dan investasi AS tembus US$3,4 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "perdagangan RI-AS",
   "investasi asing",
   "Kemenko Perekonomian",
   "Section 301"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7188/indonesia-as-perkuat-kemitraan-ekonomi-menko-airlangga-dorong-investasi-bernilai-tambah",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bi-dan-apuvindo-susun-empat-prioritas-pasar-uang-valas-2027",
  "category": "Moneter",
  "title": "BI dan APUVINDO Susun [Empat] Prioritas Pasar Uang-Valas 2027",
  "deck": "Bank Indonesia, OJK, dan APUVINDO menyusun empat prioritas pengembangan pasar uang dan valas menjelang 2027, termasuk bank kliring Renminbi dan akses lindung nilai investor asing.",
  "date": "27 Oktober 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "Bank Indonesia",
   "APUVINDO",
   "Pasar Uang",
   "Renminbi"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2823726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "lapd-terbitkan-2-miliar-saham-baru-dibayar-saham-tambang-inbreng",
  "category": "Aksi Korporasi",
  "title": "LAPD Terbitkan 2 Miliar Saham Baru, Dibayar Saham Tambang [Inbreng]",
  "deck": "LAPD akan menerbitkan hingga 2 miliar saham baru lewat rights issue; pengendali JSI membayar hak sahamnya pakai saham tambang batu bara, bukan uang tunai.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "HMETD",
   "tambang batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4621dcab4a_79929ad8d2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-laba-bersih-9m26-tumbuh-46-jadi-rp9-66-triliun",
  "category": "Aksi Korporasi",
  "title": "ANTM: Laba Bersih 9M26 [Tumbuh] 46% Jadi Rp9,66 Triliun",
  "deck": "PT ANTAM membukukan laba bersih Rp9,66 triliun pada sembilan bulan pertama 2026, naik 46%, ditopang penjualan emas dan nikel yang tumbuh dua digit.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "laba bersih",
   "pertambangan",
   "emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4f2ed157e5_2d4734d3b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bach-aset-naik-88-usai-ipo-arus-kas-operasi-negatif",
  "category": "Aksi Korporasi",
  "title": "BACH: Aset Naik 88% Usai IPO, Arus Kas Operasi [Negatif]",
  "deck": "Total aset BACH melonjak 88,41 persen jadi Rp2,32 triliun pascapenambahan utang bank dan IPO, sementara arus kas operasi tercatat negatif Rp400,13 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BACH",
   "laporan keuangan",
   "IPO",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027215533-65099-0/FinancialStatement-2026-III-BACH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asli-catat-laba-rp5-8-miliar-aset-naik-47-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "ASLI Catat [Laba] Rp5,8 Miliar, Aset Naik 47% per September 2026",
  "deck": "Laporan kuartal III 2026 Asri Karya Lestari menunjukkan laba berbalik dari rugi, ditopang proyek baru, meski liabilitas ikut melonjak tajam.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLI",
   "laporan keuangan",
   "konstruksi",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027210115-64662-0/FinancialStatement-2026-III-ASLI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-terbitkan-502-8-juta-saham-baru-ke-afiliasi",
  "category": "Aksi Korporasi",
  "title": "BIPP Terbitkan 502,8 Juta Saham Baru ke [Afiliasi]",
  "deck": "BIPP menerbitkan 502.866.937 saham baru seharga Rp200 per saham kepada dua pihak terafiliasi, menghimpun dana Rp100,57 miliar tanpa mengubah pengendalian perusahaan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "PMTHMETD",
   "Dilusi Saham",
   "Transaksi Afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2caa95deda_65489187d2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-kejar-reformasi-pasar-modal-sebelum-tenggat-msci-2027",
  "category": "Pasar Modal",
  "title": "RI Kejar [Reformasi] Pasar Modal Sebelum Tenggat MSCI 2027",
  "deck": "Pemerintah menaikkan syarat free float jadi 15 persen dan memperkuat keterbukaan pemilik saham menjelang tenggat evaluasi MSCI pada 30 April 2027.",
  "date": "27 Oktober 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "MSCI",
   "pasar modal",
   "free float",
   "OJK"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7186/reformasi-tata-kelola-pasar-modal-berikan-manfaat-nyata-bagi-masyarakat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "aali-laba-bersih-kuartal-iii-melonjak-77-ke-rp1-98-triliun",
  "category": "Aksi Korporasi",
  "title": "AALI: Laba Bersih Kuartal III [Melonjak] 77% ke Rp1,98 Triliun",
  "deck": "Astra Agro Lestari mencatat laba bersih Rp1,98 triliun dan kas dua kali lipat, tapi liabilitas juga naik 79% akibat tagihan pupuk dan asuransi yang belum dibayar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "laporan keuangan",
   "laba bersih",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027200626-64754-0/FinancialStatement-2026-III-AALI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "perpres-baru-permudah-distribusi-pupuk-subsidi-ke-petani",
  "category": "BUMN",
  "title": "Perpres Baru Permudah Distribusi [Pupuk] Subsidi ke Petani",
  "deck": "Pupuk Indonesia memantau stok dan penebusan pupuk subsidi secara real-time untuk musim tanam, didukung penyederhanaan distribusi lewat Perpres Nomor 113 Tahun 2025.",
  "date": "27 Oktober 2026",
  "image": "assets/img/perpres-baru-permudah-distribusi-pupuk-subsidi-ke-petani.jpg",
  "imageV": "mvqm8rf6",
  "tags": [
   "Pupuk Indonesia",
   "pupuk subsidi",
   "musim tanam",
   "Perpres 113/2025"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/895/pupuk-indonesia-siap-penuhi-kebutuhan-pupuk-saat-musim-tanam",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "cara-petani-kenali-pupuk-subsidi-asli-di-kios-resmi",
  "category": "BUMN",
  "title": "Cara Petani Kenali Pupuk Subsidi [Asli] di Kios Resmi",
  "deck": "Pupuk Indonesia mengimbau petani menebus pupuk bersubsidi hanya lewat kios resmi atau PPTS, serta memeriksa kemasan agar terhindar dari pupuk tiruan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/cara-petani-kenali-pupuk-subsidi-asli-di-kios-resmi.jpg",
  "imageV": "mvqm8sod",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Subsidi",
   "PPTS",
   "Pupuk Palsu"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/896/membeli-pupuk-subsidi-di-kios-resmi-lebih-aman",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "gtbo-rombak-direksi-dan-komisaris-rupst-18-november",
  "category": "Aksi Korporasi",
  "title": "GTBO Rombak [Direksi] dan Komisaris, RUPST 18 November",
  "deck": "RUPST Garda Tujuh Buana (GTBO) pada 18 November 2026 akan mengesahkan laporan keuangan 2025 dan mengganti sejumlah direksi serta komisaris, termasuk satu komisaris independen baru.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "RUPST",
   "pergantian direksi",
   "komisaris independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/39c1f811b1_b0668e2b24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-jadwalkan-saham-bonus-distribusi-25-november-2026",
  "category": "Aksi Korporasi",
  "title": "PPGL Jadwalkan [Saham Bonus], Distribusi 25 November 2026",
  "deck": "RUPSLB setujui pembagian 514,1 juta saham bonus rasio 6:4 dari agio saham IPO 2020, saham beredar PPGL naik jadi maksimal 1,28 miliar lembar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "saham bonus",
   "aksi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/4925bb1607_dcb3b7db02.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-of-india-indonesia-bswd-laba-naik-ldr-tembus-144",
  "category": "Aksi Korporasi",
  "title": "Bank of India Indonesia (BSWD): Laba Naik, [LDR] Tembus 144%",
  "deck": "BSWD menjelaskan ke Bursa bahwa laba bersihnya naik 74,95% per Agustus 2026, tapi dana nasabah turun 10,58% dan rasio kredit terhadap simpanan melonjak ke 144,15%.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSWD",
   "LDR",
   "perbankan",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/48ed7f923f_8a5f86b480.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nine-panggil-rupslb-bahas-rights-issue-2-44-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "NINE Panggil RUPSLB, Bahas [Rights Issue] 2,44 Miliar Saham",
  "deck": "Techno9 Indonesia mengundang RUPSLB 18 November 2026, agendakan pergantian direksi-komisaris, rights issue hingga 2,44 miliar saham, dan penerbitan surat utang baru.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NINE",
   "RUPSLB",
   "Rights Issue",
   "Techno9 Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e34b21dc76_7b183d18a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msin-paparkan-strategi-v-short-dan-integrasi-rcti-vision",
  "category": "Aksi Korporasi",
  "title": "MSIN Paparkan Strategi [V+Short] dan Integrasi RCTI+-Vision+",
  "deck": "Dalam public expose insidentil atas permintaan BEI, manajemen MSIN memaparkan rencana integrasi RCTI+ dan Vision+ serta target pertumbuhan platform V+Short di pasar global.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIN",
   "Public Expose",
   "V+Short",
   "RCTI+"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/0e3cdecedd_8d2253b24b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "maha-laba-bersih-9m-melonjak-122-liabilitas-susut-28",
  "category": "Aksi Korporasi",
  "title": "MAHA: Laba Bersih 9M Melonjak 122%, [Liabilitas] Susut 28%",
  "deck": "Laba bersih sembilan bulan MAHA melonjak 122 persen menjadi Rp167,9 miliar, ditopang turunnya kerugian investasi saham, sementara liabilitas turun 27,8 persen.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAHA",
   "laporan keuangan",
   "laba bersih",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027173315-64492-0/FinancialStatement-2026-III-MAHA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtps-panggil-rupslb-ketiga-soal-penjualan-gedung-kantor",
  "category": "Aksi Korporasi",
  "title": "MTPS Panggil RUPSLB [Ketiga] Soal Penjualan Gedung Kantor",
  "deck": "RUPSLB Independen ketiga MTPS digelar 3 November 2026 setelah dua rapat sebelumnya gagal kuorum, membahas penjualan gedung kantor seluas 4.802 m2 di Jakarta Timur.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTPS",
   "RUPSLB",
   "penjualan aset",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/cc5c5835fd_65cac54cfb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-panggil-rupslb-bahas-pengunduran-direktur-dan-revisi-ad",
  "category": "Aksi Korporasi",
  "title": "INCO Panggil RUPSLB, Bahas [Pengunduran] Direktur dan Revisi AD",
  "deck": "Vale Indonesia memanggil RUPSLB pada 18 November 2026 untuk meratifikasi pengunduran diri seorang direktur dan menyesuaikan anggaran dasar dengan KBLI 2025.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "RUPSLB",
   "Vale Indonesia",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f2ef8b3f5a_edaab30bbf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asgr-laba-bersih-naik-15-jadi-rp209-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "ASGR: [Laba Bersih] Naik 15% Jadi Rp209 Miliar di Kuartal III 2026",
  "deck": "Astra Graphia mencatat pendapatan Rp2,35 triliun dan laba bersih Rp209 miliar untuk sembilan bulan 2026, meski ekuitas turun karena dividen final 2025 senilai Rp284,6 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASGR",
   "Astra Graphia",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027172333-64816-0/FinancialStatement-2026-III-ASGR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-utang-ke-bank-permata-pindah-ke-pjs-lewat-cessie",
  "category": "Aksi Korporasi",
  "title": "ANDI: Utang ke Bank Permata Pindah ke PJS Lewat [Cessie]",
  "deck": "Andira Agro menjelaskan ke BEI bahwa utang banknya kini beralih dari Bank Permata ke PT Puncak Jaya Sejahtera, pengendali baru yang juga baru mengambil alih 33% saham pengendali.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "Andira Agro",
   "cessie",
   "Puncak Jaya Sejahtera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/99503b7da0_92a18e0ed1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "city-bukukan-laba-rp17-8-miliar-naik-49-6-di-9-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "CITY Bukukan Laba Rp17,8 Miliar, [Naik] 49,6% di 9 Bulan 2026",
  "deck": "Laporan keuangan interim kuartal III 2026 Natura City Developments menunjukkan laba sembilan bulan naik 49,6% menjadi Rp17,83 miliar, sementara total aset tumbuh jadi Rp1,14 triliun.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITY",
   "laporan keuangan",
   "properti",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027100931-64407-0/FinancialStatement-2026-III-CITY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-fitch-turunkan-peringkat-obligasi-ke-gagal-bayar",
  "category": "Aksi Korporasi",
  "title": "POST: Fitch Turunkan Peringkat Obligasi ke [Gagal Bayar]",
  "deck": "Fitch Ratings Indonesia menurunkan peringkat Obligasi I Pos Indonesia Tahun 2022 dari C(idn) menjadi D(idn), level yang menurut metodologi Fitch berarti status gagal bayar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "Obligasi",
   "Fitch Ratings"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/70ff8c3864_d5b9d5de1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "imfi-siapkan-dana-rp593-54-miliar-lunasi-obligasi",
  "category": "Aksi Korporasi",
  "title": "IMFI Siapkan Dana Rp593,54 Miliar [Lunasi] Obligasi",
  "deck": "Indomobil Finance menyatakan telah menyiapkan dana Rp593,54 miliar untuk melunasi pokok dan bunga ke-20 obligasi seri C yang jatuh tempo 19 November 2026.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMFI",
   "obligasi",
   "Indomobil Finance",
   "pelunasan obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9a1764e45a_b168b532b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbca-catat-laba-bersih-rp45-2-triliun-per-september-2026",
  "category": "Aksi Korporasi",
  "title": "BBCA Catat Laba Bersih [Rp45,2 Triliun] per September 2026",
  "deck": "BBCA mencetak laba bersih Rp45,24 triliun pada sembilan bulan 2026, naik 4,2 persen, didukung pertumbuhan kredit dan simpanan nasabah.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBCA",
   "laporan keuangan",
   "laba bersih",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027164104-65005-0/FinancialStatement-2026-III-BBCA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jpfa-capex-2026-diproyeksi-tembus-rp4-triliun",
  "category": "Aksi Korporasi",
  "title": "JPFA: Capex 2026 Diproyeksi Tembus [Rp4 Triliun]",
  "deck": "Dalam public expose tahunan 22 Oktober 2026, manajemen JPFA membahas realisasi buyback, divestasi Vaksindo, dan capex semester I yang sudah Rp2,16 triliun.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "Japfa Comfeed",
   "Public Expose",
   "Capex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/be7b2e0891_c116145e96.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jarr-catat-laba-melonjak-56-ke-rp349-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "JARR Catat Laba [Melonjak] 56% ke Rp349 Miliar di Kuartal III 2026",
  "deck": "Laba bersih JARR naik 56 persen jadi Rp349,27 miliar pada kuartal III 2026, didorong penjualan yang tumbuh 14 persen menjadi Rp3,53 triliun.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JARR",
   "laporan keuangan",
   "laba bersih",
   "kelapa sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027163459-64935-0/FinancialStatement-2026-III-JARR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sgro-pangkas-utang-rp2-triliun-liabilitas-turun-30",
  "category": "Aksi Korporasi",
  "title": "SGRO Pangkas [Utang] Rp2 Triliun, Liabilitas Turun 30%",
  "deck": "SGRO melaporkan keuangan interim kuartal III 2026 sekaligus menjelaskan ke bursa bahwa total utangnya turun 30 persen setelah melunasi pinjaman bank dan obligasi senilai sekitar Rp2 triliun.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGRO",
   "laporan keuangan",
   "utang",
   "kelapa sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027163338-65017-0/FinancialStatement-2026-III-SGRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-sewakan-lahan-riau-ke-arara-abadi-transaksi-afiliasi",
  "category": "Aksi Korporasi",
  "title": "INKP Sewakan Lahan Riau ke Arara Abadi, Transaksi [Afiliasi]",
  "deck": "INKP menyewakan lahan 47.526 meter persegi di Siak, Riau kepada PT Arara Abadi, pemasok bahan baku yang terafiliasi, dengan harga Rp190 juta per tahun selama 20 tahun.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "transaksi afiliasi",
   "Arara Abadi",
   "sewa lahan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/de7922af34_07d18031f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-koreksi-data-akuisisi-pne-bum-rp1-t-dana-rk-mandek",
  "category": "Aksi Korporasi",
  "title": "BIKE [Koreksi] Data Akuisisi PNE-BUM, Rp1 T Dana RK Mandek",
  "deck": "Dalam surat koreksi ke Bursa, BIKE merinci keuangan PNE dan BUM serta mengonfirmasi dana akuisisi RK Rp1 triliun dari PMJ belum cair.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/992593f2b7_d6a76dcc36.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inta-catat-defisiensi-modal-rp2-17-triliun-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "INTA Catat [Defisiensi Modal] Rp2,17 Triliun di Kuartal III 2026",
  "deck": "Ekuitas Intraco Penta kian negatif menjadi Rp2,17 triliun per September 2026, pendapatan turun 11 persen, dan rugi untuk pemegang saham induk justru membesar dari tahun lalu.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTA",
   "Intraco Penta",
   "defisiensi modal",
   "laporan keuangan kuartalan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027155941-64669-0/FinancialStatement-2026-III-INTA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-laba-naik-39-borong-saham-treasuri-rp451-66-miliar",
  "category": "Aksi Korporasi",
  "title": "IMPC Laba Naik 39%, Borong [Saham Treasuri] Rp451,66 Miliar",
  "deck": "Pendapatan dan laba bersih Impack Pratama Industri tumbuh dua digit pada sembilan bulan pertama 2026, sementara perseroan membeli kembali sahamnya sendiri senilai Rp451,66 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "laporan keuangan",
   "laba bersih",
   "saham treasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027155415-65161-0/FinancialStatement-2026-III-IMPC.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xcid-bagikan-dividen-tunai-rp601-6-juta-ke-pemegang-unit",
  "category": "Aksi Korporasi",
  "title": "XCID Bagikan [Dividen] Tunai Rp601,6 Juta ke Pemegang Unit",
  "deck": "DIRE Ciptadana Properti Ritel Indonesia (XCID) menjadwalkan dividen tunai final hingga Rp0,1504 per unit penyertaan, dibayar 20 November 2026.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XCID",
   "dividen",
   "DIRE",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/bf8dc68bbe_3a52c3e430.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wirg-rombak-total-direksi-anak-usaha-horeca-akar-mimpi",
  "category": "Aksi Korporasi",
  "title": "WIRG Rombak Total [Direksi] Anak Usaha Horeca Akar Mimpi",
  "deck": "PT WIR ASIA Tbk mengganti seluruh komisaris dan direksi anak usahanya, PT Horeca Akar Mimpi, efektif 14 Oktober 2026.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIRG",
   "Horeca Akar Mimpi",
   "direksi",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/96bdd90b74_c531fbd9ae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bina-jadwalkan-pelaksanaan-pmthmetd-3-november-2026",
  "category": "Aksi Korporasi",
  "title": "BINA Jadwalkan Pelaksanaan [PMTHMETD] 3 November 2026",
  "deck": "Bank Ina Perdana akan menerbitkan hingga 80 juta saham baru tanpa hak memesan efek terlebih dahulu pada 3 November 2026, mengacu keputusan RUPS Independen Juni 2026.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINA",
   "PMTHMETD",
   "Bank Ina Perdana",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2924462aed_9d41ecd6fa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fuji-total-kewajiban-turun-47-laba-kuartal-iii-susut",
  "category": "Aksi Korporasi",
  "title": "FUJI: Total Kewajiban [Turun] 47%, Laba Kuartal III Susut",
  "deck": "Total kewajiban FUJI turun hampir separuh dalam sembilan bulan 2026, tapi pendapatan dari pembiayaan konsumen anjlok dan laba bersih ikut tergerus 23 persen dibanding tahun lalu.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUJI",
   "laporan keuangan",
   "pembiayaan konsumen",
   "kewajiban"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027145201-64591-0/FinancialStatement-2026-III-FUJI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bukk-tanggapi-bursa-pemegang-saham-fokus-penuhi-free-float",
  "category": "Aksi Korporasi",
  "title": "BUKK Tanggapi Bursa, Pemegang Saham Fokus Penuhi [Free Float]",
  "deck": "BUKK menjawab permintaan penjelasan BEI atas volatilitas sahamnya, menegaskan tak ada aksi korporasi dekat ini dan pemegang saham utama fokus memenuhi syarat free float.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKK",
   "volatilitas saham",
   "free float",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2c16ea3994_2e00e08120.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-aset-naik-212-usai-akuisisi-blok-madura-laba-dobel",
  "category": "Aksi Korporasi",
  "title": "RATU: Aset Naik [212%] Usai Akuisisi Blok Madura, Laba Dobel",
  "deck": "Akuisisi 20 persen saham di Blok Madura mendorong aset RATU melonjak 212 persen dan laba sembilan bulan naik hampir dua kali lipat, dibiayai obligasi, sukuk, dan pinjaman bank baru.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RATU",
   "akuisisi",
   "migas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027144752-64789-0/FinancialStatement-2026-III-RATU.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-tegaskan-direksi-baru-usai-lolos-uji-kepatutan-ojk",
  "category": "Aksi Korporasi",
  "title": "PNMP Tegaskan Direksi Baru Usai Lolos [Uji Kepatutan] OJK",
  "deck": "PT Permodalan Nasional Madani (PNMP) menyampaikan akta penegasan RUPS yang mengukuhkan direktur utama dan komisaris baru usai lolos uji kepatutan OJK.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "Permodalan Nasional Madani",
   "RUPS",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/98ffe836a5_0b8bad15a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaii-tawarkan-obligasi-dan-sukuk-ijarah-rp1-1-triliun",
  "category": "Aksi Korporasi",
  "title": "KAII Tawarkan [Obligasi] dan Sukuk Ijarah Rp1,1 Triliun",
  "deck": "KAI menerbitkan obligasi dan sukuk ijarah tahap I senilai total Rp1,1 triliun untuk pemodal profesional, bagian dari program Rp4,1 triliun, dengan rating AAA dari Pefindo.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KAII",
   "obligasi",
   "sukuk ijarah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6fe517c3db_5a20405aec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-jadwalkan-rupslb-3-desember-dps-10-november",
  "category": "Aksi Korporasi",
  "title": "RLCO Jadwalkan [RUPSLB] 3 Desember, DPS 10 November",
  "deck": "RLCO akan menggelar Rapat Umum Pemegang Saham Luar Biasa pada 3 Desember 2026, dengan pencatatan pemegang saham pada 10 November 2026.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "RUPSLB",
   "pasar modal",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/71c9b893b2_14b711959e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-bantah-info-material-soal-lonjakan-saham-gelar-rupslb",
  "category": "Aksi Korporasi",
  "title": "RLCO Bantah Info Material soal Lonjakan Saham, Gelar [RUPSLB]",
  "deck": "RLCO menjawab permintaan penjelasan Bursa atas lonjakan harga dan transaksi sahamnya pada 22 Oktober 2026, sambil mengonfirmasi RUPSLB 3 Desember untuk ganti direksi dan sesuaikan KBLI.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "RUPSLB",
   "volatilitas saham",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/9e6994069d_90aa00b484.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipcm-laba-bersih-turun-33-jadi-rp94-1-miliar-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "IPCM: Laba Bersih [Turun] 33% Jadi Rp94,1 Miliar Kuartal III",
  "deck": "Laba bersih Jasa Armada Indonesia turun 33 persen menjadi Rp94,1 miliar dalam sembilan bulan 2026, tertekan kenaikan beban pokok pendapatan yang lebih cepat dari penjualan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCM",
   "laba bersih",
   "laporan keuangan",
   "Pelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027135055-64986-0/FinancialStatement-2026-III-IPCM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ltls-laba-9-bulan-melonjak-jadi-rp276-miliar",
  "category": "Aksi Korporasi",
  "title": "LTLS: Laba 9 Bulan [Melonjak] Jadi Rp276 Miliar",
  "deck": "Lautan Luas mencatat laba periode berjalan Rp276,1 miliar pada sembilan bulan pertama 2026, naik dari Rp141,3 miliar, ditopang pendapatan yang tumbuh 27,6 persen.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LTLS",
   "laporan keuangan",
   "industri kimia",
   "emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027135956-64494-0/FinancialStatement-2026-III-LTLS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "drma-catat-laba-rp487-6-miliar-kuartal-iii-naik-13-9",
  "category": "Aksi Korporasi",
  "title": "DRMA Catat Laba [Rp487,6 Miliar] Kuartal III, Naik 13,9%",
  "deck": "Penjualan neto Dharma Polimetal naik 16 persen jadi Rp5,10 triliun dalam sembilan bulan 2026, laba bersih naik 13,9 persen menjadi Rp487,63 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Dharma Polimetal",
   "laporan keuangan",
   "otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027135042-64985-0/FinancialStatement-2026-III-DRMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intp-jadwalkan-rupslb-3-desember-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "INTP Jadwalkan [RUPSLB] 3 Desember, Agenda Belum Diumumkan",
  "deck": "Indocement memberitahukan rencana RUPSLB pada 3 Desember 2026, tapi agenda resminya baru akan diumumkan 11 November 2026 lewat panggilan rapat.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTP",
   "RUPSLB",
   "Indocement",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/a4956f8705_6f74be3c6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hmsp-catat-laba-melonjak-44-jadi-rp6-51-triliun",
  "category": "Aksi Korporasi",
  "title": "HMSP Catat Laba [Melonjak] 44% Jadi Rp6,51 Triliun",
  "deck": "Laba bersih HM Sampoerna naik dari Rp4,51 triliun menjadi Rp6,51 triliun pada sembilan bulan 2026, ditopang pendapatan yang tumbuh dan arus kas operasi yang menguat.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HMSP",
   "laporan keuangan",
   "laba bersih",
   "rokok"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027130331-65016-0/FinancialStatement-2026-III-HMSP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekspor-pakaian-jadi-ri-naik-2-8-persen-incar-pasar-global",
  "category": "Industri",
  "title": "Ekspor Pakaian Jadi RI Naik 2,8 Persen, Incar Pasar [Global]",
  "deck": "Wamendag Roro mendorong desainer dan UMKM fesyen memperluas ekspor saat membuka FashionLink JFW 2027, di tengah ekspor pakaian jadi RI yang hanya naik 2,8 persen pada Januari-Agustus 2026.",
  "date": "27 Oktober 2026",
  "image": "assets/img/ekspor-pakaian-jadi-ri-naik-2-8-persen-incar-pasar-global.jpg",
  "imageV": "mvq9e7ef",
  "tags": [
   "ekspor fesyen",
   "tekstil",
   "JFW 2027",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perluas-akses-pasar-wamendag-roro-dorong-fashionlink-jfw-2027-jadi-jembatan-fesyen-lokal-ke-pasar-global",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "jecx-laba-bersih-turun-38-meski-rampungkan-ipo-rp377-m",
  "category": "Aksi Korporasi",
  "title": "JECX: Laba Bersih [Turun] 38% Meski Rampungkan IPO Rp377 M",
  "deck": "Laporan interim kuartal III 2026 JECX menunjukkan laba bersih turun 38 persen dan laba per saham longsor 48 persen, meski dana IPO Rp377 miliar memperkuat ekuitas dan memangkas utang bank.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JECX",
   "laporan keuangan",
   "IPO",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027120655-64697-0/FinancialStatement-2026-III-JECX.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-sediakan-daycare-mini-untuk-nasabah-umkm-pontianak",
  "category": "UMKM",
  "title": "PNM Sediakan [Daycare] Mini untuk Nasabah UMKM Pontianak",
  "deck": "PNM menggelar acara pengembangan usaha bertema lingkungan di Pontianak, dilengkapi penitipan anak sementara, cek kesehatan gratis, dan klinik konsultasi usaha bagi nasabah perempuan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/pnm-sediakan-daycare-mini-untuk-nasabah-umkm-pontianak.jpg",
  "imageV": "mvq9e7y1",
  "tags": [
   "PNM",
   "UMKM Perempuan",
   "Pontianak",
   "Pemberdayaan Usaha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475189-dari-ruang-belajar-hingga-potensi-lokal-pnm-dukung-perempuan-pontianak-kembangkan-usaha"
 },
 {
  "slug": "ceka-laba-bersih-naik-52-jadi-rp243-7-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "CEKA: Laba Bersih Naik [52%] jadi Rp243,7 Miliar di Kuartal III",
  "deck": "Laba bersih Wilmar Cahaya Indonesia (CEKA) melonjak 52 persen jadi Rp243,7 miliar pada sembilan bulan 2026, didukung kenaikan pendapatan 19 persen, meski kas perusahaan menyusut tajam.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CEKA",
   "Wilmar Cahaya Indonesia",
   "laporan keuangan kuartal III",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027115734-64518-0/FinancialStatement-2026-III-CEKA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koni-bukukan-laba-rp10-6-miliar-utang-usaha-nyaris-lunas",
  "category": "Aksi Korporasi",
  "title": "KONI Bukukan [Laba] Rp10,6 Miliar, Utang Usaha Nyaris Lunas",
  "deck": "Laba bersih KONI naik 41 persen menjadi Rp10,65 miliar pada kuartal III 2026, sementara total liabilitas turun lebih dari separuh setelah utang usaha nyaris lunas.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KONI",
   "laporan keuangan",
   "laba bersih",
   "utang usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027115457-65032-0/FinancialStatement-2026-III-KONI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wmuu-audit-kuartal-iii-untuk-siapkan-aksi-korporasi",
  "category": "Aksi Korporasi",
  "title": "WMUU Audit Kuartal III untuk Siapkan [Aksi Korporasi]",
  "deck": "Widodo Makmur Unggas akan mengaudit laporan keuangan interim per 30 September 2026 untuk mendukung rencana aksi korporasi yang masih disusun bersama konsultan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WMUU",
   "Widodo Makmur Unggas",
   "aksi korporasi",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dd45fb1acd_6af6946bbb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trus-laba-turun-23-persen-dividen-jumbo-gerus-ekuitas",
  "category": "Aksi Korporasi",
  "title": "TRUS: [Laba] turun 23 persen, dividen jumbo gerus ekuitas",
  "deck": "Laba bersih TRUS turun 23 persen di kuartal III 2026, sementara dividen Rp48 miliar yang dibagikan melampaui laba periode ini dan menggerus ekuitas.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUS",
   "Trust Finance Indonesia",
   "laporan keuangan",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027113801-64672-0/FinancialStatement-2026-III-TRUS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-flmc-bahas-rencana-anak-usaha-dan-ganti-domisili",
  "category": "Aksi Korporasi",
  "title": "RUPSLB FLMC Bahas Rencana [Anak Usaha] dan Ganti Domisili",
  "deck": "FLMC memanggil RUPSLB 18 November 2026 untuk membahas penyesuaian KBLI, penambahan KBLI holding terkait rencana anak usaha, dan perubahan domisili Perseroan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "RUPSLB",
   "KBLI",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dc9a3dccc5_b3c9c1e7c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcol-bukukan-laba-bersih-melonjak-55-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "MCOL Bukukan Laba Bersih [Melonjak] 55% di Sembilan Bulan 2026",
  "deck": "PT Prima Andalan Mandiri (MCOL) mencatat pendapatan US$542,2 juta dan laba bersih US$58,0 juta untuk sembilan bulan 2026, naik dibanding periode sama tahun lalu.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOL",
   "batu bara",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027110503-64838-0/FinancialStatement-2026-III-MCOL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibfn-catat-laba-rp7-37-miliar-ekuitas-masih-negatif-rp766-m",
  "category": "Aksi Korporasi",
  "title": "IBFN Catat Laba Rp7,37 Miliar, [Ekuitas] Masih Negatif Rp766 M",
  "deck": "Laporan keuangan interim kuartal III 2026 PT Intan Baru Prana Tbk menunjukkan laba bersih berbalik dari rugi, namun defisiensi modal perusahaan masih sangat besar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBFN",
   "laporan keuangan",
   "defisiensi modal",
   "watchlist"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027110144-64615-0/FinancialStatement-2026-III-IBFN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmlp-bukukan-rugi-rp94-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MMLP Bukukan [Rugi] Rp94 Miliar di Kuartal III 2026",
  "deck": "Mega Manunggal Property mencatat rugi Rp94,03 miliar pada sembilan bulan pertama 2026, terbalik dari laba tahun lalu, akibat kerugian besar dari penjualan saham di entitas asosiasi.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMLP",
   "properti logistik",
   "laporan keuangan",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027033909-64632-0/FinancialStatement-2026-III-MMLP.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tingkat-pengangguran-indonesia-turun-ke-4-65-terendah-sejak-1994",
  "category": "Ketenagakerjaan",
  "title": "Tingkat Pengangguran Indonesia [Turun] ke 4,65%, Terendah Sejak 1994",
  "deck": "BPS mencatat tingkat pengangguran terbuka nasional turun ke 4,65% pada 2026, mendekati level terendah sejak 1994, saat angkatan kerja hampir dua kali lipat dibanding era 1990-an.",
  "date": "27 Oktober 2026",
  "image": "assets/img/bursa-kerja.jpg",
  "tags": [
   "pengangguran",
   "ketenagakerjaan",
   "BPS",
   "pasar kerja"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7182/capai-tingkatan-pengangguran-mendekati-level-terendah-sejak-1994-di-tengah-lonjakan-penciptaan-lapangan-kerja-baru-hingga-dua-kali-lipat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "idrus-marham-ekonomi-ri-jangan-gantung-ke-indeks-msci",
  "category": "Pasar Modal",
  "title": "Idrus Marham: Ekonomi RI Jangan Gantung ke Indeks [MSCI]",
  "deck": "Idrus Marham mendukung pernyataan Dasco soal MSCI, menilai kemandirian ekonomi RI, dari pangan, energi, hingga pasar modal, lebih penting ketimbang penilaian indeks global.",
  "date": "27 Oktober 2026",
  "image": "assets/img/idrus-marham-ekonomi-ri-jangan-gantung-ke-indeks-msci.jpg",
  "imageV": "mvq42qdl",
  "tags": [
   "MSCI",
   "pasar modal",
   "Idrus Marham",
   "Sufmi Dasco Ahmad"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475170-idrus-marham-dukung-pernyataan-dasco-soal-msci-sebut-masa-depan-ekonomi-indonesia-tak-boleh-bergantung-pada-indeks-global"
 },
 {
  "slug": "nick-nyaris-rugi-di-kuartal-iii-2026-ekspansi-ev-berlanjut",
  "category": "Aksi Korporasi",
  "title": "NICK Nyaris [Rugi] di Kuartal III 2026, Ekspansi EV Berlanjut",
  "deck": "Laba Charnic Capital anjlok jadi rugi tipis Rp332 juta akibat kerugian portofolio efek, sementara utang melonjak untuk membiayai ekspansi sewa kendaraan listrik.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "laporan keuangan",
   "kendaraan listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027101405-64949-0/FinancialStatement-2026-III-NICK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-cetak-laba-rp51-67-miliar-di-sembilan-bulan-2026",
  "category": "Aksi Korporasi",
  "title": "KOTA Cetak [Laba] Rp51,67 Miliar di Sembilan Bulan 2026",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan pendapatan KOTA melonjak ke Rp125,05 miliar dan laba bersih Rp51,67 miliar, berbalik dari rugi Rp21,54 miliar setahun sebelumnya.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "laporan keuangan",
   "properti",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027171127-64882-0/FinancialStatement-2026-III-KOTA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-tipis-ke-rp2-550-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] Tipis ke Rp2.550.000 per Gram",
  "deck": "Harga emas Antam naik Rp10.000 menjadi Rp2.550.000 per gram pada 27 Oktober 2026, buyback ikut naik ke Rp2.345.000 per gram.",
  "date": "27 Oktober 2026",
  "image": "assets/img/harga-emas-antam-naik-tipis-ke-rp2-550-000-per-gram.jpg",
  "imageV": "mvq42r8n",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475168-harga-emas-antam-hari-ini-27-oktober-2026-naik-tipis-jadi-rp2550000-per-gram-buyback-ikut-melonjak"
 },
 {
  "slug": "eral-catat-laba-bersih-rp192-5-miliar-naik-54-di-9-bulan",
  "category": "Aksi Korporasi",
  "title": "ERAL Catat Laba Bersih [Rp192,5 Miliar], Naik 54% di 9 Bulan",
  "deck": "Penjualan PT Sinar Eka Selaras Tbk naik 44,7 persen jadi Rp6,21 triliun dalam sembilan bulan 2026, mendorong laba bersih tumbuh ke Rp192,51 miliar dari Rp124,60 miliar setahun sebelumnya.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAL",
   "laporan keuangan",
   "kinerja kuartal III",
   "emiten ritel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027092526-64849-0/FinancialStatement-2026-III-ERAL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sido-laba-9-bulan-turun-24-jadi-rp619-miliar",
  "category": "Aksi Korporasi",
  "title": "SIDO: Laba 9 Bulan [Turun] 24% jadi Rp619 Miliar",
  "deck": "Penjualan dan laba Sido Muncul menyusut dalam sembilan bulan 2026, meski kas naik hampir dua kali lipat dan utang turun sepertiga.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIDO",
   "laporan keuangan",
   "laba bersih",
   "Sido Muncul"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027091931-64843-0/FinancialStatement-2026-III-SIDO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fasw-catat-laba-rp230-miliar-tahun-lalu-rugi-rp731-m",
  "category": "Aksi Korporasi",
  "title": "FASW Catat [Laba] Rp230 Miliar, Tahun Lalu Rugi Rp731 M",
  "deck": "FASW melaporkan laba bersih Rp230,4 miliar untuk sembilan bulan 2026, berbalik dari rugi Rp731,6 miliar pada periode sama tahun lalu, didorong penjualan yang naik 15,6 persen.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FASW",
   "Fajar Surya Wisesa",
   "laporan keuangan",
   "kertas kemasan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027021350-65003-0/FinancialStatement-2026-III-FASW.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbni-laba-naik-6-jadi-rp16-15-triliun-car-turun-ke-19-2",
  "category": "Aksi Korporasi",
  "title": "BBNI: Laba [Naik] 6% Jadi Rp16,15 Triliun, CAR Turun ke 19,2%",
  "deck": "Laba bersih BNI naik 6 persen jadi Rp16,15 triliun dalam sembilan bulan 2026, tapi rasio kecukupan modal turun ke 19,20 persen dan laba komprehensif tergerus kerugian nilai obligasi.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "laba bersih",
   "rasio kecukupan modal",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027083910-64972-0/FinancialStatement-2026-III-BBNI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toyota-teratas-byd-masuk-lima-besar-penjualan-mobil-2026",
  "category": "Industri",
  "title": "Toyota Teratas, BYD Masuk [Lima Besar] Penjualan Mobil 2026",
  "deck": "Distribusi mobil dari pabrikan ke dealer naik 21 persen secara tahunan hingga September 2026, dengan Toyota memimpin dan BYD menembus lima besar berkat pabrik barunya di Subang.",
  "date": "27 Oktober 2026",
  "image": "assets/img/toyota-teratas-byd-masuk-lima-besar-penjualan-mobil-2026.jpg",
  "imageV": "mvpyb7o7",
  "tags": [
   "Otomotif",
   "BYD",
   "Toyota",
   "GAIKINDO"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/whole-sales-januari-september-2026-toyota-teratas-byd-masuk-lima-besar/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "penjualan-mobil-ri-byd-atto-1-nyaris-salip-gran-max",
  "category": "Industri",
  "title": "Penjualan Mobil RI: BYD Atto 1 [Nyaris] Salip Gran Max",
  "deck": "BYD Atto 1 terjual 4.840 unit pada September 2026, tipis di bawah Daihatsu Gran Max yang memimpin lewat kendaraan niaga, sekaligus jadi mobil listrik terlaris.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penjualan-mobil-ri-byd-atto-1-nyaris-salip-gran-max.jpg",
  "imageV": "mvpyb91t",
  "tags": [
   "GAIKINDO",
   "penjualan mobil",
   "mobil listrik",
   "BYD Atto 1"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/20-model-mobil-terlaris-september-2026-atto-1-menempel-gran-max/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "buva-jelaskan-volatilitas-tegaskan-dilusi-rights-issue-203",
  "category": "Aksi Korporasi",
  "title": "BUVA Jelaskan Volatilitas, Tegaskan Dilusi [Rights Issue] 203%",
  "deck": "BUVA menjawab permintaan BEI soal volatilitas transaksi dan menegaskan tidak ada info material baru, kecuali rights issue yang bisa menambah saham hingga 203 persen.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "rights issue",
   "PMHMETD II",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/3d3813f435_149ed8e2ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "labs-laba-bersih-anjlok-40-kas-perusahaan-susut-tajam",
  "category": "Aksi Korporasi",
  "title": "LABS: Laba Bersih Anjlok 40%, Kas Perusahaan [Susut] Tajam",
  "deck": "Laporan keuangan interim kuartal III 2026 menunjukkan laba bersih LABS turun hampir 40 persen secara tahunan, sementara kas perusahaan menyusut dari Rp41,16 miliar menjadi Rp3,67 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LABS",
   "laporan keuangan",
   "arus kas",
   "buyback saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027054427-64794-0/FinancialStatement-2026-III-LABS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpro-rugi-menyempit-jadi-rp33-08-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "MPRO: Rugi [Menyempit] Jadi Rp33,08 Miliar di Kuartal III 2026",
  "deck": "Pendapatan MPRO naik 45 persen dan rugi bersih menyempit jadi Rp33,08 miliar pada sembilan bulan pertama 2026, tapi arus kas operasi makin negatif dan utang jangka pendek bertambah.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPRO",
   "laporan keuangan",
   "properti",
   "kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027041013-64698-0/FinancialStatement-2026-III-MPRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "71-000-rumah-subsidi-diakadkan-serentak-di-malang",
  "category": "Bisnis",
  "title": "71.000 Rumah Subsidi Diakadkan Serentak di [Malang]",
  "deck": "Kementerian PKP menjadwalkan akad massal 71.000 rumah subsidi se-Indonesia dipusatkan di Malang pada Desember 2026, dengan undangan khusus untuk Presiden Prabowo Subianto.",
  "date": "27 Oktober 2026",
  "image": "assets/img/71-000-rumah-subsidi-diakadkan-serentak-di-malang.jpg",
  "imageV": "mvpptvt7",
  "tags": [
   "rumah subsidi",
   "FLPP",
   "Malang",
   "Kementerian PKP"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475132-menteri-maruarar-ungkap-71000-rumah-subsidi-siap-diakadkan-serentak-akhir-tahun-ini"
 },
 {
  "slug": "mahasiswa-pelajar-tangerang-didorong-kembangkan-pangan-lokal",
  "category": "Industri",
  "title": "Mahasiswa-Pelajar Tangerang Didorong Kembangkan [Pangan] Lokal",
  "deck": "Pemkab Tangerang, Swiss German University, dan Hokkaido University berkolaborasi riset pangan lokal, sekaligus melibatkan pelajar SMA dan mahasiswa lewat workshop dan pameran.",
  "date": "27 Oktober 2026",
  "image": "assets/img/mahasiswa-pelajar-tangerang-didorong-kembangkan-pangan-lokal.jpg",
  "imageV": "mvpp31z4",
  "tags": [
   "Tangerang",
   "Pangan",
   "Pendidikan",
   "Pertanian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475131-mahasiswa-dan-pelajar-di-tangerang-didorong-ikut-kembangkan-sektor-pangan-dan-pertanian"
 },
 {
  "slug": "ptpp-panggil-rups-sukuk-ajukan-penundaan-bagi-hasil-ke-2027",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPS Sukuk, Ajukan [Penundaan] Bagi Hasil ke 2027",
  "deck": "PTPP mengundang pemegang Sukuk Mudharabah Tahap II 2022 ke RUPSu 10 November 2026 untuk memutuskan penundaan atau pemotongan bagi hasil sampai jatuh tempo 2027, menyusul gagal bayar sebelumnya.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "sukuk",
   "restrukturisasi utang",
   "RUPSu"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/076342a0ef_d625849c1f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elsa-laba-elnusa-tumbuh-29-jadi-rp681-55-miliar-di-q3",
  "category": "Aksi Korporasi",
  "title": "ELSA: [Laba] Elnusa Tumbuh 29% jadi Rp681,55 Miliar di Q3",
  "deck": "Elnusa membukukan pendapatan Rp12,13 triliun dan laba bersih Rp681,55 miliar pada sembilan bulan 2026, naik dibanding periode sama tahun lalu, sementara kas perusahaan menyusut Rp568,9 miliar.",
  "date": "27 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "laporan keuangan",
   "BUMN energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261027092058-64847-0/FinancialStatement-2026-III-ELSA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-periksa-kebun-sawit-diduga-nyambi-tambang",
  "category": "Energi",
  "title": "ESDM Periksa Kebun Sawit Diduga Nyambi [Tambang]",
  "deck": "Kementerian ESDM akan mengawasi dan memeriksa kebun kelapa sawit yang diduga merangkap usaha tambang tanpa izin, dengan sejumlah perusahaan asing jadi sorotan.",
  "date": "27 Oktober 2026",
  "image": "assets/img/esdm-periksa-kebun-sawit-diduga-nyambi-tambang.jpg",
  "imageV": "mvpp32wt",
  "tags": [
   "ESDM",
   "sawit",
   "tambang ilegal",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475126-ditengarai-libatkan-perusahaan-asing-kementerian-esdm-periksa-kebun-sawit-yang-jalankan-usaha-tambang"
 },
 {
  "slug": "esdm-selidiki-kebun-sawit-yang-diduga-rangkap-usaha-tambang",
  "category": "Energi",
  "title": "ESDM [Selidiki] Kebun Sawit yang Diduga Rangkap Usaha Tambang",
  "deck": "Kementerian ESDM akan memeriksa kebun kelapa sawit yang diduga ikut menjalankan usaha tambang tanpa izin tambahan, dengan sejumlah perusahaan asing disebut turut didalami.",
  "date": "27 Oktober 2026",
  "image": "assets/img/esdm-selidiki-kebun-sawit-yang-diduga-rangkap-usaha-tambang.jpg",
  "imageV": "mvpinxrd",
  "tags": [
   "ESDM",
   "Kelapa Sawit",
   "Tambang Ilegal",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/ditengarai-libatkan-perusahaan-asing-esdm-dalami-kebun-sawit-yang-jalankan-usaha-tambang",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ekspor-gas-pipa-dipotong-8-diprioritaskan-untuk-pln",
  "category": "Energi",
  "title": "Ekspor Gas Pipa Dipotong [8%], Diprioritaskan untuk PLN",
  "deck": "Pemerintah memangkas ekspor gas pipa ke negara tetangga sekitar 8 persen untuk mengamankan pasokan PLN dan industri, masih dalam batas kontrak menurut Menteri ESDM.",
  "date": "27 Oktober 2026",
  "image": "assets/img/ekspor-gas-pipa-dipotong-8-diprioritaskan-untuk-pln.jpg",
  "imageV": "mvpinzkn",
  "tags": [
   "ekspor gas",
   "ESDM",
   "PLN",
   "industri"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pangkas-ekspor-gas-8-persen-bahlil-tak-ada-kontrak-yang-dilanggar",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "program-mbg-serap-100-ribu-pekerja-di-bogor",
  "category": "Ketenagakerjaan",
  "title": "Program MBG Serap [100 Ribu] Pekerja di Bogor",
  "deck": "KPPG Bogor mengklaim program Makan Bergizi Gratis membuka hampir 100 ribu lapangan kerja baru di tujuh wilayah penyangga, dari Cianjur hingga Purwakarta.",
  "date": "26 Oktober 2026",
  "image": "assets/img/program-mbg-serap-100-ribu-pekerja-di-bogor.jpg",
  "imageV": "mvpio01l",
  "tags": [
   "MBG",
   "Ketenagakerjaan",
   "Bogor",
   "Dapur Gizi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475121-program-mbg-buka-lapangan-kerja-baru-100-ribu-pekerja-diserap-kppg-bogor"
 },
 {
  "slug": "viva-panggil-rups-konversi-utang-rp1-72-t-jadi-saham-17-nov",
  "category": "Aksi Korporasi",
  "title": "VIVA Panggil RUPS, [Konversi] Utang Rp1,72 T Jadi Saham 17 Nov",
  "deck": "RUPST dan RUPSLB VIVA digelar 17 November 2026, membahas pengesahan laporan tahunan 2025 serta rencana mengubah utang PKPU Rp1,72 triliun menjadi saham baru Seri C.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "RUPS",
   "PMTHMETD",
   "PKPU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/11e333be53_e9fce125c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-tawarkan-obligasi-rp3-33-triliun-tahap-vi-dan-us-25-juta",
  "category": "Aksi Korporasi",
  "title": "OPPM Tawarkan Obligasi [Rp3,33 Triliun] Tahap VI dan US$25 Juta",
  "deck": "OPPM membuka masa penawaran obligasi rupiah hingga Rp3,33 triliun dan obligasi dolar AS hingga US$25 juta, tahap keenam dan kelima dari program obligasi berkelanjutan senilai Rp12 triliun.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi",
   "pulp dan kertas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/c429a4ba3b_3fb9f87e66.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-aps-lepas-seluruh-699-97-juta-saham-hak-suara-ke-0",
  "category": "Aksi Korporasi",
  "title": "ANDI: APS [Lepas] Seluruh 699,97 Juta Saham, Hak Suara ke 0%",
  "deck": "Anugerah Perkasa Semesta menjual seluruh 699,97 juta saham ANDI, setara 7,486% hak suara, seharga Rp30 per lembar pada 26 Oktober 2026 untuk tujuan divestasi.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "Andira Agro",
   "kepemilikan saham",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26102026-9671-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmix-mengky-mangarek-tambah-saham-ke-6-02",
  "category": "Aksi Korporasi",
  "title": "MMIX: Mengky Mangarek [Tambah] Saham ke 6,02%",
  "deck": "Pemegang saham MMIX, Mengky Mangarek, menambah kepemilikan 1 juta lembar saham pada 23 Oktober 2026, menaikkan porsinya dari 6,00 persen menjadi 6,02 persen.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "kepemilikan saham",
   "insider",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/f48cf3c465_591c460512.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-cep-lepas-2-38-miliar-saham-hak-suara-ke-24-22",
  "category": "Aksi Korporasi",
  "title": "ANDI: CEP Lepas 2,38 Miliar Saham, Hak Suara ke [24,22%]",
  "deck": "Central Energi Pratama melepas 2,385 miliar saham Andira Agro lewat skema repurchase agreement pada 26 Oktober 2026, menurunkan hak suaranya dari 49,73% menjadi 24,22%.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "Andira Agro",
   "perubahan pemegang saham",
   "pengendali baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26102026-5417-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-pjs-jadi-pengendali-baru-lewat-akuisisi-33-saham-pengendali",
  "category": "Aksi Korporasi",
  "title": "ANDI: PJS Jadi Pengendali Baru Lewat Akuisisi 33% Saham [pengendali]",
  "deck": "PT Puncak Jaya Sejahtera membeli total 33% saham Andira Agro senilai Rp92,57 miliar dari dua pemegang saham lama, menjadikannya pengendali baru perusahaan perkebunan ini.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "Andira Agro",
   "pengambilalihan",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/b36a8387c6_a0c4112f0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "swid-tarik-pinjaman-rp70-miliar-dari-bank-raya-untuk-hotel-alana",
  "category": "Aksi Korporasi",
  "title": "SWID Tarik [Pinjaman] Rp70 Miliar dari Bank Raya untuk Hotel Alana",
  "deck": "Saraswanti Indoland (SWID) menarik pinjaman Rp70 miliar dari PT Bank Raya Indonesia untuk membiayai operasional Hotel The Royal Alana Yogyakarta, setara 25,43 persen dari ekuitas perseroan.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWID",
   "pinjaman bank",
   "properti",
   "perhotelan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e76cce9115_376a0315c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-pjs-beli-3-08-miliar-saham-rp30-lembar-pengendali",
  "category": "Aksi Korporasi",
  "title": "ANDI: PJS Beli 3,08 Miliar Saham Rp30/Lembar [Pengendali]",
  "deck": "PT Puncak Jaya Sejahtera resmi membeli 3.085.500.000 saham ANDI seharga Rp30 per lembar, mengangkat hak suaranya dari 0% jadi 33% dan menjadikannya pengendali baru.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "Andira Agro",
   "pengendali saham",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26102026-1415-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "area-minta-pemegang-saham-warkat-konversi-ke-bentuk-elektronik",
  "category": "Aksi Korporasi",
  "title": "AREA Minta Pemegang Saham [Warkat] Konversi ke Bentuk Elektronik",
  "deck": "PT Dunia Virtual Online Tbk (AREA) mewajibkan pemegang saham pemilik surat kolektif saham fisik mengurus konversi ke bentuk elektronik sebelum 6 Mei 2030.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AREA",
   "dematerialisasi saham",
   "OJK",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/230c5b2dc4_0a3fe87e77.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bach-naikkan-fasilitas-pinjaman-ke-rp350-miliar-dari-smbc",
  "category": "Aksi Korporasi",
  "title": "BACH Naikkan Fasilitas Pinjaman ke [Rp350 Miliar] dari SMBC",
  "deck": "Bach Multi Global dan anak usahanya menambah fasilitas pinjaman dari Bank SMBC Indonesia sebesar Rp100 miliar, sehingga total fasilitas naik menjadi Rp350 miliar dengan tenor sampai Oktober 2027.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BACH",
   "transaksi material",
   "fasilitas pinjaman",
   "SMBC Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/2307db6b75_30dd2e7fe4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-gelar-undian-badai-emas-2026-lewat-aplikasi-tring",
  "category": "BUMN",
  "title": "Pegadaian Gelar Undian [Badai Emas] 2026 Lewat Aplikasi Tring",
  "deck": "PT Pegadaian meluncurkan program undian berhadiah saldo Tabungan Emas bagi nasabah yang bertransaksi lewat aplikasi Tring, berlangsung hingga akhir tahun.",
  "date": "26 Oktober 2026",
  "image": "assets/img/pegadaian-gelar-undian-badai-emas-2026-lewat-aplikasi-tring.jpg",
  "imageV": "mvpio0ox",
  "tags": [
   "pegadaian",
   "badai emas 2026",
   "tabungan emas",
   "tring"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/475084-siap-siap-bawa-pulang-emas-pegadaian-tebar-hadiah-spesial-188-kg-lewat-badai-emas-2026"
 },
 {
  "slug": "materi-public-expose-lapd-ungkap-ekuitas-negatif-rp2-65-m",
  "category": "Aksi Korporasi",
  "title": "Materi Public Expose LAPD Ungkap [Ekuitas Negatif] Rp2,65 M",
  "deck": "Materi public expose tahunan LAPD membeberkan ekuitas negatif Rp2,65 miliar per Juni 2026, serta rencana rights issue Rp60 miliar untuk akuisisi kontraktor tambang BSS senilai Rp38,85 miliar.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "ekuitas negatif",
   "pertambangan batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/db6bba2fa2_c72ee69838.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-koreksi-laporan-keuangan-laba-semester-i-naik-16",
  "category": "Aksi Korporasi",
  "title": "SMII Koreksi Laporan Keuangan, Laba Semester I Naik [16%]",
  "deck": "SMII mengoreksi laporan keuangan semester I 2026 usai pemeriksaan OJK, dampaknya kecil, sementara laba bersih perseroan naik 16,13 persen menjadi Rp1,36 triliun.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMII",
   "laporan keuangan",
   "OJK",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261026191429-64939-0/FinancialStatement-2026-II-SMII.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-laba-bank-mandiri-melonjak-20-7-ke-rp45-5-triliun",
  "category": "Aksi Korporasi",
  "title": "BMRI: Laba Bank Mandiri [Melonjak] 20,7% ke Rp45,5 Triliun",
  "deck": "Bank Mandiri catat laba bersih Rp45,5 triliun hingga kuartal III 2026, kredit dan dana pihak ketiga tumbuh dua digit, kualitas aset justru membaik.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Bank Mandiri",
   "laba bersih",
   "kinerja kuartal III 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/40e52a8ced_70b5eb50bd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-evaluasi-indeks-idx30-isat-ptba-masuk-pgeo-unvr-keluar",
  "category": "Aksi Korporasi",
  "title": "BEI Evaluasi Indeks: [IDX30], ISAT-PTBA Masuk, PGEO-UNVR Keluar",
  "deck": "BEI mengumumkan hasil evaluasi berkala sembilan indeks saham efektif 2 November 2026, dengan ISAT dan PTBA masuk IDX30 serta PGEO dan UNVR keluar.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IDX30",
   "LQ45",
   "IDX80",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Evaluasi Indeks 26 Okt 2026-No. Peng-00204BEI.POP10-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mhki-jelaskan-volatilitas-transaksi-klaim-tak-ada-info-baru",
  "category": "Aksi Korporasi",
  "title": "MHKI [Jelaskan] Volatilitas Transaksi, Klaim Tak Ada Info Baru",
  "deck": "MHKI menyatakan ke BEI tidak ada informasi material atau rencana tindakan korporasi di balik volatilitas harga sahamnya, termasuk dari pemegang saham utama.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MHKI",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/dc0a703da0_dc9a49a58e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mapa-laba-bersih-9m2026-naik-25-5-ke-rp1-4-triliun",
  "category": "Aksi Korporasi",
  "title": "MAPA: Laba Bersih 9M2026 [Naik] 25,5% ke Rp1,4 Triliun",
  "deck": "Pendapatan bersih MAPA tumbuh 17,8 persen menjadi Rp16,4 triliun dalam sembilan bulan 2026, ditopang ekspansi gerai dan akuisisi Sports Direct Malaysia.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAPA",
   "laporan keuangan",
   "ritel",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/5d5adaee3a_a84777dbc4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mapi-laba-bersih-9m2026-naik-25-1-jadi-rp2-1-t",
  "category": "Aksi Korporasi",
  "title": "MAPI: [Laba Bersih] 9M2026 Naik 25,1% Jadi Rp2,1 T",
  "deck": "Pendapatan Mitra Adiperkasa tumbuh 24,5% dalam sembilan bulan 2026, diikuti ekspansi ke Malaysia lewat akuisisi Sports Direct dan distribusi eksklusif Musinsa.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAPI",
   "ritel",
   "laporan keuangan",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/406e00df33_2a5238b4df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnmp-lunasi-sukuk-rp800-miliar-delisting-bei-27-oktober",
  "category": "Aksi Korporasi",
  "title": "PNMP [Lunasi] Sukuk Rp800 Miliar, Delisting BEI 27 Oktober",
  "deck": "PT Permodalan Nasional Madani melunasi pokok Sukuk Mudharabah Seri A senilai Rp800 miliar pada 27 Oktober 2026, bersamaan dengan penghapusan sukuk itu dari pencatatan BEI.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNMP",
   "sukuk",
   "obligasi jatuh tempo",
   "pelunasan pokok"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/496984d109_5e76c40fcc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-chek-turun-43-di-kuartal-iii-meski-pendapatan-naik",
  "category": "Aksi Korporasi",
  "title": "Laba [CHEK] Turun 43% di Kuartal III Meski Pendapatan Naik",
  "deck": "Laba bersih PT Diastika Biotekindo turun dari Rp14,23 miliar menjadi Rp8,07 miliar pada sembilan bulan pertama 2026, meski pendapatan naik 18 persen dan utang turun tajam.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CHEK",
   "laba kuartal III",
   "utang",
   "saham treasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261026185027-64542-0/FinancialStatement-2026-III-CHEK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djp-rombak-aturan-pembayaran-pajak-sanksi-bisa-hapus-100",
  "category": "Makroekonomi",
  "title": "DJP Rombak Aturan Pembayaran Pajak, Sanksi Bisa [Hapus] 100%",
  "deck": "DJP mengubah tata cara pembayaran utang pajak agar pokok dilunasi lebih dulu, serta menawarkan pengurangan sanksi administratif bertahap hingga 100 persen sampai akhir 2026.",
  "date": "26 Oktober 2026",
  "image": "assets/img/djp-rombak-aturan-pembayaran-pajak-sanksi-bisa-hapus-100.jpg",
  "imageV": "mvp6tvtb",
  "tags": [
   "pajak",
   "DJP",
   "sanksi administratif",
   "PMK 71/2026"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/dorong-kepastian-hukum-kanwil-djp-sulselbartra-bedah-pmk-712026-dan-kep-2392026-di",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "pgjo-dirikan-anak-usaha-baru-di-bisnis-logistik",
  "category": "Aksi Korporasi",
  "title": "PGJO Dirikan Anak Usaha Baru di Bisnis [Logistik]",
  "deck": "Dua anak usaha PGJO, MMM dan SSS, mendirikan PT Mitra Samudera Logistik dengan modal disetor Rp500 juta untuk masuk ke jasa pengurusan transportasi.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "anak usaha",
   "transaksi afiliasi",
   "logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/62a9586f6c_87da5dca75.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bris-rencanakan-buyback-saham-rp500-miliar",
  "category": "Aksi Korporasi",
  "title": "BRIS Rencanakan [Buyback] Saham Rp500 Miliar",
  "deck": "Bank Syariah Indonesia mengajukan rencana pembelian kembali saham senilai maksimal Rp500 miliar memanfaatkan aturan OJK untuk kondisi pasar yang berfluktuasi signifikan.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "buyback saham",
   "Bank Syariah Indonesia",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/e80a044001_07cdfc2a24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "alii-jelaskan-volatilitas-afiliasi-rathod-beli-12-6-juta-saham",
  "category": "Aksi Korporasi",
  "title": "ALII Jelaskan Volatilitas, Afiliasi Rathod Beli [12,6 Juta] Saham",
  "deck": "ALII menjawab permintaan BEI soal volatilitas transaksi saham, pengendali dan perusahaan afiliasinya tercatat membeli saham, sementara kinerja angkutan batu bara disebut meningkat dari tahun lalu.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALII",
   "volatilitas saham",
   "pemegang saham",
   "Ancara Logistics"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/6fa560ae09_912bfbdeaf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mapi-liabilitas-naik-23-8-usai-akuisisi-sports-direct-malaysia",
  "category": "Aksi Korporasi",
  "title": "MAPI: Liabilitas Naik 23,8% Usai Akuisisi [Sports Direct Malaysia]",
  "deck": "Liabilitas MAPI naik 23,8% dalam sembilan bulan, didorong utang pembelian saham Rp1,9 triliun untuk mengakuisisi Sports Direct Malaysia yang kini dikonsolidasikan penuh.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAPI",
   "akuisisi",
   "liabilitas",
   "Sports Direct Malaysia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/20261026184354-64639-0/FinancialStatement-2026-III-MAPI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbld-tambah-fasilitas-kredit-rp500-miliar-dari-bank-danamon",
  "category": "Aksi Korporasi",
  "title": "BBLD Tambah [Fasilitas Kredit] Rp500 Miliar dari Bank Danamon",
  "deck": "Buana Finance menambah pinjaman Rp500 miliar dari Bank Danamon, membuat total utang perusahaan jadi Rp2,15 triliun atau 152,73 persen dari ekuitas.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBLD",
   "Buana Finance",
   "fasilitas kredit",
   "Bank Danamon"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/33dcf872e8_84ff6b402b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmri-jawab-lagi-permintaan-bursa-soal-kredit-jhonlin",
  "category": "Aksi Korporasi",
  "title": "BMRI Jawab Lagi Permintaan Bursa soal Kredit [Jhonlin]",
  "deck": "Bursa Efek Indonesia meminta penjelasan lanjutan dari Bank Mandiri soal kredit ke PT Jhonlin Baratama, termasuk agunan saham JARR dan PGUN serta kaitannya dengan Bayan Resources.",
  "date": "26 Oktober 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMRI",
   "Jhonlin Baratama",
   "Bayan Resources",
   "kredit perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202610/24d24b287a_aabaa37f8c.pdf",
  "sourceLabel": "IDX"
 }
];
