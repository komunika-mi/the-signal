// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "vkl7oDWHgXs",
  "title": "RAPBN 2027 Difokuskan untuk Keluar dari Middle Income Trap",
  "category": "Makroekonomi",
  "program": "Kabar Petang",
  "summary": "Presiden Prabowo Subianto menyampaikan bahwa Rancangan APBN Tahun Anggaran 2027 akan difokuskan pada delapan program prioritas untuk mendorong Indonesia keluar dari jebakan pendapatan menengah.",
  "takeaway": "Arah RAPBN 2027 penting diikuti karena menentukan alokasi anggaran negara dan strategi pemerintah menghadapi risiko stagnasi pertumbuhan ekonomi."
 },
 {
  "id": "9k5StIe8Sd4",
  "title": "Investasi Jadi Kunci Pemerintah Kejar Pertumbuhan Ekonomi",
  "category": "Makroekonomi",
  "program": "Kabar Petang",
  "summary": "Pemerintah menempatkan peningkatan investasi sebagai salah satu kunci utama untuk mendorong pertumbuhan ekonomi dan memperkuat perekonomian nasional.",
  "takeaway": "Kebijakan investasi berdampak langsung pada iklim usaha dan proyeksi pertumbuhan ekonomi yang jadi perhatian pelaku pasar dan dunia usaha."
 },
 {
  "id": "TOmSIGJbUcQ",
  "title": "Jakarta dan Bali Ditetapkan Jadi Pusat Finansial Internasional",
  "category": "Pasar Modal",
  "program": "Kabar Khusus",
  "summary": "Presiden Prabowo Subianto menetapkan Jakarta dan Bali sebagai lokasi Pusat Finansial Internasional Indonesia untuk memperkuat posisi ekonomi nasional di kancah global.",
  "takeaway": "Pembentukan pusat finansial internasional berpotensi menarik arus modal asing dan relevan bagi pelaku industri keuangan serta investor."
 },
 {
  "id": "JTwtp-jOv9U",
  "title": "Prabowo: Lembaga Rating China Beri RI Peringkat AAA",
  "category": "Makroekonomi",
  "program": "Kabar Khusus",
  "summary": "Presiden Prabowo menyebut lembaga pemeringkat kredit asal China turut memberikan peringkat AAA untuk Indonesia, menyusul pengakuan serupa dari lembaga rating negara Barat.",
  "takeaway": "Peringkat kredit tertinggi dari lembaga internasional menjadi sinyal penting bagi kepercayaan investor terhadap perekonomian Indonesia."
 },
 {
  "id": "-8pBINsXmyA",
  "title": "Prabowo Imbau Masyarakat Jujur Isi Sensus Ekonomi 2026",
  "category": "Makroekonomi",
  "program": "Kabar Khusus",
  "summary": "Presiden Prabowo mengimbau masyarakat mengisi Sensus Ekonomi 2026 secara jujur karena data BPS yang akurat menjadi dasar penyusunan kebijakan ekonomi pemerintah.",
  "takeaway": "Kualitas data sensus menentukan ketepatan kebijakan ekonomi yang akan diambil pemerintah ke depan."
 },
 {
  "id": "eGrQGxD-R6E",
  "title": "Prabowo: BUMN Tak Boleh Jadi Milik Direksi atau Penguasa",
  "category": "BUMN",
  "program": "tvOneNews",
  "summary": "Pemerintah menemukan 1.074 BUMN, termasuk perusahaan anak hingga cicit, dan telah menutup 290 di antaranya sebagai bagian dari perampingan.",
  "takeaway": "Perampingan BUMN berdampak langsung pada efisiensi pengelolaan aset negara dan tata kelola perusahaan pelat merah."
 },
 {
  "id": "S2Ck7DJ9KvY",
  "title": "Prabowo: Ekonomi RI Tetap Kokoh di Tengah Perang Dagang",
  "category": "Global",
  "program": "Kabar Khusus",
  "summary": "Presiden Prabowo menyatakan ekonomi Indonesia tetap bertahan di tengah tekanan suku bunga global, pelemahan nilai tukar, dan ketegangan perdagangan dunia.",
  "takeaway": "Ketahanan ekonomi domestik penting dicermati investor di tengah gejolak geopolitik dan perang dagang global."
 },
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
 }
];
