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
//   node scripts/kirim-harian.mjs             kirim Signal Harian
//   node scripts/kirim-harian.mjs --pekanan   kirim Signal Pekanan (edisi Minggu)
//   node scripts/kirim-harian.mjs --draft     simpan sebagai draft, tidak terkirim
//
// SATU SKRIP, DUA PRODUK. Edisi pekanan memakai jalur yang sama persis,
// termasuk kedua lapis penjaga anti-kirim-ganda, karena risikonya juga sama
// persis: email tidak bisa ditarik kembali. Yang berbeda cuma berkas sumber,
// subjek, dan KUNCI EDISI. Kunci itu wajib beda awalan, sebab edisi harian
// dan pekanan bisa jatuh pada tanggal yang sama; kalau kuncinya kembar,
// penjaga akan mengira yang satu sudah terkirim lalu membatalkannya diam-diam.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log, BASE, readObjek } from './lib.mjs';

const API = 'https://api.buttondown.com/v1';
const KUNCI = (process.env.BUTTONDOWN_API_KEY || '').trim();
const DRAFT = process.argv.includes('--draft');
const PEKANAN = process.argv.includes('--pekanan');

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
      // WAJIB, dan tanpanya Signal+ tidak pernah mengirim apa pun.
      //
      // Buttondown menolak pembuatan email berstatus 'about_to_send' tanpa
      // header ini, dengan HTTP 400 dan pesan:
      //   {"code":"sending_requires_confirmation","detail":"Creating an email
      //    with status 'about_to_send' requires the X-Buttondown-Live-
      //    Dangerously header. This is only required once per API key."}
      //
      // Pengamannya masuk akal dari sisi Buttondown: mencegah orang tidak
      // sengaja menyiram seluruh daftar pelanggan lewat panggilan percobaan.
      // Tapi akibat tidak memasangnya di sini fatal sekaligus sunyi.
      // Satu-satunya penjalanan harian.yml yang pernah ada, 13 Agustus 2026,
      // gagal persis di titik ini. Dua edisi Signal Harian sudah ditulis dan
      // tayang di situs, dan NOL email pernah sampai ke inbox siapa pun,
      // sementara beranda menjanjikan kiriman tiap sore hari kerja.
      //
      // Ditemukan lewat audit 14 Agustus 2026, bukan oleh sistemnya sendiri:
      // feed publik https://buttondown.com/the-signal/rss kosong tanpa satu
      // pun item, dan halaman arsipnya cuma bertuliskan "empty".
      'X-Buttondown-Live-Dangerously': 'true',
      ...(opsi.headers || {}),
    },
  });
  const teks = await r.text();
  if (!r.ok) throw new Error('Buttondown ' + r.status + ': ' + teks.slice(0, 200));
  return teks ? JSON.parse(teks) : null;
}

function muatHarian() {
  const p = path.join(ROOT, PEKANAN ? 'assets/js/pekanan.js' : 'assets/js/harian.js');
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const i = s.indexOf('{'), j = s.lastIndexOf('}');
  try { return JSON.parse(s.slice(i, j + 1)); } catch { return null; }
}

