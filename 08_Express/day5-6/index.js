import express from "express"
import Connect from "./config/db.js"
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Categoryroute from "./routes/CategoryRoute.js";
import productRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";
import cors from "cors"
import { uploadProductImage } from "./middleware/multer.js";
import path from "path";

// dot env used
dotenv.config();

// const express = require('express')
const app = express()
const port = 3000

Connect();


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// image upaload by multer
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));


// cors used _> 
const allowedOrigins = ["http://localhost:5173"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


app.use("", UserRoute);
app.use("", Categoryroute);
app.use("", productRoute);

app.get("/", (req, res)=>{
    res.send("<h1>Hello worlds and name is shishir bhandari</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})