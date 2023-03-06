'use strict';

console.log('server is connected.');
const axios = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());
const verifyUser = require('./auth');


mongoose.connect(process.env.DB_URL);
const Place = require('./models/place.js')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 5005


app.get('/', (request, response) => {
    response.send('hello from the server.');
});

app.use(verifyUser);


//Change ROUTE to actual Route name
// match func names too

app.get('/ROUTE', getPlace);
app.post('/ROUTE', postPlace);
app.delete('/ROUTE/:id', deletePlace);
app.put('/ROUTE/:id', updatePlace);

async function getPlace(request, response) {
    try {
        let placeResults = await  Place.find({ email: request.user.email });
        response.status(200).send(placeResults);
    } catch (error) {
        console.error(error);
        response.status(500).send('server error');
    }
}

async function postPlace(request, response, next) {
    console.log('coming in:', request.body)
    try {
        let createPlace = await Place.create(request.body);
        response.status(200).send(createPlace);
    } catch (error) {
        next(error);
    }
}

async function deletePlace(request, response, next) {
    let id = request.params.id;
    try {
        await Place.findByIdAndDelete(id);
        response.status(200).send('Place deleted');
    } catch (error) {
        next(error);
    }
}

async function updatePlace(request, response, error) {
    let id = request.params.id;
    let placeData = request.body;
    try {
        let updatedPlace = await Place.findByIdAndUpdate(id, { placeData, email: request.user.email },{
            new: true,
            overwrite: true
        });
        response.status(200).send(updatedPlace);
    } catch (error) {
        next(error);
    }
}

app.get("*", (request, response) => {
    response.status(404).send("Not found");
})

app.use((error, request, response, next) => {
    response.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
