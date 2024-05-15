const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
  // Reference to the User schema
  username: {
    type: String,
    ref: 'User', // Referencing the 'User' model
    required: true,
    unique: true 
  },
  cnic: {
    type: String,
    minlength: 13,
    maxlength: 13 // Specifies maximum length of 13 characters
  },
  foodDeal: {
    type: Number,
    min: 1, // Specifies minimum value of 1
    max: 3   // Specifies maximum value of 3
  }
});

// Middleware to remove associated participant when a user is removed
userSchema.pre('remove', async function(next) {
  try {
    await Participant.deleteMany({ username: this.username });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Participant', participantSchema);
