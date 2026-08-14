// Ambil keterbukaan informasi emiten dari Bursa Efek Indonesia.
//
// Volumenya sangat besar (200+ per hari) dan mayoritas administratif murni:
// dari 60 laporan sampel, 48 di antaranya cuma "Laporan Bulanan Registrasi
// Pemegang Efek". Karena itu ada dua lapis penyaringan: daftar tolak di sini
// untuk yang jelas rutin, lalu Claude yang menilai sisanya.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { getJSONViaCurl, ambilIDX, retry, stripTags, log, ROOT, UA, wajibAlat, punyaAlat } from './lib.mjs';

const API = 'https://www.idx.co.id/primary/ListedCompany/GetAnnouncement';

// Laporan wajib berkala yang tidak menggerakkan harga saham.
//
// Empat kategori sengaja TIDAK ada di daftar tolak ini, atas permintaan user,
// karena tetap punya nilai informasi bagi pemegang saham:
//   - daftar pemegang saham            (perubahan komposisi kepemilikan)
//   - perubahan alamat kantor
//   - perubahan corporate secretary    (perubahan personel kunci)
//   - laporan realisasi penggunaan dana (bukti dana hasil IPO atau rights
//     issue dipakai sesuai janji di prospektus, ini justru material)
const RUTIN = new RegExp([
  'registrasi pemegang efek',
  'peredaran unit penyertaan',
  'laporan bulanan',
  'laporan mingguan',
  'laporan harian',
  'nilai aktiva bersih',
  'penyampaian bukti iklan',
].join('|'), 'i');

// Kategori yang secara fundamental bisa menggerakkan harga saham.
const MATERIAL = new RegExp([
  'laporan keuangan', 'kinerja', 'dividen', 'rups', 'rupslb',
  'akuisisi', 'merger', 'penggabungan', 'pengambilalihan', 'divestasi',
  'penambahan modal', 'hmetd', 'right issue', 'private placement',
  'buyback', 'pembelian kembali saham', 'stock split', 'reverse stock',
  'obligasi', 'sukuk', 'penawaran umum', 'ipo', 'waran',
  'perubahan pengendali', 'perubahan pemegang saham', 'kepemilikan saham',
  'daftar pemegang saham', 'realisasi penggunaan dana', 'corporate secretary',
  'perubahan alamat',
  'suspensi', 'delisting', 'relisting', 'pailit', 'pkpu', 'restrukturisasi',
  'kontrak', 'kerja sama', 'ekspansi', 'pabrik baru', 'investasi',
  'informasi material', 'keterbukaan informasi', 'kejadian penting',
  'perubahan direksi', 'perubahan komisaris', 'pengunduran diri direktur',
].join('|'), 'i');

function tglIDX(d) {
  return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
}

export async function ambilKeterbukaan({ hariKeBelakang = 1, maks = 40 } = {}) {
  const peta = await ambilPetaEmiten();
  const sampai = new Date(Date.now() + 7 * 3600 * 1000);          // hari ini WIB
  const dari = new Date(sampai.getTime() - hariKeBelakang * 86400000);

  const url = API + '?indexFrom=1&pageSize=200' +
    '&dateFrom=' + tglIDX(dari) + '&dateTo=' + tglIDX(sampai) + '&lang=id&keyword=';

  const j = await ambilIDX(url);
  const semua = j.Replies || [];

  const hasil = [];
  let ditolakRutin = 0;

  for (const r of semua) {
    const p = r.pengumuman || {};
    const judul = stripTags(p.JudulPengumuman || '');
    if (!judul) continue;

    const perihal = stripTags(p.PerihalPengumuman || '');
    const teks = judul + ' ' + perihal;

    if (RUTIN.test(teks)) { ditolakRutin++; continue; }

    // SEMUA lampiran dikumpulkan, bukan cuma yang pertama. Survei 200 laporan
    // (8-12 Agustus 2026): 80% punya lebih dari satu lampiran, ada yang sampai
    // tujuh. Mengambil satu saja berarti melewatkan isi dokumen di 4 dari 5
    // laporan, dan justru lampiran kedua sering berisi rincian angkanya.
    // Berkas .xlsx ikut didata tapi tidak bisa dibaca pdftotext.
    const semuaLampiran = (r.attachments || [])
      .map(a => a.FullSavePath || '').filter(Boolean);
    const lampiran = semuaLampiran.find(u => /\.pdf/i.test(u)) || semuaLampiran[0];
    hasil.push({
      id: String(p.Id || p.FinalId || p.NoPengumuman || ''),
      emiten: String(p.Kode_Emiten || '').trim().split(/\s+/)[0] || '',
      judulAsli: judul,
      perihal,
      terbit: p.TglPengumuman || new Date().toISOString(),
      jenis: p.JenisPengumuman || '',
      lampiran,                 // yang utama, dipakai sebagai sourceUrl dan penanda kembar
      lampiranSemua: semuaLampiran,
      namaEmiten: peta[String(p.Kode_Emiten || '').trim().split(/s+/)[0]?.toUpperCase()] || '',
      dugaanMaterial: MATERIAL.test(teks),
    });
  }

  hasil.sort((a, b) => new Date(b.terbit) - new Date(a.terbit));
  // yang terindikasi material didahulukan
  hasil.sort((a, b) => (b.dugaanMaterial ? 1 : 0) - (a.dugaanMaterial ? 1 : 0));

  log('IDX: ' + semua.length + ' laporan, ' + ditolakRutin + ' rutin dibuang, ' +
    hasil.length + ' lolos saringan awal (' + hasil.filter(x => x.dugaanMaterial).length + ' terindikasi material)');

  return hasil.slice(0, maks);
}

