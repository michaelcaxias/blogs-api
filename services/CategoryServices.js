const { Category } = require('../models');

const create = async ({ name }) => {
  const createCategory = await Category.create({ name });
  return createCategory;
};

module.exports = {
  create,
};