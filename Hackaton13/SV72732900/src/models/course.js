const {DataTypes } = require("sequelize");
const sequelize = require("./db");
const { urlencoded } = require("express");  

const Course = sequelize.define("Course", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    capacity:{
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
    },
    {
        timestamps: false
    }
)

module.exports = Course