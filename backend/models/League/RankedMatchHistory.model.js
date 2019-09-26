const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankedMatchHistory = new Schema({
    accountId: {
        type: String, 
        required: true,
    },
    lane: {type: String, required: true},
    gameId: {type: Boolean, required: false},
    champion: {type: Number, required: false},
    platformId: {type: Boolean, required: false},
    timestamp: {type: Number, required: false},
    queue: {type: Number, required: false},
    role: {type: String, required: false},
    season: {type: Number, required: false},
},{
    timestamps: true,
});

const RankedMatchHistory = mongoose.model('RankedMatchHistory', rankedMatchHistory);

module.exports = RankedMatchHistory;