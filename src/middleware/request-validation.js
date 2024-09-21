const validateRequest = (() => {
  const validate = async (schema, data, req, res, next) => {
    const parsedBody = await schema.validate(data);
    if (parsedBody.error) {
      res.status(400).json({
        code: 400,
        status: false,
        message: parsedBody.error.message || 'something went wrong.',
      });
      return;
    }
    next();
  };

  const body = (schema) => async (req, res, next) => {
    await validate(schema, req.body, req, res, next);
  };

  const params = (schema) => async (req, res, next) => {
    await validate(schema, req.params, req, res, next);
  };

  const query = (schema) => async (req, res, next) => {
    await validate(schema, req.query, req, res, next);
  };
  return { body, params, query };
})();

module.exports = validateRequest;
