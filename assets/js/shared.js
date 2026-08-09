(function () {
  window.TS = window.TS || {};

  TS.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  TS.hl = function (title) {
    return TS.esc(title).replace(/\[([^\]]+)\]/, '<span class="hl">$1</span>');
  };
  TS.plain = function (title) {
    return String(title).replace(/[\[\]]/g, '');
  };
  TS.catSlug = function (c) {
    return c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };
  TS.articleUrl = function (a) {
    return '/berita/' + a.slug + '.html';
  };

  TS.storyCard = function (a) {
    return '<article class="story-card">' +
      '<a href="' + TS.articleUrl(a) + '" class="story-art-link">' +
      '<div class="story-art" style="background-image:url(\'' + a.image + '\')"></div></a>' +
      '<div class="story-cat">' + TS.esc(a.category) + '</div>' +
      '<h3 class="story-title"><a class="story-title-link" href="' + TS.articleUrl(a) + '">' + TS.hl(a.title) + '</a></h3>' +
      '<p class="story-excerpt">' + TS.esc(a.deck) + '</p>' +
      '<div class="story-meta"><span class="num">' + TS.esc(a.date) + '</span>' +
      '<a href="' + TS.esc(a.sourceUrl) + '" target="_blank" rel="noopener">Sumber: tvOne</a></div>' +
      '</article>';
  };

  TS.compactRow = function (a, n) {
    return '<a class="compact-row" href="' + TS.articleUrl(a) + '">' +
      (n != null ? '<span class="compact-num num">' + (n < 10 ? '0' : '') + n + '</span>' : '') +
      '<span class="compact-body"><span class="compact-title">' + TS.hl(a.title) + '</span>' +
      '<span class="compact-meta">' + TS.esc(a.category) + ' &middot; ' + TS.esc(a.date) + '</span></span></a>';
  };

  TS.videoMeta = function (v) {
    return v.program === 'tvOneNews' ? 'tvOneNews' : 'tvOneNews &middot; ' + TS.esc(v.program);
  };
  TS.videoUrl = function (v) { return '/tayangan/' + v.id + '.html'; };

  TS.playIcon = function (size) {
    return '<span class="play-dot"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.55)"/>' +
      '<polygon points="10,7.5 10,16.5 17,12" fill="#fff"/></svg></span>';
  };

  // small video card (sidebar / homepage rail) -> links to detail page
  TS.videoCard = function (v) {
    return '<a class="video-card" href="' + TS.videoUrl(v) + '">' +
      '<span class="video-thumb"><img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
      TS.playIcon() + '</span>' +
      '<span class="video-card-body"><span class="video-card-title">' + TS.esc(v.title) + '</span>' +
      '<span class="video-card-meta">' + TS.videoMeta(v) + '</span></span></a>';
  };

  // big video card (video.html grid) -> links to detail page
  TS.videoPageCard = function (v) {
    return '<a class="video-page-card" href="' + TS.videoUrl(v) + '">' +
      '<span class="video-page-thumb"><img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
      TS.playIcon() + '</span>' +
      '<span class="story-cat">' + TS.esc(v.category) + '</span>' +
      '<span class="story-title" style="display:block;">' + TS.esc(v.title) + '</span>' +
      '<span class="video-summary" style="display:block;">' + TS.esc(v.summary) + '</span>' +
      '<span class="video-program"><span>' + TS.videoMeta(v) + '</span><span>Tonton &rarr;</span></span></a>';
  };

  // isi bar tanggal + indeks pasar dari market.js (kalau ada)
  TS.isiPasar = function () {
    if (typeof MARKET === "undefined" || !MARKET) return;
    var el = document.querySelector(".util-date");
    if (el && MARKET.tanggalWIB) el.innerHTML = MARKET.tanggalWIB;
    var box = document.querySelector(".util-index");
    if (!box) return;
    function baris(label, d) {
      if (!d) return "";
      return "<span>" + label + " <b>" + TS.esc(d.nilai) + "</b> <span class=\"" +
        (d.naik ? "up" : "down") + "\">" + TS.esc(d.delta) + "</span></span>";
    }
    var html = [baris("IHSG", MARKET.ihsg), baris("USD/IDR", MARKET.usdidr),
      baris("Emas (spot)", MARKET.emas)].filter(Boolean).join("");
    if (html) box.innerHTML = html;
  };

  // shared subscribe modal wiring
  TS.initModal = function () {
    var backdrop = document.getElementById('modal-backdrop');
    if (!backdrop) return;
    var modal = document.getElementById('modal');
    var close = document.getElementById('modal-close');
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-open-subscribe]')) { backdrop.classList.add('open'); }
    });
    if (close) close.addEventListener('click', function () { backdrop.classList.remove('open'); });
    backdrop.addEventListener('click', function (e) { if (e.target === backdrop) backdrop.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') backdrop.classList.remove('open'); });
    var form = document.getElementById('subscribe-form');
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); modal.classList.add('success'); });
  };

})();
