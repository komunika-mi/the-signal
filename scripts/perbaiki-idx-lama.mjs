// Tulis ulang berita IDX lama yang dibuat sebelum pipeline bisa membaca PDF.
//
// Artikel lama hanya punya judul dan perihal sebagai bahan, sehingga isinya
// tipis dan beberapa bahkan menjanjikan "The Signal akan menelusuri isi
// lengkap dokumen" yang tidak pernah ditepati. Sekarang lampirannya bisa
// dibaca, jadi janji itu bisa dilunasi.
//
// SLUG SENGAJA DIPERTAHANKAN. Judul boleh berubah mengikuti isi dokumen yang
// baru terbaca, tapi alamat halamannya tidak, supaya tautan yang sudah
// terlanjur dibagikan tidak mati dan sitemap tidak penuh halaman yatim.
//
// Sekali jalan saja. Setelah semua artikel punya field "sentimen",
// script ini tidak melakukan apa-apa.
//
// Pakai:
//   node scripts/perbaiki-idx-lama.mjs           (semua yang belum diperbaiki)
//   node scripts/perbaiki-idx-lama.mjs 5         (batasi 5, untuk mencoba dulu)
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData } from './lib.mjs';
import { ambilIsiLampiran, ambilIsiSemuaLampiran, bacaAngkaKepemilikan } from './fetch-idx.mjs';
import { rangkumKeterbukaan } from './rewrite.mjs';

const batas = parseInt(process.argv[2] || '0', 10) || Infinity;

async function main() {
  const semua = readData('articles.js', 'ARTICLES');

  // Dua golongan yang perlu ditulis ulang:
  // 1. dibuat sebelum pipeline bisa membaca PDF sama sekali (tanpa "sentimen")
  // 2. sudah lewat jalur baru TAPI lampirannya gagal diunduh saat itu, biasanya
  //    karena IDX membalas halaman tantangan Cloudflare. Artikelnya jadi
  //    mengaku sendiri bahwa rinciannya belum terbaca. Golongan ini punya
  //    "sentimen" sehingga lolos dari saringan lama.
  const MENGAKU_KOSONG = /belum terbaca|belum terungkap|tidak terbaca|belum dapat dipastikan|belum diperoleh|baru berupa judul|dokumen lengkap|belum bisa dibaca|belum berhasil diekstraksi|tidak berhasil dibaca|rinciannya belum diketahui/i;
  const perlu = semua.filter(a =>
    a.sourceLabel === 'IDX' && /\.pdf/i.test(a.sourceUrl || '') &&
    (!a.sentimen || MENGAKU_KOSONG.test(a.title + JSON.stringify(a.body) + a.takeaway)));

  log('artikel IDX yang isinya belum lengkap: ' + perlu.length);
  if (!perlu.length) { log('tidak ada yang perlu diperbaiki'); return; }

  let sukses = 0, gagal = 0, dilewati = 0;

  for (const lama of perlu.slice(0, batas)) {
    const tanda = (lama.emiten || '----').padEnd(5);
    try {
      const isiDokumen = ambilIsiSemuaLampiran(lama.sourceUrl);
      if (!isiDokumen) { dilewati++; log('  lewati ' + tanda + ' lampiran tidak terbaca'); continue; }

      const baru = await rangkumKeterbukaan({
        emiten: lama.emiten,
        namaEmiten: '',
        // Judul artikel lama dipakai sebagai petunjuk jenis laporan saja.
        // Bahan utamanya tetap isi dokumen.
        judulAsli: String(lama.title).replace(/[\[\]]/g, ''),
        perihal: '',
        terbit: lama.isoDate,
        lampiran: lama.sourceUrl,
        isiDokumen,
        angka: bacaAngkaKepemilikan(isiDokumen),
      }, { sudahTerbit: true });

      // Dengan sudahTerbit, penolakan seharusnya tidak terjadi lagi. Kalau
      // tetap terjadi, biarkan versi lama daripada mengosongkan artikel.
      if (!baru) { dilewati++; log('  lewati ' + tanda + ' tetap ditolak editor'); continue; }

      // Yang boleh berubah: judul, deck, isi, catatan, sentimen, tag.
      // Yang WAJIB tetap: slug, tanggal, foto.
      Object.assign(lama, {
        title: baru.title,
        deck: baru.deck,
        body: baru.body,
        takeaway: baru.takeaway,
        sentimen: baru.sentimen,
        tags: baru.tags,
      });

      sukses++;
      log('  + ' + tanda + ' [' + baru.sentimen + '] ' + baru.title.replace(/[\[\]]/g, '').slice(0, 50));
    } catch (e) {
      gagal++;
      log('  GAGAL ' + tanda + ' -> ' + e.message.slice(0, 70));
    }
  }

  if (!sukses) { log('tidak ada yang berhasil diperbaiki, berkas tidak diubah'); process.exit(gagal ? 1 : 0); }

  writeData('articles.js', 'ARTICLES', semua,
    '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
    '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
    '// Dibuat otomatis - jangan diedit manual.');

  log('');
  log('diperbaiki ' + sukses + ', dilewati ' + dilewati + ', gagal ' + gagal);
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
}

main().catch(e => { console.error(e); process.exit(1); });
