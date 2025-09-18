const router = require('express').Router();
const passport = require('passport');
router.get('/', passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord', { 
    failureRedirect: '/forbidden' 
}), (req, res) => {
  res.redirect("https://tommy-shelby.vercel.app/"); 
});

module.exports = router;