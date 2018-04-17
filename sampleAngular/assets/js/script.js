var app = angular.module('myApp', []);

app.controller('mycntrl', function($scope, $http) {
    $scope.submitData = function() {
        $http.post('http://localhost:8081/postData',
            {"fname":$scope.firstname, "lname": $scope.lastname}
        );
    };
});