const express = require('express');

const router = express.Router();

router.get("/nota", (req, res) => {
    res.send("Rota de Notas");
})

module.exports = router;