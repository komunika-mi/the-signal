// Menjamin SETIAP artikel punya fotonya sendiri.
//
// Kenapa ada: pustaka foto per kategori tidak akan pernah mengejar arsip yang
// tumbuh. Terbukti dua kali dalam sehari pada 12 Agustus 2026. Pagi hari 147
// foto untuk 165 artikel, 18 berulang. Pustaka ditambah 21 adegan sampai pas
// 165 lawan 165, nol pengulangan. Sore hari pembaruan otomatis menambah tujuh
// artikel, jadi 172 lawan 167, dan lima foto berulang lagi. Menambah stok
// hanya menunda, tidak menyelesaikan.
//
// Jalan keluarnya struktural: nama berkas foto MENGIKUTI SLUG ARTIKEL. Slug
// artikel dijaga unik oleh pipeline, jadi dua artikel tidak mungkin memakai
// berkas yang sama. Pengulangan bukan dihindari, melainkan tidak bisa terjadi.
//
// Adegannya ditulis model bersamaan dengan artikelnya (field "foto" di
// rewrite.mjs), jadi tidak ada panggilan model tambahan untuk artikel baru.
// Artikel warisan yang belum punya adegan diisi lewat satu panggilan borongan
// di bawah.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, log } from './lib.mjs';
import { buatFoto, unduhFoto } from './buat-foto.mjs';
import { tanya, ambilJSON } from './rewrite.mjs';

const IMG_DIR = path.join(ROOT, 'assets/img');

export const fotoSendiri = (slug) => 'assets/img/' + slug + '.jpg';
export const punyaFotoSendiri = (slug) => fs.existsSync(path.join(IMG_DIR, slug + '.jpg'));

// Minta model menuliskan adegan untuk artikel yang belum punya. Diborong dalam
// satu panggilan supaya murah, dan dibatasi agar promptnya tidak kepanjangan.
async function adeganUntuk(artikel) {
  const system = [
    'Kamu editor foto sebuah media ekonomi Indonesia.',
    'Untuk tiap artikel, tuliskan SATU adegan foto dokumenter.',
    '',
    'ATURAN:',
    '- Bahasa Inggris, satu kalimat, 12-25 kata.',
    '- Adegan nyata di Indonesia yang masuk akal untuk berita itu.',
    '- JANGAN meminta permukaan bertulisan: papan, spanduk, layar presentasi,',
    '  grafik, dokumen menghadap kamera, uang kertas, plang nama. Model gambar',
    '  mengarang huruf dan hasilnya terbaca sebagai omong kosong.',
    '- JANGAN menyebut nama orang, perusahaan, merek, atau logo.',
    '- Tiap adegan harus BERBEDA satu sama lain: beda ruang, beda subjek, beda waktu.',
    '- Hindari klise orang menatap ponsel di depan layar saham.',
    '',
    'FORMAT KELUARAN: HANYA array JSON of string, urut sesuai daftar masukan.',
  ].join('\n');

  const user = artikel.map((a, i) =>
    (i + 1) + '. [' + a.category + '] ' + String(a.title).replace(/[\[\]]/g, '') +
    ' — ' + String(a.deck || '').slice(0, 140)).join('\n');

  const hasil = await ambilJSON(await tanya(system, user));
  return Array.isArray(hasil) ? hasil : [];
}

// Pastikan tiap artikel punya berkas fotonya sendiri.
//
// Tidak pernah melempar error: kegagalan satu foto tidak boleh menjatuhkan
// seluruh pembaruan harian. Artikel yang fotonya gagal dibuat dibiarkan tanpa
// foto sendiri, lalu assign-images.mjs memberinya foto pustaka sebagai cadangan
// dan mencoba lagi pada putaran berikutnya.
// Pembuat gambar hanya ada di komputer rumah, tidak di runner GitHub.
// Terbukti 12 Agustus 2026: daily.yml jalan, menambah artikel, dan nol foto
// terbuat. Tanpa penjaga ini tiap putaran CI memanggil model untuk menulis
// adegan lalu mencoba membuat gambar puluhan kali dan gagal semua, membuang
// waktu dan kredit untuk pekerjaan yang mustahil berhasil di sana.
//
// Jadi pembagian tugasnya begini, dan ini disengaja:
//   GitHub Actions - menulis artikel, dan menyimpan ADEGAN fotonya di
//                    articles.js lewat field fotoAdegan
//   komputer rumah - membuat gambarnya, saat putaran IDX tiap 2 jam
// Artikel yang lahir di cloud memakai foto pustaka dulu, lalu dapat foto
// sendiri pada putaran lokal berikutnya, paling lama dua jam kemudian.
let adaAlat = null;
function alatGambarTersedia() {
  if (adaAlat !== null) return adaAlat;
  try {
    execFileSync('higgsfield', ['--version'], { stdio: 'ignore' });
    adaAlat = true;
  } catch { adaAlat = false; }
  return adaAlat;
}

