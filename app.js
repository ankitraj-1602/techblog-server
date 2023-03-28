import express from "express";
import mongoose from "mongoose";
// import blogRouter from "./routes/blog-routes";
import blogRouter from "../backend/routes/blog-routes";
import router from "../backend/routes/user-routes";
// import router from "./routes/user-routes";
import cors from "cors";
const app = express();
// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    process.env.MONGO_URL
    
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));