// Signal Pekanan: pembacaan arah sepekan, terbit Minggu sore.
//
// KENAPA ADA. Signal Harian sengaja tidak terbit Sabtu-Minggu: bursa tutup,
// lembaga tidak menerbitkan apa pun, jadi bahannya memang tidak ada. Tapi
// justru pada saat itulah bahan MINGGUAN baru lengkap. Yang dijual di sini
// satu tingkat di atas harian: pola yang baru kelihatan setelah lima hari
// berlalu, plus kalender pekan depan sebagai bahan persiapan.
//
// Bahannya semua sudah tersimpan, tidak ada penarikan baru:
//   - edisi harian pekan ini      (arsip Signal Harian)
//   - berita pekan ini            (articles.js, dipakai secukupnya)
//   - agenda pekan depan          (agenda-sinyal.mjs, tanggal terverifikasi)
//   - angka resmi                 (bps.js dan market.js)
//   - klaim rapor yang jatuh tempo (rapor.js)
//
// Dijalankan Minggu 19.00 WIB oleh .github/workflows/pekanan.yml.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, readObjek, arahDeret } from './lib.mjs';
import { nilaiRingkas } from './bps-grafik.mjs';
import { tulisPekanan } from './rewrite.mjs';
import { agendaGabungan } from './agenda-sinyal.mjs';

// Pekan yang sepi memang ada, dan lebih baik tidak terbit daripada mengarang
// pola. Dua edisi harian adalah lantai paling rendah yang masih memungkinkan
// bicara soal "pola sepekan"; di bawah itu yang ada cuma satu-dua peristiwa.
const MIN_EDISI = 2;

