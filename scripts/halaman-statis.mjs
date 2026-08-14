// Empat halaman wajib media: Tentang, Kontak & Koreksi, Kebijakan Privasi,
// dan Pedoman Media Siber.
//
// Kenapa ada: audit 13 Agustus 2026 menemukan situs ini tidak punya SATU PUN
// halaman identitas. Tidak ada yang menjelaskan siapa di balik situsnya, tidak
// ada alamat untuk melaporkan kekeliruan, tidak ada kebijakan privasi padahal
// situsnya memungut alamat email untuk newsletter. Untuk media yang sedang
// membangun kepercayaan, itu lubang paling dasar. Kelengkapan ini juga syarat
// praktis kalau kelak mendaftar ke Google Publisher Center.
//
// Ditulis sebagai data, dirender build-pages.mjs lewat head() dan FOOT yang
// sama dengan halaman lain, supaya navigasi dan footer tidak pernah selisih.
//
// ATURAN ISI, dan ini yang membedakan halaman ini dari halaman "Tentang Kami"
// kebanyakan: TIDAK ADA KLAIM YANG DILEBIHKAN. Tidak ada tim redaksi fiktif,
// tidak ada alamat kantor karangan, tidak ada nama orang. Sebagian besar
// proses situs ini memang otomatis dan memakai kecerdasan buatan, dan itu
// DITULIS TERANG-TERANGAN, karena pembaca yang tahu cara kerjanya lebih
// percaya daripada pembaca yang merasa dibohongi belakangan.
//
// Email redaksi memakai alamat operasional pemilik (komunika.mi@gmail.com),
// alamat yang sama dengan akun Buttondown dan GitHub situs ini. Kalau kelak
// email domain (redaksi@the-signal.id) disiapkan di Rumahweb, cukup ganti
// konstanta di bawah dan build ulang.
export const EMAIL_REDAKSI = 'komunika.mi@gmail.com';

const p = (t) => '<p>' + t + '</p>';
const h2 = (t) => '<h2>' + t + '</h2>';

