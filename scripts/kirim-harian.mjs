// Kirim Signal Harian ke pelanggan lewat API Buttondown.
//
// Kenapa lewat API dan bukan fitur RSS-to-email bawaan Buttondown: fitur itu
// tidak termasuk paket gratis, harus naik ke Basic 9 dolar sebulan. API-nya
// gratis, jadi pengiriman otomatis tetap bisa jalan tanpa biaya. Konsekuensinya
// pencegahan kirim ganda jadi tanggung jawab kode ini, bukan Buttondown.
//
// KIRIM GANDA ADALAH KEGAGALAN TERBURUK DI SINI. Email tidak bisa ditarik
// kembali, dan pelanggan yang menerima dua email yang sama untuk hari yang
// sama akan berhenti berlangganan. Karena itu ada dua lapis penjaga:
//   1. sebelum mengirim, seluruh email yang pernah dibuat diperiksa; kalau ada
//      yang metadata.edisi-nya sama dengan tanggal edisi ini, proses berhenti
//   2. subjeknya juga dicocokkan, sebagai jaring kalau metadata hilang
// Keduanya sengaja longgar ke arah TIDAK MENGIRIM. Lebih baik satu edisi
// terlewat daripada satu pelanggan menerima dua kali.
//
// Pemakaian:
//   node scripts/kirim-harian.mjs           kirim sungguhan
//   node scripts/kirim-harian.mjs --draft   simpan sebagai draft, tidak terkirim
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log, BASE } from './lib.mjs';

const API = 'https://api.buttondown.com/v1';
const KUNCI = (process.env.BUTTONDOWN_API_KEY || '').trim();
const DRAFT = process.argv.includes('--draft');

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function bd(jalur, opsi = {}) {
  const r = await fetch(API + jalur, {
    ...opsi,
    headers: {
      'Authorization': 'Token ' + KUNCI,
      'Content-Type': 'application/json',
      ...(opsi.headers || {}),
    },
  });
  const teks = await r.text();
  if (!r.ok) throw new Error('Buttondown ' + r.status + ': ' + teks.slice(0, 200));
  return teks ? JSON.parse(teks) : null;
}

function muatHarian() {
  const p = path.join(ROOT, 'assets/js/harian.js');
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const i = s.indexOf('{'), j = s.lastIndexOf('}');
  try { return JSON.parse(s.slice(i, j + 1)); } catch { return null; }
}

function badanEmail(h) {
  const b = [];
  if (h.ringkas) b.push('<p><strong>' + esc(h.ringkas) + '</strong></p>');
  (h.benang || []).forEach(x => {
    if (x.judul) b.push('<h2>' + esc(x.judul) + '</h2>');
    if (x.isi) b.push('<p>' + esc(x.isi) + '</p>');
  });
  if (h.penutup) b.push('<p>' + esc(h.penutup) + '</p>');
  b.push('<hr>');
  b.push('<p><a href="' + BASE + '/signal-harian.html">Baca di situs</a></p>');
  b.push('<p style="font-size:13px;color:#6b6858">Signal Harian dirangkai redaksi ' +
    'The Signal dari berita ekonomi hari itu, bersumber dari tvOneNews, keterbukaan ' +
    'informasi IDX, dan siaran pers lembaga resmi. Tiap artikel di situs menyertakan ' +
    'tautan ke dokumen aslinya.</p>');
  return b.join('\n');
}

async function main() {
  if (!KUNCI) {
    log('BUTTONDOWN_API_KEY belum diset. Tidak ada yang dikirim.');
    process.exit(1);
  }

  const h = muatHarian();
  if (!h || !h.judul || !h.tanggal) {
    log('harian.js belum ada atau tidak lengkap. Tidak ada yang dikirim.');
    process.exit(1);
  }

  const subjek = 'Signal Harian · ' + (h.tanggalLabel || h.tanggal);

  // Lapis penjaga. Daftar email diambil utuh, bukan cuma halaman pertama,
  // supaya edisi lama tetap terdeteksi setelah arsip email menumpuk.
  let sudah = null, diperiksa = 0;
  let url = '/emails';
  while (url) {
    const d = await bd(url);
    for (const e of (d.results || [])) {
      diperiksa++;
      const tandaMeta = e.metadata && e.metadata.edisi === h.tanggal;
      const tandaSubjek = e.subject === subjek;
      if (tandaMeta || tandaSubjek) { sudah = e; break; }
    }
    if (sudah || !d.next) break;
    url = d.next.replace(API, '');
  }

  if (sudah) {
    log('Edisi ' + h.tanggal + ' SUDAH pernah dibuat (status: ' + sudah.status + ').');
    log('Tidak mengirim ulang. Ini penjaga anti-kirim-ganda, bukan error.');
    return;
  }

  log('memeriksa ' + diperiksa + ' email lama, edisi ini belum pernah dikirim');

  const hasil = await bd('/emails', {
    method: 'POST',
    body: JSON.stringify({
      subject: subjek,
      body: badanEmail(h),
      status: DRAFT ? 'draft' : 'about_to_send',
      metadata: { edisi: h.tanggal },
    }),
  });

  log((DRAFT ? 'DRAFT dibuat' : 'DIKIRIM') + ': ' + subjek);
  log('  id     : ' + hasil.id);
  log('  status : ' + hasil.status);
  if (hasil.absolute_url) log('  arsip  : ' + hasil.absolute_url);
}

main().catch(e => { console.error(String(e.message || e)); process.exit(1); });
