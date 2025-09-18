require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5176;
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./auth');
const DiscordStrategy = require('./src/strategies/discordStrategy');

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 60000 * 60 * 24 },
  saveUninitialized: false,
  resave: false, // Añadido para evitar advertencias de sesión
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: "¡Holaaaaa!" });
});

app.get('/settings', (req, res) => {
  if (!req.user) return res.redirect('/auth');
  res.json({ mensaje: "Hola desde Settings!", usuario: req.user });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});