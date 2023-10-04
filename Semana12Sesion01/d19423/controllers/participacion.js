const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;
const participacions = require('../models').participacions;
const usuario       = require('../models').usuarios;
const juego         = require('../models').juegos;
module.exports = {
  create(req, res) {
          // Usuario
          const responseUsuario = usuario.findOne({
               where: {
                   [Op.or]: [{
                        username: req.body.usuario
                   },{
                        id: req.body.usuario
                   }]
               }
          });
          console.log(responseUsuario)
          // Juego
          const responseJuego = juego.findOne({
               where: {
                   [Op.or]: [{
                        name: req.body.juego
                   },{
                        id: req.body.juego
                   }]
               }
          });
          console.log(responseUsuario)
          debugger
          Promise
          .all ([responseUsuario, responseJuego])
          .then(responses => {
               console.log(responses[0].id);
               console.log(responses[1].id);
               return participacions
                   .create ({
                        jugador_id: responses[0].id,
                        juego_id: responses[1].id,
                        status: req.body.status, 
                   })
                   .then(participacions => res.status(200).send(participacions))
           })
           .catch(error => {
               console.log(error);
               res.status(400).send(error);
          });
     },
  list(_, res) {
     return participacions.findAll({
           
     })
     .then(participacions => res.status(200).send(participacions))
     .catch(error => {
          console.log(error);
          res.status(400).send(error);
          })
  },

  find (req, res) {
     return participacions.findAll({
          where: {
                id: req.params.id,
          },
          include: [{
                model: usuario,
                as: 'usuarios'
           },{
                model: juego,
                as: 'juegos'
           }]
     })
     .then(participacions => res.status(200).send(participacions))
     .catch(error => res.status(400).send(error))
  },
};
