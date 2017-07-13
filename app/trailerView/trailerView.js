/**
 * Created by avipokhrel on 6/22/17.
 */
'use strict';

angular.module('myApp')

    .controller('TrailerViewCtrl', function ($scope, $routeParams, TrailerService, CommentService, $location) {

        $scope.trailer = {};
        $scope.errors = [];
        $scope.comment = {};

        $scope.IsVisible = false;
        $scope.ShowHide = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;
        }


        var trailerId = $routeParams.id;

        retrieveTrailerById(trailerId);

        function retrieveTrailerById(trailerId) {

            TrailerService.getbyId(trailerId)
                .then(function (greeting) {
                    $scope.trailer = greeting.data;
                }, function (reason) {
                    $scope.errors.push(reason.data.toString());
                });
        }

        $scope.addComments = function (id) {

            if ($scope.comment != null) {
                $scope.comment.trailer = id;
                CommentService.save($scope.comment).then(function (greeting) {
                    retrieveTrailerById(id);
                    //$location.path('home');
                    $scope.ShowHide();
                }, function (reason) {
                    $scope.errors.push(reason.data.toString());
                    //display the error/ send the user
                });
            }

        }


    });
