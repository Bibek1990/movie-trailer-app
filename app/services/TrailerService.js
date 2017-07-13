/**
 * Created by avipokhrel on 6/20/17.
 */
'use strict';

angular.module('myApp')
    .factory('TrailerService', ['$http', function ($http) {
        return {
            all: function () {
                return $http.get('/api/trailer');
            },
            getbyId: function (id) {
                return $http.get('/api/trailer/' + id);
            },
            save: function (trailerObj) {
                return $http.post('/api/trailer/', trailerObj);
            }
        }
    }]);