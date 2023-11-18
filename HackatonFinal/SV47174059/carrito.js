const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const carrito = [];

app.post('/api/agregar-al-carrito', (req, res) => {
  const { producto, cantidad } = req.body;
  carrito.push({ producto, cantidad });
  res.json({ mensaje: 'Producto agregado al carrito' });
});

app.get('/api/obtener-carrito', (req, res) => {
  res.json(carrito);
});

app.post('/api/realizar-compra', (req, res) => {
  carrito.length = 0;
  res.json({ mensaje: 'Compra realizada con éxito' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
