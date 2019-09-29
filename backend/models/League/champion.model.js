const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const champion = new Schema({
    key: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    title: {type: String, required: false},
    blurb: {type: String, required: false},
    info: {
        attack: {type: Number, required: false},
        defense: {type: Number, required: false},
        magic: {type: Number, required: false},
        difficulty: {type: Number, required: false}
    },
    tags: {type: String, required: false},
},{
    timestamps: true,
});

const Champion = mongoose.model('Champion', champion);

module.exports = Champion;