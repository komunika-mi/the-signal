// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "X2iFftwFwqo",
  "title": "Mendes PDT: Kopdes Belum Sukses, Masyarakat Diminta Sabar",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Menteri Desa dan Pembangunan Daerah Tertinggal mengakui program Koperasi Desa belum berjalan optimal dan meminta masyarakat bersabar menanti hasilnya.",
  "takeaway": "Program koperasi desa digadang jadi penggerak ekonomi baru di tingkat desa, sehingga perkembangannya relevan bagi pembaca yang mengikuti isu UMKM."
 },
 {
  "id": "fCoq00Isco8",
  "title": "Rincian Anggaran Program Prioritas Pemerintahan Prabowo",
  "category": "Makroekonomi",
  "program": "Kabar Utama",
  "summary": "Pemerintahan Presiden Prabowo Subianto mengalokasikan ratusan triliun rupiah dari APBN untuk menjalankan 11 program prioritas nasional.",
  "takeaway": "Rincian alokasi APBN ini membantu pembaca memahami arah kebijakan fiskal pemerintah dan sektor mana yang mendapat prioritas anggaran."
 },
 {
  "id": "zCfI3Y4QG_s",
  "title": "Pemerintah Siapkan Anggaran Rp4.097 Triliun untuk 2027",
  "category": "Makroekonomi",
  "program": "Apa Kabar Indonesia Malam",
  "summary": "Pemerintah menyiapkan delapan program prioritas untuk tahun 2027 dengan dukungan anggaran mencapai Rp4.097 triliun.",
  "takeaway": "Besaran anggaran ini menunjukkan skala kebijakan fiskal pemerintah yang berpotensi berdampak luas pada perekonomian nasional."
 },
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
 }
];
