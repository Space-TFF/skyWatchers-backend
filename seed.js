'use strict';

console.log('seed data');

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);  // assign dburl

async function seed() {

    console.log("Closing DB connection for seed file");
    mongoose.disconnect();
}

seed();
