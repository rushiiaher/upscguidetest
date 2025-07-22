const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  aspirantType: {
    type: String,
    required: false,
    default: 'full-time',
    enum: ['full-time', 'college-student', 'working-professional']
  },
  attemptedPrelims: {
    type: String,
    required: false,
    default: 'no',
    enum: ['yes', 'no']
  },
  currentCity: {
    type: String,
    required: true,
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);