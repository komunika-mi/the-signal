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
import { buatFoto } from './buat-foto.mjs';
import { log } from './lib.mjs';
import { ADEGAN } from './adegan-foto.mjs';

// Daftar adegannya ada di adegan-foto.mjs supaya assign-images.mjs ikut
// membacanya dan foto baru otomatis masuk pool.

async function main() {
  const semua = Object.values(ADEGAN).flat();
  log('akan membuat ' + semua.length + ' foto, model z_image');
  log('perkiraan biaya: ' + (semua.length * 0.15).toFixed(2) + ' kredit');
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
  log('Selanjutnya: daftarkan ke POOL scripts/assign-images.mjs lalu npm run build');
}

main().catch(e => { console.error(e); process.exit(1); });
