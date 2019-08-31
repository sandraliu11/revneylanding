const mongoose = require('mongoose');

const MONGO_USERNAME = 'abea25';
const MONGO_PASSWORD = 'tama32';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '3000';
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=revneyEmails`;

mongoose.connect(url, {useNewUrlParser: true});

