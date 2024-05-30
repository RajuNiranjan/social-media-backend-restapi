import userModel from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await userModel.find();
  } catch (error) {
    console.log(error);
  }
  if (!users) {
    return res.status(404).json({ message: "no user found" });
  }
  return res.status(200).json({ users });
};

export const singnup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.find({ email });
  } catch (error) {
    console.log(error);
  }

  if (existingUser) {
    return res.status(400).json({ message: "email already exist" });
  }

  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ newUser });
};
