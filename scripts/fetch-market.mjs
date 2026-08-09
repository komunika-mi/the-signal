// Ambil data pasar harian: IHSG, USD/IDR, emas spot, Bitcoin.
// Semua sumber gratis tanpa API key. Kalau satu sumber gagal,
// nilai lama dipertahankan supaya situs tidak menampilkan angka kosong.
import { getJSON, retry, log, readData, idNum } from './lib.mjs';

const GRAM_PER_OZ = 31.1034768;

async function ihsg() {
  const j = await retry(() => getJSON(
    'https://query1.finance.yahoo.com/v8/finance/chart/%5EJKSE?interval=1d&range=5d'));
  const m = j.chart.result[0].meta;
  const now = m.regularMarketPrice, prev = m.chartPreviousClose;
  const pct = ((now - prev) / prev) * 100;
  return { nilai: idNum(now, 2), pct, naik: pct >= 0, label: 'IHSG' };
}

async function usdidr() {
  const j = await retry(() => getJSON('https://open.er-api.com/v6/latest/USD'));
  const kurs = j.rates.IDR;
  return { kurs, nilai: idNum(kurs, 0), label: 'USD/IDR' };
}

async function emas(kursIdr) {
  const j = await retry(() => getJSON('https://api.gold-api.com/price/XAU'));
  const perGramIdr = (j.price / GRAM_PER_OZ) * kursIdr;
  return { perGram: perGramIdr, nilai: 'Rp' + idNum(Math.round(perGramIdr / 1000), 0) + 'rb', label: 'Emas (spot)' };
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

  let kurs = 0;
  try {
    const b = await usdidr();
    kurs = b.kurs;
    const kursLama = lama.usdidrRaw || 0;
    const d = kursLama ? ((kurs - kursLama) / kursLama) * 100 : 0;
    hasil.usdidr = { nilai: b.nilai, delta: (d >= 0 ? '▲' : '▼') + idNum(Math.abs(d), 2) + '%', naik: d >= 0 };
    hasil.usdidrRaw = kurs;
  } catch (e) { gagal.push('USD/IDR'); kurs = lama.usdidrRaw || 0; }

  if (kurs) {
    try {
      const c = await emas(kurs);
      const lamaGram = lama.emasRaw || 0;
      const d = lamaGram ? ((c.perGram - lamaGram) / lamaGram) * 100 : 0;
      hasil.emas = { nilai: c.nilai, delta: (d >= 0 ? '▲' : '▼') + idNum(Math.abs(d), 2) + '%', naik: d >= 0 };
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

if (import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const p = await ambilPasar();
  console.log(JSON.stringify(p, null, 2));
}
