// Generate static per-article and per-video pages with real OG tags,
// so WhatsApp / Facebook / X previews show that item's own photo.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://the-signal-sandy.vercel.app';

function muat(file) {
  const src = fs.readFileSync(path.join(ROOT, 'assets/js', file), 'utf8');
  const i = src.indexOf('['), j = src.lastIndexOf(']');
  return JSON.parse(src.slice(i, j + 1));
}
const ARTICLES = muat('articles.js');
const VIDEOS = muat('videos.js');
function muatPasar() {
  const p = path.join(ROOT, 'assets/js', 'market.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  const i = src.indexOf('{'), j = src.lastIndexOf('}');
  try { return JSON.parse(src.slice(i, j + 1)); } catch { return null; }
}
const MARKET = muatPasar();

import crypto from 'node:crypto';
function hashAset() {
  const berkas = ['assets/css/style.css', 'assets/js/shared.js',
    'assets/js/articles.js', 'assets/js/videos.js', 'assets/js/market.js'];
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
function articleUrl(a) { return '/berita/' + a.slug + '.html'; }
function videoUrl(v) { return '/tayangan/' + v.id + '.html'; }
function videoMeta(v) { return v.program === 'tvOneNews' ? 'tvOneNews' : 'tvOneNews &middot; ' + esc(v.program); }
const PLAY = '<span class="play-dot"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.55)"/><polygon points="10,7.5 10,16.5 17,12" fill="#fff"/></svg></span>';

const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
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

function head(o) {
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)} · The Signal</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${BASE}${o.url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<meta property="og:type" content="${o.ogType}">
<meta property="og:site_name" content="The Signal">
<meta property="og:locale" content="id_ID">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.desc)}">
<meta property="og:image" content="${o.image}">
<meta property="og:image:secure_url" content="${o.image}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="${o.imgW}">
<meta property="og:image:height" content="${o.imgH}">
<meta property="og:image:alt" content="${esc(o.title)}">
<meta property="og:url" content="${BASE}${o.url}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(o.title)}">
<meta name="twitter:description" content="${esc(o.desc)}">
<meta name="twitter:image" content="${o.image}">
<link rel="stylesheet" href="/assets/css/style.css?v=${VER}">
${o.jsonld ? '<script type="application/ld+json">' + JSON.stringify(o.jsonld) + '</script>' : ''}
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
        <a class="nav-link" href="/berita.html">Semua Berita</a>
        <a class="nav-link" href="/berita.html#kat=makroekonomi">Makro</a>
        <a class="nav-link" href="/berita.html#kat=pasar-modal">Pasar Modal</a>
        <a class="nav-link" href="/berita.html#kat=perbankan">Perbankan</a>
        <a class="nav-link" href="/berita.html#kat=energi">Energi</a>
        <a class="nav-link${o.navVideo ? ' active' : ''}" href="/video.html">Video</a>
      </nav>
      <div class="brand">
        <a class="logo" href="/index.html">The Signal</a>
        <span class="logo-tag">Berita &amp; Analisis Ekonomi</span>
      </div>
      <div class="masthead-actions">
        <button class="btn-subscribe" type="button" data-open-subscribe>Berlangganan
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
        <p>Liputan dan analisis ekonomi Indonesia, dari kebijakan moneter sampai dompet rumah tangga. Berita dirangkum dari tvOneNews.</p>
      </div>
      <div class="footer-col">
        <h4>Rubrik</h4>
        <ul>
          <li><a href="/berita.html#kat=makroekonomi">Makroekonomi</a></li>
          <li><a href="/berita.html#kat=pasar-modal">Pasar Modal</a></li>
          <li><a href="/berita.html#kat=perbankan">Perbankan</a></li>
          <li><a href="/berita.html#kat=energi">Energi</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>The Signal</h4>
        <ul>
          <li><a href="/index.html">Beranda</a></li>
          <li><a href="/berita.html">Semua Berita</a></li>
          <li><a href="/video.html">Video</a></li>
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
      <span>&copy; 2026 The Signal. Berita dirangkum dari tvOneNews.com dengan tautan sumber.</span>
      <span>Data pasar ilustratif</span>
    </div>
  </footer>

