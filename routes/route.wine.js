module.exports = (app) => {
    const wines = require('../controllers/controller.wine');

    app.post('/wines', wines.create);
    app.get('/wines', wines.findAll);
    app.get('/wines/:wineId', wines.findOne);
    app.put('/wines/:wineId', wines.update);
    app.delete('/wines/:wineId', wines.delete);
}