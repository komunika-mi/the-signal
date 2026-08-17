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
 "diperbarui": "2026-08-17T21:19:39.433+07:00",
 "entri": [
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
   "klaim": "Peran Danantara mengarah meluas dari sekadar pengelola investasi menjadi pengawas operasional dan restrukturisasi BUMN, dan penentunya adalah apakah target penutupan 750 BUMN lagi benar-benar tercapai sebelum akhir 2026.",
   "penanda": "target penutupan 750 BUMN lagi tercapai hingga tersisa maksimal 300 BUMN",
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
