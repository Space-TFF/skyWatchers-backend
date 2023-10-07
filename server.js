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

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const PORT = process.env.PORT || 5005;

app.get('/', (request, response) => {
	response.send('hello from the server.');
});

app.get('/events', getAllEvents);
app.post('/events', postEvent);
app.delete('/ROUTE/:id', deleteEvent);
app.put('/ROUTE/:id', updateEvent);

async function getAllEvents(request, response) {
	try {
		// Use Prisma Client to query all events
		const events = await prisma.event.findMany();

		// Log the results (or use them as needed)
		console.log(events);

		response.status(200).send(events);
	} catch (error) {
		console.error(error);
		response.status(500).send('server error');
	}
}

async function getAllPrivateEvents(request, response, next) {
	try {
		console.log(`Request for getting all PRIVATE events: ${request}`);
		let userEmail = req.query.email;
		let PrivateEventResults = await Event.find({
			isPublic: false,
			email: userEmail
		});
		console.log(`Private Event Results: ${PrivateEventResults}`);
		response.status(200).send(PrivateEventResults);
	} catch (error) {}
}

//! adjust this
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
				overwrite: true
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

app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
	prisma.$connect();
	console.log(`Prisma is connected!`);
});
