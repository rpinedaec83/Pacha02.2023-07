const express = require("express");
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct} = require("../controller/productController")
const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProduct)

router.post("/:idSeller", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

module.exports = router