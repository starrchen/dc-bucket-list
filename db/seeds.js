var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/gwbl")

var ItemModel = require("../models/item");
ItemModel.remove({}, function(err){
  console.log(err);
});

var bikeride = new ItemModel({
  name: "50 States Bike Ride",
  description: "An annual 62-mile bike ride through all 50 streets named after a state, through all 8 wards of the District. There are 202 turns and an elevation gain of 3,041 feet to discover new parts of town. \n\nAlternatively, the 13 Colonies Ride is a 15-mile downtown ride through the 13 streets named after the original colonies. \n\nRegistration opens in August to WABA Members only.",
  website: "http://www.waba.org/50-states-13-colonies/",
  date: "September"
}).save();

var airforceconcert = new ItemModel({
  name: "Air Force Memorial Concert",
  description: "Not only is the Air Force Memorial spectacular on its own, but it's definitely worth a visit in the summer to catch a free Friday-evening concert. Bring a lawn chair or blanket, or sit on one of the low walls, to listen to Air Force bands like Airmen of Note (jazz), the Air Force Orchestra, or Max Impact (rock). \n\nThe concert series takes place every Friday evening during the summer.",
  price: "Free",
  date: "June-August"
}).save();

var annapolis = new ItemModel({
  name: "Annapolis Day Trip",
  description: "Maryland's capital is a great place to learn to sail or to enjoy the views of this historic city while enjoying the Chesapeake Bay.",
  website: "http://www.visitannapolis.org/"
}).save();

var arlingtoncemetery = new ItemModel({
  name: "Arlington National Cemetery",
  description: "Our nation's most famous cemetery pays tribute to those who have served. You don't have to be mourning a loved one to visit the cemetery. See the Changing of the Guard at the Tomb of the Unknown Soldier or JFK's gravesite while getting a unique view of the District.",
  website: "http://www.arlingtoncemetery.mil/"
}).save();
