'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'youtube-embed'
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
      .when('/addTrailer', {
          templateUrl: 'addtrailer/add-trailer.html',
          controller: 'AddTrailerCtrl'
      })
      .when('/trailer/:id', {
          templateUrl: 'trailerView/trailer-view.html',
          controller: 'TrailerViewCtrl'
      })

      .otherwise({redirectTo: '/home'});
}]);
