// Daftar adegan foto per kategori. BERKAS DATA MURNI, tanpa efek samping.
//
// Dipakai dua tempat sekaligus:
//   - lengkapi-foto.mjs  -> untuk menggenerate gambarnya
//   - assign-images.mjs  -> untuk tahu foto itu milik kategori mana
//
// Disatukan supaya tidak terulang lagi: sudah DUA KALI foto digenerate lalu
// lupa didaftarkan ke POOL, jadi filenya ada di disk tapi tidak pernah dipakai
// artikel mana pun. Sekarang cukup tambah satu baris di sini, keduanya ikut.

export const ADEGAN = {
  'Aksi Korporasi': [
    ['paparan-publik', 'Company executives presenting at a public expose event, seated analysts taking notes in the foreground, hotel function room'],
    ['jabat-tangan-direksi', 'Two Indonesian executives shaking hands after an agreement, colleagues applauding softly behind, warm indoor light'],
    ['lorong-kantor-pusat', 'Employees walking down a bright modern office corridor carrying folders, glass partitions on both sides'],
    ['rapat-komite', 'Small committee meeting around a round table, five people in discussion, notepads and coffee cups'],
    ['lobi-lift-kantor', 'Executives waiting at a marble elevator lobby in a Jakarta office tower, morning light from tall windows'],
    ['arsip-berkas', 'Rows of archive boxes and ring binders on metal shelves in a company records room'],
    ['meja-notaris', 'Notary desk with an embossing seal and stamp pad, hands of two signatories out of focus behind'],
    ['resepsionis-korporat', 'Corporate reception desk with a receptionist greeting a visitor, plants and soft lighting'],
    ['lobi-bursa', 'People walking through the spacious lobby of a stock exchange building, high ceiling and daylight'],
    ['presentasi-jauh', 'Presenter gesturing toward a projection screen, photographed from the back of a full audience, screen out of focus'],
    ['tangga-kaca-kantor', 'Executives descending a glass and steel staircase inside a modern corporate atrium'],
    ['ruang-tunggu-eksekutif', 'Executive waiting lounge with leather armchairs and a low table, city view through the window'],
    ['serah-terima-map', 'Close up of a document folder being handed from one person to another across a desk'],
    ['rapat-daring', 'Over the shoulder view of a laptop showing a grid video call, notebook and pen beside it on a desk'],
    ['papap-strategi', 'People standing at a whiteboard covered in abstract boxes and arrows, discussing, no legible writing'],
    ['tiba-di-kantor', 'Executive stepping out of a car at the entrance of a corporate building, driver holding the door'],
    ['kopi-rapat', 'Coffee cups, notebooks and reading glasses left on a meeting table mid discussion, people blurred behind'],
    ['jendela-kota-malam', 'Executive standing at a floor to ceiling window looking over Jakarta at night, seen from behind'],
    ['berkas-disortir', 'Hands sorting stacks of paper folders on a large desk, several piles arranged'],
    ['foto-bersama-korporat', 'Group of executives standing together for a photo moment after a ceremony, applause, indoor stage'],
  ],
  'Perbankan': [
    ['konter-bank-pagi', 'Bank branch counter early in the morning, staff preparing, empty customer chairs'],
    ['petugas-layani-nasabah', 'Bank officer explaining something to a seated customer across a desk, both in profile'],
    ['mesin-antrean', 'Customer taking a paper queue ticket from a dispenser in a bank lobby'],
    ['bank-mikro-desa', 'Microfinance officer meeting village clients on a wooden porch, motorbike parked nearby'],
    ['kotak-deposit', 'Rows of safe deposit boxes in a bank vault room, one drawer partly open'],
  ],
  'Moneter': [
    ['konpers-podium', 'Official speaking at a podium during a press conference, photographers crouched in front'],
    ['pencakar-langit-jakarta', 'Cluster of Jakarta office towers photographed from below at golden hour'],
    ['rapat-dewan-gubernur', 'Formal boardroom meeting with officials seated along a long table, microphones in front of each seat'],
    ['wartawan-menunggu', 'Journalists with cameras and recorders waiting in a hallway before a briefing'],
    ['koin-logam', 'Close up of stacked Indonesian metal coins on a wooden surface, shallow focus'],
    ['layar-pasar-jauh', 'Large market data screens seen from far across a dim room, figures illegible, silhouettes of staff'],
  ],
  'Pasar Modal': [
    ['trader-dua-layar', 'Trader working at a desk with two monitors, seen over the shoulder, screens out of focus'],
    ['kelas-investor', 'Small investor education class, participants at tables facing an instructor'],
    ['papan-berjalan-kabur', 'Running ticker board photographed with motion blur so the figures are unreadable, people passing beneath'],
    ['mencatat-grafik', 'Hand drawing a rising line chart on paper with a pen, calculator beside it'],
  ],
  'Makroekonomi': [
    ['jalan-raya-padat', 'Busy Jakarta arterial road at rush hour photographed from a pedestrian bridge'],
    ['panen-sawah', 'Farmers harvesting rice in a paddy field, mountains in the far background, morning haze'],
    ['gudang-beras', 'Workers stacking sacks of rice in a large warehouse, forklift in the background'],
    ['konstruksi-perumahan', 'Housing construction site with brick walls going up and workers on scaffolding'],
  ],
  'Energi': [
    ['jaringan-listrik', 'High voltage transmission towers crossing green fields at dusk'],
    ['rig-lepas-pantai', 'Offshore oil platform on a calm sea photographed from a supply boat'],
    ['depot-bbm-malam', 'Fuel storage depot at night with floodlights and pipework'],
    ['teknisi-turbin', 'Technician in a hard hat inspecting a large industrial turbine indoors'],
  ],
  'UMKM': [
    ['konveksi-penjahit', 'Small garment workshop with several tailors at sewing machines, fabric rolls stacked'],
    ['pasar-kerajinan', 'Handicraft market stall with woven baskets and wooden goods, vendor arranging items'],
    ['warung-kelontong', 'Small neighbourhood grocery shop, owner behind the counter, goods stacked to the ceiling'],
  ],
  'BUMN': [
    ['kereta-stasiun', 'Commuter train arriving at an Indonesian station platform, passengers waiting behind the line'],
    ['terminal-bandara', 'Airport terminal interior with travellers walking, large windows and daylight'],
  ],
  'Teknologi': [
    ['lorong-server', 'Narrow aisle between server racks in a data centre, blue indicator lights'],
    ['pengembang-koding', 'Software developer working at a desk with a mechanical keyboard, screen turned away from camera'],
  ],
  'Industri': [
    ['jalur-perakitan', 'Factory assembly line with workers in uniform and safety gear at their stations'],
  ],
};
