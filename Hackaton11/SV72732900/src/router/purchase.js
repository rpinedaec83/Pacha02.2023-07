const express = require("express");
const {getPurchases, postPurchase} = require("../controller/purchase.controller") 

const router = express.Router();

router.get("/", getPurchases);
router.post("/:userId", postPurchase);

module.exports = router;