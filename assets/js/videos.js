// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "nBoIvPni-mw",
  "title": "KPPU Beri Rekomendasi Agar Persaingan Usaha Sehat",
  "category": "Bisnis",
  "program": "IBF tvOne",
  "summary": "KPPU menyampaikan sejumlah rekomendasi agar persaingan usaha antara toko kelontong, minimarket, dan platform belanja online di Indonesia berjalan lebih sehat.",
  "takeaway": "Relevan bagi pembaca karena menyangkut kebijakan persaingan usaha yang berdampak pada pelaku ritel kecil dan menengah."
 },
 {
  "id": "xzZbJD-0U0g",
  "title": "Roy: UMKM Bukan Sekadar Mitra Bisnis",
  "category": "UMKM",
  "program": "IBF tvOne",
  "summary": "Dalam diskusi soal persaingan usaha ritel, Roy menekankan bahwa pelaku UMKM semestinya diperlakukan lebih dari sekadar mitra oleh peritel besar dan platform online.",
  "takeaway": "Menyoroti posisi tawar UMKM di tengah ekspansi minimarket dan e-commerce."
 },
 {
  "id": "X5DpqJrUYzg",
  "title": "KPPU: Ada Ketidakseimbangan Persaingan di Ritel",
  "category": "Bisnis",
  "program": "IBF tvOne",
  "summary": "KPPU menyoroti ketidakseimbangan persaingan antara toko kelontong, minimarket, dan toko online yang dinilai dapat merugikan pelaku usaha kecil.",
  "takeaway": "Menunjukkan sikap regulator terhadap dinamika persaingan usaha ritel yang makin dipengaruhi platform digital."
 },
 {
  "id": "I6cz5lF8atY",
  "title": "Peneliti: 14 Juta UMKM Eceran, Pertumbuhan Lambat",
  "category": "UMKM",
  "program": "IBF tvOne",
  "summary": "Seorang peneliti mengungkapkan bahwa dari 14 juta UMKM eceran di Indonesia, pertumbuhan sektor ini masih berjalan sangat lambat di tengah persaingan dengan ritel modern dan online.",
  "takeaway": "Data ini penting untuk memahami tantangan usaha kecil menghadapi disrupsi ritel modern."
 },
 {
  "id": "3vzu4YBimyE",
  "title": "Persaingan Warung, Minimarket, dan Toko Online",
  "category": "Bisnis",
  "program": "Indonesia Business Forum",
  "summary": "Diskusi mengupas persaingan usaha antara warung kelontong, minimarket, dan toko online yang kian ketat seiring maraknya promosi dan diskon belanja daring.",
  "takeaway": "Menarik bagi pembaca yang mengikuti pergeseran pola belanja masyarakat dan dampaknya terhadap pelaku usaha ritel kecil di Indonesia."
 },
 {
  "id": "wZTIOV7wn2I",
  "title": "Bahlil Jelaskan Rencana Pembatasan Pembelian Pertalite",
  "category": "Energi",
  "program": "Kabar Merah Putih",
  "summary": "Menteri ESDM Bahlil Lahadalia memaparkan rencana pembatasan pembelian BBM jenis Pertalite, termasuk kriteria kendaraan yang akan terkena aturan tersebut.",
  "takeaway": "Kebijakan pembatasan BBM bersubsidi berpengaruh langsung pada biaya transportasi dan anggaran subsidi energi, sehingga relevan dipantau pembaca ekonomi."
 },
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
 }
];
