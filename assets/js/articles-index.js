// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
 },
 {
  "slug": "dooh-paparkan-visi-jadi-holding-ekosistem-ai-usai-sii-masuk",
  "category": "Aksi Korporasi",
  "title": "DOOH Paparkan Visi Jadi Holding [Ekosistem AI] Usai SII Masuk",
  "deck": "DOOH memaparkan materi public expose insidentil yang diminta bursa, memuat visi jadi holding ekosistem AI setelah SII masuk sebagai pengendali baru.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "Public Expose",
   "Sinergi Internasional Investama",
   "Ekosistem AI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9703141db0_6342f2b625.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "krya-tanggapi-bei-soal-volatilitas-transaksi-kaji-aksi-korporasi",
  "category": "Aksi Korporasi",
  "title": "KRYA Tanggapi BEI soal [Volatilitas] Transaksi, Kaji Aksi Korporasi",
  "deck": "KRYA menjawab surat BEI terkait volatilitas transaksi sahamnya, menyatakan tidak ada informasi material baru namun mengaku tengah mengkaji kemungkinan aksi korporasi.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KRYA",
   "volatilitas saham",
   "BEI",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c3756911af_aa002fb9dc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-laba-semester-i-2026-turun-13-8-meski-pendapatan-naik",
  "category": "Aksi Korporasi",
  "title": "[HEAL] Laba Semester I 2026 Turun 13,8% Meski Pendapatan Naik",
  "deck": "Materi public expose tahunan HEAL menunjukkan pendapatan semester I 2026 naik 6,5% jadi Rp3,61 triliun, sementara laba bersih turun 13,8% akibat ekspansi rumah sakit baru.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "Public Expose",
   "Kinerja Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a246f5e783_7af0fa3db0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-bukukan-kontrak-baru-rp8-3-triliun-naik-118-yoy",
  "category": "Aksi Korporasi",
  "title": "ADHI Bukukan Kontrak Baru [Rp8,3 Triliun], Naik 118% YoY",
  "deck": "Perolehan kontrak baru ADHI Karya melonjak 118,4 persen secara tahunan menjadi Rp8,3 triliun hingga Juli 2026, didominasi proyek infrastruktur pemerintah.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "kontrak baru",
   "konstruksi",
   "infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/af9a3b0ad5_56b827947f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipcc-rombak-direksi-wing-megantoro-jadi-direktur-utama",
  "category": "Aksi Korporasi",
  "title": "IPCC Rombak Direksi, [Wing Megantoro] Jadi Direktur Utama",
  "deck": "RUPSLB IPCC menyetujui pergantian direksi pada 3 September 2026: Wing Megantoro jadi Direktur Utama menggantikan Sugeng Mulyadi, posisi Direktur Komersial kosong.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCC",
   "direksi",
   "RUPSLB",
   "pergantian pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/788d8078b6_2614520113.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "EMAS Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "EMAS menjawab surat Bursa soal volatilitas sahamnya: tak ada info material baru, meski pemegang saham MDKA disebut sempat beraktivitas atas kepemilikannya.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "Merdeka Gold Resources",
   "MDKA",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/256d4957cb_32c1844e31.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-pupuk-indonesia-melonjak-253-di-semester-i-2026",
  "category": "BUMN",
  "title": "Laba Pupuk Indonesia [Melonjak] 253% di Semester I 2026",
  "deck": "Pupuk Indonesia membukukan laba bersih Rp8,51 triliun pada Januari-Juni 2026, naik 253% dari periode sama tahun lalu, didorong kenaikan volume produksi dan efisiensi biaya.",
  "date": "3 September 2026",
  "image": "assets/img/laba-pupuk-indonesia-melonjak-253-di-semester-i-2026.jpg",
  "imageV": "mtl9os42",
  "tags": [
   "Pupuk Indonesia",
   "BUMN",
   "Laporan Keuangan",
   "Pupuk Subsidi"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/877/pertumbuhan-pupuk-indonesia-untuk-swasembada-pangan-nasional",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "judi-online-bajak-piala-dunia-deposit-tembus-rp1-02-triliun",
  "category": "Perbankan",
  "title": "Judi Online Bajak Piala Dunia, Deposit Tembus [Rp1,02 Triliun]",
  "deck": "PPATK mencatat deposit judi online bertema Piala Dunia 2026 tembus Rp1,02 triliun dalam sebulan, sementara QRIS mendominasi saluran deposit sepanjang semester ini.",
  "date": "3 September 2026",
  "image": "assets/img/judi-online-bajak-piala-dunia-deposit-tembus-rp1-02-triliun.jpg",
  "imageV": "mtl4cj22",
  "tags": [
   "Judi Online",
   "PPATK",
   "QRIS",
   "Piala Dunia 2026"
  ],
  "kreditFoto": "Pusat Pelaporan dan Analisis Transaksi Keuangan",
  "sourceUrl": "https://www.ppatk.go.id/siaran_pers/read/1642/judi-online-membajak-piala-dunia-2026-deposit-tembus-rp-1-triliun.html",
  "sourceLabel": "Pusat Pelaporan dan Analisis Transaksi Keuangan"
 },
 {
  "slug": "anggaran-ppatk-naik-100-dana-judi-online-turun-20-persen",
  "category": "Makroekonomi",
  "title": "Anggaran PPATK Naik 100%, Dana Judi Online [Turun] 20 Persen",
  "deck": "PPATK melaporkan anggarannya digandakan lebih dari 100 persen dan perputaran dana judi online turun 20,3 persen pada 2025, seiring penguatan lembaga menjelang usia ke-24.",
  "date": "3 September 2026",
  "image": "assets/img/anggaran-ppatk-naik-100-dana-judi-online-turun-20-persen.jpg",
  "imageV": "mtl4cl6s",
  "tags": [
   "PPATK",
   "Judi Online",
   "Pencucian Uang",
   "Anggaran Negara"
  ],
  "kreditFoto": "Pusat Pelaporan dan Analisis Transaksi Keuangan",
  "sourceUrl": "https://www.ppatk.go.id/siaran_pers/read/1650/dukungan-presiden-prabowo-subianto-kerja-nyata-ppatk-menjaga-indonesia.html",
  "sourceLabel": "Pusat Pelaporan dan Analisis Transaksi Keuangan"
 },
 {
  "slug": "winr-rencana-naikkan-kepemilikan-di-laxo-global-jadi-90",
  "category": "Aksi Korporasi",
  "title": "WINR Rencana Naikkan Kepemilikan di Laxo Global Jadi [90%]",
  "deck": "PT Winner Nusantara Jaya menandatangani addendum akuisisi yang menaikkan target kepemilikan saham di ISP Laxo Global Akses dari 60% menjadi 90%, dari kepemilikan saat ini 8,5%.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "akuisisi",
   "ISP",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c2a8a6d092_8d04070471.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-umumkan-rencana-rupslb-pada-12-oktober-2026",
  "category": "Aksi Korporasi",
  "title": "EXCL Umumkan Rencana [RUPSLB] pada 12 Oktober 2026",
  "deck": "XLSmart Telecom menjadwalkan RUPSLB pada 12 Oktober 2026, dengan pemegang saham per 17 September 2026 yang berhak hadir dan memberi suara.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EXCL",
   "RUPSLB",
   "XLSmart Telecom",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1ead5eeed9_ab47c1df3b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yelo-tanggapi-permintaan-bei-pemegang-saham-utama-bertahan",
  "category": "Aksi Korporasi",
  "title": "YELO Tanggapi Permintaan BEI, Pemegang Saham Utama [Bertahan]",
  "deck": "BEI meminta YELO menjelaskan volatilitas transaksi sahamnya. Perseroan mengaku tak ada informasi material tersembunyi, dan pengendali ASN pastikan tidak berencana mengurangi kepemilikan.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YELO",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f6dad4f139_7a29cba384.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-bantah-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "UNVR Bantah Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "UNVR menanggapi permintaan Bursa soal volatilitas transaksi sahamnya, menyatakan tidak ada info material tersembunyi dan pemegang saham utama belum berencana ubah kepemilikan.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "Unilever Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/412a4283e4_0faf4606fa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-cabai-rawit-merah-melonjak-ke-rp82-700-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Cabai Rawit Merah [Melonjak] ke Rp82.700 per Kg",
  "deck": "Seluruh jenis cabai naik signifikan pada Kamis (3/9), dipimpin cabai rawit merah yang melonjak 11,76 persen menjadi Rp82.700 per kilogram, sementara beras, bawang, dan ayam relatif stabil.",
  "date": "3 September 2026",
  "image": "assets/img/harga-cabai-rawit-merah-melonjak-ke-rp82-700-per-kg.jpg",
  "imageV": "mtl4clt2",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "cabai"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464575-harga-pangan-hari-ini-3-september-2026-emak-emak-gigit-jari-cabai-rawit-merah-tembus-rp82700-per-kilogram"
 },
 {
  "slug": "eraa-rencanakan-buyback-rp500-miliar-berlaku-hingga-desember",
  "category": "Aksi Korporasi",
  "title": "ERAA Rencanakan [Buyback] Rp500 Miliar, Berlaku hingga Desember",
  "deck": "Erajaya Swasembada mengumumkan rencana pembelian kembali saham hingga Rp500 miliar selama tiga bulan mulai 4 September 2026, memakai skema OJK untuk kondisi pasar berfluktuasi signifikan.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "buyback saham",
   "Erajaya Swasembada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ba7edbe79b_6b7f2b961a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdla-bukukan-laba-rp226-miliar-naik-12-6-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "MDLA Bukukan Laba Rp226 Miliar, [Naik] 12,6% Semester I 2026",
  "deck": "Medela Potentia (MDLA) mencatat pendapatan Rp8,2 triliun dan laba bersih Rp226 miliar pada semester I 2026, naik masing-masing 10,1% dan 12,6% dibanding tahun lalu.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDLA",
   "Medela Potentia",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/cc7910a964_5dbdb6b4c5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dkft-jadwalkan-dividen-interim-rp30-per-saham",
  "category": "Aksi Korporasi",
  "title": "DKFT Jadwalkan [Dividen] Interim Rp30 per Saham",
  "deck": "Central Omega Resources (DKFT) akan membagikan dividen tunai interim Rp30 per saham, total maksimal Rp169,15 miliar, dibayar 21 September 2026.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DKFT",
   "dividen interim",
   "Central Omega Resources",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7070e921d0_a16e13d46b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gtbo-kembali-diperdagangkan-usai-suspensi-dicabut-bei",
  "category": "Aksi Korporasi",
  "title": "GTBO Kembali Diperdagangkan Usai [Suspensi] Dicabut BEI",
  "deck": "BEI mencabut suspensi saham GTBO mulai 3 September 2026 setelah emiten memenuhi kewajiban yang sempat membuatnya disetop dua kali sejak Juni.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GTBO",
   "suspensi saham",
   "BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/741d472172_e9979c800f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-naik-rp15-000-jadi-rp2-639-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Naik] Rp15.000 jadi Rp2.639.000/Gram",
  "deck": "Harga emas Antam hari ini naik Rp15.000 menjadi Rp2.639.000 per gram, sementara harga buyback ikut naik ke Rp2.492.000 per gram.",
  "date": "3 September 2026",
  "image": "assets/img/harga-emas-antam-naik-rp15-000-jadi-rp2-639-000-gram.jpg",
  "imageV": "mtl4cm78",
  "tags": [
   "emas",
   "harga emas",
   "antam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464569-harga-emas-antam-hari-ini-3-september-2026-naik-rp15000-ke-angka-rp2639000-per-gram"
 },
 {
  "slug": "abk-km-el-malika-ditemukan-selamat-usai-13-hari-hilang",
  "category": "Ketenagakerjaan",
  "title": "ABK KM El Malika [Ditemukan] Selamat Usai 13 Hari Hilang",
  "deck": "KKP mengawal kepulangan awak kapal perikanan yang ditemukan selamat di Palau usai 13 hari hilang kontak di laut, sekaligus mengimbau standar keselamatan kapal ikan.",
  "date": "3 September 2026",
  "image": "assets/img/abk-km-el-malika-ditemukan-selamat-usai-13-hari-hilang.jpg",
  "imageV": "mtkuhnoc",
  "tags": [
   "ABK",
   "KKP",
   "keselamatan laut",
   "perikanan tangkap"
  ],
  "kreditFoto": "Kementerian Kelautan dan Perikanan",
  "sourceUrl": "https://kkp.go.id/news/news-detail/kkp-kawal-pemulangan-awak-km-el-malika-usai-13-hari-hilang-kontak-di-laut-z7Oy.html",
  "sourceLabel": "Kementerian Kelautan dan Perikanan"
 },
 {
  "slug": "dpr-apresiasi-klaim-swasembada-8-komoditas-pangan",
  "category": "Makroekonomi",
  "title": "DPR Apresiasi Klaim [Swasembada] 8 Komoditas Pangan",
  "deck": "Komisi IV DPR memberi apresiasi kepada Kementerian Pertanian atas klaim swasembada delapan komoditas pangan, mengacu pada neraca produksi 2026 yang diklaim melampaui kebutuhan nasional.",
  "date": "3 September 2026",
  "image": "assets/img/dpr-apresiasi-klaim-swasembada-8-komoditas-pangan.jpg",
  "imageV": "mtkuhv66",
  "tags": [
   "Kementerian Pertanian",
   "Swasembada Pangan",
   "DPR",
   "Neraca Pangan"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8112",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "dpr-setujui-anggaran-kementan-rp28-02-triliun-untuk-2027",
  "category": "Makroekonomi",
  "title": "DPR Setujui Anggaran Kementan [Rp28,02 Triliun] untuk 2027",
  "deck": "Komisi IV DPR menyetujui anggaran Kementan Rp28,02 triliun untuk 2027, dengan porsi terbesar bagi penguatan padi, hortikultura, dan bawang putih.",
  "date": "3 September 2026",
  "image": "assets/img/dpr-setujui-anggaran-kementan-rp28-02-triliun-untuk-2027.jpg",
  "imageV": "mtkuhz82",
  "tags": [
   "Kementan",
   "Anggaran 2027",
   "Swasembada Pangan",
   "Bawang Putih"
  ],
  "kreditFoto": "Kementerian Pertanian",
  "sourceUrl": "https://www.pertanian.go.id/?show=news&act=view&id=8113",
  "sourceLabel": "Kementerian Pertanian"
 },
 {
  "slug": "kemnaker-siapkan-kompetensi-pekerja-untuk-green-jobs",
  "category": "Ketenagakerjaan",
  "title": "Kemnaker Siapkan Kompetensi Pekerja untuk [Green Jobs]",
  "deck": "Kemnaker menyiapkan pelatihan, kurikulum, dan sertifikasi tenaga kerja menyambut proyeksi 5,3-9 juta lapangan kerja hijau dalam 5-10 tahun ke depan.",
  "date": "3 September 2026",
  "image": "assets/img/bursa-kerja.jpg",
  "tags": [
   "green jobs",
   "Kemnaker",
   "ketenagakerjaan",
   "transisi energi"
  ],
  "sourceUrl": "https://kemnaker.go.id/news/detail/kemnaker-siapkan-kompetensi-tenaga-kerja-hadapi-peluang-green-jobs",
  "sourceLabel": "Kementerian Ketenagakerjaan"
 },
 {
  "slug": "jabar-selidiki-sebab-dbh-pajak-tertinggal-dari-jakarta",
  "category": "Makroekonomi",
  "title": "Jabar Selidiki Sebab DBH Pajak Tertinggal dari [Jakarta]",
  "deck": "Pemprov Jawa Barat dan BRIN mengkaji penyebab dana bagi hasil pajak provinsi ini jauh di bawah DKI Jakarta, sembari menelusuri aturan baru pembagian DBH PPh yang berlaku tahun ini.",
  "date": "3 September 2026",
  "image": "assets/img/sidang-dpr.jpg",
  "tags": [
   "DBH",
   "Pajak Daerah",
   "Jawa Barat",
   "DJP"
  ],
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/optimalkan-dbh-pemerintah-provinsi-jawa-barat-dan-brin-dalami-potensi-penerimaan-pajak",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "djp-perjelas-pajak-untuk-restrukturisasi-bumn-rp806-triliun",
  "category": "BUMN",
  "title": "DJP Perjelas Pajak untuk [Restrukturisasi] BUMN Rp806 Triliun",
  "deck": "DJP Wajib Pajak Besar menjelaskan fasilitas pajak baru bagi restrukturisasi BUMN kepada 55 pimpinan perusahaan, di tengah target penerimaan Rp806 triliun tahun ini.",
  "date": "3 September 2026",
  "image": "assets/img/truk-logistik-gudang.jpg",
  "tags": [
   "DJP",
   "BUMN",
   "Pajak",
   "Restrukturisasi"
  ],
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/kawal-restrukturisasi-bumn-kanwil-djp-wajib-pajak-besar-berusaha-realisasikan-target",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "pemerintah-targetkan-42-6-gw-pembangkit-ebt-dalam-ruptl-2034",
  "category": "Energi",
  "title": "Pemerintah Targetkan [42,6] GW Pembangkit EBT dalam RUPTL 2034",
  "deck": "Pemerintah menargetkan 42,6 gigawatt pembangkit energi terbarukan dalam RUPTL 2025-2034, sekaligus mendorong integrasi rantai pasok energi bersih dalam negeri.",
  "date": "3 September 2026",
  "image": "assets/img/pemerintah-targetkan-42-6-gw-pembangkit-ebt-dalam-ruptl-2034.jpg",
  "imageV": "mtkqcawr",
  "tags": [
   "EBTKE",
   "RUPTL",
   "energi terbarukan",
   "ESDM"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/buka-indoebtke-conex-2026-pemerintah-perkuat-ekosistem-energi-bersih-untuk-kemandirian-energi-nasional",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "kemendag-bentuk-trade-corpu-untuk-latih-asn-perdagangan",
  "category": "Ketenagakerjaan",
  "title": "Kemendag Bentuk [Trade CorpU] untuk Latih ASN Perdagangan",
  "deck": "Kemendag meluncurkan cetak biru SDM 2026-2045 dan lembaga pelatihan internal Trade CorpU berbasis Permendag No 4/2026, untuk membekali ASN perdagangan menghadapi tantangan global.",
  "date": "3 September 2026",
  "image": "assets/img/kemendag-bentuk-trade-corpu-untuk-latih-asn-perdagangan.jpg",
  "imageV": "mtkqckgr",
  "tags": [
   "Kemendag",
   "Trade CorpU",
   "ASN",
   "SDM Perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/cetak-biru-pengembangan-sdm-perdagangan-dan-trade-corpu-perkuat-sdm-perdagangan-untuk-jawab-tantangan-global",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "surplus-dagang-ri-juli-menipis-ke-us-0-12-miliar",
  "category": "Makroekonomi",
  "title": "Surplus Dagang RI Juli [Menipis] ke US$0,12 Miliar",
  "deck": "Neraca dagang Juli 2026 surplus tipis US$0,12 miliar setelah defisit migas melebar hampir menghabiskan surplus nonmigas yang masih tumbuh.",
  "date": "3 September 2026",
  "image": "assets/img/pelabuhan-kontainer.jpg",
  "tags": [
   "neraca dagang",
   "ekspor impor",
   "Kemendag",
   "migas"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/ketahanan-ekspor-nonmigas-indonesia-topang-surplus-neraca-perdagangan-juli-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "destry-damayanti-dilantik-jadi-gubernur-bank-indonesia",
  "category": "Moneter",
  "title": "Destry Damayanti Dilantik Jadi [Gubernur] Bank Indonesia",
  "deck": "Destry Damayanti resmi dilantik sebagai Gubernur Bank Indonesia bersama Aida S. Budiman dan Solikin M. Juhro untuk masa jabatan lima tahun.",
  "date": "3 September 2026",
  "image": "assets/img/destry-damayanti-dilantik-jadi-gubernur-bank-indonesia.jpg",
  "imageV": "mtkqcm6p",
  "tags": [
   "Bank Indonesia",
   "Dewan Gubernur",
   "Destry Damayanti",
   "Moneter"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817826.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "palm-obligasi-rp50-miliar-jatuh-tempo-delisting-dari-bei",
  "category": "Aksi Korporasi",
  "title": "PALM: Obligasi Rp50 Miliar [Jatuh Tempo], Delisting dari BEI",
  "deck": "Obligasi Berkelanjutan II Tahap V Seri A milik PT Provident Investasi Bersama Tbk senilai Rp50 miliar jatuh tempo dan didelisting dari Bursa Efek Indonesia mulai 3 September 2026.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PALM",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/56a56774eb_84d8874eff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "buka-bantah-punya-info-material-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "BUKA Bantah Punya Info Material Soal [Volatilitas] Transaksi Saham",
  "deck": "Bukalapak menjawab permintaan penjelasan Bursa Efek Indonesia atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BUKA",
   "Bukalapak",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6ba2f951f8_b54bca53a0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "destry-damayanti-resmi-pimpin-bi-usung-prinsip-3i-s",
  "category": "Moneter",
  "title": "Destry Damayanti [Resmi] Pimpin BI, Usung Prinsip 3I+S",
  "deck": "Destry Damayanti resmi dilantik sebagai Gubernur BI periode 2026-2031, bersama Aida S. Budiman dan Solikin M. Juhro. Ia perkenalkan prinsip 3I+S sebagai arah kebijakan bank sentral.",
  "date": "2 September 2026",
  "image": "assets/img/destry-damayanti-resmi-pimpin-bi-usung-prinsip-3i-s.jpg",
  "imageV": "mtkiriyf",
  "tags": [
   "Destry Damayanti",
   "Bank Indonesia",
   "Gubernur BI",
   "3I+S"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464475-destry-damayanti-resmi-pimpin-bi-ungkap-jurus-3is-hadapi-tantangan-ekonomi-global"
 },
 {
  "slug": "kek-industropolis-batang-kembangkan-wisata-di-tepi-laut-jawa",
  "category": "Industri",
  "title": "KEK Industropolis Batang Kembangkan [Wisata] di Tepi Laut Jawa",
  "deck": "Amphitheater KEK Industropolis Batang berpemandangan Laut Jawa menarik lebih dari 10 ribu pengunjung dalam pergelaran tari gratis, menandai upaya kawasan industri merambah sektor pariwisata.",
  "date": "2 September 2026",
  "image": "assets/img/kek-industropolis-batang-kembangkan-wisata-di-tepi-laut-jawa.jpg",
  "imageV": "mtkirjmm",
  "tags": [
   "KEK Industropolis Batang",
   "Laut Jawa",
   "kawasan industri",
   "pariwisata"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464501-kek-industropolis-batang-padukan-kawasan-industri-dan-pesona-laut-jawa-jadi-potensi-wisata-10-ribu-orang-tumpah"
 },
 {
  "slug": "arto-jawab-bei-sebut-jadwal-mesop-muncul-november",
  "category": "Aksi Korporasi",
  "title": "ARTO Jawab BEI, Sebut Jadwal [MESOP] Muncul November",
  "deck": "Bank Jago menjelaskan volatilitas transaksi sahamnya ke BEI dan menyebut jadwal pelaksanaan dua program opsi saham karyawan akan diumumkan November-Desember 2026.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ARTO",
   "Bank Jago",
   "MESOP",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6d7913e65f_ac12fbae72.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srsn-jawab-bursa-tak-ada-info-material-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "SRSN Jawab Bursa: Tak Ada Info Material soal [Volatilitas] Saham",
  "deck": "Indo Acidatama menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya dan menyatakan tidak ada informasi material yang melatarbelakanginya.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRSN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/880149e214_987c51cdf3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tlkm-catat-laba-bersih-rp10-6-triliun-di-semester-i-2026-naik-1-4",
  "category": "Aksi Korporasi",
  "title": "TLKM Catat Laba Bersih Rp10,6 Triliun di Semester I 2026, [Naik] 1,4%",
  "deck": "Materi Public Expose Tahunan Telkom memuat kinerja keuangan 1H26, ekspansi spektrum ke 265 MHz, dan progres monetisasi aset InfraNexia senilai Rp35,8 triliun.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TLKM",
   "Telkom Indonesia",
   "kinerja keuangan",
   "InfraNexia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9fff6e0435_cb545ee9bf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adcp-menang-pengadilan-tolak-pkpu-dari-burda-contraco",
  "category": "Aksi Korporasi",
  "title": "ADCP [menang]: pengadilan tolak PKPU dari Burda Contraco",
  "deck": "Pengadilan Niaga Jakarta Pusat menolak permohonan PKPU terhadap ADCP yang diajukan kontraktor PT Burda Contraco terkait utang proyek Adhi City Sentul.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADCP",
   "PKPU",
   "Adhi City Sentul",
   "pengadilan niaga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/85fd1c7c6c_4d55de3548.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-desak-bps-perbaiki-data-desil-sesuai-kondisi-warga",
  "category": "Makroekonomi",
  "title": "DPR Desak BPS [Perbaiki] Data Desil Sesuai Kondisi Warga",
  "deck": "Komisi X DPR memberi BPS tenggat dua minggu untuk memutakhirkan data desil yang salah, karena kekeliruan itu membuat sejumlah warga gagal menerima bansos dan beasiswa KIP Kuliah.",
  "date": "2 September 2026",
  "image": "assets/img/dpr-desak-bps-perbaiki-data-desil-sesuai-kondisi-warga.jpg",
  "imageV": "mtkirkg8",
  "tags": [
   "desil",
   "bps",
   "bansos",
   "kip kuliah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464464-banyak-warga-protes-tak-sesuai-desil-dpr-desak-bps-perbaiki-data-dan-beri-penjelasan-ke-publik"
 },
 {
  "slug": "untr-balik-jadi-utang-bersih-rp9-4-triliun-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "UNTR Balik Jadi Utang Bersih Rp9,4 Triliun di [Public Expose]",
  "deck": "Materi Public Expose UNTR menunjukkan laba bersih semester I 2026 anjlok 88% jadi Rp956 miliar, sementara posisi keuangan berbalik dari kas bersih menjadi utang bersih Rp9,4 triliun.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "United Tractors",
   "Public Expose",
   "utang bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/66228b7e74_2ae6bdd349.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sger-jawab-permintaan-bursa-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "SGER Jawab Permintaan Bursa soal [Volatilitas] Transaksi Saham",
  "deck": "SGER menjawab surat Bursa Efek Indonesia soal lonjakan volatilitas transaksi sahamnya, menyatakan tidak mengetahui informasi material maupun rencana korporasi yang mendasarinya.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SGER",
   "volatilitas transaksi",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6cf2599619_2f3b743392.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "eraa-rampungkan-buyback-rp99-86-miliar-treasuri-601-6-juta-saham",
  "category": "Aksi Korporasi",
  "title": "ERAA Rampungkan [Buyback] Rp99,86 Miliar, Treasuri 601,6 Juta Saham",
  "deck": "Erajaya Swasembada merampungkan pembelian kembali 236,27 juta saham senilai Rp99,86 miliar per 2 September 2026, hampir menghabiskan anggaran buyback Rp100 miliar.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ERAA",
   "buyback saham",
   "Erajaya Swasembada",
   "saham treasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a918bbd1dc_bbfbe20696.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-bei-ditunda-ojk-baru-bahas-4-september",
  "category": "Pasar Modal",
  "title": "RUPSLB BEI [Ditunda], OJK Baru Bahas 4 September",
  "deck": "RUPSLB BEI yang sedianya digelar 15 September 2026 ditunda tanpa jadwal baru, menunggu terbitnya aturan OJK soal demutualisasi bursa.",
  "date": "2 September 2026",
  "image": "assets/img/rupslb-bei-ditunda-ojk-baru-bahas-4-september.jpg",
  "imageV": "mtkirl3j",
  "tags": [
   "BEI",
   "OJK",
   "RUPSLB",
   "demutualisasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464452-rupslb-bei-mendadak-ditunda-ojk-baru-bahas-kendalanya-pada-4-september"
 },
 {
  "slug": "mglv-jadwalkan-rups-7-september-bahas-akuisisi-nextier",
  "category": "Aksi Korporasi",
  "title": "MGLV Jadwalkan RUPS 7 September, Bahas [Akuisisi] Nextier",
  "deck": "MGLV mengubah jadwal RUPSLB dan RUPS Independen ke 7 September 2026, dengan agenda rights issue, penjualan anak usaha, dan akuisisi dari pemegang saham utama Nextier.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "RUPS Independen",
   "akuisisi Nextier",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eff2c0ac24_60a9c62c5c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bp-batam-siapkan-anggaran-rp2-4-triliun-tanpa-apbn-2027",
  "category": "Makroekonomi",
  "title": "BP Batam Siapkan Anggaran Rp2,4 Triliun Tanpa [APBN] 2027",
  "deck": "BP Batam menyiapkan anggaran sekitar Rp2,4 triliun untuk pembangunan 2027 tanpa tambahan APBN, mengandalkan optimalisasi PNBP agar anggaran negara bisa dialihkan ke daerah lain.",
  "date": "2 September 2026",
  "image": "assets/img/bp-batam-siapkan-anggaran-rp2-4-triliun-tanpa-apbn-2027.jpg",
  "imageV": "mtkirlow",
  "tags": [
   "BP Batam",
   "APBN",
   "PNBP",
   "Anggaran 2027"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464439-tak-mau-bergantung-apbn-bp-batam-siapkan-anggaran-rp24-triliun-untuk-pembangunan-2027"
 },
 {
  "slug": "bbhi-siapkan-buyback-saham-rp300-miliar-hingga-desember",
  "category": "Aksi Korporasi",
  "title": "BBHI Siapkan Buyback Saham [Rp300 Miliar] hingga Desember",
  "deck": "Allo Bank Indonesia (BBHI) akan membeli kembali sahamnya sendiri senilai maksimal Rp300 miliar pada 3 September-2 Desember 2026 untuk menstabilkan harga di tengah pasar yang bergejolak.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBHI",
   "buyback saham",
   "Allo Bank Indonesia",
   "saham treasuri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9d00973675_7fdad62f35.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dyan-ungkap-pembelian-saham-oleh-pemegang-saham-mondial",
  "category": "Aksi Korporasi",
  "title": "DYAN Ungkap Pembelian Saham oleh Pemegang Saham [Mondial]",
  "deck": "DYAN menjelaskan ke BEI bahwa lonjakan transaksi sahamnya terkait pembelian oleh pemegang saham di atas 5%, PT Mondial Investama Indonesia, pada 31 Agustus 2026.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DYAN",
   "Dyandra Media International",
   "pemegang saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4841727199_5755314fef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "saham-pzza-melonjak-11-48-persen-manajemen-beri-penjelasan",
  "category": "Aksi Korporasi",
  "title": "Saham PZZA Melonjak 11,48 Persen, Manajemen Beri [Penjelasan]",
  "deck": "Sarimelati Kencana (PZZA) menjelaskan ke Bursa Efek Indonesia bahwa lonjakan harga sahamnya 11,48 persen pada 31 Agustus 2026 tidak dipicu informasi material yang belum diungkap ke publik.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PZZA",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "Sarimelati Kencana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/232a481934_29e93c924b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ruu-kadin-dibahas-dpr-anindya-bakrie-dorong-penguatan-umkm",
  "category": "UMKM",
  "title": "RUU Kadin Dibahas DPR, Anindya Bakrie Dorong Penguatan [UMKM]",
  "deck": "Kadin Indonesia mengusulkan penguatan UMKM dan koperasi daerah dalam pembahasan revisi UU Kadin 1987 bersama Komisi VI DPR.",
  "date": "2 September 2026",
  "image": "assets/img/ruu-kadin-dibahas-dpr-anindya-bakrie-dorong-penguatan-umkm.jpg",
  "imageV": "mtkirm82",
  "tags": [
   "RUU Kadin",
   "UMKM",
   "Kadin Indonesia",
   "DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464427-ruu-kadin-dibahas-dpr-anindya-bakrie-dorong-penguatan-umkm-di-daerah-agar-naik-kelas"
 },
 {
  "slug": "elsa-cetak-laba-bersih-rp435-miliar-di-semester-i-2026-naik-29-2",
  "category": "Aksi Korporasi",
  "title": "ELSA Cetak [Laba] Bersih Rp435 Miliar di Semester I 2026, Naik 29,2%",
  "deck": "Elnusa menyampaikan materi public expose tahunan ke BEI, memuat kinerja keuangan semester I 2026 yang tumbuh di hampir semua pos utama.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELSA",
   "Elnusa",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/32afa8e1bd_6fa49412cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "zp-bank-maybank-indonesia-kuasai-41-32-saham-maybank-sekuritas",
  "category": "Aksi Korporasi",
  "title": "ZP: Bank Maybank Indonesia Kuasai [41,32%] Saham Maybank Sekuritas",
  "deck": "PT Maybank Sekuritas Indonesia (ZP) rampungkan pengambilalihan saham dengan suntikan modal Rp219,66 miliar, menjadikan PT Bank Maybank Indonesia Tbk pemegang saham berporsi 41,32%.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "Maybank Sekuritas Indonesia",
   "waran terstruktur",
   "akuisisi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ed2786b837_b086e606d4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptba-paparkan-progres-proyek-rel-tanjung-enim-keramasan-93",
  "category": "Aksi Korporasi",
  "title": "PTBA Paparkan Progres Proyek [Rel] Tanjung Enim-Keramasan 93%",
  "deck": "Materi public expose tahunan PTBA memuat progres proyek rel Tanjung Enim-Keramasan 93,45%, ekspansi pelabuhan, dan proyek hilirisasi batu bara.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTBA",
   "Bukit Asam",
   "Public Expose",
   "hilirisasi batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f4d14ec5d1_27e91adf70.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgjo-dan-mdia-keluar-dari-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "PGJO dan MDIA [Keluar] dari Pemantauan Khusus BEI",
  "deck": "Bursa mencabut status pemantauan khusus dua emiten, PGJO dan MDIA, efektif 3 September 2026, seiring perubahan papan pencatatan keduanya.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "MDIA",
   "BEI",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/246d167468_ba5e6d70e7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "alka-agar-tama-masuk-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "ALKA, AGAR, TAMA Masuk [Pemantauan Khusus] BEI",
  "deck": "BEI memasukkan tiga saham, ALKA, AGAR, dan TAMA, ke papan pemantauan khusus mulai 3 September 2026 akibat suspensi perdagangan panjang dan ekuitas negatif.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ALKA",
   "AGAR",
   "TAMA",
   "pemantauan khusus BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ec618acb50_49acaa3a53.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "freeport-salurkan-bantuan-rp2-5-m-untuk-gempa-ntt",
  "category": "Bisnis",
  "title": "Freeport Salurkan Bantuan [Rp2,5 M] untuk Gempa NTT",
  "deck": "PTFI menyerahkan bantuan kemanusiaan Rp2,5 miliar bagi korban gempa M7,7 di NTT, mencakup 700 paket kebutuhan dasar, lima hunian sementara, dan empat sekolah darurat.",
  "date": "2 September 2026",
  "image": "assets/img/freeport-salurkan-bantuan-rp2-5-m-untuk-gempa-ntt.jpg",
  "imageV": "mtkirmos",
  "tags": [
   "Freeport",
   "PTFI",
   "Gempa NTT",
   "Bantuan Kemanusiaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464417-freeport-salurkan-bantuan-kemanusiaan-rp25-miliar-untuk-masyarakat-terdampak-gempa-ntt"
 },
 {
  "slug": "bipp-tanggapi-bursa-investor-pmthmetd-masih-dirahasiakan",
  "category": "Aksi Korporasi",
  "title": "BIPP tanggapi bursa: investor PMTHMETD masih [dirahasiakan]",
  "deck": "BIPP menjawab permintaan penjelasan BEI soal penambahan modal tanpa HMETD, namun investor dan rasio free float pasca aksi ini belum dipastikan.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "PMTHMETD",
   "free float",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f0b9b0b162_18b020a5b2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-butuh-rp125-5-t-bangun-4-582-kapal-ikan-modern",
  "category": "Industri",
  "title": "RI Butuh Rp125,5 T Bangun 4.582 [Kapal] Ikan Modern",
  "deck": "Pemerintah menyiapkan investasi Rp125,5 triliun untuk 4.582 kapal ikan modern hingga 2029, menargetkan penyerapan hingga 89.000 tenaga kerja.",
  "date": "2 September 2026",
  "image": "assets/img/ri-butuh-rp125-5-t-bangun-4-582-kapal-ikan-modern.jpg",
  "imageV": "mtkirn61",
  "tags": [
   "kapal ikan",
   "investasi",
   "KKP",
   "galangan kapal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464398-butuh-rp1255-triliun-pemerintah-mau-bangun-4582-kapal-ikan-modern-yang-bisa-serap-89000-tenaga-kerja"
 },
 {
  "slug": "bbri-bukukan-laba-bersih-rp31-2-triliun-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "BBRI Bukukan Laba Bersih [Rp31,2 Triliun] Semester I 2026",
  "deck": "Laba bersih BRI naik 17,5 persen menjadi Rp31,2 triliun pada semester I 2026, ditopang pertumbuhan kredit 16,2 persen dan perbaikan kualitas aset.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBRI",
   "laba bersih",
   "kinerja keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f4dc8a5fa4_4ca2e7d091.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irsx-panggil-rupslb-ajukan-right-issue-12-39-miliar-saham-baru",
  "category": "Aksi Korporasi",
  "title": "IRSX Panggil RUPSLB, Ajukan [Right Issue] 12,39 Miliar Saham Baru",
  "deck": "IRSX memanggil RUPSLB pada 24 September 2026 untuk menyetujui perubahan direksi/komisaris serta menegaskan rencana rights issue hingga 12,39 miliar saham baru dan 1,86 miliar Waran Seri II.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IRSX",
   "RUPSLB",
   "rights issue",
   "PMHMETD I"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2e29bfe5a9_63559e1629.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "btps-catat-laba-rp655-miliar-pembiayaan-tumbuh-9-semester-i",
  "category": "Aksi Korporasi",
  "title": "BTPS Catat Laba Rp655 Miliar, [Pembiayaan] Tumbuh 9% Semester I",
  "deck": "BTPS memaparkan kinerja semester I 2026: laba bersih naik tipis 2% menjadi Rp655 miliar, sementara rasio biaya terhadap pendapatan naik ke 52%.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BTPS",
   "perbankan syariah",
   "public expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7b402d86f1_48aed63580.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mora-jelaskan-lonjakan-saham-8-6-kali-usai-kredit-bca",
  "category": "Aksi Korporasi",
  "title": "MORA Jelaskan Lonjakan Saham 8,6 Kali usai [Kredit BCA]",
  "deck": "MORA menjelaskan ke BEI bahwa lonjakan transaksi sahamnya pada 28 Agustus 2026 murni mekanisme pasar, bersamaan dengan penandatanganan perjanjian kredit baru dengan BCA.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MORA",
   "volatilitas saham",
   "BEI",
   "kredit BCA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/bd704abe1b_3e8b1311ac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ssia-catat-lonjakan-ebitda-semester-i-2026-ke-rp693-miliar",
  "category": "Aksi Korporasi",
  "title": "SSIA Catat Lonjakan [EBITDA] Semester I 2026 ke Rp693 Miliar",
  "deck": "Materi public expose SSIA menunjukkan EBITDA semester I 2026 melompat ke Rp693 miliar berkat penjualan lahan Subang Smartpolitan, disertai dividen dan persetujuan MESOP.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SSIA",
   "Surya Semesta Internusa",
   "EBITDA",
   "Subang Smartpolitan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4316048000_5aa954f5d1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-750-per-dolar-as-imbas-konflik-as-iran",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.750 per Dolar AS Imbas Konflik AS-Iran",
  "deck": "Rupiah ditutup melemah 0,31% ke Rp17.750 per dolar AS pada Rabu (2/9/2026), tertekan gejolak global akibat memanasnya konflik AS-Iran.",
  "date": "2 September 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-750-per-dolar-as-imbas-konflik-as-iran.jpg",
  "imageV": "mtkirnl6",
  "tags": [
   "rupiah",
   "kurs rupiah",
   "dolar AS",
   "DXY"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464399-rupiah-makin-tertekan-ditutup-rp17750-per-dolar-as-di-tengah-gejolak-global"
 },
 {
  "slug": "kawasan-garam-rote-ndao-digarap-panen-perdana-november-2026",
  "category": "Industri",
  "title": "Kawasan Garam Rote Ndao Digarap, Panen Perdana [November] 2026",
  "deck": "Pemerintah mengembangkan Kawasan Sentra Industri Garam Nasional seluas 10.764 hektare di Rote Ndao, NTT, untuk mendukung swasembada garam dan pemerataan ekonomi daerah.",
  "date": "2 September 2026",
  "image": "assets/img/kawasan-garam-rote-ndao-digarap-panen-perdana-november-2026.jpg",
  "imageV": "mtkiro2r",
  "tags": [
   "Rote Ndao",
   "garam",
   "KSIGN",
   "NTT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464384-proyek-industri-garam-raksasa-di-rote-ndao-pemerintah-bidik-produksi-5-juta-ton-di-2029"
 },
 {
  "slug": "infranexia-lintasarta-perkuat-konektivitas-sumatra-batam",
  "category": "Teknologi",
  "title": "InfraNexia-Lintasarta [Perkuat] Konektivitas Sumatra-Batam",
  "deck": "InfraNexia dan Lintasarta sepakat memakai teknologi DWDM untuk memperkuat jaringan berkapasitas tinggi di rute Medan-Batam dan Padang-Batam.",
  "date": "2 September 2026",
  "image": "assets/img/infranexia-lintasarta-perkuat-konektivitas-sumatra-batam.jpg",
  "imageV": "mtkqcmp2",
  "tags": [
   "DWDM",
   "InfraNexia",
   "Lintasarta",
   "Telkom"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464368-gunakan-layanan-dwdm-kolaborasi-infranexia-dan-lintasarta-perkuat-konektivitas-medan-batam-dan-padang"
 },
 {
  "slug": "investasi-rp7-2-triliun-tambak-udang-di-sumba-timur-dikebut",
  "category": "Industri",
  "title": "Investasi Rp7,2 Triliun Tambak Udang di Sumba Timur [Dikebut]",
  "deck": "Pemerintah menggelontorkan Rp7,2 triliun untuk tambak udang terintegrasi seluas 2.150 hektare di Sumba Timur, NTT, guna mendorong ekonomi dan menekan kemiskinan.",
  "date": "2 September 2026",
  "image": "assets/img/investasi-rp7-2-triliun-tambak-udang-di-sumba-timur-dikebut.jpg",
  "imageV": "mtkqcn4s",
  "tags": [
   "tambak",
   "udang",
   "ntt",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464363-investasi-rp72-triliun-digelontorkan-bangun-tambak-udang-2150-hektare-di-sumba-timur"
 },
 {
  "slug": "hunian-hotel-bintang-juli-54-54-naik-4-bulan",
  "category": "Bisnis",
  "title": "Hunian Hotel Bintang Juli 54,54%, [Naik 4 Bulan]",
  "deck": "Tingkat keterisian kamar hotel bintang secara nasional terus naik sejak Maret 2026, kini mencapai 54,54 persen pada Juli.",
  "date": "2 September 2026",
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
  "slug": "esdm-klarifikasi-proyek-panas-bumi-dekat-gedong-songo",
  "category": "Energi",
  "title": "ESDM Klarifikasi Proyek Panas Bumi Dekat [Gedong Songo]",
  "deck": "Kementerian ESDM menyatakan pengembangan PLTP Gunung Ungaran di Jawa Tengah masih tahap eksplorasi, dengan target 55 MW pada 2031 dan perhatian khusus pada kawasan Candi Gedong Songo.",
  "date": "2 September 2026",
  "image": "assets/img/esdm-klarifikasi-proyek-panas-bumi-dekat-gedong-songo.jpg",
  "imageV": "mtjoljuu",
  "tags": [
   "panas bumi",
   "ESDM",
   "Gunung Ungaran",
   "Candi Gedong Songo"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/esdm-pengembangan-panas-bumi-gunung-ungaran-dilakukan-bertahap-dan-berbasis-kajian",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "mora-peroleh-tambahan-kredit-rp4-triliun-dari-bca",
  "category": "Aksi Korporasi",
  "title": "MORA Peroleh Tambahan Kredit [Rp4 Triliun] dari BCA",
  "deck": "MORA menambah fasilitas kredit investasi hingga Rp4 triliun dari BCA, setara 50,54 persen ekuitas, untuk membiayai perluasan jaringan homepass MyRepublic Indonesia.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MORA",
   "BCA",
   "MyRepublic Indonesia",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5df236df34_076591ea64.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibst-iforte-perpanjang-lagi-penawaran-tender-saham-ke-2-okt",
  "category": "Aksi Korporasi",
  "title": "IBST: Iforte Perpanjang Lagi Penawaran [Tender] Saham ke 2 Okt",
  "deck": "Iforte Solusi Infotek memperpanjang lagi masa penawaran tender saham IBST hingga 2 Oktober 2026 dengan harga tetap Rp5.400 per saham. Partisipasi pemegang saham publik sudah 73,77 persen.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IBST",
   "Iforte",
   "tender offer",
   "delisting"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6a2888db99_cebb4b8ff2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nato-bantah-info-material-jajaki-penerbitan-obligasi",
  "category": "Aksi Korporasi",
  "title": "NATO Bantah Info Material, Jajaki Penerbitan [Obligasi]",
  "deck": "NATO menyatakan tak ada informasi material tersembunyi soal volatilitas sahamnya, tapi mengaku tengah menjajaki penerbitan obligasi sebagai alternatif pendanaan yang belum final.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NATO",
   "volatilitas transaksi",
   "obligasi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/9c531231b9_950388f75a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "neraca-dagang-jabar-surplus-us-16-63-miliar-jan-jul-2026",
  "category": "Makroekonomi",
  "title": "Neraca Dagang Jabar [Surplus] US$16,63 Miliar Jan-Jul 2026",
  "deck": "Ekspor Jawa Barat naik 6,43 persen jadi US$23,58 miliar, impor turun 1,45 persen jadi US$6,95 miliar, sehingga surplus dagang Januari-Juli 2026 mencapai US$16,63 miliar.",
  "date": "2 September 2026",
  "image": "assets/img/neraca-dagang-jabar-surplus-us-16-63-miliar-jan-jul-2026.jpg",
  "imageV": "mtl4cmmw",
  "tags": [
   "neraca perdagangan",
   "Jawa Barat",
   "ekspor",
   "impor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464580-neraca-perdagangan-jabar-periode-januari-juli-2026-surplus-usd-1663-miliar"
 },
 {
  "slug": "towr-iforte-perpanjang-tender-saham-ibst-ke-2-oktober",
  "category": "Aksi Korporasi",
  "title": "TOWR: Iforte Perpanjang Tender Saham [IBST] ke 2 Oktober",
  "deck": "Anak usaha TOWR, Iforte Solusi Infotek, memperpanjang tender sukarela saham IBST sampai 2 Oktober 2026 dengan harga tetap Rp5.400 per saham. Partisipasi pemegang saham publik sudah 73,77 persen.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "IBST",
   "tender offer",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2a4fe9f9f5_fc901dce0d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tmpo-gelar-public-expose-insidentil-atas-permintaan-bursa",
  "category": "Aksi Korporasi",
  "title": "TMPO Gelar [Public Expose] Insidentil atas Permintaan Bursa",
  "deck": "Tempo Inti Media (TMPO) menggelar public expose insidentil pada 2 September 2026 atas permintaan Bursa Efek Indonesia, mengoreksi surat sebelumnya tertanggal 31 Agustus 2026.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Tempo Inti Media"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/c1776dc13f_e7251a6946.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-bukukan-laba-rp496-8-m-melonjak-118-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "WIFI Bukukan Laba Rp496,8 M, [Melonjak] 118% Semester I 2026",
  "deck": "Materi Public Expose WIFI paparkan pendapatan naik 206% dan laba 118% pada semester I 2026, dengan rasio utang bersih terhadap EBITDA rendah di 0,85 kali.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "public expose",
   "kinerja keuangan",
   "broadband"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f52ef74b23_08ae7f269c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "suspensi-saham-crab-dicabut-bei-setelah-penuhi-kewajiban",
  "category": "Aksi Korporasi",
  "title": "Suspensi Saham [CRAB] Dicabut BEI Setelah Penuhi Kewajiban",
  "deck": "BEI mencabut suspensi perdagangan saham Toba Surimi Industries (CRAB) mulai pra-pembukaan Rabu, 2 September 2026, setelah dua kewajiban pelaporan keuangan yang tertunda dipenuhi.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "suspensi saham",
   "BEI",
   "Toba Surimi Industries"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/914182f000_0bfd7bbc27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asjt-koreksi-laporan-realisasi-dana-right-issue-rp98-2-miliar",
  "category": "Aksi Korporasi",
  "title": "ASJT Koreksi Laporan [Realisasi] Dana Right Issue Rp98,2 Miliar",
  "deck": "Asuransi Jasa Tania mengoreksi laporan realisasi dana rights issue 2021 senilai Rp98,2 miliar. Realisasi mencapai 99,19 persen, sisa Rp797 juta ditempatkan di deposito.",
  "date": "2 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASJT",
   "rights issue",
   "asuransi",
   "realisasi dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/613bc8ceda_357f02d390.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-rp40-000-jadi-rp2-624-000",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Turun] Rp40.000 Jadi Rp2.624.000",
  "deck": "Harga emas Antam turun Rp40.000 per gram menjadi Rp2.624.000, sementara harga buyback ikut melemah ke Rp2.477.000 per gram.",
  "date": "2 September 2026",
  "image": "assets/img/harga-emas-antam-turun-rp40-000-jadi-rp2-624-000.jpg",
  "imageV": "mtjolkee",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464312-harga-emas-antam-hari-ini-2-september-2026-anjlok-rp40000-kini-jadi-rp2624000-per-gram"
 },
 {
  "slug": "harga-acuan-ekspor-kakao-melonjak-sawit-naik-tipis",
  "category": "Industri",
  "title": "Harga Acuan Ekspor Kakao [Melonjak], Sawit Naik Tipis",
  "deck": "Harga patokan ekspor biji kakao naik hampir 4 persen imbas gangguan pasokan di Afrika Barat, sementara harga referensi CPO naik tipis 1,1 persen untuk periode September 2026.",
  "date": "2 September 2026",
  "image": "assets/img/buruh-pabrik.jpg",
  "tags": [
   "CPO",
   "biji kakao",
   "bea keluar",
   "harga ekspor"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/september-2026-hr-cpo-naik-hpe-biji-kakao-dan-getah-pinus-naik-hpe-produk-kulit-tetap-serta-hpe-produk-kayu-bervariasi",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "gempa-ntt-bi-kirim-32-5-ton-bantuan-amankan-uang-tunai",
  "category": "Moneter",
  "title": "Gempa NTT: BI Kirim [32,5] Ton Bantuan, Amankan Uang Tunai",
  "deck": "Bank Indonesia mengirim 32,5 ton bantuan bagi korban gempa di NTT dalam tiga tahap, sekaligus menjaga pasokan uang tunai dan stabilitas harga pangan di wilayah terdampak.",
  "date": "2 September 2026",
  "image": "assets/img/gempa-ntt-bi-kirim-32-5-ton-bantuan-amankan-uang-tunai.jpg",
  "imageV": "mtj7dc1r",
  "tags": [
   "Bank Indonesia",
   "Gempa NTT",
   "Ekspedisi Rupiah Berdaulat",
   "Inflasi Daerah"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "inflasi-agustus-2026-3-19-masih-di-kisaran-target",
  "category": "Makroekonomi",
  "title": "Inflasi Agustus 2026 [3,19%], Masih di Kisaran Target",
  "deck": "Inflasi Agustus 2026 mencapai 3,19 persen secara tahunan, didorong lonjakan harga pangan seperti ayam dan cabai rawit, namun masih berada dalam kisaran sasaran Bank Indonesia.",
  "date": "2 September 2026",
  "image": "assets/img/inflasi-agustus-2026-3-19-masih-di-kisaran-target.jpg",
  "imageV": "mtj0lwh2",
  "tags": [
   "inflasi",
   "IHK",
   "Bank Indonesia",
   "pangan"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "neraca-dagang-ri-kembali-surplus-us-0-12-miliar-di-juli",
  "category": "Makroekonomi",
  "title": "Neraca Dagang RI Kembali [Surplus] US$0,12 Miliar di Juli",
  "deck": "Setelah defisit US$0,45 miliar pada Juni, neraca dagang Juli 2026 surplus tipis US$0,12 miliar, ditopang ekspor nonmigas dan penurunan defisit migas.",
  "date": "2 September 2026",
  "image": "assets/img/neraca-dagang-ri-kembali-surplus-us-0-12-miliar-di-juli.jpg",
  "imageV": "mtj0lz55",
  "tags": [
   "neraca dagang",
   "ekspor nonmigas",
   "BPS",
   "impor migas"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817726.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pertamax-green-95-naik-rp2-550-per-liter",
  "category": "Energi",
  "title": "Pertamax Green 95 [Naik] Rp2.550 per Liter",
  "deck": "Pertamina Patra Niaga menaikkan harga Pertamax Green 95 dari Rp16.600 menjadi Rp19.150 per liter mulai 2 September 2026, menyusul kenaikan BBM nonsubsidi lain sehari sebelumnya.",
  "date": "2 September 2026",
  "image": "assets/img/pertamax-green-95-naik-rp2-550-per-liter.jpg",
  "imageV": "mtj0lzmp",
  "tags": [
   "harga BBM",
   "Pertamina",
   "BBM nonsubsidi",
   "Pertamax Green 95"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464270-berlaku-2-september-2026-pertamina-patra-niaga-sesuaikan-harga-pertamax-green-95"
 },
 {
  "slug": "cash-akan-tambah-tiga-lini-usaha-baru-rupslb-8-oktober",
  "category": "Aksi Korporasi",
  "title": "CASH akan [tambah] tiga lini usaha baru, RUPSLB 8 Oktober",
  "deck": "Cashlez berencana menyesuaikan enam kode usaha dan menambah tiga bidang bisnis baru, sekaligus mengubah alokasi dana hasil IPO, lewat RUPSLB yang dijadwalkan 8 Oktober 2026.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "RUPSLB",
   "KBLI",
   "Cashlez"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ac4eb55f7f_3f22984fe1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vktr-jajaki-pendanaan-rp2-triliun-dari-danantara-non-binding",
  "category": "Aksi Korporasi",
  "title": "VKTR Jajaki Pendanaan Rp2 Triliun dari Danantara [Non-Binding]",
  "deck": "VKTR menandatangani indicative non-binding term sheet dengan Danantara Investment Management dan Bakrie & Brothers untuk pendanaan hingga Rp2 triliun.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VKTR",
   "Danantara Investment Management",
   "Bakrie & Brothers",
   "pendanaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/538ddc143e_5b1574b315.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbre-rights-issue-dilusi-bisa-capai-72-22-persen",
  "category": "Aksi Korporasi",
  "title": "CBRE Rights Issue: [Dilusi] Bisa Capai 72,22 Persen",
  "deck": "CBRE menawarkan rights issue hingga Rp1,27 triliun dengan dilusi maksimal 72,22 persen. Pemegang saham utama OIH melepas seluruh haknya, dibayar lewat konversi utang oleh empat investor baru.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CBRE",
   "rights issue",
   "HMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/99fb68166b_957a60ce24.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgas-jelaskan-ke-bursa-isi-putusan-parsial-arbitrase-gunvor",
  "category": "Aksi Korporasi",
  "title": "PGAS Jelaskan ke Bursa Isi Putusan [Parsial] Arbitrase Gunvor",
  "deck": "PGN merinci ke Bursa Efek Indonesia isi putusan arbitrase London yang menyatakan penolakan force majeure dan mewajibkan kompensasi ke Gunvor, namun nilainya belum diungkap.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGAS",
   "arbitrase",
   "Gunvor",
   "LNG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eb3955ead1_ea2641e3d8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "chek-jawab-bursa-utang-bank-baru-rp28-m-pendapatan-30",
  "category": "Aksi Korporasi",
  "title": "CHEK Jawab Bursa: [Utang Bank] Baru Rp28 M, Pendapatan +30%",
  "deck": "CHEK menjawab permintaan penjelasan Bursa soal proyeksi keuangan dan laporan keuangan 2025-2026, mencakup kenaikan utang bank, beban usaha, dan persediaan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CHEK",
   "Diastika Biotekindo",
   "keterbukaan informasi",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7a37306994_50f66f7bef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-batalkan-rupsu-sukuk-tahap-ii-jadwal-17-september",
  "category": "Aksi Korporasi",
  "title": "WIKA [Batalkan] RUPSU Sukuk Tahap II, Jadwal 17 September",
  "deck": "WIKA membatalkan rapat pemegang Sukuk Tahap II yang dijadwalkan 17 September 2026, tanpa menjelaskan alasan, di tengah rentetan permintaan penundaan pembayaran sukuk emiten ini.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/1744138978_31bbc714a9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-batalkan-rupsu-sukuk-tahap-i-belum-ada-jadwal-baru",
  "category": "Aksi Korporasi",
  "title": "WIKA Batalkan RUPSU Sukuk Tahap I, [Belum] Ada Jadwal Baru",
  "deck": "WIKA dan wali amanat PT Bank Mega membatalkan RUPSU Sukuk Tahap I yang semula dijadwalkan 15 September 2026, tanpa menyebut tanggal pengganti maupun alasan pembatalan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/b4bf18cb60_eecfe78764.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-realisasikan-86-dana-rights-issue-untuk-proyek-tol",
  "category": "Aksi Korporasi",
  "title": "ADHI Realisasikan 86% Dana Rights Issue untuk [Proyek Tol]",
  "deck": "Realisasi penggunaan dana rights issue 2022 ADHI capai Rp2,27 triliun per Juni 2026, sisa Rp378,69 miliar ditargetkan tuntas Desember 2026.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADHI",
   "rights issue",
   "penggunaan dana",
   "jalan tol"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/76b4f6b432_18d848b8e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnma-tanggapi-bei-kas-turun-rp421-5-m-piutang-macet-melonjak",
  "category": "Aksi Korporasi",
  "title": "CNMA Tanggapi BEI, Kas Turun Rp421,5 M, [Piutang] Macet Melonjak",
  "deck": "PT Nusantara Sejahtera Raya Tbk (CNMA) merinci ke BEI penyebab turunnya kas Rp421,5 miliar dan melonjaknya piutang lewat jatuh tempo pada semester I 2026.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CNMA",
   "bursa efek indonesia",
   "laporan keuangan",
   "piutang usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6f750dcecf_adf5e765e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgjo-bukukan-laba-rp4-69-miliar-aset-melonjak-394",
  "category": "Aksi Korporasi",
  "title": "PGJO Bukukan Laba Rp4,69 Miliar, Aset Melonjak [394%]",
  "deck": "PGJO, dulu Tourindo Guide Indonesia, cetak laba Rp4,69 miliar semester I 2026 usai beralih ke bisnis pelayaran dan tambang, tapi utang ke pihak berelasi melonjak jadi Rp88,11 miliar.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "laporan keuangan interim",
   "utang pihak berelasi",
   "pelayaran dan tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260901202434-64149-0/FinancialStatement-2026-II-PGJO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pembatasan-pertalite-desil-9-10-tunggu-validasi-data",
  "category": "Energi",
  "title": "Pembatasan Pertalite Desil 9-10 [Tunggu] Validasi Data",
  "deck": "Menteri ESDM Bahlil Lahadalia menyebut rencana pembatasan Pertalite bagi kelompok desil 9-10 masih menunggu validasi data agar subsidi BBM tepat sasaran.",
  "date": "1 September 2026",
  "image": "assets/img/pembatasan-pertalite-desil-9-10-tunggu-validasi-data.jpg",
  "imageV": "mtir851w",
  "tags": [
   "bbm",
   "pertalite",
   "desil",
   "bahlil lahadalia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464219-wacana-pembatasan-bbm-pertalite-untuk-warga-desil-9-10-bahlil-ungkap-tunggu-validasi-data"
 },
 {
  "slug": "isat-lunasi-obligasi-dan-sukuk-rp255-miliar-2-september",
  "category": "Aksi Korporasi",
  "title": "ISAT [Lunasi] Obligasi dan Sukuk Rp255 Miliar 2 September",
  "deck": "Indosat menyiapkan dana Rp255 miliar untuk melunasi obligasi Seri E dan sukuk ijarah Seri D yang jatuh tempo 2 September 2026, setelah itu kedua efek ini berhenti diperdagangkan di bursa.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISAT",
   "obligasi korporasi",
   "sukuk ijarah",
   "jatuh tempo obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/eece3316fa_f8398ba3d0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bino-lewati-tenggat-free-float-pengendali-minta-perpanjangan-ojk",
  "category": "Aksi Korporasi",
  "title": "BINO Lewati Tenggat [Free Float], Pengendali Minta Perpanjangan OJK",
  "deck": "Pengendali PT Perma Plasindo Tbk belum memenuhi kewajiban pelepasan 5,68% saham ke publik yang jatuh tempo 31 Agustus 2026 dan akan meminta perpanjangan waktu ke OJK.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINO",
   "free float",
   "OJK",
   "pengendali saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4c2ba9a2c6_71e2eaf74c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mbma-catatkan-obligasi-rp2-34-triliun-di-bei-bunga-9-10-5",
  "category": "Aksi Korporasi",
  "title": "MBMA Catatkan [Obligasi] Rp2,34 Triliun di BEI, Bunga 9-10,5%",
  "deck": "Merdeka Battery Materials mencatatkan Obligasi Berkelanjutan I Tahap V senilai Rp2,34 triliun di BEI mulai 2 September 2026, terbagi tiga seri dengan bunga 9-10,5 persen dan tenor hingga lima tahun.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MBMA",
   "obligasi korporasi",
   "pasar modal",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/11fa7c8504_8371b18b3a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mglv-tunda-rups-akuisisi-nextier-ojk-minta-penjelasan-tambahan",
  "category": "Aksi Korporasi",
  "title": "MGLV [Tunda] RUPS Akuisisi Nextier, OJK Minta Penjelasan Tambahan",
  "deck": "RUPS Luar Biasa dan RUPS Independen MGLV yang semula digelar 3 September ditunda ke 7 September 2026, menyusul permintaan penjelasan tambahan dari OJK atas rencana akuisisi anak usaha Nextier.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGLV",
   "RUPS",
   "OJK",
   "transaksi afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e0a30ad698_ce52f62d6c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inet-klarifikasi-ke-bei-siap-terbitkan-obligasi-dan-sukuk",
  "category": "Aksi Korporasi",
  "title": "INET Klarifikasi ke BEI, Siap Terbitkan [Obligasi] dan Sukuk",
  "deck": "INET menjawab permintaan BEI soal volatilitas transaksi sahamnya, mengungkap rencana penerbitan obligasi dan sukuk 2026, serta memastikan pengendali AKUN tak berencana kurangi kepemilikan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INET",
   "volatilitas saham",
   "obligasi berkelanjutan",
   "sukuk ijarah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/394f198dd5_7c8dae314a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-kukuhkan-indonesia-jadi-hub-digital-asia-pasifik",
  "category": "Teknologi",
  "title": "Telkom Kukuhkan Indonesia jadi [Hub] Digital Asia Pasifik",
  "deck": "BATIC 2026 di Bali menghadirkan lebih dari 2.700 delegasi dari 67 negara, jadi ajang Telkom lewat Telin menegaskan pergeseran bisnisnya ke ekosistem digital, cloud, dan AI di Asia Pasifik.",
  "date": "1 September 2026",
  "image": "assets/img/telkom-kukuhkan-indonesia-jadi-hub-digital-asia-pasifik.jpg",
  "imageV": "mtir85ix",
  "tags": [
   "Telkom",
   "Telin",
   "BATIC 2026",
   "Digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464203-gelaran-batic-2026-kukuhkan-indonesia-sebagai-hub-kolaborasi-digital-asia-pasifik"
 },
 {
  "slug": "pgas-batalkan-public-expose-2026-tunggu-putusan-arbitrase-gunvor",
  "category": "Aksi Korporasi",
  "title": "PGAS Batalkan Public Expose 2026, Tunggu Putusan [Arbitrase] Gunvor",
  "deck": "PGN membatalkan partisipasi pada Public Expose Live BEI yang dijadwalkan 9 September 2026 karena masih menelaah putusan arbitrase Gunvor yang membuat laporan keuangan interim berpotensi telat.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGAS",
   "Public Expose",
   "Arbitrase Gunvor",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/2387ac1f71_b4fcdff4ec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "modal-asing-rp140-6-t-masuk-ri-hingga-agustus-2026",
  "category": "Pasar Modal",
  "title": "Modal Asing [Rp140,6 T] Masuk RI hingga Agustus 2026",
  "deck": "Menkeu Purbaya Yudhi Sadewa sebut modal asing Rp140,6 triliun masuk RI hingga 28 Agustus 2026, seiring yield SBN turun dari puncak 7,39 persen Juni ke sekitar 7 persen.",
  "date": "1 September 2026",
  "image": "assets/img/modal-asing-rp140-6-t-masuk-ri-hingga-agustus-2026.jpg",
  "imageV": "mtir85yv",
  "tags": [
   "modal asing",
   "yield SBN",
   "rupiah",
   "Purbaya Yudhi Sadewa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464183-purbaya-sebut-modal-asing-rp1406-triliun-masuk-ri-kepercayaan-investor-global-masih-kuat"
 },
 {
  "slug": "humi-gelar-rupslb-8-oktober-agenda-pergantian-pengurus",
  "category": "Aksi Korporasi",
  "title": "HUMI Gelar RUPSLB 8 Oktober, Agenda [Pergantian] Pengurus",
  "deck": "PT Humpuss Maritim Internasional Tbk menjadwalkan RUPSLB pada 8 Oktober 2026 dengan agenda tunggal persetujuan perubahan pengurus perseroan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HUMI",
   "RUPSLB",
   "Humpuss Maritim Internasional",
   "pergantian pengurus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/29b86127c0_6bb83e46ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bnii-rampungkan-pengambilalihan-saham-msi-dan-mam",
  "category": "Aksi Korporasi",
  "title": "BNII Rampungkan [Pengambilalihan] Saham MSI dan MAM",
  "deck": "Bank Maybank Indonesia merampungkan pengambilalihan saham di dua anak usaha, PT Maybank Sekuritas Indonesia dan PT Maybank Asset Management, per Agustus 2026.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BNII",
   "Maybank Indonesia",
   "akuisisi",
   "Maybank Sekuritas Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d9c625e2eb_08dfbafc6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supa-revisi-laporan-dana-ipo-belanja-modal-baru-terserap-3-7",
  "category": "Aksi Korporasi",
  "title": "SUPA Revisi Laporan Dana IPO: [Belanja Modal] Baru Terserap 3,7%",
  "deck": "Revisi laporan dana IPO SUPA menambah persentase deviasi: belanja modal baru terealisasi 3,7% dari target 30%, sisa dana Rp719,2 miliar disimpan di deposit BI.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SUPA",
   "penggunaan dana IPO",
   "belanja modal",
   "Super Bank Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6b5ea392ff_bb69c0cbed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nice-jelaskan-lonjakan-harga-saham-14-12-ke-bei",
  "category": "Aksi Korporasi",
  "title": "NICE Jelaskan Lonjakan [Harga] Saham 14,12% ke BEI",
  "deck": "PT Adhi Kartiko Pratama Tbk menegaskan tidak ada informasi material di balik lonjakan harga sahamnya 14,12 persen pada 27 Agustus 2026, sesuai permintaan penjelasan Bursa Efek Indonesia.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NICE",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "nikel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ef41e71c22_82da023f64.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tris-bagikan-dividen-interim-rp2-27-per-saham",
  "category": "Aksi Korporasi",
  "title": "TRIS Bagikan [Dividen] Interim Rp2,27 per Saham",
  "deck": "Trisula International akan membagikan dividen interim tunai Rp7,02 miliar atau Rp2,27 per saham untuk tahun buku 2026, dengan pembayaran pada 23 September 2026.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIS",
   "dividen interim",
   "Trisula International",
   "IDX"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a2fee03129_8f84c44ccf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-likuiditas-ketat-rp500-m-mengendap-di-obligasi-2",
  "category": "Aksi Korporasi",
  "title": "BWPT: [Likuiditas] Ketat, Rp500 M Mengendap di Obligasi 2%",
  "deck": "Dalam tanggapan ke Bursa, Eagle High Plantations mengungkap rasio lancar 0,67 kali dan Rp500 miliar dana ditempatkan di obligasi Danantara berkupon 2% per tahun, sementara utang bank masih besar.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "Eagle High Plantations",
   "likuiditas",
   "obligasi Danantara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/69cc60f983_ffd69591b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nfcx-jelaskan-volatilitas-pemegang-saham-utama-tambah-saham",
  "category": "Aksi Korporasi",
  "title": "NFCX Jelaskan Volatilitas, Pemegang Saham Utama [Tambah] Saham",
  "deck": "NFCX menjawab permintaan BEI soal volatilitas transaksi, mengungkap pembelian saham oleh PT 1 Inti Dot Com dan rencana penambahan modal yang belum dijadwalkan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NFCX",
   "volatilitas saham",
   "PMTHMETD",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/74493ac8d4_19dbaba655.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tris-bagi-dividen-interim-rp2-27-saham-cair-23-september-dividen",
  "category": "Aksi Korporasi",
  "title": "TRIS Bagi Dividen Interim Rp2,27/Saham, Cair 23 September [dividen]",
  "deck": "Trisula International akan membagikan dividen interim tunai Rp7,02 miliar atau Rp2,27 per saham untuk tahun buku 2026, dibayarkan 23 September kepada pemegang saham yang tercatat 11 September.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRIS",
   "dividen interim",
   "Trisula International",
   "emiten tekstil"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5b8ad1e57d_db9f6b3b88.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "data-desil-dtsen-keliru-pemerintah-buka-jalur-koreksi",
  "category": "Makroekonomi",
  "title": "Data Desil DTSEN Keliru? Pemerintah Buka Jalur [Koreksi]",
  "deck": "Kementerian Sosial memastikan status desil DTSEN yang dianggap warga tidak sesuai kondisi ekonomi bisa dikoreksi lewat Command Center, WhatsApp, aplikasi Cek Bansos, atau kantor kelurahan.",
  "date": "1 September 2026",
  "image": "assets/img/data-desil-dtsen-keliru-pemerintah-buka-jalur-koreksi.jpg",
  "imageV": "mtir86i4",
  "tags": [
   "DTSEN",
   "Desil",
   "Bantuan Sosial",
   "Kemensos"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464166-desil-dtsen-bisa-salah-gus-ipul-buka-pintu-koreksi-data-bahlil-singgung-nasib-pembatasan-pertalite"
 },
 {
  "slug": "dooh-koreksi-laporan-realisasi-dana-ipo-sisa-rp41-8-m",
  "category": "Aksi Korporasi",
  "title": "DOOH [Koreksi] Laporan Realisasi Dana IPO, Sisa Rp41,8 M",
  "deck": "Era Media Sejahtera mengoreksi laporan realisasi dana IPO 2023: Rp110,85 miliar sudah terpakai, Rp41,77 miliar masih mengendap di giro Bank DKI.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "IPO",
   "penggunaan dana",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/a7b9b5ece7_6565396f73.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-naik-1-14-ke-6-599-94-ditopang-energi-teknologi",
  "category": "Pasar Modal",
  "title": "IHSG [Naik] 1,14% ke 6.599,94, Ditopang Energi-Teknologi",
  "deck": "IHSG ditutup menguat 1,14 persen ke 6.599,94 pada Selasa, ditopang lonjakan sektor perindustrian, teknologi, dan energi.",
  "date": "1 September 2026",
  "image": "assets/img/ihsg-naik-1-14-ke-6-599-94-ditopang-energi-teknologi.jpg",
  "imageV": "mtir86y7",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "saham energi",
   "saham teknologi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464151-ihsg-tancap-gas-di-akhir-perdagangan-naik-114-ke-659994-saham-energi-dan-teknologi-jadi-penopang"
 },
 {
  "slug": "luck-gelar-rupslb-alihkan-saham-investor-asing-ke-publik",
  "category": "Aksi Korporasi",
  "title": "LUCK Gelar RUPSLB, [Alihkan] Saham Investor Asing ke Publik",
  "deck": "Sentral Mitra Informatika memanggil RUPSLB pada 23 September 2026 untuk mengubah anggaran dasar sesuai KBLI 2025 dan menegaskan status kepemilikan Serial System Internasional Pte Ltd menjadi milik publik.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LUCK",
   "RUPSLB",
   "Sentral Mitra Informatika",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/ced4b0c9c6_6cbdf5473c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "intp-wakil-direktur-utama-baru-resmi-menjabat",
  "category": "Aksi Korporasi",
  "title": "INTP: [Wakil Direktur Utama] Baru Resmi Menjabat",
  "deck": "Jose Maria Magrina Vadillo resmi menjabat Wakil Direktur Utama Indocement sejak 1 September 2026, merealisasikan keputusan RUPST Mei lalu, dengan masa jabatan hingga 2029.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INTP",
   "Indocement",
   "Direksi",
   "Wakil Direktur Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/4efd462111_55063f81f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penumpang-ka-juli-capai-52-12-juta-tertinggi-6-bulan",
  "category": "Bisnis",
  "title": "Penumpang KA Juli Capai 52,12 Juta, [Tertinggi 6 Bulan]",
  "deck": "BPS mencatat jumlah penumpang kereta api naik dua bulan beruntun dan menyentuh level tertinggi sejak awal tahun.",
  "date": "1 September 2026",
  "image": "assets/img/warung-makan.jpg",
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
  "slug": "turis-asing-juli-1-53-juta-naik-4-bulan-beruntun",
  "category": "Bisnis",
  "title": "Turis Asing Juli 1,53 Juta, [Naik 4 Bulan Beruntun]",
  "deck": "Kunjungan wisatawan mancanegara Juli 2026 mencapai 1,53 juta orang, melanjutkan tren naik sejak April setelah sempat turun pada Maret.",
  "date": "1 September 2026",
  "image": "assets/img/bisnis-resto.jpg",
  "tags": [
   "bps",
   "wisatawan",
   "pariwisata",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "neraca-dagang-juli-surplus-tipis-0-12-miliar-dolar",
  "category": "Perdagangan",
  "title": "Neraca Dagang Juli Surplus Tipis [0,12 Miliar Dolar]",
  "deck": "Surplus perdagangan Indonesia naik 127,06% dari Juni yang defisit, namun anjlok 97,08% dibanding Juli 2025.",
  "date": "1 September 2026",
  "image": "assets/img/pasar-modal.jpg",
  "tags": [
   "neraca-dagang",
   "bps",
   "ekspor-impor",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "impor-ri-juli-2026-tembus-us-26-1-m-naik-27",
  "category": "Perdagangan",
  "title": "Impor RI Juli 2026 Tembus US$26,1 M, [Naik 27%]",
  "deck": "BPS mencatat nilai impor Juli 2026 naik tipis 0,72% dari Juni, namun melonjak 27,02% dibanding Juli tahun lalu.",
  "date": "1 September 2026",
  "image": "assets/img/moneter-bi.jpg",
  "tags": [
   "impor",
   "bps",
   "neraca dagang",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ekspor-ri-juli-2026-naik-jadi-us-26-2-m",
  "category": "Perdagangan",
  "title": "Ekspor RI Juli 2026 [Naik Jadi US$26,2 M]",
  "deck": "BPS mencatat nilai ekspor Juli 2026 naik dibanding Juni maupun periode sama tahun lalu, melanjutkan tren kenaikan sejak Mei.",
  "date": "1 September 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "ekspor",
   "bps",
   "perdagangan"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "bps-inflasi-agustus-2026-0-21-naik-dari-deflasi-juli",
  "category": "Makroekonomi",
  "title": "BPS: Inflasi Agustus 2026 0,21%, Naik dari Deflasi Juli",
  "deck": "Setelah harga turun 0,14% pada Juli, indeks harga konsumen naik tipis 0,21% pada Agustus 2026, menandai kembalinya inflasi.",
  "date": "1 September 2026",
  "image": "assets/img/pasar-beras.jpg",
  "tags": [
   "inflasi",
   "bps",
   "harga konsumen",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ipcm-panggil-rupslb-agendakan-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "IPCM Panggil RUPSLB, Agendakan [Perubahan] Direksi",
  "deck": "RUPSLB IPCM digelar 23 September 2026, bahas perubahan anggaran dasar, penetapan remunerasi pengurus, dan perubahan susunan direksi-komisaris.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCM",
   "RUPSLB",
   "Jasa Armada Indonesia",
   "Pelindo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d104a2caa7_7b97361d9e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "surplus-dagang-ri-juli-menipis-migas-jadi-beban-utama",
  "category": "Makroekonomi",
  "title": "Surplus Dagang RI Juli Menipis, [Migas] Jadi Beban Utama",
  "deck": "BPS mencatat surplus neraca dagang Juli 2026 hanya US$0,12 miliar, setelah defisit migas menggerus sebagian besar surplus nonmigas.",
  "date": "1 September 2026",
  "image": "assets/img/surplus-dagang-ri-juli-menipis-migas-jadi-beban-utama.jpg",
  "imageV": "mtifhp0f",
  "tags": [
   "neraca perdagangan",
   "BPS",
   "surplus",
   "migas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464129-neraca-dagang-ri-surplus-us370-miliar-tapi-defisit-dengan-china-tembus-us1695-miliar"
 },
 {
  "slug": "purbaya-ungkap-strategi-kejar-pertumbuhan-6-persen-pada-2027",
  "category": "Makroekonomi",
  "title": "Purbaya Ungkap Strategi Kejar Pertumbuhan [6 Persen] pada 2027",
  "deck": "Pemerintah menargetkan pertumbuhan ekonomi 6 persen pada 2027 lewat sinergi kebijakan fiskal, moneter, investasi, dan peran Danantara.",
  "date": "1 September 2026",
  "image": "assets/img/purbaya-ungkap-strategi-kejar-pertumbuhan-6-persen-pada-2027.jpg",
  "imageV": "mtifhpmw",
  "tags": [
   "Purbaya Yudhi Sadewa",
   "APBN 2027",
   "Danantara",
   "pertumbuhan ekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464128-purbaya-ungkap-jurus-kejar-ekonomi-6-pada-2027-investasi-jadi-kunci-utama-pemerintah"
 },
 {
  "slug": "plts-pln-ganti-diesel-listrik-24-jam-di-pulau-rengit",
  "category": "Energi",
  "title": "PLTS PLN Ganti Diesel, Listrik [24 Jam] di Pulau Rengit",
  "deck": "PLN mengganti pembangkit diesel dengan PLTS 78 kWp di Pulau Rengit, Belitung, memberi listrik 24 jam kepada 44 keluarga di bawah program surya nasional.",
  "date": "1 September 2026",
  "image": "assets/img/plts-pln-ganti-diesel-listrik-24-jam-di-pulau-rengit.jpg",
  "imageV": "mtifhq1q",
  "tags": [
   "PLN",
   "PLTS",
   "Belitung",
   "Energi Terbarukan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464126-plts-pln-bawa-harapan-baru-ke-pulau-rengit-belitung"
 },
 {
  "slug": "27-provinsi-inflasi-agustus-babel-maluku-tertinggi-0-81",
  "category": "Makroekonomi",
  "title": "27 Provinsi [Inflasi] Agustus, Babel-Maluku Tertinggi 0,81%",
  "deck": "BPS mencatat 27 provinsi alami inflasi bulanan Agustus 2026, 11 provinsi deflasi. Bangka Belitung dan Maluku catat kenaikan harga tertinggi, masing-masing 0,81 persen.",
  "date": "1 September 2026",
  "image": "assets/img/27-provinsi-inflasi-agustus-babel-maluku-tertinggi-0-81.jpg",
  "imageV": "mtifhqgs",
  "tags": [
   "inflasi",
   "bps",
   "deflasi",
   "harga pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464124-27-provinsi-dilanda-inflasi-bangka-belitung-dan-maluku-tertinggi-hingga-081-persen"
 },
 {
  "slug": "bi-ramal-ekonomi-ri-tumbuh-6-di-2027-rupiah-rp17-300-17-800",
  "category": "Makroekonomi",
  "title": "BI Ramal Ekonomi RI [Tumbuh] 6% di 2027, Rupiah Rp17.300-17.800",
  "deck": "BI memproyeksikan ekonomi Indonesia tumbuh 5,2-6 persen pada 2027, naik dari 4,9-5,7 persen tahun ini, dengan rupiah di kisaran Rp17.300-Rp17.800 per dolar AS.",
  "date": "1 September 2026",
  "image": "assets/img/bi-ramal-ekonomi-ri-tumbuh-6-di-2027-rupiah-rp17-300-17-800.jpg",
  "imageV": "mtifhqwa",
  "tags": [
   "Bank Indonesia",
   "Pertumbuhan Ekonomi",
   "Rupiah",
   "2027"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464122-bi-ramal-ekonomi-ri-bisa-tumbuh-6-pada-2027-rupiah-dipatok-rp17300-rp17800-per-dolar-as"
 },
 {
  "slug": "impor-mesin-dan-elektronik-naik-kuasai-37-88-nonmigas-ri",
  "category": "Makroekonomi",
  "title": "Impor Mesin dan Elektronik [Naik], Kuasai 37,88% Nonmigas RI",
  "deck": "BPS mencatat impor mesin, peralatan elektrik, dan plastik menyumbang 37,88 persen dari total impor nonmigas RI sepanjang Januari-Juli 2026.",
  "date": "1 September 2026",
  "image": "assets/img/impor-mesin-dan-elektronik-naik-kuasai-37-88-nonmigas-ri.jpg",
  "imageV": "mtifhr1c",
  "tags": [
   "impor",
   "BPS",
   "nonmigas",
   "manufaktur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464120-impor-mesin-dan-elektronik-melonjak-tembus-3788-persen-dari-total-impor-nonmigas-ri"
 },
 {
  "slug": "pln-dukung-target-plts-100-gwp-untuk-swasembada-energi",
  "category": "Energi",
  "title": "PLN Dukung Target PLTS [100] GWp untuk Swasembada Energi",
  "deck": "PLN menyatakan siap mengakselerasi pembangunan PLTS usai Presiden Prabowo Subianto meluncurkan program 100 gigawatt peak, dengan tahap awal 14 proyek berkapasitas 5.300 megawatt peak.",
  "date": "1 September 2026",
  "image": "assets/img/pln-dukung-target-plts-100-gwp-untuk-swasembada-energi.jpg",
  "imageV": "mtifhrhd",
  "tags": [
   "PLTS",
   "energi terbarukan",
   "PLN",
   "swasembada energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464117-dukung-plts-100-gwp-pln-siap-akselerasi-pengembangan-ebt-menuju-swasembada-energi"
 },
 {
  "slug": "ptba-cetak-laba-rp2-65-triliun-di-semester-i-2026-naik-218",
  "category": "Aksi Korporasi",
  "title": "PTBA Cetak Laba [Rp2,65 Triliun] di Semester I 2026, Naik 218%",
  "deck": "Laba bersih PT Bukit Asam melonjak 218 persen menjadi Rp2,65 triliun pada semester I 2026, didorong kenaikan harga jual batu bara meski volume produksi turun 10 persen dibanding tahun lalu.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTBA",
   "Bukit Asam",
   "batu bara",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/d60fece20c_e4bd2c1539.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impor-ri-tembus-us-163-33-m-bahan-baku-melonjak",
  "category": "Makroekonomi",
  "title": "Impor RI Tembus US$163,33 M, Bahan Baku [Melonjak]",
  "deck": "BPS mencatat impor Indonesia naik 19,94 persen jadi US$163,33 miliar sepanjang Januari-Juli 2026, didorong lonjakan bahan baku industri dan migas.",
  "date": "1 September 2026",
  "image": "assets/img/impor-ri-tembus-us-163-33-m-bahan-baku-melonjak.jpg",
  "imageV": "mtifhrx0",
  "tags": [
   "impor",
   "BPS",
   "bahan baku",
   "migas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464105-impor-indonesia-tembus-us16333-miliar-bahan-baku-jadi-primadona-utama"
 },
 {
  "slug": "pendaftar-umk-academy-pertamina-tembus-4-000-naik-2-kali-lipat",
  "category": "UMKM",
  "title": "Pendaftar UMK Academy Pertamina [Tembus] 4.000, Naik 2 Kali Lipat",
  "deck": "Pendaftaran program pembinaan UMKM binaan Pertamina ditutup 31 Agustus 2026 dengan lebih dari 4.000 pelaku usaha mendaftar, hampir dua kali lipat dibanding tahun sebelumnya.",
  "date": "1 September 2026",
  "image": "assets/img/pendaftar-umk-academy-pertamina-tembus-4-000-naik-2-kali-lipat.jpg",
  "imageV": "mtifhscq",
  "tags": [
   "Pertamina",
   "UMKM",
   "UMK Academy",
   "TJSL"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464104-pendaftaran-ditutup-lebih-dari-4000-pelaku-usaha-mendaftar-pertamina-umk-academy-2026"
 },
 {
  "slug": "pln-serap-listrik-sampah-bekasi-223-584-mwh-per-tahun",
  "category": "Energi",
  "title": "PLN Serap Listrik Sampah Bekasi, [223.584] MWh per Tahun",
  "deck": "PLN teken kesepakatan menyerap listrik dari PSEL Kota Bekasi sebanyak 223.584 MWh per tahun, seiring pemerintah memangkas aturan proyek sampah jadi energi dari ratusan menjadi tiga.",
  "date": "1 September 2026",
  "image": "assets/img/pln-serap-listrik-sampah-bekasi-223-584-mwh-per-tahun.jpg",
  "imageV": "mtifhstx",
  "tags": [
   "pln",
   "psel bekasi",
   "sampah jadi listrik",
   "energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464102-bekasi-siap-produksi-listrik-dari-sampah-pln-akan-serap-dan-salurkan-223584-mwh-per-tahun"
 },
 {
  "slug": "pertamina-gabungkan-pet-ke-patra-niaga-berlaku-september",
  "category": "BUMN",
  "title": "Pertamina [Gabungkan] PET ke Patra Niaga, Berlaku September",
  "deck": "Pertamina resmi meleburkan PT Pertamina Energy Terminal ke PT Pertamina Patra Niaga sebagai tahap kedua restrukturisasi bisnis hilir, efektif 1 September 2026.",
  "date": "1 September 2026",
  "image": "assets/img/pertamina-gabungkan-pet-ke-patra-niaga-berlaku-september.jpg",
  "imageV": "mtir87k0",
  "tags": [
   "Pertamina",
   "Pertamina Patra Niaga",
   "restrukturisasi BUMN",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464099-perkuat-transformasi-pertamina-selesaikan-restrukturisasi-bisnis-hilir-tahap-kedua"
 },
 {
  "slug": "bgtg-jelaskan-ke-bei-soal-volatilitas-transaksi-sahamnya",
  "category": "Aksi Korporasi",
  "title": "BGTG Jelaskan ke BEI Soal [Volatilitas] Transaksi Sahamnya",
  "deck": "BGTG menjawab permintaan BEI soal volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkapkan ke publik.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BGTG",
   "Bank Ganesha",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8e7a91a83a_d309b2f6cd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "china-as-india-kuasai-44-25-ekspor-nonmigas-ri",
  "category": "Makroekonomi",
  "title": "China, AS, India Kuasai [44,25%] Ekspor Nonmigas RI",
  "deck": "BPS mencatat ekspor nonmigas Indonesia Januari-Juli 2026 terkonsentrasi pada China, Amerika Serikat, dan India, dengan besi baja, CPO, dan batu bara sebagai komoditas andalan.",
  "date": "1 September 2026",
  "image": "assets/img/china-as-india-kuasai-44-25-ekspor-nonmigas-ri.jpg",
  "imageV": "mtir880u",
  "tags": [
   "ekspor nonmigas",
   "BPS",
   "China",
   "CPO"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464097-bps-sebut-china-as-dan-india-kuasai-4425-persen-ekspor-nonmigas-indonesia"
 },
 {
  "slug": "pln-dan-bali-teken-kerja-sama-percepat-plts-100-gwp",
  "category": "Energi",
  "title": "PLN dan Bali Teken Kerja Sama [Percepat] PLTS 100 GWp",
  "deck": "PLN dan Pemprov Bali menandatangani kerja sama percepatan infrastruktur energi terbarukan sebagai bagian dari program PLTS 100 GWp nasional.",
  "date": "1 September 2026",
  "image": "assets/img/pln-dan-bali-teken-kerja-sama-percepat-plts-100-gwp.jpg",
  "imageV": "mtir88h6",
  "tags": [
   "PLTS",
   "PLN",
   "Bali",
   "energi terbarukan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464093-pln-dan-pemprov-bali-kolaborasi-percepat-pengembangan-infrastruktur-energi-bersih-dukung-program-plts-100-gwp"
 },
 {
  "slug": "bmas-laba-semester-i-anjlok-74-utang-afiliasi-melonjak",
  "category": "Aksi Korporasi",
  "title": "BMAS: Laba Semester I [Anjlok] 74%, Utang Afiliasi Melonjak",
  "deck": "Laba bersih BMAS anjlok 74 persen menjadi Rp6,39 miliar pada semester I 2026, sementara pinjaman dari pemegang saham pengendali melonjak 335 persen jadi Rp5,81 triliun.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "Bank Kasikorn Indonesia",
   "laporan keuangan",
   "perbankan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260901134145-64220-0/FinancialStatement-2026-II-BMAS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcid-pemegang-66-48-saham-berpindah-ke-entitas-baru-jepang",
  "category": "Aksi Korporasi",
  "title": "TCID: Pemegang 66,48% Saham [Berpindah] ke Entitas Baru Jepang",
  "deck": "Mandom Corporation Jepang mengalihkan 267,3 juta saham TCID (66,48%) ke entitas hasil merger dan pemisahan usaha internal, tanpa mengubah pengendali Perseroan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCID",
   "Mandom Indonesia",
   "pemegang saham",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e3649c2217_2b625d7014.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bps-ekspor-ri-tembus-us-167-03-miliar-migas-melemah",
  "category": "Makroekonomi",
  "title": "BPS: Ekspor RI Tembus [US$167,03] Miliar, Migas Melemah",
  "deck": "Ekspor Indonesia Januari-Juli 2026 naik 4,43 persen jadi US$167,03 miliar, ditopang nonmigas yang menguat sementara ekspor migas turun 10,63 persen.",
  "date": "1 September 2026",
  "image": "assets/img/bps-ekspor-ri-tembus-us-167-03-miliar-migas-melemah.jpg",
  "imageV": "mtir88ww",
  "tags": [
   "ekspor",
   "BPS",
   "migas",
   "nikel"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464084-ekspor-indonesia-tembus-us16703-miliar-industri-pengolahan-jadi-penyumbang-utama"
 },
 {
  "slug": "inflasi-agustus-tembus-3-19-persen-dipicu-harga-ayam",
  "category": "Makroekonomi",
  "title": "Inflasi Agustus Tembus [3,19] Persen, Dipicu Harga Ayam",
  "deck": "BPS mencatat inflasi Agustus 2026 sebesar 0,21 persen bulanan dan 3,19 persen tahunan, dengan kenaikan harga daging ayam ras jadi pendorong utama.",
  "date": "1 September 2026",
  "image": "assets/img/inflasi-agustus-tembus-3-19-persen-dipicu-harga-ayam.jpg",
  "imageV": "mtir893j",
  "tags": [
   "inflasi",
   "BPS",
   "harga pangan",
   "daging ayam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464070-inflasi-agustus-2026-tembus-319-persen-harga-ayam-hingga-emas-jadi-biang-kerok"
 },
 {
  "slug": "tmpo-jelaskan-saham-melonjak-pendapatan-turun-rugi-menyempit",
  "category": "Aksi Korporasi",
  "title": "TMPO Jelaskan Saham Melonjak, Pendapatan Turun Rugi [Menyempit]",
  "deck": "Setelah sahamnya disetop bursa akibat lonjakan harga, Tempo Inti Media memaparkan kinerja semester I 2026: pendapatan turun 3,96 persen tapi rugi bersih menyempit 7,47 persen jadi Rp6,58 miliar.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Tempo Inti Media",
   "Public Expose",
   "kinerja keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/810af7b132_fca403b369.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "psab-lunasi-sebagian-besar-utang-liabilitas-turun-45",
  "category": "Aksi Korporasi",
  "title": "PSAB Lunasi Sebagian Besar Utang, Liabilitas Turun [45%]",
  "deck": "Surat penjelasan J Resources Asia Pasifik ke BEI mengungkap total liabilitas turun 45 persen dan total aset turun 22 persen per Juni 2026, dipicu pelunasan utang dan pelepasan anak usaha.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "J Resources Asia Pasifik",
   "laporan keuangan",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260901110410-63247-0/FinancialStatement-2026-II-PSAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-kuak-penggelapan-gaji-divisi-sdm-rupslb-copot-direksi",
  "category": "Aksi Korporasi",
  "title": "ASBI Kuak [Penggelapan] Gaji Divisi SDM, RUPSLB Copot Direksi",
  "deck": "ASBI ungkap skema penggelapan gaji oleh divisi SDM senilai sekitar Rp400 juta per bulan selama 2,5 tahun, lapor polisi dan OJK, RUPSLB 30 September ganti direksi.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "penggelapan",
   "asuransi",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6f6edd8ba1_501b867691.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-tipis-ke-rp17-715-di-tengah-harga-energi-naik",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Tipis ke Rp17.715 di Tengah Harga Energi Naik",
  "deck": "Rupiah menguat tipis ke Rp17.715 per dolar AS saat harga energi global melonjak akibat memanasnya kembali ketegangan Iran-AS, sementara subsidi energi mendekati Rp233 triliun.",
  "date": "1 September 2026",
  "image": "assets/img/rupiah-menguat-tipis-ke-rp17-715-di-tengah-harga-energi-naik.jpg",
  "imageV": "mtj0m0bb",
  "tags": [
   "rupiah",
   "kurs dolar AS",
   "subsidi energi",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464038-rupiah-menguat-ke-rp17715-per-dolar-as-di-tengah-lonjakan-harga-energi-imbas-kembali-memanasnya-perang-iran-as"
 },
 {
  "slug": "sipd-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "SIPD Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham Sreeya Sewu Indonesia. Perseroan menyatakan tidak ada informasi material yang belum diungkapkan.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SIPD",
   "Sreeya Sewu Indonesia",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/7e567a4864_f6761b754f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-turun-tipis-ke-rp2-664-000-gram",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam [Turun] Tipis ke Rp2.664.000/Gram",
  "deck": "Harga emas Antam turun Rp6.000 menjadi Rp2.664.000 per gram pada 1 September 2026, sementara harga buyback turun ke Rp2.517.000 per gram.",
  "date": "1 September 2026",
  "image": "assets/img/harga-emas-antam-turun-tipis-ke-rp2-664-000-gram.jpg",
  "imageV": "mtj0m0pu",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464035-harga-emas-antam-hari-ini-1-september-2026-turun-tipis-rp6000-jadi-rp2664000-per-gram"
 },
 {
  "slug": "ekonom-nilai-ri-perlu-geser-neraca-ke-investasi",
  "category": "Makroekonomi",
  "title": "Ekonom Nilai RI Perlu Geser Neraca ke [Investasi]",
  "deck": "Ekonom Trimegah Fakhrul Fulvian mendukung arah Presiden Prabowo Subianto mengurangi ketergantungan utang, namun menilai perlu perubahan struktur pembiayaan neraca pembayaran.",
  "date": "1 September 2026",
  "image": "assets/img/ekonom-nilai-ri-perlu-geser-neraca-ke-investasi.jpg",
  "imageV": "mtj0m165",
  "tags": [
   "neraca pembayaran",
   "investasi asing",
   "utang negara",
   "SBN SRBI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464031-kurangi-ketergantungan-utang-indonesia-dinilai-perlu-ubah-struktur-neraca-pembayaran-jadi-investment-driven"
 },
 {
  "slug": "inkp-rampungkan-emisi-obligasi-rp3-5-triliun-dan-usd13-76-juta",
  "category": "Aksi Korporasi",
  "title": "INKP Rampungkan Emisi [Obligasi] Rp3,5 Triliun dan USD13,76 Juta",
  "deck": "Indah Kiat Pulp & Paper menuntaskan penerbitan obligasi, sukuk mudharabah, dan obligasi dolar AS dengan total setara Rp3,5 triliun ditambah US$13,76 juta, bunga 6,75-10,5 persen per tahun.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/fa292f4567_f2313e1046.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "esdm-mulai-proyek-gasifikasi-batubara-jadi-metanol-di-kaltim",
  "category": "Energi",
  "title": "ESDM Mulai Proyek [Gasifikasi] Batubara Jadi Metanol di Kaltim",
  "deck": "Proyek gasifikasi batubara di Kutai Timur ditargetkan hasilkan 2 juta ton metanol per tahun untuk menekan impor yang tahun lalu mencapai Rp7,1 triliun.",
  "date": "1 September 2026",
  "image": "assets/img/esdm-mulai-proyek-gasifikasi-batubara-jadi-metanol-di-kaltim.jpg",
  "imageV": "mths8emx",
  "tags": [
   "gasifikasi batubara",
   "metanol",
   "Kutai Timur",
   "hilirisasi"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/buka-jalan-hilirisasi-di-kutai-timur-wamen-esdm-resmikan-proyek-gasifikasi-batubara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "harga-patokan-ekspor-emas-naik-7-87-persen-per-september",
  "category": "Industri",
  "title": "Harga Patokan Ekspor Emas [Naik] 7,87 Persen per September",
  "deck": "Kementerian Perdagangan menaikkan Harga Patokan Ekspor emas 7,87 persen menjadi US$142.154,10 per kilogram untuk periode 1-14 September 2026, mengikuti kenaikan harga emas dunia.",
  "date": "1 September 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "emas",
   "HPE",
   "Kemendag",
   "bea keluar"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/permintaan-emas-naik-kemendag-tetapkan-kenaikan-hpe-emas-di-periode-pertama-september-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pertamax-turbo-dan-dex-series-naik-mulai-1-september",
  "category": "Energi",
  "title": "Pertamax Turbo dan Dex Series [Naik] Mulai 1 September",
  "deck": "Pertamina menaikkan harga Pertamax Turbo, Pertamina Dex, dan Dexlite mulai 1 September 2026, sementara Pertamax 92 dan Pertamax Green 95 tetap.",
  "date": "1 September 2026",
  "image": "assets/img/pertamax-turbo-dan-dex-series-naik-mulai-1-september.jpg",
  "imageV": "mths8f6c",
  "tags": [
   "BBM",
   "Pertamina",
   "Harga BBM",
   "Pertamax Turbo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463985-simak-harga-bbm-pertamina-1-september-2026-pertamax-turbo-dan-dex-series-naik"
 },
 {
  "slug": "psab-laba-melonjak-usai-lepas-anak-usaha-aset-turun-22",
  "category": "Aksi Korporasi",
  "title": "PSAB: Laba [Melonjak] Usai Lepas Anak Usaha, Aset Turun 22%",
  "deck": "Laba PSAB melonjak pada semester I 2026 setelah mencatat untung pelepasan anak usaha US$298,6 juta, sementara total aset turun 22 persen dan total utang turun 45 persen dibanding akhir 2025.",
  "date": "1 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSAB",
   "J Resources Asia Pasifik",
   "laporan keuangan",
   "pertambangan emas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/375ef73ba5_f4070dfcdb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "penumpang-angkutan-laut-juli-naik-8-21-persen-udara-ikut-naik",
  "category": "Makroekonomi",
  "title": "Penumpang Angkutan Laut Juli [Naik] 8,21 Persen, Udara Ikut Naik",
  "deck": "Data BPS Juli 2026: penumpang angkutan laut domestik naik 8,21 persen, disusul udara dan kereta, sementara penyeberangan sungai-danau turun 6,81 persen.",
  "date": "1 September 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "BPS",
   "Transportasi",
   "Angkutan Laut",
   "Angkutan Udara"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2614",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "harga-impor-ri-naik-lebih-cepat-dari-ekspor-triwulan-ii-2026",
  "category": "Makroekonomi",
  "title": "Harga Impor RI [Naik] Lebih Cepat dari Ekspor Triwulan II-2026",
  "deck": "BPS mencatat indeks harga ekspor dan impor Indonesia sama-sama naik pada triwulan II-2026, tapi kenaikan harga impor lebih tinggi, terutama untuk kelompok migas.",
  "date": "1 September 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "BPS",
   "ekspor-impor",
   "migas",
   "triwulan II-2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2613",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "nilai-tukar-petani-naik-1-05-persen-ke-129-19",
  "category": "Makroekonomi",
  "title": "Nilai Tukar Petani [Naik] 1,05 Persen ke 129,19",
  "deck": "NTP nasional Agustus 2026 naik ke 129,19 karena harga hasil panen naik lebih cepat dibanding biaya hidup dan produksi yang ditanggung petani.",
  "date": "1 September 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "NTP",
   "Petani",
   "BPS",
   "Harga Beras"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2612",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "laju-impor-ri-kalahkan-ekspor-surplus-dagang-menipis",
  "category": "Makroekonomi",
  "title": "Laju Impor RI Kalahkan Ekspor, Surplus Dagang [Menipis]",
  "deck": "Ekspor RI Juli 2026 naik 6,05 persen jadi US$26,22 miliar, tapi impor melonjak 27,02 persen jadi US$26,09 miliar sehingga surplus Januari-Juli menyusut ke US$3,70 miliar.",
  "date": "1 September 2026",
  "image": "assets/img/jalan-tol-konstruksi.jpg",
  "tags": [
   "ekspor-impor",
   "neraca dagang",
   "BPS",
   "migas"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2615",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "inci-laba-bersih-melonjak-tiga-kali-lipat-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "INCI: Laba Bersih [Melonjak] Tiga Kali Lipat di Semester I 2026",
  "deck": "Laba bersih Intanwijaya Internasional naik dari Rp8,5 miliar menjadi Rp27,8 miliar pada semester I 2026, meski utang usaha turut melonjak lebih dari 20 persen dipicu kenaikan pembelian bahan baku.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INCI",
   "Intanwijaya Internasional",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/20260901000424-64332-0/FinancialStatement-2026-II-INCI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-catat-ekuitas-negatif-usai-rugi-rp96-6-miliar",
  "category": "Aksi Korporasi",
  "title": "TAMA Catat Ekuitas [Negatif] Usai Rugi Rp96,6 Miliar",
  "deck": "Ekuitas TAMA berbalik negatif Rp61,98 miliar pada semester I 2026 setelah rugi bersih melonjak jadi Rp96,64 miliar, dipicu beban lain-lain dan penurunan nilai properti investasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "laporan keuangan",
   "ekuitas negatif",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/dee9c52fc9_ef5836dc7d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smgr-laba-semester-i-2026-melonjak-ke-rp207-miliar",
  "category": "Aksi Korporasi",
  "title": "SMGR: Laba Semester I 2026 [Melonjak] ke Rp207 Miliar",
  "deck": "Laba bersih Semen Indonesia naik lebih dari lima kali lipat menjadi Rp207 miliar pada semester I 2026, sementara utang bank dan obligasi jatuh tempo dilunasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMGR",
   "Semen Indonesia",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831224736-64215-0/FinancialStatement-2026-II-SMGR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aisa-tanggapi-bursa-ungkap-nasib-dana-kpk-rp150-miliar",
  "category": "Aksi Korporasi",
  "title": "AISA Tanggapi Bursa, Ungkap Nasib Dana [KPK] Rp150 Miliar",
  "deck": "FKS Food Sejahtera (AISA) menjawab permintaan penjelasan BEI soal kuasi reorganisasi, lonjakan piutang dan persediaan, dana Rp150 miliar di rekening KPK, hingga covenant utang bank sindikasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AISA",
   "FKS Food Sejahtera",
   "Bursa Efek Indonesia",
   "Kuasi Reorganisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/99d015ba68_0498c38a3b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgn-lewat-berandamas-kenalkan-hunian-berbasis-energi",
  "category": "BUMN",
  "title": "PGN Lewat BerandaMAS Kenalkan Hunian Berbasis [Energi]",
  "deck": "PGNMAS, anak usaha PGN, memperkenalkan BerandaMAS, kawasan hunian berbasis gas bumi dan panel surya, dalam Danantara Housing Expo 2026 di PIK 2, Tangerang.",
  "date": "31 Agustus 2026",
  "image": "assets/img/pgn-lewat-berandamas-kenalkan-hunian-berbasis-energi.jpg",
  "imageV": "mthi3zj8",
  "tags": [
   "BerandaMAS",
   "PGN",
   "PGNMAS",
   "Danantara Housing Expo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463967-kenalkan-hunian-berbasis-energi-di-danantara-housing-expo-2026-begini-konsep-smart-home-berandamas"
 },
 {
  "slug": "pertamina-gandeng-ibc-bangun-ekosistem-baterai",
  "category": "Energi",
  "title": "Pertamina Gandeng IBC Bangun Ekosistem [Baterai]",
  "deck": "Pertamina teken MoU dengan IBC untuk menjajaki ekosistem baterai terintegrasi, dari BESS hingga daur ulang baterai, sebagai bagian ekspansi bisnis rendah karbon.",
  "date": "31 Agustus 2026",
  "image": "assets/img/pertamina-gandeng-ibc-bangun-ekosistem-baterai.jpg",
  "imageV": "mthi3zxo",
  "tags": [
   "Pertamina",
   "IBC",
   "baterai",
   "rendah karbon"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463963-perluas-peluang-bisnis-rendah-karbon-pertamina-teken-sinergi-pengembangan-ekosistem-baterai-dengan-pt-ibc"
 },
 {
  "slug": "pam-jaya-pastikan-air-baku-jatiluhur-aman-hingga-2026",
  "category": "BUMN",
  "title": "PAM JAYA Pastikan Air Baku Jatiluhur [Aman] hingga 2026",
  "deck": "PAM JAYA menyatakan pasokan air baku dari Waduk Jatiluhur masih aman untuk Jakarta hingga akhir 2026, meski muka air turun akibat kemarau.",
  "date": "31 Agustus 2026",
  "image": "assets/img/pam-jaya-pastikan-air-baku-jatiluhur-aman-hingga-2026.jpg",
  "imageV": "mthi40cc",
  "tags": [
   "PAM JAYA",
   "Waduk Jatiluhur",
   "air baku",
   "kemarau"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463962-hadapi-musim-kemarau-pam-jaya-pastikan-air-baku-dari-waduk-jatiluhur-aman-hingga-akhir-2026"
 },
 {
  "slug": "scaleocean-rilis-erp-atlas-yang-ikuti-alur-kerja-industri",
  "category": "Teknologi",
  "title": "ScaleOcean Rilis ERP [Atlas] yang Ikuti Alur Kerja Industri",
  "deck": "ScaleOcean meluncurkan Atlas, platform ERP yang dikonfigurasi mengikuti alur kerja masing-masing industri seperti manufaktur, distribusi, logistik, dan konstruksi, alih-alih memakai template baku.",
  "date": "31 Agustus 2026",
  "image": "assets/img/scaleocean-rilis-erp-atlas-yang-ikuti-alur-kerja-industri.jpg",
  "imageV": "mthi40w2",
  "tags": [
   "ScaleOcean",
   "ERP",
   "software bisnis",
   "digitalisasi industri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463961-scaleocean-meluncurkan-scaleocean-atlas-erp-yang-mengikuti-cara-kerja-setiap-industri"
 },
 {
  "slug": "laba-dooh-melonjak-9-5-kali-ditopang-pos-nonoperasional",
  "category": "Aksi Korporasi",
  "title": "Laba DOOH [Melonjak] 9,5 Kali, Ditopang Pos Nonoperasional",
  "deck": "Laba bersih DOOH naik jadi Rp63,3 miliar pada semester I 2026, tapi operasi inti justru merugi Rp12,7 miliar akibat beban pokok pendapatan yang melonjak.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "laporan keuangan",
   "Era Media Sejahtera",
   "pelepasan anak usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831215015-64248-0/FinancialStatement-2026-II-DOOH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ri-mulai-ekspor-beras-perdana-ke-malaysia",
  "category": "Makroekonomi",
  "title": "RI Mulai [Ekspor] Beras Perdana ke Malaysia",
  "deck": "Indonesia mengirim 1.000 ton beras premium perdana ke Malaysia, dengan potensi diperluas hingga 200.000 ton senilai Rp3,4 triliun.",
  "date": "31 Agustus 2026",
  "image": "assets/img/ri-mulai-ekspor-beras-perdana-ke-malaysia.jpg",
  "imageV": "mthi41ae",
  "tags": [
   "ekspor beras",
   "Malaysia",
   "ketahanan pangan",
   "Bakom"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463957-ri-ekspor-beras-perdana-ke-malaysia-qodari-beberkan-nilai-fantastis-indonesia-semakin-berdaulat-dalam-pangan"
 },
 {
  "slug": "untr-laba-semester-i-2026-anjlok-91-persen-jadi-rp742-miliar",
  "category": "Aksi Korporasi",
  "title": "UNTR: Laba Semester I 2026 [Anjlok] 91 Persen jadi Rp742 Miliar",
  "deck": "United Tractors membukukan laba bersih Rp742 miliar pada semester I 2026, anjlok dari Rp8,37 triliun tahun lalu akibat kerugian penurunan nilai investasi.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTR",
   "laba bersih",
   "laporan keuangan",
   "United Tractors"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831213953-64286-0/FinancialStatement-2026-II-UNTR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smcb-bukukan-laba-naik-4-3-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SMCB Bukukan Laba [Naik] 4,3% di Semester I 2026",
  "deck": "Pendapatan Solusi Bangun Indonesia naik 10,6 persen jadi Rp5,50 triliun di semester I 2026, tapi laba operasi inti tergerus lonjakan beban distribusi 44 persen sebelum bunga bank turun.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "laporan keuangan",
   "industri semen",
   "Solusi Bangun Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831205924-64263-0/FinancialStatement-2026-II-SMCB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kmds-tegaskan-tak-ada-info-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "KMDS Tegaskan Tak Ada Info Material di Balik [Volatilitas] Saham",
  "deck": "Bursa Efek Indonesia meminta penjelasan atas volatilitas transaksi saham KMDS. Manajemen menjawab tidak ada informasi atau rencana korporasi material yang belum diungkapkan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KMDS",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7937a4ea43_66711afe97.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-koreksi-laporan-keuangan-ekuitas-negatif-rp449-juta",
  "category": "Aksi Korporasi",
  "title": "CASH koreksi laporan keuangan, ekuitas [negatif] Rp449 juta",
  "deck": "Cashlez merevisi laporan keuangan audited 2025, mengungkap rugi Rp56,6 miliar dan ekuitas negatif Rp449,5 juta akibat liabilitas yang melonjak 86 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "Cashlez Worldwide Indonesia",
   "laporan keuangan",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202508/20260831203125-64344-0/FinancialStatement-2025-Tahunan-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "obmd-bukukan-rugi-operasi-meski-laba-bersih-masih-positif",
  "category": "Aksi Korporasi",
  "title": "OBMD Bukukan [Rugi Operasi] Meski Laba Bersih Masih Positif",
  "deck": "Penjualan OBM Drilchem anjlok 46 persen pada semester I 2026 hingga usaha intinya merugi, laba bersih hanya tertolong pendapatan di luar usaha utama.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OBMD",
   "laporan keuangan",
   "kinerja emiten",
   "arus kas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831203249-64317-0/FinancialStatement-2026-II-OBMD.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sanf-direktur-baru-efektif-presiden-komisaris-tunggu-fpt",
  "category": "Aksi Korporasi",
  "title": "SANF: Direktur Baru Efektif, Presiden Komisaris [Tunggu FPT]",
  "deck": "Perusahaan pembiayaan SANF menegaskan pengangkatan Maria Inawati Bernard sebagai Direktur telah efektif, sementara dua pejabat komisaris masih menunggu kelulusan uji kepatutan OJK.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SANF",
   "pergantian direksi",
   "komisaris",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/270835f938_1f35aedc02.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "summarecon-gelar-festival-kuliner-serentak-di-4-kota",
  "category": "UMKM",
  "title": "Summarecon Gelar Festival Kuliner [Serentak] di 4 Kota",
  "deck": "Summarecon menggelar festival kuliner serentak di Kelapa Gading, Serpong, Bekasi, dan Bandung pada Agustus-September 2026, meneruskan tradisi 22 tahun yang juga jadi ajang bagi pelaku UMKM.",
  "date": "31 Agustus 2026",
  "image": "assets/img/summarecon-gelar-festival-kuliner-serentak-di-4-kota.jpg",
  "imageV": "mthi41p7",
  "tags": [
   "Summarecon",
   "Festival Kuliner",
   "UMKM",
   "Bekasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463944-22-tahun-merawat-rasa-festival-kuliner-summarecon-hadir-serentak-di-empat-kota"
 },
 {
  "slug": "silo-gelar-rupslb-akuisisi-rumah-sakit-senilai-rp6-9-triliun",
  "category": "Aksi Korporasi",
  "title": "SILO Gelar RUPSLB, [Akuisisi] Rumah Sakit Senilai Rp6,9 Triliun",
  "deck": "SILO memanggil RUPSLB 22 September 2026 untuk meminta persetujuan akuisisi rumah sakit senilai hingga Rp9 triliun dan penjaminan aset sebagai jaminan pendanaan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SILO",
   "RUPSLB",
   "akuisisi rumah sakit",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2b6aa49c2f_92876f9bdf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pool-tunda-rupslb-agendakan-audit-empat-tahun-sekaligus",
  "category": "Aksi Korporasi",
  "title": "POOL Tunda RUPSLB, Agendakan Audit [Empat Tahun] Sekaligus",
  "deck": "Pool Advista Indonesia (POOL) menggeser RUPSLB dari 3 menjadi 22 September 2026, dengan agenda penunjukan akuntan publik untuk mengaudit laporan keuangan empat tahun buku sekaligus, 2023-2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "POOL",
   "RUPSLB",
   "audit laporan keuangan",
   "Pool Advista"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/366a2f7e34_13edbdddf7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-tegaskan-tak-ada-informasi-material-di-balik-gejolak-saham",
  "category": "Aksi Korporasi",
  "title": "TOWR Tegaskan Tak Ada [Informasi Material] di Balik Gejolak Saham",
  "deck": "Sarana Menara Nusantara menjawab permintaan penjelasan BEI atas volatilitas transaksi saham TOWR, menyatakan tidak ada informasi material yang belum diungkapkan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a14e65995f_cbc9b8eadd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "soho-rombak-direksi-harry-salam-jadi-presiden-direktur",
  "category": "Aksi Korporasi",
  "title": "SOHO Rombak [Direksi], Harry Salam Jadi Presiden Direktur",
  "deck": "RUPSLB SOHO menyetujui Ery Yunasri turun dari Presiden Direktur ke Komisaris, digantikan Harry Salam yang sebelumnya Komisaris Independen, efektif 31 Agustus 2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SOHO",
   "Direksi",
   "Komisaris",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/534bf1e89d_47fb92c447.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wbsa-laba-semester-i-anjlok-95-saham-beredar-naik-26",
  "category": "Aksi Korporasi",
  "title": "WBSA: Laba Semester I [Anjlok] 95%, Saham Beredar Naik 26%",
  "deck": "Laba bersih WBSA anjlok 95 persen menjadi Rp1,02 miliar pada semester I 2026 meski pendapatan naik, sementara saham beredar bertambah 26 persen usai penggabungan entitas anak.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WBSA",
   "laporan keuangan",
   "laba bersih",
   "penggabungan usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/63cb3f2c6d_e456a28f84.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-solution-bidik-ekspansi-b2b-ict-ke-asia-pasifik",
  "category": "BUMN",
  "title": "Telkom Solution [Bidik] Ekspansi B2B ICT ke Asia Pasifik",
  "deck": "Telkom Solution memperkuat layanan B2B ICT terintegrasi, dari konektivitas hingga AI, untuk menyasar pelanggan korporat dan memperluas bisnis ke kawasan Asia Pasifik.",
  "date": "31 Agustus 2026",
  "image": "assets/img/telkom-solution-bidik-ekspansi-b2b-ict-ke-asia-pasifik.jpg",
  "imageV": "mthi424e",
  "tags": [
   "Telkom",
   "AI",
   "Teknologi",
   "Enterprise"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463938-telkom-solution-terus-perkuat-b2b-ict-bidik-pertumbuhan-bisnis-enterprise-di-kawasan-asia-pasifik"
 },
 {
  "slug": "meds-jelaskan-ke-bursa-soal-kas-menyusut-67-persen-semester-i",
  "category": "Aksi Korporasi",
  "title": "MEDS jelaskan ke bursa soal [kas] menyusut 67 persen semester I",
  "deck": "Hetzer Medical Indonesia menjawab permintaan penjelasan BEI soal koreksi laporan keuangan kuartal I 2026 dan kas yang turun dari Rp779,02 juta menjadi Rp252,69 juta per Juni 2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDS",
   "keterbukaan informasi",
   "laporan keuangan",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/137fe4c670_e8c2685589.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smbr-laba-semester-i-2026-anjlok-72-jadi-rp21-2-miliar",
  "category": "Aksi Korporasi",
  "title": "SMBR: Laba Semester I 2026 [Anjlok] 72% Jadi Rp21,2 Miliar",
  "deck": "Laba bersih PT Semen Baturaja turun 72,4 persen menjadi Rp21,2 miliar pada semester I 2026, sementara pendapatan hanya turun 12,2 persen akibat kenaikan beban penjualan dan tekanan margin.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMBR",
   "Semen Baturaja",
   "laporan keuangan",
   "BUMN"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831182144-64342-0/FinancialStatement-2026-II-SMBR.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-turun-tipis-ke-6-509-77-bank-besar-justru-menguat",
  "category": "Pasar Modal",
  "title": "IHSG [Turun] Tipis ke 6.509,77, Bank Besar Justru Menguat",
  "deck": "IHSG ditutup melemah 0,13 persen ke 6.509,77 mengekor bursa Wall Street yang tertekan, tapi saham BBCA, BMRI, dan BBRI justru naik.",
  "date": "31 Agustus 2026",
  "image": "assets/img/ihsg-turun-tipis-ke-6-509-77-bank-besar-justru-menguat.jpg",
  "imageV": "mthi42m8",
  "tags": [
   "IHSG",
   "BBCA",
   "Bursa Saham",
   "Bank Besar"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463905-ihsg-ditutup-merah-di-650977-saham-bank-besar-bergerak-beragam"
 },
 {
  "slug": "telkom-akses-kerahkan-150-teknisi-pulihkan-jaringan-ntt",
  "category": "BUMN",
  "title": "Telkom Akses Kerahkan [150] Teknisi Pulihkan Jaringan NTT",
  "deck": "Pascagempa NTT, Telkom Akses menurunkan lebih dari 150 teknisi dan memulihkan jaringan telekomunikasi penuh dalam tiga hari di tengah medan rawan longsor.",
  "date": "31 Agustus 2026",
  "image": "assets/img/telkom-akses-kerahkan-150-teknisi-pulihkan-jaringan-ntt.jpg",
  "imageV": "mthi430y",
  "tags": [
   "Telkom Akses",
   "TelkomGroup",
   "Gempa NTT",
   "Pemulihan Jaringan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463903-telkom-akses-terjunkan-150-teknisi-untuk-pulihkan-jaringan-pascagempa-ntt-layanan-siaga-24-jam"
 },
 {
  "slug": "bi-dan-singapura-aktifkan-transaksi-rupiah-dolar-singapura",
  "category": "Moneter",
  "title": "BI dan Singapura [Aktifkan] Transaksi Rupiah-Dolar Singapura",
  "deck": "Bank Indonesia dan otoritas moneter Singapura mulai menjalankan skema penyelesaian transaksi bilateral memakai rupiah dan dolar Singapura langsung, mulai 31 Agustus 2026.",
  "date": "31 Agustus 2026",
  "image": "assets/img/bi-dan-singapura-aktifkan-transaksi-rupiah-dolar-singapura.jpg",
  "imageV": "mth1cpu4",
  "tags": [
   "Bank Indonesia",
   "MAS Singapura",
   "Transaksi Mata Uang Lokal",
   "Rupiah"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2817526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "kejagung-sita-rp401-m-dalam-kasus-korupsi-nikel-cni",
  "category": "Energi",
  "title": "Kejagung [Sita] Rp401 M dalam Kasus Korupsi Nikel CNI",
  "deck": "Penyidik Kejagung memeriksa 116 saksi dan 3 ahli, menyita 143 dokumen, serta mengamankan uang Rp401,65 miliar dalam kasus tata kelola nikel PT CNI.",
  "date": "31 Agustus 2026",
  "image": "assets/img/kejagung-sita-rp401-m-dalam-kasus-korupsi-nikel-cni.jpg",
  "imageV": "mthi447v",
  "tags": [
   "Kejagung",
   "PT CNI",
   "korupsi nikel",
   "Sulawesi Tenggara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463901-kejagung-periksa-116-saksi-dan-3-ahli-di-kasus-dugaan-korupsi-tata-kelola-nikel-pt-cni"
 },
 {
  "slug": "anggaran-kemhan-2027-naik-jadi-rp189-triliun",
  "category": "Makroekonomi",
  "title": "Anggaran Kemhan 2027 Naik Jadi [Rp189 Triliun]",
  "deck": "Komisi I DPR mengungkap anggaran Kementerian Pertahanan untuk 2027 naik menjadi Rp189 triliun, bertambah Rp50 triliun dari pagu indikatif sebelumnya.",
  "date": "31 Agustus 2026",
  "image": "assets/img/anggaran-kemhan-2027-naik-jadi-rp189-triliun.jpg",
  "imageV": "mth1cqi3",
  "tags": [
   "Kemhan",
   "APBN 2027",
   "Anggaran Pertahanan",
   "DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463891-komisi-i-dpr-ungkap-kemhan-dapat-anggaran-rp189-triliun-di-2027"
 },
 {
  "slug": "kejagung-bongkar-dugaan-manipulasi-ekspor-nikel-pt-cni",
  "category": "Industri",
  "title": "Kejagung Bongkar Dugaan [Manipulasi] Ekspor Nikel PT CNI",
  "deck": "Kejaksaan Agung menyita Rp401,65 miliar diduga hasil manipulasi dokumen dan kadar ekspor nikel PT CNI periode 2017-2020.",
  "date": "31 Agustus 2026",
  "image": "assets/img/kejagung-bongkar-dugaan-manipulasi-ekspor-nikel-pt-cni.jpg",
  "imageV": "mth1cqyf",
  "tags": [
   "Kejagung",
   "PT CNI",
   "Ekspor Nikel",
   "Korupsi Tambang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463876-kejagung-ungkap-pt-cni-diduga-manipulasi-dokumen-ekspor-komoditas-nikel"
 },
 {
  "slug": "presiden-prabowo-janji-pinjaman-lunak-ganti-rentenir",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo Janji [Pinjaman Lunak] Ganti Rentenir",
  "deck": "Presiden Prabowo Subianto menjanjikan pinjaman lunak dari sumber daya dalam negeri agar masyarakat tidak lagi bergantung pada rentenir, namun mekanisme dan jadwalnya belum diumumkan.",
  "date": "31 Agustus 2026",
  "image": "assets/img/presiden-prabowo-janji-pinjaman-lunak-ganti-rentenir.jpg",
  "imageV": "mth1crd7",
  "tags": [
   "pinjaman lunak",
   "rentenir",
   "kesejahteraan rakyat",
   "kemiskinan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463868-prabowo-siapkan-pinjaman-lunak-untuk-rakyat-tak-perlu-lagi-berutang-ke-rentenir"
 },
 {
  "slug": "dpr-panggil-menkeu-cs-bahas-target-ekonomi-6-2027",
  "category": "Makroekonomi",
  "title": "DPR Panggil Menkeu Cs Bahas Target Ekonomi [6%] 2027",
  "deck": "DPR memanggil lima pejabat ekonomi kunci untuk membahas sinergi kebijakan menuju target pertumbuhan 6 persen dan investasi Rp1.200 triliun pada 2027.",
  "date": "31 Agustus 2026",
  "image": "assets/img/dpr-panggil-menkeu-cs-bahas-target-ekonomi-6-2027.jpg",
  "imageV": "mth1crsz",
  "tags": [
   "DPR",
   "APBN 2027",
   "pertumbuhan ekonomi",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463851-bos-bos-keuangan-dipanggil-dpr-hari-ini-bahas-target-ekonomi-6-dan-investasi-rp1200-triliun"
 },
 {
  "slug": "danantara-siapkan-rp456-miliar-untuk-proyek-lrt-city",
  "category": "BUMN",
  "title": "Danantara Siapkan [Rp456 Miliar] untuk Proyek LRT City",
  "deck": "Danantara dan Adhi Karya menyusun skema percepatan penyelesaian proyek hunian LRT City yang berdampak pada 2.400 konsumen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/danantara-siapkan-rp456-miliar-untuk-proyek-lrt-city.jpg",
  "imageV": "mth1cs6v",
  "tags": [
   "danantara",
   "lrt city",
   "adhi karya",
   "adcp"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463845-danantara-siapkan-rp456-miliar-proyek-lrt-city-dikebut-demi-2400-konsumen"
 },
 {
  "slug": "dolar-as-kembali-perkasa-yen-dekati-160",
  "category": "Global",
  "title": "Dolar AS Kembali [Perkasa], Yen Dekati 160",
  "deck": "Yen mendekati 160 per dolar dan harga minyak melonjak akibat konflik AS-Iran, sementara peluang kenaikan bunga Fed naik ke 57 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/dolar-as-kembali-perkasa-yen-dekati-160.jpg",
  "imageV": "mth1csm7",
  "tags": [
   "dolar AS",
   "yen jepang",
   "harga minyak",
   "suku bunga Fed"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463828-dolar-as-kembali-jadi-raja-yen-tertekan-dekati-160-dan-harga-minyak-melesat"
 },
 {
  "slug": "harga-emas-pegadaian-antam-termahal-rp2-71-juta-gram",
  "category": "Bisnis",
  "title": "Harga Emas Pegadaian: Antam [Termahal] Rp2,71 Juta/Gram",
  "deck": "Harga emas Antam, UBS, dan Galeri24 di Pegadaian pada Senin (31/8/2026) berkisar Rp2,6 juta per gram, dengan Antam jadi yang termahal dan Galeri24 termurah.",
  "date": "31 Agustus 2026",
  "image": "assets/img/harga-emas-pegadaian-antam-termahal-rp2-71-juta-gram.jpg",
  "imageV": "mtgux8qt",
  "tags": [
   "harga emas",
   "Antam",
   "Galeri24",
   "Pegadaian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463820-harga-emas-pegadaian-senin-31-agustus-2026-antam-ubs-galeri24-lengkap"
 },
 {
  "slug": "rupiah-tembus-rp17-750-usai-the-fed-sinyalkan-kenaikan-bunga",
  "category": "Moneter",
  "title": "Rupiah [Tembus] Rp17.750 usai The Fed Sinyalkan Kenaikan Bunga",
  "deck": "Rupiah dibuka melemah 0,32 persen ke Rp17.750 per dolar AS pada Senin pagi, menyusul penguatan dolar AS setelah Ketua The Fed Kevin Warsh membuka peluang kenaikan suku bunga.",
  "date": "31 Agustus 2026",
  "image": "assets/img/rupiah-kurs.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "The Fed",
   "suku bunga"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463786-rupiah-awali-pekan-di-zona-merah-tembus-rp17750-per-dolar-as"
 },
 {
  "slug": "minyak-dunia-tembus-us-90-usai-as-serang-iran-di-hormuz",
  "category": "Energi",
  "title": "Minyak Dunia [Tembus] US$90 usai AS Serang Iran di Hormuz",
  "deck": "Harga minyak Brent dan WTI melonjak lebih dari 2 persen setelah AS menyerang peluncur Iran di Selat Hormuz, memicu kekhawatiran gangguan pasokan minyak dunia.",
  "date": "31 Agustus 2026",
  "image": "assets/img/minyak-dunia-tembus-us-90-usai-as-serang-iran-di-hormuz.jpg",
  "imageV": "mtgsk6xj",
  "tags": [
   "harga minyak dunia",
   "selat hormuz",
   "serangan as iran",
   "harga minyak brent"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463783-harga-minyak-dunia-mendadak-tembus-us90-serangan-as-ke-iran-bikin-pasar-ketar-ketir"
 },
 {
  "slug": "life-tanggapi-bursa-ungkap-progres-spin-off-unit-syariah-ke-ojk",
  "category": "Aksi Korporasi",
  "title": "LIFE Tanggapi Bursa, Ungkap Progres [Spin-off] Unit Syariah ke OJK",
  "deck": "MSIG Life Insurance Indonesia menyatakan tidak ada informasi material di balik volatilitas sahamnya, namun mengungkap proses pengalihan portofolio unit syariah dan sikap pemegang saham pengendali.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "MSIG Life Insurance",
   "spin-off syariah",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1f17cc6b7e_c944a3305b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-utang-bank-jangka-pendek-melonjak-509-laba-naik-43",
  "category": "Aksi Korporasi",
  "title": "DEWI: Utang Bank [Jangka Pendek] Melonjak 509%, Laba Naik 43%",
  "deck": "Total liabilitas DEWI naik 64,4 persen dalam enam bulan karena utang bank jangka pendek melonjak dan utang jangka panjang lunas, sementara penjualan dan laba naik lebih dari 40 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "laporan keuangan",
   "utang bank",
   "peternakan ayam"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260831042919-64274-0/FinancialStatement-2026-II-DEWI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bwpt-kaji-bagi-dividen-usai-kuasi-reorganisasi-rampung",
  "category": "Aksi Korporasi",
  "title": "BWPT Kaji Bagi [Dividen] Usai Kuasi Reorganisasi Rampung",
  "deck": "Eagle High Plantations memaparkan hasil public expose insidentil, termasuk rencana dividen, peringkat kredit baru, dan target perluasan kebun plasma hingga 2030.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BWPT",
   "dividen",
   "kuasi reorganisasi",
   "kelapa sawit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8688c1653b_18d856259c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "auto-asii-ajukan-tender-sukarela-beli-saham-rp3-600",
  "category": "Aksi Korporasi",
  "title": "AUTO: ASII Ajukan [Tender Sukarela] Beli Saham Rp3.600",
  "deck": "ASII, pemegang 80% saham Astra Otoparts, menawarkan tender sukarela membeli hingga 238,4 juta saham publik (4,95%) di harga Rp3.600 per saham.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AUTO",
   "ASII",
   "tender sukarela",
   "Astra Otoparts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/84f1333bdc_b7d35f61d7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jsky-laporkan-progres-pemulihan-baru-bayar-utang-13",
  "category": "Aksi Korporasi",
  "title": "JSKY Laporkan Progres Pemulihan, Baru Bayar Utang [13%]",
  "deck": "Sky Energy Indonesia melaporkan progres pemulihan penyebab suspensi ke BEI, termasuk negosiasi akhir skema cessie dengan calon investor dan pembayaran utang homologasi yang baru mencapai 13 persen.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JSKY",
   "suspensi saham",
   "PKPU",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3673ee6471_91127fc21c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-tawarkan-obligasi-dan-sukuk-baru-rp3-5-triliun",
  "category": "Aksi Korporasi",
  "title": "INKP Tawarkan Obligasi dan Sukuk Baru [Rp3,5 Triliun]",
  "deck": "Indah Kiat Pulp & Paper merilis rincian penawaran obligasi, sukuk mudharabah, dan obligasi dolar tahap baru dengan total target Rp3,5 triliun plus US$25 juta.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INKP",
   "obligasi korporasi",
   "sukuk mudharabah",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c62198c777_37d63da294.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "admf-komisaris-theresia-widjaja-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "ADMF: Komisaris Theresia Widjaja Ajukan [Pengunduran Diri]",
  "deck": "Komisaris ADMF, Theresia Adriana Widjaja, mengajukan pengunduran diri lewat surat tertanggal 28 Agustus 2026. Keputusan final soal jabatannya akan diambil dalam RUPS.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADMF",
   "Komisaris",
   "RUPS",
   "Adira Dinamika Multi Finance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0f3a0fa10c_61783c22cc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asii-ajukan-tender-sukarela-beli-saham-auto-rp858-4-m",
  "category": "Aksi Korporasi",
  "title": "ASII Ajukan [Tender] Sukarela Beli Saham AUTO Rp858,4 M",
  "deck": "ASII mengajukan penawaran tender sukarela untuk membeli hingga 4,947% saham AUTO senilai maksimum Rp858,4 miliar, menambah kepemilikannya menjadi 84,947%.",
  "date": "31 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASII",
   "AUTO",
   "tender sukarela",
   "Astra Otoparts"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/38b75aa4c8_8b716ca046.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "backlog-rumah-turun-ke-12-39-persen-masih-9-29-juta-keluarga",
  "category": "Makroekonomi",
  "title": "Backlog Rumah Turun ke [12,39] Persen, Masih 9,29 Juta Keluarga",
  "deck": "BPS mencatat penurunan angka backlog perumahan pada 2026, tapi 9,29 juta keluarga masih belum punya rumah sendiri dan 18,01 juta keluarga menghuni rumah tak layak.",
  "date": "31 Agustus 2026",
  "image": "assets/img/konstruksi-perumahan.jpg",
  "tags": [
   "backlog perumahan",
   "BPS",
   "rumah layak huni",
   "perumahan"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2651",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "mind-id-dorong-hilirisasi-tambang-untuk-perkuat-ekonomi-ri",
  "category": "Industri",
  "title": "MIND ID Dorong Hilirisasi Tambang untuk [Perkuat] Ekonomi RI",
  "deck": "MIND ID menyebut pengolahan mineral dan batu bara di dalam negeri jadi fondasi penguatan ekonomi nasional, didukung penguasaan sekitar 42 persen cadangan nikel dunia.",
  "date": "30 Agustus 2026",
  "image": "assets/img/mind-id-dorong-hilirisasi-tambang-untuk-perkuat-ekonomi-ri.jpg",
  "imageV": "mtg55uum",
  "tags": [
   "MIND ID",
   "hilirisasi",
   "mineral",
   "batu bara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463719-industrialisasi-pertambangan-jadi-modal-perkuat-ekonomi-nasional-indonesia"
 },
 {
  "slug": "winr-pemegang-saham-lepas-16-25-juta-lembar-saham",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang saham lepas [16,25 juta] lembar saham",
  "deck": "Pemenang Nusantara Internasional menjual 16,25 juta saham WINR pada 21 Agustus 2026, hak suaranya turun tipis dari 49,36% menjadi 49,05%.",
  "date": "30 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "pemegang saham",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-30082026-0878-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lpdb-puji-ksp-balo-ta-dampingi-40-kdkmp-di-toraja",
  "category": "UMKM",
  "title": "LPDB Puji KSP Balo'ta, [Dampingi] 40 KDKMP di Toraja",
  "deck": "LPDB Koperasi memuji rekam jejak KSP Balo'ta di Tana Toraja yang tak pernah gagal bayar dan kini mendampingi 40 koperasi desa Merah Putih di wilayah itu.",
  "date": "30 Agustus 2026",
  "image": "assets/img/lpdb-puji-ksp-balo-ta-dampingi-40-kdkmp-di-toraja.jpg",
  "imageV": "mtfwf9ix",
  "tags": [
   "LPDB Koperasi",
   "KSP Balo'ta",
   "Koperasi Merah Putih",
   "Tana Toraja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463695-lpdb-koperasi-apresiasi-ksp-balota-dampingi-40-kdkmp-di-tana-toraja"
 },
 {
  "slug": "rupiah-berpeluang-ke-rp17-900-inflasi-jadi-penentu-pekan-depan",
  "category": "Moneter",
  "title": "Rupiah Berpeluang ke Rp17.900, [Inflasi] Jadi Penentu Pekan Depan",
  "deck": "Rupiah diproyeksi bergerak di rentang Rp17.600 hingga Rp17.900 per dolar AS pekan depan, menanti rilis data inflasi dan neraca perdagangan Juli.",
  "date": "30 Agustus 2026",
  "image": "assets/img/rupiah-berpeluang-ke-rp17-900-inflasi-jadi-penentu-pekan-depan.jpg",
  "imageV": "mtfwfa5y",
  "tags": [
   "rupiah",
   "dolar AS",
   "inflasi",
   "kurs"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463690-rupiah-bisa-tembus-rp17900-per-dolar-as-pekan-depan-inflasi-dan-the-fed-jadi-penentu"
 },
 {
  "slug": "harga-emas-antam-diproyeksi-tertahan-meski-emas-dunia-bergejolak",
  "category": "Pasar Modal",
  "title": "Harga Emas Antam Diproyeksi [Tertahan] Meski Emas Dunia Bergejolak",
  "deck": "Analis memperkirakan emas dunia bergerak antara US$4.262 dan US$4.682 per troy ounce pekan ini, sementara ruang koreksi emas Antam dinilai terbatas.",
  "date": "30 Agustus 2026",
  "image": "assets/img/harga-emas-antam-diproyeksi-tertahan-meski-emas-dunia-bergejolak.jpg",
  "imageV": "mtfwfate",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "kurs rupiah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463683-gonjang-ganjing-harga-emas-dunia-antam-berpotensi-melonjak-ke-rp281-juta-per-gram"
 },
 {
  "slug": "crab-laba-semester-i-turun-53-utang-bank-naik-168",
  "category": "Aksi Korporasi",
  "title": "CRAB: Laba Semester I Turun 53%, [Utang] Bank Naik 168%",
  "deck": "Laba bersih Toba Surimi turun dari Rp8,43 miliar jadi Rp3,94 miliar pada semester I 2026, tertekan beban bunga yang melonjak seiring liabilitas naik 167,91 persen.",
  "date": "30 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "laporan keuangan interim",
   "beban bunga",
   "utang bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260830180329-64318-0/FinancialStatement-2026-II-CRAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ai-bantu-nelayan-cilacap-prediksi-ikan-dan-cuaca",
  "category": "Teknologi",
  "title": "[AI] Bantu Nelayan Cilacap Prediksi Ikan dan Cuaca",
  "deck": "Aplikasi Iwak pakai AI dan data satelit membantu nelayan Cilacap menentukan waktu melaut, menekan kerugian dan menaikkan pendapatan hingga 68 persen.",
  "date": "30 Agustus 2026",
  "image": "assets/img/ai-bantu-nelayan-cilacap-prediksi-ikan-dan-cuaca.jpg",
  "imageV": "mtfwfbge",
  "tags": [
   "AI",
   "nelayan",
   "Pertamina",
   "Desa Energi Berdikari"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463659-ai-bantu-nelayan-cilacap-membaca-laut-sebelum-berlayar-iwak-beri-informasi-cuaca-hingga-titik-ikan"
 },
 {
  "slug": "crab-laba-anjlok-76-utang-bank-melonjak-di-kuartal-i",
  "category": "Aksi Korporasi",
  "title": "CRAB: Laba Anjlok 76%, [Utang] Bank Melonjak di Kuartal I",
  "deck": "Penjualan dan laba CRAB turun tajam pada kuartal I 2026, sementara utang bank jangka pendek melonjak dan laporan disampaikan telat dari tenggatnya.",
  "date": "30 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "laporan keuangan",
   "kuartal I 2026",
   "Toba Surimi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260830141856-64298-0/FinancialStatement-2026-I-CRAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aturan-baru-dhe-sda-berlaku-1-september-ini-kriterianya",
  "category": "Moneter",
  "title": "Aturan [Baru] DHE SDA Berlaku 1 September, Ini Kriterianya",
  "deck": "Pemerintah menetapkan lima negara mitra dan kriteria eksportir tambang yang berhak memakai skema khusus devisa hasil ekspor SDA mulai 1 September 2026.",
  "date": "30 Agustus 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "DHE SDA",
   "Pasal 18A",
   "eksportir tambang",
   "bank devisa"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463543-dhe-sda-berubah-mulai-1-september-ini-5-negara-dan-15-bank-yang-masuk-skema-baru"
 },
 {
  "slug": "indodana-raih-penghargaan-fintech-berkat-kepatuhan-ojk",
  "category": "Teknologi",
  "title": "Indodana Raih [Penghargaan] Fintech Berkat Kepatuhan OJK",
  "deck": "Indodana Fintech meraih predikat perusahaan fintech terbaik di ajang Infobank Award 2026, menegaskan kepatuhan OJK dan manajemen risiko sebagai fondasi pembiayaan digital.",
  "date": "29 Agustus 2026",
  "image": "assets/img/indodana-raih-penghargaan-fintech-berkat-kepatuhan-ojk.jpg",
  "imageV": "mtenhg7j",
  "tags": [
   "fintech lending",
   "Indodana",
   "OJK",
   "manajemen risiko"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463538-indodana-fintech-dorong-pembiayaan-digital-yang-sehat-kepatuhan-ojk-jadi-kunci"
 },
 {
  "slug": "tiket-modinity-warehouse-sale-ludes-dalam-24-jam",
  "category": "Bisnis",
  "title": "Tiket Modinity Warehouse Sale [Ludes] dalam 24 Jam",
  "deck": "Tiket Modinity Warehouse Sale 2026 ludes kurang dari 24 jam. Acara meluas ke Indonesia dan Malaysia dengan batch kunjungan bertambah jadi 11 per hari.",
  "date": "29 Agustus 2026",
  "image": "assets/img/tiket-modinity-warehouse-sale-ludes-dalam-24-jam.jpg",
  "imageV": "mtenhgrc",
  "tags": [
   "warehouse sale",
   "belanja offline",
   "fesyen",
   "Modinity"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463528-gempuran-e-commerce-tak-menyurutkan-belanja-offline-konsumen-kembali-serbu-warehouse-sale"
 },
 {
  "slug": "rupiah-menguat-tekan-dolar-as-ke-rp17-693",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Tekan Dolar AS ke Rp17.693",
  "deck": "Dolar AS melemah 0,29% ke Rp17.693 pada perdagangan Sabtu, meski masih menguat 6,07% terhadap rupiah sepanjang 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/gedung-bi.jpg",
  "tags": [
   "rupiah",
   "dolar AS",
   "kurs rupiah",
   "nilai tukar"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463480-rupiah-balik-menekan-dolar-as-mata-uang-paman-sam-turun-ke-rp17693"
 },
 {
  "slug": "kisah-astuti-nasabah-mekaar-ubah-jamur-jadi-camilan",
  "category": "UMKM",
  "title": "Kisah Astuti, Nasabah Mekaar Ubah Jamur Jadi [Camilan]",
  "deck": "Astuti, nasabah pembiayaan ultra mikro PNM Mekaar, mengolah jamur tiram yang tak laku jual menjadi jamur krispi dan stik jamur agar tidak terbuang dan bernilai jual lebih tinggi.",
  "date": "29 Agustus 2026",
  "image": "assets/img/kisah-astuti-nasabah-mekaar-ubah-jamur-jadi-camilan.jpg",
  "imageV": "mtenhhbg",
  "tags": [
   "PNM Mekaar",
   "UMKM",
   "Jamur Tiram",
   "Pembiayaan Ultra Mikro"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463498-cerita-astuti-bangun-usaha-hingga-pimpin-bank-sampah-tak-ingin-jamur-terbuang"
 },
 {
  "slug": "winr-pemegang-saham-lepas-16-49-juta-saham-demi-free-float",
  "category": "Aksi Korporasi",
  "title": "WINR: Pemegang Saham Lepas 16,49 Juta Saham demi [Free Float]",
  "deck": "Pemegang saham nonpengendali WINR menjual 16,49 juta saham seharga Rp23 per lembar pada 20 Agustus 2026, hak suaranya turun tipis jadi 49,36 persen.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WINR",
   "kepemilikan saham",
   "free float",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29082026-4241-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "danantara-siapkan-141-ribu-rusun-subsidi-di-meikarta",
  "category": "BUMN",
  "title": "Danantara Siapkan [141 Ribu] Rusun Subsidi di Meikarta",
  "deck": "Danantara memamerkan dua tipe unit rusun subsidi untuk MBR di Meikarta, bagian dari rencana 141 ribu unit yang lahannya baru diterima sebagai hibah dari Kemenkeu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/danantara-siapkan-141-ribu-rusun-subsidi-di-meikarta.jpg",
  "imageV": "mtenhhth",
  "tags": [
   "rusun subsidi",
   "Danantara",
   "Meikarta",
   "MBR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463455-141-ribu-rusun-subsidi-disiapkan-di-meikarta-ini-dua-tipe-hunian-yang-dipamerkan-danantara"
 },
 {
  "slug": "mendag-cek-pasar-banyuwangi-ayam-mendekati-harga-acuan",
  "category": "Makroekonomi",
  "title": "Mendag Cek Pasar Banyuwangi, Ayam [Mendekati] Harga Acuan",
  "deck": "Menteri Perdagangan memantau harga pangan di Pasar Rogojampi, Banyuwangi. Ayam ras mendekati harga acuan, sementara telur dan bawang merah masih jauh di bawahnya.",
  "date": "29 Agustus 2026",
  "image": "assets/img/mendag-cek-pasar-banyuwangi-ayam-mendekati-harga-acuan.jpg",
  "imageV": "mtebq3d7",
  "tags": [
   "harga pangan",
   "Kemendag",
   "HET",
   "Banyuwangi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-pantau-pasar-rogojampi-tegaskan-upaya-pemerintah-jaga-keseimbangan-harga-pasar",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mendag-ajak-umkm-banyuwangi-ikut-program-ekspor-kemendag",
  "category": "UMKM",
  "title": "Mendag Ajak UMKM Banyuwangi Ikut Program [Ekspor] Kemendag",
  "deck": "Mendag Budi Santoso mengajak UMKM Banyuwangi memakai program ekspor Kemendag dan Trade Expo Indonesia, saat mengunjungi produsen furnitur bersertifikat legalitas kayu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/mendag-ajak-umkm-banyuwangi-ikut-program-ekspor-kemendag.jpg",
  "imageV": "mtebqlch",
  "tags": [
   "UMKM",
   "ekspor",
   "Kemendag",
   "Trade Expo Indonesia"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-ajak-umkm-banyuwangi-manfaatkan-program-pengembangan-ekspor-kemendag",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ri-cili-perluas-akses-pasar-cili-incar-impor-daging-sapi",
  "category": "Global",
  "title": "RI-Cili Perluas Akses Pasar, Cili Incar Impor [Daging] Sapi",
  "deck": "Indonesia dan Cili membahas perluasan akses pasar dua arah, dari produk olahan RI hingga daging sapi dan susu Cili, seiring pemanfaatan IC-CEPA yang naik pada 2025.",
  "date": "29 Agustus 2026",
  "image": "assets/img/ri-cili-perluas-akses-pasar-cili-incar-impor-daging-sapi.jpg",
  "imageV": "mtebqumu",
  "tags": [
   "IC-CEPA",
   "Indonesia-Cili",
   "ekspor kakao",
   "impor daging sapi"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/dorong-akses-pasar-dua-arah-kemendag-perkuat-perdagangan-indonesia-cili",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "tapg-direksi-jual-lagi-850-ribu-saham-dalam-sepekan",
  "category": "Aksi Korporasi",
  "title": "TAPG: Direksi [Jual] Lagi 850 Ribu Saham dalam Sepekan",
  "deck": "George Oetomo, direksi TAPG, melepas 850.000 saham pada 27 Agustus 2026, penjualan kedua dalam kurang dari dua pekan setelah pelepasan 2,35 juta saham sebelumnya.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "Triputra Agro Persada",
   "transaksi saham direksi",
   "divestasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-29082026-4500-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-delisting-saham-spusf-efektif-29-agustus-imbas-ojk",
  "category": "Aksi Korporasi",
  "title": "BEI [Delisting] Saham SPUSF Efektif 29 Agustus, Imbas OJK",
  "deck": "Bursa Efek Indonesia resmi mencabut pencatatan saham SPUSF mulai 29 Agustus 2026 atas perintah OJK, tanpa rincian alasan dalam pengumuman.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SPUSF",
   "delisting",
   "OJK",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_SPUSF_B006_0c8e56df-0554-4aae-82f1-78deee6b59e6-20260829174954.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ojk-usul-kepemilikan-asing-asuransi-naik-ke-99",
  "category": "Bisnis",
  "title": "OJK Usul Kepemilikan Asing Asuransi Naik ke [99%]",
  "deck": "OJK mengusulkan batas kepemilikan asing di perusahaan asuransi naik dari 80 persen menjadi 99 persen agar modalnya lebih kuat menanggung risiko besar, menyamakan aturan dengan perbankan.",
  "date": "29 Agustus 2026",
  "image": "assets/img/ojk-usul-kepemilikan-asing-asuransi-naik-ke-99.jpg",
  "imageV": "mtebqvfo",
  "tags": [
   "OJK",
   "asuransi",
   "kepemilikan asing",
   "modal asuransi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463412-ojk-dorong-kepemilikan-asing-di-asuransi-jadi-99-ini-alasan-di-balik-usulannya"
 },
 {
  "slug": "cara-cek-desil-bansos-online-pakai-nik",
  "category": "Makroekonomi",
  "title": "Cara Cek Desil Bansos Online Pakai [NIK]",
  "deck": "Masyarakat kini bisa mengecek dan memperbarui posisi desil bansos secara mandiri lewat situs Kemensos dan DTSEN BPS menggunakan NIK.",
  "date": "29 Agustus 2026",
  "image": "assets/img/bendungan.jpg",
  "tags": [
   "desil bansos",
   "DTSEN",
   "Kemensos",
   "NIK"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463406-mau-tahu-masuk-desil-bansos-berapa-begini-cara-cek-dan-perbarui-data-pakai-nik"
 },
 {
  "slug": "kur-kopdes-merah-putih-wajib-lolos-cek-kredit-dulu",
  "category": "Perbankan",
  "title": "KUR Kopdes Merah Putih [Wajib] Lolos Cek Kredit Dulu",
  "deck": "DPR meminta pencairan KUR untuk Kopdes Merah Putih tidak otomatis, pengurus koperasi wajib lolos pengecekan riwayat kredit SLIK OJK lebih dulu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/kur-kopdes-merah-putih-wajib-lolos-cek-kredit-dulu.jpg",
  "imageV": "mtebqwez",
  "tags": [
   "KUR",
   "Kopdes Merah Putih",
   "SLIK OJK",
   "BRI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463400-kur-kdkmp-jangan-asal-cair-dpr-tegaskan-pengurus-kopdes-merah-putih-wajib-lolos-slik-ojk"
 },
 {
  "slug": "xiif-bagikan-dividen-tunai-kik-cum-dividen-hari-ini",
  "category": "Aksi Korporasi",
  "title": "XIIF Bagikan [Dividen] Tunai KIK, Cum Dividen Hari Ini",
  "deck": "Pengelola KIK XIIF mengumumkan dividen tunai maksimum Rp81.723 per unit penyertaan, dengan pembayaran dijadwalkan 3 September 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XIIF",
   "dividen",
   "KIK",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_XIIF_E045_2f52d145-7fdd-4539-bda9-574adfab9dbd-20260829153852.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hkmu-reverse-stock-1-4-saham-beredar-susut-ke-12-978",
  "category": "Aksi Korporasi",
  "title": "HKMU Reverse Stock 1:4, Saham Beredar [Susut] ke 12.978",
  "deck": "RUPS HKMU menyetujui penggabungan saham dengan rasio 1:4, mengubah jumlah saham beredar dari 8.712.937 menjadi 12.978 lembar mulai 30 Agustus 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "reverse stock",
   "aksi korporasi",
   "penggabungan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_HKMU_E0X3_8663a346-fce7-48ab-b9f3-8ef3d194dbe6-20260829152845.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hkmu-rilis-rights-issue-dilusi-saham-lewat-hmetd-dan-waran",
  "category": "Aksi Korporasi",
  "title": "HKMU Rilis Rights Issue, [Dilusi] Saham Lewat HMETD dan Waran",
  "deck": "RUPS HKMU menyetujui penambahan modal lewat HMETD dengan rasio 1:4 harga Rp1.823, disertai penerbitan waran dan obligasi wajib konversi.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "rights issue",
   "HMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_HKMU_E0X3_db62d6da-bc3b-454a-b73b-6a763b5c7999-20260829152733.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kuki-catatkan-obligasi-rp1-miliar-bunga-10-persen",
  "category": "Aksi Korporasi",
  "title": "KUKI Catatkan [Obligasi] Rp1 Miliar Bunga 10 Persen",
  "deck": "BEI mulai mencatatkan Obligasi KUKI 2 2026 seri A senilai Rp1 miliar dengan bunga tetap 10 persen dan rating AA dari Pefindo, mulai 29 Agustus 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KUKI",
   "obligasi korporasi",
   "BEI",
   "pencatatan obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_KUKI_B011_korporasi_b2335fd2-0e32-437b-a4c0-5306dc55a4c2-20260829152631.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hkmu-ganti-komisaris-dan-direksi-kuorum-rups-cuma-23",
  "category": "Aksi Korporasi",
  "title": "HKMU Ganti [Komisaris] dan Direksi, Kuorum RUPS Cuma 23%",
  "deck": "RUPS Tahunan HKMU yang dihadiri 23% pemegang saham menyetujui pergantian susunan direksi dan komisaris dengan masa jabatan yang tercatat sangat singkat di dokumen resmi.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "RUPS",
   "Komisaris",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_HKMU_E013_15e9f9f1-db6b-4b61-8015-8d3f23b74549-20260829151921.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpr-desak-koreksi-data-bansos-dtsen-maksimal-14-hari",
  "category": "Makroekonomi",
  "title": "DPR Desak Koreksi Data Bansos [DTSEN] Maksimal 14 Hari",
  "deck": "DPR meminta pemerintah membatasi waktu koreksi DTSEN maksimal 14 hari kerja agar status desil tak lagi jadi satu-satunya penentu penerima bansos.",
  "date": "29 Agustus 2026",
  "image": "assets/img/dpr-desak-koreksi-data-bansos-dtsen-maksimal-14-hari.jpg",
  "imageV": "mtebqx85",
  "tags": [
   "DTSEN",
   "bansos",
   "DPR",
   "desil"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463397-dpr-desak-koreksi-dtsen-maksimal-14-hari-kerja-desil-tak-boleh-jadi-hakim-tunggal-penerima-bansos"
 },
 {
  "slug": "crab-liabilitas-toba-surimi-turun-38-75-ekuitas-naik",
  "category": "Aksi Korporasi",
  "title": "CRAB: Liabilitas Toba Surimi Turun 38,75%, [Ekuitas] Naik",
  "deck": "Laporan keuangan tahunan CRAB mencatat total liabilitas turun 38,75 persen jadi Rp46,74 miliar, membuat ekuitas perusahaan naik sekitar Rp19,4 miliar.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CRAB",
   "Toba Surimi Industries",
   "laporan keuangan",
   "liabilitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202508/20260829122655-62602-0/FinancialStatement-2025-Tahunan-CRAB.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plts-atap-surabaya-kurangi-715-ton-emisi-karbon",
  "category": "Energi",
  "title": "PLTS Atap Surabaya Kurangi [715] Ton Emisi Karbon",
  "deck": "PLTS atap 586,95 kWp di Ciputra World Surabaya beroperasi, diproyeksikan hasilkan 795 MWh listrik dan tekan 715 ton emisi karbon pada tahun pertama.",
  "date": "29 Agustus 2026",
  "image": "assets/img/plts-atap-surabaya-kurangi-715-ton-emisi-karbon.jpg",
  "imageV": "mtebqxyg",
  "tags": [
   "PLTS Atap",
   "Surabaya",
   "Energi Terbarukan",
   "Zero-CAPEX"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463362-plts-atap-di-surabaya-kurangi-715-ton-emisi-karbon-setara-penanaman-15897-pohon"
 },
 {
  "slug": "bei-catat-7-perusahaan-antre-ipo-mayoritas-kesehatan",
  "category": "Pasar Modal",
  "title": "BEI Catat [7] Perusahaan Antre IPO, Mayoritas Kesehatan",
  "deck": "BEI mencatat tujuh perusahaan masih mengantre pencatatan saham hingga 28 Agustus 2026, didominasi sektor kesehatan, sementara tujuh perusahaan lain sudah resmi melantai dan menghimpun Rp2,16 triliun.",
  "date": "29 Agustus 2026",
  "image": "assets/img/lantai-bursa-sepi.jpg",
  "tags": [
   "IPO",
   "BEI",
   "Pasar Modal",
   "Sektor Kesehatan"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463347-bei-ungkap-7-perusahaan-antre-ipo-4-dari-sektor-kesehatan"
 },
 {
  "slug": "ekspor-koral-ri-ke-as-kalah-jauh-dari-jepang",
  "category": "Industri",
  "title": "Ekspor Koral RI ke AS, Kalah Jauh dari [Jepang]",
  "deck": "Mendag Busan melepas ekspor koral hidup senilai US$2.500 dari Banyuwangi ke AS, sementara ekspor koral nasional semester I 2026 hanya tumbuh 2,42 persen dan masih tertinggal jauh dari Jepang.",
  "date": "29 Agustus 2026",
  "image": "assets/img/ekspor-koral-ri-ke-as-kalah-jauh-dari-jepang.jpg",
  "imageV": "mtdvipaq",
  "tags": [
   "ekspor koral",
   "Kementerian Perdagangan",
   "Banyuwangi",
   "perikanan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tunjukkan-potensi-koral-budi-daya-di-pasar-global-mendag-busan-lepas-ekspor-koral-hidup-ke-as-1787916889",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "kemendag-teken-mou-campuspreneur-dengan-kampus-di-banyuwangi",
  "category": "UMKM",
  "title": "Kemendag Teken MoU [Campuspreneur] dengan Kampus di Banyuwangi",
  "deck": "Kemendag menggandeng UNIDSOE Banyuwangi lewat program Campuspreneur untuk mencetak wirausaha ekspor baru, sementara program UMKM BISA Ekspor mencatat potensi transaksi US$333,68 juta pada Januari-Juli 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/kemendag-teken-mou-campuspreneur-dengan-kampus-di-banyuwangi.jpg",
  "imageV": "mtdvj2du",
  "tags": [
   "UMKM",
   "Ekspor",
   "Campuspreneur",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/beri-kuliah-umum-di-unidsoe-banyuwangi-mendag-busan-ajak-mahasiswa-coba-berwirausaha",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "adro-bukukan-laba-us-329-juta-liabilitas-naik-48",
  "category": "Aksi Korporasi",
  "title": "ADRO Bukukan Laba US$329 Juta, [Liabilitas] Naik 48%",
  "deck": "Laba bersih Alamtri Resources melonjak 69 persen jadi US$329 juta pada semester I 2026, sementara liabilitas naik 48 persen untuk mendanai proyek smelter aluminium.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ADRO",
   "Alamtri Resources",
   "laporan keuangan",
   "smelter aluminium"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829110426-64311-0/FinancialStatement-2026-II-ADRO.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "aali-pengendali-baru-rampungkan-tender-wajib-kuasai-67",
  "category": "Aksi Korporasi",
  "title": "AALI: Pengendali Baru Rampungkan [Tender] Wajib, Kuasai 67%",
  "deck": "Pengendali baru Astra Agro Lestari menyerap 2,31 miliar saham dari target 12,34 miliar lewat tender wajib, menaikkan kepemilikannya jadi 67 persen.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AALI",
   "tender wajib",
   "pengendali saham",
   "Astra Agro Lestari"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_AALI_E010_950d3115-f1c0-4fe1-9b53-8ab1786059ab-20260829103018.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oils-laba-semester-i-melonjak-7-kali-lipat-jadi-rp21-4-m",
  "category": "Aksi Korporasi",
  "title": "OILS: Laba Semester I [Melonjak 7 Kali Lipat] jadi Rp21,4 M",
  "deck": "Laba PT Indo Oil Perkasa Tbk naik hampir tujuh kali lipat menjadi Rp21,48 miliar pada semester I 2026, didukung penjualan yang tumbuh 56 persen.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OILS",
   "laporan keuangan",
   "laba bersih",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829103655-64261-0/FinancialStatement-2026-II-OILS.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dire-bagikan-dividen-tunai-final-cum-dividen-29-agustus",
  "category": "Aksi Korporasi",
  "title": "DIRE bagikan [dividen] tunai final, cum dividen 29 Agustus",
  "deck": "DIRE mengumumkan distribusi dividen tunai final dengan tanggal cum dividen 29 Agustus dan pembayaran dijadwalkan 2 September 2026.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DIRE",
   "dividen",
   "dana investasi real estat",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829_DIRE_E062_9199cfd3-ac94-4fd6-9e28-3836041df10e-20260829095433.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smma-koreksi-laporan-interim-laba-melonjak-73-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "SMMA Koreksi Laporan Interim, Laba [Melonjak] 73% Semester I 2026",
  "deck": "SMMA menyampaikan koreksi laporan keuangan interim semester I 2026, dengan laba bersih naik 73 persen menjadi Rp2,3 triliun dari periode sama tahun lalu.",
  "date": "29 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMMA",
   "laporan keuangan",
   "asuransi",
   "Sinar Mas Multiartha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260829020021-64309-0/FinancialStatement-2026-II-SMMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tays-rombak-direksi-dan-komisaris-usai-rupslb",
  "category": "Aksi Korporasi",
  "title": "TAYS Rombak [Direksi] dan Komisaris Usai RUPSLB",
  "deck": "RUPSLB TAYS pada 1 April 2026 menyetujui pergantian satu direktur dan satu komisaris independen, disahkan bulat oleh pemegang saham yang hadir.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAYS",
   "Perubahan Pengurus",
   "RUPSLB",
   "Direksi Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e18c387dd1_5d1c0dea47.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "antm-laba-semester-i-2026-melonjak-34-jadi-rp6-9-t-laba",
  "category": "Aksi Korporasi",
  "title": "ANTM: Laba Semester I 2026 Melonjak 34% jadi Rp6,9 T [Laba]",
  "deck": "Pendapatan ANTM naik jadi Rp62,71 triliun dan laba bersih melonjak 34,4 persen menjadi Rp6,91 triliun pada semester I 2026, meski beban bunga dan persediaan ikut membengkak.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ANTM",
   "Antam",
   "laba bersih",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828233441-64266-0/FinancialStatement-2026-II-ANTM.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "area-bantah-ada-informasi-material-di-balik-gejolak-sahamnya",
  "category": "Aksi Korporasi",
  "title": "AREA Bantah Ada [Informasi Material] di Balik Gejolak Sahamnya",
  "deck": "Menjawab permintaan penjelasan Bursa Efek Indonesia soal volatilitas transaksi sahamnya, PT Dunia Virtual Online Tbk (AREA) menyatakan tidak mengetahui adanya informasi material di baliknya.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AREA",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3621f3d13b_4c55431646.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-ubah-jadwal-rupslb-jadi-25-september-2026",
  "category": "Aksi Korporasi",
  "title": "UANG Ubah Jadwal [RUPSLB] Jadi 25 September 2026",
  "deck": "PT Pakuan Tbk menggeser jadwal rapat pemegang saham luar biasa ke 25 September 2026, dengan pemegang saham per 2 September 2026 yang berhak hadir.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "RUPSLB",
   "PT Pakuan Tbk",
   "jadwal rapat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d8882d19cb_2e1ceac190.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertamina-buka-pendaftaran-umk-academy-2026-sampai-31-agustus",
  "category": "UMKM",
  "title": "Pertamina Buka Pendaftaran [UMK Academy] 2026 sampai 31 Agustus",
  "deck": "Pertamina kembali membuka program pembinaan UMK Academy 2026 dengan tambahan dua kelas baru, Go Green dan Go Aggregator. Pendaftaran online dibuka hingga 31 Agustus 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pertamina-buka-pendaftaran-umk-academy-2026-sampai-31-agustus.jpg",
  "imageV": "mtdcxesl",
  "tags": [
   "UMK Academy",
   "Pertamina",
   "UMKM",
   "pendaftaran UMK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463293-umk-academy-2026-pertamina-kembali-dibuka-kesempatan-lokal-naik-kelas-dan-perluas-pasar-hingga-global"
 },
 {
  "slug": "wika-ekuitas-anjlok-ke-rp130-m-rugi-rp1-55-t-di-semester-i",
  "category": "Aksi Korporasi",
  "title": "WIKA: Ekuitas [Anjlok] ke Rp130 M, Rugi Rp1,55 T di Semester I",
  "deck": "Laporan keuangan interim WIKA per Juni 2026 menunjukkan ekuitas tergerus hingga tersisa Rp130 miliar dan rugi bersih Rp1,55 triliun, di tengah proses penundaan pembayaran sukuk yang sedang diajukan perseroan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "laporan keuangan",
   "sukuk",
   "ekuitas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828222418-64258-0/FinancialStatement-2026-II-WIKA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "refi-janji-rampungkan-laporan-keuangan-paling-lambat-30-september",
  "category": "Aksi Korporasi",
  "title": "REFI Janji Rampungkan Laporan Keuangan [Paling Lambat] 30 September",
  "deck": "REFI menjawab peringatan tertulis pertama BEI soal telat laporan keuangan tengah tahun 2026, menyebut laporannya masih diaudit KAP dan berjanji terbit paling lambat 30 September 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "REFI",
   "Laporan Keuangan",
   "Bursa Efek Indonesia",
   "Sanksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5178a7b590_a2121d3e15.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-rugi-bersih-melonjak-ke-rp37-8-miliar-ekuitas-jadi-negatif",
  "category": "Aksi Korporasi",
  "title": "CASH rugi bersih [melonjak] ke Rp37,8 miliar, ekuitas jadi negatif",
  "deck": "Laporan keuangan interim semester I 2026 menunjukkan rugi bersih Cashlez Worldwide Indonesia melonjak ke Rp37,8 miliar dan ekuitas perusahaan berbalik menjadi negatif Rp37,6 miliar.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "laporan keuangan",
   "ekuitas negatif",
   "penyedia jasa pembayaran"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828214059-64235-0/FinancialStatement-2026-II-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "part-rambah-bisnis-non-otomotif-incar-laba-rp44-16-m",
  "category": "Industri",
  "title": "PART Rambah Bisnis Non-[Otomotif], Incar Laba Rp44,16 M",
  "deck": "Cipta Perdana Lancar (PART) memproyeksikan laba bersih 2026 naik 46,18 persen menjadi Rp44,16 miliar seiring perluasan bisnis fabrikasi mesin di luar otomotif.",
  "date": "28 Agustus 2026",
  "image": "assets/img/part-rambah-bisnis-non-otomotif-incar-laba-rp44-16-m.jpg",
  "imageV": "mtdcxfcj",
  "tags": [
   "PART",
   "otomotif",
   "diversifikasi bisnis",
   "laba bersih"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463277-part-genjot-bisnis-non-otomotif-laba-bersih-2026-diproyeksi-tembus-rp4416-miliar"
 },
 {
  "slug": "kota-kas-anjlok-89-meski-defisit-menyusut-semester-i",
  "category": "Aksi Korporasi",
  "title": "KOTA: kas [anjlok] 89% meski defisit menyusut semester I",
  "deck": "Laporan keuangan interim auditan KOTA per Juni 2026 menunjukkan kas merosot tajam sementara akumulasi rugi menyusut sekitar Rp16 miliar.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "laporan keuangan",
   "properti",
   "hotel"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828204051-64275-0/FinancialStatement-2026-II-KOTA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dpum-rama-indonesia-jadwalkan-ulang-tender-wajib-saham",
  "category": "Aksi Korporasi",
  "title": "DPUM: Rama Indonesia Jadwalkan Ulang [Tender Wajib] Saham",
  "deck": "Rama Indonesia menjadwalkan ulang penawaran tender wajib atas saham DPUM menjadi 24 September-23 Oktober 2026, menyusul penundaan akibat kebakaran pabrik pada Juni 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DPUM",
   "tender offer wajib",
   "Rama Indonesia",
   "pengambilalihan perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c917f1e1a_015b8744c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rmko-jelaskan-lonjakan-piutang-dan-pendapatan-ke-afiliasi-rmuk",
  "category": "Aksi Korporasi",
  "title": "RMKO Jelaskan Lonjakan [Piutang] dan Pendapatan ke Afiliasi RMUK",
  "deck": "BEI meminta RMKO menjelaskan lonjakan piutang, pendapatan diterima di muka, dan sejumlah pos neraca lain pada laporan keuangan tengah tahun 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RMKO",
   "piutang",
   "pendapatan diterima di muka",
   "pihak berelasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/14d868b832_4a6b14e1f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bach-lakukan-pemecahan-saham-1-2000-arus-kas-operasi-minus",
  "category": "Aksi Korporasi",
  "title": "BACH Lakukan [Pemecahan Saham] 1:2000, Arus Kas Operasi Minus",
  "deck": "Bach Multi Global (BACH) mencatat laba bersih naik 25 persen di semester I 2026, tetapi arus kas dari operasi berbalik minus Rp84,16 miliar seiring lonjakan utang bank dan piutang usaha.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BACH",
   "laporan keuangan",
   "pemecahan saham",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828202303-64238-0/FinancialStatement-2026-II-BACH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iata-rupsu-rupo-setujui-waiver-klausul-pemegang-saham-utama",
  "category": "Aksi Korporasi",
  "title": "IATA: RUPSU-RUPO Setujui [Waiver] Klausul Pemegang Saham Utama",
  "deck": "Pemegang sukuk dan obligasi Karya Pacific Energy menyetujui pelonggaran ketentuan perjanjian wali amanat yang terkait pemegang saham pengendali perseroan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IATA",
   "sukuk",
   "obligasi",
   "wali amanat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e1a680eb80_eca7e65d9b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bank-bjb-borong-dua-penghargaan-ojk-di-hari-menabung",
  "category": "Perbankan",
  "title": "bank bjb [Borong] Dua Penghargaan OJK di Hari Menabung",
  "deck": "bank bjb meraih dua penghargaan OJK di Puncak Hari Indonesia Menabung 2026 atas program edukasi keuangan ke sekolah dan masyarakat.",
  "date": "28 Agustus 2026",
  "image": "assets/img/bank-bjb-borong-dua-penghargaan-ojk-di-hari-menabung.jpg",
  "imageV": "mtdcxfxt",
  "tags": [
   "bank bjb",
   "OJK",
   "literasi keuangan",
   "Hari Indonesia Menabung"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463258-bank-bjb-borong-dua-penghargaan-ojk-di-puncak-hari-indonesia-menabung-2026"
 },
 {
  "slug": "pertamina-patra-niaga-raih-penghargaan-csr-bencana",
  "category": "BUMN",
  "title": "Pertamina Patra Niaga Raih [Penghargaan] CSR Bencana",
  "deck": "Pertamina Patra Niaga meraih Impact Commitment Awards 2026 atas program CSR, termasuk respons bencana banjir Sumatera dan gempa NTT hingga ke daerah terpencil.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pertamina-patra-niaga-raih-penghargaan-csr-bencana.jpg",
  "imageV": "mtdcxges",
  "tags": [
   "Pertamina Patra Niaga",
   "CSR",
   "bencana alam",
   "NTT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463245-pertamina-patra-niaga-sabet-impact-commitment-awards-respons-bencana-sumatera-hingga-ntt-diapresiasi"
 },
 {
  "slug": "pendapatan-bnbr-naik-45-8-usai-konsolidasi-cct",
  "category": "Pasar Modal",
  "title": "Pendapatan [BNBR] Naik 45,8% Usai Konsolidasi CCT",
  "deck": "Pendapatan Bakrie & Brothers naik 45,84% menjadi Rp2,59 triliun pada semester I 2026, didorong konsolidasi penuh tol Cimanggis-Cibitung dan pertumbuhan anak usaha VKTR serta BMI.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pendapatan-bnbr-naik-45-8-usai-konsolidasi-cct.jpg",
  "imageV": "mtdcxgvr",
  "tags": [
   "BNBR",
   "Bakrie & Brothers",
   "VKTR",
   "rights issue"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463240-kinerja-bnbr-semester-i-2026-pendapatan-naik-4584-jadi-rp259-triliun-dan-laba-usaha-melonjak-283"
 },
 {
  "slug": "telin-gandeng-empat-mitra-global-di-batic-2026",
  "category": "Teknologi",
  "title": "Telin Gandeng [Empat] Mitra Global di BATIC 2026",
  "deck": "Anak usaha Telkom ini menjalin empat kerja sama sekaligus di BATIC 2026, dari penguatan kabel bawah laut internasional hingga integrasi data center dengan Grup Djarum.",
  "date": "28 Agustus 2026",
  "image": "assets/img/telin-gandeng-empat-mitra-global-di-batic-2026.jpg",
  "imageV": "mtdcxhcl",
  "tags": [
   "Telin",
   "Telkom",
   "BATIC 2026",
   "kabel bawah laut"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463228-melalui-empat-kemitraan-strategis-di-batic-2026-telin-perluas-jejak-ekosistem-digital-global"
 },
 {
  "slug": "injourney-tawarkan-promo-bundling-di-gatf-2026",
  "category": "BUMN",
  "title": "InJourney Tawarkan [Promo] Bundling di GATF 2026",
  "deck": "InJourney Group menghadirkan promo bundling hotel, tiket, dan paket wisata di Garuda Indonesia Travel Fair 2026 yang berlangsung 28-30 Agustus di JICC Jakarta.",
  "date": "28 Agustus 2026",
  "image": "assets/img/injourney-tawarkan-promo-bundling-di-gatf-2026.jpg",
  "imageV": "mtdcxhu9",
  "tags": [
   "InJourney",
   "Garuda Indonesia Travel Fair",
   "BUMN Pariwisata",
   "Promo Wisata"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463223-ramaikan-garuda-indonesia-travel-fair-2026-injourney-group-dorong-pengalaman-wisata-terintegrasi"
 },
 {
  "slug": "danantara-gelar-expo-properti-di-nice-pik2-tangerang",
  "category": "Bisnis",
  "title": "Danantara Gelar Expo Properti di [NICE] PIK2 Tangerang",
  "deck": "Danantara Indonesia menggelar Housing Expo 2026 di NICE, PIK2, Tangerang, 27-30 Agustus, menawarkan lebih dari 120.000 unit hunian dari 130 pengembang.",
  "date": "28 Agustus 2026",
  "image": "assets/img/danantara-gelar-expo-properti-di-nice-pik2-tangerang.jpg",
  "imageV": "mtdcxic6",
  "tags": [
   "Danantara",
   "properti",
   "NICE",
   "PIK2"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463197-danantara-pilih-nice-untuk-penyelenggaraan-danantara-housing-expo-2026-perkuat-ekosistem-hunian-dan-properti-nasional"
 },
 {
  "slug": "kadin-siapkan-4-jurus-perkuat-pasokan-protein-mbg",
  "category": "Industri",
  "title": "Kadin Siapkan 4 Jurus Perkuat Pasokan [Protein] MBG",
  "deck": "Kadin Indonesia mengusulkan empat program penguatan ekosistem protein, dari hilirisasi hingga digitalisasi rantai pasok, untuk mendukung program Makan Bergizi Gratis.",
  "date": "28 Agustus 2026",
  "image": "assets/img/kadin-siapkan-4-jurus-perkuat-pasokan-protein-mbg.jpg",
  "imageV": "mtdcxj6k",
  "tags": [
   "Kadin",
   "MBG",
   "Protein",
   "Pertanian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463145-dukung-mbg-kadin-siapkan-4-jurus-perkuat-pasokan-protein-dari-hulu-hingga-hilir"
 },
 {
  "slug": "pik-2-jadi-lokasi-pameran-danantara-housing-expo-2026",
  "category": "Bisnis",
  "title": "PIK 2 Jadi Lokasi Pameran [Danantara] Housing Expo 2026",
  "deck": "NICE di kawasan PIK 2 menjadi tuan rumah Danantara Housing Expo 2026 pada 27-30 Agustus, sekaligus menandai satu tahun operasional venue seluas sekitar 40 hektare itu.",
  "date": "28 Agustus 2026",
  "image": "assets/img/pik-2-jadi-lokasi-pameran-danantara-housing-expo-2026.jpg",
  "imageV": "mtdcxjn8",
  "tags": [
   "NICE PIK 2",
   "Danantara Housing Expo",
   "MICE",
   "pameran properti"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463153-menjadi-tuan-rumah-danantara-housing-expo-2026-nice-pik-2-buktikan-kesiapan-fasilitas-skala-masif"
 },
 {
  "slug": "indonesia-maroko-reaktivasi-perundingan-dagang-target-2027",
  "category": "Global",
  "title": "Indonesia-Maroko [Reaktivasi] Perundingan Dagang, Target 2027",
  "deck": "Wamendag Roro mendorong percepatan perundingan dagang RI-Maroko dengan target rampung 2027, seiring nilai perdagangan bilateral yang tumbuh 37 persen pada awal 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/indonesia-maroko-reaktivasi-perundingan-dagang-target-2027.jpg",
  "imageV": "mtclk09z",
  "tags": [
   "Indonesia-Maroko",
   "perdagangan bilateral",
   "Kementerian Perdagangan",
   "ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/reaktivasi-perundingan-perdagangan-indonesia-maroko-wamendag-roro-dorong-negosiasi-tuntas-di-2027",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-kakao-ri-melonjak-tiga-kali-lipat-dalam-lima-tahun",
  "category": "Industri",
  "title": "Ekspor Kakao RI [Melonjak] Tiga Kali Lipat dalam Lima Tahun",
  "deck": "Kemendag mencatat ekspor kakao Indonesia tembus US$3,6 miliar pada 2025, sembari mendorong standar keberlanjutan sawit dan kakao agar makin bersaing di pasar global.",
  "date": "28 Agustus 2026",
  "image": "assets/img/ekspor-kakao-ri-melonjak-tiga-kali-lipat-dalam-lima-tahun.jpg",
  "imageV": "mtclk6ib",
  "tags": [
   "kakao",
   "kelapa sawit",
   "perdagangan internasional",
   "ekspor"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hadiri-forum-kakao-dan-kelapa-sawit-mendag-budi-santoso-dorong-peningkatan-nilai-tambah-dan-keberlanjutan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "agii-setop-sisa-pub-sukuk-rp1-18-triliun-andalkan-sindikasi",
  "category": "Aksi Korporasi",
  "title": "AGII Setop Sisa PUB Sukuk [Rp1,18 Triliun], Andalkan Sindikasi",
  "deck": "Samator Indo Gas (AGII) menghentikan sisa plafon Rp1,18 triliun dari program sukuknya dan beralih memakai fasilitas pinjaman sindikasi yang sudah tersedia.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGII",
   "Samator Indo Gas",
   "Sukuk Ijarah",
   "Pinjaman Sindikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d682dddbdd_c6186173f9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "safe-beri-penjelasan-usai-harga-melonjak-24-87-dalam-sehari",
  "category": "Aksi Korporasi",
  "title": "SAFE Beri Penjelasan usai Harga Melonjak [24,87%] dalam Sehari",
  "deck": "Steady Safe menjawab permintaan penjelasan Bursa soal lonjakan harga dan volume transaksi pada 24 Agustus, dan menyatakan tidak ada informasi material di baliknya.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SAFE",
   "Steady Safe",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/beb890bc61_9fe43bf0ec.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "elit-angkat-sandiaga-uno-jadi-komisaris-baru",
  "category": "Aksi Korporasi",
  "title": "ELIT Angkat [Sandiaga Uno] Jadi Komisaris Baru",
  "deck": "RUPSLB ELIT pada 26 Agustus 2026 menyetujui pengangkatan Sandiaga Salahuddin Uno sebagai komisaris dan Meidyah Indreswari sebagai komisaris independen, masa jabatan lima tahun hingga 2031.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ELIT",
   "RUPSLB",
   "komisaris",
   "Sandiaga Uno"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c68937a2a1_c9e96d570d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-pegadaian-turun-antam-rp2-759-000-gram",
  "category": "Bisnis",
  "title": "Harga Emas Pegadaian [Turun], Antam Rp2.759.000/Gram",
  "deck": "Harga emas Galeri24, Antam, dan UBS di Pegadaian kompak turun pada Jumat, dengan penurunan UBS mencapai Rp25.000 per gram.",
  "date": "28 Agustus 2026",
  "image": "assets/img/harga-emas-pegadaian-turun-antam-rp2-759-000-gram.jpg",
  "imageV": "mtclk7ic",
  "tags": [
   "harga emas",
   "pegadaian",
   "antam",
   "ubs"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463116-harga-emas-pegadaian-jumat-turun-antam-rp2759-juta-dan-ubs-rp2729-juta-per-gram"
 },
 {
  "slug": "tufi-siapkan-rp817-miliar-bayar-obligasi-jatuh-tempo-september",
  "category": "Aksi Korporasi",
  "title": "TUFI siapkan [Rp817 miliar] bayar obligasi jatuh tempo September",
  "deck": "TUFI menyatakan telah menyiapkan dana sekitar Rp817,24 miliar untuk membayar pokok dan bunga obligasi yang jatuh tempo 27 September 2026.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TUFI",
   "obligasi",
   "Mandiri Tunas Finance",
   "pembayaran utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bd41f3769e_39e4560d5e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mtfn-catat-defisit-ekuitas-rp564-9-miliar-per-juni-2026",
  "category": "Aksi Korporasi",
  "title": "MTFN Catat Defisit [Ekuitas] Rp564,9 Miliar per Juni 2026",
  "deck": "Emiten migas Capitalinc Investment mencatat ekuitas negatif Rp564,9 miliar per Juni 2026, memburuk dari Rp538,7 miliar di akhir 2025, meski pendapatan naik 15 persen.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MTFN",
   "Capitalinc Investment",
   "laporan keuangan interim",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828110924-64255-0/FinancialStatement-2026-II-MTFN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oliv-utang-ke-pemegang-saham-turun-94-85-kas-naik-tajam",
  "category": "Aksi Korporasi",
  "title": "OLIV: Utang ke Pemegang Saham [Turun] 94,85%, Kas Naik Tajam",
  "deck": "Utang OLIV ke pemegang saham pengendali turun 94,85% dan kas naik tajam pada semester I 2026, meski total aset menyusut akibat penjualan persediaan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OLIV",
   "laporan keuangan",
   "likuiditas",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260828110952-64254-0/FinancialStatement-2026-II-OLIV.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hatm-rilis-pmthmetd-640-juta-saham-ke-afiliasi-rp320-miliar",
  "category": "Aksi Korporasi",
  "title": "HATM Rilis [PMTHMETD] 640 Juta Saham ke Afiliasi Rp320 Miliar",
  "deck": "HATM akan menerbitkan 640 juta saham baru senilai Rp320 miliar khusus untuk PT Multi Sarana Nasional, pemegang saham yang direksinya sama dengan direksi HATM, dengan dilusi hingga 6,87 persen.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HATM",
   "PMTHMETD",
   "penambahan modal",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/51131230ba_0f20894f16.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-menguat-0-21-ke-6-535-sideways-jelang-akhir-pekan",
  "category": "Pasar Modal",
  "title": "IHSG [Menguat] 0,21% ke 6.535, Sideways Jelang Akhir Pekan",
  "deck": "IHSG dibuka naik 0,21 persen ke 6.535,72 setelah beberapa hari tertekan kekhawatiran keamanan dan politik dalam negeri, tapi analis memperkirakan pergerakan sideways hingga akhir pekan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/bursa-layar.jpg",
  "tags": [
   "IHSG",
   "Bursa Efek Indonesia",
   "LQ45",
   "The Fed"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463111-ihsg-dibuka-hijau-di-653572-akankah-penguatan-berlanjut-dan-bikin-investor-happy"
 },
 {
  "slug": "maya-panggil-rupslb-soal-pergantian-direksi-komisaris-24-sep",
  "category": "Aksi Korporasi",
  "title": "MAYA panggil RUPSLB soal [pergantian] direksi-komisaris 24 Sep",
  "deck": "Bank Mayapada Internasional (MAYA) mengundang pemegang saham ke RUPSLB 24 September 2026 untuk menyetujui perubahan susunan Direksi dan Dewan Komisaris.",
  "date": "28 Agustus 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MAYA",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d87144cbf9_b59b20af76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-siapkan-layer-cukai-baru-tekan-rokok-ilegal",
  "category": "Makroekonomi",
  "title": "Purbaya Siapkan [Layer] Cukai Baru Tekan Rokok Ilegal",
  "deck": "Menkeu Purbaya menyiapkan lapisan tarif cukai baru untuk menarik pedagang rokok ilegal masuk ke sistem legal, sementara yang bertahan ilegal akan ditindak tegas.",
  "date": "28 Agustus 2026",
  "image": "assets/img/purbaya-siapkan-layer-cukai-baru-tekan-rokok-ilegal.jpg",
  "imageV": "mtclk8kj",
  "tags": [
   "cukai rokok",
   "rokok ilegal",
   "CHT",
   "Purbaya Yudhi Sadewa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463107-purbaya-siapkan-layer-cukai-baru-pedagang-rokok-ilegal-diperingatkan-tak-bisa-lagi-main-main"
 },
 {
  "slug": "aspebindo-perkuat-ketahanan-energi-lewat-bioenergi",
  "category": "Energi",
  "title": "Aspebindo Perkuat Ketahanan Energi Lewat [Bioenergi]",
  "deck": "Aspebindo menggelar summit bioenergi dan meninjau pabrik pengolah sampah jadi bahan bakar di Jakarta Utara, bagian dari perluasan bisnis ke energi terbarukan.",
  "date": "28 Agustus 2026",
  "image": "assets/img/aspebindo-perkuat-ketahanan-energi-lewat-bioenergi.jpg",
  "imageV": "mtclk9i9",
  "tags": [
   "bioenergi",
   "energi terbarukan",
   "Aspebindo",
   "RDF"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463068-aspebindo-sokong-ketahanan-energi-nasional-lewat-bioenergi"
 },
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
  "slug": "pertamina-kejar-332-desa-energi-berdikari-di-akhir-2026",
  "category": "Energi",
  "title": "Pertamina Kejar 332 Desa [Energi] Berdikari di Akhir 2026",
  "deck": "Pertamina genjot Program Desa Energi Berdikari dari 269 jadi 332 lokasi hingga akhir 2026, memadukan panel surya, biogas, dan mikrohidro untuk ekonomi desa.",
  "date": "27 Agustus 2026",
  "image": "assets/img/pertamina-kejar-332-desa-energi-berdikari-di-akhir-2026.jpg",
  "imageV": "mtbqd09s",
  "tags": [
   "Pertamina",
   "energi terbarukan",
   "desa energi berdikari",
   "DEB"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463029-festival-deb-pertamina-2026-terus-perkuat-kolaborasi-dorong-energi-terbarukan-jadi-penggerak-ekonomi-desa"
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
  "slug": "pegadaian-raih-penghargaan-sukuk-syariah-di-kuala-lumpur",
  "category": "Pasar Modal",
  "title": "Pegadaian Raih [Penghargaan] Sukuk Syariah di Kuala Lumpur",
  "deck": "Pegadaian meraih penghargaan Best Sukuk-SME di The Asset Triple A Islamic Finance Awards 2026 di Kuala Lumpur, berkat penerbitan sukuk syariah Rp1,75 triliun untuk mendanai UMKM.",
  "date": "27 Agustus 2026",
  "image": "assets/img/pegadaian-raih-penghargaan-sukuk-syariah-di-kuala-lumpur.jpg",
  "imageV": "mtbqd62p",
  "tags": [
   "Pegadaian",
   "Sukuk Syariah",
   "UMKM",
   "Kuala Lumpur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/463026-diakui-di-kancah-internasional-pegadaian-sabet-penghargaan-best-sukuk-sme-di-kuala-lumpur"
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
  "slug": "diskon-ongkos-e-commerce-umkm-tinggal-tunggu-integrasi-sistem",
  "category": "UMKM",
  "title": "Diskon Ongkos E-Commerce UMKM Tinggal Tunggu [Integrasi] Sistem",
  "deck": "Menteri UMKM Maman Abdurrahman menyebut diskon 50 persen biaya layanan e-commerce bagi UMK sudah 95 persen siap, tinggal menunggu jadwal integrasi sistem Sapa UMKM.",
  "date": "27 Agustus 2026",
  "image": "assets/img/diskon-ongkos-e-commerce-umkm-tinggal-tunggu-integrasi-sistem.jpg",
  "imageV": "mtbqd72u",
  "tags": [
   "umkm",
   "e-commerce",
   "maman abdurrahman",
   "sapa umkm"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462981-menteri-umkm-sebut-diskon-50-persen-biaya-e-commerce-bagi-umk-tunggu-jadwal-integrasi"
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
  "slug": "pnm-mekaar-bantu-ao-ubah-nasib-keluarga-nelayan",
  "category": "UMKM",
  "title": "PNM Mekaar Bantu AO [Ubah] Nasib Keluarga Nelayan",
  "deck": "Account Officer PNM Mekaar, Tika Wulandari, menyisihkan penghasilannya untuk keluarga hingga membelikan perahu bagi sang ayah, mantan buruh kapal orang lain.",
  "date": "27 Agustus 2026",
  "image": "assets/img/pnm-mekaar-bantu-ao-ubah-nasib-keluarga-nelayan.jpg",
  "imageV": "mtbqd7y9",
  "tags": [
   "PNM",
   "UMKM",
   "nelayan",
   "lapangan kerja"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462931-dari-penghasilan-menjadi-harapan-pnm-bantu-tika-gerakkan-ekonomi-keluarga-hingga-buka-lapangan-kerja"
 },
 {
  "slug": "banggar-dpr-soroti-banyak-typo-rapbn-2027",
  "category": "Makroekonomi",
  "title": "Banggar DPR Soroti Banyak [Typo] RAPBN 2027",
  "deck": "Banggar DPR temukan sejumlah kesalahan angka di dokumen RAPBN 2027, dari target pertumbuhan ekonomi hingga anggaran Makan Bergizi Gratis yang beda hingga Rp240 triliun.",
  "date": "27 Agustus 2026",
  "image": "assets/img/banggar-dpr-soroti-banyak-typo-rapbn-2027.jpg",
  "imageV": "mtbqd8rz",
  "tags": [
   "RAPBN 2027",
   "Banggar DPR",
   "MBG",
   "Purbaya Yudhi Sadewa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/462923-banggar-dpr-soroti-banyak-typo-rapbn-2027-dari-target-pertumbuhan-hingga-anggaran-mbg"
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
  "image": "assets/img/ruang-rapat-kaca-bursa.jpg",
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
  "imageV": "mtcquqmb",
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
  "image": "assets/img/brankas-uang-sentral.jpg",
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
  "image": "assets/img/investor-ritel-ponsel.jpg",
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
  "image": "assets/img/grafik-laptop.jpg",
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
  "image": "assets/img/rumah-subsidi.jpg",
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
 }
];
