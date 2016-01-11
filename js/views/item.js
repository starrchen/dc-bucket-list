App.Views.Item = Backbone.View.extend({
  classname: "item",
  tagName: "div",

  initialize: function(){
    console.log("Item View initialized! :}");

    this.listenTo(this.model, "change", this.render);
    this.template = Handlebars.compile($("#itemTemplate").html());

    this.render();
  },

  render: function(event){
    // App.Routers.gwbl.navigate("_");
    if(event){
      event.preventDefault();
    }
    console.log(this.model);
    this.$el.html(this.template( this.model.toJSON() ));
  }
})
