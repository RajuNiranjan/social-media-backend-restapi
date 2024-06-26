import express from "express";
import { getAllUsers, login, signUp } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/signUp", signUp);

router.post("/login", login);
export default router;
