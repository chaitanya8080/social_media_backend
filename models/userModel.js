


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
  },
  bio: {
    type: String
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  friendRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }    
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  });
  
  UserSchema.methods.getJWTToken = function () {
    return Jwt.sign({ _id: this._id }, process.env.JWT_SECRETKEY, {
      expiresIn: "15d",
    });
  };
  
  UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  const User = mongoose.model('User', UserSchema);

  module.exports = User;