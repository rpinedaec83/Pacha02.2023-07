const express = require("express");
const {getProveedor, postProveedor, updateProveedor, deleteProveedor} =  require("../controllers/proveedorController")
const router  = express.Router();

router.get("/", getProveedor)
router.post("/", postProveedor)
router.put("/", updateProveedor)
router.delete("/", deleteProveedor)

module.exports = router;