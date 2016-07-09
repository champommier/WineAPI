// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Wine = require('../models/wine');
var Cellar = require('../models/cellar');

// Routes
Wine.methods(['get', 'put', 'post', 'delete']);
Wine.register(router, '/wines');

Cellar.methods(['get', 'put', 'post', 'delete']);
Cellar.register(router,'/cellars');

// Return router
module.exports = router;