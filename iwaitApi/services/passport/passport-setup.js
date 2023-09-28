const passport=require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
    console.log(user)
});

passport.deserializeUser(function(user, done) {
  
    done(null, user);
    console.log(user)
  
});
 
passport.use(new GoogleStrategy({
    clientID:     "804225126908-n93b7vg861dqf59cve5f455p4gipag5c.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
console.log(profile)
      return done(null, profile);
   
  }
));