const Joi = require('joi');
const { responseValidate } = require('../utils');
const { BlogPost } = require('../models');

const schemeCreate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const create = async ({ title, content, categoryIds }) => {
  try {
    const { error } = schemeCreate.validate({ title, content, categoryIds });
    if (error) {
      return responseValidate(400, error.message);
    }
    const createPost = await BlogPost.create({ title, content, categoryIds });

    return responseValidate(201, '', createPost);
  } catch (error) {
    return responseValidate(500, error.message);
  }
};

module.exports = {
  create,
};