// Mengisi mundur catatan redaksi untuk artikel yang tayang tanpa catatan.
//
// Kenapa perlu. Nama medianya The Signal, dan yang dijual bukan rangkuman
// berita melainkan pembacaan ARAH. Catatan redaksi adalah tempat arah itu
// ditulis. Audit 14 Agustus 2026 menghitung 107 dari 222 artikel tayang tanpa
// catatan sama sekali, seluruhnya dari kanal tvOne, karena aturan lama
// membolehkan catatan dikosongkan dan model mengambil jalan pintas itu.
// Aturannya sudah diperketat untuk artikel BARU, tapi arsip lama tidak ikut
// terbenahi sendiri.
//
// Artikel yang sudah punya catatan TIDAK disentuh. Menulis ulang catatan yang
// sudah ada berarti membakar kredit model untuk mengganti sesuatu yang belum
// tentu lebih baik.
//
// Dibatasi per putaran supaya biaya modelnya terkendali dan bisa dicicil.
//
//   node scripts/isi-catatan.mjs        20 artikel terlama yang kosong
//   node scripts/isi-catatan.mjs 50     50 artikel
//   node scripts/isi-catatan.mjs --lihat  hitung saja, tidak memanggil model
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData } from './lib.mjs';
import { tanya, ambilJSON, PENGAMAN, GAYA } from './rewrite.mjs';

const arg = process.argv.slice(2);
const lihatSaja = arg.includes('--lihat');
const maks = Number(arg.find(x => /^\d+$/.test(x)) || 20);

const artikel = readData('articles.js', 'ARTICLES');
const kosong = artikel.filter(a => !a.takeaway && (a.body || []).length);

log('arsip ' + artikel.length + ' artikel, ' + kosong.length + ' tanpa catatan redaksi');

if (lihatSaja) {
  const per = {};
  kosong.forEach(a => { const s = a.sourceLabel || 'tvOne'; per[s] = (per[s] || 0) + 1; });
  Object.entries(per).sort((x, y) => y[1] - x[1])
    .forEach(([k, v]) => log('   ' + String(v).padStart(4) + '  ' + k));
  process.exit(0);
}

if (!kosong.length) { log('tidak ada yang perlu diisi'); process.exit(0); }

// Yang PALING BARU dulu, bukan yang paling lama.
//
// Artikel baru yang masih sering dibuka lebih berharga diperbaiki daripada
// artikel sebulan lalu yang sudah tenggelam. Kalau pengisian ini dicicil dan
// tidak pernah selesai, yang tertinggal sebaiknya yang paling jarang dilihat.
const antre = kosong.slice(0, maks);
log('dikerjakan ' + antre.length + ' artikel terbaru yang kosong');

