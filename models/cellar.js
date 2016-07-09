// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var cellarSchema = new mongoose.Schema({
    cellar: String,
    address: String
});

// Return model
module.exports = restful.model('Cellars', cellarSchema);