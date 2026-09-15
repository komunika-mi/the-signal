// Memeriksa apakah data pasar yang TAYANG masih diperbarui selama jam bursa.
//
// Kenapa ada. 14 September 2026 ticker di bar atas seluruh situs membeku tujuh
// jam di IHSG 6.396,58 (-2,21%), angka intraday dekat titik terendah hari itu,
// padahal bursa tutup datar di 6.534,69 (-0,10%). Putaran pasar.yml hilang satu
// per satu dan tidak ada apa pun yang berbunyi; pemilik situs sendiri yang
// melihatnya.
//
// ATURANNYA keputusan pemilik situs, 15 September 2026: selama jam bursa, data
// pasar yang lebih dari 2 jam tidak diperbarui dianggap macet. Di luar jam
// bursa tidak dinilai.
//
// Umurnya dihitung sejak yang LEBIH BARU antara pembaruan terakhir dan
// pembukaan bursa hari itu. Sebelum bursa buka pasar.yml memang cuma jalan tiap
// 2 jam, jadi pukul 09.30 wajar kalau pembaruan terakhirnya 07.09. Jam di luar
// bursa itu tidak boleh ikut terhitung, atau pemeriksaan pagi akan berteriak
// tanpa ada yang rusak.
//
// Stempel `diperbarui` ditulis saat data diambil, beberapa menit sebelum
// terbit. Selisih itu kecil dibanding ambang 2 jam, jadi tidak ditambahkan.
//
// Yang dibaca berkas di SITUS, bukan di repo: data yang sudah di-push tapi
// tidak terbit sama macetnya bagi pembaca.
//
//   node scripts/periksa-pasar.mjs    laporan + kode keluar 2 kalau macet
import { log, get, retry, dijalankanLangsung } from './lib.mjs';
import { SITUS } from './situs.mjs';

const BATAS_MENIT = 120;
const BUKA = 9 * 60;     // 09.00 WIB
const TUTUP = 16 * 60;   // 16.00 WIB, akhir pra-penutupan

export function nilaiKesegaran(diperbarui, sekarang = new Date()) {
  const t = Date.parse(diperbarui);
  if (!Number.isFinite(t)) {
    return { macet: true, dinilai: true, pesan: 'stempel "diperbarui" tidak terbaca: ' + String(diperbarui) };
  }

  const wib = new Date(sekarang.getTime() + 7 * 3600 * 1000);
  const hari = wib.getUTCDay();
  const menit = wib.getUTCHours() * 60 + wib.getUTCMinutes();
  const umurMenit = Math.round((sekarang.getTime() - t) / 60000);

  if (hari === 0 || hari === 6 || menit < BUKA || menit > TUTUP) {
    return { macet: false, dinilai: false, umurMenit, pesan: 'di luar jam bursa, tidak dinilai' };
  }

  // 09.00 WIB hari ini jatuh pada 02.00 UTC di tanggal kalender yang sama.
  const buka = Date.UTC(wib.getUTCFullYear(), wib.getUTCMonth(), wib.getUTCDate(), 2, 0);
  const umurBursa = Math.round((sekarang.getTime() - Math.max(t, buka)) / 60000);
  return {
    macet: umurBursa > BATAS_MENIT, dinilai: true, umurMenit, umurBursa,
    pesan: umurBursa + ' menit jam bursa tanpa pembaruan (batas ' + BATAS_MENIT + ')',
  };
}

export async function bacaPasarTayang() {
  const src = await retry(() => get(SITUS + '/assets/js/market.js?cek=' + Date.now()), 2, 5000);
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  if (i === -1 || j <= i) throw new Error('market.js di situs tidak berisi data');
  return JSON.parse(src.slice(i, j + 1));
}

if (dijalankanLangsung(import.meta.url)) {
  const M = await bacaPasarTayang();
  const h = nilaiKesegaran(M.diperbarui);

  if (Number.isFinite(Date.parse(M.diperbarui))) {
    const jam = new Date(Date.parse(M.diperbarui) + 7 * 3600 * 1000).toISOString().slice(0, 16).replace('T', ' ');
    log('data pasar tayang: diperbarui ' + jam + ' WIB, ' + h.umurMenit + ' menit lalu');
  }
  const angka = (d) => (d ? d.nilai + ' ' + d.delta : '-');
  log('  IHSG ' + angka(M.ihsg) + ' | USD/IDR ' + angka(M.usdidr) + ' | emas ' + angka(M.emas));
  log('  ' + (h.macet ? 'MACET' : 'segar') + '  ' + h.pesan);

  if (h.macet) {
    console.error('');
    console.error('DATA PASAR MACET: bar atas seluruh situs memajang angka lama selama jam bursa.');
    console.error('Periksa putaran pasar.yml terakhir dan pemicu cadangan api/pemicu-alur.js.');
    // Kode 2 supaya pemanggil bisa membedakan "data macet" dari "skrip error".
    // exitCode, BUKAN process.exit(): soket fetch yang masih menutup membuat
    // process.exit() di Windows jatuh ke assertion libuv dan keluar dengan
    // kode 127, bukan 2. Terjadi saat skrip ini pertama diuji.
    process.exitCode = 2;
  }
}
