const express = require('express');
const baseRouter = require('../modules/base/base.routes');
const userRouter = require('../modules/users/user.routes');
const blogRouter = require('../modules/blog/blog.routes');

const mainRoutes = express.Router();

mainRoutes.use('/', baseRouter);
mainRoutes.use('/user', userRouter);
mainRoutes.use('/blog', blogRouter);

module.exports = mainRoutes;
