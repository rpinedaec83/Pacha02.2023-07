const {DataTypes } = require("sequelize");
const sequelize = require("./db");
const { urlencoded } = require("express");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    psw: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }},
    {
        timestamps: true
    }
)


module.exports = User