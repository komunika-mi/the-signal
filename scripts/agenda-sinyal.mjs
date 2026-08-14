// Agenda Sinyal: tanggal-tanggal yang akan menentukan arah.
//
// Tiap catatan "Arahnya ke mana" dan badan artikel menyebut penentunya sendiri:
// RUPSLB 18 September, tanggal efektif rebalancing 1 September, tenggat
// pendaftaran 31 Agustus. Tanggal-tanggal itu selama ini terkubur di dalam
// artikel masing-masing. Modul ini mengumpulkannya jadi satu kalender maju,
// karena pelaku bisnis butuh tahu KAPAN harus siaga, bukan cuma apa yang
// sudah terjadi.
//
// SELURUHNYA DETERMINISTIK. Ekstraksi memakai pola tanggal Indonesia, bukan
// panggilan model, jadi kalendernya bisa dihitung ulang kapan pun dari arsip
// dan tidak pernah memuat tanggal yang tidak tertulis di artikelnya.
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
  'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const NO_BULAN = Object.fromEntries(BULAN.map((b, i) => [b.toLowerCase(), i]));

// "Hari ini" versi WIB. Kalender maju harus dihitung dari zona pembacanya:
// pukul 20.00 UTC tanggal 31 masih tanggal 31 di server, tapi di Jakarta
// sudah tanggal 1, dan agenda "besok" yang masih tampil sebagai "hari ini"
// membuat kalendernya kelihatan basi.
function hariIniWIB() {
  const w = new Date(Date.now() + 7 * 3600 * 1000);
  return Date.UTC(w.getUTCFullYear(), w.getUTCMonth(), w.getUTCDate());
}

function iso(utcMs) { return new Date(utcMs).toISOString().slice(0, 10); }

