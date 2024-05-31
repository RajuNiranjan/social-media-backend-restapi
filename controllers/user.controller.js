import userModel from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await userModel.find();
  } catch (error) {
    console.log(error);
  }
  if (!users) {
    return res.status(400).json({ message: "user not found" });
  }
  return res.status(200).json({ users });
};

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    return res.status(400).json({ message: "user already existed" });
  }
  const user = new userModel({
    name,
    email,
    password,
  });
  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ user });
};
