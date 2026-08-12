// Pasangkan foto dari pustaka lokal ke tiap artikel.
// Aturan: foto harus cocok kategori, dan tidak boleh sama dengan
// 6 artikel terdekat supaya halaman tidak terlihat mengulang gambar.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';
import { ADEGAN } from './adegan-foto.mjs';

const IMG_DIR = path.join(ROOT, 'assets/img');

// Foto lama dan foto tambahan sengaja DISELANG-SELING, bukan yang baru
// ditumpuk di belakang. Kursor berjalan urut, jadi kalau digrupkan, satu
// rentang artikel akan memakai gaya lama semua lalu berganti serentak.
const POOL = {
  'Energi': ['spbu-bbm', 'panel-surya-atap', 'kilang-minyak', 'truk-tangki-bbm', 'tabung-lpg', 'sawit-biodiesel', 'global-pelabuhan'],
  'Pasar Modal': ['bursa-layar', 'investor-ritel-ponsel', 'emas-batangan', 'lantai-bursa-sepi', 'grafik-laptop', 'seminar-investasi', 'kapal-batubara', 'pasar-modal'],
  'Perbankan': ['teller-bank', 'antrean-teller', 'atm-kota', 'brankas-bank', 'mobile-banking', 'kartu-debit', 'perahu-nelayan', 'rumah-subsidi', 'kopi-roasting'],
  'Moneter': ['gedung-bi', 'ruang-dealing', 'rupiah-kurs', 'konpers-bank', 'moneter-bi', 'sidang-dpr'],
  'Makroekonomi': ['sidang-dpr', 'pelabuhan-kontainer', 'pasar-beras', 'pasar-tradisional-pagi', 'petani-sawah', 'jalan-tol-konstruksi', 'bendungan', 'koperasi-desa'],
  'UMKM': ['batik-umkm', 'warung-makan', 'kopi-roasting', 'gula-merah', 'teknologi-logistik'],
  'BUMN': ['pesawat-bandara', 'menara-telko', 'galangan-kapal', 'industri-tekstil'],
  'Industri': ['buruh-pabrik', 'pabrik-gula', 'tambang-mineral', 'industri-tekstil'],
  'Ketenagakerjaan': ['bursa-kerja', 'gudang-logistik', 'buruh-pabrik', 'kantor-startup'],
  'Teknologi': ['server-data', 'kantor-startup', 'teknologi-logistik'],
  'Bisnis': ['wisatawan-kopi', 'warung-makan', 'bisnis-resto', 'rumah-subsidi'],
  // Kategori tersibuk: 29 artikel dari kanal IDX. Dulu cuma 6 foto (4,8x
  // pengulangan) dan sebagian dipinjam dari kategori lain.
  'Aksi Korporasi': ['gong-pencatatan', 'bursa-layar', 'rups-emiten', 'tanda-tangan-akta', 'ruang-direksi', 'grafik-laptop', 'konpers-emiten', 'gedung-bi', 'rups-tangan-voting', 'konpers-bank', 'analis-rapat', 'meja-registrasi-rups', 'emas-batangan', 'dokumen-prospektus'],
  'Global': ['global-pelabuhan', 'kapal-batubara', 'tambang-mineral'],
};
const UMUM = ['pasar-modal', 'moneter-bi', 'industri-tekstil', 'bisnis-resto',
  'teknologi-logistik', 'global-pelabuhan'];

// Foto hasil lengkapi-foto.mjs ikut masuk POOL SECARA OTOMATIS lewat berkas
// data bersama. Tanpa ini, tiap penambahan foto harus didaftarkan manual di
// sini, dan itu sudah dua kali terlewat sehingga gambarnya ada di disk tapi
// tidak pernah muncul di artikel mana pun.
for (const [kategori, daftar] of Object.entries(ADEGAN)) {
  POOL[kategori] = POOL[kategori] || [];
  for (const [nama] of daftar) {
    if (!POOL[kategori].includes(nama)) POOL[kategori].push(nama);
  }
}

const ada = n => fs.existsSync(path.join(IMG_DIR, n + '.jpg'));

