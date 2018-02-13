const axios = require('axios');

const client = axios.create({
    baseURL: process.env.LASTFM_API_BASE,
    headers: {
        "Content-Type": "application/json"
    }
});

module.exports = client;