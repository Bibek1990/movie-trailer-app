'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/nasaView', {
          templateUrl: 'NasaView/nasaView.html',
          controller: 'NasaCtrl'
      })
      .when('/home', {
          templateUrl: 'home/homepage.html',
          controller: 'HomeCtrl'
      })

      .otherwise({redirectTo: '/home'});
}]);
