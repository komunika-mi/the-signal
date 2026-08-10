# The Signal

Portal berita ekonomi Indonesia. Kolaborasi editorial dengan **tvOneNews**, didukung **adsmediamix.id**.

Live: https://the-signal-sandy.vercel.app

## Cara kerjanya

Tiap hari pukul 06.00 WIB, GitHub Actions menjalankan pipeline ini:

1. **Ambil berita** dari news sitemap tvOneNews (rubrik ekonomi & bisnis)
2. **Rangkum ulang** tiap berita pakai Claude menjadi tulisan editorial orisinal, bukan salinan
3. **Ambil video** dari kanal YouTube resmi tvOneNews, lalu disaring Claude supaya hanya yang bertema ekonomi yang masuk
4. **Perbarui data pasar**: IHSG, USD/IDR, emas spot, Bitcoin
5. **Pasangkan foto** dari pustaka lokal, dicocokkan per kategori
6. **Bangun ulang** halaman statis, lalu commit dan push. Vercel deploy otomatis.

## Aturan editorial

- Artikel adalah **rangkuman orisinal**, dilarang menyalin kalimat mentah dari sumber
- Tiap artikel wajib mencantumkan tautan ke artikel asli tvOneNews
- Video adalah **embed asli** dari YouTube, bukan unggah ulang
- Data pasar berlabel apa adanya. Harga emas memakai **spot dunia**, bukan harga Antam,
  karena situs resmi Antam memblokir pengambilan otomatis

## Struktur

```
index.html, berita.html, video.html   halaman utama (dirender JS dari data)
berita/<slug>.html                    halaman artikel statis, punya OG image sendiri
tayangan/<id>.html                    halaman video statis
assets/js/articles.js                 data artikel   (dibuat otomatis)
assets/js/videos.js                   data video     (dibuat otomatis)
assets/js/market.js                   data pasar     (dibuat otomatis)
assets/img/                           pustaka foto
scripts/                              pipeline harian
```

Halaman artikel dan video sengaja dibuat **statis**, bukan dirender JavaScript,
karena crawler WhatsApp dan Facebook tidak menjalankan JavaScript. Tanpa ini,
semua tautan yang dibagikan akan menampilkan gambar yang sama.

## Menjalankan manual

```bash
npm install
npm run update     # ambil berita + bangun ulang situs
npm run build      # bangun ulang halaman saja, tanpa ambil data baru
```

Perlu `CLAUDE_CODE_OAUTH_TOKEN` di environment untuk langkah perangkuman.

## Menambah foto

Pipeline harian TIDAK membuat gambar baru, hanya memakai ulang pustaka di
`assets/img/`. Jadi biaya hariannya nol. Kalau pustaka perlu ditambah:

```bash
npm run foto -- nama-berkas "deskripsi adegan"
npm run foto -- --daftar        # lihat pustaka yang ada
```

Model default `z_image` (0,15 kredit per gambar). Hasil uji banding:
`gpt_image_2` 7 kredit tanpa beda kualitas berarti, dan `soul_2` menempelkan
watermark teks sehingga tidak terpakai. Setelah menambah foto, daftarkan
namanya di POOL `scripts/assign-images.mjs` lalu jalankan `npm run build`.

**Semua foto adalah ilustrasi AI**, bukan dokumentasi peristiwa. Karena itu
tiap foto diberi penanda "Ilustrasi AI" dan artikel diberi keterangan.

## Catatan penting

- **Setelah mengubah `articles.js` atau `videos.js`, jalankan `npm run build`.**
  Kalau tidak, halaman statisnya jadi basi.
- Sumber berita memakai sitemap, bukan RSS, karena tvOneNews tidak menyediakan RSS.
  Kalau struktur situs mereka berubah, `scripts/fetch-news.mjs` perlu disesuaikan.
- Kalau dalam sehari tidak ada video ekonomi baru, video lama tetap dipertahankan.
