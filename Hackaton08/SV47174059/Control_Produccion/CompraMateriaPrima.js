// models/CompraMateriaPrima.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CompraMateriaPrima = sequelize.define('CompraMateriaPrima', {
  CompraMateriaPrimaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  MateriaPrimaID: DataTypes.INTEGER,
  Fecha: DataTypes.DATE,
  Cantidad: DataTypes.INTEGER,
  PrecioTotal: DataTypes.DECIMAL(10, 2),
});

module.exports = CompraMateriaPrima;



// routes/compraMateriaPrima.js
const express = require('express');
const router = express.Router();
const CompraMateriaPrima = require('../models/CompraMateriaPrima');

// Define las rutas y controladores aquí

module.exports = router;




// routes/compraMateriaPrima.js
const express = require('express');
//const router = express.Router();
const compraMateriaPrimaController = require('../controllers/compraMateriaPrimaController');

// Rutas para Compra de Materia Prima
router.post('/', compraMateriaPrimaController.createCompraMateriaPrima);
router.get('/', compraMateriaPrimaController.getAllComprasMateriaPrima);
router.put('/:id', compraMateriaPrimaController.updateCompraMateriaPrima);
router.delete('/:id', compraMateriaPrimaController.deleteCompraMateriaPrima);

module.exports = router;



