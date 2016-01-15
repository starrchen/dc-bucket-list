var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/gwbl")

var ItemModel = require("../models/item");
ItemModel.remove({}, function(err){
  console.log(err);
});

var bikeride = new ItemModel({
  name: "50 States Bike Ride",
  description: "An annual 62-mile bike ride through all 50 streets named after a state, through all 8 wards of the District. There are 202 turns and an elevation gain of 3,041 feet to discover new parts of town. \n\nAlternatively, the 13 Colonies Ride is a 15-mile downtown ride through the 13 streets named after the original colonies. \n\nRegistration opens in August to WABA Members only.",
  website: "http://www.waba.org/50-states-13-colonies/",
  free: false,
  date: "September",
  planAhead: true,
  metro: false
}).save();

var airforceconcert = new ItemModel({
  name: "Air Force Memorial Concert",
  description: "Not only is the Air Force Memorial spectacular on its own, but it's definitely worth a visit in the summer to catch a free Friday-evening concert. Bring a lawn chair or blanket, or sit on one of the low walls, to listen to Air Force bands like Airmen of Note (jazz), the Air Force Orchestra, or Max Impact (rock). \n\nThe concert series takes place every Friday evening during the summer.",
  website: "http://www.usafband.af.mil/factsheets/factsheet.asp?id=8064",
  free: true,
  date: "June-August",
  planAhead: false,
  metro: true
}).save();

var annapolis = new ItemModel({
  name: "Annapolis Day Trip",
  description: "Maryland's capital is a great place to learn to sail or to enjoy the views of this historic city while cruising around the picturesque Chesapeake Bay.",
  website: "http://www.visitannapolis.org/",
  free: true,
  date: null,
  planAhead: false,
  metro: false
}).save();

var arlingtoncemetery = new ItemModel({
  name: "Arlington National Cemetery",
  description: "Our nation's most famous cemetery pays tribute to those who have served. You don't have to be mourning a loved one to visit the cemetery. See the Changing of the Guard at the Tomb of the Unknown Soldier or JFK's gravesite while getting a unique view of the District.",
  website: "http://www.arlingtoncemetery.mil/",
  free: true,
  date: null,
  planAhead: false,
  metro: true
}).save();

var blossomkites = new ItemModel({
  name: "Blossom Kite Festival",
  description: "See an amazing show of thousands of kites on the National Mall near the Washington Monument set against the Cherry Blossom Festival. This event also features kite-building stations, Japanese kite battles, and trick-flying exhibitions. Relive some childhood joy and bring a kite! You might even get some tips from some of the world's top kite-flyers. Note: Drones are prohibited. \n\nThe 2016 festival will be held on April 2, from 10AM to 4:30PM and is celebrating 50 years of kite flying on the National Mall.",
  website: "http://www.nationalcherryblossomfestival.org/blossom-kite-festival",
  free: true,
  date: "April",
  planAhead: false,
  metro: true
}).save();

var boundarystones = new ItemModel({
  name: "Boundary Stones Tour",
  description: "See the 36 remaining boundary stones of the original 40 that were laid in 1791 to establish the boundaries of the District. Most are protected by metal fences (erected in 1915) and are a great way to get in touch with the city's history, as well as to see the corners and edges of DC.",
  website: "http://www.boundarystones.org/",
  free: true,
  date: null,
  planAhead: false,
  metro: false
}).save();

var cherryblossoms = new ItemModel({
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
  description: "Take the 30N and 30S buses for a unique, 90-minute, 13-mile DIY tour of the District for a really low price. If you grab a window seat at the Friendship Heights end of the line, you can people watch and sightsee in a way that you wouldn't get to riding a traditional tour bus. Keep your eyes peeled for famous DC landmarks like the Washington Monument and the White House, as well as for parks that you can make part of your regular routine and restaurants to try.",
  free: false,
  website: "http://www.wmata.com/bus",
  planAhead: false,
  metro: true
}).save();

var civilwar = new ItemModel({
  name: "Civil War Battlefields",
  description: "It's easy to think of the Civil War as just some hectic part of history. Taking a trip to one of the regional battlefields (Manassas, Antietam, and Gettsburg are worth the drive out to see) helps bring insight and perspective into the human cost of maintaining our nation's values.",
  free: true,
  website: "http://www.nps.gov/search/?affiliate=nps&query=battlefield",
  planAhead: false,
  metro: false
}).save();

