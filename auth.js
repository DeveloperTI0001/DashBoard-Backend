const router = require('express').Router();
const passport = require('passport');
const settings = require('./settings');

router.get('/', passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord', { 
    failureRedirect: '/forbidden' 
}), (req, res) => {
  res.status(200).send('OK'); // Envía el código 200 y el texto 'OK'
  res.redirect('/settings');
});

module.exports = router;