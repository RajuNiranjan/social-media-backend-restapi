import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

const PORT = 5000;

app.use("/api", (req, res, next) => {
  res.send({ message: "Hello world" });
});

app.listen(PORT, () =>
  console.log(`server is running in port number : ${PORT}`)
);
