const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  const body = req.body;
  try {
    const existing_user = await User.findOne({ email: body.email });
    if (existing_user) {
      return res.status(404).json({ message: "User Exists" });
    }
    const hash = await bcrypt.hash(body.password, 5);
    const new_user = await User.create({
      name: body.name,
      email: body.email,
      password: hash,
    });
    const token = jwt.sign({ id: new_user._id }, process.env.SECRET);
    return res.status(201).json(token);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  const body = req.body;
  try {
    const existing_user = await User.findOne({ email: body.email });
    if (existing_user) {
      const token = jwt.sign({ id: existing_user._id }, process.env.SECRET);
      return res.status(201).json(token);
    }
    return res.status(404).json({ message: "Incorrect Credentials" });
  } catch (error) {
    console.log(error);
  }
};
