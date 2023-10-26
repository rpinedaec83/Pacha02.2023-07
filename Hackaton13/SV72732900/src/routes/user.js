const express = require("express")
const User = require("../models/user")
const Course = require("../models/course")

// const addCourse = require("../controllers/course.controller")

const router = express.Router()

router.post("/addcourse", async (req, res)=>{
    try{
        const {idUser, idCourse} = req.body
        const user = await User.findByPk(idUser)
        const course = await Course.findByPk(idCourse)
        await user.addCourse(course, {through: { isPaid: false }})
                      
        res.status(201).json({
            status: 201,
            message: "Course is added"
        })

    }catch(err){
        console.log("Hubo un error")
    }
})

router.get("/courses/:id", async (req, res)=>{
    try{
        const idUser = JSON.parse(req.params.id)
        const courses = await User.findAll({
            where: { id: idUser },
            include: Course,
            attributes: {exclude: ["psw"]}
        })
        res.status(200).json({
            status: 200,
            body: courses,
            message: "All Courses founded"
        })

    }catch(err){
        console.log("Hubo un error")
    }
})

module.exports = router;

