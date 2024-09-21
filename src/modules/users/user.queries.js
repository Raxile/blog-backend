const userModel = require('./user.model');

const findUserByEmail = async (email) => userModel.findOne({ email });

const saveUser = async (payload) => await userModel.create(payload);

const findUser = async () => userModel.find();

const userQueries = {
  findUserByEmail,
  saveUser,
  findUser,
};
module.exports = userQueries;
