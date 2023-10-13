module.exports = (sequelize, Sequelize) => {
    const HistorialClinico = sequelize.define("historialclinicos", {
      fecha: {
        type: Sequelize.DATE,
      },
      diagnostico: {
        type: Sequelize.STRING,
      },
      tratamiento: {
        type: Sequelize.STRING,
      },
      mascotaId: {
        type: Sequelize.INTEGER,
      },
      doctorId: {
        type: Sequelize.INTEGER,
      },
      enfermeroId: {
        type: Sequelize.INTEGER,
      },
      operacionId: {
        type: Sequelize.INTEGER,
      },
    });
    return HistorialClinico;
};