// Jenis peristiwa korporasi: dasar penggabungan berita lanjutan (update-idx)
// dan halaman rangkuman per peristiwa (build-pages, /peristiwa/).
//
// KENAPA ADA. Laporan Oktober 2026 menemukan satu peristiwa terbit sebagai
// banyak artikel tipis: right issue FORU sembilan artikel (tiga di antaranya
// terbit 14 September), RUPST SQMI dua artikel berselang sehari. Satu RUPS
// biasa melahirkan tiga dokumen resmi (pemberitahuan rencana, panggilan,
// ringkasan risalah) dan dulu ketiganya jadi tiga URL. Bagi mesin pencari itu
// tumpukan halaman nyaris kembar; bagi pembaca, cerita yang tercecer.
//
// Mulai 11 November 2026 dokumen lanjutan MEMPERBARUI artikel yang sudah ada
// (URL tetap, label "Diperbarui", riwayat pembaruan di bawahnya), dan arsip
// lama yang terlanjur tercecer dirangkum di satu halaman per peristiwa.
//
// Penggolongan memakai JUDUL DAN PERIHAL RESMI IDX, bukan judul tulisan kita.
// Judul kita parafrase dan terlalu bervariasi: "KPIG: Direktur Ajukan Mundur,
// Tunggu RUPS" akan tergolong RUPS kalau dibaca dari judul kita. Judul IDX
// baku ("Pemanggilan Rapat Umum Pemegang Saham Luar Biasa"). Artikel baru
// menyimpan golongannya sendiri di field `peristiwa`; arsip sebelum 11
// November digolongkan sekali dari judul IDX aslinya dan disimpan di
// assets/data/peristiwa-arsip.json (slug -> kunci).
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, keWaktu } from './lib.mjs';

// Urutan PENTING: yang pertama cocok menang.
//   - transaksi sebelum rups: "Transaksi Material tanpa Persetujuan RUPS"
//     adalah transaksi, bukan RUPS.
//   - rupo sebelum rups: rapat pemegang obligasi/sukuk bukan rapat saham.
//   - rups sebelum right issue: rangkaian baku RUPS (rencana, panggilan,
//     risalah) adalah sumber kembar terbanyak; menyatukannya lebih berguna
//     daripada memecahnya menurut agenda.
// jendela = hari dari artikel PERTAMA peristiwa itu. Dokumen yang datang
// lebih lambat dianggap peristiwa baru.
// hub = boleh punya halaman rangkuman /peristiwa/ (hanya aksi korporasi).
export const JENIS = [
  { kunci: 'transaksi', label: 'Transaksi material & afiliasi', jendela: 90, hub: false,
    rx: /transaksi material|transaksi afiliasi|benturan kepentingan|nilainya material/i },
  { kunci: 'rupo', label: 'Rapat pemegang obligasi', jendela: 60, hub: false,
    rx: /\brupo\b|\brupsu\b|rapat umum (para )?pemegang (obligasi|sukuk)/i },
  { kunci: 'rups', label: 'RUPS', jendela: 75, hub: true,
    rx: /\brups(t|lb)?\b|rapat umum (para )?pemegang saham/i },
  { kunci: 'tender-offer', label: 'Tender offer & go private', jendela: 120, hub: true,
    rx: /tender offer|penawaran tender|go[ -]private|delisting sukarela|voluntary delisting/i },
  { kunci: 'right-issue', label: 'Right issue & penambahan modal', jendela: 120, hub: true,
    rx: /hmetd|hak memesan efek terlebih dahulu|rights? issue|private placement|penambahan modal/i },
  { kunci: 'stock-split', label: 'Stock split', jendela: 90, hub: true,
    rx: /stock split|pemecahan (nilai nominal )?saham|reverse stock|penggabungan nilai nominal/i },
  { kunci: 'buyback', label: 'Buyback saham', jendela: 120, hub: true,
    rx: /pembelian kembali saham|buy ?back saham|\bbuyback\b/i },
  { kunci: 'akuisisi', label: 'Akuisisi & merger', jendela: 120, hub: true,
    rx: /akuisisi|merger|penggabungan usaha|peleburan|pengambilalihan|divestasi/i },
  { kunci: 'dividen', label: 'Dividen', jendela: 60, hub: true,
    rx: /dividen/i },
  { kunci: 'suspensi', label: 'Suspensi & papan pemantauan', jendela: 30, hub: false,
    rx: /suspensi|penghentian sementara|pembukaan kembali perdagangan|pemantauan khusus|delisting/i },
  { kunci: 'obligasi', label: 'Obligasi & sukuk', jendela: 60, hub: false,
    rx: /obligasi|sukuk|efek bersifat utang|\bmtn\b/i },
  { kunci: 'lapkeu', label: 'Laporan keuangan', jendela: 30, hub: false,
    rx: /laporan keuangan|laporan tahunan/i },
  { kunci: 'public-expose', label: 'Public expose', jendela: 30, hub: false,
    rx: /public expose|paparan publik/i },
  // kepemilikan sebelum pengurus: perihal formulir LK kadang menyebut
  // "Anggota Direksi" sebagai pelapornya, padahal isinya transaksi saham.
  { kunci: 'kepemilikan', label: 'Kepemilikan saham', jendela: 7, hub: false,
    rx: /kepemilikan saham|perubahan (struktur )?pemegang saham/i },
  { kunci: 'pengurus', label: 'Perubahan pengurus', jendela: 45, hub: false,
    rx: /direksi|komisaris|direktur|pengunduran diri/i },
];
const PER_KUNCI = new Map(JENIS.map(j => [j.kunci, j]));
export const infoJenis = (kunci) => PER_KUNCI.get(kunci) || null;

