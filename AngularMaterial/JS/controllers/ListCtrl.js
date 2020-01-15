myApp.controller('ListCtrl', ['$scope', '$http', '$mdDialog', ListCtrl]);

function ListCtrl($scope, $http, $mdDialog) {
    console.log('ListCtrl');

    $scope.users = [];


    $http.get("https://jsonplaceholder.typicode.com/users?fbclid=IwAR3d1jLs8QpWXJGsuv1rmbGQ6IRhWMetuB4irSqyP_h15ltS4yqBWcUuX6Y")
        .then((response) =>
            $scope.users = response.data
        ); //Making https request and populate the user list



    $scope.edit = (user) => {
         // console.log("Edit", user);

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'JS/controllers/editDialog.html',
            // parent: angular.element(document.body),
            clickOutsideToClose:true,
            locals: {
                user: angular.copy(user),
            }
        })
        .then (function(result) {
                for (let i = 0; i < $scope.users.length; i++) {
                    if(result.id === $scope.users[i].id) {
                        $scope.users[i] = result;
                    }
                }
            })







        // $scope.openModal();
    };
    //Opens the Edit Modal
}





// console.log($scope.users[index]);
// $scope.openModal = function (user) {
//
//     // console.log('Edited User 1: ', $scope.users[index]);
//     let dataPush = {
//         'record': angular.copy(user),
//         'callbackFunc': $scope.callback
//     }
//     $scope.$emit('openModal', {data: dataPush});
// }//openModal
//
// $scope.callback = function (modal_record) {
//     // alert(newValue);
//     for (var i = 0; i < $scope.users.length; i++) {
//         if ($scope.users[i].id === modal_record.id) {
//             $scope.users[i] = angular.copy(modal_record);
//         }
//     }
//     $scope.$apply();
//     // console.log('Edited Users 2: ', $scope.users);
// }//callback function