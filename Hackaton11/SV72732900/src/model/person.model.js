const {DataTypes}  = require("sequelize")
const sequelize = require("./")

const Person = sequelize.define('Person', {
  Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  dni: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  }
  ,
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  lstName: {
      type: DataTypes.STRING,
      // type: DataTypes.FLOAT(10,2),
      allowNull: false
      // unique: true
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false
  }},
{
  timestamps: true
}
)

module.exports = Person;