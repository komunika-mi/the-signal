// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "emas-aset-naik-30-ditopang-utang-bank-us-149-juta",
  "category": "Aksi Korporasi",
  "title": "EMAS: Aset Naik 30% Ditopang [Utang] Bank US$149 Juta",
  "deck": "Laporan interim EMAS per Juni 2026: total aset naik jadi US$964,3 juta, ditopang utang bank jangka pendek baru US$149 juta seiring mulai beroperasinya anak usaha Pani Bersama Tambang.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Merdeka Gold Resources",
   "laporan keuangan interim",
   "tambang emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260827220001-64211-0/FinancialStatement-2026-II-EMAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-minta-dooh-gelar-public-expose-insidentil-bahas-saham",
  "category": "Aksi Korporasi",
  "title": "BEI Minta DOOH Gelar Public Expose [Insidentil] Bahas Saham",
  "deck": "PT Era Media Sejahtera Tbk (DOOH) akan menggelar Public Expose Insidentil pada 4 September 2026 atas permintaan Bursa Efek Indonesia, membahas kinerja keuangan hingga pergerakan harga sahamnya.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Era Media Sejahtera"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dc5e89a44e_142eb6ae51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dild-pengadilan-tolak-gugatan-pkpu-bank-mayapada-ke-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "DILD: Pengadilan Tolak Gugatan [PKPU] Bank Mayapada ke Anak Usaha",
  "deck": "Pengadilan Negeri Jakarta Pusat menolak permohonan PKPU yang diajukan Bank Mayapada terhadap PT Taman Harapan Indah, anak usaha Intiland Development (DILD).",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DILD",
   "PKPU",
   "Intiland Development",
   "Taman Harapan Indah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4a3d9dd6a8_974059e233.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgas-kalah-sebagian-di-arbitrase-lawan-gunvor-di-london",
  "category": "Aksi Korporasi",
  "title": "PGAS Kalah Sebagian di Arbitrase Lawan [Gunvor] di London",
  "deck": "PGN menerima putusan arbitrase parsial LCIA yang mewajibkannya membayar kompensasi kepada Gunvor Singapore, namun jumlahnya belum diungkap.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGAS",
   "arbitrase",
   "Gunvor",
   "LCIA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c63e9284cd_56f7ef45a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agar-penjualan-ke-satu-pelanggan-capai-75-9-dari-total",
  "category": "Aksi Korporasi",
  "title": "AGAR: Penjualan ke Satu Pelanggan Capai [75,9%] dari Total",
  "deck": "AGAR menjawab permintaan penjelasan Bursa soal rencana pengambilalihan, kinerja keuangan, dan ketergantungan pada satu pelanggan besar.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGAR",
   "pengambilalihan",
   "arus kas",
   "konsentrasi pelanggan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/69c9f563a7_ae0100f573.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpii-jelaskan-ke-bei-lonjakan-transaksi-saham-20-agustus",
  "category": "Aksi Korporasi",
  "title": "BPII Jelaskan ke BEI [Lonjakan] Transaksi Saham 20 Agustus",
  "deck": "BPII menjawab permintaan penjelasan BEI setelah volume transaksi sahamnya melonjak lebih dari empat kali lipat dan harga naik 2,41 persen pada 20 Agustus 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPII",
   "volatilitas saham",
   "BEI",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/344f84a595_1476b646a1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbrm-batalkan-kontrak-kapal-psv-senilai-us-22-juta",
  "category": "Aksi Korporasi",
  "title": "BBRM [Batalkan] Kontrak Kapal PSV Senilai US$22 Juta",
  "deck": "Perjanjian pembangunan satu kapal Platform Supply Vessel dengan galangan asal China dibatalkan karena syarat pendahuluan tak terpenuhi dalam 90 hari, sebelum ada dana yang dibayarkan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRM",
   "pelayaran",
   "kapal PSV",
   "shipping"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/37583a07c3_60df18944c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bkdp-masuk-daftar-pemantauan-khusus-bei-mulai-28-agustus-2026",
  "category": "Aksi Korporasi",
  "title": "BKDP Masuk Daftar [Pemantauan Khusus] BEI Mulai 28 Agustus 2026",
  "deck": "BEI menetapkan saham BKDP, Bukit Darmo Property Tbk, masuk kategori pemantauan khusus di Papan Pengembangan, efektif 28 Agustus 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKDP",
   "Bursa Efek Indonesia",
   "pemantauan khusus",
   "watchlist saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c8d91b1687_76b1d37702.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpg-3-kg-bakal-dibatasi-berdasarkan-desil-kesejahteraan",
  "category": "Energi",
  "title": "LPG 3 Kg Bakal Dibatasi Berdasarkan [Desil] Kesejahteraan",
  "deck": "ESDM mulai membahas pembatasan pembeli LPG 3 kilogram bersubsidi berdasarkan data desil kesejahteraan bersama BPS dan Pertamina, menyusul arahan hasil pertemuan dengan Kementerian Keuangan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/lpg-3-kg-bakal-dibatasi-berdasarkan-desil-kesejahteraan.jpg",
  "imageV": "mtb0rsr7",
  "tags": [
   "LPG 3 kg",
   "subsidi energi",
   "ESDM",
   "desil kesejahteraan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462865-lpg-3-kg-tak-lagi-bebas-dibeli-esdm-siapkan-batas-penerima-berdasarkan-desil-kesejahteraan"
 },
 {
  "slug": "ihsg-dibuka-melemah-tertekan-sentimen-minyak-dan-hormuz",
  "category": "Pasar Modal",
  "title": "IHSG Dibuka [Melemah], Tertekan Sentimen Minyak dan Hormuz",
  "deck": "IHSG dibuka turun 15 poin ke 6.390 pada Kamis, tertekan sentimen harga minyak dan perkembangan Selat Hormuz, sementara pasar juga menanti laporan keuangan Nvidia.",
  "date": "27 Agustus 2026",
  "image": "assets/img/bursa-layar.jpg",
  "tags": [
   "IHSG",
   "Selat Hormuz",
   "harga minyak",
   "bursa saham"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462866-ihsg-dibuka-merah-investor-dibayangi-harga-minyak-hingga-ketegangan-selat-hormuz"
 },
 {
  "slug": "pbsa-panggil-rupslb-bahas-stock-split-saham-rasio-1-2",
  "category": "Aksi Korporasi",
  "title": "PBSA Panggil RUPSLB, Bahas [Stock Split] Saham Rasio 1:2",
  "deck": "RUPSLB PBSA pada 18 September 2026 akan membahas pemecahan nilai nominal saham dari Rp50 menjadi Rp25 per saham dengan rasio 1:2, serta penyesuaian anggaran dasar terkait modal.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PBSA",
   "stock split",
   "RUPSLB",
   "Paramita Bangun Sarana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5cb6b5099d_1a993c73a3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-hari-ini-turun-rp27-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam Hari Ini [Turun] Rp27.000 per Gram",
  "deck": "Harga jual emas batangan Antam turun ke Rp2.723.000 per gram pada 27 Agustus 2026, harga buyback ikut melemah ke Rp2.583.000 per gram.",
  "date": "27 Agustus 2026",
  "image": "assets/img/emas-batangan.jpg",
  "tags": [
   "emas antam",
   "harga emas",
   "buyback emas",
   "logam mulia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462860-harga-emas-antam-hari-ini-27-agustus-2026-merosot-rp27000-buyback-ikut-turun"
 },
 {
  "slug": "vico-gelar-rupslb-bahas-pembagian-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "VICO Gelar RUPSLB, Bahas Pembagian [Dividen] Tunai",
  "deck": "PT Victoria Investama Tbk (VICO) mengundang pemegang saham ke RUPSLB 18 September 2026 untuk menyetujui pembagian sebagian laba ditahan sebagai dividen tunai.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "RUPSLB",
   "dividen",
   "Victoria Investama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/baab9c4934_0e386963dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peringkat-utang-ptpp-anjlok-ke-idbb-sebelum-rupo-obligasi",
  "category": "Aksi Korporasi",
  "title": "Peringkat Utang PTPP [Anjlok] ke idBB Sebelum RUPO Obligasi",
  "deck": "Pefindo memangkas peringkat PTPP dari idBBB+ ke idBB dengan status CreditWatch negatif, menyusul rencana restrukturisasi kupon dan jatuh tempo obligasi serta sukuk yang masih beredar.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "Peringkat Utang",
   "Restrukturisasi Obligasi",
   "Pefindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/973a356dc2_f16e149cf7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pjhb-jawab-bursa-akui-tak-ada-info-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "PJHB Jawab Bursa, Akui Tak Ada Info di Balik [Volatilitas] Saham",
  "deck": "Menjawab surat BEI soal lonjakan transaksi sahamnya, PJHB menyatakan tidak ada informasi material yang belum diungkapkan dan pemegang saham pengendali tak berencana ubah kepemilikan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PJHB",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/44d68e53e1_fd823a5dcd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-jadwalkan-delisting-20-waran-terstruktur-seri-t-33",
  "category": "Aksi Korporasi",
  "title": "DR Jadwalkan [Delisting] 20 Waran Terstruktur Seri T-33",
  "deck": "RHB Sekuritas (DR) umumkan penghentian perdagangan, pelaksanaan otomatis, dan delisting 20 waran terstruktur penerbitan ke-33 pada 9-15 September 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas Indonesia",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/571c9a883c_84a2188e78.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-konfirmasi-tak-ada-informasi-material-di-balik-volatilitas",
  "category": "Aksi Korporasi",
  "title": "PART Konfirmasi Tak Ada Informasi Material di Balik [Volatilitas]",
  "deck": "Menjawab permintaan BEI soal lonjakan volatilitas transaksi, PART menyatakan tidak ada info material dan pemegang saham utama tak berencana ubah kepemilikan.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PART",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5cc77402c6_1e24425c6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-lunasi-obligasi-dan-sukuk-rp2-49-triliun-pelunasan",
  "category": "Aksi Korporasi",
  "title": "INKP Lunasi Obligasi dan Sukuk Rp2,49 Triliun [Pelunasan]",
  "deck": "Indah Kiat Pulp & Paper melunasi pokok obligasi dan sukuk mudharabah senilai total Rp2,49 triliun kepada pemegang efek pada 26 Agustus 2026.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk mudharabah",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/05a9f95dfb_ef45c8a4b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nice-ganti-susunan-direksi-dan-komisaris-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "NICE ganti susunan [Direksi] dan Komisaris usai RUPSLB",
  "deck": "RUPSLB 26 Agustus 2026 menetapkan Chang Pyo Hong sebagai Direktur Utama baru dan merombak penuh susunan Direksi serta Dewan Komisaris NICE hingga RUPST 2028.",
  "date": "27 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "Direksi",
   "RUPSLB",
   "Tambang Nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/afae5e7a1f_549b500c05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iapi-usulkan-satu-standar-asurans-keberlanjutan",
  "category": "Pasar Modal",
  "title": "IAPI Usulkan [Satu] Standar Asurans Keberlanjutan",
  "deck": "IAPI mendorong satu standar internasional untuk audit laporan keberlanjutan di Indonesia, seiring OJK menyiapkan aturan wajib pengungkapannya.",
  "date": "26 Agustus 2026",
  "image": "assets/img/iapi-usulkan-satu-standar-asurans-keberlanjutan.jpg",
  "imageV": "mtb0rt8r",
  "tags": [
   "IAPI",
   "asurans keberlanjutan",
   "greenwashing",
   "OJK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462806-cegah-greenwashing-iapi-usulkan-satu-standar-asurans-keberlanjutan-di-indonesia"
 },
 {
  "slug": "lomba-lari-sez-industropolis-run-2026-digelar-di-kek-batang",
  "category": "Bisnis",
  "title": "Lomba Lari [SEZ Industropolis Run] 2026 Digelar di KEK Batang",
  "deck": "SEZ Industropolis Run 2026 digelar 6 Desember di KEK Batang, menyasar 2.626 pelari dengan lintasan tersertifikasi AIMS dan atlet nasional turut berkompetisi di kawasan industri tepi Laut Jawa.",
  "date": "26 Agustus 2026",
  "image": "assets/img/lomba-lari-sez-industropolis-run-2026-digelar-di-kek-batang.jpg",
  "imageV": "mtb0rtp1",
  "tags": [
   "KEK Industropolis Batang",
   "SEZ Industropolis Run 2026",
   "lari maraton",
   "kawasan ekonomi khusus"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462801-sez-industropolis-run-2026-akan-digelar-suguhkan-pengalaman-lari-di-kawsan-industri-tepi-laut-jawa"
 },
 {
  "slug": "irse-2026-dibuka-ritel-didorong-genjot-teknologi",
  "category": "Bisnis",
  "title": "IRSE 2026 Dibuka, Ritel Didorong Genjot [Teknologi]",
  "deck": "Mendag Busan mengajak pelaku ritel memanfaatkan teknologi saat membuka IRSE 2026, di tengah konsumsi rumah tangga yang menyumbang 53,32 persen ekonomi nasional pada kuartal II 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/irse-2026-dibuka-ritel-didorong-genjot-teknologi.jpg",
  "imageV": "mtaavl05",
  "tags": [
   "ritel",
   "IRSE 2026",
   "konsumsi rumah tangga",
   "QRIS"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ikut-buka-irse-2026-mendag-busan-teknologi-tingkatkan-pengalaman-belanja-konsumen",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "esdm-kirim-48-genset-ke-tujuh-kabupaten-ntt-terdampak-gempa",
  "category": "Energi",
  "title": "ESDM Kirim [48] Genset ke Tujuh Kabupaten NTT Terdampak Gempa",
  "deck": "Kementerian ESDM mengirim 48 genset untuk fasilitas kesehatan darurat di tujuh kabupaten NTT yang terdampak gempa dan tsunami, sembari mendirikan sekitar 30 posko tanggap darurat.",
  "date": "26 Agustus 2026",
  "image": "assets/img/esdm-kirim-48-genset-ke-tujuh-kabupaten-ntt-terdampak-gempa.jpg",
  "imageV": "mta5wfir",
  "tags": [
   "ESDM",
   "gempa NTT",
   "genset",
   "tanggap darurat"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dukungan-esdm-terus-mengalir-ke-ntt-48-genset-disiapkan-untuk-fasilitas-kesehatan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "wsbp-ratifikasi-tambah-plafon-konversi-utang-rp6-1-miliar",
  "category": "Aksi Korporasi",
  "title": "WSBP [Ratifikasi] Tambah Plafon Konversi Utang Rp6,1 Miliar",
  "deck": "WSBP mengajukan ratifikasi RUPS untuk menambah plafon konversi utang menjadi saham, menampung tagihan tambahan Rp6,1 miliar dari tiga kreditur dagang baru yang baru terverifikasi.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "PMTHMETD",
   "restrukturisasi utang",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5d1d1c0d91_11c644a0d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-jadwalkan-rupslb-pada-2-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "WSBP Jadwalkan [RUPSLB] pada 2 Oktober 2026",
  "deck": "Waskita Beton Precast mengumumkan RUPSLB digelar 2 Oktober 2026 di Jakarta, agenda lengkapnya baru akan diumumkan pertengahan September.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WSBP",
   "RUPSLB",
   "Waskita Beton Precast",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/faa6f36c73_25d5251123.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-eco-runfest-2026-usung-tujuh-inisiatif-hijau",
  "category": "BUMN",
  "title": "Pertamina Eco RunFest 2026 Usung [Tujuh] Inisiatif Hijau",
  "deck": "Pertamina kembali menggelar Eco RunFest tahun ke-13 dengan tujuh inisiatif keberlanjutan, dan seluruh keuntungan tiket didonasikan penuh untuk program lingkungan.",
  "date": "26 Agustus 2026",
  "image": "assets/img/pertamina-eco-runfest-2026-usung-tujuh-inisiatif-hijau.jpg",
  "imageV": "mta5wg8b",
  "tags": [
   "Pertamina",
   "lingkungan",
   "sampah",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462746-pertamina-eco-runfest-2026-kembali-digelar-hadirkan-tujuh-inisiatif-keberlanjutan-lingkungan"
 },
 {
  "slug": "komdigi-sinar-mas-perluas-hub-digital-ke-10-kota",
  "category": "Teknologi",
  "title": "Komdigi-Sinar Mas [Perluas] Hub Digital ke 10 Kota",
  "deck": "Komdigi dan Sinar Mas Land memperluas Garuda Spark Innovation Hub ke 10 kota lewat skema kerja sama pemerintah-swasta untuk ekosistem digital.",
  "date": "26 Agustus 2026",
  "image": "assets/img/komdigi-sinar-mas-perluas-hub-digital-ke-10-kota.jpg",
  "imageV": "mta5wgwi",
  "tags": [
   "GSIH",
   "Komdigi",
   "Sinar Mas Land",
   "ekosistem digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462737-garuda-spark-innovation-hub-gsih-diperluas-ke-10-kota-sinar-mas-siap-dukung-ekosistem-digital-indonesia"
 },
 {
  "slug": "bbsi-panggil-rupslb-kedua-usul-komisaris-baru",
  "category": "Aksi Korporasi",
  "title": "BBSI Panggil RUPSLB Kedua, Usul [Komisaris] Baru",
  "deck": "Krom Bank (BBSI) menggelar RUPSLB kedua pada 3 September 2026 setelah rapat pertama gagal kuorum, mengusulkan dua calon komisaris baru dan perubahan anggaran dasar.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBSI",
   "RUPSLB",
   "Krom Bank",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/96d51fd2fd_62a6b8e594.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-panggil-rupslb-tegaskan-pemilik-baru-dan-direksi",
  "category": "Aksi Korporasi",
  "title": "MBSS Panggil RUPSLB, Tegaskan [Pemilik] Baru dan Direksi",
  "deck": "MBSS mengundang RUPSLB 17 September 2026 untuk membahas pergantian direksi-komisaris, penegasan pemegang saham baru PT Wibowo Group Capital, dan perubahan alamat kantor pusat.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBSS",
   "RUPSLB",
   "Pergantian Direksi",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7f3d446d91_752aeff95e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmry-bagikan-dividen-interim-rp100-per-saham",
  "category": "Aksi Korporasi",
  "title": "CMRY Bagikan [Dividen] Interim Rp100 per Saham",
  "deck": "Direksi Cisarua Mountain Dairy menetapkan dividen interim tunai Rp100 per saham untuk tahun buku 2026, dengan pembayaran dijadwalkan 18 September 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "dividen interim",
   "Cimory",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0374a36ff6_89b055f8a4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmry-bagikan-dividen-interim-rp100-per-saham-rp793-miliar",
  "category": "Aksi Korporasi",
  "title": "CMRY Bagikan Dividen Interim [Rp100] per Saham, Rp793 Miliar",
  "deck": "Direksi Cimory memutuskan membagikan dividen interim tahun buku 2026 senilai total Rp793,47 miliar, dibayarkan mulai 18 September 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMRY",
   "dividen interim",
   "Cimory",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/26fdb8e915_2120070314.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-saiko-pastikan-cuma-jalankan-tender-wajib-tak-ubah-saham",
  "category": "Aksi Korporasi",
  "title": "NAYZ: Saiko Pastikan Cuma Jalankan [Tender] Wajib, Tak Ubah Saham",
  "deck": "NAYZ menjawab permintaan BEI: tak ada info material baru selain perubahan pengendali, dan Saiko Consultancy tak berencana ubah kepemilikan saham kecuali penuhi penawaran tender wajib.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "volatilitas transaksi",
   "penawaran tender wajib",
   "Saiko Consultancy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3ace940e09_82befe1f2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gelar-rupsu-minta-penundaan-bayar-sukuk",
  "category": "Aksi Korporasi",
  "title": "WIKA Gelar RUPSU, Minta [Penundaan] Bayar Sukuk",
  "deck": "WIKA mengundang pemegang sukuknya ke RUPSU 15 September 2026 untuk menyetujui penundaan jatuh tempo dan pembayaran bagi hasil, serta pengesampingan gagal bayar bagi hasil ke-14.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7464230e2f_eb1b4c2f86.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-panggil-rupsu-15-september-ajukan-penundaan-jatuh-tempo-sukuk",
  "category": "Aksi Korporasi",
  "title": "WIKA Panggil RUPSU 15 September, Ajukan [Penundaan] Jatuh Tempo Sukuk",
  "deck": "WIKA memanggil RUPSU pada 15 September 2026 untuk meminta persetujuan pemegang sukuk mengubah jadwal jatuh tempo pokok dan menunda pembayaran bagi hasil seri B dan C.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/573f173c0b_3d30d38f79.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-gelar-rupsu-sukuk-tahap-ii-minta-penundaan-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "WIKA Gelar RUPSU Sukuk Tahap II, Minta [Penundaan] Jatuh Tempo",
  "deck": "WIKA memanggil RUPSU pemegang Sukuk Tahap II pada 10 September 2026, minta penundaan jatuh tempo dan bagi hasil serta pengesampingan gagal bayar bagi hasil ke-14.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0a319778c4_aebaad234a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-lagi-ajukan-penundaan-bayar-sukuk-rupsu-9-september",
  "category": "Aksi Korporasi",
  "title": "WIKA [Lagi] Ajukan Penundaan Bayar Sukuk, RUPSU 9 September",
  "deck": "WIKA memanggil RUPSU untuk sukuk Berkelanjutan II Tahap I, meminta penundaan bagi hasil periode ke-20 dan ke-21 sekaligus perubahan jatuh tempo pokok.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/566d05e612_d4bfae210e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-komisaris-vivek-sood-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "EXCL: Komisaris Vivek Sood Ajukan [Pengunduran Diri]",
  "deck": "Vivek Sood mundur dari kursi Komisaris XLSMART Telecom Sejahtera, efektif setelah disetujui RUPS terdekat.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/be42b5f638_6fe95a5f61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcor-ralat-rupslb-recording-date-jadi-21-agustus",
  "category": "Aksi Korporasi",
  "title": "MCOR Ralat RUPSLB: Recording Date Jadi [21 Agustus]",
  "deck": "MCOR mengoreksi surat sebelumnya: pemegang saham yang berhak hadir di RUPSLB 15 September 2026 ditetapkan berdasarkan catatan kepemilikan per 21 Agustus 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "RUPSLB",
   "Bank CCB Indonesia",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f226a7df27_a8b7e7fdf9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdln-mayoritas-pemegang-notes-setujui-skema-restrukturisasi",
  "category": "Aksi Korporasi",
  "title": "MDLN: Mayoritas Pemegang Notes Setujui [Skema] Restrukturisasi",
  "deck": "PT Modernland Realty melaporkan skema restrukturisasi Notes disetujui mayoritas pemegang surat utang, tinggal menunggu persetujuan Pengadilan Tinggi Singapura.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLN",
   "restrukturisasi utang",
   "obligasi",
   "Modernland Realty"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/51045156a3_9694e9d2df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "euro-rombak-komite-audit-darren-nathaniel-tandra-jadi-ketua",
  "category": "Aksi Korporasi",
  "title": "EURO Rombak [Komite Audit], Darren Nathaniel Tandra Jadi Ketua",
  "deck": "Komite Audit EURO berganti ketua efektif 26 Agustus 2026: Darren Nathaniel Tandra menggantikan Andi Kurniawan Josdaan, sementara dua anggota lain tetap menjabat periode kedua.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EURO",
   "komite audit",
   "tata kelola perusahaan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/56d44943eb_07d4019716.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baut-terima-pinjaman-tanpa-bunga-rp44-79-miliar-dari-naf",
  "category": "Aksi Korporasi",
  "title": "BAUT Terima [Pinjaman] Tanpa Bunga Rp44,79 Miliar dari NAF",
  "deck": "Pemegang saham utama BAUT, NA Fasteners Pte Ltd, mengucurkan pinjaman US$2,5 juta tanpa bunga dan tanpa jaminan untuk modal kerja, setara 26 persen dari ekuitas perusahaan.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAUT",
   "transaksi afiliasi",
   "pinjaman pemegang saham",
   "NA Fasteners"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a50fe72ee5_6da96d59ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sdmu-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "SDMU Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "SDMU menjawab surat BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada info material atau rencana aksi korporasi yang belum diungkap.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SDMU",
   "Sidomulyo Selaras",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/be24f14895_86d598a021.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-jadwalkan-public-expose-insidentil-pada-28-agustus",
  "category": "Aksi Korporasi",
  "title": "CSMI Jadwalkan Public Expose [Insidentil] pada 28 Agustus",
  "deck": "PT Cipta Selera Murni Tbk (CSMI) menggelar public expose insidentil secara daring pada 28 Agustus 2026, membahas kinerja keuangan, rencana bisnis, dan pergerakan harga sahamnya.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSMI",
   "public expose",
   "pergerakan saham",
   "Cipta Selera Murni"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c24680a3f9_07d1cf76ad.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-soroti-gaji-31-000-karyawan-pos-indonesia",
  "category": "BUMN",
  "title": "DPR Soroti [Gaji] 31.000 Karyawan Pos Indonesia",
  "deck": "DPR menerima audiensi PT Pos Indonesia soal kepastian gaji 31.000 karyawan yang jatuh tempo 1 September, di tengah keuangan perusahaan yang terpuruk dan tagihan Kemensos yang belum cair.",
  "date": "26 Agustus 2026",
  "image": "assets/img/dpr-soroti-gaji-31-000-karyawan-pos-indonesia.jpg",
  "imageV": "mt9sq4cy",
  "tags": [
   "PT Pos Indonesia",
   "DPR",
   "BUMN",
   "gaji karyawan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462650-pimpinan-dpr-gelar-audiensi-bahas-nasib-pt-pos-indonesia-soroti-kepastian-gaji-31000-karyawan"
 },
 {
  "slug": "purbaya-pastikan-anggaran-karhutla-siap-cair",
  "category": "Makroekonomi",
  "title": "Purbaya Pastikan Anggaran Karhutla [Siap] Cair",
  "deck": "Menteri Keuangan Purbaya Yudhi Sadewa memastikan dana tambahan penanganan karhutla siap cair begitu BNPB mengajukan rincian kebutuhan biaya.",
  "date": "26 Agustus 2026",
  "image": "assets/img/purbaya-pastikan-anggaran-karhutla-siap-cair.jpg",
  "imageV": "mt9sq526",
  "tags": [
   "karhutla",
   "BNPB",
   "Kemenkeu",
   "anggaran bencana"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462648-purbaya-pastikan-siap-tambah-dana-untuk-atasi-karhutla"
 },
 {
  "slug": "wege-raih-kontrak-baru-rp775-miliar-naik-568-yoy",
  "category": "Aksi Korporasi",
  "title": "WEGE Raih [Kontrak] Baru Rp775 Miliar, Naik 568% YoY",
  "deck": "Kontrak baru WEGE per Agustus 2026 melonjak jadi Rp775 miliar, didominasi proyek pemerintah, di tengah rencana divestasi aset lebih dari Rp1 triliun untuk memperkuat likuiditas.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WEGE",
   "kontrak konstruksi",
   "BUMN karya",
   "divestasi aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a1d0310bfa_1cd8551fd3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbni-jadwalkan-public-expose-9-september-bahas-kinerja-q2",
  "category": "Aksi Korporasi",
  "title": "BBNI Jadwalkan [Public Expose] 9 September, Bahas Kinerja Q2",
  "deck": "Bank BNI akan menggelar Public Expose Live 2026 pada 9 September membahas kinerja kuartal II dan strategi perusahaan, dengan dua pejabat sebagai pembicara.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBNI",
   "Bank BNI",
   "Public Expose",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50a5040c66_957425e3eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-gelar-public-expose-tahunan-9-september-2026",
  "category": "Aksi Korporasi",
  "title": "ADHI Gelar [Public Expose] Tahunan 9 September 2026",
  "deck": "Adhi Karya akan memaparkan kinerja semester I 2026 dan strategi usaha dalam Public Expose Live pada 9 September 2026, di tengah sorotan gagal bayar kupon obligasi.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "Adhi Karya",
   "Public Expose",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/793357ec76_b1b9c075ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ypas-gelar-public-expose-insidentil-usai-diminta-bursa",
  "category": "Aksi Korporasi",
  "title": "YPAS Gelar [Public Expose] Insidentil usai Diminta Bursa",
  "deck": "Yanaprima Hastapersada akan menggelar public expose insidentil secara daring pada 28 Agustus 2026 setelah menerima surat dari unit pengawasan Bursa Efek Indonesia.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YPAS",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Yanaprima Hastapersada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c4f6df74eb_60de163d51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beer-jadwalkan-rupslb-pada-2-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "BEER Jadwalkan [RUPSLB] pada 2 Oktober 2026",
  "deck": "PT Jobubu Jarum Minahasa Tbk (BEER) akan menggelar RUPSLB pada 2 Oktober 2026, dengan pemegang saham per 9 September 2026 yang berhak hadir dan memberi suara.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEER",
   "RUPSLB",
   "pasar modal",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bddbfbb9a7_65a48cfe91.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-jadwalkan-rupslb-pada-2-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "NAYZ Jadwalkan [RUPSLB] pada 2 Oktober 2026",
  "deck": "PT Hassana Boga Sejahtera Tbk (NAYZ) akan menggelar RUPSLB pada 2 Oktober 2026, dengan pemanggilan resmi berisi agenda lengkap terbit 10 September 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NAYZ",
   "RUPSLB",
   "Hassana Boga Sejahtera",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/76c83356de_9dbe9969eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cek-desil-kemensos-untuk-pastikan-status-bansos-anda",
  "category": "Makroekonomi",
  "title": "Cek [Desil] Kemensos untuk Pastikan Status Bansos Anda",
  "deck": "Desil dalam data DTSEN menentukan siapa berhak menerima PKH dan BPNT. Jika data dianggap tidak sesuai kondisi terkini, warga bisa mengajukan sanggah.",
  "date": "26 Agustus 2026",
  "image": "assets/img/cek-desil-kemensos-untuk-pastikan-status-bansos-anda.jpg",
  "imageV": "mt9o4a5m",
  "tags": [
   "bansos",
   "Kemensos",
   "DTSEN",
   "PKH"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462618-cek-desil-kemensos-untuk-tahu-dapat-bansos-atau-tidak-begini-cara-sanggah-jika-data-tidak-sesuai"
 },
 {
  "slug": "cars-jelaskan-ke-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "CARS Jelaskan ke BEI Soal [Volatilitas] Transaksi Saham",
  "deck": "CARS menjawab permintaan penjelasan BEI atas lonjakan transaksi sahamnya, menegaskan tidak ada informasi material dan belum ada pemegang saham pengendali per 31 Juli 2026.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CARS",
   "Bintraco Dharma",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c127e4780f_c6b8f02659.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aegs-bantah-punya-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "AEGS Bantah Punya Info Material di Balik [Volatilitas] Saham",
  "deck": "Menjawab permintaan penjelasan Bursa Efek Indonesia, AEGS menyatakan tidak mengetahui fakta material di balik pergerakan harga sahamnya dan belum berencana melakukan aksi korporasi.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AEGS",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1ba3a23722_f7ee070276.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wins-beri-jaminan-perusahaan-us-12-juta-untuk-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "WINS Beri [Jaminan] Perusahaan US$12 Juta untuk Anak Usaha",
  "deck": "Wintermar Offshore Marine (WINS) menjamin fasilitas kredit US$12 juta dari Bank Shinhan Indonesia untuk anak usahanya, PT Wintermar, guna refinancing kapal dan modal kerja.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINS",
   "Wintermar Offshore Marine",
   "jaminan perusahaan",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/62a5a299ee_385a4bcd2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-mcor-junianto-tambah-kepemilikan-500-200-saham",
  "category": "Aksi Korporasi",
  "title": "[Direksi] MCOR: Junianto Tambah Kepemilikan 500.200 Saham",
  "deck": "Direksi MCOR, Junianto, menambah kepemilikan 500.200 saham secara tidak langsung seharga Rp68 per lembar untuk memenuhi ketentuan OJK bagi pengurus bank.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "kepemilikan saham",
   "direksi bank",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26082026-4227-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-vto-diperpanjang-partisipasi-publik-4-7",
  "category": "Aksi Korporasi",
  "title": "EDGE: VTO Diperpanjang, Partisipasi Publik [4,7%]",
  "deck": "Digital Edge Hong Kong memperpanjang tender saham EDGE hingga 22 September 2026, sementara hasil sementara dua periode pertama menunjukkan baru 4,7 persen saham publik yang ikut serta.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EDGE",
   "Indointernet",
   "VTO",
   "Digital Edge Hong Kong"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5ec4779748_2386f08b9c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-tipis-ke-rp17-695-ikuti-asia",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Tipis ke Rp17.695, Ikuti Asia",
  "deck": "Rupiah naik 28 poin ke Rp17.695 per dolar AS, sejalan dengan penguatan mayoritas mata uang Asia, sementara euro dan poundsterling melemah.",
  "date": "26 Agustus 2026",
  "image": "assets/img/rupiah-kurs.jpg",
  "tags": [
   "rupiah",
   "kurs dolar",
   "mata uang asia",
   "nilai tukar"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462595-rupiah-kembali-menguat-tembus-rp17695-per-dolar-as-di-tengah-penguatan-mata-uang-asia"
 },
 {
  "slug": "adhi-koreksi-penundaan-bunga-obligasi-kupon-menumpuk-juli-2027",
  "category": "Aksi Korporasi",
  "title": "ADHI Koreksi Penundaan Bunga Obligasi, [Kupon] Menumpuk Juli 2027",
  "deck": "BEI mengoreksi pengumuman restrukturisasi obligasi ADHI, menegaskan hasil RUPO 6 Agustus 2026 untuk seri ADHI04CN1 senilai Rp102,715 miliar, dengan dua jadwal kupon bergeser ke 9 Juli 2027.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "restrukturisasi utang",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2acab768c2_d8b3f14977.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-tembus-6-500-langsung-ambruk-1-dalam-4-menit",
  "category": "Pasar Modal",
  "title": "IHSG Tembus 6.500, Langsung [Ambruk] 1% dalam 4 Menit",
  "deck": "IHSG dibuka menguat tipis ke 6.507, namun anjlok 1,05% hanya empat menit kemudian di tengah mayoritas saham yang melemah.",
  "date": "26 Agustus 2026",
  "image": "assets/img/lantai-bursa-sepi.jpg",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "LQ45",
   "Pasar Saham"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462591-ihsg-kembali-ke-6500-tapi-langsung-ambruk-1-di-awal-perdagangan"
 },
 {
  "slug": "mglv-pemegang-mayoritas-lepas-69-juta-saham-rp500-m",
  "category": "Aksi Korporasi",
  "title": "MGLV: Pemegang Mayoritas [Lepas] 69 Juta Saham Rp500 M",
  "deck": "Putra Batee melepas 68,99 juta lembar saham PT Panca Anugrah Wisesa (MGLV) senilai sekitar Rp500,16 miliar, hak suaranya turun dari 71,28% menjadi 67,66% namun tetap mayoritas.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "kepemilikan saham",
   "pemegang saham mayoritas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-26082026-0345-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kuas-bantah-ada-informasi-material-di-balik-volatilitas-transaksi",
  "category": "Aksi Korporasi",
  "title": "KUAS Bantah Ada Informasi Material di Balik [Volatilitas] Transaksi",
  "deck": "Merespons permintaan Bursa Efek Indonesia, PT Ace Oldfields Tbk menyatakan tidak ada informasi material maupun rencana aksi korporasi yang memicu volatilitas transaksi sahamnya belakangan ini.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KUAS",
   "Ace Oldfields",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/823c5d6b05_041fddd940.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-pangan-26-agustus-daging-sapi-rp152-650-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 26 Agustus, Daging Sapi [Rp152.650] per Kg",
  "deck": "PIHPS Bank Indonesia merilis harga pangan nasional 26 Agustus 2026, dari daging sapi, cabai, beras, hingga minyak goreng.",
  "date": "26 Agustus 2026",
  "image": "assets/img/harga-pangan-26-agustus-daging-sapi-rp152-650-per-kg.jpg",
  "imageV": "mt9o4awv",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "daging sapi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462585-harga-pangan-hari-ini-26-agustus-2026-daging-sapi-mulai-rp152650-per-kilogram-hingga-telur-rp28800-per-kilogram"
 },
 {
  "slug": "alto-kena-sanksi-bei-telat-serahkan-laporan-keuangan-q2",
  "category": "Aksi Korporasi",
  "title": "ALTO Kena [Sanksi] BEI, Telat Serahkan Laporan Keuangan Q2",
  "deck": "Tri Banyan Tirta belum menyampaikan laporan keuangan interim per 30 Juni 2026 hingga tenggat 31 Juli 2026 dan dikenai Peringatan Tertulis I oleh BEI.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALTO",
   "sanksi BEI",
   "laporan keuangan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a991dde158_0db0619a5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-rp18-000-ke-rp2-750-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Rp18.000 ke Rp2.750.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp18.000 menjadi Rp2.750.000 per gram, sementara harga buyback ikut melemah ke Rp2.610.000 per gram.",
  "date": "26 Agustus 2026",
  "image": "assets/img/investor-ritel-ponsel.jpg",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462577-harga-emas-antam-hari-ini-26-agustus-2026-terpantau-turun-rp18000-jadi-rp2750000-per-gram"
 },
 {
  "slug": "ketr-tender-sukarela-rp523-diperpanjang-hingga-18-september",
  "category": "Aksi Korporasi",
  "title": "KETR: Tender Sukarela [Rp523] Diperpanjang hingga 18 September",
  "deck": "IMBS memperpanjang tender sukarela saham KETR periode ketiga hingga 18 September 2026 di harga Rp523, setelah belum ada saham yang ditawarkan untuk dijual.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KETR",
   "tender offer",
   "Ketrosden Triasmitra",
   "IMBS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c0c152cbf2_0308708b69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "askrindo-jamin-512-proyek-strategis-rp261-9-triliun",
  "category": "BUMN",
  "title": "Askrindo Jamin [512] Proyek Strategis Rp261,9 Triliun",
  "deck": "Askrindo mencatat dukungan asuransi dan penjaminan untuk 512 proyek strategis dan keamanan nasional senilai Rp261,9 triliun per Desember 2025, termasuk 16 proyek PSN.",
  "date": "26 Agustus 2026",
  "image": "assets/img/askrindo-jamin-512-proyek-strategis-rp261-9-triliun.jpg",
  "imageV": "mt9hfype",
  "tags": [
   "Askrindo",
   "PSN",
   "UMKM",
   "KUR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462576-askrindo-dukung-512-proyek-strategis-dan-perkuat-umkm-nasional"
 },
 {
  "slug": "swid-perkuat-bisnis-hospitality-di-yogyakarta",
  "category": "Aksi Korporasi",
  "title": "SWID Perkuat Bisnis [Hospitality] di Yogyakarta",
  "deck": "SWID membuka hotel bintang lima The Royal Alana dan memulai pembangunan ballroom INNSiDE by Meliá di Yogyakarta, dengan proyeksi pendapatan gabungan naik hingga 50 persen dari kondisi saat ini.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWID",
   "hospitality",
   "Yogyakarta",
   "MICE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/35ebe7bd6f_88a604965b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-proyeksikan-laba-melonjak-dari-akuisisi-gas-skema-belum-final",
  "category": "Aksi Korporasi",
  "title": "PIPA Proyeksikan Laba [Melonjak] dari Akuisisi Gas, Skema Belum Final",
  "deck": "Oxala Energy International (PIPA) mengklaim laba bersihnya bakal melonjak dari rencana akuisisi perusahaan pengolahan gas alam, meski skema, nilai transaksi, dan identitas target belum diungkap.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PIPA",
   "akuisisi",
   "gas alam",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b31c16e316_ae3c50ed6d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meja-siapkan-right-issue-untuk-akuisisi-trimata-coal-perkasa",
  "category": "Aksi Korporasi",
  "title": "MEJA Siapkan [Right Issue] untuk Akuisisi Trimata Coal Perkasa",
  "deck": "RUPSLB MEJA menaikkan modal dasar ke Rp208,6 miliar, membuka jalan bagi rencana jadi holding company dan akuisisi tambang batu bara TCP lewat right issue.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "right issue",
   "akuisisi tambang",
   "holding company"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/050302a857_92cbe58be4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hexa-gelar-rupst-lb-17-september-ubah-pasal-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "HEXA Gelar RUPST-LB 17 September, [Ubah] Pasal Anggaran Dasar",
  "deck": "Hexindo Adiperkasa mengundang pemegang saham ke RUPST dan RUPSLB pada 17 September 2026, salah satu agendanya mengubah Pasal 3 Anggaran Dasar mengikuti KBLI 2025.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEXA",
   "RUPS",
   "Hexindo Adiperkasa",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/043562b9a1_246d4457c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-klarifikasi-akuisisi-10-86-saham-btel",
  "category": "Aksi Korporasi",
  "title": "PRTL Klarifikasi Akuisisi [10,86%] Saham BTEL",
  "deck": "Protelindo menegaskan kepemilikan saham Bakrie Telecom berasal dari konversi obligasi wajib konversi 2014, bukan pembelian kembali seperti disebut media.",
  "date": "26 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "BTEL",
   "Klarifikasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/eec024f060_95767b7df7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bahlil-12-6-gw-listrik-ri-masih-pakai-solar",
  "category": "Energi",
  "title": "Bahlil: 12,6 GW Listrik RI Masih Pakai [Solar]",
  "deck": "Menteri ESDM Bahlil Lahadalia ungkap 12,6 GW pembangkit listrik nasional masih berbahan bakar solar, pemerintah percepat PLTS 100 GWp untuk tekan impor BBM.",
  "date": "25 Agustus 2026",
  "image": "assets/img/bahlil-12-6-gw-listrik-ri-masih-pakai-solar.jpg",
  "imageV": "mt8q7mn1",
  "tags": [
   "PLTS",
   "solar",
   "ESDM",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462484-gaspol-plts-100-gwp-bahlil-ungkap-126-gw-listrik-indonesia-masih-pakai-solar"
 },
 {
  "slug": "pemerintah-luncurkan-tahap-awal-plts-100-gwp-di-6-provinsi",
  "category": "Energi",
  "title": "Pemerintah Luncurkan Tahap Awal [PLTS] 100 GWp di 6 Provinsi",
  "deck": "Program PLTS 100 GWp dimulai dengan 14 proyek berkapasitas 5,3 GWp di enam provinsi, dari Bali hingga pulau terpencil di Bangka Belitung.",
  "date": "25 Agustus 2026",
  "image": "assets/img/pemerintah-luncurkan-tahap-awal-plts-100-gwp-di-6-provinsi.jpg",
  "imageV": "mt8l5ku9",
  "tags": [
   "PLTS",
   "energi surya",
   "ESDM",
   "Bali"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dari-gilimanuk-hingga-pulau-rengit-program-plts-100-gwp-dorong-kemandirian-energi-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bahlil-klaim-plts-100-gwp-buka-5-52-juta-lapangan-kerja",
  "category": "Energi",
  "title": "Bahlil Klaim PLTS 100 GWp Buka [5,52 Juta] Lapangan Kerja",
  "deck": "Menteri ESDM Bahlil Lahadalia mengklaim proyek PLTS 100 GWp bisa menghemat subsidi energi Rp73,9 triliun per tahun dan membuka 5,52 juta lapangan kerja.",
  "date": "25 Agustus 2026",
  "image": "assets/img/bahlil-klaim-plts-100-gwp-buka-5-52-juta-lapangan-kerja.jpg",
  "imageV": "mt8l5lie",
  "tags": [
   "PLTS",
   "Bahlil Lahadalia",
   "subsidi energi",
   "lapangan kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462441-bahlil-klaim-bisa-hemat-rp739-triliun-dan-buka-552-juta-lapangan-kerja-lewat-plts-100-gwp"
 },
 {
  "slug": "arko-rampungkan-akuisisi-100-saham-endorshine-energy",
  "category": "Aksi Korporasi",
  "title": "ARKO Rampungkan [Akuisisi] 100% Saham Endorshine Energy",
  "deck": "Dua anak usaha Arkora Hydro, PT Arkora Tenaga Matahari dan PT Arjuna Hidro, resmi menguasai 100% saham PT Endorshine Energy Solution setelah mendapat persetujuan Kementerian Hukum.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "akuisisi",
   "Arkora Hydro",
   "energi terbarukan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50c8be6b31_d31059f7b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jpfa-komisaris-utama-syamsir-siregar-wafat",
  "category": "Aksi Korporasi",
  "title": "JPFA: Komisaris Utama Syamsir Siregar [Wafat]",
  "deck": "JAPFA Comfeed melaporkan wafatnya Komisaris Utama H. Syamsir Siregar pada 25 Agustus 2026; susunan baru Dewan Komisaris akan ditetapkan di RUPS terdekat.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "JAPFA Comfeed",
   "Dewan Komisaris",
   "Komisaris Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b9cd126697_994f8d0e24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-tanggapi-suspensi-saham-rupo-obligasi-gagal-kuorum",
  "category": "Aksi Korporasi",
  "title": "ADHI Tanggapi [Suspensi] Saham, RUPO Obligasi Gagal Kuorum",
  "deck": "ADHI menghormati suspensi saham oleh BEI akibat gagal bayar bunga obligasi Rp60,8 miliar. RUPO 6 Agustus untuk menunda pembayaran belum mencapai kuorum, rapat lanjutan digelar 11 September 2026.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "suspensi saham",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/fa1ece8178_7c638e5ee5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-lagi-jadi-rp2-768-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Lagi Jadi Rp2.768.000 per Gram",
  "deck": "Harga emas batangan Antam naik Rp18.000 menjadi Rp2.768.000 per gram hari ini, sementara harga beli kembali juga naik ke Rp2.628.000 per gram.",
  "date": "25 Agustus 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "emas",
   "harga emas",
   "antam"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462306-harga-emas-antam-hari-ini-25-agustus-2026-naik-lagi-harganya-jadi-rp2768000-per-gram"
 },
 {
  "slug": "umkm-sawit-didorong-tembus-pasar-ekspor",
  "category": "UMKM",
  "title": "UMKM Sawit Didorong [Tembus] Pasar Ekspor",
  "deck": "INDEF menilai hilirisasi kelapa sawit membuka peluang UMKM naik kelas ke pasar ekspor, yang kontribusinya masih tertahan di sekitar 15 persen.",
  "date": "25 Agustus 2026",
  "image": "assets/img/umkm-sawit-didorong-tembus-pasar-ekspor.jpg",
  "imageV": "mt81u6c2",
  "tags": [
   "kelapa sawit",
   "UMKM",
   "ekspor",
   "hilirisasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462302-indef-dorong-produk-sawit-indonesia-tembus-pasar-ekspor"
 },
 {
  "slug": "avia-kantongi-peringkat-esg-1-dari-sustainalytics-di-antara-peer",
  "category": "Aksi Korporasi",
  "title": "AVIA Kantongi Peringkat [ESG] #1 dari Sustainalytics di Antara Peer",
  "deck": "Avia Avian mencatat ESG Risk Rating 16,9 per 30 Juni 2026, turun dari 21,3 pada September 2025, dan menempati peringkat pertama di antara emiten sekelas kapitalisasi pasar.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "ESG",
   "Sustainalytics",
   "Avian Brands"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9e824d5796_e6b03b6691.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "komunitas-trader-indonesia-kumpul-di-tradependence-day-2026",
  "category": "Pasar Modal",
  "title": "Komunitas [Trader] Indonesia Kumpul di Tradependence Day 2026",
  "deck": "JUNO dan Minerva Media Markets menggelar Tradependence Day 2026 di Jakarta, menyatukan trader ritel dan sembilan komunitas trading di bawah tema \"No Random Move\".",
  "date": "25 Agustus 2026",
  "image": "assets/img/komunitas-trader-indonesia-kumpul-di-tradependence-day-2026.jpg",
  "imageV": "mt81u70v",
  "tags": [
   "trading",
   "JUNO",
   "komunitas trader",
   "Tradependence Day"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462270-bukan-cuma-soal-profit-ini-tantangan-baru-yang-dihadapi-trader-di-pasar-yang-makin-cepat"
 },
 {
  "slug": "visi-ubah-bisnis-jadi-holding-rencana-kuasai-72-91-saham-hmbc",
  "category": "Aksi Korporasi",
  "title": "VISI Ubah Bisnis Jadi Holding, Rencana Kuasai 72,91% Saham [HMBC]",
  "deck": "VISI menandatangani perjanjian bersyarat untuk mengambil alih 72,91% saham rumah sakit di Cirebon, HMBC, sekaligus mengubah kegiatan usaha menjadi perusahaan induk.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "akuisisi",
   "HMBC",
   "rumah sakit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/792f051fc3_971a93e39f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-siapkan-private-placement-10-saham-untuk-masuk-kesehatan",
  "category": "Aksi Korporasi",
  "title": "VISI Siapkan Private Placement 10% Saham untuk Masuk [Kesehatan]",
  "deck": "Satu Visi Putra berencana menerbitkan hingga 307,5 juta saham baru tanpa hak memesan efek terlebih dahulu untuk memperkuat modal sekaligus menjadi holding perusahaan sektor kesehatan.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "private placement",
   "PMTHMETD",
   "sektor kesehatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d8576b1c05_342fd0ce28.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "visi-jadwalkan-rups-independen-pada-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "VISI Jadwalkan RUPS [Independen] pada 30 September 2026",
  "deck": "Satu Visi Putra menjadwalkan RUPSLB dan RUPS Independen pada 30 September 2026, dengan pendaftaran pemegang saham ditutup 7 September dan pemanggilan resmi 8 September 2026.",
  "date": "25 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "RUPS Independen",
   "Satu Visi Putra",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c528e5f292_23487cdd41.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pendapatan-finpay-danantara-melesat-41-3-persen",
  "category": "BUMN",
  "title": "Pendapatan Finpay Danantara [Melesat] 41,3 Persen",
  "deck": "PT Finnet Indonesia (Finpay) mencatat pendapatan eksternal Rp914,5 miliar pada semester I 2026, naik 41,3 persen dibanding tahun sebelumnya di tengah sinergi dengan Danantara Indonesia.",
  "date": "24 Agustus 2026",
  "image": "assets/img/pendapatan-finpay-danantara-melesat-41-3-persen.jpg",
  "imageV": "mt7vg0zr",
  "tags": [
   "Finpay",
   "Danantara Indonesia",
   "BUMN",
   "Fintech"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462247-pertumbuhan-melesat-finpay-komitmen-akselerasi-bersama-danantara-indonesia"
 },
 {
  "slug": "beef-klarifikasi-lonjakan-saham-bantah-rumor-akuisisi-korea",
  "category": "Aksi Korporasi",
  "title": "BEEF Klarifikasi Lonjakan Saham, Bantah Rumor [Akuisisi] Korea",
  "deck": "Public expose insidentil BEEF usai suspensi cooling down BEI: manajemen bantah ada informasi material tersembunyi, juga bantah rumor akuisisi oleh perusahaan Korea.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "suspensi saham",
   "rumor akuisisi",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2468fdfb8e_a0106f0da3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-rilis-direksi-dsi-bos-freeport-jadi-komisaris",
  "category": "BUMN",
  "title": "Danantara Rilis Direksi [DSI], Bos Freeport Jadi Komisaris",
  "deck": "Danantara resmi mengumumkan direksi dan komisaris PT Danantara Sumber Daya Indonesia (DSI), entitas baru pengawas tata kelola ekspor batu bara, sawit, dan ferro alloy hingga akhir 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/pesawat-bandara.jpg",
  "tags": [
   "Danantara",
   "PT DSI",
   "ekspor SDA",
   "Freeport Indonesia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462232-danantara-umumkan-daftar-direksi-dan-komisaris-dsi-ada-bos-freeport-indonesia"
 },
 {
  "slug": "emas-komisaris-xinyu-wang-jual-500-000-saham-divestasi",
  "category": "Aksi Korporasi",
  "title": "EMAS: Komisaris Xinyu Wang Jual 500.000 Saham [Divestasi]",
  "deck": "Komisaris EMAS Xinyu Wang melepas 500.000 saham senilai sekitar Rp3,94 miliar pada 20 Agustus 2026, setara 34 persen dari kepemilikannya sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "kepemilikan saham",
   "komisaris",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-9163-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-anak-usaha-teken-perjanjian-peralatan-dengan-vision-green",
  "category": "Aksi Korporasi",
  "title": "EMAS: Anak Usaha Teken Perjanjian [Peralatan] dengan Vision Green",
  "deck": "Anak usaha EMAS, PT Pani Industri Nusantara, menandatangani perjanjian jual beli peralatan dan jasa konsultasi dengan perusahaan Tiongkok Vision Green Energy, efektif 21 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Transaksi Material",
   "Pani Gold Project",
   "Vision Green Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/42bab47906_f3a55220f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kras-jadwal-rupslb-diundur-ke-7-september-2026",
  "category": "Aksi Korporasi",
  "title": "KRAS [Jadwal] RUPSLB Diundur ke 7 September 2026",
  "deck": "Krakatau Steel menunda RUPSLB dari 26 Agustus ke 7 September 2026, dengan agenda perubahan aturan dana pensiun, anggaran dasar, dan susunan pengurus.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRAS",
   "RUPSLB",
   "Krakatau Steel",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1ba2d32c91_71d936f3fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-jadwalkan-rupslb-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "ADHI Jadwalkan RUPSLB [30 September 2026]",
  "deck": "PT Adhi Karya menjadwalkan RUPSLB pada 30 September 2026 pukul 14.00 WIB di Jakarta; mata acara resmi baru diumumkan 8 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "RUPSLB",
   "Adhi Karya",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/68acf1f28b_a19eb9bf98.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psgo-tanggapi-bursa-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PSGO Tanggapi Bursa soal [Volatilitas] Transaksi Sahamnya",
  "deck": "Palma Serasih menyatakan tak mengetahui informasi material apa pun yang menjelaskan pergerakan tak biasa sahamnya, menyusul permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "Palma Serasih",
   "Bursa Efek Indonesia",
   "Volatilitas Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/490b923537_44a83c3280.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-koreksi-rupslb-ekspansi-ke-bisnis-baja-dan-tambak-udang",
  "category": "Aksi Korporasi",
  "title": "MKNT Koreksi RUPSLB, [Ekspansi] ke Bisnis Baja dan Tambak Udang",
  "deck": "Selain merevisi tanggal pencatatan pemegang saham, koreksi panggilan RUPSLB MKNT menambahkan agenda baru: perluasan usaha jadi holding yang menaungi perusahaan baja dan tambak udang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "RUPSLB",
   "PMTHMETD",
   "holding"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7cdadd91b9_18caeb2c91.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-adhi-setujui-penundaan-bunga-obligasi-ke-juli-2027",
  "category": "Aksi Korporasi",
  "title": "RUPO ADHI Setujui [Penundaan] Bunga Obligasi ke Juli 2027",
  "deck": "Pemegang obligasi ADHI menyetujui penundaan dua kali pembayaran bunga Obligasi Berkelanjutan IV Tahap I 2024 ke tanggal jatuh tempo, menyusul gagal bayar kupon seri lain.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "restrukturisasi utang",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e7260a9b26_696f039ea2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpii-peroleh-kredit-rp80-miliar-dari-cimb-niaga",
  "category": "Aksi Korporasi",
  "title": "BPII Peroleh [Kredit] Rp80 Miliar dari CIMB Niaga",
  "deck": "Batavia Prosperindo Internasional menandatangani fasilitas kredit revolving maksimum Rp80 miliar dengan Bank CIMB Niaga untuk pembiayaan modal kerja, bertenor 12 bulan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPII",
   "kredit perbankan",
   "CIMB Niaga",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e787a4fa11_1b736ca0db.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbsi-rupslb-gagal-kuorum-perubahan-direksi-batal-dibahas",
  "category": "Aksi Korporasi",
  "title": "BBSI: RUPSLB [Gagal] Kuorum, Perubahan Direksi Batal Dibahas",
  "deck": "RUPSLB Krom Bank Indonesia batal membahas perubahan direksi, remunerasi, dan anggaran dasar karena kuorum kehadiran cuma 9,84 persen dari syarat minimal dua pertiga saham.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBSI",
   "Krom Bank Indonesia",
   "RUPSLB",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a42996fc21_3758ebf503.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-rombak-lini-usaha-rambah-holding-dan-pembiayaan",
  "category": "Aksi Korporasi",
  "title": "SOFA Rombak Lini Usaha, Rambah [Holding] dan Pembiayaan",
  "deck": "SOFA akan meminta persetujuan pemegang saham lewat RUPSLB 30 September 2026 untuk menambah usaha holding dan pembiayaan conduit, di tengah kerugian yang terus membesar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "perubahan kegiatan usaha",
   "RUPSLB",
   "holding"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9fa6a50b5f_0b0eba4bca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sofa-gelar-rupslb-atas-permintaan-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "SOFA Gelar [RUPSLB] atas Permintaan Pemegang Saham",
  "deck": "PT Solusi Environment Asia Tbk akan menggelar RUPSLB pada 30 September 2026, yang menurut pengumuman perseroan digelar atas permintaan pemegang saham, bukan inisiatif direksi.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOFA",
   "RUPSLB",
   "Solusi Environment Asia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3981f955e3_a53e999535.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-komisaris-andri-hutama-putra-jual-1-76-juta-saham",
  "category": "Aksi Korporasi",
  "title": "CYBR: Komisaris Andri Hutama Putra [jual] 1,76 juta saham",
  "deck": "Andri Hutama Putra melepas 1,76 juta saham ITSEC Asia lewat 14 transaksi sejak 23 Juni hingga 11 Agustus 2026, hak suaranya turun tipis dari 0,242% menjadi 0,228%.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-8635-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrme-rombak-susunan-komite-nominasi-dan-remunerasi",
  "category": "Aksi Korporasi",
  "title": "HRME Rombak Susunan [Komite] Nominasi dan Remunerasi",
  "deck": "Menteng Heritage Realty mengganti satu anggota Komite Nominasi dan Remunerasi menyusul pengunduran diri Sri Rejeki Suryaningrum, posisinya diisi Harri Rinaldiawan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRME",
   "Komite Nominasi dan Remunerasi",
   "Menteng Heritage Realty",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c07a863b07_9794ed69c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wton-ubah-susunan-komite-audit-andrianto-jadi-anggota-baru",
  "category": "Aksi Korporasi",
  "title": "WTON Ubah Susunan [Komite Audit], Andrianto Jadi Anggota Baru",
  "deck": "Wijaya Karya Beton menambah Andrianto sebagai anggota Komite Audit menyusul perubahan Dewan Komisaris hasil RUPSLB Juli 2026, efektif 20 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WTON",
   "Komite Audit",
   "Wijaya Karya Beton",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/76540d3e4e_a6b9807aa2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wton-rombak-komite-nominasi-remunerasi-andrianto-ketua-baru",
  "category": "Aksi Korporasi",
  "title": "WTON Rombak Komite Nominasi-Remunerasi, [Andrianto] Ketua Baru",
  "deck": "Wijaya Karya Beton mengganti susunan Komite Nominasi, Remunerasi, dan Pemantau Risiko menyusul pergantian Dewan Komisaris hasil RUPSLB Juli 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WTON",
   "Wijaya Karya Beton",
   "Komite Nominasi dan Remunerasi",
   "Tata Kelola Korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/445783a102_2656808f44.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soci-beri-jaminan-pinjaman-us-54-9-juta-ke-anak-usaha-eom",
  "category": "Aksi Korporasi",
  "title": "SOCI Beri [Jaminan] Pinjaman US$54,9 Juta ke Anak Usaha EOM",
  "deck": "Soechi Lines menjamin fasilitas pinjaman berjangka anak usahanya, Eternity Ocean Maritime, senilai AS$54,9 juta dari Bank Mandiri cabang Singapura.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOCI",
   "Soechi Lines",
   "corporate guarantee",
   "Bank Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/992a708585_f7d9f14841.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcor-undur-rupslb-pergantian-direksi-ke-15-september",
  "category": "Aksi Korporasi",
  "title": "MCOR Undur RUPSLB Pergantian Direksi ke [15 September]",
  "deck": "Bank China Construction Bank Indonesia (MCOR) menunda RUPSLB dari 4 menjadi 15 September 2026, agenda tunggalnya tetap perubahan susunan direksi dan komisaris.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MCOR",
   "RUPSLB",
   "Bank China Construction Bank Indonesia",
   "pergantian pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b8047642f9_f71fdaa7b4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-panggil-rupslb-15-september-ajukan-restrukturisasi-total",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPSLB 15 September, Ajukan [Restrukturisasi] Total",
  "deck": "PTPP memanggil RUPSLB pada 15 September 2026 untuk meminta persetujuan pemegang saham atas restrukturisasi menyeluruh, termasuk konversi pinjaman bank dan non-bank jangka pendek menjadi jangka panjang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "RUPSLB",
   "restrukturisasi utang",
   "BUMN karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/866d56b8d7_3bb3caaf14.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "padi-djoko-joelijanto-resmi-jadi-pengendali-perusahaan",
  "category": "Aksi Korporasi",
  "title": "PADI: Djoko Joelijanto Resmi Jadi [Pengendali] Perusahaan",
  "deck": "RUPSLB kedua Minna Padi Investama Sekuritas menetapkan Djoko Joelijanto sebagai pengendali dan pemilik manfaat akhir, sekaligus mengangkat direktur baru.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PADI",
   "RUPSLB",
   "Minna Padi Sekuritas",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/98867da036_7d282aa5a4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "refi-kena-sanksi-bursa-akibat-telat-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "REFI Kena [Sanksi] Bursa akibat Telat Laporan Keuangan",
  "deck": "Bursa Efek Indonesia menjatuhkan Peringatan Tertulis I ke REFI karena belum menyampaikan laporan keuangan tengah tahunan per 30 Juni 2026 hingga batas waktu 31 Juli 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REFI",
   "sanksi BEI",
   "laporan keuangan",
   "keterlambatan pelaporan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c42684598_4291bba54c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-dirikan-anak-usaha-garap-energi-surya",
  "category": "Aksi Korporasi",
  "title": "ARKO Dirikan Anak Usaha Garap [Energi Surya]",
  "deck": "Anak usaha ARKO, PT Arkora Tenaga Matahari, mendirikan PT Endorshine Energi Matahari. ARKO memegang kepemilikan tidak langsung 99 persen di perusahaan baru itu.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "energi surya",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4976446fc8_7379c767c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-gtbo-masuk-papan-pemantauan-khusus-bei-26-agustus",
  "category": "Aksi Korporasi",
  "title": "Saham GTBO [Masuk] Papan Pemantauan Khusus BEI 26 Agustus",
  "deck": "Bursa Efek Indonesia memasukkan saham Garda Tujuh Buana (GTBO) ke daftar Efek Dalam Pemantauan Khusus, efektif 26 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "Bursa Efek Indonesia",
   "pemantauan khusus",
   "Garda Tujuh Buana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/548f364f19_57853e8d24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brrc-bantah-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BRRC Bantah Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "PT Raja Roti Cemerlang Tbk (BRRC) menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkapkan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRRC",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/905023e38a_6026afe09b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkomgroup-salurkan-bantuan-rp1-3-m-ke-korban-gempa-ntt",
  "category": "BUMN",
  "title": "TelkomGroup Salurkan [Bantuan] Rp1,3 M ke Korban Gempa NTT",
  "deck": "TelkomGroup menyalurkan bantuan kemanusiaan Rp1,3 miliar ke lebih dari 10 wilayah NTT terdampak gempa, termasuk kawasan terisolir yang dijangkau lewat jalur laut.",
  "date": "24 Agustus 2026",
  "image": "assets/img/telkomgroup-salurkan-bantuan-rp1-3-m-ke-korban-gempa-ntt.jpg",
  "imageV": "mt727tr7",
  "tags": [
   "Telkom",
   "TelkomGroup",
   "Gempa NTT",
   "Bantuan Kemanusiaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462189-telkomgroup-salurkan-bantuan-kemanusiaan-rp13-miliar-untuk-masyarakat-terdampak-gempa-ntt"
 },
 {
  "slug": "sido-jadwalkan-public-expose-tahunan-9-september-2026",
  "category": "Aksi Korporasi",
  "title": "SIDO Jadwalkan [Public Expose] Tahunan 9 September 2026",
  "deck": "Sido Muncul akan menggelar paparan publik tahunan secara virtual pada 9 September 2026, membahas kinerja semester I dan strategi bisnis.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIDO",
   "Sido Muncul",
   "public expose",
   "kinerja semester I"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2ca366e094_5f94a8a707.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmnd-jadwalkan-rupslb-pada-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "DMND Jadwalkan RUPSLB pada [30 September] 2026",
  "deck": "PT Diamond Food Indonesia Tbk (DMND) akan menggelar RUPSLB pada 30 September 2026, dengan batas pencatatan pemegang saham pada 7 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMND",
   "RUPSLB",
   "Diamond Food Indonesia",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9675bde900_46766e28e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-direksi-jual-2-35-juta-saham-divestasi-rp4-48-m",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi Jual 2,35 Juta Saham, [Divestasi] Rp4,48 M",
  "deck": "George Oetomo, direksi TAPG, melepas 2,35 juta saham dalam dua transaksi pada 20-21 Agustus, hanya lima hari setelah penjualan sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-4169-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elsa-direktur-sdm-hera-handayani-mundur-tunggu-rupslb",
  "category": "Aksi Korporasi",
  "title": "ELSA: Direktur SDM Hera Handayani [Mundur], Tunggu RUPSLB",
  "deck": "Direktur Sumber Daya Manusia dan Umum Elnusa, Hera Handayani, mengajukan pengunduran diri pada 20 Agustus 2026, efektif setelah disetujui RUPS berikutnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/65f00c7421_0ca25078c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-terima-rp746-7-m-dari-dividen-interim-amp",
  "category": "Aksi Korporasi",
  "title": "TAPG Terima Rp746,7 M dari [Dividen] Interim AMP",
  "deck": "AMP, anak usaha yang 94,93 persen sahamnya dimiliki TAPG, membagikan dividen interim Rp786,6 miliar. Bagian TAPG diperkirakan sekitar Rp746,7 miliar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "dividen interim",
   "transaksi afiliasi",
   "Agro Multi Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/eb69ac6855_cd3001c90a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smkm-jawab-bursa-siapkan-rights-issue-dalam-3-bulan",
  "category": "Aksi Korporasi",
  "title": "SMKM Jawab Bursa, Siapkan [Rights Issue] dalam 3 Bulan",
  "deck": "Menjawab permintaan penjelasan BEI soal volatilitas transaksi, SMKM membantah punya info material tapi mengungkap rencana rights issue dalam waktu dekat.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMKM",
   "rights issue",
   "PMHMETD",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/cbfe541260_8f2bb2a5f5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fwct-umumkan-rencana-rupslb-pada-1-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "FWCT Umumkan Rencana [RUPSLB] pada 1 Oktober 2026",
  "deck": "PT Wijaya Cahaya Timber Tbk akan menggelar RUPS Luar Biasa pada 1 Oktober 2026, dengan pemegang saham per 8 September 2026 berhak hadir dan memberi suara.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "RUPSLB",
   "RUPS",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f4fc1efeff_de923e1b63.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpjs-buka-cicilan-iuran-mulai-rp10-000-per-hari",
  "category": "Bisnis",
  "title": "BPJS Buka [Cicilan] Iuran Mulai Rp10.000 per Hari",
  "deck": "Program REHAB 3.0 BPJS Kesehatan memberi peserta mandiri opsi mencicil tunggakan iuran JKN mulai Rp10.000 per hari agar kepesertaan tetap aktif.",
  "date": "24 Agustus 2026",
  "image": "assets/img/bpjs-buka-cicilan-iuran-mulai-rp10-000-per-hari.jpg",
  "imageV": "mt75t3n7",
  "tags": [
   "BPJS Kesehatan",
   "REHAB 3.0",
   "JKN",
   "cicilan iuran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462162-program-rehab-30-buka-pilihan-cicilan-sesuai-kemampuan"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-jual-lagi-4-juta-saham-hak-suara-34-24",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Jual Lagi 4 Juta Saham, Hak Suara [34,24%]",
  "deck": "Putrasakti Mandiri kembali menjual 4 juta saham KDTN pada 21 Agustus 2026 seharga Rp355 per saham untuk restrukturisasi kepemilikan dalam grup usaha, hak suaranya turun ke 34,24 persen.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2921-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amar-jadwalkan-rupslb-pada-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "AMAR Jadwalkan [RUPSLB] pada 30 September 2026",
  "deck": "Bank Amar Indonesia menjadwalkan RUPSLB pada 30 September 2026, sementara pemanggilan resmi berisi agenda rapat baru akan diumumkan 8 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMAR",
   "RUPSLB",
   "Bank Amar Indonesia",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50b9dabeaa_caf20655e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-rupslb-setujui-komisaris-joyce-soeryadjaya-kerr-mundur",
  "category": "Aksi Korporasi",
  "title": "SRTG: RUPSLB Setujui [Komisaris] Joyce Soeryadjaya Kerr Mundur",
  "deck": "RUPSLB Saratoga 21 Agustus menyetujui pengunduran diri Komisaris Joyce Soeryadjaya Kerr dan penyesuaian anggaran dasar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "RUPSLB",
   "Dewan Komisaris",
   "Saratoga Investama Sedaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8293b78a41_fba9b9dba4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdes-bri-mi-ganti-pengendali-rencana-gabung-ke-mandiri-mi",
  "category": "Aksi Korporasi",
  "title": "XDES: BRI-MI Ganti [Pengendali], Rencana Gabung ke Mandiri MI",
  "deck": "PT Danantara Asset Management mengambil alih saham BRI Manajemen Investasi dari BRI dan Danareksa, sebelum BRIMI digabung ke Mandiri Manajemen Investasi pada 1 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDES",
   "BRIMI",
   "Danantara Asset Management",
   "Merger Manajer Investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/feb3e70b44_021867da8e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdif-pengendali-brimi-berganti-merger-ke-mandiri-mi-1-sept",
  "category": "Aksi Korporasi",
  "title": "XDIF: Pengendali BRIMI Berganti, [Merger] ke Mandiri MI 1 Sept",
  "deck": "Manajer investasi ETF XDIF diambil alih Danantara Asset Management dan akan bergabung dengan BNI AM serta PNM IM ke Mandiri Manajemen Investasi mulai 1 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDIF",
   "BRIMI",
   "Danantara Asset Management",
   "merger manajer investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a6d85a2607_b33376081c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-sesuaikan-waran-terstruktur-bbca-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "BQ Sesuaikan [Waran Terstruktur] BBCA Usai Dividen Tunai",
  "deck": "PT Korea Investment and Sekuritas Indonesia mengubah rasio dan harga pelaksanaan waran BBCABQCU6A dan BBCABQCX6A menyusul dividen tunai BBCA Rp50 per saham yang dibayar 16 September 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BQ",
   "BBCA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ec4b3d4917_a97d335541.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmbl-pemegang-saham-lepas-43-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "BMBL: Pemegang Saham Lepas [43 Juta] Saham Lewat Repo",
  "deck": "AMMAR AL AMANAH melepas 43 juta saham BMBL senilai sekitar Rp1,21 miliar lewat empat transaksi repurchase agreement, memangkas hak suaranya dari 23,19% menjadi 19,02%.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMBL",
   "kepemilikan saham",
   "repurchase agreement",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2952-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tnca-undang-rupslb-16-september-agenda-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "TNCA Undang RUPSLB 16 September, Agenda [Perubahan] Direksi",
  "deck": "Trimuda Nuansa Citra (TNCA) memanggil RUPSLB pada 16 September 2026 dengan agenda perubahan anggaran dasar dan susunan direksi atau komisaris.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TNCA",
   "RUPSLB",
   "Direksi dan Komisaris",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c0731fb0f7_b1909ee09d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pengusaha-minta-stabilitas-dijaga-demi-investasi",
  "category": "Bisnis",
  "title": "Pengusaha Minta Stabilitas Dijaga demi [Investasi]",
  "deck": "HIPMI menyerukan dinamika penyampaian aspirasi di berbagai daerah tidak mengganggu aktivitas ekonomi, investasi, dan lapangan kerja yang tengah dibangun.",
  "date": "24 Agustus 2026",
  "image": "assets/img/pengusaha-minta-stabilitas-dijaga-demi-investasi.jpg",
  "imageV": "mt6ycq08",
  "tags": [
   "HIPMI",
   "investasi",
   "stabilitas ekonomi",
   "dunia usaha"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462131-dunia-usaha-serukan-kondusivitas-jaga-momentum-investasi-dan-aktivitas-ekonomi"
 },
 {
  "slug": "scpi-direktur-yeap-xin-yi-mundur-direksi-berubah",
  "category": "Aksi Korporasi",
  "title": "SCPI: Direktur Yeap Xin Yi Mundur, Direksi [Berubah]",
  "deck": "RUPSLB Organon Pharma Indonesia menyetujui pengunduran diri Direktur Yeap Xin Yi dan menetapkan susunan Direksi baru beranggotakan tiga orang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCPI",
   "Organon Pharma Indonesia",
   "RUPSLB",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6aea9c17b0_d2bc7cdacb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psab-jawab-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "PSAB Jawab Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "J Resources Asia Pasifik (PSAB) menegaskan tidak ada informasi material tersembunyi maupun rencana aksi korporasi terkait lonjakan volatilitas transaksi sahamnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "J Resources Asia Pasifik",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2a87fc023c_fe5ad1a90a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emtk-lepas-99-99-saham-anak-usaha-aca-ke-yuslinda-nasution",
  "category": "Aksi Korporasi",
  "title": "EMTK [Lepas] 99,99% Saham Anak Usaha ACA ke Yuslinda Nasution",
  "deck": "Elang Mahkota Teknologi menjual seluruh sahamnya di PT Abhimata Citra Abadi, mengalihkan pengendalian dan menghentikan konsolidasi laporan keuangan anak usaha itu.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMTK",
   "divestasi anak usaha",
   "ACA",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4bc7831137_6cdf75fbf1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trus-bantah-ada-informasi-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "TRUS Bantah Ada Informasi Material soal [Volatilitas] Saham",
  "deck": "Menjawab surat klarifikasi Bursa Efek Indonesia, Trust Finance Indonesia (TRUS) menyatakan tidak ada informasi material di balik pergerakan volatile transaksi sahamnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUS",
   "Bursa Efek Indonesia",
   "Volatilitas Saham",
   "Keterbukaan Informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/96f3338378_41a8ee3985.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-suspensi-saham-dicabut-bei-usai-4-bulan",
  "category": "Aksi Korporasi",
  "title": "BIKE [Suspensi] Saham Dicabut BEI Usai 4 Bulan",
  "deck": "Bursa mencabut penghentian sementara perdagangan saham BIKE mulai 24 Agustus 2026, setelah suspensi sejak akhir April terkait perubahan pengendalian perusahaan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "suspensi saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4c1076b851_5b24bb5e5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "goto-rafly-umarsyah-tambah-kepemilikan-saham-jadi-2-200-unit",
  "category": "Aksi Korporasi",
  "title": "GOTO: Rafly Umarsyah Tambah [Kepemilikan] Saham Jadi 2.200 Unit",
  "deck": "Pelapor non-direksi/komisaris GOTO menambah 1.900 unit saham lewat pembelian tidak langsung, dari 300 menjadi 2.200 unit, hak suara tetap 0,00%.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOTO",
   "kepemilikan saham",
   "hak suara multiple",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2380-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-600-saham-rp309-ribu",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 600 Saham Rp309 Ribu",
  "deck": "Komisaris AKPI, Henry Liem, melepas 600 saham senilai Rp309.000 pada 21 Agustus 2026, transaksi terkecil dalam rangkaian penjualan sahamnya pekan ini.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Henry Liem",
   "komisaris",
   "transaksi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2341-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apli-tegaskan-tak-ada-info-material-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "APLI Tegaskan Tak Ada Info Material soal [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan Bursa Efek Indonesia, manajemen Asiaplast Industries (APLI) menyatakan tidak mengetahui informasi material di balik pergerakan transaksi sahamnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APLI",
   "Asiaplast Industries",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/373e78a71b_59dc0d7a68.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-wna-borong-5-62-juta-saham-itsec-asia",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi WNA [borong] 5,62 juta saham ITSEC Asia",
  "deck": "Direksi ITSEC Asia menambah kepemilikan saham 6,83 persen lewat lima transaksi pembelian tidak langsung pada 21 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-3406-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btel-profesional-telekomunikasi-indonesia-kuasai-10-86-saham",
  "category": "Aksi Korporasi",
  "title": "BTEL: Profesional Telekomunikasi Indonesia Kuasai [10,86%] Saham",
  "deck": "PT Profesional Telekomunikasi Indonesia mengantongi 4,85 miliar saham baru BTEL, setara 10,86% hak suara, hasil konversi Obligasi Wajib Konversi pada harga Rp200 per saham.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTEL",
   "Bakrie Telecom",
   "konversi obligasi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-2726-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-fitch-pertahankan-rating-aa-ruang-gerak-menyempit",
  "category": "Aksi Korporasi",
  "title": "EXCL: Fitch pertahankan rating [AA+], ruang gerak menyempit",
  "deck": "Fitch Ratings mengafirmasi peringkat EXCL di AA+(idn) outlook stabil, tapi menyebut ruang kenaikan leverage sudah nyaris habis akibat konsolidasi dengan Smartfren.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL",
   "Fitch Ratings",
   "peringkat obligasi",
   "XLSMART"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/414ca42131_c221dd0b2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-pemegang-saham-setujui-pmthmetd-868-juta-saham",
  "category": "Aksi Korporasi",
  "title": "HATM: Pemegang Saham Setujui [PMTHMETD] 868 Juta Saham",
  "deck": "RUPS Luar Biasa HATM menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu hingga 868 juta saham untuk PT Multi Sarana Nasional, disetujui 100 persen tanpa penolakan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "RUPS",
   "PMTHMETD",
   "Multi Sarana Nasional"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1255696e96_648a2f3e27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "assa-tambah-fasilitas-kredit-cimb-niaga-jadi-rp100-m-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "ASSA Tambah Fasilitas Kredit CIMB Niaga jadi Rp100 M [Modal Kerja]",
  "deck": "ASSA menambah fasilitas pinjaman tetap dari CIMB Niaga sebesar Rp40 miliar, sehingga total pokok kredit naik dari Rp60 miliar menjadi Rp100 miliar untuk modal kerja pembelian armada kendaraan.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASSA",
   "kredit bank",
   "CIMB Niaga",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b2ae580d3a_a001065a69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-komisaris-hasmoro-beli-lagi-737-700-saham-hermina",
  "category": "Aksi Korporasi",
  "title": "HEAL: Komisaris Hasmoro Beli [Lagi] 737.700 Saham Hermina",
  "deck": "Komisaris Medikaloka Hermina, DR Hasmoro, membeli 737.700 saham HEAL senilai sekitar Rp680 per lembar dalam tiga transaksi 19-21 Agustus, melanjutkan pembelian pekan sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-1158-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vrna-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "VRNA Jawab Permintaan BEI Soal [Volatilitas] Transaksi Saham",
  "deck": "Mizuho Leasing Indonesia menyatakan tidak memiliki informasi material yang menjelaskan pergerakan transaksi sahamnya setelah ditegur bursa.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VRNA",
   "Mizuho Leasing Indonesia",
   "volatilitas saham",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f9315cec94_27fc5ff050.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "klbf-komisaris-tambah-kepemilikan-saham-50-000-lembar",
  "category": "Aksi Korporasi",
  "title": "KLBF: Komisaris Tambah [Kepemilikan] Saham 50.000 Lembar",
  "deck": "Ferdinand Aryanto, Komisaris Kalbe Farma, membeli 50.000 saham KLBF secara tidak langsung pada 21 Agustus 2026, menambah kepemilikannya menjadi 410.000 lembar.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KLBF",
   "Kalbe Farma",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-24082026-4295-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asdf-fitch-afirmasi-peringkat-aaa-untuk-tujuh-obligasi",
  "category": "Aksi Korporasi",
  "title": "ASDF: Fitch Afirmasi Peringkat [AAA] untuk Tujuh Obligasi",
  "deck": "Fitch Ratings Indonesia mempertahankan peringkat AAA(idn) stabil untuk PT Astra Sedaya Finance dan tujuh seri obligasinya senilai total sekitar Rp4,78 triliun.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDF",
   "peringkat kredit",
   "obligasi",
   "Fitch Ratings"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/67e3d4bb17_5e9a6a8ee7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-suspensi-saham-adhi-usai-gagal-bayar-kupon-obligasi",
  "category": "Aksi Korporasi",
  "title": "BEI [Suspensi] Saham ADHI usai Gagal Bayar Kupon Obligasi",
  "deck": "BEI menghentikan sementara perdagangan saham ADHI di seluruh pasar mulai Senin, setelah perseroan menunda pembayaran bunga ke-17 obligasi seri B dan C yang jatuh tempo 24 Agustus 2026.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "suspensi saham",
   "gagal bayar obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d25fe7ed76_3279be7350.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-697-usai-cad-kuartal-ii-melebar",
  "category": "Moneter",
  "title": "[Rupiah] Melemah ke Rp17.697 usai CAD Kuartal II Melebar",
  "deck": "Rupiah melemah tipis ke Rp17.697 per dolar AS, tertekan sentimen defisit transaksi berjalan kuartal II-2026 yang melebar signifikan meski kredit perbankan Juli masih tumbuh solid.",
  "date": "24 Agustus 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-697-usai-cad-kuartal-ii-melebar.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "neraca transaksi berjalan",
   "kredit perbankan"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462084-rupiah-melemah-ke-rp17697-per-dolar-as-usai-laporan-soal-defisit-neraca-transaksi-dan-kredit-perbankan-juli-2026"
 },
 {
  "slug": "harga-pangan-24-agustus-beras-rp14-800-telur-rp29-250-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 24 Agustus: Beras [Rp14.800], Telur Rp29.250 per Kg",
  "deck": "PIHPS Bank Indonesia mencatat harga sejumlah bahan pangan pokok di tingkat pedagang eceran nasional pada 24 Agustus 2026, dari beras, gula, minyak goreng, hingga cabai dan bawang.",
  "date": "24 Agustus 2026",
  "image": "assets/img/harga-pangan-24-agustus-beras-rp14-800-telur-rp29-250-per-kg.jpg",
  "imageV": "mt6phar8",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "beras"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462077-harga-pangan-hari-ini-24-agustus-2026-beras-mulai-rp14800-per-kilogram-hingga-telur-ayam-rp29250-per-kilogram"
 },
 {
  "slug": "harga-emas-antam-naik-rp10-000-kini-rp2-750-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Rp10.000, Kini Rp2.750.000/Gram",
  "deck": "Harga emas Antam hari ini naik Rp10.000 menjadi Rp2.750.000 per gram, sementara harga buyback ikut naik ke Rp2.610.000 per gram.",
  "date": "24 Agustus 2026",
  "image": "assets/img/harga-emas-antam-naik-rp10-000-kini-rp2-750-000-gram.jpg",
  "tags": [
   "emas",
   "harga emas",
   "Antam",
   "investasi"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462075-harga-emas-antam-hari-ini-24-agustus-2026-naik-rp10000-jadi-rp2750000-per-gram"
 },
 {
  "slug": "kkgi-panggil-rupslb-bahas-dividen-tunai-dan-direksi",
  "category": "Aksi Korporasi",
  "title": "KKGI Panggil RUPSLB, Bahas [Dividen] Tunai dan Direksi",
  "deck": "Resource Alam Indonesia mengundang pemegang saham ke RUPSLB 15 September 2026 untuk membahas dividen tunai dari laba ditahan 2025 dan perubahan susunan direksi.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "RUPSLB",
   "dividen",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/067a1cd1e7_8d223a9f0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-jadwalkan-rupslb-30-september-2026",
  "category": "Aksi Korporasi",
  "title": "ASBI Jadwalkan [RUPSLB] 30 September 2026",
  "deck": "Asuransi Bintang mengumumkan rencana RUPS Luar Biasa pada 30 September, pemegang saham per 7 September berhak hadir. Agenda resmi baru terbit lewat pemanggilan 8 September.",
  "date": "24 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "RUPSLB",
   "Asuransi Bintang",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6ddc2781d8_ef049a5698.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-jerman-perkuat-investasi-energi-terbarukan",
  "category": "Energi",
  "title": "Indonesia-Jerman [Perkuat] Investasi Energi Terbarukan",
  "deck": "Indonesia dan Jerman memperluas kerja sama investasi energi terbarukan dan jaringan listrik, di tengah target bauran EBT 18-21 persen pada 2026 yang realisasinya baru sekitar 0,5 persen.",
  "date": "24 Agustus 2026",
  "image": "assets/img/indonesia-jerman-perkuat-investasi-energi-terbarukan.jpg",
  "imageV": "mt6fva1h",
  "tags": [
   "Energi Terbarukan",
   "Indonesia-Jerman",
   "Biofuel B-50",
   "Jaringan Listrik"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/perkuat-ketahanan-energi-indonesia-jerman-percepat-investasi-ebt-dan-jaringan-listrik",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "potensi-panas-bumi-ri-nomor-satu-dunia-baru-11-6-tergarap",
  "category": "Energi",
  "title": "Potensi Panas Bumi RI Nomor Satu Dunia, Baru 11,6% [Tergarap]",
  "deck": "Kementerian ESDM menyiapkan revisi aturan dan insentif pajak untuk mempercepat pengembangan panas bumi, sekaligus meminta pengembang tak menahan konsesi yang sudah didapat.",
  "date": "24 Agustus 2026",
  "image": "assets/img/potensi-panas-bumi-ri-nomor-satu-dunia-baru-11-6-tergarap.jpg",
  "imageV": "mt6fvckd",
  "tags": [
   "panas bumi",
   "ESDM",
   "energi terbarukan",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kejar-potensi-panas-bumi-nomor-satu-dunia-bahlil-minta-pengembang-tak-tahan-konsesi",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kemendag-ajak-kampus-genjot-ekspor-lewat-campuspreneur",
  "category": "UMKM",
  "title": "Kemendag Ajak Kampus Genjot Ekspor Lewat [Campuspreneur]",
  "deck": "Kementerian Perdagangan mengajak kampus dan mahasiswa bergabung dalam program Campuspreneur untuk belajar berwirausaha dan menembus pasar ekspor.",
  "date": "24 Agustus 2026",
  "image": "assets/img/kemendag-ajak-kampus-genjot-ekspor-lewat-campuspreneur.jpg",
  "imageV": "mt6fvr4j",
  "tags": [
   "Campuspreneur",
   "UMKM",
   "ekspor",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-beri-kuliah-umum-di-univet-bantara-sukoharjo-dorong-mahasiswa-rintis-usaha-dan-jadi-eksportir",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kopi-jawa-barat-tembus-ekspor-rp2-64-miliar-ke-inggris",
  "category": "UMKM",
  "title": "Kopi Jawa Barat Tembus Ekspor [Rp2,64 Miliar] ke Inggris",
  "deck": "Kemendag dan Pemprov Jabar melepas ekspor 10 ton biji kopi mentah Java Halu Coffee senilai Rp2,64 miliar ke Inggris, bagian dari perluasan pasar sejak 2019.",
  "date": "24 Agustus 2026",
  "image": "assets/img/kopi-jawa-barat-tembus-ekspor-rp2-64-miliar-ke-inggris.jpg",
  "tags": [
   "ekspor kopi",
   "Jawa Barat",
   "UMKM",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-perkuat-kolaborasi-ekspor-dengan-pemerintah-daerah-lepas-ekspor-kopi-jawa-barat-senilai-rp264-miliar-ke-inggris",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "transaksi-umkm-di-kki-2026-tembus-rp144-2-miliar",
  "category": "UMKM",
  "title": "Transaksi UMKM di KKI 2026 [Tembus] Rp144,2 Miliar",
  "deck": "Bank Indonesia menutup KKI 2026 dengan penjualan sementara Rp144,2 miliar dan pembiayaan UMKM Rp285 miliar, naik dari capaian tahun sebelumnya.",
  "date": "24 Agustus 2026",
  "image": "assets/img/transaksi-umkm-di-kki-2026-tembus-rp144-2-miliar.jpg",
  "imageV": "mt6fvxmv",
  "tags": [
   "UMKM",
   "Bank Indonesia",
   "KKI 2026",
   "Ekspor UMKM"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "iapi-soroti-etika-auditor-di-era-ai-lewat-cpa-days-2026",
  "category": "Bisnis",
  "title": "IAPI Soroti Etika Auditor di Era [AI] Lewat CPA Days 2026",
  "deck": "IAPI dan BINUS University menggelar seminar CPA Days 2026, menyoroti tantangan etika dan professional judgment akuntan publik saat AI masuk ke praktik audit.",
  "date": "23 Agustus 2026",
  "image": "assets/img/iapi-soroti-etika-auditor-di-era-ai-lewat-cpa-days-2026.jpg",
  "imageV": "mt6fvy5v",
  "tags": [
   "audit",
   "AI",
   "IAPI",
   "akuntan publik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462024-praktik-audit-dan-assurance-masuk-era-ai-iapi-dan-binus-university-sorot-persoalan-etika-dan-professional-judgment"
 },
 {
  "slug": "ri-uni-eropa-matangkan-cepa-teken-ditarget-oktober-2026",
  "category": "Global",
  "title": "RI-Uni Eropa Matangkan CEPA, [Teken] Ditarget Oktober 2026",
  "deck": "Indonesia dan Uni Eropa mematangkan persiapan implementasi CEPA yang membebaskan 98 persen pos tarif kedua pihak, dengan penandatanganan ditargetkan Oktober 2026.",
  "date": "23 Agustus 2026",
  "image": "assets/img/ri-uni-eropa-matangkan-cepa-teken-ditarget-oktober-2026.jpg",
  "imageV": "mt5yrnsx",
  "tags": [
   "I-EU CEPA",
   "Uni Eropa",
   "Perdagangan Internasional",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/optimalkan-akses-pasar-ke-eropa-mendag-busan-turut-siapkan-implementasi-i-eu-cepa",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dki-wajibkan-pilah-sampah-4-kategori-bi-dorong-umkm-olah-limbah",
  "category": "UMKM",
  "title": "DKI [Wajibkan] Pilah Sampah 4 Kategori, BI Dorong UMKM Olah Limbah",
  "deck": "SIPSN mencatat 65 persen dari 24,8 juta ton sampah tahunan RI belum terkelola layak. DKI Jakarta kini mewajibkan pemilahan sampah 4 kategori, sementara BI dorong UMKM masuk rantai ekonomi sirkular.",
  "date": "23 Agustus 2026",
  "image": "assets/img/dki-wajibkan-pilah-sampah-4-kategori-bi-dorong-umkm-olah-limbah.jpg",
  "imageV": "mt5yrqxf",
  "tags": [
   "ekonomi sirkular",
   "UMKM",
   "pengelolaan sampah",
   "DKI Jakarta"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "dpr-dorong-ruu-migas-pangkas-birokrasi-agar-investor-kembali",
  "category": "Energi",
  "title": "DPR Dorong RUU Migas [Pangkas] Birokrasi agar Investor Kembali",
  "deck": "DPR mendorong RUU Migas memangkas birokrasi perizinan agar investor kembali masuk dan mendongkrak lifting minyak nasional.",
  "date": "23 Agustus 2026",
  "image": "assets/img/dpr-dorong-ruu-migas-pangkas-birokrasi-agar-investor-kembali.jpg",
  "imageV": "mt5v2yts",
  "tags": [
   "RUU Migas",
   "Lifting Minyak",
   "Investasi Migas",
   "DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461998-dorong-ruu-migas-agar-investor-kembali-dongkrak-lifting-minyak-dpr-soroti-birokrasi-yang-berbelit"
 },
 {
  "slug": "pnm-satukan-58-cabang-lewat-grand-final-porseni-2026",
  "category": "BUMN",
  "title": "PNM Satukan 58 Cabang lewat Grand Final [PORSENI] 2026",
  "deck": "PNM menggelar Grand Final PORSENI 2026 di BRILiaN Stadium, mempertemukan insan dari 58 cabang, kantor pusat, dan anak usaha se-Indonesia dalam ajang olahraga dan seni tahunan.",
  "date": "23 Agustus 2026",
  "image": "assets/img/pnm-satukan-58-cabang-lewat-grand-final-porseni-2026.jpg",
  "imageV": "mt6fvyls",
  "tags": [
   "PNM",
   "PORSENI 2026",
   "BUMN",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461925-pnm-asah-daya-juang-karyawan-melalui-grand-final-porseni-2026"
 },
 {
  "slug": "umkm-perempuan-capai-64-5-persen-bi-soroti-akses-keuangan",
  "category": "UMKM",
  "title": "UMKM Perempuan Capai 64,5 Persen, BI Soroti Akses [Keuangan]",
  "deck": "Data BPS 2025 menunjukkan 64,5 persen UMKM Indonesia dipimpin perempuan, namun akses ke layanan keuangan formal masih jadi pekerjaan rumah dalam ajang KKI 2026.",
  "date": "23 Agustus 2026",
  "image": "assets/img/umkm-perempuan-capai-64-5-persen-bi-soroti-akses-keuangan.jpg",
  "imageV": "mt5sb2s6",
  "tags": [
   "UMKM",
   "Perempuan",
   "Bank Indonesia",
   "KKI 2026"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461922-645-persen-umkm-dipimpin-perempuan-kki-2026-soroti-kekuatan-ekonomi-kaum-hawa"
 },
 {
  "slug": "bri-raih-anugerah-esg-2026-berkat-obligasi-sosial",
  "category": "Perbankan",
  "title": "BRI Raih Anugerah ESG 2026 Berkat [Obligasi Sosial]",
  "deck": "BRI meraih Anugerah Utama IDX Channel Anugerah ESG 2026 atas penerbitan obligasi sosial yang mendanai KUR Mikro bagi puluhan ribu nasabah baru.",
  "date": "23 Agustus 2026",
  "image": "assets/img/bri-raih-anugerah-esg-2026-berkat-obligasi-sosial.jpg",
  "imageV": "mt5sb3aw",
  "tags": [
   "BRI",
   "obligasi sosial",
   "ESG",
   "KUR Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461878-dorong-pembiayaan-inklusif-obligasi-sosial-berkelanjutan-bri-raih-idx-channel-anugerah-esg-2026"
 },
 {
  "slug": "tugu-rp72-6-miliar-dana-ipo-tersisa-ditaruh-deposito-bri",
  "category": "Aksi Korporasi",
  "title": "TUGU: [Rp72,6 Miliar] Dana IPO Tersisa, Ditaruh Deposito BRI",
  "deck": "TUGU melaporkan realisasi penggunaan dana IPO 2018 per akhir Juni 2026: 88,98 persen dana sudah terpakai, sisa Rp72,61 miliar disimpan sebagai deposito berbunga di bank afiliasi.",
  "date": "23 Agustus 2026",
  "image": "assets/img/tugu-rp72-6-miliar-dana-ipo-tersisa-ditaruh-deposito-bri.jpg",
  "tags": [
   "TUGU",
   "IPO",
   "penggunaan dana",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/175222eb51_b744acb7eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tugu-jadwalkan-rupslb-pada-29-september-2026",
  "category": "Aksi Korporasi",
  "title": "TUGU Jadwalkan [RUPSLB] pada 29 September 2026",
  "deck": "Asuransi Tugu Pratama Indonesia akan menggelar RUPSLB secara elektronik pada 29 September 2026, dengan pemegang saham per 4 September 2026 yang berhak hadir.",
  "date": "23 Agustus 2026",
  "image": "assets/img/tugu-jadwalkan-rupslb-pada-29-september-2026.jpg",
  "tags": [
   "TUGU",
   "RUPSLB",
   "Asuransi Tugu Pratama",
   "rapat pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/357d8c6df1_70affc5afe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "temui-wang-yi-luhut-buka-kerja-sama-ke-industri-baru",
  "category": "Global",
  "title": "Temui Wang Yi, Luhut Buka Kerja Sama ke [Industri Baru]",
  "deck": "Menlu China Wang Yi dan Ketua DEN Luhut Binsar Panjaitan membahas investasi perusahaan China di Indonesia, termasuk perluasan ke energi hijau, AI, ekonomi digital, dan bioteknologi.",
  "date": "23 Agustus 2026",
  "image": "assets/img/temui-wang-yi-luhut-buka-kerja-sama-ke-industri-baru.jpg",
  "imageV": "mt5sb3qt",
  "tags": [
   "Wang Yi",
   "Luhut Binsar Panjaitan",
   "investasi China",
   "Indonesia-China"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461869-bicarakan-investasi-menlu-china-wang-yi-bertemu-luhut"
 },
 {
  "slug": "mice-buana-graha-utama-tambah-3-300-saham",
  "category": "Aksi Korporasi",
  "title": "MICE: Buana Graha Utama Tambah [3.300] Saham",
  "deck": "Pemegang saham utama Multi Indocitra, Buana Graha Utama, membeli tambahan 3.300 saham MICE pada 19-20 Agustus 2026, menaikkan hak suaranya tipis dari 48,4217 persen menjadi 48,4222 persen.",
  "date": "23 Agustus 2026",
  "image": "assets/img/mice-buana-graha-utama-tambah-3-300-saham.jpg",
  "tags": [
   "MICE",
   "Multi Indocitra",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23082026-8833-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-fasilitasi-pembiayaan-umkm-rp285-miliar-di-kki-2026",
  "category": "UMKM",
  "title": "BI Fasilitasi Pembiayaan UMKM [Rp285 Miliar] di KKI 2026",
  "deck": "Delapan bank menandatangani kesepakatan pembiayaan dengan UMKM mitra, hasil fasilitasi business matching Bank Indonesia yang mencapai Rp285 miliar hingga Juli 2026.",
  "date": "23 Agustus 2026",
  "image": "assets/img/bi-fasilitasi-pembiayaan-umkm-rp285-miliar-di-kki-2026.jpg",
  "imageV": "mt4n802i",
  "tags": [
   "UMKM",
   "Bank Indonesia",
   "KUR",
   "Pembiayaan"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2816926.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bi-dampingi-580-umkm-wastra-muda-lewat-kompetisi-citra-nusa",
  "category": "UMKM",
  "title": "BI Dampingi [580] UMKM Wastra Muda Lewat Kompetisi Citra Nusa",
  "deck": "Bank Indonesia menggandeng 580 UMKM wastra, mayoritas wirausaha muda, lewat kompetisi Citra Nusa dan melatih 2.156 UMKM lain memasarkan produk demi regenerasi UMKM budaya.",
  "date": "23 Agustus 2026",
  "image": "assets/img/bi-dampingi-580-umkm-wastra-muda-lewat-kompetisi-citra-nusa.jpg",
  "imageV": "mt4n83dv",
  "tags": [
   "UMKM",
   "Ekonomi Kreatif",
   "Bank Indonesia",
   "Wastra"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817026.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "umkm-ubi-madu-bakar-karawang-diklaim-beromzet-rp300-juta",
  "category": "UMKM",
  "title": "UMKM Ubi Madu Bakar Karawang Diklaim [Beromzet] Rp300 Juta",
  "deck": "UMKM Ubi Madu Bakar Mba Boled asal Karawang tumbuh dari satu toko jadi sekitar 20 outlet setelah menjadi UMKM binaan Pertamina sejak 2018, dengan omzet yang diklaim mencapai Rp300 juta per bulan.",
  "date": "22 Agustus 2026",
  "image": "assets/img/umkm-ubi-madu-bakar-karawang-diklaim-beromzet-rp300-juta.jpg",
  "imageV": "mt4n83ws",
  "tags": [
   "umkm",
   "ubi madu bakar",
   "pertamina",
   "karawang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461780-kisah-ubi-madu-bakar-asal-karawang-umkm-binaan-yang-diklaim-beromzet-hingga-rp300-juta"
 },
 {
  "slug": "rumah-bumn-bri-dampingi-umkm-keripik-pisang-naik-kelas",
  "category": "UMKM",
  "title": "Rumah BUMN BRI Dampingi UMKM Keripik Pisang [Naik Kelas]",
  "deck": "Program Rumah BUMN BRI mendampingi UMKM keripik pisang asal Sidoarjo mengembangkan usaha dari dapur rumah menjadi produk olahan bernilai tambah.",
  "date": "22 Agustus 2026",
  "image": "assets/img/rumah-bumn-bri-dampingi-umkm-keripik-pisang-naik-kelas.jpg",
  "imageV": "mt4n84bi",
  "tags": [
   "BRI",
   "UMKM",
   "Rumah BUMN",
   "ekonomi kerakyatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461778-sentuhan-rumah-bumn-bri-antar-keripik-pisang-lokal-tembus-malaysia-dan-hong-kong"
 },
 {
  "slug": "pertamina-sumbang-meja-kursi-baru-ke-sdn-manggarai-barat",
  "category": "BUMN",
  "title": "Pertamina [Sumbang] Meja Kursi Baru ke SDN Manggarai Barat",
  "deck": "PT Pertamina menyerahkan 39 meja dan 70 kursi lewat program TJSL untuk SDN Batu Cermin di Manggarai Barat, NTT, menggantikan perabot lama yang sudah rusak.",
  "date": "22 Agustus 2026",
  "image": "assets/img/pertamina-sumbang-meja-kursi-baru-ke-sdn-manggarai-barat.jpg",
  "imageV": "mt4n84uz",
  "tags": [
   "Pertamina",
   "TJSL",
   "Manggarai Barat",
   "NTT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461757-dari-meja-dan-kursi-baru-tumbuh-semangat-belajar-siswa-sdn-batu-cermin"
 },
 {
  "slug": "asbi-laporkan-dugaan-penggelapan-dana-ke-bareskrim-polri",
  "category": "Aksi Korporasi",
  "title": "ASBI Laporkan Dugaan [Penggelapan] Dana ke Bareskrim Polri",
  "deck": "Asuransi Bintang resmi melaporkan dugaan penggelapan uang dan investasi ke Bareskrim Polri dengan enam pihak terlapor, dan menyebut dampaknya berupa berkurangnya investasi SBN serta kas perusahaan.",
  "date": "22 Agustus 2026",
  "image": "assets/img/asbi-laporkan-dugaan-penggelapan-dana-ke-bareskrim-polri.jpg",
  "tags": [
   "ASBI",
   "Asuransi Bintang",
   "Bareskrim Polri",
   "penggelapan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1a06aebc59_db2741480e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nasi-investor-tambah-500-000-saham-hak-suara-jadi-5-87",
  "category": "Aksi Korporasi",
  "title": "NASI: Investor tambah [500.000] saham, hak suara jadi 5,87%",
  "deck": "Hartarto Ciputra melaporkan pembelian tidak langsung 500.000 saham NASI seharga Rp140 per lembar pada 21 Agustus 2026, hak suaranya naik dari 5,81% menjadi 5,87%.",
  "date": "22 Agustus 2026",
  "image": "assets/img/nasi-investor-tambah-500-000-saham-hak-suara-jadi-5-87.jpg",
  "tags": [
   "NASI",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-22082026-7519-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kuki-ungkap-transaksi-material-senilai-213-130-tanpa-rups",
  "category": "Aksi Korporasi",
  "title": "KUKI Ungkap Transaksi [Material] Senilai 213.130 Tanpa RUPS",
  "deck": "KUKI melaporkan transaksi material senilai 213.130, setara 25 persen ekuitas perusahaan, untuk objek gedung, tanpa memerlukan persetujuan RUPS.",
  "date": "22 Agustus 2026",
  "image": "assets/img/kuki-ungkap-transaksi-material-senilai-213-130-tanpa-rups.jpg",
  "tags": [
   "KUKI",
   "transaksi material",
   "keterbukaan informasi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_KUKI_E025B_c74994e7-b794-45fd-ae77-070735b5ce3a-20260822161903.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xiif-bagikan-dividen-tunai-kik-simak-jadwalnya",
  "category": "Aksi Korporasi",
  "title": "XIIF Bagikan Dividen Tunai KIK, Simak [Jadwalnya]",
  "deck": "KIK XIIF membagikan dividen tunai paling banyak Rp123.978, dengan dividen per unit penyertaan hingga Rp81.726. Pembayaran dijadwalkan 27 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/xiif-bagikan-dividen-tunai-kik-simak-jadwalnya.jpg",
  "tags": [
   "XIIF",
   "dividen",
   "KIK",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_XIIF_E045_7fbcfa2f-a12f-42b8-b976-c71982e7b2bf-20260822153955.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-pecah-saham-rasio-1-4-lewat-stock-split",
  "category": "Aksi Korporasi",
  "title": "AADI Pecah Saham Rasio 1:4 lewat [Stock Split]",
  "deck": "RUPS AADI menyetujui pemecahan saham rasio 1:4, jumlah saham beredar naik dari 9.283 menjadi 182.973 lembar. BEI sudah beri persetujuan prinsip pada 22 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-pecah-saham-rasio-1-4-lewat-stock-split.jpg",
  "tags": [
   "AADI",
   "stock split",
   "pemecahan saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_7880c9f5-584f-4ccb-8d9d-6853cfccbc44-20260822152357.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-lakukan-reverse-stock-dengan-rasio-2-43",
  "category": "Aksi Korporasi",
  "title": "AADI Lakukan [Reverse Stock] dengan Rasio 2:43",
  "deck": "PT Adaro Andalan Indonesia Tbk (AADI) menggabungkan sahamnya dengan rasio 2:43, mengubah nilai nominal dan jumlah saham beredar mulai 23 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-lakukan-reverse-stock-dengan-rasio-2-43.jpg",
  "tags": [
   "AADI",
   "reverse stock",
   "aksi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_ad85a90b-9ccd-4d05-9534-a765dea22f66-20260822152211.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-aadi-setujui-penambahan-modal-lewat-hmetd",
  "category": "Aksi Korporasi",
  "title": "RUPS AADI Setujui Penambahan Modal Lewat [HMETD]",
  "deck": "RUPS AADI menyetujui penambahan modal dengan skema HMETD rasio 1:23 seharga Rp91.823 per saham, disertai penerbitan waran dan obligasi konversi.",
  "date": "22 Agustus 2026",
  "image": "assets/img/rups-aadi-setujui-penambahan-modal-lewat-hmetd.jpg",
  "tags": [
   "AADI",
   "HMETD",
   "rights issue",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_bf9bc64f-b786-4a83-b33d-daca2564805a-20260822152112.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-bagikan-dividen-saham-rasio-1-10-rups-24-agustus",
  "category": "Aksi Korporasi",
  "title": "AADI Bagikan [Dividen Saham] Rasio 1:10, RUPS 24 Agustus",
  "deck": "AADI mengumumkan rencana dividen saham tahun buku 2026 dengan rasio 1 banding 10, total 1.239.879 saham baru, menanti persetujuan RUPS pada 24 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-bagikan-dividen-saham-rasio-1-10-rups-24-agustus.jpg",
  "tags": [
   "AADI",
   "dividen saham",
   "RUPS",
   "Adaro Andalan Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X3_5fe97756-b11a-4f7e-a491-dc2f7cc94f10-20260822151202.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-rombak-direksi-komisaris-rups-setujui-pmthmetd",
  "category": "Aksi Korporasi",
  "title": "AADI Rombak Direksi-Komisaris, RUPS Setujui [PMTHMETD]",
  "deck": "RUPS AADI 11 Agustus 2026 menyetujui pergantian seluruh direksi dan komisaris serta rencana penambahan modal tanpa hak memesan efek terlebih dahulu.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-rombak-direksi-komisaris-rups-setujui-pmthmetd.jpg",
  "tags": [
   "AADI",
   "RUPS",
   "PMTHMETD",
   "pergantian direksi-komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E013_8e98e557-4bf7-432e-a5d4-db5e99a0c0cf-20260822151017.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-siapkan-penambahan-modal-lewat-hmetd-rups-besok",
  "category": "Aksi Korporasi",
  "title": "AADI Siapkan Penambahan Modal Lewat [HMETD], RUPS Besok",
  "deck": "AADI mengumumkan rencana penambahan modal dengan HMETD, RUPS digelar 23 Agustus 2026 dan keterbukaan informasi lengkap menyusul sehari kemudian.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-siapkan-penambahan-modal-lewat-hmetd-rups-besok.jpg",
  "tags": [
   "AADI",
   "HMETD",
   "penambahan modal",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X1_81f73bc6-4ec6-43f0-9053-7b788e002d2e-20260822150501.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-rencanakan-reverse-stock-rasio-2-54-rups-besok",
  "category": "Aksi Korporasi",
  "title": "AADI Rencanakan [Reverse Stock] Rasio 2:54, RUPS Besok",
  "deck": "AADI mengumumkan rencana penggabungan saham (reverse stock) rasio 2:54, sudah disetujui prinsip oleh BEI, RUPS digelar 23 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-rencanakan-reverse-stock-rasio-2-54-rups-besok.jpg",
  "tags": [
   "AADI",
   "reverse stock",
   "aksi korporasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X1_5b892b13-0a1a-4ee0-b4fb-4c34a94b95ea-20260822145627.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aadi-rencanakan-dividen-saham-rasio-1-12-rups-24-agustus",
  "category": "Aksi Korporasi",
  "title": "AADI Rencanakan [Dividen] Saham Rasio 1:12, RUPS 24 Agustus",
  "deck": "AADI mengajukan dividen saham rasio 1 banding 12 senilai Rp92.839 ke RUPS 24 Agustus 2026, menambah 12.938.098 saham baru dari saldo laba.",
  "date": "22 Agustus 2026",
  "image": "assets/img/aadi-rencanakan-dividen-saham-rasio-1-12-rups-24-agustus.jpg",
  "tags": [
   "AADI",
   "dividen saham",
   "RUPS",
   "Adaro Andalan Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260822_AADI_E0X1_0788417c-1118-4fde-a50b-28df67c7de3a-20260822145205.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-cabut-mapb-dari-papan-pemantauan-khusus",
  "category": "Aksi Korporasi",
  "title": "BEI Cabut [MAPB] dari Papan Pemantauan Khusus",
  "deck": "Bursa Efek Indonesia mencabut status pemantauan khusus saham Map Boga Adiperkasa (MAPB) dan memindahkannya ke Papan Pengembangan, efektif 22 Agustus 2026.",
  "date": "22 Agustus 2026",
  "image": "assets/img/bei-cabut-mapb-dari-papan-pemantauan-khusus.jpg",
  "tags": [
   "MAPB",
   "pemantauan khusus",
   "BEI",
   "papan pengembangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/969e07726d_bad18d8729.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hotl-masuk-papan-pemantauan-khusus-usai-anak-usaha-kena-pkpu",
  "category": "Aksi Korporasi",
  "title": "HOTL Masuk Papan [Pemantauan Khusus] Usai Anak Usaha Kena PKPU",
  "deck": "BEI memindahkan saham HOTL, Saraswati Griya Lestari Tbk, ke Papan Pemantauan Khusus setelah anak usahanya yang pendapatannya material dimohonkan PKPU, pailit, atau pembatalan perdamaian.",
  "date": "22 Agustus 2026",
  "image": "assets/img/hotl-masuk-papan-pemantauan-khusus-usai-anak-usaha-kena-pkpu.jpg",
  "tags": [
   "HOTL",
   "Pemantauan Khusus",
   "PKPU",
   "Saraswati Griya Lestari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/76e2417f94_777d4e5464.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpns-masuk-papan-pemantauan-khusus-bei-imbas-pendapatan-stagnan",
  "category": "Aksi Korporasi",
  "title": "DPNS Masuk Papan Pemantauan [Khusus] BEI Imbas Pendapatan Stagnan",
  "deck": "Bursa Efek Indonesia memasukkan saham Duta Pertiwi Nusantara (DPNS) ke daftar pemantauan khusus mulai 22 Agustus 2026 karena tidak ada perubahan pendapatan di laporan keuangan terakhir.",
  "date": "22 Agustus 2026",
  "image": "assets/img/dpns-masuk-papan-pemantauan-khusus-bei-imbas-pendapatan-stagnan.jpg",
  "tags": [
   "DPNS",
   "Duta Pertiwi Nusantara",
   "pemantauan khusus",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ee7f537f8d_b265ad6ef2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hipmi-investasi-rp1-010-t-dorong-pengusaha-jadi-pemasok",
  "category": "Industri",
  "title": "HIPMI: Investasi Rp1.010 T, Dorong Pengusaha Jadi [Pemasok]",
  "deck": "HIPMI mengapresiasi realisasi investasi semester I 2026 senilai Rp1.010,6 triliun dan mendorong pengusaha nasional ikut jadi pemasok dalam ekosistem hilirisasi.",
  "date": "22 Agustus 2026",
  "image": "assets/img/hipmi-investasi-rp1-010-t-dorong-pengusaha-jadi-pemasok.jpg",
  "imageV": "mt4n859j",
  "tags": [
   "investasi",
   "hipmi",
   "hilirisasi",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461662-investasi-tembus-rp1010-triliun-hipmi-dorong-pengusaha-nasional-jadi-bagian-utama-industrialisasi"
 },
 {
  "slug": "meja-setujui-peningkatan-modal-dasar-via-saham-bonus",
  "category": "Aksi Korporasi",
  "title": "MEJA Setujui Peningkatan Modal Dasar via [Saham Bonus]",
  "deck": "RUPSLB Ketiga MEJA menyetujui kenaikan modal dasar menjadi Rp208,65 miliar dan penerbitan 372,58 juta saham bonus dari kapitalisasi agio saham.",
  "date": "22 Agustus 2026",
  "image": "assets/img/meja-setujui-peningkatan-modal-dasar-via-saham-bonus.jpg",
  "tags": [
   "MEJA",
   "RUPSLB",
   "saham bonus",
   "modal dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8622af9af3_d2e4531a6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-raih-tiga-penghargaan-alpha-southeast-asia-2026",
  "category": "Perbankan",
  "title": "BRI Raih [Tiga] Penghargaan Alpha Southeast Asia 2026",
  "deck": "BRI meraih tiga penghargaan dari Alpha Southeast Asia 2026 untuk platform transaksi digital QLola, layanan cash management, dan inklusi keuangan.",
  "date": "22 Agustus 2026",
  "image": "assets/img/bri-raih-tiga-penghargaan-alpha-southeast-asia-2026.jpg",
  "imageV": "mt5sb493",
  "tags": [
   "BRI",
   "BBRI",
   "Alpha Southeast Asia",
   "QLola"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461652-bri-raih-tiga-penghargaan-bergengsi-alpha-southeast-asia-2026-kukuhkan-kepemimpinan-dalam-layanan-transaction-banking"
 },
 {
  "slug": "pertamina-salurkan-9-600-paket-sembako-ke-korban-gempa-flores",
  "category": "BUMN",
  "title": "Pertamina Salurkan [9.600] Paket Sembako ke Korban Gempa Flores",
  "deck": "Pertamina terus mendampingi warga terdampak gempa di Manggarai, NTT, lewat bantuan sembako, gas, dan pemulihan trauma bagi anak-anak.",
  "date": "22 Agustus 2026",
  "image": "assets/img/pertamina-salurkan-9-600-paket-sembako-ke-korban-gempa-flores.jpg",
  "imageV": "mt5sb4uw",
  "tags": [
   "Pertamina",
   "Gempa Flores",
   "NTT",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461651-pertamina-hadir-dampingi-warga-terdampak-gempa-flores"
 },
 {
  "slug": "pertamina-buka-posko-kesehatan-gratis-untuk-pengungsi-gempa-reo",
  "category": "BUMN",
  "title": "Pertamina Buka [Posko Kesehatan] Gratis untuk Pengungsi Gempa Reo",
  "deck": "Pertamina Patra Niaga membuka posko kesehatan gratis bagi pengungsi gempa di Reo, Manggarai, NTT, melayani pemeriksaan kesehatan, tekanan darah, dan pemberian obat serta vitamin.",
  "date": "22 Agustus 2026",
  "image": "assets/img/pertamina-buka-posko-kesehatan-gratis-untuk-pengungsi-gempa-reo.jpg",
  "imageV": "mt5v2zfu",
  "tags": [
   "Pertamina",
   "Gempa Manggarai",
   "NTT",
   "Posko Pertamina Peduli"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461649-pertamina-buka-posko-kesehatan-gratis-untuk-pengungsi-di-reo"
 },
 {
  "slug": "pertamina-kejar-ekspansi-panas-bumi-lewat-pge",
  "category": "Energi",
  "title": "Pertamina Kejar Ekspansi [Panas Bumi] Lewat PGE",
  "deck": "PGE menandatangani dua nota kesepahaman dengan PLN untuk unit tambahan PLTP Ulubelu dan Lahendong, serta menerima penugasan eksplorasi panas bumi baru dari pemerintah.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pertamina-kejar-ekspansi-panas-bumi-lewat-pge.jpg",
  "imageV": "mt5sb5d2",
  "tags": [
   "Pertamina",
   "panas bumi",
   "PGE",
   "energi terbarukan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461620-pertamina-terus-dorong-ekspansi-panas-bumi-nasional-di-iigce-2026"
 },
 {
  "slug": "pico-teken-mou-pasokan-baja-crc-dengan-posco-korea",
  "category": "Aksi Korporasi",
  "title": "PICO Teken [MoU] Pasokan Baja CRC dengan POSCO Korea",
  "deck": "PICO menandatangani MoU dengan POSCO untuk menjamin pasokan baja CRC bagi lini produksi drum bajanya, namun perusahaan menegaskan belum ada dampak keuangan yang bisa diukur.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pico-teken-mou-pasokan-baja-crc-dengan-posco-korea.jpg",
  "tags": [
   "PICO",
   "POSCO",
   "MoU",
   "industri baja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4964351229_b66a506030.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-gelar-rupslb-14-september-ubah-nama-jadi-remitra-global",
  "category": "Aksi Korporasi",
  "title": "MKNT Gelar RUPSLB 14 September, Ubah Nama Jadi [Remitra Global]",
  "deck": "RUPSLB 14 September 2026 akan memutuskan konversi utang jadi saham, ganti pengendali dan nama menjadi Remitra Global International, serta ekspansi ke manufaktur baja dan tambak udang.",
  "date": "21 Agustus 2026",
  "image": "assets/img/mknt-gelar-rupslb-14-september-ubah-nama-jadi-remitra-global.jpg",
  "tags": [
   "MKNT",
   "RUPSLB",
   "PMTHMETD",
   "Remitra Global"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1bcfa7a113_350f684afa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-meja-ungkap-rincian-pemegang-saham-usai-saham-bonus",
  "category": "Aksi Korporasi",
  "title": "RUPSLB MEJA Ungkap Rincian [Pemegang Saham] Usai Saham Bonus",
  "deck": "RUPSLB Ketiga MEJA menyetujui 99,99% suara untuk menaikkan modal dasar dan modal disetor lewat saham bonus, sekaligus mengonfirmasi susunan pemegang saham baru dengan total 2,608 miliar lembar saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/rupslb-meja-ungkap-rincian-pemegang-saham-usai-saham-bonus.jpg",
  "tags": [
   "MEJA",
   "RUPSLB",
   "saham bonus",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c151277aca_7e5e431170.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-teken-loi-pltp-ulubelu-lahendong-garap-cubadak-panti",
  "category": "Aksi Korporasi",
  "title": "PGEO Teken LoI PLTP Ulubelu-Lahendong, Garap [Cubadak Panti]",
  "deck": "PGE menandatangani dua Letter of Intent dengan PLN dan PLN Indonesia Power untuk PLTP Ulubelu dan Lahendong Bottoming Unit, serta menerima mandat eksplorasi panas bumi Cubadak Panti di Sumatra Barat.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "panas bumi",
   "PLTP Ulubelu",
   "PLN Indonesia Power"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ab297f5e8d_71ae011b3b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-sambal-sumut-binaan-bri-tembus-pasar-singapura",
  "category": "UMKM",
  "title": "UMKM Sambal Sumut Binaan BRI Tembus Pasar [Singapura]",
  "deck": "Quinn Kitchen, UMKM sambal binaan BRI asal Medan, memperkenalkan produknya di pameran Singapura setelah memanfaatkan pembiayaan dan layanan digital bank tersebut sejak 2014.",
  "date": "21 Agustus 2026",
  "image": "assets/img/umkm-sambal-sumut-binaan-bri-tembus-pasar-singapura.jpg",
  "imageV": "mt5sb5xi",
  "tags": [
   "UMKM",
   "BRI",
   "Singapura",
   "Sumatera Utara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461582-produk-umkm-asal-sumut-perluas-dampak-bersama-pemberdayaan-bri-pikat-pembeli-dari-singapura-hingga-belanda"
 },
 {
  "slug": "xmgb-catat-pengurangan-unit-penyertaan-jadi-84-juta",
  "category": "Aksi Korporasi",
  "title": "XMGB Catat [Pengurangan] Unit Penyertaan Jadi 84 Juta",
  "deck": "Unit penyertaan ETF XMGB berkurang 10 juta unit menjadi 84 juta per 20 Agustus 2026, pencatatan baru berlaku mulai 24 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/xmgb-catat-pengurangan-unit-penyertaan-jadi-84-juta.jpg",
  "tags": [
   "XMGB",
   "ETF",
   "Majoris Asset Management",
   "reksa dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6dbad1b495_fded32c894.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgd-lunasi-obligasi-dan-sukuk-rp463-miliar-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "PPGD [Lunasi] Obligasi dan Sukuk Rp463 Miliar Jatuh Tempo",
  "deck": "Obligasi Rp228,025 miliar dan sukuk Rp235,04 miliar milik PPGD jatuh tempo 24 Agustus 2026; perusahaan menyatakan siap melunasinya dari fasilitas pinjaman bank.",
  "date": "21 Agustus 2026",
  "image": "assets/img/ppgd-lunasi-obligasi-dan-sukuk-rp463-miliar-jatuh-tempo.jpg",
  "tags": [
   "PPGD",
   "obligasi",
   "sukuk",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a31d4faf6a_07f0eb8b2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-okas-melonjak-manajemen-sebut-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "Saham OKAS Melonjak, Manajemen Sebut Tak Ada Info [Material]",
  "deck": "Volume transaksi OKAS melonjak lebih dari 20 kali dan harga naik 8,47% pada 19 Agustus 2026, memicu permintaan penjelasan dari Bursa Efek Indonesia.",
  "date": "21 Agustus 2026",
  "image": "assets/img/saham-okas-melonjak-manajemen-sebut-tak-ada-info-material.jpg",
  "tags": [
   "OKAS",
   "Ancora Indonesia Resources",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0396750d57_fa88a653da.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-catatkan-133-487-saham-baru-dari-konversi-waran-seri-ii",
  "category": "Aksi Korporasi",
  "title": "INET Catatkan 133.487 Saham Baru dari [Konversi] Waran Seri II",
  "deck": "BEI mencatat tambahan 133.487 saham INET hasil konversi Waran Seri II, sehingga total saham beredar naik menjadi 22.375.536.318 lembar mulai 24 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/inet-catatkan-133-487-saham-baru-dari-konversi-waran-seri-ii.jpg",
  "tags": [
   "INET",
   "Waran Seri II",
   "Pencatatan Saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0057122704_485b7e5c0c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-catat-konversi-200-saham-dari-eksekusi-waran-seri-i",
  "category": "Aksi Korporasi",
  "title": "CYBR catat konversi 200 saham dari eksekusi [waran] Seri I",
  "deck": "ITSEC Asia mencatatkan 200 saham baru hasil konversi 200 waran seri I, saham beredar naik jadi 13.483.357.705 lembar per 24 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "waran seri I",
   "pencatatan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c13e7bf63_604b62fc18.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-obligasi-sukuk-rp2-47-triliun-dipangkas-pefindo-ke-d",
  "category": "Aksi Korporasi",
  "title": "WIKA Obligasi-Sukuk Rp2,47 Triliun Dipangkas Pefindo ke [D]",
  "deck": "Pefindo menurunkan peringkat obligasi dan sukuk mudharabah WIKA senilai total Rp2,47 triliun dari idCCC menjadi idD, menyusul penangguhan pembayaran kupon yang jatuh tempo 18 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/wika-obligasi-sukuk-rp2-47-triliun-dipangkas-pefindo-ke-d.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "gagal bayar",
   "Pefindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f76d559150_d02612837d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbld-tambah-fasilitas-kredit-rp100-miliar-dari-bank-victoria",
  "category": "Aksi Korporasi",
  "title": "BBLD Tambah [Fasilitas Kredit] Rp100 Miliar dari Bank Victoria",
  "deck": "Buana Finance menambah fasilitas kredit Rp100 miliar dari Bank Victoria International, total pinjaman naik jadi Rp554,16 miliar atau 39,38 persen dari ekuitas per akhir 2025.",
  "date": "21 Agustus 2026",
  "image": "assets/img/bbld-tambah-fasilitas-kredit-rp100-miliar-dari-bank-victoria.jpg",
  "tags": [
   "BBLD",
   "Buana Finance",
   "transaksi material",
   "Bank Victoria International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1e0d2e8fea_9b3c9c964d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-pastikan-tak-ada-aksi-korporasi-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BWPT Pastikan Tak Ada Aksi Korporasi di Balik [Volatilitas] Saham",
  "deck": "BWPT menjawab permintaan penjelasan volatilitas dari BEI: tidak ada informasi material tersembunyi, tanpa rencana aksi korporasi, dan pemegang saham utama belum berencana ubah kepemilikan.",
  "date": "21 Agustus 2026",
  "image": "assets/img/bwpt-pastikan-tak-ada-aksi-korporasi-di-balik-volatilitas-saham.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4e6c64fc27_a14e13ca34.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-kucurkan-pinjaman-rp1-18-triliun-ke-anak-usaha-tambang",
  "category": "Aksi Korporasi",
  "title": "SINI Kucurkan [Pinjaman] Rp1,18 Triliun ke Anak Usaha Tambang",
  "deck": "Singaraja Putra mengucurkan pinjaman modal kerja Rp1,18 triliun ke anak usaha tambang batu bara PKP dan PBP, bunga 10,95 persen per tahun, sebagai realisasi dana hasil penambahan modal (rights issue).",
  "date": "21 Agustus 2026",
  "image": "assets/img/sini-kucurkan-pinjaman-rp1-18-triliun-ke-anak-usaha-tambang.jpg",
  "tags": [
   "SINI",
   "rights issue",
   "tambang batu bara",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b483c6e1e6_9c4d82a16f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelni-pelindo-buka-posko-bantuan-gempa-ntt-di-priok",
  "category": "BUMN",
  "title": "PELNI-Pelindo Buka Posko [Bantuan] Gempa NTT di Priok",
  "deck": "PELNI dan Pelindo, didukung Kementerian Perhubungan, membuka posko bantuan kemanusiaan di Tanjung Priok untuk korban gempa NTT, disertai potongan tarif muatan 100 persen di kapal PELNI.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pelni-pelindo-buka-posko-bantuan-gempa-ntt-di-priok.jpg",
  "imageV": "mt5sb6dt",
  "tags": [
   "PELNI",
   "Pelindo",
   "gempa NTT",
   "Tanjung Priok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461544-bersama-kemenhub-pelni-dan-pelindo-buka-posko-bantuan-kemanusiaan-gempa-ntt-di-tanjung-priok"
 },
 {
  "slug": "nsss-direksi-geser-37-5-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Geser 37,5 Juta Saham Lewat [Repo]",
  "deck": "Seorang direksi NSSS mencatatkan transaksi jual dan beli saham lewat skema gadai saham (repo) pada 21 Agustus 2026, membuat kepemilikannya berkurang bersih 37,5 juta lembar.",
  "date": "21 Agustus 2026",
  "image": "assets/img/nsss-direksi-geser-37-5-juta-saham-lewat-repo.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-5712-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-kepemilikan-direksi-naik-ke-6-05-lewat-skema-repo",
  "category": "Aksi Korporasi",
  "title": "RLCO: Kepemilikan [Direksi] Naik ke 6,05% Lewat Skema Repo",
  "deck": "Samuel Sekuritas Indonesia, pelapor berjabatan direksi di RLCO, menambah 34,3 juta saham lewat dua transaksi repo, mengerek hak suaranya dari 4,95 persen menjadi 6,05 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/rlco-kepemilikan-direksi-naik-ke-6-05-lewat-skema-repo.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-5044-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-tarik-pinjaman-afiliasi-us-55-juta-dari-kbank",
  "category": "Aksi Korporasi",
  "title": "BMAS Tarik Pinjaman [Afiliasi] US$55 Juta dari KBank",
  "deck": "BMAS menarik pinjaman bilateral pertama US$55 juta dari KBank, pemegang saham pengendalinya, dari total fasilitas US$341 juta untuk mendukung likuiditas dan kredit.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "transaksi afiliasi",
   "pinjaman bilateral",
   "KBank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dc15a9d8d9_728fc54dbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-lepas-83-7-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi Lepas 83,7 Juta Saham lewat [Repo]",
  "deck": "Seorang anggota direksi MD Entertainment melepas 83,7 juta saham FILM lewat pencairan perjanjian repo, hak suaranya turun dari 7,55 persen menjadi 6,78 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/film-direksi-lepas-83-7-juta-saham-lewat-repo.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-4176-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-8-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama Tambah [8,3 Juta] Saham",
  "deck": "Tunggal Jaya Investama menambah 8,3 juta saham IMPC pada 19-20 Agustus 2026, menaikkan hak suaranya tipis menjadi 37,14 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/impc-tunggal-jaya-investama-tambah-8-3-juta-saham.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "Tunggal Jaya Investama",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-4743-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bkdp-butuh-rp222-miliar-danai-proyek-hotel-hyatt",
  "category": "Aksi Korporasi",
  "title": "BKDP Butuh [Rp222 Miliar] Danai Proyek Hotel Hyatt",
  "deck": "BKDP menjawab permintaan penjelasan lanjutan Bursa: penutupan tiga anak usaha, kebutuhan dana Rp222 miliar untuk hotel Hyatt Centric, dan piutang macet dari penyewa yang sudah tutup.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKDP",
   "Bukit Darmo Property",
   "properti",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3d6d8cf532_bbcd9979dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wsbp-lelang-aset-cetakan-senilai-rp478-6-juta",
  "category": "Aksi Korporasi",
  "title": "WSBP Lelang [Aset] Cetakan Senilai Rp478,6 Juta",
  "deck": "WSBP melelang 177 set cetakan non-produktif di Plant Cibitung senilai Rp478,6 juta lewat KPKNL Bekasi, bagian dari implementasi Perjanjian Perdamaian restrukturisasi utang.",
  "date": "21 Agustus 2026",
  "image": "assets/img/wsbp-lelang-aset-cetakan-senilai-rp478-6-juta.jpg",
  "tags": [
   "WSBP",
   "lelang aset",
   "restrukturisasi utang",
   "Waskita Beton Precast"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50e9c23480_cbe191db17.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-fpni-meroket-24-42-manajemen-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "Saham FPNI Meroket 24,42%, Manajemen: Tak Ada [Info Material]",
  "deck": "Bursa meminta penjelasan usai transaksi saham FPNI melonjak drastis pada 19 Agustus 2026, dan Lotte Chemical Titan menyatakan tidak ada informasi material di baliknya.",
  "date": "21 Agustus 2026",
  "image": "assets/img/saham-fpni-meroket-24-42-manajemen-tak-ada-info-material.jpg",
  "tags": [
   "FPNI",
   "volatilitas saham",
   "Lotte Chemical Titan",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/58fb1e9a00_c5cd92e9a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "real-harmoni-harum-propertindo-lepas-76-1-juta-saham",
  "category": "Aksi Korporasi",
  "title": "REAL: Harmoni Harum Propertindo [Lepas] 76,1 Juta Saham",
  "deck": "Pemegang saham Harmoni Harum Propertindo menjual 76,1 juta saham REAL pada 20 Agustus 2026, menurunkan hak suaranya dari 15,83% menjadi 14,68%.",
  "date": "21 Agustus 2026",
  "image": "assets/img/real-harmoni-harum-propertindo-lepas-76-1-juta-saham.jpg",
  "tags": [
   "REAL",
   "kepemilikan saham",
   "Harmoni Harum Propertindo",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-3312-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-raih-proyek-lanjutan-terminal-1a-bandara-soetta",
  "category": "Aksi Korporasi",
  "title": "PTPP Raih Proyek [Lanjutan] Terminal 1A Bandara Soetta",
  "deck": "PTPP meraih proyek lanjutan revitalisasi Terminal 1A Bandara Soekarno-Hatta senilai Rp1,19 triliun, dikerjakan selama 365 hari mulai 21 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/ptpp-raih-proyek-lanjutan-terminal-1a-bandara-soetta.jpg",
  "tags": [
   "PTPP",
   "konstruksi",
   "bandara",
   "kontrak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8d5434474b_72b6fae572.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hd-waran-terstruktur-bbca-disesuaikan-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "HD: Waran Terstruktur [BBCA] Disesuaikan Usai Dividen Tunai",
  "deck": "KGI Sekuritas (HD) menyesuaikan harga pelaksanaan dan rasio tiga waran terstruktur BBCA menyusul dividen tunai BBCA, efektif 31 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "BBCA",
   "waran terstruktur",
   "KGI Sekuritas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d63b88d435_1e773c30c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-mdia-masuk-papan-pemantauan-khusus-bei-24-agustus",
  "category": "Aksi Korporasi",
  "title": "Saham [MDIA] Masuk Papan Pemantauan Khusus BEI 24 Agustus",
  "deck": "BEI memasukkan saham MDIA ke Papan Pemantauan Khusus mulai 24 Agustus 2026, menyusul penghentian sementara perdagangan lebih dari sehari akibat aktivitas transaksi.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDIA",
   "Papan Pemantauan Khusus",
   "BEI",
   "Intermedia Capital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d1dda49e67_40e55ff746.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "taxi-gelar-rupst-ketiga-usai-kuorum-gagal-dua-kali",
  "category": "Aksi Korporasi",
  "title": "TAXI Gelar RUPST Ketiga usai [Kuorum] Gagal Dua Kali",
  "deck": "Setelah RUPST kedua gagal kuorum pada 17 Juli 2026, Express Transindo Utama menggelar RUPST ketiga pada 9 September 2026 berdasarkan penetapan kuorum khusus dari OJK.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAXI",
   "RUPST",
   "Express Transindo Utama",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/609c92964f_deacd32112.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-direktur-sustainability-budiawansyah-mundur",
  "category": "Aksi Korporasi",
  "title": "INCO: Direktur [Sustainability] Budiawansyah Mundur",
  "deck": "Direktur sekaligus Chief Sustainability and Corporate Affairs Officer Vale Indonesia, Budiawansyah, mengajukan pengunduran diri karena alasan keluarga, menunggu persetujuan RUPS.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "Vale Indonesia",
   "direksi",
   "pengunduran diri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/79cd5a66f8_dd8b666d58.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-694-bi-rate-tetap-5-75-persen",
  "category": "Moneter",
  "title": "Rupiah [Menguat] ke Rp17.694, BI Rate Tetap 5,75 Persen",
  "deck": "Rupiah ditutup menguat 54 poin ke Rp17.694 per dolar AS, ditopang keputusan BI menahan suku bunga acuan sementara arah suku bunga The Fed masih belum jelas.",
  "date": "21 Agustus 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-694-bi-rate-tetap-5-75-persen.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "BI Rate",
   "FOMC"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461519-rupiah-menguat-54-poin-ke-rp17694-per-dolar-as-didukung-bi-rate-575-persen"
 },
 {
  "slug": "zp-sesuaikan-harga-pelaksanaan-waran-bbca-usai-dividen-interim",
  "category": "Aksi Korporasi",
  "title": "ZP Sesuaikan [Harga Pelaksanaan] Waran BBCA Usai Dividen Interim",
  "deck": "Maybank Sekuritas (ZP) menyesuaikan harga pelaksanaan dan rasio konversi waran BBCAZPCZ6A dan BBCAZPCH7A menyusul dividen interim BCA Rp25 per saham, efektif 31 Agustus 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "waran terstruktur",
   "BBCA",
   "dividen interim"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/688d17eb79_7568564872.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-rilis-materi-public-expose-laba-bersih-naik-16-di-h1-2026",
  "category": "Aksi Korporasi",
  "title": "BWPT Rilis Materi Public Expose, [Laba Bersih] Naik 16% di H1 2026",
  "deck": "Eagle High Plantations (BWPT) memaparkan materi Public Expose semester I 2026 kepada BEI, menunjukkan laba bersih dan pendapatan tumbuh dua digit serta rasio utang yang terus menyusut.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a2ef4165e5_866c605506.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-10-anak-usaha-bagi-dividen-interim-rp762-66-m",
  "category": "Aksi Korporasi",
  "title": "TAPG: 10 Anak Usaha Bagi Dividen Interim [Rp762,66 M]",
  "deck": "Sepuluh anak usaha Triputra Agro Persada membagikan dividen interim senilai Rp762,66 miliar kepada PT Agro Multi Persada, perusahaan induk yang 94,93 persen sahamnya dimiliki TAPG.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "dividen interim",
   "transaksi afiliasi",
   "Triputra Agro Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c33e36585_157e9a7cb6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-berpotensi-tunda-bayar-bunga-obligasi-rp60-8-miliar",
  "category": "Aksi Korporasi",
  "title": "ADHI Berpotensi [Tunda] Bayar Bunga Obligasi Rp60,8 Miliar",
  "deck": "ADHI menyatakan berpotensi menunda pembayaran bunga obligasi ke-17 senilai Rp60,82 miliar yang jatuh tempo 24 Agustus 2026, setelah rapat pemegang obligasi gagal capai kuorum.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi",
   "gagal bayar",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/050a5f0e0a_2cade5c43d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pegadaian-tawarkan-cicilan-emas-redam-gejolak-harga",
  "category": "BUMN",
  "title": "Pegadaian Tawarkan [Cicilan] Emas Redam Gejolak Harga",
  "deck": "Pegadaian meluncurkan skema cicilan tabungan emas dengan harga terkunci sejak akad, agar cicilan tak berubah meski harga emas pasar naik.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pegadaian-tawarkan-cicilan-emas-redam-gejolak-harga.jpg",
  "imageV": "mt5v302g",
  "tags": [
   "Pegadaian",
   "emas",
   "investasi emas",
   "cicilan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461512-pegadaian-hadirkan-solusi-cicil-tabungan-emas-untuk-atasi-fluktuasi-harga-emas"
 },
 {
  "slug": "danantara-kebut-merger-dan-restrukturisasi-pt-pp",
  "category": "BUMN",
  "title": "Danantara Kebut [Merger] dan Restrukturisasi PT PP",
  "deck": "Danantara menyiapkan skema merger PT PP sebelum restrukturisasi, menekankan proses harus tuntas tanpa penundaan agar struktur bisnis lebih fokus pada bisnis inti.",
  "date": "21 Agustus 2026",
  "image": "assets/img/danantara-kebut-merger-dan-restrukturisasi-pt-pp.jpg",
  "imageV": "mt5v30nd",
  "tags": [
   "PT PP",
   "Danantara",
   "BUMN Karya",
   "Merger BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461508-disiapkan-skema-merger-dan-restrukturisasi-pt-pp-danantara-harus-tuntas"
 },
 {
  "slug": "bri-group-sabet-enam-penghargaan-finance-asia",
  "category": "Perbankan",
  "title": "BRI Group Sabet [Enam] Penghargaan Finance Asia",
  "deck": "BRI Group meraih enam penghargaan di ajang Asia's Best Companies dan Finance Asia Awards 2026, termasuk gelar Best CEO untuk Dirut Hery Gunardi.",
  "date": "21 Agustus 2026",
  "image": "assets/img/bri-group-sabet-enam-penghargaan-finance-asia.jpg",
  "imageV": "mt5v310e",
  "tags": [
   "BRI",
   "Finance Asia",
   "penghargaan",
   "perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461506-bri-group-sabet-enam-penghargaan-internasional-dari-finance-asia-perkuat-posisi-sebagai-institusi-keuangan-berkelas-dunia"
 },
 {
  "slug": "aspr-total-liabilitas-melonjak-21-69-jadi-rp183-17-miliar",
  "category": "Aksi Korporasi",
  "title": "ASPR: Total [Liabilitas] Melonjak 21,69% Jadi Rp183,17 Miliar",
  "deck": "ASPR melaporkan total liabilitas naik 21,69% jadi Rp183,17 miliar per Juni 2026, didorong pemakaian fasilitas kredit rekening koran dan kenaikan utang usaha akibat pembelian yang meningkat.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASPR",
   "liabilitas",
   "utang bank",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/784738c7a4_030f06073b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-awasi-ketat-restrukturisasi-wika",
  "category": "BUMN",
  "title": "Danantara [Awasi] Ketat Restrukturisasi WIKA",
  "deck": "Danantara menuntut laporan keuangan WIKA disusun sesuai kondisi riil sebagai dasar restrukturisasi, bukan rekayasa angka di atas kertas.",
  "date": "21 Agustus 2026",
  "image": "assets/img/danantara-awasi-ketat-restrukturisasi-wika.jpg",
  "imageV": "mt5v31ea",
  "tags": [
   "WIKA",
   "Danantara",
   "restrukturisasi BUMN",
   "Dony Oskaria"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461499-restrukturisasi-wika-dalam-kawalan-ketat-danantara"
 },
 {
  "slug": "direksi-cybr-borong-4-57-juta-saham-itsec-asia",
  "category": "Aksi Korporasi",
  "title": "Direksi [CYBR] Borong 4,57 Juta Saham ITSEC Asia",
  "deck": "Direksi ITSEC Asia, Patrick Rudolf Dannacher, membeli 4,57 juta saham CYBR secara tidak langsung dalam 19 transaksi sepanjang 11-19 Agustus 2026, menaikkan hak suaranya menjadi 0,64%.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-8719-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abmm-direktur-haris-mustarto-mundur-rups-maks-90-hari",
  "category": "Aksi Korporasi",
  "title": "ABMM: Direktur Haris Mustarto [Mundur], RUPS Maks 90 Hari",
  "deck": "Direktur ABM Investama Haris Mustarto mengundurkan diri efektif 19 Agustus 2026. Perseroan wajib menggelar RUPS paling lambat 90 hari kemudian.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ABMM",
   "ABM Investama",
   "direksi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/75ab29f653_5f864f257a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baik-komisaris-borong-saham-rp1-42-miliar-naik-146",
  "category": "Aksi Korporasi",
  "title": "BAIK: Komisaris [Borong] Saham Rp1,42 Miliar, Naik 146%",
  "deck": "Komisaris BAIK, Yeni Isnawati, membeli 5 juta saham pada 19 Agustus 2026 seharga Rp284 per lembar, menaikkan kepemilikannya dari 3,42 juta menjadi 8,42 juta saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "kepemilikan saham",
   "komisaris",
   "insider buying"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-9817-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obmd-jadwalkan-rupslb-29-september-2026-dps-4-september",
  "category": "Aksi Korporasi",
  "title": "OBMD Jadwalkan RUPSLB [29 September 2026], DPS 4 September",
  "deck": "PT OBM Drilchem Tbk (OBMD) mengumumkan rencana RUPSLB yang digelar elektronik pada 29 September 2026, dengan pemegang saham per 4 September 2026 yang berhak hadir.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OBMD",
   "RUPSLB",
   "OBM Drilchem",
   "Rapat Umum Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d12856d285_87c39e33c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mrat-bantah-punya-info-material-di-balik-lonjakan-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MRAT Bantah Punya Info Material di Balik [Lonjakan] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan MRAT setelah harga dan volume sahamnya melonjak pada 18 Agustus 2026; manajemen menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MRAT",
   "Mustika Ratu",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1a30892e54_bbfc28f5a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untr-jadwalkan-public-expose-tahunan-pada-7-september",
  "category": "Aksi Korporasi",
  "title": "UNTR Jadwalkan [Public Expose] Tahunan pada 7 September",
  "deck": "United Tractors akan memaparkan kinerja tahun buku 2026 secara daring pada 7 September 2026, dengan tujuh direksi dijadwalkan hadir.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "United Tractors",
   "public expose",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/19de197cbb_9abf8f9472.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inps-direksi-jual-9-35-juta-saham-suara-tetap-mayoritas",
  "category": "Aksi Korporasi",
  "title": "INPS: Direksi [Jual] 9,35 Juta Saham, Suara Tetap Mayoritas",
  "deck": "Direksi Graha Inti Guna Persada melepas 9,35 juta saham INPS senilai sekitar Rp3,27 miliar pada 20 Agustus 2026, hak suaranya turun tipis jadi 80,62 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "kepemilikan saham",
   "direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-1389-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sini-ekuitas-positif-rp3-59-triliun-usai-rights-issue",
  "category": "Aksi Korporasi",
  "title": "SINI: Ekuitas [Positif] Rp3,59 Triliun Usai Rights Issue",
  "deck": "Laporan keuangan per 31 Juli 2026 menunjukkan ekuitas SINI berbalik positif jadi Rp3,59 triliun dari defisit Rp687,4 miliar, usai rampungnya penawaran umum terbatas.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SINI",
   "rights issue",
   "ekuitas",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5edda94582_4633c5250a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supr-protelindo-perpanjang-tender-offer-hingga-23-september",
  "category": "Aksi Korporasi",
  "title": "SUPR: Protelindo perpanjang [tender offer] hingga 23 September",
  "deck": "Protelindo memperpanjang masa penawaran tender sukarela atas saham SUPR selama 30 hari dengan harga tetap Rp45.000 per saham, hingga 23 September 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPR",
   "tender offer",
   "go private",
   "Protelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ba017ca88c_c2d77c158a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prtl-perpanjang-tender-saham-solusi-tunas-pratama-tbk",
  "category": "Aksi Korporasi",
  "title": "PRTL [perpanjang] tender saham Solusi Tunas Pratama Tbk",
  "deck": "Protelindo memperpanjang masa penawaran tender sukarela atas saham Solusi Tunas Pratama Tbk selama 30 hari hingga 23 September 2026, dengan harga tetap Rp45.000 per saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRTL",
   "tender offer",
   "Solusi Tunas Pratama",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/64ff399ea5_1e38c3a7ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmf-rombak-direksi-dan-komisaris-lynn-ramli-jadi-dirut",
  "category": "Aksi Korporasi",
  "title": "SMMF Rombak [Direksi] dan Komisaris, Lynn Ramli Jadi Dirut",
  "deck": "Pemegang saham SMMF mengganti direktur utama dan komisaris utama lewat keputusan sirkuler RUPST, efektif menjabat setelah lolos uji kelayakan OJK.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMF",
   "pergantian direksi",
   "komisaris",
   "Sinar Mas Multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3d7755d64a_d681e5a3f2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmf-ubah-anggaran-dasar-perluas-lini-usaha-pembiayaan",
  "category": "Aksi Korporasi",
  "title": "SMMF Ubah Anggaran Dasar, Perluas [Lini Usaha] Pembiayaan",
  "deck": "SMMF mengesahkan perubahan anggaran dasar lewat keputusan sirkuler pemegang saham, memperluas izin usaha ke pembiayaan infrastruktur dan perdagangan internasional sesuai KBLI 2025.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMF",
   "anggaran dasar",
   "RUPST",
   "multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/fdb2fb4500_9c1eb4d921.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tspc-bogamulia-nagadi-tambah-2-1-juta-saham-kepemilikan-91-04",
  "category": "Aksi Korporasi",
  "title": "TSPC: Bogamulia Nagadi tambah [2,1 juta] saham, kepemilikan 91,04%",
  "deck": "Bogamulia Nagadi, pemegang saham utama TSPC, membeli 2.114.200 saham pada 19 Agustus 2026, menaikkan kepemilikan menjadi 91,04 persen.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TSPC",
   "kepemilikan saham",
   "Tempo Scan Pacific",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-3277-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bslt-fitch-afirmasi-rating-a-idn-outlook-stabil",
  "category": "Aksi Korporasi",
  "title": "BSLT: Fitch afirmasi rating A(idn), outlook [stabil]",
  "deck": "Fitch Ratings Indonesia mempertahankan peringkat nasional Bank SulutGo di A(idn) dengan outlook stabil, sepekan sebelum obligasi Rp750 miliar jatuh tempo 7 September 2026.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSLT",
   "Bank SulutGo",
   "Fitch Ratings",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1cc960ec19_fa83590e20.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-soroti-bank-emas-bri-kelola-153-ton",
  "category": "Perbankan",
  "title": "Presiden Prabowo Soroti Bank Emas, BRI Kelola [153] Ton",
  "deck": "Presiden Prabowo menyoroti potensi Bank Emas Indonesia, sementara BRI Group melalui Holding Ultra Mikro sudah mengelola ekosistem emas senilai 153 ton.",
  "date": "21 Agustus 2026",
  "image": "assets/img/presiden-prabowo-soroti-bank-emas-bri-kelola-153-ton.jpg",
  "imageV": "mt5v31sf",
  "tags": [
   "Bank Emas",
   "BRI",
   "Pegadaian",
   "Holding Ultra Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461433-presiden-prabowo-ungkap-potensi-bank-emas-bri-group-kelola-ekosistem-emas-153-ton-melalui-ekosistem-ultra-mikro"
 },
 {
  "slug": "cash-sandra-angela-tambah-saham-hak-suara-ke-8-07",
  "category": "Aksi Korporasi",
  "title": "CASH: Sandra Angela [Tambah] Saham, Hak Suara ke 8,07%",
  "deck": "Pemegang saham Sandra Angela menambah 2.987.700 saham Cashlez lewat pembelian tidak langsung, mengangkat hak suaranya dari 7,95% menjadi 8,07%.",
  "date": "21 Agustus 2026",
  "image": "assets/img/cash-sandra-angela-tambah-saham-hak-suara-ke-8-07.jpg",
  "tags": [
   "CASH",
   "Cashlez Worldwide Indonesia",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-6924-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direktur-pegadaian-jadi-ketua-umum-ibma-asosiasi-emas-baru",
  "category": "Perbankan",
  "title": "Direktur Pegadaian Jadi Ketua Umum [IBMA], Asosiasi Emas Baru",
  "deck": "Indonesia Bullion Market Association resmi terbentuk untuk menyatukan pelaku industri emas nasional, dipimpin Direktur Pegadaian Selfie Dewiyanti sebagai ketua umum pertama.",
  "date": "21 Agustus 2026",
  "image": "assets/img/direktur-pegadaian-jadi-ketua-umum-ibma-asosiasi-emas-baru.jpg",
  "imageV": "mt5v326r",
  "tags": [
   "IBMA",
   "bank emas",
   "Pegadaian",
   "BSI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461432-dorong-pembangunan-ekosistem-emas-berstandar-internasional-direktur-pegadaian-resmi-jadi-ketua-umum-indonesia-bullion-market-association"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-jual-saham-lagi-untuk-restrukturisasi-grup",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Jual Saham Lagi untuk [Restrukturisasi] Grup",
  "deck": "Putrasakti Mandiri menjual 900.000 saham KDTN pada 19 Agustus 2026 seharga Rp361, memangkas hak suaranya dari 34,63 persen menjadi 34,56 persen sebagai bagian restrukturisasi kepemilikan grup.",
  "date": "21 Agustus 2026",
  "image": "assets/img/kdtn-putrasakti-mandiri-jual-saham-lagi-untuk-restrukturisasi-grup.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-6054-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-koreksi-susunan-direksi-komisaris-eximbank",
  "category": "Aksi Korporasi",
  "title": "BEXI [Koreksi] Susunan Direksi-Komisaris Eximbank",
  "deck": "LPEI mengoreksi laporan sehari sebelumnya soal pergantian direksi dan dewan direktur, merinci nama lama dan baru beserta tanggal efektif tiap jabatan.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9565ce14a3_a1c8eb6e41.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pngo-gelar-rupslb-14-september-revisi-anggaran-dasar-dan-kbli",
  "category": "Aksi Korporasi",
  "title": "PNGO Gelar RUPSLB 14 September, Revisi [Anggaran Dasar] dan KBLI",
  "deck": "Perseroan memanggil RUPSLB pada 14 September 2026 untuk mengubah anggaran dasar terkait klasifikasi usaha, kewenangan direksi, dan penyesuaian daftar pemegang saham.",
  "date": "21 Agustus 2026",
  "image": "assets/img/pngo-gelar-rupslb-14-september-revisi-anggaran-dasar-dan-kbli.jpg",
  "tags": [
   "PNGO",
   "RUPSLB",
   "Anggaran Dasar",
   "AEP Pinago Plantations"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/86fe94729b_3bfbdd0440.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgun-jawab-permintaan-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "PGUN Jawab Permintaan Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "PGUN merespons permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkap ke publik.",
  "date": "21 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGUN",
   "volatilitas transaksi",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9d348a5136_c7374c90ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-direksi-beli-tambahan-500-saham-rp732-ribu",
  "category": "Aksi Korporasi",
  "title": "NICK: Direksi [Beli] Tambahan 500 Saham Rp732 Ribu",
  "deck": "Nicholas Santoso, direksi Charnic Capital, melaporkan pembelian 500 saham baru pada 18 Agustus 2026, menambah kepemilikannya menjadi 167.000 lembar.",
  "date": "21 Agustus 2026",
  "image": "assets/img/nick-direksi-beli-tambahan-500-saham-rp732-ribu.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-21082026-1464-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpia-akuisisi-bisnis-otomotif-cycle-carriage",
  "category": "Aksi Korporasi",
  "title": "TPIA Akuisisi Bisnis Otomotif [Cycle & Carriage]",
  "deck": "Chandra Asri Group menandatangani perjanjian bersyarat untuk mengakuisisi bisnis otomotif Cycle & Carriage di Singapura dan Malaysia, memperluas platform mobilitas regionalnya.",
  "date": "21 Agustus 2026",
  "image": "assets/img/tpia-akuisisi-bisnis-otomotif-cycle-carriage.jpg",
  "tags": [
   "TPIA",
   "Chandra Asri",
   "akuisisi",
   "otomotif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b144b134ab_8f499fbf88.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-asuransi-umum-lgi-tumbuh-di-tengah-ekonomi-menantang",
  "category": "Pasar Modal",
  "title": "Laba Asuransi Umum LGI [Tumbuh] di Tengah Ekonomi Menantang",
  "deck": "PT Lippo General Insurance Tbk membukukan kenaikan pendapatan dan laba sebelum pajak pada semester I 2026, melanjutkan tren kinerja rekor di tengah ekonomi yang masih menantang.",
  "date": "21 Agustus 2026",
  "image": "assets/img/laba-asuransi-umum-lgi-tumbuh-di-tengah-ekonomi-menantang.jpg",
  "imageV": "mt5v32l3",
  "tags": [
   "asuransi",
   "Lippo General Insurance",
   "laporan keuangan",
   "IFRS 17"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461401-di-tengah-ekonomi-menantang-pendapatan-asuransi-umum-tumbuh-hingga-339-persen"
 },
 {
  "slug": "laba-indonesia-re-melonjak-544-persen-di-2025",
  "category": "BUMN",
  "title": "Laba Indonesia Re [Melonjak] 544 Persen di 2025",
  "deck": "Laba bersih Indonesia Re naik ke Rp176,96 miliar pada 2025, didorong penerapan standar akuntansi baru dan perbaikan hasil investasi perusahaan reasuransi pelat merah ini.",
  "date": "21 Agustus 2026",
  "image": "assets/img/laba-indonesia-re-melonjak-544-persen-di-2025.jpg",
  "imageV": "mt5yrrpa",
  "tags": [
   "Indonesia Re",
   "reasuransi",
   "BUMN",
   "PSAK 117"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461398-investasi-tumbuh-signifikan-laba-perusahaan-reasuransi-melonjak-544-persen"
 },
 {
  "slug": "mknt-konversi-utang-rp823-m-jadi-saham-dilusi-nyaris-100",
  "category": "Aksi Korporasi",
  "title": "MKNT Konversi Utang Rp823 M Jadi Saham, [Dilusi] Nyaris 100%",
  "deck": "MKNT mengubah harga pelaksanaan saham baru PMTHMETD jadi Rp1 per saham, menerbitkan 1,02 triliun lembar saham baru atau 99,46% dari saham beredar saat ini.",
  "date": "21 Agustus 2026",
  "image": "assets/img/mknt-konversi-utang-rp823-m-jadi-saham-dilusi-nyaris-100.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "dilusi saham",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2f596abf5a_ae47c93fdd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apln-sangkal-info-material-usai-saham-melonjak-volume-3-kali-lipat",
  "category": "Aksi Korporasi",
  "title": "APLN Sangkal Info Material Usai Saham Melonjak [Volume] 3 Kali Lipat",
  "deck": "APLN menjawab permintaan penjelasan BEI usai volume sahamnya melonjak hampir tiga kali lipat dan harga naik 5,84 persen pada 19 Agustus 2026, namun menyatakan tak ada info material yang diketahui.",
  "date": "20 Agustus 2026",
  "image": "assets/img/apln-sangkal-info-material-usai-saham-melonjak-volume-3-kali-lipat.jpg",
  "tags": [
   "APLN",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1106c8c2ab_796e05f063.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-koreksi-rencana-jual-saham-treasuri-mulai-31-agustus",
  "category": "Aksi Korporasi",
  "title": "BWPT Koreksi Rencana Jual Saham Treasuri Mulai [31 Agustus]",
  "deck": "BWPT mengoreksi surat sebelumnya, menegaskan penjualan hingga 402,9 juta saham treasuri (1,28% saham) mulai 31 Agustus 2026 lewat PT Samuel Sekuritas Indonesia.",
  "date": "20 Agustus 2026",
  "image": "assets/img/bwpt-koreksi-rencana-jual-saham-treasuri-mulai-31-agustus.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "saham treasuri",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/cc38094a11_e836110562.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "peha-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PEHA jawab permintaan BEI soal [volatilitas] transaksi sahamnya",
  "deck": "Bursa Efek Indonesia meminta Phapros menjelaskan volatilitas transaksi sahamnya. Manajemen menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "20 Agustus 2026",
  "image": "assets/img/peha-jawab-permintaan-bei-soal-volatilitas-transaksi-sahamnya.jpg",
  "tags": [
   "PEHA",
   "Phapros",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4543b549db_19c4eb0588.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "post-ajukan-rups-sukuk-minta-restrukturisasi-dan-waiver",
  "category": "Aksi Korporasi",
  "title": "POST Ajukan RUPS Sukuk, Minta [Restrukturisasi] dan Waiver",
  "deck": "PT Pos Indonesia (kode POST) memanggil pemegang Sukuk Ijarah Berkelanjutan I Tahap II 2025 ke rapat 4 September 2026, meminta persetujuan restrukturisasi utang dan waiver kovenan keuangan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/post-ajukan-rups-sukuk-minta-restrukturisasi-dan-waiver.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "Sukuk",
   "Restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bcae2c7b42_135bf71988.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kepemilikan-mice-siwie-honoris-tambah-saham-jadi-969-200-unit",
  "category": "Aksi Korporasi",
  "title": "[Kepemilikan] MICE: Siwie Honoris tambah saham jadi 969.200 unit",
  "deck": "Siwie Honoris menambah kepemilikan saham MICE sebanyak 20.200 lembar lewat dua pembelian tidak langsung pada 14 dan 18 Agustus, hak suara naik jadi 0,1615%.",
  "date": "20 Agustus 2026",
  "image": "assets/img/kepemilikan-mice-siwie-honoris-tambah-saham-jadi-969-200-unit.jpg",
  "tags": [
   "MICE",
   "Multi Indocitra",
   "kepemilikan saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-3015-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smga-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "SMGA Jawab Permintaan BEI soal [Volatilitas] Transaksi Saham",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham SMGA. Perseroan menyatakan tidak ada informasi material yang mempengaruhi harga sahamnya.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGA",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bfe2bc2c8a_cda9b58fd2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wege-digugat-pkpu-oleh-pt-pratama-widya-tbk",
  "category": "Aksi Korporasi",
  "title": "WEGE Digugat [PKPU] oleh PT Pratama Widya Tbk",
  "deck": "Pengadilan Niaga Jakarta Pusat mencatat permohonan PKPU terhadap WEGE dengan PT Pratama Widya Tbk sebagai pemohon. Perseroan akan memverifikasi klaim sebelum menanggapi.",
  "date": "20 Agustus 2026",
  "image": "assets/img/wege-digugat-pkpu-oleh-pt-pratama-widya-tbk.jpg",
  "tags": [
   "WEGE",
   "PKPU",
   "Pratama Widya",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/066b750dd8_9536cb2973.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "grph-tanggapi-bei-volatilitas-transaksi-pengendali-tetap-70-24",
  "category": "Aksi Korporasi",
  "title": "GRPH Tanggapi BEI: [Volatilitas] Transaksi, Pengendali Tetap 70,24%",
  "deck": "GRPH menjawab permintaan penjelasan BEI soal volatilitas transaksi sahamnya. Pemegang saham utama, PT Mulia Jaya Palma, memastikan tidak ada rencana mengubah kepemilikan 70,24 persen sahamnya.",
  "date": "20 Agustus 2026",
  "image": "assets/img/grph-tanggapi-bei-volatilitas-transaksi-pengendali-tetap-70-24.jpg",
  "tags": [
   "GRPH",
   "volatilitas saham",
   "pemegang saham utama",
   "keterbukaan informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/14749f5738_3d750b7ab5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "real-bentuk-anak-usaha-baru-untuk-garap-data-center",
  "category": "Aksi Korporasi",
  "title": "REAL Bentuk Anak Usaha Baru untuk Garap [Data Center]",
  "deck": "Repower Asia Indonesia mendirikan PT Repower Global Sinergitama dengan modal disetor Rp250 juta, membuka jalan ke bisnis pusat data properti.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REAL",
   "anak usaha",
   "data center",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/12fda7d3ef_e91feef0dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-indonesia-eximbank-rombak-direksi-dan-dewan-direktur",
  "category": "Aksi Korporasi",
  "title": "BEXI: Indonesia Eximbank Rombak [Direksi] dan Dewan Direktur",
  "deck": "Indonesia Eximbank mengganti lima direktur pelaksana dan enam anggota Dewan Direktur, dengan Sukatmo Padmosukarso naik jadi Ketua Dewan Direktur efektif akhir Desember 2025.",
  "date": "20 Agustus 2026",
  "image": "assets/img/bexi-indonesia-eximbank-rombak-direksi-dan-dewan-direktur.jpg",
  "tags": [
   "BEXI",
   "Indonesia Eximbank",
   "Dewan Direktur",
   "Perubahan Pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dfa16bb142_ba0ab1f098.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-lpkr-11-september-bahas-penurunan-modal-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "RUPSLB LPKR 11 September Bahas [Penurunan] Modal dan Komisaris",
  "deck": "Lippo Karawaci mengundang pemegang saham ke RUPSLB 11 September 2026 untuk menyetujui perubahan susunan komisaris dan penurunan modal lewat pembatalan saham treasuri.",
  "date": "20 Agustus 2026",
  "image": "assets/img/rupslb-lpkr-11-september-bahas-penurunan-modal-dan-komisaris.jpg",
  "tags": [
   "LPKR",
   "RUPSLB",
   "Lippo Karawaci",
   "saham treasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d36059d75d_3b4c887d83.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpck-gelar-rupslb-komisaris-charles-rigoux-mundur",
  "category": "Aksi Korporasi",
  "title": "LPCK Gelar RUPSLB, Komisaris [Charles Rigoux] Mundur",
  "deck": "Lippo Cikarang menggelar RUPSLB pada 11 September 2026 untuk menyetujui pengunduran diri Komisaris Charles Rigoux, susunan pengurus baru berlaku sampai 2029.",
  "date": "20 Agustus 2026",
  "image": "assets/img/lpck-gelar-rupslb-komisaris-charles-rigoux-mundur.jpg",
  "tags": [
   "LPCK",
   "RUPSLB",
   "Lippo Cikarang",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/52a75df702_9e9938e406.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-akan-jual-saham-treasuri-mulai-28-agustus-2026",
  "category": "Aksi Korporasi",
  "title": "BWPT Akan Jual [Saham Treasuri] Mulai 28 Agustus 2026",
  "deck": "Eagle High Plantations berencana mengalihkan hingga 402,9 juta saham hasil buyback lewat BEI mulai 28 Agustus 2026, memenuhi kewajiban POJK 29/2023.",
  "date": "20 Agustus 2026",
  "image": "assets/img/bwpt-akan-jual-saham-treasuri-mulai-28-agustus-2026.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "saham treasuri",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/78f4abdb14_1f0341c556.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yupi-bagikan-dividen-interim-rp17-01-per-saham-cair-10-september",
  "category": "Aksi Korporasi",
  "title": "YUPI Bagikan [Dividen] Interim Rp17,01 per Saham, Cair 10 September",
  "deck": "YUPI menetapkan dividen interim tahun buku 2026 sebesar Rp17,01 per saham, total Rp145,38 miliar, dengan pembayaran pada 10 September 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/yupi-bagikan-dividen-interim-rp17-01-per-saham-cair-10-september.jpg",
  "tags": [
   "YUPI",
   "dividen",
   "dividen interim",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/61d28a830f_93fa578d13.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmtr-siapkan-rp10-6-miliar-untuk-pelunasan-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "BMTR Siapkan Rp10,6 Miliar untuk [Pelunasan] Obligasi dan Sukuk",
  "deck": "Global Mediacom melaporkan kesiapan dana untuk melunasi obligasi dan sukuk ijarah seri C senilai total Rp10,6 miliar yang jatuh tempo 14 September 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/bmtr-siapkan-rp10-6-miliar-untuk-pelunasan-obligasi-dan-sukuk.jpg",
  "tags": [
   "BMTR",
   "Global Mediacom",
   "obligasi",
   "sukuk ijarah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/53065d53fc_1c96fef652.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmas-bantah-info-material-di-balik-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "DMAS Bantah Info Material di Balik [Volatilitas] Transaksi Saham",
  "deck": "DMAS menjawab permintaan Bursa Efek Indonesia soal volatilitas transaksi sahamnya, membantah ada informasi material tersembunyi dan memastikan RUPSLB digelar 22 September 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/dmas-bantah-info-material-di-balik-volatilitas-transaksi-saham.jpg",
  "tags": [
   "DMAS",
   "Puradelta Lestari",
   "RUPSLB",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0dd9e928f7_5b2f89f6fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "direksi-nsss-lepas-214-8-juta-saham-lewat-repo",
  "category": "Aksi Korporasi",
  "title": "Direksi [NSSS] Lepas 214,8 Juta Saham Lewat Repo",
  "deck": "Direksi Samuel Sekuritas Indonesia melepas 214,79 juta saham NSSS senilai Rp705 per saham lewat pencairan repo, menurunkan hak suaranya dari 24,96% jadi 24,06%.",
  "date": "20 Agustus 2026",
  "image": "assets/img/direksi-nsss-lepas-214-8-juta-saham-lewat-repo.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-6898-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dnar-tunjuk-ok-data-system-urus-it-security-rp64-juta",
  "category": "Aksi Korporasi",
  "title": "DNAR Tunjuk OK Data System Urus IT Security, [Rp64 Juta]",
  "deck": "PT Bank Oke Indonesia Tbk menunjuk OK Data System, perusahaan terafiliasi lewat OK Next Co., Ltd, sebagai penyedia jasa IT security senilai Rp63,9 juta.",
  "date": "20 Agustus 2026",
  "image": "assets/img/dnar-tunjuk-ok-data-system-urus-it-security-rp64-juta.jpg",
  "tags": [
   "DNAR",
   "Bank Oke Indonesia",
   "transaksi afiliasi",
   "OK Data System"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/27bb9b5a7a_a03ee6efc3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-pakai-rp196-8-miliar-dana-obligasi-untuk-lunasi-utang-retj",
  "category": "Aksi Korporasi",
  "title": "RATU Pakai Rp196,8 Miliar Dana Obligasi untuk [Lunasi] Utang RETJ",
  "deck": "RATU melaporkan perbaikan realisasi dana sukuk dan obligasi Rp800 miliar per 30 Juni 2026, sebagian besar dipakai melunasi utang bank RETJ dan cash call ke dua anak usaha.",
  "date": "20 Agustus 2026",
  "image": "assets/img/ratu-pakai-rp196-8-miliar-dana-obligasi-untuk-lunasi-utang-retj.jpg",
  "tags": [
   "RATU",
   "obligasi",
   "sukuk",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/06c1789af8_f11ea58ff4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-748-kuota-bbm-subsidi-dipangkas-58-5",
  "category": "Moneter",
  "title": "Rupiah Menguat ke Rp17.748, Kuota BBM Subsidi Dipangkas [58,5%]",
  "deck": "Rupiah ditutup menguat 92 poin ke Rp17.748 per dolar AS, seiring sinyal pemerintah memangkas kuota BBM subsidi 58,5 persen mulai 2027.",
  "date": "20 Agustus 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-748-kuota-bbm-subsidi-dipangkas-58-5.jpg",
  "imageV": "mt5yrsbi",
  "tags": [
   "rupiah",
   "BBM subsidi",
   "kuota BBM 2027",
   "kurs rupiah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/461314-rupiah-ditutup-menguat-rp17748-tapi-kuota-bbm-subsidi-dipangkas-585-persen"
 },
 {
  "slug": "dr-sesuaikan-rasio-waran-bbca-usai-dividen-rp25-saham",
  "category": "Aksi Korporasi",
  "title": "DR Sesuaikan [Rasio] Waran BBCA usai Dividen Rp25/Saham",
  "deck": "RHB Sekuritas Indonesia (DR) menyesuaikan rasio dan harga pelaksanaan waran terstruktur BBCA menyusul rencana dividen tunai Rp25 per saham yang dibayar BBCA pada 16 September 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/dr-sesuaikan-rasio-waran-bbca-usai-dividen-rp25-saham.jpg",
  "tags": [
   "DR",
   "BBCA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9116efcbd0_859175345a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-doni-mora-jual-100-000-saham-hak-suara-tetap",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi Doni Mora [jual] 100.000 saham, hak suara tetap",
  "deck": "Direksi ITSEC Asia (CYBR), Doni Mora, menjual 100.000 saham perusahaan pada 19 Agustus 2026 senilai sekitar Rp56 juta, namun hak suaranya di perseroan tetap 0,035 persen.",
  "date": "20 Agustus 2026",
  "image": "assets/img/cybr-direksi-doni-mora-jual-100-000-saham-hak-suara-tetap.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-7517-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rgas-keluar-dari-pemantauan-khusus-bei-efektif-21-agustus",
  "category": "Aksi Korporasi",
  "title": "RGAS [Keluar] dari Pemantauan Khusus BEI Efektif 21 Agustus",
  "deck": "Bursa mencabut status pemantauan khusus saham RGAS milik PT Kian Santang Muliatama Tbk dan mengembalikannya ke Papan Pengembangan mulai 21 Agustus 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/rgas-keluar-dari-pemantauan-khusus-bei-efektif-21-agustus.jpg",
  "tags": [
   "RGAS",
   "BEI",
   "pemantauan khusus",
   "Papan Pengembangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dc856c4ebf_4d6d9e4c73.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-komisaris-lepas-3-juta-saham-lagi-suara-ke-53-46",
  "category": "Aksi Korporasi",
  "title": "MEDS: Komisaris Lepas 3 Juta Saham Lagi, Suara ke [53,46%]",
  "deck": "Komisaris Jemmy Kurniawan kembali menjual 3 juta saham Hetzer Medical Indonesia pada 19 Agustus, transaksi keempat dalam sepekan, hak suaranya turun ke 53,46 persen.",
  "date": "20 Agustus 2026",
  "image": "assets/img/meds-komisaris-lepas-3-juta-saham-lagi-suara-ke-53-46.jpg",
  "tags": [
   "MEDS",
   "Hetzer Medical Indonesia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-7047-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-nyatakan-siap-bayar-pokok-obligasi-rp600-miliar",
  "category": "Aksi Korporasi",
  "title": "SMII Nyatakan [Siap] Bayar Pokok Obligasi Rp600 Miliar",
  "deck": "PT Sarana Multi Infrastruktur (SMII) menyatakan kesiapan dana Rp600 miliar untuk melunasi pokok Obligasi Berkelanjutan III Tahap IV Seri B yang jatuh tempo 14 Desember 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/smii-nyatakan-siap-bayar-pokok-obligasi-rp600-miliar.jpg",
  "tags": [
   "SMII",
   "obligasi korporasi",
   "Sarana Multi Infrastruktur",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f77dd72333_db3c579161.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beer-bantah-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "BEER Bantah Ada [Informasi Material] di Balik Volatilitas Saham",
  "deck": "BEER menjawab surat BEI soal lonjakan volatilitas transaksi sahamnya, menyatakan tidak ada informasi material tersembunyi dan belum ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/beer-bantah-ada-informasi-material-di-balik-volatilitas-saham.jpg",
  "tags": [
   "BEER",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/65871e8533_867ace482d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-siap-bayar-obligasi-rp2-5-triliun-jatuh-tempo-desember",
  "category": "Aksi Korporasi",
  "title": "SMII Siap Bayar [Obligasi] Rp2,5 Triliun Jatuh Tempo Desember",
  "deck": "SMII menyatakan kesiapan dana melunasi obligasi Rp800 miliar dan sukuk mudharabah Rp1,7 triliun, total Rp2,5 triliun, jatuh tempo 7 Desember 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/smii-siap-bayar-obligasi-rp2-5-triliun-jatuh-tempo-desember.jpg",
  "tags": [
   "SMII",
   "obligasi",
   "sukuk mudharabah",
   "BUMN infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7a7f2c109b_c34cd3abc8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "port-balas-surat-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "PORT Balas Surat BEI soal [Volatilitas] Transaksi Saham",
  "deck": "BEI meminta penjelasan PORT atas lonjakan transaksi saham pada 18 Agustus 2026. Perseroan menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "20 Agustus 2026",
  "image": "assets/img/port-balas-surat-bei-soal-volatilitas-transaksi-saham.jpg",
  "tags": [
   "PORT",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/47bc119270_a3ba09e535.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-asia-intrainvesta-jual-750-juta-saham-hak-suara-ke-27-69",
  "category": "Aksi Korporasi",
  "title": "NAYZ: Asia Intrainvesta [jual] 750 juta saham, hak suara ke 27,69%",
  "deck": "Asia Intrainvesta melepas 750 juta saham NAYZ ke Saiko senilai Rp17,6 miliar pada 19 Agustus 2026, memangkas hak suaranya dari 57,10% menjadi 27,69% dan melepas status pengendali.",
  "date": "20 Agustus 2026",
  "image": "assets/img/nayz-asia-intrainvesta-jual-750-juta-saham-hak-suara-ke-27-69.jpg",
  "tags": [
   "NAYZ",
   "kepemilikan saham",
   "Asia Intrainvesta",
   "perubahan pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-4519-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "swat-panggil-rups-tahunan-agenda-cuma-satu-item",
  "category": "Aksi Korporasi",
  "title": "SWAT Panggil RUPS Tahunan, [Agenda] Cuma Satu Item",
  "deck": "Direksi SWAT mengundang RUPS Tahunan pada 11 September 2026 di Solo, dengan agenda tunggal pengesahan laporan tahunan dan keuangan 2025 serta pembebasan tanggung jawab direksi-komisaris.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SWAT",
   "RUPS Tahunan",
   "laporan keuangan",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4939aa1bf1_56a6e6e93f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sola-konfirmasi-margin-laba-kotor-terus-tergerus-hingga-2027",
  "category": "Aksi Korporasi",
  "title": "SOLA Konfirmasi Margin Laba Kotor Terus [Tergerus] hingga 2027",
  "deck": "SOLA menjawab permintaan penjelasan BEI soal piutang naik 86,96%, margin laba yang terus tergerus, rugi bersih, dan utang jangka pendek Rp22 miliar akibat pelanggan besar telat bayar.",
  "date": "20 Agustus 2026",
  "image": "assets/img/sola-konfirmasi-margin-laba-kotor-terus-tergerus-hingga-2027.jpg",
  "tags": [
   "SOLA",
   "Xolare RCR Energy",
   "keterbukaan informasi",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d4b4a9fb61_6bc03336a5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trja-direksi-jual-nyaris-separuh-sahamnya-di-tengah-sorotan-bursa",
  "category": "Aksi Korporasi",
  "title": "TRJA: Direksi [Jual] Nyaris Separuh Sahamnya di Tengah Sorotan Bursa",
  "deck": "Direksi TRJA R Hesthi Sambodo melepas 500.000 saham secara tidak langsung pada 11 Agustus, memangkas kepemilikannya hampir separuh menjadi 453.800 lembar saham.",
  "date": "20 Agustus 2026",
  "image": "assets/img/trja-direksi-jual-nyaris-separuh-sahamnya-di-tengah-sorotan-bursa.jpg",
  "tags": [
   "TRJA",
   "Transkon Jaya",
   "kepemilikan saham direksi",
   "transaksi insider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-6111-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arti-tanggapi-bursa-soal-gugatan-beruntun-derek-prabu-maras",
  "category": "Aksi Korporasi",
  "title": "ARTI Tanggapi Bursa Soal [Gugatan] Beruntun Derek Prabu Maras",
  "deck": "Ratu Prabu Energi (ARTI) menjawab permintaan penjelasan Bursa terkait rentetan gugatan Derek Prabu Maras, termasuk satu permohonan pailit yang masih berjalan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTI",
   "Ratu Prabu Energi",
   "gugatan hukum",
   "pailit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7a781501f8_bb3be5d5dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgwg-jadwalkan-rupslb-pada-28-september-2026",
  "category": "Aksi Korporasi",
  "title": "DGWG Jadwalkan [RUPSLB] pada 28 September 2026",
  "deck": "Delta Giri Wacana Tbk mengumumkan rencana RUPSLB pada 28 September 2026, dengan daftar pemegang saham berhak hadir ditutup 3 September 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "RUPSLB",
   "Delta Giri Wacana",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/14f8f39197_af483c4a69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mrei-beber-dampak-insiden-siber-ke-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "MREI Beber Dampak Insiden Siber ke Laporan [Keuangan]",
  "deck": "Dalam public expose, MREI mengungkap insiden siber akhir 2025 menambah biaya digital forensik dan capex TI, serta memaksa penyusunan ulang laporan keuangan auditan 2025.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MREI",
   "asuransi",
   "insiden siber",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/288008132d_0e2e716dcf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jgle-gelar-rupslb-ketiga-usai-dua-kali-gagal-kuorum",
  "category": "Aksi Korporasi",
  "title": "JGLE Gelar RUPSLB Ketiga usai Dua Kali Gagal [Kuorum]",
  "deck": "RUPSLB ketiga JGLE dijadwalkan 1 September 2026 setelah dua rapat sebelumnya gagal capai kuorum, dengan agenda tunggal penyesuaian klasifikasi usaha ke KBLI 2025.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JGLE",
   "RUPSLB",
   "KBLI 2025",
   "kuorum"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e10c119c26_dd2a1a1a74.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "good-komisaris-sudhamek-tambah-6-79-juta-saham",
  "category": "Aksi Korporasi",
  "title": "GOOD: Komisaris Sudhamek [Tambah] 6,79 Juta Saham",
  "deck": "Komisaris Garudafood, Sudhamek Agoeng Waspodo, menambah 6,79 juta saham GOOD senilai sekitar Rp2,72 miliar pada 13 Agustus 2026, menaikkan hak suaranya tipis dari 8,83 persen menjadi 8,85 persen.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOOD",
   "Garudafood",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-4297-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-ubah-jadwal-rupslb-jadi-23-september-2026",
  "category": "Aksi Korporasi",
  "title": "WIFI Ubah Jadwal [RUPSLB] Jadi 23 September 2026",
  "deck": "Solusi Sinergi Digital menunda RUPSLB dari 11 menjadi 23 September 2026, dengan batas pencatatan pemegang saham yang berhak hadir pada 31 Agustus 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "RUPSLB",
   "jadwal rapat",
   "Solusi Sinergi Digital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9d1237cc57_e8bd840faf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekad-jawab-bursa-tak-ada-kabar-baru-selain-loi-akuisisi",
  "category": "Aksi Korporasi",
  "title": "EKAD Jawab Bursa: Tak Ada Kabar Baru Selain LOI [Akuisisi]",
  "deck": "EKAD menegaskan ke Bursa bahwa volatilitas transaksi terkait LOI akuisisi ekuitas yang sudah diumumkan 12 Agustus, dan tak ada aksi korporasi baru dalam tiga bulan ke depan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EKAD",
   "Ekadharma International",
   "akuisisi ekuitas",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1f5beed1b2_36196314e3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meja-bantah-simpan-info-material-soal-gejolak-saham",
  "category": "Aksi Korporasi",
  "title": "MEJA Bantah Simpan Info Material soal [Gejolak] Saham",
  "deck": "MEJA menjawab permintaan BEI soal volatilitas sahamnya, menegaskan tidak ada fakta material tersembunyi dan rencana akuisisi Trimata Coal Perkasa masih sesuai pengumuman sebelumnya.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "volatilitas saham",
   "keterbukaan informasi",
   "akuisisi tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7251677d1c_2174c27336.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pege-hak-suara-pemegang-saham-turun-ke-6-8-usai-rights-issue",
  "category": "Aksi Korporasi",
  "title": "PEGE: Hak Suara Pemegang Saham Turun ke 6,8% Usai [Rights Issue]",
  "deck": "PT Mandiri Terang Harapan melaporkan hak suaranya di PEGE turun dari 9,06% menjadi 6,80% setelah rights issue menambah saham beredar, meski jumlah saham yang dipegangnya tidak berubah.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEGE",
   "Panca Global Kapital",
   "rights issue",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-5966-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "best-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "BEST Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Bekasi Fajar Industrial Estate menjawab permintaan penjelasan BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada informasi material maupun rencana aksi korporasi yang belum diungkap.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEST",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ca2ba171f2_9603b16cd4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-jadwalkan-public-expose-buntut-suspensi-cooling-down",
  "category": "Aksi Korporasi",
  "title": "BEEF Jadwalkan Public Expose Buntut [Suspensi] Cooling Down",
  "deck": "Perseroan menjadwalkan paparan publik insidentil pada 24 Agustus 2026 untuk menjelaskan suspensi cooling down atas sahamnya yang berlaku sejak 19 Agustus 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEEF",
   "suspensi saham",
   "public expose",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20edc84d62_cdb05d04fd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-jual-492-800-saham-senilai-rp250-juta",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris [Jual] 492.800 Saham Senilai Rp250 Juta",
  "deck": "Komisaris AKPI Henry Liem melepas 492.800 saham dalam tiga transaksi pada 18 Agustus 2026 senilai sekitar Rp250,4 juta, hak suaranya turun tipis menjadi 1,75 persen.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20082026-6804-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcpi-panggil-rupslb-tunjuk-komisaris-baru",
  "category": "Aksi Korporasi",
  "title": "TCPI Panggil RUPSLB, Tunjuk [Komisaris] Baru",
  "deck": "PT Transcoal Pacific Tbk mengundang pemegang saham ke RUPSLB 11 September 2026 untuk menyetujui penambahan satu anggota Dewan Komisaris baru.",
  "date": "20 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCPI",
   "RUPSLB",
   "Dewan Komisaris",
   "Transcoal Pacific"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/df9de56d93_c69a0a7812.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-raih-laba-rp21-3-miliar-utang-berelasi-rp349-m-jatuh-tempo",
  "category": "Aksi Korporasi",
  "title": "BAJA raih laba Rp21,3 miliar, utang [berelasi] Rp349 M jatuh tempo",
  "deck": "SCB catat laba bersih Rp21,33 miliar semester I 2026 dan siapkan PMHMETD untuk menata utang ke pihak berelasi Rp348,86 miliar yang jatuh tempo setahun ke depan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/baja-raih-laba-rp21-3-miliar-utang-berelasi-rp349-m-jatuh-tempo.jpg",
  "tags": [
   "BAJA",
   "suspensi saham",
   "PMHMETD",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ba2189153e_e56a5f6170.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smmf-sahkan-rupst-lewat-keputusan-sirkuler-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "SMMF Sahkan RUPST Lewat [Keputusan Sirkuler] Pemegang Saham",
  "deck": "RUPST PT Sinar Mas Multifinance disahkan lewat keputusan sirkuler pada 19 Agustus 2026, disetujui penuh oleh dua pemegang saham yang menguasai seluruh 1,55 juta saham perseroan.",
  "date": "20 Agustus 2026",
  "image": "assets/img/smmf-sahkan-rupst-lewat-keputusan-sirkuler-pemegang-saham.jpg",
  "tags": [
   "SMMF",
   "RUPST",
   "Sinar Mas Multifinance",
   "Multifinance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c9c793e798_567da91da4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nayz-ganti-pengendali-saiko-kuasai-29-41-saham",
  "category": "Aksi Korporasi",
  "title": "NAYZ ganti [pengendali], Saiko kuasai 29,41% saham",
  "deck": "Saiko Consultancy Pte. Ltd. resmi menjadi pengendali baru NAYZ usai membeli 750 juta saham senilai Rp17,6 miliar dari PT Asia Intrainvesta.",
  "date": "20 Agustus 2026",
  "image": "assets/img/nayz-ganti-pengendali-saiko-kuasai-29-41-saham.jpg",
  "tags": [
   "NAYZ",
   "perubahan pengendali",
   "akuisisi",
   "tender offer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e8de72d99b_e3116db65b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-kantongi-dividen-interim-rp100-miliar-dari-tirta",
  "category": "Aksi Korporasi",
  "title": "AVIA Kantongi [Dividen] Interim Rp100 Miliar dari Tirta",
  "deck": "PT Avia Avian Tbk menerima dividen interim sebesar Rp99,99 miliar dari anak usahanya, PT Tirtakencana Tatawarna, pada 19 Agustus 2026.",
  "date": "20 Agustus 2026",
  "image": "assets/img/avia-kantongi-dividen-interim-rp100-miliar-dari-tirta.jpg",
  "tags": [
   "AVIA",
   "dividen interim",
   "Avia Avian",
   "Tirtakencana Tatawarna"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/96da3b2970_a5de55c464.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mine-batalkan-rupslb-agenda-pergantian-direksi-molor",
  "category": "Aksi Korporasi",
  "title": "MINE [Batalkan] RUPSLB, Agenda Pergantian Direksi Molor",
  "deck": "RUPSLB PT Sinar Terang Mandiri Tbk yang dijadwalkan 31 Agustus 2026 batal digelar tanpa jadwal pengganti, agenda pergantian direksi dan perubahan anggaran dasar ikut tertunda.",
  "date": "20 Agustus 2026",
  "image": "assets/img/mine-batalkan-rupslb-agenda-pergantian-direksi-molor.jpg",
  "tags": [
   "MINE",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/45ff5ecdcc_c1ef1988c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnba-gelar-rupslb-ganti-presiden-direktur-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "BNBA Gelar [RUPSLB], Ganti Presiden Direktur dan Komisaris",
  "deck": "Bank Bumi Arta memanggil RUPSLB 10 September 2026 untuk mengganti presiden direktur dan lima kursi komisaris, menyusul RUPST Juni yang gagal mencapai kesepakatan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bnba-gelar-rupslb-ganti-presiden-direktur-dan-komisaris.jpg",
  "tags": [
   "BNBA",
   "RUPSLB",
   "Bank Bumi Arta",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9e7592fe4d_ac5234081c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-komisaris-lagi-lepas-10-5-juta-saham-suara-ke-53-65",
  "category": "Aksi Korporasi",
  "title": "MEDS: Komisaris [Lagi] Lepas 10,5 Juta Saham, Suara ke 53,65%",
  "deck": "Komisaris Hetzer Medical Indonesia melepas 10,5 juta saham senilai sekitar Rp756,6 juta dalam lima transaksi pada 18 Agustus 2026, penjualan ketiga berturut-turut sejak pekan lalu.",
  "date": "19 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "Komisaris",
   "Kepemilikan Saham",
   "Hetzer Medical Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19082026-1867-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbdk-siapkan-buyback-rp250-miliar-usai-saham-turun-57",
  "category": "Aksi Korporasi",
  "title": "CBDK Siapkan [Buyback] Rp250 Miliar usai Saham Turun 57%",
  "deck": "Bangun Kosambi Sukses (CBDK) berencana membeli kembali saham senilai maksimal Rp250 miliar pada 20 Agustus hingga 19 November 2026, merespons harga saham yang anjlok 57 persen sepanjang tahun ini.",
  "date": "19 Agustus 2026",
  "image": "assets/img/cbdk-siapkan-buyback-rp250-miliar-usai-saham-turun-57.jpg",
  "tags": [
   "CBDK",
   "buyback saham",
   "pasar modal",
   "Bangun Kosambi Sukses"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d44342c0e8_73713a588e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpns-kena-sanksi-bei-denda-rp50-juta-lk-triwulan-i-2026",
  "category": "Aksi Korporasi",
  "title": "DPNS Kena [Sanksi] BEI, Denda Rp50 Juta LK Triwulan I 2026",
  "deck": "Bursa Efek Indonesia menjatuhkan sanksi Peringatan Tertulis II dan denda Rp50 juta kepada DPNS karena belum menyerahkan laporan keuangan triwulan I 2026 yang diaudit hingga 30 Juli 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/dpns-kena-sanksi-bei-denda-rp50-juta-lk-triwulan-i-2026.jpg",
  "tags": [
   "DPNS",
   "sanksi BEI",
   "laporan keuangan",
   "Duta Pertiwi Nusantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e7afaed5a3_188cda1898.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inru-tanggapi-dugaan-korupsi-transfer-pricing-rp2-triliun",
  "category": "Aksi Korporasi",
  "title": "INRU Tanggapi Dugaan Korupsi [Transfer Pricing] Rp2 Triliun",
  "deck": "Toba Pulp Lestari merespons permintaan penjelasan BEI soal pemberitaan dugaan korupsi transfer pricing Ditjen Pajak senilai Rp2 triliun yang disebut melibatkan perusahaan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/inru-tanggapi-dugaan-korupsi-transfer-pricing-rp2-triliun.jpg",
  "tags": [
   "INRU",
   "Toba Pulp Lestari",
   "korupsi",
   "transfer pricing"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1fd338212c_4ff0cba4be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-rencanakan-pmthmetd-hingga-10-saham-baru",
  "category": "Aksi Korporasi",
  "title": "BIPP Rencanakan [PMTHMETD] hingga 10% Saham Baru",
  "deck": "BIPP berencana menerbitkan hingga 502,8 juta saham baru tanpa HMETD, mendilusi pemegang saham lama hingga 9,09 persen, untuk disetujui dalam RUPSLB 25 September 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bipp-rencanakan-pmthmetd-hingga-10-saham-baru.jpg",
  "tags": [
   "BIPP",
   "penambahan modal",
   "dilusi saham",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8bc2c670d7_605f73bcc0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbca-bagikan-dividen-interim-rp25-saham-total-rp3-07-t",
  "category": "Aksi Korporasi",
  "title": "BBCA Bagikan [Dividen] Interim Rp25/Saham, Total Rp3,07 T",
  "deck": "BCA akan membagikan dividen interim Rp25 per saham senilai total Rp3,07 triliun untuk periode Januari-Juni 2026, dengan pembayaran pada 16 September 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBCA",
   "dividen",
   "perbankan",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c3076472a8_e5ca870b61.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-terbitkan-pmthmetd-10-saham-baru-dilusi-maksimal-9-09",
  "category": "Aksi Korporasi",
  "title": "BIPP Terbitkan [PMTHMETD] 10% Saham Baru, Dilusi Maksimal 9,09%",
  "deck": "BIPP berencana menerbitkan sebanyak-banyaknya 502,9 juta saham baru tanpa hak memesan efek terlebih dahulu untuk mendanai ekspansi usaha, RUPSLB digelar 25 September 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bipp-terbitkan-pmthmetd-10-saham-baru-dilusi-maksimal-9-09.jpg",
  "tags": [
   "BIPP",
   "PMTHMETD",
   "penambahan modal",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0319fed249_7253b8a6e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbdk-realisasikan-buyback-rp61-5-miliar-27-76-dari-target",
  "category": "Aksi Korporasi",
  "title": "CBDK Realisasikan Buyback Rp61,5 Miliar, [27,76%] dari Target",
  "deck": "Dalam periode 20 Mei-19 Agustus 2026, CBDK membeli kembali 17,1 juta saham senilai Rp61,57 miliar dengan harga rata-rata Rp3.601, baru mencapai 27,76% dari rencana buyback Rp250 miliar.",
  "date": "19 Agustus 2026",
  "image": "assets/img/cbdk-realisasikan-buyback-rp61-5-miliar-27-76-dari-target.jpg",
  "tags": [
   "CBDK",
   "buyback saham",
   "pasar modal",
   "emiten properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/fbc73f0b13_a60a0a96b6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "isat-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "ISAT Jawab Permintaan BEI Soal [Volatilitas] Transaksi Saham",
  "deck": "Menjawab surat permintaan penjelasan BEI atas volatilitas transaksi sahamnya, Indosat menyatakan tidak ada informasi material tersembunyi dan tidak ada aksi korporasi dalam tiga bulan ke depan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/isat-jawab-permintaan-bei-soal-volatilitas-transaksi-saham.jpg",
  "tags": [
   "ISAT",
   "Indosat",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/af2b77af4b_933f238ebd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trja-jelaskan-ke-bei-lonjakan-transaksi-saham-30-kali-lipat",
  "category": "Aksi Korporasi",
  "title": "TRJA Jelaskan ke BEI [Lonjakan] Transaksi Saham 30 Kali Lipat",
  "deck": "TRJA menyatakan tak ada informasi material di balik lonjakan volume transaksi 30 kali lipat dan kenaikan harga saham 8,11 persen dalam sehari.",
  "date": "19 Agustus 2026",
  "image": "assets/img/trja-jelaskan-ke-bei-lonjakan-transaksi-saham-30-kali-lipat.jpg",
  "tags": [
   "TRJA",
   "volatilitas saham",
   "BEI",
   "Samindo Resources"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9887e116f3_e4f45ec23a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-panggil-rupslb-bahas-perubahan-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "RANS Panggil RUPSLB, Bahas [Perubahan] Susunan Direksi",
  "deck": "RANS mengundang pemegang saham ke RUPSLB 10 September 2026 untuk menyetujui perubahan susunan Direksi, dengan rapat hybrid dan kehadiran fisik dibatasi 10 orang.",
  "date": "19 Agustus 2026",
  "image": "assets/img/rans-panggil-rupslb-bahas-perubahan-susunan-direksi.jpg",
  "imageV": "mszy2k1z",
  "tags": [
   "RANS",
   "RUPSLB",
   "Direksi",
   "Rans Entertainment"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c34701187_065c7d15a3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-kena-pangkas-peringkat-ke-idb-pefindo-soroti-gagal-bayar",
  "category": "Aksi Korporasi",
  "title": "ADHI Kena Pangkas Peringkat ke idB, PEFINDO Soroti [Gagal Bayar]",
  "deck": "PEFINDO menurunkan peringkat ADHI dan tiga obligasinya dari idBB ke idB dengan status CreditWatch negatif, menyusul risiko gagal bayar kupon jatuh tempo 24 Agustus 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/adhi-kena-pangkas-peringkat-ke-idb-pefindo-soroti-gagal-bayar.jpg",
  "imageV": "mt0048v7",
  "tags": [
   "ADHI",
   "peringkat obligasi",
   "PEFINDO",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/afc5329482_ee553e4011.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "byan-jelaskan-ke-bursa-soal-volatilitas-harga-sahamnya",
  "category": "Aksi Korporasi",
  "title": "BYAN Jelaskan ke Bursa soal [Volatilitas] Harga Sahamnya",
  "deck": "Bayan Resources menjawab permintaan BEI terkait pergerakan harga sahamnya yang tidak biasa, menyatakan tidak ada informasi material yang disembunyikan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d5b3ac14de_16768422c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-jadwalkan-rupslb-pada-25-september-2026",
  "category": "Aksi Korporasi",
  "title": "BIPP Jadwalkan [RUPSLB] pada 25 September 2026",
  "deck": "BIPP menjadwalkan RUPSLB pada 25 September 2026, dengan recording date 2 September, menyusul rencana penambahan modal tanpa hak memesan efek yang sudah diumumkan lebih dulu.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bipp-jadwalkan-rupslb-pada-25-september-2026.jpg",
  "tags": [
   "BIPP",
   "RUPSLB",
   "Bhuwanatala Indah Permai",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/06029f4d4c_6629ac1d9f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-terbitkan-868-juta-saham-baru-untuk-afiliasi-msn",
  "category": "Aksi Korporasi",
  "title": "HATM Terbitkan 868 Juta Saham Baru untuk Afiliasi [MSN]",
  "deck": "Perseroan berencana menerbitkan saham baru tanpa hak memesan efek terlebih dahulu senilai Rp320 miliar kepada PT Multi Sarana Nasional, pemegang saham yang terafiliasi dengan direksi HATM.",
  "date": "19 Agustus 2026",
  "image": "assets/img/hatm-terbitkan-868-juta-saham-baru-untuk-afiliasi-msn.jpg",
  "tags": [
   "HATM",
   "PMTHMETD",
   "penambahan modal",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7c4a93c170_831261bffb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "humi-direktur-utama-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "HUMI: Direktur Utama Ajukan [Pengunduran] Diri",
  "deck": "I Gusti Ngurah Askhara Danadiputra mundur dari kursi Direktur Utama HUMI, efektif setelah disahkan RUPSLB yang jadwalnya belum diumumkan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/humi-direktur-utama-ajukan-pengunduran-diri.jpg",
  "tags": [
   "HUMI",
   "direksi",
   "RUPSLB",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/aef620d48b_51eb97d8f6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mrei-ganti-direktur-anwar-cipto-syamsul-gantikan-trinita-situmeang",
  "category": "Aksi Korporasi",
  "title": "MREI Ganti [Direktur], Anwar Cipto Syamsul Gantikan Trinita Situmeang",
  "deck": "RUPSLB 14 Agustus 2026 mengangkat Anwar Cipto Syamsul sebagai direktur baru MREI menggantikan Trinita Situmeang, efektif setelah lolos fit and proper test OJK.",
  "date": "19 Agustus 2026",
  "image": "assets/img/mrei-ganti-direktur-anwar-cipto-syamsul-gantikan-trinita-situmeang.jpg",
  "imageV": "mszvs9y4",
  "tags": [
   "MREI",
   "direksi",
   "RUPSLB",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/27905cf970_6b826382b3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smcb-jadwalkan-rupslb-25-september-dps-tutup-2-september",
  "category": "Aksi Korporasi",
  "title": "SMCB Jadwalkan [RUPSLB] 25 September, DPS Tutup 2 September",
  "deck": "Solusi Bangun Indonesia akan menggelar RUPSLB pada 25 September 2026 di Jakarta Selatan, dengan pemegang saham yang berhak hadir dicatat per 2 September 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/smcb-jadwalkan-rupslb-25-september-dps-tutup-2-september.jpg",
  "imageV": "mszvsttu",
  "tags": [
   "SMCB",
   "RUPSLB",
   "Solusi Bangun Indonesia",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ce9b332418_a4dfa2956e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppre-kantongi-kontrak-baru-rp1-5-triliun-hingga-juni-2026",
  "category": "Aksi Korporasi",
  "title": "PPRE Kantongi Kontrak Baru [Rp1,5 Triliun] hingga Juni 2026",
  "deck": "Kontrak baru PPRE tembus Rp1,5 triliun hingga semester I 2026, pendapatan naik 35% menjadi Rp2,2 triliun, dan rugi berjalan turun 93,4% menjadi Rp88,6 miliar.",
  "date": "19 Agustus 2026",
  "image": "assets/img/ppre-kantongi-kontrak-baru-rp1-5-triliun-hingga-juni-2026.jpg",
  "imageV": "mszvtis0",
  "tags": [
   "PPRE",
   "PP Presisi",
   "kontrak baru",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/81f0f3d4ad_3286740f55.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbmd-direksi-beli-71-500-saham-lewat-remunerasi-variabel",
  "category": "Aksi Korporasi",
  "title": "BBMD: Direksi Beli 71.500 Saham lewat [Remunerasi Variabel]",
  "deck": "Hendra Halim, direksi Bank Mestika Dharma, menambah 71.500 saham senilai sekitar Rp142,9 juta lewat skema remunerasi variabel, hak suaranya naik jadi 0,0209 persen.",
  "date": "19 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBMD",
   "Bank Mestika Dharma",
   "kepemilikan saham",
   "remunerasi direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19082026-2807-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "beef-rampungkan-buyback-52-56-juta-saham-rp9-46-miliar",
  "category": "Aksi Korporasi",
  "title": "BEEF Rampungkan [Buyback]: 52,56 Juta Saham, Rp9,46 Miliar",
  "deck": "Estika Tata Tiara (BEEF) membeli kembali 52,56 juta saham senilai Rp9,46 miliar sepanjang 19 Mei-18 Agustus 2026, baru 15,8 persen dari pagu maksimal 333,33 juta saham.",
  "date": "19 Agustus 2026",
  "image": "assets/img/beef-rampungkan-buyback-52-56-juta-saham-rp9-46-miliar.jpg",
  "tags": [
   "BEEF",
   "buyback saham",
   "saham treasuri",
   "Estika Tata Tiara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e23e8146ba_de8727a358.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bltz-tutup-permanen-bioskop-cgv-studio-pekanbaru",
  "category": "Aksi Korporasi",
  "title": "BLTZ [tutup] permanen bioskop CGV Studio Pekanbaru",
  "deck": "Graha Layar Prima menutup permanen bioskop CGV Studio Pekanbaru menyusul keputusan pengelola Plaza Citra Pekanbaru, tanpa merinci dampak keuangannya.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bltz-tutup-permanen-bioskop-cgv-studio-pekanbaru.jpg",
  "imageV": "mszvu2lk",
  "tags": [
   "BLTZ",
   "CGV Cinemas",
   "Pekanbaru",
   "bioskop"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6078527a27_91cc7266f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-rencanakan-rights-issue-2-87-miliar-saham-baru",
  "category": "Aksi Korporasi",
  "title": "BMAS Rencanakan [Rights Issue] 2,87 Miliar Saham Baru",
  "deck": "Bank Kasikorn Indonesia (BMAS) mengoreksi jadwal rencana penambahan modal lewat HMETD IV, menerbitkan maksimal 2,87 miliar saham baru untuk modal kerja kredit, RUPSLB digelar 27 Agustus 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bmas-rencanakan-rights-issue-2-87-miliar-saham-baru.jpg",
  "imageV": "mszvuhco",
  "tags": [
   "BMAS",
   "rights issue",
   "HMETD",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6bd016d659_86451f3d7e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pipa-rencanakan-akuisisi-perusahaan-migas-lewat-cspa-agustus-2026",
  "category": "Aksi Korporasi",
  "title": "PIPA Rencanakan [Akuisisi] Perusahaan Migas Lewat CSPA Agustus 2026",
  "deck": "Oxala Energy International (dulu Multi Makmur Lemindo, kode PIPA) menjajaki akuisisi perusahaan pengolahan gas bumi bersama pengendali MCI, CSPA ditarget diteken Agustus 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/pipa-rencanakan-akuisisi-perusahaan-migas-lewat-cspa-agustus-2026.jpg",
  "imageV": "mszrdid1",
  "tags": [
   "PIPA",
   "akuisisi",
   "gas bumi",
   "CSPA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/58cec32eff_1e6edc1aae.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unic-panggil-rupslb-sesuaikan-kbli-2025-di-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "UNIC Panggil RUPSLB, [Sesuaikan] KBLI 2025 di Anggaran Dasar",
  "deck": "Unggul Indah Cahaya menggelar RUPSLB 10 September 2026 untuk menyesuaikan klasifikasi bidang usaha di anggaran dasar dengan KBLI 2025, bukan perubahan kegiatan usaha riil.",
  "date": "19 Agustus 2026",
  "image": "assets/img/unic-panggil-rupslb-sesuaikan-kbli-2025-di-anggaran-dasar.jpg",
  "imageV": "mszvv38k",
  "tags": [
   "UNIC",
   "RUPSLB",
   "KBLI",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f3d9b23dbb_dd5c8e1106.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "truk-manajemen-akui-lonjakan-saham-bukan-fundamental",
  "category": "Aksi Korporasi",
  "title": "TRUK: Manajemen Akui Lonjakan Saham Bukan [Fundamental]",
  "deck": "Public expose insidentil TRUK mengungkap pendapatan dan ekuitas menurun tiga tahun terakhir, sementara manajemen menyebut lonjakan sahamnya murni spekulasi pasar, bukan perbaikan kinerja.",
  "date": "19 Agustus 2026",
  "image": "assets/img/truk-manajemen-akui-lonjakan-saham-bukan-fundamental.jpg",
  "imageV": "mszre1os",
  "tags": [
   "TRUK",
   "public expose",
   "saham TRUK",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/10d18524e0_5d7533a396.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-siapkan-buyback-saham-hingga-rp150-miliar",
  "category": "Aksi Korporasi",
  "title": "PRDA Siapkan [Buyback] Saham hingga Rp150 Miliar",
  "deck": "Prodia menyiapkan dana hingga Rp150 miliar dari kas internal untuk membeli kembali sahamnya sendiri di bursa, mulai 20 Agustus hingga 19 November 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/prda-siapkan-buyback-saham-hingga-rp150-miliar.jpg",
  "imageV": "mszren2x",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/09344bdeed_2f6fc88d1d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-rinci-buyback-rp150-miliar-laba-per-saham-naik-ke-rp240",
  "category": "Aksi Korporasi",
  "title": "PRDA Rinci Buyback Rp150 Miliar, Laba per Saham [Naik] ke Rp240",
  "deck": "Prodia Widyahusada merinci rencana pembelian kembali saham hingga Rp150 miliar dari kas internal, tanpa perlu persetujuan RUPS, berlangsung 20 Agustus hingga 19 November 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/prda-rinci-buyback-rp150-miliar-laba-per-saham-naik-ke-rp240.jpg",
  "imageV": "mszrf91r",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/47b5e742e1_524756ba2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-kembali-jual-saham-restrukturisasi-grup",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Kembali Jual Saham, [Restrukturisasi] Grup",
  "deck": "Putrasakti Mandiri kembali melepas 1,17 juta saham KDTN senilai sekitar Rp428 juta pada 18 Agustus 2026, hak suaranya turun tipis dari 34,72% jadi 34,63%.",
  "date": "19 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "Puri Sentul Permai",
   "kepemilikan saham",
   "restrukturisasi grup"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19082026-9271-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bayan-resources-bantah-rumor-haji-isam-ambil-alih-byan",
  "category": "Pasar Modal",
  "title": "Bayan Resources [Bantah] Rumor Haji Isam Ambil Alih BYAN",
  "deck": "Manajemen BYAN menegaskan tidak mengetahui rencana Haji Isam mengambil alih 62,2 persen saham perseroan, di tengah lonjakan saham-saham terafiliasi Jhonlin Group.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bayan-resources-bantah-rumor-haji-isam-ambil-alih-byan.jpg",
  "imageV": "msznq5g3",
  "tags": [
   "Bayan Resources",
   "BYAN",
   "Haji Isam",
   "Jhonlin Group"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460995-bayan-resources-bantah-isu-haji-isam-bakal-ambil-alih-622-persen-saham-byan"
 },
 {
  "slug": "npgf-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "NPGF Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Menjawab permintaan BEI soal pergerakan tak wajar sahamnya, NPGF menyatakan tidak ada informasi material tersembunyi dan pemegang saham utama belum berencana mengubah kepemilikan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/npgf-bantah-ada-info-material-di-balik-volatilitas-sahamnya.jpg",
  "tags": [
   "NPGF",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/31c1badcaf_54ea5e47f8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-tertekan-0-65-persen-saham-bank-justru-menguat",
  "category": "Pasar Modal",
  "title": "IHSG [Tertekan] 0,65 Persen, Saham Bank Justru Menguat",
  "deck": "IHSG dibuka turun ke 6.408,18 pada Rabu pagi, sementara sejumlah saham bank di LQ45 justru menguat di tengah tekanan jual yang masih terasa.",
  "date": "19 Agustus 2026",
  "image": "assets/img/ihsg-tertekan-0-65-persen-saham-bank-justru-menguat.jpg",
  "imageV": "mszpk4li",
  "tags": [
   "IHSG",
   "Saham Bank",
   "LQ45",
   "BEI"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460987-ihsg-tertekan-065-persen-di-awal-perdagangan-saham-bank-mulai-menguat"
 },
 {
  "slug": "direksi-tapg-jual-550-000-saham-senilai-rp998-juta",
  "category": "Aksi Korporasi",
  "title": "Direksi TAPG [Jual] 550.000 Saham Senilai Rp998 Juta",
  "deck": "George Oetomo, Direksi Triputra Agro Persada (TAPG), melepas 550.000 saham secara tidak langsung pada 18 Agustus 2026 seharga Rp1.815 per lembar untuk tujuan divestasi.",
  "date": "19 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19082026-5987-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-jawab-bursa-tender-wajib-sinergi-dijadwal-agustus-september",
  "category": "Aksi Korporasi",
  "title": "DOOH Jawab Bursa: Tender Wajib [Sinergi] Dijadwal Agustus-September",
  "deck": "DOOH menjelaskan ke BEI bahwa pengendali baru SII akan menggelar tender wajib bagi pemegang saham publik akhir Agustus hingga akhir September 2026, tanpa rencana delisting.",
  "date": "19 Agustus 2026",
  "image": "assets/img/dooh-jawab-bursa-tender-wajib-sinergi-dijadwal-agustus-september.jpg",
  "imageV": "mszpl30z",
  "tags": [
   "DOOH",
   "Sinergi Internasional Investama",
   "Tender Wajib",
   "Pengambilalihan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c67d4d2226_0b4a654070.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "edge-tender-saham-diperpanjang-lagi-ke-22-september",
  "category": "Aksi Korporasi",
  "title": "EDGE: Tender Saham [Diperpanjang] Lagi ke 22 September",
  "deck": "Digital Edge (Hong Kong) Ltd memperpanjang untuk ketiga kalinya masa penawaran tender sukarela atas saham EDGE seharga Rp11.500 per lembar, hingga 22 September 2026, dengan pembayaran pada 2 Oktober 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/edge-tender-saham-diperpanjang-lagi-ke-22-september.jpg",
  "imageV": "mszplp2j",
  "tags": [
   "EDGE",
   "Indointernet",
   "tender offer",
   "Digital Edge Hong Kong"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6d0e21d368_9751050c13.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jelaskan-ke-bursa-akuisisi-6-anak-usaha-terafiliasi",
  "category": "Aksi Korporasi",
  "title": "BIKE Jelaskan ke Bursa Akuisisi 6 Anak Usaha [Terafiliasi]",
  "deck": "BIKE menjawab surat Bursa soal rencana akuisisi enam anak usaha yang didanai fasilitas Rp1 triliun dari pihak yang terafiliasi dengan pengendali Perseroan sendiri.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bike-jelaskan-ke-bursa-akuisisi-6-anak-usaha-terafiliasi.jpg",
  "imageV": "mszpma8d",
  "tags": [
   "BIKE",
   "akuisisi",
   "pihak terafiliasi",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/648dd7b63d_0cdc89f660.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rapbn-2027-bidik-pertumbuhan-ekonomi-6-persen",
  "category": "Makroekonomi",
  "title": "RAPBN 2027 Bidik Pertumbuhan Ekonomi [6 Persen]",
  "deck": "Pemerintah menargetkan ekonomi tumbuh 6 persen pada 2027 lewat RAPBN, dengan defisit anggaran ditekan ke 2,4 persen dari PDB serta dorongan investasi lewat Danantara.",
  "date": "19 Agustus 2026",
  "image": "assets/img/rapbn-2027-bidik-pertumbuhan-ekonomi-6-persen.jpg",
  "imageV": "mszk6ant",
  "tags": [
   "RAPBN 2027",
   "pertumbuhan ekonomi",
   "Danantara",
   "defisit anggaran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460975-wamenkeu-ungkap-strategi-prabowo-bidik-ekonomi-6-persen-di-rapbn-2027-target-tak-boleh-rendah"
 },
 {
  "slug": "nely-copot-direktur-eduard-halomoan-lewat-rupslb",
  "category": "Aksi Korporasi",
  "title": "NELY [Copot] Direktur Eduard Halomoan Lewat RUPSLB",
  "deck": "RUPSLB NELY menyetujui pemberhentian Direktur Eduard Halomoan setelah dinonaktifkan sementara oleh Dewan Komisaris, sementara susunan direksi dan komisaris lain tidak berubah.",
  "date": "19 Agustus 2026",
  "image": "assets/img/nely-copot-direktur-eduard-halomoan-lewat-rupslb.jpg",
  "imageV": "mszpmw8h",
  "tags": [
   "NELY",
   "Perubahan Pengurus",
   "RUPSLB",
   "Pelayaran Nelly Dwi Putri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/75dd2ddba2_1646df6af3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "crab-jadwalkan-rupst-dan-rupslb-pada-25-september-2026",
  "category": "Aksi Korporasi",
  "title": "CRAB Jadwalkan [RUPST] dan RUPSLB pada 25 September 2026",
  "deck": "CRAB menjadwalkan RUPST dan RUPSLB pada 25 September 2026 di Medan, dengan pemegang saham per 2 September 2026 yang berhak hadir dan tenggat usulan agenda 27 Agustus 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/crab-jadwalkan-rupst-dan-rupslb-pada-25-september-2026.jpg",
  "imageV": "mszpnagg",
  "tags": [
   "CRAB",
   "RUPS",
   "Toba Surimi Industries",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d05847f0ad_199a6c5178.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-rp50-000-ke-rp2-645-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] Rp50.000 ke Rp2.645.000/Gram",
  "deck": "Harga emas Antam turun Rp50.000 menjadi Rp2.645.000 per gram pada 19 Agustus 2026, harga buyback pun ikut merosot.",
  "date": "19 Agustus 2026",
  "image": "assets/img/harga-emas-antam-turun-rp50-000-ke-rp2-645-000-gram.jpg",
  "imageV": "mszk6bcv",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460969-harga-emas-antam-hari-ini-19-agustus-2026-terpantau-turun-rp50000-jadi-rp2645000-per-gram"
 },
 {
  "slug": "ptpp-panggil-rupsu-sukuk-iii-2023-restrukturisasi-lagi",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPSU Sukuk III 2023, [Restrukturisasi] Lagi",
  "deck": "PTPP mengundang pemegang Sukuk Mudharabah Berkelanjutan I Tahap III 2023 ke RUPSU 2 September 2026 untuk meminta persetujuan restrukturisasi demi penyehatan keuangan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/ptpp-panggil-rupsu-sukuk-iii-2023-restrukturisasi-lagi.jpg",
  "imageV": "mszpnwm2",
  "tags": [
   "PTPP",
   "restrukturisasi",
   "sukuk",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e3fe8cf07f_cb5fef811b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-panggil-rupsu-sukuk-2022-restrukturisasi-kelima",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPSU Sukuk 2022, [Restrukturisasi] Kelima",
  "deck": "PTPP mengundang pemegang Sukuk Mudharabah Berkelanjutan I Tahap II 2022 Seri B ke RUPSu 2 September 2026 untuk minta persetujuan restrukturisasi utang, panggilan restrukturisasi kelima dalam dua hari.",
  "date": "19 Agustus 2026",
  "image": "assets/img/ptpp-panggil-rupsu-sukuk-2022-restrukturisasi-kelima.jpg",
  "imageV": "mszpoiq1",
  "tags": [
   "PTPP",
   "restrukturisasi utang",
   "sukuk",
   "RUPSu"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5674c1d5de_c966fd0d36.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lmpi-jadwalkan-rupslb-25-september-di-sidoarjo",
  "category": "Aksi Korporasi",
  "title": "LMPI Jadwalkan RUPSLB [25 September] di Sidoarjo",
  "deck": "Langgeng Makmur Industri mengumumkan RUPSLB 25 September 2026, dengan pemegang saham per 2 September berhak hadir. Agenda rapat belum diungkap.",
  "date": "19 Agustus 2026",
  "image": "assets/img/lmpi-jadwalkan-rupslb-25-september-di-sidoarjo.jpg",
  "imageV": "mszpp6kn",
  "tags": [
   "LMPI",
   "RUPSLB",
   "Langgeng Makmur Industri",
   "Sidoarjo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a3af5403a4_2e09bbc2e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intp-direktur-anak-usaha-mss-diganti-alasan-restrukturisasi",
  "category": "Aksi Korporasi",
  "title": "INTP: Direktur Anak Usaha MSS Diganti, Alasan [Restrukturisasi]",
  "deck": "Indocement melaporkan pergantian satu direktur di anak usahanya, PT Mandiri Sejahtera Sentra, karena restrukturisasi organisasi, efektif 19 Agustus 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/intp-direktur-anak-usaha-mss-diganti-alasan-restrukturisasi.jpg",
  "imageV": "mszvvp73",
  "tags": [
   "INTP",
   "Indocement",
   "direksi",
   "entitas anak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4ca69155ab_87c47d1593.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "apex-kantongi-kontrak-pengeboran-phm-senilai-us-74-3-juta",
  "category": "Aksi Korporasi",
  "title": "APEX Kantongi Kontrak [Pengeboran] PHM Senilai US$74,3 Juta",
  "deck": "Apexindo Pratama Duta mendapat kontrak pengeboran laut dari Pertamina Hulu Mahakam di Delta Mahakam, Kalimantan Timur, senilai US$74,3 juta untuk masa kerja dua tahun pasti dan opsi setahun tambahan.",
  "date": "19 Agustus 2026",
  "image": "assets/img/apex-kantongi-kontrak-pengeboran-phm-senilai-us-74-3-juta.jpg",
  "imageV": "mszrfmju",
  "tags": [
   "APEX",
   "kontrak",
   "Pertamina Hulu Mahakam",
   "pengeboran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6079bb2669_e9a57a378b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-pangan-19-agustus-gula-rp19-050-telur-rp29-350-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 19 Agustus: Gula [Rp19.050], Telur Rp29.350/Kg",
  "deck": "Bank Indonesia melalui PIHPS merilis harga eceran nasional pangan pada 19 Agustus 2026, dari gula pasir Rp19.050 hingga telur ayam Rp29.350 per kilogram.",
  "date": "19 Agustus 2026",
  "image": "assets/img/harga-pangan-19-agustus-gula-rp19-050-telur-rp29-350-kg.jpg",
  "imageV": "mszh5qg3",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "cabai rawit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460958-harga-pangan-hari-ini-19-agustus-2026-gula-pasir-mulai-dari-rp19050-per-kilogram-hingga-telur-ayam-rp29350-per-kilogram"
 },
 {
  "slug": "ricuh-timah-di-babel-yusril-percepat-perpres-pertimahan",
  "category": "Industri",
  "title": "Ricuh Timah di Babel, Yusril [Percepat] Perpres Pertimahan",
  "deck": "Pemerintah mempercepat penyusunan Perpres Pertimahan usai kericuhan di Kantor PT Timah, Belitung Timur, akibat pembelian bijih timah rakyat yang tersendat.",
  "date": "19 Agustus 2026",
  "image": "assets/img/ricuh-timah-di-babel-yusril-percepat-perpres-pertimahan.jpg",
  "imageV": "mszajs3a",
  "tags": [
   "timah",
   "Bangka Belitung",
   "PT Timah",
   "Perpres Pertimahan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460943-menyusul-ricuh-pembelian-bijih-timah-rakyat-yusril-janjikan-pemerintah-percepat-penyusunan-perpres-pertimahan"
 },
 {
  "slug": "wika-restrukturisasi-obligasi-jatuh-tempo-mundur-setahun",
  "category": "Aksi Korporasi",
  "title": "WIKA [Restrukturisasi] Obligasi, Jatuh Tempo Mundur Setahun",
  "deck": "Pemegang obligasi dan sukuk WIKA menyetujui perpanjangan jatuh tempo beberapa seri surat utang hingga satu tahun serta penjadwalan ulang bunga, di tengah status Pemantauan Khusus emiten.",
  "date": "19 Agustus 2026",
  "image": "assets/img/wika-restrukturisasi-obligasi-jatuh-tempo-mundur-setahun.jpg",
  "imageV": "mszrg1qy",
  "tags": [
   "WIKA",
   "restrukturisasi obligasi",
   "obligasi korporasi",
   "BUMN karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6964055c02_aaf0c85abe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-lanjutkan-suspensi-saham-wika-usai-gagal-bayar-kupon",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] Saham WIKA usai Gagal Bayar Kupon",
  "deck": "Bursa melanjutkan suspensi saham WIKA di seluruh pasar setelah emiten menunda pembayaran bunga tiga seri obligasi dan bagi hasil tiga seri sukuk mudharabah yang jatuh tempo 18 Agustus 2026.",
  "date": "19 Agustus 2026",
  "image": "assets/img/bei-lanjutkan-suspensi-saham-wika-usai-gagal-bayar-kupon.jpg",
  "imageV": "mszrgie8",
  "tags": [
   "WIKA",
   "suspensi saham",
   "gagal bayar obligasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b1193232d9_99912d3150.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pusat-perbelanjaan-ri-beralih-ke-konsep-pengalaman",
  "category": "Bisnis",
  "title": "Pusat Perbelanjaan RI Beralih ke Konsep [Pengalaman]",
  "deck": "Pusat perbelanjaan di Indonesia bergeser dari sekadar tempat transaksi menjadi ruang pengalaman, seiring rebranding Star Maju Sentosa menjadi Joysparks Group.",
  "date": "18 Agustus 2026",
  "image": "assets/img/pusat-perbelanjaan-ri-beralih-ke-konsep-pengalaman.jpg",
  "imageV": "mszajsj3",
  "tags": [
   "ritel",
   "pusat perbelanjaan",
   "Joysparks Group",
   "CBRE"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460931-ritel-indonesia-hadapi-perubahan-besar-strategi-lama-mulai-ditinggalkan"
 },
 {
  "slug": "aesi-gelar-indosolar-2026-dorong-ekosistem-energi-surya",
  "category": "Energi",
  "title": "AESI Gelar Indosolar 2026, Dorong Ekosistem Energi [Surya]",
  "deck": "AESI menggelar Indosolar 2026 pada 19-20 Agustus di Jakarta untuk memperkuat ekosistem energi surya, bersamaan dengan Indonesia Sustainable Energy Week 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/aesi-gelar-indosolar-2026-dorong-ekosistem-energi-surya.jpg",
  "imageV": "mszajszx",
  "tags": [
   "Indosolar 2026",
   "AESI",
   "Energi Surya",
   "EBT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460926-indosolar-2026-digelar-ekosistem-energi-surya-indonesia-mau-terus-didorong-agar-semakin-kuat"
 },
 {
  "slug": "hdit-tegaskan-tak-ada-info-material-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "HDIT Tegaskan Tak Ada Info Material soal [Volatilitas] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta HDIT menjelaskan lonjakan volatilitas sahamnya. Perseroan menyatakan tidak ada informasi material tersembunyi maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "18 Agustus 2026",
  "image": "assets/img/hdit-tegaskan-tak-ada-info-material-soal-volatilitas-sahamnya.jpg",
  "imageV": "mszrgwbi",
  "tags": [
   "HDIT",
   "Hensel Davest Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/30bd4fe5a2_7240081a06.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pyfa-tunda-rights-issue-ii-rugi-usaha-susut-99-semester-i",
  "category": "Aksi Korporasi",
  "title": "PYFA tunda [rights issue] II, rugi usaha susut 99% semester I",
  "deck": "PYFA menunda pelaksanaan rights issue kedua karena kondisi pasar modal lemah, sembari melaporkan penjualan naik 17 persen dan rugi usaha nyaris impas pada semester I 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/pyfa-tunda-rights-issue-ii-rugi-usaha-susut-99-semester-i.jpg",
  "imageV": "mszvwar1",
  "tags": [
   "PYFA",
   "farmasi",
   "rights issue",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/69f2579c43_2274d94491.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-peduli-bangun-tiga-posko-logistik-di-ntt-pascagempa",
  "category": "BUMN",
  "title": "BRI Peduli [Bangun] Tiga Posko Logistik di NTT Pascagempa",
  "deck": "BRI mendirikan tiga posko logistik dan satu dapur umum di Manggarai Barat, Ngada, dan Nagekeo untuk mempercepat penyaluran bantuan bagi warga terdampak gempa Flores.",
  "date": "18 Agustus 2026",
  "image": "assets/img/bri-peduli-bangun-tiga-posko-logistik-di-ntt-pascagempa.jpg",
  "imageV": "msytotvn",
  "tags": [
   "BRI Peduli",
   "gempa Flores",
   "BUMN",
   "NTT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460884-bri-peduli-bangun-3-posko-logistik-dan-1-dapur-umum-di-ntt-direksi-bri-terjun-langsung-tinjau-lokasi-gempa"
 },
 {
  "slug": "pertamina-undi-25-motor-untuk-ojol-boom-sisakan-50-unit-lagi",
  "category": "BUMN",
  "title": "Pertamina Undi 25 Motor untuk Ojol, [BOOM] Sisakan 50 Unit Lagi",
  "deck": "Pertamina Patra Niaga mengundi 25 motor Honda Vario 160 untuk mitra ojol lewat Program BOOM Periode 2, bertepatan HUT ke-81 RI. Masih ada 50 unit motor lagi yang akan diundi.",
  "date": "18 Agustus 2026",
  "image": "assets/img/pertamina-undi-25-motor-untuk-ojol-boom-sisakan-50-unit-lagi.jpg",
  "imageV": "msytoujk",
  "tags": [
   "Pertamina Patra Niaga",
   "BOOM",
   "ojek online",
   "MyPertamina"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460880-semarak-hut-kemerdekaan-pertamina-patra-niaga-undi-25-motor-untuk-ojol-lewat-boom-periode-2-masih-ada-50-unit"
 },
 {
  "slug": "nick-direksi-beli-1-400-saham-senilai-rp2-juta",
  "category": "Aksi Korporasi",
  "title": "NICK: Direksi [Beli] 1.400 Saham Senilai Rp2 Juta",
  "deck": "Nicholas Santoso, direksi Charnic Capital, melaporkan pembelian tidak langsung 1.400 saham pada 14 Agustus 2026, namun porsinya kecil dan hak suara tidak berubah.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan saham",
   "insider"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-6979-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-kerajinan-papua-rambah-pasar-ekspor-lewat-bri-peduli",
  "category": "UMKM",
  "title": "UMKM Kerajinan Papua Rambah Pasar [Ekspor] Lewat BRI Peduli",
  "deck": "PT MJEthnic Craft Indonesia asal Jayapura tumbuh dari toko daring kerajinan Papua menjadi distributor produk UMKM Nusantara setelah mengikuti Pelatihan Ekspor BRI Peduli.",
  "date": "18 Agustus 2026",
  "image": "assets/img/umkm-kerajinan-papua-rambah-pasar-ekspor-lewat-bri-peduli.jpg",
  "imageV": "msypskwz",
  "tags": [
   "BRI Peduli",
   "UMKM Papua",
   "pelatihan ekspor",
   "pemberdayaan UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460859-berkat-pelatihan-ekspor-bri-peduli-pt-mjethnic-craft-indonesia-dari-jayapura-angkat-budaya-lokal-menembus-pasar-internasional"
 },
 {
  "slug": "giaa-jelaskan-ke-bursa-pemberhentian-sementara-direktur-niaga",
  "category": "Aksi Korporasi",
  "title": "GIAA Jelaskan ke Bursa Pemberhentian Sementara [Direktur Niaga]",
  "deck": "Garuda Indonesia menjawab permintaan penjelasan BEI soal pemberhentian sementara Direktur Niaga, termasuk aturan RUPS 90 hari dan siapa yang mengisi fungsi jabatan itu sementara ini.",
  "date": "18 Agustus 2026",
  "image": "assets/img/giaa-jelaskan-ke-bursa-pemberhentian-sementara-direktur-niaga.jpg",
  "tags": [
   "GIAA",
   "Garuda Indonesia",
   "Direktur Niaga",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7edd48d3a0_7335264dd9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irsx-rencanakan-rights-issue-hingga-12-39-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "IRSX Rencanakan [Rights Issue] hingga 12,39 Miliar Saham",
  "deck": "Folago Global Nusantara berencana menerbitkan hingga 12,39 miliar saham baru lewat HMETD, disertai waran, untuk mendanai ekspansi. RUPSLB digelar 24 September 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/irsx-rencanakan-rights-issue-hingga-12-39-miliar-saham.jpg",
  "tags": [
   "IRSX",
   "Folago Global Nusantara",
   "rights issue",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2aea432f5a_1ff86d59bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irsx-jadwalkan-rupslb-24-september-catat-tenggat-pentingnya",
  "category": "Aksi Korporasi",
  "title": "IRSX Jadwalkan RUPSLB 24 September, [Catat] Tenggat Pentingnya",
  "deck": "Folago Global Nusantara menjadwalkan RUPSLB pada 24 September 2026, dengan pencatatan pemegang saham 1 September dan batas usul agenda 26 Agustus 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/irsx-jadwalkan-rupslb-24-september-catat-tenggat-pentingnya.jpg",
  "tags": [
   "IRSX",
   "RUPSLB",
   "Folago Global Nusantara",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d0f4510359_458e01bac1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppro-kantongi-peringkat-idb-untuk-tiga-obligasi-rp375-4-miliar",
  "category": "Aksi Korporasi",
  "title": "PPRO Kantongi Peringkat [idB] untuk Tiga Obligasi Rp375,4 Miliar",
  "deck": "PEFINDO mempertahankan peringkat idB dengan outlook stabil untuk PT PP Properti Tbk dan tiga seri obligasinya senilai total Rp375,4 miliar, berlaku hingga 1 Agustus 2027.",
  "date": "18 Agustus 2026",
  "image": "assets/img/ppro-kantongi-peringkat-idb-untuk-tiga-obligasi-rp375-4-miliar.jpg",
  "tags": [
   "PPRO",
   "PEFINDO",
   "obligasi korporasi",
   "peringkat kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9a9925245f_4903cf2666.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "baja-masuk-daftar-pemantauan-khusus-bei-mulai-19-agustus",
  "category": "Aksi Korporasi",
  "title": "BAJA Masuk Daftar [Pemantauan Khusus] BEI Mulai 19 Agustus",
  "deck": "Bursa Efek Indonesia memasukkan saham Saranacentral Bajatama (BAJA) ke daftar Efek Dalam Pemantauan Khusus, efektif 19 Agustus 2026, terkait riwayat suspensi perdagangan.",
  "date": "18 Agustus 2026",
  "image": "assets/img/baja-masuk-daftar-pemantauan-khusus-bei-mulai-19-agustus.jpg",
  "tags": [
   "BAJA",
   "Pemantauan Khusus",
   "BEI",
   "Saranacentral Bajatama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bdf97c5c2a_1f5adc96c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-pemegang-saham-jual-2-5-juta-saham-suara-ke-8-92",
  "category": "Aksi Korporasi",
  "title": "TAMA: Pemegang Saham Jual [2,5 Juta] Saham, Suara ke 8,92%",
  "deck": "Pemegang saham TAMA, Verah Wahyudi S Wong, menjual 2,5 juta saham pada 13-14 Agustus 2026 seharga Rp276 dan Rp272 per saham, menurunkan hak suaranya dari 9,13% menjadi 8,92%.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "Lancartama Sejati",
   "kepemilikan saham",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-0721-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-tanggapi-permintaan-bei-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "VTNY Tanggapi Permintaan BEI soal [Volatilitas] Sahamnya",
  "deck": "Diminta penjelasan bursa atas gejolak transaksi sahamnya, Venteny Fortuna International menyatakan tidak mengetahui adanya informasi material yang memicunya.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a01fd2b7dd_ff42f94a29.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-modal-disetor-bertambah-usai-mesop-karyawan-dieksekusi",
  "category": "Aksi Korporasi",
  "title": "TOBA: Modal Disetor Bertambah usai [MESOP] Karyawan Dieksekusi",
  "deck": "TBS Energi Utama menambah modal ditempatkan dan disetor setelah program kepemilikan saham manajemen dan karyawan yang digelar 21 Mei 2026 resmi diakui pemerintah pada 18 Agustus 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "MESOP",
   "modal disetor",
   "TBS Energi Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4012c60dc8_7b184af081.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-862-ditekan-minyak-dan-utang-luar-negeri",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.862, Ditekan Minyak dan Utang Luar Negeri",
  "deck": "Rupiah ditutup melemah 64 poin ke Rp17.862 per dolar AS, tertekan kenaikan harga minyak dunia dan naiknya utang luar negeri Indonesia.",
  "date": "18 Agustus 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-862-ditekan-minyak-dan-utang-luar-negeri.jpg",
  "imageV": "msykxs62",
  "tags": [
   "rupiah",
   "dolar AS",
   "nilai tukar",
   "utang luar negeri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460823-rupiah-ditutup-melemah-rp17862-ditekan-lonjakan-harga-minyak-dan-utang-luar-negeri-indonesia"
 },
 {
  "slug": "avia-bukukan-laba-bersih-rp435-miliar-di-kuartal-ii-2026",
  "category": "Aksi Korporasi",
  "title": "AVIA Bukukan Laba Bersih [Rp435 Miliar] di Kuartal II 2026",
  "deck": "Penjualan AVIA naik 19,7 persen dan laba bersih melonjak 31,6 persen pada kuartal kedua 2026, ditopang dua kali kenaikan harga jual di tengah tekanan biaya bahan baku dan rupiah.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "earnings call",
   "kinerja keuangan",
   "industri cat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dfdcec109a_084f708dce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgka-direktur-jual-habis-100-saham-tidak-langsung",
  "category": "Aksi Korporasi",
  "title": "TGKA: Direktur Jual Habis 100 Saham [Tidak Langsung]",
  "deck": "Direktur Tigaraksa Satria, Ketut Hendra Juliawan, melepas seluruh 100 saham TGKA yang dimilikinya secara tidak langsung senilai sekitar Rp502.500.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGKA",
   "Tigaraksa Satria",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-3017-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-investama-tambah-saham-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Investama Tambah Saham [Kepemilikan]",
  "deck": "Tunggal Jaya Investama membeli 1,6 juta saham IMPC pada 13 Agustus 2026 senilai Rp1.434 per lembar, namun hak suaranya tetap 37,12 persen.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "pemegang saham",
   "Impack Pratama Industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-3549-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elsa-panggil-rupslb-9-september-bahas-perombakan-pengurus",
  "category": "Aksi Korporasi",
  "title": "ELSA Panggil RUPSLB 9 September, Bahas [Perombakan] Pengurus",
  "deck": "Pertamina Hulu Energi selaku pengendali dengan 51,103 persen saham meminta RUPSLB Elnusa membahas perubahan susunan direksi dan komisaris, digelar 9 September 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "RUPSLB",
   "Pertamina Hulu Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/655b815286_ad0bb794ba.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tafs-siapkan-rp223-5-miliar-untuk-lunasi-obligasi-oktober",
  "category": "Aksi Korporasi",
  "title": "TAFS Siapkan [Rp223,5 Miliar] untuk Lunasi Obligasi Oktober",
  "deck": "PT Toyota Astra Financial Service (TAFS) menyatakan dana pelunasan pokok obligasi senilai Rp223,565 miliar yang jatuh tempo 3 Oktober 2026 sudah siap dari kas internal perusahaan.",
  "date": "18 Agustus 2026",
  "image": "assets/img/tafs-siapkan-rp223-5-miliar-untuk-lunasi-obligasi-oktober.jpg",
  "imageV": "msyfzbsp",
  "tags": [
   "TAFS",
   "obligasi",
   "pasar modal",
   "pembiayaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4afa6aca9c_cfb8d42cb6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-panggil-rupo-ajukan-restrukturisasi-obligasi-iv",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPO, Ajukan [Restrukturisasi] Obligasi IV",
  "deck": "PTPP mengundang pemegang Obligasi Berkelanjutan IV Tahap I 2024 ke RUPO 1 September 2026 untuk menyetujui permohonan restrukturisasi demi penyehatan keuangan.",
  "date": "18 Agustus 2026",
  "image": "assets/img/ptpp-panggil-rupo-ajukan-restrukturisasi-obligasi-iv.jpg",
  "imageV": "msyfzu0w",
  "tags": [
   "PTPP",
   "restrukturisasi utang",
   "obligasi",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/288d20205e_f1ed3aca85.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-panggil-rups-pemegang-sukuk-untuk-restrukturisasi-utang",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPS Pemegang Sukuk untuk [Restrukturisasi] Utang",
  "deck": "PTPP mengundang pemegang Sukuk Mudharabah Seri B ke RUPSu 1 September 2026 untuk meminta persetujuan restrukturisasi utang demi penyehatan keuangan perseroan.",
  "date": "18 Agustus 2026",
  "image": "assets/img/ptpp-panggil-rups-pemegang-sukuk-untuk-restrukturisasi-utang.jpg",
  "imageV": "msyg0gof",
  "tags": [
   "PTPP",
   "sukuk",
   "restrukturisasi utang",
   "RUPSu"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b9af2e33be_9aa735ca5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptpp-panggil-rupo-obligasi-iii-ajukan-restrukturisasi-lagi",
  "category": "Aksi Korporasi",
  "title": "PTPP Panggil RUPO Obligasi III, Ajukan [Restrukturisasi] Lagi",
  "deck": "PTPP mengundang pemegang Obligasi Berkelanjutan III Tahap I 2021 Seri B ke RUPO 1 September 2026 untuk membahas permohonan restrukturisasi, instrumen utang ketiga yang direstrukturisasi hari ini.",
  "date": "18 Agustus 2026",
  "image": "assets/img/ptpp-panggil-rupo-obligasi-iii-ajukan-restrukturisasi-lagi.jpg",
  "imageV": "msyg16xc",
  "tags": [
   "PTPP",
   "obligasi",
   "restrukturisasi",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2d7edd2cd3_1edebfdbdd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-direktur-dan-komisaris-kompak-mengundurkan-diri",
  "category": "Aksi Korporasi",
  "title": "SANF: [Direktur] dan Komisaris Kompak Mengundurkan Diri",
  "deck": "SANF menerima surat pengunduran diri Direktur Handri Susanto dan Komisaris Arietta Adrianti pada 18 Agustus 2026, perusahaan menyebut tidak ada dampak ke operasional maupun keuangan.",
  "date": "18 Agustus 2026",
  "image": "assets/img/sanf-direktur-dan-komisaris-kompak-mengundurkan-diri.jpg",
  "imageV": "msyg1nhh",
  "tags": [
   "SANF",
   "direksi",
   "komisaris",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/06a0e52a59_f714c23c1a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbss-seluruh-direksi-mundur-imbas-ganti-pengendali",
  "category": "Aksi Korporasi",
  "title": "MBSS: Seluruh Direksi Mundur Imbas [Ganti Pengendali]",
  "deck": "Seluruh Direksi dan Komisaris MBSS mengundurkan diri serentak menyusul perubahan pengendali ke PT Wibowo Group Capital. RUPSLB penetapan pengurus baru digelar 17 September 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/mbss-seluruh-direksi-mundur-imbas-ganti-pengendali.jpg",
  "imageV": "msyg28jt",
  "tags": [
   "MBSS",
   "perubahan pengendali",
   "pergantian direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0698c36867_0e1fdd3787.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hgii-direksi-robin-sunyoto-tambah-375-000-saham",
  "category": "Aksi Korporasi",
  "title": "HGII: Direksi Robin Sunyoto [Tambah] 375.000 Saham",
  "deck": "Direksi HGII Robin Sunyoto membeli 375.000 saham secara bertahap pada 10-14 Agustus 2026, senilai sekitar Rp44,8 juta, menaikkan hak suaranya dari 23 persen menjadi 24 persen.",
  "date": "18 Agustus 2026",
  "image": "assets/img/hgii-direksi-robin-sunyoto-tambah-375-000-saham.jpg",
  "imageV": "msyg36al",
  "tags": [
   "HGII",
   "kepemilikan saham",
   "direksi",
   "Robin Sunyoto"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-5041-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hais-panggil-rupslb-usai-direktur-mundur",
  "category": "Aksi Korporasi",
  "title": "HAIS Panggil RUPSLB usai Direktur [Mundur]",
  "deck": "HAIS menggelar RUPSLB 9 September 2026 untuk menyetujui perubahan susunan direksi setelah Rahmad Pudjotomo mundur dari jabatan Direktur.",
  "date": "18 Agustus 2026",
  "image": "assets/img/hais-panggil-rupslb-usai-direktur-mundur.jpg",
  "imageV": "msyg3xh6",
  "tags": [
   "HAIS",
   "RUPSLB",
   "Direksi",
   "pelayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bbb935920d_98aac7ddfb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "utang-luar-negeri-ri-naik-4-4-persen-jadi-us-453-4-miliar",
  "category": "Makroekonomi",
  "title": "Utang Luar Negeri RI [Naik] 4,4 Persen Jadi US$453,4 Miliar",
  "deck": "Bank Indonesia mencatat utang luar negeri RI naik 4,4 persen secara tahunan jadi US$453,4 miliar pada triwulan II-2026, rasio terhadap PDB 30,6 persen.",
  "date": "18 Agustus 2026",
  "image": "assets/img/utang-luar-negeri-ri-naik-4-4-persen-jadi-us-453-4-miliar.jpg",
  "imageV": "msycsm24",
  "tags": [
   "utang luar negeri",
   "Bank Indonesia",
   "SBN",
   "SRBI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460712-utang-luar-negeri-indonesia-naik-44-persen-jadi-4534-miliar-dolar-as"
 },
 {
  "slug": "bbkp-direksi-kunardy-darma-lie-beli-980-000-saham",
  "category": "Aksi Korporasi",
  "title": "BBKP: [Direksi] Kunardy Darma Lie Beli 980.000 Saham",
  "deck": "Direksi BBKP, Kunardy Darma Lie, membeli 980.000 saham secara tidak langsung seharga Rp51 per saham pada 10 Juli 2026, menaikkan hak suaranya menjadi 0,0005%.",
  "date": "18 Agustus 2026",
  "image": "assets/img/bbkp-direksi-kunardy-darma-lie-beli-980-000-saham.jpg",
  "imageV": "msybrba5",
  "tags": [
   "BBKP",
   "kepemilikan saham",
   "direksi",
   "Bank KB Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-1634-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-jual-saham-restrukturisasi-grup",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Jual Saham, [Restrukturisasi] Grup",
  "deck": "Putrasakti Mandiri, pemegang saham dengan hak suara 34,86 persen di KDTN, melepas 1,63 juta saham senilai Rp376 per saham dalam rangka restrukturisasi kepemilikan di kelompok usaha.",
  "date": "18 Agustus 2026",
  "image": "assets/img/kdtn-putrasakti-mandiri-jual-saham-restrukturisasi-grup.jpg",
  "imageV": "msy7ocof",
  "tags": [
   "KDTN",
   "kepemilikan saham",
   "pemegang saham",
   "restrukturisasi grup usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-1660-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wgsh-rencanakan-terbitkan-surat-utang-rp20-miliar",
  "category": "Aksi Korporasi",
  "title": "WGSH Rencanakan Terbitkan [Surat Utang] Rp20 Miliar",
  "deck": "WGSH berencana menerbitkan surat utang senilai maksimal Rp20 miliar untuk modal kerja, dengan target imbal hasil proyek neto minimal 3 persen per bulan dan jaminan aset perusahaan.",
  "date": "18 Agustus 2026",
  "image": "assets/img/wgsh-rencanakan-terbitkan-surat-utang-rp20-miliar.jpg",
  "imageV": "msy7ourz",
  "tags": [
   "WGSH",
   "surat utang",
   "pendanaan korporasi",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/84fac78b11_3685d07643.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-komisaris-hasmoro-tambah-1-3-juta-saham-hermina",
  "category": "Aksi Korporasi",
  "title": "HEAL: Komisaris Hasmoro [Tambah] 1,3 Juta Saham Hermina",
  "deck": "Dewan Komisaris DR Hasmoro membeli 1.319.000 saham HEAL secara tidak langsung seharga Rp757 per saham, menaikkan hak suaranya dari 5,03% jadi 5,04%.",
  "date": "18 Agustus 2026",
  "image": "assets/img/heal-komisaris-hasmoro-tambah-1-3-juta-saham-hermina.jpg",
  "imageV": "msy7pc1d",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-4319-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-200-000-saham-rp102-juta",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 200.000 Saham Rp102 Juta",
  "deck": "Komisaris AKPI, Henry Liem, menjual 200.000 saham perseroan pada 14 Agustus 2026 seharga Rp510 per saham, mengurangi hak suaranya dari 1,8674% menjadi 1,8347%.",
  "date": "18 Agustus 2026",
  "image": "assets/img/akpi-komisaris-henry-liem-jual-200-000-saham-rp102-juta.jpg",
  "imageV": "msy7q0w2",
  "tags": [
   "AKPI",
   "Henry Liem",
   "kepemilikan saham",
   "dewan komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18082026-4555-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-ganti-ketua-unit-internal-audit-gantikan-daniel-karwur",
  "category": "Aksi Korporasi",
  "title": "BKSL Ganti [Ketua] Unit Internal Audit, Gantikan Daniel Karwur",
  "deck": "Sentul City Tbk (BKSL) menunjuk Djaka T.I. sebagai Ketua Unit Internal Audit baru menggantikan Daniel Karwur, efektif 18 Agustus 2026.",
  "date": "18 Agustus 2026",
  "image": "assets/img/bksl-ganti-ketua-unit-internal-audit-gantikan-daniel-karwur.jpg",
  "imageV": "msybrv2x",
  "tags": [
   "BKSL",
   "Sentul City",
   "Internal Audit",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c28956895b_de2653c73a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lmpi-jawab-permintaan-bursa-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "LMPI Jawab Permintaan Bursa Soal [Volatilitas] Sahamnya",
  "deck": "Menjawab surat resmi BEI soal pergerakan tak biasa sahamnya, Langgeng Makmur Industri menyatakan tidak mengetahui informasi material apa pun di balik volatilitas tersebut.",
  "date": "18 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LMPI",
   "Bursa Efek Indonesia",
   "Volatilitas Saham",
   "Keterbukaan Informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/267be7692d_8fce88d4c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-pangan-18-agustus-cabai-rawit-termahal-rp66-350-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 18 Agustus: Cabai Rawit [Termahal], Rp66.350/Kg",
  "deck": "PIHPS Bank Indonesia mencatat harga cabai, telur, daging, beras, gula, dan minyak goreng eceran nasional pada 18 Agustus 2026, dengan cabai rawit merah termahal di Rp66.350 per kilogram.",
  "date": "18 Agustus 2026",
  "image": "assets/img/harga-pangan-18-agustus-cabai-rawit-termahal-rp66-350-kg.jpg",
  "imageV": "msycsmze",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460690-harga-pangan-hari-ini-18-agustus-2026-telur-ayam-rp28200-per-gram-hingga-minyak-goreng-mulai-dari-rp20150-per-liter"
 },
 {
  "slug": "harga-pangan-18-agustus-telur-ayam-rp28-200-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 18 Agustus, Telur Ayam [Rp28.200] per Kg",
  "deck": "PIHPS Bank Indonesia mencatat harga eceran nasional 18 Agustus 2026, dari cabai rawit merah Rp66.350 per kilogram hingga minyak goreng curah Rp20.150 per liter.",
  "date": "18 Agustus 2026",
  "image": "assets/img/harga-pangan-18-agustus-telur-ayam-rp28-200-per-kg.jpg",
  "imageV": "mt004r8r",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "cabai"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460690-harga-pangan-hari-ini-18-agustus-2026-telur-ayam-rp28200-per-gram-hingga-minyak-goreng-mulai-dari-rp20150-per-liter"
 },
 {
  "slug": "utang-luar-negeri-ri-naik-tipis-ke-us-453-4-miliar",
  "category": "Makroekonomi",
  "title": "Utang Luar Negeri RI [Naik] Tipis ke US$453,4 Miliar",
  "deck": "Bank Indonesia mencatat utang luar negeri RI tumbuh 4,4 persen pada triwulan II 2026 menjadi US$453,4 miliar, ditopang aliran dana asing ke surat utang pemerintah dan bank sentral.",
  "date": "18 Agustus 2026",
  "image": "assets/img/utang-luar-negeri-ri-naik-tipis-ke-us-453-4-miliar.jpg",
  "imageV": "msy4hscs",
  "tags": [
   "utang luar negeri",
   "Bank Indonesia",
   "SBN",
   "SRBI"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2816126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "ihsg-naik-1-21-persen-ke-6-479-di-awal-sesi",
  "category": "Pasar Modal",
  "title": "IHSG [Naik] 1,21 Persen ke 6.479 di Awal Sesi",
  "deck": "IHSG menguat 1,21 persen ke 6.479,178 pada pukul 09.05 WIB, Selasa 18 Agustus 2026, diikuti penguatan LQ45, IDX30, dan IDX80.",
  "date": "18 Agustus 2026",
  "image": "assets/img/ihsg-naik-1-21-persen-ke-6-479-di-awal-sesi.jpg",
  "imageV": "msy7qjal",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "LQ45",
   "Saham"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460667-ihsg-hari-ini-naik-121-persen-ke-6479-investor-mulai-serbu-bursa"
 }
];
