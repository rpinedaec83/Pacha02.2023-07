const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// Configuración de Passport.js para GitHub
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Lógica de almacenamiento en la base de datos o manejo de usuario
    // ...
    return done(null, profile);
  }
));

// Configuración de Passport.js para LinkedIn
passport.use(new LinkedInStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/linkedin/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Lógica de almacenamiento en la base de datos o manejo de usuario
    // ...
    return done(null, profile);
  }
));
