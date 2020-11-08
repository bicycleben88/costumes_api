// ----------------- Dependencies ---------------------
//import express library
const express = require('express');
//import model from mongoose
const { Model } = require('mongoose');
//create express router
const costume = express.Router()
//import costume model
const Costume = require('../../models/costumes/costumes');

// ----------------- Routes ----------------------------
//Index
costume.get('/', async (req, res) => {
    res.json(await Costume.find({}));
});
//Delete
costume.delete('/:id', async (req, res) => {
    res.json(await Costume.findByIdAndDelete(req.params.id));
});
//Create
costume.post('/', async (req, res) => {
    res.json(await Costume.create(req.body));
});
//Update
costume.put('/:id', async (req, res) => {
    res.json(await Costume.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

// ------------------ Export ----------------------------
module.exports = costume;
