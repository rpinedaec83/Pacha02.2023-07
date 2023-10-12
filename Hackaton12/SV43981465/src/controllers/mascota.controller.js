const db = require("../db/db");
const Mascota = db.mascotas;
const Op = db.Sequelize.Op;

// Create and Save a new Mascota
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Mascota
    const mascota = {
      nombre: req.body.nombre,
      fechaNacimiento: req.body.fechaNacimiento,
      tipo: req.body.tipo,
      raza: req.body.raza,
      genero: req.body.genero
    };
  
    // Save Mascota in the database
    Mascota.create(mascota)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Mascota."
        });
      });
};

exports.findAll = (req, res) => {

    Mascota.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving mascotas."
      });
    });
  };
  
// Find a single Mascota with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Mascota.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Mascota with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Mascota with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Mascota.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mascota was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Mascota with id=${id}. Maybe Mascota was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Mascota with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Mascota.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mascota was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Mascota with id=${id}. Maybe Mascota was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Mascota with id=" + id
        });
      });
};