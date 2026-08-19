// Mendorong terbitan The Signal ke kanal Telegram publik.
//
// Kenapa Telegram: corong distribusi kedua di samping email. Gratis lewat Bot
// API, tanpa batas pelanggan, dan pesan kanal bisa diteruskan orang ke grup
// bisnisnya sendiri, persis cara berita ekonomi menyebar di sini.
//
// Dua mode:
//   node scripts/kirim-telegram.mjs --harian       edisi Signal Harian terbaru
//   node scripts/kirim-telegram.mjs --artikel-bps  artikel rilis BPS terbaru
//
// Konfigurasi lewat env, dan TANPA env skrip keluar 0 sambil memberi tahu:
// kanal Telegram itu pelengkap, ketiadaannya tidak boleh menggagalkan
// penerbitan edisi.
//   TELEGRAM_BOT_TOKEN  dari @BotFather
//   TELEGRAM_CHANNEL    @namakanal atau id numerik -100...
//
// ANTI-KIRIM-GANDA lewat scripts/telegram-kirim.json yang ikut di-commit.
// Pesan kanal tidak bisa ditarik diam-diam seperti halaman web; sekali dobel,
// semua pelanggan kanal melihatnya. Karena state-nya berkas di repo, workflow
// WAJIB meng-commit perubahannya setelah skrip ini jalan, kalau tidak putaran
// berikutnya mengirim ulang. Kedua workflow pemanggil sudah melakukannya.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log, BASE, fmtTanggalHari } from './lib.mjs';

const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
const KANAL = (process.env.TELEGRAM_CHANNEL || '').trim();
const BERKAS_STATE = path.join(ROOT, 'scripts/telegram-kirim.json');

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function muatState() {
  try { return JSON.parse(fs.readFileSync(BERKAS_STATE, 'utf8')); }
  catch { return { harian: [], artikel: [] }; }
}
function simpanState(st) {
  // Dipangkas supaya berkasnya tidak tumbuh selamanya; edisi berumur lebih
  // dari daftar ini sudah pasti bukan kandidat kirim ulang.
  st.harian = (st.harian || []).slice(-60);
  st.pekanan = (st.pekanan || []).slice(-30);
  st.artikel = (st.artikel || []).slice(-120);
  fs.writeFileSync(BERKAS_STATE, JSON.stringify(st, null, 1) + '\n', 'utf8');
}

function muatObjek(nama) {
  const p = path.join(ROOT, 'assets/js', nama);
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  const c = s.indexOf('['), d = s.lastIndexOf(']');
  try {
    if (c !== -1 && (a === -1 || c < a)) return JSON.parse(s.slice(c, d + 1));
    return JSON.parse(s.slice(a, b + 1));
  } catch { return null; }
}

async function kirim(teks) {
  const r = await fetch('https://api.telegram.org/bot' + TOKEN + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: KANAL,
      text: teks,
      parse_mode: 'HTML',
      link_preview_options: { url: BASE, prefer_small_media: true },
    }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.ok) {
    throw new Error('Telegram ' + r.status + ': ' + JSON.stringify(j).slice(0, 200));
  }
  return j;
}

// Halaman harus SUDAH tayang sebelum tautannya disiarkan. Pesan kanal tidak
// bisa menunggu deploy; kalau halamannya belum ada, kirimnya ditunda ke
// putaran berikutnya, bukan dipaksakan.
async function sudahTayang(url) {
  try {
    const r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return r.ok;
  } catch { return false; }
}

async function modeHarian() {
  const h = muatObjek('harian.js');
  if (!h || !h.tanggal || !h.judul) { log('harian.js belum ada, tidak ada yang dikirim.'); return; }
  const st = muatState();
  if ((st.harian || []).includes(h.tanggal)) {
    log('Edisi ' + h.tanggal + ' sudah pernah ke Telegram. Penjaga anti-ganda, bukan error.');
    return;
  }
  const url = BASE + '/signal-harian.html?edisi=' + h.tanggal;
  // Yang diperiksa EDISI INI ADA DI FEED, bukan sekadar halamannya membalas
  // 200. Halaman signal-harian.html statis dan selalu 200 sejak deploy
  // pertama, jadi cek 200 adalah gerbang yang selalu terbuka (pelajaran yang
  // sama dengan gerbang feed di harian.yml). Kalau dipanggil sebelum deploy
  // edisi baru selesai, pembuka tautan akan disuguhi edisi lama.
  try {
    const feed = await (await fetch(BASE + '/feed.xml')).text();
    if (!feed.includes('the-signal-harian-' + h.tanggal)) {
      log('Edisi ' + h.tanggal + ' belum muncul di feed situs, kiriman ditunda.');
      return;
    }
  } catch {
    log('feed.xml tidak terbaca, kiriman ditunda supaya tidak menautkan edisi yang belum tayang.');
    return;
  }
  const benang = (h.benang || []).slice(0, 3)
    .map((b, i) => (i + 1) + '. ' + esc(b.judul)).join('\n');
  const teks =
    '<b>Signal Harian · ' + esc(h.tanggalLabel || h.tanggal) + '</b>\n' +
    '<b>' + esc(h.judul) + '</b>\n\n' +
    esc(h.ringkas || '') + '\n\n' + benang + '\n\n' +
    '<a href="' + url + '">Baca pembacaan lengkapnya</a>';
  await kirim(teks);
  st.harian = [...(st.harian || []), h.tanggal];
  simpanState(st);
  log('TERKIRIM ke Telegram: Signal Harian ' + h.tanggal);
}

