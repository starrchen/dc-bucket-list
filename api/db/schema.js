var mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemSchema = new Schema({
  // ofFifty: Number,
  name: String,
  description: String,
  website: String,
  free: Boolean,
  date: String,
  planAhead: Boolean,
  metro: Boolean
});

var ItemModel = mongoose.model("Item", ItemSchema);
