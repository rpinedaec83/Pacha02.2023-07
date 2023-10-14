const express = require("express");
const {getMaterials, getSupplier, postMaterial} = require("../controller/material.controller") 

const router = express.Router();

router.get("/", getMaterials);

router.get("/supplier", getSupplier);

router.post("/", postMaterial);

module.exports = router;
