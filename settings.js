const router = require('express').Router();

router.get('/settings', (req, res) => {
  res.json({ mensaje: "¡Hola desde Render!" });
});