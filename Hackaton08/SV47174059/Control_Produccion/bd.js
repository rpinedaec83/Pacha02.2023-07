const sql = require('mssql');

// Configuración de la conexión a la base de datos
const config = {
  user: 'sa', // Usuario de la base de datos
  password: 'root', // Contraseña del usuario
  server: 'DESKTOP-74J9C9N', // Nombre del servidor SQL
  database: 'CONTROL_PRODUCCION', // Nombre de la base de datos
  options: {
    trustedConnection: false, // Utiliza la autenticación de Windows (si es necesario)
    encrypt: false,
  },
};

// Crear una pool de conexiones
const pool = new sql.ConnectionPool(config);

// Función para conectar a la base de datos
async function connectToDatabase() {
  try {
    await pool.connect();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Llama a la función para conectar a la base de datos
connectToDatabase();

// Exporta la pool de conexiones para usarla en otros módulos
module.exports = pool;



// Ejemplo de consulta SQL
async function consultaEjemplo() {
    try {
      const result = await pool.query('SELECT * FROM Insumos');
      console.log(result.recordset); // Resultado de la consulta
    } catch (error) {
      console.error('Error en la consulta:', error);
    }
  }

  // Llama a la función para realizar una consulta
  consultaEjemplo();


  // config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;