const B = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function tanggalWIB(d = new Date()) {
  return new Date(d.getTime() + 7 * 3600 * 1000).toISOString().slice(0, 10);
}
function tglSingkat(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  return d.getUTCDate() + ' ' + B[d.getUTCMonth()];
}
function tglPanjang(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  return d.getUTCDate() + ' ' + B[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}
function mundur(iso, hari) {
  return new Date(new Date(iso + 'T00:00:00Z').getTime() - hari * 86400000)
    .toISOString().slice(0, 10);
}

// Angka resmi dan pasar, sama seperti edisi harian: yang dikirim ARAH
// beberapa periode, bukan satu titik, karena satu angka tidak memberi tahu
// apa pun soal ke mana sesuatu bergerak.
function rakitAngka() {
  const baris = [];
  try {
    const bps = readObjek('bps.js');
    for (const ind of Object.values((bps && bps.indikator) || {})) {
      const t = ind.titik || [];
      if (!t.length) continue;
      const akhir = t[t.length - 1];
      // Arahnya dihitung arahDeret() di lib.mjs, satu-satunya tempat aturan itu
      // hidup sekarang. Cara lama mencacah langkah naik lawan langkah turun
      // dan buta terhadap besaran, sehingga label yang MASUK KE KONTEKS MODEL
      // bisa berlawanan dengan datanya sendiri: nilai impor naik 22 persen
      // sepanjang jendela tapi diberi label "cenderung turun".
      const { label, jumlah } = arahDeret(t);
      const arah = label ? ', ' + label + ' dalam ' + jumlah + ' periode terakhir' : '';
      // Nilainya dicetak nilaiRingkas(), sama dengan grafik situs dan blok
      // angka email. Sebelumnya nilai mentah BPS yang dikirim, "25458.7 juta
      // US$", padahal GAYA menuntut angka berkaidah Indonesia; memberi contoh
      // yang melanggar aturannya sendiri lalu berharap model menyalahi contoh
      // itu adalah cara yang aneh untuk menegakkan aturan.
      baris.push('- ' + ind.nama + ': ' + nilaiRingkas(akhir.nilai, ind) +
        ' (' + akhir.periode + ' ' + akhir.tahun + ')' + arah);
    }
  } catch { /* tanpa BPS pun edisi tetap bisa ditulis */ }
  try {
    const p = path.join(ROOT, 'assets/js/market.js');
    if (fs.existsSync(p)) {
      const s = fs.readFileSync(p, 'utf8');
      const M = JSON.parse(s.slice(s.indexOf('{'), s.lastIndexOf('}') + 1));
      for (const [k, nama] of [['ihsg', 'IHSG'], ['usdidr', 'USD/IDR'], ['emas', 'Emas spot per gram']]) {
        if (M[k]) baris.push('- ' + nama + ': ' + M[k].nilai + ' (' + M[k].delta + ')');
      }
    }
  } catch { /* angka pasar boleh tidak ada */ }
  return baris.join('\n');
}

async function main() {
  const hariIni = process.argv[2] || tanggalWIB();
  const mulai = mundur(hariIni, 6);              // jendela 7 hari termasuk hari ini
  const labelRentang = tglSingkat(mulai) + ' - ' + tglPanjang(hariIni);

  // ---- edisi harian pekan ini ----
  const arsipHarian = (() => {
    try { return readData('harian-arsip.js', 'HARIAN_ARSIP'); } catch { return []; }
  })();
  const edisiPekanIni = arsipHarian
    .filter(h => h.tanggal >= mulai && h.tanggal <= hariIni)
    .sort((a, b) => a.tanggal.localeCompare(b.tanggal));

  log('Signal Pekanan ' + labelRentang + ': ' + edisiPekanIni.length + ' edisi harian jadi bahan');
  if (edisiPekanIni.length < MIN_EDISI) {
    log('pekan ini terlalu sepi (butuh minimal ' + MIN_EDISI + ' edisi harian), dilewati');
    return;
  }

  const teksEdisi = edisiPekanIni.map(h =>
    h.tanggalLabel + ' - ' + h.judul + '\n' + h.ringkas + '\n' +
    (h.benang || []).map(b => '  * ' + b.judul + ': ' + b.isi).join('\n')
  ).join('\n\n');

  // ---- berita pekan ini ----
  // Dibatasi 40 dan hanya judul + arah, bukan badan. Bahan utama edisi ini
  // adalah pembacaan harian yang sudah matang; berita mentah cuma penambal
  // untuk hal yang belum sempat masuk edisi mana pun.
  const artikel = readData('articles.js', 'ARTICLES');
  const beritaPekanIni = artikel
    .filter(a => { const t = (a.isoDate || '').slice(0, 10); return t >= mulai && t <= hariIni; });
  const teksBerita = beritaPekanIni.slice(0, 40).map(a =>
    '- [' + a.date + '] ' + String(a.title).replace(/[\[\]]/g, '') +
    (a.takeaway ? '\n  arah: ' + a.takeaway.slice(0, 200) : '')
  ).join('\n');

  // ---- agenda pekan depan ----
  const sampai = new Date(new Date(hariIni + 'T00:00:00Z').getTime() + 8 * 86400000)
    .toISOString().slice(0, 10);
  const agenda = agendaGabungan(artikel).filter(e => e.iso <= sampai);
  const teksAgenda = agenda.map(e =>
    '- ' + e.iso + (e.perkiraan ? ' (perkiraan)' : '') + ': ' +
    (e.emiten ? e.emiten + ' - ' : '') + e.judul +
    (e.teks ? '\n  konteks: ' + e.teks.slice(0, 180) : '')
  ).join('\n');
  log('agenda pekan depan: ' + agenda.length + ' entri');

  // ---- klaim rapor yang jatuh tempo ----
  let teksRapor = '';
  try {
    const rapor = readObjek('rapor.js');
    const jatuh = (rapor.entri || []).filter(e =>
      e.status === 'menunggu' && e.tenggat && e.tenggat <= sampai);
    teksRapor = jatuh.map(e => '- (dicatat ' + e.edisi + ') ' + e.klaim +
      '\n  penanda uji: ' + e.penanda).join('\n');
    if (jatuh.length) log('klaim rapor jatuh tempo: ' + jatuh.length);
  } catch { /* rapor boleh tidak ada */ }

  const hasil = await tulisPekanan({
    labelRentang,
    edisi: teksEdisi,
    berita: teksBerita,
    agenda: teksAgenda,
    angka: rakitAngka(),
    rapor: teksRapor,
  });
  if (!hasil) { log('editor menilai pekan ini tidak berpola, dilewati'); return; }

  const data = {
    tanggal: hariIni,
    rentang: { mulai, selesai: hariIni },
    rentangLabel: labelRentang,
    judul: hasil.judul,
    ringkas: hasil.ringkas,
    pola: hasil.pola,
    menanti: hasil.menanti,
    penutup: hasil.penutup || '',
    jumlahEdisi: edisiPekanIni.length,
    jumlahBerita: beritaPekanIni.length,
    dibuat: new Date().toISOString(),
  };

  fs.writeFileSync(ROOT + '/assets/js/pekanan.js',
    '// Signal Pekanan. Dibuat otomatis oleh scripts/signal-pekanan.mjs.\n' +
    'var PEKANAN = ' + JSON.stringify(data, null, 1) + ';\n', 'utf8');

  // Arsip terpisah, pola yang sama dengan Signal Harian: satu tanggal muncul
  // TEPAT SEKALI, karena feed inilah yang jadi acuan pengiriman ke pelanggan
  // dan entri ganda berarti email ganda.
  const berkasArsip = ROOT + '/assets/js/pekanan-arsip.js';
  let arsip = [];
  if (fs.existsSync(berkasArsip)) {
    try {
      const m = fs.readFileSync(berkasArsip, 'utf8').match(/\[[\s\S]*\]/);
      if (m) arsip = JSON.parse(m[0]);
    } catch { arsip = []; }
  }
  arsip = [data, ...arsip.filter(x => x.tanggal !== data.tanggal)]
    .sort((a, b) => (b.tanggal || '').localeCompare(a.tanggal || ''))
    .slice(0, 26);                                  // setengah tahun edisi

  fs.writeFileSync(berkasArsip,
    '// Arsip Signal Pekanan, 26 edisi terakhir. Ikut jadi sumber feed.xml.\n' +
    '// Dibuat otomatis oleh scripts/signal-pekanan.mjs - jangan diedit manual.\n' +
    'var PEKANAN_ARSIP = ' + JSON.stringify(arsip, null, 1) + ';\n', 'utf8');

  log('  judul   : ' + hasil.judul);
  log('  pola    : ' + hasil.pola.length + ' | menanti: ' + (hasil.menanti || []).length);
  log('  arsip   : ' + arsip.length + ' edisi');
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
}

main().catch(e => { console.error(e); process.exit(1); });
