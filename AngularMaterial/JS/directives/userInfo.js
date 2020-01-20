myApp.directive('sum', ['$sce', function ($sce) {

    return {
        restrict: 'E',
        require: '?ngModel',
        scope: {
            modelValue: '=ngModel',
        },

        templateUrl: 'JS/directives/userInfo.html',

        link: function (scope, element, attrs, ngModel) {
            if(!ngModel)
                return;

            var template={
                "forWho" : 'Unknown',
                "first_name" :'',
                "last_name" : ''
             }


            scope.wk_data = scope.modelValue ? angular.copy(scope.modelValue) : template;


            // Listen for change events to enable binding
            element.on('blur keyup change', function() {
                scope.$evalAsync(scope.read);
            });

            /*read(); //initialize*/
            scope.read =  function read() {
                // scope.wk_data.first_name = scope.toUpper( scope.wk_data.first_name);
                // scope.wk_data.last_name = scope.toUpper( scope.wk_data.last_name);

                console.log('Directive: ', scope.wk_data)
                ngModel.$setViewValue( scope.wk_data);
            }

            scope.toUpper = function(str)
            {
                var res = str.toUpperCase();
                return res;
            }
        }
    }
}]);


