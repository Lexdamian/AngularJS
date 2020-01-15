myApp.controller('ListCtrl', ['$scope', '$http', '$mdDialog', ListCtrl]);

function ListCtrl($scope, $http, $mdDialog) {
    console.log('ListCtrl');

    $scope.users = [];


    $http.get("https://jsonplaceholder.typicode.com/users?fbclid=IwAR3d1jLs8QpWXJGsuv1rmbGQ6IRhWMetuB4irSqyP_h15ltS4yqBWcUuX6Y")
        .then((response) =>
            $scope.users = response.data
        ); //Making https request and populate the user list


    $scope.edit = (user) => {

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'JS/controllers/editDialog.html',
            // parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {
                user: angular.copy(user),
            }
        })
            .then(function (result) {
                for (let i = 0; i < $scope.users.length; i++) {
                    if (result.id === $scope.users[i].id) {
                        $scope.users[i] = result;
                    }
                }
            })
    };

}




