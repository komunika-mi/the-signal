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
const BATAS_SATU_MS = Number(process.env.PERIKSA_FOTO_BATAS_SATU_MS || 45000);

// Janji yang KALAH LOMBA dengan pewaktu.
//
// get() di lib.mjs punya AbortController, tapi terbukti masih bisa
// menggantung selamanya di runner GitHub: 19 Agustus 2026 Promise.all di
// bawah tidak pernah selesai, event loop kosong, dan Node keluar dengan kode
// 13 "unsettled top-level await". Sebelum diparalelkan, cacat yang sama cuma
// menyamar jadi "lambat" sampai jatah job habis.
//
// Sebuah pemantau tidak boleh punya jalur yang bisa menggantung tanpa batas.
// Kalau ia menggantung, ia berhenti memantau tanpa mengabarkan apa pun, dan
// diamnya tidak bisa dibedakan dari sehat.
function berbatas(janji, ms, label) {
  return new Promise((selesai, gagal) => {
    const t = setTimeout(() => gagal(new Error('lewat batas ' + ms + 'ms: ' + label)), ms);
    janji.then(
      (v) => { clearTimeout(t); selesai(v); },
      (e) => { clearTimeout(t); gagal(e); },
    );
  });
}

// Penjaga waktu terakhir. SENGAJA tidak di-unref: selama ia hidup, event loop
// tidak pernah kosong, jadi Node tidak bisa keluar diam-diam dengan kode 13.
// Kalaupun semua jalur lain gagal, yang terjadi adalah laporan, bukan diam.
let penjagaWaktu = setTimeout(() => {
  console.error('');
  console.error('MACET: pemeriksaan tidak selesai dalam ' +
    Math.round((TENGGAT_MS + 60000) / 1000) + ' detik. ' +
    cocok + ' cocok, ' + bermasalah.length + ' bermasalah sejauh ini.');
  console.error('Ini kegagalan alat, bukan tanda fotonya benar.');
  process.exit(3);
}, TENGGAT_MS + 60000);

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

// Pekerjaan yang KALAH LOMBA tidak berhenti, ia cuma tidak ditunggu lagi.
//
// berbatas() memenangkan pewaktu, bukan membatalkan periksaSatu(). Yang
// ditinggalkan terus berjalan, dan kalau ia akhirnya menemukan foto yang
// TIDAK COCOK, temuan itu masuk ke `bermasalah` SESUDAH laporan dicetak dan
// sesudah kode keluar diputuskan. Diuji: ketidakcocokan yang sama menghasilkan
// kode 2 pada sumber cepat, dan kode 0 pada sumber lambat. Persis rasa aman
// palsu yang seluruh berkas ini berusaha lawan, cuma pintu masuknya bergeser
// dari "tidak memeriksa" jadi "memeriksa, menemukan, lalu membuang".
//
// Jadi yang dilepas dicatat, ditunggu sebentar, dan kalau tetap belum selesai
// saat laporan disusun, hasilnya TIDAK boleh disebut bersih.
const yatim = [];
let kursor = 0;
async function pekerja() {
  for (;;) {
    const i = kursor++;
    if (i >= kandidat.length) return;
    if (Date.now() - mulai > TENGGAT_MS) { takSempat++; continue; }
    const janji = periksaSatu(kandidat[i]);
    try {
      await berbatas(janji, BATAS_SATU_MS, kandidat[i].slug);
    } catch {
      // Satu artikel yang menggantung tidak boleh menghentikan yang lain, tapi
      // janjinya tetap dipegang supaya bisa ditunggu dan dihitung nanti.
      // BELUM dihitung tak-terperiksa di sini: kalau ia sempat selesai di masa
      // tenggang, hasilnya sah dan sudah masuk ke cocok/bermasalah. Menghitung
      // sekarang membuat satu artikel terhitung dua kali di laporan.
      const jejak = { slug: kandidat[i].slug, selesai: false };
      janji.then(() => { jejak.selesai = true; }, () => { jejak.selesai = true; });
      yatim.push(jejak);
    }
  }
}
await Promise.all(Array.from({ length: SERENTAK }, () => pekerja()));

// Masa tenggang untuk yang dilepas. Kalau mereka sempat selesai, temuannya
// ikut terhitung; kalau tidak, jumlahnya dilaporkan dan hasilnya tidak bersih.
const TENGGANG_YATIM_MS = Number(process.env.PERIKSA_FOTO_TENGGANG_MS || 20000);
if (yatim.length) {
  const batasTunggu = Date.now() + TENGGANG_YATIM_MS;
  while (yatim.some(y => !y.selesai) && Date.now() < batasTunggu) {
    await new Promise(r => setTimeout(r, 250));
  }
}
const yatimMenggantung = yatim.filter(y => !y.selesai);
takTerperiksa += yatimMenggantung.length;
clearTimeout(penjagaWaktu);

if (takSempat) {
  console.error('CATATAN: ' + takSempat + ' artikel TIDAK SEMPAT diperiksa, tenggat ' +
    Math.round(TENGGAT_MS / 1000) + ' detik habis lebih dulu. Itu bukan tanda fotonya benar.');
}
log('hasil: ' + cocok + ' cocok, ' + bermasalah.length + ' bermasalah, ' +
  takTerperiksa + ' tidak bisa diperiksa, ' + takSempat + ' tidak sempat' +
  ' (' + Math.round((Date.now() - mulai) / 1000) + ' detik)');

