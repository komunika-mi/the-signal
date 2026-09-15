// Ambil data pasar harian: IHSG, USD/IDR, emas spot, Bitcoin.
// Semua sumber gratis tanpa API key. Kalau satu sumber gagal,
// nilai lama dipertahankan supaya situs tidak menampilkan angka kosong.
import { getJSON, retry, log, readData, idNum, dijalankanLangsung } from './lib.mjs';

const GRAM_PER_OZ = 31.1034768;

// Harga sekarang plus penutupan hari bursa terakhir SEBELUM hari ini, supaya
// persentasenya benar-benar perubahan harian. Sejak 15 September 2026 hanya
// dipakai IHSG; emas dan kurs memakai perubahanSesi() di bawah, karena
// "hari ini" menurut tanggal UTC salah untuk pasar yang sesinya melintasi
// tengah malam UTC.
//
// JANGAN pakai meta.chartPreviousClose. Pada range=5d isinya penutupan sebelum
// bar PERTAMA rentang, jadi pembandingnya harga sepekan lalu, bukan kemarin.
// Akibatnya persentase harian salah besar: 12 Agustus 2026 situs menulis IHSG
// +0,05% (dibanding 6 Agustus di 6.343,71) padahal terhadap penutupan 11
// Agustus di 6.267,88 kenaikannya +1,10%. Google menunjukkan yang kedua, dan
// yang kedua itu yang benar.
//
// Bar hari ini ikut ada di deret selama bursa masih berjalan, jadi harus
// dilewati. Kalau bursa sudah tutup, bar terakhir justru sudah final dan
// itulah pembandingnya. Karena itu penyaringnya tanggal, bukan posisi.
async function yahooHarian(simbol) {
  const j = await retry(() => getJSON(
    'https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(simbol) +
    '?interval=1d&range=5d'));
  const r = j.chart.result[0];
  const m = r.meta;
  const now = m.regularMarketPrice;

  const stempel = r.timestamp || [];
  const tutup = (r.indicators.quote[0].close || []);
  const seri = stempel
    .map((t, i) => ({ hari: new Date(t * 1000).toISOString().slice(0, 10), nilai: tutup[i] }))
    .filter(x => typeof x.nilai === 'number');

  const hariIni = new Date((m.regularMarketTime || Date.now() / 1000) * 1000).toISOString().slice(0, 10);
  const sebelum = seri.filter(x => x.hari < hariIni);
  const prev = sebelum.length ? sebelum[sebelum.length - 1].nilai : m.chartPreviousClose;

  return { now, prev, pct: ((now - prev) / prev) * 100 };
}

async function ihsg() {
  const d = await yahooHarian('^JKSE');
  return { nilai: idNum(d.now, 2), pct: d.pct, naik: d.pct >= 0, label: 'IHSG' };
}

// Kurs dari Yahoo, bukan lagi open.er-api.com. Sumber lama hanya menyegarkan
// sekali sehari dan tidak menyertakan penutupan kemarin, jadi persentasenya
// dulu dihitung terhadap pengambilan sebelumnya dan nyaris selalu terbaca
// 0,00% - angka yang tampak sah padahal tidak berarti apa-apa.
async function usdidr() {
  const k = perubahanSesi(await yahooDeret('IDR=X', '1mo', '1d'), await yahooDeret('IDR=X', '5d', '5m'), PASAR_KURS);
  return { kurs: k.now, pct: k.pct, pctMentah: k.pctMentah, alasan: k.alasan, nilai: idNum(k.now, 0), label: 'USD/IDR' };
}

// Harga tetap emas spot dari gold-api supaya cocok dengan label "spot".
// Persentasenya perubahan harian dari angka yang BENAR-BENAR ditampilkan,
// yaitu rupiah per gram, jadi gerak emas dan gerak rupiah dikalikan. Emas naik
// 1% sementara rupiah melemah 0,5% berarti harga per gram naik sekitar 1,5%,
// dan itu yang dirasakan pembaca. Persentase emas dalam dolar saja akan
// menyesatkan karena ditempel di sebelah angka rupiah.
//
// pctKursMentah dipakai walau kursnya sedang basi: nilai rupiah emas di atas
// dihitung dari kurs yang sama persis, jadi persentasenya tetap sesuai dengan
// angka yang tampil. Yang ditahan hanya kalau pembanding kursnya tidak ada.
async function emas(kursIdr, pctKursMentah) {
  const j = await retry(() => getJSON('https://api.gold-api.com/price/XAU'));
  const perGramIdr = (j.price / GRAM_PER_OZ) * kursIdr;

  // GC=F (emas berjangka COMEX) dipakai hanya untuk mengambil persentase
  // hariannya. Harga absolutnya memang berbeda dari spot karena ada premi
  // berjangka, tapi persentase gerak hariannya berimpit dengan spot, dan
  // hanya deret inilah yang tersedia gratis dengan penutupan harian lengkap.
  //
  // Dulu kalau deret ini gagal, persentase kurs dipajang sebagai persentase
  // emas. Sekarang ditahan: angka milik instrumen lain bukan pengganti.
  let pct = null, alasan = '';
  try {
    const g = perubahanSesi(await yahooDeret('GC=F', '1mo', '1d'), await yahooDeret('GC=F', '5d', '5m'), PASAR_EMAS);
    if (g.pct === null) alasan = g.alasan;
    else if (pctKursMentah === null) alasan = 'penutupan kurs pembanding belum tersedia';
    else pct = ((1 + g.pct / 100) * (1 + pctKursMentah / 100) - 1) * 100;
  } catch { alasan = 'deret emas Yahoo gagal diambil'; }

  return {
    perGram: perGramIdr, pct, alasan,
    nilai: 'Rp' + idNum(Math.round(perGramIdr / 1000), 0) + 'rb', label: 'Emas (spot)',
  };
}

