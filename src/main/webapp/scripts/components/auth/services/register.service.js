'use strict';

angular.module('cowork2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


