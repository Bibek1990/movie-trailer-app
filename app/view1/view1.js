'use strict';

angular.module('myApp')

.controller('View1Ctrl', function($scope, ApiService, $log) {
    $scope.name = 'James Badal';
    $scope.address = 'Fairfax, VA';

    var promise = ApiService.getWeatherData();

    promise.then(function (response) {
        $scope.weatherData = response.data;
    }, function (reason) {
        $log.error("Error retrieving service types.." + reason);
    });
});