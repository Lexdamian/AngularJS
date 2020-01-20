myApp.controller('DialogController', ['$scope', '$mdDialog', 'user', DialogController]);

function DialogController($scope, $mdDialog, user) {

    $scope.user = user;

    $scope.user.name_struct.forWho = 'Husband';

    $scope.user.name_struct2 ={
        "forWho":"Wife",
        "first_name" :'',
        "last_name" : ''
    }


    // $scope.newUser = {
    //     id: '0',
    //     name: "",
    //     username: "",
    //     email: "",
    //     address: {
    //         street: "",
    //         suite: "",
    //         city: "",
    //         zipcode: "",
    //         geo: {
    //             lat: '',
    //             lgn: ''
    //         }
    //     },
    //     phone: '',
    //     company: {
    //         name: "",
    //         catchPhrase: "",
    //         bs: "",
    //     },
    //     forWho: '',
    //     name_struct: '',
    //     name_struct2: '',
    // }


    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.closeDialog = function (answer) {
        $mdDialog.close(answer);
    };



    $scope.save = function () {

        if ($scope.editUser.$valid)  {

            $mdDialog.hide($scope.user);
        }
        //console.log($scope);
        // if ($scope.editUser.$valid)  {
        //     $scope.user.name = $scope.firstname + ' ' + $scope.lastname;
        //     $scope.editedUser = user;
        //     $mdDialog.hide($scope.editedUser);
        // }
    }
}

