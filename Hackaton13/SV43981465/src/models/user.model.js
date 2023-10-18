module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
      name: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
    });
    return Usuario;
};