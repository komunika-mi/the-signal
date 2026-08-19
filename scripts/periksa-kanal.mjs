// Memeriksa apakah setiap kanal berita masih hidup.
//
// Kenapa ada. Dua kali dalam dua hari sebuah kanal mati diam-diam dan yang
// menyadarinya PEMILIK SITUS, bukan sistemnya sendiri:
//
//   ffmpeg hilang di runner   -> foto asli berhenti diunduh berminggu-minggu
//   pdftotext tak ketemu      -> kanal aksi korporasi IDX mati tiga hari penuh
//
// Keduanya punya bentuk yang sama: pekerjaan gagal, tapi kegagalannya terbaca
// sebagai "tidak ada yang baru", dan "tidak ada yang baru" adalah keadaan yang
// SAH untuk kanal berita. Tidak ada yang bisa membedakan kanal sepi dari kanal
// mati hanya dengan melihat satu putaran.
//
// Yang membedakan keduanya cuma WAKTU. Kanal yang biasanya berbunyi tiap hari
// lalu diam tiga hari itu bukan sepi, itu rusak. Berkas ini menuliskan
// perbedaan itu jadi angka, supaya mesin yang menyadarinya lebih dulu.
//
// Ambangnya per kanal, bukan satu angka untuk semua, karena iramanya memang
// berbeda: tvOne menerbitkan tiap hari termasuk akhir pekan, IDX hanya pada
// hari bursa, dan siaran pers lembaga bisa sepi berhari-hari tanpa ada yang
// salah.
//
//   node scripts/periksa-kanal.mjs           laporan + kode keluar 2 kalau ada yang basi
//   node scripts/periksa-kanal.mjs --diam    hanya kode keluar, tanpa cetakan panjang
import { log, readData, keWaktu, dijalankanLangsung } from './lib.mjs';

// batasHari: berapa hari tanpa artikel baru sebelum dianggap bermasalah.
// hariBursa: kalau true, akhir pekan tidak dihitung karena sumbernya memang
// libur. Tanpa ini, kanal IDX yang sehat akan selalu dilaporkan basi tiap
// Senin pagi, dan peringatan yang selalu menyala sama saja dengan tidak ada.
const KANAL = [
  { nama: 'tvOneNews', cocok: (a) => !a.sourceLabel, batasHari: 2, hariBursa: false },
  { nama: 'IDX (aksi korporasi)', cocok: (a) => a.sourceLabel === 'IDX', batasHari: 2, hariBursa: true },
  { nama: 'Siaran pers lembaga', cocok: (a) => a.sourceLabel && a.sourceLabel !== 'IDX', batasHari: 4, hariBursa: true },
];

const HARI_MS = 86400000;
const wibSekarang = () => new Date(Date.now() + 7 * 3600 * 1000);

// Selisih hari yang melewatkan Sabtu dan Minggu.
function hariKerjaAntara(dari, sampai) {
  let n = 0;
  const d = new Date(dari.getTime());
  d.setUTCHours(0, 0, 0, 0);
  const akhir = new Date(sampai.getTime());
  akhir.setUTCHours(0, 0, 0, 0);
  while (d < akhir) {
    d.setUTCDate(d.getUTCDate() + 1);
    const h = d.getUTCDay();
    if (h !== 0 && h !== 6) n++;
  }
  return n;
}

export function periksaKanal(artikel, sekarang = wibSekarang()) {
  return KANAL.map(k => {
    const punya = artikel.filter(k.cocok)
      .map(a => keWaktu(a.isoDate))
      .filter(Boolean)
      .sort((a, b) => b - a);

    if (!punya.length) {
      return { nama: k.nama, basi: true, jumlah: 0, umur: null,
        pesan: 'tidak ada satu pun artikel dari kanal ini' };
    }

    const terbaru = new Date(punya[0].getTime() + 7 * 3600 * 1000);
    const umur = k.hariBursa
      ? hariKerjaAntara(terbaru, sekarang)
      : Math.floor((sekarang - terbaru) / HARI_MS);

    return {
      nama: k.nama,
      basi: umur > k.batasHari,
      jumlah: punya.length,
      umur,
      satuan: k.hariBursa ? 'hari bursa' : 'hari',
      batas: k.batasHari,
      terakhir: terbaru.toISOString().slice(0, 16).replace('T', ' '),
    };
  });
}

if (dijalankanLangsung(import.meta.url)) {
  const diam = process.argv.includes('--diam');
  const hasil = periksaKanal(readData('articles.js', 'ARTICLES'));
  const basi = hasil.filter(h => h.basi);

  if (!diam) {
    log('kesegaran kanal:');
    for (const h of hasil) {
      const tanda = h.basi ? 'BASI ' : 'segar';
      log('  ' + tanda + '  ' + h.nama.padEnd(22) +
        (h.umur === null ? h.pesan
          : h.umur + ' ' + h.satuan + ' lalu (batas ' + h.batas + ')' +
            '  terakhir ' + h.terakhir + '  total ' + h.jumlah));
    }
  }

  if (basi.length) {
    console.error('');
    console.error('KANAL BASI: ' + basi.map(b => b.nama).join(', '));
    console.error('Kanal yang biasanya berbunyi lalu diam sekian lama itu bukan sepi,');
    console.error('itu tanda ada yang rusak. Periksa log putaran terakhir kanal itu.');
    // Kode 2 supaya pemanggil bisa membedakan "ada kanal basi" dari "skrip error".
    process.exit(2);
  }
}
