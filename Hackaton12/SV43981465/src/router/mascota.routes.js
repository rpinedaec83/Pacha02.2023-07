module.exports = app => {
    const mascotas = require("../controllers/mascota.controller");
    var router = require("express").Router();

    // Create a new Mascota
    router.post("/", mascotas.create);
    // Retrieve all Mascota
    router.get("/", mascotas.findAll);

    // Retrieve a single Mascota with id
    router.get("/:id", mascotas.findOne);

    // Update a Mascota with id
    router.put("/:id", mascotas.update);
    
    // Delete a Mascota with id
    router.delete("/:id", mascotas.delete);

    // Trae todos los tutoriales publicados

    /*router.get("/published/:id", tutorials.findAllPublished);

    router.post("/comment/:id", tutorials.createComment)
    router.post("/tag", tags.create)
    router.get("/tag", tags.findAll)
    router.post("/tag/tutorial", tags.addTutorial)*/

    app.use('/api/mascotas', router);
};