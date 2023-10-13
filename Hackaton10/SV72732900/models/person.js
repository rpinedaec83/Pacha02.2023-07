const mongoose = require("mongoose")

const personSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    lstName:{
        type: String,
        require: true
    },
    Age:{
        type: Number,
        require: true
    },
    dni:{
        type: String,
        require: true,
        },
    direccion:{
        type: String,
        require: true,
    },
    idUbigeo:{
        type: String,
        require: true,
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('person', personSchema, 'person')