// Generate static per-article and per-video pages with real OG tags,
// so WhatsApp / Facebook / X previews show that item's own photo.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
import { SITUS as BASE } from './situs.mjs';
import { NODE_IDENTITAS, RUJUK_ORGANISASI, RUJUK_SITUS, halamanKoleksi } from './identitas.mjs';

function muat(file) {
  const src = fs.readFileSync(path.join(ROOT, 'assets/js', file), 'utf8');
  const i = src.indexOf('['), j = src.lastIndexOf(']');
  return JSON.parse(src.slice(i, j + 1));
}
const ARTICLES = muat('articles.js');
const VIDEOS = muat('videos.js');

// Indeks ramping ditulis SEBELUM hashAset() di bawah menghitung versi aset,
// supaya hash-nya mencerminkan isi build ini, bukan sisa build sebelumnya.
import { tulisIndeksArtikel, bakeRoot } from './bake-root.mjs';
import { HALAMAN_STATIS } from './halaman-statis.mjs';
import { kepalaAnalitik, VERIFIKASI_GSC, GA4_ID } from './analitik.mjs';
tulisIndeksArtikel(ARTICLES);
function muatPasar() {
  const p = path.join(ROOT, 'assets/js', 'market.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}
const MARKET = muatPasar();

// Angka indikator BPS. Boleh tidak ada: kalau bps.js belum pernah ditarik atau
// WebAPI sedang bermasalah, halaman tetap dibangun tanpa grafik. Data ekonomi
// itu pelengkap berita, bukan syarat terbitnya.
import { blokBps, indikatorUntuk } from './bps-grafik.mjs';
function muatBps() {
  const p = path.join(ROOT, 'assets/js', 'bps.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}
const BPS = muatBps();

// Signal Harian dimuat DI SINI, bukan di dekat pemakaiannya, karena bakeRoot()
// memerlukannya untuk panel di puncak beranda dan bakeRoot dipanggil lebih dulu
// daripada bagian Signal Harian di bawah. const yang dipakai sebelum
// dideklarasikan melempar ReferenceError, bukan undefined.
function muatHarian() {
  const p = path.join(ROOT, 'assets/js/harian.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}
const HARIAN = muatHarian();

// Signal Pekanan, terbit Minggu. Boleh tidak ada: sebelum edisi pertama
// terbit, dan pada pekan yang dinilai terlalu sepi untuk berpola, berkasnya
// memang belum atau tidak dibuat. Halaman lain tidak boleh ikut gagal.
function muatPekanan() {
  const p = path.join(ROOT, 'assets/js/pekanan.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}
const PEKANAN = muatPekanan();
function muatArsipPekanan() {
  const p = path.join(ROOT, 'assets/js/pekanan-arsip.js');
  if (!fs.existsSync(p)) return PEKANAN ? [PEKANAN] : [];
  const m = fs.readFileSync(p, 'utf8').match(/\[[\s\S]*\]/);
  if (!m) return PEKANAN ? [PEKANAN] : [];
  try { return JSON.parse(m[0]); } catch { return PEKANAN ? [PEKANAN] : []; }
}
const ARSIP_PEKANAN = muatArsipPekanan();

// Empat produk sinyal yang dihitung dari arsip yang sudah ada: kalender
// penentu (agenda), garis waktu isu (tema), arsip per emiten, dan rapor
// pembacaan. Tidak satu pun memanggil model saat build; semuanya susunan
// ulang data yang tersimpan.
import { agendaGabungan } from './agenda-sinyal.mjs';
import { kelompokTema, temaDariArtikel } from './tema.mjs';
const AGENDA = agendaGabungan(ARTICLES);
const KELOMPOK_TEMA = kelompokTema(ARTICLES);
const TEMA_TAYANG = new Set(KELOMPOK_TEMA.map(t => t.slug));
function muatRapor() {
  const p = path.join(ROOT, 'assets/js/rapor.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}
const RAPOR = muatRapor();

// Kelompok artikel per emiten. Huruf besar dijaga: URL di Vercel peka kapital,
// jadi /emiten/SUPA.html adalah satu-satunya bentuk yang ditautkan.
const EMITEN = (() => {
  const m = new Map();
  for (const a of ARTICLES) {
    if (!a.emiten) continue;
    const kode = String(a.emiten).toUpperCase().trim();
    if (!/^[A-Z]{4}$/.test(kode)) continue;
    if (!m.has(kode)) m.set(kode, []);
    m.get(kode).push(a);
  }
  return m;
})();

import crypto from 'node:crypto';
function hashAset() {
  const berkas = ['assets/css/style.css', 'assets/js/shared.js',
    'assets/js/articles.js', 'assets/js/articles-index.js', 'assets/js/videos.js',
    'assets/js/market.js', 'assets/js/bps.js', 'assets/js/harian.js',
    'assets/js/harian-arsip.js', 'assets/js/pekanan.js', 'assets/js/pekanan-arsip.js'];
  const h = crypto.createHash('md5');
  for (const f of berkas) {
    const fp = path.join(ROOT, f);
    if (fs.existsSync(fp)) h.update(fs.readFileSync(fp));
  }
  return h.digest('hex').slice(0, 8);
}
const VER = hashAset();


function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function hl(t) { return esc(t).replace(/\[([^\]]+)\]/, '<span class="hl">$1</span>'); }
function plain(t) { return String(t).replace(/[\[\]]/g, ''); }
function catSlug(c) { return c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
// URL gambar dengan penanda versi. Berkas foto ditimpa dengan nama yang sama
// saat ilustrasi diganti foto asli, sedangkan aset gambar di-cache tujuh hari.
// Tanpa penanda ini pembaca yang sudah pernah membuka halaman tetap melihat
// gambar lama selama sepekan, dan itu persis keluhan "fotonya beda".
function imgUrl(a) { return '/' + a.image + (a.imageV ? '?v=' + a.imageV : ''); }

// Angka BPS ditempel SETELAH paragraf kedua, bukan di atas atau di bawah.
//
// Di atas berarti pembaca melihat grafik sebelum tahu beritanya soal apa. Di
// bawah berarti grafiknya jadi lampiran yang jarang terbaca. Setelah paragraf
// kedua, konteksnya sudah terbentuk dan grafiknya masih di dalam alur baca.
//
// Artikel pendek (dua paragraf atau kurang) mendapatkannya di akhir, karena
// tidak ada tempat lain.
function badanDenganBps(a) {
  const paragraf = a.body.map(p => '<p>' + esc(p) + '</p>');
  const kode = indikatorUntuk(a, BPS);
  if (!kode) return paragraf.join('');
  const blok = blokBps(kode, BPS);
  if (!blok) return paragraf.join('');
  const sisip = Math.min(2, paragraf.length);
  return paragraf.slice(0, sisip).join('') + blok + paragraf.slice(sisip).join('');
}
function articleUrl(a) { return '/berita/' + a.slug + '.html'; }
function videoUrl(v) { return '/tayangan/' + v.id + '.html'; }
function videoMeta(v) { return v.program === 'tvOneNews' ? 'tvOneNews' : 'tvOneNews &middot; ' + esc(v.program); }
const PLAY = '<span class="play-dot"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.55)"/><polygon points="10,7.5 10,16.5 17,12" fill="#fff"/></svg></span>';

const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

// Stempel waktu untuk data terstruktur WAJIB berzona waktu.
//
// articles.js menyimpan "2026-08-13T17:11:30" tanpa akhiran zona. Tanpa
// offset, Google dan mesin jawab menebak sendiri zonanya, dan tebakan yang
// lazim adalah UTC. Untuk situs yang menerbitkan sore hari WIB, itu menggeser
// jam terbit tujuh jam ke belakang dan bisa memindahkan artikel ke tanggal
// sebelumnya. Di produk yang seluruh nilainya bersandar pada kebaruan, itu
// membuang sinyal yang sudah susah payah dikumpulkan.
// Ukuran gambar yang SEBENARNYA, dibaca dari berkasnya.
//
// Sebelumnya og:image:width dan og:image:height dipatok 760x570 untuk seluruh
// artikel, padahal berkas aslinya 680 piksel dengan tinggi bermacam-macam.
// Jadi bukan cuma kurang presisi, melainkan DEKLARASI YANG SALAH: platform
// yang percaya angka itu menyiapkan ruang dengan rasio keliru, dan gambarnya
// terpotong atau berbingkai kosong saat tautan dibagikan.
//
// Dibaca sekali per berkas lalu diingat, karena satu gambar bisa dipakai
// beberapa halaman dan build memproses ratusan artikel.
const _ukuranGambar = new Map();
function ukuranGambar(relatif) {
  if (_ukuranGambar.has(relatif)) return _ukuranGambar.get(relatif);
  let hasil = null;
  try {
    const b = fs.readFileSync(path.join(ROOT, relatif));
    if (b.length > 24 && b[0] === 0x89 && b.slice(1, 4).toString() === 'PNG') {
      hasil = { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
    } else if (b[0] === 0xFF && b[1] === 0xD8) {
      // JPEG: telusuri penanda sampai ketemu SOF yang memuat dimensinya.
      for (let i = 2; i < b.length - 9;) {
        if (b[i] !== 0xFF) { i++; continue; }
        const m = b[i + 1];
        if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) {
          hasil = { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
          break;
        }
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch { hasil = null; }
  _ukuranGambar.set(relatif, hasil);
  return hasil;
}


// Daftar artikel sumber di kaki halaman edisi.
//
// Dua gunanya sekaligus: pembaca bisa menelusuri dari rangkuman ke berita
// aslinya, dan tiap artikel mendapat satu tautan masuk dari halaman yang
// tertaut menu di seluruh situs. Slug yang tidak ketemu di arsip dilewati
// diam-diam, bukan dicetak sebagai tautan mati.
// Stempel waktu edisi dalam +07:00.
//
// Kedua edisi menyimpan "dibuat" sebagai ISO berakhiran Z. Instannya benar,
// tapi seluruh situs memakai +07:00 dan pembaca mesin membandingkan apa
// adanya, jadi zonanya dipindah tanpa mengubah saatnya.
function stempelWIB(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return undefined;
  return new Date(d.getTime() + 7 * 3600 * 1000).toISOString().slice(0, 19) + '+07:00';
}

function daftarBahan(edisi) {
  const peta = new Map(ARTICLES.map(a => [a.slug, a]));
  let ada = (edisi.bahanSlug || []).map(s => peta.get(s)).filter(Boolean);
  let judul = 'Artikel yang dirangkum edisi ini';
  if (!ada.length) {
    // Edisi lama tidak menyimpan slug bahannya. Merekonstruksinya dari tanggal
    // TIDAK sah: pemeriksaan menunjukkan arsip 18 Agustus berisi 39 artikel
    // sedangkan edisinya menyebut 34, jadi lima di antaranya masuk setelah
    // edisi ditulis. Daripada mengaku merangkum yang tidak dirangkum,
    // judulnya diganti jadi klaim yang memang benar.
    ada = ARTICLES.filter(a => String(a.isoDate || '').slice(0, 10) === edisi.tanggal);
    judul = 'Berita yang terbit ' + (edisi.tanggalLabel || edisi.tanggal);
  }
  if (!ada.length) return '';
  return '<section class="rail bahan-edisi">' +
    '<h2 class="bahan-judul">' + esc(judul) + '</h2>' +
    '<ul class="bahan-daftar">' +
    ada.map(a => '<li><a href="' + articleUrl(a) + '">' + esc(plain(a.title)) + '</a>' +
      '<span class="bahan-tgl num">' + esc(a.date || '') + '</span></li>').join('') +
    '</ul></section>';
}

function waktuISO(iso) {
  const s = String(iso == null ? '' : iso).trim();
  if (!s) return '';
  // Zulu diubah ke +07:00, bukan sekadar diloloskan. Instannya sama persis,
  // yang berubah cuma cara menulisnya, tapi konsistensinya penting: lastmod
  // sitemap dipotong sepuluh karakter pertama, dan "2026-08-14T22:10:00Z"
  // dipotong jadi 14 Agustus padahal di WIB peristiwanya sudah 15 Agustus.
  // Empat artikel tercatat sehari lebih awal daripada tanggal yang tercetak
  // di halamannya sendiri gara-gara ini.
  if (/Z$/.test(s)) {
    const d = new Date(s);
    if (!isNaN(d)) return new Date(d.getTime() + 7 * 3600 * 1000).toISOString().slice(0, 19) + '+07:00';
  }
  if (/[+-][0-9]{2}:?[0-9]{2}$/.test(s)) return s;        // sudah berzona
  if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(s)) return s;  // tanggal saja, sah
  return s + '+07:00';
}

// "Selasa, 18 Agustus 2026". Dipakai halaman Agenda dan bagian "yang menanti
// pekan depan" di Signal Pekanan, jadi ditaruh di lingkup modul, bukan di
// dalam blok Agenda seperti semula.
//
// Tanggal yang tidak terbaca dikembalikan apa adanya. Tanpa penjaga ini
// new Date('pekan depan' + 'T00:00:00Z') menghasilkan Invalid Date dan
// pembaca disuguhi "undefined, NaN undefined NaN". Tanggal di bagian menanti
// datang dari model, jadi kemungkinan itu nyata, bukan teoretis.
function tglRingkas(isoTgl) {
  const d = new Date(isoTgl + 'T00:00:00Z');
  if (isNaN(d.getTime())) return String(isoTgl == null ? '' : isoTgl);
  return d.getUTCDate() + ' ' + BULAN[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}

// Catatan ralat, dipasang pada artikel atau edisi yang isinya pernah
// diperbaiki setelah tayang.
//
// BUKAN hiasan dan bukan pilihan. pedoman-media-siber.html yang sudah tayang
// berjanji: "Kekeliruan yang terkonfirmasi dikoreksi secepatnya di artikel
// yang sama, disertai catatan perbaikan. Kami tidak menghapus artikel
// diam-diam untuk menutupi kekeliruan." Mengoreksi angka tanpa memasang
// catatannya berarti mengubah isi diam-diam, persis yang dijanjikan tidak
// akan dilakukan, dan pembaca yang sudah mengutip angka lama tidak punya
// cara tahu bahwa kutipannya perlu diperbaiki.
//
// Ditaruh SEBELUM badan tulisan, bukan di kaki halaman, karena ralat di
// bagian ini menyangkut angka yang ada di judul. Pembaca harus tahu sebelum
// membaca, bukan sesudah.
function blokRalat(r) {
  if (!r || !r.teks) return '';
  return '<aside class="ralat"><b class="ralat-label">Ralat' +
    (r.label || r.tanggal ? ', ' + esc(r.label || tglRingkas(r.tanggal)) : '') + '</b>' +
    '<p>' + esc(r.teks) + '</p></aside>';
}

const NAMA_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
function labelHari(isoTgl) {
  const d = new Date(isoTgl + 'T00:00:00Z');
  if (isNaN(d.getTime())) return String(isoTgl == null ? '' : isoTgl);
  return NAMA_HARI[d.getUTCDay()] + ', ' + d.getUTCDate() + ' ' + BULAN[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}
function tanggalWIB() {
  const w = new Date(Date.now() + 7 * 3600 * 1000);
  return HARI[w.getUTCDay()] + ", " + w.getUTCDate() + " " + BULAN[w.getUTCMonth()] + " " + w.getUTCFullYear()
    + " &middot; " + String(w.getUTCHours()).padStart(2,"0") + "." + String(w.getUTCMinutes()).padStart(2,"0") + " WIB";
}
const TANGGAL = MARKET && MARKET.tanggalWIB ? MARKET.tanggalWIB : tanggalWIB();
function baris(label, d) {
  if (!d) return "";
  const cls = d.naik ? "up" : "down";
  return "<span>" + label + " <b>" + d.nilai + "</b> <span class=\"" + cls + "\">" + d.delta + "</span></span>";
}
const PASAR = MARKET
  ? [baris("IHSG", MARKET.ihsg), baris("USD/IDR", MARKET.usdidr), baris("Emas (spot)", MARKET.emas)]
      .filter(Boolean).join("\n        ")
  : "";


// Kartu pasar untuk sidebar halaman artikel dan tayangan.
function sparkMini(naik) {
  const pts = naik ? "1,15 8,12 15,13 22,8 29,10 36,4 43,6"
                   : "1,4 8,6 15,5 22,9 29,7 36,11 43,10";
  const warna = naik ? "var(--green)" : "var(--red)";
  return '<svg class="spark-mini" viewBox="0 0 44 18"><polyline points="' + pts +
    '" fill="none" stroke="' + warna + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}
function selPasar(d, nama) {
  if (!d) return "";
  return '<div class="ticker-cell"><div class="ticker-top">' + sparkMini(d.naik) +
    '<span class="pill ' + (d.naik ? "up" : "down") + '">' + d.delta + '</span></div>' +
    '<div class="ticker-value num">' + d.nilai + '</div>' +
    '<div class="ticker-name">' + nama + '</div></div>';
}
const KARTU_PASAR = MARKET
  ? '<h4>Pasar Hari Ini</h4><div class="ticker-grid sidebar-pasar">' +
    selPasar(MARKET.ihsg, "IHSG") + selPasar(MARKET.usdidr, "USD/IDR") +
    selPasar(MARKET.emas, "Emas (spot) / gr") + selPasar(MARKET.btc, "Bitcoin / IDR") +
    '</div>'
  : "";

// WhatsApp memotong og:description di sekitar 108 karakter, dan potongannya
// jatuh di tengah kata. Deck artikel median 122 karakter, jadi 61% preview
// terputus seperti "...kini jadi penentu ut". Karena tautan artikel yang paling
// sering dibagikan, itu terlihat sembrono.
//
// Dipotong sendiri di batas kata supaya berhenti rapi. Yang dipotong HANYA
// og:description dan twitter:description; meta description untuk Google tetap
// utuh karena batasnya jauh lebih longgar (~155) dan teks lebih panjang justru
// membantu di hasil pencarian.
// Kredit wajib ikut terbaca saat dibagikan. Halaman beranda, indeks berita,
// dan video sudah memuatnya sendiri; halaman artikel dan tayangan memakai deck
// yang tidak menyebut kredit sama sekali, padahal tautan artikel yang paling
// sering dibagikan. Jadi kredit ditempelkan di sini.
const KREDIT = ' · adsmediamix.id dan tvOne';

function ringkasBagikan(t, maks = 104) {
  const s = String(t || '').replace(/\s+/g, ' ').trim();
  if (s.length <= maks) return s;
  const potong = s.slice(0, maks);
  const spasi = potong.lastIndexOf(' ');
  // kalau spasi terakhir terlalu awal, potong keras daripada menyisakan sepatah kata
  const inti = spasi > maks * 0.6 ? potong.slice(0, spasi) : potong;
  return inti.replace(/[,;:.\s]+$/, '') + '…';
}

// Ringkasan + kredit, dijaga tetap di bawah batas potong WhatsApp (~108).
// Ringkasannya dijatah 76 karakter supaya kredit yang 26 karakter selalu utuh;
// konsekuensinya ringkasan artikel jadi lebih pendek, dan itu memang pilihan
// sadar: kredit yang hilang lebih merugikan daripada ringkasan yang terpangkas.
function bagikanDenganKredit(t) {
  return ringkasBagikan(t, 76) + KREDIT;
}

// Tiga jenis sumber, bukan dua. Sebelumnya hanya IDX lawan tvOne, sehingga
// siaran pers Bank Indonesia dan kementerian jatuh ke cabang "else" dan
// SALAH dikreditkan ke tvOneNews. Itu keliru secara faktual, bukan sekadar
// kosmetik, karena artikelnya sama sekali bukan liputan mereka.
function jenisSumber(a) {
  if (a.sourceLabel === 'IDX') return 'idx';
  if (a.sourceLabel) return 'gov';
  return 'tvone';
}

// Kartu ringkas di samping judul.
//
// Ruang di kanan judul selama ini kosong: judul dibatasi 30 karakter dan deck
// 62 karakter, sementara blok itu selebar rail penuh, jadi di layar 1280px ada
// sekitar 600px menganggur sebelum kisi dua kolom dimulai.
//
// Isinya sengaja HANYA fakta yang sudah tersimpan di artikel, tidak ada yang
// dikarang dan tidak ada panggilan model tambahan. Isi kartunya menyesuaikan
// jenis sumber, karena yang menarik dari laporan bursa berbeda dari yang
// menarik pada siaran pers kementerian.
function kartuFakta(a) {
  const baris = [];
  const t = jenisSumber(a);

  if (t === 'idx') {
    // Kode emitennya jadi pintu ke arsip sinyal per saham, tapi hanya kalau
    // halamannya memang dibangun; kode yang tersaring dari EMITEN (bukan
    // empat huruf kapital) tetap tampil sebagai teks biasa.
    if (a.emiten) {
      const kode = String(a.emiten).toUpperCase().trim();
      baris.push(['Emiten', EMITEN.has(kode)
        ? '<a class="fakta-emiten" href="/emiten/' + kode + '.html" title="Semua sinyal ' + kode + '">' + esc(kode) + '</a>'
        : '<strong class="fakta-emiten">' + esc(a.emiten) + '</strong>']);
    }
    baris.push(['Jenis', 'Keterbukaan informasi']);
  } else if (t === 'gov') {
    baris.push(['Lembaga', esc(a.sourceLabel)]);
    baris.push(['Jenis', 'Siaran pers resmi']);
  } else {
    baris.push(['Sumber', 'tvOneNews']);
    baris.push(['Jenis', 'Rangkuman redaksi']);
  }

  baris.push(['Rubrik', '<a href="/rubrik/' + catSlug(a.category) + '.html">' + esc(a.category) + '</a>']);
  baris.push(['Tanggal', esc(a.date)]);

  // Sentimen hanya ada pada aksi korporasi, dan penyebutannya harus tetap
  // ditemani pengingat bahwa ini bukan anjuran transaksi.
  if (a.sentimen) {
    const label = { positif: 'Cenderung positif', negatif: 'Cenderung negatif', netral: 'Netral' }[a.sentimen];
    baris.push(['Penilaian', '<span class="sentimen sentimen-' + esc(a.sentimen) + '">' + esc(label) + '</span>']);
  }

  const tautan = t === 'idx' ? 'Dokumen resmi di IDX'
    : t === 'gov' ? 'Siaran pers asli'
    : 'Artikel asli di tvOneNews';

  return '<aside class="hero-fakta">' +
    '<h4>Fakta Cepat</h4>' +
    '<dl>' + baris.map(([k, v]) => '<dt>' + k + '</dt><dd>' + v + '</dd>').join('') + '</dl>' +
    '<a class="fakta-tautan" href="' + esc(a.sourceUrl) + '" target="_blank" rel="noopener">' +
    tautan + ' &rarr;</a>' +
    (a.sentimen ? '<p class="fakta-catatan">Penilaian menyangkut fundamental emiten, bukan anjuran membeli atau menjual saham.</p>' : '') +
    '</aside>';
}

// Versi untuk halaman tayangan. Bentuknya sama supaya kedua jenis halaman
// terasa satu keluarga, isinya menyesuaikan karena video tidak punya emiten,
// sentimen, atau tanggal terbit yang tersimpan.
function kartuFaktaVideo(v) {
  const baris = [
    ['Kanal', 'tvOneNews'],
    ['Jenis', 'Tayangan video'],
    ['Program', esc(v.program)],
    ['Rubrik', '<a href="/rubrik/' + catSlug(v.category) + '.html">' + esc(v.category) + '</a>'],
  ];
  return '<aside class="hero-fakta">' +
    '<h4>Fakta Cepat</h4>' +
    '<dl>' + baris.map(([k, x]) => '<dt>' + k + '</dt><dd>' + x + '</dd>').join('') + '</dl>' +
    '<a class="fakta-tautan" href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">' +
    'Tonton di YouTube tvOneNews &rarr;</a>' +
    '</aside>';
}

function head(o) {
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)} · The Signal</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${BASE}${o.url}">
${o.noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<link rel="alternate" type="application/rss+xml" title="Signal Harian - The Signal" href="${BASE}/feed.xml">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
${kepalaAnalitik()}
<meta property="og:type" content="${o.ogType || 'website'}">
<meta property="og:site_name" content="The Signal">
<meta property="og:locale" content="id_ID">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(bagikanDenganKredit(o.desc))}">
<meta property="og:image" content="${o.image}">
<meta property="og:image:secure_url" content="${o.image}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="${o.imgW}">
<meta property="og:image:height" content="${o.imgH}">
<meta property="og:image:alt" content="${esc(o.title)}">
<meta property="og:url" content="${BASE}${o.url}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(o.title)}">
<meta name="twitter:description" content="${esc(bagikanDenganKredit(o.desc))}">
<meta name="twitter:image" content="${o.image}">
<link rel="stylesheet" href="/assets/css/style.css?v=${VER}">
${[].concat(NODE_IDENTITAS, o.jsonld || [], o.jsonldTambahan || []).map(j => '<script type="application/ld+json">' + JSON.stringify(j) + '</script>').join('')}
</head>
<body>
<div class="page">


  <div class="util-bar">
    <div class="rail">
      <div class="util-date">${TANGGAL}</div>
      <div class="util-index num">${PASAR}</div>
    </div>
  </div>

  <header class="masthead">
    <div class="rail">
      <nav class="masthead-nav">
        <a class="nav-link" href="/signal-harian.html">Signal Harian</a>
        <a class="nav-link" href="/signal-pekanan.html">Pekanan</a>
        <a class="nav-link" href="/berita.html">Semua Berita</a>
        <a class="nav-link" href="/rubrik/makroekonomi.html">Makro</a>
        <a class="nav-link" href="/rubrik/pasar-modal.html">Pasar Modal</a>
        <a class="nav-link" href="/rubrik/perbankan.html">Perbankan</a>
        <a class="nav-link" href="/rubrik/energi.html">Energi</a>
        <a class="nav-link" href="/data-ekonomi.html">Angka Ekonomi</a>
        <a class="nav-link" href="/agenda.html">Agenda</a>
        <a class="nav-link${o.navVideo ? ' active' : ''}" href="/video.html">Video</a>
      </nav>
      <div class="brand">
        <a class="logo" href="/">The Signal</a>
        <span class="logo-tag">Berita &amp; Analisis Ekonomi</span>
      </div>
      <div class="masthead-actions">
        <button class="btn-subscribe" type="button" data-open-subscribe>Signal+
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M3 9 9 3M4 3h5v5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
  </header>
`;
}

const FOOT = `
  <footer class="footer">
    <div class="rail footer-collab">
      <img src="/assets/img/tvone-logo.svg" alt="tvOne">
      <span class="divider"></span>
      <span>Kolaborasi editorial <strong>The Signal &times; tvOne</strong>, didukung oleh <strong>adsmediamix.id</strong></span>
    </div>
    <div class="rail footer-grid">
      <div class="footer-brand">
        <div class="logo">The Signal</div>
        <p>Liputan dan analisis ekonomi Indonesia, dari kebijakan moneter sampai dompet rumah tangga. Dirangkum dari tvOneNews, keterbukaan informasi IDX, dan siaran pers lembaga resmi.</p>
        <div class="footer-aksi">
          <a class="btn-telegram" href="https://t.me/thesignalid" target="_blank" rel="noopener">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.3 18.7 19.4c-.24 1.08-.88 1.35-1.79.84l-4.93-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.35-5.02 9.13-8.25c.4-.35-.09-.55-.62-.2L6.19 12.6 1.32 11.08c-1.06-.33-1.08-1.06.22-1.57l19.05-7.34c.88-.32 1.65.2 1.35 2.13z"/></svg>
            Ikuti di Telegram
          </a>
          <a class="btn-bot" href="https://t.me/thesignal_id_bot" target="_blank" rel="noopener">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.8L3 20.5l1.4-4.1A8.3 8.3 0 0 1 3.6 12a8.4 8.4 0 0 1 8.4-8.4 8.4 8.4 0 0 1 9 7.9z"/><path d="M9.6 9.4a2.4 2.4 0 0 1 4.7.7c0 1.6-2.4 2.4-2.4 2.4"/><path d="M12 16.2h.01"/></svg>
            Tanya ke The Signal
</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Rubrik</h4>
        <ul>
          <li><a href="/rubrik/makroekonomi.html">Makroekonomi</a></li>
          <li><a href="/rubrik/pasar-modal.html">Pasar Modal</a></li>
          <li><a href="/rubrik/perbankan.html">Perbankan</a></li>
          <li><a href="/rubrik/energi.html">Energi</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>The Signal</h4>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/berita.html">Semua Berita</a></li>
          <li><a href="/signal-pekanan.html">Signal Pekanan</a></li>
          <li><a href="/agenda.html">Agenda Sinyal</a></li>
          <li><a href="/rapor.html">Rapor Sinyal</a></li>
          <li><a href="/tema.html">Tema Berjalan</a></li>
          <li><a href="/emiten.html">Sinyal per Emiten</a></li>
          <li><a href="/video.html">Video</a></li>
          <li><a href="/tentang.html">Tentang The Signal</a></li>
          <li><a href="/kontak.html">Kontak &amp; Koreksi</a></li>
          <li><a href="https://adsmediamix.id" target="_blank" rel="noopener">adsmediamix.id</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Ikuti tvOneNews</h4>
        <ul>
          <li><a href="https://www.instagram.com/tvonenews" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://x.com/tvOneNews" target="_blank" rel="noopener">X</a></li>
          <li><a href="https://www.youtube.com/@tvOneNews" target="_blank" rel="noopener">YouTube</a></li>
        </ul>
      </div>
    </div>
    <div class="rail footer-bottom">
      <span>&copy; 2026 The Signal. Dirangkum dari tvOneNews, IDX, dan lembaga resmi, dengan tautan sumber di tiap artikel.</span>
      <span>Data pasar dari sumber publik, bukan feed resmi bursa</span>
      <span><a href="/privasi.html">Kebijakan Privasi</a> &middot; <a href="/pedoman-media-siber.html">Pedoman Media Siber</a></span>
    </div>
  </footer>

</div>

<div class="modal-backdrop" id="modal-backdrop">
  <div class="modal" id="modal">
    <button class="modal-close" type="button" id="modal-close" aria-label="Tutup">
      <svg width="13" height="13" viewBox="0 0 16 16"><path d="M2 2l12 12M14 2 2 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
    <div id="modal-isi">
      <h3>Signal+</h3>
      <p>Ke mana ekonomi bergerak hari ini, dan apa artinya buat keputusanmu besok.
        Dikirim tiap malam hari kerja setelah seluruh berita hari itu dibaca.
        Formulir pendaftarannya membutuhkan
        JavaScript; kalau tidak muncul, daftar langsung lewat halaman Buttondown
        kami.</p>
      <a class="btn-modal-submit" href="https://buttondown.com/the-signal" target="_blank" rel="noopener">Daftar lewat Buttondown</a>
    </div>
  </div>
</div>

<script src="/assets/js/shared.js?v=${VER}"></script>
<script>TS.initModal();</script>
</body>
</html>
`;

fs.mkdirSync(ROOT + '/berita', { recursive: true });
fs.mkdirSync(ROOT + '/tayangan', { recursive: true });

// ---------- article pages ----------
ARTICLES.forEach(function (a) {
  // Laporan emiten yang sama didahulukan: pembaca laporan SUPA hari ini paling
  // terbantu oleh laporan SUPA kemarin, bukan artikel pasar modal acak.
  const sameEmiten = a.emiten
    ? ARTICLES.filter(x => x.slug !== a.slug && x.emiten === a.emiten) : [];
  const sameCat = ARTICLES.filter(x => x.slug !== a.slug && x.category === a.category
    && !sameEmiten.includes(x));
  const others = ARTICLES.filter(x => x.slug !== a.slug && x.category !== a.category);
  const related = sameEmiten.concat(sameCat, others).slice(0, 4);

  const relatedHtml = related.map(x =>
    `<a class="related-card" href="${articleUrl(x)}">` +
    // Penanda AI HANYA untuk gambar yang memang buatan. Dulu dipasang tanpa
    // syarat, sehingga foto asli dari tvOneNews dan Kemendag ikut dilabeli AI.
    // Itu keliru dua arah: merendahkan foto dokumentasi yang sungguhan, dan
    // membuat labelnya kehilangan arti karena semua gambar dilabeli sama.
    `<div class="related-thumb ai-wrap"><img src="${imgUrl(x)}" alt="" loading="lazy">${
      x.kreditFoto ? '' : '<span class="ai-tag" style="right:3px;bottom:3px;font-size:7.5px;padding:1px 4px;">AI</span>'
    }</div>` +
    `<div><div class="related-title">${hl(x.title)}</div>` +
    `<div class="related-meta">${esc(x.category)}</div></div></a>`).join('');

  const videoHtml = a.video ?
    `<div class="article-video"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${a.video}" title="Video terkait dari tvOneNews" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` +
    `<div class="article-video-caption">${esc(a.videoCaption || '')}</div></div>` : '';

  const html = head({
    title: plain(a.title),
    desc: a.deck,
    url: articleUrl(a),
    image: BASE + '/' + a.image,
    // Dimensi nyata, bukan angka tetap. Kalau berkasnya tak terbaca, medannya
    // dibiarkan kosong; menyebut ukuran yang salah lebih buruk daripada tidak
    // menyebut ukuran sama sekali.
    ...(function () {
      const u = ukuranGambar(a.image);
      return u ? { imgW: u.w, imgH: u.h } : {};
    })(),
    ogType: 'article',
    jsonld: {
      '@context': 'https://schema.org', '@type': 'NewsArticle',
      headline: plain(a.title), description: a.deck,
      image: [BASE + '/' + a.image],
      // Tanggal WAJIB ada. Audit 13 Agustus 2026: tiga pemeriksa terpisah
      // (SEO, kepercayaan, konten) menemukan hal yang sama, 192 halaman berita
      // tanpa satu pun tanggal terbaca mesin, padahal datanya sudah tersimpan
      // di articles.js. Situs berita yang tidak memberi tahu Google kapan
      // artikelnya terbit membuang sinyal kebaruannya sendiri.
      // dateModified disamakan dengan datePublished karena artikel di sini
      // tidak pernah disunting setelah terbit; kalau kelak ada alur revisi,
      // baru dipisah.
      datePublished: waktuISO(a.isoDate),
      // dateModified mengikuti tanggal RALAT kalau artikel ini pernah
      // diperbaiki setelah tayang. Menyamakannya dengan datePublished, seperti
      // sebelumnya, berarti memberi tahu mesin pencari bahwa isi yang sudah
      // berubah tidak pernah berubah, dan itu justru pada artikel yang paling
      // perlu dibaca ulang.
      dateModified: waktuISO((a.ralat && (a.ralat.waktu || a.ralat.tanggal)) || a.isoDate),
      author: [{ '@type': 'Organization', name: 'The Signal', url: BASE }],
      mainEntityOfPage: { '@type': 'WebPage', '@id': BASE + articleUrl(a) },
      articleSection: a.category, inLanguage: 'id-ID',
      // Rujukan, bukan salinan. Node NewsMediaOrganization lengkapnya kini
      // ikut tercetak di tiap halaman lewat head(), berikut logo 512 piksel
      // dan keempat kebijakan redaksi, jadi menyalinnya lagi di sini cuma
      // membuat dua sumber kebenaran yang bisa berselisih.
      publisher: RUJUK_ORGANISASI,
      isBasedOn: a.sourceUrl,
    },
    // Remah roti versi terbaca mesin. Markup teksnya sudah lama ada di bawah,
    // tapi tanpa pasangan JSON-LD ini mesin pencari cuma melihat tiga tautan
    // biasa, bukan posisi artikel di dalam struktur situs. Hasil pencarian
    // menampilkannya sebagai jalur kategori alih-alih URL mentah, dan mesin
    // jawab memakainya untuk tahu artikel ini bagian dari rubrik apa.
    jsonldTambahan: {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: plain(a.category), item: BASE + '/rubrik/' + catSlug(a.category) + '.html' },
        { '@type': 'ListItem', position: 3, name: plain(a.title) },
      ],
    },
  }) +
    `<div class="rail breadcrumb"><a href="/">Beranda</a> &rsaquo; <a href="/rubrik/${catSlug(a.category)}.html">${esc(a.category)}</a> &rsaquo; Artikel</div>` +
    `<section class="rail article-hero">` +
    `<div class="hero-teks">` +
    `<span class="eyebrow"><a href="/rubrik/${catSlug(a.category)}.html">${esc(a.category)}</a></span>` +
    `<h1 class="article-title">${hl(a.title)}</h1>` +
    `<p class="article-deck">${esc(a.deck)}</p>` +
    `<div class="hero-meta" style="border-top:none;padding-top:0;margin-top:1rem;">` +
    `<span class="num">${esc(a.date)}</span><span>${
      jenisSumber(a) === 'idx' ? 'Sumber: <strong>Keterbukaan Informasi IDX</strong>'
      : jenisSumber(a) === 'gov' ? 'Sumber: <strong>Siaran pers ' + esc(a.sourceLabel) + '</strong>'
      : 'Dirangkum dari <strong>tvOneNews</strong>'}</span></div>` +
    `</div>` +
    kartuFakta(a) +
    `</section>` +
    `<div class="rail article-layout"><div class="article-main">` +
    `<div class="article-cover ai-wrap"><img src="${imgUrl(a)}" alt="${esc((a.kreditFoto ? 'Foto: ' : 'Ilustrasi: ') + plain(a.title))}" fetchpriority="high">${
      a.kreditFoto ? '<span class="foto-tag">Foto: ' + esc(a.kreditFoto) + '</span>'
      : '<span class="ai-tag">Ilustrasi AI</span>'}</div>` +
    // ARAHNYA DI ATAS, duduk perkaranya di bawah.
    //
    // Catatan redaksi dulu diletakkan paling akhir, setelah seluruh badan
    // berita dan bahkan setelah kalimat penafian. Audit 14 Agustus 2026
    // mengukurnya: label "Catatan redaksi" berada di blok ke-48 dari 125 blok
    // teks halaman. Padahal justru itu bagian yang dijual, contohnya pada
    // artikel MSCI: "Pola tidak ada saham baru yang masuk ke indeks utama
    // sementara yang keluar cukup banyak ini mengarah ke penyusutan sementara
    // bobot Indonesia di radar investor pasif global."
    //
    // Menaruhnya di bawah berarti pembaca harus melewati seluruh rangkuman
    // untuk sampai ke satu-satunya bagian yang tidak bisa didapat gratis di
    // tempat lain. Sekarang dibalik: arahnya lebih dulu, uraiannya menyusul.
    // Labelnya pun diganti dari "Catatan redaksi" yang terdengar seperti
    // tambahan, jadi "Arahnya ke mana" yang menyebut isinya.
    (a.takeaway ? `<div class="arah-blok">` +
      `<b class="arah-label">Arahnya ke mana${a.sentimen ? ` <span class="sentimen sentimen-${a.sentimen}">${
        { positif: 'Cenderung positif', negatif: 'Cenderung negatif', netral: 'Netral' }[a.sentimen]
      }</span>` : ''}</b>` +
      `<p class="arah-isi">${esc(a.takeaway)}</p>` +
      `</div>` : '') +
    blokRalat(a.ralat) +
    `<div class="article-body">${badanDenganBps(a)}</div>` +
    (a.category === 'Pasar Modal' || a.category === 'Moneter'
      ? `<p class="disclaimer-investasi">Artikel ini informasi, bukan ajakan atau rekomendasi membeli maupun menjual instrumen investasi apa pun. Keputusan investasi beserta risikonya sepenuhnya tanggung jawab pembaca.</p>`
      : '') +
    (a.takeaway && a.sentimen
      ? `<p class="catatan-disclaimer">Penilaian arah di atas menyangkut fundamental emiten, bukan anjuran membeli atau menjual saham.</p>`
      : '') +
    videoHtml +
    // Chip tema sebelum tag biasa: tag itu label mati, tema itu pintu ke
    // garis waktu isunya. Hanya tema yang halamannya tayang yang ditautkan.
    `<div class="article-tags">${
      temaDariArtikel(a).filter(s => TEMA_TAYANG.has(s))
        .map(s => {
          const t = KELOMPOK_TEMA.find(k => k.slug === s);
          return '<a class="article-tag article-tag-tema" href="/tema/' + s + '.html">Tema: ' + esc(t.nama) + '</a>';
        }).join('')
    }${a.tags.map(t => '<span class="article-tag">' + esc(t) + '</span>').join('')}</div>` +
    `<p class="foto-kredit">${a.kreditFoto
      ? 'Foto dari ' + esc(a.kreditFoto) + ', dipakai sebagai dokumentasi peristiwa yang diberitakan.'
      : 'Foto ilustrasi dibuat dengan AI. Bukan dokumentasi peristiwa yang diberitakan.'}</p>` +
    `<div class="article-source-box"><p>${
      jenisSumber(a) === 'idx' ? 'Berita ini disusun redaksi The Signal dari keterbukaan informasi resmi yang disampaikan emiten ke Bursa Efek Indonesia. Catatan redaksi bersifat penjelasan, bukan rekomendasi investasi.'
      : jenisSumber(a) === 'gov' ? 'Berita ini disusun redaksi The Signal dari siaran pers resmi ' + esc(a.sourceLabel) + '. Angka dan ketentuan mengikuti dokumen aslinya; klaim yang belum terverifikasi ditulis sebagai pernyataan lembaga, bukan fakta.'
      : 'Artikel ini rangkuman editorial The Signal dari liputan tvOneNews, bukan salinan langsung. Untuk versi lengkap dan mutakhir, baca artikel aslinya.'}</p>` +
    `<a href="${esc(a.sourceUrl)}" target="_blank" rel="noopener">${
      jenisSumber(a) === 'idx' ? 'Lihat dokumen resmi di IDX &rarr;'
      : jenisSumber(a) === 'gov' ? 'Baca siaran pers asli di ' + esc(a.sourceLabel) + ' &rarr;'
      : 'Baca artikel asli di tvOneNews &rarr;'}</a>` +
    `<a class="koreksi-link" href="/kontak.html#koreksi">Menemukan kekeliruan? Beri tahu redaksi &rarr;</a></div>` +
    `<div class="artikel-cta"><div class="artikel-cta-copy"><b>Mau tahu arahnya, bukan cuma beritanya?</b>` +
    `<span>Tiap malam hari kerja, satu tulisan yang menjawab ke mana ekonomi bergerak hari itu dan apa yang akan menentukan arahnya. Plus angka pembanding yang tidak ada di situs. Gratis.</span></div>` +
    `<button class="btn-modal-submit" type="button" data-open-subscribe>Daftar Signal Harian</button></div>` +
    `</div><aside class="article-side">${KARTU_PASAR}<h4>Berita Terkait</h4>${relatedHtml}` +
    `<h4 style="margin-top:2rem;">Jelajahi</h4><div class="compact-list">` +
    `<a class="compact-row" href="/berita.html"><span class="compact-body"><span class="compact-title">Semua Berita</span><span class="compact-meta">${ARTICLES.length} artikel</span></span></a>` +
    `<a class="compact-row" href="/video.html"><span class="compact-body"><span class="compact-title">Video Ekonomi</span><span class="compact-meta">Kanal tvOneNews</span></span></a>` +
    `</div></aside></div>` + FOOT;

  fs.writeFileSync(ROOT + '/berita/' + a.slug + '.html', html, 'utf8');
});

// ---------- video pages ----------
VIDEOS.forEach(function (v) {
  const others = VIDEOS.filter(x => x.id !== v.id);
  const related = others.filter(x => x.category === v.category)
    .concat(others.filter(x => x.category !== v.category)).slice(0, 4);

  const relatedHtml = related.map(x =>
    `<a class="related-card" href="${videoUrl(x)}">` +
    `<div class="related-thumb" style="background-image:url('https://i.ytimg.com/vi/${x.id}/hqdefault.jpg')"></div>` +
    `<div><div class="related-title">${esc(x.title)}</div>` +
    `<div class="related-meta">${esc(x.category)}</div></div></a>`).join('');

  const relArticles = ARTICLES.filter(a => a.category === v.category).slice(0, 3);
  const relArticlesHtml = relArticles.length ?
    `<h4 style="margin-top:2rem;">Berita Terkait</h4><div class="compact-list">` +
    relArticles.map(a => `<a class="compact-row" href="${articleUrl(a)}">` +
      `<span class="compact-body"><span class="compact-title">${hl(a.title)}</span>` +
      `<span class="compact-meta">${esc(a.category)} &middot; ${esc(a.date)}</span></span></a>`).join('') +
    `</div>` : '';

  const html = head({
    title: v.title,
    desc: v.summary,
    url: videoUrl(v),
    image: 'https://i.ytimg.com/vi/' + v.id + '/maxresdefault.jpg',
    imgW: 1280, imgH: 720,
    ogType: 'video.other',
    navVideo: true,
    // uploadDate wajib bagi Google untuk data terstruktur video. Nilainya
    // tanggal unggah ASLI di YouTube, bukan tanggal kurasi kami, dan hanya
    // dicetak kalau memang diketahui: VideoObject tanpa uploadDate cuma
    // kehilangan hasil kaya, sedangkan uploadDate karangan adalah kebohongan
    // yang bisa membuat video lama tampil sebagai baru.
    jsonld: {
      '@context': 'https://schema.org', '@type': 'VideoObject',
      name: v.title, description: v.summary,
      thumbnailUrl: ['https://i.ytimg.com/vi/' + v.id + '/maxresdefault.jpg'],
      embedUrl: 'https://www.youtube.com/embed/' + v.id, inLanguage: 'id-ID',
      ...(v.terbit ? { uploadDate: v.terbit } : {}),
      publisher: RUJUK_ORGANISASI,
    },
  }) +
    `<div class="rail breadcrumb"><a href="/">Beranda</a> &rsaquo; <a href="/video.html">Video</a> &rsaquo; Tayangan</div>` +
    `<section class="rail article-hero">` +
    `<div class="hero-teks">` +
    `<span class="eyebrow">${videoMeta(v)}</span>` +
    `<h1 class="article-title">${esc(v.title)}</h1>` +
    `<p class="article-deck">${esc(v.summary)}</p></div>` +
    kartuFaktaVideo(v) +
    `</section>` +
    `<div class="rail article-layout"><div class="article-main">` +
    `<div class="article-video" style="margin-top:0;"><div class="video-frame">` +
    `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}" title="${esc(v.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` +
    `<div class="article-video-caption">Sumber tayangan: kanal YouTube resmi tvOneNews</div></div>` +
    `<div class="article-body" style="margin-top:1.8rem;"><p>${esc(v.summary)}</p></div>` +
    `<div class="video-takeaway catatan-video"><b>Catatan redaksi</b>${esc(v.takeaway)}</div>` +
    `<div class="article-tags"><span class="article-tag">${esc(v.category)}</span>` +
    `<span class="article-tag">${esc(v.program)}</span><span class="article-tag">Video</span></div>` +
    `<div class="article-source-box"><p>Tayangan ini di-embed langsung dari kanal YouTube resmi tvOneNews. Ringkasan dan catatan redaksi ditulis tim The Signal, bukan transkrip resmi.</p>` +
    `<a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Tonton di YouTube tvOneNews &rarr;</a></div>` +
    `</div><aside class="article-side">${KARTU_PASAR}<h4>Tayangan Lain</h4>${relatedHtml}${relArticlesHtml}</aside></div>` + FOOT;

  fs.writeFileSync(ROOT + '/tayangan/' + v.id + '.html', html, 'utf8');
});

// ---------- Angka Ekonomi: rubrik berkala dari data BPS ----------
//
// Kenapa perlu halaman sendiri, padahal grafiknya sudah menempel di artikel:
// penempelan itu bergantung pada ADA BERITANYA. Inflasi dan pertumbuhan
// ekonomi adalah dua deret terpenting di sini, tapi keduanya nol kali muncul
// di 192 artikel arsip, karena berita yang menyebutnya kebetulan soal Amerika
// dan tersaring keluar. Jadi tanpa halaman ini, data yang sudah ditarik itu
// praktis tidak terpakai.
//
// Berkala mengikuti sumbernya, bukan jadwal kita. BPS merilis inflasi dan
// perdagangan bulanan, PDB triwulanan, pengangguran dan gini semesteran.
// Halaman ini ditarik ulang tiap putaran harian, jadi angkanya berganti
// sendiri begitu BPS memperbaruinya.
if (BPS && BPS.indikator && Object.keys(BPS.indikator).length) {
  const urutTampil = ['inflasi', 'pdb', 'neraca', 'ekspor', 'impor',
    'pengangguran', 'gini', 'wisman'];
  const kode = urutTampil.filter(k => BPS.indikator[k])
    .concat(Object.keys(BPS.indikator).filter(k => !urutTampil.includes(k)));

  const ditarik = BPS.diperbarui
    ? new Date(BPS.diperbarui).toLocaleDateString('id-ID',
        { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' })
    : '';

  const isi =
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Angka Ekonomi</span>` +
    `<h1 class="harian-judul">Indikator ekonomi Indonesia terbaru</h1>` +
    `<p class="harian-tanggal num">${kode.length} indikator resmi` +
      (ditarik ? ` &middot; ditarik ${esc(ditarik)}` : '') + `</p>` +
    `<p class="harian-ringkas">Angka resmi Badan Pusat Statistik beserta pola yang ` +
    `terbaca dari deretnya sendiri: berapa periode beruntun searah, posisi terhadap ` +
    `seluruh catatan, dan letaknya dibanding rata-rata setahun. Semua kalimat di ` +
    `halaman ini dihitung dari angkanya, bukan pendapat. Bukan rekomendasi investasi.</p>` +
    `</div>` +
    `<div class="bps-daftar">` +
    kode.map(k => blokBps(k, BPS)).filter(Boolean).join('') +
    `</div>` +
    `<div class="article-source-box" style="max-width:var(--kolom-baca);">` +
    `<p>Seluruh angka di halaman ini berasal dari WebAPI resmi Badan Pusat Statistik. ` +
    `The Signal hanya menyusun ulang dan menerjemahkan istilahnya, tidak mengubah nilainya. ` +
    `Periode terbaru mengikuti jadwal rilis BPS, jadi indikator bulanan dan semesteran ` +
    `tidak selalu sama mutakhirnya.</p>` +
    `<a href="https://webapi.bps.go.id" target="_blank" rel="noopener">Lihat sumber di BPS &rarr;</a></div>` +
    `</section>`;

  fs.writeFileSync(path.join(ROOT, 'data-ekonomi.html'),
    head({
      title: 'Angka Ekonomi Indonesia',
      desc: 'Inflasi, pertumbuhan ekonomi, neraca perdagangan, dan pengangguran ' +
        'terbaru dari Badan Pusat Statistik, lengkap dengan grafik pergerakannya.',
      url: '/data-ekonomi.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      // Dataset, bukan CollectionPage, karena isinya memang deret angka resmi
      // dan bukan daftar tautan. creator diisi BPS, bukan The Signal: kami
      // menyajikannya, bukan mengukurnya.
      jsonld: {
        '@context': 'https://schema.org', '@type': 'Dataset',
        name: 'Angka Ekonomi Indonesia', url: BASE + '/data-ekonomi.html',
        description: 'Indikator ekonomi Indonesia terbaru dari Badan Pusat Statistik, ' +
          'disajikan dengan grafik pergerakannya.',
        inLanguage: 'id-ID', isAccessibleForFree: true,
        creator: { '@type': 'GovernmentOrganization', name: 'Badan Pusat Statistik', url: 'https://www.bps.go.id' },
        publisher: RUJUK_ORGANISASI,
        variableMeasured: kode.map(k => (BPS.indikator[k] || {}).nama).filter(Boolean),
      },
    }) + isi + FOOT, 'utf8');
  console.log('angka ekonomi:', kode.length, 'indikator');
}

// ---------- Halaman 404 ----------
//
// Vercel menyajikan 404.html di root secara otomatis untuk alamat yang tidak
// ada. Tanpa berkas ini pengunjung mendapat teks polos berbahasa Inggris tanpa
// satu pun jalan kembali, padahal salah ketik dan tautan terpangkas itu lumrah,
// apalagi tautan artikel di sini masih berakhiran .html yang gampang hilang
// saat disalin. Digenerate tiap build supaya daftar berita terbarunya ikut
// segar, bukan beku di hari halaman ini pertama dibuat.
{
  const terbaru = ARTICLES.slice(0, 5).map(a =>
    `<a class="compact-row" href="${articleUrl(a)}"><span class="compact-body">` +
    `<span class="compact-title">${esc(plain(a.title))}</span>` +
    `<span class="compact-meta">${esc(a.category)} &middot; ${esc(a.date)}</span></span></a>`).join('');

  fs.writeFileSync(path.join(ROOT, '404.html'),
    head({
      title: 'Halaman tidak ditemukan',
      desc: 'Alamat yang kamu tuju tidak ada di The Signal. Coba mulai dari berita terbaru.',
      url: '/404.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      // Vercel menyajikan berkas ini untuk alamat yang tidak ada, TAPI dengan
      // status 200 karena ia halaman statis biasa, bukan respons 404 sungguhan.
      // Tanpa noindex, "halaman ini tidak ada" bisa masuk indeks sebagai
      // halaman biasa dan muncul di hasil pencarian, persis pola soft-404 yang
      // dihukum Google. follow tetap dipertahankan supaya lima tautan berita
      // terbaru di dalamnya tetap dirayapi.
      noindex: true,
    }) +
    `<section class="rail" style="padding-block:3rem;max-width:44rem;">` +
    `<span class="eyebrow">Kesalahan 404</span>` +
    `<h1 style="margin:.4rem 0 .8rem;">Halaman ini tidak ada</h1>` +
    `<p style="color:var(--ink-soft);line-height:1.6;">Alamatnya mungkin salah ketik, atau tautannya ` +
    `terpotong saat disalin. Yang jelas tidak ada halaman di alamat ini.</p>` +
    `<p style="margin:1rem 0 2rem;"><a class="btn-modal-submit" href="/">Ke halaman depan</a></p>` +
    `<h4>Atau baca yang terbaru</h4>` +
    `<div class="compact-list">${terbaru}</div>` +
    `</section>` + FOOT, 'utf8');
  console.log('halaman 404: ok');
}

// ---------- halaman identitas media ----------
// Empat halaman wajib dari halaman-statis.mjs. Dirender lewat head() dan FOOT
// yang sama dengan halaman lain supaya navigasi dan footer tidak pernah
// selisih, dan ikut terbangun ulang tiap build.
for (const hs of HALAMAN_STATIS) {
  fs.writeFileSync(path.join(ROOT, hs.slug + '.html'),
    head({
      title: hs.judul,
      desc: hs.desc,
      url: '/' + hs.slug + '.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
    }) +
    `<section class="rail halaman-statis" style="padding-block:2.6rem;">` +
    `<span class="eyebrow">The Signal</span>` +
    `<h1>${esc(hs.judul)}</h1>` +
    `<div class="article-body">${hs.isi}</div>` +
    `</section>` + FOOT, 'utf8');
}
console.log('halaman identitas:', HALAMAN_STATIS.length);

// ---------- Sinyal per Emiten ----------
//
// Arsip menyimpan 60-an laporan bursa dari 50 emiten, tapi satu-satunya jalan
// menemukannya adalah menggulung daftar kronologis. Halaman per emiten
// menyusun semua laporan satu saham jadi satu garis waktu beserta riwayat
// penilaiannya, karena orang yang memantau satu saham mau melihat rangkaian,
// bukan potongan. Sekaligus pintu masuk pencarian: orang mencari kode emiten,
// bukan judul artikel kita.
fs.mkdirSync(ROOT + '/emiten', { recursive: true });
const LABEL_SENTIMEN = { positif: 'Cenderung positif', negatif: 'Cenderung negatif', netral: 'Netral' };
function chipSentimen(s) {
  return s ? '<span class="sentimen sentimen-' + esc(s) + '">' + esc(LABEL_SENTIMEN[s] || s) + '</span>' : '';
}
function itemLinimasa(a, opsi = {}) {
  return `<article class="linimasa-item">` +
    `<div class="linimasa-meta"><span class="num">${esc(a.date)}</span>` +
    (opsi.kategori ? `<span>${esc(a.category)}</span>` : '') +
    chipSentimen(a.sentimen) + `</div>` +
    `<h2 class="linimasa-judul"><a href="${articleUrl(a)}">${hl(a.title)}</a></h2>` +
    (a.takeaway ? `<p class="linimasa-arah">${esc(String(a.takeaway).length > 260
      ? String(a.takeaway).slice(0, 260).replace(/\s+\S*$/, '') + '…' : a.takeaway)}</p>` : '') +
    `</article>`;
}
const DISCLAIMER_SINYAL =
  `<div class="article-source-box" style="max-width:var(--kolom-baca);margin-top:2rem;">` +
  `<p>Penilaian arah di halaman ini menyangkut fundamental dan isi dokumen resminya, ` +
  `bukan anjuran membeli atau menjual saham. Tiap artikel menautkan dokumen aslinya.</p>` +
  `<a href="/tentang.html">Cara kerja redaksi The Signal &rarr;</a></div>`;

// Urutan kedua membandingkan WAKTU, bukan untaian teks.
//
// articles.js menyimpan stempel waktu dalam tiga bentuk sekaligus: berakhiran
// Z untuk UTC, tanpa zona untuk WIB, dan tanggal saja. Perbandingan teks
// menempatkan "2026-08-18T20:00:00" di atas "2026-08-18T13:00:00Z" padahal
// keduanya SAAT YANG SAMA. Pengurutan artikel di tempat lain memakai keWaktu()
// dan aman; hanya baris ini yang tertinggal memakai localeCompare.
const waktuArtikel = (a) => new Date(waktuISO(a && a.isoDate)).getTime() || 0;
const DAFTAR_EMITEN = [...EMITEN.entries()].sort((x, y) =>
  y[1].length - x[1].length ||
  waktuArtikel(y[1][0]) - waktuArtikel(x[1][0]));

for (const [kode, arts] of DAFTAR_EMITEN) {
  const hitung = { positif: 0, negatif: 0, netral: 0 };
  arts.forEach(a => { if (hitung[a.sentimen] != null) hitung[a.sentimen]++; });
  const rekap = ['positif', 'netral', 'negatif'].filter(k => hitung[k])
    .map(k => `<span class="sentimen sentimen-${k}">${hitung[k]} ${k}</span>`).join(' ');
  const isi =
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Sinyal per Emiten</span>` +
    `<h1 class="harian-judul">${esc(kode)}</h1>` +
    `<p class="harian-tanggal num">${arts.length} laporan keterbukaan &middot; terakhir ${esc(arts[0].date)}</p>` +
    (rekap ? `<p class="emiten-rekap">Riwayat penilaian: ${rekap}</p>` : '') +
    `</div>` +
    `<div class="linimasa">${arts.map(a => itemLinimasa(a)).join('')}</div>` +
    DISCLAIMER_SINYAL +
    `</section>`;
  fs.writeFileSync(path.join(ROOT, 'emiten', kode + '.html'),
    head({
      title: 'Sinyal ' + kode,
      desc: 'Semua laporan keterbukaan informasi ' + kode + ' yang dibaca The Signal, ' +
        'lengkap dengan arah penilaiannya: ' + arts.length + ' laporan, terakhir ' + arts[0].date + '.',
      url: '/emiten/' + kode + '.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      // Halaman emiten adalah bentuk paling mungkin dikutip mesin jawab dari
      // situs ini: pertanyaan seperti "aksi korporasi ADHI terbaru apa"
      // dijawab persis oleh satu halaman ini. CollectionPage memberi tahu
      // mesin bahwa isinya kumpulan laporan yang terurut, bukan satu artikel,
      // dan ItemList memberi judul serta tanggal tiap laporan tanpa perlu
      // menebaknya dari HTML.
      jsonld: {
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: 'Sinyal ' + kode,
        description: 'Riwayat keterbukaan informasi ' + kode + ' yang dibaca The Signal.',
        url: BASE + '/emiten/' + kode + '.html',
        inLanguage: 'id-ID',
        isPartOf: RUJUK_SITUS,
        publisher: RUJUK_ORGANISASI,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: arts.length,
          itemListElement: arts.slice(0, 30).map((a, i) => ({
            '@type': 'ListItem', position: i + 1,
            url: BASE + articleUrl(a), name: plain(a.title),
          })),
        },
      },
    }) + isi + FOOT, 'utf8');
}

{
  const kartu = DAFTAR_EMITEN.map(([kode, arts]) =>
    `<a class="emiten-kartu" href="/emiten/${kode}.html">` +
    `<span class="emiten-kode">${esc(kode)}</span>` +
    `<span class="emiten-info">${arts.length} laporan &middot; <span class="num">${esc(arts[0].date)}</span></span>` +
    chipSentimen(arts[0].sentimen) + `</a>`).join('');
  fs.writeFileSync(path.join(ROOT, 'emiten.html'),
    head({
      title: 'Sinyal per Emiten',
      desc: 'Arsip laporan bursa The Signal disusun per saham: ' + DAFTAR_EMITEN.length +
        ' emiten dengan riwayat arah penilaiannya masing-masing.',
      url: '/emiten.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      jsonld: halamanKoleksi({
        nama: 'Sinyal per Emiten', url: '/emiten.html',
        deskripsi: 'Arsip laporan bursa disusun per saham.',
        item: DAFTAR_EMITEN.map(([k]) => ({ nama: k, url: '/emiten/' + k + '.html' })),
      }),
    }) +
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Sinyal per Emiten</span>` +
    `<h1 class="harian-judul">Satu saham, satu garis waktu</h1>` +
    `<p class="harian-ringkas">Semua laporan keterbukaan informasi yang dibaca The Signal, ` +
    `disusun per emiten. Chip menunjukkan penilaian laporan terbarunya.</p>` +
    `</div>` +
    `<div class="emiten-grid">${kartu}</div>` +
    DISCLAIMER_SINYAL +
    `</section>` + FOOT, 'utf8');
  console.log('sinyal per emiten:', DAFTAR_EMITEN.length, 'halaman + indeks');
}

// ---------- Agenda Sinyal ----------
//
// Kalender maju: tanggal yang disebut artikel sebagai penentunya (RUPSLB,
// tanggal efektif, tenggat) plus perkiraan jadwal rilis BPS. Pembaca bisnis
// membuka ini untuk tahu kapan harus siaga, bukan sekadar apa yang terjadi.
{
  const perHari = new Map();
  for (const e of AGENDA) {
    if (!perHari.has(e.iso)) perHari.set(e.iso, []);
    perHari.get(e.iso).push(e);
  }
  const blokHari = [...perHari.entries()].map(([isoTgl, entri]) =>
    `<div class="agenda-hari">` +
    `<h2 class="agenda-tgl num">${esc(labelHari(isoTgl))}</h2>` +
    entri.map(e =>
      `<article class="agenda-item">` +
      `<div class="agenda-kepala">` +
      (e.perkiraan ? `<span class="agenda-chip agenda-perkiraan">perkiraan</span>` : '') +
      (e.emiten ? `<span class="agenda-chip">${esc(e.emiten)}</span>` : '') +
      `<span class="agenda-chip agenda-kategori">${esc(e.kategori)}</span></div>` +
      `<p class="agenda-teks">${esc(e.teks)}</p>` +
      (e.slug
        ? `<a class="agenda-sumber" href="/berita/${esc(e.slug)}.html">${esc(e.judul)} &rarr;</a>`
        : `<a class="agenda-sumber" href="/data-ekonomi.html">${esc(e.judul)} &rarr;</a>`) +
      `</article>`).join('') +
    `</div>`).join('');

  fs.writeFileSync(path.join(ROOT, 'agenda.html'),
    head({
      title: 'Agenda Sinyal',
      desc: 'Tanggal-tanggal yang akan menentukan arah: RUPSLB, tenggat regulasi, ' +
        'tanggal efektif aksi korporasi, dan jadwal rilis data resmi, dikumpulkan dari seluruh arsip.',
      url: '/agenda.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      // Entri berlabel "perkiraan" sengaja TIDAK ikut. Di halaman, label itu
      // yang memberi tahu pembaca tanggalnya belum pasti; di data terstruktur
      // tidak ada medan setara yang dihormati mesin, jadi startDate perkiraan
      // akan terbaca sebagai tanggal pasti. Lebih baik hilang daripada salah.
      jsonld: {
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: 'Agenda Sinyal', url: BASE + '/agenda.html', inLanguage: 'id-ID',
        description: 'Tanggal yang akan menentukan arah, dikumpulkan dari arsip The Signal.',
        isPartOf: RUJUK_SITUS,
        publisher: RUJUK_ORGANISASI,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: AGENDA.filter(e => !e.perkiraan).slice(0, 100).map((e, i) => ({
            '@type': 'ListItem', position: i + 1,
            item: {
              '@type': 'Event',
              // kategori (plus kode emiten kalau ada) itu nama acaranya; e.teks
              // adalah paragraf 'yang perlu dipantau', tempatnya di description.
              name: (e.emiten ? e.emiten + ' — ' : '') + e.kategori,
              description: e.teks, startDate: e.iso,
              eventStatus: 'https://schema.org/EventScheduled',
              url: BASE + (e.slug ? '/berita/' + e.slug + '.html' : '/agenda.html'),
            },
          })),
        },
      },
    }) +
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Agenda Sinyal</span>` +
    `<h1 class="harian-judul">Tanggal yang akan menentukan arah</h1>` +
    `<p class="harian-tanggal num">${AGENDA.length} agenda dalam 120 hari ke depan</p>` +
    `<p class="harian-ringkas">Dikumpulkan otomatis dari tanggal yang disebut artikel-artikel The Signal ` +
    `sendiri: RUPSLB, tanggal efektif, tenggat regulasi, plus perkiraan jadwal rilis BPS. ` +
    `Entri berlabel <em>perkiraan</em> berarti sumbernya menyebut rentang, bukan tanggal pasti.</p>` +
    `</div>` +
    (blokHari || '<p class="harian-ringkas">Belum ada agenda dalam 120 hari ke depan.</p>') +
    `</section>` + FOOT, 'utf8');
  console.log('agenda sinyal:', AGENDA.length, 'entri');
}

// ---------- Tema bersambung ----------
//
// Garis waktu per isu berjalan. Registry dan pencocokannya di scripts/tema.mjs;
// di sini hanya perenderan. Tema baru tampil sendiri begitu bahannya mencapai
// ambang, tanpa perubahan kode di file ini.
fs.mkdirSync(ROOT + '/tema', { recursive: true });
for (const t of KELOMPOK_TEMA) {
  const terbaru = t.artikel[0];
  const isi =
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Tema Berjalan</span>` +
    `<h1 class="harian-judul">${esc(t.nama)}</h1>` +
    `<p class="harian-tanggal num">${t.artikel.length} artikel &middot; terakhir ${esc(terbaru.date)}</p>` +
    `<p class="harian-ringkas">${esc(t.deskripsi)}</p>` +
    `</div>` +
    (terbaru.takeaway
      ? `<div class="arah-blok" style="max-width:70ch;"><b class="arah-label">Arah terakhir` +
        (terbaru.sentimen ? ' ' + chipSentimen(terbaru.sentimen) : '') + `</b>` +
        `<p class="arah-isi">${esc(terbaru.takeaway)}</p></div>`
      : '') +
    `<div class="linimasa">${t.artikel.map(a => itemLinimasa(a, { kategori: true })).join('')}</div>` +
    `</section>`;
  fs.writeFileSync(path.join(ROOT, 'tema', t.slug + '.html'),
    head({
      title: 'Tema: ' + t.nama,
      desc: t.deskripsi,
      url: '/tema/' + t.slug + '.html',
      jsonld: halamanKoleksi({
        nama: t.nama || t.slug, url: '/tema/' + t.slug + '.html',
        deskripsi: 'Linimasa arah isu ' + (t.nama || t.slug) + ' di The Signal.',
        item: t.artikel.map(a => ({ nama: plain(a.title), url: articleUrl(a) })),
      }),
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
    }) + isi + FOOT, 'utf8');
}

{
  const kartu = KELOMPOK_TEMA.map(t =>
    `<a class="tema-kartu" href="/tema/${t.slug}.html">` +
    `<h2>${esc(t.nama)}</h2>` +
    `<p>${esc(t.deskripsi)}</p>` +
    `<span class="tema-meta num">${t.artikel.length} artikel &middot; terakhir ${esc(t.artikel[0].date)}</span>` +
    `</a>`).join('');
  fs.writeFileSync(path.join(ROOT, 'tema.html'),
    head({
      title: 'Tema Berjalan',
      desc: 'Isu-isu ekonomi yang beritanya bersambung lintas hari, disusun jadi garis waktu ' +
        'arah: dari pembatasan subsidi BBM sampai transisi Gubernur BI.',
      url: '/tema.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      jsonld: halamanKoleksi({
        nama: 'Tema Berjalan', url: '/tema.html',
        deskripsi: 'Isu ekonomi yang beritanya bersambung lintas hari.',
        item: KELOMPOK_TEMA.map(t => ({ nama: t.nama || t.slug, url: '/tema/' + t.slug + '.html' })),
      }),
    }) +
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Tema Berjalan</span>` +
    `<h1 class="harian-judul">Ikuti isunya, bukan potongannya</h1>` +
    `<p class="harian-ringkas">Berita harian itu potongan. Halaman-halaman ini menyusunnya ` +
    `kembali per isu, terbaru di atas, supaya kelihatan ke mana arahnya bergerak.</p>` +
    `</div>` +
    `<div class="tema-grid">${kartu}</div>` +
    `</section>` + FOOT, 'utf8');
  console.log('tema berjalan:', KELOMPOK_TEMA.length, 'tema tayang');
}

// ---------- Rapor Sinyal ----------
//
// Rekam jejak yang bisa ditagih: klaim arah dari tiap edisi Signal Harian
// beserta status pembuktiannya. Bunyi klaim tidak pernah diubah setelah
// tercatat; yang berubah hanya statusnya, dan perubahan status selalu
// menautkan artikel bukti. Media yang berani menilai dirinya sendiri lebih
// layak dipercaya saat menilai yang lain, dan justru itu produknya.
if (RAPOR && Array.isArray(RAPOR.entri) && RAPOR.entri.length) {
  const LABEL_STATUS = {
    menunggu: 'Menunggu bukti', terkonfirmasi: 'Terkonfirmasi',
    patah: 'Patah', kedaluwarsa: 'Kedaluwarsa',
  };
  const hitung = {};
  for (const e of RAPOR.entri) hitung[e.status] = (hitung[e.status] || 0) + 1;
  const dinilai = (hitung.terkonfirmasi || 0) + (hitung.patah || 0);
  const ringkasSkor = dinilai
    ? `${hitung.terkonfirmasi || 0} terkonfirmasi, ${hitung.patah || 0} patah dari ${dinilai} yang sudah ternilai; ${hitung.menunggu || 0} menunggu bukti`
    : `${RAPOR.entri.length} pembacaan tercatat, semua masih menunggu penanda ujinya jatuh tempo`;

  function tglEdisi(iso) {
    const d = new Date(iso + 'T00:00:00Z');
    return d.getUTCDate() + ' ' + BULAN[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
  }
  const item = RAPOR.entri.map(e =>
    `<article class="rapor-item rapor-${esc(e.status)}">` +
    `<div class="rapor-kepala">` +
    `<span class="rapor-status">${esc(LABEL_STATUS[e.status] || e.status)}</span>` +
    `<span class="rapor-edisi num">Edisi ${esc(tglEdisi(e.edisi))}` +
    (e.tenggatLabel ? ` &middot; uji: ${esc(e.tenggatLabel)}` : '') + `</span></div>` +
    `<h2 class="rapor-benang">${esc(e.benang)}</h2>` +
    `<p class="rapor-klaim">&ldquo;${esc(e.klaim)}&rdquo;</p>` +
    `<p class="rapor-penanda"><b>Penanda uji:</b> ${esc(e.penanda)}</p>` +
    (e.bukti
      ? `<p class="rapor-bukti">${esc(e.bukti.alasan || '')} ` +
        `<a href="/berita/${esc(e.bukti.slug)}.html">${esc(e.bukti.judul)} (${esc(e.bukti.tanggal)}) &rarr;</a></p>`
      : '') +
    `</article>`).join('');

  fs.writeFileSync(path.join(ROOT, 'rapor.html'),
    head({
      title: 'Rapor Sinyal',
      desc: 'Rekam jejak pembacaan arah The Signal: tiap klaim dicatat beserta penanda ujinya, ' +
        'lalu dinilai terkonfirmasi atau patah begitu buktinya terbit. ' + ringkasSkor + '.',
      url: '/rapor.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      jsonld: halamanKoleksi({
        nama: 'Rapor Sinyal', url: '/rapor.html',
        deskripsi: 'Rekam jejak pembacaan arah The Signal, tiap klaim dicatat lalu dinilai ' +
          'terkonfirmasi atau patah begitu buktinya terbit.',
        item: [],
      }),
    }) +
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Rapor Sinyal</span>` +
    `<h1 class="harian-judul">Pembacaan kami, dinilai terbuka</h1>` +
    `<p class="harian-tanggal num">${esc(ringkasSkor)}</p>` +
    `<p class="harian-ringkas">Tiap Signal Harian membaca arah dan menyebut sendiri penanda ` +
    `ujinya. Halaman ini menagihnya: klaim dikutip apa adanya saat terbit, tidak pernah ` +
    `disunting, lalu diberi status begitu penandanya terbukti atau meleset. Patah ya ditulis ` +
    `patah; rapor yang hanya mencatat yang benar bukan rapor.</p>` +
    `</div>` +
    `<div class="rapor-daftar">${item}</div>` +
    DISCLAIMER_SINYAL +
    `</section>` + FOOT, 'utf8');
  console.log('rapor sinyal:', RAPOR.entri.length, 'klaim (' + ringkasSkor + ')');
}

// ---------- bahan bot tanya jawab Telegram ----------
// Ditulis tiap build supaya bot selalu tahu arsip terbaru tanpa perlu
// deploy ulang fungsinya; ia menarik berkas ini lewat HTTP dari situs.
{
  const { tulisBotIndeks } = await import('./bot-indeks.mjs');
  const info = tulisBotIndeks(ARTICLES);
  console.log('indeks bot:', info.artikel, 'artikel,', info.kb, 'KB');
}

// ---------- panggang beranda + arsip ----------
bakeRoot({ ARTICLES, VIDEOS, VER, BPS, HARIAN, AGENDA });
console.log('bake beranda + arsip: ok');

// ---------- Signal Harian ----------
// Produk inti The Signal: satu tulisan yang merangkai berita sehari jadi
// benang arah kebijakan. Untuk sekarang terbuka, tidak dipagari.

if (HARIAN) {
  const isi =
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div id="harian-isi" data-edisi="${esc(HARIAN.tanggal)}">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Signal Harian</span>` +
    `<h1 class="harian-judul">${esc(HARIAN.judul)}</h1>` +
    `<p class="harian-tanggal num">${esc(HARIAN.tanggalLabel)} &middot; dirangkai dari ${HARIAN.jumlahBahan} berita</p>` +
    `<p class="harian-ringkas">${esc(HARIAN.ringkas)}</p>` +
    `</div>` +
    blokRalat(HARIAN.ralat) +
    `<div class="harian-benang">` +
    HARIAN.benang.map((b, i) =>
      `<article class="benang"><span class="benang-num num">${String(i + 1).padStart(2, '0')}</span>` +
      `<div><h2>${esc(b.judul)}</h2><p>${esc(b.isi)}</p></div></article>`).join('') +
    `</div>` +
    (HARIAN.penutup ? `<p class="harian-penutup">${esc(HARIAN.penutup)}</p>` : '') +
    `</div>` +
    daftarBahan(HARIAN) +
    `<div class="article-source-box" style="max-width:70ch;"><p>Signal Harian disusun redaksi The Signal ` +
    `dari seluruh berita yang terbit hari itu. Isinya pembacaan arah, bukan penilaian benar atau salah ` +
    `atas kebijakan, dan bukan rekomendasi investasi.</p>` +
    `<a href="/berita.html">Baca berita hari ini &rarr;</a></div>` +
    `<div class="artikel-cta"><div class="artikel-cta-copy"><b>Pembacaan arah seperti ini, tiap malam hari kerja</b>` +
    `<span>Langsung ke email, lengkap dengan angka pembanding yang tidak dimuat di situs. Gratis, berhenti kapan saja.</span></div>` +
    `<button class="btn-modal-submit" type="button" data-open-subscribe>Daftar Signal Harian</button></div>` +
    `</section>` +
    // Tautan edisi dari email dan feed berbentuk ?edisi=YYYY-MM-DD. Dulu tidak
    // ditangani sama sekali: pembuka tautan edisi lama disuguhi edisi terbaru
    // tanpa penjelasan, seolah tautannya rusak. Arsipnya sudah ada di
    // harian-arsip.js (30 edisi), tinggal dirender. Markup hasil rendernya
    // KEMBAR dengan cetakan di atas; kalau mengubah salah satu, ubah keduanya.
    `<script src="/assets/js/harian-arsip.js?v=${VER}" defer></script>` +
    `<script>
document.addEventListener('DOMContentLoaded', function () {
  var m = location.search.match(/[?&]edisi=(\\d{4}-\\d{2}-\\d{2})/);
  if (!m) return;
  var wadah = document.getElementById('harian-isi');
  if (!wadah || m[1] === wadah.getAttribute('data-edisi')) return;
  var arsip = (typeof HARIAN_ARSIP === 'undefined') ? [] : HARIAN_ARSIP;
  var e = null;
  for (var i = 0; i < arsip.length; i++) if (arsip[i].tanggal === m[1]) e = arsip[i];
  var esc = TS.esc;
  if (!e) {
    // Edisi tidak ada di arsip: katakan itu terang-terangan. Menampilkan
    // edisi lain tanpa penjelasan sama saja membiarkan pembaca mengira
    // tautannya rusak.
    var p = document.createElement('p');
    p.className = 'harian-arsip-note';
    p.innerHTML = 'Edisi ' + esc(m[1]) + ' sudah tidak ada di arsip 30 edisi terakhir situs ini. ' +
      'Yang tampil di bawah adalah edisi terbaru; edisi lama tersimpan di ' +
      '<a href="https://buttondown.com/the-signal/archive" target="_blank" rel="noopener">arsip Buttondown</a>.';
    wadah.insertBefore(p, wadah.firstChild);
    return;
  }
  wadah.innerHTML =
    '<p class="harian-arsip-note">Kamu membaca edisi arsip. <a href="/signal-harian.html">Buka edisi terbaru &rarr;</a></p>' +
    '<div class="harian-head">' +
    '<span class="harian-kicker">Signal Harian</span>' +
    '<h1 class="harian-judul">' + esc(e.judul) + '</h1>' +
    '<p class="harian-tanggal num">' + esc(e.tanggalLabel) + ' &middot; dirangkai dari ' + e.jumlahBahan + ' berita</p>' +
    '<p class="harian-ringkas">' + esc(e.ringkas) + '</p></div>' +
    (e.ralat && e.ralat.teks
      ? '<aside class="ralat"><b class="ralat-label">Ralat' +
        (e.ralat.label ? ', ' + esc(e.ralat.label) : '') + '</b><p>' + esc(e.ralat.teks) + '</p></aside>'
      : '') +
    '<div class="harian-benang">' + e.benang.map(function (b, i) {
      return '<article class="benang"><span class="benang-num num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div><h2>' + esc(b.judul) + '</h2><p>' + esc(b.isi) + '</p></div></article>';
    }).join('') + '</div>' +
    (e.penutup ? '<p class="harian-penutup">' + esc(e.penutup) + '</p>' : '');
  document.title = 'Signal Harian ' + e.tanggalLabel + ' \u00b7 The Signal';
});
</script>`;

  fs.writeFileSync(path.join(ROOT, 'signal-harian.html'),
    head({
      title: 'Signal Harian: ' + plain(HARIAN.judul),
      desc: HARIAN.ringkas,
      url: '/signal-harian.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      ogType: 'article',
      jsonld: {
        // Sebelumnya cuma tiga medan. Tanpa image, author, dan
        // mainEntityOfPage, blok ini tidak memenuhi syarat hasil kaya Google
        // untuk artikel, padahal inilah produk inti situs. dateModified
        // dicantumkan karena isi halaman ini memang berganti di URL yang sama
        // tiap hari.
        '@context': 'https://schema.org', '@type': 'AnalysisNewsArticle',
        headline: plain(HARIAN.judul),
        description: plain(HARIAN.ringkas || ''),
        datePublished: stempelWIB(HARIAN.dibuat),
        dateModified: stempelWIB(HARIAN.dibuat),
        image: [BASE + '/assets/img/og-card.jpg'],
        author: [{ '@type': 'Organization', name: 'The Signal', url: BASE }],
        mainEntityOfPage: { '@type': 'WebPage', '@id': BASE + '/signal-harian.html' },
        inLanguage: 'id-ID',
        publisher: RUJUK_ORGANISASI,
      },
    }) + isi + FOOT, 'utf8');
  console.log('signal harian: ' + HARIAN.tanggal);
}

// ---------- Signal Pekanan ----------
//
// Terbit Minggu, satu tingkat di atas edisi harian: pola yang baru kelihatan
// setelah sepekan, plus kalender pekan depan. Bentuk halamannya sengaja
// mirip Signal Harian supaya terasa satu keluarga, tapi punya bagian yang
// tidak dimiliki harian, yaitu "yang menanti pekan depan".
if (PEKANAN && PEKANAN.judul) {
  const isi =
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div id="pekan-isi" data-edisi="${esc(PEKANAN.tanggal)}">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Signal Pekanan</span>` +
    `<h1 class="harian-judul">${esc(PEKANAN.judul)}</h1>` +
    `<p class="harian-tanggal num">Pekan ${esc(PEKANAN.rentangLabel)} &middot; ` +
      `dirangkai dari ${PEKANAN.jumlahEdisi} edisi harian dan ${PEKANAN.jumlahBerita} berita</p>` +
    `<p class="harian-ringkas">${esc(PEKANAN.ringkas)}</p>` +
    `</div>` +
    blokRalat(PEKANAN.ralat) +
    `<div class="harian-benang">` +
    (PEKANAN.pola || []).map((p, i) =>
      `<article class="benang"><span class="benang-num num">${String(i + 1).padStart(2, '0')}</span>` +
      `<div><h2>${esc(p.judul)}</h2><p>${esc(p.isi)}</p></div></article>`).join('') +
    `</div>` +
    ((PEKANAN.menanti || []).length
      ? `<div class="pekan-menanti">` +
        `<h2 class="pekan-menanti-judul">Yang menanti pekan depan</h2>` +
        (PEKANAN.menanti).map(m =>
          `<article class="menanti-item">` +
          `<span class="menanti-tgl num">${esc(labelHari(m.tanggal))}</span>` +
          `<div><b>${esc(m.apa)}</b><p>${esc(m.kenapa)}</p></div>` +
          `</article>`).join('') +
        `<a class="card-link" href="/agenda.html">Lihat seluruh agenda &rarr;</a>` +
        `</div>`
      : '') +
    (PEKANAN.penutup ? `<p class="harian-penutup">${esc(PEKANAN.penutup)}</p>` : '') +
    `</div>` +
    `<div class="article-source-box" style="max-width:70ch;"><p>Signal Pekanan disusun redaksi ` +
    `The Signal dari seluruh edisi harian dan berita sepekan. Isinya pembacaan arah, bukan ` +
    `penilaian benar atau salah atas kebijakan, dan bukan rekomendasi investasi. Tanggal pada ` +
    `bagian "yang menanti" diambil dari dokumen resmi yang diberitakan, dan yang berlabel ` +
    `perkiraan mengikuti pola rilis, bukan pengumuman resmi.</p>` +
    `<a href="/signal-harian.html">Baca Signal Harian terbaru &rarr;</a></div>` +
    `<div class="artikel-cta"><div class="artikel-cta-copy"><b>Dapatkan pembacaan ini lebih dulu</b>` +
    `<span>Signal Harian tiap malam hari kerja, plus rangkuman pekanan tiap Minggu. ` +
    `Langsung ke email, gratis, berhenti kapan saja.</span></div>` +
    `<button class="btn-modal-submit" type="button" data-open-subscribe>Daftar Signal+</button></div>` +
    `</section>` +
    // Tautan edisi dari email dan feed berbentuk ?edisi=YYYY-MM-DD. Sebelum ini
    // halaman pekanan tidak menanganinya sama sekali, jadi siapa pun yang
    // membuka email pekan lalu akan mendarat di edisi pekan ini tanpa
    // penjelasan, seolah tautannya rusak. Aturan yang sama sudah lama berlaku
    // di halaman harian; ini menyamakannya.
    //
    // Markup hasil rendernya KEMBAR dengan cetakan di atas. Kalau mengubah
    // salah satu, ubah keduanya.
    `<script src="/assets/js/pekanan-arsip.js?v=${VER}" defer></script>` +
    `<script>
document.addEventListener('DOMContentLoaded', function () {
  var m = location.search.match(/[?&]edisi=([0-9]{4}-[0-9]{2}-[0-9]{2})/);
  if (!m) return;
  var wadah = document.getElementById('pekan-isi');
  if (!wadah || m[1] === wadah.getAttribute('data-edisi')) return;
  var arsip = (typeof PEKANAN_ARSIP === 'undefined') ? [] : PEKANAN_ARSIP;
  var e = null;
  for (var i = 0; i < arsip.length; i++) if (arsip[i].tanggal === m[1]) e = arsip[i];
  var esc = TS.esc;
  if (!e) {
    var p = document.createElement('p');
    p.className = 'harian-arsip-note';
    p.innerHTML = 'Edisi pekan ' + esc(m[1]) + ' sudah tidak ada di arsip situs ini. ' +
      'Yang tampil di bawah adalah edisi terbaru; edisi lama tersimpan di ' +
      '<a href="https://buttondown.com/the-signal/archive" target="_blank" rel="noopener">arsip Buttondown</a>.';
    wadah.insertBefore(p, wadah.firstChild);
    return;
  }
  var hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  var bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  function labelHari(iso) {
    var d = new Date(iso + 'T00:00:00Z');
    if (isNaN(d.getTime())) return iso;
    return hari[d.getUTCDay()] + ', ' + d.getUTCDate() + ' ' + bulan[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
  }
  wadah.innerHTML =
    '<p class="harian-arsip-note">Kamu membaca edisi arsip. <a href="/signal-pekanan.html">Buka edisi terbaru &rarr;</a></p>' +
    '<div class="harian-head">' +
    '<span class="harian-kicker">Signal Pekanan</span>' +
    '<h1 class="harian-judul">' + esc(e.judul) + '</h1>' +
    '<p class="harian-tanggal num">Pekan ' + esc(e.rentangLabel) + ' &middot; dirangkai dari ' +
      e.jumlahEdisi + ' edisi harian dan ' + e.jumlahBerita + ' berita</p>' +
    '<p class="harian-ringkas">' + esc(e.ringkas) + '</p></div>' +
    (e.ralat && e.ralat.teks
      ? '<aside class="ralat"><b class="ralat-label">Ralat' +
        (e.ralat.label ? ', ' + esc(e.ralat.label) : '') + '</b><p>' + esc(e.ralat.teks) + '</p></aside>'
      : '') +
    '<div class="harian-benang">' + (e.pola || []).map(function (p, i) {
      return '<article class="benang"><span class="benang-num num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div><h2>' + esc(p.judul) + '</h2><p>' + esc(p.isi) + '</p></div></article>';
    }).join('') + '</div>' +
    ((e.menanti || []).length
      ? '<div class="pekan-menanti"><h2 class="pekan-menanti-judul">Yang menanti pekan depan</h2>' +
        e.menanti.map(function (m) {
          return '<article class="menanti-item"><span class="menanti-tgl num">' + esc(labelHari(m.tanggal)) + '</span>' +
            '<div><b>' + esc(m.apa) + '</b><p>' + esc(m.kenapa) + '</p></div></article>';
        }).join('') + '<a class="card-link" href="/agenda.html">Lihat seluruh agenda &rarr;</a></div>'
      : '') +
    (e.penutup ? '<p class="harian-penutup">' + esc(e.penutup) + '</p>' : '');
  document.title = 'Signal Pekanan ' + e.rentangLabel + ' · The Signal';
});
</script>`;

  fs.writeFileSync(path.join(ROOT, 'signal-pekanan.html'),
    head({
      title: 'Signal Pekanan: ' + plain(PEKANAN.judul),
      desc: PEKANAN.ringkas,
      url: '/signal-pekanan.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      ogType: 'article',
      jsonld: {
        '@context': 'https://schema.org', '@type': 'AnalysisNewsArticle',
        headline: plain(PEKANAN.judul),
        description: plain(PEKANAN.ringkas || ''),
        datePublished: stempelWIB(PEKANAN.dibuat),
        dateModified: stempelWIB(PEKANAN.dibuat),
        image: [BASE + '/assets/img/og-card.jpg'],
        author: [{ '@type': 'Organization', name: 'The Signal', url: BASE }],
        mainEntityOfPage: { '@type': 'WebPage', '@id': BASE + '/signal-pekanan.html' },
        inLanguage: 'id-ID',
        publisher: RUJUK_ORGANISASI,
      },
    }) + isi + FOOT, 'utf8');
  console.log('signal pekanan: ' + PEKANAN.rentangLabel + ' (' + (PEKANAN.pola || []).length + ' pola)');
}

// ---------- bersihkan halaman yatim ----------
// Artikel lama yang sudah terdorong keluar dari arsip menyisakan file HTML.
// Tanpa ini, file-file itu menumpuk selamanya dan masih bisa diakses publik
// padahal sudah tidak ada di daftar mana pun.
function bersihkanYatim(folder, sahSet) {
  const dir = path.join(ROOT, folder);
  if (!fs.existsSync(dir)) return 0;
  let hapus = 0;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".html")) continue;
    if (!sahSet.has(f)) { fs.unlinkSync(path.join(dir, f)); hapus++; }
  }
  return hapus;
}
const yatimBerita = bersihkanYatim("berita", new Set(ARTICLES.map(a => a.slug + ".html")));
const yatimVideo = bersihkanYatim("tayangan", new Set(VIDEOS.map(v => v.id + ".html")));
// Halaman emiten dan tema ikut dibersihkan: emiten yang artikelnya sudah
// terdorong keluar arsip, atau tema yang turun di bawah ambang, tidak boleh
// menyisakan halaman beku yang masih bisa diakses publik.
const yatimEmiten = bersihkanYatim("emiten", new Set(DAFTAR_EMITEN.map(([k]) => k + ".html")));
const yatimTema = bersihkanYatim("tema", new Set(KELOMPOK_TEMA.map(t => t.slug + ".html")));
if (yatimBerita || yatimVideo || yatimEmiten || yatimTema) {
  console.log("halaman lama dihapus: " + yatimBerita + " berita, " + yatimVideo + " video, " +
    yatimEmiten + " emiten, " + yatimTema + " tema");
}

// ---------- pasang versi aset di halaman root ----------
// index/berita/video ditulis tangan, jadi tag <script>/<link>-nya tidak ikut
// diberi ?v= otomatis. Tanpa ini beranda bisa memuat shared.js lama dari
// cache sehingga bagian yang dirender JS (kartu pasar) tampak kosong.
// index.html, berita.html, dan video.html ditulis tangan, bukan hasil generate,
// jadi perubahan global tidak otomatis sampai ke sana. Ini sudah dua kali
// menggigit: pertama versi aset (?v=) yang basi sehingga pengunjung dapat JS
// lama, kedua alamat domain yang tertinggal di og:image dan og:url setelah
// pindah ke the-signal.id. Karena itu fungsi ini menyelaraskan keduanya dan
// diakhiri pemeriksaan yang berisik kalau masih ada yang lolos.
function selaraskanHalamanRoot() {
  const HOST_LAMA = /https:\/\/the-signal-sandy\.vercel\.app/g;
  for (const f of ['index.html', 'berita.html', 'video.html']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    let h = fs.readFileSync(p, 'utf8');
    const sebelum = h;
    h = h.replace(/(assets\/(?:css|js)\/[a-z-]+\.(?:css|js))(\?v=[a-f0-9]+)?/g, '$1?v=' + VER);
    h = h.replace(HOST_LAMA, BASE);
    if (h !== sebelum) fs.writeFileSync(p, h, 'utf8');
  }
}
selaraskanHalamanRoot();

// Penjaga: alamat absolut apa pun di halaman root yang bukan BASE berarti ada
// yang tertinggal. Lebih baik build-nya gagal daripada situs terbit dengan
// og:image menunjuk domain lama, karena kesalahan itu tidak kelihatan sampai
// ada yang membagikan tautannya.
function periksaHalamanRoot() {
  const salah = [];
  for (const f of ['index.html', 'berita.html', 'video.html']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    const h = fs.readFileSync(p, 'utf8');
    // Hanya metadata yang MERUJUK DIRI SENDIRI yang diperiksa. Tautan keluar
    // di badan halaman (adsmediamix.id, Instagram, X, sumber berita) memang
    // seharusnya ke domain lain, jadi jangan ikut dinilai.
    const pola = [
      /<meta\s+property="og:(?:url|image)"\s+content="(https?:\/\/[^"\/]+)/g,
      /<meta\s+property="og:image:secure_url"\s+content="(https?:\/\/[^"\/]+)/g,
      /<meta\s+name="twitter:image"\s+content="(https?:\/\/[^"\/]+)/g,
      /<link\s+rel="canonical"\s+href="(https?:\/\/[^"\/]+)/g,
    ];
    for (const re of pola) {
      for (const m of h.matchAll(re)) {
        if (m[1] !== BASE) salah.push(f + ' -> ' + m[1]);
      }
    }
  }
  if (salah.length) {
    console.error('GAGAL: alamat absolut di halaman root tidak cocok dengan ' + BASE);
    salah.forEach(s => console.error('  ' + s));
    process.exit(1);
  }
}
periksaHalamanRoot();

// ---------- halaman rubrik ----------
//
// Sebelumnya ketiga belas rubrik cuma fragmen "#kat=" di atas satu halaman
// yang sama. Fragmen bukan URL: Google tidak mengindeksnya terpisah, dan
// penyaringnya jalan di JS, jadi mesin jawab yang menjelajah lewat tautan
// tidak pernah melihat daftar per rubrik. Ditaruh di bawah "/rubrik/",
// bukan "/berita/", supaya tidak berebut ruang nama dengan slug artikel.
fs.mkdirSync(ROOT + '/rubrik', { recursive: true });
const DAFTAR_RUBRIK = (() => {
  const m = new Map();
  for (const a of ARTICLES) {
    const k = a.category || 'Lainnya';
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(a);
  }
  return [...m.entries()].sort((x, y) => y[1].length - x[1].length);
})();
for (const [nama, arts] of DAFTAR_RUBRIK) {
  const slug = catSlug(nama);
  const isi =
    `<section class="rail" style="padding-top:2.2rem;">` +
    `<div class="harian-head">` +
    `<span class="harian-kicker">Rubrik</span>` +
    `<h1 class="harian-judul">${esc(nama)}</h1>` +
    `<p class="harian-tanggal num">${arts.length} artikel &middot; terakhir ${esc(arts[0].date || '')}</p>` +
    `</div>` +
    `<div class="linimasa">${arts.map(a => itemLinimasa(a)).join('')}</div>` +
    `<p class="harian-ringkas" style="margin-top:2rem;">` +
    `<a href="/berita.html">Seluruh arsip ${ARTICLES.length} artikel &rarr;</a></p>` +
    `</section>`;
  fs.writeFileSync(path.join(ROOT, 'rubrik', slug + '.html'),
    head({
      title: nama,
      desc: 'Semua artikel rubrik ' + nama + ' di The Signal: ' + arts.length +
        ' artikel, terakhir ' + (arts[0].date || '') + '.',
      url: '/rubrik/' + slug + '.html',
      image: BASE + '/assets/img/og-card.jpg',
      imgW: 1200, imgH: 630,
      jsonld: halamanKoleksi({
        nama, url: '/rubrik/' + slug + '.html',
        deskripsi: 'Artikel rubrik ' + nama + ' di The Signal.',
        item: arts.map(a => ({ nama: plain(a.title), url: articleUrl(a) })),
      }),
    }) + isi + FOOT, 'utf8');
}
console.log('halaman rubrik:', DAFTAR_RUBRIK.length, 'rubrik,',
  DAFTAR_RUBRIK.reduce((n, r) => n + r[1].length, 0), 'artikel tertaut');

// ---------- sitemap ----------
// lastmod memberi tahu mesin pencari halaman mana yang layak dirayapi ulang.
// Halaman root berganti isi tiap build (daftar berita, angka pasar dan BPS),
// jadi lastmod-nya tanggal build. Artikel memakai tanggal terbitnya sendiri.
// Video tidak membawa tanggal di datanya, jadi tanpa lastmod; itu sah.
const hariIniWIB = new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);
// Tanggal WIB dari stempel apa pun bentuknya. Memotong sepuluh karakter dari
// isoDate mentah salah untuk stempel Zulu; waktuISO() sudah menormalkannya.
const tglWIB = (iso) => waktuISO(iso).slice(0, 10);
const urls = ['/', '/signal-harian.html', '/berita.html', '/video.html', '/data-ekonomi.html',
  ...(PEKANAN ? ['/signal-pekanan.html'] : []),
  '/agenda.html', '/rapor.html', '/tema.html', '/emiten.html',
  '/tentang.html', '/kontak.html', '/privasi.html', '/pedoman-media-siber.html']
  .map(u => ({ loc: u, lastmod: hariIniWIB }))
  // Artikel yang diralat BERUBAH, dan itulah justru yang perlu dirayapi ulang.
  // Sebelumnya lastmod-nya tetap tanggal terbit awal, jadi ralat tidak pernah
  // memberi sinyal apa pun ke mesin pencari.
  .concat(ARTICLES.map(a => ({
    loc: articleUrl(a),
    lastmod: [tglWIB(a.isoDate), (a.ralat && a.ralat.tanggal) || ''].filter(Boolean).sort().pop(),
  })))
  .concat(VIDEOS.map(v => ({ loc: videoUrl(v), lastmod: tglWIB(v.terbit) || undefined })))
  // lastmod halaman emiten dan tema = tanggal laporan terbarunya, karena
  // memang hanya berubah saat ada artikel baru menempel.
  .concat(DAFTAR_EMITEN.map(([k, arts]) =>
    ({ loc: '/emiten/' + k + '.html', lastmod: tglWIB(arts[0].isoDate) })))
  .concat(KELOMPOK_TEMA.map(t =>
    ({ loc: '/tema/' + t.slug + '.html', lastmod: tglWIB(t.artikel[0].isoDate) })))
  .concat(DAFTAR_RUBRIK.map(([n, arts]) =>
    ({ loc: '/rubrik/' + catSlug(n) + '.html', lastmod: tglWIB(arts[0].isoDate) })));
fs.writeFileSync(ROOT + '/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => '  <url><loc>' + BASE + u.loc + '</loc>' +
    (u.lastmod ? '<lastmod>' + u.lastmod + '</lastmod>' : '') + '</url>').join('\n') +
  '\n</urlset>\n', 'utf8');
// ---------- sitemap Google News ----------
//
// Sitemap biasa memberi tahu Google SEMUA halaman; sitemap news memberi tahu
// mana yang BARU, dan itu jalur berbeda yang dipakai Google News serta Top
// Stories. Aturannya ketat dan sengaja dipatuhi di sini: hanya artikel dua
// hari terakhir, maksimum 1.000 URL, dan tanggal terbit wajib berzona waktu.
// Memasukkan artikel lama bukan sekadar sia-sia, tapi membuat seluruh berkas
// diabaikan.
{
  const NL = String.fromCharCode(10);
  const batas = Date.now() - 2 * 86400000;
  const baru = ARTICLES
    .filter(a => a.isoDate && new Date(waktuISO(a.isoDate)).getTime() > batas)
    .slice(0, 1000);
  const isi = baru.map(a =>
    '  <url><loc>' + BASE + articleUrl(a) + '</loc>' +
    '<news:news><news:publication>' +
    '<news:name>The Signal</news:name><news:language>id</news:language>' +
    '</news:publication>' +
    '<news:publication_date>' + esc(waktuISO(a.isoDate)) + '</news:publication_date>' +
    '<news:title>' + esc(plain(a.title)) + '</news:title>' +
    '</news:news></url>').join(NL);
  fs.writeFileSync(ROOT + '/news-sitemap.xml',
    '<?xml version="1.0" encoding="UTF-8"?>' + NL +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
    'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">' + NL +
    isi + NL + '</urlset>' + NL, 'utf8');
  console.log('news sitemap:', baru.length, 'artikel 2 hari terakhir');
}

// ---------- llms.txt ----------
//
// Berkas ini untuk mesin jawab, bukan mesin pencari. Saat ChatGPT, Perplexity,
// atau Gemini mengambil halaman ini, yang menentukan apakah mereka MENGUTIP
// dengan benar bukan kata kunci, melainkan apakah mereka paham sumbernya apa,
// aturannya apa, dan halaman mana yang berisi data. Itu yang ditulis di sini.
{
  const NL = String.fromCharCode(10);
  const isi = [
    '# The Signal',
    '',
    '> Media ekonomi Indonesia. Membaca ARAH kebijakan dan aksi korporasi dari',
    '> dokumen resmi, bukan sekadar melaporkan peristiwa. Kolaborasi editorial',
    '> dengan tvOneNews, didukung adsmediamix.id.',
    '',
    'Aturan redaksi yang relevan kalau Anda mengutip situs ini:',
    '',
    // Porsi tiap jalur dihitung, bukan ditulis tangan. Pembukanya dulu cuma
    // menyebut tvOneNews, dan mesin jawab yang membacanya wajar menyimpulkan
    // seluruh arsip berasal dari sana padahal separuhnya tidak.
    '- Arsipnya datang dari tiga jalur: ' + (() => {
      let t = 0, i = 0, l = 0;
      ARTICLES.forEach(x => { if (!x.sourceLabel) t++; else if (x.sourceLabel === 'IDX') i++; else l++; });
      return 'rangkuman liputan ekonomi tvOneNews (' + t + ' artikel), keterbukaan ' +
        'informasi emiten di IDX (' + i + '), dan siaran pers lembaga resmi (' + l + ')';
    })() + '. Kolom sumber tiap artikel menyebut jalurnya masing-masing.',
    '- Setiap artikel menyertakan tautan ke dokumen aslinya di kolom sumber dan',
    '  pada properti isBasedOn di data terstrukturnya. Kutip dokumen itu kalau',
    '  Anda butuh sumber primer.',
    '- Aturan redaksi melarang penambahan fakta di luar sumber. Angka, tanggal,',
    '  dan nama di artikel berasal dari dokumen yang ditautkan.',
    '- Bagian "Arahnya ke mana" adalah PEMBACAAN redaksi, bukan fakta dari',
    '  sumber. Bedakan keduanya saat mengutip.',
    '- Kekeliruan yang terkonfirmasi diperbaiki di artikel yang sama disertai',
    '  catatan ralat yang terlihat, dan dateModified pada data terstrukturnya',
    '  ikut diperbarui. Kalau sebuah artikel memuat blok ralat, versi yang',
    '  benar adalah yang sedang Anda baca.',
    '- Kepala negara ditulis "Presiden Prabowo", tidak pernah nama telanjang.',
    '',
    '## Halaman utama',
    '',
    '- [Beranda](' + BASE + '/): pembacaan arah hari ini plus berita terbaru.',
    '- [Signal Harian](' + BASE + '/signal-harian.html): satu tulisan yang merangkai seluruh berita hari itu jadi satu benang arah kebijakan. Terbit malam hari kerja.',
    '- [Signal Pekanan](' + BASE + '/signal-pekanan.html): pola yang baru kelihatan setelah sepekan, plus agenda pekan depan. Terbit Minggu.',
    '- [Semua berita](' + BASE + '/berita.html): arsip lengkap dengan penyaring kategori.',
    '',
    '## Data dan rujukan',
    '',
    '- [Data ekonomi](' + BASE + '/data-ekonomi.html): indikator resmi BPS berikut grafik dan arah beberapa periode terakhir.',
    '- [Agenda](' + BASE + '/agenda.html): kalender maju berisi tanggal penentu yang disebut dokumen resmi, misalnya RUPS, tenggat obligasi, dan jadwal rilis data.',
    '- [Rapor Sinyal](' + BASE + '/rapor.html): rekam jejak pembacaan arah kami sendiri, termasuk yang meleset.',
    '- [Sinyal per emiten](' + BASE + '/emiten.html): riwayat aksi korporasi per kode saham.',
    '- [Tema bersambung](' + BASE + '/tema.html): kumpulan artikel yang menyambung dalam satu isu.',
    '',
    '## Mesin baca',
    '',
    '- [Feed RSS](' + BASE + '/feed.xml)',
    '- [Sitemap](' + BASE + '/sitemap.xml)',
    '- [Sitemap berita](' + BASE + '/news-sitemap.xml): artikel dua hari terakhir.',
    '',
    '## Identitas dan tanggung jawab',
    '',
    '- [Tentang](' + BASE + '/tentang.html): siapa kami dan bagaimana artikel disusun, termasuk peran mesin di dalamnya.',
    '- [Pedoman media siber](' + BASE + '/pedoman-media-siber.html): verifikasi, ralat, dan hak jawab.',
    '- [Privasi](' + BASE + '/privasi.html)',
    '- [Kontak dan koreksi](' + BASE + '/kontak.html): tempat melaporkan kekeliruan.',
    '',
  ].join(NL);
  fs.writeFileSync(ROOT + '/llms.txt', isi, 'utf8');
}

// ---------- robots.txt ----------
//
// Perayap mesin jawab DISEBUT SATU PER SATU walau tanda bintang di atas sudah
// mengizinkan semuanya. Alasannya bukan teknis melainkan supaya keputusannya
// terbaca: sebagian perayap memperlakukan blok bernama dirinya sebagai
// satu-satunya aturan yang berlaku baginya, dan Google-Extended punya
// perilaku tersendiri, yaitu mengatur pemakaian isi untuk Gemini TANPA
// menyentuh peringkat Penelusuran sama sekali.
//
// Keputusan editorialnya: DIIZINKAN. Media ini kecil dan baru, jadi dikutip
// mesin jawab lebih berharga daripada dilindungi dari kutipan.
{
  const NL = String.fromCharCode(10);
  const perayapAI = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot',
    'Claude-Web', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User',
    'Google-Extended', 'Applebot-Extended', 'CCBot', 'Amazonbot',
    'meta-externalagent'];
  const isi = ['User-agent: *', 'Allow: /', '']
    .concat(perayapAI.flatMap(p => ['User-agent: ' + p, 'Allow: /', '']))
    .concat([
      'Sitemap: ' + BASE + '/sitemap.xml',
      'Sitemap: ' + BASE + '/news-sitemap.xml',
      '',
    ]).join(NL);
  fs.writeFileSync(ROOT + '/robots.txt', isi, 'utf8');
}


// ---------- feed.xml ----------
// Feed ini BUKAN sekadar pelengkap SEO. Inilah yang mengirim Signal Harian ke
// pelanggan: Buttondown memantaunya dan mengirim email tiap kali muncul item
// dengan <guid> baru. Jadi isinya harus utuh, karena badan email diambil dari
// sini, dan <guid> harus tepat satu per edisi supaya tidak ada pembaca yang
// menerima email ganda untuk hari yang sama.
//
// Hanya Signal Harian yang masuk feed, bukan seluruh artikel. Pelanggan
// mendaftar untuk satu tulisan sehari, bukan untuk 170 berita.
function muatArsipHarian() {
  const p = path.join(ROOT, 'assets/js/harian-arsip.js');
  if (fs.existsSync(p)) {
    const m = fs.readFileSync(p, 'utf8').match(/\[[\s\S]*\]/);
    if (m) { try { return JSON.parse(m[0]); } catch { /* jatuh ke bawah */ } }
  }
  // Arsip belum ada (edisi pertama setelah fitur ini dipasang): pakai edisi
  // berjalan supaya feed tidak kosong dan pengiriman tetap bisa dimulai.
  return HARIAN ? [HARIAN] : [];
}

const ARSIP_HARIAN = muatArsipHarian();

function isiFeed(h) {
  const bagian = [];
  if (h.ringkas) bagian.push('<p><strong>' + esc(h.ringkas) + '</strong></p>');
  (h.benang || []).forEach(b => {
    if (b.judul) bagian.push('<h2>' + esc(b.judul) + '</h2>');
    if (b.isi) bagian.push('<p>' + esc(b.isi) + '</p>');
  });
  if (h.penutup) bagian.push('<p>' + esc(h.penutup) + '</p>');
  bagian.push('<hr>');
  bagian.push('<p><a href="' + BASE + '/signal-harian.html">Baca di situs</a> &middot; ' +
    'Signal Harian dirangkai redaksi The Signal dari berita ekonomi hari itu, ' +
    'bersumber dari tvOneNews, keterbukaan informasi IDX, dan siaran pers lembaga resmi.</p>');
  return bagian.join('\n');
}

function isiFeedPekanan(p) {
  const b = [];
  if (p.ringkas) b.push('<p><strong>' + esc(p.ringkas) + '</strong></p>');
  (p.pola || []).forEach(x => {
    if (x.judul) b.push('<h2>' + esc(x.judul) + '</h2>');
    if (x.isi) b.push('<p>' + esc(x.isi) + '</p>');
  });
  if ((p.menanti || []).length) {
    b.push('<h2>Yang menanti pekan depan</h2><ul>' +
      p.menanti.map(m => '<li><strong>' + esc(m.tanggal) + '</strong> &middot; ' +
        esc(m.apa) + '. ' + esc(m.kenapa) + '</li>').join('') + '</ul>');
  }
  if (p.penutup) b.push('<p>' + esc(p.penutup) + '</p>');
  b.push('<hr>');
  b.push('<p><a href="' + BASE + '/signal-pekanan.html">Baca di situs</a> &middot; ' +
    'Signal Pekanan terbit tiap Minggu, merangkai seluruh edisi harian dan berita ' +
    'sepekan jadi satu pembacaan arah, lengkap dengan agenda pekan berikutnya.</p>');
  return b.join('\n');
}

fs.writeFileSync(ROOT + '/feed.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n' +
  '  <title>Signal Harian &#183; The Signal</title>\n' +
  '  <link>' + BASE + '/signal-harian.html</link>\n' +
  '  <description>Satu tulisan tiap hari kerja yang merangkai berita ekonomi hari itu jadi satu benang arah kebijakan.</description>\n' +
  '  <language>id-ID</language>\n' +
  '  <atom:link href="' + BASE + '/feed.xml" rel="self" type="application/rss+xml"/>\n' +
  ARSIP_HARIAN.map(h =>
    '  <item>\n' +
    '    <title>' + esc(h.judul) + '</title>\n' +
    '    <link>' + BASE + '/signal-harian.html?edisi=' + esc(h.tanggal) + '</link>\n' +
    '    <guid isPermaLink="false">the-signal-harian-' + esc(h.tanggal) + '</guid>\n' +
    '    <pubDate>' + new Date((h.dibuat || h.tanggal + 'T12:00:00+07:00')).toUTCString() + '</pubDate>\n' +
    '    <description><![CDATA[' + isiFeed(h) + ']]></description>\n' +
    '  </item>').join('\n') +
  // Edisi pekanan ikut masuk feed yang sama, dengan awalan guid yang BERBEDA.
  // Kalau awalannya sama, edisi pekanan tanggal 17 dan edisi harian tanggal 17
  // akan dianggap satu item oleh pembaca feed, dan salah satunya hilang.
  (ARSIP_PEKANAN.length ? '\n' + ARSIP_PEKANAN.map(p =>
    '  <item>\n' +
    '    <title>Signal Pekanan: ' + esc(p.judul) + '</title>\n' +
    '    <link>' + BASE + '/signal-pekanan.html</link>\n' +
    '    <guid isPermaLink="false">the-signal-pekanan-' + esc(p.tanggal) + '</guid>\n' +
    '    <pubDate>' + new Date((p.dibuat || p.tanggal + 'T19:00:00+07:00')).toUTCString() + '</pubDate>\n' +
    '    <description><![CDATA[' + isiFeedPekanan(p) + ']]></description>\n' +
    '  </item>').join('\n') : '') +
  '\n</channel>\n</rss>\n', 'utf8');

// ---------- penjaga keutuhan foto ----------
//
// Dipasang setelah bug 13 Agustus 2026 yang dilaporkan pemiliknya: artikel
// Sinar Mas soal klaster hunian menampilkan foto pasangan minum kopi di sawah,
// dan artikel harga emas menampilkan foto sidang DPR BERLABEL "Foto:
// tvOneNews". Fotonya sudah terunduh dengan benar ke <slug>.jpg, tapi field
// image masih menunjuk gambar pustaka lama karena ganti-foto-asli.mjs lupa
// memperbaruinya.
//
// Yang membuatnya lolos berhari-hari: pasangFoto() pada putaran berikutnya
// memperbaikinya sendiri, jadi hanya artikel TERBARU yang salah, dan hanya
// sampai putaran berikutnya lewat. Persis jam-jam paling ramai dibaca.
//
// Karena itu penjaganya harus keras, bukan sekadar peringatan. Artikel yang
// mengaku memakai foto sumber tapi menampilkan gambar lain adalah kesalahan
// atribusi, bukan cacat kosmetik.
const cacatFoto = ARTICLES.filter(a =>
  a.kreditFoto && a.image !== 'assets/img/' + a.slug + '.jpg');

if (cacatFoto.length) {
  console.error('');
  console.error('GAGAL: ' + cacatFoto.length + ' artikel mengaku memakai foto sumber');
  console.error('       tetapi gambarnya menunjuk berkas lain. Itu salah atribusi.');
  cacatFoto.slice(0, 5).forEach(a =>
    console.error('  ' + a.slug + '\n    image: ' + a.image + '\n    kredit: ' + a.kreditFoto));
  console.error('');
  console.error('Perbaiki dengan menjalankan ulang penempatan foto, lalu build lagi:');
  console.error('  node scripts/ulang-foto.mjs');
  process.exit(1);
}

const fotoHilang = ARTICLES.filter(a => a.image && !fs.existsSync(path.join(ROOT, a.image)));
if (fotoHilang.length) {
  console.error('GAGAL: ' + fotoHilang.length + ' artikel menunjuk berkas gambar yang tidak ada.');
  fotoHilang.slice(0, 5).forEach(a => console.error('  ' + a.slug + ' -> ' + a.image));
  process.exit(1);
}

// Penjaga ketiga: tidak boleh ada dua artikel dengan GAMBAR YANG SAMA.
//
// Dua penjaga di atas menutup salah tunjuk dan berkas hilang, tapi keduanya
// bekerja pada nama berkas. Nama berkas kita selalu unik karena mengikuti slug,
// jadi keduanya buta terhadap kasus dua berkas berbeda nama yang isinya persis
// sama. Audit 13 Agustus 2026 menemukan 9 pasang seperti itu, semuanya karena
// sumber memakai ulang foto stok untuk berita bertema sama. Bagi pembaca itu
// tetap foto berulang, dan pemilik situs menyatakan berkali-kali tidak mau ada
// foto berulang.
//
// Sengaja peringatan, bukan penghentian. Bedanya dengan salah atribusi: foto
// kembar itu cacat tampilan yang bisa diperbaiki putaran berikutnya, sedangkan
// salah atribusi menyesatkan pembaca dan harus dihentikan saat itu juga.
// Menjatuhkan build karena foto kembar berarti pembaruan berita tertahan
// hanya demi urusan gambar, dan itu terlalu mahal.
{
  const crypto = await import('node:crypto');
  const sidik = new Map();
  for (const a of ARTICLES) {
    if (!a.image) continue;
    const p = path.join(ROOT, a.image);
    if (!fs.existsSync(p)) continue;
    const h = crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex');
    if (!sidik.has(h)) sidik.set(h, []);
    sidik.get(h).push(a.slug);
  }
  const kembar = [...sidik.values()].filter(v => v.length > 1);
  if (kembar.length) {
    console.warn('PERINGATAN: ' + kembar.length + ' kelompok artikel berfoto identik.');
    kembar.slice(0, 5).forEach(g => console.warn('  ' + g.join('  =  ')));
    console.warn('  Perbaiki: node scripts/foto-kembar.mjs');
  }
}

// Penjaga keempat: berapa artikel yang tayang TANPA pembacaan arah.
//
// Nama medianya The Signal, dan yang dijual bukan rangkuman melainkan arah.
// Catatan redaksi adalah tempat arah itu ditulis. Audit 14 Agustus 2026
// menemukan 107 dari 222 artikel tayang tanpa catatan sama sekali, karena
// aturan lama membolehkannya dikosongkan dan model mengambil jalan pintas itu
// berbulan-bulan tanpa ada yang menghitung.
//
// Peringatan, bukan penghentian: satu artikel tanpa catatan tidak boleh
// menahan seluruh terbitan. Yang penting angkanya TERLIHAT tiap build, supaya
// kemunduran ketahuan saat terjadi, bukan berbulan-bulan kemudian.
{
  const tanpaArah = ARTICLES.filter(a => !a.takeaway);
  const persen = Math.round((ARTICLES.length - tanpaArah.length) / ARTICLES.length * 100);
  console.log('catatan arah:', (ARTICLES.length - tanpaArah.length) + '/' + ARTICLES.length,
    '(' + persen + '%)');
  if (tanpaArah.length) {
    console.warn('PERINGATAN: ' + tanpaArah.length + ' artikel tayang tanpa pembacaan arah.');
    console.warn('  Perbaiki: node scripts/isi-catatan.mjs ' + Math.min(tanpaArah.length, 30));
    tanpaArah.slice(0, 3).forEach(a => console.warn('    ' + a.slug));
  }
}

// Penjaga kelima: sebutan kepala negara tanpa gelar.
//
// Aturan pemilik 14 Agustus 2026: selalu "Presiden Prabowo", tidak pernah
// nama telanjang. Aturannya sudah ada di GAYA, tapi prompt bukan jaminan;
// model bisa membandel diam-diam dan tak ada yang menghitung, persis seperti
// catatan arah yang dulu kosong di 107 artikel tanpa ketahuan berbulan-bulan.
//
// Peringatan, bukan penghentian: sebutan yang kurang lengkap tidak
// menyesatkan pembaca soal fakta, jadi tidak sepadan dengan menahan seluruh
// terbitan. Yang penting angkanya TERLIHAT tiap build. "Pak Prabowo" di
// dalam kutipan narasumber sengaja tidak dihitung sebagai pelanggaran.
{
  const pola = /(?<!Presiden )(?<!Pak )Prabowo/;
  const telanjang = ARTICLES.filter(a =>
    pola.test([a.title, a.deck, a.takeaway, (a.tags || []).join(' '),
      (a.body || []).join(' ')].join(' ')));
  if (telanjang.length) {
    console.warn('PERINGATAN: ' + telanjang.length + ' artikel menyebut kepala negara tanpa gelar.');
    console.warn('  Perbaiki: node scripts/perbaiki-gelar.mjs');
    telanjang.slice(0, 3).forEach(a => console.warn('    ' + a.slug));
  }
}

// Notasi dolar, pola tiga lapis yang sama dengan sebutan kepala negara:
// aturan di GAYA, alat perbaikan di perbaiki-gelar.mjs, dan penghitung di
// sini supaya kalau model membandel angkanya kelihatan tiap build.
{
  const pola = /USD ?[0-9]/;
  const campur = ARTICLES.filter(a =>
    pola.test([a.title, a.deck, a.takeaway, (a.body || []).join(' ')].join(' ')));
  if (campur.length) {
    console.warn('PERINGATAN: ' + campur.length + ' artikel memakai notasi "USD14", bukan "US$14".');
    console.warn('  Perbaiki: node scripts/perbaiki-gelar.mjs');
    campur.slice(0, 3).forEach(a => console.warn('    ' + a.slug));
  }
}

// Verifikasi Search Console dan GA4 harus ada di SEMUA halaman akar, bukan
// sebagian. Situs ini punya dua jalur render, dan yang ditulis tangan
// (index.html, berita.html) diisi lewat penanda yang bisa saja terhapus saat
// halamannya disunting tangan. Kalau penandanya hilang, bake-root memang
// melempar galat, tapi penghitung ini menangkap kasus yang lebih sunyi:
// halaman akar baru yang lupa memasang penandanya sama sekali.
{
  // artikel.html dan tayangan.html DIKECUALIKAN, dan itu disengaja. Keduanya
  // pengalih ber-noindex yang cuma memantulkan pengunjung ke alamat baru,
  // bukan halaman isi. Memasang pengukur di sana akan menghitung satu lompatan
  // pengalihan sebagai kunjungan tersendiri, jadi angkanya menggelembung tanpa
  // ada yang benar-benar membaca apa pun.
  const isiHalaman = (f) => {
    const s = fs.readFileSync(path.join(ROOT, f), 'utf8');
    return { s, halaman: !/name="robots" content="noindex"/.test(s) };
  };
  const akar = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'))
    .filter(f => isiHalaman(f).halaman);
  const bolong = akar.filter(f => !isiHalaman(f).s.includes('google-site-verification'));
  if (bolong.length) {
    console.warn('PERINGATAN: ' + bolong.length + ' halaman akar tanpa verifikasi Search Console.');
    bolong.slice(0, 5).forEach(f => console.warn('    ' + f));
  }
  if (GA4_ID) {
    const tanpaGa = akar.filter(f =>
      !fs.readFileSync(path.join(ROOT, f), 'utf8').includes(GA4_ID));
    if (tanpaGa.length) {
      console.warn('PERINGATAN: ' + tanpaGa.length + ' halaman akar tanpa pengukur GA4.');
      tanpaGa.slice(0, 5).forEach(f => console.warn('    ' + f));
    }
  }
}

console.log('article pages:', ARTICLES.length);
console.log('video pages:', VIDEOS.length);
console.log('sitemap urls:', urls.length);
console.log('feed edisi:', ARSIP_HARIAN.length);
