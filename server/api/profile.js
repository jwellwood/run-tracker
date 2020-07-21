// CONTENTS:
// GET     | api/profile/auth_user          | get profile of current user
// POST    | api/profile                    | Create or update profile
// GET     | api/profile                    | Get all profiles
// GET     | api/profile/user/:user_id      | Get profile by id
// DELETE  | api/profile                    | Delete profile and user

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// Middleware
const auth = require('../middleware/auth');
// Models
const Profile = require('../models/Profile.model');
const User = require('../models/User.model');
// Messages
const { profile_messages, server } = require('../messages');

// GET | api/profile/auth | get profile of current user

router.get('/auth_user', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['username', 'email']);
    if (!profile) {
      return res.status(400).json({
        errors: [{ msg: profile_messages.NO_PROFILE_EXISTS_MESSAGE }],
      });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

// POST | api/profile | Create or update profile

router.post(
  '/',
  [
    auth,
    check('hasDarkTheme', profile_messages.THEME_IS_REQUIRED).not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { profileImage, hasDarkTheme, hasMetric, location } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;
    if (profileImage) profileFields.profileImage.url = profileImage.url;
    if (profileImage)
      profileFields.profileImage.public_id = profileImage.public_id;
    profileFields.hasDarkTheme = hasDarkTheme;
    profileFields.hasMetric = hasMetric;
    profileFields.location = location;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      } // Create

      profile = new Profile({ ...profileFields });

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
    }
  }
);

// GET | api/profile | Get all profiles

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'username',
      'email',
    ]);
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

// GET | api/profile/user/:user_id | Get profile by id

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['username', 'email']);
    if (!profile) {
      return res
        .status(400)
        .json({ errors: [{ msg: profile_messages.PROFILE_NOT_FOUND }] });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    if (error.kind == 'ObjectId') {
      return res
        .status(400)
        .json({ errors: [{ msg: profile_messages.PROFILE_NOT_FOUND }] });
    }
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

// DELETE | api/profile | Delete profile and user

router.delete('/', auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ errors: [{ msg: profile_messages.PROFILE_DELETED_MESSAGE }] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

module.exports = router;
