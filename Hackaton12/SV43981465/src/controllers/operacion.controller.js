const db = require("../db/db");
const Operacion = db.operaciones;
const Op = db.Sequelize.Op;

// Create and Save a new Operacion
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fecha) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Operacion
    const operacion = {
      nombre: req.body.nombre,
      telefono: req.body.telefono
    };
  
    // Save Operacion in the database
    Operacion.create(operacion)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Operacion."
        });
      });
};

exports.findAll = (req, res) => {

    Operacion.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving operaciones."
      });
    });
  };
  
// Find a single Operacion with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Operacion.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Operacion with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Operacion with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Operacion.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operacion was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Operacion with id=${id}. Maybe Operacion was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Operacion with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Operacion.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operacion was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Operacion with id=${id}. Maybe Operacion was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Operacion with id=" + id
        });
      });
};