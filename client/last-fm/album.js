const LastFm = require('../last-fm');

const Album = {
    getInfo: function(album, artist) {
        let params = {
            method: 'album.getinfo',
            format: 'json',
            api_key: process.env.LASTFM_API_KEY,
            autocorrect: 1,
            user: process.env.LASTFM_USER,
            artist: encodeURIComponent(artist),
            album: encodeURIComponent(album)
        };

        return LastFm.client(params);
    }
};

module.exports = Album;