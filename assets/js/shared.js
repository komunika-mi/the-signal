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

  // URL gambar berikut penanda versinya.
  //
  // Berkas foto ditimpa dengan NAMA YANG SAMA ketika ilustrasi diganti foto
  // asli, sedangkan aset gambar disetel cache tujuh hari di vercel.json. Tanpa
  // penanda ini, pembaca yang sudah pernah membuka halaman tetap melihat
  // gambar lama sampai sepekan, dan dari sisi mereka situsnya terlihat tidak
  // pernah diperbaiki.
  TS.gambar = function (a) {
    return a.image + (a.imageV ? '?v=' + a.imageV : '');
  };

  // Penanda gambar HANYA menyebut AI kalau gambarnya memang buatan.
  //
  // Dulu tiap kartu dilabeli "Ilustrasi AI" tanpa syarat, jadi setelah 135 dari
  // 185 artikel memakai foto asli dari tvOneNews dan Kemendag, seluruh situs
  // tetap terlihat serba buatan. Keliru dua arah: merendahkan foto dokumentasi
  // yang sungguhan, sekaligus membuat labelnya kehilangan arti karena semua
  // gambar dilabeli sama. Label yang selalu menyala sama saja dengan tidak ada.
  TS.storyCard = function (a) {
    return '<article class="story-card">' +
      // ai-wrap dipertahankan apa pun jenis gambarnya: kelasnya cuma
      // position:relative, dan penanda foto asli butuh itu untuk menempel.
      '<a href="' + TS.articleUrl(a) + '" class="story-art-link ai-wrap">' +
      // <img> sungguhan, bukan background-image: bisa lazy-load, punya teks
      // alternatif, dan sekaligus memberi nama pada tautannya (dulu pembaca
      // layar cuma mendengar "Ilustrasi AI" sebagai nama tautan gambar).
      // Penanda versi TS.gambar ikut supaya foto yang menimpa berkas lama
      // tidak tertahan cache tujuh hari di browser pembaca.
      // KEMBAR dengan kartuCerita di scripts/bake-root.mjs - ubah bersama.
      '<div class="story-art"><img src="' + TS.gambar(a) + '" alt="' + TS.esc(TS.plain(a.title)) + '" loading="lazy"></div>' +
      (a.kreditFoto
        ? '<span class="foto-tag" style="font-size:9px;padding:2px 7px;">Foto: ' + TS.esc(a.kreditFoto) + '</span>'
        : '<span class="ai-tag">Ilustrasi AI</span>') + '</a>' +
      '<div class="story-cat">' + TS.esc(a.category) + '</div>' +
      '<h3 class="story-title"><a class="story-title-link" href="' + TS.articleUrl(a) + '">' + TS.hl(a.title) + '</a></h3>' +
      '<p class="story-excerpt">' + TS.esc(a.deck) + '</p>' +
      '<div class="story-meta"><span class="num">' + TS.esc(a.date) + '</span>' +
      '<a href="' + TS.esc(a.sourceUrl) + '" target="_blank" rel="noopener">' +
      (a.sourceLabel === 'IDX' ? 'Sumber: IDX' : a.sourceLabel ? 'Sumber: ' + TS.esc(a.sourceLabel) : 'Sumber: tvOne') + '</a></div>' +
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

  // ---------- kotak "dari mana berita ini datang" ----------
  //
  // DIHITUNG dari data, bukan ditulis tangan. Alasannya pahit: kalimat versi
  // tulis tangan pernah berbunyi "seluruh berita di sini dirangkum ulang dari
  // tvOneNews" dan bertahan begitu sampai seperempat arsip berasal dari IDX
  // dan puluhan artikel dari BI, BPS, Kemendag, serta Kemenperin. Klaim di
  // halaman depan berubah jadi tidak benar tanpa ada yang menyadarinya.
  //
  // Selama daftarnya ditulis manual, ia pasti tertinggal lagi setiap kali
  // sumber baru masuk. Jadi sumbernya dibaca langsung dari sourceLabel tiap
  // artikel. Sumber baru muncul sendiri di kalimat ini tanpa siapa pun perlu
  // ingat memperbaruinya.
  var SINGKAT = {
    'Badan Pusat Statistik': 'BPS',
    'Kementerian Perdagangan': 'Kemendag',
    'Kementerian Perindustrian': 'Kemenperin',
    'Kementerian Keuangan': 'Kemenkeu',
    'Kementerian Energi dan Sumber Daya Mineral': 'ESDM',
  };

  // Kata sambung penutup bisa dipilih supaya daftar bersarang tidak memakai
  // kata yang sama dua kali dalam satu kalimat. Daftar luar pakai "dan",
  // daftar lembaga di dalamnya pakai "serta". Tanpa pemisahan ini kalimatnya
  // berbunyi "..., serta siaran pers resmi Kemendag, Bank Indonesia, serta
  // BPS", dan itu janggal dibaca.
  function gabungDaftar(arr, penutup) {
    penutup = penutup || 'dan';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr[0] + ' ' + penutup + ' ' + arr[1];
    return arr.slice(0, -1).join(', ') + ', ' + penutup + ' ' + arr[arr.length - 1];
  }

  TS.isiSumber = function () {
    var el = document.getElementById('sumber-ringkas');
    if (!el || typeof ARTICLES === 'undefined' || !ARTICLES.length) return;

    var adaTvOne = false, adaIdx = false, lembaga = {};
    ARTICLES.forEach(function (a) {
      var s = a.sourceLabel;
      if (!s) { adaTvOne = true; return; }
      if (s === 'IDX') { adaIdx = true; return; }
      lembaga[s] = (lembaga[s] || 0) + 1;
    });

    // Lembaga diurut dari yang paling sering, supaya yang paling mewakili isi
    // situs disebut lebih dulu.
    var namaLembaga = Object.keys(lembaga)
      .sort(function (x, y) { return lembaga[y] - lembaga[x]; })
      .map(function (n) { return SINGKAT[n] || n; });

    var bagian = [];
    if (adaTvOne) bagian.push('liputan ekonomi tvOneNews');
    if (adaIdx) bagian.push('keterbukaan informasi emiten di Bursa Efek Indonesia');
    if (namaLembaga.length) bagian.push('siaran pers resmi ' + gabungDaftar(namaLembaga, 'serta'));
    if (!bagian.length) return;                 // biarkan teks cadangan

    el.textContent = 'Redaksi The Signal merangkum dari ' + gabungDaftar(bagian, 'dan') +
      '. Tiap artikel menyertakan tautan ke berita atau dokumen aslinya.';
  };

  // kartu pasar di rail beranda
  TS.isiKartuPasar = function () {
    var box = document.getElementById("ticker-grid");
    if (!box || typeof MARKET === "undefined" || !MARKET) return;
    function spark(naik) {
      var pts = naik ? "1,15 8,12 15,13 22,8 29,10 36,4 43,6"
                     : "1,4 8,6 15,5 22,9 29,7 36,11 43,10";
      var warna = naik ? "var(--green)" : "var(--red)";
      return '<svg class="spark-mini" viewBox="0 0 44 18"><polyline points="' + pts +
        '" fill="none" stroke="' + warna + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    function sel(d, nama) {
      if (!d) return "";
      return '<div class="ticker-cell"><div class="ticker-top">' + spark(d.naik) +
        '<span class="pill ' + (d.naik ? "up" : "down") + '">' + TS.esc(d.delta) + '</span></div>' +
        '<div class="ticker-value num">' + TS.esc(d.nilai) + '</div>' +
        '<div class="ticker-name">' + nama + '</div></div>';
    }
    var html = sel(MARKET.ihsg, "IHSG") + sel(MARKET.usdidr, "USD/IDR") +
               sel(MARKET.emas, "Emas (spot) / gr") + sel(MARKET.btc, "Bitcoin / IDR");
    if (html) box.innerHTML = html;
  };

  // ---------- pendaftaran Signal Harian ----------
  //
  // SATU-SATUNYA tempat mengaktifkan pendaftaran. Isi dengan username
  // Buttondown, lalu formnya muncul sendiri di semua halaman.
  //
  //   TS.BUTTONDOWN = 'the-signal';
  //
  // Selama masih kosong, modal menampilkan keterangan jujur bahwa pendaftaran
  // belum dibuka, dan TIDAK ada kolom email sama sekali.
  //
  // Ini disengaja, bukan kehati-hatian berlebihan. Versi lama situs ini punya
  // form yang memanggil preventDefault() lalu langsung menampilkan "berhasil
  // berlangganan" padahal emailnya tidak dikirim ke mana pun dan lenyap saat
  // halaman ditutup. Pengunjung menunggu email yang tidak akan pernah datang.
  // Jangan pernah menyalakan form sebelum penerimanya benar-benar ada.
  //
  // Aktif sejak 12 Agustus 2026. Penerimanya akun Buttondown "The Signal",
  // halaman publiknya https://buttondown.com/the-signal. Pendaftar wajib menekan
  // tautan konfirmasi di email sebelum benar-benar terdaftar. Situs ini sendiri
  // tidak menampilkan pesan sukses apa pun: formulirnya dikirim ke jendela
  // terpisah dan halaman Buttondown yang mengabarkan hasilnya, sehingga tidak
  // mungkin lagi mengaku berhasil padahal server belum menjawab.
  // NILAI INI HARUS SAMA PERSIS dengan Username di Buttondown Settings > General.
  // Kalau username di sana diubah, form di situs ini langsung mengirim ke alamat
  // yang tidak ada lagi dan pendaftaran gagal diam-diam. Ubah keduanya bersamaan.
  TS.BUTTONDOWN = 'the-signal';

  TS.initModal = function () {
    var backdrop = document.getElementById('modal-backdrop');
    if (!backdrop) return;
    var close = document.getElementById('modal-close');
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-open-subscribe]')) { backdrop.classList.add('open'); }
    });
    if (close) close.addEventListener('click', function () { backdrop.classList.remove('open'); });
    backdrop.addEventListener('click', function (e) { if (e.target === backdrop) backdrop.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') backdrop.classList.remove('open'); });

    if (!TS.BUTTONDOWN) return;         // penerima belum ada, biarkan apa adanya

    var isi = document.getElementById('modal-isi');
    if (!isi) return;
    var aksi = 'https://buttondown.com/api/emails/embed-subscribe/' + TS.BUTTONDOWN;
    // Form Buttondown mengirim langsung ke server mereka, jadi situs statis ini
    // tidak perlu backend. Konsekuensinya email pembaca tersimpan di Buttondown,
    // dan itu wajib disebutkan.
    isi.innerHTML =
      '<h3>Langganan Signal Harian</h3>' +
      '<p>Satu tulisan tiap malam hari kerja yang menjawab ke mana ekonomi ' +
      'bergerak hari itu, dan apa yang akan menentukan arahnya. Pelanggan juga ' +
      'dapat angka pembanding yang tidak dimuat di situs. Gratis.</p>' +
      '<form action="' + aksi + '" method="post" target="popupwindow" class="form-langganan">' +
      '<input type="email" name="email" placeholder="Alamat email kamu" required aria-label="Alamat email">' +
      '<input type="hidden" name="embed" value="1">' +
      '<button class="btn-modal-submit" type="submit">Daftar gratis</button>' +
      '</form>' +
      // Calon pelanggan berhak melihat barangnya sebelum menyerahkan email.
      // Temuan audit: modal lama tidak menautkan apa pun, jadi satu-satunya
      // cara menilai isinya adalah mendaftar dulu. Itu urutan yang terbalik.
      '<p class="modal-contoh">Mau lihat dulu isinya? ' +
      '<a href="/signal-harian.html">Baca edisi terbaru</a> atau ' +
      '<a href="https://buttondown.com/the-signal/archive" target="_blank" rel="noopener">arsip semua edisi</a>.</p>' +
      '<p class="modal-privasi">Setelah mendaftar, kami kirim satu email berisi tautan ' +
      'konfirmasi. Langganan baru aktif kalau tautan itu kamu klik. Email kamu dikelola ' +
      'lewat Buttondown dan hanya dipakai untuk mengirim Signal Harian. Bisa berhenti ' +
      'kapan saja lewat tautan di tiap email.</p>';

    // Umpan balik pasca-submit. Form mengirim ke Buttondown di tab lain, jadi
    // tab ini dulu diam saja: modal tetap terbuka, email masih terisi, tombol
    // bisa diklik lagi. Pendaftar tidak tahu harus berbuat apa, padahal
    // langkah penentunya (klik tautan konfirmasi di email) justru belum
    // dikerjakan. Sekarang isi modal berganti jadi pengarah ke langkah itu.
    var form = isi.querySelector('.form-langganan');
    if (form) form.addEventListener('submit', function () {
      var email = (form.querySelector('input[type="email"]') || {}).value || '';
      setTimeout(function () {
        // JANGAN mengaku email sudah terkirim. Tab ini tidak tahu apa-apa.
        //
        // Form dikirim ke Buttondown di jendela lain, dan tab ini tidak pernah
        // melihat jawabannya. Versi pertama pesan ini berbunyi "Kami baru saja
        // mengirim email konfirmasi ke <alamat>", padahal audit 14 Agustus 2026
        // menguji endpoint itu dengan tiga cara dan KETIGANYA dijawab HTTP 400
        // berisi halaman verifikasi Cloudflare Turnstile, bukan pendaftaran
        // yang selesai. Jadi pendaftar disuruh menunggu email yang memang belum
        // dikirim, lalu menyalahkan folder spam-nya sendiri.
        //
        // Yang jujur: arahkan ke jendela yang benar-benar terbuka dan sebut
        // verifikasinya. Kalimat ini tetap benar baik ketika Buttondown minta
        // verifikasi maupun ketika langsung lolos.
        isi.innerHTML =
          '<h3>Lanjutkan di jendela sebelah</h3>' +
          '<p>Pendaftaran' +
          (email ? ' untuk <strong>' + TS.esc(email) + '</strong>' : '') +
          ' diteruskan ke halaman Buttondown yang baru terbuka. Selesaikan verifikasi ' +
          'singkat di sana, lalu email konfirmasi dikirim ke kotak masukmu. Langganan ' +
          'aktif setelah tautan di email itu diklik.</p>' +
          '<p class="modal-privasi">Jendelanya tidak muncul? Peramban mungkin memblokirnya. ' +
          'Daftar langsung lewat <a href="https://buttondown.com/the-signal" target="_blank" rel="noopener">halaman Buttondown kami</a>.</p>' +
          '<button class="btn-modal-submit" type="button" id="modal-selesai">Selesai</button>';
        var selesai = document.getElementById('modal-selesai');
        if (selesai) selesai.addEventListener('click', function () {
          backdrop.classList.remove('open');
          TS.initModal && isiUlang();
        });
      }, 150);
    });

    // Mengembalikan form setelah alur selesai, supaya pendaftar kedua di
    // perangkat yang sama tidak mewarisi layar "satu langkah lagi".
    function isiUlang() { TS.initModal(); }
  };

})();
