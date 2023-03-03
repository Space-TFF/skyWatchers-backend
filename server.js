'use strict';

console.log('server is connected.');
const axios = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const verifyUser = require('./auth');

///mongoose?

const PORT = process.env.PORT || 5005

app.get('/', (request, response) => {
    response.send('hello from the server.');
});


app.use(verifyUser);
///////////////////


app.get("*", (request, response) => {
    response.status(404).send("Not found");
})

app.use((error, request, response, next) => {
    response.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
