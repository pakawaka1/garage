const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password
    });
    sendTokenResponse(user, 200, res);
  });
  
  exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse('Please provide an email and password', 400));
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return next(new ErrorResponse('Invalid Credentials', 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ErrorResponse('Invalid Credentials', 401));
    }
    sendTokenResponse(user, 200, res);
  });
  
  exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000)
    });
    res.status(200).json({ success: true, data: {} });
  });
  
  exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, data: user });
  });
  
  const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      )
    };
    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({ success: true, token });
  };
  