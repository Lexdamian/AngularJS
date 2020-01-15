
const myApp = angular.module('UserList', ['ngRoute', 'ngMaterial', 'ngMessages'])


    .controller('AppCtrl', ['$scope', '$rootScope', AppCtrl])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/list.html"});

    });

// myApp.controller('ListCtrl', ['$scope', '$http', '$mdDialog', ListCtrl]);
// // myApp.controller('EditCtrl', ['$scope', '$rootScope', EditCtrl]);
// myApp.controller('DialogController', ['$scope', '$mdDialog', DialogController]);



function AppCtrl($scope, $rootScope) {

}

// function EditCtrl($scope, $rootScope) {
//     console.log('EditCtrl');
//     $scope.modalData = {
//         'record': {},
//         'callbackFunc': {},
//     }
//
//     $scope.clonedItem = {};
//
//
//     $rootScope.$on('openModal', function (ev, data) {
//         $('#editModal').modal('show');
//         $scope.modalData = data.data;
//         $scope.clonedItem = $scope.modalData.record;
//     });

    /*
    $scope.$watch('clonedItem', function (newValue, oldValue) {
        $scope.clonedItem = newValue;
        $rootScope.editUser = $scope.clonedItem;
        // console.log('newValue: ', newValue, 'oldValue: ', oldValue);
        // console.log("rootScope: ", $rootScope.editUser);
    }, true);
*/

    <!-- submitting the form and transmit to rootscope the modified user data -->
    // $("#editModal").on('submit', function () {
    //     if ($scope.modalData.callbackFunc)
    //         $scope.modalData.callbackFunc($scope.clonedItem);
    //
    //     $('#editModal').modal('hide');



        // $scope.emailIsValid($scope.clonedItem.email);
        // $scope.emailIsValid($scope.modalData.record.email);

        // $('#editModal').modal('hide');

        // if ($scope.clonedItem !== $scope.editItem) {
        //     $scope.editItem = $scope.clonedItem;
        //     console.log('this: ', $scope.editItem);
        // }
        // $scope.$emit('modifiedUser', {user: $scope.editItem})
        // for (index=0; index < $scope.users.length; index++) {
        //     if ($scope.users[index].id === $scope.editItem.id) {
        //         $scope.users[index] = $scope.editItem;
        //     }
        // };












