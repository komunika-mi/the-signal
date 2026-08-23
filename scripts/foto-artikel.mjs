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
import { ROOT, log, dijalankanLangsung } from './lib.mjs';
import { buatFoto, unduhFoto } from './buat-foto.mjs';
import { petaSidik, urlTerpakai, pasangFotoUnik } from './foto-unik.mjs';
import { tanya, tanyaLihat, ambilJSON } from './rewrite.mjs';

// CATATAN PENOLAKAN ILUSTRASI.
//
// Tanpa ini, ilustrasi yang ditolak akan dibuat ulang tiap putaran, ditolak
// lagi, dan membakar kredit tanpa henti. Percobaan dihitung, dan sesudah
// batasnya tercapai artikel itu dibiarkan memakai gambar kolamnya.
const CATATAN_TOLAK = path.join(ROOT, 'assets/data/foto-ditolak.json');
const MAKS_PERCOBAAN = Number(process.env.SIGNAL_FOTO_PERCOBAAN || 2);

function bacaTolak() {
  try { return JSON.parse(fs.readFileSync(CATATAN_TOLAK, 'utf8')); } catch { return {}; }
}
function tulisTolak(isi) {
  try {
    fs.mkdirSync(path.dirname(CATATAN_TOLAK), { recursive: true });
    fs.writeFileSync(CATATAN_TOLAK, JSON.stringify(isi, null, 1), 'utf8');
  } catch { /* catatan gagal ditulis bukan alasan menggagalkan putaran */ }
}

