import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 5000 || process.env.PORT;

const dbUrl = process.env.MONGO_DB;

mongoose
  .connect(dbUrl)
  .then(() => console.log("server connected to database"))
  .catch((err) => console.log(err));

app.listen(PORT, () =>
  console.log(`server is running at port number : ${PORT}`)
);
