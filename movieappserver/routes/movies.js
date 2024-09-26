// [SECTION] Dependencies and Modules
const express = require("express");
const https = require("https");
require("dotenv").config();

// [SECTION] Routing Component
const router = express.Router();

// [SECTION] Route for movie search
router.get("/", (req, res) => {
    const { search } = req.query;
    const apiKey = process.env.OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`;

    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            res.json(JSON.parse(data));
        });
    }).on('error', (error) => {
        res.status(500).json({ error: error.message });
    });
});

// [SECTION] Export Route System
module.exports = router;
