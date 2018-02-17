const album = require('express').Router();
const albumClient = require('../client/last-fm/album');

album.get('/:artistId/albums/:albumId', (req, res) => {
    const regex = /(-)/g,
          artist = req.params.artistId.replace(regex, ' '),
          album = req.params.albumId.replace(regex, ' ');

    albumClient.getInfo(album, artist).then((response) => {
        if (!response.data.error) {
            res.status(200).render('album', {
                title: [
                    response.data.album.artist,
                    response.data.album.name
                ],
                album: response.data.album
            });
        } else {
            res.status(200).render('api_error', {error: response.data})
        }
    }).catch((error) => {
        res.status(500).render('error', {error: error})
    });
});

module.exports = album;