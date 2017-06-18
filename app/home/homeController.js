/**
 * Created by avipokhrel on 6/16/17.
 */
'use strict';

angular.module('myApp')

    .controller('HomeCtrl', function ($rootScope, $scope, $location, MovieService) {
        $scope.movies = [];
        $scope.errors = [];

        retrieveMovie();

        function retrieveMovie() {

            MovieService.all()
                .then(function (greeting) {
                    $scope.movies = greeting.data;
                }, function (reason) {
                    $scope.errors.push(reason.data.toString());
                });
        }
    });