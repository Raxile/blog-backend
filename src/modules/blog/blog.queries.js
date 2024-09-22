const mongoose = require('mongoose');
const blogModel = require('./blog.model');

const findBlogs = async () => {
  const blogs = await blogModel.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user_details',
      },
    },
    {
      $unwind: '$user_details',
    },
    {
      $addFields: { id: '$_id' }, // Add the id field
    },
    {
      $project: {
        _id: 0,
        id: 1,
        title: 1,
        body: 1,
        'user_details.name': 1,
        'user_details.email': 1,
        createdAt: 1,
      },
    },
  ]);

  return blogs; // Return the aggregated results
};

const findBlogById = async (blogId) => {
  const blogs = await blogModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(blogId) }, // Match the blog by ID
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user_details',
      },
    },
    {
      $addFields: { id: '$_id' }, // Add the id field
    },
    {
      $unwind: '$user_details',
    },
    {
      $project: {
        _id: 0,
        id: 1,
        title: 1,
        body: 1,
        'user_details.name': 1,
        'user_details.email': 1,
        createdAt: 1,
      },
    },
  ]);

  return blogs; // Return the aggregated results
};

const addBlog = async (payload) => await blogModel.create(payload);

const updateBlog = async (id, payload) =>
  await blogModel.findByIdAndUpdate(id, payload);

const deleteBlog = async (id) => await blogModel.findByIdAndDelete(id);

const blogQueries = {
  findBlogs,
  findBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
};
module.exports = blogQueries;
