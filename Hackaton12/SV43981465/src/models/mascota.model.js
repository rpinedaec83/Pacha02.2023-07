module.exports = (sequelize, Sequelize) => {
    const Mascota = sequelize.define("mascotas", {
      nombre: {
        type: Sequelize.STRING,
      },
      fechaNacimiento: {
        type: Sequelize.DATE,
      },
      tipo: {
        type: Sequelize.ENUM('mamifero', 'ave', 'insecto'),
        default: 'mamifero',
      },
      raza: {
        type: Sequelize.STRING,
      },
      genero: {
        type: Sequelize.STRING,
      },
    });
    return Mascota;
};