const fs = require('fs');
const path = require('path'); // Para manejar rutas de archivos
const usersFilePath = path.join( __dirname + "/" + "../fs/users.json"); // Ruta al archivo users.json

// Controlador para crear un nuevo usuario
exports.create = (req, res) => {
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Error al leer usuarios desde el archivo.'
        });
      }
  
      const users = JSON.parse(data);
  
      // Validación de la solicitud
      if (!req.body.name || !req.body.password || !req.body.profession) {
        return res.status(400).send({
          message: 'Los campos "name", "password" y "profession" son obligatorios.'
        });
      }
  
      // Genera un nuevo ID para el usuario
      const newId = Object.keys(users).length + 1;
  
      // Crea un nuevo usuario con el nuevo ID
      const newUser = {
        name: req.body.name,
        password: req.body.password,
        profession: req.body.profession,
        id: newId
      };
  
      // Agrega el nuevo usuario al objeto de usuarios
      users[`user${newId}`] = newUser;
  
      // Escribe el objeto actualizado de usuarios de nuevo en el archivo
      fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.status(500).send({
            message: 'Error al escribir usuarios en el archivo.'
          });
        }
        res.json(newUser); // Devuelve el nuevo usuario creado
      });
    });
  };
  
  
// Controlador para obtener todos los usuarios
exports.findAll = (req, res) => {
    // Lee el archivo JSON de usuarios
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Error al leer usuarios desde el archivo.'
        });
      }
      const users = JSON.parse(data); // Parsea el contenido del archivo a un objeto JSON
      res.json(users);
    });
};

// Controlador para encontrar un usuario por su clave única
exports.findOne = (req, res) => {
    const userId = req.params.id; // La clave única del usuario

    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Error al leer usuarios desde el archivo.'
        });
      }
  
      const users = JSON.parse(data);
      console.log(users);
      // Buscar el usuario por su clave única
      const user = users[userId];
      console.log(user);
      if (!user) {
        return res.status(404).send({
          message: `No se encontró un usuario con clave única ${userId}.`
        });
      }
  
      res.json(user);
    });
  };
  

// Controlador para actualizar un usuario por su clave única
exports.update = (req, res) => {
    const userId = req.params.id; // La clave única del usuario
  
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Error al leer usuarios desde el archivo.'
        });
      }
  
      const users = JSON.parse(data);
  
      // Buscar el usuario por su clave única
      const user = users[userId];
  
      if (!user) {
        return res.status(404).send({
          message: `No se encontró un usuario con clave única ${userId}.`
        });
      }
  
      // Actualiza el usuario con los datos de la solicitud
      user.name = req.body.name || user.name;
      user.password = req.body.password || user.password;
      user.profession = req.body.profession || user.profession;
  
      // Escribe el objeto actualizado de usuarios de nuevo en el archivo
      fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.status(500).send({
            message: 'Error al escribir usuarios en el archivo.'
          });
        }
        res.send({
          message: `Usuario con clave única ${userId} fue actualizado exitosamente.`
        });
      });
    });
  };
  

// Controlador para eliminar un usuario por su clave única
exports.delete = (req, res) => {
    const userId = req.params.id; // La clave única del usuario
  
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Error al leer usuarios desde el archivo.'
        });
      }
  
      const users = JSON.parse(data);
  
      // Buscar el usuario por su clave única
      const user = users[userId];
  
      if (!user) {
        return res.status(404).send({
          message: `No se encontró un usuario con clave única ${userId}.`
        });
      }
  
      // Elimina el usuario del objeto de usuarios
      delete users[userId];
  
      // Escribe el objeto actualizado de usuarios de nuevo en el archivo
      fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.status(500).send({
            message: 'Error al escribir usuarios en el archivo.'
          });
        }
        res.send({
          message: `Usuario con clave única ${userId} fue eliminado exitosamente.`
        });
      });
    });
};