module.exports = (sequelize, Sequelize) => {
    const Doctor = sequelize.define("doctores", {
      nombre: {
        type: Sequelize.STRING,
      },
      especializacion: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.INTEGER,
      },
      correo: {
        type: Sequelize.STRING,
      },
    });
    return Doctor;
};