// Menulis artikel otomatis SETIAP KALI BPS merilis angka baru.
//
// Kenapa ini yang dibangun, bukan rubrik harian. Angka BPS tidak berubah tiap
// hari, dan memaksakan rubrik harian berarti 25 dari 30 hari menampilkan angka
// yang sama persis dengan kemarin. Itu bukan pembaruan, itu berpura-pura
// diperbarui, dan pembaca akan menyadarinya.
//
// Yang benar-benar peristiwa adalah RILISNYA. Dari 10 indikator yang dipantau,
// delapan bulanan, satu triwulanan, dua semesteran: sekitar 100 angka baru
// setahun, rata-rata delapan sebulan. Tiap satu di antaranya muncul, hari itu
// juga orang paling banyak mencarinya, dan situs ini bisa jadi yang pertama
// menuliskannya karena angkanya diambil langsung dari WebAPI, bukan menunggu
// media lain merangkum.
//
// Cara mendeteksinya sederhana dan tanpa berkas status tambahan: bandingkan
// periode terakhir tiap indikator SEBELUM dan SESUDAH penarikan. Kalau
// periodenya maju, itu rilis baru. bps.js sendiri yang jadi penanda keadaan.
//
// Artikelnya tetap ditulis model supaya bahasanya hidup dan sesuai gaya
// redaksi, tapi SELURUH ANGKA disuntikkan dari data, tidak boleh dikarang.
// Satu panggilan model per rilis, jadi biayanya mengikuti irama BPS, bukan
// irama jam dinding.
//
//   node scripts/bps-artikel.mjs           tarik, deteksi, tulis artikel
//   node scripts/bps-artikel.mjs --lihat   deteksi saja, tidak menulis apa pun
import { execFileSync } from 'node:child_process';
import { ROOT, log, readData, writeData, readObjek, slugify, fmtTanggal, keWaktu } from './lib.mjs';
import { tarikSemua } from './bps-data.mjs';
import { tanya, ambilJSON } from './rewrite.mjs';
import { angkaID, nilaiRingkas } from './bps-grafik.mjs';

const lihatSaja = process.argv.includes('--lihat');

// Halaman rilis resmi BPS. Dipakai sebagai sourceUrl artikel supaya pembaca
// bisa memeriksa angkanya sendiri, sama seperti artikel dari sumber lain.
const SUMBER_BPS = 'https://www.bps.go.id/id/statistics-table';

const periodeAkhir = (ind) => ind && ind.titik && ind.titik.length
  ? ind.titik[ind.titik.length - 1] : null;

// Sebuah rilis dianggap baru kalau periode terakhirnya MAJU, bukan sekadar
// berbeda. BPS sesekali merevisi angka periode lama, dan revisi bukan alasan
// menerbitkan artikel baru: nilainya berubah tapi peristiwanya sama.
function lebihBaru(kini, lalu) {
  if (!kini) return false;
  if (!lalu) return false;          // belum ada pembanding, jangan banjiri arsip
  return kini.tahun > lalu.tahun || (kini.tahun === lalu.tahun && kini.urut > lalu.urut);
}

export function cariRilisBaru(sebelum, sesudah) {
  const baru = [];
  for (const [kode, ind] of Object.entries(sesudah)) {
    const lama = sebelum && sebelum[kode];
    const kini = periodeAkhir(ind);
    const lalu = periodeAkhir(lama);

    // Kalau varId indikatornya berganti, dua deret ini bukan hal yang sama dan
    // tidak boleh dibandingkan. Terjadi 13 Agustus 2026: wisman dipindah dari
    // var 1017 yang TAHUNAN ke var 1150 yang BULANAN, dan perbandingan membaca
    // "Tahun 2025 -> Juni 2026" sebagai rilis baru, padahal BPS tidak merilis
    // apa pun. Artikelnya sendiri ternyata akurat, tapi pemicunya keliru, dan
    // pemicu yang keliru cepat atau lambat menghasilkan artikel yang keliru.
    if (lama && lama.varId !== ind.varId) {
      log('  ' + kode + ': varId berganti (' + lama.varId + ' -> ' + ind.varId +
        '), deret lama tidak dibandingkan');
      continue;
    }

    if (lebihBaru(kini, lalu)) baru.push({ kode, ind, kini, lalu });
  }
  return baru;
}

