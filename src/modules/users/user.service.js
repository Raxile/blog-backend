const bcrypt = require('bcrypt');

const userQueries = require('./user.queries');
const response = require('../../common/response');
const { generateToken } = require('../../utils/helper');

const registerUser = async (data) => {
  const existUser = await userQueries.findUserByEmail(data.email);
  if (existUser) {
    return response(409, 'User already exists');
  }
  data.password = bcrypt.hashSync(data.password, 10);
  await userQueries.saveUser(data);
  return response(201, 'user created successfully');
};

const loginUser = async (data) => {
  const user = await userQueries.findUserByEmail(data.email);
  if (!user) {
    return response(203, 'Invalid email or password');
  }
  const isPassword = bcrypt.compareSync(data.password, user.password);
  if (isPassword) {
    const { _id, name, email } = user._doc || user;
    const token = generateToken({ id: _id });
    return response(200, 'login successful', { token, id: _id, name, email });
  }
  return response(203, 'Invalid email or password');
};

const getUser = async () => {
  const user = await userQueries.findUser();
  return response(200, 'Users found successfully', user);
};

const userService = {
  registerUser,
  loginUser,
  getUser,
};

module.exports = userService;
