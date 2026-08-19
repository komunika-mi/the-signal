# Menjalankan pembaruan keterbukaan informasi IDX dari komputer ini.
#
# Kenapa lokal, bukan GitHub Actions: IDX memakai Cloudflare yang memblokir
# IP pusat data. Dari runner GitHub selalu dibalas halaman tantangan, dari
# koneksi rumahan berhasil. Jadi bagian IDX dijalankan di sini, sementara
# berita tvOne tetap otomatis di cloud.
#
# Dipasang sebagai Windows Task Scheduler, tiap 2 jam pukul 06.00-20.00.

# CATATAN: jangan pakai $ErrorActionPreference='Stop' bersama perintah git.
# Git menulis pesan biasa ke stderr, dan PowerShell akan menganggapnya error
# fatal lalu menghentikan skrip padahal perintahnya sukses.
$ErrorActionPreference = 'Continue'

$proyek = 'D:\projects\the-signal'
$logDir = Join-Path $proyek '.logs'
$log = Join-Path $logDir ('idx-' + (Get-Date -Format 'yyyy-MM-dd') + '.log')

function Catat($pesan) {
  $baris = (Get-Date -Format 'HH:mm:ss') + '  ' + $pesan
  Write-Host $baris
  Add-Content -Path $log -Value $baris -Encoding utf8
}

# Menjalankan perintah luar dengan aman: keluaran ditangkap, kode keluar dicek
# sendiri, stderr tidak bikin skrip mati.
function Jalankan($berkas, [string[]]$argumen) {
  # Sengaja TIDAK memakai 2>&1: di PowerShell 5.1 itu membungkus tiap baris
  # stderr jadi ErrorRecord (NativeCommandError), sehingga pesan biasa git
  # muncul sebagai tumpukan error palsu di log.
  $keluaran = & $berkas @argumen | Out-String
  $kode = $LASTEXITCODE
  foreach ($baris in ($keluaran -split "`r?`n")) {
    if ($baris.Trim()) { Catat ("  " + $baris.Trim()) }
  }
  return $kode
}

if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir -Force | Out-Null }

# Cegah dua proses jalan bersamaan (jadwal bisa menumpuk kalau satu putaran lambat)
$kunci = Join-Path $env:TEMP 'the-signal-idx.lock'
if (Test-Path $kunci) {
  $umur = (Get-Date) - (Get-Item $kunci).LastWriteTime
  if ($umur.TotalMinutes -lt 45) { Catat 'Putaran sebelumnya masih jalan, dilewati.'; exit 0 }
  Catat 'Kunci lama ditemukan (lebih dari 45 menit), dianggap macet dan diabaikan.'
}
# Ambil nama berkas dari satu baris 'git status --porcelain'.
# Bentuknya 'XY path', dan untuk penggantian nama 'XY lama -> baru'. Path yang
# mengandung spasi dikutip git, jadi kutipnya dilepas.
function BerkasDariBarisStatus($baris) {
  if (-not $baris -or $baris.Length -lt 4) { return $null }
  $p = $baris.Substring(3)
  if ($p -match ' -> ') { $p = ($p -split ' -> ')[-1] }
  return $p.Trim().Trim('"')
}

New-Item -ItemType File -Path $kunci -Force | Out-Null

