// CONTENTS:
// GET  | api/auth | get auth status
// POST | api/auth | authenticate a user (sign in)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/User.model');
const { check, validationResult } = require('express-validator');
const {
  SERVER_ERROR_MESSAGE,
  PASSWORD_LOGIN_ERROR_MESSAGE,
  INVALID_LOGIN_ATTEMPT,
  EMAIL_ERROR_MESSAGE,
} = require('../messages');

// GET
// route  api/auth
// desc   get auth

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

// POST
// route  api/auth
// desc   authenticate a user for sign in

router.post(
  '/',
  [
    check('email', EMAIL_ERROR_MESSAGE).isEmail(),
    check('password', PASSWORD_LOGIN_ERROR_MESSAGE).exists(),
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
          .json({ errors: [{ msg: INVALID_LOGIN_ATTEMPT }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: INVALID_LOGIN_ATTEMPT }] });
      }

      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
    }
  }
);

module.exports = router;
