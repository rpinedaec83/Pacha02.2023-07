const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materiaPrimaSchema = new Schema({
  nombre: String,
  cantidad: Number,
  precioUnitario: Number,
  // Otros campos según tus necesidades
});

const MateriaPrima = mongoose.model('MateriaPrima', materiaPrimaSchema);
module.exports = MateriaPrima;
