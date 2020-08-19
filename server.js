const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

// Database
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    server: {
      socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
    },
    replset: {
      socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
    },
  })
  .then(() => console.log('DB connection successful!'));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
