const passport = require("passport");
const passportJWT = require("passport-jwt");
const cfg = require("./config");

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function() {

  const strategy = new Strategy(params, function(payload, done) {

    const user = User.find(payload.id);
    
    if (valid) {
      return done(null, {user: user});
    } else {
      return done(new Error("Conta inexistente."), null);
    }
  });

  passport.use(strategy);

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};