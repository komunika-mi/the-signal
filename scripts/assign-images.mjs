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

  for (const a of artikel) {
    const kat = a.category;
    let pilih = ambilBelumTerpakai(tersedia[kat] || [])
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
    berdempet + ' berdempetan' + (terpaksaUlang ? ', ' + terpaksaUlang + ' TERPAKSA DIULANG' : ''));
  if (terpaksaUlang) {
    log('  pustaka kurang ' + terpaksaUlang + ' foto. Jalankan: node scripts/lengkapi-foto.mjs');
  }
  return artikel;
}
