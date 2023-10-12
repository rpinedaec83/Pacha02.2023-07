module.exports = app => {
    const historialClinico = require("../controllers/historialclinico.controller");
    var router = require("express").Router();

    // Create a new HistorialClinico
    router.post("/", historialClinico.create);
    // Retrieve all HistorialClinico
    router.get("/", historialClinico.findAll);

    // Retrieve a single HistorialClinico with id
    router.get("/:id", historialClinico.findOne);

    // Update a HistorialClinico with id
    router.put("/:id", historialClinico.update);
    
    // Delete a HistorialClinico with id
    router.delete("/:id", historialClinico.delete);

    app.use('/api/historialclinicos', router);
};