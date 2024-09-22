const joi = require('joi');

const name = joi.string().required().min(3).max(30).messages({
  'string.base': 'name must be a string',
  'any.required': 'name is required',
  'string.max': 'name is invalid',
  'string.min': 'name is invalid',
});
const email = joi.string().required().email().trim().messages({
  'string.email': 'email must be a valid email',
  'any.required': 'email is required',
  'string.trim': 'Email may not contain any spaces at the beginning or end',
});
const password = joi.string().required().min(6).max(16).messages({
  'string.base': 'password must be a string',
  'any.required': 'password is required',
  'string.max': 'password is invalid',
  'string.min': 'password is invalid',
});
const age = joi.number().integer().min(0).max(120).required().messages({
  'number.base': 'age must be a number',
  'number.integer': 'age must be an integer',
  'number.min': 'age must be at least 0',
  'number.max': 'age cannot be greater than 120',
  'any.required': 'age is required',
});

exports.registerSchema = joi.object({
  email,
  name,
  password,
  age,
});

exports.loginSchema = joi.object({
  email,
  password,
});
