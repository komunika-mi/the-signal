// Menyatukan label entitas yang terpecah.
//
// Tag di articles.js ditulis model per artikel, tanpa daftar acuan. Hasilnya
// satu hal yang sama tersebar jadi beberapa label: "BEI" 19 artikel dan
// "Bursa Efek Indonesia" 12, "direksi" 16 dan "Direksi" 4, "Danantara" 16 dan
// "danantara" 3. Dari 900 label unik, sebagian besar sebenarnya duplikat.
// Selama masih terpecah, tak satu pun bisa jadi pintu ke daftar artikelnya.
//
// Dua lapis penyatuan, sengaja dipisah karena tingkat kepastiannya beda:
//
//   1. KAPITALISASI - mekanis dan aman. Label yang hanya beda huruf besar
//      kecil disatukan ke bentuk yang paling sering dipakai. Kalau seri,
//      menang yang berhuruf besar, karena itu biasanya nama diri: "Telkom"
//      mengalahkan "telkom", bukan sebaliknya.
//
//   2. ALIAS - kamus tangan, sengaja PENDEK. Cuma pasangan yang benar-benar
//      merujuk hal yang sama. Akronim yang memang bentuk umumnya, seperti OJK
//      dan BPS, TIDAK dipanjangkan: yang dicari orang justru akronimnya.
const ALIAS = {
  // Bursa: nama panjang jadi kanonik karena tidak ambigu bagi mesin jawab.
  'bei': 'Bursa Efek Indonesia',
  'idx': 'Bursa Efek Indonesia',
  'bursa efek indonesia': 'Bursa Efek Indonesia',

  // Aturan rumah: kepala negara SELALU "Presiden Prabowo", tidak pernah nama
  // telanjang. Label "prabowo subianto" lolos ke arsip tanpa tertangkap
  // penjaga mana pun, dan di sinilah tempat menegakkannya.
  'prabowo': 'Presiden Prabowo',
  'prabowo subianto': 'Presiden Prabowo',
  'presiden prabowo': 'Presiden Prabowo',
  'presiden prabowo subianto': 'Presiden Prabowo',

  // Nama diri yang tertulis huruf kecil dan tidak punya pembanding berhuruf
  // besar, jadi lapis kapitalisasi tidak bisa menolongnya.
  'antam': 'Antam',
  'wika': 'WIKA',
  'ihsg': 'IHSG',
};

export function kanonisasi(ARTICLES) {
  // Lapis 1: bentuk kapitalisasi yang menang per label.
  const hitung = new Map();
  for (const a of ARTICLES) {
    for (const t of (a.tags || [])) {
      const k = String(t).trim();
      if (!k) continue;
      const kunci = k.toLowerCase();
      if (!hitung.has(kunci)) hitung.set(kunci, new Map());
      const m = hitung.get(kunci);
      m.set(k, (m.get(k) || 0) + 1);
    }
  }
  const hurufBesar = (s) => (s.match(/[A-Z]/g) || []).length;
  const pemenang = new Map();
  for (const [kunci, m] of hitung) {
    const urut = [...m.entries()].sort((x, y) => y[1] - x[1] || hurufBesar(y[0]) - hurufBesar(x[0]));
    pemenang.set(kunci, urut[0][0]);
  }

  // Lapis 2: alias menimpa hasil lapis 1.
  const kanon = (label) => {
    const kunci = String(label || '').trim().toLowerCase();
    if (!kunci) return '';
    return ALIAS[kunci] || pemenang.get(kunci) || String(label).trim();
  };

  // Label per artikel, sudah kanonik dan tanpa kembar.
  const labelArtikel = (a) => {
    const keluar = [], sudah = new Set();
    for (const t of (a.tags || [])) {
      const k = kanon(t);
      if (!k || sudah.has(k.toLowerCase())) continue;
      sudah.add(k.toLowerCase());
      keluar.push(k);
    }
    return keluar;
  };

  const per = new Map();
  for (const a of ARTICLES) {
    for (const k of labelArtikel(a)) {
      if (!per.has(k)) per.set(k, []);
      per.get(k).push(a);
    }
  }
  return { kanon, labelArtikel, per };
}

export const slugTopik = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Ambang delapan artikel, bukan tiga.
//
// Tiga artikel menghasilkan seratusan halaman tipis, dan halaman tipis
// merugikan seluruh domain, bukan cuma dirinya sendiri. Delapan memberi
// belasan halaman yang tiap-tiapnya berisi daftar nyata.
//
// Label yang slug-nya BENTROK dengan rubrik atau tema dibuang, karena dua
// halaman berisi kumpulan artikel yang hampir sama untuk kata kunci yang sama
// saling memakan peringkat, bukan saling menguatkan.
export const MIN_ARTIKEL_TOPIK = 8;

export function daftarTopik(per, slugTerpakai) {
  return [...per.entries()]
    .filter(([nama, arts]) =>
      arts.length >= MIN_ARTIKEL_TOPIK && !slugTerpakai.has(slugTopik(nama)))
    .sort((x, y) => y[1].length - x[1].length);
}
