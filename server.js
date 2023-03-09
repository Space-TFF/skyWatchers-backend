'use strict';

console.log('server is connected.');
const axios = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
const verifyUser = require('./auth');

mongoose.connect(process.env.DB_URL);
const Event = require('./models/event.js');
const User = require('./models/user');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 5005;

app.get('/', (request, response) => {
	response.send('hello from the server.');
});

// app.use(verifyUser);

//Change ROUTE to actual Route name
// match func names too

app.get('/events', getAllEvents);
app.post('/events', postEvent);
app.delete('/ROUTE/:id', deleteEvent);
app.put('/ROUTE/:id', updateEvent);

// app.get('/users', getUser);
// app.post('users', createUser);

// app.get('users/events/public', getPublicUserEvents); //TODO: this will mainly just be used to fetch public events they have added to their list for their profile
// app.get('users/events/private', getPrivateUserEvents); //TODO: this will just serve as a way to fetch private events for their profile

// app.post('users/events/private', createPrivateEvent); //TODO:

// async function getUser(request, response, next, userEmail) {
// 	try {
// 		let UserResults = await User.find({ email: userEmail });
// 		UserResults ? console.log('user found') : console.log('user not found');
// 	} catch (error) {
// 		console.error(error);
// 		response.status(500).send('server error');
// 	}
// }
// async function createUser(request, response, next) {}
// async function getPublicUserEvents(request, response, next) {}
// async function getPrivateUserEvents(request, response, next) {}
// async function createPrivateEvent(request, response, next) {}

async function getAllEvents(request, response) {
	try {
		let EventResults = await Event.find({ isPublic: true });
		response.status(200).send(EventResults);
	} catch (error) {
		console.error(error);
		response.status(500).send('server error');
	}
}

async function getAllPrivateEvents(request, response, next) {
    try {
        console.log(`Request for getting all PRIVATE events: ${request}`)
		let userEmail = req.query.email;
		let PrivateEventResults = await Event.find({
			isPublic: false,
			email: userEmail,
		});
		console.log(`Private Event Results: ${PrivateEventResults}`);
		response.status(200).send(PrivateEventResults);
	} catch (error) {}
}

async function postEvent(request, response, next) {
	console.log('coming in:', request.body);
	try {
		let createEvent = await Event.create(request.body);
		response.status(200).send(createEvent);
	} catch (error) {
		next(error);
	}
}

async function deleteEvent(request, response, next) {
	let id = request.params.id;
	try {
		await Event.findByIdAndDelete(id);
		response.status(200).send('Event deleted');
	} catch (error) {
		next(error);
	}
}

async function updateEvent(request, response, error) {
	let id = request.params.id;
	let eventData = request.body;
	try {
		let updatedEvent = await Event.findByIdAndUpdate(
			id,
			{ eventData, email: request.user.email },
			{
				new: true,
				overwrite: true,
			}
		);
		response.status(200).send(updatedEvent);
	} catch (error) {
		next(error);
	}
}

app.get('*', (request, response) => {
	response.status(404).send('Not found');
});

app.use((error, request, response, next) => {
	response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
