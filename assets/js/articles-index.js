// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/sidang-dpr.jpg",
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
  "image": "assets/img/pelabuhan-kontainer.jpg",
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
  "image": "assets/img/buruh-pabrik.jpg",
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
  "title": "OPPM Terbitkan Obligasi [Rp1,15 Triliun], Di Bawah Target Rp3,33 T",
  "deck": "Obligasi rupiah dan dolar OPPM tahap terbaru rampung diterbitkan dengan nilai jauh lebih kecil dari rencana awal, sementara bunga tetap dipatok 10 hingga 10,5 persen.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi korporasi",
   "pasar modal",
   "OKI Pulp Paper Mills"
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
  "title": "BMAS Tarik [US$18 Juta] Lagi dari KBank, Total Jadi US$258 Juta",
  "deck": "BMAS mencairkan tambahan US$18 juta dari fasilitas pinjaman bilateral pemegang saham utamanya, KBank, sehingga total penarikan mencapai US$258 juta dari limit US$341 juta.",
  "date": "9 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "KBank",
   "pinjaman afiliasi",
   "perbankan"
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
  "image": "assets/img/pasar-beras.jpg",
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
  "title": "HKMU Bukukan [Ekuitas Negatif] Rp38,7 Miliar dalam Laporan Interim",
  "deck": "Laporan keuangan interim per Juni 2023 yang baru disampaikan HKMU pada November 2026 menunjukkan ekuitas negatif Rp38,7 miliar dan penjualan yang anjlok 87 persen.",
  "date": "8 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HKMU",
   "ekuitas negatif",
   "laporan keuangan",
   "aluminium"
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
  "image": "assets/img/jalan-raya-padat.jpg",
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
  "image": "assets/img/kapal-batubara.jpg",
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
 },
 {
  "slug": "lopi-direksi-beli-2-juta-saham-secara-tidak-langsung",
  "category": "Aksi Korporasi",
  "title": "LOPI: Direksi Beli [2 Juta] Saham Secara Tidak Langsung",
  "deck": "Direktur LOPI, Wahyu Dwi Jatmiko, melaporkan pembelian tidak langsung 2 juta saham pada 5 November 2026, menaikkan kepemilikannya dari 60 menjadi 2.000.060 lembar saham.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LOPI",
   "kepemilikan saham direksi",
   "Logisticsplus International",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1748-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "indf-jelaskan-ke-bei-dana-buyback-rp750-m-setara-1-modal",
  "category": "Aksi Korporasi",
  "title": "INDF Jelaskan ke BEI, Dana [Buyback] Rp750 M Setara 1% Modal",
  "deck": "Indofood menjawab permintaan penjelasan BEI atas rencana pembelian kembali saham, menyebut dana Rp750 miliar hanya sekitar 1 persen dari modal disetor.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "INDF",
   "buyback",
   "BEI",
   "Indofood"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e82e653ba3_91413102a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "icbp-jawab-bursa-buyback-rp750-miliar-cuma-1-modal",
  "category": "Aksi Korporasi",
  "title": "ICBP Jawab Bursa: Buyback Rp750 Miliar Cuma [1%] Modal",
  "deck": "ICBP menjelaskan ke BEI bahwa dana buyback Rp750 miliar hanya sekitar 1 persen dari modal disetor dan dilakukan tanpa penilai independen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ICBP",
   "buyback",
   "BEI",
   "Indofood CBP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c6bc3959c2_84fd7547b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pelindo-teken-mou-kerja-sama-dengan-pelabuhan-los-angeles",
  "category": "BUMN",
  "title": "Pelindo Teken [MoU] Kerja Sama dengan Pelabuhan Los Angeles",
  "deck": "Pelindo dan Port of Los Angeles menandatangani MoU untuk memperluas kerja sama bisnis kepelabuhanan dan konektivitas pelayaran Indonesia-Amerika Serikat.",
  "date": "6 November 2026",
  "image": "assets/img/pelindo-teken-mou-kerja-sama-dengan-pelabuhan-los-angeles.jpg",
  "imageV": "mw56ch66",
  "tags": [
   "Pelindo",
   "Port of Los Angeles",
   "Pelabuhan",
   "Maritim"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/477004-pelindo-perkuat-kerja-sama-bisnis-dan-konektivitas-maritim-dengan-port-of-los-angeles"
 },
 {
  "slug": "pefindo-tetapkan-rating-ida-untuk-obligasi-ijee-rp1-7-triliun",
  "category": "Aksi Korporasi",
  "title": "PEFINDO Tetapkan Rating [idA] untuk Obligasi IJEE Rp1,7 Triliun",
  "deck": "PEFINDO menetapkan peringkat idA (Single A) untuk empat obligasi IJEE senilai total Rp1,71 triliun, berlaku 3 November 2026 hingga 1 November 2027.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IJEE",
   "obligasi",
   "PEFINDO",
   "rating kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f8b8fb6a82_3abd787738.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fasilitas-devisa-ekspor-sda-diperluas-portal-dsi-siap-2027",
  "category": "Moneter",
  "title": "Fasilitas Devisa Ekspor SDA [Diperluas], Portal DSI Siap 2027",
  "deck": "Pemerintah memperluas fasilitas penempatan devisa hasil ekspor SDA ke tujuh negara dan 16 bank, sekaligus menyiapkan Portal DSI yang wajib dipakai eksportir batu bara, sawit, dan feroaloi mulai 2027.",
  "date": "6 November 2026",
  "image": "assets/img/konpers-bank.jpg",
  "tags": [
   "DHE SDA",
   "Portal DSI",
   "Ekspor SDA",
   "Danantara"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7204/perluas-fleksibilitas-dhe-sda-dan-siapkan-go-live-portal-dsi-pemerintah-pastikan-ekspor-tetap-lancar",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "wamendag-tinjau-batik-keris-bidik-ekspor-ke-asia-tenggara",
  "category": "Industri",
  "title": "Wamendag Tinjau Batik Keris, Bidik [Ekspor] ke Asia Tenggara",
  "deck": "Wamendag Dyah Roro Esti meninjau pabrik Batik Keris di Sukoharjo untuk memetakan potensi ekspor batik ke Asia Tenggara, saat ekspor batik nasional tumbuh 13 persen pada 2025.",
  "date": "6 November 2026",
  "image": "assets/img/wamendag-tinjau-batik-keris-bidik-ekspor-ke-asia-tenggara.jpg",
  "imageV": "mw510uwk",
  "tags": [
   "batik",
   "ekspor",
   "Kemendag",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tinjau-pabrik-batik-keris-wamendag-roro-dorong-batik-tembus-pasar-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bappebti-rilis-peringkat-69-pialang-berjangka-kuartal-iii",
  "category": "Pasar Modal",
  "title": "Bappebti Rilis [Peringkat] 69 Pialang Berjangka Kuartal III",
  "deck": "Bappebti merilis hasil penilaian berkala terhadap 69 pialang berjangka aktif periode Juli-September 2026, dengan PT PG Berjangka di peringkat teratas.",
  "date": "6 November 2026",
  "image": "assets/img/bursa-layar.jpg",
  "tags": [
   "Bappebti",
   "Pialang Berjangka",
   "Kementerian Perdagangan",
   "Perdagangan Berjangka Komoditi"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tingkatkan-kualitas-pelaku-usaha-pbk-bappebti-umumkan-rating-pialang-berjangka-triwulan-iii-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mine-rombak-direksi-jaminkan-aset-untuk-pinjaman-sindikasi",
  "category": "Aksi Korporasi",
  "title": "MINE Rombak Direksi, Jaminkan [Aset] untuk Pinjaman Sindikasi",
  "deck": "RUPSLB MINE menyetujui direktur baru, perubahan kode usaha KBLI, dan penjaminan aset di atas 50% kekayaan bersih untuk pinjaman sindikasi dari dua bank.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MINE",
   "RUPSLB",
   "Pinjaman Sindikasi",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d119d29c30_95bd4ef529.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-akui-transaksi-cessie-rp147-miliar-belum-diungkap",
  "category": "Aksi Korporasi",
  "title": "VTNY Akui Transaksi [Cessie] Rp147 Miliar Belum Diungkap",
  "deck": "VTNY menanggapi permintaan penjelasan Bursa soal opini wajar dengan pengecualian, dan mengakui pengalihan piutang Rp147 miliar serta obligasi anak usaha belum diungkap sebagai transaksi material.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "opini audit",
   "transaksi material",
   "obligasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d41b306f52_3c44142603.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rans-bantah-putus-kerja-sama-dengan-d-masiv-untuk-tur-asia",
  "category": "Aksi Korporasi",
  "title": "RANS Bantah Putus Kerja Sama dengan [D'MASIV] untuk Tur Asia",
  "deck": "RANS menjawab permintaan penjelasan BEI soal kabar putusnya kerja sama dengan D'MASIV di tur konser Asia yang sebagian didanai dana hasil IPO.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "D'MASIV",
   "IPO",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ab1d566f9a_8e81f08b1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-revisi-transaksi-afiliasi-pinjaman-kbank-capai-us-240-juta",
  "category": "Aksi Korporasi",
  "title": "BMAS Revisi Transaksi [Afiliasi]: Pinjaman KBank Capai US$240 Juta",
  "deck": "BMAS mengoreksi laporan transaksi afiliasi dan merinci penarikan pinjaman dari KASIKORNBANK yang telah mencapai US$240 juta dari limit fasilitas US$341 juta.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "Transaksi Afiliasi",
   "KASIKORNBANK",
   "Pinjaman Bilateral"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a3c52f7619_979a3397ce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cmnt-ganti-direksi-pt-karsa-primapermata-nusa",
  "category": "Aksi Korporasi",
  "title": "CMNT Ganti [Direksi] PT Karsa Primapermata Nusa",
  "deck": "Cemindo Gemilang mengumumkan susunan baru direksi dan komisaris anak usahanya, PT Karsa Primapermata Nusa, lewat akta notaris 6 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CMNT",
   "Cemindo Gemilang",
   "Karsa Primapermata Nusa",
   "pergantian direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/37c99d47d8_708956acab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-terima-dividen-rp3-33-miliar-dari-dextone-lemindo",
  "category": "Aksi Korporasi",
  "title": "AVIA Terima [Dividen] Rp3,33 Miliar dari Dextone Lemindo",
  "deck": "Avia Avian mengantongi dividen Rp3,33 miliar dari laba ditahan 2025 PT Dextone Lemindo, perusahaan asosiasi yang 16,67 persen sahamnya dimiliki Perseroan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "dividen",
   "Dextone Lemindo",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5ecd3245bb_e102a555cf.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cash-sajikan-ulang-lk-2022-ekuitas-susut-48-restatement",
  "category": "Aksi Korporasi",
  "title": "CASH Sajikan Ulang LK 2022, Ekuitas Susut 48% [Restatement]",
  "deck": "Cashlez mengoreksi penyajian aset takberwujud pada laporan keuangan 2022 sesuai PSAK 238, membuat ekuitas turun Rp88,4 miliar dan hasil komprehensif berubah dari untung jadi rugi.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CASH",
   "restatement laporan keuangan",
   "PSAK 238",
   "Cashlez"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6f5fda78ec_7f38640e99.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-komisaris-jual-habis-saham-rp12-2-miliar",
  "category": "Aksi Korporasi",
  "title": "NSSS: Komisaris [Jual] Habis Saham, Rp12,2 Miliar",
  "deck": "Komisaris Djasa Pinara Gusti menjual seluruh 26,89 juta lembar sahamnya di NSSS pada harga Rp455, membuat hak suaranya turun dari 0,11 persen menjadi nol.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "Nusantara Sawit Sejahtera",
   "komisaris",
   "transaksi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8374-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nsss-direksi-tambah-kepemilikan-saham-via-repo-ke-38-07",
  "category": "Aksi Korporasi",
  "title": "NSSS: Direksi Tambah [Kepemilikan] Saham via Repo ke 38,07%",
  "deck": "Direksi NSSS menambah kepemilikan lewat tiga transaksi gadai saham (repo) pada 6 November 2026, saham naik 522,7 juta lembar dan hak suara jadi 38,07%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NSSS",
   "repo saham",
   "kepemilikan direksi",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-6863-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kepemilikan-sqmi-cgs-international-naik-ke-15-19-saham",
  "category": "Aksi Korporasi",
  "title": "[Kepemilikan] SQMI: CGS International Naik ke 15,19% Saham",
  "deck": "CGS International Securities Singapore melaporkan pembelian 63,99 juta saham SQMI pada 3 November 2026, menaikkan hak suaranya dari 14,78% menjadi 15,19%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SQMI",
   "kepemilikan saham",
   "CGS International Securities",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8419-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rlco-direksi-cairkan-repo-lepas-18-3-juta-saham",
  "category": "Aksi Korporasi",
  "title": "RLCO: Direksi Cairkan Repo, [Lepas] 18,3 Juta Saham",
  "deck": "Direksi RLCO menjual 18,3 juta saham senilai sekitar Rp56 miliar untuk mencairkan perjanjian repo, hak suara turun jadi 11,85 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RLCO",
   "kepemilikan saham",
   "repo",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7492-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bksl-direksi-tambah-652-9-juta-saham-via-repo",
  "category": "Aksi Korporasi",
  "title": "BKSL: Direksi Tambah 652,9 Juta Saham via [Repo]",
  "deck": "Laporan ke OJK menyebut kepemilikan direksi Sentul City Tbk di saham BKSL bertambah 652,9 juta lembar lewat transaksi repo pada 6 November 2026, hak suara naik dari 5,44% menjadi 5,83%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BKSL",
   "Sentul City",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8548-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-saham-mknt-terkonsentrasi-99-64-di-segelintir-investor",
  "category": "Aksi Korporasi",
  "title": "BEI: Saham MKNT [Terkonsentrasi] 99,64% di Segelintir Investor",
  "deck": "Bursa Efek Indonesia mencatat 99,64% saham MKNT dikuasai sejumlah terbatas pemegang saham per 5 November 2026, menyusul status Unusual Market Activity pada saham ini.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "BEI",
   "kepemilikan saham",
   "UMA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d396738a24_c24aff7724.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brms-direksi-agoes-tambah-saham-tak-langsung-rp995-juta",
  "category": "Aksi Korporasi",
  "title": "BRMS: Direksi Agoes [Tambah] Saham Tak Langsung Rp995 Juta",
  "deck": "Direksi BRMS Agoes Projosasmito membeli 3,225 juta saham secara tidak langsung pada 4 November 2026, menaikkan kepemilikannya 21,26 persen meski hak suaranya tetap 0,01 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRMS",
   "Bumi Resources Minerals",
   "kepemilikan saham direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1586-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "film-direksi-tambah-saham-lewat-repo-ke-11-26-suara",
  "category": "Aksi Korporasi",
  "title": "FILM: Direksi [tambah] saham lewat repo ke 11,26% suara",
  "deck": "Pelapor berstatus Direksi FILM, Samuel Sekuritas Indonesia, menambah kepemilikan saham MD Entertainment lewat rangkaian transaksi repo pada 6 November 2026, hak suara naik dari 8,85% menjadi 11,26%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FILM",
   "MD Entertainment",
   "kepemilikan saham",
   "repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-0611-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "yupi-bagikan-dividen-interim-rp14-83-per-saham",
  "category": "Aksi Korporasi",
  "title": "YUPI Bagikan [Dividen] Interim Rp14,83 per Saham",
  "deck": "Yupi Indo Jelly Gum membagikan dividen interim Rp126,76 miliar dari laba sembilan bulan 2026, dibayar 26 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "YUPI",
   "dividen interim",
   "pasar modal",
   "emiten konsumer"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/77ca9fa432_188701019d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppgl-gelar-public-expose-insidentil-usai-diminta-bursa",
  "category": "Aksi Korporasi",
  "title": "PPGL Gelar Public Expose [Insidentil] Usai Diminta Bursa",
  "deck": "Diminta Bursa Efek Indonesia, PPGL akan memaparkan kinerja dan penjelasan soal pergerakan harga sahamnya pada 10 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPGL",
   "Public Expose",
   "Bursa Efek Indonesia",
   "Prima Globalindo Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/06d4ca1176_2527dd6dce.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "menn-masuk-papan-pemantauan-khusus-bei-9-november",
  "category": "Aksi Korporasi",
  "title": "MENN Masuk Papan [Pemantauan Khusus] BEI 9 November",
  "deck": "BEI memasukkan saham MENN ke papan pemantauan khusus mulai 9 November 2026 karena emiten tidak membukukan pendapatan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "pemantauan khusus",
   "BEI",
   "papan akselerasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/341e3ec4b8_e64a6066ed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bipp-akui-mengendalikan-mgna-dalam-satu-grup-usaha",
  "category": "Aksi Korporasi",
  "title": "BIPP Akui [Mengendalikan] MGNA dalam Satu Grup Usaha",
  "deck": "BIPP melaporkan ke Bursa Efek Indonesia bahwa perusahaannya satu grup dengan Magna Investama Mandiri (MGNA), karena BIPP pengendali MGNA dan direksinya rangkap jabatan di dua emiten itu.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "MGNA",
   "grup perusahaan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b7bacc4757_9aa99193f0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prda-sisa-dana-buyback-saham-tinggal-rp46-miliar",
  "category": "Aksi Korporasi",
  "title": "PRDA Sisa Dana [Buyback] Saham Tinggal Rp46 Miliar",
  "deck": "Prodia Widyahusada melaporkan hasil pembelian kembali saham sejak 20 Agustus hingga 6 November 2026, dengan sisa dana buyback tinggal Rp46,02 miliar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PRDA",
   "buyback saham",
   "Prodia Widyahusada",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/03d83386df_f68498cbe6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hrta-terang-anugrah-abadi-tambah-609-000-saham",
  "category": "Aksi Korporasi",
  "title": "HRTA: Terang Anugrah Abadi [Tambah] 609.000 Saham",
  "deck": "PT Terang Anugrah Abadi, pemegang saham utama Hartadinata Abadi (HRTA), membeli 609.000 saham tambahan pada 4 November 2026 seharga Rp1.260 per lembar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HRTA",
   "Hartadinata Abadi",
   "kepemilikan saham",
   "pemegang saham utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7760-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cadangan-devisa-ri-naik-tipis-ke-us-146-8-miliar",
  "category": "Moneter",
  "title": "Cadangan Devisa RI [Naik] Tipis ke US$146,8 Miliar",
  "deck": "Bank Indonesia mencatat cadangan devisa Oktober 2026 naik jadi US$146,8 miliar, cukup membiayai 5,3 bulan impor, ditopang pinjaman pemerintah dan penerimaan pajak.",
  "date": "6 November 2026",
  "image": "assets/img/cadangan-devisa-ri-naik-tipis-ke-us-146-8-miliar.jpg",
  "imageV": "mw4v2y2p",
  "tags": [
   "cadangan devisa",
   "bank indonesia",
   "rupiah",
   "utang luar negeri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476952-cadangan-devisa-indonesia-oktober-2026-tembus-us1468-miliar-bi-ungkap-faktor-penopang-rupiah"
 },
 {
  "slug": "tmpo-hak-suara-jaya-raya-utama-melonjak-ke-28-42-dividen",
  "category": "Aksi Korporasi",
  "title": "TMPO: Hak Suara Jaya Raya Utama Melonjak ke 28,42% [dividen]",
  "deck": "Jaya Raya Utama menerima 128,48 juta saham TMPO lewat dividen interim non tunai, mendorong hak suaranya dari 16,28% menjadi 28,42%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TMPO",
   "Tempo Inti Media",
   "dividen saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8418-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "omed-direksi-tambah-50-000-saham-senilai-rp8-9-juta",
  "category": "Aksi Korporasi",
  "title": "OMED: Direksi [Tambah] 50.000 Saham Senilai Rp8,9 Juta",
  "deck": "Direksi Leonard Hariadi Hartanto membeli 50.000 saham OMED pada 3 November 2026, menambah kepemilikannya menjadi 6.880.200 lembar atau 0,0254% hak suara.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OMED",
   "Jayamas Medica Industri",
   "kepemilikan saham direksi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1671-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "realisasi-investasi-rp3-923-2-triliun-topang-pergeseran-kerja",
  "category": "Makroekonomi",
  "title": "Realisasi [Investasi] Rp3.923,2 Triliun Topang Pergeseran Kerja",
  "deck": "Pemerintah mencatat investasi dua tahun terakhir tembus Rp3.923,2 triliun dan menyerap 5,49 juta pekerja, di tengah pergeseran pola kerja akibat transformasi ekonomi.",
  "date": "6 November 2026",
  "image": "assets/img/pasar-tradisional-pagi.jpg",
  "tags": [
   "transformasi ekonomi",
   "investasi",
   "tenaga kerja",
   "indeks industri"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7203/transformasi-struktur-ekonomi-buka-peluang-baru-pemerintah-perkuat-investasi-dan-kesiapan-tenaga-kerja",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "esdm-serahkan-137-hektare-lahan-tambang-ke-kopassus",
  "category": "Energi",
  "title": "ESDM Serahkan [137] Hektare Lahan Tambang ke Kopassus",
  "deck": "Kementerian ESDM mengalihkan status 137,1 hektare lahan eks tambang batu bara di Kutai Kartanegara kepada Kemhan untuk mendukung operasional Kopassus.",
  "date": "6 November 2026",
  "image": "assets/img/esdm-serahkan-137-hektare-lahan-tambang-ke-kopassus.jpg",
  "imageV": "mw4secuj",
  "tags": [
   "ESDM",
   "Kopassus",
   "Kementerian Pertahanan",
   "lahan tambang"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/kementerian-esdm-serahkan-137-hektare-lahan-eks-tambang-kepada-kemhan-untuk-dukung-kopassus",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "medc-terbitkan-obligasi-us-300-juta-jatuh-tempo-2032",
  "category": "Aksi Korporasi",
  "title": "MEDC Terbitkan [Obligasi] US$300 Juta Jatuh Tempo 2032",
  "deck": "Anak usaha MEDC, Medco Redwood Tree Limited, menerbitkan obligasi US$300 juta berkupon 8,875 persen, jatuh tempo 2032, untuk melunasi utang lama.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MEDC",
   "obligasi",
   "refinancing",
   "Medco Energi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e835801307_919e7a3795.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-tunggal-jaya-tambah-saham-hak-suara-ke-38-89",
  "category": "Aksi Korporasi",
  "title": "IMPC: Tunggal Jaya Tambah [Saham], Hak Suara ke 38,89%",
  "deck": "Tunggal Jaya Investama membeli 27,69 juta saham IMPC pada 2-5 November 2026, menaikkan hak suaranya dari 38,84% menjadi 38,89%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "Tunggal Jaya Investama",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7622-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "laba-panggil-rupslb-agendakan-perombakan-direksi-dan-komisaris",
  "category": "Aksi Korporasi",
  "title": "LABA panggil RUPSLB, agendakan [perombakan] direksi dan komisaris",
  "deck": "RUPSLB akan digelar 30 November 2026 untuk membahas pergantian susunan direksi dan dewan komisaris Green Power Group, dengan pemegang saham per 5 November 2026 berhak hadir.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LABA",
   "RUPSLB",
   "Direksi",
   "Dewan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9145a88c72_715df8bcd0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "masb-direksi-fely-retnowati-tambah-saham-jadi-294-400-lembar",
  "category": "Aksi Korporasi",
  "title": "MASB: Direksi Fely Retnowati [tambah] saham jadi 294.400 lembar",
  "deck": "Direksi Bank Multiarta Sentosa (MASB), Fely Retnowati, membeli 7.200 lembar saham pada 5 November 2026, menambah kepemilikannya menjadi 294.400 lembar namun hak suaranya tetap 0,02 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MASB",
   "Direksi",
   "kepemilikan saham",
   "Bank Multiarta Sentosa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-9369-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roti-tarik-514-juta-saham-treasuri-via-pengurangan-modal",
  "category": "Aksi Korporasi",
  "title": "ROTI Tarik 514 Juta Saham Treasuri via [Pengurangan Modal]",
  "deck": "ROTI berencana menarik 514.213.400 saham treasuri (8,31% dari modal) lewat pengurangan modal, keputusan dimintakan di RUPSLB 15 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "pengurangan modal",
   "saham treasuri",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8c93c47851_6c49693924.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-bagikan-dividen-tunai-rp23-saham-total-rp50-46-miliar",
  "category": "Aksi Korporasi",
  "title": "AMOR Bagikan [Dividen] Tunai Rp23/Saham, Total Rp50,46 Miliar",
  "deck": "RUPST AMOR menyetujui dividen tunai Rp23 per saham untuk tahun buku berakhir Juni 2026, total Rp50,46 miliar, cair 24 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "dividen tunai",
   "Ashmore Asset Management",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2964fb570a_1b8636a313.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mgna-satu-grup-dengan-bhuwanatala-indah-permai-rangkap-jabatan",
  "category": "Aksi Korporasi",
  "title": "MGNA Satu Grup dengan Bhuwanatala Indah Permai [Rangkap Jabatan]",
  "deck": "MGNA menyatakan masuk kriteria satu grup perusahaan dengan PT Bhuwanatala Indah Permai Tbk karena ada direksi, komisaris, atau pejabat eksekutif yang merangkap jabatan di kedua emiten.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MGNA",
   "Bhuwanatala Indah Permai",
   "keterbukaan informasi",
   "rangkap jabatan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/fdad6923dd_1aaea41195.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipcc-laba-bersih-turun-6-9-meski-masih-bebas-utang",
  "category": "Aksi Korporasi",
  "title": "IPCC: Laba Bersih [Turun] 6,9% Meski Masih Bebas Utang",
  "deck": "Dalam Public Expose Tahunan, IPCC melaporkan pendapatan dan laba bersih kuartal III 2026 turun dibanding tahun lalu, sementara perusahaan tetap tidak memiliki utang bank maupun obligasi.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IPCC",
   "public expose",
   "kinerja keuangan",
   "terminal kendaraan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/17bdb956c4_28aacb74b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-panggil-rupslb-rencanakan-ubah-bisnis-dan-akuisisi-nikel",
  "category": "Aksi Korporasi",
  "title": "PACK Panggil RUPSLB, Rencanakan Ubah Bisnis dan [Akuisisi] Nikel",
  "deck": "PACK memanggil RUPSLB dan RUPS Independen 30 November 2026 untuk membahas perubahan bisnis, akuisisi saham PT Bukit Makmur Istindo Nikeltama, dan rencana penerbitan saham baru.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PACK",
   "RUPSLB",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f91345f2bc_b9f69a0a0a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "srtg-komisaris-edwin-soeryadjaya-beli-1-7-juta-saham",
  "category": "Aksi Korporasi",
  "title": "SRTG: Komisaris Edwin Soeryadjaya Beli [1,7 Juta] Saham",
  "deck": "Edwin Soeryadjaya menambah kepemilikan di Saratoga lewat dua transaksi awal November, hak suaranya naik tipis menjadi 36,11 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SRTG",
   "Edwin Soeryadjaya",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-7856-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-kreasi-jasa-persada-tambah-11-57-juta-saham",
  "category": "Aksi Korporasi",
  "title": "PTRO: Kreasi Jasa Persada Tambah [11,57 Juta] Saham",
  "deck": "Pemegang saham Petrosea, Kreasi Jasa Persada, membeli 11,57 juta saham baru di harga Rp2.160, menaikkan hak suaranya jadi 45,443%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTRO",
   "Petrosea",
   "kepemilikan saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-4464-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "impc-harimas-tunggal-perkasa-tambah-7-2-juta-saham",
  "category": "Aksi Korporasi",
  "title": "IMPC: Harimas Tunggal Perkasa [Tambah] 7,2 Juta Saham",
  "deck": "Harimas Tunggal Perkasa membeli 7,2 juta saham IMPC pada 2-3 November 2026, menaikkan hak suaranya tipis dari 36,03 persen ke 36,05 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "IMPC",
   "kepemilikan saham",
   "pemegang saham",
   "Impack Pratama Industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-2467-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "omed-komisaris-tambah-500-000-saham-senilai-rp91-juta",
  "category": "Aksi Korporasi",
  "title": "OMED: Komisaris [Tambah] 500.000 Saham Senilai Rp91 Juta",
  "deck": "Komisaris OMED, Siane Soetanto, menambah 500.000 lembar saham seharga Rp182 per saham pada 3 November 2026, menaikkan hak suaranya ke 0,901 persen.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OMED",
   "kepemilikan saham",
   "komisaris",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-8058-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkgi-direksi-tambah-143-600-saham-senilai-rp260-lembar",
  "category": "Aksi Korporasi",
  "title": "KKGI: Direksi Tambah [143.600] Saham Senilai Rp260/Lembar",
  "deck": "Direksi Resource Alam Indonesia, Wimpi Salim, membeli 143.600 lembar saham KKGI pada 16 Oktober 2026, menambah kepemilikannya jadi 1.204.696 lembar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KKGI",
   "kepemilikan saham",
   "direksi",
   "Resource Alam Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-9617-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bris-terbitkan-sukuk-mudharabah-rp2-triliun-tahap-iii",
  "category": "Aksi Korporasi",
  "title": "BRIS Terbitkan [Sukuk] Mudharabah Rp2 Triliun Tahap III",
  "deck": "BSI menerbitkan sukuk mudharabah senilai Rp2 triliun dalam tiga seri dengan bagi hasil setara 7,00 sampai 7,20 persen per tahun, bagian dari program berkelanjutan senilai Rp10 triliun.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BRIS",
   "sukuk",
   "obligasi syariah",
   "pendanaan bank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/36b03ef8e4_e250761669.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "amor-setujui-rencana-refloat-5-08-juta-saham-buyback",
  "category": "Aksi Korporasi",
  "title": "AMOR Setujui Rencana [Refloat] 5,08 Juta Saham Buyback",
  "deck": "RUPST AMOR menyetujui pengalihan maksimal 5.084.827 saham hasil buyback secara bertahap dari 10 November 2026 hingga 31 Oktober 2027.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AMOR",
   "RUPST",
   "buyback saham",
   "Ashmore Asset Management"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2a1b28714a_21fb2a4176.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "live-jawab-permintaan-bei-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "LIVE Jawab Permintaan BEI soal [Volatilitas] Saham",
  "deck": "PT Homeco Victoria Makmur Tbk menanggapi permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum terbuka ke publik.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIVE",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/17ff4699e5_2300f5d4e9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "acst-jadwalkan-rupslb-15-desember-cut-off-20-november",
  "category": "Aksi Korporasi",
  "title": "ACST Jadwalkan [RUPSLB] 15 Desember, Cut-off 20 November",
  "deck": "Acset Indonusa mengumumkan rencana RUPSLB pada 15 Desember 2026, dengan pemegang saham per 20 November 2026 berhak hadir dan usul agenda dibuka hingga 16 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ACST",
   "RUPSLB",
   "Acset Indonusa",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7527b9b5b6_157274e9d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-panggil-rupslb-ganti-direktur-utama-30-november",
  "category": "Aksi Korporasi",
  "title": "AYLS panggil RUPSLB, ganti [Direktur Utama] 30 November",
  "deck": "AYLS mengundang pemegang saham ke RUPSLB 30 November 2026 untuk membahas pergantian Direktur Utama, penyesuaian KBLI, dan perubahan Anggaran Dasar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AYLS",
   "RUPSLB",
   "Direksi",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c6162af180_e8bfb2ed01.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "enrg-kepemilikan-cgs-international-susut-lewat-reverse-repo",
  "category": "Aksi Korporasi",
  "title": "ENRG: Kepemilikan CGS International Susut Lewat [Reverse REPO]",
  "deck": "CGS International Sekuritas Indonesia melaporkan kepemilikan sahamnya di ENRG turun dari 7,78% menjadi 6,89% melalui transaksi reverse repo pada 3 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ENRG",
   "kepemilikan saham",
   "CGS International",
   "reverse repo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-5111-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tguk-vcg-tawar-tender-wajib-rp56-per-saham",
  "category": "Aksi Korporasi",
  "title": "TGUK: VCG Tawar [Tender] Wajib Rp56 per Saham",
  "deck": "VCG menawar beli maksimal 766,7 juta saham publik TGUK senilai Rp42,9 miliar pada Rp56 per saham, periode 9 November-8 Desember 2026, menyusul alih kendali dari DKI.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TGUK",
   "tender wajib",
   "akuisisi",
   "VCG"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d1042613f4_e8ce916a9c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "port-jadwalkan-pembayaran-dividen-interim-rp35-6-per-saham",
  "category": "Aksi Korporasi",
  "title": "PORT Jadwalkan Pembayaran [Dividen] Interim Rp35,6 per Saham",
  "deck": "PORT menjadwalkan dividen interim tunai Rp100,25 miliar atau Rp35,6 per saham, dengan recording date 18 November dan pembayaran 3 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PORT",
   "dividen interim",
   "pelabuhan",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/c160b4f28d_920009977f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koka-pastikan-tak-ada-informasi-material-di-balik-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "KOKA Pastikan Tak Ada Informasi Material di Balik [Volatilitas] Saham",
  "deck": "Merespons permintaan penjelasan Bursa Efek Indonesia, manajemen KOKA menyatakan tidak ada fakta material maupun rencana korporasi yang memicu pergerakan harga sahamnya.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOKA",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/34d9d14204_7061310335.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nfcx-rencanakan-buyback-saham-senilai-rp87-miliar",
  "category": "Aksi Korporasi",
  "title": "NFCX Rencanakan [Buyback] Saham Senilai Rp87 Miliar",
  "deck": "NFC Indonesia (NFCX) akan membeli kembali maksimal 49 juta saham atau 7,35 persen modal disetor senilai hingga Rp87 miliar, periode 9 November 2026 sampai 8 Februari 2027.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "NFCX",
   "buyback saham",
   "pembelian kembali saham",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/457224eb51_8ce264e69e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "plas-dibuka-sementara-untuk-transaksi-buyback-jelang-delisting",
  "category": "Aksi Korporasi",
  "title": "PLAS Dibuka Sementara untuk Transaksi [Buyback] Jelang Delisting",
  "deck": "BEI mencabut sementara suspensi saham PLAS khusus di pasar negosiasi Jumat ini, hanya untuk transaksi crossing buyback saham jelang delisting perseroan.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PLAS",
   "delisting",
   "suspensi saham",
   "buyback"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/82e3cd9185_09850bbb43.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rdtx-setujui-stock-split-1-20-saham-beredar-ke-5-37-miliar",
  "category": "Aksi Korporasi",
  "title": "RDTX Setujui [Stock Split] 1:20, Saham Beredar ke 5,37 Miliar",
  "deck": "RUPSLB Roda Vivatex pada 4 November 2026 menyetujui pemecahan saham 1 banding 20, nilai nominal turun dari Rp500 menjadi Rp25 per saham.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RDTX",
   "stock split",
   "RUPSLB",
   "Roda Vivatex"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/eb116e33a7_46472931c7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "scco-ganti-anggota-komite-audit-ketua-tetap-dewan-nyoman",
  "category": "Aksi Korporasi",
  "title": "SCCO Ganti [Anggota] Komite Audit, Ketua Tetap Dewan Nyoman",
  "deck": "Efektif 5 November 2026, Supreme Cable Manufacturing & Commerce mengganti satu anggota komite audit, sementara ketua komite tidak berubah.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SCCO",
   "komite audit",
   "tata kelola perusahaan",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ece1035318_c20415c47e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-direksi-beli-10-juta-saham-rp2-93-miliar",
  "category": "Aksi Korporasi",
  "title": "AVIA: Direksi [Beli] 10 Juta Saham Rp2,93 Miliar",
  "deck": "Robert Christian Tanoko, direksi Avia Avian, menambah 10 juta saham lewat dua transaksi pada 4 November 2026 senilai total Rp2,93 miliar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AVIA",
   "kepemilikan saham",
   "direksi",
   "insider trading"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-2087-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tpt-agustus-2026-4-75-naik-dari-februari",
  "category": "Makroekonomi",
  "title": "TPT Agustus 2026 [4,75%], Naik dari Februari",
  "deck": "Tingkat pengangguran terbuka naik tipis dari Februari 2026, tapi masih lebih rendah dibanding Agustus tahun lalu",
  "date": "6 November 2026",
  "image": "assets/img/petani-sawah.jpg",
  "tags": [
   "bps",
   "ketenagakerjaan",
   "pengangguran",
   "tpt"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "kebakaran-landa-menara-pendingin-pabrik-oppm-tak-ganggu-produksi",
  "category": "Aksi Korporasi",
  "title": "Kebakaran Landa [Menara Pendingin] Pabrik OPPM, Tak Ganggu Produksi",
  "deck": "Kebakaran terjadi di sebagian unit menara pendingin pabrik OPPM pada 3 November 2026, berhasil dikendalikan dalam dua jam tanpa korban jiwa.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "kebakaran pabrik",
   "pulp dan kertas",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d5e82e18fc_5609fe8ccd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pertumbuhan-uang-primer-bi-oktober-melambat-jadi-7-0-persen",
  "category": "Moneter",
  "title": "Pertumbuhan Uang Primer BI Oktober [Melambat] jadi 7,0 Persen",
  "deck": "Bank Indonesia melaporkan uang primer adjusted Oktober 2026 tumbuh 7,0 persen dari setahun lalu, melambat dari 9,3 persen pada September.",
  "date": "6 November 2026",
  "image": "assets/img/brankas-uang-sentral.jpg",
  "tags": [],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "pertumbuhan-harga-rumah-primer-melambat-di-triwulan-iii",
  "category": "Makroekonomi",
  "title": "Pertumbuhan Harga Rumah Primer [Melambat] di Triwulan III",
  "deck": "Pertumbuhan harga rumah baru melambat ke 0,58 persen dibanding setahun lalu pada triwulan III 2026, sementara penjualan turun 8,43 persen di seluruh tipe rumah.",
  "date": "6 November 2026",
  "image": "assets/img/bendungan.jpg",
  "tags": [
   "properti residensial",
   "harga rumah",
   "penjualan rumah",
   "KPR"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bipp-direksi-safire-tambah-8-4-juta-saham-hak-suara-turun",
  "category": "Aksi Korporasi",
  "title": "BIPP: Direksi Safire Tambah [8,4 Juta] Saham, Hak Suara Turun",
  "deck": "Safire Capital, direksi asing BIPP, membeli tambahan 8,4 juta saham lewat repurchase agreement, tapi hak suaranya turun ke 56,17% karena basis saham perusahaan membesar.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIPP",
   "kepemilikan saham",
   "Safire Capital",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-1429-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dewi-pemegang-saham-lepas-6-7-juta-saham-hak-suara-ke-7-7",
  "category": "Aksi Korporasi",
  "title": "DEWI: Pemegang saham [lepas] 6,7 juta saham, hak suara ke 7,7%",
  "deck": "Sujito Ngatiman menjual 6,7 juta saham DEWI senilai sekitar Rp1,55 miliar, sehingga hak suaranya turun dari 8,00% menjadi 7,70%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DEWI",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-6545-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "totl-bagikan-dividen-interim-rp136-4-miliar-rp40-per-saham",
  "category": "Aksi Korporasi",
  "title": "TOTL Bagikan [Dividen] Interim Rp136,4 Miliar, Rp40 per Saham",
  "deck": "Total Bangun Persada menetapkan dividen interim tunai Rp40 per saham atau total Rp136,4 miliar, dengan pembayaran pada 4 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOTL",
   "dividen interim",
   "konstruksi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/09e8345e2d_45c5369d28.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lppi-rampungkan-realisasi-dana-obligasi-sukuk-rp2-74-triliun",
  "category": "Aksi Korporasi",
  "title": "LPPI rampungkan [realisasi] dana obligasi-sukuk Rp2,74 triliun",
  "deck": "LPPI melaporkan penggunaan dana dari empat obligasi dan sukuk berkelanjutan senilai total Rp2,74 triliun, mayoritas untuk membayar utang, dengan sisa Rp42,06 miliar masih mengendap di deposito.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LPPI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b94791b0eb_e9173d36e3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-peduli-kenalkan-urban-farming-lewat-brinita",
  "category": "BUMN",
  "title": "BRI Peduli Kenalkan Urban Farming Lewat [BRInita]",
  "deck": "BRI Peduli memperkenalkan program urban farming berbasis komunitas BRInita di Bandung, mengajak 35 jurnalis menanam dan memanen langsung di lahan warga.",
  "date": "6 November 2026",
  "image": "assets/img/bri-peduli-kenalkan-urban-farming-lewat-brinita.jpg",
  "imageV": "mw4hp8gb",
  "tags": [
   "BRI Peduli",
   "BRInita",
   "urban farming",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476910-bri-peduli-kenalkan-urban-farming-berbasis-komunitas-lewat-brinita-ajak-jurnalis-turun-langsung-bertani-di-kota"
 },
 {
  "slug": "gcc-gresik-beroperasi-umkm-lokal-incar-pasar-baru",
  "category": "UMKM",
  "title": "GCC Gresik [Beroperasi], UMKM Lokal Incar Pasar Baru",
  "deck": "Gresik Convention Center resmi beroperasi sejak 4 November 2026, membuka peluang bisnis bagi UMKM katering, dekorasi, dan event organizer di sekitar kawasan industri Gresik.",
  "date": "6 November 2026",
  "image": "assets/img/gcc-gresik-beroperasi-umkm-lokal-incar-pasar-baru.jpg",
  "imageV": "mw4hp8ul",
  "tags": [
   "GCC",
   "Gresik",
   "UMKM",
   "ekonomi lokal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476908-gresik-convention-center-mulai-beroperasi-umkm-lokal-berpeluang-dapat-pasar-baru"
 },
 {
  "slug": "harga-emas-antam-naik-jadi-rp2-565-000-per-gram",
  "category": "Bisnis",
  "title": "Harga Emas Antam [Naik] Jadi Rp2.565.000 per Gram",
  "deck": "Harga emas batangan Antam naik Rp8 ribu per gram pada 6 November 2026, sementara harga buyback juga ikut terkerek naik.",
  "date": "6 November 2026",
  "image": "assets/img/harga-emas-antam-naik-jadi-rp2-565-000-per-gram.jpg",
  "imageV": "mw4hp9gz",
  "tags": [
   "emas antam",
   "harga emas",
   "buyback emas",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476903-harga-emas-antam-hari-ini-6-november-2026-naik-jadi-rp2565000-per-gram-buyback-ikut-melonjak"
 },
 {
  "slug": "mknt-pastikan-tak-ada-info-baru-pengendali-tetap-kunci-saham-uma",
  "category": "Aksi Korporasi",
  "title": "MKNT Pastikan Tak Ada Info Baru, Pengendali Tetap Kunci Saham [UMA]",
  "deck": "MKNT, kini bernama PT Remitra Global International, menegaskan tidak ada info material baru menyusul surat permintaan penjelasan BEI atas volatilitas transaksi sahamnya.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MKNT",
   "volatilitas saham",
   "Remitra Global International",
   "Headwell Bintang Energi Hijau"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1f95f1659e_5db40b0f2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-komisaris-henry-liem-jual-350-000-lembar-saham",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 350.000 Lembar Saham",
  "deck": "Komisaris AKPI Henry Liem melepas 350.000 saham pada 5 November 2026, mengurangi kepemilikannya dari 3,22 juta menjadi 2,87 juta lembar dan hak suara dari 0,526% menjadi 0,469%.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AKPI",
   "Argha Karya Prima",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-06112026-3961-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pthk-siapkan-rp1-triliun-untuk-pelunasan-obligasi-2016",
  "category": "Aksi Korporasi",
  "title": "PTHK Siapkan Rp1 Triliun untuk [Pelunasan] Obligasi 2016",
  "deck": "Hutama Karya (PTHK) menyatakan telah menyediakan dana Rp1 triliun di rekening bank untuk membayar pokok Obligasi Berkelanjutan I Tahap I 2016 yang jatuh tempo 21 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PTHK",
   "Hutama Karya",
   "obligasi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e8c7f01090_ebd6b96871.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ppln-lepas-direktur-distribusi-ke-kursi-dirjen-esdm",
  "category": "Aksi Korporasi",
  "title": "PPLN Lepas Direktur Distribusi ke Kursi [Dirjen] ESDM",
  "deck": "Direktur Distribusi PLN Arsyadany G. Akmalaputri diangkat jadi Dirjen Ketenagalistrikan ESDM, posisinya untuk sementara dirangkap Direktur Niaga M. Fahrur Rozy sambil menunggu RUPS.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PPLN",
   "Direksi PLN",
   "Dirjen ESDM",
   "Pergantian Direktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/61cd8fc5f0_7b3604b9a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "agrs-gelar-rupslb-ganti-direktur-utama-dan-status-pma",
  "category": "Aksi Korporasi",
  "title": "AGRS Gelar RUPSLB, [Ganti] Direktur Utama dan Status PMA",
  "deck": "Bank IBK Indonesia mengundang RUPSLB 30 November 2026 untuk mengganti direksi dan menegaskan status penanaman modal asing.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "AGRS",
   "RUPSLB",
   "Bank IBK Indonesia",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/5a8ad22415_55c9f4bf39.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-akhiri-rencana-jual-saham-kdtn-ke-ruby-mining",
  "category": "Aksi Korporasi",
  "title": "CSIS Akhiri Rencana Jual Saham [KDTN] ke Ruby Mining",
  "deck": "CSIS bersama dua mitranya dan Ruby Mining Hong Kong resmi membatalkan rencana penjualan 86 persen saham PT Puri Sentul Permai (KDTN) yang sudah dinegosiasikan sejak akhir 2025.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CSIS",
   "KDTN",
   "akuisisi",
   "Ruby Mining"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e6a1faa9a2_136f920bb8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "roti-jadwalkan-rupslb-15-desember-catat-batas-pendaftaran",
  "category": "Aksi Korporasi",
  "title": "ROTI Jadwalkan [RUPSLB] 15 Desember, Catat Batas Pendaftaran",
  "deck": "Nippon Indosari Corpindo mengumumkan rencana RUPSLB pada 15 Desember 2026, pemegang saham yang berhak hadir tercatat per 20 November 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ROTI",
   "RUPSLB",
   "Nippon Indosari Corpindo",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/de65d60bd2_eeee44fb2c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "oppm-tawarkan-obligasi-rp3-33-triliun-dan-us-25-juta",
  "category": "Aksi Korporasi",
  "title": "OPPM Tawarkan [Obligasi] Rp3,33 Triliun dan US$25 Juta",
  "deck": "OPPM menawarkan obligasi rupiah hingga Rp3,33 triliun dan obligasi dolar hingga US$25 juta pada 6-9 November 2026, melengkapi program utang Rp12 triliun yang hampir rampung.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "OPPM",
   "obligasi korporasi",
   "pulp dan kertas",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/410bd1d4a4_f8d1ec664b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cpri-panggil-rupst-26-november-bahas-realisasi-dana-ipo-2019",
  "category": "Aksi Korporasi",
  "title": "CPRI Panggil RUPST 26 November, Bahas [Realisasi] Dana IPO 2019",
  "deck": "RUPS Tahunan CPRI digelar 26 November 2026 di Jakarta, membahas laporan keuangan 2025, penggunaan laba, auditor baru, realisasi dana IPO 2019, dan susunan direksi-komisaris.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CPRI",
   "RUPS Tahunan",
   "properti",
   "dana IPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/16a2c2021c_5b35522326.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smii-dana-obligasi-tahap-ii-baru-terealisasi-36-29",
  "category": "Aksi Korporasi",
  "title": "SMII: Dana Obligasi Tahap II Baru Terealisasi [36,29%]",
  "deck": "PT Sarana Multi Infrastruktur (SMII) melaporkan realisasi dana dua obligasi senilai Rp5,3 triliun ke OJK. Tahap I terpakai penuh, tahap II baru 36,29 persen, sisanya mengendap di deposito.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMII",
   "obligasi korporasi",
   "realisasi dana",
   "pembiayaan infrastruktur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f7e8d01373_8f5b0e81b5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tcid-jadwalkan-rupslb-15-desember-agenda-menyusul",
  "category": "Aksi Korporasi",
  "title": "TCID Jadwalkan [RUPSLB] 15 Desember, Agenda Menyusul",
  "deck": "Mandom Indonesia (TCID) akan menggelar RUPS Luar Biasa pada 15 Desember 2026. Pemegang saham per 20 November 2026 yang berhak hadir dan memberi suara.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TCID",
   "Mandom Indonesia",
   "RUPSLB",
   "korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d136cc2dfc_b1beafd2c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bexi-siapkan-dana-rp22-5-miliar-untuk-pelunasan-obligasi",
  "category": "Aksi Korporasi",
  "title": "BEXI Siapkan Dana Rp22,5 Miliar untuk [Pelunasan] Obligasi",
  "deck": "Indonesia Eximbank menyatakan telah menyiapkan dana Rp22,5 miliar untuk membayar pokok Obligasi Berkelanjutan IV Tahap VIII Seri C yang jatuh tempo 6 Desember 2026.",
  "date": "6 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BEXI",
   "obligasi",
   "LPEI",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d9686603b8_140f2309ea.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dana-perkebunan-sawit-meluas-ke-petani-kakao-dan-kelapa",
  "category": "Industri",
  "title": "Dana Perkebunan Sawit Meluas ke Petani [Kakao] dan Kelapa",
  "deck": "Pemerintah memperluas mandat dana sawit ke petani kakao dan kelapa, mewajibkan pelaporan ekspor lewat sistem digital sejak Juni 2026, dan mendorong biodiesel B50 sejak Juli 2026.",
  "date": "5 November 2026",
  "image": "assets/img/pabrik-gula.jpg",
  "tags": [
   "sawit",
   "kakao",
   "kelapa",
   "BPDP"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7202/perkuat-tata-kelola-perkebunan-pemerintah-dorong-pendanaan-transparansi-dan-keberlanjutan-untuk-kesejahteraan-petani",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "menn-penjualan-ambruk-91-saham-tetap-disuspensi",
  "category": "Aksi Korporasi",
  "title": "MENN: Penjualan Ambruk 91%, Saham Tetap [Disuspensi]",
  "deck": "Materi public expose MENN mengungkap penjualan 2025 ambruk ke Rp704 juta dari Rp8,05 miliar dan rugi Rp17,15 miliar, sementara sahamnya masih disuspensi BEI sejak 29 Oktober 2025.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "suspensi saham",
   "laporan keuangan",
   "perubahan pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/231a76cc1e_373ac7748e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-rinci-pinjaman-sii-rp5-triliun-bunga-7-5-setahun",
  "category": "Aksi Korporasi",
  "title": "DOOH Rinci Pinjaman SII Rp5 Triliun, Bunga [7,5%] Setahun",
  "deck": "Keterbukaan tambahan DOOH merinci isi perjanjian pinjaman Rp5 triliun dari SII, opsi konversi jadi saham, dan pembaruan daftar pemegang saham perusahaan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "pinjaman pemegang saham",
   "akuisisi INET",
   "SII"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/abcf02cd77_26ffc3e799.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-akuisisi-29-88-saham-inet-senilai-rp2-triliun-utang",
  "category": "Aksi Korporasi",
  "title": "DOOH Akuisisi 29,88% Saham INET Senilai Rp2 Triliun [Utang]",
  "deck": "Anak usaha DOOH, CNI, membeli 6,685 miliar saham INET dari AKUN senilai Rp2 triliun yang dibiayai pinjaman dari pemegang saham mayoritas DOOH, PT Sinergi Internasional Investama (SII).",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "INET",
   "akuisisi",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/f407c51518_8fe1ea60f7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-alihkan-rp120-miliar-dana-ipo-ke-investasi-inet",
  "category": "Aksi Korporasi",
  "title": "DOOH Alihkan [Rp120 Miliar] Dana IPO ke Investasi INET",
  "deck": "DOOH minta persetujuan pemegang saham mengubah penggunaan sisa dana IPO, mengalihkan Rp120 miliar untuk suntikan modal ke anak usaha yang berinvestasi di saham INET.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "penggunaan dana IPO",
   "INET",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/80d152d2df_77935d13ab.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "realisasi-investasi-bekasi-tembus-rp9-7-triliun-di-semester-i",
  "category": "Bisnis",
  "title": "Realisasi [Investasi] Bekasi Tembus Rp9,7 Triliun di Semester I",
  "deck": "Realisasi investasi Kota Bekasi mencapai Rp9,7 triliun, 81 persen dari target tahunan Rp12,2 triliun, dengan properti naik ke posisi kedua seiring ekspansi kawasan terpadu Summarecon.",
  "date": "5 November 2026",
  "image": "assets/img/realisasi-investasi-bekasi-tembus-rp9-7-triliun-di-semester-i.jpg",
  "imageV": "mw3rzw9s",
  "tags": [
   "bekasi",
   "investasi",
   "properti",
   "summarecon"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476860-realisasi-investasi-kota-bekasi-capai-rp97-triliun-sektor-properti-terus-tumbuh"
 },
 {
  "slug": "dooh-rombak-jadi-holding-bisnis-iklan-pindah-ke-anak-usaha",
  "category": "Aksi Korporasi",
  "title": "DOOH Rombak Jadi [Holding], Bisnis Iklan Pindah ke Anak Usaha",
  "deck": "DOOH menambah KBLI Aktivitas Perusahaan Induk untuk jadi holding company, mengalihkan bisnis iklan ke anak usaha MSS, dan butuh restu RUPSLB pemegang saham.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "RUPSLB",
   "holding company",
   "akuisisi INET"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/443dfe22eb_32f1bbc930.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dooh-rencanakan-rights-issue-154-7-miliar-saham-rasio-20-1",
  "category": "Aksi Korporasi",
  "title": "DOOH Rencanakan [Rights Issue] 154,7 Miliar Saham, Rasio 20:1",
  "deck": "DOOH akan menerbitkan saham baru sebanyak-banyaknya 154,7 miliar lembar untuk melunasi utang Rp2 triliun ke pengendali SII dan membiayai ekspansi infrastruktur AI, dengan dilusi hingga 95,24 persen.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "DOOH",
   "rights issue",
   "PMHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e3e0f5adbc_f402220840.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cx-week-2026-soroti-customer-experience-bagi-umkm",
  "category": "UMKM",
  "title": "CX Week 2026 Soroti [Customer Experience] bagi UMKM",
  "deck": "The Bridge Academy menggelar konferensi CX Week 2026 di Jakarta Selatan dan meluncurkan buku baru untuk mendorong pelaku UMKM hingga korporat memperbaiki layanan pelanggan.",
  "date": "5 November 2026",
  "image": "assets/img/cx-week-2026-soroti-customer-experience-bagi-umkm.jpg",
  "imageV": "mw3rzwpo",
  "tags": [
   "UMKM",
   "customer experience",
   "pelayanan pelanggan",
   "bisnis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476858-mengupas-tuntas-pentingnya-interaksi-pelanggan-bagi-pelaku-usaha-umkm-hingga-korporat"
 },
 {
  "slug": "futr-jadwalkan-rupslb-14-desember-agenda-belum-diumumkan",
  "category": "Aksi Korporasi",
  "title": "FUTR Jadwalkan [RUPSLB] 14 Desember, Agenda Belum Diumumkan",
  "deck": "FUTR menjadwalkan RUPSLB elektronik pada 14 Desember 2026. Pemegang saham yang tercatat per 19 November berhak hadir, sementara agenda rapat belum diumumkan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FUTR",
   "RUPSLB",
   "tata kelola",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7a6c697149_1f96b3b66b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ahy-proyek-air-limbah-pluit-tekan-ekstraksi-air-tanah",
  "category": "Makroekonomi",
  "title": "AHY: Proyek Air Limbah Pluit [Tekan] Ekstraksi Air Tanah",
  "deck": "Menko Infra AHY menyebut progres proyek pengolahan air limbah JSDP Zona 1 Pluit di Jakarta Utara sudah 76 persen, dengan target menekan penyedotan air tanah penyebab tanah ambles.",
  "date": "5 November 2026",
  "image": "assets/img/ahy-proyek-air-limbah-pluit-tekan-ekstraksi-air-tanah.jpg",
  "imageV": "mw3rzx6o",
  "tags": [
   "AHY",
   "Jakarta Utara",
   "air tanah",
   "IPAL Pluit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476845-menko-ahy-sebut-proyek-pembangunan-jsdp-zona-1-pluit-oleh-kemen-pu-tekan-penggunaan-air-tanah"
 },
 {
  "slug": "cita-tegaskan-tak-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "CITA Tegaskan Tak Terlibat [Penyelidikan] Karhutla Singapura",
  "deck": "Cita Mineral Investindo menjawab permintaan penjelasan BEI soal pemanggilan Pemerintah Singapura ke grup usaha agribisnis terafiliasi terkait investigasi karhutla, dan menyatakan tidak terlibat.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "CITA",
   "karhutla",
   "Bursa Efek Indonesia",
   "Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b1ef77d120_7e37c66e82.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wifi-raih-rating-ida-untuk-obligasi-rp1-25-triliun",
  "category": "Aksi Korporasi",
  "title": "WIFI Raih Rating [idA] untuk Obligasi Rp1,25 Triliun",
  "deck": "PEFINDO menetapkan rating idA (Single A) untuk tiga seri Obligasi Berkelanjutan I WIFI senilai total Rp1,25 triliun, berlaku 3 November 2026 hingga 1 November 2027.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIFI",
   "obligasi",
   "PEFINDO",
   "rating"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/758dbca71a_6201875009.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgjo-dirikan-anak-usaha-energi-lestari-cemerlang",
  "category": "Aksi Korporasi",
  "title": "PGJO Dirikan [Anak Usaha] Energi Lestari Cemerlang",
  "deck": "PT Bahtera Bumi Raya Tbk mendirikan anak usaha baru, PT Energi Lestari Cemerlang, untuk masuk ke bisnis pengisian daya kendaraan listrik dan sewa alat berat senilai Rp500 juta.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGJO",
   "anak usaha",
   "transaksi afiliasi",
   "kendaraan listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/771cc5e2c5_b48ee557b7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-ri-triwulan-iii-tumbuh-5-47-persen",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Triwulan III [Tumbuh] 5,47 Persen",
  "deck": "Pertumbuhan ekonomi Indonesia triwulan III 2026 naik menjadi 5,47 persen, ditopang belanja pemerintah dan investasi yang menguat.",
  "date": "5 November 2026",
  "image": "assets/img/keranjang-belanja-ibu.jpg",
  "tags": [
   "pertumbuhan ekonomi",
   "Bank Indonesia",
   "PDB",
   "triwulan III 2026"
  ],
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824126.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "wika-anak-usaha-wikon-digugat-pkpu-oleh-kreditur",
  "category": "Aksi Korporasi",
  "title": "WIKA: Anak Usaha WIKON Digugat [PKPU] oleh Kreditur",
  "deck": "WIKA melaporkan ke OJK bahwa anak usahanya, WIKON, menjadi pihak tergugat dalam permohonan PKPU yang diajukan PT Gajah Mas Tehnik di Pengadilan Niaga Jakarta Pusat.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "WIKA",
   "PKPU",
   "WIKON",
   "restrukturisasi utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/4d01f62a36_5d2cfa3b45.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-hadirkan-ruang-pintar-untuk-52-anak-desa-sade",
  "category": "BUMN",
  "title": "PNM Hadirkan [Ruang Pintar] untuk 52 Anak Desa Sade",
  "deck": "PNM membuka fasilitas belajar Ruang Pintar bagi 52 anak di Desa Sade, Lombok Tengah, sebagai bagian dari program tanggung jawab sosial sekaligus pemulihan pascakebakaran yang melanda desa itu.",
  "date": "5 November 2026",
  "image": "assets/img/pnm-hadirkan-ruang-pintar-untuk-52-anak-desa-sade.jpg",
  "imageV": "mw3knfn1",
  "tags": [
   "PNM",
   "Desa Sade",
   "Lombok Tengah",
   "TJSL"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476831-dari-kearifan-lokal-desa-sade-pnm-hadirkan-ruang-pintar-untuk-menumbuhkan-mimpi-dan-masa-depan-anak"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-47-persen-pada-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh [5,47] Persen pada Triwulan III 2026",
  "deck": "Ekonomi Indonesia tumbuh 5,47 persen pada triwulan III 2026, naik dari 5,29 persen pada triwulan sebelumnya, didorong lonjakan belanja pemerintah dan konsumsi rumah tangga.",
  "date": "5 November 2026",
  "image": "assets/img/koperasi-desa.jpg",
  "tags": [
   "Pertumbuhan Ekonomi",
   "PDB Triwulan III",
   "Investasi",
   "Stimulus Akhir Tahun"
  ],
  "sourceUrl": "https://ekon.go.id/publikasi/detail/7201/ekonomi-indonesia-triwulan-iii-2026-tumbuh-547-fundamental-kuat-jaga-momentum-pertumbuhan",
  "sourceLabel": "Kementerian Koordinator Bidang Perekonomian"
 },
 {
  "slug": "minyak-nilam-resmi-masuk-daftar-komoditas-srg",
  "category": "Bisnis",
  "title": "Minyak Nilam Resmi Masuk Daftar Komoditas [SRG]",
  "deck": "Kementerian Perdagangan menjadikan minyak nilam komoditas ke-31 yang bisa disimpan dalam Sistem Resi Gudang, membuka jalur pembiayaan baru bagi petani dan penyuling.",
  "date": "5 November 2026",
  "image": "assets/img/kemasan-produk-gudang.jpg",
  "tags": [
   "Sistem Resi Gudang",
   "Minyak Nilam",
   "Bappebti",
   "Kementerian Perdagangan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-perdagangan-komoditas-unggulan-indonesia-kemendag-menetapkan-minyak-nilam-menjadi-komoditas-srg",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "sbat-jadi-sasaran-tender-saham-mbst-harga-rp2-per-lembar",
  "category": "Aksi Korporasi",
  "title": "SBAT Jadi Sasaran [Tender] Saham MBST, Harga Rp2 per Lembar",
  "deck": "MBST menawar tender sukarela maksimal 51,52 persen saham SBAT seharga Rp2 per lembar, senilai hingga Rp4,9 miliar, dengan pembayaran dijadwalkan 18 Januari 2027.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SBAT",
   "tender sukarela",
   "MBST",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d2d762a1e1_c8e7f48f50.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tirt-bantah-terlibat-penyelidikan-karhutla-singapura",
  "category": "Aksi Korporasi",
  "title": "TIRT Bantah Terlibat Penyelidikan [Karhutla] Singapura",
  "deck": "Tirta Mahakam Resources menegaskan ke BEI bahwa dirinya dan grupnya tidak menjadi subjek penyelidikan Pemerintah Singapura atas kebakaran hutan dan lahan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TIRT",
   "karhutla",
   "Bursa Efek Indonesia",
   "Singapura"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/52c13be528_cb03cffcbb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pgeo-ungkap-risiko-msci-dan-target-free-float-15-di-pubex",
  "category": "Aksi Korporasi",
  "title": "PGEO Ungkap Risiko [MSCI] dan Target Free Float 15% di Pubex",
  "deck": "Dalam public expose 3 November 2026, manajemen PGEO membahas risiko penurunan klasifikasi pasar modal Indonesia oleh MSCI, rencana menaikkan free float ke 15%, serta progres proyek dan pembiayaan panas bumi.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PGEO",
   "public expose",
   "MSCI",
   "free float"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/74d6d65924_a8e5a542c1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-siapkan-rights-issue-danantara-bayar-pakai-saham-gmfi",
  "category": "Aksi Korporasi",
  "title": "GIAA Siapkan Rights Issue, Danantara Bayar Pakai Saham [GMFI]",
  "deck": "Garuda mengoreksi keterbukaan rights issue dan menegaskan Danantara akan membayar haknya dengan menyetor saham GMFI, bukan tunai, menyusul rampungnya pengalihan saham tersebut ke Danantara.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "GMFI",
   "Danantara",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/050ad1ebf8_62f8eb6572.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-alihkan-rp46-39-miliar-dana-obligasi-minta-restu-rupo",
  "category": "Aksi Korporasi",
  "title": "TOBA Alihkan Rp46,39 Miliar Dana Obligasi, Minta Restu [RUPO]",
  "deck": "TOBA mengusulkan mengalihkan Rp46,39 miliar dana obligasi, yang semula untuk setoran modal ke anak usaha TMU, menjadi modal kerja perseroan. Keputusan diambil dalam RUPO 19 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "RUPO",
   "penggunaan dana"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a37c161719_602a6e4dcb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-alihkan-rp89-miliar-dana-obligasi-ke-modal-kerja",
  "category": "Aksi Korporasi",
  "title": "TOBA Alihkan Rp89 Miliar Dana Obligasi ke [Modal Kerja]",
  "deck": "TBS Energi Utama (TOBA) mengalihkan Rp89 miliar dana obligasi dari rencana setoran modal ke anak usaha limbah AMES menjadi modal kerja, menunggu persetujuan RUPO 19 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "obligasi",
   "RUPO",
   "TBS Energi Utama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e502d09a24_10d3135235.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbtn-bayar-mandiri-sekuritas-rp16-miliar-untuk-rombak-bancassurance",
  "category": "Aksi Korporasi",
  "title": "BBTN Bayar Mandiri Sekuritas [Rp16 Miliar] untuk Rombak Bancassurance",
  "deck": "BBTN menunjuk Mandiri Sekuritas sebagai lead advisor penyusunan ulang kemitraan bancassurance senilai Rp16 miliar, tergolong transaksi afiliasi karena sama-sama dikendalikan negara.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBTN",
   "transaksi afiliasi",
   "Mandiri Sekuritas",
   "bancassurance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ec35d6f6b4_eecd4f5d05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kota-panggil-ulang-rupslb-bahas-rights-issue-dan-akuisisi",
  "category": "Aksi Korporasi",
  "title": "KOTA Panggil Ulang RUPSLB, Bahas [Rights Issue] dan Akuisisi",
  "deck": "PT DMS Propertindo Tbk (KOTA) menjadwal ulang RUPSLB ke 27 November 2026, membahas rights issue, saham seri baru, dan akuisisi dua perusahaan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KOTA",
   "RUPSLB",
   "rights issue",
   "akuisisi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7d03d0b2c4_7e0bd418c8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tarif-listrik-tidak-naik-lonjakan-tagihan-karena-cuaca-panas",
  "category": "Energi",
  "title": "Tarif Listrik [Tidak] Naik, Lonjakan Tagihan karena Cuaca Panas",
  "deck": "FKBI menegaskan tarif listrik Triwulan IV 2026 tidak naik. Tagihan yang terasa membesar dipicu cuaca panas yang mendorong pemakaian AC lebih banyak.",
  "date": "5 November 2026",
  "image": "assets/img/tarif-listrik-tidak-naik-lonjakan-tagihan-karena-cuaca-panas.jpg",
  "imageV": "mw3ji4o1",
  "tags": [
   "tarif listrik",
   "PLN",
   "cuaca panas",
   "konsumen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476820-tarif-listrik-tidak-naik-masyarakat-diminta-bijak-kelola-pemakaian"
 },
 {
  "slug": "vico-ganti-dirut-dan-komisaris-utama-tunggu-restu-ojk",
  "category": "Aksi Korporasi",
  "title": "VICO Ganti [Dirut] dan Komisaris Utama, Tunggu Restu OJK",
  "deck": "Direksi dan komisaris utama VICO berganti efektif 27 Oktober 2026 setelah OJK meloloskan uji kelayakan Untung Woenardi dan Sari Idayanti.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VICO",
   "pergantian direksi",
   "OJK",
   "konglomerasi keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9c961aebd8_ea52a100fc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "jmas-laba-bersih-anjlok-86-jadi-rp398-juta-di-2025",
  "category": "Aksi Korporasi",
  "title": "JMAS: Laba Bersih [Anjlok] 86% Jadi Rp398 Juta di 2025",
  "deck": "Laba bersih JMAS turun drastis dari Rp2,83 miliar menjadi Rp398 juta pada 2025, sementara liabilitas ke pemegang polis melonjak 160 persen.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "JMAS",
   "asuransi syariah",
   "laporan keuangan",
   "laba bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/08a7c80688_033c92fe41.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kdtn-rencana-pengambilalihan-ruby-mining-dibatalkan",
  "category": "Aksi Korporasi",
  "title": "KDTN: Rencana Pengambilalihan Ruby Mining [Dibatalkan]",
  "deck": "Rencana Ruby Mining Hongkong Limited mengambil alih 86 persen saham KDTN dari tiga pemegang saham lama resmi dibatalkan pada 5 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KDTN",
   "pengambilalihan",
   "akuisisi",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/37ea5a8fa2_7ab1db80af.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-gelar-rupslb-27-november-putuskan-transaksi-sbth",
  "category": "Aksi Korporasi",
  "title": "TOBA Gelar RUPSLB 27 November, Putuskan Transaksi [SBTH]",
  "deck": "RUPSLB TOBA digelar 27 November 2026 untuk menyetujui rencana investasi ke SBTH Asia Holdings, transaksi yang nilainya di atas separuh ekuitas perusahaan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "RUPSLB",
   "Transaksi Material",
   "SBTH"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/9e0f7b8b69_72e8d0101a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-koreksi-pengumuman-bagikan-saham-treasuri-ke-pemegang-saham",
  "category": "Aksi Korporasi",
  "title": "PSSI Koreksi Pengumuman, Bagikan [Saham Treasuri] ke Pemegang Saham",
  "deck": "Perseroan mengoreksi keterbukaan informasi sebelumnya: aksi korporasi ini bukan bonus saham dari laba, tapi distribusi saham treasuri ke pemegang saham dengan rasio 30:1.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "aksi korporasi",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/49cd74d7ef_c70c7233b1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-catat-rugi-rp26-9-miliar-di-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "ASBI Catat [Rugi] Rp26,9 Miliar di Kuartal III 2026",
  "deck": "Asuransi Bintang membalik laba jadi rugi Rp26,9 miliar pada sembilan bulan 2026, seiring ekuitas turun 21,8 persen menjadi Rp360,1 miliar.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "asuransi",
   "laporan keuangan",
   "rugi bersih"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105170710-65692-0/FinancialStatement-2026-III-ASBI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pssi-bagikan-saham-treasuri-172-juta-lembar-bukan-bonus-laba",
  "category": "Aksi Korporasi",
  "title": "PSSI Bagikan [Saham Treasuri] 172 Juta Lembar, Bukan Bonus Laba",
  "deck": "IMC Pelita Logistik (PSSI) membagikan 172 juta saham treasuri ke pemegang saham dengan rasio 1:30, senilai Rp17,2 miliar, efektif 27 November 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PSSI",
   "saham treasuri",
   "aksi korporasi",
   "IMC Pelita Logistik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/a3180369e5_21fbca31e8.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pemuda-lampung-unjuk-karya-umkm-dapat-modal",
  "category": "UMKM",
  "title": "Pemuda Lampung Unjuk Karya, UMKM Dapat [Modal]",
  "deck": "Ribuan pemuda Lampung berkumpul di Nusantara Youth Expo 2026, acara yang juga menyalurkan bantuan modal ke pelaku UMKM sambil membahas kesiapan ekonomi generasi muda menuju 2045.",
  "date": "5 November 2026",
  "image": "assets/img/pemuda-lampung-unjuk-karya-umkm-dapat-modal.jpg",
  "imageV": "mw3ji53g",
  "tags": [
   "UMKM",
   "Pemuda",
   "Lampung",
   "Indonesia Emas 2045"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476806-menjemput-indonesia-emas-2045-ribuan-pemuda-unjuk-kreativitas-dan-inovasi"
 },
 {
  "slug": "meta-koreksi-tanggal-cum-ex-dividen-interim-bayar-3-desember",
  "category": "Aksi Korporasi",
  "title": "META [Koreksi] Tanggal Cum-Ex Dividen Interim, Bayar 3 Desember",
  "deck": "Nusantara Infrastructure mengoreksi tanggal cum dan ex dividen interim Rp3,50 per saham di tiga pasar, tanggal pembayaran tetap 3 Desember 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "META",
   "dividen interim",
   "corporate action",
   "KSEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b365a48dc4_cee8d0302e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-dan-abpednas-dorong-literasi-keuangan-desa",
  "category": "UMKM",
  "title": "PNM dan ABPEDNAS Dorong [Literasi Keuangan] Desa",
  "deck": "PNM dan ABPEDNAS teken MoU memperluas literasi keuangan dan pendampingan usaha desa, menyasar jaringan tiga asosiasi dengan 1,2 juta anggota.",
  "date": "5 November 2026",
  "image": "assets/img/pnm-dan-abpednas-dorong-literasi-keuangan-desa.jpg",
  "imageV": "mw3ji5i5",
  "tags": [
   "PNM",
   "ABPEDNAS",
   "literasi keuangan",
   "pemberdayaan desa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476805-literasi-keuangan-jadi-tantangan-ekonomi-desa-pnm-dan-abpednas-dorong-pendampingan"
 },
 {
  "slug": "kejaksaan-ikut-awasi-penyaluran-pupuk-subsidi-di-karo",
  "category": "BUMN",
  "title": "Kejaksaan Ikut [Awasi] Penyaluran Pupuk Subsidi di Karo",
  "deck": "Kejaksaan Negeri Karo akan memantau langsung penyaluran pupuk bersubsidi sampai ke kios usai Pupuk Indonesia mensosialisasikan aturan teknis baru yang berlaku sejak September 2026.",
  "date": "5 November 2026",
  "image": "assets/img/kejaksaan-ikut-awasi-penyaluran-pupuk-subsidi-di-karo.jpg",
  "imageV": "mw3d2ym0",
  "tags": [
   "Pupuk Indonesia",
   "Pupuk Subsidi",
   "Kejaksaan",
   "Karo"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/901/pupuk-indonesia-bersama-kajari-sinergi-perbaiki-tata-kelola-penyaluran-pupuk-bersubsidi-di-karo",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "alokasi-npk-kakao-mamuju-bertambah-500-ton-jadi-5-670-ton",
  "category": "BUMN",
  "title": "Alokasi NPK Kakao Mamuju [Bertambah] 500 Ton Jadi 5.670 Ton",
  "deck": "Pemda Mamuju menambah alokasi pupuk subsidi NPK Kakao 500 ton jadi 5.670 ton lewat realokasi kedua berlaku sejak 30 Oktober 2026; realisasi penyaluran sudah 82,4 persen.",
  "date": "5 November 2026",
  "image": "assets/img/alokasi-npk-kakao-mamuju-bertambah-500-ton-jadi-5-670-ton.jpg",
  "imageV": "mw3d30tg",
  "tags": [
   "Pupuk Indonesia",
   "NPK Kakao",
   "Mamuju",
   "pupuk subsidi"
  ],
  "kreditFoto": "PT Pupuk Indonesia (Persero)",
  "sourceUrl": "https://www.pupuk-indonesia.com/media-info/detail/902/alokasi-bertambah-pupuk-indonesia-amankan-ketersediaan-dan-penyaluran-npk-kakao-di-mamuju",
  "sourceLabel": "PT Pupuk Indonesia (Persero)"
 },
 {
  "slug": "cabai-dan-telur-surplus-di-mataram-kemendag-pantau-jelang-nataru",
  "category": "Makroekonomi",
  "title": "Cabai dan Telur [Surplus] di Mataram, Kemendag Pantau Jelang Nataru",
  "deck": "Menteri Perdagangan Budi Santoso mendapati harga cabai dan telur di Pasar Kebon Roek Mataram di bawah harga acuan, dengan surplus pasokan dialihkan ke daerah lain yang kekurangan jelang Nataru.",
  "date": "5 November 2026",
  "image": "assets/img/cabai-dan-telur-surplus-di-mataram-kemendag-pantau-jelang-nataru.jpg",
  "imageV": "mw3d3adn",
  "tags": [
   "Kemendag",
   "Harga Pangan",
   "Nataru",
   "Cabai"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-pantau-pasar-kebon-roek-mataram-cabai-dan-telur-ayam-surplus-jelang-nataru",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pasar-murah-di-mataram-beras-sphp-rp11-600-per-kg",
  "category": "Bisnis",
  "title": "Pasar Murah di Mataram, Beras SPHP [Rp11.600] per Kg",
  "deck": "Kementerian Perdagangan menggelar pasar murah di Mataram, NTB, menjual beras, minyak goreng, gula, dan bumbu dapur di bawah harga eceran tertinggi.",
  "date": "5 November 2026",
  "image": "assets/img/pasar-murah-di-mataram-beras-sphp-rp11-600-per-kg.jpg",
  "imageV": "mw3d3f3e",
  "tags": [],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/perkuat-sinergi-mendag-busan-buka-pasar-murah-di-mataram-jaga-harga-bapok",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "zp-waran-untr-tak-alami-penyesuaian-usai-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "ZP: Waran UNTR Tak Alami [Penyesuaian] usai Dividen Tunai",
  "deck": "Maybank Sekuritas (ZP) menegaskan dua waran terstruktur UNTRZPCZ6A dan UNTRZPCM7A tidak disesuaikan meski UNTR membagikan dividen tunai pada 28 Oktober 2026.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ZP",
   "UNTR",
   "waran terstruktur",
   "dividen tunai"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/7d4975bdc9_d3fe23dc27.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rony-balik-untung-kuartal-iii-arus-kas-operasi-justru-negatif",
  "category": "Aksi Korporasi",
  "title": "RONY Balik Untung Kuartal III, Arus Kas Operasi Justru [Negatif]",
  "deck": "Laba bersih RONY tembus Rp1,85 miliar pada sembilan bulan 2026 berkat lonjakan jasa truk listrik dan gasifikasi batu bara, tapi kas dari operasi minus dan utang ke induk usaha di luar negeri melonjak.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RONY",
   "laporan keuangan",
   "arus kas",
   "pinjaman pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105153429-65742-0/FinancialStatement-2026-III-RONY.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kren-liabilitas-naik-26-ekuitas-induk-negatif",
  "category": "Aksi Korporasi",
  "title": "KREN: Liabilitas Naik 26%, Ekuitas Induk [Negatif]",
  "deck": "Total liabilitas KREN naik 26,14 persen menjadi Rp956,2 miliar pada September 2026, sementara ekuitas yang jadi hak pemegang saham induk berbalik negatif Rp1,03 miliar.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KREN",
   "laporan keuangan interim",
   "liabilitas",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105152615-64918-0/FinancialStatement-2026-III-KREN.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bmas-terima-pinjaman-us-10-juta-dari-pemegang-saham-kbank",
  "category": "Aksi Korporasi",
  "title": "BMAS Terima [Pinjaman] US$10 Juta dari Pemegang Saham KBank",
  "deck": "Bank Kasikorn Indonesia memperoleh fasilitas pinjaman bilateral US$10 juta dari induk usahanya di Thailand untuk menopang likuiditas jangka pendek dan penyaluran kredit.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BMAS",
   "Bank Kasikorn Indonesia",
   "pinjaman afiliasi",
   "KBank"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2b5a4c6b64_1e00ea4c98.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "lapd-rights-issue-rp59-5-m-lewat-inbreng-saham-tambang",
  "category": "Aksi Korporasi",
  "title": "LAPD Rights Issue Rp59,5 M Lewat [Inbreng] Saham Tambang",
  "deck": "Leyand International menawarkan saham baru lewat hak memesan efek terlebih dahulu senilai maksimal Rp59,5 miliar, dibayar lewat suntikan 87,5% saham tambang BSS oleh pemegang saham pengendali JSI Sinergi Mas.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LAPD",
   "rights issue",
   "akuisisi tambang",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/280315e5a8_684037eb76.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "gjtl-jelaskan-lonjakan-liabilitas-21-9-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "GJTL Jelaskan Lonjakan [Liabilitas] 21,9% ke Bursa",
  "deck": "Liabilitas Gajah Tunggal naik Rp2,45 triliun dalam sembilan bulan, didorong kenaikan utang usaha dan utang bank jangka pendek akibat harga bahan baku dan pelemahan rupiah.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GJTL",
   "Gajah Tunggal",
   "laporan keuangan",
   "utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105135932-65738-0/FinancialStatement-2026-III-GJTL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-47-di-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh [5,47%] di Triwulan III 2026",
  "deck": "BPS catat pertumbuhan ekonomi naik 0,18 poin dari triwulan sebelumnya dan jadi yang tertinggi kedua dalam setahun terakhir.",
  "date": "5 November 2026",
  "image": "assets/img/pedagang-bawang.jpg",
  "tags": [
   "ekonomi",
   "bps",
   "pertumbuhan ekonomi",
   "pdb"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "truk-pukul-rata-kanan-tender-saham-incar-jadi-pengendali",
  "category": "Aksi Korporasi",
  "title": "TRUK: Pukul Rata Kanan Tender Saham, Incar Jadi [Pengendali]",
  "deck": "PT Pukul Rata Kanan menawar beli maksimal 65,25 juta saham TRUK atau 15 persen senilai Rp740 per saham, untuk menambah kepemilikannya menjadi 30 persen dan menjadi pengendali baru.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUK",
   "tender offer",
   "pengendali saham",
   "Pukul Rata Kanan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/b5e477962e_6f37f7874f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bima-dirut-dan-wadirut-primarindo-mundur-bersamaan",
  "category": "Aksi Korporasi",
  "title": "BIMA: Dirut dan Wadirut Primarindo [Mundur] Bersamaan",
  "deck": "Direktur Utama Bambang Setiyono dan Wakil Direktur Utama David Jahja mengajukan pengunduran diri efektif 1 Januari 2027, menunggu keputusan RUPS.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIMA",
   "Primarindo Asia Infrastructure",
   "pergantian direksi",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/e25cead8b0_6120a8e135.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ultj-koreksi-jadwal-rupslb-agenda-rights-issue-frisian-flag",
  "category": "Aksi Korporasi",
  "title": "ULTJ Koreksi Jadwal RUPSLB, Agenda [Rights Issue] Frisian Flag",
  "deck": "RUPSLB ULTJ digelar Jumat, 6 November 2026, membahas rights issue, akuisisi penuh Frisian Flag Indonesia, pergantian direksi, dan dividen tambahan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "RUPSLB",
   "Frisian Flag",
   "rights issue"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/89c6af697e_aa9771dbeb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "fwct-rugi-rp45-8-miliar-penjualan-anjlok-47-persen",
  "category": "Aksi Korporasi",
  "title": "FWCT Rugi Rp45,8 Miliar, Penjualan [Anjlok] 47 Persen",
  "deck": "Laporan interim kuartal III 2026 FWCT menunjukkan penjualan turun hampir separuh, perusahaan berbalik rugi, arus kas operasional negatif, dan ekuitas menyusut.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "FWCT",
   "Wijaya Cahaya Timber",
   "laporan keuangan",
   "rugi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105114229-65561-0/FinancialStatement-2026-III-FWCT.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tama-rugi-rp97-2-miliar-ekuitas-tergerus-jadi-negatif",
  "category": "Aksi Korporasi",
  "title": "TAMA rugi Rp97,2 miliar, ekuitas tergerus jadi [negatif]",
  "deck": "Laporan keuangan interim TAMA per September 2026 menunjukkan rugi bersih melonjak dan ekuitas berbalik negatif akibat penurunan nilai properti investasi.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAMA",
   "laporan keuangan",
   "properti",
   "ekuitas negatif"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/20261105104206-65736-0/FinancialStatement-2026-III-TAMA.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tujuh-produk-indonesia-menang-g-mark-2026-di-jepang",
  "category": "Industri",
  "title": "Tujuh Produk Indonesia [Menang] G-Mark 2026 di Jepang",
  "deck": "Tujuh produk manufaktur Indonesia, dari motor listrik hingga kursi kayu, meraih penghargaan desain G-Mark 2026 di Jepang, menambah total jadi 67 produk sejak 2017.",
  "date": "5 November 2026",
  "image": "assets/img/tujuh-produk-indonesia-menang-g-mark-2026-di-jepang.jpg",
  "imageV": "mw2zynzh",
  "tags": [
   "G-Mark",
   "Desain Produk",
   "Manufaktur",
   "Kemendag"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/tujuh-produk-indonesia-raih-g-mark-2026-bukti-kreativitas-manufaktur-indonesia-makin-diakui",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "smcb-panggil-rupslb-bahas-aktivasi-bisnis-dagang-bahan-bangunan",
  "category": "Aksi Korporasi",
  "title": "SMCB Panggil RUPSLB, Bahas [Aktivasi] Bisnis Dagang Bahan Bangunan",
  "deck": "RUPSLB SMCB digelar 27 November 2026, membahas aktivasi lini usaha dagang bahan konstruksi dan pendelegasian persetujuan RKAP 2027 ke komisaris.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SMCB",
   "RUPSLB",
   "Solusi Bangun Indonesia",
   "RKAP"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6ebb4764e5_908f0dcd2f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bbkp-tuntaskan-divestasi-85-saham-kb-bukopin-finance-rp340-miliar",
  "category": "Aksi Korporasi",
  "title": "BBKP Tuntaskan [Divestasi] 85% Saham KB Bukopin Finance Rp340 Miliar",
  "deck": "KB Bank merampungkan penjualan 85% saham PT KB Bukopin Finance senilai Rp339,97 miliar kepada JB Woori Capital asal Korea Selatan, dan kini hanya menyisakan 14,24% kepemilikan.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BBKP",
   "divestasi",
   "KB Bukopin Finance",
   "JB Woori Capital"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/8548bc5d61_8ca32cf227.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "issp-siapkan-buyback-rp150-miliar-batasi-harga-rp600",
  "category": "Aksi Korporasi",
  "title": "ISSP Siapkan Buyback [Rp150 Miliar], Batasi Harga Rp600",
  "deck": "ISSP mengalokasikan Rp150 miliar kas internal untuk membeli kembali hingga 250 juta saham atau 3,48 persen saham beredar, harga maksimal Rp600 per saham, berlangsung hingga awal Februari 2027.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ISSP",
   "buyback saham",
   "pasar modal",
   "aksi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/39a305aca5_c65ff71b46.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "untd-laba-kotor-ambrol-jadi-rp1-2-miliar-di-kuartal-iii",
  "category": "Aksi Korporasi",
  "title": "UNTD: Laba Kotor [Ambrol] jadi Rp1,2 Miliar di Kuartal III",
  "deck": "Laba kotor UNTD ambrol ke Rp1,2 miliar pada sembilan bulan 2026, dari Rp82,9 miliar setahun sebelumnya, seiring rugi usaha melebar jadi Rp42 miliar.",
  "date": "5 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNTD",
   "Terang Dunia Internusa",
   "kinerja keuangan",
   "motor listrik"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/38fe2a8da5_b05e134367.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ipm-indonesia-2026-naik-jadi-76-59-didorong-semua-indikator",
  "category": "Makroekonomi",
  "title": "IPM Indonesia 2026 [Naik] jadi 76,59, Didorong Semua Indikator",
  "deck": "Indeks Pembangunan Manusia Indonesia 2026 mencapai 76,59, naik 0,69 poin dari tahun sebelumnya, ditopang kenaikan di seluruh komponen penyusunnya.",
  "date": "5 November 2026",
  "image": "assets/img/pasar-ikan.jpg",
  "tags": [
   "IPM",
   "BPS",
   "Kesejahteraan",
   "Pendidikan"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/171255",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "indeks-bisnis-manufaktur-ekspansi-di-triwulan-iii-2026",
  "category": "Industri",
  "title": "Indeks Bisnis Manufaktur [Ekspansi] di Triwulan III 2026",
  "deck": "IKBM triwulan III 2026 mencapai 52,75, tanda ekspansi industri manufaktur didorong pesanan, produksi, tenaga kerja, dan stok, meski waktu kirim melambat.",
  "date": "5 November 2026",
  "image": "assets/img/industri-tekstil.jpg",
  "tags": [
   "IKBM",
   "Industri Manufaktur",
   "BPS",
   "Triwulan III 2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/181143",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ekonomi-indonesia-tumbuh-5-47-di-triwulan-iii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi Indonesia Tumbuh [5,47%] di Triwulan III-2026",
  "deck": "BPS mencatat produk domestik bruto RI naik 5,47 persen secara tahunan pada triwulan III-2026, ditopang belanja pemerintah dan ekspor.",
  "date": "5 November 2026",
  "image": "assets/img/timbangan-pasar.jpg",
  "tags": [
   "PDB",
   "BPS",
   "Pertumbuhan Ekonomi",
   "Triwulan III 2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/169700",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "pyfa-terbitkan-obligasi-rp650-miliar-di-tengah-rugi-besar",
  "category": "Aksi Korporasi",
  "title": "PYFA Terbitkan [Obligasi] Rp650 Miliar di Tengah Rugi Besar",
  "deck": "PYFA melanjutkan program obligasi Rp1,5 triliun lewat tahap II senilai hingga Rp650 miliar berbunga 10-10,5 persen per tahun, menambah utang saat perusahaan baru melaporkan rugi besar.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "PYFA",
   "obligasi korporasi",
   "pasar modal",
   "utang korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ced0d1a968_22c6011ff4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pakar-ri-perlu-perkuat-cadangan-energi-ala-jepang",
  "category": "Energi",
  "title": "Pakar: RI Perlu Perkuat [Cadangan] Energi ala Jepang",
  "deck": "Pakar kebijakan energi Jun Arima menyarankan Indonesia membangun cadangan energi strategis dan menggarap mineral kritis seperti yang dilakukan Jepang sejak 1970-an.",
  "date": "4 November 2026",
  "image": "assets/img/pakar-ri-perlu-perkuat-cadangan-energi-ala-jepang.jpg",
  "imageV": "mw2dxhgj",
  "tags": [
   "energi",
   "cadangan minyak",
   "Jepang",
   "mineral kritis"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476671-indonesia-dinilai-perlu-terus-perkuat-ketahanan-energi-belajar-strategi-cadangan-minyak-dari-jepang"
 },
 {
  "slug": "ultj-ambil-alih-frisian-flag-kendali-ke-frieslandcampina",
  "category": "Aksi Korporasi",
  "title": "ULTJ Ambil Alih [Frisian Flag], Kendali ke FrieslandCampina",
  "deck": "ULTJ akan mengambil alih 100 persen saham Frisian Flag Indonesia lewat tukar saham non-tunai, sehingga pengendali perusahaan beralih dari keluarga Prawirawidjaja ke FrieslandCampina.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ULTJ",
   "Frisian Flag Indonesia",
   "FrieslandCampina",
   "transaksi material"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/999581bae2_58adf38a1c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "unvr-panggil-rupslb-tarik-168-8-juta-saham-treasuri",
  "category": "Aksi Korporasi",
  "title": "UNVR Panggil RUPSLB, Tarik [168,8 Juta] Saham Treasuri",
  "deck": "Unilever Indonesia memanggil RUPSLB 26 November 2026 untuk meminta persetujuan menarik seluruh 168,8 juta saham treasuri hasil buyback 2025, setara 0,44% modal disetor.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UNVR",
   "RUPSLB",
   "saham treasuri",
   "pengurangan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6da8ff3383_dcb938ef74.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-rampungkan-alih-saham-gmfi-ke-danantara-jelang-rights-issue",
  "category": "Aksi Korporasi",
  "title": "GIAA Rampungkan Alih Saham GMFI ke Danantara Jelang [Rights Issue]",
  "deck": "Garuda Indonesia merampungkan peralihan 82,1 miliar saham GMFI dari Angkasa Pura ke Danantara Asset Management, yang akan disetor Danantara sebagai pengganti uang tunai dalam rights issue Garuda.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "GIAA",
   "rights issue",
   "Danantara",
   "GMFI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/56b51c5d6a_923f532942.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bukan-cuma-sertifikat-lppom-dorong-umkm-naik-kelas",
  "category": "UMKM",
  "title": "Bukan Cuma Sertifikat, LPPOM Dorong UMKM [Naik Kelas]",
  "deck": "LPPOM gelar Halal Connect 2026 di Jakarta, kumpulkan sekitar 100 pelaku usaha untuk membangun jejaring bisnis halal, bukan sekadar urus sertifikat.",
  "date": "4 November 2026",
  "image": "assets/img/bukan-cuma-sertifikat-lppom-dorong-umkm-naik-kelas.jpg",
  "imageV": "mw2dxhvp",
  "tags": [
   "umkm",
   "halal",
   "lppom",
   "jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476666-bukan-cuma-label-halal-begini-cara-pelaku-umkm-dapat-naik-kelas"
 },
 {
  "slug": "bold-akui-telat-lapor-kesiapan-dana-obligasi-soroti-likuiditas",
  "category": "Aksi Korporasi",
  "title": "BOLD Akui Telat Lapor Kesiapan Dana Obligasi, Soroti [Likuiditas]",
  "deck": "BUMA (BOLD) menjelaskan ke Bursa keterlambatan lapor kesiapan dana Obligasi III Rp503,15 miliar, di tengah tekanan likuiditas dan obligasi lain yang jatuh tempo Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BOLD",
   "BUMA",
   "obligasi",
   "likuiditas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/68a1a66ba8_dfea5cdbed.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bike-ajukan-pinjaman-rp1-1-triliun-dari-pengendali-pmj",
  "category": "Aksi Korporasi",
  "title": "BIKE Ajukan Pinjaman [Rp1,1 Triliun] dari Pengendali PMJ",
  "deck": "BIKE mengajukan pinjaman Standby Loan hingga Rp1,1 triliun dari pengendali PMJ, sekaligus menambah tujuh KBLI baru, untuk disetujui RUPSLB 11 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "transaksi afiliasi",
   "standby loan",
   "diversifikasi usaha"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d797142f88_b04c5d1d0f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-lanjutkan-suspensi-saham-menn-dan-soul-akibat-telat-lapor-lk",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] Saham MENN dan SOUL Akibat Telat Lapor LK",
  "deck": "BEI mengoreksi pengumuman sebelumnya dan menegaskan perdagangan saham MENN serta SOUL masih dihentikan karena belum menyampaikan laporan keuangan interim per Juni 2026 dan/atau belum membayar denda.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "SOUL",
   "suspensi saham",
   "Papan Akselerasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/07c61d5d45_2b726dfb08.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-lanjutkan-suspensi-saham-menn-dan-soul",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] Saham MENN dan SOUL",
  "deck": "BEI menegaskan dua emiten Papan Akselerasi, MENN dan SOUL, tetap disuspensi karena belum menyampaikan laporan keuangan interim Juni 2026 dan/atau belum membayar denda.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MENN",
   "SOUL",
   "Suspensi Saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/ebe915b202_06bcb9fbc6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-lanjutkan-suspensi-62-saham-akibat-telat-laporan-keuangan",
  "category": "Aksi Korporasi",
  "title": "BEI Lanjutkan [Suspensi] 62 Saham Akibat Telat Laporan Keuangan",
  "deck": "Bursa Efek Indonesia mempertahankan suspensi perdagangan 62 saham karena belum menyerahkan laporan keuangan interim Juni 2026 dan/atau belum membayar denda Rp150 juta sejak 30 Oktober 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "suspensi saham",
   "BEI",
   "SRIL",
   "BTEL"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/19083cc232_96785c4af2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-panggil-rups-independen-soal-pmthmetd-10",
  "category": "Aksi Korporasi",
  "title": "EMAS Panggil RUPS Independen soal [PMTHMETD] 10%",
  "deck": "RUPS pemegang saham independen EMAS pada 26 November 2026 akan memutuskan rencana penambahan modal tanpa hak memesan efek terlebih dahulu sebanyak-banyaknya 10 persen saham baru.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "EMAS",
   "RUPS",
   "PMTHMETD",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/6030cd0056_db96ad1d67.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-salurkan-tunjangan-guru-non-asn-rp921-6-miliar",
  "category": "Perbankan",
  "title": "BRI Salurkan [Tunjangan] Guru Non-ASN Rp921,6 Miliar",
  "deck": "BRI menyalurkan Rp921,6 miliar tunjangan profesi guru non-ASN triwulan III 2026 kepada sekitar 507 ribu guru honorer, masing-masing menerima Rp6 juta untuk periode Juli-September.",
  "date": "4 November 2026",
  "image": "assets/img/bri-salurkan-tunjangan-guru-non-asn-rp921-6-miliar.jpg",
  "imageV": "mw2dxidu",
  "tags": [
   "BRI",
   "Tunjangan Guru",
   "Guru Non-ASN",
   "Kemendikdasmen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476661-bri-salurkan-tunjangan-profesi-guru-non-asn-seniliai-rp9216-miliar-kepada-lebih-dari-507-ribu-penerima"
 },
 {
  "slug": "tbi-entikong-didorong-jadi-pintu-ekspor-impor-perbatasan",
  "category": "Bisnis",
  "title": "TBI Entikong Didorong Jadi Pintu [Ekspor-Impor] Perbatasan",
  "deck": "BNPPDT menggelar forum lintas kementerian untuk membenahi kendala regulasi dan infrastruktur agar Terminal Barang Internasional Entikong bisa dipakai penuh untuk perdagangan lintas negara.",
  "date": "4 November 2026",
  "image": "assets/img/tbi-entikong-didorong-jadi-pintu-ekspor-impor-perbatasan.jpg",
  "imageV": "mw29dleq",
  "tags": [
   "TBI Entikong",
   "BNPPDT",
   "perdagangan perbatasan",
   "Kalimantan Barat"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476651-tbi-entikong-jadi-pintu-perdagangan-lintas-negara-bnppdt-genjot-percepatan-operasional"
 },
 {
  "slug": "kija-pendapatan-9m26-naik-16-laba-bersih-turun-38",
  "category": "Aksi Korporasi",
  "title": "KIJA: Pendapatan 9M26 [Naik] 16%, Laba Bersih Turun 38%",
  "deck": "Jababeka membukukan pendapatan Rp4,25 triliun pada 9M26, naik 16 persen, tapi laba bersih turun 38 persen akibat biaya refinancing obligasi dolar.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "KIJA",
   "Jababeka",
   "kinerja keuangan",
   "kawasan industri"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/2a3c6bb392_c89012585d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-buka-akses-kredit-bagi-14-juta-ibu",
  "category": "UMKM",
  "title": "Presiden Prabowo Buka Akses Kredit bagi [14 Juta] Ibu",
  "deck": "PNM dan Kementerian UMKM menandatangani kerja sama Kredit Perempuan Prasejahtera, mulai berjalan 9 November 2026 dengan target 1,7 juta nasabah hingga akhir tahun.",
  "date": "4 November 2026",
  "image": "assets/img/presiden-prabowo-buka-akses-kredit-bagi-14-juta-ibu.jpg",
  "imageV": "mw29dlwg",
  "tags": [
   "UMKM",
   "PNM",
   "KPPS",
   "Kredit Perempuan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476647-presiden-prabowo-bakal-buka-akses-modal-bagi-14-juta-ibu-ibu-di-seluruh-indonesia"
 },
 {
  "slug": "bike-koreksi-kedua-ke-bursa-rincian-akuisisi-bum",
  "category": "Aksi Korporasi",
  "title": "BIKE Koreksi Kedua ke Bursa, Rincian Akuisisi [BUM]",
  "deck": "Koreksi kedua jawaban BIKE ke Bursa mengungkap akuisisi 72% saham BUM senilai Rp72 juta, menambah daftar transaksi yang pembayarannya masih tertunda menanti pinjaman pengendali.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BIKE",
   "akuisisi",
   "keterbukaan informasi",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/43841d172b_aef1884f84.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kredit-perempuan-prasejahtera-resmi-bunga-8-persen",
  "category": "UMKM",
  "title": "Kredit Perempuan Prasejahtera Resmi Bunga [8 Persen]",
  "deck": "Kementerian UMKM dan PNM menyalurkan Kredit Perempuan Prasejahtera dengan bunga flat 8 persen per tahun, disubsidi pemerintah senilai Rp2,62 triliun.",
  "date": "4 November 2026",
  "image": "assets/img/kredit-perempuan-prasejahtera-resmi-bunga-8-persen.jpg",
  "imageV": "mw29dmcn",
  "tags": [
   "UMKM",
   "PNM",
   "Kredit Perempuan Prasejahtera",
   "Subsidi Bunga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/476638-kementerian-umkm-dan-pnm-siap-salurkan-kredit-perempuan-prasejahtera-bunga-flat-8-persen-per-tahun"
 },
 {
  "slug": "bina-ajukan-pmthmetd-ii-rencana-tambah-350-juta-saham-baru",
  "category": "Aksi Korporasi",
  "title": "BINA Ajukan [PMTHMETD] II, Rencana Tambah 350 Juta Saham Baru",
  "deck": "Bank Ina berencana menerbitkan hingga 350 juta saham baru tanpa hak memesan terlebih dahulu untuk memperkuat modal, menunggu persetujuan RUPS Independen 11 Desember 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "BINA",
   "Bank Ina Perdana",
   "PMTHMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/55cd553953_ddd26d6ed2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-akui-human-error-berulang-di-laporan-kuartal-iii-2026",
  "category": "Aksi Korporasi",
  "title": "TRUE Akui [Human Error] Berulang di Laporan Kuartal III 2026",
  "deck": "Menjawab permintaan penjelasan BEI, Triniti Dinamik mengakui laporan kuartal III 2026 keliru di banyak pos dan masih menunggak ke Bank Panin.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TRUE",
   "Triniti Dinamik",
   "BEI",
   "laporan keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/1684a6945d_11b5ee85cd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mmlp-laba-inti-melonjak-114-5-saham-masih-anjlok-60",
  "category": "Aksi Korporasi",
  "title": "MMLP: Laba Inti [Melonjak] 114,5%, Saham Masih Anjlok 60%",
  "deck": "Dalam public expose tahunan, manajemen MMLP mengungkap laba inti naik 114,5% menjadi Rp108,1 miliar, pelepasan anak usaha yang berujung rugi, dan tenggat free float baru di 2029.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MMLP",
   "public expose",
   "free float",
   "laba inti"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/924acc625e_bd1fe96aee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toba-jelaskan-ke-bursa-soal-pendanaan-us-429-juta-ke-sbth",
  "category": "Aksi Korporasi",
  "title": "TOBA Jelaskan ke Bursa Soal Pendanaan [US$429 Juta] ke SBTH",
  "deck": "TOBA menjelaskan ke BEI soal reorganisasi bisnis limbah dan investasi hingga US$429 juta ke anak usaha SBTH, yang perlu persetujuan RUPSLB 27 November 2026.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOBA",
   "transaksi material",
   "RUPSLB",
   "pengelolaan limbah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/be1b6765c1_0c7b577669.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupslb-hero-26-nov-calon-presdir-berafiliasi-pemegang-saham-utama",
  "category": "Aksi Korporasi",
  "title": "RUPSLB HERO 26 Nov, Calon Presdir [Berafiliasi] Pemegang Saham Utama",
  "deck": "HERO memanggil RUPSLB pada 26 November 2026 untuk menyetujui perubahan susunan direksi, termasuk calon presiden direktur baru yang berafiliasi dengan pemegang saham utama.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "HERO",
   "RUPSLB",
   "Direksi",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/d440aca953_a8bf96c659.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bei-resmi-delisting-etf-xnve-efektif-5-november-2026",
  "category": "Aksi Korporasi",
  "title": "BEI Resmi [Delisting] ETF XNVE Efektif 5 November 2026",
  "deck": "Bursa Efek Indonesia menghapus pencatatan ETF XNVE, Reksa Dana Indeks Nusadana IDX Value30, efektif 5 November 2026 setelah OJK mencabut pernyataan efektifnya akibat likuidasi.",
  "date": "4 November 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "XNVE",
   "delisting",
   "reksa dana",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202611/581dec033a_2857aac0c3.pdf",
  "sourceLabel": "IDX"
 }
];
