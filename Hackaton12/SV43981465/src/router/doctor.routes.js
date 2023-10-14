module.exports = app => {
    const doctores = require("../controllers/doctor.controller");
    var router = require("express").Router();

    // Create a new Doctor
    router.post("/", doctores.create);
    // Retrieve all Doctores
    router.get("/", doctores.findAll);

    // Retrieve a single Doctor with id
    router.get("/:id", doctores.findOne);

    // Update a Doctor with id
    router.put("/:id", doctores.update);
    
    // Delete a Doctor with id
    router.delete("/:id", doctores.delete);

    app.use('/api/doctores', router);
};