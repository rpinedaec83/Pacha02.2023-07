const mongoose = require("mongoose")

const materialSchema = mongoose.Schema({
    tipoMaterial:{
        // type: [null, "Materia", "Insumo"],
        type: ["Materia", "Insumo"],
        require: true,
        // default: null
    },
    precioMaterial: {
        type: Number,
        default: 0.0
    },
    tipoMadera:{
        // type: [null, "Suave", "Duro"],
        type: ["Suave", "Duro"],
        require: true
        // default: null
    },
    natural:{
        // type: [null,"Natural", "Sintetico"],
        type: ["Natural", "Sintetico"],
        require: true
        // default: null
    },
    description:{
        type: String,
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('material', materialSchema, 'material')