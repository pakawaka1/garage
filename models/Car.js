const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Please add a make'],
    maxlength: [20, 'Make cannot be more than 20 characters']
  },
  model: {
    type: String,
    required: [true, 'Please add a model'],
    maxlength: [20, 'Model cannot be more than 20 characters']
  },
  year: {
    type: Number,
    required: [true, 'Please add a year'],
    maxlength: [4, 'Year cannot be more than 4 characters']
  },
  seats: {
    type: String,
    maxlength: [10, 'Seats cannot be more than 10 characters']
  },
  color: {
    type: String,
    maxlength: [10, 'Seats cannot be more than 10 characters']
  },
  VIN: {
    type: String,
    unique: true,
    required: [true, 'Please enter a VIN nunber'],
    match: [/^[A-Za-z0-9]/, 'Valid VIN required'],
    minlength: [17, 'VIN must 17 characters'],
    maxlength: [17, 'VIN must 17 characters']
  },
  currentMileage: {
    type: Number,
    required: [true, 'Please enter current mileage'],
    maxlength: [6, 'Current mileage cannot be more than 6 characters']
  },
  serviceInterval: {
    type: String,
    required: [true, 'Please enter the service interval']
  },
  nextService: {
    type: String,
    required: [true, 'Please enter when the next service is due']
  }
});

module.exports = mongoose.model('Car', CarSchema);
