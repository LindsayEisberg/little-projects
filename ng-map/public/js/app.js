// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl', 'queryCtrl', 'geolocation', 'gservice', 'ngRoute'])

  //configures angular routing --showing the relevant view and controller when needed
  .config(function($routeProvider){

    //Join Team Control Panel
    $routeProvider.when('/join', {
      controller: 'addCtrl',
      templateUrl: 'partials/addForm.html',

      //find teamates control panel
    }).when('/find', {
      controller: 'queryCtrl',
      templateUrl: 'partials/queryForm.html',

      //all else forward to the join panel
    }).otherwise({redirectTo: '/join'})
  });