// ===========================================================================
// EMAS DAN KURS: PEMBANDING MENURUT HARI DAGANG PASARNYA SENDIRI
// ===========================================================================
//
// yahooHarian() memilih pembanding memakai TANGGAL UTC. Untuk IHSG itu benar,
// karena sesi Jakarta (02.00-09.00 UTC) muat dalam satu tanggal UTC. Untuk
// emas dan kurs itu salah, dan diperiksa lawan riwayat market.js 9-15
// September 2026 salahnya sistematis:
//
//   - Emas. Sesi CME untuk hari dagang baru mulai 05.00 WIB. Sampai sekitar
//     11.00 WIB persentasenya dibandingkan penutupan DUA sesi sebelumnya, di
//     setiap pagi Selasa-Jumat yang diperiksa. 15 September 07.32 WIB tayang
//     ▼1,89%, padahal terhadap penutupan Senin cuma sekitar ▼0,6%.
//   - Kurs. Bar IDR=X dicap 00.00 London, yaitu 23.00 UTC tanggal SEBELUMNYA,
//     jadi begitu Yahoo mengisi penutupan bar hari berjalan, pembandingnya bar
//     hari itu sendiri. Sabtu-Minggu 12-13 September tayang ▲0,10%, padahal
//     Jumat naik sekitar 0,5%.
//
// Data 5 menitan IDR=X di Yahoo juga JARANG: 104 titik berisi dari 1.212 dalam
// lima hari, sisanya null, dan kosongnya bisa berjam-jam. Kurs yang membeku
// tertulis ▲0,00% sepanjang pagi 15 September.
//
// ATURANNYA keputusan pemilik situs, 15 September 2026:
//   1. Pembanding = penutupan hari dagang sebelumnya menurut jam pasarnya
//      (emas: New York/CME, kurs: London). Akhir pekan menampilkan perubahan
//      hari Jumat.
//   2. Kalau penutupan pembanding itu belum ada di Yahoo, atau harganya tidak
//      diperbarui lebih dari 90 menit saat pasarnya buka, tampilkan harga
//      TANPA persentase. 90 menit diambil dari data: celah terpanjang data
//      emas Yahoo saat pasar buka pada 9-15 September 65 menit.
//   IHSG tidak diubah.
//
// Aturan 2 tidak bisa membedakan bar yang belum terbit dari bar yang memang
// tidak ada karena libur. Sehari sesudah libur bursa AS (misalnya 8 September,
// sesudah Labor Day) emas tampil tanpa persentase. Harga yang diterima,
// dibanding angka salah setiap pagi.

const MENIT_BASI = 90;
const JAM = 3600 * 1000;

async function yahooDeret(simbol, range, interval) {
  const j = await retry(() => getJSON(
    'https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(simbol) +
    '?interval=' + interval + '&range=' + range));
  return j.chart.result[0];
}

const tanggalDari = (ms) => new Date(ms).toISOString().slice(0, 10);
const tengahMalam = (lokal) => Math.floor(lokal / (24 * JAM)) * 24 * JAM;

// Sabtu dan Minggu dimundurkan ke Jumat.
function hariKerjaTerakhir(tgl) {
  const d = new Date(tgl + 'T00:00:00Z');
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6) d.setUTCDate(d.getUTCDate() - 1);
  return tanggalDari(d.getTime());
}

function hariKerjaSebelum(tgl) {
  const d = new Date(tgl + 'T00:00:00Z');
  do d.setUTCDate(d.getUTCDate() - 1); while (d.getUTCDay() === 0 || d.getUTCDay() === 6);
  return tanggalDari(d.getTime());
}

