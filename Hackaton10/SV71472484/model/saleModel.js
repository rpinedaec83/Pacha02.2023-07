//? id Prodcuto, id vendedor, qty
const mongoose = require("mongoose")
const SaleSchema = mongoose.Schema(
  {
    idProduct: {
      type: String,
    },
    idSeller: {
      type: String,
    },
    quantity: {
      type: Number
    }
  }
)

module.exports = mongoose.model('sale', SaleSchema)