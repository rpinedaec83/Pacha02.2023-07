const db = require("../db/db");
const Enfermero = db.enfermeros;
const Op = db.Sequelize.Op;

// Create and Save a new Enfermero
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Enfermero
    const enfermero = {
      nombre: req.body.nombre,
      telefono: req.body.telefono
    };
  
    // Save Enfermero in the database
    Enfermero.create(enfermero)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Enfermero."
        });
      });
};

exports.findAll = (req, res) => {

    Enfermero.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving enfermeros."
      });
    });
  };
  
// Find a single Enfermero with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Enfermero.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Enfermero with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Enfermero with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Enfermero.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Enfermero was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Enfermero with id=${id}. Maybe Enfermero was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Enfermero with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Enfermero.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Enfermero was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Enfermero with id=${id}. Maybe Enfermero was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Enfermero with id=" + id
        });
      });
};