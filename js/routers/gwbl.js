App.Routers.Gwbl = Backbone.Router.extend({

  routes: {
    "" : "index",
  },

  initialize: function(){
    console.log("Router initialized! :]");

    App.Models.item = new App.Models.Item();
    App.Collections.bucketList = new App.Collections.BucketList();
    App.Views.listView = new App.Views.Item( {model: App.Models.item}, {collection: App.Collections.bucketList} );
  },

  index: function(){
    App.Collections.bucketList.fetch( {reset: true} );
  }
})
