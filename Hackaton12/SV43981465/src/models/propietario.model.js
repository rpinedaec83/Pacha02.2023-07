module.exports = (sequelize, Sequelize) => {
    const Propietario = sequelize.define("propietario", {
      nombre: {
        type: Sequelize.STRING,
      },
      correo: {
        type: Sequelize.STRING,
        unique: true,
      },
      telefono: {
        type: Sequelize.INTEGER,
      }
    });
    return Propietario;
};