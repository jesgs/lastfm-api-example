const home = require('./home');

module.exports = function (app) {
    app.use('/', home);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
};
