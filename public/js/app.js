var app = angular.module("hintme", []);
app.controller("AppCtrl", ["$scope", function($scope){
    $scope.message = "Hello World!";
}]);