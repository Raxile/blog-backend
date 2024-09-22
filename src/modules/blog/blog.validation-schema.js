const joi = require('joi');

const title = joi.string().required().min(5).max(100).messages({
  'string.base': 'Title must be a string',
  'any.required': 'Title is required',
  'string.min': 'Title must be at least 5 characters long',
  'string.max': 'Title must be less than 100 characters',
});

const body = joi.string().required().min(20).messages({
  'string.base': 'Body must be a string',
  'any.required': 'Body is required',
  'string.min': 'Body must be at least 20 characters long',
});

exports.blogSchema = joi.object({
  title,
  body,
});
