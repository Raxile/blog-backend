require('dotenv').config();
const mongoose = require('mongoose');

const db = () => {
  mongoose.connect(process.env.DB_URL);
  mongoose.connection.on('connected', () => {
    console.log('Database connected');
  });
  mongoose.connection.on('connecting', () => {
    console.log('::Database Connecting::');
  });
  mongoose.connection.on('error', (error) => {
    console.log('::Database Error::');
    throw Error(error);
  });
};

module.exports = db;
