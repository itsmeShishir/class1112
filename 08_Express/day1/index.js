import express from "express"
// const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("<h1>Hello worlds and name is shishir bhandari</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})