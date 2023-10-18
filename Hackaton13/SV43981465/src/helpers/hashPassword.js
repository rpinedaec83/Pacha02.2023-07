const bcrypt = require('bcrypt');
const saltRounds = 10;

const createHash = (password) => {
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const verifyPassword = async (plainPassword, passwordHashed) => {
    const isValid = await bcrypt.compare(plainPassword, passwordHashed);
    return isValid;
};

module.exports = {createHash, verifyPassword};