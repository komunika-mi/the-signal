// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "1KLQyv9o92A",
  "title": "Pembangunan Fasilitas Pengolahan Sampah Jadi Listrik Dimulai",
  "category": "Energi",
  "program": "Kabar Merah Putih",
  "summary": "Pembangunan fasilitas pengelolaan sampah menjadi energi listrik (PSEL) di Kota Bekasi resmi dimulai pada 26 Agustus 2026, berlokasi di kawasan Ciketing Udik, Bantargebang.",
  "takeaway": "Proyek PSEL berkaitan dengan upaya pengembangan energi alternatif dari sampah perkotaan, sehingga relevan bagi pembaca yang mengikuti isu energi dan investasi infrastruktur.",
  "terbit": "2026-08-26T09:06:24+00:00"
 },
 {
  "id": "tyj_A0VFAYQ",
  "title": "Sandiaga Uno Jadi Presiden Komisaris MUTU International",
  "category": "Bisnis",
  "program": "Kabar Pagi",
  "summary": "PT Mutuagung Lestari Tbk atau MUTU International menunjuk Sandiaga Salahuddin Uno sebagai Presiden Komisaris melalui RUPSLB, seiring rencana perusahaan memperluas bisnis sertifikasi mutu.",
  "takeaway": "Pergantian jajaran komisaris di perusahaan terbuka layak disimak karena berpotensi mengubah arah strategi dan tata kelola perusahaan ke depan.",
  "terbit": "2026-08-26T01:53:18+00:00"
 },
 {
  "id": "r4A6TWWW1sw",
  "title": "Presiden Prabowo Resmikan PLTS Gilimanuk di Bali",
  "category": "Energi",
  "program": "Kabar Utama",
  "summary": "Presiden Prabowo Subianto meresmikan groundbreaking tahap pertama proyek Pembangkit Listrik Tenaga Surya berkapasitas 100 gigawatt peak di Gilimanuk, Bali.",
  "takeaway": "Proyek ini penting bagi pembaca ekonomi karena mencerminkan arah investasi pemerintah dalam pengembangan energi terbarukan berskala besar.",
  "terbit": "2026-08-25T15:41:05+00:00"
 },
 {
  "id": "ewdCLytOnIA",
  "title": "AS Ancam Sanksi Baru, Matikan Ekonomi Iran",
  "category": "Global",
  "program": "Apa Kabar Indonesia Malam",
  "summary": "Amerika Serikat memberlakukan sanksi ekonomi baru terhadap Iran berdasarkan hukum domestiknya, langkah yang memicu perdebatan karena dinilai tidak memiliki dasar dari PBB.",
  "takeaway": "Sanksi ekonomi AS terhadap Iran relevan bagi pembaca karena berpotensi memengaruhi harga energi dan arus perdagangan global.",
  "terbit": "2026-08-25T13:10:05+00:00"
 },
 {
  "id": "s6X2aNbkM04",
  "title": "Presiden Prabowo Luncurkan Program PLTS 100 GWp di Bali",
  "category": "Energi",
  "program": "Indonesia Terkini",
  "summary": "Presiden Prabowo Subianto menggelar peluncuran dan groundbreaking program Pembangkit Listrik Tenaga Surya (PLTS) berkapasitas 100 gigawatt puncak di Jembrana, Bali, sebagai bagian dari agenda transisi energi nasional.",
  "takeaway": "Program energi surya berskala besar ini berpotensi menggerakkan investasi baru dan menjadi indikator kemajuan target bauran energi terbarukan Indonesia.",
  "terbit": "2026-08-25T13:30:15+00:00"
 },
 {
  "id": "u3IMZTSwJ-Q",
  "title": "Presiden Prabowo Resmikan Pembangunan PLTS 100 GWp",
  "category": "Energi",
  "program": "Kabar Petang",
  "summary": "Presiden Prabowo Subianto meresmikan pembangunan pembangkit listrik tenaga surya berkapasitas 100 gigawatt puncak di Jembrana, Bali, sebagai bagian dari program transisi energi nasional.",
  "takeaway": "Proyek PLTS berskala besar ini relevan bagi pembaca ekonomi karena menyangkut arah investasi energi terbarukan dan bauran energi nasional ke depan.",
  "terbit": "2026-08-25T11:00:29+00:00"
 },
 {
  "id": "Zl5RCPsgvD0",
  "title": "Presiden Prabowo Luncurkan Program PLTS 100 GWp",
  "category": "Energi",
  "program": "Breaking News",
  "summary": "Presiden Prabowo Subianto meluncurkan program Pembangkit Listrik Tenaga Surya berkapasitas 100 gigawatt peak di Kabupaten Jembrana, Bali.",
  "takeaway": "Peluncuran ini menandai langkah pemerintah memperbesar porsi energi terbarukan dalam bauran energi nasional, hal yang relevan bagi investor dan pelaku industri energi.",
  "terbit": "2026-08-25T09:18:07+00:00"
 },
 {
  "id": "oQa6Z0LZ3QI",
  "title": "Pidato Presiden Prabowo di Peluncuran PLTS 100 GWp",
  "category": "Energi",
  "program": "Breaking News",
  "summary": "Presiden Prabowo Subianto menyampaikan pidato resmi pada peluncuran program pembangkit listrik tenaga surya 100 gigawatt peak di Jembrana, Bali.",
  "takeaway": "Arah kebijakan yang disampaikan dalam pidato ini penting disimak karena menyangkut peta jalan transisi energi dan potensi investasi di sektor kelistrikan.",
  "terbit": "2026-08-25T08:58:33+00:00"
 },
 {
  "id": "Vt7k2-tJw6M",
  "title": "Presiden Prabowo Luncurkan Program PLTS 100 GWp",
  "category": "Energi",
  "program": "tvOneNews",
  "summary": "Presiden Prabowo Subianto meluncurkan sekaligus melakukan groundbreaking Program Pembangkit Listrik Tenaga Surya berkapasitas 100 gigawatt peak di Monumen Operasi Lintas Laut Jawa Bali.",
  "takeaway": "Program PLTS berskala besar ini menandai langkah pemerintah memperluas energi terbarukan, hal yang relevan bagi arah investasi dan bauran energi nasional ke depan.",
  "terbit": "2026-07-10T13:05:34+00:00"
 },
 {
  "id": "Z66PZJknxSA",
  "title": "Ratusan Karyawan Perusahaan Tambang di Konawe Selatan Kena PHK",
  "category": "Ketenagakerjaan",
  "program": "Kabar Hari Ini",
  "summary": "Ratusan karyawan sebuah perusahaan tambang di Kabupaten Konawe Selatan, Sulawesi Tenggara, dirumahkan setelah kegiatan operasional perusahaan tersebut terhenti.",
  "takeaway": "Kasus PHK massal di sektor tambang ini relevan sebagai indikator tekanan pada industri ekstraktif dan pasar tenaga kerja daerah.",
  "terbit": "2026-08-24T15:45:31+00:00"
 },
 {
  "id": "V8tXxrsFCtc",
  "title": "Peluncuran Danantara Sumber Daya Indonesia",
  "category": "BUMN",
  "program": "Kabar Utama",
  "summary": "BPI Danantara resmi mengonfirmasi berdirinya PT Danantara Sumberdaya Indonesia (DSI) yang dibentuk melalui akta perusahaan sejak 1 Juni 2026, seperti disampaikan CEO BPI Danantara Rosan Roeslani.",
  "takeaway": "Perkembangan ini penting bagi pembaca ekonomi karena menyangkut struktur baru pengelolaan aset dan investasi negara melalui BPI Danantara.",
  "terbit": "2026-08-24T14:18:35+00:00"
 },
 {
  "id": "sZlTPmyTGcQ",
  "title": "Pemerintah Dukung Sertifikasi Pekerja Industri Kecantikan",
  "category": "Ketenagakerjaan",
  "program": "Kabar Merah Putih",
  "summary": "Pemerintah mendorong penguatan standar kompetensi bagi pekerja sektor kecantikan, termasuk tenaga profesional make up, melalui program sertifikasi resmi.",
  "takeaway": "Kebijakan ini relevan bagi pembaca ekonomi karena menyangkut kualitas dan daya saing tenaga kerja di sektor jasa yang terus tumbuh.",
  "terbit": "2026-08-24T09:05:40+00:00"
 }
];
