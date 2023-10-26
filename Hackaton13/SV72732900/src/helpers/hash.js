const bcrypt = require("bcrypt");
const saltRounds = 10;

const getHash = async (plainText ) => {
    const hashText = await bcrypt.hash(plainText, saltRounds);
    return hashText
}

const verifyHash = async (plainText, hashCode) => {
    const areMatched = await bcrypt.compare(plainText, hashCode);
    return areMatched
}


module.exports = {getHash, verifyHash}