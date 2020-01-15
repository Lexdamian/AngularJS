myApp.controller('DialogController', ['$scope', '$mdDialog', 'user', DialogController]);

function DialogController($scope, $mdDialog, user) {

    $scope.editedUser = {};
    $scope.user = user;

    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.closeDialog = function (answer) {
    };


    $scope.save = function () {
        if ($scope.editUser.$valid) {
            $scope.editedUser = user;
            $mdDialog.hide($scope.editedUser);
        }
    }
}