// Ambil data pasar harian: IHSG, USD/IDR, emas spot, Bitcoin.
// Semua sumber gratis tanpa API key. Kalau satu sumber gagal,
// nilai lama dipertahankan supaya situs tidak menampilkan angka kosong.
import { getJSON, retry, log, readData, idNum, dijalankanLangsung } from './lib.mjs';

const GRAM_PER_OZ = 31.1034768;

// Satu pintu untuk semua angka pasar: harga sekarang plus penutupan hari bursa
// terakhir SEBELUM hari ini, supaya persentasenya benar-benar perubahan harian.
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
  const d = await yahooHarian('IDR=X');
  return { kurs: d.now, pct: d.pct, nilai: idNum(d.now, 0), label: 'USD/IDR' };
}

// Harga tetap emas spot dari gold-api supaya cocok dengan label "spot".
// Persentasenya perubahan harian dari angka yang BENAR-BENAR ditampilkan,
// yaitu rupiah per gram, jadi gerak emas dan gerak rupiah dikalikan. Emas naik
// 1% sementara rupiah melemah 0,5% berarti harga per gram naik sekitar 1,5%,
// dan itu yang dirasakan pembaca. Persentase emas dalam dolar saja akan
// menyesatkan karena ditempel di sebelah angka rupiah.
async function emas(kursIdr, pctKurs) {
  const j = await retry(() => getJSON('https://api.gold-api.com/price/XAU'));
  const perGramIdr = (j.price / GRAM_PER_OZ) * kursIdr;

  // GC=F (emas berjangka COMEX) dipakai hanya untuk mengambil persentase
  // hariannya. Harga absolutnya memang berbeda dari spot karena ada premi
  // berjangka, tapi persentase gerak hariannya berimpit dengan spot, dan
  // hanya deret inilah yang tersedia gratis dengan penutupan harian lengkap.
  let pct = 0;
  try {
    const g = await yahooHarian('GC=F');
    pct = ((1 + g.pct / 100) * (1 + pctKurs / 100) - 1) * 100;
  } catch { pct = pctKurs; }

  return {
    perGram: perGramIdr, pct, naik: pct >= 0,
    nilai: 'Rp' + idNum(Math.round(perGramIdr / 1000), 0) + 'rb', label: 'Emas (spot)',
  };
}

async function bitcoin() {
  const j = await retry(() => getJSON(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr&include_24hr_change=true'));
  const idr = j.bitcoin.idr, pct = j.bitcoin.idr_24h_change;
  return { nilai: 'Rp' + (idr / 1e9).toFixed(2).replace('.', ',') + ' M', pct, naik: pct >= 0, label: 'Bitcoin / IDR' };
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
  let kurs = 0, pctKurs = 0;
  try {
    const b = await usdidr();
    kurs = b.kurs; pctKurs = b.pct;
    hasil.usdidr = { nilai: b.nilai, delta: (b.pct >= 0 ? '▲' : '▼') + idNum(Math.abs(b.pct), 2) + '%', naik: b.pct >= 0 };
    hasil.usdidrRaw = kurs;
  } catch (e) { gagal.push('USD/IDR'); kurs = lama.usdidrRaw || 0; }

  if (kurs) {
    try {
      const c = await emas(kurs, pctKurs);
      hasil.emas = { nilai: c.nilai, delta: (c.naik ? '▲' : '▼') + idNum(Math.abs(c.pct), 2) + '%', naik: c.naik };
      hasil.emasRaw = c.perGram;
    } catch (e) { gagal.push('Emas'); }
  }

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
