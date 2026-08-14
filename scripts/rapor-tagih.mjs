// Menagih Rapor Sinyal: mencatat klaim edisi baru, menilai klaim jatuh tempo.
//
// Dua pekerjaan, dua sifat berbeda:
//   1. PENCATATAN (model): tiap edisi Signal Harian yang belum tercatat di
//      rapor.js diurai jadi klaim + penanda uji + tenggat, satu per benang.
//      Bunyi klaim dikutip dari edisinya dan SETELAH TERCATAT TIDAK PERNAH
//      DIUBAH; rapor yang klaimnya bisa ditulis ulang belakangan bukan rapor.
//   2. PENAGIHAN (model + validasi keras): klaim berstatus menunggu yang
//      tenggatnya lewat dinilai terkonfirmasi/patah, dan vonis HANYA diterima
//      kalau menunjuk artikel arsip yang benar-benar ada sebagai bukti.
//      Tanpa bukti yang bisa diklik, statusnya tetap menunggu. Ini penjaga
//      terhadap model yang "yakin" tanpa dasar: yang tidak bisa dibuktikan
//      dari arsip sendiri belum terjadi menurut rapor ini.
//
// Klaim yang 45 hari lewat tenggat tanpa bukti jadi KEDALUWARSA, deterministik
// tanpa model. Jujur soal keterbatasan: penandanya tidak pernah tertangkap
// arsip, dan mengakui itu lebih baik daripada pura-pura masih menunggu.
//
// Dipanggil harian.yml setelah edisi baru ditulis. Aman dijalankan kapan pun:
// tanpa edisi baru dan tanpa klaim jatuh tempo, tidak ada panggilan model.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';
import { PENGAMAN, tanya, ambilJSON } from './rewrite.mjs';

const HARI_KEDALUWARSA = 45;

function muat(nama, bukaKurung, tutupKurung) {
  const p = path.join(ROOT, 'assets/js', nama);
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const i = s.indexOf(bukaKurung), j = s.lastIndexOf(tutupKurung);
  try { return JSON.parse(s.slice(i, j + 1)); } catch { return null; }
}

function hariIniWIB() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);
}

function simpan(rapor) {
  rapor.diperbarui = new Date(Date.now() + 7 * 3600 * 1000)
    .toISOString().replace('Z', '+07:00');
  const kepala = [
    '// Rapor Sinyal: buku besar pembacaan arah yang BISA DITAGIH.',
    '//',
    '// Tiap benang Signal Harian menyebut penanda ujinya sendiri (rilis apa, kapan,',
    '// yang membedakan skenario). File ini mencatat tiap klaim itu beserta',
    '// tenggatnya, lalu scripts/rapor-tagih.mjs menagihnya begitu jatuh tempo:',
    '// terkonfirmasi, patah, atau kedaluwarsa, selalu dengan bukti berupa artikel',
    '// arsip sendiri. Yang tidak pernah boleh terjadi: mengubah bunyi klaim setelah',
    '// dicatat. Klaim dikutip apa adanya dari edisinya, salah ya salah.',
    '//',
    '// JANGAN diedit manual; diisi dan ditagih scripts/rapor-tagih.mjs.',
  ].join('\n');
  fs.writeFileSync(path.join(ROOT, 'assets/js/rapor.js'),
    kepala + '\nvar RAPOR = ' + JSON.stringify(rapor, null, 1) + ';\n', 'utf8');
}

// ---------- 1. pencatatan edisi baru ----------
async function catatEdisiBaru(rapor, arsip) {
  const tercatat = new Set(rapor.entri.map(e => e.edisi));
  const baru = (arsip || []).filter(h => h && h.tanggal && !tercatat.has(h.tanggal));
  for (const h of baru) {
    const system = [
      'Kamu pencatat rapor untuk media ekonomi The Signal. Tugasmu MENYALIN klaim',
      'arah dari tulisan Signal Harian ke buku rapor, bukan menulis pendapat baru.',
      'Untuk TIAP benang, catat:',
      '- "klaim": pembacaan arah yang bisa dinilai benar/salah kelak, ditulis satu',
      '  kalimat utuh, setia pada bunyi benangnya. Bukan rangkuman berita, melainkan',
      '  prediksi/penilaian arahnya.',
      '- "penanda": peristiwa atau rilis yang disebut benang itu sebagai pengujinya.',
      '- "tenggat": tanggal YYYY-MM-DD saat penandanya paling lambat bisa dinilai;',
      '  null kalau benangnya tidak memberi patokan waktu.',
      '- "tenggatLabel": patokan waktunya dalam kata-kata benang itu sendiri.',
      'Jawab HANYA array JSON: [{"benang","klaim","penanda","tenggat","tenggatLabel"}].',
      'Jumlah elemen HARUS sama dengan jumlah benang.',
      PENGAMAN,
    ].join('\n');
    const user = '<<<DATA>>>\n' +
      h.benang.map(b => 'BENANG: ' + b.judul + '\n' + b.isi).join('\n\n') +
      '\n<<<AKHIR_DATA>>>';
    const hasil = ambilJSON(await tanya(system, user));
    if (!Array.isArray(hasil) || hasil.length !== h.benang.length) {
      log('rapor: edisi ' + h.tanggal + ' hasil pencatatan tidak utuh, dilewati putaran ini');
      continue;
    }
    hasil.forEach((x, i) => {
      rapor.entri.unshift({
        id: h.tanggal + '-' + (i + 1),
        edisi: h.tanggal,
        benang: h.benang[i].judul,
        klaim: String(x.klaim || '').trim(),
        penanda: String(x.penanda || '').trim(),
        tenggat: /^\d{4}-\d{2}-\d{2}$/.test(x.tenggat || '') ? x.tenggat : null,
        tenggatLabel: String(x.tenggatLabel || '').trim() || null,
        status: 'menunggu',
        bukti: null,
      });
    });
    log('rapor: edisi ' + h.tanggal + ' tercatat, ' + hasil.length + ' klaim');
  }
  return baru.length;
}