// ---------- isi dokumen lampiran ----------
// Tanpa ini berita cuma bisa mengulang judul. Isi PDF-nya justru bagian yang
// bernilai: siapa pelakunya, jabatannya, berapa lembar sebelum dan sesudah,
// harga, dan tujuan transaksi.
//
// WAJIB pakai `pdftotext -raw`, JANGAN `-layout`. Dengan -layout kolom label
// dan kolom nilai di formulir KSEI tergeser satu baris, sehingga terbaca
// "Nama (sesuai SID) : Dewan Komisaris" padahal itu jabatan, dan nama orang
// yang sebenarnya hilang. Salah baca di sini berarti salah menyebut nama atau
// jabatan orang sungguhan di berita. Mode -raw mempertahankan urutan tulis
// aslinya sehingga tiap label tetap menempel pada nilainya sendiri.

// Baris yang tidak boleh ikut terkirim ke model, apa pun isinya.
// Formulir menyembunyikan data ini ("Tidak ditampilkan"), tapi kalau suatu
// saat ada pelapor yang tidak menyembunyikannya, jangan sampai bocor lewat kita.
const BARIS_PRIBADI = /^\s*(alamat identitas|nomor telepon|alamat e-?mail|address|telephone number|e-?mail)\s*:/i;

// Boilerplate hukum KSEI dan versi bahasa Inggris. Tidak menambah informasi,
// hanya membengkakkan token dan mengaburkan bagian yang penting.
const BOILERPLATE = [
  /saya bertanggung jawab penuh atas kebenaran/i,
  /ksei tidak bertanggung jawab atas kesalahan/i,
  /i shall be fully responsible for the truthfulness/i,
  /ksei shall not be responsible or liable/i,
  /^report of ownership or any changes/i,
  /^according to article/i,
  /^i, the undersigned/i,
];

