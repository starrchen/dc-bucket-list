var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/gwbl")

var ItemModel = require("../models/item");
ItemModel.remove({}, function(err){
  console.log(err);
});

var bikeride = new ItemModel({
  // ofFifty: 1,
  name: "50 States Bike Ride",
  description: "An annual 62-mile bike ride through all 50 streets named after a state, through all 8 wards of the District. There are 202 turns and an elevation gain of 3,041 feet to discover new parts of town. \n\nAlternatively, the 13 Colonies Ride is a 15-mile downtown ride through the 13 streets named after the original colonies. \n\nRegistration opens in August to WABA Members only.",
  website: "http://www.waba.org/50-states-13-colonies/",
  free: false,
  date: "September",
  planAhead: true,
  metro: false
}).save();

var airforceconcert = new ItemModel({
  // of-Fifty: 2,
  name: "Air Force Memorial Concert",
  description: "Not only is the Air Force Memorial spectacular on its own, but it's definitely worth a visit in the summer to catch a free Friday-evening concert. Bring a lawn chair or blanket, or sit on one of the low walls, to listen to Air Force bands like Airmen of Note (jazz), the Air Force Orchestra, or Max Impact (rock). \n\nThe concert series takes place every Friday evening during the summer.",
  website: "http://www.usafband.af.mil/factsheets/factsheet.asp?id=8064",
  free: true,
  date: "June-August",
  planAhead: false,
  metro: true
}).save();

var annapolis = new ItemModel({
  // ofFifty: 3,
  name: "Annapolis Day Trip",
  description: "Maryland's capital is a great place to learn to sail or to enjoy the views of this historic city while cruising around the picturesque Chesapeake Bay.",
  website: "http://www.visitannapolis.org/",
  free: true,
  date: null,
  planAhead: false,
  metro: false
}).save();

var arlingtoncemetery = new ItemModel({
  // ofFifty: 4,
  name: "Arlington National Cemetery",
  description: "Our nation's most famous cemetery pays tribute to those who have served. You don't have to be mourning a loved one to visit the cemetery. See the Changing of the Guard at the Tomb of the Unknown Soldier or JFK's gravesite while getting a unique view of the District.",
  website: "http://www.arlingtoncemetery.mil/",
  free: true,
  date: null,
  planAhead: false,
  metro: true
}).save();

var blossomkites = new ItemModel({
  // ofFifty: 5,
  name: "Blossom Kite Festival",
  description: "See an amazing show of thousands of kites on the National Mall near the Washington Monument set against the Cherry Blossom Festival. This event also features kite-building stations, Japanese kite battles, and trick-flying exhibitions. Relive some childhood joy and bring a kite! You might even get some tips from some of the world's top kite-flyers. Note: Drones are prohibited. \n\nThe 2016 festival will be held on April 2, from 10AM to 4:30PM and is celebrating 50 years of kite flying on the National Mall.",
  website: "http://www.nationalcherryblossomfestival.org/blossom-kite-festival",
  free: true,
  date: "April",
  planAhead: false,
  metro: true
}).save();

var boundarystones = new ItemModel({
  // ofFifty: 6,
  name: "Boundary Stones Tour",
  description: "See the 36 remaining boundary stones of the original 40 that were laid in 1791 to establish the boundaries of the District. Most are protected by metal fences (erected in 1915) and are a great way to get in touch with the city's history, as well as to see the corners and edges of DC.",
  website: "http://www.boundarystones.org/",
  free: true,
  date: null,
  planAhead: false,
  metro: false
}).save();

var cherryblossoms = new ItemModel({
  // ofFifty: 7,
  name: "Cherry Blossoms at the Tidal Basin",
  description: "Avoid crowds during DC's hottest tourist season by catching the blossoms in the morning light between dawn and 9AM before heading to work. It's also fun (if a little bit touristy) to get a paddleboat and laze along the basin to admire the cherry blossoms without having to fight past crowds. There are also plenty of spots to see cherry blossoms outside of the Tidal Basin, including Hains Point at East Potomac Park, the Kenwood neighborhood of Bethesda, the National Arboretum, Stanton Park, Dumbarton Oaks, and Meadowlark Botanical Gardens. \n\nThe 2016 Cherry Blossom Festival is scheduled for March 20-April 17",
  website: "http://www.nationalcherryblossomfestival.org",
  free: true,
  date: "March-April",
  planAhead: false,
  metro: true
}).save();

var citysights = new ItemModel({
  name: "City Sights—from a Metrobus",
  description: "Lorem ipsum CHANGE THIS STARR",
  free: false,
  website: "http://www.wmata.com/bus",
  planAhead: false,
  metro: true
}).save();

var civilwar = new ItemModel({
  name: "Civil War Battlefields",
  description: "Lorem ipsum CHANGE THIS STARR",
  free: true,
  website: "http://www.nps.gov/search/?affiliate=nps&query=battlefield",
  planAhead: false,
  metro: false
}).save();

var congresscemetery = new ItemModel({
  name: "Congressional Cemetery",
  description: "Lorem ipsum CHANGE THIS STARR",
  free: true,
  website: "http://www.congressionalcemetery.org",
  planAhead: false,
  metro: true
}).save();

var fords = new ItemModel({
  name: "Ford's Theatre",
  description: "CHANGE THIS STARR",
  free: false,
  website: "http://www.fords.org/",
  planAhead: false,
  metro: true
}).save();

var fourthfireworks = new ItemModel({
  name: "Fourth of July Fireworks on the Mall",
  description: "CHANGE THIS STARR",
  free: true,
  date: "July 4th",
  website: "http://www.nps.gov/subjects/nationalmall4th/fireworks.htm",
  planAhead: true,
  metro: true
}).save();

var frederickdouglass = new ItemModel({
  name: "Frederick Douglass House",
  description: "CHANGE THIS STARR",
  free: true,
  website: "http://www.nps.gov/frdo/index.htm",
  planAhead: false,
  metro: true
}).save();

var gwmtvernon = new ItemModel({
  name: "George Washington's Mount Vernon by Boat",
  description: "CHANGE THIS STARR",
  free: false,
  website: "http://www.mountvernon.org/",
  planAhead: false,
  metro: false
}).save();

var greatfalls = new ItemModel({
  name: "Great Falls Rafting",
  description: "CHANGE THIS STARR",
  free: false,
  website: "http://www.nps.gov/grfa/planyourvisit/kayaking.htm",
  planAhead: false,
  metro: false
}).save();

var highheel = new ItemModel({
  name: "High Heel Race",
  description: "CHANGE THIS STARR",
  free: false,
  date: "October",
  website: "https://www.facebook.com/17th-Street-High-Heel-Race-293167114030193/",
  planAhead: true,
  metro: true
}).save();

var housedebate = new ItemModel({
  name: "House of Representatives Debate",
  description: "CHANGE THIS STARR",
  free: true,
  website: "http://www.house.gov/representatives/find/",
  planAhead: true,
  metro: true
}).save();

var inaugural = new ItemModel({
  name: "Inaugural Ball",
  description: "CHANGE THIS STARR",
  free: false,
  website: "http://www.inaugural.senate.gov/days-events/days-event/inaugural-ball",
  planAhead: true,
  metro: true
}).save();
