// Membuat blok "Angka BPS" beserta grafiknya untuk disisipkan ke artikel.
//
// SVG dirakit saat build, bukan digambar JavaScript di browser. Alasannya:
// halaman artikel di situs ini statis dan sebagian besar pembaca datang dari
// mesin pencari, jadi grafik yang butuh JavaScript berisiko tidak muncul sama
// sekali di perayap maupun di koneksi lambat. SVG bawaan halaman selalu ada,
// tidak menambah permintaan jaringan, dan ikut tersalin saat halaman disimpan.
//
// Tidak ada pustaka grafik. Yang dibutuhkan cuma satu deret batang, dan
// menambah dependensi puluhan kilobyte untuk itu tidak sepadan.
//
// Bahasanya sengaja untuk pembaca awam, sesuai arahan pemilik situs bahwa
// catatan yang dibuat redaksi tidak boleh membuat orang awam tidak paham.
// Karena itu tiap blok memuat satu kalimat penjelas dalam bahasa biasa, bukan
// hanya angka dan istilah.

const bulanSingkat = {
  Januari: 'Jan', Februari: 'Feb', Maret: 'Mar', April: 'Apr', Mei: 'Mei',
  Juni: 'Jun', Juli: 'Jul', Agustus: 'Agu', September: 'Sep',
  Oktober: 'Okt', November: 'Nov', Desember: 'Des',
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function labelPendek(t) {
  if (bulanSingkat[t.periode]) return bulanSingkat[t.periode];
  const tri = t.periode.match(/Triwulan\s+(I{1,3}V?|IV)/i);
  if (tri) return 'Tw' + tri[1];
  const sem = t.periode.match(/Semester\s+(\d)/i);
  if (sem) return 'Sem' + sem[1];
  return String(t.tahun);
}

export function angkaID(n, desimal) {
  return Number(n).toLocaleString('id-ID', {
    minimumFractionDigits: desimal, maximumFractionDigits: desimal,
  });
}

// Angka besar dibuat enak dibaca. 25458,7 juta US$ tidak berarti apa-apa bagi
// kebanyakan orang, sedangkan 25,5 miliar US$ langsung terbayang.
export function nilaiRingkas(nilai, ind) {
  if (ind.satuan === 'juta US$') {
    const miliar = nilai / 1000;
    return angkaID(miliar, Math.abs(miliar) < 10 ? 2 : 1) + ' miliar US$';
  }
  if (ind.satuan === 'orang') {
    if (Math.abs(nilai) >= 1e6) return angkaID(nilai / 1e6, 2) + ' juta orang';
    return angkaID(nilai, 0) + ' orang';
  }
  if (ind.satuan === '%') return angkaID(nilai, ind.desimal) + '%';
  return angkaID(nilai, ind.desimal);
}

// Dua bentuk grafik, dan pilihannya BUKAN selera.
//
// Batang wajib bertumpu pada nol, kalau tidak tingginya berbohong. Tapi justru
// aturan itu yang membuat batang tidak cocok untuk deret rapat: tingkat
// pengangguran bergerak 4,68 sampai 4,91 persen, dan dari dasar nol kelima
// batangnya terlihat sama tinggi. Grafik yang benar secara teknis tapi tidak
// menunjukkan apa pun sama saja tidak ada.
//
// Grafik garis tidak terikat aturan itu. Garis membaca PERUBAHAN, bukan
// besaran, jadi sumbu yang dipersempit ke rentang datanya sendiri lazim dan
// tidak menyesatkan. Karena itu:
//
//   deret memuat nilai negatif        -> batang, dengan garis nol di tengah
//   deret rapat (variasi < 40% maks)  -> garis, sumbu dipersempit
//   selebihnya                        -> batang dari nol
//
// Inflasi dan neraca perdagangan masuk kelompok pertama: keduanya bisa minus,
// dan tanda minusnya itu justru intinya (deflasi, defisit).
function pilihBentuk(titik) {
  const nilai = titik.map(t => t.nilai);
  const maks = Math.max(...nilai), min = Math.min(...nilai);
  if (min < 0) return 'batang';
  if (maks > 0 && (maks - min) < 0.4 * maks) return 'garis';
  return 'batang';
}

function svgBatang(titik, ind, uk) {
  const L = uk.L, R = 8, A = 12, B = 26;   // ruang tepi untuk label
  const lebarPlot = uk.lebarPlot, tinggiPlot = uk.tinggiPlot;
  const W = L + lebarPlot + R, H = A + tinggiPlot + B;

  const nilai = titik.map(t => t.nilai);
  const maks = Math.max(...nilai, 0);
  const min = Math.min(...nilai, 0);
  const adaNegatif = min < 0;
  const rentang = (maks - min) || 1;

  const y = (v) => A + tinggiPlot - ((v - min) / rentang) * tinggiPlot;
  const yNol = y(0);

  const jarak = lebarPlot / titik.length;
  const lebarBatang = Math.max(3, Math.min(26, jarak * 0.62));

  const batang = titik.map((t, i) => {
    const cx = L + jarak * (i + 0.5);
    const x = cx - lebarBatang / 2;
    const atas = Math.min(y(t.nilai), yNol);
    const tinggi = Math.max(1.5, Math.abs(y(t.nilai) - yNol));
    const akhir = i === titik.length - 1;
    // Batang terakhir dibedakan karena itu angka terbaru, yang paling sering
    // jadi inti beritanya.
    const isi = akhir ? 'var(--ink)' : (t.nilai < 0 ? 'var(--red)' : 'var(--ink-soft)');
    const buram = akhir ? '1' : (t.nilai < 0 ? '.55' : '.34');
    return '<rect x="' + x.toFixed(1) + '" y="' + atas.toFixed(1) + '" width="' +
      lebarBatang.toFixed(1) + '" height="' + tinggi.toFixed(1) +
      '" rx="2" fill="' + isi + '" opacity="' + buram + '"><title>' +
      esc(t.periode + ' ' + t.tahun + ': ' + nilaiRingkas(t.nilai, ind)) +
      '</title></rect>';
  }).join('');

  // Label sumbu bawah diberi jarak supaya tidak bertumpuk saat titiknya banyak.
  const lompat = Math.ceil(titik.length / uk.maksLabel);
  const labelX = titik.map((t, i) => {
    if (i % lompat !== 0 && i !== titik.length - 1) return '';
    const cx = L + jarak * (i + 0.5);
    const tebal = i === titik.length - 1 ? ' font-weight="700"' : '';
    return '<text x="' + cx.toFixed(1) + '" y="' + (A + tinggiPlot + 13) +
      '" text-anchor="middle" font-size="9"' + tebal + ' fill="var(--ink-soft)">' +
      esc(labelPendek(t)) + '</text>';
  }).join('');

  // Tahun ditulis sekali di bawah titik pertama tiap tahun, supaya pembaca tahu
  // deret ini melintasi beberapa tahun tanpa mengulang angka tahun 30 kali.
  let tahunTerakhir = null;
  const labelTahun = titik.map((t, i) => {
    if (t.tahun === tahunTerakhir) return '';
    tahunTerakhir = t.tahun;
    const cx = L + jarak * (i + 0.5);
    return '<text x="' + cx.toFixed(1) + '" y="' + (A + tinggiPlot + 24) +
      '" text-anchor="middle" font-size="9" fill="var(--ink-soft)" opacity=".75">' +
      t.tahun + '</text>';
  }).join('');

  const sumbuY = [maks, adaNegatif ? 0 : null, min].filter(v => v !== null)
    .map(v => '<text x="' + (L - 6) + '" y="' + (y(v) + 3).toFixed(1) +
      '" text-anchor="end" font-size="9" fill="var(--ink-soft)">' +
      esc(angkaID(v, ind.satuan === 'juta US$' ? 0 : ind.desimal)) + '</text>').join('');

  const garisNol = adaNegatif
    ? '<line x1="' + L + '" y1="' + yNol.toFixed(1) + '" x2="' + (L + lebarPlot) +
      '" y2="' + yNol.toFixed(1) + '" stroke="var(--ink)" stroke-width="1" opacity=".35"/>'
    : '<line x1="' + L + '" y1="' + (A + tinggiPlot) + '" x2="' + (L + lebarPlot) +
      '" y2="' + (A + tinggiPlot) + '" stroke="var(--line)" stroke-width="1"/>';

  return '<svg class="' + uk.kelas + '" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
    'preserveAspectRatio="xMidYMid meet" aria-label="' +
    esc('Grafik ' + ind.nama.toLowerCase() + ', ' + titik.length + ' periode terakhir') +
    '">' + garisNol + batang + labelX + labelTahun + sumbuY + '</svg>';
}

// Grafik garis untuk deret rapat. Sumbu dipersempit ke rentang datanya, lalu
// diberi kelonggaran 12 persen di atas dan bawah supaya garisnya tidak menempel
// tepi. Nilai terakhir diberi titik supaya mata langsung menemukan angka
// terbaru, yang biasanya jadi inti beritanya.
function svgGaris(titik, ind, uk) {
  const L = uk.L, R = 10, A = 14, B = 26;
  const lebarPlot = uk.lebarPlot, tinggiPlot = uk.tinggiPlot;
  const W = L + lebarPlot + R, H = A + tinggiPlot + B;

  const nilai = titik.map(t => t.nilai);
  const maksData = Math.max(...nilai), minData = Math.min(...nilai);
  const napas = ((maksData - minData) || Math.abs(maksData) * 0.1 || 1) * 0.12;
  const atas = maksData + napas, bawah = minData - napas;

  const y = (v) => A + tinggiPlot - ((v - bawah) / ((atas - bawah) || 1)) * tinggiPlot;
  const x = (i) => titik.length === 1
    ? L + lebarPlot / 2
    : L + (lebarPlot / (titik.length - 1)) * i;

  const titikXY = titik.map((t, i) => x(i).toFixed(1) + ',' + y(t.nilai).toFixed(1));

  const area = '<polygon points="' + L + ',' + (A + tinggiPlot) + ' ' +
    titikXY.join(' ') + ' ' + (L + lebarPlot) + ',' + (A + tinggiPlot) +
    '" fill="var(--ink)" opacity=".07"/>';
  const garis = '<polyline points="' + titikXY.join(' ') +
    '" fill="none" stroke="var(--ink)" stroke-width="1.9" ' +
    'stroke-linejoin="round" stroke-linecap="round" opacity=".8"/>';

  // Lingkaran transparan di tiap titik supaya tooltip judulnya bisa disentuh,
  // bukan cuma titik terakhir.
  const noktah = titik.map((t, i) =>
    '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(t.nilai).toFixed(1) +
    '" r="7" fill="transparent"><title>' +
    esc(t.periode + ' ' + t.tahun + ': ' + nilaiRingkas(t.nilai, ind)) +
    '</title></circle>').join('');

  const akhir = titik.length - 1;
  const noktahAkhir = '<circle cx="' + x(akhir).toFixed(1) + '" cy="' +
    y(titik[akhir].nilai).toFixed(1) + '" r="3.6" fill="var(--ink)"/>';

  const lompat = Math.ceil(titik.length / uk.maksLabel);
  const labelX = titik.map((t, i) => {
    if (i % lompat !== 0 && i !== akhir) return '';
    const tebal = i === akhir ? ' font-weight="700"' : '';
    return '<text x="' + x(i).toFixed(1) + '" y="' + (A + tinggiPlot + 13) +
      '" text-anchor="middle" font-size="9"' + tebal + ' fill="var(--ink-soft)">' +
      esc(labelPendek(t)) + '</text>';
  }).join('');

  let tahunTerakhir = null;
  const labelTahun = titik.map((t, i) => {
    if (t.tahun === tahunTerakhir) return '';
    tahunTerakhir = t.tahun;
    return '<text x="' + x(i).toFixed(1) + '" y="' + (A + tinggiPlot + 24) +
      '" text-anchor="middle" font-size="9" fill="var(--ink-soft)" opacity=".75">' +
      t.tahun + '</text>';
  }).join('');

  // Sumbu Y menampilkan rentang DATA, bukan rentang gambar, supaya angkanya
  // benar-benar ada di deret dan tidak mengarang batas.
  const desY = ind.satuan === 'juta US$' ? 0 : ind.desimal;
  const sumbuY = [maksData, minData].map(v =>
    '<text x="' + (L - 6) + '" y="' + (y(v) + 3).toFixed(1) +
    '" text-anchor="end" font-size="9" fill="var(--ink-soft)">' +
    esc(angkaID(v, desY)) + '</text>').join('');
  const panduan = [maksData, minData].map(v =>
    '<line x1="' + L + '" y1="' + y(v).toFixed(1) + '" x2="' + (L + lebarPlot) +
    '" y2="' + y(v).toFixed(1) + '" stroke="var(--line)" stroke-width="1" ' +
    'stroke-dasharray="3 3"/>').join('');

  return '<svg class="' + uk.kelas + '" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
    'preserveAspectRatio="xMidYMid meet" aria-label="' +
    esc('Grafik ' + ind.nama.toLowerCase() + ', ' + titik.length + ' periode terakhir') +
    '">' + panduan + area + garis + noktah + noktahAkhir +
    labelX + labelTahun + sumbuY + '</svg>';
}

// DUA grafik dibuat untuk tiap indikator, dan hanya satu yang tampil.
//
// Sebabnya terukur, bukan kehati-hatian berlebihan. Teks di dalam SVG ikut
// mengecil bersama viewBox-nya. Grafik lebar 612 satuan yang ditampilkan di
// layar ponsel 335 piksel menyusut ke 55 persen, jadi label sumbu font 9
// mendarat sekitar 5 piksel di layar dan tidak terbaca sama sekali. Diukur
// langsung pada viewport 375.
//
// Memperbesar fontnya bukan jalan keluar: yang sama akan jadi kelewat besar di
// desktop, karena skalanya di sana justru sekitar 1. Maka yang diganti bukan
// fontnya melainkan kanvasnya. Versi sempit memakai viewBox 348 satuan dan
// hanya 12 titik terakhir, sehingga skalanya mendekati 1 di ponsel dan
// labelnya kembali seukuran teks biasa.
//
// Keduanya ditulis ke halaman lalu dipilih CSS lewat media query. Tanpa
// JavaScript, karena halaman ini statis dan grafik tidak boleh bergantung pada
// skrip yang mungkin tidak jalan. Ongkosnya beberapa kilobyte per artikel,
// jauh lebih murah daripada grafik yang tidak terbaca separuh pembacanya.
const UKURAN_LEBAR = { L: 44, lebarPlot: 560, tinggiPlot: 118, maksLabel: 12, kelas: 'bps-svg bps-svg-lebar' };
const UKURAN_SEMPIT = { L: 40, lebarPlot: 300, tinggiPlot: 104, maksLabel: 6, kelas: 'bps-svg bps-svg-sempit' };

function satuGrafik(titik, ind, uk) {
  return pilihBentuk(titik) === 'garis'
    ? svgGaris(titik, ind, uk) : svgBatang(titik, ind, uk);
}

const svgGrafik = (titik, ind) =>
  satuGrafik(titik, ind, UKURAN_LEBAR) +
  satuGrafik(titik.slice(-12), ind, UKURAN_SEMPIT);

// Kalimat perbandingan terhadap periode sebelumnya, dalam bahasa biasa.
function kalimatArah(titik, ind) {
  if (titik.length < 2) return '';
  const kini = titik[titik.length - 1], lalu = titik[titik.length - 2];
  const selisih = kini.nilai - lalu.nilai;
  if (Math.abs(selisih) < Math.pow(10, -ind.desimal) / 2) {
    return 'Praktis tidak berubah dibanding ' + lalu.periode + ' ' + lalu.tahun + '.';
  }
  const naik = selisih > 0;
  // Untuk satuan persen, selisihnya poin persen, bukan persen. Membedakan ini
  // penting: pengangguran turun dari 4,85 ke 4,68 itu turun 0,17 poin, bukan
  // turun 0,17 persen.
  const besar = ind.satuan === '%'
    ? angkaID(Math.abs(selisih), ind.desimal) + ' poin'
    : nilaiRingkas(Math.abs(selisih), ind);
  return (naik ? 'Naik ' : 'Turun ') + besar + ' dibanding ' +
    lalu.periode + ' ' + lalu.tahun + '.';
}

// Blok lengkap siap tempel ke badan artikel.
export function blokBps(kode, data, { maksTitik = 30 } = {}) {
  const ind = data && data.indikator ? data.indikator[kode] : null;
  if (!ind || !ind.titik || ind.titik.length < 2) return '';

  const titik = ind.titik.slice(-maksTitik);
  const akhir = titik[titik.length - 1];

  return '<figure class="bps-blok">' +
    '<figcaption class="bps-kepala">' +
      '<span class="bps-tag">Angka BPS</span>' +
      '<b class="bps-judul">' + esc(ind.nama) + '</b>' +
    '</figcaption>' +
    '<div class="bps-sorot">' +
      '<span class="bps-nilai num">' + esc(nilaiRingkas(akhir.nilai, ind)) + '</span>' +
      '<span class="bps-periode">' + esc(akhir.periode + ' ' + akhir.tahun) + '</span>' +
    '</div>' +
    '<p class="bps-penjelas">' + esc(ind.penjelas) + ' ' + esc(kalimatArah(titik, ind)) + '</p>' +
    svgGrafik(titik, ind) +
    '<p class="bps-sumber">Sumber: Badan Pusat Statistik, ' +
      esc(ind.labelBps || ind.nama) + '. Diolah The Signal.</p>' +
  '</figure>';
}

// Indikator mana yang cocok untuk sebuah artikel.
//
// Kata kuncinya sengaja spesifik. Percobaan pertama memakai kata seperti
// "harga" dan "dagang" saja, dan hasilnya artikel harga emas ikut dipasangi
// grafik inflasi, padahal harga emas tidak ada hubungannya dengan indeks harga
// konsumen. Grafik yang tidak nyambung lebih buruk daripada tidak ada grafik:
// pembaca menyangka angka itu menjelaskan beritanya.
const KUNCI = [
  ['inflasi', /\binflasi\b|indeks harga konsumen|\bihk\b|deflasi/i],
  ['pdb', /pertumbuhan ekonomi|\bpdb\b|produk domestik bruto|ekonomi tumbuh|pertumbuhan triwulan/i],
  ['neraca', /neraca perdagangan|surplus perdagangan|defisit perdagangan|neraca dagang/i],
  ['ekspor', /\bekspor\b/i],
  ['impor', /\bimpor\b/i],
  ['pengangguran', /pengangguran|\btpt\b|angkatan kerja|serapan tenaga kerja/i],
  ['gini', /rasio gini|gini ratio|ketimpangan (pendapatan|ekonomi)/i],
  ['wisman', /wisatawan (mancanegara|asing)|kunjungan wisman|pariwisata nasional/i],
];

// Angka BPS mengukur Indonesia. Kalau beritanya tentang negara lain, grafiknya
// salah tempat sekalipun kata kuncinya cocok.
//
// Terukur saat percobaan: "Inflasi AS Melandai, Peluang Kenaikan Bunga Fed
// Menipis" dipasangi grafik inflasi Indonesia. Kata kuncinya memang ada, tapi
// angkanya bicara soal negara yang sama sekali berbeda.
const LUAR_NEGERI = /\bAS\b|Amerika|Tiongkok|\bChina\b|Jepang|Korea|India|Uni Eropa|Eropa|ASEAN|global|dunia|internasional|\bFed\b|negara lain/i;

export function indikatorUntuk(artikel, data) {
  if (!data || !data.indikator) return '';

  // HANYA judul dan deck, sengaja tidak termasuk badan artikel.
  //
  // Percobaan pertama ikut memindai badan artikel dan hasilnya melebar jauh:
  // berita "Kemendag Buka Pojok UMKM di Kantor" dapat grafik ekspor dan berita
  // "Purbaya: Pajak Kontrakan Bukan Aturan Baru" dapat grafik pertumbuhan
  // ekonomi, cuma karena istilah itu lewat sekali di satu paragraf. Judul dan
  // deck adalah pernyataan redaksi tentang APA ISI BERITANYA, jadi itu ukuran
  // yang benar. Jumlah artikel bergrafik turun, dan memang seharusnya begitu:
  // grafik yang tidak nyambung lebih buruk daripada tidak ada grafik, karena
  // pembaca menyangka angka itu menjelaskan beritanya.
  const teks = [artikel.title, artikel.deck].filter(Boolean).join(' ');
  if (LUAR_NEGERI.test(teks)) return '';

  for (const [kode, re] of KUNCI) {
    if (re.test(teks) && data.indikator[kode]) return kode;
  }
  return '';
}
