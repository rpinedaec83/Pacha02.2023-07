const SaleSchema = require("../model/saleModel")
const ProductScheme = require("../model/productModel")
const createSale = async (req, res) => {
  try {

    const product = await ProductScheme.findById({ _id: req.body.idProduct })
    product.quantity  = product.quantity - req.body.quantity;
    product.save()
    const sale = SaleSchema(req.body);
    await sale.save()

    res.status(200).json("sale")

  } catch (error) {
    res.status(500).json({ error: 'Error al crear el sale' })
  }
} 

module.exports = {createSale}