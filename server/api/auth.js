// CONTENTS:
// GET  | api/auth | get auth status
// POST | api/auth | authenticate a user (sign in)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
// Middleware
const auth = require('../middleware/auth');
// Models
const User = require('../models/User.model');
// Messages
const { server, registration } = require('../messages');

// GET  | api/auth | get auth status

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

// POST | api/auth | authenticate a user (sign in)

router.post(
  '/',
  [
    check('email', registration.EMAIL_ERROR_MESSAGE).isEmail(),
    check('password', registration.PASSWORD_LOGIN_ERROR_MESSAGE).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: registration.INVALID_LOGIN_ATTEMPT }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: registration.INVALID_LOGIN_ATTEMPT }] });
      }

      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
    }
  }
);

module.exports = router;
