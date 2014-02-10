'use strict';

/* Controllers */

function MainCtrl($scope, Client) {
    $scope.clients = Client.query();
    $scope.orderProp = 'lastName';

    $scope.labelStyles = {
        "Needs Attention": "label-danger",
        "On Schedule": "label-success"
    };

    $scope.assignSort = function(n) {

        switch (n) {
            case 1:
                $scope.orderProp = "lastName";
                break;
            case 2:
                $scope.orderProp = "anticipatedCloseDate";
                break;
            case 3:
                $scope.orderProp = "-loanAmount";
                break;
            case 4:
                $scope.orderProp = "-stepsComplete";
                break;
            default:
                $scope.orderProp = "lastName";
        }
    }
};

function ClientCtrl($scope, $routeParams, Client) {
    $scope.client = Client.get({
        clientId: $routeParams.clientId
    }, function(client) {
        $scope.steps = client.steps;
    });

    $scope.labelStyles = {
        "Needs Attention": "label-danger",
        "On Schedule": "label-success",
        "Client Action Pending": "label-warning",
        "Complete": "label-success"
    };



}