const system = [
  PENGAMAN,
  '',
  'Kamu redaktur The Signal, media ringkasan dan analisis ekonomi Indonesia.',
  'Untuk tiap artikel di bawah, tulis SATU catatan redaksi.',
  '',
  'Catatan redaksi inilah yang membedakan The Signal dari sekadar meringkas',
  'berita orang lain. Tugasnya MEMBACA ARAH, bukan mengulang isi berita.',
  '',
  'Tiga langkah berurutan:',
  '  1. APA YANG BERUBAH, sebut angka atau ketentuannya, bukan mengulang judul.',
  '  2. SIAPA YANG TERDAMPAK, tentukan dari isi beritanya sendiri.',
  '  3. KE MANA ARAHNYA, ini yang terpenting. Simpulkan ke mana situasi ini',
  '     bergerak berdasarkan bukti di berita, lalu sebut satu hal konkret yang',
  '     akan menguatkan atau mematahkan pembacaan itu: tanggal, aturan turunan,',
  '     atau angka rilis berikutnya.',
  '',
  'WAJIB TERISI, berjenjang, jangan pernah mengosongkan:',
  '  Bukti cukup    -> sebut arahnya + penguat/pematahnya.',
  '  Bukti terbelah -> dua skenario, mana yang lebih mungkin, dan KAPAN ketahuan.',
  '  Bukti tipis    -> apa yang berubah, siapa yang kena, dan APA YANG MASIH',
  '                    KURANG untuk bisa membaca arahnya.',
  '',
  'BATAS TEGAS:',
  '- Kamu MEMBACA ARAH, bukan MENILAI BENAR-SALAH. Dilarang menyatakan sebuah',
  '  kebijakan tepat, keliru, atau gagal. Dilarang menilai tokoh dan partai.',
  '- DILARANG mengarang angka, nama, tanggal, atau peristiwa yang tidak ada di',
  '  teks artikel. Kalau tidak ada di sana, tidak boleh muncul di catatan.',
  '- Dilarang memberi saran investasi atau menebak arah harga saham.',
  '- Dilarang menutup dengan kalimat hampa seperti "perkembangannya masih perlu',
  '  dipantau" tanpa menyebut APA yang dipantau.',
  '',
  'BAHASA: untuk pembaca yang BUKAN ekonom. Tiap istilah teknis langsung',
  'dijelaskan dengan kata sehari-hari atau diganti sekalian. Satu kalimat satu',
  'gagasan. Setelah menyebut angka, jelaskan artinya dalam praktik.',
  '',
  GAYA,
  '',
  'Panjang tiap catatan 3 sampai 4 kalimat.',
  '',
  'FORMAT KELUARAN: HANYA array JSON of string, urut persis sesuai nomor',
  'masukan, tanpa penjelasan apa pun di luar array.',
].join('\n');

// Diborong beberapa artikel sekaligus supaya hemat, tapi tidak terlalu banyak
// dalam satu panggilan: prompt yang kepanjangan membuat mutu catatan terakhir
// menurun, dan kalau satu panggilan gagal, yang hilang cuma satu kelompok.
const UKURAN_KELOMPOK = 5;
let terisi = 0;

for (let i = 0; i < antre.length; i += UKURAN_KELOMPOK) {
  const kelompok = antre.slice(i, i + UKURAN_KELOMPOK);
  const user = '<<<DATA>>>\n' + kelompok.map((a, n) =>
    (n + 1) + '. [' + a.category + '] ' + String(a.title).replace(/[\[\]]/g, '') + '\n' +
    '   Deck: ' + String(a.deck || '') + '\n' +
    '   Isi: ' + (a.body || []).join(' ').slice(0, 1600)
  ).join('\n\n') + '\n<<<AKHIR_DATA>>>';

  try {
    const hasil = await ambilJSON(await tanya(system, user));
    if (!Array.isArray(hasil)) { log('  kelompok ' + (i / UKURAN_KELOMPOK + 1) + ': balasan bukan array'); continue; }
    kelompok.forEach((a, n) => {
      const c = String(hasil[n] || '').trim();
      // Catatan yang terlalu pendek hampir pasti kalimat hampa. Lebih baik
      // dibiarkan kosong dan dicoba lagi nanti daripada mengisi arsip dengan
      // basa-basi yang justru menurunkan mutu bagian paling penting situs ini.
      if (c.length < 80) { log('  lewati (catatan terlalu pendek): ' + a.slug.slice(0, 44)); return; }
      a.takeaway = c;
      terisi++;
      log('  + ' + a.slug.slice(0, 50));
    });
  } catch (e) {
    log('  kelompok ' + (i / UKURAN_KELOMPOK + 1) + ' GAGAL: ' + String(e.message).slice(0, 70));
  }
}

log('selesai: ' + terisi + ' catatan diisi, sisa kosong ' +
  (kosong.length - terisi) + ' artikel');

if (terisi) {
  writeData('articles.js', 'ARTICLES', artikel,
    '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
    '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
    '// Dibuat otomatis - jangan diedit manual.');
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
}
