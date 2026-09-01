// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "sn-PhvAmsCI",
  "title": "Moskow Perkuat Kerja Sama Pariwisata dengan Indonesia",
  "category": "Bisnis",
  "program": "Kabar Hari Ini",
  "summary": "Komite Pariwisata Kota Moskow menggelar misi bisnis di Jakarta untuk memperluas hubungan pariwisata sekaligus memperkuat kerja sama dengan Indonesia.",
  "takeaway": "Misi bisnis lintas negara ini penting disimak karena berpotensi membuka peluang kerja sama dagang dan investasi di sektor pariwisata kedua negara.",
  "terbit": "2026-09-01T16:54:53+00:00"
 },
 {
  "id": "gHPBLC9HNa4",
  "title": "Kuota FLPP Naik Jadi 350 Ribu Unit, Perluas Akses Rumah Subsidi",
  "category": "Perbankan",
  "program": "Kabar Pagi",
  "summary": "Pemerintah menaikkan kuota Fasilitas Likuiditas Pembiayaan Perumahan tahun 2026 menjadi 350 ribu unit untuk memperluas akses masyarakat terhadap rumah subsidi.",
  "takeaway": "Kenaikan kuota FLPP relevan bagi pembaca karena berdampak langsung pada sektor pembiayaan perumahan dan daya beli masyarakat berpenghasilan rendah.",
  "terbit": "2026-09-01T01:31:39+00:00"
 },
 {
  "id": "hpu08C2Bg8c",
  "title": "Polemik Data Desil dalam DTSEN",
  "category": "Makroekonomi",
  "program": "Pagi-pagi Seru",
  "summary": "Polemik data desil dalam DTSEN mencuat karena banyak warga kurang mampu tercatat berstatus kesejahteraan tinggi sehingga terancam kehilangan bantuan sosial.",
  "takeaway": "Akurasi data kesejahteraan menentukan tepat sasaran tidaknya anggaran bantuan sosial pemerintah.",
  "terbit": "2026-08-31T04:22:01+00:00"
 },
 {
  "id": "0FUJczk9K2E",
  "title": "Data Pemerintah Tak Tepat Sasaran, Bansos Terdepak",
  "category": "Makroekonomi",
  "program": "Pagi-pagi Seru",
  "summary": "Pembaruan data kesejahteraan dengan sistem desil membuat sejumlah warga miskin tercoret dari daftar penerima bantuan sosial.",
  "takeaway": "Menyoroti risiko kesalahan data dalam penyaluran anggaran perlindungan sosial negara.",
  "terbit": "2026-08-31T04:20:09+00:00"
 },
 {
  "id": "aLk2OevJFUQ",
  "title": "BPS Buka Suara soal Ketimpangan Data Desil",
  "category": "Makroekonomi",
  "program": "Pagi-pagi Seru",
  "summary": "BPS menyatakan ketimpangan data desil dalam DTSEN dipicu berbagai faktor kesalahan data kependudukan dan sosial ekonomi.",
  "takeaway": "Klarifikasi lembaga statistik resmi penting untuk menjaga kredibilitas data yang mendasari kebijakan ekonomi.",
  "terbit": "2026-08-31T04:11:45+00:00"
 },
 {
  "id": "qrtoWz74ZV4",
  "title": "Kadin Indonesia Kunjungi PT VKTR Sakti Industries di Magelang",
  "category": "Industri",
  "program": "Kabar Hari Ini",
  "summary": "Kadin Indonesia menggelar Go-See and Pitch Trip ke PT VKTR Sakti Industries di Magelang bersama Menteri Lingkungan Hidup Mohammad Jumhur Hidayat.",
  "takeaway": "Kunjungan ini relevan bagi pembaca ekonomi karena menggambarkan upaya dunia usaha mendekatkan diri dengan pelaku industri manufaktur dalam negeri.",
  "terbit": "2026-08-28T16:33:04+00:00"
 },
 {
  "id": "yM3shtnuhPc",
  "title": "BI Gelar Pameran UMKM Karya Kreatif Indonesia 2026",
  "category": "UMKM",
  "program": "Kabar Siang",
  "summary": "Bank Indonesia menggelar pameran UMKM bertajuk Karya Kreatif Indonesia (KKI) 2026 yang membukukan total penjualan Rp177,21 miliar.",
  "takeaway": "Angka penjualan ini menjadi indikator geliat UMKM binaan Bank Indonesia dalam mendorong perputaran ekonomi domestik.",
  "terbit": "2026-08-28T06:25:31+00:00"
 },
 {
  "id": "GkxhMXx3UTA",
  "title": "Penjualan Mobil Melejit, Ekonomi RI Bangkit?",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Kenaikan penjualan mobil disorot sebagai indikator pemulihan aktivitas ekonomi Indonesia di tengah dinamika daya beli masyarakat.",
  "takeaway": "Data penjualan otomotif kerap dipakai sebagai proksi kesehatan ekonomi domestik, sehingga tren ini relevan bagi pembaca yang memantau arah pemulihan.",
  "terbit": "2026-08-26T16:00:10+00:00"
 },
 {
  "id": "bjOCQiKbqtk",
  "title": "Kemenperin Jelaskan Wacana Mobil Nasional",
  "category": "Industri",
  "program": "Indonesia Business Forum",
  "summary": "Kementerian Perindustrian memberi penjelasan soal wacana pengembangan mobil nasional di tengah sorotan terhadap kinerja industri otomotif dalam negeri.",
  "takeaway": "Kebijakan mobil nasional menyangkut arah investasi dan daya saing industri manufaktur otomotif Indonesia.",
  "terbit": "2026-08-26T15:50:09+00:00"
 },
 {
  "id": "rNODfrvnFgg",
  "title": "GAIKINDO dan Fitra Eri Soroti Pajak Mobil Baru",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Sekjen GAIKINDO bersama pengamat otomotif Fitra Eri membahas dampak kebijakan pajak kendaraan baru terhadap penjualan mobil di Indonesia.",
  "takeaway": "Kebijakan pajak kendaraan bermotor berpengaruh langsung pada harga jual dan daya beli konsumen otomotif.",
  "terbit": "2026-08-26T15:41:49+00:00"
 },
 {
  "id": "NmEOqz-HfJY",
  "title": "Mobil Listrik vs BBM, Ini Perbandingan Biayanya",
  "category": "Industri",
  "program": "Indonesia Business Forum",
  "summary": "Suryo Pratomo membandingkan harga dan biaya operasional mobil listrik dengan mobil berbahan bakar minyak di tengah pergeseran pasar otomotif.",
  "takeaway": "Perbandingan biaya ini membantu pembaca menilai arah transisi pasar kendaraan dan dampaknya bagi industri energi.",
  "terbit": "2026-08-26T15:40:16+00:00"
 },
 {
  "id": "R3OrofgvMEM",
  "title": "Anomali Penjualan Mobil Naik di Tengah Daya Beli Lemah",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Fitra Eri mengulas fenomena penjualan mobil yang justru meningkat di tengah sinyal pelemahan daya beli masyarakat Indonesia.",
  "takeaway": "Anomali ini penting dicermati karena bisa mengubah asumsi umum soal hubungan daya beli dan konsumsi barang tahan lama.",
  "terbit": "2026-08-26T15:28:21+00:00"
 }
];