// Aturan tiap pasar bekerja pada JAM SETEMPAT: UTC + gmtoffset dari meta
// Yahoo, jadi pergantian musim panas New York dan London ikut sendiri.
export const PASAR_EMAS = {
  // Sesi CME untuk hari dagang D berjalan 18.00 ET hari D-1 sampai 17.00 ET
  // hari D. Digeser 6 jam, seluruh sesi itu jatuh di tanggal D. Bar harian
  // Yahoo dicap 00.00 ET tanggal D, dan geseran yang sama tetap menaruhnya di
  // D walau cap waktunya meleset sejam di sekitar pergantian musim.
  hariDagang: (lokal) => tanggalDari(lokal + 6 * JAM),
  hariBar: (lokal) => tanggalDari(lokal + 6 * JAM),
  // Globex buka Minggu 18.00 sampai Jumat 17.00 ET, jeda harian 17.00-18.00.
  // Mengembalikan awal periode buka yang sedang berjalan, atau null kalau tutup.
  bukaSejak(lokal) {
    const hari = new Date(lokal).getUTCDay();
    const m = Math.floor((lokal - tengahMalam(lokal)) / 60000);
    if (hari === 6) return null;
    if (hari === 0) return m >= 18 * 60 ? tengahMalam(lokal) + 18 * JAM : null;
    if (m >= 17 * 60 && (hari === 5 || m < 18 * 60)) return null;
    return m >= 18 * 60 ? tengahMalam(lokal) + 18 * JAM : tengahMalam(lokal) - 6 * JAM;
  },
};

export const PASAR_KURS = {
  // Bar harian IDR=X dicap 00.00 waktu London. Geseran 2 jam cuma pengaman
  // kalau cap waktunya meleset sejam di sekitar pergantian musim; untuk
  // "sekarang" tanggal London dipakai apa adanya.
  hariDagang: (lokal) => tanggalDari(lokal),
  hariBar: (lokal) => tanggalDari(lokal + 2 * JAM),
  // Data rupiah Yahoo berjalan Senin 00.00 sampai Jumat malam waktu London.
  bukaSejak(lokal) {
    const hari = new Date(lokal).getUTCDay();
    const m = Math.floor((lokal - tengahMalam(lokal)) / 60000);
    if (hari === 0 || hari === 6 || (hari === 5 && m >= 22 * 60)) return null;
    return tengahMalam(lokal) - (hari - 1) * 24 * JAM;
  },
};

// Persentase harian satu simbol menurut aturan pasarnya. Fungsi murni supaya
// bisa diuji dengan data Yahoo yang dipotong ke jam mana pun.
//
//   pct        persentase yang boleh DITAYANGKAN, atau null beserta alasannya
//   pctMentah  perubahan terhadap pembanding tanpa memandang basi
export function perubahanSesi(harian, menitan, pasar, sekarang = Date.now()) {
  const off = (harian.meta.gmtoffset || 0) * 1000;
  const lokal = sekarang + off;
  const hari = hariKerjaTerakhir(pasar.hariDagang(lokal));
  const hariAcuan = hariKerjaSebelum(hari);

  // Pembanding HANYA bar hari kerja tepat sebelumnya. Bar yang lebih tua tidak
  // boleh jadi cadangan: persis cadangan itulah yang membuat emas dibandingkan
  // dengan dua hari lalu.
  const tutup = harian.indicators.quote[0].close || [];
  let acuan = null;
  (harian.timestamp || []).forEach((t, i) => {
    if (typeof tutup[i] === 'number' && pasar.hariBar(t * 1000 + off) === hariAcuan) acuan = tutup[i];
  });

  // Harga dan kapan terakhir diperbarui, dua-duanya dari titik 5 menitan yang
  // TIDAK null. Cap waktu titik kosong tetap ada, jadi jarak antar-cap waktu
  // tidak bisa dipakai.
  //
  // Harganya sengaja BUKAN meta.regularMarketPrice deret harian. Senin 14
  // September harga emas yang tayang tertinggal berjam-jam dari deret 5
  // menitan dan per jam (keduanya saling cocok): 11.48 WIB tayang setara
  // 4.408, padahal deret menitan 4.365; 21.41 WIB tayang 4.351, padahal
  // menitan 4.317. Mengambil harga dan cap waktunya dari respons yang sama
  // membuat respons yang basi otomatis terbaca basi.
  const mt = menitan.timestamp || [];
  const mc = ((menitan.indicators.quote || [])[0] || {}).close || [];
  let terakhir = 0, hargaTerakhir = null;
  mt.forEach((t, i) => {
    if (mc[i] != null && t * 1000 <= sekarang && t * 1000 >= terakhir) { terakhir = t * 1000; hargaTerakhir = mc[i]; }
  });

  const now = hargaTerakhir ?? (menitan.meta || {}).regularMarketPrice ?? harian.meta.regularMarketPrice;
  const pctMentah = acuan === null ? null : ((now - acuan) / acuan) * 100;
  const buka = pasar.bukaSejak(lokal);

  let alasan = '';
  if (acuan === null) {
    alasan = 'penutupan ' + hariAcuan + ' belum tersedia';
  } else if (buka !== null && terakhir < buka - off) {
    // Harga dari sebelum pasar buka bukan gerak hari ini, sesegar apa pun.
    alasan = 'belum ada harga sejak pasar buka';
  } else if (buka !== null && sekarang - terakhir > MENIT_BASI * 60000) {
    alasan = 'harga ' + Math.round((sekarang - terakhir) / 60000) + ' menit tidak diperbarui';
  }

  return { now, acuan, hariAcuan, pctMentah, pct: alasan ? null : pctMentah, alasan };
}

