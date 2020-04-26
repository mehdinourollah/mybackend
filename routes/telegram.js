var express = require('express');
var router = express.Router();
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TELEGRAM_TOKEN);

router.post('/sendMessage', function(req, res, next) {

    console.log(req.body)
    bot.sendMessage(process.env.MY_CHAT_ID, JSON.stringify({ message: req.body.message }));

    // bot.start();
    res.render('index', { title: 'Telegram' });
});

module.exports = router;