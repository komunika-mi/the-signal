// Membandingkan foto yang TAMPIL di artikel dengan foto di halaman sumbernya.
//
// Kenapa ini ada, dan kenapa ini yang paling penting di antara semua penjaga
// foto: selama ini yang menemukan foto salah adalah PEMILIK SITUS, dengan cara
// membuka artikel dan halaman sumbernya berdampingan lalu membandingkannya
// dengan mata. Tiga kali dalam satu hari pada 13 Agustus 2026. Selama
// pemeriksaan itu manusia yang mengerjakan, kesalahan yang sama akan terus
// lolos ke pembaca lebih dulu.
//
// Penjaga yang sudah ada memeriksa KONSISTENSI INTERNAL: apakah nama berkasnya
// cocok dengan slug, apakah berkasnya ada, apakah ada dua artikel bergambar
// identik. Semuanya bisa lolos sempurna sementara fotonya tetap salah, karena
// tidak satu pun benar-benar melihat ke sumbernya. Itu celah yang ditutup di
// sini.
//
// Cara kerjanya: untuk tiap artikel yang MENGAKU memakai foto sumber, halaman
// sumbernya diambil ulang, foto utamanya diunduh, lalu dibandingkan dengan
// berkas yang benar-benar dipakai artikel. Perbandingannya bukan byte-per-byte,
// karena berkas kita sudah dikecilkan ke 680px, melainkan lewat sidik jari
// perseptual sederhana.
//
//   node scripts/periksa-foto.mjs           periksa 20 artikel terbaru
//   node scripts/periksa-foto.mjs 50        periksa 50 terbaru
//   node scripts/periksa-foto.mjs --semua   periksa seluruh arsip
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, get, retry, cariFotoUtama, UA } from './lib.mjs';

const IMG_DIR = path.join(ROOT, 'assets/img');
const TMP = process.env.TEMP || process.env.TMPDIR || '/tmp';

// Nama berkas sementara HARUS unik per panggilan, bukan cuma per proses.
// Sebelumnya keduanya bernama PID, dan itu aman selama pemeriksaan berjalan
// satu per satu. Begitu dijalankan berbarengan, dua artikel akan menulis dan
// menghapus berkas yang sama, dan hasilnya bukan error melainkan sidik jari
// milik gambar lain. Salah diam-diam, jenis kerusakan yang paling sulit
// ketahuan.
let nomorBerkas = 0;
const berkasSementara = (awalan, akhiran) =>
  path.join(TMP, awalan + '-' + process.pid + '-' + (++nomorBerkas) + akhiran);

// Sidik jari perseptual: gambar dikecilkan ke 16x16 abu-abu, lalu tiap piksel
// dibandingkan dengan rata-ratanya jadi 256 bit hitam-putih.
//
// Perlu perseptual, bukan MD5, karena berkas kita SUDAH DIOLAH: diperkecil ke
// 680px dan dikompresi ulang, jadi byte-nya pasti berbeda dari berkas asli di
// server sumber meski gambarnya sama persis. MD5 akan melaporkan semuanya
// berbeda dan penjaganya jadi tidak berguna.
function sidikPersepsi(berkas) {
  const keluar = berkasSementara('sidik', '.pgm');
  try {
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', berkas,
      '-vf', 'scale=16:16,format=gray', '-frames:v', '1', keluar], { encoding: 'utf8' });
    const buf = fs.readFileSync(keluar);
    // PGM biner: header "P5\n16 16\n255\n" lalu 256 byte data.
    const data = buf.subarray(buf.length - 256);
    if (data.length !== 256) return null;
    let jml = 0;
    for (const v of data) jml += v;
    const rata = jml / 256;
    return Array.from(data, v => (v > rata ? '1' : '0')).join('');
  } catch {
    return null;
  } finally {
    fs.rmSync(keluar, { force: true });
  }
}

const jarak = (a, b) => {
  let d = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
  return d;
};

function unduhSementara(url) {
  const tujuan = berkasSementara('periksa', '.img');
  try {
    execFileSync('curl', ['-sL', '--max-time', '15', '-A', UA, '-o', tujuan, url], { encoding: 'utf8' });
    if (!fs.existsSync(tujuan) || fs.statSync(tujuan).size < 2000) return null;
    return tujuan;
  } catch { return null; }
}

// Ambang 12 dari 256 bit. Ditetapkan dari percobaan: gambar yang sama setelah
// diperkecil dan dikompresi ulang biasanya berbeda 0 sampai 6 bit, sedangkan
// dua foto yang benar-benar berbeda berjarak puluhan bit. 12 memberi ruang
// aman tanpa meloloskan foto yang keliru.
const AMBANG = 12;

const arg = process.argv.slice(2);
const semua = arg.includes('--semua');
const batas = Number(arg.find(x => /^\d+$/.test(x)) || 20);

const artikel = readData('articles.js', 'ARTICLES');

