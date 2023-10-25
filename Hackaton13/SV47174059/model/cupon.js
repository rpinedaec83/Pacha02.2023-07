const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cupon = sequelize.define('Cupon', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descuento: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  validez: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Cupon;
