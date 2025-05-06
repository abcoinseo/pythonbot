from telegram import InlineKeyboardButton, InlineKeyboardMarkup, InputMediaPhoto, Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "7036988768:AAE-W_MTK2e0Tp3Svrkne0QvoMaip-9zbv4"  # Replace with your actual bot token

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    image_url = "https://i.postimg.cc/nMbWRFB0/Leonardo-Phoenix-10-A-modern-mobile-payment-welcome-banner-in-1.jpg"

    keyboard = [
        [InlineKeyboardButton("🚀 Start", url="https://t.me/ABPaybdbot/app")],
        [InlineKeyboardButton("🌐 Join Our Community", url="https://t.me/ABPaybd")],
        [InlineKeyboardButton("📣 Support & Add maney", url="https://t.me/Absiddikseo")],
        [InlineKeyboardButton("🕵️‍♂️ Apply Agent", url="https://t.me/Absiddikseo")],
        # You can add more buttons like this:
        # [InlineKeyboardButton("💼 Visit Website", url="https://yourwebsite.com")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await context.bot.send_photo(
        chat_id=update.effective_chat.id,
        photo=image_url,
        caption="Welcome to **AB Pay** 💸 — Fast, Secure, and Easy Payments!",
        parse_mode="Markdown",
        reply_markup=reply_markup
    )

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

app.run_polling()
