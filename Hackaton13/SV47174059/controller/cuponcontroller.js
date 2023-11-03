const express = require('express');
const router = express.Router();
const CuponController = require('../controllers/CuponController');

// Rutas para el CRUD de cupones de descuento
router.post('/crear', CuponController.crearCupon);
router.get('/listar', CuponController.listarCupones);
router.put('/actualizar/:id', CuponController.actualizarCupon);
router.delete('/eliminar/:id', CuponController.eliminarCupon);

module.exports = router;
