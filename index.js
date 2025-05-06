import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const TOKEN = "7036988768:AAE-W_MTK2e0Tp3Svrkne0QvoMaip-9zbv4";
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const IMAGE_URL = "https://i.postimg.cc/nMbWRFB0/Leonardo-Phoenix-10-A-modern-mobile-payment-welcome-banner-in-1.jpg";

// Set webhook
app.get("/setwebhook", async (req, res) => {
  const url = `https://YOUR-VERCEL-URL.vercel.app/webhook`; // Update this after deploying
  const resData = await fetch(`${TELEGRAM_API}/setWebhook?url=${url}`);
  const data = await resData.json();
  res.json(data);
});

// Receive messages
app.post("/webhook", async (req, res) => {
  const chatId = req.body.message.chat.id;

  const keyboard = {
    inline_keyboard: [
      [{ text: "🚀 Start", url: "https://t.me/ABPaybdbot/app" }],
      [{ text: "🌐 Join Our Community", url: "https://t.me/ABPaybd" }],
      [{ text: "📣 Support & Add maney", url: "https://t.me/Absiddikseo" }],
      [{ text: "🕵️‍♂️ Apply Agent", url: "https://t.me/Absiddikseo" }],
    ],
  };

  await fetch(`${TELEGRAM_API}/sendPhoto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      photo: IMAGE_URL,
      caption: "Welcome to *AB Pay* 💸 — Fast, Secure, and Easy Payments!",
      parse_mode: "Markdown",
      reply_markup: keyboard,
    }),
  });

  res.sendStatus(200);
});

app.listen(3000, () => console.log("Bot is live"));
