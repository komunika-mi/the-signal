// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
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
 },
 {
  "id": "z_ODNU76JNA",
  "title": "Harga Daging Sapi Tembus Rp160 Ribu per Kg",
  "category": "Makroekonomi",
  "program": "Kabar Merah Putih",
  "summary": "Harga daging sapi di pasar naik hingga Rp160.000 per kilogram, sehingga pemerintah menyiapkan langkah stabilisasi menggunakan dana APBN dan APBD.",
  "takeaway": "Kenaikan harga daging sapi menjadi indikator tekanan inflasi pangan yang berdampak langsung pada daya beli masyarakat.",
  "terbit": "2026-08-24T08:55:54+00:00"
 },
 {
  "id": "6WnRuyBPVcA",
  "title": "Kurs Rupiah dan Harga Emas Antam 24 Agustus 2026",
  "category": "Moneter",
  "program": "Kabar Siang",
  "summary": "Nilai tukar rupiah pada Senin, 24 Agustus 2026, berada di kisaran Rp17.680 hingga Rp17.703 per dolar AS. Harga emas batangan Antam naik Rp10.000 per gram pada hari yang sama.",
  "takeaway": "Pergerakan kurs dan harga emas harian penting bagi pembaca sebagai acuan cepat kondisi pasar keuangan domestik.",
  "terbit": "2026-08-24T07:35:07+00:00"
 },
 {
  "id": "K-HCBg9XDVk",
  "title": "Perpres Ojol Sangat Dinanti Driver, Apa Saja Isinya?",
  "category": "Ketenagakerjaan",
  "program": "Apa Kabar Indonesia Malam",
  "summary": "Pemerintah dan DPR RI memasuki tahap akhir finalisasi Peraturan Presiden tentang perlindungan pekerja transportasi online, mencakup pengemudi penumpang serta kurir barang dan makanan.",
  "takeaway": "Relevan bagi pembaca ekonomi karena menyangkut kepastian hukum dan kesejahteraan jutaan pekerja di sektor ekonomi gig yang terus berkembang di Indonesia.",
  "terbit": "2026-08-23T14:21:02+00:00"
 },
 {
  "id": "8MR2N8l3TyU",
  "title": "BPS: Backlog Rumah Turun Jadi 9,29 Juta Keluarga",
  "category": "Makroekonomi",
  "program": "Ulas Utas",
  "summary": "Badan Pusat Statistik mencatat backlog rumah tangga yang belum memiliki rumah di Indonesia menyusut menjadi 9,29 juta keluarga atau 12,39 persen dari total rumah tangga pada 2026.",
  "takeaway": "Data backlog perumahan ini penting sebagai indikator daya beli dan perkembangan sektor properti nasional.",
  "terbit": "2026-08-18T19:50:03+07:00"
 },
 {
  "id": "tv6fetTfC-g",
  "title": "Transformasi Pegadaian Jadi Pelopor Ekosistem Bullion Nasional",
  "category": "Perbankan",
  "program": "Inspirasi Pagi",
  "summary": "PT Pegadaian memperkuat posisinya sebagai bank emas pertama di Indonesia, yang resmi beroperasi sejak 26 Februari 2025, untuk mengembangkan ekosistem bullion nasional.",
  "takeaway": "Penting bagi pembaca ekonomi karena menunjukkan langkah BUMN memperluas layanan keuangan berbasis emas yang dapat memengaruhi industri perbankan dan investasi logam mulia di dalam negeri.",
  "terbit": "2026-08-18T17:59:20+07:00"
 }
];
