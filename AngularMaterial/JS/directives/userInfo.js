myApp.directive('userInfo', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'JS/directives/userInfo.html'
    };
});