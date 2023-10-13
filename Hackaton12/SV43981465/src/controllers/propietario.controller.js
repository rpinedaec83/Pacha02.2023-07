const db = require("../db/db");
const Propietario = db.propietarios;
const Op = db.Sequelize.Op;

// Create and Save a new Propietario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Propietario
    const propietario = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      telefono: req.body.telefono
    };
  
    // Save Propietario in the database
    Propietario.create(propietario)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Propietario."
        });
      });
};

exports.findAll = (req, res) => {
    //const nombre = req.query.nombre;
    //var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Propietario.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving propietarios."
      });
    });
  };
  
// Find a single Propietario with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Propietario.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Propietario with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Propietario with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Propietario.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Propietario was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Propietario with id=${id}. Maybe Propietario was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Propietario with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Propietario.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Propietario was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Propietario with id=${id}. Maybe Propietario was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Propietario with id=" + id
        });
      });
};