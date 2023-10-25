const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rutas para el registro y el inicio de sesión de usuarios
router.post('/registro', UserController.registrarUsuario);
router.post('/inicio-sesion', UserController.iniciarSesion);

module.exports = router;
