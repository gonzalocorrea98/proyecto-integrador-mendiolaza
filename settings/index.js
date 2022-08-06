require('dotenv').config();

const MONGO_USER = process.env.MONGO_USER; 
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const ACCUWEATHER_API_KEY = process.env.ACCUWEATHER_API_KEY;
const ACCUWEATHER_BASE_URL = process.env.ACCUWEATHER_BASE_URL;

const stringConnection = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@gonzaloincluit.djoqpqb.mongodb.net/?retryWrites=true&w=majority`;
module.exports = {ACCUWEATHER_API_KEY, ACCUWEATHER_BASE_URL, stringConnection};