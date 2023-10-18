const express = require("express");
const {getSupplies, postSupply, } = require("../controller/supply.controller") 

const router = express.Router();

router.get("/", getSupplies);

router.post("/", postSupply);

module.exports = router;