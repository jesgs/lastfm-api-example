const home = require('express').Router();
const userClient = require('../client/last-fm/user');

home.get('/', function(req, res, next) {
    userClient.getInfo({}).then((response) => {
        if (!response.data.error) {
            res.status(200).render('home', { title: '', data: response.data });
        } else {
            res.status(200).render('api_error', {error: response.data})
        }
    }).catch((error) => {
        res.status(500).render('error', { title: '', error: error.data });
    });
});

module.exports = home;
