const client = require('../index');

const LastFm = {
    defaults: {
        format: 'json',
        autocorrect: 1,
        api_key: process.env.LASTFM_API_KEY,
        user: process.env.LASTFM_USER,
        limit: 15,
        page: 1
    },

    buildQueryString : function(params) {
        return '?' + Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    },

    client: function(params) {
        return client.get(this.buildQueryString(params));
    },

    setDefaults: function(params) {
        return Object.assign(this.defaults, params);
    }
};

module.exports = LastFm;