// Menambah foto ilustrasi ke pustaka lokal.
//
// CATATAN PENTING: pipeline harian TIDAK memanggil script ini. Berita baru
// memakai ulang foto yang sudah ada lewat assign-images.mjs, jadi biaya
// hariannya nol. Script ini hanya dipakai manual saat pustaka perlu ditambah.
//
// Model default: z_image (0,15 kredit per gambar).
// Hasil uji banding 2026-08-10 dengan prompt identik:
//   gpt_image_2  7 kredit    bagus, tapi 47x lebih mahal tanpa beda berarti
//   z_image      0,15 kredit bersih, fotorealistik, tanpa teks nyasar  <-- dipakai
//   soul_2       0,12 kredit JANGAN: menempel watermark teks besar dan logo palsu
//
// Pakai:
//   node scripts/buat-foto.mjs nama-berkas "prompt lengkap"
//   node scripts/buat-foto.mjs --daftar          (lihat foto yang sudah ada)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, log } from './lib.mjs';

const MODEL = process.env.FOTO_MODEL || 'z_image';
const IMG_DIR = path.join(ROOT, 'assets/img');

// Gaya dasar supaya seluruh pustaka terlihat satu keluarga.
const GAYA = 'Editorial documentary photograph, Indonesia, natural light, ' +
  'photojournalistic, shallow depth of field, no text overlays, no watermarks, no logos';

function jalankan(args) {
  return execFileSync('higgsfield', args, { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
}

export function buatFoto(nama, isiPrompt) {
  const tujuan = path.join(IMG_DIR, nama + '.jpg');
  if (fs.existsSync(tujuan)) { log('LEWATI (sudah ada): ' + nama); return false; }

  const prompt = GAYA + '. ' + isiPrompt;
  const tmp = path.join(process.env.TEMP || '/tmp', 'foto-' + nama);

  log('membuat ' + nama + ' dengan ' + MODEL);
  const keluaran = jalankan(['generate', 'create', MODEL,
    '--prompt', prompt, '--aspect_ratio', '4:3', '--wait', '--json']);

  const cocok = keluaran.match(/"result_url"\s*:\s*"([^"]+)"/);
  if (!cocok) throw new Error('tidak ada result_url: ' + keluaran.slice(0, 160));

  execFileSync('curl', ['-sL', cocok[1], '-o', tmp + '.png'], { encoding: 'utf8' });
  // Turunkan ke 760px lebar + JPEG q6: cukup tajam untuk web, hemat ukuran repo.
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp + '.png',
    '-vf', 'scale=760:-1', '-update', '1', '-q:v', '6', tujuan], { encoding: 'utf8' });
  fs.rmSync(tmp + '.png', { force: true });

  const kb = Math.round(fs.statSync(tujuan).size / 1024);
  log('OK ' + nama + '.jpg (' + kb + ' KB)');
  return true;
}

if (process.argv[1] && import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const [arg1, arg2] = process.argv.slice(2);

  if (!arg1 || arg1 === '--daftar') {
    const daftar = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.jpg')).sort();
    console.log('Pustaka foto (' + daftar.length + '):');
    daftar.forEach(f => console.log('  ' + f.replace('.jpg', '')));
    console.log('\nMenambah: node scripts/buat-foto.mjs nama-berkas "deskripsi adegan"');
    console.log('Setelah menambah, daftarkan namanya di POOL scripts/assign-images.mjs');
    process.exit(0);
  }

  if (!arg2) { console.error('Prompt belum diisi.'); process.exit(1); }
  buatFoto(arg1, arg2);
  console.log('\nJangan lupa daftarkan "' + arg1 + '" ke POOL di scripts/assign-images.mjs,');
  console.log('lalu jalankan: npm run build');
}
