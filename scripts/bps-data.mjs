// Menarik deret waktu indikator ekonomi dari WebAPI BPS.
//
// Bedanya dengan kanal BPS yang sudah ada: fetch-gov.mjs mengambil SIARAN PERS
// BPS, yaitu teks berita. Yang ini mengambil ANGKANYA, supaya artikel bisa
// memuat grafik dan supaya redaksi punya rubrik angka berkala.
//
// Peta indikator di bawah dibuat lewat penelusuran katalog 1.744 variabel pada
// 13 Agustus 2026, lalu tiap kandidat diuji satu per satu. Yang lolos dicatat
// di sini, dan yang gugur ikut dicatat alasannya supaya tidak dicoba ulang:
//
//   var 2   Indeks Harga Konsumen (Umum)  -> list-not-available di semua tahun
//   var 9   Laju Pertumbuhan PDB          -> list-not-available, dipakai 104
//   var 520 Tingkat Pengangguran Terbuka  -> list-not-available, dipakai 543
//   var 74  Kunjungan Wisman per bulan    -> list-not-available, dipakai 1150
//   var 13  Nilai Tukar Petani            -> list-not-available
//   var 24  Indeks Harga Perdagangan Besar-> list-not-available
//   var 66  Penumpang pesawat             -> deretnya berhenti di 2024
//   var 369 Indeks Harga Produsen         -> list-not-available
//
// Bentuk balasan WebAPI perlu diketahui sebelum membaca kode di bawah. Nilai
// disimpan dalam satu objek datar bernama datacontent, dan KUNCINYA adalah
// gabungan lima kode tanpa pemisah:
//
//   vervar + var + turvar + tahun + turtahun
//   99003  + 104 + 5      + 125   + 32        -> "99003104512532" = 5.12
//
// Kuncinya SELALU DIRANGKAI, tidak pernah diurai. Lebar tiap bagian berbeda
// antar variabel dan turtahun bisa satu atau dua digit, jadi mengurai dari
// string berarti menebak batas antar bagian. Merangkai tidak punya masalah itu.
//
// tahun memakai konvensi BPS: tahun masehi dikurangi 1900, jadi 2026 = 126.
// Satu permintaan menampung paling banyak 3 tahun.
//
//   node scripts/bps-data.mjs            tarik dan simpan
//   node scripts/bps-data.mjs --lihat    tampilkan saja, tidak menyimpan
import { log, getJSON, retry, readData, writeData, dijalankanLangsung } from './lib.mjs';

const API = 'https://webapi.bps.go.id/v1/api/list/model/data/domain/0000';

