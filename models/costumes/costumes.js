const { Schema, model } = require('mongoose');

const costumeSchema = new Schema(
    {
        username: String,
        top: Object,
        bottom: Object, 
        accessory: Object
    }
);

const Costume = model('item', costumeSchema);

module.exports = Costume;