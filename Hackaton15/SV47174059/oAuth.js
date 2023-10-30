const passport = require('passport');
const OAuthStrategy = require('passport-oauth').OAuthStrategy;

passport.use('oauth', new OAuthStrategy({

  },
  (token, tokenSecret, profile, done) => {
  
  }
));
