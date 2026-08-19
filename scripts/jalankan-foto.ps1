# Pengisi ilustrasi artikel, dijalankan dari komputer rumah.
#
# KENAPA LOKAL, PADAHAL SEGALANYA SUDAH PINDAH KE CLOUD.
#
# Pembuat ilustrasinya CLI `higgsfield`, dan ia bukan paket npm: binernya
# dipasang ke ~/.higgsfield/bin dan tiap gambar memakai kredit langganan
# berbayar. Menaruhnya di GitHub Actions berarti mengirim token langganan ke
# CI dan membiarkannya membakar kredit delapan kali sehari tanpa ada yang
# melihat. Jadi ilustrasi tetap dibuat di sini.
#
# Yang berubah: laptop tidak lagi perlu menyala di JAM TERTENTU. Tugas
# terjadwalnya memakai "jalankan begitu sempat kalau jadwalnya terlewat", jadi
# begitu laptop dinyalakan ia mengejar ketertinggalannya sendiri. Kanal IDX,
# berita, data pasar, dan pemantau semuanya sudah jalan di server tanpa ini.
#
# KENAPA INI PENTING DAN BUKAN SEKADAR KERAPIAN. Artikel IDX tidak punya foto
# sumber, cuma PDF. Tanpa ilustrasi sendiri ia mengambil dari kolam gambar
# bertema yang jumlahnya terbatas. Begitu kolam habis, pasangFoto() mulai
# MEMAKSA pengulangan, dan foto yang berulang adalah hal yang tidak boleh
# terjadi di situs ini.

# JANGAN 'Stop' bersama perintah git. Git menulis pesan biasa ke stderr
# ('From https://github.com/...'), dan PowerShell 5.1 menganggapnya error
# fatal lalu menghentikan skrip padahal perintahnya sukses. Pelajaran ini
# sudah tertulis di jalankan-idx.ps1 dan sempat saya abaikan di sini.
$ErrorActionPreference = 'Continue'
$proyek = 'D:\projects\the-signal'
$logDir = Join-Path $proyek '.logs'
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir | Out-Null }
$log = Join-Path $logDir ('foto-' + (Get-Date -Format 'yyyy-MM-dd') + '.log')

function Catat($pesan) {
  $baris = (Get-Date -Format 'HH:mm:ss') + '  ' + $pesan
  # Write-Host, BUKAN Write-Output. Write-Output menaruh tiap baris log ke
  # pipeline, sehingga nilai kembali Jalankan() jadi larik berisi seluruh log
  # plus kode keluarnya, dan pemeriksaan `if ($kode -ne 0)` selalu benar.
  # Akibatnya putaran yang SUKSES dilaporkan gagal lalu berhenti sebelum
  # commit. Terjadi pada percobaan pertama skrip ini, 19 Agustus 2026.
  Write-Host $baris
  Add-Content -Path $log -Value $baris -Encoding utf8
}

function Jalankan($berkas, [string[]]$argumen) {
  # Sengaja TIDAK memakai 2>&1: di PowerShell 5.1 itu membungkus tiap baris
  # stderr jadi ErrorRecord (NativeCommandError), sehingga pesan biasa git
  # muncul sebagai tumpukan error palsu lalu menghentikan skrip.
  $keluaran = & $berkas @argumen | Out-String
  $kode = $LASTEXITCODE
  foreach ($baris in ($keluaran -split "`r?`n")) {
    if ($baris.Trim()) { Catat ('    ' + $baris.Trim()) }
  }
  return $kode
}

# Sidik isi berkas: yang menentukan kepemilikan adalah ISINYA BERUBAH selama
# putaran, bukan kotor atau bersihnya. Berkas yang tertinggal kotor dari
# putaran sebelumnya tetap ikut ter-commit begitu ditulis ulang, sementara
# suntingan manusia yang tidak tersentuh dibiarkan.
function SidikBerkas($jalur) {
  if (-not (Test-Path -LiteralPath $jalur -PathType Leaf)) { return '' }
  try { return (Get-FileHash -LiteralPath $jalur -Algorithm SHA256).Hash }
  catch { return '' }
}

function BerkasDariBarisStatus($baris) {
  if (-not $baris -or $baris.Length -lt 4) { return $null }
  $p = $baris.Substring(3)
  if ($p -match ' -> ') { $p = ($p -split ' -> ')[-1] }
  return $p.Trim().Trim('"')
}

