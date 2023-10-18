const db = require("../db/db");
const Cupon = db.cupones;
const Op = db.Sequelize.Op;

// Create and Save a new Cupon
exports.create = (req, res) => {
    // Validate request
    if (!req.body.code) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Cupon
    const cupon = {
      code: req.body.code,
      discount: req.body.discount,
      expirationDate: req.body.expirationDate,
      maxUse: req.body.maxUse
    };
  
    // Save Curso in the database
    Cupon.create(cupon)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Cupon."
        });
      });
};

exports.findAll = (req, res) => {

    Cupon.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving cupones."
      });
    });
  };
  
// Find a single Cupon with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Cupon.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Cupon with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cupon with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Cupon.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cupon was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cupon with id=${id}. Maybe Cupon was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cupon with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Cupon.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cupon was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Cupon with id=${id}. Maybe Cupon was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Cupon with id=" + id
        });
      });
};