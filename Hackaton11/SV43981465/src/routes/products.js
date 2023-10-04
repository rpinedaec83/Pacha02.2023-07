const express = require('express');

const router = express.Router();

router.get('/product', (req, res) => {
    res.send("ruta productos GET");
});

module.exports = router;