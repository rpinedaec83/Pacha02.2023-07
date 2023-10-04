const express = require("express");
const {getProduccion, postProduccion, updateProduccion , deleteProduccion} =  require("../controllers/produccionController")

const router  = express.Router()

router.get("/", getProduccion)
router.post("/", postProduccion)
router.put("/", updateProduccion)
router.delete("/", deleteProduccion)

module.exports = router;