// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "ZwVVN3eKVu4",
  "title": "Pertumbuhan dan Perkembangan Ekonomi Indonesia",
  "category": "Makroekonomi",
  "program": "AKAP",
  "summary": "Presiden Prabowo Subianto menetapkan Jakarta dan Bali sebagai lokasi Pusat Finansial Internasional Indonesia dalam pidato penyampaian RUU APBN 2027 dan Nota Keuangan.",
  "takeaway": "Penetapan ini penting diikuti karena menandai arah kebijakan pemerintah membangun pusat keuangan baru di Indonesia."
 },
 {
  "id": "CVkXQhS9jko",
  "title": "Presiden Prabowo Bentuk DDMF untuk Biayai Proyek Besar Tanpa Bebani APBN",
  "category": "BUMN",
  "program": "AKAP",
  "summary": "Presiden Prabowo Subianto menyiapkan Danantara Development Management Fund untuk mendukung proyek strategis jangka panjang, termasuk proyek mobil nasional, tanpa membebani APBN.",
  "takeaway": "Skema pembiayaan di luar APBN ini relevan bagi pembaca ekonomi karena menunjukkan strategi baru pendanaan proyek besar pemerintah."
 },
 {
  "id": "PUk0rF6uaw4",
  "title": "Jakarta-Bali Ditetapkan jadi Lokasi PFII untuk Tarik Investor",
  "category": "Makroekonomi",
  "program": "AKAP",
  "summary": "Presiden Prabowo Subianto menetapkan Jakarta dan Bali sebagai lokasi Pusat Finansial Internasional Indonesia, yang diharapkan menarik lebih banyak investor ke Indonesia.",
  "takeaway": "Penetapan lokasi PFII penting diikuti pelaku pasar karena berkaitan langsung dengan iklim investasi nasional."
 },
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
 }
];
