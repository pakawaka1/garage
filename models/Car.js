const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, 'Please add a make'],
      maxLength: [20, 'Make cannot be more than 20 characters']
    },
    model: {
      type: String,
      required: [true, 'Please add a model'],
      maxLength: [20, 'Model cannot be more than 20 characters']
    },
    year: {
      type: Number,
      required: [true, 'Please add a year'],
      maxLength: [4, 'Year cannot be more than 4 characters']
    },
    seats: {
      type: String,
      maxLength: [10, 'Seats cannot be more than 10 characters']
    },
    color: {
      type: String,
      maxLength: [10, 'Seats cannot be more than 10 characters']
    },
    VIN: {
      type: String,
      required: [true, 'Please enter a VIN nunber'],
      maxLength: [17, 'VIN must 17 characters']
    },
    currentMileage: {
      type: Number,
      required: [true, 'Please enter current mileage'],
      maxLength: [6, 'Current mileage cannot be more than 6 characters']
    },
    serviceInterval: {
      type: String
    },
    nextService: {
      type: String
    }
  },
  {
    toJSON: { virtuals: true }
  }
);

module.exports = mongoose.model('Car', CarSchema);
