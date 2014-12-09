'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MaterialCtrl
 * @description
 * # MaterialCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MaterialCtrl', function($scope) {
  	$scope.atribute = {label: 'popover', class: 'md-raised md-primary md-default-theme', placement: 'right', bodypop: 'Aqui estoy', title: 'Ubica'};
  });

