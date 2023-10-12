const express = require("express");
const {getUser, postUser, updateUser, deleteUser} =  require("../controllers/userController")
const router  = express.Router();

router.get("/", getUser)
router.post("/", postUser)
router.put("/", updateUser)
router.delete("/", deleteUser)

module.exports = router;