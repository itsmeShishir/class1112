import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/connect.js";
import { uploadProductImage } from "./middleware/upload.js";
import path from "path";
import route from "./Routes/blogroute.js";

// dot env user
dotenv.config();

const port = process.env.PORT || 3000
const shishir = express();

// shishir.get, shishir.post, shishir.put, shishir.delete, shishir.use, shishir.listen

shishir.use(express.json())
shishir.use(express.urlencoded({extended: true}));

ConnectDb();
shishir.get("/", (req, res)=>{
    res.send("<h1>hello world</h1>")
})
shishir.use('/uploads', 
    express.static(path.join(path.resolve(), '/uploads')));

shishir.use("", route);

shishir.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})




