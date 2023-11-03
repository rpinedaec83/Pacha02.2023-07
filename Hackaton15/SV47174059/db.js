var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pachaqtec2023",
    database: "chatweb"
});
con.connect(function (err) {
    if (err) throw err;
	var sql = "CREATE TABLE IF NOT EXISTS  message (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(2550) , user VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql = "CREATE TABLE IF NOT EXISTS  login (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(250) unique , password VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

module.exports = con;var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pachaqtec2023",
    database: "chatweb"
});
con.connect(function (err) {
    if (err) throw err;
	var sql = "CREATE TABLE IF NOT EXISTS  message (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(2550) , user VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql = "CREATE TABLE IF NOT EXISTS  login (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(250) unique , password VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión a la base de datos MySQL establecida.');

    // Query para seleccionar todos los clientes
    connection.query('SELECT * FROM clientes', (err, results, fields) => {
      if (err) throw err;
      console.log('Clientes:');
      console.log(results);
    });

    // Query para seleccionar todos los registros de tiempo
    connection.query('SELECT * FROM tiempo', (err, results, fields) => {
      if (err) throw err;
      console.log('Registros de Tiempo:');
      console.log(results);
    });

    // Query para seleccionar todos los empleados
    connection.query('SELECT * FROM empleados', (err, results, fields) => {
      if (err) throw err;
      console.log('Empleados:');
      console.log(results);
    });

    // Query para seleccionar todos los transportes
    connection.query('SELECT * FROM transportes', (err, results, fields) => {
      if (err) throw err;
      console.log('Transportes:');
      console.log(results);
    });

    // Cierra la conexión después de ejecutar los queries
    connection.end();
  });


module.exports = con;