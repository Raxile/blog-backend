const blogService = require('./blog.service');

const addBlog = async (req, res) => {
  const response = await blogService.addBlog({
    ...req.body,
    userId: res.local.id,
  });
  res.status(response.code).json(response);
};

const findBlogs = async (req, res) => {
  const response = await blogService.findBlogs();
  res.status(response.code).json(response);
};

const findBlogById = async (req, res) => {
  const { blogId } = req.params;
  const response = await blogService.findBlogById(blogId);
  res.status(response.code).json(response);
};

const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  const response = await blogService.updateBlog(blogId, req.body);
  res.status(response.code).json(response);
};

const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  const response = await blogService.deleteBlog(blogId);
  res.status(response.code).json(response);
};

const blogHandler = {
  addBlog,
  findBlogs,
  findBlogById,
  updateBlog,
  deleteBlog,
};

module.exports = blogHandler;
