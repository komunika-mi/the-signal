// Ganti ilustrasi AI dengan foto ASLI dari sumbernya, untuk artikel lama.
//
// Kenapa perlu berdiri sendiri: pastikanFotoArtikel() hanya menyentuh artikel
// yang BELUM punya foto. Artikel lama sudah memegang ilustrasi masing-masing,
// jadi mereka dilewati dan fitur foto asli tidak pernah kena ke arsip yang ada.
// Terbukti 12 Agustus 2026: fitur sudah tayang tapi 0 dari 172 artikel memakai
// foto asli, karena semuanya diambil sebelum fitur itu ada.
//
// Gratis: cuma mengunduh dan mengecilkan gambar, tidak memanggil model sama
// sekali. Justru menghemat, karena ilustrasi yang digantikan tidak perlu
// dibuat ulang lagi di kemudian hari.
//
// Artikel IDX dilewati: lampirannya PDF, tidak ada foto untuk diambil.
//
//   node scripts/ganti-foto-asli.mjs           semua artikel
//   node scripts/ganti-foto-asli.mjs 20        batasi 20 artikel
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log, readData, writeData, get, retry, cariFotoUtama } from './lib.mjs';
import { unduhFoto } from './buat-foto.mjs';
import { fotoSendiri } from './foto-artikel.mjs';
import { petaSidik, urlTerpakai, pasangFotoUnik } from './foto-unik.mjs';
import { execFileSync } from 'node:child_process';

const IMG_DIR = path.join(ROOT, 'assets/img');

// Argumen boleh angka (batas jumlah) atau daftar slug (perbaikan tertarget).
// Daftar slug dipakai saat ada artikel tertentu yang fotonya perlu diambil
// ulang, tanpa menyapu seluruh arsip.
const argv = process.argv.slice(2);
const slugTarget = argv.filter(x => /[a-z]/.test(x));
const maks = Number(argv.find(x => /^\d+$/.test(x)) || 0) || Infinity;

const artikel = readData('articles.js', 'ARTICLES');

// Kredit mengikuti sumbernya. tvOne tidak menyimpan sourceLabel karena itu
// sumber bawaan, jadi diisi di sini.
const kreditUntuk = (a) => a.sourceLabel || 'tvOneNews';

// fotoDitolak menandai artikel yang foto sumbernya SUDAH pernah dicoba dan
// ternyata kembar dengan foto artikel lain. Tanpa penanda ini, tiap putaran
// mengunduh ulang foto yang sama, menghitung sidiknya, lalu membuangnya lagi:
// pekerjaan yang hasilnya sudah pasti dan cuma memboroskan permintaan.
const layak = slugTarget.length
  ? artikel.filter(a => slugTarget.includes(a.slug))
  : artikel.filter(a =>
      a.sourceUrl && a.sourceLabel !== 'IDX' && !a.kreditFoto && !a.fotoDitolak);

log('arsip ' + artikel.length + ' artikel, ' + layak.length + ' layak dicoba (IDX dilewati)');

let dapat = 0, nihil = 0, kembar = 0, gagal = 0, dicabut = 0, n = 0;

// Sidik jari seluruh gambar yang sudah terpasang. Dipakai untuk menolak foto
// yang isinya sama dengan milik artikel lain, lihat foto-unik.mjs.
const peta = petaSidik(artikel);
const terpakai = urlTerpakai(artikel);

