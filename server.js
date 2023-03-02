'use strict';

console.log('server is connected.');
const axios = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5005

app.get('/', (request, response) => {
    response.send('hello from the server.');
});




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
