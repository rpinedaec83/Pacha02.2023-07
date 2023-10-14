const {DataTypes}  = require("sequelize")
const Person = require("./model/person.model")
const User = require("./model/user.model")
const Supplier = require("./model/supplier.model")
const Material = require("./model/material.model")
const Supply = require("./model/supply.model")
const Purchase = require("./model/purchase.model")

// Relacion usuario / persona
Person.hasOne(User, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
User.belongsTo(Person, {
  foreignKey: {
    unique: true
  }
})

// Relacion proveedor / material
// considerando que el proveedor solo tiene un material

Material.hasOne(Supplier, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
Supplier.belongsTo(Material, {
  foreignKey: {
    unique: true
  }
})

// Relacion proveedor / insumo
// considerando que el proveedor solo tiene un insumo

Supply.hasOne(Supplier, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
    },
onDelete: 'CASCADE',
onUpdate: 'CASCADE'
})

Supplier.belongsTo(Supply, {
foreignKey: {
    unique: true
}
})


// Relacion compra / usuario
// considerando que el proveedor solo tiene un insumo

User.hasMany(Purchase, {
  foreignKey: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: false
  },
onDelete: 'SET NULL',
onUpdate: 'CASCADE'
})

Purchase.belongsTo(User, {
foreignKey: {
  unique: false
}
})