function labelTanggal(utcMs, tanpaHari) {
  const d = new Date(utcMs);
  return (tanpaHari ? '' : d.getUTCDate() + ' ') + BULAN[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}

// Kalimat tempat tanggalnya disebut, sebagai konteks entri. Pemotongan di
// batas kata supaya tidak berhenti di tengah angka atau nama.
function kalimatSekitar(teks, posisi) {
  let awal = 0;
  for (let i = posisi; i > 0; i--) {
    if ('.!?'.includes(teks[i - 1]) && teks[i] === ' ') { awal = i + 1; break; }
  }
  let akhir = teks.length;
  for (let i = posisi; i < teks.length - 1; i++) {
    if ('.!?'.includes(teks[i]) && (teks[i + 1] === ' ' || i === teks.length - 1)) { akhir = i + 1; break; }
  }
  let k = teks.slice(awal, akhir).trim();
  if (k.length > 240) {
    const potong = k.slice(0, 240);
    const spasi = potong.lastIndexOf(' ');
    k = potong.slice(0, spasi > 150 ? spasi : 240).replace(/[,;:\s]+$/, '') + '…';
  }
  return k;
}

// Tanggal yang disebut artikel, dua bentuk:
//   "18 September 2026" / "18 September"  -> tanggal pasti
//   "akhir Agustus 2026" / "awal September" / "November 2026" -> perkiraan
// Bulan tanpa angka hari dipetakan: awal=5, pertengahan=15, akhir=25, polos=15,
// dan ditandai perkiraan supaya halamannya jujur soal presisinya.
const POLA_TANGGAL = new RegExp(
  '(?:\\b(\\d{1,2})\\s+(' + BULAN.join('|') + ')(?:\\s+(\\d{4}))?\\b)' +
  '|(?:\\b(awal|pertengahan|akhir)?\\s*(' + BULAN.join('|') + ')\\s+(\\d{4})\\b)', 'g');

function tahunArtikel(a) {
  const t = parseInt(String(a.isoDate || '').slice(0, 4), 10);
  return Number.isFinite(t) ? t : new Date().getUTCFullYear();
}

export function ekstrakAgenda(ARTICLES, opsi = {}) {
  const hariIni = hariIniWIB();
  const batasDepan = hariIni + (opsi.maksHari || 120) * 86400000;
  const entri = [];
  const lihat = new Set();

  for (const a of ARTICLES) {
    // Takeaway dulu baru badan: catatan arah adalah tempat penanda uji
    // dituliskan, jadi kalimat konteksnya paling padat di sana.
    const teks = [a.takeaway || '', ...(a.body || [])].join(' ');
    POLA_TANGGAL.lastIndex = 0;
    let m;
    while ((m = POLA_TANGGAL.exec(teks)) !== null) {
      let utc, perkiraan = false, tanpaHari = false;
      if (m[1]) {
        const tahun = m[3] ? parseInt(m[3], 10) : tahunArtikel(a);
        utc = Date.UTC(tahun, NO_BULAN[m[2].toLowerCase()], parseInt(m[1], 10));
      } else {
        // Bulan polos (tanpa angka hari dan tanpa awal/pertengahan/akhir)
        // sering bukan jadwal, melainkan LABEL PERIODE DATA: "Survei Penjualan
        // Eceran periode Agustus 2026" atau "angka ICP Agustus 2026" menyebut
        // data bulan apa, bukan kapan rilisnya (rilisnya justru bulan
        // berikutnya). Ditangkap verifikator 14 Agustus 2026: tiga entri
        // kalender memajang tanggal yang bukan tanggal peristiwa. Dua pagar:
        //   1. didahului kata "periode" -> pasti label data, buang;
        //   2. bulan polos yang sama dengan bulan artikelnya sendiri ->
        //      obrolan "bulan ini", bukan tenggat; tenggat nyata dalam bulan
        //      berjalan hampir selalu membawa angka hari.
        if (!m[4]) {
          if (/periode\s*$/i.test(teks.slice(Math.max(0, m.index - 12), m.index))) continue;
          const isoA = String(a.isoDate || '');
          if (parseInt(isoA.slice(5, 7), 10) - 1 === NO_BULAN[m[5].toLowerCase()] &&
              parseInt(isoA.slice(0, 4), 10) === parseInt(m[6], 10)) continue;
        }
        const hariKira = { awal: 5, pertengahan: 15, akhir: 25 }[m[4]] || 15;
        utc = Date.UTC(parseInt(m[6], 10), NO_BULAN[m[5].toLowerCase()], hariKira);
        perkiraan = true;
        tanpaHari = !m[4];
      }
      if (!Number.isFinite(utc) || utc <= hariIni || utc > batasDepan) continue;

      // Satu peristiwa kerap disebut dua artikel (dua laporan RUPSLB emiten
      // yang sama). Kuncinya emiten+tanggal kalau ada emitennya, slug+tanggal
      // kalau tidak, supaya kalender tidak mengulang baris yang sama.
      const kunci = (a.emiten || a.slug) + '|' + iso(utc);
      if (lihat.has(kunci)) continue;
      lihat.add(kunci);

      entri.push({
        iso: iso(utc),
        label: (m[4] ? m[4] + ' ' : '') + labelTanggal(utc, tanpaHari || !!m[4]),
        perkiraan,
        teks: kalimatSekitar(teks, m.index),
        slug: a.slug,
        judul: String(a.title).replace(/[\[\]]/g, ''),
        emiten: a.emiten || null,
        kategori: a.category,
      });
    }
  }
  return entri;
}

// Jadwal rilis BPS yang bisa dihitung dari polanya sendiri: inflasi terbit
// hari kerja pertama tiap bulan, perdagangan sekitar tanggal 15, PDB awal
// Februari/Mei/Agustus/November, ketenagakerjaan Mei dan November. Semua
// ditandai perkiraan; yang pasti hanya BPS sendiri yang tahu.
export function agendaBps() {
  const hariIni = hariIniWIB();
  const d = new Date(hariIni);
  const th = d.getUTCFullYear(), bl = d.getUTCMonth();
  const hasil = [];

  function tambah(utc, apa, kenapa) {
    if (utc <= hariIni) return;
    hasil.push({
      iso: iso(utc), label: 'sekitar ' + labelTanggal(utc), perkiraan: true,
      teks: kenapa, judul: apa, slug: null, emiten: null, kategori: 'Angka Ekonomi',
    });
  }

  // Inflasi bulan X terbit awal bulan X+1.
  const rilisInflasi = Date.UTC(th, bl + 1, 1) <= hariIni ? Date.UTC(th, bl + 2, 1) : Date.UTC(th, bl + 1, 1);
  const blData = new Date(rilisInflasi);
  tambah(rilisInflasi,
    'Rilis inflasi ' + BULAN[(blData.getUTCMonth() + 11) % 12] + ' dari BPS',
    'Angka inflasi bulanan menentukan ruang gerak suku bunga dan daya beli. ' +
    'Perkiraan jadwal mengikuti pola rilis BPS di awal bulan.');

  // Neraca perdagangan bulan X terbit sekitar tanggal 15 bulan X+1.
  const rilisDagang = Date.UTC(th, bl, 15) <= hariIni ? Date.UTC(th, bl + 1, 15) : Date.UTC(th, bl, 15);
  const blDagang = new Date(rilisDagang);
  tambah(rilisDagang,
    'Rilis ekspor-impor ' + BULAN[(blDagang.getUTCMonth() + 11) % 12] + ' dari BPS',
    'Neraca perdagangan bulanan, penopang utama pasokan devisa dan arah rupiah. ' +
    'Perkiraan jadwal mengikuti pola rilis BPS di pertengahan bulan.');

  // PDB triwulanan: awal Feb, Mei, Agu, Nov.
  for (const [blRilis, tw] of [[1, 'IV'], [4, 'I'], [7, 'II'], [10, 'III']]) {
    const utc = Date.UTC(th, blRilis, 5);
    if (utc > hariIni) {
      tambah(utc, 'Rilis PDB Triwulan ' + tw + ' dari BPS',
        'Angka pertumbuhan ekonomi triwulanan. Perkiraan jadwal mengikuti pola rilis BPS.');
      break;
    }
  }

  // Ketenagakerjaan: Mei (data Februari) dan November (data Agustus).
  for (const blRilis of [4, 10]) {
    const utc = Date.UTC(th, blRilis, 5);
    if (utc > hariIni) {
      tambah(utc, 'Rilis angka pengangguran dari BPS',
        'Tingkat pengangguran terbuka semesteran. Perkiraan jadwal mengikuti pola rilis BPS.');
      break;
    }
  }

  return hasil;
}

// Kalender gabungan, urut tanggal terdekat. Ini yang dipakai halaman agenda
// dan blok beranda.
export function agendaGabungan(ARTICLES, opsi = {}) {
  return [...ekstrakAgenda(ARTICLES, opsi), ...agendaBps()]
    .sort((a, b) => a.iso < b.iso ? -1 : a.iso > b.iso ? 1 : 0);
}
