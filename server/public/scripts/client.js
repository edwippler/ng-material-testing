console.log('client.js loaded');

var app = angular.module('mdDemoApp', ['ngMaterial','ui.router']);

app.controller('DemoCtrl', function($scope) {

  $scope.user = {};
  $scope.employmentStatus = ['working','unemployed']
  $scope.creditProducts = ['Credit Cards' ,'Auto Loan' ,'Mortgage' ,'HELOC'];
  $scope.searchTerm;
  $scope.clearSearchTerm = function() {
    $scope.searchTerm = '';
  };

 $scope.vehicle = {options:['Yes', 'No']};
 $scope.numberVehicles = [1, 2, '3+'];
 $scope.miscMessage = 'String cheese is delicious';

})//end app.controller

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('green') // enter text color here
    .dark();
});
