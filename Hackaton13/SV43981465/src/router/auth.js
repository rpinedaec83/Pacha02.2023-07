module.exports = app => {
    const users = require("../controllers/auth.controller");
    var router = require("express").Router();

    // Register a User
    router.post("/register", users.register);

    // Login a User
    router.post("/login", users.login);
};