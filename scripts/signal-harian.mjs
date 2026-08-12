// Signal Harian: satu tulisan yang merangkai SEMUA berita hari itu jadi satu
// benang arah kebijakan.
//
// Ini produk inti The Signal. Catatan redaksi di tiap artikel membaca arah
// per peristiwa; Signal Harian membaca arah HARI ITU secara keseluruhan, yaitu
// hal yang tidak bisa dilihat dari satu berita saja. Di situlah nilai yang
// membuat orang mau berlangganan.
//
// Untuk sekarang GRATIS dan terbuka, tidak dipagari.
//
// Dijalankan sekali sehari pada sore/malam WIB, setelah berita hari itu
// terkumpul. Kalau dijalankan pagi, bahannya cuma berita kemarin.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData } from './lib.mjs';
import { tulisHarian, PENGAMAN, GAYA, tanya, ambilJSON } from './rewrite.mjs';

const MIN_BAHAN = 4;   // di bawah ini hari itu terlalu sepi untuk ditarik benangnya

function tanggalWIB(d = new Date()) {
  const w = new Date(d.getTime() + 7 * 3600 * 1000);
  return w.toISOString().slice(0, 10);
}

function labelTanggal(iso) {
  const H = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const d = new Date(iso + 'T00:00:00Z');
  return H[d.getUTCDay()] + ', ' + d.getUTCDate() + ' ' + B[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}

async function main() {
  const hariIni = process.argv[2] || tanggalWIB();
  const semua = readData('articles.js', 'ARTICLES');

  // Ambil berita hari itu. Kalau sepi, mundur sehari daripada menulis dari
  // bahan yang terlalu tipis.
  let bahan = semua.filter(a => (a.isoDate || '').slice(0, 10) === hariIni);
  let tanggalDipakai = hariIni;
  if (bahan.length < MIN_BAHAN) {
    const kemarin = tanggalWIB(new Date(Date.now() - 86400000));
    const alt = semua.filter(a => (a.isoDate || '').slice(0, 10) === kemarin);
    if (alt.length > bahan.length) { bahan = alt; tanggalDipakai = kemarin; }
  }

  log('Signal Harian ' + tanggalDipakai + ': ' + bahan.length + ' berita jadi bahan');
  if (bahan.length < MIN_BAHAN) {
    log('terlalu sedikit bahan, dilewati (butuh minimal ' + MIN_BAHAN + ')');
    return;
  }

  const hasil = await tulisHarian(bahan, labelTanggal(tanggalDipakai));
  if (!hasil) { log('editor menilai hari ini tidak ada benang yang cukup jelas, dilewati'); return; }

  const data = {
    tanggal: tanggalDipakai,
    tanggalLabel: labelTanggal(tanggalDipakai),
    judul: hasil.judul,
    ringkas: hasil.ringkas,
    benang: hasil.benang,
    penutup: hasil.penutup || '',
    jumlahBahan: bahan.length,
    dibuat: new Date().toISOString(),
  };

  fs.writeFileSync(ROOT + '/assets/js/harian.js',
    '// Signal Harian. Dibuat otomatis oleh scripts/signal-harian.mjs.\n' +
    'var HARIAN = ' + JSON.stringify(data, null, 1) + ';\n', 'utf8');

  // Arsip edisi, dipakai membuat feed.xml. Berkas terpisah dari harian.js
  // supaya bentuk HARIAN yang dibaca halaman tidak berubah.
  //
  // Feed inilah yang memicu pengiriman ke pelanggan: Buttondown memantaunya
  // dan mengirim tiap kali ada item dengan tautan baru. Karena itu satu
  // tanggal harus muncul TEPAT SEKALI. Kalau hari yang sama ditulis ulang,
  // entri lama diganti, bukan ditambah, supaya pembaca tidak menerima dua
  // email untuk edisi yang sama.
  const berkasArsip = ROOT + '/assets/js/harian-arsip.js';
  let arsip = [];
  if (fs.existsSync(berkasArsip)) {
    try {
      const m = fs.readFileSync(berkasArsip, 'utf8').match(/\[[\s\S]*\]/);
      if (m) arsip = JSON.parse(m[0]);
    } catch { arsip = []; }
  }
  arsip = [data, ...arsip.filter(x => x.tanggal !== data.tanggal)]
    .sort((a, b) => (b.tanggal || '').localeCompare(a.tanggal || ''))
    .slice(0, 30);

  fs.writeFileSync(berkasArsip,
    '// Arsip Signal Harian, 30 edisi terakhir. Sumber feed.xml.\n' +
    '// Dibuat otomatis oleh scripts/signal-harian.mjs - jangan diedit manual.\n' +
    'var HARIAN_ARSIP = ' + JSON.stringify(arsip, null, 1) + ';\n', 'utf8');
  log('  arsip  : ' + arsip.length + ' edisi');

  log('  judul  : ' + hasil.judul);
  log('  benang : ' + hasil.benang.length);
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
}

main().catch(e => { console.error(e); process.exit(1); });
