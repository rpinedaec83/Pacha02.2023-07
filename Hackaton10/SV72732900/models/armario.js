const mongoose = require("mongoose")

const armarioSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    description:{
        type: String,
        require: true
    },
    size:{
        type: ["XS", "S", "M", "L", "XL"],
        default: "M"
        },
    qtyFabricacion: {
        idMateria: { type: String, require: true},
        cantMateria: { type: Number, require: true},
        Insumo: [
            {
                idInsumo: {type: String, require: true},
                cantInsumo: {type: Number, require: true}
            }
        ]
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('armario', armarioSchema, 'armario')