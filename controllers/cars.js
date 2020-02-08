const ErrorResponse = require('../utils/errorResponse');
const Car = require('../models/Car');
const asyncHandler = require('../middleware/async');

// get all cars
exports.getCars = asyncHandler(async (req, res, next) => {
  const cars = await Car.find();
  res.status(200).json({ success: true, data: cars });
});

// get one car
exports.getCar = asyncHandler(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return next(
      new ErrorResponse(`Car not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: car });
});

// create new car
exports.createCar = asyncHandler(async (req, res, next) => {
  const car = await Car.create(req.body);
  res.status(201).json({ success: true, data: car });
});

// update one car
exports.updateCar = asyncHandler(async (req, res, next) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body);
  if (!car) {
    return next(
      new ErrorResponse(`Car not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: `Updated car ${req.params.id}` });
});

// delete one car
exports.deleteCar = asyncHandler(async (req, res, next) => {
  const car = await Car.findByIdAndDelete(req.params.id);
  if (!car) {
    return next(
      new ErrorResponse(`Car not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: `Deleted car ${req.params.id}` });
});
