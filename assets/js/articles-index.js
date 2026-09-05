// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
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
  "image": "assets/img/bursa-kerja.jpg",
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
  "slug": "tapg-tanggapi-bei-pemegang-saham-utama-rencana-sell-down",
  "category": "Aksi Korporasi",
  "title": "TAPG Tanggapi BEI, Pemegang Saham Utama Rencana [Sell Down]",
  "deck": "TAPG menyatakan tidak ada informasi material yang belum diungkap ke publik, namun pemegang saham utama berencana melepas sebagian saham demi memenuhi ketentuan free float bursa.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TAPG",
   "CPO",
   "free float",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/6cf2e82f3a_283586f767.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "towr-bukukan-laba-rp1-86-triliun-naik-12-4-di-semester-i-2026",
  "category": "Aksi Korporasi",
  "title": "TOWR Bukukan Laba Rp1,86 Triliun, Naik [12,4%] di Semester I 2026",
  "deck": "Materi Public Expose TOWR paruh pertama 2026: laba bersih naik 12,4 persen meski margin EBITDA menipis akibat penyesuaian harga sewa menara pasca merger XL Axiata dan Smartfren.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "TOWR",
   "Sarana Menara Nusantara",
   "Public Expose",
   "Menara Telekomunikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/5ce43226e3_6443bde092.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "life-gelar-public-expose-insidentil-usai-diminta-bursa",
  "category": "Aksi Korporasi",
  "title": "LIFE Gelar [Public Expose] Insidentil usai Diminta Bursa",
  "deck": "LIFE akan menggelar Public Expose Insidentil pada 10 September 2026 atas permintaan Bursa Efek Indonesia, memaparkan kinerja, laporan keuangan terkini, dan rencana usaha.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LIFE",
   "public expose",
   "MSIG Life",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/36cb9c915f_1b2ae1debe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-tawarkan-formula-asean-ke-rusia",
  "category": "Global",
  "title": "Presiden Prabowo Tawarkan [Formula ASEAN] ke Rusia",
  "deck": "Presiden Prabowo menawarkan pengalaman ASEAN membangun kerja sama lewat dialog kepada Rusia dan Uni Ekonomi Eurasia dalam pidato di Eastern Economic Forum, Vladivostok.",
  "date": "3 September 2026",
  "image": "assets/img/presiden-prabowo-tawarkan-formula-asean-ke-rusia.jpg",
  "imageV": "mtlhty96",
  "tags": [
   "ASEAN",
   "Rusia",
   "EAEU",
   "Eastern Economic Forum"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464675-di-hadapan-putin-prabowo-tawarkan-formula-asean-untuk-perluas-kerja-sama-rusia-ke-asia-tenggara"
 },
 {
  "slug": "asbi-bantah-ada-info-material-usai-saham-anjlok-6-16",
  "category": "Aksi Korporasi",
  "title": "ASBI Bantah Ada Info Material Usai Saham Anjlok [6,16%]",
  "deck": "Bursa meminta penjelasan setelah saham ASBI anjlok 6,16% disertai lonjakan transaksi drastis pada 1 September; perseroan menyangkal ada info material.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "ASBI",
   "Asuransi Bintang",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/0e609273f2_1e685fe6ee.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-jelaskan-ke-bei-beban-bunga-naik-383-usai-akuisisi-rs",
  "category": "Aksi Korporasi",
  "title": "SILO Jelaskan ke BEI, Beban Bunga Naik [383%] usai Akuisisi RS",
  "deck": "SILO merinci ke BEI rencana akuisisi 14 rumah sakit senilai Rp6,9 triliun dari First REIT, yang mayoritas dibiayai utang sindikasi hingga Rp14,5 triliun.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "SILO",
   "akuisisi rumah sakit",
   "First REIT",
   "utang sindikasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/18338363bf_c2e8c2a4a1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "vtny-jelaskan-opini-audit-wdp-atas-laporan-keuangan-juni-2026",
  "category": "Aksi Korporasi",
  "title": "VTNY Jelaskan Opini Audit [WDP] atas Laporan Keuangan Juni 2026",
  "deck": "Venteny Fortuna International menerima opini wajar dengan pengecualian karena laporan keuangan dua anak usaha di Singapura dan Jepang belum diaudit auditor independen.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "VTNY",
   "opini audit",
   "laporan keuangan",
   "Venteny Fortuna International"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/66aad722a7_d369d976be.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "uang-panggil-rupslb-agenda-perubahan-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "UANG Panggil RUPSLB, Agenda [Perubahan] Susunan Direksi",
  "deck": "PT Pakuan Tbk memanggil pemegang saham untuk RUPSLB 25 September 2026 dengan agenda persetujuan pengangkatan kembali atau perubahan susunan direksi.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "UANG",
   "RUPSLB",
   "Direksi",
   "Pakuan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/8d1f713f47_0234ab8505.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ltls-laba-bersih-semester-i-2026-melonjak-55-jadi-rp124-m",
  "category": "Aksi Korporasi",
  "title": "LTLS: laba bersih semester I 2026 [melonjak] 55% jadi Rp124 M",
  "deck": "Materi public expose LTLS menunjukkan laba bersih semester I 2026 naik 55 persen jadi Rp124 miliar, ditopang margin kotor yang melebar dan rasio utang yang membaik.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "LTLS",
   "Lautan Luas",
   "kinerja keuangan",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/f616b44779_049165c4c4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-perkuat-kolaborasi-digital-di-universitas",
  "category": "Teknologi",
  "title": "Telkom Perkuat Kolaborasi Digital di [Universitas]",
  "deck": "Telkom hadir dalam forum CIO pendidikan tinggi 2026 di ITB untuk memperkuat kolaborasi tata kelola data, jaringan riset, dan keamanan siber kampus se-Indonesia.",
  "date": "3 September 2026",
  "image": "assets/img/telkom-perkuat-kolaborasi-digital-di-universitas.jpg",
  "imageV": "mtlhtyp2",
  "tags": [
   "Telkom",
   "PDDikti",
   "IDREN",
   "Pendidikan Tinggi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464669-persiapkan-kedaulatan-digital-di-universitas-telkom-perkuat-kolaborasi-pentahelix"
 },
 {
  "slug": "mdiy-tembus-1-400-toko-ekspansi-2026-sesuai-target",
  "category": "Aksi Korporasi",
  "title": "MDIY Tembus [1.400] Toko, Ekspansi 2026 Sesuai Target",
  "deck": "MR.D.I.Y. Indonesia (MDIY) resmi membuka toko ke-1.400. Realisasi 177 dari target 270 toko baru tahun ini sudah tercapai hingga Agustus 2026.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "MDIY",
   "ritel",
   "ekspansi toko",
   "MR.D.I.Y."
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/e036cd1608_05ab121b42.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-prabowo-tantang-rusia-gandakan-nilai-dagang-ri",
  "category": "Global",
  "title": "Presiden Prabowo Tantang Rusia [Gandakan] Nilai Dagang RI",
  "deck": "Presiden Prabowo Subianto menantang Rusia menggandakan nilai perdagangan bilateral dari sekitar US$5 miliar, disampaikan dalam forum ekonomi di Vladivostok, Rusia.",
  "date": "3 September 2026",
  "image": "assets/img/presiden-prabowo-tantang-rusia-gandakan-nilai-dagang-ri.jpg",
  "imageV": "mtlhtz7b",
  "tags": [
   "Rusia",
   "Presiden Prabowo Subianto",
   "perdagangan bilateral",
   "Eastern Economic Forum"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464657-prabowo-tantang-rusia-gandakan-dagang-ri-bidik-tembus-dua-kali-lipat"
 },
 {
  "slug": "pegadaian-sabet-penghargaan-tata-kelola-terbaik-2026",
  "category": "BUMN",
  "title": "Pegadaian Sabet [Penghargaan] Tata Kelola Terbaik 2026",
  "deck": "PT Pegadaian meraih penghargaan Indonesia Best Corporate Secretary for Governance Excellence 2026 dari Majalah SWA atas konsistensi tata kelola perusahaan.",
  "date": "3 September 2026",
  "image": "assets/img/pegadaian-sabet-penghargaan-tata-kelola-terbaik-2026.jpg",
  "imageV": "mtlhtzrw",
  "tags": [
   "pegadaian",
   "penghargaan",
   "tata kelola",
   "bumn"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464655-pegadaian-raih-penghargaan-corporate-secretary-champion-2026-komitmen-perkuat-tata-kelola-dan-reputasi-perusahaan"
 },
 {
  "slug": "purbaya-rumahkan-3-pegawai-pajak-diduga-bermasalah",
  "category": "Makroekonomi",
  "title": "Purbaya [Rumahkan] 3 Pegawai Pajak Diduga Bermasalah",
  "deck": "Menkeu Purbaya Yudhi Sadewa merombak jajaran pejabat Ditjen Pajak dan Bea Cukai, menonaktifkan pegawai yang diduga bermain-main dalam pengelolaan pajak tertentu.",
  "date": "3 September 2026",
  "image": "assets/img/purbaya-rumahkan-3-pegawai-pajak-diduga-bermasalah.jpg",
  "imageV": "mtlhu08p",
  "tags": [
   "Purbaya Yudhi Sadewa",
   "Ditjen Pajak",
   "Bea Cukai",
   "Kementerian Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464640-purbaya-bongkar-cara-bersihkan-pajak-dan-bea-cukai-5-pegawai-bermasalah-bisa-langsung-ditindak"
 },
 {
  "slug": "telkom-gelar-ai-camp-untuk-350-pelajar-di-makassar",
  "category": "BUMN",
  "title": "Telkom Gelar AI Camp untuk 350 Pelajar di [Makassar]",
  "deck": "Telkom memulai program AI Camp berbasis kesejahteraan mental di Makassar, melibatkan 300 siswa dan 50 guru dari 10 SMA dan SMK.",
  "date": "3 September 2026",
  "image": "assets/img/telkom-gelar-ai-camp-untuk-350-pelajar-di-makassar.jpg",
  "imageV": "mtlhu0rb",
  "tags": [
   "Telkom",
   "AI Camp",
   "Makassar",
   "TJSL"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464643-telkom-hadirkan-edumind-wellbeing-dan-ai-camp-di-makassar-diikuti-350-peserta"
 },
 {
  "slug": "bi-dan-kemenkeu-siapkan-jadwal-jaga-likuiditas-bank",
  "category": "Perbankan",
  "title": "BI dan Kemenkeu Siapkan [Jadwal] Jaga Likuiditas Bank",
  "deck": "Gubernur BI Destry Damayanti memastikan BI dan Kementerian Keuangan sudah punya jadwal bersama soal penempatan dan penarikan dana pemerintah di bank Himbara.",
  "date": "3 September 2026",
  "image": "assets/img/bi-dan-kemenkeu-siapkan-jadwal-jaga-likuiditas-bank.jpg",
  "imageV": "mtlhu17v",
  "tags": [
   "likuiditas perbankan",
   "Bank Indonesia",
   "Himbara",
   "Kementerian Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464632-destry-pastikan-likuiditas-perbankan-aman-bi-dan-purbaya-siapkan-langkah-antisipasi"
 },
 {
  "slug": "rans-gelar-rupslb-10-september-bahas-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "RANS Gelar RUPSLB 10 September, Bahas [Perubahan] Direksi",
  "deck": "Perseroan mengoreksi pemanggilan RUPSLB sebelumnya dan menegaskan rapat digelar 10 September 2026 dengan agenda tunggal perubahan susunan direksi.",
  "date": "3 September 2026",
  "image": "assets/img/penanda-keterbukaan-bursa.jpg",
  "tags": [
   "RANS",
   "RUPSLB",
   "direksi",
   "corporate action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202609/79f26bb35d_f4d3fb3015.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "anggaran-mbg-berpeluang-ditekan-di-bawah-rp200-triliun",
  "category": "Makroekonomi",
  "title": "Anggaran MBG Berpeluang [Ditekan] di Bawah Rp200 Triliun",
  "deck": "Menkeu Purbaya Yudhi Sadewa menyebut anggaran Makan Bergizi Gratis tahun ini berpeluang ditekan di bawah Rp200 triliun lewat efisiensi dan teknologi, setelah dipangkas bertahap dari Rp330 triliun.",
  "date": "3 September 2026",
  "image": "assets/img/anggaran-mbg-berpeluang-ditekan-di-bawah-rp200-triliun.jpg",
  "imageV": "mtlhu297",
  "tags": [
   "MBG",
   "Anggaran MBG",
   "Purbaya Yudhi Sadewa",
   "BGN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464617-purbaya-beri-sinyal-anggaran-mbg-bisa-dipangkas-di-bawah-rp200-triliun-ini-alasannya"
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
  "image": "assets/img/wawancara-kerja.jpg",
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
  "image": "assets/img/jabar-selidiki-sebab-dbh-pajak-tertinggal-dari-jakarta.jpg",
  "imageV": "mtlhuf8p",
  "tags": [
   "DBH",
   "Pajak Daerah",
   "Jawa Barat",
   "DJP"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
  "sourceUrl": "https://pajak.go.id/id/siaran-pers/optimalkan-dbh-pemerintah-provinsi-jawa-barat-dan-brin-dalami-potensi-penerimaan-pajak",
  "sourceLabel": "Direktorat Jenderal Pajak"
 },
 {
  "slug": "djp-perjelas-pajak-untuk-restrukturisasi-bumn-rp806-triliun",
  "category": "BUMN",
  "title": "DJP Perjelas Pajak untuk [Restrukturisasi] BUMN Rp806 Triliun",
  "deck": "DJP Wajib Pajak Besar menjelaskan fasilitas pajak baru bagi restrukturisasi BUMN kepada 55 pimpinan perusahaan, di tengah target penerimaan Rp806 triliun tahun ini.",
  "date": "3 September 2026",
  "image": "assets/img/djp-perjelas-pajak-untuk-restrukturisasi-bumn-rp806-triliun.jpg",
  "imageV": "mtlhukqe",
  "tags": [
   "DJP",
   "BUMN",
   "Pajak",
   "Restrukturisasi"
  ],
  "kreditFoto": "Direktorat Jenderal Pajak",
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
  "image": "assets/img/sidang-dpr.jpg",
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
  "slug": "cara-aman-atur-tenor-pinjaman-online-berbunga-rendah",
  "category": "Perbankan",
  "title": "Cara Aman Atur Tenor [Pinjaman Online] Berbunga Rendah",
  "deck": "Memilih tenor pinjaman online bukan sekadar soal cicilan ringan, tapi soal total bunga yang harus dibayar sampai lunas.",
  "date": "2 September 2026",
  "image": "assets/img/cara-aman-atur-tenor-pinjaman-online-berbunga-rendah.jpg",
  "imageV": "mtnd9b4y",
  "tags": [
   "pinjaman online",
   "fintech lending",
   "keuangan pribadi",
   "OJK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/464473-6-cara-atur-tenor-panjang-pinjaman-online-bunga-rendah-agar-tetap-aman"
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
  "image": "assets/img/pelabuhan-kontainer.jpg",
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
  "image": "assets/img/pasar-beras.jpg",
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
  "image": "assets/img/pasar-tradisional-pagi.jpg",
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
  "image": "assets/img/jalan-tol-konstruksi.jpg",
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
 }
];
