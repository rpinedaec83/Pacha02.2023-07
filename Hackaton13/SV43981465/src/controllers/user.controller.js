const db = require("../db/db");
const User = db.usuarios;
const Op = db.Sequelize.Op;
const {createHash, verifyPassword} = require("../helpers/hashPassword.js");
const {generateToken, verifyToken} = require("../helpers/jwt.js");

// Create and Save a new User
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: await createHash(req.body.password),
      email: req.body.email
    };

    console.log(user.password);

    // Save User in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
};

exports.login = async (req, res) => {

  try {

    const user = {
      email: req.body.email,
      password: req.body.password
    };
    
    const findUser = await User.findOne({
      where: { email: user.email }
    });

    if (!findUser) {
      return res.status(401).json({
        msg: "Credenciales incorrectas"
      });
    }
    
    const passwordIsValid = await verifyPassword(user.password, findUser.password);

    if(!passwordIsValid){
      res.status(500).json({msg: "La contraseña ingresada es incorrecta"})
    }

    const token = generateToken(findUser);

    //console.log(token);

    //res.json({msg: "Inicio de sesión exitosos"});
    res.status(200).json({user: findUser, token});

  }catch (error) {
    res.status(500).json({msg: "Error al ingresar al sistema."});
  }
};
exports.findAll = (req, res) => {

    User.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving users."
      });
    });
};
  
// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};