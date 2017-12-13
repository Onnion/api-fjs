var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("./config");

var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {

  var strategy = new Strategy(params, function(payload, done) {

    var user = User.find(payload);
    
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