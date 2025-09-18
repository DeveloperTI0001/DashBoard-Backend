const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'email', 'guilds']
  },
  (accessToken, refreshToken, profile, done) => {
    for (i in profile.guilds) {
        if (profile.guilds[i].owner) {
            console.log(profile.guilds[i].name);
        }
    }
  }
));
