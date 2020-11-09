const { Schema, model } = require('mongoose');

const costumeSchema = new Schema(
    {
        username: String,
        top: Object,
        bottom: Object, 
        accessory: Object,
        name: String
    }
);

const Costume = model('costume', costumeSchema);

module.exports = Costume;