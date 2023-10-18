module.exports = (sequelize, Sequelize) => {
    const OrdenCompra = sequelize.define("ordenCompras", {
      status: {
        type: Sequelize.ENUM('pending', 'completed', 'canceled'),
        defaultValue: 'pending',
      },
      purchaseDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      couponId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
    return OrdenCompra;
};