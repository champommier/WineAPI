// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var wineSchema = new mongoose.Schema({
    name: String,
    area: String,
    subarea: String,
    color: String
});

// Return model
module.exports = restful.model('Wines', wineSchema);