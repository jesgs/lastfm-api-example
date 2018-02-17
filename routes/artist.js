const artist = require('express').Router();
const artistClient = require('../client/last-fm/artists');

artist.get('/:id', (req, res) => {
    const artist = req.params.id.replace(/(-)/g, ' ');
    artistClient.getTopAlbums(artist).then((response) => {
        let artist = response.data.topalbums['@attr'].artist;
        res.status(200).render('artist', {
            title: artist,
            artist: artist,
            albums: response.data.topalbums.album
        });
    }).catch((error) => {
        res.status(500).render('error', {error: error})
    });
});

module.exports = artist;