var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/pages/home.html',
    controller: 'homeCtrl'
  }).when('/about', {
    templateUrl: '/pages/about.html',
    controller: 'aboutCtrl'
  }).when('/users/:id', {
    templateUrl: '/pages/users.html',
    controller: 'usersCtrl'
  });
}]);


app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.message = "Welcome to the home page!";
  $http({
    url: '/users',
    method: 'get'
  }).then(function (response) {
    $scope.users = response.data;
  });

}]);

app.controller('aboutCtrl', ['$scope', function ($scope) {
  $scope.message = "Welcome to the about page!";

}]);


app.controller('usersCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

  // Given:
  // URL: http://localhost:3000/#/Chapter/1/Section/2?search=moby
  // Route: /Chapter/:chapterId/Section/:sectionId
  //
  // Then $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}

  console.log($routeParams);

  $scope.message = "Welcome to the user page! You are looking at user id " + $routeParams.id;

  // go get that one
  $http({
    url: '/users/' +  $routeParams.id,
    method: 'get'
  }).then(function (response) {
    $scope.user = response.data;
  });

}]);