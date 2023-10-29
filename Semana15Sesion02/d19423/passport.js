const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"811893649447-a17ln4klerbtrt3fh70gr8ghai778n94.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:3000/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));