// Bahan angka untuk model. Semua perbandingan dihitung DI SINI, bukan diserahkan
// ke model, karena aritmetika adalah hal yang paling gampang dikarang model dan
// paling gampang diperiksa pembaca.
function bahanAngka({ ind, kini }) {
  const t = ind.titik;
  const i = t.length - 1;
  const sebelumnya = t[i - 1] || null;
  // Periode yang sama tahun lalu, untuk indikator bulanan dan triwulanan.
  const setahunLalu = t.find(x => x.tahun === kini.tahun - 1 && x.urut === kini.urut) || null;

  const beda = (a, b) => {
    if (!a || !b) return null;
    const d = a.nilai - b.nilai;
    return {
      arah: d > 0 ? 'naik' : d < 0 ? 'turun' : 'tetap',
      besar: ind.satuan === '%'
        ? angkaID(Math.abs(d), ind.desimal) + ' poin'
        : nilaiRingkas(Math.abs(d), ind),
      persen: b.nilai !== 0 ? angkaID(Math.abs(d / b.nilai) * 100, 2) + '%' : null,
    };
  };

  return {
    indikator: ind.nama,
    penjelas: ind.penjelas,
    periode: kini.periode + ' ' + kini.tahun,
    nilai: nilaiRingkas(kini.nilai, ind),
    nilaiMentah: kini.nilai,
    satuan: ind.satuan,
    dibandingPeriodeLalu: sebelumnya
      ? { periode: sebelumnya.periode + ' ' + sebelumnya.tahun, nilai: nilaiRingkas(sebelumnya.nilai, ind), ...beda(kini, sebelumnya) }
      : null,
    dibandingSetahunLalu: setahunLalu
      ? { periode: setahunLalu.periode + ' ' + setahunLalu.tahun, nilai: nilaiRingkas(setahunLalu.nilai, ind), ...beda(kini, setahunLalu) }
      : null,
    // Enam periode terakhir supaya model bisa menyebut tren, bukan cuma dua titik.
    enamTerakhir: t.slice(-6).map(x => x.periode + ' ' + x.tahun + ': ' + nilaiRingkas(x.nilai, ind)),
  };
}

const KATEGORI_INDIKATOR = {
  inflasi: 'Makroekonomi', pdb: 'Makroekonomi', pengangguran: 'Makroekonomi',
  gini: 'Makroekonomi', ekspor: 'Perdagangan', impor: 'Perdagangan',
  neraca: 'Perdagangan', wisman: 'Bisnis', hotel: 'Bisnis', kereta: 'Bisnis',
};

