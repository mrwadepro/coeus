const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summonerRanking = new Schema({
    queueType: {
        type: String, 
        required: true,
    },
    summonerName: {type: String, required: true},
    hotStreak: {type: Boolean, required: false},
    wins: {type: Number, required: false},
    veteran: {type: Boolean, required: false},
    losses: {type: Number, required: false},
    rank: {type: String, required: false},
    tier: {type: String, required: false},
    inactive: {type: Boolean, required: false},
    freshBlood: {type: Boolean, required: false},
    leagueId: {type: String, required: false},
    summonerId: {type: String, required: false},
    leaguePoints: {type: Number, required: false},
},{
    timestamps: true,
});

const SummonerRanking = mongoose.model('SummonerRanking', summonerRanking);

module.exports = SummonerRanking;