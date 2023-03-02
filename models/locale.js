'use strict';
console.log('db model/mongoose');

const mongoose = require('mongoose');

const {Schema} = mongoose;

const localeSchema = new Schema({
    //add schema model
});


const LocaleModel = mongoose.model('Locale', localeSchema);
//Make sure names match other files if neccessary
module.exports = LocaleModel;
