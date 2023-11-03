const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orden = sequelize.define('Orden', {
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Orden;
