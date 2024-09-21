const express = require('express');
const asyncHandler = require('../../utils/asyncHandler');
const validateRequest = require('../../middleware/request-validation');
const userHandler = require('./user.handler');
const userValidationSchema = require('./user.validation-schema');

const userRoutes = express.Router();

userRoutes.post(
  '/register',
  validateRequest.body(userValidationSchema.registerSchema),
  asyncHandler(userHandler.register),
);
userRoutes.post(
  '/login',
  validateRequest.body(userValidationSchema.loginSchema),
  asyncHandler(userHandler.login),
);

userRoutes.get('/', asyncHandler(userHandler.getUser));

module.exports = userRoutes;