// Hanya artikel yang MENGAKU memakai foto sumber yang bisa diperiksa begini.
// Artikel berilustrasi memang tidak punya pembanding, dan IDX melampirkan PDF.
const kandidat = artikel
  .filter(a => a.kreditFoto && a.fotoSumber && a.image)
  .slice(0, semua ? undefined : batas);

log('memeriksa ' + kandidat.length + ' artikel berfoto sumber' +
  (semua ? ' (seluruh arsip)' : ' (terbaru)'));

const bermasalah = [];
let cocok = 0, takTerperiksa = 0, takSempat = 0;

// Dijalankan berbarengan, dan dibatasi tenggat.
//
// Sebelumnya berurutan satu per satu, dan tiap artikel bisa menghabiskan 25
// detik dua kali untuk halaman sumbernya plus 30 detik untuk gambarnya. Lima
// belas artikel dengan sumber yang sedang lambat = 20 menit. Itu yang terjadi
// 19 Agustus 2026: langkah ini makan 16,6 menit, menembus jatah job 12 menit,
// dan menjatuhkan SELURUH pemantau termasuk pemeriksaan SEO yang tidak ada
// hubungannya dengan foto.
//
// Tenggatnya BUKAN pengaman diam-diam. Yang tidak sempat diperiksa dihitung
// dan dilaporkan tersendiri, supaya "tidak sempat ketahuan" tidak pernah
// terbaca sebagai "tidak ada masalah".
const SERENTAK = Number(process.env.PERIKSA_FOTO_SERENTAK || 4);
const TENGGAT_MS = Number(process.env.PERIKSA_FOTO_TENGGAT_MS || 6 * 60 * 1000);
const mulai = Date.now();

async function periksaSatu(a) {
  const berkasKita = path.join(ROOT, a.image);
  if (!fs.existsSync(berkasKita)) {
    bermasalah.push({ slug: a.slug, sebab: 'berkas gambar tidak ada: ' + a.image });
    return;
  }

  let fotoSumberKini = a.fotoSumber;
  try {
    // Halaman sumbernya diambil ULANG, bukan memakai fotoSumber tersimpan.
    // Kalau redaksi sumber mengganti fotonya, kita ingin tahu.
    const html = await retry(() => get(a.sourceUrl, { timeout: 12000 }), 1);
    const utama = cariFotoUtama(html, { asal: a.sourceUrl });
    if (utama) fotoSumberKini = utama;
  } catch {
    // Sumber tidak bisa diambil sekarang: jatuh ke alamat yang tersimpan.
  }

  const unduhan = unduhSementara(fotoSumberKini);
  if (!unduhan) { takTerperiksa++; return; }

  const sKita = sidikPersepsi(berkasKita);
  const sSumber = sidikPersepsi(unduhan);
  fs.rmSync(unduhan, { force: true });

  if (!sKita || !sSumber) { takTerperiksa++; return; }

  const d = jarak(sKita, sSumber);
  if (d > AMBANG) {
    bermasalah.push({
      slug: a.slug, sebab: 'foto BERBEDA dari sumbernya (jarak ' + d + '/256)',
      kredit: a.kreditFoto, sumber: a.sourceUrl,
    });
  } else {
    cocok++;
  }
}

let kursor = 0;
async function pekerja() {
  for (;;) {
    const i = kursor++;
    if (i >= kandidat.length) return;
    if (Date.now() - mulai > TENGGAT_MS) { takSempat++; continue; }
    await periksaSatu(kandidat[i]);
  }
}
await Promise.all(Array.from({ length: SERENTAK }, () => pekerja()));

if (takSempat) {
  console.error('CATATAN: ' + takSempat + ' artikel TIDAK SEMPAT diperiksa, tenggat ' +
    Math.round(TENGGAT_MS / 1000) + ' detik habis lebih dulu. Itu bukan tanda fotonya benar.');
}
log('hasil: ' + cocok + ' cocok, ' + bermasalah.length + ' bermasalah, ' +
  takTerperiksa + ' tidak bisa diperiksa, ' + takSempat + ' tidak sempat' +
  ' (' + Math.round((Date.now() - mulai) / 1000) + ' detik)');

if (bermasalah.length) {
  console.error('');
  console.error('FOTO TIDAK COCOK DENGAN SUMBERNYA:');
  bermasalah.forEach(b => {
    console.error('  ' + b.slug);
    console.error('    ' + b.sebab + (b.kredit ? '  (dilabeli "Foto: ' + b.kredit + '")' : ''));
    if (b.sumber) console.error('    sumber: ' + b.sumber);
  });
  console.error('');
  console.error('Perbaiki dengan mengambil ulang fotonya:');
  console.error('  node scripts/ganti-foto-asli.mjs ' + bermasalah.map(b => b.slug).join(' '));
  // Kode keluar 2, bukan 1: pemanggil bisa membedakan "ada foto tidak cocok"
  // dari "skripnya sendiri error". Di workflow ini jadi peringatan, bukan
  // penghenti, karena menahan seluruh berita demi satu foto terlalu mahal;
  // pelajaran dari 13 Agustus 2026 ketika penjaga keras menahan situs
  // seharian.
  process.exit(2);
}
