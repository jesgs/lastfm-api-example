const album = require('express').Router();
const client = require('../client');

album.get('/:artistId/albums/:albumId', (req, res) => {
    const regex = /(-)/g,
          artist = req.params.artistId.replace(regex, ' '),
          album = req.params.albumId.replace(regex, ' ');

    const endpoint = '?method=album.getinfo&format=json&user='
        + process.env.LASTFM_USER + "&api_key=" + process.env.LASTFM_API_KEY
        + "&artist=" + artist
        + "&album=" + album;

    client.get(endpoint).then((response) => {
        res.status(200).render('album', {
            album: response.data.album
        });
    }).catch((error) => {

    });
});

module.exports = album;