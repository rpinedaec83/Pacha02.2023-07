const express = require("express");
const {createSale} = require("../controller/SaleController")
const router = express.Router()

router.get("/", (req, res) => {
  res.send('ruta de ventas!') 
})

router.post("/", createSale)

module.exports = router