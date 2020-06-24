const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { SERVER_ERROR_MESSAGE } = require('../messages/server-messages');
const {
  NO_PROFILE_EXISTS_MESSAGE,
  THEME_IS_REQUIRED,
  PROFILE_NOT_FOUND,
  PROFILE_DELETED_MESSAGE,
} = require('../messages/profile-messages');
const Profile = require('../models/Profile.model');
const User = require('../models/User.model');
const { check, validationResult } = require('express-validator');

// route  api/profile/auth_user
// desc   get profile of current user

router.get('/auth_user', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['username', 'email']);
    if (!profile) {
      return res.status(400).json({ msg: NO_PROFILE_EXISTS_MESSAGE });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/profile
// desc   Create or update profile

router.post(
  '/',
  [auth, check('hasDarkTheme', THEME_IS_REQUIRED)],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { profileImage, hasDarkTheme, hasMetric } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;
    if (profileImage) profileFields.profileImage.url = profileImage.url;
    if (profileImage)
      profileFields.profileImage.public_id = profileImage.public_id;
    profileFields.hasDarkTheme = hasDarkTheme;
    profileFields.hasMetric = hasMetric;

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
      console.error(error.message);
      res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
    }
  }
);

// route  api/profile
// desc   get all profiles
// TODO Add admin middleware

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'username',
      'email',
    ]);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/profile/user/:user_id
// desc   get single profile by ID
// TODO Add admin middleware

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['username', 'email']);
    if (!profile) {
      return res.status(400).json({ msg: PROFILE_NOT_FOUND });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(400).json({ msg: PROFILE_NOT_FOUND });
    }
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/profile
// desc   delete profile, user and records

router.delete('/', auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: PROFILE_DELETED_MESSAGE });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

module.exports = router;
