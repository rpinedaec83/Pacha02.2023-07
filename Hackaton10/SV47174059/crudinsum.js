const Insumo = require('./models/insumo'); // Importa el modelo de Insumo

// Crear nuevo insumo
function crearInsumo(datos) {
  const nuevoInsumo = new Insumo(datos);
  return nuevoInsumo.save();
}

// Obtener todos los insumos
function obtenerInsumos() {
  return Insumo.find();
}

// Actualizar insumo por ID
function actualizarInsumo(id, nuevosDatos) {
  return Insumo.findByIdAndUpdate(id, nuevosDatos, { new: true });
}

// Eliminar insumo por ID
function eliminarInsumo(id) {
  return Insumo.findByIdAndRemove(id);
}

module.exports = {
  crearInsumo,
  obtenerInsumos,
  actualizarInsumo,
  eliminarInsumo
};
