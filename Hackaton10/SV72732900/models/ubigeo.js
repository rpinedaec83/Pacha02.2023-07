const mongoose = require("mongoose")

const ubigeoSchema = mongoose.Schema({
    codigo: 
        {
            codDepartamento: {
                type: Number,
                require: true
            },
            codProvincia: {
                type: Number,
                require: true
            },
            codDistrito: {
                type: Number,
                require: true
            }
        },
    departamento:{
        type: String,
        require: true,
    },
    provincia:{
        type: String,
        require: true
    },
    distrito:{
        type: String,
        require: true,
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('ubigeo', ubigeoSchema, 'ubigeo')