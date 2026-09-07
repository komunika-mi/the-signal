// Menguji kanal lembaga yang GAGAL di runner tapi BERHASIL dari koneksi rumah.
//
// Kenapa ada berkas ini. Log putaran daily.yml 7 September 2026 mencatat tujuh
// kanal tumbang, sementara menjalankan fetch-gov.mjs dari mesin pemilik situs
// pada jam yang sama mengembalikan kandidat segar untuk ketujuhnya:
//
//   Kemenko Perekonomian   fetch failed
//   BKPM                   fetch failed
//   Bulog                  fetch failed
//   BP BUMN                HTTP 403
//   Bappenas               HTTP 403
//   KPPU                   HTTP 403
//   PU                     HTTP 403
//
// Perbedaannya ada di JARINGAN, bukan di kode, jadi menebak perbaikannya dari
// mesin lokal tidak ada gunanya: di sini semuanya sudah 200. Yang dibutuhkan
// pengukuran DI TEMPAT ia gagal.
//
// get() di lib.mjs sudah punya cadangan curl, tapi cuma dipicu kalau
// fetch mengembalikan status 403. Kalau fetch melempar (fetch failed), tidak
// ada status untuk diperiksa dan cadangannya tidak pernah jalan. Itu salah
// satu hipotesis yang diuji di sini.
//
// Dijalankan lewat workflow_dispatch probe-gov.yml. Tidak mengubah apa pun.
import { execFileSync } from 'node:child_process';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const SASARAN = [
  ['Kemenko', 'https://ekon.go.id/publikasi/1/siaran-pers'],
  ['BKPM', 'https://bkpm.go.id/id/info/siaran-pers'],
  ['Bulog', 'https://www.bulog.co.id/pojok-media/siaran-pers/'],
  ['BP BUMN', 'https://bumn.go.id/publikasi/berita/rilis'],
  ['Bappenas', 'https://www.bappenas.go.id/'],
  ['KPPU', 'https://kppu.go.id/berita'],
  ['PU', 'https://pu.go.id/berita/kanal'],
  // Pembanding: kanal yang memang JALAN di runner. Kalau yang ini pun gagal,
  // berarti yang rusak probenya, bukan sasarannya.
  ['KSEI (pembanding)', 'https://www.ksei.co.id/id/publikasi/siaran-pers'],
];

function asal(u) { try { const x = new URL(u); return x.protocol + '//' + x.host; } catch { return ''; } }

function curl(url, opsi, detik = 25) {
  try {
    const keluar = execFileSync('curl', [
      '--compressed', '--max-time', String(detik), '-A', UA,
      ...opsi, '-w', '\n%{http_code}', url,
    ], { encoding: 'utf8', maxBuffer: 32e6, stdio: ['ignore', 'pipe', 'pipe'] });
    const p = keluar.lastIndexOf('\n');
    return { status: Number(keluar.slice(p + 1).trim()) || 0, n: p < 0 ? 0 : p };
  } catch (e) {
    return { status: 'x', n: 0, pesan: String(e.stderr || e.message).trim().slice(0, 60) };
  }
}

const STRATEGI = [
  ['fetch Node', async (u) => {
    const c = new AbortController(); const t = setTimeout(() => c.abort(), 25000);
    try {
      const r = await fetch(u, { signal: c.signal, headers: { 'User-Agent': UA } });
      const b = await r.text();
      return { status: r.status, n: b.length };
    } catch (e) { return { status: 'x', n: 0, pesan: String(e.message).slice(0, 60) }; }
    finally { clearTimeout(t); }
  }],
  ['curl sekarang', (u) => curl(u, ['-sL',
    '-H', 'Accept: text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8'])],
  ['curl --ipv4', (u) => curl(u, ['-sL', '--ipv4',
    '-H', 'Accept: text/html,application/xhtml+xml,*/*;q=0.8',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8'])],
  ['curl http1.1', (u) => curl(u, ['-sL', '--http1.1',
    '-H', 'Accept: text/html,application/xhtml+xml,*/*;q=0.8',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8'])],
  ['curl peramban penuh', (u) => curl(u, ['-sL', '--ipv4', '--http1.1',
    '-H', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
    '-H', 'Cache-Control: no-cache',
    '-H', 'Sec-Fetch-Dest: document', '-H', 'Sec-Fetch-Mode: navigate',
    '-H', 'Sec-Fetch-Site: none', '-H', 'Sec-Fetch-User: ?1',
    '-H', 'Upgrade-Insecure-Requests: 1',
    '-H', 'Referer: ' + 'https://www.google.com/'])],
  ['curl -k (abai TLS)', (u) => curl(u, ['-sLk',
    '-H', 'Accept: text/html,application/xhtml+xml,*/*;q=0.8'])],
];

console.log('Probe kanal lembaga dari runner. status "x" = koneksi gagal sebelum ada status.\n');
const menang = [];
for (const [nama, url] of SASARAN) {
  console.log('=== ' + nama + '  ' + url);
  for (const [label, fn] of STRATEGI) {
    const r = await fn(url);
    const ok = typeof r.status === 'number' && r.status >= 200 && r.status < 300 && r.n > 2000;
    console.log('    ' + String(label).padEnd(22) +
      String(r.status).padStart(4) + '  ' + String(r.n).padStart(8) + ' byte' +
      (ok ? '   <== LOLOS' : '') + (r.pesan ? '   ' + r.pesan : ''));
    if (ok) { menang.push([nama, label]); break; }   // cukup satu yang lolos
  }
  console.log();
}

console.log('=== RINGKASAN ===');
for (const [nama] of SASARAN) {
  const m = menang.find(x => x[0] === nama);
  console.log('  ' + nama.padEnd(20) + (m ? 'LOLOS lewat ' + m[1] : 'TIDAK ADA yang lolos'));
}
console.log('\nlolos: ' + menang.length + ' dari ' + SASARAN.length);
