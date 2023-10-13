const express = require("express");
const {getArmario, postArmario, updateArmario, deleteArmario} =  require("../controllers/armarioController")

const router  = express.Router()

router.get("/", getArmario)
router.post("/", postArmario)
router.put("/", updateArmario)
router.delete("/", deleteArmario)

module.exports = router;