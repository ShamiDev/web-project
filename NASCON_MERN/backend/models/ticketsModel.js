const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true 
  },
  eventName: {
    type: [String], 
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
