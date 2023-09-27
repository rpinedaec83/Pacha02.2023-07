const express = require("express");
const {getUser, getUsers, updateUser, deleteUser, createUser} = require("../controller/userController")
const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)

router.post("/", createUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

module.exports = router