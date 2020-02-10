const mongoose = require('mongoose');

const BoatSchema = new mongoose.Schema({
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
  length: {
    type: String,
    required: [true, 'Please enter the boat length.'],
    maxlength: [20, 'Length cannot be more than 20 characters.']
  },
  width: {
    type: String,
    required: [true, 'Please enter the boat width.'],
    maxlength: [20, 'Width cannot be more than 20 characters.']
  },
  HIN: {
    type: String,
    unique: true,
    required: [true, 'Please enter a HIN nunber.'],
    match: [/^[A-Za-z0-9]/, 'Valid HIN required.'],
    minlength: [12, 'HIN must have at least 12 characters.'],
    maxlength: [13, 'HIN must not have more than 13 characters.']
  },
  currentHours: {
    type: Number,
    required: [true, 'Please enter current hours.'],
    max: [6, 'Current hours cannot be more than 6 characters.']
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

module.exports = mongoose.model('Boat', BoatSchema);
