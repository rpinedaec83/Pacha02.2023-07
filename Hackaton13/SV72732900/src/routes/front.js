const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/login", (req, res) => {
    res.sendFile(path.join( __dirname, `../pages/login.html`))
})

router.get("/register", (req, res) => {
    res.send(`<html>
    <head>
        <title>Register</title>
    </head>
    <body>
        <h1>Register Form</h1>
        <form method="POST" action="/api/v1/auth/register">
        <label for="fname">User:</label><br>
        <input type="text" id="fname" name="user"><br>
        <label for="lname">Last name:</label><br>
        <input type="password" id="lname" name="psw"><br><br>
        <input type="submit" value="Submit">
        </form> 
    </body>
    </html>`);
})

router.get("/courses", (req, res) => {
    res.sendFile(path.join( __dirname, `../pages/courses.html`))
})


router.get("/gateway", (req, res) => {
    res.sendFile(path.join( __dirname, `../pages/gateway.html`))
})

module.exports = router;