const express = require("express");
const {getPersons, getPerson, postPerson} = require("../controller/person.controller") 

const router = express.Router();

router.get("/", getPersons);

router.get("/:personId", getPerson);

router.post("/", postPerson);

module.exports = router;
