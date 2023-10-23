const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');

// Rutas para el CRUD de cursos
router.post('/crear', CursoController.crearCurso);
router.get('/listar', CursoController.listarCursos);
router.get('/detalle/:id', CursoController.detalleCurso);
router.put('/actualizar/:id', CursoController.actualizarCurso);
router.delete('/eliminar/:id', CursoController.eliminarCurso);

module.exports = router;
