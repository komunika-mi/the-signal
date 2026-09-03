// Orkestrator harian The Signal.
//   1. ambil berita ekonomi terbaru dari tvOneNews
//   2. rangkum ulang pakai Claude (bukan salinan)
//   3. ambil + saring video ekonomi dari YouTube tvOneNews
//   4. perbarui data pasar (IHSG, USD/IDR, emas, Bitcoin)
//   5. pasang foto, tulis data, bangun ulang halaman statis
//
// Aman diulang: artikel yang sudah ada tidak diproses dua kali.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData , keWaktu } from './lib.mjs';
import { ambilDaftarBerita, ambilIsiArtikel } from './fetch-news.mjs';
import { ambilBeritaPemerintah } from './fetch-gov.mjs';
import { ambilVideo } from './fetch-videos.mjs';
import { rangkumArtikel, saringVideo, MODEL } from './rewrite.mjs';
import { pasangFoto } from './assign-images.mjs';
import { pastikanFotoArtikel } from './foto-artikel.mjs';

const TARGET_BARU = Number(process.env.SIGNAL_TARGET || 10);   // berita baru per hari
const MAKS_KANDIDAT = Number(process.env.SIGNAL_KANDIDAT || 25);
// TIDAK ADA LAGI PEMANGKASAN ARSIP.
//
// Dulu di sini ada .slice(0, MAKS_ARSIP) yang membuang artikel tertua tiap
// kali ada yang baru. Itu bukan menyembunyikan, melainkan MENGHAPUS: berkas
// HTML-nya dibuang pembersih halaman yatim, hilang dari sitemap, dan URL-nya
// jadi 404. Diperiksa 19 Agustus 2026, tiga artikel yang tergeser lebih lama
// semuanya dibalas 404 oleh situs. 38 artikel sudah mati begitu.
//
// Untuk situs berita itu tidak bisa dibenarkan. Artikel yang sudah terbit
// punya pembaca, punya tautan masuk, dan sudah diindeks. Menghapusnya diam-
// diam bertentangan dengan pedoman media siber yang tayang di situs ini
// sendiri, yang menjanjikan kekeliruan DIRALAT di artikel yang sama, bukan
// artikelnya dilenyapkan.
//
// Yang benar-benar mahal bukan menyimpan artikelnya, melainkan MENYAJIKAN
// semuanya sekaligus. Jadi batasnya pindah ke tiap konsumen: indeks yang
// diunduh peramban, halaman arsip yang kini berhalaman, dan indeks bot.
// articles.js sendiri boleh tumbuh, karena ia cuma dibaca saat build dan
// tidak pernah dimuat peramban.
const MAKS_VIDEO = 12;
// Kanal pemerintah. Dijaga kecil supaya siaran pers tidak menenggelamkan
// berita biasa, dan supaya tiap putaran 2 jam tetap cepat.
// Kuota kanal pemerintah. Dinaikkan 13 Agustus 2026 seiring bertambahnya
// sumber jadi lima (BI, Kemendag, Kemenperin, BPS, ESDM): dengan jatah lama 4
// artikel per putaran, satu sumber yang sedang ramai bisa menghabiskan seluruh
// jatah dan sumber lain tidak pernah kebagian.
//
// 8 -> 20 pada 2 September 2026, bersamaan dengan kanal naik dari 4 ke 20
// lembaga. Menambah sumber tanpa menaikkan angka ini tidak ada gunanya:
// pasokan kandidat naik dari sekitar 8 menjadi 38 per putaran, dan angka 8
// berubah dari batas yang jarang tersentuh menjadi sumbat yang mengikat tiap
// putaran. Situs tetap terbit sebanyak sebelumnya, dan seluruh kerja menambah
// sumber tidak terlihat di halaman.
//
// Angka 20 sengaja lebih besar daripada yang biasanya sempat ditulis dalam
// satu putaran. Yang menjadi pengatur sesungguhnya BATAS_MENIT di bawah: ia
// berhenti sendiri saat waktu habis dan tetap menyimpan yang sudah jadi.
// Membiarkan waktu yang mengatur lebih baik daripada angka tetap, karena
// putaran yang sepi jadi cepat selesai dan putaran yang ramai memakai seluruh
// jatahnya.
const TARGET_GOV = Number(process.env.SIGNAL_GOV || 20);

