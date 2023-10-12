module.exports = app => {
    const procedimientos = require("../controllers/procedimiento.controller");
    var router = require("express").Router();

    // Create a new Procedimientos
    router.post("/", procedimientos.create);
    // Retrieve all Procedimientos
    router.get("/", procedimientos.findAll);

    // Retrieve a single Procedimientos with id
    router.get("/:id", procedimientos.findOne);

    // Update a Procedimientos with id
    router.put("/:id", procedimientos.update);
    
    // Delete a Procedimientos with id
    router.delete("/:id", procedimientos.delete);

    app.use('/api/procedimientos', router);
};