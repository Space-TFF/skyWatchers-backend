'use strict';
console.log('db model/mongoose');

const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
	name: { type: String, require: true },
	address: { type: String, require: true },
	lat: { type: Number, require: true },
	lng: { type: Number, require: true },
	time: { type: String, require: true },
	description: { type: String, require: true },
	email: { type: String, require: true },
	isPublic: { type: Boolean, require: true },
});

const eventModel = mongoose.model('Event', eventSchema);
//Make sure names match other files if neccessary
module.exports = eventModel;
