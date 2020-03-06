const express = require('express');
const {
  getBoats,
  getBoat,
  createBoat,
  updateBoat,
  deleteBoat
} = require('../controllers/boats');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getBoats)
  .post(protect, createBoat);

router
  .route('/:id')
  .get(protect, getBoat)
  .put(protect, updateBoat)
  .delete(protect, deleteBoat);

module.exports = router;
