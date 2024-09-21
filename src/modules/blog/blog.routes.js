const express = require('express');
const validateRequest = require('../../middleware/request-validation');
const blogValidationSchema = require('./blog.validation-schema');
const blogHandler = require('./blog.handler');
const asyncHandler = require('../../utils/asyncHandler');
const authenticate = require('../../middleware/authenticate');

const blogRoutes = express.Router();

blogRoutes.post(
  '/add',
  authenticate,
  validateRequest.body(blogValidationSchema.blogSchema),
  asyncHandler(blogHandler.addBlog),
);

blogRoutes.get('/', asyncHandler(blogHandler.findBlogs));

blogRoutes.get('/:blogId', asyncHandler(blogHandler.findBlogById));
blogRoutes.put('/:blogId', authenticate, asyncHandler(blogHandler.updateBlog));
blogRoutes.delete(
  '/:blogId',
  authenticate,
  asyncHandler(blogHandler.deleteBlog),
);

module.exports = blogRoutes;
