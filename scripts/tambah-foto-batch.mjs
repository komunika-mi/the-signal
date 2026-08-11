// Menambah foto ke pustaka untuk kategori yang stoknya paling menipis.
//
// Sekali jalan. Foto yang namanya sudah ada dilewati, jadi aman diulang
// kalau di tengah jalan ada yang gagal.
//
// Prompt sengaja dibuat SALING BERBEDA: beda ruang, beda sudut, beda waktu,
// beda subjek. Kalau prompt terlalu mirip, z_image menghasilkan gambar yang
// hampir kembar dan tujuan menambah variasi jadi sia-sia.
import { buatFoto } from './buat-foto.mjs';
import { log } from './lib.mjs';

const DAFTAR = [
  // Aksi Korporasi: 29 artikel cuma 6 foto, paling parah. Aksi korporasi itu
  // abstrak, jadi dicarikan adegan konkret yang berbeda-beda.
  ['rups-tangan-voting', 'Close up of hands raised during a shareholder vote in a hotel ballroom meeting, name tags and voting cards on the table, blurred crowd behind'],
  ['gong-pencatatan', 'Ceremonial gong being struck at a stock exchange listing ceremony, executives in dark suits applauding behind, indoor stage lighting'],
  ['dokumen-prospektus', 'Close up of a thick printed financial prospectus on a wooden desk beside reading glasses and a fountain pen, soft window light'],
  ['ruang-direksi', 'Empty modern boardroom with a long polished table and leather chairs, city skyline through floor to ceiling windows, late afternoon'],
  ['konpers-emiten', 'Company executives seated at a press conference table facing journalists holding voice recorders, microphones in foreground'],
  ['meja-registrasi-rups', 'Shareholders queueing at a registration desk before a general meeting, staff checking documents, banners and standing signage'],
  ['tanda-tangan-akta', 'Two business people signing a document across a table while a notary observes, close up on the pen and paper'],
  ['analis-rapat', 'Financial analysts in a small meeting room studying printed charts pinned to a glass wall, discussion in progress'],

  // Perbankan
  ['antrean-teller', 'Customers waiting on chairs in a bright Indonesian bank branch lobby, queue number display on the wall'],
  ['brankas-bank', 'Bank staff walking past a heavy vault door in a secure corridor, cool fluorescent lighting'],
  ['kartu-debit', 'Close up of a hand inserting a debit card into an EDC machine at a small shop counter'],

  // Moneter
  ['ruang-dealing', 'Currency dealing room with traders at multi screen desks showing exchange rates, phones to ears'],
  ['hitung-rupiah', 'Bank teller counting stacks of Indonesian rupiah banknotes with a counting machine, close up on hands'],
  ['papan-kurs', 'Digital currency exchange rate board at a money changer counter in a city, several currencies listed'],

  // Pasar Modal
  ['investor-ritel-ponsel', 'Young Indonesian investor checking a stock trading app on a smartphone at a cafe table, laptop half open beside'],
  ['seminar-investasi', 'Audience seated in rows at an investment seminar facing a presenter beside a projection screen with charts'],
  ['lantai-bursa-sepi', 'Wide view of a quiet stock exchange trading floor in the morning, empty chairs and glowing screens'],

  // Makroekonomi
  ['pelabuhan-kontainer', 'Container port at dawn with gantry cranes loading a cargo ship, stacked containers in the foreground'],
  ['pasar-tradisional-pagi', 'Busy traditional Indonesian market in the early morning, vendors weighing vegetables, shoppers with baskets'],
  ['jalan-tol-konstruksi', 'Elevated toll road under construction with cranes and concrete pillars, workers in safety vests'],

  // Energi
  ['panel-surya-atap', 'Rooftop solar panel installation on an industrial building, technician inspecting the array under bright sky'],
  ['truk-tangki-bbm', 'Fuel tanker truck parked at a distribution terminal, operator connecting a hose, storage tanks behind'],
];

async function main() {
  log('akan membuat ' + DAFTAR.length + ' foto, model z_image (0,15 kredit per gambar)');
  log('perkiraan biaya: ' + (DAFTAR.length * 0.15).toFixed(2) + ' kredit');
  log('');

  let dibuat = 0, dilewati = 0, gagal = 0;
  for (const [nama, prompt] of DAFTAR) {
    try {
      if (buatFoto(nama, prompt)) dibuat++; else dilewati++;
    } catch (e) {
      gagal++;
      log('GAGAL ' + nama + ': ' + String(e.message).slice(0, 80));
    }
  }

  log('');
  log('dibuat ' + dibuat + ', dilewati ' + dilewati + ', gagal ' + gagal);
  log('Selanjutnya: daftarkan namanya di POOL scripts/assign-images.mjs');
}

main().catch(e => { console.error(e); process.exit(1); });
