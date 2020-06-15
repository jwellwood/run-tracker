const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  dateAndTime: {
    type: Date,
    required: true,
  },
  distance: {
    type: String,
    required: true,
    default: 0,
  },
  time: {
    type: String,
    required: true,
    default: '0:00',
  },
});

module.exports = Record = mongoose.model('record', recordSchema);
