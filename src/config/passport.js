const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      //Comprar existencia de correo del ususario
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: "Not user found" });
      } else {
        //comprobar contraseña
        const passwordMatch = await user.matchPassword(password);
        if (passwordMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "incorrect password" });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
