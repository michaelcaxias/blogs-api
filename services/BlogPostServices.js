const Joi = require('joi');
const { responseValidate } = require('../utils');
const { BlogPost, Category } = require('../models');

const schemeCreate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const create = async ({ user, title, content, categoryIds }) => {
  try {
    const { error } = schemeCreate.validate({ title, content, categoryIds });
    if (error) {
      return responseValidate(400, error.message);
    }
    const createPost = await BlogPost.create({
      userId: user.id, title, content,
    });

    const checkCategory = await Category.findAll({
      where: { id: categoryIds },
    });

    if (!checkCategory.length) {
      return responseValidate(400, '"categoryIds" not found');
    }

    return responseValidate(201, '', createPost);
  } catch (error) {
    return responseValidate(500, error.message);
  }
};

module.exports = {
  create,
};