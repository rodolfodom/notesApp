const usersController = {};
const user = require("../models/User");

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

usersController.signIn = (req, res) => {
  res.send("sifnin");
};

usersController.logOut = (req, res) => {
  res.send("logo out");
};

module.exports = usersController;
