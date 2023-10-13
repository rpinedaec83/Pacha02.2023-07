module.exports = (sequelize, Sequelize) => {
    const Operacion = sequelize.define("operaciones", {
      fecha: {
        type: Sequelize.DATE,
      },
      tipoOperacion: {
        type: Sequelize.STRING,
      },
      notas: {
        type: Sequelize.STRING,
      },
    });
    return Operacion;
};