const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const historialComprasDB = [
  { id: 1, producto: 'Producto 1', precio: 50.00, fecha: '2023-11-18' },
  { id: 2, producto: 'Producto 2', precio: 75.00, fecha: '2023-11-17' },
];

app.use(bodyParser.json());

app.get('/api/mis-compras/:usuarioId', (req, res) => {
  const usuarioId = parseInt(req.params.usuarioId);
  const historialUsuario = historialComprasDB.filter((compra) => compra.usuarioId === usuarioId);
  res.json(historialUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
