// Rapor Sinyal: buku besar pembacaan arah yang BISA DITAGIH.
//
// Tiap benang Signal Harian menyebut penanda ujinya sendiri (rilis apa, kapan,
// yang membedakan skenario). File ini mencatat tiap klaim itu beserta
// tenggatnya, lalu scripts/rapor-tagih.mjs menagihnya begitu jatuh tempo:
// terkonfirmasi, patah, atau kedaluwarsa, selalu dengan bukti berupa artikel
// arsip sendiri. Yang tidak pernah boleh terjadi: mengubah bunyi klaim setelah
// dicatat. Klaim dikutip apa adanya dari edisinya, salah ya salah.
//
// JANGAN diedit manual; diisi dan ditagih scripts/rapor-tagih.mjs.
var RAPOR = {
 "diperbarui": "2026-08-24T21:36:56.834+07:00",
 "entri": [
  {
   "id": "2026-08-24-3",
   "edisi": "2026-08-24",
   "benang": "Kredit Korporasi di Luar Sektor Bermasalah Tetap Jalan",
   "klaim": "Tekanan utang saat ini masih terkonsentrasi di BUMN karya dan belum menjalar menjadi pengetatan kredit yang lebih luas.",
   "penanda": "Data pertumbuhan kredit perbankan Agustus dari Bank Indonesia dan langkah Fitch berikutnya jika leverage EXCL terus naik",
   "tenggat": null,
   "tenggatLabel": "data pertumbuhan kredit perbankan Agustus dari Bank Indonesia",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-24-2",
   "edisi": "2026-08-24",
   "benang": "Bursa Naik Level dari Tanya ke Sanksi Nyata",
   "klaim": "Bursa Efek Indonesia semakin cepat berpindah dari klarifikasi rutin menjadi sanksi begitu ada pelanggaran konkret.",
   "penanda": "Apakah REFI menyampaikan laporan keuangannya sebelum sanksi naik ke Peringatan Tertulis II",
   "tenggat": null,
   "tenggatLabel": "sebelum sanksi naik ke Peringatan Tertulis II",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-24-1",
   "edisi": "2026-08-24",
   "benang": "Distres Utang BUMN Karya Terus Menajam",
   "klaim": "ADHI dan PTPP bergerak searah dari indikasi tekanan kas menjadi langkah restrukturisasi dan gagal bayar utang yang nyata.",
   "penanda": "Hasil pemungutan suara RUPSLB PTPP atas Master Restructuring Agreement",
   "tenggat": "2026-09-15",
   "tenggatLabel": "RUPSLB PTPP pada 15 September 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-21-3",
   "edisi": "2026-08-21",
   "benang": "Dua Jalur Beda Membereskan Ekuitas Bermasalah",
   "klaim": "Pola dilusi besar seperti yang dialami pemegang saham lama MKNT berpotensi berulang di emiten bermasalah lain yang membereskan ekuitas negatif lewat konversi utang menjadi saham.",
   "penanda": "Hasil RUPS yang menyetujui skema konversi utang menjadi saham tersebut dan respons harga sahamnya begitu saham baru resmi terbit.",
   "tenggat": null,
   "tenggatLabel": null,
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-21-2",
   "edisi": "2026-08-21",
   "benang": "Bursa Naikkan Level dari Bertanya Menjadi Sanksi",
   "klaim": "Arah pola pengawasan bursa jelas bergeser dari sekadar permintaan penjelasan menjadi tindakan pengawasan nyata seperti Papan Pemantauan Khusus terhadap saham yang gejolaknya berlanjut tanpa penjelasan material.",
   "penanda": "Apakah OKAS, FPNI, MRAT, atau PGUN menyusul MDIA masuk papan pemantauan khusus bila volatilitasnya berlanjut.",
   "tenggat": null,
   "tenggatLabel": null,
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-21-1",
   "edisi": "2026-08-21",
   "benang": "Utang BUMN Konstruksi Bergerak ke Status Gagal Bayar",
   "klaim": "Arah pola gagal bayar utang BUMN konstruksi sudah jelas menuju perluasan kasus gagal bayar yang terkonfirmasi di segmen ini.",
   "penanda": "Apakah ADHI benar-benar menunda pembayaran bunga obligasinya pada 24 Agustus atau berhasil melunasi seperti PPGD.",
   "tenggat": "2026-08-24",
   "tenggatLabel": "24 Agustus",
   "status": "terkonfirmasi",
   "bukti": {
    "slug": "bei-suspensi-saham-adhi-usai-gagal-bayar-kupon-obligasi",
    "judul": "BEI Suspensi Saham ADHI usai Gagal Bayar Kupon Obligasi",
    "tanggal": "24 Agustus 2026",
    "alasan": "Artikel arsip menunjukkan ADHI benar-benar gagal bayar kupon obligasi (bukan sekadar potensi) sehingga sahamnya disuspensi BEI, diperkuat artikel RUPO ADHI yang menyetujui penundaan bunga obligasi ke Juli 2027."
   }
  },
  {
   "id": "2026-08-20-3",
   "edisi": "2026-08-20",
   "benang": "Sejumlah Emiten Perkuat Kas Lewat Dividen dan Pelunasan",
   "klaim": "Arahnya jelas ke penguatan posisi kas jangka pendek di sektor-sektor YUPI, AVIA, dan RATU karena kas yang sudah terealisasi dari laba dan penerbitan surat utang sebelumnya, bukan proyeksi baru.",
   "penanda": "Laporan arus kas kuartal ketiga dari masing-masing perusahaan (YUPI, AVIA, RATU)",
   "tenggat": "2026-11-30",
   "tenggatLabel": "laporan arus kas kuartal ketiga dari masing-masing perusahaan yang terbit Oktober hingga November",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-20-2",
   "edisi": "2026-08-20",
   "benang": "Tekanan Utang BUMN Merambat ke WEGE dan Pos Indonesia",
   "klaim": "Arahnya konsisten melebar sejak kemarin, dari WIKA dan ADHI ke WEGE dan kini ke sektor logistik pelat merah lewat Pos Indonesia, menambah daftar BUMN yang tahun ini perlu bernegosiasi ulang dengan kreditor atau pemegang surat utang.",
   "penanda": "Hasil RUPS pemegang Sukuk Ijarah Berkelanjutan I Tahap II 2025 Pos Indonesia, yakni apakah pemegang sukuk menyetujui atau menolak permintaan waiver",
   "tenggat": "2026-09-04",
   "tenggatLabel": "rapat 4 September 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-20-1",
   "edisi": "2026-08-20",
   "benang": "Bursa Tanya Delapan Emiten, Pasar Tetap Menguat",
   "klaim": "Arahnya sejauh ini tetap ke rutinitas pengawasan bursa dan bukan sinyal aksi korporasi baru, kecuali penjualan saham TRJA oleh direksi R Hesthi Sambodo yang menyimpang dari pola jawaban standar lainnya dan layak ditunggu keterbukaan informasi susulannya.",
   "penanda": "Keterbukaan informasi susulan terkait penjualan 500.000 saham TRJA oleh direksi R Hesthi Sambodo",
   "tenggat": null,
   "tenggatLabel": "layak ditunggu keterbukaan informasi susulannya",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-19-3",
   "edisi": "2026-08-19",
   "benang": "Pola Transaksi Menguntungkan Pihak Terafiliasi",
   "klaim": "Pola aksi korporasi besar yang jalur dananya berputar di lingkaran pihak terafiliasi dengan pengendali atau direksi, seperti terlihat pada BIPP, HATM, dan BIKE, akan terus berlanjut.",
   "penanda": "Keputusan pemegang saham independen pada RUPSLB BIPP",
   "tenggat": "2026-09-25",
   "tenggatLabel": "RUPSLB BIPP tanggal 25 September mendatang",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-19-2",
   "edisi": "2026-08-19",
   "benang": "Spekulasi Saham Kecil Lepas dari Arah IHSG",
   "klaim": "Aktivitas spekulatif pada saham-saham kecil dan menengah (seperti TRJA, TRUK, dan saham terkait Haji Isam) berjalan lepas dari fundamental dan dari arah IHSG yang justru melemah.",
   "penanda": "Apakah Bursa mengeluarkan permintaan penjelasan atau status Unusual Market Activity susulan pada saham-saham ini",
   "tenggat": null,
   "tenggatLabel": "beberapa hari ke depan",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-19-1",
   "edisi": "2026-08-19",
   "benang": "Tekanan Utang BUMN Karya Meluas ke WIKA dan ADHI",
   "klaim": "Tekanan likuiditas di sektor konstruksi BUMN karya akan terus meluas, setelah menjalar dari PTPP ke WIKA dan ADHI dalam satu hari yang sama.",
   "penanda": "Apakah ADHI berhasil membayar kupon obligasi yang jatuh tempo",
   "tenggat": "2026-08-24",
   "tenggatLabel": "kupon yang jatuh tempo 24 Agustus mendatang",
   "status": "terkonfirmasi",
   "bukti": {
    "slug": "bei-suspensi-saham-adhi-usai-gagal-bayar-kupon-obligasi",
    "judul": "BEI Suspensi Saham ADHI usai Gagal Bayar Kupon Obligasi",
    "tanggal": "24 Agustus 2026",
    "alasan": "Artikel arsip menyebut ADHI gagal membayar kupon obligasi hingga sahamnya disuspensi BEI, dan RUPO ADHI baru menyetujui penundaan bunga ke Juli 2027, menunjukkan tekanan likuiditas memang meluas dan ADHI tidak berhasil membayar kupon sesuai jadwal."
   }
  },
  {
   "id": "2026-08-18-3",
   "edisi": "2026-08-18",
   "benang": "Tekanan Utang PTPP Menjalar ke Tiga Instrumen",
   "klaim": "Arah tekanan pembayaran utang di PTPP tergolong jelas, menjalar ke lebih dari satu instrumen sekaligus dalam satu hari.",
   "penanda": "Hasil RUPO dan RUPSu mengenai persetujuan permohonan restrukturisasi tiga instrumen utang PTPP",
   "tenggat": "2026-09-01",
   "tenggatLabel": "RUPO dan RUPSu pada 1 September 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-18-2",
   "edisi": "2026-08-18",
   "benang": "Emas Menguat di Semua Jalur Sekaligus",
   "klaim": "Arah kenaikan permintaan emas sudah jelas terlihat sekaligus dari tiga jalur, yaitu harga fisik, harga acuan ekspor, dan minat pada produk investasi.",
   "penanda": "Harga acuan ekspor Kemendag periode 1-15 September serta arus masuk unit ETF emas pekan depan",
   "tenggat": "2026-09-01",
   "tenggatLabel": "harga acuan ekspor Kemendag periode 1-15 September serta arus masuk unit ETF emas pekan depan",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-18-1",
   "edisi": "2026-08-18",
   "benang": "Rupiah Tertekan, BI Intervensi Jelang RDG",
   "klaim": "Arah tekanan pelemahan pada rupiah masih akan berlanjut, dengan Bank Indonesia mempertahankan pola intervensinya.",
   "penanda": "Keputusan BI Rate dalam Rapat Dewan Gubernur BI, yang diperkirakan bertahan di 5,75 persen",
   "tenggat": "2026-08-19",
   "tenggatLabel": "keputusan BI Rate yang dijadwalkan Rabu besok, 19 Agustus",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-17-2",
   "edisi": "2026-08-17",
   "benang": "UMKM Serentak Dapat Sokongan Biaya dan Kredit",
   "klaim": "Kebijakan Bank Indonesia dan perbankan bergerak searah memperluas akses pembiayaan sekaligus menekan biaya transaksi bagi pelaku usaha kecil menjelang implementasi aturan bebas biaya QRIS pada Oktober 2026, dan arah ini akan terkonfirmasi oleh data volume transaksi QRIS UMKM setelah aturan itu resmi berlaku.",
   "penanda": "Data volume transaksi QRIS UMKM setelah aturan bebas biaya MDR resmi berlaku",
   "tenggat": "2026-10-01",
   "tenggatLabel": "resmi berlaku Oktober mendatang",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-17-1",
   "edisi": "2026-08-17",
   "benang": "Pemulihan Gempa NTT: Cepat di Atas, Lambat di Bawah",
   "klaim": "Pola pemulihan pascagempa NTT akan tetap timpang, infrastruktur besar dan terpusat seperti gardu induk PLN pulih cepat dalam hitungan hari, sementara titik-titik kecil dan wilayah terpencil seperti 29 desa yang tertutup longsor masih menunggu giliran, dan bertahannya pola ini bergantung pada apakah akses jalan ke desa-desa itu bisa dibuka dalam beberapa hari ke depan.",
   "penanda": "Terbukanya akses jalan ke 29 desa yang tertutup longsor",
   "tenggat": "2026-08-24",
   "tenggatLabel": "dalam beberapa hari ke depan",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-14-3",
   "edisi": "2026-08-14",
   "benang": "Klaim capaian pidato kenegaraan versus realisasi lapangan",
   "klaim": "Angka-angka capaian dalam pidato kenegaraan Presiden Prabowo menggambarkan skala rencana atau tahap awal, bukan hasil yang sudah berjalan, dan yang akan menunjukkan apakah jarak antara klaim dan realisasi ini menyempit adalah data checkpoint berikutnya seperti jumlah koperasi aktif atau progres RUPTL PLTA-PLTM menjelang akhir 2026.",
   "penanda": "data checkpoint berikutnya seperti jumlah koperasi desa aktif atau progres RUPTL PLTA-PLTM",
   "tenggat": "2026-12-31",
   "tenggatLabel": "menjelang akhir 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-14-2",
   "edisi": "2026-08-14",
   "benang": "Konsolidasi BUMN meluas lewat Danantara",
   "klaim": "Peran Danantara mengarah meluas dari sekadar pengelola investasi menjadi pengawas operasional dan restrukturisasi BUMN, dan penentunya adalah apakah jumlah BUMN benar-benar tersisa maksimal 300 pada akhir 2026.",
   "penanda": "jumlah BUMN tersisa maksimal 300 pada akhir 2026",
   "tenggat": "2026-12-31",
   "tenggatLabel": "akhir 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-14-1",
   "edisi": "2026-08-14",
   "benang": "Pasar sambut RAPBN 2027, rating bertahan bukan naik",
   "klaim": "Sentimen pasar terhadap RAPBN 2027 mengarah positif dalam jangka pendek, dan yang akan menentukan apakah sentimen ini bertahan adalah data realisasi investasi pada periode berikutnya, bukan lagi pergerakan indeks harian.",
   "penanda": "data realisasi investasi pada periode berikutnya",
   "tenggat": null,
   "tenggatLabel": "periode berikutnya",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-13-1",
   "edisi": "2026-08-13",
   "benang": "Subsidi BBM Menyempit ke Atas, Pembiayaan ke UMKM",
   "klaim": "Dukungan pembiayaan formal makin terkonsentrasi ke usaha kecil dan menengah, sementara subsidi energi berangsur ditarik dari kelompok mampu, dan pola ini berlanjut.",
   "penanda": "Uji coba pembatasan Pertalite dan realisasi KUR pada semester kedua 2026.",
   "tenggat": "2026-12-31",
   "tenggatLabel": "sepanjang semester II 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-13-2",
   "edisi": "2026-08-13",
   "benang": "Rupiah Tertekan Sentimen MSCI, Bukan Data Domestik",
   "klaim": "Tekanan pada rupiah bersifat teknis akibat penyesuaian indeks MSCI, bukan cerminan pelemahan fundamental ekonomi domestik, sehingga mereda setelah rebalancing efektif.",
   "penanda": "Pergerakan rupiah menjelang dan sesudah rebalancing MSCI efektif 1 September 2026.",
   "tenggat": "2026-09-08",
   "tenggatLabel": "pekan pertama September 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-13-3",
   "edisi": "2026-08-13",
   "benang": "Harga Acuan Energi Melandai dari Puncak Tinggi",
   "klaim": "Penerimaan negara dari royalti energi tetap relatif terjaga dalam waktu dekat, karena HBA masih 21 persen lebih tinggi dibanding tahun lalu meski turun dari periode sebelumnya.",
   "penanda": "Arah HBA periode kedua Agustus (rilis ESDM akhir Agustus) dan ICP Agustus (awal September 2026).",
   "tenggat": "2026-09-07",
   "tenggatLabel": "awal September 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-12-1",
   "edisi": "2026-08-12",
   "benang": "Kursi-kursi kunci sektor keuangan mulai terisi",
   "klaim": "Tokoh dan entitas dari lingkaran pemerintah mengisi posisi strategis di lembaga keuangan yang sebelumnya lebih independen, dan arah ini berlanjut sampai posisinya resmi terisi.",
   "penanda": "DPR menuntaskan uji kelayakan Destry Damayanti dan Danantara resmi mengambil porsi saham di BEI.",
   "tenggat": null,
   "tenggatLabel": "menunggu jadwal uji kelayakan DPR",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-12-2",
   "edisi": "2026-08-12",
   "benang": "Permintaan domestik: normalisasi atau mulai melambat",
   "klaim": "Pelemahan permintaan domestik Juli lebih condong ke normalisasi musiman pasca libur ketimbang pelemahan struktural, sehingga keyakinan konsumen dan penjualan eceran kembali naik begitu efek libur usai.",
   "penanda": "Survei Konsumen BI dan data penjualan eceran Agustus 2026, dirilis akhir Agustus hingga awal September.",
   "tenggat": "2026-09-10",
   "tenggatLabel": "awal September 2026",
   "status": "menunggu",
   "bukti": null
  },
  {
   "id": "2026-08-12-3",
   "edisi": "2026-08-12",
   "benang": "Ekspor digenjot ke pasar baru, mamin masih tertinggal",
   "klaim": "Besaran nyata dorongan diversifikasi ekspor ke Timur Tengah belum terlihat dari angka; hasil signifikannya baru teruji lewat perundingan dagang GCC.",
   "penanda": "Rampungnya perundingan kerja sama dagang dengan negara-negara Teluk (GCC), ditargetkan paling lambat November 2026.",
   "tenggat": "2026-11-30",
   "tenggatLabel": "paling lambat November 2026",
   "status": "menunggu",
   "bukti": null
  }
 ]
};
