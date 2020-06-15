const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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
});

module.exports = Profile = mongoose.model('profile', profileSchema);
