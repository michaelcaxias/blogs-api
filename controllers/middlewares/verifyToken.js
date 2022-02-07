const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const findUserByJWTKey = (jwtKey) => {
  const { id } = jwtKey;
  return User.findOne({ where: { id } });
};

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const verifyJwt = jwt.verify(authorization, process.env.JWT_SECRET);
    const user = await findUserByJWTKey(verifyJwt);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};