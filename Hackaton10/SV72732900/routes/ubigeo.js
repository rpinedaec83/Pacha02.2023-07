const express = require("express");
const {getUbigeo, postUbigeo, updateUbigeo, deleteUbigeo} =  require("../controllers/ubigeoController")
const router  = express.Router();

router.get("/", getUbigeo)
router.post("/", postUbigeo)
router.put("/", updateUbigeo)
router.delete("/", deleteUbigeo)

module.exports = router;