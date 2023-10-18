const db = require("../db/db");
const OrdenCompra = db.ordenCompras;
const Op = db.Sequelize.Op;

// Create and Save a new Orden de Compra
exports.create = (req, res) => {

    // Create a Orden de Compra
    const ordencompra = {
      status: req.body.status,
      purchaseDate: req.body.purchaseDate
    };
  
    // Save Orden de Compra in the database
    OrdenCompra.create(ordencompra)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Orden de Compra."
        });
      });
};

exports.findAll = (req, res) => {

    OrdenCompra.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving ordenes de compra."
      });
    });
  };
  
// Find a single Orden de Compra with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    OrdenCompra.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Orden de Compra with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Orden de Compra with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    OrdenCompra.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Orden de Compra was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Orden de Compra with id=${id}. Maybe Orden de Compra was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Orden de Compra with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    OrdenCompra.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Orden de Compra was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Orden de Compra with id=${id}. Maybe Orden de Compra was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Orden de Compra with id=" + id
        });
      });
};