// Ambil siaran pers resmi dari kanal pemerintah.
//
// Kenapa ini ada: berita tvOne sudah dirangkum pihak lain, sementara siaran
// pers kementerian adalah SUMBER PRIMER, sama seperti keterbukaan IDX. Di
// situlah The Signal bisa membaca arah kebijakan lebih awal.
//
// TIGA SUMBER, semuanya diuji 2026-08-12:
//   Bank Indonesia  - halaman news-release, dirender server, segar (11 Agt)
//   Kemendag        - halaman siaran pers, dirender server, segar (12 Agt)
//   Kemenperin      - halaman siaran pers, dirender server, ada konten 2026
//
// PENTING: Kemenperin punya RSS di /rss TAPI JANGAN DIPAKAI. Feed itu mati,
// 20 itemnya semua bertanggal 2021 dan 2023. Halaman HTML-nya yang hidup.
//
// SUMBER KEEMPAT sejak 12 Agustus 2026: BPS lewat WebAPI resmi.
// Situs bps.go.id sendiri tetap tidak bisa dikeruk, dirender JavaScript di
// balik Cloudflare dan nol judul terbaca. Tapi WebAPI-nya membuka Berita Resmi
// Statistik lengkap dengan ringkasan, dan itu sumber paling primer yang ada:
// inflasi, pertumbuhan ekonomi, neraca dagang, pengangguran, gini ratio.
//
// Yang TIDAK bisa dipakai (sudah diuji, jangan buang waktu mengulang):
//   OJK     - membalas 699 byte, diblokir
//   Setkab  - 7,6 KB tanpa isi
//   Kemenkeu- punya sitemap tapi isinya halaman profil, bukan berita
import { get, getJSON, retry, stripTags, log, cariFotoUtama } from './lib.mjs';

const SUMBER = [
  {
    nama: 'Bank Indonesia',
    lembaga: 'Bank Indonesia',
    daftar: 'https://www.bi.go.id/id/publikasi/ruang-media/news-release/default.aspx',
    asal: 'https://www.bi.go.id',
    pola: /href="((?:\/id)?\/publikasi\/ruang-media\/news-release\/Pages\/sp_\d+\.aspx)"/g,
  },
  {
    nama: 'Kemendag',
    lembaga: 'Kementerian Perdagangan',
    daftar: 'https://www.kemendag.go.id/berita/siaran-pers',
    asal: 'https://www.kemendag.go.id',
    // Hanya tautan artikel. Tombol berbagi Facebook dan WhatsApp memuat URL
    // yang sama di dalam query string, jadi harus disaring.
    pola: /href="(https:\/\/www\.kemendag\.go\.id\/berita\/siaran-pers\/[a-z0-9-]+)"/g,
  },
  {
    nama: 'Kemenperin',
    lembaga: 'Kementerian Perindustrian',
    daftar: 'https://kemenperin.go.id/siaran-pers',
    asal: 'https://kemenperin.go.id',
    pola: /href="(\/artikel\/\d+\/[^"]+)"/g,
  },
  // ESDM ditambahkan 13 Agustus 2026. Isinya justru paling padat angka di
  // antara semua kanal pemerintah: harga minyak mentah Indonesia (ICP), harga
  // batu bara acuan (HBA), dan penerimaan negara bukan pajak, semuanya terbit
  // rutin dan langsung berupa angka.
  {
    nama: 'ESDM',
    lembaga: 'Kementerian Energi dan Sumber Daya Mineral',
    daftar: 'https://www.esdm.go.id/id/media-center/arsip-berita',
    asal: 'https://www.esdm.go.id',
    pola: /href="((?:https:\/\/www\.esdm\.go\.id)?\/id\/media-center\/arsip-berita\/[a-z0-9-]+)"/g,
  },
];