// Golongan dari teks resmi IDX (judul + perihal). null = tidak tergolong,
// dan dokumen seperti itu selalu jadi artikel sendiri.
export function jenisDariIDX(judulAsli, perihal = '') {
  const teks = String(judulAsli || '') + ' ' + String(perihal || '');
  for (const j of JENIS) if (j.rx.test(teks)) return j.kunci;
  return null;
}

// ---------- golongan arsip ----------
// Berkasnya memuat dua peta: slug -> golongan untuk semua artikel arsip yang
// tergolong, dan slug -> judul resmi IDX khusus golongan yang punya halaman
// rangkuman (daftar "Dokumen resmi" di sana memakai judul IDX).
const BERKAS_ARSIP = path.join(ROOT, 'assets/data/peristiwa-arsip.json');
let _arsip = null;
function muatArsip() {
  if (_arsip) return _arsip;
  try {
    const j = JSON.parse(fs.readFileSync(BERKAS_ARSIP, 'utf8'));
    _arsip = { slug: j.slug || {}, judul: j.judul || {} };
  } catch { _arsip = { slug: {}, judul: {} }; }
  return _arsip;
}
export function petaArsip() { return muatArsip().slug; }
export function jenisArtikel(a) {
  if (!a) return null;
  if (a.peristiwa) return a.peristiwa;
  return petaArsip()[a.slug] || null;
}
export function judulIdxArtikel(a) {
  if (!a) return '';
  return a.judulIdx || muatArsip().judul[a.slug] || '';
}

// ---------- penggabungan ----------
const HARI = 86400000;
const waktu = (iso) => { const d = keWaktu(iso); return d ? d.getTime() : 0; };

// Artikel yang paling mungkin dilanjutkan dokumen ini: emiten sama, golongan
// sama, dan dokumennya terbit dalam jendela sejak artikel itu PERTAMA terbit.
// Model tetap memeriksa ulang apakah peristiwanya benar-benar sama (lihat
// perbaruiKeterbukaan); fungsi ini cuma memilih calon.
export function cariSasaranGabung(kandidat, kunci, daftar) {
  const j = infoJenis(kunci);
  if (!j || !kandidat.emiten) return null;
  const tDok = waktu(kandidat.terbit);
  if (!tDok) return null;
  let terbaik = null;
  for (const a of daftar) {
    if (a.sourceLabel !== 'IDX' || a.emiten !== kandidat.emiten) continue;
    if (jenisArtikel(a) !== kunci) continue;
    const tA = waktu(a.isoDate);
    if (!tA || tDok < tA - HARI || tDok - tA > j.jendela * HARI) continue;
    if (!terbaik || tA > waktu(terbaik.isoDate)) terbaik = a;
  }
  return terbaik;
}

// Semua URL dokumen yang sudah dipakai sebuah artikel: sumber pertamanya dan
// dokumen tiap pembaruan. Dipakai update-idx supaya dokumen yang sudah
// dileburkan tidak diproses lagi.
export function sumberArtikel(a) {
  return [...new Set([a.sourceUrl, ...((a.pembaruan || []).map(p => p.sumber))].filter(Boolean))];
}

// Terapkan hasil perbaruiKeterbukaan ke artikel yang SUDAH ADA (diubah di
// tempat). Slug, tanggal terbit, foto, dan sumber pertamanya TIDAK diubah:
// URL itu sudah diindeks dan dibagikan orang, dan tanggal terbit pertama
// adalah fakta. Yang berubah isi, judul, dan penilaiannya, disertai jejak di
// `pembaruan` supaya pembaca tahu apa yang berubah dan kapan (pedoman media
// siber yang tayang di situs ini melarang mengubah isi diam-diam).
export function terapkanPembaruan(a, h, k) {
  a.pembaruan = [...(a.pembaruan || []), {
    tanggal: k.terbit,
    ringkas: h.ringkas || '',
    sumber: k.lampiran || '',
    judulIdx: k.judulAsli || '',
  }];
  a.diperbarui = k.terbit;
  a.title = h.title;
  a.deck = h.deck;
  a.body = h.body;
  a.takeaway = h.takeaway;
  a.sentimen = h.sentimen;
  if (h.tags && h.tags.length) a.tags = h.tags;
  if (h.jadwal && h.jadwal.length) a.jadwal = h.jadwal;
  if (!a.peristiwa && k.peristiwa) a.peristiwa = k.peristiwa;
  return a;
}

