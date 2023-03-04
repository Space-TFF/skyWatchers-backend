'use strict';
console.log('db model/mongoose');

const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},

});


const userModel = mongoose.model('User info', userSchema);
//Make sure names match other files if neccessary
module.exports = userModel;
