const express = require('express');
const router = express.Router();
const paqueteController = require('./paqueteController'); // Importa el controlador de paquetes

// Ruta para insertar un nuevo paquete
router.post('/paquetes', paqueteController.insertarPaquete);
// Ruta para consultar el estado de un paquete
router.get('/paquetes/:id', paqueteController.consultarEstadoPaquete);


module.exports = router;
