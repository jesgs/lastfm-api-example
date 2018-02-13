const artists = require('express').Router();
const client = require('../client');

artists.get('/:id', (req, res) => {
    const endpoint = '?method=artist.gettopalbums&format=json&user='
        + process.env.LASTFM_USER + "&api_key=" + process.env.LASTFM_API_KEY
        + "&mbid=" + req.params.id;


    client.get(endpoint).then((response) => {
        res.status(200).render('artist', {
            artist: response.data.topalbums['@attr'],
            albums: response.data.topalbums.album
        });
    });
});

module.exports = artists;