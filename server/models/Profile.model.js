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
        default: '',
      },
      publicId: {
        type: String,
        default: 0,
      },
    },
    hasDarkTheme: {
      type: Boolean,
      default: false,
    },
    hasMetric: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', profileSchema);
