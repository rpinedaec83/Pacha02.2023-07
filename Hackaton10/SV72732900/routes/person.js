const express = require("express");
const {getPerson, postPerson, updatePerson, deletePerson} =  require("../controllers/personController")

const router  = express.Router()

router.get("/", getPerson)
router.post("/", postPerson)
router.put("/", updatePerson)
router.delete("/", deletePerson)

module.exports = router;