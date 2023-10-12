module.exports = app => {
    const enfermeros = require("../controllers/enfermero.controller");
    var router = require("express").Router();

    // Create a new Enfermero
    router.post("/", enfermeros.create);
    // Retrieve all Enfermero
    router.get("/", enfermeros.findAll);

    // Retrieve a single Enfermero with id
    router.get("/:id", enfermeros.findOne);

    // Update a Enfermero with id
    router.put("/:id", enfermeros.update);
    
    // Delete a Enfermero with id
    router.delete("/:id", enfermeros.delete);

    app.use('/api/enfermeros', router);
};