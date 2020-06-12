const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
