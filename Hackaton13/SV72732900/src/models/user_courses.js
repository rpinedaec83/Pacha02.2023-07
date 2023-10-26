const {DataTypes } = require("sequelize");
const sequelize = require("./db");
const { urlencoded } = require("express");

const User_Courses = sequelize.define("User_Courses", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    isPaid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    }
},
    {
        timestamps: false
    }
)


module.exports = User_Courses