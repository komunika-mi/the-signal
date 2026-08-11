// Pasangkan foto dari pustaka lokal ke tiap artikel.
// Aturan: foto harus cocok kategori, dan tidak boleh sama dengan
// 6 artikel terdekat supaya halaman tidak terlihat mengulang gambar.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';

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

const ada = n => fs.existsSync(path.join(IMG_DIR, n + '.jpg'));

export function pasangFoto(artikel) {
  const tersedia = {};
  for (const k of Object.keys(POOL)) tersedia[k] = POOL[k].filter(ada);
  const umum = UMUM.filter(ada);

  const kursor = {};
  const terakhir = [];
  const JENDELA = 6;

  for (const a of artikel) {
    const pool = (tersedia[a.category] && tersedia[a.category].length) ? tersedia[a.category] : umum;
    if (!pool.length) { a.image = 'assets/img/pasar-modal.jpg'; continue; }
    kursor[a.category] = kursor[a.category] || 0;

    let pilih = null;
    for (let i = 0; i < pool.length; i++) {
      const c = pool[(kursor[a.category] + i) % pool.length];
      if (!terakhir.includes(c)) { pilih = c; kursor[a.category] += i + 1; break; }
    }
    if (!pilih) { pilih = pool[kursor[a.category] % pool.length]; kursor[a.category]++; }

    a.image = 'assets/img/' + pilih + '.jpg';
    terakhir.push(pilih);
    if (terakhir.length > JENDELA) terakhir.shift();
  }

  let berdempet = 0;
  for (let i = 1; i < artikel.length; i++) {
    if (artikel[i].image === artikel[i - 1].image) berdempet++;
  }
  const unik = new Set(artikel.map(a => a.image)).size;
  log('foto: ' + unik + ' gambar berbeda dipakai, ' + berdempet + ' berdempetan');
  return artikel;
}
