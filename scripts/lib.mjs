// Utilitas bersama untuk semua script pipeline The Signal.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const BASE = 'https://the-signal-sandy.vercel.app';
export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

export function log(...a) { console.log('[' + new Date().toISOString().slice(11, 19) + ']', ...a); }

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
      if (teks && teks.trimStart().startsWith('{')) return JSON.parse(teks);
      terakhir = 'dibalas HTML, bukan JSON';
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

export function fmtTanggal(iso) {
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const d = new Date(iso);
  return d.getDate() + ' ' + B[d.getMonth()] + ' ' + d.getFullYear();
}

export function fmtTanggalPanjang(d = new Date()) {
  const H = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const wib = new Date(d.getTime() + (7 * 60 - (-d.getTimezoneOffset())) * 60000);
  const jam = String(wib.getUTCHours ? wib.getHours() : 0).padStart(2, '0');
  const men = String(wib.getMinutes()).padStart(2, '0');
  return H[wib.getDay()] + ', ' + fmtTanggal(wib) + ' &middot; ' + jam + '.' + men + ' WIB';
}

export function idNum(n, dec = 2) {
  return Number(n).toLocaleString('id-ID', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
