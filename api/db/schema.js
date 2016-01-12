var mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemSchema = new Schema({
  name: String,
  description: String,
  website: String,
  price: String,
  date: String
});

var ItemModel = mongoose.model("Item", ItemSchema);
