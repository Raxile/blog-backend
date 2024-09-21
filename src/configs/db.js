require('dotenv').config();
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL.replace(
  '<db_username>',
  process.env.DB_USERNAME,
).replace('<db_password>', process.env.DB_PASSWORD);

const db = () => {
  console.log(DB_URL);
  mongoose.connect(DB_URL);
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
