const express = require("express")
const User = require("../models/user")
const path = require("path")
const {getHash, verifyHash} = require("../helpers/hash")
const getCourses = require("../controllers/course.controller")

const router = express.Router()

router.get("/", getCourses)


module.exports = router;


