export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  const TOKEN = "7036988768:AAE-W_MTK2e0Tp3Svrkne0QvoMaip-9zbv4";
  const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
  const IMAGE_URL = "https://i.postimg.cc/nMbWRFB0/Leonardo-Phoenix-10-A-modern-mobile-payment-welcome-banner-in-1.jpg";

  const chatId = req.body.message?.chat?.id;
  if (!chatId) return res.status(400).send('Chat ID missing');

  const buttons = {
    inline_keyboard: [
      [{ text: "🚀 Start", url: "https://t.me/ABPaybdbot/app" }],
      [{ text: "🌐 Join Our Community", url: "https://t.me/ABPaybd" }],
      [{ text: "📣 Support & Add maney", url: "https://t.me/Absiddikseo" }],
      [{ text: "🕵️‍♂️ Apply Agent", url: "https://t.me/Absiddikseo" }],
    ],
  };

  const payload = {
    chat_id: chatId,
    photo: IMAGE_URL,
    caption: "Welcome to *AB Pay* 💸 — Fast, Secure, and Easy Payments!",
    parse_mode: "Markdown",
    reply_markup: buttons,
  };

  await fetch(`${TELEGRAM_API}/sendPhoto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  res.status(200).send('Message sent');
}
