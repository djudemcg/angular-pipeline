'use strict';

/* Services */

angular.module('pipelineServices', ['ngResource']).
factory('Client', function($resource) {
    return $resource('clients/:clientId.json', {}, {
        query: {
            method: 'GET',
            params: {
                clientId: 'clients'
            },
            isArray: true
        }
    });
});