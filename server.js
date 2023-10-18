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
app.delete('/events/:id', deleteEvent);
app.put('/events	/:id', updateEvent);

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
	console.log('INCOMING POST:', request.body);
	try {
		let data = request.body;
		let newEvent = await prisma.event.create({
			data: {
				name: data.name,
				description: data.description,
				address: data.address,
				// userEmail: data.email,
				lat: data.lat,
				lng: data.lng,
				isPublic: data.isPublic,
				//TODO: Maybe add a "Date created" timestamp
				createdBy: {
					connectOrCreate: {
						where: {
							email: data.email
						},
						create: {
							email: data.email
						}
					}
				}
			}
		});
		response.status(200).send(newEvent);
	} catch (error) {
		next(error);
		console.error(error);
	}
}

async function deleteEvent(request, response, next) {
	//* request
	console.log(request.params);
	const eventId = +request.params.id;// maybe have a separate uid for (could use use as key on front end too)
	console.log('event id to delete: ', eventId)
	try {
		//* event to delete
		const deleteEvent = await prisma.event.delete({
			where: {
				id: eventId
			}
		})
		//* send the response if delete was successful
		response.status(200).send(deleteEvent);
	} catch (error) {
		next(error);
	}
}

async function updateEvent(request, response, error) {
	//* request params
	let id = request.params.id;
	//* request body
	let eventData = request.body;
	try {
		//* if the event exists, find it using the request params. Then update the event.
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

//* fallback route. Only hits this if an unknown endpoint is requested
app.get('*', (request, response) => {
	response.status(404).send('Not found');
});

//* if there is an error that isn't caught
app.use((error, request, response, next) => {
	response.status(500).send(error.message);
});

//* connect all services (server, db)
app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
	prisma.$connect();
	console.log(`Prisma is connected!`);
});
