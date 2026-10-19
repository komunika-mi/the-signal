// Klaim arah: taruhan yang dicatat SEBELUM keputusannya jatuh.
//
// Rapor Sinyal sejauh ini mencatat klaim yang lahir dari berita hari itu, jadi
// arah selalu dibicarakan setelah peristiwanya ada. Modul ini membalik
// urutannya untuk isu yang tanggal putusannya sudah kelihatan: begitu tanggal
// itu masuk jendela, satu klaim dicatat lebih dulu, memilih satu cabang dari
// daftar cabang isunya, dengan tenggat sama dengan tanggal putusan. Yang
// menagihnya tetap rapor-tagih.mjs, mesin yang sudah ada.
//
// Empat hal yang disengaja:
//
// 1. TANGGAL PUTUSAN TIDAK PERNAH DATANG DARI MODEL. Ia diambil dari agenda,
//    yang mengekstraksinya dengan pola tanggal dari artikel arsip, atau dari
//    field putusan yang ditulis tangan di registry tema. Model yang boleh
//    mengarang tanggal akan menghasilkan rapor yang jatuh temponya fiktif.
// 2. SATU ISU HANYA PUNYA SATU KLAIM MENUNGGU. Tanpa pagar ini, tiap putaran
//    harian menambah satu taruhan untuk isu yang sama dan rapor berubah jadi
//    tumpukan tebakan berulang, bukan rekam jejak.
// 3. MODEL HANYA MEMILIH, TIDAK MENGARANG CABANG. Cabang di luar daftar
//    registry ditolak, jadi halaman tema dan rapor selalu bicara tentang
//    kemungkinan yang sama persis.
// 4. BUKAN ANJURAN TRANSAKSI. Aturannya ditulis di prompt DAN diuji penjaga
//    kata di bawah, karena prompt saja tidak pernah cukup. The Signal tidak
//    punya izin memberi rekomendasi efek dan tidak boleh terdengar seperti
//    memberinya.
import { log, readData } from './lib.mjs';
import { TEMA, temaDariArtikel, MIN_ARTIKEL_TEMA } from './tema.mjs';
import { agendaGabungan } from './agenda-sinyal.mjs';
import { PENGAMAN, GAYA, tanya, ambilJSON } from './rewrite.mjs';
import { muatRapor, simpanRapor } from './rapor-berkas.mjs';

// Jendela taruhan. Terlalu jauh, arsipnya belum punya bahan untuk condong ke
// mana pun; terlalu dekat, taruhannya tidak lagi mendahului siapa-siapa.
const JENDELA_HARI = 45;
const MAKS_BUKTI = 20;

const KERING = process.argv.includes('--kering');

// Penjaga anjuran transaksi. Yang dilarang bukan kata "saham" atau "jual",
// yang wajar muncul dalam kalimat pasar, melainkan bentuk ajakan bertransaksi.
const POLA_ANJURAN = [
  /\b(beli|jual|akumulas\w*|koleksi|lepas)\s+(saham|efek)\b/i,
  /\brekomendasi\s+(beli|jual|hold|tahan)\b/i,
  /\btarget\s+harga\b/i,
  /\b(cut\s*loss|take\s*profit|buy|sell)\b/i,
  /\blayak\s+(dibeli|dikoleksi|dikumpulkan)\b/i,
];

function hariIniWIB() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);
}

function isoTambah(hari) {
  return new Date(Date.now() + (7 * 3600 + hari * 86400) * 1000)
    .toISOString().slice(0, 10);
}

