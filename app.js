import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.routes.js";
import blogRouter from "./routes/blog.router.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", router);

app.use("/api/blog", blogRouter);

const PORT = 5000 || process.env.PORT;

const dbUrl = process.env.MONGO_DB;

mongoose
  .connect(dbUrl)
  .then(() => console.log("server connected to mongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () =>
  console.log(`server is running at port number : ${PORT}`)
);
