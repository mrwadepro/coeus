const router = require('express').Router();
let Summoner = require('../models/League/summoner.model');
const axios = require('axios');
require('dotenv').config();

router.route('/findsummoner').post((req, res) => {
    var URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + 
    req.body.summonername + '?api_key=' + process.env.API_KEY;
    axios.get(URL,
        {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
    .then(data => {
        Summoner.findOne({ accountId: data.data.accountId}, { $exists: true })
        .then(sumdata => {
            if(sumdata == null){
                const accountId = data.data.accountId;
                const puuid = data.data.puuid;
                const name = data.data.name;
                const profileIconId = data.data.profileIconId;
                const revisionDate = data.data.revisionDate;
                const summonerLevel = data.data.summonerLevel;
                const newSummoner = new Summoner({
                    accountId,
                    puuid,
                    name,
                    profileIconId,
                    revisionDate,
                    summonerLevel
                });
                newSummoner.save()
                
            }
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));
    res.json('Done.');
});

router.route('/summonerMastery').post((req, res) => {
    var URL = 'https://na1.api.riotgames.com//lol/champion-mastery/v4/champion-masteries/by-summoner/' + 
    req.body.summonerid + '?api_key=' + api_key;
    axios.get(URL,
        {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
    .then(data => console.log(data)
        /*
        {
        const accountId = data.data.accountId;
        const puuid = data.data.puuid;
        const name = data.data.name;
        const profileIconId = data.data.profileIconId;
        const revisionDate = data.data.revisionDate;
        const summonerLevel = data.data.summonerLevel;
        const newSummoner = new Summoner({
            accountId,
            puuid,
            name,
            profileIconId,
            revisionDate,
            summonerLevel
        });
        console.log(newSummoner)
        newSummoner.save()
    }
    */
    )
    .catch(err => console.log(err))
   res.json('Done.');
});

module.exports = router;