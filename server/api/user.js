// CONTENTS:
// POST | api/user | register a user

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const {
  USERNAME_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  USER_ALREADY_EXISTS_MESSAGE,
} = require('../messages');
const User = require('../models/User.model');

require('dotenv').config();

// POST
// route  api/user
// desc   register a user

router.post(
  '/',
  [
    check('username', USERNAME_ERROR_MESSAGE).not().isEmpty(),
    check('email', EMAIL_ERROR_MESSAGE).isEmail(),
    check('password', PASSWORD_ERROR_MESSAGE).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      // check if user exists
      if (user) {
        return res.status(400).send(USER_ALREADY_EXISTS_MESSAGE);
      }
      user = new User({ username, email, password });
      // encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // return jwt for instant login
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
