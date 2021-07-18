const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  renderSignInForm,
  signIn,
  signup,
  logOut,
} = require("../controllers/user.controller");

router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", signup);

router.get("/users/signin", renderSignInForm);

router.post("/users/signin", signIn);

router.get("/users/logout", logOut);

module.exports = router;
