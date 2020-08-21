const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    location: {
      type: String,
      default: '',
    },
    profileImage: {
      url: {
        type: String,
        default: 'default',
      },
      publicId: {
        type: String,
        default: 'default',
      },
    },
    darkTheme: {
      type: Boolean,
      default: false,
    },
    metricUnits: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', profileSchema);
