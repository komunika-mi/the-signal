// Pemicu cadangan untuk alur GitHub Actions yang putaran terjadwalnya hilang.
//
// ===========================================================================
// KENAPA INI ADA
// ===========================================================================
//
// Diukur 7 September 2026 untuk periode 1-7 September: dari putaran yang
// DIJADWALKAN cron, yang benar-benar dibuat GitHub cuma sebagian.
//
//     idx.yml     34 dari 78   (44%)
//     daily.yml   37 dari 78   (47%)
//     pasar.yml   36 dari ~104 (35%)
//
// NOL di antaranya berstatus cancelled. Entri putarannya memang tidak pernah
// ada. Tiga dugaan sudah diperiksa dan GUGUR semua:
//
//   - Bukan kuota Actions. Repo ini publik, dan timing API menjawab
//     billable.UBUNTU.total_ms = 0 untuk putaran berdurasi 19,5 menit.
//   - Bukan rebutan grup concurrency the-signal-tulis. Dari 37 slot daily
//     yang hilang, 37-nya terjadi saat TIDAK ADA putaran lain yang jalan.
//   - Bukan kegagalan. Yang jalan hampir semuanya sukses.
//
// Sisanya: GitHub memang membuang sebagian event `schedule`. Itu perilaku
// yang tidak bisa diatur dari dalam repo. Yang SELALU jalan adalah
// workflow_dispatch, dan itulah yang dipanggil dari sini.
//
// ===========================================================================
// INI PENAMBAL, BUKAN PENJADWAL KEDUA
// ===========================================================================
//
// Fungsi ini TIDAK memicu setiap jam. Ia memeriksa dulu kapan alurnya
// terakhir jalan, dan cuma memicu kalau jedanya sudah melewati ambang. Kalau
// putaran terjadwalnya kebetulan jadi, tidak ada yang dipicu.
//
// Akibatnya lajunya membatasi diri sendiri: dengan ambang 145 menit,
// paling sering pun ia cuma menghasilkan ~10 putaran per hari per alur,
// masih di bawah 12 slot yang memang dijadwalkan. Ia mengisi lubang, bukan
// menambah beban di atas rencana semula.
//
// ===========================================================================
// YANG HARUS DISIAPKAN PEMILIK SITUS
// ===========================================================================
//
// Dua variabel lingkungan di Vercel (Project Settings > Environment
// Variables), keduanya untuk Production:
//
//   GITHUB_DISPATCH_TOKEN
//     Fine-grained personal access token GitHub.
//     Repository access : Only select repositories -> komunika-mi/the-signal
//     Permissions       : Actions = Read and write   (Metadata ikut sendiri)
//     Tidak perlu izin lain. JANGAN pakai classic token ber-scope `repo`:
//     itu memberi akses tulis ke SELURUH repo, jauh melebihi keperluan.
//
//   CRON_SECRET
//     Rahasia bebas, minimal 16 karakter acak. Vercel otomatis mengirimnya
//     sebagai `Authorization: Bearer <CRON_SECRET>` pada tiap panggilan
//     cron-nya sendiri. Tanpa ini, alamat fungsi ini jadi tombol yang bisa
//     ditekan siapa saja.
//
// Tanpa keduanya fungsi ini menolak bekerja dan mengatakan apa yang kurang.
// Ia TIDAK pernah gagal diam-diam.

const REPO = 'komunika-mi/the-signal';
const CABANG = 'master';
const API = 'https://api.github.com';

// Alur yang ditambal, beserta jeda maksimum yang dianggap wajar.
//
// Angkanya sedikit DI ATAS jarak jadwal aslinya (2 jam), bukan sama persis.
// Kalau disamakan, putaran terjadwal yang datang telat beberapa menit akan
// selalu didahului pemicu ini, dan hasilnya dua putaran untuk satu slot.
const ALUR = [
  { berkas: 'idx.yml', jedaMaks: 145, catatan: 'aksi korporasi IDX, jadwal tiap 2 jam' },
  { berkas: 'daily.yml', jedaMaks: 145, catatan: 'berita tvOne + kanal lembaga, jadwal tiap 2 jam' },
];

