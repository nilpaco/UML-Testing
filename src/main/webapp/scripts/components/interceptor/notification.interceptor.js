 'use strict';

angular.module('cowork2App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-cowork2App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-cowork2App-params')});
                }
                return response;
            }
        };
    });
