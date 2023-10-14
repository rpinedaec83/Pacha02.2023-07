const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insumosSchema = new Schema({
  nombre: String,
  cantidad: Number,
  precioUnitario: Number,
  // Otros campos según tus necesidades
});

const Insumo = mongoose.model('Insumo', insumosSchema);
module.exports = Insumo;
