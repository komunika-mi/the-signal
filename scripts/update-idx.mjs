// Pembaruan keterbukaan informasi IDX. Dijalankan tiap 2 jam pada jam bursa.
//
// Terpisah dari update-all.mjs supaya berita tvOne dan aksi korporasi punya
// jadwal sendiri, dan kalau salah satu bermasalah yang lain tetap jalan.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData, keWaktu, punyaAlat, alatLuar } from './lib.mjs';
import { ambilKeterbukaan, ambilIsiLampiran, ambilIsiSemuaLampiran, bacaAngkaKepemilikan } from './fetch-idx.mjs';
import { rangkumKeterbukaan, MODEL } from './rewrite.mjs';
import { pasangFoto } from './assign-images.mjs';
import { pastikanFotoArtikel } from './foto-artikel.mjs';

const TARGET = Number(process.env.IDX_TARGET || 8);      // aksi korporasi per putaran
const MAKS_KANDIDAT = Number(process.env.IDX_KANDIDAT || 25);
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

async function main() {
  log('=== The Signal: keterbukaan informasi IDX (model: ' + MODEL + ') ===');

  // Alat diperiksa DI DEPAN, sebelum satu pun laporan diunduh.
  //
  // Lampiran keterbukaan informasi seluruhnya PDF, jadi tanpa pdftotext tidak
  // ada satu pun laporan yang bisa dibaca dan seluruh putaran pasti nihil.
  // Sebelumnya hal itu baru ketahuan satu per satu di tengah jalan, sebagai
  // deretan pesan "lampiran gagal dibaca", lalu putaran berakhir dengan
  // kalimat "tidak ada aksi korporasi baru yang layak diberitakan" dan kode
  // keluar 0. Task Scheduler membacanya sebagai sukses.
  //
  // Akibatnya kanal ini mati tiga hari penuh, 11 sampai 13 Agustus 2026, tanpa
  // satu pun tanda bahaya. Yang menyadarinya pemilik situs, karena melihat
  // beritanya tidak berganti. Sekarang keadaan itu berhenti di sini, dengan
  // kode keluar bukan nol supaya penjadwal ikut menandainya merah.
  if (!punyaAlat('pdftotext')) {
    log('FATAL: pdftotext tidak ditemukan.');
    log('       Seluruh lampiran IDX berupa PDF, jadi tanpa alat ini putaran');
    log('       ini pasti nihil. Dihentikan supaya kegagalannya terlihat, bukan');
    log('       tersamar jadi "tidak ada berita baru".');
    log('       Di Windows biasanya ikut Git: C:\\Program Files\\Git\\mingw64\\bin');
    log('       Di Linux: sudo apt-get install -y poppler-utils');
    process.exit(1);
  }
  log('pdftotext: ' + alatLuar('pdftotext'));

  const artikelLama = readData('articles.js', 'ARTICLES');
  log('arsip saat ini: ' + artikelLama.length + ' artikel');

  // Sudah pernah diberitakan? Cocokkan lewat tautan sumber DAN kombinasi
  // emiten + judul, karena satu emiten bisa mengirim laporan sejenis berkali-kali.
  const sumberAda = new Set(artikelLama.map(a => a.sourceUrl));
  const sidikAda = new Set(artikelLama
    .filter(a => a.emiten)
    .map(a => a.emiten + '|' + String(a.title).replace(/[\[\]]/g, '').toLowerCase()));

  // JENDELA MENGIKUTI BOLONGNYA, bukan angka tetap.
  //
  // Kanal ini sengaja dijalankan dari komputer rumah, karena IDX memblokir IP
  // pusat data (diuji 14 Agustus 2026: 7 IP runner GitHub berbeda, 7 kali 403).
  // Konsekuensinya kanal ini hanya jalan saat laptopnya menyala, dan itu tidak
  // bisa diramalkan: bisa tiap hari, bisa libur seminggu.
  //
  // Jendela tetap selalu salah untuk keadaan seperti itu. Terlalu sempit dan
  // apa pun yang terlewat hilang selamanya, karena putaran berikutnya tidak
  // pernah menengok ke belakang. Terlalu lebar dan tiap putaran memuat ratusan
  // laporan lama yang sudah diberitakan.
  //
  // Jadi jendelanya dihitung dari BOLONG YANG SEBENARNYA: berapa hari sejak
  // artikel IDX terakhir di arsip. Laptop yang menyala tiap hari dapat jendela
  // 1 hari seperti biasa; laptop yang baru menyala setelah seminggu otomatis
  // dapat jendela seminggu dan mengejar semuanya pada putaran pertama, tanpa
  // ada yang perlu menyadari atau mengetik apa pun.
  //
  // Dibatasi 14 hari sebagai pagar kewajaran. Sejak pengambilnya membaca
  // per halaman (14 Agustus 2026), rentang panjang tidak lagi terpotong di
  // sisi IDX; batas ini tinggal mencegah putaran pertama setelah libur
  // panjang mengunyah ribuan laporan sekaligus. Bolong lebih lama dari dua
  // pekan memang layak dikejar tangan dengan SIGNAL_IDX_HARI.
  const HARI = (() => {
    const paksa = Number(process.env.SIGNAL_IDX_HARI || 0);
    if (paksa > 0) return paksa;
    const terakhirIDX = artikelLama
      .filter(a => a.sourceLabel === 'IDX' && a.isoDate)
      .map(a => keWaktu(a.isoDate))
      .filter(Boolean)
      .sort((x, y) => y - x)[0];
    if (!terakhirIDX) return 3;
    const selisih = Math.ceil((Date.now() - terakhirIDX.getTime()) / 86400000);
    // +1 supaya batas harinya tidak terpotong di tengah, minimal 1, maksimal 14.
    return Math.min(14, Math.max(1, selisih + 1));
  })();

  if (HARI > 1) {
    log('jendela ' + HARI + ' hari ke belakang (mengejar bolong sejak artikel IDX terakhir)');
  }
  // Jatah kandidat dipotong SETELAH buang yang sudah diberitakan, bukan
  // sebelum. Versi lama memotong di dalam ambilKeterbukaan, sehingga laporan
  // yang sudah tayang ikut menghabiskan jatah dan kandidat segar di belakang
  // antrean tidak pernah kebagian tempat pada putaran-putaran lanjutan di
  // hari yang sama.
  const kandidat = (await ambilKeterbukaan({ maks: MAKS_KANDIDAT * 4, hariKeBelakang: HARI }))
    .filter(k => !k.lampiran || !sumberAda.has(k.lampiran))
    .slice(0, MAKS_KANDIDAT);

  log('kandidat setelah buang yang sudah ada: ' + kandidat.length);

  const baru = [];
  let gagalError = 0, ditolak = 0, dilewatiDokumen = 0, errorTerakhir = '';

  for (const k of kandidat) {
    if (baru.length >= TARGET) break;
    try {
      // Baca isi PDF-nya. Kalau GAGAL, laporan ini DILEWATI, bukan ditulis
      // tipis dari judul saja.
      //
      // Dulu kegagalan baca tetap diterbitkan dan hasilnya memalukan: muncul
      // judul "AVIA Rilis Siaran Pers, Isi Dokumen Belum Bisa Dibaca" dengan
      // badan berita yang mengaku "rinciannya belum diketahui". Itu bukan
      // berita, dan pembaca tidak dapat apa-apa. Padahal dokumennya sendiri
      // baik-baik saja, cuma satu unduhan yang kena tantangan Cloudflare.
      //
      // Aturannya kini DIBEDAKAN menurut jenis kegagalannya (perintah
      // pemilik 14 Agustus 2026: laporan tidak boleh hilang begitu saja).
      //
      //   SEMENTARA - unduhan diblokir/gagal. Tetap DILEWATI: laporan jadi
      //               kandidat lagi 2 jam kemudian dan biasanya terbaca.
      //               Menerbitkan sekarang mengulang kasus AVIA: "Isi Dokumen
      //               Belum Bisa Dibaca" padahal dokumennya baik-baik saja.
      //   PERMANEN  - seluruh lampiran pindaian yang OCR-nya pun gagal, atau
      //               berformat non-PDF. Menunggu tidak akan mengubah apa pun,
      //               jadi TETAP TERBIT dari judul + perihal resmi, dengan
      //               kejujuran penuh bahwa isi dokumennya belum terbaca
      //               mesin dan tautan dokumen asli tersedia bagi pembaca.
      const jejakLampiran = {};
      k.isiDokumen = ambilIsiSemuaLampiran(k.lampiranSemua || k.lampiran, { jejak: jejakLampiran });
      if (!k.isiDokumen) {
        const permanen = (jejakLampiran.pindaian || 0) + (jejakLampiran.lain || 0) > 0 &&
          !(jejakLampiran.diblokir || 0);
        if (!permanen) {
          dilewatiDokumen++;
          log('  LEWATI ' + (k.emiten || '----') + ': lampiran tidak terbaca (sementara), dicoba lagi putaran depan');
          continue;
        }
        log('  ' + (k.emiten || '----') + ': seluruh lampiran tidak terbaca mesin (permanen), tetap diberitakan dari judul+perihal');
        k.isiDokumen = '[SELURUH LAMPIRAN TIDAK TERBACA MESIN: ' +
          (jejakLampiran.pindaian ? jejakLampiran.pindaian + ' PDF pindaian yang gagal di-OCR' : '') +
          (jejakLampiran.pindaian && jejakLampiran.lain ? ' dan ' : '') +
          (jejakLampiran.lain ? jejakLampiran.lain + ' berkas non-PDF' : '') +
          '. Tulis berita HANYA dari judul dan perihal resmi di atas. Sebutkan terang di badan ' +
          'berita bahwa rincian dokumen belum terbaca otomatis dan pembaca bisa membuka dokumen ' +
          'aslinya lewat tautan IDX. JANGAN mengarang angka, nama, tanggal, atau rincian apa pun.]';
      }
      k.angka = k.isiDokumen ? bacaAngkaKepemilikan(k.isiDokumen) : null;
      if (k.isiDokumen) {
        // persenDariKepemilikan bisa null kalau kepemilikan awal 0, misalnya
        // pembelian perdana. Jangan panggil toFixed() tanpa memeriksa dulu.
        const p = k.angka && k.angka.persenDariKepemilikan !== null
          ? ' (' + k.angka.persenDariKepemilikan.toFixed(3) + '% kepemilikan)' : '';
        log('  dokumen terbaca: ' + k.isiDokumen.length + ' karakter' +
          (k.angka ? ' | ' + k.angka.arah + ' ' +
            Math.abs(k.angka.selisih).toLocaleString('id-ID') + ' lembar' + p : ''));
      }

      // Riwayat emiten: artikel kami tentang emiten yang sama, 7 hari
      // terakhir, dari arsip DAN dari artikel yang baru ditulis di putaran
      // ini juga. Yang kedua penting: lima laporan SUPA yang terbit dalam
      // rentang 14 menit tidak akan saling melihat kalau riwayatnya cuma
      // membaca arsip lama. Tanpa blok ini tiap laporan dinilai sendirian,
      // dan lima laporan dari program insentif yang sama pernah terbit
      // sebagai lima artikel netral terpisah tanpa satu pun menyebut total
      // gabungannya.
      //
      // CATATAN JUJUR: penambahan pertama kode ini GAGAL DIAM-DIAM. Skrip
      // penyuntingnya berhenti di berkas lain sebelum sampai ke sini, aturan
      // RIWAYAT EMITEN di prompt sempat jadi kode mati, dan yang menangkapnya
      // verifikator independen, bukan penulisnya. Kalau mengubah kontrak
      // antara dua berkas, periksa KEDUA sisinya terpasang.
      k.riwayat = [...baru, ...artikelLama]
        .filter(x => x.emiten && k.emiten && x.emiten === k.emiten)
        .filter(x => {
          const t = new Date(x.isoDate || 0).getTime();
          return t && (Date.now() - t) < 7 * 86400000;
        })
        .slice(0, 6)
        .map(x => ({
          tanggal: String(x.isoDate || '').slice(0, 10),
          judul: String(x.title || '').replace(/[\[\]]/g, ''),
          sentimen: x.sentimen || '',
          inti: String(x.takeaway || '').slice(0, 180),
        }));
      if (k.riwayat.length) {
        log('  riwayat emiten ' + k.emiten + ': ' + k.riwayat.length + ' artikel 7 hari terakhir');
      }

      const hasil = await rangkumKeterbukaan(k);
      if (!hasil) { ditolak++; log('  ditolak: ' + (k.emiten || '----') + ' ' + k.judulAsli.slice(0, 48)); continue; }

      const sidik = hasil.emiten + '|' + hasil.title.replace(/[\[\]]/g, '').toLowerCase();
      if (sidikAda.has(sidik) || baru.some(b => b.slug === hasil.slug)) {
        ditolak++; log('  lewati (kembar): ' + hasil.slug.slice(0, 50)); continue;
      }
      sidikAda.add(sidik);
      baru.push(hasil);
      log('  + ' + (hasil.emiten || '----').padEnd(5) + ' ' + hasil.title.replace(/[\[\]]/g, '').slice(0, 52));
    } catch (e) {
      gagalError++;
      errorTerakhir = e.message.slice(0, 200);
      log('  GAGAL: ' + (k.emiten || '----') + ' -> ' + e.message.slice(0, 70));
    }
  }

  // Jangan biarkan kegagalan teknis lolos jadi "sukses" (lihat catatan di update-all.mjs)
  if (kandidat.length && !baru.length && gagalError) {
    log('');
    log('FATAL: ' + gagalError + ' dari ' + kandidat.length + ' kandidat gagal karena error teknis.');
    log('       Error terakhir: ' + errorTerakhir);
    if (/not logged in|unauthor|401|invalid.*token|api key/i.test(errorTerakhir)) {
      log('       DUGAAN: CLAUDE_CODE_OAUTH_TOKEN belum diset atau sudah kedaluwarsa.');
    }
    process.exit(1);
  }

  if (!baru.length) {
    log('tidak ada aksi korporasi baru yang layak diberitakan putaran ini');
    log('=== selesai (tanpa perubahan) ===');
    return;
  }

  const semua = [...baru, ...artikelLama]
    // keWaktu(), bukan new Date() langsung: stempel tanpa penanda zona
    // ditafsirkan sebagai waktu lokal mesin, sehingga urutan artikel bisa
    // berbeda antara komputer rumah (WIB) dan runner GitHub (UTC).
    .sort((a, b) => (keWaktu(b.isoDate) || 0) - (keWaktu(a.isoDate) || 0));

  // Lihat catatan di update-all.mjs: foto dibuat per artikel supaya tidak
  // mungkin berulang. Batasnya lebih kecil di sini karena putaran IDX jalan
  // tiap 2 jam dan artikel barunya sedikit.
  await pastikanFotoArtikel(semua, { maksBaru: Number(process.env.SIGNAL_FOTO_MAKS || 15) });

  pasangFoto(semua);
  writeData('articles.js', 'ARTICLES', semua,
    '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
    '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
    '// Dibuat otomatis - jangan diedit manual.');

  if (dilewatiDokumen) log('CATATAN: ' + dilewatiDokumen + ' laporan dilewati karena lampirannya tidak terbaca; akan dicoba lagi putaran berikutnya');
  log('arsip baru: ' + semua.length + ' artikel (+' + baru.length + ' aksi korporasi)');
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  log('=== selesai ===');
}

main().catch(e => { console.error(e); process.exit(1); });
