module.exports = app => {
    const propietarios = require("../controllers/propietario.controller");
    var router = require("express").Router();

    // Create a new Propietario
    router.post("/", propietarios.create);
    // Retrieve all Propietarios
    router.get("/", propietarios.findAll);

    // Retrieve a single Propietario with id
    router.get("/:id", propietarios.findOne);

    // Update a Propietario with id
    router.put("/:id", propietarios.update);
    
    // Delete a Tutorial with id
    router.delete("/:id", propietarios.delete);

    // Trae todos los tutoriales publicados

    /*router.get("/published/:id", tutorials.findAllPublished);

    router.post("/comment/:id", tutorials.createComment)
    router.post("/tag", tags.create)
    router.get("/tag", tags.findAll)
    router.post("/tag/tutorial", tags.addTutorial)*/

    app.use('/api/propietarios', router);
};