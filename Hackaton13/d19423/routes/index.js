const usuarios = require("../controller/usuarios")
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Example project did not give you access to the api web services',
    }));

    //USER
    app.post('/api/user/login', usuarios.login);
    app.post('/api/user/singup', usuarios.add_user);
}