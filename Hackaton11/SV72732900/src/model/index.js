const {Sequelize}  = require("sequelize")

const sequelize = new Sequelize('sv72732900', 'root', 'pachaqtec2023', {
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306
  });

  module.exports = sequelize;