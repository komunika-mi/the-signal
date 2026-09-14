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

// Jam bursa IDX plus jendela sesudah penutupan: Senin-Jumat 09.00-16.45 WIB,
// yaitu 02.00-09.45 UTC. Hitungannya memakai UTC karena fungsi ini jalan di
// UTC, dan seluruh jendela itu jatuh di tanggal kalender yang sama di WIB,
// jadi hari dalam pekan menurut UTC sama dengan menurut WIB.
//
// Batas 16.45, bukan 16.00, dan itu bagian terpenting dari jendela ini: yang
// paling wajib tertangkap justru putaran SESUDAH bursa tutup, karena hanya
// putaran itulah yang membawa penutupan final ke ticker.
//
// Hari libur bursa tidak dikenali. Akibatnya cuma putaran pasar yang tidak
// perlu dan angkanya tidak berubah; tidak ada yang rusak, dan menit Actions
// repo publik tidak ditagih.
export function jamBursa(t = new Date()) {
  const hari = t.getUTCDay();
  if (hari === 0 || hari === 6) return false;
  const menit = t.getUTCHours() * 60 + t.getUTCMinutes();
  return menit >= 2 * 60 && menit <= 9 * 60 + 45;
}

// Alur yang ditambal, beserta jeda maksimum yang dianggap wajar.
//
// Angkanya sedikit DI ATAS jarak jadwal aslinya, bukan sama persis. Kalau
// disamakan, putaran terjadwal yang datang telat beberapa menit akan selalu
// didahului pemicu ini, dan hasilnya dua putaran untuk satu slot.
//
// pasar.yml ditambahkan 14 September 2026, dan kasusnya persis alasan
// pemicu ini ada. Hari itu pasar.yml cuma jalan 4 kali dari sekitar 24
// jadwalnya. Putaran terakhir 14.50 WIB menangkap IHSG 6.396,58 (-2,21%),
// dekat titik terendah hari itu, lalu SEMUA putaran sesudahnya hilang. Ticker
// di bar atas seluruh situs membeku di angka itu tujuh jam, padahal IHSG tutup
// 6.534,69 (-0,10%) - diperiksa lawan Google Finance, cocok persis. Situs
// berita ekonomi menulis indeks jatuh 2,21% pada hari yang sebenarnya datar.
//
// Ambangnya BERGANTUNG JAM. Di jam bursa pasar.yml dijadwalkan tiap 30 menit,
// jadi 40 menit sudah berarti satu slot hilang. Di luar jam bursa jadwalnya
// tiap 2 jam, dan memakai 40 menit di sana akan menambah putaran di atas
// rencana semula tanpa ada angka baru yang perlu diambil.
const ALUR = [
  { berkas: 'idx.yml', jedaMaks: () => 145, catatan: 'aksi korporasi IDX, jadwal tiap 2 jam' },
  { berkas: 'daily.yml', jedaMaks: () => 145, catatan: 'berita tvOne + kanal lembaga, jadwal tiap 2 jam' },
  { berkas: 'pasar.yml', jedaMaks: (t) => (jamBursa(t) ? 40 : 150),
    catatan: 'ticker IHSG/kurs/emas, tiap 30 mnt di jam bursa, tiap 2 jam di luarnya' },
];

// Status putaran yang berarti SLOT ANTRE grup concurrency sedang terisi.
//
// Kelima workflow penulis di repo ini berbagi grup `the-signal-tulis` dengan
// cancel-in-progress: false. Aturan GitHub untuk grup seperti itu: satu
// putaran jalan, satu menunggu, dan putaran menunggu yang BARU membatalkan
// putaran menunggu yang LAMA. Jadi memicu apa pun saat slot tunggu sudah
// terisi berarti membatalkan putaran orang lain, bisa jadi idx.yml yang
// sedang membawa selusin laporan.
const STATUS_ANTRE = ['pending', 'queued', 'waiting', 'requested'];

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

// Apakah ada putaran di repo ini yang sedang menunggu giliran?
async function adaYangAntre(token) {
  for (const s of STATUS_ANTRE) {
    const r = await fetch(API + '/repos/' + REPO + '/actions/runs?status=' + s + '&per_page=1',
      { headers: kepala(token) });
    if (!r.ok) throw new Error('daftar antrean ' + s + ': HTTP ' + r.status);
    const j = await r.json();
    if ((j.total_count || 0) > 0) return s;
  }
  return null;
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

  const sekarang = new Date();

  // TAHAP 1: periksa semua alur, BELUM memicu apa pun.
  const hasil = [];
  for (const a of ALUR) {
    try {
      const ambang = a.jedaMaks(sekarang);
      const p = await putaranTerakhir(a.berkas, TOKEN);
      const jedaMenit = p
        ? Math.round((sekarang.getTime() - new Date(p.created_at).getTime()) / 60000)
        : null;
      const sedangJalan = p && p.status !== 'completed';

      let tindakan, rasio = 0;
      if (sedangJalan) tindakan = 'lewati: masih jalan';
      else if (jedaMenit === null) { tindakan = 'layak dipicu: belum ada putaran sama sekali'; rasio = Infinity; }
      else if (jedaMenit < ambang) tindakan = 'lewati: jeda ' + jedaMenit + ' mnt masih di bawah ' + ambang;
      else { tindakan = 'layak dipicu: jeda ' + jedaMenit + ' mnt melewati ' + ambang; rasio = jedaMenit / ambang; }

      hasil.push({
        alur: a.berkas, jedaMenit, ambang,
        statusTerakhir: p ? (p.conclusion || p.status) : null,
        tindakan, rasio,
      });
    } catch (e) {
      // Satu alur bermasalah tidak boleh menjatuhkan pemeriksaan alur lain.
      hasil.push({ alur: a.berkas, galat: String(e.message).slice(0, 200), rasio: 0 });
    }
  }

  // TAHAP 2: memicu PALING BANYAK SATU alur per panggilan.
  //
  // Memicu dua alur dalam satu panggilan berarti keduanya masuk slot tunggu
  // grup concurrency yang sama, dan yang kedua membatalkan yang pertama (lihat
  // STATUS_ANTRE). Yang dipilih yang paling telat RELATIF terhadap ambangnya,
  // bukan yang jedanya terpanjang: pasar.yml telat 60 menit di jam bursa
  // (1,5x ambang 40) lebih mendesak daripada idx.yml telat 150 menit (1,03x
  // ambang 145), karena ticker-nya terpampang di seluruh halaman. Alur lain
  // yang juga telat diambil panggilan berikutnya, 30 menit kemudian.
  let dipicu = null, alasanTahan = null;
  const calon = hasil.filter(h => h.rasio > 0).sort((a, b) => b.rasio - a.rasio)[0];
  if (calon) {
    try {
      const antre = await adaYangAntre(TOKEN);
      if (antre) {
        alasanTahan = 'ada putaran berstatus ' + antre + ' di slot tunggu; memicu sekarang akan membatalkannya';
      } else if (kering) {
        alasanTahan = 'KERING: tidak dipicu';
      } else {
        await picu(calon.alur, TOKEN);
        dipicu = calon.alur;
      }
    } catch (e) {
      calon.galat = String(e.message).slice(0, 200);
    }
  }

  const adaGalat = hasil.some(h => h.galat);
  return res.status(adaGalat ? 500 : 200).json({
    ok: !adaGalat,
    waktu: sekarang.toISOString(),
    jamBursa: jamBursa(sekarang),
    dipicu,
    ...(alasanTahan ? { ditahan: calon.alur + ' - ' + alasanTahan } : {}),
    hasil: hasil.map(({ rasio, ...h }) => h),
  });
}
