// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "aXLA5H-ddHs",
  "title": "Perwakilan Buruh Temui Pimpinan DPR Bahas RUU Ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "program": "Kabar Merah Putih",
  "summary": "Perwakilan serikat pekerja dan buruh bertemu pimpinan DPR RI untuk membahas penyusunan Rancangan Undang-Undang Ketenagakerjaan.",
  "takeaway": "Pembahasan RUU ini penting diikuti karena berpotensi mengubah aturan hubungan kerja yang berdampak bagi pekerja dan dunia usaha."
 },
 {
  "id": "IyhEusFfZ7E",
  "title": "Menkeu Purbaya Buka Suara soal Utang Pemerintah Tembus Rp10.000 T",
  "category": "Makroekonomi",
  "program": "Kabar Merah Putih",
  "summary": "Menteri Keuangan Purbaya menanggapi sorotan publik atas utang pemerintah yang tembus Rp10.000 triliun hingga akhir semester I 2026, mengacu pada data Direktorat Jenderal Pengelolaan Pembiayaan.",
  "takeaway": "Angka utang pemerintah menjadi indikator penting bagi pembaca untuk menilai kesehatan fiskal dan kapasitas anggaran negara ke depan."
 },
 {
  "id": "KGPOrCttArc",
  "title": "Prabowo Luncurkan Ekosistem Motor Listrik Nasional ALVA",
  "category": "Industri",
  "program": "AKIS tvOne",
  "summary": "Presiden Prabowo meresmikan ekosistem motor listrik nasional produksi PT Ilectra Motor Group di Cikarang, dengan realisasi produksi sekitar 20 ribu unit.",
  "takeaway": "Peluncuran ini menandai perkembangan industri kendaraan listrik dalam negeri yang relevan bagi peta persaingan otomotif nasional."
 },
 {
  "id": "GqON7qC3_Dw",
  "title": "Calon Gubernur BI Mulai Diproses DPR Pekan Depan",
  "category": "Moneter",
  "program": "Kabar Merah Putih",
  "summary": "DPR akan mulai memproses calon Gubernur Bank Indonesia pekan depan sebagai tahapan menuju penetapan pimpinan bank sentral yang baru.",
  "takeaway": "Sosok Gubernur BI berikutnya akan turut menentukan arah kebijakan moneter, sehingga proses seleksinya penting dicermati pelaku pasar."
 },
 {
  "id": "2YRniOy2Rpc",
  "title": "Presiden Prabowo Luncurkan Motor Listrik Nasional",
  "category": "Industri",
  "program": "tvOneNews",
  "summary": "Presiden Prabowo Subianto secara resmi meluncurkan program motor listrik nasional sebagai bagian dari pengembangan industri kendaraan listrik dalam negeri.",
  "takeaway": "Peluncuran ini menjadi sinyal dukungan pemerintah terhadap pengembangan industri kendaraan listrik nasional."
 },
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
 }
];
