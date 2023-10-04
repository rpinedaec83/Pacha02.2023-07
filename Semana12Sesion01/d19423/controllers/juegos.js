const Sequelize = require('sequelize');
const juegos = require('../models').juegos;

module.exports = {
	/**
	 * Create a new juego
	 * 
	 * Methoud: POST
	 * Headers: -
	 * Body: -
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
		// #swagger.tags = ['Games'];
		// #swagger.description = 'Create a new game'
		return juegos
			.findOrCreate({
				where: {
					name: req.body.name,
				},
				defaults: {
					name: req.body.name,
					description: req.body.description,
					status: req.body.status
				}
			})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find all games
	 * 
	 * Example: SELECT * FROM usuarios
	 * 
	 * Methoud: GET
	 * Headers: -
	 * Body: -
	 * 
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		// #swagger.tags = ['Games'];
		// #swagger.description = 'List all the games'
		return juegos
			.findAll({})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find one user in the table games
	 * 
	 * Example: SELECT * FROM juegos WHERE name = 'Pac Man'
	 * 
	 * Methoud: GET
	 * Headers: -
	 * Body: -
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		// #swagger.tags = ['Games'];
		// #swagger.description = 'Find a game'
		return juegos
			.findOne({
				where: {
					name: req.body.name
				}
			})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	}
}