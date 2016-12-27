(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchStatusController);

LunchStatusController.$inject = ['$scope'];
function LunchStatusController($scope) {
  //set initial values
  $scope.lunchStatus = "";
  $scope.color="text"

  $scope.checkLunchStatus = function () {
    var lunch = $scope.lunch;
    //lunch could be undefined or empty depending on when
    //button pressed
    if(!lunch || lunch ==""){
      $scope.lunchStatus = "Please enter data first";
      $scope.color="text"
    }else{
      var lunchCount = lunch.split(",").length;
      if(lunchCount <= 3){
        $scope.lunchStatus = "Enjoy!";

        //bootstrap class to change font color green
        $scope.color = "text-success"
      }else{
        $scope.lunchStatus = "Too Much!"

        //bootstrap class to change font color green
        $scope.color = "text-danger"
      }
    }
  };
}

})();