export const HALAMAN_STATIS = [
  {
    slug: 'tentang',
    judul: 'Tentang The Signal',
    desc: 'Siapa di balik The Signal, dari mana beritanya, dan bagaimana rangkumannya disusun.',
    isi:
      p('The Signal adalah media analisis ekonomi Indonesia. Tugasnya satu: membaca ARAH. Dari puluhan berita, aksi korporasi, dan angka resmi setiap hari, kami menyimpulkan ke mana keadaan bergerak dan apa yang akan memastikan atau mematahkan pembacaan itu, supaya pelaku usaha dan pengambil keputusan tidak harus menyisir semuanya sendiri.') +
      p('Situs ini merupakan kolaborasi editorial dengan tvOneNews dan didukung oleh <a href="https://adsmediamix.id" target="_blank" rel="noopener">adsmediamix.id</a>.') +

      h2('Dari mana beritanya') +
      p('Semua artikel di sini berangkat dari sumber yang bisa diperiksa: liputan ekonomi tvOneNews, keterbukaan informasi emiten di Bursa Efek Indonesia, siaran pers lembaga resmi seperti Kementerian Perdagangan dan Bank Indonesia, serta data resmi Badan Pusat Statistik untuk halaman <a href="/data-ekonomi.html">Angka Ekonomi</a>. Setiap artikel menautkan berita atau dokumen aslinya, jadi pembaca selalu bisa membandingkan sendiri.') +

      h2('Bagaimana rangkumannya disusun') +
      p('Sebagian besar proses berjalan otomatis. Sistem kami memantau sumber-sumber di atas sepanjang hari, lalu menyusun rangkumannya dengan bantuan kecerdasan buatan yang bekerja di bawah aturan redaksi: dilarang menambah fakta yang tidak ada di sumber, klaim yang belum terverifikasi ditulis sebagai pernyataan sumbernya, dan angka mengikuti dokumen aslinya. Artikel di sini adalah rangkuman editorial, bukan salinan berita sumber.') +
      p('Cara kerja seperti ini kami tulis terbuka karena pembaca berhak tahu. Kalau ada yang keliru, tanggung jawabnya tetap pada The Signal, bukan pada mesinnya. Laporkan lewat halaman <a href="/kontak.html#koreksi">Kontak &amp; Koreksi</a> dan kami periksa.') +

      h2('Soal gambar') +
      p('Foto asli dari sumber selalu didahulukan dan diberi kredit, misalnya "Foto: tvOneNews". Kalau sumber tidak menyediakan foto, kami memakai ilustrasi buatan kecerdasan buatan yang selalu ditandai "Ilustrasi AI". Ilustrasi bukan dokumentasi peristiwa, dan kami tidak pernah menyamarkannya sebagai foto.') +

      h2('Bukan nasihat investasi') +
      p('Artikel The Signal, termasuk catatan redaksi dan angka di dalamnya, adalah informasi. Bukan ajakan membeli atau menjual saham, mata uang, emas, maupun instrumen lain. Keputusan investasi beserta risikonya sepenuhnya ada di tangan pembaca.'),
  },
  {
    slug: 'kontak',
    judul: 'Kontak & Koreksi',
    desc: 'Cara menghubungi redaksi The Signal, melaporkan kekeliruan, dan mengajukan hak jawab.',
    isi:
      p('Redaksi The Signal bisa dihubungi lewat email <a href="mailto:' + EMAIL_REDAKSI + '">' + EMAIL_REDAKSI + '</a>. Semua email dibaca; yang menyangkut kekeliruan pemberitaan diprioritaskan.') +

      '<h2 id="koreksi">Melaporkan kekeliruan</h2>' +
      p('Menemukan angka yang salah, judul yang menyesatkan, foto yang tidak sesuai, atau tautan sumber yang keliru? Kirim email dengan menyertakan tautan artikelnya dan bagian yang menurut Anda keliru. Kalau setelah diperiksa memang keliru, artikelnya kami perbaiki di halaman yang sama dan diberi catatan perbaikan, bukan dihapus diam-diam.') +

      h2('Hak jawab') +
      p('Pihak yang merasa dirugikan oleh pemberitaan The Signal dapat mengajukan hak jawab atau hak koreksi ke alamat email yang sama, sesuai Pedoman Pemberitaan Media Siber. Sertakan identitas yang jelas dan bagian pemberitaan yang dipersoalkan.') +

      h2('Kerja sama dan iklan') +
      p('Urusan kerja sama, konten berbayar, dan pemasangan iklan ditangani <a href="https://adsmediamix.id" target="_blank" rel="noopener">adsmediamix.id</a>. Konten berbayar, kalau kelak ada, akan selalu ditandai jelas dan tidak menyamar sebagai berita.'),
  },
  {
    slug: 'privasi',
    judul: 'Kebijakan Privasi',
    desc: 'Data apa yang dikumpulkan the-signal.id, untuk apa, dan apa yang sengaja tidak kami lakukan.',
    isi:
      p('Prinsip kami sederhana: kumpulkan sesedikit mungkin. Halaman ini menjelaskan apa saja yang tersentuh data saat Anda membuka the-signal.id. Berlaku sejak 13 Agustus 2026.') +

      h2('Yang kami kumpulkan') +
      p('<strong>Email pelanggan Signal+.</strong> Kalau Anda mendaftar newsletter, alamat email Anda disimpan oleh Buttondown, layanan pengiriman newsletter yang kami pakai, dan hanya dipakai untuk mengirim edisi Signal Harian. Pendaftaran memakai konfirmasi dua langkah, dan Anda bisa berhenti kapan saja lewat tautan di bagian bawah setiap email. Alamat Anda tidak kami jual dan tidak kami bagikan ke pihak lain.') +
      p('<strong>Log server standar.</strong> Situs ini dilayani Vercel, yang seperti semua penyedia hosting mencatat log akses teknis (alamat IP, jenis peramban) untuk keperluan operasional dan keamanan.') +

      h2('Yang sengaja tidak ada') +
      p('Tidak ada akun pengguna, tidak ada kolom komentar, tidak ada iklan pelacak, tidak ada cookie pelacak, dan tidak ada alat analitik pihak ketiga. Membaca situs ini tidak membutuhkan dan tidak meninggalkan profil apa pun.') +

      h2('Konten pihak ketiga') +
      p('Video ditayangkan lewat youtube-nocookie.com, mode YouTube yang tidak memasang cookie pelacakan sampai video benar-benar diputar. Gambar mini video dimuat dari server YouTube (i.ytimg.com), sehingga peramban Anda mengirim permintaan ke server tersebut saat halaman terbuka.') +

      h2('Perubahan dan pertanyaan') +
      p('Kalau kebijakan ini berubah, misalnya karena kami menambah alat analitik, halaman ini diperbarui lebih dulu sebelum alatnya dipasang. Pertanyaan soal privasi bisa dikirim ke <a href="mailto:' + EMAIL_REDAKSI + '">' + EMAIL_REDAKSI + '</a>.'),
  },
  {
    slug: 'pedoman-media-siber',
    judul: 'Pedoman Media Siber',
    desc: 'Komitmen The Signal pada Pedoman Pemberitaan Media Siber: verifikasi, ralat, dan hak jawab.',
    isi:
      p('The Signal berpegang pada Pedoman Pemberitaan Media Siber yang ditetapkan Dewan Pers. Halaman ini merangkum bagaimana pedoman itu kami jalankan sehari-hari.') +

      h2('Verifikasi dan keberimbangan') +
      p('Artikel kami dirangkum dari sumber yang bisa diperiksa: liputan tvOneNews, dokumen keterbukaan informasi Bursa Efek Indonesia, dan siaran pers lembaga resmi. Setiap artikel menautkan sumber aslinya. Klaim yang belum terverifikasi ditulis sebagai pernyataan pihak yang mengucapkannya, bukan sebagai fakta yang sudah pasti.') +

      h2('Ralat dan koreksi') +
      p('Kekeliruan yang terkonfirmasi dikoreksi secepatnya di artikel yang sama, disertai catatan perbaikan. Kami tidak menghapus artikel diam-diam untuk menutupi kekeliruan. Cara melaporkannya ada di halaman <a href="/kontak.html#koreksi">Kontak &amp; Koreksi</a>.') +

      h2('Hak jawab') +
      p('Pihak yang diberitakan dan merasa dirugikan berhak mengajukan hak jawab lewat <a href="mailto:' + EMAIL_REDAKSI + '">' + EMAIL_REDAKSI + '</a>. Hak jawab dimuat di artikel yang bersangkutan setelah identitas pengaju dan pokok keberatannya jelas.') +

      h2('Konten buatan pengguna') +
      p('Situs ini tidak menyediakan kolom komentar atau kiriman pembaca, sehingga tidak ada konten buatan pengguna yang perlu dimoderasi.') +

      h2('Keterbukaan proses') +
      p('Sebagian besar proses penyusunan artikel berjalan otomatis dengan bantuan kecerdasan buatan, di bawah aturan redaksi yang melarang penambahan fakta di luar sumber. Penjelasan lengkapnya ada di halaman <a href="/tentang.html">Tentang The Signal</a>. Apa pun perannya mesin, tanggung jawab atas seluruh isi tetap pada The Signal.') +

      h2('Pencabutan berita') +
      p('Berita hanya dicabut untuk alasan luar biasa, misalnya menyangkut keselamatan atau perintah hukum, dan pencabutannya disertai penjelasan kepada pembaca.'),
  },
];
