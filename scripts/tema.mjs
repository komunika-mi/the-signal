// Tema bersambung: isu berjalan yang beritanya menyambung lintas hari.
//
// Kenapa ada: arsip menyimpan 3-11 artikel per isu (Pertalite, Gubernur BI,
// MSCI) tapi semuanya tercerai di daftar kronologis. Pembaca yang mau tahu
// "sudah sampai mana urusan Pertalite" harus menggali sendiri. Halaman tema
// menyusunnya jadi garis waktu satu isu, lengkap dengan arah terakhirnya.
//
// PENCOCOKAN DISENGAJA DETERMINISTIK, kata kunci lawan judul+deck+tag, bukan
// panggilan model. Konsekuensinya: tema baru harus didaftarkan manual di sini.
// Itu pilihan sadar. Registry ini daftar editorial (isu mana yang layak
// diikuti), bukan klasterisasi otomatis; dan pencocokan yang bisa dihitung
// ulang kapan pun berarti artikel baru menempel ke temanya tanpa biaya model
// dan tanpa bisa salah kamar gara-gara halusinasi.
//
// BADAN ARTIKEL SENGAJA TIDAK IKUT DICOCOKKAN. Kata seperti "rupiah" atau
// "UMKM" muncul di badan artikel apa saja sebagai konteks; kalau badan ikut
// dipindai, tema berubah jadi keranjang sampah. Judul, deck, dan tag adalah
// tempat pokok bahasan dinyatakan.
//
// FIELD `taruhan` (opsional): isu yang arahnya dibicarakan SEBELUM putusannya
// jatuh. Isinya pertanyaan yang sedang digantung, siapa yang memutuskan, apa
// yang menggeser putusan, dan cabang hasil yang mungkin. Dari situ
// scripts/klaim-arah.mjs mencatat satu klaim ke Rapor Sinyal begitu tanggal
// putusannya mendekat, dan halaman temanya menampilkan cabangnya.
//
// Cabang ditulis tangan, bukan dibangkitkan, supaya rapor dan halaman tema
// selalu bicara soal kemungkinan yang sama persis. `polaPutusan` menyaring
// tanggal dari agenda: tanggal hanya dianggap tanggal putusan isu ini kalau
// kalimat agendanya sendiri menyebut pokok isunya, bukan sekadar muncul di
// artikel yang kebetulan masuk tema.
export const TEMA = [
  {
    slug: 'pembatasan-pertalite',
    nama: 'Pembatasan Subsidi BBM',
    deskripsi: 'Pemerintah menggeser subsidi BBM menjauh dari kelompok mampu: ' +
      'pembatasan Pertalite untuk desil atas, penyesuaian penyaluran, dan reaksi pasar.',
    kata: /pertalite|subsidi bbm|bbm subsidi|bbm bersubsidi|desil 9/i,
    taruhan: {
      pertanyaan: 'Apakah pembatasan pembelian BBM subsidi benar-benar berlaku pada jadwal yang diumumkan?',
      pemutus: 'Pemerintah, lewat Kementerian ESDM dan Pertamina',
      polaPutusan: /pertalite|bbm subsidi|subsidi bbm|bbm bersubsidi/i,
      ambang: [
        'Terbit atau tidaknya aturan turunan yang mengikat, bukan sekadar rencana',
        'Kesiapan data penerima dan sistem pendaftaran di SPBU',
        'Harga minyak dunia dan beban subsidi dalam APBN berjalan',
        'Reaksi publik dan sikap DPR menjelang tanggal berlaku',
      ],
      cabang: [
        {
          nama: 'Berlaku penuh sesuai jadwal',
          arti: 'Pembelian dibatasi untuk kelompok yang ditetapkan, tepat pada tanggal yang diumumkan.',
        },
        {
          nama: 'Berlaku bertahap atau terbatas',
          arti: 'Aturan mulai jalan tapi hanya di sebagian wilayah atau sebagian kendaraan, dengan masa peralihan.',
        },
        {
          nama: 'Ditunda',
          arti: 'Tanggal berlaku mundur tanpa pengganti yang pasti, dan subsidi berjalan seperti sekarang.',
        },
      ],
    },
  },
  {
    slug: 'transisi-gubernur-bi',
    nama: 'Transisi Gubernur BI',
    deskripsi: 'Kursi Gubernur Bank Indonesia berganti: pencalonan Destry Damayanti, ' +
      'proses di DPR, dan bagaimana pasar membaca independensi bank sentral.',
    kata: /gubernur bi|destry damayanti|perry warjiyo/i,
  },
  {
    slug: 'rebalancing-msci',
    nama: 'Rebalancing MSCI',
    deskripsi: 'MSCI mengeluarkan saham Indonesia dari indeks utamanya tanpa pengganti. ' +
      'Efeknya menjalar ke rupiah dan IHSG menjelang tanggal efektif 1 September 2026.',
    kata: /msci/i,
    taruhan: {
      pertanyaan: 'Apakah Indonesia tetap berstatus emerging market di klasifikasi pasar MSCI?',
      pemutus: 'MSCI, lewat peninjauan klasifikasi pasarnya',
      polaPutusan: /msci|klasifikasi pasar|indeks global/i,
      ambang: [
        'Kemudahan investor asing memasukkan dan menarik dana, termasuk urusan valuta',
        'Jumlah saham yang masih memenuhi syarat ukuran dan likuiditas setelah saham besar keluar indeks',
        'Frekuensi suspensi perdagangan dan seberapa jelas aturan mainnya',
        'Hasil konsultasi MSCI dengan pengelola dana, dan langkah balasan BEI serta OJK',
      ],
      cabang: [
        {
          nama: 'Status emerging market bertahan',
          arti: 'Dana pasif yang melacak indeks emerging market tetap wajib memegang saham Indonesia, ' +
            'sehingga aliran dana asing yang masuk lewat indeks tidak berubah dasarnya.',
        },
        {
          nama: 'Bertahan, tapi masuk daftar pantau',
          arti: 'Statusnya belum turun, namun MSCI menyatakan Indonesia sedang dinilai ulang. ' +
            'Pengelola dana mulai menyiapkan diri untuk kemungkinan penurunan.',
        },
        {
          nama: 'Turun dari emerging market',
          arti: 'Indonesia pindah ke kelompok di bawahnya. Dana pasif global yang mengikuti indeks ' +
            'emerging market harus melepas posisinya, dan papan bursa kehilangan pembeli otomatis.',
        },
      ],
    },
  },
  {
    slug: 'kendaraan-listrik',
    nama: 'Kendaraan Listrik Nasional',
    deskripsi: 'Dari peluncuran MoLiNas sampai kapasitas pabrik yang melampaui penjualan: ' +
      'seberapa nyata permintaan mengikuti ambisi produksi kendaraan listrik.',
    kata: /molinas|motor listrik|kendaraan listrik|mobil listrik|\bEV\b/i,
  },
  {
    slug: 'pembiayaan-umkm',
    nama: 'Pembiayaan UMKM',
    deskripsi: 'KUR, PNM Mekaar, dan kredit ultra mikro: pembiayaan formal yang makin ' +
      'terkonsentrasi ke usaha kecil, dan apakah penyalurannya mengikuti janjinya.',
    kata: /\bKUR\b|mekaar|ultra ?mikro|pembiayaan umkm|kredit umkm/i,
  },
  // Dua tema di bawah lahir dari agenda, bukan dari daftar isu yang kelihatan
  // besar. Pelajaran 19 Oktober 2026: taruhan hanya hidup kalau arsip tema itu
  // memuat TANGGAL MAJU. Pembiayaan UMKM punya 32 artikel dan BBM subsidi 17,
  // tapi keduanya nol tanggal maju, jadi taruhannya tidak akan pernah tercatat.
  // Aksi korporasi sebaliknya: tanggalnya disebut terang di tiap laporan.
  {
    slug: 'gagal-bayar-emiten',
    nama: 'Gagal Bayar dan Restrukturisasi Utang',
    deskripsi: 'Emiten yang meleset membayar kupon obligasi dan sukuk, rapat pemegang ' +
      'surat utang yang menyusul, dan sejauh mana persoalannya menular ke emiten lain.',
    kata: /gagal bayar|wanprestasi|\bRUPO\b|\bRUPSU\b|restrukturisasi (utang|obligasi|sukuk)|going concern/i,
    taruhan: {
      pertanyaan: 'Apakah gagal bayar surat utang emiten meluas, atau tetap kasus per kasus?',
      pemutus: 'Pemegang obligasi lewat RUPO dan RUPSU, bersama manajemen emiten yang menawarkan jalan keluar',
      polaPutusan: /rupo|rupsu|gagal bayar|jatuh tempo|pelunasan|restrukturisasi/i,
      ambang: [
        'Nilai obligasi dan sukuk emiten yang jatuh tempo dalam tiga bulan ke depan',
        'Kas dan arus kas penerbit yang sedang bermasalah',
        'Hasil RUPO atau RUPSU: perpanjangan tempo, potongan bunga, atau konversi jadi saham',
        'Sikap BEI dan OJK, termasuk suspensi dan permintaan penjelasan',
      ],
      cabang: [
        {
          nama: 'Tetap kasus per kasus',
          arti: 'Masalahnya terbatas pada emiten yang memang sudah lama berat, tanpa penerbit baru menyusul.',
        },
        {
          nama: 'Meluas ke lebih banyak emiten',
          arti: 'Penerbit lain ikut meleset bayar, dan pasar surat utang korporasi mengetat untuk semua.',
        },
        {
          nama: 'Tertahan lewat restrukturisasi',
          arti: 'Tidak ada gagal bayar baru karena temponya diperpanjang atau utangnya diubah jadi saham.',
        },
      ],
    },
  },
  {
    slug: 'go-private-emiten',
    nama: 'Gelombang Go Private',
    deskripsi: 'Pengendali yang membeli balik sahamnya lalu membawa perusahaannya keluar ' +
      'dari bursa: tender sukarela, suspensi, dan apa artinya bagi kedalaman pasar.',
    kata: /go private|tender (offer|sukarela)|penawaran tender|refloat|delisting saham/i,
    taruhan: {
      pertanyaan: 'Apakah gelombang emiten keluar dari bursa berlanjut?',
      pemutus: 'Pengendali emiten lewat RUPSLB dan tender sukarela, dengan OJK dan BEI sebagai pemberi izin',
      polaPutusan: /go private|tender|rupslb|refloat|delisting/i,
      ambang: [
        'Jumlah permohonan go private baru yang tercatat BEI',
        'Selisih harga tender terhadap harga pasar, yang menentukan pemegang saham publik ikut atau menolak',
        'Penegakan aturan saham beredar minimum dan sanksinya',
        'Ongkos tetap menjadi perusahaan terbuka dibanding manfaatnya saat likuiditas menipis',
      ],
      cabang: [
        {
          nama: 'Berlanjut dan bertambah',
          arti: 'Permohonan baru terus masuk, papan bursa kehilangan emiten lebih cepat daripada menambah.',
        },
        {
          nama: 'Mereda',
          arti: 'Yang sudah berjalan diselesaikan, tapi tidak ada gelombang pengikut.',
        },
        {
          nama: 'Tertahan aturan atau penolakan pemegang saham',
          arti: 'Rencana keluar bursa gagal di RUPSLB, atau tersendat izin dan syarat dari otoritas.',
        },
      ],
    },
  },
  {
    slug: 'danantara',
    nama: 'Langkah Danantara',
    deskripsi: 'Ke mana dana kelolaan Danantara bergerak: porsi saham BEI, penempatan ' +
      'di BUMN, dan pergeseran kendali di lembaga-lembaga keuangan.',
    kata: /danantara/i,
    taruhan: {
      pertanyaan: 'Apakah penambahan modal yang diumumkan untuk BUMN benar-benar disetujui dan cair, bukan berhenti di rencana?',
      pemutus: 'Pemegang saham BUMN terkait lewat RUPS, bersama Danantara sebagai pengelola',
      polaPutusan: /rups|penambahan modal|setoran modal|suntikan modal|rights issue|pmn/i,
      ambang: [
        'Hasil RUPS atau RUPSLB yang agendanya penambahan modal',
        'Urutan prioritas penempatan dana kelolaan Danantara dan kesiapan dananya',
        'Kondisi keuangan BUMN yang akan disuntik, termasuk riwayat gagal bayar',
        'Sikap Kementerian BUMN dan DPR atas penempatan tersebut',
      ],
      cabang: [
        {
          nama: 'Disetujui dan cair',
          arti: 'RUPS meloloskan penambahan modalnya dan dananya benar-benar masuk sesuai jadwal yang diumumkan.',
        },
        {
          nama: 'Disetujui tapi bertahap atau tertunda',
          arti: 'Persetujuannya ada, tapi pencairannya dipecah atau mundur dari jadwal semula.',
        },
        {
          nama: 'Batal atau berganti skema',
          arti: 'Penambahan modal tidak jadi, diganti pinjaman, penjaminan, atau restrukturisasi.',
        },
      ],
    },
  },
  {
    slug: 'ruu-ketenagakerjaan',
    nama: 'RUU Ketenagakerjaan',
    deskripsi: 'Penyusunan RUU Ketenagakerjaan antara DPR dan serikat buruh, dan apa ' +
      'artinya bagi biaya tenaga kerja dunia usaha.',
    kata: /ruu ketenagakerjaan|serikat buruh|kspsi/i,
    taruhan: {
      pertanyaan: 'Apakah RUU Ketenagakerjaan disahkan dalam bentuk yang menambah biaya tenaga kerja pengusaha?',
      pemutus: 'DPR bersama pemerintah',
      polaPutusan: /ruu ketenagakerjaan|rapat paripurna|pembahasan ruu/i,
      ambang: [
        'Isi daftar inventarisasi masalah yang disepakati panitia kerja',
        'Sikap serikat buruh dan kamar dagang pada masa pembahasan',
        'Apakah RUU masuk daftar prioritas yang dikejar pada masa sidang berjalan',
      ],
      cabang: [
        {
          nama: 'Disahkan dengan beban tambahan bagi pengusaha',
          arti: 'Ketentuan pesangon, upah, atau status hubungan kerja berubah ke arah yang menaikkan ongkos.',
        },
        {
          nama: 'Disahkan tanpa perubahan beban yang berarti',
          arti: 'Undang-undangnya jadi, tapi isinya sebagian besar menata ulang aturan yang sudah berjalan.',
        },
        {
          nama: 'Tidak disahkan pada masa sidang ini',
          arti: 'Pembahasan berlanjut ke periode berikutnya dan aturan lama tetap berlaku.',
        },
      ],
    },
  },
];

