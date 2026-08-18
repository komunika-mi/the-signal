// Membuat avatar kanal Telegram The Signal, 512x512 PNG.
//
// Kenapa digambar sendiri dan bukan memperbesar favicon: avatar Telegram
// DIPOTONG BUNDAR dan paling sering tampil sekitar 40 piksel di daftar chat.
// Favicon 64px berbentuk kotak membulat dengan batang menempel ke tepi bawah
// kiri; kalau dipotong bundar, kaki batangnya terpotong dan komposisinya
// jatuh ke pojok. Di sini batangnya ditaruh di tengah lingkaran aman, lebih
// tebal, dan jaraknya dilebarkan supaya tetap terbaca sebagai tiga batang
// naik saat mengecil.
//
// Tanpa pustaka luar: PNG ditulis tangan (zlib bawaan Node), dan tepinya
// dihaluskan dengan menggambar 4x lebih besar lalu dirata-ratakan turun.
import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';
import { ROOT } from './lib.mjs';

// Ukuran bisa diberikan lewat argumen supaya satu penggambar melayani dua
// keperluan: avatar Telegram 512 dan logo Publisher Center 1000, yang
// disarankan Google. Geometri batang di bawah ditulis dalam ruang 512,
// jadi semuanya dikalikan SKALA_RUANG dan bukan ditulis ulang.
const SISI = Number(process.argv[2]) || 512;
const SKALA_RUANG = SISI / 512;
const SKALA = 4;                       // supersampling untuk tepi halus
const N = SISI * SKALA;

const GELAP = [0x18, 0x18, 0x16];      // --dark, sama dengan favicon
const MERAH = [0xe0, 0x39, 0x2c];      // --red

// Tiga batang naik, dipusatkan di dalam lingkaran aman.
const BATANG = [
  { x: 123, l: 66, atas: 250, bawah: 360 },
  { x: 223, l: 66, atas: 195, bawah: 360 },
  { x: 323, l: 66, atas: 135, bawah: 360 },
].map(b => ({ x: b.x * SKALA_RUANG, l: b.l * SKALA_RUANG, atas: b.atas * SKALA_RUANG, bawah: b.bawah * SKALA_RUANG }));
const RADIUS_BATANG = 10 * SKALA_RUANG;

function didalamBatang(x, y) {
  for (const b of BATANG) {
    const kiri = b.x, kanan = b.x + b.l, atas = b.atas, bawah = b.bawah;
    if (x < kiri || x > kanan || y < atas || y > bawah) continue;
    // sudut membulat
    const r = RADIUS_BATANG;
    const cx = x < kiri + r ? kiri + r : x > kanan - r ? kanan - r : x;
    const cy = y < atas + r ? atas + r : y > bawah - r ? bawah - r : y;
    if ((x - cx) ** 2 + (y - cy) ** 2 <= r * r) return true;
  }
  return false;
}

// Latar diisi PENUH sampai sudut, bukan dibulatkan: Telegram yang memotong
// lingkarannya sendiri. Kalau kita ikut membulatkan, sisa sudutnya jadi
// tepi gelap ganda yang terlihat kotor di sebagian klien.
const piksel = Buffer.alloc(SISI * SISI * 3);
for (let y = 0; y < SISI; y++) {
  for (let x = 0; x < SISI; x++) {
    let merah = 0;
    for (let sy = 0; sy < SKALA; sy++) {
      for (let sx = 0; sx < SKALA; sx++) {
        const px = x + (sx + 0.5) / SKALA;
        const py = y + (sy + 0.5) / SKALA;
        if (didalamBatang(px, py)) merah++;
      }
    }
    const a = merah / (SKALA * SKALA);
    const i = (y * SISI + x) * 3;
    for (let k = 0; k < 3; k++) {
      piksel[i + k] = Math.round(GELAP[k] * (1 - a) + MERAH[k] * a);
    }
  }
}

// ---------- penulis PNG ----------
function crc32(buf) {
  let c, tabel = crc32.tabel;
  if (!tabel) {
    tabel = crc32.tabel = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      tabel[n] = c;
    }
  }
  c = -1;
  for (let i = 0; i < buf.length; i++) c = tabel[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function bagian(jenis, data) {
  const panjang = Buffer.alloc(4);
  panjang.writeUInt32BE(data.length);
  const isi = Buffer.concat([Buffer.from(jenis, 'latin1'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(isi));
  return Buffer.concat([panjang, isi, crc]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SISI, 0);
ihdr.writeUInt32BE(SISI, 4);
ihdr[8] = 8;     // kedalaman bit
ihdr[9] = 2;     // truecolor RGB
const baris = Buffer.alloc(SISI * (SISI * 3 + 1));
for (let y = 0; y < SISI; y++) {
  baris[y * (SISI * 3 + 1)] = 0;   // tanpa filter
  piksel.copy(baris, y * (SISI * 3 + 1) + 1, y * SISI * 3, (y + 1) * SISI * 3);
}
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  bagian('IHDR', ihdr),
  bagian('IDAT', zlib.deflateSync(baris, { level: 9 })),
  bagian('IEND', Buffer.alloc(0)),
]);

const keluar = path.join(ROOT, process.argv[3] || 'assets/img/telegram-avatar.png');
fs.writeFileSync(keluar, png);
console.log('avatar: ' + keluar + ' (' + Math.round(png.length / 1024) + ' KB, ' + SISI + 'x' + SISI + ')');
