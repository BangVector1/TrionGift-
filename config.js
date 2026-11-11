/* =========================================================
   TrionGift — НАЛАШТУВАННЯ
   Цей файл можна редагувати прямо на GitHub: відкрий config.js → олівець (Edit) → Commit changes.
   Правило: змінюй лише значення після двокрапки. Лапки "", коми й дужки не чіпай.

   Етап 1 (запуск):  BOT_USERNAME, APP_SHORT_NAME, SUPPORT_USERNAME
   Етап 2 (сервер):  MOCK: false  і  API_BASE — адреса сервера Cloudflare
   НІКОЛИ не вписуй сюди токен бота чи ключ Crypto Pay — цей файл бачать усі.
   ========================================================= */
window.CONFIG = {
  APP_NAME: "TrionGift",

  // Мова за замовчуванням: ru (основна) | uk | en. Вибір користувача зберігається.
  DEFAULT_LANG: "ru",

  // true — працює на демо-даних (без сервера).
  // false — усі запити йдуть на API_BASE (твій сервер на Cloudflare Workers).
  MOCK: true,
  API_BASE: "https://api.your-domain.com", // заміниш на адресу свого сервера

  // Комісія маркетплейсу (%). Хто платить — обирає продавець: покупець / продавець / навпіл
  FEE_PERCENT: 3,
  DEFAULT_FEE_PAYER: "buyer",

  // Обміни NFT
  EXCHANGE_FEE_PERCENT: 3,   // від оцінки вартості NFT
  TOPUP_FEE_PERCENT: 3,      // від суми доплати
  SAFE_USERNAME: "TrionGiftSafe", // бізнес-акаунт «сейф», куди автор обміну кладе свій NFT
  TRANSFER_STARS: 25,        // орієнтовна ціна переказу NFT із сейфа (реальну бот бере з transfer_star_count)
  SWAP_PAY_TIMEOUT_MIN: 15,  // сплатити комісію/доплату
  SWAP_SAFE_TIMEOUT_MIN: 30, // автор кладе NFT у сейф
  SWAP_SEND_TIMEOUT_MIN: 30, // друга сторона надсилає свій NFT автору

  // Валюти (оплата через Crypto Pay / @send).
  // GRAM — це колишній TON (з червня 2026 тікер GRAM).
  // Поле asset — код, який піде в Crypto Pay API; перевір актуальний код у їхній документації.
  CURRENCIES: {
    GRAM: { code: "GRAM", label: "GRAM", asset: "TON", decimals: 2 },
    USDT: { code: "USDT", label: "USDT", asset: "USDT", decimals: 2 },
  },
  DEFAULT_CURRENCY: "GRAM",

  // Таймери угоди (хвилини)
  ACCEPT_TIMEOUT_MIN: 15, // продавець має прийняти угоду
  SEND_TIMEOUT_MIN: 30,   // продавець має надіслати NFT після прийняття
  PAY_TIMEOUT_MIN: 15,    // покупець має оплатити рахунок
  PRIVATE_PAY_TIMEOUT_MIN: 60, // приватна угода: покупець має оплатити

  // Аукціони
  AUCTION_MIN_STEP_PERCENT: 5,        // наступна ставка мінімум на 5% вища
  AUCTION_ANTI_SNIPE_SEC: 60,         // ставка в останні 60 с продовжує аукціон на 60 с
  AUCTION_DURATIONS_H: [1, 6, 12, 24, 72], // готові варіанти тривалості (години)
  AUCTION_MAX_H: 168,                 // максимум — 7 днів

  // Ліміти ціни
  MIN_PRICE: { GRAM: 1, USDT: 1 },
  MAX_PRICE: { GRAM: 1000000, USDT: 5000000 },

  SUPPORT_USERNAME: "TrionGiftSupport", // заміниш на свій акаунт підтримки
  BOT_USERNAME: "TrionGiftBot",          // заміниш на username свого бота
  APP_SHORT_NAME: "app",                 // коротка назва Mini App з @BotFather (/newapp)
  // Посилання на приватну угоду: t.me/<BOT_USERNAME>/<APP_SHORT_NAME>?startapp=deal_<id>
};
