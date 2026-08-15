// Indeks ramping untuk beranda dan berita.html: kartu + pencarian saja,
// tanpa badan artikel. Diturunkan dari articles.js oleh bake-root.mjs -
// jangan diedit manual, dan JANGAN memuat articles.js dari halaman mana
// pun: 45% isinya tidak pernah dipakai browser dan ukurannya tumbuh
// mengikuti arsip.
var ARTICLES = [
 {
  "slug": "mensesneg-amnesti-bos-bumn-belum-dibahas-baru-wacana",
  "category": "BUMN",
  "title": "Mensesneg: Amnesti Bos BUMN [Belum] Dibahas, Baru Wacana",
  "deck": "Mensesneg Prasetyo Hadi menegaskan pengadilan ad hoc dan amnesti bagi petinggi BUMN bermasalah belum dibahas, baru sebatas semangat pembenahan tata kelola.",
  "date": "15 Agustus 2026",
  "image": "assets/img/mensesneg-amnesti-bos-bumn-belum-dibahas-baru-wacana.jpg",
  "imageV": "msuaczcd",
  "tags": [
   "BUMN",
   "korupsi",
   "amnesti",
   "pengadilan ad hoc"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460118-mensesneg-luruskan-wacana-pengadilan-ad-hoc-korupsi-bumn-dan-amnesti-petinggi-bermasalah-ini-maksudnya-prabowo"
 },
 {
  "slug": "presiden-prabowo-china-beri-rating-aaa-ke-ri",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo: China Beri Rating [AAA] ke RI",
  "deck": "Presiden Prabowo Subianto menyebut lembaga rating China memberi peringkat AAA untuk Panda Bonds RI, sementara S&P mempertahankan rating Indonesia di level BBB pada Juli 2026.",
  "date": "15 Agustus 2026",
  "image": "assets/img/presiden-prabowo-china-beri-rating-aaa-ke-ri.jpg",
  "imageV": "msu6c3hx",
  "tags": [
   "prabowo subianto",
   "ekonomi indonesia",
   "peringkat kredit",
   "panda bonds"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460088-prabowo-ungkap-ekonomi-indonesia-dapat-pengakuan-dunia-china-juga-beri-rating-aaa"
 },
 {
  "slug": "patokan-harga-ekspor-emas-naik-0-65-per-15-agustus",
  "category": "Industri",
  "title": "Patokan Harga Ekspor Emas [Naik] 0,65% per 15 Agustus",
  "deck": "Kemendag menaikkan Harga Patokan Ekspor dan Harga Referensi emas untuk periode 15-31 Agustus 2026, mengikuti kenaikan harga emas di pasar global.",
  "date": "15 Agustus 2026",
  "image": "assets/img/patokan-harga-ekspor-emas-naik-0-65-per-15-agustus.jpg",
  "imageV": "msu5ueo8",
  "tags": [
   "emas",
   "HPE",
   "bea keluar",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/peningkatan-permintaan-emas-picu-kenaikan-hpe-dan-hr-emas-periode-ii-agustus-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pnm-dampingi-268-ribu-nasabah-umkm-perempuan-di-aceh",
  "category": "UMKM",
  "title": "PNM Dampingi [268 Ribu] Nasabah UMKM Perempuan di Aceh",
  "deck": "PNM dan OJK memperkuat pendampingan literasi keuangan dan legalitas usaha bagi perempuan pelaku usaha ultra mikro di Aceh, tidak hanya menyalurkan modal.",
  "date": "15 Agustus 2026",
  "image": "assets/img/pnm-dampingi-268-ribu-nasabah-umkm-perempuan-di-aceh.jpg",
  "imageV": "msu27si9",
  "tags": [
   "PNM",
   "OJK",
   "UMKM Aceh",
   "Mekaar Syariah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460065-sinergi-pnm-dan-ojk-perkuat-bekal-umkm-perempuan-aceh-untuk-naik-kelas"
 },
 {
  "slug": "warga-koja-ubah-sampah-jadi-sekolah-dan-penghasilan",
  "category": "UMKM",
  "title": "Warga Koja Ubah [Sampah] Jadi Sekolah dan Penghasilan",
  "deck": "Program binaan Pertamina Lubricants di Gang Hijau Cemara, Jakarta Utara, mengubah sampah warga menjadi kompos, pakan ternak, hingga biaya sekolah anak lewat skema tabungan sampah.",
  "date": "15 Agustus 2026",
  "image": "assets/img/warga-koja-ubah-sampah-jadi-sekolah-dan-penghasilan.jpg",
  "imageV": "mstktamz",
  "tags": [
   "kampung binaan",
   "bank sampah",
   "Pertamina Lubricants",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460013-kampung-binaan-pertamina-lubricants-dorong-ekonomi-sirkuler-beri-dampak-ekonomi-hingga-200-juta-per-tahun"
 },
 {
  "slug": "bantul-atasi-sampah-usai-tpa-piyungan-tutup",
  "category": "UMKM",
  "title": "Bantul Atasi Sampah Usai [TPA] Piyungan Tutup",
  "deck": "TPS 3R GO-SARI di Guwosari olah 3-3,5 ton sampah rumah tangga per hari, layani 1.500 keluarga, dan buka kerja bagi 27 warga usai TPA Piyungan ditutup.",
  "date": "15 Agustus 2026",
  "image": "assets/img/bantul-atasi-sampah-usai-tpa-piyungan-tutup.jpg",
  "imageV": "mstktbdb",
  "tags": [
   "sampah",
   "bantul",
   "TPS 3R",
   "daur ulang"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/460011-solusi-mandiri-dari-bantul-cara-tps-3r-go-sari-atasi-masalah-sampah-dari-sumbernya"
 },
 {
  "slug": "silo-akuisisi-14-rs-senilai-rp6-9-triliun-dari-first-reit",
  "category": "Aksi Korporasi",
  "title": "SILO [Akuisisi] 14 RS Senilai Rp6,9 Triliun dari First REIT",
  "deck": "Siloam berencana membeli 14 perusahaan pemilik properti rumah sakit dari First REIT senilai Rp6,9 triliun, transaksi material yang perlu persetujuan RUPSLB 22 September 2026.",
  "date": "15 Agustus 2026",
  "image": "assets/img/silo-akuisisi-14-rs-senilai-rp6-9-triliun-dari-first-reit.jpg",
  "imageV": "mstupfa1",
  "tags": [
   "SILO",
   "First REIT",
   "akuisisi rumah sakit",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/cc58ee9c06_7a64eba02a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-jaminkan-aset-ke-bank-untuk-pinjaman-sindikasi-rp14-5-t",
  "category": "Aksi Korporasi",
  "title": "SILO [Jaminkan] Aset ke Bank untuk Pinjaman Sindikasi Rp14,5 T",
  "deck": "Siloam menjaminkan aset di atas 50 persen kekayaan bersihnya untuk pinjaman sindikasi Rp14,5 triliun, menunggu persetujuan pemegang saham di RUPSLB 22 September 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/silo-jaminkan-aset-ke-bank-untuk-pinjaman-sindikasi-rp14-5-t.jpg",
  "imageV": "mstuqdgs",
  "tags": [
   "SILO",
   "pinjaman sindikasi",
   "penjaminan aset",
   "RUPSLB"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/561352b173_3612f1090f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-rups-22-september-akuisisi-14-rs-rp9-triliun",
  "category": "Aksi Korporasi",
  "title": "SILO RUPS 22 September, Akuisisi 14 RS [Rp9 Triliun]",
  "deck": "Siloam akan gelar RUPS 22 September 2026 untuk menyetujui akuisisi 14 perusahaan pemilik properti rumah sakit dari First REIT senilai Rp9 triliun, dibiayai lewat utang bank baru Rp8,88 triliun.",
  "date": "14 Agustus 2026",
  "image": "assets/img/silo-rups-22-september-akuisisi-14-rs-rp9-triliun.jpg",
  "imageV": "mstuqqb3",
  "tags": [
   "SILO",
   "akuisisi rumah sakit",
   "First REIT",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/fd5b36959f_b73f7d61d5.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "silo-jadwalkan-rupslb-22-september-akuisisi-jadi-agenda",
  "category": "Aksi Korporasi",
  "title": "SILO Jadwalkan RUPSLB 22 September, [Akuisisi] Jadi Agenda",
  "deck": "Siloam mengumumkan RUPSLB pada 22 September 2026 di Tangerang, dengan tenggat pencatatan pemegang saham 28 Agustus dan usul agenda 24 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/silo-jadwalkan-rupslb-22-september-akuisisi-jadi-agenda.jpg",
  "imageV": "msturds1",
  "tags": [
   "SILO",
   "RUPSLB",
   "Siloam Hospitals",
   "Akuisisi Rumah Sakit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/633f758b6b_21cbe5fe53.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csmi-bantah-ada-informasi-material-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "CSMI Bantah Ada Informasi Material soal [Volatilitas] Sahamnya",
  "deck": "Merespons surat resmi BEI soal lonjakan transaksi sahamnya, direksi CSMI menyatakan tidak ada informasi material yang belum diungkap dan tidak ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/csmi-bantah-ada-informasi-material-soal-volatilitas-sahamnya.jpg",
  "imageV": "mstus65s",
  "tags": [
   "CSMI",
   "BEI",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/818ab2912d_c898b06aff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "e-voa-kini-bisa-dibayar-kartu-asing-genjot-wisatawan",
  "category": "Teknologi",
  "title": "e-VOA Kini Bisa Dibayar Kartu Asing, Genjot [Wisatawan]",
  "deck": "Finnet menghadirkan sistem pembayaran digital untuk visa kedatangan elektronik (e-VOA) sehingga wisatawan asing bisa bertransaksi pakai kartu bank negara asal, sekaligus mempercepat penerimaan negara.",
  "date": "14 Agustus 2026",
  "image": "assets/img/e-voa-kini-bisa-dibayar-kartu-asing-genjot-wisatawan.jpg",
  "imageV": "mst4q1ao",
  "tags": [
   "e-VOA",
   "wisatawan asing",
   "Finnet",
   "pembayaran digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459985-sistem-transaksi-digital-ini-upaya-dorong-peningkatan-wisatawan-asing"
 },
 {
  "slug": "kemendes-pdt-gandeng-tvone-angkat-potensi-75-ribu-desa",
  "category": "Makroekonomi",
  "title": "Kemendes PDT Gandeng tvOne, Angkat Potensi [75 Ribu] Desa",
  "deck": "Kemendes PDT RI dan tvOne teken MoU untuk mempublikasikan potensi ekonomi 75.296 desa di 416 kabupaten dan 38 provinsi.",
  "date": "14 Agustus 2026",
  "image": "assets/img/kemendes-pdt-gandeng-tvone-angkat-potensi-75-ribu-desa.jpg",
  "imageV": "mst4q1xz",
  "tags": [
   "Kemendes PDT",
   "tvOne",
   "MoU",
   "ekonomi desa"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459983-kemendes-pdt-ri-gandeng-tvone-teken-mou-angkat-potensi-75-ribu-desa-di-indonesia"
 },
 {
  "slug": "bnpb-pnm-dorong-warga-agam-bangkit-lewat-usaha-lokal",
  "category": "UMKM",
  "title": "BNPB-PNM Dorong Warga Agam [Bangkit] Lewat Usaha Lokal",
  "deck": "BNPB, PNM, dan Pemkab Agam memacu usaha olahan ikan dan pinang warga terdampak bencana di Agam lewat pelatihan, alat produksi, dan pembiayaan tanpa agunan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/bnpb-pnm-dorong-warga-agam-bangkit-lewat-usaha-lokal.jpg",
  "imageV": "mst1gmqs",
  "tags": [
   "agam",
   "pnm",
   "umkm",
   "bnpb"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459979-dari-huntara-ke-usaha-produktif-bnpb-pnm-dorong-warga-agam-bangkit-lewat-potensi-ekonomi-lokal"
 },
 {
  "slug": "adcp-akui-event-of-default-utang-ke-cgif-rp12-36-m",
  "category": "Aksi Korporasi",
  "title": "ADCP Akui [Event of Default], Utang ke CGIF Rp12,36 M",
  "deck": "ADCP mengakui gagal bayar kupon obligasi hingga penjamin CGIF turun tangan membayarnya, dengan rincian utang Rp12,36 miliar yang kini harus diganti Perseroan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/adcp-akui-event-of-default-utang-ke-cgif-rp12-36-m.jpg",
  "imageV": "mstusj5g",
  "tags": [
   "ADCP",
   "obligasi",
   "event of default",
   "CGIF"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/405fd8f987_3c424c559f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "runs-penjualan-saham-pengendali-ke-istri-bukan-ubah-kendali",
  "category": "Aksi Korporasi",
  "title": "RUNS: Penjualan Saham [Pengendali] ke Istri Bukan Ubah Kendali",
  "deck": "BEI mempertanyakan penjualan saham pengendali RUNS yang membuat kepemilikannya nyaris disalip pemegang saham kedua. Perseroan membantah ada pergantian kendali dan mengakui dua kekeliruan input di laporan sebelumnya.",
  "date": "14 Agustus 2026",
  "image": "assets/img/runs-penjualan-saham-pengendali-ke-istri-bukan-ubah-kendali.jpg",
  "imageV": "mstut46k",
  "tags": [
   "RUNS",
   "pemegang saham pengendali",
   "keterbukaan informasi BEI",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0b0568cec8_e8c9b6ee0b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kadin-rating-kredit-ri-bertahan-dorong-investasi-riil",
  "category": "Makroekonomi",
  "title": "Kadin: Rating [Kredit] RI Bertahan, Dorong Investasi Riil",
  "deck": "Kadin menyambut peringkat kredit RI yang dipertahankan S&P (BBB) dan China Lianhe (AAA), tapi minta kepercayaan itu diterjemahkan jadi investasi riil.",
  "date": "14 Agustus 2026",
  "image": "assets/img/kadin-rating-kredit-ri-bertahan-dorong-investasi-riil.jpg",
  "imageV": "mst1gnn4",
  "tags": [
   "kadin",
   "peringkat kredit",
   "investasi",
   "apbn 2027"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459963-10-pandangan-kadin-indonesia-menyambut-agenda-besar-presiden-prabowo-sorot-fundamental-ekonomi-hingga-mesin-investasi"
 },
 {
  "slug": "bank-bjb-dan-persib-kolaborasi-lagi-musim-2026",
  "category": "Perbankan",
  "title": "bank bjb dan PERSIB [Kolaborasi] Lagi Musim 2026",
  "deck": "bank bjb kembali menjadi Official Banking Partner PERSIB untuk musim 2026, dua belas tahun setelah kerja sama serupa mengantar PERSIB juara Liga Indonesia 2014.",
  "date": "14 Agustus 2026",
  "image": "assets/img/bank-bjb-dan-persib-kolaborasi-lagi-musim-2026.jpg",
  "imageV": "mst1gou7",
  "tags": [
   "bank bjb",
   "PERSIB",
   "Bandung",
   "co-branding"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459962-kembali-berkolaborasi-bank-bjb-dan-persib-satukan-semangat-juara"
 },
 {
  "slug": "mdln-ajukan-scheme-of-arrangement-untuk-selesaikan-notes-2027",
  "category": "Aksi Korporasi",
  "title": "MDLN Ajukan [Scheme of Arrangement] untuk Selesaikan Notes 2027",
  "deck": "Modernland Realty mengajukan skema restrukturisasi Guaranteed Senior Notes jatuh tempo 2027, voting pemegang notes berlangsung hingga 24 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/mdln-ajukan-scheme-of-arrangement-untuk-selesaikan-notes-2027.jpg",
  "imageV": "mstutq1m",
  "tags": [
   "MDLN",
   "restrukturisasi utang",
   "obligasi global",
   "Modernland Realty"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f84cb97386_9fe6d436af.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "restrukturisasi-telkom-enterprise-danantara-incar-pasar-30",
  "category": "BUMN",
  "title": "Restrukturisasi Telkom Enterprise, Danantara Incar [Pasar] 30%",
  "deck": "Telkom merombak organisasi bisnis enterprise bersama Danantara untuk memperkuat layanan digital ke pemerintah, BUMN, dan swasta, dengan potensi pasar diperkirakan tumbuh hingga 30 persen.",
  "date": "14 Agustus 2026",
  "image": "assets/img/restrukturisasi-telkom-enterprise-danantara-incar-pasar-30.jpg",
  "imageV": "mst1gr7c",
  "tags": [
   "telkom",
   "danantara",
   "telkom enterprise",
   "bumn"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459957-sinergi-telkom-bersama-danantara-prospek-pasar-segmen-enterprise-telkom-diperkirakan-tumbuh-hingga-30-persen"
 },
 {
  "slug": "pegadaian-dorong-literasi-keuangan-ojek-pangkalan",
  "category": "BUMN",
  "title": "Pegadaian Dorong [Literasi Keuangan] Ojek Pangkalan",
  "deck": "Pegadaian menggelar edukasi keuangan untuk pengemudi ojek pangkalan di Tanjung Priok, mendorong menabung emas dan menjauhkan mereka dari pinjaman ilegal.",
  "date": "14 Agustus 2026",
  "image": "assets/img/pegadaian-dorong-literasi-keuangan-ojek-pangkalan.jpg",
  "imageV": "mst1gt30",
  "tags": [
   "Pegadaian",
   "literasi keuangan",
   "ojek pangkalan",
   "sektor informal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459954-pegadaian-dorong-literasi-keuangan-pengemudi-ojek-pangkalan-soroti-pentingnya-menabung-dan-hindari-pinjaman-ilegal"
 },
 {
  "slug": "sqmi-ajukan-yulian-hadromi-jadi-calon-direksi-baru-di-rupst",
  "category": "Aksi Korporasi",
  "title": "SQMI Ajukan [Yulian Hadromi] Jadi Calon Direksi Baru di RUPST",
  "deck": "Wilton Makmur Indonesia Tbk mengoreksi pemanggilan RUPST 4 September 2026 dengan melampirkan CV Yulian Hadromi sebagai calon anggota direksi baru.",
  "date": "14 Agustus 2026",
  "image": "assets/img/sqmi-ajukan-yulian-hadromi-jadi-calon-direksi-baru-di-rupst.jpg",
  "imageV": "mstx3sp4",
  "tags": [
   "SQMI",
   "RUPST",
   "direksi",
   "Wilton Makmur"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8294fe7462_5ccfbfd3b0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bafi-siapkan-rp465-miliar-untuk-pelunasan-obligasi",
  "category": "Aksi Korporasi",
  "title": "BAFI Siapkan Rp465 Miliar untuk [Pelunasan] Obligasi",
  "deck": "BAFI menyiapkan dana Rp458 miliar plus bunga Rp7,44 miliar untuk pelunasan terakhir Obligasi Berkelanjutan II Tahap IV 2023, dikirim ke KSEI pada 7 September 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/bafi-siapkan-rp465-miliar-untuk-pelunasan-obligasi.jpg",
  "imageV": "mstx4crv",
  "tags": [
   "BAFI",
   "obligasi",
   "Bussan Auto Finance",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3b8596f3f6_2b5ab5218d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ihsg-melesat-1-59-usai-prabowo-pidato-rapbn-2027",
  "category": "Pasar Modal",
  "title": "IHSG [Melesat] 1,59% Usai Presiden Prabowo Pidato RAPBN 2027",
  "deck": "IHSG ditutup menguat 1,59 persen ke 6.401,89 setelah Presiden Prabowo memaparkan RAPBN 2027 dengan target defisit lebih rendah dan pertumbuhan ekonomi 6 persen.",
  "date": "14 Agustus 2026",
  "image": "assets/img/ihsg-melesat-1-59-usai-prabowo-pidato-rapbn-2027.jpg",
  "imageV": "mssvvotr",
  "tags": [
   "IHSG",
   "RAPBN 2027",
   "Presiden Prabowo Subianto",
   "defisit anggaran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459950-ihsg-melesat-usai-pidato-prabowo-ini-faktor-penting-yang-jadi-sorotan-investor"
 },
 {
  "slug": "dooh-ganti-pengendali-sinergi-internasional-kuasai-51-saham",
  "category": "Aksi Korporasi",
  "title": "DOOH Ganti [Pengendali], Sinergi Internasional Kuasai 51% Saham",
  "deck": "PT Sinergi Internasional Investama membeli 51% saham DOOH senilai Rp197,34 miliar dari PT Prambanan Investasi Sukses dan resmi menjadi pengendali baru perusahaan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/dooh-ganti-pengendali-sinergi-internasional-kuasai-51-saham.jpg",
  "imageV": "mstx4ye9",
  "tags": [
   "DOOH",
   "pengambilalihan",
   "pengendali baru",
   "tender offer wajib"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/190f26e2bf_813646b022.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "abda-panggil-rupslb-agendakan-perubahan-susunan-direksi",
  "category": "Aksi Korporasi",
  "title": "ABDA Panggil RUPSLB, Agendakan [Perubahan] Susunan Direksi",
  "deck": "PT Asuransi Bina Dana Arta menggelar RUPSLB 7 September 2026 di Jakarta dengan agenda tunggal persetujuan perubahan susunan direksi.",
  "date": "14 Agustus 2026",
  "image": "assets/img/abda-panggil-rupslb-agendakan-perubahan-susunan-direksi.jpg",
  "imageV": "mstx5o14",
  "tags": [
   "ABDA",
   "RUPSLB",
   "Direksi",
   "Oona Insurance"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/56a56bcb08_f8a35cc656.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pltm-siapkan-rp106-miliar-lunasi-obligasi-jatuh-tempo-september",
  "category": "Aksi Korporasi",
  "title": "PLTM Siapkan Rp106 Miliar Lunasi [Obligasi] Jatuh Tempo September",
  "deck": "PLTM memastikan dana Rp106 miliar sudah tersedia untuk melunasi Obligasi II dan Sukuk Ijarah II Seri B yang jatuh tempo 8 September 2026, bersumber dari kas internal perusahaan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/pltm-siapkan-rp106-miliar-lunasi-obligasi-jatuh-tempo-september.jpg",
  "imageV": "mstx66s9",
  "tags": [
   "PLTM",
   "obligasi",
   "sukuk ijarah",
   "pelunasan utang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c32ae070d4_b988c1df2b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-827-usai-pidato-rapbn-prabowo",
  "category": "Moneter",
  "title": "Rupiah [Menguat] ke Rp17.827 usai Pidato RAPBN Presiden Prabowo",
  "deck": "Rupiah menguat 50 poin ke Rp17.827 per dolar AS usai pidato RAPBN 2027 Presiden Prabowo; analis nilai target pertumbuhan 6 persen dan defisit Rp671,2 triliun masih wajar.",
  "date": "14 Agustus 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-827-usai-pidato-rapbn-prabowo.jpg",
  "imageV": "mssvvp9t",
  "tags": [
   "rupiah",
   "RAPBN 2027",
   "kurs dolar",
   "Presiden Prabowo Subianto"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459946-pidato-prabowo-bikin-rupiah-menguat-ke-rp17827-per-dolar-as-investor-soroti-target-rapbn-2027"
 },
 {
  "slug": "sfan-terima-pelunasan-rp13-88-miliar-dari-anak-usaha-dpi",
  "category": "Aksi Korporasi",
  "title": "SFAN Terima [Pelunasan] Rp13,88 Miliar dari Anak Usaha DPI",
  "deck": "Anak usaha DPI melunasi utang Rp13,875 miliar kepada Surya Fajar Capital, bagian dari pembelian saham SFUD yang disetujui RUPS Independen Juni lalu.",
  "date": "14 Agustus 2026",
  "image": "assets/img/sfan-terima-pelunasan-rp13-88-miliar-dari-anak-usaha-dpi.jpg",
  "imageV": "mstx6s6b",
  "tags": [
   "SFAN",
   "DPI",
   "divestasi",
   "RUPS Independen"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/cdb73fb72c_5b78827cf3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dart-jelaskan-lonjakan-transaksi-ke-bei-tak-ada-info-material",
  "category": "Aksi Korporasi",
  "title": "DART Jelaskan Lonjakan Transaksi ke BEI, [Tak] Ada Info Material",
  "deck": "Merespons surat permintaan penjelasan BEI, Duta Anggada Realty menyatakan tidak mengetahui informasi material apa pun di balik volatilitas transaksi sahamnya.",
  "date": "14 Agustus 2026",
  "image": "assets/img/dart-jelaskan-lonjakan-transaksi-ke-bei-tak-ada-info-material.jpg",
  "imageV": "mstx7dj4",
  "tags": [
   "DART",
   "Duta Anggada Realty",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/10be41d1aa_127a9b28e1.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wins-ungkap-detail-akuisisi-fast-offshore-di-public-expose",
  "category": "Aksi Korporasi",
  "title": "WINS Ungkap Detail [Akuisisi] Fast Offshore di Public Expose",
  "deck": "Dalam public expose 12 Agustus 2026, manajemen WINS merinci alasan akuisisi penuh Fast Offshore Supply dan Fast Offshore Indonesia yang masih rugi, serta kontrak baru penopangnya.",
  "date": "14 Agustus 2026",
  "image": "assets/img/wins-ungkap-detail-akuisisi-fast-offshore-di-public-expose.jpg",
  "imageV": "mstx80cl",
  "tags": [
   "WINS",
   "Wintermar Offshore Marine",
   "Fast Offshore",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0e166676c2_88f29e33e0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wika-panggil-rupsu-sukuk-mudharabah-ii-2021",
  "category": "Aksi Korporasi",
  "title": "WIKA Panggil [RUPSU] Sukuk Mudharabah II 2021",
  "deck": "WIKA akan menggelar RUPSU untuk Sukuk Mudharabah Berkelanjutan I Tahap II 2021 pada 17 September 2026, panggilan resmi terbit 2 September 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/wika-panggil-rupsu-sukuk-mudharabah-ii-2021.jpg",
  "imageV": "msu1ddez",
  "tags": [
   "WIKA",
   "sukuk",
   "RUPSU",
   "obligasi syariah"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/228b181190_f8f1eb085d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "acst-hadapi-gugatan-pkpu-dari-rekanan-proyek-baja",
  "category": "Aksi Korporasi",
  "title": "ACST Hadapi Gugatan [PKPU] dari Rekanan Proyek Baja",
  "deck": "ACST menjelaskan ke bursa soal permohonan PKPU dari subkontraktor IST terkait sengketa nilai retensi proyek struktur baja, serta perkembangan kasus korupsi yang telah berkekuatan hukum tetap.",
  "date": "14 Agustus 2026",
  "image": "assets/img/acst-hadapi-gugatan-pkpu-dari-rekanan-proyek-baja.jpg",
  "imageV": "msu1dy7q",
  "tags": [
   "ACST",
   "PKPU",
   "sengketa hukum",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f32704534c_313dcbc4f4.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "tguk-tetap-di-pemantauan-khusus-satu-kriteria-dicabut",
  "category": "Aksi Korporasi",
  "title": "TGUK Tetap di [Pemantauan Khusus], Satu Kriteria Dicabut",
  "deck": "Bursa mengubah status pemantauan khusus TGUK: kriteria suspensi dicabut, tapi likuiditas rendah dan kriteria lain masih berlaku mulai 18 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/tguk-tetap-di-pemantauan-khusus-satu-kriteria-dicabut.jpg",
  "imageV": "msu1eif4",
  "tags": [
   "TGUK",
   "Bursa Efek Indonesia",
   "Papan Pemantauan Khusus",
   "likuiditas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5931636943_0a8ee6bc60.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "alka-resmi-keluar-dari-pemantauan-khusus-bei",
  "category": "Aksi Korporasi",
  "title": "ALKA Resmi [Keluar] dari Pemantauan Khusus BEI",
  "deck": "Bursa Efek Indonesia mencabut status pemantauan khusus saham ALKA milik Alakasa Industrindo Tbk, efektif 18 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/alka-resmi-keluar-dari-pemantauan-khusus-bei.jpg",
  "imageV": "msu1f4xd",
  "tags": [
   "ALKA",
   "Alakasa Industrindo",
   "Bursa Efek Indonesia",
   "pemantauan khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c43455bb09_7405b30315.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prabowo-swasta-bisa-kelola-aset-bumn-termasuk-bandara",
  "category": "BUMN",
  "title": "Presiden Prabowo: Swasta Bisa Kelola [Aset] BUMN, Termasuk Bandara",
  "deck": "Presiden Prabowo membuka opsi swasta mengoperasikan aset BUMN yang belum optimal, termasuk bandara, tapi kepemilikan tetap di tangan negara, mengikuti model monetisasi aset ala India.",
  "date": "14 Agustus 2026",
  "image": "assets/img/prabowo-swasta-bisa-kelola-aset-bumn-termasuk-bandara.jpg",
  "imageV": "mssvvpxm",
  "tags": [
   "BUMN",
   "aset negara",
   "Presiden Prabowo Subianto",
   "APBN 2027"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459916-contoh-india-prabowo-buka-peluang-bandara-dan-aset-strategis-bumn-dikelola-swasta-tapi-kepemilikan-tetap-negara"
 },
 {
  "slug": "jpfa-pakai-rp497-82-miliar-dana-obligasi-buat-lunasi-term-loan",
  "category": "Aksi Korporasi",
  "title": "JPFA Pakai Rp497,82 Miliar Dana Obligasi buat [Lunasi] Term Loan",
  "deck": "JAPFA Comfeed pakai seluruh dana bersih obligasi Rp497,82 miliar untuk melunasi sebagian utang Term Loan lebih cepat, sesuai rencana prospektus.",
  "date": "14 Agustus 2026",
  "image": "assets/img/jpfa-pakai-rp497-82-miliar-dana-obligasi-buat-lunasi-term-loan.jpg",
  "imageV": "msu1ftxf",
  "tags": [
   "JPFA",
   "obligasi korporasi",
   "refinancing utang",
   "japfa comfeed"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/19b7ae6cbc_1afe4820df.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "s-p-pertahankan-rating-bbb-ekonomi-ri-tumbuh-tertinggi",
  "category": "Makroekonomi",
  "title": "S&P Pertahankan Rating BBB, Ekonomi RI Tumbuh [Tertinggi]",
  "deck": "Presiden Prabowo klaim ekonomi RI tetap kokoh di tengah tekanan global, setelah S&P pertahankan rating BBB dan China Lianhe beri AAA untuk Panda Bonds.",
  "date": "14 Agustus 2026",
  "image": "assets/img/s-p-pertahankan-rating-bbb-ekonomi-ri-tumbuh-tertinggi.jpg",
  "imageV": "msss9bch",
  "tags": [
   "S&P",
   "rating Indonesia",
   "investment grade",
   "RAPBN 2027"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459913-di-tengah-tekanan-global-prabowo-beberkan-sinyal-kepercayaan-dunia-ke-ekonomi-indonesia"
 },
 {
  "slug": "mktr-respons-permintaan-bursa-soal-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "MKTR Respons Permintaan Bursa soal [Volatilitas] Sahamnya",
  "deck": "MKTR menegaskan tak ada informasi material di balik pergerakan sahamnya yang tak wajar, dan pemegang saham utama belum berencana mengubah kepemilikan 8,27 juta sahamnya.",
  "date": "14 Agustus 2026",
  "image": "assets/img/mktr-respons-permintaan-bursa-soal-volatilitas-sahamnya.jpg",
  "imageV": "msu1gbg2",
  "tags": [
   "MKTR",
   "volatilitas saham",
   "keterbukaan informasi",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3dc321d614_aaa48f9f25.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ikbi-public-expose-laba-naik-44-penjualan-turun-12",
  "category": "Aksi Korporasi",
  "title": "IKBI Public Expose: [Laba] Naik 44%, Penjualan Turun 12%",
  "deck": "Materi Public Expose IKBI: laba bersih FY2025 naik 44% jadi US$8,27 juta meski penjualan turun 12%, utang turun tajam, target penjualan FY2026 US$266 juta.",
  "date": "14 Agustus 2026",
  "image": "assets/img/ikbi-public-expose-laba-naik-44-penjualan-turun-12.jpg",
  "imageV": "msu1gnvn",
  "tags": [
   "IKBI",
   "Sumi Indo Kabel",
   "Public Expose",
   "Laporan Keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6dcea83d5a_a098f75c2d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prabowo-ri-kehilangan-hampir-50-nilai-ekspor-sawit",
  "category": "Industri",
  "title": "Presiden Prabowo: RI [Kehilangan] Hampir 50% Nilai Ekspor Sawit",
  "deck": "Presiden Prabowo soroti selisih harga CPO Indonesia dan Rotterdam, sebut RI kehilangan hampir separuh nilai ekspor sawitnya.",
  "date": "14 Agustus 2026",
  "image": "assets/img/prabowo-ri-kehilangan-hampir-50-nilai-ekspor-sawit.jpg",
  "imageV": "mstuubca",
  "tags": [
   "sawit",
   "ekspor",
   "cpo",
   "danantara"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459901-prabowo-bongkar-selisih-harga-cpo-di-bursa-rotterdam-ri-kehilangan-hampir-50-nilai-komoditas-sawit"
 },
 {
  "slug": "oils-jadwalkan-rupslb-22-september-2026",
  "category": "Aksi Korporasi",
  "title": "OILS Jadwalkan RUPSLB [22 September] 2026",
  "deck": "Indo Oil Perkasa (OILS) akan menggelar RUPSLB pada 22 September 2026. Pemegang saham yang tercatat per 28 Agustus berhak hadir, agenda baru diumumkan 31 Agustus.",
  "date": "14 Agustus 2026",
  "image": "assets/img/oils-jadwalkan-rupslb-22-september-2026.jpg",
  "imageV": "msu1h7gv",
  "tags": [
   "OILS",
   "RUPSLB",
   "Indo Oil Perkasa",
   "RUPS"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4667566d00_70fbbd7c46.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prabowo-targetkan-750-bumn-lagi-ditutup-tahun-ini",
  "category": "BUMN",
  "title": "Presiden Prabowo Targetkan [750] BUMN Lagi Ditutup Tahun Ini",
  "deck": "Presiden Prabowo melaporkan 290 dari 1.074 BUMN sudah ditutup, hemat Rp50 triliun, dan menargetkan 750 BUMN lagi tutup sebelum akhir 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/prabowo-targetkan-750-bumn-lagi-ditutup-tahun-ini.jpg",
  "imageV": "msss9c94",
  "tags": [
   "BUMN",
   "Presiden Prabowo Subianto",
   "restrukturisasi BUMN",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459878-prabowo-pangkas-bumn-tak-produktif-rp50-triliun-hemat-dan-750-perusahaan-lagi-bakal-ditutup"
 },
 {
  "slug": "prabowo-bakal-tutup-750-lebih-bumn-sampai-2026",
  "category": "BUMN",
  "title": "Presiden Prabowo Bakal [Tutup] 750 Lebih BUMN Sampai 2026",
  "deck": "Presiden Prabowo menyatakan 290 dari 1.074 BUMN sudah ditutup, dan pemerintah menargetkan hanya menyisakan maksimal 300 BUMN pada akhir 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/prabowo-bakal-tutup-750-lebih-bumn-sampai-2026.jpg",
  "imageV": "msss9cyx",
  "tags": [
   "BUMN",
   "Presiden Prabowo Subianto",
   "restrukturisasi BUMN",
   "Sidang Tahunan MPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459895-prabowo-sebut-bakal-tutup-790-bumn-kita-target-paling-banyak-punya-300"
 },
 {
  "slug": "ptsp-bantah-ada-info-material-di-balik-volatilitas-sahamnya",
  "category": "Aksi Korporasi",
  "title": "PTSP Bantah Ada Info Material di Balik [Volatilitas] Sahamnya",
  "deck": "PTSP menjawab permintaan BEI soal gejolak sahamnya: tak ada info material baru dan tak ada rencana aksi korporasi dalam tiga bulan ke depan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/ptsp-bantah-ada-info-material-di-balik-volatilitas-sahamnya.jpg",
  "imageV": "msu5v123",
  "tags": [
   "PTSP",
   "Pioneerindo Gourmet International",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c9f3e2d0a7_19ae4d1e40.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bq-umumkan-jatuh-tempo-18-waran-terstruktur-bqcq6a",
  "category": "Aksi Korporasi",
  "title": "BQ Umumkan Jatuh Tempo 18 [Waran Terstruktur] BQCQ6A",
  "deck": "KISI mengumumkan 18 waran terstruktur BQCQ6A atas saham AADI hingga TAPG akan berakhir dan dieksekusi otomatis pada 31 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/bq-umumkan-jatuh-tempo-18-waran-terstruktur-bqcq6a.jpg",
  "imageV": "mssqdnmv",
  "tags": [
   "BQ",
   "waran terstruktur",
   "KISI",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d3090f3670_7da28b477b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "brimo-capai-49-7-juta-pengguna-per-juni-2026",
  "category": "Perbankan",
  "title": "BRImo Capai [49,7] Juta Pengguna per Juni 2026",
  "deck": "Pengguna Super App BRImo tembus 49,7 juta dengan volume transaksi Rp4.166 triliun hingga Juni 2026, ditopang sinergi BRI dan Danantara.",
  "date": "14 Agustus 2026",
  "image": "assets/img/brimo-capai-49-7-juta-pengguna-per-juni-2026.jpg",
  "imageV": "msss9dp8",
  "tags": [
   "BRI",
   "BRImo",
   "Danantara",
   "perbankan digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459890-brimo-capai-497-juta-pengguna-dengan-volume-transaksi-rp4166-triliun-hingga-juni-2026-perkuat-inklusi-keuangan-bersama-danantara"
 },
 {
  "slug": "bslt-siapkan-dana-rp750-miliar-lunasi-obligasi-jatuh-tempo-sept",
  "category": "Aksi Korporasi",
  "title": "BSLT siapkan dana [Rp750 miliar] lunasi obligasi jatuh tempo Sept",
  "deck": "Bank SulutGo (BSLT) menyatakan sudah menyiapkan dana Rp750 miliar untuk melunasi pokok Obligasi Berkelanjutan I Tahap I 2021 (BSLT01CN1) yang jatuh tempo 7 September 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/bslt-siapkan-dana-rp750-miliar-lunasi-obligasi-jatuh-tempo-sept.jpg",
  "imageV": "mssqe7ct",
  "tags": [
   "BSLT",
   "obligasi",
   "Bank SulutGo",
   "jatuh tempo"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/aba0384dc8_f6e1e96106.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-umumkan-harga-final-18-seri-waran-terstruktur-baru",
  "category": "Aksi Korporasi",
  "title": "DR Umumkan Harga Final 18 Seri [Waran Terstruktur] Baru",
  "deck": "RHB Sekuritas (DR) merilis term sheet berisi harga penawaran dan pelaksanaan 18 seri call warrant baru atas saham AMMN, BBCA, BBRI, dan 15 lainnya, dicatatkan 19 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/dr-umumkan-harga-final-18-seri-waran-terstruktur-baru.jpg",
  "imageV": "mssqeos8",
  "tags": [
   "DR",
   "waran terstruktur",
   "AMMN",
   "BBCA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/731ac75733_6d9a15635d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "9-2-gw-proyek-plta-pltm-ri-masuk-tahap-eksekusi",
  "category": "Energi",
  "title": "9,2 GW Proyek PLTA-PLTM RI Masuk Tahap [Eksekusi]",
  "deck": "PLN catat 9,2 gigawatt proyek PLTA dan PLTM, atau 79 persen dari target RUPTL 2025-2034, sudah masuk tahap eksekusi hingga Juli 2026, meski baru 570 MW yang beroperasi.",
  "date": "14 Agustus 2026",
  "image": "assets/img/9-2-gw-proyek-plta-pltm-ri-masuk-tahap-eksekusi.jpg",
  "imageV": "msss9eyl",
  "tags": [
   "PLTA",
   "PLTM",
   "PLN",
   "Pumped Storage"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459884-akselerasi-pengembangan-hydropower-92-gw-proyek-plta-dan-pltm-masuk-tahapan-eksekusi"
 },
 {
  "slug": "kadi-buka-penyelidikan-dumping-sap-asal-tiongkok",
  "category": "Industri",
  "title": "KADI Buka Penyelidikan [Dumping] SAP Asal Tiongkok",
  "deck": "KADI membuka penyelidikan antidumping impor Superabsorbent Polymers dari Tiongkok, menyusul aduan PT Nippon Shokubai Indonesia atas lonjakan impor yang disebut merugikan industri dalam negeri.",
  "date": "14 Agustus 2026",
  "image": "assets/img/kadi-buka-penyelidikan-dumping-sap-asal-tiongkok.jpg",
  "imageV": "mssqf34x",
  "tags": [
   "antidumping",
   "KADI",
   "impor Tiongkok",
   "industri kimia"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kadi-inisiasi-penyelidikan-antidumping-produk-impor-superabsorbent-polymers-asal-tiongkok",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "luck-jadwalkan-rupslb-pada-23-september-2026",
  "category": "Aksi Korporasi",
  "title": "LUCK Jadwalkan [RUPSLB] pada 23 September 2026",
  "deck": "PT Sentral Mitra Informatika Tbk (LUCK) mengumumkan rencana RUPSLB pada 23 September 2026, dengan tanggal pencatatan pemegang saham 31 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/luck-jadwalkan-rupslb-pada-23-september-2026.jpg",
  "imageV": "mssqfhgz",
  "tags": [
   "LUCK",
   "RUPSLB",
   "Sentral Mitra Informatika",
   "pemegang saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/061d310702_1676372240.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "usai-tambang-ilegal-ditutup-laba-pt-timah-melonjak-900",
  "category": "BUMN",
  "title": "Usai Tambang Ilegal Ditutup, Laba PT Timah [Melonjak] 900%",
  "deck": "Presiden Prabowo klaim laba PT Timah naik sembilan kali lipat jadi Rp2,7 triliun pada semester I 2026, menyusul penutupan sekitar 1.000 titik tambang ilegal di Bangka Belitung.",
  "date": "14 Agustus 2026",
  "image": "assets/img/usai-tambang-ilegal-ditutup-laba-pt-timah-melonjak-900.jpg",
  "imageV": "mssoesiy",
  "tags": [
   "PT Timah",
   "tambang ilegal",
   "Bangka Belitung",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459876-tambang-ilegal-ditutup-profit-pt-timah-disebut-tembus-rp27-triliun-dalam-6-bulan"
 },
 {
  "slug": "bpii-bagikan-dividen-interim-rp35-miliar-cair-11-september",
  "category": "Aksi Korporasi",
  "title": "BPII Bagikan Dividen Interim [Rp35 Miliar], Cair 11 September",
  "deck": "BPII membagikan dividen interim tahun buku 2026 senilai Rp3,54 per saham, total maksimal Rp35 miliar, dengan pencatatan pemegang saham 28 Agustus dan pembayaran 11 September 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/bpii-bagikan-dividen-interim-rp35-miliar-cair-11-september.jpg",
  "imageV": "mssqg45c",
  "tags": [
   "BPII",
   "dividen interim",
   "emiten",
   "pasar modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b6c44630e8_edb34840aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mcor-tambah-shen-huayu-sebagai-komisaris-baru-bank",
  "category": "Aksi Korporasi",
  "title": "MCOR Tambah Shen Huayu Sebagai [Komisaris] Baru Bank",
  "deck": "Bank China Construction Bank Indonesia (MCOR) menambah Shen Huayu sebagai komisaris baru per 12 Agustus 2026, sementara seluruh direksi dan komisaris lain tidak berubah.",
  "date": "14 Agustus 2026",
  "image": "assets/img/mcor-tambah-shen-huayu-sebagai-komisaris-baru-bank.jpg",
  "imageV": "mssqgqgd",
  "tags": [
   "MCOR",
   "Perbankan",
   "Komisaris",
   "Tata Kelola"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/2ada6d0787_9f745ec7d9.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cnma-rampungkan-realisasi-dana-ipo-porsi-pelunasan-utang-naik",
  "category": "Aksi Korporasi",
  "title": "CNMA Rampungkan Realisasi Dana IPO, Porsi [Pelunasan Utang] Naik",
  "deck": "Seluruh dana hasil IPO 2023 CNMA senilai Rp2,17 triliun sudah terpakai habis, namun porsi pelunasan utang membengkak jadi 23 persen dari rencana 20 persen, sementara alokasi ekspansi sedikit menyusut.",
  "date": "14 Agustus 2026",
  "image": "assets/img/cnma-rampungkan-realisasi-dana-ipo-porsi-pelunasan-utang-naik.jpg",
  "imageV": "mssqha04",
  "tags": [
   "CNMA",
   "IPO",
   "penggunaan dana",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/50b9a30555_0c4a92a6c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ibst-buka-sementara-suspensi-untuk-crossing-saham-buyback",
  "category": "Aksi Korporasi",
  "title": "IBST buka sementara suspensi untuk crossing saham [buyback]",
  "deck": "Bursa membuka sementara perdagangan IBST khusus pasar negosiasi Jumat siang untuk crossing saham hasil buyback, bagian dari proses go private perseroan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/ibst-buka-sementara-suspensi-untuk-crossing-saham-buyback.jpg",
  "imageV": "mssqhxdk",
  "tags": [
   "IBST",
   "suspensi saham",
   "buyback",
   "go private"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ce9b6e3990_ce89012025.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendag-catat-23-kesepakatan-ritel-dari-program-wirausaha-kampus",
  "category": "UMKM",
  "title": "Kemendag Catat [23] Kesepakatan Ritel dari Program Wirausaha Kampus",
  "deck": "Program Campuspreneur Kemendag mencatat 23 kesepakatan awal wirausaha kampus dengan ritel modern, serta ekspor pinang binaan IPB senilai Rp2,2 miliar ke Bangladesh dan Maladewa.",
  "date": "14 Agustus 2026",
  "image": "assets/img/kemendag-catat-23-kesepakatan-ritel-dari-program-wirausaha-kampus.jpg",
  "imageV": "msslu0tk",
  "tags": [
   "Campuspreneur",
   "UMKM",
   "ekspor",
   "Kemendag"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/semester-i-2026-kemendag-perkuat-sinergi-campuspreneur-untuk-cetak-wirausaha-muda-berorientasi-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "dgik-jawab-permintaan-bursa-soal-volatilitas-saham-uma",
  "category": "Aksi Korporasi",
  "title": "DGIK Jawab Permintaan Bursa soal Volatilitas Saham [UMA]",
  "deck": "Saham DGIK anjlok 5,3% ke Rp125 dengan volume melonjak 3,4 kali dalam sehari. Emiten konstruksi ini menyatakan tidak ada informasi material di baliknya.",
  "date": "14 Agustus 2026",
  "image": "assets/img/dgik-jawab-permintaan-bursa-soal-volatilitas-saham-uma.jpg",
  "imageV": "msslul7y",
  "tags": [
   "DGIK",
   "UMA",
   "volatilitas saham",
   "Bursa Efek Indonesia"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8f405d8df0_dfea507aeb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prabowo-kekuatan-ekonomi-ri-ada-di-desa",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo: Kekuatan Ekonomi RI Ada di [Desa]",
  "deck": "Presiden Prabowo menegaskan desa jadi motor ekonomi nasional, didukung 10.000 koperasi, ribuan jembatan desa, dan titik air bersih baru dalam pidato Sidang Tahunan MPR 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/prabowo-kekuatan-ekonomi-ri-ada-di-desa.jpg",
  "imageV": "mssk7kyk",
  "tags": [
   "ekonomi desa",
   "koperasi merah putih",
   "prabowo subianto",
   "umkm"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459834-prabowo-tegaskan-kekuatan-ekonomi-indonesia-ada-di-desa-30-ribu-koperasi-ditargetkan-beroperasi"
 },
 {
  "slug": "investasi-ri-tembus-rp1-931-triliun-serap-2-7-juta-kerja",
  "category": "Makroekonomi",
  "title": "Investasi RI [Tembus] Rp1.931 Triliun, Serap 2,7 Juta Kerja",
  "deck": "Presiden Prabowo: realisasi investasi 2025 capai Rp1.931 triliun, ciptakan 2,7 juta lapangan kerja di tengah gejolak ekonomi global.",
  "date": "14 Agustus 2026",
  "image": "assets/img/investasi-ri-tembus-rp1-931-triliun-serap-2-7-juta-kerja.jpg",
  "imageV": "mssk7lfh",
  "tags": [
   "investasi",
   "realisasi investasi 2026",
   "lapangan kerja",
   "pertumbuhan ekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459832-investasi-ri-tembus-rp1931-triliun-serap-27-juta-tenaga-kerja-di-tengah-ketidakpastian-global"
 },
 {
  "slug": "petani-ngawi-panen-padi-3-kali-setahun-9-ton-ha",
  "category": "UMKM",
  "title": "Petani Ngawi Panen Padi [3 Kali] Setahun, 9 Ton/Ha",
  "deck": "Joko Purnomo, petani di Ngawi, Jawa Timur, mencatat produktivitas 9 ton gabah per hektare dengan panen tiga kali setahun berkat penerapan teknologi pertanian.",
  "date": "14 Agustus 2026",
  "image": "assets/img/petani-ngawi-panen-padi-3-kali-setahun-9-ton-ha.jpg",
  "imageV": "mssk7lxk",
  "tags": [
   "petani ngawi",
   "teknologi pertanian",
   "produktivitas padi",
   "kelompok tani"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459830-joko-purnomo-buktikan-petani-bisa-sejahtera-panen-9-ton-per-hektare-hingga-3-kali-setahun"
 },
 {
  "slug": "dmas-jadwalkan-rupslb-cum-date-saham-28-agustus",
  "category": "Aksi Korporasi",
  "title": "DMAS Jadwalkan RUPSLB, [Cum Date] Saham 28 Agustus",
  "deck": "Puradelta Lestari mengumumkan rencana RUPSLB pada 22 September 2026 di Cikarang. Pemegang saham yang tercatat per 28 Agustus 2026 berhak hadir dan memberi suara.",
  "date": "14 Agustus 2026",
  "image": "assets/img/dmas-jadwalkan-rupslb-cum-date-saham-28-agustus.jpg",
  "imageV": "mssj25oh",
  "tags": [
   "DMAS",
   "RUPSLB",
   "Puradelta Lestari",
   "Corporate Action"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d8975b4331_1439a3e3a7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "neutradc-gandeng-pln-kejar-ekspansi-data-center-200-mw",
  "category": "Teknologi",
  "title": "NeutraDC Gandeng PLN Kejar Ekspansi Data Center [200 MW]",
  "deck": "NeutraDC dan PLN menandatangani MoU pasokan energi untuk ekspansi data center hyperscale di Cikarang, menambah kapasitas hingga 200 MW guna mendukung kebutuhan AI dan cloud computing.",
  "date": "14 Agustus 2026",
  "image": "assets/img/neutradc-gandeng-pln-kejar-ekspansi-data-center-200-mw.jpg",
  "imageV": "mssk7mfv",
  "tags": [
   "NeutraDC",
   "PLN",
   "Data Center",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459827-sinergi-danantara-neutradc-gandeng-pln-siapkan-ekspansi-hyperscale-data-center"
 },
 {
  "slug": "tjsl-pln-berdayakan-nelayan-kalsel-dan-lulusan-smk-semarang",
  "category": "BUMN",
  "title": "TJSL PLN [Berdayakan] Nelayan Kalsel dan Lulusan SMK Semarang",
  "deck": "Program TJSL PLN mendampingi nelayan Kotabaru membudidayakan kepiting soka bernilai tinggi, sekaligus melatih ratusan lulusan SMK Semarang untuk bekerja di industri tekstil dan alas kaki.",
  "date": "14 Agustus 2026",
  "image": "assets/img/tjsl-pln-berdayakan-nelayan-kalsel-dan-lulusan-smk-semarang.jpg",
  "imageV": "mssk7myn",
  "tags": [
   "PLN",
   "TJSL PLN",
   "Desa Berdaya",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459823-cerita-perubahan-dari-berbagai-daerah-program-tjsl-pln-hadirkan-manfaat-bagi-masyarakat-dan-lingkungan"
 },
 {
  "slug": "ggrm-tambah-modal-rp200-miliar-ke-afiliasi-sdhi",
  "category": "Aksi Korporasi",
  "title": "GGRM Tambah [Modal] Rp200 Miliar ke Afiliasi SDHI",
  "deck": "Gudang Garam menyuntik modal Rp200 miliar ke PT Surya Dhoho Investama lewat penerbitan 200.000 saham baru, dicatat sebagai transaksi afiliasi karena hubungan pengendalian dan kepemilikan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/ggrm-tambah-modal-rp200-miliar-ke-afiliasi-sdhi.jpg",
  "imageV": "mssj2pfp",
  "tags": [
   "GGRM",
   "transaksi afiliasi",
   "Surya Dhoho Investama",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3c91e6c3e8_05bc4a7c06.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ratu-panggil-rupslb-rencanakan-penerbitan-saham-baru-tanpa-rights",
  "category": "Aksi Korporasi",
  "title": "RATU Panggil RUPSLB, Rencanakan [Penerbitan Saham Baru] Tanpa Rights",
  "deck": "RUPSLB RATU digelar 8 September 2026 untuk menyetujui penambahan modal tanpa hak memesan efek terlebih dahulu (PMTHMETD) dan perubahan anggaran dasar terkait penerbitan saham baru.",
  "date": "14 Agustus 2026",
  "image": "assets/img/ratu-panggil-rupslb-rencanakan-penerbitan-saham-baru-tanpa-rights.jpg",
  "imageV": "mssj3ffu",
  "tags": [
   "RATU",
   "RUPSLB",
   "PMTHMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/ec3f32fc48_add525c29d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "koni-panggil-rupslb-7-september-bahas-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "KONI Panggil RUPSLB 7 September, Bahas [Perubahan Direksi]",
  "deck": "KONI memanggil RUPSLB pada 7 September 2026 untuk membahas perubahan Anggaran Dasar dan susunan Direksi; pemegang saham per 13 Agustus 2026 berhak hadir.",
  "date": "14 Agustus 2026",
  "image": "assets/img/koni-panggil-rupslb-7-september-bahas-perubahan-direksi.jpg",
  "imageV": "mssj4sgn",
  "tags": [
   "KONI",
   "RUPSLB",
   "Perdana Bangun Pusaka",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4e24998f5e_141617bfcc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prabowo-klaim-swasembada-pangan-capai-target-dalam-setahun",
  "category": "Makroekonomi",
  "title": "Presiden Prabowo Klaim Swasembada Pangan Capai Target dalam [Setahun]",
  "deck": "Presiden Prabowo mengklaim swasembada pangan tercapai lebih cepat dari target, harga pupuk turun 20 persen, dan RI disebut tak lagi impor solar sejak Juli 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/prabowo-klaim-swasembada-pangan-capai-target-dalam-setahun.jpg",
  "imageV": "mssk7nnn",
  "tags": [
   "swasembada pangan",
   "harga pupuk",
   "Pupuk Indonesia",
   "B50"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459815-prabowo-klaim-swasembada-pangan-tembus-target-harga-pupuk-turun-20-persen-hingga-b50-bebaskan-ri-dari-impor-solar"
 },
 {
  "slug": "truk-gelar-public-expose-usai-saham-melonjak-25-persen",
  "category": "Aksi Korporasi",
  "title": "TRUK Gelar Public Expose Usai Saham [Melonjak] 25 Persen",
  "deck": "BEI sempat menghentikan sementara perdagangan saham TRUK pada 11 Agustus 2026 setelah harganya melonjak 25 persen disertai lonjakan volume transaksi dalam sehari.",
  "date": "14 Agustus 2026",
  "image": "assets/img/truk-gelar-public-expose-usai-saham-melonjak-25-persen.jpg",
  "imageV": "mssj54zw",
  "tags": [
   "TRUK",
   "suspensi saham",
   "unusual market activity",
   "public expose"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9ef5bbf240_fff9c5f039.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "padi-panggil-rupslb-kedua-bahas-status-pengendali-baru",
  "category": "Aksi Korporasi",
  "title": "PADI Panggil RUPSLB Kedua, Bahas Status [Pengendali] Baru",
  "deck": "RUPSLB kedua PADI digelar 21 Agustus 2026 setelah rapat pertama gagal kuorum, membahas penetapan Djoko Joelijanto sebagai pengendali baru dan pengangkatan direktur baru Beba Hawah Ria.",
  "date": "14 Agustus 2026",
  "image": "assets/img/padi-panggil-rupslb-kedua-bahas-status-pengendali-baru.jpg",
  "imageV": "mssj5p2v",
  "tags": [
   "PADI",
   "RUPSLB",
   "Minna Padi",
   "pemegang saham pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/30ad782e89_6aea8e807f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kkgi-direktur-eddy-ajukan-pengunduran-diri",
  "category": "Aksi Korporasi",
  "title": "KKGI: Direktur Eddy Ajukan [Pengunduran Diri]",
  "deck": "Direktur PT Resource Alam Indonesia Tbk (KKGI), Eddy, mengajukan surat pengunduran diri pada 13 Agustus 2026 karena keluarganya pindah ke luar kota.",
  "date": "14 Agustus 2026",
  "image": "assets/img/kkgi-direktur-eddy-ajukan-pengunduran-diri.jpg",
  "imageV": "mssj67su",
  "tags": [
   "KKGI",
   "Resource Alam Indonesia",
   "pergantian direksi",
   "batu bara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d33b123571_2f720e19c2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nisp-rampungkan-akuisisi-ptos-senilai-rp455-2-miliar",
  "category": "Aksi Korporasi",
  "title": "NISP [rampungkan] akuisisi PTOS senilai Rp455,2 miliar",
  "deck": "Bank OCBC NISP resmi menguasai 99,9999% saham PT OCBC Sekuritas Indonesia senilai Rp455,201 miliar, membentuk struktur konglomerasi keuangan OCBC Grup di Indonesia.",
  "date": "14 Agustus 2026",
  "image": "assets/img/nisp-rampungkan-akuisisi-ptos-senilai-rp455-2-miliar.jpg",
  "imageV": "mssj6q4b",
  "tags": [
   "NISP",
   "akuisisi",
   "OCBC Sekuritas",
   "konglomerasi keuangan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b826173c66_1eb4f6ce93.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "presiden-luncurkan-molinas-kapasitas-pabrik-ev-2-5-juta-unit",
  "category": "Industri",
  "title": "Presiden Luncurkan MoLiNas, Kapasitas Pabrik EV [2,5 Juta] Unit",
  "deck": "Presiden Prabowo luncurkan ekosistem Motor Listrik Nasional (MoLiNas) di pabrik ALVA, Cikarang, di tengah kapasitas produksi EV yang jauh melebihi realisasi penjualan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/presiden-luncurkan-molinas-kapasitas-pabrik-ev-2-5-juta-unit.jpg",
  "imageV": "mssbcddw",
  "tags": [
   "kendaraan listrik",
   "MoLiNas",
   "industri otomotif",
   "investasi"
  ],
  "kreditFoto": "Kementerian Perindustrian",
  "sourceUrl": "https://kemenperin.go.id/artikel/72482942/Presiden-Luncurkan-MoLiNas,-Menperin:-Momentum-Perkuat-Kemandirian-Industri-dan-Teknologi-Nasional",
  "sourceLabel": "Kementerian Perindustrian"
 },
 {
  "slug": "kemenperin-buka-restrukturisasi-mesin-industri-tekstil-2026",
  "category": "Industri",
  "title": "Kemenperin [Buka] Restrukturisasi Mesin Industri Tekstil 2026",
  "deck": "Kemenperin membuka pendaftaran program restrukturisasi mesin dan peralatan untuk industri tekstil tahun anggaran 2026, mulai 18 Mei hingga 31 Agustus 2026.",
  "date": "14 Agustus 2026",
  "image": "assets/img/kemenperin-buka-restrukturisasi-mesin-industri-tekstil-2026.jpg",
  "imageV": "mss9f4d6",
  "tags": [
   "restrukturisasi mesin",
   "industri tekstil",
   "Kemenperin",
   "TPT 2026"
  ],
  "sourceUrl": "https://kemenperin.go.id/artikel/72482751/Program-Restrukturisasi-MesinPeralatan-pada-Tekstil-dan-Produk-Tekstil-Tahun-Anggaran-2026",
  "sourceLabel": "Kementerian Perindustrian"
 },
 {
  "slug": "penyelundupan-23-79-kg-emas-diduga-dipasok-tambang-ilegal",
  "category": "Energi",
  "title": "Penyelundupan 23,79 Kg Emas Diduga Dipasok [Tambang] Ilegal",
  "deck": "Bea Cukai gagalkan penyelundupan 23,793 kg emas senilai Rp63 miliar di Bandara Soetta. ESDM duga pemasoknya penambang tanpa izin dan janji perketat aturan.",
  "date": "14 Agustus 2026",
  "image": "assets/img/penyelundupan-23-79-kg-emas-diduga-dipasok-tambang-ilegal.jpg",
  "imageV": "mssbcqwl",
  "tags": [
   "emas",
   "ESDM",
   "penyelundupan",
   "tambang ilegal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459783-penyuplai-penyelundupan-23793-kilogram-emas-diduga-penambang-ilegal-ini-yang-dikatakan-esdm"
 },
 {
  "slug": "boba-perpanjang-kontrak-enam-bulan-dengan-quaker-indonesia",
  "category": "Aksi Korporasi",
  "title": "BOBA perpanjang kontrak [enam bulan] dengan Quaker Indonesia",
  "deck": "Formosa Ingredient Factory (BOBA) memperoleh perpanjangan kontrak produksi enam bulan dengan PT Quaker Indonesia, berlaku 1 Agustus 2026 hingga 31 Januari 2027, lewat adendum perjanjian.",
  "date": "13 Agustus 2026",
  "image": "assets/img/boba-perpanjang-kontrak-enam-bulan-dengan-quaker-indonesia.jpg",
  "imageV": "msslux7b",
  "tags": [
   "BOBA",
   "kontrak",
   "Quaker Indonesia",
   "adendum"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a1a2eabbfb_c00b179813.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sqmi-panggil-rupst-4-september-bahas-perubahan-direksi",
  "category": "Aksi Korporasi",
  "title": "SQMI Panggil RUPST 4 September, Bahas Perubahan [Direksi]",
  "deck": "Wilton Makmur Indonesia (SQMI) memanggil RUPST pada 4 September 2026, dengan agenda perubahan susunan direksi dan penyesuaian anggaran dasar mengikuti klasifikasi usaha KBLI 2025.",
  "date": "13 Agustus 2026",
  "image": "assets/img/sqmi-panggil-rupst-4-september-bahas-perubahan-direksi.jpg",
  "imageV": "msslvhm4",
  "tags": [
   "SQMI",
   "RUPST",
   "Wilton Makmur Indonesia",
   "Direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/b59d658243_e589a52515.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hits-panggil-rupslb-agenda-pergantian-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "HITS panggil RUPSLB, agenda [pergantian] direksi-komisaris",
  "deck": "HITS mengundang pemegang saham hadir dalam RUPSLB 4 September 2026 untuk menyetujui pengangkatan kembali atau perubahan susunan direksi dan dewan komisaris.",
  "date": "13 Agustus 2026",
  "image": "assets/img/hits-panggil-rupslb-agenda-pergantian-direksi-komisaris.jpg",
  "imageV": "msslvz0j",
  "tags": [
   "HITS",
   "RUPSLB",
   "direksi",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d742f5f662_bb28da8a05.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "giaa-jawab-bursa-tak-ada-informasi-material-baru-soal-sahamnya",
  "category": "Aksi Korporasi",
  "title": "GIAA Jawab Bursa: Tak Ada [Informasi Material] Baru soal Sahamnya",
  "deck": "Merespons surat resmi Bursa Efek Indonesia soal lonjakan transaksi sahamnya, Garuda Indonesia menyatakan tidak mengetahui adanya informasi material yang belum diungkap ke publik.",
  "date": "13 Agustus 2026",
  "image": "assets/img/giaa-jawab-bursa-tak-ada-informasi-material-baru-soal-sahamnya.jpg",
  "imageV": "msslwjrx",
  "tags": [
   "GIAA",
   "Garuda Indonesia",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/470264e5ab_f2693a69aa.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "inkp-tawarkan-obligasi-tahap-iii-rp2-triliun-kupon-10-10-5",
  "category": "Aksi Korporasi",
  "title": "INKP tawarkan obligasi tahap III [Rp2 triliun], kupon 10-10,5%",
  "deck": "Indah Kiat Pulp & Paper akan menerbitkan obligasi tahap III senilai maksimal Rp2 triliun dengan kupon 10 sampai 10,5 persen, bagian dari program Rp10 triliun.",
  "date": "13 Agustus 2026",
  "image": "assets/img/inkp-tawarkan-obligasi-tahap-iii-rp2-triliun-kupon-10-10-5.jpg",
  "imageV": "msslx6oq",
  "tags": [
   "INKP",
   "obligasi korporasi",
   "pendanaan",
   "pulp dan kertas"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bc5f6763ea_2416eb9f46.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kemendag-dorong-produk-lokal-lebih-menonjol-di-e-commerce",
  "category": "UMKM",
  "title": "Kemendag Dorong Produk Lokal Lebih [Menonjol] di E-Commerce",
  "deck": "Shopee meluncurkan program insentif bagi penjual produk lokal, menyusul aturan Kementerian Perdagangan soal visibilitas produk dalam negeri di platform digital.",
  "date": "13 Agustus 2026",
  "image": "assets/img/kemendag-dorong-produk-lokal-lebih-menonjol-di-e-commerce.jpg",
  "imageV": "msrm3kur",
  "tags": [
   "UMKM",
   "e-commerce",
   "Kementerian Perdagangan",
   "produk lokal"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/mendag-busan-apresiasi-platform-niaga-elektronik-sinergikan-visibilitas-produk-lokal",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "pertamina-terima-539-peserta-magang-2026",
  "category": "Ketenagakerjaan",
  "title": "Pertamina [Terima] 539 Peserta Magang 2026",
  "deck": "Dari 94.176 pendaftar, Pertamina meluluskan 539 peserta magang 2026 untuk program setahun, jumlah pendaftar melonjak tiga kali lipat dari tahun lalu.",
  "date": "13 Agustus 2026",
  "image": "assets/img/pertamina-terima-539-peserta-magang-2026.jpg",
  "imageV": "msrm3lh4",
  "tags": [
   "Pertamina",
   "magang",
   "ketenagakerjaan",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459735-pertamina-terima-539-peserta-internship-2026-berikan-pengalaman-kerja-bagi-talenta-muda"
 },
 {
  "slug": "euro-rencanakan-rights-issue-hingga-2-miliar-saham-baru",
  "category": "Aksi Korporasi",
  "title": "EURO Rencanakan [Rights Issue] hingga 2 Miliar Saham Baru",
  "deck": "PT Estee Gold Feet Tbk (EURO) berencana menerbitkan hingga 2 miliar saham baru lewat skema HMETD untuk modal kerja dan penambahan kapasitas usaha. RUPSLB digelar 18 September 2026.",
  "date": "13 Agustus 2026",
  "image": "assets/img/euro-rencanakan-rights-issue-hingga-2-miliar-saham-baru.jpg",
  "imageV": "msslxr14",
  "tags": [
   "EURO",
   "rights issue",
   "HMETD",
   "penambahan modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/09a7a76446_7fc0601490.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnbp-esdm-lampaui-target-2025-raih-opini-wtp",
  "category": "Energi",
  "title": "PNBP ESDM [Lampaui] Target 2025, Raih Opini WTP",
  "deck": "PNBP Kementerian ESDM sepanjang 2025 mencapai Rp138,40 triliun, 108,56 persen dari target, sekaligus kembali meraih opini WTP dari BPK.",
  "date": "13 Agustus 2026",
  "image": "assets/img/pnbp-esdm-lampaui-target-2025-raih-opini-wtp.jpg",
  "imageV": "msrgl9i4",
  "tags": [
   "PNBP",
   "Kementerian ESDM",
   "Opini WTP",
   "BPK"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pnbp-lampaui-target-kementerian-esdm-kembali-peroleh-opini-wtp",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "lelang-batu-bara-sitaan-esdm-hasilkan-rp21-miliar",
  "category": "Energi",
  "title": "Lelang Batu Bara Sitaan ESDM Hasilkan [Rp21] Miliar",
  "deck": "Lelang batu bara hasil penegakan hukum di Kalimantan Timur menambah penerimaan negara Rp20,98 miliar, dengan pemenang lelang wajib mengangkut seluruh batu bara sebelum 10 September 2026.",
  "date": "13 Agustus 2026",
  "image": "assets/img/lelang-batu-bara-sitaan-esdm-hasilkan-rp21-miliar.jpg",
  "imageV": "msrglcen",
  "tags": [
   "ESDM",
   "batu bara",
   "PNBP",
   "Kalimantan Timur"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/hasil-penegakan-hukum-esdm-tambah-pnbp-lebih-dari-rp20-miliar-dari-lelang-batubara",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "esdm-hba-agustus-turun-5-62-jadi-usd124-44-ton",
  "category": "Energi",
  "title": "ESDM: HBA Agustus [Turun] 5,62% jadi USD124,44/Ton",
  "deck": "HBA periode pertama Agustus 2026 turun 5,62 persen dari periode sebelumnya menjadi USD124,44 per ton, tapi masih 21 persen lebih tinggi dari tahun lalu.",
  "date": "13 Agustus 2026",
  "image": "assets/img/esdm-hba-agustus-turun-5-62-jadi-usd124-44-ton.jpg",
  "imageV": "msrglei8",
  "tags": [
   "batubara",
   "HBA",
   "ESDM",
   "royalti"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/esdm-tetapkan-hba-periode-pertama-agustus-2026-usd-12444-per-ton-turun-562-persen",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "icp-juli-turun-ke-us-81-68-per-barel-pasokan-global-pulih",
  "category": "Energi",
  "title": "ICP Juli [Turun] ke US$81,68 per Barel, Pasokan Global Pulih",
  "deck": "Pemerintah menetapkan ICP Juli 2026 di US$81,68 per barel, turun US$1,77 dari bulan sebelumnya, seiring redanya tensi Timur Tengah dan pulihnya pasokan minyak dunia.",
  "date": "13 Agustus 2026",
  "image": "assets/img/icp-juli-turun-ke-us-81-68-per-barel-pasokan-global-pulih.jpg",
  "imageV": "msrglgj4",
  "tags": [
   "ICP",
   "harga minyak",
   "ESDM",
   "Selat Hormuz"
  ],
  "kreditFoto": "Kementerian Energi dan Sumber Daya Mineral",
  "sourceUrl": "https://www.esdm.go.id/id/media-center/arsip-berita/pasokan-global-pulih-icp-juli-2026-turun-jadi-us-8168-per-barel",
  "sourceLabel": "Kementerian Energi dan Sumber Daya Mineral"
 },
 {
  "slug": "wifi-lepas-seluruh-saham-di-anak-usaha-jdu",
  "category": "Aksi Korporasi",
  "title": "WIFI [Lepas] Seluruh Saham di Anak Usaha JDU",
  "deck": "WIFI melepas seluruh 350 saham miliknya di anak usaha PT Jejaring Digital Utama kepada PT Investasi Berjaya Sejahtera, tanpa nilai transaksi yang diumumkan.",
  "date": "13 Agustus 2026",
  "image": "assets/img/wifi-lepas-seluruh-saham-di-anak-usaha-jdu.jpg",
  "imageV": "msslyfax",
  "tags": [
   "WIFI",
   "divestasi",
   "anak usaha",
   "JDU"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f10c94e5d0_ebb8230cbc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pnm-mekaar-tawarkan-bunga-8-persen-bagi-usaha-ultra-mikro",
  "category": "UMKM",
  "title": "PNM Mekaar Tawarkan Bunga [8 Persen] bagi Usaha Ultra Mikro",
  "deck": "PNM menetapkan bunga pembiayaan 8 persen untuk program Mekaar, memperluas akses kredit terjangkau bagi pelaku usaha ultra mikro, terutama perempuan pengusaha akar rumput.",
  "date": "13 Agustus 2026",
  "image": "assets/img/pnm-mekaar-tawarkan-bunga-8-persen-bagi-usaha-ultra-mikro.jpg",
  "imageV": "msrglhev",
  "tags": [
   "PNM",
   "Mekaar",
   "UMKM",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459691-mendorong-ekonomi-akar-rumput-bunga-pnm-mekaar-delapan-persen"
 },
 {
  "slug": "wege-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "WEGE Jawab Permintaan BEI soal [Volatilitas] Transaksi Saham",
  "deck": "BEI meminta penjelasan atas volatilitas transaksi saham WEGE, dan perseroan menyatakan tidak ada informasi atau fakta material yang melatarbelakanginya.",
  "date": "13 Agustus 2026",
  "image": "assets/img/wege-jawab-permintaan-bei-soal-volatilitas-transaksi-saham.jpg",
  "imageV": "msu5vnhl",
  "tags": [
   "WEGE",
   "volatilitas saham",
   "Bursa Efek Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/3864aa8aa5_3f8483ad42.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "turis-asing-ke-ri-juni-2026-naik-tipis-jadi-1-39-juta",
  "category": "Bisnis",
  "title": "Turis Asing ke RI Juni 2026 Naik Tipis Jadi [1,39 Juta]",
  "deck": "Kunjungan wisatawan mancanegara Juni 2026 naik tipis dibanding Mei, tapi masih lebih rendah dibanding Juni tahun lalu.",
  "date": "13 Agustus 2026",
  "image": "assets/img/turis-asing-ke-ri-juni-2026-naik-tipis-jadi-1-39-juta.jpg",
  "imageV": "msrda4kz",
  "tags": [
   "bps",
   "wisatawan asing",
   "pariwisata",
   "ekonomi"
  ],
  "sourceUrl": "https://www.bps.go.id/id/statistics-table",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ptsn-teken-kredit-baru-usd25-juta-dari-bank-mandiri",
  "category": "Aksi Korporasi",
  "title": "PTSN Teken Kredit Baru [USD25 Juta] dari Bank Mandiri",
  "deck": "Sat Nusapersada mengantongi kredit investasi dan tambahan limit modal kerja senilai total USD 25 juta dari Bank Mandiri untuk mendanai proyek baru.",
  "date": "13 Agustus 2026",
  "image": "assets/img/ptsn-teken-kredit-baru-usd25-juta-dari-bank-mandiri.jpg",
  "imageV": "msu5waoh",
  "tags": [
   "PTSN",
   "Sat Nusapersada",
   "Bank Mandiri",
   "kredit"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/1341f7a9e6_56426e6782.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "adhi-akui-ada-risiko-telat-bayar-bunga-obligasi-rp182-m",
  "category": "Aksi Korporasi",
  "title": "ADHI Akui Ada [Risiko] Telat Bayar Bunga Obligasi Rp182 M",
  "deck": "Adhi Karya mengaku ada risiko gagal membayar bunga obligasi setelah RUPO menolak proposal restrukturisasi, dan menyiapkan RUPO lanjutan pada 11 September 2026.",
  "date": "13 Agustus 2026",
  "image": "assets/img/adhi-akui-ada-risiko-telat-bayar-bunga-obligasi-rp182-m.jpg",
  "imageV": "msu5x23s",
  "tags": [
   "ADHI",
   "obligasi korporasi",
   "RUPO",
   "risiko gagal bayar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/4eae049f88_40cd77f61c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kspsi-akan-umumkan-parpol-yang-serius-bahas-ruu-ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "title": "KSPSI Akan Umumkan Parpol yang [Serius] Bahas RUU Ketenagakerjaan",
  "deck": "Koalisi serikat buruh akan membeberkan partai yang serius maupun mangkir membahas RUU Ketenagakerjaan, menjelang tenggat MK pada 31 Oktober 2026.",
  "date": "13 Agustus 2026",
  "image": "assets/img/kspsi-akan-umumkan-parpol-yang-serius-bahas-ruu-ketenagakerjaan.jpg",
  "imageV": "msrdp3hy",
  "tags": [
   "RUU Ketenagakerjaan",
   "KSPSI",
   "DPR",
   "Apindo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459666-buruh-bakal-umumkan-parpol-yang-serius-dan-tidak-serius-bahas-ruu-ketenagakerjaan"
 },
 {
  "slug": "suli-beri-penjelasan-usai-saham-melonjak-27-78-persen",
  "category": "Aksi Korporasi",
  "title": "SULI Beri Penjelasan usai Saham [Melonjak] 27,78 Persen",
  "deck": "SLJ Global (SULI) menyebut lonjakan harga dan volume sahamnya ke BEI tidak dipicu informasi material, sementara rencana konversi utang menjadi saham masih tertunda menunggu pembahasan dengan OJK.",
  "date": "13 Agustus 2026",
  "image": "assets/img/suli-beri-penjelasan-usai-saham-melonjak-27-78-persen.jpg",
  "imageV": "msu5xhyt",
  "tags": [
   "SULI",
   "BEI",
   "volatilitas saham",
   "PMTHMETD"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0d2831377e_a35a21a534.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ypas-klarifikasi-volatilitas-transaksi-saham-ke-bei",
  "category": "Aksi Korporasi",
  "title": "YPAS Klarifikasi [Volatilitas] Transaksi Saham ke BEI",
  "deck": "Menjawab permintaan BEI, manajemen Yanaprima Hastapersada menyatakan tidak ada informasi material maupun rencana korporasi di balik pergerakan harga sahamnya.",
  "date": "13 Agustus 2026",
  "image": "assets/img/ypas-klarifikasi-volatilitas-transaksi-saham-ke-bei.jpg",
  "imageV": "msu5xum3",
  "tags": [
   "YPAS",
   "Yanaprima Hastapersada",
   "volatilitas saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/636aaa8c36_05d15e622b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wapo-jawab-permintaan-bursa-soal-volatilitas-saham",
  "category": "Aksi Korporasi",
  "title": "WAPO Jawab Permintaan Bursa soal [Volatilitas] Saham",
  "deck": "WAPO menjawab surat Bursa Efek Indonesia soal volatilitas sahamnya, dan menyatakan tidak mengetahui ada informasi atau rencana aksi korporasi material di baliknya.",
  "date": "13 Agustus 2026",
  "image": "assets/img/wapo-jawab-permintaan-bursa-soal-volatilitas-saham.jpg",
  "imageV": "msu5ygg5",
  "tags": [
   "WAPO",
   "Bursa Efek Indonesia",
   "volatilitas saham",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6e39b321a7_0ab7ccc046.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kur-bri-tembus-rp103-81-triliun-hingga-juni-2026",
  "category": "UMKM",
  "title": "KUR BRI Tembus [Rp103,81 Triliun] hingga Juni 2026",
  "deck": "Penyaluran KUR BRI capai Rp103,81 triliun ke 2 juta debitur hingga akhir Juni 2026, didominasi sektor pertanian dan perdagangan.",
  "date": "13 Agustus 2026",
  "image": "assets/img/kur-bri-tembus-rp103-81-triliun-hingga-juni-2026.jpg",
  "imageV": "msrdp4xm",
  "tags": [
   "KUR",
   "BRI",
   "UMKM",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459639-dukung-agenda-pemberdayaan-ekonomi-danantara-penyaluran-kur-bri-hingga-akhir-juni-2026-capai-rp10381-triliun"
 },
 {
  "slug": "lopi-teken-kerja-sama-eksplorasi-sarana-kereta-dengan-crrc-qiqihar",
  "category": "Aksi Korporasi",
  "title": "LOPI Teken Kerja Sama [Eksplorasi] Sarana Kereta dengan CRRC Qiqihar",
  "deck": "LOPI menandatangani nota kerja sama eksplorasi dengan produsen kereta api asal China, CRRC Qiqihar, untuk pengembangan sarana perkeretaapian di Indonesia, termasuk potensi kerja sama dengan KAI.",
  "date": "13 Agustus 2026",
  "image": "assets/img/lopi-teken-kerja-sama-eksplorasi-sarana-kereta-dengan-crrc-qiqihar.jpg",
  "imageV": "msu5yt4m",
  "tags": [
   "LOPI",
   "CRRC Qiqihar",
   "perkeretaapian",
   "kerja sama"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/99ac98fee0_0d2be2b5ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sinar-mas-land-gandeng-sojitz-garap-klaster-baru-di-deltamas",
  "category": "Bisnis",
  "title": "Sinar Mas Land Gandeng Sojitz Garap Klaster Baru di [Deltamas]",
  "deck": "Sinar Mas Land dan Sojitz Corporation meluncurkan klaster hunian Meliora di Kota Deltamas, Cikarang, dengan 68 unit tahap pertama mulai Rp800 jutaan.",
  "date": "13 Agustus 2026",
  "image": "assets/img/sinar-mas-land-gandeng-sojitz-garap-klaster-baru-di-deltamas.jpg",
  "imageV": "tjp3pv",
  "tags": [
   "deltamas",
   "sinar mas land",
   "sojitz",
   "properti"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459601-sinar-mas-land-dan-sojitz-hadirkan-meliora-klaster-hunian-modern-terbaru-di-kota-deltamas"
 },
 {
  "slug": "kemendag-buka-pojok-umkm-di-kantor-gandeng-indomaret",
  "category": "UMKM",
  "title": "Kemendag [Buka] Pojok UMKM di Kantor, Gandeng Indomaret",
  "deck": "Kemendag meresmikan pojok promosi produk UMKM pangan lokal di kantornya sendiri, bekerja sama dengan Indomaret dan Point Coffee untuk memperluas jalur distribusi ke ritel modern.",
  "date": "13 Agustus 2026",
  "image": "assets/img/kemendag-buka-pojok-umkm-di-kantor-gandeng-indomaret.jpg",
  "imageV": "tjp3qd",
  "tags": [
   "UMKM",
   "Kemendag",
   "Indomaret",
   "PPPB"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/gandeng-ritel-modern-untuk-perluas-akses-pasar-umkm-mendag-busan-resmikan-pojok-product-placement-pilihan-busan",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "20-bank-syariah-temui-51-korporasi-bahas-pembiayaan-ekspansi",
  "category": "Perbankan",
  "title": "20 Bank Syariah Temui 51 Korporasi Bahas [Pembiayaan] Ekspansi",
  "deck": "Bank Indonesia mempertemukan 20 bank syariah dengan 51 korporasi untuk menjajaki pembiayaan ekspansi usaha, seiring pembiayaan syariah tumbuh 11,43 persen pada Juni 2026.",
  "date": "13 Agustus 2026",
  "image": "assets/img/20-bank-syariah-temui-51-korporasi-bahas-pembiayaan-ekspansi.jpg",
  "imageV": "mssk87i5",
  "tags": [
   "pembiayaan syariah",
   "Bank Indonesia",
   "korporasi",
   "sukuk"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815626.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "harga-emas-antam-naik-jadi-rp2-700-000-per-gram",
  "category": "Makroekonomi",
  "title": "Harga Emas Antam [Naik] Jadi Rp2.700.000 per Gram",
  "deck": "Harga emas Antam per 13 Agustus 2026 naik Rp20.000 menjadi Rp2.700.000 per gram, harga buyback ikut naik ke Rp2.546.000.",
  "date": "13 Agustus 2026",
  "image": "assets/img/harga-emas-antam-naik-jadi-rp2-700-000-per-gram.jpg",
  "imageV": "tjp3qe",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459576-harga-emas-antam-hari-ini-13-agustus-2026-rp2700000-per-gram"
 },
 {
  "slug": "pbb-p2-2026-diskon-5-jika-bayar-sebelum-30-september",
  "category": "Makroekonomi",
  "title": "PBB-P2 2026 [Diskon] 5% Jika Bayar Sebelum 30 September",
  "deck": "Pemprov DKI Jakarta memberi potongan otomatis 5 persen untuk PBB-P2 tahun 2026 yang dibayar sebelum jatuh tempo 30 September.",
  "date": "13 Agustus 2026",
  "image": "assets/img/pbb-p2-2026-diskon-5-jika-bayar-sebelum-30-september.jpg",
  "imageV": "tjp3qf",
  "tags": [
   "PBB-P2",
   "Pajak Daerah",
   "DKI Jakarta",
   "Bapenda"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459518-bayar-sebelum-30-september-pbb-p2-tahun-2026-otomatis-dipotong-5"
 },
 {
  "slug": "rupiah-melemah-ke-rp17-885-ritel-juni-masih-tertekan",
  "category": "Moneter",
  "title": "Rupiah [Melemah] ke Rp17.885, Ritel Juni Masih Tertekan",
  "deck": "Rupiah melemah ke Rp17.885 per dolar AS usai sentimen laporan MSCI, sementara penjualan ritel Juni masih turun meski mulai melandai.",
  "date": "13 Agustus 2026",
  "image": "assets/img/rupiah-melemah-ke-rp17-885-ritel-juni-masih-tertekan.jpg",
  "imageV": "tjp3qg",
  "tags": [
   "rupiah",
   "kurs dolar",
   "penjualan ritel",
   "utang pemerintah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459567-rupiah-melemah-ke-rp17885-per-dolar-as-usai-laporan-msci-dan-penjualan-ritel-yang-melambat-pada-juni-2026"
 },
 {
  "slug": "purbaya-pembelian-pertalite-dibatasi-bertahap-harga-tetap",
  "category": "Energi",
  "title": "Purbaya: Pembelian [Pertalite] Dibatasi Bertahap, Harga Tetap",
  "deck": "Menkeu Purbaya pastikan harga Pertalite tak naik, tapi kelompok desil 9-10 akan diarahkan beli BBM non-subsidi secara bertahap.",
  "date": "13 Agustus 2026",
  "image": "assets/img/purbaya-pembelian-pertalite-dibatasi-bertahap-harga-tetap.jpg",
  "imageV": "tjp3qh",
  "tags": [
   "Pertalite",
   "Subsidi BBM",
   "Purbaya Yudhi Sadewa",
   "Kementerian ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459559-purbaya-buka-suara-soal-rencana-pembatasan-pembelian-pertalite"
 },
 {
  "slug": "msci-keluarkan-cpin-dan-goto-dari-indeks-utama",
  "category": "Pasar Modal",
  "title": "MSCI [Keluarkan] CPIN dan GOTO dari Indeks Utama",
  "deck": "MSCI mengeluarkan CPIN dan GOTO dari indeks saham utama Indonesia tanpa saham pengganti, efektif mulai 1 September 2026.",
  "date": "13 Agustus 2026",
  "image": "assets/img/msci-keluarkan-cpin-dan-goto-dari-indeks-utama.jpg",
  "imageV": "tjop7x",
  "tags": [
   "MSCI",
   "CPIN",
   "GOTO",
   "Rebalancing Indeks"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459537-rincian-lengkap-saham-yang-masuk-dan-keluar-rebalancing-msci"
 },
 {
  "slug": "purbaya-ajak-kemenhub-benahi-tarif-timpang-peti-kemas",
  "category": "Bisnis",
  "title": "Purbaya Ajak Kemenhub Benahi Tarif [Timpang] Peti Kemas",
  "deck": "Purbaya akan menggandeng Kemenhub membahas selisih tarif jasa LoLo di depo peti kemas kosong, yang di luar pelabuhan lebih mahal Rp300.000-Rp400.000 per kontainer.",
  "date": "13 Agustus 2026",
  "image": "assets/img/purbaya-ajak-kemenhub-benahi-tarif-timpang-peti-kemas.jpg",
  "imageV": "tjop7y",
  "tags": [
   "tarif LoLo",
   "depo peti kemas",
   "biaya logistik",
   "Kemenhub"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459519-purbaya-soroti-tarif-lolo-jomplang-kemenhub-bakal-diajak-bereskan-biaya-depo-peti-kemas"
 },
 {
  "slug": "umkm-binaan-pertamina-raih-omzet-rp8-57-miliar",
  "category": "UMKM",
  "title": "UMKM Binaan Pertamina Raih Omzet [Rp8,57 Miliar]",
  "deck": "UMKM binaan Pertamina mencatatkan omzet Rp8,57 miliar sepanjang semester I 2026 lewat ratusan pameran, sertifikasi, dan pelatihan usaha.",
  "date": "12 Agustus 2026",
  "image": "assets/img/umkm-binaan-pertamina-raih-omzet-rp8-57-miliar.jpg",
  "imageV": "tjop7z",
  "tags": [
   "umkm",
   "pertamina",
   "pameran",
   "sertifikasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459517-umkm-binaan-pertamina-raih-omzet-rp857-miliar-sepanjang-semester-i-2026-berkat-perluasan-akses-pasar"
 },
 {
  "slug": "purbaya-temukan-banyak-masalah-keuangan-mbg-di-daerah",
  "category": "Makroekonomi",
  "title": "Purbaya Temukan [Banyak] Masalah Keuangan MBG di Daerah",
  "deck": "Menkeu Purbaya menemukan banyak kekurangan pertanggungjawaban keuangan program MBG di daerah dan akan melaporkannya ke BGN untuk ditindaklanjuti.",
  "date": "12 Agustus 2026",
  "image": "assets/img/purbaya-temukan-banyak-masalah-keuangan-mbg-di-daerah.jpg",
  "imageV": "tjop80",
  "tags": [
   "MBG",
   "BGN",
   "Purbaya Yudhi Sadewa",
   "Kementerian Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459490-purbaya-temukan-banyak-masalah-dalam-keuangan-mbg-di-daerah-bgn-diminta-segera-benahi"
 },
 {
  "slug": "pajak-e-commerce-berpeluang-tertunda-lagi-hingga-oktober",
  "category": "Makroekonomi",
  "title": "Pajak E-Commerce Berpeluang [Tertunda] Lagi hingga Oktober",
  "deck": "Purbaya sebut penerapan pajak marketplace yang sedianya mulai 1 Agustus 2026 masih bisa mundur lagi hingga Oktober, menunggu kondisi daya beli masyarakat membaik.",
  "date": "12 Agustus 2026",
  "image": "assets/img/pajak-e-commerce-berpeluang-tertunda-lagi-hingga-oktober.jpg",
  "imageV": "tjop80",
  "tags": [
   "pajak e-commerce",
   "PPh 22",
   "Purbaya Yudhi Sadewa",
   "daya beli"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459488-pajak-e-commerce-belum-pasti-jalan-november-purbaya-soroti-kondisi-ekonomi-dan-daya-beli"
 },
 {
  "slug": "bright-gas-diskon-hingga-rp8-100-sambut-kemerdekaan",
  "category": "Energi",
  "title": "Bright Gas [Diskon] hingga Rp8.100 Sambut Kemerdekaan",
  "deck": "Pertamina Patra Niaga potong harga isi ulang Bright Gas 5,5 kg dan 12 kg hingga Rp8.100 per tabung, berlaku 15-23 Agustus 2026.",
  "date": "12 Agustus 2026",
  "image": "assets/img/bright-gas-diskon-hingga-rp8-100-sambut-kemerdekaan.jpg",
  "imageV": "tjop81",
  "tags": [
   "Bright Gas",
   "Pertamina Patra Niaga",
   "LPG",
   "promo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459500-sambut-hari-kemerdekaan-bright-gas-diskon-hingga-rp8100-per-tabung-hingga-akhir-agustus"
 },
 {
  "slug": "inflasi-as-melandai-peluang-kenaikan-bunga-fed-menipis",
  "category": "Global",
  "title": "Inflasi AS [Melandai], Peluang Kenaikan Bunga Fed Menipis",
  "deck": "CPI AS Juli naik tipis 0,1 persen sesuai perkiraan, membuat pasar memangkas peluang kenaikan suku bunga The Fed pada September.",
  "date": "12 Agustus 2026",
  "image": "assets/img/inflasi-as-melandai-peluang-kenaikan-bunga-fed-menipis.jpg",
  "imageV": "tjop82",
  "tags": [
   "CPI AS",
   "The Fed",
   "inflasi",
   "suku bunga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459484-cpi-as-juli-melandai-peluang-kenaikan-suku-bunga-the-fed-september-makin-tertekan"
 },
 {
  "slug": "kenapa-desil-9-10-jadi-penentu-beli-pertalite",
  "category": "Energi",
  "title": "Kenapa [Desil] 9-10 Jadi Penentu Beli Pertalite?",
  "deck": "Pemerintah mengkaji pembatasan pembelian Pertalite bagi rumah tangga desil 9-10, kelompok kesejahteraan tertinggi dalam data pemerintah.",
  "date": "12 Agustus 2026",
  "image": "assets/img/kenapa-desil-9-10-jadi-penentu-beli-pertalite.jpg",
  "imageV": "tjop82",
  "tags": [
   "desil",
   "Pertalite",
   "subsidi BBM",
   "ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459483-desil-1-10-jadi-penentu-beli-pertalite-ini-arti-perbedaan-dan-cara-ceknya"
 },
 {
  "slug": "pertalite-bakal-dibatasi-untuk-desil-9-10",
  "category": "Energi",
  "title": "Pertalite Bakal [Dibatasi] untuk Desil 9-10",
  "deck": "Pemerintah menyiapkan aturan agar rumah tangga dengan pengeluaran tertinggi tak lagi bisa membeli Pertalite dan diarahkan ke Pertamax mulai akhir 2026.",
  "date": "12 Agustus 2026",
  "image": "assets/img/pertalite-bakal-dibatasi-untuk-desil-9-10.jpg",
  "imageV": "tjop83",
  "tags": [
   "pertalite",
   "subsidi bbm",
   "desil",
   "pertamax"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459480-desil-9-10-bakal-tak-bisa-beli-pertalite-ini-batas-pengeluaran-dan-aturan-barunya"
 },
 {
  "slug": "ptro-kantongi-kontrak-tambang-batu-bara-rp9-3-triliun",
  "category": "Energi",
  "title": "PTRO Kantongi [Kontrak] Tambang Batu Bara Rp9,3 Triliun",
  "deck": "Petrosea meraih dua kontrak jasa tambang batu bara senilai Rp9,3 triliun dari anak usaha SINI di Kalimantan Tengah, berlaku sepanjang usia tambang.",
  "date": "12 Agustus 2026",
  "image": "assets/img/ptro-kantongi-kontrak-tambang-batu-bara-rp9-3-triliun.jpg",
  "imageV": "tjop84",
  "tags": [
   "PTRO",
   "Petrosea",
   "SINI",
   "batu bara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459478-ptro-kantongi-kontrak-tambang-rp93-triliun-garap-proyek-batu-bara-milik-anak-usaha-sini"
 },
 {
  "slug": "purbaya-pajak-kontrakan-bukan-aturan-baru",
  "category": "Makroekonomi",
  "title": "Purbaya: Pajak Kontrakan [Bukan] Aturan Baru",
  "deck": "Purbaya menegaskan tidak ada pajak khusus untuk kontrakan pada 2027, aturan pajak yang berlaku tetap sama seperti biasa.",
  "date": "12 Agustus 2026",
  "image": "assets/img/purbaya-pajak-kontrakan-bukan-aturan-baru.jpg",
  "imageV": "tjop85",
  "tags": [
   "pajak",
   "purbaya yudhi sadewa",
   "rumah kontrakan",
   "DJP"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459457-purbaya-luruskan-isu-rumah-kontrakan-akan-kena-pajak-tahun-depan-kalau-ada-income-itu-kan-biasa"
 },
 {
  "slug": "pbsa-rencanakan-pemecahan-saham-rupslb-18-september",
  "category": "Aksi Korporasi",
  "title": "PBSA Rencanakan [Pemecahan Saham], RUPSLB 18 September",
  "deck": "PBSA mengajukan rencana pemecahan saham, akan dimintakan persetujuan RUPSLB pada 18 September 2026 untuk menurunkan harga saham dan mendorong likuiditas perdagangan.",
  "date": "12 Agustus 2026",
  "image": "assets/img/pbsa-rencanakan-pemecahan-saham-rupslb-18-september.jpg",
  "imageV": "mss8ez98",
  "tags": [
   "PBSA",
   "pemecahan saham",
   "RUPSLB",
   "konstruksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/acdcb254db_ef798ffdf6.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-untung-danantara-bakal-masuk-apbn-tahun-ini",
  "category": "Makroekonomi",
  "title": "Purbaya: Untung [Danantara] Bakal Masuk APBN Tahun Ini",
  "deck": "Menkeu Purbaya menyebut sebagian keuntungan Danantara akan disetor ke APBN tahun ini atas arahan Presiden Prabowo, meski mekanismenya belum final.",
  "date": "12 Agustus 2026",
  "image": "assets/img/purbaya-untung-danantara-bakal-masuk-apbn-tahun-ini.jpg",
  "imageV": "tjop86",
  "tags": [
   "danantara",
   "apbn",
   "purbaya yudhi sadewa",
   "fiskal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459447-purbaya-beberkan-soal-rencana-keuntungan-danantara-masuk-ke-apbn-bantah-kondisi-fiskal-tertekan"
 },
 {
  "slug": "ihsg-melejit-1-69-persen-jelang-keputusan-msci",
  "category": "Pasar Modal",
  "title": "IHSG [Melejit] 1,69 Persen Jelang Keputusan MSCI",
  "deck": "IHSG ditutup naik 1,69 persen ke 6.373,849 jelang pengumuman hasil peninjauan indeks MSCI Agustus 2026, dengan saham infrastruktur dan energi memimpin penguatan.",
  "date": "12 Agustus 2026",
  "image": "assets/img/ihsg-melejit-1-69-persen-jelang-keputusan-msci.jpg",
  "imageV": "tjop87",
  "tags": [
   "IHSG",
   "MSCI",
   "Bursa Efek Indonesia",
   "Saham Infrastruktur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459443-ihsg-melejit-169-persen-jelang-pengumuman-msci-saham-infrastruktur-paling-cuan"
 },
 {
  "slug": "csis-direksi-tambah-saham-467-800-lembar",
  "category": "Aksi Korporasi",
  "title": "CSIS: Direksi [Tambah] Saham 467.800 Lembar",
  "deck": "Direksi CSIS Tjoea Aubintoro menambah 467.800 saham lewat tiga transaksi pada 12 Agustus 2026, hak suaranya naik dari 0,44% jadi 0,46%.",
  "date": "12 Agustus 2026",
  "image": "assets/img/csis-direksi-tambah-saham-467-800-lembar.jpg",
  "imageV": "mss8fge4",
  "tags": [
   "CSIS",
   "kepemilikan saham",
   "direksi",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-0386-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-perkenalkan-aicosystem-di-dti-cx-2026",
  "category": "Teknologi",
  "title": "Telkom Perkenalkan [AIcosystem] di DTI-CX 2026",
  "deck": "Telkom menampilkan ekosistem AI AIcosystem, termasuk platform OCA untuk mengelola interaksi pelanggan lintas kanal, dalam pameran DTI-CX 2026 di Jakarta.",
  "date": "12 Agustus 2026",
  "image": "assets/img/telkom-perkenalkan-aicosystem-di-dti-cx-2026.jpg",
  "imageV": "tjnrqm",
  "tags": [
   "Telkom",
   "AIcosystem",
   "DTI-CX 2026",
   "OCA"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459419-telkom-hadirkan-inovasi-oca-berbasis-ai-di-dti-cx-2026"
 },
 {
  "slug": "lrt-kelapa-gading-manggarai-beroperasi-26-agustus",
  "category": "Bisnis",
  "title": "LRT Kelapa Gading-Manggarai [Beroperasi] 26 Agustus",
  "deck": "Jakpro dan DJKA intensifkan uji sistem menjelang pengoperasian awal LRT Jakarta rute Kelapa Gading-Manggarai pada 26 Agustus 2026.",
  "date": "12 Agustus 2026",
  "image": "assets/img/lrt-kelapa-gading-manggarai-beroperasi-26-agustus.jpg",
  "imageV": "tjnrqm",
  "tags": [
   "LRT Jakarta",
   "Jakpro",
   "DJKA",
   "Transportasi Publik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459411-lrt-kelapa-gading-manggarai-dijadwalkan-beroperasi-26-agustus-jakpro-dan-djka-berkomunikasi-intensif"
 },
 {
  "slug": "bos-bei-demutualisasi-tak-ganggu-independensi-bursa",
  "category": "Pasar Modal",
  "title": "Bos BEI: [Demutualisasi] Tak Ganggu Independensi Bursa",
  "deck": "Dirut BEI Jeffrey Hendrik memastikan proses demutualisasi tak mengganggu independensi pasar modal, sementara Danantara masih membahas porsi kepemilikan sahamnya bersama OJK.",
  "date": "12 Agustus 2026",
  "image": "assets/img/bos-bei-demutualisasi-tak-ganggu-independensi-bursa.jpg",
  "imageV": "tjnrqn",
  "tags": [
   "demutualisasi BEI",
   "Danantara",
   "UU P2SK",
   "OJK"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459403-bos-bei-tegaskan-demutualisasi-tak-akan-pengaruhi-independensi-pasar-modal-ri"
 },
 {
  "slug": "shopeepay-gelar-promo-rp17-sambut-hut-ri-ke-81",
  "category": "Bisnis",
  "title": "ShopeePay Gelar Promo [Rp17] Sambut HUT RI ke-81",
  "deck": "ShopeePay menghadirkan Promo Merdeka seharga Rp17 untuk berbagai kebutuhan sehari-hari, berlaku 1-17 Agustus 2026 menjelang HUT ke-81 RI.",
  "date": "12 Agustus 2026",
  "image": "assets/img/shopeepay-gelar-promo-rp17-sambut-hut-ri-ke-81.jpg",
  "imageV": "tjnrqo",
  "tags": [
   "shopeepay",
   "promo merdeka",
   "dompet digital",
   "hut ri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459398-sambut-hut-ke-81-ri-aplikasi-shopeepay-hadirkan-promo-merdeka-rp17-untuk-berbagai-kebutuhan-sehari-hari"
 },
 {
  "slug": "dpr-ingatkan-menag-soal-wakaf-istiqlal-ke-pasar-modal",
  "category": "Pasar Modal",
  "title": "DPR Ingatkan Menag soal Wakaf Istiqlal ke [Pasar Modal]",
  "deck": "DPR minta Kementerian Agama berhati-hati soal rencana dana wakaf Masjid Istiqlal masuk instrumen pasar modal syariah lewat kolaborasi dengan manajer investasi.",
  "date": "12 Agustus 2026",
  "image": "assets/img/dpr-ingatkan-menag-soal-wakaf-istiqlal-ke-pasar-modal.jpg",
  "imageV": "tjnrqp",
  "tags": [
   "dana wakaf",
   "pasar modal syariah",
   "Masjid Istiqlal",
   "BEI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459394-dpr-ingatkan-menag-hati-hati-soal-dana-wakaf-masjid-istiqlal-masuk-pasar-modal"
 },
 {
  "slug": "supa-direksi-kantongi-10-juta-saham-program-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "SUPA: Direksi Kantongi [10 Juta] Saham Program Kepemilikan",
  "deck": "Direktur Superbank Marsahala Siahaan tercatat memperoleh 10 juta saham lewat program kepemilikan saham dari prospektus IPO, hak suaranya naik dari 0% menjadi 0,03%.",
  "date": "12 Agustus 2026",
  "image": "assets/img/supa-direksi-kantongi-10-juta-saham-program-kepemilikan.jpg",
  "imageV": "mss8ftta",
  "tags": [
   "SUPA",
   "Super Bank Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-5260-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supa-direksi-terima-7-juta-saham-dari-program-insentif-ipo",
  "category": "Aksi Korporasi",
  "title": "SUPA: Direksi Terima [7 Juta] Saham dari Program Insentif IPO",
  "deck": "Direksi Superbank asal India menambah kepemilikan dari nol menjadi 7 juta saham lewat program insentif yang tercantum dalam prospektus IPO, mengubah hak suaranya menjadi 0,02 persen.",
  "date": "12 Agustus 2026",
  "image": "assets/img/supa-direksi-terima-7-juta-saham-dari-program-insentif-ipo.jpg",
  "imageV": "mss8gcd2",
  "tags": [
   "SUPA",
   "Super Bank Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-6539-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supa-direksi-sukiwan-kantongi-7-juta-saham-program-insentif",
  "category": "Aksi Korporasi",
  "title": "[SUPA] Direksi Sukiwan Kantongi 7 Juta Saham Program Insentif",
  "deck": "Direksi Superbank Sukiwan menerima 7 juta saham lewat program kepemilikan saham dari prospektus IPO, harga nominal Rp1 per saham.",
  "date": "12 Agustus 2026",
  "image": "assets/img/supa-direksi-sukiwan-kantongi-7-juta-saham-program-insentif.jpg",
  "imageV": "mss8gq3t",
  "tags": [
   "SUPA",
   "Super Bank Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-2431-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supa-direksi-amalia-terima-7-juta-saham-program-insentif",
  "category": "Aksi Korporasi",
  "title": "SUPA: Direksi Amalia Terima 7 Juta Saham [Program Insentif]",
  "deck": "Direksi Superbank Amalia Pratantara menerima 7 juta saham lewat program kepemilikan saham sesuai prospektus IPO, hak suaranya naik tipis ke 0,02 persen.",
  "date": "12 Agustus 2026",
  "image": "assets/img/supa-direksi-amalia-terima-7-juta-saham-program-insentif.jpg",
  "imageV": "mss8hcro",
  "tags": [
   "SUPA",
   "Super Bank Indonesia",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-1773-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "supa-direksi-peroleh-7-juta-saham-dari-program-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "SUPA: Direksi Peroleh 7 Juta Saham dari Program [Kepemilikan]",
  "deck": "Direksi Superbank, Melisa Hendrawati, kini memiliki 7 juta saham SUPA lewat program kepemilikan saham yang dijanjikan sejak prospektus IPO.",
  "date": "12 Agustus 2026",
  "image": "assets/img/supa-direksi-peroleh-7-juta-saham-dari-program-kepemilikan.jpg",
  "imageV": "mss8hxi4",
  "tags": [
   "SUPA",
   "Superbank",
   "direksi",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-3645-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ayls-pindah-alamat-kantor-ke-kuningan-jakarta-selatan",
  "category": "Aksi Korporasi",
  "title": "AYLS [Pindah] Alamat Kantor ke Kuningan, Jakarta Selatan",
  "deck": "AYLS memindahkan kantor pusat dari Menteng ke Menara Global, Kuningan, sekaligus memperbarui logo, e-mail, dan situs web perusahaan efektif 23 Juli 2026.",
  "date": "12 Agustus 2026",
  "image": "assets/img/ayls-pindah-alamat-kantor-ke-kuningan-jakarta-selatan.jpg",
  "imageV": "mss8iael",
  "tags": [
   "AYLS",
   "Arkayana Lestari Grup",
   "perubahan alamat",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d3d091f319_d2de9b5ed2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "destry-damayanti-calon-tunggal-gubernur-bi-dpr-segera-bahas",
  "category": "Moneter",
  "title": "Destry Damayanti Calon [Tunggal] Gubernur BI, DPR Segera Bahas",
  "deck": "Presiden Prabowo mengajukan nama tunggal Destry Damayanti ke DPR untuk memimpin Bank Indonesia, menggantikan Perry Warjiyo yang mundur akhir Juli lalu.",
  "date": "12 Agustus 2026",
  "image": "assets/img/destry-damayanti-calon-tunggal-gubernur-bi-dpr-segera-bahas.jpg",
  "imageV": "tjnrr8",
  "tags": [
   "Destry Damayanti",
   "Bank Indonesia",
   "Gubernur BI",
   "Presiden Prabowo Subianto"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459369-prabowo-pilih-destry-damayanti-jadi-calon-tunggal-gubernur-bi-istana-ungkap-alasannya"
 },
 {
  "slug": "ekad-pengendali-jajaki-lepas-51-saham-ke-fujian-youyi-china",
  "category": "Aksi Korporasi",
  "title": "EKAD: Pengendali jajaki lepas [51%] saham ke Fujian Youyi China",
  "deck": "PT Ekadharma Inti Perkasa, pemegang saham mayoritas EKAD, teken nota kesepahaman awal untuk menjual 51 persen saham EKAD ke produsen pita perekat asal China, Fujian Youyi.",
  "date": "12 Agustus 2026",
  "image": "assets/img/ekad-pengendali-jajaki-lepas-51-saham-ke-fujian-youyi-china.jpg",
  "imageV": "mssayns7",
  "tags": [
   "EKAD",
   "akuisisi saham",
   "pemegang saham mayoritas",
   "Fujian Youyi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/063d5e0629_86cabb7b02.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pengusaha-ri-teken-ekspor-cokelat-bubuk-ke-arab-saudi",
  "category": "Bisnis",
  "title": "Pengusaha RI Teken Ekspor [Cokelat] Bubuk ke Arab Saudi",
  "deck": "PT Visi Indonesia Parama dan importir Arab Saudi menandatangani kesepakatan ekspor cokelat bubuk dan karbon aktif senilai Rp3,5 miliar.",
  "date": "12 Agustus 2026",
  "image": "assets/img/pengusaha-ri-teken-ekspor-cokelat-bubuk-ke-arab-saudi.jpg",
  "imageV": "mssbd0qw",
  "tags": [
   "ekspor",
   "Arab Saudi",
   "ITPC Jeddah",
   "perdagangan"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/hasil-fasilitasi-itpc-jeddah-produk-cokelat-bubuk-dan-karbon-aktif-indonesia-siap-jajaki-pasar-timur-tengah",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "mglv-ubah-alamat-dan-email-corporate-secretary",
  "category": "Aksi Korporasi",
  "title": "MGLV Ubah Alamat dan Email [Corporate Secretary]",
  "deck": "NexAI Digital Infrastruktur memperbarui alamat kantor dan surel resmi corporate secretary, sementara pejabatnya tetap sama.",
  "date": "12 Agustus 2026",
  "image": "assets/img/mglv-ubah-alamat-dan-email-corporate-secretary.jpg",
  "imageV": "mssaz3zh",
  "tags": [
   "MGLV",
   "Corporate Secretary",
   "Keterbukaan Informasi",
   "Tata Kelola Perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5d880bd14f_506e8a4b20.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "toyota-dan-kemendag-bahas-ekspor-gcc-ditarget-november",
  "category": "Industri",
  "title": "Toyota dan Kemendag Bahas Ekspor, GCC Ditarget [November]",
  "deck": "Kemendag menargetkan kerja sama dagang dengan negara-negara Teluk selesai paling lambat November 2026, saat membahas perluasan ekspor otomotif dengan TMMIN.",
  "date": "12 Agustus 2026",
  "image": "assets/img/toyota-dan-kemendag-bahas-ekspor-gcc-ditarget-november.jpg",
  "imageV": "tjnrrl",
  "tags": [
   "ekspor",
   "otomotif",
   "GCC",
   "e-SKA"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bertemu-perwakilan-pt-toyota-motor-manufacturing-indonesia-mendag-busan-dorong-sektor-otomotif-genjot-ekspor",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "ekspor-mamin-indonesia-tertinggal-di-peringkat-asean",
  "category": "Industri",
  "title": "Ekspor Mamin Indonesia [Tertinggal] di Peringkat ASEAN",
  "deck": "Nilai ekspor makanan olahan Indonesia USD6,25 miliar pada 2025, masih di bawah Thailand, Vietnam, dan Singapura, di tengah pasar mamin global yang tumbuh 7 persen per tahun.",
  "date": "12 Agustus 2026",
  "image": "assets/img/ekspor-mamin-indonesia-tertinggal-di-peringkat-asean.jpg",
  "imageV": "tjnrrr",
  "tags": [
   "ekspor mamin",
   "ASEAN",
   "Kemendag",
   "UMKM"
  ],
  "kreditFoto": "Kementerian Perdagangan",
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/kemendag-dorong-produk-mamin-indonesia-tembus-pasar-global-melalui-indonesia-fb-trade-promotion-forum",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "bappebti-rilis-rating-67-pialang-berjangka-triwulan-ii",
  "category": "Pasar Modal",
  "title": "Bappebti [Rilis] Rating 67 Pialang Berjangka Triwulan II",
  "deck": "Bappebti menilai 67 pialang berjangka aktif untuk periode April-Juni 2026, dengan 12 perusahaan meraih peringkat tertinggi sebagai acuan bagi calon nasabah.",
  "date": "12 Agustus 2026",
  "image": "assets/img/bappebti-rilis-rating-67-pialang-berjangka-triwulan-ii.jpg",
  "imageV": "tjnkg7",
  "tags": [
   "Bappebti",
   "pialang berjangka",
   "Kementerian Perdagangan",
   "rating triwulanan"
  ],
  "sourceUrl": "https://www.kemendag.go.id/berita/siaran-pers/bappebti-publikasikan-penilaian-pialang-berjangka-triwulan-ii-2026",
  "sourceLabel": "Kementerian Perdagangan"
 },
 {
  "slug": "harga-properti-primer-naik-tipis-penjualan-masih-kontraksi",
  "category": "Makroekonomi",
  "title": "Harga Properti Primer [Naik] Tipis, Penjualan Masih Kontraksi",
  "deck": "Indeks harga properti residensial primer tumbuh 0,69 persen secara tahunan pada triwulan II 2026, sementara penjualan masih terkontraksi 2,36 persen meski membaik dari triwulan sebelumnya.",
  "date": "12 Agustus 2026",
  "image": "assets/img/harga-properti-primer-naik-tipis-penjualan-masih-kontraksi.jpg",
  "imageV": "mssk8ive",
  "tags": [
   "properti residensial",
   "SHPR",
   "KPR",
   "Bank Indonesia"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815226.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "uang-primer-bi-percepat-ke-17-1-pada-juli-2026",
  "category": "Moneter",
  "title": "Uang Primer BI [Percepat] ke 17,1% pada Juli 2026",
  "deck": "Pertumbuhan uang primer adjusted Bank Indonesia naik dari 13,8% menjadi 17,1% secara tahunan pada Juli 2026, ditopang kenaikan giro bank umum dan uang kartal.",
  "date": "12 Agustus 2026",
  "image": "assets/img/uang-primer-bi-percepat-ke-17-1-pada-juli-2026.jpg",
  "imageV": "mssk8lg4",
  "tags": [
   "Bank Indonesia",
   "Uang Primer",
   "M0 Adjusted",
   "Likuiditas Perbankan"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815326.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "keyakinan-konsumen-juli-melambat-tapi-masih-optimistis",
  "category": "Makroekonomi",
  "title": "Keyakinan Konsumen Juli [Melambat] tapi Masih Optimistis",
  "deck": "Indeks Keyakinan Konsumen BI turun tipis ke 116,8 pada Juli 2026, tapi masih di zona optimistis.",
  "date": "12 Agustus 2026",
  "image": "assets/img/keyakinan-konsumen-juli-melambat-tapi-masih-optimistis.jpg",
  "imageV": "mssk9a3i",
  "tags": [
   "Bank Indonesia",
   "Indeks Keyakinan Konsumen",
   "daya beli",
   "survei konsumen"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815426.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "penjualan-eceran-juli-2026-diproyeksikan-naik-0-9-persen",
  "category": "Makroekonomi",
  "title": "Penjualan Eceran Juli 2026 Diproyeksikan [Naik] 0,9 Persen",
  "deck": "Bank Indonesia memperkirakan penjualan eceran Juli 2026 tumbuh 0,9 persen secara tahunan, meski turun tipis secara bulanan akibat normalisasi permintaan pasca libur panjang.",
  "date": "12 Agustus 2026",
  "image": "assets/img/penjualan-eceran-juli-2026-diproyeksikan-naik-0-9-persen.jpg",
  "imageV": "mssk9emn",
  "tags": [
   "penjualan eceran",
   "Bank Indonesia",
   "inflasi",
   "konsumsi rumah tangga"
  ],
  "kreditFoto": "Bank Indonesia",
  "sourceUrl": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815526.aspx",
  "sourceLabel": "Bank Indonesia"
 },
 {
  "slug": "bri-peduli-dampingi-umkm-desa-brilian-sleman",
  "category": "UMKM",
  "title": "BRI Peduli [Dampingi] UMKM Desa Brilian Sleman",
  "deck": "Menyambut Hari UMKM Nasional, BRI Peduli memperkuat UMKM di Desa Brilian Hargobinangun, Sleman, lewat pendampingan usaha, bantuan lapak, dan edukasi keuangan.",
  "date": "12 Agustus 2026",
  "image": "assets/img/bri-peduli-dampingi-umkm-desa-brilian-sleman.jpg",
  "imageV": "tjnrsh",
  "tags": [
   "UMKM",
   "BRI Peduli",
   "Sleman",
   "Desa Brilian"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459349-momentum-hari-umkm-nasional-bri-peduli-dorong-penguatan-umkm-melalui-pendampingan-berkelanjutan-di-desa-brilian"
 },
 {
  "slug": "airlangga-calon-gubernur-pfii-sudah-dikantongi",
  "category": "Pasar Modal",
  "title": "Airlangga: Calon Gubernur PFII [Sudah] Dikantongi",
  "deck": "Menko Perekonomian Airlangga Hartarto menyebut pemerintah sudah punya nama calon Gubernur PFII dari kalangan internal pemerintah, namun identitasnya belum diungkap.",
  "date": "12 Agustus 2026",
  "image": "assets/img/airlangga-calon-gubernur-pfii-sudah-dikantongi.jpg",
  "imageV": "tjnrsi",
  "tags": [],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459335-airlangga-akui-sudah-kantongi-nama-calon-gubernur-pfii-ini-bocorannya"
 },
 {
  "slug": "nick-direksi-tambah-kepemilikan-saham-68-700-lembar",
  "category": "Aksi Korporasi",
  "title": "NICK: Direksi [Tambah] Kepemilikan Saham 68.700 Lembar",
  "deck": "Direktur Charnic Capital, Nicholas Santoso, menambah kepemilikan saham NICK lewat pembelian tidak langsung senilai sekitar Rp106,55 juta.",
  "date": "12 Agustus 2026",
  "image": "assets/img/nick-direksi-tambah-kepemilikan-saham-68-700-lembar.jpg",
  "imageV": "mssazp8c",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan saham",
   "transaksi orang dalam"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-7560-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-848-pasar-cermati-calon-gubernur-bi",
  "category": "Moneter",
  "title": "Rupiah [Menguat] ke Rp17.848, Pasar Cermati Calon Gubernur BI",
  "deck": "Rupiah menguat tipis ke Rp17.848 per dolar AS di tengah sorotan pasar terhadap pencalonan Destry Damayanti sebagai Gubernur BI dan tinjauan MSCI hari ini.",
  "date": "12 Agustus 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-848-pasar-cermati-calon-gubernur-bi.jpg",
  "imageV": "tjnrsj",
  "tags": [
   "rupiah",
   "dolar AS",
   "Bank Indonesia",
   "MSCI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459323-rupiah-menguat-ke-rp17848-per-dolar-as-pasar-soroti-pencalonan-destry-damayanti-jadi-gubernur-bi-dan-tinjauan-msci"
 },
 {
  "slug": "heal-komisaris-hasmoro-tambah-218-600-saham-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "HEAL: Komisaris Hasmoro Tambah 218.600 Saham [Kepemilikan]",
  "deck": "Dewan Komisaris Medikaloka Hermina, DR Hasmoro, membeli 218.600 saham HEAL senilai sekitar Rp170,5 juta. Hak suaranya tetap 5,03 persen.",
  "date": "12 Agustus 2026",
  "image": "assets/img/heal-komisaris-hasmoro-tambah-218-600-saham-kepemilikan.jpg",
  "imageV": "mssb02mx",
  "tags": [
   "HEAL",
   "Medikaloka Hermina",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-12082026-2752-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-pangan-12-agustus-bawang-putih-rp40-650-per-kg",
  "category": "Makroekonomi",
  "title": "Harga Pangan 12 Agustus: Bawang Putih [Rp40.650] per Kg",
  "deck": "PIHPS Bank Indonesia mencatat harga eceran nasional sejumlah bahan pangan pokok pada 12 Agustus 2026, dari bumbu dapur hingga beras dan minyak goreng.",
  "date": "12 Agustus 2026",
  "image": "assets/img/harga-pangan-12-agustus-bawang-putih-rp40-650-per-kg.jpg",
  "imageV": "tjnrsk",
  "tags": [
   "harga pangan",
   "PIHPS",
   "Bank Indonesia",
   "bahan pokok"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459312-harga-pangan-hari-ini-12-agustus-2026-bawang-merah-rp39400-per-kilogram-hingga-bawang-putih-rp40650-per-kilogram"
 },
 {
  "slug": "nusron-konflik-agraria-bumn-tni-polri-paling-rumit",
  "category": "BUMN",
  "title": "Nusron: Konflik Agraria BUMN-TNI/Polri Paling [Rumit]",
  "deck": "Menteri ATR/BPN Nusron Wahid memetakan tiga jenis konflik agraria, dan sengketa yang bersinggungan dengan aset BUMN serta TNI-Polri dinilai paling sulit diselesaikan.",
  "date": "12 Agustus 2026",
  "image": "assets/img/nusron-konflik-agraria-bumn-tni-polri-paling-rumit.jpg",
  "imageV": "tjnrsk",
  "tags": [
   "konflik agraria",
   "reforma agraria",
   "Nusron Wahid",
   "ATR/BPN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459282-buka-bukaan-soal-konflik-agraria-nusron-akui-benturan-dengan-aset-bumn-hingga-tni-polri-yang-paling-repot"
 },
 {
  "slug": "adhi-minta-pemegang-obligasi-setujui-penundaan-bunga",
  "category": "Aksi Korporasi",
  "title": "ADHI Minta Pemegang Obligasi Setujui [Penundaan] Bunga",
  "deck": "ADHI menggelar RUPO senilai Rp102,715 miliar untuk meminta persetujuan menunda pembayaran bunga ke-8, ke-9, dan ke-10.",
  "date": "11 Agustus 2026",
  "image": "assets/img/adhi-minta-pemegang-obligasi-setujui-penundaan-bunga.jpg",
  "imageV": "mssb0gpp",
  "tags": [
   "ADHI",
   "Adhi Karya",
   "obligasi",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/9575245c68_bc63bcd0ac.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "true-telat-sampaikan-laporan-keuangan-saham-disuspensi-bei",
  "category": "Aksi Korporasi",
  "title": "TRUE Telat Sampaikan Laporan Keuangan, Saham [Disuspensi] BEI",
  "deck": "PT Triniti Dinamik Tbk (TRUE) belum menyerahkan laporan keuangan tahunan 2025 yang semestinya rampung akhir Maret 2026, dan sahamnya kini disetop sementara dari perdagangan oleh BEI.",
  "date": "11 Agustus 2026",
  "image": "assets/img/true-telat-sampaikan-laporan-keuangan-saham-disuspensi-bei.jpg",
  "imageV": "mssb0x3t",
  "tags": [
   "TRUE",
   "suspensi saham",
   "laporan keuangan tahunan",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/128a054b2d_8acd176aa2.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "meds-komisaris-lepas-6-5-juta-saham-hak-suara-ke-54-74",
  "category": "Aksi Korporasi",
  "title": "MEDS: Komisaris Lepas 6,5 Juta Saham, Hak Suara ke [54,74%]",
  "deck": "Dewan Komisaris MEDS, Jemmy Kurniawan, menjual 6,5 juta saham pada 10 Agustus 2026 senilai sekitar Rp477 juta, mengurangi hak suaranya dari 55,16% menjadi 54,74%.",
  "date": "11 Agustus 2026",
  "image": "assets/img/meds-komisaris-lepas-6-5-juta-saham-hak-suara-ke-54-74.jpg",
  "imageV": "mssb1a5u",
  "tags": [
   "MEDS",
   "Hetzer Medical Indonesia",
   "kepemilikan saham",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-2031-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "purbaya-kaji-pembatasan-beli-pertalite-desil-9-10",
  "category": "Energi",
  "title": "Purbaya Kaji [Pembatasan] Beli Pertalite Desil 9-10",
  "deck": "Menkeu Purbaya membuka opsi larangan pembelian Pertalite bagi kelompok desil 9 dan 10, seiring penyiapan sistem penerapannya secara bertahap.",
  "date": "11 Agustus 2026",
  "image": "assets/img/purbaya-kaji-pembatasan-beli-pertalite-desil-9-10.jpg",
  "imageV": "msr7ac1i",
  "tags": [
   "Pertalite",
   "Subsidi BBM",
   "APBN",
   "Purbaya Yudhi Sadewa"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459237-purbaya-ungkap-rencana-baru-soal-subsidi-bbm-pertalite-masyarakat-desil-9-10-bakal-dilarang-beli"
 },
 {
  "slug": "adcp-tunda-pembayaran-kupon-obligasi-ke-mei-2027",
  "category": "Aksi Korporasi",
  "title": "ADCP Tunda Pembayaran [Kupon] Obligasi ke Mei 2027",
  "deck": "Pemegang Obligasi II ADCP Seri B menyetujui penundaan bunga sampai Mei 2027 dan pelonggaran syarat rasio keuangan, dengan Perseroan membayar biaya persetujuan 0,15% dari nilai pokok.",
  "date": "11 Agustus 2026",
  "image": "assets/img/adcp-tunda-pembayaran-kupon-obligasi-ke-mei-2027.jpg",
  "imageV": "mssb1nf2",
  "tags": [
   "ADCP",
   "obligasi",
   "restrukturisasi utang",
   "RUPO"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8c54f13e28_7e3858436f.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "airlangga-calon-gubernur-pfii-dari-internal-pemerintah",
  "category": "Moneter",
  "title": "Airlangga: Calon Gubernur [PFII] dari Internal Pemerintah",
  "deck": "Menko Airlangga Hartarto menyebut pemerintah sudah mengantongi calon Gubernur PFII, namun nama dan lokasi kantor lembaga itu belum diumumkan.",
  "date": "11 Agustus 2026",
  "image": "assets/img/airlangga-calon-gubernur-pfii-dari-internal-pemerintah.jpg",
  "imageV": "tjnrsm",
  "tags": [
   "Airlangga Hartarto",
   "PFII",
   "Pusat Finansial Internasional Indonesia",
   "Kelembagaan Ekonomi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459250-bocoran-airlangga-soal-calon-gubernur-pfii-sosoknya-dari-internal-pemerintah"
 },
 {
  "slug": "tama-divestasi-pemegang-saham-lepas-200-000-lembar-saham",
  "category": "Aksi Korporasi",
  "title": "TAMA: [Divestasi] Pemegang Saham Lepas 200.000 Lembar Saham",
  "deck": "Verah Wahyudi S Wong melepas 200.000 saham TAMA secara tidak langsung pada 10 Agustus 2026, hak suaranya turun tipis dari 9,69% menjadi 9,68%.",
  "date": "11 Agustus 2026",
  "image": "assets/img/tama-divestasi-pemegang-saham-lepas-200-000-lembar-saham.jpg",
  "imageV": "mssda7z0",
  "tags": [
   "TAMA",
   "Lancartama Sejati",
   "pemegang saham",
   "kepemilikan saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-3796-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cuan-prajogo-pangestu-tambah-kepemilikan-51-7-juta-saham",
  "category": "Aksi Korporasi",
  "title": "CUAN: Prajogo Pangestu [Tambah] Kepemilikan 51,7 Juta Saham",
  "deck": "Pemegang saham pengendali CUAN, Prajogo Pangestu, membeli 51,7 juta saham baru pada 11 Agustus 2026, menambah hak suaranya tipis menjadi 80,42 persen.",
  "date": "11 Agustus 2026",
  "image": "assets/img/cuan-prajogo-pangestu-tambah-kepemilikan-51-7-juta-saham.jpg",
  "imageV": "mssdakvj",
  "tags": [
   "CUAN",
   "Prajogo Pangestu",
   "kepemilikan saham",
   "Petrindo Jaya Kreasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-3956-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "telkom-kenalkan-connectivity-di-dti-cx-2026",
  "category": "Teknologi",
  "title": "Telkom Kenalkan [Connectivity+] di DTI-CX 2026",
  "deck": "Telkom Solution menghadirkan Connectivity+, layanan konektivitas cepat dan luas untuk mendukung transformasi digital sektor bisnis di berbagai daerah.",
  "date": "11 Agustus 2026",
  "image": "assets/img/telkom-kenalkan-connectivity-di-dti-cx-2026.jpg",
  "imageV": "tjnrsn",
  "tags": [
   "telkom",
   "connectivity+",
   "dti-cx 2026",
   "konektivitas digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459241-perkenalkan-connectivity-telkom-tawarkan-layanan-berkecepatan-tinggi-dengan-jangkauan-luas"
 },
 {
  "slug": "pgjo-suntik-modal-rp47-5-m-ke-anak-usaha-ekuitas-negatif",
  "category": "Aksi Korporasi",
  "title": "PGJO Suntik Modal Rp47,5 M ke Anak Usaha, Ekuitas [Negatif]",
  "deck": "PGJO menambah modal anak usahanya, PT Panca Pertiwi Tambang, senilai Rp47,5 miliar, setara 156,3 persen dari total aset Perseroan yang tercatat berekuitas negatif.",
  "date": "11 Agustus 2026",
  "image": "assets/img/pgjo-suntik-modal-rp47-5-m-ke-anak-usaha-ekuitas-negatif.jpg",
  "imageV": "mssdawxv",
  "tags": [
   "PGJO",
   "transaksi material",
   "penambahan modal",
   "PT Panca Pertiwi Tambang"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7a14d9e557_3262bf1aa0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "cbre-republik-capital-lepas-90-76-juta-saham-rp700-unit",
  "category": "Aksi Korporasi",
  "title": "CBRE: Republik Capital [Lepas] 90,76 Juta Saham, Rp700/Unit",
  "deck": "Republik Capital Indonesia melepas 90.761.349 saham CBRE seharga Rp700 per lembar pada 6 Agustus 2026, hak suara turun dari 11,30% menjadi 9,30%.",
  "date": "11 Agustus 2026",
  "image": "assets/img/cbre-republik-capital-lepas-90-76-juta-saham-rp700-unit.jpg",
  "imageV": "mssdbccz",
  "tags": [
   "CBRE"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-9277-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mice-siwie-honoris-tambah-kepemilikan-saham-jadi-0-1433",
  "category": "Aksi Korporasi",
  "title": "MICE: Siwie Honoris [tambah] kepemilikan saham jadi 0,1433%",
  "deck": "Siwie Honoris membeli 50.500 lembar saham Multi Indocitra pada 7 Agustus 2026, menambah kepemilikannya menjadi 859.700 lembar atau 0,1433% hak suara.",
  "date": "11 Agustus 2026",
  "image": "assets/img/mice-siwie-honoris-tambah-kepemilikan-saham-jadi-0-1433.jpg",
  "imageV": "mssdbrsv",
  "tags": [
   "MICE",
   "kepemilikan saham",
   "Multi Indocitra",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-0439-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "palm-siapkan-dana-lunasi-obligasi-jatuh-tempo-3-sep-2026",
  "category": "Aksi Korporasi",
  "title": "PALM Siapkan Dana Lunasi [Obligasi] Jatuh Tempo 3 Sep 2026",
  "deck": "PALM menyatakan dana pelunasan pokok dan bunga keempat Obligasi Berkelanjutan II Tahap V Seri A sudah tersedia, menjelang jatuh tempo 3 September 2026 dengan bunga tetap 7,50 persen per tahun.",
  "date": "11 Agustus 2026",
  "image": "assets/img/palm-siapkan-dana-lunasi-obligasi-jatuh-tempo-3-sep-2026.jpg",
  "imageV": "msshhv2l",
  "tags": [
   "PALM",
   "obligasi",
   "Provident Investasi Bersama",
   "pembayaran bunga"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e004bde61a_4d644a5733.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "iata-karya-pacific-investama-tambah-saham-suara-60-35",
  "category": "Aksi Korporasi",
  "title": "IATA: Karya Pacific Investama [Tambah] Saham, Suara 60,35%",
  "deck": "Karya Pacific Investama menambah kepemilikan di PT MNC Energy Investments Tbk (IATA) senilai sekitar Rp230,3 miliar, mengangkat hak suaranya dari 50,50% menjadi 60,35%.",
  "date": "11 Agustus 2026",
  "image": "assets/img/iata-karya-pacific-investama-tambah-saham-suara-60-35.jpg",
  "imageV": "msshig11",
  "tags": [
   "IATA",
   "kepemilikan saham",
   "pemegang saham",
   "MNC Energy Investments"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-7144-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "wakaf-istiqlal-masuk-bursa-jangan-kejar-return-tinggi",
  "category": "Pasar Modal",
  "title": "Wakaf Istiqlal Masuk Bursa, Jangan [Kejar Return Tinggi]",
  "deck": "Guru besar UI Budi Frensidy menilai dana wakaf Istiqlal boleh dikembangkan di pasar modal syariah, asalkan nilai pokoknya tetap terjaga.",
  "date": "11 Agustus 2026",
  "image": "assets/img/wakaf-istiqlal-masuk-bursa-jangan-kejar-return-tinggi.jpg",
  "imageV": "tjnrso",
  "tags": [
   "wakaf",
   "masjid istiqlal",
   "pasar modal syariah",
   "bursa efek"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459214-wacana-dana-wakaf-istiqlal-masuk-bursa-efek-guru-besar-ui-tidak-boleh-kejar-return-tinggi"
 },
 {
  "slug": "esdm-kemenkeu-rombak-skema-subsidi-bbm",
  "category": "Energi",
  "title": "ESDM-Kemenkeu Rombak Skema [Subsidi] BBM",
  "deck": "Menteri ESDM Bahlil Lahadalia dan Menkeu Purbaya Yudhi Sadewa membahas perbaikan penyaluran subsidi BBM agar tak lagi dinikmati kelompok mampu.",
  "date": "11 Agustus 2026",
  "image": "assets/img/esdm-kemenkeu-rombak-skema-subsidi-bbm.jpg",
  "imageV": "tjnrso",
  "tags": [
   "bbm",
   "subsidi",
   "esdm",
   "kemenkeu"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459176-bahlil-temui-purbaya-bahas-sistem-subsidi-bbm-masa-orang-kaya-kita-subsidi"
 },
 {
  "slug": "pembiayaan-umkm-diusulkan-naik-jadi-rp2-000-triliun",
  "category": "UMKM",
  "title": "Pembiayaan UMKM Diusulkan [Naik] jadi Rp2.000 Triliun",
  "deck": "Airlangga Hartarto mengusulkan kenaikan target pembiayaan UMKM dari Rp1.500 triliun menjadi Rp2.000 triliun, plus dorongan pemanfaatan teknologi digital dan AI.",
  "date": "11 Agustus 2026",
  "image": "assets/img/pembiayaan-umkm-diusulkan-naik-jadi-rp2-000-triliun.jpg",
  "imageV": "msr7axv9",
  "tags": [
   "UMKM",
   "Airlangga Hartarto",
   "pembiayaan UMKM",
   "OJK"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459163-airlangga-ungkap-2-cara-bikin-umkm-naik-kelas-pembiayaan-rp2000-triliun-hingga-ai"
 },
 {
  "slug": "ciri-ciri-umkm-naik-kelas-yang-perlu-dipahami",
  "category": "UMKM",
  "title": "Ciri-ciri UMKM [Naik Kelas] yang Perlu Dipahami",
  "deck": "UMKM naik kelas bukan sekadar soal omzet, melainkan transformasi usaha lewat digitalisasi, kualitas produk, dan akses pembiayaan yang lebih luas.",
  "date": "11 Agustus 2026",
  "image": "assets/img/ciri-ciri-umkm-naik-kelas-yang-perlu-dipahami.jpg",
  "imageV": "tjnrsq",
  "tags": [
   "umkm",
   "umkm naik kelas",
   "digitalisasi umkm",
   "pembiayaan umkm"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459161-seperti-apa-sih-ciri-ciri-umkm-naik-kelas-inilah-contoh-contohnya-lewat-pengembangan-layanan-yang-memuaskan"
 },
 {
  "slug": "blt-rp900-ribu-agustus-2026-belum-cair-ini-kata-pemerintah",
  "category": "Makroekonomi",
  "title": "BLT Rp900 Ribu Agustus 2026 [Belum] Cair, Ini Kata Pemerintah",
  "deck": "Isu BLT Kesra Rp900 ribu kembali beredar di media sosial, tapi hingga pertengahan Agustus 2026 pemerintah belum mengumumkan pencairannya.",
  "date": "11 Agustus 2026",
  "image": "assets/img/blt-rp900-ribu-agustus-2026-belum-cair-ini-kata-pemerintah.jpg",
  "imageV": "tjnrsq",
  "tags": [
   "BLT",
   "PKH",
   "BPNT",
   "bantuan sosial"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459139-blt-rp900-ribu-agustus-2026-cair-ini-penjelasan-terbaru-pemerintah"
 },
 {
  "slug": "ojol-masuk-umkm-aplikator-tetap-wajib-bayar-bhr",
  "category": "Ketenagakerjaan",
  "title": "Ojol Masuk UMKM, Aplikator Tetap [Wajib] Bayar BHR",
  "deck": "Mensesneg Prasetyo Hadi menegaskan kewajiban aplikator membayar BHR ke pengemudi ojol tidak hilang meski status mereka nanti digolongkan sebagai UMKM dalam Perpres Ojol.",
  "date": "11 Agustus 2026",
  "image": "assets/img/ojol-masuk-umkm-aplikator-tetap-wajib-bayar-bhr.jpg",
  "imageV": "tjnrsr",
  "tags": [
   "ojol",
   "BHR",
   "UMKM",
   "aplikator"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459136-ojol-bakal-masuk-umkm-mensesneg-tegaskan-aplikator-tetap-wajib-bayar-bhr"
 },
 {
  "slug": "komisi-xi-siapkan-uji-kelayakan-destry-damayanti-untuk-gubernur-bi",
  "category": "Moneter",
  "title": "Komisi XI Siapkan Uji Kelayakan [Destry] Damayanti untuk Gubernur BI",
  "deck": "Komisi XI DPR bersiap menjadwalkan uji kepatutan dan kelayakan Destry Damayanti begitu masa reses usai, menyusul pengajuannya sebagai calon tunggal Gubernur BI oleh Presiden.",
  "date": "11 Agustus 2026",
  "image": "assets/img/komisi-xi-siapkan-uji-kelayakan-destry-damayanti-untuk-gubernur-bi.jpg",
  "imageV": "tjnrss",
  "tags": [
   "Bank Indonesia",
   "Destry Damayanti",
   "DPR",
   "RAPBN 2027"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459131-usai-reses-komisi-xi-akan-gelar-uji-kelayakan-dan-kepatutan-destry-damayanti"
 },
 {
  "slug": "destry-damayanti-calon-tunggal-gubernur-bi",
  "category": "Moneter",
  "title": "Destry Damayanti, [Calon Tunggal] Gubernur BI",
  "deck": "Presiden Prabowo mengusulkan Destry Damayanti sebagai satu-satunya calon Gubernur BI ke DPR, menyusul mundurnya Perry Warjiyo.",
  "date": "11 Agustus 2026",
  "image": "assets/img/destry-damayanti-calon-tunggal-gubernur-bi.jpg",
  "imageV": "tjnrst",
  "tags": [
   "Destry Damayanti",
   "Bank Indonesia",
   "Gubernur BI",
   "DPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459094-rekam-jejak-destry-damayanti-ekonom-yang-kini-jadi-calon-tunggal-gubernur-bi"
 },
 {
  "slug": "bri-brilink-agen-capai-1-13-juta-layani-60-753-desa",
  "category": "Perbankan",
  "title": "BRI: BRILink Agen Capai [1,13 Juta], Layani 60.753 Desa",
  "deck": "Hingga Juni 2026, jaringan BRILink Agen BRI mencapai 1,13 juta agen di lebih dari 60.753 desa, mencatat 501 juta transaksi senilai Rp841 triliun sepanjang Semester I 2026.",
  "date": "11 Agustus 2026",
  "image": "assets/img/bri-brilink-agen-capai-1-13-juta-layani-60-753-desa.jpg",
  "imageV": "tjnrsu",
  "tags": [
   "BRI",
   "BRILink Agen",
   "inklusi keuangan",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459079-maknai-kemerdekaan-indonesia-danantara-melalui-brilink-agen-hadir-membuka-akses-dan-menggerakkan-ekonomi-negeri"
 },
 {
  "slug": "ojk-dukung-destry-jadi-calon-tunggal-gubernur-bi",
  "category": "Moneter",
  "title": "OJK Dukung Destry Jadi [Calon Tunggal] Gubernur BI",
  "deck": "Ketua OJK Friderica Widyasari Dewi menyatakan dukungan atas pencalonan tunggal Destry Damayanti sebagai calon Gubernur BI pengganti Perry Warjiyo.",
  "date": "11 Agustus 2026",
  "image": "assets/img/ojk-dukung-destry-jadi-calon-tunggal-gubernur-bi.jpg",
  "imageV": "tjnrsv",
  "tags": [
   "Bank Indonesia",
   "OJK",
   "Destry Damayanti",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459077-bos-ojk-buka-suara-soal-destry-jadi-calon-tunggal-gubernur-bi-singgung-rekam-jejak"
 },
 {
  "slug": "ihsg-berbalik-ke-zona-merah-usai-sempat-menguat",
  "category": "Pasar Modal",
  "title": "IHSG [Berbalik] ke Zona Merah Usai Sempat Menguat",
  "deck": "IHSG dibuka menguat 0,29 persen ke 6.383,81, tapi berbalik melemah dalam sepuluh menit pertama sambil pasar menanti data inflasi AS.",
  "date": "11 Agustus 2026",
  "image": "assets/img/ihsg-berbalik-ke-zona-merah-usai-sempat-menguat.jpg",
  "imageV": "tjnrsw",
  "tags": [
   "IHSG",
   "BEI",
   "CPI AS",
   "LQ45"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459070-ihsg-masih-hijau-di-awal-perdagangan-investor-cermati-inflasi-as-dan-sentimen-global"
 },
 {
  "slug": "mbss-umumkan-rencana-rupslb-pada-17-september-2026",
  "category": "Aksi Korporasi",
  "title": "MBSS Umumkan Rencana [RUPSLB] pada 17 September 2026",
  "deck": "Mitrabahtera Segara Sejati menjadwalkan RUPSLB pada 17 September 2026, dengan pencatatan pemegang saham yang berhak hadir per 24 Agustus 2026. Agenda rapat belum diumumkan.",
  "date": "11 Agustus 2026",
  "image": "assets/img/mbss-umumkan-rencana-rupslb-pada-17-september-2026.jpg",
  "imageV": "tjnkqd",
  "tags": [
   "MBSS",
   "RUPSLB",
   "Mitrabahtera Segara Sejati",
   "Pasar Modal"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f809e2d047_ed4eb2837c.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pans-direksi-tjiang-jefry-tambah-saham-lewat-remunerasi",
  "category": "Aksi Korporasi",
  "title": "PANS: Direksi Tjiang Jefry [Tambah] Saham Lewat Remunerasi",
  "deck": "Direksi PANS, Tjiang Jefry, menambah 24.500 saham lewat program remunerasi berbasis saham pada 10 Agustus 2026, hak suaranya naik tipis menjadi 0,0152 persen.",
  "date": "11 Agustus 2026",
  "image": "assets/img/pans-direksi-tjiang-jefry-tambah-saham-lewat-remunerasi.jpg",
  "imageV": "tjnkr6",
  "tags": [
   "PANS",
   "Panin Sekuritas",
   "kepemilikan saham",
   "direksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-11082026-5711-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "smga-jelaskan-ke-bei-soal-jaminan-rp40-5-miliar-untuk-buana",
  "category": "Aksi Korporasi",
  "title": "SMGA Jelaskan ke BEI soal [Jaminan] Rp40,5 Miliar untuk Buana",
  "deck": "SMGA menjelaskan ke BEI soal corporate guarantee Rp40,5 miliar ke Maybank untuk kewajiban Buana Intertrans, setelah proyek batu bara yang mendasarinya gagal terealisasi.",
  "date": "11 Agustus 2026",
  "image": "assets/img/smga-jelaskan-ke-bei-soal-jaminan-rp40-5-miliar-untuk-buana.jpg",
  "imageV": "tjnkrz",
  "tags": [
   "SMGA",
   "Corporate Guarantee",
   "Buana Intertrans",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/287dd6b917_14ed7e049d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "emas-antam-naik-rp20-000-jadi-rp2-710-000-gram",
  "category": "Pasar Modal",
  "title": "Emas Antam [Naik] Rp20.000 Jadi Rp2.710.000/Gram",
  "deck": "Harga emas Antam naik Rp20.000 ke Rp2.710.000 per gram pada 11 Agustus 2026, buyback ikut naik ke Rp2.546.000 per gram.",
  "date": "11 Agustus 2026",
  "image": "assets/img/emas-antam-naik-rp20-000-jadi-rp2-710-000-gram.jpg",
  "imageV": "msr7bc3a",
  "tags": [
   "emas",
   "harga emas",
   "antam",
   "logam mulia"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/459045-harga-emas-antam-hari-ini-11-agustus-2026-naik-rp20000-buyback-ikut-naik"
 },
 {
  "slug": "enak-panggil-rupslb-bahas-perombakan-direksi-komisaris",
  "category": "Aksi Korporasi",
  "title": "ENAK Panggil RUPSLB Bahas [Perombakan] Direksi-Komisaris",
  "deck": "Champ Resto Indonesia mengundang pemegang saham ke RUPSLB pada 2 September 2026 untuk menyetujui perubahan susunan Dewan Komisaris dan Direksi perseroan.",
  "date": "11 Agustus 2026",
  "image": "assets/img/enak-panggil-rupslb-bahas-perombakan-direksi-komisaris.jpg",
  "imageV": "tjnkt5",
  "tags": [
   "ENAK",
   "RUPSLB",
   "Champ Resto Indonesia",
   "Direksi dan Komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/437fbb7ee9_3de1b10365.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "asbi-laporkan-dugaan-penggelapan-dana-dan-investasi-perseroan",
  "category": "Aksi Korporasi",
  "title": "ASBI Laporkan Dugaan [Penggelapan] Dana dan Investasi Perseroan",
  "deck": "Asuransi Bintang Tbk melaporkan dugaan tindak pidana penggelapan dana dan investasi yang melibatkan oknum internal dan eksternal, membuat kas dan investasi SBN perseroan berkurang.",
  "date": "11 Agustus 2026",
  "image": "assets/img/asbi-laporkan-dugaan-penggelapan-dana-dan-investasi-perseroan.jpg",
  "imageV": "tjnkty",
  "tags": [
   "ASBI",
   "penggelapan",
   "keterbukaan informasi",
   "asuransi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f1e98e608e_dd6ac8fc5a.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ricy-panggil-rupst-lb-bahas-komisaris-dan-anggaran-dasar",
  "category": "Aksi Korporasi",
  "title": "RICY Panggil RUPST-LB, Bahas [Komisaris] dan Anggaran Dasar",
  "deck": "Ricky Putra Globalindo (RICY) mengundang pemegang saham ke RUPST dan RUPSLB pada 2 September 2026, dengan agenda perubahan susunan komisaris dan revisi anggaran dasar.",
  "date": "11 Agustus 2026",
  "image": "assets/img/ricy-panggil-rupst-lb-bahas-komisaris-dan-anggaran-dasar.jpg",
  "imageV": "tjnkvz",
  "tags": [
   "RICY",
   "RUPS",
   "Ricky Putra Globalindo",
   "Anggaran Dasar"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/28de534d6c_1676384453.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "hexa-jadwalkan-rupst-dan-rupslb-17-september-2026",
  "category": "Aksi Korporasi",
  "title": "HEXA Jadwalkan RUPST dan [RUPSLB] 17 September 2026",
  "deck": "Hexindo Adiperkasa mengumumkan rencana RUPST dan RUPSLB pada 17 September 2026, dengan tanggal pencatatan pemegang saham 24 Agustus 2026.",
  "date": "11 Agustus 2026",
  "image": "assets/img/hexa-jadwalkan-rupst-dan-rupslb-17-september-2026.jpg",
  "imageV": "tjnkxf",
  "tags": [
   "HEXA",
   "RUPST",
   "RUPSLB",
   "Hexindo Adiperkasa"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/396d64ccba_6aa9619681.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kepercayaan-publik-jadi-kunci-persaingan-fintech-investasi",
  "category": "Teknologi",
  "title": "Kepercayaan Publik Jadi Kunci Persaingan [Fintech Investasi]",
  "deck": "Survei nasional Digital Excellence Awards 2026 menunjukkan tingkat kepercayaan pengguna kini jadi penentu utama daya saing platform fintech investasi di Indonesia.",
  "date": "10 Agustus 2026",
  "image": "assets/img/kepercayaan-publik-jadi-kunci-persaingan-fintech-investasi.jpg",
  "imageV": "tjnrsy",
  "tags": [
   "fintech investasi",
   "TRIV Group",
   "kepercayaan konsumen",
   "survei nasional"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458985-kepercayaan-publik-jadi-penentu-persaingan-fintech-investasi-ini-hasil-survei-nasional"
 },
 {
  "slug": "perpres-ojol-kelar-agustus-driver-jadi-umkm",
  "category": "UMKM",
  "title": "Perpres Ojol Kelar Agustus, Driver Jadi [UMKM]",
  "deck": "Pemerintah menargetkan Perpres ekosistem ojek online rampung sebelum 17 Agustus, sekaligus menetapkan status UMKM bagi pengemudi ojol tanpa kewajiban pajak baru.",
  "date": "10 Agustus 2026",
  "image": "assets/img/perpres-ojol-kelar-agustus-driver-jadi-umkm.jpg",
  "imageV": "tjnrsz",
  "tags": [
   "ojol",
   "ojek online",
   "UMKM",
   "Perpres"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458961-perpres-ojol-hampir-rampung-driver-ojek-online-bakal-jadi-umkm"
 },
 {
  "slug": "ai-cinefest-2026-telkomsel-perkuat-ekosistem-kreator-ai",
  "category": "Teknologi",
  "title": "AI Cinefest 2026: Telkomsel Perkuat Ekosistem Kreator [AI]",
  "deck": "Telkomsel bersama Huawei dan MiniMax menggelar AI Cinefest 2026, ajang yang menjaring lebih dari seribu karya film pendek berbasis kecerdasan buatan dari kreator Indonesia.",
  "date": "10 Agustus 2026",
  "image": "assets/img/ai-cinefest-2026-telkomsel-perkuat-ekosistem-kreator-ai.jpg",
  "imageV": "tjnrsz",
  "tags": [
   "telkomsel",
   "ai cinefest",
   "kreator ai",
   "indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458941-melalui-ai-cinefest-2026-telkomsel-dorong-pertumbuhan-ekosistem-kreator-ai-indonesia"
 },
 {
  "slug": "onlinepajak-berganti-nama-jadi-achilles-rangkul-urusan-pajak",
  "category": "Teknologi",
  "title": "OnlinePajak Berganti Nama Jadi Achilles, Rangkul Urusan [Pajak]",
  "deck": "OnlinePajak bertransformasi menjadi ekosistem Achilles yang menggabungkan layanan pajak, transaksi, dokumen digital, hingga pendanaan usaha.",
  "date": "10 Agustus 2026",
  "image": "assets/img/onlinepajak-berganti-nama-jadi-achilles-rangkul-urusan-pajak.jpg",
  "imageV": "tjnrt0",
  "tags": [
   "OnlinePajak",
   "Achilles",
   "pajak digital",
   "SPT"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458937-transformasi-layanan-digital-kelola-pajak-dokumen-hingga-pendanaan-dalam-satu-wadah"
 },
 {
  "slug": "labs-rencanakan-buyback-saham-saat-pasar-bergejolak",
  "category": "Aksi Korporasi",
  "title": "LABS siapkan rencana [buyback] saham saat pasar bergejolak",
  "deck": "PT UBC Medical Indonesia Tbk (LABS) menyampaikan keterbukaan informasi soal rencana pembelian kembali saham di tengah fluktuasi pasar, memakai skema khusus tanpa persetujuan RUPS.",
  "date": "10 Agustus 2026",
  "image": "assets/img/labs-rencanakan-buyback-saham-saat-pasar-bergejolak.jpg",
  "imageV": "tjnl3b",
  "tags": [
   "LABS",
   "buyback saham",
   "UBC Medical Indonesia",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/42d2180a74_a4889a5ca7.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "csis-perubahan-kepemilikan-saham-oleh-tjoea-aubintoro",
  "category": "Aksi Korporasi",
  "title": "CSIS: Direksi Tjoea Aubintoro [Tambah] Kepemilikan Saham",
  "deck": "Direksi CSIS, Tjoea Aubintoro, membeli 586.200 saham pada 10 Agustus 2026 sehingga hak suaranya naik dari 0,40 persen menjadi 0,44 persen.",
  "date": "10 Agustus 2026",
  "image": "assets/img/csis-perubahan-kepemilikan-saham-oleh-tjoea-aubintoro.jpg",
  "imageV": "tjnl3u",
  "tags": [
   "CSIS",
   "kepemilikan saham",
   "direksi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-9458-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "ptro-beri-penjelasan-atas-permintaan-bursa",
  "category": "Aksi Korporasi",
  "title": "PTRO Beri [Tanggapan] ke BEI soal Investasi Singaraja Putra",
  "deck": "Petrosea Tbk menyampaikan tanggapan resmi kepada Bursa Efek Indonesia atas permintaan penjelasan terkait transaksi material dan afiliasi serta investasi di Singaraja Putra.",
  "date": "10 Agustus 2026",
  "image": "assets/img/ptro-beri-penjelasan-atas-permintaan-bursa.jpg",
  "imageV": "tjnl4c",
  "tags": [
   "PTRO",
   "Petrosea",
   "Bursa Efek Indonesia",
   "Transaksi Afiliasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5ccc58838a_9df9b4b581.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "irra-laporkan-perubahan-alamat-dan-nomor-telepon-kantor",
  "category": "Aksi Korporasi",
  "title": "IRRA Ubah Alamat Kantor Pusat, Pindah ke [ITS Tower] Jaksel",
  "deck": "PT Itama Ranoraya Tbk (IRRA) melaporkan perubahan alamat kantor pusat dari Jakarta Timur ke ITS Tower, Pejaten Timur, Jakarta Selatan, efektif sejak 5 Juni 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/irra-laporkan-perubahan-alamat-dan-nomor-telepon-kantor.jpg",
  "imageV": "tjnl54",
  "tags": [
   "IRRA",
   "Itama Ranoraya",
   "keterbukaan informasi",
   "perubahan alamat"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/d53e209e48_bdc4670e6b.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "avia-rilis-siaran-pers-isi-dokumen-belum-bisa-dibaca",
  "category": "Aksi Korporasi",
  "title": "AVIA Publikasikan Siaran Pers Program [Kepatuhan] Persaingan Usaha",
  "deck": "PT Avia Avian Tbk (AVIA) menyampaikan siaran pers soal program kepatuhan persaingan usaha bersama KPPU, tanpa mencantumkan dampak finansial atau operasional.",
  "date": "10 Agustus 2026",
  "image": "assets/img/avia-rilis-siaran-pers-isi-dokumen-belum-bisa-dibaca.jpg",
  "imageV": "tjnl5t",
  "tags": [
   "AVIA",
   "keterbukaan informasi",
   "KPPU",
   "tata kelola perusahaan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/c5db2a9273_55626f70c0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "arko-laporkan-perubahan-pengurus-rincian-belum-terungkap",
  "category": "Aksi Korporasi",
  "title": "ARKO Angkat [Direktur] dan Komisaris Baru, Efektif April 2026",
  "deck": "PT Arkora Hydro Tbk. (ARKO) melaporkan pengangkatan direktur dan komisaris baru menggantikan pejabat sebelumnya, berlaku efektif sejak 8 April 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/arko-laporkan-perubahan-pengurus-rincian-belum-terungkap.jpg",
  "imageV": "tjnl74",
  "tags": [
   "ARKO",
   "Arkora Hydro",
   "pergantian direksi",
   "komisaris"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/01e9c37672_76d212b568.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mdiy-buka-periode-pelaksanaan-mesop-tahap-i-ii-2026",
  "category": "Aksi Korporasi",
  "title": "MDIY Buka Periode Pelaksanaan [MESOP] Tahap I-II 2026",
  "deck": "MDIY memulai periode pelaksanaan tahap I MESOP periode II 2026. Rincian jumlah opsi dan harga pelaksanaan belum dapat dipastikan karena dokumen belum terbaca penuh.",
  "date": "10 Agustus 2026",
  "image": "assets/img/mdiy-buka-periode-pelaksanaan-mesop-tahap-i-ii-2026.jpg",
  "imageV": "tjnl7w",
  "tags": [
   "MDIY",
   "MESOP",
   "opsi saham",
   "dilusi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/7a1c945fef_edb21c8bd0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "mppa-ubah-anggaran-dasar-rincian-perubahan-belum-terungkap",
  "category": "Aksi Korporasi",
  "title": "MPPA Ubah [Anggaran Dasar] Usai Rights Issue Kedelapan",
  "deck": "MPPA melaporkan perubahan anggaran dasar ke BEI pada 10 Agustus 2026 sebagai tindak lanjut rights issue kedelapan (HMETD VIII), tanpa rincian angka modal baru.",
  "date": "10 Agustus 2026",
  "image": "assets/img/mppa-ubah-anggaran-dasar-rincian-perubahan-belum-terungkap.jpg",
  "imageV": "tjnl8l",
  "tags": [
   "MPPA",
   "anggaran dasar",
   "rights issue",
   "HMETD VIII"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6439b61a66_518d76d5f3.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "trja-laporkan-perubahan-kepemilikan-saham-r-hesthi-sambodo",
  "category": "Aksi Korporasi",
  "title": "TRJA: Direksi Hesthi Sambodo [Beli] Saham Jadi 0,06%",
  "deck": "R Hesthi Sambodo, anggota Direksi TRJA, melaporkan kepemilikan sahamnya naik dari nol menjadi 905.600 lembar lewat serangkaian transaksi tidak langsung sepanjang Juni-Juli 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/trja-laporkan-perubahan-kepemilikan-saham-r-hesthi-sambodo.jpg",
  "imageV": "tjnl95",
  "tags": [
   "TRJA",
   "kepemilikan saham",
   "direksi",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-7086-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-usai-destry-diajukan-calon-gubernur-bi",
  "category": "Moneter",
  "title": "Rupiah [Menguat] usai Destry Diajukan Calon Gubernur BI",
  "deck": "Rupiah ditutup menguat ke Rp17.755 setelah Presiden Prabowo mengajukan Destry Damayanti sebagai calon tunggal Gubernur BI ke DPR.",
  "date": "10 Agustus 2026",
  "image": "assets/img/rupiah-menguat-usai-destry-diajukan-calon-gubernur-bi.jpg",
  "imageV": "tjnrt1",
  "tags": [
   "rupiah",
   "Destry Damayanti",
   "Gubernur BI",
   "Bank Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458913-destry-jadi-calon-tunggal-gubernur-bi-rupiah-langsung-ditutup-menguat-ke-rp17755"
 },
 {
  "slug": "humi-rilis-koreksi-keterbukaan-informasi-dividen-tunai",
  "category": "Aksi Korporasi",
  "title": "HUMI Koreksi Dividen Tunai, [Rp0,166] per Saham FY2025",
  "deck": "HUMI mengoreksi pengumuman dividen 31 Juli lalu, menegaskan total dividen tunai Rp3 miliar atau Rp0,166 per saham untuk tahun buku 2025, dibayar 28 Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/humi-rilis-koreksi-keterbukaan-informasi-dividen-tunai.jpg",
  "imageV": "tjnl9u",
  "tags": [
   "HUMI",
   "dividen tunai",
   "koreksi keterbukaan informasi",
   "RUPST"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f6fa0efed0_ad447128ff.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "padi-laporkan-ringkasan-hasil-rupslb-ke-bei",
  "category": "Aksi Korporasi",
  "title": "RUPSLB PADI Tak Capai [Kuorum], Agenda Pengendali Tertunda",
  "deck": "RUPSLB PADI pada 7 Agustus 2026 hanya dihadiri 25,45% pemegang saham sehingga gagal mengesahkan status pengendali Djoko Joelijanto dan perubahan susunan direksi.",
  "date": "10 Agustus 2026",
  "image": "assets/img/padi-laporkan-ringkasan-hasil-rupslb-ke-bei.jpg",
  "imageV": "tjnlan",
  "tags": [
   "PADI",
   "RUPSLB",
   "kuorum",
   "pengendali"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/8247b10b99_f3ae5590fd.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heli-avia-nusantara-khatulistiwa-laporkan-perubahan-kepemilikan",
  "category": "Aksi Korporasi",
  "title": "HELI: Pemegang Saham [Tambah] Porsi Jadi 8,43%",
  "deck": "Avia Nusantara Khatulistiwa menambah kepemilikan di HELI dari 7,74 persen menjadi 8,43 persen lewat rangkaian pembelian sejak akhir Juni hingga awal Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/heli-avia-nusantara-khatulistiwa-laporkan-perubahan-kepemilikan.jpg",
  "imageV": "tjnlbf",
  "tags": [
   "HELI",
   "kepemilikan saham",
   "pemegang saham substansial",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-6322-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "budi-perubahan-kepemilikan-saham-oleh-budi-delta-swakarya",
  "category": "Aksi Korporasi",
  "title": "BUDI: [Pemegang Saham] Kuasai 37,65% dari 33,11%",
  "deck": "PT Budi Delta Swakarya membeli 203,7 juta saham BUDI seharga Rp210 per lembar pada 5 Agustus 2026, mengerek hak suaranya dari 33,11% menjadi 37,65%.",
  "date": "10 Agustus 2026",
  "image": "assets/img/budi-perubahan-kepemilikan-saham-oleh-budi-delta-swakarya.jpg",
  "imageV": "tjnlc5",
  "tags": [
   "BUDI",
   "kepemilikan saham",
   "pemegang saham",
   "OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-9747-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "okas-bumi-arsana-mulia-lapor-perubahan-kepemilikan-saham",
  "category": "Aksi Korporasi",
  "title": "OKAS: Bumi Arsana Mulia Kuasai [25,60%] Hak Suara Baru",
  "deck": "PT Bumi Arsana Mulia melaporkan kepemilikan baru 607,52 juta saham OKAS setara 25,60% hak suara, dari sebelumnya nihil, senilai Rp73,51 miliar pada 4 Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/okas-bumi-arsana-mulia-lapor-perubahan-kepemilikan-saham.jpg",
  "imageV": "tjnlcn",
  "tags": [
   "OKAS",
   "Ancora Indonesia Resources",
   "kepemilikan saham",
   "hak suara"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-7997-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "rupiah-menguat-usai-destry-diusulkan-jadi-gubernur-bi",
  "category": "Moneter",
  "title": "Rupiah [Menguat] Usai Destry Diusulkan Jadi Gubernur BI",
  "deck": "Pasar merespons positif pencalonan tunggal Destry Damayanti sebagai Gubernur BI, rupiah menguat ditopang data ekonomi domestik yang masih solid.",
  "date": "10 Agustus 2026",
  "image": "assets/img/rupiah-menguat-usai-destry-diusulkan-jadi-gubernur-bi.jpg",
  "imageV": "tjnrt2",
  "tags": [
   "Gubernur BI",
   "Destry Damayanti",
   "Bank Indonesia",
   "Rupiah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458908-pasar-sambut-positif-supres-pencalonan-tunggal-destry-damayanti-sebagai-gubernur-bi"
 },
 {
  "slug": "excl-kupon-sukuk-ijarah-naik-usai-pemangkasan-rating-fitch",
  "category": "Aksi Korporasi",
  "title": "EXCL: Kupon Sukuk Ijarah Naik usai [Pemangkasan] Rating Fitch",
  "deck": "XLSMART (EXCL) membayar Ijarah Fee Sukuk Seri E senilai Rp672,1 juta pada 10 Agustus 2026, naik 0,34 persen menyusul penurunan peringkat dari Fitch.",
  "date": "10 Agustus 2026",
  "image": "assets/img/excl-kupon-sukuk-ijarah-naik-usai-pemangkasan-rating-fitch.jpg",
  "imageV": "tjnldb",
  "tags": [
   "EXCL",
   "Sukuk Ijarah",
   "Fitch Rating",
   "obligasi korporasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/936aa46c3f_b6c001f7ef.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "excl-sampaikan-informasi-kupon-rincian-belum-terbaca",
  "category": "Aksi Korporasi",
  "title": "EXCL Bayar Kupon Obligasi, Bunga Naik usai Peringkat [Turun]",
  "deck": "XLSMART Telecom (EXCL) membayar kupon ke-30 Obligasi Berkelanjutan I Tahap II Seri D senilai Rp2,4 miliar pada 10 Agustus 2026, dengan bunga naik jadi 10,34 persen akibat penurunan peringkat Fitch.",
  "date": "10 Agustus 2026",
  "image": "assets/img/excl-sampaikan-informasi-kupon-rincian-belum-terbaca.jpg",
  "imageV": "tjnldt",
  "tags": [
   "EXCL",
   "Obligasi",
   "Kupon",
   "Fitch Ratings"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/5a6ec691a9_1e6cc8f433.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bri-pimpin-himbara-di-danantara-housing-expo-2026",
  "category": "Perbankan",
  "title": "BRI Pimpin Himbara di [Danantara] Housing Expo 2026",
  "deck": "Danantara menggelar Housing Expo 2026 di PIK akhir Agustus, dengan BRI sebagai koordinator Himbara untuk memperluas akses KPR bagi masyarakat.",
  "date": "10 Agustus 2026",
  "image": "assets/img/bri-pimpin-himbara-di-danantara-housing-expo-2026.jpg",
  "imageV": "tjnrt3",
  "tags": [
   "Danantara",
   "BRI",
   "Himbara",
   "KPR"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458899-danantara-housing-expo-2026-bri-pimpin-kolaborasi-himbara-perkuat-pembiayaan-perumahan"
 },
 {
  "slug": "sola-sampaikan-penjelasan-volatilitas-transaksi-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "SOLA Tegaskan Tak Ada [Fakta Material] di Balik Volatilitas Saham",
  "deck": "SOLA merespons permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material baru maupun rencana aksi korporasi dalam waktu dekat.",
  "date": "10 Agustus 2026",
  "image": "assets/img/sola-sampaikan-penjelasan-volatilitas-transaksi-ke-bursa.jpg",
  "imageV": "tjnlej",
  "tags": [
   "SOLA",
   "volatilitas saham",
   "keterbukaan informasi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/a7228e48dc_4daf43defe.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "sola-jawab-permintaan-bei-soal-volatilitas-transaksi-saham",
  "category": "Aksi Korporasi",
  "title": "SOLA Jawab BEI, Tegaskan Tak Ada Informasi [Material]",
  "deck": "PT Xolare RCR Energy Tbk menjawab permintaan penjelasan BEI atas volatilitas transaksi sahamnya, menyatakan tidak ada informasi material yang belum diungkap.",
  "date": "10 Agustus 2026",
  "image": "assets/img/sola-jawab-permintaan-bei-soal-volatilitas-transaksi-saham.jpg",
  "imageV": "tjnlff",
  "tags": [
   "SOLA",
   "keterbukaan informasi",
   "BEI",
   "volatilitas saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/bdecc46763_99b1952523.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "akpi-perubahan-kepemilikan-saham-oleh-henry-liem",
  "category": "Aksi Korporasi",
  "title": "AKPI: Komisaris Henry Liem [Jual] 500 Lembar Saham",
  "deck": "Dewan Komisaris AKPI, Henry Liem, melepas 500 lembar saham pada 7 Agustus 2026. Hak suaranya tetap di 1,8678 persen karena porsi yang dijual sangat kecil.",
  "date": "10 Agustus 2026",
  "image": "assets/img/akpi-perubahan-kepemilikan-saham-oleh-henry-liem.jpg",
  "imageV": "tjnlgw",
  "tags": [
   "AKPI",
   "kepemilikan saham",
   "komisaris",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-7937-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "airlangga-optimistis-etf-emas-ri-salip-india-singapura",
  "category": "Pasar Modal",
  "title": "Airlangga Optimistis ETF Emas RI [Salip] India-Singapura",
  "deck": "Menko Airlangga menilai kepemilikan emas 153 ton senilai US$20 miliar di Pegadaian bisa mempercepat ETF emas RI menyalip India dan Singapura.",
  "date": "10 Agustus 2026",
  "image": "assets/img/airlangga-optimistis-etf-emas-ri-salip-india-singapura.jpg",
  "imageV": "tjnrt4",
  "tags": [
   "ETF emas",
   "Airlangga Hartarto",
   "Pegadaian",
   "pasar modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458859-airlangga-optimistis-etf-emas-ri-bisa-salip-india-dan-singapura-ada-153-ton-emas-senilai-us20-miliar"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-29-persen-di-kuartal-ii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi RI Tumbuh [5,29] Persen di Kuartal II 2026",
  "deck": "Menko Airlangga menyebut pertumbuhan ekonomi kuartal II 2026 yang di atas rata-rata global menjadi modal penting menjaga kepercayaan investor pasar modal.",
  "date": "10 Agustus 2026",
  "image": "assets/img/ekonomi-ri-tumbuh-5-29-persen-di-kuartal-ii-2026.jpg",
  "imageV": "tjnrt4",
  "tags": [
   "pertumbuhan ekonomi",
   "pasar modal",
   "Airlangga Hartarto",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458848-ekonomi-ri-tumbuh-529-persen-airlangga-investor-pasar-modal-tetap-penuh-senyum"
 },
 {
  "slug": "kdtn-laporan-perubahan-kepemilikan-saham-putrasakti-mandiri",
  "category": "Aksi Korporasi",
  "title": "KDTN: Putrasakti Mandiri [Restrukturisasi] Kepemilikan Saham",
  "deck": "Putrasakti Mandiri melepas 3 juta saham KDTN senilai Rp1,32 miliar pada 7 Agustus 2026, hak suara turun tipis dari 35,59% menjadi 35,36% untuk restrukturisasi internal grup usaha.",
  "date": "10 Agustus 2026",
  "image": "assets/img/kdtn-laporan-perubahan-kepemilikan-saham-putrasakti-mandiri.jpg",
  "imageV": "tjnlhp",
  "tags": [
   "KDTN",
   "kepemilikan saham",
   "OJK",
   "restrukturisasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-6660-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "poll-sampaikan-ralat-laporan-keuangan-interim",
  "category": "Aksi Korporasi",
  "title": "POLL Sampaikan [Ralat] Laporan Keuangan Interim Semester I 2026",
  "deck": "Pollux Properties Indonesia (POLL) merevisi laporan keuangan interim semester I 2026 yang sebelumnya sudah disampaikan ke OJK dan BEI, tanpa merinci pos yang diralat.",
  "date": "10 Agustus 2026",
  "image": "assets/img/poll-sampaikan-ralat-laporan-keuangan-interim.jpg",
  "imageV": "tjnlim",
  "tags": [
   "POLL",
   "Laporan Keuangan",
   "Ralat Laporan",
   "Pemantauan Khusus"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260810120428-64177-0/FinancialStatement-2026-II-POLL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "heal-laporan-kepemilikan-saham-yustinus-immanuel-herawan",
  "category": "Aksi Korporasi",
  "title": "HEAL: Direksi [Beli] Tambahan 50.000 Saham Perseroan",
  "deck": "Direksi HEAL, Yustinus Immanuel Herawan, menambah kepemilikan saham dari 80.000 menjadi 130.000 lembar lewat pembelian Rp785 per saham pada 6 Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/heal-laporan-kepemilikan-saham-yustinus-immanuel-herawan.jpg",
  "imageV": "tjnlj8",
  "tags": [
   "HEAL",
   "kepemilikan saham",
   "direksi",
   "Medikaloka Hermina"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-8296-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "nick-nicholas-santoso-lapor-perubahan-kepemilikan-saham",
  "category": "Aksi Korporasi",
  "title": "NICK: Direksi Nicholas Santoso [Beli] 81.600 Saham Charnic Capital",
  "deck": "Direksi Charnic Capital Tbk (NICK), Nicholas Santoso, melaporkan pembelian 81.600 saham perusahaan pada 7 Agustus 2026, menaikkan hak suaranya dari 0 persen menjadi 0,01 persen.",
  "date": "10 Agustus 2026",
  "image": "assets/img/nick-nicholas-santoso-lapor-perubahan-kepemilikan-saham.jpg",
  "imageV": "tjnlk0",
  "tags": [
   "NICK",
   "Charnic Capital",
   "kepemilikan direksi",
   "laporan OJK"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_KSEI/LK-10082026-0213-00.pdf-0.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "moli-sampaikan-koreksi-laporan-keuangan-interim",
  "category": "Aksi Korporasi",
  "title": "MOLI Rilis [Koreksi] Laporan Keuangan Interim Semester I 2026",
  "deck": "MOLI menyampaikan koreksi laporan keuangan interim per 30 Juni 2026, dengan kas dan setara kas naik dari Rp68,80 miliar menjadi Rp149,13 miliar.",
  "date": "10 Agustus 2026",
  "image": "assets/img/moli-sampaikan-koreksi-laporan-keuangan-interim.jpg",
  "imageV": "tjnlkp",
  "tags": [
   "MOLI",
   "laporan keuangan",
   "koreksi",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260810115312-64165-0/FinancialStatement-2026-II-MOLI.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-sampaikan-term-sheet-penawaran-structured-warrant",
  "category": "Aksi Korporasi",
  "title": "DR Sampaikan Term Sheet [Waran Terstruktur] 18 Seri Baru",
  "deck": "RHB Sekuritas Indonesia (DR) menyampaikan term sheet penawaran umum 18 seri call warrant atas saham-saham acuan, jatuh tempo November 2026 dan Maret 2027.",
  "date": "10 Agustus 2026",
  "image": "assets/img/dr-sampaikan-term-sheet-penawaran-structured-warrant.jpg",
  "imageV": "tjnll7",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "call warrant"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/6dc6396edf_2094d9aefc.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "dr-rilis-keterbukaan-informasi-penerbitan-waran-ke-41",
  "category": "Aksi Korporasi",
  "title": "DR Tawarkan [Waran Terstruktur] Seri ke-41 pada 12-13 Agustus",
  "deck": "RHB Sekuritas Indonesia (DR) menyampaikan keterbukaan informasi penerbitan waran terstruktur seri ke-41, dengan masa penawaran 12-13 Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/dr-rilis-keterbukaan-informasi-penerbitan-waran-ke-41.jpg",
  "imageV": "tjnllx",
  "tags": [
   "DR",
   "waran terstruktur",
   "RHB Sekuritas",
   "keterbukaan informasi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f77744073f_df234a669e.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "poll-sampaikan-koreksi-laporan-keuangan-interim",
  "category": "Aksi Korporasi",
  "title": "POLL Rilis [Koreksi] Laporan Keuangan Interim Semester I 2026",
  "deck": "PT Pollux Properties Indonesia Tbk mengoreksi laporan keuangan interim tidak diaudit untuk periode enam bulan yang berakhir 30 Juni 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/poll-sampaikan-koreksi-laporan-keuangan-interim.jpg",
  "imageV": "tjnln4",
  "tags": [
   "POLL",
   "Pollux Properties",
   "laporan keuangan",
   "koreksi"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/20260810112624-64175-0/FinancialStatement-2026-II-POLL.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "prabowo-pantau-b50-perintahkan-pangkas-layer-bumn",
  "category": "Energi",
  "title": "Presiden Prabowo Pantau B50, Perintahkan [Pangkas] Layer BUMN",
  "deck": "Presiden terima laporan progres program B50 dan kesiapan bioetanol dari Pertamina, sekaligus perintahkan pemangkasan lapisan organisasi BUMN.",
  "date": "10 Agustus 2026",
  "image": "assets/img/prabowo-pantau-b50-perintahkan-pangkas-layer-bumn.jpg",
  "imageV": "tjnrt5",
  "tags": [
   "B50",
   "BUMN",
   "Pertamina",
   "Bioetanol"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458834-terima-laporan-b50-prabowo-langsung-perintahkan-pangkas-layer-bumn"
 },
 {
  "slug": "hd-sampaikan-term-sheet-structured-warrant-ke-bei",
  "category": "Aksi Korporasi",
  "title": "HD Ajukan [Term Sheet] Waran Terstruktur Saham BBCA",
  "deck": "KGI Sekuritas Indonesia (HD) menyampaikan term sheet penawaran umum call warrant BBCAHDCJ7A dengan saham BBCA sebagai aset dasar, jatuh tempo 23 April 2027.",
  "date": "10 Agustus 2026",
  "image": "assets/img/hd-sampaikan-term-sheet-structured-warrant-ke-bei.jpg",
  "imageV": "tjnloo",
  "tags": [
   "HD",
   "KGI Sekuritas",
   "waran terstruktur",
   "BBCA"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/0e4e810e76_44441afe89.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "harga-emas-antam-bertahan-di-rp2-690-000-per-gram",
  "category": "Pasar Modal",
  "title": "Harga [Emas] Antam Bertahan di Rp2.690.000 per Gram",
  "deck": "Harga emas Antam pada 10 Agustus 2026 tidak berubah dari hari sebelumnya, bertahan di Rp2.690.000 per gram, sementara harga buyback tetap di Rp2.511.000 per gram.",
  "date": "10 Agustus 2026",
  "image": "assets/img/harga-emas-antam-bertahan-di-rp2-690-000-per-gram.jpg",
  "imageV": "tjnrt6",
  "tags": [
   "emas",
   "harga emas",
   "Antam",
   "investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458831-harga-emas-antam-hari-ini-10-agustus-2026-terpantau-stabil-tetap-di-angka-rp2690000-per-gram"
 },
 {
  "slug": "harga-beras-dan-cabai-naik-serentak-awal-pekan",
  "category": "Makroekonomi",
  "title": "Harga Beras dan Cabai [Naik] Serentak Awal Pekan",
  "deck": "Data PIHPS Bank Indonesia mencatat seluruh jenis beras dan komoditas cabai naik pada Senin, sementara harga bawang justru melandai.",
  "date": "10 Agustus 2026",
  "image": "assets/img/harga-beras-dan-cabai-naik-serentak-awal-pekan.jpg",
  "imageV": "tjnrt6",
  "tags": [
   "harga pangan",
   "beras",
   "cabai",
   "PIHPS"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458830-harga-pangan-hari-ini-10-agustus-2026-beras-kompak-naik-cabai-rawit-merah-melejit"
 },
 {
  "slug": "rupiah-menguat-ke-rp17-810-cadangan-devisa-terjaga",
  "category": "Moneter",
  "title": "[Rupiah] Menguat ke Rp17.810, Cadangan Devisa Terjaga",
  "deck": "Rupiah menguat tipis ke Rp17.810 per dolar AS pada awal pekan, didukung cadangan devisa Juli yang tetap terjaga di US$145,3 miliar di tengah ketidakpastian global.",
  "date": "10 Agustus 2026",
  "image": "assets/img/rupiah-menguat-ke-rp17-810-cadangan-devisa-terjaga.jpg",
  "imageV": "tjnrt7",
  "tags": [
   "rupiah",
   "dolar AS",
   "cadangan devisa",
   "Bank Indonesia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458827-rupiah-menguat-ke-rp17810-per-dolar-as-dipengaruhi-cadangan-devisa-juli-dan-ketegangan-iran-as-di-timur-tengah"
 },
 {
  "slug": "wisl-sampaikan-laporan-jatuh-tempo-obligasi-ke-bei",
  "category": "Aksi Korporasi",
  "title": "Obligasi WISL Rp845,5 Miliar [Jatuh Tempo], Berhenti Diperdagangkan",
  "deck": "BEI mengumumkan Obligasi II WISL Tahun 2023 Seri B senilai Rp845,5 miliar resmi jatuh tempo pada 8 Agustus 2026 dan tidak lagi tercatat di bursa mulai 10 Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/wisl-sampaikan-laporan-jatuh-tempo-obligasi-ke-bei.jpg",
  "imageV": "tjnlv1",
  "tags": [
   "WISL",
   "obligasi",
   "jatuh tempo",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/f25535d28f_7bbac8f397.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "humi-catatkan-tambahan-saham-baru-di-bei",
  "category": "Aksi Korporasi",
  "title": "HUMI Catatkan [Konversi] Waran, Saham Beredar Jadi 18,06 Miliar",
  "deck": "Bursa mencatat konversi 297.862 waran HUMI-W menjadi saham baru per 10 Agustus 2026, sehingga total saham beredar HUMI naik menjadi 18.063.691.451 lembar.",
  "date": "10 Agustus 2026",
  "image": "assets/img/humi-catatkan-tambahan-saham-baru-di-bei.jpg",
  "imageV": "tjnlvj",
  "tags": [
   "HUMI",
   "waran",
   "dilusi saham",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/e33a853d79_ffed42e537.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "kaef-laporkan-perubahan-nama-emiten-ke-bursa",
  "category": "Aksi Korporasi",
  "title": "KAEF Resmi [Ganti Nama] jadi PT Kimia Farma (Persero) Tbk",
  "deck": "BEI mengumumkan perubahan nama tercatat emiten KAEF dari Kimia Farma Tbk. menjadi PT Kimia Farma (Persero) Tbk, efektif 10 Agustus 2026.",
  "date": "10 Agustus 2026",
  "image": "assets/img/kaef-laporkan-perubahan-nama-emiten-ke-bursa.jpg",
  "imageV": "tjnlw8",
  "tags": [
   "KAEF",
   "Kimia Farma",
   "perubahan nama emiten",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/af0ff5b4da_ab7494f874.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pjhb-catatkan-saham-baru-di-bursa-efek-indonesia",
  "category": "Aksi Korporasi",
  "title": "PJHB Catat [Konversi] Waran, Saham Beredar Jadi 1,92 Miliar",
  "deck": "BEI mencatat konversi 3.105 waran PJHB-W menjadi saham baru pada 10 Agustus 2026. Sisa 239,28 juta waran berpotensi menambah saham beredar di kemudian hari.",
  "date": "10 Agustus 2026",
  "image": "assets/img/pjhb-catatkan-saham-baru-di-bursa-efek-indonesia.jpg",
  "imageV": "tjnlwq",
  "tags": [
   "PJHB",
   "waran",
   "konversi waran",
   "BEI"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/537545357d_64a360d59d.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "pack-catatkan-saham-baru-di-bursa-efek-indonesia",
  "category": "Aksi Korporasi",
  "title": "PACK Catatkan 441,48 Juta Saham Baru dari [Konversi] Obligasi",
  "deck": "BEI mencatatkan 441.482.500 saham baru PACK dari konversi Obligasi Wajib Konversi, menambah total saham beredar menjadi 34.099.757.975 lembar.",
  "date": "10 Agustus 2026",
  "image": "assets/img/pack-catatkan-saham-baru-di-bursa-efek-indonesia.jpg",
  "imageV": "tjnlxj",
  "tags": [
   "PACK",
   "konversi obligasi",
   "pencatatan saham baru",
   "dilusi saham"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202608/397f7d6139_8843df58bb.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "investor-saham-ri-tembus-10-05-juta-sid-di-2026",
  "category": "Pasar Modal",
  "title": "Investor Saham RI [Tembus] 10,05 Juta SID di 2026",
  "deck": "BEI mencatat jumlah investor saham naik 16,83 persen sepanjang tahun berjalan, seiring upaya bursa memperluas basis pemodal domestik.",
  "date": "9 Agustus 2026",
  "image": "assets/img/investor-saham-ri-tembus-10-05-juta-sid-di-2026.jpg",
  "imageV": "tjnrt7",
  "tags": [
   "BEI",
   "investor saham",
   "SID",
   "pasar modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458750-investor-saham-tembus-1005-juta-sid-bei-catat-pertumbuhan-1683-pada-2026"
 },
 {
  "slug": "bi-harga-properti-residensial-naik-tipis-di-triwulan-ii-2026",
  "category": "Makroekonomi",
  "title": "BI: Harga Properti Residensial [Naik] Tipis di Triwulan II 2026",
  "deck": "Bank Indonesia mencatat kenaikan harga properti residensial 0,69 persen secara tahunan pada triwulan II 2026, dengan Pekanbaru mencatat lonjakan tertinggi.",
  "date": "9 Agustus 2026",
  "image": "assets/img/bi-harga-properti-residensial-naik-tipis-di-triwulan-ii-2026.jpg",
  "imageV": "tjnrt8",
  "tags": [
   "properti",
   "Bank Indonesia",
   "IHPR",
   "Pekanbaru"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458739-bi-ungkap-harga-properti-di-indonesia-naik-di-triwulan-ii-2026-pekanbaru-jadi-wilayah-paling-mencolok"
 },
 {
  "slug": "ekonomi-karbon-bergeser-peluang-besar-bagi-indonesia",
  "category": "Makroekonomi",
  "title": "Ekonomi [Karbon] Bergeser, Peluang Besar Bagi Indonesia",
  "deck": "Pergeseran ekonomi berbasis karbon membuka peluang bagi Indonesia mengubah kekayaan alamnya menjadi kekuatan ekonomi baru.",
  "date": "9 Agustus 2026",
  "image": "assets/img/ekonomi-karbon-bergeser-peluang-besar-bagi-indonesia.jpg",
  "imageV": "tjnrt9",
  "tags": [
   "ekonomi karbon",
   "ekonomi hijau",
   "Heppy Trenggono",
   "Universitas Brawijaya"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458734-ekonomi-karbon-ubah-arah-bisnis-global-indonesia-dinilai-punya-peluang-yang-menjanjikan"
 },
 {
  "slug": "cash-sampaikan-koreksi-laporan-keuangan-tahunan",
  "category": "Aksi Korporasi",
  "title": "CASH Sampaikan [Koreksi] Laporan Keuangan Tahunan 2025",
  "deck": "PT Cashlez Worldwide Indonesia Tbk (CASH) menyampaikan koreksi laporan keuangan tahunan 2025 ke BEI, kas dan setara kas naik jadi Rp71,90 miliar dari Rp17,03 miliar.",
  "date": "9 Agustus 2026",
  "image": "assets/img/cash-sampaikan-koreksi-laporan-keuangan-tahunan.jpg",
  "imageV": "tjnlyc",
  "tags": [
   "CASH",
   "Cashlez Worldwide Indonesia",
   "laporan keuangan tahunan",
   "koreksi laporan"
  ],
  "sourceUrl": "https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202508/20260810111409-64172-0/FinancialStatement-2025-Tahunan-CASH.pdf",
  "sourceLabel": "IDX"
 },
 {
  "slug": "bpjph-perketat-sanksi-pelanggaran-jaminan-produk-halal",
  "category": "Industri",
  "title": "BPJPH Perketat [Sanksi] Pelanggaran Jaminan Produk Halal",
  "deck": "BPJPH menerbitkan aturan baru berisi sanksi administratif, dari teguran hingga pencabutan sertifikat, bagi pelanggar jaminan produk halal.",
  "date": "9 Agustus 2026",
  "image": "assets/img/bpjph-perketat-sanksi-pelanggaran-jaminan-produk-halal.jpg",
  "imageV": "tjnrta",
  "tags": [
   "BPJPH",
   "produk halal",
   "sanksi administratif",
   "sertifikasi halal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458722-pelaku-usaha-wajib-catat-aturan-baru-bpjph-pelanggar-jaminan-produk-halal-bisa-kena-sederet-sanksi"
 },
 {
  "slug": "pertamina-dampingi-nelayan-batam-pendapatan-naik-40",
  "category": "BUMN",
  "title": "Pertamina Dampingi Nelayan Batam, Pendapatan [Naik] 40%",
  "deck": "Pertamina Patra Niaga memperluas pendampingan usaha hasil laut di Batam, mendorong pendapatan kelompok nelayan dan UMKM perempuan naik signifikan.",
  "date": "9 Agustus 2026",
  "image": "assets/img/pertamina-dampingi-nelayan-batam-pendapatan-naik-40.jpg",
  "imageV": "tjnrtb",
  "tags": [
   "Pertamina Patra Niaga",
   "ekonomi pesisir",
   "UMKM perikanan",
   "Batam"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458720-pacu-ekonomi-pesisir-pertamina-patra-niaga-dampingi-pengembangan-usaha-hasil-laut-di-batam"
 },
 {
  "slug": "ri-uea-perkuat-kerja-sama-dagang-lewat-iuae-cepa",
  "category": "Global",
  "title": "RI-UEA Perkuat [Kerja Sama] Dagang Lewat IUAE-CEPA",
  "deck": "Indonesia dan UEA membahas optimalisasi IUAE-CEPA di tahun ketiga implementasinya, termasuk skema tarif, transshipment, dan kasus antidumping.",
  "date": "9 Agustus 2026",
  "image": "assets/img/ri-uea-perkuat-kerja-sama-dagang-lewat-iuae-cepa.jpg",
  "imageV": "tjnrtc",
  "tags": [
   "IUAE-CEPA",
   "Indonesia-UEA",
   "Perdagangan Internasional",
   "Budi Santoso"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458708-ri-uea-bidik-lompatan-dagang-transaksi-tembus-us314-miliar-di-semester-i-2026"
 },
 {
  "slug": "harga-minyak-berpeluang-tembus-us-83-di-tengah-ketegangan-hormuz",
  "category": "Energi",
  "title": "Harga Minyak Berpeluang Tembus [US$83] di Tengah Ketegangan Hormuz",
  "deck": "Pengamat memperkirakan harga minyak mentah bergerak di kisaran US$65,70 hingga US$83,30 per barel pekan ini, seiring negosiasi Iran dan Oman soal Selat Hormuz yang belum tuntas.",
  "date": "9 Agustus 2026",
  "image": "assets/img/harga-minyak-berpeluang-tembus-us-83-di-tengah-ketegangan-hormuz.jpg",
  "imageV": "tjnrtc",
  "tags": [
   "harga minyak",
   "selat hormuz",
   "Iran",
   "Oman"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458707-iran-oman-rebutan-selat-hormuz-harga-minyak-diprediksi-tembus-us83-per-barel"
 },
 {
  "slug": "mantri-bri-tembus-ombak-jaga-ekonomi-warga-wakatobi",
  "category": "Perbankan",
  "title": "Mantri BRI Tembus Ombak Jaga [Ekonomi] Warga Wakatobi",
  "deck": "Mantri BRI di Wangi-Wangi, Wakatobi, menembus laut demi melayani sembilan desa di Pulau Kaledupa dan menjaga akses keuangan warga.",
  "date": "9 Agustus 2026",
  "image": "assets/img/mantri-bri-tembus-ombak-jaga-ekonomi-warga-wakatobi.jpg",
  "imageV": "tjnrtd",
  "tags": [
   "BRI",
   "Wakatobi",
   "inklusi keuangan",
   "ekonomi kerakyatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458705-dedikasi-mantri-bri-untuk-masyarakat-wakatobi-menjaga-roda-ekonomi-tetap-berputar-di-surga-bahari"
 },
 {
  "slug": "airlangga-tinjau-ioniq-9-di-booth-hyundai-giias-2026",
  "category": "Industri",
  "title": "Airlangga Tinjau [IONIQ 9] di Booth Hyundai GIIAS 2026",
  "deck": "Menko Airlangga Hartarto meninjau SUV listrik Hyundai IONIQ 9 yang baru diperkenalkan di GIIAS 2026, menandai penguatan tren elektrifikasi kendaraan di pasar domestik.",
  "date": "9 Agustus 2026",
  "image": "assets/img/airlangga-tinjau-ioniq-9-di-booth-hyundai-giias-2026.jpg",
  "imageV": "tjnrte",
  "tags": [
   "GIIAS 2026",
   "Hyundai",
   "IONIQ 9",
   "kendaraan listrik"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458699-menko-airlangga-kunjungi-booth-hyundai-ioniq-9-jadi-sorotan-di-giias-2026"
 },
 {
  "slug": "cadangan-devisa-ri-tembus-us-145-3-miliar-per-juli",
  "category": "Moneter",
  "title": "Cadangan Devisa RI [Tembus] US$145,3 Miliar per Juli",
  "deck": "Cadangan devisa Indonesia akhir Juli 2026 tercatat US$145,3 miliar, turun tipis dari US$145,6 miliar pada Juni, namun tetap setara 5,5 bulan pembiayaan impor.",
  "date": "9 Agustus 2026",
  "image": "assets/img/cadangan-devisa-ri-tembus-us-145-3-miliar-per-juli.jpg",
  "imageV": "tjnrtf",
  "tags": [
   "cadangan devisa",
   "Bank Indonesia",
   "nilai tukar rupiah",
   "utang luar negeri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/458696-cadangan-devisa-ri-tembus-us1453-miliar-bi-setara-pembiayaan-55-bulan-impor"
 },
 {
  "slug": "indeks-kepuasan-layanan-haji-2026-capai-83-28",
  "category": "Bisnis",
  "title": "Indeks Kepuasan Layanan Haji 2026 Capai [83,28]",
  "deck": "BPS mencatat skor kepuasan layanan haji musim 1447H/2026M sebesar 83,28, dengan layanan di ARMUZNA masih tertinggal di kategori cukup memuaskan.",
  "date": "6 Agustus 2026",
  "image": "assets/img/indeks-kepuasan-layanan-haji-2026-capai-83-28.jpg",
  "imageV": "mss9fw5i",
  "tags": [
   "haji",
   "BPS",
   "kepuasan layanan",
   "IKLHI"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2648",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "manufaktur-ri-masuk-fase-ekspansi-di-triwulan-ii-2026",
  "category": "Industri",
  "title": "Manufaktur RI Masuk Fase [Ekspansi] di Triwulan II-2026",
  "deck": "BPS mencatat Indeks Kondisi dan Prospek Bisnis Manufaktur naik ke 52,31 pada triwulan II-2026, didorong pesanan dan produksi, meski tenaga kerja dan waktu kirim masih melemah.",
  "date": "5 Agustus 2026",
  "image": "assets/img/manufaktur-ri-masuk-fase-ekspansi-di-triwulan-ii-2026.jpg",
  "imageV": "tjnm6o",
  "tags": [
   "IKBM",
   "Manufaktur",
   "BPS",
   "Triwulan II-2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2646",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "tpt-turun-ke-4-65-persen-upah-buruh-rata-rata-rp3-39-juta",
  "category": "Ketenagakerjaan",
  "title": "TPT [Turun] ke 4,65 Persen, Upah Buruh Rata-rata Rp3,39 Juta",
  "deck": "BPS mencatat Tingkat Pengangguran Terbuka turun ke 4,65 persen pada Mei 2026, sementara rata-rata upah buruh tercatat Rp3,39 juta per bulan.",
  "date": "5 Agustus 2026",
  "image": "assets/img/tpt-turun-ke-4-65-persen-upah-buruh-rata-rata-rp3-39-juta.jpg",
  "imageV": "tjnm77",
  "tags": [
   "TPT",
   "Sakernas",
   "BPS",
   "upah buruh"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2606",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "ekonomi-ri-tumbuh-5-29-persen-pada-triwulan-ii-2026",
  "category": "Makroekonomi",
  "title": "Ekonomi RI [Tumbuh] 5,29 Persen pada Triwulan II 2026",
  "deck": "BPS mencatat ekonomi Indonesia tumbuh 5,29 persen (y-on-y) pada triwulan II 2026, ditopang lonjakan konsumsi pemerintah hampir 16 persen.",
  "date": "5 Agustus 2026",
  "image": "assets/img/ekonomi-ri-tumbuh-5-29-persen-pada-triwulan-ii-2026.jpg",
  "imageV": "tjnm7w",
  "tags": [
   "PDB",
   "BPS",
   "Pertumbuhan Ekonomi",
   "Triwulan II 2026"
  ],
  "sourceUrl": "https://www.bps.go.id/id/pressrelease/2605",
  "sourceLabel": "Badan Pusat Statistik"
 },
 {
  "slug": "konsumsi-rumah-tangga-masih-menopang-92-persen-ekonomi-indonesia",
  "category": "Makroekonomi",
  "title": "Konsumsi Rumah Tangga Masih [Menopang] 92 Persen Ekonomi Indonesia",
  "deck": "Ketua Umum Kadin Anindya Bakrie menegaskan konsumsi rumah tangga dan aktivitas dunia usaha menyumbang 92 persen produk domestik bruto Indonesia.",
  "date": "1 Agustus 2026",
  "image": "assets/img/konsumsi-rumah-tangga-masih-menopang-92-persen-ekonomi-indonesia.jpg",
  "imageV": "tjnrtn",
  "tags": [
   "Kadin",
   "PDB",
   "Konsumsi Rumah Tangga"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457008-92-pdb-ri-ditopang-konsumsi-dan-dunia-usaha-anindya-bakrie-tegaskan-kadin-siap-ikut-pacu-pertumbuhan-ekonomi",
  "video": "Olhcihpm220"
 },
 {
  "slug": "pertamax-cs-turun-lagi-awal-agustus-ini-rinciannya",
  "category": "Energi",
  "title": "Pertamax Cs Turun Lagi Awal Agustus, Ini [Rinciannya]",
  "deck": "Pertamina Patra Niaga kembali menyesuaikan harga sejumlah BBM non-subsidi per 1 Agustus 2026.",
  "date": "1 Agustus 2026",
  "image": "assets/img/pertamax-cs-turun-lagi-awal-agustus-ini-rinciannya.jpg",
  "imageV": "tjnrtn",
  "tags": [
   "BBM",
   "Pertamina",
   "Energi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457073-harga-bbm-per-1-agustus-2026-pertamina-patra-niaga-turunkan-harga-pertamax"
 },
 {
  "slug": "emas-antam-dibuka-turun-rp20-ribu-per-gram-di-awal-agustus",
  "category": "Pasar Modal",
  "title": "Emas Antam Dibuka Turun [Rp20 Ribu] per Gram di Awal Agustus",
  "deck": "Harga emas batangan Antam terkoreksi di hari pertama Agustus 2026, memutus tren penguatan pekan sebelumnya.",
  "date": "1 Agustus 2026",
  "image": "assets/img/emas-antam-dibuka-turun-rp20-ribu-per-gram-di-awal-agustus.jpg",
  "imageV": "tjnrto",
  "tags": [
   "Emas Antam",
   "Komoditas",
   "Investasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457107-harga-emas-antam-di-awal-agustus-turun-rp20000-per-gram",
  "video": "lG5dhNFKi3g"
 },
 {
  "slug": "saham-telekomunikasi-jadi-incaran-analis-soroti-kebutuhan-infrastruktu",
  "category": "Pasar Modal",
  "title": "Saham Telekomunikasi Jadi Incaran, Analis Soroti Kebutuhan [Infrastruktur]",
  "deck": "Minat investor terhadap emiten telekomunikasi meningkat, namun analis mengingatkan pembangunan infrastruktur jaringan masih perlu digenjot.",
  "date": "1 Agustus 2026",
  "image": "assets/img/saham-telekomunikasi-jadi-incaran-analis-soroti-kebutuhan-infrastruktu.jpg",
  "imageV": "tjnrtp",
  "tags": [
   "Pasar Modal",
   "Telekomunikasi",
   "IHSG"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457076-saham-sektor-telekomunikasi-tarik-minat-investor-infrastruktur-perlu-ditingkatkan"
 },
 {
  "slug": "berbeda-dari-pertamina-solar-di-spbu-shell-justru-naik",
  "category": "Energi",
  "title": "Berbeda dari Pertamina, Solar di SPBU Shell Justru [Naik]",
  "deck": "Shell menaikkan harga solar per 1 Agustus 2026, berbanding terbalik dengan penyesuaian turun yang dilakukan Pertamina.",
  "date": "1 Agustus 2026",
  "image": "assets/img/berbeda-dari-pertamina-solar-di-spbu-shell-justru-naik.jpg",
  "imageV": "tjnrtp",
  "tags": [
   "BBM",
   "Shell",
   "Solar"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457113-harga-bbm-jenis-solar-di-spbu-shell-resmi-naik-per-1-agustus-2026"
 },
 {
  "slug": "bgn-siap-jalankan-putusan-mk-skema-anggaran-mbg-dibahas-kemenkeu",
  "category": "Makroekonomi",
  "title": "BGN Siap Jalankan Putusan MK, Skema Anggaran MBG Dibahas [Kemenkeu]",
  "deck": "Kepala BGN menyebut skema anggaran program Makan Bergizi Gratis pascaputusan MK akan dibahas bersama Kementerian Keuangan.",
  "date": "1 Agustus 2026",
  "image": "assets/img/bgn-siap-jalankan-putusan-mk-skema-anggaran-mbg-dibahas-kemenkeu.jpg",
  "imageV": "tjnrtq",
  "tags": [
   "MBG",
   "BGN",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457072-bgn-tegaskan-siap-laksanakan-putusan-mk-soal-skema-anggaran-bakal-dibahas-kemenkeu",
  "video": "rt6rcaFjEP4"
 },
 {
  "slug": "transformasi-garuda-group-dipercepat-citilink-tambah-armada",
  "category": "BUMN",
  "title": "Transformasi Garuda Group Dipercepat, Citilink Tambah [Armada]",
  "deck": "Danantara mendorong percepatan transformasi bisnis Garuda Indonesia Group. Citilink catat 43 armada hingga akhir semester I 2026.",
  "date": "31 Juli 2026",
  "image": "assets/img/transformasi-garuda-group-dipercepat-citilink-tambah-armada.jpg",
  "imageV": "tjnrtr",
  "tags": [
   "BUMN",
   "Danantara",
   "Penerbangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456895-danantara-percepat-transformasi-garuda-indonesia-group-citilink-operasikan-43-armada-hingga-akhir-semester-i-2026"
 },
 {
  "slug": "pajak-umkm-online-bakal-turun-dari-20-ke-8-persen",
  "category": "UMKM",
  "title": "Pajak UMKM Online Bakal Turun dari 20 ke [8] Persen",
  "deck": "Pemerintah tengah memproses penurunan beban pajak bagi pelaku UMKM yang berjualan lewat platform digital.",
  "date": "31 Juli 2026",
  "image": "assets/img/pajak-umkm-online-bakal-turun-dari-20-ke-8-persen.jpg",
  "imageV": "tjnrts",
  "tags": [
   "UMKM",
   "Pajak",
   "Ekonomi Digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456849-istri-menteri-umkm-sebut-pajak-umkm-online-sedang-diproses-turun-dari-20-ke-8-persen-kapan-realisasinya"
 },
 {
  "slug": "menuju-b50-tata-kelola-biodiesel-dinilai-jadi-pekerjaan-rumah",
  "category": "Energi",
  "title": "Menuju B50, Tata Kelola Biodiesel Dinilai Jadi [Pekerjaan Rumah]",
  "deck": "Penerapan campuran biodiesel 50 persen dinilai butuh penguatan regulasi agar memberi kepastian bagi pelaku industri.",
  "date": "31 Juli 2026",
  "image": "assets/img/menuju-b50-tata-kelola-biodiesel-dinilai-jadi-pekerjaan-rumah.jpg",
  "imageV": "tjnrts",
  "tags": [
   "Biodiesel",
   "Energi",
   "Sawit"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457067-implementasi-b50-dinilai-perlu-didukung-tata-kelola-biodiesel-yang-kuat"
 },
 {
  "slug": "bumi-resources-buka-kinerja-semester-i-batu-bara-masih-jadi-andalan",
  "category": "Pasar Modal",
  "title": "Bumi Resources Buka Kinerja [Semester I], Batu Bara Masih Jadi Andalan",
  "deck": "Eksportir batu bara termal terbesar dunia asal Indonesia ini merilis laporan keuangan belum diaudit untuk paruh pertama 2026.",
  "date": "31 Juli 2026",
  "image": "assets/img/bumi-resources-buka-kinerja-semester-i-batu-bara-masih-jadi-andalan.jpg",
  "imageV": "tjnrtt",
  "tags": [
   "Batu Bara",
   "Emiten",
   "Komoditas"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457054-bumi-resources-umumkan-kinerja-keuangan-semester-i-2026"
 },
 {
  "slug": "telkom-catat-pertumbuhan-solid-di-paruh-pertama-2026",
  "category": "BUMN",
  "title": "Telkom Catat Pertumbuhan [Solid] di Paruh Pertama 2026",
  "deck": "Pendapatan, EBITDA, dan laba bersih normalisasi Telkom tumbuh kuat seiring akselerasi transformasi di bawah Danantara.",
  "date": "31 Juli 2026",
  "image": "assets/img/telkom-catat-pertumbuhan-solid-di-paruh-pertama-2026.jpg",
  "imageV": "tjnrtu",
  "tags": [
   "Telkom",
   "BUMN",
   "Danantara"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457041-akselerasi-transformasi-danantara-tlkm-30-pendapatan-ebitda-dan-laba-bersih-normalisasi-telkom-tumbuh-kuat-di-paruh-pertama-2026"
 },
 {
  "slug": "satu-terminal-ini-menjaga-40-persen-pasokan-lpg-nasional",
  "category": "Energi",
  "title": "Satu Terminal Ini Menjaga [40 Persen] Pasokan LPG Nasional",
  "deck": "Terminal LPG Tanjung Sekong disebut memegang peran krusial sebagai infrastruktur strategis penjaga stabilitas energi nasional.",
  "date": "31 Juli 2026",
  "image": "assets/img/satu-terminal-ini-menjaga-40-persen-pasokan-lpg-nasional.jpg",
  "imageV": "tjnrtu",
  "tags": [
   "LPG",
   "Pertamina",
   "Infrastruktur"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457028-terminal-lpg-tanjung-sekong-pegang-peranan-jaga-pasokan-40-persen-kebutuhan-lpg-nasional"
 },
 {
  "slug": "bulog-perketat-pantauan-harga-dan-mutu-beras",
  "category": "Makroekonomi",
  "title": "Bulog Perketat Pantauan Harga dan [Mutu] Beras",
  "deck": "Direktur Utama Bulog menekankan pentingnya edukasi mutu beras agar konsumen mendapat produk yang sesuai label dan harga.",
  "date": "31 Juli 2026",
  "image": "assets/img/bulog-perketat-pantauan-harga-dan-mutu-beras.jpg",
  "imageV": "tjnrtv",
  "tags": [
   "Bulog",
   "Pangan",
   "Inflasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457020-pantau-harga-dan-edukasi-soal-mutu-beras-bulog-pastikan-masyarakat-mendapatkan-informasi-tepat"
 },
 {
  "slug": "menyeberang-selat-demi-layani-nasabah-cerita-mantri-bri-di-pulau-seram",
  "category": "Perbankan",
  "title": "Menyeberang Selat demi Layani Nasabah: Cerita Mantri BRI di [Pulau Seram]",
  "deck": "Petugas lapangan BRI menempuh ombak Selat Haya dengan perahu fiber untuk menjangkau nasabah nelayan.",
  "date": "31 Juli 2026",
  "image": "assets/img/menyeberang-selat-demi-layani-nasabah-cerita-mantri-bri-di-pulau-seram.jpg",
  "imageV": "tjnrtw",
  "tags": [
   "BRI",
   "Inklusi Keuangan",
   "UMKM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456965-terjang-ombak-dedikasi-mantri-bri-membuka-jalan-akses-finansial-hingga-perbaiki-nasib-nelayan-di-pulau-seram"
 },
 {
  "slug": "pendukung-dan-pengkritik-duduk-bareng-bahas-kopdes-merah-putih",
  "category": "Makroekonomi",
  "title": "Pendukung dan Pengkritik Duduk Bareng Bahas [Kopdes] Merah Putih",
  "deck": "AMKI menggelar diskusi yang mempertemukan pendukung dan pengkritik program Koperasi Desa Merah Putih.",
  "date": "31 Juli 2026",
  "image": "assets/img/pendukung-dan-pengkritik-duduk-bareng-bahas-kopdes-merah-putih.jpg",
  "imageV": "tjnrtx",
  "tags": [
   "Koperasi",
   "Ekonomi Desa",
   "Kebijakan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456951-bahas-kopdes-merah-putih-amki-pertemukan-agrinas-hingga-celios-untuk-kupas-penyempurnaan-program"
 },
 {
  "slug": "lima-puluh-umkm-dibekali-sertifikasi-halal-untuk-tembus-pasar-baru",
  "category": "UMKM",
  "title": "Lima Puluh UMKM Dibekali [Sertifikasi Halal] untuk Tembus Pasar Baru",
  "deck": "Pertamina memfasilitasi sertifikasi halal bagi 50 UMKM binaan dari berbagai sektor usaha.",
  "date": "31 Juli 2026",
  "image": "assets/img/lima-puluh-umkm-dibekali-sertifikasi-halal-untuk-tembus-pasar-baru.jpg",
  "imageV": "tjnrty",
  "tags": [
   "UMKM",
   "Sertifikasi Halal",
   "Pertamina"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456948-50-umkm-binaan-dibekali-sertifikasi-halal-pertamina-bantu-perluas-peluang-pasar"
 },
 {
  "slug": "akad-massal-62-ribu-debitur-kpr-subsidi-dipimpin-presiden",
  "category": "Perbankan",
  "title": "Akad Massal [62 Ribu] Debitur KPR Subsidi Dipimpin Presiden",
  "deck": "BRI menegaskan komitmennya dalam program 3 juta rumah lewat penyediaan akses pembiayaan bagi masyarakat dan pelaku usaha properti.",
  "date": "31 Juli 2026",
  "image": "assets/img/akad-massal-62-ribu-debitur-kpr-subsidi-dipimpin-presiden.jpg",
  "imageV": "tjnrty",
  "tags": [
   "KPR",
   "BRI",
   "Properti"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456897-presiden-prabowo-pimpin-akad-massal-62-ribu-debitur-kpr-flpp-bri-tegaskan-komitmen-sebagai-penggerak-ekonomi-kerakyatan"
 },
 {
  "slug": "melayani-ratusan-debitur-yang-tersebar-di-belasan-desa-talaud",
  "category": "Perbankan",
  "title": "Melayani Ratusan Debitur yang Tersebar di Belasan Desa [Talaud]",
  "deck": "Petugas BRI di Kepulauan Talaud melayani ratusan debitur yang tersebar di belasan desa terpencil.",
  "date": "31 Juli 2026",
  "image": "assets/img/melayani-ratusan-debitur-yang-tersebar-di-belasan-desa-talaud.jpg",
  "imageV": "tjnrtz",
  "tags": [
   "BRI",
   "Inklusi Keuangan",
   "Daerah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456868-mantri-bri-hadir-menggerakkan-denyut-nadi-perekonomian-di-tengah-bentang-kepulauan-talaud"
 },
 {
  "slug": "pertamina-paparkan-strategi-jaga-ketahanan-energi-nasional",
  "category": "Energi",
  "title": "Pertamina Paparkan Strategi Jaga [Ketahanan Energi] Nasional",
  "deck": "Wakil Direktur Utama Pertamina memaparkan capaian dan langkah perusahaan mendukung ketahanan energi nasional.",
  "date": "31 Juli 2026",
  "image": "assets/img/pertamina-paparkan-strategi-jaga-ketahanan-energi-nasional.jpg",
  "imageV": "tjnru0",
  "tags": [
   "Pertamina",
   "Ketahanan Energi",
   "BUMN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457022-wadirut-oki-muraza-paparkan-upaya-strategis-pertamina-mendukung-ketahanan-energi-nasional"
 },
 {
  "slug": "aplikasi-mobile-antar-bank-jakarta-raih-penghargaan-digital",
  "category": "Perbankan",
  "title": "Aplikasi Mobile Antar Bank Jakarta Raih [Penghargaan] Digital",
  "deck": "Bank Jakarta meraih penghargaan Digital Excellence Awards 2026 lewat layanan JakOne Mobile.",
  "date": "31 Juli 2026",
  "image": "assets/img/aplikasi-mobile-antar-bank-jakarta-raih-penghargaan-digital.jpg",
  "imageV": "tjnru1",
  "tags": [
   "Bank Daerah",
   "Digital Banking",
   "Jakarta"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457035-jakone-mobile-antar-bank-jakarta-raih-digital-excellence-awards-2026"
 },
 {
  "slug": "filantropi-dan-ekonomi-berbagi-menakar-peran-zakat-di-sektor-riil",
  "category": "Bisnis",
  "title": "Filantropi dan Ekonomi Berbagi: Menakar Peran [Zakat] di Sektor Riil",
  "deck": "Diskusi soal kedermawanan sosial kembali mengemuka, bersinggungan dengan peran dana sosial keagamaan dalam ekonomi.",
  "date": "31 Juli 2026",
  "image": "assets/img/filantropi-dan-ekonomi-berbagi-menakar-peran-zakat-di-sektor-riil.jpg",
  "imageV": "tjnru1",
  "tags": [
   "Filantropi",
   "Zakat",
   "Ekonomi Sosial"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/457006-mengapa-memuliakan-anak-yatim-begitu-istimewa-simak-7-keutamaannya"
 },
 {
  "slug": "dari-kebun-di-batang-ke-pasar-dunia-cerita-kopi-naik-kelas",
  "category": "UMKM",
  "title": "Dari Kebun di Batang ke Pasar Dunia: Cerita [Kopi] Naik Kelas",
  "deck": "Berawal dari kepedulian terhadap petani kopi di Batang, sebuah usaha rintisan berkembang hingga menjangkau pasar ekspor.",
  "date": "31 Juli 2026",
  "image": "assets/img/dari-kebun-di-batang-ke-pasar-dunia-cerita-kopi-naik-kelas.jpg",
  "imageV": "tjnru2",
  "tags": [
   "Kopi",
   "UMKM",
   "Ekspor"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456985-bersama-bri-petani-kopi-asal-batang-sajikan-racikan-produk-hingga-jangkau-pasar-dunia"
 },
 {
  "slug": "antisipasi-gejolak-global-tim-diplomasi-ekonomi-dikirim-ke-china-dan-m",
  "category": "Global",
  "title": "Antisipasi Gejolak Global, Tim Diplomasi Ekonomi Dikirim ke China dan [Mesir]",
  "deck": "Presiden Prabowo menyiapkan langkah antisipasi krisis ekonomi dunia lewat penjajakan kerja sama dengan sejumlah negara.",
  "date": "30 Juli 2026",
  "image": "assets/img/antisipasi-gejolak-global-tim-diplomasi-ekonomi-dikirim-ke-china-dan-m.jpg",
  "imageV": "tjnru3",
  "tags": [
   "Global",
   "Diplomasi Ekonomi",
   "Presiden Prabowo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456785-prabowo-kirim-tim-ke-china-hingga-mesir-cari-formula-terbaik-antisipasi-krisis-dunia-panjang",
  "video": "_ZV-tannxT8"
 },
 {
  "slug": "sinyal-dari-istana-soal-calon-gubernur-bi-berikutnya",
  "category": "Moneter",
  "title": "Sinyal dari Istana soal Calon Gubernur [BI] Berikutnya",
  "deck": "Presiden Prabowo melontarkan komentar santai soal posisi Pejabat Sementara Gubernur Bank Indonesia, Destry Damayanti.",
  "date": "30 Juli 2026",
  "image": "assets/img/sinyal-dari-istana-soal-calon-gubernur-bi-berikutnya.jpg",
  "imageV": "tjnru3",
  "tags": [
   "Bank Indonesia",
   "Moneter",
   "Kebijakan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456774-prabowo-guyon-soal-pjs-gubernur-bi-destry-oke-ya-tapi-nanti-terserah-dpr",
  "video": "m1q86JjJ4Kg"
 },
 {
  "slug": "efek-danantara-mulai-terasa-bumn-diarahkan-ke-pasar-global",
  "category": "BUMN",
  "title": "Efek Danantara Mulai Terasa, BUMN Diarahkan ke Pasar [Global]",
  "deck": "BKI mempercepat transformasi bisnis seiring penguatan ekosistem BUMN melalui Danantara.",
  "date": "30 Juli 2026",
  "image": "assets/img/efek-danantara-mulai-terasa-bumn-diarahkan-ke-pasar-global.jpg",
  "imageV": "tjnru4",
  "tags": [
   "BUMN",
   "Danantara",
   "Transformasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456842-efek-danantara-mulai-terasa-arah-transformasi-bumn-kini-lebih-fokus-ke-pasar-global"
 },
 {
  "slug": "ekosistem-digital-haji-dan-umrah-diperkuat-lewat-kemitraan-baru",
  "category": "Perbankan",
  "title": "Ekosistem Digital Haji dan Umrah Diperkuat lewat [Kemitraan] Baru",
  "deck": "BPKH Limited bermitra dengan SAHL Group dan Bank Muamalat untuk memperkuat layanan digital perjalanan haji dan umrah.",
  "date": "30 Juli 2026",
  "image": "assets/img/ekosistem-digital-haji-dan-umrah-diperkuat-lewat-kemitraan-baru.jpg",
  "imageV": "tjnru5",
  "tags": [
   "BPKH",
   "Haji",
   "Syariah"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456835-bpkh-gandeng-sahl-dan-muamalat-perkuat-ekosistem-perjalanan-haji-dan-umrah-melalui-digital"
 },
 {
  "slug": "pertamina-dorong-agenda-esg-masuk-ke-lini-bisnis",
  "category": "Energi",
  "title": "Pertamina Dorong Agenda [ESG] Masuk ke Lini Bisnis",
  "deck": "Pertamina mengintegrasikan prinsip lingkungan, sosial, dan tata kelola ke dalam transformasi bisnisnya.",
  "date": "30 Juli 2026",
  "image": "assets/img/pertamina-dorong-agenda-esg-masuk-ke-lini-bisnis.jpg",
  "imageV": "tjnru6",
  "tags": [
   "Pertamina",
   "ESG",
   "Keberlanjutan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456789-pertamina-terus-perkuat-kapabilitas-dan-budaya-keberlanjutan-guna-dukung-transformasi-bisnis-berkelanjutan"
 },
 {
  "slug": "inisiatif-bioenergi-pertamina-dapat-pengakuan-internasional",
  "category": "Energi",
  "title": "Inisiatif Bioenergi Pertamina Dapat [Pengakuan] Internasional",
  "deck": "Pertamina meraih penghargaan Outstanding SDG Innovator 2026 lewat inisiatif bioenergi berkelanjutan.",
  "date": "30 Juli 2026",
  "image": "assets/img/inisiatif-bioenergi-pertamina-dapat-pengakuan-internasional.jpg",
  "imageV": "tjnru7",
  "tags": [
   "Pertamina",
   "Bioenergi",
   "SDG"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456788-pertamina-raih-outstanding-sdg-innovator-2026-inisiatif-bioenergy-lestari-diakui-dunia"
 },
 {
  "slug": "sebelas-umkm-binaan-tampil-di-panggung-indonesia-fashion-week",
  "category": "UMKM",
  "title": "Sebelas UMKM Binaan Tampil di Panggung [Indonesia Fashion Week]",
  "deck": "UMKM binaan Pertamina Patra Niaga memperluas akses pasar lewat ajang Indonesia Fashion Week 2026.",
  "date": "30 Juli 2026",
  "image": "assets/img/sebelas-umkm-binaan-tampil-di-panggung-indonesia-fashion-week.jpg",
  "imageV": "tjnru8",
  "tags": [
   "UMKM",
   "Ekonomi Kreatif",
   "Fesyen"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456773-dongkrak-umkm-naik-kelas-11-umkm-binaan-pertamina-patra-niaga-tampil-di-indonesia-fashion-week-2026"
 },
 {
  "slug": "pegadaian-kantongi-sk-perjanjian-kerja-bersama-2026-2028",
  "category": "Ketenagakerjaan",
  "title": "Pegadaian Kantongi SK Perjanjian Kerja Bersama [2026-2028]",
  "deck": "Perjanjian kerja bersama periode 2026-2028 disahkan Kemenaker, memperkuat fondasi hubungan industrial.",
  "date": "30 Juli 2026",
  "image": "assets/img/pegadaian-kantongi-sk-perjanjian-kerja-bersama-2026-2028.jpg",
  "imageV": "tjnru8",
  "tags": [
   "Ketenagakerjaan",
   "Pegadaian",
   "Hubungan Industrial"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456748-pegadaian-resmi-terima-sk-perjanjian-kerja-bersama-periode-20262028-dari-kemenaker-perkuat-fondasi-hubungan-industrial-harmonis"
 },
 {
  "slug": "perusahaan-perangkat-lunak-global-perluas-kantor-di-bsd-city",
  "category": "Teknologi",
  "title": "Perusahaan Perangkat Lunak Global Perluas Kantor di [BSD City]",
  "deck": "Odoo Indonesia membuka kantor baru di kawasan digital hub BSD City.",
  "date": "30 Juli 2026",
  "image": "assets/img/perusahaan-perangkat-lunak-global-perluas-kantor-di-bsd-city.jpg",
  "imageV": "tjnru9",
  "tags": [
   "Teknologi",
   "Investasi",
   "Digital"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456739-odoo-indonesia-ekspansi-kantor-baru-di-gedung-biomedical-campus-perkuat-ekosistem-digital-hub-di-bsd-city"
 },
 {
  "slug": "secangkir-kopi-wisatawan-asing-dan-rantai-ekonomi-di-baliknya",
  "category": "Bisnis",
  "title": "Secangkir Kopi Wisatawan Asing dan [Rantai Ekonomi] di Baliknya",
  "deck": "Presiden menganalogikan efek berganda pariwisata lewat contoh sederhana konsumsi wisatawan asing.",
  "date": "30 Juli 2026",
  "image": "assets/img/secangkir-kopi-wisatawan-asing-dan-rantai-ekonomi-di-baliknya.jpg",
  "imageV": "tjnrua",
  "tags": [
   "Pariwisata",
   "Ekonomi Kreatif",
   "Presiden Prabowo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456717-prabowo-satu-wisatawan-asing-minum-secangkir-kopi-bisa-hidupi-10-hingga-15-rakyat-indonesia"
 },
 {
  "slug": "pekerja-migran-di-taiwan-dibekali-literasi-keuangan-untuk-pulang-berwi",
  "category": "Perbankan",
  "title": "Pekerja Migran di Taiwan Dibekali [Literasi Keuangan] untuk Pulang Berwirausaha",
  "deck": "BRI memberikan pelatihan kewirausahaan dan literasi keuangan bagi pekerja migran Indonesia di Taiwan.",
  "date": "30 Juli 2026",
  "image": "assets/img/pekerja-migran-di-taiwan-dibekali-literasi-keuangan-untuk-pulang-berwi.jpg",
  "imageV": "tjnrua",
  "tags": [
   "Pekerja Migran",
   "BRI",
   "Literasi Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456703-bri-bekali-pmi-di-taiwan-dengan-kewirausahaan-dan-literasi-keuangan-untuk-bangun-usaha-produktif"
 },
 {
  "slug": "bank-bjb-perluas-bisnis-lewat-kemitraan-strategis-baru",
  "category": "Perbankan",
  "title": "Bank bjb Perluas Bisnis lewat [Kemitraan] Strategis Baru",
  "deck": "Bank bjb menjalin kemitraan strategis untuk memperkuat basis bisnisnya.",
  "date": "30 Juli 2026",
  "image": "assets/img/bank-bjb-perluas-bisnis-lewat-kemitraan-strategis-baru.jpg",
  "imageV": "tjnrub",
  "tags": [
   "Bank bjb",
   "Perbankan",
   "Kemitraan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456658-bank-bjb-perluas-potensi-bisnis-melalui-kemitraan-strategis-bersama-yayasan-adi-upaya"
 },
 {
  "slug": "emas-antam-naik-rp15-ribu-harga-buyback-ikut-terangkat",
  "category": "Pasar Modal",
  "title": "Emas Antam Naik [Rp15 Ribu], Harga Buyback Ikut Terangkat",
  "deck": "Harga emas batangan Antam menguat pada perdagangan 30 Juli 2026, diikuti kenaikan harga buyback.",
  "date": "30 Juli 2026",
  "image": "assets/img/emas-antam-naik-rp15-ribu-harga-buyback-ikut-terangkat.jpg",
  "imageV": "msr7bwg0",
  "tags": [
   "Emas Antam",
   "Komoditas",
   "Investasi"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456652-harga-emas-antam-hari-ini-30-juli-2026-naik-rp15000-jadi-rp2616000-per-gram-buyback-ikut-naik"
 },
 {
  "slug": "transformasi-bri-dipercepat-untuk-perkuat-kontribusi-ke-ekonomi-nasion",
  "category": "Perbankan",
  "title": "Transformasi BRI Dipercepat untuk Perkuat Kontribusi ke [Ekonomi Nasional]",
  "deck": "BRI mengakselerasi program transformasi sebagai fondasi memperkuat daya saing.",
  "date": "30 Juli 2026",
  "image": "assets/img/transformasi-bri-dipercepat-untuk-perkuat-kontribusi-ke-ekonomi-nasion.jpg",
  "imageV": "tjnruc",
  "tags": [
   "BRI",
   "Danantara",
   "Transformasi"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456651-transformasi-brivolution-reignite-kian-akseleratif-perkuat-kontribusi-danantara-bagi-perekonomian-nasional"
 },
 {
  "slug": "koperasi-disiapkan-jadi-benteng-kedaulatan-ekonomi-rakyat",
  "category": "Makroekonomi",
  "title": "Koperasi Disiapkan Jadi [Benteng] Kedaulatan Ekonomi Rakyat",
  "deck": "Kementerian Koperasi dan Great Institute sepakat mendorong reaktualisasi Pasal 33 UUD 1945.",
  "date": "29 Juli 2026",
  "image": "assets/img/koperasi-disiapkan-jadi-benteng-kedaulatan-ekonomi-rakyat.jpg",
  "imageV": "tjnrud",
  "tags": [
   "Koperasi",
   "Kebijakan",
   "Ekonomi Kerakyatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456604-reaktualisasi-pasal-33-uud-1945-koperasi-disiapkan-jadi-benteng-kedaulatan-ekonomi-rakyat"
 },
 {
  "slug": "penyandang-disabilitas-dibekali-keterampilan-bernilai-ekonomi",
  "category": "UMKM",
  "title": "Penyandang Disabilitas Dibekali [Keterampilan] Bernilai Ekonomi",
  "deck": "PNM lewat program tanggung jawab sosial memberi pelatihan keterampilan produktif bagi penyandang disabilitas.",
  "date": "29 Juli 2026",
  "image": "assets/img/penyandang-disabilitas-dibekali-keterampilan-bernilai-ekonomi.jpg",
  "imageV": "tjnrud",
  "tags": [
   "PNM",
   "Disabilitas",
   "Pemberdayaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456590-bantu-kemandirian-penyandang-disabilitas-pnm-bekali-keterampilan-bernilai-ekonomi"
 },
 {
  "slug": "seratus-ribu-pekerja-rentan-bakal-dapat-jaminan-sosial",
  "category": "Ketenagakerjaan",
  "title": "Seratus Ribu Pekerja Rentan Bakal Dapat [Jaminan Sosial]",
  "deck": "BAZNAS dan BPJS Ketenagakerjaan memperkuat kolaborasi memperluas perlindungan bagi pekerja rentan.",
  "date": "29 Juli 2026",
  "image": "assets/img/seratus-ribu-pekerja-rentan-bakal-dapat-jaminan-sosial.jpg",
  "imageV": "tjnrue",
  "tags": [
   "BPJS",
   "Jaminan Sosial",
   "Pekerja Informal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456568-perlindungan-jaminan-sosial-bagi-100-ribu-pekerja-rentan-baznas-ri-dan-bpjs-ketenagakerjaan-perkuat-kolaborasi"
 },
 {
  "slug": "tunggakan-program-mbg-rp16-triliun-masih-dalam-proses-audit",
  "category": "Makroekonomi",
  "title": "Tunggakan Program MBG [Rp1,6 Triliun] Masih dalam Proses Audit",
  "deck": "Kepala BGN menyebut tunggakan pembayaran ke pihak ketiga masih dalam proses audit.",
  "date": "29 Juli 2026",
  "image": "assets/img/tunggakan-program-mbg-rp16-triliun-masih-dalam-proses-audit.jpg",
  "imageV": "tjnruf",
  "tags": [
   "MBG",
   "BGN",
   "Anggaran"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456565-kepala-bgn-sebut-tunggakan-mbg-rp16-triliun-ke-pihak-ketiga-masih-diaudit-percayalah-pada-sistem"
 },
 {
  "slug": "sepuluh-bank-tutup-hingga-juli-ojk-cabut-izin-bpr-di-berbagai-daerah",
  "category": "Perbankan",
  "title": "Sepuluh Bank Tutup hingga Juli, OJK Cabut Izin [BPR] di Berbagai Daerah",
  "deck": "OJK mencabut izin usaha sejumlah bank perkreditan rakyat di berbagai daerah sepanjang 2026.",
  "date": "29 Juli 2026",
  "image": "assets/img/sepuluh-bank-tutup-hingga-juli-ojk-cabut-izin-bpr-di-berbagai-daerah.jpg",
  "imageV": "tjnrug",
  "tags": [
   "OJK",
   "BPR",
   "Perbankan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456564-daftar-10-bank-yang-tutup-hingga-juli-2026-ojk-cabut-izin-bpr-di-berbagai-daerah"
 },
 {
  "slug": "dua-dekade-membesarkan-usaha-gula-merah-di-sumenep",
  "category": "UMKM",
  "title": "Dua Dekade Membesarkan Usaha [Gula Merah] di Sumenep",
  "deck": "Kisah pelaku UMKM gula merah dari Sumenep yang mengembangkan usaha selama dua dekade dengan dukungan KUR.",
  "date": "29 Juli 2026",
  "image": "assets/img/dua-dekade-membesarkan-usaha-gula-merah-di-sumenep.jpg",
  "imageV": "tjnrug",
  "tags": [
   "UMKM",
   "KUR",
   "Madura"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456551-kisah-sukses-umkm-gula-merah-dari-sumenep-rosidah-dua-dekade-membesarkan-usaha-berkat-kur-bri"
 },
 {
  "slug": "kadin-bawa-agenda-industri-listrik-ke-meja-sekretariat-kabinet",
  "category": "Industri",
  "title": "Kadin Bawa Agenda [Industri Listrik] ke Meja Sekretariat Kabinet",
  "deck": "Ketum Kadin membahas pengembangan industri listrik dalam pertemuan dengan Sekretaris Kabinet.",
  "date": "29 Juli 2026",
  "image": "assets/img/kadin-bawa-agenda-industri-listrik-ke-meja-sekretariat-kabinet.jpg",
  "imageV": "tjnruh",
  "tags": [
   "Kadin",
   "Industri",
   "Kelistrikan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456548-temui-seskab-teddy-ketum-kadin-anindya-bakrie-bahas-pengembangan-industri-listrik-dan-kenalkan-buku-we-buy-from-indonesia"
 },
 {
  "slug": "laba-bank-bjb-melonjak-588-persen-aset-tembus-rp228-triliun",
  "category": "Perbankan",
  "title": "Laba Bank bjb Melonjak [58,8 Persen], Aset Tembus Rp228 Triliun",
  "deck": "Bank bjb membukukan pertumbuhan laba signifikan dengan total aset menembus Rp228,2 triliun.",
  "date": "29 Juli 2026",
  "image": "assets/img/laba-bank-bjb-melonjak-588-persen-aset-tembus-rp228-triliun.jpg",
  "imageV": "tjnrui",
  "tags": [
   "Bank bjb",
   "Perbankan",
   "Kinerja Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456529-bukukan-kinerja-positif-laba-bank-bjb-tumbuh-588-dan-aset-tembus-rp2282-triliun"
 },
 {
  "slug": "pemerintah-kucurkan-rp328-triliun-untuk-15-bendungan-baru",
  "category": "Makroekonomi",
  "title": "Pemerintah Kucurkan [Rp32,8 Triliun] untuk 15 Bendungan Baru",
  "deck": "Anggaran besar dialokasikan untuk proyek bendungan yang akan mengairi 200 ribu hektare lahan.",
  "date": "29 Juli 2026",
  "image": "assets/img/pemerintah-kucurkan-rp328-triliun-untuk-15-bendungan-baru.jpg",
  "imageV": "tjnrui",
  "tags": [
   "Infrastruktur",
   "Pangan",
   "APBN"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456527-kebut-proyek-15-bendungan-baru-pemerintah-kucurkan-rp328-triliun-untuk-irigasi-200-ribu-hektare-lahan"
 },
 {
  "slug": "pembiayaan-ultra-mikro-diperkuat-untuk-keluarga-prasejahtera",
  "category": "UMKM",
  "title": "Pembiayaan [Ultra Mikro] Diperkuat untuk Keluarga Prasejahtera",
  "deck": "PNM bersama Danantara memperkuat pembiayaan ultra mikro dan dampaknya bagi ketahanan keuangan keluarga.",
  "date": "29 Juli 2026",
  "image": "assets/img/pembiayaan-ultra-mikro-diperkuat-untuk-keluarga-prasejahtera.jpg",
  "imageV": "tjnruj",
  "tags": [
   "PNM",
   "Ultra Mikro",
   "Pemberdayaan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456526-pnm-perkuat-pembiayaan-ultra-mikro-bersama-danantara-ini-hasilnya-terhadap-ketahanan-keuangan-keluarga-prasejahtera"
 },
 {
  "slug": "presiden-minta-pabrik-gula-wajib-punya-kebun-tebu-sendiri",
  "category": "Industri",
  "title": "Presiden Minta Pabrik Gula Wajib Punya [Kebun Tebu] Sendiri",
  "deck": "Kebijakan ini diarahkan untuk memperkuat pasokan bahan baku industri gula dalam negeri.",
  "date": "29 Juli 2026",
  "image": "assets/img/presiden-minta-pabrik-gula-wajib-punya-kebun-tebu-sendiri.jpg",
  "imageV": "tjnruk",
  "tags": [
   "Gula",
   "Industri",
   "Pangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456500-presiden-prabowo-minta-pabrik-gula-wajib-punya-kebun-tebu"
 },
 {
  "slug": "emas-antam-merosot-ke-rp26-juta-per-gram",
  "category": "Pasar Modal",
  "title": "Emas Antam Merosot ke [Rp2,6 Juta] per Gram",
  "deck": "Harga emas batangan Antam terkoreksi pada perdagangan 29 Juli 2026.",
  "date": "29 Juli 2026",
  "image": "assets/img/emas-antam-merosot-ke-rp26-juta-per-gram.jpg",
  "imageV": "msr7cflz",
  "tags": [
   "Emas Antam",
   "Komoditas",
   "Investasi"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456449-harga-emas-antam-hari-ini-29-juli-2026-merosot-kini-jadi-rp2601000-per-gram"
 },
 {
  "slug": "rupiah-tembus-rp18106-per-dolar-di-tengah-transisi-pimpinan-bi",
  "category": "Moneter",
  "title": "Rupiah Tembus [Rp18.106] per Dolar di Tengah Transisi Pimpinan BI",
  "deck": "Nilai tukar rupiah melemah meski pasar mulai merespons positif penunjukan pejabat sementara Gubernur BI.",
  "date": "29 Juli 2026",
  "image": "assets/img/rupiah-tembus-rp18106-per-dolar-di-tengah-transisi-pimpinan-bi.jpg",
  "imageV": "msr7csdp",
  "tags": [
   "Rupiah",
   "Bank Indonesia",
   "Kurs"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456447-rupiah-melemah-ke-rp18106-per-dolar-meski-pasar-mulai-optimis-penunjukan-destry-damayanti-sebagai-pejabat-sementara-gubernur-bi"
 },
 {
  "slug": "angka-phk-tembus-126-ribu-pekerja-hingga-mei",
  "category": "Ketenagakerjaan",
  "title": "Angka PHK Tembus [126 Ribu] Pekerja hingga Mei",
  "deck": "Apindo memaparkan tekanan yang dihadapi dunia usaha di balik gelombang pemutusan hubungan kerja.",
  "date": "29 Juli 2026",
  "image": "assets/img/angka-phk-tembus-126-ribu-pekerja-hingga-mei.jpg",
  "imageV": "tjnrul",
  "tags": [
   "PHK",
   "Ketenagakerjaan",
   "Apindo"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456427-126-ribu-pekerja-terkena-phk-hingga-mei-2026-apindo-beberkan-tekanan-di-dunia-usaha"
 },
 {
  "slug": "menkeu-perjelas-posisi-danantara-di-kssk-tanpa-hak-suara",
  "category": "Moneter",
  "title": "Menkeu Perjelas Posisi Danantara di [KSSK]: Tanpa Hak Suara",
  "deck": "Menkeu menegaskan Danantara hadir dalam rapat KSSK tanpa hak suara dalam pengambilan keputusan.",
  "date": "29 Juli 2026",
  "image": "assets/img/menkeu-perjelas-posisi-danantara-di-kssk-tanpa-hak-suara.jpg",
  "imageV": "tjnrum",
  "tags": [
   "Danantara",
   "KSSK",
   "Stabilitas Keuangan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456426-purbaya-tegaskan-batas-dan-peran-danantara-di-kssk-sebut-tak-punya-hak-suara-dalam-keputusan"
 },
 {
  "slug": "rupiah-anjlok-pasar-cermati-the-fed-dan-transisi-bi",
  "category": "Moneter",
  "title": "Rupiah Anjlok, Pasar Cermati [The Fed] dan Transisi BI",
  "deck": "Nilai tukar rupiah tertekan seiring kehati-hatian pasar menanti kebijakan bank sentral AS.",
  "date": "28 Juli 2026",
  "image": "assets/img/rupiah-anjlok-pasar-cermati-the-fed-dan-transisi-bi.jpg",
  "imageV": "msr7dmfs",
  "tags": [
   "Rupiah",
   "The Fed",
   "Kurs"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456418-rupiah-anjlok-ke-rp18083-per-dolar-as-pasar-cermati-kebijakan-the-fed-dan-transisi-bi"
 },
 {
  "slug": "ihsg-ditutup-anjlok-ke-6130-investor-pilih-menunggu",
  "category": "Pasar Modal",
  "title": "IHSG Ditutup Anjlok ke [6.130], Investor Pilih Menunggu",
  "deck": "Indeks harga saham gabungan tertekan seiring sikap wait and see investor menjelang rapat The Fed.",
  "date": "28 Juli 2026",
  "image": "assets/img/ihsg-ditutup-anjlok-ke-6130-investor-pilih-menunggu.jpg",
  "imageV": "msr7e85a",
  "tags": [
   "IHSG",
   "Pasar Modal",
   "The Fed"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456417-ihsg-ditutup-anjlok-ke-6130-investor-wait-and-see-menanti-hasil-rapat-the-fed"
 },
 {
  "slug": "kinerja-bumn-mulai-terangkat-bki-catat-pendapatan-rp15-triliun",
  "category": "BUMN",
  "title": "Kinerja BUMN Mulai Terangkat, BKI Catat Pendapatan [Rp1,5 Triliun]",
  "deck": "Penguatan ekosistem BUMN di bawah Danantara mulai tercermin pada capaian kinerja anak usaha.",
  "date": "28 Juli 2026",
  "image": "assets/img/kinerja-bumn-mulai-terangkat-bki-catat-pendapatan-rp15-triliun.jpg",
  "imageV": "tjnrun",
  "tags": [
   "BUMN",
   "Danantara",
   "BKI"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456415-penguatan-danantara-mulai-tercermin-di-kinerja-bumn-bki-catat-pendapatan-rp15-triliun"
 },
 {
  "slug": "nama-menkeu-masuk-bursa-calon-gubernur-bi",
  "category": "Moneter",
  "title": "Nama Menkeu Masuk Bursa Calon [Gubernur BI]",
  "deck": "Menkeu menegaskan akan mengikuti arahan Presiden terkait spekulasi pencalonannya sebagai Gubernur Bank Indonesia.",
  "date": "28 Juli 2026",
  "image": "assets/img/nama-menkeu-masuk-bursa-calon-gubernur-bi.jpg",
  "imageV": "mssbtoph",
  "tags": [
   "Bank Indonesia",
   "Moneter",
   "Purbaya"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456413-nama-purbaya-masuk-kandidat-gubernur-bi-menkeu-tegaskan-ikut-perintah-presiden"
 },
 {
  "slug": "harga-bbm-dan-lpg-subsidi-dipastikan-tidak-naik",
  "category": "Energi",
  "title": "Harga BBM dan LPG Subsidi Dipastikan [Tidak Naik]",
  "deck": "Menteri ESDM memastikan harga energi bersubsidi tetap meski harga minyak dunia bergejolak.",
  "date": "28 Juli 2026",
  "image": "assets/img/harga-bbm-dan-lpg-subsidi-dipastikan-tidak-naik.jpg",
  "imageV": "tjnruo",
  "tags": [
   "BBM",
   "Subsidi",
   "ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456391-bahlil-pastikan-harga-bbm-dan-lpg-subsidi-tidak-naik-meski-harga-minyak-bergejolak-karena-perang"
 },
 {
  "slug": "koperasi-didorong-jadi-pintu-masuk-kedaulatan-ekonomi",
  "category": "Makroekonomi",
  "title": "Koperasi Didorong Jadi Pintu Masuk [Kedaulatan Ekonomi]",
  "deck": "Kemenkop dan Great Institute mendorong penguatan peran koperasi lewat reaktualisasi Pasal 33 UUD 1945.",
  "date": "28 Juli 2026",
  "image": "assets/img/koperasi-didorong-jadi-pintu-masuk-kedaulatan-ekonomi.jpg",
  "imageV": "tjnrup",
  "tags": [
   "Koperasi",
   "Kebijakan",
   "Ekonomi Kerakyatan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456398-kemenkop-dan-great-institute-dorong-reaktualisasi-pasal-33-uud-1945-koperasi-jadi-pintu-kedaulatan-ekonomi"
 },
 {
  "slug": "telkom-raih-penghargaan-berkat-program-talenta-berkelanjutan",
  "category": "BUMN",
  "title": "Telkom Raih Penghargaan Berkat Program [Talenta] Berkelanjutan",
  "deck": "Telkom mendapat pengakuan atas komitmennya membangun talenta secara berkelanjutan.",
  "date": "28 Juli 2026",
  "image": "assets/img/telkom-raih-penghargaan-berkat-program-talenta-berkelanjutan.jpg",
  "imageV": "tjnruq",
  "tags": [
   "Telkom",
   "SDM",
   "Keberlanjutan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456364-telkom-raih-lestari-award-2026-berkat-komitmen-membangun-talenta-berkelanjutan"
 },
 {
  "slug": "timur-tengah-memanas-pasokan-energi-nasional-dipastikan-aman",
  "category": "Energi",
  "title": "Timur Tengah Memanas, Pasokan Energi Nasional Dipastikan [Aman]",
  "deck": "Menteri ESDM memastikan pasokan energi Indonesia tetap terjaga di tengah eskalasi konflik global.",
  "date": "28 Juli 2026",
  "image": "assets/img/timur-tengah-memanas-pasokan-energi-nasional-dipastikan-aman.jpg",
  "imageV": "tjnrur",
  "tags": [
   "Energi",
   "Geopolitik",
   "ESDM"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456339-konflik-timur-tengah-balik-panas-bahlil-pastikan-pasokan-energi-indonesia-tetap-terjaga"
 },
 {
  "slug": "bei-pastikan-stabilitas-pasar-saham-di-tengah-transisi-bi",
  "category": "Pasar Modal",
  "title": "BEI Pastikan [Stabilitas] Pasar Saham di Tengah Transisi BI",
  "deck": "Bursa Efek Indonesia menegaskan stabilitas pasar saham domestik terjaga selama masa transisi pimpinan bank sentral.",
  "date": "28 Juli 2026",
  "image": "assets/img/bei-pastikan-stabilitas-pasar-saham-di-tengah-transisi-bi.jpg",
  "imageV": "tjnrus",
  "tags": [
   "BEI",
   "IHSG",
   "Pasar Modal"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456307-di-tengah-proses-transisi-kepemimpinan-di-bank-indonesia-bei-pastikan-stabilitas-pasar-saham-domestik"
 },
 {
  "slug": "pendaftar-program-magang-tembus-300-ribu-untuk-50-ribu-posisi",
  "category": "Ketenagakerjaan",
  "title": "Pendaftar Program Magang Tembus [300 Ribu] untuk 50 Ribu Posisi",
  "deck": "Antusiasme program magang nasional melonjak dengan rasio pendaftar enam kali lipat dari kuota.",
  "date": "28 Juli 2026",
  "image": "assets/img/pendaftar-program-magang-tembus-300-ribu-untuk-50-ribu-posisi.jpg",
  "imageV": "tjnrut",
  "tags": [
   "Magang",
   "Ketenagakerjaan",
   "Tenaga Kerja Muda"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456304-membludak-pendaftar-maganghub-2026-capai-300-ribu-untuk-50-ribu-posisi"
 },
 {
  "slug": "ketika-jaminan-kesehatan-menahan-beban-biaya-berobat-keluarga",
  "category": "Bisnis",
  "title": "Ketika Jaminan Kesehatan Menahan Beban [Biaya Berobat] Keluarga",
  "deck": "Cerita peserta JKN yang memanfaatkan program jaminan kesehatan untuk pemulihan penyakit tulang belakang.",
  "date": "28 Juli 2026",
  "image": "assets/img/ketika-jaminan-kesehatan-menahan-beban-biaya-berobat-keluarga.jpg",
  "imageV": "tjnrut",
  "tags": [
   "JKN",
   "Kesehatan",
   "Jaminan Sosial"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456301-cerita-jamih-rasakan-manfaat-jkn-dalam-pemulihan-radikulopati-lumbal"
 },
 {
  "slug": "kur-perumahan-jadi-motor-program-3-juta-rumah",
  "category": "Perbankan",
  "title": "KUR Perumahan Jadi Motor Program [3 Juta Rumah]",
  "deck": "Pemerintah mengapresiasi kinerja penyaluran kredit usaha rakyat sektor perumahan.",
  "date": "28 Juli 2026",
  "image": "assets/img/kur-perumahan-jadi-motor-program-3-juta-rumah.jpg",
  "imageV": "tjnruu",
  "tags": [
   "KUR",
   "BRI",
   "Perumahan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456295-pemerintah-apresiasi-kinerja-bri-salurkan-kur-perumahan-jadi-motor-utama-program-3-juta-rumah"
 },
 {
  "slug": "menyiapkan-keamanan-data-menghadapi-era-komputer-kuantum",
  "category": "Teknologi",
  "title": "Menyiapkan Keamanan Data Menghadapi Era [Komputer Kuantum]",
  "deck": "Telkom menginisiasi forum kolaborasi nasional untuk kesiapan kriptografi pascakuantum.",
  "date": "28 Juli 2026",
  "image": "assets/img/menyiapkan-keamanan-data-menghadapi-era-komputer-kuantum.jpg",
  "imageV": "tjnruu",
  "tags": [
   "Teknologi",
   "Keamanan Siber",
   "Telkom"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456286-telkom-inisiasi-forum-kolaborasi-nasional-untuk-perkuat-kesiapan-post-quantum-cryptography"
 },
 {
  "slug": "bunga-simpanan-terlalu-tinggi-dana-nasabah-berisiko-tak-dijamin",
  "category": "Perbankan",
  "title": "Bunga Simpanan Terlalu Tinggi, Dana Nasabah Berisiko [Tak Dijamin]",
  "deck": "Sejumlah bank menawarkan bunga simpanan di atas batas penjaminan, membuat dana nasabah berisiko tidak terlindungi.",
  "date": "28 Juli 2026",
  "image": "assets/img/bunga-simpanan-terlalu-tinggi-dana-nasabah-berisiko-tak-dijamin.jpg",
  "imageV": "tjnruv",
  "tags": [
   "LPS",
   "Perbankan",
   "Simpanan"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456281-tiga-dari-10-suku-bunga-simpanan-lampaui-batas-penjaminan-dana-nasabah-berisiko-tak-dijamin"
 },
 {
  "slug": "ihsg-dibuka-menguat-siap-uji-level-resistance",
  "category": "Pasar Modal",
  "title": "IHSG Dibuka Menguat, Siap Uji Level [Resistance]",
  "deck": "Indeks dibuka positif mengikuti penguatan bursa Asia meski Wall Street bergerak variatif.",
  "date": "28 Juli 2026",
  "image": "assets/img/ihsg-dibuka-menguat-siap-uji-level-resistance.jpg",
  "imageV": "tjnruv",
  "tags": [
   "IHSG",
   "Pasar Modal",
   "Bursa Asia"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456224-ihsg-dibuka-menguat-siap-tes-resistance-bursa-asia-menguat-dan-wall-street-variatif"
 },
 {
  "slug": "emas-antam-turun-rp9000-per-gram",
  "category": "Pasar Modal",
  "title": "Emas Antam Turun [Rp9.000] per Gram",
  "deck": "Harga emas batangan Antam kembali terkoreksi tipis pada perdagangan 28 Juli 2026.",
  "date": "28 Juli 2026",
  "image": "assets/img/emas-antam-turun-rp9000-per-gram.jpg",
  "imageV": "msr7f5kk",
  "tags": [
   "Emas Antam",
   "Komoditas",
   "Investasi"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456220-harga-emas-antam-hari-ini-28-juli-2026-merosot-rp9000-jadi-rp2613000-per-gram"
 },
 {
  "slug": "rupiah-tertekan-usai-gubernur-bi-mengundurkan-diri",
  "category": "Moneter",
  "title": "Rupiah Tertekan Usai [Gubernur BI] Mengundurkan Diri",
  "deck": "Pasar merespons negatif pengunduran diri Gubernur Bank Indonesia, rupiah melemah ke Rp18.063.",
  "date": "28 Juli 2026",
  "image": "assets/img/rupiah-tertekan-usai-gubernur-bi-mengundurkan-diri.jpg",
  "imageV": "msr7fkb5",
  "tags": [
   "Rupiah",
   "Bank Indonesia",
   "Kurs"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456219-rupiah-melemah-ke-rp18063-per-dolar-as-pasar-respons-negatif-pengunduran-diri-gubernur-bi-perry-warjiyo"
 },
 {
  "slug": "bi-minta-pasar-tak-panik-arah-kebijakan-dipastikan-tetap",
  "category": "Moneter",
  "title": "BI Minta Pasar [Tak Panik], Arah Kebijakan Dipastikan Tetap",
  "deck": "Bank Indonesia menegaskan arah kebijakan moneter tidak bergeser meski terjadi pergantian pimpinan.",
  "date": "28 Juli 2026",
  "image": "assets/img/bi-minta-pasar-tak-panik-arah-kebijakan-dipastikan-tetap.jpg",
  "imageV": "msre4qf1",
  "tags": [
   "Bank Indonesia",
   "Moneter",
   "Kurs"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456213-bi-minta-pasar-tak-panik-destry-pastikan-kebijakan-tak-bergeser-meski-perry-warjiyo-mundur"
 },
 {
  "slug": "uji-kelayakan-calon-gubernur-bi-belum-dijadwalkan",
  "category": "Moneter",
  "title": "Uji Kelayakan Calon Gubernur BI Belum [Dijadwalkan]",
  "deck": "Komisi XI DPR belum menjadwalkan uji kelayakan karena Presiden belum mengajukan nama calon.",
  "date": "28 Juli 2026",
  "image": "assets/img/uji-kelayakan-calon-gubernur-bi-belum-dijadwalkan.jpg",
  "imageV": "msre5efa",
  "tags": [
   "Bank Indonesia",
   "DPR",
   "Moneter"
  ],
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456197-presiden-belum-ajukan-nama-komisi-xi-belum-agendakan-uji-kelayakan-calon-gubernur-bi"
 },
 {
  "slug": "ekspor-mineral-kritis-terhambat-kantor-staf-presiden-turun-tangan",
  "category": "Industri",
  "title": "Ekspor [Mineral Kritis] Terhambat, Kantor Staf Presiden Turun Tangan",
  "deck": "Pengusaha melaporkan hambatan ekspor mineral kritis, direspons langsung oleh Kantor Staf Presiden.",
  "date": "28 Juli 2026",
  "image": "assets/img/ekspor-mineral-kritis-terhambat-kantor-staf-presiden-turun-tangan.jpg",
  "imageV": "tjnrux",
  "tags": [
   "Mineral Kritis",
   "Ekspor",
   "Industri"
  ],
  "kreditFoto": "tvOneNews",
  "sourceUrl": "https://www.tvonenews.com/ekonomi/456176-pengusaha-lapor-ekspor-mineral-kritis-terhambat-ksp-dudung-turun-tangan-aparat-tidak-boleh-mengada-ada"
 }
];
