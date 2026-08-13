// Menjaga agar tidak ada dua artikel yang menampilkan GAMBAR YANG SAMA.
//
// Kenapa ini terpisah dari nama berkas: nama berkas sudah dijamin unik karena
// mengikuti slug artikel, dan itu memang menutup satu jalur pengulangan, yaitu
// dua artikel menunjuk berkas yang sama. Tapi ada jalur kedua yang tidak
// tertutup: dua berkas berbeda nama yang ISINYA persis sama.
//
// Terjadi dan terukur pada 13 Agustus 2026. Audit seluruh arsip menemukan 9
// pasang artikel dengan gambar identik byte-per-byte, semuanya karena redaksi
// sumber memakai ulang satu foto stok untuk beberapa berita bertema sama:
//   - dua berita harga emas Antam, foto batangan emas yang sama
//   - dua berita pelemahan rupiah, foto tumpukan uang yang sama
//   - dua berita pembatasan Pertalite, foto SPBU yang sama
// Dari sisi pembaca ini tetap foto berulang. Pemilik situs menyatakan berkali
// kali tidak mau ada foto berulang, jadi jalur ini harus ikut ditutup.
//
// Cara kerjanya: sidik jari MD5 tiap berkas foto disimpan dalam satu peta.
// Sebelum sebuah foto dipasang untuk artikel, sidiknya dicocokkan. Kalau sudah
// dipakai artikel lain, foto itu ditolak dan pemanggil mencoba kandidat
// berikutnya, atau turun ke ilustrasi.
//
// MD5 dipilih bukan karena aman, tapi karena cepat. Yang dicari kesamaan
// berkas, bukan ketahanan terhadap serangan.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT } from './lib.mjs';

const IMG_DIR = path.join(ROOT, 'assets/img');

export const sidik = (berkas) =>
  crypto.createHash('md5').update(fs.readFileSync(berkas)).digest('hex');

// Peta sidik -> slug pemilik, dibangun dari berkas yang BENAR-BENAR dipakai
// artikel. Sengaja tidak memindai seluruh isi assets/img karena di sana masih
// ada pustaka foto lama yang tidak lagi terpasang di artikel mana pun;
// memasukkannya akan menolak foto yang sebenarnya bebas dipakai.
export function petaSidik(artikel, kecuali = null) {
  const peta = new Map();
  for (const a of artikel) {
    if (!a.image || a.slug === kecuali) continue;
    const p = path.join(ROOT, a.image);
    if (!fs.existsSync(p)) continue;
    try { peta.set(sidik(p), a.slug); } catch { /* berkas rusak, lewati */ }
  }
  return peta;
}

// URL sumber yang sudah terpakai. Pengecekan termurah: kalau alamat fotonya
// sama persis, hasil unduhannya pasti sama, jadi tidak perlu diunduh dulu.
export function urlTerpakai(artikel, kecuali = null) {
  return new Set(artikel.filter(a => a.fotoSumber && a.slug !== kecuali)
    .map(a => a.fotoSumber));
}

// Coba pasang foto asli untuk satu artikel dari daftar kandidat, lewati yang
// gambarnya sudah dipakai artikel lain.
//
// unduh() harus mengunduh ke assets/img/<slug>.jpg dan mengembalikan true bila
// berhasil. Berkas yang ternyata kembar dihapus lagi, supaya pemanggil
// berikutnya melihat keadaan yang bersih.
//
// Mengembalikan URL yang akhirnya dipakai, atau '' kalau semua kandidat kembar
// atau gagal diunduh.
// GAMBAR LAMA TIDAK BOLEH HILANG KALAU PENGGANTINYA GAGAL.
//
// Versi pertama fungsi ini menghapus berkas tujuan lebih dulu, karena unduhFoto
// sengaja menolak menimpa. Baru sesudah itu ketahuan apakah unduhannya berhasil
// dan apakah gambarnya kembar. Tiga jalur kegagalan di bawah keluar tanpa
// mengembalikan apa pun, jadi artikel yang tadinya berilustrasi ditinggal
// TANPA GAMBAR SAMA SEKALI.
//
// Terjadi sungguhan pada 13 Agustus 2026 dan menghentikan seluruh pembaruan
// berita selama beberapa jam. Rantainya: 12 artikel kehilangan kreditFoto saat
// pembersihan foto kembar, sehingga jadi sasaran ganti-foto-asli.mjs pada
// putaran berikutnya. Foto sumber salah satunya ternyata kembar dengan artikel
// lain, jadi ditolak, dan ilustrasinya sudah telanjur dihapus. Penjaga build
// menangkapnya dan menghentikan build, yang secara teknis benar tetapi berarti
// tidak ada satu pun berita baru terbit sampai orang memeriksanya.
//
// Sekarang berkas lama dipindahkan ke berkas cadangan dulu, dan dikembalikan
// pada SETIAP jalur keluar yang tidak menghasilkan gambar baru.
export function pasangFotoUnik(slug, kandidat, { peta, terpakai, unduh, log }) {
  const tujuan = path.join(IMG_DIR, slug + '.jpg');
  const cadangan = tujuan + '.lama';
  const adaLama = fs.existsSync(tujuan);

  const kembalikan = () => {
    fs.rmSync(tujuan, { force: true });
    if (adaLama && fs.existsSync(cadangan)) fs.renameSync(cadangan, tujuan);
  };
  const buangCadangan = () => fs.rmSync(cadangan, { force: true });

  if (adaLama) {
    fs.rmSync(cadangan, { force: true });   // sisa putaran yang terputus
    fs.renameSync(tujuan, cadangan);
  }

  try {
    for (const url of kandidat) {
      if (terpakai.has(url)) {
        log && log('  lewati (alamat foto sudah dipakai artikel lain)');
        continue;
      }
      fs.rmSync(tujuan, { force: true });
      let ok = false;
      try { ok = unduh(slug, url); } catch (e) {
        log && log('  unduh gagal: ' + String(e.message).slice(0, 50));
        continue;
      }
      if (!ok || !fs.existsSync(tujuan)) continue;

      const s = sidik(tujuan);
      const pemilik = peta.get(s);
      if (pemilik) {
        log && log('  lewati (gambar identik dengan ' + pemilik.slice(0, 38) + ')');
        fs.rmSync(tujuan, { force: true });
        continue;
      }

      peta.set(s, slug);
      terpakai.add(url);
      buangCadangan();
      return url;
    }
  } catch (e) {
    kembalikan();
    throw e;
  }

  kembalikan();
  return '';
}
