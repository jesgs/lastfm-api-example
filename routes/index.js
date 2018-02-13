const router = require('express').Router();
const home = require('./home');
const artist = require('./artist');
const album = require('./album');

router.use('/', home);
router.use('/artists', artist);
router.use('/artists/:id/albums/:albumId', album);

// catch 404 and forward to error handler
router.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;
