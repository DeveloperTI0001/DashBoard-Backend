const router = require('express').Router();
const passport = require('passport');
const settings = require('./settings');

router.get('/', passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord', { 
    failureRedirect: '/forbidden' 
}), (req, res) => {
  res.redirect('/settings');
});

module.exports = router;