// Batas waktu putaran, SENGAJA lebih ketat daripada pagar langkah GitHub.
//
// Bukan pengaman terhadap kemacetan - ini pengaman terhadap KEHILANGAN
// HASIL. Pagar langkah membunuh prosesnya, dan proses yang dibunuh tidak
// sempat menulis apa pun; 35 putaran pada 19-22 Agustus 2026 masing-masing
// menulis 14 artikel dengan benar lalu membuang semuanya. Batas ini
// membuat putaran berhenti SENDIRI selagi masih sempat menyimpan.
//
// Naikkan hanya bersama pagar langkah di daily.yml, jangan sendirian.
//
// 10 -> 13 pada 2 September 2026. Inilah yang sebenarnya menentukan berapa
// artikel terbit tiap putaran, jadi menaikkan TARGET_GOV tanpa menaikkan ini
// cuma memindahkan sumbat, bukan membukanya.
//
// Pagar langkahnya ikut naik 16 -> 20 di daily.yml pada commit yang sama,
// menjaga jarak yang sudah tertulis di sana: batas ini, ditambah satu artikel
// yang terlanjur mulai, ditambah tahap simpan-dan-bangun, harus tetap muat di
// dalam pagar langkah. 13 + ~1,5 + ~2 = ~16,5 di dalam 20.
const BATAS_MENIT = Number(process.env.SIGNAL_MENIT || 13);
const MULAI = Date.now();
const lewatBatas = () => (Date.now() - MULAI) > BATAS_MENIT * 60000;
// 4 -> 2, diturunkan 2 September 2026 bersamaan dengan bertambahnya kanal
// pemerintah dari 4 menjadi 20.
//
// Angka ini dikalikan JUMLAH SUMBER, dan hasilnya adalah unduhan halaman
// artikel yang dilakukan SEBELUM satu pun artikel ditulis. Dibiarkan 4, dua
// puluh sumber berarti 80 unduhan per putaran; ongkos itu dibayar penuh
// walau TARGET_GOV cuma memakai 8 di antaranya, dan ia memakan jatah waktu
// yang seharusnya dipakai menulis.
//
// 2 x 20 = 40 kandidat untuk 8 slot, masih lima kali lipat pasokan yang
// dibutuhkan. Kehilangan kedalaman per sumber juga kecil karena daily.yml
// kini berjalan 12 kali sehari: sumber yang menerbitkan lebih dari dua
// tulisan sehari tetap terkejar pada putaran berikutnya.
//
// Diukur: seluruh pengambilan DAFTAR untuk 20 sumber makan 23,5 detik.
const MAKS_GOV_PER_SUMBER = 2;

function tanggalWIB() {
  const H = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const w = new Date(Date.now() + 7 * 3600 * 1000);
  return H[w.getUTCDay()] + ', ' + w.getUTCDate() + ' ' + B[w.getUTCMonth()] + ' ' + w.getUTCFullYear() +
    ' &middot; ' + String(w.getUTCHours()).padStart(2, '0') + '.' + String(w.getUTCMinutes()).padStart(2, '0') + ' WIB';
}

