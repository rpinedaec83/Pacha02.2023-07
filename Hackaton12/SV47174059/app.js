const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to pachaqtec application." });
  });
  require("./app/routes/turorial.routes")(app);

  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
