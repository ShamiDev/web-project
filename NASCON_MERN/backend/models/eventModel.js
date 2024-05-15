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
  // Reference to the User schema
  facultyMentorUsername: {
    type: String,
    ref: 'User', // Referencing the 'User' model
    required: true
  }
}, { timestamps: true });

// Middleware to remove associated events when a user is removed
userSchema.pre('remove', async function(next) {
  try {
    await Event.deleteMany({ facultyMentorUsername: this.username });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Event', eventSchema);
