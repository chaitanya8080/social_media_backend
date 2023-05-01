const User = require('../models/userModel');
// const jwt = require('jsonwebtoken');

// user Register controller
const register = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findOne( {email} );
    if (user) {
      return res.status(404).json({ message: 'User already exist' });
    }

    // console.log({ firstname, lastname, email, password })
    // const user = new User({
    //   firstname,
    //   lastname,
    //   email,
    //   password,
    // });
    const savedUser = await User.create(req.body);
    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // Generate JWT token
    const token = user.getJWTToken();
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


 const getAllUsers = async (req, res) => {
    try {
      const user = await User.find();
    
      res.status(200).json({ message: 'getting all user', user});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

module.exports =  { register, login, getAllUsers };