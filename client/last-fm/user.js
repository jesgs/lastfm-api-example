const LastFm = require('../last-fm');

const User = {
    getInfo: function(params) {
        let p = LastFm.setDefaults(Object.assign({
            method: 'user.gettopartists',
            period: '12month',
        }, params));

        return LastFm.client(p);
    }
};

module.exports = User;