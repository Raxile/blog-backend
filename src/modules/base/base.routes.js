const express = require('express');

const baseRoutes = express.Router();

baseRoutes.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = baseRoutes;
