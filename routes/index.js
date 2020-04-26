var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {


    mongoose.connect(process.env.MLAB_DB_CREDENTIAL_STR, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log('Yay!') // we're connected!
    );
    res.render('index', { title: 'OK' });




});

module.exports = router;