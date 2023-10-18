// const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Pago = sequelize.define("pagos", {
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transactionId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending','completed','canceled','failed'),
        defaultValue: 'pending',
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      orderId: {
        type: Sequelize.INTEGER,
        alloNull: false,
      },
    });
    return Pago;
};