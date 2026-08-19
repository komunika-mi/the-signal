// Bahan pengetahuan untuk bot tanya jawab Telegram.
//
// Bot berjalan di Vercel sebagai fungsi tanpa server, jadi ia TIDAK bisa
// membaca berkas repo. Ia mengambil satu berkas JSON ini lewat HTTP dari
// situsnya sendiri, lalu memilih artikel yang relevan di memori. Karena itu
// isinya sengaja ramping: yang dikirim ke model nanti cuma belasan artikel
// terpilih, bukan seluruh arsip.
//
// YANG DIBAWA, DAN KENAPA:
//   arah (takeaway)  bagian yang paling berharga, dan satu-satunya yang tidak
//                    bisa didapat gratis di tempat lain. Inilah yang membuat
//                    jawaban bot berbeda dari mesin pencari.
//   emiten+sentimen  supaya pertanyaan "prospek SUPA gimana" bisa dijawab
//                    dari rangkaian laporannya, bukan satu laporan lepas.
//   slug             wajib: tiap jawaban harus bisa ditelusuri ke artikelnya.
//
// Badan artikel SENGAJA TIDAK dibawa. Ukurannya 205 KB untuk arsip sepanjang
// ini, dan deck+arah sudah memuat inti yang dibutuhkan untuk menjawab. Kalau
// pembaca butuh rinciannya, tautan artikelnya ada di tiap jawaban.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';
import { agendaGabungan } from './agenda-sinyal.mjs';

function bacaObjek(nama, buka, tutup) {
  const p = path.join(ROOT, 'assets/js', nama);
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const i = s.indexOf(buka), j = s.lastIndexOf(tutup);
  try { return JSON.parse(s.slice(i, j + 1)); } catch { return null; }
}

export function tulisBotIndeks(ARTICLES) {
  // Indeks bot ditarik lewat HTTP tiap kali bot menjawab, jadi ia dibatasi
  // meski arsipnya sendiri tidak. 400 artikel sekitar 154 KB terkompresi.
  // Pertanyaan tentang artikel yang lebih lama lebih baik dijawab "tidak ada
  // di indeks" daripada dijawab keliru.
  const MAKS_BOT = Number(process.env.SIGNAL_INDEKS_BOT || 400);
  ARTICLES = ARTICLES.slice(0, MAKS_BOT);
  const BPS = bacaObjek('bps.js', '{', '}');
  const HARIAN = bacaObjek('harian.js', '{', '}');
  const ARSIP = bacaObjek('harian-arsip.js', '[', ']') || [];
  const RAPOR = bacaObjek('rapor.js', '{', '}');

  const artikel = ARTICLES.map(a => ({
    slug: a.slug,
    judul: String(a.title || '').replace(/[\[\]]/g, ''),
    tanggal: a.date,
    iso: (a.isoDate || '').slice(0, 10),
    kategori: a.category,
    sumber: a.sourceLabel || 'tvOneNews',
    emiten: a.emiten || null,
    sentimen: a.sentimen || null,
    deck: a.deck,
    arah: a.takeaway || null,
    tag: a.tags || [],
  }));

  // Indikator BPS: hanya titik terbaru per indikator. Deret penuhnya ada di
  // /data-ekonomi.html dan tidak perlu dibawa ke percakapan.
  const indikator = [];
  for (const [kode, ind] of Object.entries((BPS && BPS.indikator) || {})) {
    const t = (ind.titik || [])[ind.titik.length - 1];
    if (!t) continue;
    const lalu = ind.titik[ind.titik.length - 2];
    indikator.push({
      kode, nama: ind.nama, nilai: t.nilai, satuan: ind.satuan || '',
      periode: t.periode + ' ' + t.tahun,
      sebelumnya: lalu ? lalu.nilai : null,
    });
  }

  const data = {
    dibuat: new Date().toISOString(),
    situs: 'https://the-signal.id',
    jumlahArtikel: artikel.length,
    artikel,
    indikator,
    harian: HARIAN ? {
      tanggal: HARIAN.tanggal, tanggalLabel: HARIAN.tanggalLabel,
      judul: HARIAN.judul, ringkas: HARIAN.ringkas,
      benang: (HARIAN.benang || []).map(b => ({ judul: b.judul, isi: b.isi })),
    } : null,
    edisiTerakhir: ARSIP.slice(0, 5).map(h => ({ tanggal: h.tanggal, judul: h.judul })),
    // Kalender penentu dipotong 20 entri terdekat: pertanyaan "kapan RUPSLB X"
    // hampir selalu soal yang dekat, dan sisanya ada di /agenda.html.
    agenda: agendaGabungan(ARTICLES).slice(0, 20).map(e => ({
      tanggal: e.iso, label: e.label, perkiraan: e.perkiraan,
      apa: e.judul, emiten: e.emiten, konteks: e.teks, slug: e.slug,
    })),
    rapor: RAPOR ? (RAPOR.entri || []).slice(0, 12).map(e => ({
      edisi: e.edisi, klaim: e.klaim, penanda: e.penanda, status: e.status,
    })) : [],
  };

  // SENGAJA di assets/data/, BUKAN assets/js/.
  //
  // vercel.json mengunci assets/css/ dan assets/js/ sebagai immutable selama
  // setahun, karena nama berkas di sana selalu dibarengi ?v=hash. Berkas ini
  // tidak punya penanda versi: bot menariknya dengan alamat tetap. Kalau ia
  // ikut terkena aturan itu, bot akan membaca arsip hari ini sampai tahun
  // depan, dan tidak ada yang menyadarinya karena jawabannya tetap terdengar
  // meyakinkan. Folder terpisah membuatnya memakai aturan cache pendek.
  const dir = path.join(ROOT, 'assets/data');
  fs.mkdirSync(dir, { recursive: true });
  const keluar = path.join(dir, 'bot-indeks.json');
  fs.writeFileSync(keluar, JSON.stringify(data), 'utf8');
  return { artikel: artikel.length, kb: Math.round(fs.statSync(keluar).size / 1024) };
}
