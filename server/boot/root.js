'use strict';
const axios = require("axios");
require('dotenv').config();


module.exports = function (server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();

    router.get("/proxy/yelp", (req, res) => {
        const term = req.query
        const apiKey = process.env.API_KEY;
        const yelpUrl = "https://api.yelp.com/v3/businesses/search";
        console.log('term is', term)
        axios
            .get(yelpUrl, {
                headers: {
                    Authorization: "Bearer " + apiKey
                },
                params: {
                    term,
                    location: "92139"
                }
            })
            .then(response => {
                res.send(response.data); // <= send data to the client
            })
            .catch(err => {
                console.log(err);
                res.send({ err }); // <= send error
            });
    });
    server.use(router);
};
