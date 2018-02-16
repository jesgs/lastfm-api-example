const artist = require('express').Router();
const client = require('../client');

artist.get('/:id', (req, res) => {
    const artist = req.params.id.replace(/(-)/g, ' ');
    const endpoint = '?method=artist.gettopalbums&format=json&user='
        + process.env.LASTFM_USER + "&api_key=" + process.env.LASTFM_API_KEY
        + "&autocorrect=1"
        + "&limit=15"
        + "&artist=" + artist;

    client.get(endpoint).then((response) => {
        res.status(200).render('artist', {
            debug: response.data,
            artist: response.data.topalbums['@attr'],
            albums: response.data.topalbums.album
        });
    }).catch((error) => {
        res.status(500).render('error', {error: error})
    });
});

module.exports = artist;