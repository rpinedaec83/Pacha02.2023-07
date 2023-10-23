const express = require('express');
const router = express.Router();
const OrdenController = require('../controllers/OrdenController');

// Rutas para el CRUD de órdenes de compra
router.post('/crear', OrdenController.crearOrden);
router.get('/listar', OrdenController.listarOrdenes);
router.put('/actualizar/:id', OrdenController.actualizarOrden);
router.delete('/eliminar/:id', OrdenController.eliminarOrden);

module.exports = router;
