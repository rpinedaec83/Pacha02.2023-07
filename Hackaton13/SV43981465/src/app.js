const express = require("express");
const app = express();
const db = require("./db/db.js");
const {generateToken, verifyToken} = require("./helpers/jwt.js");
//const jwt = require('jsonwebtoken');
//var fs = require("fs"); variable usada para el manejo de fs como BD.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listado de rutas
require("../src/router/user.routes.js")(app);

app.use((req, res, next) => {
    const token = req.header('Authorization');
    console.log('token:', token.split(' ')[1]);
    const validToken = verifyToken(token.split(' ')[1]);
    console.log('validToken:', validToken);
    if(!validToken) {
        return res.status(401).json({ error: 'Acceso no autorizado '});
    }
    next();
});

app.use('/home', (req, res) => {
    res.status(200).json({msg: 'all ok'});
});

// Levanto el servidor con puerto de escucha 3000
const PORT = process.env.PORT || 3013;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Conexión a la DB
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Prueba de req/res al servidor
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hackaton13 application." });
});