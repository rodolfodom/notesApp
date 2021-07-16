const usersController = {};

usersController.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

usersController.signup = (req, res) => {
  res.send("sing up");
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