// arah: 'naik-baik' berarti angka naik itu kabar bagus, dipakai untuk memberi
// warna pada grafik dan menyusun kalimat rubrik. Inflasi sengaja 'netral':
// inflasi naik belum tentu buruk dan turun belum tentu baik, tergantung
// posisinya terhadap sasaran Bank Indonesia.
export const INDIKATOR = [
  {
    kode: 'inflasi', nama: 'Inflasi bulanan', varId: 1, vervar: 9999, turvar: 0,
    satuan: '%', desimal: 2, periode: 'bulanan', arah: 'netral',
    penjelas: 'Perubahan harga barang dan jasa dibanding bulan sebelumnya.',
  },
  {
    kode: 'pdb', nama: 'Pertumbuhan ekonomi', varId: 104, vervar: 99003, turvar: 5,
    satuan: '%', desimal: 2, periode: 'triwulanan', arah: 'naik-baik',
    penjelas: 'Pertumbuhan PDB dibanding triwulan yang sama tahun lalu.',
  },
  {
    kode: 'ekspor', nama: 'Nilai ekspor', varId: 196, vervar: 9999, turvar: 0,
    satuan: 'juta US$', desimal: 1, periode: 'bulanan', arah: 'naik-baik',
    penjelas: 'Nilai barang yang dijual Indonesia ke luar negeri.',
  },
  {
    kode: 'impor', nama: 'Nilai impor', varId: 497, vervar: 9999, turvar: 0,
    satuan: 'juta US$', desimal: 1, periode: 'bulanan', arah: 'netral',
    penjelas: 'Nilai barang yang dibeli Indonesia dari luar negeri.',
  },
  {
    kode: 'neraca', nama: 'Neraca perdagangan', varId: 498, vervar: 9999, turvar: 0,
    satuan: 'juta US$', desimal: 2, periode: 'bulanan', arah: 'naik-baik',
    penjelas: 'Selisih ekspor dikurangi impor. Positif berarti surplus.',
  },
  {
    kode: 'pengangguran', nama: 'Tingkat pengangguran terbuka', varId: 543, vervar: 9999, turvar: 0,
    satuan: '%', desimal: 2, periode: 'semesteran', arah: 'turun-baik',
    penjelas: 'Bagian angkatan kerja yang sedang mencari pekerjaan.',
  },
  {
    kode: 'gini', nama: 'Rasio gini', varId: 98, vervar: 9999, turvar: 191,
    satuan: '', desimal: 3, periode: 'semesteran', arah: 'turun-baik',
    penjelas: 'Ukuran ketimpangan pendapatan, 0 merata sempurna, 1 timpang sempurna.',
  },
  // Wisman memakai var 1150 yang BULANAN, bukan 1017 yang tahunan.
  //
  // Awalnya dipakai 1017 karena var 74 (yang namanya paling jelas menyebut
  // "per bulan") menjawab list-not-available. Ternyata 1150 membawa deret
  // bulanan yang sama dan masih hidup. Bedanya besar untuk situs berita:
  // tahunan berarti satu angka baru setahun sekali, bulanan berarti dua belas.
  {
    kode: 'wisman', nama: 'Kunjungan wisatawan asing', varId: 1150, vervar: 36, turvar: 0,
    satuan: 'orang', desimal: 0, periode: 'bulanan', arah: 'naik-baik',
    penjelas: 'Jumlah kedatangan wisatawan mancanegara ke Indonesia bulan itu.',
  },
  // Tiga di bawah ini dipilih karena BULANAN dan menyentuh ekonomi yang
  // dirasakan orang, bukan cuma agregat makro. Hunian hotel membaca denyut
  // pariwisata dan perjalanan bisnis; penumpang kereta membaca mobilitas
  // orang. Keduanya juga naik-turun tajam saat libur panjang dan Lebaran,
  // jadi grafiknya bercerita tanpa perlu dijelaskan panjang.
  {
    kode: 'hotel', nama: 'Tingkat hunian hotel bintang', varId: 122, vervar: 9999, turvar: 0,
    satuan: '%', desimal: 2, periode: 'bulanan', arah: 'naik-baik',
    penjelas: 'Rata-rata kamar hotel bintang yang terisi secara nasional.',
  },
  {
    kode: 'kereta', nama: 'Penumpang kereta api', varId: 72, vervar: 9, turvar: 0,
    satuan: 'ribu orang', desimal: 0, periode: 'bulanan', arah: 'naik-baik',
    penjelas: 'Jumlah orang yang naik kereta api dalam sebulan.',
  },
];

const kunciApi = () => {
  const k = (process.env.BPS_API_KEY || '').trim();
  if (!k) throw new Error('BPS_API_KEY belum diset');
  return k;
};

// Rentang tahun BPS untuk n tahun terakhir. 2026 -> 126.
export function rentangTahun(jumlah = 3, sekarang = new Date().getUTCFullYear()) {
  const akhir = sekarang - 1900;
  return (akhir - jumlah + 1) + ':' + akhir;
}

