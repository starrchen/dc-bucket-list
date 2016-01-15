console.log("YUP");

var app = angular.module('gwbl', []);

app.controller('DoneController', function($scope) {
  $scope.clearFilter = function() {
    console.log("CLEAR");
    $scope.query = {};
  };
});
