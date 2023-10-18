const {DataTypes}  = require("sequelize")
const sequelize = require("./")

const User = sequelize.define('User', {
  Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  user: {
      type: DataTypes.STRING,
      allowNull: false
  },
  psw: {
      type: DataTypes.STRING,
      allowNull: false
      // unique: true
  }
    },
  {
    defaultScope: {
      attributes: {
        exclude: ["psw"]
      }
    },
    timestamps: true
  }
  )

module.exports = User;