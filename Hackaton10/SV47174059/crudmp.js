const MateriaPrima = require('./models/materiaPrima'); // Importa el modelo de Materia Prima

// Crear nueva materia prima
function crearMateriaPrima(datos) {
  const nuevaMateriaPrima = new MateriaPrima(datos);
  return nuevaMateriaPrima.save();
}

// Obtener todas las materias primas
function obtenerMateriasPrimas() {
  return MateriaPrima.find();
}

// Actualizar materia prima por ID
function actualizarMateriaPrima(id, nuevosDatos) {
  return MateriaPrima.findByIdAndUpdate(id, nuevosDatos, { new: true });
}

// Eliminar materia prima por ID
function eliminarMateriaPrima(id) {
  return MateriaPrima.findByIdAndRemove(id);
}

module.exports = {
  crearMateriaPrima,
  obtenerMateriasPrimas,
  actualizarMateriaPrima,
  eliminarMateriaPrima
};
