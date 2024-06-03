import express from "express";
import {
  deleteBlog,
  getAllBlogs,
  getById,
  updateBlog,
  uploadBlog,
} from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getById);
blogRouter.post("/uploadBlog", uploadBlog);
blogRouter.patch("/updateBlog/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

export default blogRouter;
