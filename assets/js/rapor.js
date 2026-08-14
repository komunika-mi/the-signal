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
 "diperbarui": "2026-08-14T12:16:19.222+07:00",
 "entri": [
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
