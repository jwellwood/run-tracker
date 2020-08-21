const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    activityName: {
      type: String,
      required: true,
      default: '',
    },
    activityDate: {
      type: Date,
      required: true,
    },
    activityTime: {
      type: String,
    },
    activityDistance: {
      type: String,
      required: true,
      default: 0,
    },
    activityDuration: {
      type: String,
      required: true,
      default: '00:00',
    },
    activityLocation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Activity = mongoose.model('activity', activitySchema);
