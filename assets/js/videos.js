// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
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
 },
 {
  "id": "T65tlKy2bRc",
  "title": "Penjualan Mobil Melejit, Ekonomi RI Bangkit?",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Diskusi langsung mengenai lonjakan penjualan mobil sebagai sinyal potensial pemulihan aktivitas ekonomi nasional.",
  "takeaway": "Versi siaran langsung dari forum yang sama, relevan bagi pembaca yang ingin memantau diskusi kebijakan otomotif secara real time.",
  "terbit": "2026-08-26T12:33:12+00:00"
 },
 {
  "id": "H4C5Fei2534",
  "title": "DPR Terima Audiensi Serikat Buruh PT Pos Indonesia",
  "category": "Ketenagakerjaan",
  "program": "tvOneNews",
  "summary": "Pimpinan DPR dan Komisi VI menggelar audiensi dengan serikat buruh PT Pos Indonesia membahas persoalan ketenagakerjaan di perusahaan pelat merah itu.",
  "takeaway": "Audiensi ini menyangkut nasib pekerja BUMN logistik nasional yang tengah menghadapi tantangan bisnis.",
  "terbit": "2026-08-26T14:52:36+00:00"
 },
 {
  "id": "9elIydie_0A",
  "title": "Presiden AS Ancam Mitra Dagang Iran dengan Sanksi",
  "category": "Global",
  "program": "tvOneNews",
  "summary": "Pemerintah Amerika Serikat memberlakukan sanksi ekonomi terhadap mitra dagang Iran berdasarkan hukum domestiknya, langkah yang memicu perdebatan karena dinilai tidak berdasar pada resolusi PBB.",
  "takeaway": "Sanksi dagang AS terhadap mitra Iran berpotensi mengganggu arus perdagangan dan pasar energi global yang relevan bagi pelaku bisnis.",
  "terbit": "2026-08-26T13:38:59+00:00"
 },
 {
  "id": "FsmWpvfeIds",
  "title": "DPR Terima Audiensi Pekerja PT Pos Soal Gaji Telat",
  "category": "Ketenagakerjaan",
  "program": "tvOneNews",
  "summary": "Perwakilan karyawan PT Pos Indonesia mengadukan keterlambatan pembayaran gaji 31.000 pegawai kepada pimpinan DPR RI dalam audiensi yang digelar bersama Wakil Ketua DPR RI Sufmi Dasco Ahmad.",
  "takeaway": "Persoalan gaji telat di BUMN logistik ini menyoroti tekanan keuangan PT Pos Indonesia yang berdampak langsung pada puluhan ribu pekerja.",
  "terbit": "2026-08-26T13:30:01+00:00"
 },
 {
  "id": "O7NBqds3AqA",
  "title": "Destry Damayanti Paparkan Visi Misi di Uji Kelayakan Calon Gubernur BI",
  "category": "Moneter",
  "program": "Kabar Petang",
  "summary": "Calon Gubernur Bank Indonesia Destry Damayanti memaparkan visi dan misinya untuk memimpin bank sentral selama lima tahun ke depan dalam uji kelayakan dan kepatutan.",
  "takeaway": "Hasil uji kelayakan ini akan menentukan arah kebijakan moneter Indonesia lima tahun mendatang, sehingga relevan bagi pelaku pasar dan dunia usaha.",
  "terbit": "2026-08-26T11:28:29+00:00"
 },
 {
  "id": "SCpPAhkbsOQ",
  "title": "Audiensi DPR RI dengan Serikat Buruh PT Pos Indonesia",
  "category": "Ketenagakerjaan",
  "program": "Kabar Petang",
  "summary": "Pimpinan DPR RI menggelar audiensi dengan Serikat Buruh PT Pos Indonesia yang mendesak kepastian pembayaran gaji karyawan perusahaan pelat merah tersebut.",
  "takeaway": "Menyoroti persoalan kesejahteraan pekerja di salah satu BUMN logistik yang berpotensi memengaruhi operasional layanan pos nasional.",
  "terbit": "2026-08-26T11:27:51+00:00"
 }
];
