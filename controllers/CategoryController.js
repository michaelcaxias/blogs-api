const CategoryServices = require('../services/CategoryServices');

const create = async (req, res) => {
  const { name } = req.body;
  const { status, message, data } = await CategoryServices.create({ name });
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
};

module.exports = {
  create,
};