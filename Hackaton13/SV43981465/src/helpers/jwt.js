const jwt = require('jsonwebtoken');
const llave_secreta = 'mi-llave-secreta';

const generateToken = (payload) => {
    const token = jwt.sign({payload}, llave_secreta,
    {expiresIn: '1h'});
    return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, llave_secreta);
        console.log('decoded:', decoded);
        return decoded;
    }catch(error) {
        console.log("Error al verificar token jwt.")
    }
};

module.exports = {generateToken, verifyToken};