</div>

<div class="modal-backdrop" id="modal-backdrop">
  <div class="modal" id="modal">
    <button class="modal-close" type="button" id="modal-close" aria-label="Tutup">
      <svg width="13" height="13" viewBox="0 0 16 16"><path d="M2 2l12 12M14 2 2 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
    <h3>Berlangganan Signal+</h3>
    <p>Ringkasan ekonomi pagi, langsung ke email kamu, tiap hari kerja. Gratis selama masa pratinjau.</p>
    <form id="subscribe-form">
      <input type="email" required placeholder="Alamat email kamu" aria-label="Alamat email">
      <button class="btn-modal-submit" type="submit">Berlangganan</button>
    </form>
    <p class="modal-success" id="modal-success">Terima kasih! Cek email kamu untuk konfirmasi berlangganan.</p>
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
  const sameCat = ARTICLES.filter(x => x.slug !== a.slug && x.category === a.category);
  const others = ARTICLES.filter(x => x.slug !== a.slug && x.category !== a.category);
  const related = sameCat.concat(others).slice(0, 4);

  const relatedHtml = related.map(x =>
    `<a class="related-card" href="${articleUrl(x)}">` +
    `<div class="related-thumb" style="background-image:url('/${x.image}')"></div>` +
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
    imgW: 760, imgH: 570,
    ogType: 'article',
    jsonld: {
      '@context': 'https://schema.org', '@type': 'NewsArticle',
      headline: plain(a.title), description: a.deck,
      image: [BASE + '/' + a.image],
      articleSection: a.category, inLanguage: 'id-ID',
      publisher: { '@type': 'Organization', name: 'The Signal' },
      isBasedOn: a.sourceUrl,
    },
  }) +
    `<div class="rail breadcrumb"><a href="/index.html">Beranda</a> &rsaquo; <a href="/berita.html#kat=${catSlug(a.category)}">${esc(a.category)}</a> &rsaquo; Artikel</div>` +
    `<section class="rail article-hero">` +
    `<span class="eyebrow"><a href="/berita.html#kat=${catSlug(a.category)}">${esc(a.category)}</a></span>` +
    `<h1 class="article-title">${hl(a.title)}</h1>` +
    `<p class="article-deck">${esc(a.deck)}</p>` +
    `<div class="hero-meta" style="border-top:none;padding-top:0;margin-top:1rem;">` +
    `<span class="num">${esc(a.date)}</span><span>${a.sourceLabel === 'IDX'
      ? 'Sumber: <strong>Keterbukaan Informasi IDX</strong>'
      : 'Dirangkum dari <strong>tvOneNews</strong>'}</span></div>` +
    `</section>` +
    `<div class="rail article-layout"><div class="article-main">` +
    `<div class="article-cover" style="background-image:url('/${a.image}')"></div>` +
    `<div class="article-body">${a.body.map(p => '<p>' + esc(p) + '</p>').join('')}</div>` +
    (a.takeaway ? `<div class="video-takeaway catatan-idx" style="max-width:68ch;"><b>Catatan redaksi</b>${esc(a.takeaway)}</div>` : '') +
    videoHtml +
    `<div class="article-tags">${a.tags.map(t => '<span class="article-tag">' + esc(t) + '</span>').join('')}</div>` +
    `<div class="article-source-box"><p>${a.sourceLabel === 'IDX'
      ? 'Berita ini disusun redaksi The Signal dari keterbukaan informasi resmi yang disampaikan emiten ke Bursa Efek Indonesia. Catatan redaksi bersifat penjelasan, bukan rekomendasi investasi.'
      : 'Artikel ini rangkuman editorial The Signal dari liputan tvOneNews, bukan salinan langsung. Untuk versi lengkap dan mutakhir, baca artikel aslinya.'}</p>` +
    `<a href="${esc(a.sourceUrl)}" target="_blank" rel="noopener">${a.sourceLabel === 'IDX' ? 'Lihat dokumen resmi di IDX &rarr;' : 'Baca artikel asli di tvOneNews &rarr;'}</a></div>` +
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
    jsonld: {
      '@context': 'https://schema.org', '@type': 'VideoObject',
      name: v.title, description: v.summary,
      thumbnailUrl: ['https://i.ytimg.com/vi/' + v.id + '/maxresdefault.jpg'],
      embedUrl: 'https://www.youtube.com/embed/' + v.id, inLanguage: 'id-ID',
    },
  }) +
    `<div class="rail breadcrumb"><a href="/index.html">Beranda</a> &rsaquo; <a href="/video.html">Video</a> &rsaquo; Tayangan</div>` +
    `<section class="rail article-hero">` +
    `<span class="eyebrow">${videoMeta(v)}</span>` +
    `<h1 class="article-title">${esc(v.title)}</h1>` +
    `<p class="article-deck">${esc(v.summary)}</p></section>` +
    `<div class="rail article-layout"><div class="article-main">` +
    `<div class="article-video" style="margin-top:0;"><div class="video-frame">` +
    `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}" title="${esc(v.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` +
    `<div class="article-video-caption">Sumber tayangan: kanal YouTube resmi tvOneNews</div></div>` +
    `<div class="article-body" style="margin-top:1.8rem;"><p>${esc(v.summary)}</p></div>` +
    `<div class="video-takeaway" style="max-width:68ch;"><b>Catatan redaksi</b>${esc(v.takeaway)}</div>` +
    `<div class="article-tags"><span class="article-tag">${esc(v.category)}</span>` +
    `<span class="article-tag">${esc(v.program)}</span><span class="article-tag">Video</span></div>` +
    `<div class="article-source-box"><p>Tayangan ini di-embed langsung dari kanal YouTube resmi tvOneNews. Ringkasan dan catatan redaksi ditulis tim The Signal, bukan transkrip resmi.</p>` +
    `<a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Tonton di YouTube tvOneNews &rarr;</a></div>` +
    `</div><aside class="article-side">${KARTU_PASAR}<h4>Tayangan Lain</h4>${relatedHtml}${relArticlesHtml}</aside></div>` + FOOT;

  fs.writeFileSync(ROOT + '/tayangan/' + v.id + '.html', html, 'utf8');
});

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
if (yatimBerita || yatimVideo) {
  console.log("halaman lama dihapus: " + yatimBerita + " berita, " + yatimVideo + " video");
}

