// Pasangkan foto dari pustaka lokal ke tiap artikel.
// Aturan: foto harus cocok kategori, dan tidak boleh sama dengan
// 6 artikel terdekat supaya halaman tidak terlihat mengulang gambar.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';

const IMG_DIR = path.join(ROOT, 'assets/img');

const POOL = {
  'Energi': ['spbu-bbm', 'kilang-minyak', 'tabung-lpg', 'sawit-biodiesel', 'global-pelabuhan'],
  'Pasar Modal': ['bursa-layar', 'emas-batangan', 'grafik-laptop', 'kapal-batubara', 'pasar-modal'],
  'Perbankan': ['teller-bank', 'atm-kota', 'mobile-banking', 'perahu-nelayan', 'rumah-subsidi', 'kopi-roasting'],
  'Moneter': ['gedung-bi', 'rupiah-kurs', 'konpers-bank', 'moneter-bi', 'sidang-dpr'],
  'Makroekonomi': ['sidang-dpr', 'pasar-beras', 'petani-sawah', 'bendungan', 'koperasi-desa'],
  'UMKM': ['batik-umkm', 'warung-makan', 'kopi-roasting', 'gula-merah', 'teknologi-logistik'],
  'BUMN': ['pesawat-bandara', 'menara-telko', 'galangan-kapal', 'industri-tekstil'],
  'Industri': ['buruh-pabrik', 'pabrik-gula', 'tambang-mineral', 'industri-tekstil'],
  'Ketenagakerjaan': ['bursa-kerja', 'gudang-logistik', 'buruh-pabrik', 'kantor-startup'],
  'Teknologi': ['server-data', 'kantor-startup', 'teknologi-logistik'],
  'Bisnis': ['wisatawan-kopi', 'warung-makan', 'bisnis-resto', 'rumah-subsidi'],
  'Aksi Korporasi': ['bursa-layar', 'grafik-laptop', 'gedung-bi', 'konpers-bank', 'emas-batangan', 'sidang-dpr'],
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
