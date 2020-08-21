// CONTENTS:
// POST    | api/activity                    | Create a new activity
// GET     | api/activity                    | Get all activities for a user
// GET     | api/activity/:activity_id       | Get activity by id
// DELETE  | api/activity/:activity_id       | Delete a activity

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// Middleware
const auth = require('../middleware/auth');
// Models
const Activity = require('../models/Activity.model');
// Messages
const { act_mess, server } = require('../messages');
// route  api/activity
// desc   create a new activity

router.post(
  '/',
  [
    auth,
    [
      check('activityDate', act_mess.DATE_IS_REQUIRED).not().isEmpty,
      check('activityDistance', act_mess.DISTANCE_IS_REQUIRED).not().isEmpty(),
      check('activityDuration', act_mess.DISTANCE_IS_REQUIRED).not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      activityDate,
      activityHour,
      activityDistance,
      activityDuration,
      activityLocation,
    } = req.body;

    const activityFields = {};

    activityFields.user = req.user.id;
    activityFields.activityDate = activityDate;
    activityFields.activityHour = activityHour;
    activityFields.activityDistance = activityDistance;
    activityFields.activityDuration = activityDuration;
    activityFields.activityLocation = activityLocation;

    try {
      activity = new Activity({ ...activityFields });

      await activity.save();
      res.json(activity);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
    }
  }
);

// route  api/activity
// desc   get all activity belonging to a user

router.get('/', auth, async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(activities);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/activity/:activity_id
// desc   get a specific activity by ID

router.get('/:activity_id', auth, async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.activity_id);

    if (!activity) {
      return res.status(404).json({ msg: act_mess.ACTIVITY_NOT_FOUND });
    }

    res.json(activity);
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: act_mess.ACTIVITY_NOT_FOUND });
    }
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/activity/activity_id
// desc   delete a specific activity

router.delete('/:activity_id', auth, async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.activity_id);

    if (!activity) {
      return res.status(404).json({ msg: act_mess.ACTIVITY_NOT_FOUND });
    }

    if (activity.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: server.USER_UNAUTHORIZED });
    }

    await activity.remove();
    res.json({ msg: ACTIVITY_DELETED });
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: act_mess.ACTIVITY_NOT_FOUND });
    }
    res.status(500).json({ errors: [{ msg: server.SERVER_ERROR_MESSAGE }] });
  }
});

module.exports = router;
