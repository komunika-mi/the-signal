// Pembaruan keterbukaan informasi IDX. Dijalankan tiap 2 jam pada jam bursa.
//
// Terpisah dari update-all.mjs supaya berita tvOne dan aksi korporasi punya
// jadwal sendiri, dan kalau salah satu bermasalah yang lain tetap jalan.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData } from './lib.mjs';
import { ambilKeterbukaan, ambilIsiLampiran, bacaAngkaKepemilikan } from './fetch-idx.mjs';
import { rangkumKeterbukaan, MODEL } from './rewrite.mjs';
import { pasangFoto } from './assign-images.mjs';

const TARGET = Number(process.env.IDX_TARGET || 8);      // aksi korporasi per putaran
const MAKS_KANDIDAT = Number(process.env.IDX_KANDIDAT || 25);
const MAKS_ARSIP = Number(process.env.SIGNAL_ARSIP || 400);

async function main() {
  log('=== The Signal: keterbukaan informasi IDX (model: ' + MODEL + ') ===');

  const artikelLama = readData('articles.js', 'ARTICLES');
  log('arsip saat ini: ' + artikelLama.length + ' artikel');

  // Sudah pernah diberitakan? Cocokkan lewat tautan sumber DAN kombinasi
  // emiten + judul, karena satu emiten bisa mengirim laporan sejenis berkali-kali.
  const sumberAda = new Set(artikelLama.map(a => a.sourceUrl));
  const sidikAda = new Set(artikelLama
    .filter(a => a.emiten)
    .map(a => a.emiten + '|' + String(a.title).replace(/[\[\]]/g, '').toLowerCase()));

  const kandidat = (await ambilKeterbukaan({ maks: MAKS_KANDIDAT }))
    .filter(k => !k.lampiran || !sumberAda.has(k.lampiran));

  log('kandidat setelah buang yang sudah ada: ' + kandidat.length);

  const baru = [];
  let gagalError = 0, ditolak = 0, errorTerakhir = '';

  for (const k of kandidat) {
    if (baru.length >= TARGET) break;
    try {
      // Baca dulu isi PDF-nya. Kalau gagal, berita tetap ditulis dari judul
      // saja, cuma jadi lebih tipis. Satu lampiran rusak tidak boleh
      // menjatuhkan seluruh putaran.
      k.isiDokumen = ambilIsiLampiran(k.lampiran);
      k.angka = k.isiDokumen ? bacaAngkaKepemilikan(k.isiDokumen) : null;
      if (k.isiDokumen) {
        // persenDariKepemilikan bisa null kalau kepemilikan awal 0, misalnya
        // pembelian perdana. Jangan panggil toFixed() tanpa memeriksa dulu.
        const p = k.angka && k.angka.persenDariKepemilikan !== null
          ? ' (' + k.angka.persenDariKepemilikan.toFixed(3) + '% kepemilikan)' : '';
        log('  dokumen terbaca: ' + k.isiDokumen.length + ' karakter' +
          (k.angka ? ' | ' + k.angka.arah + ' ' +
            Math.abs(k.angka.selisih).toLocaleString('id-ID') + ' lembar' + p : ''));
      }

      const hasil = await rangkumKeterbukaan(k);
      if (!hasil) { ditolak++; log('  ditolak: ' + (k.emiten || '----') + ' ' + k.judulAsli.slice(0, 48)); continue; }

      const sidik = hasil.emiten + '|' + hasil.title.replace(/[\[\]]/g, '').toLowerCase();
      if (sidikAda.has(sidik) || baru.some(b => b.slug === hasil.slug)) {
        ditolak++; log('  lewati (kembar): ' + hasil.slug.slice(0, 50)); continue;
      }
      sidikAda.add(sidik);
      baru.push(hasil);
      log('  + ' + (hasil.emiten || '----').padEnd(5) + ' ' + hasil.title.replace(/[\[\]]/g, '').slice(0, 52));
    } catch (e) {
      gagalError++;
      errorTerakhir = e.message.slice(0, 200);
      log('  GAGAL: ' + (k.emiten || '----') + ' -> ' + e.message.slice(0, 70));
    }
  }

  // Jangan biarkan kegagalan teknis lolos jadi "sukses" (lihat catatan di update-all.mjs)
  if (kandidat.length && !baru.length && gagalError) {
    log('');
    log('FATAL: ' + gagalError + ' dari ' + kandidat.length + ' kandidat gagal karena error teknis.');
    log('       Error terakhir: ' + errorTerakhir);
    if (/not logged in|unauthor|401|invalid.*token|api key/i.test(errorTerakhir)) {
      log('       DUGAAN: CLAUDE_CODE_OAUTH_TOKEN belum diset atau sudah kedaluwarsa.');
    }
    process.exit(1);
  }

  if (!baru.length) {
    log('tidak ada aksi korporasi baru yang layak diberitakan putaran ini');
    log('=== selesai (tanpa perubahan) ===');
    return;
  }

  const semua = [...baru, ...artikelLama]
    .sort((a, b) => new Date(b.isoDate || 0) - new Date(a.isoDate || 0))
    .slice(0, MAKS_ARSIP);

  pasangFoto(semua);
  writeData('articles.js', 'ARTICLES', semua,
    '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
    '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
    '// Dibuat otomatis - jangan diedit manual.');

  log('arsip baru: ' + semua.length + ' artikel (+' + baru.length + ' aksi korporasi)');
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  log('=== selesai ===');
}

main().catch(e => { console.error(e); process.exit(1); });
