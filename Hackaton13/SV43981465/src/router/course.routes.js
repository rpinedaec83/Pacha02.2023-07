module.exports = app => {
    const courses = require("../controllers/course.controller");
    var router = require("express").Router();

    // Register a new Course
    router.post("/", courses.create);
    
    // Retrieve all Course
    router.get("/", courses.findAll);

    // Retrieve a single Course with id
    router.get("/:id", courses.findOne);

    // Update a Course with id
    router.put("/:id", courses.update);
    
    // Delete a Course with id
    router.delete("/:id", courses.delete);

    app.use('/api/courses', router);
};