module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("cursos", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      frontPage: {
        type: Sequelize.STRING,
      },
      cover: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
      }
    });
    return Curso;
};