async function tulisArtikel(rilis) {
  const bahan = bahanAngka(rilis);

  const system = [
    'Kamu redaktur ekonomi The Signal, media ringkasan berita ekonomi Indonesia.',
    'Tulis satu berita pendek tentang angka statistik resmi yang baru dirilis BPS.',
    '',
    'ATURAN ANGKA, INI YANG PALING PENTING:',
    '- SELURUH angka WAJIB diambil dari data yang diberikan. Dilarang keras',
    '  mengarang, membulatkan ulang, atau menghitung sendiri.',
    '- Dilarang menyebut angka yang tidak ada di data, termasuk target',
    '  pemerintah, proyeksi, atau angka negara lain.',
    '- Dilarang menyebut sebab-akibat yang tidak ada di data. Boleh menyebut',
    '  pola yang terlihat pada deret angkanya sendiri, misalnya "naik empat',
    '  bulan berturut-turut".',
    '',
    'GAYA:',
    '- Bahasa Indonesia, formal tapi enak dibaca seperti detik. Bukan sastrawi.',
    '- Untuk pembaca awam: jelaskan arti indikatornya dengan kalimat biasa.',
    '- Hindari tanda pisah em dash.',
    '- Jangan memakai kata "kami", "kita", atau menyapa pembaca.',
    '',
    'FORMAT KELUARAN: HANYA JSON, tanpa penjelasan apa pun di luarnya.',
    '{',
    '  "judul": "maksimal 60 karakter, sebut angkanya, boleh apit SATU frasa',
    '            terpenting dengan kurung siku untuk penanda visual",',
    '  "deck": "satu kalimat 100-150 karakter, melengkapi judul bukan mengulangnya",',
    '  "paragraf": ["3 sampai 5 paragraf, masing-masing 2-4 kalimat"],',
    '  "catatan": "satu kalimat: apa arti angka ini bagi orang biasa. Kosongkan',
    '              kalau tidak ada yang jujur bisa dikatakan.",',
    '  "tag": ["2-4 tag pendek huruf kecil"]',
    '}',
  ].join('\n');

  const user = [
    'INDIKATOR: ' + bahan.indikator,
    'ARTI: ' + bahan.penjelas,
    'PERIODE YANG BARU DIRILIS: ' + bahan.periode,
    'NILAI: ' + bahan.nilai,
    '',
    bahan.dibandingPeriodeLalu
      ? 'DIBANDING PERIODE SEBELUMNYA (' + bahan.dibandingPeriodeLalu.periode + ' = ' +
        bahan.dibandingPeriodeLalu.nilai + '): ' + bahan.dibandingPeriodeLalu.arah + ' ' +
        bahan.dibandingPeriodeLalu.besar +
        (bahan.dibandingPeriodeLalu.persen ? ' (' + bahan.dibandingPeriodeLalu.persen + ')' : '')
      : 'Tidak ada pembanding periode sebelumnya.',
    bahan.dibandingSetahunLalu
      ? 'DIBANDING PERIODE SAMA TAHUN LALU (' + bahan.dibandingSetahunLalu.periode + ' = ' +
        bahan.dibandingSetahunLalu.nilai + '): ' + bahan.dibandingSetahunLalu.arah + ' ' +
        bahan.dibandingSetahunLalu.besar +
        (bahan.dibandingSetahunLalu.persen ? ' (' + bahan.dibandingSetahunLalu.persen + ')' : '')
      : 'Tidak ada pembanding tahun lalu.',
    '',
    'ENAM PERIODE TERAKHIR:',
    ...bahan.enamTerakhir.map(x => '  ' + x),
  ].join('\n');

  const hasil = await ambilJSON(await tanya(system, user));
  if (!hasil || !hasil.judul) return null;

  const sekarang = new Date().toISOString();
  return {
    slug: slugify(String(hasil.judul).replace(/[\[\]]/g, '')),
    category: KATEGORI_INDIKATOR[rilis.kode] || 'Makroekonomi',
    title: hasil.judul,
    deck: hasil.deck || '',
    image: '',
    date: fmtTanggal(sekarang),
    isoDate: sekarang,
    sourceUrl: SUMBER_BPS,
    sourceLabel: 'Badan Pusat Statistik',
    tags: (hasil.tag || []).slice(0, 4),
    body: (hasil.paragraf || []).slice(0, 6),
    // Tanpa fotoAdegan dan fotoSumber: BPS tidak menyediakan foto untuk tabel
    // statistik, jadi jalur ilustrasi yang mengisi pada putaran lokal.
    fotoSumber: '',
    kreditFoto: '',
    takeaway: (hasil.catatan || '').trim(),
    // Menandai artikel ini lahir dari data, bukan dari teks sumber. Dipakai
    // build untuk memastikan grafiknya menempel meski judulnya tidak
    // kebetulan mengandung kata kunci indikatornya.
    bpsIndikator: rilis.kode,
  };
}