// Pemeriksaan yang tidak memeriksa apa pun BUKAN pemeriksaan yang lolos.
//
// 19 Agustus 2026 pemasangan ffmpeg di runner kena timeout, dan skrip ini
// melaporkan "0 cocok, 0 bermasalah, 15 tidak bisa diperiksa" lalu keluar
// dengan kode 0. Langkahnya hijau, dan tidak ada yang tahu bahwa lima belas
// foto tidak pernah disentuh.
//
// Penjaga yang lolos justru pada saat ia tidak bisa bekerja lebih buruk
// daripada tidak ada penjaga sama sekali: yang tidak ada tidak menjanjikan
// apa-apa, sedangkan yang ini memproduksi rasa aman yang palsu.
//
// Kode 3 dibedakan dari 2 ("ada foto tidak cocok") dan 1 ("skripnya error"),
// supaya pemanggil bisa membedakan alat yang rusak dari temuan yang nyata.
// Ambangnya SEPARUH, bukan nol.
//
// Nol terlalu longgar: satu artikel yang kebetulan lolos sebelum tenggat
// sudah cukup membuat penjaganya diam, padahal 1 dari 15 sama tidak
// bermaknanya dengan 0 dari 15. Yang diukur di sini bukan 'apakah ada yang
// jalan', melainkan 'apakah cukup banyak yang jalan sampai hasilnya layak
// dipercaya'.
const terperiksa = cocok + bermasalah.length;
const cukup = Math.max(1, Math.ceil(kandidat.length / 2));

// Pemeriksaan yang masih menggantung saat laporan disusun membatalkan klaim
// bersih, berapa pun yang sudah terperiksa. Kita tidak tahu apa yang akan
// mereka temukan, dan "tidak tahu" bukan "tidak ada masalah".
if (yatimMenggantung.length) {
  console.error('');
  console.error(yatimMenggantung.length + ' pemeriksaan masih menggantung saat laporan disusun: ' +
    yatimMenggantung.map(y => y.slug).join(', '));
  console.error('Hasilnya tidak bisa disebut bersih, karena temuan mereka belum tentu ada.');
  console.error('');
  process.exit(3);
}

if (kandidat.length && terperiksa < cukup) {
  console.error('');
  console.error('HANYA ' + terperiksa + ' dari ' + kandidat.length +
    ' artikel benar-benar terperiksa, di bawah ambang ' + cukup + '.');
  console.error('Ini kegagalan alat, bukan tanda fotonya benar.');
  try {
    execFileSync('ffmpeg', ['-version'], { encoding: 'utf8' });
    console.error('ffmpeg ADA, jadi sebabnya di jaringan: halaman sumber atau berkas gambarnya tidak terambil.');
  } catch {
    console.error('ffmpeg TIDAK ADA di mesin ini. Tanpa ffmpeg sidik jari gambar tidak bisa dihitung sama sekali.');
  }
  console.error('');
  process.exit(3);
}
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

// SISA KOLAM GAMBAR.
//
// Artikel IDX tidak punya foto sumber, cuma PDF, jadi ia butuh ilustrasi
// yang dibuat sendiri. Pembuatnya CLI higgsfield yang cuma ada di komputer
// rumah, sementara pipeline-nya kini jalan di server. Artikel yang lahir di
// server karena itu mengambil dari kolam gambar bertema yang jumlahnya
// terbatas.
//
// Begitu kolam habis, pasangFoto() mulai MEMAKSA pengulangan. Foto yang
// berulang tidak boleh terjadi di situs ini, jadi yang perlu diketahui
// bukan saat kolamnya habis melainkan JAUH SEBELUM itu, selagi masih sempat
// dijalankan scripts/jalankan-foto.ps1 dari rumah.
//
// Diperiksa di sini, bukan di skrip tersendiri, karena inilah penjaga foto
// dan ia sudah jalan tiga kali sehari di server.
const AMBANG_KOLAM = Number(process.env.PERIKSA_FOTO_AMBANG_KOLAM || 60);
{
  const semuaArtikel = readData('articles.js', 'ARTICLES');
  const dipakai = new Set(semuaArtikel.map(x => x.image).filter(Boolean));
  let kolam = [];
  try {
    kolam = fs.readdirSync(IMG_DIR)
      .filter(f => /\.jpe?g$/i.test(f) && f !== 'og-card.jpg')
      .map(f => 'assets/img/' + f)
      .filter(f => !dipakai.has(f));
  } catch { kolam = []; }

  const tanpaFotoSendiri = semuaArtikel.filter(
    x => x.slug && x.image !== 'assets/img/' + x.slug + '.jpg').length;

  log('kolam gambar: ' + kolam.length + ' belum terpakai, ' +
    tanpaFotoSendiri + ' artikel belum punya ilustrasi sendiri');

  if (kolam.length < AMBANG_KOLAM) {
    console.error('');
    console.error('KOLAM GAMBAR MENIPIS: tinggal ' + kolam.length +
      ' gambar belum terpakai, di bawah ambang ' + AMBANG_KOLAM + '.');
    console.error('Begitu habis, artikel baru akan MEMAKAI ULANG foto artikel lain.');
    console.error('Isi ulang dari komputer rumah:');
    console.error('  powershell -File scripts/jalankan-foto.ps1');
    console.error('atau langsung: node scripts/foto-artikel.mjs 60');
    console.error('');
    process.exit(4);
  }
}
// Ditutup EKSPLISIT. Tanpa ini proses menunggu event loop kosong, dan
// pekerjaan yatim yang belum selesai masih sempat mencetak temuannya
// sesudah laporan, atau justru menahan proses tanpa alasan.
process.exit(0);
