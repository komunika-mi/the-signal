// Pembaca dan penulis assets/js/rapor.js, dipakai bersama oleh dua skrip.
//
// Dipisah dari rapor-tagih.mjs karena berkas itu menjalankan main() begitu
// diimpor: skrip lain yang cuma butuh fungsi simpannya akan ikut menagih
// seluruh rapor sebagai efek samping. Kepala berkas juga harus satu sumber,
// sebab dua penulis dengan kepala berbeda akan saling menimpa komentarnya dan
// menghasilkan diff palsu tiap putaran.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';

const BERKAS = 'assets/js/rapor.js';

const KEPALA = [
  '// Rapor Sinyal: buku besar pembacaan arah yang BISA DITAGIH.',
  '//',
  '// Tiap benang Signal Harian menyebut penanda ujinya sendiri (rilis apa, kapan,',
  '// yang membedakan skenario). File ini mencatat tiap klaim itu beserta',
  '// tenggatnya, lalu scripts/rapor-tagih.mjs menagihnya begitu jatuh tempo:',
  '// terkonfirmasi, patah, atau kedaluwarsa, selalu dengan bukti berupa artikel',
  '// arsip sendiri. Yang tidak pernah boleh terjadi: mengubah bunyi klaim setelah',
  '// dicatat. Klaim dikutip apa adanya dari edisinya, salah ya salah.',
  '//',
  '// Entri ber-"isu" datang dari scripts/klaim-arah.mjs: taruhan arah yang',
  '// dicatat SEBELUM tanggal putusannya, bukan dari edisi harian.',
  '//',
  '// JANGAN diedit manual; diisi dan ditagih scripts/rapor-tagih.mjs.',
].join('\n');

export function muatRapor() {
  const p = path.join(ROOT, BERKAS);
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, 'utf8');
  const i = s.indexOf('{'), j = s.lastIndexOf('}');
  try { return JSON.parse(s.slice(i, j + 1)); } catch { return null; }
}

export function simpanRapor(rapor) {
  rapor.diperbarui = new Date(Date.now() + 7 * 3600 * 1000)
    .toISOString().replace('Z', '+07:00');
  fs.writeFileSync(path.join(ROOT, BERKAS),
    KEPALA + '\nvar RAPOR = ' + JSON.stringify(rapor, null, 1) + ';\n', 'utf8');
}
