const home = require('express').Router();
const client = require('../client');

home.get('/', function(req, res, next) {
    const endpoint = '?method=user.gettopartists&format=json&user='
        + process.env.LASTFM_USER + "&api_key=" + process.env.LASTFM_API_KEY
        + "&period=12month"
        + "&limit=50"
        + "&page=1";

    client.get(endpoint).then((response) => {
        res.status(200).render('home', { title: '', data: response.data });
    }).catch((error) => {
        res.status(500).render('error', { title: '', data: error.data });
    });
});

module.exports = home;
