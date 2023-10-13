const db = require("../db/db");
const Procedimiento = db.procedimientos;
const Op = db.Sequelize.Op;

// Create and Save a new Procedimiento
exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Procedimiento
    const procedimiento = {
      descripcion: req.body.descripcion,
      duracion: req.body.duracion
    };
  
    // Save Procedimiento in the database
    Procedimiento.create(procedimiento)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Procedimiento."
        });
      });
};

exports.findAll = (req, res) => {

    Procedimiento.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving procedimientos."
      });
    });
  };
  
// Find a single Procedimiento with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Procedimiento.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Procedimiento with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Procedimiento with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Procedimiento.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Procedimiento was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Procedimiento with id=${id}. Maybe Procedimiento was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Procedimiento with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Procedimiento.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Procedimiento was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Procedimiento with id=${id}. Maybe Procedimiento was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Procedimiento with id=" + id
        });
      });
};