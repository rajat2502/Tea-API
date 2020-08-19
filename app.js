const express = require('express');
const teaRouter = require('./routes/tea');

const app = express();

// Middlewares

// Make uploads folder static
app.use('/uploads', express.static('./uploads'));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/tea', teaRouter);

module.exports = app;
