const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = {
    secretOrKey: "FJS",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