// Halaman tema baru dirender setelah bahannya cukup untuk disebut "bersambung".
// Satu artikel bukan garis waktu; halaman berisi satu entri justru membuat
// fiturnya tampak kosong.
export const MIN_ARTIKEL_TEMA = 3;

// Bidang yang dipindai: tempat pokok bahasan dinyatakan (lihat catatan atas).
//
// TIAP BIDANG DIUJI SENDIRI-SENDIRI, tidak digabung jadi satu string.
// Versi gabung pernah menghasilkan frasa hantu: tags ["BBM","Subsidi","ESDM"]
// yang di-join spasi menjadi "BBM Subsidi ESDM" cocok dengan pola
// /bbm subsidi/ padahal frasa itu tidak ada di satu bidang pun. Ditangkap
// verifikator 14 Agustus 2026 pada artikel harga-bbm-dan-lpg-subsidi:
// judul, deck, dan tiap tag satuannya sama-sama TIDAK cocok, tapi
// gabungannya cocok. Pencocokan lintas batas bidang selalu frasa karangan.
function bidangUji(a) {
  return [a.title, a.deck, ...(a.tags || [])].map(x => String(x || ''));
}

export function temaDariArtikel(a) {
  const bidang = bidangUji(a);
  return TEMA.filter(x => bidang.some(b => x.kata.test(b))).map(x => x.slug);
}

// Kelompokkan seluruh arsip per tema. Hanya tema yang lolos ambang yang keluar,
// artikel di dalamnya terurut terbaru dulu (mengikuti urutan articles.js).
export function kelompokTema(ARTICLES) {
  const isi = new Map();
  for (const tema of TEMA) isi.set(tema.slug, []);
  for (const a of ARTICLES) {
    for (const slug of temaDariArtikel(a)) isi.get(slug).push(a);
  }
  return TEMA
    .map(t => ({ ...t, artikel: isi.get(t.slug) }))
    .filter(t => t.artikel.length >= MIN_ARTIKEL_TEMA);
}