// ---------- kelompok untuk halaman rangkuman ----------
// Kelompok = artikel IDX dengan emiten dan golongan sama yang terbit dalam
// jendela sejak artikel pertamanya. Id kelompok memakai bulan artikel
// PERTAMA, jadi URL halaman rangkuman tidak berubah walau anggotanya bertambah.
export function kelompokPeristiwa(ARTICLES, { minimal = 2 } = {}) {
  const grup = new Map();
  for (const a of ARTICLES) {
    if (a.sourceLabel !== 'IDX' || !a.emiten) continue;
    const kunci = jenisArtikel(a);
    const j = infoJenis(kunci);
    if (!j || !j.hub) continue;
    const k = kunci + '|' + a.emiten;
    if (!grup.has(k)) grup.set(k, []);
    grup.get(k).push(a);
  }
  const hasil = [];
  for (const [k, arts] of grup) {
    const [kunci, emiten] = k.split('|');
    const j = infoJenis(kunci);
    arts.sort((x, y) => waktu(x.isoDate) - waktu(y.isoDate));
    let kini = null;
    for (const a of arts) {
      if (kini && waktu(a.isoDate) - waktu(kini[0].isoDate) <= j.jendela * HARI) kini.push(a);
      else { if (kini) hasil.push(kini); kini = [a]; }
    }
    if (kini) hasil.push(kini);
  }
  return hasil
    .filter(anggota => anggota.length >= minimal)
    .map(anggota => {
      const kunci = jenisArtikel(anggota[0]);
      const emiten = anggota[0].emiten;
      const bulan = String(anggota[0].isoDate || '').slice(0, 7);
      return {
        id: (kunci + '-' + emiten + '-' + bulan).toLowerCase(),
        kunci, label: infoJenis(kunci).label, emiten, bulan,
        anggota,                                  // terlama -> terbaru
        terakhir: anggota[anggota.length - 1],
      };
    })
    .sort((x, y) => waktu(y.terakhir.isoDate) - waktu(x.terakhir.isoDate));
}

// ---------- jadwal penting ----------
// Tanggal dari model hanya dipakai kalau TERTULIS di dokumen resminya.
// Model boleh salah hitung atau salah tahun; tabel jadwal yang keliru lebih
// berbahaya daripada tidak ada tabel, karena pembaca menyusun rencana dari
// sana.
const BULAN_ID = [['januari'], ['februari', 'pebruari'], ['maret'], ['april'], ['mei'], ['juni'],
  ['juli'], ['agustus'], ['september', 'sept'], ['oktober'], ['november', 'nopember'], ['desember']];
const BULAN_EN = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
  'september', 'october', 'november', 'december'];
export function tanggalTertulis(isoTanggal, teks) {
  const m = String(isoTanggal || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m || !teks) return false;
  const [y, mo, d] = [m[1], parseInt(m[2], 10), parseInt(m[3], 10)];
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return false;
  const t = String(teks).toLowerCase().replace(/\s+/g, ' ');
  const dd = '0?' + d, mm = '0?' + mo;
  const nama = [...BULAN_ID[mo - 1], BULAN_EN[mo - 1]].join('|');
  const pola = [
    '\\b' + dd + '\\s*(' + nama + ')\\s*' + y + '\\b',               // 20 November 2026
    '\\b(' + nama + ')\\s*' + dd + ',?\\s*' + y + '\\b',             // November 20, 2026
    '\\b' + dd + '\\s*[-/.]\\s*' + mm + '\\s*[-/.]\\s*' + y + '\\b',  // 20-11-2026, 20/11/2026
    '\\b' + y + '-' + String(mo).padStart(2, '0') + '-' + String(d).padStart(2, '0') + '\\b',
  ];
  return pola.some(p => new RegExp(p, 'i').test(t));
}
// tanggalLamaSah: tanggal yang sudah lolos pemeriksaan ini terhadap dokumen
// LAMA (jadwal artikel sebelum diperbarui). Dokumen lamanya tidak dibaca
// ulang, jadi tanggal itu diterima apa adanya; tanggal lain wajib tertulis di
// dokumen baru.
export function saringJadwal(jadwal, teksDokumen, tanggalLamaSah = []) {
  if (!Array.isArray(jadwal)) return [];
  const lama = new Set(tanggalLamaSah);
  const sudah = new Set();
  return jadwal
    .map(x => ({ tanggal: String(x && x.tanggal || '').trim(), acara: String(x && x.acara || '').trim() }))
    .filter(x => x.acara && x.acara.length <= 120 &&
      ((lama.has(x.tanggal) && /^\d{4}-\d{2}-\d{2}$/.test(x.tanggal)) || tanggalTertulis(x.tanggal, teksDokumen)))
    .filter(x => { const k = x.tanggal + '|' + x.acara.toLowerCase(); if (sudah.has(k)) return false; sudah.add(k); return true; })
    .sort((a, b) => a.tanggal.localeCompare(b.tanggal))
    .slice(0, 8);
}
