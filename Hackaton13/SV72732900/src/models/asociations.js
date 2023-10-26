const {DataTypes} = require("sequelize")
const User = require("./user")
const Course = require("./course")
const User_Courses = require("./user_courses")
const Cuppon = require("./cuppon")

User.belongsToMany(Course, {through: User_Courses})
Course.belongsToMany(User, {through: User_Courses})

Cuppon.hasMany(User_Courses)
User_Courses.belongsTo(Cuppon)