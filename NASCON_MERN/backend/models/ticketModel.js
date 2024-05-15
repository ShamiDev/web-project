const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  participant: {
    type: Schema.Types.ObjectId,
    ref: 'Participant',
    required: true
  }
});

// Middleware to remove associated tickets when an event is removed
eventSchema.pre('remove', async function(next) {
  try {
    await Ticket.deleteMany({ event: this._id });
    next();
  } catch (error) {
    next(error);
  }
});

// Middleware to remove associated tickets when a participant is removed
participantSchema.pre('remove', async function(next) {
  try {
    await Ticket.deleteMany({ participant: this._id });
    next();
  } catch (error) {
    next(error);
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
