// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "PQlLZ5wopAM",
  "title": "Prabowo Sampaikan Pidato Nota Keuangan dan RAPBN 2027",
  "category": "Makroekonomi",
  "program": "tvOneNews",
  "summary": "Presiden Prabowo Subianto menyampaikan pidato Nota Keuangan dan RAPBN 2027 dalam Sidang Tahunan MPR RI, memaparkan rancangan arah kebijakan fiskal pemerintah tahun depan.",
  "takeaway": "Penting diikuti karena RAPBN menjadi acuan utama arah belanja dan pendapatan negara setahun ke depan."
 },
 {
  "id": "wdyyrAktpi4",
  "title": "Waspada Risiko Inflasi Pangan Akibat El Nino",
  "category": "Makroekonomi",
  "program": "Kabar Khusus",
  "summary": "BPS mencatat inflasi tahunan kelompok makanan, minuman, dan tembakau melambat ke 2,97 persen pada pertengahan 2026, meski risiko tekanan akibat El Nino tetap diwaspadai.",
  "takeaway": "Relevan bagi pembaca yang mengikuti dinamika harga pangan dan dampaknya terhadap daya beli."
 },
 {
  "id": "EYdhQuOLsPY",
  "title": "Ekonom BNI Soroti Daya Beli Masyarakat",
  "category": "Makroekonomi",
  "program": "Kabar Khusus",
  "summary": "Ekonom BNI Leo Putera Rinaldy menilai pemerintah perlu menjaga momentum pertumbuhan ekonomi lewat penciptaan lapangan kerja untuk mendorong daya beli masyarakat.",
  "takeaway": "Memberi gambaran tantangan konsumsi rumah tangga di tengah pertumbuhan ekonomi nasional."
 },
 {
  "id": "VM9Xu-n_5MY",
  "title": "Ekonom BNI Nilai Fundamental Ekonomi RI Tetap Kuat",
  "category": "Makroekonomi",
  "program": "Kabar Khusus",
  "summary": "Ekonom BNI Leo Putera Rinaldy menyebut fundamental ekonomi Indonesia tetap resilien, dengan pertumbuhan semester I 2026 mencapai 5,45 persen ditopang konsumsi.",
  "takeaway": "Menunjukkan penilaian kalangan ekonom terhadap ketahanan ekonomi domestik di tengah ketidakpastian global."
 },
 {
  "id": "RsxZ5gIt2lM",
  "title": "Roda Ekonomi Bergairah, Pedagang Bendera Ramai Jelang HUT RI",
  "category": "UMKM",
  "program": "Kabar Siang",
  "summary": "Menjelang HUT RI, penjualan bendera dan atribut merah putih ramai di Yogyakarta, mencerminkan geliat aktivitas ekonomi pedagang kecil menjelang perayaan.",
  "takeaway": "Menggambarkan dampak momentum tahunan terhadap perputaran ekonomi pelaku usaha kecil."
 },
 {
  "id": "ID8ki46wD5Q",
  "title": "Pemkab Mojokerto Jajaki Investasi dengan Kota Bayannur China",
  "category": "Global",
  "program": "tvOneNews",
  "summary": "Pemkab Mojokerto membuka peluang kerja sama investasi dengan Pemerintah Kota Bayannur, Mongolia Dalam, Tiongkok, sekaligus memperkenalkan potensi daerah.",
  "takeaway": "Relevan sebagai sinyal upaya pemerintah daerah menarik investasi dari luar negeri."
 },
 {
  "id": "QTkQpWIA4g4",
  "title": "Update Kurs Rupiah dan Kinerja Saham LQ45",
  "category": "Pasar Modal",
  "program": "Kabar Siang",
  "summary": "Kurs rupiah pada 14 Agustus 2026 pukul 11.30 WIB berada di level Rp17.840,9 per dolar AS, bergerak 0,03 persen menurut data Investing.com.",
  "takeaway": "Memberi pembaca informasi kurs dan pergerakan pasar saham terkini untuk memantau kondisi pasar harian."
 },
 {
  "id": "Yi68Bx3obXQ",
  "title": "DPR dan Buruh Bahas RUU Ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "program": "Kabar Hari Ini",
  "summary": "Pimpinan DPR RI menerima perwakilan serikat buruh untuk membahas penyusunan RUU Ketenagakerjaan, termasuk sejumlah usulan yang diajukan buruh untuk masuk ke draf regulasi.",
  "takeaway": "Pembahasan RUU ini layak disimak karena berpotensi mengubah aturan ketenagakerjaan yang berdampak pada pekerja maupun dunia usaha."
 },
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
 }
];
