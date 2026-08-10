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
New-Item -ItemType File -Path $kunci -Force | Out-Null

try {
  Set-Location $proyek
  Catat '=== mulai pembaruan IDX ==='

  # Selaraskan dulu dengan remote, karena workflow harian di cloud juga
  # menulis file yang sama. Tanpa ini push bisa ditolak.
  Catat 'menyelaraskan dengan remote'
  Jalankan 'git' @('pull', '--rebase', '--autostash', 'origin', 'master') | Out-Null

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
  Jalankan 'git' @('add', '-A') | Out-Null
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
  $alamat = "https://the-signal-sandy.vercel.app/berita/$slugBaru.html"

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
