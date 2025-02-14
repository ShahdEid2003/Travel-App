const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

const port = 8081;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// بيانات الرحلة
let tripData = {};

app.post('/addTrip', (req, res) => {
    tripData = req.body;
    res.send({ message: 'Trip data received', tripData });
});

app.get('/getTrip', (req, res) => {
    res.send(tripData);
});
