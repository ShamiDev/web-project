const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventTime: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  mentorUsername: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
