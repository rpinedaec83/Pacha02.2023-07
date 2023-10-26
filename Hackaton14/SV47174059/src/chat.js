// Paso 1: Elegir una Base de Datos (MySQL o PostgreSQL)
const mysql = require('mysql'); // Para MySQL
// const pgp = require('pg-promise')(); // Para PostgreSQL
// const db = pgp('postgres://username:password@localhost:5432/database'); // Conexión PostgreSQL

// Paso 2: Configurar la Base de Datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'chatdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida');
});

// Paso 3: Conectar la Aplicación al Backend (Node.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Enviar Consultas
app.post('/consultar', (req, res) => {
  const { consulta, remitente } = req.body;
  const timestamp = new Date().toISOString();
  const sql = 'INSERT INTO consultas (remitente, consulta, fecha) VALUES (?, ?, ?)';
  connection.query(sql, [remitente, consulta, timestamp], (err, result) => {
    if (err) throw err;
    console.log('Consulta enviada correctamente');
    // Lógica para procesar la consulta y obtener una respuesta
    const respuesta = "Gracias por tu consulta. Estamos procesando tu solicitud.";
    res.status(200).json({ respuesta });
  });
});

// Recibir Consultas y Respuestas
app.get('/consultas', (req, res) => {
  const sql = 'SELECT * FROM consultas';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});


// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
