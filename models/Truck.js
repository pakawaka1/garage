const mongoose = require('mongoose');

const TruckSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Please add a make.'],
    maxlength: [20, 'Make cannot be more than 20 characters.']
  },
  model: {
    type: String,
    required: [true, 'Please add a model.'],
    maxlength: [20, 'Model cannot be more than 20 characters.']
  },
  year: {
    type: Number,
    required: [true, 'Please add a year.'],
    max: [4, 'Year cannot be more than 4 characters.']
  },
  seats: {
    type: String,
    required: [true, 'Please enter the number of seats.'],
    maxlength: [10, 'Seats cannot be more than 10 characters.']
  },
  bedLength: {
    type: String,
    required: [true, 'Please enter a bed length.'],
    maxlength: [10, 'Bed length cannot be more than 10 characters.']
  },
  color: {
    type: String,
    required: [true, 'Please enter the vehicle color.'],
    maxlength: [10, 'Color cannot be more than 10 characters.']
  },
  VIN: {
    type: String,
    unique: true,
    required: [true, 'Please enter a VIN nunber.'],
    match: [/^[A-Za-z0-9]/, 'Valid VIN required.'],
    minlength: [17, 'VIN must have 17 characters.'],
    maxlength: [17, 'VIN must have 17 characters.']
  },
  currentMileage: {
    type: Number,
    required: [true, 'Please enter current mileage.'],
    max: [6, 'Current mileage cannot be more than 6 characters.']
  },
  serviceInterval: {
    type: String,
    required: [true, 'Please enter the service interval.']
  },
  nextService: {
    type: Number,
    required: [true, 'Please enter when the next service is due.']
  }
});

module.exports = mongoose.model('Truck', TruckSchema);
