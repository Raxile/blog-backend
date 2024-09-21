const express = require('express');
const baseRouter = require('../modules/base/base.routes');
const userRouter = require('../modules/users/user.routes');

const mainRoutes = express.Router();

mainRoutes.use('/', baseRouter);
mainRoutes.use('/user', userRouter);

module.exports = mainRoutes;
