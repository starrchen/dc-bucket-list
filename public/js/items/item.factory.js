"use strict";

(function(){
  angular
  .module("items")
  .factory("ItemFactory", [
    "$resource",
    ItemFactoryFunction
  ]);

  function ItemFactoryFunction($resource){
    return $resource("http://dc-bucket-list.herokuapp.com/items", {});
  }
}());
