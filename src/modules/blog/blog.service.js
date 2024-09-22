const blogQueries = require('./blog.queries');
const response = require('../../common/response');

const addBlog = async (data) => {
  const blog = await blogQueries.addBlog(data);
  return response(201, true, 'blog created successfully', blog);
};

const findBlogs = async () => {
  const blogs = await blogQueries.findBlogs();
  return response(200, true, 'blog Find successfully', blogs);
};

const findBlogById = async (id) => {
  const blogs = await blogQueries.findBlogById(id);
  if (!blogs.length) return response(404, false, 'blog not found');
  return response(200, true, 'blog Find successfully', blogs[0]);
};

const updateBlog = async (id, data) => {
  const blogs = await blogQueries.updateBlog(id, data);
  if (!blogs) return response(404, false, 'blog not found');
  return response(200, true, 'blog updated successfully', blogs);
};

const deleteBlog = async (id) => {
  const blogs = await blogQueries.deleteBlog(id);
  if (!blogs) return response(404, false, 'blog not found');
  return response(200, true, 'Delete blog successfully', blogs);
};

const blogService = {
  addBlog,
  findBlogs,
  findBlogById,
  updateBlog,
  deleteBlog,
};

module.exports = blogService;
