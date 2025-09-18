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

      // EJEMPLO: recorrer los servidores
      for (let g of profile.guilds) {
        if (g.owner) {
          console.log(`Eres dueño de: ${g.name}`);
        }
      }

      // Esto es clave: devolver el perfil a Passport
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

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
