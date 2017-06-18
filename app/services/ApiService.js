/**
 * Created by avipokhrel on 6/7/17.
 */
'use strict';

angular.module('myApp')
    .factory('ApiService', ApiService);

function ApiService($http) {
    var as = {};
    var serviceUrl = 'http://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=b1b15e88fa797225412429c1c50c122a1';

    //handles the get operation for a particular url nad params
    as.getNasaData = function () {

        var getRequest = {
            method: 'GET',
            url: serviceUrl
            // params: params
        };

        var promise = $http(getRequest);

        return promise;
    };

    as.getWeatherData = function () {

        var getRequest = {
            method: 'GET',
            url: serviceUrl,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
            }
            // params: params
        };

        var promise = $http(getRequest);

        return promise;
    };

    return as;
}