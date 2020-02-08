const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
        match: [^/[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,3}+$/, 'Please add a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: [7, 'Please add a password with at least 7 characters']
    }
});

// Encrypting password with bcryptjs
UserSchema.pre('save', async function(next) {
    const salt = await.bcrypt.genSalt(10);
    this.password = await bcrypt.has(this.password, salt)
});

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// get signed JWT Token
UserSchema.methods.getJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });
};


  module.exports = mongoose.model('User', UserSchema);
