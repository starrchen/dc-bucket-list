App.Models.Item = Backbone.Model.extend({
  urlRoot: "http://localhost:4000/items",

  initialize: function(){
    console.log("New Item Model created! :D");
  }
})
