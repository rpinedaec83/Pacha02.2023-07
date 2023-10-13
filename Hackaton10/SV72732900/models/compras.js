const mongoose = require("mongoose")

const compraSchema = mongoose.Schema({
    compras: [
        {
            idMaterial: { type: String, default: null},
            cantMaterial: { type: Number, default: null},
            idInsumo: { type: String, default: null},
            cantInsumo: { type: Number, default: null}
        }
    ],
    
    idUsuario:{
        type: String,
        require: true
    },
    idProveedor:{
        type: String,
        require: true
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('compra', compraSchema, 'compra')