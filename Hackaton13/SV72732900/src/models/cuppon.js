const {DataTypes } = require("sequelize");
const sequelize = require("./db");
const { urlencoded } = require("express");  

const Cuppon = sequelize.define("Cuppon", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    percentage: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
    },
    {
        timestamps: false
    }
)

module.exports = Cuppon