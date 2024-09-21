const express = require('express');
const baseRouter = require('../modules/base/base.routes');

const mainRoutes = express.Router();

mainRoutes.use('/', baseRouter);

module.exports = mainRoutes;
