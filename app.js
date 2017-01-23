(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var Itemslist=$scope.Items;
  $scope.Message='';
$scope.CheckIfTooMuch = function(Itemslist){ 
    if(!Itemslist )
    {
        $scope.Message="Please enter value first!!";
    }
else{
    var ItemsArray = Itemslist.split(',');
    var ItemsCount = ItemsArray.length;
    
    if(ItemsCount >= 1 && ItemsCount <= 3)
   {
    $scope.Message="Enjoy !!!";
   }
   else 
   {
       $scope.Message="Too Much!!";
   }
}
    
}


}

})();