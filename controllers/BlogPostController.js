const BlogPostServices = require('../services/BlogPostServices');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { status, message, data } = await BlogPostServices.create({ title, content, categoryIds });
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
};

module.exports = {
  create,
};