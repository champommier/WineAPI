// Import express
const express = require('express');
const bodyParser = require('body-parser');
const wineRouter = require('./routes/route.wine');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Server OK" });
});

require('./routes/route.wine')(app);

var port = process.env.PORT || 9090;
app.listen(port, function () {
    console.log("Running Wine API on port " + port);
});