async function bitcoin() {
  const j = await retry(() => getJSON(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr&include_24hr_change=true'));
  const idr = j.bitcoin.idr, pct = j.bitcoin.idr_24h_change;
  return { nilai: 'Rp' + (idr / 1e9).toFixed(2).replace('.', ',') + ' M', pct, naik: pct >= 0, label: 'Bitcoin / IDR' };
}

// Butir pasar untuk market.js. Persentase null berarti SENGAJA ditahan: delta
// kosong, naik null, alasannya di tanpaPersen. Semua penampil (shared.js,
// build-pages.mjs, signal-harian.mjs, signal-pekanan.mjs) membaca delta kosong
// sebagai "tampilkan harganya saja".
function butir(nilai, pct, alasan) {
  if (pct === null || !Number.isFinite(pct)) {
    return { nilai, delta: '', naik: null, tanpaPersen: alasan || 'persentase tidak tersedia' };
  }
  return { nilai, delta: (pct >= 0 ? '▲' : '▼') + idNum(Math.abs(pct), 2) + '%', naik: pct >= 0 };
}

export async function ambilPasar(sebelumnya) {
  const lama = sebelumnya || {};
  const hasil = { ...lama, diperbarui: new Date().toISOString() };
  const gagal = [];

  try {
    const a = await ihsg();
    hasil.ihsg = { nilai: a.nilai, delta: (a.naik ? '▲' : '▼') + idNum(Math.abs(a.pct), 2) + '%', naik: a.naik };
  } catch (e) { gagal.push('IHSG'); }

  // Delta di bawah ini perubahan HARIAN, bukan selisih terhadap pengambilan
  // sebelumnya seperti dulu. Versi lama membandingkan hasil poll dua jam-an,
  // padahal sumber kursnya cuma diperbarui sekali sehari, jadi USD/IDR hampir
  // selalu tertulis 0,00%.
  let kurs = 0, pctKursMentah = null;
  try {
    const b = await usdidr();
    kurs = b.kurs; pctKursMentah = b.pctMentah;
    hasil.usdidr = butir(b.nilai, b.pct, b.alasan);
    hasil.usdidrRaw = kurs;
  } catch (e) {
    gagal.push('USD/IDR'); kurs = lama.usdidrRaw || 0;
    // Nilai lama boleh dipertahankan, persentase lamanya tidak: itu gerak pada
    // jam pengambilan sebelumnya, bukan sekarang.
    if (lama.usdidr) hasil.usdidr = butir(lama.usdidr.nilai, null, 'sumber kurs gagal diambil');
  }

  if (kurs) {
    try {
      const c = await emas(kurs, pctKursMentah);
      hasil.emas = butir(c.nilai, c.pct, c.alasan);
      hasil.emasRaw = c.perGram;
    } catch (e) {
      gagal.push('Emas');
      if (lama.emas) hasil.emas = butir(lama.emas.nilai, null, 'sumber emas gagal diambil');
    }
  } else if (lama.emas) {
    hasil.emas = butir(lama.emas.nilai, null, 'kurs tidak tersedia');
  }

  const ditahan = [['USD/IDR', hasil.usdidr], ['emas', hasil.emas]]
    .filter(([, d]) => d && !d.delta).map(([n, d]) => n + ' (' + d.tanpaPersen + ')');
  if (ditahan.length) log('pasar: persentase ditahan - ' + ditahan.join(', '));

  try {
    const d = await bitcoin();
    hasil.btc = { nilai: d.nilai, delta: (d.naik ? '▲' : '▼') + idNum(Math.abs(d.pct), 2) + '%', naik: d.naik };
  } catch (e) { gagal.push('Bitcoin'); }

  if (gagal.length) log('PERINGATAN: gagal ambil ' + gagal.join(', ') + ' - pakai nilai sebelumnya');
  else log('pasar: semua sumber berhasil');

  return hasil;
}

if (dijalankanLangsung(import.meta.url)) {
  const p = await ambilPasar();
  console.log(JSON.stringify(p, null, 2));
}
