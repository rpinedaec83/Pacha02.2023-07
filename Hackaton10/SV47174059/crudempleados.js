const Empleado = require('./models/empleado'); // Importa el modelo de Empleado

// Contratar un nuevo empleado
function contratarEmpleado(datos) {
  const nuevoEmpleado = new Empleado(datos);
  return nuevoEmpleado.save();
}

// Obtener todos los empleados
function obtenerEmpleados() {
  return Empleado.find();
}

// Actualizar información del empleado por ID
function actualizarEmpleado(id, nuevosDatos) {
  return Empleado.findByIdAndUpdate(id, nuevosDatos, { new: true });
}

// Despedir empleado por ID
function despedirEmpleado(id) {
  return Empleado.findByIdAndRemove(id);
}

module.exports = {
  contratarEmpleado,
  obtenerEmpleados,
  actualizarEmpleado,
  despedirEmpleado
};
