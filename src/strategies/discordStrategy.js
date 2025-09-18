const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');

passport.use(new DiscordStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'email', 'guilds']
  },
  (accessToken, refreshToken, profile, done) => {
    try {
      // Aquí puedes guardar info en tu base de datos o loguear
      console.log("Usuario autenticado:", profile.username);
      return done(null, profile);
    } catch (err) {
      return done(err, null);
    }
  }
));

// Serialización (necesaria si usas sesiones con passport)
passport.serializeUser((user, done) => {
  done(null, user);
});
// Deserialización (para recuperar el usuario de la sesión)
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
