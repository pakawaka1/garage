const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Route files
const cars = require('./routes/cars');
// const trucks = require('./routes/trucks');
// const boats = require('./routes/boats');
// const auth = require('./routes/auth');

const app = express();

app.use(express.json());

//middleware
app.use(cookieParser());
app.use(errorHandler);

app.use('/cars', cars);
// app.use('/trucks', trucks);
// app.use('/boats', boats);
// app.use('/auth', auth);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(err);
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