// Tanggal putusan berikutnya untuk satu tema.
//
// Urutan sumber: putusan manual di registry lebih dulu (ditulis redaksi, jadi
// paling tahu), lalu tanggal dari agenda yang artikel sumbernya memang milik
// tema itu. Tanggal pasti didahulukan daripada perkiraan; perkiraan tetap
// dipakai kalau itu satu-satunya yang ada, dan labelnya ikut jujur.
function putusanBerikut(tema, agendaTema) {
  const hariIni = hariIniWIB();
  const manual = tema.taruhan && tema.taruhan.putusan;
  if (manual && manual.iso > hariIni) {
    return { iso: manual.iso, label: manual.label, judul: manual.judul || manual.label, sumber: 'registry' };
  }
  // Tanggal dari agenda baru dianggap tanggal putusan kalau kalimat agendanya
  // sendiri menyebut pokok isunya. Tanpa saringan ini, "RUPSLB 18 September"
  // yang kebetulan disebut di dalam artikel bertema MSCI akan dipakai sebagai
  // tenggat taruhan soal klasifikasi pasar, dan penanda ujinya omong kosong
  // sejak lahir.
  const pola = tema.taruhan.polaPutusan;
  const depan = agendaTema.filter(e => e.iso > hariIni &&
    (!pola || pola.test(e.teks || '') || pola.test(e.judul || '')));
  if (!depan.length) return null;
  const pasti = depan.find(e => !e.perkiraan);
  const e = pasti || depan[0];
  // Penanda uji memakai KALIMAT tempat tanggal itu disebut, bukan judul
  // artikelnya. Judul artikel cuma memberi tahu berita apa yang memuat
  // tanggalnya ("MSCI Keluarkan CPIN dan GOTO"), sedangkan yang perlu ditagih
  // belakangan adalah peristiwa yang dijanjikan kalimat itu.
  return {
    iso: e.iso,
    label: e.label + (e.perkiraan ? ' (perkiraan)' : ''),
    judul: (e.teks || e.judul || '').trim() || e.judul,
    sumber: 'agenda',
  };
}

async function pilihCabang(tema, putusan, artikel) {
  const daftar = tema.taruhan.cabang
    .map((c, i) => i + '. ' + c.nama + ' - ' + c.arti).join('\n');
  const system = [
    'Kamu analis arah untuk media ekonomi The Signal. Satu isu akan diputuskan pada',
    'tanggal yang sudah diketahui. Tugasmu memilih SATU cabang hasil dari daftar yang',
    'diberikan, lalu menuliskannya sebagai klaim satu kalimat yang bisa dinilai benar',
    'atau salah setelah tanggal itu lewat.',
    '',
    'Aturan keras:',
    '- Pilih cabang HANYA dari daftar. Jangan mengarang cabang baru dan jangan',
    '  menggabungkan dua cabang.',
    '- Klaim ditulis SATU kalimat yang menyebut hasil pilihanmu dengan terang.',
    '  Jangan memakai pengaman berlapis seperti "kemungkinan besar bisa saja".',
    '  Klaim yang tidak bisa dinyatakan salah tidak ada gunanya untuk rapor.',
    '- Dasarkan pilihan HANYA pada artikel arsip di DATA, bukan ingatan umum.',
    '- Kalau arsipnya belum cukup untuk condong ke satu cabang, jawab',
    '  {"cukup": false, "alasan": "..."}. Itu jawaban yang sah, bukan kegagalan.',
    '- DILARANG KERAS memberi anjuran transaksi efek: tidak ada ajakan membeli,',
    '  menjual, mengakumulasi, tidak ada target harga. The Signal membaca arah',
    '  kebijakan dan pasar, bukan memberi rekomendasi investasi.',
    '',
    'Jawab HANYA JSON: {"cukup":true,"cabang":<nomor>,"klaim":"...","alasan":"satu kalimat"}.',
    GAYA,
    PENGAMAN,
  ].join('\n');

  const user = [
    'ISU: ' + tema.nama,
    'PERTANYAAN: ' + tema.taruhan.pertanyaan,
    'YANG MEMUTUSKAN: ' + tema.taruhan.pemutus,
    'TANGGAL PUTUSAN: ' + putusan.label + ' (' + putusan.iso + ')',
    '',
    'CABANG YANG MUNGKIN:',
    daftar,
    '',
    'YANG MENGGESER PUTUSAN:',
    (tema.taruhan.ambang || []).map(x => '- ' + x).join('\n'),
    '',
    '<<<DATA>>>',
    artikel.map(a => a.date + ' | ' + String(a.title).replace(/[\[\]]/g, '') +
      ' | ' + String(a.takeaway || '').slice(0, 220)).join('\n'),
    '<<<AKHIR_DATA>>>',
  ].join('\n');

  return ambilJSON(await tanya(system, user));
}

