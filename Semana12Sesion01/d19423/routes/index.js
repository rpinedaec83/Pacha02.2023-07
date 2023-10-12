/* Controllers */
const usuariosController = require('../controllers/usuarios');
const juegosController = require('../controllers/juegos');
const participacionController = require('../controllers/participacion');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   // Users of players
	app.post('/api/usuarios/create/username/:username/status/:status', usuariosController.create);
	app.get('/api/usuarios/list', usuariosController.list);
	app.get('/api/usuarios/find/username/:username', usuariosController.find);


	// Games
	app.post('/api/juegos/create', juegosController.create);
	app.get('/api/juegos/list', juegosController.list);
	app.get('/api/juegos/find', juegosController.find);

	// Participations
	app.post('/api/participaciones/create', participacionController.create);
	app.get('/api/participaciones/list', participacionController.list);



};