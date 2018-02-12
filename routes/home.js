const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.statusCode = 200;
    res.render('index', { title: '' });
});

module.exports = router;
