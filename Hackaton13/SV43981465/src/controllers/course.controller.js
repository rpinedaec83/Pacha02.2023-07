const db = require("../db/db");
const Curso = db.cursos;
const Op = db.Sequelize.Op;

// Create and Save a new Curso
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Curso
    const curso = {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      frontPage: req.body.frontPage,
      cover: req.body.cover,
      value: req.body.value
    };
  
    // Save Curso in the database
    Curso.create(curso)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Curso."
        });
      });
};

exports.findAll = (req, res) => {

    Curso.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving cursos."
      });
    });
  };
  
// Find a single Curso with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Curso.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Curso with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Curso with id=" + id
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
  
    Curso.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Curso was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Curso with id=${id}. Maybe Curso was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Curso with id=" + id
        });
      });
  };
  
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Curso.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Curso was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Curso with id=${id}. Maybe Curso was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Curso with id=" + id
        });
      });
};