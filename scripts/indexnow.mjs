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
//
// KUNCI BISA TERNODA PERMANEN, DAN ITU SUDAH TERJADI. Kunci pertama
// (4cb83897...) dibalas 403 UserForbiddedToAccessSite selamanya, padahal
// berkas kuncinya dilayani 200, isinya persis, tanpa BOM, tanpa newline,
// tanpa redirect, dan robots.txt mengizinkan semua perayap. Diuji 31 Agustus
// 2026: kunci ACAK untuk host yang sama justru diterima 202, jadi host-nya
// sehat dan yang ditolak kunci itu sendiri. Penjelasan yang paling masuk
// akal: IndexNow menyimpan hasil verifikasi, dan ping pertama menembak
// sebelum berkas kuncinya sempat tayang di Vercel, sehingga kunci itu
// tercatat tidak sah dan tidak pernah dinilai ulang.
//
// Kunci yang sudah ternoda TIDAK bisa dipulihkan, cuma bisa diganti. Karena
// itu ada penjaga di bawah: ping tidak akan dikirim sebelum berkas kuncinya
// terbukti dilayani situsnya sendiri. Menahan satu ping jauh lebih murah
// daripada membakar satu kunci.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'the-signal.id';
const KUNCI = '45be2300555d6d1b5aecf7fb35dbf8a4';

const log = (p) => console.log('[' + new Date().toISOString().slice(11, 19) + '] ' + p);

// Yang diperiksa berkas kunci di SITUS, bukan di cakram.
//
// Versi pertama memakai fs.existsSync, dan itu memeriksa hal yang salah:
// yang menentukan sah atau tidak adalah apa yang dilihat IndexNow saat
// mengambilnya lewat HTTP, bukan apa yang ada di pohon kerja runner. Berkas
// bisa sudah ter-commit tapi belum tayang, dan justru celah beberapa detik
// itulah yang diduga membakar kunci pertama.
const alamatKunci = 'https://' + HOST + '/' + KUNCI + '.txt';

// AbortController manual, bukan AbortSignal.timeout.
//
// AbortSignal.timeout meninggalkan timer yang masih hidup, dan memanggil
// process.exit saat timer itu menggantung membuat Node di Windows berhenti
// dengan "Assertion failed: !(handle->flags & UV_HANDLE_CLOSING)" lalu keluar
// dengan kode 127, bukan kode yang kita maksud. Kode keluar yang salah itu
// bukan hal sepele di sini: langkah pemanggilnya membaca kode keluar untuk
// membedakan "ping ditahan" dari "runner-nya yang bermasalah".
async function ambilSingkat(url, ms) {
  const ac = new AbortController();
  const jam = setTimeout(() => ac.abort(), ms);
  try { return await fetch(url, { signal: ac.signal }); }
  finally { clearTimeout(jam); }
}

const batal = (sebab, nasihat) => {
  log('BATAL: ' + sebab);
  log(nasihat);
  process.exitCode = 1;
};

let kunciSah = false;
try {
  const cek = await ambilSingkat(alamatKunci, 15000);
  const isi = cek.ok ? (await cek.text()).trim() : '';
  if (!cek.ok || isi !== KUNCI) {
    batal('berkas kunci belum sah di situs (HTTP ' + cek.status +
      (cek.ok ? ', isi tidak cocok' : '') + ').',
      'Ping SENGAJA tidak dikirim: mengirimnya sekarang akan menodai kunci ini permanen.');
  } else {
    kunciSah = true;
  }
} catch (e) {
  batal('berkas kunci tidak bisa diperiksa (' + String(e.message).slice(0, 90) + ').',
    'Ping SENGAJA tidak dikirim: lebih baik telat satu putaran daripada kunci terbakar.');
}

// Seluruh sisanya dipagari kunciSah. Tanpa pagar ini penjaga di atas cuma
// mencetak peringatan lalu tetap mengirim ping yang membakar kuncinya.
if (kunciSah) {
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
  } else {
    log('ping IndexNow: ' + urlList.length + ' URL (' + urlBaru.length + ' artikel segar)');
    try {
      const res = await ambilSingkat2('https://api.indexnow.org/indexnow', 20000, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: HOST, key: KUNCI, keyLocation: alamatKunci, urlList }),
      });
      // 200 dan 202 sama-sama berarti diterima. 4xx berarti ada yang salah pada
      // kunci atau formatnya, dan itu perlu terlihat.
      if (res.status === 200 || res.status === 202) {
        log('diterima (HTTP ' + res.status + ')');
      } else {
        log('DITOLAK: HTTP ' + res.status + ' ' + (await res.text()).slice(0, 200));
        process.exitCode = 1;
      }
    } catch (e) {
      // Jaringan gagal bukan alasan menjatuhkan pipeline berita: artikelnya sudah
      // terbit, ping bisa diulang putaran berikutnya. Tapi tetap keluar bukan-nol
      // supaya langkahnya merah dan tercatat - langkah pemanggilnya yang memutuskan
      // ini fatal atau tidak.
      log('GAGAL menghubungi api.indexnow.org: ' + String(e.message).slice(0, 120));
      process.exitCode = 1;
    }
  }
}

// Varian yang menerima opsi, dipakai untuk POST. Alasan tidak memakai
// AbortSignal.timeout sama persis dengan ambilSingkat di atas.
async function ambilSingkat2(url, ms, opsi) {
  const ac = new AbortController();
  const jam = setTimeout(() => ac.abort(), ms);
  try { return await fetch(url, { ...opsi, signal: ac.signal }); }
  finally { clearTimeout(jam); }
}
