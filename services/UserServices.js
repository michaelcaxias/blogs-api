const Joi = require('joi');
const { User } = require('../models');

const scheme = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().required(),
});

const responseValidate = (status = 200, message = '', data = {}) => ({
  status,
  message,
  data,
});

const createUser = async (user) => {
  try {
    const { error } = scheme.validate(user);

    if (error) {
     return responseValidate(400, error.message);
    }

    const newUser = await User.create(user);
    return responseValidate(201, '', newUser);
  } catch (error) {
    return responseValidate(500, error.message);
  }
};

module.exports = {
  createUser,
};