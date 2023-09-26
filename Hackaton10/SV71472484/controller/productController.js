const ProductScheme = require("../model/productModel")
const UserScheme = require("../model/userModel")

const getProducts = async (req, res) => {
  const products = await ProductScheme.find()
  res.status(200).json(products)
}

const getProduct = async (req, res) => {
  try {
    const idProduct = req.params.id
    const product = await ProductScheme.find({ _id: idProduct })
    res.status(200).json(product)

  } catch (error) {
    res.status(500).json({ mssage: "No existen productos!" })
  }
}

const createProduct = async (req, res) => {
  try {
    const idSeller = req.params.idSeller;

    const user = await UserScheme.findById({ _id: idSeller })
    console.log(typeof(user.rol), idSeller) 
    if(user.rol[0] === "Seller") {
      const product = ProductScheme(req.body);
      await product.save()
  
      res.status(200).json(product)
  
    } else {
      res.status(500).json({meesage: "Usuario no permitido"})
    }

  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' })
  }
}

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id
    await ProductScheme.findOneAndUpdate({ _id: productId }, req.body)
    const product = await ProductScheme.find({ _id: productId })
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ message: "No se encontro el producto!" })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id
    console.log(productId)
    const producto = await ProductScheme.findByIdAndDelete({ _id: productId })
    console.log(producto)
    res.status(200).json({ message: `producto eliminado correctamente con el id: ${productId}` })
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar un producto." })
  }
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }