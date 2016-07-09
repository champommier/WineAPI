var SERVER_PORT = 1971;

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

// Routes
app.use('/api', require('./routes/api'));

// Return router
module.exports = router;

// Start server
app.listen(SERVER_PORT);
console.log('Listening on port ' + SERVER_PORT);