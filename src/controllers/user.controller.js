const usersController = {};
const user = require("../models/User");
const passport = require("passport");

usersController.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

usersController.signup = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];

  console.log(password, confirm_password);

  if (password != confirm_password) {
    errors.push({ text: "password does not match" });
  }

  if (password.length < 4) {
    errors.push({ text: "Password must be at least 4 characters" });
  }

  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
    });
  } else {
    const emailUser = await user.findOne({ email });
    if (emailUser) {
      req.flash("error_msg", "This email is already in use");
      res.redirect("/users/signup");
    } else {
      const newUser = new user({ name, password, email });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "User registered succesfully");
      res.redirect("/users/signin");
    }
  }
};

usersController.renderSignInForm = (req, res) => {
  res.render("users/signin");
};

usersController.signIn = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

usersController.logOut = (req, res) => {
  req.logout();
  req.flash("success_msg", "Session closed successfully");
  res.redirect("/users/signin");
};

module.exports = usersController;
