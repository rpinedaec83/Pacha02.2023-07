const express = require("express");
const mongoose = require("mongoose"); // new
const routes = require("./routes"); // new

// Connect to MongoDB database
mongoose
    .connect("mongodb://127.0.0.1:27017/acmedb", { useNewUrlParser: true})
    .then(() => {
        const app = express()
        app.use("/api", routes) // new
        app.use(express.json()) // new
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })