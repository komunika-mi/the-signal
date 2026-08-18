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
import { ROOT, log, BASE, readObjek, fmtTanggalHari, arahDeret } from './lib.mjs';
// Dipinjam dari mesin grafik situs supaya angka di email berbunyi sama persis
// dengan angka di halaman: koma desimal, pemisah ribuan, satuan disederhanakan.
import { nilaiRingkas } from './bps-grafik.mjs';

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

// Gaya judul seksi ditulis inline. Stylesheet Buttondown mengatur h1 dan h3
// tapi TIDAK h2, jadi ukurannya jatuh ke bawaan tiap klien email dan berbeda
// antara Gmail, Outlook, dan Apple Mail.
const h2 = (teks) => '<h2 style="margin:28px 0 8px!important;font-size:20px;' +
  'line-height:26px;font-weight:700;font-family:Arial,Helvetica,sans-serif">' +
  esc(teks) + '</h2>';

// Rentang pendek untuk baris subjek: "11-17 Agu". Bentuk panjangnya menghabiskan
// 28 karakter dan mendorong isi edisi keluar dari batas potong ponsel.
function rentangPendek(p) {
  const BLN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const r = p.rentang || {};
  const a = new Date((r.mulai || '') + 'T00:00:00Z');
  const b = new Date((r.selesai || p.tanggal || '') + 'T00:00:00Z');
  if (isNaN(a.getTime()) || isNaN(b.getTime())) return p.rentangLabel || p.tanggal || '';
  const seBulan = a.getUTCMonth() === b.getUTCMonth();
  return a.getUTCDate() + (seBulan ? '' : ' ' + BLN[a.getUTCMonth()]) + '-' +
    b.getUTCDate() + ' ' + BLN[b.getUTCMonth()];
}

// Badan email edisi pekanan. Bagian "yang menanti pekan depan" sengaja ikut,
// karena justru itu yang dibaca orang Minggu sore sambil menyiapkan pekan
// kerja; tanpa itu, edisi ini cuma jadi arsip yang sudah lewat.
function badanPekanan(p) {
  const b = [];
  if (p.ringkas) b.push('<p><strong>' + esc(p.ringkas) + '</strong></p>');
  (p.pola || []).forEach(x => {
    if (x.judul) b.push(h2(x.judul));
    if (x.isi) b.push('<p>' + esc(x.isi) + '</p>');
  });
  if ((p.menanti || []).length) {
    b.push(h2('Yang menanti pekan depan'));
    // DUA PARAGRAF per agenda, bukan satu <li> yang dipisah <br>.
    //
    // Buttondown menurunkan badan yang kita kirim jadi versi teks untuk klien
    // berformat polos, dan pengubahnya MEMBUANG <br> tanpa mengganti apa pun.
    // Di edisi 17 Agustus hasilnya kata bertabrakan pada keempat agenda:
    // "...dari MyPertamina berakhirBerakhirnya promo dua hari ini...".
    // <p> adalah elemen blok yang pasti jadi baris baru di kedua format.
    (p.menanti || []).forEach(m => {
      b.push('<p style="margin:14px 0 2px!important"><strong>' +
        esc(fmtTanggalHari(m.tanggal)) + '</strong> &middot; ' + esc(m.apa) + '</p>');
      if (m.kenapa) b.push('<p style="margin:0 0 14px!important;color:#6b6858">' +
        esc(m.kenapa) + '</p>');
    });
  }
  if (p.penutup) b.push('<p>' + esc(p.penutup) + '</p>');
  const angka = blokAngka();
  if (angka) {
    // TANPA <hr>. Pengubah teks Buttondown tidak mengenalinya dan meninggalkan
    // "<hr/>" mentah di versi teks. Pemisahan visualnya sudah dikerjakan judul
    // seksi dan jarak antarparagraf.
    b.push(h2('Angka pembanding'));
    b.push('<p style="font-size:13px;color:#6b6858">Dipakai untuk menguji sendiri ' +
      'pembacaan arah di atas.</p>');
    b.push(angka);
  }
  // Tautan menunjuk EDISI INI, bukan halaman terbaru, aturan yang sama dengan
  // edisi harian. Tanpa ?edisi=, pembaca yang membuka email ini Minggu depan
  // akan mendarat di edisi pekan berikutnya.
  b.push('<p><a href="' + BASE + '/signal-pekanan.html?edisi=' + esc(p.tanggal) +
    '">Baca edisi ini di situs</a> &middot; ' +
    '<a href="' + BASE + '/agenda.html">lihat seluruh agenda</a></p>');
  b.push('<p style="font-size:13px;color:#6b6858">Signal Pekanan terbit tiap Minggu, ' +
    'merangkai seluruh edisi harian dan berita sepekan jadi satu pembacaan arah. ' +
    'Bukan rekomendasi investasi.</p>');
  return b.join('\n');
}

