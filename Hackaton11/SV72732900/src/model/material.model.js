const {DataTypes}  = require("sequelize")
const sequelize = require(".")

const Material = sequelize.define('Material', {
  Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  wood: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
  }
  ,
  hardness: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null
  },
  origin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0.0
  }
},
{
  timestamps: true
}
)

module.exports = Material;