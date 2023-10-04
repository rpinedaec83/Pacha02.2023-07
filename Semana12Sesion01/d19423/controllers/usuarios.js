const Sequelize     = require('sequelize');
const usuarios       = require('../models').usuarios;
module.exports = {
 create(req, res) {
    return usuarios
        .create ({
             username: req.params.username,
             status: req.params.status
        })
        .then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return usuarios.findAll({})
        .then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return usuarios.findAll({
         where: {
             username: req.params.username,
         }
     })
     .then(usuarios => res.status(200).send(usuarios))
     .catch(error => res.status(400).send(error))
  },
};