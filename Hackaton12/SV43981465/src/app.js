const express = require("express");
const cors = require("cors");
const db = require("./db/db.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Levanto el servidor con puerto de escucha 3000
const PORT = process.env.PORT || 3000;

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
    res.json({ message: "Welcome to pachaqtec application." });
  });
  require("../src/router/propietario.routes.js")(app);