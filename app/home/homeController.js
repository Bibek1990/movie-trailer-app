/**
 * Created by avipokhrel on 6/16/17.
 */
'use strict';

angular.module('myApp')

    .controller('HomeCtrl', function ($rootScope, $scope, $location, TrailerService) {
        $scope.trailers = [];
        $scope.errors = [];
        $scope.youtubeTestUrl = "https://www.youtube.com/watch?v=gKR7O5B9qqg";

        retrieveMovie();

        function retrieveMovie() {

            TrailerService.all()
                .then(function (greeting) {
                    $scope.trailers = greeting.data;
                }, function (reason) {
                    $scope.errors.push(reason.data.toString());
                });
        }
    });