const mongoose = require("mongoose")

const proveedorSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    ruc:{
        type: String,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
    telefono:{
        type: String,
    },

    idUbigeo:{
        type: String,
        require: true
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('proveedor', proveedorSchema, 'proveedor')