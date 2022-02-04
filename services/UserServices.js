const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUserScheme = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().required(),
});

const loginScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const responseValidate = (status = 200, message = '', data = {}) => ({
  status,
  message,
  data,
});

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (user) => {
  try {
    const { error } = createUserScheme.validate(user);

    if (error) {
     return responseValidate(400, error.message);
    }

    if (await findUserByEmail(user.email)) {
      return responseValidate(409, 'User already registered');
    }

    const newUser = await User.create(user);

    const jwtConfig = {
      expiresIn: '3d',
    };

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, jwtConfig);

    return responseValidate(201, '', { token });
  } catch (error) {
    return responseValidate(500, error.message);
  }
};

const loginUser = async ({ email, password }) => {
  try {
    const { error } = loginScheme.validate({ email, password });

    if (error) {
      return responseValidate(400, error.message);
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return responseValidate(400, 'Invalid fields');
    }

    const jwtConfig = {
      expiresIn: '3d',
    };

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, jwtConfig);

    return responseValidate(200, '', { token });
  } catch (error) {
    return responseValidate(500, error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
};