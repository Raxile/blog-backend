const userService = require('./user.service');

const register = async (req, res) => {
  const response = await userService.registerUser(req.body);
  res.status(response.code).json(response);
};

const login = async (req, res) => {
  const response = await userService.loginUser(req.body);
  res.status(response.code).json(response);
};

const getUser = async (req, res) => {
  const response = await userService.getUser();
  res.status(response.code).json(response);
};

const userHandler = {
  register,
  login,
  getUser,
};

module.exports = userHandler;
