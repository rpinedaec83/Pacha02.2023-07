const {DataTypes}  = require("sequelize")
const sequelize = require(".")

const Supply = sequelize.define('Supply', {
  Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  description: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: false
  },
  price: {
    type: DataTypes.FLOAT.UNSIGNED,
    allowNull: true,
    defaultValue: 0.0
  }
},
{
  timestamps: true
}
)

module.exports = Supply;  