async function tarikSatu(ind, th) {
  const url = API + '/var/' + ind.varId + '/th/' + th + '/key/' + kunciApi() + '/';
  const j = await retry(() => getJSON(url, { timeout: 30000 }), 2);

  if (j.status !== 'OK' || !j.datacontent) {
    return { titik: [], catatan: j['data-availability'] || j.message || 'tidak ada data' };
  }

  // "Tahunan" dibuang: nilainya bukan satu periode melainkan rangkuman setahun,
  // jadi kalau ikut masuk deret, grafiknya punya satu batang raksasa di ujung
  // tiap tahun yang bukan bagian dari tren bulanan.
  const periodeAsli = j.turtahun.filter(t => !/tahunan/i.test(t.label));
  const titik = [];

  for (const th2 of j.tahun) {
    for (const tt of periodeAsli) {
      const kunci = '' + ind.vervar + ind.varId + ind.turvar + th2.val + tt.val;
      const nilai = j.datacontent[kunci];
      if (nilai === undefined || nilai === null || nilai === '') continue;
      titik.push({
        tahun: Number(th2.label),
        periode: tt.label.trim(),
        urut: Number(tt.val),
        nilai: Number(nilai),
      });
    }
  }

  titik.sort((a, b) => a.tahun - b.tahun || a.urut - b.urut);
  return {
    titik,
    label: j.var && j.var[0] ? j.var[0].label : ind.nama,
    satuanApi: j.var && j.var[0] ? j.var[0].unit : '',
  };
}

export async function tarikSemua({ tahun = 3 } = {}) {
  const th = rentangTahun(tahun);
  log('BPS: menarik ' + INDIKATOR.length + ' indikator, tahun ' + th);

  const hasil = {};
  for (const ind of INDIKATOR) {
    try {
      const { titik, catatan, label, satuanApi } = await tarikSatu(ind, th);
      if (!titik.length) {
        log('  ' + ind.kode.padEnd(13) + ' KOSONG (' + (catatan || '-') + ')');
        continue;
      }
      const akhir = titik[titik.length - 1];
      hasil[ind.kode] = {
        nama: ind.nama, satuan: ind.satuan, desimal: ind.desimal,
        periode: ind.periode, arah: ind.arah, penjelas: ind.penjelas,
        labelBps: label, satuanBps: satuanApi,
        varId: ind.varId, titik,
      };
      log('  ' + ind.kode.padEnd(13) + titik.length + ' titik, terakhir ' +
        akhir.periode + ' ' + akhir.tahun + ' = ' + akhir.nilai + ' ' + ind.satuan);
    } catch (e) {
      log('  ' + ind.kode.padEnd(13) + 'GAGAL: ' + String(e.message).slice(0, 60));
    }
  }
  return hasil;
}

if (dijalankanLangsung(import.meta.url)) {
  const hasil = await tarikSemua();
  const jumlah = Object.keys(hasil).length;

  if (process.argv.includes('--lihat')) {
    for (const [k, v] of Object.entries(hasil)) {
      console.log('\n' + k + '  ' + v.nama + '  [' + v.satuan + ']');
      v.titik.slice(-6).forEach(t =>
        console.log('    ' + t.periode + ' ' + t.tahun + '  ' + t.nilai));
    }
    process.exit(0);
  }

  if (!jumlah) {
    // Sengaja tidak menulis berkas kosong. Kalau WebAPI sedang bermasalah,
    // data lama jauh lebih berguna daripada halaman tanpa angka sama sekali.
    log('BPS: tidak ada satu pun indikator terisi, berkas lama dipertahankan');
    process.exit(1);
  }

  // diperbarui dipakai halaman untuk menyebut kapan angka ini ditarik.
  writeData('bps.js', 'BPS', { diperbarui: new Date().toISOString(), indikator: hasil },
    '// Angka indikator ekonomi dari WebAPI BPS (webapi.bps.go.id).\n' +
    '// Ditarik otomatis oleh scripts/bps-data.mjs - jangan diedit manual.');
  log('BPS: ' + jumlah + ' indikator tersimpan ke assets/js/bps.js');
}
