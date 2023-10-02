const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produccionSchema = new Schema({
  armariosEnProduccion: Number,
  productosTerminados: Number,
  // Otros campos según tus necesidades
});

const Produccion = mongoose.model('Produccion', produccionSchema);
module.exports = Produccion;
