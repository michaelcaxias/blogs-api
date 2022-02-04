const UserServices = require('../services/UserServices');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { status, message, data } = await UserServices.loginUser({ email, password });
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(200).json(data);
};

const createUser = async (req, res) => {
  const user = req.body;
  const { status, message, data } = await UserServices.createUser(user); 
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(201).json(data);
};

const getAllUsers = async (req, res) => {
  const { status, message, data } = await UserServices.getAllUsers();
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(200).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message, data } = await UserServices.getUserById(id);
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(200).json(data);
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};