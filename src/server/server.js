const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 8081;

let trips = [];


const GEONAMES_API_KEY = process.env.GEONAMES_API_KEY;
const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;


app.get("/location", async (req, res) => {
    const { city } = req.query;
    const geoUrl = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${GEONAMES_API_KEY}`;
    
    try {
        const response = await fetch(geoUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error fetching location data" });
    }
});


app.get("/weather", async (req, res) => {
    const { lat, lon } = req.query;
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHERBIT_API_KEY}`;
    
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error fetching weather data" });
    }
});


app.get("/image", async (req, res) => {
    const { city } = req.query;
    const imageUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${city}&image_type=photo`;

    try {
        const response = await fetch(imageUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error fetching image data" });
    }
});


app.post("/addTrip", (req, res) => {
    const newTrip = req.body;
    trips.push(newTrip);
    res.send({ message: "Trip added successfully", trips });
});


app.get("/getTrips", (req, res) => {
    res.send(trips);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
