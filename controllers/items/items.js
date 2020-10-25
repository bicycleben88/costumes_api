//DEPENDENCIES
const express = require('express');
const items = express.Router();

//MONGOOSE

//ROUTES
//Index
items.get('/', (req, res) => {
    res.send(`Made it to the index page!`)
});

//EXPORT
module.exports = items;

