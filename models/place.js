'use strict';
console.log('db model/mongoose');

const mongoose = require('mongoose');

const {Schema} = mongoose;

const placeSchema = new Schema({
    name: {type: String, require: true},
    city: {type: String, require: true},
    state: {type: String, require: true},
    time: {type: String, require: true},
    RSVP: {type: Boolean, require: true},
});


const placeModel = mongoose.model('Place', placeSchema);
//Make sure names match other files if neccessary
module.exports = placeModel;
