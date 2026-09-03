// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "mSLsH2CJlH4",
  "title": "Presiden Prabowo dan Presiden Putin Bahas Kerja Sama Bisnis",
  "category": "Global",
  "program": "Kabar Petang",
  "summary": "Presiden Prabowo Subianto bertemu Presiden Rusia Vladimir Putin di sela Eastern Economic Forum ke-11 di Vladivostok dalam format business breakfast untuk membahas penguatan kerja sama bilateral kedua negara.",
  "takeaway": "Pertemuan ini relevan bagi pembaca ekonomi karena berlangsung di forum ekonomi internasional dan berpotensi membuka peluang kerja sama dagang serta investasi antara Indonesia dan Rusia.",
  "terbit": "2026-09-03T11:32:59+00:00"
 },
 {
  "id": "iSPeZH9NzP0",
  "title": "Bea Cukai Siapkan Strategi Atasi Kemacetan Arus Barang di Pelabuhan",
  "category": "Bisnis",
  "program": "Kabar Pagi",
  "summary": "Direktorat Jenderal Bea dan Cukai Kementerian Keuangan menyiapkan langkah baru untuk memperlancar arus barang di pelabuhan sekaligus menekan dwelling time dan biaya logistik.",
  "takeaway": "Kebijakan ini relevan bagi pelaku usaha karena dwelling time dan biaya logistik pelabuhan berpengaruh langsung pada daya saing perdagangan nasional.",
  "terbit": "2026-09-03T01:20:23+00:00"
 },
 {
  "id": "GF044yQHWCM",
  "title": "Serikat Buruh Temui Menaker Bahas RUU Ketenagakerjaan",
  "category": "Ketenagakerjaan",
  "program": "Kabar Pagi",
  "summary": "Serikat buruh menemui Menteri Ketenagakerjaan Yassierli untuk menyampaikan kekecewaan atas draf RUU Ketenagakerjaan yang dinilai belum mengakomodasi usulan mereka.",
  "takeaway": "Perkembangan RUU Ketenagakerjaan penting diikuti karena berdampak pada hubungan industrial serta kepastian hukum bagi pekerja dan dunia usaha.",
  "terbit": "2026-09-03T01:15:21+00:00"
 },
 {
  "id": "zlNoRcPSzO0",
  "title": "Polemik Desil: Data, Kebijakan, dan Realita di Lapangan",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Forum diskusi membahas penggunaan data desil sebagai acuan penyaluran bantuan pemerintah, di tengah keluhan warga soal akurasi data di lapangan.",
  "takeaway": "Relevan karena data desil menentukan sasaran subsidi dan bantuan sosial yang berdampak pada alokasi anggaran negara.",
  "terbit": "2026-09-02T19:18:58+00:00"
 },
 {
  "id": "9NYqbPoMvag",
  "title": "Destry Damayanti Resmi Dilantik Jadi Gubernur BI",
  "category": "Moneter",
  "program": "Kabar Hari Ini",
  "summary": "Destry Damayanti dilantik sebagai Gubernur Bank Indonesia periode 2026-2031 dalam upacara di Gedung Mahkamah Agung, Jakarta, dipimpin Ketua MA.",
  "takeaway": "Pergantian pucuk pimpinan bank sentral berpengaruh langsung terhadap arah kebijakan moneter dan stabilitas rupiah.",
  "terbit": "2026-09-02T17:00:25+00:00"
 },
 {
  "id": "Guxj9iKyfrY",
  "title": "Program SMK Go Global Buka Pendaftaran Batch Baru",
  "category": "Ketenagakerjaan",
  "program": "Kabar Hari Ini",
  "summary": "Pendaftaran Program SMK Go Global Batch I Gelombang III dibuka pada 1-11 September 2026 untuk menyiapkan lulusan SMK bekerja resmi di luar negeri.",
  "takeaway": "Program ini mencerminkan upaya penyerapan tenaga kerja Indonesia di pasar kerja global.",
  "terbit": "2026-09-02T16:55:33+00:00"
 },
 {
  "id": "hWQi-yCY24k",
  "title": "Kadin dan SBF Perkuat Kerja Sama Dagang Berbasis AI",
  "category": "UMKM",
  "program": "Kabar Hari Ini",
  "summary": "Federasi Bisnis Singapura dan Kadin Indonesia memperdalam kerja sama dagang berbasis kecerdasan buatan untuk membantu pelaku UMKM menangkap peluang pasar.",
  "takeaway": "Kolaborasi ini berpotensi membuka akses pasar baru bagi pelaku UMKM Indonesia melalui teknologi digital.",
  "terbit": "2026-09-02T16:43:00+00:00"
 },
 {
  "id": "sy-twhywXj8",
  "title": "Polemik Desil: Antara Data, Kebijakan, dan Realita",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Diskusi lanjutan soal data desil yang menjadi acuan penyaluran bantuan pemerintah, sementara masyarakat mengeluhkan ketidaksesuaian data dengan kondisi riil.",
  "takeaway": "Isu ini penting untuk memahami efektivitas penargetan program bantuan sosial berbasis data.",
  "terbit": "2026-09-02T15:43:38+00:00"
 },
 {
  "id": "BgSIOz2ROMk",
  "title": "Ekonom: Polemik Desil Harus Diredam, Bukan Dipicu",
  "category": "Makroekonomi",
  "program": "Indonesia Business Forum",
  "summary": "Ekonom menilai polemik data desil untuk penyaluran bantuan pemerintah perlu ditangani hati-hati agar tidak memicu keresahan sosial.",
  "takeaway": "Pandangan ekonom membantu menilai dampak sosial dari kebijakan berbasis data desil terhadap masyarakat.",
  "terbit": "2026-09-02T15:24:44+00:00"
 },
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
 }
];
