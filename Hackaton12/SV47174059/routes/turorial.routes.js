module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const tags = require("../controllers/tag.controller.js");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    // Trae todos los tutoriales publicados

    router.get("/published/:id", tutorials.findAllPublished);

    router.post("/comment/:id", tutorials.createComment)
    router.post("/tag", tags.create)
    router.get("/tag", tags.findAll)
    router.post("/tag/tutorial", tags.addTutorial)

    app.use('/api/tutorials', router);
};