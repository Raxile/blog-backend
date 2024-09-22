const expressAsyncHandler = require('express-async-handler');
const response = require('../common/response');

module.exports = (fn) =>
  expressAsyncHandler(async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      res.status(500).json(response(500, 'Internal Server Error'));
    }
  });
