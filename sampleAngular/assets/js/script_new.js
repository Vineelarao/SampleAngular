//var app = angular.module('myApp', []);
//app.controller('myCtrl', function($scope, $http) {
//  $http({
//    method : "GET",
//    url : "data_new.js"
//  }).then(function mySuccess(response) {
//      $scope.myWelcome = response.data;
//    }, function myError(response) {
//      $scope.myWelcome = response.statusText;
//  });
//});


var app = angular.module('myapp' , []);
app.controller('mycntrl' , function($scope, $http){
    $http.get("http://localhost:8081/getData")
   .then(
       function(response){
            $scope.testData = response;
       }, 
       function(response){
         //do nothing
       }
    );
});