const User = require("../models/user");

var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

const passportAuth = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};

module.exports = passportAuth;
