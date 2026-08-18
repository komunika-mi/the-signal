// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "GAJ5Xb3VsXc",
  "title": "Update Kurs Rupiah, Harga Minyak Dunia, dan Emas Antam",
  "category": "Pasar Modal",
  "program": "Kabar Siang",
  "summary": "Harga emas batangan Antam naik Rp18.000 menjadi Rp2.695.000 per gram pada 18 Agustus 2026, melanjutkan tren kenaikan beberapa hari terakhir, seiring pergerakan kurs rupiah dan harga minyak dunia.",
  "takeaway": "Data harian kurs, harga minyak, dan emas ini jadi acuan penting bagi investor dan pelaku pasar dalam mengambil keputusan."
 },
 {
  "id": "_eLwJlitL-k",
  "title": "Menkop Ferry Juliantono: Pemerintah Pastikan Kemerdekaan Ekonomi",
  "category": "UMKM",
  "program": "Kabar Hari Ini",
  "summary": "Menteri Koperasi Ferry Juliantono menegaskan pemerintah berkomitmen mewujudkan kemerdekaan ekonomi dan sosial masyarakat melalui pemberdayaan koperasi dan UMKM.",
  "takeaway": "Pernyataan menteri terkait arah kebijakan pemberdayaan UMKM ini relevan bagi pembaca yang mengikuti agenda ekonomi kerakyatan pemerintah."
 },
 {
  "id": "oFs66ujNmY4",
  "title": "1.200 UMKM Ramaikan Pesta Rakyat HUT ke-81 RI",
  "category": "UMKM",
  "program": "Kabar Utama",
  "summary": "Pesta Rakyat HUT ke-81 RI di kawasan Monas hingga Bundaran HI melibatkan lebih dari 1.700 UMKM yang memasarkan produknya kepada masyarakat.",
  "takeaway": "Skala keterlibatan UMKM dalam acara nasional ini menggambarkan peluang perluasan pasar bagi pelaku usaha kecil."
 },
 {
  "id": "71oMi3aMkTQ",
  "title": "Bank Jateng Gelar Gebyar Fest 81 Libatkan UMKM Perkuat Ekonomi Daerah",
  "category": "UMKM",
  "program": "tvOneNews",
  "summary": "Bank Jateng menggelar Gebyar Fest 81 di kantor cabang utama Semarang mulai 12 Agustus 2026, menghadirkan rangkaian kegiatan yang melibatkan pelaku UMKM untuk memperkuat ekosistem ekonomi daerah.",
  "takeaway": "Kegiatan ini relevan bagi pembaca ekonomi karena menggambarkan peran bank daerah dalam mendorong pertumbuhan UMKM dan ekosistem ekonomi lokal Jawa Tengah."
 },
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
 }
];
