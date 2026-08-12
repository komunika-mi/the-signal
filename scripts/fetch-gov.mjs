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
// Yang TIDAK bisa dipakai (sudah diuji, jangan buang waktu mengulang):
//   BPS     - dirender JavaScript di balik Cloudflare, nol judul terbaca
//   OJK     - membalas 699 byte, diblokir
//   Setkab  - 7,6 KB tanpa isi
//   Kemenkeu- punya sitemap tapi isinya halaman profil, bukan berita
// Untuk BPS, jalan yang tersisa adalah WebAPI resmi yang butuh API key gratis.
import { get, retry, stripTags, log } from './lib.mjs';

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
];

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

export async function ambilBeritaPemerintah({ perSumber = 6 } = {}) {
  const hasil = [];

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
