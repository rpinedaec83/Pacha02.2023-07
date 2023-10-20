// basic configuration
const express = require("express")
const app = express()
const sequelize = require("./model")
require("./asociations")
require("dotenv").config()
const morgan = require("morgan")


const PORT_ = process.env.PORT || 3001

// Middleware
// Para poder rellenar el req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))


// Rutas
app.get("/", (req, res)=>{
    res.send("This is ivan server")
})

const router = require('./router')
app.use("/api/v1", router)


app.listen(PORT_, ()=>{
    console.log(`Running on port: ${PORT_}`)

    // /conectandose a la base de datos/
    sequelize.sync({force: false}).then(()=>{
        console.log("Weare connected to db")
    }).catch(err => {
        console.log("an error ocurred ", err)
    })

}) 








