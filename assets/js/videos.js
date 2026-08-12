// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "EiLfnsqmr1o",
  "title": "Warung, Minimarket, dan Toko Online Bersaing",
  "category": "UMKM",
  "program": "IBF",
  "summary": "Persaingan usaha antara warung, minimarket, dan toko online kian ramai diperbincangkan, terutama soal siapa yang paling diuntungkan dari pergeseran pola belanja masyarakat.",
  "takeaway": "Menyoroti dampak pergeseran belanja daring terhadap pelaku usaha kecil seperti warung dan toko kelontong."
 },
 {
  "id": "4jr__0ELzCc",
  "title": "Kejagung Ungkap Kasus Korupsi Transfer Pricing CPO",
  "category": "Industri",
  "program": "Kabar Hari Ini",
  "summary": "Kejaksaan Agung mengusut dugaan korupsi perpajakan dan manipulasi harga ekspor minyak sawit mentah yang diduga melibatkan sekitar 10 perusahaan sawit.",
  "takeaway": "Kasus ini menyoroti praktik transfer pricing di industri sawit yang berpotensi merugikan penerimaan negara dari sektor ekspor."
 },
 {
  "id": "wC5PTtzRTaA",
  "title": "Bahlil dan Purbaya Bahas Pembatasan BBM Subsidi Pertalite",
  "category": "Energi",
  "program": "Kabar Hari Ini",
  "summary": "Menteri ESDM Bahlil Lahadalia dan Menteri Keuangan Purbaya Yudhi Sadewa membahas rencana pembatasan pembelian BBM bersubsidi jenis Pertalite.",
  "takeaway": "Kebijakan pembatasan subsidi BBM ini berpotensi berdampak langsung pada anggaran negara dan daya beli masyarakat."
 },
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
 }
];