async function main() {
  log('=== The Signal: pembaruan harian dimulai (model: ' + MODEL + ') ===');

  const artikelLama = readData('articles.js', 'ARTICLES');
  const videoLama = readData('videos.js', 'VIDEOS');
  log('arsip saat ini: ' + artikelLama.length + ' artikel, ' + videoLama.length + ' video');

  // ---------- 1-2. berita ----------
  const sudahAda = new Set(artikelLama.map(a => a.sourceUrl));
  const kandidat = (await ambilDaftarBerita(MAKS_KANDIDAT)).filter(k => !sudahAda.has(k.url));
  log('kandidat berita baru: ' + kandidat.length);

  const artikelBaru = [];
  let dipotongWaktu = false;  // batas waktu tercapai, bukan kehabisan kandidat
  let gagalError = 0;         // gagal karena error teknis (token, jaringan, dll)
  let ditolakEditor = 0;      // sengaja ditolak Claude atau isinya tipis
  let errorTerakhir = '';

  for (const k of kandidat) {
    if (artikelBaru.length >= TARGET_BARU) break;
    if (lewatBatas()) {
      dipotongWaktu = true;
      log('  batas waktu ' + BATAS_MENIT + ' menit tercapai, sisa kandidat ditunda');
      break;
    }
    try {
      const bahan = await ambilIsiArtikel(k);

      // Tipis diukur dari JUMLAH HURUF, bukan cuma jumlah paragraf.
      //
      // Jumlah paragraf bergantung pada markup sumber, dan markup sumber bukan
      // milik kita. Pada 14 Agustus 2026 tvOne menaruh seluruh badan berita di
      // satu tag <p> dengan pemisah <br>, sehingga artikel 2.789 huruf terbaca
      // sebagai SATU paragraf lalu ditolak di sini. Berita berhenti terbit
      // seharian, dan yang menyadarinya pemilik situs.
      //
      // Pemisah <br> sudah ditangani di fetch-news.mjs, tapi itu memperbaiki
      // satu bentuk markup saja. Jumlah huruf tidak bergantung bentuk apa pun,
      // jadi dipakai sebagai jaring kedua: artikel yang isinya panjang tetap
      // lolos meski penghitung paragrafnya gagal lagi oleh bentuk markup yang
      // belum pernah kita lihat.
      const jumlahHuruf = String(bahan.isi || '').length;
      if (bahan.jumlahParagraf < 3 && jumlahHuruf < 900) {
        ditolakEditor++;
        log('  lewati (isi tipis): ' + bahan.jumlahParagraf + ' paragraf, ' +
          jumlahHuruf + ' huruf | ' + k.judulAsli.slice(0, 44));
        continue;
      }
      if (bahan.jumlahParagraf < 3) {
        log('  paragraf sedikit (' + bahan.jumlahParagraf + ') tapi isi ' +
          jumlahHuruf + ' huruf, tetap diproses');
      }
      const hasil = await rangkumArtikel(bahan);
      if (!hasil) { ditolakEditor++; log('  ditolak Claude: ' + k.judulAsli.slice(0, 50)); continue; }
      if (artikelLama.some(a => a.slug === hasil.slug) || artikelBaru.some(a => a.slug === hasil.slug)) {
        ditolakEditor++; log('  lewati (slug kembar): ' + hasil.slug); continue;
      }
      artikelBaru.push(hasil);
      log('  + ' + hasil.category + ' | ' + hasil.title.replace(/[\[\]]/g, '').slice(0, 55));
    } catch (e) {
      gagalError++;
      errorTerakhir = e.message.slice(0, 200);
      log('  GAGAL: ' + k.judulAsli.slice(0, 45) + ' -> ' + e.message.slice(0, 80));
    }
  }

  // ---------- kanal pemerintah ----------
  // Siaran pers kementerian dan BI adalah SUMBER PRIMER, sama seperti
  // keterbukaan IDX, jadi di sinilah The Signal bisa membaca arah kebijakan
  // lebih awal ketimbang menunggu media lain merangkumnya.
  //
  // Sengaja TIDAK menggagalkan putaran kalau kanal ini bermasalah: situs
  // pemerintah sering berubah struktur, dan itu tidak boleh ikut menjatuhkan
  // berita tvOne yang sudah jalan.
  try {
    // Diperiksa SEBELUM mengambil daftarnya: menjelajah lima situs
    // pemerintah sendiri makan sekitar satu menit, dan itu percuma kalau
    // tidak ada waktu tersisa untuk menulis satu pun hasilnya.
    if (lewatBatas()) {
      dipotongWaktu = true;
      log('kanal pemerintah dilewati: batas waktu sudah tercapai');
      throw new Error('__lewati__');
    }
    const gov = (await ambilBeritaPemerintah({ perSumber: MAKS_GOV_PER_SUMBER }))
      .filter(g => !sudahAda.has(g.url));

    for (const g of gov) {
      if (artikelBaru.length >= TARGET_BARU + TARGET_GOV) break;
      if (lewatBatas()) { dipotongWaktu = true; break; }
      try {
        const hasil = await rangkumArtikel(g, { pemerintah: true });
        if (!hasil) { log('  ditolak (seremonial): ' + g.judulAsli.slice(0, 46)); continue; }
        if (artikelLama.some(a => a.slug === hasil.slug) || artikelBaru.some(a => a.slug === hasil.slug)) continue;
        artikelBaru.push(hasil);
        log('  + [' + g.lembaga + '] ' + hasil.title.replace(/[\[\]]/g, '').slice(0, 46));
      } catch (e) {
        log('  GAGAL ' + g.lembaga + ': ' + String(e.message).slice(0, 60));
      }
    }
  } catch (e) {
    // '__lewati__' bukan kerusakan, itu keputusan sadar di atas. Kalau
    // dilaporkan sebagai PERINGATAN, ia akan terbaca seperti situs
    // pemerintah yang rusak dan menyesatkan siapa pun yang membaca log.
    if (String(e.message) !== '__lewati__') {
      log('PERINGATAN: kanal pemerintah dilewati -> ' + String(e.message).slice(0, 70));
    }
  }

  // Kegagalan diam-diam itu bahaya untuk job yang jalan tanpa diawasi.
  // Kalau ADA kandidat tapi semuanya gagal karena error teknis (bukan ditolak
  // editor), hentikan dengan status gagal supaya kelihatan di GitHub Actions.
  if (kandidat.length && !artikelBaru.length && gagalError) {
    log('');
    log('FATAL: ' + gagalError + ' dari ' + kandidat.length + ' kandidat gagal karena error teknis,');
    log('       dan tidak ada satu pun artikel yang berhasil dibuat.');
    log('       Error terakhir: ' + errorTerakhir);
    if (/not logged in|unauthor|401|invalid.*token|api key/i.test(errorTerakhir)) {
      log('       DUGAAN: CLAUDE_CODE_OAUTH_TOKEN belum diset atau sudah kedaluwarsa.');
      log('       Perbaiki: jalankan `claude setup-token`, lalu simpan sebagai secret repo.');
    }
    process.exit(1);
  }

  // Sebabnya disebut apa adanya. Kalau putaran dipotong batas waktu,
  // menuliskan "semua kandidat ditolak editor" itu keliru dan menyesatkan
  // siapa pun yang membaca log untuk mencari kerusakan.
  if (!artikelBaru.length && !dipotongWaktu) {
    log('PERINGATAN: tidak ada artikel baru hari ini (semua kandidat ditolak editor)');
  }
  // Dibedakan dengan sengaja. "Cuma dapat 4 dari 10" karena kandidatnya
  // habis itu keadaan normal; karena waktunya habis itu keadaan yang
  // menyisakan tunggakan, dan pembaca log perlu tahu bedanya.
  if (dipotongWaktu) {
    log('BATAS WAKTU: putaran dipotong di menit ' + BATAS_MENIT + ' dengan ' +
      artikelBaru.length + ' artikel SUDAH DISIMPAN. Sisanya diambil putaran berikutnya.');
  } else if (artikelBaru.length && artikelBaru.length < TARGET_BARU) {
    log('CATATAN: hanya dapat ' + artikelBaru.length + ' dari target ' + TARGET_BARU + ' artikel');
  }

  // ---------- 3. video ----------
  let videoGabung = videoLama;
  try {
    const kandidatVideo = await ambilVideo();
    const idLama = new Set(videoLama.map(v => v.id));
    const belumAda = kandidatVideo.filter(v => !idLama.has(v.id));
    if (belumAda.length) {
      const lolos = await saringVideo(belumAda);
      log('video baru lolos saringan: ' + lolos.length);
      videoGabung = [...lolos, ...videoLama].slice(0, MAKS_VIDEO);
    } else {
      log('tidak ada video baru sejak pembaruan terakhir');
    }
  } catch (e) {
    log('PERINGATAN: gagal memperbarui video -> ' + e.message.slice(0, 80));
  }

  // ---------- 4. pasar ----------
  // Data pasar TIDAK diperbarui di sini lagi. Pemiliknya sekarang
  // .github/workflows/pasar.yml yang jalan tiap 30 menit saat bursa buka.
  // Kalau dua job sama-sama menulis market.js, keduanya push dan bentrok.
  const pasar = bacaPasar();

  // ---------- 5. simpan + bangun ----------
  const semua = [...artikelBaru, ...artikelLama]
    // keWaktu(), bukan new Date() langsung: stempel tanpa penanda zona
    // ditafsirkan sebagai waktu lokal mesin, sehingga urutan artikel bisa
    // berbeda antara komputer rumah (WIB) dan runner GitHub (UTC).
    .sort((a, b) => (keWaktu(b.isoDate) || 0) - (keWaktu(a.isoDate) || 0));

  // Buat foto khusus untuk artikel yang belum punya, SEBELUM penempatan.
  // Inilah yang membuat foto tidak berulang: tiap artikel dapat berkas
  // bernama slug-nya sendiri. Dibatasi per putaran supaya satu pembaruan
  // tidak berjam-jam, sisanya diambil putaran berikutnya.
  await pastikanFotoArtikel(semua, { maksBaru: Number(process.env.SIGNAL_FOTO_MAKS || 25) });

  pasangFoto(semua);

  writeData('articles.js', 'ARTICLES', semua,
    '// Rangkuman editorial The Signal dari tvOneNews.com/ekonomi. Bukan salinan artikel asli.\n' +
    '// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.');
  writeData('videos.js', 'VIDEOS', videoGabung,
    '// Video ekonomi dari kanal YouTube resmi tvOneNews, dikurasi otomatis.\n' +
    '// Dibuat otomatis oleh scripts/update-all.mjs - jangan diedit manual.');
  if (pasar) tulisPasar(pasar);

  log('arsip baru: ' + semua.length + ' artikel, ' + videoGabung.length + ' video');

  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  log('=== selesai ===');
}

function bacaPasar() {
  const p = ROOT + '/assets/js/market.js';
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  if (i === -1) return null;
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}

function tulisPasar(p) {
  fs.writeFileSync(ROOT + '/assets/js/market.js',
    '// Data pasar harian. Dibuat otomatis - jangan diedit manual.\n' +
    'var MARKET = ' + JSON.stringify(p, null, 1) + ';\n', 'utf8');
}

main().catch(e => { console.error(e); process.exit(1); });
