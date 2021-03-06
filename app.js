var express = require("express");
var app = express();

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/gwbl");

var bodyParser = require("body-parser");
var session = require("express-session");
var methodOverride = require("method-override");

var hbs = require("hbs");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(methodOverride('_method'));
app.use("*.json", function(req, res, next){
  req.headers.accept = "application/json";
  next();
});

var itemsController = require("./api/controllers/itemsController");
app.use("/", itemsController);

app.get("*", function(req, res){
  res.sendfile("index.html");
});

app.listen(process.env.PORT || 4000, function(){
  console.log("Beep boop -- port 4000");
});
