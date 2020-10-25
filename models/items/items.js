const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        item: String, 
        img: String
    }
);

const Item = model('item', itemSchema);

module.exports = Item;