// Blok indikator untuk edisi email. Arahnya dihitung dari deretnya sendiri
// lewat arahDeret() di lib.mjs, bukan dinilai model, supaya tidak mungkin
// meleset dari datanya.
//
// BUKAN <table>, walau isinya deretan angka, dan itu keputusan sadar.
// Buttondown menurunkan badan yang kita kirim jadi versi teks untuk klien
// berformat polos. Pengubahnya mengenali p, strong, h2, ul, dan li, tapi
// MENYERAH pada table: di edisi 17 Agustus seluruh markup tabelnya bocor
// mentah sepanjang 1.300 karakter ke versi teks. Tabel empat kolom itu juga
// dikirim tanpa lebar sehingga jebol di layar ponsel. Satu paragraf per
// indikator menyelesaikan keduanya sekaligus.
//
// Nilainya dicetak nilaiRingkas(), fungsi yang sama dengan yang dipakai
// grafik di situs, supaya email dan halaman tidak berbunyi beda. Ia sekaligus
// menyelesaikan koma desimal, pemisah ribuan, dan penyederhanaan satuan:
// "25,46 miliar US$", bukan "25458.7 juta US$" yang harus dihitung sendiri
// oleh pembaca.
function blokAngka() {
  try {
    const B = readObjek('bps.js');
    const ind = (B && B.indikator) || {};
    const pilih = ['inflasi', 'pdb', 'neraca', 'pengangguran', 'ekspor', 'impor'];
    const baris = [];
    for (const kode of pilih) {
      const x = ind[kode];
      if (!x || !x.titik || !x.titik.length) continue;
      const akhir = x.titik[x.titik.length - 1];
      const arah = arahDeret(x.titik).label;
      baris.push('<p style="margin:6px 0!important">' + esc(x.nama) + ': <strong>' +
        esc(nilaiRingkas(akhir.nilai, x)) + '</strong> (' +
        esc(akhir.periode + ' ' + akhir.tahun) + ')' +
        (arah ? ' &middot; ' + esc(arah) : '') + '</p>');
    }
    return baris.join('\n');
  } catch { return ''; }
}

function badanEmail(h) {
  const b = [];
  if (h.ringkas) b.push('<p><strong>' + esc(h.ringkas) + '</strong></p>');
  (h.benang || []).forEach(x => {
    if (x.judul) b.push(h2(x.judul));
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
    b.push(h2('Angka pembanding'));
    b.push('<p style="font-size:13px;color:#6b6858">Bagian ini hanya ada di ' +
      'edisi email. Dipakai untuk menguji sendiri pembacaan arah di atas.</p>');
    b.push(angka);
  }

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

  // Subjek pekanan memuat SUDUT edisinya, bukan cuma rentang tanggal.
  //
  // Bentuk lama, "Signal Pekanan · 11 Agustus - 17 Agustus 2026", habis 45
  // karakter untuk nama produk dan tanggal, lalu terpotong di sekitar 40
  // karakter pada aplikasi ponsel. Yang tersisa di layar sama persis tiap
  // pekan, jadi satu edisi tidak bisa dibedakan dari edisi sebelumnya. Nama
  // pengirim sudah menyebut The Signal, jadi rentangnya cukup dipendekkan dan
  // sisa ruangnya diberikan ke judul edisi.
  //
  // Aman terhadap penjaga anti-kirim-ganda: penjaga utamanya mencocokkan
  // metadata.edisi, dan pencocokan subjek cuma jaring cadangan yang
  // digabung dengan OR, bukan syarat.
  const subjek = PEKANAN
    ? 'Signal Pekanan ' + rentangPendek(h) + ' · ' + (h.judul || h.rentangLabel || h.tanggal)
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
