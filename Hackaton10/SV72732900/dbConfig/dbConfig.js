const mongoose = require("mongoose")

const dbConnect = () => {

    try{
        mongoose.connect('mongodb+srv://irojasc:irojasc3@mongodb101.2yaey3b.mongodb.net/armarios',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
    }catch(err){
        console.log("Conexion a la base de datos con errores.");
    }
}

module.exports  = dbConnect