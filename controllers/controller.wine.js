const wineModel = require('../models/model.wine');
const mongoose = require('mongoose');

// Create and Save a new Wine
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Wine can not be empty"
        });
    }

    // Create a Wine
    const wine = new wineModel({
        country: req.body.country,
        area: req.body.area,
        name: req.body.name,
        color: req.body.color
    });

    // Save Wine in the database
    wine.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the wine."
            });
        });
};

// Retrieve and return all wines from the database.
exports.findAll = (req, res) => {
    console.log("findAll");
    wineModel.find()
        .then(wines => {
            res.send(wines);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving wines."
            });
        });
};

// Find a single wine with a wineId
exports.findOne = (req, res) => {
    wineModel.findById(req.params.wineId)
        .then(wine => {
            if (!wine) {
                return res.status(404).send({
                    message: "Wine not found with id " + req.params.wineId
                });
            }
            res.send(wine);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Wine not found with id " + req.params.wineId
                });
            }
            return res.status(500).send({
                message: "Error retrieving wine with id " + req.params.wineId
            });
        });
};

// Update a wine identified by the wineId in the request
exports.update = (req, res) => {
    // Validate Request
    if ((!req.body.country) || (!req.body.area) || (!req.body.name) || (!req.body.color)) {
        return res.status(400).send({
            message: "Wine content can not be empty"
        });
    }

    // Find wine and update it with the request body
    wineModel.findByIdAndUpdate(req.params.wineId, {
        country: req.body.country,
        area: req.body.area,
        name: req.body.name,
        color: req.body.color
    }, { new: true })
        .then(wine => {
            if (!wine) {
                return res.status(404).send({
                    message: "Wine not found with id " + req.params.wineId
                });
            }
            res.send(wine);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Wine not found with id " + req.params.wineId
                });
            }
            return res.status(500).send({
                message: "Error updating wine with id " + req.params.wineId
            });
        });
};

// Delete a wine with the specified wineId in the request
exports.delete = (req, res) => {
    wineModel.findByIdAndRemove(req.params.wineId)
    .then(wine => {
        if(!wine) {
            return res.status(404).send({
                message: "Wine not found with id " + req.params.wineId
            });
        }
        res.send({message: "Wine deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Wine not found with id " + req.params.wineId
            });                
        }
        return res.status(500).send({
            message: "Could not delete wine with id " + req.params.wineId
        });
    });
};