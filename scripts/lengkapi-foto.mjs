// Melengkapi pustaka supaya SETIAP artikel bisa dapat foto sendiri.
//
// Permintaan user: foto tidak boleh berulang. Dengan 128 artikel dan 64 foto,
// pengulangan tidak terhindarkan, jadi pustakanya yang ditambah sampai jumlah
// foto per kategori minimal sebanyak artikel di kategori itu.
//
// Semua adegan sengaja dibuat berbeda: beda ruang, beda subjek, beda waktu.
// Dan semuanya MENGHINDARI permukaan bertulisan (papan, spanduk, layar dekat,
// uang kertas), karena z_image mengacak teks dan hasilnya terbaca sebagai
// omong kosong. Lihat catatan di buat-foto.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { buatFoto } from './buat-foto.mjs';
import { log, ROOT } from './lib.mjs';
import { ADEGAN } from './adegan-foto.mjs';

// Daftar adegannya ada di adegan-foto.mjs supaya assign-images.mjs ikut
// membacanya dan foto baru otomatis masuk pool.

async function main() {
  const semua = Object.values(ADEGAN).flat();

  // Hitung yang BENAR-BENAR akan dibuat, bukan seluruh isi daftar. Adegan yang
  // berkasnya sudah ada dilewati oleh buatFoto tanpa memanggil model, jadi
  // menyebut jumlah total membuat perkiraan biayanya berlipat-lipat dari yang
  // sebenarnya terjadi. Pernah tertulis "105 foto, 15,75 kredit" untuk
  // pekerjaan yang nyatanya 20 foto dan sekitar 3 kredit.
  const belumAda = semua.filter(([nama]) => !fs.existsSync(path.join(ROOT, 'assets/img', nama + '.jpg')));

  log('adegan terdaftar ' + semua.length + ', sudah punya berkas ' + (semua.length - belumAda.length));
  log('akan dibuat ' + belumAda.length + ' foto dengan model z_image');
  log('perkiraan biaya: ' + (belumAda.length * 0.15).toFixed(2) + ' kredit');
  if (!belumAda.length) {
    log('');
    log('Tidak ada yang perlu dibuat. Kalau foto masih berulang di situs, yang');
    log('kurang adalah DEFINISI adegan baru di adegan-foto.mjs, bukan perintah ini.');
    return;
  }
  log('');

  let dibuat = 0, dilewati = 0, gagal = 0;
  for (const [kategori, daftar] of Object.entries(ADEGAN)) {
    log('--- ' + kategori + ' (' + daftar.length + ') ---');
    for (const [nama, prompt] of daftar) {
      try {
        if (buatFoto(nama, prompt)) dibuat++; else dilewati++;
      } catch (e) {
        gagal++;
        log('GAGAL ' + nama + ': ' + String(e.message).slice(0, 70));
      }
    }
  }

  log('');
  log('dibuat ' + dibuat + ', dilewati ' + dilewati + ', gagal ' + gagal);
  // Pendaftaran manual ke POOL sudah tidak perlu: assign-images.mjs menyerap
  // seluruh isi ADEGAN sendiri. Saran lama di sini menyuruh langkah yang sudah
  // otomatis, dan itu bikin orang mengira ada yang terlewat.
  log('Selanjutnya cukup: npm run build (adegan-foto.mjs otomatis masuk pool)');
}

main().catch(e => { console.error(e); process.exit(1); });
