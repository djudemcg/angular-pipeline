'use strict';


angular.module('pipeline', [
    'pipelineServices',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/clients', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/clients/:clientId', {
                templateUrl: 'views/client.html',
                controller: 'ClientCtrl'
            })
            .otherwise({
                redirectTo: '/clients'
            });
    });