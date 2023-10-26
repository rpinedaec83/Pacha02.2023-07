const express = require("express")
const app = express()
const sequelize = require("./models/db")
const Course = require("./models/course")
require("./models/asociations")
const morgan = require("morgan")
const PORT = 3000


//para llenar el req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))

// Routes
app.use("/api/v1", require("./routes"))  


app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`)
    sequelize.sync({force: true}).then(()=>{
        console.log("We are connected to db")
        Course.create({
            name: "basico",
            description: "Curso basico de guitarra",
            price: 50.0,
            capacity: 20
        })
        Course.create({
            name: "intermedio",
            description: "Curso intermedio de guitarra",
            price: 90.0,
            capacity: 10
        })
    }).catch(err => {
        console.log("an error ocurred ", err)
    })
})