async function modeArtikelBps() {
  const A = muatObjek('articles.js') || [];
  const st = muatState();
  const batas = Date.now() - 3 * 86400000;
  const kandidat = A.filter(a =>
    a.sourceLabel === 'Badan Pusat Statistik' &&
    new Date(a.isoDate || 0).getTime() > batas &&
    !(st.artikel || []).includes(a.slug)).slice(0, 3);
  if (!kandidat.length) { log('Tidak ada artikel rilis BPS baru untuk Telegram.'); return; }
  for (const a of kandidat) {
    const url = BASE + '/berita/' + a.slug + '.html';
    if (!await sudahTayang(url)) { log('Belum tayang, ditunda: ' + a.slug); continue; }
    const teks =
      '<b>Rilis BPS · ' + esc(a.date) + '</b>\n' +
      '<b>' + esc(String(a.title).replace(/[\[\]]/g, '')) + '</b>\n\n' +
      esc(a.deck || '') +
      (a.takeaway ? '\n\n<i>Arahnya ke mana:</i> ' + esc(String(a.takeaway).slice(0, 350)) : '') +
      '\n\n<a href="' + url + '">Baca selengkapnya</a>';
    await kirim(teks);
    st.artikel = [...(st.artikel || []), a.slug];
    simpanState(st);
    log('TERKIRIM ke Telegram: ' + a.slug);
  }
}

// Edisi pekanan ke kanal. State anti-gandanya memakai daftar terpisah
// (st.pekanan), bukan menumpang st.harian, karena edisi harian dan pekanan
// bisa jatuh pada tanggal yang sama dan akan saling menutup.
async function modePekanan() {
  const p = muatObjek('pekanan.js');
  if (!p || !p.tanggal || !p.judul) { log('pekanan.js belum ada, tidak ada yang dikirim.'); return; }
  const st = muatState();
  if ((st.pekanan || []).includes(p.tanggal)) {
    log('Edisi pekanan ' + p.tanggal + ' sudah pernah ke Telegram. Penjaga anti-ganda, bukan error.');
    return;
  }
  // Gerbangnya EDISI INI ADA DI FEED, bukan halamannya membalas 200. Sama
  // persis dengan pelajaran di modeHarian: signal-mingguan.html statis dan
  // akan selalu 200 sekali ter-deploy, jadi cek 200 adalah gerbang yang tidak
  // pernah tertutup dan pembuka tautan bisa disuguhi edisi pekan lalu.
  try {
    const feed = await (await fetch(BASE + '/feed.xml')).text();
    if (!feed.includes('the-signal-pekanan-' + p.tanggal)) {
      log('Edisi pekanan ' + p.tanggal + ' belum muncul di feed situs, kiriman ditunda.');
      return;
    }
  } catch {
    log('feed.xml tidak terbaca, kiriman ditunda supaya tidak menautkan edisi yang belum tayang.');
    return;
  }
  const pola = (p.pola || []).map((x, i) => (i + 1) + '. ' + esc(x.judul)).join('\n');
  const menanti = (p.menanti || []).slice(0, 4)
    .map(m => '• <b>' + esc(fmtTanggalHari(m.tanggal)) + '</b>\n  ' + esc(m.apa)).join('\n');
  const teks =
    '<b>Signal Mingguan · ' + esc(p.rentangLabel || p.tanggal) + '</b>\n' +
    '<b>' + esc(p.judul) + '</b>\n\n' +
    esc(p.ringkas || '') + '\n\n' + pola +
    (menanti ? '\n\n<b>Yang menanti pekan depan</b>\n' + menanti : '') +
    '\n\n<a href="' + BASE + '/signal-mingguan.html">Baca pembacaan lengkapnya</a>';
  await kirim(teks);
  st.pekanan = [...(st.pekanan || []), p.tanggal];
  simpanState(st);
  log('TERKIRIM ke Telegram: Signal Mingguan ' + p.tanggal);
}

async function main() {
  if (!TOKEN || !KANAL) {
    log('TELEGRAM_BOT_TOKEN / TELEGRAM_CHANNEL belum diset. Kanal Telegram belum aktif, dilewati.');
    return;
  }
  if (process.argv.includes('--harian')) await modeHarian();
  else if (process.argv.includes('--pekanan')) await modePekanan();
  else if (process.argv.includes('--artikel-bps')) await modeArtikelBps();
  else { console.error('Pakai --harian, --pekanan, atau --artikel-bps'); process.exit(1); }
}

main().catch(e => { console.error(String(e.message || e)); process.exit(1); });
