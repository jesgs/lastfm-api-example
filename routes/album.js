const album = require('express').Router();
const client = require('../client');

album.get('/:albumId', (req, res) => {
    res.status(200).render('album', {id: req.param.albumId})
});

module.exports = album;