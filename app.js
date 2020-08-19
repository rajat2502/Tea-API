const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const teaRouter = require('./routes/tea');

const app = express();

// Middlewares

// Helmet - for app security
app.use(helmet());

// Compression - compress response, for lesser request time
app.use(compression());

// Make uploads folder static
app.use('/uploads', express.static('./uploads'));

// Body parser middleware
app.use(express.json());

// Routes
app.route('/').get((req, res) => res.sendFile(process.cwd() + '/index.html'));

app.use('/api/tea', teaRouter);

module.exports = app;
