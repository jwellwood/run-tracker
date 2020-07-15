// CONTENTS:
// POST | api/user | register a user

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
require('dotenv').config();
// Models
const User = require('../models/User.model');
// Messages
const {
  SERVER_ERROR_MESSAGE,
  USERNAME_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  USER_ALREADY_EXISTS_MESSAGE,
} = require('../messages');

// POST | api/user | register a user

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
      console.log(errors);
      return res.status(422).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      // check if user exists
      if (user) {
        return res.status(400).json({ msg: USER_ALREADY_EXISTS_MESSAGE });
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
        { expiresIn: 3600000 },
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
