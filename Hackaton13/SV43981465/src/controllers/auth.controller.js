const bcrypt = require('bcrypt');
const {createHash, verifyPassword} = require('../helpers/hashPassword');

// Controlador para el registro de usuarios
exports.register = async (req, res) => {
    const { name, username, password, email } = req.body;
    const hashedPassword = await createHash(password);
    console.log(hashedPassword);

    res.send('Registro');

};