const kepala = (token) => ({
  Accept: 'application/vnd.github+json',
  Authorization: 'Bearer ' + token,
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'the-signal-pemicu',
});

async function putaranTerakhir(berkas, token) {
  // per_page=1 saja: yang dibutuhkan cuma yang paling baru. Termasuk putaran
  // yang masih jalan, karena alur yang SEDANG jalan jelas tidak perlu dipicu.
  const r = await fetch(
    API + '/repos/' + REPO + '/actions/workflows/' + berkas + '/runs?per_page=1',
    { headers: kepala(token) });
  if (!r.ok) throw new Error('daftar putaran ' + berkas + ': HTTP ' + r.status);
  const j = await r.json();
  return (j.workflow_runs || [])[0] || null;
}

async function picu(berkas, token) {
  const r = await fetch(
    API + '/repos/' + REPO + '/actions/workflows/' + berkas + '/dispatches',
    { method: 'POST', headers: kepala(token), body: JSON.stringify({ ref: CABANG }) });
  // GitHub membalas 204 tanpa badan kalau berhasil.
  if (r.status !== 204) {
    throw new Error('picu ' + berkas + ': HTTP ' + r.status + ' ' +
      (await r.text()).slice(0, 200));
  }
}

export default async function handler(req, res) {
  // Cron Vercel memanggil dengan GET. POST diterima juga supaya bisa diuji
  // tangan lewat curl tanpa mengubah apa pun.
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ ok: false, pesan: 'metode tidak didukung' });
  }

  const RAHASIA = (process.env.CRON_SECRET || '').trim();
  const TOKEN = (process.env.GITHUB_DISPATCH_TOKEN || '').trim();

  // Gerbang rahasia diperiksa SEBELUM apa pun yang lain. Fungsi yang bisa
  // menyalakan pipeline penerbitan tidak boleh bisa ditekan orang lewat.
  if (!RAHASIA) {
    return res.status(500).json({ ok: false, pesan: 'CRON_SECRET belum diset di Vercel' });
  }
  if (req.headers.authorization !== 'Bearer ' + RAHASIA) {
    return res.status(401).json({ ok: false });
  }
  if (!TOKEN) {
    return res.status(500).json({ ok: false, pesan: 'GITHUB_DISPATCH_TOKEN belum diset di Vercel' });
  }

  // kering=1 memeriksa dan melaporkan TANPA memicu apa pun. Dipakai untuk
  // memastikan token dan ambangnya benar sebelum dibiarkan jalan sendiri.
  const kering = String(req.query?.kering || '') === '1';

  const hasil = [];
  for (const a of ALUR) {
    try {
      const p = await putaranTerakhir(a.berkas, TOKEN);
      const jedaMenit = p
        ? Math.round((Date.now() - new Date(p.created_at).getTime()) / 60000)
        : null;
      const sedangJalan = p && p.status !== 'completed';

      let tindakan;
      if (sedangJalan) tindakan = 'lewati: masih jalan';
      else if (jedaMenit === null) tindakan = 'picu: belum ada putaran sama sekali';
      else if (jedaMenit < a.jedaMaks) tindakan = 'lewati: jeda ' + jedaMenit + ' mnt masih di bawah ' + a.jedaMaks;
      else tindakan = 'picu: jeda ' + jedaMenit + ' mnt melewati ' + a.jedaMaks;

      const perluPicu = tindakan.startsWith('picu');
      if (perluPicu && !kering) await picu(a.berkas, TOKEN);

      hasil.push({
        alur: a.berkas,
        jedaMenit,
        statusTerakhir: p ? (p.conclusion || p.status) : null,
        tindakan: perluPicu && kering ? tindakan + ' (KERING, tidak dipicu)' : tindakan,
      });
    } catch (e) {
      // Satu alur bermasalah tidak boleh menjatuhkan pemeriksaan alur lain.
      hasil.push({ alur: a.berkas, galat: String(e.message).slice(0, 200) });
    }
  }

  const adaGalat = hasil.some(h => h.galat);
  return res.status(adaGalat ? 500 : 200).json({
    ok: !adaGalat,
    waktu: new Date().toISOString(),
    hasil,
  });
}
