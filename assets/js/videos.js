// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "79Dl9TMyrDo",
  "title": "Pemerintah Buka Ekspor Beras ke Malaysia",
  "category": "Bisnis",
  "program": "Kabar Pagi",
  "summary": "Pemerintah membuka ekspor beras ke Malaysia setelah memastikan produksi dan stok nasional mencukupi. Tahap awal, 1.000 ton beras premium dikirim melalui Entikong, Kalimantan Barat.",
  "takeaway": "Langkah ini menandai posisi Indonesia sebagai eksportir beras, relevan bagi pelaku usaha pangan dan petani."
 },
 {
  "id": "dxUUYrCfsag",
  "title": "DPR Kebut Selesaikan RUU Ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "program": "Kabar Pagi",
  "summary": "DPR mempercepat penyelesaian RUU Ketenagakerjaan sebagai tindak lanjut putusan Mahkamah Konstitusi Oktober 2024. Pimpinan DPR menyerap masukan serikat pekerja dan buruh sebelum pembahasan dilanjutkan.",
  "takeaway": "Regulasi ini akan menentukan hak dan perlindungan pekerja, penting diikuti dunia usaha dan tenaga kerja."
 },
 {
  "id": "kA68joHp-aw",
  "title": "Pertumbuhan Ekonomi RI Mulai Dirasakan Kalangan Bawah",
  "category": "Makroekonomi",
  "program": "Kabar Pagi",
  "summary": "Pertumbuhan ekonomi Indonesia dinilai mulai dirasakan masyarakat kalangan bawah. Wakil Ketua DPD RI menyoroti Gini Ratio yang turun dari sekitar 0,38 menjadi 0,36.",
  "takeaway": "Penurunan rasio gini menjadi indikator penting soal pemerataan hasil pertumbuhan ekonomi nasional."
 },
 {
  "id": "x6-IEngk1Ns",
  "title": "Kadin Indonesia Gelar Economic Diplomatic Breakfast",
  "category": "Bisnis",
  "program": "tvOneNews",
  "summary": "Kadin Indonesia menggelar acara rutin Economic Diplomatic Breakfast dengan mengundang sejumlah duta besar negara sahabat untuk membahas kerja sama ekonomi.",
  "takeaway": "Acara ini relevan sebagai cerminan upaya diplomasi ekonomi Indonesia dengan mitra dagang internasional."
 },
 {
  "id": "wz_hrMy_i3M",
  "title": "Kontroversi KDMP di Atas Gunung, Ini Jawaban Mendes PDT",
  "category": "UMKM",
  "program": "tvOneNews",
  "summary": "Menteri Desa dan Pembangunan Daerah Tertinggal menanggapi sorotan publik soal pendirian Koperasi Desa Merah Putih di lokasi pegunungan, di tengah upaya menjadikan desa penggerak ekonomi baru.",
  "takeaway": "Isu ini penting karena menyangkut efektivitas program koperasi desa sebagai instrumen pemerataan ekonomi."
 },
 {
  "id": "n8lP3w265f4",
  "title": "Prabowo: Pendapatan Negara Tumbuh 21,3 Persen",
  "category": "Makroekonomi",
  "program": "tvOneNews",
  "summary": "Presiden Prabowo Subianto melaporkan pendapatan negara tumbuh 21,3 persen dalam pidato kenegaraan di Sidang Tahunan MPR 2026, sebagai bagian dari evaluasi kinerja 21 bulan pemerintahannya.",
  "takeaway": "Angka pertumbuhan pendapatan negara ini menjadi salah satu indikator kesehatan fiskal pemerintah."
 },
 {
  "id": "nDM01Q9XXKw",
  "title": "Mungkinkah Desa Jadi Kekuatan Ekonomi Baru?",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Diskusi membahas potensi desa sebagai basis pertumbuhan ekonomi baru Indonesia, di luar perannya selama ini sebagai basis pembangunan.",
  "takeaway": "Topik ini relevan untuk melihat arah kebijakan pemerataan ekonomi berbasis desa."
 },
 {
  "id": "E7lcpHP1jK0",
  "title": "Desa Ekspor dan Wisata Jadi Program Unggulan",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Program desa ekspor dan desa wisata disiapkan sebagai andalan untuk mendongkrak perekonomian desa dan memperkuat posisi desa dalam pertumbuhan ekonomi nasional.",
  "takeaway": "Program ini penting disimak sebagai upaya konkret mendorong desa berorientasi pasar dan devisa."
 },
 {
  "id": "4tdEwW0eeFU",
  "title": "Kopdes di Atas Gunung hingga Dekat Kuburan",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Menteri Desa dan PDT menjelaskan sebaran lokasi Koperasi Desa Merah Putih yang dibangun di berbagai kondisi geografis, termasuk daerah terpencil.",
  "takeaway": "Sebaran lokasi koperasi ini menjadi indikator jangkauan program ekonomi desa ke wilayah sulit akses."
 },
 {
  "id": "vqSu32eKyh0",
  "title": "Isu Ritel Dilarang Dekat Kopdes, Mendes PDT Bantah",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Menteri Desa dan PDT membantah isu yang menyebut toko ritel modern dilarang beroperasi dekat Koperasi Desa Merah Putih, dan menyebutnya sebagai informasi hasil rekayasa AI.",
  "takeaway": "Klarifikasi ini penting untuk meluruskan simpang siur kebijakan yang berdampak pada pelaku usaha ritel dan koperasi desa."
 },
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
 }
];