for (const a of layak) {
  if (n >= maks) break;
  n++;
  try {
    const html = await retry(() => get(a.sourceUrl, { timeout: 30000 }), 2);
    const utama = cariFotoUtama(html, { asal: a.sourceUrl });
    if (!utama) { nihil++; continue; }

    const { url: foto, alasan } = pasangFotoUnik(a.slug, [utama],
      { peta, terpakai, unduh: unduhFoto, log });
    if (!foto) {
      // HANYA "kembar" yang permanen. Kegagalan unduh itu sementara, dan
      // menandainya permanen berarti satu gangguan jaringan atau satu paket
      // yang belum terpasang membuang artikel itu dari jalur foto asli
      // selamanya. Terjadi 13 Agustus 2026, 14 artikel ter-blacklist gara-gara
      // ffmpeg belum ada di runner.
      if (alasan === 'kembar') {
        kembar++;
        a.fotoDitolak = true;
        // Kalau artikel ini SUDAH mengaku memakai foto sumber tapi kita gagal
        // memasangnya, kreditnya WAJIB dicabut. Gambar yang tampil bukan foto
        // sumbernya, dan membiarkan labelnya berarti membohongi pembaca.
        //
        // Ditemukan lewat periksa-foto.mjs pada artikel uji kelayakan calon
        // Gubernur BI: gambarnya berjarak 142 dari 256 dari foto sumbernya,
        // tetapi tetap berlabel "Foto: tvOneNews". Foto sumber aslinya memang
        // kembar dengan artikel lain, jadi memang tidak bisa dipakai, dan satu
        // satunya jalan jujur adalah turun ke ilustrasi.
        if (a.kreditFoto) {
          log('  cabut kredit ' + a.slug.slice(0, 40) + ': gambar tidak sesuai sumber');
          a.kreditFoto = '';
          a.fotoSumber = '';
          fs.rmSync(path.join(IMG_DIR, a.slug + '.jpg'), { force: true });
          dicabut++;
        }
      } else {
        gagal++;
        // Kegagalan sementara dibatasi lima percobaan per artikel. Tanpa batas,
        // artikel yang sumbernya terus 403 (misalnya BPS sebelum fallback curl
        // ada) diunduh ulang tiap putaran selamanya, membuang permintaan untuk
        // hasil yang sudah pasti. Lima cukup longgar: kegagalan sejati yang
        // sembuh (kasus ffmpeg hilang) ketahuan dalam satu-dua putaran, dan
        // perbaikan tangan selalu bisa lewat daftar slug yang menerobos
        // saringan ini.
        a.fotoGagal = (a.fotoGagal || 0) + 1;
        if (a.fotoGagal >= 5) {
          a.fotoDitolak = true;
          log('  ' + a.slug.slice(0, 40) + ': 5 kali gagal, berhenti mencoba otomatis');
        }
      }
      continue;
    }
    // Berhasil: cabut penanda kalau sebelumnya sempat salah dipasang.
    delete a.fotoDitolak;
    delete a.fotoGagal;

    a.fotoSumber = foto;
    a.kreditFoto = kreditUntuk(a);

    // WAJIB. Tanpa baris ini fotonya terunduh ke <slug>.jpg tapi artikel tetap
    // menunjuk gambar pustaka lamanya, jadi yang tampil di situs masih
    // ilustrasi. Lebih buruk lagi, kreditFoto sudah terisi sehingga ilustrasi
    // itu dilabeli "Foto: tvOneNews".
    //
    // Terjadi pada 13 Agustus 2026 dan dilaporkan pemiliknya: artikel Sinar Mas
    // soal klaster hunian menampilkan foto pasangan minum kopi di sawah, dan
    // artikel harga emas menampilkan foto sidang DPR berlabel foto tvOneNews.
    // Bug ini sempat tidak terlihat karena kebetulan tertutup: pasangFoto()
    // pada putaran pipeline berikutnya memperbaikinya sendiri, jadi hanya
    // artikel terbaru yang salah, dan hanya sampai putaran berikutnya lewat.
    a.image = fotoSendiri(a.slug);
    // Penanda versi gambar. Berkasnya ditimpa dengan NAMA YANG SAMA, dan
    // aset gambar di-cache tujuh hari, jadi tanpa ini pembaca yang sudah
    // pernah membuka halaman itu tetap melihat ilustrasi lama selama sepekan.
    a.imageV = Date.now().toString(36);
    dapat++;
  } catch (e) {
    gagal++;
    log('  gagal ' + a.slug.slice(0, 44) + ': ' + String(e.message).slice(0, 50));
  }
}

log('selesai: ' + dapat + ' foto asli dipasang, ' + nihil + ' sumber tanpa foto, ' +
  kembar + ' ditolak karena kembar, ' + dicabut + ' kredit dicabut, ' + gagal + ' gagal');

if (dapat || kembar || dicabut || gagal) {
  writeData('articles.js', 'ARTICLES', artikel,
    '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
    '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
    '// Dibuat otomatis - jangan diedit manual.');
  // Artikel yang kreditnya dicabut kehilangan berkas gambarnya, jadi jalur
  // pengisi foto harus jalan dulu; build akan menolak artikel tanpa berkas.
  if (dicabut) {
    execFileSync(process.execPath, [ROOT + '/scripts/foto-artikel.mjs', String(dicabut)], { stdio: 'inherit' });
  } else if (dapat) {
    execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  }
}
