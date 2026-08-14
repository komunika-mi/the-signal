// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "RQYc7uSgUxE",
  "title": "Desa Sebagai Kekuatan Ekonomi Baru Indonesia",
  "category": "Makroekonomi",
  "program": "One on One",
  "summary": "Menteri Desa PDTT Yandri Susanto membahas potensi desa sebagai basis pembangunan sekaligus penggerak baru pertumbuhan ekonomi nasional.",
  "takeaway": "Relevan bagi pembaca yang mengikuti arah kebijakan pembangunan desa dan dampaknya terhadap ekonomi daerah."
 },
 {
  "id": "20AvmOBuplc",
  "title": "DPR: Program Prabowo Dirasakan Langsung Masyarakat",
  "category": "Makroekonomi",
  "program": "AKIM",
  "summary": "Anggota Komisi XI DPR RI menilai RAPBN 2027 yang difokuskan pada delapan Program Kerja Prioritas Nasional mulai memberi dampak nyata bagi masyarakat.",
  "takeaway": "Menunjukkan penilaian DPR atas arah belanja negara dalam RAPBN 2027 yang tengah dibahas pemerintah."
 },
 {
  "id": "olOxaJPvTCk",
  "title": "DPR dan LPS Tanggapi Rancangan APBN 2027",
  "category": "Perbankan",
  "program": "AKIM",
  "summary": "Anggota DPR RI dan Ketua Dewan Komisioner LPS memberikan tanggapan atas RAPBN 2027 yang difokuskan pada delapan Program Kerja Prioritas Nasional.",
  "takeaway": "Memberi gambaran pandangan legislatif dan otoritas penjamin simpanan terhadap arah anggaran negara tahun depan."
 },
 {
  "id": "2K3sUklWyCQ",
  "title": "Pemerintah Sampaikan RAPBN 2027 dan Nota Keuangan",
  "category": "Makroekonomi",
  "program": "Kabar Petang",
  "summary": "Presiden Prabowo Subianto memaparkan RAPBN 2027 yang difokuskan pada delapan Program Kerja Prioritas Nasional dalam Nota Keuangan pemerintah.",
  "takeaway": "Menjadi acuan utama bagi pembaca untuk memahami arah kebijakan fiskal pemerintah tahun depan."
 },
 {
  "id": "HP1xjM8ePGM",
  "title": "Ketua LPS: Target Pemerintah 2027 Cukup Realistis",
  "category": "Makroekonomi",
  "program": "AKIM",
  "summary": "Ketua Dewan Komisioner LPS menilai target pemerintah di 2027 realistis, mencakup proyeksi pertumbuhan ekonomi, penguatan hilirisasi, dan disiplin fiskal.",
  "takeaway": "Memberi perspektif otoritas keuangan atas kredibilitas target ekonomi pemerintah untuk tahun mendatang."
 },
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
 }
];
