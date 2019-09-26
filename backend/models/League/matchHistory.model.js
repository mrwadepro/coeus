const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchHistoryModel = new Schema({
    gameId: {
        type: Number, 
        required: true,
    },
    queueId: {type: Number, required: true},
    seasonId: {type: Number, required: false},
    participantIdentities: {
        participantId: {type: Number, require: true},
        currentPlatformId: {type: String, require: false},
        summonerName: {type: String, require: false},
        matchHistoryUri: {type: String, require: false},
        platformId: {type: String, require: false},
        currentAccountId: {type: String, require: false},
        ProfileIcon: {type: Number, require: false},
        summonerId: {type: String, require: false},
        accountId: {type: String, require: false} 
    },
    gameVersion: {type: String, required: false},
    platformId: {type: String, required: false},
    gameMode: {type: String, required: false},
    role: {type: String, required: false},
    season: {type: Number, required: false},
},{
    timestamps: true,
});

const MatchHistoryModel = mongoose.model('MatchHistoryModel', matchHistoryModel);

module.exports = MatchHistoryModel;