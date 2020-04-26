var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var telegramRouter = require('./routes/telegram');

const dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
    throw result.error
}

// console.log(result.parsed)

///////// TELEGRAM //////////////////

// const TeleBot = require('telebot');
// const bot = new TeleBot(process.env.TELEGRAM_TOKEN);

// bot.getMe().then((res) => {
//     console.log(res)
// })



// bot.on('text', (res => {
//     console.log(res)
// }))

// bot.start();

///////// TELEGRAM //////////////////

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tele', telegramRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;