'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:InfocontrollerCtrl
 * @description
 * # InfocontrollerCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('InfoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  });