async function main() {
  const rapor = muatRapor();
  if (!rapor || !Array.isArray(rapor.entri)) {
    log('klaim-arah: rapor.js tidak ada atau rusak, berhenti.');
    process.exit(1);
  }
  const ARTICLES = readData('articles.js', 'ARTICLES');
  const AGENDA = agendaGabungan(ARTICLES);

  // Peta slug artikel -> tema, dipakai menyaring agenda per tema. Agenda
  // menyimpan slug artikel sumbernya, jadi penyaringan ini sama
  // deterministiknya dengan pencocokan tema itu sendiri.
  const temaSlug = new Map();
  for (const a of ARTICLES) {
    if (a.slug) temaSlug.set(a.slug, temaDariArtikel(a));
  }

  const batas = isoTambah(JENDELA_HARI);
  let tambah = 0;

  for (const tema of TEMA) {
    if (!tema.taruhan) continue;

    const artikel = ARTICLES.filter(a => (temaSlug.get(a.slug) || []).includes(tema.slug));
    if (artikel.length < MIN_ARTIKEL_TEMA) {
      log('klaim-arah: ' + tema.slug + ' bahan arsipnya baru ' + artikel.length + ', dilewati');
      continue;
    }

    // Satu isu, satu taruhan terbuka.
    if (rapor.entri.some(e => e.isu === tema.slug && e.status === 'menunggu')) continue;

    const agendaTema = AGENDA.filter(e => e.slug && (temaSlug.get(e.slug) || []).includes(tema.slug));
    const putusan = putusanBerikut(tema, agendaTema);
    if (!putusan) continue;
    if (putusan.iso > batas) continue;

    const id = 'arah-' + tema.slug + '-' + putusan.iso;
    if (rapor.entri.some(e => e.id === id)) continue;

    // Jalan kering: perlihatkan isu mana yang masuk jendela dan tanggal apa
    // yang terpilih, tanpa memanggil model dan tanpa menulis rapor. Dipakai
    // waktu memeriksa pemilihan tanggalnya, bagian yang paling mudah salah.
    if (KERING) {
      log('[kering] ' + tema.slug + ': putusan ' + putusan.iso + ' (' + putusan.sumber + ') "' +
        putusan.judul + '", ' + artikel.length + ' artikel arsip, ' +
        tema.taruhan.cabang.length + ' cabang');
      continue;
    }

    let hasil;
    try { hasil = await pilihCabang(tema, putusan, artikel.slice(0, MAKS_BUKTI)); }
    catch (err) { log('klaim-arah: ' + tema.slug + ' gagal: ' + (err.message || err)); continue; }

    if (!hasil || typeof hasil !== 'object' || Array.isArray(hasil)) {
      log('klaim-arah: ' + tema.slug + ' membalas bentuk tak dikenal, dilewati');
      continue;
    }
    if (hasil.cukup === false) {
      log('klaim-arah: ' + tema.slug + ' arsipnya belum condong ke satu cabang, ditunda');
      continue;
    }

    const i = Number(hasil.cabang);
    if (!Number.isInteger(i) || i < 0 || i >= tema.taruhan.cabang.length) {
      log('klaim-arah: ' + tema.slug + ' memilih cabang di luar daftar (' + hasil.cabang + '), ditolak');
      continue;
    }
    const klaim = String(hasil.klaim || '').trim();
    if (klaim.length < 25) {
      log('klaim-arah: ' + tema.slug + ' klaimnya terlalu pendek untuk bisa dinilai, ditolak');
      continue;
    }
    const anjuran = POLA_ANJURAN.find(p => p.test(klaim));
    if (anjuran) {
      log('klaim-arah: ' + tema.slug + ' klaimnya berbunyi anjuran transaksi, DITOLAK (' + anjuran + ')');
      continue;
    }

    rapor.entri.unshift({
      id,
      edisi: null,
      isu: tema.slug,
      isuNama: tema.nama,
      benang: tema.taruhan.pertanyaan,
      cabang: tema.taruhan.cabang[i].nama,
      klaim,
      penanda: putusan.judul,
      tenggat: putusan.iso,
      tenggatLabel: putusan.label,
      status: 'menunggu',
      bukti: null,
    });
    tambah++;
    log('klaim-arah: ' + tema.slug + ' -> "' + tema.taruhan.cabang[i].nama +
      '", tenggat ' + putusan.iso + ' (' + putusan.sumber + ')');
  }

  if (tambah) simpanRapor(rapor);
  log('klaim-arah: ' + tambah + ' taruhan baru dicatat');
}

main().catch(e => { console.error(String(e.stack || e)); process.exit(1); });
