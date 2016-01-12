"use strict";

(function(){
  angular
  .module("gwbl", [
    "ui.router",
    "items"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("itemIndex", {
      url: "/",
      templateUrl: "js/items/index.html",
      controller: "ItemIndexController",
      controllerAs: "ItemIndexViewModel"
    })
  }

}());
