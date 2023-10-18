const {DataTypes}  = require("sequelize")
const sequelize = require("./")

const Supplier = sequelize.define('Supplier', {
  Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: false
  }
  ,
  ruc: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
  },
  adress: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  phone:{
    type: DataTypes.STRING(9),
    allowNull: true
  }},
{
  timestamps: true
}
)

module.exports = Supplier;  