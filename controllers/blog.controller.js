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
