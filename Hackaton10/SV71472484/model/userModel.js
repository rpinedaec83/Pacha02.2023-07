const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    sexo: {
      type: ["Masculino", "Femenino"],
      default: "Masculino"
    },
    rol: {
      type: ["Admin", "Seller"],
      default: "Seller"
    }
  }, {
    timestamps: true,
    versionKey: false
  }
  )

  module.exports = mongoose.model("user", UserSchema)