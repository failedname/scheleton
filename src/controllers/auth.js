const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const user = require("../models/user");
const db = require("../models/index");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await db.User.findOne({
          where: {
            username,
          },
        });
        if (!user) {
          return done(null, false, { error: "User not found" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false, { error: "Password is incorrect" });
        }
        return done(null, user, { message: "user login sucesfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await db.User.create({
          username,
          password: bcrypt.hashSync(password, 10),
        });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "jwt",
  new JWTstrategy(
    {
      secretOrKey: "top_secret",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
