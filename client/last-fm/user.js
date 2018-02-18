const LastFm = require('../last-fm');

const User = {
    getInfo: function(params) {
        let p = LastFm.setDefaults(Object.assign({
            method: 'gettopartists',
            period: '12month',
        }, params));
    }
};

module.exports = User;