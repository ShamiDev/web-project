const express = require('express');
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket
} = require('../controllers/ticketController');

const router = express.Router();

// GET all tickets
router.get('/', getTickets);

// GET a single ticket
router.get('/:id', getTicket);

// POST a new ticket
router.post('/', createTicket);

// DELETE a ticket
router.delete('/:id', deleteTicket);

// UPDATE a ticket
router.patch('/:id', updateTicket);

module.exports = router;
