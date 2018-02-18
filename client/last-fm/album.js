const LastFm = require('../last-fm');

const Album = {
    getInfo: function(album, artist) {
        let params = LastFm.setDefaults({
            method: 'album.getinfo',
            artist: encodeURIComponent(artist),
            album: encodeURIComponent(album)
        });

        return LastFm.client(params);
    }
};

module.exports = Album;