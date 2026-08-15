// Mendaftarkan (atau mencabut) alamat penerima pesan bot tanya jawab.
//
//   node scripts/pasang-webhook.mjs            pasang ke the-signal.id
//   node scripts/pasang-webhook.mjs --status   lihat keadaan sekarang
//   node scripts/pasang-webhook.mjs --cabut    matikan bot penjawab
//
// Perlu TELEGRAM_BOT_TOKEN dan TELEGRAM_WEBHOOK_SECRET di lingkungan.
//
// Rahasianya WAJIB dan bukan formalitas: alamat fungsi di Vercel bersifat
// publik, jadi tanpa pencocokan rahasia siapa pun yang menebaknya bisa
// mengirim pertanyaan palsu bertubi-tubi dan yang membayar model adalah kita.
// Telegram menyertakan rahasia ini di tiap kiriman lewat header
// X-Telegram-Bot-Api-Secret-Token, dan api/telegram.js menolak yang tidak cocok.
import { log } from './lib.mjs';

const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
const RAHASIA = (process.env.TELEGRAM_WEBHOOK_SECRET || '').trim();
const URL_HOOK = (process.env.TELEGRAM_WEBHOOK_URL || 'https://the-signal.id/api/telegram').trim();

async function tg(metode, badan) {
  const r = await fetch('https://api.telegram.org/bot' + TOKEN + '/' + metode, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(badan || {}),
  });
  const j = await r.json();
  if (!j.ok) throw new Error(metode + ' gagal: ' + JSON.stringify(j).slice(0, 200));
  return j.result;
}

async function main() {
  if (!TOKEN) { log('TELEGRAM_BOT_TOKEN belum diset.'); process.exit(1); }

  if (process.argv.includes('--status')) {
    const info = await tg('getWebhookInfo');
    log('alamat        : ' + (info.url || '(kosong, bot belum bisa menjawab)'));
    log('rahasia dipakai: ' + (info.has_custom_certificate === false && info.url ? 'ya' : '-'));
    log('antre         : ' + (info.pending_update_count || 0));
    if (info.last_error_message) {
      log('galat terakhir: ' + info.last_error_message +
        ' (' + new Date((info.last_error_date || 0) * 1000).toISOString() + ')');
    }
    return;
  }

  if (process.argv.includes('--cabut')) {
    await tg('deleteWebhook', { drop_pending_updates: false });
    log('Webhook dicabut. Bot berhenti menjawab, kanal siaran TIDAK terpengaruh.');
    return;
  }

  if (!RAHASIA || RAHASIA.length < 16) {
    log('TELEGRAM_WEBHOOK_SECRET belum diset atau terlalu pendek (minimal 16 karakter).');
    process.exit(1);
  }

  await tg('setWebhook', {
    url: URL_HOOK,
    secret_token: RAHASIA,
    // Hanya pesan pribadi yang diminta. Tanpa penyaring ini Telegram juga
    // mengirimkan tiap postingan kanal kita sendiri ke fungsi ini, dan itu
    // panggilan sia-sia yang tetap dihitung sebagai pemakaian.
    allowed_updates: ['message'],
    max_connections: 20,
  });
  const info = await tg('getWebhookInfo');
  log('Webhook terpasang: ' + info.url);
  log('Bot siap menjawab pesan pribadi. Uji dengan mengirim /start ke botnya.');
}

main().catch(e => { console.error(String(e.message || e)); process.exit(1); });
