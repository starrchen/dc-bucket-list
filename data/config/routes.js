var express = require("express");
var router = express.Router();
var itemsController = require("../data/controllers/itemsController");
var usersController = require("../data/controllers/users");

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
};

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route("/secret")
   .get(authenticatedUser, usersController.secret);

module.exports = router;
