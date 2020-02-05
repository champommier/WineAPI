const mongoose = require('mongoose');
const schema = mongoose.Schema({
    country: String,
    area: String,
    name: String,
    color: String
});

module.exports = mongoose.model('wine', schema);