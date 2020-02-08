const express = require('express');
const {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar
} = require('../controllers/cars');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getCars)
  .post(protect, createCar);

router
  .route('/:id')
  .get(protect, getCar)
  .put(protect, updateCar)
  .delete(protect, deleteCar);

module.exports = router;
