const UserServices = require('../services/UserServices');

const createUser = async (req, res) => {
  const user = req.body;
  const { status, message, data } = await UserServices.createUser(user); 
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(201).json(data);
};

module.exports = {
  createUser,
};