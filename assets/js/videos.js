// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "QpHHORrp9E8",
  "title": "Dunia Hadapi Ancaman Suplai Minyak",
  "category": "Energi",
  "program": "Kabar Hari Ini",
  "summary": "Wakil Menteri Luar Negeri RI memaparkan strategi Indonesia menghadapi dinamika geopolitik global yang berpotensi mengganggu pasokan minyak dunia.",
  "takeaway": "Gangguan suplai minyak global berpotensi mendorong kenaikan harga energi dan biaya produksi di dalam negeri."
 },
 {
  "id": "bydSlkGAIWo",
  "title": "BPS Rilis Statistik Perumahan 2026",
  "category": "Makroekonomi",
  "program": "Kabar Utama",
  "summary": "Badan Pusat Statistik bersama Kementerian PKP merilis Statistik Perumahan 2026 sebagai basis data untuk memantau kondisi perumahan nasional.",
  "takeaway": "Data ini menjadi rujukan pelaku bisnis properti dan pembuat kebijakan dalam memetakan kebutuhan perumahan masyarakat."
 },
 {
  "id": "lH4tYlMayQk",
  "title": "Peresmian Ekosistem Motor Listrik Nasional Molinas",
  "category": "Industri",
  "program": "Kabar Utama",
  "summary": "Presiden Prabowo Subianto meresmikan Ekosistem Motor Listrik Nasional (Molinas) sekaligus menandatangani plakat produksi 20.000 unit pertama dari ALVA di Cikarang, Jawa Barat.",
  "takeaway": "Peresmian ini menandai langkah pengembangan industri kendaraan listrik dalam negeri yang berpotensi mendorong investasi manufaktur nasional."
 },
 {
  "id": "HfLm-4ZFk_w",
  "title": "Peneliti Ungkap Pertumbuhan Toko Kelontong Melambat",
  "category": "UMKM",
  "program": "IBF",
  "summary": "Peneliti menyoroti pertumbuhan toko kelontong yang relatif lambat di tengah ketatnya persaingan dengan minimarket dan toko online yang gencar menawarkan promosi serta diskon.",
  "takeaway": "Isu ini penting bagi pembaca karena menggambarkan tekanan persaingan yang dihadapi pelaku usaha ritel tradisional di tengah ekspansi belanja online."
 },
 {
  "id": "ZSYqTTdPyoI",
  "title": "DPR Bahas RUU Ketenagakerjaan Bersama Buruh",
  "category": "Ketenagakerjaan",
  "program": "Kabar Petang",
  "summary": "Pimpinan DPR RI menerima perwakilan serikat buruh untuk membahas penyusunan RUU Ketenagakerjaan, termasuk sejumlah usulan buruh yang berpotensi masuk materi undang-undang baru.",
  "takeaway": "Pembahasan RUU ini patut disimak pelaku usaha dan pekerja karena berpotensi mengubah aturan hubungan industrial ke depan."
 },
 {
  "id": "e1BGUBEWjO0",
  "title": "Rupiah Melemah Saat Harga Minyak Dunia Bergerak",
  "category": "Moneter",
  "program": "Kabar Petang",
  "summary": "Nilai tukar rupiah terhadap dolar AS melemah 8 poin atau 0,04 persen pada pembukaan perdagangan Rabu, menjadi Rp17.869 per dolar AS.",
  "takeaway": "Pergerakan kurs rupiah dan harga minyak dunia menjadi acuan penting bagi pelaku pasar dalam menyusun strategi bisnis harian."
 },
 {
  "id": "xcQOeYp9ndA",
  "title": "Prabowo Resmikan Ekosistem Motor Listrik Nasional",
  "category": "Industri",
  "program": "Kabar Petang",
  "summary": "Presiden Prabowo Subianto meresmikan ekosistem motor listrik nasional produksi PT Ilectra Motor Group (ALVA) di Cikarang, dengan 20 ribu unit motor listrik telah diproduksi.",
  "takeaway": "Peresmian ini menandai perkembangan industri kendaraan listrik dalam negeri yang berdampak pada rantai pasok dan investasi domestik."
 },
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
 }
];
