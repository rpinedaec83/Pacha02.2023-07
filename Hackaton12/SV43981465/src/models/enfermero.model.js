module.exports = (sequelize, Sequelize) => {
    const Enfermero = sequelize.define("enfermeros", {
      nombre: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.INTEGER,
      },
    });
    return Enfermero;
};