const db = require("../db/db");
const Doctor = db.doctores;
const Op = db.Sequelize.Op;

// Create and Save a new Doctor
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Doctor
    const doctor = {
      nombre: req.body.nombre,
      especializacion: req.body.especializacion,
      telefono: req.body.telefono,
      correo: req.body.correo
    };
  
    // Save Doctor in the database
    Doctor.create(doctor)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Doctor."
        });
      });
};

exports.findAll = (req, res) => {

    Doctor.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving doctores."
      });
    });
  };
  
// Find a single Doctor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Doctor.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Doctor with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Doctor with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Doctor.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Doctor was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Doctor with id=${id}. Maybe Doctor was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Doctor with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Doctor.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Doctor was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Doctor with id=${id}. Maybe Doctor was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Doctor with id=" + id
        });
      });
};