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
import { getJSONViaCurl, ambilIDX, retry, stripTags, log, ROOT, UA, wajibAlat, punyaAlat, alatLuar, TESSDATA } from './lib.mjs';
import XLSX from 'xlsx';

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
  // Urusan tata usaha yang tidak menggerakkan apa pun. Sampai 14 Agustus 2026
  // dua yang pertama justru terdaftar di MATERIAL, daftar putih hal yang bisa
  // menggerakkan harga saham, sehingga "MGLV Ubah Alamat dan Email Corporate
  // Secretary" terbit sebagai artikel. Audit menghitung seperempat isi situs
  // adalah laporan administratif seperti itu, dan tumpukan itu menenggelamkan
  // berita yang benar-benar bergerak. Varian ejaannya ikut didaftarkan karena
  // emiten menulis semaunya: "perubahan alamat", "pindah alamat", "perubahan
  // domisili" adalah laporan yang sama.
  'corporate secretary', 'sekretaris perusahaan',
  'perubahan alamat', 'pindah alamat', 'perubahan domisili',
  'perubahan e-?mail', 'perubahan situs', 'perubahan logo',
  'perubahan nama perseroan(?! terbatas)',
].join('|'), 'i');

// Kategori yang secara fundamental bisa menggerakkan harga saham.
//
// Diperluas 14 Agustus 2026 dari bukti, bukan tebakan: 966 pengumuman live
// 10-14 Agustus disaring ulang dan 90-an sinyal nyata ternyata tidak cocok
// satu kata kunci pun, sehingga selalu kalah tempat dari yang material.
// Pola bolosnya satu macam: IDX menulis bentuk panjang atau sinonim resmi,
// daftar ini cuma kenal bentuk pendeknya. "Penghentian Sementara Perdagangan"
// adalah suspensi tanpa kata suspensi (2x, INCF dan COAL); "Rapat Umum
// Pemegang Saham" ditulis utuh tanpa singkatan RUPS (33x); "Informasi atau
// Fakta Material" lolos dari 'informasi material' karena tersisip "atau
// Fakta"; "Pengunduran Diri Anggota Direksi" lolos dari 'pengunduran diri
// direktur'. Ditambah kategori yang belum terdaftar sama sekali padahal
// material menurut POJK: transaksi afiliasi, gugatan hukum, perjanjian
// kredit dan penjaminan, jawaban emiten atas volatilitas / permintaan
// penjelasan bursa, dan papan pemantauan khusus.
const MATERIAL = new RegExp([
  'laporan keuangan', 'kinerja', 'dividen', 'rups', 'rupslb',
  'rapat umum pemegang saham',
  'akuisisi', 'merger', 'penggabungan', 'pengambilalihan', 'divestasi',
  'penambahan modal', 'hmetd', 'right issue', 'private placement',
  'buyback', 'pembelian kembali saham', 'stock split', 'reverse stock',
  'obligasi', 'sukuk', 'penawaran umum', 'ipo', 'waran',
  'perubahan pengendali', 'perubahan pemegang saham', 'kepemilikan saham',
  'daftar pemegang saham', 'realisasi penggunaan dana',
  'suspensi', 'penghentian sementara perdagangan', 'delisting', 'relisting',
  'pailit', 'pkpu', 'restrukturisasi', 'pemantauan khusus',
  'kontrak', 'kerja sama', 'ekspansi', 'pabrik baru', 'investasi',
  'transaksi afiliasi', 'benturan kepentingan',
  'perjanjian kredit', 'penanggungan', 'penjaminan', 'gugatan',
  'volatilitas transaksi', 'permintaan penjelasan bursa',
  'informasi material', 'fakta material', 'keterbukaan informasi', 'kejadian penting',
  'perubahan direksi', 'perubahan komisaris', 'perubahan pengurus',
  'pengunduran diri', 'pemeringkatan', 'public expose',
].join('|'), 'i');

// Formulir LK KSEI "Laporan Kepemilikan atau Setiap Perubahan Kepemilikan
// Saham" itu material secara kategori tapi bervolume formulir: 70 dari 120
// kandidat material di sampel 5 hari adalah formulir ini, kebanyakan
// transaksi kecil, dan mereka memenuhi jatah kandidat sampai menggusur
// suspensi dan transaksi afiliasi yang jauh lebih langka. Jadi di antrean
// dia diturunkan SETELAH material lain, tetap di atas yang non-material.
const FORMULIR_LK = /laporan kepemilikan atau (setiap )?perubahan kepemilikan saham/i;

function tglIDX(d) {
  return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
}

