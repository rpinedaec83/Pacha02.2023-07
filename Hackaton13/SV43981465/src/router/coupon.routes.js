module.exports = app => {
    const coupons = require("../controllers/coupon.controller");
    var router = require("express").Router();

    // Register a new Coupon
    router.post("/", coupons.create);
    
    // Retrieve all Coupon
    router.get("/", coupons.findAll);

    // Retrieve a single Coupon with id
    router.get("/:id", coupons.findOne);

    // Update a Coupon with id
    router.put("/:id", coupons.update);
    
    // Delete a Coupon with id
    router.delete("/:id", coupons.delete);

    app.use('/api/coupons', router);
};