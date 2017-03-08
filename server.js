var SERVER_PORT = 1971;
var MASHAPE_SECRET = 'JAlLZJD3uPBGjoBJmVhq5zzTiSY9LGbDfc3KxOKrcIpWitBMBk';
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Check header
app.use(function (req, res, next) {
    if(req.get('X-Mashape-Proxy-Secret') == MASHAPE_SECRET) {
        next();
    } else {
        return res.sendFile("http://raspberrypi:1971/blocked.html")
    }
});

// Routes
app.use('/api', require('./routes/api'));

// Return router
module.exports = router;

// Start server
app.listen(SERVER_PORT);
console.log('Listening on port ' + SERVER_PORT);