// CATATAN KANDIDAT YANG SUDAH DITOLAK EDITOR.
//
// Kenapa ada. `sudahAda` di update-all.mjs dan `sumberAda` di update-idx.mjs
// hanya menyaring yang sudah TERBIT. Kandidat yang dinilai Claude lalu
// DITOLAK tidak tercatat di mana pun, jadi ia ditawarkan lagi putaran
// berikutnya, dinilai lagi, ditolak lagi, selamanya selama masih nongkrong di
// halaman depan sumbernya.
//
// Terlihat dari dua log putaran daily.yml yang berjarak sembilan jam,
// 7 dan 8 September 2026. Empat judul yang sama persis ditolak di kedua-duanya:
//
//     ditolak (seremonial): Erupsi Menerus Anak Krakatau Berakhir...
//     ditolak (seremonial): Pajak Bertutur 2026: Menyalakan Kesadaran...
//     ditolak (seremonial): Peringatan HUT ke-49 Pasar Modal Indonesia...
//     ditolak (seremonial): Prodi K3 Polteknaker Raih Akreditasi Unggul...
//
// Dengan sekitar enam putaran sehari, itu puluhan panggilan model per hari
// untuk membuang barang yang sama. Ongkosnya bukan cuma kredit: tiap
// penilaian memakan jatah BATAS_MENIT yang seharusnya dipakai menulis artikel
// sungguhan.
//
// Bentuk berkasnya sengaja dibikin sama dengan assets/data/foto-ditolak.json
// yang sudah lebih dulu ada untuk masalah serupa pada ilustrasi.

import fs from 'node:fs';
import path from 'node:path';
import { ROOT, log } from './lib.mjs';

const CATATAN = path.join(ROOT, 'assets/data/kandidat-ditolak.json');

// Sesudah sekian hari, kandidat lama dinilai ULANG sekali.
//
// Bukan karena siaran persnya berubah - biasanya tidak. Alasannya: perintah
// editorial di rewrite.mjs bisa disunting kapan saja, dan tanpa jendela ini
// semua yang pernah ditolak akan tertutup permanen oleh keputusan versi lama.
// Ongkosnya terbatas: satu penilaian per kandidat per 30 hari, bukan enam per
// hari.
const HARI_LUPA = Number(process.env.SIGNAL_TOLAK_LUPA || 30);

// Entri yang tidak tersentuh selama ini dibuang supaya berkasnya tidak tumbuh
// selamanya. Kandidat yang masih nongkrong di sumbernya akan menyegarkan
// tanggalnya sendiri tiap kali dinilai ulang, jadi yang benar-benar terbuang
// hanya yang sudah hilang dari sumbernya.
const HARI_BUANG = Number(process.env.SIGNAL_TOLAK_BUANG || 90);

const HARI_MS = 86400000;
const hariIni = () => new Date().toISOString().slice(0, 10);
const umurHari = (tgl) => {
  const t = Date.parse(tgl + 'T00:00:00Z');
  return Number.isFinite(t) ? (Date.now() - t) / HARI_MS : Infinity;
};

function baca() {
  try {
    const isi = JSON.parse(fs.readFileSync(CATATAN, 'utf8'));
    return (isi && typeof isi === 'object' && !Array.isArray(isi)) ? isi : {};
  } catch {
    // Berkas belum ada, atau rusak. Dua-duanya bukan alasan menggagalkan
    // putaran: yang hilang cuma penghematan, bukan berita.
    return {};
  }
}

/**
 * Dipanggil SEKALI di awal putaran. Mengembalikan alat kecil yang menyimpan
 * isinya di memori, supaya tidak ada baca-tulis berkas di dalam loop.
 */
export function muatTolakan() {
  const isi = baca();

  let dibuang = 0;
  for (const [k, v] of Object.entries(isi)) {
    if (!v || typeof v !== 'object' || umurHari(v.tanggal) > HARI_BUANG) {
      delete isi[k]; dibuang++;
    }
  }

  let dicatat = 0;
  return {
    /** true kalau kandidat ini masih dalam masa tenang dan harus dilewati. */
    ditolak(kunci) {
      const v = kunci && isi[kunci];
      return !!v && umurHari(v.tanggal) < HARI_LUPA;
    },

    /** Catat penolakan baru, atau segarkan tanggalnya kalau dinilai ulang. */
    catat(kunci, sebab) {
      if (!kunci) return;
      const lama = isi[kunci];
      isi[kunci] = {
        sebab: String(sebab || '').slice(0, 60),
        tanggal: hariIni(),
        kali: (lama && Number(lama.kali)) ? lama.kali + 1 : 1,
      };
      dicatat++;
    },

    /**
     * Ditulis SEKALI di akhir putaran. Kegagalan menulis catatan tidak boleh
     * menjatuhkan putaran yang artikelnya sudah jadi.
     */
    simpan() {
      if (!dicatat && !dibuang) return;
      try {
        fs.mkdirSync(path.dirname(CATATAN), { recursive: true });
        // Kunci diurutkan supaya diff antar commit terbaca, bukan acak.
        const urut = {};
        for (const k of Object.keys(isi).sort()) urut[k] = isi[k];
        fs.writeFileSync(CATATAN, JSON.stringify(urut, null, 1) + '\n', 'utf8');
        log('catatan tolakan: +' + dicatat + ' baru, -' + dibuang +
          ' kedaluwarsa, total ' + Object.keys(isi).length);
      } catch (e) {
        log('PERINGATAN: catatan tolakan gagal ditulis -> ' + String(e.message).slice(0, 60));
      }
    },

    jumlah: () => Object.keys(isi).length,
  };
}
