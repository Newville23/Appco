'use strict';

/**
 * @ngdoc function
 * @name ahApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ahApp
 */
angular.module('yoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
