const express = require('express');
const setUpMongoDB = require('./dataBase');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const courtsRouter = require('./src/routes/courts.router');
const citiesRouter = require('./src/routes/cities.roter')

const app = express();

const {stringConnection} = require('./settings/index')
setUpMongoDB(stringConnection)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/courts', courtsRouter);
app.use('/cities', citiesRouter);

module.exports = app;
