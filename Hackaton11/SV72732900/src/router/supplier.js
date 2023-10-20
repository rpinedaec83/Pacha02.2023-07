const express = require("express");
const {getSupplier, getSuppliers, postSupplier} = require("../controller/supplier.controller") 

const router = express.Router();

router.get("/", getSupplier);

router.get("/:supplierId", getSuppliers);

router.post("/", postSupplier);

module.exports = router;