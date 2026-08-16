// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "9KfKSXn_gWU",
  "title": "Target Optimalisasi Energi Surya dan Elektrifikasi Mobilitas",
  "category": "Energi",
  "program": "tvOneNews",
  "summary": "Presiden Prabowo Subianto mempercepat transisi energi hijau dengan menargetkan pembangunan Pembangkit Listrik Tenaga Surya berkapasitas besar sekaligus mendorong elektrifikasi kendaraan.",
  "takeaway": "Relevan bagi pembaca ekonomi karena menyangkut arah kebijakan energi nasional yang berpotensi memengaruhi investasi di sektor energi terbarukan."
 },
 {
  "id": "z6ieuHPQJfI",
  "title": "KBPBI Kawal Pembahasan RUU Ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "program": "Kabar Pagi",
  "summary": "Koalisi Besar Perjuangan Buruh Indonesia menyatakan akan mengawal penuh proses pembahasan Rancangan Undang-Undang Ketenagakerjaan.",
  "takeaway": "Pembahasan RUU ini menyangkut aturan ketenagakerjaan yang berdampak langsung pada pekerja dan pelaku usaha, sehingga relevan untuk dipantau."
 },
 {
  "id": "8CtcljS12aQ",
  "title": "Pemerintah Fokus RAPBN 2027 dan Program Lapangan Kerja",
  "category": "Makroekonomi",
  "program": "Kabar Utama",
  "summary": "Pemerintah mengarahkan kebijakan dan RAPBN 2027 pada delapan Program Kerja Prioritas Nasional, termasuk penciptaan lapangan kerja, untuk mendukung target pembangunan Presiden Prabowo Subianto.",
  "takeaway": "Relevan bagi pembaca ekonomi karena memuat arah kebijakan fiskal dan prioritas ketenagakerjaan yang berdampak pada dunia usaha dan pencari kerja."
 },
 {
  "id": "l5jJVLJgwXc",
  "title": "Pemerintah Kembangkan B50 sebagai Pilar Ketahanan Energi",
  "category": "Energi",
  "program": "Kabar Utama",
  "summary": "Indonesia resmi menerapkan mandatori bahan bakar B50, campuran 50 persen biodiesel sawit dan 50 persen solar konvensional, sejak Juli 2026 sebagai bagian dari strategi ketahanan energi.",
  "takeaway": "Kebijakan B50 berdampak pada industri sawit, sektor energi, dan biaya bahan bakar sehingga penting bagi pembaca ekonomi."
 },
 {
  "id": "Iywa2ayieDQ",
  "title": "Presiden AS Trump Perketat Sanksi Ekonomi ke Iran",
  "category": "Global",
  "program": "tvOneNews",
  "summary": "Pemerintahan Presiden AS Donald Trump mengalihkan tekanan terhadap Iran dari jalur militer ke ekonomi, dengan fokus pengetatan sanksi terhadap Teheran.",
  "takeaway": "Sanksi ekonomi AS terhadap Iran berpotensi memengaruhi harga energi global dan pasar komoditas yang relevan bagi pembaca ekonomi."
 },
 {
  "id": "B_xxGHkDml4",
  "title": "Jubir ESDM Beberkan Dampak Signifikan Program B50",
  "category": "Energi",
  "program": "AKIM",
  "summary": "Juru bicara Kementerian ESDM menjelaskan dampak signifikan implementasi bahan bakar B50 terhadap ketahanan energi nasional.",
  "takeaway": "Kebijakan biodiesel B50 berkaitan dengan konsumsi solar dan industri sawit, sehingga relevan bagi pembaca yang mengikuti isu energi."
 },
 {
  "id": "fp_VWfYRPCY",
  "title": "Pembangunan Ritel Modern di Desa Akan Diatur Pemerintah",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Menteri Desa dan PDT menyebut pemerintah akan mengatur pembangunan ritel modern di desa agar tidak mematikan pelaku usaha lokal.",
  "takeaway": "Regulasi ritel modern di desa berkaitan langsung dengan perlindungan UMKM dan pemerataan ekonomi pedesaan."
 },
 {
  "id": "yVbMeL1AO18",
  "title": "Bakom RI: Pangan dan Energi Jadi Prioritas Anggaran Negara",
  "category": "Makroekonomi",
  "program": "AKIM",
  "summary": "Badan Komunikasi RI menyebut swasembada pangan dan kemandirian energi menjadi prioritas utama kebijakan anggaran negara.",
  "takeaway": "Prioritas anggaran untuk pangan dan energi berdampak pada arah fiskal dan ketahanan ekonomi nasional."
 },
 {
  "id": "ThWfzHaOKbI",
  "title": "Mendes PDT: Kopdes Dirancang untuk Hapus Sistem Rentenir",
  "category": "UMKM",
  "program": "One On One",
  "summary": "Menteri Desa dan PDT menjelaskan Koperasi Desa dirancang untuk menghapus praktik rentenir dan memperkuat ekonomi desa.",
  "takeaway": "Program koperasi desa relevan bagi pembaca yang mengikuti perkembangan inklusi keuangan dan ekonomi pedesaan."
 },
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
 }
];
