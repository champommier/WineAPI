// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Wine = require('../models/wine');

// Routes
Wine.methods(['get', 'put', 'post', 'delete']);
Wine.register(router, '/wines');

// Return router
module.exports = router;