$kunci = Join-Path $env:TEMP 'the-signal-foto.lock'
if (Test-Path $kunci) {
  $umur = (Get-Date) - (Get-Item $kunci).LastWriteTime
  if ($umur.TotalMinutes -lt 90) { Catat 'Putaran foto sebelumnya masih jalan, dilewati.'; exit 0 }
  Catat 'Kunci lama ditemukan (lebih dari 90 menit), dianggap macet dan diabaikan.'
}
New-Item -ItemType File -Path $kunci -Force | Out-Null

try {
  Set-Location $proyek
  Catat '=== mulai pengisian ilustrasi ==='

  # Alatnya tidak ada berarti tidak ada yang bisa dikerjakan. Dikatakan
  # terang-terangan, bukan diam-diam sukses.
  $adaAlat = $true
  try { & higgsfield --version *> $null } catch { $adaAlat = $false }
  if (-not $adaAlat) {
    Catat 'GAGAL: CLI higgsfield tidak ditemukan. Ilustrasi tidak bisa dibuat.'
    Catat 'Pasang atau login ulang: higgsfield auth login'
    exit 1
  }

  Catat 'menyelaraskan dengan remote'
  Jalankan 'git' @('pull', '--rebase', '--autostash', 'origin', 'master') | Out-Null

  # Autostash yang bentrok TIDAK membuat git pull keluar bukan-nol. Yang
  # diperiksa keadaan pohon kerjanya.
  $bentrok = (& git ls-files -u | Out-String).Trim()
  if ($bentrok) {
    Catat 'GAGAL: autostash bentrok saat rebase. Putaran ini dibatalkan.'
    & git rebase --abort 2>$null
    & git reset --hard origin/master | Out-Null
    exit 1
  }

  $sebelum = @{}
  foreach ($b in (& git -c core.quotepath=false status --porcelain)) {
    $p = BerkasDariBarisStatus $b
    if ($p) { $sebelum[$p] = (SidikBerkas $p) }
  }
  if ($sebelum.Count -gt 0) {
    Catat "catatan: $($sebelum.Count) berkas sudah berubah sebelum putaran ini, akan dilewati saat commit"
  }

  $maks = if ($env:SIGNAL_FOTO_MAKS) { $env:SIGNAL_FOTO_MAKS } else { '40' }
  Catat "membuat ilustrasi untuk maksimal $maks artikel"
  $kode = Jalankan 'node' @('scripts/foto-artikel.mjs', $maks)
  if ($kode -ne 0) { Catat "GAGAL: foto-artikel.mjs keluar dengan kode $kode"; exit $kode }

  Catat 'membangun ulang halaman'
  $kode = Jalankan 'node' @('scripts/build-pages.mjs')
  if ($kode -ne 0) { Catat "GAGAL: build-pages.mjs keluar dengan kode $kode"; exit $kode }

  $milikKita = @()
  $dilewati = @()
  foreach ($b in (& git -c core.quotepath=false status --porcelain)) {
    $p = BerkasDariBarisStatus $b
    if (-not $p) { continue }
    if (-not $sebelum.ContainsKey($p)) { $milikKita += $p; continue }
    if ((SidikBerkas $p) -ne $sebelum[$p]) { $milikKita += $p } else { $dilewati += $p }
  }
  if ($dilewati.Count -gt 0) {
    Catat "dilewati (tidak tersentuh putaran ini): $($dilewati -join ', ')"
  }
  if ($milikKita.Count -eq 0) {
    Catat 'Semua artikel sudah punya ilustrasi sendiri. Tidak ada yang di-commit.'
    Catat '=== selesai (tanpa perubahan) ==='
    exit 0
  }

  $pesan = 'Ilustrasi artikel (' + (Get-Date -Format 'yyyy-MM-dd HH:mm') + ' WIB)'
  Catat "commit $($milikKita.Count) berkas milik putaran ini"
  Jalankan 'git' (@('add', '--') + $milikKita) | Out-Null
  # Commit DENGAN pathspec: commit polos meng-commit seluruh index, termasuk
  # berkas yang sudah dipentaskan manusia sebelum putaran mulai.
  Jalankan 'git' (@('commit', '-m', $pesan, '--') + $milikKita) | Out-Null
  $kodePush = Jalankan 'git' @('push', 'origin', 'master')
  if ($kodePush -ne 0) { Catat 'GAGAL: push ditolak'; exit 1 }

  Catat '=== selesai ==='
}
finally {
  Remove-Item -Path $kunci -Force -ErrorAction SilentlyContinue
}
