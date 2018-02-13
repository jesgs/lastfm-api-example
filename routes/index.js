const router = require('express').Router();
const home = require('./home');
const artists = require('./artists');

router.use('/', home);
router.use('/artists', artists);

// catch 404 and forward to error handler
router.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;