export async function ambilKeterbukaan({ hariKeBelakang = 1, maks = 40 } = {}) {
  const peta = await ambilPetaEmiten();
  const sampai = new Date(Date.now() + 7 * 3600 * 1000);          // hari ini WIB
  const dari = new Date(sampai.getTime() - hariKeBelakang * 86400000);

  // indexFrom itu NOMOR HALAMAN BERBASIS NOL: offset = indexFrom x pageSize.
  //
  // Sampai 14 Agustus 2026 URL ini memakai indexFrom=1, yang berarti
  // MELOMPATI 200 laporan pertama, dan balasannya urut terbaru-dulu, jadi
  // yang dilompati justru 200 laporan TERBARU. Diverifikasi live dua arah:
  // jendela 13-14 Agustus ResultCount=168, indexFrom=1 membalas NOL laporan,
  // indexFrom=0 membalas 168. Akibatnya putaran jendela sehari menerima
  // kosong dan mencatatnya sebagai "tidak ada aksi korporasi baru", persis
  // gerbang-selalu-terbuka yang tidak pernah gagal keras; keluhan pemilik
  // "berita aksi korporasi tidak update" adalah gejalanya.
  //
  // Sekaligus di-loop per halaman, karena satu hari bursa bisa menerbitkan
  // 457 pengumuman (10 Agustus 2026), lebih dari satu halaman. Loop berhenti
  // begitu balasan lebih pendek dari pageSize, dengan pagar 15 halaman
  // supaya API yang tiba-tiba berulah tidak membuat putaran menggantung.
  const semua = [];
  for (let hal = 0; hal < 15; hal++) {
    const url = API + '?indexFrom=' + hal + '&pageSize=200' +
      '&dateFrom=' + tglIDX(dari) + '&dateTo=' + tglIDX(sampai) + '&lang=id&keyword=';
    const j = await ambilIDX(url);
    const isi = j.Replies || [];
    semua.push(...isi);
    if (isi.length < 200) break;
  }

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
      formulirLK: FORMULIR_LK.test(teks),
    });
  }

  hasil.sort((a, b) => new Date(b.terbit) - new Date(a.terbit));
  // Tiga tingkat prioritas: material sejati > formulir LK kepemilikan >
  // sisanya. Sort stabil, jadi di dalam tiap tingkat urutan terbaru-dulu
  // dari sort pertama tetap terjaga.
  const tingkat = (x) => x.dugaanMaterial ? (x.formulirLK ? 1 : 2) : 0;
  hasil.sort((a, b) => tingkat(b) - tingkat(a));

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
export function ambilIsiLampiran(url, { maksKarakter = 20000, percobaan = 5, jejak = null } = {}) {
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
          // PDF sah tapi tanpa lapisan teks: hasil pindaian. pdftotext tidak
          // akan pernah bisa; yang bisa hanya OCR, dan sejak 14 Agustus 2026
          // itulah yang dilakukan (perintah pemilik: semua lampiran harus
          // terbaca, laporan pindaian tidak boleh hilang begitu saja).
          const hasilOcr = ocrPdf(tmp, maksKarakter);
          if (hasilOcr) {
            catat('ocr', 'pindaian ' + Math.round(ukuran / 1024) + ' KB terbaca lewat OCR');
            log('  lampiran pindaian terbaca lewat OCR (' + hasilOcr.length + ' karakter)');
            return hasilOcr;
          }
          catat('pindaian', 'PDF sah ' + Math.round(ukuran / 1024) + ' KB tanpa lapisan teks, OCR ' +
            (punyaAlat('tesseract') && punyaAlat('pdftoppm') ? 'tidak menghasilkan teks' : 'tidak tersedia di mesin ini'));
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

// OCR untuk lampiran hasil pindaian: pdftoppm merender halaman jadi PNG,
// tesseract membacanya (bahasa ind+eng, formulir KSEI campuran keduanya).
//
// Ada sejak 14 Agustus 2026, atas perintah pemilik: SEMUA lampiran harus
// terbaca dan laporannya tetap terbit. Sebelumnya pindaian menyerah tanpa
// OCR, dan itu nyata menghilangkan isi: pada risalah RUPSLB SDRA 13 Agustus,
// 4 dari 5 lampiran adalah pindaian, jadi hampir seluruh risalahnya tidak
// pernah sampai ke model.
//
// Halaman dirender maksimal 12: hampir semua dokumen keterbukaan lebih
// pendek dari itu, dan OCR memakan 2-4 detik per halaman; dokumen raksasa
// tidak boleh membuat satu putaran menggantung. Kalau terpotong, dicatat.
const MAKS_HALAMAN_OCR = 12;

export function ocrPdf(berkasPdf, maksKarakter = 20000) {
  const pdftoppm = alatLuar('pdftoppm');
  const tesseract = alatLuar('tesseract');
  if (!pdftoppm || !tesseract) return '';

  const awalan = path.join(os.tmpdir(), 'idx-ocr-' + Date.now());
  try {
    execFileSync(pdftoppm, ['-r', '200', '-gray', '-png',
      '-f', '1', '-l', String(MAKS_HALAMAN_OCR), berkasPdf, awalan],
      { timeout: 120000 });
    const gambar = fs.readdirSync(os.tmpdir())
      .filter(f => f.startsWith(path.basename(awalan)) && f.endsWith('.png'))
      .sort()
      .map(f => path.join(os.tmpdir(), f));
    if (!gambar.length) return '';

    const potongan = [];
    for (const g of gambar) {
      try {
        const argumen = [g, 'stdout', '-l', 'ind+eng', '--psm', '4'];
        if (TESSDATA) argumen.push('--tessdata-dir', TESSDATA);
        const teks = execFileSync(tesseract, argumen,
          { encoding: 'utf8', timeout: 60000, maxBuffer: 8 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
        if (teks && teks.trim()) potongan.push(teks);
      } catch { /* satu halaman gagal, halaman lain tetap dicoba */ }
    }
    if (!potongan.length) return '';

    // Hasil OCR melewati pembersih yang sama: baris data pribadi dan
    // boilerplate KSEI tidak boleh bocor hanya karena masuk lewat jalur lain.
    let hasil = bersihkanTeksPdf(potongan.join('\n'), maksKarakter);
    if (!hasil || hasil.replace(/\s/g, '').length < 120) return '';
    return '[TEKS HASIL OCR DARI PINDAIAN - angka dan nama bisa salah baca, ' +
      'kutip dengan hati-hati]\n' + hasil;
  } catch {
    return '';
  } finally {
    for (const f of fs.readdirSync(os.tmpdir())) {
      if (f.startsWith(path.basename(awalan))) fs.rmSync(path.join(os.tmpdir(), f), { force: true });
    }
  }
}

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
//
// Batasnya dinaikkan drastis 14 Agustus 2026 (4.000/9.000 -> 20.000/80.000)
// atas perintah pemilik: batas lama nyata memenggal esensi. Pada pemanggilan
// RUPSLB MDLN, lampiran berisi matriks KBLI terpotong dan dua lampiran
// terakhir tidak dibaca sama sekali. Batas sekarang tinggal pagar terhadap
// dokumen patologis ratusan halaman, bukan pemangkas dokumen normal; dan
// pemotongan yang masih terjadi selalu dicatat terang-terangan ke model.
// Lampiran .xlsx dibaca lewat SheetJS lalu disajikan sebagai CSV per sheet.
//
// Ada sejak 14 Agustus 2026 (lanjutan perintah yang sama: semua lampiran
// harus terbaca). Sebelumnya 36 dari 432 lampiran survei berformat .xlsx dan
// hanya didata keberadaannya, padahal justru sering berisi tabel angkanya.
// Hasilnya tetap melewati bersihkanTeksPdf: baris data pribadi dan
// boilerplate tidak boleh bocor hanya karena masuk lewat jalur lain.
export function ambilIsiXlsx(url, { maksKarakter = 20000, percobaan = 3 } = {}) {
  if (!url || !/\.xlsx?($|\?)/i.test(url)) return '';
  const tmp = path.join(os.tmpdir(), 'idx-x-' + Buffer.from(url).toString('base64url').slice(-24) + '.xlsx');
  try {
    for (let i = 0; i < percobaan; i++) {
      if (i > 0) tidurSebentar(2500 * i);
      try {
        execFileSync('curl', [
          '-s', '-L', '--compressed', '--max-time', '45',
          '-A', UA,
          '-H', 'Accept: */*',
          '-H', 'Referer: https://www.idx.co.id/id/perusahaan-tercatat/keterbukaan-informasi/',
          '-o', tmp, url,
        ], { encoding: 'utf8' });
        if (!fs.existsSync(tmp) || fs.statSync(tmp).size < 200) continue;
        const isi = fs.readFileSync(tmp);
        // .xlsx adalah arsip ZIP; .xls lama berformat CFB. Dua tanda tangan
        // itu yang sah, selain itu berarti halaman tantangan yang tersimpan.
        const kepala = isi.subarray(0, 2).toString('latin1');
        if (kepala !== 'PK' && isi[0] !== 0xd0) continue;

        const buku = XLSX.read(isi, { type: 'buffer' });
        const bagian = [];
        for (const nama of buku.SheetNames.slice(0, 6)) {
          const csv = XLSX.utils.sheet_to_csv(buku.Sheets[nama], { blankrows: false });
          if (csv && csv.trim()) {
            bagian.push((buku.SheetNames.length > 1 ? '[sheet: ' + nama + ']\n' : '') + csv.trim());
          }
        }
        if (buku.SheetNames.length > 6) bagian.push('[' + (buku.SheetNames.length - 6) + ' sheet lagi tidak dibaca]');
        if (!bagian.length) return '';
        return bersihkanTeksPdf(bagian.join('\n\n'), maksKarakter);
      } catch { /* coba lagi */ }
    }
    return '';
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

export function ambilIsiSemuaLampiran(daftar, { maksTotal = 80000, maksPerBerkas = 20000, jejak = null } = {}) {
  const urls = (Array.isArray(daftar) ? daftar : [daftar]).filter(Boolean);
  if (!urls.length) return '';

  const pdf = urls.filter(u => /\.pdf/i.test(u));
  const xlsx = urls.filter(u => /\.xlsx?($|\?)/i.test(u));
  const lainnya = urls.filter(u => !/\.pdf/i.test(u) && !/\.xlsx?($|\?)/i.test(u));

  const bagian = [];
  let total = 0, xlsxGagal = 0;
  const pindaian = [], diblokir = [], hasilOcr = [];
  // Pemanggil butuh tahu KENAPA kosong: pindaian yang gagal OCR itu permanen
  // (boleh terbit dengan catatan jujur), unduhan diblokir itu sementara
  // (tunda ke putaran berikutnya). Tanpa pembedaan ini laporan pindaian
  // dilewati selamanya di tiap putaran, tidak pernah diberitakan.
  // jejak.lain = non-PDF yang tetap tak terbaca (xlsx gagal + format lain).
  const isiJejak = () => {
    if (!jejak) return;
    jejak.pdfTotal = pdf.length;
    jejak.pindaian = pindaian.length;
    jejak.diblokir = diblokir.length;
    jejak.lain = xlsxGagal + lainnya.length;
  };

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
    if (jejak.sebab === 'ocr') hasilOcr.push(i + 1);
    bagian.push((pdf.length > 1 ? '--- LAMPIRAN ' + (i + 1) + ' dari ' + pdf.length + ' ---\n' : '') + teks);
    total += teks.length;
  }

  // Lampiran .xlsx menyusul setelah PDF: tabel angkanya pelengkap narasi,
  // dan kalau jatah panjang tinggal sedikit, narasi yang didahulukan.
  for (const u of xlsx) {
    if (total >= maksTotal) { bagian.push('[lampiran xlsx tidak dibaca karena batas panjang]'); break; }
    const teks = ambilIsiXlsx(u, { maksKarakter: Math.min(maksPerBerkas, maksTotal - total) });
    if (!teks) { xlsxGagal++; continue; }
    bagian.push('--- LAMPIRAN TABEL (xlsx) ---\n' + teks);
    total += teks.length;
  }

  isiJejak();
  if (!bagian.length) return '';

  if (hasilOcr.length) {
    bagian.push('[Lampiran ' + hasilOcr.join(', ') + ' dari ' + pdf.length +
      ' adalah pindaian yang dibaca lewat OCR. Angka dan ejaan nama dari bagian itu ' +
      'bisa salah baca; kalau angka penting hanya muncul di bagian OCR, tuliskan dengan ' +
      'kehati-hatian dan jangan jadikan satu-satunya dasar klaim numerik yang presisi.]');
  }
  if (pindaian.length) {
    bagian.push('[Lampiran ' + pindaian.join(', ') + ' dari ' + pdf.length +
      ' berupa hasil pindaian tanpa teks digital dan OCR-nya gagal, jadi isinya TIDAK ' +
      'tercakup di sini. Jangan menyimpulkan angka atau rincian yang mungkin ada di sana.]');
  }
  if (diblokir.length) {
    bagian.push('[Lampiran ' + diblokir.join(', ') + ' dari ' + pdf.length +
      ' gagal diunduh, jadi isinya TIDAK tercakup di sini.]');
  }
  if (xlsxGagal) {
    bagian.push('[' + xlsxGagal + ' lampiran xlsx gagal dibaca, isinya tidak tercakup di sini]');
  }
  if (lainnya.length) {
    bagian.push('[Ada ' + lainnya.length + ' lampiran berformat ' +
      [...new Set(lainnya.map(u => (u.match(/\.([a-z]+)$/i) || [, '?'])[1].toLowerCase()))].join('/') +
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