// Sumber yang SUDAH DICOBA dan tidak bisa diambil, supaya tidak dicoba lagi
// tanpa alasan baru. Diuji 13 Agustus 2026:
//
//   Kemenkeu   halamannya kerangka JavaScript. Lima URL berbeda
//              (siaran-pers, berita, /api/) semuanya membalas 27.009 byte yang
//              sama persis tanpa satu pun tautan artikel di HTML-nya.
//   OJK        membalas 245 byte, halaman pengalih. Dua jalur dicoba,
//              keduanya sama.
//   Kemenko    ekon.go.id dan www.ekon.go.id sama-sama gagal tersambung dari
//   Perekonomian   sini.
//
// Ketiganya baru bisa masuk kalau ada API resmi, RSS, atau perayapan yang
// menjalankan JavaScript. Menambah perayap berbasis browser ke pipeline ini
// terlalu berat untuk tiga sumber, jadi ditunda sampai ada kebutuhan jelas.

// Pengumuman lelang, seleksi vendor, dan lowongan bukan berita ekonomi.
// Kemenperin banyak memuat ini di halaman siaran persnya.
const BUKAN_BERITA = /pengumuman (seleksi|pemenang|lelang|pengadaan)|rekrutmen|lowongan|cpns|tender/i;

function ambilTautan(html, sumber) {
  const keluar = [];
  for (const m of html.matchAll(sumber.pola)) {
    const u = m[1].startsWith('http') ? m[1] : sumber.asal + m[1];
    if (!keluar.includes(u)) keluar.push(u);
  }
  return keluar;
}

function bersihkanEntitas(s) {
  return String(s)
    .replace(/&#160;|&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, ' ').trim();
}

// Judul diambil dari halaman artikelnya sendiri, bukan dari daftar, karena
// susunan daftar tiap situs berbeda dan gampang berubah.
//
// URUTAN PENTING: <title> didahulukan atas <h1>. Di Bank Indonesia, <h1>
// justru berisi nama berkas halaman ("sp_2815526") sementara judul aslinya
// ("Survei Penjualan Eceran Juli 2026...") ada di <title>. Kalau h1
// didahulukan, semua berita BI terbit dengan judul berupa kode.
function ambilJudul(html) {
  const og = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);
  if (og && og[1].trim()) return bersihkanEntitas(stripTags(og[1]));

  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (t) {
    // buang embel-embel nama situs di ujung judul
    const judul = bersihkanEntitas(stripTags(t[1]))
      .replace(/\s*[|\-–]\s*(Bank Indonesia|Kementerian [^|\-–]+|Kemendag|Kemenperin)\s*$/i, '');
    if (judul.length > 12) return judul;
  }

  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return h1 ? bersihkanEntitas(stripTags(h1[1])) : '';
}

function ambilIsi(html) {
  // Buang bagian yang bukan isi supaya paragraf navigasi tidak ikut terbaca.
  const bersih = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');

  const p = [...bersih.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => stripTags(m[1]).replace(/\s+/g, ' ').trim())
    .filter(t => t.length > 60);          // buang keterangan gambar dan menu

  return [...new Set(p)].join('\n\n').slice(0, 7000);
}

