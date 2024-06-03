import BlogModel from "../models/Blog.model.js";

export const getAllBlogs = async (req, res, next) => {
  let blog;
  try {
    blog = await BlogModel.find();
    if (!blog) {
      return res.status(404).json({ message: "no blog data found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const uploadBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let blog = new BlogModel({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const updateBlog = async (req, res, next) => {
  const blogId = req.params.id;
  const { title, description } = req.body;
  let blog;
  try {
    blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "no blog found" });
    }
    blog.title = title;
    blog.description = description;
    await blog.save();

    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (req, res, next) => {
  const blogId = req.params.id;
  try {
    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(400).json({ message: "no blog found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  const blogId = req.params.id;
  try {
    const blog = await BlogModel.findOneAndDelete(blogId);
    if (!blog) {
      return res.status(400).json({ message: "no blog found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
  }
};
