// Utilitas bersama untuk semua script pipeline The Signal.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