try {
  Set-Location $proyek
  Catat '=== mulai pembaruan IDX ==='

  # Selaraskan dulu dengan remote, karena workflow harian di cloud juga
  # menulis file yang sama. Tanpa ini push bisa ditolak.
  Catat 'menyelaraskan dengan remote'
  Jalankan 'git' @('pull', '--rebase', '--autostash', 'origin', 'master') | Out-Null

  # CATATAN: data pasar TIDAK diperbarui di sini, melainkan oleh workflow
  # .github/workflows/pasar.yml yang jalan tiap 2 jam DI CLOUD. Sempat ditaruh
  # di sini, lalu dipindahkan karena keliru: mengikatnya ke laptop membuat
  # angka pasar ikut mati saat laptop mati, padahal sumbernya (Yahoo Finance,
  # er-api, gold-api, CoinGecko) sama sekali tidak diblokir Cloudflare dan
  # bisa diakses dari runner GitHub. Yang benar-benar butuh koneksi rumahan
  # cuma IDX. Kalau ditaruh di dua tempat, keduanya menulis market.js dan
  # rawan bentrok saat push.
  # SIGNAL_IDX_HARI sengaja TIDAK diset di sini.
  #
  # Sempat dipaksa 3 hari, lalu dicabut: update-idx.mjs kini menghitung sendiri
  # jendelanya dari jarak ke artikel IDX terakhir di arsip. Angka tetap selalu
  # salah untuk kanal yang jalannya mengikuti laptop menyala, sedangkan
  # perhitungan otomatis pas untuk kedua keadaan, baik menyala tiap hari maupun
  # baru menyala setelah seminggu. Menyetel variabelnya di sini justru akan
  # MENIMPA perhitungan itu.
  # POTRET SEBELUM, dan alasannya.
  #
  # Sebelum ini langkah commit memakai 'git add -A', yang menyapu SELURUH isi
  # pohon kerja. Dua kali pada 19 Agustus 2026 itu menelan suntingan yang
  # sedang dikerjakan dan mendorongnya ke remote dengan judul "Aksi korporasi
  # IDX" - pekerjaan orang lain terbit atas nama pipeline ini, tanpa ditinjau,
  # dan tercatat di riwayat dengan pesan yang menyesatkan.
  #
  # Yang dicatat di sini adalah berkas yang SUDAH kotor sebelum pipeline mulai.
  # Semuanya nanti dilewati saat commit, apa pun isinya. Pipeline ini cuma
  # berhak atas apa yang ia ubah sendiri.
  $sebelum = @{}
  foreach ($b in (& git -c core.quotepath=false status --porcelain)) {
    $p = BerkasDariBarisStatus $b
    if ($p) { $sebelum[$p] = $true }
  }
  if ($sebelum.Count -gt 0) {
    Catat "catatan: $($sebelum.Count) berkas sudah berubah sebelum putaran ini, akan dilewati saat commit"
  }

  Catat 'menjalankan pembaruan IDX'
  $kode = Jalankan 'npm' @('run', 'update:idx')
  if ($kode -ne 0) { Catat "GAGAL: skrip keluar dengan kode $kode"; exit $kode }

  $berubah = (& git status --porcelain | Out-String).Trim()
  if (-not $berubah) {
    Catat 'Tidak ada aksi korporasi baru putaran ini.'
    Catat '=== selesai (tanpa perubahan) ==='
    exit 0
  }

  $jumlah = (& node -e "const fs=require('fs');const s=fs.readFileSync('assets/js/articles.js','utf8');console.log(JSON.parse(s.slice(s.indexOf('['),s.lastIndexOf(']')+1)).length)" | Out-String).Trim()

  # Jaring pengaman yang sama seperti di GitHub Actions
  if ([int]$jumlah -lt 10) {
    Catat "DIBATALKAN: arsip cuma $jumlah artikel, tidak wajar. Perubahan dibuang."
    Jalankan 'git' @('checkout', '--', '.') | Out-Null
    exit 1
  }

  $pesan = "Aksi korporasi IDX: total $jumlah artikel (" + (Get-Date -Format 'yyyy-MM-dd HH:mm') + " WIB)"
  # Hanya berkas yang BERUBAH KARENA PUTARAN INI.
  $milikKita = @()
  $dilewati = @()
  foreach ($b in (& git -c core.quotepath=false status --porcelain)) {
    $p = BerkasDariBarisStatus $b
    if (-not $p) { continue }
    if ($sebelum.ContainsKey($p)) { $dilewati += $p } else { $milikKita += $p }
  }
  if ($dilewati.Count -gt 0) {
    Catat "dilewati (sudah berubah sebelum putaran ini): $($dilewati -join ', ')"
  }
  if ($milikKita.Count -eq 0) {
    Catat 'Tidak ada berkas yang berubah karena putaran ini. Tidak ada yang di-commit.'
    Catat '=== selesai (tanpa perubahan milik putaran ini) ==='
    exit 0
  }
  Catat "commit $($milikKita.Count) berkas milik putaran ini"
  Jalankan 'git' (@('add', '--') + $milikKita) | Out-Null
  Jalankan 'git' @('commit', '-m', $pesan) | Out-Null
  $kodePush = Jalankan 'git' @('push', 'origin', 'master')
  if ($kodePush -ne 0) { Catat 'GAGAL: push ditolak'; exit 1 }

  # JANGAN berasumsi push otomatis jadi deploy. Terbukti 2026-08-10: satu push
  # tidak memicu webhook Vercel sama sekali selama 7 menit, situs tetap 404
  # padahal git bilang sukses. Kalau tidak dicek, kegagalan macam ini lolos
  # jadi "sukses" persis seperti bug token yang dulu (lihat update-all.mjs).
  #
  # Jadi: tunggu sebentar, buktikan artikel terbaru benar-benar bisa diakses,
  # baru kalau tidak muncul kita deploy sendiri.
  $slugBaru = (& node -e "const fs=require('fs');const s=fs.readFileSync('assets/js/articles.js','utf8');const a=JSON.parse(s.slice(s.indexOf('['),s.lastIndexOf(']')+1));console.log(a[0].slug)" | Out-String).Trim()
  # Alamat situs diambil dari situs.mjs, jangan ditulis ulang di sini.
  # Dulu dipaku di empat berkas dan pindah domain jadi rawan ada yang tertinggal.
  $situs = (& node -e "import('./scripts/situs.mjs').then(m=>console.log(m.SITUS))" | Out-String).Trim()
  $alamat = "$situs/berita/$slugBaru.html"

  Catat "menunggu deploy: $slugBaru"
  $terbit = $false
  foreach ($percobaan in 1..12) {       # maksimal 2 menit
    Start-Sleep -Seconds 10
    try {
      $r = Invoke-WebRequest -Uri $alamat -Method Head -UseBasicParsing -TimeoutSec 15
      if ($r.StatusCode -eq 200) { $terbit = $true; break }
    } catch { }
  }

  if (-not $terbit) {
    Catat 'Webhook Vercel tidak menyala dalam 2 menit, deploy manual.'
    $kodeDeploy = Jalankan 'npx' @('vercel', 'deploy', '--prod', '--yes')
    if ($kodeDeploy -ne 0) { Catat 'GAGAL: deploy manual juga gagal'; exit 1 }

    foreach ($percobaan in 1..12) {
      Start-Sleep -Seconds 10
      try {
        $r = Invoke-WebRequest -Uri $alamat -Method Head -UseBasicParsing -TimeoutSec 15
        if ($r.StatusCode -eq 200) { $terbit = $true; break }
      } catch { }
    }
  }

  if (-not $terbit) {
    Catat "GAGAL: artikel tetap tidak bisa diakses di $alamat"
    Catat '       Perubahan sudah ter-commit dan ter-push, tapi situs belum terbarui.'
    exit 1
  }

  Catat "Selesai. Total artikel: $jumlah. Terbukti live: $alamat"
  Catat '=== selesai ==='
}
catch {
  Catat ('ERROR: ' + $_.Exception.Message)
  exit 1
}
finally {
  Remove-Item $kunci -Force -ErrorAction SilentlyContinue
  Get-ChildItem $logDir -Filter 'idx-*.log' -ErrorAction SilentlyContinue |
    Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-14) } |
    Remove-Item -Force -ErrorAction SilentlyContinue
}

# Periksa kesegaran kanal setelah putaran selesai.
#
# Ditambahkan 14 Agustus 2026, setelah kanal ini mati tiga hari tanpa ada yang
# tahu. Task Scheduler cuma melihat kode keluar, dan kode keluar 0 waktu itu
# berarti "putaran selesai", bukan "kanal sehat". Sekarang bedanya tercatat di
# log harian, jadi kalau ada yang membuka log itu, keadaannya langsung terbaca
# di baris terakhir tanpa perlu menyisir ratusan baris di atasnya.
$kodeKanal = Jalankan 'node' @('scripts/periksa-kanal.mjs')
if ($kodeKanal -eq 2) {
  Catat 'PERINGATAN: ada kanal yang berhenti berbunyi, lihat baris di atas.'
}
