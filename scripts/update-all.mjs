// Orkestrator harian The Signal.
//   1. ambil berita ekonomi terbaru dari tvOneNews
//   2. rangkum ulang pakai Claude (bukan salinan)
//   3. ambil + saring video ekonomi dari YouTube tvOneNews
//   4. perbarui data pasar (IHSG, USD/IDR, emas, Bitcoin)
//   5. pasang foto, tulis data, bangun ulang halaman statis
//
// Aman diulang: artikel yang sudah ada tidak diproses dua kali.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData } from './lib.mjs';
import { ambilDaftarBerita, ambilIsiArtikel } from './fetch-news.mjs';
import { ambilVideo } from './fetch-videos.mjs';
import { rangkumArtikel, saringVideo, MODEL } from './rewrite.mjs';
import { pasangFoto } from './assign-images.mjs';

const TARGET_BARU = Number(process.env.SIGNAL_TARGET || 10);   // berita baru per hari
const MAKS_KANDIDAT = Number(process.env.SIGNAL_KANDIDAT || 25);
const MAKS_ARSIP = Number(process.env.SIGNAL_ARSIP || 400);    // batasi ukuran situs (~40 hari)
const MAKS_VIDEO = 12;

function tanggalWIB() {
  const H = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const w = new Date(Date.now() + 7 * 3600 * 1000);
  return H[w.getUTCDay()] + ', ' + w.getUTCDate() + ' ' + B[w.getUTCMonth()] + ' ' + w.getUTCFullYear() +
    ' &middot; ' + String(w.getUTCHours()).padStart(2, '0') + '.' + String(w.getUTCMinutes()).padStart(2, '0') + ' WIB';
}

async function main() {
  log('=== The Signal: pembaruan harian dimulai (model: ' + MODEL + ') ===');

  const artikelLama = readData('articles.js', 'ARTICLES');
  const videoLama = readData('videos.js', 'VIDEOS');
  log('arsip saat ini: ' + artikelLama.length + ' artikel, ' + videoLama.length + ' video');

  // ---------- 1-2. berita ----------
  const sudahAda = new Set(artikelLama.map(a => a.sourceUrl));
  const kandidat = (await ambilDaftarBerita(MAKS_KANDIDAT)).filter(k => !sudahAda.has(k.url));
  log('kandidat berita baru: ' + kandidat.length);

  const artikelBaru = [];
  let gagalError = 0;         // gagal karena error teknis (token, jaringan, dll)
  let ditolakEditor = 0;      // sengaja ditolak Claude atau isinya tipis
  let errorTerakhir = '';

  for (const k of kandidat) {
    if (artikelBaru.length >= TARGET_BARU) break;
    try {
      const bahan = await ambilIsiArtikel(k);
      if (bahan.jumlahParagraf < 3) {
        ditolakEditor++; log('  lewati (isi tipis): ' + k.judulAsli.slice(0, 50)); continue;
      }
      const hasil = await rangkumArtikel(bahan);
      if (!hasil) { ditolakEditor++; log('  ditolak Claude: ' + k.judulAsli.slice(0, 50)); continue; }
      if (artikelLama.some(a => a.slug === hasil.slug) || artikelBaru.some(a => a.slug === hasil.slug)) {
        ditolakEditor++; log('  lewati (slug kembar): ' + hasil.slug); continue;
      }
      artikelBaru.push(hasil);
      log('  + ' + hasil.category + ' | ' + hasil.title.replace(/[\[\]]/g, '').slice(0, 55));
    } catch (e) {
      gagalError++;
      errorTerakhir = e.message.slice(0, 200);
      log('  GAGAL: ' + k.judulAsli.slice(0, 45) + ' -> ' + e.message.slice(0, 80));
    }
  }

  // Kegagalan diam-diam itu bahaya untuk job yang jalan tanpa diawasi.
  // Kalau ADA kandidat tapi semuanya gagal karena error teknis (bukan ditolak
  // editor), hentikan dengan status gagal supaya kelihatan di GitHub Actions.
  if (kandidat.length && !artikelBaru.length && gagalError) {
    log('');
    log('FATAL: ' + gagalError + ' dari ' + kandidat.length + ' kandidat gagal karena error teknis,');
    log('       dan tidak ada satu pun artikel yang berhasil dibuat.');
    log('       Error terakhir: ' + errorTerakhir);
    if (/not logged in|unauthor|401|invalid.*token|api key/i.test(errorTerakhir)) {
      log('       DUGAAN: CLAUDE_CODE_OAUTH_TOKEN belum diset atau sudah kedaluwarsa.');
      log('       Perbaiki: jalankan `claude setup-token`, lalu simpan sebagai secret repo.');
    }
    process.exit(1);
  }

  if (!artikelBaru.length) log('PERINGATAN: tidak ada artikel baru hari ini (semua kandidat ditolak editor)');
  if (artikelBaru.length && artikelBaru.length < TARGET_BARU) {
    log('CATATAN: hanya dapat ' + artikelBaru.length + ' dari target ' + TARGET_BARU + ' artikel');
  }

  // ---------- 3. video ----------
  let videoGabung = videoLama;
  try {
    const kandidatVideo = await ambilVideo();
    const idLama = new Set(videoLama.map(v => v.id));
    const belumAda = kandidatVideo.filter(v => !idLama.has(v.id));
    if (belumAda.length) {
      const lolos = await saringVideo(belumAda);
      log('video baru lolos saringan: ' + lolos.length);
      videoGabung = [...lolos, ...videoLama].slice(0, MAKS_VIDEO);
    } else {
      log('tidak ada video baru sejak pembaruan terakhir');
    }
  } catch (e) {
    log('PERINGATAN: gagal memperbarui video -> ' + e.message.slice(0, 80));
  }

  // ---------- 4. pasar ----------
  // Data pasar TIDAK diperbarui di sini lagi. Pemiliknya sekarang
  // .github/workflows/pasar.yml yang jalan tiap 30 menit saat bursa buka.
  // Kalau dua job sama-sama menulis market.js, keduanya push dan bentrok.
  const pasar = bacaPasar();

  // ---------- 5. simpan + bangun ----------
  const semua = [...artikelBaru, ...artikelLama]
    .sort((a, b) => new Date(b.isoDate || 0) - new Date(a.isoDate || 0))
    .slice(0, MAKS_ARSIP);

  pasangFoto(semua);

  writeData('articles.js', 'ARTICLES', semua,
    '// Rangkuman editorial The Signal dari tvOneNews.com/ekonomi. Bukan salinan artikel asli.\n' +
    '// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.');
  writeData('videos.js', 'VIDEOS', videoGabung,
    '// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.\n' +
    '// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.');
  if (pasar) tulisPasar(pasar);

  log('arsip baru: ' + semua.length + ' artikel, ' + videoGabung.length + ' video');

  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  log('=== selesai ===');
}

function bacaPasar() {
  const p = ROOT + '/assets/js/market.js';
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  if (i === -1) return null;
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}

function tulisPasar(p) {
  fs.writeFileSync(ROOT + '/assets/js/market.js',
    '// Data pasar harian. Dibuat otomatis - jangan diedit manual.\n' +
    'var MARKET = ' + JSON.stringify(p, null, 1) + ';\n', 'utf8');
}

main().catch(e => { console.error(e); process.exit(1); });
