const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Base de datos simulada (reemplazar con una base de datos real)
const historialComprasDB = [
  { id: 1, producto: 'Producto 1', precio: 50.00, fecha: '2023-11-18' },
  { id: 2, producto: 'Producto 2', precio: 75.00, fecha: '2023-11-17' },
  // Agregar más registros según la estructura necesaria
];

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// Endpoint para obtener el historial de compras del usuario
app.get('/api/mis-compras/:usuarioId', (req, res) => {
  const usuarioId = parseInt(req.params.usuarioId);

  // Filtrar historial de compras por usuarioId
  const historialUsuario = historialComprasDB.filter((compra) => compra.usuarioId === usuarioId);

  res.json(historialUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
