// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "rupslb-mari-29-desember-dps-pemegang-saham-dicatat-4-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSLB MARI 29 Desember: [DPS] Pemegang Saham Dicatat 4 Desember",
  "deck": "PT Mahaka Radio Integra Tbk (MARI) menjadwalkan RUPSLB elektronik pada 29 Desember 2026, dengan pemegang saham berhak hadir dicatat per 4 Desember 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MARI",
   "RUPSLB",
   "Mahaka Radio Integra",
   "Rapat Umum Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/afea0a66f9_a112b372bc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-bfin-26-november-laba-bersih-9m26-naik-12-5",
  "category": "Aksi Korporasi",
  "title": "Public Expose BFIN 26 November: [Laba Bersih] 9M26 Naik 12,5%",
  "deck": "BFI Finance memaparkan materi public expose tahunan: laba bersih 9M26 naik 12,5 persen jadi Rp1,313 triliun, NPF membaik ke 1,33 persen.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BFIN",
   "Public Expose",
   "BFI Finance",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/173a40d8b4_9565aa78ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-bima-dijadwalkan-29-desember-agenda-diumumkan-7-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSLB BIMA Dijadwalkan 29 Desember: [Agenda] Diumumkan 7 Desember",
  "deck": "RUPSLB Primarindo (BIMA) digelar 29 Desember 2026, DPS dicatat 4 Desember, agenda resmi baru diumumkan 7 Desember 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIMA",
   "RUPSLB",
   "Primarindo Asia Infrastructure",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/23a728f1fd_59ad095588.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buyback-excl-rp1-triliun-pembelian-mulai-23-november-2026",
  "category": "Aksi Korporasi",
  "title": "Buyback EXCL Rp1 Triliun: [Pembelian] Mulai 23 November 2026",
  "deck": "XLSMART (EXCL) akan membeli kembali saham senilai maksimal Rp1 triliun mulai 23 November 2026 hingga 22 Februari 2027, tanpa perlu restu RUPS.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL",
   "buyback saham",
   "XLSMART",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/92b9aff368_db3fede04d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tapg-terima-dividen-interim-rp599-99-miliar-dari-ventura-ustp",
  "category": "Aksi Korporasi",
  "title": "TAPG Terima [Dividen Interim] Rp599,99 Miliar dari Ventura USTP",
  "deck": "TAPG melaporkan penerimaan dividen interim Rp599,99 miliar dari ventura bersamanya, USTP, yang 50 persen sahamnya dimiliki TAPG.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Transaksi Afiliasi",
   "Dividen Interim",
   "USTP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e166906bef_d30b4b19aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vktr-bantah-ikut-konsorsium-bidik-saham-weda-bay-eramet",
  "category": "Aksi Korporasi",
  "title": "VKTR [Bantah] Ikut Konsorsium Bidik Saham Weda Bay Eramet",
  "deck": "VKTR membantah keterlibatan dalam rencana konsorsium Bakrie dan Haji Isam membeli saham Weda Bay milik Eramet, menegaskan tak ada dampak material pada operasional maupun keuangan.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "Bursa Efek Indonesia",
   "Klarifikasi Media",
   "Weda Bay"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5417e7e6f7_3712095adb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dirut-pnm-raih-penghargaan-katalisator-umkm-ultra-mikro",
  "category": "UMKM",
  "title": "Dirut PNM Raih Penghargaan [Katalisator] UMKM Ultra Mikro",
  "deck": "Kindaris, Dirut PT PNM, dinobatkan Tokoh Katalisator Kemandirian Pengusaha Ultra Mikro di detikcom Awards 2026 atas program pemberdayaan Mekaar.",
  "date": "20 November 2026",
  "image": "assets/img/dirut-pnm-raih-penghargaan-katalisator-umkm-ultra-mikro.jpg",
  "imageV": "mwobc2i0",
  "tags": [
   "PNM",
   "Mekaar",
   "UMKM",
   "Ultra Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479345-dirut-pnm-jadi-sosok-katalisator-kemandirian-pengusaha-ultra-mikro"
 },
 {
  "slug": "akra-akuisisi-saham-apr-dari-bp-rp257-miliar-non-material",
  "category": "Aksi Korporasi",
  "title": "AKRA Akuisisi Saham APR dari BP Rp257 Miliar: [Non-Material]",
  "deck": "AKR Corporindo menjelaskan ke bursa bahwa pembelian sisa 49,9% saham APR dari BP senilai Rp257,4 miliar, yang menaikkan kepemilikannya jadi 100%, tidak memenuhi kriteria transaksi material.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKRA",
   "akuisisi",
   "APR",
   "BP Global Investments"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2ca952935a_4ecd2c6114.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smkm-koreksi-lbrpe-bondra-uji-pratama-ternyata-pegang-4-99",
  "category": "Aksi Korporasi",
  "title": "SMKM [Koreksi] LBRPE: Bondra Uji Pratama Ternyata Pegang 4,99%",
  "deck": "SMKM menjawab permintaan penjelasan BEI soal data pemegang saham, mengakui kekeliruan dan mengungkap pemegang 4,99% saham yang sebelumnya tidak tercatat.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMKM",
   "LBRPE",
   "pemegang saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b795dbe7e7_c9405a0da9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpu-adhi-17-november-digugat-dua-kreditur-ke-pn-jakpus",
  "category": "Aksi Korporasi",
  "title": "PKPU ADHI 17 November: [Digugat] Dua Kreditur ke PN Jakpus",
  "deck": "PT Atap Perkasa dan PT Satek Aire Indonesia mengajukan permohonan PKPU terhadap ADHI ke Pengadilan Niaga PN Jakarta Pusat, perkara terdaftar 17 November 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "PKPU",
   "Adhi Karya",
   "Pengadilan Niaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8141a1a2c1_4dff092c7c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-viva-17-november-direksi-komisaris-diangkat-lagi-5-tahun",
  "category": "Aksi Korporasi",
  "title": "RUPST VIVA 17 November: [Direksi-Komisaris] Diangkat Lagi 5 Tahun",
  "deck": "RUPST VIVA menyetujui laporan tahunan 2025 dan mengangkat kembali seluruh direksi serta komisaris untuk periode lima tahun berikutnya.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "RUPST",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6d92651a5f_417dcb8ba0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-inov-28-desember-divestasi-45-8-saham-urecel-ke-cip",
  "category": "Aksi Korporasi",
  "title": "RUPSLB INOV 28 Desember: [Divestasi] 45,8% Saham Urecel ke CIP",
  "deck": "INOV akan melepas 45,8% saham anak usahanya, PT Urecel Indonesia, ke CIP Capital Singapura senilai Rp258,16 miliar. RUPSLB persetujuan digelar 28 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INOV",
   "Transaksi Material",
   "Urecel Indonesia",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c537c346c8_0ebdc3e2d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pmthmetd-flmc-investor-futura-living-serap-78-1-juta-saham",
  "category": "Aksi Korporasi",
  "title": "PMTHMETD FLMC: Investor [Futura Living] Serap 78,1 Juta Saham",
  "deck": "FLMC menerbitkan 78.125.000 saham baru tanpa hak memesan efek terlebih dahulu kepada PT Futura Living Investama di Rp100 per saham untuk menambal ekuitas negatif Rp2,59 miliar.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "PMTHMETD",
   "RUPSLB",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f692e71c37_fbfcbce699.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-flmc-28-desember-jadwal-dps-3-desember-panggilan-4-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSLB FLMC 28 Desember: [Jadwal] DPS 3 Desember, Panggilan 4 Desember",
  "deck": "FLMC jadwalkan RUPSLB 28 Desember 2026 di Bandung; DPS 3 Desember, batas usul agenda pemegang saham 24 November.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "RUPSLB",
   "PMTHMETD",
   "jadwal RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f8fb48918f_decf44c43d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-bbca-rp35-per-saham-cair-16-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim BBCA Rp35 per Saham, [Cair] 16 Desember 2026",
  "deck": "BCA akan membagikan dividen interim kuartal IV 2026 sebesar Rp35 per saham, total Rp4,29 triliun, dibayar 16 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBCA",
   "dividen interim",
   "Bank Central Asia",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b5d4767f9c_391a07aa69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buyback-elsa-rp84-5-miliar-lanjutan-fase-ii-mulai-20-november",
  "category": "Aksi Korporasi",
  "title": "Buyback ELSA Rp84,5 Miliar: [Lanjutan] Fase II Mulai 20 November",
  "deck": "Elnusa mengalokasikan hingga Rp84,5 miliar untuk pembelian kembali saham fase II pada 20 November 2026 hingga 19 Februari 2027, memakai sisa dana program sebelumnya.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "buyback",
   "pembelian kembali saham",
   "Elnusa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/006ce46e72_cf90890ba9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-bawa-investasi-rp1-584-triliun-dari-apec",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo Bawa Investasi [Rp1.584 Triliun] dari APEC",
  "deck": "Presiden Prabowo Subianto akan menyaksikan penandatanganan investasi US$15 miliar di Shenzhen, menambah total potensi kerja sama ekonomi dari agenda APEC jadi sekitar Rp1.584 triliun.",
  "date": "19 November 2026",
  "image": "assets/img/presiden-prabowo-bawa-investasi-rp1-584-triliun-dari-apec.jpg",
  "imageV": "mwnlqpo5",
  "tags": [
   "APEC",
   "Investasi Asing",
   "Presiden Prabowo",
   "Shenzhen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479277-presiden-prabowo-hasilkan-kesepakatan-investasi-rp1584-triliun-dari-apec"
 },
 {
  "slug": "belanja-di-shopee-kini-bisa-jadi-garudamiles",
  "category": "Bisnis",
  "title": "Belanja di Shopee Kini Bisa Jadi [GarudaMiles]",
  "deck": "Shopee dan Garuda Indonesia meluncurkan program tukar poin belanja menjadi mil penerbangan, dengan kurs Rp10.000 belanja setara 1 Mil.",
  "date": "19 November 2026",
  "image": "assets/img/belanja-di-shopee-kini-bisa-jadi-garudamiles.jpg",
  "imageV": "mwnlqq1a",
  "tags": [
   "shopee",
   "garuda indonesia",
   "garudamiles",
   "loyalitas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479276-shopee-gandeng-garuda-indonesia-belanja-produk-favorit-bisa-dapat-garudamiles"
 },
 {
  "slug": "hgii-jawab-bei-dana-ipo-rp253-3-miliar-belum-terserap",
  "category": "Aksi Korporasi",
  "title": "HGII Jawab BEI: [Dana IPO] Rp253,3 Miliar Belum Terserap",
  "deck": "HGII menjelaskan ke BEI bahwa dana IPO Rp254,2 miliar baru terserap 0,35%, sementara dua pembangkitnya yang sudah beroperasi masih jauh dari target produksi kontrak.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HGII",
   "realisasi dana IPO",
   "energi terbarukan",
   "PLTM"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e829f09294_0fca829bb7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-inov-28-desember-dps-pemegang-saham-dicatat-3-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSLB INOV 28 Desember: [DPS] Pemegang Saham Dicatat 3 Desember",
  "deck": "Inocycle Technology Group (INOV) menjadwalkan RUPSLB pada 28 Desember 2026, dengan pemegang saham yang berhak hadir dicatat per 3 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INOV",
   "RUPSLB",
   "Inocycle Technology Group",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4d509c5935_6a086cd55e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-blue-24-november-laba-turun-5-pendapatan-naik-5-6",
  "category": "Aksi Korporasi",
  "title": "Public Expose BLUE 24 November: [Laba] Turun 5%, Pendapatan Naik 5,6%",
  "deck": "Public expose tahunan BLUE digelar 24 November 2026; laba periode berjalan Januari-September turun 5,02 persen meski pendapatan naik 5,63 persen.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLUE",
   "public expose",
   "kinerja keuangan",
   "Berkah Prima Perkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f598dc436e_1bc28a2bf9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-periksa-saksi-kasus-tender-revitalisasi-pasar-ciparay",
  "category": "Bisnis",
  "title": "KPPU Periksa Saksi Kasus [Tender] Revitalisasi Pasar Ciparay",
  "deck": "KPPU mendalami dasar hitungan kontribusi dan kelayakan investasi dalam sidang dugaan persekongkolan tender revitalisasi Pasar Desa Ciparay; sidang lanjutan digelar 23 November 2026.",
  "date": "19 November 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "KPPU",
   "Pasar Ciparay",
   "persekongkolan tender",
   "revitalisasi pasar"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-dalami-dasar-perhitungan-kontribusi-dan-kelayakan-investasi-revitalisasi-pasar-ciparay",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "kppu-awasi-penghapusan-syarat-beli-lpg-nonsubsidi-di-tegal",
  "category": "Energi",
  "title": "KPPU [Awasi] Penghapusan Syarat Beli LPG Nonsubsidi di Tegal",
  "deck": "KPPU memeriksa penerapan komitmen PT Hibarnas Jaya menghapus syarat beli LPG nonsubsidi bagi pembeli LPG 3 kg bersubsidi di 63 pangkalan Kabupaten Tegal.",
  "date": "19 November 2026",
  "image": "assets/img/tabung-lpg.jpg",
  "tags": [
   "KPPU",
   "LPG 3 Kg",
   "Tegal",
   "Persaingan Usaha"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-awasi-penghapusan-syarat-pembelian-lpg-nonsubsidi-bagi-penerima-lpg-3-kg-di-tegal",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "laba-arci-semester-i-2026-melonjak-134-jadi-us-81-5-juta",
  "category": "Aksi Korporasi",
  "title": "Laba ARCI Semester I 2026 [Melonjak] 134% jadi US$81,5 Juta",
  "deck": "Laba bersih ARCI naik 134% menjadi US$81,5 juta pada semester I 2026, didorong kenaikan pendapatan emas 67 persen dibanding tahun sebelumnya.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARCI",
   "laporan keuangan",
   "emas",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261119175115-65818-0/FinancialStatement-2026-II-ARCI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-pastikan-daya-beli-tumbuh-bukan-melemah",
  "category": "Makroekonomi",
  "title": "Pemerintah Pastikan Daya Beli [Tumbuh], Bukan Melemah",
  "deck": "Wamenko Perekonomian Dradjad Hari Wibowo menyebut konsumsi rumah tangga tumbuh di atas 5 persen, membantah anggapan daya beli masyarakat melemah, dalam forum ekonomi tvOne, Rabu (18/11).",
  "date": "19 November 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "daya beli",
   "konsumsi rumah tangga",
   "Program Magang Nasional",
   "Kemenko Perekonomian"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7234/jaga-momentum-pertumbuhan-wamenko-dradjad-tekankan-konsistensi-kebijakan-ekonomi-dan-penguatan-daya-beli",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "kemendag-jatuhkan-sanksi-ke-27-importir-usai-pengawasan-risiko",
  "category": "Bisnis",
  "title": "Kemendag Jatuhkan [Sanksi] ke 27 Importir usai Pengawasan Risiko",
  "deck": "Dari 169 pelaku usaha yang diperiksa khusus Kemendag pada Januari-Oktober 2026, 27 importir dikenai perintah penarikan dan pemusnahan barang, 18 lainnya diberi peringatan.",
  "date": "19 November 2026",
  "image": "assets/img/kemendag-jatuhkan-sanksi-ke-27-importir-usai-pengawasan-risiko.jpg",
  "imageV": "mwnfe7sh",
  "tags": [
   "impor",
   "Kemendag",
   "pengawasan risiko",
   "bea cukai"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-kepatuhan-importir-dan-lindungi-pasar-dalam-negeri-kemendag-perkuat-pengawasan-post-border-berbasis-risiko",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "komisi-ojol-turun-ke-8-persen-pakar-ingatkan-risiko-baru",
  "category": "Ketenagakerjaan",
  "title": "Komisi Ojol Turun ke [8 Persen], Pakar Ingatkan Risiko Baru",
  "deck": "Dosen Unair menilai pembatasan komisi aplikator ojol ke 8 persen justru berisiko menggerus pendapatan pengemudi karena subsidi promo konsumen ikut terpangkas.",
  "date": "19 November 2026",
  "image": "assets/img/komisi-ojol-turun-ke-8-persen-pakar-ingatkan-risiko-baru.jpg",
  "imageV": "mwnlqqgt",
  "tags": [
   "ojol",
   "komisi aplikator",
   "ojek online",
   "Universitas Airlangga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479266-pakar-komisi-8-persen-ojol-berpotensi-timbulkan-masalah-baru"
 },
 {
  "slug": "meja-rencana-right-issue-akuisisi-45-trimata-coal-rp1-11-triliun",
  "category": "Aksi Korporasi",
  "title": "MEJA Rencana [Right Issue] Akuisisi 45% Trimata Coal Rp1,11 Triliun",
  "deck": "MEJA memaparkan rencana rights issue untuk akuisisi 45% saham tambang batu bara Trimata Coal Perkasa senilai Rp1,11 triliun, RUPSLB dijadwalkan Februari 2027.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "rights issue",
   "akuisisi tambang batu bara",
   "Trimata Coal Perkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b4117e7a52_2f14228049.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "assa-teken-kredit-rp250-miliar-dari-bank-of-china-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "ASSA Teken Kredit Rp250 Miliar dari Bank of China [Modal Kerja]",
  "deck": "ASSA menandatangani perjanjian Term Loan III senilai Rp250 miliar dengan Bank of China Cabang Jakarta untuk modal kerja pembelian unit kendaraan sewa.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASSA",
   "kredit bank",
   "Bank of China",
   "modal kerja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fa72c6b4a8_eeee19a3ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-roti-15-desember-tarik-treasury-shares-ganti-direksi",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ROTI 15 Desember: [Tarik] Treasury Shares & Ganti Direksi",
  "deck": "ROTI akan gelar RUPSLB pada 15 Desember 2026 untuk menyetujui penarikan treasury shares lewat penurunan modal dan perubahan direksi, bersamaan laba kuartal III melonjak ke Rp51,3 miliar.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "RUPSLB",
   "Treasury Shares",
   "Nippon Indosari Corpindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e1fbe89506_5d41aeea6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-anak-usaha-bri-melonjak-43-5-ditopang-emas-dan-umi",
  "category": "Perbankan",
  "title": "Laba Anak Usaha BRI [Melonjak] 43,5%, Ditopang Emas dan UMi",
  "deck": "Laba perusahaan anak BRI naik 43,5% jadi Rp11,8 triliun hingga September 2026, didorong Holding Ultra Mikro dan bisnis emas Pegadaian.",
  "date": "19 November 2026",
  "image": "assets/img/laba-anak-usaha-bri-melonjak-43-5-ditopang-emas-dan-umi.jpg",
  "imageV": "mwnfe87o",
  "tags": [
   "BRI",
   "Holding Ultra Mikro",
   "Pegadaian",
   "laba perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479244-laba-anak-usaha-bri-melonjak-435-holding-umi-dan-bisnis-emas-jadi-penopang"
 },
 {
  "slug": "menteri-hukum-luncurkan-gi-tourism-di-dieng",
  "category": "UMKM",
  "title": "Menteri Hukum Luncurkan [GI Tourism] di Dieng",
  "deck": "Kementerian Hukum menggandeng produk indikasi geografis khas daerah dengan sektor wisata, dimulai dari kawasan Dieng, Wonosobo.",
  "date": "19 November 2026",
  "image": "assets/img/menteri-hukum-luncurkan-gi-tourism-di-dieng.jpg",
  "imageV": "mwnfe8mc",
  "tags": [
   "indikasi geografis",
   "GI Tourism",
   "Kementerian Hukum",
   "wisata Dieng"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479242-menteri-hukum-resmikan-gi-tourism-angkat-produk-khas-daerah-jadi-magnet-wisata"
 },
 {
  "slug": "link-kuartal-iii-2026-rugi-melebar-ke-rp1-3-triliun",
  "category": "Aksi Korporasi",
  "title": "LINK Kuartal III 2026: [Rugi] Melebar ke Rp1,3 Triliun",
  "deck": "Rugi bersih Link Net melebar jadi Rp1,3 triliun dalam sembilan bulan 2026, sementara ekuitas perusahaan susut hampir sepertiga dibanding akhir 2025.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LINK",
   "Link Net",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261119160617-65805-0/FinancialStatement-2026-III-LINK.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-ppro-pkpu-lancar-right-issue-belum-prioritas",
  "category": "Aksi Korporasi",
  "title": "Public Expose PPRO: [PKPU] Lancar, Right Issue Belum Prioritas",
  "deck": "PP Properti melaporkan kewajiban utang pascarestrukturisasi PKPU terbayar sesuai jadwal, sementara right issue atau private placement belum menjadi fokus perusahaan saat ini.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRO",
   "Public Expose",
   "PKPU",
   "PP Properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cbed6aa311_72e76f5fd6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-dan-jabar-teken-kesepakatan-awasi-persaingan-usaha",
  "category": "Bisnis",
  "title": "KPPU dan Jabar [Teken] Kesepakatan Awasi Persaingan Usaha",
  "deck": "KPPU dan Pemprov Jawa Barat menandatangani kerja sama pengawasan persaingan usaha dan kemitraan di tengah forum investasi WJIF 2026 di Bandung.",
  "date": "19 November 2026",
  "image": "assets/img/warung-makan.jpg",
  "tags": [],
  "sourceUrl": "https://kppu.go.id/berita/ketua-kppu-dan-gubernur-jawa-barat-perkuat-sinergi-persaingan-usaha-dukung-investasi-berkualitas",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "kokopit-kaltim-ekspor-perdana-ke-taiwan-rp138-juta",
  "category": "UMKM",
  "title": "Kokopit Kaltim [Ekspor] Perdana ke Taiwan, Rp138 Juta",
  "deck": "Koperasi produsen di Balikpapan mengirim kokopit, media tanam dari serabut kelapa, senilai Rp138 juta ke Taiwan, ekspor pertama berkat fasilitasi KDEI Taipei.",
  "date": "19 November 2026",
  "image": "assets/img/kokopit-kaltim-ekspor-perdana-ke-taiwan-rp138-juta.jpg",
  "imageV": "mwn9zd1s",
  "tags": [
   "ekspor",
   "kokopit",
   "KDEI Taipei",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kdei-taipei-fasilitasi-ekspor-perdana-media-tanam-kokopit-ke-taiwan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dividen-interim-jtpe-rp10-per-saham-cair-17-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim JTPE Rp10 per Saham, [Cair] 17 Desember",
  "deck": "JTPE akan membagikan dividen interim tunai Rp10 per saham, total Rp67,73 miliar, dengan pembayaran pada 17 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JTPE",
   "dividen interim",
   "dividen tunai",
   "Jasuindo Tiga Perkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5ee4c0b6fd_94d11c279c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arii-jawab-bei-pmthmetd-rp75-m-untuk-jalan-tambang-mmj",
  "category": "Aksi Korporasi",
  "title": "ARII Jawab BEI: [PMTHMETD] Rp75 M untuk Jalan Tambang MMJ",
  "deck": "Atlas Resources (ARII) merinci ke BEI bahwa dana PMTHMETD 375 juta saham akan dipakai membangun jalan angkut batu bara 52 km milik anak usahanya, tapi banyak detail investasi masih belum final.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARII",
   "PMTHMETD",
   "RUPSLB",
   "Musi Mitra Jaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/97a0212d12_81be2897dd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-bmhs-24-november-laba-bersih-9m26-turun-95",
  "category": "Aksi Korporasi",
  "title": "Public Expose BMHS 24 November: [Laba] Bersih 9M26 Turun 95%",
  "deck": "BMHS gelar public expose tahunan 24 November 2026: laba bersih 9M26 ambrol 95 persen meski ekspansi rumah sakit terus berjalan.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMHS",
   "Bundamedik",
   "Public Expose",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5ba6893f23_4e3343c5be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fifa-dana-obligasi-orange-i-rp187-23-miliar-terealisasi-100",
  "category": "Aksi Korporasi",
  "title": "FIFA: Dana Obligasi Orange I Rp187,23 Miliar [Terealisasi] 100%",
  "deck": "PT Federal International Finance (FIFA) melaporkan seluruh dana Rp187,23 miliar dari Obligasi Orange I Tahap I 2026 telah terpakai untuk modal kerja pembiayaan, tanpa sisa dana.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FIFA",
   "obligasi",
   "penggunaan dana",
   "FIF Group"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/aa8f830e9b_996bc05285.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "msie-koreksi-free-float-ke-bursa-ungkap-afiliasi-pengendali",
  "category": "Aksi Korporasi",
  "title": "MSIE Koreksi [Free Float] ke Bursa, Ungkap Afiliasi Pengendali",
  "deck": "MSIE mengakui salah hitung free float dan membenarkan saham Komisaris dari 1.252.300 jadi 1.250.000, menyusul permintaan penjelasan Bursa atas LBRPE September-Oktober 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSIE",
   "Free Float",
   "Pemegang Saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/175a07a740_a81a43991a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-akuisisi-3-anak-usaha-rp0-minta-bursa-buka-suspensi",
  "category": "Aksi Korporasi",
  "title": "BIKE: [Akuisisi] 3 Anak Usaha Rp0, Minta Bursa Buka Suspensi",
  "deck": "BIKE mengoreksi surat ke bursa, merinci akuisisi tiga anak usaha senilai Rp0 dan berharap suspensi sahamnya dibuka.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "suspensi saham",
   "entitas anak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/551c5bdcc1_03d77313d0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-medp-17-november-kuorum-tak-terpenuhi-rupo-kedua-menyusul",
  "category": "Aksi Korporasi",
  "title": "RUPO MEDP 17 November: Kuorum Tak Terpenuhi, [RUPO Kedua] Menyusul",
  "deck": "RUPO pertama obligasi MEDP pada 17 November gagal capai kuorum sehingga keputusan soal pengalihan dana ditunda; RUPO kedua wajib digelar dalam 14-21 hari kalender.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "RUPO",
   "obligasi",
   "Medco Power"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/11c834f72f_947251f88f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ledakan-kilang-ppsdm-cepu-satu-pekerja-tewas",
  "category": "Energi",
  "title": "Ledakan Kilang PPSDM Cepu, Satu Pekerja [Tewas]",
  "deck": "Ledakan di Tangki T-143 PPSDM Migas Cepu saat kilang berhenti operasi untuk perawatan menewaskan satu pekerja pihak ketiga; api sudah dipadamkan dan investigasi penyebabnya berjalan.",
  "date": "19 November 2026",
  "image": "assets/img/ledakan-kilang-ppsdm-cepu-satu-pekerja-tewas.jpg",
  "imageV": "mwn1b6qa",
  "tags": [
   "ESDM",
   "Kilang Cepu",
   "Keselamatan Kerja",
   "Migas"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/insiden-kilang-ppsdm-migas-cepu-kementerian-esdm-pastikan-situasi-terkendali-dan-investigasi-penyebab-ledakan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "ri-china-sepakati-kerja-sama-batu-bara-ke-etanol-us-1-8-miliar",
  "category": "Energi",
  "title": "RI-China Sepakati Kerja Sama Batu Bara ke Etanol [US$1,8 Miliar]",
  "deck": "Indonesia dan Tiongkok sepakati MoU coal-to-ethanol senilai US$1,8 miliar, bagian dari paket kerja sama US$71,8 miliar yang disaksikan Presiden Prabowo di Shenzhen.",
  "date": "19 November 2026",
  "image": "assets/img/ri-china-sepakati-kerja-sama-batu-bara-ke-etanol-us-1-8-miliar.jpg",
  "imageV": "mwn1b8wr",
  "tags": [
   "hilirisasi batu bara",
   "coal-to-ethanol",
   "Indonesia-Tiongkok",
   "Pertamina"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/disaksikan-presiden-prabowo-kerja-sama-coal-to-ethanol-usd18-miliar-dorong-hilirisasi-batu-bara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "rupslb-pola-28-desember-diminta-pemegang-saham-pengendali-72-61",
  "category": "Aksi Korporasi",
  "title": "RUPSLB POLA 28 Desember: Diminta Pemegang Saham Pengendali [72,61%]",
  "deck": "Pool Advista Finance (POLA) akan menggelar RUPSLB pada 28 Desember 2026 atas permintaan pemegang saham pengendali yang menguasai 72,61% hak suara.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POLA",
   "RUPSLB",
   "Pool Advista Finance",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/56cd5bdc49_21a7363689.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-trio-28-desember-dps-pemegang-saham-per-3-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSLB TRIO 28 Desember: [DPS] Pemegang Saham per 3 Desember",
  "deck": "Trikomsel Oke (TRIO) menjadwalkan RUPSLB pada Senin, 28 Desember 2026. Pemegang saham yang berhak hadir ditentukan dari daftar per 3 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIO",
   "RUPSLB",
   "Trikomsel Oke",
   "Pemegang Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9e1fd90915_7d23043d2f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-psgo-rp6-per-saham-cair-18-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim PSGO Rp6 per Saham, [Cair] 18 Desember 2026",
  "deck": "PSGO membagikan dividen tunai interim tahun buku 2026 senilai Rp113,1 miliar atau Rp6 per saham, dibayarkan 18 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSGO",
   "dividen interim",
   "Palma Serasih",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bb4522579a_24c051d5ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-zata-rugi-rp77-8-m-usai-divestasi-aset-tekan-utang",
  "category": "Aksi Korporasi",
  "title": "Public Expose ZATA: Rugi Rp77,8 M Usai [Divestasi] Aset Tekan Utang",
  "deck": "Materi Public Expose tahunan ZATA menunjukkan rugi bersih Rp77,8 miliar akibat rugi pelepasan aset non-produktif Rp78,3 miliar untuk melunasi utang ke Bank OCBC.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZATA",
   "Public Expose",
   "divestasi aset",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c0be81de52_a3d9c1c0fb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-komisaris-beli-102-900-saham-hak-suara-jadi-0-252",
  "category": "Aksi Korporasi",
  "title": "PSSI: Komisaris [Beli] 102.900 Saham, Hak Suara Jadi 0,252%",
  "deck": "Komisaris PSSI, Iriawan Ibarat, membeli 102.900 saham secara tidak langsung pada 11-12 November 2026, hak suaranya naik tipis menjadi 0,252%.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "IMC Pelita Logistik",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19112026-7752-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgik-perseroan-jual-400-2-juta-saham-treasury-suara-ke-0",
  "category": "Aksi Korporasi",
  "title": "DGIK: Global Dinamika Kencana Tambah 400,2 Juta Saham, Suara ke 75,6%",
  "deck": "Global Dinamika Kencana, pemegang saham mayoritas DGIK, membeli seluruh 400,2 juta saham treasuri yang dilepas DGIK pada 19 November 2026, hak suaranya naik dari 68,30% jadi 75,60%.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGIK",
   "saham treasuri",
   "kepemilikan saham",
   "Global Dinamika Kencana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-19112026-2538-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mfmi-imhk-alihkan-99-35-saham-ke-im-asia-restrukturisasi",
  "category": "Aksi Korporasi",
  "title": "MFMI: IMHK Alihkan 99,35% Saham ke IM Asia [Restrukturisasi]",
  "deck": "IMHK mengalihkan 752,6 juta saham MFMI (99,35%) ke Iron Mountain Asia Pte Ltd lewat pasar negosiasi BEI pada 18 November 2026, restrukturisasi internal tanpa mengubah pengendali.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MFMI",
   "Iron Mountain",
   "pemegang saham",
   "restrukturisasi internal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/718f44f88c_eeadf63a2a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mina-jelaskan-ke-bei-dana-rights-issue-baru-10-terealisasi",
  "category": "Aksi Korporasi",
  "title": "MINA Jelaskan ke BEI: Dana Rights Issue Baru [10%] Terealisasi",
  "deck": "MINA menjawab permintaan penjelasan BEI: baru Rp16,99 miliar atau 10% dana rights issue Juli 2025 terpakai, sisanya mengendap di deposito dan giro bank.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINA",
   "rights issue",
   "HMETD",
   "Mertasari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/890fd201dd_ef0f00d7ca.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-jerman-bahas-investasi-ieu-cepa-diincar-2027",
  "category": "Global",
  "title": "Indonesia-Jerman Bahas Investasi, IEU-CEPA Diincar [2027]",
  "deck": "Wakil Menteri Koordinator Perekonomian bertemu pejabat Jerman, membahas investasi semikonduktor-AI dan target implementasi IEU-CEPA mulai 2027.",
  "date": "18 November 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "IEU-CEPA",
   "Jerman",
   "Investasi",
   "EUDR"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7233/perkuat-kemitraan-ekonomi-dengan-jerman-indonesia-dorong-peningkatan-perdagangan-dan-investasi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "hadapi-musim-hujan-jasa-marga-perkuat-kesiagaan-tol",
  "category": "BUMN",
  "title": "Hadapi Musim Hujan, Jasa Marga [Perkuat] Kesiagaan Tol",
  "deck": "PT Jasa Marga menyiagakan ratusan tim dan unit pompa air di jalan tol menjelang musim hujan 2026-2027.",
  "date": "18 November 2026",
  "image": "assets/img/hadapi-musim-hujan-jasa-marga-perkuat-kesiagaan-tol.jpg",
  "imageV": "mwmhycpl",
  "tags": [
   "jasa marga",
   "musim hujan",
   "jalan tol",
   "bumn"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479128-hadapi-musim-hujan-jasa-marga-perkuat-kesiapan-operasional-jalan-tol"
 },
 {
  "slug": "pegadaian-ajak-warga-bogor-tanam-pohon-di-hulu-ciliwung",
  "category": "BUMN",
  "title": "Pegadaian Ajak Warga Bogor [Tanam] Pohon di Hulu Ciliwung",
  "deck": "Pegadaian mengajak warga Cisarua, Bogor, menanam pohon dan menebar benih ikan di kawasan hulu Sungai Ciliwung untuk menjaga ketersediaan air bagi wilayah Jabodetabek.",
  "date": "18 November 2026",
  "image": "assets/img/pegadaian-ajak-warga-bogor-tanam-pohon-di-hulu-ciliwung.jpg",
  "imageV": "mwmcq6xm",
  "tags": [
   "pegadaian",
   "lingkungan",
   "ciliwung",
   "bogor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479127-jaga-hulu-ciliwung-pegadaian-ajak-warga-bogor-tanam-pohon-dan-tebar-benih"
 },
 {
  "slug": "pertamina-perkuat-stok-bbm-lpg-jelang-nataru",
  "category": "Energi",
  "title": "Pertamina Perkuat Stok BBM-LPG Jelang [Nataru]",
  "deck": "Pertamina Patra Niaga menaikkan produksi dan impor BBM serta menggandakan armada kapal demi mengamankan stok BBM dan LPG menjelang libur Natal dan Tahun Baru.",
  "date": "18 November 2026",
  "image": "assets/img/pertamina-perkuat-stok-bbm-lpg-jelang-nataru.jpg",
  "imageV": "mwmcq7ef",
  "tags": [
   "pertamina",
   "bbm",
   "lpg",
   "energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479123-optimalisasi-kilang-hingga-armada-strategi-pertamina-amankan-stok-bbm-dan-lpg"
 },
 {
  "slug": "denda-ojk-asli-rp2-7-miliar-lunas-dibayar-sebelum-tenggat",
  "category": "Aksi Korporasi",
  "title": "Denda OJK ASLI Rp2,7 Miliar: [Lunas] Dibayar Sebelum Tenggat",
  "deck": "ASLI membayar lunas denda OJK Rp2,7 miliar atas laporan keuangan yang dinilai tidak andal, plus denda tanggung renteng tiga direksi total Rp645 juta.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASLI",
   "OJK",
   "Sanksi Denda",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f1d3f81e4a_edbae83da0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menn-utang-melonjak-ke-rp19-74-miliar-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "MENN: [Utang] Melonjak ke Rp19,74 Miliar di Semester I 2026",
  "deck": "Laporan keuangan interim MENN mencatat utang usaha baru Rp19,74 miliar untuk membiayai ekspansi bisnis, meski penjualan inti justru turun.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "laporan keuangan",
   "utang usaha",
   "ekspansi bisnis"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261118214800-65819-0/FinancialStatement-2026-II-MENN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-terima-dokumen-awal-proyek-karbon-biru-lombok-jawa",
  "category": "Industri",
  "title": "KKP Terima Dokumen Awal Proyek Karbon [Biru] Lombok-Jawa",
  "deck": "KKP menandatangani pernyataan bersama dengan dua perusahaan untuk menerima dokumen awal usulan proyek karbon biru di Lombok Timur dan Jawa, bukan persetujuan proyek.",
  "date": "18 November 2026",
  "image": "assets/img/kkp-terima-dokumen-awal-proyek-karbon-biru-lombok-jawa.jpg",
  "imageV": "mwm75r52",
  "tags": [
   "karbon biru",
   "KKP",
   "COP31",
   "mangrove"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-teken-pernyataan-bersama-pengembangan-karbon-biru-di-cop31-x2PJ.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "rupslb-arii-20-november-pmthmetd-375-juta-saham-diajukan",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ARII 20 November: [PMTHMETD] 375 Juta Saham Diajukan",
  "deck": "ARII akan menerbitkan hingga 375 juta saham baru atau 10 persen dari modal disetor untuk mendanai jalan angkut batu bara anak usahanya, RUPSLB digelar 20 November 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARII",
   "PMTHMETD",
   "RUPSLB",
   "Bank Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a146b1215a_7e8bd1042e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oils-jelaskan-bei-anak-usaha-ignp-afiliasi-telat-lapor-1-hari",
  "category": "Aksi Korporasi",
  "title": "OILS Jelaskan BEI: Anak Usaha IGNP [Afiliasi], Telat Lapor 1 Hari",
  "deck": "OILS menjelaskan ke BEI bahwa pendirian anak usaha IGNP bersama tiga direksi, yang juga anak Komisaris Utama Sulastri, adalah transaksi afiliasi; pelaporannya telat karena menunggu SK Kemenkumham.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OILS",
   "transaksi afiliasi",
   "anak usaha",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/953d0fefe9_4c6d5f2608.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "medc-corporate-guarantee-atas-surat-utang-us-300-juta",
  "category": "Aksi Korporasi",
  "title": "MEDC: [Corporate Guarantee] atas Surat Utang US$300 Juta",
  "deck": "Medco dan tujuh anak usahanya di Indonesia menjamin surat utang senior US$300 juta berbunga 8,875% yang diterbitkan anak usaha di British Virgin Islands, jatuh tempo 2032.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "obligasi",
   "corporate guarantee",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/dc9806081a_dc31a3e113.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smsm-tanggapan-lanjutan-ke-bei-piutang-rp652-71-m-tertagih-oktober",
  "category": "Aksi Korporasi",
  "title": "SMSM Tanggapan Lanjutan ke BEI: [Piutang] Rp652,71 M Tertagih Oktober",
  "deck": "SMSM menyampaikan tanggapan tambahan ke BEI soal laporan keuangan kuartal III 2026, mengungkapkan Rp652,71 miliar atau 49,2 persen piutang usaha tertagih sepanjang Oktober.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "Selamat Sempurna",
   "piutang usaha",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cbdeed05ad_cbb280d8c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "taspen-gelar-lomba-jurnalistik-perdana-320-peserta-ikut",
  "category": "BUMN",
  "title": "Taspen Gelar Lomba Jurnalistik [Perdana], 320 Peserta Ikut",
  "deck": "PT Taspen menggelar Anugerah Jurnalistik Taspen 2026, kompetisi pertama yang diikuti 320 peserta jurnalis, ASN, dan masyarakat umum untuk memperluas literasi perlindungan sosial.",
  "date": "18 November 2026",
  "image": "assets/img/taspen-gelar-lomba-jurnalistik-perdana-320-peserta-ikut.jpg",
  "imageV": "mwm75rjf",
  "tags": [
   "taspen",
   "asn",
   "jurnalistik",
   "bumn"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479095-diikuti-320-peserta-anugerah-jurnalistik-taspen-perkuat-literasi-sosial-asn"
 },
 {
  "slug": "pkpu-ades-sidang-perdana-digelar-klaim-rp3-6-miliar",
  "category": "Aksi Korporasi",
  "title": "PKPU ADES: [Sidang Perdana] Digelar, Klaim Rp3,6 Miliar",
  "deck": "ADES menjalani sidang perdana PKPU di Pengadilan Niaga Jakarta Pusat, Rabu (18/11), atas klaim Rp3,6 miliar dari kontraktor PT Megaland Infra Perkasa yang masih disengketakan.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "PKPU",
   "sengketa hukum",
   "kontraktor"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/75c7123f8d_6e00779c7f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-direksi-arini-kasmira-tambah-40-000-saham-hak-suara-tetap-0",
  "category": "Aksi Korporasi",
  "title": "ANTM: Direksi Arini Kasmira [Tambah] 40.000 Saham, Hak Suara Tetap 0%",
  "deck": "Direksi ANTM Arini Kasmira membeli 40.000 saham tambahan pada 16 November 2026, kepemilikannya naik jadi 284.000 lembar.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "Aneka Tambang",
   "laporan kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-6001-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mknt-jelaskan-ke-bei-private-placement-tambah-1-02-triliun-saham",
  "category": "Aksi Korporasi",
  "title": "MKNT Jelaskan ke BEI: [Private Placement] Tambah 1,02 Triliun Saham",
  "deck": "MKNT merinci ke BEI: konversi utang dan setoran tunai menambah 1,02 triliun saham baru, menyusutkan porsi pemegang saham lama hingga sekitar 0,5 persen.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "PMTHMETD",
   "dilusi saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7c481da928_aba2a1cb4a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpu-ades-rp3-6-miliar-perseroan-bentuk-pencadangan-penuh",
  "category": "Aksi Korporasi",
  "title": "PKPU ADES Rp3,6 Miliar: Perseroan Bentuk [Pencadangan] Penuh",
  "deck": "ADES membentuk pencadangan penuh Rp3,63 miliar menanggapi permintaan penjelasan BEI atas gugatan PKPU dari kontraktor PT Megaland Infra Perkasa.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "PKPU",
   "sengketa hukum",
   "pencadangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c0e419aa01_c9e57a6efb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "stock-split-rdtx-1-20-saham-baru-diperdagangkan-24-november",
  "category": "Aksi Korporasi",
  "title": "Stock Split RDTX 1:20 [Efektif] 18 November 2026",
  "deck": "Stock split RDTX 1:20 resmi efektif 18 November 2026; saham nominal baru mulai diperdagangkan 24 November di pasar reguler dan negosiasi.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RDTX",
   "stock split",
   "Roda Vivatex",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ffb4c1ad9c_d6ee8708c9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bull-direksi-wong-kevin-tambah-2-juta-saham-hak-suara-3-48",
  "category": "Aksi Korporasi",
  "title": "BULL: Direksi Wong Kevin [Tambah] 2 Juta Saham, Hak Suara 3,48%",
  "deck": "Direktur BULL Wong Kevin membeli 2 juta saham Buana Lintas Lautan pada 16 November 2026, hak suaranya naik tipis menjadi 3,48 persen.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BULL",
   "Buana Lintas Lautan",
   "laporan kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-7061-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cybr-direksi-tambah-7-6-juta-saham-hak-suara-jadi-0-944",
  "category": "Aksi Korporasi",
  "title": "CYBR: Direksi [Tambah] 7,6 Juta Saham, Hak Suara Jadi 0,944%",
  "deck": "Direksi ITSEC Asia Patrick Rudolf Dannacher membeli 7.600.300 saham CYBR secara tidak langsung sepanjang 4-17 November 2026, menaikkan hak suaranya ke 0,944%.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CYBR",
   "ITSEC Asia",
   "laporan kepemilikan",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-3402-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "foru-dua-anggota-komite-audit-mundur-diganti-dua-nama-baru",
  "category": "Aksi Korporasi",
  "title": "FORU: Dua Anggota Komite Audit Mundur, [Diganti] Dua Nama Baru",
  "deck": "Tjandra Susanto Putra dan Iwan mundur dari Komite Audit FORU efektif 17 November 2026, digantikan Triyoga Deni Intarto dan Yeniatie.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FORU",
   "Komite Audit",
   "Fortune Indonesia",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e478462e15_7769b888d6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "folk-komisaris-sutopo-widodo-tambah-15-8-juta-saham-suara-5-33",
  "category": "Aksi Korporasi",
  "title": "FOLK: Sumber Garam Pratama Jual 62.999.372 Saham, Suara 15,65%",
  "deck": "Sumber Garam Pratama melepas 62.999.372 saham FOLK dalam dua transaksi pada 13 dan 17 November 2026, menurunkan hak suaranya dari 17,19 persen menjadi 15,65 persen.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FOLK",
   "Laporan Kepemilikan Saham",
   "Sumber Garam Pratama",
   "Sutopo Widodo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-6564-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-bantah-kongsi-bakrie-haji-isam-bidik-saham-weda-bay-nickel",
  "category": "Aksi Korporasi",
  "title": "PACK [Bantah] Kongsi Bakrie-Haji Isam Bidik Saham Weda Bay Nickel",
  "deck": "PACK menegaskan tidak terlibat rencana akuisisi saham Weda Bay Nickel bersama VKTR, Danantara, dan Grup Bakrie, menjawab permintaan klarifikasi BEI.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "Weda Bay Nickel",
   "Klarifikasi BEI",
   "Rights Issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3d49b46c8d_2b5cb0a41a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "okas-alihkan-60-saham-bormindo-ke-sarida-utama-lunasi-utang",
  "category": "Aksi Korporasi",
  "title": "OKAS Alihkan 60% Saham Bormindo ke Sarida Utama, [Lunasi] Utang",
  "deck": "OKAS menyerahkan 108.000 saham (60%) di PT Bormindo Nusantara kepada PT Sarida Utama untuk melunasi seluruh utangnya, efektif 16 November 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OKAS",
   "Ancora Indonesia Resources",
   "Bormindo Nusantara",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b9ba7f8aa7_5db32de4a2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-jawab-bei-rights-issue-100-m-saham-dilusi-maks-74-6",
  "category": "Aksi Korporasi",
  "title": "PACK Jawab BEI: [Rights Issue] 100 M Saham, Dilusi Maks 74,6%",
  "deck": "PACK menanggapi permintaan BEI soal rights issue 100 miliar saham dengan dilusi maksimal 74,6%, serta rencana akuisisi dua perusahaan tambang dan pemurnian nikel.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "rights issue",
   "akuisisi nikel",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cad6841c34_de3422e2e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-putrasakti-mandiri-tambah-101-600-saham-hak-suara-32-08",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri Tambah 1.050.000 Saham, Hak Suara 32,08%",
  "deck": "Dokumen baru mengungkap Putrasakti Mandiri juga membeli 948.400 saham KDTN pada 17 November 2026 di Rp176-Rp179, melengkapi total pembelian hari itu jadi 1,05 juta saham dan hak suara 32,084%.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "Putrasakti Mandiri",
   "Laporan Kepemilikan Saham",
   "Puri Sentul Permai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-3083-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-boba-rp2-per-saham-cair-18-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim BOBA Rp2 per Saham, [Cair] 18 Desember",
  "deck": "BOBA membagikan dividen interim tunai Rp2 per saham, total Rp2,31 miliar, dengan tanggal pembayaran 18 Desember 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOBA",
   "dividen interim",
   "dividen tunai",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ab881ce957_ee705a92de.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmix-pukul-rata-kanan-tambah-200-juta-saham-jadi-8-74",
  "category": "Aksi Korporasi",
  "title": "MMIX: Pukul Rata Kanan [Tambah] 200 Juta Saham, Jadi 8,74%",
  "deck": "PT Pukul Rata Kanan menambah 200 juta saham MMIX pada 17 November 2026, menaikkan kepemilikannya dari 4,57% menjadi 8,74%.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "kepemilikan saham",
   "Pukul Rata Kanan",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/283bc948f9_cb8cddfefa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-ipcc-rp38-975-per-saham-cair-18-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim IPCC Rp38,975 per Saham, [Cair] 18 Desember",
  "deck": "IPCC membagikan dividen interim tahun buku 2026 senilai Rp70,87 miliar atau Rp38,975 per saham, dibayar 18 Desember 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCC",
   "dividen interim",
   "Indonesia Kendaraan Terminal",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1fc4a0dd7f_0b5d172aa9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-klarifikasi-kasus-manipulasi-waran-bukan-pihak-terkait",
  "category": "Aksi Korporasi",
  "title": "DOOH Klarifikasi Kasus Manipulasi Waran: [Bukan Pihak Terkait]",
  "deck": "PT Era Media Sejahtera Tbk (DOOH), kini bernama Nexora Energy Infrastructure, menegaskan bukan pihak dalam kasus dugaan manipulasi perdagangan Waran Seri I (DOOH-W) yang diusut OJK.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "OJK",
   "manipulasi pasar",
   "waran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/dfb985d0ec_babc92ed66.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "flmc-defisiensi-modal-rp2-59-miliar-rupslb-pmthmetd-28-desember",
  "category": "Aksi Korporasi",
  "title": "FLMC Defisiensi Modal Rp2,59 Miliar: [RUPSLB] PMTHMETD 28 Desember",
  "deck": "FLMC mengaku defisiensi modal Rp2,59 miliar dan rasio lancar 0,31 kali per Juni 2026, berencana terbitkan saham baru tanpa HMETD hingga 10% dan gelar RUPSLB 28 Desember 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "going concern",
   "PMTHMETD",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c64a5b4291_bcec2af2c6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-ungkap-78-dari-82-kasus-merger-terlambat-lapor",
  "category": "Bisnis",
  "title": "KPPU Ungkap 78 dari 82 Kasus Merger [Terlambat] Lapor",
  "deck": "KPPU mencatat 78 dari 82 perkara merger sejak 2000 terkait keterlambatan notifikasi, dengan denda hingga Rp25 miliar bagi perusahaan yang lalai melapor transaksi.",
  "date": "18 November 2026",
  "image": "assets/img/kppu-ungkap-78-dari-82-kasus-merger-terlambat-lapor.jpg",
  "imageV": "mwltlcnj",
  "tags": [
   "KPPU",
   "Merger dan Akuisisi",
   "Persaingan Usaha",
   "Notifikasi"
  ],
  "kreditFoto": "Komisi Pengawas Persaingan Usaha",
  "sourceUrl": "https://kppu.go.id/berita/kppu-perusahaan-harus-perhitungkan-risiko-persaingan-sejak-merencanakan-merger",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "dividen-interim-mlbi-rp228-per-saham-cair-15-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim MLBI Rp228 per Saham, [Cair] 15 Desember 2026",
  "deck": "MLBI akan membagikan dividen interim tunai Rp228 per saham, total Rp480,396 miliar, dengan pembayaran pada 15 Desember 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MLBI",
   "dividen interim",
   "Multi Bintang Indonesia",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1169a08ea7_4fd6d94c9b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "investor-eropa-diminta-susun-rencana-aksi-90-hari-proyek-energi",
  "category": "Energi",
  "title": "Investor Eropa Diminta Susun [Rencana Aksi] 90 Hari Proyek Energi",
  "deck": "Pemerintah mengajak investor Eropa mempercepat realisasi proyek transisi energi melalui rencana aksi 90 hari, di tengah target RUPTL 69,5 gigawatt kapasitas listrik baru hingga 2034.",
  "date": "18 November 2026",
  "image": "assets/img/jaringan-listrik.jpg",
  "tags": [
   "transisi energi",
   "investasi Eropa",
   "RUPTL",
   "energi terbarukan"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7231/percepat-realisasi-proyek-transisi-energi-pemerintah-ajak-investor-eropa-perkuat-kolaborasi",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bi-naikkan-suku-bunga-acuan-ke-6-demi-jaga-rupiah",
  "category": "Moneter",
  "title": "BI [Naikkan] Suku Bunga Acuan ke 6% demi Jaga Rupiah",
  "deck": "Bank Indonesia menaikkan BI-Rate 25 basis poin menjadi 6,00% untuk menahan pelemahan rupiah, sembari tetap melonggarkan aturan kredit perbankan.",
  "date": "18 November 2026",
  "image": "assets/img/rupiah-kurs.jpg",
  "tags": [
   "BI-Rate",
   "Rupiah",
   "Bank Indonesia",
   "Suku Bunga"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2825426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "mtsm-akui-salah-unggah-calk-revisi-laporan-keuangan-juni-2026",
  "category": "Aksi Korporasi",
  "title": "MTSM Akui Salah Unggah CALK, [Revisi] Laporan Keuangan Juni 2026",
  "deck": "Metro Realty menjelaskan ke Bursa bahwa kesalahan unggah PDF membuat catatan laporan keuangan per Juni 2026 keliru, sembilan pos keuangan direvisi, dan suspensi saham masih berlanjut.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTSM",
   "suspensi saham",
   "laporan keuangan",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e056a29b00_3ab0273d29.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-lenny-marlina-jadi-direktur-utama-baru-gantikan-burhanuddin",
  "category": "Aksi Korporasi",
  "title": "SMMA: Lenny Marlina Jadi [Direktur Utama] Baru, Gantikan Burhanuddin",
  "deck": "PT Sinar Mas Multiartha Tbk mengangkat Lenny Marlina sebagai Direktur Utama baru per 17 November 2026, menggantikan Burhanuddin Abdullah, sekaligus menambah satu direktur baru.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "Direksi",
   "Corporate Governance",
   "Pergantian Pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6be4882084_bd1431a45b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-bantah-reekspor-ilegal-gpu-pastikan-tak-pernah-digeledah",
  "category": "Aksi Korporasi",
  "title": "MGLV Bantah [Reekspor Ilegal] GPU, Pastikan Tak Pernah Digeledah",
  "deck": "Dalam keterbukaan informasi 18 November 2026, MGLV membantah tudingan reekspor ilegal GPU sejak 2024 dan memastikan tidak pernah ada penggeledahan di fasilitas pusat datanya.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "data center",
   "ekspor GPU",
   "fakta material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3f630909a3_1660579a5d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "infomedia-raih-penghargaan-frost-sullivan-2026-di-bpo-digital",
  "category": "BUMN",
  "title": "Infomedia Raih Penghargaan [Frost & Sullivan] 2026 di BPO Digital",
  "deck": "Anak usaha Telkom Indonesia ini dinobatkan Company of the Year oleh Frost & Sullivan atas integrasi AI dalam layanan business process outsourcing di Indonesia.",
  "date": "18 November 2026",
  "image": "assets/img/infomedia-raih-penghargaan-frost-sullivan-2026-di-bpo-digital.jpg",
  "imageV": "mwltle65",
  "tags": [
   "Infomedia",
   "Telkom Indonesia",
   "BPO",
   "Frost & Sullivan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479008-infomedia-raih-penghargaan-frost-sullivan-2026-di-industri-digital-bpo"
 },
 {
  "slug": "bri-salurkan-rp12-61-triliun-kredit-program-perumahan",
  "category": "BUMN",
  "title": "BRI Salurkan [Rp12,61 Triliun] Kredit Program Perumahan",
  "deck": "BRI merealisasikan Rp12,61 triliun kredit program perumahan dan Rp17,15 triliun bantuan sosial hingga kuartal III 2026, bagian dari sinergi dengan program pemerintah.",
  "date": "18 November 2026",
  "image": "assets/img/bri-salurkan-rp12-61-triliun-kredit-program-perumahan.jpg",
  "imageV": "mwltlenq",
  "tags": [
   "BRI",
   "Kredit Program Perumahan",
   "Bantuan Sosial",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478999-bri-perkuat-sinergi-dengan-pemerintah-salurkan-dana-kredit-program-perumahan"
 },
 {
  "slug": "ptpp-kontrak-baru-3-proyek-irigasi-pu-airi-8-905-hektare-sawah",
  "category": "Aksi Korporasi",
  "title": "PTPP: [Kontrak Baru] 3 Proyek Irigasi PU, Airi 8.905 Hektare Sawah",
  "deck": "PTPP menggarap tiga paket rehabilitasi irigasi Kementerian PU di Jabar, Jatim, dan Kalsel, mencakup 71 daerah irigasi untuk mengairi 8.905 hektare sawah.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "irigasi",
   "Kementerian PU",
   "kontrak konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ce6a25d9f6_a68f51cfcf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sima-ifg-tambah-14-2-juta-saham-hak-suara-jadi-8-10",
  "category": "Aksi Korporasi",
  "title": "SIMA: IFG [Tambah] 14,2 Juta Saham, Hak Suara Jadi 8,10%",
  "deck": "PT Asuransi Jiwa IFG menambah 14,2 juta saham SIMA lewat hibah, hak suaranya naik dari 4,88% ke 8,10% pada 7 Agustus 2026.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIMA",
   "kepemilikan saham",
   "PT Asuransi Jiwa IFG",
   "Jiwasraya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-1784-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmix-mengky-mangarek-tambah-1-juta-saham-hak-suara-6-02",
  "category": "Aksi Korporasi",
  "title": "MMIX: Mengky Mangarek [Tambah] 1 Juta Saham, Hak Suara 6,02%",
  "deck": "Direksi MMIX Mengky Mangarek membeli 1 juta saham pada 23 Oktober 2026, menambah kepemilikannya jadi 289 juta lembar dan hak suara naik dari 6,00% ke 6,02%.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMIX",
   "laporan kepemilikan",
   "direksi",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-2467-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-tipis-ke-rp2-514-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Tipis ke Rp2.514.000/Gram",
  "deck": "Harga emas Antam turun Rp1.000 menjadi Rp2.514.000 per gram pada 18 November 2026, sementara harga buyback ikut turun ke Rp2.272.000 per gram.",
  "date": "18 November 2026",
  "image": "assets/img/harga-emas-antam-turun-tipis-ke-rp2-514-000-gram.jpg",
  "imageV": "mwltlf44",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "buyback emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478983-harga-emas-antam-hari-ini-18-november-2026-turun-tipis-jadi-rp2514000-per-gram"
 },
 {
  "slug": "smru-asuransi-jiwa-ifg-tambah-35-4-juta-saham-hak-suara-9-01",
  "category": "Aksi Korporasi",
  "title": "SMRU: Asuransi Jiwa IFG Tambah 35,4 Juta Saham, [Hak Suara] 9,01%",
  "deck": "PT Asuransi Jiwa IFG menambah 35,4 juta saham SMRU lewat hibah terkait likuidasi reksadana eks aset Jiwasraya, hak suara naik ke 9,01 persen.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRU",
   "kepemilikan saham",
   "IFG Life",
   "Jiwasraya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-7537-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smbr-asuransi-jiwa-ifg-jual-16-juta-saham-suara-7-93",
  "category": "Aksi Korporasi",
  "title": "SMBR: Asuransi Jiwa IFG [Jual] 16 Juta Saham, Suara 7,93%",
  "deck": "PT Asuransi Jiwa IFG melepas 16 juta saham SMBR seharga Rp282 per saham lewat skema repo, hak suaranya turun dari 8,10% menjadi 7,93%.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "Semen Baturaja",
   "Kepemilikan Saham",
   "Asuransi Jiwa IFG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-4233-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penipuan-qris-marak-ini-cara-aman-pakai-shopeepay",
  "category": "Teknologi",
  "title": "Penipuan QRIS Marak, Ini Cara [Aman] Pakai ShopeePay",
  "deck": "Transaksi QRIS makin umum, tapi modus penipuan seperti kode QR palsu dan pesan tiruan ikut meningkat. ShopeePay menawarkan fitur pengecekan transaksi plus cashback hingga Rp100 ribu.",
  "date": "18 November 2026",
  "image": "assets/img/penipuan-qris-marak-ini-cara-aman-pakai-shopeepay.jpg",
  "imageV": "mwltlfkh",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478889-waspada-penipuan-digital-ini-cara-aman-dan-hemat-bayar-qris-pakai-shopeepay"
 },
 {
  "slug": "ri-teken-ieu-cepa-dengan-uni-eropa-21-november",
  "category": "Global",
  "title": "RI Teken [IEU-CEPA] dengan Uni Eropa 21 November",
  "deck": "Indonesia dijadwalkan menandatangani perjanjian dagang IEU-CEPA di Brussels pada 21 November 2026, menyusul berakhirnya fasilitas tarif GSP Uni Eropa bagi produk Indonesia.",
  "date": "18 November 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "Perdagangan",
   "Indonesia-Inggris"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7230/tandatangani-ieu-cepa-dan-perkuat-implementasi-indonesiaunited-kingdom-egp-menko-airlangga-buka-peluang-baru-pertumbuhan-ekonomi-indonesia",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wgsh-direksi-hendy-rusli-jual-226-saham-hak-suara-tetap-0-05",
  "category": "Aksi Korporasi",
  "title": "WGSH: Direksi Hendy Rusli [Jual] 226 Saham, Hak Suara Tetap 0,05%",
  "deck": "Direksi WGSH Hendy Rusli melepas 226 saham perusahaan secara tidak langsung pada 17 November 2026 seharga Rp89 per saham, hak suaranya tetap 0,05 persen.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WGSH",
   "laporan kepemilikan saham",
   "direksi",
   "Wira Global Solusi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-18112026-2007-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sgn-genjot-hilirisasi-tebu-kejar-gula-2-06-juta-ton",
  "category": "BUMN",
  "title": "SGN Genjot [Hilirisasi] Tebu, Kejar Gula 2,06 Juta Ton",
  "deck": "PT Sinergi Gula Nusantara mengembangkan bioetanol dan fasilitas pemurnian dari tebu, sembari menargetkan produksi gula naik ke 2,06 juta ton pada 2030.",
  "date": "18 November 2026",
  "image": "assets/img/sgn-genjot-hilirisasi-tebu-kejar-gula-2-06-juta-ton.jpg",
  "imageV": "mwlgk9xh",
  "tags": [
   "gula",
   "hilirisasi",
   "tebu",
   "swasembada"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478959-hilirisasi-tebu-jadi-strategi-tingkatkan-produksi-gula-nasional-hingga-206-juta"
 },
 {
  "slug": "megaspeed-firma-singapura-disorot-dugaan-penyelundupan-cip-nvidia",
  "category": "Global",
  "title": "Megaspeed, Firma Singapura Disorot Dugaan [Penyelundupan] Cip Nvidia",
  "deck": "Megaspeed International, perusahaan cloud computing Singapura, diduga jadi alat penyelundupan cip AI Nvidia dari AS ke China lewat Indonesia; Polri masih mendalami permintaan penggeledahan dari FBI.",
  "date": "18 November 2026",
  "image": "assets/img/megaspeed-firma-singapura-disorot-dugaan-penyelundupan-cip-nvidia.jpg",
  "imageV": "mwlgkabp",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478949-apa-itu-megaspeed-perusahaan-yang-terseret-dugaan-kasus-cip-nvidia-via-ri"
 },
 {
  "slug": "presiden-prabowo-ajak-jepang-kembangkan-energi-bersih-ri",
  "category": "Energi",
  "title": "Presiden Prabowo Ajak [Jepang] Kembangkan Energi Bersih RI",
  "deck": "Di KTT ASEAN-Jepang di Manila, Presiden Prabowo Subianto menawarkan kerja sama energi bersih, dari program biodiesel B50 hingga rencana PLTS 100 gigawatt, kepada Jepang.",
  "date": "18 November 2026",
  "image": "assets/img/presiden-prabowo-ajak-jepang-kembangkan-energi-bersih-ri.jpg",
  "imageV": "mwla4c7d",
  "tags": [
   "energi bersih",
   "biodiesel B50",
   "PLTS",
   "Indonesia-Jepang"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dari-b50-hingga-plts-100-gwp-indonesia-ajak-jepang-perkuat-kerja-sama-energi-bersih",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "penjelasan-bursa-msky-kas-rp2-1-m-vs-utang-rp490-5-m-pkpu",
  "category": "Aksi Korporasi",
  "title": "Penjelasan Bursa MSKY: Kas Rp2,1 M vs Utang Rp490,5 M [PKPU]",
  "deck": "MSKY menjawab permintaan penjelasan Bursa Efek Indonesia terkait status PKPU: kas perusahaan hanya Rp2,1 miliar, sementara liabilitas jangka pendek mencapai Rp490,5 miliar.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MSKY",
   "PKPU",
   "MNC Sky Vision",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8427bdd165_12513944e6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-tegaskan-ujung-kulon-bukan-kawasan-tambang",
  "category": "Energi",
  "title": "ESDM Tegaskan Ujung Kulon [Bukan] Kawasan Tambang",
  "deck": "Kementerian ESDM menegaskan Taman Nasional Ujung Kulon bukan wilayah tambang. Hanya sebagian perairan sekitarnya berstatus WUP sejak 2013, dan belum ada izin tambang yang terbit di sana.",
  "date": "18 November 2026",
  "image": "assets/img/esdm-tegaskan-ujung-kulon-bukan-kawasan-tambang.jpg",
  "imageV": "mwkyc4n9",
  "tags": [
   "ESDM",
   "Ujung Kulon",
   "Pertambangan",
   "Konservasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kementerian-esdm-tegaskan-taman-nasional-ujung-kulon-bukan-wilayah-pertambangan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "saham-bonus-ppgl-disesuaikan-jadi-514-1-juta-distribusi-25-nov",
  "category": "Aksi Korporasi",
  "title": "Saham Bonus PPGL [Disesuaikan] Jadi 514,1 Juta, Distribusi 25 Nov",
  "deck": "PPGL menyesuaikan jumlah saham bonus dari rencana 514.118.680 menjadi 514.117.134 saham akibat pembulatan ke bawah, distribusi tetap 25 November 2026.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "saham bonus",
   "KSEI",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/48641c6175_213d81719c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-ke-bei-dana-ipo-rp65-59-miliar-dibelikan-tanah",
  "category": "Aksi Korporasi",
  "title": "VTNY ke BEI: Dana IPO Rp65,59 Miliar [Dibelikan Tanah]",
  "deck": "VTNY menjawab permintaan penjelasan kedua BEI soal piutang Rp147 miliar lewat skema cessie, kenaikan CKPN 23,41%, dan dana IPO Rp65,59 miliar yang dipakai membeli tanah kantor.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "Dana IPO",
   "CKPN",
   "Keterbukaan Informasi BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/61c7698a1c_46890e0da9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-kija-pendapatan-q3-naik-16-laba-turun-38",
  "category": "Aksi Korporasi",
  "title": "Public Expose KIJA: Pendapatan Q3 Naik 16%, Laba [Turun] 38%",
  "deck": "Pendapatan KIJA kuartal III 2026 naik 16 persen jadi Rp4,25 triliun, tapi laba bersih turun 38 persen akibat biaya refinancing sekali waktu.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIJA",
   "Kawasan Industri Jababeka",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/680c96fe47_7413619589.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bni-bpjs-kesehatan-teken-tujuh-kerja-sama-jkn",
  "category": "Perbankan",
  "title": "BNI-BPJS Kesehatan Teken [Tujuh] Kerja Sama JKN",
  "deck": "BNI dan BPJS Kesehatan menambah tujuh perjanjian kerja sama untuk pengelolaan iuran, autodebit, dan dana JKN yang melayani hampir 284 juta peserta.",
  "date": "17 November 2026",
  "image": "assets/img/bni-bpjs-kesehatan-teken-tujuh-kerja-sama-jkn.jpg",
  "imageV": "mwkyc58u",
  "tags": [
   "BNI",
   "BPJS Kesehatan",
   "JKN",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478906-bni-dan-bpjs-kesehatan-teken-tujuh-pks-perkuat-layanan-jkn"
 },
 {
  "slug": "harga-patokan-nikel-naik-ke-usd15-596-per-ton-royalti-ikut-naik",
  "category": "Energi",
  "title": "Harga Patokan Nikel [Naik] ke USD15.596 per Ton, Royalti Ikut Naik",
  "deck": "Kementerian ESDM menetapkan harga acuan nikel periode 15-30 November 2026 naik 0,76 persen jadi USD15.596,88 per ton, sementara tembaga dan emas terkoreksi tipis.",
  "date": "17 November 2026",
  "image": "assets/img/harga-patokan-nikel-naik-ke-usd15-596-per-ton-royalti-ikut-naik.jpg",
  "imageV": "mwksjw8d",
  "tags": [
   "nikel",
   "ESDM",
   "royalti tambang",
   "harga mineral"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hma-nikel-naik-jadi-usd1559688-per-ton-pada-paruh-kedua-november-2026",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bri-dan-playtopia-luncurkan-kartu-debit-tabungan-anak",
  "category": "Perbankan",
  "title": "BRI dan Playtopia [Luncurkan] Kartu Debit Tabungan Anak",
  "deck": "BRI menggandeng Playtopia meluncurkan kartu debit co-branding BRI Junio untuk mendorong anak-anak menabung sambil bermain.",
  "date": "17 November 2026",
  "image": "assets/img/bri-dan-playtopia-luncurkan-kartu-debit-tabungan-anak.jpg",
  "imageV": "mwkyc5qx",
  "tags": [
   "BRI",
   "BBRI",
   "Playtopia",
   "BRI Junio"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478891-bri-dan-playtopia-group-luncurkan-kartu-debit-co-branding-bri-junio-x-playtopia"
 },
 {
  "slug": "irra-revisi-laporan-keuangan-semester-i-2026-koreksi-11-pos-akun",
  "category": "Aksi Korporasi",
  "title": "IRRA Revisi Laporan Keuangan Semester I 2026: [Koreksi] 11 Pos Akun",
  "deck": "IRRA merevisi laporan keuangan semester I 2026, mengoreksi 11 pos termasuk utang bank dan piutang pajak, tanpa mengubah total aset maupun laba.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRRA",
   "laporan keuangan",
   "koreksi laporan",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261117205418-65809-0/FinancialStatement-2026-II-IRRA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmtr-dana-obligasi-sukuk-rp793-5-m-lunasi-utang-lama-sisa-rp0",
  "category": "Aksi Korporasi",
  "title": "BMTR: Dana Obligasi-Sukuk Rp793,5 M [Lunasi] Utang Lama, Sisa Rp0",
  "deck": "Global Mediacom melaporkan realisasi dana hasil Obligasi dan Sukuk Ijarah Berkelanjutan V Tahap II 2026 senilai Rp793,5 miliar, seluruhnya sudah terpakai untuk melunasi obligasi lama dan modal kerja.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMTR",
   "obligasi",
   "sukuk ijarah",
   "Global Mediacom"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4accb01e75_9de5e26e42.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-hitung-risiko-persaingan-sejak-rencanakan-merger",
  "category": "Bisnis",
  "title": "KPPU: Hitung Risiko [Persaingan] Sejak Rencanakan Merger",
  "deck": "KPPU mengingatkan perusahaan menghitung risiko persaingan usaha sejak awal rencana merger dan akuisisi, bukan hanya nilai transaksi.",
  "date": "17 November 2026",
  "image": "assets/img/kppu-hitung-risiko-persaingan-sejak-rencanakan-merger.jpg",
  "imageV": "mwkoqgwj",
  "tags": [
   "KPPU",
   "merger dan akuisisi",
   "persaingan usaha",
   "due diligence"
  ],
  "kreditFoto": "Komisi Pengawas Persaingan Usaha",
  "sourceUrl": "https://kppu.go.id/berita/kppu-ingatkan-perusahaan-perhitungkan-risiko-persaingan-sejak-merencanakan-merger-dan-akuisisi",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "realisasi-psn-capai-rp2-396-triliun-serap-10-7-juta-kerja",
  "category": "Makroekonomi",
  "title": "Realisasi PSN Capai [Rp2.396] Triliun, Serap 10,7 Juta Kerja",
  "deck": "Kemenko Perekonomian merinci realisasi Proyek Strategis Nasional dan Kawasan Ekonomi Khusus hingga September 2026, disertai data pertumbuhan ekonomi dan investasi nasional terbaru.",
  "date": "17 November 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "PSN",
   "KEK",
   "Investasi",
   "Pertumbuhan Ekonomi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7229/kemenko-perekonomian-perluas-wawasan-mahasiswa-unair-mengenai-strategi-pembangunan-ekonomi-dan-tantangan-global",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "soda-abu-indonesia-bebas-kuota-impor-india",
  "category": "Global",
  "title": "Soda Abu Indonesia [Bebas] Kuota Impor India",
  "deck": "India resmi membebaskan soda abu asal Indonesia dari pembatasan kuota impor lewat putusan safeguard DGTR tertanggal 4 November 2026, membuka peluang ekspor lebih besar ke pasar tersebut.",
  "date": "17 November 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "soda abu",
   "ekspor",
   "India",
   "Kementerian Perdagangan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/soda-abu-indonesia-terbebas-dari-aturan-kuota-impor-india-mendag-busan-ajak-tingkatkan-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "smar-david-fernando-audy-jadi-komisaris-utama-gantikan-franky",
  "category": "Aksi Korporasi",
  "title": "SMAR: David Fernando Audy Jadi [Komisaris Utama], Gantikan Franky",
  "deck": "Komisaris Utama SMAR berganti dari Franky Oesman Widjaja ke David Fernando Audy per 17 November 2026, direksi tidak berubah.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMAR",
   "Komisaris Utama",
   "Pergantian Pengurus",
   "Sinar Mas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/34b3c4a3cb_df91d79f21.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wege-digugat-pkpu-oleh-dua-perusahaan-terdaftar-13-november",
  "category": "Aksi Korporasi",
  "title": "WEGE Digugat [PKPU] oleh Dua Perusahaan, Terdaftar 13 November",
  "deck": "Dua perusahaan, PT Jaya Hamparan Alam dan PT Dutakreasi Bersama Realtindo, mengajukan permohonan PKPU terhadap WEGE ke Pengadilan Niaga Jakarta Pusat, terdaftar 13 November 2026.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WEGE",
   "PKPU",
   "Pengadilan Niaga",
   "Konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/54bf587656_2715ae053d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpu-wege-dari-pratama-widya-dicabut-kasus-resmi-selesai",
  "category": "Aksi Korporasi",
  "title": "PKPU WEGE dari Pratama Widya [Dicabut], Kasus Resmi Selesai",
  "deck": "Pengadilan Niaga Jakarta Pusat mencatat PT Pratama Widya Tbk mencabut gugatan PKPU terhadap WEGE pada 12 November 2026, perkara dinyatakan selesai.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WEGE",
   "PKPU",
   "Pengadilan Niaga",
   "Pratama Widya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/066673e033_ddab072b8f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smexpo-2026-ditutup-potensi-bisnis-umkm-tembus-rp34-miliar",
  "category": "UMKM",
  "title": "SMEXPO 2026 Ditutup, Potensi Bisnis UMKM Tembus [Rp34 Miliar]",
  "deck": "Pertamina merangkum SMEXPO 2026 dengan 354 UMKM binaan di enam kota, penjualan ritel lebih dari Rp2 miliar, dan potensi kerja sama bisnis Rp34 miliar.",
  "date": "17 November 2026",
  "image": "assets/img/smexpo-2026-ditutup-potensi-bisnis-umkm-tembus-rp34-miliar.jpg",
  "imageV": "mwkoqi3x",
  "tags": [
   "pertamina",
   "umkm",
   "smexpo",
   "bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478861-pertamina-tutup-rangkaian-smexpo-2026-potensi-bisnis-tembus-rp34-miliar"
 },
 {
  "slug": "uma-tfas-13-november-manajemen-tak-tahu-pemicu-volatilitas",
  "category": "Aksi Korporasi",
  "title": "[UMA] TFAS 13 November: Manajemen Tak Tahu Pemicu Volatilitas",
  "deck": "TFAS menjawab permintaan BEI soal volatilitas transaksi sahamnya: manajemen menyatakan tidak ada informasi material apa pun di balik pergerakan itu.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TFAS",
   "UMA",
   "Bursa Efek Indonesia",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/51b1714ddc_cd5bf7cb81.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "private-placement-tgra-21-miliar-saham-ams-jadi-pengendali-baru",
  "category": "Aksi Korporasi",
  "title": "Private Placement TGRA 21 Miliar Saham: Defisit Rp293 M [Terungkap]",
  "deck": "Koreksi keterbukaan TGRA ungkap rugi bersih Rp25,29 miliar dan defisit Rp293,10 miliar per September 2026, sementara rencana private placement 21 miliar saham ke AMS tetap tak berubah.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "private placement",
   "dilusi saham",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/69b68a027c_cf21575c17.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "umkm-ekspor-catat-us-361-juta-79-masih-potensi",
  "category": "UMKM",
  "title": "UMKM Ekspor Catat US$361 Juta, [79%] Masih Potensi",
  "deck": "Nilai transaksi business matching ekspor UMKM Januari-Oktober 2026 mencapai US$361,61 juta, tapi 79 persennya masih berupa potensi, bukan pesanan pembelian pasti.",
  "date": "17 November 2026",
  "image": "assets/img/batik-umkm.jpg",
  "tags": [
   "UMKM",
   "ekspor",
   "Kemendag",
   "business matching"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/business-matching-kemendag-januari-oktober-2026-catat-transaksi-usd-36161-juta-dan-libatkan-1433-pelaku-usaha",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ri-bidik-potensi-transaksi-us-8-97-juta-di-expo-haji-jeddah",
  "category": "Bisnis",
  "title": "RI Bidik Potensi Transaksi [US$8,97 Juta] di Expo Haji Jeddah",
  "deck": "Delapan perusahaan Indonesia menjajaki bisnis di Hajj Conference & Expo 2026 Jeddah, PT Family Food Indonesia meneken MoU dan mencatat potensi transaksi terbesar.",
  "date": "17 November 2026",
  "image": "assets/img/ri-bidik-potensi-transaksi-us-8-97-juta-di-expo-haji-jeddah.jpg",
  "imageV": "mwkjdmuc",
  "tags": [
   "ekspor",
   "Arab Saudi",
   "haji dan umrah",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-hasilkan-mou-dan-transaksi-signifikan-dalam-hajj-conference-expo-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "rupslb-gema-komisaris-agustinus-mundur-dedy-rochimat-komut",
  "category": "Aksi Korporasi",
  "title": "RUPSLB GEMA: [Komisaris] Agustinus Mundur, Dedy Rochimat Komut",
  "deck": "RUPSLB Gema Grahasarana (GEMA) pada 17 November 2026 menyetujui pengunduran diri Komisaris Agustinus Purna Irawan, dan menetapkan Dedy Rochimat sebagai Komisaris Utama baru hingga 2029.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GEMA",
   "Komisaris",
   "RUPSLB",
   "Gema Grahasarana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4119a04ae1_f4b34fcb7e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-hapsoro-jual-333-juta-saham-hak-suara-jadi-1-05",
  "category": "Aksi Korporasi",
  "title": "BUVA: Hapsoro Beli 600 Juta, Jual 333 Juta Saham, Suara ke 1,05%",
  "deck": "Dokumen baru menunjukkan Hapsoro membeli 600 juta saham BUVA pada 12 November sebelum menjual 333 juta di antaranya, sehingga hak suaranya net naik dari 0,18% menjadi 1,05%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "Hapsoro",
   "Laporan Kepemilikan Saham",
   "Free Float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-0768-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-nusantara-utama-investama-jual-600-juta-saham-suara-ke-58-2",
  "category": "Aksi Korporasi",
  "title": "BUVA: Nusantara Utama Investama [Jual] 600 Juta Saham, Suara ke 58,2%",
  "deck": "Nusantara Utama Investama melepas 600 juta saham BUVA secara tidak langsung pada 12 November 2026, hak suara turun dari 60,15% menjadi 58,20%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "kepemilikan saham",
   "Nusantara Utama Investama",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-0866-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plan-direksi-jual-1-88-juta-saham-hak-suara-ke-2-64",
  "category": "Aksi Korporasi",
  "title": "PLAN: Direksi [Jual] 1,88 Juta Saham, Hak Suara ke 2,64%",
  "deck": "Direksi PLAN Antonyo Hartono Tanujaya melepas 1.883.100 saham lewat tiga transaksi repo pada 16 November, hak suara turun dari 2,85% ke 2,64%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLAN",
   "kepemilikan saham",
   "direksi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-8358-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-belum-tegaskan-dana-siap-obligasi-rp15-7-m-jatuh-tempo-8-des",
  "category": "Aksi Korporasi",
  "title": "ADCP Belum Tegaskan Dana Siap, [Obligasi] Rp15,7 M Jatuh Tempo 8 Des",
  "deck": "ADCP melaporkan kesiapan dana pelunasan obligasi Rp15,7 miliar yang jatuh tempo 8 Desember 2026, tapi hanya menyebut koordinasi dengan penjamin CGIF, tanpa memastikan dana sudah tersedia.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "obligasi",
   "Adhi Commuter Properti",
   "CGIF"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/53592b96f0_65989d05e2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sema-prospek-2027-pendapatan-dan-laba-diproyeksi-naik-signifikan",
  "category": "Aksi Korporasi",
  "title": "SEMA Prospek 2027: [Pendapatan] dan Laba Diproyeksi Naik Signifikan",
  "deck": "Semacom Integrated (SEMA) ungkap pandangan awal manajemen yang sangat positif atas penjualan dan laba 2027, didorong proyek data center swasta, tanpa target angka resmi.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SEMA",
   "data center",
   "prospek kinerja",
   "panel listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/52dc682339_e26aa0e65b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-dgwg-rp19-5-per-saham-cair-17-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim DGWG Rp19,5 per Saham, [Cair] 17 Desember",
  "deck": "Direksi DGWG menetapkan dividen interim Rp19,5 per saham, total Rp114,7 miliar, dibayar 17 Desember 2026 setelah recording date 27 November.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "dividen interim",
   "pasar modal",
   "emiten"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bd28e40824_bc1094f396.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iikp-asuransi-jiwa-ifg-tambah-740-5-juta-saham-suara-ke-9-49",
  "category": "Aksi Korporasi",
  "title": "IIKP: Asuransi Jiwa IFG Tambah 1,37 Miliar Saham, Suara ke 13,60%",
  "deck": "PT Asuransi Jiwa IFG menambah 1,37 miliar saham IIKP pada 7 Agustus 2026, hak suaranya naik dari 9,51% menjadi 13,60%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IIKP",
   "Asuransi Jiwa IFG",
   "kepemilikan saham",
   "Jiwasraya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-8726-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "atla-komisaris-rudi-sutantra-jual-20-juta-saham-suara-jadi-38-88",
  "category": "Aksi Korporasi",
  "title": "ATLA: Komisaris Rudi Sutantra [Jual] 20 Juta Saham, Suara Jadi 38,88%",
  "deck": "Komisaris ATLA Rudi R Sutantra melepas 20 juta saham lewat mekanisme repurchase agreement pada 16 November 2026, hak suara turun jadi 38,88%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATLA",
   "kepemilikan saham",
   "komisaris",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-8540-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-rupslb-tgra-28-desember-2026-jadwal-dps-1-desember",
  "category": "Aksi Korporasi",
  "title": "RUPST & RUPSLB TGRA 28 Desember 2026: [Jadwal] DPS 1 Desember",
  "deck": "TGRA menjadwalkan RUPST tahun buku 2025 dan RUPSLB pada Senin, 28 Desember 2026, dengan pemegang saham per 1 Desember 2026 yang berhak hadir dan memberi suara.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGRA",
   "RUPST",
   "RUPSLB",
   "Terregra Asia Energy"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fc25a748ed_a98f279e92.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "shid-semester-i-2026-rugi-menyempit-ke-rp15-07-miliar",
  "category": "Aksi Korporasi",
  "title": "SHID Semester I 2026: [Rugi] Menyempit ke Rp15,07 Miliar",
  "deck": "Rugi bersih Hotel Sahid Jaya turun hampir separuh dibanding semester I 2025, tapi kas perusahaan menyusut tajam setelah membayar cicilan utang bank.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SHID",
   "Hotel Sahid Jaya",
   "laporan keuangan",
   "rugi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261117144104-65791-0/FinancialStatement-2026-II-SHID.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-soroti-konsentrasi-pasokan-di-program-mbg-sidoarjo",
  "category": "UMKM",
  "title": "KPPU Soroti [Konsentrasi] Pasokan di Program MBG Sidoarjo",
  "deck": "KPPU memantau program MBG dan koperasi desa di Sidoarjo, menyoroti dominasi pasokan oleh mitra dapur dan masuknya Agrinas ke koperasi tanpa koordinasi jelas.",
  "date": "17 November 2026",
  "image": "assets/img/kppu-soroti-konsentrasi-pasokan-di-program-mbg-sidoarjo.jpg",
  "imageV": "mwkcydwp",
  "tags": [
   "KPPU",
   "MBG",
   "Koperasi Merah Putih",
   "Persaingan Usaha"
  ],
  "kreditFoto": "Komisi Pengawas Persaingan Usaha",
  "sourceUrl": "https://kppu.go.id/berita/kppu-pantau-persaingan-usaha-dalam-pelaksanaan-program-mbg-dan-kdkmp",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "indonesia-pacu-target-100-gw-surya-di-forum-azec-manila",
  "category": "Energi",
  "title": "Indonesia Pacu Target [100 GW] Surya di Forum AZEC Manila",
  "deck": "Menko Airlangga mewakili Presiden Prabowo Subianto dalam pertemuan AZEC 2.0 di Manila, memaparkan sejumlah proyek dan target energi bersih berikut tenggatnya.",
  "date": "17 November 2026",
  "image": "assets/img/panel-surya-atap.jpg",
  "tags": [
   "AZEC",
   "Transisi Energi",
   "Energi Surya",
   "Biodiesel"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7228/indonesia-dorong-penguatan-kerja-sama-transisi-energi-kawasan-melalui-azec-20-di-pertemuan-4th-azec-leaders-meeting",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "lcgp-asuransi-jiwa-ifg-jual-seluruh-saham-suara-ke-0-delisting",
  "category": "Aksi Korporasi",
  "title": "LCGP: Asuransi Jiwa IFG [Hibah] 228,4 Juta Saham, Hak Suara 8,74%",
  "deck": "Kepemilikan Asuransi Jiwa IFG di LCGP sempat naik ke 8,74% pada Agustus 2026 lewat hibah dari likuidasi reksadana eks aset Jiwasraya, sebelum dilepas seluruhnya saat delisting 10 November 2026.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LCGP",
   "Asuransi Jiwa IFG",
   "delisting",
   "laporan kepemilikan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-0349-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppro-asuransi-jiwa-ifg-jual-39-3-juta-saham-jadi-7-93",
  "category": "Aksi Korporasi",
  "title": "PPRO: Asuransi Jiwa IFG Jual 679,86 Juta Saham, Hak Suara 8,44%",
  "deck": "PT Asuransi Jiwa IFG menjual 679.861.500 saham PPRO senilai sekitar Rp17 miliar pada 25 Februari 2026, hak suaranya turun dari 9,54% jadi 8,44%, mendahului transaksi April yang sudah diberitakan.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRO",
   "Asuransi Jiwa IFG",
   "Laporan Kepemilikan Saham",
   "Hak Suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-3207-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-gtbo-18-november-rkab-disetujui-kuota-817-900-ton",
  "category": "Aksi Korporasi",
  "title": "Public Expose GTBO 18 November: RKAB [Disetujui], Kuota 817.900 Ton",
  "deck": "GTBO menggelar Public Expose Tahunan 18 November 2026, mengungkap RKAB 2026 disetujui dengan kuota produksi maksimal 817.900 ton setelah setahun tanpa izin produksi.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "Public Expose",
   "RKAB",
   "Batu Bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b912035ab7_3387f78b00.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "infranexia-cetak-laba-rp1-04-triliun-hingga-kuartal-iii",
  "category": "BUMN",
  "title": "InfraNexia Cetak Laba [Rp1,04] Triliun hingga Kuartal III",
  "deck": "Anak usaha operasional Telkom ini membukukan pendapatan Rp10,5 triliun dan laba bersih Rp1,04 triliun hingga kuartal III 2026, ditopang kenaikan pelanggan di luar TelkomGroup.",
  "date": "17 November 2026",
  "image": "assets/img/infranexia-cetak-laba-rp1-04-triliun-hingga-kuartal-iii.jpg",
  "imageV": "mwkcyg03",
  "tags": [
   "InfraNexia",
   "Telkom Indonesia",
   "TelkomGroup",
   "infrastruktur telekomunikasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478802-infranexia-raup-pendapatan-rp105-triliun-laba-bersih-tembus-rp1-triliun"
 },
 {
  "slug": "inet-cakrawala-nexus-akuisisi-6-68-miliar-saham-suara-29-87",
  "category": "Aksi Korporasi",
  "title": "INET: Abadi Kreasi [Jual] 6,685 Miliar Saham, Suara Susut ke 29,89%",
  "deck": "PT Abadi Kreasi Unggul Nusantara, yang sebelumnya menguasai 59,76% suara INET, melepas 6,685 miliar saham lewat perjanjian repo Rp300 per saham, hak suaranya kini 29,89%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "laporan kepemilikan",
   "Abadi Kreasi Unggul Nusantara",
   "Cakrawala Nexus Investama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-4304-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wacana-larang-vape-pengamat-ingatkan-dampak-investasi",
  "category": "Industri",
  "title": "Wacana Larang Vape, Pengamat Ingatkan Dampak [Investasi]",
  "deck": "Pengamat kebijakan publik meminta pemerintah mengkaji menyeluruh wacana pelarangan vape, mengingat industri ini menyumbang cukai Rp2,84 triliun dan menyerap 150 ribu tenaga kerja.",
  "date": "17 November 2026",
  "image": "assets/img/wacana-larang-vape-pengamat-ingatkan-dampak-investasi.jpg",
  "imageV": "mwkcygc8",
  "tags": [
   "vape",
   "rokok elektrik",
   "cukai",
   "industri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478796-soal-wacana-pelarangan-vape-pengamat-ingatkan-dampak-investasi-dan-tenaga-kerja"
 },
 {
  "slug": "pemerintah-targetkan-elektrifikasi-100-persen-pada-2029",
  "category": "Energi",
  "title": "Pemerintah Targetkan Elektrifikasi [100] Persen pada 2029",
  "deck": "Harga Pertalite, Biosolar, dan LPG 3 kg bersubsidi ditahan hingga September 2026, sambil memperluas bantuan listrik gratis bagi keluarga prasejahtera.",
  "date": "17 November 2026",
  "image": "assets/img/pemerintah-targetkan-elektrifikasi-100-persen-pada-2029.jpg",
  "imageV": "mwk63j1h",
  "tags": [
   "elektrifikasi",
   "subsidi energi",
   "BPBL",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dari-meja-ktt-asean-tiongkok-ke-rumah-warga-energi-jadi-penggerak-kesejahteraan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "presiden-prabowo-tawarkan-mineral-kritis-ke-semikonduktor-korea",
  "category": "Energi",
  "title": "Presiden Prabowo Tawarkan Mineral Kritis ke [Semikonduktor] Korea",
  "deck": "Presiden Prabowo mengajak Korea Selatan menjadikan hilirisasi mineral kritis bagian dari rantai pasok industri semikonduktor, dalam KTT ASEAN-Korea Selatan di Manila.",
  "date": "17 November 2026",
  "image": "assets/img/presiden-prabowo-tawarkan-mineral-kritis-ke-semikonduktor-korea.jpg",
  "imageV": "mwk63kn0",
  "tags": [
   "Hilirisasi",
   "Mineral Kritis",
   "Semikonduktor",
   "Korea Selatan"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dari-tambang-ke-chip-indonesia-tawarkan-hilirisasi-mineral-kritis-untuk-industri-semikonduktor-korea",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "paviliun-bumbu-ri-di-tokyo-catat-potensi-transaksi-rp5-4-m",
  "category": "UMKM",
  "title": "Paviliun Bumbu RI di Tokyo Catat [Potensi] Transaksi Rp5,4 M",
  "deck": "Paviliun S'RASA Kemendag membukukan potensi transaksi US$303.730 di pameran JFEX Winter 2026 Tokyo, didukung satu MoU ekspor gula aren senilai US$5.700.",
  "date": "17 November 2026",
  "image": "assets/img/paviliun-bumbu-ri-di-tokyo-catat-potensi-transaksi-rp5-4-m.jpg",
  "imageV": "mwk63phu",
  "tags": [
   "Ekspor",
   "UMKM",
   "Jepang",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/paviliun-srasa-hadir-di-jfex-2026-jepang-bumbu-nusantara-bukukan-potensi-transaksi-rp54-m",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "rupslb-ketiga-hade-24-november-usai-kuorum-gagal-dua-kali",
  "category": "Aksi Korporasi",
  "title": "RUPSLB Ketiga HADE 24 November, usai [Kuorum] Gagal Dua Kali",
  "deck": "RUPSLB ketiga HADE digelar 24 November 2026 setelah dua rapat sebelumnya gagal kuorum, dengan agenda tunggal persetujuan penyesuaian KBLI 2025.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HADE",
   "RUPSLB",
   "Himalaya Energi Perkasa",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/44504164f2_8c32a03b7c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-arti-9-desember-perubahan-pengurus-masuk-agenda",
  "category": "Aksi Korporasi",
  "title": "RUPST ARTI 9 Desember: [Perubahan Pengurus] Masuk Agenda",
  "deck": "ARTI menjadwalkan RUPST 9 Desember 2026, membahas laporan tahunan 2025, penunjukan akuntan publik, perubahan susunan pengurus, dan honorarium direksi-komisaris.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTI",
   "RUPST",
   "Ratu Prabu Energi",
   "Perubahan Pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/837d777f11_b81dbc693e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asri-manunggal-prime-jual-356-2-juta-saham-suara-jadi-21",
  "category": "Aksi Korporasi",
  "title": "ASRI: Manunggal Prime [Jual] 356,2 Juta Saham, Suara Jadi 21%",
  "deck": "Manunggal Prime Development, entitas direksi ASRI, melepas 356,2 juta saham lewat fasilitas repurchase agreement, hak suara turun dari 23% jadi 21%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASRI",
   "Alam Sutera Realty",
   "Manunggal Prime Development",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-8731-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-rp7-000-jadi-rp2-515-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Rp7.000 Jadi Rp2.515.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp7.000 menjadi Rp2.515.000 per gram, sementara harga buyback juga melemah ke Rp2.278.000 per gram, Selasa (17/11/2026).",
  "date": "17 November 2026",
  "image": "assets/img/harga-emas-antam-turun-rp7-000-jadi-rp2-515-000-gram.jpg",
  "imageV": "mwk63pth",
  "tags": [
   "emas antam",
   "harga emas",
   "buyback emas",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478773-terpantau-turun-harga-emas-antam-hari-ini-17-november-2026-rp2515000-per-gram"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-8-800-saham-hak-suara-0-3124",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 8.800 Saham, Hak Suara 0,3124%",
  "deck": "Komisaris AKPI Henry Liem melepas 8.800 saham lewat skema repurchase agreement pada 16 November 2026, hak suaranya turun dari 0,3139% ke 0,3124%.",
  "date": "17 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Henry Liem",
   "Komisaris",
   "Laporan Kepemilikan Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-17112026-4990-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bi-perkuat-aturan-pelindungan-konsumen-digital",
  "category": "Moneter",
  "title": "BI Perkuat [Aturan] Pelindungan Konsumen Digital",
  "deck": "BI memperketat penerapan aturan pelindungan konsumen pembayaran digital dan menggandeng OJK soal penyelesaian sengketa, saat indeks keberdayaan konsumen masih di bawah kategori tertinggi.",
  "date": "17 November 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "Bank Indonesia",
   "OJK",
   "pelindungan konsumen",
   "pembayaran digital"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2825326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "emas-jelaskan-ke-bei-arus-kas-operasi-negatif-us-25-58-juta",
  "category": "Aksi Korporasi",
  "title": "EMAS Jelaskan ke BEI: [Arus Kas Operasi] Negatif US$25,58 Juta",
  "deck": "Merdeka Gold Resources menjawab permintaan penjelasan BEI: kas dari operasi minus US$25,58 juta semester I 2026, seluruh penjualan emas masih bergantung pada satu pembeli, ANTM.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "arus kas operasi",
   "konsentrasi pembeli ANTM",
   "pendanaan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a4069bb2fe_deb2820e06.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "private-placement-mbma-free-float-turun-ke-24-06",
  "category": "Aksi Korporasi",
  "title": "Private Placement MBMA: [Free Float] Turun ke 24,06%",
  "deck": "MBMA menjawab permintaan penjelasan Bursa soal private placement hingga 10,8 miliar saham: harga dan calon investor belum ditentukan, free float diperkirakan turun dari 26,47% ke 24,06%.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "private placement",
   "free float",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/85c2d38433_2a249426c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-indy-19-nov-laba-bersih-9m26-naik-ke-us-20-2-juta",
  "category": "Aksi Korporasi",
  "title": "Public Expose INDY 19 Nov: [Laba Bersih] 9M26 Naik ke US$20,2 Juta",
  "deck": "Materi Public Expose Tahunan INDY menunjukkan laba bersih 9M26 melonjak ke US$20,2 juta dari US$0,5 juta, ditopang harga batu bara dan bisnis non-batubara.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDY",
   "Public Expose",
   "Kinerja Keuangan",
   "Awak Mas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/bbc2a1569d_af6519b4cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-flmc-18-november-penambahan-kbli-jadi-perusahaan-induk",
  "category": "Aksi Korporasi",
  "title": "RUPSLB FLMC 18 November: [Penambahan KBLI] Jadi Perusahaan Induk",
  "deck": "FLMC berencana menambah KBLI Aktivitas Perusahaan Induk untuk menaungi anak usaha distribusi baru, modal awal sekitar Rp4 miliar, diputuskan lewat RUPSLB 18 November 2026.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "RUPSLB",
   "KBLI",
   "perubahan kegiatan usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/152ee22e6c_ca33bf049c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indy-jawab-bursa-sengketa-lahan-masmindo-tak-material",
  "category": "Aksi Korporasi",
  "title": "INDY Jawab Bursa: Sengketa Lahan Masmindo [Tak Material]",
  "deck": "INDY sebut sengketa lahan Masmindo di Luwu belum material, nilai kompensasi lahan yang disengketakan kurang dari 1 persen aset konsolidasian perusahaan.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDY",
   "Masmindo Dwi Area",
   "sengketa lahan",
   "Awak Mas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/feca24d19b_3dcb12a583.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "axio-targetkan-pendapatan-2026-rp2-18-triliun-tumbuh-34",
  "category": "Aksi Korporasi",
  "title": "AXIO Targetkan Pendapatan 2026 Rp2,18 Triliun, [Tumbuh] 34%",
  "deck": "Paparan publik tahunan AXIO memuat target pendapatan 2026 Rp2,18 triliun, naik 34 persen dari realisasi 2025, didukung lonjakan laba bersih sembilan bulan 2026 sebesar 74 persen.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AXIO",
   "paparan publik",
   "kinerja keuangan",
   "Tera Data Indonusa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/67f8e79979_6d63bf7b69.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-pgas-19-november-laba-9m-2026-naik-ke-us-293-juta",
  "category": "Aksi Korporasi",
  "title": "Public Expose PGAS 19 November [Diundur]: Jam 10.30-11.30 WIB",
  "deck": "PGN mengubah jam public expose tahunan dari 10.00 menjadi 10.30-11.30 WIB pada 19 November 2026, agenda dan materi laba 9M-2026 tetap sama.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGAS",
   "public expose",
   "PGN",
   "jadwal korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/40b6ce9a78_0050ccf280.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-mbma-8-desember-private-placement-10-8-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "RUPSLB MBMA 8 Desember: [Private Placement] 10,8 Miliar Saham",
  "deck": "MBMA gelar RUPS Independen 8 Desember 2026 untuk minta restu private placement hingga 10,8 miliar saham, setara 10 persen modal disetor, tanpa hak memesan efek lebih dulu.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "RUPSLB",
   "Private Placement",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2be800c419_ee686009eb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemerintah-ajukan-revisi-uu-kadin-ke-dpr-perkuat-satu-wadah-usaha",
  "category": "Bisnis",
  "title": "Pemerintah Ajukan [Revisi] UU Kadin ke DPR, Perkuat Satu Wadah Usaha",
  "deck": "Pemerintah menyerahkan daftar masukan untuk RUU Kadin ke DPR, mengusulkan enam perubahan mendasar atas UU Kadin yang berlaku sejak 1987.",
  "date": "16 November 2026",
  "image": "assets/img/pemerintah-ajukan-revisi-uu-kadin-ke-dpr-perkuat-satu-wadah-usaha.jpg",
  "imageV": "mwjaaom4",
  "tags": [
   "RUU Kadin",
   "Kementerian Perdagangan",
   "DPR",
   "Kadin"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-peran-kadin-melalui-ruu-kadin-pemerintah-serahkan-daftar-inventarisasi-masalah",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "public-expose-bipi-divestasi-sbg-rp1-79-t-dana-ke-lng",
  "category": "Aksi Korporasi",
  "title": "Public Expose BIPI: [Divestasi] SBG Rp1,79 T, Dana ke LNG",
  "deck": "BIPI memaparkan materi public expose 2026: divestasi anak usaha batu bara SBG senilai Rp1,79 triliun, dana Rp1,7 triliun dialihkan ke LNG, panas bumi, pusat data, dan pengolahan sampah.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPI",
   "divestasi",
   "public expose",
   "LNG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f68bdbb238_42a42bec12.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tmpo-jelaskan-ke-bursa-rugi-berlanjut-covenant-bank-terpenuhi",
  "category": "Aksi Korporasi",
  "title": "TMPO Jelaskan ke Bursa: Rugi Berlanjut, [Covenant] Bank Terpenuhi",
  "deck": "Tempo Inti Media menjawab permintaan penjelasan BEI atas piutang macet, aset tetap, dan pendapatan yang turun di semua segmen usaha, sembari memastikan seluruh syarat utang bank masih terpenuhi.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Tempo Inti Media",
   "piutang usaha",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2888658a0b_c78280b726.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pt-bsu-gandeng-empat-bpr-biayai-vila-premium-yogyakarta",
  "category": "Perbankan",
  "title": "PT BSU Gandeng [Empat] BPR Biayai Vila Premium Yogyakarta",
  "deck": "PT Bakrie Swasakti Utama menggandeng empat BPR daerah untuk membiayai proyek vila premium Nirwana Villas Malioboro di kawasan Golden Triangle Yogyakarta.",
  "date": "16 November 2026",
  "image": "assets/img/pt-bsu-gandeng-empat-bpr-biayai-vila-premium-yogyakarta.jpg",
  "imageV": "mwjaap2c",
  "tags": [
   "Bakrieland",
   "BPR",
   "Yogyakarta",
   "Properti"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478667-pt-bakrie-swasakti-utama-gandeng-empat-bpr-kembangkan-properti-di-yogyakarta"
 },
 {
  "slug": "pupuk-indonesia-rancang-pabrik-amonia-rendah-karbon-di-fakfak",
  "category": "Industri",
  "title": "Pupuk Indonesia Rancang Pabrik Amonia [Rendah Karbon] di Fakfak",
  "deck": "Pupuk Indonesia menggandeng Topsoe dari Denmark untuk merancang pabrik amonia-urea baru di Fakfak, Papua Barat, dengan teknologi rendah emisi.",
  "date": "16 November 2026",
  "image": "assets/img/pupuk-indonesia-rancang-pabrik-amonia-rendah-karbon-di-fakfak.jpg",
  "imageV": "mwj5uc12",
  "tags": [
   "Pupuk Indonesia",
   "Fakfak",
   "Amonia Rendah Karbon",
   "Topsoe"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/912/pupuk-indonesia-dan-topsoe-kembangkan-proyek-amonia-rendah-karbon-untuk-memperkuat-ambisi-indonesia-di-industri-petrokimia-global",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "saksi-tender-pengelola-pasar-ciparay-tak-diumumkan",
  "category": "Bisnis",
  "title": "Saksi: Tender Pengelola Pasar Ciparay Tak [Diumumkan]",
  "deck": "KPPU memeriksa saksi dalam sidang dugaan persekongkolan tender revitalisasi Pasar Ciparay, Kabupaten Bandung; saksi sebut tak ada pengumuman pemenang beauty contest.",
  "date": "16 November 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [
   "KPPU",
   "Pasar Ciparay",
   "Persaingan Usaha",
   "Kabupaten Bandung"
  ],
  "sourceUrl": "https://kppu.go.id/berita/sidang-kppu-dalami-transparansi-pemilihan-pengelola-revitalisasi-pasar-ciparay",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "visi-david-dwiputra-tambah-525-700-saham-hak-suara-0-0288",
  "category": "Aksi Korporasi",
  "title": "VISI: David Dwiputra [Tambah] 525.700 Saham, Hak Suara 0,0288%",
  "deck": "Direksi VISI, David Dwiputra, membeli 525.700 saham tidak langsung pada 11 November 2026, menambah kepemilikannya jadi 921.700 lembar.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VISI",
   "Satu Visi Putra",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-16112026-4442-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aturan-baru-djp-hapus-sanksi-administratif-wajib-pajak",
  "category": "Makroekonomi",
  "title": "Aturan Baru DJP [Hapus] Sanksi Administratif Wajib Pajak",
  "deck": "Ditjen Pajak menerbitkan PMK-71/2026 yang membuka fasilitas penghapusan sanksi administratif bagi wajib pajak, disosialisasikan lewat Kanwil DJP Sumatera Utara I.",
  "date": "16 November 2026",
  "image": "assets/img/aturan-baru-djp-hapus-sanksi-administratif-wajib-pajak.jpg",
  "imageV": "mwj5udvz",
  "tags": [
   "Pajak",
   "DJP",
   "Sanksi Administratif",
   "Sumatera Utara"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/kanwil-djp-sumut-i-perkuat-sinergi-dengan-media-dan-sosialisasikan-pmk-712026-tentang",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "dividen-interim-toto-rp10-per-saham-cair-15-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim TOTO Rp10 per Saham, [Cair] 15 Desember",
  "deck": "TOTO membagikan dividen tunai interim tahun buku 2026 sebesar Rp10 per saham, total Rp103,2 miliar, dibayarkan 15 Desember 2026.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTO",
   "dividen interim",
   "Surya Toto Indonesia",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0f8e46b6d1_494670c43e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "biif-siapkan-rp101-4-miliar-untuk-pelunasan-obligasi-6-desember",
  "category": "Aksi Korporasi",
  "title": "BIIF Siapkan Rp101,4 Miliar untuk [Pelunasan] Obligasi 6 Desember",
  "deck": "Maybank Indonesia Finance (BIIF) menyatakan telah menyiapkan Rp101,4 miliar untuk melunasi pokok dan bunga obligasi yang jatuh tempo 6 Desember 2026.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIIF",
   "Maybank Finance",
   "obligasi",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d0b0b81909_7d3d0c221d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-transaksi-afiliasi-kontrak-ti-ke-kbank-group-us-2-06-juta",
  "category": "Aksi Korporasi",
  "title": "BMAS [Transaksi Afiliasi]: Kontrak TI ke KBank Group US$2,06 Juta",
  "deck": "BMAS membayar US$2,06 juta kepada tiga perusahaan afiliasi Kasikorn Group untuk jasa IT proyek sistem perbankan inti baru, dengan kontrak berlaku hingga 2036.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "Transaksi Afiliasi",
   "Core Banking System",
   "Kasikorn Group"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ec0474d7aa_05ce16e171.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "right-issue-bmas-rp1-01-triliun-harga-pelaksanaan-rp350",
  "category": "Aksi Korporasi",
  "title": "Right Issue BMAS Rp1,01 Triliun: [Harga Pelaksanaan] Rp350",
  "deck": "BMAS menerbitkan 2,87 miliar saham baru harga Rp350 per saham lewat right issue IV senilai Rp1,01 triliun, dijamin penuh oleh pengendali KVF.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "right issue",
   "HMETD",
   "bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/48f2c489f4_8b5fd19472.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-itma-pendapatan-9m26-melonjak-90-8",
  "category": "Aksi Korporasi",
  "title": "Public Expose ITMA: Pendapatan 9M26 [Melonjak] 90,8%",
  "deck": "Materi public expose tahunan ITMA memuat kinerja 9M26: pendapatan naik 90,8% dan laba neto naik 87,7%, ditopang kontribusi entitas asosiasi dan proyek sewa pembangkit baru.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITMA",
   "public expose",
   "kinerja keuangan",
   "energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3b106259fc_24aeb3ef51.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpdp-satukan-program-peremajaan-sawit-dan-biodiesel",
  "category": "Industri",
  "title": "BPDP Satukan Program [Peremajaan] Sawit dan Biodiesel",
  "deck": "BPDP menyebut peremajaan sawit rakyat dan program biodiesel saling menopang untuk menjaga pasokan sawit bagi kebutuhan pangan dan energi nasional.",
  "date": "16 November 2026",
  "image": "assets/img/bpdp-satukan-program-peremajaan-sawit-dan-biodiesel.jpg",
  "imageV": "mwj5ueaw",
  "tags": [
   "sawit",
   "biodiesel",
   "BPDP",
   "PSR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478657-perkuat-industri-sawit-bpdp-integrasikan-program-psr-dan-biodiesel"
 },
 {
  "slug": "public-expose-brpt-19-november-laba-inti-9m26-naik-90-kali",
  "category": "Aksi Korporasi",
  "title": "Public Expose BRPT 19 November: [Laba Inti] 9M26 Naik 90 Kali",
  "deck": "Materi public expose BRPT 19 November 2026 menunjukkan pendapatan 9M26 naik 56,3% jadi US$8,69 miliar dan laba inti melonjak 90 kali dari tahun lalu.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRPT",
   "Barito Pacific",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d284f55d33_6a03495834.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-daaz-sukuk-rp378-m-cair-ke-indo-lautan-energi",
  "category": "Aksi Korporasi",
  "title": "Public Expose DAAZ: [Koreksi] Data Nikel dan Batubara Tertukar",
  "deck": "DAAZ koreksi data Public Expose: bijih nikel naik 41,8% jadi Rp4,82 triliun, batubara anjlok 71,8% jadi Rp350 miliar, membalik angka sebelumnya.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DAAZ",
   "Sukuk Wakalah",
   "Public Expose",
   "Koreksi Laporan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b528d62a50_b463f6db5b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-teken-pinjaman-us-220-juta-danai-penyertaan-modal-di-as",
  "category": "Aksi Korporasi",
  "title": "ENRG Teken Pinjaman US$220 Juta: Danai [Penyertaan Modal] di AS",
  "deck": "ENRG menandatangani fasilitas pinjaman hingga US$220 juta dengan Deutsche Bank cabang Singapura pada 13 November 2026, dananya untuk penyertaan modal anak usaha ke HighPeak Energy Inc di Amerika Serikat.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "Energi Mega Persada",
   "transaksi material",
   "pinjaman"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/119287e022_17162b6a72.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-drma-19-november-laba-bersih-9m26-naik-13-9",
  "category": "Aksi Korporasi",
  "title": "Public Expose DRMA 19 November: [Laba Bersih] 9M26 Naik 13,9%",
  "deck": "Materi public expose tahunan DRMA memuat laba bersih 9M26 Rp487,6 miliar, tumbuh 13,9%, serta rencana capex Rp400 miliar untuk 2026.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Public Expose",
   "Dharma Polimetal",
   "Akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c100041e6b_034b88ad82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-pzza-9m-2026-laba-bersih-naik-ke-rp17-1-miliar",
  "category": "Aksi Korporasi",
  "title": "Public Expose PZZA 9M-2026: [Laba Bersih] Naik ke Rp17,1 Miliar",
  "deck": "Laba bersih Sarimelati Kencana (PZZA) naik 7,6 persen jadi Rp17,1 miliar pada sembilan bulan pertama 2026, meski penjualan turun tipis dan jumlah gerai Pizza Hut menyusut jadi 576.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PZZA",
   "Sarimelati Kencana",
   "Pizza Hut",
   "Public Expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6b38af52d8_d54f73e526.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-wins-rp5-per-saham-cair-11-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim WINS Rp5 per Saham, [Cair] 11 Desember",
  "deck": "WINS menjadwalkan dividen tunai interim Rp5 per saham, total Rp22,3 miliar, dibayar 11 Desember 2026.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINS",
   "dividen interim",
   "Wintermar Offshore Marine",
   "jadwal dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7e08131d45_982b81a037.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irsx-koreksi-laporan-keuangan-maret-2026-piutang-saa-rp111-8-m",
  "category": "Aksi Korporasi",
  "title": "IRSX Koreksi Laporan Keuangan Maret 2026: [Piutang] SAA Rp111,8 M",
  "deck": "IRSX menjelaskan ke BEI koreksi laporan keuangan Maret 2026: piutang Rp9,58 miliar salah dicatat sebagai utang pemegang saham, piutang Rp111,8 miliar ke pihak terkait dipertanyakan.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRSX",
   "laporan keuangan",
   "piutang pihak berelasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/11cf2f7826_238b6bbba7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-cuan-19-november-laba-bersih-9m26-naik-ke-us-70-juta",
  "category": "Aksi Korporasi",
  "title": "Public Expose CUAN 19 November: [Laba Bersih] 9M26 Naik ke US$70 Juta",
  "deck": "CUAN akan menggelar Paparan Publik Tahunan pada 19 November 2026, memaparkan kinerja hingga September 2026: laba bersih melonjak 279 persen menjadi US$70 juta dari pendapatan US$1,11 miliar.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CUAN",
   "Public Expose",
   "Petrindo Jaya Kreasi",
   "Laba Bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/927ed4cadc_9020e19971.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "utang-luar-negeri-ri-naik-ke-us-458-9-miliar-di-triwulan-iii",
  "category": "Moneter",
  "title": "Utang Luar Negeri RI [Naik] ke US$458,9 Miliar di Triwulan III",
  "deck": "Utang luar negeri Indonesia naik ke US$458,9 miliar pada triwulan III 2026, didorong kenaikan utang pemerintah sementara utang swasta justru menyusut.",
  "date": "16 November 2026",
  "image": "assets/img/koridor-bank-sentral.jpg",
  "tags": [
   "Utang Luar Negeri",
   "APBN",
   "Surat Utang Negara",
   "Bank Indonesia"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2825126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "heal-yulisar-khiat-tambah-2-5-juta-saham-suara-6-56",
  "category": "Aksi Korporasi",
  "title": "HEAL: Yulisar Khiat [Tambah] 2,5 Juta Saham, Suara 6,56%",
  "deck": "Direksi Medikaloka Hermina membeli 2,5 juta saham HEAL pada 12 November 2026, menaikkan hak suaranya dari 6,54% menjadi 6,56%.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-16112026-3951-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-srsn-8-desember-pergantian-direksi-dan-ubah-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "RUPSLB SRSN 8 Desember: [Pergantian Direksi] dan Ubah Anggaran Dasar",
  "deck": "Indo Acidatama (SRSN) menggelar RUPSLB 8 Desember 2026 membahas pergantian direksi usai pengunduran diri satu direktur, dan revisi anggaran dasar pasal kegiatan usaha sesuai KBLI 2025.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRSN",
   "RUPSLB",
   "Indo Acidatama",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6a01e48579_39e21004f1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-trin-8-desember-pergantian-susunan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "RUPSLB TRIN 8 Desember: [Pergantian] Susunan Direksi-Komisaris",
  "deck": "TRIN memanggil RUPSLB pada 8 Desember 2026 untuk membahas pergantian direksi/komisaris dan penyesuaian anggaran dasar ke KBLI 2025.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIN",
   "RUPSLB",
   "Direksi Komisaris",
   "KBLI 2025"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9e62ba353f_ec3ab34f0b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-batu-bara-acuan-naik-lagi-ke-us-130-81-per-ton",
  "category": "Energi",
  "title": "Harga Batu Bara Acuan [Naik] Lagi ke US$130,81 per Ton",
  "deck": "Kementerian ESDM menetapkan HBA periode 15-30 November 2026 sebesar US$130,81 per ton, naik 4,15 persen dari periode sebelumnya dan 28 persen dari tahun lalu.",
  "date": "16 November 2026",
  "image": "assets/img/harga-batu-bara-acuan-naik-lagi-ke-us-130-81-per-ton.jpg",
  "imageV": "mwiv8j1i",
  "tags": [
   "HBA",
   "Batu Bara",
   "ESDM",
   "Royalti Tambang"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hba-periode-kedua-november-2026-naik-415-persen-jadi-usd-13081-per-ton",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "raam-ram-jethmal-punjabi-tambah-1-1-juta-saham-suara-68-87",
  "category": "Aksi Korporasi",
  "title": "RAAM: Ram Jethmal Punjabi [Tambah] 1,1 Juta Saham, Suara 68,87%",
  "deck": "Direksi RAAM, Ram Jethmal Punjabi, membeli 1,1 juta saham pada 12 November 2026 seharga Rp113 sampai Rp125 per saham, menaikkan hak suaranya menjadi 68,87 persen.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RAAM",
   "Tripar Multivision Plus",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-16112026-8597-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-kurniadi-patriawan-lepas-441-juta-saham-suara-0-21",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Kurniadi Patriawan [Lepas] 441 Juta Saham, Suara 0,21%",
  "deck": "Direksi NSSS Kurniadi Patriawan melepas 441 juta saham atau 90,2 persen kepemilikannya pada 12 November 2026, hak suara turun dari 2,06 persen menjadi 0,21 persen.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "kepemilikan saham",
   "direksi",
   "pinjaman saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-16112026-6081-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtla-yulie-sekuritas-jual-13-05-juta-saham-suara-ke-4-94",
  "category": "Aksi Korporasi",
  "title": "MTLA: Yulie Sekuritas [Jual] 13,05 Juta Saham, Suara ke 4,94%",
  "deck": "Yulie Sekuritas menjual 13,05 juta saham MTLA pada 13 November 2026 di harga Rp690, memangkas hak suara dari 5,12% menjadi 4,94%, turun di bawah ambang 5%.",
  "date": "16 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTLA",
   "Yulie Sekuritas",
   "kepemilikan saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-16112026-0581-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nvidia-jensen-huang-mundur-dua-anak-jadi-sorotan",
  "category": "Teknologi",
  "title": "NVIDIA: Jensen Huang [Mundur], Dua Anak Jadi Sorotan",
  "deck": "Jensen Huang disebut mundur dari kursi CEO dan direksi NVIDIA, sementara dua anaknya, Madison dan Spencer Huang, makin disorot sebagai calon penerus.",
  "date": "16 November 2026",
  "image": "assets/img/nvidia-jensen-huang-mundur-dua-anak-jadi-sorotan.jpg",
  "imageV": "mwig82on",
  "tags": [
   "NVIDIA",
   "Jensen Huang",
   "Madison Huang",
   "Suksesi CEO"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478567-apakah-jadi-penerus-tahta-nvidia-ini-sosok-madison-spencer-anak-jensen-huang"
 },
 {
  "slug": "asean-sepakati-deklarasi-mineral-kritis-di-ktt-manila",
  "category": "Energi",
  "title": "ASEAN Sepakati Deklarasi [Mineral] Kritis di KTT Manila",
  "deck": "KTT ke-49 ASEAN di Manila menyepakati deklarasi mineral kritis sebagai dasar kerja sama rantai nilai, dari eksplorasi hingga daur ulang, di kawasan Asia Tenggara.",
  "date": "15 November 2026",
  "image": "assets/img/asean-sepakati-deklarasi-mineral-kritis-di-ktt-manila.jpg",
  "imageV": "mwi189k4",
  "tags": [
   "ASEAN",
   "mineral kritis",
   "hilirisasi",
   "KTT ASEAN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478524-indonesia-ambil-peran-strategis-dalam-deklarasi-mineral-kritis-asean"
 },
 {
  "slug": "20-produk-umkm-kurasi-kemendag-masuk-jaringan-indogrosir",
  "category": "UMKM",
  "title": "20 Produk UMKM Kurasi Kemendag Masuk Jaringan [Indogrosir]",
  "deck": "Kemendag menempatkan 20 produk UMKM hasil kurasi Pilihan Busan ke rak Indogrosir, menyusul sekitar 800 produk UMKM lain yang sudah tersedia di jaringan itu.",
  "date": "15 November 2026",
  "image": "assets/img/20-produk-umkm-kurasi-kemendag-masuk-jaringan-indogrosir.jpg",
  "imageV": "mwhvyepx",
  "tags": [
   "UMKM",
   "Indogrosir",
   "Kemendag",
   "ritel modern"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/sinergi-program-pilihan-busan-kemendag-boyong-20-produk-umkm-potensial-ke-jaringan-indogrosir",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "petani-stroberi-ciwidey-rasakan-bunga-mekaar-8",
  "category": "UMKM",
  "title": "Petani Stroberi Ciwidey Rasakan Bunga [Mekaar] 8%",
  "deck": "Leni, petani stroberi di Ciwidey, mengandalkan pembiayaan PNM Mekaar berbiaya 8 persen untuk menjaga modal usahanya tetap stabil.",
  "date": "15 November 2026",
  "image": "assets/img/petani-stroberi-ciwidey-rasakan-bunga-mekaar-8.jpg",
  "imageV": "mwhvyf3b",
  "tags": [
   "PNM Mekaar",
   "UMKM",
   "petani stroberi",
   "pembiayaan mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478518-kisah-leni-petani-stroberi-di-rancabali-yang-rasakan-manisnya-mekaar-8-persen"
 },
 {
  "slug": "mind-id-klaim-tambang-ri-topang-energi-terbarukan",
  "category": "Energi",
  "title": "MIND ID Klaim Tambang RI Topang Energi [Terbarukan]",
  "deck": "MIND ID menyebut nikel, tembaga, dan aluminium jadi bahan utama energi terbarukan, sembari mengklaim sudah mereklamasi lebih dari 8.000 hektare lahan tambang hingga 2025.",
  "date": "15 November 2026",
  "image": "assets/img/mind-id-klaim-tambang-ri-topang-energi-terbarukan.jpg",
  "imageV": "mwhvyfhb",
  "tags": [
   "MIND ID",
   "nikel",
   "energi terbarukan",
   "reklamasi tambang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478513-transformasi-industri-pertambangan-indonesia-dalam-mendukung-energi-terbarukan"
 },
 {
  "slug": "asean-adopsi-deklarasi-mineral-kritis-di-ktt-manila",
  "category": "Energi",
  "title": "ASEAN Adopsi [Deklarasi] Mineral Kritis di KTT Manila",
  "deck": "Para pemimpin ASEAN mengadopsi deklarasi mineral kritis di KTT ke-49 Manila, menyepakati definisi dan daftar bersama serta strategi rantai pasok kawasan, dengan kerja sama bersifat sukarela.",
  "date": "15 November 2026",
  "image": "assets/img/asean-adopsi-deklarasi-mineral-kritis-di-ktt-manila.jpg",
  "imageV": "mwhq4fp2",
  "tags": [
   "ASEAN",
   "Mineral Kritis",
   "KTT ASEAN",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/asean-adopsi-deklarasi-mineral-kritis-indonesia-dorong-penguatan-rantai-pasok-kawasan",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "brilink-agen-di-medan-jadi-sumber-penghidupan-warga",
  "category": "Perbankan",
  "title": "BRILink Agen di Medan Jadi Sumber [Penghidupan] Warga",
  "deck": "Satu agen BRILink di Medan Perjuangan kini meraup omzet belasan juta rupiah sebulan, melayani transfer, tagihan, hingga penyaluran bantuan pangan bagi warga sekitar.",
  "date": "15 November 2026",
  "image": "assets/img/brilink-agen-di-medan-jadi-sumber-penghidupan-warga.jpg",
  "imageV": "mwhq4g65",
  "tags": [
   "BRILink",
   "BRI",
   "Medan",
   "agen bank"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478507-brilink-agen-berkah-nasution-di-medan-bantu-tingkatkan-penghidupan-warga"
 },
 {
  "slug": "ri-tekankan-prinsip-saling-menguntungkan-di-asean-power-grid",
  "category": "Energi",
  "title": "RI Tekankan Prinsip [Saling Menguntungkan] di ASEAN Power Grid",
  "deck": "Dalam KTT ASEAN ke-49 di Manila, Indonesia mendorong agar interkoneksi listrik kawasan tetap menghormati regulasi dan kepentingan nasional tiap negara anggota.",
  "date": "15 November 2026",
  "image": "assets/img/ri-tekankan-prinsip-saling-menguntungkan-di-asean-power-grid.jpg",
  "imageV": "mwhoe848",
  "tags": [
   "ASEAN Power Grid",
   "Bahlil Lahadalia",
   "KTT ASEAN",
   "Mineral Kritis"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/dampingi-presiden-di-ktt-asean-ke-49-bahlil-kawal-kepentingan-nasional-dalam-asean-power-grid",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "smexpo-2026-usai-40-umkm-binaan-pertamina-tutup-panggung",
  "category": "UMKM",
  "title": "SMEXPO 2026 Usai, [40] UMKM Binaan Pertamina Tutup Panggung",
  "deck": "Hari terakhir Pertamina SMEXPO 2026 di Mall Kota Kasablanka Jakarta diisi talkshow, workshop tenun, dan panggung hiburan sebelum seremoni penutupan.",
  "date": "15 November 2026",
  "image": "assets/img/smexpo-2026-usai-40-umkm-binaan-pertamina-tutup-panggung.jpg",
  "imageV": "mwhoe8nu",
  "tags": [
   "pertamina",
   "smexpo",
   "umkm",
   "jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478486-ulik-tren-bisnis-hingga-workshop-tenun-di-hari-terakhir-pertamina-smexpo-2026"
 },
 {
  "slug": "merger-smbr-bmu-rasio-konversi-belum-final-target-efektif-2027",
  "category": "Aksi Korporasi",
  "title": "Merger SMBR-BMU: [Rasio Konversi] Belum Final, Target Efektif 2027",
  "deck": "SMBR menjawab permintaan penjelasan BEI soal merger dengan BMU: rasio konversi saham dan potensi dilusi belum ditetapkan, target efektif Semester I 2027.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "merger",
   "Semen Baturaja",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/3b558c9b5a_dad85ec97f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-spto-rp35-per-saham-cair-10-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim SPTO Rp35 per Saham, [Cair] 10 Desember",
  "deck": "Surya Pertiwi membagikan dividen interim tunai Rp94,5 miliar untuk tahun buku 2026, dibayar 10 Desember setelah recording date 26 November.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPTO",
   "dividen interim",
   "Surya Pertiwi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/eec805de86_d2a4a37f7c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-chem-laba-bersih-turun-64-akibat-rugi-kurs",
  "category": "Aksi Korporasi",
  "title": "Public Expose CHEM: Laba Bersih [Turun] 64% Akibat Rugi Kurs",
  "deck": "Dalam public expose 12 November, manajemen CHEM mengungkap laba bersih turun 64% meski laba kotor naik, akibat kerugian kurs dari pelemahan rupiah.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CHEM",
   "Public Expose",
   "Laba Bersih",
   "Rugi Kurs"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b5cea0014e_d77a2efa60.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-jawab-bursa-lanjutan-iii-akuisisi-mti-rp0-tanggung-rp15-m",
  "category": "Aksi Korporasi",
  "title": "BIKE Jawab Bursa Lanjutan III: [Akuisisi] MTI Rp0, Tanggung Rp15 M",
  "deck": "BIKE menanggapi permintaan penjelasan ketiga Bursa: akuisisi 99% saham MTI dibeli Rp0 karena liabilitasnya Rp15 miliar, serta koreksi pinjaman PMJ Rp125 miliar.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "Bursa Efek Indonesia",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/cf4536c0c5_d3c9a375c6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-blta-laba-berjalan-naik-ke-us-5-5-juta",
  "category": "Aksi Korporasi",
  "title": "Public Expose BLTA: [Laba] Berjalan Naik ke US$5,5 Juta",
  "deck": "Dalam public expose tahunan 12 November, BLTA melaporkan laba berjalan naik jadi US$5,5 juta dari US$2,6 juta sampai kuartal III 2026, meski laba kotor justru turun.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTA",
   "public expose",
   "laba bersih",
   "rasio lancar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/50541393ec_fd4d55f41e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smra-bentuk-usaha-patungan-mdcg-smip-kuasai-60-saham",
  "category": "Aksi Korporasi",
  "title": "SMRA Bentuk [Usaha Patungan] MDCG, SMIP Kuasai 60% Saham",
  "deck": "SMIP, anak usaha SMRA, mendirikan PT Mahakarya Duta CitraGemilang bersama PT Duta Putra Mahkota dengan modal awal Rp1,5 miliar dan kepemilikan 60 persen.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMRA",
   "usaha patungan",
   "SMIP",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/402eef1e33_2d72df847a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "coin-teken-perjanjian-rp200-miliar-akuisisi-10-saham-mig",
  "category": "Aksi Korporasi",
  "title": "COIN Teken Perjanjian Rp200 Miliar: [Akuisisi] 10% Saham MIG",
  "deck": "COIN menandatangani perjanjian pengambilan saham bersyarat senilai Rp200 miliar untuk menguasai 10 persen saham PT Mitra Informatika Gemilang.",
  "date": "15 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "COIN",
   "akuisisi",
   "investasi",
   "MIG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ea615d3e32_3d51f4103d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-yogyakarta-awasi-rantai-pangan-jelang-nataru",
  "category": "Bisnis",
  "title": "KPPU Yogyakarta [Awasi] Rantai Pangan Jelang Nataru",
  "deck": "KPPU Yogyakarta memperkuat koordinasi dengan Disperindag DIY untuk mengawasi rantai distribusi pangan dan mencegah praktik usaha tidak sehat menjelang Natal dan Tahun Baru 2027.",
  "date": "15 November 2026",
  "image": "assets/img/kppu-yogyakarta-awasi-rantai-pangan-jelang-nataru.jpg",
  "imageV": "mwgo6fxn",
  "tags": [
   "KPPU",
   "Pangan",
   "Yogyakarta",
   "Nataru"
  ],
  "kreditFoto": "Komisi Pengawas Persaingan Usaha",
  "sourceUrl": "https://kppu.go.id/berita/kppu-yogyakarta-perkuat-pengawasan-persaingan-jaga-stabilitas-pangan-jelang-nataru",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "petrokimia-gresik-pamer-dekarbonisasi-pupuk-di-cop31",
  "category": "BUMN",
  "title": "Petrokimia Gresik Pamer [Dekarbonisasi] Pupuk di COP31",
  "deck": "Petrokimia Gresik memaparkan strategi dekarbonisasi dari pabrik hingga lahan petani di forum iklim COP31 Turkiye, termasuk potensi pemangkasan emisi lewat pemupukan berimbang.",
  "date": "14 November 2026",
  "image": "assets/img/petrokimia-gresik-pamer-dekarbonisasi-pupuk-di-cop31.jpg",
  "imageV": "mwgo6gci",
  "tags": [
   "dekarbonisasi",
   "petrokimia gresik",
   "cop31 turkiye",
   "pupuk berimbang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478397-tampil-di-cop31-petrokimia-gresik-perluas-dekarbonisasi-hingga-ke-lahan-petani"
 },
 {
  "slug": "indonesia-teken-asean-defa-tunggu-ratifikasi-untuk-berlaku",
  "category": "Global",
  "title": "Indonesia Teken ASEAN DEFA, Tunggu [Ratifikasi] untuk Berlaku",
  "deck": "Seluruh negara ASEAN menandatangani ASEAN DEFA di Manila. Indonesia kini menyiapkan ratifikasi dan regulasi domestik sebelum perjanjian ekonomi digital kawasan ini berlaku penuh.",
  "date": "14 November 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "ASEAN DEFA",
   "ekonomi digital",
   "QRIS",
   "UMKM"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7225/asean-defa-mesin-baru-pertumbuhan-ekonomi-indonesia-dorong-potensi-ekonomi-digital-asean-capai-usd2-triliun-pada-2030",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ica-cepa-ri-kanada-mulai-berlaku-1-desember-2026",
  "category": "Global",
  "title": "ICA-CEPA RI-Kanada Mulai Berlaku [1 Desember] 2026",
  "deck": "Indonesia dan Kanada menandai implementasi ICA-CEPA yang menghapus tarif 3.100 pos mulai 1 Desember 2026, dibahas Menko Airlangga di sela ASEAN Summit Manila.",
  "date": "14 November 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "ICA-CEPA",
   "Indonesia-Kanada",
   "Airlangga Hartarto",
   "ASEAN Summit"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7226/menko-airlangga-optimis-ica-cepa-bisa-dongkrak-perdagangan-ri-kanada-hingga-dua-kali-lipat",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "pertamina-tambah-beasiswa-dan-mangrove-di-kalimantan",
  "category": "BUMN",
  "title": "Pertamina Tambah [Beasiswa] dan Mangrove di Kalimantan",
  "deck": "Pertamina Foundation dan PHI menandai lima tahun program mangrove Hutan Lestari Mahakam sekaligus mengukuhkan 12 penerima beasiswa baru untuk mahasiswa Kalimantan.",
  "date": "14 November 2026",
  "image": "assets/img/pertamina-tambah-beasiswa-dan-mangrove-di-kalimantan.jpg",
  "imageV": "mwgkv8p6",
  "tags": [
   "Pertamina Foundation",
   "Mangrove Mahakam",
   "Beasiswa Kalimantan",
   "CSR BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478376-membangun-kalimantan-dari-dua-sisi-pemulihan-hutan-dan-pendidikan-berkelanjutan"
 },
 {
  "slug": "akademisi-program-nelayan-kkp-bisa-atasi-kemiskinan-pesisir",
  "category": "UMKM",
  "title": "Akademisi: Program Nelayan KKP Bisa Atasi [Kemiskinan] Pesisir",
  "deck": "Pengamat sosial ekonomi menilai program Kampung Nelayan Merah Putih KKP berpotensi mengurai ketergantungan nelayan pada tengkulak dan memperbaiki kesejahteraan pesisir.",
  "date": "14 November 2026",
  "image": "assets/img/akademisi-program-nelayan-kkp-bisa-atasi-kemiskinan-pesisir.jpg",
  "imageV": "mwgkv934",
  "tags": [
   "KKP",
   "nelayan",
   "pesisir",
   "koperasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/478374-gebrakan-kkp-dinilai-tingkatkan-kesejahteraan-nelayan-atasi-kemiskinan-pesisir"
 },
 {
  "slug": "presiden-prabowo-ekonomi-tumbuh-5-47-kaji-hemat-energi",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo: Ekonomi Tumbuh [5,47]%, Kaji Hemat Energi",
  "deck": "Ratas di Istana Bogor membahas indikator ekonomi terbaru, rencana efisiensi BBM dan listrik, serta percepatan pabrik pakan dan peternakan ayam.",
  "date": "14 November 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "inflasi pangan",
   "pertumbuhan ekonomi",
   "efisiensi energi",
   "pakan ternak"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7224/cermati-perkembangan-ekonomi-nasional-pemerintah-dorong-efisiensi-energi-dan-penguatan-sektor-pertanian-peternakan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "asean-teken-pakta-digital-target-us-2-triliun-di-2030",
  "category": "Global",
  "title": "ASEAN Teken Pakta Digital, Target [US$2 Triliun] di 2030",
  "deck": "Indonesia dan sembilan negara ASEAN lain menandatangani ASEAN DEFA di Manila, kerangka kerja sama digital yang menargetkan ekonomi digital kawasan tumbuh jadi US$2 triliun pada 2030.",
  "date": "14 November 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "ASEAN",
   "DEFA",
   "ekonomi digital",
   "UMKM"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7223/negara-negara-anggota-asean-resmi-tandatangani-asean-defa-digital-economy-framework-agreement-yang-diprakarsai-indonesia",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "utang-bi-pemerintah-era-krisis-1998-lunas",
  "category": "Moneter",
  "title": "Utang BI-Pemerintah Era Krisis 1998 [Lunas]",
  "deck": "Obligasi BI terkait dukungan likuiditas krisis 1997-1998 resmi lunas Agustus 2026, seiring BI dan pemerintah menyiapkan skema debt switching untuk surat utang negara.",
  "date": "14 November 2026",
  "image": "assets/img/brankas-uang-sentral.jpg",
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
  "image": "assets/img/teknologi-logistik.jpg",
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
  "slug": "beer-maju-minuman-minahasa-jual-24-5-juta-saham-hak-suara-75-58",
  "category": "Aksi Korporasi",
  "title": "BEER: Maju Minuman Minahasa [Jual] 24,5 Juta Saham, Hak Suara 75,58%",
  "deck": "Direksi BEER, PT Maju Minuman Minahasa, melepas 24,5 juta saham tidak langsung pada 11 November 2026 di harga Rp52 untuk divestasi, hak suara turun ke 75,58%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEER",
   "kepemilikan saham",
   "divestasi",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-5114-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "winr-pemenang-nusantara-jual-48-7-juta-saham-suara-41-81",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemenang Nusantara [Jual] 48,7 Juta Saham, Suara 41,81%",
  "deck": "Pemegang saham Pemenang Nusantara Internasional melepas 48,7 juta saham WINR senilai sekitar Rp785,2 juta untuk menambah porsi saham beredar bebas.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "Pemenang Nusantara Internasional"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-2960-00.pdf-0.pdf",
  "sourceLabel": "IDX"
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
  "slug": "ikai-direksi-desra-firza-ghazfan-tambah-100-000-saham-suara-0-08",
  "category": "Aksi Korporasi",
  "title": "IKAI: Direksi Desra Tambah 200.000 Saham, Suara Tetap 0,08%",
  "deck": "Direksi IKAI, Desra Firza Ghazfan, melaporkan pembelian tambahan 100.000 saham pada 11 November 2026 seharga Rp19 per saham, melengkapi transaksi serupa di hari yang sama.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IKAI",
   "laporan kepemilikan",
   "direksi",
   "saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-1383-00.pdf-0.pdf",
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
  "slug": "film-samuel-sekuritas-indonesia-tambah-757-500-saham-suara-11-27",
  "category": "Aksi Korporasi",
  "title": "FILM: Samuel Sekuritas Indonesia Jual 214,13 Juta Saham, Suara 9,30%",
  "deck": "Direksi Samuel Sekuritas Indonesia melepas 214.134.600 saham FILM lewat pencairan repo pada 16 November 2026, hak suara turun dari 11,27% menjadi 9,30%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "Samuel Sekuritas Indonesia",
   "Laporan Kepemilikan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-7900-00.pdf-0.pdf",
  "sourceLabel": "IDX"
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
  "image": "assets/img/pasar-beras.jpg",
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
  "image": "assets/img/mesin-hitung-uang.jpg",
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
  "slug": "srtg-edwin-soeryadjaya-tambah-1-27-juta-saham-hak-suara-36-13",
  "category": "Aksi Korporasi",
  "title": "SRTG: Edwin Soeryadjaya [Tambah] 1,27 Juta Saham, Hak Suara 36,13%",
  "deck": "Komisaris SRTG Edwin Soeryadjaya membeli 1.267.100 saham lewat dua transaksi tidak langsung pada 11-12 November 2026, menaikkan hak suaranya ke 36,1341%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Saratoga Investama Sedaya",
   "Edwin Soeryadjaya",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-8762-00.pdf-0.pdf",
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
  "slug": "kino-komisaris-yamashita-beli-87-000-saham-hak-suara-0-0061",
  "category": "Aksi Korporasi",
  "title": "KINO: Komisaris Yamashita [Beli] 87.000 Saham, Hak Suara 0,0061%",
  "deck": "Komisaris KINO berstatus warga negara asing, Mitsuhiro Yamashita, membeli total 87.000 saham secara tidak langsung sepanjang Juli-Agustus 2026, hak suaranya naik ke 0,0061 persen.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KINO",
   "Dewan Komisaris",
   "kepemilikan saham",
   "Mitsuhiro Yamashita"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-0240-00.pdf-0.pdf",
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
  "slug": "mdla-komisaris-stanley-tambah-15-000-saham-suara-tetap-0-003",
  "category": "Aksi Korporasi",
  "title": "MDLA: Komisaris Stanley [Tambah] 15.000 Saham, Suara Tetap 0,003%",
  "deck": "Komisaris MDLA Stanley Ch. Budihardja menambah 15.000 saham lewat dua transaksi pembelian tidak langsung pada 11 November 2026, hak suaranya tetap 0,003%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Laporan Kepemilikan Saham",
   "Dewan Komisaris",
   "Stanley Ch. Budihardja"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-9755-00.pdf-0.pdf",
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
  "image": "assets/img/10-merek-kuliner-ri-teken-mou-ekspansi-ke-5-negara.jpg",
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
  "slug": "pkpk-direksi-haryanto-sofian-tambah-33-800-saham-suara-0-24",
  "category": "Aksi Korporasi",
  "title": "PKPK: Direksi Haryanto Sofian [Tambah] 33.800 Saham, Suara 0,24%",
  "deck": "Direktur PKPK Haryanto Sofian membeli 33.800 saham pada 12 November 2026, menambah kepemilikannya menjadi 2.857.700 lembar, namun hak suaranya tetap di 0,24 persen.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PKPK",
   "Paragon Karya Perkasa",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-2092-00.pdf-0.pdf",
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
  "slug": "drma-komisaris-jual-2-juta-saham-hak-suara-jadi-1-96",
  "category": "Aksi Korporasi",
  "title": "DRMA: Komisaris [Jual] 2 Juta Saham, Hak Suara Jadi 1,96%",
  "deck": "Komisaris Dharma Polimetal, Noel Aelyo Laras Kusuma Negara, melepas 2 juta saham pada 28 Oktober 2026 seharga Rp850 per saham, hak suaranya turun dari 2,00% menjadi 1,96%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DRMA",
   "Dharma Polimetal",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-2999-00.pdf-0.pdf",
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
  "image": "assets/img/gudang-bahan-baku.jpg",
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
  "slug": "dgik-global-dinamika-kencana-tambah-189-5-juta-saham-suara-68-2",
  "category": "Aksi Korporasi",
  "title": "DGIK: Global Dinamika Kencana [Tambah] 189,5 Juta Saham, Suara 68,2%",
  "deck": "Global Dinamika Kencana menambah 189,5 juta saham DGIK lewat transaksi repo seharga Rp150 per saham pada 12 November 2026, hak suaranya naik dari 64,80% menjadi 68,20%.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGIK",
   "Nusa Konstruksi Enjiniring",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-4569-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtla-direksi-andi-surya-kurnia-tambah-40-000-saham-suara-0",
  "category": "Aksi Korporasi",
  "title": "MTLA: Direksi Andi Surya Kurnia [Tambah] 40.000 Saham, Suara 0%",
  "deck": "Direksi MTLA Andi Surya Kurnia menambah 40.000 saham lewat pembelian tidak langsung pada 11 November 2026, tapi hak suaranya tetap 0,00 persen.",
  "date": "13 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTLA",
   "Direksi",
   "Kepemilikan Saham",
   "Metropolitan Land"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-13112026-3585-00.pdf-0.pdf",
  "sourceLabel": "IDX"
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
  "title": "Public Expose MDIA 17 November: Waktu [Dikoreksi] Lagi ke 14.00 WIB",
  "deck": "MDIA mengoreksi lagi jadwal public expose tahunan 17 November 2026, kali ini waktunya berubah dari pukul 14.30 WIB menjadi 14.00 WIB, sekaligus menambah tautan registrasi Zoom.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDIA",
   "Public Expose",
   "Intermedia Capital",
   "ANTV"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/be1959a4d6_d10ee1712e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-viva-6m2026-laba-bersih-anjlok-95-jadi-rp60-miliar",
  "category": "Aksi Korporasi",
  "title": "Public Expose VIVA 17 November: Jadwal Diubah Jadi 14.00 WIB",
  "deck": "VIVA mengoreksi ulang jadwal Public Expose Tahunan 2026, kini dipastikan pukul 14.00 WIB pada Selasa, 17 November 2026, setelah sebelumnya diumumkan pukul 14.30 WIB.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VIVA",
   "Public Expose",
   "Konversi Utang Saham",
   "Laba Bersih"
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
  "image": "assets/img/investor-ritel-ponsel.jpg",
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
  "image": "assets/img/jalur-perakitan.jpg",
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
  "title": "RUPO PTPP 11 November: Bunga ke-21 Macet, [Restrukturisasi] Ditolak",
  "deck": "PTPP mengoreksi hasil RUPO 11 November: bunga yang telat dibayar dan diusulkan ditunda ternyata bunga ke-21, bukan ke-18. Keempat usulan restrukturisasi tetap ditolak.",
  "date": "12 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTPP",
   "Obligasi",
   "RUPO",
   "Restrukturisasi Utang"
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
  "image": "assets/img/pasar-tradisional-pagi.jpg",
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
  "image": "assets/img/petani-sawah.jpg",
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
 }
];
