const ErrorResponse = require('../utils/errorResponse');
const Boat = require('../models/Boat');
const asyncHandler = require('../middleware/async');

// get all boats
exports.getBoats = asyncHandler(async (req, res, next) => {
  const boats = await Boat.find();
  res.status(200).json({ success: true, count: boats.length, data: boats });
});

// get one boat
exports.getBoat = asyncHandler(async (req, res, next) => {
  const boat = await Boat.findById(req.params.id);
  if (!boat) {
    return next(
      new ErrorResponse(`Boat not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: boat });
});

// create new boat
exports.createBoat = asyncHandler(async (req, res, next) => {
  const boat = await Boat.create(req.body);
  res.status(201).json({ success: true, data: boat });
});

// update one boat
exports.updateBoat = asyncHandler(async (req, res, next) => {
  const boat = await Boat.findByIdAndUpdate(req.params.id, req.body);
  if (!boat) {
    return next(
      new ErrorResponse(`Boat not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: `Updated boat ${req.params.id}` });
});

// delete one boat
exports.deleteBoat = asyncHandler(async (req, res, next) => {
  const boat = await Boat.findByIdAndDelete(req.params.id);
  if (!boat) {
    return next(
      new ErrorResponse(`Boat not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: `Deleted boat ${req.params.id}` });
});
