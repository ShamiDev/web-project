const express = require('express');
const {
  getParticipants,
  getParticipant,
  createParticipant,
  deleteParticipant,
  updateParticipant
} = require('../controllers/participantController');

const router = express.Router();

// GET all participants
router.get('/', getParticipants);

// GET a single participant
router.get('/:id', getParticipant);

// POST a new participant
router.post('/', createParticipant);

// DELETE a participant
router.delete('/:id', deleteParticipant);

// UPDATE a participant
router.patch('/:id', updateParticipant);

module.exports = router;
