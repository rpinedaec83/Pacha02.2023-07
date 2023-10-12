
require("dotenv").config()
const dbConnect = require("./dbConfig/dbConfig")
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())

app.use("/api", require("./routes"))

app.listen(PORT, ()=>{
    console.log(`Running on port: ${PORT}`)
})

dbConnect();