export async function pastikanFotoArtikel(artikel, { maksBaru = 40 } = {}) {
  // Mengunduh foto asli TIDAK butuh alat gambar, cuma curl dan ffmpeg. Jadi
  // ketiadaan alat gambar hanya mematikan jalur ilustrasi, bukan seluruh
  // fungsi ini. Penting untuk GitHub Actions: di sana ilustrasi memang tidak
  // bisa dibuat, tapi sekitar 70 persen artikel berasal dari tvOneNews yang
  // selalu berfoto, dan foto-foto itu tetap bisa diambil di sana.
  const bisaIlustrasi = alatGambarTersedia();
  if (!bisaIlustrasi) {
    log('foto artikel: pembuat ilustrasi tidak ada di mesin ini.');
    log('  Foto asli dari sumber tetap diunduh; artikel tanpa foto sumber');
    log('  menunggu putaran lokal berikutnya.');
  }

  const perlu = artikel.filter(a => a.slug && !punyaFotoSendiri(a.slug));
  if (!perlu.length) { log('foto artikel: semua sudah punya foto sendiri'); return { dibuat: 0, gagal: 0, dilewati: 0 }; }

  const antre = perlu.slice(0, maksBaru);
  if (perlu.length > antre.length) {
    log('foto artikel: ' + perlu.length + ' perlu foto, dikerjakan ' + antre.length +
      ' putaran ini (sisanya menyusul, supaya satu putaran tidak kelamaan)');
  }

  // Artikel warisan belum membawa adegan. Isi sekaligus dalam satu panggilan.
  //
  // Yang sudah punya foto sumber TIDAK perlu adegan sama sekali, dan kalau
  // alat gambar tidak ada, adegan pun tidak bisa dipakai. Menyaring keduanya
  // di sini mencegah panggilan model yang hasilnya pasti terbuang.
  const tanpaAdegan = bisaIlustrasi ? antre.filter(a => !a.fotoAdegan && !a.fotoSumber) : [];
  if (tanpaAdegan.length) {
    try {
      log('foto artikel: meminta ' + tanpaAdegan.length + ' adegan ke model');
      const adegan = await adeganUntuk(tanpaAdegan);
      tanpaAdegan.forEach((a, i) => { if (adegan[i]) a.fotoAdegan = String(adegan[i]).trim(); });
    } catch (e) {
      log('foto artikel: gagal meminta adegan -> ' + String(e.message).slice(0, 70));
    }
  }

  let dibuat = 0, diunduh = 0, gagal = 0, dilewati = 0;
  for (const a of antre) {
    // FOTO ASLI DIDAHULUKAN. Kalau sumbernya menyertakan foto, itu dokumentasi
    // peristiwanya dan selalu lebih baik daripada ilustrasi. Ilustrasi AI baru
    // dipakai kalau sumbernya memang tidak berfoto, seperti IDX yang
    // lampirannya PDF, atau Bank Indonesia dan BPS.
    if (a.fotoSumber) {
      try {
        if (unduhFoto(a.slug, a.fotoSumber)) { a.imageV = Date.now().toString(36); diunduh++; continue; }
      } catch (e) {
        log('  unduh foto gagal, jatuh ke ilustrasi: ' + String(e.message).slice(0, 50));
        // Kreditnya harus ikut dicabut, kalau tidak artikel mengaku memakai
        // foto sumber padahal yang tampil ilustrasi buatan.
        a.kreditFoto = '';
      }
    }
    if (!bisaIlustrasi || !a.fotoAdegan) { dilewati++; continue; }
    try {
      if (buatFoto(a.slug, a.fotoAdegan)) { a.imageV = Date.now().toString(36); dibuat++; }
    } catch (e) {
      gagal++;
      log('  foto GAGAL ' + a.slug.slice(0, 40) + ': ' + String(e.message).slice(0, 60));
    }
  }

  log('foto artikel: ' + diunduh + ' foto asli diunduh, ' + dibuat + ' ilustrasi dibuat, ' +
    gagal + ' gagal, ' + dilewati + ' tanpa adegan');
  return { dibuat, diunduh, gagal, dilewati };
}

// CLI: isi foto untuk seluruh arsip yang belum punya, lalu tempel ulang dan build.
//   node scripts/foto-artikel.mjs            -> maksimal 40 foto
//   node scripts/foto-artikel.mjs 200        -> maksimal 200 foto
if (process.argv[1] && import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const { readData, writeData } = await import('./lib.mjs');
  const { execFileSync } = await import('node:child_process');
  const maks = Number(process.argv[2] || 40);

  const artikel = readData('articles.js', 'ARTICLES');
  log('arsip: ' + artikel.length + ' artikel, ' +
    artikel.filter(a => punyaFotoSendiri(a.slug)).length + ' sudah punya foto sendiri');

  await pastikanFotoArtikel(artikel, { maksBaru: maks });

  writeData('articles.js', 'ARTICLES', artikel,
    '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
    '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
    '// Dibuat otomatis - jangan diedit manual.');

  execFileSync(process.execPath, [ROOT + '/scripts/ulang-foto.mjs'], { stdio: 'inherit' });
}
