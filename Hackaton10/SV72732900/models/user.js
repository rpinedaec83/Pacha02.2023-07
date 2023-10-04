const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    usrName:{
        type: String,
        require: true,
        unique: true,
    },
    psw:{
        type: String,
        require: true
    },
    dni:{
        type: String,
        require: true,
    },
    rol:{
        type: [null, "Administrador", "Maestro"],
        default: null
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('user', userSchema, 'user')