// Apakah ilustrasi ini benar-benar menggambarkan adegan yang diminta?
//
// Perlu, karena hasil model TIDAK selalu lebih baik daripada gambar kolam
// yang digantikannya. Terbukti 19 Agustus 2026: adegan untuk artikel dividen
// BBCA berbunyi "nasabah mengantre di konter teller, staf melayani
// transaksi", dan yang keluar ruangan bank KOSONG tanpa satu orang pun -
// lebih hambar daripada foto kolam konferensi pers yang tadinya dipakai.
//
// Gagal menilai TIDAK dianggap lolos. Kalau penilainya sendiri bermasalah,
// gambar lama dipertahankan, karena "tidak tahu" bukan "sudah diperiksa".
export async function nilaiIlustrasi(berkas, adegan, judul) {
  const system = [
    'Kamu editor foto sebuah media ekonomi Indonesia.',
    'Tugasmu memutuskan apakah sebuah ilustrasi layak dipasang di artikel.',
    'Jawab HANYA dengan JSON: {"lolos": true|false, "alasan": "<satu kalimat>"}.',
    '',
    'TOLAK kalau salah satu berlaku:',
    '- Subjek utama yang diminta adegan TIDAK ADA. Kalau adegannya menyebut',
    '  orang (nasabah, pekerja, pedagang, pejabat) dan gambarnya kosong tanpa',
    '  manusia, itu ditolak.',
    '- Gambarnya memuat tulisan, logo, atau merek yang teracak atau dikarang.',
    '- Isinya tidak nyambung sama sekali dengan bidang beritanya.',
    '- Gambarnya rusak, buram parah, atau jelas cacat.',
    '',
    'LOLOSKAN kalau subjek utamanya hadir dan suasananya masuk akal untuk',
    'berita itu, meski komposisinya tidak persis sama dengan adegan yang',
    'diminta. Yang dinilai kelayakan, bukan kemiripan harfiah.',
  ].join('\n');
  const user = [
    'Baca berkas gambar ini: ' + berkas,
    '',
    'Judul artikel: ' + judul,
    'Adegan yang diminta: ' + adegan,
    '',
    'Layak dipasang?',
  ].join('\n');
  const jawab = await tanyaLihat(system, user);
  const j = ambilJSON(jawab);
  if (!j || typeof j.lolos !== 'boolean') {
    throw new Error('penilai tidak memberi vonis yang bisa dibaca');
  }
  return j;
}

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
    '- Adegan nyata di Indonesia yang SPESIFIK pada isi beritanya: ambil',
    '  sektornya, tempatnya, kegiatannya, dan bendanya dari teks yang diberikan.',
    '  Jangan adegan stok yang bisa dipasang di berita mana saja.',
    '- JANGAN menggambar momen dan tokoh peristiwanya. Yang digambar suasana',
    '  dan bendanya, bukan kejadian dan orangnya.',
    '- JANGAN meminta permukaan bertulisan: papan, spanduk, layar presentasi,',
    '  grafik, dokumen menghadap kamera, uang kertas, plang nama. Model gambar',
    '  mengarang huruf dan hasilnya terbaca sebagai omong kosong.',
    '- JANGAN menyebut nama orang, perusahaan, merek, atau logo.',
    '- Tiap adegan harus BERBEDA satu sama lain: beda ruang, beda subjek, beda waktu.',
    '- Hindari klise orang menatap ponsel di depan layar saham.',
    '',
    'FORMAT KELUARAN: HANYA array JSON of string, urut sesuai daftar masukan.',
  ].join('\n');

  // Badan artikel ikut dikirim, bukan cuma judul dan deck.
  //
  // Adegan yang ditulis dari judul saja selalu keluar generik, karena judul
  // memang tidak memuat sektor, tempat, maupun bendanya. Paragraf pertama
  // biasanya memuat ketiganya sekaligus, dan itu yang membuat ilustrasinya
  // mendekati suasana foto aslinya alih-alih jadi adegan stok yang bisa
  // dipasang di berita mana saja.
  const user = artikel.map((a, i) =>
    (i + 1) + '. [' + a.category + '] ' + String(a.title).replace(/[\[\]]/g, '') +
    '\n   ' + String(a.deck || '').slice(0, 160) +
    '\n   ' + String((a.body || []).slice(0, 2).join(' ')).slice(0, 420)).join('\n\n');

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
  //
  // CATATAN 13 Agustus 2026: kalimat di atas benar secara prinsip tapi sempat
  // salah dalam praktik, karena ffmpeg TIDAK terpasang di runner ubuntu-latest.
  // Selama berminggu-minggu tiap putaran cloud mencatat "spawnSync ffmpeg
  // ENOENT" dan diam-diam jatuh ke ilustrasi. Sekarang daily.yml memasang
  // ffmpeg lebih dulu. Kalau kelak pipeline dipindah ke runner lain, pastikan
  // ffmpeg ikut, atau jalur foto asli mati lagi tanpa suara.
  const bisaIlustrasi = alatGambarTersedia();
  if (!bisaIlustrasi) {
    log('foto artikel: pembuat ilustrasi tidak ada di mesin ini.');
    log('  Foto asli dari sumber tetap diunduh; artikel tanpa foto sumber');
    log('  menunggu putaran lokal berikutnya.');
  }

  const perlu = artikel.filter(a => a.slug && !punyaFotoSendiri(a.slug));
  if (!perlu.length) { log('foto artikel: semua sudah punya foto sendiri'); return { dibuat: 0, gagal: 0, dilewati: 0 }; }

  // DUA jalur, DUA aturan - dan ini yang dulu salah disatukan.
  //
  // Foto sumber TIDAK dibatasi. Mengunduh berkas yang sudah ada di server
  // sumber itu murah, dan yang jauh lebih penting: artikel yang membawa
  // kreditFoto WAJIB terselesaikan pada putaran yang sama. Kalau ia
  // tertinggal di luar batas, kreditnya tidak tercabut, pasangFoto()
  // memberinya gambar kolam, lalu penjaga atribusi di build-pages.mjs
  // menjatuhkan SELURUH putaran - termasuk artikel lain yang sudah benar.
  // Terjadi 23 Agustus 2026: 25 teratas antrean semuanya artikel IDX yang
  // memang tak berfoto sumber, sehingga empat artikel tvOneNews baru tidak
  // pernah tersentuh dan sebelas artikel sehari hilang karenanya.
  //
  // Ilustrasi TETAP dibatasi. Di situlah ongkos sebenarnya: ~30 detik dan
  // kredit langganan per gambar.
  const denganSumber = perlu.filter(a => a.fotoSumber);
  const tanpaSumber = perlu.filter(a => !a.fotoSumber);
  const antre = [...denganSumber, ...tanpaSumber.slice(0, maksBaru)];
  if (denganSumber.length) {
    log('foto artikel: ' + denganSumber.length + ' punya foto sumber, semuanya dikerjakan (tidak dibatasi)');
  }
  if (tanpaSumber.length > maksBaru) {
    log('foto artikel: ' + tanpaSumber.length + ' butuh ilustrasi, dikerjakan ' +
      Math.min(maksBaru, tanpaSumber.length) +
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

  // Sidik jari gambar yang sudah terpasang, supaya foto yang isinya sama
  // dengan milik artikel lain ditolak. Nama berkas unik saja tidak cukup:
  // sumber memakai ulang foto stok, jadi dua berkas berbeda nama bisa identik.
  const peta = petaSidik(artikel);
  const terpakai = urlTerpakai(artikel);

  // DUA penghitung, karena ada DUA sebab yang berbeda.
  //
  // Sebelumnya keduanya ditumpuk jadi satu variabel 'dilewati', lalu
  // laporannya melabelinya "tanpa adegan" - padahal itu cuma menggambarkan
  // salah satunya. Di runner GitHub, alat gambarnya memang tidak ada, jadi
  // SETIAP artikel masuk lewat cabang pertama dan dilaporkan sebagai "tanpa
  // adegan" meski adegannya lengkap. Terlihat 19 Agustus 2026: "2 tanpa
  // adegan" untuk dua artikel yang keduanya punya fotoAdegan.
  //
  // Sebab yang salah disebut membuat orang mencari di tempat yang salah:
  // yang satu berarti alatnya belum terpasang, yang satu lagi berarti model
  // gagal menulis adegannya. Perbaikannya jauh berbeda.
  let dibuat = 0, diunduh = 0, kembar = 0, gagal = 0;
  let tanpaAlat = 0, adeganKosong = 0, ditolak = 0, lewatiTolak = 0;
  const tolak = bacaTolak();
  let tolakBerubah = false;
  for (const a of antre) {
    // FOTO ASLI DIDAHULUKAN. Kalau sumbernya menyertakan foto, itu dokumentasi
    // peristiwanya dan selalu lebih baik daripada ilustrasi. Ilustrasi AI baru
    // dipakai kalau sumbernya memang tidak berfoto, seperti IDX yang
    // lampirannya PDF, atau Bank Indonesia dan BPS.
    if (a.fotoSumber) {
      const { url: dipakai } = pasangFotoUnik(a.slug, [a.fotoSumber],
        { peta, terpakai, unduh: unduhFoto, log });
      if (dipakai) {
        a.image = fotoSendiri(a.slug);
        a.fotoSumber = dipakai;
        a.imageV = Date.now().toString(36);
        diunduh++;
        continue;
      }
      // Fotonya kembar dengan artikel lain, atau gagal diunduh. Kreditnya
      // WAJIB dicabut,
      // kalau tidak artikel mengaku memakai foto sumber padahal yang tampil
      // ilustrasi buatan, dan itu salah atribusi.
      kembar++;
      a.kreditFoto = '';
      a.fotoSumber = '';
    }
    if (!bisaIlustrasi) { tanpaAlat++; continue; }
    if (!a.fotoAdegan) { adeganKosong++; continue; }

    // Sudah berkali-kali ditolak: berhenti mencoba, biarkan gambar kolamnya.
    const catatan = tolak[a.slug];
    if (catatan && catatan.percobaan >= MAKS_PERCOBAAN) {
      lewatiTolak++;
      continue;
    }

    try {
      if (buatFoto(a.slug, a.fotoAdegan)) {
        const berkasBaru = path.join(IMG_DIR, a.slug + '.jpg');
        // Artikel yang BELUM punya gambar apa pun menerima hasilnya tanpa
        // penilaian: sesuatu lebih baik daripada halaman tanpa gambar. Yang
        // dinilai hanya PENGGANTIAN, karena di situlah ada yang bisa hilang.
        const adaSebelumnya = Boolean(a.image) && a.image !== fotoSendiri(a.slug);
        let terima = true;
        if (adaSebelumnya) {
          try {
            const vonis = await nilaiIlustrasi(berkasBaru, a.fotoAdegan, a.title || a.slug);
            terima = vonis.lolos;
            if (!terima) {
              log('  foto DITOLAK ' + a.slug.slice(0, 34) + ': ' + String(vonis.alasan).slice(0, 70));
            }
          } catch (e) {
            // Penilainya sendiri bermasalah. Gambar lama DIPERTAHANKAN, karena
            // "tidak tahu" bukan "sudah diperiksa".
            terima = false;
            log('  foto tidak dinilai ' + a.slug.slice(0, 30) + ': ' + String(e.message).slice(0, 50));
            log('    gambar lama dipertahankan.');
          }
        }

        if (terima) {
          a.image = fotoSendiri(a.slug);
          a.imageV = Date.now().toString(36);
          dibuat++;
          if (tolak[a.slug]) { delete tolak[a.slug]; tolakBerubah = true; }
        } else {
          // Berkasnya WAJIB dihapus. Kalau dibiarkan, pasangFoto() akan
          // memungutnya sendiri pada build berikutnya karena namanya sama
          // dengan slug, dan penolakan ini jadi sia-sia tanpa jejak.
          try { fs.rmSync(berkasBaru, { force: true }); } catch { /* biarkan */ }
          const p = (tolak[a.slug] && tolak[a.slug].percobaan) || 0;
          tolak[a.slug] = { percobaan: p + 1, tanggal: new Date().toISOString().slice(0, 10) };
          tolakBerubah = true;
          ditolak++;
        }
      }
    } catch (e) {
      gagal++;
      log('  foto GAGAL ' + a.slug.slice(0, 40) + ': ' + String(e.message).slice(0, 60));
    }
  }

  log('foto artikel: ' + diunduh + ' foto asli diunduh, ' + dibuat + ' ilustrasi dibuat, ' +
    kembar + ' foto sumber ditolak karena kembar, ' + gagal + ' gagal, ' +
    tanpaAlat + ' menunggu alat gambar, ' + adeganKosong + ' tanpa adegan, ' +
    ditolak + ' ditolak penilai, ' + lewatiTolak + ' dilewati (sudah berkali ditolak)');
  if (tolakBerubah) tulisTolak(tolak);
  return {
    dibuat, diunduh, kembar, gagal,
    tanpaAlat, adeganKosong, ditolak, lewatiTolak,
    dilewati: tanpaAlat + adeganKosong,   // dipertahankan untuk pemanggil lama
  };
}

// CLI: isi foto untuk seluruh arsip yang belum punya, lalu tempel ulang dan build.
//   node scripts/foto-artikel.mjs            -> maksimal 40 foto
//   node scripts/foto-artikel.mjs 200        -> maksimal 200 foto
if (dijalankanLangsung(import.meta.url)) {
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
