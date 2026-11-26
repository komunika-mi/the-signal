// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "pemerintah-rilis-stimulus-akhir-tahun-kejar-pertumbuhan-8-2029",
  "category": "Makroekonomi",
  "title": "Pemerintah Rilis Stimulus Akhir Tahun, Kejar Pertumbuhan [8%] 2029",
  "deck": "Pemerintah menyiapkan stimulus daya beli akhir tahun dan mendorong investasi AI serta semikonduktor demi pertumbuhan 8 persen pada 2029, usai ekonomi tumbuh 5,47 persen di triwulan III 2026.",
  "date": "26 November 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "pertumbuhan ekonomi",
   "stimulus akhir tahun",
   "IEU-CEPA",
   "Airlangga Hartarto"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7252/dorong-akselerasi-pertumbuhan-ekonomi-menuju-8-pemerintah-perkuat-stimulus-dan-peran-dunia-usaha",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "restrukturisasi-utang-bltz-pinjaman-bukopin-jadi-rp100-m",
  "category": "Aksi Korporasi",
  "title": "Restrukturisasi Utang BLTZ: Pinjaman Bukopin Jadi [Rp100 M]",
  "deck": "BLTZ merombak perjanjian kredit dengan KB Bukopin: saldo pinjaman turun jadi Rp100 miliar setelah pelunasan Rp20 miliar, jatuh tempo diperpanjang satu tahun ke 5 Desember 2027.",
  "date": "26 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "restrukturisasi utang",
   "KB Bukopin",
   "CGV"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261126_BLTZ_E019_9e233eae-7d0d-472a-82be-17a6248c9b5e-20261126093238.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "restrukturisasi-utang-bltz-pinjaman-bukopin-turun-ke-rp40-m",
  "category": "Aksi Korporasi",
  "title": "Restrukturisasi Utang BLTZ: Pinjaman Bukopin [Turun] ke Rp40 M",
  "deck": "BLTZ memangkas fasilitas pinjaman Bank KB Bukopin dari Rp90 miliar menjadi Rp40 miliar setelah melunasi Rp50 miliar, sekaligus memperpanjang jatuh tempo satu tahun ke 25 November 2027.",
  "date": "26 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BLTZ",
   "restrukturisasi utang",
   "KB Bukopin",
   "CGV"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261126_BLTZ_E019_cc7cb7ad-a22b-4569-b6be-cbbb9b78ca91-20261126090450.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "snlk-tak-ada-aksi-korporasi-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "SNLK: [Tak Ada] Aksi Korporasi di Balik Volatilitas Saham",
  "deck": "Menjawab permintaan penjelasan Bursa soal volatilitas saham, SNLK menyatakan tak ada informasi material, rencana aksi korporasi, atau perubahan kepemilikan dari pemegang saham utama dan pengendali.",
  "date": "26 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SNLK",
   "volatilitas saham",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261126_SNLK_E023A_f28e6de7-c3e9-4819-94a4-97777acfa72a-20261126090037.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-jsmr-25-november-direksi-rivan-achmad-jadi-dirut-baru",
  "category": "Aksi Korporasi",
  "title": "RUPSLB JSMR 25 November: [Direksi] Rivan Achmad Jadi Dirut Baru",
  "deck": "RUPSLB Jasa Marga pada 25 November 2026 menyetujui susunan baru Direksi dan Dewan Komisaris, dengan Rivan Achmad Purwantono sebagai Direktur Utama.",
  "date": "26 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSMR",
   "RUPSLB",
   "Direksi",
   "Jasa Marga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261126_JSMR_E019_0b50e65d-46fb-4ce0-9fe1-cf6004ae8d79-20261126084401.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pembina-umkm-naik-kelas-raih-icc100-award-dari-bpkn",
  "category": "UMKM",
  "title": "Pembina UMKM Naik Kelas Raih [ICC100] Award dari BPKN",
  "deck": "Willy Lesmana Putra, Ketua Dewan Pembina UMKM Naik Kelas, menerima penghargaan ICC100 Award 2026 dari BPKN-RI atas perannya mendampingi pelaku usaha kecil secara hukum dan bisnis.",
  "date": "26 November 2026",
  "image": "assets/img/pembina-umkm-naik-kelas-raih-icc100-award-dari-bpkn.jpg",
  "imageV": "mwwl9f10",
  "tags": [
   "UMKM",
   "BPKN RI",
   "Kadin Indonesia",
   "Pendampingan Hukum"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480377-unggul-dalam-pendampingan-umkm-naik-kelas-terima-penghargaan-dari-bpkn-ri"
 },
 {
  "slug": "kereta-trans-kalimantan-digarap-swasta-tanpa-apbn",
  "category": "Bisnis",
  "title": "Kereta Trans-Kalimantan Digarap Swasta, Tanpa [APBN]",
  "deck": "Menhub Dudy Purwagandhi mendukung proyek kereta Trans-Kalimantan yang digarap PT Nusa Investama Utama bersama perusahaan China CREC tanpa menggunakan dana APBN.",
  "date": "25 November 2026",
  "image": "assets/img/kereta-trans-kalimantan-digarap-swasta-tanpa-apbn.jpg",
  "imageV": "mwwfzdc7",
  "tags": [
   "kereta",
   "trans-kalimantan",
   "apbn",
   "prabowo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480369-menhub-dudy-sambut-proyek-kereta-trans-kalimantan-tanpa-apbn"
 },
 {
  "slug": "rights-issue-ii-bris-hmetd-6-8-miliar-saham-dilusi-maks-12-85",
  "category": "Aksi Korporasi",
  "title": "Rights Issue II BRIS: [HMETD] 6,8 Miliar Saham, Dilusi Maks 12,85%",
  "deck": "BSI (BRIS) akan menerbitkan sebanyak-banyaknya 6,8 miliar saham baru Seri B lewat PMHMETD II, setara 12,85% modal setelah rights issue, untuk mendanai penyaluran pembiayaan.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "rights issue",
   "HMETD",
   "Bank Syariah Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_BRIS_E019_aefefa5e-5f6c-4068-a1e0-8be014dd3696-20261125225433.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-rencanakan-transaksi-material-sgd555-juta-rupslb-27-november",
  "category": "Aksi Korporasi",
  "title": "TOBA Rencanakan Transaksi Material SGD555 Juta, [RUPSLB] 27 November",
  "deck": "Anak usaha TOBA di Singapura, SBTH, akan menerbitkan saham preferen dan waran sintetis senilai hingga SGD555 juta ke investor global, RUPSLB 27 November 2026.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "transaksi material",
   "RUPSLB",
   "SBTH"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_TOBA_E019_1a444f1b-5879-4b7f-881a-93d340d1cb11-20261125224429.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "delegasi-animasi-indonesia-ke-siggraph-asia-2026-malaysia",
  "category": "Industri",
  "title": "Delegasi Animasi Indonesia ke [SIGGRAPH] Asia 2026 Malaysia",
  "deck": "Kemendag memfasilitasi enam pelaku industri animasi tampil di SIGGRAPH Asia 2026 di Kuala Lumpur, 1-5 Desember, sembari menyorot ekspor jasa gim dan animasi RI yang terus tumbuh sejak 2019.",
  "date": "25 November 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "SIGGRAPH Asia 2026",
   "ekspor animasi",
   "industri kreatif",
   "AINAKI"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/industri-kreatif-indonesia-unjuk-karya-di-negeri-jiran-melalui-siggraph-asia-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "asdm-laba-naik-13-1-meski-underwriting-negatif-rp0-8-m",
  "category": "Aksi Korporasi",
  "title": "ASDM: Laba Naik 13,1% meski [Underwriting] Negatif Rp0,8 M",
  "deck": "Laba Asuransi Dayin Mitra naik 13,1% jadi Rp15,59 miliar, tapi bisnis inti asuransinya negatif Rp0,80 miliar dan laba ditopang penuh hasil investasi.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASDM",
   "Asuransi Dayin Mitra",
   "reasuransi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_ASDM_E023A_c3f3b8b8-3f90-4ad2-b3e5-2028f5589353-20261125220537.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-revisi-lk-kuartal-iii-rugi-bertambah-jadi-rp33-54-miliar",
  "category": "Aksi Korporasi",
  "title": "TRUE [Revisi] LK Kuartal III: Rugi Bertambah Jadi Rp33,54 Miliar",
  "deck": "Triniti Dinamik merevisi laporan keuangan interim, rugi neto sembilan bulan 2026 naik jadi Rp33,54 miliar, sementara dua pinjaman pemegang saham melampaui plafon.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "Triniti Dinamik",
   "laporan keuangan",
   "going concern"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_TRUE_E023A_128de09c-d8b3-4edb-b02f-f4c22c66d827-20261125202004.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-47-pemerintah-incar-6-di-2027",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh 5,47%, Pemerintah Incar [6%] di 2027",
  "deck": "Kemenko Perekonomian melaporkan pertumbuhan ekonomi triwulan III 2026 capai 5,47 persen, sembari memasang target 6 persen pada 2027 lewat empat strategi.",
  "date": "25 November 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "pertumbuhan ekonomi",
   "Kemenko Perekonomian",
   "Kawasan Ekonomi Khusus",
   "target 2027"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7250/pemerintah-perkuat-komunikasi-berbasis-data-dan-optimisme-pasar-menuju-pertumbuhan-60-di-2027",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "indonesia-korea-bangun-sistem-uji-charger-ev-senilai-us-8-juta",
  "category": "Industri",
  "title": "Indonesia-Korea Bangun Sistem Uji Charger EV Senilai [US$8 Juta]",
  "deck": "Kemendag dan Korea Selatan memperkuat sistem pengujian dan sertifikasi alat pengisi daya kendaraan listrik lewat hibah US$8 juta dari KOICA untuk periode 2025-2029.",
  "date": "25 November 2026",
  "image": "assets/img/indonesia-korea-bangun-sistem-uji-charger-ev-senilai-us-8-juta.jpg",
  "imageV": "mww48pqv",
  "tags": [
   "Kendaraan Listrik",
   "Metrologi Legal",
   "Kemendag",
   "KOICA"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-korea-selatan-perkuat-kerja-sama-sistem-metrologi-legal-evse-1795601582",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ri-korea-siapkan-aturan-tera-alat-pengisi-daya-mobil-listrik",
  "category": "Energi",
  "title": "RI-Korea Siapkan Aturan [Tera] Alat Pengisi Daya Mobil Listrik",
  "deck": "Kemendag dan Korea Selatan membangun sistem pengujian dan tera alat pengisi daya kendaraan listrik, didukung hibah US$8 juta dari KOICA untuk periode 2025-2029.",
  "date": "25 November 2026",
  "image": "assets/img/ri-korea-siapkan-aturan-tera-alat-pengisi-daya-mobil-listrik.jpg",
  "imageV": "mww48zqs",
  "tags": [
   "metrologi legal",
   "EVSE",
   "kendaraan listrik",
   "KOICA"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/indonesia-korea-selatan-perkuat-kerja-sama-sistem-metrologi-legal-evse",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pnm-raih-annual-report-award-2025-dari-knkg",
  "category": "BUMN",
  "title": "PNM Raih [Annual Report Award] 2025 dari KNKG",
  "deck": "PNM meraih Annual Report Award 2025 dari KNKG untuk kategori BUMN non-listed sektor keuangan, sebagai pengakuan atas transparansi laporan dan tata kelola perusahaan.",
  "date": "25 November 2026",
  "image": "assets/img/pnm-raih-annual-report-award-2025-dari-knkg.jpg",
  "imageV": "mww4905n",
  "tags": [
   "PNM",
   "BUMN",
   "KNKG",
   "Tata Kelola Perusahaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480330-raih-annual-report-award-2025-pnm-konsisten-jaga-transparansi-dan-akuntabilitas"
 },
 {
  "slug": "rupslb-byan-23-november-direksi-diganti-usai-akuisisi-jhonlin",
  "category": "Aksi Korporasi",
  "title": "RUPSLB BYAN 23 November: [Direksi] Diganti Usai Akuisisi Jhonlin",
  "deck": "Bayan Resources mengganti hampir seluruh direksi dan komisaris lewat RUPSLB 23 November 2026 setelah PT Jhonlin Baratama membeli saham perseroan, tapi pengendali tetap Dato' Low Tuck Kwong.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "Bayan Resources",
   "pergantian direksi",
   "Jhonlin Baratama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_BYAN_E023A_5fcba8c1-8061-4197-8316-70502c1676bc-20261125182729.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-byan-23-nov-direksi-komisaris-diganti-total",
  "category": "Aksi Korporasi",
  "title": "RUPSLB BYAN 23 Nov: [Direksi] & Komisaris Diganti Total",
  "deck": "RUPSLB Bayan Resources 23 November mengganti seluruh direksi dan empat dari lima komisaris. Ary Bastari jadi Direktur Utama baru, Budi Waseso pimpin Dewan Komisaris.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BYAN",
   "RUPSLB",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_BYAN_E019_0732c568-be53-486a-827a-adebc03801b5-20261125182625.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-vtny-23-nov-direktur-utama-baru-tri-ismardiko-widyawan",
  "category": "Aksi Korporasi",
  "title": "RUPSLB VTNY 23 Nov: [Direktur Utama] Baru Tri Ismardiko Widyawan",
  "deck": "RUPSLB VTNY 23 November mengangkat Tri Ismardiko Widyawan sebagai Direktur Utama baru menggantikan Junichiro Waide, sementara Hosea Sanjaya jadi Komisaris Utama baru.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "Venteny Fortuna International",
   "perubahan pengurus",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_VTNY_E036_2fbe5c56-d836-4408-aaf0-79b6aa310ba2-20261125181850.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "perubahan-anggaran-dasar-vici-wakil-direksi-jadi-2-orang",
  "category": "Aksi Korporasi",
  "title": "Perubahan Anggaran Dasar VICI: [Wakil Direksi] Jadi 2 Orang",
  "deck": "VICI mengubah anggaran dasar lewat akta 29 Oktober 2026: direksi dapat wewenang baru melepas merek atau paten, dan jumlah direksi yang mewakili perusahaan naik dari satu jadi dua orang.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "anggaran dasar",
   "corporate governance",
   "Victoria Care Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_VICI_E019_ac36a885-dce7-4f76-883b-8480591017a4-20261125180726.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmmx-direktur-supardi-tan-mundur-keputusan-di-rups-terdekat",
  "category": "Aksi Korporasi",
  "title": "DMMX: Direktur Supardi Tan Mundur, [Keputusan] di RUPS Terdekat",
  "deck": "Direktur Supardi Tan mengundurkan diri pada 25 November 2026, keputusan final menunggu RUPS terdekat DMMX.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMMX",
   "pengunduran diri direksi",
   "tata kelola perusahaan",
   "Digital Mediatama Maxima"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_DMMX_E019_71cc6568-a501-427c-9b7d-7d924354836d-20261125175600.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-agrs-30-november-laba-bersih-naik-21-25",
  "category": "Aksi Korporasi",
  "title": "Public Expose AGRS 30 November: [Laba Bersih] Naik 21,25%",
  "deck": "Bank IBK Indonesia (AGRS) memaparkan laba bersih sembilan bulan 2026 naik 21,25 persen menjadi Rp194 miliar dalam materi Public Expose 30 November 2026.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRS",
   "Public Expose",
   "Bank IBK Indonesia",
   "Laporan Keuangan Q3 2026"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_AGRS_E003_879ebfa0-7460-48e5-b983-e834ea575e50-20261125174516.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-smcb-27-november-aktivasi-bisnis-dagang-bahan-konstruksi",
  "category": "Aksi Korporasi",
  "title": "RUPS SMCB 27 November: [Aktivasi] Bisnis Dagang Bahan Konstruksi",
  "deck": "SMCB minta persetujuan RUPS 27 November 2026 untuk mengaktifkan izin dagang bahan konstruksi (KBLI 46733), menyusul anak usahanya SBB dimerger ke VUB milik Semen Indonesia.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "RUPS",
   "KBLI 46733",
   "Semen Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_SMCB_E019_cff9ca87-0beb-4690-827d-961cc33894fc-20261125173346.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pupuk-indonesia-mulai-desain-pabrik-amurea-fakfak",
  "category": "BUMN",
  "title": "Pupuk Indonesia Mulai Desain Pabrik Amurea [Fakfak]",
  "deck": "Pupuk Indonesia menggandeng Topsoe dan Toyo Engineering merancang pabrik amonia-urea di Fakfak, Papua Barat, dengan target kapasitas 825 ribu ton amonia dan 1,15 juta ton urea per tahun.",
  "date": "25 November 2026",
  "image": "assets/img/pupuk-indonesia-mulai-desain-pabrik-amurea-fakfak.jpg",
  "imageV": "mwvyyh4o",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Kaltim",
   "Fakfak",
   "Amurea"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/923/babak-baru-industrialisasi-indonesia-timur-pupuk-indonesia-gandeng-mitra-global-kembangkan-pabrik-amurea-fakfak",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "pupuk-indonesia-klaim-inovasi-internal-untung-rp625-miliar",
  "category": "BUMN",
  "title": "Pupuk Indonesia Klaim Inovasi Internal Untung [Rp625] Miliar",
  "deck": "Pupuk Indonesia Grup mengklaim program inovasi karyawan hasilkan nilai tambah Rp625 miliar pada 2026, dengan 33 inovasi akan direplikasi ke anak usaha lain pada 2027.",
  "date": "25 November 2026",
  "image": "assets/img/pupuk-indonesia-klaim-inovasi-internal-untung-rp625-miliar.jpg",
  "imageV": "mwvyyiid",
  "tags": [
   "Pupuk Indonesia",
   "BUMN",
   "Inovasi",
   "PIQI"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/924/inovasi-pupuk-indonesia-grup-hasilkan-nilai-tambah-rp625-miliar-pada-tahun-2026",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "waran-terstruktur-dr-disesuaikan-usai-aadi-bagi-dividen-us-500-juta",
  "category": "Aksi Korporasi",
  "title": "Waran Terstruktur DR [Disesuaikan] usai AADI Bagi Dividen US$500 Juta",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur DR setelah AADI mengumumkan dividen tunai US$500 juta, efektif 25 November 2026.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "AADI",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_DR_E019_8b3230da-f006-4ea3-92a8-812131261745-20261125171105.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-pantau-harga-pangan-makassar-jelang-nataru-2027",
  "category": "Bisnis",
  "title": "KPPU [Pantau] Harga Pangan Makassar Jelang Nataru 2027",
  "deck": "KPPU Makassar memantau harga cabai, bawang, beras, minyak goreng, gula, hingga daging di dua pasar tradisional menjelang Natal 2026 dan Tahun Baru 2027.",
  "date": "25 November 2026",
  "image": "assets/img/wisatawan-kopi.jpg",
  "tags": [
   "KPPU",
   "Harga Pangan",
   "Nataru",
   "Makassar"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-makassar-pantau-harga-pangan-jelang-nataru-2027",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "indonesia-dan-oecd-rilis-laporan-industri-semikonduktor",
  "category": "Industri",
  "title": "Indonesia dan OECD Rilis Laporan Industri [Semikonduktor]",
  "deck": "Kemenko Perekonomian dan OECD meluncurkan laporan asesmen ekosistem semikonduktor Indonesia, berisi rekomendasi kebijakan menjelang proses aksesi RI ke organisasi tersebut.",
  "date": "25 November 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "semikonduktor",
   "OECD",
   "industri",
   "aksesi OECD"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7249/indonesia-dan-oecd-luncurkan-laporan-penguatan-ekosistem-semikonduktor-nasional",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "xmgb-unit-beredar-susut-jadi-41-juta-redemption-hari-ketiga",
  "category": "Aksi Korporasi",
  "title": "XMGB: Unit Beredar Susut Jadi 41 Juta, [Redemption] Hari Ketiga",
  "deck": "Unit penyertaan ETF XMGB turun 4 juta jadi 41 juta pada 25 November, penyusutan harian ketiga beruntun sejak 23 November.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMGB",
   "ETF",
   "reksa dana",
   "obligasi pemerintah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_XMGB_E019_325b401e-f490-4f25-9607-bce563486ff4-20261125164725.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-cmnp-30-nov-ekspansi-tol-rp74-65-triliun",
  "category": "Aksi Korporasi",
  "title": "Public Expose CMNP 30 Nov: [Ekspansi] Tol Rp74,65 Triliun",
  "deck": "Materi Public Expose Tahunan CMNP memuat rencana investasi lima proyek tol baru senilai Rp74,65 triliun hingga 2035, didanai Rp28,74 triliun ekuitas dan Rp45,92 triliun utang.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMNP",
   "Public Expose",
   "Jalan Tol",
   "Capex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_CMNP_E003_937635a0-b2fa-4f6f-9fe7-3f04e3b816c1-20261125163422.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-aadi-us-500-juta-cair-11-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim AADI US$500 Juta: [Cair] 11 Desember 2026",
  "deck": "AADI akan membagikan dividen tunai interim senilai US$500 juta dari laba sembilan bulan 2026, dibayar 11 Desember 2026 setelah tanggal pencatatan 7 Desember.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AADI",
   "dividen interim",
   "Adaro Andalan Indonesia",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_AADI_E007_1f170c87-6c6f-4843-8b2f-8745130f9c4a-20261125162326.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "andi-ubo-berganti-dari-anne-patricia-sutanto-ke-erik-setiawan",
  "category": "Aksi Korporasi",
  "title": "ANDI: [UBO] Berganti dari Anne Patricia Sutanto ke Erik Setiawan",
  "deck": "Pencatatan pemilik manfaat akhir (UBO) Andira Agro beralih dari Anne Patricia Sutanto ke Ir. Erik Setiawan per 23 November 2026, tanpa dampak operasional menurut perusahaan.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANDI",
   "UBO",
   "Pemegang Saham",
   "Andira Agro"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_ANDI_E019_e747722c-90fa-491f-8c13-9ca4b5167132-20261125161619.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-mdki-30-november-pangsa-pasar-tergerus-impor",
  "category": "Aksi Korporasi",
  "title": "Public Expose MDKI 30 November: [Pangsa Pasar] Tergerus Impor",
  "deck": "MDKI menjadwalkan Public Expose Tahunan 2026 pada 30 November di Gresik, memaparkan pendapatan yang terus menyusut sejak 2023 dan pangsa pasar domestik yang tergerus impor ke 30 persen.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKI",
   "Public Expose",
   "Karbit",
   "Emdeki Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_MDKI_E003_729e0ddc-8846-4438-91bd-ea8f254c30a4-20261125154222.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-bsim-1-desember-laba-9m26-turun-14-9",
  "category": "Aksi Korporasi",
  "title": "Public Expose BSIM 1 Desember: [Laba] 9M26 Turun 14,9%",
  "deck": "Materi Public Expose Tahunan Bank Sinarmas memuat kinerja 9 bulan 2026: laba sebelum pajak turun 14,92% jadi Rp320 miliar akibat tekanan margin bunga, meski kualitas kredit membaik.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BSIM",
   "Bank Sinarmas",
   "Public Expose",
   "Laba Bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_BSIM_E003_0283858d-19f4-4b51-b1c4-84658eeb2c57-20261125154144.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-bbkp-30-november-rugi-rp197-miliar-di-9m26",
  "category": "Aksi Korporasi",
  "title": "Public Expose BBKP 30 November: [Rugi] Rp197 Miliar di 9M26",
  "deck": "Materi public expose BBKP untuk periode Januari-September 2026 menunjukkan rugi bersih Rp197 miliar, berbalik dari laba periode sama tahun lalu, meski pendapatan bunga bersih tumbuh 28,9 persen.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "KB Bank",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_BBKP_E003_c94a1536-cd1f-4132-8716-9b2889cf5088-20261125152749.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmmx-direktur-niko-navea-aquino-mundur-keputusan-di-rups",
  "category": "Aksi Korporasi",
  "title": "DMMX: Direktur Niko Navea Aquino [Mundur], Keputusan di RUPS",
  "deck": "Direktur PT Digital Mediatama Maxima Tbk, Niko Navea Aquino, mengajukan pengunduran diri efektif 20 November 2026. Keputusan final menunggu RUPS terdekat.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMMX",
   "pengunduran diri direksi",
   "Digital Mediatama Maxima",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_DMMX_E019_ff0a84d3-5516-4dc1-abb4-6d76ad5795b9-20261125152615.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-smma-laba-9-bulan-rp2-33-triliun-roe-10-81",
  "category": "Aksi Korporasi",
  "title": "[Public Expose] SMMA: Laba 9 Bulan Rp2,33 Triliun, ROE 10,81%",
  "deck": "Materi Public Expose Tahunan 2026 SMMA menunjukkan laba sembilan bulan ke SMMA naik jadi Rp2,33 triliun, dengan ROE melonjak dari 2,44 persen ke 10,81 persen.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "Public Expose",
   "Sinar Mas Multiartha",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_SMMA_E003_cb31c214-7bd4-402c-8411-337de804ba11-20261125152515.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-akun-jual-29-87-saham-ke-cni-pengendali-tak-berubah",
  "category": "Aksi Korporasi",
  "title": "INET: AKUN Jual 29,87% Saham ke CNI, [Pengendali] Tak Berubah",
  "deck": "AKUN melepas 29,87 persen saham INET ke CNI senilai Rp2,01 triliun, namun status pengendali tak berubah karena selisih kepemilikan hanya 0,02 persen.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "AKUN",
   "CNI",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_INET_E023A_573c6595-d382-40b1-8dde-94cf1599352c-20261125150546.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-brin-garap-riset-ai-satelit-dan-komputasi-kuantum",
  "category": "Teknologi",
  "title": "Telkom-BRIN Garap Riset [AI], Satelit, dan Komputasi Kuantum",
  "deck": "Telkom dan BRIN menandatangani intensi kolaborasi riset satelit, AI, dan komputasi kuantum untuk mendorong kedaulatan digital Indonesia.",
  "date": "25 November 2026",
  "image": "assets/img/telkom-brin-garap-riset-ai-satelit-dan-komputasi-kuantum.jpg",
  "imageV": "mwvyyjru",
  "tags": [
   "Telkom",
   "BRIN",
   "Kecerdasan Artifisial",
   "Satelit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480295-telkom-brin-kolaborasi-kembangkan-ai-dan-satelit-untuk-kedaulatan-digital"
 },
 {
  "slug": "rupo-bold-9-desember-restrukturisasi-obligasi-diajukan-emiten",
  "category": "Aksi Korporasi",
  "title": "RUPO BOLD 9 Desember: [Restrukturisasi] Obligasi Diajukan Emiten",
  "deck": "BUMA mengundang pemegang Obligasi I BUMA 2023 ke RUPO 9 Desember untuk menyetujui perpanjangan jatuh tempo, perubahan bunga, dan pengesampingan rasio keuangan.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "RUPO",
   "Restrukturisasi Obligasi",
   "Obligasi I BUMA 2023"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_BOLD_E019_cc8bcc9c-4218-4f1d-bd0c-37209025920b-20261125144052.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "talf-jawab-permintaan-bursa-soal-volatilitas-saham-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "TALF Jawab Permintaan Bursa soal Volatilitas Saham: [Tak Ada] Info Material",
  "deck": "TALF menegaskan tidak ada informasi material di balik volatilitas perdagangan sahamnya, menanggapi permintaan penjelasan BEI tertanggal 24 November 2026.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TALF",
   "Tunas Alfin",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_TALF_E023A_513b6109-296c-4565-971f-2a206759b70c-20261125143026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-afiliasi-opms-beli-ruko-komisaris-rp3-7-miliar",
  "category": "Aksi Korporasi",
  "title": "Transaksi Afiliasi OPMS: [Beli] Ruko Komisaris Rp3,7 Miliar",
  "deck": "OPMS membeli ruko di Surabaya milik Komisaris Utama Sumardi Wijaya senilai Rp3,7 miliar, sesuai harga wajar penilaian independen.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPMS",
   "transaksi afiliasi",
   "Sumardi Wijaya",
   "ruko Surabaya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_OPMS_E025A_fab68654-e243-4fe0-a332-0d6c27e260a1-20261125132139.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-vast-rp1-64-per-saham-cair-21-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim VAST Rp1,64 per Saham, [Cair] 21 Desember",
  "deck": "VAST akan membagikan dividen interim Rp1,64 per saham atau total Rp5 miliar dari laba kuartal III 2026, dibayar 21 Desember 2026.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VAST",
   "dividen interim",
   "Vastland Indonesia",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_VAST_E007_9dc99495-03e6-4fa0-ab40-b39f6c3ca86d-20261125132054.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smsm-terima-dividen-rp34-125-miliar-dari-anak-usaha-pjm",
  "category": "Aksi Korporasi",
  "title": "SMSM Terima [Dividen] Rp34,125 Miliar dari Anak Usaha PJM",
  "deck": "Selamat Sempurna mencatat pendapatan dividen interim ketiga tahun buku 2026 senilai Rp34,125 miliar dari anak usahanya, PT Panata Jaya Mandiri.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "dividen",
   "Panata Jaya Mandiri",
   "entitas anak"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_SMSM_E019_a1a3c5d8-1ced-4320-adf4-90128515e2c7-20261125131841.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-uni-eropa-teken-ieu-cepa-berlaku-2027",
  "category": "Makroekonomi",
  "title": "RI-Uni Eropa Teken IEU-CEPA, Berlaku [2027]",
  "deck": "Wamenko Dradjad membekali calon duta besar dengan data ekonomi terbaru dan progres IEU-CEPA yang diteken di Brussels, menjelang berlaku Januari 2027.",
  "date": "25 November 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "IEU-CEPA",
   "diplomasi ekonomi",
   "investasi",
   "pertumbuhan ekonomi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7247/wamenko-dradjad-dorong-penguatan-diplomasi-ekonomi-untuk-memperluas-peluang-kerja-sama-indonesia",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wifi-jawab-bursa-isb-sgk-terafiliasi-transaksi-bukan-repo",
  "category": "Aksi Korporasi",
  "title": "WIFI Jawab Bursa: ISB-SGK Terafiliasi, Transaksi Bukan [Repo]",
  "deck": "Solusi Sinergi Digital menjelaskan ke BEI bahwa jual beli 1,42 miliar saham WIFI oleh ISB dan SGK pada harga sama bukan skema repo atau perjanjian beli kembali.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "Solusi Sinergi Digital",
   "BEI",
   "pemegang saham terafiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_WIFI_E023A_c3c227cc-0e48-4765-988e-129173ed7803-20261125110656.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esti-jelaskan-volatilitas-saham-ke-bei-tak-ada-informasi-material",
  "category": "Aksi Korporasi",
  "title": "ESTI Jelaskan Volatilitas Saham ke BEI: [Tak Ada] Informasi Material",
  "deck": "BEI minta klarifikasi atas pergerakan harga saham ESTI; perseroan menyatakan tak ada informasi material, rencana aksi korporasi, maupun perubahan pemegang saham utama.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ESTI",
   "Ever Shine Textile",
   "UMA",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_ESTI_E023A_c268f6a0-6035-4bb4-bd4d-e807082aa664-20261125110148.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agii-pelunasan-dana-rp63-3-miliar-untuk-obligasi-sukuk-22-des",
  "category": "Aksi Korporasi",
  "title": "AGII: [Pelunasan] Dana Rp63,3 Miliar untuk Obligasi-Sukuk 22 Des",
  "deck": "PT Samator Indo Gas Tbk (AGII) menyatakan dana sudah siap untuk melunasi obligasi dan sukuk ijarah senilai total Rp63,3 miliar yang jatuh tempo 22 Desember 2026.",
  "date": "25 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "obligasi",
   "sukuk ijarah",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261125_AGII_E019_826e8413-3c82-4f15-b89e-0d86a89b2fee-20261125103605.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-syaratkan-akuisisi-schroder-oleh-manulife",
  "category": "Pasar Modal",
  "title": "KPPU [Syaratkan] Akuisisi Schroder oleh Manulife",
  "deck": "KPPU menggelar sidang penilaian menyeluruh atas pengambilalihan 99 persen saham Schroder Investment Management Indonesia oleh Manulife, setelah ditemukan potensi kenaikan biaya di pasar KPD dan Tapera.",
  "date": "25 November 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "KPPU",
   "Manulife",
   "Schroder",
   "akuisisi"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-gelar-sidang-perdana-penilaian-menyeluruh-akuisisi-manulife-atas-schroder",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "ri-uni-eropa-teken-cepa-tarif-ekspor-turun-nol-persen",
  "category": "Global",
  "title": "RI-Uni Eropa Teken CEPA, Tarif Ekspor Turun [Nol Persen]",
  "deck": "Indonesia dan Uni Eropa resmi menandatangani I-EU CEPA pada 21 November 2026, membuka akses pasar 449 juta penduduk di 27 negara dengan sebagian besar pos tarif turun jadi nol persen mulai 2027.",
  "date": "25 November 2026",
  "image": "assets/img/ri-uni-eropa-teken-cepa-tarif-ekspor-turun-nol-persen.jpg",
  "imageV": "mwviur5q",
  "tags": [
   "I-EU CEPA",
   "Uni Eropa",
   "Ekspor",
   "Tarif Preferensi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/i-eu-cepa-buka-pasar-449-juta-jiwa-di-uni-eropa",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bni-pertahankan-peringkat-ketiga-di-ara-2025",
  "category": "Perbankan",
  "title": "BNI [Pertahankan] Peringkat Ketiga di ARA 2025",
  "deck": "BNI mempertahankan peringkat ketiga Annual Report Award 2025 kategori BUMN sektor keuangan berpendapatan di atas Rp18 triliun.",
  "date": "25 November 2026",
  "image": "assets/img/bni-pertahankan-peringkat-ketiga-di-ara-2025.jpg",
  "imageV": "mwviurnn",
  "tags": [
   "BNI",
   "ARA 2025",
   "tata kelola",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480232-bni-pertahankan-prestasi-raih-penghargaan-annual-report-award-2025"
 },
 {
  "slug": "plts-pertamina-di-kariangau-hemat-rp400-ribu-bulan",
  "category": "Energi",
  "title": "PLTS Pertamina di Kariangau [Hemat] Rp400 Ribu/Bulan",
  "deck": "Program solar panel Desa Energi Berdikari Pertamina di Kariangau memasuki tahun kedua, memangkas biaya listrik warga dan menambah penghasilan dari budidaya ikan serta hidroponik.",
  "date": "25 November 2026",
  "image": "assets/img/plts-pertamina-di-kariangau-hemat-rp400-ribu-bulan.jpg",
  "imageV": "mwv1l2yo",
  "tags": [
   "pertamina",
   "energi surya",
   "desa energi berdikari",
   "kariangau"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480183-lewat-energi-surya-pertamina-bantu-warga-kariangau-hemat-biaya-dan-tambah-cuan"
 },
 {
  "slug": "esdm-cek-langsung-ujung-kulon-tak-ada-tambang",
  "category": "Energi",
  "title": "ESDM Cek Langsung Ujung Kulon, [Tak] Ada Tambang",
  "deck": "Tim ESDM menyusuri Taman Nasional Ujung Kulon dengan kapal dan drone untuk mengecek kabar tambang di kawasan habitat badak jawa, dan tidak menemukan aktivitas pertambangan.",
  "date": "24 November 2026",
  "image": "assets/img/esdm-cek-langsung-ujung-kulon-tak-ada-tambang.jpg",
  "imageV": "mwuwbmwp",
  "tags": [
   "ESDM",
   "Ujung Kulon",
   "Tambang",
   "Konservasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/susuri-ujung-kulon-dengan-kapal-dan-drone-kementerian-esdm-pastikan-tak-ada-tambang-di-taman-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "hipmi-perkuat-kaderisasi-pengusaha-muda-lewat-bidang-okk",
  "category": "Bisnis",
  "title": "HIPMI Perkuat [Kaderisasi] Pengusaha Muda Lewat Bidang OKK",
  "deck": "Satrio Rama Widyowicaksono memimpin bidang Organisasi, Kaderisasi, dan Keanggotaan di kepengurusan HIPMI 2026-2029 untuk menata ulang regenerasi pengusaha muda.",
  "date": "24 November 2026",
  "image": "assets/img/hipmi-perkuat-kaderisasi-pengusaha-muda-lewat-bidang-okk.jpg",
  "imageV": "mwuwbnct",
  "tags": [
   "HIPMI",
   "kaderisasi",
   "pengusaha muda",
   "organisasi bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480158-hipmi-perkuat-regenerasi-pengusaha-muda-satrio-rama-pimpin-bidang-okk"
 },
 {
  "slug": "pertamina-dampingi-umk-dari-ambon-hingga-ntt",
  "category": "UMKM",
  "title": "Pertamina Dampingi UMK dari [Ambon] hingga NTT",
  "deck": "Pertamina membina pelaku usaha kecil di Ambon dan NTT lewat pelatihan pengelolaan bisnis serta membukakan akses pasar melalui pameran SMEXPO.",
  "date": "24 November 2026",
  "image": "assets/img/pertamina-dampingi-umk-dari-ambon-hingga-ntt.jpg",
  "imageV": "mwuwbnsx",
  "tags": [
   "pertamina",
   "umkm",
   "ambon",
   "ntt"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480151-memberdayakan-umk-pertamina-perkuat-bisnis-lokal-dari-ambon-hingga-ntt"
 },
 {
  "slug": "pnm-kantongi-rating-aaa-tertinggi-dari-fitch-ratings",
  "category": "BUMN",
  "title": "PNM Kantongi Rating [AAA] Tertinggi dari Fitch Ratings",
  "deck": "Fitch Ratings Indonesia memberi PNM peringkat nasional AAA(idn) dengan outlook stabil, melengkapi rating setara yang sebelumnya diberikan PEFINDO.",
  "date": "24 November 2026",
  "image": "assets/img/pnm-kantongi-rating-aaa-tertinggi-dari-fitch-ratings.jpg",
  "imageV": "mwuwbo84",
  "tags": [
   "PNM",
   "Fitch Ratings",
   "BUMN",
   "PNM Mekaar"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480142-raih-peringkat-tertinggi-fitch-rating-pnm-perkuat-pemberdayaan-nasabah"
 },
 {
  "slug": "sekjen-oecd-kunjungi-indonesia-genjot-proses-aksesi",
  "category": "Global",
  "title": "Sekjen OECD Kunjungi Indonesia, Genjot Proses [Aksesi]",
  "deck": "Sekjen OECD Mathias Cormann ke Jakarta 25-26 November, saat tinjauan teknis aksesi Indonesia sudah mencakup 25 bidang kebijakan.",
  "date": "24 November 2026",
  "image": "assets/img/sekjen-oecd-kunjungi-indonesia-genjot-proses-aksesi.jpg",
  "imageV": "mwuwbomx",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480139-percepat-aksesi-oecd-sekjen-mathias-cormann-kunjungi-indonesia"
 },
 {
  "slug": "indonesia-uni-eropa-teken-cepa-ekspor-diproyeksi-naik-30-7",
  "category": "Global",
  "title": "Indonesia-Uni Eropa Teken [CEPA], Ekspor Diproyeksi Naik 30,7%",
  "deck": "Kemendag memproyeksikan ekspor ke Uni Eropa naik hingga US$5,78 miliar per tahun setelah I-EU CEPA diteken, dengan implementasi ditargetkan mulai 1 Januari 2027.",
  "date": "24 November 2026",
  "image": "assets/img/indonesia-uni-eropa-teken-cepa-ekspor-diproyeksi-naik-30-7.jpg",
  "imageV": "mwuqxsvy",
  "tags": [
   "I-EU CEPA",
   "Ekspor",
   "Uni Eropa",
   "Kementerian Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ekspor-ke-uni-eropa-diproyeksi-bertambah-usd-3-5-miliar-setahun",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pialang-berjangka-valbury-luncurkan-asisten-ai-gpt",
  "category": "Pasar Modal",
  "title": "Pialang Berjangka Valbury Luncurkan Asisten [AI] GPT",
  "deck": "Valbury tutup roadshow nasional dengan nasabah naik 70 persen jadi 180.000 lebih dan asisten AI berbasis GPT pertama di industri berjangka Indonesia.",
  "date": "24 November 2026",
  "image": "assets/img/pialang-berjangka-valbury-luncurkan-asisten-ai-gpt.jpg",
  "imageV": "mwuwbp14",
  "tags": [
   "perdagangan berjangka",
   "Valbury",
   "Bappebti",
   "AI trading"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480136-perkuat-ekosistem-industri-perdagangan-berjangka-siap-hadapi-tantangan-2027"
 },
 {
  "slug": "public-expose-kota-2026-balik-laba-ke-rp51-7-miliar",
  "category": "Aksi Korporasi",
  "title": "Public Expose KOTA 2026: [Balik Laba] ke Rp51,7 Miliar",
  "deck": "Materi public expose KOTA ungkap laba bersih Rp51,7 miliar per September 2026, membalik rugi tahun sebelumnya, sambil memaparkan investasi Rp218 miliar untuk proyek golf di Kemayoran.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "Public Expose",
   "Properti",
   "Hotel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_KOTA_E003_0fb6446a-1fb1-4655-a9d4-b68f7b5f8524-20261124200352.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bni-raih-penghargaan-transformasi-perbankan-di-usia-80-tahun",
  "category": "Perbankan",
  "title": "BNI Raih Penghargaan [Transformasi] Perbankan di Usia 80 Tahun",
  "deck": "BNI menerima penghargaan Transformasi Perbankan dari detikcom Awards 2026, bertepatan dengan usianya yang menginjak 80 tahun.",
  "date": "24 November 2026",
  "image": "assets/img/bni-raih-penghargaan-transformasi-perbankan-di-usia-80-tahun.jpg",
  "imageV": "mwuqxtaf",
  "tags": [
   "BNI",
   "transformasi digital",
   "wondr by BNI",
   "BNIdirect"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480120-80-tahun-mengabdi-bni-raih-penghargaan-transformasi-perbankan"
 },
 {
  "slug": "mdka-siapkan-dana-pelunasan-obligasi-jatuh-tempo-15-des-2026",
  "category": "Aksi Korporasi",
  "title": "MDKA Siapkan Dana [Pelunasan] Obligasi, Jatuh Tempo 15 Des 2026",
  "deck": "MDKA memastikan dana pelunasan pokok dan bunga kedua belas Obligasi IV Tahap IV 2023 Seri B sudah siap sebelum jatuh tempo 15 Desember 2026, bunga tetap 9,50% per tahun.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDKA",
   "obligasi",
   "Merdeka Copper Gold",
   "pelunasan obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_MDKA_E019_f9240f2c-782f-4bbf-83ed-8f986e2d3d25-20261124194339.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnse-terima-dividen-interim-rp49-5-miliar-dari-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "PNSE Terima [Dividen Interim] Rp49,5 Miliar dari Anak Usaha",
  "deck": "Anak usaha PNSE, PT Bali Realtindo Benoa, membagikan dividen interim Rp50 miliar untuk tahun buku 2026; bagian PNSE sebesar Rp49,5 miliar dibayar paling lambat 23 November 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNSE",
   "dividen interim",
   "Bali Realtindo Benoa",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_PNSE_E019_b8e682c1-1f39-442c-874b-9a7707f3a321-20261124194316.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buva-lunasi-kredit-mandiri-rp420-4-miliar-dipercepat",
  "category": "Aksi Korporasi",
  "title": "BUVA Lunasi Kredit Mandiri Rp420,4 Miliar: [Dipercepat]",
  "deck": "BUVA melunasi dipercepat seluruh kredit investasi Rp420,4 miliar ke Bank Mandiri pada 20 November 2026, dibiayai dari dana rights issue II.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUVA",
   "Bank Mandiri",
   "rights issue",
   "pelunasan kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BUVA_E019_9a42b7b4-d1e4-46d2-bb61-999a35b3b97d-20261124193733.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-raih-platinum-award-lacp-2025-untuk-laporan-tahunan",
  "category": "BUMN",
  "title": "Telkom Raih [Platinum Award] LACP 2025 untuk Laporan Tahunan",
  "deck": "Annual Report Telkom 2025 meraih Platinum Award kategori telekomunikasi dan masuk Top 100 Reports Worldwide di ajang LACP 2025 Vision Awards.",
  "date": "24 November 2026",
  "image": "assets/img/telkom-raih-platinum-award-lacp-2025-untuk-laporan-tahunan.jpg",
  "imageV": "mwuqxtpy",
  "tags": [
   "telkom",
   "telkom indonesia",
   "LACP 2025",
   "laporan tahunan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480116-telkom-kembali-raih-platinum-award-lacp-2025-untuk-annual-report"
 },
 {
  "slug": "sengketa-cmnp-bhit-kasasi-bunga-6-dan-rp50-m-ganti-rugi-ditolak",
  "category": "Aksi Korporasi",
  "title": "Sengketa CMNP-BHIT [Kasasi]: Bunga 6% dan Rp50 M Ganti Rugi Ditolak",
  "deck": "BHIT ajukan kasasi atas putusan banding yang menolak kewajiban bunga 6 persen sejak 2002 dan ganti rugi Rp50 miliar dalam perkara melawan CMNP.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BHIT",
   "CMNP",
   "Hukum",
   "Kasasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BHIT_E019_70ed2b54-b303-456b-94d6-1e9ebbad5ed0-20261124180547.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nest-klarifikasi-uma-tak-ada-informasi-material-baru",
  "category": "Aksi Korporasi",
  "title": "NEST Klarifikasi [UMA]: Tak Ada Informasi Material Baru",
  "deck": "PT Esta Indonesia Tbk (NEST) menyatakan tidak ada fakta material baru yang memicu volatilitas sahamnya, menyusul surat permintaan penjelasan BEI tanggal 20 November 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NEST",
   "UMA",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_NEST_E023A_383f3b6f-9ca1-4ccb-8443-a6dcbe157330-20261124180055.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-ades-16-desember-komisaris-utama-baru-diusulkan",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ADES 16 Desember: [Komisaris Utama] Baru Diusulkan",
  "deck": "ADES mengajukan dua calon Komisaris baru untuk RUPSLB 16 Desember 2026, Julianto diusulkan naik jadi Presiden Komisaris merangkap Komisaris Independen.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "RUPSLB",
   "Dewan Komisaris",
   "Akasha Wira International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ADES_E019_1afc65b0-911f-442b-a739-4a6c97101324-20261124175907.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-kejar-keanggotaan-oecd-sekjen-cormann-ke-jakarta",
  "category": "Global",
  "title": "RI Kejar Keanggotaan [OECD], Sekjen Cormann ke Jakarta",
  "deck": "Sekretaris Jenderal OECD Mathias Cormann berkunjung ke Jakarta 25-26 November untuk mengecek proses aksesi Indonesia yang kini memasuki pembahasan teknis di 25 bidang.",
  "date": "24 November 2026",
  "image": "assets/img/global-pelabuhan.jpg",
  "tags": [
   "OECD",
   "Aksesi OECD",
   "Kemenko Perekonomian",
   "Mathias Cormann"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7246/percepat-keanggotaan-penuh-oecd-sekjen-oecd-kunjungi-indonesia",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "itic-refinancing-rp146-24-miliar-ke-bca-lunasi-woori-saudara",
  "category": "Aksi Korporasi",
  "title": "ITIC Refinancing Rp146,24 Miliar ke BCA, [Lunasi] Woori Saudara",
  "deck": "ITIC teken perjanjian kredit baru Rp146,24 miliar dengan BCA, sebagian besar untuk melunasi utang ke Bank Woori Saudara dan sisanya modal kerja.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ITIC",
   "refinancing",
   "kredit bank",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ITIC_E019_a08beba9-9e10-493b-ae9e-2f1700cd413a-20261124173952.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmgb-unit-penyertaan-berkurang-4-juta-jadi-45-juta-redemption",
  "category": "Aksi Korporasi",
  "title": "XMGB: Unit Penyertaan Berkurang 4 Juta Jadi 45 Juta [Redemption]",
  "deck": "Reksa Dana Majoris Government Bonds ETF Indonesia melaporkan unit beredarnya turun dari 49 juta jadi 45 juta per 24 November 2026, hari kedua berturut-turut unitnya menyusut.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMGB",
   "ETF",
   "Reksa Dana Majoris Government Bonds",
   "unit penyertaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_XMGB_E019_1976d1cd-9d6b-46f8-bf61-a8077954a673-20261124173520.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-rupslb-elty-gagal-kuorum-kehadiran-cuma-4-9",
  "category": "Aksi Korporasi",
  "title": "RUPSLB Ketiga ELTY 26 Oktober: [Perubahan Anggaran Dasar] Disetujui",
  "deck": "Setelah dua kali gagal kuorum, RUPSLB ketiga ELTY pada 26 Oktober 2026 memenuhi kuorum yang ditetapkan OJK dan menyetujui perubahan Pasal 3 anggaran dasar soal klasifikasi usaha.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELTY",
   "RUPSLB",
   "Anggaran Dasar",
   "Bakrieland"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ELTY_E013_704a75ec-f267-435c-a48f-1ca2a99594cf-20261124172446.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-ditutup-menguat-0-49-persen-ke-5-241-59",
  "category": "Pasar Modal",
  "title": "IHSG Ditutup [Menguat] 0,49 Persen ke 5.241,59",
  "deck": "IHSG naik 0,49 persen ke 5.241,59 ditopang sentimen sektor AI global, sementara MSCI menegaskan proses downgrade status pasar saham Indonesia belum berubah.",
  "date": "24 November 2026",
  "image": "assets/img/ihsg-ditutup-menguat-0-49-persen-ke-5-241-59.jpg",
  "imageV": "mwul721t",
  "tags": [
   "IHSG",
   "MSCI",
   "saham AI",
   "bursa Asia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480087-ihsg-sore-ini-ditutup-menguat-049-persen-ke-level-524159-terdorong-sektor-ai"
 },
 {
  "slug": "dividen-interim-baik-rp1-1-per-saham-cair-22-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim BAIK Rp1,1 per Saham, [Cair] 22 Desember",
  "deck": "BAIK membagikan dividen interim Rp1,24 miliar atau Rp1,1 per saham dari laba sembilan bulan 2026, dibayar 22 Desember.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BAIK",
   "dividen interim",
   "aksi korporasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BAIK_E007_ab90bfb5-db27-4a97-aaf8-1fcd1351ffec-20261124172327.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemenko-polkam-dan-telkom-garap-keamanan-kuantum",
  "category": "Teknologi",
  "title": "Kemenko Polkam dan Telkom Garap Keamanan [Kuantum]",
  "deck": "Kemenko Polkam, BSSN, Komdigi, OJK, dan lembaga lain menandatangani komitmen bersama Telkom untuk menyiapkan kriptografi tahan kuantum guna melindungi data pemerintah dan keuangan.",
  "date": "24 November 2026",
  "image": "assets/img/kemenko-polkam-dan-telkom-garap-keamanan-kuantum.jpg",
  "imageV": "mwul72fz",
  "tags": [
   "keamanan digital",
   "komputasi kuantum",
   "Telkom Indonesia",
   "BSSN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480085-kemenko-polkam-dan-telkom-perkuat-kesiapan-keamanan-digital-hadapi-era-kuantum"
 },
 {
  "slug": "post-direktur-utama-kini-m-iskandar-kunaefi-gantikan-daud-joseph",
  "category": "Aksi Korporasi",
  "title": "POST: [Direktur Utama] Kini M. Iskandar Kunaefi Gantikan Daud Joseph",
  "deck": "Pos Indonesia merombak direksi dan komisaris sepanjang 2026: Daud Joseph mundur dari Direktur Utama pada Juni, digantikan M. Iskandar Kunaefi sejak 15 Juli 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "Pos Indonesia",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_POST_E036_811703be-ce9b-4aaa-9e29-08b2956b536c-20261124165253.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-ekuitas-negatif-rupslb-7-desember-agenda-divestasi-ke-pnm",
  "category": "Aksi Korporasi",
  "title": "TAMA: Ekuitas Negatif, RUPSLB 7 Desember [Agenda] Divestasi ke PNM",
  "deck": "TAMA menjelaskan ke BEI: ekuitas negatif Rp62,54 miliar, utang pemegang saham naik ke Rp142,23 miliar, RUPSLB 7 Desember putuskan divestasi Rp84,22 miliar ke PNM.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "RUPSLB",
   "divestasi aset",
   "utang pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_TAMA_E023A_fb372ce7-d49b-45a5-a028-5e612bbeac96-20261124165048.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jast-klarifikasi-tak-ada-info-material-di-balik-volatilitas",
  "category": "Aksi Korporasi",
  "title": "JAST [Klarifikasi]: Tak Ada Info Material di Balik Volatilitas",
  "deck": "JAST menjawab permintaan penjelasan Bursa soal lonjakan transaksi sahamnya, menyatakan tak ada info material dan pemegang saham utama belum berencana mengubah kepemilikan.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAST",
   "Jasnita Telekomindo",
   "UMA Bursa",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_JAST_E023A_a60f0aea-c256-46c1-b666-2949eb6aba94-20261124164913.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-ades-16-desember-stock-split-rasio-1-10-diusulkan",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ADES 16 Desember: [Stock Split] Rasio 1:10 Diusulkan",
  "deck": "Direksi ADES memanggil RUPSLB 16 Desember 2026 dengan agenda stock split 1:10 dan perubahan komisaris; saham beredar bakal naik dari 589,9 juta jadi 5,9 miliar lembar.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "RUPSLB",
   "stock split",
   "Akasha Wira International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ADES_E019_69d3abf9-2745-407e-9564-bf2816952ac4-20261124164358.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-dlta-19-nov-laba-naik-5-9-ekuitas-4-7",
  "category": "Aksi Korporasi",
  "title": "[Public Expose] DLTA 19 Nov: Laba Naik 5,9%, Ekuitas -4,7%",
  "deck": "Public Expose DLTA 19 November mengungkap penjualan naik 16,6% jadi Rp564,6 miliar, laba bersih naik 5,9%, tapi ekuitas turun 4,7%.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DLTA",
   "Delta Djakarta",
   "Public Expose",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_DLTA_E003_215c890c-ddfb-45e2-a0f8-d59128795996-20261124163952.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-tolak-saksi-terlapor-i-dalam-sidang-pasar-ciparay",
  "category": "Bisnis",
  "title": "KPPU [Tolak] Saksi Terlapor I dalam Sidang Pasar Ciparay",
  "deck": "KPPU menolak saksi yang diajukan Terlapor I dalam sidang dugaan persekongkolan pemilihan mitra revitalisasi Pasar Desa Ciparay, karena dianggap tidak independen.",
  "date": "24 November 2026",
  "image": "assets/img/warung-makan.jpg",
  "tags": [
   "KPPU",
   "Pasar Ciparay",
   "Persaingan Usaha",
   "Bandung"
  ],
  "sourceUrl": "https://kppu.go.id/berita/majelis-kppu-tolak-saksi-terlapor-i-dalam-sidang-perkara-beauty-contest-pasar-ciparay",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "tnca-jawab-permintaan-bursa-pengendali-tambah-investasi-saham",
  "category": "Aksi Korporasi",
  "title": "TNCA Jawab Permintaan Bursa: Pengendali [Tambah] Investasi Saham",
  "deck": "TNCA menegaskan tak ada informasi material yang disembunyikan terkait volatilitas transaksi sahamnya, tapi menyebut pemegang saham pengendali berencana menambah investasi saham di perseroan.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TNCA",
   "UMA",
   "pemegang saham pengendali",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_TNCA_E023A_2233699f-34c1-4bf8-ade6-9f2f683186a9-20261124163657.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bfin-djemi-suhenda-resmi-jadi-komisaris-independen-baru",
  "category": "Aksi Korporasi",
  "title": "BFIN: Djemi Suhenda Resmi Jadi [Komisaris Independen] Baru",
  "deck": "OJK menyetujui Djemi Suhenda sebagai Komisaris Independen BFIN, efektif menggantikan Johanes Sutrisno sesuai keputusan RUPSLB 20 Mei 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BFIN",
   "komisaris independen",
   "tata kelola",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BFIN_E019_a4f44510-b321-4add-b203-74def29f632e-20261124163257.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-kota-27-nov-right-issue-100-miliar-saham-akuisisi-rp4-4-t",
  "category": "Aksi Korporasi",
  "title": "RUPSLB KOTA 27 Nov: [Right Issue] 100 Miliar Saham, Akuisisi Rp4,4 T",
  "deck": "KOTA berencana menerbitkan maksimal 100 miliar saham baru lewat HMETD untuk membiayai akuisisi dua perusahaan senilai Rp4,4 triliun.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "rights issue",
   "HMETD",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_KOTA_E0X1_e6d55a15-a708-4b4c-9d6b-4c7fe171a51e-20261124160957.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelunasan-obligasi-inkp-23-november-rampung-rp1-04-triliun",
  "category": "Aksi Korporasi",
  "title": "Pelunasan Obligasi INKP 23 November: [Rampung] Rp1,04 Triliun",
  "deck": "INKP melunasi pokok obligasi, sukuk mudharabah, dan obligasi dolar AS senilai total sekitar Rp1,04 triliun plus US$900 ribu pada 23 November 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk mudharabah",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_INKP_E019_725d5f7e-06bb-45b1-b6b7-a4bd9f29b579-20261124160623.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-sage-16-desember-agenda-ubah-susunan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "RUPSLB SAGE 16 Desember: [Agenda] Ubah Susunan Direksi-Komisaris",
  "deck": "Direksi SAGE memanggil RUPSLB pada 16 Desember 2026 dengan agenda tunggal mengubah susunan Direksi dan Dewan Komisaris Perseroan.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAGE",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_SAGE_E002_ea4b547c-3105-4c29-8872-e088df48c96b-20261124160243.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bali-siapkan-dana-rp414-85-miliar-sukuk-jatuh-tempo-15-des-2026",
  "category": "Aksi Korporasi",
  "title": "BALI Siapkan Dana Rp414,85 Miliar, Sukuk [Jatuh Tempo] 15 Des 2026",
  "deck": "BALI menyatakan kesiapan dana Rp414,85 miliar untuk melunasi pokok Sukuk Ijarah Seri A yang jatuh tempo 15 Desember 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BALI",
   "sukuk",
   "pelunasan utang",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BALI_E019_05f19eb0-bbac-4cac-8c94-592449f1a708-20261124155644.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpu-adhi-24-november-sidang-pertama-klaim-0-06-ekuitas",
  "category": "Aksi Korporasi",
  "title": "PKPU ADHI 24 November: Sidang Pertama, Klaim [0,06%] Ekuitas",
  "deck": "Sidang pertama digelar 24 November setelah dua vendor ajukan PKPU senilai Rp2,1 miliar, ADHI sebut nilainya cuma 0,06 persen dari ekuitas perseroan.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "PKPU",
   "Adhi Karya",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ADHI_E023A_9656909b-85c8-44c6-b551-6b0f0e72b8fc-20261124152029.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "totl-divestasi-saham-anak-usaha-di-lkp-rp3-85-miliar",
  "category": "Aksi Korporasi",
  "title": "TOTL [Divestasi] Saham Anak Usaha di LKP Rp3,85 Miliar",
  "deck": "Anak usaha TOTL, PT Total Persada Development, menjual seluruh 2.450 saham di PT Lestari Kirana Persada ke PT Anugrah Cahaya Solusindo senilai Rp3,85 miliar untuk fokus ke bisnis konstruksi inti.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "Total Bangun Persada",
   "divestasi",
   "anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_TOTL_E019_8905694d-7ac9-46c3-8609-1e29da9e24a2-20261124151231.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-bess-17-desember-perubahan-pasal-3-ad-ikuti-kbli-2025",
  "category": "Aksi Korporasi",
  "title": "RUPSLB BESS 17 Desember: [Perubahan] Pasal 3 AD Ikuti KBLI 2025",
  "deck": "RUPSLB BESS dijadwalkan 17 Desember 2026 untuk menyetujui perubahan Pasal 3 Anggaran Dasar demi menyesuaikan kode klasifikasi usaha dengan KBLI 2025.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BESS",
   "RUPSLB",
   "Anggaran Dasar",
   "KBLI 2025"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BESS_E002_8f17d499-040e-4fa4-bd9f-5150369e7053-20261124151222.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcid-liandhajani-jadi-komisaris-independen-baru-19-november-2026",
  "category": "Aksi Korporasi",
  "title": "TCID: Liandhajani Jadi [Komisaris Independen] Baru, 19 November 2026",
  "deck": "RUPS Mandom Indonesia menyetujui Liandhajani sebagai komisaris independen baru, efektif 19 November 2026, menambah jumlah komisaris independen jadi tiga dari dua sebelumnya.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCID",
   "Mandom Indonesia",
   "komisaris independen",
   "perubahan pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_TCID_E036_77a88aae-d248-4cbe-b07f-b46d3ba181bf-20261124150553.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpfi-direktur-jasin-hermawan-mundur-tunggu-rupslb",
  "category": "Aksi Korporasi",
  "title": "BPFI: Direktur Jasin Hermawan [Mundur], Tunggu RUPSLB",
  "deck": "Direktur PT Woori Finance Indonesia Tbk (BPFI), Jasin Hermawan, mengajukan pengunduran diri pada 24 November 2026, efektif setelah disahkan RUPSLB.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BPFI",
   "Woori Finance Indonesia",
   "pergantian direksi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BPFI_E019_fb04623c-0123-4afa-a7a8-f6ec4fdce2bf-20261124145941.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buyback-gpra-rp40-miliar-beli-maksimal-333-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "Buyback GPRA Rp40 Miliar: [Beli] Maksimal 333,3 Juta Saham",
  "deck": "GPRA berencana membeli kembali maksimal 333,33 juta saham atau 7,79% saham beredar senilai hingga Rp40 miliar, periode 23 November 2026 sampai 23 Februari 2027.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GPRA",
   "buyback saham",
   "Perdana Gapura Prima",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_GPRA_E006_bdc70493-5f8f-4a90-ad78-7fc078a35300-20261124142543.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ades-presiden-komisaris-mundur-efektif-usai-rupslb-16-des",
  "category": "Aksi Korporasi",
  "title": "ADES: Presiden Komisaris Mundur, [Efektif] Usai RUPSLB 16 Des",
  "deck": "Hanjaya Limanto mundur dari jabatan Presiden Komisaris ADES per 20 November 2026, efektif setelah disetujui RUPSLB 16 Desember 2026.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "pengunduran diri komisaris",
   "RUPSLB",
   "tata kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ADES_E019_fd3f6952-6af3-4509-adff-7200c6754714-20261124141948.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-fasw-27-nov-laba-9m-2026-rp230-miliar-balik-untung",
  "category": "Aksi Korporasi",
  "title": "Public Expose FASW 27 Nov: [Laba] 9M-2026 Rp230 Miliar, Balik Untung",
  "deck": "FASW menyampaikan materi Public Expose Tahunan untuk acara 27 November 2026, memuat laporan keuangan 9M-2026 yang berbalik untung dari rugi tahun lalu.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FASW",
   "Fajar Surya Wisesa",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_FASW_E003_1a77e247-2334-4fa9-ab85-b5fdef2705c6-20261124130821.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indonesia-inggris-jajaki-perjanjian-dagang-komprehensif",
  "category": "Global",
  "title": "Indonesia-Inggris Jajaki [Perjanjian] Dagang Komprehensif",
  "deck": "Indonesia mendorong perjanjian dagang komprehensif dengan Inggris menjelang berakhirnya fasilitas tarif preferensi UK-DCTS pada 2027.",
  "date": "24 November 2026",
  "image": "assets/img/kapal-batubara.jpg",
  "tags": [
   "Indonesia-Inggris",
   "Perdagangan",
   "Airlangga Hartarto",
   "UK-DCTS"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7245/menko-airlangga-tegaskan-komitmen-indonesia-untuk-memperkuat-kemitraan-ekonomi-dengan-inggris",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "bursa-berjangka-komoditi-tumbuh-54-pajak-final-disiapkan",
  "category": "Pasar Modal",
  "title": "Bursa Berjangka Komoditi Tumbuh 54%, Pajak [Final] Disiapkan",
  "deck": "Transaksi bursa berjangka komoditi melonjak 54,28 persen dalam 10 bulan 2026, sementara pemerintah menyiapkan skema pajak final baru bagi industri ini.",
  "date": "24 November 2026",
  "image": "assets/img/bursa-layar.jpg",
  "tags": [
   "Bappebti",
   "PPh Final",
   "Perdagangan Berjangka Komoditi",
   "Aspebtindo"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bappebti-perkuat-perlindungan-masyarakat-dan-dorong-penerapan-pph-final",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "fatwa-baru-akui-jual-beli-emas-digital-sah-secara-syariah",
  "category": "Bisnis",
  "title": "Fatwa Baru Akui Jual Beli Emas Digital [Sah] Secara Syariah",
  "deck": "DSN-MUI menerbitkan fatwa yang mengatur syarat jual beli emas fisik secara digital, melengkapi aturan teknis Bappebti yang sudah berlaku sejak 2025.",
  "date": "24 November 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [
   "emas digital",
   "Bappebti",
   "fatwa DSN-MUI",
   "syariah"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perdagangan-emas-fisik-secara-digital-diperbolehkan-sepanjang-penuhi-ketentuan-dan-batasan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "komisaris-independen-brrc-mundur-per-23-november-2026",
  "category": "Aksi Korporasi",
  "title": "Komisaris Independen BRRC [Mundur] per 23 November 2026",
  "deck": "Leo Herlambang mengundurkan diri sebagai Komisaris Independen PT Raja Roti Cemerlang Tbk per 23 November 2026, perusahaan sebut tidak ada dampak material.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRRC",
   "Komisaris Independen",
   "Tata Kelola Perusahaan",
   "Pengunduran Diri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_BRRC_E019_906b5078-7413-4758-a238-ccaa6197e1b7-20261124123951.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-adhi-lanjut-24-november-gagal-bayar-kupon-obligasi",
  "category": "Aksi Korporasi",
  "title": "Suspensi ADHI Lanjut 24 November: [Gagal Bayar] Kupon Obligasi",
  "deck": "ADHI menunda pembayaran bunga ke-18 obligasi Seri B dan C yang jatuh tempo 24 November 2026, BEI lanjutkan suspensi saham di seluruh pasar.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "suspensi saham",
   "obligasi",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_ADHI_B007_82ce797e-9e1b-4013-a309-6a9259ba5e8a-20261124121827.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mpmf-angkat-direktur-baru-sewaka-ramadhani-c-efektif-23-nov",
  "category": "Aksi Korporasi",
  "title": "MPMF Angkat [Direktur Baru] Sewaka Ramadhani C., Efektif 23 Nov",
  "deck": "MPMF mengangkat Sewaka Ramadhani C. sebagai direktur baru untuk masa jabatan tiga tahun, efektif 23 November 2026, menambah susunan direksi menjadi empat orang.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MPMF",
   "Direksi",
   "Multifinance",
   "Keterbukaan Informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_MPMF_E019_4e06fd96-f107-454c-878d-0725ec568bb6-20261124113804.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yoii-komisaris-independen-banua-p-sianturi-meninggal-dunia",
  "category": "Aksi Korporasi",
  "title": "YOII: Komisaris Independen Banua P Sianturi [Meninggal Dunia]",
  "deck": "Komisaris Independen YOII, Banua P Sianturi, meninggal dunia pada 24 November 2026; perseroan menyatakan tidak ada dampak operasional maupun keuangan.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YOII",
   "Komisaris Independen",
   "Tata Kelola Perusahaan",
   "Asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_YOII_E019_e7d67dca-1b16-439e-922c-88f57c6c2ff9-20261124113207.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-tipis-ke-rp2-507-000-per-gram-hari-ini",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Tipis ke Rp2.507.000 per Gram Hari Ini",
  "deck": "Harga emas Antam naik tipis Rp2.000 menjadi Rp2.507.000 per gram pada 24 November 2026, sementara harga buyback naik ke Rp2.150.000 per gram.",
  "date": "24 November 2026",
  "image": "assets/img/harga-emas-antam-naik-tipis-ke-rp2-507-000-per-gram-hari-ini.jpg",
  "imageV": "mwuav80n",
  "tags": [
   "emas",
   "harga emas antam",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480016-naik-tipis-harga-emas-antam-hari-ini-24-november-2026-jadi-rp2507000-per-gram"
 },
 {
  "slug": "obligasi-apic-tahap-i-rp1-triliun-ditawarkan-mulai-30-nov",
  "category": "Aksi Korporasi",
  "title": "Obligasi APIC Tahap I: [Rp1 Triliun] Ditawarkan Mulai 30 Nov",
  "deck": "Pacific Strategic Financial (APIC) membuka masa penawaran awal Obligasi Berkelanjutan I Tahap I senilai maksimal Rp1 triliun pada 30 November, bagian dari program senilai Rp2 triliun.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APIC",
   "obligasi",
   "Pacific Strategic Financial",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_APIC_E019_5b2797c4-8019-42d5-a7e9-6aed9de099ed-20261124110201.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penjualan-mobil-diproyeksi-lampaui-target-850-ribu-unit",
  "category": "Industri",
  "title": "Penjualan Mobil Diproyeksi [Lampaui] Target 850 Ribu Unit",
  "deck": "GAIKINDO memproyeksikan penjualan mobil nasional 2026 melampaui target 850 ribu unit, didorong pertumbuhan penjualan domestik dua digit sepanjang Januari-Oktober.",
  "date": "24 November 2026",
  "image": "assets/img/penjualan-mobil-diproyeksi-lampaui-target-850-ribu-unit.jpg",
  "imageV": "mwu5jhat",
  "tags": [
   "otomotif",
   "GAIKINDO",
   "penjualan mobil",
   "ekspor otomotif"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/permata-bank-gaikindo-auto-week-2026-kebut-penjualan-mobil-di-akhir-tahun/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "kppu-sulsel-awasi-tarif-transportasi-jelang-nataru",
  "category": "Bisnis",
  "title": "KPPU Sulsel Awasi Tarif Transportasi Jelang [Nataru]",
  "deck": "KPPU Makassar berkoordinasi dengan Dishub Sulsel dan sejumlah instansi transportasi untuk mencegah pengaturan tarif saat lonjakan permintaan Natal dan Tahun Baru.",
  "date": "24 November 2026",
  "image": "assets/img/rumah-subsidi.jpg",
  "tags": [
   "KPPU",
   "Transportasi",
   "Nataru",
   "Sulawesi Selatan"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-makassar-kawal-persaingan-sehat-di-sektor-transportasi-jelang-nataru",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "bank-bjb-juara-umum-fkijk-jabar-2026",
  "category": "Perbankan",
  "title": "bank bjb [Juara Umum] FKIJK Jabar 2026",
  "deck": "bank bjb memborong tujuh penghargaan dan menyabet gelar juara umum FOBS FKIJK Jawa Barat 2026, hasil kontingen 90 pegawai di cabang olahraga, seni, dan budaya.",
  "date": "24 November 2026",
  "image": "assets/img/bank-bjb-juara-umum-fkijk-jabar-2026.jpg",
  "imageV": "mwu5jhpp",
  "tags": [
   "bank bjb",
   "FKIJK Jabar 2026",
   "OJK Jawa Barat",
   "perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/480002-borong-7-penghargaan-bank-bjb-raih-juara-umum-fkijk-jabar-2026"
 },
 {
  "slug": "suspensi-inps-dicabut-24-november-perdagangan-dibuka-lagi",
  "category": "Aksi Korporasi",
  "title": "Suspensi INPS Dicabut 24 November, [Perdagangan] Dibuka Lagi",
  "deck": "Bursa mencabut suspensi saham INPS mulai sesi I Call Auction, Selasa 24 November 2026, setelah syarat Papan Pemantauan Khusus dipenuhi.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INPS",
   "suspensi saham",
   "BEI",
   "private placement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_INPS_B007_c039d07c-68c4-4038-a0cd-3fd2b5276b6e-20261124085932.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-negosiasi-ekspansi-usaha-dengan-dua-mitra-gagal",
  "category": "Aksi Korporasi",
  "title": "PPGL: Negosiasi Ekspansi Usaha dengan Dua Mitra [Gagal]",
  "deck": "Negosiasi pengembangan usaha PPGL dengan PT Natadana Solusi Pratama dan PT Wani Piro Rek gagal disepakati 23 November 2026, perseroan fokus kembali ke freight forwarding.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "freight forwarding",
   "negosiasi bisnis",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_PPGL_E019_8825634d-9280-4af1-9a7f-8b03280208a2-20261124084853.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jensen-huang-kembali-pimpin-nvidia-beri-apresiasi-ke-jajaran",
  "category": "Teknologi",
  "title": "Jensen Huang [Kembali] Pimpin Nvidia, Beri Apresiasi ke Jajaran",
  "deck": "Jensen Huang resmi kembali menjabat CEO dan Presiden Nvidia, lalu berterima kasih kepada dewan direksi, Harvey Jones, Colette Kress, karyawan, dan keluarganya.",
  "date": "24 November 2026",
  "image": "assets/img/jensen-huang-kembali-pimpin-nvidia-beri-apresiasi-ke-jajaran.jpg",
  "imageV": "mwtwy3r9",
  "tags": [
   "Nvidia",
   "Jensen Huang",
   "CEO Nvidia",
   "Pergantian Pemimpin"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479966-kembali-menjadi-ceo-nvidia-jensen-huang-berterima-kasih-kepada-orang-ini"
 },
 {
  "slug": "xmes-2-etf-danareksa-terancam-bubar-nab-di-bawah-rp10-m",
  "category": "Aksi Korporasi",
  "title": "XMES: 2 ETF Danareksa Terancam [Bubar], NAB di Bawah Rp10 M",
  "deck": "Dua ETF kelolaan Danareksa Investment Management, Mandiri ETF LQ45 dan BRI MI Gold ETF Syariah, memiliki NAB di bawah Rp10 miliar per 30 Oktober 2026, ambang wajib bubar OJK.",
  "date": "24 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMES",
   "Danareksa Investment Management",
   "Reksa Dana ETF",
   "NAB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261124_XMES_E023A_2f55597b-701f-43ef-ab99-23374618e35e-20261124045019.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmlf-nab-di-bawah-rp10-m-bubar-mengancam-jika-120-hari-bursa",
  "category": "Aksi Korporasi",
  "title": "XMLF: NAB di Bawah Rp10 M, [Bubar] Mengancam jika 120 Hari Bursa",
  "deck": "Danareksa Investment Management menjawab permintaan penjelasan Bursa: NAB ETF LQ45 dan Gold ETF Syariah di bawah Rp10 miliar per 30 Oktober 2026, berisiko wajib bubar.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMLF",
   "Danareksa Investment Management",
   "ETF",
   "NAB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XMLF_E023A_31ffd676-1726-4fc4-8b31-d93b99964e47-20261123231709.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmsk-2-etf-grup-danareksa-im-nav-di-bawah-rp10-m-risiko-bubar",
  "category": "Aksi Korporasi",
  "title": "XMSK: 2 ETF Grup Danareksa IM NAV di Bawah Rp10 M [Risiko Bubar]",
  "deck": "Danareksa Investment Management melaporkan dua ETF di grupnya, LQ45 dan Gold ETF Syariah BRI MI, NAB-nya di bawah Rp10 miliar per akhir Oktober, berisiko dibubarkan jika berlanjut 120 hari bursa.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMSK",
   "Danareksa Investment Management",
   "ETF",
   "merger manajer investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XMSK_E023A_0246b571-a294-4762-9ebf-64f2d8950ade-20261123230554.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmlf-danareksa-pastikan-5-etf-lanjut-pasca-merger-direksi-berubah",
  "category": "Aksi Korporasi",
  "title": "XMLF: Danareksa Pastikan 5 ETF Lanjut Pasca Merger, [Direksi] Berubah",
  "deck": "Danareksa Investment Management menjelaskan ke Bursa bahwa penggabungan manajer investasi tidak mengganggu lima produk ETF, meski NAB dua produk masih di bawah Rp10 miliar dan susunan direksi berubah.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMLF",
   "ETF",
   "Danareksa Investment Management",
   "merger manajer investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XMLF_E023A_911a8e47-f768-4876-bc7a-10999e737f74-20261123230231.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdif-danareksa-im-jelaskan-merger-nab-2-etf-berisiko-bubar",
  "category": "Aksi Korporasi",
  "title": "XDIF: Danareksa IM Jelaskan Merger, [NAB] 2 ETF Berisiko Bubar",
  "deck": "Danareksa IM menjelaskan ke Bursa bahwa merger manajer investasi tak mengganggu 5 ETF yang dikelola, tapi NAB ETF LQ45 Mandiri dan Gold Syariah BRI MI sudah di bawah Rp10 miliar.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDIF",
   "Danareksa Investment Management",
   "ETF",
   "merger manajer investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XDIF_E023A_2c43571d-61db-4251-83dd-8e864a58a87f-20261123224513.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xdes-nab-di-bawah-rp10-m-per-30-okt-risiko-bubar-jika-berlanjut",
  "category": "Aksi Korporasi",
  "title": "XDES: NAB di Bawah Rp10 M per 30 Okt, [Risiko] Bubar jika Berlanjut",
  "deck": "Manajer investasi menyatakan NAB reksa dana ETF emas syariah XDES sudah di bawah Rp10 miliar per 30 Oktober 2026, memicu risiko pembubaran wajib jika berlanjut 120 hari bursa.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XDES",
   "ETF Emas Syariah",
   "Danareksa Investment Management",
   "NAB Reksa Dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XDES_E023A_566ec473-2d47-4f83-bf0f-88f0741ed305-20261123223437.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-asha-19-nov-direksi-komisaris-diangkat-kembali-5-tahun",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ASHA 19 Nov: Direksi-Komisaris [Diangkat Kembali] 5 Tahun",
  "deck": "RUPSLB ASHA menyetujui dispensasi keterlambatan dan pengangkatan kembali direksi-komisaris lama untuk 5 tahun, serta penyesuaian anggaran dasar soal klasifikasi usaha.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASHA",
   "RUPSLB",
   "pengangkatan kembali direksi",
   "anggaran dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ASHA_E019_a20957d2-0eb6-47dd-a7cd-746ef52329c3-20261123213038.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-pgjo-digelar-30-desember-pemanggilan-8-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSLB PGJO Digelar 30 Desember, [Pemanggilan] 8 Desember",
  "deck": "PGJO menjadwalkan RUPSLB pada 30 Desember 2026, dengan pemanggilan resmi 8 Desember dan batas usul agenda pemegang saham 1 Desember 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "RUPSLB",
   "Bahtera Bumi Raya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_PGJO_E001_7bc944b5-7208-4aa9-ba11-8e70540e790d-20261123201820.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgwg-jaminan-perusahaan-rp279-m-ke-bank-mandiri-untuk-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "DGWG: [Jaminan Perusahaan] Rp279 M ke Bank Mandiri untuk Anak Usaha",
  "deck": "DGWG memberi jaminan perusahaan maksimum Rp279,315 miliar ke Bank Mandiri untuk fasilitas modal kerja dua anak usahanya, DGW dan FIT, setara 25,6% dari ekuitas Perseroan.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "transaksi material",
   "corporate guarantee",
   "Bank Mandiri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_DGWG_E025B_a343e29e-34c0-4d04-a874-e5cd617e10df-20261123195725.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jaminan-perusahaan-dgwg-rp60-m-ke-bank-danamon-untuk-anak-usaha-fit",
  "category": "Aksi Korporasi",
  "title": "Jaminan Perusahaan DGWG Rp60 M ke [Bank Danamon] untuk Anak Usaha FIT",
  "deck": "DGWG memberi jaminan perusahaan hingga Rp60 miliar ke Bank Danamon untuk mendukung fasilitas modal kerja anak usahanya, PT Fertilizer Inti Technology.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGWG",
   "jaminan perusahaan",
   "transaksi afiliasi",
   "Bank Danamon"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_DGWG_E025B_0f397381-f7fd-4aa4-a3e2-e192ecfd14d9-20261123195612.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nano-public-expose-26-november-pendapatan-430-laba-rp3-25-m",
  "category": "Aksi Korporasi",
  "title": "NANO Public Expose 26 November: Pendapatan +430%, [Laba Rp3,25 M]",
  "deck": "Dalam materi Public Expose 26 November 2026, NANO melaporkan pendapatan Januari-Oktober melonjak ke Rp356,96 miliar dan laba neto Rp3,25 miliar, berbalik dari rugi tahun lalu.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NANO",
   "Public Expose",
   "kinerja keuangan",
   "Nanotech Indonesia Global"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_NANO_E003_5387254d-825c-4dd9-bfb2-940d69d6278f-20261123195014.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-uni-eropa-teken-ieu-cepa-berlaku-sementara-2027",
  "category": "Global",
  "title": "RI-Uni Eropa Teken [IEU-CEPA], Berlaku Sementara 2027",
  "deck": "Indonesia dan Uni Eropa menandatangani IEU-CEPA dan perjanjian investasi di Brussels, membuka tarif nol persen untuk 90,4 persen produk Indonesia ke pasar 450 juta penduduk Eropa.",
  "date": "23 November 2026",
  "image": "assets/img/tambang-mineral.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "perdagangan",
   "investasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7242/menko-airlangga-bertemu-komisioner-perdagangan-komisi-eropa-matangkan-penandatanganan-dan-implementasi-ieu-cepa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "obligasi-mbma-tahap-vi-rampung-terbit-rp600-9-miliar",
  "category": "Aksi Korporasi",
  "title": "Obligasi MBMA Tahap VI Rampung: [Terbit] Rp600,9 Miliar",
  "deck": "Penawaran Obligasi Berkelanjutan I Tahap VI MBMA resmi ditutup dengan total Rp600,905 miliar diterbitkan dalam tiga seri berbunga 9-10,75 persen.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "Obligasi",
   "Merdeka Battery Materials",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_MBMA_E019_f28b96f8-25fe-409b-b3c1-a856e91be251-20261123193543.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dgik-realisasi-400-2-juta-saham-treasuri-dialihkan-ke-gdk",
  "category": "Aksi Korporasi",
  "title": "DGIK: [Realisasi] 400,2 Juta Saham Treasuri Dialihkan ke GDK",
  "deck": "DGIK merampungkan penjualan 400.214.500 saham treasuri kepada pengendali GDK pada 19 November 2026, menuntaskan rencana yang diumumkan 4 November.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGIK",
   "saham treasuri",
   "Global Dinamika Kencana",
   "struktur permodalan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_DGIK_E019_d40ae391-454e-4ee5-82f4-f2c0bbb27767-20261123193206.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-toba-19-november-perubahan-kovenan-rasio-keuangan-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPO TOBA 19 November: [Perubahan] Kovenan Rasio Keuangan Disetujui",
  "deck": "RUPO pemegang obligasi TOBA menyetujui perubahan kovenan rasio keuangan dan penggunaan dana, didukung 99,79 persen suara pada 19 November 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "RUPO",
   "obligasi",
   "TBS Energi Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_TOBA_E019_22868d16-744c-4c91-94ac-91d65f07c03b-20261123191506.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-toba-19-november-perubahan-penggunaan-dana-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPO TOBA 19 November: [Perubahan] Penggunaan Dana Disetujui",
  "deck": "RUPO TOBA menyetujui perubahan penggunaan dana obligasi Rp125 miliar: Rp89 miliar untuk modal kerja dan Rp24,07 miliar untuk pelunasan sebagian obligasi 2023 Seri A yang jatuh tempo 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "RUPO",
   "TBS Energi Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_TOBA_E019_b71eeae2-ced5-43fa-ac50-b571c46ada80-20261123191233.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-toba-27-november-ebitda-naik-39-rugi-menyusut",
  "category": "Aksi Korporasi",
  "title": "Public Expose TOBA 27 November: [EBITDA] Naik 39%, Rugi Menyusut",
  "deck": "TBS Energi Utama memaparkan kinerja: pendapatan turun 10,7% menjadi US$257,3 juta, namun EBITDA disesuaikan naik 39,3% dan rugi bersih menyusut 72,3% di tengah divestasi bisnis batu bara.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "TBS Energi Utama",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_TOBA_E003_2c2eb5de-4220-4e3b-a7aa-386358f8513f-20261123191124.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tbig-akuisisi-edotco-indonesia-pjb-100-saham-diteken",
  "category": "Aksi Korporasi",
  "title": "TBIG Akuisisi EDOTCO Indonesia: [PJB] 100% Saham Diteken",
  "deck": "TBIG menandatangani Perjanjian Jual Beli dengan Axiata Group Berhad dan EDOTCO Group untuk mengambil alih 100% saham PT EDOTCO Infrastruktur Indonesia, 23 November 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TBIG",
   "akuisisi",
   "EDOTCO",
   "menara telekomunikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_TBIG_E019_5e608351-6ef0-4339-89e6-67e220382136-20261123190524.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-toba-tahap-iii-19-nov-kovenan-rasio-keuangan-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPO TOBA Tahap III 19 Nov: [Kovenan Rasio Keuangan] Disetujui",
  "deck": "Pemegang obligasi TOBA Tahap III senilai Rp175 miliar menyetujui 100 persen perubahan syarat rasio keuangan dalam RUPO 19 November 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "RUPO",
   "kovenan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_TOBA_E019_ee4e0034-371b-485b-8f5b-9269efd9a0c5-20261123190325.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-i-toba-19-nov-kovenan-rasio-keuangan-disetujui-100",
  "category": "Aksi Korporasi",
  "title": "RUPO I TOBA 19 Nov: [Kovenan Rasio Keuangan] Disetujui 100%",
  "deck": "Pemegang Obligasi I TBS Energi Utama Tahun 2023 menyetujui bulat perubahan syarat rasio keuangan dalam RUPO 19 November, tanpa satu pun suara menolak.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "RUPO",
   "obligasi",
   "kovenan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_TOBA_E019_438fc7a4-e1e0-49d6-a497-4fb461814d9d-20261123185944.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-sudah-salurkan-843-ambulans-sejak-2022",
  "category": "BUMN",
  "title": "BRI Sudah Salurkan [843] Ambulans Sejak 2022",
  "deck": "BRI Peduli menyalurkan 843 ambulans ke berbagai daerah sejak 2022 dan menggelar cek kesehatan gratis untuk lebih dari 20 ribu orang, bertepatan dengan Hari Kesehatan Nasional ke-62.",
  "date": "23 November 2026",
  "image": "assets/img/bri-sudah-salurkan-843-ambulans-sejak-2022.jpg",
  "imageV": "mwt998y0",
  "tags": [
   "BRI",
   "TJSL",
   "ambulans",
   "kesehatan masyarakat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479919-bri-peduli-salurkan-843-ambulans-dan-hadirkan-pemeriksaan-kesehatan-gratis"
 },
 {
  "slug": "netv-direktur-utama-surya-hadiwinata-mundur-rups-dalam-90-hari",
  "category": "Aksi Korporasi",
  "title": "NETV: Direktur Utama Surya Hadiwinata [Mundur], RUPS dalam 90 Hari",
  "deck": "Direktur Utama NETV Surya Hadiwinata mengundurkan diri sejak 19 November 2026; RUPS penentu pengganti digelar paling lambat 90 hari sesuai POJK 33/2014.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NETV",
   "pengunduran diri direksi",
   "direktur utama",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_NETV_E019_d5cd3c8c-0bdb-46fe-8d95-ca7793ffd95d-20261123185912.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-meta-26-november-kepemilikan-mptis-capai-97-14",
  "category": "Aksi Korporasi",
  "title": "Public Expose META 26 November: [Kepemilikan] MPTIS Capai 97,14%",
  "deck": "Materi Public Expose Tahunan 2026 META mengungkap kepemilikan MPTIS naik ke 97,14% (99,32% termasuk treasury), sementara pemegang saham minoritas tersisa 5.685 pihak per September 2025.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "Nusantara Infrastructure",
   "Public Expose",
   "Kepemilikan Saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_META_E003_280b1409-6732-412c-93bd-fc27372a95ff-20261123183019.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buyback-cbdk-agustus-november-beli-36-3-juta-saham-lagi",
  "category": "Aksi Korporasi",
  "title": "Buyback CBDK Agustus-November: [Beli] 36,3 Juta Saham Lagi",
  "deck": "Realisasi buyback CBDK periode 20 Agustus-19 November 2026 capai 36,3 juta saham senilai Rp117,03 miliar, naikkan capaian ke 53,48% dari rencana total.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBDK",
   "buyback saham",
   "PIK2",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_CBDK_E019_8669992b-d0ae-42fb-aad8-f3eba209a7c0-20261123182950.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akuisisi-atap-dbs-teken-ppjb-ambil-51-saham-dari-tp",
  "category": "Aksi Korporasi",
  "title": "Akuisisi ATAP: DBS Teken [PPJB] Ambil 51% Saham dari TP",
  "deck": "DBS dan PT Trimitra Prawara menandatangani Perjanjian Pengikatan Jual Beli atas 637,5 juta saham ATAP, setara 51% modal disetor, pada 20 November 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATAP",
   "akuisisi",
   "Dana Berguna Sejahtera",
   "Trimitra Prawara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ATAP_E019_14304a2f-a5a1-4d59-a2ab-c5f56ea1eea1-20261123180738.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-wows-2026-target-pendapatan-rp228-74-miliar",
  "category": "Aksi Korporasi",
  "title": "Public Expose WOWS 2026: [Target] Pendapatan Rp228,74 Miliar",
  "deck": "Materi Public Expose Tahunan PT Ginting Jaya Energi Tbk menargetkan pendapatan Rp228,74 miliar dan laba usaha Rp13,5 miliar pada 2026, naik dari realisasi 2025.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WOWS",
   "Public Expose",
   "Ginting Jaya Energi",
   "Jasa Migas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_WOWS_E003_21fe562a-500b-4f46-839d-9883ec11bff9-20261123175908.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "okas-soal-volatilitas-saham-tak-ada-informasi-material",
  "category": "Aksi Korporasi",
  "title": "OKAS Soal Volatilitas Saham: [Tak Ada] Informasi Material",
  "deck": "Bursa Efek Indonesia meminta penjelasan OKAS soal volatilitas transaksi sahamnya. Perseroan menyatakan tidak mengetahui informasi material maupun rencana pemegang saham utama.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OKAS",
   "Ancora Indonesia Resources",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_OKAS_E023A_5e8e1c24-19c1-46d4-9b5b-8f31f0876ac4-20261123175630.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "okas-9m26-laba-bersih-pulih-jadi-us-2-5-juta-ebitda-20",
  "category": "Aksi Korporasi",
  "title": "OKAS 9M26: Laba Bersih [Pulih] jadi US$2,5 Juta, EBITDA -20%",
  "deck": "OKAS catat laba bersih US$2,5 juta pada 9M26, berbalik dari rugi, meski EBITDA turun 20 persen akibat margin tergerus.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OKAS",
   "Ancora Indonesia Resources",
   "kinerja keuangan",
   "blasting services"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_OKAS_E019_12d67962-5647-4598-bc66-72e3c535d4d2-20261123175520.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "xmgb-unit-penyertaan-berkurang-5-juta-jadi-49-juta",
  "category": "Aksi Korporasi",
  "title": "XMGB: Unit Penyertaan [Berkurang] 5 Juta Jadi 49 Juta",
  "deck": "Unit penyertaan Reksa Dana Majoris Government Bonds ETF Indonesia (XMGB) turun dari 54 juta menjadi 49 juta unit pada 23 November 2026 setelah penarikan 5 juta unit.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XMGB",
   "ETF",
   "reksa dana",
   "obligasi pemerintah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XMGB_E019_e2cd0d89-ada6-42e8-8181-9e1b493a4e6d-20261123174758.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ccsi-dirikan-anak-usaha-telekomunikasi-modal-disetor-rp9-miliar",
  "category": "Aksi Korporasi",
  "title": "CCSI Dirikan [Anak Usaha] Telekomunikasi, Modal Disetor Rp9 Miliar",
  "deck": "CCSI membentuk anak usaha PT Varuna Konektivitas Digital di bidang infrastruktur telekomunikasi, modal disetor Rp9 miliar, 99,99 persen dimiliki CCSI.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CCSI",
   "anak usaha",
   "telekomunikasi",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_CCSI_E019_b1379a91-7f29-48c8-8c53-25acfeca7e07-20261123174620.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-lion-26-nov-revisi-penjualan-2026-turun-44-5",
  "category": "Aksi Korporasi",
  "title": "Public Expose LION 26 Nov: [Revisi] Penjualan 2026 Turun 44,5%",
  "deck": "Lion Metal Works (LION) memangkas target penjualan 2026 dari Rp468 miliar jadi Rp259,6 miliar dan kini memproyeksikan rugi tahun berjalan, bukan laba seperti target awal.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LION",
   "Lion Metal Works",
   "Public Expose",
   "Revisi Target Usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_LION_E003_5d8e38e4-4790-41a8-b976-d29be27d71d1-20261123173924.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-rupsu-wika-mundur-ke-14-16-desember-bahas-gagal-bayar",
  "category": "Aksi Korporasi",
  "title": "RUPO-RUPSU WIKA Mundur ke 14-16 Desember, Bahas [Gagal Bayar]",
  "deck": "WIKA menjadwalkan ulang rapat pemegang obligasi dan sukuk ke 14-16 Desember 2026 untuk membahas gagal bayar bunga dan bagi hasil di beberapa seri surat utang.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "sukuk mudharabah",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_WIKA_E019_59c4055c-0619-416a-86f8-e9c3800c3a6a-20261123173601.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-wika-obligasi-ii-tahap-i-ralat-mundur-ke-16-desember",
  "category": "Aksi Korporasi",
  "title": "RUPO WIKA Obligasi II Tahap I [Ralat]: Mundur ke 16 Desember",
  "deck": "WIKA mengubah jadwal RUPO pemegang Obligasi Berkelanjutan II Tahap I 2021 dari 7 menjadi 16 Desember 2026, membahas kelalaian bayar bunga dan pokok Seri B dan C.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "obligasi",
   "gagal bayar",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_WIKA_E019_60169934-ece7-4783-b7a2-de878bbcb1e0-20261123173446.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupsu-sukuk-i-wika-15-desember-ralat-mundur-dari-9-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSU Sukuk I WIKA 15 Desember: [Ralat] Mundur dari 9 Desember",
  "deck": "RUPSU pemegang Sukuk Mudharabah WIKA Tahap I 2020 diundur dari 9 ke 15 Desember 2026, membahas kelalaian pembayaran bagi hasil seri B dan C.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_WIKA_E019_e1c4fbfa-b977-4829-b81c-2beea955f56b-20261123173422.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupsu-sukuk-iii-wika-15-desember-ralat-mundur-dari-9-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSU Sukuk III WIKA 15 Desember: [Ralat] Mundur dari 9 Desember",
  "deck": "RUPSU pemegang Sukuk Mudharabah III WIKA Tahap I 2022 diundur dari 9 ke 15 Desember 2026, membahas gagal bayar bagi hasil dua periode berturut-turut di tiga seri sukuk.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk mudharabah",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_WIKA_E019_5bfd8880-6e42-4e63-ae49-1b932f1b24c5-20261123173350.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupsu-sukuk-ii-wika-14-desember-mundur-dari-8-desember",
  "category": "Aksi Korporasi",
  "title": "RUPSU Sukuk II WIKA 14 Desember: [Mundur] dari 8 Desember",
  "deck": "RUPSU pemegang Sukuk Mudharabah Berkelanjutan II WIKA Tahap II Tahun 2022 diundur dari 8 ke 14 Desember 2026 untuk membahas gagal bayar bagi hasil di tiga seri sukuk.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk mudharabah",
   "gagal bayar",
   "RUPSU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_WIKA_E019_fd8fbb29-ec66-4b7d-86ea-d47004b05095-20261123173247.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ijee-direktur-utama-hendrik-tee-mundur-rups-90-hari",
  "category": "Aksi Korporasi",
  "title": "IJEE: Direktur Utama Hendrik Tee [Mundur], RUPS 90 Hari",
  "deck": "Direktur Utama IJEE Hendrik Tee mengajukan pengunduran diri lewat surat 20 November 2026. Perseroan wajib memutuskannya lewat RUPS atau keputusan sirkuler dalam 90 hari.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "pengunduran diri direksi",
   "RUPS",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_IJEE_E019_7514f554-64ad-4b3f-812b-0f700aaeb132-20261123172506.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akuisisi-atap-dana-berguna-sejahtera-umumkan-progres-negosiasi",
  "category": "Aksi Korporasi",
  "title": "[Akuisisi] ATAP: Dana Berguna Sejahtera Umumkan Progres Negosiasi",
  "deck": "PT Dana Berguna Sejahtera mengumumkan perkembangan negosiasi rencana pengambilalihan PT Trimitra Prawara Goldland Tbk (ATAP), namun rincian harga dan persentase saham belum diungkap.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ATAP",
   "akuisisi",
   "Trimitra Prawara Goldland",
   "pengambilalihan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ATAP_E019_6a44af48-abac-406a-b4b7-84db1d856428-20261123171636.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-ades-16-desember-2026-agenda-menyusul-24-november",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ADES 16 Desember: [Stock Split] 1:10 dan Pergantian Komisaris",
  "deck": "Surat pemanggilan resmi RUPSLB ADES 24 November 2026 mengungkap agenda: pergantian susunan Dewan Komisaris dan stock split saham rasio 1:10, menjelang rapat 16 Desember 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADES",
   "RUPSLB",
   "Stock Split",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ADES_E001_dcc2d903-f145-4b2a-83e3-c0671cda2f10-20261123171510.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bunga-obligasi-adhi-24-november-berpotensi-tertunda",
  "category": "Aksi Korporasi",
  "title": "Bunga Obligasi ADHI 24 November: [Berpotensi Tertunda]",
  "deck": "ADHI menyatakan berpotensi menunda bunga ke-18 obligasi Rp60,82 miliar jatuh tempo 24 November 2026, setelah dua RUPO sebelumnya menolak usulan penjadwalan ulang.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "obligasi korporasi",
   "restrukturisasi utang",
   "BUMN karya"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ADHI_E019_16e78524-42bc-4004-9eef-f9379d935df3-20261123171442.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppro-marketing-sales-rp383-miliar-lampaui-realisasi-2025",
  "category": "Aksi Korporasi",
  "title": "PPRO: Marketing Sales Rp383 Miliar [Lampaui] Realisasi 2025",
  "deck": "PPRO membukukan marketing sales Rp383 miliar hingga September 2026, melampaui realisasi sepanjang 2025, didukung divestasi lahan di Wiyung, Surabaya.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRO",
   "PP Properti",
   "marketing sales",
   "divestasi aset"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_PPRO_E019_6c3b1425-52cc-4d5d-80aa-547c161b53e5-20261123170944.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-dalami-dugaan-persekongkolan-tender-pasar-ciparay",
  "category": "Bisnis",
  "title": "KPPU Dalami Dugaan [Persekongkolan] Tender Pasar Ciparay",
  "deck": "KPPU memeriksa saksi dari pemerintah Kabupaten Bandung terkait dugaan persekongkolan dalam pemilihan mitra revitalisasi Pasar Ciparay, menyoroti dokumen perencanaan yang tak lengkap.",
  "date": "23 November 2026",
  "image": "assets/img/kppu-dalami-dugaan-persekongkolan-tender-pasar-ciparay.jpg",
  "imageV": "mwt42caz",
  "tags": [],
  "kreditFoto": "Komisi Pengawas Persaingan Usaha",
  "sourceUrl": "https://kppu.go.id/berita/kppu-dalami-transparansi-pemilihan-mitra-revitalisasi-pasar-ciparay-soroti-dokumen-perencanaan-dan-skema-bgs",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "dematerialisasi-saham-smsm-tenggat-serahkan-sks-sebelum-6-mei-2030",
  "category": "Aksi Korporasi",
  "title": "Dematerialisasi Saham SMSM: [Tenggat] Serahkan SKS Sebelum 6 Mei 2030",
  "deck": "Selamat Sempurna meminta pemegang saham warkat menyerahkan SKS ke BAE paling lambat 6 Mei 2030 sesuai POJK 9/2025, atau sahamnya terancam jadi aset tidak diklaim.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMSM",
   "Selamat Sempurna",
   "Dematerialisasi Saham",
   "POJK 9/2025"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_SMSM_E019_91ccf1fb-568e-4d4f-a98b-f8902220dc2e-20261123170831.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "35-kesepakatan-ri-tiongkok-diteken-di-shenzhen-rp274-triliun",
  "category": "Bisnis",
  "title": "35 Kesepakatan RI-Tiongkok Diteken di Shenzhen, [Rp274 Triliun]",
  "deck": "Presiden Prabowo Subianto menyaksikan penandatanganan 35 kesepakatan bisnis Indonesia-Tiongkok di Shenzhen dengan rencana investasi US$15,76 miliar dan proyeksi 30.461 tenaga kerja.",
  "date": "23 November 2026",
  "image": "assets/img/35-kesepakatan-ri-tiongkok-diteken-di-shenzhen-rp274-triliun.jpg",
  "imageV": "mwt42dm8",
  "tags": [
   "Investasi",
   "Tiongkok",
   "BKPM",
   "Shenzhen"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/35-kesepakatan-bisnis-indonesia-tiongkok-diteken-di-shenzhen-rencana-investasi-tembus-rp274-triliun",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "esdm-pastikan-tidak-ada-izin-tambang-di-ujung-kulon",
  "category": "Energi",
  "title": "ESDM Pastikan [Tidak] Ada Izin Tambang di Ujung Kulon",
  "deck": "Menteri ESDM Bahlil Lahadalia menegaskan tidak akan ada izin pertambangan di Taman Nasional Ujung Kulon, menanggapi isu yang beredar di masyarakat.",
  "date": "23 November 2026",
  "image": "assets/img/esdm-pastikan-tidak-ada-izin-tambang-di-ujung-kulon.jpg",
  "imageV": "mwt42f74",
  "tags": [
   "Ujung Kulon",
   "ESDM",
   "Pertambangan",
   "Konservasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/rumah-badak-jawa-tetap-terlindungi-bahlil-pastikan-tak-ada-izin-tambang-di-ujung-kulon",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "pemerintah-rumuskan-skema-70-persen-tambang-untuk-negara",
  "category": "Energi",
  "title": "Pemerintah Rumuskan Skema [70 Persen] Tambang untuk Negara",
  "deck": "Pemerintah merumuskan skema agar 70 persen manfaat sektor tambang menjadi bagian negara, mengacu pada Pasal 33 UUD 1945 dan arahan Presiden Prabowo Subianto.",
  "date": "23 November 2026",
  "image": "assets/img/pemerintah-rumuskan-skema-70-persen-tambang-untuk-negara.jpg",
  "imageV": "mwt42gxo",
  "tags": [
   "tambang",
   "ESDM",
   "Pasal 33 UUD 1945",
   "Bahlil Lahadalia"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hasil-tambang-untuk-sekolah-hingga-air-bersih-pemerintah-rumuskan-skema-70-persen-bagi-negara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "bris-laba-bersih-9m2026-naik-10-jadi-rp6-13-triliun-car-turun",
  "category": "Aksi Korporasi",
  "title": "BRIS: Laba Bersih 9M2026 [Naik] 10% jadi Rp6,13 Triliun, CAR Turun",
  "deck": "Laporan keuangan interim auditan Kuartal III 2026 BRIS mencatat laba bersih Rp6,13 triliun, naik dari Rp5,57 triliun, sementara rasio kecukupan modal turun ke 20,84 persen.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "Bank Syariah Indonesia",
   "laporan keuangan",
   "CAR"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f-8cf3dc75-a89b-4d4f-9549-4284c3f65c40-1/FinancialStatement-2026-III-BRIS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-vici-rp7-7-per-saham-cair-16-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim VICI Rp7,7 per Saham, [Cair] 16 Desember 2026",
  "deck": "VICI membagikan dividen interim Rp51,65 miliar atau Rp7,7 per saham, dibayar 16 Desember 2026, dengan batas pencatatan pemegang saham 3 Desember 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICI",
   "dividen interim",
   "aksi korporasi",
   "Victoria Care Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_VICI_E007_67390ca1-e9fd-409b-96f2-ebce5948036f-20261123165103.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waran-bbca-milik-hd-disesuaikan-penyesuaian-efektif-30-november",
  "category": "Aksi Korporasi",
  "title": "Waran BBCA Milik HD Disesuaikan: [Penyesuaian] Efektif 30 November",
  "deck": "Tiga waran terstruktur BBCA yang diterbitkan KGI Sekuritas (HD) disesuaikan harga dan rasio pelaksanaannya akibat dividen tunai BBCA, efektif 30 November 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HD",
   "BBCA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_HD_E019_c91aa92f-3a35-467a-be4c-22a1ad4d937e-20261123164736.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-kuartal-iii-2026-laba-bersih-naik-22-6-jadi-rp2-82-t",
  "category": "Aksi Korporasi",
  "title": "BBTN Kuartal III 2026: Laba Bersih [Naik] 22,6% jadi Rp2,82 T",
  "deck": "Laba bersih BTN naik 22,6 persen jadi Rp2,82 triliun pada sembilan bulan pertama 2026, meski ROA, ROE, dan laba komprehensif justru menurun.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "Bank BTN",
   "laba kuartal III",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f-74ee5b0f-efbb-4c3c-b615-d147aa28025d-1/FinancialStatement-2026-III-BBTN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pefindo-pangkas-peringkat-bold-ke-idb-restrukturisasi-9-des",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Pangkas Peringkat BOLD ke idB, [Restrukturisasi] 9 Des",
  "deck": "PEFINDO menurunkan peringkat BOLD dari idBBB ke idB akibat tekanan likuiditas; rapat pemegang obligasi dan sukuk digelar 9-10 Desember 2026 untuk minta persetujuan restrukturisasi utang.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "PEFINDO",
   "peringkat kredit",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_BOLD_E019_4610af82-ede0-4574-be18-e8748d34fb45-20261123164608.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-rupsi-post-7-desember-gagal-bayar-bunga-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "RUPO/RUPSI POST 7 Desember: [Gagal Bayar] Bunga Obligasi dan Sukuk",
  "deck": "Pos Indonesia memanggil pemegang obligasi dan sukuknya untuk RUPO/RUPSI 7 Desember 2026, membahas gagal bayar bunga serta rencana pinjaman pemegang saham.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "RUPO",
   "RUPSI",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_POST_E019_b2db618b-ff77-4f40-bd52-ba6067789d8c-20261123164316.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-rupsi-post-7-desember-default-3-instrumen-utang-dibahas",
  "category": "Aksi Korporasi",
  "title": "RUPO/RUPSI POST 7 Desember: [Default] 3 Instrumen Utang Dibahas",
  "deck": "Pos Indonesia memanggil pemegang obligasi 2022 dan dua tahap sukuk ijarah untuk rapat 7 Desember 2026 soal gagal bayar bunga dan permohonan pinjaman pemegang saham.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "RUPO",
   "RUPSI",
   "gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_POST_E019_2893c538-9b0d-4b11-bb1d-73728b3b2418-20261123164304.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupo-rupsi-post-7-desember-standstill-dan-shl-dimintakan",
  "category": "Aksi Korporasi",
  "title": "RUPO/RUPSI POST 7 Desember: [Standstill] dan SHL Dimintakan",
  "deck": "Pos Indonesia memanggil pemegang obligasi dan sukuk ke RUPO/RUPSI 7 Desember 2026, minta persetujuan standstill dan pinjaman pemegang saham setelah gagal bayar kupon tiga instrumen utang.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POST",
   "RUPO",
   "RUPSI",
   "gagal bayar obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_POST_E019_8e934e43-d12b-49f8-860a-644166bf55ad-20261123164246.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waran-zp-disesuaikan-imbas-dividen-bfin-rp35-efektif-1-desember",
  "category": "Aksi Korporasi",
  "title": "Waran ZP [Disesuaikan] Imbas Dividen BFIN Rp35, Efektif 1 Desember",
  "deck": "Maybank Sekuritas menyesuaikan harga pelaksanaan dan rasio konversi waran BFINZPCM7A dan BFINZPCQ7A menyusul dividen interim BFI Finance Rp35 per saham, efektif 1 Desember 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "BFIN",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ZP_E019_1fe69d44-0b1d-436b-a798-ce63647f27a8-20261123163549.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-yelo-26-november-pendapatan-9m26-turun-41-1",
  "category": "Aksi Korporasi",
  "title": "Public Expose YELO 26 November: Pendapatan 9M26 [Turun] 41,1%",
  "deck": "Materi Public Expose Tahunan YELO menunjukkan pendapatan Passpod cs turun 41,1% jadi Rp31,70 miliar dan rugi bersih melebar jadi Rp643,2 juta pada sembilan bulan 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "Public Expose",
   "Passpod",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_YELO_E003_13c3d167-4dcb-4df6-a3c9-4eadfab137d1-20261123163454.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "paparan-publik-jspt-laba-bersih-9m-2026-naik-73-ke-rp399-m",
  "category": "Aksi Korporasi",
  "title": "Paparan Publik JSPT: [Laba Bersih] 9M-2026 Naik 73% ke Rp399 M",
  "deck": "Materi paparan publik tahunan JSPT yang digelar 26 November 2026 di Bali memuat kinerja keuangan Januari-September 2026 dan rencana ekspansi proyek baru.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSPT",
   "paparan publik",
   "kinerja keuangan",
   "properti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_JSPT_E003_32f7073c-7bb4-4bdf-850e-d63d94178e05-20261123162133.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-nobu-27-november-laba-bersih-naik-52-88-ke-rp550-m",
  "category": "Aksi Korporasi",
  "title": "Public Expose NOBU 27 November: [Laba Bersih] Naik 52,88% ke Rp550 M",
  "deck": "Materi Public Expose Tahunan NOBU untuk acara 27 November 2026 memuat laba bersih sembilan bulan 2026 Rp550,18 miliar, naik 52,88 persen, dan aset tumbuh ke Rp44,97 triliun.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NOBU",
   "Bank Nationalnobu",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_NOBU_E003_fe37a78d-370c-4a52-b44d-f71a4e448376-20261123160449.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendes-dorong-pemuda-desa-garap-melon-hidroponik",
  "category": "UMKM",
  "title": "Kemendes Dorong Pemuda Desa Garap [Melon Hidroponik]",
  "deck": "Staf ahli Kementerian Desa mendorong pemuda Probolinggo yang putus kuliah beralih ke budi daya melon hidroponik sebagai jalan ekonomi baru bagi desa.",
  "date": "23 November 2026",
  "image": "assets/img/kemendes-dorong-pemuda-desa-garap-melon-hidroponik.jpg",
  "imageV": "mwt42hbl",
  "tags": [
   "melon hidroponik",
   "Kementerian Desa",
   "ekonomi desa",
   "pertanian modern"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479897-bantu-pemuda-desa-staf-ahli-kemendes-dukung-pertanian-modern-melon-hidroponik"
 },
 {
  "slug": "dividen-final-xcis-rp0-005-per-unit-cair-18-desember",
  "category": "Aksi Korporasi",
  "title": "Dividen Final XCIS Rp0,005/Unit: [Koreksi] Cum Tunai 4 Desember",
  "deck": "Surat koreksi XCIS menambahkan tanggal cum dividen di pasar tunai, 4 Desember 2026. Jumlah dividen dan tanggal pembayaran 18 Desember tidak berubah.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XCIS",
   "dividen",
   "DIRE",
   "koreksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_XCIS_E062_e1588538-d30c-43c1-9771-641d81b70b1f-20261123155346.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "paparan-publik-spma-26-november-laba-9-bulan-turun-7-4",
  "category": "Aksi Korporasi",
  "title": "Paparan Publik SPMA 26 November: Laba 9 Bulan [Turun] 7,4%",
  "deck": "Suparma (SPMA) gelar paparan publik 26 November 2026. Laba 9 bulan 2026 turun 7,4% jadi Rp63,4 miliar akibat rugi kurs, saham beredar melonjak 30%.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPMA",
   "Suparma Tbk",
   "Paparan Publik",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_SPMA_E003_25b19e11-1d6d-4897-9bbe-22e014c3e418-20261123155314.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-prda-23-november-stock-split-1-5-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPSLB PRDA 23 November: [Stock Split] 1:5 Disetujui",
  "deck": "RUPSLB Prodia menyetujui stock split 1:5, menambah saham beredar dari 937,5 juta jadi 4,69 miliar lembar, efektif 18 Desember 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "Stock Split",
   "RUPSLB",
   "Prodia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_PRDA_E019_4082e5d8-f271-475a-ab39-947744d8b4f1-20261123152842.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "golf-tanggapi-permintaan-bei-tak-ada-informasi-material",
  "category": "Aksi Korporasi",
  "title": "GOLF Tanggapi Permintaan BEI: [Tak Ada] Informasi Material",
  "deck": "BEI meminta penjelasan GOLF atas volatilitas transaksi sahamnya; perseroan menyatakan tidak ada informasi material tersembunyi dan belum ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GOLF",
   "Volatilitas Saham",
   "BEI",
   "Intra GolfLink Resorts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_GOLF_E023A_18ce1e4d-574a-4559-8969-4dfa2f01bb97-20261123151035.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bvic-chemical-asia-jual-283-18-juta-saham-suara-jadi-7-26",
  "category": "Aksi Korporasi",
  "title": "BVIC: Chemical Asia [Jual] 283,18 Juta Saham, Suara Jadi 7,26%",
  "deck": "Chemical Asia Corporation, direktur asing Bank Victoria International, melepas 283,18 juta saham pada 20 November 2026, hak suaranya turun dari 8,80% menjadi 7,26%.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BVIC",
   "Bank Victoria",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-8851-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pola-kmi-cioud-indonesia-tambah-124-55-juta-saham-suara-5-66",
  "category": "Aksi Korporasi",
  "title": "POLA: KMI Cioud Indonesia [Tambah] 124,55 Juta Saham, Suara 5,66%",
  "deck": "KMI Cioud Indonesia menambah kepemilikan di POLA lewat transaksi repurchase agreement, dari 1,94% jadi 5,66% hak suara, usai membeli 125 juta saham seharga Rp80 per saham pada 21 Oktober 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POLA",
   "laporan kepemilikan",
   "hak suara",
   "repurchase agreement"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-9041-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-mgro-26-november-laba-bersih-naik-184-42",
  "category": "Aksi Korporasi",
  "title": "Public Expose MGRO 26 November: [Laba Bersih] Naik 184,42%",
  "deck": "MGRO menggelar Public Expose tahunan secara daring pada 26 November 2026, memaparkan laba bersih Rp45,66 miliar hingga September 2026, berbalik dari rugi Rp54,09 miliar setahun sebelumnya.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGRO",
   "Public Expose",
   "kelapa sawit",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_MGRO_E003_c7bf6b03-ee0a-4194-9b62-c011f15043b7-20261123145016.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-east-15-desember-pemanggilan-resmi-dps-20-november",
  "category": "Aksi Korporasi",
  "title": "RUPSLB EAST 15 Desember: [Dividen Interim] Jadi Mata Acara",
  "deck": "Pemanggilan resmi RUPSLB Eastparc Hotel mengungkap agendanya: persetujuan pembagian dividen interim tahun buku 2026, rapat digelar 15 Desember 2026.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EAST",
   "RUPSLB",
   "Dividen Interim",
   "Eastparc Hotel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_EAST_E001_7143e533-c8ff-4d6b-8eb6-7a4e20e4ece0-20261123144237.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dprd-sulsel-minta-maxim-hentikan-program-fokus-berbayar",
  "category": "Ketenagakerjaan",
  "title": "DPRD Sulsel Minta Maxim Hentikan Program [Fokus] Berbayar",
  "deck": "Komisi D DPRD Sulsel keluarkan lima rekomendasi untuk Maxim, termasuk setop program Fokus berbayar dan serahkan dokumen kemitraan ke KPPU, usai RDP soal BPJS pengemudi.",
  "date": "23 November 2026",
  "image": "assets/img/bursa-kerja.jpg",
  "tags": [
   "KPPU",
   "Maxim",
   "mitra pengemudi",
   "BPJS Ketenagakerjaan"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-makassar-dalami-isu-kemitraan-maxim-dan-pengemudi-online",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "kppu-soroti-usulan-moratorium-pbm-baru-di-tanjung-perak",
  "category": "Industri",
  "title": "KPPU [Soroti] Usulan Moratorium PBM Baru di Tanjung Perak",
  "deck": "KPPU Surabaya mendalami usulan moratorium penerimaan perusahaan bongkar muat baru di Jawa Timur, sembari mengingatkan bahwa pembatasan pasar berisiko mengurangi persaingan usaha.",
  "date": "23 November 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "KPPU",
   "APBMI",
   "Tanjung Perak",
   "bongkar muat"
  ],
  "sourceUrl": "https://kppu.go.id/berita/kppu-surabaya-cermati-usulan-moratorium-pbm-baru-di-jawa-timur",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "ri-uni-eropa-tandatangani-cepa-setelah-10-tahun-berunding",
  "category": "Global",
  "title": "RI-Uni Eropa [Tandatangani] CEPA Setelah 10 Tahun Berunding",
  "deck": "Indonesia dan Uni Eropa resmi menandatangani perjanjian dagang I-EU CEPA di Brussels, membuka tarif nol persen untuk 90,4 persen pos tarif ekspor Indonesia ke Eropa.",
  "date": "23 November 2026",
  "image": "assets/img/ri-uni-eropa-tandatangani-cepa-setelah-10-tahun-berunding.jpg",
  "imageV": "mwsyps43",
  "tags": [
   "I-EU CEPA",
   "Uni Eropa",
   "Kementerian Perdagangan",
   "ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/i-eu-cepa-ditandatangani-mendag-busan-optimistis-pasar-uni-eropa-makin-terbuka",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ppre-kontrak-baru-rp1-7-triliun-hingga-triwulan-iii-2026",
  "category": "Aksi Korporasi",
  "title": "PPRE Kontrak Baru [Rp1,7 Triliun] hingga Triwulan III 2026",
  "deck": "Kontrak baru konsolidasian PPRE mencapai Rp1,7 triliun hingga triwulan III 2026, sementara pendapatan naik 20,1 persen menjadi Rp3,33 triliun.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPRE",
   "kontrak baru",
   "pendapatan",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_PPRE_E019_dafc5a63-e571-4aec-bb0a-ec699f6482b7-20261123141618.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-asjt-16-desember-2026-e-proxy-via-easy-ksei",
  "category": "Aksi Korporasi",
  "title": "RUPSLB ASJT 16 Desember: [Agenda] Ubah AD dan Pengurus",
  "deck": "Pemanggilan resmi RUPSLB ASJT 16 Desember 2026 membuka agendanya: perubahan anggaran dasar menyesuaikan klasifikasi usaha dan pergantian susunan direksi-komisaris.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASJT",
   "RUPSLB",
   "Perubahan Anggaran Dasar",
   "Pergantian Pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ASJT_E001_529aa6f8-68a2-4b3a-a0da-29d82a517d0c-20261123132807.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkp-targetkan-40-000-kolam-budi-daya-ikan-hingga-2029",
  "category": "Industri",
  "title": "KKP Targetkan [40.000] Kolam Budi Daya Ikan hingga 2029",
  "deck": "KKP membangun 1.500 kolam budi daya ikan tematik tahun ini menuju target 40.000 lokasi pada 2029, dengan progres di Pekalongan baru 36,99 persen.",
  "date": "23 November 2026",
  "image": "assets/img/kkp-targetkan-40-000-kolam-budi-daya-ikan-hingga-2029.jpg",
  "imageV": "mwss64nl",
  "tags": [
   "KKP",
   "budi daya ikan",
   "ketahanan pangan",
   "lapangan kerja"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/program-budi-daya-tematik-hadirkan-lapangan-kerja-hingga-jaga-ketahanan-pangan-7plw.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "uang-beredar-ri-tumbuh-9-3-persen-pada-oktober-2026",
  "category": "Moneter",
  "title": "Uang Beredar RI [Tumbuh] 9,3 Persen pada Oktober 2026",
  "deck": "Bank Indonesia mencatat uang beredar luas (M2) tumbuh 9,3 persen secara tahunan pada Oktober 2026, naik dari 8,5 persen bulan sebelumnya, mencapai Rp10.698,0 triliun.",
  "date": "23 November 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "uang beredar",
   "M2",
   "Bank Indonesia",
   "likuiditas"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2825626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "hrum-bara-sejahtera-abadi-borong-6-76-miliar-saham-suara-50-09",
  "category": "Aksi Korporasi",
  "title": "HRUM: Karunia Bara Perkasa Jual 6,76 Miliar Saham, Suara ke 29,79%",
  "deck": "Karunia Bara Perkasa menjual 6,76 miliar saham HRUM pada 19 November 2026 seharga Rp660, jumlah dan tanggal yang sama dengan pembelian Bara Sejahtera Abadi, hak suaranya turun dari 79,79% ke 29,79%.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRUM",
   "Harum Energy",
   "Karunia Bara Perkasa",
   "Bara Sejahtera Abadi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-4089-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gmfi-direksi-tri-hartono-tambah-500-000-saham-suara-0-00",
  "category": "Aksi Korporasi",
  "title": "GMFI: Direksi Tri Hartono [Tambah] 500.000 Saham, Suara 0,00%",
  "deck": "Direksi GMFI Tri Hartono membeli 500.000 saham di harga Rp39 per saham, menambah kepemilikannya dari 1,5 juta jadi 2 juta lembar untuk portofolio pribadi.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GMFI",
   "laporan kepemilikan",
   "direksi",
   "saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-3796-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "infomedia-luncurkan-ai-learning-ecosystem-untuk-kampus",
  "category": "Teknologi",
  "title": "Infomedia Luncurkan [AI] Learning Ecosystem untuk Kampus",
  "deck": "Anak usaha Telkom Indonesia ini memperkenalkan sistem AI tiga tingkat untuk kelas, kampus, dan evaluasi pendidikan tinggi secara nasional.",
  "date": "23 November 2026",
  "image": "assets/img/infomedia-luncurkan-ai-learning-ecosystem-untuk-kampus.jpg",
  "imageV": "mwss65mq",
  "tags": [
   "Infomedia",
   "Telkom Indonesia",
   "AI",
   "Pendidikan Tinggi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479855-infomedia-hadirkan-ai-learning-ecosystem-untuk-pendidikan-tinggi"
 },
 {
  "slug": "transaksi-material-enrg-beli-saham-preferen-highpeak-us-200-juta",
  "category": "Aksi Korporasi",
  "title": "Transaksi Material ENRG: [Beli] Saham Preferen HighPeak US$200 Juta",
  "deck": "THP, anak usaha ENRG, membeli 200.000 saham preferen konversi HighPeak Energy senilai US$200 juta, transaksi material tanpa perlu persetujuan RUPS.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "Transaksi Material",
   "HighPeak Energy",
   "Investasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ENRG_E019_34ea6a11-85b1-4943-97e8-31b6d35b0811-20261123110341.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-rampungkan-investasi-us-200-juta-di-highpeak-energy-as",
  "category": "Aksi Korporasi",
  "title": "ENRG [Rampungkan] Investasi US$200 Juta di HighPeak Energy AS",
  "deck": "EMP melalui anak usahanya merampungkan investasi US$200 juta di HighPeak Energy AS, menambah eksposur cadangan migas sekitar 47 juta barel setara minyak.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "HighPeak Energy",
   "investasi migas",
   "ekspansi luar negeri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_ENRG_E019_84f2fcb0-71b8-4e31-9f96-9ad1e60fc596-20261123110123.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-indovest-central-jual-103-6-juta-saham-hak-suara-jadi-38",
  "category": "Aksi Korporasi",
  "title": "NICK: Indovest Central [Jual] 103,6 Juta Saham, Hak Suara Jadi 38%",
  "deck": "Indovest Central menjual 103,6 juta saham NICK pada 19-20 November 2026, memangkas hak suaranya dari 53,92% menjadi 38%, melepas status mayoritas.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan saham",
   "Indovest Central"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-8762-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jast-uob-kay-hian-jual-38-juta-saham-hak-suara-jadi-3-85",
  "category": "Aksi Korporasi",
  "title": "JAST: UOB Kay Hian Jual 38 Juta Saham, [Hak Suara] Jadi 3,85%",
  "deck": "UOB Kay Hian Pte Ltd melepas 38 juta saham JAST, kepemilikan turun dari 4,08% menjadi 3,85% hak suara.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JAST",
   "Jasnita Telekomindo",
   "kepemilikan saham",
   "UOB Kay Hian"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-3416-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emtk-komisaris-independen-marianna-sutadi-meninggal-dunia",
  "category": "Aksi Korporasi",
  "title": "EMTK: Komisaris Independen Marianna Sutadi [Meninggal Dunia]",
  "deck": "Marianna Sutadi, Komisaris Independen Elang Mahkota Teknologi (EMTK), wafat 20 November 2026. Perseroan sebut susunan direksi-komisaris masih sesuai aturan OJK.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMTK",
   "Komisaris Independen",
   "Tata Kelola Perusahaan",
   "Elang Mahkota Teknologi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_EMTK_E019_ffce93cb-51cd-4709-bbcd-086e5b2ec21d-20261123103317.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-btpn-23-november-delisting-perdagangan-dihentikan",
  "category": "Aksi Korporasi",
  "title": "Suspensi BTPN 23 November: [Delisting] Perdagangan Dihentikan",
  "deck": "BEI menghentikan sementara perdagangan saham BTPN di seluruh pasar sejak sesi pra-pembukaan Senin, 23 November 2026, menyusul rencana go private dan delisting sukarela bank itu.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPN",
   "suspensi",
   "go private",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_BTPN_B007_1e94fc58-e061-4c2e-9827-c81eb80e948e-20261123091645.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inco-direksi-abu-ashar-tambah-300-000-saham-hak-suara-0-00",
  "category": "Aksi Korporasi",
  "title": "INCO: Direksi Abu Ashar [Tambah] 300.000 Saham, Hak Suara 0,00%",
  "deck": "Direksi INCO Abu Ashar membeli 300.000 saham tidak langsung pada 19 November 2026, kepemilikannya naik jadi 322.000 lembar, hak suara tetap 0,00%.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCO",
   "Vale Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-23112026-1310-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penjualan-mobil-nasional-naik-19-7-persen-hingga-oktober",
  "category": "Industri",
  "title": "Penjualan Mobil Nasional [Naik] 19,7 Persen hingga Oktober",
  "deck": "Penjualan mobil dari pabrik ke diler tembus 760.476 unit sepanjang Januari-Oktober 2026, naik 19,7 persen dari tahun sebelumnya, menurut data GAIKINDO.",
  "date": "23 November 2026",
  "image": "assets/img/penjualan-mobil-nasional-naik-19-7-persen-hingga-oktober.jpg",
  "imageV": "mwslqbru",
  "tags": [
   "GAIKINDO",
   "Penjualan Mobil",
   "Industri Otomotif",
   "GAW 2026"
  ],
  "kreditFoto": "Gabungan Industri Kendaraan Bermotor Indonesia",
  "sourceUrl": "https://www.gaikindo.or.id/ketua-gaikindo-penjualan-mobil-nasional-tembus-760-ribu-unit-hingga-oktober-2026/",
  "sourceLabel": "Gabungan Industri Kendaraan Bermotor Indonesia"
 },
 {
  "slug": "indonesia-uni-eropa-teken-perjanjian-dagang-dan-investasi",
  "category": "Global",
  "title": "Indonesia-Uni Eropa [Teken] Perjanjian Dagang dan Investasi",
  "deck": "Indonesia dan Uni Eropa menandatangani IEU-CEPA dan IEU-IPA, perjanjian dagang dan investasi yang ditargetkan berlaku efektif 1 Januari 2027.",
  "date": "23 November 2026",
  "image": "assets/img/indonesia-uni-eropa-teken-perjanjian-dagang-dan-investasi.jpg",
  "imageV": "mwslqdd9",
  "tags": [
   "IEU-CEPA",
   "IEU-IPA",
   "investasi Uni Eropa",
   "BKPM"
  ],
  "kreditFoto": "Kementerian Investasi dan Hilirisasi/BKPM",
  "sourceUrl": "https://bkpm.go.id/id/info/siaran-pers/indonesia-uni-eropa-tandatangani-ieu-cepa-dan-ieu-ipa-perkuat-perlindungan-investasi-dan-perluas-akses-pasar",
  "sourceLabel": "Kementerian Investasi dan Hilirisasi/BKPM"
 },
 {
  "slug": "buyback-cdia-rp1-triliun-pembelian-maksimal-4-miliar-saham",
  "category": "Aksi Korporasi",
  "title": "Buyback CDIA Rp1 Triliun: [Pembelian] Maksimal 4 Miliar Saham",
  "deck": "CDIA berencana membeli kembali maksimal 4 miliar saham (3,2% dari total saham) senilai hingga Rp1 triliun dengan harga tertinggi Rp800 per saham, periode 23 November 2026 hingga 22 Februari 2027.",
  "date": "23 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CDIA",
   "buyback",
   "Chandra Daya Investasi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261123_CDIA_E019_2efa8ca5-4d55-4676-be95-c597c84f80f9-20261123080259.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bunga-kpps-turun-ke-8-angsuran-mekaar-makin-ringan",
  "category": "UMKM",
  "title": "Bunga KPPS Turun ke 8%, Angsuran Mekaar Makin [Ringan]",
  "deck": "Penurunan bunga pembiayaan KPPS ke 8 persen per tahun meringankan angsuran nasabah PNM Mekaar, termasuk perempuan pengusaha ultra mikro yang menabung untuk pendidikan anak.",
  "date": "23 November 2026",
  "image": "assets/img/bunga-kpps-turun-ke-8-angsuran-mekaar-makin-ringan.jpg",
  "imageV": "mws7p9dk",
  "tags": [
   "PNM Mekaar",
   "KPPS",
   "UMKM",
   "kredit perempuan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479808-angsuran-lebih-ringan-nasabah-pnm-mekaar-sisihkan-penghasilan-untuk-pendidikan"
 },
 {
  "slug": "ekonom-nilai-dasco-punya-modal-jadi-wapres",
  "category": "Makroekonomi",
  "title": "Ekonom Nilai Dasco Punya [Modal] Jadi Wapres",
  "deck": "Ekonom INDEF menilai Wakil Ketua DPR Sufmi Dasco Ahmad punya modal strategis sebagai Wakil Presiden mendampingi Presiden Prabowo Subianto, berdasar rekam jejaknya di sejumlah isu ekonomi.",
  "date": "22 November 2026",
  "image": "assets/img/ekonom-nilai-dasco-punya-modal-jadi-wapres.jpg",
  "imageV": "mwrx0fsq",
  "tags": [
   "Dasco",
   "Wapres",
   "DPR",
   "INDEF"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479766-ekonom-dasco-punya-modal-strategis-jadi-wapres-jaga-stabilitas-makroekonomi"
 },
 {
  "slug": "indonesia-ue-teken-ieu-cepa-tarif-ekspor-turun-ke-nol-persen",
  "category": "Global",
  "title": "Indonesia-UE Teken IEU-CEPA, Tarif Ekspor Turun ke [Nol] Persen",
  "deck": "Indonesia dan Uni Eropa menandatangani perjanjian dagang IEU-CEPA yang menghapus tarif atas lebih dari 90 persen produk, berlaku efektif 1 Januari 2027 jika ratifikasi rampung tepat waktu.",
  "date": "22 November 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "tarif perdagangan",
   "ratifikasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7239/ieu-cepa-bebaskan-tarif-lebih-dari-90-komoditas-dagang-produk-padat-karya-nikmati-bea-masuk-0-ke-uni-eropa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "lada-motasa-tertahan-di-taiwan-bukan-lewat-ekspor-resmi",
  "category": "Industri",
  "title": "Lada Motasa [Tertahan] di Taiwan, Bukan Lewat Ekspor Resmi",
  "deck": "PT Motasa Indonesia menjelaskan 24 kilogram produk Ladaku Merica Bubuk yang tertahan di Taiwan dikirim lewat trader, bukan jalur ekspor resmi perusahaan, sehingga tidak dilengkapi dokumen ekspor.",
  "date": "22 November 2026",
  "image": "assets/img/lada-motasa-tertahan-di-taiwan-bukan-lewat-ekspor-resmi.jpg",
  "imageV": "mwrbntqh",
  "tags": [
   "ekspor lada",
   "Taiwan",
   "Motasa",
   "keamanan pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479704-produk-olahan-lada-tertahan-di-taiwan-motasa-jelaskan-persoalan-residu"
 },
 {
  "slug": "ri-ue-kejar-target-penerapan-sementara-ieu-cepa-2027",
  "category": "Global",
  "title": "RI-UE Kejar Target [Penerapan Sementara] IEU-CEPA 2027",
  "deck": "Menko Airlangga Hartarto bertemu Komisioner Dagang UE Maroš Šefčovič di Brussels untuk mengawal implementasi IEU-CEPA, termasuk target penerapan sementara awal 2027.",
  "date": "22 November 2026",
  "image": "assets/img/ri-ue-kejar-target-penerapan-sementara-ieu-cepa-2027.jpg",
  "imageV": "mwrbnu45",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "Airlangga Hartarto",
   "perdagangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479689-menko-airlangga-dan-komisioner-uni-eropa-bahas-pengawalan-implementasi-ieu-cepa"
 },
 {
  "slug": "ri-ue-teken-ieu-cepa-bea-masuk-ekspor-turun",
  "category": "Global",
  "title": "RI-UE Teken IEU-CEPA, Bea Masuk Ekspor [Turun]",
  "deck": "Indonesia dan Uni Eropa menandatangani IEU-CEPA dan IPA di Brussels, membuka bea masuk nol persen untuk 90,4 persen pos tarif ekspor RI ke pasar Eropa.",
  "date": "22 November 2026",
  "image": "assets/img/ri-ue-teken-ieu-cepa-bea-masuk-ekspor-turun.jpg",
  "imageV": "mwrbnuis",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "ekspor",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479686-indonesia-dan-uni-eropa-resmi-teken-ieu-cepa-dan-ipa-ekspor-ri-makin-terbuka"
 },
 {
  "slug": "pnm-kokohkan-bunga-mekaar-8-persen-di-yogyakarta",
  "category": "UMKM",
  "title": "PNM Kokohkan Bunga Mekaar [8 Persen] di Yogyakarta",
  "deck": "PNM merealisasikan pembiayaan Mekaar berbunga 8 persen bagi perempuan prasejahtera di Yogyakarta, dipamerkan lewat Pesta Nasabah Mekaar 2026 yang melibatkan puluhan pelaku UMKM binaan.",
  "date": "21 November 2026",
  "image": "assets/img/pnm-kokohkan-bunga-mekaar-8-persen-di-yogyakarta.jpg",
  "imageV": "mwqr7dv0",
  "tags": [
   "PNM",
   "Mekaar",
   "UMKM",
   "Yogyakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479652-pnm-kokohkan-pembiayaan-mekaar-8-persen-untuk-kemandirian-perempuan-yogyakarta"
 },
 {
  "slug": "indonesia-uni-eropa-resmi-teken-ieu-cepa",
  "category": "Global",
  "title": "Indonesia-Uni Eropa Resmi Teken [IEU-CEPA]",
  "deck": "Indonesia dan Uni Eropa menandatangani IEU-CEPA dan IPA di Brussels, membuka 90,4 persen pos tarif ekspor Indonesia ke Eropa menjadi nol persen.",
  "date": "21 November 2026",
  "image": "assets/img/teknologi-logistik.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "perdagangan",
   "investasi"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7238/indonesia-dan-uni-eropa-resmi-tanda-tangani-ieu-cepa-dan-ipa-perkuat-kerja-sama-perdagangan-dan-investasi-berkelanjutan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "ri-uni-eropa-tandatangani-cepa-98-tarif-dagang-dipangkas",
  "category": "Global",
  "title": "RI-Uni Eropa Tandatangani [CEPA], 98% Tarif Dagang Dipangkas",
  "deck": "Setelah satu dekade perundingan, Indonesia dan Uni Eropa menandatangani perjanjian dagang yang memangkas hampir seluruh tarif ekspor Indonesia ke Eropa.",
  "date": "21 November 2026",
  "image": "assets/img/ri-uni-eropa-tandatangani-cepa-98-tarif-dagang-dipangkas.jpg",
  "imageV": "mwqm1yc4",
  "tags": [
   "I-EU CEPA",
   "Uni Eropa",
   "Ekspor",
   "Tarif Dagang"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/eu-cepa-ditandatangani-mendag-busan-optimistis-pasar-uni-eropa-makin-terbuka",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pertamina-patra-niaga-diapresiasi-jaga-ketahanan-energi",
  "category": "Energi",
  "title": "Pertamina Patra Niaga Diapresiasi Jaga Ketahanan [Energi]",
  "deck": "Pertamina Patra Niaga meraih penghargaan dari Detikcom Awards 2026 atas distribusi BBM dan LPG ke wilayah terpencil Indonesia.",
  "date": "21 November 2026",
  "image": "assets/img/pertamina-patra-niaga-diapresiasi-jaga-ketahanan-energi.jpg",
  "imageV": "mwqm1z8s",
  "tags": [
   "pertamina",
   "bbm",
   "lpg",
   "energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479640-jaga-ketahanan-energi-pertamina-patra-niaga-raih-apresiasi-nasional"
 },
 {
  "slug": "ashari-nakhodai-bidang-pertanian-hipmi-2026-2029",
  "category": "Bisnis",
  "title": "Ashari Nakhodai Bidang [Pertanian] HIPMI 2026-2029",
  "deck": "Ashari Wahyu Budi Aji resmi memimpin Bidang Pertanian, Perkebunan, Peternakan, dan Ketahanan Pangan di BPP HIPMI periode 2026-2029.",
  "date": "21 November 2026",
  "image": "assets/img/ashari-nakhodai-bidang-pertanian-hipmi-2026-2029.jpg",
  "imageV": "mwqm1zn2",
  "tags": [
   "hipmi",
   "pertanian",
   "ketahanan pangan",
   "pengusaha muda"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479639-perkuat-ketahanan-pangan-ashari-wahyu-budi-aji-nakhodai-bidang-pertanian-hipmi"
 },
 {
  "slug": "pnm-perluas-mekaar-bunga-8-persen-berlaku-nasional",
  "category": "UMKM",
  "title": "PNM Perluas Mekaar, Bunga [8 Persen] Berlaku Nasional",
  "deck": "PNM memperluas Program Mekaar dengan bunga flat 8 persen per tahun bagi perempuan prasejahtera ke seluruh Indonesia, menyusul arahan Presiden Prabowo Subianto dan uji coba di Jakarta.",
  "date": "21 November 2026",
  "image": "assets/img/pnm-perluas-mekaar-bunga-8-persen-berlaku-nasional.jpg",
  "imageV": "mwqm200s",
  "tags": [
   "PNM",
   "Mekaar",
   "UMKM",
   "perempuan prasejahtera"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479631-tindak-lanjut-arahan-presiden-pnm-perluas-program-mekaar-bunga-8-persen-flat"
 },
 {
  "slug": "indonesia-tiongkok-teken-35-kesepakatan-investasi-us-15-miliar",
  "category": "Energi",
  "title": "Indonesia-Tiongkok Teken [35] Kesepakatan Investasi US$15 Miliar",
  "deck": "Presiden Prabowo Subianto menyaksikan penandatanganan 35 kesepakatan investasi RI-Tiongkok senilai US$15 miliar di forum bisnis Shenzhen, mencakup kawasan industri hingga energi terbarukan.",
  "date": "21 November 2026",
  "image": "assets/img/indonesia-tiongkok-teken-35-kesepakatan-investasi-us-15-miliar.jpg",
  "imageV": "mwqc7nvd",
  "tags": [
   "Hilirisasi",
   "Investasi",
   "Tiongkok",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/menteri-bahlil-dorong-investasi-ri-tiongkok-perkuat-hilirisasi-dan-ketahanan-energi-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "potensi-delisting-dmy-shm-suspensi-genap-24-bulan-21-november",
  "category": "Aksi Korporasi",
  "title": "Suspensi DMY-SHM Dibuka 21 November: [Perdagangan] Aktif Lagi",
  "deck": "Bursa membuka kembali perdagangan saham DMY-SHM pada 21 November 2026, tepat saat suspensinya genap 24 bulan, ambang yang sebelumnya membuka opsi delisting.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "suspensi",
   "delisting",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_B009_94be8c27-f875-4947-8c99-308cdbed56c4-20261121123358.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amortisasi-tes-obl3-19-nov-2027-rp100-m-pokok-obligasi-dipangkas",
  "category": "Aksi Korporasi",
  "title": "Obligasi TES-OBL3 Rp800 Miliar [Tercatat] di BEI Mulai 20 November",
  "deck": "TES-OBL3 resmi tercatat di Bursa Efek Indonesia mulai 20 November 2026 senilai total Rp800 miliar lewat dua seri obligasi bertenor 2029 dan 2031, dengan rating idAA dari Pefindo.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TES-OBL3",
   "obligasi korporasi",
   "pencatatan BEI",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_TES-OBL3_E033_07407b0f-004b-4feb-abfe-4d6372d64fcb-20261121123216.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-dmy-shm-30-november-right-issue-100-000-saham-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPS DMY-SHM 21 November: Right Issue 221 Saham Disetujui",
  "deck": "RUPS DMY-SHM finalkan rights issue: 221 saham baru, rasio 480:786, harga Rp43, mengganti rencana awal 100.000 saham di Rp100. Proses rampung 21 November 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "Right Issue",
   "HMETD",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_ba68b244-e226-4ac4-8568-6600c0957b55-20261121121705.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-tunai-dmy-shm-rp199-per-saham-cair-30-november",
  "category": "Aksi Korporasi",
  "title": "Dividen Tunai DMY-SHM Rp199 per Saham, [Cair] 30 November",
  "deck": "DMY-SHM akan membagikan dividen tunai Rp199 per saham, total Rp19,99 juta, untuk tahun buku 2025, dibayarkan 30 November 2026 setelah persetujuan RUPS Tahunan.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "dividen tunai",
   "RUPS Tahunan",
   "PKPU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_84a59e34-de31-4fbd-95f3-08ffeb7c0b55-20261121121032.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-dmy-shm-30-desember-transaksi-material-ditolak",
  "category": "Aksi Korporasi",
  "title": "RUPST DMY-SHM 18 Desember: Dividen Disetujui, DPS [Direvisi] 10 Des",
  "deck": "DPS RUPST DMY-SHM direvisi jadi 10 Desember 2026, pemanggilan resmi dimajukan ke 25 November 2026; hasil rapat 18 Desember yang menyetujui dividen tetap berlaku.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "RUPST",
   "Dividen",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E013_6fdaaab2-576e-4e04-98ca-48ceec7cba30-20261121120630.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "private-placement-dmy-shm-30-des-90-000-saham-baru-dilusi-90",
  "category": "Aksi Korporasi",
  "title": "[Private Placement] DMY-SHM 30 Des: 90.000 Saham Baru, Dilusi 90%",
  "deck": "DMY-SHM berencana menerbitkan 90.000 saham baru lewat private placement tanpa hak memesan efek terlebih dahulu, menaikkan saham beredar 90 persen. RUPS digelar 30 Desember 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "private placement",
   "dilusi saham",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X2_66b2bb73-6dd5-47e4-abbb-cb1b66477cf4-20261121115908.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-tunai-dmy-shm-rp960-per-saham-cair-21-november",
  "category": "Aksi Korporasi",
  "title": "Dividen Tunai DMY-SHM Rp960 per Saham, [Cair] 21 November",
  "deck": "RUPST DMY-SHM menyetujui dividen tunai tahun buku 2026 Rp960 per saham, total Rp701, nyaris menyamai seluruh ekuitas perusahaan.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "dividen tunai",
   "RUPST",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_5e02f4c2-a928-4a74-9ac9-c5ebc7c0dcbd-20261121112045.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-tunai-dmy-shm-rp1-per-saham-cair-5-februari-2027",
  "category": "Aksi Korporasi",
  "title": "Dividen Tunai DMY-SHM Rp1 per Saham, [Cair] 5 Februari 2027",
  "deck": "RUPS Tahunan DMY-SHM 6 Januari 2027 menyetujui dividen tunai tahun buku 2026 Rp1 per saham, total Rp1 juta, dibayar 5 Februari 2027.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "dividen tunai",
   "RUPST",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_ddcdce6d-f15f-4ce7-9fa0-c1e61094dd68-20261121111535.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buyback-dmy-shm-21-november-harga-limit-rp2-876-biaya-rp3-514",
  "category": "Aksi Korporasi",
  "title": "Buyback DMY-SHM 21 November: [Harga Limit] Rp2.876, Biaya Rp3.514",
  "deck": "DMY-SHM berencana membeli kembali sahamnya pada 21 November 2026 lewat mekanisme Bursa Efek Indonesia, dengan batas harga Rp2.876 per saham dan perkiraan biaya Rp3.514.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "buyback",
   "pembelian kembali saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E006_903031af-2bc3-49b9-b5e0-45bddab5b324-20261121111136.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-dmy-shm-6-januari-dividen-disetujui-direksi-baru",
  "category": "Aksi Korporasi",
  "title": "RUPST DMY-SHM 6 Januari: [Dividen] Disetujui, Direksi Baru",
  "deck": "RUPS Tahunan DMY-SHM yang digelar 6 Januari 2027 menyetujui pembagian dividen tunai dan menetapkan susunan direksi serta komisaris baru hingga 31 Juli 2027.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "RUPST",
   "dividen tunai",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E013_91dcd57e-ea36-407d-a576-72dd239aeb2a-20261121111234.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "perubahan-pengurus-dmy-shm-direktur-utama-baru-gantikan-arif",
  "category": "Aksi Korporasi",
  "title": "Perubahan Pengurus DMY-SHM: [Direktur Utama] Baru Gantikan Arif",
  "deck": "RUPS 20 November 2026 mengesahkan pergantian jajaran direksi dan komisaris DMY-SHM, Budi jadi Direktur Utama baru, efektif 23 November 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "Perubahan Pengurus",
   "Direksi",
   "Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E036_ec6dce12-a6aa-4036-b721-6dcc6525938e-20261121110936.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-tiongkok-perkuat-kerja-sama-hilirisasi-mineral-dan-energi",
  "category": "Energi",
  "title": "RI-Tiongkok Perkuat Kerja Sama [Hilirisasi] Mineral dan Energi",
  "deck": "Bahlil Lahadalia mendorong alih teknologi dan peningkatan keterampilan pekerja dalam kerja sama mineral dan energi RI-Tiongkok, menyusul pertemuan Presiden Prabowo Subianto dan Presiden Xi Jinping di Shenzhen.",
  "date": "21 November 2026",
  "image": "assets/img/ri-tiongkok-perkuat-kerja-sama-hilirisasi-mineral-dan-energi.jpg",
  "imageV": "mwpv9fxr",
  "tags": [
   "Hilirisasi",
   "ESDM",
   "RI-Tiongkok",
   "Energi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kemitraan-ri-tiongkok-makin-erat-menteri-bahlil-tekankan-hilirisasi-dan-alih-teknologi",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "presiden-prabowo-temui-presiden-xi-jinping-soroti-investasi",
  "category": "Global",
  "title": "Presiden Prabowo Temui Presiden Xi Jinping, Soroti [Investasi]",
  "deck": "Presiden Prabowo dan Presiden Xi Jinping bertemu di Shenzhen membahas dagang dan investasi, di tengah neraca dagang RI yang masih defisit terhadap Tiongkok.",
  "date": "21 November 2026",
  "image": "assets/img/presiden-prabowo-temui-presiden-xi-jinping-soroti-investasi.jpg",
  "imageV": "mwpv9mk3",
  "tags": [
   "Indonesia-Tiongkok",
   "Kemendag",
   "Investasi",
   "Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dampingi-presiden-ri-bertemu-presiden-xi-jinping-mendag-busan-momentum-penguatan-hubungan-dagang-dan-investasi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "100-umkm-pangan-jabar-dilatih-ekspor-taiwan-jadi-target-baru",
  "category": "UMKM",
  "title": "100 UMKM Pangan Jabar Dilatih Ekspor, [Taiwan] Jadi Target Baru",
  "deck": "Kemendag melatih 100 pelaku UMKM pangan olahan Jawa Barat agar siap ekspor, dengan Amerika Serikat, Filipina, Malaysia, dan kini Taiwan sebagai pasar yang disasar.",
  "date": "21 November 2026",
  "image": "assets/img/100-umkm-pangan-jabar-dilatih-ekspor-taiwan-jadi-target-baru.jpg",
  "imageV": "mwpv9nyi",
  "tags": [
   "UMKM",
   "Ekspor",
   "Pangan Olahan",
   "Taiwan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-dorong-umkm-pangan-olahan-go-global-lewat-bimtek-citra-produk-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-jadi-rp2-495-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] Lagi Jadi Rp2.495.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp5.000 menjadi Rp2.495.000 per gram, sementara harga buyback ikut turun ke Rp2.095.000 per gram.",
  "date": "21 November 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-jadi-rp2-495-000-gram.jpg",
  "imageV": "mwpv9o7g",
  "tags": [
   "emas antam",
   "harga emas",
   "logam mulia",
   "investasi emas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479535-harga-emas-antam-hari-ini-21-november-2026-rp2495000-per-gram-lagi-lagi-turun"
 },
 {
  "slug": "rating-dmy-obl-pefindo-tahan-idaa-stable-untuk-3-seri-obligasi",
  "category": "Aksi Korporasi",
  "title": "Rating DMY-OBL: PEFINDO [Tahan] idAA/Stable untuk 3 Seri Obligasi",
  "deck": "PEFINDO menegaskan peringkat idAA stabil untuk tiga seri obligasi senilai total Rp1,2 triliun milik emiten berkode DMY-OBL, satu seri dicatat berbeda dari periode sebelumnya.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-OBL",
   "obligasi",
   "pemeringkatan",
   "PEFINDO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-OBL_E030_0156e3f5-0c55-4b08-a235-efb8238c74a6-20261121100147.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmy-shm-realisasi-dana-ipo-baru-44-6-target-molor-ke-2027",
  "category": "Aksi Korporasi",
  "title": "DMY-SHM: [Realisasi] Dana IPO Baru 44,6%, Target Molor ke 2027",
  "deck": "Dari Rp118,2 miliar dana bersih IPO, DMY-SHM baru memakai Rp52,7 miliar. Ekspansi pabrik meleset 38% dari target dan molor ke akhir 2027.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "realisasi dana IPO",
   "ekspansi pabrik",
   "PKPU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E022_e8f613c8-96c4-4674-bd92-b534dddbb66a-20261121091949.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penggabungan-usaha-dmy-shm-serap-dummy-distribusi-pangan",
  "category": "Aksi Korporasi",
  "title": "Penggabungan Usaha DMY-SHM: [Serap] Dummy Distribusi Pangan",
  "deck": "DMY-SHM mengajukan tambahan informasi rencana penggabungan usaha dengan PT Dummy Distribusi Pangan Uji, perusahaan tertutup, tanpa mengubah nama hasil penggabungan.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "penggabungan usaha",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E017A_8ea84cd4-6106-41df-9753-0760643af87d-20261121091729.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpu-dmy-shm-tagihan-rp805-material-setara-100-total-aset",
  "category": "Aksi Korporasi",
  "title": "PKPU DMY-SHM: Tagihan Rp805, [Material] Setara 100% Total Aset",
  "deck": "Gugatan PKPU dari PT Asuransi Kredit Indonesia terhadap DMY-SHM disebut perseroan setara 100 persen dari total aset, memicu usulan restrukturisasi senilai Rp119.436.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "PKPU",
   "restrukturisasi utang",
   "kepailitan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E018_93b239c4-f4fc-4729-9623-c26ac44d7bf0-20261121055617.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tender-wajib-dmy-shm-21-november-pengendali-baru-pegang-9-22",
  "category": "Aksi Korporasi",
  "title": "Tender Wajib DMY-SHM 21 November: [Pengendali Baru] Pegang 9,22%",
  "deck": "Pengendali baru DMY-SHM merampungkan penawaran tender wajib pada 21 November 2026 dengan membeli 621.938.106 saham, namun persentase kepemilikannya justru turun dari 11,14% menjadi 9,22%.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "tender wajib",
   "pengendali baru",
   "perubahan kepemilikan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E010_1e4a899f-c20e-4423-a304-529514e12440-20261121055422.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dmy-shm-komisaris-kurangi-1-32-juta-saham-hak-suara-2-17",
  "category": "Aksi Korporasi",
  "title": "DMY-SHM: Komisaris [Kurangi] 1,32 Juta Saham, Hak Suara 2,17%",
  "deck": "Komisaris DMY-SHM Siti Uji Coba mengurangi saham dari 4,98 juta jadi 3,66 juta lembar, sementara total saham tercatat perseroan melonjak hampir lima kali lipat.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "pemegang saham",
   "LBRE",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E009_49835db2-6104-4b6a-acfe-dd7916799de6-20261121055352.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-dmy-dire-rp100-unit-cair-20-november-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen DMY-DIRE Rp100/Unit, [Cair] 20 November 2026",
  "deck": "DMY-DIRE memutuskan membagikan dividen tunai final maksimum Rp100 per unit penyertaan, dengan total dana maksimum Rp1 juta, dibayarkan 20 November 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-DIRE",
   "dividen",
   "DIRE",
   "distribusi keuntungan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-DIRE_E062_c4a0512c-ee1f-4adf-b694-ae62a531a54c-20261121054934.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemantauan-khusus-dmy-shm-21-november-masuk-imbas-anak-usaha-pkpu",
  "category": "Aksi Korporasi",
  "title": "[Pemantauan Khusus] DMY-SHM 21 November: Penuhi Semua 11 Kriteria",
  "deck": "Dokumen resmi BEI menunjukkan DMY-SHM ternyata memenuhi seluruh 11 kriteria pemantauan khusus, bukan hanya kriteria anak usaha PKPU seperti pemberitaan sebelumnya.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "pemantauan khusus",
   "PKPU",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_B031_737e4579-2350-45bf-b539-0c5d84ec744e-20261121023843.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jelang-teken-ieu-cepa-ri-ue-bahas-implementasi",
  "category": "Global",
  "title": "Jelang Teken IEU-CEPA, RI-UE Bahas [Implementasi]",
  "deck": "Indonesia dan Uni Eropa memastikan kesiapan implementasi IEU-CEPA menjelang penandatanganan perjanjian di Brussels, 21 November 2026, termasuk target penerapan sementara awal 2027.",
  "date": "21 November 2026",
  "image": "assets/img/10-merek-kuliner-ri-teken-mou-ekspansi-ke-5-negara.jpg",
  "tags": [
   "IEU-CEPA",
   "Uni Eropa",
   "Airlangga Hartarto",
   "perdagangan"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7237/jelang-penandatanganan-ieu-cepa-menko-airlangga-bahas-percepatan-implementasi-dengan-uni-eropa",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "rups-dmy-shm-18-november-direksi-yoga-gantikan-teguh-yang-mundur",
  "category": "Aksi Korporasi",
  "title": "RUPS DMY-SHM 18 November: [Direksi] Yoga Gantikan Teguh yang Mundur",
  "deck": "RUPS DMY-SHM 18 November 2026 menetapkan direksi dan komisaris baru, termasuk direktur baru pengganti Teguh Uji Dummy yang mengundurkan diri.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "Perubahan Pengurus",
   "RUPS",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E036_6555dd7f-eb12-484a-8b3d-6ea2e48201de-20261121015941.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-material-dmy-shm-rp35-miliar-mesin-mi-instan-tanpa-rups",
  "category": "Aksi Korporasi",
  "title": "Transaksi Material DMY-SHM Rp35 Miliar: [Mesin Mi Instan] Tanpa RUPS",
  "deck": "DMY-SHM membeli mesin lini produksi mi instan 120 ton per hari senilai Rp35 miliar dari PT Mesin Pangan Dummy, setara 37,47 persen ekuitas, tanpa perlu restu RUPS.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "transaksi material",
   "ekspansi pabrik",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E025B_830aa84c-422c-4ec9-a7b5-666118855018-20261121015239.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-afiliasi-dmy-shm-beli-kemasan-rp18-m-dari-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "Transaksi Afiliasi DMY-SHM: [Beli Kemasan] Rp18 M dari Anak Usaha",
  "deck": "DMY-SHM membeli bahan kemasan plastik fleksibel senilai Rp18 miliar dari anak usahanya, PT Dummy Uji Kemasan, untuk produksi 2027.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "transaksi afiliasi",
   "anak usaha",
   "kemasan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E025A_cbff6896-97eb-4236-976a-d45bf5a6d23b-20261121015131.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pkpu-dmy-shm-gugatan-pemasok-rp1-25-miliar-tak-material",
  "category": "Aksi Korporasi",
  "title": "PKPU DMY-SHM: [Gugatan] Pemasok Rp1,25 Miliar, Tak Material",
  "deck": "Pemasok kemasan mengajukan PKPU senilai Rp1,25 miliar ke DMY-SHM; manajemen sebut nilainya 0,55% aset dan berencana berdamai.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "PKPU",
   "litigasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E018_1c9a6a17-a968-4ae5-9fba-61538cdee157-20261121014916.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penggabungan-usaha-dmy-shm-efektif-1-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Penggabungan Usaha DMY-SHM [Efektif] 1 Desember 2026",
  "deck": "PT Dummy Distribusi Pangan Uji melebur ke DMY-SHM, penggabungan usaha efektif berlaku 1 Desember 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "penggabungan usaha",
   "merger",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E017B_ab8d6fa4-4f60-4d93-81e3-8c057cd06f09-20261121014811.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pengambilalihan-dmy-shm-investor-baru-incar-600-juta-saham-akuisisi",
  "category": "Aksi Korporasi",
  "title": "Pengambilalihan DMY-SHM: Investor Baru Incar 600 Juta Saham [Akuisisi]",
  "deck": "PT Dummy Investor Pangan Uji menegosiasikan pengambilalihan sekitar 600 juta saham DMY-SHM, termasuk rencana membeli 48% saham dari pemegang saham utama perseroan.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "pengambilalihan",
   "akuisisi",
   "pengendali baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E010_b49db87b-b000-49cb-a8e8-e6f982f51698-20261121014102.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "private-placement-dmy-shm-14-desember-terbit-62-5-juta-saham",
  "category": "Aksi Korporasi",
  "title": "Private Placement DMY-SHM 14 Desember: [Terbit] 62,5 Juta Saham",
  "deck": "DMY-SHM akan menerbitkan 62,5 juta saham baru tanpa hak memesan efek terlebih dahulu pada 14 Desember 2026, seharga Rp400 per saham.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "Private Placement",
   "Penambahan Modal",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E008_ec4a39e1-51f5-4d10-9e8b-4199590b0c04-20261121014010.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-dmy-shm-21-november-komisaris-baru-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPSLB DMY-SHM 18 November: [Stock Split] dan Right Issue Disetujui",
  "deck": "Risalah resmi RUPS mengoreksi jenis aksi korporasi yang disetujui: stock split, bukan reverse stock seperti dilaporkan sebelumnya, dengan kuorum 82 persen.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "RUPSLB",
   "stock split",
   "right issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E013_90a39480-8e7c-4333-9179-1c2ca0eb6162-20261121010557.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-dmy-shm-21-november-stock-split-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPSLB DMY-SHM 21 November: [Stock Split] Disetujui",
  "deck": "RUPSLB DMY-SHM menyetujui pemecahan nilai nominal saham (stock split) untuk tahun buku 2026, dihadiri pemegang saham yang menguasai 87,85 persen hak suara.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "RUPSLB",
   "stock split",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E013_68ece331-f7d8-49f1-b711-1addc920d710-20261121010210.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "efektif-hmetd-dmy-shm-20-november-right-issue-mulai-bergulir",
  "category": "Aksi Korporasi",
  "title": "Efektif HMETD DMY-SHM 20 November: [Right Issue] Mulai Bergulir",
  "deck": "OJK menyatakan efektif pendaftaran penambahan modal dengan HMETD DMY-SHM pada 20 November 2026, membuka jalan bagi proses rights issue selanjutnya.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "HMETD",
   "Rights Issue",
   "Penambahan Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E074A_f98c2686-153a-476a-b751-ef87e37aea17-20261121005421.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rups-dmy-shm-18-november-right-issue-140-25-juta-saham-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPS DMY-SHM 18 November: [Right Issue] 140,25 Juta Saham Disetujui",
  "deck": "RUPS DMY-SHM menyetujui rights issue hingga 140,25 juta saham rasio 10:1 harga Rp400, dana Rp54,7 miliar untuk ekspansi pabrik dan modal kerja.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "HMETD",
   "Right Issue",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_2d1acc13-f104-4183-8502-a9dca4b91aa0-20261121005207.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-tunai-dmy-shm-rp7-saham-cair-11-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Jadwal Dividen Saham DMY-SHM [Mundur] ke 23 Desember 2026",
  "deck": "Keterbukaan informasi baru menetapkan jadwal dividen saham DMY-SHM terpisah dari dividen tunai: dibagikan 23 Desember 2026, bukan 11 Desember seperti dilaporkan sebelumnya.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "dividen saham",
   "RUPS Tahunan",
   "jadwal dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_0eb19001-fb5f-424c-8c16-e205938c1471-20261121004749.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "reverse-stock-dmy-shm-5-1-saham-beredar-jadi-250-juta",
  "category": "Aksi Korporasi",
  "title": "[Reverse Stock] DMY-SHM 5:1: Pelaksanaan Diperkirakan 30 November",
  "deck": "Dokumen resmi bursa mengungkap persetujuan prinsip BEI dan laporan penilai independen untuk reverse stock DMY-SHM, dengan pelaksanaan penggabungan saham diperkirakan 30 November 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "reverse stock",
   "penggabungan saham",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261121_DMY-SHM_E0X3_941cad22-b7ec-4a06-9949-3bc0dbfaf766-20261121002752.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "stock-split-dmy-shm-4-desember-rasio-1-2-disetujui",
  "category": "Aksi Korporasi",
  "title": "Stock Split DMY-SHM 4 Desember: Rasio 1:2 [Disetujui]",
  "deck": "Pemecahan saham DMY-SHM rasio 1:2 disetujui, jumlah saham naik jadi 2,5 miliar lembar dan mulai berlaku 4 Desember 2026.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "stock split",
   "aksi korporasi",
   "likuiditas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261120_DMY-SHM_E0X3_e6655319-7a00-4b4f-9bc8-df204b6b0c65-20261121100342.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "right-issue-dmy-shm-10-1-hmetd-rp400-saham-dana-rp54-7-m",
  "category": "Aksi Korporasi",
  "title": "Right Issue DMY-SHM 10:1: [HMETD] Rp400/Saham, Dana Rp54,7 M",
  "deck": "DMY-SHM menerbitkan hingga 140,25 juta saham baru lewat HMETD rasio 10:1 di harga Rp400 per saham, menghimpun dana bersih sekitar Rp54,7 miliar untuk ekspansi pabrik dan modal kerja.",
  "date": "21 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DMY-SHM",
   "rights issue",
   "HMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261120_DMY-SHM_E0X3_2c177dd3-d6ff-40ff-a150-0739d44a0823-20261121100326.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ccepc-beri-beasiswa-dan-sarana-belajar-ke-sd-di-cikarang",
  "category": "Industri",
  "title": "CCEPC Beri [Beasiswa] dan Sarana Belajar ke SD di Cikarang",
  "deck": "PT CCEPC Indonesia menyalurkan bantuan sarana belajar dan beasiswa bagi SDN Pasirtanjung 03 di Cikarang lewat program CSR CCEPC TechCare.",
  "date": "20 November 2026",
  "image": "assets/img/ccepc-beri-beasiswa-dan-sarana-belajar-ke-sd-di-cikarang.jpg",
  "imageV": "mwpjs8os",
  "tags": [
   "bekasi",
   "pendidikan",
   "csr",
   "industri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479483-upaya-tingkatkan-kualitas-belajar-siswa-di-lingkar-kawasan-industri-bekasi"
 },
 {
  "slug": "adopsi-ai-di-indonesia-melonjak-40-persen-dalam-setahun",
  "category": "Teknologi",
  "title": "Adopsi AI di Indonesia [Melonjak] 40 Persen dalam Setahun",
  "deck": "Adopsi AI di Indonesia tumbuh 40 persen setahun, 75 persen perusahaan pengguna melaporkan produktivitas naik, namun pebisnis masih dilema pilih aplikasi instan atau bangun sendiri.",
  "date": "20 November 2026",
  "image": "assets/img/adopsi-ai-di-indonesia-melonjak-40-persen-dalam-setahun.jpg",
  "imageV": "mwpcyfpe",
  "tags": [
   "AI",
   "adopsi teknologi",
   "Xtremax",
   "produktivitas bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479478-tren-ai-di-indonesia-produktivitas-meningkat-pebisnis-masih-terbentur-dilema"
 },
 {
  "slug": "pege-optimus-vision-global-tambah-376-300-saham-suara-6-72",
  "category": "Aksi Korporasi",
  "title": "PEGE: Optimus Vision Global [Tambah] 376.300 Saham, Suara 6,72%",
  "deck": "Optimus Vision Global Pte Ltd menambah 376.300 saham PEGE pada 20 November 2026, menaikkan hak suara dari 6,71% menjadi 6,72%.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PEGE",
   "Panca Global Kapital",
   "kepemilikan saham",
   "pemegang saham asing"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-4861-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-solution-garap-konektivitas-digital-hotel",
  "category": "Teknologi",
  "title": "[Telkom] Solution Garap Konektivitas Digital Hotel",
  "deck": "Telkom Solution memperluas layanan internet korporat Astinet dan Internet Bisnis ke sektor perhotelan, dicontohkan lewat kerja sama dengan hotel di Pasuruan, Jawa Timur.",
  "date": "20 November 2026",
  "image": "assets/img/telkom-solution-garap-konektivitas-digital-hotel.jpg",
  "imageV": "mwp12xr4",
  "tags": [
   "Telkom",
   "Telkom Solution",
   "Konektivitas Digital",
   "Perhotelan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479448-telkom-solution-perkuat-konektivitas-digital-industri-perhotelan"
 },
 {
  "slug": "jmas-defisit-dana-tabarru-rp60-88-m-ekuitas-kurang-modal",
  "category": "Aksi Korporasi",
  "title": "JMAS: Defisit Dana Tabarru Rp60,88 M, [Ekuitas Kurang] Modal",
  "deck": "JMAS mengakui ekuitasnya Rp123,42 miliar, masih kurang Rp76,58 miliar dari syarat modal minimum Rp200 miliar, dan menjadwalkan rights issue paling lambat akhir 2027.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JMAS",
   "asuransi syariah",
   "solvabilitas",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0a1d59cdb2_15c0ffbd31.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupst-true-18-november-direksi-berganti-dividen-nihil",
  "category": "Aksi Korporasi",
  "title": "RUPST TRUE 18 November: [Direksi] Berganti, Dividen Nihil",
  "deck": "RUPST Triniti Dinamik menyetujui pergantian dua direktur dan satu komisaris, serta memutuskan tidak membagikan dividen untuk tahun buku 2025.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "RUPST",
   "Triniti Dinamik",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d256168b03_dd8c452610.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jatuh-tempo-obligasi-sukuk-ppgd-rp4-triliun-delisting-23-november",
  "category": "Aksi Korporasi",
  "title": "Jatuh Tempo Obligasi-Sukuk PPGD Rp4 Triliun: [Delisting] 23 November",
  "deck": "Dua efek utang PPGD senilai total Rp4 triliun resmi dihapus dari pencatatan BEI mulai 23 November 2026 karena jatuh tempo pada tanggal itu.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGD",
   "obligasi",
   "sukuk",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/83babf95d4_3d70ff0c05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "volatilitas-transaksi-bell-perseroan-bantah-ada-informasi-material",
  "category": "Aksi Korporasi",
  "title": "Volatilitas Transaksi BELL: Perseroan [Bantah] Ada Informasi Material",
  "deck": "Trisula Textile Industries menjawab permintaan penjelasan BEI soal volatilitas saham BELL, menegaskan tak ada informasi material dan pemegang saham utama tak berencana mengubah kepemilikannya.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BELL",
   "Trisula Textile Industries",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7a293e76e8_a951af208c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jatuh-tempo-obligasi-sukuk-apai-22-nov-delisting-rp1-67-t",
  "category": "Aksi Korporasi",
  "title": "Jatuh Tempo Obligasi & Sukuk APAI 22 Nov: [Delisting] Rp1,67 T",
  "deck": "Obligasi Seri C Rp1,489 triliun dan Sukuk Ijarah Seri C Rp177 miliar milik APAI jatuh tempo 22 November 2026 dan otomatis didelisting dari BEI mulai 23 November.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "APAI",
   "Obligasi",
   "Sukuk Ijarah",
   "Jatuh Tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/01edc4ae35_f7fd59c57b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jatuh-tempo-obligasi-inkp-21-22-november-pelunasan-rp1-04-triliun",
  "category": "Aksi Korporasi",
  "title": "Jatuh Tempo Obligasi INKP 21-22 November: [Pelunasan] Rp1,04 Triliun",
  "deck": "Obligasi, sukuk mudharabah, dan obligasi dolar INKP seri B senilai total Rp1,04 triliun plus US$900.000 jatuh tempo 21-22 November 2026 dan berhenti diperdagangkan di BEI mulai 23 November.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi",
   "sukuk",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/0301565c4c_482938f17b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hmetd-mglv-r-berakhir-23-november-saham-dihapus-24-november",
  "category": "Aksi Korporasi",
  "title": "HMETD MGLV-R Berakhir 23 November, Saham [Dihapus] 24 November",
  "deck": "Masa perdagangan hak right MGLV-R di BEI berakhir 23 November 2026. Mulai 24 November, hak itu dihapus dari daftar efek tercatat bursa.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "MGLV-R",
   "HMETD",
   "Right Issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/Exchange/Peng-Batas Akhir Perdagangan MGLV-R261123-No. Peng-00222BEI.POP11-2026.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kppu-awasi-pangkalan-lpg-tegal-cek-penghapusan-syarat-nonsubsidi",
  "category": "Energi",
  "title": "KPPU Awasi Pangkalan LPG Tegal, Cek [Penghapusan] Syarat Nonsubsidi",
  "deck": "KPPU memeriksa tujuh pangkalan LPG 3 kg di Kabupaten Tegal untuk memastikan PT Hibarnas Jaya benar-benar menghapus syarat wajib beli LPG nonsubsidi bagi pembeli LPG subsidi.",
  "date": "20 November 2026",
  "image": "assets/img/kppu-awasi-pangkalan-lpg-tegal-cek-penghapusan-syarat-nonsubsidi.jpg",
  "imageV": "mwouqgnh",
  "tags": [
   "KPPU",
   "LPG subsidi",
   "Persaingan usaha",
   "Tegal"
  ],
  "kreditFoto": "Komisi Pengawas Persaingan Usaha",
  "sourceUrl": "https://kppu.go.id/berita/kppu-periksa-tujuh-pangkalan-lpg-di-tegal-awasi-penghapusan-syarat-pembelian-lpg-nonsubsidi",
  "sourceLabel": "Komisi Pengawas Persaingan Usaha"
 },
 {
  "slug": "ri-dan-uni-eropa-teken-perjanjian-dagang-cepa",
  "category": "Global",
  "title": "RI dan Uni Eropa [Teken] Perjanjian Dagang CEPA",
  "deck": "Mendag Busan bertolak ke Brussels menandatangani I-EU CEPA dan perjanjian investasi, bagian dari upaya memperluas akses pasar Indonesia ke Uni Eropa.",
  "date": "20 November 2026",
  "image": "assets/img/10-produk-umkm-pangan-tembus-rak-ritel-aeon.jpg",
  "tags": [
   "I-EU CEPA",
   "Uni Eropa",
   "Kementerian Perdagangan",
   "ekspor impor"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bersiap-tanda-tangani-i-eu-cepa-mendag-busan-bertolak-ke-brussels",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "tspc-suntik-modal-rp60-miliar-ke-tempo-land-porsi-tetap-50-50",
  "category": "Aksi Korporasi",
  "title": "TSPC Suntik Modal Rp60 Miliar ke Tempo Land, Porsi Tetap [50-50]",
  "deck": "TSPC dan anak usahanya Barclay Products menambah modal PT Tempo Land senilai Rp60 miliar, dengan porsi kepemilikan tetap 50-50 di perusahaan itu.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TSPC",
   "transaksi afiliasi",
   "Tempo Land",
   "Barclay Products"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2b4d7dd6b6_001cb5ddb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tspc-transaksi-afiliasi-tus-terbitkan-saham-rp50-miliar-ke-bcl",
  "category": "Aksi Korporasi",
  "title": "TSPC: [Transaksi Afiliasi] TUS Terbitkan Saham Rp50 Miliar ke BCL",
  "deck": "TUS, anak usaha TSPC, menerbitkan 50.000 saham baru senilai Rp50 miliar yang seluruhnya diambil BCL, sesama anak usaha TSPC, sehingga BCL kini menguasai 99,99% saham TUS.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TSPC",
   "transaksi afiliasi",
   "Tempo Scan Pacific",
   "restrukturisasi internal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/09e2e8b2b2_71ca1ed758.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tspc-suntik-modal-rp40-miliar-ke-pli-saham-jadi-94-44",
  "category": "Aksi Korporasi",
  "title": "TSPC [Suntik Modal] Rp40 Miliar ke PLI, Saham Jadi 94,44%",
  "deck": "TSPC mengambil seluruh 40.000 saham baru anak usahanya, PT Polari Limunusainti, senilai Rp40 miliar, sementara dua anak usaha lain melepas haknya.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TSPC",
   "transaksi afiliasi",
   "anak usaha",
   "Polari Limunusainti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6217f92695_5f781ae54e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "public-expose-pnbn-25-nov-laba-3q26-naik-3-jadi-rp2-26-t",
  "category": "Aksi Korporasi",
  "title": "Public Expose PNBN 25 Nov: [Laba] 3Q26 Naik 3% jadi Rp2,26 T",
  "deck": "Bank Panin menggelar Public Expose tahunan 25 November 2026, memaparkan laba bersih sembilan bulan 2026 Rp2,26 triliun, naik 3 persen secara tahunan.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PNBN",
   "Bank Panin",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c985365d6f_ca65f43309.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tgka-jual-60-saham-tira-cipta-logistik-ke-japfa-food-divestasi",
  "category": "Aksi Korporasi",
  "title": "TGKA Jual 60% Saham Tira Cipta Logistik ke Japfa Food [Divestasi]",
  "deck": "TGKA menjual 60 persen saham PT Tira Cipta Logistik dan 1 persen PT Tira Cipta Transportasi ke PT Japfa Food Indonesia.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGKA",
   "divestasi",
   "Japfa Food Indonesia",
   "Tira Cipta Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8f69207c83_927a5d79e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obligasi-medc-seri-b-jatuh-tempo-23-november-pelunasan-rp58-2-m",
  "category": "Aksi Korporasi",
  "title": "Obligasi MEDC Seri B Jatuh Tempo 23 November: [Pelunasan] Rp58,2 M",
  "deck": "Obligasi Berkelanjutan IV Medco Energi Tahap II Seri B senilai Rp58,195 miliar jatuh tempo 23 November 2026 dan langsung delisting dari BEI.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8b3df6a7ca_1eb31316cb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btpn-rencanakan-go-private-dan-delisting-rupslb-30-november",
  "category": "Aksi Korporasi",
  "title": "BTPN Rencanakan [Go Private] dan Delisting, RUPSLB 30 November",
  "deck": "Bank SMBC Indonesia (BTPN) mengajukan rencana mengubah status jadi perusahaan tertutup dan menghapus seluruh sahamnya dari BEI, penjelasan rinci menyusul 30 November 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPN",
   "go private",
   "delisting",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2835aebe3c_dab7a589e4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-q3-2026-pendapatan-us-70-4-juta-liabilitas-melonjak-139",
  "category": "Aksi Korporasi",
  "title": "EMAS Q3 2026: Pendapatan US$70,4 Juta, [Liabilitas] Melonjak 139%",
  "deck": "Aset EMAS naik 64,6% jadi US$1,22 miliar dan pendapatan melonjak seiring tambang Pani mulai berproduksi, tapi utang bank melonjak 139% dan rugi masih berlanjut.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "laporan keuangan",
   "tambang emas",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261120172351-65755-0/FinancialStatement-2026-III-EMAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "totl-direksi-saleh-tambah-170-700-saham-hak-suara-0-191",
  "category": "Aksi Korporasi",
  "title": "TOTL: Direksi Saleh [Tambah] 170.700 Saham, Hak Suara 0,191%",
  "deck": "Direksi TOTL Saleh membeli 170.700 saham pada 20 November 2026 seharga Rp1.260 per saham, hak suaranya naik dari 0,186 persen menjadi 0,191 persen.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "laporan kepemilikan",
   "Direksi",
   "Total Bangun Persada"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-6065-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-david-utama-tambah-300-000-saham-hak-suara-jadi-0-015",
  "category": "Aksi Korporasi",
  "title": "SILO: David Utama [Tambah] 300.000 Saham, Hak Suara Jadi 0,015%",
  "deck": "Direksi SILO David Utama menambah 300.000 saham lewat transaksi repurchase agreement pada 20 November 2026, hak suaranya naik jadi 0,015%.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SILO",
   "laporan kepemilikan",
   "direksi",
   "saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-5674-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbma-laba-9m-2026-us-313-7-juta-pendapatan-naik-ke-us-1-78-miliar",
  "category": "Aksi Korporasi",
  "title": "MBMA: Laba 9M-2026 US$313,7 Juta, [Pendapatan] Naik ke US$1,78 Miliar",
  "deck": "Laporan keuangan interim auditan MBMA mencatat pendapatan sembilan bulan 2026 naik ke US$1,78 miliar dan laba bersih melonjak ke US$313,68 juta, hampir lima kali periode sama tahun lalu.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "Merdeka Battery Materials",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261120170555-65807-0/FinancialStatement-2026-III-MBMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "transaksi-material-mari-rp406-miliar-right-issue-cast-tunggu-rups",
  "category": "Aksi Korporasi",
  "title": "Transaksi Material MARI Rp406 Miliar: [Right Issue] CAST Tunggu RUPS",
  "deck": "MARI ajukan transaksi material Rp406,35 miliar untuk konversi utang dan penyertaan modal baru di anak usahanya, CAST, menanti persetujuan RUPS.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MARI",
   "Transaksi Material",
   "CAST",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/35edba8c8b_b2e2918e1a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waran-terstruktur-dr-disesuaikan-usai-bbca-bagi-dividen-rp35",
  "category": "Aksi Korporasi",
  "title": "Waran Terstruktur DR [Disesuaikan] usai BBCA Bagi Dividen Rp35",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan Waran Terstruktur BBCA (DR) menyusul dividen tunai Rp35 per saham dari BBCA, efektif 19 November 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "BBCA",
   "Waran Terstruktur",
   "Dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e8a629d1e5_6a6f42271b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "waran-terstruktur-dr-disesuaikan-usai-bfin-bagi-dividen-rp35-rasio",
  "category": "Aksi Korporasi",
  "title": "Waran Terstruktur DR Disesuaikan usai BFIN Bagi Dividen Rp35 [Rasio]",
  "deck": "RHB Sekuritas menyesuaikan rasio dan harga pelaksanaan waran terstruktur BFIN setelah BFI Finance mengumumkan dividen tunai Rp35 per saham, total Rp516,2 miliar.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DR",
   "BFIN",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/85dd77a5ff_09d5d2abf3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akuisisi-jpfa-jfi-ambil-alih-tcl-dan-tct-dari-tigaraksa-satria",
  "category": "Aksi Korporasi",
  "title": "[Akuisisi] JPFA: JFI Ambil Alih TCL dan TCT dari Tigaraksa Satria",
  "deck": "Japfa Food Indonesia, anak usaha JAPFA, menandatangani perjanjian membeli 168.000 saham (60%) TCL dan 100 saham (1%) TCT dari Tigaraksa Satria, memperkuat kendali atas logistik rantai dingin.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JPFA",
   "akuisisi",
   "Tigaraksa Satria",
   "logistik rantai dingin"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20d27f55ab_c2c3fe8b6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penyesuaian-harga-waran-zp-imbas-dividen-bbca-efektif-30-november",
  "category": "Aksi Korporasi",
  "title": "Penyesuaian Harga Waran ZP Imbas Dividen BBCA, [Efektif] 30 November",
  "deck": "Harga pelaksanaan dan rasio konversi waran terstruktur ZP atas saham BBCA disesuaikan menyusul dividen interim Rp35 per saham, efektif mulai 30 November 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "BBCA",
   "waran terstruktur",
   "dividen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/881e1bbadb_bcff4ee376.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-direksi-aldo-henry-artoko-tambah-3-15-juta-saham-suara-0-43",
  "category": "Aksi Korporasi",
  "title": "ARKO: Direksi Aldo Henry Artoko [Tambah] 3,15 Juta Saham, Suara 0,43%",
  "deck": "Direksi ARKO Aldo Henry Artoko menambah 3,16 juta lembar saham lewat dua transaksi pembelian pada 18-19 November 2026, hak suaranya naik dari 0,32 jadi 0,43 persen.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-1095-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-flmc-18-november-domisili-pindah-ke-kota-cimahi-disetujui",
  "category": "Aksi Korporasi",
  "title": "RUPSLB FLMC 18 November: [Domisili] Pindah ke Kota Cimahi Disetujui",
  "deck": "RUPSLB FLMC menyetujui perubahan domisili ke Kota Cimahi, penyesuaian KBLI 2025, dan penambahan KBLI perusahaan induk untuk rencana anak usaha.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FLMC",
   "RUPSLB",
   "Perubahan Domisili",
   "KBLI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/25aa080cf7_ce39892847.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-astra-international-tambah-238-4-juta-saham-suara-84-95",
  "category": "Aksi Korporasi",
  "title": "AUTO: Astra International [Tambah] 238,4 Juta Saham, Suara 84,95%",
  "deck": "Astra International menambah 238,4 juta saham AUTO lewat tender offer sukarela seharga Rp3.600 per saham, hak suara naik dari 80% menjadi 84,95%.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "Astra International",
   "tender offer",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-9416-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rgas-pinjamkan-rp45-m-ke-anak-usaha-transaksi-material-43-ekuitas",
  "category": "Aksi Korporasi",
  "title": "RGAS Pinjamkan Rp45 M ke Anak Usaha: [Transaksi Material] 43% Ekuitas",
  "deck": "Perseroan memberikan pinjaman modal kerja ke anak usaha PT KIS; digabung dengan pinjaman ke PT KS sebelumnya, totalnya Rp45 miliar atau 43,31 persen ekuitas, melewati ambang transaksi material.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RGAS",
   "transaksi material",
   "pinjaman afiliasi",
   "POJK 17/2020"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/56d24be5f5_c9e2a25db4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btpn-direksi-yuki-terayama-tambah-1-500-saham-hak-suara-0",
  "category": "Aksi Korporasi",
  "title": "BTPN: Direksi Yuki Terayama [Tambah] 1.500 Saham, Hak Suara 0%",
  "deck": "Direksi BTPN, Yuki Terayama, membeli 1.500 saham lewat program insentif Material Risk Taker, hak suaranya tetap di bawah 0,01 persen.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPN",
   "Bank SMBC Indonesia",
   "laporan kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-3995-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ctra-morgan-stanley-jual-1-1-miliar-saham-hak-suara-12-44",
  "category": "Aksi Korporasi",
  "title": "CTRA: Morgan Stanley [Jual] 1,1 Miliar Saham, Hak Suara 12,44%",
  "deck": "Morgan Stanley and Co International Plc melepas 1,1 miliar saham CTRA pada 17 November lewat perjanjian repurchase, hak suaranya turun dari 18,37% jadi 12,44%.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CTRA",
   "Ciputra Development",
   "Morgan Stanley",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-6416-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btpn-direksi-michellina-tambah-1-500-saham-hak-suara-0",
  "category": "Aksi Korporasi",
  "title": "BTPN: Direksi Michellina [Tambah] 1.500 Saham, Hak Suara 0%",
  "deck": "Direksi BTPN Michellina L Triwardhany menerima 1.500 saham lewat program insentif Material Risk Taker seharga Rp2.447 per saham, hak suara tetap 0 persen.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPN",
   "kepemilikan saham",
   "direksi",
   "Material Risk Taker Program"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-1004-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "djp-ingatkan-wajib-pajak-cermati-data-bukti-potong-spt",
  "category": "Makroekonomi",
  "title": "DJP Ingatkan Wajib Pajak [Cermati] Data Bukti Potong SPT",
  "deck": "Kanwil DJP Kalselteng meminta wajib pajak mengecek ulang data bukti potong PPh di Coretax, setelah sejumlah WP pribadi menghapus data yang sudah terisi otomatis saat lapor SPT Tahunan 2025.",
  "date": "20 November 2026",
  "image": "assets/img/djp-ingatkan-wajib-pajak-cermati-data-bukti-potong-spt.jpg",
  "imageV": "mwopgpno",
  "tags": [],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/kanwil-djp-kalselteng-imbau-wajib-pajak-cermati-data-bukti-potong-pada-spt-tahunan",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "penghapusan-sanksi-pajak-100-berakhir-31-desember-2026",
  "category": "Makroekonomi",
  "title": "Penghapusan Sanksi Pajak [100%] Berakhir 31 Desember 2026",
  "deck": "Ditjen Pajak membuka keringanan sanksi administrasi hingga 100 persen bagi wajib pajak yang membereskan SPT atau tunggakan sampai akhir tahun, sebelum besarannya turun bertahap mulai 2027.",
  "date": "20 November 2026",
  "image": "assets/img/penghapusan-sanksi-pajak-100-berakhir-31-desember-2026.jpg",
  "imageV": "mwopgrbw",
  "tags": [
   "Pajak",
   "PSA",
   "Coretax",
   "Jambi"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/enam-pekan-tersisa-untuk-hapus-sanksi-pajak-100-persen",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "tmpo-pt-pikatan-baru-masuk-jadi-pemegang-saham-baru-10-19",
  "category": "Aksi Korporasi",
  "title": "TMPO: PT Pikatan Baru [Masuk] Jadi Pemegang Saham Baru 10,19%",
  "deck": "PT Pikatan Baru resmi tercatat sebagai pemegang saham baru TMPO dengan 107.827.142 saham atau 10,19 persen, dalam laporan struktur pemegang saham periode berakhir 19 November 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Tempo Inti Media",
   "struktur pemegang saham",
   "PT Pikatan Baru"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d2c853851f_b186fb8e3b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btpn-direksi-jun-saito-tambah-1-500-saham-hak-suara-tetap-0",
  "category": "Aksi Korporasi",
  "title": "BTPN: Direksi Jun Saito [Tambah] 1.500 Saham, Hak Suara Tetap 0%",
  "deck": "Direksi BTPN asal Jepang, Jun Saito, menerima 1.500 saham lewat program insentif wajib bagi pengambil risiko utama, melengkapi dua laporan serupa sehari sebelumnya.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPN",
   "Bank SMBC Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-9229-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oso-dukung-ruu-obligasi-daerah-gagasan-golkar",
  "category": "Makroekonomi",
  "title": "OSO Dukung RUU [Obligasi] Daerah Gagasan Golkar",
  "deck": "Mantan Ketua DPD OSO mendukung RUU Obligasi Daerah yang disiapkan Fraksi Golkar MPR sebagai alternatif pembiayaan pembangunan daerah.",
  "date": "20 November 2026",
  "image": "assets/img/oso-dukung-ruu-obligasi-daerah-gagasan-golkar.jpg",
  "imageV": "mwopgrsy",
  "tags": [
   "obligasi daerah",
   "otonomi daerah",
   "golkar",
   "oso"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479397-oso-dukung-ruu-obligasi-daerah-yang-disiapkan-golkar-di-mpr"
 },
 {
  "slug": "buyback-smgr-rp250-miliar-pembelian-mulai-20-november-2026",
  "category": "Aksi Korporasi",
  "title": "Buyback SMGR Rp250 Miliar: [Pembelian] Mulai 20 November 2026",
  "deck": "SMGR akan membeli kembali saham senilai maksimal Rp250 miliar mulai 20 November 2026, berlaku sampai 3 bulan, menyusul relaksasi OJK di tengah pasar yang berfluktuasi.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGR",
   "buyback",
   "Semen Indonesia",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4ab07071ce_f834e71ca6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-bjb-raih-liputan6-good-impact-award-untuk-umkm",
  "category": "UMKM",
  "title": "Bank BJB Raih Liputan6 Good Impact Award untuk [UMKM]",
  "deck": "Bank BJB menerima Liputan6 Good Impact Award 2026 untuk program pemberdayaan UMKM, diterima langsung oleh Budiatmo Sudrajat di tengah hadirnya dua menteri.",
  "date": "20 November 2026",
  "image": "assets/img/bank-bjb-raih-liputan6-good-impact-award-untuk-umkm.jpg",
  "imageV": "mwopgs7k",
  "tags": [
   "Bank BJB",
   "UMKM",
   "Liputan6 Good Impact Award",
   "PESAT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479388-bank-bjb-raih-liputan6-good-impact-award-2026-bukti-nyata-dorong-ekonomi-umkm"
 },
 {
  "slug": "public-expose-sema-7-desember-online-bahas-kinerja-2027",
  "category": "Aksi Korporasi",
  "title": "Public Expose SEMA 7 Desember: [Online] Bahas Kinerja 2027",
  "deck": "SEMA menggelar Public Expose Insidentil secara daring pada 7 Desember 2026, membahas pengembangan usaha dan prospek kinerja 2027.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SEMA",
   "Public Expose",
   "Keterbukaan Informasi",
   "Prospek 2027"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/31e020307a_0c5653aaf4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dividen-interim-bfin-rp35-per-saham-cair-17-desember-2026",
  "category": "Aksi Korporasi",
  "title": "Dividen Interim BFIN Rp35 per Saham, [Cair] 17 Desember 2026",
  "deck": "BFI Finance membagikan dividen interim tahun buku 2026 sebesar Rp35 per saham, total Rp516,2 miliar, dibayar 17 Desember 2026.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BFIN",
   "dividen interim",
   "BFI Finance",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2d7837a6dc_fe7d0f6b13.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-investasi-sukses-bersama-tambah-saham-suara-jadi-54-42",
  "category": "Aksi Korporasi",
  "title": "WIFI: Sinergi Graha Kapital Jual 1,42 Miliar Saham, Suara Jadi 0%",
  "deck": "Sinergi Graha Kapital jual seluruh 1,42 miliar saham WIFI (26,667% suara) ke Investasi Sukses Bersama, 19 Nov 2026, memastikan sumber lonjakan suara Investasi Sukses Bersama ke 54,42%.",
  "date": "20 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "laporan kepemilikan",
   "Investasi Sukses Bersama",
   "Sinergi Graha Kapital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-20112026-4437-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-lagi-ke-rp2-500-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Lagi ke Rp2.500.000/Gram",
  "deck": "Harga emas batangan Antam turun Rp11.000 menjadi Rp2.500.000 per gram pada 20 November 2026, sementara harga buyback ikut melemah ke Rp2.145.000 per gram.",
  "date": "20 November 2026",
  "image": "assets/img/harga-emas-antam-turun-lagi-ke-rp2-500-000-gram.jpg",
  "imageV": "mwopgsbl",
  "tags": [
   "emas",
   "antam",
   "harga emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/479367-merosot-lagi-harga-emas-antam-hari-ini-20-november-2026-rp2500000-per-gram"
 },
 {
  "slug": "neraca-pembayaran-ri-surplus-tipis-di-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Neraca Pembayaran RI [Surplus] Tipis di Triwulan III 2026",
  "deck": "Neraca pembayaran Indonesia berbalik surplus 0,1 miliar dolar AS pada triwulan III 2026, ditopang perbaikan neraca dagang; cadangan devisa naik ke 146,3 miliar dolar AS.",
  "date": "20 November 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "Neraca Pembayaran",
   "Bank Indonesia",
   "Cadangan Devisa",
   "Ekspor"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2825526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
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
  "title": "RUPSLB INOV 28 Desember: [Opini Wajar] Divestasi Urecel Rp258 M",
  "deck": "Penilai independen KJPP Yufrizal, Deny Kamal dan Rekan menyatakan rencana penjualan 45,8% saham Urecel ke CIP Capital senilai Rp258,16 miliar wajar. RUPSLB persetujuan tetap digelar 28 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INOV",
   "RUPSLB",
   "Divestasi",
   "Transaksi Material"
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
  "title": "RUPSLB INOV 28 Desember: [Divestasi] Urecel Dinilai Rp258,16 Miliar",
  "deck": "Penilai independen menaksir pelepasan 45,8 persen saham anak usaha Urecel ke CIP Capital senilai Rp258,16 miliar dan menyatakan transaksi itu wajar, menjelang RUPSLB 28 Desember 2026.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INOV",
   "RUPSLB",
   "Divestasi Urecel",
   "Transaksi Material"
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
  "image": "assets/img/kemasan-produk-gudang.jpg",
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
  "title": "Laba ARCI 9 Bulan 2026 [Naik] 55% jadi US$110,4 Juta",
  "deck": "Laba bersih ARCI sembilan bulan 2026 naik 55,2 persen menjadi US$110,35 juta, ditopang pendapatan yang tumbuh hampir 40 persen dari penjualan emas.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARCI",
   "laba bersih",
   "laporan keuangan",
   "tambang emas"
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
  "image": "assets/img/pasar-tradisional-pagi.jpg",
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
  "title": "Right Issue MEJA: [Harga] Rp450-550, TCP Rp1,1-1,6 Triliun",
  "deck": "Laporan hasil Public Expose MEJA membuka kisaran harga rights issue Rp450-550 per saham dan valuasi akuisisi 45% Trimata Coal Rp1,1-1,6 triliun, RUPSLB tetap dijadwalkan Februari 2027.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEJA",
   "right issue",
   "Trimata Coal",
   "public expose"
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
  "title": "Public Expose ROTI: Capex 2026 Rp100-120 Miliar, [RUPSLB] 15 Desember",
  "deck": "Public Expose 24 November mengungkap rencana capex Rp100-120 miliar tahun ini dan target free float 15 persen sebelum 2029, sementara RUPSLB penarikan treasury shares tetap digelar 15 Desember.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "Public Expose",
   "RUPSLB",
   "Free Float"
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
  "image": "assets/img/negosiasi-dagang-meja.jpg",
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
  "title": "RUPO Kedua MEDP [Dijadwalkan] 2 Desember: Bahas Pengalihan Dana",
  "deck": "RUPO kedua resmi dijadwalkan 2 Desember 2026 setelah RUPO pertama gagal kuorum; agenda tetap soal pengalihan dana obligasi dari proyek Bonjol ke PLTGU Batam.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDP",
   "RUPO",
   "obligasi",
   "pengalihan dana"
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
  "title": "DGIK: Global Dinamika Kencana Tambah 1,48 Juta Saham, Hak Suara 75,60%",
  "deck": "Global Dinamika Kencana kembali membeli 1.475.200 saham DGIK pada 19 November 2026 senilai Rp151 per saham, namun porsinya hanya 0,035% dari kepemilikannya sehingga hak suaranya tetap 75,60%.",
  "date": "19 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DGIK",
   "Global Dinamika Kencana",
   "Laporan Kepemilikan",
   "Nusa Konstruksi Enjiniring"
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
  "image": "assets/img/12-proyek-lrt-city-dilanjutkan-danantara-kucurkan-rp456-m.jpg",
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
  "title": "FOLK: Sumber Garam Pratama Jual 98.116.961 Saham, Suara Jadi 13,25%",
  "deck": "Sumber Garam Pratama melepas tambahan 98.116.961 saham FOLK pada 17-18 November 2026, menurunkan hak suaranya dari 15,65 persen menjadi 13,25 persen.",
  "date": "18 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FOLK",
   "Sumber Garam Pratama",
   "Laporan Kepemilikan",
   "Multi Garam Utama"
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
  "title": "KDTN: Putrasakti Mandiri Tambah 51.600 Saham, Hak Suara Jadi 32,128%",
  "deck": "Dokumen baru mengungkap pembelian tambahan 51.600 saham KDTN oleh Putrasakti Mandiri pada 18 November 2026, bagian dari rangkaian pembelian yang sudah membawa hak suaranya ke 32,128%.",
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
  "image": "assets/img/14-produsen-pangan-ri-teken-mou-ekspor-potensi-us-25-2-juta.jpg",
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
 }
];
