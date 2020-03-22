const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);
