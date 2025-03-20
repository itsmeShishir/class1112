import express from "express"
import Connect from "./config/db.js"
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Categoryroute from "./routes/CategoryRoute.js";
import productRoute from "./routes/ProductRoute.js";
import upload from "./middleware/multer.js";
import UserRoute from "./routes/UserRoute.js";
// dot env used
dotenv.config();

// const express = require('express')
const app = express()
const port = 3000

Connect();


// middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// image upaload by multer
app.use("/uploads", async (req, res) => {
    try {
        const image = await upload.single("image")(req, res);
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            image: image
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
// cors used _> 
let url = ["http://localhost:5173"]
app.use((req, res, next) => {
    let origin = req.headers.origin;
    if (url.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }
    next();
})
app.use("", UserRoute);
app.use("", Categoryroute);
app.use("", productRoute);

app.get("/", (req, res)=>{
    res.send("<h1>Hello worlds and name is shishir bhandari</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})