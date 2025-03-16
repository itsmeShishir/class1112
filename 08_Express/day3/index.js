import express from "express"
import Connect from "./config/db.js"
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Categoryroute from "./routes/CategoryRoute.js";
// dot env used
dotenv.config();

// const express = require('express')
const app = express()
const port = 3000

Connect();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("", Categoryroute);

app.get("/", (req, res)=>{
    res.send("<h1>Hello worlds and name is shishir bhandari</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})