// Berita Resmi Statistik BPS lewat WebAPI. Butuh BPS_API_KEY (gratis, terbit
// sebagai App ID setelah mendaftarkan aplikasi di webapi.bps.go.id).
//
// Tanpa key, fungsi ini diam saja dan sumber lain tetap jalan. Sengaja begitu:
// hilangnya satu kanal tidak boleh menjatuhkan seluruh pembaruan harian.
//
// domain 0000 = nasional. Ada 549 domain lain (34 provinsi, 514 kabupaten),
// tapi The Signal menulis ekonomi nasional, jadi yang daerah cuma jadi bising.
async function ambilBPS({ maks = 6, hariKeBelakang = 21 } = {}) {
  const key = (process.env.BPS_API_KEY || '').trim();
  if (!key) { log('  BPS: BPS_API_KEY belum diset, kanal dilewati'); return []; }

  const url = 'https://webapi.bps.go.id/v1/api/list/model/pressrelease/domain/0000/key/' + key + '/';
  const j = await retry(() => getJSON(url, { timeout: 30000 }));
  if (j.status !== 'OK' || !Array.isArray(j.data) || !Array.isArray(j.data[1])) {
    throw new Error('balasan BPS tidak berbentuk daftar BRS');
  }

  const batas = new Date(Date.now() - hariKeBelakang * 86400000).toISOString().slice(0, 10);
  const hasil = [];

  for (const b of j.data[1]) {
    if (!b.rl_date || b.rl_date < batas) continue;

    // abstract berupa <ul><li>...</li></ul>. Tiap butir dijadikan paragraf
    // sendiri supaya terbaca sebagai poin, bukan satu blok panjang tanpa jeda.
    const butir = [...String(b.abstract || '').matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
      .map(m => bersihkanEntitas(stripTags(m[1])))
      .filter(t => t.length > 30);
    const isi = butir.length ? butir.join('\n\n') : bersihkanEntitas(stripTags(b.abstract || ''));
    if (isi.length < 300) continue;

    hasil.push({
      judulAsli: bersihkanEntitas(String(b.title || '')),
      isi,
      url: 'https://www.bps.go.id/id/pressrelease/' + b.brs_id,
      lembaga: 'Badan Pusat Statistik',
      terbit: new Date(b.rl_date + 'T00:00:00+07:00').toISOString(),
    });
    if (hasil.length >= maks) break;
  }

  log('  BPS: ' + hasil.length + ' Berita Resmi Statistik (dari ' + j.data[1].length + ' terbaru)');
  return hasil;
}

export async function ambilBeritaPemerintah({ perSumber = 6 } = {}) {
  const hasil = [];

  try {
    hasil.push(...await ambilBPS({ maks: perSumber }));
  } catch (e) {
    log('  BPS GAGAL: ' + String(e.message).slice(0, 70));
  }

  for (const s of SUMBER) {
    let tautan = [];
    try {
      const daftar = await retry(() => get(s.daftar, { timeout: 30000 }));
      tautan = ambilTautan(daftar, s).slice(0, perSumber);
      log('  ' + s.nama + ': ' + tautan.length + ' tautan');
    } catch (e) {
      log('  ' + s.nama + ' GAGAL ambil daftar: ' + String(e.message).slice(0, 60));
      continue;
    }

    for (const url of tautan) {
      try {
        const html = await retry(() => get(url, { timeout: 30000 }));
        const judul = ambilJudul(html);
        const isi = ambilIsi(html);
        if (!judul || isi.length < 300) continue;      // terlalu tipis, lewati
        if (BUKAN_BERITA.test(judul)) continue;

        hasil.push({
          judulAsli: judul,
          isi,
          url,
          lembaga: s.lembaga,
          terbit: new Date().toISOString(),
          // Siaran pers lembaga sering menyertakan foto dokumentasi acaranya.
          // Kalau ada, itu dipakai menggantikan ilustrasi AI. Survei 12 Agustus
          // 2026: Kemendag 2 dari 4 berfoto, Bank Indonesia dan Kemenperin
          // belum ketemu satu pun, jadi keduanya tetap jatuh ke ilustrasi.
          fotoSumber: cariFotoUtama(html),
          kreditFoto: s.lembaga,
        });
      } catch (e) {
        log('    lewati ' + url.slice(-42) + ': ' + String(e.message).slice(0, 40));
      }
    }
  }

  log('kanal pemerintah: ' + hasil.length + ' siaran pers terbaca');
  return hasil;
}

if (process.argv[1] && import.meta.url === 'file:///' + process.argv[1].replace(/\\/g, '/')) {
  const d = await ambilBeritaPemerintah({ perSumber: 3 });
  d.forEach(x => log('[' + x.lembaga + '] ' + x.judulAsli.slice(0, 62) + '  (' + x.isi.length + ' krkt)'));
}
