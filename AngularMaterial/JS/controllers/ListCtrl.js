myApp.controller('ListCtrl', ['$scope', '$http', '$mdDialog', 'callRequest', ListCtrl]);

function ListCtrl($scope, $http, $mdDialog, callRequest) {
    console.log('ListCtrl');

    $scope.users = [];

    console.log($scope.users);

    ($scope.listRequest = function () {
        callRequest.getData()
            .then(function (response) {
                $scope.users = response;
                for (var i = 0; i < $scope.users.length; i++) {
                    var $spl = $scope.users[i].name.split(" ");
                    $scope.users[i].name_struct = {
                        "forWho": '',
                        "first_name": $spl[0],
                        "last_name": $spl[1]
                    }
                }
            })
        //Making https request and populate the user list
    })();


    $scope.newUser = {
        id: '0',
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: '',
                lgn: ''
            }
        },
        phone: '',
        company: {
            name: "",
            catchPhrase: "",
            bs: "",
        },
        forWho: 'Husband',
        name_struct: '',
        name_struct2: '',
    }


    // $http.get("https://jsonplaceholder.typicode.com/users?fbclid=IwAR3d1jLs8QpWXJGsuv1rmbGQ6IRhWMetuB4irSqyP_h15ltS4yqBWcUuX6Y")
    //     .then((response) => {
    //             $scope.users = response.data;
    //
    //             //passing data to the directive
    //             for (var i=0; i<$scope.users.length; i++)
    //             {
    //                 var $spl = $scope.users[i].name.split(" ");
    //                 $scope.users[i].name_struct ={
    //                     "forWho" :'',
    //                     "first_name":$spl[0],
    //                     "last_name": $spl[1]
    //                 }
    //             }
    //             // console.log($scope.users);
    //         }
    //     ); //Making https request and populate the user list


    $scope.edit = (user) => {
        // console.log('org', user);
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'JS/controllers/editDialog.html',
            parent: angular.element(document.body),
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


    $scope.add = () => {

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'JS/controllers/editDialog.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {
                user: $scope.newUser,
            }
        })
            .then(function (result) {
                if (result.id == 0 && $scope.users[$scope.users.length - 1] > result.id) {
                    result.id = $scope.users[$scope.users.length - 1].id + 1;
                    $scope.users.push(result);

                }
            })

    };


    $scope.delete = function (user) {
        for (let i = 0; i < $scope.users.length; i++ ) {
            if (user.id === $scope.users[i].id) {
                console.log(user);
                $scope.users.splice(i, 1, )
            }
        }

    }

};




