var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/pages/home.html',
    controller: 'homeCtrl'
  }).when('/about', {
    templateUrl: '/pages/about.html',
    controller: 'aboutCtrl'
  });
}]);


app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.message = "Welcome to the home page!";

  $http({
    url: '/users',
    method: 'get'
  }).then(function(response){
    $scope.users = response.data;
  });

}]);

app.controller('aboutCtrl', ['$scope', function ($scope) {
  $scope.message = "Welcome to the about page!";

}]);