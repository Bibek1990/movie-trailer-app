/**
 * Created by avipokhrel on 6/22/17.
 */
'use strict';

angular.module('myApp')
    .factory('CommentService', ['$http', function ($http) {
        return {
            getbyId: function (id) {
                return $http.get('/api/comment/' + id);
            },
            save: function (commentObj) {
                return $http.post('/api/comment/', commentObj);
            }
        }
    }]);