// ---------- 2. penagihan klaim jatuh tempo ----------
async function tagih(rapor, ARTICLES) {
  const hariIni = hariIniWIB();
  const slugSah = new Map(ARTICLES.map(a => [a.slug, a]));
  const jatuhTempo = rapor.entri.filter(e =>
    e.status === 'menunggu' && e.tenggat && e.tenggat <= hariIni);
  if (!jatuhTempo.length) return 0;

  // Bahan bukti: arsip 30 hari terakhir, cukup judul + arah + tanggal.
  // Model menilai DARI SINI SAJA; klaim yang buktinya tidak ada di arsip
  // sendiri memang belum bisa dinilai, dan itu jawaban yang sah.
  const batas = Date.now() - 30 * 86400000;
  const bukti = ARTICLES
    .filter(a => new Date(a.isoDate || 0).getTime() > batas)
    .slice(0, 60)
    .map(a => a.slug + ' | ' + String(a.date) + ' | ' + String(a.title).replace(/[\[\]]/g, '') +
      ' | ' + String(a.takeaway || '').slice(0, 180));

  let dinilai = 0;
  for (const e of jatuhTempo) {
    const system = [
      'Kamu penilai rapor media ekonomi The Signal. Satu klaim arah sudah jatuh',
      'tempo dan harus dinilai JUJUR, dari daftar artikel arsip di DATA saja.',
      'Aturan keras:',
      '- "terkonfirmasi" hanya kalau ada artikel arsip yang isinya menunjukkan',
      '  arah yang diklaim memang terjadi. Sebut slug-nya.',
      '- "patah" hanya kalau ada artikel arsip yang menunjukkan arah sebaliknya.',
      '  Sebut slug-nya.',
      '- Kalau arsip tidak memuat bukti yang jelas ke salah satu arah, jawab',
      '  "menunggu". Itu jawaban yang benar, bukan kegagalan. JANGAN menilai dari',
      '  pengetahuan umum atau ingatan; HANYA dari daftar artikel di DATA.',
      'Jawab HANYA JSON: {"status":"terkonfirmasi|patah|menunggu","slug":"...","alasan":"satu kalimat"}.',
      PENGAMAN,
    ].join('\n');
    const user = 'KLAIM (dicatat ' + e.edisi + '): ' + e.klaim +
      '\nPENANDA UJI: ' + e.penanda +
      '\n\n<<<DATA>>>\n' + bukti.join('\n') + '\n<<<AKHIR_DATA>>>';
    let v;
    try { v = ambilJSON(await tanya(system, user)); }
    catch (err) { log('rapor: penilaian ' + e.id + ' gagal: ' + (err.message || err)); continue; }

    if ((v.status === 'terkonfirmasi' || v.status === 'patah') && slugSah.has(v.slug)) {
      const a = slugSah.get(v.slug);
      e.status = v.status;
      e.bukti = {
        slug: a.slug,
        judul: String(a.title).replace(/[\[\]]/g, ''),
        tanggal: a.date,
        alasan: String(v.alasan || '').trim(),
      };
      dinilai++;
      log('rapor: ' + e.id + ' -> ' + v.status + ' (bukti: ' + a.slug + ')');
    } else if (v.status === 'terkonfirmasi' || v.status === 'patah') {
      // Vonis tanpa bukti sah = vonis ditolak. Persis untuk ini penjaganya ada.
      log('rapor: ' + e.id + ' vonis ' + v.status + ' DITOLAK, slug bukti tidak ada di arsip: ' + v.slug);
    }
  }
  return dinilai;
}

// ---------- 3. kedaluwarsa (deterministik) ----------
function kedaluwarsa(rapor) {
  const batas = new Date(Date.now() - HARI_KEDALUWARSA * 86400000)
    .toISOString().slice(0, 10);
  let n = 0;
  for (const e of rapor.entri) {
    if (e.status === 'menunggu' && e.tenggat && e.tenggat < batas) {
      e.status = 'kedaluwarsa';
      n++;
    }
  }
  return n;
}

async function main() {
  const rapor = muat('rapor.js', '{', '}');
  if (!rapor || !Array.isArray(rapor.entri)) {
    log('rapor.js tidak ada atau rusak, tidak ada yang bisa ditagih.');
    process.exit(1);
  }
  const arsip = muat('harian-arsip.js', '[', ']') || [];
  const ARTICLES = muat('articles.js', '[', ']') || [];

  let ubah = 0;
  try { ubah += await catatEdisiBaru(rapor, arsip); }
  catch (err) { log('rapor: pencatatan edisi baru gagal: ' + (err.message || err)); }
  try { ubah += await tagih(rapor, ARTICLES); }
  catch (err) { log('rapor: penagihan gagal: ' + (err.message || err)); }
  ubah += kedaluwarsa(rapor);

  simpan(rapor);
  const hitung = {};
  for (const e of rapor.entri) hitung[e.status] = (hitung[e.status] || 0) + 1;
  log('rapor: ' + rapor.entri.length + ' klaim (' +
    Object.entries(hitung).map(([k, v]) => v + ' ' + k).join(', ') + ')' +
    (ubah ? '' : ' - tidak ada perubahan'));
}

main().catch(e => { console.error(String(e.stack || e)); process.exit(1); });
