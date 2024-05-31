import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
  const hashPassword = bcrypt.hashSync(password);
  const user = new userModel({
    name,
    email,
    password: hashPassword,
  });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "user not found, please signup" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "password is incorrect" });
  }

  return res.status(200).json({ message: "login successfully" });
};
