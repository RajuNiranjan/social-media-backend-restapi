import express from "express";
import { getAllUsers, singnup } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/signup", singnup);

export default router;
