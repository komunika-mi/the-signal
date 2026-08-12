// Perbarui HANYA data pasar, lalu bangun ulang halaman.
//
// Kenapa terpisah: sebelumnya pasar cuma ikut diperbarui oleh update-all.mjs
// yang jalan sekali sehari pukul 06.00 WIB. Akibatnya sepanjang jam bursa
// angkanya membeku dan stempel waktunya tertulis "06.53 WIB" padahal sudah
// sore, jadi terlihat basi walau angkanya memang nilai terakhir.
//
// Script ini murah dan cepat: tidak memanggil Claude sama sekali, cuma empat
// permintaan HTTP ke sumber gratis tanpa API key. Aman dijalankan sesering
// mungkin, dan dipanggil dari jalankan-idx.ps1 yang sudah jalan tiap 2 jam.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { ROOT, log } from './lib.mjs';
import { ambilPasar } from './fetch-market.mjs';

function tanggalWIB() {
  const H = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const w = new Date(Date.now() + 7 * 3600 * 1000);
  return H[w.getUTCDay()] + ', ' + w.getUTCDate() + ' ' + B[w.getUTCMonth()] + ' ' + w.getUTCFullYear() +
    ' &middot; ' + String(w.getUTCHours()).padStart(2, '0') + '.' + String(w.getUTCMinutes()).padStart(2, '0') + ' WIB';
}

function bacaPasar() {
  const p = ROOT + '/assets/js/market.js';
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  if (i === -1) return null;
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}

async function main() {
  const sebelum = bacaPasar();
  const pasar = await ambilPasar(sebelum);
  pasar.tanggalWIB = tanggalWIB();

  // ambilPasar mempertahankan nilai lama kalau sumbernya gagal, jadi periksa
  // apakah benar-benar ada yang berubah supaya log-nya jujur.
  const berubah = !sebelum || ['ihsg', 'usdidr', 'emas', 'btc']
    .some(k => (sebelum[k] || {}).nilai !== (pasar[k] || {}).nilai);

  fs.writeFileSync(ROOT + '/assets/js/market.js',
    '// Data pasar harian. Dibuat otomatis - jangan diedit manual.\nvar MARKET = ' +
    JSON.stringify(pasar, null, 1) + ';\n', 'utf8');

  log('pasar: IHSG ' + pasar.ihsg.nilai + ' ' + pasar.ihsg.delta +
    ' | USD/IDR ' + pasar.usdidr.nilai +
    ' | emas ' + pasar.emas.nilai +
    (berubah ? '' : '  (tidak ada perubahan nilai)'));
  log('stempel waktu: ' + pasar.tanggalWIB.replace('&middot;', '·'));

  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
}

main().catch(e => { console.error(e); process.exit(1); });