// Badan email edisi pekanan. Bagian "yang menanti pekan depan" sengaja ikut,
// karena justru itu yang dibaca orang Minggu sore sambil menyiapkan pekan
// kerja; tanpa itu, edisi ini cuma jadi arsip yang sudah lewat.
function badanPekanan(p) {
  const b = [];
  if (p.ringkas) b.push('<p><strong>' + esc(p.ringkas) + '</strong></p>');
  (p.pola || []).forEach(x => {
    if (x.judul) b.push('<h2>' + esc(x.judul) + '</h2>');
    if (x.isi) b.push('<p>' + esc(x.isi) + '</p>');
  });
  if ((p.menanti || []).length) {
    b.push('<h2>Yang menanti pekan depan</h2>');
    b.push('<ul>' + p.menanti.map(m =>
      '<li><strong>' + esc(m.tanggal) + '</strong> &middot; ' + esc(m.apa) +
      '<br><span style="color:#6b6858">' + esc(m.kenapa) + '</span></li>').join('') + '</ul>');
  }
  if (p.penutup) b.push('<p>' + esc(p.penutup) + '</p>');
  const angka = blokAngka();
  if (angka) {
    b.push('<hr>');
    b.push('<h2>Angka pembanding</h2>');
    b.push('<p style="font-size:13px;color:#6b6858">Dipakai untuk menguji sendiri ' +
      'pembacaan arah di atas.</p>');
    b.push(angka);
  }
  b.push('<hr>');
  b.push('<p><a href="' + BASE + '/signal-pekanan.html">Baca edisi ini di situs</a> &middot; ' +
    '<a href="' + BASE + '/agenda.html">lihat seluruh agenda</a></p>');
  b.push('<p style="font-size:13px;color:#6b6858">Signal Pekanan terbit tiap Minggu, ' +
    'merangkai seluruh edisi harian dan berita sepekan jadi satu pembacaan arah. ' +
    'Bukan rekomendasi investasi.</p>');
  return b.join('\n');
}

// Tabel indikator untuk edisi email. Arah dihitung dari deretnya sendiri,
// bukan dinilai model, supaya tidak mungkin meleset dari datanya.
function blokAngka() {
  try {
    const B = readObjek('bps.js');
    const ind = (B && B.indikator) || {};
    const pilih = ['inflasi', 'pdb', 'neraca', 'pengangguran', 'ekspor', 'impor'];
    const baris = [];
    for (const kode of pilih) {
      const x = ind[kode];
      if (!x || !x.titik || !x.titik.length) continue;
      const t = x.titik, akhir = t[t.length - 1], enam = t.slice(-6);
      let arah = 'mendatar';
      if (enam.length >= 3) {
        const naik = enam.slice(1).filter((v, i) => v.nilai > enam[i].nilai).length;
        const turun = enam.slice(1).filter((v, i) => v.nilai < enam[i].nilai).length;
        arah = naik > turun ? 'cenderung naik' : turun > naik ? 'cenderung turun' : 'mendatar';
      }
      baris.push('<tr><td style="padding:4px 10px 4px 0">' + esc(x.nama) + '</td>' +
        '<td style="padding:4px 10px 4px 0"><strong>' + esc(String(akhir.nilai)) + ' ' +
        esc(x.satuan || '') + '</strong></td>' +
        '<td style="padding:4px 10px 4px 0;color:#6b6858">' + esc(akhir.periode + ' ' + akhir.tahun) + '</td>' +
        '<td style="padding:4px 0;color:#6b6858">' + arah + '</td></tr>');
    }
    if (!baris.length) return '';
    return '<table style="border-collapse:collapse;font-size:14px">' + baris.join('') + '</table>';
  } catch { return ''; }
}

