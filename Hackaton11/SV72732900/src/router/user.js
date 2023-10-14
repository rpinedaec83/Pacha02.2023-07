const express = require("express");
const {getUsers, getUser, postUser} = require("../controller/user.controller") 

const router = express.Router();

router.get("/", getUsers);

router.get("/:userId", getUser);

router.post("/:personId", postUser);

module.exports = router;
