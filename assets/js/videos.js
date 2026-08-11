// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "VAPaXWE1pLM",
  "title": "VKTR Serahkan Dua Bus Listrik ke Universitas Negeri Yogyakarta",
  "category": "Industri",
  "program": "Kabar Hari Ini",
  "summary": "PT VKTR Teknologi Mobilitas Tbk menyerahkan dua unit bus listrik sepanjang 8 meter kepada Universitas Negeri Yogyakarta untuk mendukung operasional kampus yang lebih rendah emisi.",
  "takeaway": "Langkah ini mencerminkan geliat industri kendaraan listrik dalam negeri sebagai bagian dari upaya transisi energi bersih di sektor transportasi."
 },
 {
  "id": "-ivXEzjEsVM",
  "title": "Gerobak Nyai, Modal Usaha untuk Warga Tanpa Pekerjaan",
  "category": "UMKM",
  "program": "Metropolitan",
  "summary": "Program Gerobak Nyai memberi kesempatan bagi warga tanpa pekerjaan untuk mulai berdagang sebagai jalan membangun ekonomi kerakyatan dari skala kecil.",
  "takeaway": "Relevan bagi pembaca yang mengikuti perkembangan pemberdayaan UMKM dan program bantuan modal usaha di tingkat akar rumput."
 },
 {
  "id": "Olhcihpm220",
  "title": "Menkeu Purbaya Optimis Pertumbuhan Ekonomi Bisa Capai 6 Persen",
  "program": "Kabar Merah Putih",
  "category": "Makroekonomi",
  "summary": "Menteri Keuangan Purbaya memaparkan dasar optimismenya bahwa pertumbuhan ekonomi Indonesia bisa menembus 6 persen. Ia menyoroti ruang belanja pemerintah, penguatan konsumsi domestik, dan efek program prioritas terhadap sektor riil.",
  "takeaway": "Target 6 persen berada di atas rata-rata pertumbuhan lima tahun terakhir, sehingga pencapaiannya bergantung pada realisasi belanja dan pemulihan daya beli.",
  "featured": true
 },
 {
  "id": "lG5dhNFKi3g",
  "title": "Pengamat Ekonomi: Harga Emas Bakal Terus Meroket?",
  "program": "Indonesia Business Forum",
  "category": "Pasar Modal",
  "summary": "Diskusi panel membahas arah harga emas yang terus menguat sepanjang tahun. Narasumber mengulas faktor pendorongnya, mulai dari ketidakpastian geopolitik, arah suku bunga bank sentral, hingga perilaku bank sentral dunia yang menambah cadangan emas.",
  "takeaway": "Untuk investor ritel, emas diposisikan sebagai lindung nilai jangka panjang, bukan instrumen mengejar keuntungan jangka pendek.",
  "featured": false
 },
 {
  "id": "m1q86JjJ4Kg",
  "title": "Purbaya Ungkap APBN di Tengah Labilnya Ekonomi Global",
  "program": "tvOneNews",
  "category": "Moneter",
  "summary": "Menteri Keuangan memaparkan kondisi Anggaran Pendapatan dan Belanja Negara di tengah ketidakpastian ekonomi global. Pembahasan mencakup penerimaan pajak, realisasi belanja, dan ruang fiskal yang tersisa.",
  "takeaway": "Ruang fiskal yang sempit membatasi kemampuan pemerintah merespons guncangan eksternal lewat stimulus tambahan.",
  "featured": false
 },
 {
  "id": "_ZV-tannxT8",
  "title": "Pengamat Bahas Dampak Kebijakan Tarif AS terhadap Ekonomi Dunia",
  "program": "tvOneNews",
  "category": "Global",
  "summary": "Pengamat membedah dampak kebijakan tarif Amerika Serikat terhadap perdagangan global dan posisi negara berkembang. Bahasan menyentuh risiko perang dagang jilid baru serta efeknya pada rantai pasok yang melibatkan pabrik di Asia Tenggara.",
  "takeaway": "Bagi Indonesia, eskalasi tarif berdampak dua arah: menekan permintaan ekspor, tetapi juga membuka celah relokasi pabrik dari negara yang terkena tarif tinggi.",
  "featured": false
 },
 {
  "id": "I5oR7b-C4OE",
  "title": "Menteri Purbaya Blak-Blakan Ungkap Kondisi Ekonomi",
  "program": "tvOneNews",
  "category": "Makroekonomi",
  "summary": "Menteri Keuangan berbicara terbuka soal kondisi perekonomian yang disebutnya tidak sepenuhnya baik-baik saja. Ia menyinggung tekanan daya beli, penerimaan negara, serta tantangan yang dihadapi sektor usaha.",
  "takeaway": "Pengakuan terbuka pejabat fiskal soal tekanan ekonomi biasanya menjadi sinyal awal penyesuaian asumsi anggaran.",
  "featured": false
 },
 {
  "id": "PqfmvSC1rNw",
  "title": "Dampak Positif Program MBG bagi Ekonomi Sektor Pangan",
  "program": "tvOneNews",
  "category": "Bisnis",
  "summary": "Tayangan ini menyoroti bagaimana program Makan Bergizi Gratis menggerakkan rantai pasok pangan di daerah, mulai dari petani, pemasok bahan baku, hingga penyedia jasa katering lokal.",
  "takeaway": "Program berskala nasional seperti MBG menciptakan permintaan tetap bagi produsen pangan lokal, meski keberlanjutannya bergantung pada kelancaran pembayaran.",
  "featured": false
 },
 {
  "id": "rt6rcaFjEP4",
  "title": "Kepala BGN Ungkap Peran MBG dalam Serap Jutaan Pekerja",
  "program": "tvOneNews",
  "category": "Ketenagakerjaan",
  "summary": "Kepala Badan Gizi Nasional menjelaskan skala penyerapan tenaga kerja dari program Makan Bergizi Gratis, mencakup juru masak, pengantar, hingga pengelola dapur di berbagai daerah.",
  "takeaway": "Penyerapan tenaga kerja jadi salah satu argumen utama mempertahankan program, di samping tujuan awalnya soal perbaikan gizi.",
  "featured": false
 },
 {
  "id": "OLM-fMgDcOw",
  "title": "SBY Serukan Kolaborasi untuk Wujudkan Ekonomi Baru",
  "program": "Kabar Pagi",
  "category": "Makroekonomi",
  "summary": "Presiden ke-6 RI Susilo Bambang Yudhoyono menyerukan kolaborasi lintas pihak untuk membangun struktur ekonomi baru. Pesannya menyentuh pentingnya kesinambungan kebijakan antarperiode pemerintahan.",
  "takeaway": "Kesinambungan kebijakan ekonomi lintas pemerintahan kerap disebut investor sebagai faktor yang menentukan iklim investasi jangka panjang.",
  "featured": false
 },
 {
  "id": "MPBASi93Yhk",
  "title": "Cara Menkeu Purbaya Kembalikan Ekonomi dari Keterpurukan",
  "program": "AKIP",
  "category": "Moneter",
  "summary": "Wawancara mendalam bersama Menteri Keuangan soal strategi memulihkan perekonomian. Pembahasan mencakup prioritas belanja, pengelolaan utang, dan koordinasi dengan otoritas moneter.",
  "takeaway": "Koordinasi fiskal dan moneter menjadi penentu utama efektivitas pemulihan, terutama saat ruang penurunan suku bunga terbatas.",
  "featured": false
 },
 {
  "id": "uO1l-PZpQaE",
  "title": "Kriminolog Sebut Tekanan Ekonomi Jadi Pemicu Aksi Kriminal",
  "program": "tvOneNews",
  "category": "Makroekonomi",
  "summary": "Kriminolog membahas keterkaitan antara tekanan ekonomi rumah tangga dan meningkatnya angka kejahatan. Bahasan menyoroti kelompok yang paling rentan ketika lapangan kerja menyusut.",
  "takeaway": "Data pengangguran dan PHK kerap dipakai sebagai indikator awal untuk memperkirakan tekanan sosial di kota besar.",
  "featured": false
 }
];
