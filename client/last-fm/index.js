const client = require('../index');

const LastFm = {
    defaults: {
        format: 'json',
        api_key: process.env.LASTFM_API_KEY
    },

    buildQueryString : function(params) {
        return '?' + Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    },

    client: function(params) {
        return client.get(LastFm.buildQueryString(params));
    }
};

module.exports = LastFm;