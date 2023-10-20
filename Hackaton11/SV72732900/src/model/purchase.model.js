const {DataTypes}  = require("sequelize")
const sequelize = require(".")

const Purchase = sequelize.define('Purchase', {
  Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  qty: {
    type: DataTypes.UUID,
    defaultValue: 0,
    allowNull: false
  }},
{
  timestamps: true
}
)

module.exports = Purchase;