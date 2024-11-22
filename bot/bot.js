const TelegramBot = require('node-telegram-bot-api');

// Insira o token do Bot aqui
const token = '7914677594:AAE12E7a11H46fO6mHT_5GZfwgNNiBg4SIw';
const bot = new TelegramBot(token, { polling: true });

// URL do jogo
const gameUrl = 'https://seu-site-hospedado.com/game/index.html';

// Comando inicial
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bem-vindo! Use /jogar para começar.");
});

// Comando para enviar o jogo
bot.onText(/\/jogar/, (msg) => {
    bot.sendGame(msg.chat.id, "hamster_game");
});

// Callback para o jogo
bot.on('callback_query', (query) => {
    bot.answerCallbackQuery(query.id, { url: gameUrl });
});
