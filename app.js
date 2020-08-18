const express = require('express');
const teaRouter = require('./routes/tea');

const app = express();

// Middlewares

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/tea', teaRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
