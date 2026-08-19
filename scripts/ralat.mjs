// Memasang catatan ralat pada artikel atau edisi yang sudah tayang.
//
// pedoman-media-siber.html berjanji kekeliruan yang terkonfirmasi dikoreksi
// di artikel yang sama DISERTAI CATATAN PERBAIKAN, dan artikel tidak diubah
// diam-diam. Alat ini bagian kedua dari janji itu. Memperbaiki angkanya saja
// tanpa memasang catatan berarti menyunting senyap, dan pembaca yang sudah
// mengutip angka lama tidak punya cara tahu kutipannya perlu diperbaiki.
//
//   node scripts/ralat.mjs artikel <slug>          "teks ralat"
//   node scripts/ralat.mjs harian  <YYYY-MM-DD>    "teks ralat"
//   node scripts/ralat.mjs pekanan <YYYY-MM-DD>    "teks ralat"
//   node scripts/ralat.mjs cabut   <jenis> <kunci>
//
// Tanggal ralat diisi hari ini menurut WIB, dan labelnya dirakit sekarang
// supaya perender sisi klien di halaman arsip tidak perlu mengulang logika
// tanggal sama sekali.
//
// Berkas ARSIP ikut disunting, bukan cuma berkas edisi berjalan. Kalau tidak,
// ralatnya hilang begitu edisi itu bergeser jadi arsip, yaitu justru saat
// pembaca paling mungkin menemukannya lewat tautan lama.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';

const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function hariIniWIB() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);
}
function labelTanggal(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  return d.getUTCDate() + ' ' + BULAN[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}

// Berkas disunting sebagai TEKS lalu ditulis ulang sebagai JSON. Pola yang
// sama dipakai seluruh pipeline ini: bentuk berkasnya "var X = <json>;".
function muat(nama) {
  const p = path.join(ROOT, 'assets/js', nama);
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const a = s.indexOf('['), b = s.lastIndexOf(']');
  const c = s.indexOf('{'), d = s.lastIndexOf('}');
  const arr = a !== -1 && (c === -1 || a < c);
  try {
    return { p, awal: s.slice(0, arr ? a : c),
      data: JSON.parse(s.slice(arr ? a : c, (arr ? b : d) + 1)),
      akhir: s.slice((arr ? b : d) + 1) };
  } catch { return null; }
}
function simpan(m) {
  fs.writeFileSync(m.p, m.awal + JSON.stringify(m.data, null, 1) + m.akhir, 'utf8');
}

const SASARAN = {
  artikel: [['articles.js', (x, k) => x.slug === k]],
  harian: [['harian.js', (x, k) => x.tanggal === k], ['harian-arsip.js', (x, k) => x.tanggal === k]],
  pekanan: [['pekanan.js', (x, k) => x.tanggal === k], ['pekanan-arsip.js', (x, k) => x.tanggal === k]],
};

const arg = process.argv.slice(2);
const cabut = arg[0] === 'cabut';
const [jenis, kunci, teks] = cabut ? [arg[1], arg[2], null] : arg;

if (!SASARAN[jenis] || !kunci || (!cabut && !teks)) {
  console.error('Pakai: node scripts/ralat.mjs <artikel|harian|pekanan> <slug atau tanggal> "teks ralat"');
  console.error('       node scripts/ralat.mjs cabut <artikel|harian|pekanan> <slug atau tanggal>');
  process.exit(1);
}

const tanggal = hariIniWIB();
const stempelWIB = () =>
  new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 19) + '+07:00';
let kena = 0;
for (const [nama, cocok] of SASARAN[jenis]) {
  const m = muat(nama);
  if (!m) { log(nama + ': tidak terbaca, dilewati'); continue; }
  const daftar = Array.isArray(m.data) ? m.data : [m.data];
  let ubah = 0;
  for (const x of daftar) {
    if (!cocok(x, kunci)) continue;
    if (cabut) { delete x.ralat; } else {
      // waktu terpisah dari tanggal: yang dipakai dateModified, sedangkan
      // tanggal dan label tetap bentuk yang dibaca manusia. Saat meralat kita
      // memang tahu jamnya, jadi tidak ada alasan menyerahkan stempelnya
      // sebagai tanggal telanjang yang ditafsirkan mesin sebagai tengah malam.
      x.ralat = { tanggal, waktu: stempelWIB(), label: labelTanggal(tanggal), teks };
    }
    ubah++;
  }
  if (!ubah) { log(nama + ': tidak ada yang cocok'); continue; }
  simpan(m);
  kena += ubah;
  log(nama + ': ' + ubah + (cabut ? ' ralat dicabut' : ' ralat dipasang'));
}

if (!kena) { console.error('Tidak ada yang cocok dengan "' + kunci + '". Tidak ada yang diubah.'); process.exit(1); }
log('Selesai. Jalankan: node scripts/build-pages.mjs');
