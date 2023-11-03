const Course = require("../models/course")

const getCourses = async (req, res) => {
    try{
        const courses = await Course.findAll()
        res.status(200).end(JSON.stringify(
            {
                status: 200,
                body: courses,
                message: "All courses founded"
            }
        ))

    }catch(err){
        console.log(err)
    }
}

module.exports = getCourses