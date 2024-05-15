const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  cnic: {
    type: String,
    minlength: 13,
    maxlength: 13 // Specifies maximum length of 13 characters
  },
  FoodDeal: {
    type: Number,
    min: 1, // Specifies minimum value of 1
    max: 3   // Specifies maximum value of 3
  }
});

module.exports = mongoose.model('Participant', participantSchema);


