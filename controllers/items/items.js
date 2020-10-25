//DEPENDENCIES
const express = require('express');
const { Model } = require('mongoose');
const items = express.Router();
const Items = require('../../models/items/items')

//MONGOOSE

//ROUTES
//Index
items.get('/', async (req, res) => {
    res.json(await Items.find({}))
});
//Create
items.post('/', async (req, res) => {
    res.json(await Items.create(req.body));
});

//EXPORT
module.exports = items;

