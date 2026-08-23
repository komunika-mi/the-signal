// Membereskan artikel yang GAMBARNYA identik dengan artikel lain.
//
// Latar belakangnya ada di foto-unik.mjs. Ringkasnya: nama berkas kita unik
// karena mengikuti slug, tapi sumber memakai ulang foto stok, sehingga dua
// berkas berbeda nama bisa berisi gambar yang sama persis. Audit 13 Agustus
// 2026 menemukan 9 pasang begitu di arsip 192 artikel.
//
// Urutan penyelesaiannya, dari yang paling murah:
//   1. Artikel TERTUA di tiap kelompok mempertahankan fotonya. Dia yang lebih
//      dulu memakainya, dan menggeser artikel lama berarti mengganti gambar
//      yang barangkali sudah dilihat pembaca.
//   2. Artikel berikutnya kehilangan kredit fotonya dan turun ke ilustrasi AI.
//      Mencabut kredit itu wajib: tanpa itu artikel mengaku memakai foto
//      sumber padahal yang tampil gambar buatan.
//
// Kenapa tidak mencoba foto lain dari halaman sumbernya? Sudah dicoba pada
// tanggal yang sama dan hasilnya salah: berita emas dapat thumbnail YouTube,
// berita IHSG dapat foto Masjid Istiqlal. Gambar lain di halaman itu milik
// widget video dan daftar berita terkait. Badan berita tvOne sendiri tidak
// berfoto sama sekali, jadi kandidat alternatif memang tidak pernah ada.
// Uraian lengkapnya di komentar cariFotoUtama() pada lib.mjs.
//
// Ilustrasi hanya bisa dibuat di komputer rumah. Kalau alatnya tidak ada,
// artikelnya ditandai saja dan menunggu putaran lokal berikutnya.
//
//   node scripts/foto-kembar.mjs           perbaiki
//   node scripts/foto-kembar.mjs --lihat   hanya laporkan, tidak mengubah
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData } from './lib.mjs';
import { sidik } from './foto-unik.mjs';

const lihatSaja = process.argv.includes('--lihat');
const artikel = readData('articles.js', 'ARTICLES');

// Kelompokkan berdasarkan isi berkas, bukan namanya.
const kelompok = new Map();
for (const a of artikel) {
  // Penanda keterbukaan IDX dipakai bersama dengan sengaja, bukan cacat.
  if (a.image === 'assets/img/penanda-keterbukaan-bursa.jpg') continue;
  if (!a.image) continue;
  const p = path.join(ROOT, a.image);
  if (!fs.existsSync(p)) continue;
  const h = sidik(p);
  if (!kelompok.has(h)) kelompok.set(h, []);
  kelompok.get(h).push(a);
}

const kembar = [...kelompok.values()].filter(v => v.length > 1);
log(artikel.length + ' artikel, ' + kembar.length + ' kelompok berfoto identik');

if (!kembar.length) { log('tidak ada yang perlu dibereskan'); process.exit(0); }

// Yang tertua menang. terbit dipakai kalau ada, kalau tidak urutan arsip.
const urut = (g) => g.slice().sort((x, y) =>
  String(x.terbit || '').localeCompare(String(y.terbit || '')) ||
  artikel.indexOf(x) - artikel.indexOf(y));

for (const g of kembar) {
  const [tetap, ...geser] = urut(g);
  log('  ' + tetap.slug.slice(0, 44) + '  (tetap)');
  geser.forEach(a => log('    -> ' + a.slug.slice(0, 44) + '  turun ke ilustrasi'));
}

if (lihatSaja) process.exit(0);

let keIlustrasi = 0;

for (const g of kembar) {
  const [, ...geser] = urut(g);
  for (const a of geser) {
    // Berkas kembarnya dihapus supaya pastikanFotoArtikel() melihat artikel ini
    // memang belum berfoto, lalu mengisinya dengan ilustrasi.
    fs.rmSync(path.join(ROOT, 'assets/img', a.slug + '.jpg'), { force: true });
    a.kreditFoto = '';
    a.fotoSumber = '';
    keIlustrasi++;
    log('  -- ' + a.slug.slice(0, 44) + ' turun ke ilustrasi');
  }
}

log('selesai: ' + keIlustrasi + ' artikel menunggu ilustrasi');

writeData('articles.js', 'ARTICLES', artikel,
  '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
  '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
  '// Dibuat otomatis - jangan diedit manual.');

// Yang turun ke ilustrasi sekarang tidak punya berkas foto sama sekali, dan
// build akan menolaknya lewat penjaga "berkas gambar tidak ada". Jadi jalur
// pengisian foto harus jalan dulu sebelum build.
if (keIlustrasi) {
  log('menjalankan pengisi foto untuk ' + keIlustrasi + ' artikel yang kosong');
  execFileSync(process.execPath, [ROOT + '/scripts/foto-artikel.mjs', String(keIlustrasi)],
    { stdio: 'inherit' });
} else {
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
}
