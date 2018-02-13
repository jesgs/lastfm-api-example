const express = require('express');
const router = express.Router();
const client = require('../client');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.statusCode = 200;
    const endpoint = '?method=user.gettopartists&format=json&user='
        + process.env.LASTFM_USER + "&api_key=" + process.env.LASTFM_API_KEY
        + "&period=12month"
        + "&limit=50"
        + "&page=1";

    client.get(endpoint).then((response) => {
        res.render('home', { title: '', data: response.data });
    }).catch((error) => {
        res.render('error', { title: '', data: error.data });
    });
});

module.exports = router;
