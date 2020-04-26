var express = require('express');
var router = express.Router();
var TeleBot = require('telebot');

try {



    router.post('/sendMessage', function(req, res, next) {
        var bot = new TeleBot(process.env.TELEGRAM_TOKEN);
        console.log(req.body)
        bot.sendMessage(process.env.MY_CHAT_ID, JSON.stringify({ message: req.body.message }));

        // bot.start();
        res.render('index', { title: 'Telegram' });
    });
} catch (e) {
    console.log(e)
}
module.exports = router;