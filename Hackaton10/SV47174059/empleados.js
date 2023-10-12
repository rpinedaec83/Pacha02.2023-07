const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
  nombre: String,
  cargo: String,
  salario: Number,
  // Otros campos según tus necesidades
});

const Empleado = mongoose.model('Empleado', empleadoSchema);
module.exports = Empleado;
