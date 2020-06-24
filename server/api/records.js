// CONTENTS:
// POST    | api/records                    | Create a new record
// GET     | api/records                    | Get all records for a user
// GET     | api/records/:record_id         | Get record by id
// DELETE  | api/records/:record_id         | Delete a record

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// Middleware
const auth = require('../middleware/auth');
// Models
const Record = require('../models/Record.model');
// Messages
const {
  SERVER_ERROR_MESSAGE,
  DATE_IS_REQUIRED,
  DISTANCE_IS_REQUIRED,
  RECORD_NOT_FOUND,
  USER_UNAUTHORIZED,
  RECORD_DELETED,
} = require('../messages');

// route  api/records
// desc   create a new record

router.post(
  '/',
  [
    auth,
    [
      check('recordDate', DATE_IS_REQUIRED).not().isEmpty,
      check('recordDistance', DISTANCE_IS_REQUIRED).not().isEmpty(),
      check('recordDuration', DISTANCE_IS_REQUIRED).not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      recordDate,
      recordHour,
      recordDistance,
      recordDuration,
      recordLocation,
    } = req.body;

    const recordFields = {};

    recordFields.user = req.user.id;
    recordFields.recordDate = recordDate;
    recordFields.recordHour = recordHour;
    recordFields.recordDistance = recordDistance;
    recordFields.recordDuration = recordDuration;
    recordFields.recordLocation = recordLocation;

    try {
      record = new Record({ ...recordFields });

      await record.save();
      res.json(record);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
    }
  }
);

// route  api/records
// desc   get all records belonging to a user

router.get('/', auth, async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id }).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/records/:record_id
// desc   get a specific record by ID

router.get('/:record_id', auth, async (req, res) => {
  try {
    const record = await Record.findById(req.params.record_id);

    if (!record) {
      return res.status(404).json({ msg: RECORD_NOT_FOUND });
    }

    res.json(record);
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: RECORD_NOT_FOUND });
    }
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

// route  api/records/:record_id
// desc   delete a specific record

router.delete('/:record_id', auth, async (req, res) => {
  try {
    const record = await Record.findById(req.params.record_id);

    if (!record) {
      return res.status(404).json({ msg: RECORD_NOT_FOUND });
    }

    if (record.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: USER_UNAUTHORIZED });
    }

    await record.remove();
    res.json({ msg: RECORD_DELETED });
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: RECORD_NOT_FOUND });
    }
    res.status(500).json({ errors: [{ msg: SERVER_ERROR_MESSAGE }] });
  }
});

module.exports = router;
