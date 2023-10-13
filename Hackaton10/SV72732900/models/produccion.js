const mongoose = require("mongoose")

const produccionSchema = mongoose.Schema({
    idArmario:{
        type: String,
        require: true
    },
    idUser:{
        type: String,
        require: true
    },
    qty:{
        type: Number,
        require: true
    },
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('produccion', produccionSchema, 'produccion')