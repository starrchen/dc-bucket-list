App.Collections.BucketList = Backbone.Collection.extend({

  model: App.Models.Item,
  url: "http://localhost:4000/items",

  initialize: function(){
    console.log("New BucketList Collection created! :)");
  }

})
