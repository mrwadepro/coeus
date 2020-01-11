const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summoner = new Schema({
    accountId: {type: String, required: true, unique: true},
    puuid: {type: String, required: false},
    summonerId: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    profileIconId: {type: Number, required: false},
    revisionDate: {type: Number, required: false},
    summonerLevel: {type: Number, required: false},
},{
    timestamps: true,
});

const Summoner = mongoose.model('Summoner', summoner);

module.exports = Summoner;