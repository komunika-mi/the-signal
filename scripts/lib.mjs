// Utilitas bersama untuk semua script pipeline The Signal.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Alamat situs hidup di satu tempat saja, lihat situs.mjs.
export { SITUS as BASE } from './situs.mjs';
export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

// Muat .env kalau ada. Tanpa paket luar, cukup untuk PASANGAN=nilai per baris.
//
// Rahasia TIDAK ditaruh di environment pengguna karena skrip ini juga jalan
// lewat Task Scheduler dan GitHub Actions, yang masing-masing punya cara
// sendiri menyuntikkan rahasia. Berkas .env sudah masuk .gitignore.
// Nilai yang sudah ada di process.env menang, supaya rahasia dari Actions
// tidak tertimpa berkas lokal yang mungkin tertinggal.
(function muatEnv() {
  try {
    const berkas = path.join(ROOT, '.env');
    if (!fs.existsSync(berkas)) return;
    for (const baris of fs.readFileSync(berkas, 'utf8').split(/\r?\n/)) {
      const b = baris.trim();
      if (!b || b.startsWith('#')) continue;
      const p = b.indexOf('=');
      if (p < 1) continue;
      const nama = b.slice(0, p).trim();
      if (process.env[nama]) continue;
      process.env[nama] = b.slice(p + 1).trim().replace(/^["']|["']$/g, '');
    }
  } catch { /* .env rusak tidak boleh menjatuhkan pipeline */ }
})();

// Apakah berkas ini dijalankan LANGSUNG (`node scripts/x.mjs`), bukan diimpor
// sebagai modul?
//
// Bentuk lama merangkai URL-nya sendiri:
//     import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')
// dan itu HANYA benar di Windows. Di Linux process.argv[1] sudah diawali
// '/', sehingga yang terbentuk 'file:////home/...' dengan EMPAT garis miring
// sementara import.meta.url punya tiga. Hasilnya SELALU false.
//
// Akibatnya tidak berupa error, melainkan diam. Skrip yang seluruh isinya
// berada di balik penjaga ini keluar dengan kode 0 tanpa satu baris
// keluaran, dan langkah workflow-nya hijau. bps-artikel.mjs dan
// periksa-kanal.mjs begitu selama enam hari di runner GitHub: angka BPS
// beku sejak 13 Agustus 2026, dan pengawas kesegaran kanal tidak pernah
// sekali pun mengawasi apa pun.
//
// pathToFileURL mengurus perbedaan platform sekaligus penyandian karakter.
export function dijalankanLangsung(metaUrl) {
  if (!process.argv[1]) return false;
  try { return metaUrl === pathToFileURL(process.argv[1]).href; }
  catch { return false; }
}
export function log(...a) { console.log('[' + new Date().toISOString().slice(11, 19) + ']', ...a); }

// ---------- pencari alat luar ----------
//
// Pipeline ini memanggil empat program di luar Node: curl, ffmpeg, pdftotext,
// dan higgsfield. Semuanya dicari lewat PATH, dan PATH itu BERBEDA-BEDA
// tergantung siapa yang menjalankan. Ketergantungan itu sudah dua kali
// mematikan kanal secara diam-diam:
//
//   ffmpeg     tidak ada di runner ubuntu-latest, jadi selama berminggu-minggu
//              tidak satu pun foto asli terunduh di cloud. Log putaran rusak
//              terlihat sama persis dengan log putaran sehat.
//   pdftotext  ADA di mesin ini, di C:\Program Files\Git\mingw64\bin, tapi
//              folder itu TIDAK ada di PATH mesin maupun PATH pengguna. Jadi
//              ketika dijalankan tangan dari Git Bash berhasil, sementara
//              Task Scheduler yang memakai PATH sistem gagal. Kanal aksi
//              korporasi mati tiga hari penuh dan tugasnya tetap melaporkan
//              sukses karena skripnya keluar dengan kode 0.
//
// Pola kegagalannya sama: alat tidak ketemu, kode turun kelas tanpa suara.
// Dua obatnya ada di sini. Pertama, pencarian tidak berhenti di PATH melainkan
// ikut memeriksa tempat-tempat yang lazim di Windows. Kedua, ketiadaan alat
// bisa ditanyakan lebih dulu lewat punyaAlat(), supaya pemanggil melaporkannya
// sebagai kegagalan yang terlihat, bukan sebagai hasil kosong yang wajar.
const CARI_DI = {
  pdftotext: [
    'C:/Program Files/Git/mingw64/bin/pdftotext.exe',
    'C:/Program Files (x86)/Git/mingw64/bin/pdftotext.exe',
    'C:/Program Files/poppler/bin/pdftotext.exe',
    '/usr/bin/pdftotext',
  ],
  ffmpeg: [
    'C:/Program Files/Git/mingw64/bin/ffmpeg.exe',
    'C:/ffmpeg/bin/ffmpeg.exe',
    '/usr/bin/ffmpeg',
  ],
  // ffprobe jadi WAJIB sejak 14 Agustus 2026, saat penyaring ukuran gambar
  // dipasang di unduhFoto. Sempat dipanggil mentah tanpa masuk daftar ini,
  // yaitu persis kesalahan yang sudah dua kali mematikan kanal di proyek ini.
  // Di mesin ini ffprobe ada bersama ffmpeg di folder WinGet, dan folder itu
  // ada di PATH PENGGUNA tapi TIDAK di PATH MESIN, jadi Task Scheduler tidak
  // akan menemukannya.
  ffprobe: [
    'C:/Program Files/Git/mingw64/bin/ffprobe.exe',
    'C:/ffmpeg/bin/ffprobe.exe',
    '/usr/bin/ffprobe',
  ],
  // Pasangan OCR untuk lampiran IDX hasil pindaian (dipasang 14 Agustus 2026
  // atas perintah pemilik: semua lampiran harus terbaca). pdftoppm merender
  // halaman PDF jadi gambar, tesseract membaca teks dari gambarnya. Keduanya
  // terpasang di luar PATH mesin, jadi WAJIB terdaftar di sini atau Task
  // Scheduler tidak menemukannya, kesalahan yang persis pernah mematikan
  // kanal ini tiga hari.
  pdftoppm: [
    'D:/alat/poppler/poppler-26.02.0/Library/bin/pdftoppm.exe',
    'C:/Program Files/poppler/bin/pdftoppm.exe',
    '/usr/bin/pdftoppm',
  ],
  tesseract: [
    'C:/Program Files/Tesseract-OCR/tesseract.exe',
    'C:/Program Files (x86)/Tesseract-OCR/tesseract.exe',
    '/usr/bin/tesseract',
  ],
};

// tessdata bahasa Indonesia tidak bisa menumpang folder instalasi Tesseract
// (Program Files butuh admin), jadi hidup di D:/alat/tessdata dan diberikan
// lewat --tessdata-dir saat memanggil. Kosong berarti pakai bawaan instalasi.
export const TESSDATA = ['D:/alat/tessdata', '/usr/share/tesseract-ocr/5/tessdata']
  .find(p => fs.existsSync(p)) || '';

const _alat = new Map();

export function alatLuar(nama) {
  if (_alat.has(nama)) return _alat.get(nama);

  let jalur = '';
  // 1. PATH dulu. Kalau ada di sana, itu yang paling benar.
  try {
    const cek = process.platform === 'win32' ? 'where' : 'which';
    const keluar = execFileSync(cek, [nama], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    jalur = String(keluar).split(/\r?\n/).find(b => b.trim()) || '';
    jalur = jalur.trim();
  } catch { /* tidak di PATH, lanjut ke tempat lazim */ }

  // 2. Tempat-tempat lazim yang sering tidak masuk PATH.
  if (!jalur) {
    for (const kandidat of (CARI_DI[nama] || [])) {
      if (fs.existsSync(kandidat)) { jalur = kandidat; break; }
    }
  }

  _alat.set(nama, jalur);
  return jalur;
}

export const punyaAlat = (nama) => Boolean(alatLuar(nama));

// Dipakai saat alat itu WAJIB ada. Pesannya menyebutkan di mana saja sudah
// dicari, supaya yang memperbaiki tidak perlu menebak.
export function wajibAlat(nama) {
  const jalur = alatLuar(nama);
  if (jalur) return jalur;
  throw new Error(
    'Alat "' + nama + '" tidak ditemukan. Dicari di PATH dan di: ' +
    (CARI_DI[nama] || []).join(', ') +
    '. Pasang alatnya, atau tambahkan foldernya ke PATH sistem.');
}

// Cari foto utama sebuah halaman berita atau siaran pers.
//
// Foto asli JAUH lebih baik daripada ilustrasi AI: foto rapat Mendag dengan
// Toyota adalah dokumentasi peristiwanya, sedangkan ilustrasi cuma mewakili
// topiknya. Jadi kalau sumbernya menyediakan foto, itu yang dipakai, dan
// ilustrasi AI turun jadi cadangan untuk sumber yang memang tidak berfoto
// (IDX yang lampirannya PDF, Bank Indonesia, BPS).
//
// Survei 12 Agustus 2026: tvOneNews 5 dari 5 artikel berfoto, Kemendag 2 dari
// 4, Bank Indonesia 0 dari 4, BPS 0 dari 3.
// Bukan foto jurnalistik, melainkan perabot halaman.
//
// Diperiksa terhadap NAMA BERKAS dan FOLDERNYA, bukan terhadap seluruh alamat
// sebagai satu untaian teks. Bedanya menentukan, dan versi pertama aturan ini
// salah justru karena itu.
//
// Versi pertama mencocokkan kata "logo" di mana pun dalam alamat, lalu menolak
// foto tvOne yang sah bernama
// "ilustrasi-layar-memampilkan-logo-bank-indonesia-bi-di-jakarta_488_274.jpg".
// Itu foto jurnalistik TENTANG sebuah logo, bukan berkas logo. Karena og:image
// tertolak, pencarian jatuh ke aset merek stasiun berukuran 129x35 piksel.
//
// Aturannya sekarang dua lapis:
//   FOLDER  - tempat penyimpanan perabot memang khas dan jarang salah tebak
//   NAMA    - kata kunci hanya dihitung kalau berada di AWAL nama berkas
// Sisanya diserahkan ke penyaring ukuran saat unduh, yang tidak bisa dibohongi
// nama berkas apa pun.
const FOLDER_PERABOT = /\/(appasset|static|icons?|theme|template|layout)\/|\/_layouts\/|\/assets\/(imgs?|images)\/(part|theme|ui|bg)\/|\/img\/(ui|bg|icon)/i;

// Jalur tempat tiap sumber MENYIMPAN foto beritanya.
//
// Kandidat yang cocok didahulukan, bukan sekadar diterima. Tanpa pengurutan
// ini, pencarian berhenti pada gambar pertama yang lolos saringan nama, dan
// gambar pertama di halaman biasanya perabot.
//
// Terukur pada Bank Indonesia: 5 dari 5 artikel memakai ilustrasi AI padahal
// halaman sumbernya berfoto. cariFotoUtama selalu mengembalikan sprite
// SharePoint /_layouts/15/images/spcommon.png (271x268, ditolak penjaga
// ukuran), sementara foto aslinya menunggu di /PublishingImages/ dengan
// ukuran 1280x853 sampai 6768x4500.
const JALUR_ISI = /\/PublishingImages\/|\/albums?\/|\/download\/|\/imagecache\/|thumbs?\.tvonenews\.com|\/media-center\/|\/uploads?\//i;
const NAMA_PERABOT = /^(logo|icon|favicon|avatar|banner|flag|share|sprite|placeholder|spinner|bahasa|english|watermark|default)[-_.]?/i;

function perabotHalaman(u) {
  if (FOLDER_PERABOT.test(u)) return true;
  const nama = (u.split('?')[0].split('/').pop() || '');
  if (NAMA_PERABOT.test(nama)) return true;
  if (/_(small|mini|thumb)\.|-(small|mini)\./i.test(nama)) return true;
  return false;
}

// SATU halaman sumber = SATU foto yang boleh dipakai, yaitu foto utamanya.
//
// Sempat dicoba mengembalikan daftar kandidat, supaya artikel yang fotonya
// kembar dengan artikel lain bisa turun ke foto berikutnya di halaman yang
// sama. Dicoba 13 Agustus 2026 dan HASILNYA SALAH, jadi dibatalkan:
//   - berita "Emas Antam Turun Rp9.000" dapat thumbnail YouTube
//   - berita "IHSG Ditutup Anjlok ke 6.130" dapat foto Masjid Istiqlal
// Sebabnya, gambar lain di halaman itu milik widget video dan daftar berita
// terkait, bukan dokumentasi peristiwa yang sedang diberitakan. Memakainya
// berarti memasang foto milik berita lain dan melabelinya "Foto: tvOneNews",
// persis jenis kesalahan atribusi yang sedang kita tutup.
//
// Diperiksa pada dua artikel tvOne: jumlah gambar di dalam wadah
// .content-article adalah NOL. Badan berita memang tidak berfoto sama sekali,
// seluruh fotonya cuma yang di og:image. Jadi kandidat alternatif memang tidak
// pernah ada, yang ada hanya gambar milik bagian lain halaman.
//
// Akibatnya, artikel yang foto utamanya sudah dipakai artikel lain TIDAK punya
// jalan lain selain ilustrasi. Itu memang lebih mahal, tapi benar.
// opsi.asal = URL halaman sumbernya, dipakai untuk membereskan alamat relatif.
// Tanpa itu, sumber yang menulis src="/download/33488" tidak akan pernah bisa
// diambil fotonya.
export function cariFotoUtama(html, opsi = {}) {
  const kandidat = [];

  // og:image didahulukan HANYA kalau lolos saringan. Kemendag mengisinya
  // dengan gambar profil situs (assets/imgs/part/about.png) yang sama untuk
  // semua artikel, jadi memakainya buta berarti semua berita berfoto sama.
  const og = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (og) kandidat.push(og[1]);

  // SYARAT EKSTENSI DICABUT, dan alamat relatif ikut diterima.
  //
  // Versi lama mensyaratkan URL absolut berakhiran .jpg/.jpeg/.webp. Dua syarat
  // itu masuk akal sebagai penyaring murah, tapi keduanya salah sebagai syarat
  // keberadaan: yang menentukan sebuah alamat itu gambar atau bukan adalah
  // ISINYA, bukan ejaan alamatnya. Sesuatu yang berada di dalam tag <img>
  // memang gambar, apa pun bentuk alamatnya.
  //
  // Terbukti merugikan pada 14 Agustus 2026. Kemenperin menyajikan foto
  // artikelnya di /download/33488, relatif dan tanpa ekstensi. Diperiksa
  // langsung: berkas itu JPEG sungguhan 1950x1299, 472 KB, dengan
  // Content-Disposition filename="2.jpeg". Kedua syarat lama menolaknya, jadi
  // artikelnya memakai ilustrasi AI padahal foto peristiwanya tersedia. Yang
  // menyadarinya pemilik situs, dengan membandingkan dua tab.
  //
  // Gantinya bukan tanpa penyaring, melainkan penyaring yang benar: nama
  // perabot halaman disaring lewat BUKAN_FOTO di atas, dan UKURAN gambar
  // diperiksa saat diunduh (lihat unduhFoto di buat-foto.mjs). Ukuran itu
  // penyaring yang jujur, karena ikon memang kecil dan foto berita memang besar.
  // HANYA di dalam tag <img>. Pemindaian atribut src secara buta ikut menyapu
  // <script src> dan <iframe src>: percobaan pertama memilih
  // kemenperin.go.id/js/jquery-2.1.0.min.js sebagai "foto utama".
  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    const atribut = tag[0];
    // data-src dan kerabatnya didahulukan: pada halaman ber-lazy-load, src
    // berisi placeholder dan alamat aslinya justru di data-src.
    const m = atribut.match(/\b(?:data-src|data-original|data-lazy-src|data-echo)=["']([^"'\s]+)["']/i)
      || atribut.match(/\bsrc=["']([^"'\s]+)["']/i);
    if (m) kandidat.push(m[1]);
  }

  // Alamat data: dan svg dibuang di sini, bukan lewat BUKAN_FOTO, karena
  // keduanya soal BENTUK alamat bukan soal nama berkas. data: itu gambar
  // tertanam (biasanya placeholder abu-abu untuk lazy-load) dan svg hampir
  // selalu ikon atau logo.
  const bukanBentukFoto = (u) => /^data:/i.test(u) || /\.svg(\?|$)/i.test(u);

  // Kandidat yang berada di jalur penyimpanan foto berita didahulukan, dengan
  // urutan aslinya dipertahankan di dalam tiap kelompok supaya og:image tetap
  // menang atas gambar badan halaman.
  const urut = [
    ...kandidat.filter(u => u && JALUR_ISI.test(u)),
    ...kandidat.filter(u => u && !JALUR_ISI.test(u)),
  ];

  for (let u of urut) {
    if (!u || bukanBentukFoto(u) || perabotHalaman(u)) continue;

    // Alamat relatif dibereskan terhadap halaman sumbernya.
    if (!/^https?:\/\//i.test(u)) {
      if (!opsi.asal) continue;            // tanpa asal, relatif tidak bisa dipakai
      try { u = new URL(u, opsi.asal).href; } catch { continue; }
    }

    // thumbs.tvonenews.com menyajikan beberapa ukuran lewat akhiran nama
    // berkas. Yang tertanam di halaman cuma 412x232, terlalu kecil untuk
    // kartu 680px, padahal versi 1200x675 tersedia di alamat yang sama.
    u = u.replace(/_\d{2,4}_\d{2,4}(\.(?:jpg|jpeg|webp))$/i, '_1200_675$1');
    return u;
  }
  return '';
}

// curl polos dengan header wajar, tanpa embel-embel IDX. Dipakai sebagai
// jalur kedua ketika fetch Node ditolak.
// curl yang MELAPORKAN status, bukan menelannya.
//
// `curl -s` tanpa `-f` mencetak badan balasan apa pun kode HTTP-nya, dan
// pemanggil yang cuma menerima string tidak punya cara membedakan artikel
// sungguhan dari halaman blokir. Halaman tantangan Cloudflare IDX berukuran
// 4.544 byte, jauh di atas ambang kewajaran mana pun, jadi ia lolos sebagai
// "isi yang masuk akal". Penanda %{http_code} ditempel di baris terakhir dan
// dipisahkan lagi di sini.
function curlBerstatus(url, timeoutDetik, opsi = []) {
  const keluar = execFileSync('curl', [
    '--compressed', '--max-time', String(timeoutDetik),
    '-A', UA,
    ...opsi,
    '-w', '\n%{http_code}',
    url,
  ], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  const potong = keluar.lastIndexOf('\n');
  if (potong < 0) return { status: 0, badan: keluar };
  return {
    status: Number(keluar.slice(potong + 1).trim()) || 0,
    badan: keluar.slice(0, potong),
  };
}

function ambilLewatCurl(url, timeoutDetik = 30) {
  return curlBerstatus(url, timeoutDetik, [
    '-sL',
    '-H', 'Accept: text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
  ]);
}

export async function get(url, { timeout = 25000, headers = {} } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': UA, ...headers } });

    // HTTP 403 dicoba ulang lewat curl sebelum menyerah.
    //
    // Beberapa situs pemerintah menyaring lewat sidik jari TLS, bukan header:
    // permintaan fetch Node ditolak sementara curl dengan header yang sama
    // persis diterima. IDX begitu sejak awal (lihat getViaCurl di bawah), dan
    // BPS ternyata sama. Diuji 14 Agustus 2026 pada bps.go.id/id/pressrelease:
    // fetch Node dijawab 403, curl dijawab 200 dengan 101 ribu byte. Akibat
    // sebelum fallback ini ada, semua foto siaran pers BPS gagal diambil dan
    // artikelnya jatuh ke ilustrasi, padahal halamannya bisa dibaca siapa pun
    // lewat peramban.
    if (r.status === 403) {
      try {
        const lewatCurl = ambilLewatCurl(url, Math.ceil(timeout / 1000) + 5);
        // Syaratnya status 2xx, BUKAN sekadar "badannya panjang". Sebelumnya
        // panjang > 500 dianggap cukup, dan halaman blokir 4.544 byte lolos
        // mentah-mentah lalu diserahkan ke pemanggil seolah-olah isi artikel.
        if (lewatCurl.status >= 200 && lewatCurl.status < 300 &&
            lewatCurl.badan && lewatCurl.badan.length > 500) {
          return lewatCurl.badan;
        }
      } catch { /* jatuh ke error 403 asli di bawah */ }
    }

    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return await r.text();
  } finally { clearTimeout(t); }
}

export async function getJSON(url, opts) { return JSON.parse(await get(url, opts)); }

// IDX menolak permintaan dari Node (fetch) dengan HTTP 403, padahal curl lolos
// memakai header yang sama persis. Kemungkinan mereka menyaring lewat sidik
// jari TLS, bukan header. Jadi khusus IDX kita pinjam curl.
export function getViaCurl(url, { timeout = 30 } = {}) {
  const r = curlBerstatus(url, timeout, [
    '-s',
    '-H', 'Accept: application/json, text/plain, */*',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
    // Referer diturunkan dari sasaran, bukan dipaku. Mengirim Referer
    // idx.co.id sambil mengambil idx.id itu tidak konsisten, dan justru
    // jenis ketidakcocokan yang diperiksa penyaring bot.
    '-H', 'Referer: ' + asalDari(url) + '/id/perusahaan-tercatat/keterbukaan-informasi/',
  ]);
  // Status disebut dalam pesannya, karena "403" dan "500" menuntut tindakan
  // yang berbeda: yang satu soal siapa kita di mata server, yang satu soal
  // servernya sendiri sedang rusak.
  if (r.status < 200 || r.status >= 300) {
    throw new Error('HTTP ' + r.status + ' dari curl: ' + url);
  }
  if (!r.badan || !r.badan.trim()) throw new Error('curl mengembalikan kosong: ' + url);
  return r.badan;
}

export function getJSONViaCurl(url, opts) { return JSON.parse(getViaCurl(url, opts)); }

// IDX memblokir IP pusat data (GitHub Actions) lebih ketat daripada koneksi
// rumahan: dari lokal 10/10 berhasil, dari runner langsung dibalas halaman
// HTML. Strategi bertingkat di bawah ini mencoba beberapa cara sebelum
// menyerah, karena kalau gagal semua maka kanal IDX berhenti total.
// Cookie jar PER HOST, dan di direktori sementara yang benar-benar ada.
//
// '/tmp' hardcoded tidak sah di Windows: curl menuliskannya ke akar drive
// yang sedang aktif. Dan satu jar untuk semua host membuat cookie idx.co.id
// mengotori sesi idx.id, dua domain yang bagi Cloudflare sama sekali berbeda.
const jarCookie = (asal) =>
  path.join(os.tmpdir(), 'idx-cookies-' +
    String(asal).replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') + '.txt');

// Asal (skema + host) dari URL sasaran. Semua yang berbau host di bawah
// diturunkan dari sini, bukan dari tetapan.
//
// Sejak pengambilan pindah ke www.idx.id, pemanasan sesi yang menembak
// www.idx.co.id menjadi mubazir sekaligus menyesatkan: cookie yang didapat
// berada di domain yang BUKAN domain yang diambil, jadi tangga percobaan ulang
// ambilIDX mengulang lima kali tanpa pernah membawa apa pun yang berguna.
const asalDari = (url) => {
  try { return new URL(url).origin; } catch { return 'https://www.idx.co.id'; }
};

function curlMentah(url, extra = []) {
  const asal = asalDari(url);
  return execFileSync('curl', [
    '-s', '-L', '--compressed', '--max-time', '40',
    '-A', UA,
    '-H', 'Accept: application/json, text/plain, */*',
    '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
    '-H', 'Referer: ' + asal + '/id/perusahaan-tercatat/keterbukaan-informasi/',
    '-c', jarCookie(asal), '-b', jarCookie(asal),
    ...extra, url,
  ], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

// Kunjungi dulu halaman biasa supaya dapat cookie sesi, seperti browser.
// Halaman yang dikunjungi berada di HOST YANG SAMA dengan yang akan diambil.
function panaskanSesi(url) {
  try {
    curlMentah(asalDari(url) + '/id/perusahaan-tercatat/keterbukaan-informasi/',
      ['-H', 'Accept: text/html,application/xhtml+xml']);
    return true;
  } catch { return false; }
}

const tidur = (ms) => { const s = Date.now(); while (Date.now() - s < ms) { /* jeda sinkron */ } };

// Bentuk balasan yang sah BERBEDA per endpoint, jadi pemanggil yang menentukan.
//
// Penjaga bawaannya menuntut j.Replies, dan itu benar untuk endpoint
// pengumuman. Tapi GetCompanyProfiles mengembalikan {draw, recordsTotal,
// recordsFiltered, data} dan tidak pernah punya medan Replies sama sekali.
// Sejak penjaga itu dipasang, panggilan daftar nama emiten SELALU ditolak,
// diulang lima kali, lalu gagal, dan pipeline jatuh ke cache lama tanpa ada
// yang tahu selain satu baris PERINGATAN di log lokal.
//
// Akibatnya terlihat di situs: assets/data/emiten.json beku di 962 nama sejak
// 10 Agustus 2026, dan delapan halaman emiten (BAFI, BSLT, PLTM, SANF, TAFS,
// WISL, XSGO, XTRA) tayang tanpa nama perusahaan karena kodenya belum ada di
// cache itu. Endpointnya sendiri sehat sepanjang waktu, di kedua host.
export async function ambilIDX(url, {
  percobaan = 5,
  sah = (j) => Array.isArray(j.Replies),
} = {}) {
  let terakhir = '';
  for (let i = 0; i < percobaan; i++) {
    // mulai percobaan kedua, panaskan sesi dulu
    if (i > 0) { panaskanSesi(url); await new Promise(r => setTimeout(r, 2000 * i)); }
    try {
      const teks = curlMentah(url);
      if (teks && teks.trimStart().startsWith('{')) {
        const j = JSON.parse(teks);
        // Balasan JSON yang sah belum tentu payload IDX. Cloudflare dan gateway
        // di depannya kadang menjawab dengan JSON kesalahan yang tetap lolos
        // pemeriksaan "diawali kurung kurawal". Dulu balasan seperti itu
        // diteruskan apa adanya, lalu `j.Replies || []` mengubahnya jadi nol
        // laporan, dan pipeline melaporkan "tidak ada aksi korporasi baru yang
        // layak diberitakan" dengan status hijau. Terjadi tiga putaran beruntun
        // pada 12 Agustus 2026: situs diam tiga kali tanpa satu pun tanda bahaya,
        // padahal API-nya sendiri sehat dan punya 215 laporan menunggu.
        // Tidak adanya Replies harus dihitung gagal supaya percobaan berikutnya
        // jalan dan, kalau tetap gagal, errornya terlihat.
        if (sah(j)) return j;
        terakhir = 'JSON sah tapi bentuknya bukan yang diharapkan endpoint ini';
      } else {
        terakhir = 'dibalas HTML, bukan JSON';
      }
    } catch (e) {
      terakhir = e.message.slice(0, 80);
    }
  }
  throw new Error('IDX menolak setelah ' + percobaan + ' percobaan (' + terakhir + '). ' +
    'Kemungkinan IP runner GitHub diblokir.');
}

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

// Pasangan readData untuk berkas yang isinya OBJEK, bukan array.
//
// readData sengaja tidak diubah supaya menerima keduanya. Kontraknya "harus
// array" itu yang menjaga arsip: kalau berkas rusak sebagian dan menghasilkan
// objek, readData berhenti, sedangkan pembaca serbaguna akan meloloskannya dan
// menulis balik arsip yang cacat. Jadi bentuk data yang berbeda dapat pembaca
// sendiri, bukan pelonggaran pada yang lama.
//
// Mengembalikan null kalau berkasnya belum ada, supaya pemanggil bisa
// membedakan "belum pernah ditarik" dari "ditarik tapi kosong".
export function readObjek(file) {
  const p = path.join(ROOT, 'assets/js', file);
  if (!fs.existsSync(p)) return null;

  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  if (i === -1 || j === -1) {
    throw new Error(file + ': tidak ditemukan objek data. Perbaiki manual sebelum lanjut.');
  }
  try {
    return JSON.parse(src.slice(i, j + 1));
  } catch (e) {
    throw new Error(file + ': isi tidak bisa dibaca (' + e.message.slice(0, 60) + ')');
  }
}

export function writeData(file, varName, data, comment) {
  const p = path.join(ROOT, 'assets/js', file);
  const out = (comment ? comment + '\n' : '') +
    'var ' + varName + ' = ' + JSON.stringify(data, null, 1) + ';\n';
  fs.writeFileSync(p, out, 'utf8');
}

// SELALU WIB, apa pun zona waktu mesin yang menjalankan.
//
// Versi lama memakai getDate() dan getMonth() yang mengikuti zona waktu mesin.
// Di komputer rumah itu kebetulan benar karena mesinnya memang WIB, tapi
// pembaruan harian berjalan di GitHub Actions yang memakai UTC. Akibatnya
// setiap artikel yang terbit antara tengah malam dan pukul 07.00 WIB tertulis
// mundur satu hari.
//
// Terlihat 13 Agustus 2026: berita MSCI terbit 06.04 WIB muncul di beranda
// bertanggal "12 Agustus 2026", sehingga situs tampak tidak pernah punya
// berita baru padahal arsipnya bertambah. Bug tanggal yang menyamar jadi bug
// isi, dan itu jenis yang paling lama tidak ketahuan.
// Sebagian stempel waktu tersimpan TANPA penanda zona, misalnya
// "2026-08-10T17:13:34" dari keterbukaan IDX. JavaScript menafsirkan string
// seperti itu sebagai waktu LOKAL MESIN, jadi string yang sama menghasilkan
// instan berbeda di komputer rumah (WIB) dan di runner GitHub (UTC). Itu
// sumber ketidakcocokan yang sebenarnya, bukan sekadar selisih tujuh jam.
//
// Semua sumber kita menerbitkan dalam waktu Indonesia, jadi stempel polos
// diperlakukan sebagai WIB secara eksplisit. Yang sudah membawa Z atau offset
// dibiarkan apa adanya karena sudah tidak ambigu.
export function keWaktu(iso) {
  const s = String(iso || '').trim();
  if (!s) return null;
  const adaZona = /(Z|[+-]\d{2}:?\d{2})$/.test(s);
  const d = new Date(adaZona ? s : s + '+07:00');
  return isNaN(d) ? null : d;
}

export function fmtTanggal(iso) {
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const d = keWaktu(iso);
  if (!d) return '';
  const wib = new Date(d.getTime() + 7 * 3600 * 1000);
  return wib.getUTCDate() + ' ' + B[wib.getUTCMonth()] + ' ' + wib.getUTCFullYear();
}

// fmtTanggalPanjang() dihapus 13 Agustus 2026. Tidak dipakai di mana pun, dan
// ia menggeser tanggal sendiri sebelum menyerahkannya ke fmtTanggal. Setelah
// fmtTanggal dibuat selalu WIB, pemanggilan itu akan tergeser dua kali dan
// menghasilkan tanggal yang salah. Dihapus, bukan diperbaiki, karena kode mati
// yang salah diam-diam lebih berbahaya daripada tidak ada sama sekali.
// Pembuat stempel waktu WIB yang dipakai ada di build-pages.mjs (tanggalWIB).

// "Selasa, 18 Agustus 2026". Dipakai bagian "yang menanti pekan depan" di
// halaman, email, dan Telegram sekaligus, karena tanggal mentah 2026-08-18
// memaksa pembaca menghitung sendiri itu hari apa, padahal seluruh guna
// bagian tersebut adalah menyiapkan pekan kerja.
//
// Iso diserahkan APA ADANYA ke fmtTanggal, jadi pergeseran WIB terjadi TEPAT
// SEKALI seperti di semua pemanggil lain. Nama hari dihitung dari salinan
// tergeser milik sendiri, bukan dari keluaran fmtTanggal, supaya tidak
// mengulang jebakan geser-dua-kali yang dulu membunuh fmtTanggalPanjang.
//
// Kalau tanggalnya tidak terbaca mesin, yang dikembalikan teks aslinya, bukan
// string kosong: lebih baik pembaca melihat apa adanya daripada satu baris
// agenda hilang tanpa jejak.
export function fmtTanggalHari(iso) {
  const H = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const s = String(iso == null ? '' : iso).trim();
  // Jam tengah malam ditambahkan dulu. keWaktu menyambung zona langsung ke
  // teksnya, dan '2026-08-24' + '+07:00' BUKAN ISO yang sah, jadi tanggal
  // telanjang selalu jadi Invalid Date lalu jatuh ke fallback tanpa suara.
  // Persis itu yang terjadi pada percobaan pertama: halaman tampil rapi
  // sementara email dan Telegram diam-diam tetap menampilkan 2026-08-24.
  // Tanggal di bagian "yang menanti" memang selalu telanjang.
  //
  // Diperbaiki di sini, bukan di keWaktu, karena keWaktu dipakai hampir
  // seluruh pipeline untuk stempel waktu artikel yang selalu lengkap;
  // melonggarkannya di sana mengubah perilaku belasan pemanggil sekaligus
  // demi satu kasus yang bisa ditangani di tempatnya sendiri.
  const penuh = /^\d{4}-\d{2}-\d{2}$/.test(s) ? s + 'T00:00:00' : s;
  const d = keWaktu(penuh);
  if (!d) return s;
  const wib = new Date(d.getTime() + 7 * 3600 * 1000);
  return H[wib.getUTCDay()] + ', ' + fmtTanggal(penuh);
}

export function idNum(n, dec = 2) {
  return Number(n).toLocaleString('id-ID', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

// Arah sebuah deret indikator: 'cenderung naik', 'cenderung turun', atau
// 'mendatar', dihitung dari BESAR perubahannya.
//
// MENGGANTI cara lama yang salah dan sempat dipakai di TIGA berkas sekaligus:
// mencacah berapa kali deret melangkah naik lawan berapa kali melangkah turun.
// Cara itu buta terhadap besaran, jadi deret yang merosot tipis tiga kali lalu
// melonjak dua kali dihitung "turun 3 lawan naik 2" walau berakhir jauh lebih
// tinggi. Nyatanya terjadi: nilai impor Januari 21.201,4 ke Juni 25.909,2, naik
// 22 persen, dilabeli "cenderung turun"; neraca perdagangan +954,3 ke -450,5,
// berbalik dari surplus ke defisit, dilabeli "cenderung naik". Label itu bukan
// cuma tampil di tabel email, tapi ikut disuapkan sebagai konteks ke perangkai
// edisi, jadi pembacaan arahnya berpijak pada keterangan yang terbalik.
//
// Yang dipakai sekarang rata-rata separuh awal lawan rata-rata separuh akhir,
// bukan titik pertama lawan titik terakhir, supaya satu bulan anomali di ujung
// tidak menentukan seluruh label.
//
// Ambangnya relatif terhadap rata-rata NILAI MUTLAK jendela, bukan terhadap
// nilai awal. Neraca perdagangan melewati nol, dan pembagi yang mendekati nol
// membuat perubahan sekecil apa pun tampak raksasa.
export function arahDeret(titik, n = 6) {
  const t = (titik || []).filter(x => x && Number.isFinite(Number(x.nilai))).slice(-n);
  if (t.length < 3) return { label: '', jumlah: t.length };
  const v = t.map(x => Number(x.nilai));
  const rata = a => a.reduce((s, x) => s + x, 0) / a.length;
  const separuh = Math.floor(v.length / 2);
  const selisih = rata(v.slice(-separuh)) - rata(v.slice(0, separuh));
  const skala = rata(v.map(Math.abs)) || 1;
  const label = Math.abs(selisih) < 0.02 * skala ? 'mendatar'
    : selisih > 0 ? 'cenderung naik' : 'cenderung turun';
  return { label, jumlah: t.length };
}