// ---------- pasang versi aset di halaman root ----------
// index/berita/video ditulis tangan, jadi tag <script>/<link>-nya tidak ikut
// diberi ?v= otomatis. Tanpa ini beranda bisa memuat shared.js lama dari
// cache sehingga bagian yang dirender JS (kartu pasar) tampak kosong.
function versiHalamanRoot() {
  for (const f of ['index.html', 'berita.html', 'video.html']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    let h = fs.readFileSync(p, 'utf8');
    const sebelum = h;
    h = h.replace(/(assets\/(?:css|js)\/[a-z-]+\.(?:css|js))(\?v=[a-f0-9]+)?/g, '$1?v=' + VER);
    if (h !== sebelum) fs.writeFileSync(p, h, 'utf8');
  }
}
versiHalamanRoot();

// ---------- sitemap ----------
const urls = ['/', '/berita.html', '/video.html']
  .concat(ARTICLES.map(articleUrl))
  .concat(VIDEOS.map(videoUrl));
fs.writeFileSync(ROOT + '/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => '  <url><loc>' + BASE + u + '</loc></url>').join('\n') + '\n</urlset>\n', 'utf8');
fs.writeFileSync(ROOT + '/robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: ' + BASE + '/sitemap.xml\n', 'utf8');

console.log('article pages:', ARTICLES.length);
console.log('video pages:', VIDEOS.length);
console.log('sitemap urls:', urls.length);