// ---------- pencocokan foto dengan ISI berita ----------
// Sebelumnya foto dipilih hanya berdasarkan kategori, urut daftar, tanpa
// melihat isi beritanya sama sekali. Hasilnya sering meleset: gong pencatatan
// IPO dipasang untuk berita buyback, ruang direksi untuk berita pindah alamat.
//
// Sekarang tiap foto punya kata kunci, lalu dicocokkan dengan judul, tag, dan
// deck artikel. Yang skornya tertinggi dipakai. Kalau tidak ada yang cocok
// sama sekali, jatuh kembali ke urutan daftar seperti dulu.
//
// Kata kunci dasar diambil dari potongan nama berkasnya sendiri (nama foto
// memang sudah bahasa Indonesia), ditambah sinonim di bawah untuk kasus yang
// namanya tidak mewakili isi.
const SINONIM = {
  'gong-pencatatan': ['ipo', 'pencatatan', 'listing', 'penawaran umum perdana', 'melantai'],
  'rups-emiten': ['rups', 'rupslb', 'rapat umum', 'pemegang saham'],
  'rups-tangan-voting': ['rups', 'rupslb', 'kuorum', 'suara', 'voting', 'persetujuan'],
  'meja-registrasi-rups': ['registrasi', 'daftar hadir', 'daftar pemegang saham'],
  'tanda-tangan-akta': ['akta', 'notaris', 'perjanjian', 'kesepakatan', 'penandatanganan'],
  'jabat-tangan-direksi': ['kerja sama', 'kesepakatan', 'kontrak', 'akuisisi', 'kemitraan'],
  'dokumen-prospektus': ['prospektus', 'dokumen', 'penawaran umum', 'penerbitan'],
  'ruang-direksi': ['direksi', 'komisaris', 'pengurus', 'jajaran', 'pengangkatan'],
  'konpers-emiten': ['siaran pers', 'keterangan', 'penjelasan', 'tanggapan', 'klarifikasi', 'jawab'],
  'konpers-podium': ['konferensi pers', 'pengumuman', 'kebijakan'],
  'analis-rapat': ['analis', 'kinerja', 'laporan keuangan', 'evaluasi', 'interim'],
  'berkas-disortir': ['koreksi', 'ralat', 'perbaikan', 'laporan'],
  'serah-terima-map': ['penyampaian', 'menyampaikan', 'pelaporan'],
  'resepsionis-korporat': ['alamat', 'kantor', 'domisili', 'pindah'],
  'lorong-kantor-pusat': ['alamat', 'kantor pusat', 'domisili', 'pindah', 'relokasi'],
  'rapat-komite': ['komite', 'audit', 'nominasi', 'remunerasi'],
  'rapat-daring': ['paparan', 'publik', 'daring'],
  'paparan-publik': ['paparan publik', 'public expose', 'paparan'],
  'lobi-bursa': ['bursa', 'bei', 'suspensi', 'perdagangan'],
  'papap-strategi': ['strategi', 'rencana', 'ekspansi'],
  'trader-dua-layar': ['volatilitas', 'transaksi', 'perdagangan saham'],
  'papan-berjalan-kabur': ['volatilitas', 'fluktuasi', 'pergerakan harga'],
  'koin-logam': ['dividen', 'tunai', 'imbal hasil'],
  'brankas-bank': ['obligasi', 'sukuk', 'kupon', 'jatuh tempo'],
  'kotak-deposit': ['obligasi', 'sukuk', 'waran', 'efek'],
  'mencatat-grafik': ['saham beredar', 'konversi', 'waran'],
  'lantai-bursa-sepi': ['suspensi', 'delisting', 'penghentian'],
};

function kataKunci(nama) {
  return [...nama.split('-').filter(t => t.length > 2), ...(SINONIM[nama] || [])];
}

function skorFoto(nama, teks) {
  let skor = 0;
  for (const k of kataKunci(nama)) if (teks.includes(k)) skor += k.includes(' ') ? 3 : 2;
  return skor;
}

