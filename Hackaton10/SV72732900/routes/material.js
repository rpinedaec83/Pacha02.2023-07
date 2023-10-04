const express = require("express");
const {getMaterial, postMaterial, updateMaterial, deleteMaterial} =  require("../controllers/materialController")

const router  = express.Router()

router.get("/", getMaterial)
router.post("/", postMaterial)
router.put("/", updateMaterial)
router.delete("/", deleteMaterial)

module.exports = router;