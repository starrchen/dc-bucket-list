require("../db/schema.js");
var mongoose = require("mongoose");

var ItemModel = mongoose.model("Item");
module.exports = ItemModel;
