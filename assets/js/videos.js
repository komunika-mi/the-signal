// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.
// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.
var VIDEOS = [
 {
  "id": "jN_RLe9_BPU",
  "title": "Danantara Jadi Jembatan Investasi Indonesia-Rusia",
  "category": "BUMN",
  "program": "Kabar Petang",
  "summary": "Danantara disebut menjadi jembatan kerja sama dan investasi strategis antara Indonesia dan Rusia.",
  "takeaway": "Menarik bagi pembaca ekonomi karena menyangkut peran lembaga pengelola investasi negara dalam menjaring modal dari mitra asing.",
  "terbit": "2026-09-05T10:59:40+00:00"
 },
 {
  "id": "21IcJMXQE-Y",
  "title": "Danantara Jadi Jembatan Kerja Sama Bilateral RI-Rusia",
  "category": "Global",
  "program": "Kabar Hari Ini",
  "summary": "Badan Pengelola Investasi Danantara disebut menjadi penghubung kerja sama bilateral antara Indonesia dan Rusia, menyusul kunjungan Presiden Prabowo Subianto ke Rusia.",
  "takeaway": "Relevan bagi pembaca ekonomi karena menyangkut peran lembaga investasi negara dalam memperluas kerja sama bisnis dengan mitra dagang luar negeri.",
  "terbit": "2026-09-04T16:53:25+00:00"
 },
 {
  "id": "4ucEzZa-yPU",
  "title": "Pemerintah dan Kadin Tekankan Ketahanan Pangan di Tengah El Nino",
  "category": "Makroekonomi",
  "program": "Kabar Hari Ini",
  "summary": "Pemerintah bersama Kadin Indonesia menekankan pentingnya memperkuat ketahanan pangan nasional di tengah ancaman El Nino yang dinilai berdampak signifikan terhadap produksi.",
  "takeaway": "Ancaman El Nino terhadap produksi pangan relevan bagi pembaca ekonomi karena berpotensi memengaruhi stabilitas harga dan rantai pasok nasional.",
  "terbit": "2026-09-03T16:37:27+00:00"
 },
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
 }
];
