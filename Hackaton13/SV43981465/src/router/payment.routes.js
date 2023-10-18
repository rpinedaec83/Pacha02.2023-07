module.exports = app => {
    const payments = require("../controllers/payment.controller");
    var router = require("express").Router();

    // Register a new Payment
    router.post("/", payments.create);
    
    // Retrieve all Payment
    router.get("/", payments.findAll);

    // Retrieve a single Payment with id
    router.get("/:id", payments.findOne);

    // Update a Payment with id
    router.put("/:id", payments.update);
    
    // Delete a Payment with id
    router.delete("/:id", payments.delete);

    app.use('/api/payments', router);
};