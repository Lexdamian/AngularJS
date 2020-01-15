
const myApp = angular.module('UserList', ['ngRoute', 'ngMaterial', 'ngMessages'])


    .controller('AppCtrl', ['$scope', '$rootScope', AppCtrl])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/list.html"});

    });

function AppCtrl($scope, $rootScope) {

}














