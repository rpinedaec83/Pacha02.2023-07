module.exports = app => {
    const operaciones = require("../controllers/operacion.controller");
    var router = require("express").Router();

    // Create a new Operacion
    router.post("/", operaciones.create);
    // Retrieve all Operacion
    router.get("/", operaciones.findAll);

    // Retrieve a single Operacion with id
    router.get("/:id", operaciones.findOne);

    // Update a Operacion with id
    router.put("/:id", operaciones.update);
    
    // Delete a Operacion with id
    router.delete("/:id", operaciones.delete);

    app.use('/api/operaciones', router);
};