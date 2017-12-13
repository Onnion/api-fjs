const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
    secretOrKey: "FJS",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(params, function (payload, done) {

    if (valid) {
        return done(null, {user: user});
    } else {
        return done(new Error(), null);
    }

});

passport.use(strategy);
