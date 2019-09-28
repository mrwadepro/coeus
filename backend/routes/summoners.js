
const router = require('express').Router();
let Summoner = require('../models/League/summoner.model');
const axios = require('axios');
const api_key = 'RGAPI-6a0a7831-b84f-4439-8683-a378bea5c6eb'

router.route('/findsummoner').post((req, res) => {
    var URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + 
    req.body.summonername + '?api_key=' + api_key;
    axios.get(URL,
        {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
    .then(data => {
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
    })
    .catch(err => console.log(err));
   res.json('Done.');
});

module.exports = router;