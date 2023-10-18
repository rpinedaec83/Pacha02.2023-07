module.exports = (sequelize, Sequelize) => {
    const Cupon = sequelize.define("cupones", {
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      discount: {
        type: Sequelize.DECIMAL(5, 2),
      },
      expirationDate: {
        type: Sequelize.DATE,
      },
      maxUse: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
    return Cupon;
};