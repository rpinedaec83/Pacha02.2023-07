const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
    res.send("ruta users GET");
});

module.exports = router;