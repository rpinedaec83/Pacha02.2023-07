const express = require("express");
const {getCompra, postCompra, updateCompra, deleteCompra} =  require("../controllers/comprasController")

const router  = express.Router()

router.get("/", getCompra)
router.post("/", postCompra)
router.put("/", updateCompra)
router.delete("/", deleteCompra)

module.exports = router;