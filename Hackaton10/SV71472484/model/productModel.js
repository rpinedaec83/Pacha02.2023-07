const mongoose = require("mongoose")

const ProductScheme = mongoose.Schema(
  {
    name: {
      type: String
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number
    },
    tipo: {
      type: ["MateriaPrima", "Insumo"],
      default: "Insumo"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model("product", ProductScheme)