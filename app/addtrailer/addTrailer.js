/**
 * Created by avipokhrel on 6/21/17.
 */
'use strict';

angular.module('myApp')

    .controller('AddTrailerCtrl', function ($scope, $location, TrailerService) {

        $scope.trailerData = {};
        $scope.errors = [];

        $scope.addTrailer = function () {

            if ($scope.trailerData != null) {

                TrailerService.save($scope.trailerData).then(function (greeting) {
                    $location.path('home');
                }, function (reason) {
                    $scope.errors.push(reason.data.toString());
                });
            }

        }


    });