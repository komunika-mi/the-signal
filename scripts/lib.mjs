// Utilitas bersama untuk semua script pipeline The Signal.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Alamat situs hidup di satu tempat saja, lihat situs.mjs.
export { SITUS as BASE } from './situs.mjs';
export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

// Muat .env kalau ada. Tanpa paket luar, cukup untuk PASANGAN=nilai per baris.
//
// Rahasia TIDAK ditaruh di environment pengguna karena skrip ini juga jalan
// lewat Task Scheduler dan GitHub Actions, yang masing-masing punya cara
// sendiri menyuntikkan rahasia. Berkas .env sudah masuk .gitignore.
// Nilai yang sudah ada di process.env menang, supaya rahasia dari Actions
// tidak tertimpa berkas lokal yang mungkin tertinggal.
(function muatEnv() {
  try {
    const berkas = path.join(ROOT, '.env');
    if (!fs.existsSync(berkas)) return;
    for (const baris of fs.readFileSync(berkas, 'utf8').split(/\r?\n/)) {
      const b = baris.trim();
      if (!b || b.startsWith('#')) continue;
      const p = b.indexOf('=');
      if (p < 1) continue;
      const nama = b.slice(0, p).trim();
      if (process.env[nama]) continue;
      process.env[nama] = b.slice(p + 1).trim().replace(/^["']|["']$/g, '');
    }
  } catch { /* .env rusak tidak boleh menjatuhkan pipeline */ }
})();

export function log(...a) { console.log('[' + new Date().toISOString().slice(11, 19) + ']', ...a); }

// Cari foto utama sebuah halaman berita atau siaran pers.
//
// Foto asli JAUH lebih baik daripada ilustrasi AI: foto rapat Mendag dengan
// Toyota adalah dokumentasi peristiwanya, sedangkan ilustrasi cuma mewakili
// topiknya. Jadi kalau sumbernya menyediakan foto, itu yang dipakai, dan
// ilustrasi AI turun jadi cadangan untuk sumber yang memang tidak berfoto
// (IDX yang lampirannya PDF, Bank Indonesia, BPS).
//
// Survei 12 Agustus 2026: tvOneNews 5 dari 5 artikel berfoto, Kemendag 2 dari
// 4, Bank Indonesia 0 dari 4, BPS 0 dari 3.
const BUKAN_FOTO = /logo|icon|favicon|placeholder|avatar|spinner|sprite|banner|assets\/imgs\/(part|theme)|\/assets\/(img|images)\/(ui|bg)/i;

export function cariFotoUtama(html, opsi = {}) {
  const kandidat = [];

  // og:image didahulukan HANYA kalau lolos saringan. Kemendag mengisinya
  // dengan gambar profil situs (assets/imgs/part/about.png) yang sama untuk
  // semua artikel, jadi memakainya buta berarti semua berita berfoto sama.
  const og = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (og) kandidat.push(og[1]);

  for (const m of html.matchAll(/(?:src|data-src|data-original)=["'](https?:\/\/[^"']+\.(?:jpg|jpeg|webp))(?:\?[^"']*)?["']/gi)) {
    kandidat.push(m[1]);
  }

  for (let u of kandidat) {
    if (!u || BUKAN_FOTO.test(u)) continue;
    // thumbs.tvonenews.com menyajikan beberapa ukuran lewat akhiran nama
    // berkas. Yang tertanam di halaman cuma 412x232, terlalu kecil untuk
    // kartu 680px, padahal versi 1200x675 tersedia di alamat yang sama.
    u = u.replace(/_\d{2,4}_\d{2,4}(\.(?:jpg|jpeg|webp))$/i, '_1200_675$1');
    return u;
  }
  return '';
}

export async function get(url, { timeout = 25000, headers = {} } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': UA, ...headers } });
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return await r.text();
  } finally { clearTimeout(t); }
}

export async function getJSON(url, opts) { return JSON.parse(await get(url, opts)); }

// IDX menolak permintaan dari Node (fetch) dengan HTTP 403, padahal curl lolos
// memakai header yang sama persis. Kemungkinan mereka menyaring lewat sidik
// jari TLS, bukan header. Jadi khusus IDX kita pinjam curl.
export function getViaCurl(url, { timeout = 30 } = {}) {
  const out = execFileSync('curl', [
    '-s', '--compressed', '--max-time', String(timeout),
    '-A', UA,
    '-H', 'Accept: application/json, text/plain, */*',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
    '-H', 'Referer: https://www.idx.co.id/id/perusahaan-tercatat/keterbukaan-informasi/',
    url,
  ], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (!out || !out.trim()) throw new Error('curl mengembalikan kosong: ' + url);
  return out;
}

export function getJSONViaCurl(url, opts) { return JSON.parse(getViaCurl(url, opts)); }

// IDX memblokir IP pusat data (GitHub Actions) lebih ketat daripada koneksi
// rumahan: dari lokal 10/10 berhasil, dari runner langsung dibalas halaman
// HTML. Strategi bertingkat di bawah ini mencoba beberapa cara sebelum
// menyerah, karena kalau gagal semua maka kanal IDX berhenti total.
const COOKIE_JAR = '/tmp/idx-cookies.txt';

function curlMentah(url, extra = []) {
  return execFileSync('curl', [
    '-s', '-L', '--compressed', '--max-time', '40',
    '-A', UA,
    '-H', 'Accept: application/json, text/plain, */*',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
    '-H', 'Referer: https://www.idx.co.id/id/perusahaan-tercatat/keterbukaan-informasi/',
    '-c', COOKIE_JAR, '-b', COOKIE_JAR,
    ...extra, url,
  ], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

// Kunjungi dulu halaman biasa supaya dapat cookie sesi, seperti browser.
function panaskanSesi() {
  try {
    curlMentah('https://www.idx.co.id/id/perusahaan-tercatat/keterbukaan-informasi/',
      ['-H', 'Accept: text/html,application/xhtml+xml']);
    return true;
  } catch { return false; }
}

const tidur = (ms) => { const s = Date.now(); while (Date.now() - s < ms) { /* jeda sinkron */ } };

export async function ambilIDX(url, { percobaan = 5 } = {}) {
  let terakhir = '';
  for (let i = 0; i < percobaan; i++) {
    // mulai percobaan kedua, panaskan sesi dulu
    if (i > 0) { panaskanSesi(); await new Promise(r => setTimeout(r, 2000 * i)); }
    try {
      const teks = curlMentah(url);
      if (teks && teks.trimStart().startsWith('{')) {
        const j = JSON.parse(teks);
        // Balasan JSON yang sah belum tentu payload IDX. Cloudflare dan gateway
        // di depannya kadang menjawab dengan JSON kesalahan yang tetap lolos
        // pemeriksaan "diawali kurung kurawal". Dulu balasan seperti itu
        // diteruskan apa adanya, lalu `j.Replies || []` mengubahnya jadi nol
        // laporan, dan pipeline melaporkan "tidak ada aksi korporasi baru yang
        // layak diberitakan" dengan status hijau. Terjadi tiga putaran beruntun
        // pada 12 Agustus 2026: situs diam tiga kali tanpa satu pun tanda bahaya,
        // padahal API-nya sendiri sehat dan punya 215 laporan menunggu.
        // Tidak adanya Replies harus dihitung gagal supaya percobaan berikutnya
        // jalan dan, kalau tetap gagal, errornya terlihat.
        if (Array.isArray(j.Replies)) return j;
        terakhir = 'JSON tanpa daftar Replies';
      } else {
        terakhir = 'dibalas HTML, bukan JSON';
      }
    } catch (e) {
      terakhir = e.message.slice(0, 80);
    }
  }
  throw new Error('IDX menolak setelah ' + percobaan + ' percobaan (' + terakhir + '). ' +
    'Kemungkinan IP runner GitHub diblokir.');
}

// coba beberapa kali, jangan langsung menyerah pada gangguan jaringan sesaat
export async function retry(fn, tries = 3, waitMs = 2000) {
  let last;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); } catch (e) {
      last = e;
      if (i < tries - 1) await new Promise(r => setTimeout(r, waitMs * (i + 1)));
    }
  }
  throw last;
}

export function stripTags(s) {
  return String(s || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#8217;|&rsquo;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}

export function slugify(s) {
  return String(s).toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

// PENTING: kalau file ada tapi gagal dibaca, fungsi ini WAJIB melempar error,
// bukan mengembalikan array kosong. Pernah terjadi: parse gagal diam-diam
// mengembalikan [], lalu seluruh arsip tertimpa data kosong.
export function readData(file, varName) {
  const p = path.join(ROOT, 'assets/js', file);
  if (!fs.existsSync(p)) return [];

  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('['), j = src.lastIndexOf(']');
  if (i === -1 || j === -1) {
    throw new Error(file + ': tidak ditemukan array data. Perbaiki manual sebelum lanjut.');
  }
  const potongan = src.slice(i, j + 1);

  try {
    return JSON.parse(potongan);
  } catch {
    // File lama ditulis gaya literal JavaScript (kunci tanpa kutip, string
    // kutip tunggal). Ini file milik kita sendiri, bukan masukan dari luar.
    try {
      const hasil = new Function('return (' + potongan + ');')();
      if (Array.isArray(hasil)) return hasil;
      throw new Error('bukan array');
    } catch (e) {
      throw new Error(file + ': isi tidak bisa dibaca (' + e.message.slice(0, 60) +
        '). Dihentikan supaya arsip tidak tertimpa data kosong.');
    }
  }
}

export function writeData(file, varName, data, comment) {
  const p = path.join(ROOT, 'assets/js', file);
  const out = (comment ? comment + '\n' : '') +
    'var ' + varName + ' = ' + JSON.stringify(data, null, 1) + ';\n';
  fs.writeFileSync(p, out, 'utf8');
}

// SELALU WIB, apa pun zona waktu mesin yang menjalankan.
//
// Versi lama memakai getDate() dan getMonth() yang mengikuti zona waktu mesin.
// Di komputer rumah itu kebetulan benar karena mesinnya memang WIB, tapi
// pembaruan harian berjalan di GitHub Actions yang memakai UTC. Akibatnya
// setiap artikel yang terbit antara tengah malam dan pukul 07.00 WIB tertulis
// mundur satu hari.
//
// Terlihat 13 Agustus 2026: berita MSCI terbit 06.04 WIB muncul di beranda
// bertanggal "12 Agustus 2026", sehingga situs tampak tidak pernah punya
// berita baru padahal arsipnya bertambah. Bug tanggal yang menyamar jadi bug
// isi, dan itu jenis yang paling lama tidak ketahuan.
export function fmtTanggal(iso) {
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const wib = new Date(new Date(iso).getTime() + 7 * 3600 * 1000);
  return wib.getUTCDate() + ' ' + B[wib.getUTCMonth()] + ' ' + wib.getUTCFullYear();
}

// fmtTanggalPanjang() dihapus 13 Agustus 2026. Tidak dipakai di mana pun, dan
// ia menggeser tanggal sendiri sebelum menyerahkannya ke fmtTanggal. Setelah
// fmtTanggal dibuat selalu WIB, pemanggilan itu akan tergeser dua kali dan
// menghasilkan tanggal yang salah. Dihapus, bukan diperbaiki, karena kode mati
// yang salah diam-diam lebih berbahaya daripada tidak ada sama sekali.
// Pembuat stempel waktu WIB yang dipakai ada di build-pages.mjs (tanggalWIB).

export function idNum(n, dec = 2) {
  return Number(n).toLocaleString('id-ID', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
