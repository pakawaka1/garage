const ErrorResponse = require('../utils/errorResponse');
const Truck = require('../models/Truck');
const asyncHandler = require('../middleware/async');

// get all trucks
exports.getTrucks = asyncHandler(async (req, res, next) => {
  const trucks = await Truck.find();
  res.status(200).json({ success: true, data: trucks });
});

// get one truck
exports.getTruck = asyncHandler(async (req, res, next) => {
  const truck = await Truck.findById(req.params.id);
  if (!truck) {
    return next(
      new ErrorResponse(`Truck not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: truck });
});

// create new truck
exports.createTruck = asyncHandler(async (req, res, next) => {
  const truck = await Truck.create(req.body);
  res.status(201).json({ success: true, data: truck });
});

// update one truck
exports.updateTruck = asyncHandler(async (req, res, next) => {
  const truck = await Truck.findByIdAndUpdate(req.params.id, req.body);
  if (!truck) {
    return next(
      new ErrorResponse(`Truck not found with id of ${req.params.id}`, 404)
    );
  }
  res
    .status(200)
    .json({ success: true, msg: `Updated truck ${req.params.id}` });
});

// delete one truck
exports.deleteTruck = asyncHandler(async (req, res, next) => {
  const truck = await Truck.findByIdAndDelete(req.params.id);
  if (!truck) {
    return next(
      new ErrorResponse(`Truck not found with id of ${req.params.id}`, 404)
    );
  }
  res
    .status(200)
    .json({ success: true, msg: `Deleted truck ${req.params.id}` });
});
