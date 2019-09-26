const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const championMasteriesSchema = new Schema({
    championId: {
        type: Number, 
        required: true,
    },
    championLevel: {type: Number, required: false},
    chestGranted:{ type: Boolean, required: false},
    championPoints: {type: Number, required: false},
    championPointsSinceLastLevel: {type: Number, required: false},
    championPointsUntilNextLevel: {type: Number, required: false},
    summonerId: {type: String, required: false},
    tokensEarned: {type: Number, required: false},
    lastPlayTime: {type: Number, required: false}
},{
    timestamps: true,
});

const ChampionMasteries = mongoose.model('ChampionMasteries', championMasteriesSchema);

module.exports = ChampionMasteries;