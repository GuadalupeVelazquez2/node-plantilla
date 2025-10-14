const express = require('express');
const router = express.Router();

router.get('/hola', (req, res) => {
  res.send('Hola desde /api/hola');
});

module.exports = router;