// Ambil keterbukaan informasi emiten dari Bursa Efek Indonesia.
//
// Volumenya sangat besar (200+ per hari) dan mayoritas administratif murni:
// dari 60 laporan sampel, 48 di antaranya cuma "Laporan Bulanan Registrasi
// Pemegang Efek". Karena itu ada dua lapis penyaringan: daftar tolak di sini
// untuk yang jelas rutin, lalu Claude yang menilai sisanya.
import fs from 'node:fs';
import path from 'node:path';
import { getJSONViaCurl, retry, stripTags, log, ROOT } from './lib.mjs';

const API = 'https://www.idx.co.id/primary/ListedCompany/GetAnnouncement';

// Laporan wajib berkala yang tidak menggerakkan harga saham.
const RUTIN = new RegExp([
  'registrasi pemegang efek',
  'peredaran unit penyertaan',
  'laporan bulanan',
  'laporan mingguan',
  'laporan harian',
  'nilai aktiva bersih',
  'daftar pemegang',
  'perubahan alamat',
  'perubahan (nama )?corporate secretary',
  'penyampaian bukti iklan',
  'laporan realisasi penggunaan dana',
].join('|'), 'i');

// Kategori yang secara fundamental bisa menggerakkan harga saham.
const MATERIAL = new RegExp([
  'laporan keuangan', 'kinerja', 'dividen', 'rups', 'rupslb',
  'akuisisi', 'merger', 'penggabungan', 'pengambilalihan', 'divestasi',
  'penambahan modal', 'hmetd', 'right issue', 'private placement',
  'buyback', 'pembelian kembali saham', 'stock split', 'reverse stock',
  'obligasi', 'sukuk', 'penawaran umum', 'ipo', 'waran',
  'perubahan pengendali', 'perubahan pemegang saham', 'kepemilikan saham',
  'suspensi', 'delisting', 'relisting', 'pailit', 'pkpu', 'restrukturisasi',
  'kontrak', 'kerja sama', 'ekspansi', 'pabrik baru', 'investasi',
  'informasi material', 'keterbukaan informasi', 'kejadian penting',
  'perubahan direksi', 'perubahan komisaris', 'pengunduran diri direktur',
].join('|'), 'i');

function tglIDX(d) {
  return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
}

export async function ambilKeterbukaan({ hariKeBelakang = 1, maks = 40 } = {}) {
  const peta = await ambilPetaEmiten();
  const sampai = new Date(Date.now() + 7 * 3600 * 1000);          // hari ini WIB
  const dari = new Date(sampai.getTime() - hariKeBelakang * 86400000);

  const url = API + '?indexFrom=1&pageSize=200' +
    '&dateFrom=' + tglIDX(dari) + '&dateTo=' + tglIDX(sampai) + '&lang=id&keyword=';

  const j = await retry(() => getJSONViaCurl(url, { timeout: 30 }));
  const semua = j.Replies || [];

  const hasil = [];
  let ditolakRutin = 0;

  for (const r of semua) {
    const p = r.pengumuman || {};
    const judul = stripTags(p.JudulPengumuman || '');
    if (!judul) continue;

    const perihal = stripTags(p.PerihalPengumuman || '');
    const teks = judul + ' ' + perihal;

    if (RUTIN.test(teks)) { ditolakRutin++; continue; }

    const lampiran = (r.attachments || [])[0];
    hasil.push({
      id: String(p.Id || p.FinalId || p.NoPengumuman || ''),
      emiten: String(p.Kode_Emiten || '').trim().split(/\s+/)[0] || '',
      judulAsli: judul,
      perihal,
      terbit: p.TglPengumuman || new Date().toISOString(),
      jenis: p.JenisPengumuman || '',
      lampiran: lampiran ? (lampiran.FullSavePath || '') : '',
      namaEmiten: peta[String(p.Kode_Emiten || '').trim().split(/s+/)[0]?.toUpperCase()] || '',
      dugaanMaterial: MATERIAL.test(teks),
    });
  }

  hasil.sort((a, b) => new Date(b.terbit) - new Date(a.terbit));
  // yang terindikasi material didahulukan
  hasil.sort((a, b) => (b.dugaanMaterial ? 1 : 0) - (a.dugaanMaterial ? 1 : 0));

  log('IDX: ' + semua.length + ' laporan, ' + ditolakRutin + ' rutin dibuang, ' +
    hasil.length + ' lolos saringan awal (' + hasil.filter(x => x.dugaanMaterial).length + ' terindikasi material)');

  return hasil.slice(0, maks);
}

