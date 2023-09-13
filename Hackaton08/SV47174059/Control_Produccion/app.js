// app.js
const express = require('express');
const app = express();
const compraMateriaPrimaRouter = require('./routes/compraMateriaPrima');

app.use(express.json());

// Agrega las rutas de cada modelo aquí
app.use('/compra-materia-prima', compraMateriaPrimaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});



// app.js
const express = require('express');
//const app = express();
const compraMateriaPrimaRouter = require
