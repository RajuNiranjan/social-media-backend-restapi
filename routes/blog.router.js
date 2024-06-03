import express from "express";
import { getAllBlogs, uploadBlog } from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/uploadBlog", uploadBlog);

export default blogRouter;
