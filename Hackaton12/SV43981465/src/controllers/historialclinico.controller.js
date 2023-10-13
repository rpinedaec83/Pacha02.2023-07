const db = require("../db/db");
const HistorialClinico = db.historialclinicos;
const Op = db.Sequelize.Op;

// Create and Save a new HistorialClinico
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fecha) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a HistorialClinico
    const historialclinico = {
      fecha: req.body.fecha,
      diagnostico: req.body.diagnostico,
      tratamiento: req.body.tratamiento
    };
  
    // Save HistorialClinico in the database
    HistorialClinico.create(historialclinico)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the HistorialClinico."
        });
      });
};

exports.findAll = (req, res) => {

    HistorialClinico.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving historialclinicos."
      });
    });
  };
  
// Find a single HistorialClinico with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    HistorialClinico.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find HistorialClinico with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving HistorialClinico with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    HistorialClinico.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HistorialClinico was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update HistorialClinico with id=${id}. Maybe HistorialClinico was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating HistorialClinico with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    HistorialClinico.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HistorialClinico was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete HistorialClinico with id=${id}. Maybe HistorialClinico was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete HistorialClinico with id=" + id
        });
      });
};