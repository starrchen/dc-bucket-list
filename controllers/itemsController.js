var express = require("express");
var router = express.Router();
var ItemModel = require("../models/item");

router.get("/items", function(req, res){
  ItemModel.find({}).then(function(items){
    res.json(items);
  });
});

module.exports = router;
