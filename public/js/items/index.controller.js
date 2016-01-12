"use strict";

(function(){
  angular
  .module("items")
  .controller("ItemIndexController", [
    "ItemFactory",
    ItemIndexControllerFunction
  ]);

  function ItemIndexControllerFunction(ItemFactory){
    this.items = ItemFactory.query();
  }
}());
