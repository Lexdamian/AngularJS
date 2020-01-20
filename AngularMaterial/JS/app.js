const myApp = angular.module('UserList', ['ngRoute', 'ngMaterial', 'ngMessages'])


    .controller('AppCtrl', ['$scope', '$rootScope', AppCtrl])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/list.html"});

    })

    .factory('callRequest', ['$http', function ($http) {
        var url = "https://jsonplaceholder.typicode.com/users?fbclid=IwAR3d1jLs8QpWXJGsuv1rmbGQ6IRhWMetuB4irSqyP_h15ltS4yqBWcUuX6Y";

        var getData = function () {
            return $http.get(url).then((response) => response.data )
        }
        return {
            getData
        }

        }]);


function AppCtrl($scope, $rootScope) {

}














