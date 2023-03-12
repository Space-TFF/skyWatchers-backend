'use strict';

console.log('seed database with data');

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Place = require('./models/event.js');

async function seed() {
    // name: {type: String, require: true},
    // city: {type: String, require: true},
    // state: {type: String, require: true},
    // time: {type: String, require: true},
    // RSVP: {type: Boolean, require: true}

    await Place.create({
        name: 'Awesome Star Outdoor Bar',
        city: 'New York City',
        state: 'NY',
        time: 'TBD',
        RSVP: false,
        email: 'spacecamper24@gmail.com'
    });
    console.log('Star Bar');

    await Place.create({
        name: 'Snapper Park',
        city: 'New Orleans',
        state: 'LA',
        time: 'TBD',
        RSVP: true,
        email: 'spacecamper24@gmail.com'
    });
    await Place.create({
        name: 'Yogi Park',
        city: 'Jellystone',
        state: 'NC',
        time: 'TBD',
        RSVP: false,
        email: 'spacecamper24@gmail.com'
    });





    console.log("Closing DB connection for seed file");
    mongoose.disconnect();
}

seed();
