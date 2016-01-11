App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  console.log("Ready, Freddy!");

  App.Routers.gwbl = new App.Routers.Gwbl();

  Backbone.history.start();
})
