require('dotenv').config();
const jwt = require('jsonwebtoken');
const response = require('../common/response');
const { RES_MESSAGE } = require('../utils/constants/message.constant');

module.exports = async (req, res, next) => {
  let token = '';
  if (!req.headers.authorization) {
    return res.status(401).json(response(401, RES_MESSAGE.UN_AUTHORIZED));
  }
  try {
    if (req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else {
      token = req.headers.authorization;
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    res.local = decoded;
    next();
  } catch (e) {
    res.status(401).json(response(401, RES_MESSAGE.UN_AUTHORIZED));
  }
};