// ---------- jalan ----------
//
// Dibungkus penjaga supaya MENGIMPOR modul ini tidak ikut menjalankan seluruh
// pipeline. Tanpa itu, sekadar memuat modulnya untuk memeriksa sintaks sudah
// menarik data, memanggil model, dan menulis artikel. Terjadi sekali saat
// modul ini pertama dibuat.
const dijalankanLangsung = Boolean(process.argv[1]) &&
  import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/');

if (dijalankanLangsung) {

const sebelum = readObjek('bps.js');
const hasil = await tarikSemua();

if (!Object.keys(hasil).length) {
  log('BPS: tidak ada indikator terisi, berkas lama dipertahankan');
  process.exit(1);
}

const rilisBaru = cariRilisBaru(sebelum && sebelum.indikator, hasil);

log('BPS: ' + rilisBaru.length + ' rilis baru terdeteksi' +
  (rilisBaru.length ? ': ' + rilisBaru.map(r => r.kode + ' ' + r.kini.periode + ' ' + r.kini.tahun).join(', ') : ''));

if (lihatSaja) {
  rilisBaru.forEach(r => {
    console.log('\n' + r.kode + '  ' + r.kini.periode + ' ' + r.kini.tahun);
    console.log(JSON.stringify(bahanAngka(r), null, 1));
  });
  process.exit(0);
}

// Angka disimpan LEBIH DULU, sebelum artikel ditulis. Kalau penulisan gagal di
// tengah, angkanya sudah aman dan halaman data tetap mutakhir; artikelnya bisa
// menyusul. Urutan sebaliknya berisiko kehilangan keduanya.
writeData('bps.js', 'BPS', { diperbarui: new Date().toISOString(), indikator: hasil },
  '// Angka indikator ekonomi dari WebAPI BPS (webapi.bps.go.id).\n' +
  '// Ditarik otomatis oleh scripts/bps-artikel.mjs - jangan diedit manual.');

if (!rilisBaru.length) {
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  process.exit(0);
}

const artikel = readData('articles.js', 'ARTICLES');
const baru = [];

for (const r of rilisBaru) {
  try {
    const a = await tulisArtikel(r);
    if (!a) { log('  ' + r.kode + ': model menolak menulis'); continue; }
    if (artikel.some(x => x.slug === a.slug) || baru.some(x => x.slug === a.slug)) {
      log('  ' + r.kode + ': slug kembar, dilewati (' + a.slug + ')');
      continue;
    }
    baru.push(a);
    log('  + [BPS] ' + a.title.replace(/[\[\]]/g, '').slice(0, 58));
  } catch (e) {
    log('  ' + r.kode + ' GAGAL: ' + String(e.message).slice(0, 70));
  }
}

if (!baru.length) {
  execFileSync(process.execPath, [ROOT + '/scripts/build-pages.mjs'], { stdio: 'inherit' });
  process.exit(0);
}

const semua = [...baru, ...artikel]
  .sort((a, b) => (keWaktu(b.isoDate) || 0) - (keWaktu(a.isoDate) || 0));

writeData('articles.js', 'ARTICLES', semua,
  '// Rangkuman editorial The Signal. Berita dari tvOneNews.com/ekonomi,\n' +
  '// aksi korporasi dari keterbukaan informasi IDX. Bukan salinan sumber asli.\n' +
  '// Dibuat otomatis - jangan diedit manual.');

log('BPS: ' + baru.length + ' artikel data ditulis');

// Artikel baru belum punya berkas foto. Jalur foto biasa yang mengisinya, lalu
// build. ulang-foto.mjs sudah menjalankan keduanya berurutan.
execFileSync(process.execPath, [ROOT + '/scripts/foto-artikel.mjs', String(baru.length)],
  { stdio: 'inherit' });

}
