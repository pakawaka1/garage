const express = require('express');
const {
  getTrucks,
  getTruck,
  createTruck,
  updateTruck,
  deleteTruck
} = require('../controllers/trucks');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getTrucks)
  .post(protect, createTruck);

router
  .route('/:id')
  .get(protect, getTruck)
  .put(protect, updateTruck)
  .delete(protect, deleteTruck);

module.exports = router;
