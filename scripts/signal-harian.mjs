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
// WAJIB, walau sempat "berfungsi" tanpa ini. Node 24 di komputer rumah
// menyediakan `path` sebagai global, sedangkan runner GitHub memakai Node 22
// yang tidak. Akibatnya blok angka pasar di rakitAngka() melempar
// ReferenceError yang ditelan try/catch, dan SETIAP edisi yang dirangkai di
// cloud kehilangan IHSG, kurs, dan harga emas dari konteksnya tanpa satu pun
// pesan galat. Persis pola yang sudah dua kali menggigit proyek ini: jalan di
// mesin sendiri, mati diam-diam di tempat lain.
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, readObjek, arahDeret } from './lib.mjs';
import { nilaiRingkas } from './bps-grafik.mjs';
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

// Angka resmi terkini jadi bahan pembacaan arah, bukan hiasan.
//
// Yang dikirim bukan cuma nilai terakhir, melainkan ARAH beberapa periode
// terakhir, karena satu angka tidak memberi tahu apa-apa soal ke mana sesuatu
// bergerak. Semua dihitung di sini dari deret yang sudah ada, jadi model tidak
// perlu dan tidak boleh menghitung sendiri.
function rakitAngka() {
  const baris = [];
  try {
    const B = readObjek('bps.js');
    for (const [kode, ind] of Object.entries((B && B.indikator) || {})) {
      const t = ind.titik || [];
      if (!t.length) continue;
      const akhir = t[t.length - 1];
      // Arahnya dihitung arahDeret() di lib.mjs, satu-satunya tempat aturan itu
      // hidup sekarang. Cara lama mencacah langkah naik lawan langkah turun
      // dan buta terhadap besaran, sehingga label yang MASUK KE KONTEKS MODEL
      // bisa berlawanan dengan datanya sendiri: nilai impor naik 22 persen
      // sepanjang jendela tapi diberi label "cenderung turun".
      const { label, jumlah } = arahDeret(t);
      const arah = label ? label + ' dalam ' + jumlah + ' periode terakhir' : '';
      // Nilainya dicetak nilaiRingkas(), sama dengan grafik situs dan blok
      // angka email. Sebelumnya nilai mentah BPS yang dikirim, "25458.7 juta
      // US$", padahal GAYA menuntut angka berkaidah Indonesia; memberi contoh
      // yang melanggar aturannya sendiri lalu berharap model menyalahi contoh
      // itu adalah cara yang aneh untuk menegakkan aturan.
      baris.push('- ' + ind.nama + ': ' + nilaiRingkas(akhir.nilai, ind) +
        ' (' + akhir.periode + ' ' + akhir.tahun + ')' + (arah ? ', ' + arah : ''));
    }
  } catch { /* tanpa BPS pun Signal Harian tetap bisa ditulis */ }

  try {
    const p = path.join(ROOT, 'assets/js/market.js');
    if (fs.existsSync(p)) {
      const src = fs.readFileSync(p, 'utf8');
      const M = JSON.parse(src.slice(src.indexOf('{'), src.lastIndexOf('}') + 1));
      for (const [k, nama] of [['ihsg', 'IHSG'], ['usdidr', 'USD/IDR'], ['emas', 'Emas spot per gram']]) {
        if (M[k]) baris.push('- ' + nama + ': ' + M[k].nilai + ' (' + M[k].delta + ' hari ini)');
      }
    }
  } catch { /* angka pasar boleh tidak ada */ }

  return baris.join('\n');
}

// Judul dan benang edisi kemarin, supaya pembacaan hari ini bisa menyambung.
function rakitKemarin(tanggalIni) {
  try {
    const arsip = readData('harian-arsip.js', 'HARIAN_ARSIP');
    const lalu = arsip.filter(h => h.tanggal < tanggalIni)
      .sort((a, b) => b.tanggal.localeCompare(a.tanggal))[0];
    if (!lalu) return '';
    return lalu.tanggalLabel + ' - ' + lalu.judul + '\n' +
      (lalu.benang || []).map(b => '  benang: ' + b.judul).join('\n');
  } catch { return ''; }
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

  // Angka resmi dan edisi kemarin dirakit di sini, lalu dikirim sebagai
  // konteks. Keduanya sudah lama tersimpan di repo ini tapi tidak pernah
  // sampai ke perangkai, jadi Signal Harian membaca arah cuma dari teks berita
  // hari itu. Lihat catatan di tulisHarian pada rewrite.mjs.
  const konteks = { angka: rakitAngka(), kemarin: rakitKemarin(tanggalDipakai) };
  if (konteks.angka) log('konteks angka: ' + konteks.angka.split('\n').length + ' baris');
  if (konteks.kemarin) log('menyambung edisi kemarin');

  const hasil = await tulisHarian(bahan, labelTanggal(tanggalDipakai), konteks);
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