// IDX sesekali membalas halaman tantangan Cloudflare (badan HTML diawali
// "<!DOCTYPE") alih-alih PDF, tidak menentu dan tanpa pola jelas. Tanpa
// percobaan ulang, satu balasan seperti itu bikin artikel terbit tipis
// selamanya, dan itu benar-benar terjadi pada 6 artikel di putaran
// 2026-08-11: kelimanya berhasil dibaca saat dicoba lagi beberapa menit
// kemudian. Jadi menyerah pada percobaan pertama adalah kesalahan.
// Kegagalan membaca lampiran ada dua jenis, dan membedakannya penting karena
// penanganannya berlawanan.
//
//   SEMENTARA  - unduhan gagal, berkas kosong, atau yang turun ternyata halaman
//                tantangan Cloudflare (tidak diawali %PDF). Mengulang masuk akal,
//                percobaan berikutnya sering berhasil.
//   PERMANEN   - PDF-nya sah dan utuh, tapi isinya foto halaman tanpa lapisan
//                teks. Diuji pada lampiran BAJA 12 Agustus 2026: 3,7 MB untuk
//                4 halaman, nol karakter bisa diekstrak. pdftotext tidak akan
//                pernah bisa membacanya, hanya OCR yang bisa.
//
// Dulu keduanya masuk ke jalur ulang yang sama. Untuk dokumen pindaian itu
// berarti mengunduh ulang berkas 3,7 MB sampai lima kali dan menunggu 25 detik
// jeda, demi hasil yang sudah pasti nihil. Selain buang waktu, unduhan
// beruntun sia-sia itu menaikkan risiko Cloudflare menolak lampiran LAIN yang
// sebenarnya bisa dibaca. Sekarang pindaian langsung menyerah di percobaan
// pertama, dan sebabnya dicatat apa adanya.
//
// `jejak` boleh diisi objek kosong untuk menerima sebab kegagalan. Pemanggil
// yang tidak peduli cukup mengabaikannya, nilai kembaliannya tetap string.
export function ambilIsiLampiran(url, { maksKarakter = 6000, percobaan = 5, jejak = null } = {}) {
  if (!url || !/\.pdf/i.test(url)) return '';

  const tmp = path.join(os.tmpdir(), 'idx-' + Buffer.from(url).toString('base64url').slice(-24) + '.pdf');
  let alasan = '', sebab = 'tidak diketahui';

  const catat = (s, a) => { sebab = s; alasan = a; if (jejak) { jejak.sebab = s; jejak.alasan = a; } };

  try {
    for (let i = 0; i < percobaan; i++) {
      if (i > 0) tidurSebentar(2500 * i);   // 2,5s, 5s, 7,5s, 10s
      try {
        execFileSync('curl', [
          '-s', '-L', '--compressed', '--max-time', '45',
          '-A', UA,
          '-H', 'Accept: application/pdf,*/*',
          '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
          '-H', 'Referer: https://www.idx.co.id/id/perusahaan-tercatat/keterbukaan-informasi/',
          '-o', tmp, url,
        ], { encoding: 'utf8' });

        if (!fs.existsSync(tmp) || fs.statSync(tmp).size < 500) {
          catat('unduhan gagal', 'berkas kosong atau terlalu kecil'); continue;
        }

        // Pastikan benar-benar PDF, bukan halaman tantangan yang tersimpan.
        const kepala = fs.readFileSync(tmp).subarray(0, 4).toString('latin1');
        if (kepala !== '%PDF') {
          catat('diblokir', 'yang turun bukan PDF melainkan halaman web (' + kepala.replace(/[^\x20-\x7e]/g, '.') + ')');
          continue;
        }

        const ukuran = fs.statSync(tmp).size;
        const mentah = execFileSync(wajibAlat('pdftotext'), ['-raw', '-enc', 'UTF-8', tmp, '-'],
          { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });

        const teks = bersihkanTeksPdf(mentah, maksKarakter);
        if (!teks) {
          // PDF sah tapi tanpa teks. Deterministik, mengulang tidak akan mengubah apa pun.
          catat('pindaian', 'PDF sah ' + Math.round(ukuran / 1024) + ' KB tanpa lapisan teks, perlu OCR');
          log('  lampiran berupa pindaian, tidak diulang: ' + alasan);
          return '';
        }
        if (jejak) jejak.sebab = 'terbaca';
        return teks;
      } catch (e) {
        catat('galat', String(e.message).slice(0, 60));
      }
    }
    log('  lampiran gagal dibaca setelah ' + percobaan + ' percobaan [' + sebab + ']: ' + alasan);
    return '';
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

// Jeda sinkron, mengikuti pola yang sudah dipakai di lib.mjs untuk IDX.
function tidurSebentar(ms) { const s = Date.now(); while (Date.now() - s < ms) { /* jeda */ } }

// Baca SEMUA lampiran, bukan cuma yang pertama.
//
// Survei 200 laporan IDX (8-12 Agustus 2026): 80% berlampiran lebih dari satu,
// ada yang sampai tujuh. Lampiran pertama sering cuma surat pengantar,
// sedangkan rincian angkanya justru ada di lampiran kedua atau ketiga. Membaca
// satu saja berarti berita ditulis dari bagian yang paling miskin isinya.
//
// Berkas .xlsx (36 dari 432 lampiran) tidak bisa dibaca pdftotext. Keberadaannya
// tetap disebutkan supaya model tahu masih ada data yang belum terbaca dan
// tidak menyimpulkan berlebihan dari yang ada.
export function ambilIsiSemuaLampiran(daftar, { maksTotal = 9000, maksPerBerkas = 4000 } = {}) {
  const urls = (Array.isArray(daftar) ? daftar : [daftar]).filter(Boolean);
  if (!urls.length) return '';

  const pdf = urls.filter(u => /\.pdf/i.test(u));
  const lain = urls.filter(u => !/\.pdf/i.test(u));

  const bagian = [];
  let total = 0;
  const pindaian = [], diblokir = [];

  for (let i = 0; i < pdf.length; i++) {
    if (total >= maksTotal) { bagian.push('[' + (pdf.length - i) + ' lampiran lagi tidak dibaca karena batas panjang]'); break; }
    const jejak = {};
    const teks = ambilIsiLampiran(pdf[i], { maksKarakter: Math.min(maksPerBerkas, maksTotal - total), jejak });
    if (!teks) {
      // Lampiran yang gagal tetap dilaporkan ke model. Kalau tidak, model
      // mengira surat pengantar itulah seluruh dokumennya, lalu menulis dengan
      // percaya diri padahal angka pentingnya justru di lampiran yang hilang.
      if (jejak.sebab === 'pindaian') pindaian.push(i + 1);
      else diblokir.push(i + 1);
      continue;
    }
    bagian.push((pdf.length > 1 ? '--- LAMPIRAN ' + (i + 1) + ' dari ' + pdf.length + ' ---\n' : '') + teks);
    total += teks.length;
  }

  if (!bagian.length) return '';

  if (pindaian.length) {
    bagian.push('[Lampiran ' + pindaian.join(', ') + ' dari ' + pdf.length +
      ' berupa hasil pindaian tanpa teks digital, jadi isinya TIDAK tercakup di sini. ' +
      'Jangan menyimpulkan angka atau rincian yang mungkin ada di sana.]');
  }
  if (diblokir.length) {
    bagian.push('[Lampiran ' + diblokir.join(', ') + ' dari ' + pdf.length +
      ' gagal diunduh, jadi isinya TIDAK tercakup di sini.]');
  }
  if (lain.length) {
    bagian.push('[Ada ' + lain.length + ' lampiran berformat ' +
      [...new Set(lain.map(u => (u.match(/\.([a-z]+)$/i) || [, '?'])[1].toLowerCase()))].join('/') +
      ' yang tidak bisa dibaca otomatis, jadi isinya tidak tercakup di sini]');
  }
  return bagian.join('\n\n');
}

export function bersihkanTeksPdf(mentah, maksKarakter = 6000) {
  const keluar = [];
  for (let baris of String(mentah).split('\n')) {
    baris = baris.replace(/\s+/g, ' ').trim();
    if (!baris) continue;
    if (BARIS_PRIBADI.test(baris)) continue;
    if (BOILERPLATE.some(r => r.test(baris))) break;   // sisanya boilerplate
    keluar.push(baris);
  }
  let teks = keluar.join('\n');
  if (teks.length > maksKarakter) teks = teks.slice(0, maksKarakter) + '\n[dipotong]';
  return teks;
}

// Angka kunci diambil sendiri lewat regex, tidak diserahkan ke model.
// Model boleh salah baca; hasil parsing ini dikirim sebagai pembanding yang
// otoritatif supaya angka di berita tidak meleset.
export function bacaAngkaKepemilikan(teks) {
  const ambil = (label) => {
    const m = teks.match(new RegExp(label + '\\s*:\\s*([^\\n]+)', 'i'));
    return m ? m[1].trim() : '';
  };
  const angka = (s) => {
    const m = String(s).replace(/\./g, '').replace(',', '.').match(/-?\d+(\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
  };

  const sebelum = angka(ambil('Jumlah Saham Sebelum Transaksi'));
  const sesudah = angka(ambil('Jumlah Saham Setelah Transaksi'));
  if (sebelum === null || sesudah === null) return null;

  const selisih = sesudah - sebelum;
  const hakSebelum = ambil('Hak Suara Sebelum Transaksi');
  const hakSesudah = ambil('Hak Suara Setelah Transaksi');

  return {
    nama: ambil('Nama \\(sesuai SID\\)'),
    jabatan: ambil('Jabatan'),
    anggotaOrgan: ambil('Anggota Direksi/Dewan Komisaris'),
    sebelum, sesudah, selisih,
    arah: selisih < 0 ? 'penjualan' : (selisih > 0 ? 'pembelian' : 'tidak berubah'),
    // Inilah angka yang menentukan apakah transaksi ini berarti atau cuma remah.
    persenDariKepemilikan: sebelum > 0 ? Math.abs(selisih) / sebelum * 100 : null,
    hakSuaraSebelum: hakSebelum,
    hakSuaraSesudah: hakSesudah,
    hakSuaraBerubah: hakSebelum !== hakSesudah,
  };
}

// ---------- peta kode emiten -> nama resmi ----------
// Tanpa ini Claude cenderung menebak nama perusahaan dari ingatannya, yang
// berisiko keliru. Daftar resmi IDX dipakai sebagai sumber kebenaran.
let _petaEmiten = null;

// Disimpan ke disk supaya tidak perlu memanggil IDX tiap putaran. IDX
// kadang membalas HTML alih-alih JSON kalau terlalu sering diminta, dan
// tanpa cache satu kegagalan bikin semua berita kehilangan nama perusahaan.
const CACHE_EMITEN = path.join(ROOT, 'assets/data/emiten.json');
const UMUR_CACHE = 7 * 86400 * 1000;   // segarkan seminggu sekali

export async function ambilPetaEmiten() {
  if (_petaEmiten) return _petaEmiten;

  // 1. pakai cache kalau masih segar
  try {
    if (fs.existsSync(CACHE_EMITEN)) {
      const stat = fs.statSync(CACHE_EMITEN);
      const isi = JSON.parse(fs.readFileSync(CACHE_EMITEN, 'utf8'));
      if (Date.now() - stat.mtimeMs < UMUR_CACHE && Object.keys(isi).length > 100) {
        _petaEmiten = isi;
        log('peta emiten: ' + Object.keys(isi).length + ' nama dari cache');
        return _petaEmiten;
      }
    }
  } catch {}

  // 2. ambil dari IDX
  const url = 'https://www.idx.co.id/primary/ListedCompany/GetCompanyProfiles' +
    '?start=0&length=1200&code=&sortcolumn=code&sortdirection=asc';
  try {
    const j = await ambilIDX(url);
    const peta = {};
    for (const r of (j.data || [])) {
      const kode = String(r.KodeEmiten || r.Code || '').trim().toUpperCase();
      const nama = String(r.NamaEmiten || r.Name || '').trim();
      if (kode && nama) peta[kode] = nama;
    }
    if (Object.keys(peta).length < 100) throw new Error('hasil terlalu sedikit');
    fs.mkdirSync(path.dirname(CACHE_EMITEN), { recursive: true });
    fs.writeFileSync(CACHE_EMITEN, JSON.stringify(peta), "utf8");
    _petaEmiten = peta;
    log('peta emiten: ' + Object.keys(peta).length + ' nama dimuat dari IDX');
    return peta;
  } catch (e) {
    // 3. cache basi lebih baik daripada tidak ada nama sama sekali
    try {
      if (fs.existsSync(CACHE_EMITEN)) {
        _petaEmiten = JSON.parse(fs.readFileSync(CACHE_EMITEN, 'utf8'));
        log('PERINGATAN: IDX gagal, pakai cache lama (' + Object.keys(_petaEmiten).length + ' nama)');
        return _petaEmiten;
      }
    } catch {}
    log('PERINGATAN: nama emiten tidak tersedia -> ' + e.message.slice(0, 60));
    _petaEmiten = {};
    return _petaEmiten;
  }
}

if (process.argv[1] && import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const d = await ambilKeterbukaan();
  d.slice(0, 12).forEach(x => log(
    (x.dugaanMaterial ? '[M]' : '[ ]'), (x.emiten || '----').padEnd(5), x.judulAsli.slice(0, 68)));
}
