const Produccion = require('./models/produccion'); // Importa el modelo de Producción

// Crear nuevo registro de control de producción
function crearRegistroProduccion(datos) {
  const nuevoRegistroProduccion = new Produccion(datos);
  return nuevoRegistroProduccion.save();
}

// Obtener estado actual de producción
function obtenerEstadoProduccion() {
  return Produccion.findOne();
}

// Actualizar estado de armarios en producción y productos terminados
function actualizarEstadoProduccion(id, nuevosDatos) {
  return Produccion.findByIdAndUpdate(id, nuevosDatos, { new: true });
}

// Eliminar registro de control de producción por ID si es necesario
function eliminarRegistroProduccion(id) {
  return Produccion.findByIdAndRemove(id);
}

module.exports = {
  crearRegistroProduccion,
  obtenerEstadoProduccion,
  actualizarEstadoProduccion,
  eliminarRegistroProduccion
};
