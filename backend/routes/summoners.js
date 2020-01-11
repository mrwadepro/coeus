const router = require("express").Router();
let Summoner = require("../models/League/summoner.model");
let ChampionMasteries = require("../models/League/championMasteries.model");
const axios = require("axios");
require("dotenv").config();

router.route("/findsummoner").post((req, res) => {
  var URL =
    "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    req.body.summonername +
    "?api_key=" +
    process.env.API_KEY;
  axios
    .get(URL, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
    .then(data => {
      console.log(data.data.id);
      Summoner.findOne({ accountId: data.data.accountId }, { $exists: true })
        .then(sumdata => {
          if (sumdata == null) {
            const accountId = data.data.accountId;
            const puuid = data.data.puuid;
            const name = data.data.name;
            const profileIconId = data.data.profileIconId;
            const revisionDate = data.data.revisionDate;
            const summonerLevel = data.data.summonerLevel;
            const summonerId = data.data.id;
            const newSummoner = new Summoner({
              accountId,
              summonerId,
              puuid,
              name,
              profileIconId,
              revisionDate,
              summonerLevel
            });
            newSummoner.save();
          }
        })
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
  res.json("Done.");
});

router.route("/summonerMastery").post((req, res) => {
  Summoner.find({ name: req.body.name }, { summonerId: 1 })
    .then(sumdata => {
      if (sumdata != null) {
        var URL =
          "https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
          sumdata[0].summonerId +
          "?api_key=" +
          process.env.API_KEY;
        axios
          .get(URL, {
            headers: { "Access-Control-Allow-Origin": "*" }
          })
          .then(masterydata => {
            console.log(masterydata.data[0]);
            const championId = masterydata.championId;
            const championLevel = masterydata.championLevel;
            const championPoints = masterydata.championPoints;
            const lastPlayTime = masterydata.lastPlayTime;
            const championPointsSinceLastLevel =
              masterydata.championPointsSinceLastLevel;
            const championPointsUntilNextLevel =
              masterydata.championPointsUntilNextLevel;
            const chestGranted = masterydata.chestGranted;
            const tokensEarned = masterydata.tokensEarned;
            const summonerId = masterydata.summonerId;

            const newChampionMastery = new ChampionMasteries({
              championId,
              championLevel,
              championPoints,
              lastPlayTime,
              championPointsSinceLastLevel,
              championPointsUntilNextLevel,
              chestGranted,
              tokensEarned,
              summonerId
            });
            newChampionMastery.save();
          })
          .catch(err => console.log(err));
      }
    })
    .catch(err => res.status(400).json("Error: " + err));
  res.json("Done.");
});

module.exports = router;
