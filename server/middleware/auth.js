require('dotenv').config();
const jwt = require('jsonwebtoken');
const { NO_AUTH_TOKEN_MESSAGE } = require('../messages');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: NO_AUTH_TOKEN_MESSAGE });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ errors: [{ msg: NO_AUTH_TOKEN_MESSAGE }] });
  }
};
