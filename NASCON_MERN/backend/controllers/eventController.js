const Event = require('../models/eventModel');
const mongoose = require('mongoose');

// get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get a single event
const getEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such event' });
  }

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: 'No such event' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// create a new event
const createEvent = async (req, res) => {
  const { eventName, eventDate, eventTime, venue, facultyMentorUsername } = req.body;

  try {
    const event = await Event.create({ eventName, eventDate, eventTime, venue, facultyMentorUsername });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such event' });
  }

  try {
    const event = await Event.findOneAndDelete({ _id: id });
    if (!event) {
      return res.status(400).json({ error: 'No such event' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// update an event
const updateEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such event' });
  }

  try {
    const event = await Event.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!event) {
      return res.status(400).json({ error: 'No such event' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent
};
