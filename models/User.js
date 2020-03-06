const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name.'],
    maxLength: [20, 'Please add a name less than 20 characters long.']
  },
  email: {
    type: String,
    required: [true, 'Please enter an email address.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password.'],
    minLength: [7, 'Please add a password with at least 7 characters.'],
    select: false
  }
});

// Encrypting password with bcryptjs
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// get signed JWT Token
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id, password: this.password }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
