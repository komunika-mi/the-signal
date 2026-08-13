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

// Sidik jari perseptual: gambar dikecilkan ke 16x16 abu-abu, lalu tiap piksel
// dibandingkan dengan rata-ratanya jadi 256 bit hitam-putih.
//
// Perlu perseptual, bukan MD5, karena berkas kita SUDAH DIOLAH: diperkecil ke
// 680px dan dikompresi ulang, jadi byte-nya pasti berbeda dari berkas asli di
// server sumber meski gambarnya sama persis. MD5 akan melaporkan semuanya
// berbeda dan penjaganya jadi tidak berguna.
function sidikPersepsi(berkas) {
  const keluar = path.join(TMP, 'sidik-' + process.pid + '.pgm');
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
  const tujuan = path.join(TMP, 'periksa-' + process.pid + '.img');
  try {
    execFileSync('curl', ['-sL', '--max-time', '30', '-A', UA, '-o', tujuan, url], { encoding: 'utf8' });
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
let cocok = 0, takTerperiksa = 0;

for (const a of kandidat) {
  const berkasKita = path.join(ROOT, a.image);
  if (!fs.existsSync(berkasKita)) {
    bermasalah.push({ slug: a.slug, sebab: 'berkas gambar tidak ada: ' + a.image });
    continue;
  }

  let fotoSumberKini = a.fotoSumber;
  try {
    // Halaman sumbernya diambil ULANG, bukan memakai fotoSumber tersimpan.
    // Kalau redaksi sumber mengganti fotonya, kita ingin tahu.
    const html = await retry(() => get(a.sourceUrl, { timeout: 25000 }), 1);
    const utama = cariFotoUtama(html);
    if (utama) fotoSumberKini = utama;
  } catch {
    // Sumber tidak bisa diambil sekarang: jatuh ke alamat yang tersimpan.
  }

  const unduhan = unduhSementara(fotoSumberKini);
  if (!unduhan) { takTerperiksa++; continue; }

  const sKita = sidikPersepsi(berkasKita);
  const sSumber = sidikPersepsi(unduhan);
  fs.rmSync(unduhan, { force: true });

  if (!sKita || !sSumber) { takTerperiksa++; continue; }

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

log('hasil: ' + cocok + ' cocok, ' + bermasalah.length + ' bermasalah, ' +
  takTerperiksa + ' tidak bisa diperiksa');

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
