const LastFm = require('../last-fm');

const Artist = {
    getTopAlbums: function(artist) {
        let params = {
            method: 'artist.gettopalbums',
            format: 'json',
            api_key: process.env.LASTFM_API_KEY,
            autocorrect: 1,
            user: process.env.LASTFM_USER,
            limit: 15,
            artist: encodeURIComponent(artist)
        };

        return LastFm.client(params);
    }
};

module.exports = Artist;