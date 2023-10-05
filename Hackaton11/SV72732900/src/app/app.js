
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const router = require("../router/product.router")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res)=>{
    res.send("This is ivan server")
})

app.use("/api/v1/product", router)


module.exports = app;
