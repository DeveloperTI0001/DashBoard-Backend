const router = require('express').Router();

router.get('/settings', (req, res) => {
  if (!req.user) return res.redirect('/auth');
  res.json({ mensaje: "Hola desde Settings!", usuario: req.user.username });
});
module.exports = router;