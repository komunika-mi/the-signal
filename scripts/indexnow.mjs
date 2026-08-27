// Ping IndexNow setiap kali ada halaman baru atau berubah.
//
// KENAPA INI URUSAN AI SEARCH, BUKAN CUMA SEO. Google tidak memakai IndexNow,
// tapi Bing memakainya - dan indeks Bing-lah yang menyokong ChatGPT Search
// dan Microsoft Copilot. Tanpa ping ini, artikel baru menunggu giliran
// perayapan Bing untuk bisa muncul di mesin jawab; dengan ping, ia terlihat
// dalam hitungan menit. Untuk situs berita yang menjual kesegaran, selisih
// itu nyata. Yandex, Seznam, dan Naver ikut menerima ping yang sama.
//
// Sumber URL-nya news-sitemap.xml, bukan tebakan: berkas itu memang berisi
// artikel 48 jam terakhir dan dirawat ketat (hanya yang segar, wajib berzona
// waktu). Ditambah beranda dan halaman arsip karena keduanya ikut berubah
// setiap ada artikel baru.
//
// Kuncinya PUBLIK by design - protokol IndexNow memverifikasi kepemilikan
// lewat berkas kunci yang dihosting di domain sendiri, bukan lewat rahasia.
// Karena itu ia boleh di-commit, dan TIDAK boleh diganti sembarangan: ganti
// kunci = ganti berkas di root pada commit yang sama, keduanya serentak.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'the-signal.id';
const KUNCI = '4cb8389725e64ce86501f55752108203';

const log = (p) => console.log('[' + new Date().toISOString().slice(11, 19) + '] ' + p);

// Berkas kunci harus benar-benar ada di root sebelum ping pertama; kalau
// hilang, seluruh ping ditolak diam-diam oleh penerimanya.
if (!fs.existsSync(path.join(ROOT, KUNCI + '.txt'))) {
  log('GAGAL: berkas kunci ' + KUNCI + '.txt tidak ada di root.');
  process.exit(1);
}

const sitemapBerita = path.join(ROOT, 'news-sitemap.xml');
const urlBaru = fs.existsSync(sitemapBerita)
  ? [...fs.readFileSync(sitemapBerita, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
  : [];

const urlList = [...new Set([
  'https://' + HOST + '/',
  'https://' + HOST + '/berita.html',
  'https://' + HOST + '/signal-harian.html',
  ...urlBaru,
])].slice(0, 500);   // batas protokol 10.000; 500 lebih dari cukup

if (urlList.length <= 3) {
  log('tidak ada artikel segar di news-sitemap; ping dilewati.');
  process.exit(0);
}

log('ping IndexNow: ' + urlList.length + ' URL (' + urlBaru.length + ' artikel segar)');

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KUNCI,
      keyLocation: 'https://' + HOST + '/' + KUNCI + '.txt',
      urlList,
    }),
    signal: AbortSignal.timeout(20000),
  });
  // 200 dan 202 sama-sama berarti diterima. 4xx berarti ada yang salah pada
  // kunci atau formatnya, dan itu perlu terlihat.
  if (res.status === 200 || res.status === 202) {
    log('diterima (HTTP ' + res.status + ')');
  } else {
    log('DITOLAK: HTTP ' + res.status + ' ' + (await res.text()).slice(0, 200));
    process.exit(1);
  }
} catch (e) {
  // Jaringan gagal bukan alasan menjatuhkan pipeline berita: artikelnya sudah
  // terbit, ping bisa diulang putaran berikutnya. Tapi tetap keluar bukan-nol
  // supaya langkahnya merah dan tercatat - langkah pemanggilnya yang memutuskan
  // ini fatal atau tidak.
  log('GAGAL menghubungi api.indexnow.org: ' + String(e.message).slice(0, 120));
  process.exit(1);
}
