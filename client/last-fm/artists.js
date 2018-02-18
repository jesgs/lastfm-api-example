const LastFm = require('../last-fm');

const Artist = {
    getTopAlbums: function(artist) {
        let params = LastFm.setDefaults({
            method: 'artist.gettopalbums',
            limit: 15,
            artist: encodeURIComponent(artist)
        });
        console.log(params);
        return LastFm.client(params);
    }
};

module.exports = Artist;