function badanEmail(h) {
  const b = [];
  if (h.ringkas) b.push('<p><strong>' + esc(h.ringkas) + '</strong></p>');
  (h.benang || []).forEach(x => {
    if (x.judul) b.push('<h2>' + esc(x.judul) + '</h2>');
    if (x.isi) b.push('<p>' + esc(x.isi) + '</p>');
  });
  if (h.penutup) b.push('<p>' + esc(h.penutup) + '</p>');

  // ANGKA RESMI, hanya ada di email.
  //
  // Audit 14 Agustus 2026: isi email sama kata per kata dengan halaman gratis
  // dan terbit pada saat yang sama, jadi berlangganan tidak memberi keuntungan
  // apa pun. Orang tidak membayar, bahkan tidak menyerahkan alamat emailnya,
  // untuk sesuatu yang bisa dibuka tanpa mendaftar.
  //
  // Blok ini yang membedakannya, dan dipilih karena paling sejalan dengan
  // alasan media ini dibuat: bukan tambahan berita, melainkan ANGKA PEMBANDING
  // untuk menguji sendiri pembacaan arah di atasnya. Seluruhnya dihitung dari
  // deret BPS yang sudah ada, tidak ada yang dikarang.
  const angka = blokAngka();
  if (angka) {
    b.push('<hr>');
    b.push('<h2>Angka pembanding</h2>');
    b.push('<p style="font-size:13px;color:#6b6858">Bagian ini hanya ada di ' +
      'edisi email. Dipakai untuk menguji sendiri pembacaan arah di atas.</p>');
    b.push(angka);
  }

  b.push('<hr>');
  // Tautan menunjuk EDISI INI, bukan halaman terbaru. Pembaca yang membuka
  // email lama seminggu kemudian tidak boleh mendarat di edisi lain.
  b.push('<p><a href="' + BASE + '/signal-harian.html?edisi=' + esc(h.tanggal) +
    '">Baca edisi ini di situs</a></p>');
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
    log((PEKANAN ? 'pekanan.js' : 'harian.js') + ' belum ada atau tidak lengkap. Tidak ada yang dikirim.');
    process.exit(1);
  }

  const subjek = PEKANAN
    ? 'Signal Pekanan · ' + (h.rentangLabel || h.tanggal)
    : 'Signal Harian · ' + (h.tanggalLabel || h.tanggal);
  // Awalan berbeda supaya edisi harian dan pekanan bertanggal sama tidak
  // saling menutup lewat penjaga anti-ganda.
  const kunciEdisi = (PEKANAN ? 'pekan-' : '') + h.tanggal;

  // Lapis penjaga. Daftar email diambil utuh, bukan cuma halaman pertama,
  // supaya edisi lama tetap terdeteksi setelah arsip email menumpuk.
  let sudah = null, diperiksa = 0;
  let url = '/emails';
  while (url) {
    const d = await bd(url);
    for (const e of (d.results || [])) {
      diperiksa++;
      const tandaMeta = e.metadata && e.metadata.edisi === kunciEdisi;
      const tandaSubjek = e.subject === subjek;
      if (tandaMeta || tandaSubjek) { sudah = e; break; }
    }
    if (sudah || !d.next) break;
    url = d.next.replace(API, '');
  }

  if (sudah) {
    // DRAFT bukan "sudah terkirim". Penjaga versi lama memperlakukan keduanya
    // sama, sehingga edisi yang pernah dibuat sebagai draft, misalnya lewat
    // uji coba --draft, TERKUNCI selamanya: tiap percobaan kirim berikutnya
    // berhenti di sini dan pelanggan tidak pernah menerima apa pun, tanpa
    // satu pun pesan error. Persis jenis kegagalan sunyi yang berulang kali
    // menggigit proyek ini.
    //
    // Sekarang dibedakan. Draft berisi konten yang sama tinggal DIKIRIM, bukan
    // dibuat ulang, jadi jaminan anti-gandanya justru lebih kuat: satu edisi
    // hanya pernah punya satu objek email di Buttondown.
    if (sudah.status === 'draft' && !DRAFT) {
      log('Edisi ' + kunciEdisi + ' sudah ada sebagai DRAFT. Mengirim draft itu, bukan membuat baru.');
      const kirim = await bd('/emails/' + sudah.id, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'about_to_send' }),
      });
      log('TERKIRIM dari draft: ' + kirim.subject + ' (status: ' + kirim.status + ')');
      return;
    }
    log('Edisi ' + kunciEdisi + ' SUDAH pernah dibuat (status: ' + sudah.status + ').');
    log('Tidak mengirim ulang. Ini penjaga anti-kirim-ganda, bukan error.');
    return;
  }

  log('memeriksa ' + diperiksa + ' email lama, edisi ini belum pernah dikirim');

  const hasil = await bd('/emails', {
    method: 'POST',
    body: JSON.stringify({
      subject: subjek,
      body: PEKANAN ? badanPekanan(h) : badanEmail(h),
      status: DRAFT ? 'draft' : 'about_to_send',
      metadata: { edisi: kunciEdisi },
    }),
  });

  log((DRAFT ? 'DRAFT dibuat' : 'DIKIRIM') + ': ' + subjek);
  log('  id     : ' + hasil.id);
  log('  status : ' + hasil.status);
  if (hasil.absolute_url) log('  arsip  : ' + hasil.absolute_url);
}

main().catch(e => { console.error(String(e.message || e)); process.exit(1); });
