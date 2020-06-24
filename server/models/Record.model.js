const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user, recordDate, recordHour, recordDistance, recordDuration, recordLocation

const recordSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    recordDate: {
      type: Date,
      required: true,
    },
    recordHour: {
      type: String,
      required: false,
    },
    recordDistance: {
      type: String,
      required: true,
      default: 0,
    },
    recordDuration: {
      type: String,
      required: true,
      default: '0:00',
    },
    recordLocation: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = Record = mongoose.model('record', recordSchema);