// Aturan: SATU FOTO SATU ARTIKEL, tidak boleh dipakai dua kali.
//
// Versi lama cuma memakai jendela geser 6, jadi foto tidak berdempetan tapi
// tetap berulang di sepanjang halaman (rata-rata 2 kali, ada yang sampai 8).
// Sekarang tiap foto dipakai sekali saja.
//
// Urutan pencarian: pustaka kategorinya dulu, lalu UMUM, lalu foto apa pun
// yang belum terpakai. Kalau pustaka benar-benar habis, barulah pengulangan
// diizinkan, dan itu DILAPORKAN dengan jelas supaya ketahuan pustakanya perlu
// ditambah lewat `node scripts/lengkapi-foto.mjs`.
export function pasangFoto(artikel) {
  const semuaBerkas = fs.existsSync(IMG_DIR)
    ? fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.jpg') && f !== 'og-card.jpg')
        .map(f => f.replace(/\.jpg$/, ''))
    : [];

  const tersedia = {};
  for (const k of Object.keys(POOL)) tersedia[k] = POOL[k].filter(ada);
  const umum = UMUM.filter(ada);

  const terpakai = new Set();
  const ambilBelumTerpakai = (daftar) => daftar.find(n => !terpakai.has(n)) || null;

  let terpaksaUlang = 0;
  const kursorUlang = {};

  let cocokIsi = 0;

  let punyaSendiri = 0;

  for (const a of artikel) {
    const kat = a.category;

    // PRIORITAS PERTAMA: foto milik artikel ini sendiri, bernama sama dengan
    // slug-nya, dibuat oleh foto-artikel.mjs dari adegan yang ditulis model.
    //
    // Inilah jaminan tidak berulang. Slug artikel unik, jadi berkasnya unik,
    // jadi dua artikel tidak mungkin memakai gambar yang sama. Pustaka
    // kategori di bawah tinggal jadi cadangan untuk artikel warisan dan untuk
    // artikel yang fotonya belum sempat jadi.
    if (ada(a.slug)) {
      a.image = 'assets/img/' + a.slug + '.jpg';
      terpakai.add(a.slug);
      punyaSendiri++;
      continue;
    }

    // Cocokkan dulu dengan ISI beritanya. Judul diberi bobot lebih karena di
    // situlah inti peristiwanya, deck dan tag menyusul.
    const teks = ((a.title || '').repeat(2) + ' ' + (a.tags || []).join(' ') + ' ' + (a.deck || ''))
      .toLowerCase().replace(/[\[\]]/g, '');

    let pilih = null;
    const kandidat = (tersedia[kat] || []).filter(n => !terpakai.has(n));
    if (kandidat.length) {
      let terbaik = 0;
      for (const n of kandidat) {
        const s = skorFoto(n, teks);
        if (s > terbaik) { terbaik = s; pilih = n; }
      }
      if (pilih) cocokIsi++;
    }

    pilih = pilih
         || ambilBelumTerpakai(tersedia[kat] || [])
         || ambilBelumTerpakai(umum)
         || ambilBelumTerpakai(semuaBerkas);

    if (!pilih) {
      // Pustaka habis. Ulangi dari kategori sendiri secara berputar supaya
      // pengulangannya tersebar rata, bukan menumpuk di satu gambar.
      const pool = (tersedia[kat] && tersedia[kat].length) ? tersedia[kat] : (umum.length ? umum : semuaBerkas);
      if (!pool.length) { a.image = 'assets/img/pasar-modal.jpg'; continue; }
      kursorUlang[kat] = (kursorUlang[kat] || 0);
      pilih = pool[kursorUlang[kat] % pool.length];
      kursorUlang[kat]++;
      terpaksaUlang++;
    } else {
      terpakai.add(pilih);
    }

    a.image = 'assets/img/' + pilih + '.jpg';
  }

  const unik = new Set(artikel.map(a => a.image)).size;
  let berdempet = 0;
  for (let i = 1; i < artikel.length; i++) {
    if (artikel[i].image === artikel[i - 1].image) berdempet++;
  }

  log('foto: ' + unik + ' gambar berbeda untuk ' + artikel.length + ' artikel, ' +
    punyaSendiri + ' pakai foto sendiri, ' +
    cocokIsi + ' dicocokkan dengan isi berita, ' +
    berdempet + ' berdempetan' + (terpaksaUlang ? ', ' + terpaksaUlang + ' TERPAKSA DIULANG' : ''));
  if (terpaksaUlang) {
    // Saran lama di sini cuma "Jalankan: node scripts/lengkapi-foto.mjs", dan
    // itu menyesatkan. Skrip tersebut hanya membuat foto untuk adegan yang
    // SUDAH terdaftar di adegan-foto.mjs dan melewati yang berkasnya ada.
    // Kalau semua adegan sudah punya berkas, perintah itu selesai tanpa
    // menghasilkan apa pun, dan pengulangan foto tetap terjadi. Yang kurang
    // bukan eksekusinya, melainkan definisi adegannya. Urutan yang benar
    // disebutkan lengkap supaya tidak ada yang mengira sudah menjalankan
    // perbaikan padahal belum.
    // Sejak foto dibuat per artikel, pengulangan hanya tersisa untuk artikel
    // yang belum sempat dapat fotonya sendiri. Jadi obatnya bukan menambah
    // pustaka kategori lagi, melainkan menuntaskan antrean foto per artikel.
    log('  ' + terpaksaUlang + ' artikel masih berbagi foto karena belum punya foto sendiri.');
    log('  Tuntaskan dengan: node scripts/foto-artikel.mjs ' + Math.max(terpaksaUlang, 40));
  }
  return artikel;
}
