module.exports = (sequelize, Sequelize) => {
    const Procedimiento = sequelize.define("procedimientos", {
      descripcion: {
        type: Sequelize.STRING,
      },
      duracion: {
        type: Sequelize.STRING,
      },
      operacionId: {
        type: Sequelize.INTEGER,
      },
    });
    return Procedimiento;
};