if (process.argv[1] && import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const d = await ambilKeterbukaan();
  d.slice(0, 12).forEach(x => log(
    (x.dugaanMaterial ? '[M]' : '[ ]'), (x.emiten || '----').padEnd(5), x.judulAsli.slice(0, 68)));
}

// ---------- peta kode emiten -> nama resmi ----------
// Tanpa ini Claude cenderung menebak nama perusahaan dari ingatannya, yang
// berisiko keliru. Daftar resmi IDX dipakai sebagai sumber kebenaran.
let _petaEmiten = null;

// Disimpan ke disk supaya tidak perlu memanggil IDX tiap putaran. IDX
// kadang membalas HTML alih-alih JSON kalau terlalu sering diminta, dan
// tanpa cache satu kegagalan bikin semua berita kehilangan nama perusahaan.
const CACHE_EMITEN = path.join(ROOT, 'assets/data/emiten.json');
const UMUR_CACHE = 7 * 86400 * 1000;   // segarkan seminggu sekali

export async function ambilPetaEmiten() {
  if (_petaEmiten) return _petaEmiten;

  // 1. pakai cache kalau masih segar
  try {
    if (fs.existsSync(CACHE_EMITEN)) {
      const stat = fs.statSync(CACHE_EMITEN);
      const isi = JSON.parse(fs.readFileSync(CACHE_EMITEN, 'utf8'));
      if (Date.now() - stat.mtimeMs < UMUR_CACHE && Object.keys(isi).length > 100) {
        _petaEmiten = isi;
        log('peta emiten: ' + Object.keys(isi).length + ' nama dari cache');
        return _petaEmiten;
      }
    }
  } catch {}

  // 2. ambil dari IDX
  const url = 'https://www.idx.co.id/primary/ListedCompany/GetCompanyProfiles' +
    '?start=0&length=1200&code=&sortcolumn=code&sortdirection=asc';
  try {
    const j = await retry(() => getJSONViaCurl(url, { timeout: 40 }), 4, 3000);
    const peta = {};
    for (const r of (j.data || [])) {
      const kode = String(r.KodeEmiten || r.Code || '').trim().toUpperCase();
      const nama = String(r.NamaEmiten || r.Name || '').trim();
      if (kode && nama) peta[kode] = nama;
    }
    if (Object.keys(peta).length < 100) throw new Error('hasil terlalu sedikit');
    fs.mkdirSync(path.dirname(CACHE_EMITEN), { recursive: true });
    fs.writeFileSync(CACHE_EMITEN, JSON.stringify(peta), "utf8");
    _petaEmiten = peta;
    log('peta emiten: ' + Object.keys(peta).length + ' nama dimuat dari IDX');
    return peta;
  } catch (e) {
    // 3. cache basi lebih baik daripada tidak ada nama sama sekali
    try {
      if (fs.existsSync(CACHE_EMITEN)) {
        _petaEmiten = JSON.parse(fs.readFileSync(CACHE_EMITEN, 'utf8'));
        log('PERINGATAN: IDX gagal, pakai cache lama (' + Object.keys(_petaEmiten).length + ' nama)');
        return _petaEmiten;
      }
    } catch {}
    log('PERINGATAN: nama emiten tidak tersedia -> ' + e.message.slice(0, 60));
    _petaEmiten = {};
    return _petaEmiten;
  }
}
