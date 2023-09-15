const pool = require('./database'); // Importa la pool de conexiones

async function consultarDatosDeTabla() {
  try {
    const result = await pool.query('SELECT * FROM TuTabla');
    return result.recordset; // Retorna el resultado de la consulta
  } catch (error) {
    console.error('Error en la consulta:', error);
    throw error; // Lanza el error para que sea manejado en el lugar donde se llama la función
  }
}

module.exports = {
  consultarDatosDeTabla, // Exporta la función para ser utilizada en otros archivos
};