var congresscemetery = new ItemModel({
  name: "Congressional Cemetery",
  description: "While a cemetery seems like an odd, maybe morbid, choice for a bucket list, the historic Congressional Cemetery is the final resting place for many important figures in US history, as well as -- as the name suggests -- many former congressmen, who were almost all buried here until the 1830s. Some names you may recognize include John Quincy Adams, John Philip Sousa, J. Edgar Hoover, and Marion Barry.",
  free: true,
  website: "http://www.congressionalcemetery.org",
  planAhead: false,
  metro: true
}).save();

var fords = new ItemModel({
  name: "Ford's Theatre",
  description: "The infamous site of President Lincoln's assassination, Ford's Theatre operates as a working theater, historical monument, museum, and learning center. Not only is this a must-visit for any Lincoln fans, it's a great place for Civil War and drama fans alike with its recently renovated museum focusing on Civil War Washington and its productions of great plays and musicals.",
  free: false,
  website: "http://www.fords.org/",
  planAhead: false,
  metro: true
}).save();

var fourthfireworks = new ItemModel({
  name: "Fourth of July Fireworks on the Mall",
  description: "Don't be scared off by crowds - the National Park Service puts on a truly spectacular pyrotechnic show that most can only catch on TV. In fact, you can avoid the chaos on the Mall by watching along the Mount Vernon Trail or by planning ahead and renting a canoe/kayak from the KEy Bridge Boathouse. Another option is the Iwo Jima memorial in Rosslyn, where you can see the Washington Monument, the Capitol, and the Lincoln Memorial along with the fireworks.",
  free: true,
  date: "July 4th",
  website: "http://www.nps.gov/subjects/nationalmall4th/fireworks.htm",
  planAhead: true,
  metro: true
}).save();

var frederickdouglass = new ItemModel({
  name: "Frederick Douglass House",
  description: "Not only is Cedar Hill a great national park, you can catch an increddible view of the DC skyline that is hard to get anywhere else. Once you've caught your breath, travel back in time learning about Frederick Douglass's time as an abolitionist while touring the meticulously restored rooms of his home. The surrounding historic district is also worth a gander to see the stunning architecture of the centuries-old homes. \n\nNote: Reservations are recommended but not required.",
  free: true,
  website: "http://www.nps.gov/frdo/index.htm",
  planAhead: false,
  metro: true
}).save();

var gwmtvernon = new ItemModel({
  name: "George Washington's Mount Vernon by Boat",
  description: "Seeing any of the by boat is actually something many locals deem too tourist-y to do, but there's no reason that only tourists should be able to enjoy those views! Cruise along the beautiful Potomac River and check out GW's impressive estate while learning about our first president and his era of American history.",
  free: false,
  website: "http://www.mountvernon.org/",
  planAhead: false,
  metro: false
}).save();

var greatfalls = new ItemModel({
  name: "Great Falls Rafting",
  description: "Not only are hikes through Great Falls Park awesome, but being able to see the falls from below is an experience you should try at least once. Whether you're a novice or an Olympian (really!), there's a kayaking route for you.",
  free: false,
  website: "http://www.nps.gov/grfa/planyourvisit/kayaking.htm",
  planAhead: false,
  metro: false
}).save();

var highheel = new ItemModel({
  name: "High Heel Race",
  description: "On the Tuesday before Halloween, come out to 17th Street to see folks dash for the finish line in drag -- yes, heels included. The short race attracts DC politicians and a lot of really great costumes. Consider volunteering if you'd like to avoid elbowing crowds to get a better look.",
  free: false,
  date: "October",
  website: "https://www.facebook.com/17th-Street-High-Heel-Race-293167114030193/",
  planAhead: true,
  metro: true
}).save();

var housedebate = new ItemModel({
  name: "House of Representatives Debate",
  description: "Even though you never tune in to CSPAN, this is one of those truly 'only in Washington' things that can be more interesting than you might think! It's ideal if you can watch reps vote on some big-ticket legislation, because even if you don't make it to the chamber, you'll see the spectacle that is demonstrators outside. \n\nSame-day passes are available from your representative or senator's office when the House is in session.",
  free: true,
  website: "http://www.house.gov/representatives/find/",
  planAhead: true,
  metro: true
}).save();

var inaugural = new ItemModel({
  name: "Inaugural Ball",
  description: "What more is there to say about a lavish party that occurs only once every 4 years? The official inaugural ball is invite-only, so you'll want to start figuring out a way in to take in that Washington glitz and glamor. Regardless of how you feel about politics, if you are able to get an invite or a ticket, you'd be hard-pressed to pass.",
  free: false,
  website: "http://www.inaugural.senate.gov/days-events/days-event/inaugural-ball",
  planAhead: true,
  metro: true
}).save();
